---
name: Landing page · prototipo y diseño
description: v4.0-DRAFT (2026-09-10) = el spec de diseño de la landing v4, EN CONSTRUCCIÓN, como bloque arriba; debajo, intacto, el spec v3.3 de lo que está EN VIVO. v4 — 10 secciones · pantallas reales donde existe la pantalla · el dominó como gráfica en §2 con micro-motion · el trato sin capturas (§4 promete, §5 prueba) · Etapa 1 = Compras + Zenet en WhatsApp · puntos de progreso en las tres escenas del camino · la consulta se conserva como cierre de §5 · §6 En concreto en acordeón móvil · presupuesto de peso · plan de lab/ · QA y deploy gate v4. Anterior — El spec de diseño de la landing v3 de Zenet — EN VIVO en zenetapp.com (v3.0 landing 2026-08-07 · v3.1 /demo · v3.2 hablemos 3 pasos 2026-08-20 · **v3.3 pasada de copy del fundador + la animación del dominó en la Etapa 3, 2026-09-02**). 9 secciones, regla "los componentes hablan", pieza estrella = El camino (3 etapas animadas + la consulta), hero sólido con colores compuestos, esquema SVG canónico anti-WebKit, tokens :root teal, Onest+Hanken, grid 12-col 1280. Workflow de edición (scripts python + asserts) y QA (harness lab/_qa.html + Chrome headless). Fuente de verdad del diseño. Agent-readable.
type: seo-content
last_updated: 2026-09-09
status: active
version: 4.0-draft
owner: Alan Bahena
---

# Landing page · prototipo y diseño

> El **spec de diseño** de la landing: cómo está construida y con qué reglas. La estructura vive en `00-estrategia-y-estructura` (v0.3); el copy en `01-copy` (v0.4); **aquí el diseño**.
>
> **Artefacto vivo:** el repo **`zenet-landing`** (GitHub privado `Alanbahena/zenet-landing` · en `02_Producto-y-Tech/` · fuera de este workspace) desplegado por **Vercel**.
>
> Estado: ✅ **EN VIVO en producción** · tag **`v3.3`** (2026-09-02 · copy v0.4 del fundador + la animación del dominó). Antes: `v3.0` (landing v3, 2026-08-07). El gate original (onboarding + análisis real) fue **levantado por decisión explícita del fundador** el 2026-08-07 — los tags "En construcción" se consideraron honestidad suficiente. ⚠️ El copy habla en presente: **shipear onboarding + análisis real quedó como deuda de producto con prioridad alta.**

---

# — DISEÑO v4 (v4.0-draft · 2026-09-10 · en construcción) —

> **Qué es este bloque:** el spec de diseño de la **landing v4** antes de abrir `lab/` — el papel que precede a la construcción, como en v2 y v3. Aplica `00-estrategia` **v0.4** (10 secciones · dos entradas · D1) y `01-copy` **v0.5** (copy cerrado sección por sección el 9-sep). **Debajo de este bloque sigue el spec v3.3, intacto: es lo que está EN VIVO** y la referencia técnica (repo · workflow · esquema SVG canónico · QA) que la v4 hereda sin cambios.
>
> **Estado:** draft — se cierra con el fundador sección por sección y se convierte en el spec v4.0 cuando la v4 se despliegue. **Método:** papel → `lab/` por componente (móvil primero para lo nuevo) → checkpoint visual con Alan → integración a `index.html` en branch `v4` → QA → deploy gate → tag `v4.0`.

## v4 · A. Decisiones de diseño v4

| Decisión | Detalle |
|---|---|
| **Pantallas reales donde existe la pantalla** | La regla de forma v4: *una pantalla real vale más que una animación abstracta cuando la pantalla existe*. Entran capturas del producto en el trato (§4), el camino (Etapas 1-2) y §6. Donde no hay pantalla, sigue la metáfora (el dominó) o el texto con etiqueta (paso 04). |
| **Jerarquía de animación v4** | **El dominó de la Etapa 3 = la estrella** (única animación compleja, en loop) · **hero = respiración** (loop) · **Etapas 1-2 = secuencias de pantallas** con transiciones simples (crossfade/slide, beat-loop del patrón `.eN-stage`) · **§2 dominó gráfico = micro-motion una sola pasada** (reveal en cadena por IO, sin loop) · resto = reveals. La disciplina *"no sobre-animar"* se conserva: solo dos cosas corren en loop complejo. |
| **Capturas tal como son** | Regla de colores de alerta **acotada a marketing** (`00-estrategia` §4.4): los componentes propios no usan rojo ni ámbar (la tensión va en `--peach-100`); **las capturas del producto traen sus colores** (Compras usa rojo/verde) y no se retocan. Marco uniforme `.shot`. |
| **Datos en las capturas = ilustrativos declarados, o de un SF con permiso** (decisión #8) | Pie fijo bajo cada `.shot`: *"datos ilustrativos"* (o *"operación de un Socio Fundador, con permiso"*). **Ningún nombre real** de restaurante, proveedor ni persona en pantalla pública — ⚠️ la maqueta de Compras del 9-sep muestra **"Alma Verde"** como cuenta: en las capturas de la landing el tenant es ficticio. **Un solo insumo de ejemplo en toda la página: el aguacate** (Hass · +17% · ~$300/mes), coherente entre §2, §5 y §6. |
| **Zenet en WhatsApp: se muestra, no se imita** | El chat se representa con el patrón `.bub-user` / `.bub-zenet` que ya existe (mint / blanco con badge *"● Zenet"*) — **no se pinta el verde de WhatsApp ni se copia su UI** (marca de terceros; y una captura "real" de teléfono en una landing se lee como falsificable). El rótulo dice *"Zenet en WhatsApp"*. El contenido del chat es el de `01-copy` §5 Etapa 1 (4 beats): **Zenet responde, no inicia** — el hallazgo se enseña en la app. |
| **Cifras con fuente visible (D1)** | Componente `.anchor`: cifra grande + una línea de fuente en versalitas (*CANIRAC Tijuana · 2026*). **Solo en §2, máximo 2, nunca sin fuente.** El único número fuera de §2 es el ejemplo ilustrativo del aguacate dentro de las capturas. |
| **Presupuesto de peso** | Hoy `assets/` pesa 812 KB (la foto de `/hablemos` 314 KB · `app-catalogos.png` 282 KB — esta sale con la v4). La v4 suma ~8 capturas: **cada `.shot` ≤ 120 KB** (WebP con fallback PNG · recorte al panel · 2× solo donde se ve grande) · `loading="lazy"` en todo lo que no sea hero · **objetivo: página completa < 2.5 MB, LCP sin capturas** (el hero sigue siendo SVG/CSS). |
| **Móvil primero para lo nuevo** | Las secciones nuevas o crecidas (§2 · §3 · §6) se construyen en `lab/` **a 390 px antes que en desktop**, con teléfono real en el checkpoint. Las cercas de `01-copy` (plegar la captura de §2 · fundir la 5ª de §3 · acordeón y compresión de §6) se deciden ahí. |
| **Lo que se retira** | ~~La consulta~~ **SE QUEDA** (decisión del fundador 9-sep · ver §D) · `app-catalogos.png` (sustituida por las capturas reales) · las escenas `e1` y `e2` de v3.3 (documentos flotando · chips → estrella) se sustituyen — **el panel de análisis del beat 4 de e1 y las dos tarjetas de sucursal del beat 5 de e2 se reutilizan** en la nueva Etapa 2 · el segundo párrafo de *Por qué ahora* (posibilidad tecnológica) sale de la página. Todo se conserva en `lab/` e historial, como el reloj. |
| Heredado sin cambio | Acento teal · arquitectura térmica · glass en hero/CTA · Onest + Hanken · container 1280 · **esquema SVG canónico** (§2 v3.3) · hero sólido · brecha punteada · núcleo inmóvil en las animaciones · un solo `tag-wip` (paso 04). |

## v4 · B. Tokens y utilidades nuevas

Paleta y tipografía **sin cambio** (`:root` actual: `--offwhite-50/100` · `--peach-100 #F4DED0` · `--charcoal-900` · `--teal-700` · `--grey-100/300` · `--accent #2E6E62` / `--accent-hover` · `--teal-400` · `--mint-200 #BFE2D9`). Utilidades nuevas, todas sobre tokens existentes:

| Clase | Qué es | Notas |
|---|---|---|
| `.anchor` | Cifra + fuente (§2) | Cifra en `--font-display` · `clamp(28px, 4vw, 40px)` · fuente en versalitas 12px `--teal-700` · alineada bajo la pieza de origen de cada cadena |
| `.shot` | Marco de captura de producto | Borde 1px `--grey-100` · radio 14px · sombra suave (la de `.eN-stage`) · fondo `--offwhite-50` · pie 12px *"datos ilustrativos"* · `img` WebP + fallback · `loading="lazy"` |
| `.chain` / `.piece` / `.piece-origin` | El dominó gráfico (§2) | Piezas = chips con punto (mismo look que `.d3` pieces) unidas por línea punteada en SVG canónico · `.piece-origin` en `--peach-100` · estado `.is-on` con `transition-delay` escalonado |
| `.quote-card` | La voz (§2) | Blockquote con barra `--accent` · atribución en versalitas · verbatim con cortes |
| ~~`.trato-panel`~~ | — | **Retirado (10-sep):** §4 va sin capturas (variante C · `01-copy` §4) |
| `.concreto` / `<details>` | Tarjetas de §6 | Móvil: acordeón nativo `<details>` cerrado por defecto (sin JS) · desktop: grid |

## v4 · C. Las 10 secciones (v4)

| # | data-screen-label | Eyebrow | Contenido (`01-copy` v0.5) | Componente que la cierra | vs v3.3 |
|---|---|---|---|---|---|
| 1 | Hero | — | Sin cambio: bandera + subhead + `Hablemos` | Motivo red (sólidos) respirando | **Igual** |
| 2 | El momento | El momento | *"Lo que cambia allá afuera, te cae a ti."* + body + **el dominó** (2 cadenas) + 2 `.anchor` + `.shot--compras` (gráfica precios vs llegada) + `.quote-card` + puente | Dominó gráfico · reveal una pasada | **NUEVA** (sube de §6 v3.3, se vuelve gráfica) |
| 3 | El problema | La realidad de hoy | Titular sin cambio + **5 `.pain`** (la 2ª con la brecha punteada · la 5ª con figura nueva) + remate de una línea (por evaluar en pantalla) | 5 tarjetas line-art | De 4 a 5 · reorden |
| 4 | El trato | Cómo trabaja | Headline + subline sin cambio · **5 pasos, sin capturas** (variante C · `lab/` 10-sep) · strip anti-POS nuevo · cierre | Fila de pasos (`.verbs` de producción) + strip | Solo copy (02 · 05 · strip) · **las pantallas se concentran en §5** |
| 5 | El camino | El camino | Headline sin cambio · subline nueva · **Etapa 1 = WhatsApp → Compras** (4 beats) · **Etapa 2 = análisis → Recetas → Inventario → Equivalencias → sucursales** (6 beats) · **Etapa 3 = el dominó** (sin cambio) · **+ puntos de progreso en las tres escenas** · **+ la consulta como cierre** (copy nuevo · 3 preguntas de *por qué*) | La pieza estrella | Etapas 1-2 nuevas · dots nuevos · consulta conservada |
| 6 | En concreto | En concreto | *"Qué te quita de encima."* + subline *mano derecha* + **5 tarjetas** (título · línea en cursiva · cuerpo · `.shot` mini) + cierre | Grid / acordeón | **NUEVA** |
| 7 | Qué cambia | El cambio | Headline sin cambio · **4 `.change`** (tu cabeza · tiempo · tranquilidad · el dinero deja de irse) · cierre intacto | 4 cards + cierre | Textos nuevos · patrón igual |
| 8 | El fundador | El fundador | Sin cambio | Foto + 1ª persona | **Igual** |
| 9 | La invitación | La invitación | Sin cambio (+ opcional *"y el historial de tus compras"* en el piso) | 4 `.benefit` + `.deal` | Igual |
| 10 | Cierre | — | Sin cambio | Card aurora + `Hablemos` | **Igual** |

`section` / `section-alt` siguen alternando; con 10 secciones el hero y el cierre quedan en fondos distintos a los de v3.3 — se verifica en la integración.

## v4 · D. Componentes nuevos o cambiados

- **El dominó gráfico (§2 · `.domino`)** — dos `.chain` horizontales. Cada cadena: `.piece-origin` (peach) → 4-5 `.piece` unidas por una línea punteada dibujada en SVG con el **esquema canónico** (viewBox + dashes en unidades de viewBox + width/height 100%). Bajo la pieza de origen, el `.anchor`. **Movimiento:** IO dispara una vez `.is-on` en la cadena; cada pieza enciende con `transition-delay` escalonado (~120 ms) de izquierda a derecha; la pieza de origen hace un pulso peach único (`@keyframes` de 600 ms); la línea se dibuja con `stroke-dashoffset` en la misma pasada. **Sin loop. `prefers-reduced-motion`: todo encendido desde el inicio.** Móvil: `.chain` en columna (flex `column`), la línea vertical, las piezas a ancho completo. Junto a la cadena 1, `.shot--compras` (desktop a la derecha · móvil debajo, **plegable** — primera cerca). Debajo, `.quote-card`. Todo esto en `lab/v4-momento.html`.
- **Las 5 tarjetas (§3 · `.pain`)** — mismo componente que v3.3. Desktop: a 1280 caben 5 columnas de ~232 px; se prueba contra 3 + 2. La figura de la 2ª (ex-3ª) conserva la **brecha punteada**. **Figura nueva para la 5ª** — *"el mes que avanza y el número que llega tarde"*: una línea base con cuatro marcas de semana en teal y, al final, un pequeño rectángulo (el número) que aparece en peach; line-art, mismo grosor que las otras cuatro. El **remate** (*"Las ventas traen el dinero. La operación decide cuánto se queda."*) se construye como `.section-end` de una línea y **se juzga en pantalla** — misma prueba que mató al WHY.
- **El trato (§4 · `.verbs`) — sin panel.** La fila de 5 pasos de v3.3 se conserva tal cual (número + ícono + título + cuerpo + línea punteada) y **no lleva capturas** (decisión de `lab/` 10-sep · `01-copy` §4). Cambia solo el copy (02 · 05 · strip anti-POS) y el hover del chip; en móvil, riel vertical. Variantes construidas y descartadas: `lab/v4-trato.html` (panel que sigue al paso activo) y `lab/v4-trato-b.html` (miniatura por paso — ilegible a 230 px). La píldora *En construcción* usa el estilo de producción (teal 10% + borde 25%), **no peach**.
- **Etapa 1 v4 (`.e1-stage`)** — reutiliza el teatro `.eN-stage` y el patrón beat-loop. 4 beats: **1** burbuja `.bub-user` con thumbnail de factura (SVG genérico de ticket, no una factura real) · **2** `.bub-zenet` con el texto del copy (*"Listo — guardé 12 insumos de Frutas Pérez…"* — proveedor ficticio) con typing dots antes · **3** `.shot--compras-card` (*Mayor movimiento del mes · Aguacate Hass +17%*) · **4** `.shot--compras-chart` con la línea de *tus precios vs tu llegada* dibujándose (SVG propio con `pathLength="1"`, encima de la captura o sustituyéndola). Captions del copy. Snap-reset como e2/d3. Reduced-motion = beat 4.
- **Etapa 2 v4 (`.e2-stage`)** — 6 beats: **1** el panel de análisis (**reutiliza el beat 4 de la e1 v3.3**: filas + barras que se llenan) · **2** `.shot--recetas` · **3** `.shot--inventario` · **4** `.shot--equivalencias` · **5** las **dos tarjetas de sucursal** conectadas (**reutiliza el beat 5 de la e2 v3.3**) · **6** *"Y la estructura queda hecha"*. Transiciones: crossfade + leve slide; sin coreografía nueva.
- **Etapa 3 (`.d3-*`)** — **sin cambio.** El pill sigue rotando *sube el tomate · proveedor nuevo · se va tu cocinero · menú de temporada*.
- **En concreto (§6 · `.concreto`)** — 5 tarjetas: título (lo que Zenet hace) · línea en cursiva (el problema) · cuerpo 2 líneas · `.shot` mini (thumbnail 4:3 del mismo asset que usa el trato, recortado). **Móvil: `<details>` nativo, cerrado por defecto** — se ve título + cursiva; sin JS. Desktop: grid 3 + 2 o lista con la captura a la derecha (decide `lab/v4-concreto.html`). Cerca: si pesa, 4 tarjetas (la 3ª se funde en la 2ª).
- **Qué cambia (§7 · `.change`)** — patrón intacto; cuatro textos nuevos; figuras: la card 2 de v3.3 (con brecha punteada) pasa a ser la 4ª (*el dinero deja de irse en silencio*) — la brecha sigue teniendo sentido ahí; la 1ª (*tu cabeza*) necesita figura nueva: line-art del núcleo con las piezas de los incendios separándose de él (misma familia que el dominó).
- **Puntos de progreso (`.dots`) — NUEVO en v4, para las tres escenas.** Las tres escenas de v3.3 corren sin decir en qué beat van (*"no sé si estoy viendo la parte 1 o la del final"* — el fundador, 9-sep). Se añade una lista de 4-7 botones-barra abajo de cada `.eN-stage` / `.d3-stage`: `width:22px;height:4px` en teal 22%, el activo `30px` en teal pleno, `aria-current="true"`. **Clic = salta a ese beat** y reinicia el ciclo desde ahí. En la Etapa 3 los dots **leen** el estado del driver de producción sin tocarlo (`MutationObserver` sobre `data-beat`), patrón a repetir al integrar. Es un **defecto que existe hoy en producción**: aplicar también a las tres escenas del index.
- **La consulta (cierre de §5) — se conserva, con el marco de producción verbatim.** `.consulta` = tarjeta `#EDEDE8`, radio 16, 900px, dos columnas (afirmación | chat), sin borde; `.bub-*` + typing dots + swap de 7.2 s, todo igual. **Lo único que cambia es el texto:** entrada en negritas *"No es otra app de dashboards. Es tu operación, contestando."* y los tres intercambios pasan a preguntas de *por qué* (índice · varianza de costo · huecos) — copy en `01-copy` §5. Lab: `lab/v4-etapa3.html`.
- **Se retiran:** `.verb`? — no: las `.verb` de v3.3 son las de §3 *(el spec v3.3 lo corrige en su §4)*; se retiran solo las escenas e1/e2 v3.3 completas (a `lab/`). **La consulta NO se retira** — ver el componente abajo.

## v4 · E. Movimiento / inventario de scripts v4

Reglas invariables: cross-browser (JS timer + CSS transitions + SMIL · nada de scroll-timeline) · `prefers-reduced-motion` en todo · IO para arrancar · beat-loop con snap-reset · **`str.replace` + `assert count==1` por edición, nunca `re.sub` amplio sobre el CSS.**

Scripts inline previstos (orden): **cta-glow** (igual) · **reveal** (generaliza el *verb reveal* de v3.3 a `.pain` · `.concreto` · `.change`) · **domino-reveal** (§2 · IO `once` · añade `.is-on`) · **e1** v4 · **e2** v4 · **d3** (igual) · **dots** (uno por escena · clic → beat, y en d3 un `MutationObserver` que lee `data-beat`) · **consulta** (el driver de producción, sin cambios: solo se reemplazan los textos de los tres intercambios). §6 no lleva script: `<details>`. Al portar a Next.js, cada uno → hook con el mismo patrón.

## v4 · F. Assets nuevos

| Asset | Origen | Dónde se usa | Peso objetivo |
|---|---|---|---|
| `shot-compras-card.webp` · `shot-compras-chart.webp` | Captura del producto (staging · tenant ficticio · dataset ilustrativo con el aguacate) | §2 · §4 paso 03 · §5 Etapa 1 · §6 t5 | ≤ 120 KB c/u |
| `shot-recetas.webp` · `shot-inventario.webp` · `shot-equivalencias.webp` | Captura del producto (Estandarización) | §4 paso 02 · §5 Etapa 2 · §6 t2/t3 | ≤ 120 KB c/u |
| `shot-manual-movil.webp` | Captura del producto en viewport móvil | §4 paso 05 · §6 t4 | ≤ 80 KB |
| `shot-analisis.webp` *(o el panel SVG de e1 v3.3)* | Producto (el análisis) o SVG existente | §5 Etapa 2 beat 1 | SVG preferido (0 KB extra) |
| El chat de WhatsApp | **HTML + CSS** (`.bub-*`), no imagen | §4 paso 01 · §5 Etapa 1 · §6 t1 | 0 KB |
| `og-image.png` v4 | `lab/og-source.html` → Chrome headless 1200×630 · misma bandera; se evalúa sumar *"Le mandas tus facturas por WhatsApp…"* | OG | ≤ 60 KB |
| Sale: `app-catalogos.png` (282 KB) | — | — | −282 KB |

**Cuándo se toman las capturas:** con Compras + WhatsApp en staging (semana del 14-sep). Mientras, `lab/` trabaja con **placeholders del mismo tamaño** para decidir layout y peso; las capturas se cambian al final sin tocar el layout.

## v4 · G. Plan de `lab/` (orden y qué decide cada uno)

| # | Archivo | Qué se construye | Qué se decide (checkpoint con Alan · móvil real + desktop) |
|---|---|---|---|
| 1 | `lab/v4-momento.html` | §2 completa: dominó + anclas + `.shot` + cita | ¿Cabe con la captura a 390 px o se pliega? · ritmo del reveal (120 vs 180 ms) · desktop: captura a la derecha o debajo |
| 2 | `lab/v4-concreto.html` | §6: 5 tarjetas con thumbnails | Acordeón vs abiertas · **5 vs 4** · grid 3+2 vs lista |
| 3 | `lab/v4-problema.html` | §3: 5 `.pain` + figura nueva + remate | 5 columnas vs 3+2 · la figura del mes · **el remate: se queda o se corta** |
| 4 | ~~`lab/v4-trato.html`~~ | ✅ **hecho 10-sep** → variante **C** (`lab/v4-trato-c.html`): sin capturas | Resuelto: §4 promete, §5 prueba |
| 5 | ~~`lab/v4-etapa1.html` · `lab/v4-etapa2.html` · `lab/v4-etapa3.html`~~ | ✅ **hecho 9-sep** — las dos secuencias + la Etapa 3 con dots + la consulta | Resuelto: 4 beats en e1 · **7** en e2 (se sumó el beat de hallazgos: costos y estandarización antes de las pantallas) · crossfade · dots en las tres · la consulta se queda |
| 6 | Integración | Branch `v4` sobre `main` · secciones en orden · `_qa.html` con `?sel=&scene=&beat=` para los nuevos | Peso total · LCP · reduced-motion · fondos alternos con 10 secciones |

Regla heredada: **el lab decide, el index es la verdad** — verificar el index después de integrar, no solo el lab. Orden elegido por riesgo: primero las tres secciones con cercas de móvil (2 · 6 · 3), luego las de producto (4 · 5), que dependen de las capturas.

## v4 · H. QA v4 (añade al §8 v3.3)

- **Móvil real primero** en 2 · 3 · 6 (el lector abre esto en el celular entre dos incendios) · headless solo para estados finales y layout, nunca para ritmo ni viewport móvil (lección v3.3).
- **Peso y LCP:** página completa < 2.5 MB · LCP = hero (sin capturas) · todas las capturas `lazy` · WebP con fallback.
- **Honestidad en pantalla:** cero nombres reales en capturas · pie *"datos ilustrativos"* presente · el aguacate y solo el aguacate · fuentes visibles en los dos `.anchor` · un solo `tag-wip` (04) · **cero rojo/ámbar en componentes propios** (las capturas exentas) · el copy de Etapa 1 y §4 paso 01 con *"por WhatsApp"* **solo si el canal está en producción** (si no, degradación de `01-copy`).
- **`prefers-reduced-motion`:** domino-reveal encendido · e1/e2 en último beat · d3 en beat 5.
- **Al copiar CSS del index a un `lab/` (o de vuelta), el filtro por selector pierde lo que está envuelto.** Los `@media` y los `@keyframes` no sobreviven a un filtro que selecciona reglas por nombre: en `lab/v4-etapa3.html` las tres reglas de `@media (prefers-reduced-motion: reduce)` quedaron aplicándose a todos (`transition:none!important` · `.chat .bub{opacity:1}` · `.chat .typing{display:none}`) y mataron la animación del chat sin error visible; faltaba además `@keyframes tp`. **Checklist al extraer:** contar `@media` y `@keyframes` en origen y destino · buscar selectores huérfanos (un `.motif` suelto se pegó a la primera regla `.consulta`) · verificar el componente **en movimiento**, no en captura fija.
- **Regla de oro** (v3): capturar y mirar el propio trabajo del index antes de pedirle a Alan que mire el suyo · avisar solo con deploy Ready + pestaña privada.

## v4 · I. Deploy gate v4 — esta vez real

La v3 levantó su gate por decisión del fundador y dejó una deuda (el análisis en presente sin correr). **La v4 promete más producto en pantalla, así que el gate no se levanta:**

1. **Compras + Zenet en WhatsApp en producción** para Socios Fundadores (estimado semana del 14-sep) — o la degradación por sección de `01-copy` aplicada antes del merge.
2. **Capturas** con datos ilustrativos declarados o de un SF con permiso · tenant ficticio · sin nombres reales.
3. **Fuentes de §2 confirmadas** (medio del reporte de CANIRAC Tijuana + nombre de la presidenta) — o la ancla alternativa con fuente (Tijuana 2024 · IIEG Jalisco) y la cita sin nombre o fuera.
4. **QA móvil del fundador** en teléfono real (2 · 3 · 6 y el camino).
5. **OG + meta description v4** · refrescar caché de OG (Sharing Debugger).

Branch `v4` → merge `--no-ff` a `main` → tag `v4.0` → verificación en vivo (titular de §2 · `.domino` · los 5 `.verb` con el copy nuevo · Etapa 1 nueva presentes en el HTML servido) → `02-demo` v0.2 en la misma ventana.

## v4 · J. Cross-doc

| Doc | Relación |
|---|---|
| `00-estrategia-y-estructura.md` **v0.4** | Las 10 secciones · D0 · D1 · las cercas (upstream) |
| `01-copy.md` **v0.5** | El copy por sección con sus cercas de `lab/` y las degradaciones por honestidad (upstream) |
| `02-demo/00-estrategia-y-copy.md` v0.1 → **v0.2** | `/demo` deja de ser "la Etapa 1" y crece a demo completo — se actualiza con el deploy v4 |
| `Product Strategy/04-go-to-market/11-icp-hipotesis-fase-a.md` | El lector de la página (§1) · el aguacate y "sientes el número" (§3 · §7) |
| `Branding/03-visual-identity/02-color.md` v2.0 · `04-iconografia-e-imagen.md` | Teal canónico · line-art Braun para las figuras nuevas (§3 t5 · §7 c1) |
| Repo `zenet-landing` (`index.html` 969 líneas · `lab/` · `assets/`) | El artefacto — el bloque v3.3 de abajo documenta cómo se trabaja en él |

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

*Última actualización: 2026-09-10. **v4.0-draft** (bloque DISEÑO v4 arriba · en construcción) sobre el spec **v3.3 EN VIVO** en zenetapp.com (tags v3.0 landing · v3.1 /demo · v3.2 hablemos · v3.3 copy del fundador + dominó) · v2 del spec archivada en `_archive/2026-08-07_02-prototipo-y-diseno-v2.md`.*
