---
name: Competidores prioritarios — deep dive
description: Deep dive de 11 vendors prioritarios para Zenet — 4 Direct OPERACIONAL active MX (PoloTab, Parrot Software, Toteat, Fudo) + 7 Direct CATEGORIAL reference benchmarks foreign (Nory, Apicbase, FoodOp, MarginEdge, Supy, Restoke.ai, Loaded). Filename "directos" preserved per CLAUDE.md convention pero scope reframed: covers vendors Zenet enfrenta en deals + structural analogs que informan roadmap. Q5 surfaced Restoke + Loaded como Direct competitors (closest functional analogs globally). MarginEdge + Supy moved from doc 03 para internal consistency.
type: competitive-analysis
last_updated: 2026-05-16
status: active
version: 0.2
owner: Alan Bahena
---

# Competidores prioritarios — deep dive

> Filename `02-competidores-directos-deep-dive.md` preserved per CLAUDE.md convention. **Scope reframed:** vendors Zenet enfrenta operacionalmente en deals (Direct OPERACIONAL Tier Alpha + Beta) + structural analogs que informan roadmap Zenet (Direct CATEGORIAL Tier Delta references).

## Índice

1. [Propósito + reframe del doc](#1-propósito--reframe-del-doc)
   - 1.1 Qué responde
   - 1.2 Por qué reframe del filename
   - 1.3 Cómo se organiza
   - 1.4 Diferencia con docs vecinos
2. [Marco aplicado — la lista deep dive](#2-marco-aplicado--la-lista-deep-dive)
   - 2.1 Grupo 1 — Direct OPERACIONAL active MX (4 vendors)
   - 2.2 Grupo 2 — Direct CATEGORIAL reference benchmarks (3 vendors)
   - 2.3 Per-vendor template structure
3. **[Grupo 1 deep dives — Direct OPERACIONAL active MX](#3-grupo-1-deep-dives--direct-operacional-active-mx)**
   - 3.1 ⭐ PoloTab (Tier Alpha #1)
   - 3.2 ⭐ Parrot Software (Tier Alpha #2)
   - 3.3 ⭐ Toteat (Tier Beta #3)
   - 3.4 ⭐ Fudo (Tier Beta #4)
4. **[Grupo 2 — Direct CATEGORIAL reference benchmarks](#4-grupo-2--direct-categorial-reference-benchmarks)**
   - 4.1 Nory (UK — closest agentic AI hospitality OS analog)
   - 4.2 Apicbase (Belgium — AI-native BoH OS rebrand 2025 + MCP integration)
   - 4.3 FoodOp (UK — chef co-pilot brand archetype match)
   - 4.4 MarginEdge (USA — 10-year AI head start + best ICP fit) ⭐ NEW v0.2
   - 4.5 Supy (UAE/UK — Pure BoH AI shipped + Deliverect en-mx partial) ⭐ NEW v0.2
   - 4.6 **Restoke.ai (Australia — THE closest functional analog Zenet globally)** ⭐⭐ NEW v0.2 (Q5)
   - 4.7 Loaded (NZ — AI invoice processing + independent restaurant ICP fit) ⭐ NEW v0.2 (Q5)
5. **[Cross-vendor synthesis](#5-cross-vendor-synthesis)**
   - 5.1 Pattern recognition — dimensiones compartidas
   - 5.2 Disarming priorities por vendor (sales playbook)
   - 5.3 Differentiation matrix Zenet vs cada vendor
   - 5.4 Threat composite — quién es threat #1 por decision criterion
6. [Watchlist consolidado per vendor](#6-watchlist-consolidado-per-vendor)
7. [Discovery questions para design partner interviews (anexo)](#7-discovery-questions-para-design-partner-interviews-anexo)
8. [Fuentes](#8-fuentes)

---

## 1. Propósito + reframe del doc

### 1.1 Qué responde

Este doc responde una pregunta única: **¿a quién enfrenta Zenet operacionalmente en deals los próximos 18 meses, y de quién Zenet aprende para construir su producto + GTM?**

Es **el doc que sales abre antes de cada deal** — deep dive de 7 vendors con feature set, pricing, GTM motion, customer sentiment, AI roadmap, MX readiness, strategic implications, watchlist signals, y defensive moves Zenet específicos.

### 1.2 Por qué reframe del filename

El filename dice *"competidores directos deep dive"* pero **Q3 verificó que NO hay vendors Direct active en MX hoy** (cf. doc 01 §3 white space declarado). La categorización Direct/Indirect/Adjacent/Reference-only es **product taxonomy útil para mapeo (doc 01 §10)**, pero NO refleja **threat priority operacional**.

**Reframe aplicado:** Doc 02 cubre vendors que Zenet enfrenta operacionalmente + structural analogs que informan roadmap. Filename preserved per CLAUDE.md convention (NO file renaming for v0.X edits).

### 1.3 Cómo se organiza

| Grupo | Subtype | Vendors | Coverage |
|---|---|---|---|
| **Grupo 1** | Direct OPERACIONAL — active MX, compite por mismo wallet + decision-maker | PoloTab · Parrot Software · Toteat · Fudo | Deep dive completa (10 sub-sections per vendor) |
| **Grupo 2** | Direct CATEGORIAL — structural analog AI-native + BoH-first, foreign no-MX | Nory · Apicbase · FoodOp · MarginEdge · Supy · Restoke.ai · Loaded | Reference benchmark coverage (5-7 sub-sections per vendor, depth variable por structural similarity) |

**Total: 11 vendors deep dive (v0.2).** Tier Gamma (Last.app, Bistrosoft) + Tier Epsilon (incumbents legacy + below-radar resto) van a doc 03.

### 1.4 Diferencia con docs vecinos

| Doc | Lens | Output |
|---|---|---|
| `00-marco-y-disciplina-competitive` | Constitución del subfolder | Classification framework + anti-falsificación rules |
| `01-mapa-competitivo-y-categorias` | El mapa de los 45 vendors | Taxonomía + classification + threat ranking |
| **`02-competidores-directos-deep-dive`** (este doc) | **Deep dive de los 7 vendors más críticos** | **Sales prep + product roadmap + defensive moves** |
| `03-competidores-indirectos-y-adyacentes` | Resto Indirect + Adjacent + reference points secundarios | Incumbents (displacement) + below-radar + references resto |
| `04-feature-y-pricing-comparative` | Matrix lado-a-lado | Feature/pricing comparison side-by-side |
| `05-gtm-y-positioning-comparado` | Cómo cada vendor llega al mercado | GTM motion comparison |
| `06-switching-dynamics-y-incumbente` | Switching cost + displacement playbook | Sales motion específico para mover users |
| `07-diferenciacion-zenet-y-defensibility` | Síntesis defensibility | Moat analysis + vendor risk para Zenet |

Si solo tienes 30 minutos antes de un deal, lee este doc + doc 01 §10 (classification table) + doc 06 (switching playbook). Resto son context.

---

## 2. Marco aplicado — la lista deep dive

### 2.1 Grupo 1 — Direct OPERACIONAL active MX

> Vendors que el prospect TJ considera como alternativa real vs Zenet en deal activo. **Tier Alpha + Beta del framework doc 01 §3.4.** Monitoring mensual obligatorio. Sales team debe conocer profundamente.

| Vendor | Tier | Origin | MX Activity | MX Readiness | Velocity | Threat horizon |
|---|---|---|---|---|---|---|
| **PoloTab** | 🚨 Alpha #1 | México (CDMX+MTY, founded 2022) | 36+ ciudades · YC W23 · 18-person team | **7.5/10** | MEDIUM capable (zero AI shipped) | **6-12 mo** |
| **Parrot Software** | 🚨 Alpha #2 | México (Monterrey-born, CDMX HQ, founded April 2020) | 3,200+ active POS · CDMX + MTY + Riviera Maya · 57 empleados | **8.5/10** | LOW-MEDIUM capable (3,200 POS ML corpus, zero AI shipped) | **6-12 mo** |
| **Toteat** | 🚨 Beta #3 | Chile (~2014-2015) | MX commercial team desde 2023 · Country Manager Tomás Drápela · 5K+ MX restaurants claim | **5.5/10** | HIGH funded ($7.4M septiembre 2025 para AI) | **12-18 mo** |
| **Fudo** | 🚨 Beta #4 | Argentina (Delaware entity, CDMX office, ~2015-2018) | MX office Av. Oaxaca 96 Roma Norte · pricing PDF MX Feb 2026 · WhatsApp AI shipped diciembre 2025 | **6.0/10** | MEDIUM proven (WhatsApp AI shipped, BoH AI gap) | **12-18 mo** |

### 2.2 Grupo 2 — Direct CATEGORIAL reference benchmarks (7 vendors v0.2)

> Vendors AI-native + BoH-first + structural analog a Zenet, foreign sin MX presence. **NOT threat inmediato** (entry friction 24-36 meses), **PERO informan product roadmap + GTM playbook + monitor for LATAM expansion signals.** Q5 (2026-05-16) expanded Grupo 2 desde 3 a 7 vendors al verify Restoke.ai + Loaded como Direct competitors estructuralmente · MarginEdge + Supy moved from doc 03 para internal consistency.

| Vendor | Tier | Origin | MX Activity | MX Readiness | Velocity | Threat horizon |
|---|---|---|---|---|---|---|
| **Nory** | 🟡 Delta | UK (Dublin/London, founded ~2020) | None confirmed · UK + US HQ NY marzo 2026 | **0/10** | VERY HIGH (agentic AI shipped) | **24-36 mo si LATAM** |
| **Apicbase** | 🟡 Delta | Belgium (founded April 2017) | None confirmed | **0/10** | HIGH (AI-native rebrand 2025, MCP integration) | **24-36 mo contingent SMB pivot** |
| **FoodOp** | 🟡 Delta | UK (London) | None confirmed | **0/10** | HIGH (AI co-pilot chefs) | **24-36 mo** |
| **MarginEdge** ⭐ | 🟡 Delta | USA (Arlington VA, founded 2015) | None confirmed (Spanish toggle UI only) | **0.5/10** | VERY HIGH (10-year AI head start) | **24-36 mo contingent LATAM** |
| **Supy** | 🟡 Delta | UAE/UK (founded 2021) | None confirmed (Deliverect en-mx partial path) | **0/10** | MEDIUM-HIGH (AI invoice capture + discrepancy detection shipped) | **36+ mo** |
| **Restoke.ai** ⭐⭐ | 🟡 Delta | Australia (Melbourne, founded 2019/2020) | None confirmed (US expansion April 2025) | **0/10** | **HIGH (agentic AI shipped — closest functional analog Zenet globally)** | **36+ mo geographic** |
| **Loaded** ⭐ | 🟡 Delta | New Zealand (Queenstown, founded 2010) | None confirmed (10K+ venues AU/NZ/UK/US claim) | **0/10** | MEDIUM (AI invoice processing shipped) | **36+ mo** |

### 2.3 Per-vendor template structure

**Grupo 1 (10 sub-sections per vendor):**

1. Company profile + founding context + tech stack
2. Product depth analysis (features shipped vs roadmap vs marketing claim)
3. Pricing + business model deep dive
4. GTM motion (channel · sales process · customer acquisition · paid ads aggressiveness)
5. Customer reviews + sentiment (G2 · Capterra · Trustpilot · Reddit · forums MX)
6. AI roadmap + execution velocity assessment
7. Mexican market readiness deep dive (10-factor checklist)
8. Strategic implications para Zenet (cómo competir / displacement narrative / messaging)
9. Watchlist signals + cadence per vendor
10. Defensive moves Zenet prioritized

**Grupo 2 (6 sub-sections per vendor — depth variable por structural similarity):**

1. Company profile + founding + tech stack
2. AI features shipped (verified)
3. Product architecture lessons for Zenet
4. GTM playbook lessons for Zenet
5. LATAM expansion risk monitoring + triggers
6. Strategic implications para Zenet

**Coverage depth dentro de Grupo 2:**
- **Restoke.ai** (closest functional analog) — full depth
- **MarginEdge** (10-yr AI head start + best ICP fit) — full depth
- **Apicbase** (AI-native rebrand 2025 + MCP integration) — full depth
- **Nory** (closest agentic AI hospitality OS analog) — full depth
- **Supy** (Pure BoH AI shipped + Deliverect en-mx) — medium depth
- **Loaded** (AI invoice processing + independent ICP) — medium depth
- **FoodOp** (chef co-pilot brand archetype) — lighter (smaller scale, less data)

---

## 3. Grupo 1 deep dives — Direct OPERACIONAL active MX

### 3.1 ⭐ PoloTab — Tier Alpha #1

`[Classification: Indirect (operacional)]` · `[Origin: México — CDMX + Monterrey]` · `[MX Readiness: 7.5/10]` · `[Velocity: MEDIUM capable]` · `[Threat horizon: 6-12 meses]`

#### 3.1.1 Company profile + founding context + tech stack

**Identity:**
- **Legal entity:** PoloTab (polotab.com / developer.polotab.com)
- **Founded:** 2022 por Aldo Piaggio (CEO), Juan Chomali (CTO), Andres Richardson (COO)
- **YC alumni:** **Winter 2023 batch (W23)** — significant credibility signal + Silicon Valley network funding potential
- **Team size:** ~18 empleados (LinkedIn verified Q3)
- **Locations:** CDMX (HQ) + Monterrey office

**Founder background load-bearing:**
- **Juan Chomali (CTO):** ex-Goldman Sachs STRATS engineer · started coding at age 12 · built Apple App Store apps prior to PoloTab. Indicator de modern engineering competence + technical depth para AI pivot capacity.
- **Aldo Piaggio (CEO):** Mexican founder · 100% Mexican company positioning
- **Andres Richardson (COO):** Operations focus

**Tech stack (Q3 verified):**
- **Cloud-native desde inception 2022** — modern AWS/cloud-based stack inferred (Y Combinator W23 batch standard)
- **API-first:** public developer documentation at `developer.polotab.com` (verified Q3)
- **Proprietary hardware model:** PoloTab terminals — Android-based · locks customers a hardware Polo (diferenciador y constraint simultáneo)
- **KDS module:** add-on disponible
- **Offline-first mode:** confirmed available
- **Automatic OTA updates:** "cloud-synced without interruption"

**Sources Q3:** YC company page · developer.polotab.com · LinkedIn company page · product pages · pricing pages.

#### 3.1.2 Product depth analysis

**Features shipped verified:**

| Feature | Status | Source |
|---|---|---|
| POS + payment processing | ✅ Shipped | Product page |
| Inventory management (recipe-level cost calculation) | ✅ Shipped | Product page |
| **Automatic facturation** (customer data ingestion + bulk-folio close en seconds) | ✅ Shipped | `/facturacion` page |
| Real-time inventory cost per recipe | ✅ Shipped | Product page |
| KDS (Kitchen Display System) | ✅ Shipped (add-on $200 MXN/mes) | Product page |
| Multi-location admin ("manage all your chains, branches and virtual stores from one place") | ✅ Shipped | Product page |
| Cloud-synced updates | ✅ Shipped | Product page |
| Proprietary hardware terminal | ✅ Shipped | Pricing page |

**Features in roadmap (declared but NOT shipped):**

- AI-powered features → **`[AI marketing claim]`** ("PoloTab uses data to identify opportunities" — product page language, NO demo evidence)

**Features NOT shipped (gap):**

- Predictive AI (demand forecasting, menu optimization)
- LLM-based natural language query
- AI procurement automation
- AI recipe creation
- Voice stock counting (Apicbase reference comparison)

**Module architecture:**
- Recipe → Inventory → Cost ✓
- POS → KDS ✓
- **Procurement (supplier PO workflow):** NOT documented as dedicated module
- **Analytics:** descriptive dashboards (NOT predictive)

**Comparison vs Zenet category:**
- PoloTab es **POS-first con BoH modules**, NOT pure BoH como Zenet
- Module overlap parcial: recipe costing + inventory ✓; procurement + AI analytics = gap

#### 3.1.3 Pricing + business model

**Pricing tiers verified:**

| Plan | Pricing MXN | Includes |
|---|---|---|
| **Base plan** | ~$990 USD flat rate (Capterra reference) | Core POS + inventory |
| **Affiliate program reference** | **~$1,490 MXN/mes/sucursal + IVA** | Standard plan per affiliate disclosure |
| **PoloMini (entry)** | **$990 MXN/mes** | POS + Hand-Helds (per polotab.com/polomini) |
| **KDS add-on** | **+$200 MXN/mes** | Kitchen Display System module |

**Hardware:**
- **Required:** PoloTab terminal proprietary (separate purchase/lease)
- **PoloPay:** integrated payment terminal · "open banking approach" (per Q4 reference comparison with Parrot Pay)

**Business model:**
- SaaS subscription per location/month
- + Hardware terminal margin (rental or purchase)
- + Payment processing fees (rate undisclosed)
- + Add-ons (KDS, additional features)

**Pricing positioning:**
- Mid-tier among Mexican POS (Parrot Early Direct $949 vs PoloMini $990 = very close entry tier competition)
- Below Parrot Full Service ($2,800) but with hardware lock-in adding TCO
- More expensive than Fudo Inicial ($360) but less than Fudo Pro ($1,050) + similar to PoloTab base

#### 3.1.4 GTM motion

**Channel strategy:**
- **Direct sales** primary — 18-person team CDMX-based (LinkedIn verified)
- **Inbound digital:** Instagram, YouTube product demos, ProductHunt 2026 listing, G2 profile active
- **No distributor network published** — `[SIN FUENTE PUBLICADA]` para distributor recruitment program
- **YC network:** Y Combinator W23 batch = network effect + credibility con investors + early-adopter operators
- **MX-based sales hiring:** open Sales & BD role for MX-based rep (LinkedIn verified Q3)

**Sales process inferred:**
- Inbound led (ProductHunt + Instagram + YC visibility)
- Demo-based conversion
- WhatsApp-forward onboarding (per product FAQ)
- Trust-building messaging (NO urgency/countdown CTAs)

**Customer acquisition:**
- **36+ ciudades MX claim** (Q1 + Q3) — geographic spread but city-level customer detail NOT published
- **No named customer logo wall** on website (Q3 finding)
- **Self-reported scale** without third-party validation

**Paid ads aggressiveness:** YC-style growth hacking inferred · NOT as aggressive paid advertising as Parrot per Q4 comparison (Parrot has more active paid social/content marketing)

#### 3.1.5 Customer reviews + sentiment

**Review platforms:**

| Platform | Rating | Reviews count | Notes |
|---|---|---|---|
| ProductHunt | Active listing 2026 | `[SIN FUENTE PUBLICADA exact count]` | Recent visibility signal |
| G2 | Active profile | `[SIN FUENTE PUBLICADA reviews count]` | Profile exists but review count low |
| Capterra | Listed | `[SIN FUENTE PUBLICADA]` | Standard MX SaaS listing |
| LinkedIn | Active company page | 18 followers verified Q3 | Modest social footprint |
| Trustpilot | `[SIN FUENTE PUBLICADA]` | — | NOT verified |
| Reddit / Foros MX | `[SIN FUENTE PUBLICADA]` | — | NOT surfaced in Q1/Q3 |

**Review profile assessment:** **Thin for the claim of 36+ ciudades + YC backing.** Similar pattern a Parrot Software — Mexican SMB restaurant segment NO usa English-language review platforms intensively. Gap para diligence + competitive intelligence.

**Primary research path:** design partner interviews TJ — *"¿conoces PoloTab? ¿qué te dijeron? ¿qué te gustó? ¿qué te frustró?"*

#### 3.1.6 AI roadmap + execution velocity assessment

**AI Velocity Score: MEDIUM capable (zero AI shipped today)**

**What PoloTab claims:**
- "PoloTab uses data to identify opportunities" → **`[AI marketing claim]`** (product page language, NO demo evidence)
- "Tecnología más avanzada" framing en website
- Cloud-synced updates + real-time inventory cost calculation (descriptive analytics, NOT predictive AI)

**What was NOT found (Q3):**
- No announced AI recommendation engine, predictive ordering, or demand forecasting module
- No confirmed GPT/LLM integration
- No AI/ML-specific product release notes
- No AI/ML engineer hires LinkedIn visible
- No dedicated AI research publications

**AI execution velocity ASSESSMENT:**

**Capacity:** ⭐⭐⭐⭐⭐ (very high)
- Modern cloud-native stack 2022 + YC W23 + CTO ex-Goldman Sachs STRATS = **structural capacity para ship AI features en 3-9 meses si decide pivot**

**Current execution:** ⭐ (very low)
- Zero AI features shipped
- No AI hiring signals
- No AI roadmap announcement publicly

**Threat scenario:**
- **Trigger: AI hiring announcement on LinkedIn (AI engineer / ML engineer roles posted by PoloTab)**
- **Trigger: AI feature announcement (BoH AI demand forecasting, AI recipe optimization)**
- **Trigger: Series A/B announcement (capital influx para AI dev)**
- If trigger fires → **6-12 meses para shipping AI BoH feature competitive con Zenet positioning**

**Implicación para Zenet:** PoloTab tiene **capacity equal o better que Zenet para ship AI features** dada su engineering team + YC backing. La ventaja Zenet es **timing + AI-native positioning desde Day 1** vs PoloTab que necesitaría AI bolt-on. **Window 6-12 meses para establecer Zenet brand antes que PoloTab pivot.**

#### 3.1.7 Mexican market readiness deep dive (Q3 verified)

| Factor | Status | Evidence |
|---|---|---|
| **CFDI 4.0 native** | ✅ Operational | `/facturacion` page · bulk-folio generation feature confirmed |
| CONTPAQi / Aspel / Siigo integration | **Unknown** | No integration page lists these · `[SIN FUENTE]` |
| **Mexican Spanish specific** | ✅ Operational | 100% Mexican company · México-specific product copywriting |
| **WhatsApp CS (uso #1 post-sale support)** | ✅ Claimed | Product FAQ instructs users *"write us on WhatsApp"* · operational status confirmed by UX copy |
| MXN pricing displayed | ✅ Operational | All pricing in MXN on `/planes` page |
| Mexican peer reference logos | 🟡 Partial | "36 ciudades de México" claim `[Vendor self-reported]` · no named client logos found on website |
| **MX-based sales team** | ✅ LinkedIn verified | All 18 employees located CDMX · hiring for MX-based Sales & BD rep |
| Local consultor / distributor partnership MX | ❌ None | No distributor program published `[SIN FUENTE]` |
| **SAT compliance messaging** | ✅ Operational | CFDI module · constancia de situación fiscal workflow · SAT-compliant invoicing |
| Sales motion Hofstede-aligned | ✅ Observed | Website tone trust-building · explanation-first · no urgency/countdown CTAs · WhatsApp-forward onboarding |
| ⭐ **BONUS: WhatsApp operational interface (uso #3)** | ❌ Dashboard required | Operator interacts con product via dashboard/web admin · WhatsApp solo para CS support (uso #1) |

**Composite Mexican Readiness Score: 7.5/10** (Q3 verified · 10-factor baseline · WhatsApp operational interface ❌ vs Zenet ✅)

#### 3.1.8 Strategic implications para Zenet

**Cómo competir vs PoloTab:**

**(1) NO compete en POS layer** — PoloTab es POS-first. Zenet trabaja **encima** del POS. Mensaje: *"NO reemplazas tu PoloTab — Zenet vive sobre él y le agrega capa cognitiva AI"*.

**(2) Explotar gap AI shipped** — PoloTab claim "uses data" sin AI features shipped. Zenet diferenciador: *"AI shipped, NOT AI claimed"*. Demo features AI substantive (demand forecasting + automated procurement + voice stock counting).

**(3) Pricing competitive** — PoloTab base $990 MXN/mes · Zenet target $1,500 MXN/mes. Mensaje: *"$510 más por mes te da: AI demand forecast + procurement automation + recipe cost predictivo — features que PoloTab NO tiene shipped"*. ROI clear.

**(4) Hardware lock-in vulnerability** — PoloTab requires proprietary terminal. Zenet hardware-agnostic = lower TCO + flexibility. Reframe: *"Zenet works sobre cualquier POS — incluso PoloTab si ya lo tienes"*.

**(5) Defensive narrative si prospect dice "ya tenemos PoloTab"** — *"Perfecto. Zenet NO te pide cambiar POS. Vive sobre PoloTab y te agrega la capa AI que PoloTab aún NO ship: procurement automation + demand forecasting predictivo. Pruébalo 30 días sin cambiar nada."*

**Displacement narrative (si quiere reemplazar PoloTab):**
- Hardware lock-in friction (PoloTab terminal sunk cost)
- Mejor estrategia: layer Zenet over PoloTab, NOT replace

#### 3.1.9 Watchlist signals + cadence

**Cadencia: MENSUAL crítico — founder personalmente** (cf. doc 01 §13.2)

| Trigger | Threshold | Action |
|---|---|---|
| AI feature SHIPPED en product (NOT marketing claim) | Cualquier announcement | **EMERGENCY RESPONSE** — accelerate Zenet timeline 50% |
| AI/ML engineer hires LinkedIn | Cualquier role posted | Monitor closely + prepare messaging response |
| Series A/B announcement | Cualquier funding round | Capital influx implies AI dev acceleration probable |
| BoH module launch (procurement + analytics predictivo) | Feature announcement | Direct competitor activation |
| Enterprise customer count published | Specific numbers | Validate momentum claim |
| Pricing tier change | Especially budget tier compress | Re-evaluate competitive positioning |

**Monitoring inputs:**
- LinkedIn (AI hires)
- polotab.com website (feature announcements)
- ProductHunt 2026+ listings
- Crunchbase (funding rounds)
- YC blog (alumni updates)
- developer.polotab.com (API changes signaling new features)

#### 3.1.10 Defensive moves Zenet prioritized

**Immediate (0-3 meses):**

1. **Establecer 5+ design partners TJ** antes que PoloTab decide BC/TJ expansion
2. **Brand defense "AI-native MX shipped, NOT claimed"** — produce demo videos showing AI features in action (NOT marketing copy)
3. **Hardware-agnostic positioning explicit** — *"Zenet trabaja sobre tu POS existente, incluyendo PoloTab"*

**Medium (3-9 meses):**

4. **Consultor partner network TJ** — Entropía Digital + similar consultors locales como Zenet partners
5. **Peer evidence reproducible** — 3+ TJ restaurant case studies con metrics ROI cuantificables
6. **Pricing premium justified** — $1,500 MXN/mes positioned como "$510 vs PoloTab por features que PoloTab NO tiene"

**Long-term (9-18 meses):**

7. **AI depth advantage** — ship features incrementally (procurement automation Q3 2026, demand forecasting Q4 2026, voice stock counting Q2 2027) antes que PoloTab pivot
8. **Brand authority "AI-native MX"** — content marketing + thought leadership como first-mover

---

### 3.2 ⭐ Parrot Software (ParrotConnect) — Tier Alpha #2

`[Classification: Indirect (operacional)]` · `[Origin: México — Monterrey-born, CDMX HQ + San Pedro Garza García NL]` · `[MX Readiness: 8.5/10]` · `[Velocity: LOW-MEDIUM capable]` · `[Threat horizon: 6-12 meses]`

#### 3.2.1 Company profile + founding context + tech stack

**Identity:**
- **Legal entity:** Parrot Software (parrotsoftware.com.mx / parrotsoftware.io)
- **Founded:** **April 2020** (company creation) · soft launch **enero 2021**
- **Founders:** **Roberto Cebrián + David Villarreal** (originally Monterrey)
- **Current HQ:** **Mexico City** (Colonia Juárez) · office San Pedro Garza García, NL
- **Team size:** ~57 empleados (GetLatka 2024) — **3x más grande que PoloTab**
- **LinkedIn followers:** ~4,658 (abril 2025)

**Founder background:**
- **Roberto Cebrián + David Villarreal:** Monterrey foodtech scene · YC-adjacent ecosystem (per Q4 verification)
- People Director: Rebeca Vivanco (active HR function 2020+, LinkedIn verified)

**Tech stack (Q4 verified):**
- **Cloud-native desde inception 2021** — NO legacy migration · platform built for cloud from day one
- **Android-native POS client** (deliberate modern choice — cost-efficient hardware + broad tablet availability MX, NOT technical debt)
- **iOS NOT supported** (deliberate — gap for some segments)
- **100% cloud-operated** — data stored + accessible cloud · web-based admin portal + mobile reporting app
- **Offline-first mode:** orders register + sync upon reconnection
- **SaaS subscription model:** regular feature updates · YouTube tutorials show active cadence through 2025
- **Integrations active:** Uber Eats, Rappi, DiDi Food (99.9% order acceptance rate claimed) · CFDI 4.0 SAT compliance (April 2023)
- **Architecture age:** ~4-5 años — modern cloud principles, technical debt risk possible pero NO architectural distress evidence

#### 3.2.2 Product depth analysis

**Features shipped verified (Q4):**

| Feature | Status | Source / Date |
|---|---|---|
| POS + payment processing | ✅ Shipped (since 2021) | Core product |
| Inventory management | ✅ Shipped | Product page |
| Recipe costing | ✅ Shipped (commission tracking 2023) | Help center |
| **CFDI 4.0 SAT compliance** | ✅ Shipped April 2023 | SAT module rollout |
| **Parrot Pay terminal** (proprietary closed ecosystem) | ✅ Shipped 2023 | Hardware launch |
| KDS + table service | ✅ Shipped (2024 expansion) | Product updates |
| Delivery integrations (Uber Eats, Rappi, DiDi) | ✅ Shipped — "Best Integration" awards 2022 | UberEats/Rappi recognition |
| Multi-sucursal admin | ✅ Shipped | Product page |
| WhatsApp orders (QR menu) | ✅ Shipped | Product marketing |
| Mobile reporting app | ✅ Shipped (Apple App Store 4.6/5 n=55) | App Store |
| Parrot Pay sub-4-second payments | ✅ Shipped 2025 | Instagram demo |
| **Early Direct** entry plan ($949 MXN/mes) | ✅ Shipped 2026 | Pricing promo |

**Features in marketing claim (NOT shipped as AI):**

- "Tecnología más avanzada y automatización" → general framing
- "+28% sales increase" + "+126% delivery sales growth" → outcome metrics, NOT AI products
- Customer segmentation ("quiénes vuelven y qué les gusta") → **data access, NOT AI-personalization**
- **2025 Industry Report:** insights from 3,200+ active POS datasets → **descriptive business intelligence, NOT predictive AI**

**Features NOT shipped (gap):**

- AI recommendation engine
- Predictive ordering / demand forecasting
- AI menu optimization
- AI procurement
- GPT/LLM integration en POS interface
- AI/ML product release notes or changelog entries

**Strategic gap:** Parrot **sit on 3,200+ POS real-time data dataset** — extremadamente valioso ML training corpus para demand forecasting / menu optimization / theft detection / customer retention modeling. **El asset is real; execution on AI is absent.**

#### 3.2.3 Pricing + business model (Q4 verified)

**Pricing tiers MXN + IVA:**

| Plan | Pricing | Includes |
|---|---|---|
| **Early Direct** (2026 promo) | **$949 MXN/mes** | Limited entry-level promo |
| **Early / Starter** | $1,800 MXN/mes | 1 terminal · 100 CFDI folios |
| **Pro / Quick Service** | $1,800-2,200 MXN/mes | Adds inventory module · delivery integration |
| **Full Service** | **$2,800 MXN/mes** | Table service · 500 CFDI folios · KDS integration |

**Hardware:**
- **Parrot Pay terminal:** bundled/rented · acquisition cost not publicly disclosed
- **Payment processing fees:** included margin (MDR/interchange rate undisclosed)

**Pricing model:**
- Non-public — contact-for-pricing on main website
- Surface through third-party comparison sites (Last.app comparison especially)
- Additional terminals or CFDI overages → extra charges
- **Effective first-year cost significantly higher** than software-only alternatives (Last.app comparison) due to proprietary payment rails

**Lock-in mechanism (Parrot Pay):**
- Closed ecosystem · Parrot controls full stack
- Revenue streams: (1) hardware margin (2) transaction processing fees (3) auto-conciliation SaaS value-add
- **Restaurants cannot use bank TPV directly + get full reconciliation benefits**
- **Competitive vulnerability:** high-volume restaurants (>MXN 600K/mes sales) **CANNOT negotiate their own bank MDR rates** = meaningful cost disadvantage vs open-ecosystem competitors (Last.app uses this argumento competitively)

#### 3.2.4 GTM motion (Q4 verified)

**Channel strategy:**
- **Direct sales** primary — CDMX-based + Monterrey-based
- **High-production Instagram marketing** 2025-2026 (active reels showing POS demos · February + December posts)
- **Content marketing:** blog active · YouTube tutorial series 2025 · Industry Report 2025
- **No distributor network published** — direct-first model

**Sales process inferred:**
- Inbound (Instagram + blog + Industry Report)
- Demo-based conversion
- Custom pricing quotation (NOT self-service)
- WhatsApp + phone + email 365-day support claimed

**Customer acquisition signals:**
- **3,200+ active POS** per 2025 Industry Report (self-reported, no audit)
- **500+ restaurants** claim from Series A press (enero 2022) — **outdated** (LinkedIn still shows this 2022-era figure)
- Estimated 1,500-2,500 restaurant accounts (many multi-terminal)
- **GetLatka 2024:** $21M ARR (modeled, NOT audited) · prior $6M
- **Growth rate 460% claimed** GetLatka — unverified

**Geographic spread (Q4 verified):**
- ✅ Monterrey / NL (founding city)
- ✅ CDMX (HQ)
- ✅ Riviera Maya (QR/Cancún) — cited at Series A
- 🟡 Guadalajara / Jalisco — claimed "nationwide" but NO city-specific verification
- 🔴 **Tijuana / BC: ZERO verified presence** — no press mention, no customer case study, no distributor named
- 🔴 Northern Border generally NOT documented

**Paid ads aggressiveness:** ✅ HIGH (Active social/content marketing · Industry Report 2025 published · Instagram reels production · YouTube tutorial series · blog active)

#### 3.2.5 Customer reviews + sentiment (Q4 verified)

**Review platforms:**

| Platform | Rating | Reviews count | Notes |
|---|---|---|---|
| **Capterra (English)** | NO rating | **0 reviews** | **Notable gap** para plataforma claiming 3,200+ POS |
| Capterra MX | "contact us" pricing | N/A reviews | Minimal presence |
| **Trustpilot** | **4.2/5** | **6 reviews** | Very thin sample · all positive |
| **G2** | NO reviews surfaced | 0 | Listed but no user ratings |
| **Apple App Store** (Parrot mobile reporting app) | **4.6/5** | 55 ratings | Mobile app specifically |
| Instagram engagement | Active 2025-2026 | High-production content | Marketing-focused, NO independent signal |
| **Indeed MX** (employee sentiment) | 1 negative review | Mentions **nepotism / family hires en leadership positions** | Internal culture signal |

**Review profile assessment:** **Remarkably thin for $21M ARR claim.** Zero G2 reviews + near-zero Capterra reviews for SaaS company of this scale is **unusual** and suggests:
- Mexican SMB restaurant segment NO usa English-language review platforms intensively
- OR Parrot NO invested en review generation
- **Blind spot for diligence + competitive intelligence gap**

**Negative culture signal:** Indeed MX review menciona *"no toman en cuenta la experiencia personal y colocan a sus familiares en puestos de líderes y gerencia"* — potential family-hire pattern affecting internal velocity.

**Primary research path:** design partner interviews TJ — *"¿conoces Parrot? ¿qué te dijeron? ¿cómo fue la experiencia? ¿qué te frustra?"*

#### 3.2.6 AI roadmap + execution velocity (Q4 verified)

**AI Velocity Score: 2/10 — Marketing-Stage AI (NO production feature verified)**

**What Parrot claims:**
- Website: *"tecnología más avanzada y automatización"* (general framing)
- Industry Report 2025: insights from **3,200+ active POS datasets** = **descriptive BI, NOT predictive AI**
- Outcome metrics ("+28% sales", "+126% delivery") attributed to operational features, NOT AI models
- Customer segmentation: characterized as **data access, NOT AI personalization**

**What was NOT found (Q4):**
- ❌ Announced AI recommendation engine
- ❌ Predictive ordering / demand forecasting module
- ❌ Confirmed GPT/LLM integration en POS interface
- ❌ AI/ML-specific product release notes or changelog entries
- ❌ Dedicated AI research publications or open-source contributions

**Hiring signals (LinkedIn Q4):**
- **NO dedicated ML/AI engineer roles confirmed** at Parrot Software specifically
- 45 open Parrot Software roles globally (NOT verified MX restaurant POS roles)
- 1 Product Manager profile (Víctor Hugo Espinosa Monroy, joined enero 2023) — NOT AI-specialization

**AI execution velocity ASSESSMENT:**

**Capacity:** ⭐⭐⭐⭐ (high)
- Cloud-native 2021 stack + 57 empleados + **3,200+ POS dataset (ML training corpus rich)** + $11.7M raised + GetLatka $21M ARR claim

**Current execution:** ⭐ (very low)
- Zero AI features shipped
- No AI/ML hiring signals visible
- AI is marketing aspiration, NOT delivered capability

**Threat scenario:**
- **Trigger: Series B announcement** (NOT announced mayo 2026) — capital influx likely para AI dev
- **Trigger: AI/ML engineer hires LinkedIn**
- **Trigger: AI feature announcement leveraging 3,200 POS dataset** (demand forecasting, menu optimization)
- **Trigger: BC/TJ customer logo published** — geographic expansion + AI ship paralelo could compound threat

**If trigger fires:** **6-12 meses para shipping competitive AI BoH features** dada su data asset advantage.

**Implicación para Zenet:** Parrot's data asset (3,200+ POS) es **enorme ML training advantage** que Zenet NO tiene. El **first mover to ship credible AI analytics layer to SMB MX restaurants** tendrá meaningful retention moat. **Parrot's gap es present pero corregible — Zenet's window es exactly aquí.**

#### 3.2.7 Mexican market readiness deep dive (Q4 verified)

| Factor | Status | Evidence |
|---|---|---|
| **SAT / CFDI 4.0 Compliance** | ✅ Pass | QR autofacturación · CFDI 4.0 deployed abril 2023 |
| **Spanish-language support + UX** | ✅ Pass | Fully localized · blog + help center + tutorials en Spanish |
| **Delivery app integrations** (Rappi/UberEats/DiDi) | ✅ Pass | "Best Integration" awards 2022 · 99.9% acceptance rate |
| **Local payment methods** (card + cash) | ✅ Pass | Parrot Pay contactless + traditional card · cash tracked en POS |
| **Offline / low-connectivity operation** | ✅ Pass | Offline mode confirmed · syncs on reconnect |
| Local hardware ecosystem | 🟡 Partial | Android-native (good cost MX) · **NO iOS = gap for some segments** |
| **Multi-sucursal / chain support** | ✅ Pass | Explicit multi-location marketing |
| **Local support 365 days** (WhatsApp + phone) | ✅ Pass | 365-day support confirmed |
| National geographic coverage | 🟡 Partial | Strong CDMX + MTY + Riviera Maya · **NO BC/Norte documented** |
| Price-competitiveness MX SMB | 🟡 Partial | $1,800-2,800 MXN/mes mid-tier · Early $949 plan helps · **payment lock-in inflates TCO** |

**Composite Mexican Readiness Score: 8.5/10** (mayor que PoloTab por scale + brand recognition central MX)

**Gaps:**
1. Closed payment ecosystem raising TCO para high-volume operators
2. NO iOS support limiting flexibility
3. Absent BC/Norte documentation

#### 3.2.8 Strategic implications para Zenet

**Cómo competir vs Parrot:**

**(1) NO compete en POS layer** — Parrot es POS-first con Parrot Pay closed ecosystem. Zenet trabaja **encima**. Mensaje: *"Zenet vive sobre Parrot — extiende lo que Parrot YA hace + agrega capa AI predictiva"*.

**(2) Explotar Parrot Pay closed ecosystem vulnerability** — Last.app already uses this argument competitively. Zenet positioning: *"NO te encerramos en hardware nuestro — usa el POS y terminal que prefieras. Zenet es 100% hardware-agnostic"*.

**(3) AI shipped vs marketing claim** — Parrot tiene 3,200 POS dataset pero CERO AI shipped. Zenet diferenciador: *"Parrot tiene los datos pero no la inteligencia. Zenet tiene ambos."* Demo features AI substantive (NOT BI dashboards).

**(4) BC/TJ uncontested territory** — Parrot has ZERO documented BC presence. Zenet beachhead TJ es **uncontested geography** for Parrot. **Activate TJ + Mexicali + Ensenada before Parrot expands** (probable 12-18 meses).

**(5) Pricing comparison** — Parrot Full Service $2,800 MXN/mes + payment lock-in vs Zenet $1,500 MXN/mes hardware-agnostic. **TCO advantage clear** para Zenet en high-volume operators.

**Defensive narrative si prospect dice "ya tenemos Parrot":**

*"Perfecto. Parrot maneja tu POS + tus delivery apps + tu CFDI muy bien. Zenet NO replaces Parrot — vive sobre él y te agrega: AI demand forecasting (predice cuánto vas a vender el viernes basado en tus 3,200 datapoints históricos · cosa que Parrot tiene en datos pero NO en producto), automatización de procurement (Zenet sugiere qué comprar y a qué proveedor), y costing predictivo (NOT solo descriptivo). Pruébalo 30 días paralelo a Parrot sin cambiar nada."*

**Displacement narrative (si quiere reemplazar Parrot):**
- Parrot Pay hardware/payment lock-in friction
- Better strategy: layer Zenet over Parrot (NOT replace)
- Use payment lock-in cost argument: *"Parrot Pay te cobra MDR rate que NO puedes negotiate. Si cambias a bank TPV + Zenet capa cognitiva, ahorras X MXN/mes en payment processing + sumas AI substantive"*

#### 3.2.9 Watchlist signals + cadence

**Cadencia: MENSUAL crítico — founder personalmente** (cf. doc 01 §13.2)

| Trigger | Threshold | Action |
|---|---|---|
| **Series B announcement** | NOT announced as of mayo 2026 | Capital influx → AI dev probable acceleration → EMERGENCY RESPONSE |
| **AI feature SHIPPED** (NOT Industry Report marketing) | Cualquier announcement | EMERGENCY RESPONSE — paralelo a PoloTab |
| **AI/ML engineer hires LinkedIn** | Cualquier role posted by Parrot Software specifically | Monitor closely + messaging response |
| **BC/TJ customer logo publicado** | Cualquier customer case study BC | Geographic expansion signal → activate Zenet TJ defense |
| **BoH AI module launch** leveraging 3,200 POS dataset | Feature announcement (demand forecasting, menu optimization) | Direct competitor activation |
| Pricing tier change (especially Early Direct $949 expansion) | Promo expansion | Re-evaluate competitive positioning |

**Monitoring inputs:**
- F Prime Capital portfolio updates
- GetLatka Parrot Software profile (ARR + customer count changes)
- Crunchbase (Series B watch)
- LinkedIn (AI hires)
- Industry Report annual update
- Instagram (high-production marketing = scale signal)

#### 3.2.10 Defensive moves Zenet prioritized

**Immediate (0-3 meses):**

1. **Activate TJ design partners** before Parrot decides BC expansion — Carlos Mendoza arquetipo mariscos primero
2. **Brand defense "hardware-agnostic + AI-shipped"** vs Parrot Pay closed ecosystem
3. **Messaging "Parrot tiene datos, Zenet tiene inteligencia"** — explicit comparison

**Medium (3-9 meses):**

4. **Consultor partner network TJ + BC** — establish before Parrot
5. **Peer evidence TJ** — case studies con metrics (food cost % reduction, time saved per week, ROI cuantificable)
6. **Pricing TCO advantage** documented vs Parrot Full Service + Parrot Pay payment fees

**Long-term (9-18 meses):**

7. **AI depth advantage** — ship features Q3 2026 procurement automation · Q4 2026 demand forecasting · Q2 2027 voice stock counting (Apicbase reference)
8. **CONTPAQi / Aspel integration roadmap** — *contable*-friendly positioning vs Parrot closed ecosystem
9. **Hardware-agnostic narrative reinforced** — Zenet works with Parrot, PoloTab, SoftRestaurant, Wansoft (broad compatibility positioning vs single-vendor lock-in)

---

### 3.3 ⭐ Toteat — Tier Beta #3

`[Classification: Indirect (operacional)]` · `[Origin: Chile (~2014-2015)]` · `[MX Readiness: 5.5/10]` · `[Velocity: HIGH funded]` · `[Threat horizon: 12-18 meses]`

#### 3.3.1 Company profile + founding context + tech stack

**Identity:**
- **Legal entity:** Toteat (toteat.com)
- **Founded:** ~2014-2015 Chile (exact year `[SIN FUENTE PUBLICADA]` — operating maturity indicators suggest pre-2020 Chile)
- **CEO:** René Marty
- **MX Country Manager (Q3 verified):** Tomás Drápela Benavente (LinkedIn-verified, based en Chile managing MX operations)
- **MX team size:** `[SIN FUENTE PUBLICADA exact]`
- **Global scale:** 100M+ orders/year LATAM · 2,600+ clients 2022 · **5,000+ MX restaurants** claim (vendor self-reported)

**Tech stack:**
- **Cloud-native SaaS** — multi-country presence confirmed
- **Mexico-specific subdomain:** toteat.com/es-mx — localized content active
- Help center MX updated abril 2026 (active cadence)
- Instagram active 2026 (Expo Proveedores attendance abril 2026)

#### 3.3.2 Product depth analysis

**Features shipped verified (Q3):**

| Feature | Status |
|---|---|
| POS + payment | ✅ Shipped |
| Inventory management + stock control real-time | ✅ Shipped (product page `/control-de-inventarios-y-stock`) |
| Recipe management | ✅ Shipped |
| Multi-branch architecture with central dashboard | ✅ Shipped |
| Delivery integrations (Uber Eats, Rappi, Stripe) | ✅ Shipped |
| Help center MX | ✅ Active |

**Features in roadmap (post-$7.4M raise septiembre 2025):**

- *"New AI-powered products"* — **`[AI in roadmap / marketing claim]`** — funding declared but specific shipped AI features in product demos NOT yet documented publicly mayo 2026

**Features NOT shipped (gap):**

- BoH AI features (demand forecasting, AI procurement, AI recipe costing) — NO product evidence
- LLM-based natural language query
- Predictive analytics layer

**Module architecture:**
- POS + Inventory + Stock + Analytics dashboards ✓
- Recipe costing depth `[SIN FUENTE]`
- AI procurement NOT documented

#### 3.3.3 Pricing + business model

**Pricing MX:** `[SIN FUENTE PUBLICADA]`

- MX pricing page exists pero currency display verification pending
- Specific tiers NOT publicly disclosed
- Chile pricing reference: NOT confirmed

**Business model inferred:**
- SaaS subscription per location/month
- Multi-branch architecture suggests volume-based tiering
- Integrations included or premium add-ons

**Primary research path:** design partner interviews — *"¿usas Toteat? ¿cuánto te cobran?"*

#### 3.3.4 GTM motion

**Channel strategy:**
- **Direct sales** primary
- **MX Country Manager Tomás Drápela** managing operations (LinkedIn verified Q3)
- **Trade show presence:** Expo Proveedores Mexico 2026 (abril) — signals active commercial presence
- **Content marketing:** blog active, MX-specific content (e.g., *"Mundial 2026 impulsará el consumo en restaurantes"* — local relevance)
- **Distributor partnerships MX:** `[SIN FUENTE PUBLICADA — formal partnerships]`

**Sales process inferred:**
- LATAM regional B2B SaaS sales motion
- Demo-based conversion
- Educational content (blog posts on expansion, operational efficiency)
- Trust-building tone (no hard-pressure CTAs)

**Customer acquisition (claimed):**
- **5,000+ MX restaurants** `[Vendor self-reported]`
- 2,600+ clients globally (2022 figure, probably higher now)
- 100M+ orders/year LATAM

**Mexican market expansion timeline:**
- **2023:** Commercial intent declared + $3.5M raised for Colombia + México entry
- **2025 septiembre:** $7.4M raised explicitly for LATAM expansion + AI development
- **2026 abril:** Expo Proveedores attendance · help center updated

#### 3.3.5 Customer reviews + sentiment

**Review platforms:**

| Platform | Rating | Reviews count | Notes |
|---|---|---|---|
| G2 / Capterra MX | `[SIN FUENTE PUBLICADA specific]` | — | NOT surfaced en Q1/Q3 |
| Trustpilot | `[SIN FUENTE]` | — | NOT verified |
| Reddit / Foros MX / Argentina | `[SIN FUENTE]` | — | NOT surfaced |
| Instagram / LinkedIn | Active 2026 | High engagement | Marketing-focused |

**Review profile assessment:** **Gap** — Q3 surfaceó pricing page exists pero NO captured customer reviews specifically. Primary research path: design partner interviews + Reddit MX communities.

#### 3.3.6 AI roadmap + execution velocity (Q3 verified)

**AI Velocity Score: HIGH funded (but NOT shipped yet)**

**What Toteat claims:**
- *"New AI-powered products"* — Sept 2025 fundraise announcement
- CEO René Marty stated: *"AI será clave para que nuestros clientes operen de manera más eficiente"*
- **Homepage "AI-powered"** — `[AI marketing claim]` pending product verification

**What was NOT verified (Q3):**
- Specific shipped AI features en product demos NOT documented publicly mayo 2026
- No AI/ML engineer job postings found publicly
- AI roadmap details beyond general framing NOT published

**AI execution velocity ASSESSMENT:**

**Capacity:** ⭐⭐⭐⭐ (high)
- **$7.4M septiembre 2025 (Taram + Morro Ventures) explicitly para AI development + LATAM expansion**
- Mexico Country Manager active
- Cloud-native stack ready for AI layer

**Current execution:** ⭐⭐ (low — AI in roadmap pero NOT shipped)
- Funding ready, execution pending

**Threat scenario:**
- **Trigger: AI feature SHIPPED en product** (NOT just announcement)
- **Trigger: Specific BoH AI features (demand forecasting, procurement automation, recipe optimization)**
- **Trigger: MX customer count published with specifics**

**If trigger fires:** **12-18 meses to ship competitive AI BoH features.** Toteat has funded runway specifically para esto + MX operational team.

**Implicación para Zenet:** Toteat es **el threat con AI funding más concreto de los 3 LATAM vendors**. Su Chilean Spanish + ICP overlap + MX commercial team active = significant. Zenet **debe validate AI depth antes Q3 2027**.

#### 3.3.7 Mexican market readiness deep dive (Q3 verified)

| Factor | Status | Evidence |
|---|---|---|
| **CFDI 4.0 native** | 🟡 Claimed, partially verified | Mexico-specific fiscal/invoicing help center · full CFDI 4.0 native status `[SIN FUENTE independent verification]` |
| CONTPAQi / Aspel integration | **Unknown** | Integrations page lists Uber Eats, Rappi, Stripe but NOT MX accounting · `[SIN FUENTE]` |
| Mexican Spanish specific | 🟡 Partial | es-mx localized domain · Country Manager MX-based · **some Chilean-isms posible**, NOT independently verified como fully MX-neutralized |
| WhatsApp Business primary CS | **Unknown** | `[SIN FUENTE]` — no WhatsApp CS documented en public-facing MX content |
| MXN pricing displayed | 🟡 Claimed | MX pricing page exists · currency display verification pending |
| Mexican peer reference logos | 🟡 Partial | **5,000+ restaurantes MX claim** `[Vendor self-reported]` · NO named MX client logo wall |
| MX-based sales team | ✅ LinkedIn verified | **Country Manager Tomás Drápela Benavente** managing MX (LinkedIn verified · based Chile) · dedicated MX team size `[SIN FUENTE]` |
| Local consultor / distributor partnership MX | 🟡 Partial | Expo Proveedores Mexico 2026 attendance = active trade presence · formal distributor partnerships `[SIN FUENTE]` |
| SAT compliance messaging | **Unknown** | `[SIN FUENTE]` — no explicit SAT/fiscalización digital messaging |
| Sales motion Hofstede-aligned | ✅ Observed | Blog content educational/trust-building · no hard-pressure CTAs |

**Composite Mexican Readiness Score: 5.5/10** (Q3 verified)

#### 3.3.8 Strategic implications para Zenet

**Cómo competir vs Toteat:**

**(1) Chilean Spanish friction explicit** — Mexican operators perceive Chilean-isms · Zenet diferenciador: *"diseñado en Mexico para mexicanos, NOT chilenos adaptando"*

**(2) Pure BoH positioning** — Toteat es POS+inventory all-in-one. Zenet **pure BoH no-POS**: *"NO te pedimos cambiar tu POS chileno"* (si ya tienen Toteat) → *"Zenet vive encima"*

**(3) AI shipped urgency** — Toteat has $7.4M funded para AI pero NOT shipped. Zenet must ship AI features substantive antes Q3 2027 para differentiate

**(4) Local Mexican knowledge depth** — Toteat Country Manager based Chile, NOT MX-resident. Zenet founder + team MX-resident = cultural depth advantage. *Confianza* dynamic favors Mexican-based vendor.

**Defensive narrative si prospect dice "estoy considerando Toteat":**

*"Toteat es buen POS chileno con plan AI funded. Pero su AI todavía NO está shipped. Zenet ya tiene capa AI BoH operacional (procurement automation + demand forecasting + recipe cost predictivo) — features que Toteat anunció pero NO ha demonstrated en producto. Plus: Zenet diseñado MX desde Day 1, NOT Chile adaptando."*

#### 3.3.9 Watchlist signals + cadence

**Cadencia: MENSUAL** (cf. doc 01 §13.2)

| Trigger | Threshold | Action |
|---|---|---|
| **AI feature SHIPPED beyond marketing claim** | Verified product demo o customer testimonial | Re-clasificar a Tier Alpha + EMERGENCY RESPONSE |
| MX customer count publicado | Specific numbers (>5K MX) | Validate momentum |
| Country Manager team expansion LinkedIn | MX team hires | Geographic deepening signal |
| CFDI 4.0 native verified | Independent verification | MX Readiness re-score |
| Mexican Spanish neutralization completed | Linguistic refresh | Sales-motion friction reducing |

**Monitoring inputs:**
- StartupsLATAM + LatamList (LATAM fundraise tracking)
- toteat.com/es-mx (product updates)
- Instagram (event presence, customer signals)
- LinkedIn (MX hiring + Country Manager updates)

#### 3.3.10 Defensive moves Zenet prioritized

**Immediate (0-3 meses):**

1. **AI features shipped substantive** — ship publicly demonstrable AI features antes que Toteat ship sus AI roadmap items
2. **Mexican Spanish + culture positioning** — *"NO chileno adaptando, MX desde Day 1"*
3. **Trade event presence** — Expo Proveedores 2027 etc. para counter Toteat MX visibility

**Medium (3-9 meses):**

4. **Pure BoH no-POS messaging clear** — diferenciador vs Toteat all-in-one
5. **CONTPAQi/Aspel integration shipped** — accounting-adjacent advantage vs Toteat gap

**Long-term (9-18 meses):**

6. **Local Mexican consultor network depth** — Entropía Digital + similar relationships
7. **Track Toteat AI launch substantive** — pivot defense playbook ready

---

### 3.4 ⭐ Fudo — Tier Beta #4

`[Classification: Indirect (operacional)]` · `[Origin: Argentina (FUDO GROUP LLC Delaware) → CDMX office]` · `[MX Readiness: 6.0/10]` · `[Velocity: MEDIUM proven]` · `[Threat horizon: 12-18 meses BoH AI extension]`

#### 3.4.1 Company profile + founding context + tech stack

**Identity:**
- **Legal entity:** FUDO GROUP LLC (1201 N Orange St, Wilmington, DE — Delaware corporate entity)
- **Regional entity Mexico:** Av. Oaxaca 96, Roma Norte, CDMX
- **Founded:** ~2015-2018 (exact year `[SIN FUENTE PUBLICADA]` — review histories on GetApp MX suggest pre-2020 Argentine origin)
- **Founders:** `[SIN FUENTE]`
- **Team size MX:** `[SIN FUENTE]`
- **Global scale:** **35,000+ businesses LATAM**

**Tech stack (Q3 verified):**
- **Cloud-native (React Native / web SaaS)** multi-region
- **Mexico-specific subdomain:** fu.do/es-mx
- **CFDI module operational** via help center workflow
- Active platform · help center articles dated marzo 2026 · active cadence
- **NO public changelog with version numbers** (transparency gap)

#### 3.4.2 Product depth analysis

**Features shipped verified (Q3):**

| Feature | Status | Source |
|---|---|---|
| POS + payment | ✅ Shipped | Core product |
| Inventory management | ✅ Shipped | Help center articles |
| Recipe management | ✅ Shipped (Plan Avanzado) | Pricing PDF Feb 2026 |
| Delivery integration | ✅ Shipped | Product page |
| **WhatsApp chatbot AI for delivery orders** | ✅ **AI SHIPPED diciembre 2025** | YouTube product demo verified |
| Autofacturación portal (customer self-invoicing) | ✅ Shipped | Help center diciembre 2025 |
| Multi-shift / multi-till (Plan Pro) | ✅ Shipped | Pricing PDF |
| Multi-currency / multi-region | ✅ Shipped | Cloud architecture |

**Features in roadmap / marketing claim:**

- BoH AI (inventory optimization, demand forecasting) — **`[SIN FUENTE PUBLICADA]`** — NO product pages or demos found for AI-native BoH features beyond basic purchase/expense reporting

**Features NOT shipped (gap):**

- AI-powered procurement automation
- AI demand forecasting beyond delivery FoH
- AI recipe costing (predictive, not just descriptive)
- LLM-based natural language query for BoH operations

**Module architecture:**
- POS + FoH delivery + inventory + recipe + autofacturación ✓
- BoH AI = gap crítico (FoH AI shipped solo)

#### 3.4.3 Pricing + business model (Q3 verified MX-specific)

**Pricing MX (Feb 2026 PDF official):**

| Plan | Pricing MXN/mes | Includes |
|---|---|---|
| **Plan Inicial** | **$360 MXN/mes** | Core POS |
| **Plan Avanzado** | **$690 MXN/mes** | + Inventario + Recetas |
| **Plan Pro** | **$1,050 MXN/mes** | + Multi-shift + Multi-till |

**Add-ons MX:**
- KDS: +$200 MXN/mes
- CFDI 4.0: +$200 MXN/mes (NOT included en base plans)

**Business model:**
- SaaS subscription per location/month
- Modular pricing (CFDI as add-on diferenciador vs Parrot/PoloTab CFDI included)
- Hardware-agnostic (NO proprietary terminal lock-in)

**Pricing positioning:**
- **Entry tier $360 MXN/mes = lowest entry-tier de los Tier Beta active MX**
- Pro tier $1,050 = below Zenet target $1,500 + below PoloTab base $990 (similar) + well below Parrot Full Service $2,800
- **+$200 CFDI add-on = pricing model trick** — actual cost para CFDI-needing operator es $560 / $890 / $1,250

**Total funding:** `[SIN FUENTE PUBLICADA]` — total funding unknown from public sources

#### 3.4.4 GTM motion

**Channel strategy:**
- **Direct sales** primary — dedicated MX office (Av. Oaxaca 96, Roma Norte, CDMX)
- Spanish onboarding (Argentine Spanish primary, some MX adaptations)
- WhatsApp CS operational
- 35,000+ businesses LATAM scale = mature regional GTM
- **No distributor network MX confirmed** — direct model

**Sales process:**
- Self-service tier (inferred from $360 entry plan + web signup likely)
- Demo-based conversion for higher tiers
- WhatsApp + email support

**Customer acquisition:**
- **getapp.com.mx rating 4.7/5 (n=3)** — thin but positive
- 35,000+ businesses LATAM (vendor self-reported)
- MX-specific scale `[SIN FUENTE]`

**Pricing PDF distribution:**
- MX-specific PDF dated **Feb 2026** = ongoing commercial investment MX
- Indicates dedicated MX pricing strategy + commercial execution

#### 3.4.5 Customer reviews + sentiment

**Review platforms:**

| Platform | Rating | Reviews count | Notes |
|---|---|---|---|
| **GetApp México** | **4.7/5** | n=3 | Thin but positive |
| Capterra | `[SIN FUENTE]` | — | NOT verified |
| Trustpilot | `[SIN FUENTE]` | — | NOT verified |
| Reddit / Foros MX | `[SIN FUENTE]` | — | NOT surfaced |
| YouTube product demos | Active diciembre 2025 (WhatsApp AI chatbot) | High-production | Marketing focus |

**Review profile assessment:** Thin but positive · YouTube product demos = strongest credibility signal · Fudo AI WhatsApp chatbot demo verified Q3 (diciembre 2025)

#### 3.4.6 AI roadmap + execution velocity (Q3 verified)

**AI Velocity Score: MEDIUM proven (WhatsApp AI shipped, BoH AI gap)**

**What Fudo claims AND verified shipped:**
- **AI WhatsApp chatbot for delivery orders** — `[AI SHIPPED]` — YouTube product demo published **diciembre 2025** verified
  - Auto-responds FAQs
  - Shares menu
  - Takes orders
  - Sends payment links
  - Operates 24/7
- Processes 2,000+ chats · saves 60+ hours/month per claim
- Autofacturación AI-assisted invoicing — `[AI SHIPPED]` documented help center diciembre 2025

**What was NOT verified (Q3):**
- BoH AI roadmap publicly documented
- AI/ML engineer hiring signals
- AI feature releases beyond FoH delivery
- Total AI investment / fundraise specific allocation

**AI execution velocity ASSESSMENT:**

**Capacity:** ⭐⭐⭐ (medium-high)
- Cloud-native modern stack
- AI shipped proven (FoH WhatsApp) = velocity demonstrated
- Multi-region scale = engineering resource base

**Current execution:** ⭐⭐⭐ (medium — FoH AI shipped, BoH AI absent)

**Threat scenario:**
- **Trigger: BoH AI feature shipped** (procurement, forecast, costing — beyond delivery FoH)
- **Trigger: CONTPAQi/Aspel integration announced**
- **Trigger: AI roadmap publicly disclosed**

**If trigger fires:** **6-12 meses para BoH AI extension** porque velocity proven con WhatsApp chatbot. Bridging desde FoH-AI a BoH-AI es **next step natural** dada arquitectura modular existente.

**Implicación para Zenet:** Fudo es **el threat con AI shipped proof** — velocity verified, NOT just claimed. La extension a BoH AI es **6-12 meses realistic** si decide pivot. Zenet diferenciador: *"BoH AI native, NOT bolted on FoH AI extension"*.

#### 3.4.7 Mexican market readiness deep dive (Q3 verified)

| Factor | Status | Evidence |
|---|---|---|
| **CFDI 4.0 native** | ✅ Operational | Help center confirmed CFDI 4.0 support · módulo activation workflow · SAT registration required |
| CONTPAQi / Aspel integration | **Unknown** | No integration page references these · `[SIN FUENTE]` |
| Mexican Spanish specific | 🟡 Partial | Mexico-specific subdomain (fu.do/es-mx) + help center en Spanish MX · **some Argentine-isms en copy ("¿Querés?")** · NOT fully neutralized a MX |
| **WhatsApp customer-facing FoH delivery chatbot (uso #4)** | ✅ Operational | WhatsApp chatbot officially shipped diciembre 2025 — **customer-facing AI para tomar orders de delivery** (NOT operator BoH operational interface uso #3 · NOT vendor CS uso #1 specifically) |
| **MXN pricing displayed** | ✅ Operational | MXN pricing on /es-mx/precios page |
| Mexican peer reference logos | **Unknown** | 35,000+ businesses claim `[Vendor self-reported]` · NO MX-specific logo wall found |
| MX-based sales team | **Unknown** | Corporate address Wilmington DE · CDMX office address Av. Oaxaca 96 confirmed · `[SIN FUENTE para MX-based sales employees specifically on LinkedIn]` |
| Local consultor / distributor partnership MX | **Unknown** | `[SIN FUENTE]` |
| **SAT compliance messaging** | ✅ Operational | Detailed SAT registration workflow documented · CFDI module activation blog post mayo 2026 |
| Sales motion Hofstede-aligned | ✅ Observed | Website tone relationship-first · no hard-pressure CTAs · help center quality suggests trust-focused onboarding |
| ⭐ **BONUS: WhatsApp operational interface (uso #3 BoH operator-product)** | ❌ Dashboard required | Operator uses Fudo dashboard para BoH operations (inventory, recipes, expenses) · Fudo's WhatsApp es uso #4 customer-facing FoH delivery chatbot, **NOT BoH operator interface** |

**Composite Mexican Readiness Score: 6.0/10** (Q3 verified · 10-factor baseline · WhatsApp operational interface uso #3 ❌ — Fudo's WhatsApp es FoH delivery uso #4, NOT BoH operational)

#### 3.4.8 Strategic implications para Zenet

**Cómo competir vs Fudo:**

**(1) BoH AI native vs FoH AI bolted-on** — Fudo's AI velocity proven pero solo en FoH delivery WhatsApp. Zenet diferenciador: *"BoH AI native desde Day 1 — procurement + costing + forecasting, NOT delivery chatbot extendiendo a BoH"*

**(2) Argentine Spanish friction explicit** — Q3 verified Fudo has Argentine-isms NOT fully neutralized MX. Zenet: *"MX desde Day 1, NO Argentina adaptando"*

**(3) Hardware-agnostic shared advantage (NOT diferenciador)** — Fudo es hardware-agnostic similar a Zenet · NOT a competitive lever vs Fudo (es vs PoloTab/Parrot)

**(4) Pricing competitive comparison** — Fudo Plan Pro $1,050 + CFDI $200 = $1,250 · Zenet $1,500. **$250 premium para AI BoH substantive** = justifiable si AI features shipped substantive

**(5) Pure BoH no-POS positioning** — Fudo es POS+inventory+delivery all-in-one. Zenet: *"NO te pedimos cambiar Fudo POS — Zenet vive encima"*

**Defensive narrative si prospect dice "tengo Fudo":**

*"Fudo tiene buen POS + delivery + AI chatbot WhatsApp. Pero Fudo's AI está en delivery, NOT en tu BoH operacional. Zenet NO replaces Fudo — vive sobre él y te agrega: procurement automation predictiva (qué comprar y a quién) + demand forecasting (cuánto vas a vender por daypart) + recipe cost predictivo (NOT solo descriptivo). Pruébalo paralelo a Fudo 30 días sin cambiar nada."*

#### 3.4.9 Watchlist signals + cadence

**Cadencia: MENSUAL** (cf. doc 01 §13.2)

| Trigger | Threshold | Action |
|---|---|---|
| **BoH AI feature shipped beyond WhatsApp delivery** | Procurement / forecast / costing AI announcement | Re-clasificar a Tier Alpha + EMERGENCY RESPONSE |
| Pricing tier change (entry tier compress, Pro tier features expand) | Plan changes | Re-evaluate competitive positioning |
| Enterprise expansion (multi-location chains) | Customer logo enterprise | ICP overlap signal |
| CONTPAQi / Aspel integration announced | Integration partnership | Accounting-adjacent track activation |
| MX sales team LinkedIn expansion | Hiring signals | Geographic deepening |

**Monitoring inputs:**
- fu.do/es-mx help center updates
- YouTube product demos channel (AI feature releases)
- GetApp México listing updates
- LinkedIn (MX hiring)
- Instagram (commercial signals)

#### 3.4.10 Defensive moves Zenet prioritized

**Immediate (0-3 meses):**

1. **BoH AI native messaging clear** vs Fudo FoH AI bolted-on
2. **Mexican Spanish + culture depth** vs Argentine adaptations
3. **CFDI included in base price** (NOT add-on like Fudo $200) — pricing transparency advantage

**Medium (3-9 meses):**

4. **AI BoH features shipped substantive** — procurement automation + demand forecasting + recipe predictive
5. **CONTPAQi/Aspel integration shipped** — accounting-adjacent vs Fudo gap

**Long-term (9-18 meses):**

6. **Track Fudo BoH AI extension** — pivot defense ready
7. **Trade event presence MX** — counter Fudo CDMX visibility

---

## 4. Grupo 2 — Direct CATEGORIAL reference benchmarks

> Vendors AI-native + BoH-first foreign sin MX presence. **NOT competition inmediata** (entry friction 24-36 meses), **PERO informan product roadmap + GTM playbook + monitor for LATAM expansion signals.**

### 4.1 Nory — Tier Delta · closest structural analog globally

`[Classification: Direct (reference benchmark + expansion risk)]` · `[Origin: UK — Dublin/London, founded ~2020]` · `[MX Readiness: 0/10]` · `[Velocity: VERY HIGH]` · `[Threat horizon: 24-36 meses si decide LATAM]`

#### 4.1.1 Company profile + founding + tech stack

- **Founded:** ~2020 por **Conor Sheridan** (ex-Mad Egg restaurant group)
- **HQ:** Dublin + London → **US HQ NY abierto marzo 2026**
- **Tech stack:** **AI-native desde Day 1** — agentic AI restaurant OS · integrates con Toast POS · LLM integration inferred (natural language interfaces)
- **Self-described:** *"agentic AI restaurant operating system"*

#### 4.1.2 AI features shipped (verified Q3)

- ✅ **AI demand forecasting** — covers, sales by daypart (Toast integration documented)
- ✅ **AI labor scheduling assistant** — product demo April 2026 YouTube verified
- ✅ **AI scheduling auto-generation from demand forecast** — *"generates restaurant-ready schedule automatically"*
- 🟡 **Agentic AI assistants** — *"analyze operations in real time, serve as point of contact for frontline teams"* — `[AI in roadmap]` per Series B announcement blog post
- ✅ **US HQ opened New York marzo 2026**

#### 4.1.3 Product architecture lessons for Zenet

| Lección Nory | Implementación Zenet |
|---|---|
| **Agentic AI framing** (NOT *"AI feature"* genérico) | Zenet messaging: *"capa cognitiva agentic AI"* — sophisticated framing |
| **Demand forecasting + labor scheduling integration** | Zenet roadmap: demand forecast → automatic scheduling suggestion |
| **Real-time analysis + frontline team point of contact** | Zenet: WhatsApp-native CS + real-time alerts |
| **Toast POS integration architecture** | Zenet hardware-agnostic + POS-agnostic integration pattern (works con Parrot, PoloTab, SoftRestaurant) |

#### 4.1.4 GTM playbook lessons for Zenet

- **Series progression:** $7M seed (2022) → €14.7M / $16M Series A Accel (2024) → **$37M / £27M Series B Kinnevik (septiembre 2025)** — total **$62.6M raised**
- **400% revenue growth 2023** — narrative compelling
- **US expansion via NY HQ** — geographic strategy
- **Hospitality-focused (NOT generic restaurant)** — clear ICP narrative

**Para Zenet:** narrativa Series progression similar (Seed → A → B) con momentum compounding. Hospitality-focused positioning si Zenet expand beyond independent restaurants.

#### 4.1.5 LATAM expansion risk monitoring + triggers

**Current status (Q3 verified):**
- **LATAM NOT en roadmap declarado**
- Series B execution focus = **UK consolidation + US expansion**
- 12-18 meses roadmap stated post-Series B = US deepening

**Triggers para re-clasificación a Tier Gamma:**

| Trigger | Threshold | Action |
|---|---|---|
| LATAM expansion announcement | Public announcement | Re-clasificar Tier Gamma + accelerate Zenet timeline 25% |
| Spanish localization roadmap | Public commitment | Re-evaluate Mexican Readiness trajectory |
| MX hire LinkedIn | Sales/marketing hire MX | Active commercial signal |
| LATAM customer logo | Any LATAM client published | Active MX presence confirmed |
| Series C $100M+ | Capital influx para LATAM | Expansion capability acquired |

**Monitoring cadence:** SEMESTRAL · founder personal monitoring

#### 4.1.6 Strategic implications para Zenet

- **Product roadmap reference primary:** Nory architecture + agentic AI framing es **el playbook más relevant para Zenet's long-term trajectory**
- **GTM narrative reference:** Series progression + revenue growth + US expansion = template para Zenet 2027-2029 trajectory
- **Diferenciación clear:** *"Nory para Mexico"* es succinct positioning — Mexican market depth + Spanish nativo + CFDI + local consultor network = Zenet's structural advantage que Nory NO tiene
- **Monitor signal:** Si Nory anuncia LATAM antes de Q4 2027, Zenet beachhead window se contrae significativamente

---

### 4.2 Apicbase — Tier Delta · AI-native BoH OS rebrand 2025

`[Classification: Reference-only + Direct candidate]` · `[Origin: Belgium, founded April 2017]` · `[MX Readiness: 0/10]` · `[Velocity: HIGH]` · `[Threat horizon: 24-36 meses contingent LATAM SMB pivot]`

#### 4.2.1 Company profile + founding + tech stack

- **Founded:** April 2017
- **Co-founder + CTO:** **Pieter Wellens** (LinkedIn verified, role since founding)
- **HQ:** Belgium
- **Tech stack:** **Cloud-native AWS-powered** · SOC II Type 2 compliant · API-first con industry-leading API documentation
- **2025 brand + product repositioning:** Self-described **"AI-native back-of-house operating system"** post-rebrand
- **Team:** 52-person team (GetLatka 2024) · $3.2M ARR · $4.5M total raised (modest capitalization relative to AI feature set = efficient engineering)

#### 4.2.2 AI features shipped (verified Q3) — LOAD-BEARING

- ✅ **AI allergen/dietary data autofill in recipes**
- ✅ **AI demand forecasting** para menu sales-mix + budgeting
- ✅ **Voice stock counting** (*"say what you see, Apicbase AI does the rest"*)
- ✅ **Natural language data query** (*"ask questions in plain language, get live answers from restaurant data"*)
- ✅ **MCP integration allowing ChatGPT/Claude/Gemini to query live restaurant data** — load-bearing capability · emerging design pattern
- ✅ AI webinar hosted febrero 2025 on operational data → decisions

#### 4.2.3 Product architecture lessons for Zenet — CRITICAL

| Lección Apicbase | Implementación Zenet |
|---|---|
| **Module architecture: recipe → procurement → costing → analytics** | **Directly portable a Zenet módulo roadmap** |
| **AI-native rebrand 2025** (*"after nearly 10 years of Apicbase, we're taking the next step"*) | Zenet ya nace AI-native — narrativa más fácil |
| **MCP integration ChatGPT/Claude/Gemini** | **Emerging design pattern**: permite operadores query restaurant data via AI assistants existentes — Zenet should consider |
| **Voice stock counting** (*"say what you see"*) | UX innovation — Zenet roadmap candidato |
| **AI demand forecasting menu sales-mix + budgeting** | Core Zenet feature |
| **SOC II Type 2 compliance** | Security/trust signal para enterprise pivot futuro |
| **AI allergen/dietary autofill recipes** | Quality-of-life feature signal |

**Critical lesson:** Apicbase rebrand 2025 valida que el mercado responde a **"AI-native BoH OS"** framing. Zenet **inherits this narrative from Day 1** sin necesidad de rebrand.

#### 4.2.4 GTM playbook lessons for Zenet

- **Modest capitalization, efficient engineering:** $4.5M total raised pero 5+ AI features shipped + 52-person team + $3.2M ARR
- **Enterprise multi-location focus:** ICP = restaurant groups + institutional foodservice (QSR, catering, hotels) 2-10 to 10,000+ locations
- **API-first** + industry-leading documentation = developer ecosystem + integrations leverage
- **Pricing:** €249/mes 1 location billed annually · quantity discount per additional location · 15% surcharge monthly billing

**Para Zenet:**
- Efficient engineering possible — NO requires $50M+ raise para ship credible AI feature set
- BUT ICP differs: Zenet target SMB independents 2-5 locations vs Apicbase enterprise · Zenet pricing $1,500 MXN/mes ~ €70 ≪ Apicbase €249

#### 4.2.5 LATAM expansion risk monitoring + triggers

**Current status (Q3 verified):**
- **MX Readiness 0/10** — no CFDI, no MX team, no Mexican Spanish localization, no MX peer references
- **ICP enterprise chains, NOT SMB independents** — friction adicional para pivot a Zenet ICP
- Asia Pacific expansion noted, NOT LATAM
- $4.5M modest capital = LATAM expansion expensive given GTM rebuild required

**Triggers para re-clasificación:**

| Trigger | Threshold | Action |
|---|---|---|
| LATAM expansion announcement | Public commitment | Re-clasificar Tier Gamma |
| SMB pivot announced (away from enterprise) | ICP shift | Re-evaluate threat magnitude |
| MX hire LinkedIn | Any MX-based hire | Active commercial signal |
| Spanish-MX localization shipped | Native MX product | MX Readiness re-score |
| CFDI integration shipped | Native CFDI | MX Readiness major jump |

**Monitoring cadence:** SEMESTRAL

#### 4.2.6 Strategic implications para Zenet

- **Product architecture primary reference:** Apicbase módulo design (recipe → procurement → costing → analytics) **directly portable** a Zenet roadmap
- **AI features specifically inspirational:**
  - Voice stock counting → consider for Zenet roadmap
  - MCP integration → emerging design pattern Zenet should consider
  - Allergen autofill → quality-of-life feature signal
- **AI-native narrative validation:** Apicbase rebrand 2025 valida market appetite — Zenet's "AI-native BoH OS" positioning has documented market response
- **Diferenciación clear:** *"Apicbase para SMB Mexican independents"* — Zenet's structural advantage vs Apicbase = MX-native + SMB-priced ($1,500 MXN vs €249)

---

### 4.3 FoodOp — Tier Delta · lighter coverage

`[Classification: Direct (reference)]` · `[Origin: UK — London]` · `[MX Readiness: 0/10]` · `[Velocity: HIGH]` · `[Threat horizon: 24-36 meses]`

> Lighter coverage given Tier Delta status + smaller scale + thinner data availability (Q3 didn't deep dive FoodOp specifically).

#### 4.3.1 Company profile + AI features

- **Founded:** Recent (exact date `[SIN FUENTE PUBLICADA]`)
- **HQ:** UK — London
- **Position:** AI-native SaaS co-pilot for professional chefs · kitchen operations, recipe management, food waste reduction, administrative automation
- **AI shipped:** AI co-pilot framing (specific feature breakdown NOT verified — Q3 lighter coverage)
- **Recent signal:** **£4.4M raised marzo 2026** (MK Capital + Footprint Fund) · expanding UK + US markets

#### 4.3.2 Product architecture lessons for Zenet

- **Chef-centric positioning** (*"AI co-pilot for professional chefs"*) — philosophical match con Zenet's *"sous chef cognitivo"* framing (cf. Branding §personalidad-y-arquetipo · Murguía validation)
- **Food waste reduction angle** — environmental + operational ROI dual narrative
- **Kitchen operations focus** (NOT FoH) — BoH-first match

**Para Zenet:** chef-centric framing complementa Zenet's brand archetype (Sabio + Cuidador / *"tu mano derecha operativa"*).

#### 4.3.3 LATAM expansion risk

- **MX Readiness 0/10** — UK/US focus, NO LATAM signals
- **£4.4M raise = modesta** vs Nory $62.6M = lower expansion velocity
- **Triggers similar a Nory + Apicbase** — LATAM expansion announcement, Spanish localization, MX hire

**Monitoring cadence:** SEMESTRAL · lower priority que Nory/Apicbase

#### 4.3.4 Strategic implications

- **Brand archetype reference:** chef co-pilot framing aligns con Zenet's *"sous chef cognitivo"* narrative
- **Threat level lowest of Grupo 2:** smallest scale + UK/US focus + no LATAM signals
- **Monitor lightly:** unless £4.4M raise enables aggressive expansion, FoodOp stays Tier Delta reference

---

### 4.4 MarginEdge ⭐ — Tier Delta · 10-year AI head start + best ICP fit independents

`[Classification: Reference-only — moved from doc 03 §9.1 v0.2]` · `[Origin: USA — Arlington VA, founded 2015]` · `[MX Activity: none confirmed (Spanish toggle UI only)]` · `[MX Readiness: 0.5/10]` · `[Velocity: VERY HIGH — best-in-class AI BoH execution globally]` · `[Threat horizon: 24-36 meses contingent LATAM decision]`

#### 4.4.1 Company profile + founding + tech stack

- **Founded:** 2015 · Arlington, Virginia
- **Tech stack:** Cloud-native SaaS · REST API integrations · AWS-hosted · pure BoH no POS architecture
- **Scale:** **10,000+ US/Canada restaurant customers** · 10 million invoices/year processed
- **Team:** Significant ML/AI team con 70% staff hospitality experience
- **Fundraise history:**
  - Total raised: **$70M+ cumulative**
  - Series C: **$45M diciembre 2022** (Ten Coves Capital lead)

#### 4.4.2 AI features shipped (Q3 + Q5 verified) — LOAD-BEARING

**10 YEARS de AI BoH HEAD START:**

- **AI invoice processing SHIPPED desde 2015** — 99% automated invoice line item coding · industry-first
- **August 2025 multi-feature AI release:**
  - AI sales forecasting (averaging **within 4% of actual sales**)
  - AI recipe builder (paste from Word/spreadsheet · AI recognizes ingredients)
  - Self-learning forecast algorithm
- **October 2025:** **In-app AI assistant shipped**
- Continuous AI investment cadence: *"new purpose-built tools already in development"*

**Best-in-class AI BoH execution globally por evidence shipped.** 5x más head start que Nory · 2x más que Apicbase rebrand · 10x más que PoloTab/Parrot/Toteat/Fudo.

#### 4.4.3 Product architecture lessons for Zenet — CRITICAL

| Lección MarginEdge | Implementación Zenet |
|---|---|
| **Pure BoH no POS positioning** (zero ambiguity sobre category) | Zenet match — same category |
| **No contracts / month-to-month model** | Mexican preference annual con descuento BUT no-contract pilot phase considerable para Fase 0 |
| **Invoice-first workflow** (10-year AI investment foundation) | Zenet roadmap: invoice processing = first AI feature Q3 2026 priority |
| **Food-cost ROI story con metrics quantified** ("within 4% of actual sales") | Zenet pitch: quantified savings narrative · "AI sales forecast 4% accuracy target" |
| **Continuous AI investment cadence** (10 years incremental) | Zenet roadmap discipline · ship AI features incrementally Q1-Q4 over 2026-2028 |
| **AI invoice processing 99% automation** | Zenet target metric · benchmark superior |
| **70% staff hospitality experience hiring** | Zenet hiring pattern guidance |
| **REST API integrations + AWS hosting** | Architectural pattern portable |

**Critical insight:** Zenet's window de positioning AI-native real-time es **structurally available en MX** porque MarginEdge no tiene Mexican-readiness, NO porque Zenet sea más AI-native que MarginEdge (NO lo es en absolute terms). **Zenet's moat = AI depth × Mexican market depth.**

#### 4.4.4 GTM playbook lessons for Zenet

- **Series progression:** $25M Series B (2020) → $45M Series C (Dec 2022) led by Ten Coves Capital · total $70M+ raised
- **ICP focus pure:** independent restaurants → multi-unit operators (NOT enterprise chains) — **best ICP fit con Zenet target** entre todos los reference benchmarks
- **Customer count growth:** 4,000 customers en Series C (2022) → 10,000+ customers actual = 2.5x growth en 3 años
- **15,000 restaurant target end of 2024** (announced 2022) — aspiracional milestone Zenet equivalent
- **No-contract month-to-month** = trust-building model · low switching friction
- **Pricing structure:**
  - $330/mes per location (full management) ← MarketMan equivalent es $249 = MarginEdge premium for AI depth
  - $100/mes per location (AP processing only) — entry tier
  - $480/mes con Freepour smart scale — premium tier

**Para Zenet:** MarginEdge pricing $330/loc + no-contracts = template para Mexican adaptation ($1,500 MXN ~ $75 USD = **4x below MarginEdge** justified por Mexican pricing reality + Zenet's beachhead positioning)

#### 4.4.5 LATAM expansion risk monitoring + triggers

**Current status (Q3 verified):**

- **MX Readiness 0.5/10** — Spanish language interface available (toggle UI only, NOT localized MX product)
- US/Canada commercial focus exclusively
- **NO LATAM expansion signaled publicly**
- US enterprise SaaS motion (*"96% forecast accuracy"* hard ROI focus) **misaligned con Hofstede MX context**
- Accounting integration with Mexican software ecosystems requeriría 12-18 meses engineering

**Triggers para re-clasificación:**

| Trigger | Threshold | Action |
|---|---|---|
| LATAM expansion announcement | Public commitment | Re-clasificar Tier Gamma · EMERGENCY RESPONSE |
| Spanish localization native (NOT toggle) | Product release | Active MX signal |
| Mexican accounting integration (CONTPAQi/Aspel) | Integration partnership announced | Pre-entry signal |
| MX customer logos | First customer case study | Active MX presence confirmed |
| New Series D+ fundraise | $100M+ raise para LATAM | Capital readiness signal |

**Monitoring cadence:** SEMESTRAL · founder personal monitoring · Mexico entry antes 2028 NOT evidenced en cualquier public signal

#### 4.4.6 Strategic implications para Zenet

- **Reference primary para product roadmap:** MarginEdge **es el closest US analog product roadmap reference** — pure BoH no POS + 10-year AI investment + ICP independent restaurants → multi-unit
- **NOT immediate competitive threat** dada MX Readiness 0.5/10 + 24-36 mo entry friction structural
- **"What Zenet must eventually become at scale"** — long-term aspirational reference: invoice AI 99% automation + sales forecast 4% accuracy + in-app AI assistant + continuous incremental AI investment cadence
- **Pricing positioning anchor:** MarginEdge $330/loc + MarketMan $249/loc = Zenet $1,500 MXN ($75 USD) positioning como **4x below US benchmark** justifies MX pricing reality
- **Critical strategic insight:** Zenet does NOT win vs MarginEdge en AI depth (MarginEdge wins) — Zenet wins en **AI depth × Mexican market depth combination**. MarginEdge tendría que invertir 18-36 meses para alcanzar Mexican readiness Zenet already has.

---

### 4.5 Supy — Tier Delta · Pure BoH AI shipped + Deliverect en-mx partial

`[Classification: Reference-only / Adjacent + Direct candidate — moved from doc 03 §11 v0.2]` · `[Origin: UAE/UK multi-region, founded 2021]` · `[MX Activity: none — MENA/UK + Deliverect en-mx integration available]` · `[MX Readiness: 0/10]` · `[Velocity: MEDIUM-HIGH AI shipped]` · `[Threat horizon: 36+ meses]`

#### 4.5.1 Company profile + founding + tech stack

- **Founded:** 2021 · UAE/UK multi-region
- **Position:** **Pure BoH — inventory, procurement, recipe costing, business intelligence · explicitly NOT a POS**
- **Multi-branch F&B focus** · customers 2 to 90+ locations
- **3,500+ restaurant clients globally** `[Vendor self-reported]`
- **G2 Momentum Leader 2025**
- **Tech stack:** Cloud-native SaaS · multi-region scale
- **Fundraise history:**
  - **Pre-Seed $1.5M septiembre 2021**
  - **Seed $8M julio 2022** (BECO Capital led)
  - **Total: ~$9.5M raised**

#### 4.5.2 AI features shipped (Q3 verified)

- ✅ **AI invoice capture + extraction** (ML supplier naming recognition)
- ✅ **AI price discrepancy detection** (*"automatically detecting price discrepancies"*)
- ✅ **Automated invoice posting**
- 🟡 **Predictive purchasing + demand forecasting** — `[AI in roadmap]`, NOT yet verified shipped

**Supy positioning page (surfaced via Alan's image research):** Supy compara explicitly against **Crunchtime + Apicbase + MarketMan + Restaurant365 + Toast + Material Control + Restoke + Fern Speed + Nory + Oracle Simphony + Lightyear + Loaded** = **valida structural Direct category match con Zenet** (same competitive set).

#### 4.5.3 Product architecture lessons for Zenet

| Lección Supy | Implementación Zenet |
|---|---|
| **AI invoice capture + discrepancy detection SHIPPED** | **Exactly el AI feature set Zenet debería ship Day 1** — Supy proves market traction |
| **Pure BoH no POS positioning explicit** ("NOT a POS") | Zenet category match — same positioning language |
| **Multi-branch F&B focus 2-90+ locations** | Architecture portable, pero Zenet target SMB 2-5 más narrow ICP |
| **Module architecture (procurement → inventory → recipe costing → BI → integrations)** | Directly informs Zenet módulo design |
| **AI maturity model framework** (December 2025 blog guide) | Reference para Zenet's own AI capability staging narrative |
| **Multi-vertical positioning** (restaurants, food groups, multi-branch chains) | Lesson: positioning breadth vs Zenet narrow ICP focus trade-off |

#### 4.5.4 GTM playbook lessons for Zenet

- **Total funding modest $9.5M** = efficient engineering possible (similar a Apicbase pattern)
- **G2 Momentum Leader 2025** = review platform investment matters · ~unanimous positive reviews
- **24/7 global support multilingual** claimed — operational depth signal
- **25% food cost reduction claimed** — quantified value narrative
- **Deliverect en-mx integration available** — **partial path to MX activated via Deliverect** (interesting MX-adjacent signal)
- **MENA + UK focus** — Saudi Seed expansion plans 2022 · NOT LATAM

**Para Zenet:** Supy's $9.5M raise + 3,500+ clients claim = template para efficient engineering con modest capital · Zenet can replicate similar trajectory en MX market.

#### 4.5.5 LATAM expansion risk monitoring + triggers

**Current status:**

- **MX Readiness 0/10** — No CFDI · No CONTPAQi/Aspel · English-primary · "multilingual" claimed pero NO Spanish localization documented
- **Geographic focus firmly UAE/Saudi/UK con zero LATAM signals**
- Saudi Seed expansion plans 2022 era roadmap; **LATAM NOT en public roadmap**
- **Deliverect en-mx integration available** — **partial MX-adjacent path activated** (interesting signal pero NOT direct MX presence)

**Triggers para re-clasificación:**

| Trigger | Action |
|---|---|
| LATAM expansion announcement | Re-clasificar Tier Gamma |
| Spanish localization shipped | Active MX signal |
| Mexican peer logos published | Active MX presence confirmed |
| Series A announcement (post-$8M Seed) | Capital readiness signal |
| Deliverect partnership deepening + Mexico-specific signals | Adjacent path activation |

**Monitoring cadence:** SEMESTRAL

#### 4.5.6 Strategic implications para Zenet

- **AI features specifically inspirational:** AI invoice capture + discrepancy detection = **exactly the features Zenet should ship Day 1** · Supy proves market traction
- **Structural similarity validates Zenet category:** Pure BoH no POS + multi-branch F&B = same competitive class
- **Diferenciación clear:** *"Supy es Pure BoH AI shipped para MENA/UK enterprise multi-branch. Zenet es Pure BoH AI shipped para Mexican SMB independents — same product class, different geography + ICP."*
- **Deliverect en-mx integration es interesting signal pero NOT active MX presence** — Zenet maintains MX-native advantage
- **Reference for AI feature roadmap:** Day 1 priorities = invoice processing + discrepancy detection · Supy provides validated feature set

---

### 4.6 Restoke.ai ⭐⭐ — Tier Delta · THE closest functional analog Zenet globally (Q5)

`[Classification: Direct (categorial) — Q5 surfaced 2026-05-16]` · `[Origin: Australia — Melbourne, Victoria · founded 2019/2020]` · `[MX Activity: none — AU + NZ + Singapore + UK + US (April 2025 expansion)]` · `[MX Readiness: 0/10]` · `[Velocity: HIGH (agentic AI shipped post-seed)]` · `[Threat horizon: 36+ mo geographic only]`

> 🌟 **Hallazgo crítico Q5 (2026-05-16):** Restoke.ai es **THE closest functional analog Zenet has globally** — same Pure BoH AI-native positioning + same ICP (independent restaurants 1-10 sites) + agentic AI shipped + post-seed velocity. **El único diferenciador es geography.** Validates structurally que la categoría Zenet construye **existe globalmente** con product-market fit verified en mercado AU/NZ/US.

#### 4.6.1 Company profile + founding + tech stack

- **Founded:** **2019/2020** · Melbourne, Victoria (F6S lists 2019, Rampersand portfolio page lists 2020 — likely incorporated 2019, product launched 2020)
- **HQ:** Melbourne · US expansion active April 2025 (co-founder Assaf Stizki relocated to US) · also active New Zealand + Singapore + UK
- **Team size:** LinkedIn lists 2-10 employees · Prospeo estimates 21-50 · given AUD $5.24M seed + US go-to-market hiring, **~25-40 FTE current range**
- **Tech stack:** **Cloud-native + AI-native architecture built on:**
  - **LLM orchestration layer**
  - **ML demand forecasting**
  - **Streaming data pipelines** (live POS + inventory data integration)
- **Fundraise history:**
  - **AUD $5.24M total raised**
  - **AUD $5.1M seed septiembre 2024** (Rampersand VC led)
  - Prior investors: BC Growth Equity + 4 others

#### 4.6.2 AI features shipped (Q5 verified) — LOAD-BEARING agentic AI

**Q5 verified `[AI shipped]` (NOT marketing claim):**

- **ML-driven demand forecasting** integrated con live POS + inventory data streams
- **LLM-based "agentic automation"** para ordering triggers + prep task creation + supplier communication
- **Confidence-gated human-in-the-loop approval flows** (operator confirms before AI executes)
- **Venue clustering for cross-property learning** (multi-location data fusion)
- **Transparent reasoning layer** — operators see how AI reached conclusions (interpretability priority)

**CEO Ken Brand explicit declaration (CMOtech Dec 2025):** *"Shift from 'read-only insights' to 'true agentic automation'"*

**This is EXACTLY the positioning Zenet aspires to.** Restoke.ai has implemented globally what Zenet plans for MX/LATAM.

#### 4.6.3 Product architecture lessons for Zenet — CRITICAL LOAD-BEARING

| Lección Restoke.ai | Implementación Zenet |
|---|---|
| **Agentic AI framing** (NOT solo "AI feature") — *"true agentic automation"* | Zenet messaging discipline: *"capa cognitiva agentic AI"*, NOT *"AI feature"* genérico |
| **LLM orchestration layer + ML demand forecasting + streaming data pipelines** | Zenet architecture blueprint — exactly el stack Zenet should build |
| **Confidence-gated human-in-the-loop approval** | UX pattern critical para Mexican operators (cultural high uncertainty avoidance — operators want override capability, NOT autonomous AI decisions) — cf. doc 06 §5.3 reframing techniques |
| **Venue clustering for cross-property learning** | Network effect lever — Zenet's ML improves con cada nuevo cliente · roadmap consideration |
| **Transparent reasoning layer** | Trust-building UX para Mexican context — Hofstede high uncertainty avoidance demands explainability |
| **Independent restaurant ICP focus (1-10 sites)** | **Identical ICP match — same target customer segment Zenet beachhead** |
| **AI-native architecture from inception** | Validates Zenet's "AI-native Day 1" positioning is right approach (NOT bolt-on AI to legacy stack) |

**Critical insight:** Restoke.ai's architecture is **template para Zenet's roadmap**. Differentiation NOT product (mismo space), differentiation IS:
- Mexican market depth (CFDI + Spanish + *contable* integration + WhatsApp CS)
- Geographic moat (AU/US ≠ MX/LATAM)
- **Standardization process emphasis** (cf. Alan observation — Restoke prioritizes agentic automation but NOT standardization-as-foundational; Zenet differentiator)

#### 4.6.4 GTM playbook lessons for Zenet

- **Series progression timeline:** Pre-seed (2019-2020) → AUD $5.1M Seed septiembre 2024 (Rampersand led) = **~4 años pre-seed to seed**
- **Geographic expansion strategy:** Australia (home) → NZ → Singapore → UK → **US (April 2025)** — English-speaking market sequencing
- **Co-founder relocation strategy:** Assaf Stizki relocated to US April 2025 = founder-led expansion model
- **CMOtech UK profile (Dec 2025):** PR-driven thought leadership (CEO Ken Brand quotes published in trade press)
- **Rampersand VC backing:** Australian-Israeli VC con LATAM-adjacent network potential (NOT realized for Restoke yet, but signal)

**Para Zenet:**
- **4-year pre-seed to seed runway** is reference for early-stage planning timeline
- **Founder relocation pattern** = Alan presence en TJ during Fase 0 design partner cycle (heredado doc 01)
- **PR-driven thought leadership** post-Mes 6 = strategy candidate
- **English-speaking expansion sequencing NO applies a Zenet** (MX → LATAM Spanish-speaking pattern instead)

#### 4.6.5 LATAM expansion risk monitoring + triggers

**Current status (Q5 verified):**

- **MX Readiness 0/10** — markets confirmed: Australia, NZ, Singapore, US, UK · NO LATAM signals found
- **AUD $5.24M total raised** — modest capital; LATAM expansion would require Series A + deliberate decision
- **US is primary growth market** (April 2025 expansion) — LATAM not stated roadmap
- **Co-founder Assaf Stizki US-based** = US strategic priority signal

**Triggers para re-clasificación a Tier Gamma:**

| Trigger | Threshold | Action |
|---|---|---|
| Series A announcement | $10M+ raise | Capital readiness para LATAM |
| Spanish-language product signals | First Spanish release | Active LATAM intent |
| LATAM partnership hiring LinkedIn | Sales/BD LATAM hire | Active LATAM commercial signal |
| MX-specific feature ship (CFDI integration) | Any | Imminent MX entry |
| Customer logo LATAM published | First LATAM client | Active LATAM presence |

**Monitoring cadence:** SEMESTRAL — **MOST IMPORTANT VENDOR to monitor for LATAM signals** dada structural similarity

#### 4.6.6 Strategic implications para Zenet

- **🌟 STRUCTURAL VALIDATION primary:** Restoke.ai's product-market fit (post-seed, scaling US) **validates that the category Zenet construye exists globally with verified PMF**. NOT speculative product — proven category con proof-of-concept en mercado AU/NZ/US.
- **Product roadmap reference highest fidelity:** Restoke's architecture (LLM orchestration + ML forecasting + streaming pipelines + confidence-gated human-in-the-loop + venue clustering + transparent reasoning) = **exactly el blueprint Zenet should follow**
- **Pricing reference (limited):** `[SIN FUENTE PUBLICADA Restoke pricing exact]` — primary research path: Restoke website inquiry or LinkedIn outreach
- **Geographic moat real:** Zenet's MX/LATAM beachhead **es uncontested geography** while Restoke focused AU/NZ/US
- **Defensibility framework:** Si Restoke decide LATAM expansion → re-clasificación inmediata + Zenet acceleration response. But until then, **Zenet's window es structural opportunity**
- **Diferenciador (per Alan's observation about standardization):** Restoke prioritizes agentic automation pero NOT explicitly process standardization. Zenet's positioning *"el sistema operativo cognitivo que estandariza los procesos restauranteros"* es real differentiator vs Restoke's *"agentic automation"* framing
- **Brand archetype reference:** CEO Ken Brand's *"shift from read-only insights to true agentic automation"* = Zenet messaging language candidate

---

### 4.7 Loaded — Tier Delta · AI invoice processing + independent restaurant ICP fit (Q5)

`[Classification: Direct (categorial) — Q5 surfaced 2026-05-16]` · `[Origin: New Zealand — Queenstown, Otago · founded 2010]` · `[MX Activity: none — NZ + AU + UK + US early]` · `[MX Readiness: 0/10]` · `[Velocity: MEDIUM (AI invoice processing shipped)]` · `[Threat horizon: 36+ mo]`

#### 4.7.1 Company profile + founding + tech stack

- **Founded:** **2010** · originally built as **internal management software para Cook Brothers Bars** (12 bars/pubs/restaurants co-founded por Richard McLeod + James Arnott en Queenstown, NZ) — **operator-built origin story**
- **HQ:** 161 Glenda Drive, Queenstown, Otago, NZ · Australian expansion launched early 2023
- **Team size:** 11-50 employees (Matchstiq profile) · LinkedIn 1,377 followers
- **Fundraise history:**
  - **NZD $3.25M raised diciembre 2022** (equity + NZD $1.25M MBIE loan Queenstown Economic Transformation Fund)
  - Series A stage (Matchstiq) · Invest South (lead) + Mainland Angel Investors + MBIE
  - **No further fundraise found post-2022**
- **Tech stack:** **Cloud-native + AI in active deployment for specific features**

#### 4.7.2 AI features shipped (Q5 verified)

**`[AI shipped]` verified — landing page dedicado:** loadedhub.com/landing-pages/ai-invoice-processing

- **AI Invoice Processing** — **live, marketed feature with dedicated URL**
  - AI matches invoice line items to inventory stock items
  - **Learns from operator corrections** (ML refinement)
  - Flags supplier price changes automatically
  - Updates stock-on-hand + recipe costs + COGS reports upon approval
  - Vendor claim: **29 working days saved per year**
  - Feature appears genuinely shipped (dedicated URL + feature preview link + operator testimonials)

**Scope limitation:** **AI invoice processing ONLY** — NO demand forecasting, NO agentic BoH automation found (vs Restoke's deeper agentic positioning).

**Operator testimonials + margin-improvement messaging:** *"grow profit margin by 8%"* (vendor self-reported)

#### 4.7.3 Product architecture lessons for Zenet

| Lección Loaded | Implementación Zenet |
|---|---|
| **Operator-built origin** (Cook Brothers Bars 12 venues founders) | Brand narrative authentic — Zenet considers similar founder story emphasis (operator credibility) |
| **AI invoice processing con ML refinement** ("learns from operator corrections") | UX pattern: human-in-the-loop refinement loop = trust building |
| **All-in-one BoH NO POS** (inventory, stock ordering, recipes, labour/rostering, COGS tracking) | Module breadth pattern — Zenet adapt para MX SMB independents |
| **Integrates con leading POS systems** (positioned como "hub" connecting existing systems) | Zenet positioning identical: *"vive sobre tu POS existente"* |
| **Independent restaurant + bar operators 1-10 venues sweet spot** | Identical ICP focus Zenet |
| **Margin-improvement messaging quantified** (*"grow profit margin by 8%"*) | Mensaje ROI cuantificable pattern · Zenet target similar narrative |
| **29 working days saved per year quantified** (invoice processing AI) | Time-savings metric pattern for Zenet pitch |

#### 4.7.4 GTM playbook lessons for Zenet

- **Series A NZD $3.25M raised diciembre 2022** — modest capital ($2M USD equivalent)
- **10,000+ venues globally across AU/NZ/UK/US** `[Vendor self-reported]` — verification gap pero substantial scale claim
- **Queenstown Economic Transformation Fund (MBIE) NZD $1.25M loan** = government-backed financing pattern (LATAM equivalent could be Mexican government innovation funds + INADEM)
- **Geographic expansion sequencing:** NZ (home) → AU (2023) → UK + US (early) — English-speaking sequencing similar a Restoke
- **No fundraise post-2022** = bootstrapping-after-Series-A pattern

**Para Zenet:** NZD $3.25M raise + 10K+ venues claim (if true) = **efficient capital deployment pattern**. Zenet potentially similar trajectory en MX market con modest Series A.

#### 4.7.5 LATAM expansion risk monitoring + triggers

**Current status:**

- **MX Readiness 0/10** — markets confirmed NZ + AU + UK + US (early) · zero LATAM signals
- Post-seed bootstrap mode (no post-2022 fundraise)
- US expansion prioritized over LATAM

**Triggers para re-clasificación:**

| Trigger | Action |
|---|---|
| Spanish-language product release | Active LATAM intent |
| LATAM customer logos | Active LATAM presence |
| Series B announcement | Capital readiness para LATAM |
| US expansion success → LATAM pivot signals | Strategic redirect |

**Monitoring cadence:** SEMESTRAL · lower priority que Restoke

#### 4.7.6 Strategic implications para Zenet

- **Product benchmark for operator-facing messaging** — Loaded's AI invoice processing feature page + operator testimonials + margin-improvement narrative ("grow profit margin by 8%") = directly comparable a Zenet's intended positioning
- **Operator-built origin story authentic** — Cook Brothers Bars founders = brand narrative pattern Zenet considers (vendor credibility)
- **AI scope narrower que Restoke** — AI invoice processing only, NO agentic BoH automation = lower depth than Restoke
- **Geographic threat low** — NZ/AU/UK/US focus, LATAM not roadmap, modest capital
- **Reference for MX go-to-market narrative:**
  - Operator credibility (founders as restaurant operators themselves)
  - Quantified time savings (29 working days saved)
  - Margin improvement messaging (8% profit margin growth)
  - Hub positioning (vive sobre POS existente)

---

## 5. Cross-vendor synthesis

### 5.1 Pattern recognition — dimensiones compartidas

**Patterns Tier Alpha (PoloTab + Parrot):**

| Pattern | PoloTab | Parrot |
|---|---|---|
| Mexican-origin | ✅ | ✅ |
| Cloud-native modern stack | ✅ (2022) | ✅ (2020) |
| **ZERO AI shipped today** | ✅ | ✅ |
| **ZERO BC/TJ verified presence** | ✅ | ✅ |
| Proprietary payment terminal lock-in | PoloPay (open banking) | Parrot Pay (closed ecosystem) |
| Marketing claim "AI" without product evidence | ✅ ("uses data") | ✅ ("3,200 dataset BI") |
| MX-only sales motion | ✅ | ✅ |
| Cap capacity for AI pivot 6-12 mo | ✅ | ✅ |

**Convergencia crítica:** **Ambos enfrentan la misma vulnerability profile** — modern stack + zero AI shipped + zero BC/TJ + payment lock-in vulnerability. **Zenet positioning attacks both simultaneously** con messaging: *"AI-native shipped + hardware-agnostic + BC-priorizada"*.

**Patterns Tier Beta (Toteat + Fudo):**

| Pattern | Toteat | Fudo |
|---|---|---|
| Foreign LATAM origin | Chile | Argentina |
| Spanish friction explicit | Chilean-isms | Argentine-isms ("¿Querés?") |
| Active MX commercial team | Country Manager Tomás Drápela | CDMX office |
| AI velocity signal | $7.4M funded para AI (NOT shipped) | WhatsApp AI shipped (FoH only) |
| BoH AI gap | ✅ gap | ✅ gap (FoH only shipped) |
| CFDI 4.0 status | Claimed, partial verification | Operational verified |
| MX Spanish neutralization | Incomplete | Incomplete |

**Convergencia:** Both foreign vendors face **Mexican Spanish friction** + **incomplete CFDI verification** + **BoH AI gap**. Zenet positioning: *"MX desde Day 1 + BoH AI native, NOT foreign adaptando + FoH AI extending"*.

**Patterns Tier Delta (Nory + Apicbase + FoodOp + MarginEdge + Supy + Restoke + Loaded — v0.2 expanded):**

| Pattern | Nory | Apicbase | FoodOp | MarginEdge | Supy | **Restoke** | **Loaded** |
|---|---|---|---|---|---|---|---|
| AI-native born | ✅ Day 1 | 🟡 rebrand 2025 | ✅ | 🟡 AI added 2015 | 🟡 AI added | ✅ Day 1 | 🟡 AI added |
| Pure BoH no POS | 🟡 BoH-first | ✅ Pure BoH | 🟡 Kitchen BoH | ✅ Pure BoH | ✅ Pure BoH | ✅ Pure BoH | ✅ Pure BoH |
| ICP independent restaurants 1-10 sites | 🟡 partial multi-location | 🟡 enterprise focus | 🟡 chef-centric | ✅ independents → multi-unit | 🟡 2-90+ multi-branch | ✅ **identical match** | ✅ **identical match** |
| MX Readiness 0/10 | ✅ | ✅ | ✅ | 0.5/10 (Spanish toggle) | ✅ | ✅ | ✅ |
| LATAM NOT en roadmap | ✅ | ✅ | ✅ | ✅ | ✅ (Deliverect en-mx partial) | ✅ | ✅ |
| Entry friction 24-36+ meses | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| AI depth shipped | Agentic AI scheduling + forecasting | 5+ AI features + MCP integration | AI co-pilot chefs | **10-yr AI head start (highest)** | AI invoice + discrepancy detection | **Agentic AI shipped (closest to Zenet positioning)** | AI invoice processing only |
| Structural analog Zenet | Closest agentic AI hospitality OS | Most module architecture similar | Brand archetype match | Closest US BoH archetype | Closest non-AI-native Pure BoH | **🌟 THE closest functional analog globally** | Operator-built origin · ICP match |

**Convergencia critical (Q5 insight load-bearing):**

1. **The Zenet product category EXISTS globally with verified PMF.** Restoke.ai (Australia) is structural twin to Zenet — same AI-native Pure BoH for independent restaurants positioning + agentic AI shipped + post-seed velocity. **NOT speculative category — verified market category con multiple players.**

2. **Geographic moat is the differentiator.** All 7 reference benchmarks have MX Readiness 0-0.5/10. Entry friction MX 24-36 meses minimum (CFDI + Spanish + *contable* + WhatsApp CS + peer references + consultor network). **Zenet's MX/LATAM market depth is structural advantage** que ningún reference benchmark tiene.

3. **Standardization process diferenciador (Alan observation):** Restoke + Nory + Apicbase + Loaded + MarginEdge are *"AI-powered BoH platforms"* — pero **NINGUNO prioritiza explicitly the process of standardization** como Zenet declara *"sistema operativo cognitivo que estandariza los procesos restauranteros"*. Standardization = real differentiator beyond category match.

4. **Zenet inherits AI-native narrative without rebrand requirement** — vs Apicbase's *"after 10 years we're taking the next step"* rebrand narrative. Zenet's "Day 1 AI-native" positioning has free advantage.

5. **Reference benchmarks validate product architecture choices:**
   - LLM orchestration layer (Restoke + Nory)
   - ML demand forecasting (Restoke + Nory + MarginEdge + Apicbase)
   - AI invoice processing with ML refinement (MarginEdge + Supy + Loaded)
   - Confidence-gated human-in-the-loop (Restoke)
   - Transparent reasoning layer (Restoke)
   - MCP integration ChatGPT/Claude/Gemini (Apicbase)
   - Voice stock counting (Apicbase)
   - Module architecture: recipe → procurement → costing → analytics (MarginEdge + Apicbase + Supy)
   - Self-learning forecast algorithms (MarginEdge)

**Zenet's product blueprint = synthesis of these proven architectural patterns + Mexican market depth wrapper.**

### 5.2 Disarming priorities por vendor — sales playbook

> Cuando prospect menciona *"ya tengo / estoy considerando [Vendor]"*, Zenet response:

| Vendor mencionado por prospect | Disarming message Zenet |
|---|---|
| **PoloTab** | *"Perfecto. Zenet NO replaces PoloTab — vive sobre él y le agrega capa AI que PoloTab aún NO ship: procurement automation + demand forecasting predictivo. Pruébalo 30 días paralelo sin cambiar nada."* |
| **Parrot Software** | *"Parrot maneja bien tu POS + delivery + CFDI. Zenet NO replaces Parrot — extiende lo que Parrot YA hace + agrega AI predictivo que Parrot tiene en datos (3,200 POS dataset) pero NO en producto. Plus: hardware-agnostic, NO te encerramos en terminal proprietary."* |
| **Toteat** | *"Toteat es buen POS chileno con plan AI funded. Pero su AI todavía NO está shipped. Zenet ya tiene capa AI BoH operacional — features que Toteat anunció pero NO ha demonstrated. Plus: Zenet diseñado MX desde Day 1, NOT Chile adaptando."* |
| **Fudo** | *"Fudo tiene buen POS + AI chatbot WhatsApp para delivery. Pero Fudo AI está en delivery FoH, NOT en tu BoH operacional. Zenet vive sobre Fudo y agrega: procurement + costing predictivo + demand forecasting. BoH AI native, NOT FoH AI bolted-on."* |
| **Nory** (rare, foreign awareness) | *"Nory es el mejor referente global de lo que Zenet construye — pero Nory NO opera en México y no tiene CFDI, Spanish nativo, o consultor partner network MX. Zenet es 'Nory para México' adaptado al mercado real."* |
| **Apicbase** (rare, EU awareness) | *"Apicbase es el módulo architecture más similar a Zenet pero target enterprise + €249/mes. Zenet es 'Apicbase para SMB Mexican independents' — más accessible + MX-native."* |
| **MarginEdge** (rare, US awareness) | *"MarginEdge es el referente US BoH AI con 10 años de head start — best-in-class AI BoH globally. Pero NO opera en México, NO tiene CFDI nativo, NO tiene Spanish localizado. Zenet construye la versión MX-native con AI shipped y la profundidad del mercado mexicano que MarginEdge tendría que construir desde cero."* |
| **Supy** (rare, MENA awareness) | *"Supy es Pure BoH AI shipped para MENA/UK enterprise multi-branch. Zenet es Pure BoH AI shipped para Mexican SMB independents — same product class, different geography + ICP. Plus: Zenet tiene CFDI nativo + Mexican Spanish + consultor partner network."* |
| **Restoke.ai** (rare, AU/US awareness) | *"Restoke es probably el referente global más cercano de lo que Zenet construye — agentic AI BoH para restaurantes independientes. Pero Restoke opera AU/NZ/Singapore/UK/US, NOT México. Zenet es 'Restoke para México y LATAM' con CFDI nativo + Spanish + relationship-driven sales motion que Mexican operators esperan."* |
| **Loaded** (rare, NZ/AU awareness) | *"Loaded es buen referente built-by-operators desde Queenstown NZ — AI invoice processing shipped para restaurantes/bars independientes. Pero scope AI más limitado que Zenet (solo invoice processing, NOT agentic BoH automation) y zero LATAM presence. Zenet es operator-credible + AI más profunda + MX-native."* |

### 5.3 Differentiation matrix — Zenet vs cada vendor

| Dimensión | Zenet | PoloTab | Parrot | Toteat | Fudo | Nory | Apicbase | FoodOp | **MarginEdge** | **Supy** | **Restoke** | **Loaded** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pure BoH no-POS | ✅ | ❌ POS+inv | ❌ POS+inv | ❌ POS+inv | ❌ POS+delivery | 🟡 BoH-first + Toast integration | ✅ Pure BoH | ✅ Kitchen BoH-first | ✅ Pure BoH | ✅ Pure BoH | ✅ Pure BoH | ✅ Pure BoH |
| AI-native shipped | ✅ Day 1 | ❌ zero | ❌ zero (data sí) | 🟡 funded NOT shipped | 🟡 FoH only | ✅ agentic AI shipped | ✅ 5+ features | ✅ co-pilot | ✅ **10-yr head start (highest)** | ✅ invoice + discrepancy | ✅ **agentic AI shipped** | ✅ invoice processing only |
| Mexican-origin | ✅ | ✅ | ✅ | ❌ Chile | ❌ Argentina | ❌ UK | ❌ Belgium | ❌ UK | ❌ USA | ❌ UAE/UK | ❌ Australia | ❌ NZ |
| CFDI 4.0 native | ✅ | ✅ | ✅ | 🟡 partial | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Mexican Spanish específico | ✅ | ✅ | ✅ | 🟡 Chilean-isms | 🟡 Argentine-isms | ❌ English | 🟡 Spanish-genérico | ❌ English | 🟡 Spanish toggle UI only | ❌ English | ❌ English | ❌ English |
| WhatsApp Business CS | ✅ | ✅ | ✅ | Unknown | ✅ | ❌ | ❌ | ❌ | ❌ | Unknown | ❌ | ❌ |
| CONTPAQi/Aspel integration | 🚧 roadmap | Unknown | Unknown | Unknown | Unknown | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Hardware-agnostic | ✅ | ❌ PoloTab terminal lock-in | ❌ Parrot Pay closed ecosystem | ✅ | ✅ | 🟡 via Toast | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TJ/BC active presence | 🚧 beachhead | ❌ zero | ❌ zero | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ Deliverect en-mx partial | ❌ | ❌ |
| Pricing target SMB MX | $1,500 MXN | $990-1,490 | $949-2,800 | Unknown MX | $360-1,250 | Custom enterprise | €249 enterprise | Unknown | $100-480/loc USD | Unknown | Unknown | Unknown |
| ICP fit Carlos Mendoza independent 2-5 sites | ✅ | ✅ overlap | ✅ overlap | 🟡 | ✅ overlap | 🟡 partial | ❌ enterprise | 🟡 chef focus | ✅ **best US ICP fit** | 🟡 multi-branch 2-90+ | ✅ **identical** | ✅ **identical** |
| **Standardization process emphasis** (Alan observation) | ✅ **core differentiator** | ❌ | ❌ | ❌ | ❌ | 🟡 implicit | 🟡 module-level | ❌ | 🟡 invoice standardization only | 🟡 procurement standardization | 🟡 agentic automation but NOT standardization-as-foundational | 🟡 invoice standardization only |

### 5.4 Threat composite — quién es threat #1 por decision criterion

| Decision criterion del prospect | Threat #1 | Razón |
|---|---|---|
| *"Necesito un POS nuevo Mexican-origin con AI futuro"* | **PoloTab** | YC W23 + agility · Mexican-origin · capacity AI pivot |
| *"Quiero el POS Mexican más establecido con scale"* | **Parrot Software** | 3,200+ POS · $21M ARR · brand recognition |
| *"AI shipped + active commercial team MX"* | **Fudo** | WhatsApp AI shipped + CDMX office + pricing PDF MX |
| *"AI roadmap funded + Spanish-speaking team"* | **Toteat** | $7.4M para AI + Country Manager + MX customer base claim |
| *"El producto AI BoH más avanzado globalmente"* | **MarginEdge** (§4.4) | **10-year AI head start since 2015** · 99% invoice automation · sales forecast 4% accuracy |
| *"El reference benchmark AI-native BoH OS más reciente"* | **Apicbase** (§4.2) | AI-native rebrand 2025 + MCP integration ChatGPT/Claude/Gemini |
| *"El closest functional analog Zenet globally"* | **Restoke.ai** (§4.6) ⭐⭐ | **THE structural twin** — Agentic AI Pure BoH for independents · AU/NZ/US |
| *"El reference benchmark agentic AI hospitality OS"* | **Nory** (§4.1) | $62.6M raised · agentic AI shipped · UK/Europe/US |
| *"AI invoice processing + operator-built credibility"* | **Loaded** (§4.7) | Cook Brothers Bars founders · NZ operator origin · 10K+ venues claim |
| *"Pure BoH AI shipped + multi-branch chains"* | **Supy** (§4.5) | UAE/UK · invoice capture + discrepancy detection · 3,500+ clients |
| *"Chef co-pilot brand archetype match"* | **FoodOp** (§4.3) | UK chef-centric · £4.4M raised 2026 |

**Zenet wins criterion específico:** *"AI-native BoH operativo + Mexican market depth nativo + ICP independents 2-5 sucursales + pricing $1,500 MXN accessible + standardization process emphasis"* — el cruce que ningún competitor occupa actualmente. Q5 validation: la categoría existe globalmente (Restoke + Nory + MarginEdge + Apicbase + Supy + Loaded + FoodOp), pero el cruce MX/LATAM + standardization-as-foundational es uncontested.

---

## 6. Watchlist consolidado per vendor

> Cadencia heredada de doc 01 §13.1-13.2.

| Vendor | Cadencia | Trigger #1 monitor | Trigger #2 | Trigger #3 |
|---|---|---|---|---|
| **PoloTab** | MENSUAL crítico founder | AI feature SHIPPED | AI/ML hire LinkedIn | Series A/B announcement |
| **Parrot Software** | MENSUAL crítico founder | AI feature SHIPPED beyond Industry Report claim | Series B announcement (NOT announced) | BC/TJ customer logo published |
| **Toteat** | MENSUAL | AI feature SHIPPED beyond marketing claim | MX customer count specific | CFDI 4.0 independent verification |
| **Fudo** | MENSUAL | BoH AI shipped beyond WhatsApp FoH | CONTPAQi integration | Pricing tier change |
| **Nory** | SEMESTRAL | LATAM expansion announcement | MX hire LinkedIn | Spanish localization roadmap |
| **Apicbase** | SEMESTRAL | LATAM expansion · SMB pivot | MX hire LinkedIn | Spanish-MX localization |
| **FoodOp** | SEMESTRAL | LATAM expansion · Spanish localization | Larger fundraise | — |
| **MarginEdge** ⭐ | SEMESTRAL | LATAM expansion announcement | Spanish localization native (NOT toggle) | Mexican accounting integration (CONTPAQi/Aspel) |
| **Supy** | SEMESTRAL | LATAM expansion announcement | Spanish localization shipped | Series A post-$8M Seed |
| **Restoke.ai** ⭐⭐ | SEMESTRAL **(MOST IMPORTANT to monitor)** | LATAM partnership hiring LinkedIn | Series A announcement ($10M+ raise) | Spanish-language product signals |
| **Loaded** | SEMESTRAL | Spanish-language product release | LATAM customer logos | Series B announcement |

---

## 7. Discovery questions para design partner interviews (anexo)

> Heredado de doc 01 §15. Preguntas específicas para validate competitive findings via primary research TJ/CDMX.

### 7.1 PoloTab / Parrot Software discovery (most important for TJ beachhead)

- *"¿Conoces PoloTab? ¿Has visto un restaurante usándolo?"*
- *"¿Conoces Parrot Software? ¿Has visto Parrot Pay terminal en algún restaurante?"*
- *"Si te ofreciera PoloTab o Parrot vs un sistema gringo, ¿cuál preferirías y por qué?"*
- *"¿Qué te frustra de los POS Mexican actuales (Parrot, PoloTab, SoftRestaurant)?"*
- *"¿Has visto algún feature 'AI' en los POS Mexican? ¿Lo usarías?"*
- *"Si Parrot tiene 3,200 datapoints de restaurantes Mexican, ¿qué insights querrías que te dé?"*

### 7.2 Toteat / Fudo discovery (foreign LATAM with MX operations)

- *"¿Has escuchado de Toteat (Chile) o Fudo (Argentina)?"*
- *"Si te ofreciera un POS argentino o chileno vs uno mexicano, ¿hay diferencia para ti?"*
- *"¿Notas el español argentino o chileno como friction o no te importa?"*
- *"¿Has visto el WhatsApp chatbot de Fudo? ¿Te interesaría algo similar pero para BoH (inventory, procurement)?"*

### 7.3 Reference benchmarks discovery (less critical, but valuable)

- *"¿Conoces alguna plataforma BoH AI-native foreign (MarginEdge, Apicbase, Nory, Restoke, Loaded)?"*
- *"Si te dijera que existe globalmente un 'AI-native BoH operating system' que da: voice stock counting (Apicbase), AI invoice processing 99% accuracy (MarginEdge), agentic AI ordering (Restoke), demand forecasting predictivo (Nory) — ¿lo usarías si fuera diseñado MX-native? ¿qué te detiene?"*
- *"Restoke.ai (Australia) construye exactly esto para restaurantes independientes — ¿conocías este tipo de producto? ¿qué te resulta más relevante para tu operación?"*

### 7.4 Switching dynamics discovery

- *"¿Qué te haría cambiar tu POS actual?"*
- *"¿Cuál es el principal frustration con tu POS actual?"*
- *"Si Zenet vive sobre tu POS existente (NO replaces), ¿lo probarías? ¿Qué te haría dudar?"*

---

## 8. Fuentes

### 8.1 Queries Perplexity Pro integradas

Heredadas de doc 01 §16.1:

| Query | Modo | Fecha | Output file | Vendors aplicables a doc 02 |
|---|---|---|---|---|
| **Q1** Discovery competitive landscape | DeepSearch | 2026-05-15 | Q1 file | All 7 vendors initial profile + MarginEdge + Supy |
| **Q2** Below-radar regional MX | DeepSearch | 2026-05-15 | Q2 file | NOT applicable to doc 02 vendors |
| **Q3** 3-dim threat assessment (12 vendors) | DeepSearch | 2026-05-16 | Q3 file | PoloTab + Toteat + Fudo + Nory + Apicbase (verified) · FoodOp (lighter) · MarginEdge (verified deep) · Supy (verified) |
| **Q4** Parrot Software targeted | DeepSearch | 2026-05-16 | Q4 file | Parrot Software verified deep |
| **Q5** Supy comparison page 6-vendor verification | DeepSearch | 2026-05-16 | `/Users/alanbahena/Downloads/Zenet Watchlist Radar  6-Vendor Light Verification Report.md` | **Restoke.ai + Loaded surfaced as Direct competitors** · Oracle Materials Control + Oracle Simphony + FernSPEED + Lightyear documented |

### 8.2 Vendor public sources consultadas

- polotab.com · developer.polotab.com · YC company page · LinkedIn company page
- parrotsoftware.com.mx · parrotsoft.mx · parrotsoftware.io · Trustpilot 4.2/5 (n=6) · Indeed MX · Instagram active
- toteat.com/es-mx · LinkedIn (Tomás Drápela Country Manager verified) · GetApp México
- fu.do/es-mx · Help center · YouTube product demos (WhatsApp AI chatbot diciembre 2025) · GetApp México 4.7/5 (n=3) · Pricing PDF MX Feb 2026
- nory.ai · Toast integration support · YouTube product demos April 2026 (AI Scheduling Assistant) · LinkedIn US HQ NY post
- get.apicbase.com · Capterra · GetLatka 2024 ($3.2M ARR · 52-person team)
- thecaterer.com (FoodOp £4.4M raise)

### 8.3 Documentos del workspace referenciados

- `00-marco-y-disciplina-competitive.md` — classification framework + anti-falsificación rules
- `01-mapa-competitivo-y-categorias.md` v0.3 — vendor mapping + Tier framework + classification table
- `02-customer-research/05-buying-process-y-criterios-de-decision.md` §10 — Mexican B2B sales motion patterns
- `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §3.6 + §5.3 — disarming techniques + reframing
- `02-customer-research/07-voice-of-customer.md` — verbatim library aplicable a disarming
- `Branding/_context/01-brand-strategy/posicionamiento.md` — Zenet category declaration
- `Branding/_context/01-brand-strategy/personalidad-y-arquetipo.md` — sous chef cognitivo archetype (relevant FoodOp comparison)

### 8.4 Primary research path declarada — para cerrar gaps

Cf. doc 01 §16.3. Gaps específicos cierre via design partner interviews TJ/CDMX:

- **Customer logos específicos** por vendor (todos los 7)
- **Pricing realmente cobrado** (NO list pricing) — Toteat MX especial gap
- **AI features percibidos** vs advertised
- **Mexican Spanish friction** real (Toteat Chilean-isms · Fudo Argentine-isms)
- **Switch trigger reasons** real (NOT vendor-claimed)
- **Hardware lock-in real cost** Parrot Pay / PoloPay
- **Reviews authentic** (G2/Capterra thin for both Mexican vendors)

### 8.5 Activo declarado — Mini-Query 5 potencial (NOT dispatched)

Si gaps prove disruptive durante doc 03-07 redacción, dispatch targeted:

- **Q5 candidate:** Customer reviews aggregation (G2 + Capterra + Reddit + Foros MX) para los 7 vendors — voice-of-customer triangulation
- **Q6 candidate:** GTM motion + sales process details per vendor (channel · paid ads aggressiveness · partner network)

**Decisión actual:** NO dispatch ahora · primary research path > Perplexity adicional para closing remaining gaps.
