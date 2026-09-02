---
name: Landing page · prototipo y diseño
description: El spec de diseño de la landing v3 de Zenet — EN VIVO en zenetapp.com (v3.0 landing 2026-08-07 · v3.1 /demo · v3.2 hablemos 3 pasos 2026-08-20 · **v3.3 pasada de copy del fundador + la animación del dominó en la Etapa 3, 2026-09-02**). 9 secciones, regla "los componentes hablan", pieza estrella = El camino (3 etapas animadas + la consulta), hero sólido con colores compuestos, esquema SVG canónico anti-WebKit, tokens :root teal, Onest+Hanken, grid 12-col 1280. Workflow de edición (scripts python + asserts) y QA (harness lab/_qa.html + Chrome headless). Fuente de verdad del diseño. Agent-readable.
type: seo-content
last_updated: 2026-09-02
status: active
version: 3.3
owner: Alan Bahena
---

# Landing page · prototipo y diseño

> El **spec de diseño** de la landing: cómo está construida y con qué reglas. La estructura vive en `00-estrategia-y-estructura` (v0.3); el copy en `01-copy` (v0.4); **aquí el diseño**.
>
> **Artefacto vivo:** el repo **`zenet-landing`** (GitHub privado `Alanbahena/zenet-landing` · en `02_Producto-y-Tech/` · fuera de este workspace) desplegado por **Vercel**.
>
> Estado: ✅ **EN VIVO en producción** · tag **`v3.3`** (2026-09-02 · copy v0.4 del fundador + la animación del dominó). Antes: `v3.0` (landing v3, 2026-08-07). El gate original (onboarding + análisis real) fue **levantado por decisión explícita del fundador** el 2026-08-07 — los tags "En construcción" se consideraron honestidad suficiente. ⚠️ El copy habla en presente: **shipear onboarding + análisis real quedó como deuda de producto con prioridad alta.**

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
| **v3.3 · La tensión no usa color de alerta** | No existe rojo ni ámbar en **ninguna** superficie del producto (verificado: ni `index.html` ni `/demo`). El momento de tensión de la Etapa 3 se marca con **peach `#F4DED0`** —ya en tokens— y **se apaga al volver la calma teal**: el color cuenta el arco. Se evaluó el rojo (petición del fundador) y se descartó: sería el primer color fuera de paleta del producto, y diría *"error"* donde el copy dice *"la vida del negocio"*. |
| **v3.3 · La pérdida se dibuja, no se simboliza** | Las figuras de §2 tarjeta 3 y §5 card 2 llevan una **línea fantasma punteada** (`stroke-dasharray="2 4"` · opacidad .3): la sólida se desploma / se recupera, la punteada muestra a dónde habría ido. **La brecha ES el costo.** Se descartó el signo de pesos: sería el único símbolo literal de la página, es el ícono más gastado del food-tech, y afirmaría una pérdida económica que el copy no mide. |
| **v3.3 · En las animaciones, el núcleo no se mueve** | Las piezas se sacuden; Zenet no. La quietud del núcleo **es** el mensaje — y respeta la regla de agentes: un núcleo, cero entidades. |
| **v3.3 · Cero cifras en la página** | Ni de impacto ni de mercado. Los datos son munición de deck/LinkedIn/venta. Ver `00-estrategia-y-estructura` §4 (Reglas v3.3 de contenido). |
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
| 2 | El problema | La realidad de hoy | Titular **"Lo más caro de tu operación no se compra. Se carga."** (mark en *Se carga*) + **4 tarjetas `.pain`** (figura line-art abstracta + número). La figura 3 lleva la **brecha punteada** (v3.3) · *(corrección: versiones previas del spec decían "5 filas .verb" — las 5 `.verb` son de §3)* |
| 3 | El trato | Cómo trabaja | "El trabajo que más esfuerzo te cuesta —" + **5 puntos del trato**: Lo construye desde lo que ya tienes · Lo ejecuta cada día · Lo junta en un solo cerebro operativo · Lo mantiene vivo · Se lo pasa a quien llega |
| 4 | El camino | El camino | **La pieza estrella** (§5): 3 `.chapter` (Etapa 1 · 2 · 3, texto + escena animada en 2 columnas) + **la consulta** como cierre. **v3.3: cero `tag-wip` en toda la sección** — las tres etapas son ciertas hoy. La automatización salió del camino |
| 5 | Qué cambia | El cambio | 4 cards `.change` (figura + número) + cierre emocional |
| 6 | Por qué ahora | El momento | **v3.3: dos párrafos** (`.section-sub + .section-sub`, regla CSS nueva) — el cambio de mercado, luego la posibilidad tecnológica. Sin cifras |
| 7 | Por qué Alan | El fundador | Foto + 1ª persona + link LinkedIn (heredada) |
| 8 | La invitación | La invitación | Intro + 4 `.benefit` + panel `.deal` de **3 columnas** (ancho 1040 alineado a benefits) |
| 9 | Cierre | — | Card aurora + glow cursor-follow (texto en capa de composición propia, ver §8) + botón blanco |

---

## 5. El camino — la pieza estrella

Patrón común de las 3 escenas: **beat-loop** — JS timer cicla `data-beat` en la escena, CSS reacciona por atributo, caption sincronizado, snap-reset sin flash (`.eN-snap` + reflow), IO arranca al entrar, `prefers-reduced-motion` → frame final estático. Escenas cuadradas (`aspect-ratio: 1/1`) en ≤640px.

- **Etapa 1 · "Tu operación, entendida"** — 4 beats (durs 3000/2100/1900/6200): documentos regados (cuaderno · Excel · fotos · recetas) flotan → convergen al núcleo → link → **panel de análisis** (filas + barras que se llenan). Captions: "Mandas tus documentos como están" → "Zenet los lee y los entiende" → "Analiza tu operación" → "Tu análisis honesto — con tus números".
- **Etapa 2 · "Tu operación, estandarizada área por área"** — 5 beats: 6 chips de áreas regadas (drift) → se ordenan en hexágono → núcleo aparece → **estrella** (las 6 líneas se dibujan por dashoffset, delays escalonados) → el conjunto se disuelve y el núcleo sube: **2 tarjetas Sucursal** con mini-red + 3 roles cada una, conectadas por ramas punteadas. SVG con el esquema canónico (§2) — coords `viewBox 0 0 100 75` + `pathLength` para el draw.
- **Etapa 3 · "Tu operación se mantiene viva — aunque todo cambie"** — 🔄 **el dominó (v3.3 · sustituye a la etapa de automatización)**. 5 beats (durs 2800/2400/2400/3800/5000): núcleo + **4 piezas** (Receta · Costo · Pedido · Estándar, las mismas cuatro que nombra el copy) conectadas, en gris → **cae un pill peach** con el cambio y el núcleo lo cacha (`d3-catch`) → **turbulencia**: las piezas se desalinean (translate + rotate), vibran (`d3-wobble`) y las líneas se descosen (`stroke-dasharray`) — **el núcleo no se mueve** → **el pulso sale del núcleo** por cada línea (`pathLength="1"` + `stroke-dashoffset` con delays .05/.45/.85/1.25s) y cada pieza vuelve a su lugar y se enciende en cadena (.55/.95/1.35/1.75s) → todo en teal, núcleo respirando, aparece **"Al día"**. **El pill rota en cada vuelta** entre los cuatro cambios del propio copy: *sube el tomate · proveedor nuevo · se va tu cocinero · menú de temporada*. Clases `.d3-*`. Lab: **`lab/etapa3-domino.html`** (trae barra de beats para congelar cada uno).
- ⚠️ **El reloj del día** (la etapa de automatización de v3 — 3 paneles de rutinas + línea del tiempo 7:50→11:00) **salió de la página en v3.3**, junto con su CSS y su driver. Se conserva íntegro en **`lab/etapa3.html`**, listo para volver cuando la automatización sea verdad.
- **La consulta (cierre del camino)** — strip 2 columnas: afirmación ("Sin cursos, sin capacitaciones… si tu equipo sabe usar WhatsApp, sabe usar Zenet") + **chat rotativo** de 3 intercambios (cierre del día · receta de la casa · permiso de salubridad + servicio de la máquina) con burbujas estilo WhatsApp, **typing dots** entre pregunta y respuesta (pop cubic-bezier al aparecer Zenet) y swap suave entre intercambios (ciclo 7.2s).

---

## 6. Componentes / patrones v3 (nuevos sobre v2)

- **Filas verbo (`.verb`)** — la Realidad como lista numerada de verbos (no cards): número + chip + cuerpo, reveal una sola vez (IO unobserve).
- **Capítulos del camino (`.chapter`)** — texto (kicker "Etapa N" + h3 + prosa) y escena (`.chapter-viz .eN-stage`) en 2 columnas; alternan lados; stack en móvil.
- **Tag WIP (`.tag-wip`)** — pill multilinea "En construcción — con los primeros Socios Fundadores". **v3.3: queda UNO solo en toda la página** — el paso 04 de El trato. Es la única promesa sin construir que la landing hace.
- **Escena del dominó (`.d3-*` · v3.3)** — mismo teatro que `.eN-stage`. Piezas = chips con punto (gris → teal) · `.d3-change` = el pill que cae · `.d3-core` fijo en el centro · **dos SVG superpuestos**: `.d3-net` (líneas estáticas) y `.d3-pulse` (las mismas líneas con `pathLength="1"`, animadas por `stroke-dashoffset` con delays). `.d3-snap` corta transiciones al reiniciar el loop.
- **Brecha punteada en figuras (v3.3)** — segunda `<polyline>` con `stroke-dasharray="2 4"` y opacidad .3 dentro de los SVG de §2 c3 (sigue derecho mientras la sólida cae) y §5 c2 (sigue cayendo mientras la sólida se recupera).
- **Burbujas de consulta (`.bub-user` / `.bub-zenet`)** — usuario mint der. · Zenet blanca izq. con badge "● Zenet"; typing dots en `.slot` (grid superpuesto para el swap typing→mensaje sin brincos).
- **Escenas de etapa (`.eN-stage`)** — panel off-white-50 con borde y sombra suave; el "teatro" de cada animación.

---

## 7. Movimiento / inventario de scripts

Reglas invariables (heredadas + v3): **cross-browser** (JS timer + CSS transitions + SMIL · nada de scroll-timeline) · `prefers-reduced-motion` en todo → frame final estático · **IO** para arrancar al entrar · beat-loop con snap-reset.

6 scripts inline en `index.html` (en orden): **cta-glow** (coordenadas del brillo, ver §8) · **verb reveal** (IO + stagger) · **e1** · **e2** · **d3** (el dominó · v3.3, sustituyó a `e3`) · **consulta** (ciclo de intercambios). El driver de `d3` añade una variable de estado sobre el patrón común: rota el texto del pill al volver al beat 1. Al portar a Next.js: cada uno → hook/componente con el mismo patrón IO + reduced-motion.

---

## 8. QA — método y lecciones técnicas (v3)

- **Harness de QA (`lab/_qa.html` · untracked):** iframe `src="/"` **servido desde localhost** (un padre `file://` con iframe http es cross-origin y los scripts mueren en silencio) · params `?sel=` (scroll a un selector) `&scene=&beat=` (congelar un beat) · congelar = **barridos repetidos** matando timers del iframe (un solo kill pierde la carrera contra el IO). Captura: Chrome headless `--virtual-time-budget` + `--force-device-scale-factor=2` (retina) + PIL para crops. **Regla de oro: capturar y mirar el propio trabajo (del index) ANTES de pedirle a Alan que mire el suyo.**
- **WebKit + SVG (la saga de la Etapa 2):** `vector-effect: non-scaling-stroke` + `preserveAspectRatio="none"` descompone la geometría en iPhone · `pathLength` solo existe como atributo SVG (no CSS) y es poco fiable con coords en % · un SVG **sin** viewBox tiene ratio intrínseco 2:1 y `position:absolute + inset:0` NO lo estira (hace falta `width/height: 100%`). El esquema canónico de §2 evita todo esto.
- **Texto sobre gradiente animado (CTA):** actualizar custom properties en el contenedor en cada `pointermove` invalida estilos del subtree y re-rasteriza el texto (jitter). Fix: variables **solo en el elemento del glow** + throttle `requestAnimationFrame` + el bloque de texto en capa propia (`transform: translateZ(0)`).
- **Chrome headless y el movimiento (v3.3):** `--virtual-time-budget` **adelanta el tiempo**, así que las transiciones CSS aparecen **ya terminadas** en la captura. Sirve para verificar el **estado final de cada beat** y para cazar bugs de layout (así se cazó una flecha SVG que se infló a pantalla completa al perder su regla de `width`), pero **NO** para juzgar ritmo ni escalonado — eso se valida en vivo. Súmalo a la lección de §9.b: tampoco emula viewport de móvil.
- **Falsas alarmas de entorno:** Chrome headless fuerza ~500px de ancho mínimo de ventana (usar iframe para capturas móviles honestas) · el zoom de Chrome/Safari es **por sitio** (el preview puede verse distinto a prod con código idéntico — ⌘0 resetea) · deploy-lag + caché Safari ⇒ avisar solo con deploy Ready + pestaña privada.

---

## 9. Assets

- `assets/zenet-imagotipo.png` · `assets/app-catalogos.png` · `assets/alan-founder.jpg` — heredados.
- `assets/og-image.png` — **v3 (2026-08-06):** "El caos no es el precio / de tener un restaurante." + dash teal + "Nunca lo fue." + zenetapp.com. Fuente: `lab/og-source.html` → Chrome headless 1200×630.
- `assets/favicon.png` + `apple-touch-icon.png` — v2 (teal), vigentes.

---

## 9.b Hablemos v0.4 — formulario en 3 pasos (EN VIVO 2026-08-20 · tag `v3.2`)

**`hablemos.html` rediseñada** de formulario plano de 1 columna → **onboarding de 3 pasos con split panel** (referencia de patrón: Handle). Decisiones canónicas:

- **Split 44/56:** panel de marca izquierdo (foto + layer + logo blanco + la raíz) | formulario derecho (max-width 480px centrado). En móvil (≤820px) el panel colapsa a **banda de ~230px arriba** (foto de fondo · logo · titular chico · sub oculto) y el form apila abajo.
- **Panel:** foto **insumos en cocina real** (cajas de limones/chiles/verduras con campana y cocinero al fondo · Unsplash id `v8tI7dmHUxI` · licencia libre comercial · elegida entre 9 candidatas montadas — criterio de Alan: que se aprecien insumos/inventario). **Tratamiento cálido de marca:** -18% saturación + velo peach-100 al 10% + contraste 1.04 (mismo lenguaje que la portada del deck). Layer: gradiente vertical charcoal (0.55 → 0.38 → 0.82, más denso abajo donde vive el texto). Texto = **variante A, la raíz** ("El caos no es el precio…") + "Te responde el fundador — no un equipo de ventas." **Rechazado:** quote de entrevistado (paráfrasis privadas sin permiso = testimonial inventado; el slot se activa con el 1er SF con permiso). Asset: `assets/hablemos-panel.jpg` + **`assets/zenet-imagotipo-blanco.png`** (logo blanco sobre transparente generado por luminancia — el imagotipo original trae fondo y NO sirve invertido con CSS).
- **3 pasos escalados por intimidad:** ① quién eres (nombre · rol chips con **Contador/a** · correo · celular) → ② tu restaurante (nombre · ciudad · tipo chips · sucursales 1/2-3/4-5/6+) → ③ tu operación (**ventas mensuales en RANGOS, opcional** — sin opción "prefiero no decirlo", la etiqueta "(opcional)" hace el trabajo · **el reto en sus palabras** textarea required = oro de VoC pre-conversación · extra opcional). **País = México fijo** (hidden field · en pantalla solo Ciudad).
- **Lada:** selector 🇲🇽 +52 (default) / 🇺🇸 +1 junto al número · **al enviar se combinan en un solo campo** `whatsapp` ("+52 664 123 4567") y `lada` se elimina del payload. Correo y celular en **filas completas** (no a la mitad — con la lada no cabían).
- **Mecánica:** un solo POST a Formspree (`f/xrewyvab`, mismo endpoint) al final · validación por paso con `reportValidity` · **Atrás conserva lo escrito** (show/hide, el DOM no se destruye) · barra de progreso 3 segmentos · fade+slide entre pasos (respeta reduced-motion) · éxito con **check circular animado** (trazo que se dibuja · aro teal sobre menta) · params QA en prod: `?step=N` y `?done=1`.
- **Sin navbar ni footer** — página enfocada tipo Handle; el panel lleva logo + Volver; el link a `/privacidad` va junto al botón Enviar.
- **QA:** envío de prueba real ejecutado por Alan (correo con los 11 campos + WhatsApp combinado ✓) · móvil verificado en celular real. ⚠️ Lección: headless Chrome a `--window-size=390` **recorta por ancho mínimo de ventana** (falso overflow) — verificar overflow real con iframe same-origin midiendo `scrollWidth` (aquí: 390=390 ✓).
- Lab: `lab/_hablemos3.html` (con params `?foto=2-10` `?txt=b` de la selección — histórico).

---

## 10. Deploy gate y cross-doc

**v3.3 (2026-09-02) — deploy directo, sin gate.** Rama `v3.3-copy` (2 commits: copy + animación) → merge `--no-ff` a `main` → tag `v3.3` → push. Vercel publicó en ~15 s; verificado contra producción (titular nuevo de §2 + `d3-scene` presentes en el HTML servido). QA de móvil e iPhone Safari: ojos del fundador.

**Gate de deploy — LEVANTADO 2026-08-07** por decisión explícita del fundador (opción consciente, no push casual): los tags "En construcción" de la Etapa 3 y la consulta se consideraron honestidad suficiente. Deploy ejecutado: merge `--no-ff` v3→main + tag `v3.0` + verificación en vivo (hero v3 · /hablemos 200 · OG 200). ⚠️ **Deuda que dejó el gate:** onboarding + análisis con docs reales — el copy promete en presente; producto debe alcanzarlo cuanto antes. Recordar refrescar caché de OG en WhatsApp/FB (Sharing Debugger) si el preview sale viejo.

| Doc | Relación |
|---|---|
| `00-estrategia-y-estructura.md` **v0.3** | Estructura (upstream) — ✅ sincronizada 2026-09-02: 9 secciones · narrativa Sinek · **Reglas v3.3 de contenido** |
| `01-copy.md` **v0.4** | Copy por sección (upstream · vetos de vocabulario · log del build · las 12 decisiones de la v3.3) |
| `Branding/03-visual-identity/02-color.md` **v2.0** | Decisión canónica del acento teal — este spec la aplica |
| `Product Strategy/04-go-to-market/08-learnings-de-validacion.md` | Los learnings de Fase A motivaron el reenfoque v3 (el camino · el trato · honestidad WIP) |

Idea estacionada con gate: **"Etapa 4 · Resultados"** (animación de la curva de mejora) — se activa con la primera curva real de un design partner (documentada en `01-copy.md`).

---

*Última actualización: 2026-08-20. v3.2 · EN VIVO en zenetapp.com (tags v3.0 landing · v3.1 /demo · **v3.2 hablemos 3 pasos**) · v2 del spec archivada en `_archive/2026-08-07_02-prototipo-y-diseno-v2.md`.*
