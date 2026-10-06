#!/usr/bin/env node
// Render del video demo: abre index.html en Chrome headless, adelanta la línea de tiempo
// cuadro por cuadro, toma cada cuadro a 1920×1080 y se lo pasa a ffmpeg → MP4 (H.264).
// Sin dependencias de npm: Chrome DevTools Protocol con el WebSocket de Node 22.
//
// Uso:
//   node render.mjs --scene=compras --ffmpeg=/ruta/a/ffmpeg [--out=../_export/x.mp4]
//   node render.mjs --scene=compras --stills=0.5,2,3.5,6 --stills-dir=/tmp/x   (cuadros sueltos en PNG)
//   node render.mjs --scene=acto3 --from=5.4 ...   (el MP4 empieza en ese segundo)
// Sin --scene renderiza el video completo (todas las escenas en orden).
import { spawn } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const [k, ...v] = a.replace(/^--/, '').split('=');
  return [k, v.length ? v.join('=') : true];
}));
const here = path.dirname(fileURLToPath(import.meta.url));
const scene = args.scene || '';
const fps = Number(args.fps || 30);
const ffmpeg = args.ffmpeg || process.env.FFMPEG || 'ffmpeg';
const chrome = args.chrome || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = path.resolve(args.out || path.join(here, '..', '_export', `${scene || 'video-demo'}.mp4`));
const stills = args.stills ? String(args.stills).split(',').map(Number) : null;
const from = Number(args.from || 0);   // segundo en que empieza el MP4 (cortes de revisión que entran desde la escena anterior)
const stillsDir = args['stills-dir'] ? path.resolve(args['stills-dir']) : path.join(here, '..', '_export', 'stills');

// ── Chrome headless ──
const userDir = fs.mkdtempSync(path.join(os.tmpdir(), 'zenet-video-'));
const proc = spawn(chrome, [
  '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${userDir}`,
  '--hide-scrollbars', '--mute-audio', '--no-first-run', '--no-default-browser-check',
  '--force-color-profile=srgb', 'about:blank',
]);
const wsUrl = await new Promise((resolve, reject) => {
  let buf = '';
  proc.stderr.on('data', d => {
    buf += d;
    const m = buf.match(/DevTools listening on (ws:\/\/\S+)/);
    if (m) resolve(m[1]);
  });
  setTimeout(() => reject(new Error('Chrome no arrancó en 20 s')), 20000);
});

// ── cliente mínimo del protocolo ──
const ws = new WebSocket(wsUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));
let seq = 0;
const pending = new Map();
const listeners = [];
ws.addEventListener('message', ev => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
  } else listeners.forEach(l => l(msg));
});
const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
  const id = ++seq;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params, sessionId }));
});

const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (method, params) => send(method, params, sessionId);
const evalJS = async expression => {
  const r = await S('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
  return r.result.value;
};

await S('Page.enable');
await S('Emulation.setDeviceMetricsOverride', { width: 960, height: 540, deviceScaleFactor: 2, mobile: false });
const url = pathToFileURL(path.join(here, 'index.html')).href + '?render=1' + (scene ? `&scene=${scene}` : '');
const loaded = new Promise(r => listeners.push(m => {
  if (m.method === 'Page.loadEventFired' && m.sessionId === sessionId) r();
}));
await S('Page.navigate', { url });
await loaded;
const duration = await evalJS('window.__ready.then(() => window.__duration)');

const shot = async t => {
  await evalJS(`window.__seek(${t})`);
  const { data } = await S('Page.captureScreenshot', { format: 'png', fromSurface: true });
  return Buffer.from(data, 'base64');
};

try {
  if (stills) {
    fs.mkdirSync(stillsDir, { recursive: true });
    for (const t of stills) {
      const file = path.join(stillsDir, `${scene || 'video'}_${t.toFixed(2)}s.png`);
      fs.writeFileSync(file, await shot(Math.min(t, duration - 1 / fps)));
      console.log(file);
    }
  } else {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const ff = spawn(ffmpeg, [
      '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
      '-vf', 'scale=out_color_matrix=bt709:out_range=tv,format=yuv420p',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-tune', 'animation',
      '-x264-params', 'colorprim=bt709:transfer=bt709:colormatrix=bt709',   // etiqueta de color: QuickTime no lo ve deslavado
      '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
      '-movflags', '+faststart', out,
    ], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((resolve, reject) => ff.on('close', c => c === 0 ? resolve() : reject(new Error('ffmpeg salió con ' + c))));
    const frames = Math.round(duration * fps), first = Math.round(from * fps);
    const t0 = Date.now();
    for (let f = first; f < frames; f++) {
      const png = await shot(f / fps);
      if (!ff.stdin.write(png)) await new Promise(r => ff.stdin.once('drain', r));
      if (f % 30 === 29 || f === frames - 1) process.stdout.write(`\r  ${f + 1}/${frames} cuadros · ${((Date.now() - t0) / 1000).toFixed(0)} s`);
    }
    ff.stdin.end();
    await done;
    console.log(`\n${out} · ${(duration - first / fps).toFixed(2)} s · ${(fs.statSync(out).size / 1e6).toFixed(1)} MB`);
  }
} finally {
  ws.close();
  const exited = new Promise(r => proc.once('exit', r));
  proc.kill();
  await exited;   // Chrome escribe en su perfil hasta que cierra
  try { fs.rmSync(userDir, { recursive: true, force: true }); } catch {}
}
