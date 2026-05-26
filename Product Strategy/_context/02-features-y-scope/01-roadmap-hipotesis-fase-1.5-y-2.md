---
name: Roadmap hipótesis Phase 1.5 + Phase 2 — Zenet trajectory framework
description: Roadmap hypothesis para Phase 1.5 (Q4 2026 / Q1 2027) + Phase 2 (Q3-Q4 2027) post-Phase 1 launch. Phase 1.5 priority ordering N1-N5 capabilities deferred from MVP. Phase 2 reframed sin POS API integration (research-validated structural barrier · partner gating + APIs legacy + no API pública). F5 agentes especializados elevated priority #1 · F6 cumplimiento vía CFDI/PAC direct · F8 partner channel strategy parallel track. Pricing transition framework conceptual (specifics defer to 03-oferta-y-pricing). LATAM expansion = Geographic Phase 5 + Series A (NOT product Phase 2). Hypothesis-level v0.1 subject to Cohort 1 Mes 3+ learnings.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-26
status: active
version: 0.1
owner: Alan Bahena
---

# Roadmap hipótesis Phase 1.5 + Phase 2 — Zenet trajectory

> Roadmap hypothesis para **Phase 1.5 + Phase 2 bridge** desde Phase 1 launch (Q3 2026) hasta Phase 2 ship (Q3-Q4 2027 estimated). **Hypothesis-level explícito** — NOT commitment fijo · subject to Cohort 1 Mes 3+ behavioral data + Phase 1 launch outcomes.
>
> **Reframe crítico post-research 2026-05-26:** POS API integration (originalmente F7 priority #1) removed de Phase 2 canonical · research-validated barriers (partner gating + APIs legacy + no API pública en POS amigables MX). F5 agentes especializados elevated priority #1 · F6 cumplimiento vía CFDI/PAC direct · partner channel strategy (F8) added as parallel business development track.
>
> **Decoupling explícito:** Product phases (Zenet capabilities) ≠ Geographic phases (TJ → BC → MX → LATAM). LATAM = Geographic Phase 5 + Series A capital · NOT product Phase 2 ship.

---

## Índice

1. Propósito del documento
2. Marco metodológico Phase 1.5 + Phase 2 hypothesis framework
3. Phase 1.5 + Phase 2 capabilities + priority ordering
4. Phase 1.5/2 architecture + Phase 1 prep requirements
5. Phase 1.5/2 timeline + gating criteria
6. Validation triggers + pivot scenarios
7. Cohort 2 design partner program + pricing transition framework
8. Investor narrative trajectory (product phases × geographic phases)
9. Partner channel strategy (parallel track)
10. Risk management Phase 1.5/2-specific
11. Cross-references al research backbone + upstream/downstream docs
12. Estado del doc + notas finales

---

## 1. Propósito del documento

Este doc provides **trajectory framework + decision-making framework** para el bridge entre Phase 1 launch (Q3 2026) y Phase 2 ship (Q3-Q4 2027). Cubre:

- **Phase 1.5 priority ordering** (N1-N5 capabilities deferred from MVP scope · ship Q4 2026 / Q1 2027 post-Cohort 1 Mes 3 data)
- **Phase 2 capabilities + priority order** (F1-F6 + F8 partner channel · F7 POS API REMOVED post-research)
- **Phase 1.5/2 architecture requirements** + Phase 1 prep needs
- **Timeline + gating criteria** + validation triggers + pivot scenarios
- **Cohort 2 design partner program** + pricing transition framework (specifics deferred to subfolder 03)
- **Investor narrative** correcting product/geographic phases conflation
- **Partner channel strategy** as parallel track (LIMAC + SYCA distribuidores · NOT technical feature)

**Lo que este doc NO hace:**

| Diferencia | This doc | Other docs |
|---|---|---|
| vs `value-map.md` §3.1.2 + §3.1.3 | Phase 1.5/2 priority ordering + trajectory framework + pivot scenarios | Capability enumeration descriptive |
| vs `00-fase-1-mvp-scope.md` §3.2 + §3.3 | Roadmap hypothesis + sequencing logic | Phase 1 launch scope decisions |
| vs `03-oferta-y-pricing/` (futuro) | Pricing transition framework conceptual | Specific pricing tiers + numbers |
| vs production repo | Strategic roadmap | Engineering implementation |

---

## 2. Marco metodológico Phase 1.5 + Phase 2 hypothesis framework

### 2.1 Hypothesis-level disciplina explícita

Phase 1.5 + Phase 2 capabilities son **hipótesis** · NOT shipped product · NOT committed roadmap:

- **Pre-Cohort 1 data:** priority basado en customer research + competitive analysis + posicionamiento + user strategic input
- **Post-Cohort 1 Mes 3+ data:** priority validated · refined · OR pivoted (per §6 pivot scenarios)

User statement 2026-05-25 explicit: *"en base a los resultados de los experimentos de la fase 1, estos features de fase 2 pueden cambiar"* — discipline preserved.

### 2.2 Phase 1.5 vs Phase 2 distinction

| Phase 1.5 (Q4 2026 / Q1 2027) | Phase 2 (Q3-Q4 2027) |
|---|---|
| **Capability extensions** of Phase 1 launch | **Architectural evolution** of Phase 1 |
| N1-N5 (dashboard · MO extended · MdP detailed · job descriptions · training portal) | F1-F6 + F8 (agentes · cumplimiento · inventory mgmt · costos · partner channel) |
| Ship post-Cohort 1 Mes 3 data signal | Ship post-Series Seed close + Cohort 2 design partner program |
| Incremental dev (3-6 meses) | Major dev (6-9 meses) |
| Same architecture · extended features | Architectural shift (agent layer maturity · CFDI integration · data pipeline improvements) |
| Same pricing Phase 1 | Pricing transition framework (specifics in subfolder 03) |

### 2.3 Phase 2 reframe post-research 2026-05-26

**Key strategic shift:**

Original Phase 2 plan (pre-research) assumed POS API integration (F7) como priority #1 · gating contable silent veto mitigation. Research-validated barriers:

| Barrier | Implication |
|---|---|
| **Partner gating** | POS vendors NO dan API access fuera de partner program · Zenet sin partnership formal NOT access |
| **APIs legacy + poor documentation** | Even con API access · integration cost masivo · maintenance burden · brittle |
| **POS amigables Zenet NO tienen API pública** | Target segment (operadores casual independientes usando PoloTab · Parrot · Fudo · Bistrosoft) NO ofrece path técnico |

**Strategic consequence:** F7 POS API integration **removed de Phase 2 canonical** · NOT just deferred. Phase 2 strategy reframed:

- **F5 Agentes especializados** elevated to priority #1 (works over Phase 1 data foundation · independent of POS API)
- **F6 Cumplimiento fiscal/sanitario via CFDI/PAC direct** (CFDI es fiscal source of truth · NOT POS · viable integration path via PAC providers)
- **F8 Partner channel strategy** (NEW) as parallel business development track (LIMAC + SYCA distribuidores · NOT technical feature)
- **F1-F4 reframed** to operate over improved manual data ingestion (NOT real-time POS pipeline)

### 2.4 Triggers que pueden pivot Phase 1.5/2 plan

- Cohort 1 Mes 3 data invalidates Phase 1.5 OR Phase 2 priority order
- Cohort 1 demands specific features urgently (acceleration trigger)
- Foreign vendor MX entry pre-Phase 2 launch (competitive defense priority shift)
- Series Seed funding insufficient for Phase 2 full scope (capital-constrained scope reduction)
- Major regulatory change (SAT enforcement intensification accelerates F6 priority)
- Partner channel opportunity opens (CONTPAQi partner program · Soft Restaurant API access via SYCA) — F7 reactivated as opportunistic Phase 3+
- Talent acquisition challenges (AI engineering + restaurant ops fluency intersection)

### 2.5 Refresh cadence

- **Quarterly review** post-Cohort 1 (Q4 2026 · Q1 2027 · Q2 2027 · Q3 2027)
- **Ad-hoc cuando** Cohort 1 signals materialize (Mes 3 + Mes 6 milestones)
- **Major reprioritization** trigger v0.1 → v1.0

---

## 3. Phase 1.5 + Phase 2 capabilities + priority ordering

### 3.1 Phase 1.5 capabilities (N1-N5) + priority ordering

**Phase 1.5 ship target:** Q4 2026 / Q1 2027 (3-6 meses post-Phase 1 launch · subject to Cohort 1 Mes 3 data validation)

**Priority ordering canonical (subject to Cohort 1 validation):**

| Priority | Capability | Cross-ref | Rationale |
|---|---|---|---|
| **1** | **N1 Dashboard inicial** (Panorama negocio · Onboarding Status · Sugerencias) | value-map.md §3.1.2 | Highest user-facing visibility · addresses gerente Pain #5 firefighting + dueño desired gain pre-emptive insights · validated demand likely Mes 3 DP feedback |
| **2** | **N2 Manual Operativo extended** (Actualizaciones · Alertas y sugerencias · Visualización avanzada) | value-map.md §3.1.2 | Direct extension of E1 Phase 1 · proactive alerts foundational para F4/F5 Phase 2 · pre-Phase 2 architecture prep |
| **3** | **N4 Organigrama job descriptions completas** | value-map.md §3.1.2 | Foundational para N5 training portal · enables better permission model granularity Phase 2 |
| **4** | **N5 Training portal nuevos empleados** | value-map.md §3.1.2 | Depends on N4 · addresses chef + gerente Pain "empleados nuevos no replican calidad" + Pain "empleados nuevos productividad slow" · retention driver Mes 6+ |
| **5** | **N3 Mapa procesos detailed** (chat con agente especializado · descripción detallada) | value-map.md §3.1.2 | Specialized feature · valuable pero NOT critical · last in Phase 1.5 sequence |

### 3.2 Phase 1.5 priority decision logic

- **N1 first** = highest user-facing visibility + addresses Strong fit gerente Pain · likely top Mes 3 DP request
- **N2 second** = foundational para Phase 2 alerts architecture · pre-Phase 2 prep + standalone value
- **N4 before N5** = job descriptions needed before training portal builds on top
- **N5 fourth** = retention driver Mes 6+ · gating Cohort 1 conversion sustainability
- **N3 last** = specialized · valuable pero acceptable defer if Phase 1.5 timeline pressure

### 3.3 Phase 2 capabilities (reframed post-research) + priority ordering

**Phase 2 ship target:** Q3-Q4 2027 (12-18 meses post-Phase 1 launch · subject to gating criteria §5.2)

**Phase 2 capabilities canonical (post-research reframe):**

| # | Capability | Cross-ref | Status post-research |
|---|---|---|---|
| **F5** | **Agentes especializados** (costos · manejo inventario · manejo proveedores) | value-map §3.1.3 F5 | ✅ **Elevated priority #1** · independent of POS API · works over Phase 1 data foundation + improved Phase 2 ingestion |
| **F6** | **Agentes cumplimiento fiscal/sanitario** vía CFDI/PAC direct | value-map §3.1.3 F6 (reframed) | 🔄 **Reframed** · CFDI/PAC integration (NOT POS API) · CFDI es fiscal source of truth · viable partnership con PAC providers |
| **F1** | **Inventory management reframed (periodic)** | value-map §3.1.3 F1 (reframed) | 🔄 **Reframed** · structured periodic inventory updates · NOT real-time pipeline (POS API removed) |
| **F2** | **Improved batch upload UX + WhatsApp automation** | value-map §3.1.3 F2 (reframed) | 🔄 **Reframed** · better data ingestion · NOT POS-driven |
| **F4** | **Costos automatizados** (variance detection over uploaded data) | value-map §3.1.3 F4 (reframed) | 🔄 **Reframed** · variance detection over uploaded data · less granular vs original real-time plan |
| **F3** | **Carga + trackeo proveedores** | value-map §3.1.3 F3 | ✅ **Preserved** · less dependent on POS API · manual + automated workflows |
| **F8** | **Partner channel strategy** (LIMAC · SYCA · distribuidores) | NEW · this doc §9 | ➕ **NEW added · parallel track** · NOT technical feature · business development |
| ~~**F7**~~ | ~~Integración POS API~~ | ~~value-map §3.1.3 F7~~ | ❌ **REMOVED from Phase 2 canonical** · research-validated barriers · defer to Phase 3+ opportunistic |

### 3.4 Phase 2 priority decision logic (post-research)

- **F5 first** = highest value · works over Phase 1 data foundation + Phase 1.5 N2 alerts · enables agency-as-SaaS framing full · NOT dependent on POS API · realistic given research findings
- **F6 second** = unlock contable Pain coverage + dueño Pain #5 SAT compliance · CFDI/PAC integration (NOT POS) viable path via PAC providers · partner with Solución Factible · SW · other certified PACs
- **F1 third** = foundational para F4 · structured periodic uploads · NOT real-time · realistic scope given no POS API
- **F2 fourth** = better data ingestion · enables F1/F4 quality · WhatsApp automation increments
- **F4 fifth** = variance detection over uploaded data · valuable for Pain #4 dueño margin defense · less granular but Phase 2 v1 acceptable
- **F3 sixth** = last in sequence · enables F5 agente proveedores · independent feature
- **F8 partner channel parallel** = business development track · runs Q4 2026 / Q1 2027 onwards · NOT technical Phase 2 scope · LIMAC + SYCA partnership conversations

### 3.5 Honest framing — what's NOT in Phase 2

**F7 POS API integration explicitly removed.** Honest framing:

- Phase 2 NO entrega integración nativa con SoftRestaurant · PoloTab · Parrot · Fudo · Bistrosoft · CONTPAQi · Aspel
- Phase 2 entrega: data ingestion improved (WhatsApp automation + batch UX) + agents especializados + cumplimiento via CFDI/PAC direct
- Partner channel strategy (F8) en paralelo · si distribuidores partnership materializes · F7 reactivated como opportunistic Phase 3+

**Sales motion implication (cuando Phase 2 ships):**

❌ NOT prometer: *"Zenet se integra con tu POS automáticamente"* (research-validated impossible MX SMB context)
✅ SÍ prometer: *"Zenet trabaja sobre tu POS actual via upload mejorado (WhatsApp + batch UX) + entrega agentes especialistas que automatizan tu workflow + cumplimiento fiscal automatizado vía CFDI/PAC"*

---

## 4. Phase 1.5/2 architecture + Phase 1 prep requirements

### 4.1 Architectural changes Phase 1.5/2 requires

| Component | Phase 1 architecture | Phase 1.5 enhancement | Phase 2 evolution |
|---|---|---|---|
| **Data ingestion** | Manual upload (3 modos · CSV · captura manual · foto OCR) | Same + WhatsApp upload optimization | F2 improved batch UX + WhatsApp automation (NOT POS API) |
| **Data processing** | Batch normalization (E2 Estandarización hub) | Same + alerts triggers (N2) | F1 inventory management periodic + F4 variance detection batch |
| **Agent layer** | Single agent routing (E4 WhatsApp Agency selección) | Same + extended agent capabilities (N2 sugerencias) | **F5 multi-agent orchestration** (especialistas coordination) |
| **Compliance integration** | LFPDPPP baseline | Same | **F6 CFDI/PAC direct integration** (NOT POS API) |
| **Write access** | Read primary + optional onboarding upload | Same + alerts response actions (N2) | F5 + WhatsApp write expansion |
| **Partner channel** | None | None | **F8 partner channel infrastructure** (NOT technical · business development) |

### 4.2 Phase 1 prep requirements (lo que Phase 1 debe enable para Phase 1.5/2)

**Anti-pattern crítico:** Phase 1 architectural debt that breaks Phase 1.5/2 expansion. Phase 1 dev decisions deben preservar optionality.

Specific Phase 1 prep requirements:

1. **Data foundation flexibility** — E2 Estandarización schema debe accommodate alerts triggers (Phase 1.5 N2) + periodic inventory updates (Phase 2 F1) + variance detection (Phase 2 F4) sin major refactor
2. **Agent architecture extensibility** — E4 WhatsApp Agency routing debe extend a multi-agent orchestration Phase 2 F5 (single agent Phase 1 → coordinated agents Phase 2)
3. **API-first design discipline (internal)** — Phase 1 capabilities deben exponer internal APIs que Phase 1.5/2 features consume (NOT monolithic UI-coupled code)
4. **CFDI/PAC integration foundation** — Phase 1 LFPDPPP compliance baseline debe accommodate F6 CFDI/PAC direct integration Phase 2 (data model preparation)
5. **Multi-tenant isolation rigor** — Phase 1 multi-tenant isolation debe sostener Phase 1.5 + Phase 2 scale (10 clientes Phase 1 → 30-50 clientes Phase 1.5+ → 100+ Phase 2)
6. **Permission model granularity** — Phase 1 universal read + granular write debe extend a Phase 1.5 N4 job descriptions + Phase 2 finer-grained controls (per-agent permissions · per-sucursal data access)
7. **WhatsApp Business API integration depth** — Phase 1 read + optional upload debe enable Phase 1.5 N2 alerts response + Phase 2 F5 multi-agent operational interface

### 4.3 Architecture decision authority

- **Product Strategy** (este doc): defines Phase 1.5/2 capability requirements + Phase 1 prep needs
- **Engineering** (production repo): implements architecture decisions · respects Phase 1 prep requirements documented here
- **Joint decisions**: major architectural tradeoffs Phase 1 vs Phase 1.5/2 optionality (escalate to founder)

---

## 5. Phase 1.5/2 timeline + gating criteria

### 5.1 Estimated timeline

| Milestone | Target | Subject to |
|---|---|---|
| Phase 1 launch | Q3 2026 | Dev team timeline + Cohort 1 design partner program kickoff |
| Cohort 1 Mes 3 data review | Dec 2026 / Jan 2027 | Phase 1 launch outcomes |
| **Phase 1.5 ship** | Q4 2026 / Q1 2027 | Cohort 1 Mes 3 data validates N1-N5 prioritization |
| Series Seed close target | Q1-Q2 2027 | Cohort 1 traction + Phase 1.5 momentum |
| **Phase 2 dev start** | Q2 2027 | Series Seed capital + Cohort 1 learnings integrated |
| Cohort 2 design partner program kickoff | Q3 2027 | Phase 2 dev progress + new DPs identified |
| **Phase 2 ship** | Q3-Q4 2027 | Cohort 2 validation + gating criteria §5.2 met |

### 5.2 Gating criteria Phase 2 launch readiness

Phase 2 launch requires **all 5 gating criteria met:**

1. **Phase 2 capabilities validated** con Cohort 2 design partners (5+ partners ≥30 días using Phase 2 capabilities)
2. **AI BoH funcional shipped:** F5 + F6 + F1 + F4 operational (full Phase 2 capability scope reframed)
3. **CFDI/PAC integration functional** (F6 · partnership con PAC certified providers established · NOT POS API)
4. **15-25 clientes pagados** (combinación de Phase 1 graduados + Phase 2 nuevos)
5. **Soporte estabilizado** con SLA documented (NOT solo founder-led · Head of CS team functional)

**Note critical:** gating criteria #3 reframed — was *"POS API integrations functional"* · now *"CFDI/PAC integration functional"*.

### 5.3 Trigger para Phase 1.5/2 timeline acceleration

- Cohort 1 Mes 3 data muestra urgent demand Phase 1.5 OR Phase 2 features (>3 DPs request)
- Foreign vendor MX entry signal (Toast/MarketMan/Apicbase MX hiring spree)
- Series Seed close faster than expected (capital availability earlier)
- Partner channel opportunity opens (LIMAC OR SYCA partnership formalized · enables F8 acceleration)

### 5.4 Trigger para Phase 1.5/2 timeline deceleration

- Cohort 1 Mes 3 data muestra Phase 1 standalone sufficient · NOT urgent Phase 1.5/2 demand
- Phase 1 stability issues (technical debt requires rework before Phase 1.5/2)
- Series Seed delay (capital constraint)
- Cohort 2 design partner recruitment difficulties

---

## 6. Validation triggers + pivot scenarios

### 6.1 Cohort 1 signals que CONFIRM Phase 1.5 prioritization

| Signal Cohort 1 | Confirms Phase 1.5 priority |
|---|---|
| ≥3 DPs request dashboard inicial Mes 3 | N1 priority #1 validated |
| ≥3 DPs request proactive alerts Mes 3-6 | N2 priority #2 validated |
| Chef DPs cite recetario consultable de N5 training portal Mes 6+ | N4 + N5 priority validated |
| Gerente DPs cite firefighting reduction necesity Mes 4-6 | N1 + N2 validated (Pain #5 gerente) |

### 6.2 Cohort 1 signals que CONFIRM Phase 2 prioritization (reframed)

| Signal Cohort 1 | Confirms Phase 2 priority |
|---|---|
| ≥3 DPs cite manual inventory tracking como pain Mes 3+ | F1 priority validated (periodic reframe) |
| ≥3 DPs cite margin defense lack de automation Mes 4-6 | F4 priority validated |
| Contable Stage F engagement reveals CFDI reconciliation pain dominant | F6 CFDI/PAC priority validated (NOT POS API) |
| Operator demands "más automatización" Mes 6+ | F5 agentes especializados priority validated |
| Distribuidor partnership conversation reveals receptivity (LIMAC · SYCA · etc.) | F8 partner channel priority validated |

### 6.3 Cohort 1 signals que CONTRADICT current plan

| Signal Cohort 1 | Contradicts plan |
|---|---|
| ≥3 DPs satisfied con Phase 1 standalone Mes 3+ · NO urgent demand más features | Reprioritize Phase 1.5 deceleration · Phase 2 timeline relaxed |
| Contable adoption Phase 1 limited NOT bloqueo conversion (silent veto NOT pattern) | F6 priority may be over-stated · less urgent |
| Manual upload (3 modos) sustained adoption sin friction Mes 6+ | F1/F2 priority lower · improved batch less urgent than assumed |
| Cohort 1 conversion rate >70% Phase 1 standalone | Phase 1 sufficient longer · Phase 1.5 + Phase 2 timeline relaxed |
| Partner channel opportunities NOT materialize (LIMAC · SYCA decline) | F8 reframed · alternative paths needed |

### 6.4 Pivot scenarios

**Scenario A — Phase 1.5 expansion · Phase 2 deceleration**
- **Trigger:** Cohort 1 Mes 3 satisfied con Phase 1 + Phase 1.5 priority emerges as primary demand
- **Response:** Phase 1.5 scope expanded (include extra capabilities) · Phase 2 timeline delayed Q4 2027

**Scenario B — Phase 2 acceleration**
- **Trigger:** ≥4 Cohort 1 DPs demand Phase 2 features urgently Mes 3 (especially F5 agentes OR F6 cumplimiento)
- **Response:** Phase 1.5 reduced · Phase 2 dev start Q1 2027 (vs Q2 2027) · Series Seed close acceleration

**Scenario C — F8 partner channel acceleration**
- **Trigger:** LIMAC OR SYCA partnership formalizes Q4 2026 / Q1 2027
- **Response:** F8 elevated priority · pursue integration via partner channel · potentially F7 POS API reactivated as opportunistic addition Phase 2.5+

**Scenario D — Phase 2 capability pivot (reframe further)**
- **Trigger:** Cohort 1 data invalidates Phase 2 capability hypothesis (e.g., F5 agentes NOT valued · NEW capability requested)
- **Response:** Phase 2 capability list updated · v0.1 → v1.0 major rev · architectural implications re-assessed

**Scenario E — Foreign vendor MX entry pre-Phase 2**
- **Trigger:** Toast · MarketMan · Apicbase MX entry signal Q1-Q2 2027
- **Response:** Phase 2 timeline acceleration · F8 partner channel urgency · competitive defense priority shift

---

## 7. Cohort 2 design partner program + pricing transition framework

### 7.1 Cohort 2 design partner program necessity

Phase 2 launch requires **nueva cohort de design partners** porque:

- Phase 2 capabilities (F1-F6 + F8) NOT validated en Cohort 1 (Cohort 1 valida Phase 1 standalone)
- Multi-sucursal Phase 2 features benefit from multi-sucursal DPs (3-5 sucursales Phase 2 target vs 1-3 Phase 1)
- CFDI/PAC integration F6 needs DPs con diverse fiscal profiles (different PAC providers · different complexity)
- Partner channel F8 validation needs DPs in distribuidores ecosystems (CONTPAQi · Soft Restaurant via SYCA)

### 7.2 Cohort 2 design partner program structure (hypothesis)

- **5-7 design partners** selected for Phase 2 validation
- **90 días gratis** access a Phase 2 capabilities (mirroring Cohort 1 program structure)
- **Includes mix:** Phase 1 graduados (Cohort 1 que continúan + algunos graduados a Cohort 2) + new operadores (3-5 sucursales context · different from Cohort 1 sub-segmento)
- **Founder + Head of CS led** (NOT founder-only per Phase 1 scaling)
- **Cohort 2 timeline:** Q3 2027 kickoff

### 7.3 Cohort 2 program doc trigger

- Cohort 2 design partner program doc needs creation Q1-Q2 2027 (pre-Phase 2 dev complete)
- Lives en `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners-cohort-2.md` (cross-workspace · until migration · per marco §2.3)
- Pattern referenceable: Cohort 1 program v1.1 + reframed for Phase 2 context

### 7.4 Pricing transition framework (conceptual · specifics deferred)

**Important:** Specific pricing tiers + numbers para Phase 2 transition serán defined en **`Product Strategy/_context/03-oferta-y-pricing/01-pricing-tiers-hipotesis.md`** cuando se redacte. Este doc covers solo **framework conceptual:**

**Phase 1 → Phase 2 transition mechanism (conceptual):**

- Phase 1 pricing transitorio (current: $1,500 MXN/mes/sucursal hypothesis · subject to change in subfolder 03)
- Phase 2 pricing canonical tiers (Tier Básico · Pro · Multi-sitio · specifics TBD in subfolder 03)
- Existing Cohort 1 graduados clients: **upgrade pathway** con descuento Socio Fundador preservado
- New clients post-Phase 2 launch: **canonical pricing** desde inicio

**Mechanism principles:**

- NO penalización transition para existing clients
- Descuento Socio Fundador 30% perpetuo preserved (heredado programa-design-partners.md §14.5)
- Precio congelado 24 meses adicionales post-transition
- Communication 90 días anticipación pre-transition

**Trigger:** pricing canonical tiers definidos en subfolder 03 antes de Cohort 2 kickoff Q3 2027 · pre-Phase 2 launch comms planning.

---

## 8. Investor narrative trajectory (product phases × geographic phases)

### 8.1 Decoupling explícito · product vs geographic phases

**Critical correction:** Product phases (Zenet capabilities) ≠ Geographic phases (TJ → BC → MX → LATAM). These are different axes.

**Product Phases:**

| Phase | Timeline | Scope |
|---|---|---|
| Product Phase 1 | Q3 2026 | 8 capabilities Essential + High value (heredado MVP scope) |
| Product Phase 1.5 | Q4 2026 / Q1 2027 | N1-N5 capabilities (per §3.1) |
| Product Phase 2 | Q3-Q4 2027 | F1-F6 + F8 capabilities reframed (per §3.3) · NOT F7 POS API |
| Product Phase 3+ | 2028+ | Post-Phase 2 evolution · subject to Cohort 1 + 2 learnings |

**Geographic Phases (heredado industry 07 §2):**

| Phase | Timeline approximate | Scope |
|---|---|---|
| Geographic Phase 1 | Q3 2026 - Q1 2027 | TJ launch · Cohort 1 design partners BC |
| Geographic Phase 2 | Q2 2027 - 2028 | BC complete (Tijuana + Mexicali + Ensenada + Rosarito + Tecate + Valle de Guadalupe) |
| Geographic Phase 3 | 2028 | Operativa (Sonora + Querétaro + Puebla) |
| Geographic Phase 3 bis | 2028+ | Mérida (modelo remoto + partnership obligatorio) |
| Geographic Phase 4 | 2029 | GDL · MTY · CDMX |
| **Geographic Phase 5** | **Post-Series A** | **LATAM expansion** |

### 8.2 Product × Geographic phasing matrix

| Timeline | Product Phase | Geographic Phase | Capital Stage |
|---|---|---|---|
| Q3 2026 | Product Phase 1 launch | Geographic Phase 1 (TJ) | Pre-seed |
| Q4 2026 - Q1 2027 | Product Phase 1.5 | Geographic Phase 2 start (BC expansion) | Seed close target |
| Q3-Q4 2027 | Product Phase 2 launch | Geographic Phase 3 (Sonora · QRO · Puebla operativa) · Phase 3 bis (Mérida con partner local) | Post-Seed · Series A target |
| 2028+ | Product Phase 3+ evolution | Geographic Phase 4 (GDL · MTY · CDMX) | Series A capital deployed |
| **Series A close+** | (Product continues) | **Geographic Phase 5 (LATAM)** | **Series A capital deployed** |

### 8.3 Investor narrative correcciones

| Original framing (incorrect) | Corrected framing |
|---|---|
| *"Phase 2 enables LATAM expansion"* | *"Product Phase 2 enables MX geographic expansion (BC complete + Sonora + Querétaro + Puebla + Mérida con partner local) · NOT LATAM. LATAM expansion is Geographic Phase 5 · post-Series A capital deployment."* |
| *"Phase 2 commits to scale-out via POS API"* | *"Product Phase 2 commits to product depth + agent layer maturity + compliance automation via CFDI/PAC · partner channel strategy in parallel · NOT POS API integration (research-validated structural barrier in MX SMB context)"* |
| *"Phase 2 = Series A inflection"* | *"Product Phase 2 + Geographic Phase 3 = Series A inflection signal · validated multi-state operations + product depth + early ecosystem partnerships · LATAM = Series A capital deployment outcome · NOT trigger"* |

### 8.4 Pricing arbitrage frame Phase 2 (heredado vp-statement §8)

Phase 2 launch reinforces pricing arbitrage frame:

- *"Subscription mensual vs $105K-185K MXN/mes equivalent human team = 70-100x descuento"* (specific pricing tiers TBD subfolder 03)
- Frame reforzado por F5 agentes especializados shipped (full agency-as-SaaS realizado)
- F4 costos automatizados + F6 cumplimiento = real specialist team replacement claim validated

---

## 9. Partner channel strategy (parallel track)

### 9.1 Por qué partner channel matters post-research

Research-validated POS API integration impossible direct entry en MX SMB context. **Partner channel strategy** es la alternative path para ecosystem integration · runs en paralelo a Phase 2 dev · NOT Phase 2 technical scope.

### 9.2 Target partners

| Partner type | Specific targets MX | Phase | Mechanism |
|---|---|---|---|
| **CONTPAQi distribuidores** | LIMAC (Tijuana) · expand to other distribuidores in BC · Sonora · Bajío | Q4 2026 onwards | Consultor partner extension model (heredado industry 06 §14) · Zenet trains distribuidor · distribuidor monetiza service sobre Zenet |
| **Soft Restaurant distribuidores** | SYCA (Tijuana · 10+ años experience) · expand Phase 2+ | Q4 2026 onwards | Same pattern · SYCA validated cualitativamente como integration glue provider |
| **PAC certified providers** | Solución Factible · SW · others | Phase 2 (Q2 2027) | F6 CFDI/PAC direct integration partnership |
| **Industry associations** | CANIRAC Tijuana (Rebeca Aguilar Santuario · Bootcamp GastronomIA) | Phase 1 onwards | Membership + sponsorship + speaker presence · channel #1 institutional |

### 9.3 Partner channel timeline

| Milestone | Target | Subject to |
|---|---|---|
| Initial conversations LIMAC + SYCA | Q4 2026 | Cohort 1 first traction signals |
| First formal partnership agreement (LIMAC OR SYCA) | Q1-Q2 2027 | Mutual validation · pilot terms |
| PAC provider partnership (Solución Factible OR SW) | Q2 2027 | Phase 2 F6 dev kickoff |
| Multiple distribuidores active | Q3-Q4 2027 | Phase 2 launch ecosystem ready |
| Partner channel revenue contribution | 2028+ | Distribuidores referrals + integration services |

### 9.4 Trigger para partnership formalization

- LIMAC OR SYCA receptivity confirmed Q4 2026 (initial conversations)
- Cohort 1 first paying customers traction visible (validates ROI for distribuidor)
- Zenet partnership program structure defined (revenue share · training · technical resources)

### 9.5 Anti-pattern partner channel

❌ NOT pursue partnership con POS vendors directly (research-validated NOT receptive)
❌ NOT promise distribuidores POS API integration por part de Zenet (Zenet NO controls POS APIs)
✅ SÍ position Zenet como BoH cognitive layer · distribuidores provide ecosystem integration glue
✅ SÍ revenue share model que aligns distribuidor incentives

### 9.6 Partner channel doc trigger

Dedicated doc `04-go-to-market/03-channel-y-partner-strategy.md` v0.1 (futuro · subfolder 04) covers operational detail. This doc only frames strategic intent.

---

## 10. Risk management Phase 1.5/2-specific

### 10.1 Architectural risk

- **Risk:** Phase 1 architectural debt que breaks Phase 1.5/2 (e.g., monolithic UI-coupled code · NOT API-first internal architecture)
- **Mitigation:** Phase 1 prep requirements §4.2 explicit · architecture decision authority §4.3 clear

### 10.2 Capital risk

- **Risk:** Series Seed insufficient capital para Phase 2 full scope
- **Mitigation:** Phase 2 scope flexibility (F5 + F6 first · F1/F2/F4 sequenced · F8 partner channel low-cost) · Series A trigger at Phase 2 ship + revenue traction

### 10.3 Market risk — foreign vendor MX entry pre-Phase 2

- **Risk:** Toast · MarketMan · Apicbase MX entry Q1-Q2 2027 antes de Phase 2 ship · competitive defense priority shift
- **Mitigation:** monitor competitive 02 + competitive 06 quarterly · accelerate F8 partner channel + F5/F6 dev si foreign vendor signal materializes

### 10.4 Talent risk

- **Risk:** AI engineering + restaurant ops fluency at intersection scarce (heredado por-que-ahora §7.5 hiring urgency)
- **Mitigation:** Series Seed proceeds prioritize dev hires Q1 2027 · founder network leverage para early hires

### 10.5 Cohort 1 invalidation risk

- **Risk:** Cohort 1 Mes 3 data invalidates Phase 1.5 OR Phase 2 hypotheses (e.g., contable silent veto NOT pattern · F5 agentes NOT priority · etc.)
- **Mitigation:** Phase 1.5/2 hypothesis-level explicit (this doc) · pivot scenarios §6.4 documented · v0.1 → v1.0 trigger ready

### 10.6 Partner channel risk

- **Risk:** LIMAC · SYCA · PAC providers NOT receptive a partnership · F8 strategy fails · ecosystem integration path closed
- **Mitigation:** parallel conversations multiple distribuidores (NOT single dependency) · build operator value strong enough que ecosystem partnership desired by distribuidores · alternative path = continued manual upload Phase 2+

### 10.7 Research-validated POS API barrier re-emergence

- **Risk:** Even partner channel strategy fails · NO ecosystem integration possible · Zenet structurally limited to manual upload forever
- **Mitigation:** accept manual upload as long-term reality si necessary · double down on agent layer (F5) value · CFDI/PAC integration (F6) bypasses POS dependency for fiscal · operator value strong enough independent of POS integration · this is acceptable Phase 2+ strategy if needed

---

## 11. Cross-references al research backbone + upstream/downstream docs

### 11.1 Inputs (upstream · primary)

| Source | Cómo se usa en este doc |
|---|---|
| **`00-fase-1-mvp-scope.md` v0.1** | Phase 1 launch scope foundation · Phase 1.5/2 builds on top |
| **`01-value-map.md` v0.1 §3.1.2 + §3.1.3** | Capability enumeration referenced (Phase 1.5 N1-N5 + Phase 2 F1-F7) |
| **`02-fit-analysis.md` v0.1 §6** | Gaps identified inform Phase 1.5/2 priorities |
| **`00-customer-profile.md` v0.1.1** | Pains needing Phase 1.5/2 coverage inform priorities |
| **Marco product-strategy v1.1** | TIER framework + Phase stages + methodology |
| **Research findings 2026-05-26** | POS API barriers (partner gating + APIs legacy + no API pública MX SMB) inform Phase 2 reframe |
| **Industry 06 §6.1** | POS APIs "partner-gated" landscape MX |
| **Industry 06 §6.7** | CONTPAQi ecosystem + LIMAC + SYCA partner targets |
| **Industry 07 §2** | 5-phase geographic expansion canonical (decoupling product vs geographic phases) |
| **User input 2026-05-25 + 2026-05-26** | Phase 2 features list + scope decisions + 4 catches integrated |

### 11.2 Outputs (downstream)

| Destination doc | Cómo este doc alimenta downstream |
|---|---|
| **`02-features-y-scope/02-feature-prioritization.md` v0.1** (próximo doc subfolder) | TIER framework + priority order + sequencing logic |
| **`03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` v0.1** (futuro subfolder) | Pricing transition framework §7.4 informs pricing specifics |
| **`04-go-to-market/03-channel-y-partner-strategy.md` v0.1** (futuro subfolder) | Partner channel strategy §9 informs operational detail |
| **`08_Estrategia-Producto/.../programa-design-partners-cohort-2.md`** (futuro · cross-workspace) | Cohort 2 program structure §7.1-7.2 informs operational program design |
| **Production repo** (engineering) | Phase 1.5/2 architecture requirements + Phase 1 prep needs §4 |
| **`05-capital-y-fundraising/00-funding-roadmap-y-milestones.md`** (futuro subfolder) | Series Seed → Series A trajectory §5 + §8 informs funding milestones |

### 11.3 Research backbone inputs

| Doc | Lo que aporta |
|---|---|
| Customer 05 §10.8 silent veto pattern | Contable Pain mitigation needs alternative strategy (F6 via CFDI/PAC) |
| Customer 06 §3.7.5-7.6 contable objections + silent veto | Phase 2 contable Pain Reliever strategy |
| Customer 07 V-031 Jesús Ramírez augmentation framing | F5 agentes especializados positioning |
| Industry 08 §2.8 SAT 2026 + §2.9 propinas + §10.1 LFPDPPP | F6 cumplimiento priorities |
| Competitive 04 §5.6 CONTPAQi ecosystem dominance | F8 partner channel targets |
| Posicionamiento v1.4 §4 diferenciadores | Phase 2 strategy consistency check |

---

## 12. Estado del doc + notas finales

### 12.1 Estado del doc

- **Version:** 0.1
- **Research stage:** `discovery-pre-PMF`
- **Last updated:** 2026-05-26
- **Owner:** Alan Bahena
- **Status:** active · segundo doc del subfolder `02-features-y-scope/`

### 12.2 Update triggers de este doc específico

- **v0.1 → v0.2 (minor):** Cohort 1 Sesión 1+2+3 demo outcomes · cross-doc sync (CP/VM/FA/MVP scope updates) · partner channel conversations updates (LIMAC · SYCA)
- **v0.1 → v1.0 (significant):** Cohort 1 Mes 3 data validates/contradicts 3+ Phase 1.5/2 hypotheses · major reprioritization · partner channel formalization OR fail · Series Seed close

### 12.3 Próximo doc en sequence

`02-features-y-scope/02-feature-prioritization.md` v0.1 — TIER framework + Kano-inspired prioritization para Phase 1 + 1.5 + 2 capabilities consolidated. Cierra subfolder `02-features-y-scope/` (3/3 docs).

### 12.4 Cross-pointers load-bearing

- **`00-fase-1-mvp-scope.md` v0.1** — Phase 1 foundation
- **`01-value-map.md` v0.1** — capability enumeration
- **Industry 06 §6.7** — partner targets ecosystem
- **Industry 07 §2** — geographic phases canonical (decoupling principle)
- **Customer 05 §10.8** — contable silent veto mitigation reframe driver

### 12.5 Anti-scope explícito

| Información | Por qué NO va aquí | Dónde va |
|---|---|---|
| Capability descriptions detalladas Phase 1.5 + Phase 2 | Duplicate de value-map.md §3.1.2 + §3.1.3 | `01-value-map.md` v0.1 |
| Acceptance criteria Phase 1.5 + Phase 2 | Premature (hypothesis · NOT specs ready) | Future Phase 1.5/2 MVP scope docs post-Cohort 1 validation |
| Engineering implementation specs | Production repo scope | Production repo CLAUDE.md |
| Cohort 2 design partner program operational detail | Customer development workspace | Future `08_Estrategia-Producto/.../programa-design-partners-cohort-2.md` |
| Specific pricing tiers + numbers Phase 2 | Pricing depth doc | Future `03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` |
| Partner channel operational detail (revenue share · training · contracts) | GTM operational | Future `04-go-to-market/03-channel-y-partner-strategy.md` |
| Series Seed pitch deck content | Investor pitch artifact | Future pitch deck doc |
| Geographic expansion operational detail | Channel strategy operational | Future `04-go-to-market/` GTM subfolder docs |

---

## Notas

- **Origen.** Doc derivado de outline aprobado 2026-05-26 + 4 catches integrados (POS API removed · Phase 1.5 included · pricing softened · LATAM = Geographic Phase 5). Research-validated reframe es most significant change · Phase 2 strategy now realistic + executable + honest.
- **Hypothesis-level disciplina.** Per marco §3, Phase 1.5/2 capabilities son hypothesis · validation triggers explicit §6 · pivot scenarios documented · v0.1 → v1.0 triggers ready.
- **Honest framing throughout.** F7 POS API removed explicitly · partner channel as alternative · pricing specifics deferred to subfolder 03 · LATAM correctly decoupled from product phases.
- **Documento vivo.** Update cadence per marco §8 — quarterly review + ad-hoc cuando Cohort 1 Mes 3+ data dispare insights · OR partner channel conversations materialize · OR Series Seed close.
- **Cross-workspace dependencies acknowledged.** Cohort 2 program structure depends on `08_Estrategia-Producto/` workspace (migration pending per marco §2.3) · pricing specifics depend on subfolder 03 future · partner channel operational detail depends on subfolder 04 future.

### Changelog

- **v0.1 (2026-05-26).** Documento base inicial · 12 secciones · Phase 1.5 + Phase 2 bridge roadmap framework. Phase 1.5 priority ordering N1-N5 (Dashboard · MO extended · Job descriptions · Training portal · MdP detailed). **Phase 2 major reframe post-research 2026-05-26:** F7 POS API integration REMOVED de canonical (research-validated structural barriers · partner gating + APIs legacy + no API pública MX SMB) · F5 agentes especializados elevated priority #1 · F6 cumplimiento via CFDI/PAC direct (NOT POS API) · F1-F4 reframed scope (NOT real-time · periodic uploads improved) · F8 partner channel strategy NEW parallel track added (LIMAC · SYCA · PAC providers). Architecture changes Phase 1.5/2 § 4 documented + Phase 1 prep requirements explicit. Timeline + gating criteria §5 reframed (CFDI/PAC integration replaces POS API gate). Cohort 2 design partner program necessity §7.1-7.3. Pricing transition framework §7.4 conceptual (specifics deferred to `03-oferta-y-pricing/`). **Investor narrative correction §8:** product phases (Zenet capabilities) ≠ geographic phases (TJ → BC → MX → LATAM). LATAM = Geographic Phase 5 + Series A capital · NOT product Phase 2. Partner channel strategy §9 dedicated section (target partners + timeline + triggers + anti-patterns). 6 risk categories §10. Hypothesis-level discipline throughout.

---

*Last updated: 2026-05-26.*
*Next planned update: post Cohort 1 Sesión 1+2+3 demo outcomes (any DP) · OR Mes 3 conversion data dispare insights · OR partner channel conversations materialize (LIMAC · SYCA · PAC providers) · OR Series Seed close · OR major Phase 1.5/2 capability reprioritization.*
