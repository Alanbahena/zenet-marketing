---
name: Sistema visual y generación con AI
description: El sistema visual personal de Alan para LinkedIn (pre-reveal · Alan-flavored, NO marca Zenet) + la guía para generar imágenes on-brand con Nano Banana Pro (Gemini). Principios visuales anti-hype · paleta validada (carbón + off-white + ámbar firma + azul técnico · modo dual) · tipografía · tipos de imagen · guía de prompts + guardrails · aplicaciones (edición de headshot · banner/cover · imágenes de post por pillar). Paleta validada con 3 pruebas reales 2026-06-03. v0.1 · se afina conforme se crea contenido.
type: social-media
last_updated: 2026-06-03
status: active
version: 0.1
owner: Alan Bahena
---

# Sistema visual y generación con AI

> El sistema visual **personal** de Alan para LinkedIn + la guía para que la AI (Nano Banana Pro / Gemini) genere **on-brand**, no genérico.
>
> **Por qué importa:** generar imágenes con AI **sin** un sistema produce el look "AI tech genérico" (cerebros, neón, glow) — justo lo que rompe el anti-hype de Alan. Este doc es el **guardarraíl** que hace que la AI se vea como Alan.

**Frontera:** esto es el sistema **personal de Alan** pre-reveal (Zenet en stealth). La identidad visual de marca **Zenet** vivirá en `Branding/03-visual-identity` + `05-design-system` (pending) · post-reveal armonizan.

---

## Índice

1. Principios visuales
2. Paleta (validada)
3. Tipografía
4. Tipos de imagen
5. Guía Nano Banana Pro
6. Aplicaciones (headshot · banner · post por pillar)
7. Estado + cross-doc deps

---

## 1. Principios visuales

| ✅ Favorecer | ⛔ Evitar |
|---|---|
| Diagramas de sistema · esquemas tipo blueprint | Cerebros AI · circuitos · hologramas |
| Líneas planas, mate, precisas (dibujo de ingeniería) | Glow · neón · gradientes saturados |
| Paleta restringida · **un acento por pieza** | Multicolor · varios acentos peleando |
| Fotografía real (laboratorio · proceso · headshot) | Stock people · apretones de manos · 3D glossy |
| Quote cards editoriales · mucho aire | Gráficas motivacionales con frase |
| Data viz mínima | Dashboards con 40 métricas |

**Regla raíz:** se ve como **lo hizo un ingeniero de sistemas**, no un departamento de marketing. Sobrio, preciso, humano.

---

## 2. Paleta (validada)

> **Validada con 3 pruebas reales en Nano Banana Pro (2026-06-03)** — diagrama técnico, headshot, quote card. Funcionó en los tres modos. Ver §6 referencias.

| Rol | Color | Uso |
|---|---|---|
| **Base oscura** | carbón `#14161B` | fondos · headshot · banner · diagramas |
| **Líneas / texto** | off-white `#ECEAE3` | line-work y texto default |
| **Acento firma** | ámbar tenue `#E2A33C` | **un** elemento por pieza · el sello de Alan |
| **Azul de plano** *(reservado)* | drafting blue `#3E5B7D` | **solo** diagramas técnicos (pillar 3) |

### Modo dual (los mismos 4 colores, volteados)

| Modo | Fondo | Texto/líneas | Acento | Para |
|---|---|---|---|---|
| **Oscuro** (default) | carbón | off-white | ámbar (o azul técnico) | journey · técnico · behind-scenes |
| **Claro cálido** | off-white | carbón | ámbar | quote cards · operador · industria |

El **modo dual da ritmo al feed** (oscuro técnico vs claro-cálido humano) sin perder coherencia. El **ámbar es el hilo** que une todo.

### Disciplina

- Mayormente carbón + off-white · **un acento por pieza** (ámbar casi siempre · azul solo en lo técnico).
- El azul **nunca** como color decorativo general — solo donde hay arquitectura real. Evita el "mar de AI azul".
- Nada de glow/neón. Líneas planas y mate.

---

## 3. Tipografía

- **Una sans-serif limpia** (geométrica/grotesque · ej. Inter, Helvetica Neue, o la default de Nano Banana). Sin serifs decorativas, sin display chillón.
- **Bold** para el enunciado central · regular para lo demás.
- **Mucho aire** · márgenes generosos · alineación izquierda (como el quote card validado).
- En imágenes con texto: legibilidad mobile primero (tamaño generoso · alto contraste).
- **Sin** texto en MAYÚSCULAS para énfasis · sin emojis dentro de la imagen.

---

## 4. Tipos de imagen

| Tipo | Cuándo | Modo | Ejemplo |
|---|---|---|---|
| **Diagrama de sistema** | Pillar 3 técnico · arquitectura, flujos | Oscuro + azul + 1 ámbar | Prueba 1 (Memory→Agent→Tools) |
| **Quote card** | Pillar 4 operador · pillar 2 industria (frase) | Claro cálido + ámbar | Prueba 3 ("No es negligencia…") |
| **Foto real** | Pillar 5 behind-scenes · pillar 1 journey | Oscuro (el ambiente del laboratorio) | el proceso · el escritorio · TJ |
| **Screenshot anotado** | Pillar 3 técnico · pillar 1 | Cualquiera + ámbar para resaltar | código · arquitectura |
| **Data viz mínima** | Pillar 2 industria | Cualquiera + 1 acento | el 10% · las 22-27 hrs |
| **Solo texto (sin imagen)** | Cualquier pillar · a veces el mejor visual es ninguno | — | LinkedIn renderiza texto limpio |

> No todo post necesita imagen. Un post de texto bien escrito (estilo tus VE-01, VE-02) muchas veces rinde más que una imagen forzada.

---

## 5. Guía Nano Banana Pro

### 5.1 Estructura de prompt (la fórmula)

```
[Tipo de imagen] + [estilo: engineering-blueprint / editorial].
Background: [color hex].
[Elementos] drawn in [color hex] lines.
Highlight ONE element with warm amber #E2A33C.
Flat and matte — NO glow, NO neon, NO gradients, NO 3D.
[Formato / aspect ratio]. Generous negative space.
```

### 5.2 Guardrails (siempre incluir)

- **Siempre:** especificar hex · "flat and matte" · "NO glow, NO neon, NO gradients, NO 3D" · "generous negative space".
- **Consistencia:** usar los mismos términos de paleta cada vez · si se puede, referenciar una imagen previa para mantener el estilo.
- **Un acento:** pedir explícitamente "ONE element with amber" — si no, la AI mete acentos de más.

### 5.3 Aspect ratios LinkedIn

| Superficie | Ratio · px |
|---|---|
| Post (cuadrado) | 1:1 · 1080-1200 |
| Post (vertical, más real estate) | 4:5 · 1080×1350 |
| Banner / cover | ~4:1 · **1584×396** |
| Foto de perfil | 1:1 · mín. 400×400 · **recomendado 800×800–1000×1000** (nitidez retina) · máx 8MB · se recorta a círculo |

### 5.4 Watermark

Las salidas de Gemini traen el watermark ✦ (esquina). Para publicar: **recortar o exportar limpio.**

### 5.5 Los 3 prompts validados (2026-06-03)

Sirven de base · viven completos + reusables en `_templates/prompts-imagenes-ai.md`.

1. **Diagrama técnico** (oscuro + azul mate + 1 ámbar) → resultado: sobrio, "dibujo de ingeniería", muy superior al glow original.
2. **Edición headshot** (fondo carbón · cara intacta) → ver §6.1.
3. **Quote card** (off-white cálido + tinta carbón + subrayado ámbar) → editorial, humano, premium.

---

## 6. Aplicaciones

### 6.1 Foto de perfil (headshot)

**Regla:** editar **fondo + (opcional) playera** · **NUNCA la cara** (autenticidad = la marca).

Prompt validado:
```
Edit this portrait. Replace the background with a smooth, solid dark charcoal
(#14161B) with subtle professional studio lighting. Keep the person's face, hair,
skin and expression EXACTLY as they are — do not alter or beautify the face in any
way. Keep the black t-shirt. Clean, natural, realistic. Headshot framing.
```
→ exportar **cuadrado 1:1 · mín. 400×400 px · ideal 800×800–1000×1000** (nitidez retina · máx 8MB · PNG o JPG) · recortar a cuadrado/círculo · sin watermark · verificar que sigue siendo *Alan*, no una versión idealizada.

### 6.2 Foto de cover / banner

**Aprendizaje (2026-06-03):** un banner abstracto-minimal sale **vacío y no comunica** (probado · falló). El banner debe **comunicar**: nombre + tagline + un arco etiquetado con significado. Referencia de estructura: la versión previa de Alan (nombre + tagline + arco *Physical Systems → Data Infrastructure → Operational Intelligence*) — estructura correcta, solo en paleta equivocada (clara/azul) + íconos clip-art. El fix: **esa estructura en nuestra paleta dark + ámbar, con íconos esquemáticos limpios — CON nombre, SIN foto** (la foto de perfil ya se sobrepone sola).

**Importante:** el círculo de la foto de perfil tapa el **bottom-left** → ese cuarto se deja limpio.

Prompt (por validar cuando resetee Gemini):
```
A professional LinkedIn cover banner, clean engineering-blueprint style. Aspect ratio 4:1.
Background: solid dark charcoal #14161B with a very subtle graph-paper grid (barely visible).
No portrait/photo in the banner.
• Name "Alan Bahena" in clean off-white #ECEAE3 bold sans-serif, top area (away from the bottom-left).
• A tagline below or beside the name in off-white sans-serif: "Building systems for real-world operations"
  — set "real-world operations" in warm amber #E2A33C.
• A horizontal 3-step flow in thin muted drafting blue #3E5B7D line-work: three simple schematic
  icons connected by arrows, labeled "Physical Systems" → "Data Infrastructure" → "Operational
  Intelligence". Highlight the final node with warm amber #E2A33C.
Flat and matte. NO glow, NO neon, NO gradients, NO 3D, NO clip-art — clean line drawings only.
Keep the bottom-left lighter/clearer (the LinkedIn profile photo overlaps that corner).
Sober, precise, balanced composition.
```

**Si el texto sale chueco** (los banners con layout específico a veces salen mal en image-gen): generar **solo el fondo + el diagrama** en dark/azul/ámbar y **agregar el nombre + tagline encima en Canva / Figma / Keynote** — control total del texto. Exportar 1584×396 sin watermark.

### 6.3 Imágenes de post por pillar

Mapeo (cf. `04-pillars` §3 + tipos §4 arriba):

| Pillar | Tipo de imagen | Modo |
|---|---|---|
| 1 Founder journey | foto real / texto mínimo | oscuro |
| 2 Industria | data viz mínima / quote card | claro o oscuro |
| 3 Técnico | diagrama de sistema | oscuro + azul + ámbar |
| 4 Operador | quote card (verbatim) | claro cálido |
| 5 Behind-scenes | foto real del laboratorio | oscuro |
| 6 Case studies *(post-reveal)* | antes/después · data | oscuro o claro |

El ámbar aparece en todos → reconocible. El azul solo en técnico → intencional.

---

## 7. Estado + cross-doc deps

### 7.1 Estado v0.1

Cerrado 2026-06-03 · **paleta validada** con 3 pruebas reales. Cubre principios · paleta + modo dual · tipografía · tipos de imagen · guía de prompts + guardrails · aplicaciones (headshot validado · banner por validar · post por pillar). Pendiente: generar el banner cuando resetee Gemini.

### 7.2 Version triggers

| Transición | Trigger |
|---|---|
| v0.1 → v0.2 | Banner validado · +ejemplos reales por pillar · prompts afinados conforme se crea contenido |
| v0.2 → v1.0 | Sistema visual probado en ~1 mes de feed · coherencia validada · headshot + banner instalados |
| Post-reveal | Armonizar con identidad visual de marca Zenet (Branding) |

### 7.3 Cross-doc deps

| Doc | Relación |
|---|---|
| `03-perfil-linkedin.md` §5 | Brief de foto + banner (este doc da el tratamiento) |
| `04-pillars-y-sistema-editorial.md` | Qué tipo de imagen por pillar |
| `02-voz-y-estilo` | El texto que va en quote cards (verbatim · voz) |
| `00-marco` §3 | Stealth (sin logos · sin producto) |
| `_templates/prompts-imagenes-ai.md` | Librería completa de prompts reusables |
| `Branding/03-visual-identity` (pending) | Identidad visual de marca Zenet · armoniza post-reveal |

---

*Última actualización: 2026-06-03. Paleta validada · se afina conforme se crea contenido.*
