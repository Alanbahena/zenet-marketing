---
name: Viabilidad económica y COGS
description: Nivel 2 sanity check estructurado de viabilidad económica Zenet Phase 1 (NO Nivel 3 unit economics formal · ese vive en 05-capital-y-finanzas/02-financial-model-y-projections.md cuando se construya). Cubre costos fijos Phase 1 sintetizados (software paid tier baseline · founder dev tools · profesional services · hardware MacBook amortized 12 meses) · costos variables breakdown por componente (Anthropic API tokens dominant cost · WhatsApp Business · Supabase · PAC · Stripe fee) · 4 user profiles canónicos (Light · Medium · Heavy · Aggressive outlier) · dos escenarios COGS canónicos (A founder-bootstrap Phase 1 · B post-seed steady-state CON realistic MX CS salaries $10-25K MXN/mes NOT US-inflated) · sensitivity matrix 4 tiers × 2 COGS × 2 architecture states (16 cells) · per-customer unit economics · break-even analysis Phase 1 · margin floor + ceiling por tier · architecture mitigation impact cuantificado 5 capas (Capa 1 P0 prompt caching prerequisite Phase 1.5 · Capa 2-5 roadmap) · WhatsApp ventana 10 hrs Esencial cost impact · scale projections informational 4 stages (5/25/50/100 clientes) · 3 hallazgos load-bearing (break-even Mes 12-15 · ARPA bajo path requires Multi-Sitio + Enterprise mix · Enterprise tier productización Phase 2 critical) · 6 sustainability levers (incluyendo NEW MX cost structure discipline as strategic moat) · MX cost structure como competitive advantage LATAM defensibility layer · founder time opportunity cost framed correctly (NO COGS · personal runway). Hereda dos escenarios COGS canónicos doc 00 §6.3 + defensa multi-capa AI inference COGS doc 00 §6.6 + 3 escenarios pricing canónicos doc 00 §6.4. Cross-reference future financial model scaffold para Nivel 3 upgrade trigger.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-06-01
status: active
version: 0.1
owner: Alan Bahena
---

# Viabilidad económica y COGS

> Nivel 2 sanity check estructurado de viabilidad económica Phase 1 · NO Nivel 3 unit economics formal. Cubre costos fijos + variables · sensitivity matrix · break-even · margin floor · architecture mitigation impact · scale projections informational · 3 hallazgos load-bearing + 6 sustainability levers · MX cost structure como competitive advantage.
>
> Trigger upgrade a Nivel 3 unit economics formal: 3+ design partners con behavioral data Mes 3+ + cost actuals validan hipótesis · ese análisis vive en `05-capital-y-finanzas/02-financial-model-y-projections.md` (scaffold pre-draft v0.1).

---

## Índice

1. Propósito · scope · Nivel 2 frame
2. Costos fijos Phase 1
3. Costos variables por cliente · breakdown por componente
4. User profiles canónicos
5. Dos escenarios COGS canónicos · aplicación per tier
6. Sensitivity matrix completa · 4 tiers × 2 COGS × 2 architecture states
7. Per-customer unit economics por tier
8. Break-even analysis · cliente count para cubrir fijos
9. Margin floor + ceiling por tier
10. Architecture mitigation impact cuantificado · 5 capas defensa
11. WhatsApp ventana 10 hrs Esencial cost impact
12. Scale projections informational · 4 stages
13. 3 hallazgos load-bearing + 6 sustainability levers
14. MX cost structure como competitive advantage
15. Validation triggers + decisiones abiertas + anti-patterns + version triggers

---

## 1. Propósito · scope · Nivel 2 frame

### 1.1 Qué responde este doc

Cuatro preguntas economic-specific (Nivel 2 sanity check):

1. **¿Cuánto cuesta entregar Zenet por cliente/mes?** — costos fijos + costos variables breakdown realista
2. **¿En qué escenarios el pricing funciona económicamente?** — sensitivity matrix (4 tiers × 2 COGS × 2 architecture states)
3. **¿Cuántos clientes necesitamos para cubrir costos fijos?** — break-even analysis Phase 1
4. **¿Dónde está el margin floor defendible?** — qué precio rompe la viabilidad por tier

### 1.2 Qué NO responde este doc (defer a Nivel 3)

| Tipo | Por qué NO aquí | Dónde vive |
|---|---|---|
| LTV (Lifetime Value) formal | Requiere churn data observada | `05-capital-y-finanzas/02-financial-model-y-projections.md` v0.1 (trigger Mes 3+ data) |
| CAC (Customer Acquisition Cost) formal | Requiere sales motion costs medidos | `05-capital-y-finanzas/02-financial-model-y-projections.md` v0.1 |
| Cohort analysis · retention curves | No hay cohorts pre-PMF | `05-capital-y-finanzas/03-unit-economics-formal.md` (future) |
| Multi-year P&L projection (3-5 años) | Speculative pre-PMF · anchors mal decisions | `05-capital-y-finanzas/02-financial-model-y-projections.md` v0.1 |
| Runway calculation · burn rate detailed | Capital structure decision | `05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` (pending) |
| Valuation modeling | Capital + IR | `05-capital-y-finanzas/05-investor-relations-pipeline.md` (future) |
| Investment ask sizing (pre-seed amount) | Capital structure | `05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` (pending) |
| Operational overhead detail | Operations · ya documentado | `05-capital-y-finanzas/01-operational-readiness.md` v0.1 |

### 1.3 Frame Nivel 2 canonical (heredado doc 00 §6.8)

> **Este doc es Nivel 2 sanity check estructurado · NO Nivel 3 financial model. Trigger de upgrade a Nivel 3: 3+ design partners con behavioral data real + cohort >Mes 6.**

Disciplina anti-falsificación foundational: todos los números marcados `[Hipótesis sin validar]` · `[Estimación cualitativa]` · O `[Anclado en research X]`. Sin estos labels, el doc se vuelve ficción que después rompe decisiones de pricing al hire.

### 1.4 Hereda de docs upstream

| Doc | Qué hereda |
|---|---|
| `00-marco-de-oferta-y-pricing.md` v1.0 §2.3 | Honestidad estructural sobre founder labor subsidy |
| `00-marco-de-oferta-y-pricing.md` v1.0 §6.3 | Dos escenarios COGS canónicos (A founder-bootstrap · B post-seed steady-state) |
| `00-marco-de-oferta-y-pricing.md` v1.0 §6.4 | Tres escenarios pricing canónicos |
| `00-marco-de-oferta-y-pricing.md` v1.0 §6.6 | Riesgo estructural AI inference COGS · defensa multi-capa (5 capas) |
| `00-marco-de-oferta-y-pricing.md` v1.0 §6.8 | Qué NO hacemos aquí (defer a 05-capital-y-finanzas) |
| `03-pricing-tiers-hipotesis.md` v0.1 §3.1 | Estructura 4 tiers + pricing anchor por tier |
| `03-pricing-tiers-hipotesis.md` v0.1 §3.2 | WhatsApp ventana 10 hrs Esencial · cost impact differential |
| `03-pricing-tiers-hipotesis.md` v0.1 §6.1 + §6.3 | Cap users + internal caps por tier |
| `05-capital-y-finanzas/01-operational-readiness.md` v0.1 §10 | Operational overhead Phase 1 (lawyer · despacho · vendor stack) |

---

## 2. Costos fijos Phase 1

Costos que NO escalan con # clientes Phase 1 design partner cohort.

### 2.1 Software infra · paid tier baseline planning

`[Anclado en data]` · cost real production repo + user breakpoints analysis:

| Vendor | Plan | MXN/mes | USD/mes |
|---|---|---|---|
| Vercel Pro | Scale (post-bandwidth) | $400 | $20 |
| Railway | Scaled (pay-per-resource) | $700 (midpoint $20-50) | $35 |
| Supabase Pro | Scale (post free tier) | $500 | $25 |
| PostHog Pro | Scale (50K-500K events) | $4,000 (midpoint $100-300) | $200 |
| Sentry Team | Scale (5K+ errors) | $520 | $26 |
| Langfuse Hobby | Scale (50K+ observations) | $520 | $26 |
| GitHub Free Org | Phase 1 | $0 | $0 |
| Vercel Speed Insights | Incluido | $0 | $0 |
| Dominio | Amortized | $20-80 | $1-4 |
| **Subtotal paid tier baseline** | | **~$6,660-6,720** | **~$333-336** |

**Nota crítica:** free tiers cubren Phase 1 design partners (5 clientes cohort) actualmente. **Paid tier becomes baseline al scale-up Phase 1 expanded (10-25+ clientes)** cuando breakpoints se cruzan (Vercel bandwidth · Supabase DB size · PostHog events · Sentry errors · Langfuse observations).

### 2.2 Founder dev tools (pre-revenue burn)

`[Anclado en data founder]`:

| Tool | MXN/mes | USD/mes | Propósito |
|---|---|---|---|
| Anthropic Max plan personal (Alan dev) | $2,000 | $100 | Personal/development · NO cliente API costs |
| Figma Pro | $300-600 | $15-30 | Design system + UI work |
| Notion Plus | $200 | $10 | Workspace + docs |
| Adobe Creative Cloud | $1,100 | $55 | Asset creation |
| Google Workspace empresarial | $120 | $6 | zenet@zenet.mx + collab tools |
| **Subtotal founder tools** | **~$3,720-4,020** | **~$186-201** |

### 2.3 Profesional services Phase 1

`[Anclado en data founder]`:

| Service | MXN/mes | USD/mes | Notas |
|---|---|---|---|
| Lawyer amortized (20,400 MXN / 6 meses) | $3,400 | $170 | One-time engagement Tier 2.0 post intent confirmation · NO incluye trámites IMPI/registros |
| Contador despacho | $500 | $25 | Despacho contable monthly · MX SMB rate |
| **Subtotal services** | **~$3,900** | **~$195** |

**Phase 1.5+ additions (cuando active billing):**

| Service | MXN/mes | USD/mes |
|---|---|---|
| PAC CFDI subscription (Facturama · Konfio) | $200-500 | $10-25 |

### 2.4 Hardware (one-time amortized)

`[Hipótesis sin validar · decisión founder]`:

| Item | One-time MXN | Amortized 12 meses MXN/mes | USD/mes |
|---|---|---|---|
| MacBook Pro M4 nueva (si decides upgrade desde 2019 Intel) | $60-80K | $5,000-6,667 | $250-333 |

### 2.5 Total fijos Phase 1 · 2 scenarios timeline

**Scenario A · Phase 1 design partners (Months 1-3 · 5 clientes · free tiers cubren):**

| Categoría | MXN/mes | USD/mes |
|---|---|---|
| Software infra (free tiers stick) | $120 | $6 |
| Founder dev tools | $3,720-4,020 | $186-201 |
| Profesional services | $3,900 | $195 |
| Google Workspace | (incluido founder tools) | (incluido) |
| MacBook amortized (si aplica) | $5,000-6,667 | $250-333 |
| **Subtotal Scenario A** | **~$12,740-14,707 MXN/mes** | **~$637-735 USD/mes** |

**Scenario B · Phase 1 expanded / early Phase 1.5 (Months 4-12 · 5-25 clientes · paid tiers baseline):**

| Categoría | MXN/mes | USD/mes |
|---|---|---|
| Software infra (paid tier baseline) | $6,660-6,720 | $333-336 |
| Founder dev tools | $3,720-4,020 | $186-201 |
| Profesional services | $3,900 | $195 |
| MacBook amortized | $5,000-6,667 | $250-333 |
| **Subtotal Scenario B** | **~$19,280-21,307 MXN/mes** | **~$964-1,065 USD/mes** |

**Diferencia Stage A → B:** ~$6,540 MXN/mes ($327 USD/mes) en paid tier transition · step function cuando hits breakpoints.

### 2.6 Founder time opportunity cost · footnote (NO cash COGS)

**Honest framing critical:**

| Concept | Treatment |
|---|---|
| **Cash COGS** | $0 (founder NO paga salary a sí mismo Phase 1) · NO aparece en business P&L |
| **Opportunity cost** | $40-80K MXN/mes equivalent · senior product/eng role MX corporate hipótesis |

**Aplicaciones:**

- ❌ NO en gross margin calculation (NO cash COGS)
- ❌ NO en break-even business analysis
- ✅ SÍ en personal runway calculation (founder financial planning · 12-18 meses pre-revenue absorption)
- ✅ SÍ en investor pitch como "skin in the game" signal ($24-72K USD foregone strong commitment evidence)
- ✅ SÍ en Path A solo bootstrap viability decision
- ✅ Transitions a cash COGS gradualmente post-seed con founder draw ($30-60K MXN/mes typical pre-seed · $60-120K MXN/mes seed · $150-300K MXN/mes Series A)

Cross-ref: `05-capital-y-finanzas/01-operational-readiness.md` v0.1 §10.4 (Path A vs B implications).

### 2.7 Empleados opcional Phase 1.5+ (si investment scenario)

`[Hipótesis sin validar · decisión post pre-seed]`:

| Role | MXN/mes salary | USD/mes | Cuándo |
|---|---|---|---|
| Junior CS rep MX | $10-15K | $500-750 | Phase 1.5 (post-design-partners · 10+ clientes) |
| Mid-level CS MX | $15-25K | $750-1,250 | Phase 2 (50+ clientes mature) |
| Engineer junior MX | $15-25K | $750-1,250 | Phase 1.5 (architecture mitigations Capa 1+2) |
| Sales rep MX | $15-25K base + comisión | $750-1,250 base | Phase 2 (commercial scaling) |

**1-2 empleados Phase 1.5 hipótesis total: $25-40K MXN/mes ($1,250-2,000 USD)** + % acciones structure TBD.

---

## 3. Costos variables por cliente · breakdown por componente

Costos que escalan con # clientes y/o usage intensity. Per-cliente per-mes basis.

### 3.1 Anthropic API tokens (driver #1 · dominante)

`[Hipótesis sin validar · arquitectura production current sin Capa 1 mitigation]`:

**Per user profile (tokens/mes hipótesis):**

| User profile | Conversations/día | Tokens input/output/mes | Cost USD/mes/user |
|---|---|---|---|
| Light (contable · sous chef ocasional) | 1-2 | 150-300K | $1-3 |
| Medium (manager checking turno) | 3-5 | 500K-1.2M | $4-10 |
| Heavy (owner · kitchen lead constante 24/7) | 8-15 | 2.5-5M | $20-45 |
| Aggressive (multi-turn complex · outlier) | 20+ | 8-12M | $60-100 |

**Source pricing:** Sonnet 4.6 default (cf. production repo CLAUDE.md) · $3/M input · $15/M output · ratio ~50/50 hipótesis.

**Per tier projection (cohort mixed hipótesis 30/50/18/2):**

| Tier | Active users | Anthropic USD/cliente/mes (sin Capa 1) |
|---|---|---|
| Esencial | 5 users · ventana 10 hrs | $20-50 |
| Pro | 8 users · 24/7 | $40-100 |
| Multi-Sitio | 10 users/sucursal · 24/7 + cross-sucursal | $60-150/sucursal |

**Multi-Sitio Carlos Mendoza arquetípico (2 sucursales · 20 users total):** $120-300 USD/mes total.

### 3.2 WhatsApp Business API (driver #2)

`[Hipótesis sin validar · provider TBD · Meta direct recommended Tier 1.5 investigation]`:

| Provider hipótesis | Cost structure |
|---|---|
| **Meta direct** ⭐ | Free messaging cliente-initiated 24h window · paid templates business-initiated · phone number rental ~$50 MXN/mes |
| 360Dialog MX | Setup fee + monthly · típicamente más caro |
| Twilio MX | Pay per message · higher rates |

**Per tier projection (Meta direct hipótesis):**

| Tier | WhatsApp window | WhatsApp USD/cliente/mes |
|---|---|---|
| Esencial | Ventana 10 hrs (limited engagement) | $5-15 |
| Pro | 24/7 unlimited | $15-40 |
| Multi-Sitio | 24/7 + cross-sucursal | $25-60/sucursal |

### 3.3 Otros costos variables

`[Hipótesis sin validar · stage-dependent]`:

| Component | Cost USD/cliente/mes | Notas |
|---|---|---|
| **Supabase compute scaling** | $0-5 | Phase 1 design partners free tier covers ($0) · Phase 1 expanded paid tier amortized over cohort ($1-5) · scales con data growth |
| **PAC CFDI per timbre** | $1-3 | Subscription amortized across clientes + per-timbre fee |
| **Stripe/Conekta transaction fee** | $2-6 (~3% revenue) | 2.9-3.6% per cobro · $1,500-3,598 MXN cobro = $43-130 MXN fee/cliente/mes |
| **Otros vendor scaling** (Langfuse · PostHog observations attributable) | $1-3 | Amortized post-breakpoint crossing |

**Stage-dependent Supabase:**

| Stage | Supabase status | Cost amortized USD/cliente/mes |
|---|---|---|
| Stage 1 (5 clientes Months 1-3) | Free tier covers | $0 |
| Stage 2 (25 clientes Months 4-9) | Pro tier ($25/mes) amortized | $1-2 |
| Stage 3 (50 clientes) | Pro tier estable | $0.5-1 |
| Stage 4 (100+ clientes) | Pro tier + possible Team scaling | $1-5 |

---

## 4. User profiles canónicos

**4 perfiles cuantificados para sensitivity analysis:**

| Perfil | % cohort hipótesis | Conversations/día/user | Cost driver |
|---|---|---|---|
| **Light** | 30% | 1-2 | Lowest cost · stable margin |
| **Medium** | 50% | 3-5 | Default · sustainable margin |
| **Heavy** | 18% | 8-15 | Margin pressure point |
| **Aggressive (outlier)** | 2% | 20+ | Margin destroyer · Heavy Usage Pack target Phase 1.5+ |

**Cohort mix realista hipótesis: 30/50/18/2** · validation trigger post Mes 3 design partners behavioral data.

### 4.1 Profile breakdown per tier user count

**Esencial (5 users hipótesis mix):**

| User role | Profile típico | Count |
|---|---|---|
| Owner | Heavy | 1 |
| Manager | Medium | 1 |
| Chef | Medium | 1 |
| Sous chef | Light | 1 |
| Contable externo | Light (NOT counted en cap) | 1 |

**Pro (8 users hipótesis mix):**

| User role | Profile típico | Count |
|---|---|---|
| Owner | Heavy | 1 |
| Manager(s) | Medium-Heavy | 2 |
| Chef | Medium | 1 |
| Sous chefs | Light-Medium | 2 |
| Kitchen leads | Light-Medium | 2 |
| Contable externo | Light (NOT counted) | 1 |

**Multi-Sitio (10 users/sucursal hipótesis mix):**

| User role | Profile típico | Count per sucursal |
|---|---|---|
| Owner (cross-sucursal) | Heavy | 1 (compartido cross-sucursal) |
| Manager per sucursal | Medium-Heavy | 1 |
| Chef per sucursal | Medium | 1 |
| Sous chefs | Light-Medium | 2-3 |
| Kitchen leads · FoH heads | Light-Medium | 4-5 |
| Contable externo | Light (NOT counted) | 1 cross-sucursal |

---

## 5. Dos escenarios COGS canónicos · aplicación per tier

Heredados de doc 00 §6.3 · profundizados aquí con quantification per tier.

### 5.1 Escenario A · Founder-bootstrap Phase 1

**Frame:** founder labor (high-touch onboarding + CS bi-weekly + soporte WhatsApp ad-hoc) NO en cash COGS · gross margin inflated artificialmente · NO defender pricing long-term aquí.

**Cuándo aplica:** Q3 2026 - Mes 6+ (founder solo bootstrap)

**Per-cliente per-mes (sin Capa 1 mitigation · arquitectura production actual):**

| Tier | Anthropic | WhatsApp | Supabase | PAC | Stripe | **Total Escenario A sin Capa 1** |
|---|---|---|---|---|---|---|
| Esencial | $20-50 | $5-15 | $0-1 | $1-3 | $2-3 | **$28-72** |
| Pro | $40-100 | $15-40 | $0-1 | $1-3 | $3-4 | **$59-148** |
| Multi-Sitio (2 sucursales total) | $80-200 total | $30-80 total | $0-2 | $1-3 | $5-6 | **$116-291 total** |

### 5.2 Escenario B · Post-seed steady-state (con realistic MX salaries)

**Frame:** CS hire + onboarding labor amortizado con MX cost structure (NOT US-inflated · MX salary realistic $10-25K MXN/mes junior CS).

**Cuándo aplica:** Mes 6-12 post-seed (1-2 empleados Phase 1.5)

**MX cost structure validation:**

- CS hire MX salary: $10-25K MXN/mes ($500-1,250 USD/mes)
- CS hire labor cost: ~$3-8 USD/hour (salary ÷ 160 hrs/mes)
- Onboarding takes 30-50 hrs/cliente
- One-time onboarding cost: $90-400 USD/cliente
- Amortizado 24-month customer lifetime: **$4-17 USD/cliente/mes**
- CS labor ongoing (50 clientes/CS mature ratio): **$10-25 USD/cliente/mes**

**Per-cliente per-mes (sin Capa 1):**

| Tier | A + CS labor amortized | + onboarding labor amortized | **Total Escenario B sin Capa 1** |
|---|---|---|---|
| Esencial | $28-72 + $10-25 | + $4-17 | **$42-114** |
| Pro | $59-148 + $10-25 | + $4-17 | **$73-190** |
| Multi-Sitio (2 sucursales) | $116-291 + $10-25/cliente | + $4-17 | **$130-333 total** |

### 5.3 Comparación side-by-side

**Lectura crítica:** MX cost structure reduces Escenario B impact vs US-equivalent significantly (CS labor $40-80 US vs $10-25 MX · onboarding amortized $19-52 US vs $4-17 MX) · esto es competitive advantage estructural (cf. §14).

---

## 6. Sensitivity matrix completa · 4 tiers × 2 COGS × 2 architecture states

Matrix 16 cells · principal sensitivity analysis del doc.

### 6.1 Sin Capa 1 mitigation (arquitectura production current)

| Tier | Revenue USD | Escenario A | Escenario B |
|---|---|---|---|
| Esencial | $75 | COGS $28-72 → margin **4-63%** | COGS $42-114 → margin **-52% to 44%** |
| Pro | $100 | COGS $59-148 → margin **-48% to 41%** | COGS $73-190 → margin **-90% to 27%** |
| Multi-Sitio (2 sucursales) | $180 | COGS $116-291 → margin **-62% to 36%** | COGS $130-333 → margin **-85% to 28%** |
| Enterprise (typical $400 USD) | $400+ | Generally positive (lower utilization ratio) | Generally positive |

### 6.2 Con Capa 1 P0 prompt caching (-50% Anthropic costs)

| Tier | Revenue USD | Escenario A | Escenario B |
|---|---|---|---|
| Esencial | $75 | COGS $18-47 → margin **37-76%** | COGS $32-89 → margin **-19% to 57%** |
| Pro | $100 | COGS $39-98 → margin **2-61%** | COGS $53-140 → margin **-40% to 47%** |
| Multi-Sitio (2 sucursales) | $180 | COGS $76-191 → margin **-6% to 58%** | COGS $90-233 → margin **-29% to 50%** |
| Enterprise | $400+ | Generally positive | Generally positive |

### 6.3 Lectura crítica de la matrix

**🚨 Hallazgos estructurales:**

| Hallazgo | Implicación |
|---|---|
| Esencial sin Capa 1 es viable solo en realistic mixed usage (NO heavy outliers) | Heavy Usage Pack Phase 1.5+ critical para protect margin Esencial heavy users |
| Pro tight cross-scenarios sin Capa 1 (margin range incluye negative) | Capa 1 P0 prerequisite estructural Phase 1.5 · NO opcional |
| **Multi-Sitio MARGINAL incluso con Capa 1 en Escenario B** (-29% to +50%) | Requires Capa 2 (model routing) Phase 2 + cohort mix bias toward Multi-Sitio + Enterprise + possible upside pricing scenario |
| Enterprise tier generally positive cross-scenarios | Path to profitability requires Enterprise mix · productización Phase 2 estructurally critical |

**Disciplina:** todos estos rangos son `[Hipótesis sin validar]` · cierran con behavioral data Mes 3+ design partners.

---

## 7. Per-customer unit economics por tier

Per-customer unit economics summary (most-likely scenario: B con Capa 1 mitigation):

### 7.1 Esencial unit economics hipótesis

| Métrica | Hipótesis range | Most-likely (mid) |
|---|---|---|
| Revenue/mes | $75 | $75 |
| COGS/mes (B con Capa 1) | $32-89 | $60 |
| Gross margin USD | -$14 to $43 | $15 |
| Gross margin % | -19% to 57% | 20% |
| Contribution margin (excluye CS amortized) | $25-50 USD | $37 |

### 7.2 Pro unit economics hipótesis

| Métrica | Hipótesis range | Most-likely (mid) |
|---|---|---|
| Revenue/mes | $100 | $100 |
| COGS/mes (B con Capa 1) | $53-140 | $96 |
| Gross margin USD | -$40 to $47 | $4 |
| Gross margin % | -40% to 47% | 4% |
| Contribution margin (excluye CS amortized) | $14-60 USD | $37 |

### 7.3 Multi-Sitio unit economics hipótesis (per cliente · 2 sucursales)

| Métrica | Hipótesis range | Most-likely (mid) |
|---|---|---|
| Revenue/mes | $180 | $180 |
| COGS/mes (B con Capa 1) | $90-233 | $161 |
| Gross margin USD | -$53 to $90 | $19 |
| Gross margin % | -29% to 50% | 11% |
| Contribution margin (excluye CS amortized) | $19-115 USD | $67 |

**Lectura:** most-likely Multi-Sitio gross margin 11% es TIGHT pero defendible · contribution margin más sano $67 USD permits absorbing fixed cost share.

### 7.4 Cliente acquisition payback (informational · NO LTV/CAC formal)

`[Hipótesis sin validar · placeholder for Nivel 3 future analysis]`:

| Tier | Hipótesis CAC USD | Months to payback (contribution margin basis) |
|---|---|---|
| Esencial | $500-1,500 | 13-40 meses |
| Pro | $500-2,000 | 13-54 meses |
| Multi-Sitio | $1,000-3,000 | 15-45 meses |

**Estos números requieren validation real con behavioral data · cross-ref `05-capital-y-finanzas/02-financial-model-y-projections.md` v0.1 cuando construyas.**

---

## 8. Break-even analysis · cliente count para cubrir fijos

¿Cuántos clientes necesitas para cubrir costos fijos Phase 1?

### 8.1 Break-even Scenario A (free tiers · Months 1-3)

Fixed: $637 USD/mes
Contribution margin per cliente (most-likely):
- Esencial: ~$37
- Pro: ~$37
- Multi-Sitio: ~$67

| Tier mix | Clientes para break-even |
|---|---|
| Solo Esencial | 17 clientes |
| Solo Pro | 17 clientes |
| Solo Multi-Sitio | 10 clientes (5 sucursales mix) |
| Mixed (1/3 Esencial · 1/3 Pro · 1/3 Multi-Sitio) | ~14 clientes |

### 8.2 Break-even Scenario B (paid tier baseline · Months 4+)

Fixed: $964 USD/mes
Same contribution margin assumptions.

| Tier mix | Clientes para break-even |
|---|---|
| Solo Esencial | 26 clientes |
| Solo Pro | 26 clientes |
| Solo Multi-Sitio | 14 clientes |
| Mixed | ~21 clientes |

### 8.3 Lectura estratégica

**Phase 1 cohort 5 design partners NO cubre fijos completamente:**

- Revenue cohort 5 Multi-Sitio Socio Fundador descuento 25%: ~$675 USD/mes
- Fixed Scenario A: $637 USD/mes
- Variable cohort 5: ~$650 USD/mes total
- **Net: -$612 USD/mes burn during design partner cohort**

**Gap financed via:**
- Founder personal runway absorption (Path A solo bootstrap)
- Pre-seed funding bridge (Path B)
- Annual prepay design partners cash flow front-loading
- Founder time opportunity cost foregone

**Path to break-even hipótesis:**

| Stage | Clientes target | Months | Status |
|---|---|---|---|
| Stage 1 (5 design partners) | 5 | 1-3 | Sustained burn |
| Stage 2 (early commercial) | 14-21 mixed | 4-9 | Approaches break-even |
| Stage 3 (Phase 1.5 growing) | 21-50 mixed | 10-15 | Crosses break-even with cohort mix bias |
| Stage 4 (Phase 2 scaling) | 50-100+ con Enterprise mix | 15-24 | Profitable positive margin |

---

## 9. Margin floor + ceiling por tier

Precio mínimo defendible dado COGS · precio máximo defendible dado wallet anchor.

### 9.1 Margin floor (COGS-driven · sin Capa 1 protective minimum)

`[Hipótesis sin validar]` · Escenario B sin Capa 1 break-even price:

| Tier | Margin floor USD/sucursal | Margen 30% target USD/sucursal | Vs current anchor |
|---|---|---|---|
| Esencial | $60 (break-even most-likely) | $86 | Anchor $75 está BELOW 30% margin target sin mitigation |
| Pro | $96 (break-even) | $137 | Anchor $100 está BELOW 30% target sin mitigation |
| Multi-Sitio | $80/sucursal (break-even) | $115/sucursal | Anchor $90/sucursal está BELOW 30% target sin mitigation |

### 9.2 Margin ceiling (wallet calibration)

Precio máximo defendible dado competitive landscape MX SMB wallet:

| Tier | Ceiling USD/sucursal | Source |
|---|---|---|
| Esencial | $100 | Bistrosoft Pro $1,599 = $80 USD · pero Zenet value differentiated permits $100 |
| Pro | $130 | Above Bistrosoft Pro premium · justified por 24/7 |
| Multi-Sitio | $130/sucursal | Matching Pro premium · multi-sucursal commitment |

### 9.3 Lectura honest

**🚨 Hallazgo crítico:**

Most-likely COGS scenario (B con Capa 1) genera margins:
- Esencial: 20% (below 30% target)
- Pro: 4% (well below target)
- Multi-Sitio: 11% (below target)

**Esto significa pricing actual está APENAS sustainable post-seed sin further architecture mitigation.**

**Mitigation requirements para llegar a 30% target margin healthy:**

1. ✅ Capa 1 P0 prompt caching (assumed)
2. Capa 2 model routing (additional -30% Anthropic)
3. Cohort mix bias Multi-Sitio + Enterprise (higher contribution margin per cliente)
4. Upside pricing scenario activation post-Mes 6 validation
5. CS scaling discipline (50+ clientes/CS lowering CS cost per cliente)

---

## 10. Architecture mitigation impact cuantificado · 5 capas defensa

Heredado de doc 00 §6.6 · profundizado con cost reduction quantification.

### 10.1 Production repo arquitectura status actual

`[Anclado en research · Explore agent analysis production repo 2026-05-30]`:

| Optimización | Status actual | Mitigation potential untapped |
|---|---|---|
| Model routing (Haiku/Sonnet/Opus) | ❌ Single Sonnet 4.6 · NO routing | -30% a -50% COGS |
| Prompt caching (`cache_control`) | ❌ NOT configured | -50% a -90% en cached tokens |
| Context window discipline | ❌ Full history loaded each turn | -20% a -40% |
| Response caching common queries | ❌ NOT implemented | -15% a -25% |
| Pre-computed insights (batch nocturno) | ❌ All on-demand | -25% a -40% |
| Prompt compression (optimized system prompts) | ⚠️ System prompts 3-34 KB (grandes) | -10% a -20% |

**Lectura:** Capa 1 mitigation potential está ENTIRELY UNTAPPED en production actual · disponible al implementar Phase 1.5+.

### 10.2 5 capas defensa multi-capa quantification

| Capa | Mecanismo | Effort eng | Impact COGS | Priority Phase |
|---|---|---|---|---|
| **1 P0** | Anthropic prompt caching | 1-2 días | **-50% a -90% cached tokens** · highest ROI per effort | **Phase 1.5 prerequisite** |
| **1 P1** | Model routing (Haiku queries simples · Sonnet análisis · Opus strategic) | 3-5 días | -30% a -50% | Phase 1.5-2 |
| **1 P2** | Context window discipline (truncation · summarization) | 1-2 sem | -20% a -40% | Phase 2 |
| **1 P3** | Pre-computed insights batch nocturno | 2-3 sem | -25% a -40% | Phase 2 |
| **2** | Soft caps + alertas CS reactivas | 0 (procedural) | Outliers identification | Phase 1 |
| **3** | Tier differentiation por service level (ventana 10 hrs Esencial vs 24/7 Pro/Multi) | 0 (already designed) | Captures cost-driver real | Phase 1 (already) |
| **4** | Add-ons reactivos Phase 1.5+ (Heavy Usage Pack · Specialty Agent Pack) | 1-2 sem post observación | Captures outliers sin fragmentar primera venta | Phase 1.5+ |
| **5** | Worst-case pricing protection (upside scenario $1,800-2,000 activation) | 0 (pricing decision) | Last resort si Capas 1-4 fail | Phase 1.5+ trigger |

### 10.3 Capa 1 P0 prompt caching · prerequisite Phase 1.5

**Por qué es estructural prerequisite NO opcional:**

| Razón | Detalle |
|---|---|
| Multi-Sitio sin Capa 1 sustained negative margin under heavy usage | Margin floor breached Escenario B without mitigation |
| Pro tier marginally viable sin Capa 1 | Margin range incluye negative scenarios |
| System prompts grandes (3-34 KB) son highly cachable | Production architecture currently MAXIMUM untapped potential |
| ROI per effort extremo (1-2 días eng · -50%+ Anthropic) | Highest leverage architecture investment posible |
| Capa 2-5 dependencies | Otras mitigations build on caching infrastructure |

**Implementation timeline hipótesis:**

- Día 1-2 eng: design + implement `cache_control` directives en system prompts
- Día 3-4 eng: test cache hit rates · validate cost reduction
- Día 5: monitor production · validate -50%+ Anthropic cost reduction
- **Total: 1 sem eng effort · permanent cost reduction · prerequisite Phase 1.5 cohort scaling**

### 10.4 Capa 2 priority elevated post Multi-Sitio analysis

Originally Capa 2 era "Phase 1.5-2 · si Anthropic costs trend high observed". Post sensitivity analysis Multi-Sitio:

**Capa 2 (model routing) elevated to Phase 1.5-2 priority** porque Capa 1 standalone NO sustains Multi-Sitio margin healthy. Capa 1+2 combined target -60-70% Anthropic costs · permits Multi-Sitio gross margin 30-40% range sustainable.

---

## 11. WhatsApp ventana 10 hrs Esencial cost impact

### 11.1 Quantified differential

`[Hipótesis sin validar]`:

| Tier | WhatsApp service | Conversations/cliente/mes hipótesis | Cost USD/cliente/mes |
|---|---|---|---|
| Esencial | Ventana 10 hrs/día customizable | ~150-300 (limited engagement) | $5-15 |
| Pro | 24/7 instant | ~300-600 (full engagement · off-hours premium) | $15-40 |
| Multi-Sitio | 24/7 + cross-sucursal | ~300-600/sucursal · cross-sucursal queries multiply | $25-60/sucursal |

### 11.2 Validation triggers

**Behavioral data Months 1-3 design partners:**

- Ventana utilization rate actual (Esencial)
- Off-hours engagement intensity (Pro · Multi-Sitio)
- Cross-sucursal query volume (Multi-Sitio)
- Window customization patterns (Esencial · template choices)

**Triggers de cierre cost estimates:**
- 3+ Esencial design partners con 30+ días ventana usage observed
- 3+ Pro/Multi-Sitio con 30+ días 24/7 engagement observed

---

## 12. Scale projections informational · 4 stages

Informational scale modeling · NOT prediction · helps founder + investor visualize trajectory possible.

### 12.1 Stage 1 · Phase 1 Design Partners (5 clientes · Months 1-3)

| Componente | USD/mes |
|---|---|
| Revenue (5 Multi-Sitio descuento SF 25%) | $675 |
| Variable COGS (con Capa 1 mitigation hipótesis) | $650 |
| Fixed (Scenario A free tier · Months 1-3) | $637 |
| **Monthly burn** | **-$612** |
| Founder time opportunity cost | $2,000-4,000 equivalent (NO cash · personal) |

### 12.2 Stage 2 · Early commercial (25 clientes · Months 4-9)

Mix hipótesis: 10 Esencial + 10 Pro + 5 Multi-Sitio (cohort mix post-design-partners)

| Componente | USD/mes |
|---|---|
| Revenue (no descuento SF · standard pricing) | $2,650 |
| Variable COGS (con Capa 1) | $1,600 |
| Fixed (Scenario B paid tier baseline) | $964 |
| **Subtotal sin team** | $86 (barely break-even) |
| + 2 empleados MX (junior CS + junior eng) $25-40K MXN | -$1,250-2,000 |
| **Total con team** | **-$1,164 a -$1,914 burn** |

### 12.3 Stage 3 · Growing Phase 1.5 (50 clientes · Months 10-15)

Mix con bias toward Multi-Sitio: 15 Esencial + 20 Pro + 15 Multi-Sitio

| Componente | USD/mes |
|---|---|
| Revenue | $5,822 |
| Variable COGS (Capa 1+2 partial) | $3,500 |
| Fixed (scaled paid tier · PostHog escala) | $1,200 |
| Team (3-5 empleados MX mid-level) | $2,250-6,250 |
| **Total margin** | **-$1,128 a -$5,128 burn** |

### 12.4 Stage 4 · Scaling Phase 2 (100 clientes · Months 18-24)

Mix con Enterprise productización: 20 Esencial + 30 Pro + 40 Multi-Sitio + 10 Enterprise (typical $400+/mes ACV)

| Componente | USD/mes |
|---|---|
| Revenue | $19,000-25,000 (Enterprise ACV variable) |
| Variable COGS (Capa 1+2-3 implemented) | $7,000-9,000 |
| Fixed (scaled Phase 2 infra) | $2,500 |
| Team (5-8 empleados MX mid-senior) | $4,000-10,000 |
| **Total margin** | **$5,500-3,500 positive** |

### 12.5 Path to profitability hipótesis · revisado con MX cost structure

**Break-even hipótesis Mes 12-15** (vs Mes 18-24 con US-equivalent salaries):

| Trigger break-even | Cuándo |
|---|---|
| Variable cost coverage (gross margin positive) | ~Mes 6-9 con Capa 1 |
| Operating margin positive (cover fixed + team) | ~Mes 12-15 con disciplined MX OpEx |
| Sustainable positive cash flow | ~Mes 15-18 |
| Profitable (post all costs · including reinvestment) | ~Mes 18-24 |

**MX cost structure advantage:** path 6 meses más rápido vs US-equivalent · cf. §14.

---

## 13. 3 hallazgos load-bearing + 6 sustainability levers

### 13.1 3 hallazgos load-bearing

| # | Hallazgo | Implicación |
|---|---|---|
| 🚨 1 | **Modelo NO break-even hasta ~25-50 clientes (Mes 12-15 hipótesis)** | Pre-seed funding $100-200K USD bridge needed · realistic con MX cost structure · less than my previous $150-300K estimate (US-inflated) |
| 🚨 2 | **ARPA actual ($75-180 USD) es LOW para B2B SaaS sustainable** | Path requires shift mix Multi-Sitio + Enterprise over time · cohort mix bias estratégicamente importante |
| 🚨 3 | **Enterprise tier productización Phase 2 es STRUCTURALLY critical** | 1 Enterprise cliente ($400+ ACV) = 5-6 Esencial revenue equivalent · driver profitability más alto · NO defer >Q3 2027 |

### 13.2 6 sustainability levers

| # | Lever | Cuándo activar |
|---|---|---|
| 1 | **Capa 1 P0 prompt caching** (engineering 1-2 días · -50%+ Anthropic) | Phase 1.5 prerequisite estructural |
| 2 | **Cohort mix shift bias toward Multi-Sitio + Enterprise** | Sales motion targeting Phase 1.5+ |
| 3 | **Add-ons revenue streams** (Heavy Usage Pack · Specialty Agent Pack · "Boost de Capacidad" alternative framing) | Phase 1.5+ reactive post observación design partners |
| 4 | **Annual prepay aggressive push** (cash flow + retention compound) | Phase 1 desde primer cierre |
| 5 | **Enterprise tier productización Phase 2** (Q3-Q4 2027 target) | Phase 2 launch · Sub-segmento C outbound |
| 6 ⭐ | **MX cost structure discipline** (hire MX talent at MX rates · NO copy US salary brackets · preserve cost advantage as moat) | Cross-phase · structural decision |

### 13.3 Price evolution principles (NO trajectory specifics aquí)

Cross-ref `03-pricing-tiers-hipotesis.md` v0.1 (future v0.2 add §12):

| Principio | Detalle |
|---|---|
| **Grandfather existing customers SIEMPRE** | NUNCA raise on existing · solo NEW customers post-increase |
| **Annual inflation 3-5%** | Standard SaaS practice · small NEW customer increases |
| **Major increases 10-15% tied to value** | Tied to TIER 3 launch · Enterprise productization · Phase 2 specialty agents |
| **Socios Fundadores lock-in PERMANENTE** | Doc 02 §5.2 commitment lifetime · NEVER recovery posible |

**Trajectory specifics defer:** `05-capital-y-finanzas/02-financial-model-y-projections.md` v0.1 cuando se construya con behavioral data Mes 3+.

---

## 14. MX cost structure como competitive advantage

Sección dedicada para flagear strategic moat layer que MX cost structure provides.

### 14.1 Cost arbitrage vs US vertical AI competitors

`[Anclado en industry benchmarks]`:

| Competitor type | CS hire salary | Engineering salary | Operational overhead |
|---|---|---|---|
| **US vertical AI** (Harvey · Hippocratic) | $60-120K USD/año | $150-250K USD/año | High (legal · finance · operations US-cost) |
| **US horizontal SaaS** | $50-100K USD/año | $120-200K USD/año | High |
| **Zenet MX** | **$6-30K USD/año** ($500-2,500 USD/mes range) | **$12-60K USD/año** ($1,000-5,000 USD/mes range) | Low (MX professional services · MX office costs) |

**Cost arbitrage: 5-10x lower operational cost** vs US vertical AI competitors.

### 14.2 Implicaciones estratégicas

**1. Defensibility moat layer:**

Foreign vertical AI vendors entering MX/LATAM market face:
- 7-layer language moat (cf. `03-competitive-analysis/07-defensibility.md` §4.2.2)
- 18-36 meses entry friction
- **PLUS cost structure: MX talent at MX rates → Zenet sostiene operations 5-10x cheaper**

Esto compound defensibility · permits Zenet to compete on price AND service simultaneously.

**2. Path to profitability acceleration:**

Same revenue $5,822/mes (50 clientes):
- US-cost structure: -$5,000-10,000/mes burn
- MX-cost structure: -$1,000-5,000/mes burn (5-50% improvement)

Path to profitability ~6 meses más rápido con MX cost discipline.

**3. LATAM expansion preserves advantage:**

Phase 5 LATAM expansion (Colombia · Chile · Peru) con similar cost structures:
- Local hire at local rates (NO MX-rate inflation)
- USD pricing capture (MX-cost · USD-revenue arbitrage)
- Compound competitive advantage

**4. Pre-seed funding requirement reduced:**

| Scenario | Pre-seed need (12-18 meses bridge) |
|---|---|
| US-cost structure equivalent | $250-500K USD |
| MX-cost structure realistic | **$100-200K USD** (60% lower) |

Esto materially affects Path A vs Path B decision · Path A solo bootstrap más viable con MX discipline.

### 14.3 Discipline canonical · "NO copy US salary brackets"

**Anti-pattern explícito Phase 1-2:**

- ❌ NO contratar "competitive con US salaries" para retener talento
- ❌ NO compensate junior MX hires at $30K USD/año "para nivelarse"
- ❌ NO use "global remote" framing as excuse para US salaries
- ❌ NO assume MX talent quality requires US compensation

**SÍ canonical:**

- ✅ MX-market competitive salaries (research-validated rates per role per city)
- ✅ Equity upside compensation for top performers (% acciones structure)
- ✅ Remote-friendly culture but MX-cost basis preserved
- ✅ Founder cash compensation discipline (NO premature founder draw inflation)
- ✅ Bonus tied to milestones + performance (variable compensation)

**Cross-ref operational readiness doc `01-operational-readiness.md` v0.1 §10.4** (Path A vs B implications).

### 14.4 LATAM cost structure expansion preserves arbitrage

| Country | CS junior MXN equivalent | Eng mid MXN equivalent | Notes |
|---|---|---|---|
| Mexico | $10-25K | $25-50K | Baseline |
| Colombia | ~$12-30K (COP equivalent) | $30-60K | Similar arbitrage |
| Chile | ~$15-35K (CLP equivalent) | $35-70K | Slightly higher |
| Peru | ~$10-25K (PEN equivalent) | $25-50K | Similar to MX |
| Argentina | ~$8-20K (peso-FX volatility) | $20-45K | Lower nominal · FX risk |

**Implicación Phase 5 expansion:** Zenet sostiene MX-equivalent OpEx en LATAM expansion · USD pricing growth + LATAM-cost OpEx = compound profitability.

---

## 15. Validation triggers + decisiones abiertas + anti-patterns + version triggers

### 15.1 Decisiones abiertas con triggers de cierre

| # | Decisión | Hipótesis Phase 1 | Trigger de cierre |
|---|---|---|---|
| 1 | COGS exact por componente | Hipótesis directional cada uno | Behavioral data Mes 1-3 + actual vendor invoices Mes 1-6 |
| 2 | User profile mix realista | 30% light · 50% medium · 18% heavy · 2% aggressive | Behavioral data Phase 1 cohort |
| 3 | Architecture mitigation actual impact | Capa 1 -50% to -90% · Capa 2 -30% to -50% | Engineering implementation + measurement Mes 1-6 |
| 4 | Margin floor exact per tier | Hipótesis directional con sensitivity | Behavioral data + COGS actual Mes 6 |
| 5 | Onboarding labor amortization period (post-seed) | 24-month customer lifetime assumption | Cohort observation post-CS hire |
| 6 | CS labor cost per cliente (post-seed MX salaries) | $10-25 USD/mes amortized (50 clientes/CS mature) | Actual CS hire ratios + load |
| 7 | Trigger de transition founder-bootstrap → post-seed steady-state | Pre-seed close O 10+ commercial clientes | Capital event O scale milestone |
| 8 | Heavy Usage Pack pricing economic justification | $600-800/mes hipótesis | Phase 1.5+ observación heavy users |
| 9 | WhatsApp Business provider final | Meta direct hipótesis | Tier 1.5 investigation post-design-partner conversations |

### 15.2 Behavioral data metrics Months 1-3 design partners

Métricas críticas que alimentan v0.2:

| Métrica | Para qué validación |
|---|---|
| User count actual per sucursal por tier | Cap users validation (#2 doc 03) |
| Interactions/mes/sucursal patrón | Internal caps + COGS validation |
| WhatsApp window utilization (Esencial) | Ventana validation |
| Cost actuals vendor (Anthropic · WhatsApp · Supabase) | COGS hipótesis validation |
| Heavy usage outliers identification | Heavy Usage Pack trigger |
| Multi-sucursal expansion rate | Multi-Sitio tier validation |
| Active user dormancy rate | Active user definition refinement |
| Annual prepay take-rate | Cash flow projections |

### 15.3 Anti-patterns explícitos

| NO hacemos | Razón |
|---|---|
| **Full unit economics con LTV/CAC formal pre-PMF** | Ficción anclada · defer a `05-capital-y-finanzas/02-financial-model-y-projections.md` (Nivel 3) |
| Multi-year P&L projection (3-5 años) | Speculative · anchors decisions wrongly · defer |
| Cohort analysis sin cohort data | Impossible · pre-PMF |
| Ignorar founder labor subsidy (Escenario A solo) | Self-anchoring optimista · rompe al hire |
| Surface cost details al cliente (utility-bill messaging) | Destruye categoría · cf. doc 00 §6.5 |
| Heavy discount tactical justificado por "good unit economics" | Year 1 churn lever · destruye anchor · cf. doc 01 §6 |
| Modelar architecture mitigation como ya implementado (Capa 1) | Engineering work pending · sensitivity con/sin mitigation explícito |
| **Copy US salary brackets for MX hires** (cost discipline violation) | Destroys MX cost structure competitive advantage · 5-10x cost arbitrage lost · cf. §14.3 |
| Premature founder draw inflation pre-seed | Wastes runway · signals undisciplined Phase 1 |
| Use "global remote" framing as excuse para US-rate compensation | Same as US salary brackets · violates §14.3 anti-pattern |
| Modelar Phase 2+ economics sin investment cierre | Phase 2 requires capital event · model post pre-seed cierre |

### 15.4 Estado v0.1

Cerrado 2026-06-01 tras síntesis exhaustiva de:
- Founder cost data input (PFAE setup · MacBook · Anthropic Max personal · Figma/Notion/Adobe · lawyer · contador)
- Production repo architecture analysis (Explore agent · tech stack confirmed · architecture mitigation potential cuantificado)
- MX cost structure correction (CS salaries realistic · onboarding labor amortized properly · CS labor amortized realistic ratios)
- Pricing implications conversation (Multi-Sitio tightness sin Capa 1 · architecture roadmap elevation)
- Scale projections + 3 hallazgos + 6 sustainability levers + MX cost advantage section

### 15.5 Version triggers

| Transición | Trigger |
|---|---|
| v0.1 → v0.2 | 3+ design partners con behavioral data Mes 3+ + cost actuals 3+ meses observed + Capa 1 P0 implementation measured |
| v0.2 → v0.3 | 5+ cierres reales + Mes 6 cliff observed + cohort retention data |
| v0.3 → v1.0 | 10+ clientes commercial + Mes 12+ data + CS scaling validated + Enterprise tier first close |
| v1.0 → v2.0 | Phase 2 launch · Enterprise productización · architecture Capa 2-5 implemented · pricing model evolved |

### 15.6 Pendientes inmediatos post-v0.1

1. **Engineering brief Capa 1 P0 prompt caching** — Phase 1.5 priority absolute · production repo eng coordination
2. **Vendor cost tracking dashboard setup** — measure actual Anthropic · WhatsApp · Supabase costs cohort by cohort
3. **Behavioral analytics instrumentation** — interaction patterns + user activity + cost attribution
4. **Trigger framework documentation** — `05-capital-y-finanzas/02-financial-model-y-projections.md` upgrade triggers refined
5. **WTP validation methodology** — `05-wtp-validation-plan.md` (pending v0.1) ejecución plan Months 3-6

### 15.7 Cross-doc dependencies

| Doc | Relación |
|---|---|
| `00-marco-de-oferta-y-pricing.md` v1.0 | Dos escenarios COGS + tres pricing scenarios + defensa multi-capa principles heredados |
| `01-modelo-comercial-y-terminos.md` v0.1 | Estructura comercial base · onboarding scope · cancellation framework |
| `02-programa-socio-fundador-offer.md` v0.1 | Descuento Socio Fundador 20-30% impact cohort 5 revenue calculation |
| `03-pricing-tiers-hipotesis.md` v0.1 | Pricing per tier anchor + scenarios · WhatsApp ventana 10 hrs Esencial differential cost |
| `05-wtp-validation-plan.md` (pending) | PSM methodology validates pricing hipótesis · feeds margin analysis |
| `05-capital-y-finanzas/01-operational-readiness.md` v0.1 | Operational overhead Phase 1 · vendor stack timing · Tier framework |
| `05-capital-y-finanzas/02-financial-model-y-projections.md` v0.1-pre-draft | **Trigger upgrade Nivel 2 → Nivel 3 unit economics formal · cohort modeling · multi-year projections** |
| `02-features-y-scope/00-fase-1-mvp-scope.md` v0.1 | Agents Phase 1 scope determines COGS structure |
| `02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 | Phase 2 specialty agents add-on revenue · architecture mitigation roadmap Capa 1+2 alignment |
| Production repo architecture | Tech stack + COGS components canonical source |
| `03-competitive-analysis/07-defensibility.md` v0.1 §4.2.2 | 7-layer language moat + MX cost structure as compound defensibility |

---

## Notas finales

**Para founder strategic clarity:**

Este doc consolida síntesis exhaustiva de cost reality · architecture analysis · MX cost structure advantage · 3 hallazgos load-bearing · 6 sustainability levers. Path to viability ES alcanzable Phase 1 con disciplina · pero requires:

1. **Capa 1 P0 prompt caching Phase 1.5** (non-negotiable engineering priority · 1-2 días eng)
2. **MX cost structure discipline cross-phase** (NO copy US salary brackets · preserve 5-10x cost arbitrage)
3. **Pre-seed bridge $100-200K USD** realistic con MX structure (vs $150-300K mi previous estimate US-inflated)
4. **Cohort mix bias Multi-Sitio + Enterprise over time** · NO crecer solo en Esencial
5. **Enterprise tier productización Q3-Q4 2027** · critical path to profitability
6. **Annual prepay aggressive push design partners + early commercial** · cash flow + retention compound

**Para engineering / product priorities:**

Capa 1 P0 prompt caching es **highest ROI architecture investment posible Phase 1.5** · 1-2 días effort · -50% a -90% Anthropic costs en cached tokens · unlocks Multi-Sitio sustainability + permits cohort scaling. Capa 2 model routing follows Phase 1.5-2 · Capa 3-5 Phase 2+.

**Para investor pitch (futuro):**

MX cost structure como competitive moat layer es undervalued story · 5-10x cost arbitrage vs US vertical AI competitors + LATAM expansion preserves advantage + path to profitability ~6 meses faster. Esto debe ser parte del pitch financial narrative.

**Para sales motion (futuro):**

Pricing $1,500/$1,999/$1,799 anchor está APENAS sustainable post-seed sin Capa 1 mitigation · sales motion debe defender anchor contra heavy discount pressure (margin floor rationale internal · NO surface al cliente). Heavy discount tactical Phase 1 = unit economics destruction · anti-pattern declarado.

**Trigger crítico para upgrade a Nivel 3:**

Cuando 3+ design partners completen Mes 3 con behavioral data real + cost actuals validan hipótesis · proceder a construir `05-capital-y-finanzas/02-financial-model-y-projections.md` v0.1 (currently scaffold pre-draft). Sin ese trigger · Nivel 3 modeling = ficción anclada que destruye decisiones.

---

*Última actualización: 2026-06-01.*
