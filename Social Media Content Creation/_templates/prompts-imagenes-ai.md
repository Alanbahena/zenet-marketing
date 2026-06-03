---
name: Prompts de imágenes con AI (Nano Banana Pro / Gemini)
description: La librería copy-paste de prompts validados para generar imágenes on-brand con Nano Banana Pro · diagrama técnico · quote cards (claro y oscuro) · edición de headshot · banner/cover. Cada prompt encodea la paleta (carbón + off-white + ámbar firma + azul técnico) + guardrails anti-hype. El sistema/spec vive en 05-visual; aquí viven los prompts listos para usar.
type: social-media
last_updated: 2026-06-03
status: active
version: 0.1
owner: Alan Bahena
---

# Prompts de imágenes con AI (Nano Banana Pro / Gemini)

> La **librería lista para pegar.** El sistema visual (principios · paleta · tipos de imagen) vive en `05-sistema-visual-y-generacion-ai.md`. Aquí viven los **prompts reusables** — copiar, ajustar la parte `[entre corchetes]`, generar.

**Paleta:** carbón `#14161B` · off-white `#ECEAE3` · ámbar firma `#E2A33C` · azul de plano `#3E5B7D` (solo técnico).

**Siempre:** recortar/exportar sin el watermark ✦ de Gemini · un acento por pieza · flat y matte (nada de glow).

---

## Fórmula base (para crear un prompt nuevo)

```
[Tipo de imagen] + [estilo: engineering-blueprint / editorial].
Background: [color hex].
[Elementos] drawn in [color hex] lines.
Highlight ONE element with warm amber #E2A33C.
Flat and matte — NO glow, NO neon, NO gradients, NO 3D.
[Aspect ratio]. Generous negative space.
```

---

## 1. Diagrama de sistema técnico — ✅ validado
**Para:** pillar 3 (técnico) · modo oscuro · azul + 1 toque ámbar.

```
A clean, minimal technical system diagram, engineering-blueprint style.
Background: solid dark charcoal #14161B.
Diagram drawn in thin, precise lines in muted drafting blue #3E5B7D:
[describe los nodos y el flujo — ej.: a center box labeled "Agent", a segmented ring
labeled "Memory" on the left linked by an arrow, a cluster of cubes labeled "Tools"
on the right linked by arrows].
Highlight ONE single element with a warm amber accent #E2A33C.
Flat and matte — absolutely NO glow, NO neon, NO gradients, NO 3D.
Looks like a precise technical drawing. Generous negative space. Square 1:1.
```

---

## 2. Quote card claro-cálido — ✅ validado
**Para:** pillar 4 (operador) · pillar 2 (industria) · el verbatim/frase humana.

```
A minimal social-media quote card, editorial style.
Background: warm off-white #ECEAE3.
A short quote set in clean dark charcoal #14161B sans-serif type, left-aligned,
generous margins, lots of white space. One small warm amber #E2A33C underline as
the only accent. No photos, no icons, no logos, no clutter. Calm and restrained,
like a well-set book page. Square 1:1.
Quote: "[pega aquí el verbatim / la frase]"
```

---

## 3. Quote card oscuro — variante
**Para:** una frase punchy en modo oscuro (pillar 1 journey · pillar 3).

```
A minimal social-media quote card. Background: solid dark charcoal #14161B.
Quote in clean off-white #ECEAE3 sans-serif, left-aligned, generous margins.
One small warm amber #E2A33C underline as the only accent.
Flat, matte, no glow. Square 1:1.
Quote: "[pega aquí la frase]"
```

---

## 4. Edición de headshot — ✅ validado
**Para:** la foto de perfil · **sube tu foto** + este prompt. Edita fondo, **no la cara**.

```
Edit this portrait. Replace the background with a smooth medium warm grey (#4A4641),
clearly lighter than a dark charcoal banner so the subject separates and stands out.
Keep the person's face, hair, skin and expression EXACTLY as they are — do not alter
or beautify the face in any way. Keep the black t-shirt. Subtle professional studio
lighting. Clean, natural, realistic. Headshot framing.
```
→ exportar cuadrado 1:1 · ~800×800 · sin watermark · verificar que sigues siendo *tú*.

**Aprendizaje (validado 2026-06-03):** foto oscura sobre banner oscuro se funde · **gris medio cálido `#4A4641` separa la cara del banner** y la hace el foco. (Si el banner fuera claro, el fondo de la foto iría oscuro — siempre contraste.)

---

## 5. Banner / cover — ✅ validado (con nombre · sin foto)
**Para:** el cover de LinkedIn · 1584×396. **Plan B** si el texto sale chueco: generar solo el diagrama y poner el texto en Canva/Figma.

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

---

## Guardrails (checklist antes de generar)

- [ ] ¿Especifiqué los **hex** de la paleta?
- [ ] ¿Pedí **"flat and matte · NO glow, NO neon, NO gradients, NO 3D"**?
- [ ] ¿**Un solo acento** (ámbar · azul solo si es técnico)?
- [ ] ¿**Generous negative space**?
- [ ] ¿El **aspect ratio** correcto? (post 1:1 · banner 4:1)
- [ ] Al exportar: ¿**sin watermark** ✦?

---

## Notas

- **Consistencia:** usar los mismos términos de paleta cada vez · si se puede, referenciar una imagen previa para mantener el estilo.
- **Cross-doc:** sistema/spec → `05-visual` · qué imagen por pillar → `05-visual` §6.3 + `04-pillars` §3 · texto de los quote cards → `02-voz-y-estilo` / `banco-de-ideas`.
- **Vivo:** conforme se validen prompts nuevos (o se afinen los de aquí), se actualizan + se marca ✅.

---

*Última actualización: 2026-06-03. Prompts 1, 2 (cards), 4 (headshot · gris cálido) y 5 (banner) validados.*
