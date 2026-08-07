---
name: Landing page · prototipo y diseño
description: El spec de diseño de la landing v3 de Zenet — EN VIVO en zenetapp.com (tag v3.0 · 2026-08-07 · gate levantado por decisión del fundador). 9 secciones, regla "los componentes hablan", pieza estrella = El camino (3 etapas animadas + la consulta), hero sólido con colores compuestos, esquema SVG canónico anti-WebKit, tokens :root teal, Onest+Hanken, grid 12-col 1280. Workflow de edición (scripts python + asserts) y QA (harness lab/_qa.html + Chrome headless). Fuente de verdad del diseño. Agent-readable.
type: seo-content
last_updated: 2026-08-07
status: active
version: 3.0
owner: Alan Bahena
---

# Landing page · prototipo y diseño

> El **spec de diseño** de la landing: cómo está construida y con qué reglas. La estructura vive en `00-estrategia-y-estructura`; el copy en `01-copy` (v0.3 = copy v3); **aquí el diseño**.
>
> **Artefacto vivo:** el repo **`zenet-landing`** (GitHub privado `Alanbahena/zenet-landing` · en `02_Producto-y-Tech/` · fuera de este workspace) desplegado por **Vercel**.
>
> Estado: ✅ **v3 EN VIVO en producción** (`zenetapp.com` · tag `v3.0` · 2026-08-07). El gate original (onboarding + análisis real) fue **levantado por decisión explícita del fundador** el 2026-08-07 — los tags "En construcción" se consideraron honestidad suficiente. ⚠️ El copy habla en presente: **shipear onboarding + análisis real quedó como deuda de producto con prioridad alta.**

---

## 1. Herramienta, repo y workflow

- **Repo:** `zenet-landing` — sitio estático sin build (`index.html` ~950 líneas + `hablemos.html` + `assets/` + `lab/`). HTML+CSS+JS inline, tokens en `:root`.
- **Deploy:** Vercel auto-deploy on push. `main` → producción (`zenetapp.com`) · branches → preview (`zenet-landing-git-<branch>-zenet.vercel.app`). Deployment Protection activa → previews piden auth de Vercel (curl da 302; verificar deploy con `vercel ls` + `vercel inspect <url>` → status Ready).
- **Version control:** git + tags por versión (`v1.0` · `v2.0` · v3 se taggeará al deploy) · branch por versión mayor (`v3` completa en branch · merge `--no-ff` a main al pasar el gate) · specs del workspace usan `_archive/` con date-prefix.
- **`lab/`** — checkpoints de las animaciones (`etapa1` · `etapa2` · `etapa2-b` · `etapa3` · `consulta` · `og-source`) + **`_qa.html`** (harness de QA, ver §8). Patrón: iterar en lab con Alan → la versión ganadora se integra a `index.html` → el lab queda histórico. ⚠️ Los labs pueden divergir del index tras fixes; **el index es la verdad — verificar SIEMPRE el index, no solo el lab.**
- **Workflow de edición (crítico):** scripts Python con `str.replace` + `assert count==1` por edición → commit por sub-paso → push → confirmar Ready → revisión visual de Alan. ⚠️ Lección v3: NUNCA `re.sub` con patrones amplios sobre el CSS (un regex se comió la regla del beat 4 de la Etapa 2 — matcheaba también dentro de otras reglas). `str.replace` exacto con assert, siempre.
- **Al avisar a Alan que revise:** esperar el deploy **Ready ANTES** de avisar, y pedir pestaña privada o `?v=N` (el deploy-lag + caché de Safari causaron dos falsas alarmas de "sigue roto" en el QA de v3).

---

## 2. Decisiones de diseño v3

| Decisión | Detalle |
|---|---|
| **REGLA v3: los componentes hablan, la prosa estorba** | Cada sección cierra en su componente más fuerte; 4 bloques de prosa de remate se eliminaron en el QA. Si un componente ya lo dice, el párrafo sobra. |
| **Sección WHY: construida y ELIMINADA** | Se construyó una sección Why (Sinek) tras el hero, se vio en pantalla y se cortó — repetía el hero. El WHY vive en el hero mismo ("El caos no es el precio…"). Lección: probar en pantalla antes de enamorarse en papel. |
| **Jerarquía de animación** | **El camino = la estrella** (3 etapas + consulta, §5) · hero = respiración · resto = micro-motion (hovers · reveals). Disciplina "2 sistemas animados" heredada de v2: no sobre-animar. |
| **Hero sólido (fix v3)** | Los degradados translúcidos del motivo (alpha .62) se veían "lavados" según tamaño de ventana/zoom. Se reemplazaron por los **colores compuestos** que el ojo veía en prod (la mezcla alpha×fondo calculada): esferas `rgb(247,230,219)` · núcleo `rgb(139,190,177) → rgb(124,161,150)`, alphas .97-.98. Mismo color percibido, estable a cualquier tamaño. |
| **Esquema SVG canónico (lección WebKit)** | Para SVGs de escena estirados: `viewBox` + `preserveAspectRatio="none"` + **strokes/dashes en unidades de viewBox** (p. ej. `stroke-width: 0.3` · `stroke-dasharray: 0.8 1`) + `width/height: 100%` explícitos en CSS. **NUNCA `vector-effect: non-scaling-stroke`** — con escalado no uniforme, WebKit/iPhone descompone la geometría. El esquema de la Etapa 3 (que siempre funcionó) es la referencia. |
| Acento teal · arquitectura térmica · glass · tipografía | Heredados de v2 sin cambios (cf. `Branding/03-visual-identity/02-color.md` v2.0). |

---

## 3. Design tokens (`:root`)

Sin cambios vs v2 (base off-white cálida · acento `#2E6E62`/`#265C52` · teal-400/mint · Onest+Hanken · container 1280). Adición v3 — colores del motivo del hero ya NO derivan de alphas sobre el fondo; son sólidos calculados:

```css
/* Motivo hero (sólidos compuestos · v3) */
.node      → radial-gradient(rgba(255,255,255,.98), rgba(247,230,219,.97))
.node-core → radial-gradient(rgba(139,190,177,.98), rgba(124,161,150,.97))
```

---

## 4. Las 9 secciones (v3)

| # | data-screen-label | Eyebrow | Contenido |
|---|---|---|---|
| 1 | Hero | — | "**El caos no es el precio** de tener un restaurante." (mark en el subrayado) + subhead equipo-de-especialistas ("…desde lo que ya tienes… Tú decides; Zenet lo carga.") + motivo red (núcleo + 6 nodos, ahora sólidos) |
| 2 | El problema | La realidad de hoy | **5 filas `.verb`** (número + chip verbo + cuerpo) con reveal escalonado al entrar (IO · stagger 90ms) |
| 3 | El trato | Cómo trabaja | "El trabajo que más esfuerzo te cuesta —" + **5 puntos del trato**: Lo construye desde lo que ya tienes · Lo ejecuta cada día · Lo junta en un solo cerebro operativo · Lo mantiene vivo · Se lo pasa a quien llega |
| 4 | El camino | El camino | **La pieza estrella** (§5): 3 capítulos (Etapa 1 · 2 · 3, texto + escena animada en 2 columnas) + **la consulta** como cierre. Etapa 3 y consulta llevan `tag-wip` "En construcción — con los primeros Socios Fundadores" |
| 5 | Qué cambia | El cambio | 4 cards `.change` (figura + número) + cierre emocional |
| 6 | Por qué ahora | El momento | Compactada a statement (title + sub con mark) — sin beats editoriales (regla v3) |
| 7 | Por qué Alan | El fundador | Foto + 1ª persona + link LinkedIn (heredada) |
| 8 | La invitación | La invitación | Intro + 4 `.benefit` + panel `.deal` de **3 columnas** (ancho 1040 alineado a benefits) |
| 9 | Cierre | — | Card aurora + glow cursor-follow (texto en capa de composición propia, ver §8) + botón blanco |

---

## 5. El camino — la pieza estrella

Patrón común de las 3 escenas: **beat-loop** — JS timer cicla `data-beat` en la escena, CSS reacciona por atributo, caption sincronizado, snap-reset sin flash (`.eN-snap` + reflow), IO arranca al entrar, `prefers-reduced-motion` → frame final estático. Escenas cuadradas (`aspect-ratio: 1/1`) en ≤640px.

- **Etapa 1 · "Tu operación, entendida"** — 4 beats (durs 3000/2100/1900/6200): documentos regados (cuaderno · Excel · fotos · recetas) flotan → convergen al núcleo → link → **panel de análisis** (filas + barras que se llenan). Captions: "Mandas tus documentos como están" → "Zenet los lee y los entiende" → "Analiza tu operación" → "Tu análisis honesto — con tus números".
- **Etapa 2 · "Tu operación, estandarizada área por área"** — 5 beats: 6 chips de áreas regadas (drift) → se ordenan en hexágono → núcleo aparece → **estrella** (las 6 líneas se dibujan por dashoffset, delays escalonados) → el conjunto se disuelve y el núcleo sube: **2 tarjetas Sucursal** con mini-red + 3 roles cada una, conectadas por ramas punteadas. SVG con el esquema canónico (§2) — coords `viewBox 0 0 100 75` + `pathLength` para el draw.
- **Etapa 3 · "Personalizas tus procesos, y empiezan a correr solos"** — núcleo arriba + ramas a 3 paneles de rutinas (Gerente apertura 7:50 · Cocina checklist · Servicio cierre 11:00) → checkboxes se palomean en cascada → **línea del tiempo del día** (track + progreso 4.6s + 4 chips de hora que se encienden). Cards en top 40/44% · timeline en bottom 11% (aire deliberado entre ambos).
- **La consulta (cierre del camino)** — strip 2 columnas: afirmación ("Sin cursos, sin capacitaciones… si tu equipo sabe usar WhatsApp, sabe usar Zenet") + **chat rotativo** de 3 intercambios (cierre del día · receta de la casa · permiso de salubridad + servicio de la máquina) con burbujas estilo WhatsApp, **typing dots** entre pregunta y respuesta (pop cubic-bezier al aparecer Zenet) y swap suave entre intercambios (ciclo 7.2s).

---

## 6. Componentes / patrones v3 (nuevos sobre v2)

- **Filas verbo (`.verb`)** — la Realidad como lista numerada de verbos (no cards): número + chip + cuerpo, reveal una sola vez (IO unobserve).
- **Capítulos del camino (`.chapter`)** — texto (kicker "Etapa N" + h3 + prosa) y escena (`.chapter-viz .eN-stage`) en 2 columnas; alternan lados; stack en móvil.
- **Tag WIP (`.tag-wip`)** — pill multilinea "En construcción — con los primeros Socios Fundadores" (disciplina pre-PMF sobre Etapa 3 y consulta: intención de producto, no demo fingido).
- **Burbujas de consulta (`.bub-user` / `.bub-zenet`)** — usuario mint der. · Zenet blanca izq. con badge "● Zenet"; typing dots en `.slot` (grid superpuesto para el swap typing→mensaje sin brincos).
- **Escenas de etapa (`.eN-stage`)** — panel off-white-50 con borde y sombra suave; el "teatro" de cada animación.

---

## 7. Movimiento / inventario de scripts

Reglas invariables (heredadas + v3): **cross-browser** (JS timer + CSS transitions + SMIL · nada de scroll-timeline) · `prefers-reduced-motion` en todo → frame final estático · **IO** para arrancar al entrar · beat-loop con snap-reset.

6 scripts inline en `index.html` (en orden): **cta-glow** (coordenadas del brillo, ver §8) · **verb reveal** (IO + stagger) · **e1** · **e2** · **e3** (beat-loops del camino) · **consulta** (ciclo de intercambios). Al portar a Next.js: cada uno → hook/componente con el mismo patrón IO + reduced-motion.

---

## 8. QA — método y lecciones técnicas (v3)

- **Harness de QA (`lab/_qa.html` · untracked):** iframe `src="/"` **servido desde localhost** (un padre `file://` con iframe http es cross-origin y los scripts mueren en silencio) · params `?sel=` (scroll a un selector) `&scene=&beat=` (congelar un beat) · congelar = **barridos repetidos** matando timers del iframe (un solo kill pierde la carrera contra el IO). Captura: Chrome headless `--virtual-time-budget` + `--force-device-scale-factor=2` (retina) + PIL para crops. **Regla de oro: capturar y mirar el propio trabajo (del index) ANTES de pedirle a Alan que mire el suyo.**
- **WebKit + SVG (la saga de la Etapa 2):** `vector-effect: non-scaling-stroke` + `preserveAspectRatio="none"` descompone la geometría en iPhone · `pathLength` solo existe como atributo SVG (no CSS) y es poco fiable con coords en % · un SVG **sin** viewBox tiene ratio intrínseco 2:1 y `position:absolute + inset:0` NO lo estira (hace falta `width/height: 100%`). El esquema canónico de §2 evita todo esto.
- **Texto sobre gradiente animado (CTA):** actualizar custom properties en el contenedor en cada `pointermove` invalida estilos del subtree y re-rasteriza el texto (jitter). Fix: variables **solo en el elemento del glow** + throttle `requestAnimationFrame` + el bloque de texto en capa propia (`transform: translateZ(0)`).
- **Falsas alarmas de entorno:** Chrome headless fuerza ~500px de ancho mínimo de ventana (usar iframe para capturas móviles honestas) · el zoom de Chrome/Safari es **por sitio** (el preview puede verse distinto a prod con código idéntico — ⌘0 resetea) · deploy-lag + caché Safari ⇒ avisar solo con deploy Ready + pestaña privada.

---

## 9. Assets

- `assets/zenet-imagotipo.png` · `assets/app-catalogos.png` · `assets/alan-founder.jpg` — heredados.
- `assets/og-image.png` — **v3 (2026-08-06):** "El caos no es el precio / de tener un restaurante." + dash teal + "Nunca lo fue." + zenetapp.com. Fuente: `lab/og-source.html` → Chrome headless 1200×630.
- `assets/favicon.png` + `apple-touch-icon.png` — v2 (teal), vigentes.

---

## 10. Deploy gate y cross-doc

**Gate de deploy — LEVANTADO 2026-08-07** por decisión explícita del fundador (opción consciente, no push casual): los tags "En construcción" de la Etapa 3 y la consulta se consideraron honestidad suficiente. Deploy ejecutado: merge `--no-ff` v3→main + tag `v3.0` + verificación en vivo (hero v3 · /hablemos 200 · OG 200). ⚠️ **Deuda que dejó el gate:** onboarding + análisis con docs reales — el copy promete en presente; producto debe alcanzarlo cuanto antes. Recordar refrescar caché de OG en WhatsApp/FB (Sharing Debugger) si el preview sale viejo.

| Doc | Relación |
|---|---|
| `00-estrategia-y-estructura.md` | Estructura (upstream) — describe la v1; **pendiente refrescar a v3** (9 secciones · narrativa Sinek) |
| `01-copy.md` **v0.3** | Copy v3 por sección (upstream · incluye vetos de vocabulario y el log de evoluciones del build) |
| `Branding/03-visual-identity/02-color.md` **v2.0** | Decisión canónica del acento teal — este spec la aplica |
| `Product Strategy/04-go-to-market/08-learnings-de-validacion.md` | Los learnings de Fase A motivaron el reenfoque v3 (el camino · el trato · honestidad WIP) |

Idea estacionada con gate: **"Etapa 4 · Resultados"** (animación de la curva de mejora) — se activa con la primera curva real de un design partner (documentada en `01-copy.md`).

---

*Última actualización: 2026-08-07. v3.0 · EN VIVO en zenetapp.com (tag v3.0 · gate levantado) · v2 del spec archivada en `_archive/2026-08-07_02-prototipo-y-diseno-v2.md`.*
