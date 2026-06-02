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

**As of 2026-06-02:**

- **Subfolder `Product Strategy/_context/05-capital-y-finanzas/` 🚧 ACTIVE v0.1 (3 docs core + tracking + README)** 2026-06-02:
  - ✅ `00-funding-roadmap-y-milestones.md` v0.1 — 11 secciones · ~11 páginas · documento estratégico de capital structure (NO modelo financiero · funding amounts hipótesis informados Nivel 2 · disciplina anti-ficción) · frame **bootstrap-first bias con pre-seed optionality** · 3 principios (milestone-anchored funding NOT calendar · MX cost structure como capital efficiency moat · capital como aceleración NO supervivencia) · **Path A vs Path B framework formal** (este doc OWNS la decisión que GTM playbook §3 consume · resuelve dependencia abierta GTM): Path A solo bootstrap (personal runway $300-500K MXN Year 1 + opportunity cost $24-48K USD foregone · break-even Mes 15-18 · Phase 1 GA Q4 2026/Q1 2027 slip) vs Path B pre-seed bridge $100-200K USD (MX cost realistic vs $150-300K US-inflated · 12-18 meses bridge · first hire junior CS Mes 6 · break-even Mes 12-15 · Phase 1 GA Q3 2026 on-time) · decision criteria matrix · hybrid path Friends&Family $50-80K · recommended posture bootstrap-first evaluate pre-seed post design partner validation · capital structure PFAE→SAPI + cap table + SAFE instrument · milestone-anchored funding roadmap (1-2 LOI→pre-seed start · cohort 5 + Mes 3 GO/NO-GO→pre-seed close · Phase 1 commercial 25 + retención≥80%→seed · Phase 2 100+ + Enterprise + $3-10M ARR→Series A) · funding stages detail (pre-seed $100-200K SAFE · seed $500K-1.5M · Series A $2-5M · use of funds per stage) · runway requirements · investor narrative arc milestone-anchored (pre-seed design partner validation + MX cost moat + vertical AI category · seed PMF + retention + path to profitability · Series A scale + Enterprise + LATAM + platform vision) · Stage 1→Stage 2 Finance dept split · 8 anti-patterns.
  - ✅ `_tracking/zenet-costos-fase-0.xlsx` v1.0 — tracker de costos Fase 0 generado con openpyxl · 3 hojas (Catálogo de Costos 26 conceptos pre-poblados con Tier framework + Tipo fijo/variable/one-time · Tracking Mensual Jun 2026→May 2027 con fórmulas automáticas subtotales + NET BURN · Dashboard resumen 12m) · pre-poblado con costos canonical (doc 04 viabilidad económica + doc 01 operational readiness) · baseline fijo Phase 0 ~$3,960 MXN/mes · founder llena valores reales mes a mes · activa Tier 2.0 (lawyer/contador/PAC) con LOI gate · editable Excel/Numbers/Sheets (sync iCloud) · feeds eventual `02-financial-model` v0.1.
  - README actualizado con pointer a tracking activo · subfolder ahora tiene los 3 docs core (00 funding roadmap + 01 operational readiness + 02 financial model scaffold) + tracking xlsx + README · docs 03-06 (unit economics · cash flow · IR · treasury) correctamente deferred con triggers.
- **Strategic decisions capital 2026-06-02:**
  - **Path A vs Path B framework formal canonical** · este doc (`05-capital-y-finanzas/00-funding-roadmap`) OWNS la decisión · GTM playbook §3 la consume como INPUT · resuelve dependencia abierta cross-subfolder.
  - **Bootstrap-first bias con pre-seed optionality (recommended posture)** · MX cost advantage hace bootstrap viable (break-even Mes 12-15) · evaluar pre-seed post design partner validation (1-2 LOI + Mes 3 GO/NO-GO) = pitch más fuerte + menos dilución + optionality preserved.
  - **Pre-seed sizing $100-200K USD realistic** (MX cost structure · vs $150-300K US-inflated estimate) · SAFE instrument founder-friendly · use of funds Capa 1 prompt caching + first hire + Tier 2.0 operational + runway bridge.
  - **Milestone-anchored funding canonical** (NOT calendar) · cada round desbloqueado por milestone medible · evidence-based fundraising.
  - **Cost tracking operacional activo** (`_tracking/zenet-costos-fase-0.xlsx`) · founder trackea costos reales mes a mes · burn rate + NET BURN automático · feeds financial model future.
- **Siguiente recomendado:** activar `06-experience-y-roadmap/` formal (import production repo 3-phase UX + integrar CS-as-agents nota) · O activar Social Media Content Creation department (con doc 02 GTM digital distribution LinkedIn ONLY como strategic foundation) · O activar otro departamento (SEO/Content · Analytics · Email/CRM) · `02-financial-model` mantiene pre-draft hasta 3+ design partners Mes 3+ data.

**As of 2026-06-01 (later · GTM subfolder closure):**

- **Subfolder `Product Strategy/_context/04-go-to-market/` ✓ CERRADO v0.1 (6/6 docs · ~59 páginas)** 2026-06-01:
  - ✅ `00-marco-de-go-to-market.md` v1.0 — foundational frame · 7 frames estratégicos invariables (founder-led sales · in-person primary · multi-threading 68% · peer reference > paid · WhatsApp post-firma NOT pre-firma · 95% adoption/coexistence · GTM bidireccional con capital · platform vision context light-touch) · framework stack canonical (9 PRIMARY incluyendo NEW Customer Health Score #9 + 5 secondary + 5 anti-canonical PLG/Challenger/MEDDIC/BANT/Solution Selling) · **framework theatre anti-pattern** (frameworks son REFERENCE NOT daily checklists · 3-4 máximo daily) · 18 decisiones canónicas (10 heredadas + 8 nuevas incluyendo NEW sales-led canonical Phase 1 + hybrid Phase 2+ trigger #17 + NEW Customer Health Score canonical #18) · **§4.3 flag CS-as-Agents vision** (futuro · pointer a nota 06-experience) · v0.2 refinement trigger post Mes 3 data.
  - ✅ `01-gtm-playbook-phase-1.md` v0.1 — master strategy · **Path A vs Path B GTM scenarios** (capital integration como INPUT · solo bootstrap vs pre-seed bridge $100-200K USD) · phase progression 4 stages (Phase 0 cohort 5 → Phase 1 commercial 25 → Phase 1.5 growth 50 → Phase 2 scaling 100+) con cohort + ICP + channels + team per phase · transition triggers · **cross-phase KPIs framework** (6 leading + 23 lagging canonical SaaS + Zenet-specific + 8 investor benchmark Phase 1.5+ Rule of 40/Magic Number/NRR-GRR/CAC payback/LTV-CAC/burn multiple/Quick ratio) · geographic-product alignment · 9 anti-patterns.
  - ✅ `02-digital-distribution-strategy.md` v0.1 — **LinkedIn ONLY Phase 1** (validated stress-test 6 platforms · LinkedIn gana 5/5 dimensions) · founder Alan personal brand productized · building in public LinkedIn-native (vs Twitter/X canonical histórico · April Dunford/Justin Welsh/Sahil Bloom validated) · **6 content pillars** (Founder journey 20% · Industry insights 20% · **Technical AI/ML/Architecture NEW 20%** · Operator vernacular 15% · Behind-scenes 10% · Case studies post-Mes 6 15%) · cadence 3-5 posts/sem (4 core + flex · sustainable) · engagement quality > vanity · defer Twitter/X+IG+YouTube+FB+TikTok Phase 1.5+/2+ · boundary stronger con future Social Media Content Creation department (strategic WHAT/WHY aquí · tactical execution allá) · 11 anti-patterns.
  - ✅ `03-outreach-strategy.md` v0.1 — direct outbound prospecting 1-to-1 (distinct de inbound distribution doc 02) · priority hierarchy 5 tiers (network referrals > warm intros > in-person > LinkedIn DM warm > cold selective NEVER spam) · multi-stakeholder sequencing (Owner entry → Manager → Chef → Contable parallel) · messaging anclado VP §6 + voice/tone · funnel + conversion expectations per channel · 6 channel-specific playbooks · WhatsApp NOT cold outreach (post-firma canonical) · 9 anti-patterns.
  - ✅ `04-sales-motion-three-session-demo.md` v0.1 — doc más denso (~13 pág) · sales cycle 8 stages · **three-session demo FLEXIBLE** (NO mandato rígido · insight load-bearing es multi-stakeholder engagement · comprime Fast lane warm 1-2 sesiones Phase 0 · expande Slow lane cold 3+) · per-session playbooks (Manager + SPIN · Chef augmentar criterio · Owner ROI+cierre) · **pricing en sales motion = deep-dive + justificación + cierre (NO reveal secreto · landing ya muestra público cf doc 03 §4.6)** · Contable parallel silent veto mitigation · LAER MX-adapted (9 disarming + 7 anti-patterns + 8 objection categorías + identity "yo SOY el sistema") · 3-lane timing · cierre → handoff onboarding · sales enablement materials · 12 anti-patterns.
  - ✅ `05-channel-partner-strategy.md` v0.1 — channel ecosystem **re-ranked por value exchange + aligned incentives** · 3 principios (value exchange · **demand-side first · supply-side con leverage** · phase timing disciplina) · Tier 1 demand-side (**Consultor partners #1** modelo extensión Zenet SoftRestaurant+SYCA · Anna/Victor/Algira pre-validated · **Contadores/despachos #2 NEW** convierte silent veto en channel ally · 20-50+ restaurant clients per despacho · value exchange data limpia) · Tier 2 institutional (CANIRAC Bootcamp Enero 2026 · CANACO · eventos · awareness NO revenue) · Tier 3 supply-side (**La Canasta/distribuidores REFRAME** de #1 asimétrico a Phase 2+ con leverage · leverage inversion · Uber Eats B2B procurement · platform vision) · multi-plaza 3 models · 9 anti-patterns.
- **Nota nueva fuera de subfolder:** `Product Strategy/_context/06-experience-y-roadmap/00-cs-as-agents-vision-nota.md` v0.1-nota (draft) — captura estratégica de visión CS-as-Agents (automatizar customer service con AI agents · misma arquitectura agency-as-SaaS + human escalation layer) · explorada conversacionalmente · frame layered + tier-based (premium = more human · preserva valor #3 "Acompañar no abandonar") · NO Phase 1 · hybrid 1.5-2 · AI-primary 2-3+ · retomar al activar subfolder 06 formal.
- **Strategic decisions GTM 2026-06-01:**
  - **LinkedIn ONLY digital distribution Phase 1** · single channel deep · building in public LinkedIn-native · defer otros channels Phase 1.5+/2+ · 6 pillars con technical pillar NEW (founder = engineer differentiator).
  - **Three-session demo FLEXIBLE (NO rígido)** · insight load-bearing es multi-stakeholder engagement pre-cierre · structure comprime/expande por lane · Phase 0 cohort warm = Fast lane comprimido (NO over-engineer).
  - **Pricing en sales motion = deep-dive + justificación + cierre** (NO reveal secreto) · landing muestra pricing público (doc 03 §4.6) · sales contextualiza arbitraje + cierra · excepción honest rango si preguntan directo · NUNCA evasión total (MX SMB trust).
  - **Channel re-ranked por value exchange + aligned incentives:** Consultor partners #1 (extensión Zenet) · Contadores/despachos #2 NEW (silent veto → channel ally · 20-50+ restaurantes per despacho) · institutional awareness · distribuidores Phase 2+ supply-side con leverage.
  - **Demand-side first · supply-side con leverage (two-sided marketplace bootstrapping):** Zenet adquiere restaurantes PRIMERO (consultor + contador + direct) · distribuidores/suppliers se unen Phase 2+ CUANDO Zenet tiene base = leverage para value exchange invertido ("recibe demanda agregada" NO "promueve Zenet") · Uber Eats B2B procurement con Zenet cognitive nucleus.
  - **Customer Health Score canonical NEW** (framework #9 primary) · Mes 6 cliff prevention · scoring behavioral + qualitative + payment · AI puede powerar eventualmente (CS-as-agents nota).
  - **Sales-led canonical Phase 1 · hybrid Phase 2+ trigger** · Esencial semi-self-serve · Multi-Sitio + Enterprise mantienen sales-led.
  - **Framework theatre anti-pattern** · frameworks son REFERENCE NOT daily checklists · 3-4 máximo daily execution.
  - **CS-as-Agents vision capturada** (nota 06-experience + flag doc 00 §4.3) · NO Phase 1 · layered + tier-based + human escalation · línea NO cruzar "te abandonamos a un robot".
- **Siguiente recomendado:** redactar `05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` v0.1 (Path A vs B framework formal · referenciado heavily en GTM playbook) · O activar `06-experience-y-roadmap/` formal (import production repo 3-phase UX + integrar CS-as-agents nota) · O activar Social Media Content Creation department (ahora con doc 02 GTM digital distribution como strategic foundation).

**As of 2026-06-01 (earlier · oferta-y-pricing subfolder closure):**

- **Subfolder `Product Strategy/_context/03-oferta-y-pricing/` ✓ CERRADO v0.1 (6/6 docs)** 2026-06-01:
  - ✅ `04-viabilidad-economica-y-cogs.md` v0.1 — 15 secciones · ~17 páginas · Nivel 2 sanity check estructurado (NO Nivel 3 unit economics formal · defer a `05-capital-y-finanzas/02-financial-model`) · costos fijos Phase 1 sintetizados con founder real data (software paid tier baseline $333 USD/mes · founder dev tools Anthropic Max + Figma + Notion + Adobe $186-201 USD/mes · lawyer amortized $170 + contador $25 USD/mes · MacBook amortized 12 meses $250-333 USD/mes · total Scenario A free tier $637 · Scenario B paid tier baseline $964 USD/mes) · costos variables breakdown per componente (Anthropic dominante · WhatsApp Business · Supabase · PAC · Stripe) · 4 user profiles canónicos (Light 30% · Medium 50% · Heavy 18% · Aggressive 2%) · DOS escenarios COGS canónicos con realistic MX salaries ($10-25K MXN/mes CS junior NOT US-inflated · onboarding amortized $4-17 USD/cliente · CS ongoing $13-31 USD/cliente 50 ratio mature) · sensitivity matrix 16 cells (4 tiers × 2 COGS × 2 architecture states) · per-customer unit economics · break-even analysis (14-21 clientes mixed Scenario B) · margin floor + ceiling honest tightness · architecture mitigation 5 capas cuantificadas (Capa 1 P0 prompt caching prerequisite Phase 1.5 · -50% a -90% Anthropic) · WhatsApp ventana 10 hrs Esencial cost differential · scale projections informational 4 stages (5/25/50/100 clientes · path to profitability Mes 12-15 hipótesis) · 3 hallazgos load-bearing + 6 sustainability levers (incluyendo NUEVO MX cost structure discipline) · **NUEVA §14 MX cost structure como competitive advantage** (5-10x cost arbitrage vs US vertical AI · LATAM expansion preserves moat · pre-seed need $100-200K USD realistic vs $150-300K US-inflated) · 11 anti-patterns + founder time opportunity cost framed correctly.
  - ✅ `05-wtp-validation-plan.md` v0.1 — 11 secciones · ~10 páginas · methodology canonical de cómo Zenet valida pricing hipótesis con design partners · **3-methodology triangulation framework** (Van Westendorp PSM 15% directional + Qualitative interviews 35% context + Behavioral data 50% revealed preference · small N=3-5 requires qualitative + behavioral weighted over PSM stats) · PSM detail (4 preguntas canónicas · 4 intersection points PMC/PME/OPP/IPP · willingness ladder $1,000-$2,100 Esencial baseline) · qualitative interview 60-90 min structure + sample script + multi-stakeholder considerations · behavioral metrics canonical Phase 1 (10 métricas: active users · interactions · WhatsApp window utilization · upgrade triggers · annual prepay take-rate · churn signals · etc.) · **multi-stakeholder validation framework** (Owner paga · Manager usa · Chef adopta · Contable autoriza · multi-threading 68% load-bearing) · execution plan timeline Months 1-6 cadence (PSM ejecutado Mes 3 GO/NO-GO checkpoint dentro Tier 1 Programa Active SF) · triangulation framework con conflict resolution matrix · 5 trigger framework (anchor maintain · upside activation · downside activation · Heavy Usage Pack launch · pivot signal · evidence-based decision) · outputs feeds v0.2 cross-docs · 14 anti-patterns + cross-doc dependencies con customer-development workspace.
- **Strategic decisions Phase 1 commercial structure 2026-06-01 (acumuladas iterations sobre doc 04 cost analysis + doc 05 validation methodology):**
  - **MX cost structure como competitive advantage canonical** — 5-10x cost arbitrage vs US vertical AI competitors (Harvey · Hippocratic) · CS junior MX $500-1,250 USD/mes vs US equivalent $2,500-4,000 USD/mes · LATAM expansion preserves arbitrage (Colombia · Chile · Peru similar cost structures con USD pricing growth potential) · path to profitability ~6 meses faster con MX-cost discipline · pre-seed need recalculated $100-200K USD realistic (vs $150-300K US-inflated estimate).
  - **Anti-pattern hire discipline canonical** — NO copy US salary brackets for MX talent · NO use "global remote" framing as excuse · NO premature founder draw inflation pre-seed · preserve MX cost arbitrage as strategic moat layer cross-phase.
  - **Capa 1 P0 prompt caching prerequisite estructural Phase 1.5** — 1-2 días eng effort · -50% a -90% Anthropic costs en cached tokens · system prompts 3-34 KB highly cachable (production repo Explore agent analysis confirmed) · NO opcional · prerequisite para Multi-Sitio sustainability post-seed.
  - **Production repo architecture analysis confirmó architecture mitigation gaps:** Anthropic Sonnet 4.6 default sin model routing · NO prompt caching · NO context truncation · full conversation history loaded each turn · NO response caching · NO batch processing · WhatsApp Business NOT YET implemented (critical gap pre-Phase 1 launch · Tier 1.5 investigation needed).
  - **3-methodology triangulation canonical para WTP validation Phase 1** — Behavioral data weighted 50% (revealed preference dominates) · Qualitative interviews 35% (multi-stakeholder context) · Van Westendorp PSM 15% (directional only · N=3-5 statistical weak) · disciplina anti-overinterpretation small N.
  - **Multi-stakeholder validation framework canonical** — Owner WTP final decision PERO informed by Manager (operational value) + Chef (adoption stickiness) + Contable (silent veto risk · CFDI/LFPDPPP) signals separately captured + reconciled via conflict resolution matrix.
  - **5 trigger framework canonical para pricing changes** — anchor maintain (most likely · 5 criteria) · upside scenario activation ($1,800-2,000 NEW customers · 6 criteria incluyendo NPS≥40 + behavioral retention >90%) · downside scenario activation ($1,200 last resort · 4 criteria adverse selection) · Heavy Usage Pack launch (Phase 1.5+ · 3 criteria) · pivot signal (NO viability · múltiples red flags).
  - **PSM execution Mes 3 GO/NO-GO checkpoint integration** — PSM 4 preguntas dentro 90-min Owner interview · multi-stakeholder interviews separate cadence (Manager 45min · Chef 45min · Contable 30min) · behavioral data 90-day comprehensive review · triangulation → preliminary v0.2 pricing decision input alimentando doc 03 + doc 04 + Adendum SF + financial model scaffold trigger.
  - **Operational execution boundary clarification** — methodology canonical lives en doc 05 · operational tactical (cohort management · interview scheduling · CRM tracking) vive en `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.1 · WHAT vs HOW separation preserved.
  - **6 sustainability levers cross-phase** — (1) Capa 1 P0 prompt caching Phase 1.5 prerequisite · (2) Cohort mix shift bias Multi-Sitio + Enterprise · (3) Add-ons revenue streams Phase 1.5+ · (4) Annual prepay aggressive push design partners + early commercial · (5) Enterprise tier productización Q3-Q4 2027 · (6) **MX cost structure discipline cross-phase (NEW · structural moat).**
  - **3 hallazgos load-bearing path-to-viability** — (1) Modelo NO break-even hasta ~25-50 clientes Mes 12-15 hipótesis (con MX structure faster than US-equivalent) · (2) ARPA actual $75-180 USD LOW para B2B SaaS sustainable · path requires Multi-Sitio + Enterprise mix bias over time · (3) Enterprise tier productización Phase 2 estructuralmente critical · 1 Enterprise cliente $400+ ACV = 5-6 Esencial revenue equivalent.
- **Subfolder closure totals 03-oferta-y-pricing/ CERRADO v0.1:**
  - 6 docs cerrados · ~68 páginas total · decisiones comerciales cohesivas cross-doc
  - Foundational (doc 00) + commercial structure (doc 01) + design partner offer (doc 02) + pricing tiers (doc 03) + viabilidad económica (doc 04) + WTP validation methodology (doc 05)
  - Strategic decisions canonical Phase 1 commercial launch readiness · pricing $1,500/$1,999/$1,799 anchor con disciplina Capa 1 prerequisite · 3 escenarios anti-anchoring premature · MX cost advantage moat documented.
- **Siguiente recomendado:** activar siguiente subfolder Product Strategy `04-go-to-market/` v0.1 (4 docs: GTM playbook · outreach · sales motion three-session demo · channel/partner strategy) · O redactar `05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` v0.1 (Path A solo bootstrap vs Path B pre-seed framework formal) · O activar otro departamento (Social Media LinkedIn productized · SEO/Content · Analytics).

**As of 2026-05-30:**

- **Subfolder `Product Strategy/_context/03-oferta-y-pricing/` 🚧 ACTIVE v0.1 (4/6 docs cerrados)** 2026-05-30:
  - ✅ `01-modelo-comercial-y-terminos.md` v0.1 — 8 secciones · estructura comercial cliente-facing (cómo se compra · qué se firma · qué se cobra · cómo se cancela) · pure subscription canonical · 90-day commitment + annual prepay · **ventana cancelación 7 días + primer cargo Day 8** (reframed de "fase gratuita 30 días" · agency trabajando desde Day 1 cleanup + estandarización · matches MX professional services pattern) · self-serve in-app cancellation Owner role · click-wrap contract Esencial-Pro-Multi + e-signature Enterprise · 12 anti-positions documented · 5 compliance anchors + pointer operational readiness doc.
  - ✅ `02-programa-socio-fundador-offer.md` v0.1 — 9 secciones · deal terms específicos Programa Socio Fundador (Fase 0 design partners) · **3-tier graceful step-down lifecycle** (Tier 1 Programa Active Day 8-90 weekly + founder direct · Tier 2 Estatus VIP Mes 4-12 bi-weekly + founder same-day · Tier 3 Estatus Permanente Year 2+ monthly + founder on-call) · **GO/NO-GO Mes 3 checkpoint** para Phase 1 commercial GA decision · descuento Socio Fundador 20-30% lock-in PERMANENTE · 10 beneficios enhanced honestos · 6 reciprocidades esperadas · **10-step lifecycle flow refinado** (prospecting → intent confirmation email/WhatsApp NO LOI formal upstream → DocuSign signing event Day 1 MSA + Order Form + Adendum Socio Fundador) · 11 anti-patterns · nota terminológica Socio Fundador = Design Partner.
  - ✅ `03-pricing-tiers-hipotesis.md` v0.1 — 11 secciones · doc más denso del subfolder · estructura 4 tiers (Esencial $1,500 · Pro $1,999 · Multi-Sitio $1,799 · Enterprise Custom) · **WhatsApp Esencial = ventana 10 hrs/día customizable** (cliente elige · 3 templates Mañana/Día completo/Tarde-noche · cambio 1x/30 días) · cap users 5/8/10 · internal caps invisibles ~1,200/2,000/2,500 · AI agents Phase 1 full cross-tier · competitive anchoring DUAL · 3 escenarios pricing canónicos · 12+ edge cases + 7 edge cases ventana WhatsApp · add-ons roadmap Phase 1.5+ · 9 decisiones abiertas con triggers · 12 anti-patterns.
  - Pendientes 2 docs (04 viabilidad económica → 05 WTP validation) · effort estimado ~1-1.5 días concentrados.
- **Subfolder `Product Strategy/_context/05-capital-y-finanzas/` 🚧 ACTIVE v0.1 (3 docs)** 2026-05-30:
  - **Renamed:** `05-capital-y-fundraising/` → `05-capital-y-finanzas/` (broader scope · accommodates future financial modeling docs · cross-references updated en 8 docs workspace).
  - ✅ `README.md` v0.1 — subfolder scope + roadmap + triggers Stage 1 (Product Strategy) vs Stage 2 (Finance department externo Series A trigger) · 4 future docs scaffolded (00 funding roadmap · 03 unit economics formal · 04 cash flow · 05 investor relations · 06 treasury) · external resources needed (data inputs · tools · methodology references · external expertise hire) · convention de uso para AI agents + contribuidores.
  - ✅ `01-operational-readiness-y-business-setup-phase-1.md` v0.1 (existing · cross-references updated).
  - ✅ `02-financial-model-y-projections.md` v0.1-pre-draft scaffold — structural placeholder con outline 12 secciones · 5 triggers explícitos para v0.1 construction (3+ design partners Mes 3+ + cost actuals + pricing PSM-validated + Mes 3 GO/NO-GO + pre-seed conversation seria) · data inputs requeridos enumerados · methodology references documentados · cross-references upstream/downstream para future construction · disciplina anti-falsificación premature modeling.
- **Strategic decisions Phase 1 commercial structure 2026-05-30 (acumuladas iterations sobre doc 02 SF + doc 03 pricing tiers):**
  - **Reframe ventana cancelación + activación suscripción** (vs "fase gratuita"): agency trabaja Day 1 · 7-day window cliente puede void · Day 8 primer cargo · 90-day commitment activates Day 8 · Mes 1 high-touch incluido · matches MX professional services pattern (despacho contable · consultor · agencia trabajan + cobran desde firma).
  - **Self-serve in-app cancellation Owner role:** modern SaaS standard · ethical practice · NO email/phone-only · NO dark patterns · CS save POST-cancellation NOT blocking.
  - **Click-wrap contract Esencial-Pro-Multi · e-signature Enterprise:** virtual contracts legalmente válidos MX · click-wrap fast onboarding · e-signature ceremonial Enterprise.
  - **Programa Socio Fundador 3-tier graceful step-down:** corrected mi propuesta inicial 6-12 meses → 3 meses formal programa + Estatus VIP Mes 4-12 + Estatus Permanente Year 2+ · honors ongoing listening value sin saturar founder bandwidth · founder bandwidth math sustainable (10 hrs/sem Tier 1 → 5 Tier 2 → 1.5 Tier 3).
  - **Intent confirmation email/WhatsApp reemplaza LOI formal upstream:** modern B2B SaaS practice (Y Combinator · Stripe/Notion/Linear) · DocuSign signing event ceremonial Day 1 (MSA + Order Form + Adendum Socio Fundador) ES el commitment real · NO LOI document bureaucracy intermedia.
  - **Esencial WhatsApp = ventana 10 hrs/día customizable** (vs fixed 7am-11pm propuesta inicial): operational fit con restaurant variability · match agency framing · MX SMB cultural fit · preserves tier differentiation clean vs Pro 24/7.
  - **Adendum Socio Fundador firmado DocuSign:** corrected mi propuesta intermedia "NO documento formal" — captura lock-in lifetime + reciprocidad bilateral + brand recognition rights + ceremonial signing · DocuSign justified (NOT click-wrap) por commitment lifetime importance.
  - **Subfolder rename Stage 1 → Stage 2 phased approach:** `05-capital-y-fundraising/` → `05-capital-y-finanzas/` permite financial modeling growth dentro de Product Strategy pre-PMF · trigger split a Finance department externo: Series A funding · CFO hire · 10+ employees · multi-currency operations · M&A on horizon.
  - **Doc 04 viabilidad económica REQUIRES Capa 1 P0 prompt caching prerequisite:** Multi-Sitio underwater bajo heavy usage sin architecture mitigation · prompt caching = engineering priority Phase 1.5 NO opcional (3-5 días eng · -50% a -90% Anthropic API costs en cached tokens · system prompts 3-34 KB cachables).
  - **Production repo architecture analysis confirmó:** Anthropic Sonnet 4.6 default · NO Haiku routing · NO prompt caching · NO context truncation · full conversation history loaded cada turn · NO response caching · NO batch processing · WhatsApp Business NOT YET implemented (critical gap Phase 1 launch) · current free tiers Supabase/Vercel/Sentry/PostHog/Langfuse cover · paid tier baseline ~$333 USD/mes Phase 1 expanded · founder dev tools ~$180 USD/mes (Anthropic Max + Figma + Notion + Adobe) · profesional services lawyer $170 + contador $25 USD/mes + MacBook Pro amortized 12 meses $250-333 USD/mes.
  - **Scale modeling honest:** Phase 1 design partners burns $612 USD/mes · early commercial 25 clientes break-even ish sin team · 50 clientes con team burns $2,000+ USD/mes · path to profitability ~50-75 clientes Mes 12-18 · Zenet harder than typical horizontal SaaS (lower ARPA · higher COGS) pero potential bigger (vertical AI moat · LATAM USD pricing future · multiple add-on revenue streams).
  - **Price evolution principles canonical:** grandfather existing customers SIEMPRE · annual inflation adjustments 3-5% on NEW customers · major increases 10-15% tied to product value evolution (TIER 3 launch · Enterprise productization · Phase 2 specialty agents) on NEW customers · Socios Fundadores lock-in permanente FOREVER (rewards commitment + builds lifetime value asset · NEVER recovery posible).
- **Siguiente recomendado:** redactar doc 04 viabilidad económica y COGS v0.1 con todos los inputs cost reales sintetizados (founder data + production repo architecture + estimaciones COGS variables por tier × user profile × Capa 1 mitigation · sensitivity matrix · 3 hallazgos load-bearing · 5 sustainability levers · architecture mitigation impact cuantificado · Capa 1 P0 prerequisite explícito · pointer a `05-capital-y-finanzas/02-financial-model-y-projections.md` para full modeling future).

**As of 2026-05-29:**

- **Subfolder `Product Strategy/_context/03-oferta-y-pricing/` 🚧 ACTIVE v0.1 (1/6 docs cerrados)** 2026-05-29:
  - ✅ `00-marco-de-oferta-y-pricing.md` v1.0 — Foundational doc del subfolder · 8 secciones · 5 frames estratégicos (value-based · pricing arbitrage 70-100x · honestidad founder labor subsidy · agency-as-SaaS · competitive anchoring DUAL framing wallet+category) · 10 decisiones canónicas heredadas · 8 decisiones abiertas con triggers · 8 principios estructurales (dos COGS scenarios · tres pricing scenarios · internal vs visible caps · defensa multi-capa AI inference · tier differentiation ADITIVA NO sustractiva).
  - Pendientes 5 docs (01 modelo comercial → 02 programa Socio Fundador → 03 pricing tiers → 04 viabilidad económica → 05 WTP validation) · effort estimado ~2-2.5 días concentrados.
- **Subfolder `Product Strategy/_context/05-capital-y-finanzas/` 🚧 ACTIVE v0.1 (1 doc cerrado)** 2026-05-29:
  - ✅ `01-operational-readiness-y-business-setup-phase-1.md` v0.1 — 12 secciones · stack 7 identidades formales prerequisite · PFAE Phase 1 → SAPI pre-seed close (canonical sequencing) · Tier framework (Tier 1 NOW ~$8K MXN · Tier 1.5 free preparations 2-3 meses pre-design-partner · Tier 2.0 paid commitments con **LOI gate** ~$30-50K MXN · Tier 3 defer) · validation triggers + 60-day no-LOI pivot signal · lawyer scope $30-50K one-time · despacho contable $60-130K annual · vendor stack (Stripe vs Conekta · WhatsApp Business long-lead 6-12 sem · Anthropic enterprise) · 5 compliance anchors profundizados · cost summary 3 escenarios (Tier 1 only $8K · validation hits $70-120K · aggressive scaling $150-250K) · timeline hipótesis Q3 2026 launch · 8 decisiones abiertas + version triggers.
  - Pendiente doc principal `00-funding-roadmap-y-milestones.md` cuando se redacte · capital structure Path A solo bootstrap vs Path B pre-seed.
- **Strategic decisions Phase 1 commercial structure 2026-05-29 (acumuladas en conversación foundational doc 00 oferta-pricing + operational readiness):**
  - **Estructura 4 tiers v0.1:** Esencial $1,500/sucursal · Pro $1,999/sucursal · Multi-Sitio $1,799/sucursal (mínimo 2) · Enterprise Custom contact sales · `[Hipótesis sin validar]` (anchor) · downside $1,200 + upside $1,800-2,000 documentados.
  - **WhatsApp en todas las tiers diferenciado por service level:** Esencial 7am-11pm response <10 min · Pro/Multi-Sitio 24/7 instant · agency framing preserved cross-tier (NO unbundling del moat #1).
  - **AI agents Phase 1 (E1-E6 + H1-H2) incluidos full cross-tier:** tier differentiation ADITIVA NO sustractiva (NO gating de capabilities del producto core · gating sustractivo rompe agency framing + contradice value-based logic + forza manual workarounds silent churn driver).
  - **Internal capacity caps tracked religiosamente · NO visible al cliente:** soft signaling agency-styled · hard ceiling solo en outlier abuse (2x soft cap) · evita utility-bill anxiety + comparison ChatGPT pricing.
  - **Add-ons (Heavy Usage Pack · Specialty Agent Pack) como roadmap Phase 1.5+:** reactivos post observación design partners · NO fragmentadores de primera venta.
  - **Contable externo siempre incluido cross-tier · NO cuenta hacia cap users:** buying committee load-bearing (multi-threading 68%).
  - **Frame ventana cancelación + activación suscripción** (reframed de "fase gratuita 30 días"): agency trabajando desde Day 1 (cleanup + estandarización + setup) · ventana cancelación 7 días · primer cargo Day 8 · 90-day commitment activates Day 8 · Mes 1 high-touch incluido · matches MX professional services pattern.
  - **Self-serve in-app cancellation:** Owner role only · admin panel · reason capture · post-cancel CS reach-out (NOT blocking · NO dark patterns).
  - **Contrato virtual diferenciado:** click-wrap (Esencial · Pro · Multi-Sitio · standardized MSA + Order Form · legalmente válido MX) · e-signature DocuSign/HelloSign (Enterprise · negotiable MSA · custom Order Form).
  - **5 compliance anchors canonical:** MX governing law + jurisdicción · LFPDPPP 2025 (DPA + Aviso Privacidad + ARCO) · CFDI billing 4.0 (RFC + PAC + auto-generation) · WhatsApp Business API compliance · Anthropic AUP.
  - **Operational readiness sequencing canonical:** Tier 1 NOW (PFAE + bank + dominio + IMPI + website draft · ~$8K MXN · 30 días) · Tier 1.5 free preparations 2-3 meses pre-design-partner (Stripe/Conekta application + WhatsApp Business verification submission + Anthropic enterprise terms + lawyer/despacho identification · ~$0 cash) · Tier 2.0 paid commitments con LOI gate ($30-50K MXN lawyer + $5-10K/mes despacho) · Tier 3 defer (SAPI pre-seed close · insurance Phase 2 · DPO formal post-seed · CFO Series A).
- **Siguiente recomendado:** continuar redacción doc 01 modelo comercial y términos v0.1 en `03-oferta-y-pricing/` con todas las correcciones acumuladas integradas (estructura Day 1-Day 8 · self-serve cancellation · click-wrap contract · 5 compliance anchors documented · pointer a operational readiness doc).

**As of 2026-05-26:**

- **Subfolder `Product Strategy/_context/02-features-y-scope/` CERRADO v0.1 (3/3 docs)** 2026-05-26:
  - ✅ `00-fase-1-mvp-scope.md` v0.1 — Phase 1 canonical MVP scope · 8 capabilities (6 Essential E1-E6 + 2 High value H1-H2) · acceptance criteria · critical path E5→E2→E1→E4 (E2 foundational hub dual-role) · 6 decisions log · launch readiness Go/No-Go criteria.
  - ✅ `01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 — Phase 1.5 N1-N5 priority ordering + Phase 2 post-research reframe 2026-05-26 (F7 POS API REMOVED · F5 agentes especializados elevated priority #1 · F6 cumplimiento vía CFDI/PAC direct NOT POS API · F8 partner channel strategy NEW parallel track LIMAC + SYCA + PAC providers) · LATAM corrected to Geographic Phase 5 + Series A (decoupled from Product Phase 2) · pricing specifics deferred to subfolder 03.
  - ✅ `02-feature-prioritization.md` v0.1 — methodology unificada cross-phase · TIER + Kano-inspired consolidated · scoring framework 6 dimensiones · unified feature matrix cross-phase (Phase 1 E1-E6+H1-H2 + Phase 1.5 N1-N5 + Phase 2 F1-F6+F8) · stack-ranking logic per phase · tradeoff framework (cuts · additions · acceleration) · validation triggers + Kano recategorization · 4 edge cases ambiguous categorizations.
- **Strategic decisions Phase 2 reframe 2026-05-26 (research-validated):** F7 POS API removed canonical (partner gating + APIs legacy + no public API en POS amigables MX SMB) · F5 agentes especializados priority #1 (agency-as-SaaS full realization · independent POS API) · F6 cumplimiento vía CFDI/PAC direct + F8 partner channel parallel track resilient to technical timeline · F7 reactivation conditional (LIMAC/SYCA partnership OR Cohort 1 ≥4 DPs willingness-to-pay premium).
- **Siguiente recomendado:** arranca subfolder `Product Strategy/_context/03-oferta-y-pricing/` v0.1 — pricing tiers hipótesis + WTP framework + 90-day minimum + annual prepay structure + pure subscription model formalization (outline scope first).

**As of 2026-05-22:**

- **Workspace identity reframed (Opción A):** de "marketing operations" → **"founder strategic operations"**. CLAUDE.md §1 + §3 + §5 + §6 updated. Razón: pre-PMF Alan ejecuta founder + CEO + product strategy + marketing roles colapsados; estructura refleja realidad operativa. Disciplinas agrupadas en 3 layers: Foundation (brand + research) · Strategy (product strategy + GTM + capital) · Execution (marketing channels).
- **Product Strategy department activado 2026-05-22:** scaffolding completo · 6 subfolders + _archive + _sop + _templates + skills creados. Estructura v0.1 esperada: 16 docs · 6.5-7.5 días de trabajo concentrado.
- **Branding Fase A update CERRADO 2026-05-22 (transition checklist Market Research → Branding completada):**
  - ✅ `vocabulario.md` v1.0 → v1.1 — 10 updates Market Research integration.
  - ✅ `posicionamiento.md` v1.1 → v1.2 — 9 updates Market Research integration.
  - ✅ `personalidad-y-arquetipo.md` v1.0 → v1.1 — 6 updates light pass.
- **Pricing model strategic decision aplicada 2026-05-22 (post análisis honesto setup fee vs pure subscription):**
  - **Decisión canónica:** pure subscription + 90-day minimum + annual prepay · NO setup fee · NO project pricing. Razones: preserva agency-as-SaaS framing · preserva pricing arbitrage 70-100x · single commercial decision · Mexican SMB psychology friendly · pure SaaS ARR investor narrative.
  - **Phase 1 launch scope:** TIER 1 (manual vivo + WhatsApp agency 24/7) + TIER 2A (recetario consultable) · ship Q3 2026 · NO POS API integration (manual upload 3 modos).
  - **Phase 1.5 deferred:** TIER 2B training portal · Q4 2026 / Q1 2027 · assessment pendiente.
  - **Phase 2 future:** TIER 3 (process compliance · cumplimiento fiscal) + inventario dinámico + pronósticos + costos + procurement + integración POS API · Q3-Q4 2027.
  - **Docs sincronizados:**
    - ✅ `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.0 → v1.1 — 20+ updates · §14 rewrite completo · POS integration removal · pricing model nuevo · Mantenimiento deprecated.
    - ✅ `vocabulario.md` v1.1 → v1.2 — NEW §2.8 Modelo comercial cliente-friendly · NEW §4.5 frases modelo comercial obsoleto · ~15 glossary entries añadidas (subscripción · subscripción continua · compromiso mínimo 90 días · annual prepay · descuento Socio Fundador · fase gratuita · high-touch onboarding · setup fee NUNCA · Mantenimiento deprecated · TIER 1/2A/2B/3 · Phase 1/1.5/2 · modos de upload · POS API integration).
    - ✅ `posicionamiento.md` v1.2 → v1.3 — §7 NEW subsecciones "Modelo comercial" + "Producto — Phase 1 vs Phase 2" · anti-position setup fee explícita · diferenciador #2 reframe (manual upload Phase 1 → API Phase 2).
  - **Pendiente Fase C (post Product Strategy v0.1):** `promesa-de-marca.md` v1.0 → v1.1 si oferta/pricing crea nuevas commitments + posible refinamiento post-VP statement.
  - **Pricing exact deferred:** $1,500/mes hipótesis · per-sucursal vs fixed · tiers · annual prepay % · todo a definir en `Product Strategy/_context/03-oferta-y-pricing/01-pricing-tiers-hipotesis.md` futuro.
  - **Siguiente:** arranca Paso 2 Product Strategy (`00-marco-y-metodologia/00-marco-product-strategy.md` v1.0 · methodology choices VPD primary + JTBD overlay + Kano · sin fricción de inconsistencias upstream).
- **Wave 1 cascade audit Perplexity report → research backbone completado 2026-05-23 (3 docs):**
  - ✅ `02-customer-research/07-voice-of-customer.md` v0.1 → v0.1.1 — añadidos 4 verbatim quotes (V-031 Jesús Ramírez Allegra · V-032 identity-aspirational contable · V-033 ContadorMx LFPDPPP · V-034 Rappi Merchants discipline) + NEW §3.2 Operator vernacular contable-specific (11 términos: conciliar · timbrar · póliza · DIOT · balanza · EFOS/EDOS · REP · factura global · tasa efectiva · ADD · despacho) · library total 30 → 34 entries · index §4.1 actualizado.
  - ✅ `02-customer-research/02-jobs-to-be-done.md` v0.1 → v0.1.1 — §6.2 contable rewrite mayor de "admin/contador interno" minimal a stakeholder load-bearing con Jobs/Pains/Gains depth + buying committee role + silent veto pattern + 2-3 sucursales inflection + LFPDPPP 2025 dimension.
  - ✅ `01-industry-and-market/08-entorno-regulatorio.md` v1.0 → v1.0.1 — §2.8 actualizado con SAT 2026 specifics (Comunicado 53/2025 Oct 20 · 16,200 audits planeadas · 12,000 PyME allocation · risk-based algorithmic selection · 4 restaurant-specific risk flags) + NEW §2.9 propinas fiscal treatment unresolved (SAT Criterio 43 vs Tribunal Colegiado 2021 · addenda PROPINAS) + §10.1 LFPDPPP actualizado con INAI dissolution → Secretaría Anticorrupción + contables externos como data processors técnicamente.
- **Wave 2 cascade completado 2026-05-23 (3 docs):**
  - ✅ `02-customer-research/05-buying-process-y-criterios-de-decision.md` v0.6 → v0.7 — añadidas §10.8 Silent veto pattern del contable (NEW critical insight con diagnostic table + mitigation framework anti-silent-veto) + §10.9 Scale dynamics 1/2-3/4-5 sucursales (inflection point al 2-3 sucursales · alinea con beachhead Sub-segmento B · sales motion shift recommendations).
  - ✅ `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` v0.4 → v0.5 — añadida §3.7.5 con 7 contable-specific objections Perplexity-derived (¿XMLs? · ¿CONTPAQi? · ¿catálogos SAT? · cliente no entiende · ¿PAC? · suscripción no incluye contador · LFPDPPP) cada una con quién/trigger/disarming/anti-tactic + §3.7.6 Silent veto dynamic con diagnostic + mitigation framework.
  - ✅ `02-customer-research/03-pains-y-workarounds.md` v0.4 → v0.5 — NEW §2.5 Dolores fiscales/cumplimiento load-bearing del contable heredados al operador (4 sub-pains: CFDI reconciliation manual 25-35% workload · propinas treatment unresolved · LFPDPPP 2025 burden · audit defense stress) + §2.5.5 resumen para sales motion + product roadmap.
- **Wave 3 cascade completado 2026-05-23 (4 docs):**
  - ✅ `Branding/vocabulario.md` v1.2 → v1.3 — 11 contable terms añadidos a §2.6 Cumplimiento y fiscal (conciliar/timbrar/póliza · DIOT/balanza · EFOS/EDOS · REP · factura global · tasa efectiva · ADD · despacho) + entries individuales en §9 glossary alfabéticamente ordenadas.
  - ✅ `01-industry-and-market/06-estructura-y-ecosistema.md` v1.0 → v1.0.1 — §6.7 expandido: CONTPAQi ecosystem (1.2M users · 6K distributors) · Aspel ecosystem · 3 alianzas POS↔CONTPAQi documentadas (Soft Restaurant Nov 2022 · MyBusiness POS May 2025 · CONTPAQi ADD) · distribuidores Tijuana LIMAC + SYCA · implicación strategic Phase 2 CONTPAQi integration gating.
  - ✅ `03-competitive-analysis/04-feature-y-pricing-comparative.md` v0.2 → v0.2.1 — §5.2 SoftRestaurant CONTPAQi cell update con alliance Nov 2022 detail + NEW §5.6 CONTPAQi ecosystem dominance landscape (table comparativa 5 POS vendors · industry standard reference + Zenet Phase 2 architecture spec implication).
  - ✅ `Branding/posicionamiento.md` v1.3 → v1.4 — §3 audiencia secundaria contable enriched: silent veto pattern + 2-3 sucursales inflection point + CONTPAQi stack dominance + Phase 2 competitive gating.
- **Cascade audit COMPLETO post-Perplexity report 2026-05:** 3 waves · 10 docs updated · 1 doc nuevo (customer-profile.md v0.1.1) · workspace state fully synced 2026-05-23. Customer-profile.md insights ahora canonical en research backbone (customer 02-07 · industry 06+08 · competitive 04) + Branding (vocabulario v1.3 · posicionamiento v1.4). Total cascade effort: ~5-6 hrs across the 10 cascade docs.
- **Siguiente recomendado:** continuar Product Strategy department con `01-propuesta-de-valor/01-value-map.md` v0.1 (Value Map component del VPD canvas · 2do doc del subfolder).
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
- (F) Cleanup pendiente restante: decidir destino de `04-category-and-trends/` folder (frontmatter docs 04 + 05 ya reparado 2026-05-18 · `Value Proposition/` folder eliminado 2026-05-26 — VP absorbido por `Product Strategy/_context/01-propuesta-de-valor/`).
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
| **Product Strategy / 00-marco-y-metodologia** | ✓ Active v1.1 | `00-marco-product-strategy.md` v1.1 cerrado 2026-05-22 — 9 secciones · methodology stack refined (VPD primary + JTBD as input source + TIER framework Kano-inspired + Crossing the Chasm + Default Alive secondary references) · versioning convention con `research_stage` extension · cross-workspace ownership TEMPORARY documented con migration path · doc version vs research stage triggers separados. Foundational doc del departamento |
| **Product Strategy / 01-propuesta-de-valor** | ✓ **Subfolder CERRADO v0.1** — 4 docs completed | 4 docs: `00-customer-profile.md` v0.1.1 + `01-value-map.md` v0.1 + `02-fit-analysis.md` v0.1 + `03-vp-statement-compressed.md` v0.1. **VP statement compressed (último doc cerrado 2026-05-26):** 11 secciones · 3-layer structure (Master canonical · 4 stakeholder variations · 6 channel templates — pitch deck Slide 4 · landing hero · sales scripts opening Sesión 1/2/3 + Stage F · founder LinkedIn template · WhatsApp cold outreach · email per stakeholder) · 7 anti-positions consolidated · Phase 1/1.5/2 honest framing · pricing arbitrage 70-100x frame con cuándo/NO usar guidance · hypothesis labeling. **Subfolder progress: 4/4 docs · 100% cerrado · listo para downstream artifacts (pitch deck · landing · sales motion).** |
| **Product Strategy / 02-features-y-scope** | ✓ **Subfolder CERRADO v0.1** — 3 docs completed | 3 docs cerrados 2026-05-26: `00-fase-1-mvp-scope.md` v0.1 + `01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 + `02-feature-prioritization.md` v0.1. Phase 1.5 + Phase 2 bridge framework · **F7 POS API REMOVED post-research 2026-05-26** (research-validated structural barriers MX SMB) · F5 agentes especializados elevated priority #1 · F6 cumplimiento vía CFDI/PAC direct · F8 partner channel strategy parallel track · F1-F4 reframed (periodic uploads · NOT real-time pipeline) · investor narrative corrected: product phases ≠ geographic phases · LATAM = Geographic Phase 5 + Series A. Methodology unificada cross-phase (TIER + Kano consolidated · scoring 6 dimensiones · 4 edge cases ambiguous categorizations) |
| **Product Strategy / 03-oferta-y-pricing** | ✓ **Subfolder CERRADO v0.1 — 6/6 docs completed** | 6 docs cerrados 2026-05-29/06-01 (~68 pág total): `00-marco` v1.0 (foundational · 5 frames · 10 decisiones heredadas · 8 principios) + `01-modelo-comercial-y-terminos` v0.1 (pure subscription · ventana cancelación 7 días + Day 8 primer cargo · self-serve cancellation · click-wrap/e-signature · 12 anti-positions · 5 compliance anchors) + `02-programa-socio-fundador-offer` v0.1 (3-tier graceful step-down · GO/NO-GO Mes 3 · descuento lock-in permanente · 10-step lifecycle flow · DocuSign signing Day 1 · NO LOI formal) + `03-pricing-tiers-hipotesis` v0.1 (4 tiers · pricing anchor + downside + upside · WhatsApp Esencial ventana 10 hrs customizable · cap users + internal caps · competitive anchoring DUAL · 12+ edge cases · add-ons Phase 1.5+ roadmap) + `04-viabilidad-economica-y-cogs` v0.1 (Nivel 2 sanity check · sensitivity matrix 16 cells · 2 COGS scenarios con realistic MX salaries · architecture mitigation 5 capas cuantificadas · scale projections 4 stages · 3 hallazgos load-bearing + 6 sustainability levers + **MX cost structure como competitive advantage NEW §14**) + `05-wtp-validation-plan` v0.1 (3-methodology triangulation Behavioral 50% + Qualitative 35% + PSM 15% · willingness ladder Phase 1 · multi-stakeholder validation Owner+Manager+Chef+Contable · execution timeline Months 1-6 · 5 trigger framework · feeds v0.2 cross-docs). Strategic decisions: pricing $1,500/$1,999/$1,799 anchor + disciplina Capa 1 prerequisite + MX cost discipline moat. |
| **Product Strategy / 04-go-to-market** | ✓ **Subfolder CERRADO v0.1 — 6/6 docs (~59 páginas)** | 6 docs cerrados 2026-06-01: `00-marco` v1.0 (7 frames · 9 frameworks PRIMARY incluyendo NEW Customer Health Score + 5 anti-canonical PLG/MEDDIC/BANT · framework theatre anti-pattern · 18 decisiones canónicas · §4.3 CS-as-Agents flag) + `01-gtm-playbook-phase-1` v0.1 (Path A vs B GTM scenarios · phase progression 4 stages · cross-phase KPIs 6 leading + 23 lagging + 8 investor benchmark) + `02-digital-distribution-strategy` v0.1 (**LinkedIn ONLY** validated · founder-led building in public · 6 pillars incluyendo technical NEW · 3-5 posts/sem · boundary con future Social Media department) + `03-outreach-strategy` v0.1 (outbound 1-to-1 · priority hierarchy 5 tiers · multi-stakeholder sequencing · 6 playbooks) + `04-sales-motion-three-session-demo` v0.1 (doc más denso · **three-session FLEXIBLE** · pricing deep-dive NO reveal secreto · LAER MX-adapted · Contable silent veto) + `05-channel-partner-strategy` v0.1 (re-ranked value exchange · **consultor #1 · contador #2 NEW silent veto→ally · distribuidores Phase 2+ con leverage** · demand-side first). Strategic decisions: LinkedIn ONLY · three-session flexible · pricing NO reveal secreto · channel re-ranked · demand-side first · Customer Health Score · CS-as-Agents vision capturada |
| **Product Strategy / 05-capital-y-finanzas** | 🚧 **Active v0.1 — 3 docs core + tracking xlsx + README** | **Renamed 2026-05-30** desde `05-capital-y-fundraising`. Docs: `00-funding-roadmap-y-milestones.md` v0.1 (cerrado 2026-06-02 · **Path A vs B framework formal** OWNS la decisión que GTM consume · bootstrap-first con pre-seed optionality · pre-seed $100-200K MX-realistic · milestone-anchored funding · funding stages pre-seed/seed/Series A · investor narrative arc · Stage 1→2 split · 8 anti-patterns) + `01-operational-readiness-y-business-setup-phase-1.md` v0.1 (stack 7 identidades + PFAE→SAPI + Tier framework con LOI gate + vendor stack + 5 compliance anchors) + `02-financial-model-y-projections.md` v0.1-pre-draft scaffold (5 triggers para v0.1 construction · 3+ design partners Mes 3+ data) + `README.md` v0.1 (Stage 1/2 trigger framework + tracking pointer) + **`_tracking/zenet-costos-fase-0.xlsx` v1.0** (tracker costos Fase 0 · 3 hojas Catálogo+Tracking Mensual+Dashboard · 26 conceptos pre-poblados · fórmulas NET BURN automático · baseline ~$3,960 MXN/mes). Futures deferred: 03 unit economics · 04 cash flow · 05 IR · 06 treasury |
| **Product Strategy / 06-experience-y-roadmap** | 🚧 1 nota (pending formal) | `00-cs-as-agents-vision-nota.md` v0.1-nota (draft) — captura estratégica CS-as-Agents vision (automatizar CS con AI agents · misma arquitectura agency-as-SaaS + human escalation · layered + tier-based · NO Phase 1 · hybrid 1.5-2 · AI-primary 2-3+ · preserva valor #3 "Acompañar no abandonar"). Subfolder formal pending: import production repo 3-phase UX + integrar nota |
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
│   │   ├── 03-oferta-y-pricing/            ✓ CERRADO v0.1 — 6/6 docs (00 marco · 01 modelo comercial · 02 SF offer · 03 pricing tiers · 04 viabilidad económica · 05 WTP validation)
│   │   │   └── _archive/
│   │   ├── 04-go-to-market/                ✓ CERRADO v0.1 — 6/6 docs (00 marco · 01 GTM playbook · 02 digital distribution LinkedIn ONLY · 03 outreach · 04 sales motion three-session · 05 channel/partner)
│   │   │   └── _archive/
│   │   ├── 05-capital-y-finanzas/          🚧 ACTIVE v0.1 — 3 docs core (00 funding roadmap · 01 operational readiness · 02 financial model scaffold) + README + _tracking/zenet-costos-fase-0.xlsx
│   │   │   └── _archive/
│   │   └── 06-experience-y-roadmap/        🚧 1 nota (CS-as-agents vision) · pending formal — import production repo 3-phase UX
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
| Marco de oferta y pricing (5 frames estratégicos + 10 decisiones canónicas heredadas + 8 decisiones abiertas + 8 principios estructurales · estructura 4 tiers Esencial/Pro/Multi-Sitio/Enterprise · WhatsApp service level diferenciado · agents Phase 1 full cross-tier · internal caps invisibles · defensa multi-capa AI inference · tier differentiation aditiva NO sustractiva) | ✓ active v1.0 | `Product Strategy/_context/03-oferta-y-pricing/00-marco-de-oferta-y-pricing.md` |
| Modelo comercial y términos (estructura comercial cliente-facing · pure subscription · 90-day commitment + annual prepay · ventana cancelación 7 días + Day 8 primer cargo · self-serve in-app cancellation · click-wrap/e-signature contract · 12 anti-positions · 5 compliance anchors) | ✓ active v0.1 | `Product Strategy/_context/03-oferta-y-pricing/01-modelo-comercial-y-terminos.md` |
| Programa Socio Fundador offer (deal terms Fase 0 design partners · 3-tier graceful step-down lifecycle · GO/NO-GO Mes 3 · descuento 20-30% lock-in permanente · 10 beneficios enhanced · 6 reciprocidades · 10-step flow con intent confirmation + DocuSign signing Day 1 · 11 anti-patterns) | ✓ active v0.1 | `Product Strategy/_context/03-oferta-y-pricing/02-programa-socio-fundador-offer.md` |
| Pricing tiers hipótesis (4 tiers Esencial $1,500 + Pro $1,999 + Multi-Sitio $1,799 + Enterprise · WhatsApp Esencial ventana 10 hrs customizable · Pro/Multi 24/7 · cap users 5/8/10 · internal caps invisibles · competitive anchoring DUAL · 3 escenarios pricing · 12+ edge cases · add-ons roadmap Phase 1.5+) | ✓ active v0.1 | `Product Strategy/_context/03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` |
| Viabilidad económica y COGS (Nivel 2 sanity check estructurado · costos fijos paid tier baseline $333 USD/mes · costos variables breakdown per componente · 4 user profiles canónicos · 2 escenarios COGS con MX salaries realistic · sensitivity matrix 16 cells · per-customer unit economics · break-even 14-21 clientes mixed · margin floor honest tightness · architecture mitigation 5 capas cuantificadas Capa 1 P0 prerequisite · scale projections 4 stages path-to-profitability Mes 12-15 · 3 hallazgos load-bearing + 6 sustainability levers · MX cost structure como competitive advantage moat) | ✓ active v0.1 | `Product Strategy/_context/03-oferta-y-pricing/04-viabilidad-economica-y-cogs.md` |
| WTP validation plan (3-methodology triangulation Behavioral 50% + Qualitative 35% + PSM 15% · Van Westendorp PSM detail con 4 preguntas + willingness ladder Phase 1 · qualitative interview 60-90 min structure · 10 behavioral metrics canonical · multi-stakeholder validation Owner+Manager+Chef+Contable framework · execution plan Months 1-6 cadence con Mes 3 GO/NO-GO checkpoint · triangulation framework con conflict resolution matrix · 5 trigger framework para pricing changes · outputs feeds v0.2 cross-docs · 14 anti-patterns) | ✓ active v0.1 | `Product Strategy/_context/03-oferta-y-pricing/05-wtp-validation-plan.md` |
| README capital-y-finanzas subfolder (scope + roadmap + Stage 1 vs Stage 2 trigger framework para Finance department split + external resources needed + future docs scaffolded + convention de uso) | ✓ active v0.1 | `Product Strategy/_context/05-capital-y-finanzas/README.md` |
| Funding roadmap y milestones (capital structure estratégico · Path A vs B framework formal OWNS decisión que GTM consume · bootstrap-first con pre-seed optionality · pre-seed $100-200K MX-realistic · capital structure PFAE→SAPI + SAFE · milestone-anchored funding · funding stages pre-seed/seed/Series A + use of funds · runway requirements · investor narrative arc milestone-anchored · Stage 1→2 Finance dept split · 8 anti-patterns · disciplina anti-ficción NO projections multi-year) | ✓ active v0.1 | `Product Strategy/_context/05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` |
| Operational readiness y business setup Phase 1 (stack 7 identidades formales · PFAE→SAPI sequencing · Tier framework con intent confirmation gate · lawyer + despacho + vendor stack · 5 compliance anchors · cost summary 3 escenarios · timeline hipótesis Q3 2026) | ✓ active v0.1 | `Product Strategy/_context/05-capital-y-finanzas/01-operational-readiness-y-business-setup-phase-1.md` |
| Financial model y projections (PRE-DRAFT scaffold · structural placeholder + 5 triggers para v0.1 construction + 12-section outline + data inputs needed + methodology references + cross-doc dependencies) | 🚧 draft v0.1-pre-draft | `Product Strategy/_context/05-capital-y-finanzas/02-financial-model-y-projections.md` |
| Tracking costos Fase 0 (XLSX · 3 hojas Catálogo de Costos 26 conceptos pre-poblados con Tier framework + Tipo · Tracking Mensual Jun 2026→May 2027 fórmulas automáticas subtotales + NET BURN · Dashboard resumen 12m · baseline fijo ~$3,960 MXN/mes · founder llena valores reales · feeds 02-financial-model) | ✓ activo v1.0 | `Product Strategy/_context/05-capital-y-finanzas/_tracking/zenet-costos-fase-0.xlsx` |
| Marco de Go-to-Market (7 frames estratégicos · framework stack 9 PRIMARY incluyendo Customer Health Score NEW + 5 secondary + 5 anti-canonical PLG/MEDDIC/BANT · framework theatre anti-pattern · 18 decisiones canónicas + flag CS-as-Agents vision §4.3 · v0.2 trigger post Mes 3 data) | ✓ active v1.0 | `Product Strategy/_context/04-go-to-market/00-marco-de-go-to-market.md` |
| GTM Playbook Phase 1 (master strategy · Path A vs B GTM scenarios capital integration · phase progression 4 stages Phase 0→1→1.5→2 con cohort/ICP/channels/team · transition triggers · cross-phase KPIs 6 leading + 23 lagging canonical SaaS + 8 investor benchmark Phase 1.5+ Rule of 40/Magic Number/NRR-GRR · geographic-product alignment) | ✓ active v0.1 | `Product Strategy/_context/04-go-to-market/01-gtm-playbook-phase-1.md` |
| Digital Distribution Strategy (LinkedIn ONLY Phase 1 validated stress-test · founder personal brand productized · building in public LinkedIn-native · 6 content pillars incluyendo technical AI/ML/architecture NEW · cadence 3-5 posts/sem · engagement quality > vanity · defer otros channels Phase 1.5+/2+ · boundary con future Social Media Content Creation department · 11 anti-patterns) | ✓ active v0.1 | `Product Strategy/_context/04-go-to-market/02-digital-distribution-strategy.md` |
| Outreach Strategy (direct outbound 1-to-1 distinct de inbound distribution · priority hierarchy 5 tiers network referrals > warm intros > in-person > LinkedIn DM > cold selective · multi-stakeholder sequencing Owner→Manager→Chef→Contable · messaging anclado VP §6 + voice/tone · funnel + conversion per channel · 6 channel-specific playbooks · WhatsApp NOT cold outreach · 9 anti-patterns) | ✓ active v0.1 | `Product Strategy/_context/04-go-to-market/03-outreach-strategy.md` |
| Sales Motion Three-Session Demo (doc más denso · sales cycle 8 stages · three-session FLEXIBLE NO rígido comprime/expande por lane · per-session playbooks Manager+SPIN/Chef/Owner+cierre · pricing deep-dive + justificación + cierre NO reveal secreto landing ya muestra · Contable parallel silent veto · LAER MX-adapted 9 disarming + 7 anti-patterns + identity "yo SOY el sistema" · 3-lane timing · cierre→handoff onboarding · sales enablement materials · 12 anti-patterns) | ✓ active v0.1 | `Product Strategy/_context/04-go-to-market/04-sales-motion-three-session-demo.md` |
| Channel / Partner Strategy (re-ranked value exchange + aligned incentives · 3 principios value exchange + demand-side first supply-side con leverage + phase timing · Tier 1 consultor #1 extensión Zenet + contador/despacho #2 NEW silent veto→ally · Tier 2 institutional CANIRAC/CANACO/eventos · Tier 3 distribuidores Phase 2+ supply-side con leverage Uber Eats B2B procurement · multi-plaza 3 models · 9 anti-patterns) | ✓ active v0.1 | `Product Strategy/_context/04-go-to-market/05-channel-partner-strategy.md` |
| CS-as-Agents vision nota (captura estratégica · automatizar customer service con AI agents misma arquitectura agency-as-SaaS + human escalation · layered + tier-based premium=more human preserva valor #3 "Acompañar no abandonar" · NO Phase 1 · hybrid 1.5-2 · AI-primary 2-3+ · retomar al activar subfolder 06 formal) | 🚧 draft v0.1-nota | `Product Strategy/_context/06-experience-y-roadmap/00-cs-as-agents-vision-nota.md` |
| Visual identity (logo, colors, typography) | pending | `Branding/_context/03-visual-identity/` |
| Design system snapshot | pending | `Branding/_context/05-design-system/` |
| Application examples (real published outputs) | pending | `Branding/_context/06-application-examples/` |
| Brand guidelines (precedent codified) | pending | `Branding/_context/07-guidelines/` |
| Production software context | external | Production repo: `/02_Producto-y-Tech/Production-software/Zenet/CLAUDE.md` |
| Business context / market validation | external | Production repo: `docs/project-strategy/business-context/zenet-business-context-production.md` |

---

*Last updated: 2026-06-02.*
*Next planned update: cuando se active `06-experience-y-roadmap/` formal (import production repo 3-phase UX + integrar CS-as-agents nota) · cuando `02-financial-model-y-projections.md` mueva de pre-draft a v0.1 (5 triggers cumplidos · 3+ design partners Mes 3+ data) · cuando se active Social Media Content Creation department (con doc 02 GTM digital distribution LinkedIn ONLY como strategic foundation) · cuando se active otro departamento (SEO/Content · Analytics · Email/CRM) · cuando Path A vs B decision se cierre (post design partner validation · trigger v0.2 funding roadmap) · cuando customer research transitions de `discovery-pre-PMF` a `design-partner-validation` etapa · cuando un new strategic decision belongs en section 4.*
