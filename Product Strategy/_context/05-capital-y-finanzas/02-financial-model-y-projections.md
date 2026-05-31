---
name: Financial model y projections (PRE-DRAFT scaffold)
description: Scaffold pre-draft del financial model completo de Zenet. NO es v0.1 todavía · es estructura outline + data inputs needed + methodology references + triggers para construcción. Cuando construyamos v0.1 incluirá revenue projections (con price evolution + cohort mix bias), COGS projections (con architecture mitigation impact), OpEx projections (team growth + vendor stack scaling), cash flow projections (annual prepay impact + burn rate + runway), 3 escenarios (conservative · moderate · aggressive), sensitivity analysis (pricing · churn · CAC · ARPA), comparables vertical AI SaaS benchmarks, valuation framework hipótesis. Trigger para v0.1: 3+ design partners con behavioral data Mes 3+ + cost actuals validan hipótesis + pricing PSM-validated. Hasta entonces vive como scaffold con disciplina anti-falsificación premature modeling.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-30
status: draft
version: 0.1-pre-draft
owner: Alan Bahena
---

# Financial model y projections · PRE-DRAFT scaffold

> **NOTA IMPORTANTE · ESTE ES SCAFFOLD PRE-DRAFT · NO v0.1 todavía.**
>
> Este doc existe para reservar space en el subfolder y documentar estructura + data inputs + triggers para construcción del financial model completo cuando data conductual exista.
>
> **Hasta que triggers se cumplan · NO construir full model.** Pre-PMF financial modeling sin behavioral data = ficción anclada que después rompe decisiones. Disciplina canonical: cf. `00-marco-de-oferta-y-pricing.md` v1.0 §6.8 ("Qué NO hacemos aquí").

---

## Por qué este doc existe en pre-draft (no waiting hasta tener data)

Razones operativas para scaffold ahora:

1. **Reserva structural space** en el subfolder para future construction
2. **Documenta data inputs requeridos** para que founder/team sepa qué levantar Mes 1-6
3. **Anchors triggers explícitos** para v0.1 construction (evita premature ó delayed)
4. **Cross-references upstream/downstream** ya documentados (cuando construyas, dependencies clear)
5. **Methodology references** documented para que cualquiera (founder · fractional CFO · AI agent) tenga starting point

---

## Triggers para mover de PRE-DRAFT a v0.1

**Construir v0.1 SOLO cuando TODOS estos triggers se cumplan:**

| Trigger | Por qué crítico |
|---|---|
| ✅ 3+ design partners activos Mes 3+ | Behavioral data conductual real disponible |
| ✅ Cost actuals 3+ meses observados (Anthropic · WhatsApp · Supabase · etc.) | Validate hipótesis cost breakdown · refine escenarios |
| ✅ Pricing PSM-validated (Van Westendorp ó cierres reales >2) | Anchor pricing para revenue projections defendible |
| ✅ Mes 3 GO/NO-GO checkpoint design partners completado | Validated commercial GA readiness |
| ✅ Pre-seed conversation seria (LOI investor ó term sheet draft) | Justifies investment effort en full model |

**Si construyes v0.1 sin estos triggers:**

- ❌ Revenue projections basadas en pricing NO validated
- ❌ COGS projections basadas en architecture NO mature
- ❌ Cash flow projections basadas en cohort behavior NO observed
- ❌ Modelo se convierte en ficción anclada que ancla decisions mal
- ❌ Pierde credibility con investors cuando comparan modelo vs reality

---

## Outline · qué incluirá v0.1 cuando se construya

### §1. Propósito · scope · audiencia

- Para founder strategic clarity
- Para pre-seed/seed investor pitch finance section
- Para fractional CFO onboarding
- Para board updates (post-seed)

### §2. Methodology + assumptions canonical

- Frameworks aplicados (SaaS metrics · vertical AI economics · etc.)
- Assumptions explícitas (churn · CAC · ARPA growth · price evolution)
- Sensitivity bounds disciplina
- Comparable benchmarks (Toast · ServiceTitan · Hippocratic · Harvey AI · etc.)

### §3. Revenue projections (multi-year)

**Inputs:**
- Pricing per tier (anchor + downside + upside scenarios · cf. `03-oferta-y-pricing/03-pricing-tiers-hipotesis.md`)
- Price evolution trajectory hipótesis (cf. doc 03 §12 cuando se redacte)
- Cohort acquisition rate per phase
- Cohort mix evolution (bias toward Multi-Sitio + Enterprise over time)
- Churn rate per cohort (Mes 6 cliff observed)
- Expansion revenue (annual prepay · Heavy Usage Pack · Specialty Agent Pack · upgrade paths)

**Outputs:**
- MRR / ARR trajectory 5 años
- Revenue por tier breakdown
- NRR (Net Revenue Retention) per cohort
- GRR (Gross Revenue Retention)
- Rule of 40 trajectory

### §4. COGS projections (multi-year)

**Inputs:**
- Cost breakdown per tier (cf. `03-oferta-y-pricing/04-viabilidad-economica-y-cogs.md` Nivel 2)
- Architecture mitigation impact (Capa 1 P0 · Capa 2-5 roadmap timing)
- Vendor cost evolution (Anthropic API pricing changes · WhatsApp Business cost scaling)
- Supabase / hosting tier scaling breakpoints

**Outputs:**
- COGS trajectory 5 años
- Gross margin trajectory per tier
- Gross margin blended
- COGS as % revenue trajectory (target <40% mature)

### §5. OpEx projections (multi-year)

**Inputs:**
- Team growth plan (Phase 1 founder solo → Phase 2 5-7 employees → Phase 3 15-25 → Phase 4 50+)
- Salary structure MX hipótesis ($15-50K MXN/empleado promedio)
- Founder/exec equity vs cash split
- Operational overhead growth (lawyer · contador → CFO · GC · etc.)
- Sales/marketing investment trajectory (CAC growth)
- R&D investment trajectory

**Outputs:**
- OpEx trajectory 5 años
- OpEx by category (S&M · R&D · G&A)
- OpEx as % revenue trajectory

### §6. Cash flow + runway projections

**Inputs:**
- Revenue + COGS + OpEx (anteriores)
- Annual prepay impact (cash flow front-loading)
- Working capital assumptions
- CapEx (hardware · tools · subscriptions)

**Outputs:**
- Monthly cash flow projection
- Cumulative cash position
- Runway calculation (months ahead)
- Burn rate evolution
- Path to profitability (cash flow positive month)

### §7. 3 escenarios canónicos

| Scenario | Assumptions clave |
|---|---|
| **Conservative** | Slow cohort growth · low Multi-Sitio mix · architecture mitigation slow · downside pricing |
| **Moderate** ⭐ | Base case · documented hipótesis · architecture P0 implemented · anchor pricing |
| **Aggressive** | Fast cohort growth · high Multi-Sitio mix · architecture mitigation full · upside pricing |

Cada escenario con:
- Revenue trajectory
- Profitability month
- Pre-seed need
- Seed need
- Series A need
- Valuation hipótesis

### §8. Sensitivity analysis

Variables clave para tornado chart:

| Variable | Impacto magnitud |
|---|---|
| Pricing per tier ($1,200 vs $1,500 vs $1,800-2,000) | Alto |
| Cohort mix (% Multi-Sitio + Enterprise) | Alto |
| Churn rate Mes 6 (10% vs 20% vs 30%) | Alto |
| CAC ($500 vs $1,500 vs $5,000) | Medio-Alto |
| Architecture mitigation timing (Phase 1.5 vs Phase 2) | Medio |
| Team growth pace (slow vs aggressive) | Medio |
| Enterprise tier productization timing (Phase 2 vs Phase 3) | Medio |

### §9. Comparables benchmarks vertical AI SaaS

| Company | Stage | ARPA | Gross margin | Path to profitability | Relevance |
|---|---|---|---|---|---|
| Toast | Public ($25B market cap) | High | 30-40% (POS hardware drag) | 10+ años | Restaurant vertical reference |
| ServiceTitan | Public | Mid-High | 50-60% | 10+ años | Vertical SaaS reference |
| Harvey AI | Series C | Very High ($500-1,500/seat) | 70%+ | TBD | Vertical AI premium reference |
| Hippocratic AI | Series A | Very High | 70%+ | TBD | Vertical AI premium reference |
| Linear | Series B private | Mid | 80%+ | Profitable from start | Disciplined growth reference |
| **Zenet (hipótesis)** | Pre-seed | $75-180/sucursal | 50-65% | 3-5 años | Self-reference baseline |

### §10. Valuation framework hipótesis

- Pre-seed: ARR multiple · 20-50x at $300-500K ARR · = $6-25M valuation hipótesis
- Seed: 15-30x ARR · at $1-3M ARR · = $15-90M valuation hipótesis
- Series A: 10-20x ARR · at $3-10M ARR · = $30-200M valuation hipótesis
- Series B+: 8-15x ARR · varies con growth + margin
- Phase 5 LATAM expansion: USD-pricing premium captured

### §11. Investor pitch financial slides derivative

- Slide: TAM/SAM/SOM (cross-reference `Market Research/01-industry-and-market/03-tamano-de-mercado.md`)
- Slide: Revenue trajectory (3 escenarios)
- Slide: Unit economics (gross margin · CAC payback · LTV/CAC)
- Slide: Capital efficiency (Quick Ratio · Burn multiple)
- Slide: Pre-seed/seed use of funds
- Slide: Path to profitability + Series A timing

### §12. Decisiones que el modelo informa

- Pre-seed funding amount + timing
- Hiring plan timing per role
- Architecture investment priorities + timing
- Marketing/sales investment trajectory
- Geographic expansion timing (LATAM Phase 5)
- Enterprise tier productization investment

---

## Data inputs requeridos · gaps actuales

Para construir v0.1, necesitamos levantar esta data Mes 1-6 design partners:

### Inputs hard (data conductual)

| Input | Cuándo levantar | Cómo levantar |
|---|---|---|
| **MRR per cliente per tier** | Mes 1+ cada cliente | Subscription management system |
| **Cohort retention monthly** | Mes 2+ cada cohort | Product analytics + CS tracking |
| **Active users per sucursal** | Mes 1+ cada cliente | Product analytics (PostHog) |
| **Interactions/mes/sucursal** | Mes 1+ cada cliente | Langfuse + custom dashboards |
| **WhatsApp message volume** | Mes 1+ | WhatsApp Business API analytics |
| **CAC per channel** | Post 5+ closes per channel | Sales motion CRM + acquisition tracking |
| **Churn reasons captured** | Cada cancellation | Cancellation form (cf. doc 01 §5.1) |
| **Annual prepay take-rate** | Post pricing page launch | Subscription analytics |
| **Upgrade/downgrade rate per cohort** | Mes 3+ | Subscription management |
| **Heavy Usage Pack adoption rate** (Phase 1.5+) | Post Heavy Usage Pack launch | Add-on revenue tracking |
| **Specialty Agent Pack adoption rate** (Phase 2+) | Post Phase 2 launch | Add-on revenue tracking |

### Inputs soft (cualitativo + framework)

| Input | Source |
|---|---|
| **WTP qualitative bands** (Van Westendorp PSM) | `05-wtp-validation-plan.md` (pending) ejecutado con design partners |
| **Pricing elasticity signals** | PSM + cierre conversion rates per pricing test |
| **Comparable benchmarks updates** | Bessemer Cloud Index · ChartMogul reports · industry research |
| **Architecture mitigation impact actual** | Engineering measurements pre/post Capa 1-5 implementations |
| **Enterprise tier ACV signals** | Sub-segmento C outbound conversations |

---

## Methodology references útiles

### SaaS metrics canonical

- **David Skok / For Entrepreneurs blog** (forentrepreneurs.com) — LTV/CAC · payback · cohort retention · expansion revenue · NDR/NRR/GRR
- **Bessemer State of the Cloud reports** — vertical AI benchmarks · multiples · capital efficiency
- **OpenView Partners SaaS Benchmarks** — annual SaaS benchmarks by stage + segment
- **ChartMogul Quarterly Subscription benchmarks** — actual SaaS company performance data

### Vertical AI specific

- **Mary Meeker AI Trends Report (Bond Capital)** — anual update vertical AI category dynamics
- **Index Ventures · NEA · Lightspeed vertical AI thesis papers** — investor frameworks
- **a16z AI Index** — vertical AI category mapping + pricing power analysis

### MX-specific

- **CONAIN data** — restaurant industry MX baseline
- **INEGI BIE** — MX SMB digital adoption rates
- **CANIRAC reports** — restaurant industry MX specific
- **Latitud + ALLVP MX SaaS reports** — MX SaaS specific multiples + benchmarks

### Tools recommended para modeling

| Tool | Cuándo | Por qué |
|---|---|---|
| Google Sheets / Excel | Phase 1 pre-formal model | Founder-led iteration · low friction · accessible |
| **Causal** (causal.app) | Cuando construyas formal v0.1 | SaaS-specific · scenario analysis · investor-friendly outputs |
| **Pry / Finmark / Mosaic** | Post pre-seed close | Strategic finance platforms · integrations |
| Tableau / Looker | Phase 2+ | Visualization + dashboarding scale |

---

## Cross-references cuando v0.1 se construya

### Upstream dependencies (data inputs)

| Doc upstream | Qué input proporciona |
|---|---|
| `03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` v0.1+ | Pricing per tier · escenarios · sensitivity |
| `03-oferta-y-pricing/04-viabilidad-economica-y-cogs.md` (pending) | COGS breakdown Nivel 2 · margin floor |
| `03-oferta-y-pricing/05-wtp-validation-plan.md` (pending) | WTP validation results · pricing elasticity |
| `02-customer-research/06-objeciones-y-fricciones.md` v0.5 §4.0 | Churn assumptions · 4-stage decay model · Mes 6 cliff |
| `02-customer-research/05-buying-process.md` v0.7 §8.4 | Sales cycle timing · CAC implications |
| `01-industry-and-market/03-tamano-de-mercado.md` v1.0 | TAM/SAM/SOM data |
| `01-industry-and-market/07-geografia-y-expansion.md` v1.0 | Phase progression triggers · revenue trajectory |
| `02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 | Phase 2 specialty agents revenue stream |
| Production repo CLAUDE.md + architecture | Tech stack + COGS components |
| `05-capital-y-finanzas/01-operational-readiness-y-business-setup-phase-1.md` v0.1 | Operational overhead Phase 1 |
| `05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` (pending) | Capital structure · milestones · runway requirements |

### Downstream consumers (outputs feed into)

| Doc downstream | Cómo consume este model |
|---|---|
| `05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` (pending) | Pre-seed/seed/Series A sizing · timing decisions |
| `05-capital-y-finanzas/03-unit-economics-formal.md` (future) | Formal LTV/CAC · cohort analysis based on observed data |
| `05-capital-y-finanzas/04-cash-flow-y-budgeting.md` (future) | Operational cash flow management |
| `05-capital-y-finanzas/05-investor-relations-pipeline.md` (future) | Investor pitch · financial section · updates |
| Investor pitch deck (external) | Slides financial section derived |
| Board update template (external · post-seed) | Monthly metrics + variance vs model |

---

## Estado del scaffold

**Pre-draft v0.1 creado 2026-05-30** · scaffold structural reservado para future v0.1 construction cuando triggers se cumplan.

**Próxima evolución esperada:**

| Trigger | Acción |
|---|---|
| Mes 3-6 design partners + behavioral data + pricing PSM-validated | Mover de PRE-DRAFT a v0.1 construction · usar outline arriba |
| Pre-seed conversations activas (LOI investor) | Acelerar v0.1 construction · investor pitch derivative |
| 6+ meses cohort data + churn observed | v0.1 → v0.2 con cohort analysis real |
| 12+ meses data + Mes 6 cliff atravesado + CAC measured | v0.2 → v1.0 con unit economics formal |
| Pre-seed close → Series A prep | v1.0 → v2.0 con valuation framework refinado + capital efficiency metrics |

**Pendientes que esto desbloquea:**

1. `03-unit-economics-formal.md` v0.1 — basado en data observed + comparables refined
2. `04-cash-flow-y-budgeting.md` v0.1 — operational cash management
3. `05-investor-relations-pipeline.md` v0.1 — pre-seed pipeline development
4. `00-funding-roadmap-y-milestones.md` v0.1 — capital structure decisions formalized
5. Investor pitch deck financial slides (external · derivative)

---

## Notas para AI agent / future contributor

**Si llegas a este doc:**

1. **Verifica triggers** para v0.1 construction (sección arriba)
2. **Si triggers NO cumplidos:** NO construyas full model · responde "scaffold pre-draft · pending triggers · cf. README.md y operational readiness doc"
3. **Si triggers SÍ cumplidos:** procede con outline arriba · pero VERIFICA data inputs disponibles en upstream docs · NO inventes números
4. **Hipótesis labels religious:** todo número marcado `[Hipótesis sin validar]` · `[Anclado en research X]` · `[Estimación cualitativa]`
5. **NO Nivel 3 unit economics aquí** — eso va en `03-unit-economics-formal.md` cuando exista
6. **NO duplicate pricing analysis** — vive en `03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` · consume output here
7. **NO model multi-year sin behavioral data 6+ meses** — produces fiction · destroys credibility

---

*Última actualización: 2026-05-30 · scaffold pre-draft creado.*
