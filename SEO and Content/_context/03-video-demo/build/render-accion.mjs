#!/usr/bin/env node
// Render del video «Zenet en acción»: abre el lab (zenet-landing/lab/v10-video-accion.html?embed=1)
// en Chrome headless y lo graba cuadro por cuadro a 1920×1080 → ffmpeg → MP4 (H.264 Main 4.0).
// El lab no usa GSAP: corre con setTimeout, transiciones y animaciones CSS y SMIL. Para que cada
// cuadro salga exacto, la página corre con un reloj falso: los temporizadores se disparan al avanzar
// el reloj, cada animación CSS se pausa al nacer y se coloca en su tiempo, y el SVG se fija con
// setCurrentTime. Sin dependencias de npm (CDP con el WebSocket de Node 22).
//
// Uso (con el lab servido en http://localhost:8747 desde la raíz de zenet-landing):
//   node render-accion.mjs --ffmpeg=/ruta/a/ffmpeg [--out=../_export/x.mp4] [--dur=53.9]
//   node render-accion.mjs --stills=3,12,25,40,50 --stills-dir=/tmp/x   (cuadros sueltos en PNG)
//   node render-accion.mjs --fmt=v ...   (la versión vertical 4:5 para celular)
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const [k, ...v] = a.replace(/^--/, '').split('=');
  return [k, v.length ? v.join('=') : true];
}));
const here = path.dirname(fileURLToPath(import.meta.url));
const fps = Number(args.fps || 30);
const dur = Number(args.dur || 53.9);   // 6.2 + 12.6 + 8.6 + 16.1 + 10.4 s: termina en blanco y el ciclo vuelve al bloque 1
const ffmpeg = args.ffmpeg || process.env.FFMPEG || 'ffmpeg';
const chrome = args.chrome || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const vertical = args.fmt === 'v';   // --fmt=v → la versión 4:5 para celular (1080×1350)
const url = args.url || 'http://localhost:8747/lab/v10-video-accion.html?embed=1' + (vertical ? '&fmt=v' : '');
const out = path.resolve(args.out || path.join(here, '..', '_export', vertical ? 'Zenet en acción · celular.mp4' : 'Zenet en acción.mp4'));
const stills = args.stills ? String(args.stills).split(',').map(Number) : null;
const stillsDir = args['stills-dir'] ? path.resolve(args['stills-dir']) : path.join(here, '..', '_export', 'stills-accion');

// ── el reloj falso (se inyecta antes que los scripts de la página) ──
const CLOCK = `(() => {
  let now = 0, tid = 1, rid = 1;
  const timers = new Map(), rafs = new Map(), born = new WeakMap(), base = Date.now();
  window.setTimeout = (fn, ms = 0, ...a) => { const id = tid++; timers.set(id, { t: now + Math.max(0, +ms || 0), fn, a }); return id; };
  window.clearTimeout = id => timers.delete(id);
  window.setInterval = (fn, ms = 0, ...a) => { const id = tid++; timers.set(id, { t: now + (+ms || 1), fn, a, iv: +ms || 1 }); return id; };
  window.clearInterval = id => timers.delete(id);
  window.requestAnimationFrame = fn => { const id = rid++; rafs.set(id, fn); return id; };
  window.cancelAnimationFrame = id => rafs.delete(id);
  performance.now = () => now;
  Date.now = () => base + now;
  const sync = () => {   // getAnimations() aplica los estilos pendientes: aquí nacen las transiciones nuevas
    document.getAnimations().forEach(an => { if (!born.has(an)) { born.set(an, now); an.pause(); } an.currentTime = now - born.get(an); });
  };
  window.__step = dt => {
    const target = now + dt;
    for (;;) {
      let best = null, bid = 0;
      for (const [id, r] of timers) if (r.t <= target && (!best || r.t < best.t || (r.t === best.t && id < bid))) { best = r; bid = id; }
      if (!best) break;
      now = best.t;
      if (best.iv) best.t += best.iv; else timers.delete(bid);
      try { typeof best.fn === 'function' ? best.fn(...best.a) : (0, eval)(best.fn); } catch (e) { console.error(e); }
      sync();
    }
    now = target;
    const fns = [...rafs.values()]; rafs.clear(); fns.forEach(f => { try { f(now); } catch (e) {} });
    sync();
    document.querySelectorAll('svg').forEach(s => { if (!s.parentElement?.closest('svg') && s.pauseAnimations) { s.pauseAnimations(); s.setCurrentTime(now / 1000); } });
    return now;
  };
})();`;

// ── Chrome headless ──
const userDir = fs.mkdtempSync(path.join(os.tmpdir(), 'zenet-accion-'));
const proc = spawn(chrome, [
  '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${userDir}`,
  '--hide-scrollbars', '--mute-audio', '--no-first-run', '--no-default-browser-check',
  '--force-color-profile=srgb', 'about:blank',
]);
const wsUrl = await new Promise((resolve, reject) => {
  let buf = '';
  proc.stderr.on('data', d => { buf += d; const m = buf.match(/DevTools listening on (ws:\/\/\S+)/); if (m) resolve(m[1]); });
  setTimeout(() => reject(new Error('Chrome no arrancó en 20 s')), 20000);
});
const ws = new WebSocket(wsUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));
let seq = 0;
const pending = new Map(), listeners = [];
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
await S('Page.addScriptToEvaluateOnNewDocument', { source: CLOCK });
await S('Emulation.setDeviceMetricsOverride', vertical
  ? { width: 432, height: 540, deviceScaleFactor: 2.5, mobile: false }    // 4:5 diseñado a 432×540 → 1080×1350
  : { width: 1440, height: 810, deviceScaleFactor: 4 / 3, mobile: false }); // el tamaño que se aprobó, exportado a 1920×1080
const loaded = new Promise(r => listeners.push(m => { if (m.method === 'Page.loadEventFired' && m.sessionId === sessionId) r(); }));
await S('Page.navigate', { url });
await loaded;
await evalJS('document.fonts.ready.then(() => window.__step(0))');

const shot = async () => Buffer.from((await S('Page.captureScreenshot', { format: 'png', fromSurface: true })).data, 'base64');
const dt = 1000 / fps;

try {
  if (stills) {
    fs.mkdirSync(stillsDir, { recursive: true });
    let t = 0;
    for (const s of [...stills].sort((a, b) => a - b)) {
      while (t + dt / 2 < s * 1000) t = await evalJS(`window.__step(${Math.min(dt, s * 1000 - t)})`);
      const file = path.join(stillsDir, `accion_${s.toFixed(2)}s.png`);
      fs.writeFileSync(file, await shot());
      console.log(file);
    }
  } else {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const ff = spawn(ffmpeg, [
      '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
      '-vf', 'scale=out_color_matrix=bt709:out_range=tv,format=yuv420p',
      '-c:v', 'libx264', '-profile:v', 'main', '-level:v', '4.0', '-preset', 'slow', '-crf', '18', '-tune', 'animation',
      '-x264-params', 'colorprim=bt709:transfer=bt709:colormatrix=bt709',
      '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
      '-movflags', '+faststart', out,
    ], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((resolve, reject) => ff.on('close', c => c === 0 ? resolve() : reject(new Error('ffmpeg salió con ' + c))));
    const frames = Math.round(dur * fps), t0 = Date.now();
    for (let f = 0; f < frames; f++) {
      if (f) await evalJS(`window.__step(${dt})`);
      const png = await shot();
      if (!ff.stdin.write(png)) await new Promise(r => ff.stdin.once('drain', r));
      if (f % 30 === 29 || f === frames - 1) process.stdout.write(`\r  ${f + 1}/${frames} cuadros · ${((Date.now() - t0) / 1000).toFixed(0)} s`);
    }
    ff.stdin.end();
    await done;
    console.log(`\n${out} · ${dur.toFixed(2)} s · ${(fs.statSync(out).size / 1e6).toFixed(1)} MB`);
  }
} finally {
  ws.close();
  const exited = new Promise(r => proc.once('exit', r));
  proc.kill();
  await exited;
  try { fs.rmSync(userDir, { recursive: true, force: true }); } catch {}
}
