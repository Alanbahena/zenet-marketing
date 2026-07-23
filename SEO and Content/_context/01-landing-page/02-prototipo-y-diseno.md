---
name: Landing page · prototipo y diseño
description: El spec de diseño de la landing v2 de Zenet (EN VIVO en zenetapp.com) — cómo está construida y con qué reglas. Repo git zenet-landing + Vercel (el artefacto vivo), design tokens :root con acento teal profundo #2E6E62, Onest+Hanken, grid 12-col 1280, 11 secciones, componentes (cards · eyebrows · stepper · chips), y las 2 piezas animadas (animación "Cómo funciona" 5 beats + sección "En acción" con reloj auto-avanzante). Workflow de edición (scripts python + branch + lab/) y version control (git tags v1.0/v2.0). Fuente de verdad del diseño. Agent-readable.
type: seo-content
last_updated: 2026-07-22
status: active
version: 2.0
owner: Alan Bahena
---

# Landing page · prototipo y diseño

> El **spec de diseño** de la landing: cómo está construida y con qué reglas. La estructura vive en `00-estrategia-y-estructura`; el copy en `01-copy` (v0.2 = copy v2); **aquí el diseño**.
>
> **Artefacto vivo:** el repo **`zenet-landing`** (GitHub privado `Alanbahena/zenet-landing` · en `02_Producto-y-Tech/` · fuera de este workspace) desplegado por **Vercel** en **`zenetapp.com`**. Este doc es el spec.
>
> Estado: ✅ **v2 EN VIVO en producción** (2026-07-22 · tag `v2.0`). La era Claude Design (v1) quedó atrás — el `.dc.html` ya no es el artefacto.

---

## 1. Herramienta, repo y workflow

- **Repo:** `zenet-landing` — sitio estático sin build (`index.html` + `hablemos.html` + `assets/` + `lab/`). HTML+CSS+JS inline, tokens en `:root`.
- **Deploy:** Vercel auto-deploy on push. `main` → producción (`zenetapp.com`) · branches → preview (`zenet-landing-git-<branch>-zenet.vercel.app`). Nota: Deployment Protection activa → los previews piden auth de Vercel (curl da 302; verificar deploy con `vercel ls --yes`).
- **Version control (3 capas):** git + **tags por versión** (`v1.0` = pre-teal · `v2.0` = la actual) para rollback · branch por versión mayor (`v2` se trabajó completa en branch y se hizo merge `--no-ff` a main) · los specs del workspace usan `_archive/` con date-prefix.
- **`lab/`** — páginas de experimentación **noindex** (`lab/color.html` color-lab · `lab/stepper.html` A/B del stepper · `lab/howworks.html` + `lab/howworks-b.html` A/B de la animación). Patrón: iterar en el lab con Alan → la opción ganadora se integra a `index.html` → el lab queda como archivo histórico.
- **Workflow de edición (crítico):** para ediciones múltiples sobre el HTML grande, **scripts Python** con `str.replace` + `assert count==1` por edición (evita errores de contexto de editar a mano) → commit por sub-paso → push → `vercel ls` confirma Ready → Alan revisa visual en desktop + Safari móvil real.
- **Generación de assets (OG/favicon):** HTML de plantilla + **Chrome headless** (`--headless --screenshot --window-size=... --virtual-time-budget=9000` · lanzar con `nohup`, Chrome cuelga al salir → `pkill`; el PNG sí se escribe) · `sips -z` para derivar tamaños (apple-touch 180).

---

## 2. Decisiones visuales v2 (→ `03-visual-identity` ya retroalimentado)

| Decisión | ✅ Resuelta en v2 |
|---|---|
| **Acento de marca** | **Teal profundo `#2E6E62`** (hover `#265C52`) — reemplaza al terracota `#CC5536` de v1. Razón: diferenciación vs el mar-de-naranja del food-tech · "orden/zen sobre apetito" · BoH no es food-facing · sale de la familia teal del brandbook. Decidido en `lab/color.html` · propagado a landing + hablemos + OG + favicon. **Cf. `Branding/03-visual-identity/02-color.md` v2.0** (la decisión canónica vive allá). |
| **Arquitectura térmica** | **Invertida vs v1: base cálida / acento frío.** La calidez vive en la base (off-white cálido · peach · nodos perla glass del motivo); el orden vive en el acento teal. Conserva "cálido sobre frío-tech" sin acento naranja. |
| **Glass** | Mismo principio v1 (reservado a momentos clave) + **fórmula de esfera** refinada en v2: la lectura de vidrio la da la **luz interior** (highlight arriba-izq + sombra interna abajo), no la opacidad del fill. Cuerpo ~.8; ni lavado (~.6) ni sólido (~.95 = "paleta"). Aplica a nodos del hero, núcleo de la animación y `day-core`. |
| **Densidad de sección** | §3 v1 (una sección larga) se partió en **3 movimientos** con fondos alternos como "refrescos" de lectura + eyebrows de capítulo. Lección: los bloques informativos largos necesitan cambios de ritmo visual. |
| Tipografía · AA · eyebrows | Heredadas de v1 (Onest+Hanken · teal-700 texto secundario · eyebrows ahora en teal). |

---

## 3. Design tokens (`:root`) — la fuente

```css
/* Neutros / base */
--offwhite-50:  #FFFCFA;   /* fondo base principal */
--offwhite-100: #F9F4EF;   /* fondo de sección alterna (ritmo) */
--peach-100:    #F4DED0;   /* superficie cálida sutil · glass · halo */
--charcoal-900: #2B3738;   /* texto principal */
--teal-700:     #4B5E5E;   /* texto secundario · líneas */
--grey-300:     #A3B2AC;   /* SOLO decorativo */
--grey-100:     #D1DBD7;

/* Acento (teal profundo · contenido) — v2 */
--accent:       #2E6E62;   /* botones · subrayado · números · eyebrows · núcleo motivo · chips */
--accent-hover: #265C52;

/* Familia del acento */
--teal-400:     #88BCAF;   /* highlight del núcleo glass · conectores */
--mint-200:     #BFE2D9;

/* Tipografía */
--font-display: "Onest", system-ui, sans-serif;    /* 600/700 */
--font-body:    "Hanken Grotesk", system-ui, sans-serif;

/* Layout */
--container: 1280px;
--gutter: 24px;                    /* 20px ≤1024 · 16px ≤640 */
--margin: clamp(20px, 5vw, 64px);
--nav-h: 60px;
```

---

## 4. Tipografía y grid

Sin cambios estructurales vs v1: Onest display (600 · 700 en piezas v2) + Hanken body · `clamp()` fluido · 12-col 1280 (12→8→4) · hero 2 modos responsive · ritmo por fondo alterno `.section`/`.section-alt` + **`.section-day`** (fondo especial gradiente cálido, único de "En acción" — no rompe la alternancia, se lee como momento aparte).

---

## 5. Las 11 secciones (v2)

| # | data-screen-label | Contenido |
|---|---|---|
| 1 | Hero | headline v2 ("Los grandes restaurantes…equipo de especialistas. Ahora el tuyo también.") + motivo red cálida (núcleo teal + 6 nodos glass + flow-dots SMIL) |
| 2 | El problema (alt) | 4 pains v2 (pain 3 = fragmentación "regada en mil lugares" · figura Braun de docs/puntos sueltos) |
| 3 | Qué es Zenet | **movimiento A "El sistema":** subline → **animación "Cómo funciona"** (ver §7) → stepper línea de proceso (5 pasos · `.tl`) → strip **"Zenet no es un POS…Tu POS se queda. El caos se va."** |
| 4 | El equipo (alt) | eyebrow "El equipo" + 6 cards de áreas (Estandarización · Inventarios · Compras · Protocolos · **Mantenimiento y permisos** · Costos) con íconos line-art |
| 5 | El Manual | eyebrow "El resultado" + panel Manual Operativo vivo + screenshot real |
| 6 | **En acción** (`.section-day`) | **NUEVA v2** — "Así se ve un día con Zenet" + tag honesto "En construcción — junto a los primeros Socios Fundadores" + reloj de 6 momentos (ver §7) |
| 7 | Qué cambia (alt) | 4 changes espejo (incl. "un experto a tu lado") · **sin animación (decisión: la página ya respira)** |
| 8 | Por qué ahora | 2 beats editoriales |
| 9 | Por qué Alan (alt) | foto + 1ª persona + **link al LinkedIn de Alan** |
| 10 | La invitación | 4 beneficios + panel deal |
| 11 | Cierre / CTA | card aurora + glow cursor-follow + botón blanco |

---

## 6. Componentes / patrones v2 (nuevos sobre v1)

- **Stepper línea de proceso (`.tl`)** — 5 puntos numerados sobre línea teal + labels debajo; vertical en móvil. Reemplazó a las pills-con-flechas (wrap feo). Estático (draw-in evaluado y pospuesto indefinidamente).
- **Strip de posicionamiento (`.notpos`)** — banda tintada `color-mix(accent 6%)` para el mensaje anti-POS.
- **Tag honesto (`.day-tag`)** — pill teal "En construcción — junto a los primeros Socios Fundadores" (disciplina pre-PMF: la sección En acción es intención de producto, no demo fingido).
- **Chips de hora (`.day-chip`)** — pills clicables conectadas por línea de tiempo; activa = rellena teal.
- **Burbujas de chat (`.hw-bub`)** — Q&A estilo WhatsApp (usuario tinte teal der. · Zenet blanca izq.) para el momento "Jarvis".
- **Núcleo Zenet (`.hw-zcore` / `.day-core`)** — esfera teal glass con fórmula de luz interior; el personaje visual recurrente de la página (hero → animación → En acción).

---

## 7. Movimiento / animaciones v2

Reglas invariables: **cross-browser** (JS timer + CSS transitions + SMIL · nada de scroll-timeline) · `prefers-reduced-motion` en todo (animaciones → estado final estático) · **IntersectionObserver** para arrancar al entrar en viewport y pausar fuera · **hover = pausa** en piezas auto-avanzantes · patrón **`.noanim` reset** (reinicio de loop sin flash: class que mata transitions + reflow + remove).

### Pieza 1 · Animación "Cómo funciona" (§3 · la estrella)

**Metáfora ganadora: "el tablero que corre solo"** (Opción B · vs Opción A red-de-nodos, archivada en `lab/howworks.html`). 5 beats auto-avanzantes (durs 2600/3000/3000/4600/6800ms) con etiqueta + barras de progreso clicables:

1. **Tus documentos** — 4 papeles dispersos y torcidos (Recetas · Excel · Fotos · Cuaderno) con líneas de texto simuladas.
2. **Zenet los entiende** — los docs convergen en una pila + línea de **scan teal** que la recorre.
3. **Los ordena** ("los estandariza — cada área en su lugar, como un manual") — la pila se despliega en **tablero de 6 tarjetas = las 6 áreas** (stagger).
4. **Los automatiza** ("corre solo, cada día") — palomas ✓ + barras llenándose **en ola** por el tablero, en ciclo.
5. **Tu mano derecha** — el tablero **se condensa en el núcleo teal** (el núcleo ES Zenet) + halo + Q&A: *"Zenet, ¿qué falta para cerrar el día de hoy?" / "Solo el conteo de barra. Lo demás ya cuadró — y ojo: el tomate sube el jueves."*
- Namespace `hw-` (colisión real evitada: `.beat` la usa §8).

### Pieza 2 · "En acción" (§6 · el reloj del día)

Layout compacto: tira de 6 chips de hora + **UNA tarjeta rotativa** (crossfade 260ms · min-height fija = sin brincos) + **barra de progreso** al pie (3.4s, se pausa con hover) + **núcleo respirando** (scale 1→1.16 · 2.6s). Los **6 momentos = las 6 áreas** en orden cronológico: 7:50 apertura (protocolos) · 10:30 recepción (compras) · 12:40 servicio (inventarios) · 4:15 mantenimiento · 5:30 cocina/receta (estandarización) · 10:45 cierre (costos). Namespace `day-`. Lección: 6 tarjetas apiladas = sección demasiado larga → apilar en el tiempo, no en el espacio.

### Heredadas de v1 (vigentes)

Hero (breathe + glow + flow-dots SMIL + hover nodos) · hovers de cards 450ms · §8 glow cursor-follow · zoom foto fundador.

---

## 8. Assets

- `assets/zenet-imagotipo.png` — imagotipo (charcoal) · nav (link a `/`) + footer.
- `assets/app-catalogos.png` — captura real de la app.
- `assets/alan-founder.jpg` — foto del fundador.
- `assets/og-image.png` — **v2 (2026-07-22):** copy hero v2 + regla y subline teal (la v1 decía "por el precio de una app" — claim retirado).
- `assets/favicon.png` + `apple-touch-icon.png` — **v2:** tile teal `#2E6E62` + "z" off-white (eran terracota).

---

## 9. Portabilidad (a producción Next.js)

- El estático **ya ES producción** (Vercel). Next.js sigue siendo trigger-based (leads a Supabase · SEO · componentes compartidos con el producto).
- Al portar: tokens `:root` → tema · componentes → componentes · los 3 scripts inline (cta-glow · hw-anim · day-clock) → hooks/componentes con el mismo patrón IO + reduced-motion · Formspree reusable o API route.

---

## 10. Cross-doc

| Doc | Relación |
|---|---|
| `00-estrategia-y-estructura.md` | Estructura (upstream) — v2 añadió "En acción" y partió §3; refrescar cuando se toque |
| `01-copy.md` **v0.2** | Copy v2 por sección (upstream) |
| `Branding/03-visual-identity/02-color.md` **v2.0** | **La decisión canónica del acento teal vive allá** · este spec la aplica |
| `Branding/03-visual-identity/00-marco` · `03-tipografia` · `05-aplicacion` | Identidad visual · pendiente refrescar referencias terracota→teal en su próxima pasada |
| `Product Strategy/04-go-to-market/08-learnings-de-validacion.md` | Los learnings de Carlos (protocolos · mantenimiento · personalización · anti-POS) motivaron el copy v2 y la sección En acción |

---

*Última actualización: 2026-07-22. v2.0 · EN VIVO en zenetapp.com (tag v2.0) · acento teal · 11 secciones · 2 piezas animadas · v1.0 archivada en `_archive/2026-07-22_02-prototipo-y-diseno-v1.md`.*
