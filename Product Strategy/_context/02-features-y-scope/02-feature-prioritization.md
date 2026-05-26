---
name: Feature Prioritization — TIER + Kano-inspired Cross-Phase Methodology
description: Methodology unificada + matriz cross-phase + scoring framework + tradeoff discipline para priorización de capabilities Phase 1 + 1.5 + 2
type: product-strategy
last_updated: 2026-05-26
status: active
version: 0.1
owner: Alan Bahena
research_stage: discovery-pre-PMF
---

# Feature prioritization — methodology unificada cross-phase

## 1. Propósito del documento

Este doc consolida la **metodología de priorización aplicable cross-phases** para Zenet. NO repite capability descriptions (`01-value-map.md` cubre eso), NO redefine Phase 1 acceptance criteria (`00-fase-1-mvp-scope.md` cubre eso), NO re-ordena Phase 1.5/2 features (`01-roadmap-hipotesis-fase-1.5-y-2.md` cubre eso).

Lo que este doc agrega:

1. **Marco TIER + Kano-inspired consolidado** (build on `marco-product-strategy.md` §4.3 framework theory)
2. **Scoring methodology rigurosa con criteria explícitos** — 6 dimensiones por feature
3. **Matriz unificada cross-phase** con todos los features (E1-E6 + H1-H2 + N1-N5 + F1-F6 + F8) en single view
4. **Stack-ranking logic per phase** consolidando decisiones de docs hermanos
5. **Tradeoff framework** — qué pasa si scope cuts forzados · qué pasa si scope additions emergen · qué pasa si acceleration posible
6. **Validation triggers + Kano recategorization triggers** específicos a prioritization decisions

Cierra subfolder `02-features-y-scope/` (3/3 docs). Próximo subfolder: `03-oferta-y-pricing/`.

Es **methodology + scoring framework** que future contributors pueden apply cuando new features emerge — NOT new capability content.

---

## 2. Marco metodológico Kano + TIER consolidated

### 2.1 Kano model recap

5 categorías Kano canonical (cf. `marco-product-strategy.md` §4.3):

| Categoría Kano | Customer satisfaction impact | Decisión típica |
|---|---|---|
| **Must-have** (basic · table stakes) | Ausencia mata el deal · presencia NO diferencia | Ship MVP · cut-blocked |
| **Performance** (linear satisfaction) | Más es mejor · linear satisfaction increase | Ship MVP if timeline allows · acceptable defer |
| **Delighter** (exceeds expectations) | Ausencia NO mata · presencia delights · drives WOM | Defer Phase 1.5 typically · NOT MVP block |
| **Indifferent** | No impact en satisfaction | Candidate para cut · validate con DPs primero |
| **Reverse** | Customer NO quiere · negative impact si ship | Cut · evidence-required |

### 2.2 TIER framework mapping (Zenet-specific)

| TIER | Kano category mapping | Phase | Status canonical |
|---|---|---|---|
| **Essential (E1-E6)** | Must-have | Phase 1 launch | Ship MVP · NEVER cut critical path E5→E2→E1→E4 |
| **High value (H1-H2)** | Performance | Phase 1 launch | Ship MVP if timeline allows · acceptable cut order |
| **Nice-to-have (N1-N5)** | Delighter | Phase 1.5 Q4 2026 / Q1 2027 | Defer post-MVP |
| **Future-must-have (F1-F6 + F8)** | Performance Phase 2 context | Phase 2 Q3-Q4 2027 | Capital + Cohort 2 gated |

### 2.3 Por qué Kano-inspired NOT Kano formal

Heredado `marco-product-strategy.md` §4.3: pre-PMF NO podemos hacer Kano formal (formal Kano requires functional + dysfunctional question pairs to ≥30-50 customers). Lo que aplicamos es **Kano-inspired pragmatic prioritization** con:

- Research backbone evidence (24 Perplexity Pro queries + customer research v0.1 + competitive analysis v0.1)
- Fit Analysis Strong fit counts per feature (`02-fit-analysis.md` v0.1)
- Strategic judgment per voz operativa + diferenciadores

Re-evaluación Kano formal trigger: Cohort 1 Mes 3+ data permite survey-based Kano analysis (~5-7 DPs · adequate statistical signal para directional Kano categorization · NOT publication-grade pero suficiente para roadmap refinement).

---

## 3. Scoring methodology + criteria

### 3.1 Scoring criteria canonical (6 dimensiones per feature)

| # | Criterio | Pregunta | Escala | Source |
|---|---|---|---|---|
| 1 | **Pain coverage strength** | ¿Qué Pains addresses · severity? | NONE / WEAK / PARTIAL / STRONG | FA evidence per stakeholder |
| 2 | **Stakeholder reach** | ¿Cuántos stakeholders benefit directly? | 1-4 (dueño · gerente · chef · contable) | Mini-CPs Customer Profile |
| 3 | **Strong fit count (FA)** | ¿Cuántos Strong fits genera en Fit Analysis matrices? | Count integer (Pain↔PR + Gain↔GC) | `02-fit-analysis.md` v0.1 §3-6 |
| 4 | **Dev complexity** | ¿Cuán complejo es shipping? | Low / Medium / High / Very High | Production repo + engineering judgment |
| 5 | **Architectural unlock** | ¿Habilita otras features downstream? | Yes/No · cuáles features unlock | Capability dependency graph |
| 6 | **Strategic differentiation** | ¿Es diferenciador único vs competitors? | Yes/No · cuál diferenciador | Competitive analysis 07 defensibility synthesis |

### 3.2 Priority calculation framework

NOT mechanical formula · es **disciplined judgment** informed por scoring patterns:

- **STRONG pain coverage + multi-stakeholder (3-4) + ≥3 Strong fits + Low-Medium dev** → Essential (TIER 1)
- **STRONG/PARTIAL pain coverage + multi-stakeholder + ≥2 Strong fits + High dev** → High value (TIER 2A) · acceptable cut order
- **PARTIAL/STRONG pain coverage + single-stakeholder + 1-2 Strong fits + Low-Medium dev** → Nice-to-have (TIER 2B Phase 1.5)
- **STRONG pain coverage + architectural unlock + Phase 2 timeline + Very High dev** → Future-must-have (TIER 3 Phase 2)
- **WEAK/NONE pain coverage OR Indifferent** → Candidate para defer indefinitely OR cut · require DP validation primero

### 3.3 Anti-patterns explícitos

| Anti-pattern | Por qué es problemático | Mitigación |
|---|---|---|
| ❌ Feature popularity contest | Priority NOT based en *"qué feature is most exciting"* | Require Pain coverage evidence per scoring §3.1 |
| ❌ Engineering enthusiasm bias | Priority NOT based en *"qué feature is most fun to build"* | Founder veto · pain coverage takes precedence over technical interest |
| ❌ Single stakeholder loud voice | Priority NOT based en *"un DP lo pidió"* | Require pattern · ≥3 DPs cite same pain antes de roadmap change |
| ❌ Competitive feature-matching | Priority NOT based en *"competitors tienen X"* | Zenet construye diferenciadores · NOT parity · cf. `posicionamiento.md` |
| ❌ Sunk cost bias (kept building) | Priority NOT based en *"ya invertimos meses"* | Periodic re-scoring trigger · willingness to cut/pivot |
| ❌ Vision-anchored bias | Priority NOT based en *"siempre quisimos hacer X"* | Re-validate con Cohort 1 evidence · Mes 3+ data trumps original hypothesis |

---

## 4. Unified feature matrix cross-phase (canonical)

Esta es la **single source of truth** para feature priority status cross-phase. Todos los features mapeados con scoring + Kano category + TIER assignment.

### 4.1 Phase 1 features (E1-E6 + H1-H2)

| # | Feature | Pain coverage | Stakeholder reach | Strong fits FA | Dev complexity | Architectural unlock | Strategic diff | Kano cat | TIER |
|---|---|---|---|---|---|---|---|---|---|
| **E1** | Manual Operativo vivo | STRONG | 4/4 | 5 Strong | Medium-High | Unlock H1 permission model + E4 backend | Sí — sistema operativo cognitivo | Must-have | TIER 1 |
| **E2** | Estandarización (foundational data layer) | STRONG | 4/4 | 6+ Strong | High (foundational) | Unlock E1 · E4 · H1 · H2 · todo downstream | Sí — foundational data layer | Must-have | TIER 1 |
| **E3** | Estructuración sucursales | STRONG | 2/4 (dueño · gerente) | 2 Strong | Low-Medium | Unlock H1 organigrama context | Operational | Must-have | TIER 1 |
| **E4** | WhatsApp Agency interface | STRONG | 4/4 | 5+ Strong | High (integration) | Diferenciador #6 (uso #3 MX-native) | Sí — diferenciador único MX | Must-have | TIER 1 |
| **E5** | Modos de subir archivos (CSV · OCR · manual · photo) | STRONG | 4/4 | 4 Strong | Medium | Unlock E2 data ingestion (critical path start) | Operational | Must-have | TIER 1 |
| **E6** | High-touch onboarding (founder-led) | STRONG (Gain expected) | 4/4 | 4+ Strong (Gains) | Medium (operational · NOT pure dev) | Cohort 1 differentiator | Sí — founder access moat | Must-have | TIER 1 |
| **H1** | Organigrama (roles + permisos básicos) | PARTIAL | 3/4 (dueño · gerente · empleados) | 2 Strong | Low-Medium | Unlock E1 permission model + N4 Phase 1.5 | Operational | Performance | TIER 2A |
| **H2** | Mapa de procesos (basic visualization) | PARTIAL | 2/4 (gerente · chef) | 2 Strong | Medium | Unlock N3 Phase 1.5 detail | Operational | Performance | TIER 2A |

### 4.2 Phase 1.5 features (N1-N5)

| # | Feature | Pain coverage | Stakeholder reach | Strong fits FA | Dev complexity | Architectural unlock | Strategic diff | Kano cat | TIER |
|---|---|---|---|---|---|---|---|---|---|
| **N1** | Dashboard inicial | STRONG | 2/4 (dueño · gerente) | 2 Strong Phase 1.5 | Medium | Unlock alerts visualization Phase 2 F4 | Operational | Performance/Delighter | TIER 2B |
| **N2** | Manual Operativo extended (alertas · actualizaciones · viz avanzada) | PARTIAL | 3/4 | 3 Partial→Strong Phase 1.5 | Medium-High | Foundational para Phase 2 F4/F5 | Sí — alerts framework | Performance/Delighter | TIER 2B |
| **N4** | Organigrama job descriptions completas | PARTIAL | 2/4 | 1 Strong | Low | Unlock N5 training portal | Operational | Performance/Delighter | TIER 2B |
| **N5** | Training portal nuevos empleados | STRONG | 3/4 (gerente · chef · cocineros) | 3 Strong Phase 1.5 | High | Retention sustainability Mes 6+ | Operational | Delighter | TIER 2B |
| **N3** | Mapa procesos detailed (chat agente especializado) | PARTIAL | 2/4 | 1 Partial→Strong Phase 1.5 | High | Marginal standalone value | Operational | Delighter | TIER 2B |

### 4.3 Phase 2 features (F1-F6 + F8 · post-research reframe 2026-05-26)

| # | Feature | Pain coverage | Stakeholder reach | Strong fits FA | Dev complexity | Architectural unlock | Strategic diff | Kano cat | TIER |
|---|---|---|---|---|---|---|---|---|---|
| **F5** | Agentes especializados (costos · inventario · proveedores · etc.) | STRONG | 4/4 | 4+ Strong Phase 2 | Very High | Agency-as-SaaS full realization | **Diferenciador #1 (agency-as-SaaS)** | Performance Phase 2 | TIER 3 |
| **F6** | Cumplimiento fiscal/sanitario vía CFDI/PAC direct | STRONG | 2/4 (contable · dueño) | 4 Strong Phase 2 | High (CFDI/PAC integration · NOT POS API) | Compliance automation full | Sí — compliance moat | Performance Phase 2 | TIER 3 |
| **F1** | Inventory management reframed (periodic · NOT real-time) | STRONG | 3/4 | 3 Strong Phase 2 | Medium-High (reframed scope) | Unlock F4 variance detection | Operational | Performance Phase 2 | TIER 3 |
| **F2** | Improved batch upload UX + WhatsApp automation | PARTIAL | 4/4 | 2 Partial→Strong Phase 2 | Medium | Enables F1/F4 quality | Operational | Performance Phase 2 | TIER 3 |
| **F4** | Costos automatizados (variance detection over uploaded data) | STRONG | 3/4 | 3 Strong Phase 2 | High | Margin defense automated | Sí — margin defense | Performance Phase 2 | TIER 3 |
| **F3** | Carga + trackeo proveedores | PARTIAL | 2/4 | 2 Partial Phase 2 | Medium | Enables F5 agente proveedores | Operational | Performance Phase 2 | TIER 3 |
| **F8** | Partner channel strategy (LIMAC · SYCA · PAC providers) | INDIRECT | All stakeholders (indirect via ecosystem) | 0 direct Strong fits · contable mitigation indirect | Low (business development · NOT tech) | Unlock ecosystem partnerships + F7 reactivation opportunistic | Sí — channel moat | Performance Phase 2 parallel track | TIER 3 |
| ~~F7~~ | ~~Integración POS API~~ | ~~STRONG~~ | ~~3/4~~ | ~~3 Strong~~ | ~~Very High · structurally blocked~~ | ~~Real-time data unlock~~ | ~~Sí~~ | **REMOVED · research-validated barriers MX SMB** | ~~TIER 3~~ |

### 4.4 Matrix insights

- **TIER 1 Essential dominado por** STRONG pain coverage + multi-stakeholder reach (3-4) + architectural unlock value · justifica priority over feature interest
- **Critical path E5→E2→E1→E4** justified por scoring §3.1 — todos STRONG pain + multi-stakeholder + multiple Strong fits + cada uno unlock siguiente capability
- **Phase 2 F5 + F6 dominance** justified por high pain coverage + diferenciador #1 (agency-as-SaaS) realization · F5 priority #1 elevado post-research dado independencia de POS API
- **F7 removal** justified por Very High dev complexity + **structurally blocked** (partner gating MX SMB) · NO scoring path puede rescatar · reactivación condicional vía F8 partner channel
- **F8 partner channel preserves** contable mitigation indirect · Low complexity · viable parallel track resilient a technical timeline pressure

---

## 5. Stack-ranking logic per phase

Stack-ranking dentro de cada phase reflects critical path + architectural dependencies + capacity sequencing. Heredado MVP scope + roadmap docs.

### 5.1 Phase 1 stack-rank (critical path E5→E2→E1→E4)

```
1. E5 Modos upload         (start critical path · data ingestion)
2. E2 Estandarización      (foundational hub · normalizes E5 raw data)
3. E1 Manual Operativo     (read access universal · consume E2)
4. H1 Organigrama          (permission model · enables E1 access control)
5. E3 Estructuración       (org context · paralelizable)
6. E4 WhatsApp Agency      (interface · consume E1+E2 backend · diferenciador #6)
7. H2 Mapa procesos        (visual designer · paralelizable tarde)
8. E6 High-touch onboarding (operational · founder bandwidth · enables todo)
```

**Justificación scoring:** todos los TIER 1 ship juntos en MVP por definición · stack-rank refleja sequencing técnico (E2 es foundational hub dual-role · necesita data input de E5 + sirve output a E1+E4+H1+H2) NOT priority differential entre TIER 1 capabilities.

### 5.2 Phase 1.5 stack-rank (heredado roadmap §3.1)

```
1. N1 Dashboard inicial                  (highest user-facing visibility)
2. N2 Manual Operativo extended          (foundational para Phase 2 alerts)
3. N4 Organigrama job descriptions       (foundational para N5)
4. N5 Training portal                    (retention driver Mes 6+)
5. N3 Mapa procesos detailed             (specialized · acceptable defer)
```

**Justificación scoring:** N1 priority #1 por highest user-visible value + lowest dev complexity + multi-stakeholder reach (dueño + gerente) · N5 priority #4 dado high dev complexity pese a STRONG pain coverage.

### 5.3 Phase 2 stack-rank (post-research reframe 2026-05-26)

```
1. F5 Agentes especializados             (priority #1 · agency-as-SaaS full · independent POS API)
2. F6 Cumplimiento fiscal vía CFDI/PAC   (contable workflow + dueño Pain #5 SAT)
3. F1 Inventory management reframed      (foundational para F4)
4. F2 Improved batch upload + WhatsApp   (data quality enabler)
5. F4 Costos automatizados               (margin defense over uploaded data)
6. F3 Carga + trackeo proveedores        (enables F5 agente proveedores)

F8 Partner channel strategy              (parallel track · NOT technical sequence)
```

**Justificación scoring:** F5 priority #1 elevado post-research por independencia de POS API + agency-as-SaaS realización core + diferenciador #1 strategic moat. F6 priority #2 ahora vía CFDI/PAC direct (NOT POS API) · resuelve contable Pain workflow + dueño Pain #5 SAT con compliance moat construible.

### 5.4 Cut order discipline cross-phase

Si timeline pressure forces feature drops · cut order canonical:

**Phase 1 cut order:**
```
1. H2 Mapa procesos basic    (cut first · paralelizable · marginal Strong fits)
2. H1 Organigrama            (cut second · acceptable defer permission model)
3. E3 Estructuración         (cut third · manual sucursal capture acceptable)
4. E6 scale-down             (NOT eliminate · reduce founder bandwidth share)

NEVER cut: E1 · E2 · E4 · E5 (critical path)
```

**Phase 1.5 cut order:**
```
1. N3 Mapa procesos detailed    (cut first · marginal value)
2. N5 Training portal           (defer to Phase 2 · high dev complexity)
3. N4 Organigrama job descs     (defer to Phase 2 · foundational para N5)

NEVER cut: N1 · N2 (highest retention impact + Phase 2 foundational)
```

**Phase 2 cut order:**
```
1. F3 Carga proveedores      (cut first · enables F5 agente proveedores · acceptable defer)
2. F4 reduce scope           (variance detection simplified · less granular)
3. F1 reduce scope           (further periodic vs less granular)

NEVER cut: F5 · F6 (Phase 2 raison d'être)

F8 parallel track resilient (NOT dependent on technical timeline)
```

---

## 6. Tradeoff framework

Decision matrices para 3 scenarios canónicos de prioritization pressure.

### 6.1 When scope additions emerge

Scenario: founder OR DP identifies feature *"crítica"* mid-development.

| Signal | Decision |
|---|---|
| ≥3 DPs (Cohort 1) cite same pain · NOT covered Phase 1 | Add to Phase 1.5 priority list · NOT Phase 1 mid-development |
| 1-2 DPs cite OR founder hunch (no DP pattern) | Document como edge case · monitor · NOT add to roadmap todavía |
| Strong fit FA potential + multi-stakeholder reach 3-4 | Re-evaluate scoring §3.1 · consider Phase 1.5 priority elevation |
| Architectural unlock value (Phase 2 foundational) | Consider Phase 2 priority elevation · NOT Phase 1.5 acceleration |
| Competitive parity request ("competitor X tiene Y") | Reject default per §3.3 anti-pattern · require Pain coverage evidence primero |

### 6.2 When scope cuts forced (timeline pressure)

| Scenario | Response |
|---|---|
| 2-week delay risk Phase 1 launch | Cut H2 first per §5.4 cut order · keep critical path intact |
| 4-week delay risk Phase 1 launch | Cut H2 + H1 (defer job descriptions · roles + permisos solo en Phase 1) |
| 6+ week delay risk Phase 1 launch | Cut H2 + H1 + E3 (manual sucursal capture acceptable) · escalate to founder for E6 scale-down decision |
| Critical capability slipping (E1 · E2 · E4 · E5) | **STOP · re-scope critical path · NEVER ship con critical path incomplete** |
| Phase 1.5 delay risk Q1 2027 | Cut N3 first · defer N5 + N4 to Phase 2 · ship N1 + N2 minimum |

### 6.3 When acceleration possible (capital OR dev capacity available)

| Scenario | Response |
|---|---|
| Series Seed close earlier Q4 2026 (vs Q1 2027 baseline) | Phase 2 dev start Q1 2027 (vs Q2 2027) · Phase 1.5 timeline maintains |
| Cohort 1 conversion >70% Mes 3 | Phase 1.5 acceleration · ship Q4 2026 (vs Q1 2027) · validate retention drivers earlier |
| Foreign vendor MX entry signal (Toast/Square/Loyverse) | Phase 2 timeline acceleration · F5 + F6 + F8 priority shifts · defensibility moat construction urgency |
| F8 partner channel partnership formalizes Q1 2027 (LIMAC/SYCA) | F7 POS API reactivation opportunistic · evaluate scoring · NOT default add |

---

## 7. Validation triggers + Kano recategorization

### 7.1 Cohort 1 data validates priority decisions

| Signal observable | Validates / Contradicts |
|---|---|
| 4+ DPs cite Pain #1 dueño como #1 Mes 3 | ✅ Validates E1+E4 TIER 1 priority |
| Chef DPs adopt recetario WhatsApp ≥5 queries/week | ✅ Validates E2+E4 chef Strong fit + WhatsApp uso #3 diferenciador |
| Contable Stage F engagement reveals silent veto pattern | ✅ Validates F6 CFDI/PAC Phase 2 priority |
| ≥3 DPs request dashboard inicial Mes 3 spontaneously | ✅ Validates N1 priority #1 Phase 1.5 |
| Manual upload sustained adoption Mes 6+ sin friction | ✅ Validates F1/F2 reframed scope (periodic · NOT real-time urgent) |
| <30% DPs use H2 Mapa procesos weekly Mes 1-3 | ⚠️ Contradicts H2 Performance categorization · downgrade to Delighter · candidate Phase 1 cut |
| ≥4 DPs request POS API integration Mes 3 con willingness-to-pay premium | ⚠️ Re-evaluate F7 reactivation · partner channel feasibility check |

### 7.2 Kano recategorization triggers

| Signal | Recategorize |
|---|---|
| Phase 1 Essential feature NOT used by ≥30% Cohort 1 Mes 3 | Downgrade to Performance OR Indifferent · candidate cut Phase 2 |
| Phase 1.5 Nice-to-have feature urgently demanded ≥3 DPs | Upgrade to Performance · Phase 1.5 acceleration consideration |
| Phase 2 Future-must-have feature validated solo como Delighter (NOT must-have) | Defer Phase 2.5+ · NOT priority block para Phase 2 launch |
| Feature consistently rejected by DPs (≥3 DPs negative signal) | Mark as Reverse · cut from roadmap · update value-map.md |

### 7.3 Update triggers para este doc

- **v0.1 → v0.2 (minor):** Cohort 1 Sesión 1+2+3 outcomes · feature scoring refinement · ≥1 Kano category recategorization
- **v0.1 → v1.0 (significant):** Cohort 1 Mes 3 data Kano recategorizations · major reprioritization (≥3 features) · Phase 2 reframe additional · Series Seed close + capital deployment plan finalized

---

## 8. Edge cases + ambiguous categorizations

Features con scoring ambiguous · necesitan Cohort 1 data validation para confirmar Kano category assignment.

### 8.1 H2 Mapa de procesos basic — Performance vs Delighter Phase 1

- **Ambiguity:** Categorizado Performance TIER 2A · pero scoring §3.1 muestra solo 2/4 stakeholder reach + 2 Strong fits + low operational urgency
- **Hypothesis:** Performance porque operadores need standardization visualization · pero NO critical para day-1 operación
- **Validation trigger:** Cohort 1 usage Mes 1-3 · si <30% use weekly → downgrade Delighter (acceptable cut last per §5.4 cut order)

### 8.2 N5 Training portal — Delighter Phase 1.5 vs Performance Phase 2

- **Ambiguity:** Categorizado Delighter Phase 1.5 (nice-to-have retention driver) · could become Performance Phase 2 si Cohort 1 Mes 6+ retention strongly correlates con training portal usage
- **Hypothesis:** Delighter pre-Mes 6 · Performance post-Mes 6 (retention sustainability lever)
- **Validation trigger:** Cohort 1 Mes 6+ retention analysis · si DPs sin training portal churn ≥2x faster vs con training portal usage → upgrade Performance · Phase 2 priority elevation

### 8.3 F8 Partner channel strategy — NOT technical feature

- **Ambiguity:** NOT technical feature · NOT TIER 3 strictly · es parallel business development track
- **Hypothesis:** Performance Phase 2 categorization (ecosystem integration enables scaling) · pero categorización Kano formal NOT applicable (channel partnership es structural · NOT consumer feature)
- **Validation trigger:** LIMAC OR SYCA partnership formalization Q1-Q2 2027 · success metric: ≥3 inbound DPs via partner channel Mes 6 post-partnership

### 8.4 F7 POS API integration (REMOVED · reactivation conditional)

- **Status:** removed from Phase 2 canonical 2026-05-26 · research-validated structural barriers MX SMB
- **Reactivation triggers (any of):**
  - LIMAC OR SYCA partnership formalizes (partner program access via channel)
  - CONTPAQi partner program access negotiated
  - Loyverse / Square open API path emerges en MX SMB context
  - ≥4 Cohort 1 DPs cite POS API como #1 unmet need + willingness-to-pay premium
- **Reactivation phase target:** Phase 3+ opportunistic (NOT Phase 2 default)
- **Anti-pattern:** NOT add back default sin trigger evidence · maintain reframed Phase 2 strategy disciplina

---

## 9. Cross-references

### 9.1 Docs hermanos directos (heredan + nutren)

| Doc | Relación |
|---|---|
| `marco-product-strategy.md` v1.1 §4.3 | TIER + Kano framework theory · este doc consolida + aplica |
| `01-value-map.md` v0.1 §3 | Capabilities catalog · este doc prioritizes |
| `02-fit-analysis.md` v0.1 §3-6 | Strong fits counts source · este doc scoring criterion #3 |
| `00-fase-1-mvp-scope.md` v0.1 §8.1 | Phase 1 critical path · este doc §5.1 hereda + scoring justifies |
| `01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 §3 | Phase 1.5/2 priority ordering · este doc §5.2/5.3 hereda + scoring justifies |

### 9.2 Research backbone

| Subfolder Market Research | Aporta |
|---|---|
| `01-industry-and-market/` v1.0 | Mercado declarado · scope · regulatorio (E6 LFPDPPP · F6 CFDI/PAC scoring) |
| `02-customer-research/` v0.1 doc 03 | Pains source para scoring criterion #1 |
| `02-customer-research/` v0.1 doc 07 | Verbatim library · validates Strong pain coverage assertions |
| `03-competitive-analysis/` v0.1 doc 07 | Defensibility synthesis · diferenciador strategic scoring criterion #6 |

### 9.3 Branding

| Doc Branding | Relación |
|---|---|
| `posicionamiento.md` v1.0 | Diferenciadores 5+1 informan scoring criterion #6 strategic differentiation |
| `voz-y-tono.md` v1.0 | Voz operativa informa anti-pattern §3.3 (NOT competitive parity messaging) |

### 9.4 Cross-workspace pending

| Workspace | Doc | Trigger relevancia |
|---|---|---|
| `08_Estrategia-Producto/_context/05-customer-development/` | Customer development docs (pending migration) | Cohort 1 evidence · validates §7 triggers |
| Production repo | Architecture decisions · capability dependency graph | Confirms dev complexity scoring criterion #4 |

---

## 10. Estado del doc + notas finales

### 10.1 Versión + ownership

- **Version:** 0.1 (discovery-pre-PMF)
- **Last updated:** 2026-05-26
- **Owner:** Alan Bahena
- **Status:** active
- **Type:** product-strategy
- **Research stage:** discovery-pre-PMF (hereda subfolder)

### 10.2 Cierra subfolder

Este doc **cierra subfolder `02-features-y-scope/`** (3/3 docs cerrados v0.1):
- `00-fase-1-mvp-scope.md` v0.1 — Phase 1 MVP canonical scope + acceptance criteria + critical path
- `01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 — Phase 1.5/2 capability roadmap (post-research reframe)
- `02-feature-prioritization.md` v0.1 — methodology + unified matrix cross-phase (este doc)

### 10.3 Próximo subfolder

- `03-oferta-y-pricing/` (pending) — pricing tiers hipótesis · willingness-to-pay framework · 90-day minimum + annual prepay structure · pure subscription model
- Documentos planeados: `00-pricing-strategy-framework.md` · `01-pricing-tiers-hipotesis.md` · `02-packaging-y-bundles.md` (TBD final scope cuando se outline el subfolder)

### 10.4 Anti-scope explícito (lo que NO va en este doc)

| Información | Por qué NO va aquí | Dónde va |
|---|---|---|
| Capability descriptions detalladas | Duplicate de value-map.md §3 | `01-value-map.md` v0.1 |
| Phase-specific acceptance criteria | Phase-specific docs cover this | `00-fase-1-mvp-scope.md` v0.1 §4 + future Phase 1.5/2 MVP scope docs |
| Engineering implementation specs | Production repo es source of truth | Production repo `/02_Producto-y-Tech/` |
| Specific pricing tiers | Pricing subfolder cubre WTP + tiers | `03-oferta-y-pricing/` (futuro) |
| Sales scripts | GTM subfolder cubre sales motion | `04-go-to-market/` (futuro) |
| Cohort 1 program operational detail | Customer development workspace | `08_Estrategia-Producto/_context/05-customer-development/` (cross-workspace) |
| Foreign vendor MX entry monitoring detail | Competitive analysis ongoing | `03-competitive-analysis/` (refresh cadence) |

### 10.5 Changelog

- **2026-05-26 · v0.1:** doc inicial creado · consolida TIER + Kano-inspired methodology + unified feature matrix cross-phase + scoring criteria (6 dimensiones) + stack-ranking logic per phase + tradeoff framework + validation triggers + edge cases · cierra subfolder `02-features-y-scope/` (3/3 docs)
