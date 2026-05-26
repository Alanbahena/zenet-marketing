---
name: Fase 1 MVP Scope — Zenet Phase 1 launch
description: MVP scope canonical para Zenet Phase 1 launch (Q3 2026). Consolida capabilities de value-map.md §3 con engineering-handoff discipline · acceptance criteria operacional · scope boundaries IN vs OUT explícito · scope decisions log con rationale · risk management (creep · cut · dependency) · launch readiness checklist + Go/No-Go criteria. NO duplica value-map.md (referencia) · NO dicta technical implementation (production repo handles). Cierre del scope decisions del subfolder 02-features-y-scope · alimenta engineering team handoff + sales motion downstream.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-26
status: active
version: 0.1
owner: Alan Bahena
---

# Fase 1 MVP Scope — Zenet Phase 1 launch

> **MVP scope canonical** para Phase 1 launch (Q3 2026 · ship en 2-3 meses). Consolida value-map.md §3 capabilities con **engineering-handoff discipline** · acceptance criteria operacional · scope boundaries IN vs OUT explícito · risk management framework.
>
> **NO duplica value-map.md** — referencia con cross-links. **NO dicta technical implementation** — production repo handles architecture · APIs · code. Este doc es **scope decisions document** · NOT engineering spec · NOT capability catalog.
>
> Hypothesis-level v0.1 per marco §3 · launch readiness criteria con Go/No-Go gates · validation triggers Cohort 1 Mes 3+ data.

---

## Índice

1. Propósito del documento
2. Marco metodológico MVP
3. MVP scope canonical Phase 1
4. Acceptance criteria per capability
5. Scope boundaries — IN vs OUT explicit
6. Scope decisions log
7. Risk management
8. Engineering handoff context
9. Phase 1 launch readiness criteria
10. Hipótesis abiertas + validation triggers
11. Cross-references al research backbone + upstream/downstream
12. Estado del doc + notas finales

---

## 1. Propósito del documento

Este doc define **qué específicamente ships en Phase 1 launch Q3 2026** con MVP discipline · provides boundaries IN vs OUT explícito · documenta decisiones de scope con rationale + alternatives rejected · enumera risks + mitigation framework · entrega launch readiness criteria objective.

**Por qué importa load-bearing:**

- Sin scope canonical · cada team member tiene diferente entendimiento de Phase 1
- Sin acceptance criteria · *"done"* es subjetivo · scope creep inevitable
- Sin decisions log · alternatives reconsidered repetidamente · waste cycles
- Sin launch readiness criteria · Go/No-Go decision subjective · risk de ship con gaps invisibles

**Lo que este doc NO hace:**

| Diferencia | This doc | Other docs |
|---|---|---|
| vs `01-value-map.md` v0.1 §3 | Decisiones de scope con rationale + acceptance criteria + boundaries | Capability catalog + feature breakdown descriptive |
| vs production repo | Product strategy scope statement | Engineering implementation (architecture · APIs · code · data models · tests) |
| vs `04-go-to-market/02-sales-motion.md` | Scope handoff para dev team | Sales scripts operacionales |
| vs `03-vp-statement-compressed.md` v0.1 | Internal scope decisions | External value messaging |

---

## 2. Marco metodológico MVP

### 2.1 MVP definition aplicada a Zenet

MVP canonical (Frank Robinson · Eric Ries · 2009-2011): **minimum viable product** que entrega learning · NOT feature-complete idealizado.

**Zenet Phase 1 MVP ≠ MVP de startup nuevo** — Zenet ya tiene product baseline en production repo (Next.js + FastAPI + Supabase + 17 tablas data model + 8 AI agents architecture per CLAUDE.md §9). Phase 1 MVP en Zenet contexto = **first ship del subscription model con Cohort 1 cohort** · NOT first ship de cualquier código.

**Focus de Phase 1 MVP:**

- Lo que entrega valor real a Cohort 1 (5 design partners BC) en 90 días iniciales
- Capability scope que permite sales motion canónica (Sesión 1+2+3 + Stage F)
- Validation de hypothesis críticos pre-PMF (heredado customer-profile §9 + value-map §8 + fit-analysis §9)

**NOT focus de Phase 1 MVP:**

- Phase 2 capabilities (inventario dinámico · costos automatizados · agentes especializados · POS API · cumplimiento fiscal automated)
- Phase 1.5 nice-to-haves (dashboard inicial · MO extended · MdP detailed · job descriptions completas · training portal)
- Feature parity vs competitors (Toast · MarketMan · etc. — diferente lane)
- Scale-out architecture (mass tenant onboarding · self-serve flow · etc.)

### 2.2 Decision framework — incluir en Phase 1 IF

✅ **Strong fit en fit-analysis.md v0.1** (Pain Reliever que resuelve Pain Strong-rated)
✅ **Achievable en 2-3 meses dev timeline** realistic
✅ **NOT blocking Cohort 1 launch readiness**
✅ **Mapped a Layer 1 capability macro** (NOT solo Layer 2 sub-feature)

### 2.3 Decision framework — diferir a Phase 1.5 IF

⏸️ **Nice-to-have OR weak fit** en FA
⏸️ **Risks Phase 1 timeline** si included
⏸️ **Needs Cohort 1 signal** antes de prioritizar
⏸️ **Sub-feature de capability** que opera funcionalmente sin él

### 2.4 Decision framework — diferir a Phase 2 IF

⏸️ **Future-must-have** (TIER 3 framework per marco §4.3)
⏸️ **Requires architectural change** major (e.g., inventario dinámico requires real-time data pipeline · agentes especializados require multi-agent orchestration)
⏸️ **Dependency en infrastructure** no shipping Phase 1 (POS API integration · inventario dinámico architecture)

### 2.5 MVP discipline principles

- **Cheap to write now · expensive to rewrite without evidence** (heredado marco §3.4) — scope decisions hechos sin data son hipótesis · validation triggers Cohort 1 confirman/contradicen
- **Honest framing > over-promise** (heredado vp-statement §7) — Phase 1 standalone value claro · Phase 2 trajectory commitment honest
- **Critical path execution > feature breadth** — better ship 8 capabilities sólidas que 13 capabilities frágiles

---

## 3. MVP scope canonical Phase 1

### 3.1 Capabilities canonical Phase 1 ship (referencia value-map.md NO duplica)

**Total Phase 1 launch:** 6 Essential + 2 High value = **8 capabilities canonical**

| # | Capability | Tier | Cross-ref value-map.md | Layer 2 sub-features scope |
|---|---|---|---|---|
| **E1** | Manual Operativo vivo modo lectura universal | Essential | §3.1.1 + §3.2.4 | 6 sub-features Phase 1 (KPIs basic · Dashboard ejecutivo basic · Procesos internos · Organigrama de trabajo · Estandarización de negocio · Visualización basic) · NO N2 extended (Phase 1.5) |
| **E2** | Estandarización (foundational hub · 5 sub-features) | Essential | §3.1.1 + §3.2.1 | 5 sub-features completas (Clasificación · Catálogos · Alineamiento · Estructura · Normalización) |
| **E3** | Estructuración de sucursales | Essential | §3.1.1 + §3.2.2 | 2 sub-features (Visual diagram + Datos iniciales) |
| **E4** | WhatsApp Agency interface (read + optional upload onboarding) | Essential | §3.1.1 + §3.2.3 + §3.4 | 4 sub-features Phase 1 (Read access · Selección agente · Optional upload onboarding · Permisos read-only post-onboarding) |
| **E5** | Modos de subir archivos (3 modos) | Essential | §3.1.1 + §3.2.7 | 3 modos completos (Modo 1 CSV/Excel/PDF · Modo 2 captura manual · Modo 3 foto OCR) |
| **E6** | High-touch onboarding founder-led 90 días | Essential | §3.1.1 + §3.2.8 | 5 sub-features (Levantamiento on-site · Setup técnico · Captura baseline · Capacitación · Llamadas quincenales 90 días) |
| **H1** | Organigrama de personal (roles + permisos básicos) | High value | §3.1.1 + §3.2.6 | 1 sub-feature (Definición roles y permisos) · NO N4 job descriptions completas (Phase 1.5) |
| **H2** | Mapa de procesos internos (diagrama de flujo basic) | High value | §3.1.1 + §3.2.5 | 2 sub-features (Diagrama de flujo · Categorización 3 áreas) · NO N3 detailed (Phase 1.5) |

### 3.2 Phase 1.5 deferred (enumeration only · detail en value-map.md §3.1.2)

Capabilities deferred Q4 2026 / Q1 2027 post-Cohort 1 Mes 3 data:

- **N1** Dashboard inicial (Panorama del negocio · Onboarding Status · Sugerencias)
- **N2** Manual Operativo extended features (Actualizaciones · Alertas y sugerencias · Visualización avanzada)
- **N3** Mapa de procesos detailed features (chat agente especializado · descripción detallada)
- **N4** Organigrama job descriptions completas
- **N5** Training portal para nuevos empleados (TIER 2B original)

### 3.3 Phase 2 future (enumeration only · detail en value-map.md §3.1.3)

Capabilities future Q3-Q4 2027 · hypothesis subject to Cohort 1 learnings:

- **F1** Inventario dinámico (real-time tracking)
- **F2** Carga de items a inventario automatizada
- **F3** Carga + trackeo de información de proveedores
- **F4** Costos automatizados (variance detection data-driven)
- **F5** Agentes especializados (costos · manejo inventario · manejo proveedores)
- **F6** Agentes cumplimiento fiscal/sanitario automáticos
- **F7** Integración POS API (CONTPAQi · Aspel · SoftRestaurant · PoloTab — gating del contable)

---

## 4. Acceptance criteria per capability

> Operational *"ready to ship"* definition por cada Phase 1 capability. Done = checkable. NO subjective interpretation.

### 4.1 E1 Manual Operativo

| Criterion | Done definition |
|---|---|
| Read access universal funcional | 6 roles tested: dueño · gerente · chef · contable · cocineros · empleados todos pueden read sin error |
| 6 sub-sections operacionales | KPIs basic · Dashboard ejecutivo basic · Procesos internos · Organigrama de trabajo · Estandarización de negocio · Visualización basic · todos rendered |
| Data updates en tiempo real | When source data changes (e.g., recetario updated en E2) · Manual Operativo reflects change <30 segundos |
| Searchable | Search funcional dentro de Manual Operativo · returns relevant results |
| Mobile-friendly | Funcional en mobile (per posicionamiento §4 diferenciador #6 architecture) |
| Permission model implementado | Universal read + granular write controlled separately · tested con 3+ usuarios |

### 4.2 E2 Estandarización (foundational hub)

| Criterion | Done definition |
|---|---|
| 5 sub-features operacionales | Clasificación · Catálogos · Alineamiento · Estructura · Normalización · todos funcionales independientemente |
| Catálogos maestros funcionales | Insumos · recetas · proveedores · all populable + editable |
| Unidades equivalencias funcional | Conversion entre unidades (kg ↔ lb · L ↔ gal · etc.) tested |
| Data ingestion desde E5 | Raw data desde 3 modos upload (CSV · manual · foto OCR) procesable a structured catálogos |
| Data provision a downstream | E1 · E4 · H1 · H2 consume structured data desde E2 sin error |
| Normalization rules documented | Internal documentation de cómo se decide canonical naming · duplicate detection · etc. |

### 4.3 E3 Estructuración de sucursales

| Criterion | Done definition |
|---|---|
| Visual diagram funcional | UI que muestra estructura jerárquica de sucursales |
| Datos iniciales por sucursal | Nombre · dirección · datos fiscales · tipo de operación · captured + editable |
| Hierarchical view operacional | Multi-sucursal context navegable (sucursal → área → categoría) |

### 4.4 E4 WhatsApp Agency interface

| Criterion | Done definition |
|---|---|
| WhatsApp Business API integration funcional | Operator/manager/chef pueden enviar mensajes a Zenet vía WhatsApp · receive responses |
| Read access — query agents funcional | Consultas via WhatsApp returnable (recetas · inventario · procesos) |
| Selección de agente especialista funcional | UI WhatsApp permite elegir agente para conversation |
| Optional upload onboarding funcional | Operador puede subir recetario · inventario · datos iniciales vía WhatsApp |
| Permisos read-only post-onboarding | Después de onboarding completado · WhatsApp es primarily read access · write limitado |
| Multi-tenant isolation | DP1 NO ve data de DP2 · validated |

### 4.5 E5 Modos de subir archivos

| Criterion | Done definition |
|---|---|
| Modo 1 CSV/Excel/PDF batch funcional | Upload archivo · validation · import to Zenet sin error |
| Modo 2 captura manual funcional | Web/app form-based entry funcional para data items |
| Modo 3 foto OCR funcional | Tomar foto de factura · Zenet OCR + extract + reconcile validation accuracy ≥85% |

### 4.6 E6 High-touch onboarding founder-led

| Criterion | Done definition |
|---|---|
| Founder bandwidth committed | Alan calendar bloqueado 90 días per DP onboarding |
| Levantamiento operativo on-site | Visita Alan al restaurant programada + observación de procesos |
| Setup técnico inicial | 3 modos upload configurados + WhatsApp pairing + agente routing setup |
| Datos baseline captured | Recetario inicial · inventario inicial · org structure · uploaded a Zenet |
| Capacitación inicial al equipo | Equipo entrenado en WhatsApp interaction + Manual Operativo navigation + upload modes |
| Llamadas quincenales 90 días committed | 6 llamadas agendadas (cada 2 semanas) durante 90 días gratis |

### 4.7 H1 Organigrama de personal

| Criterion | Done definition |
|---|---|
| Roles canonicos definidos | Dueño · Gerente sucursal · Chef · Contable · Cocineros · Empleados · todos en system |
| Permission matrix operacional | Per role permission level (read/write/admin) configured + enforced |
| Foundational para Manual Operativo permission model | E1 universal read + granular write driven por permissions de H1 |

### 4.8 H2 Mapa de procesos internos

| Criterion | Done definition |
|---|---|
| Diagrama de flujo basic funcional | Operador puede crear · editar · visualizar diagrama de flujo de procesos |
| Categorización funcional | 3 áreas (Preparación de alimentos · Servicio al cliente · Inventarios) categorizables |

---

## 5. Scope boundaries — IN vs OUT explicit

> Boundary management discipline · scope creep occurs cuando *"OUT"* feature emerge como *"essential"* mid-development. Response: defer OR cut · NOT extend timeline.

| Capability | IN Phase 1 (ship) | OUT Phase 1 (deferred) |
|---|---|---|
| **E1 Manual Operativo** | 6 sub-sections basic (KPIs · Dashboard ejec basic · Procesos · Organigrama · Estandarización · Visualización basic) | N2: Actualizaciones · Alertas y sugerencias · Visualización avanzada → Phase 1.5 |
| **E2 Estandarización** | 5 sub-features completas | (no scope cuts · capability completa) |
| **E3 Estructuración sucursales** | Visual diagram + datos iniciales | Cross-sucursal real-time data → Phase 2 (F1 inventario dinámico integration) |
| **E4 WhatsApp Agency** | Read + selección agente + optional upload onboarding | Full operational write (real-time data entry · approvals · alerts) → Phase 2 |
| **E5 Modos upload** | 3 modos completos (CSV/Excel · captura manual · foto OCR) | POS API integration → Phase 2 (F7) |
| **E6 High-touch onboarding** | 90-day founder-led INCLUIDO en subscripción | Scale-out de high-touch post-Series Seed (Head of CS · NOT founder bandwidth) |
| **H1 Organigrama** | Roles + permisos básicos | N4: Job descriptions completas → Phase 1.5 |
| **H2 Mapa de procesos** | Diagrama de flujo basic + categorización (3 áreas) | N3: Chat agente especializado + descripción general detallada → Phase 1.5 |

### 5.1 Boundary management discipline

- **Pre-launch (semanas 1-8 dev):** scope freeze 2 semanas antes de launch · NO new features post-freeze
- **During launch (Mes 1-3 Cohort 1):** focus en Strong fits · NO new features mid-Cohort · document gaps for Phase 1.5 evaluation
- **Post-Cohort 1 Mes 3:** planned Phase 1.5 scope refresh con DP behavioral data

---

## 6. Scope decisions log

> Chronicle de key decisions con rationale + alternatives rejected. Future contributors entienden por qué ciertas decisions se tomaron.

### D1 — Pure subscription model · NO setup fee (2026-05-22)

- **Decisión:** modelo comercial pure subscription + 90-day minimum + annual prepay · sin setup fee separado
- **Alternativa rechazada:** Setup fee $10-15K + SaaS subscription
- **Rationale:** preserva agency-as-SaaS framing · single commercial decision · Mexican SMB psychology friendly · pure SaaS ARR investor narrative
- **Implication scope:** high-touch onboarding (E6) INCLUIDO en subscripción · NOT separate revenue line
- **Cross-ref:** programa-design-partners.md v1.1 §14

### D2 — WhatsApp Agency read + optional upload Phase 1 (2026-05-23)

- **Decisión:** WhatsApp Phase 1 (E4) = read access + optional upload para onboarding (recetario · inventario)
- **Alternativa rechazada:** read-only Phase 1 (upload solo Phase 2)
- **Rationale:** preserva diferenciador #6 posicionamiento · reduces friction operator onboarding · optional design respects operator preference
- **Implication scope:** E4 Phase 1 includes upload functionality · adds dev scope vs read-only
- **Cross-ref:** value-map.md §3.4 WhatsApp capabilities matrix

### D3 — Move 5 features a Phase 1.5 deferred (2026-05-25)

- **Decisión:** dashboard inicial (N1) · MO extended (N2) · MdP detailed (N3) · organigrama job descriptions (N4) · training portal (N5) → Phase 1.5
- **Alternativa rechazada:** include todo en Phase 1 launch
- **Rationale:** Phase 1 timeline 2-3 meses realistic · scope creep risk si todo incluido · Phase 1.5 emergent post-Cohort 1 signal
- **Implication scope:** Phase 1 scope = 8 capabilities (NOT 13)
- **Cross-ref:** value-map.md §3.1.2

### D4 — Phase 2 features list explícito (2026-05-25)

- **Decisión:** Phase 2 = F1 inventario dinámico · F2 carga items · F3 trackeo proveedores · F4 costos automatizados · F5 agentes especializados · F6 cumplimiento · F7 POS API integration
- **Alternativa rechazada:** Phase 2 vago *"más features"*
- **Rationale:** explícito hace trajectory clear · investor pitch friendly · Cohort 1 expectation setting honest
- **Implication scope:** Phase 1 scope NO incluye estos features · honest framing required en sales motion
- **Cross-ref:** value-map.md §3.1.3

### D5 — Essential → nice-to-have ranking principle (2026-05-25)

- **Decisión:** ranking principle aplicado cross-sections value-map.md · MVP scope hereda
- **Alternativa rechazada:** flat list sin ranking
- **Rationale:** scope decisions visibles · Kano model aligned · TIER framework consistent
- **Implication scope:** dentro de Phase 1, 6 Essential (must-ship · NEVER cut completamente) + 2 High value (ship if timeline allows · acceptable cut order H2 → H1 → E3 → E6 scale-down)
- **Cross-ref:** value-map.md §2.4

### D6 — E2 Estandarización como foundational hub (2026-05-26 · clarification)

- **Decisión:** E2 Estandarización tiene dual role en dependency graph — recibe data raw desde E5 (input) + provee structured data a E1+E4+H1+H2 (output)
- **Alternativa rechazada (original outline):** E2 representado dos veces en dependency graph como entities separadas
- **Rationale:** clarity en engineering handoff · single source of truth · evita confusion de implementation
- **Implication scope:** E5 priority #1 en critical path (sin ingestion · NO data que normalize) · E2 priority #2 (foundational hub) · downstream order depends
- **Cross-ref:** §7.3 dependency risk

---

## 7. Risk management

### 7.1 Scope creep risk

**Scenario:** operador OR founder OR investor identifies feature *"crítica"* mid-development que NO está en Phase 1 scope.

**Mitigation framework:**

| Phase del project | Response |
|---|---|
| Pre-launch (semanas 1-8 dev) | Scope freeze 2 semanas antes de launch · NO new features post-freeze |
| During launch (Mes 1-3 Cohort 1) | Focus en Strong fits · NO new features mid-Cohort · document gaps |
| Post-Cohort 1 Mes 3 | Planned Phase 1.5 scope refresh · evaluate new features con DP data |

**Anti-pattern:** *"solo añadimos esta feature pequeña"* · es scope creep disfrazado. Decision rule: si feature NO está en value-map.md §3.1.1 OR §3.1.2 ya documented · NOT entra Phase 1 mid-development.

### 7.2 Scope cut risk

**Scenario:** dev team timeline pressure forces drop de feature Essential.

**Priority order canonical (NEVER cut to NEVER cut last):**

1. **E2 Estandarización** (foundational hub · NEVER cut)
2. **E1 Manual Operativo** (sin esto · NO subscription value) — NEVER cut
3. **E4 WhatsApp Agency** (diferenciador #6 · sin esto · NO ships) — NEVER cut
4. **E5 Modos upload** (sin ingestion · NO data que normalize) — NEVER cut
5. **E6 High-touch onboarding** (founder-led · acceptable scale-down NOT eliminate)
6. **E3 Estructuración sucursales** (acceptable temporary manual workaround)
7. **H1 Organigrama** (defer job descriptions · roles + permisos solo)
8. **H2 Mapa de procesos** (basic diagrama OK · acceptable cut last)

**Acceptable cut order si timeline pressure:** H2 first → H1 second → E3 third → E6 scale-down (NOT eliminate · reduce hours/week) fourth.

**NEVER cut:** E1 · E2 · E4 · E5 (las 4 más críticas · sin alguna de estas · launch NO funciona).

### 7.3 Dependency risk

**E2 Estandarización es hub central** con dual role:

```
                E5 Modos upload
        (CSV · Excel · captura · foto OCR)
                       │
                       │ raw data
                       ↓
        ┌──────────────────────────────┐
        │       E2 Estandarización     │
        │   (5 sub-features:           │
        │    Clasificación · Catálogos │
        │    · Alineamiento ·          │
        │    Estructura · Normalización)│
        └──────────────────────────────┘
                       │
        ┌──────────────┼──────────────┬──────────────┐
        │              │              │              │
        ↓              ↓              ↓              ↓
   E3 Estructuración  E1 Manual     H1 Organigrama  H2 Mapa
   sucursales         Operativo     (roles +        procesos
   (context org)      (read access  permisos)       (diagrama
                       universal)                    visual)
                              │
                              ↓
                       E4 WhatsApp Agency
                       (consume backend
                        E1+E2 via queries)
                              │
                              ↓
        Operador · Gerente · Chef · Contable interaction
                              │
                              ↓
                       E6 High-touch
                       onboarding founder
                       (humanly enables
                        all above durante
                        90 días)
```

**Critical path (real):** E5 → E2 → E1 → E4. Sin esta secuencia funcional · NO ships.

**Dependency risks:**

- Si E5 NOT funcional → E2 NO recibe data raw → nada downstream funciona
- Si E2 NOT funcional → E1+E4+H1+H2 reciben unstructured data → todo downstream incoherent
- Si E1 NOT funcional → E4 NO tiene backend que query → WhatsApp inutil
- Si E4 NOT funcional → diferenciador #6 perdido · launch competitivamente weak

### 7.4 Cohort 1 reveals critical gap (Mes 1 emergency)

**Scenario:** primer DP en Sesión 1 OR Mes 1 usage identifies Pain crítico que Phase 1 NO covers.

**Response framework:**

1. **Document gap** (NOT auto-add to Phase 1 mid-Cohort)
2. **Validate gap** con 2-3 additional DPs (avoid single-source addiction)
3. **If validated** (>3 DPs): add to Phase 1.5 priority OR Phase 2 si architectural
4. **If NOT validated** (1-2 DPs): note as edge case · monitor

**Anti-pattern:** add feature immediately a Phase 1 mid-Cohort · destroys scope discipline + Cohort 1 sample integrity.

---

## 8. Engineering handoff context

> Product Strategy scope · NOT engineering implementation specs. Production repo handles technical detail (architecture · APIs · code · data models · tests).

### 8.1 Capability priority order canonical

For dev team sequencing recommendation:

| # | Capability | Por qué este order |
|---|---|---|
| **1** | E5 Modos upload | Sin ingestion · no hay data que normalize · CRITICAL PATH start |
| **2** | E2 Estandarización (foundational hub) | Normaliza data de E5 · provee a todos los downstream · CRITICAL PATH |
| **3** | E1 Manual Operativo | Read access universal · consume E2 · CRITICAL PATH |
| **4** | H1 Organigrama | Permission model · consume E2 · enables E1 access control |
| **5** | E3 Estructuración sucursales | Org context · paralelizable con H1 después de E2 |
| **6** | E4 WhatsApp Agency | Interfaz · consume E1+E2 backend · CRITICAL PATH (sin este · NO diferenciador #6) |
| **7** | H2 Mapa de procesos | Visual designer · puede paralelizar tarde · acceptable cut last |
| **8** | E6 High-touch onboarding | Operational + founder bandwidth · enables todo lo anterior con DPs · NOT pure dev work |

**Critical path real:** E5 → E2 → E1 → E4 (sin este orden funcional · NO ships).

### 8.2 User flow critical paths

3 user flows que Phase 1 debe support end-to-end:

#### Flow 1 — Onboarding (Day 1-30)

```
1. Founder visit on-site (E6)
   ↓
2. Setup 3 modos upload (E5)
   ↓
3. Operator uploads baseline data (recetario · inventario)
   - via web (Modo 1 OR 2)
   - OR via WhatsApp (E4 optional upload)
   ↓
4. E2 normalizes uploaded data → catálogos foundational
   ↓
5. E1 Manual Operativo populated automatically con E2 data
   ↓
6. Equipo capacitado en WhatsApp interaction + MO navigation (E6)
   ↓
7. Org structure captured (E3) + roles configured (H1)
   ↓
8. Mapa de procesos diseñado por gerente (H2)
   ↓
9. Onboarding completed · subscription ongoing
```

#### Flow 2 — Daily use (Day 30+)

```
1. Gerente consulta status sucursal vía WhatsApp (E4)
   ↓
2. WhatsApp routes a agente specialist (E4)
   ↓
3. Agente queries Manual Operativo backend (E1+E2)
   ↓
4. Response returned vía WhatsApp
   ↓
5. If data update needed → operator uploads via 3 modos (E5)
   ↓
6. E2 normalizes new data → E1 updates real-time
```

#### Flow 3 — Mes 3 conversion (Day 60-90)

```
1. Founder Sesión 1 check-in con operador (E6 quincenal call)
   ↓
2. Review data captured + insights (E1 + E2)
   ↓
3. Sesión 2 presentación continuación subscripción (heredado programa-design-partners.md §7.2)
   ↓
4. Operator decision: continuar OR salir
   ↓
5. If continuar: transition a paid subscription · founder bandwidth scale-down
6. If salir: exportable artifacts + clean disconnect
```

### 8.3 Anti-specifications (Product Strategy NO dicta)

| NO specifies | YES specifies |
|---|---|
| Programming language | Functional capability scope |
| Framework choice (Next.js · React · Vue · etc.) | Acceptance criteria |
| Database choice (Postgres · MySQL · etc.) | User flow critical paths |
| UI library (Tailwind · MUI · etc.) | Permission model |
| Cloud provider (AWS · GCP · Vercel · etc.) | Phase boundaries (IN vs OUT) |
| API design (REST · GraphQL · etc.) | Multi-tenant requirement |
| Code architecture (monolith · microservices · etc.) | Mobile-friendly baseline |
| Testing framework | Performance + security baselines |

**Rationale:** dev team has implementation freedom · product scope ≠ engineering spec. Production repo CLAUDE.md handles implementation specs.

### 8.4 Cross-reference production repo

- Technical specs (architecture · APIs · data models · 17 tablas · 8 AI agents · etc.) viven en production repo (CLAUDE.md §9)
- This doc references production repo como **implementation source** · NOT competes con él
- Cuando este doc dice *"E1 Manual Operativo modo lectura universal"* · production repo dice *"User model con role-based access control via X auth library"*

### 8.5 Performance + security baseline minimums

- **LFPDPPP 2025 compliance baseline** (aviso de privacidad · encryption en transit + at rest · access logs · sujeto a heredado industry 08 §10.1)
- **WhatsApp Business API integration estándar** (Meta-approved BSP integration · webhook reliability)
- **Multi-tenant data isolation** (DP1 NO ve data de DP2 · enforced at database level)
- **Mobile-friendly** (per WhatsApp uso #3 architecture · NOT desktop-only · responsive design)
- **Uptime baseline** (Phase 1 acceptable: 99% · escalable a 99.9% post-Series Seed)

---

## 9. Phase 1 launch readiness criteria

> Objective checklist para *"ready to launch Q3 2026 con Cohort 1"*. Go/No-Go decision based en criteria objective · NOT subjective.

### 9.1 Capability checklist

- [ ] **E1 Manual Operativo** · 6 sub-sections operacionales + permission model + searchable + mobile-friendly
- [ ] **E2 Estandarización** · 5 sub-features completas + catálogo maestro + unidades equivalencias + ingestion desde E5 + provision a downstream
- [ ] **E3 Estructuración sucursales** · visual diagram + datos iniciales + hierarchical view
- [ ] **E4 WhatsApp Agency** · WhatsApp Business API integration + read + selección agente + optional upload onboarding + multi-tenant isolation
- [ ] **E5 Modos upload** · 3 modos funcionales (CSV/Excel/PDF · captura manual · foto OCR ≥85% accuracy)
- [ ] **E6 High-touch onboarding** · founder bandwidth committed 90 días + sub-features 1-5 ready
- [ ] **H1 Organigrama** · roles + permisos básicos + permission matrix
- [ ] **H2 Mapa de procesos** · diagrama de flujo basic + categorización 3 áreas

### 9.2 Integration + security checklist

- [ ] WhatsApp Business API integration funcional + tested end-to-end
- [ ] 3 modos upload integration validated (incluyendo Modo 3 OCR accuracy)
- [ ] LFPDPPP compliance baseline (aviso de privacidad · encryption · access logs · industry 08 §10.1 compliance)
- [ ] Multi-tenant data isolation validated (NO data leak entre DPs)
- [ ] Permission model validated (universal read · granular write · per role enforcement)
- [ ] Mobile-friendly across capabilities (responsive design tested)
- [ ] Uptime baseline 99% Cohort 1 minimum

### 9.3 Operational readiness checklist

- [ ] **Onboarding flow tested end-to-end** (founder + dev internal preview)
- [ ] **5 design partners signed acuerdo-pilot** (heredado programa-design-partners.md §15)
- [ ] **Sales motion documented** (`04-go-to-market/02-sales-motion-three-session-demo.md` ready)
- [ ] **Outreach templates ready** (`04-go-to-market/01-design-partner-outreach.md` + `03-vp-statement-compressed.md` Layer 3 templates)
- [ ] **Founder calendar committed** 90-day high-touch availability for Cohort 1
- [ ] **WhatsApp directo founder** durante 90 días committed

### 9.4 Documentation readiness checklist

- [ ] Operator onboarding guide (qué esperar Days 1-30)
- [ ] WhatsApp interaction guide (cómo consultar agentes · cómo upload)
- [ ] Permission model documentation (per role · qué puede hacer)
- [ ] Support escalation guide (cuándo escalar al founder)

### 9.5 Go/No-Go criteria

| Decision | Criteria |
|---|---|
| **GO** | All 8 capabilities + integration/security + operational + documentation checklists ✅ |
| **No-Go (hard)** | ANY Essential capability (E1-E6) functionally incomplete · defer launch 2-4 weeks |
| **Soft-Go (acceptable)** | High value (H1+H2) functionally incomplete · launch acceptable · H1+H2 ship within 30 days post-launch |
| **No-Go (operational)** | 5 design partners NOT signed acuerdo-pilot OR founder bandwidth NOT committed · defer until operational ready |

**Decision authority:** Alan (founder) en checkpoint final pre-launch · NOT delegated.

---

## 10. Hipótesis abiertas + validation triggers

> 7 hipótesis específicas del MVP scope · validation triggers Cohort 1 Mes 3+ data.

### H-MVP-01 — 8 capabilities ship-able en 2-3 meses

**Hipótesis:** 8 Phase 1 capabilities (E1-E6 + H1+H2) son ship-able en 2-3 meses con dev team current capacity.

**Validation trigger:** Dev team confirms timeline pre-Cohort 1 kickoff Q3 2026. Si timeline slips · scope reduction (mover capabilities a Phase 1.5).

### H-MVP-02 — Phase 1 scope es sufficient para Cohort 1 conversion

**Hipótesis:** Phase 1 standalone value (sin Phase 2 features) entrega conversion rate >40% post-90 días gratis (per customer-profile H-05).

**Validation trigger:** Mes 3 conversion rate Cohort 1. <40% = scope insufficient · acceleration Phase 1.5 needed.

### H-MVP-03 — No critical features need add Mes 1-3 (post-launch stability)

**Hipótesis:** Cohort 1 Mes 1-3 usage NOT reveals critical gap that requires emergency feature add mid-Cohort.

**Validation trigger:** Mes 1-3 DP feedback monitoring. Si ≥2 DPs identify same critical gap NOT in Phase 1 scope · document for Phase 1.5 priority.

### H-MVP-04 — Phase 1.5 prioritization remains valid post-launch

**Hipótesis:** N1-N5 priority order (heredado value-map.md §3.1.2) remains correct post-Cohort 1 Mes 3 data.

**Validation trigger:** Mes 3+ DP feature requests. Reprioritize Phase 1.5 list si DP patterns suggest different order.

### H-MVP-05 — Cohort 1 NO requests Phase 2 features urgent

**Hipótesis:** Cohort 1 DPs Mes 1-3 NO request Phase 2 features (F1-F7) como urgent · acceptan Phase 2 trajectory.

**Validation trigger:** Stage F contable engagement + dueño Mes 3 review feedback. Si Phase 2 features urgent demanded by ≥3 DPs · Phase 2 timeline acceleration needed.

### H-MVP-06 — Critical path execution sin major blockers

**Hipótesis:** Critical path E5 → E2 → E1 → E4 execution sin major engineering blockers que delay launch >2 semanas.

**Validation trigger:** Sprint reviews dev team. Major blocker (>2 weeks delay) = scope cut decision invoked per §7.2.

### H-MVP-07 — Acceptance criteria son sufficient guidance para dev team

**Hipótesis:** Acceptance criteria operacionales §4 son sufficient guidance · NOT require detailed engineering specs adicionales mid-development.

**Validation trigger:** Dev team feedback weeks 1-2. Si dev team blocked por ambiguity en acceptance criteria · refinement needed inline.

---

## 11. Cross-references al research backbone + upstream/downstream docs

### 11.1 Inputs (upstream · primary)

| Source | Cómo se usa en mvp-scope.md |
|---|---|
| **`01-value-map.md` v0.1** | Input PRIMARY · capabilities catalog referenced en §3 · acceptance criteria informed by §3.2 sub-features detail |
| **`02-fit-analysis.md` v0.1** | Strong fits per Pain inform priority + cut order (§7.2) · Phase 1 launch readiness assessment §8.3 informs §9 |
| **`00-customer-profile.md` v0.1.1** | Pains 4 stakeholders inform capability priority + acceptance criteria UX requirements |
| Marco product-strategy v1.1 | Methodology MVP discipline + TIER framework + Phase stages |
| `03-vp-statement-compressed.md` v0.1 | Anti-positions + Phase 1/1.5/2 honest framing consistency |
| User draft 2026-05-25 | Feature list Phase 1 + Phase 2 list adopted |

### 11.2 Outputs (downstream)

| Destination doc | Cómo este doc alimenta downstream |
|---|---|
| **Production repo (engineering)** | Scope canonical + acceptance criteria + critical path priority · NOT specs · NOT architecture |
| **`02-features-y-scope/01-fase-2-roadmap-hipotesis.md`** v0.1 (próximo doc) | Phase 2 features list explícito desde §3.3 · trajectory commitment |
| **`02-features-y-scope/02-feature-prioritization.md`** v0.1 | TIER framework + priority order + cut order |
| **`04-go-to-market/02-sales-motion-three-session-demo.md`** v0.1 (future) | Acceptance criteria informs demo content · launch readiness §9 informs Cohort 1 kickoff timeline |
| **`programa-design-partners.md` v1.1** (cross-workspace) | Cohort 1 launch readiness §9 informs acuerdo-pilot timing + commitments |

### 11.3 Research backbone inputs

| Doc | Lo que aporta |
|---|---|
| Customer 02 JTBD v0.1.1 | Jobs framework underlying capability priority |
| Customer 03 pains v0.5 | Pains backbone for acceptance criteria UX |
| Customer 05 buying process v0.7 | Sales motion sequencing informs §9 operational readiness |
| Customer 06 objeciones v0.5 | Anti-objection acceptance criteria UX informed |
| Industry 08 regulatorio v1.0.1 | LFPDPPP compliance baseline §8.5 |
| Posicionamiento v1.4 §4 diferenciador #6 | WhatsApp uso #3 architecture requirement §8.5 |

---

## 12. Estado del doc + notas finales

### 12.1 Estado del doc

- **Version:** 0.1
- **Research stage:** `discovery-pre-PMF`
- **Last updated:** 2026-05-26
- **Owner:** Alan Bahena
- **Status:** active · primer doc del subfolder `02-features-y-scope/`

### 12.2 Update triggers de este doc específico

- **v0.1 → v0.2 (minor):** dev team feedback acceptance criteria refinement · cross-doc sync (CP/VM/FA updates) · scope adjustment pre-launch
- **v0.1 → v1.0 (significant):** Cohort 1 Mes 3 launch outcomes · critical scope decision change · Phase 1.5 prioritization revision

### 12.3 Próximo doc en sequence

`02-features-y-scope/01-fase-2-roadmap-hipotesis.md` v0.1 — Phase 2 roadmap hypothesis. Toma §3.3 Phase 2 future de este doc + value-map.md §3.1.3 + user draft 2026-05-25 como inputs. Hypothesis-level · subject to Cohort 1 learnings.

### 12.4 Cross-pointers load-bearing

- **`01-value-map.md` v0.1** — capabilities catalog primary input
- **`02-fit-analysis.md` v0.1** — Strong fits + launch readiness assessment
- **`03-vp-statement-compressed.md` v0.1** — anti-positions + Phase framing consistency
- **Marco product-strategy v1.1** — methodology + TIER + Phase stages
- **Production repo CLAUDE.md** — engineering implementation source

### 12.5 Anti-scope explícito

| Información | Por qué NO va aquí | Dónde va |
|---|---|---|
| Capability descriptions detalladas | Duplicate de value-map.md §3 | `01-value-map.md` v0.1 §3 |
| Technical specs (architecture · APIs · code · data models) | Engineering implementation | Production repo CLAUDE.md |
| Sales scripts operacionales | Downstream operational | `04-go-to-market/02-sales-motion-three-session-demo.md` |
| Pricing tiers exact | Deferred | `03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` |
| User stories detalladas | Engineering scope | Production repo |
| Phase 2 roadmap detail | Subfolder sibling | `02-features-y-scope/01-fase-2-roadmap-hipotesis.md` |
| VP statement messaging | Strategy + tactical messaging | `01-propuesta-de-valor/03-vp-statement-compressed.md` |

---

## Notas

- **Origen.** Doc derivado de outline aprobado 2026-05-26 + clarification dual-role E2 (foundational hub) · corrected priority order E5 → E2 → E1 → E4 critical path · adopts engineering-handoff discipline NOT engineering specs.
- **Hypothesis-level disciplina.** Per marco §3, scope decisions labeled · acceptance criteria operacional · launch readiness Go/No-Go objective.
- **Honest framing throughout.** Phase 1 NO over-promises Phase 2 capabilities · acceptance criteria checkable · cut order disciplined.
- **NO duplica value-map.md.** Capabilities referenced via cross-refs · this doc unique value-add es scope decisions + acceptance criteria + boundaries + risk management + engineering handoff.
- **Documento vivo.** Update cadence per marco §8 — trimestral review + ad-hoc cuando Cohort 1 Mes 3+ data dispare insights · OR dev team feedback acceptance criteria refinement.

### Changelog

- **v0.1 (2026-05-26).** Documento base inicial · 12 secciones · MVP scope canonical Phase 1 (6 Essential + 2 High value = 8 capabilities) referenced de value-map.md §3. Acceptance criteria operacional checkable per capability §4. Scope boundaries IN vs OUT explicit table §5. Scope decisions log 6 decisiones canonical (D1-D6) con rationale + alternatives rejected. Risk management framework (scope creep + scope cut + dependency + Cohort 1 emergency) §7. Engineering handoff context NO duplicates engineering specs §8. Phase 1 launch readiness criteria con Go/No-Go gates §9. 7 hipótesis abiertas con validation triggers Cohort 1 §10. Critical path E5 → E2 → E1 → E4 documented · E2 dual-role foundational hub clarification post-user feedback 2026-05-26 incorporated. Cierra primer doc del subfolder `02-features-y-scope/`.

---

*Last updated: 2026-05-26.*
*Next planned update: post Cohort 1 Sesión 1+2+3 launch · OR dev team feedback acceptance criteria refinement · OR major scope decision change · OR Phase 1.5 prioritization revision.*
