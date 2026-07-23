---
name: Color
description: Sistema de color de marca Zenet (capa marketing) · tokens explícitos (hex) · acento canónico teal profundo #2E6E62 (v2 · descartados terracota #CC5536 y naranja #FF653B) · base cálida off-white dominante + calidez vía neutros/glass cálido · disciplina acento-no-flood · confirmado en producción con la landing v2 (zenetapp.com). Token-first / agent-readable.
type: visual-identity
last_updated: 2026-07-22
status: active
version: 2.0
owner: Alan Bahena
---

# Color

> Cargar `00-marco` primero. Token-first: usa los hex directamente. Estados: ✅ · 🟡 base · 🚧.

## Tokens

### Familia fría / sobria (Sabio · Braun)
| Token | Hex | Rol |
|---|---|---|
| grey-100 | `#D1DBD7` | fondo claro alterno · superficies |
| grey-300 | `#A3B2AC` | grises medios · bordes · UI sutil (solo decorativo · falla AA como texto) |
| teal-700 | `#4B5E5E` | texto secundario · líneas |
| charcoal-900 | `#2B3738` | texto principal · fondos oscuros |
| teal-deep | `#284044` | fondo oscuro alterno |

### Off-white / neutros cálidos (base dominante)
| Token | Hex | Rol |
|---|---|---|
| offwhite-50 | `#FFFCFA` | **fondo base principal** |
| offwhite-100 | `#F9F4EF` | fondo base alterno · superficies |
| peach-100 | `#F4DED0` | superficie cálida sutil · glass cálido · halo del motivo |

### Acento + secundarios
| Token | Hex | Rol · estado |
|---|---|---|
| **accent (teal profundo)** | `#2E6E62` | ✅ **acento canónico CONTENIDO** (CTA · subrayado · números · eyebrows · núcleo del motivo · chips) · **en producción (landing v2)** |
| accent-hover | `#265C52` | hover del acento (botones) |
| teal-400 | `#88BCAF` | familia del acento · highlight del núcleo glass · líneas/conectores suaves |
| mint-200 | `#BFE2D9` | secundario fresco · superficies suaves |
| ~~terracota~~ | ~~`#CC5536`~~ | ⛔ **descartado como acento (2026-07-22 · v2)** — ver decisión abajo · hover `#B84A2F` descartado con él |
| ~~orange-accent~~ | ~~`#FF653B`~~ | ⛔ descartado desde v1 — muy saturado + no pasa AA (era el naranja del brandbook) |
| maroon | `#753941` | acento oscuro alterno · usar con cuidado |

## Roles

| Rol | Token |
|---|---|
| Fondo dominante | `#FFFCFA` / `#F9F4EF` |
| Texto | `#2B3738` (principal) · `#4B5E5E` (secundario) |
| **Acento** | **teal profundo `#2E6E62` contenido** · hover `#265C52` |
| Familia del acento | `#88BCAF` (highlight/conectores) · `#BFE2D9` (superficies) |
| Calidez | base off-white cálida + `#F4DED0` (glass · halo · nodos perla del motivo) |

**Arquitectura térmica v2 — base cálida / acento frío.** En v1 la calidez venía del acento (terracota) sobre base neutra. En v2 se invierte: la **base y el motivo aportan la calidez** (off-white cálido · peach · nodos perla glass) y el **acento aporta el orden** (teal profundo). El resultado conserva "cálido sobre frío-tech" (principio 2 del marco) sin depender de un acento naranja.

## Disciplina

- **Acento contenido, NO flood** — el teal resalta (CTA · subrayado · números · eyebrows · núcleo del motivo · chips activos), no inunda la superficie. Cf. `00-marco` §3 principio 1.
- Base mayormente off-white + sobrio · calidez vía neutros cálidos + glass cálido (NO vía acento).

## Decisiones

### ✅ v2 — acento teal profundo (2026-07-22 · confirmado en producción)

- ✅ **Acento = teal profundo `#2E6E62`** (hover `#265C52`). Decidido en el color-lab de la landing v2 (`zenet-landing` · `lab/color.html`) y desplegado a producción (`zenetapp.com` · tag `v2.0`). Razones:
  1. **Diferenciación vs. el mar-de-naranja del food-tech** — los competidores (POS · delivery · food-apps) saturan naranja/rojo; el terracota nos metía a esa alberca visual.
  2. **"Orden/zen sobre apetito"** — Zenet es back-of-house: vende orden y claridad, no comida. El argumento "el naranja abre el apetito" no aplica (no somos food-facing).
  3. **Coherencia interna** — el teal sale de la propia familia del brandbook (teal-400/700 · mint); no es un color importado.
- ✅ **Terracota `#CC5536` descartado como acento** — la familia cálida (peach · off-white cálido) se queda en superficies/glass/motivo, donde vive la calidez de marca.
- ✅ **Propagado (2026-07-22):** landing (`index.html`) · formulario (`hablemos.html`) · OG image · favicon/apple-touch-icon.
- ✅ **Contraste / AA** — blanco sobre `#2E6E62` pasa AA en botones/chips · texto secundario sigue en `teal-700` · `grey-300` solo decorativo.
- ✅ **Un solo acento** — teal profundo es el único acento; `teal-400`/`mint-200` son familia de apoyo, no acentos rivales.

### Heredadas de v1 (siguen vigentes)

- ⛔ `#FF653B` descartado (saturación + AA).
- Base off-white dominante · sobriedad Braun.

### 🚧 Abiertas

- **Variante de logo** en teal/turquesa para superficies de marca (el imagotipo actual funciona sobre claro; revisar wordmark/isotipo en teal) · trigger: siguiente pieza de identidad (deck · social Zenet post-reveal).
- **Producto (capa 1 · `05-design-system`)** — el production repo mantiene su propio sistema; alinear al teal cuando se porte el design system · trigger: port de `05-design-system`.
- **Modo oscuro** para superficies de marketing — sigue abierto (la landing es modo claro).

---

*Última actualización: 2026-07-22. v2.0 · acento teal profundo `#2E6E62` en producción con la landing v2 · terracota descartado como acento (v1.0 archivada en `_archive/2026-07-22_02-color-v1.md`).*
