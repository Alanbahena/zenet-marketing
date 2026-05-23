---
name: Marco Product Strategy
description: Documento foundational del departamento Product Strategy. Define scope, methodology stack (VPD primary + JTBD overlay + Kano feature prioritization), versioning convention con research_stage extension, cross-references al research backbone, disciplinas operativas, y roadmap evolutivo del departamento. Marco que TODO Product Strategy hereda — sin este doc, los otros 16 docs del departamento operarían sobre arena movediza.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-22
status: active
version: 1.1
owner: Alan Bahena
---

# Marco Product Strategy

> Documento foundational del departamento. NO es VP doc · NO es features doc · NO es pricing doc · NO es GTM doc. Es el **meta-framework** que gobierna cómo se redactan, versionean y mantienen TODOS los otros docs del departamento.
>
> Si un AI agent o contribuidor humano lee solo un doc del departamento Product Strategy, este es ese doc.

---

## Índice

1. Propósito del documento
2. Scope del departamento Product Strategy
3. Etapa actual y filosofía operativa
4. Methodology stack
5. Convención de versioning y research stage
6. Cross-references al research backbone y strategy docs
7. Disciplinas operativas del departamento
8. Roadmap evolutivo del departamento
9. Estado del doc + notas finales

---

## 1. Propósito del documento

Este doc define el **framework foundational** que toda Product Strategy hereda — methodology choices, versioning convention, cross-references map, disciplinas operativas, y roadmap evolutivo del departamento. Sin este doc declarado y vigente, los otros 16 docs del departamento (VP design, features/scope, oferta/pricing, GTM, capital planning) operarían con criterios inconsistentes, frameworks sin justificación, y referencias sin trazabilidad.

Lo que este doc **NO hace:** no escribe VP statement (eso vive en `01-propuesta-de-valor/`), no define MVP scope (eso vive en `02-features-y-scope/`), no decide pricing exact (eso vive en `03-oferta-y-pricing/` cuando se redacte), no produce GTM playbook (eso vive en `04-go-to-market/`), no establece funding milestones (eso vive en `05-capital-y-fundraising/`). Es el **META** que gobierna cómo se ejecutan esos cinco subfolders.

Lo que este doc **SÍ hace:** declara *con qué lente* se trabaja en Product Strategy (Value Proposition Design primary + JTBD overlay + Kano feature prioritization), *con qué disciplina* se versionan los outputs (frontmatter `research_stage` field + `_archive/` + transition triggers por pre-condición medible), *qué hereda* del research backbone (mapa explícito de inputs), *qué disciplinas operativas* aplican (pre-publish check + hypothesis vs evidence labeling + cross-department sync), y *cómo evoluciona* el departamento (v0.1 → v1.0 → v2.0 con triggers de transición).

---

## 2. Scope del departamento Product Strategy

### 2.1 Qué cubre Product Strategy

Product Strategy department centraliza las decisiones estratégicas que median entre **research backbone** (Market Research + Branding) y **execution** (marketing channels + product implementation). Cubre 6 subfolders:

| Subfolder | Lente | Outputs principales (v0.1 esperados) |
|---|---|---|
| `00-marco-y-metodologia/` | Meta-framework | Este doc + posibles future docs sobre methodology evolution |
| `01-propuesta-de-valor/` | VPD (Strategyzer) aplicado | Customer profile + Value map + Fit analysis + VP statement compressed (4 docs) |
| `02-features-y-scope/` | Kano + MVP framework | Fase 1 MVP scope + Phase 2 roadmap hipótesis + Feature prioritization framework (3 docs) |
| `03-oferta-y-pricing/` | Pricing strategy + commercial terms | Design partner offer + Pricing tiers hipótesis + Commercial terms (3 docs · pricing exact TBD) |
| `04-go-to-market/` | Operacional sales motion | GTM playbook + Design partner outreach + Sales motion three-session demo + Channel/partner strategy (4 docs) |
| `05-capital-y-fundraising/` | Milestone-anchored funding roadmap | Funding roadmap + milestones (1 doc denso · splittea post pre-seed) |
| `06-experience-y-roadmap/` | User experience strategy | Pending · import desde production repo (3-phase user experience documentado) |

**Total: 16 docs esperados en v0.1 + este marco doc.**

### 2.2 Qué NO cubre Product Strategy (boundaries con otros workspaces y departamentos)

Para evitar scope creep y ownership ambiguity, declaración explícita de lo que **NO** vive en este departamento:

| Tipo de trabajo | Por qué NO aquí | Dónde vive |
|---|---|---|
| Technical product specs (architecture · APIs · data models) | Es implementation, no strategy | Production repo `/02_Producto-y-Tech/Production-software/Zenet/` |
| Marketing channel execution (email campaigns · SEO articles · social posts) | Es ejecución downstream | Departamentos Execution layer (Email/CRM · SEO/Content · Social Media) |
| Brand identity (mission · positioning · voice · visual) | Es foundational, no strategic | Branding department (`Branding/_context/01-brand-strategy/` + `04-voice-and-tone/`) |
| Comparative competitive analysis (vendor mapping · moat analysis) | Es analítico, no decisional | Market Research/03-competitive-analysis (8 docs) |
| Customer research raw findings (JTBD · pains · journey · objections) | Es analítico backbone | Market Research/02-customer-research (8 docs) |
| **Design partner program operations** (criteria · cohort management · acuerdo template) | Vive en workspace separado · canonical | `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.1 |
| Industry/market sizing + ICP research | Es analítico backbone | Market Research/01-industry-and-market (8 docs) |

### 2.3 Boundaries con otros workspaces y repos

Zenet opera con **tres workspaces/repos** que se complementan:

| Workspace/Repo | Path | Lente | Relación con Product Strategy |
|---|---|---|---|
| **Strategic operations (este workspace)** | `/03_Marketing/claude_code/` | Founder strategic operations (Foundation + Strategy + Execution layers) | Product Strategy department vive aquí · usa research backbone de este workspace |
| **Customer Development (workspace temporal · pendiente migración)** | `/08_Estrategia-Producto/_context/05-customer-development/` | Customer development operations + design partner program | **Workspace creado por error como separado** · usuario lo migrará a este workspace cuando termine de redactar customer development docs (TBD timeline). Mientras tanto, **temporary canonical** para design partner program + pricing model decisión. Este workspace **referencia**, NO redefine. |
| **Production software** | `/02_Producto-y-Tech/Production-software/Zenet/` | Technical implementation (Next.js + FastAPI + Supabase + 8 AI agents + 17 tables) | Provides product context + user experience documentation que se importa cuando `06-experience-y-roadmap/` se active |

**Estado TEMPORARY del workspace `08_Estrategia-Producto/`:**

⚠️ **Importante para AI agents y future contributors:** la separación entre `08_Estrategia-Producto/_context/05-customer-development/` y este workspace **NO es arquitectura intencional** · es resultado de decisión inicial del usuario que en retrospectiva fue subóptima. Plan de migración explícito:

| Estado actual | Estado futuro |
|---|---|
| Customer development docs (programa design partners + métricas + sprints + focus groups · etc.) viven en `/08_Estrategia-Producto/_context/05-customer-development/` | Customer development docs migrarán a este workspace como subfolder del Product Strategy department o como departamento propio |
| `programa-design-partners.md` v1.1 es canonical AHÍ | Migración disparada cuando usuario termine de redactar customer development docs (timeline TBD por usuario) |
| Cross-workspace references en docs Product Strategy apuntan a `/08_/...` | Post-migración: references se actualizan a paths internos del workspace |

**Trigger explícito de migración:** usuario completa redacción de todos los docs de customer development en `08_` → ejecuta migración bulk → actualiza todas las cross-references en docs Product Strategy + Branding + CLAUDE.md.

**Regla de ownership cross-workspace (estado actual · transitional):**

- **Strategy framing + brand-facing positioning** vive en este workspace
- **Customer development operations + design partner program** vive **temporalmente** en `08_Estrategia-Producto/` · canonical references aquí apuntan ahí hasta migración
- **Technical implementation** vive en production repo
- Cuando los tres concuerdan, Product Strategy department puede operar consistently
- Cuando los tres divergen, signal de update pendiente · ejecutar transition checklist
- **Cuando migración ocurra**, actualizar §2.3 + §6 cross-references map + CLAUDE.md §5 project structure

### 2.4 Posición en three-layer architecture (heredado CLAUDE.md §5)

Product Strategy ocupa la **Strategy layer** del workspace, entre Foundation (brand + research) y Execution (marketing channels):

```
FOUNDATION LAYER
└── Brand foundation + Market Research backbone
        ↓ (inputs)
STRATEGY LAYER ← Product Strategy department (este)
└── VP design + features/scope + oferta/pricing + GTM + capital
        ↓ (outputs)
EXECUTION LAYER
└── Marketing channels (Email/CRM + SEO/Content + Social Media + Analytics)
```

Product Strategy **consume** outputs de Foundation y **produce** inputs para Execution. Pre-PMF, los layers blur — Alan opera transversalmente. Al escalar (Series A+ · dedicated heads), los layers corresponden a org boundaries.

---

## 3. Etapa actual y filosofía operativa

### 3.1 Etapa declarada

**Etapa actual:** `discovery-pre-PMF`

- Cero design partners activos (Cohort 1 program defined · launch Q3 2026)
- Cero behavioral data
- Cero PMF metrics establecidos (NPS · retention · expansion)
- Todo claim sobre comportamiento de cliente, willingness-to-pay, sales motion conversion, o retention rate es **hipótesis** hasta que evidencia de cliente real lo valide

Esta declaración explícita es disciplina, no humildad performativa. Tiene consecuencias prácticas en cómo se redactan los docs (ver §3.3 anti-patterns).

### 3.2 Filosofía operativa

**Tres principios rectores:**

1. **Hypothesis-level v0.1 disciplinado · evidence-based v1.0 post Mes 3+ design partner data.** Todo doc en `discovery-pre-PMF` es hypothesis hasta probarse comportamentalmente. Frontmatter `research_stage` field lo declara explícitamente. Decisiones específicas (e.g., pricing exact $1,500 MXN/mes) se marcan como hipótesis con triggers de validación documentados.

2. **Cheap-to-write ahora · expensive-to-rewrite-without-evidence después.** Cuando enfrentas decisión architectural mayor pre-PMF, sesgo hacia simplicidad operativa + framing coherency, NO hacia "best practices" sin examinar. La decisión 2026-05-22 sobre pricing model (pure subscription vs setup fee + SaaS) es ejemplo paradigmático: copiar "vertical SaaS best practices" sin examinar contexto Zenet pre-PMF Mexican SMB hubiera roto agency-as-SaaS framing + pricing arbitrage frame.

3. **Cross-doc coherency es disciplina, no opcional.** Phase A transition checklist (Market Research → Branding · 2026-05-22) probó que docs descoordinados crean fricción operativa real. Cada cambio architectural en Product Strategy debe disparar sync con docs upstream (research backbone) y downstream (Branding · execution).

### 3.3 Anti-patterns explícitos (lo que NO hacemos)

| Anti-pattern | Por qué se evita |
|---|---|
| ❌ Detailed product specs pre-design-partners | 70%+ se reescribe después de Mes 3 behavioral data. Hypothesis-level scope suficiente. |
| ❌ VP rigor con methodology canvas completo sin evidencia | Performance metodológico vs uso operativo. Aplicar VPD donde aporta, no donde toca. |
| ❌ Roadmap 24-meses detallado | Pre-PMF, predicciones más allá de 6 meses son fiction. Roadmap declarativo (Phase 1 · 1.5 · 2) con triggers, no calendario. |
| ❌ Pricing optimization premature (A/B testing rigor sin datos) | Pricing exact se decide con design partner conversion data Mes 3+, no con frameworks teóricos en vacío. |
| ❌ Methodology aplicado como performance ("canvas completo porque toca") | VPD canvas aplicado donde el output es decisional. Si una sección del canvas no produce decisión accionable, no se completa. |
| ❌ Cross-department drift sin sync | Cuando Product Strategy cambia, ejecutar transition checklist con docs upstream + downstream (§7). |
| ❌ Copying "vertical SaaS best practices" sin examinar contexto Zenet | Best practices son válidas en el contexto donde se generaron. Mexican SMB pre-PMF restaurant tech ≠ enterprise SaaS US. Decidir desde primeros principios. |
| ❌ Detailed financial modeling pre-PMF | Pre-PMF, modelos financieros detallados son ejercicios de inferencia. Funding roadmap milestone-anchored, not financial-model-anchored. |

### 3.4 Principio rector

> *"Cuando dudes entre rigor y velocidad pre-PMF, elige velocidad. El rigor se gana con evidencia, no con esfuerzo."*

Esta máxima opera en cada decisión metodológica. Phase A (Market Research → Branding update 2026-05-22) la aplicó: 25 updates aplicados en ~7 hrs · evitando lo que hubiera sido un research-first approach de semanas.

---

## 4. Methodology stack

### 4.1 Primary lens: Value Proposition Design (Osterwalder / Strategyzer)

**Qué es VPD:** framework canónico de B2B SaaS para diseñar y validar value propositions. Tres componentes:

- **Customer Profile** — qué el customer hace (Jobs), qué le duele (Pains), qué desea (Gains)
- **Value Map** — qué entrega Zenet (Products & Services), cómo alivia pains (Pain Relievers), cómo crea gains (Gain Creators)
- **Fit analysis** — cruce CP↔VM con evidencia explícita

**Por qué Zenet elige VPD (4 razones):**

1. **Industry standard B2B SaaS** — investors, advisors, y future hires reconocen el output. Outputs traducibles directamente a pitch deck, landing copy, sales scripts.
2. **Inputs ya disponibles en research backbone.** Customer 02 (JTBD) alimenta Jobs side. Customer 03 (pains) alimenta Pains side. Customer 06 (objeciones) alimenta Pain Relievers. No reinventamos research — lo destilamos en formato VPD.
3. **Outputs traducibles cross-departmental.** VP statement compressed (output final de VPD applied) alimenta posicionamiento docs, sales scripts, marketing copy, landing hero, founder pitch.
4. **Granularity correcta pre-PMF.** Lean Canvas demasiado high-level (no captura nuance de B2B SaaS). Aulet Disciplined Entrepreneurship 24-step demasiado granular (academic). VPD es el sweet spot.

**Cómo se aplica en Zenet — output target docs:**

| VPD component | Doc Product Strategy donde se aplica |
|---|---|
| Customer Profile (Jobs · Pains · Gains) | `01-propuesta-de-valor/00-customer-profile.md` |
| Value Map (Products & Services · Pain Relievers · Gain Creators) | `01-propuesta-de-valor/01-value-map.md` |
| Fit analysis evidence-based | `01-propuesta-de-valor/02-fit-analysis.md` |
| VP statement compressed (1-pager) | `01-propuesta-de-valor/03-vp-statement-compressed.md` |

**Caveat sobre multi-stakeholder dynamic:** VPD captura **customer-product fit** muy bien · pero VPD canónico asume **un Customer Profile único**. Zenet enfrenta multi-stakeholder buying committee (chef adopta · dueño paga · contable autoriza · multi-thread 3x conversion lift validado en customer 05 §10). Aplicación práctica en Zenet: **3 mini-Customer Profiles en un solo doc** (dueño-operador · chef ejecutivo · contable) · NOT 3 docs separados. Pain Relievers + Gain Creators se mapean cross-stakeholder. Cross-reference a `Market Research/02-customer-research/05-buying-process-y-criterios-de-decision.md` para framework de buying committee.

### 4.2 Input source: JTBD framework (Christensen / Ulwick · vive en research backbone)

**Qué es JTBD:** framework de jerarquía de jobs que el customer "hires" un producto para hacer. Estructura: master job + functional jobs + emotional jobs + social jobs + anti-jobs (lo que NO quiere que pase).

**Por qué NO es "overlay" sobre VPD:** llamarlo overlay sugiere que aplicamos dos frameworks simultáneamente en Product Strategy. La realidad operativa es distinta:

- **JTBD framework vive en research backbone** — `Market Research/02-customer-research/02-jobs-to-be-done.md` aplica JTBD analysis canonical
- **VPD framework vive en Product Strategy** — toma Jobs side de customer 02 directamente · NO re-analiza · destila + frame VPD

Es un **único flow secuencial**: JTBD framework analiza el customer (research backbone) → VPD framework diseña la value proposition (product strategy). No son dos frameworks paralelos · son framework upstream + framework downstream.

**Implicación operativa:** cuando se redacte `01-propuesta-de-valor/00-customer-profile.md`, el Jobs side se **hereda** del customer 02 doc · no se re-investiga. Esto evita framework-padding pre-PMF y respeta el inheritance pattern (research backbone unilateral · ver §6.3).

### 4.3 Feature prioritization: TIER framework (inspired by Kano)

**Qué usamos en Zenet:** TIER framework (TIER 1 / 2A / 2B / 3) decidido 2026-05-22. **Inspirado en Kano** (must-have / performance / delighter taxonomy) pero NO es Kano formal.

**Por qué NO Kano formal:** Kano formal requiere **customer survey** con preguntas estructuradas (functional + dysfunctional) para clasificar features. Pre-PMF, NO tenemos customer data para hacer Kano formal. Clasificación TIER se basa en:

- Research backbone (customer 02-03-04-06 · 30 verbatim entries en customer 07)
- Competitive analysis (competitive 04 features matrix · qué shippean competitors)
- Strategic judgment del founder + advisors (Anna · Victor · Algira validators)

Esto NO es Kano · es **Kano-inspired pragmatic prioritization** con la data que tenemos pre-PMF.

**Re-evaluación trigger:** cuando Cohort 1 Mes 3+ data exista, podemos aplicar Kano formal survey methodology a design partners (5-cohort suficiente para directional signal). Hasta entonces, TIER framework es el método operativo.

**Aplicación en Zenet — TIER framework actual:**

| TIER | Kano-inspired category | Phase | Status |
|---|---|---|---|
| TIER 1 (manual vivo + WhatsApp agency 24/7) | Must-have | Phase 1 launch | ✅ Ship Q3 2026 |
| TIER 2A (recetario consultable vía WhatsApp) | Must-have / Performance | Phase 1 launch | ✅ Ship Q3 2026 |
| TIER 2B (training portal nuevos empleados) | Performance / Delighter | Phase 1.5 deferred | ⏸️ Q4 2026 / Q1 2027 · assessment pendiente |
| TIER 3 (process compliance + cumplimiento fiscal automático) | Delighter | Phase 2 | ⏸️ Q3-Q4 2027 |
| POS API integration | Performance | Phase 2 | ⏸️ Q3-Q4 2027 |
| Inventario dinámico + pronósticos + costos | Performance | Phase 2 | ⏸️ Q3-Q4 2027 |

**Output target doc:** `02-features-y-scope/02-feature-prioritization.md` — TIER framework canonical · Kano survey methodology pendiente Cohort 1 data.

### 4.4 Pricing methodology approach (decisión 2026-05-22)

**Decisión canónica del modelo comercial:**

- **Modelo:** pure subscription + 90-day minimum commitment + annual prepay option
- **Sin setup fee separado**
- **Sin project pricing**
- **Pricing exact deferred** (TBD en `03-oferta-y-pricing/01-pricing-tiers-hipotesis.md`)
- **Decisión vive canonical en:** `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.1 §14

**Decision tree aplicado (documentado para futuras decisiones):**

- Decisión inicial (setup fee + SaaS) examinada honestamente
- 5 problemas identificados (rompe agency-as-SaaS framing · dilution pricing arbitrage · two friction points · investor narrative confusion · Mexican SMB psychology adverse)
- Decisión revisada (pure subscription) preserva todos los frames + es contextualmente correcta
- Documentado para que future strategic decisions sigan el mismo pattern: examinar honestamente vs copy best practices

**Pricing exact decisions pendientes (defer a `03-oferta-y-pricing/`):**

- Pricing exact base ($1,200 · $1,500 · $1,800 range hipotético per competitive 04 §11.4)
- Per-sucursal vs fixed price
- Tiers (Básico · Pro · Multi-sitio)
- Annual prepay descuento exact (range típico 15-20%)
- Pricing por geografía (uniforme MX confirmado per industry 07 §17)
- Trial period (vs design partners free 90 días)

**Trigger para tomar decisión final:** antes del kickoff de Cohort 1 design partners (agosto 2026) OR antes de cerrar el primer cliente pagado paralelo · whichever comes first.

### 4.5 Strategic context (no formal framework needed)

Tres elementos de strategic context viven implícitos en research backbone · NO requieren docs dedicados:

- **Wedge thesis** (BC + nearshoring corridor + agency-as-SaaS positioning) — implícito en posicionamiento + customer research + competitive 07
- **Three-horizon planning** (Fase 1 → Fase 2 → Fase 3+) — vive en industry 07 + market-insights 01 platform play vision
- **Why-now articulation** — vive en market-insights 00 timing thesis

Cross-references suficientes en docs Product Strategy · no se redefinen aquí.

### 4.6 Frameworks adopted as secondary references (no primary)

Más allá de VPD primary + JTBD input + Kano-inspired TIER, dos frameworks adicionales se adoptan como **referencias secundarias** — no se aplican como docs canónicos, pero informan thinking en docs específicos:

#### Crossing the Chasm (Geoffrey Moore · 1991/2014)

**Qué es:** framework canonical para B2B vertical SaaS pre-PMF · 5 segmentos de adoption (innovators · early adopters · early majority · late majority · laggards) · el "chasm" entre early adopters y early majority es donde la mayoría de startups muere.

**Por qué se adopta como secondary reference para Zenet:**

- Pre-PMF B2B SaaS vertical — caso de uso canónico de Crossing the Chasm
- Customer 03 §5.10 ya menciona industry analogs (Toast 2014 · Square 2009 · Mercado Libre 2007 · Clip 2017) que cruzaron el chasm — Moore's framework es el lens analítico para este pensamiento
- Cohort 1 design partners SON innovators/early adopters · transition a early majority post-Cohort 1 es load-bearing
- Útil cuando se redacte `01-propuesta-de-valor/00-customer-profile.md` (early adopter vs early majority distinction)

**Cómo se aplica:** lens analítico cuando ICP segmentation thinking aparece · NO doc dedicado. Cross-reference inline donde aplique.

#### Default Alive / Default Dead (Paul Graham · Y Combinator · 2015)

**Qué es:** framework de financial discipline binary. Pregunta única: *"con la trayectoria actual de burn + revenue growth, ¿llego a profitability antes de quedarme sin runway?"* Default Alive = SÍ · Default Dead = NO · ningún punto medio.

**Por qué se adopta como secondary reference para Zenet:**

- Diferente de "detailed financial modeling" que rechazamos (§4.7) — Default Alive es discipline ligera · una pregunta · no modelo complejo
- Capital strategy doc (`05-capital-y-fundraising/00-funding-roadmap-y-milestones.md`) se beneficia de esta lens
- Pre-PMF, founders confunden runway visualization con financial modeling · Default Alive simplifica
- Útil para investor conversations · honest narrative sobre runway vs growth trajectory

**Cómo se aplica:** lens dentro de funding roadmap doc cuando se hable de capital efficiency + runway visibility · NO doc dedicado.

### 4.7 Frameworks rejected y por qué (anti-patterns metodológicos)

Decisión explícita de NO adoptar:

| Framework | Por qué NO |
|---|---|
| **Aulet Disciplined Entrepreneurship 24-step** | Overkill pre-PMF · estructurado para university entrepreneurship education, no operacional founder work · academic structure no operacional |
| **Christensen Innovator's Dilemma framework** | Relevante a incumbents enfrentando disruption · Zenet es entrant creando categoría · lens incorrecto |
| **Lean Canvas / Business Model Canvas formal doc** | Ya implicit en research backbone + posicionamiento · doc dedicado sería padding redundante |
| **Blue Ocean Strategy formal canvas** | Ya cubierto en competitive 07 white space declaration + diferenciación |
| **OKR framework Product Strategy v0.1** | Pre-PMF, OKRs requieren métricas estables que no existen · premature |
| **NPS-driven product roadmap pre-PMF** | Sin NPS data, NPS-driven framework es teórico · adoptable cuando Cohort 1 Mes 3+ data exista |
| **Detailed financial modeling for fundraising** | Pre-PMF, modelos financieros detallados son inferencia, no proyección. Funding roadmap milestone-anchored, no financial-model-anchored |

---

## 5. Convención de versioning y research stage

### 5.1 Frontmatter extension obligatorio

Todos los docs Product Strategy añaden campo `research_stage` al frontmatter (mirroring customer 00):

```yaml
---
name: [Document Title]
description: [One-line description]
type: product-strategy
research_stage: discovery-pre-PMF | design-partner-validation | early-customer-evidence | PMF-and-segmentation | scale-research
last_updated: YYYY-MM-DD
status: active | draft | deprecated
version: X.Y
owner: Alan Bahena
---
```

**Etapa actual del departamento Product Strategy v0.1:** `discovery-pre-PMF` para TODOS los docs.

### 5.2 Cinco stages declarados (heredado customer 00)

| Stage | Criterio entrada | Triggers de salida |
|---|---|---|
| **`discovery-pre-PMF`** | Etapa actual · cero clientes pagados | 3-5 design partners + Mes 3 behavioral data positive |
| **`design-partner-validation`** | 3-5 DPs activos · Mes 1-3 data emerging | 10+ paying customers + 6+ meses retention |
| **`early-customer-evidence`** | 10+ paying · early retention data | 25+ customers + NPS≥40 sostenido + expansion validation |
| **`PMF-and-segmentation`** | 25+ customers · NPS≥40 · expansion validated | Series A+ · multi-segment data · multi-vertical signals |
| **`scale-research`** | Series A+ · scale-ready | (terminal stage pre-IPO) |

### 5.3 Transition triggers — disciplina por pre-condición medible

**Regla:** transitions entre stages se ejecutan por **pre-condición medible**, NO por calendario. Si triggers no se cumplen, doc se queda en stage actual (con frontmatter actualizado) hasta cumplirse.

### 5.4 _archive/ + _changelog.md convention

Cuando un doc Product Strategy avanza version mayor (v0.1 → v1.0 → v2.0), aplicar pattern heredado de Market Research + Branding (cf. CLAUDE.md §6):

- Old version se mueve a `_archive/` con prefix de fecha (`2026-Q3_v0.1_customer-profile-hypothesis.md`)
- New version reemplaza in-place (filename estable · cross-references no rompen)
- `_changelog.md` per subfolder documenta transición v0.x → v1.0 con razones

### 5.5 Version bump rules

| Bump | Trigger | Acción |
|---|---|---|
| **v0.1 → v0.2** | Minor adjustments (data refresh · framing tweaks · cross-doc sync) | Update in-place · sin archive |
| **v0.x → v1.0** | Behavioral data significativa contradice o valida hypothesis | Archive v0.1 · new version replaces · transition checklist obligatorio |
| **v1.x → v2.0** | Major strategic shift (pivot · segment change · methodology change) | Archive v1.x · transition checklist + posible reframe de stage |

### 5.6 Cross-doc consistency discipline

Cuando un doc Product Strategy cambia version, ejecutar revisión de docs Product Strategy que lo referencian:

- Si change es trivial · usually OK pasar
- Si change es structural (e.g., VP statement evolved · pricing model changed) · transition checklist obligatorio sync con downstream docs

---

## 6. Cross-references al research backbone y strategy docs

### 6.1 Mapa principal — qué research alimenta qué doc Product Strategy

| Source doc | Input para doc Product Strategy | Cómo se usa |
|---|---|---|
| **Customer Research backbone** | | |
| `Market Research/02-customer-research/02-jobs-to-be-done.md` | `01-propuesta-de-valor/00-customer-profile.md` | Jobs side del Customer Profile (master · functional · emotional · social · anti-jobs) |
| `Market Research/02-customer-research/03-pains-y-workarounds.md` | `01-propuesta-de-valor/00-customer-profile.md` | Pains side · workarounds informan Pain Relievers |
| `Market Research/02-customer-research/04-customer-journey-detallado.md` | `04-go-to-market/02-sales-motion-three-session-demo.md` | Journey stages aterrizan en sales motion stages |
| `Market Research/02-customer-research/05-buying-process-y-criterios-de-decision.md` | `04-go-to-market/01-design-partner-outreach.md` + `02-sales-motion.md` | 8-stage cycle + multi-thread + 3-lane timing |
| `Market Research/02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` | `01-propuesta-de-valor/01-value-map.md` + `04-go-to-market/02-sales-motion.md` | LAER-adapted + 4-stage decay model |
| `Market Research/02-customer-research/07-voice-of-customer.md` | Cross-cutting (mensaje + objection handling + verbatim en todo) | VoC library 30 entries |
| **Competitive Analysis backbone** | | |
| `Market Research/03-competitive-analysis/04-feature-y-pricing-comparative.md` | `02-features-y-scope/02-feature-prioritization.md` + `03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` | Feature comparison · pricing positioning |
| `Market Research/03-competitive-analysis/05-gtm-y-positioning-comparado.md` | `04-go-to-market/00-gtm-playbook-operational.md` | Comparative GTM + Zenet playbook |
| `Market Research/03-competitive-analysis/06-switching-dynamics-y-incumbente.md` | `04-go-to-market/02-sales-motion.md` | 4 scenarios A/B/C/D · 11 vendor scripts |
| `Market Research/03-competitive-analysis/07-diferenciacion-zenet-y-defensibility.md` | `01-propuesta-de-valor/03-vp-statement-compressed.md` + `05-capital-y-fundraising/00-funding-roadmap.md` | 14 moats + agency-as-SaaS framing + investor pitch |
| **Industry + Market Insights backbone** | | |
| `Market Research/01-industry-and-market/07-geografia-y-expansion.md` | `04-go-to-market/03-channel-y-partner-strategy.md` + `05-capital/funding-milestones.md` | 5-phase expansion · pricing uniforme MX |
| `Market Research/05-market-insights/00-por-que-ahora.md` | Cross-cutting (timing thesis · funding narrative) | 5 fuerzas + windows-closing + risks |
| `Market Research/05-market-insights/01-vision-plataforma-zenet.md` | `05-capital-y-fundraising/00-funding-roadmap.md` | Platform play upside · Series A+ narrative |
| **Branding backbone** | | |
| `Branding/_context/01-brand-strategy/posicionamiento.md` v1.3 | All VP + GTM docs | Voice + 7 diferenciadores en clusters + modelo comercial + Phase 1 vs Phase 2 framework |
| `Branding/_context/04-voice-and-tone/vocabulario.md` v1.2 | All PS docs (cliente-facing copy) | Operator vernacular + anti-words + modelo comercial terms |
| `Branding/_context/01-brand-strategy/personalidad-y-arquetipo.md` v1.1 | All customer-facing PS docs | Sabio + Cuidador posture + sous chef analogy + brigada cognitiva |
| **Cross-workspace canonical** | | |
| `08_Estrategia-Producto/.../programa-design-partners.md` v1.1 | `04-go-to-market/01-design-partner-outreach.md` + `03-oferta-y-pricing/00-design-partner-offer.md` + `05-capital/funding-milestones.md` | **Canonical design partner program + pricing model decisión** |

### 6.2 Ownership de conflictos

**Regla:** si Product Strategy v1.0 contradice research backbone, el signal es que **research está stale** → update research first → entonces actualiza Product Strategy. NO Product Strategy unilateral.

**Excepción:** si Product Strategy decision se basa en behavioral data NUEVA (e.g., Mes 3 design partner data contradice hypothesis pre-PMF), Product Strategy avanza y dispara update de research backbone en transition checklist.

### 6.3 Inheritance pattern

**Unilateral:** Product Strategy docs **citan** research backbone · research backbone NO cita Product Strategy docs.

Esto preserva research como source-of-truth analítico independiente de las decisiones strategy que se derivan. Si strategy decision se revisa, research backbone no se mueve.

### 6.4 Cross-workspace ownership (TEMPORARY · pendiente migración)

⚠️ **Estado actual transitional · ver §2.3 para context completo.**

**Regla canonical AHORA (transitional state):**

- **`08_Estrategia-Producto/.../programa-design-partners.md` v1.1** es **temporary canonical** para:
  - Design partner program operations (criteria · cohort management · onboarding · exit)
  - Pricing model decision (pure subscription + 90-day minimum + annual prepay · no setup fee)
- Este workspace Product Strategy department **referencia** ese doc cuando aplica · NO lo redefine
- **Esto es ARRANGEMENT temporal** hasta que usuario complete migración de `08_Estrategia-Producto/_context/05-customer-development/` a este workspace

**Cuándo Product Strategy department actualiza el `08_` doc (mientras es temporary canonical):** cuando hay decisión strategic mayor que cambia el modelo del programa o pricing. Última vez: 2026-05-22 (decisión pure subscription model · update v1.0 → v1.1 ejecutado).

**Post-migración (estado futuro · timeline TBD por usuario):**

- Customer development docs viven aquí (este workspace · subfolder TBD del Product Strategy department o departamento propio)
- Pricing model decision migrates canonical a `Product Strategy/03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` cuando ese doc se redacte (independiente de migración general de customer development)
- Cross-references en docs Product Strategy + Branding + CLAUDE.md se actualizan en migration sweep

**Acción pendiente al ejecutar migración:**

```
☐ Migrar /08_Estrategia-Producto/_context/05-customer-development/ a este workspace
☐ Actualizar §2.3 marco-product-strategy.md con estado post-migración
☐ Actualizar §6.4 marco-product-strategy.md con paths internos
☐ Update CLAUDE.md §5 project structure
☐ Update CLAUDE.md §2 Most Recent Work
☐ Search & replace de cross-references "08_Estrategia-Producto" → paths internos en TODOS los docs
☐ Decision separada: pricing model decision migrates a `03-oferta-y-pricing/` o stays con design partner program
```

---

## 7. Disciplinas operativas del departamento

### 7.1 Pre-publish check (4-layer · heredado de Branding)

Antes de marcar cualquier doc Product Strategy como `status: active`, ejecutar 4-layer checklist (heredado `Branding/_context/04-voice-and-tone/reglas-de-redaccion.md` §8):

1. **Voice principles** — 9 principios invariables (lenguaje del operador · sin tech · sin hype · voz activa · una idea por oración · concreto · el porqué no solo el qué · honestidad · *"si no se entiende, fallamos"*)
2. **Vocabulario v1.2** — términos usados consistent con glossary · anti-words evitados · setup fee NUNCA · modelo comercial terminology consistente
3. **Mechanics** — frontmatter completo · cross-references válidas · sentence case headings · sources/citations marked
4. **Narrative tests** — ¿el doc cuenta una historia coherente? · ¿el reader entiende qué hacer después de leerlo? · ¿el tone es Sabio + Cuidador?

### 7.2 Hypothesis vs evidence labeling explícito

Cada claim load-bearing en docs Product Strategy debe marcarse con tag:

| Tag | Cuándo se usa |
|---|---|
| **`[Hipótesis]`** | Sin evidencia material · default pre-PMF |
| **`[Validado conversación N]`** | Validado en N conversaciones cualitativas con operadores/consultores |
| **`[Evidencia design partner]`** | Observado en DP behavior (Mes 1+ data) |
| **`[Evidencia cliente pagado]`** | Observado en cliente continuo post-DP program |
| **`[OFICIAL]`** | Fuente externa autoritaria (INEGI · SAT · Banxico · reportes públicos) |
| **`[Estimación cualitativa]`** | Orden de magnitud · no rigurosa · marked as tal |
| **`[SIN FUENTE PUBLICADA]`** | Gap declarado honestamente · acompañado de cómo se cerraría |

**Anti-pattern:** claim sin tag = claim asumida sin scrutiny. Reviewer flag.

### 7.3 Cross-department sync (transition checklist)

Cuando un doc Product Strategy avanza version mayor (v0.x → v1.0) o cambia decisión architectural, ejecutar checklist downstream:

```
☐ Update CLAUDE.md §4 decisions log si new load-bearing finding
☐ Update Branding/posicionamiento.md si VP statement evolucionó (puede ser refinement)
☐ Update Branding/vocabulario.md si emergieron nuevos términos cliente-facing
☐ Update marketing copy ya publicado (landing · social · email · pitch deck)
☐ Update `08_Estrategia-Producto/` docs si la decisión afecta design partner program
☐ Flag a Email/CRM · SEO/Content · Social Media para refresh de mensajes activos
☐ Update CLAUDE.md §2 Most Recent Work
```

Phase A (Market Research → Branding update 2026-05-22) y Pricing decision sync (2026-05-22) son ejemplos paradigmáticos · ambos ejecutaron este checklist (mostly).

### 7.4 Version bump decision triggers (auditables)

Triggers que disparan version bump · auditable monthly:

- Behavioral data significativa contradice hypothesis (force bump)
- 3+ DPs completan Mes 3+ (natural transition discovery → design-partner-validation)
- Major strategic decision flagged (e.g., pricing pivot · segment change · methodology pivot)
- Cross-workspace dependency change (e.g., `08_` doc updates trigger sync)
- Quarterly review (Q3 · Q4 · Q1 · Q2) — light pass + version bump if accumulated changes warrant

### 7.5 Cuándo NO actualizar

- Churn de wording sin cambio sustantivo (cosmetic edits)
- Noise diario (pedidos isolados de un solo stakeholder sin pattern)
- Performance methodology compliance (canvas updates "porque toca")
- Reactive updates a competitor moves antes de tener evidence sostenido

---

## 8. Roadmap evolutivo del departamento

### 8.1 Two distinct triggers — doc version vs research stage

**Importante distinción:** dos tipos de triggers operan independientemente · no se confunden:

| Trigger type | Qué dispara | Granularidad |
|---|---|---|
| **Doc version triggers** | Version bump de un doc específico (v0.1 → v1.0 → v2.0) | Por-doc · puede ocurrir asincrónico entre docs |
| **Research stage transition triggers** | Transition de etapa research del departamento entero (discovery-pre-PMF → design-partner-validation → etc.) | Department-wide · todos los docs cambian `research_stage` field simultáneamente |

**Ejemplo de independencia:** si 3 DPs Mes 3 muestran conversion 50% pero retention Mes 6 still TBD, los docs específicos que dependen de conversion data (e.g., VP statement) pueden bump v0.1 → v1.0 reflejando conversion data sin esperar retention. El research_stage del departamento NO transitions hasta que todos los triggers del stage transition se cumplan.

#### Doc version triggers (per-doc · evidence-based)

| Doc version bump | Trigger |
|---|---|
| **v0.1 → v0.2** | Minor adjustments · data refresh · cross-doc sync |
| **v0.x → v1.0** | Behavioral data significativa contradice o valida hypothesis principal del doc |
| **v1.x → v2.0** | Major strategic shift relevante al doc (pivot · segment change · methodology change) |

Cada doc avanza su version independientemente cuando su trigger se cumple. NO requiere alignment con otros docs.

#### Research stage transition triggers (department-wide)

| Stage transition | Trigger department-wide |
|---|---|
| `discovery-pre-PMF` → `design-partner-validation` | 3-5 design partners signed + activamente en programa + Mes 1+ data emergiendo |
| `design-partner-validation` → `early-customer-evidence` | 10+ paying customers post-Cohort 1 + 6+ meses retention validated en al menos 50% del cohort |
| `early-customer-evidence` → `PMF-and-segmentation` | 25+ customers + NPS≥40 sostenido 6+ meses + expansion validation (multi-sucursal · referral generation) |
| `PMF-and-segmentation` → `scale-research` | Series A+ cerrado + multi-segment data + scale infrastructure operativa |

Stage transition aplica `research_stage` field update a TODOS los docs del departamento simultáneamente.

### 8.2 Three-stage roadmap declarado

```
═══════════════════════════════════════════════════════════════════
STAGE 1 — v0.1 (now Q2 2026 → Q3-Q4 2026)
═══════════════════════════════════════════════════════════════════

Department research_stage: discovery-pre-PMF
Doc versions esperadas: v0.1 across the board · plus este marco v1.x
Outputs:
  - 16 docs v0.1 + 1 doc v1.0+ (este marco)
  - Pricing model decision aplicada (pure subscription · pricing exact TBD)
  - VP hypothesis articulada
  - MVP scope explícito (TIER 1 + TIER 2A)
  - Pilot offer + commercial terms documented
  - GTM playbook + outreach templates operational
  - Funding roadmap milestone-anchored

Product timeline paralelo:
  - Phase 1 launch Q3 2026 (TIER 1 + TIER 2A · estandarización + manual vivo + WhatsApp agency + recetario)
  - Cohort 1 design partners Q3 2026 (5 operadores BC · 90 días gratis)

Stage transition trigger → design-partner-validation:
  - 3-5 design partners signed + activamente en programa + Mes 1+ data emergiendo

Audiencia v0.1:
  - Founder (Alan)
  - Investor pitch pre-seed
  - Advisor onboarding
  - Key hire conversations
  - AI agents inheriting workspace context

═══════════════════════════════════════════════════════════════════
STAGE 2 — v1.0 (Q4 2026 - Q1 2027)
═══════════════════════════════════════════════════════════════════

Department research_stage: design-partner-validation → early-customer-evidence
Doc versions esperadas: v1.0 across most docs · algunos pueden estar en v0.x o v1.x distintos
Outputs:
  - Refinement de v0.1 con behavioral data
  - VP statement evidence-based (no hypothesis)
  - Pricing exact validated + tiers refined
  - Sales motion validated con conversion data real
  - Funding roadmap con tracción real para seed/Series Seed

Product timeline paralelo:
  - TIER 2B (training portal) assessment + posible launch Phase 1.5
  - Primeros clientes pagados continuos post-Cohort 1
  - Phase 2 development start (inventario dinámico · pronósticos · costos · POS API)

Stage transition trigger → early-customer-evidence:
  - 10+ paying customers + 6+ meses retention validated en al menos 50% del cohort

═══════════════════════════════════════════════════════════════════
STAGE 3 — v2.0+ (Q2 2027 onwards)
═══════════════════════════════════════════════════════════════════

Department research_stage: PMF-and-segmentation → scale-research
Outputs:
  - Scale-ready Product Strategy framework
  - Pricing canonical migration ejecutada (Q3-Q4 2027)
  - Departamento posible split (Product · GTM · Capital como sub-departments
    o separate departments según volumen + ownership)
  - Series A pitch deck con full PMF data

Product timeline paralelo:
  - Phase 2 launch Q3-Q4 2027 (TIER 3 + inventario + pronósticos + costos + POS API)
  - LATAM expansion start (post Series A)
  - Platform play first products signals (market-insights 01 vision)
```

### 8.3 Update cadence

- **Trimestral review** (Q3 2026 · Q4 2026 · Q1 2027 · Q2 2027) — light pass + version bump si accumulated changes warrant
- **Ad-hoc cuando:**
  - Major behavioral signal (e.g., Cohort 1 Mes 3 data contradice o valida hypothesis)
  - Strategic decision flagged (e.g., pricing pivot · methodology change)
  - Cross-workspace dependency change (e.g., migration de `08_Estrategia-Producto/` ejecutada)
  - External market shift relevante (e.g., foreign vendor MX entry · Mexican legacy AI ship)

### 8.4 Cuándo el departamento puede splittear

**Trigger:** Series A+ · 25+ paying customers · dedicated heads of product/GTM/capital hired.

**Pre-split:** Product Strategy department único (este workspace) · Alan founder operando transversalmente.
**Post-split:** posible separación en:

- **Product Strategy department** (VP + features + experience · owner: Head of Product)
- **GTM Strategy department** (sales motion + outreach + channels · owner: Head of GTM)
- **Capital Strategy department** (funding + investor relations + CFO function · owner: CEO/CFO)

Esta split NO se ejecuta pre-PMF · documentada como future trigger.

---

## 9. Estado del doc + notas finales

### 9.1 Estado del doc

- **Version:** 1.0
- **Last updated:** 2026-05-22
- **Owner:** Alan Bahena
- **Research stage:** `discovery-pre-PMF`
- **Status:** active · foundational para todo el departamento Product Strategy

### 9.2 Update triggers de este doc específico

Este doc específico se actualiza cuando:

- **Methodology pivot** — adopción de nuevo framework primary · deprecation de framework actual
- **Framework adoption nuevo** — añadir framework secundario o lens nuevo (e.g., Kano expanded · NPS-driven decisions cuando applicable)
- **Departamento restructure** — split de subfolders · ownership change · ownership cross-workspace
- **Major cross-workspace dependency change** — e.g., `08_Estrategia-Producto/` workspace reorganiza canonical ownership
- **Stage transition** — `discovery-pre-PMF` → `design-partner-validation` etc.

### 9.3 Próximos docs Product Strategy a redactar (orden esperado)

```
01-propuesta-de-valor/00-customer-profile.md v0.1
01-propuesta-de-valor/01-value-map.md v0.1
01-propuesta-de-valor/02-fit-analysis.md v0.1
01-propuesta-de-valor/03-vp-statement-compressed.md v0.1

02-features-y-scope/00-fase-1-mvp-scope.md v0.1
02-features-y-scope/01-fase-2-roadmap-hipotesis.md v0.1
02-features-y-scope/02-feature-prioritization.md v0.1

03-oferta-y-pricing/00-design-partner-offer.md v0.1
03-oferta-y-pricing/01-pricing-tiers-hipotesis.md v0.1
03-oferta-y-pricing/02-commercial-terms.md v0.1

04-go-to-market/00-gtm-playbook-operational.md v0.1
04-go-to-market/01-design-partner-outreach.md v0.1
04-go-to-market/02-sales-motion-three-session-demo.md v0.1
04-go-to-market/03-channel-y-partner-strategy.md v0.1

05-capital-y-fundraising/00-funding-roadmap-y-milestones.md v0.1

06-experience-y-roadmap/ (import desde production repo · pending)
```

### 9.4 Cross-references load-bearing de este doc

- **CLAUDE.md §5 three-layer architecture** — Product Strategy ocupa Strategy layer
- **CLAUDE.md §6 conventions** — versioning + subfolder vs doc rules
- **`Market Research/05-market-insights/00-por-que-ahora.md`** — timing thesis (5 fuerzas) que justifica urgencia del departamento
- **`08_Estrategia-Producto/.../programa-design-partners.md` v1.1** — canonical design partner program + pricing model decision
- **`Branding/posicionamiento.md` v1.3** — modelo comercial + Phase 1 vs Phase 2 product scope
- **`Branding/vocabulario.md` v1.2** — modelo comercial terminology + anti-words

### 9.5 Anti-scope explícito (lo que este doc NO contiene · ya documentado dónde sí)

| Información | Por qué NO va aquí | Dónde va |
|---|---|---|
| VP statement compressed | Es output, no marco | `01-propuesta-de-valor/03-vp-statement-compressed.md` |
| Pricing tiers exact | Es decisión deferred · output futuro | `03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` |
| Sales scripts operacionales | Es output operacional | `04-go-to-market/02-sales-motion-three-session-demo.md` |
| Funding milestones details | Es output · single dense doc | `05-capital-y-fundraising/00-funding-roadmap-y-milestones.md` |
| Design partner program structure | Canonical en otro workspace | `08_Estrategia-Producto/.../programa-design-partners.md` |
| Bibliografía VPD/JTBD/Kano | Frameworks well-known · padding | (omit · citado inline donde aplica) |
| Historia detallada decisión pricing model | Ya documentado en `08_` doc §14 + posicionamiento §7 + vocabulario §2.8 | (cross-ref a esos docs) |

---

## Notas

- **Origen.** Este doc deriva de discusión estratégica 2026-05-22 (post Phase A Branding update + decisión pricing model). Outline aprobado con user antes de redacción · 9 secciones · escope lean disciplinado.
- **Departamento foundational.** Sin este doc, los otros 16 docs del departamento Product Strategy operarían con criterios inconsistentes · frameworks sin justificación · referencias sin trazabilidad. Es el meta-framework que todo hereda.
- **Documento vivo.** Se revisa con triggers en §9.2. Pre-PMF, expected updates: quarterly + ad-hoc cuando major decision. Post-PMF, expected: less frequent + tied to stage transitions.

### Changelog

- **v1.1 (2026-05-22).** Refinements aplicados post self-critique. 6 updates:
  - **§4.1 VPD primary** — añadido caveat sobre multi-stakeholder dynamic. VPD canónico asume single Customer Profile · Zenet requiere 3 mini-CPs (dueño · chef · contable) en un solo doc. Cross-reference a customer 05 buying process.
  - **§4.2 JTBD framing reframe** — "Secondary overlay" → "Input source". Honesto: JTBD framework vive en research backbone (customer 02) · VPD framework vive en product strategy. Es flow secuencial, no dos frameworks paralelos. Evita framework-padding.
  - **§4.3 Feature prioritization reframe** — "Kano model" → "TIER framework (inspired by Kano)". Honesto: pre-PMF NO podemos hacer Kano formal (requires customer survey data). Lo que usamos es TIER framework Kano-inspired. Re-evaluación de Kano formal trigger Cohort 1 Mes 3+ data.
  - **NEW §4.6 Frameworks adopted as secondary references** — añadidos Crossing the Chasm (Moore · ICP segmentation thinking · innovators vs early adopters vs early majority) + Default Alive/Default Dead (Graham · financial discipline binary para capital strategy).
  - **§2.3 + §6.4 cross-workspace ownership** — clarificado estado TEMPORARY del workspace `08_Estrategia-Producto/_context/05-customer-development/`. Was created por error del usuario como workspace separado · plan de migración explícito documentado · acción pendiente listada cuando migración se ejecute · pricing model decision migration path independiente (a `03-oferta-y-pricing/` cuando se redacte).
  - **§8.1 + §8.2 triggers reframe** — separados explícitamente "doc version triggers" (per-doc · evidence-based · puede ocurrir asincrónico) de "research stage transition triggers" (department-wide · todos los docs cambian `research_stage` simultáneamente). Evita confusión sobre cuándo bump un doc específico vs cuándo transition el departamento entero.
- **v1.0 (2026-05-22).** Documento base inicial del departamento Product Strategy. 9 secciones · ~12-15 páginas. Methodology stack declarado (VPD primary + JTBD overlay + Kano feature prioritization · refinements en v1.1). Versioning convention con `research_stage` extension (5 stages). Cross-references map completo (research backbone + Branding + cross-workspace `08_Estrategia-Producto/`). Pricing model decision documentada (pure subscription + 90-day minimum + annual prepay · sin setup fee · decisión 2026-05-22). Frameworks rejected explícitos (Aulet · Christensen · Lean Canvas formal · Blue Ocean · OKR pre-PMF). TIER framework documentado (TIER 1 + 2A Phase 1 launch · TIER 2B Phase 1.5 deferred · TIER 3 Phase 2). Three-stage roadmap evolutivo declarado (v0.1 → v1.0 → v2.0+).

---

*Last updated: 2026-05-22.*
*Next planned update: quarterly review Q3 2026 OR cuando Cohort 1 Mes 3 behavioral data dispare insights metodológicos · OR cuando migración de `08_Estrategia-Producto/_context/05-customer-development/` se ejecute · OR cuando ocurra major strategic decision que requiera reframe.*
