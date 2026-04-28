# CLAUDE.md — Zenet Marketing

## Project Overview

This is the **marketing operations workspace for Zenet**. It centralizes brand context, market research, content templates, standard operating procedures, and Claude Code skills that automate recurring marketing work — organized by marketing department.

This is NOT a software project. It contains documentation, templates, and slash-command skills. The Zenet production software (Next.js + FastAPI + Supabase) lives in a separate repository.

The workspace is designed so that any contributor — Alan, a freelancer, or an AI agent (Claude Code) — can pick up a marketing task and execute it consistently with Zenet's brand, voice, and strategy.

---

## Status (as of 2026-04-28)

| Section | Status | Notes |
|---|---|---|
| **Branding / 01-brand-strategy** | ✓ Complete | mision-vision-valores · posicionamiento · promesa-de-marca · personalidad-y-arquetipo |
| **Branding / 02-brand-story** | ✓ Complete | origin-story · narrativa |
| **Branding / 03-visual-identity** | Pending | Awaiting visual decisions + design system port |
| **Branding / 04-voice-and-tone** | ✓ Complete | voz-y-tono · vocabulario · reglas-de-redaccion |
| **Branding / 05-design-system** | Pending | To be ported from production repo |
| **Branding / 06-application-examples** | Pending | Needs real published outputs to point at |
| **Branding / 07-guidelines** | Pending | Will codify precedent as it accumulates |
| **Branding — supporting folders** | Empty | _sop, _templates, skills, assets |
| **Analytics and Reporting** | Pending | |
| **Email and CRM** | Pending | |
| **Market Research and Analysis** | 🚧 Next up | Will be built after pause on remaining branding docs |
| **Product Strategy** | Pending | |
| **SEO and Content** | Pending | |
| **Social Media Content Creation** | Pending | |
| **Value Proposition** | Pending | Likely consolidates into Product Strategy |
| **Root `_context/`** | Empty | For shared cross-department context (TBD) |

**Current strategic decision:** branding has a strong foundation (strategy + story + voice/tone). The remaining branding docs are deferred until either real outputs exist (for examples/guidelines) or visual decisions are firmer (for visual identity). Next priority is **Market Research and Analysis**.

---

## Project Structure

```
claude_code/                                # Root of this workspace
├── CLAUDE.md                               # This file
├── README.md
│
├── _context/                               # Shared cross-department context (root-level)
│
├── Branding/                               # Brand foundation
│   ├── _context/                           # Brand reference material
│   │   ├── 01-brand-strategy/              ✓
│   │   │   ├── mision-vision-valores.md
│   │   │   ├── posicionamiento.md
│   │   │   ├── promesa-de-marca.md
│   │   │   └── personalidad-y-arquetipo.md
│   │   ├── 02-brand-story/                 ✓
│   │   │   ├── origin-story.md
│   │   │   └── narrativa.md
│   │   ├── 03-visual-identity/             pending
│   │   ├── 04-voice-and-tone/              ✓
│   │   │   ├── voz-y-tono.md
│   │   │   ├── vocabulario.md
│   │   │   └── reglas-de-redaccion.md
│   │   ├── 05-design-system/               pending
│   │   ├── 06-application-examples/        pending
│   │   ├── 07-guidelines/                  pending
│   │   └── assets/                         empty (logos, colors, icons, illustrations, photography, templates)
│   ├── _sop/                               empty
│   ├── _templates/                         empty
│   └── skills/                             empty
│
├── Analytics and Reporting/                # Each department follows the same pattern:
├── Email and CRM/                          #   _context/  → reference material
├── Market Research and Analysis/           #   _sop/      → standard operating procedures
├── Product Strategy/                       #   _templates/ → reusable output templates
├── SEO and Content/                        #   skills/    → Claude Code slash commands
├── Social Media Content Creation/
└── Value Proposition/
```

### The department pattern

Every marketing department follows the same internal structure:

| Subfolder | Purpose | What goes inside |
|---|---|---|
| `_context/` | Reference material the department needs | Markdown documents organized by topic, often in numbered subsections (01-, 02-, ...) |
| `_sop/` | Standard operating procedures | Step-by-step guides for recurring department tasks |
| `_templates/` | Reusable output templates | Briefs, decks, copy frameworks, post structures |
| `skills/` | Claude Code slash commands | Markdown files defining `/command-name` workflows |

The `_` prefix marks these as supporting/meta folders. They sort to the top alphabetically and are clearly differentiated from primary content (when primary content exists).

---

## Conventions

### File naming

- **kebab-case** for filenames: `mision-vision-valores.md`, `posicionamiento.md`.
- **Spanish** for content filenames (since content is in Spanish).
- **Numbered prefixes** when sequence matters (`01-brand-strategy`, `02-brand-story`).

### Frontmatter

Every primary document begins with this YAML frontmatter:

```yaml
---
name: [Document Title in Spanish]
description: [One-line description — used to decide relevance]
type: [brand-strategy | brand-story | voice-and-tone | etc.]
last_updated: YYYY-MM-DD
status: active | draft | deprecated
version: X.Y
owner: [Name of document owner]
---
```

### Language

| Element | Language |
|---|---|
| Document content (body) | Spanish |
| Frontmatter field names | English (`name`, `description`, etc.) |
| Frontmatter field values | Mixed — names/descriptions in Spanish, type/status in English |
| Folder names | English |
| File names | Spanish (kebab-case) |
| Code, conventions, technical metadata | English |

### Document types (current `type` field values)

- `brand-strategy` — strategic foundation docs (mission, positioning, etc.)
- `brand-story` — biographical and mythological narrative docs
- `voice-and-tone` — voice principles, vocabulary, writing rules

New types will be added as new departments come online (`market-research`, `competitive-analysis`, `content-template`, etc.).

### Versioning

The marketing project is a git repository. Three layers of version control:

1. **Git** — full history, diffs, rollback (the foundation).
2. **Frontmatter metadata** — `last_updated`, `version`, `status` so each file is self-describing without reading git history.
3. **`_archive/` folders** — for *major* version changes (rebrands, repositioning, visual identity overhauls). Old version moves to `_archive/` with date prefix (`2026-10-15_color-palette.md`); new version replaces in place; section's `_changelog.md` notes why.

Small edits live in git history. Major shifts get archived. No filename versioning (`logo-v2.md`).

### Markdown style

- Sentence case in headings (matching `Branding/_context/04-voice-and-tone/reglas-de-redaccion.md`).
- Tables for structured data and comparisons.
- Block quotes for principles, central statements, or canonical text.
- Numbered sub-sections within long documents (1, 1.1, 1.2, 2, 2.1...).

---

## The Zenet Brand (quick reference)

This is a tight summary so any contributor or agent gets oriented in 60 seconds. **Full strategic foundation lives in `Branding/_context/01-brand-strategy/` and `02-brand-story/`. This is a pointer, not a replacement.**

### Categoría

> **Sistema operativo cognitivo para back-of-house de restaurantes.**

Not a POS. Not an inventory app. Not an ERP. Not a chatbot.

### Audiencia primaria

Dueños operadores y gerentes operativos de restaurantes independientes con 1-5 sucursales, en crecimiento, en México y LATAM. Casual independiente como cuisine focus.

### Visión

> *"Que cualquier restaurante en crecimiento opere con la claridad, el orden y la inteligencia que antes solo tenían las grandes cadenas — sin la complejidad ni el costo."*

### Misión

> *"Construir el sistema operativo que convierte el caos diario del back-of-house en operaciones claras, estandarizadas e inteligentes — acompañando al operador en cada paso, amplificando su criterio sin reemplazarlo."*

### Valores (4)

1. **Aumentar, no reemplazar**
2. **Sistema, no herramienta**
3. **Acompañar, no abandonar**
4. **Simplicidad radical**

### Diferenciadores (5)

1. Sistema, no herramienta
2. Interpretación, no solo medición
3. Acompañamiento, no software pasivo
4. Estandarización como punto de entrada
5. Modular, no monolítico

### Promesa central

> *"Convierte el caos diario de tu operación en claridad, orden y acompañamiento. Lo que antes tomaba días, ahora toma horas."*

Cuatro promesas específicas: **tiempo recuperado · dinero ahorrado · tranquilidad operativa · escalamiento ordenado.**

### Arquetipo y rol

- **Arquetipo interno (Jung):** Sabio (primario) + Cuidador (secundario).
- **Rol externo (cliente):** *Tu mano derecha operativa* — anclado en la analogía del **sous chef**: conoce la cocina tan bien como el chef ejecutivo, ejecuta sin pedir crédito, hace ver bien al operador, nunca aspira a ser el chef.

### Antagonista narrativo

- **Causa estructural:** la ausencia de sistemas.
- **Efecto observable:** el caos operativo.
- **Capa cultural:** la creencia silenciosa de que el caos es el precio inevitable de tener un restaurante.

### Voz — 9 principios invariables

| Dimensión | Principios |
|---|---|
| Palabras | Lenguaje del operador · Sin vocabulario tech · Sin hype |
| Estructura | Voz activa · Una idea por oración · Concreto sobre abstracto |
| Postura | El por qué (no solo el qué) · Honestidad sobre marketing · Si no se entiende, fallamos |

### Tono base (espectros de personalidad)

Profesional · Serio con calidez ocasional · Calmado · Honesto/cauteloso · Directo · Por encima de la pelea · Humor ocasional y seco.

### El nombre Zenet

> **Zen** (orden) **+ net** (red) — orden en una red.

Siempre escrito **Zenet** (Z mayúscula, resto minúsculas). El producto ES el agente — no se nombra al "agente IA" como entidad separada. Zenet detecta. Zenet sugiere. Zenet acompaña.

### Idioma y mercado

- **Idioma base:** español neutro latinoamericano con anclaje mexicano.
- **Mercado inicial:** Tijuana → Baja California → Noroeste de México → LATAM.
- **Trato por defecto:** "tú" en producto y marketing. "Usted" reservado para legal y prensa.

### Pointers a fuentes completas

- Estrategia: `Branding/_context/01-brand-strategy/`
- Historia: `Branding/_context/02-brand-story/`
- Voz y tono: `Branding/_context/04-voice-and-tone/`

---

## Data Connections

### Zenet production repository

**Path:** `/Users/alanbahena/Library/Mobile Documents/com~apple~CloudDocs/Zenet/02_Producto-y-Tech/Production-software/Zenet/`

The production repo has its own `CLAUDE.md` with full technical and business context: tech stack (Next.js + FastAPI + Supabase + Anthropic Claude), data model (17 tables), product architecture (8 AI agents, 3-phase user experience), business strategy, and the Zenet business context document (`docs/project-strategy/business-context/zenet-business-context-production.md`).

When marketing work needs technical or product accuracy (feature names, pricing, capability claims), the production repo is the source of truth — not this workspace.

### Notion (TBD)

Marketing operations live partly in Notion: campaign tracking, content calendar, customer research, market intelligence. Specific URL and access details to be added when Alan documents them.

When relevant Notion content needs to inform marketing tasks here, the practice is to export or summarize it into the appropriate department's `_context/` folder so Claude can reference it without fetching Notion each time.

### LinkedIn

Alan's LinkedIn profile is currently the active marketing channel for Zenet. Founder posts and brand-voice posts (when established) will draw from `Branding/_context/04-voice-and-tone/voz-y-tono.md` section 2.2 for tone modulation guidance.

### Anthropic API

This project uses Claude (Anthropic) for any AI-assisted marketing work. Default model: Claude Sonnet 4.6 (`claude-sonnet-4-6`). Complex strategic reasoning: Claude Opus 4.6 (`claude-opus-4-6`).

---

## Working Agreements

### When to update this CLAUDE.md

Update when:
- A section reaches `✓ Complete` status (move from pending to complete).
- A new department starts (mark as 🚧 In progress).
- A new convention is established that affects how future docs are written.
- A new document type is introduced (add to the `type` field values list).
- A new data connection is established (Notion link, etc.).
- A working agreement changes.

Don't update CLAUDE.md for routine document edits — frontmatter metadata + git history handle those.

### Commits

- **The user (Alan) decides when to commit.** Never auto-commit.
- Commit messages: imperative mood, concise. *"Add brand strategy section"*, *"Update positioning with field validation insights"* — not *"Updated some files"*.
- Don't commit `.env` files, credentials, or sensitive client data.
- Don't skip pre-commit hooks (if any get added).

### Adding a new department

To activate an empty department folder:

1. Create the four standard subfolders inside it: `_context/`, `_sop/`, `_templates/`, `skills/`.
2. If the department needs sub-sections in `_context/`, use numbered prefixes (`01-`, `02-`, ...).
3. Each `_context/` subsection gets an `_archive/` subfolder for major version changes.
4. Update CLAUDE.md status table (department → 🚧 In progress).

### Adding a new document

1. Use kebab-case in Spanish for the filename.
2. Apply standard frontmatter at top (name, description, type, last_updated, status, version, owner).
3. Use the `type` value from the established list (or add a new one and document it here).
4. Write content in Spanish; metadata field names in English; folder names in English.
5. Apply voice/tone rules from `Branding/_context/04-voice-and-tone/`.
6. Sentence case in headings.

### Confirmation behavior

- Always wait for explicit user confirmation before advancing to the next document or section.
- Never mark tasks complete without user confirmation.
- Carryover from the production repo's behavior — Alan prefers step-by-step approval over autonomous progression.

### Spanish-language pre-publish check

Before any final document is saved, it should pass the four-layer checklist in `Branding/_context/04-voice-and-tone/reglas-de-redaccion.md` section 8: voice principles · vocabulary · mechanics · narrative tests.

---

## How to use this project

### If you're an AI agent (Claude Code) coming in fresh

1. Read this CLAUDE.md fully — it gives you orientation in ~5 minutes.
2. For any task touching brand strategy, voice, or content style: consult the relevant doc in `Branding/_context/` before drafting.
3. For any vocabulary question: `vocabulario.md` first, then `voz-y-tono.md` for principles.
4. When in doubt about format: `reglas-de-redaccion.md`.
5. Never guess or improvise — point to a source of truth or ask.

### If you're a freelancer or new contributor

1. Start with this CLAUDE.md for orientation.
2. Read the four brand strategy docs (in order: misión-visión-valores → posicionamiento → promesa-de-marca → personalidad-y-arquetipo).
3. Read the brand story (origin-story → narrativa).
4. Skim the three voice/tone docs.
5. Ask Alan about anything that's unclear before producing work.

### If you're Alan

You wrote this. You know where things are. The CLAUDE.md exists so the next agent or freelancer doesn't need to re-derive your decisions.

---

## Reference table: where to find common things

| What you need | Where to find it |
|---|---|
| Mission, vision, values | `Branding/_context/01-brand-strategy/mision-vision-valores.md` |
| Positioning + competitive map | `Branding/_context/01-brand-strategy/posicionamiento.md` |
| Brand promise | `Branding/_context/01-brand-strategy/promesa-de-marca.md` |
| Brand personality and archetype | `Branding/_context/01-brand-strategy/personalidad-y-arquetipo.md` |
| Founder origin story | `Branding/_context/02-brand-story/origin-story.md` |
| Strategic brand narrative | `Branding/_context/02-brand-story/narrativa.md` |
| Voice principles + tone modulation | `Branding/_context/04-voice-and-tone/voz-y-tono.md` |
| Words to use / avoid + glossary | `Branding/_context/04-voice-and-tone/vocabulario.md` |
| Grammar + format rules | `Branding/_context/04-voice-and-tone/reglas-de-redaccion.md` |
| Visual identity (logo, colors, typography) | Pending → `Branding/_context/03-visual-identity/` |
| Design system snapshot | Pending → `Branding/_context/05-design-system/` |
| Production software context | `/02_Producto-y-Tech/Production-software/Zenet/CLAUDE.md` |
| Business context / market validation | Production repo: `docs/project-strategy/business-context/zenet-business-context-production.md` |

---

*Last updated: 2026-04-28*
*Next planned update: when Market Research and Analysis section reaches first complete document.*
