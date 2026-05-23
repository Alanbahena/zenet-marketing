# CLAUDE.md — Zenet Strategic Operations

## 1. Project Overview

This is the **founder strategic operations workspace for Zenet**. It centralizes brand foundation, market research, product strategy, go-to-market operations, capital planning, content templates, standard operating procedures, and Claude Code skills that automate recurring strategic and marketing work — organized by discipline into three layers: **Foundation** (brand · research) · **Strategy** (product strategy + GTM + capital) · **Execution** (marketing channels).

This is **not** a software project. It contains documentation, templates, and slash-command skills. The Zenet production software (Next.js + FastAPI + Supabase) lives in a separate repository (see section 9, Data Connections).

**Designed for collaboration between humans and AI agents.** The workspace is structured so that any contributor — Alan, a freelancer, or a Claude Code agent starting from zero — can pick up a strategic or marketing task and execute it consistently with Zenet's brand, voice, and strategy. Every doc declares its purpose in frontmatter; every department follows the same pattern; every strategic decision is documented with a pointer to its source.

**Why "strategic operations" not "marketing":** pre-PMF, founder roles collapse — Alan operates as founder + CEO + product strategist + marketing lead simultaneously. The workspace reflects that reality. At Series A+ when dedicated heads of product / marketing / sales exist, this workspace may split. For now, single source of truth wins over organizational orthodoxy.

**Disciplines this workspace supports (or will support via skills):**

**Foundation layer:**
- Brand strategy, story, voice and tone
- Market research and analysis (industry · customer · competitive · trends · insights)

**Strategy layer:**
- Product strategy (VP design · features · scope · pricing · offer)
- Go-to-market operations (sales motion · outreach · partner ecosystem)
- Capital planning and fundraising (milestone-anchored roadmap · investor pipeline · narrative arc)

**Execution layer:**
- Analytics and reporting
- Email and CRM campaigns
- SEO and content
- Social media content creation

If you're an AI agent reading this for the first time, jump to section 12 ("How to use this project") for a fast start.

---

## 2. Most Recent Work

**As of 2026-05-22:**

- **Workspace identity reframed (Opción A):** de "marketing operations" → **"founder strategic operations"**. CLAUDE.md §1 + §3 + §5 + §6 updated. Razón: pre-PMF Alan ejecuta founder + CEO + product strategy + marketing roles colapsados; estructura refleja realidad operativa. Disciplinas agrupadas en 3 layers: Foundation (brand + research) · Strategy (product strategy + GTM + capital) · Execution (marketing channels).
- **Product Strategy department activado 2026-05-22:** scaffolding completo · 6 subfolders + _archive + _sop + _templates + skills creados. Estructura v0.1 esperada: 16 docs · 6.5-7.5 días de trabajo concentrado.
- **Branding Fase A update en progreso 2026-05-22 (transition checklist Market Research → Branding):**
  - ✅ `vocabulario.md` v1.0 → v1.1 completado — 10 updates (§5.2 agency framing rewrite · §5.4 conceptos propios expandidos · NEW §2.6 Cumplimiento y fiscal · NEW §2.7 Tecnología operativa friendly · §2.1+§2.5 VoC additions · §3 tech additions · §4.4 NEW AI hype prohibidas · §6 traducción · §9 glossary expandido a ~95 entries).
  - ✅ `posicionamiento.md` v1.1 → v1.2 completado — 9 updates (§1 declaración refinada · §3 ICP arquetípico + contable + anti-ICP cultural + buying committee dynamics · §4 diferenciadores reframe a 7 en 3 clusters: estructurales 3 + producto 3 + adopción 1 · §5 mapa competitivo white space declarado + TRUE incumbent reframe "no system at all" + 45 vendors framing + timeline 24-36 meses foreign + 3-5 años incumbent · §6 anti-positions añadidos · §7 pricing arbitrage Lente 2 70-100x + research backbone documental + timing thesis pointer · §8 path fix + fuentes expandidas + changelog).
  - ⏳ Pendiente Fase A: `personalidad-y-arquetipo.md` v1.0 → v1.1.
  - Siguiente arranca Paso 2 Product Strategy después de cerrar Fase A.
- **Subfolder `Market Research and Analysis/_context/03-competitive-analysis/` cerrado v0.1** con 8 docs:
  - 00-marco (v1.0) · 01-mapa competitivo (v0.3) · 02-directos deep dive (v0.2) · 03-indirectos (v0.2) · 04-features-pricing (v0.1) · 05-GTM positioning (v0.1) · 06-adoption/coexistence (v0.1) · 07-defensibility synthesis (v0.1).
  - **5 Perplexity Pro queries integradas** (Q1-Q5 · DeepSearch 2026-05-15/16) · 45 vendors mapped · 14 moats analyzed en doc 07 · 8 matrices comparativas en doc 04 · 11 vendor scripts coexistence/switching en doc 06.
  - **Reframing fundamental v0.1:** moat #1 umbrella reframed como **multi-agent AI specialist agency-as-SaaS** (NOT typical SaaS · NOT pure consulting agency) · 95% Zenet scenarios MX = adoption/coexistence (NOT switching).
- **Subfolders 01-industry-and-market + 02-customer-research** se mantienen v1.0 + v0.1 sin cambios.
- **Draft work pending review:** `_context/05-market-insights/01-vision-plataforma-zenet.md` v0.1 (platform play exploration).
- **Branding** strong v1.0 en tres secciones (strategy, story, voice/tone). Visual identity, design system, examples + guidelines deferred.
- **Brand language update aplicado 2026-05-18:** plural agency framing (*"el producto ES la agencia de agentes especialistas"*) propagado a CLAUDE.md §4 + §7 + §8 + `Branding/_context/01-brand-strategy/posicionamiento.md` (v1.0 → v1.1, §2 Categoría reescrita con 4to componente "Agencia de agentes especialistas" + naming convention). Heredado doc 07 §Apéndice ahora resuelto.
- **Cleanup aplicado 2026-05-18:** frontmatter YAML reparado en `03-competitive-analysis/04-feature-y-pricing-comparative.md` + `05-gtm-y-positioning-comparado.md` (`## name:` → `name:` con cierre `---`).
- **Nuevo doc 2026-05-18:** `05-market-insights/00-por-que-ahora.md` v0.1 — tesis temporal de Zenet (7 secciones: tesis 1 frase + 5 fuerzas cluster narrative · 10 sub-fuerzas + counterfactual histórico 2018/2020/2022 + external validation 4 angles + 6 windows-closing + 6 risks/leading indicators + 7 implicaciones operativas). Síntesis pura sobre research backbone (industry v1.0 + customer v0.1 + competitive v0.1). White space dual-layer framing (global + LATAM) como pivot del argumento. Pendiente v0.2: design partner validation + cifra verification (nearshoring · WhatsApp penetration · vertical AI premium).
- **Other departments** (Analytics, Email/CRM, Product Strategy, SEO/Content, Social Media) remain pending — folders exist, no internal structure yet.

**Next work — pending user decision:** opciones discutidas con Alan 2026-05-18:
- (A) Próximo subfolder Market Research — `04-category-and-trends/` (folder exists empty) o `05-market-insights/` v0.1 draft → v1.0.
- (B) Activar Product Strategy (absorbe Value Proposition).
- (C) Activar SEO/Content o Social Media (aprovecha doc 07 VoC + doc 07 defensibility synthesis + LinkedIn ya activo).
- (D) Activar Analytics and Reporting (foundational pero requiere data sources).
- ~~(E) Aplicar brand language update §Apéndice doc 07~~ ✓ aplicado 2026-05-18.
- (F) Cleanup pendiente restante: decidir destino de `Value Proposition/` folder + `04-category-and-trends/` folder (frontmatter docs 04 + 05 ya reparado 2026-05-18).
- **Recomendación viva 2026-05-18:** activar Social Media (LinkedIn founder voice productizado) como siguiente departamento — research backbone v0.1 + voice principles + 30 verbatims + agency-as-SaaS framing ya disponibles. Validar voz en LinkedIn antes de comprometer a landing/SEO.

---

## 3. Project Status

| Section | Status | Brief |
|---|---|---|
| **— FOUNDATION LAYER —** | | |
| **Branding / 01-brand-strategy** | ✓ Complete v1.0 | Mission/vision/values, positioning, brand promise, archetype |
| **Branding / 02-brand-story** | ✓ Complete v1.0 | Origin story, strategic narrative |
| **Branding / 03-visual-identity** | Pending | Awaiting visual decisions + design system port |
| **Branding / 04-voice-and-tone** | ✓ Complete v1.0 | Voice principles, vocabulary, writing rules |
| **Branding / 05-design-system** | Pending | To be ported from production repo |
| **Branding / 06-application-examples** | Pending | Needs real published outputs to point at |
| **Branding / 07-guidelines** | Pending | Will codify precedent as it accumulates |
| **Branding** — supporting folders (`_sop`, `_templates`, `skills`, `assets`) | Empty | |
| **Market Research / 01-industry-and-market** | ✓ Complete v1.0 | 8 docs cerrados (ver Reference Table sección 13) |
| **Market Research / 02-customer-research** | ✓ Complete v0.1 | 8 docs (etapas, metodología, JTBD, pains, journey, buying, objeciones, VoC). 19 queries Perplexity integradas. Verbatim library de 30 entries en doc 07 |
| **Market Research / 03-competitive-analysis** | ✓ Complete v0.1 | 8 docs (marco, mapa, directos, indirectos, features-pricing, GTM, adoption/coexistence, defensibility). 5 Perplexity queries integradas. 45 vendors mapped. 14 moats analyzed en doc 07 synthesis. Agency-as-SaaS framing reframe |
| **Market Research / 05-market-insights** | 🚧 Active v0.1 | 2 docs: `00-por-que-ahora.md` v0.1 (tesis temporal) + `01-vision-plataforma-zenet.md` v0.1 (platform play exploration) |
| **— STRATEGY LAYER —** | | |
| **Product Strategy / 00-marco-y-metodologia** | 🚧 Scaffolded · pending v1.0 | Methodology choices (VPD + JTBD + Kano) · versioning convention. Next: redactar marco doc |
| **Product Strategy / 01-propuesta-de-valor** | 🚧 Scaffolded · pending v0.1 | 4 docs: customer profile · value map · fit analysis · vp statement compressed |
| **Product Strategy / 02-features-y-scope** | 🚧 Scaffolded · pending v0.1 | 3 docs: MVP scope · Phase 2 roadmap hipotesis · feature prioritization |
| **Product Strategy / 03-oferta-y-pricing** | 🚧 Scaffolded · pending v0.1 | 3 docs: design partner offer · pricing tiers · commercial terms |
| **Product Strategy / 04-go-to-market** | 🚧 Scaffolded · pending v0.1 | 4 docs: GTM playbook · outreach · sales motion · channel/partner strategy |
| **Product Strategy / 05-capital-y-fundraising** | 🚧 Scaffolded · pending v0.1 | 1 doc: funding roadmap + milestones (single dense doc, splittea post pre-seed close) |
| **Product Strategy / 06-experience-y-roadmap** | Pending | Import desde production repo (3-phase user experience) |
| **— EXECUTION LAYER —** | | |
| **Analytics and Reporting** | Pending | |
| **Email and CRM** | Pending | |
| **SEO and Content** | Pending | |
| **Social Media Content Creation** | Pending | |
| **— SHARED —** | | |
| **Root `_context/`** | Empty | For shared cross-department context (TBD) |

**Strategic posture (current):**

- **Branding foundation is enough to operate.** No new branding docs unless real published outputs accumulate (then `06-application-examples`) or visual identity decisions firm up (then `03-visual-identity` + `05-design-system`).
- **Market Research subfolders 01 + 02 + 03 form the research backbone.** Subfolder 01 (industry-and-market) is canonical at v1.0. Subfolder 02 (customer-research) cerró v0.1 — `discovery-pre-PMF` etapa declarada, scaffold honesto con disciplina de gaps + roadmap de primary research desde design partners. Subfolder 03 (competitive-analysis) cerró v0.1 — 45 vendors mapped + 14 moats analyzed con 4-dim framework (durability × defensibility × strategic value × category creation potential). Triangulación externa via 19 + 5 = **24 queries Perplexity Pro integradas**.
- **Verbatim library doc 07 (subfolder 02) es activo de marketing operations.** 30 entries con metadata estructurada — primer artefacto retrievable para copy, landing, social, sales enablement. Crecerá con design partner interviews.
- **Defensibility synthesis doc 07 (subfolder 03) es activo de strategic decisions + investor pitch.** 14 moats stack ranked + anti-fragility audit + transferability matriz (5-phase expansion) + investor Q&A + what NOT to compete on. Moat #1 umbrella: agency-as-SaaS para restaurant BoH (NEW category creation positioning). Pending Alan approval brand language update §Apéndice.
- **Product Strategy departamento activado 2026-05-22.** Segundo departamento operativo después de Branding + Market Research. Scope v0.1: 6 subfolders (marco · VP · features/scope · oferta/pricing · GTM · capital). Methodology: VPD primary + JTBD overlay + Kano feature prioritization. Pendiente: redactar 16 docs estimados 6.5-7.5 días concentrados con checkpoint approval por subfolder. Trigger v0.1 → v1.0: 3-5 design partners corriendo Mes 3+ con behavioral data.
- **Department activation order is user-driven.** Alan decides which department starts next based on what operational constraint needs to be unlocked first.

---

## 4. Key Strategic Decisions Log

Canonical decisions that any agent or contributor should preserve. Each links to its source doc — read the source for nuance, not just the bullet here.

### Brand and positioning

- **Categoría declarada:** "Sistema operativo cognitivo para back-of-house de restaurantes." Not a POS, not inventory, not ERP, not chatbot. → `Branding/_context/01-brand-strategy/posicionamiento.md`
- **Audiencia primaria:** dueños operadores y gerentes operativos de restaurantes independientes con 1-5 sucursales en crecimiento, en MX y LATAM, casual independiente como cuisine focus. → `Branding/_context/01-brand-strategy/posicionamiento.md`
- **Arquetipo:** Sabio (primario) + Cuidador (secundario). Rol externo: "tu mano derecha operativa" (analogía sous chef). → `Branding/_context/01-brand-strategy/personalidad-y-arquetipo.md`
- **Primer valor:** "Aumentar, no reemplazar." Operadores que buscan reemplazar equipo con IA quedan fuera del scope (`02-definicion-y-alcance.md` exclusión cultural #2). → `Branding/_context/01-brand-strategy/mision-vision-valores.md`
- **Voz operativa:** 9 principios invariables (lenguaje del operador, sin tech, sin hype, voz activa, una idea por oración, concreto sobre abstracto, el porqué no solo el qué, honestidad sobre marketing, "si no se entiende, fallamos"). → `Branding/_context/04-voice-and-tone/voz-y-tono.md`
- **Idioma:** español neutro latinoamericano con anclaje mexicano. **"Tú"** por defecto. "Usted" reservado para legal y prensa. → `Branding/_context/04-voice-and-tone/voz-y-tono.md`
- **Nombre:** **Zenet** (Z mayúscula, resto minúsculas). El producto ES la agencia de agentes especialistas — no se nombran "los agentes IA" como entidades separadas. Son la inteligencia interna del sistema. Zenet detecta. Zenet sugiere. Zenet acompaña — como equipo cognitivo coordinado, sous chef especializado en cada dominio del back-of-house. → CLAUDE.md sección 8 + `Branding/_context/01-brand-strategy/posicionamiento.md` §2 (v1.1, agency-as-SaaS framing aplicado 2026-05-18)

### Scope and ICP

- **Filtro de formalidad mínimo:** RFC con actividad empresarial + CFDI 4.0 regular + 1+ año operando. Sin esos tres, el operador no es ICP. → `Market Research/_context/01-industry-and-market/02-definicion-y-alcance.md`
- **Scope core categórico:** casual independiente formal con BoH propio + identidad propia + cocina protagonista. Modelos operativos equivalentes (gastropub/brewpub con cocina, microcadena profesionalizada, grupo multimarca chef-driven, restaurante chef-driven concesionado en hotel boutique) entran al scope. → `02-definicion-y-alcance.md`
- **Beachhead pre-PMF:** Sub-segmento B = 2-3 sucursales en consolidación operativa, dueño-operador hands-on con gerente, recién abrieron 2da sucursal y la operación se rompió. → `04-segmentacion-de-mercado.md`
- **ICP arquetípico:** Carlos Mendoza, dueño-operador 42 años, mariscos en Zona Río Tijuana, 12 años operando, 2 sucursales, abre WhatsApp 60 veces al día. → `05-perfil-de-cliente-ideal.md`
- **Buying committee:** "El chef adopta, el dueño paga, el contador autoriza." Los tres deben estar cubiertos antes del cierre o la venta entra en limbo. → `08-entorno-regulatorio.md` §12

### Geografía y expansión

- **5 fases declaradas:** Fase 1 TJ → Fase 2 BC completa (Mexicali, Ensenada, Rosarito, Tecate, Valle de Guadalupe como caso especial) → Fase 3 operativa (Sonora, Querétaro, Puebla) → Fase 3 bis (Mérida, modelo remoto + partnership obligatorio) → Fase 4 (GDL, MTY, CDMX) → Fase 5 (LATAM con Serie A). → `07-geografia-y-expansion.md` §2
- **Tres modelos operativos de expansión:** Modelo 1 periferia accesible (BC, equipo TJ + viajes Alan), Modelo 2 plaza con consultor partner local (Fase 3 operativa), Modelo 3 plaza remota con partnership obligatorio (Fase 3 bis Mérida y futuro Fase 5). → `07-geografia-y-expansion.md` §16
- **Valle de Guadalupe:** caso especial activable desde Año 1 con regla "abrir la puerta, no salir a tocarla". → `07-geografia-y-expansion.md` §8.2
- **Disciplina de avance entre fases:** por pre-condición medible, no por calendario. (5 design partners + NPS≥40 → Fase 2; 15-25 clientes activos + retención ≥80% → Fase 3 operativa; etc.) → `07-geografia-y-expansion.md` §16.5

### Pricing y comercial

- **Pricing uniforme dentro de MX.** $1,500 MXN/mes/sucursal en Fase 1. Descuentos por etapa (Fase 0 design partners 20-30%), no por plaza. LATAM se evalúa con Serie A. → `07-geografia-y-expansion.md` §17

### Canal y ecosistema

- **La Canasta como apuesta de canal upstream #1.** Distribuidora con cobertura BC + BCS + Sonora, discurso comercial alineado con ICP, institucionalizada en CANACINTRA Ensenada. → `06-estructura-y-ecosistema.md` §4.4
- **CANIRAC TJ como touchpoint institucional accionable más concreto.** Liderazgo Rebeca Aguilar Santuario; Bootcamp GastronomIA con 40 marcas / 203 restaurantes participantes en enero 2026. → `06-estructura-y-ecosistema.md` §7.3
- **Modelo "consultor partner como extensión Zenet":** replica al revés el modelo SoftRestaurant + SYCA TJ. Consultor local entrena, implementa y monetiza su servicio sobre Zenet. Anna Palazuelos, Victor Murguía, Algira Garzón ya validaron cualitativamente. → `06-estructura-y-ecosistema.md` §14, `07-geografia-y-expansion.md` §16.3

### Competitivo

- **Espacio AI-native + BoH-first es defendible mientras Zenet sea primero y más profundo.** No competir frontalmente con POS+inventario (Tier 1 saturado: PoloTab, Parrot, Fudo). Zenet se posiciona como capa cognitiva sobre POS existente. → `02-definicion-y-alcance.md` §4.4
- **Doctrina de plazas grandes:** entrar tarde con caso ancla demostrado, no temprano sin diferenciación. CDMX como última plaza grande, no primera. → `07-geografia-y-expansion.md` §14

### Regulatorio

- **Zenet califica como encargado del tratamiento bajo LFPDPPP 2025** (vigor 21 mar 2025). Tiene obligaciones propias frente a autoridad y titulares — no se escuda en contrato con cliente. → `08-entorno-regulatorio.md` §10
- **Frame de cumplimiento:** Zenet es **facilitador, no certificador**. No es PAC, no es despacho contable, no es UV de Distintivo H, no es asesor legal. → `08-entorno-regulatorio.md` §8.4
- **Fiscalización digital SAT 2026 = palanca #1 de mensajería.** "Data limpia y reconciliada entre POS, inventario y CFDI es defensa frente a auditoría exprés." → `08-entorno-regulatorio.md` §2.8 y §9.4

### Customer research — findings load-bearing (subfolder 02 v0.1)

- **El TRUE incumbent de Zenet NO es Excel ni SoftRestaurant — es "no system at all":** cuaderno + cabeza + balance bancario al cierre como unified financial control system. Verbatim gold de Jaume Romagosa (cliente): *"Yo veo si a final de mes queda dinero en la cuenta, quiere decir que estoy haciendo dinero"*. Reframes positioning entirely: Zenet NO se vende a operadores que "necesitan software" — se vende a operadores que YA tienen un sistema mental y necesitan extenderlo a la sucursal donde no están. → `02-customer-research/07-voice-of-customer.md` V-001 + doc 06 §2.4.1
- **Financial Control Identity ("Yo SOY el sistema"):** el operador NO percibe ausencia de sistema — percibe que él ES el sistema. Cualquier mensaje que implique *"tu negocio no tiene sistema"* es perceived attack on identity. Mensaje correcto: *"Zenet extiende tu sistema a donde tú no estás."* → `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §2.4.1 + doc 07 V-010
- **Data maintenance collapse es el dominant post-firma failure mode** — Bruce Nelson: *"The software isn't broken. The discipline is."* Frame foundational para CS playbook: discipline NO se institucionalizará automáticamente; requires intentional habit formation support (WhatsApp reminders, visual data freshness indicators, scheduled audit calls). → `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §4.6
- **4-stage decay model con Mes 3-6 como hidden risk window:** Novelty Engagement (Mes 1-2) → Routine Degradation (Mes 2-4, el window crítico menos observado) → Silent Coasting (Mes 4-8) → Pre-Cancellation Drift (Mes 8-12). Restaurant BOH cliff es **Mes 6, NO Day 90 SaaS genérico**. CS cadence debe ser bi-weekly Meses 1-2 + Mes 3 full review + monthly thereafter. → `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §4.0
- **Multi-threading 68% vs single-thread 23% (3x conversion lever):** owner + manager + chef + *contable* MUST estar engaged desde Day 1. Single-thread con dueño solo = structural underperformance, NOT optimization preference. → `02-customer-research/05-buying-process-y-criterios-de-decision.md` §10 + doc 06 §5.7
- **Three-session demo structure como sales motion canónica:** Sesión 1 Manager 60-90min (workflow demo) → Sesión 2 Chef 30-45min separada (recetario + augmentar criterio) → Sesión 3 Owner+Manager 20-30min (ROI + cierre). *Contable* parallel track desde Stage C. → `02-customer-research/05-buying-process-y-criterios-de-decision.md` §3
- **Sales cycle 8 stages declarado:** Lead → Discovery → Demo 1 (Manager) → Demo 2 (Chef) → Demo 3 (Owner) → *Contable* engagement (parallel) → Negociación + pilot agreement → Cierre + onboarding kickoff. 3-lane timing model: Fast 4-8 sem / Standard 8-16 sem / Slow 16-30+ sem. → `02-customer-research/05-buying-process-y-criterios-de-decision.md` §3 + §8.4
- **Pricing $1,500 MXN positioned as lower premium tier mexicano** (Bistrosoft Pro $1,599, PoloTab $1,490, Fudo Pro $1,050). Tiered structure Fase 1: Básico $1,200 / Pro $1,500 / Multi-Sitio $1,800 +IVA. Mexican negotiation ritual: 5-10% discount expected pero NO heavy discounting (Year 1 churn lever). → `02-customer-research/05-buying-process-y-criterios-de-decision.md` §5.2 + §5.4
- **Zenet Fase 1 manual POS upload (NOT API):** Modo 1 CSV/Excel/PDF batch + Modo 2 manual capture + Modo 3 photo + OCR. POS API integration es Fase 2+. Demo strategy operativa: pedir 1 día antes — *"Mándame foto de 5 facturas + lista de tus 10 recetas más vendidas"* — converts demo de generic show-and-tell a his-numbers-displayed. → `02-customer-research/04-customer-journey-detallado.md` §3.6.7
- **Industria restaurantera como adoption laggard estructural (10-15% globally, 10% Mexico):** 6 structural drivers (economic, operational, talent, cultural, vendor-market, Mexico-specific). 4 industry analog breakthroughs (Clip / Toast / AgTech / Construction). 7 imperativos GTM: zero-training UX, industry fluency, founder visibility, peer evidence, WhatsApp-first CS, multi-threading, in-person evaluation. → `02-customer-research/03-pains-y-workarounds.md` §5.10
- **Mexican-specific retention levers son structurally diferentes:** in-person visits > automated email; founder/senior personal attention > price discount; WhatsApp Business > email; peer reference (operador conocido TJ/BC) > feature demo; CFDI/SAT compliance framing > cost-efficiency. Generic US SaaS playbook will underperform en Mexican context. → `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §4.9
- **LAER framework adaptado a Mexican high-power-distance + non-confrontational + collectivist context.** 9 disarming techniques codificadas + 7 anti-patterns documented (pressure tactics, argument-winning, premature ROI math, vendor self-defense — cf. MarketMan G2 case study). NO peer-reviewed head-to-head data on objection technique effectiveness; benchmark más citable: sistemático vs ad-hoc 10-20% conversion lift (Re:Work). → `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §5
- **Verbatim library — 30 entries v0.1 con metadata estructurada** (V-001 → V-030, 10 gold 🌟 / 13 load-bearing ⭐ / 7 illustrative •). Anti-falsificación rules explícitas (NO inventar, NO compuestos, traducción ES marked NOT replacement). Indices por persona / theme / stage / marketing use-case. Activo declarado: 80%+ de authentic operator language vive en closed channels — design partner interviews TJ/CDMX producirán literatura primaria. → `02-customer-research/07-voice-of-customer.md`
- **5-stage research maturity model declarado para sección 02:** discovery-pre-PMF → design-partner-validation → early-customer-evidence → PMF-and-segmentation → scale-research. Etapa actual: `discovery-pre-PMF`. Trigger de salida hacia etapa 2: 5+ design partners activos + Mes 2 retention signal positivo. → `02-customer-research/00-etapas-y-marco-de-investigacion.md`

### Competitive analysis — findings load-bearing (subfolder 03 v0.1)

- **White space declarado:** AI-native ∩ BoH-first ∩ MX/LATAM active = ∅. Ningún vendor de los 45 mapped combina las 3 dimensiones hoy. → `03-competitive-analysis/01-mapa-competitivo-y-categorias.md`
- **Moat #1 umbrella = Multi-agent AI specialist agency-as-SaaS.** NOT typical SaaS · NOT pure consulting agency · ES "agencia de especialistas AI entregada via SaaS". Cada AI agent = specialist con domain expertise + operator-language fluency. Together forman agency at SaaS pricing power. Esta es la categoría que Zenet crea (NOT competing en POS+AI feature SaaS lane). → `03-competitive-analysis/07-diferenciacion-zenet-y-defensibility.md` §4.1
- **Pricing arbitrage agency-vs-human-team:** $1,500 MXN/mes vs $105K-185K MXN/mes equivalent human specialist team (procurement + costing + forecasting + operations + analytics + compliance + supplier + recipes) = **70-100x discount**. Frame for investor pitch + sales messaging. → doc 07 §4.1.3
- **95% adoption/coexistence vs 5% switching framing (doc 06 reframing fundamental v0.1):** Zenet positioning core = pure BoH AI layer · hardware-agnostic · POS-agnostic · *"trabajamos sobre tu POS, no lo reemplazamos"*. Sales motion debe partir de **additive framing** (NOT replacement). Discovery question primary: *"¿qué sistema usas hoy?"* → identifies scenario (A pure adoption / B POS coexistence / C true switching rare / D *contable* coexistence) → customizes approach. → `03-competitive-analysis/06-switching-dynamics-y-incumbente.md`
- **Asymmetric competitive barriers twin-lens:** Foreign vendor MX entry friction 24-36 meses per country (7-layer language + cultural decoder + GTM rebuild + regulatory + integration + distributor + peer references) + Mexican legacy AI rebuild 3-5 años (capital + talent + architecture constraints). Zenet head start at intersection ÚNICA = **18-36 meses minimum cumulative**. → doc 07 §4.13
- **7-layer language moat (deeper than translation):** (1) Product UI Spanish-MX · (2) Marketing/sales Spanish-MX · (3) Customer support Spanish-MX · (4) Spoken dialect/code (*"hablamos pronto"* · *"mano derecha"*) · (5) Cultural codes (*confianza* · *apechugar* · *cuaderno mental*) · (6) Operator vernacular fluency (VoC library compound asset) · (7) Voice principios operativos + brand authority. Foreign vendors fail layers 4-7 incluso con Spanish toggle. → doc 07 §4.2.2
- **WhatsApp Business uso #3 operational interface como Zenet differentiator unique.** Uso #1 (CS) + uso #2 (sales) son commodities. **Uso #3 (operator interacts con AI agency via WhatsApp — upload facturas · query agents · receive alerts) es novel application MX-native.** Uso #4 (FoH customer-facing chatbot · Fudo) = different lane. → doc 07 §5.4 + `04-feature-y-pricing-comparative.md`
- **Pure BoH AI layer architecture (coexistence-positioned):** hardware-agnostic + POS-agnostic + lives ON top of existing POS. Enables 95% coexistence scenarios. Diferenciador estructural vs POS-first competitors (Toast · PoloTab · Parrot · SoftRestaurant · Sistemas Sierra) y vs hardware-locked (PoloTab terminal · Parrot Pay · Wansoft/Clip ecosystem). → doc 07 §4.3
- **Brand language update aplicado 2026-05-18:** plural agency framing *"el producto ES la agencia de agentes especialistas"* propagado a CLAUDE.md §4 + §7 + §8 + `Branding/_context/01-brand-strategy/posicionamiento.md` §2 (v1.0 → v1.1). El producto ES la agencia de agentes especialistas — cada agente AI es un especialista (procurement, costing, forecasting, supplier relations, recipes, operations, analytics, compliance) entregado al precio de SaaS. → doc 07 §Apéndice (heredado, ahora resuelto)

### Correcciones documentales relevantes

- **K'u'uk (Pedro Evia) cerró sus puertas** — no es referente activo Mérida. El referente activo de la nueva cocina yucateca es Néctar/Huniik (Roberto Solís). → `07-geografia-y-expansion.md` §13.2
- **Mochomos confirmado de origen sonorense** (no cadena CDMX como asumió originalmente doc 02). Modelo "grupo regional escalando nacional" como referencia narrativa. → `07-geografia-y-expansion.md` §10.1

---

## 5. Project Structure

```
claude_code/                                # Root of this workspace
├── CLAUDE.md                               # This file
├── README.md
│
├── _context/                               # Shared cross-department context (root-level, currently empty)
│
# ═══════════════════════════════════════════════════════════════════
# FOUNDATION LAYER — brand foundation + market research
# ═══════════════════════════════════════════════════════════════════
│
├── Branding/                               # Brand foundation
│   ├── _context/
│   │   ├── 01-brand-strategy/              ✓ v1.0
│   │   │   ├── mision-vision-valores.md
│   │   │   ├── posicionamiento.md
│   │   │   ├── promesa-de-marca.md
│   │   │   └── personalidad-y-arquetipo.md
│   │   ├── 02-brand-story/                 ✓ v1.0
│   │   │   ├── origin-story.md
│   │   │   └── narrativa.md
│   │   ├── 03-visual-identity/             pending
│   │   ├── 04-voice-and-tone/              ✓ v1.0
│   │   │   ├── voz-y-tono.md
│   │   │   ├── vocabulario.md
│   │   │   └── reglas-de-redaccion.md
│   │   ├── 05-design-system/               pending
│   │   ├── 06-application-examples/        pending
│   │   ├── 07-guidelines/                  pending
│   │   └── assets/                         empty
│   ├── _sop/                               empty
│   ├── _templates/                         empty
│   └── skills/                             empty
│
├── Market Research and Analysis/
│   ├── _context/
│   │   ├── 01-industry-and-market/         ✓ v1.0 — 8 docs
│   │   │   ├── 01-panorama-de-la-industria.md
│   │   │   ├── 02-definicion-y-alcance.md
│   │   │   ├── 03-tamano-de-mercado.md
│   │   │   ├── 04-segmentacion-de-mercado.md
│   │   │   ├── 05-perfil-de-cliente-ideal.md
│   │   │   ├── 06-estructura-y-ecosistema.md
│   │   │   ├── 07-geografia-y-expansion.md
│   │   │   └── 08-entorno-regulatorio.md
│   │   ├── 02-customer-research/           ✓ v0.1 — 8 docs
│   │   │   ├── 00-etapas-y-marco-de-investigacion.md
│   │   │   ├── 01-metodologia-y-fuentes.md
│   │   │   ├── 02-jobs-to-be-done.md
│   │   │   ├── 03-pains-y-workarounds.md
│   │   │   ├── 04-customer-journey-detallado.md
│   │   │   ├── 05-buying-process-y-criterios-de-decision.md
│   │   │   ├── 06-objeciones-y-fricciones-de-adopcion.md
│   │   │   ├── 07-voice-of-customer.md
│   │   │   └── _archive/
│   │   ├── 03-competitive-analysis/        ✓ v0.1 — 8 docs
│   │   │   ├── 00-marco-y-disciplina-competitive.md
│   │   │   ├── 01-mapa-competitivo-y-categorias.md
│   │   │   ├── 02-competidores-directos-deep-dive.md
│   │   │   ├── 03-competidores-indirectos-y-adyacentes.md
│   │   │   ├── 04-feature-y-pricing-comparative.md
│   │   │   ├── 05-gtm-y-positioning-comparado.md
│   │   │   ├── 06-switching-dynamics-y-incumbente.md
│   │   │   ├── 07-diferenciacion-zenet-y-defensibility.md
│   │   │   └── _archive/
│   │   ├── 04-category-and-trends/         empty (folder exists)
│   │   └── 05-market-insights/             🚧 active v0.1 — 2 docs
│   │       ├── 00-por-que-ahora.md             (v0.1 tesis temporal)
│   │       └── 01-vision-plataforma-zenet.md   (v0.1 platform play draft)
│   ├── _sop/                               empty
│   ├── _templates/                         empty
│   └── skills/                             empty
│
#
# ═══════════════════════════════════════════════════════════════════
# STRATEGY LAYER — product strategy + GTM + capital planning
# ═══════════════════════════════════════════════════════════════════
│
├── Product Strategy/                       # 🚧 Scaffolded 2026-05-22 — pending v0.1 content
│   ├── _context/
│   │   ├── 00-marco-y-metodologia/         pending v1.0 — methodology choices (VPD + JTBD + Kano)
│   │   │   └── _archive/
│   │   ├── 01-propuesta-de-valor/          pending v0.1 — 4 docs (customer profile · value map · fit analysis · vp statement)
│   │   │   └── _archive/
│   │   ├── 02-features-y-scope/            pending v0.1 — 3 docs (MVP scope · Phase 2 roadmap · feature prioritization)
│   │   │   └── _archive/
│   │   ├── 03-oferta-y-pricing/            pending v0.1 — 3 docs (design partner offer · pricing tiers · commercial terms)
│   │   │   └── _archive/
│   │   ├── 04-go-to-market/                pending v0.1 — 4 docs (GTM playbook · outreach · sales motion · channel strategy)
│   │   │   └── _archive/
│   │   ├── 05-capital-y-fundraising/       pending v0.1 — 1 doc (funding roadmap + milestones)
│   │   │   └── _archive/
│   │   └── 06-experience-y-roadmap/        pending — import from production repo (3-phase user experience)
│   │       └── _archive/
│   ├── _sop/                               empty
│   ├── _templates/                         empty
│   └── skills/                             empty
│
# ═══════════════════════════════════════════════════════════════════
# EXECUTION LAYER — marketing channels
# ═══════════════════════════════════════════════════════════════════
│
├── Analytics and Reporting/                # Each pending department follows the same pattern:
├── Email and CRM/                          #   _context/  → reference material
├── SEO and Content/                        #   _sop/      → standard operating procedures
└── Social Media Content Creation/          #   _templates/ → reusable output templates
                                            #   skills/    → Claude Code slash commands
```

### The department pattern

Every department — across Foundation, Strategy, and Execution layers — follows the same internal structure:

| Subfolder | Purpose | What goes inside |
|---|---|---|
| `_context/` | Reference material the department needs | Markdown documents organized by topic, often in numbered subsections (`01-`, `02-`, ...) |
| `_sop/` | Standard operating procedures | Step-by-step guides for recurring department tasks |
| `_templates/` | Reusable output templates | Briefs, decks, copy frameworks, post structures |
| `skills/` | Claude Code slash commands | Markdown files defining `/command-name` workflows |

The `_` prefix marks these as supporting/meta folders. They sort to the top alphabetically and are clearly differentiated from primary content (when primary content exists).

### Three-layer architecture

The workspace organizes work into three layers, each serving a distinct purpose:

| Layer | Departments | Lens |
|---|---|---|
| **Foundation** | Branding · Market Research and Analysis | Strategic ground truth — *who we are* + *what the market is* |
| **Strategy** | Product Strategy (includes GTM + capital planning) | Decisions about *what we build · how we sell · how we fund* |
| **Execution** | Analytics · Email/CRM · SEO/Content · Social Media | Channel-specific operational work — *how marketing reaches customers* |

Pre-PMF, layers blur — Alan operates across all three simultaneously. At Series A+ when dedicated heads exist, layers may correspond to org boundaries.

---

## 6. Conventions

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
type: [brand-strategy | brand-story | voice-and-tone | market-research | etc.]
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
| CLAUDE.md (this file) | English with Spanish quotes when citing canonical brand text |

### Document types (current `type` field values)

- `brand-strategy` — strategic foundation docs (mission, positioning, etc.)
- `brand-story` — biographical and mythological narrative docs
- `voice-and-tone` — voice principles, vocabulary, writing rules
- `market-research` — industry, market, segmentation, ICP, ecosystem, geography, regulatory docs
- `customer-research` — JTBD, pains, journey, buying process, objections, voice-of-customer docs (subfolder 02 de Market Research)
- `competitive-analysis` — competitive mapping, vendor deep dives, feature/pricing comparison, GTM/positioning comparison, adoption/coexistence dynamics, defensibility synthesis (subfolder 03 de Market Research)
- `product-strategy` — VP design (Strategyzer/VPD), features/scope, offer/pricing, GTM operational, capital/fundraising roadmap docs (Product Strategy departamento)

New types will be added as new departments come online (`content-template`, `campaign-brief`, etc.).

### Cuándo crear subfolder nuevo vs nuevo doc vs version bump

Three patterns that govern how content evolves over time:

- **Subfolder nuevo** cuando: dominio genuinamente nuevo · 3+ docs eventuales · ownership dedicada · SOPs/templates propios eventualmente
- **Doc nuevo dentro de subfolder existente** cuando: extensión natural de un dominio · adición complementaria al playbook existente
- **Version bump in-place + `_archive/`** cuando: mismo doc evoluciona con madurez (hypothesis → evidence-based · Fase 1 → Fase 2 → Fase 3). Old version moves to `_archive/` con date prefix; new version reemplaza in place
- **Nunca crear**: folders chronological (`*-fase-2/` · `*-2027/`) · filename versioning (`logo-v2.md`) · duplicación cross-departmental — usa referencias en lugar de duplicar

### Extended frontmatter for customer-research docs

Docs en `02-customer-research/` add un campo extra al frontmatter — `research_stage` — para declarar honestamente la madurez de la evidencia:

```yaml
research_stage: discovery-pre-PMF | design-partner-validation | early-customer-evidence | PMF-and-segmentation | scale-research
```

Default actual para toda la sección: `discovery-pre-PMF`. Transición disciplinada por pre-condición medible (cf. doc 00 §3 + §5).

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

## 7. Working Principles

Meta-rules that apply across all work in this workspace. AI agents and human contributors should treat these as defaults — deviate only with explicit reason.

### On honesty and rigor

- **Mark `[SIN FUENTE PUBLICADA]` rather than invent.** When data isn't available in public sources, declare the gap honestly with a suggestion of how to close it. Never fabricate cifras, dates, or names.
- **Distinguish between estimation, hypothesis, and fact.** Use source labels: `[OFICIAL]`, `[Dato MX casual independiente]`, `[Dato MX sector restaurantero]`, `[Dato local plaza X]`, `[Estimación cualitativa]`, `[SIN FUENTE PUBLICADA]`.
- **Cite source and year inline** — `(Fuente, año)` — for any cifra, date, or named claim. Build the full source list at the end of each doc.

### On scope and depth

- **Don't inflate docs for completeness.** Secondary topics get secondary treatment. A 200-line section on a marginal plaza is not better than a 30-line section on the same plaza.
- **Prefer pointers over duplication.** If information lives in another doc of the workspace, reference it; don't restate it. The exception is canonical summaries (like CLAUDE.md section 8 — Brand quick reference).
- **Hipótesis abiertas y triggers de actualización** are first-class sections in long docs. Declare what you didn't resolve and what would dispatch revisiting it.

### On collaboration

- **Step-by-step approval with Alan.** Never advance to next document or major section without explicit user confirmation. Carryover from production repo: Alan prefers step-by-step approval over autonomous progression.
- **Never auto-commit.** Alan decides when to commit. AI agents propose; Alan disposes.
- **Spanish-language pre-publish check** before any final document is saved: voice principles · vocabulary · mechanics · narrative tests (the four-layer checklist in `reglas-de-redaccion.md` section 8).

### On voice and content

- **Read voice/tone docs before writing user-facing copy.** The voice is operative, not decorative — applying it consistently is the difference between Zenet content and generic SaaS content.
- **Vocabulario.md governs word choice.** Words to use, words to avoid, glossary. Trumps personal preference.
- **El producto ES la agencia de agentes especialistas.** Zenet detecta, sugiere, acompaña — como equipo cognitivo coordinado. No nombramos "los agentes IA" como entidades separadas; son la inteligencia interna del sistema.

### On geographic and market scope

- **Disciplina de avance por pre-condición medible, no calendario.** Don't activate next phase by date — activate by demonstrable PMF, retention, or other concrete trigger (see section 4 decisions log).

---

## 8. The Zenet Brand (quick reference)

Tight summary so any contributor or agent gets oriented in 60 seconds. **Full strategic foundation lives in `Branding/_context/01-brand-strategy/` and `02-brand-story/`. This is a pointer, not a replacement.**

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

Siempre escrito **Zenet** (Z mayúscula, resto minúsculas). El producto ES la agencia de agentes especialistas. No se nombran "los agentes IA" como entidades separadas — son la inteligencia interna del sistema. Zenet detecta. Zenet sugiere. Zenet acompaña — como equipo cognitivo coordinado, sous chef especializado en cada dominio del back-of-house.

### Idioma y mercado

- **Idioma base:** español neutro latinoamericano con anclaje mexicano.
- **Mercado inicial:** Tijuana → Baja California → Noroeste de México → LATAM.
- **Trato por defecto:** "tú" en producto y marketing. "Usted" reservado para legal y prensa.

For the full sources behind this summary, see Reference Table (section 13).

---

## 9. Data Connections

### Zenet production repository

**Path:** `/Users/alanbahena/Library/Mobile Documents/com~apple~CloudDocs/Zenet/02_Producto-y-Tech/Production-software/Zenet/`

The production repo has its own `CLAUDE.md` with full technical and business context: tech stack (Next.js + FastAPI + Supabase + Anthropic Claude), data model (17 tables), product architecture (8 AI agents, 3-phase user experience), business strategy, and the Zenet business context document (`docs/project-strategy/business-context/zenet-business-context-production.md`).

**When marketing work needs technical or product accuracy** (feature names, pricing, capability claims), the production repo is the source of truth — not this workspace.

### Notion (TBD)

Marketing operations live partly in Notion: campaign tracking, content calendar, customer research, market intelligence. Specific URL and access details to be added when Alan documents them.

When relevant Notion content needs to inform marketing tasks here, the practice is to export or summarize it into the appropriate department's `_context/` folder so Claude can reference it without fetching Notion each time.

### LinkedIn

Alan's LinkedIn profile is currently the active marketing channel for Zenet. Founder posts and brand-voice posts (when established) will draw from `Branding/_context/04-voice-and-tone/voz-y-tono.md` section 2.2 for tone modulation guidance.

### Anthropic API

This project uses Claude (Anthropic) for any AI-assisted marketing work. Default model: Claude Sonnet 4.6 (`claude-sonnet-4-6`). Complex strategic reasoning: Claude Opus 4.6 (`claude-opus-4-6`).

---

## 10. Working Agreements

### When to update this CLAUDE.md

Update when:

- A section reaches `✓ Complete` status (move from pending to complete).
- A new department starts (mark as 🚧 In progress).
- A new convention is established that affects how future docs are written.
- A new document type is introduced (add to the `type` field values list).
- A new strategic decision is made that should appear in the decisions log (section 4).
- A new data connection is established (Notion link, etc.).
- A new working principle or working agreement is adopted.

Don't update CLAUDE.md for routine document edits — frontmatter metadata + git history handle those.

### Commits

- **Alan decides when to commit.** Never auto-commit.
- Commit messages: imperative mood, concise. *"Add brand strategy section"*, *"Update positioning with field validation insights"* — not *"Updated some files"*.
- Don't commit `.env` files, credentials, or sensitive client data.
- Don't skip pre-commit hooks (if any get added).

### Adding a new department

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

## 11. Available Skills (slash commands)

This section tracks Claude Code slash commands implemented in `<department>/skills/` folders across the workspace.

**Current state (2026-05-18):** No skills implemented yet. Each department's `skills/` folder is empty.

**Planned skill domains** (in approximate order of likely activation):

- `/research-*` skills for Market Research and Analysis (e.g., research a new plaza, build competitive snapshot, update market sizing).
- `/report-*` skills for Analytics and Reporting (KPI digest, monthly performance summary).
- `/campaign-*` skills for Email and CRM and SEO/Content (campaign brief, content calendar, email sequence).
- `/copy-*` skills for content creation aligned with voice/tone (post draft, founder LinkedIn post, landing copy).
- `/strategy-*` skills for Product Strategy (offer design, value proposition canvas, positioning audit).

**When a skill is added, document it here** with: skill name, department, what it does, expected inputs, expected outputs, source path.

---

## 12. How to use this project

### If you're an AI agent (Claude Code) coming in fresh

1. **Read this CLAUDE.md fully** — it gives you orientation in ~5 minutes. Sections 1, 2, 3, 4 give you state and decisions; section 8 gives you brand foundation; section 13 gives you the path to any specific topic.
2. **For any task touching brand strategy, voice, or content style:** consult the relevant doc in `Branding/_context/` before drafting. Brand quick reference in section 8 is summary, not replacement.
3. **For any vocabulary question:** `Branding/_context/04-voice-and-tone/vocabulario.md` first, then `voz-y-tono.md` for principles.
4. **For market research questions** (sizing, ICP, geography, regulatory, ecosystem): start in `Market Research and Analysis/_context/01-industry-and-market/` — all 8 docs at v1.0.
5. **For customer research questions** (JTBD, pains/workarounds, customer journey, buying process, objections, verbatim language): start in `Market Research and Analysis/_context/02-customer-research/` — all 8 docs at v0.1. For copy/landing/social/sales enablement specifically, the **verbatim library is doc 07** (30 entries con metadata). Recordar: etapa actual `discovery-pre-PMF` — hallazgos directionally well-supported pero NOT validated con design partners todavía.
6. **For competitive intelligence questions** (vendor landscape, moat analysis, GTM comparison, switching/coexistence dynamics, defensibility): start in `Market Research and Analysis/_context/03-competitive-analysis/` — all 8 docs at v0.1. **Doc 07 defensibility synthesis es el doc de referencia** para investor pitch + strategic decisions (14 moats + stack ranking + anti-moats + investor Q&A + what NOT to compete on). **Doc 06 es operational sales playbook** (4 scenarios A/B/C/D + 13 triggers + 11 per-vendor scripts + Mexican cultural dynamics). Recordar: 95% scenarios MX son adoption/coexistence (NOT switching).
7. **For format questions:** `reglas-de-redaccion.md`.
8. **Never guess or improvise.** Point to a source of truth or declare `[SIN FUENTE PUBLICADA]` and ask. Working principles in section 7 govern.
9. **Apply the confirmation behavior:** never advance to next section or document without explicit user OK.

### If you're a freelancer or new contributor

1. Start with this CLAUDE.md for orientation.
2. Read the four brand strategy docs in order: misión-visión-valores → posicionamiento → promesa-de-marca → personalidad-y-arquetipo.
3. Read the brand story (origin-story → narrativa).
4. Skim the three voice/tone docs.
5. If your work touches market context (ICP, scope, geography), skim `02-definicion-y-alcance.md` and `05-perfil-de-cliente-ideal.md`.
6. Ask Alan about anything that's unclear before producing work.

### If you're Alan

This CLAUDE.md is the orientation doc you maintain. Update it when section 3 status changes, when a new strategic decision belongs in section 4, when a working principle or agreement evolves. The decisions log in section 4 is what protects the project from drift across conversations.

---

## 13. Reference table — where to find common things

| What you need | Status | Where to find it |
|---|---|---|
| Mission, vision, values | ✓ active | `Branding/_context/01-brand-strategy/mision-vision-valores.md` |
| Positioning + competitive map | ✓ active | `Branding/_context/01-brand-strategy/posicionamiento.md` |
| Brand promise | ✓ active | `Branding/_context/01-brand-strategy/promesa-de-marca.md` |
| Brand personality and archetype | ✓ active | `Branding/_context/01-brand-strategy/personalidad-y-arquetipo.md` |
| Founder origin story | ✓ active | `Branding/_context/02-brand-story/origin-story.md` |
| Strategic brand narrative | ✓ active | `Branding/_context/02-brand-story/narrativa.md` |
| Voice principles + tone modulation | ✓ active | `Branding/_context/04-voice-and-tone/voz-y-tono.md` |
| Words to use / avoid + glossary | ✓ active | `Branding/_context/04-voice-and-tone/vocabulario.md` |
| Grammar + format rules | ✓ active | `Branding/_context/04-voice-and-tone/reglas-de-redaccion.md` |
| Restaurant industry panorama / mapa del sector restaurantero MX | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/01-panorama-de-la-industria.md` |
| Mercado declarado de Zenet / scope (qué entra, qué no entra, FAQ) | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/02-definicion-y-alcance.md` |
| Tamaño de mercado (TAM/SAM/SOM con sensibilidad y benchmarks) | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/03-tamano-de-mercado.md` |
| Segmentación de mercado (5 sub-segmentos, beachhead, fases de adquisición pre-PMF) | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/04-segmentacion-de-mercado.md` |
| Perfil de cliente ideal (ICP del beachhead, día típico, customer journey, anti-ICP, scoring) | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/05-perfil-de-cliente-ideal.md` |
| Estructura y ecosistema (cadena de valor BoH, roles internos, capas externas, buying committee, hipótesis de canal) | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/06-estructura-y-ecosistema.md` |
| Geografía y expansión (5 fases, criterios de priorización, anatomía TJ, 3 modelos de expansión, pricing uniforme MX) | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/07-geografia-y-expansion.md` |
| Entorno regulatorio (SAT, IMSS/laboral, sanitario/NOM-251, municipal BC, distintivos, calendario, riesgo LFPDPPP 2025 e IA) | ✓ active | `Market Research and Analysis/_context/01-industry-and-market/08-entorno-regulatorio.md` |
| Etapas y marco de investigación de cliente (5-stage research maturity model, etapa actual `discovery-pre-PMF`, tags taxonomy) | ✓ active v1.0 | `Market Research and Analysis/_context/02-customer-research/00-etapas-y-marco-de-investigacion.md` |
| Metodología y fuentes de research (inventario de evidencia, gaps explícitos, plan discovery, criterios de saturación) | ✓ active v0.1 | `Market Research and Analysis/_context/02-customer-research/01-metodologia-y-fuentes.md` |
| Jobs-to-be-done del operador (master job + 7 funcionales + 5 emocionales + 3 sociales + secundarias chef/admin + anti-jobs) | ✓ active v0.1 | `Market Research and Analysis/_context/02-customer-research/02-jobs-to-be-done.md` |
| Dolores y workarounds del operador (5 categorías, mapeo dolor→workaround, costo, foundational research industry tech adoption lag §5.10) | ✓ active v0.4 | `Market Research and Analysis/_context/02-customer-research/03-pains-y-workarounds.md` |
| Customer journey detallado (10 fases pre-awareness → advocacy, multi-stakeholder journeys, churn risk windows, three-session demo) | ✓ active v0.7 | `Market Research and Analysis/_context/02-customer-research/04-customer-journey-detallado.md` |
| Buying process + criterios de decisión (sales cycle 8 stages, WTP $1,500 MXN, deal-breakers, 3-lane timing, Mexican buying patterns) | ✓ active v0.6 | `Market Research and Analysis/_context/02-customer-research/05-buying-process-y-criterios-de-decision.md` |
| Objeciones + fricciones de adopción (catálogo 8 categorías, 4-stage decay model, data maintenance collapse, LAER Mexican-adapted) | ✓ active v0.4 | `Market Research and Analysis/_context/02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` |
| Voice of customer verbatim library (30 entries con metadata, top 10 gold-tier, indices persona × theme × stage × use-case) | ✓ active v0.1 | `Market Research and Analysis/_context/02-customer-research/07-voice-of-customer.md` |
| Marco y disciplina competitive analysis (refresh cadence, source hygiene, anti-falsificación, evidence tags, classification lens) | ✓ active v1.0 | `Market Research and Analysis/_context/03-competitive-analysis/00-marco-y-disciplina-competitive.md` |
| Mapa competitivo + 45 vendors clasificados (categorías A-E + 3-dim threat framework + white space declarado) | ✓ active v0.3 | `Market Research and Analysis/_context/03-competitive-analysis/01-mapa-competitivo-y-categorias.md` |
| Competidores prioritarios deep dive (11 vendors — 4 Direct OPERACIONAL MX + 7 Direct CATEGORIAL foreign references) | ✓ active v0.2 | `Market Research and Analysis/_context/03-competitive-analysis/02-competidores-directos-deep-dive.md` |
| Competidores indirectos y adyacentes (30+ vendors variable depth — incumbents legacy + accounting-adjacencies + Tier Gamma + Sistemas Sierra + Oracle Simphony + radar) | ✓ active v0.2 | `Market Research and Analysis/_context/03-competitive-analysis/03-competidores-indirectos-y-adyacentes.md` |
| Feature y pricing comparative (8 matrices · 20 vendors · MX Readiness 10-factor · POS integration · *contable* integration · contract/trial/guarantees) | ✓ active v0.1 | `Market Research and Analysis/_context/03-competitive-analysis/04-feature-y-pricing-comparative.md` |
| GTM y positioning comparado (10 GTM dimensions · 20 vendors · 14 channel players · consultor partner como extensión Zenet model · Zenet GTM playbook) | ✓ active v0.1 | `Market Research and Analysis/_context/03-competitive-analysis/05-gtm-y-positioning-comparado.md` |
| Adopción, coexistencia y switching dynamics (95% coexistence vs 5% switching · 4 scenarios · 13 triggers · 11 vendor scripts · 6 Mexican cultural dynamics · *contable* gating Stage F) | ✓ active v0.1 | `Market Research and Analysis/_context/03-competitive-analysis/06-switching-dynamics-y-incumbente.md` |
| Diferenciación Zenet y defensibility (14 moats · 4-dim framework · stack ranking · anti-moats · decay timeline · anti-fragility audit · transferability matriz · investor pitch + Q&A · agency-as-SaaS framing) | ✓ active v0.1 | `Market Research and Analysis/_context/03-competitive-analysis/07-diferenciacion-zenet-y-defensibility.md` |
| Tesis temporal Zenet — por qué ahora (5 fuerzas + counterfactual + external validation + windows-closing + risks + operational implications) | ✓ active v0.1 | `Market Research and Analysis/_context/05-market-insights/00-por-que-ahora.md` |
| Visión platform play / análisis estratégico de expansión vertical | 🚧 draft v0.1 | `Market Research and Analysis/_context/05-market-insights/01-vision-plataforma-zenet.md` |
| Visual identity (logo, colors, typography) | pending | `Branding/_context/03-visual-identity/` |
| Design system snapshot | pending | `Branding/_context/05-design-system/` |
| Application examples (real published outputs) | pending | `Branding/_context/06-application-examples/` |
| Brand guidelines (precedent codified) | pending | `Branding/_context/07-guidelines/` |
| Production software context | external | Production repo: `/02_Producto-y-Tech/Production-software/Zenet/CLAUDE.md` |
| Business context / market validation | external | Production repo: `docs/project-strategy/business-context/zenet-business-context-production.md` |

---

*Last updated: 2026-05-18.*
*Next planned update: when the next subfolder of Market Research begins active construction (option A: `02-competitive-analysis/`), or when another department starts active construction (options B-E), or when customer research transitions de `discovery-pre-PMF` a `design-partner-validation` etapa, o cuando un new strategic decision belongs en section 4.*
