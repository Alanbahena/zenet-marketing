---
name: Value Map — Zenet capabilities (VPD applied · multi-stakeholder)
description: Value Map component del Value Proposition Design canvas aplicado a Zenet. Estructura dos capas — Layer 1 capabilities macro para VP messaging + Layer 2 feature breakdown para feature prioritization downstream. 4 mini-Value Maps stakeholder (dueño primary + gerente/chef/contable secondary) con Pain Relievers + Gain Creators rankeados essential → nice-to-have. Phase 1/1.5/2 distinction honest. WhatsApp Agency interface read + optional upload Phase 1. Permission model documented. Input directo para Fit Analysis (`02-fit-analysis.md`) + VP Statement (`03-vp-statement-compressed.md`).
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-25
status: active
version: 0.1
owner: Alan Bahena
---

# Value Map — Zenet capabilities

> Value Map component del Value Proposition Design canvas (Strategyzer / Osterwalder) aplicado a Zenet. **Two-layer structure** (Layer 1 capabilities macro + Layer 2 feature breakdown) per user draft 2026-05-25. **Principio organizacional adoptado:** essential → nice-to-have ranking aplicado consistently cross-sections. **Phase 1 / Phase 1.5 / Phase 2 distinction honest** — qué ship cuándo · qué defer · qué es hipótesis futura.
>
> Este doc es **output** que consume `00-customer-profile.md` v0.1.1 como input · **input** para `02-fit-analysis.md` (cruce CP↔VM) y `03-vp-statement-compressed.md` (1-pager final).
>
> Hypothesis-level v0.1 per marco §3 · evidence labeling explícito · validation triggers Cohort 1 Mes 3+ data en §8.

---

## Índice

1. Propósito del documento
2. Marco metodológico VPD aplicado
3. Products & Services — two-layer catálogo capabilities
4. Pain Relievers — mapped per stakeholder
5. Gain Creators — mapped per stakeholder
6. Anti-products — what Zenet explicitly does NOT do
7. Phase 1 vs Phase 1.5 vs Phase 2 distinction matrix
8. Hipótesis abiertas + validation triggers
9. Cross-references al research backbone + upstream/downstream docs
10. Estado del doc + notas finales

---

## 1. Propósito del documento

Este doc aplica el Value Map component del VPD canvas a Zenet — captura **qué entrega Zenet** (Products & Services), **cómo alivia pains** del operador (Pain Relievers), y **cómo crea gains** (Gain Creators). Estructurado para mapear directly a Customer Profile (`00-customer-profile.md` v0.1.1) · permite Fit Analysis downstream (`02-fit-analysis.md`) validar alignment CP↔VM con evidencia.

**Dos principios estructurales load-bearing:**

- **Two-layer structure** (Layer 1 capabilities macro + Layer 2 feature breakdown) — Layer 1 alimenta VP statement compressed · Layer 2 alimenta feature prioritization en `02-features-y-scope/`. Esto evita confusión entre "qué decimos al cliente" y "qué construimos como product team".
- **Essential → nice-to-have ranking** aplicado cross-sections — capabilities ranked dentro de cada Phase · Pain Relievers ranked por critical pain addressed · Gain Creators ranked por must-have vs delighter. Hace scope decisions visibles + investor pitch friendly.

Lo que este doc **NO hace:** no escribe Fit Analysis · no escribe VP statement · no decide pricing · no detalla GTM. Todo eso vive downstream en docs subsequentes.

---

## 2. Marco metodológico VPD aplicado

### 2.1 Value Map structure (VPD canonical)

Tres components canonical del Value Map:

| Component | Qué captura | Mapped a en Customer Profile |
|---|---|---|
| **Products & Services** | Catálogo de Zenet capabilities (single source of truth · NOT stakeholder-specific) | (catálogo independiente · alimenta PR + GC) |
| **Pain Relievers** | Cómo Zenet alivia pains de cada stakeholder | Pains (customer-profile §3.3 · §4.3 · §5.3 · §6.2) |
| **Gain Creators** | Cómo Zenet crea gains para cada stakeholder | Gains (customer-profile §3.4 · §4.4 · §5.4 · §6.2) |

### 2.2 Two-layer structure (user draft 2026-05-25 adopted)

| Layer | Propósito | Uso downstream |
|---|---|---|
| **Layer 1 — Capabilities macro** | High-level capabilities para VP messaging · 5-8 items | VP statement compressed · landing copy · pitch deck Slide 4 |
| **Layer 2 — Feature breakdown** | Granular features que construyen capabilities · 20-40 items | Feature prioritization (`02-features-y-scope/`) · roadmap planning · engineering scope |

**Por qué dos capas:** evita confusión entre marketing-facing (Layer 1 · cliente entiende capability) y engineering-facing (Layer 2 · team entiende qué construir). Single-layer approach colapsa esta distinción y crea fricción downstream.

### 2.3 Multi-stakeholder mapping

Single Value Map genérico no captura nuance de buying committee MX restaurant. Estructura:

- **1 catálogo Products & Services** (capabilities son las mismas independiente de stakeholder)
- **4 mini Pain Relievers** (mapped a Pains de 4 stakeholders en customer-profile)
- **4 mini Gain Creators** (mapped a Gains de 4 stakeholders)

Esto evita 4 docs separados pero preserva multi-stakeholder framing crítico (per marco §4.1).

### 2.4 Principio essential → nice-to-have ranking

Adoptado cross-sections per user proposal 2026-05-25. Ranking categories:

| Tier ranking | Kano category | TIER framework (heredado marco §4.3) | Phase ship |
|---|---|---|---|
| **Essential** | Must-have | TIER 1 | Phase 1 launch |
| **High value** | Performance | TIER 2A | Phase 1 launch |
| **Nice-to-have** | Delighter | TIER 2B | Phase 1.5 deferred |
| **Future-must-have** | Performance/Delighter (Phase 2) | TIER 3 + arquitectural | Phase 2 |

Aplicado dentro de cada section: capabilities ranked essential first · Pain Relievers ranked by critical pain addressed first · Gain Creators ranked must-have first.

### 2.5 Hypothesis labeling convention (per marco §7.2)

- `[Hipótesis]` — sin evidencia material directa · default pre-PMF
- `[Hipótesis · user draft 2026-05]` — feature decision del user pre-Cohort 1 validation
- `[Validado research backbone]` — heredado de customer-profile + research docs
- `[Phase 1 ship]` · `[Phase 1.5 deferred]` · `[Phase 2 future]` — phase commitment status

---

## 3. Products & Services — two-layer catálogo capabilities

### 3.1 Layer 1 — Capabilities macro por Phase (essential-ranked)

#### 3.1.1 Phase 1 launch (Q3 2026 · ship en 2-3 meses)

**Essential capabilities (TIER 1 · must-have · no ship sin estas):**

| # | Capability | Por qué essential |
|---|---|---|
| **E1** | **Manual Operativo vivo en Zenet** (modo lectura universal · todos los users) | Sin esto, deliverable es PDF exportable estático · cliente se va Mes 3 con todo · conversion cliff inevitable. Manual vivo es el ancla que justifica ongoing subscription. |
| **E2** | **Estandarización** (5 sub-features: Clasificación · Catálogos · Alineamiento · Estructura · Normalización) | Foundational layer. Sin estandarización, otros features operan sobre data inconsistent. Es donde Zenet entra al workflow operativo del operador. |
| **E3** | **Estructuración de sucursales** (visual diagram de sucursales · datos iniciales) | Sin esto, multi-sucursal operations imposible de coordinar coherentemente. Single sucursal puede skip · multi-sucursal lo requiere day 1. |
| **E4** | **WhatsApp Agency interface** (read + optional upload onboarding) | Diferenciador #6 posicionamiento v1.4 · uso #3 MX-native. Read básico Phase 1 · upload optional para onboarding (recetario · inventario · etc. cuando operador lo desee). |
| **E5** | **Modos de subir archivos** (CSV/Excel/PDF · captura manual · fotografías) | Diferenciador #2 posicionamiento — *"trabajamos sobre tu POS actual"* opera vía manual upload Phase 1 (NO POS API integration todavía). Sin esto, no hay forma de cargar data del operador. |
| **E6** | **High-touch onboarding founder-led** (3 meses · INCLUIDO en subscripción) | NO setup fee separado (decisión 2026-05-22). Differentiates de competitors self-serve · alinea con Mexican high-touch expectation. |

**High value capabilities (TIER 2A · performance · ship si timeline lo permite):**

| # | Capability | Por qué high value |
|---|---|---|
| **H1** | **Organigrama de personal** (roles + permisos · NO full job descriptions todavía) | Foundational para permission model + sets up training portal Phase 1.5. Roles + permisos básicos Phase 1 · descripciones de trabajo completas Phase 1.5. |
| **H2** | **Mapa de procesos internos** (diagrama de flujo basic · NO detailed flowchart features todavía) | Diferenciador único · ningún competidor lo tiene. Basic Phase 1 · features detallados (chat con agente especializado · descripción detallada) Phase 1.5. |

#### 3.1.2 Phase 1.5 deferred (Q4 2026 / Q1 2027 · post-Cohort 1 Mes 3 data)

**Nice-to-have capabilities (TIER 2B · delighter · assessment pendiente):**

| # | Capability | Por qué deferred |
|---|---|---|
| **N1** | **Dashboard inicial** (Panorama del negocio · Onboarding Status · Sugerencias) | Provides high-level visibility pero NOT critical para day-1 operation. Phase 1 sin dashboard funciona via Manual Operativo + WhatsApp. |
| **N2** | **Manual Operativo extended features** (Actualizaciones · Alertas y sugerencias · Visualización avanzada) | Manual Operativo basic suficiente Phase 1 (KPIs · Dashboard ejecutivo · Procesos · Organigrama · Estandarización · Visualización basic). Extended features require usage data Phase 1 first. |
| **N3** | **Mapa de procesos detailed features** (chat con agente especializado en procesos · descripción general detallada de cada proceso) | Basic diagrama de flujo Phase 1. Features avanzados require Phase 1 usage signals. |
| **N4** | **Organigrama job descriptions completas** | Roles + permisos básicos Phase 1. Job descriptions full Phase 1.5 cuando training portal context exista. |
| **N5** | **Training portal para nuevos empleados** | TIER 2B original heredado marco §4.3. Pending assessment de complexity vs value. |

#### 3.1.3 Phase 2 future (Q3-Q4 2027 · TIER 3 + arquitectural)

**Future-must-have capabilities (TIER 3 · pending Cohort 1 validation can pivot):**

| # | Capability | Validation status |
|---|---|---|
| **F1** | **Inventario dinámico** (real-time tracking · NO manual upload) | Hipótesis · post-Cohort 1 Mes 3 data confirms/contradicts |
| **F2** | **Carga de items a inventario** (automated · NOT manual) | Hipótesis · same |
| **F3** | **Carga y trackeo de información de proveedores** | Hipótesis · same |
| **F4** | **Costos automatizados** | Hipótesis · same |
| **F5** | **Agentes especializados en costos · manejo de inventario · manejo de proveedores** | Hipótesis · agency-as-SaaS framing extended |
| **F6** | **Agentes de cumplimiento fiscal/sanitario automáticos** | Hipótesis · alivia contable Pains heredados customer-profile §6.2 |
| **F7** | **Integración POS API** (CONTPAQi · Aspel · SoftRestaurant · PoloTab) | Gating del contable per cascade audit (customer 05 §10.8 silent veto · industry 06 §6.7) |

> **Honest framing:** Phase 2 capabilities son hipótesis subject to refinement post-Cohort 1 Mes 3+ behavioral data. Heredado user statement 2026-05-25: *"en base a los resultados de los experimentos de la fase 1, estos features de fase 2 pueden cambiar"*.

### 3.2 Layer 2 — Feature breakdown por capability (Phase 1 detail)

> Granular features que construyen Phase 1 capabilities · for engineering scope + feature prioritization (`02-features-y-scope/`). Heredado user draft 2026-05-25 adapted.

#### 3.2.1 Estandarización (E2) — 5 sub-features

| Sub-feature | Detail |
|---|---|
| **Clasificación** | Taxonomía base de items · catálogos · familias |
| **Catálogos** | Catálogos maestros de insumos · recetas · proveedores |
| **Alineamiento** | Mapping entre catálogos · unidades equivalencias · normalization base |
| **Estructura** | Hierarchical organization de data (sucursal → área → categoría → item) |
| **Normalización** | Data cleansing · deduplication · format consistency |

#### 3.2.2 Estructuración de sucursales (E3)

| Sub-feature | Detail |
|---|---|
| **Visual diagram de sucursales** | UI que muestra estructura jerárquica de sucursales · pertenencia · datos iniciales |
| **Datos iniciales por sucursal** | Captura básica: nombre · dirección · datos fiscales · tipo de operación |

#### 3.2.3 WhatsApp Agency interface (E4)

| Sub-feature Phase 1 | Detail |
|---|---|
| **Read access — query agents** | Operador/gerente/chef consultan info via WhatsApp · recetas · inventario · procesos |
| **Selección de agente especialista** | UI WhatsApp permite elegir agente para conversation · routing |
| **Optional upload onboarding** | Operador puede subir recetario · inventario · datos iniciales via WhatsApp si lo desea (alternativa a web/app upload) |
| **Permisos read-only post-onboarding** | Después de onboarding completado · WhatsApp es primarily read access (write upload limitado · most production data entry via web/app) |

#### 3.2.4 Manual Operativo (E1)

> **Permission model:** sección visible para TODOS los users (dueño · gerente · chef · contable · cocineros · empleados) · **modo lectura de base de datos** · write access granular controlled separately.

| Sub-feature Phase 1 | Detail |
|---|---|
| **KPIs** | Indicadores operativos básicos · single source of truth |
| **Dashboard ejecutivo basic** | Vista resumen para dueño · NOT full dashboard inicial (eso es N1 Phase 1.5) |
| **Procesos internos** | Read access a procesos documentados desde mapa de procesos |
| **Organigrama de trabajo** | Read access a roles + permisos (job descriptions full = N4 Phase 1.5) |
| **Estandarización de negocio** | Read access a catálogos · clasificación · normalización |
| **Visualización basic** | Views básicas · NOT advanced visualization (eso es N2 Phase 1.5) |

#### 3.2.5 Mapa de procesos internos (H2)

| Sub-feature Phase 1 | Detail |
|---|---|
| **Diagrama de flujo basic** | Operador diseña sus procesos visualmente · UI flowchart designer |
| **Procesos categorización** | Preparación de alimentos · Servicio al cliente · Inventarios |

#### 3.2.6 Organigrama de personal (H1)

| Sub-feature Phase 1 | Detail |
|---|---|
| **Definición de roles y permisos** | Roles canonical + permission matrix · foundational para Manual Operativo permission model |

#### 3.2.7 Modos de subir archivos (E5)

| Sub-feature | Detail |
|---|---|
| **Modo 1: CSV/Excel/PDF batch** | Upload archivos batch · validation · import to Zenet |
| **Modo 2: Captura manual** | Web/app form-based entry para data items |
| **Modo 3: Foto OCR** | Tomar foto de factura · Zenet OCR + extract + reconcile |

#### 3.2.8 High-touch onboarding founder-led (E6)

| Sub-feature | Detail |
|---|---|
| **Levantamiento operativo on-site** | Visita Alan al restaurant · observación procesos · conversation con dueño + gerente + chef |
| **Setup inicial 3 modos de upload** | Configuración técnica de los 3 modos · sample data baseline |
| **Configuración WhatsApp agency inicial** | Pairing con WhatsApp Business · agente routing setup |
| **Capacitación inicial al equipo** | Cómo usar WhatsApp interface · cómo cargar data · cómo consultar Manual Operativo |
| **Llamadas quincenales 90 días** | 30 min cada 2 semanas · feedback loop · resolución fricciones |

### 3.3 Permission model — load-bearing product decision

`[Validado user clarification 2026-05-25]`

**Universal read access:** Manual Operativo es **visible para todos los users** (dueño · gerente · chef · contable · cocineros · empleados) · modo lectura de base de datos.

**Granular write access:** controlled per role · NOT universal:
- Dueño: full write access (recetas · inventario · procesos · empleados)
- Gerente: write access a operación diaria de su sucursal (NOT cross-sucursal data)
- Chef: write access a recetario + estándares culinarios
- Contable: read access amplio (NOT write · escribe en su propio sistema de contabilidad externo)
- Cocineros: read access recetario · NO write
- Empleados: read access Manual Operativo + procesos relevantes a su role · NO write

**Implication:** single source of truth Phase 1 · todos ven misma data · evita fragmentation. Permission granularity Phase 1.5+ (cuando audit trail + LFPDPPP 2025 compliance se vuelven requirement).

### 3.4 WhatsApp Agency capabilities matrix — Phase 1 vs Phase 2

| Capability WhatsApp | Phase 1 | Phase 2 |
|---|---|---|
| Read access — query agents | ✅ Ship | ✅ Mature |
| Selección agente especialista | ✅ Ship | ✅ Mature |
| Optional upload onboarding (recetario · inventario · datos iniciales) | ✅ Ship | ✅ Mature |
| Upload facturas operativas vía foto | 🟡 Limited (manual upload also OK via web/app Modo 3) | ✅ Full WhatsApp-first |
| Full operational write access (real-time data entry · approvals · etc.) | ❌ Not Phase 1 (web/app primary) | ✅ Full WhatsApp-first operational interface |
| Real-time alerts + sugerencias | ❌ Phase 1.5 (N2) | ✅ Phase 2 (con inventario dinámico + costos automatizados) |
| Variance detection alerts | ❌ Phase 2 (F4-F5) | ✅ Phase 2 |
| Cumplimiento fiscal alerts | ❌ Phase 2 (F6) | ✅ Phase 2 |

**Critical messaging clarification:** Phase 1 WhatsApp es **read + optional onboarding upload** · Phase 2 WhatsApp es **full operational interface** (uso #3 completo). Phase 1 NO over-promises Phase 2 capabilities.

---

## 4. Pain Relievers — mapped per stakeholder

> Estructura parallel a customer-profile.md §3-§6 · Pain Relievers ranked essential → nice-to-have within each stakeholder. Cada PR mapped explicitly a Pain # de customer-profile.

### 4.1 Dueño-operador — Pain Relievers (most depth · primary)

#### 4.1.1 Essential Pain Relievers (TIER 1 · ship Phase 1)

| # CP Pain | Pain Reliever | Capability(es) que entregan | Phase | Severity covered |
|---|---|---|---|---|
| Pain #1 — Caos cuando él no está | **WhatsApp agency 24/7 + Manual Operativo modo lectura universal** entregan info real-time al equipo cuando dueño no está · operador puede revisar status via WhatsApp · equipo opera con same source of truth | E1 + E4 | Phase 1 | ALTA — covered |
| Pain #2 — Dependence on key people | **Estandarización + Organigrama de personal + Manual Operativo** capturan knowledge en Zenet (NO en cabezas) · roles y procesos documented · recetario explícito | E2 + H1 + E1 | Phase 1 | ALTA — covered |
| Pain #3 — Cuaderno mental no escala | **Manual Operativo + Estructuración de sucursales + Estandarización** extienden el sistema mental del operador a otras sucursales · *"Zenet extiende tu cuaderno"* messaging core (heredado posicionamiento v1.4 §5 TRUE incumbent reframe) | E1 + E3 + E2 | Phase 1 | ALTA — covered |
| Pain #6 — Data fragmentada entre POS · WhatsApp · papel · cabeza | **3 modos de upload + Manual Operativo single source of truth** consolidan data en Zenet · NOT 5 herramientas desconectadas | E5 + E1 | Phase 1 | MEDIA — covered |
| Pain #7 — Chef + manager turnover destruye learning | **Estandarización + Organigrama + Mapa de procesos basic** capturan learning en sistema (NO en empleados) · cuando alguien se va, conocimiento se queda | E2 + H1 + H2 | Phase 1 | MEDIA — covered |

#### 4.1.2 High value Pain Relievers (TIER 2A · ship Phase 1)

| # CP Pain | Pain Reliever | Capability(es) | Phase |
|---|---|---|---|
| Pain #4 — Margin pressure crónica | **Phase 1 partial coverage** — Manual Operativo + KPIs basic dan visibility · NOT full variance detection todavía (eso es Phase 2 F4) | E1 + E2 | Phase 1 (limited) |
| Pain #5 — Compliance SAT 2026 anxiety | **Phase 1 partial coverage** — Estandarización + 3 modos upload preparan data foundation · NOT full CFDI reconciliation todavía (eso es Phase 2 F6 + F7) | E2 + E5 | Phase 1 (limited) |

#### 4.1.3 Nice-to-have Pain Relievers (TIER 2B · Phase 1.5)

| # CP Pain | Pain Reliever future | Capability(es) |
|---|---|---|
| Pain #1 reinforcement | Dashboard inicial con Panorama del negocio · visibility holistica · alertas proactivas | N1 + N2 |
| Pain #4 progress | Manual Operativo extended (alertas y sugerencias · actualizaciones) | N2 |

#### 4.1.4 Future-must-have Pain Relievers (TIER 3 · Phase 2)

| # CP Pain | Pain Reliever future | Capability(es) |
|---|---|---|
| Pain #4 full coverage | **Inventario dinámico + costos automatizados + agentes especializados** entregan variance detection real-time · root cause analysis · margin defense data-driven | F1 + F4 + F5 |
| Pain #5 full coverage | **Agentes cumplimiento fiscal + POS API integration** entregan CFDI reconciliation automated · audit defense posture data-driven | F6 + F7 |

### 4.2 Gerente de sucursal — Pain Relievers (secondary)

#### 4.2.1 Essential Pain Relievers (Phase 1)

| # CP Pain (§4.3) | Pain Reliever | Capability(es) |
|---|---|---|
| Pain #1 — Decisiones overload cuando dueño no está | **WhatsApp agency** assists con queries · Manual Operativo provides info para decisions · gerente menos isolated | E4 + E1 |
| Pain #2 — Data fragmentada entre turnos | **Manual Operativo + WhatsApp agency** dan cross-turn data continuity · single source of truth · handoff sin information loss | E1 + E4 |
| Pain #4 — Recurring manual tasks consumen coordination time | **3 modos de upload + Estandarización** facilitan tasks repetitivos · less manual data entry overhead | E5 + E2 |

#### 4.2.2 High value Pain Relievers (Phase 1)

| # CP Pain | Pain Reliever | Capability(es) |
|---|---|---|
| Pain #3 — Empleados nuevos productividad slow | **Organigrama + Manual Operativo + Estandarización** dan onboarding asistido · NOT just *"watch and learn"* | H1 + E1 + E2 |

#### 4.2.3 Nice-to-have Pain Relievers (Phase 1.5)

| # CP Pain | Pain Reliever future | Capability(es) |
|---|---|---|
| Pain #5 — Firefighting mode 80% default | **Manual Operativo extended (alertas y sugerencias) + Dashboard inicial** dan proactive insights · less reactive | N1 + N2 |

#### 4.2.4 Future-must-have Pain Relievers (Phase 2)

| # CP Pain | Pain Reliever future | Capability(es) |
|---|---|---|
| Pain #4 full coverage | **Inventario dinámico** automatiza tracking · gerente no maneja manual count cycles | F1 |

### 4.3 Chef ejecutivo — Pain Relievers (secondary)

#### 4.3.1 Essential Pain Relievers (Phase 1)

| # CP Pain (§5.3) | Pain Reliever | Capability(es) |
|---|---|---|
| Pain #1 — Recetario en cabeza vulnerability | **Estandarización (catálogos · recetario) + WhatsApp agency (recetas consultables) + Manual Operativo (recetario read access)** capturan recetario en Zenet · chef menos vulnerable · restaurant menos vulnerable | E2 + E4 + E1 |
| Pain #2 — Empleados nuevos no replican calidad | **Estandarización (recetario detallado) + WhatsApp agency (cocineros consultan recetas)** dan recetario consistent · less variation entre cocineros | E2 + E4 |

#### 4.3.2 High value Pain Relievers (Phase 1)

| # CP Pain | Pain Reliever | Capability(es) |
|---|---|---|
| Pain #4 — Dueño cuestiona costing sin contexto culinario | **Manual Operativo (KPIs + costos básicos) + Estandarización** dan data backing chef decisions · chef defends creative choices con números | E1 + E2 |
| Pain #5 — Creative time consumed by logistics | **3 modos de upload + Manual Operativo + Organigrama** reducen logistics overhead · chef recovers creative time | E5 + E1 + H1 |

#### 4.3.3 Future-must-have Pain Relievers (Phase 2)

| # CP Pain | Pain Reliever future | Capability(es) |
|---|---|---|
| Pain #3 — Merma variable sin root cause analysis | **Inventario dinámico + costos automatizados + agente especializado en costos** dan variance detection · root cause analysis específico | F1 + F4 + F5 |

### 4.4 Contable — Pain Relievers (secondary)

#### 4.4.1 Phase 1 Pain Relievers (limited)

| Pain (§6.2 CP) | Pain Reliever Phase 1 | Capability(es) |
|---|---|---|
| CFDI reconciliation manual 25-35% workload | **3 modos de upload (CSV/Excel exports compatibles CONTPAQi/Aspel manual import)** · contable importa data limpia · NOT API integration todavía | E5 |
| Audit defense preparation | **Estandarización + Manual Operativo** dan data foundation cleaner · partial coverage Phase 1 | E2 + E1 |

#### 4.4.2 Phase 2 Pain Relievers (full coverage)

| Pain | Pain Reliever Phase 2 | Capability(es) |
|---|---|---|
| CFDI reconciliation full coverage | **Integración POS API CONTPAQi/Aspel native** elimina manual workflow · automated import + reconciliation | F7 |
| Propinas treatment unresolved | **Agentes cumplimiento fiscal + Addenda PROPINAS support** automatizan compliance gray zone | F6 |
| LFPDPPP 2025 compliance burden | **Zenet compliance documentation provided** + audit logs · alivia despacho liability | (Phase 2 features) |
| Audit defense stress | **Agentes cumplimiento + variance detection** dan audit-ready posture data-driven | F4 + F5 + F6 |

**Honest framing contable Phase 1:** Pain Relievers limited · most contable Pain coverage es Phase 2 work. Phase 1 ofrece foundation (data limpia · 3 modos upload) pero NOT automated reconciliation. Sales motion con contable Phase 1 debe ser honest: *"Phase 1 simplifica tu workflow vía data cleaner · Phase 2 lo automatiza vía CONTPAQi integration"*.

---

## 5. Gain Creators — mapped per stakeholder

> Estructura parallel a customer-profile.md Gains · Gain Creators ranked must-have → delighter (Kano categories). 4 niveles VPD per stakeholder.

### 5.1 Dueño-operador — Gain Creators

#### Must-have Gain Creators (Phase 1)

| Gain (§3.4 CP) | Gain Creator | Capability(es) |
|---|---|---|
| Tiempo recuperado | **WhatsApp agency 24/7 + Manual Operativo + 3 modos upload** liberan tiempo de coordination · target 20+ hrs/mes recuperadas | E1 + E4 + E5 |
| Data confiable | **Estandarización + Manual Operativo single source of truth** dan data foundation cleaner que cuaderno + Excel + WhatsApp | E2 + E1 |
| Operación functional sin presencia constante | **Manual Operativo modo lectura universal + WhatsApp agency** permiten equipo opere con information real-time sin dueño físicamente presente | E1 + E4 |

#### Expected Gain Creators (Phase 1)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| ROI mensurable | **Manual Operativo KPIs + Estandarización** dan números trackables (tiempo · data quality · process compliance) | E1 + E2 |
| Soporte responsive | **High-touch onboarding founder-led + WhatsApp directo founder** durante 90 días | E6 + E4 |
| Respeto del equipo hacia sistema | **WhatsApp interface natural + Manual Operativo accesible** facilitan adoption sin resistance | E4 + E1 |
| Setup que termina en 90 días o menos | **High-touch onboarding founder-led 90 días** es committed timeline | E6 |

#### Desired Gain Creators (Phase 1 + Phase 2 progression)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Escalamiento ordenado (Phase 1 partial) | **Estructuración de sucursales + Estandarización + Manual Operativo** permiten siguiente sucursal abrir con framework replicable | E2 + E3 + E1 |
| Margen mejorado mensurable (Phase 2 full) | **Phase 2 inventario dinámico + costos automatizados + agente especializado** entregan margin defense data-driven | F1 + F4 + F5 |
| Status profesional industria local | **Manual Operativo como artefacto profesional + Estandarización demostrable** elevan profile entre peers operadores | E1 + E2 |

#### Unexpected Gain Creators (delighters · Phase 1 + futuras)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Founder community (Phase 1 immediate) | **High-touch onboarding founder-led + Cohort 1 design partner community** | E6 |
| Ser caso de éxito local (Phase 1 immediate) | **Cohort 1 = Socio Fundador status permanent · founder community access** | E6 |
| Founder access (Phase 1 immediate) | **WhatsApp directo con Alan durante onboarding + perpetual Socio Fundador access** | E6 + E4 |
| Pre-emptive insights (Phase 1.5 + Phase 2) | **Manual Operativo extended alertas y sugerencias (Phase 1.5) + agentes especializados (Phase 2)** anticipan issues antes de materializarse | N2 + F5 |

### 5.2 Gerente de sucursal — Gain Creators (focused)

#### Must-have Gain Creators (Phase 1)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Herramienta que respeta su criterio | **Mapa de procesos diseñado por gerente + Estandarización adapted** · sistema aprende su workflow, NOT impose external | H2 + E2 |
| Productivity neto positivo from day 1 | **WhatsApp interface natural + 3 modos upload flexibles** · tiempo invertido <tiempo liberado | E4 + E5 |
| Authority preservation | **Manual Operativo + WhatsApp agency** son tools (NOT replacements) · gerente sigue siendo decision-maker | E1 + E4 |

#### Expected Gain Creators (Phase 1)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Less repetitive tasks | **3 modos upload + Estandarización** reducen manual data entry | E5 + E2 |
| Data cross-turn continuity | **Manual Operativo + WhatsApp agency** dan visibility cross-turn | E1 + E4 |
| Onboarding empleados nuevos facilitado | **Estandarización + Organigrama + Manual Operativo** asisten training · NOT just *"watch and learn"* | E2 + H1 + E1 |

#### Desired Gain Creators (Phase 1.5 + Phase 2)

| Gain | Gain Creator future | Capability(es) |
|---|---|---|
| Sentirme menos firefighter | **Manual Operativo extended (alertas y sugerencias) + Dashboard inicial** Phase 1.5 | N1 + N2 |
| Authority real tangible | Implicit en Phase 1 + reinforced Phase 2 con dashboards executive views | (cross-cutting) |

#### Unexpected Gain Creators (delighters)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Career growth visible | **Manual Operativo como tangible deliverable + WhatsApp agency mastery** sirven como signal profesional industry-wide | E1 + E4 |

### 5.3 Chef ejecutivo — Gain Creators (focused)

#### Must-have Gain Creators (Phase 1)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Sistema que respeta identity culinaria | **Estandarización (chef-driven recetario) + WhatsApp agency (chef captures vs sistema imposes)** | E2 + E4 |
| Recetario seguro fuera de su cabeza | **Estandarización (catálogos + recetario detallado) + Manual Operativo (read access)** | E2 + E1 |
| Training nuevos empleados facilitado | **Estandarización + WhatsApp agency (cocineros consultan recetas)** | E2 + E4 |

#### Expected Gain Creators (Phase 1)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Criterio amplificado, NOT replaced | **Estandarización captures chef's standards · WhatsApp agency executes them** · chef remains creative authority | E2 + E4 |
| Less repetitive training shoulder-to-shoulder | **WhatsApp agency consultable by cocineros + Manual Operativo recetario** liberan chef teaching time | E4 + E1 |
| Data backing creative decisions | **Manual Operativo KPIs (Phase 1 basic) + Estandarización (Phase 1)** | E1 + E2 |
| Setup integration con su workflow current | **High-touch onboarding founder-led + Estandarización adapted to chef's existing patterns** | E6 + E2 |

#### Desired Gain Creators (Phase 1.5 + Phase 2)

| Gain | Gain Creator future | Capability(es) |
|---|---|---|
| Independence creativa real | **Manual Operativo extended (Phase 1.5) + agentes especializados (Phase 2)** permiten chef desconnect sin caída quality | N2 + F5 |
| Margin defense data-driven | **Phase 2 costos automatizados + agente costos** | F4 + F5 |

#### Unexpected Gain Creators (delighters)

| Gain | Gain Creator | Capability(es) |
|---|---|---|
| Career mobility increased | **Recetario documented + portable + Manual Operativo trackable** = chef can present trajectory tangible | E2 + E1 |
| Less anxiety vulnerability | **Recetario seguro en Zenet (NOT solo memoria)** | E2 |

### 5.4 Contable — Gain Creators (focused · honest Phase 1 limitation)

#### Phase 1 Gain Creators (limited)

| Gain | Gain Creator Phase 1 | Capability(es) |
|---|---|---|
| Less reconciliation work (partial Phase 1) | **3 modos upload (CSV exports compatible CONTPAQi/Aspel manual import)** · data cleaner que llega al despacho | E5 |
| Audit defense posture (foundation Phase 1) | **Estandarización + Manual Operativo** dan data foundation cleaner | E2 + E1 |

#### Phase 2 Gain Creators (full)

| Gain | Gain Creator Phase 2 | Capability(es) |
|---|---|---|
| CONTPAQi/Aspel native integration | **F7 POS API integration** elimina manual reconciliation | F7 |
| AI augmentation framing (NOT replacement) | **F5 Agentes especializados** liberan tiempo despacho para strategic advisory | F5 |
| Less stress audit | **F4 + F5 + F6** dan automated reconciliation + audit-ready posture | F4 + F5 + F6 |
| Aliado estratégico identity-aspirational (V-032 VoC) | **High-touch onboarding founder-led + Phase 2 agency framing** position contable como strategic partner | E6 + F5 |

---

## 6. Anti-products — what Zenet explicitly does NOT do

Heredado posicionamiento v1.4 §6 + extended:

- **NO POS / transactional layer** — Zenet NO procesa transacciones de venta. No reemplaza Toast · Square · Clover · SoftRestaurant · PoloTab en su capa transaccional.
- **NO accounting software** — Zenet NO reemplaza CONTPAQi/Aspel del contable. Zenet entrega data limpia a ese stack · NOT lo suplanta.
- **NO CRM customer-facing** — Zenet NO maneja relación con comensales. No reservations · no loyalty programs · no email marketing a clientes finales.
- **NO marketing automation** — Zenet NO hace campañas marketing · NOT SEO · NOT social posting · NOT paid ads.
- **NO delivery platform integration Phase 1** — Rappi · UberEats · DiDi integration NOT scope Phase 1 (possible Phase 2+).
- **NO HR / payroll** — Zenet NO maneja IMSS · INFONAVIT · nómina · empleados como employee records sistema. Organigrama Zenet es **operational roles** · NOT HR records.
- **NO recipe generation AI** — Zenet NO genera recetas · captura las del chef · preserves identity. Chef remains creative authority absolute.
- **NO replaces employees** — augmentation always · violation valor #1 Zenet si replace. Customer-profile §3.2 anti-job dueño explicit.
- **NO PAC certification** — Zenet NO timbra CFDI. Trabajamos con tu PAC actual (Solución Factible · SW · cualquier PAC autorizado).
- **NO ERP enterprise** — Zenet NO es para chains >10 sucursales. Necesitan Oracle Simphony · SAP · etc.
- **NO asistente AI 24/7 individual** — Zenet ES **agencia de agentes especialistas** (per posicionamiento §2 categoría) · NOT chatbot único · NOT asistente personal. La distinción es categórica.
- **NO certificador (Distintivo H · NOM-251)** — Zenet facilita evidencia · NOT certifica · NOT es UV.
- **NO asesor legal · fiscal** — Zenet facilita data + workflow · NOT reemplaza despacho fiscal · NOT reemplaza abogado.

---

## 7. Phase 1 vs Phase 1.5 vs Phase 2 distinction matrix

> Honest framing crítico · NO over-promise · NO under-promise.

### 7.1 Matrix completa capabilities × phases

| Capability | Phase 1 (Q3 2026) | Phase 1.5 (Q4 2026 / Q1 2027) | Phase 2 (Q3-Q4 2027) |
|---|---|---|---|
| **Manual Operativo vivo** | ✅ Basic (KPIs + Dashboard ejecutivo + Procesos + Organigrama + Estandarización + Visualización basic) | + Extended (Actualizaciones · Alertas y sugerencias · Visualización avanzada) | + Full integration con dashboards Phase 2 features |
| **Estandarización** | ✅ Full 5 sub-features (Clasificación · Catálogos · Alineamiento · Estructura · Normalización) | (mature) | + Costos automatizados (F4) integrated |
| **Estructuración de sucursales** | ✅ Visual diagram + datos iniciales | (mature) | + multi-sucursal real-time data (F1 integrated) |
| **WhatsApp Agency** | ✅ Read + optional upload onboarding | (mature) | ✅ Full operational interface (write + alerts + variance + cumplimiento) |
| **Modos de upload (3 modos)** | ✅ All 3 (CSV · manual · foto OCR) | (mature) | Reduced reliance (POS API integration F7 reduces manual upload need) |
| **High-touch onboarding founder-led** | ✅ 90 días INCLUIDO | Scale-down (founder bandwidth limit) · transition a Head of CS post-Series Seed | (mature) |
| **Organigrama de personal** | ✅ Basic (roles + permisos) | + Job descriptions completas | + Training portal integration |
| **Mapa de procesos internos** | ✅ Basic (diagrama de flujo + categorización: Preparación · Servicio al cliente · Inventarios) | + Detailed (chat agente especializado + descripción detallada) | + Variance detection on processes |
| **Dashboard inicial** | ❌ NOT Phase 1 | ✅ Phase 1.5 ship (Panorama negocio · Onboarding Status · Sugerencias) | + Phase 2 features dashboards |
| **Training portal nuevos empleados** | ❌ NOT Phase 1 | 🟡 Phase 1.5 assessment pendiente | (mature if shipped Phase 1.5) |
| **Inventario dinámico (real-time)** | ❌ Manual upload only Phase 1 | ❌ NOT Phase 1.5 | ✅ Phase 2 ship (F1) |
| **Costos automatizados + variance detection** | ❌ Phase 1 (basic KPIs only) | ❌ NOT Phase 1.5 | ✅ Phase 2 ship (F4) |
| **Agentes especializados (costos · inventario · proveedores)** | ❌ NOT Phase 1 | ❌ NOT Phase 1.5 | ✅ Phase 2 ship (F5) |
| **Agentes cumplimiento fiscal/sanitario** | ❌ NOT Phase 1 | ❌ NOT Phase 1.5 | ✅ Phase 2 ship (F6) |
| **POS API integration (CONTPAQi · Aspel · SoftRestaurant · PoloTab)** | ❌ Manual upload Phase 1 | ❌ NOT Phase 1.5 | ✅ Phase 2 ship (F7) — gating del contable |

### 7.2 Sales motion implications

**Phase 1 honest framing cliente:**

- *"Phase 1 entrega: Manual Operativo vivo · Estandarización completa · WhatsApp agency consultable · 3 modos de cargar tu data · onboarding personal del founder 90 días"*
- *"Phase 1 NO entrega todavía: inventario en tiempo real · costos automatizados · integración API con CONTPAQi · alertas predictivas"*
- *"Phase 2 (Q3-Q4 2027) entrega: inventario dinámico · costos automatizados · agentes especializados · integración POS · cumplimiento fiscal automatizado"*

**Anti-pattern (do NOT do):**
- ❌ Vender Phase 2 capabilities como if available Phase 1 (destruye trust post-onboarding)
- ❌ Vender Phase 1 como *"versión beta de Phase 2"* (undervalues Phase 1 standalone value)

**Correct framing:** Phase 1 es **complete product** standalone para sus capabilities scope · NOT beta de Phase 2.

---

## 8. Hipótesis abiertas + validation triggers

> 10 hipótesis load-bearing del Value Map para validar con Cohort 1 Mes 3+ data.

### H-01 — Phase 1 capabilities scope completo es ship-able en 2-3 meses

**Hipótesis:** TIER 1 + TIER 2A capabilities (Manual Operativo basic · Estandarización 5 sub · Estructuración sucursales · WhatsApp read+upload · 3 modos upload · high-touch onboarding · Organigrama basic · Mapa procesos basic) son ship-able en 2-3 meses por dev team.

**Validation trigger:** dev team confirms timeline pre-Cohort 1 kickoff (Q3 2026). Si timeline slips · Phase 1 scope reduce (mover capabilities a Phase 1.5).

### H-02 — WhatsApp Agency read + optional upload es adoption gate

**Hipótesis:** 4+ de 5 DPs adoptan WhatsApp Agency interface ≥3 days/week durante 90 días gratis.

**Validation trigger:** Mes 1-3 DP usage metrics. <3 days/week sostenido = adoption fail · re-evaluate UX o positioning.

### H-03 — Manual Operativo modo lectura universal es perceived value

**Hipótesis:** DPs reportan Manual Operativo como #1 valued capability en Mes 3 feedback (vs WhatsApp · Estandarización · Mapa procesos).

**Validation trigger:** Mes 3 DP survey. Si <40% rank Manual Operativo top-3 · capability messaging needs reframe.

### H-04 — Estandarización 5 sub-features es operationally adopted

**Hipótesis:** DPs adoptan ≥4 de 5 sub-features (Clasificación · Catálogos · Alineamiento · Estructura · Normalización) durante 90 días.

**Validation trigger:** Mes 3 usage data. Si sub-features adopted <3/5 promedio · simplify Phase 1 scope o defer sub-features.

### H-05 — Phase 1 Pain Reliever coverage suficiente para conversion (sin Phase 2 features)

**Hipótesis:** ≥40% de DPs convierten a continuación subscripción Mes 3 con Phase 1 alone (sin esperar Phase 2 features).

**Validation trigger:** Mes 3 conversion rate. <40% = Phase 1 standalone value insufficient · re-evaluate launch readiness vs Phase 1.5 acceleration.

### H-06 — Chef adopts recetario consultable vía WhatsApp (sin entrar a flowchart designer)

**Hipótesis:** chef en DPs adopts recetario consultable vía WhatsApp ≥5 queries/week · NOT primarily flowchart designer.

**Validation trigger:** Mes 1-3 chef-specific usage data. Si chef NO adopta WhatsApp recetario · adoption gate sales motion broken (chef adopta deal · cf. customer 05 §3 Sesión 2).

### H-07 — Contable Phase 1 limited Pain Reliever coverage es OK durante 90 días gratis

**Hipótesis:** contable NO bloquea continuation post-90 días por Phase 1 limited contable coverage IF positioned honestly como *"Phase 2 trae CONTPAQi integration"*.

**Validation trigger:** Stage F engagement con DP contables Mes 1-2. Si silent veto materializes (heredado customer 05 §10.8) sistemáticamente · Phase 1 messaging contable necesita refresh OR Phase 2 acceleration.

### H-08 — WhatsApp Agency optional upload (onboarding data) es usado

**Hipótesis:** ≥30% de DPs usan WhatsApp para upload onboarding data (recetario · inventario · etc.) vs 100% via web/app.

**Validation trigger:** onboarding upload channel distribution data. Si <10% via WhatsApp · capability over-built · simplify.

### H-09 — Phase 1.5 features (dashboard inicial · alertas) emerge como retention drivers

**Hipótesis:** Mes 4-6 DP feedback identifies dashboard inicial + alertas y sugerencias como top 3 requested features.

**Validation trigger:** Mes 4-6 DP feature request analysis. Si dashboard NOT top requested · re-prioritize Phase 1.5 scope.

### H-10 — Phase 2 features (inventario dinámico · costos automatizados · agentes especializados · CONTPAQi integration) son correctly prioritized

**Hipótesis:** Mes 6+ DP feedback validates Phase 2 prioritization (per user draft 2026-05-25) · NOT requests substantial reshuffling.

**Validation trigger:** Mes 6 strategic review con Cohort 1. User acknowledges: *"en base a los resultados de los experimentos de la fase 1, estos features de fase 2 pueden cambiar"*. Phase 2 list es hipótesis · NOT commitment.

### Triggers de update v0.1 → v0.2 (minor)

- Cohort 1 Mes 1-2 early signals
- Cross-doc sync (e.g., customer-profile.md updates)
- Phase 1 scope adjustment (dev team feedback)

### Triggers de update v0.1 → v1.0 (significant)

- Cohort 1 Mes 3 data validates o contradice 3+ hypotheses
- Major Phase 1.5 OR Phase 2 reprioritization
- Phase 1 capability removed o added significativamente

---

## 9. Cross-references al research backbone + upstream/downstream docs

### 9.1 Inputs (upstream)

| Source | Cómo se usa en value-map.md |
|---|---|
| **`01-propuesta-de-valor/00-customer-profile.md` v0.1.1** | **Input PRIMARY** · Pains de §3.3 · §4.3 · §5.3 · §6.2 → Pain Relievers de §4 value-map. Gains de §3.4 · §4.4 · §5.4 · §6.2 → Gain Creators de §5 value-map. Mapping explícito per Pain # / Gain level. |
| **Marco product-strategy v1.1** | Methodology (VPD primary · TIER framework Kano-inspired · Phase 1/1.5/2 stages) + multi-stakeholder framing §4.1 |
| **Posicionamiento v1.4** | 7 diferenciadores en clusters · anti-positions §6 · modelo comercial §7 |
| **Vocabulario v1.3** | Terminology consistency (capability descriptions cliente-friendly) |
| **Programa-design-partners v1.1** (cross-workspace) | Pricing model context (subscription-included onboarding) + Cohort 1 timeline |
| **User draft 2026-05-25** (input directo) | Two-layer structure adopted · feature list adapted · Phase 1/1.5/2 distinction · WhatsApp read+upload decision · permission model · essential → nice-to-have ranking |

### 9.2 Outputs (downstream)

| Destination doc | Cómo este doc alimenta downstream |
|---|---|
| **`02-fit-analysis.md` v0.1** (próximo doc) | Cruce CP↔VM con evidence labeling · validates alignment Pain ↔ Pain Reliever · Gain ↔ Gain Creator |
| **`03-vp-statement-compressed.md` v0.1** | VP statement 1-pager uses Layer 1 capabilities macro (NOT Layer 2 feature breakdown) · stakeholder-specific framing |
| **`02-features-y-scope/00-fase-1-mvp-scope.md` v0.1** | Layer 2 feature breakdown alimenta MVP scope detail |
| **`02-features-y-scope/02-feature-prioritization.md` v0.1** | TIER framework + essential ranking aplican aquí |
| **`04-go-to-market/02-sales-motion-three-session-demo.md` v0.1** | Pain Relievers per stakeholder → talking points per Sesión 1 (gerente) · Sesión 2 (chef) · Sesión 3 (dueño + contable parallel) |

### 9.3 Research backbone inputs

| Doc | Lo que aporta |
|---|---|
| Customer 02 JTBD v0.1.1 | Jobs framework + contable stakeholder added |
| Customer 03 pains v0.5 | Pains foundation + §2.5 contable pains added |
| Customer 05 buying process v0.7 | Buying committee + §10.8 silent veto + §10.9 inflection point |
| Customer 06 objeciones v0.5 | §3.7.5 contable objections + §3.7.6 silent veto |
| Customer 07 VoC v0.1.1 | Verbatim quotes + 11 vernacular terms |
| Industry 06 ecosistema v1.0.1 | CONTPAQi ecosystem context |
| Industry 08 regulatorio v1.0.1 | SAT 2026 + LFPDPPP context |
| Competitive 04 features v0.2.1 | CONTPAQi alliances landscape |

---

## 10. Estado del doc + notas finales

### 10.1 Estado del doc

- **Version:** 0.1
- **Research stage:** `discovery-pre-PMF`
- **Last updated:** 2026-05-25
- **Owner:** Alan Bahena
- **Status:** active · segundo doc del subfolder `01-propuesta-de-valor/`

### 10.2 Update triggers de este doc específico

- **v0.1 → v0.2 (minor):** scope adjustment Phase 1 (dev team feedback) · cross-doc sync · early Cohort 1 signals Mes 1-2
- **v0.1 → v1.0 (significant):** Cohort 1 Mes 3 data validates/contradicts 3+ hypotheses · major reprioritization Phase 1.5 o Phase 2

### 10.3 Próximo doc en sequence

`01-propuesta-de-valor/02-fit-analysis.md` v0.1 — Fit Analysis component del VPD canvas. Cruce CP↔VM con evidence labeling · valida alignment Pain ↔ Pain Reliever · Gain ↔ Gain Creator. Toma este doc + customer-profile.md v0.1.1 como inputs.

### 10.4 Cross-pointers load-bearing

- **Customer Profile** `00-customer-profile.md` v0.1.1 — input primary · Pains/Gains foundation
- **Marco product-strategy** v1.1 — methodology + TIER framework + Phase stages
- **Posicionamiento v1.4** — diferenciadores + anti-positions + modelo comercial
- **Vocabulario v1.3** — terminology consistency

### 10.5 Anti-scope explícito

| Información | Por qué NO va aquí | Dónde va |
|---|---|---|
| Fit Analysis cross CP↔VM con evidence | Downstream output separado | `02-fit-analysis.md` v0.1 |
| VP Statement compressed (1-pager) | Downstream output final | `03-vp-statement-compressed.md` v0.1 |
| Pricing tiers exact | Deferred (decisión post-Cohort 1) | `03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` |
| Sales scripts operacionales | Downstream operational | `04-go-to-market/02-sales-motion-three-session-demo.md` |
| Feature prioritization Kano formal | Downstream output separado | `02-features-y-scope/02-feature-prioritization.md` |
| Technical product specs (architecture · APIs) | Production repo scope | (out of scope) |
| Multi-segment variations exhaustive (gastropub · café · etc.) | Defer a v1.0 post-Cohort 1 | (this doc v1.0+) |

---

## Notas

- **Origen.** Doc derivado de outline aprobado 2026-05-25 + user draft Phase 1 features list 2026-05-25 + user Phase 2 features list 2026-05-25 + 3 decisiones load-bearing (WhatsApp read+upload Phase 1 · scope adjustments Phase 1→1.5/2 · essential→nice-to-have ranking principle).
- **Hypothesis-level disciplina.** Per marco §3, todo claim labeled · evidence vs hypothesis explícito · validation triggers documented en §8.
- **Two-layer structure.** Layer 1 (capabilities macro) alimenta VP statement compressed + landing copy · Layer 2 (feature breakdown) alimenta feature prioritization + roadmap planning. Separación previene confusion downstream.
- **Phase 1/1.5/2 honest framing.** Phase 1 NO over-promises Phase 2 · Phase 2 acknowledged como hipótesis subject to Cohort 1 learnings (per user statement 2026-05-25).
- **Documento vivo.** Update cadence per marco §8 — trimestral review + ad-hoc cuando Cohort 1 Mes 3+ data dispare insights.

### Changelog

- **v0.1 (2026-05-25).** Documento base inicial · 10 secciones · two-layer Products & Services structure (user draft 2026-05-25 adopted) · 4 mini-Value Maps stakeholder (dueño primary + gerente · chef · contable secondary) parallel a customer-profile.md v0.1.1 · Pain Relievers + Gain Creators ranked essential → nice-to-have · Phase 1 / 1.5 / 2 distinction matrix completa · WhatsApp Agency capabilities matrix con Phase 1 read+upload upgrade decisión · permission model documentado (universal read Manual Operativo + granular write) · Phase 2 features list explícito heredado user draft 2026-05-25 · 13 anti-products explícitos · 10 hipótesis abiertas con validation triggers Cohort 1 Mes 3+ data. Honest framing throughout — NO over-promise Phase 2 capabilities · NO under-promise Phase 1 standalone value.

---

*Last updated: 2026-05-25.*
*Next planned update: post Cohort 1 Sesión 1+2+3 discovery (any DP) · OR Cohort 1 Mes 3 data dispare insights · OR dev team Phase 1 scope adjustment · OR major Phase 2 reprioritization.*
