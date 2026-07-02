---
name: Landing page · prototipo y diseño
description: El spec de diseño de la landing inicial de Zenet — cómo está construida y con qué reglas. Herramienta (Claude Design MCP · .dc.html self-contained), design tokens (:root), tipografía (Onest + Hanken), grid 12-col 1280, componentes/patrones (cards · eyebrows · botones · panels), movimiento (hover + animaciones), las 8 secciones, assets, y las decisiones visuales que la landing CONFIRMÓ (retroalimentan Branding/03-visual-identity). Fuente de verdad del diseño; el artefacto vivo son los .dc.html en Claude Design. Agent-readable.
type: seo-content
last_updated: 2026-07-01
status: active
version: 1.0
owner: Alan Bahena
---

# Landing page · prototipo y diseño

> El **spec de diseño** de la landing: cómo está construida y con qué reglas. La estructura vive en `00-estrategia-y-estructura`; el copy en `01-copy`; **aquí el diseño**.
>
> **Artefacto vivo:** los `.dc.html` en Claude Design (proyecto `a5e3be86-ce9e-4771-a4c2-a1b9e628211e`). **Este doc es el spec** — lo que se porta a producción (Next.js) es esto, no el `.dc.html`.
>
> Estado: ✅ **diseño cerrado v1.0** (2026-07-01) · página completa 8/8 + formulario · pendiente solo publicar.

---

## 1. Herramienta y arquitectura de archivos

- **Herramienta:** **Claude Design** (MCP `claude_design`) — reemplazó a Claude Artifacts. Render en vivo · Alan revisa cada preview (yo no tengo navegador en sesión).
- **Formato:** archivos `.dc.html` **self-contained** (HTML + CSS + JS inline · sin build). Los tokens viven embebidos en el `:root` de cada archivo = **design system de-facto** (NO hay design system formal en Claude Design · `list_design_systems` = `[]`).
- **Archivos (2 entregables + 2 referencia):**
  - `Landing.dc.html` — la página (8 secciones + footer).
  - `Hablemos.dc.html` — el formulario de contacto (Formspree `f/xrewyvab`). Mismos tokens/nav/footer.
  - `Hero.dc.html` · `Grid-foundation.dc.html` — referencia.
- **Workflow de edición (crítico):** Claude Design no tiene patch/append; `write_files` reescribe el archivo completo. Receta segura verificada: `curl serve_url` → quitar la inyección "omelette" → `str.replace` con `assert count==1` → golden local → `write_files` inline → re-`render_preview` → `curl` → diff vs golden (**MATCH obligatorio**). El diff-verify atrapa transcripciones perdidas.

---

## 2. Decisiones visuales confirmadas (→ retroalimentan `03-visual-identity`)

La landing era, por diseño, la superficie que cerraba las decisiones abiertas de `03-visual-identity/00-marco` §7. Cerradas 2026-06/07:

| Decisión abierta | ✅ Resuelta en la landing |
|---|---|
| **Matiz del acento** (naranja `#FF653B` vs terracota vs ámbar) | **Terracota `#CC5536`** (+ hover `#B84A2F`). El `#FF653B` del brandbook es muy saturado y **no pasa AA**. Terracota = cálido, sobrio, humano. |
| **Cuánto glass/blur vs flat** | Glass cálido **reservado a momentos clave** (hero: nodos glass; §8 CTA: gradiente mesh + glow). El resto **flat sobrio** (cards con borde 1px + rejilla punteada sutil). |
| **Escala/pesos tipográficos** | Ver §4. Display 600 · body 400/500/600 · `clamp()` fluido en todo. |
| **Tipografía (Geon de pago)** | **Geon NO se usa** (foundry Cretype · sin licencia webfont). Stand-ins gratuitos elegidos a propósito, más cálidos: **Onest** (display) + **Hanken Grotesk** (body) vía Google Fonts. |
| **Contraste / AA** | Corregido: textos secundarios en `teal-700` (no `grey-300`, que fallaba ~2:1). `grey-300` solo decorativo. |
| **Recurso "eyebrows"** | NUEVO recurso adoptado (§6 de este doc): etiqueta de sección en versalitas terracota. |

> **Acento contenido preservado:** terracota aparece solo en botones, subrayado del hero, números de card, eyebrows, kickers y núcleo del motivo — nunca inunda la superficie (principio "sobrio sobre llamativo").

---

## 3. Design tokens (`:root`) — la fuente

```css
/* Neutros / base */
--offwhite-50:  #FFFCFA;   /* fondo base principal */
--offwhite-100: #F9F4EF;   /* fondo de sección alterna (ritmo) */
--peach-100:    #F4DED0;   /* superficie cálida sutil */
--charcoal-900: #2B3738;   /* texto principal */
--teal-700:     #4B5E5E;   /* texto secundario · líneas */
--grey-300:     #A3B2AC;   /* SOLO decorativo (placeholders, browser-frame falso) */
--grey-100:     #D1DBD7;

/* Acento (terracota · contenido) */
--accent:       #CC5536;   /* botones · subrayado · números · eyebrows · núcleo motivo */
--accent-hover: #B84A2F;

/* Secundarios (fríos · sutiles) */
--teal-400:     #88BCAF;
--mint-200:     #BFE2D9;

/* Tipografía */
--font-display: "Onest", system-ui, sans-serif;
--font-body:    "Hanken Grotesk", system-ui, sans-serif;

/* Layout */
--container: 1280px;
--gutter: 24px;                    /* 20px ≤1024 · 16px ≤640 */
--margin: clamp(20px, 5vw, 64px);
--nav-h: 60px;
```

> Los neutros, teal, mint coinciden con los tokens del brandbook (`02-color`). Lo que **cambió vs brandbook:** `--accent` (terracota, no `#FF653B`) y las familias tipográficas (Onest+Hanken, no Geon+Roboto).

---

## 4. Tipografía

- **Display = Onest** (600) — headlines, títulos de sección, kickers, eyebrows, nombres.
- **Body = Hanken Grotesk** (400/500/600) — párrafos, UI, botones.
- Regla: **display = Onest · todo lo demás = Hanken**.
- Tamaños **fluidos** con `clamp()` (ej. headline hero `clamp(2rem, 4.4vw, 3.3rem)`; títulos de sección `clamp(1.55rem, 3.2vw, 2.35rem)`).
- `letter-spacing: -0.018em` en títulos (tighten display); `text-wrap: balance` en títulos, `pretty` en párrafos.
- **Sin MAYÚSCULAS para énfasis** — la única excepción es el eyebrow (etiqueta funcional pequeña, no énfasis de copy).

---

## 5. Grid y layout

- Contenedor **1280px** máx, márgenes `clamp(20px,5vw,64px)`.
- **Grid de 12 columnas** (12 → 8 tablet ≤1024 → 4 móvil ≤640), gutter 24/20/16.
- Hero: 2 modos responsive — desktop >1024 = una pantalla (`min-height: calc(100svh - nav)`, centrado, motivo dimensionado por alto); tablet/móvil = flujo natural con scroll.
- Ritmo de sección por **fondo alterno**: `.section` (off-white-50) vs `.section-alt` (off-white-100).
- Cards: `.pains`/`.changes`/`.agents` sobre el grid (span 3 o 4 → span 4 tablet → full móvil).

---

## 6. Componentes / patrones

- **Eyebrow (`.eyebrow`)** — etiqueta de sección: Onest 600, `0.75rem`, `letter-spacing: 0.14em`, `text-transform: uppercase`, color `--accent`. Centrada en `.section-head`; en §6 va left-aligned (`.founder-body .eyebrow { margin: 0 0 0.7rem }`). Nombra el beat de la narrativa (La realidad de hoy · El sistema · El cambio · El momento · El fundador · La invitación). Terracota **a propósito** (rima con los números 01–04 de las cards).
- **Botón primario (`.btn-primary`)** — terracota sólido, texto blanco, `border-radius: 999px`, sombra cálida, hover `translateY(-2px)` + `--accent-hover`.
- **Botón nav (`.btn-nav`)** — outline terracota (borde 1.5px), hover se rellena.
- **Card figura-en-caja (`.pain` / `.change`)** — figura Braun (SVG line-art) sobre rejilla punteada + número terracota 01–04 + título Onest + texto teal.
- **Card con borde (`.agent` / `.benefit`)** — borde 1px + sombra sutil + contenido.
- **Modelo por capas (`.stack` en §3)** — 3 capas (Tu realidad hoy → Zenet → El resultado) con conectores + flujo numerado 1→4.
- **Panel cálido (`.deal`, `.layer.is-zenet`)** — `background: color-mix(in srgb, var(--accent) 5%, off-white)` + borde terracota 22% — tinte cálido sutil.
- **CTA card (`.cta-card`, §8)** — gradiente mesh cálido (`::before` blobs `blur(58px)`) + scrim + botón blanco.
- **Figuras Braun** — SVG line-art abstracto sobre rejilla punteada; el **título carga el significado**, la figura aporta el lenguaje. Resuelve "abstracto vs reconocible".

---

## 7. Movimiento / animaciones

Todo **cross-browser** (nada de scroll-driven `animation-timeline`, que no corre en Safari) + guard `prefers-reduced-motion`. Curva firma: `cubic-bezier(0.22, 0.61, 0.36, 1)`.

| Sección | Movimiento |
|---|---|
| §1 Hero | núcleo del motivo respira · halo glow · puntos de "señal" fluyen al núcleo (SVG SMIL) · nodos exteriores con hover · entrada `rise` escalonada |
| §2 · §4 | hover en cards: figura se eleva `-4px` + sombra + borde entibia + número a opacidad plena (**450ms**) |
| §3 · §7 | hover: la card entera se eleva (`translateY(-4px)` + sombra + borde) |
| §5 | hover: la línea terracota (`.beat-rule`) se extiende 36→56px |
| §6 | hover: la foto hace zoom sutil `scale(1.04)` (600ms) dentro del marco `overflow:hidden` |
| §8 | glow blanco (`mix-blend: soft-light`) que **sigue el cursor** (`pointermove` → CSS vars `--mx/--my`) |

> **Lección:** 260ms se sintió brusco → hover a **450ms**. El scroll-reveal global se descartó (no confiable cross-browser); el cursor-follow sí corre en todos lados.

---

## 8. Las 8 secciones (visual)

1. **Hero** — headline 2 líneas + subhead + botón + motivo de red cálida (núcleo terracota + 6 nodos glass).
2. **El problema** — 4 cards figura-en-caja (pains) · `section-alt`.
3. **Qué es Zenet** — 6 cards de especialistas + modelo por capas 1→4 + panel "Manual Operativo vivo" con screenshot real (`app-catalogos.png`).
4. **Qué cambia** — 4 cards espejo de §2 + cierre emocional · `section-alt`.
5. **Por qué ahora** — 2 beats editoriales con línea terracota.
6. **Por qué Alan** — 2 col (foto real 4:5 + texto 1ª persona) · `section-alt`.
7. **La invitación** — 4 beneficios + panel "deal" cálido.
8. **Cierre / CTA** — card aurora-gradient + glow que sigue el cursor + botón blanco.
+ **Footer** — logo + tagline + copyright.

---

## 9. Assets

- `assets/zenet-imagotipo.png` — imagotipo real (charcoal), 24px nav / 26px footer.
- `assets/app-catalogos.png` — captura real de la app (pantalla Catálogos + asistente · "Mariscos la esquina") con el imagotipo blanco compositado en el sidebar.
- `assets/alan-founder.jpg` — foto real de Alan (retocada en Gemini · fondo off-white cálido), `object-fit: cover` en marco 4:5.

---

## 10. Portabilidad (a producción)

- Este HTML estático + tokens **se porta 1:1 a Next.js** (o se despliega tal cual en Netlify/Vercel). Formspree es client-side/agnóstico al framework.
- El link de Claude Design **NO es un sitio público** (requiere auth) → para ir en vivo hay que **desplegar** (exportar estático o reconstruir en Next.js).
- Al portar: los tokens del `:root` → variables/tema; los componentes → componentes; Formspree endpoint reusable (o migrar a API route + Supabase para leads en la DB).

---

## 11. Cross-doc

| Doc | Relación |
|---|---|
| `00-estrategia-y-estructura.md` | Estructura (upstream) |
| `01-copy.md` | Copy por sección (upstream) |
| `Branding/03-visual-identity/00-marco` · `02-color` · `03-tipografia` · `05-aplicacion` | Identidad visual · **retroalimentados** con lo que esta landing confirmó (terracota #CC5536 · Onest+Hanken · glass cálido · eyebrows) |

---

*Última actualización: 2026-07-01. v1.0 · diseño cerrado (8/8 + formulario) · pendiente publicar. Artefacto vivo en Claude Design; este doc es el spec.*
