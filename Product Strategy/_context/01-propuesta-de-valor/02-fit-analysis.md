---
name: Fit Analysis — Zenet CP↔VM alignment validation
description: Fit Analysis component del Value Proposition Design canvas aplicado a Zenet. Cruce Customer Profile ↔ Value Map per stakeholder · matrices Pain↔PR + Gain↔GC con evidence labeling (Strong · Partial · Weak · Gap · Over-coverage) · coverage analysis Phase 1/1.5/2 · gaps identified con propuesta resolution · over-coverage simplification opportunities · implications para VP statement + sales motion + Phase 1 launch readiness. Input directo para `03-vp-statement-compressed.md` v0.1.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-25
status: active
version: 0.1
owner: Alan Bahena
---

# Fit Analysis — Zenet CP↔VM alignment

> Fit Analysis component del Value Proposition Design canvas (Strategyzer / Osterwalder) aplicado a Zenet. **Cruce explícito** entre Customer Profile (`00-customer-profile.md` v0.1.1) y Value Map (`01-value-map.md` v0.1) — cada Pain debe tener Pain Reliever match · cada Gain debe tener Gain Creator match · gaps + over-coverage visibles.
>
> Hypothesis-level v0.1 per marco §3 · evidence labeling con tier system (🟢 Strong · 🟡 Partial · 🟠 Weak · 🔴 Gap · ⚪ Over-coverage). Validation triggers Cohort 1 Mes 3+ data en §9.
>
> Este doc es **output** que consume CP + VM como inputs · **input** para `03-vp-statement-compressed.md` (1-pager final del subfolder `01-propuesta-de-valor/`).

---

## Índice

1. Propósito del documento
2. Marco metodológico Fit Analysis
3. Pain ↔ Pain Reliever fit matrix per stakeholder
4. Gain ↔ Gain Creator fit matrix per stakeholder
5. Coverage analysis summary
6. Gaps identified + propuesta resolution
7. Over-coverage identified + simplification opportunities
8. Implications for downstream docs
9. Hipótesis abiertas + validation triggers
10. Cross-references al research backbone + upstream/downstream
11. Estado del doc + notas finales

---

## 1. Propósito del documento

Este doc valida el **Problem-Solution Fit** entre Customer Profile y Value Map de Zenet. Para cada Pain en CP, identifica el Pain Reliever (PR) match en VM con evidence labeling. Para cada Gain en CP, identifica el Gain Creator (GC) match en VM con evidence labeling. Identifica **gaps** (Pains/Gains sin coverage) + **over-coverage** (PR/GC sin Pain/Gain target).

**Por qué este doc importa:**

- Sin Fit Analysis explícito, VP statement (próximo doc) se escribe en aspiración · NOT en cruces validados
- Phase 1 launch puede shippear con gaps invisibles (Pains críticos sin coverage)
- Cohort 1 conversion puede fallar por gaps no detectados pre-launch

**Lo que este doc NO hace:**

- NO escribe VP statement compressed (eso es `03-vp-statement-compressed.md`)
- NO valida Product-Market Fit (eso requires Cohort 1 Mes 3+ behavioral data)
- NO decide pricing exact ni Phase 1 launch timeline
- NO genera sales scripts operacionales

---

## 2. Marco metodológico Fit Analysis

### 2.1 VPD Fit Analysis framework — 3 tipos de fit canonical

| Fit type | Definition | Aplica a Zenet v0.1? |
|---|---|---|
| **Problem-Solution Fit** | Do we address real customer pains/gains? Hypothesis-level coverage | ✅ Primary focus de este doc |
| **Product-Market Fit** | Customer actually uses + pays? Behavioral validation | ❌ Post-Cohort 1 Mes 3+ data (NOT alcance v0.1) |
| **Business Model Fit** | Is it scalable and profitable? | ❌ Series A+ territory (NOT alcance v0.1) |

Zenet pre-PMF discovery stage opera en Problem-Solution Fit territory. Product-Market Fit validation viene con Cohort 1 design partner behavioral data Mes 3+.

### 2.2 Evidence labeling tiers (fit-specific)

| Tag | Significado | Acción si emerge |
|---|---|---|
| 🟢 **Strong fit** | PR/GC directly addresses Pain/Gain · validated en research backbone · explicit mapping CP↔VM | Preservar · use as VP statement anchor |
| 🟡 **Partial fit** | PR/GC addresses portion · OR Phase 1 partial vs Phase 2 full | Honest framing en sales motion · trajectory commitment |
| 🟠 **Weak fit** | PR/GC loosely connects · needs strengthening | Pre-Cohort 1 evaluate · either strengthen mapping or accept como hypothesis |
| 🔴 **Gap** | Pain/Gain has NO PR/GC mapped (or only Phase 2 mapping · NO Phase 1) | Critical visibility · §6 resolution propuesta |
| ⚪ **Over-coverage** | PR/GC maps to no specific Pain/Gain | §7 simplification opportunity |

### 2.3 Cross-stakeholder lens

Al analizar fits, lookout for:

- **Shared Pains/Gains entre stakeholders** → PR/GC efficiency (single capability addresses múltiples) · señal de leverage
- **Unique Pains/Gains per stakeholder** → require dedicated PR/GC · señal de specificity needed
- **Misaligned Pains/Gains** → critical Pain del dueño NO compartido por gerente/chef = product risk si solo dueño valida

### 2.4 Phase-aware analysis

Cada fit assessment incluye **phase** (Phase 1 launch · Phase 1.5 deferred · Phase 2 future). Coverage analysis §5 desglosa por phase para hacer honest Phase 1 readiness assessment.

---

## 3. Pain ↔ Pain Reliever fit matrix per stakeholder

### 3.1 Dueño-operador — Pain ↔ PR matrix

**Source inputs:** Customer-profile §3.3 Pains (7 pains severity-ranked) · Value-map §4.1 Pain Relievers.

| # CP Pain | Severity | Pain Reliever (VM) | Capability(s) | Phase | Fit tier | Evidence backbone |
|---|---|---|---|---|---|---|
| **Pain #1** Caos cuando él no está | ALTA | WhatsApp agency 24/7 + Manual Operativo modo lectura universal entregan info real-time al equipo cuando dueño no presente | E1 + E4 | Phase 1 | 🟢 **Strong** | Customer 03 §1 · customer 05 §3 · V-001 |
| **Pain #2** Dependence on key people | ALTA | Estandarización (recetario · procesos · catálogos) + Organigrama (roles/permisos) + Manual Operativo capturan knowledge en Zenet (NO en cabezas) | E2 + H1 + E1 | Phase 1 | 🟢 **Strong** | Customer 03 §2 · customer 02 JTBD |
| **Pain #3** Cuaderno mental no escala | ALTA | Manual Operativo + Estructuración sucursales + Estandarización extienden el sistema mental del operador (*"Zenet extiende tu cuaderno"* messaging core) | E1 + E3 + E2 | Phase 1 | 🟢 **Strong** | V-001 + V-010 · posicionamiento v1.4 §5 TRUE incumbent reframe |
| **Pain #4** Margin pressure crónica | ALTA | **Phase 1 partial:** Manual Operativo KPIs + Estandarización dan visibility básica. **Phase 2 full:** inventario dinámico + costos automatizados + agentes especializados entregan variance detection + root cause analysis data-driven | Phase 1: E1+E2 · Phase 2: F1+F4+F5 | Phase 1+2 | 🟡 **Partial Phase 1** / 🟢 **Strong Phase 2** | Customer 03 §4 |
| **Pain #5** Compliance SAT 2026 anxiety | MEDIA-ALTA | **Phase 1 partial:** Estandarización + 3 modos upload preparan data foundation. **Phase 2 full:** agentes cumplimiento + POS API CONTPAQi integration entregan CFDI reconciliation + audit defense automated | Phase 1: E2+E5 · Phase 2: F6+F7 | Phase 1+2 | 🟡 **Partial Phase 1** / 🟢 **Strong Phase 2** | Perplexity §2.1 · industry 08 §2.8 |
| **Pain #6** Data fragmentada entre POS · WhatsApp · papel · cabeza | MEDIA | 3 modos upload (CSV/Excel · captura manual · foto OCR) + Manual Operativo single source of truth consolidan data | E5 + E1 | Phase 1 | 🟢 **Strong** | Customer 03 §3 |
| **Pain #7** Chef + manager turnover destruye learning | MEDIA | Estandarización + Organigrama + Mapa de procesos capturan learning en sistema · cuando alguien se va, conocimiento permanece | E2 + H1 + H2 | Phase 1 | 🟢 **Strong** | Customer 03 §3.2 · customer 02 |

**Dueño fit summary:**

- **Pain coverage Phase 1:** 7/7 (100%) — 5 Strong · 2 Partial
- **High-severity (ALTA) pains:** 4/4 covered · 2 Strong + 2 Partial (margin · SAT)
- **Critical gap finding:** NONE Phase 1 · todos los pains tienen Pain Reliever path (Strong Phase 1 o Partial Phase 1 con Phase 2 trajectory)
- **Implication for sales:** dueño Pain #4 + #5 son "Phase 2 promises" que necesitan honest framing — *"Phase 1 da foundation · Phase 2 da automation completa"*

### 3.2 Gerente de sucursal — Pain ↔ PR matrix

**Source inputs:** Customer-profile §4.3 Pains (5 pains) · Value-map §4.2.

| # CP Pain | Severity | Pain Reliever (VM) | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|---|
| **Pain #1** Decisiones overload cuando dueño no está | ALTA | WhatsApp agency assists con queries · Manual Operativo provides info para decisions · gerente menos isolated | E4 + E1 | Phase 1 | 🟢 **Strong** |
| **Pain #2** Data fragmentada entre turnos | ALTA | Manual Operativo + WhatsApp agency dan cross-turn data continuity · single source of truth · handoff sin information loss | E1 + E4 | Phase 1 | 🟢 **Strong** |
| **Pain #3** Empleados nuevos productividad slow | MEDIA-ALTA | Organigrama (roles/permisos) + Manual Operativo + Estandarización dan onboarding asistido · NOT just *"watch and learn"* | H1 + E1 + E2 | Phase 1 | 🟢 **Strong** (Phase 1 basic) / 🟢 **Strong Phase 1.5** (con training portal N5) |
| **Pain #4** Recurring manual tasks consumen coordination time | MEDIA | 3 modos upload + Estandarización facilitan tasks repetitivos · less manual data entry overhead | E5 + E2 | Phase 1 | 🟢 **Strong** |
| **Pain #5** Firefighting mode 80% default | MEDIA | **Phase 1.5:** Manual Operativo extended (alertas y sugerencias) + Dashboard inicial dan proactive insights. **Phase 2:** + agentes especializados extend further. | Phase 1.5: N1+N2 · Phase 2: F5 | Phase 1.5+ | 🟡 **Partial** (defer Phase 1.5) |

**Gerente fit summary:**

- **Pain coverage Phase 1:** 4/5 (80%) — 4 Strong Phase 1 · 1 deferred Phase 1.5
- **Critical insight:** Pain #5 (firefighting) es el único pain gerente que NO está covered Phase 1 fully · acceptable porque MEDIA severity + Phase 1.5 trajectory clear
- **Implication for sales (Sesión 1 demo gerente):** focus en Pain #1-#4 Strong fits · acknowledge Pain #5 trajectory honestly

### 3.3 Chef ejecutivo — Pain ↔ PR matrix

**Source inputs:** Customer-profile §5.3 Pains (5 pains) · Value-map §4.3.

| # CP Pain | Severity | Pain Reliever (VM) | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|---|
| **Pain #1** Recetario en cabeza vulnerability | ALTA | Estandarización (catálogos + recetario) + WhatsApp agency (recetas consultables) + Manual Operativo (recetario read access) capturan recetario en Zenet · chef + restaurant menos vulnerable | E2 + E4 + E1 | Phase 1 | 🟢 **Strong** |
| **Pain #2** Empleados nuevos no replican calidad | ALTA | Estandarización (recetario detallado) + WhatsApp agency (cocineros consultan recetas) dan recetario consistent · less variation entre cocineros | E2 + E4 | Phase 1 | 🟢 **Strong** |
| **Pain #3** Merma variable sin root cause analysis | MEDIA-ALTA | **Phase 2:** inventario dinámico + costos automatizados + agente especializado en costos dan variance detection + root cause analysis específico. **Phase 1:** sin coverage real (Manual Operativo solo da visibility básica) | Phase 2: F1+F4+F5 | Phase 2 | 🔴 **Gap Phase 1** / 🟢 **Strong Phase 2** |
| **Pain #4** Dueño cuestiona costing sin contexto culinario | MEDIA | Manual Operativo (KPIs + costos básicos) + Estandarización dan data backing chef decisions · chef defends creative choices con números (Phase 1 partial · Phase 2 full) | Phase 1: E1+E2 · Phase 2: F4+F5 | Phase 1+2 | 🟡 **Partial Phase 1** / 🟢 **Strong Phase 2** |
| **Pain #5** Creative time consumed by logistics | MEDIA | 3 modos upload + Manual Operativo + Organigrama reducen logistics overhead · chef recovers creative time | E5 + E1 + H1 | Phase 1 | 🟡 **Partial** (Phase 1 basic · Phase 1.5/2 extends con dashboard + alertas) |

**Chef fit summary:**

- **Pain coverage Phase 1:** 4/5 (80%) — 2 Strong · 2 Partial · 1 Gap Phase 1
- **Critical insight:** Pain #3 (merma root cause) es **Gap Phase 1** · solo se cubre completamente en Phase 2. Es Pain MEDIA-ALTA · NOT deal-killer pero notable.
- **Implication for sales (Sesión 2 demo chef):** focus en Pain #1 + #2 Strong fits (recetario · empleados nuevos) · esos son los pains chef-validated más claros. Acknowledge Pain #3 trajectory Phase 2 honest.

### 3.4 Contable — Pain ↔ PR matrix

**Source inputs:** Customer-profile §6.2 contable Pains (Perplexity-enriched) · Value-map §4.4.

| Pain (§6.2 CP) | Severity | Pain Reliever (VM) | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|---|
| **CFDI reconciliation manual 25-35% workload** | ALTA | **Phase 1 limited:** 3 modos upload (CSV/Excel exports compatibles CONTPAQi/Aspel manual import) · contable importa data cleaner. **Phase 2 full:** F7 POS API integration native elimina manual workflow | Phase 1: E5 · Phase 2: F7 | Phase 1+2 | 🟡 **Partial Phase 1** / 🟢 **Strong Phase 2** |
| **Propinas treatment unresolved** | ALTA | **Phase 2:** F6 agentes cumplimiento fiscal + Addenda PROPINAS support automatizan compliance gray zone. **Phase 1:** sin coverage real | Phase 2: F6 | Phase 2 | 🔴 **Gap Phase 1** / 🟢 **Strong Phase 2** |
| **LFPDPPP 2025 compliance burden** | MEDIA-ALTA | **Phase 1:** Zenet provides compliance documentation + aviso de privacidad · High-touch onboarding founder-led ensures contable understands data handling. **Phase 2:** + audit logs + agentes cumplimiento extend | Phase 1: E6 + (Zenet compliance docs) · Phase 2: F6 | Phase 1+2 | 🟡 **Partial Phase 1** |
| **Audit defense preparation stress** | ALTA | **Phase 1 partial:** Estandarización + Manual Operativo dan data foundation cleaner. **Phase 2 full:** F4+F5+F6 dan automated reconciliation + audit-ready posture | Phase 1: E2+E1 · Phase 2: F4+F5+F6 | Phase 1+2 | 🟡 **Partial Phase 1** / 🟢 **Strong Phase 2** |

**Contable fit summary:**

- **Pain coverage Phase 1:** 3/4 (75%) — 0 Strong · 3 Partial · 1 Gap Phase 1
- **Critical insight:** **Contable es el stakeholder con menor Phase 1 coverage**. Phase 1 da foundation pero NOT automation. Phase 2 entrega coverage real. Esto se identifica honestly por value-map §4.4 — *"Pain Relievers limited · most contable Pain coverage es Phase 2 work"*.
- **Implication for sales (Stage F parallel · contable engagement):** honest framing crítico · NO over-promise Phase 1 contable benefits. Frame: *"Phase 1 prepara la data · Phase 2 automatiza tu workflow"*.
- **Silent veto risk:** alta (heredado customer 05 §10.8) si contable percibe Phase 1 como *"todo el producto"* y no como *"foundation para Phase 2"*. Sales motion debe pre-empt expectation setting.

---

## 4. Gain ↔ Gain Creator fit matrix per stakeholder

> Matrices paralelas a §3 Pain matrices · estructura por 4 niveles VPD (must-have · expected · desired · unexpected).

### 4.1 Dueño-operador — Gain ↔ GC matrix

**Source inputs:** Customer-profile §3.4 Gains (4 niveles) · Value-map §5.1.

#### Must-have Gain Creators

| Gain (CP §3.4) | Gain Creator (VM §5.1) | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Tiempo recuperado | WhatsApp agency + Manual Operativo + 3 modos upload liberan tiempo de coordination · target 20+ hrs/mes recuperadas | E1 + E4 + E5 | Phase 1 | 🟢 **Strong** |
| Data confiable | Estandarización + Manual Operativo single source of truth | E2 + E1 | Phase 1 | 🟢 **Strong** |
| Operación functional sin presencia constante | Manual Operativo modo lectura universal + WhatsApp agency | E1 + E4 | Phase 1 | 🟢 **Strong** |

#### Expected Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| ROI mensurable | Manual Operativo KPIs + Estandarización | E1 + E2 | Phase 1 | 🟡 **Partial Phase 1** (basic KPIs · full ROI tracking Phase 2) |
| Soporte responsive | High-touch onboarding founder-led + WhatsApp directo founder durante 90 días | E6 + E4 | Phase 1 | 🟢 **Strong** |
| Respeto del equipo hacia sistema | WhatsApp interface natural + Manual Operativo accesible | E4 + E1 | Phase 1 | 🟡 **Partial** (validation Cohort 1 Mes 3+) |
| Setup que termina en 90 días o menos | High-touch onboarding founder-led 90 días committed timeline | E6 | Phase 1 | 🟢 **Strong** |

#### Desired Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Escalamiento ordenado | Estructuración + Estandarización + Manual Operativo permiten siguiente sucursal con framework replicable | E2 + E3 + E1 | Phase 1 | 🟢 **Strong** |
| Margen mejorado mensurable | Phase 2: inventario dinámico + costos automatizados + agente especializado | F1 + F4 + F5 | Phase 2 | 🔴 **Gap Phase 1** / 🟢 **Strong Phase 2** |
| Status profesional industria local | Manual Operativo como artefacto profesional + Estandarización demostrable | E1 + E2 | Phase 1 | 🟡 **Partial** (validation industria local Cohort 1+) |

#### Unexpected Gain Creators (delighters)

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Founder community | High-touch onboarding founder-led + Cohort 1 design partner community | E6 | Phase 1 | 🟢 **Strong** (Cohort 1 inherent) |
| Ser caso de éxito local | Cohort 1 = Socio Fundador status permanent · founder community access | E6 | Phase 1 | 🟢 **Strong** (Cohort 1 inherent) |
| Founder access | WhatsApp directo con Alan durante onboarding + perpetual Socio Fundador access | E6 + E4 | Phase 1 | 🟢 **Strong** (Cohort 1 inherent) |
| Pre-emptive insights | Phase 1.5: alertas y sugerencias · Phase 2: agentes especializados | N2 + F5 | Phase 1.5+ | 🟠 **Weak Phase 1** / 🟡 **Partial Phase 1.5** / 🟢 **Strong Phase 2** |

**Dueño Gain fit summary:**

- **Must-have gains:** 3/3 Strong · launch-ready
- **Expected gains:** 3/4 Strong · 1 Partial (ROI mensurable depth)
- **Desired gains:** 1/3 Strong Phase 1 · 1 Partial · 1 Gap (margen mejorado = Phase 2)
- **Delighter gains:** 3/4 Strong Phase 1 (Cohort 1 inherent advantages) · 1 deferred

### 4.2 Gerente — Gain ↔ GC matrix

#### Must-have Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Herramienta que respeta su criterio | Mapa de procesos diseñado por gerente + Estandarización adapted | H2 + E2 | Phase 1 | 🟢 **Strong** |
| Productivity neto positivo from day 1 | WhatsApp interface natural + 3 modos upload flexibles | E4 + E5 | Phase 1 | 🟡 **Partial** (validation Cohort 1 Mes 1-2) |
| Authority preservation | Manual Operativo + WhatsApp agency son tools (NOT replacements) | E1 + E4 | Phase 1 | 🟢 **Strong** |

#### Expected Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Less repetitive tasks | 3 modos upload + Estandarización | E5 + E2 | Phase 1 | 🟢 **Strong** |
| Data cross-turn continuity | Manual Operativo + WhatsApp agency | E1 + E4 | Phase 1 | 🟢 **Strong** |
| Onboarding empleados nuevos facilitado | Estandarización + Organigrama + Manual Operativo | E2 + H1 + E1 | Phase 1 | 🟢 **Strong** Phase 1 basic · 🟢 **Strong Phase 1.5** (con training portal N5) |

#### Desired + Unexpected Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Sentirme menos firefighter (Desired) | Phase 1.5: Manual Operativo extended + Dashboard inicial | N1 + N2 | Phase 1.5 | 🔴 **Gap Phase 1** / 🟡 **Partial Phase 1.5** |
| Career growth visible (Unexpected) | Manual Operativo como tangible deliverable + WhatsApp agency mastery | E1 + E4 | Phase 1 | 🟡 **Partial** (long-term gain · validation cuando Cohort 1 gerentes acumulan tenure) |

### 4.3 Chef — Gain ↔ GC matrix

#### Must-have Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Sistema que respeta identity culinaria | Estandarización (chef-driven recetario) + WhatsApp agency (chef captures · sistema NO impose) | E2 + E4 | Phase 1 | 🟢 **Strong** |
| Recetario seguro fuera de su cabeza | Estandarización + Manual Operativo | E2 + E1 | Phase 1 | 🟢 **Strong** |
| Training nuevos empleados facilitado | Estandarización + WhatsApp agency | E2 + E4 | Phase 1 | 🟢 **Strong** Phase 1 basic |

#### Expected + Desired Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Criterio amplificado, NOT replaced (Expected) | Estandarización captures · WhatsApp executes | E2 + E4 | Phase 1 | 🟢 **Strong** |
| Less repetitive training (Expected) | WhatsApp agency consultable + Manual Operativo recetario | E4 + E1 | Phase 1 | 🟢 **Strong** |
| Data backing creative decisions (Expected) | Manual Operativo KPIs + Estandarización | E1 + E2 | Phase 1 | 🟡 **Partial Phase 1** (basic) / 🟢 **Strong Phase 2** |
| Independence creativa real (Desired) | Phase 1.5: Manual Operativo extended · Phase 2: agentes especializados | N2 + F5 | Phase 1.5+ | 🟡 **Partial Phase 1.5** / 🟢 **Strong Phase 2** |
| Margin defense data-driven (Desired) | Phase 2: F4 + F5 | F4 + F5 | Phase 2 | 🔴 **Gap Phase 1** / 🟢 **Strong Phase 2** |

#### Unexpected Gain Creators

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Career mobility increased | Recetario documented + portable | E2 + E1 | Phase 1 | 🟢 **Strong** |
| Less anxiety vulnerability | Recetario seguro en Zenet (NOT solo memoria) | E2 | Phase 1 | 🟢 **Strong** |

### 4.4 Contable — Gain ↔ GC matrix (honest Phase 1 limitation)

#### Phase 1 Gain Creators (limited)

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| Less reconciliation work | 3 modos upload (CSV exports compatibles CONTPAQi/Aspel manual import) | E5 | Phase 1 | 🟡 **Partial Phase 1** |
| Audit defense posture (foundation) | Estandarización + Manual Operativo | E2 + E1 | Phase 1 | 🟡 **Partial Phase 1** |

#### Phase 2 Gain Creators (full)

| Gain | Gain Creator | Capability(s) | Phase | Fit tier |
|---|---|---|---|---|
| CONTPAQi/Aspel native integration | F7 POS API integration | F7 | Phase 2 | 🟢 **Strong Phase 2** |
| AI augmentation framing (NOT replacement) | F5 Agentes especializados | F5 | Phase 2 | 🟢 **Strong Phase 2** |
| Less stress audit | F4 + F5 + F6 | F4 + F5 + F6 | Phase 2 | 🟢 **Strong Phase 2** |
| Aliado estratégico identity-aspirational | High-touch onboarding + Phase 2 agency framing (V-032 VoC anchor) | E6 + F5 | Phase 1+2 | 🟡 **Partial Phase 1** / 🟢 **Strong Phase 2** |

---

## 5. Coverage analysis summary

### 5.1 Per stakeholder Phase 1 coverage

| Stakeholder | Total Pains | Pains Strong Phase 1 | Pains Partial Phase 1 | Pains Gap Phase 1 | Total covered Phase 1 |
|---|---|---|---|---|---|
| **Dueño-operador** | 7 | 5 | 2 (margin · SAT) | 0 | **7/7 = 100%** |
| **Gerente** | 5 | 4 | 0 | 1 (firefighting → Phase 1.5) | **4/5 = 80%** Phase 1 strict · **5/5 con Phase 1.5** |
| **Chef** | 5 | 2 | 2 (costing · creative time) | 1 (merma root cause → Phase 2) | **4/5 = 80%** Phase 1 strict |
| **Contable** | 4 | 0 | 3 | 1 (propinas → Phase 2) | **3/4 = 75%** Phase 1 partial |

### 5.2 Per Phase coverage progression

| Phase | Pains addressed | % cumulative coverage |
|---|---|---|
| **Phase 1 launch (Q3 2026)** | 18 of 21 total stakeholder pains addressed (Strong + Partial) | **86%** |
| **Phase 1.5 (Q4 2026 / Q1 2027)** | +1 (gerente firefighting) | **90%** |
| **Phase 2 (Q3-Q4 2027)** | +2 (chef merma root cause · contable propinas) → 21/21 | **100%** |

### 5.3 Per severity coverage Phase 1

| Severity | Total | Covered Phase 1 (Strong + Partial) |
|---|---|---|
| ALTA | 8 (4 dueño + 2 gerente + 2 chef + 0 contable visible) | 8/8 = **100%** (with Partial Phase 1 acceptable) |
| MEDIA-ALTA | 4 (2 chef + 2 contable) | 4/4 = **100%** |
| MEDIA | 5 (3 dueño + 1 gerente + 1 chef) | 4/5 = **80%** (1 gap: gerente firefighting) |

### 5.4 Critical insights de coverage

1. **Phase 1 launch readiness:** dueño + gerente + chef well-covered. Contable Phase 1 limited (expected · honest framing required).
2. **All high-severity pains covered Phase 1** (Strong or Partial · NO Gap ALTA Phase 1) — load-bearing positive signal
3. **Stakeholder asymmetry intentional:** dueño = paya · primary deep coverage. Contable = autoriza · Phase 2 trajectory primary.
4. **Gap pattern:** los 3 gaps Phase 1 (firefighting gerente · merma chef · propinas contable) tienen Phase 2 trajectory clear · NO hard gaps
5. **No critical gap blockers para Phase 1 ship Q3 2026** — coverage matrix valida launch readiness

---

## 6. Gaps identified + propuesta resolution

### 6.1 Tabla de gaps Phase 1 + resolution path

| Gap | Stakeholder | Pain/Gain affected | Severity | Propuesta resolution | Phase target | Risk si NO resolution |
|---|---|---|---|---|---|---|
| **Pain #5 dueño SAT compliance full automation** | Dueño | Pain #5 SAT 2026 anxiety | MEDIA-ALTA | Phase 1 partial (Estandarización + 3 modos prep data) · Phase 2 full (F6 cumplimiento + F7 POS API) | Phase 2 | Dueño que priorityzes SAT como urgent puede no convertir Phase 1 · espera Phase 2 (mitigated por industry 08 §2.9 framing — SAT 2026 enforcement intensifying makes Phase 1 prep valuable already) |
| **Pain #4 dueño margin defense automation** | Dueño | Pain #4 margin pressure | ALTA | Phase 1 partial (Manual Operativo KPIs) · Phase 2 full (F1+F4+F5) | Phase 2 | Dueño que necesita variance detection inmediato puede no convertir · pero KPIs Phase 1 dan visibility (NOT auto-detection) |
| **Pain #5 gerente firefighting reduction** | Gerente | Pain #5 firefighting | MEDIA | Phase 1.5 ship (N1 dashboard + N2 alertas y sugerencias) | Phase 1.5 | Gerente NO convertirá si Phase 1 dura sin progress visible · mitigated by 90-day Sesión 1 demo focused on Pain #1-#4 Strong fits |
| **Pain #3 chef merma root cause analysis** | Chef | Pain #3 merma variable | MEDIA-ALTA | Phase 2 ship (F1+F4+F5) | Phase 2 | Chef que prioritizes margin defense → posible Sesión 2 demo loss · honest framing critical |
| **Pain propinas treatment unresolved contable** | Contable | Pain propinas | ALTA contable-specific | Phase 2 (F6 agentes cumplimiento + Addenda PROPINAS) | Phase 2 | Contable que prioritizes propinas (alta severity in compliance gray zone) → silent veto risk · honest Phase 2 trajectory mandatory |
| **CFDI reconciliation full automation contable** | Contable | Pain reconciliation 25-35% workload | ALTA contable-specific | Phase 1 partial (CSV exports) · Phase 2 full (F7 POS API CONTPAQi) | Phase 1 → Phase 2 | Contable que demands integration POS API immediately → Phase 1 partial puede no satisfacer · mitigation: position Phase 1 como "foundation cleaner data · Phase 2 trajectory full automation" |
| **Margen mejorado mensurable (desired gain)** | Dueño | Gain desired margen | (gain · not pain) | Phase 2 (F1+F4+F5) | Phase 2 | NOT critical gap · es desired gain (NOT must-have) · acceptable defer |

### 6.2 Gap risk assessment

**Hard gaps (no Phase 2 trajectory):** 0
**Soft gaps (Phase 1 partial · Phase 2 full):** 5 (Pain #4 dueño · Pain #5 dueño · Pain #5 gerente · Pain #3 chef · contable reconciliation)
**Phase 1.5 deferred:** 1 (gerente firefighting · clear Q4 2026 ship)
**Phase 2 deferred:** 4 (margin · SAT · merma root · contable propinas + reconciliation full)

**Risk consolidado:**
- **Lowest risk:** todos gaps tienen Phase 2 trajectory clear (NOT hard gap permanente)
- **Medium risk:** dueño que prioritizes margin OR SAT compliance puede no convertir Phase 1 · acceptable trade-off (Phase 2 acquisition path exists)
- **Highest risk:** silent veto contable si Phase 1 limited coverage NO está framed honestly como foundation · Stage F mitigation crítica (heredado customer 05 §10.8)

### 6.3 Resolution discipline

**No new Phase 1 capabilities added based on gaps** — Phase 1 scope ya está committed (8 capabilities Essential + High value · 2-3 meses ship). Gaps son visible y honestly framed · NOT trigger para scope creep. Phase 2 trajectory es resolution path real.

---

## 7. Over-coverage identified + simplification opportunities

> Honest audit: PR/GC que NO map a Pain/Gain específico = candidate para simplification.

### 7.1 Audit completo

Reviewing Value Map §3 capabilities · cada capability debe map a 1+ Pain o Gain:

| Capability | Maps to Pains/Gains? | Status |
|---|---|---|
| Manual Operativo (E1) | ✅ Multiple Pains (dueño #1 · #3 · #6 · #7 · gerente #1 · #2 · chef #1 · contable audit) + Gains | Strong utility |
| Estandarización (E2) | ✅ Multiple Pains (dueño #2 · #3 · #7 · chef #1 · #2 · contable audit) + Gains | Strong utility |
| Estructuración sucursales (E3) | ✅ Pain dueño #3 (escala mental) + Gain escalamiento ordenado | Strong utility |
| WhatsApp Agency (E4) | ✅ Multiple Pains (dueño #1 · gerente #1 · #2 · chef #1 · #2) + Gains | Strong utility · diferenciador #6 |
| Modos upload (E5) | ✅ Pain dueño #6 + gerente #4 + chef #5 + contable reconciliation | Strong utility |
| High-touch onboarding (E6) | ✅ Gain expected soporte responsive + delighters founder community/access + contable LFPDPPP framing | Strong utility · Cohort 1 differentiator |
| Organigrama (H1) | ✅ Pain dueño #2 + #7 + gerente #3 + chef #5 | Strong utility |
| Mapa procesos (H2) | ✅ Pain dueño #7 + gerente respeta criterio | Strong utility |

**Phase 1.5 capabilities:**

| Capability | Maps to Pains/Gains? | Status |
|---|---|---|
| Dashboard inicial (N1) | ✅ Pain gerente #5 firefighting + Gain dueño pre-emptive insights | Strong utility · justificado Phase 1.5 |
| Manual Operativo extended (N2) | ✅ Pain gerente #5 + Gain dueño pre-emptive + Gain chef independence | Strong utility |
| Mapa procesos detailed (N3) | 🟠 Indirect — strengthens existing Mapa procesos · NOT new Pain coverage | **Question:** ¿es valuable suficiente para Phase 1.5? |
| Organigrama job descriptions (N4) | 🟠 Indirect — strengthens existing Organigrama | **Question:** ¿es valuable suficiente para Phase 1.5? |
| Training portal (N5) | ✅ Pain gerente #3 + Gain expected onboarding facilitado (Phase 1.5 makes Strong) | Strong utility |

**Phase 2 capabilities:** all map to gaps identified Phase 1 (F1 inventario · F4 costos · F5 agentes · F6 cumplimiento · F7 POS API) — no over-coverage detected.

### 7.2 Findings + simplification opportunities

**Strong utility validated:** Phase 1 (8 capabilities Essential + High value) + Phase 2 (7 capabilities F1-F7) están todos justificados por Pains/Gains mapping.

**Possible simplification candidates Phase 1.5:**

- **N3 Mapa procesos detailed features** — indirect mapping · maybe wait for Cohort 1 signal antes de Phase 1.5 commit
- **N4 Organigrama job descriptions completas** — indirect mapping · similar wait-and-see

**Recommendation:** mantener N3 + N4 en Phase 1.5 lista PERO marcar como **"pending Cohort 1 Mes 3+ usage signal"** · NOT auto-ship Phase 1.5. Si Cohort 1 NO requests these capabilities directly, defer further.

### 7.3 Conclusion over-coverage analysis

Value-map.md v0.1 está **disciplined · NO significant feature bloat detected**. Los 2 candidates de simplification (N3 + N4) son Phase 1.5 minor capabilities · NOT blocking decisions. Esto es señal positiva de discipline pre-PMF.

---

## 8. Implications for downstream docs

### 8.1 VP statement compressed (próximo doc · `03-vp-statement-compressed.md`)

**Anchor points para VP statement basado en Strong fits:**

- **Primary anchor (dueño Strong fits Phase 1):**
  - *"Zenet captura el conocimiento operativo en un sistema vivo · accesible desde WhatsApp · que extiende el sistema mental del operador a donde él no está"* (Pain #1 + #2 + #3 + #6 + #7)
- **Phase 2 trajectory promesa (dueño + chef + contable):**
  - *"Phase 2 (Q3-Q4 2027) añade inventario dinámico · costos automatizados · y integración con tu contabilidad para automatizar lo que hoy es manual"* (Pain #4 + #5 dueño · Pain #3 chef · contable Pains)
- **Diferenciador único (heredado posicionamiento §4 #6):**
  - *"Zenet vive en WhatsApp · NO en otra app que aprender"* (uso #3 MX-native)
- **Anti-positions explícitos:**
  - *"NO reemplazamos a tu contador · automatizamos lo manual"*
  - *"NO reemplazamos a tu equipo · multiplicamos su productividad"*
  - *"NO generamos recetas · capturamos las que ya tienes"*

### 8.2 Sales motion implications (downstream `04-go-to-market/`)

**Sesión 1 demo gerente (60-90 min · workflow):**
- Focus Strong fits: Pain #1 (decisiones overload) · Pain #2 (data turnos) · Pain #3 (empleados nuevos) · Pain #4 (manual tasks)
- Acknowledge honestly: Pain #5 firefighting → Phase 1.5 dashboard trajectory

**Sesión 2 demo chef (30-45 min · recetario):**
- Focus Strong fits: Pain #1 (recetario vulnerability) · Pain #2 (empleados no replican)
- Acknowledge honestly: Pain #3 merma root cause → Phase 2 trajectory
- Partial: Pain #4 (data backing decisions) · Pain #5 (creative time)

**Sesión 3 dueño + gerente (20-30 min · ROI + cierre):**
- Focus Strong fits: Pain #1 · #2 · #3 · #6 · #7 (5 ALTA + MEDIA strong)
- Honest framing: Pain #4 margin + Pain #5 SAT → Phase 1 foundation · Phase 2 full automation

**Stage F parallel contable (Mes 1-2 engagement):**
- Honest framing **critical** (silent veto risk highest)
- Phase 1 = data foundation cleaner (CSV exports CONTPAQi-compatible · Estandarización + Manual Operativo)
- Phase 2 = full automation (POS API integration · agentes cumplimiento)
- Position Zenet como *"liberando tiempo del contador para advisory estratégico · NOT automatizando su workflow Phase 1"*
- Use V-031 Jesús Ramírez Allegra verbatim para disarming AI replacement concern

### 8.3 Phase 1 launch readiness assessment

**Launch-ready assessment:** ✅ Phase 1 ship-ready Q3 2026

- All ALTA-severity pains covered Phase 1 (Strong + Partial)
- All dueño pains addressed
- 80% gerente + chef coverage Phase 1 strict
- Contable 75% partial coverage Phase 1 · honest framing required
- No hard gaps · 5 soft gaps tienen Phase 2 trajectory clear

**Risk monitoring para Cohort 1:**
- Mes 1: chef adoption signal (Sesión 2 outcomes)
- Mes 2-3: contable silent veto monitoring (Stage F engagement quality)
- Mes 3: conversion rate Phase 1 standalone (must be >40% per customer-profile H-05)
- Mes 6: retention Mes 6 + Phase 2 commitment signals

---

## 9. Hipótesis abiertas + validation triggers

> 7 hipótesis específicas del Fit Analysis a validar con Cohort 1 Mes 3+ data.

### H-FA-01 — Strong fits dueño Phase 1 son operationally validated en Sesión 3 demo

**Hipótesis:** 5 Strong fits dueño (Pain #1 · #2 · #3 · #6 · #7) son recognized + valued por 4+ de 5 DPs en Sesión 3 demo. *"Sí, eso es exactamente mi problema"* response pattern.

**Validation trigger:** Sesión 3 demo feedback Cohort 1. <3 DPs validate Strong fits = capability framing needs refresh.

### H-FA-02 — Phase 1 partial fits Pain #4 + #5 dueño son acceptable (NOT deal killer)

**Hipótesis:** Dueños que reconocen Pain #4 margin + Pain #5 SAT como críticos NO declinan Phase 1 por NOT auto-detection. Aceptan Phase 2 trajectory si Phase 1 foundation es perceived value.

**Validation trigger:** Mes 3 conversion analysis. Si >2 DPs decline Phase 1 citing Pain #4 OR #5 specifically → reframe needed (more aggressive Phase 2 timeline OR Phase 1 capability expansion).

### H-FA-03 — Contable Phase 1 limited coverage NO bloquea conversion (silent veto mitigated)

**Hipótesis:** Stage F engagement con DP contables Mes 1-2 mitiga silent veto risk. Phase 2 trajectory acceptable cuando positioned honestly + integration commitment shown (sandbox · sample exports).

**Validation trigger:** Stage F outcomes con 5 DP contables Mes 1-2. Silent veto materializing in >2 = sales motion adjustment urgent (heredado customer 05 §10.8 mitigation framework).

### H-FA-04 — Chef Phase 1 coverage (recetario · empleados nuevos) es suficiente para Sesión 2 conversion

**Hipótesis:** 2 Strong fits chef Phase 1 (Pain #1 · #2) son suficientes para chef adoption en Sesión 2. Pain #3 merma root cause como Phase 2 trajectory acceptable.

**Validation trigger:** Sesión 2 outcomes. Chef adoption rate (≥4 of 5 chefs sign onto recetario use) = validated. <3 chefs adopt = product gap real.

### H-FA-05 — Cross-stakeholder efficiency (single capability addresses multiple stakeholders) reduces feature count

**Hipótesis:** Capabilities E1 (Manual Operativo) + E2 (Estandarización) + E4 (WhatsApp) address Pains for 3+ stakeholders simultaneously. Esta efficiency permite Phase 1 scope reduction sin loss de coverage.

**Validation trigger:** Cohort 1 usage analytics Mes 3+. Si capability single-stakeholder mostly used (NOT cross-stakeholder), product design assumption incorrect.

### H-FA-06 — Phase 1.5 features (dashboard inicial + alertas + training portal) son retention drivers Mes 4-6

**Hipótesis:** Cohort 1 DPs que retain Mes 4-6 (post-90 días gratis) cite Phase 1.5 features delivered como key retention factor.

**Validation trigger:** Mes 6 retention exit interviews. Si Phase 1.5 features NOT cited como retention driver, reprioritize Phase 1.5 scope.

### H-FA-07 — No over-coverage (no feature unused)

**Hipótesis:** Todas las Phase 1 capabilities (E1-E6 + H1-H2) son usadas por ≥30% del Cohort 1 cohort en Mes 3.

**Validation trigger:** Mes 3 usage analytics per capability. <30% usage en cualquier capability = potential over-coverage · candidate para simplification post-Cohort 1.

### Triggers de update v0.1 → v0.2 (minor)

- Sesión 1+2+3 demo outcomes con DPs
- Cross-doc sync (CP o VM updates trigger fit re-validation)
- Phase 1 scope adjustments dev team

### Triggers de update v0.1 → v1.0 (significant)

- Cohort 1 Mes 3 data validates/contradicts 3+ hypotheses
- Critical gap identified post-launch (Pain con NO fit que Cohort 1 surfaces)
- Major reprioritization Phase 1.5 OR Phase 2

---

## 10. Cross-references al research backbone + upstream/downstream docs

### 10.1 Inputs (upstream · primary)

| Source | Cómo se usa en fit-analysis.md |
|---|---|
| **`00-customer-profile.md` v0.1.1** | Input PRIMARY — Pains/Gains de 4 stakeholders directamente referenciados en matrices §3 + §4 |
| **`01-value-map.md` v0.1** | Input PRIMARY — Pain Relievers/Gain Creators de 4 stakeholders directamente referenciados |
| Marco product-strategy v1.1 | Methodology + TIER framework + Phase stages |
| Posicionamiento v1.4 | Diferenciadores anchor points + anti-positions |

### 10.2 Outputs (downstream)

| Destination doc | Cómo este doc alimenta downstream |
|---|---|
| **`03-vp-statement-compressed.md` v0.1** (próximo) | VP statement anchored en Strong fits + honest Phase 2 trajectory framing |
| `04-go-to-market/02-sales-motion-three-session-demo.md` v0.1 | Talking points per Sesión 1/2/3 + Stage F desde matrices §3 + §4 |
| `02-features-y-scope/00-fase-1-mvp-scope.md` v0.1 | Phase 1 launch readiness assessment §8.3 |
| `04-go-to-market/03-channel-y-partner-strategy.md` v0.1 | Contable partnership strategy informed by §3.4 + §6 contable gap resolution |

### 10.3 Research backbone inputs

| Doc | Lo que aporta a fit analysis |
|---|---|
| Customer 02 JTBD v0.1.1 (con contable) | Jobs foundation para PR mapping |
| Customer 03 pains v0.5 (con §2.5 contable) | Pains backbone primary |
| Customer 05 buying process v0.7 (silent veto · inflection) | Silent veto mitigation framework (§3.4 + §8.2 Stage F) |
| Customer 06 objeciones v0.5 (contable-specific objections) | Stage F engagement playbook context |
| Customer 07 VoC v0.1.1 (verbatim quotes + vernacular) | V-031 augmentation framing (contable disarming) |
| Industry 08 regulatorio v1.0.1 (SAT 2026 + LFPDPPP) | Pain #5 dueño + contable Pains context |
| Posicionamiento v1.4 §6 anti-positions | Anti-position consistency throughout fits |

---

## 11. Estado del doc + notas finales

### 11.1 Estado del doc

- **Version:** 0.1
- **Research stage:** `discovery-pre-PMF`
- **Last updated:** 2026-05-25
- **Owner:** Alan Bahena
- **Status:** active · tercer doc del subfolder `01-propuesta-de-valor/`

### 11.2 Update triggers de este doc específico

- **v0.1 → v0.2 (minor):** Sesión 1+2+3 demo outcomes Cohort 1 · cross-doc sync (CP o VM updates) · Phase 1 scope adjustments
- **v0.1 → v1.0 (significant):** Cohort 1 Mes 3 data validates/contradicts 3+ hypotheses · critical gap surfaces post-launch · major reprioritization

### 11.3 Próximo doc en sequence

`01-propuesta-de-valor/03-vp-statement-compressed.md` v0.1 — VP statement final del subfolder (1-pager). Anchored en Strong fits identified aquí + honest Phase 2 trajectory framing. Sirve como input directo para pitch deck · landing copy · sales scripts opening.

### 11.4 Cross-pointers load-bearing

- **`00-customer-profile.md` v0.1.1** — Pains/Gains foundation
- **`01-value-map.md` v0.1** — Pain Relievers/Gain Creators
- **Marco product-strategy v1.1** — methodology + Phase stages
- **Customer 05 v0.7 §10.8** — silent veto mitigation framework (Stage F contable)

### 11.5 Anti-scope explícito

| Información | Por qué NO va aquí | Dónde va |
|---|---|---|
| VP statement compressed (1-pager) | Output downstream final | `03-vp-statement-compressed.md` v0.1 |
| Sales scripts operacionales detalladas | Downstream operational | `04-go-to-market/02-sales-motion-three-session-demo.md` v0.1 |
| Phase 1 dev timeline detail | Engineering scope | (production repo) |
| Pricing tiers exact | Deferred | `03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` |
| Product-Market Fit assessment | Post-Cohort 1 Mes 3+ data | (this doc v1.0+) |

---

## Notas

- **Origen.** Doc derivado de outline aprobado 2026-05-25 + inputs primary `00-customer-profile.md` v0.1.1 + `01-value-map.md` v0.1. Three-tier evidence labeling (🟢 Strong · 🟡 Partial · 🟠 Weak · 🔴 Gap · ⚪ Over-coverage) aplicado consistently throughout matrices.
- **Hypothesis-level disciplina.** Per marco §3, todo fit claim labeled · evidence vs hypothesis explícito · validation triggers documented en §9.
- **Honest coverage framing.** Phase 1 launch readiness validated (86% pain coverage Phase 1 · 100% high-severity pains addressed Strong+Partial) · gaps visible + Phase 2 trajectory clear · NOT hard gaps blockers.
- **No critical bloat detected.** Value-map.md capabilities están well-aligned a Pains/Gains identified · solo 2 minor Phase 1.5 candidates (N3 + N4) flagged for Cohort 1 signal validation.
- **Documento vivo.** Update cadence per marco §8 — trimestral review + ad-hoc cuando Cohort 1 Mes 3+ data dispare insights.

### Changelog

- **v0.1 (2026-05-25).** Documento base inicial · 11 secciones · Problem-Solution Fit Analysis applied across 4 stakeholders. Pain↔PR matrices §3 (dueño 7 pains · gerente 5 · chef 5 · contable 4) + Gain↔GC matrices §4 (4 niveles VPD per stakeholder). Coverage analysis §5 reveals 86% Phase 1 pain coverage · 100% high-severity covered Strong+Partial. Gaps §6 identifies 5 soft gaps con Phase 2 trajectory + 1 Phase 1.5 deferred (gerente firefighting) · NO hard gaps. Over-coverage §7 validates Value-map.md disciplina · solo 2 minor Phase 1.5 candidates flagged. Implications §8 — Phase 1 launch readiness assessment ✅ ready · sales motion talking points per Sesión 1/2/3 + Stage F mitigation framework · VP statement anchor points based on Strong fits + honest Phase 2 trajectory framing. 7 hipótesis abiertas con Cohort 1 Mes 3+ validation triggers.

---

*Last updated: 2026-05-25.*
*Next planned update: post Cohort 1 Sesión 1+2+3 demo outcomes (any DP) · OR Mes 3 data dispare insights · OR critical gap surfaces post-launch · OR major Phase 1.5/2 reprioritization.*
