# 05-capital-y-finanzas · README del subfolder

> **Propósito:** subfolder de Product Strategy que cubre capital structure, funding roadmap, financial modeling, operational finance setup, y unit economics formal. Lives within Product Strategy department pre-PMF · planeado split a Finance department externo cuando triggers se activen (Series A · CFO hire · 10+ employees).

---

## Contexto · por qué este subfolder existe aquí (vs Finance department externo)

**Pre-PMF reality:** founder ES the finance person · capital decisions ARE strategic decisions · NO operational finance complexity todavía justifica departamento separado. Finance scope crece organically dentro de Product Strategy hasta que (a) Series A funding closes (b) CFO/Head of Finance se contrata (c) operational complexity multi-currency/multi-entity justifica split.

**Approach phased:**
- **Stage 1 (NOW · Phase 1 pre-PMF):** Finance lives aquí · 2 docs core + scaffolds para growth
- **Stage 2 (Series A trigger):** Split a `Finance/` department externo · migrate docs · expand 8 subfolders

**Razón de estructura:** mantener strategic decisions juntas Phase 1 · scaffolds permiten growth sin restructure prematuro · trigger explícito para split evita scope creep o premature departmentalize.

---

## Estado actual del subfolder

### Docs activos

| Doc | Status | Cubre |
|---|---|---|
| `README.md` (este) | ✓ active v0.1 | Scope · roadmap · triggers · external resources |
| `01-operational-readiness-y-business-setup-phase-1.md` | ✓ active v0.1 | Stack 7 identidades formales · PFAE→SAPI sequencing · Tier framework con LOI gate · vendor stack · 5 compliance anchors · cost summary |

### Tracking activo

| Archivo | Status | Cubre |
|---|---|---|
| `_tracking/zenet-costos-fase-0.xlsx` | ✓ activo v1.0 (2026-06-02) | Tracker de costos Fase 0 · 3 hojas (Catálogo de Costos 26 conceptos pre-poblados con Tier framework + Tipo fijo/variable/one-time · Tracking Mensual Jun 2026→May 2027 con fórmulas automáticas subtotales + NET BURN · Dashboard resumen 12m). Pre-poblado con costos canonical de `02-financial-model` inputs + doc 04 viabilidad económica (oferta-y-pricing) + `01-operational-readiness`. **Founder llena valores reales mes a mes** · baseline fijo Phase 0 ~$3,960 MXN/mes · activa Tier 2.0 (lawyer/contador/PAC) con LOI gate. Editable en Excel/Numbers/Google Sheets (sync iCloud). Feeds eventual `02-financial-model` v0.1 cuando triggers se cumplan. |

### Docs scaffolded (pre-draft · pending data/triggers para v0.1)

| Doc | Status | Trigger para v0.1 |
|---|---|---|
| `00-funding-roadmap-y-milestones.md` | Pending v0.1 | Pre-seed conversations activas O Phase 1 commercial GA decided |
| `02-financial-model-y-projections.md` | Pre-draft scaffold (`02-financial-model-y-projections.md`) | 3+ design partners con behavioral data Mes 3+ · cost actuals validan hipótesis |

### Docs roadmap futuro (cuando lleguemos)

| Doc | Trigger para creación |
|---|---|
| `03-unit-economics-formal.md` | 3+ cohorts Mes 6+ con churn observed · LTV/CAC defendible |
| `04-cash-flow-y-budgeting.md` | Post pre-seed close · operational finance scaling |
| `05-investor-relations-pipeline.md` | Pre-seed pipeline >5 conversations activas O Series A prep |
| `06-treasury-y-runway-management.md` | Post pre-seed · cash management formal needed |

---

## Cuándo split a Finance department externo (Stage 2 trigger)

Activate split cuando **cualquiera** de estos triggers se cumple:

| Trigger | Por qué |
|---|---|
| **Series A funding closes** ($2-5M+ USD) | Capital structure complexity justifies CFO function dedicated |
| **Full-time CFO ó Head of Finance hired** | Dedicated leadership requires dedicated workspace |
| **10+ employees** | Operational finance complexity (payroll multi-empleado · benefits · tax planning) justifies own discipline |
| **Multi-currency operations** (LATAM Phase 5) | Treasury + FX management = own competency |
| **M&A o strategic transactions on horizon** | Finance modeling becomes own competency |

**Cuando trigger se activa:**

1. Crear `Finance/` department externo (sibling de Product Strategy en root)
2. Migrate docs desde `05-capital-y-finanzas/` a `Finance/_context/01-capital-structure/` (ó equivalent)
3. Expand a estructura de departamento maduro (cf. abajo)
4. Update CLAUDE.md §3 status table · §5 project structure · §13 reference table
5. Update cross-references en docs que pointers a `05-capital-y-finanzas/`
6. Hire CFO/Head of Finance · their first task: own new workspace · build out
7. Archive `05-capital-y-finanzas/` subfolder con pointer redirect

**Future Finance department structure hipótesis (when split):**

```
Finance/                                         # New department post-Series A
├── _context/
│   ├── 01-financial-strategy/                  # Capital structure · long-term financial strategy
│   ├── 02-financial-modeling/                  # Models · projections · scenarios · sensitivity
│   ├── 03-unit-economics/                      # Cohort analysis · LTV · CAC · retention curves
│   ├── 04-operational-finance/                 # Accounting · payroll · AP/AR · controllership
│   ├── 05-treasury-y-cash-management/          # Cash · runway · FX · banking relationships
│   ├── 06-investor-relations/                  # IR · board management · investor updates
│   ├── 07-tax-y-compliance/                    # Tax planning · audit prep · multi-jurisdiction
│   └── 08-fp&a/                                # Budgeting · forecasting · variance analysis
├── _sop/                                        # Operational procedures (close monthly · investor update · audit prep)
├── _templates/                                  # Models · reports · presentations · investor updates
└── skills/                                      # Slash commands (e.g., /report-monthly-financials · /update-runway-model)
```

---

## External resources necesarios para construir financial model maduro

Esta sección documenta qué data/tools/expertise serán necesarios cuando construyamos `02-financial-model-y-projections.md` v0.1 y subsequent docs.

### Data inputs requeridos (gaps actuales · pendiente de levantar)

| Input | Cuándo disponible | Source |
|---|---|---|
| **Behavioral data design partners Mes 1-6** | Post primer design partner Day 30+ | Product analytics setup (PostHog · Langfuse · custom dashboards) |
| **Actual vendor invoices Mes 1-6** (Anthropic · WhatsApp · Supabase · etc.) | Post Tier 2.0 operational activation | Despacho contable + admin panel vendor portals |
| **Cohort retention observed Mes 6+** | 6+ meses post first design partner | Product analytics + CS data |
| **CAC observed** (sales motion costs medidos) | Post 5+ commercial closes | CRM + sales motion tracking |
| **Churn observed** | 12+ meses post first design partner | Subscription management system |
| **WTP validated** (Van Westendorp PSM design partners) | Mes 3+ post design partner cohort | `03-oferta-y-pricing/05-wtp-validation-plan.md` (pending) |
| **Pricing exact validated** | Post 3+ cierres reales | `03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` v0.2+ |
| **Heavy Usage Pack pricing actual** | Phase 1.5+ post observación outliers | Behavioral data + add-on revenue tracking |

### Tools recommended para financial modeling

| Tool | Para qué | Cuándo adoptar |
|---|---|---|
| **Causal** (causal.app) | SaaS financial modeling · scenario analysis · investor-friendly | Cuando construyas full model |
| **Google Sheets / Excel** | Quick iteration · founder-led modeling | Phase 1 pre-formal model |
| **Pry** ó **Finmark** | Cash flow + runway management | Post pre-seed close |
| **Pulley** ó **Carta** | Cap table management | Post pre-seed close |
| **Mosaic** | Strategic finance platform | Post Series A · operational complexity |
| **Custom dashboards** (Retool · Metabase) | Internal KPI tracking | Phase 1.5+ scale |

### Methodology references útiles

| Framework | Source | Relevancia Zenet |
|---|---|---|
| **SaaS metrics canonical** (David Skok · For Entrepreneurs blog) | forentrepreneurs.com | LTV/CAC · payback · NRR · GRR · Rule of 40 |
| **SaaS Quick Ratio** (Mamoon Hamid · Social Capital) | Capital efficiency tracking | Growth efficiency at scale |
| **CAC Payback Period methodology** | Bessemer Cloud Index reports | Sales motion ROI |
| **Cohort retention analysis** (Recurly / ProfitWell · ChartMogul) | Industry standard methodologies | Mes 6 cliff + LTV calculation |
| **Vertical AI economics** (Bessemer · Index Ventures recent reports) | Vertical-specific multiples + benchmarks | Comparable economics + valuation anchors |
| **Bottoms-up TAM/SAM/SOM** | Market Research subfolder 01-industry-and-market v1.0 §3 | Already documented · just integrate |

### External expertise recommended para hire/consult

| Role | Cuándo contratar/consultar | Scope |
|---|---|---|
| **Fractional CFO** (consultor) | Pre-Series A prep (~6-12 meses pre-round) | Financial model + investor pitch finance section + cap table management |
| **Tax advisor specialized SaaS MX** | Post primer cliente comercial | Multi-state tax (eventually multi-country) · CFDI complexity scaling · ISR efectivo |
| **Investor relations consultant** | Pre-Series A | Pipeline development · pitch refinement · diligence prep |
| **M&A advisor** | Series B+ (defer) | Strategic transaction support |
| **Auditor** (Big 4 or boutique) | Pre-IPO (defer significantly) | Audited financials prep |

### Vendor/service costs adicionales para mature financial operation

| Servicio | Cost hipótesis MXN/mes | Cuándo activar |
|---|---|---|
| **Carta cap table** | $0-$2K MXN | Post pre-seed close |
| **Pulley cap table** | $0-$1K MXN | Post pre-seed close (alternative Carta) |
| **Pry / Finmark / Causal** financial planning | $1K-3K MXN | Post pre-seed close |
| **QuickBooks Online MX** ó alternativa | $400-800 MXN | Si despacho contable migra a software-first |
| **Tax consulting hours** | $5K-15K MXN/mes (variable) | Post Series A |
| **Audit prep / annual** | $50K-200K MXN/año | Pre-IPO (defer) |

---

## Cross-references y dependencies

### Docs en este subfolder reciben pointers desde:

| Doc upstream | Cómo refiere a este subfolder |
|---|---|
| `Product Strategy/_context/03-oferta-y-pricing/00-marco-de-oferta-y-pricing.md` v1.0 §1.2 + §6.8 | "Defer modelo financiero a `05-capital-y-finanzas/`" |
| `Product Strategy/_context/03-oferta-y-pricing/01-modelo-comercial-y-terminos.md` v0.1 §7.4 | Pointer a operational readiness doc |
| `Product Strategy/_context/03-oferta-y-pricing/02-programa-socio-fundador-offer.md` v0.1 §9.5 | LOI gate trigger Tier 2.0 referenciado |
| `Product Strategy/_context/03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` v0.1 §1.2 + §11.5 | Funding roadmap pendiente cross-reference |
| `Product Strategy/_context/03-oferta-y-pricing/04-viabilidad-economica-y-cogs.md` (pending) | Upgrade Nivel 2 → Nivel 3 unit economics |
| `Product Strategy/_context/02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 | Phase 2 specialty agents add-on revenue model |
| `Product Strategy/_context/00-marco-y-metodologia/00-marco-product-strategy.md` v1.1 §2.1 | Subfolder scope dentro de Product Strategy department |

### Docs en este subfolder requieren input de:

| Doc upstream | Input requerido |
|---|---|
| Research backbone (`Market Research/_context/01-industry-and-market/03-tamano-de-mercado.md` v1.0) | TAM/SAM/SOM data para revenue projections |
| `03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` v0.1+ | Pricing per tier · escenarios · sensitivity bounds |
| `03-oferta-y-pricing/04-viabilidad-economica-y-cogs.md` (pending) | Cost breakdown completo · Nivel 2 sanity check |
| `02-customer-research/06-objeciones-y-fricciones.md` v0.5 §4.0 | 4-stage decay model · Mes 6 cliff · churn assumptions |
| `01-industry-and-market/07-geografia-y-expansion.md` v1.0 §16.5 | Phase progression triggers para revenue trajectory |
| Production repo CLAUDE.md + architecture | Tech stack + COGS components actuales |

---

## Convention de uso · para AI agents + contribuidores humanos

### Si eres founder (Alan) trabajando en este subfolder

1. **Operational readiness doc (`01-`)** es referencia operativa diaria — checklist de qué tienes/qué falta para Phase 1 launch
2. **Cuando construyas financial model** (`02-`): empezar con scaffold + data inputs disponibles · iterar en Google Sheets primero · migrate a Causal/Pry cuando complejidad lo justifica
3. **Funding roadmap (`00-`)** es source canonical para investor conversations · update post cada conversación pre-seed
4. **NO duplicar pricing analysis** que ya vive en `03-oferta-y-pricing/` · este subfolder consumes ese output · NO lo reinventa

### Si eres AI agent en este subfolder

1. **READ `01-operational-readiness-y-business-setup-phase-1.md` v0.1** primero — establece Phase 1 reality (PFAE · vendor stack · cost overhead)
2. **READ este README** para entender Stage 1 vs Stage 2 trigger framework
3. **Cross-reference upstream docs** según table arriba — NO inventes números
4. **Mark hipótesis vs anclado** religiosamente — pre-PMF financial modeling se vuelve ficción rápido sin disciplina labeling
5. **Defer Nivel 3 unit economics** a doc `03-unit-economics-formal.md` cuando exista — Nivel 2 sanity check vive en `03-oferta-y-pricing/04-viabilidad-economica.md`

### Si eres futuro CFO/Head of Finance

1. **READ todos los docs activos + scaffolds** para context
2. **Evaluate trigger split a Finance department** según matrix arriba
3. **Si trigger activado**: ejecuta migration procedure documented arriba
4. **Si trigger NO activado**: continuar growth dentro de este subfolder · add docs roadmap según triggers

### Si eres future contributor freelancer

1. **READ CLAUDE.md project root** primero para workspace orientation
2. **READ este README** para subfolder context
3. **READ doc específico** que vas a tocar
4. **Ask before creating** new docs · check si existing doc puede expanded vs new doc

---

## Estado del README

**v0.1 cerrado 2026-05-30** tras conversación estratégica sobre Finance department structure decision (Stage 1 phased approach within Product Strategy → Stage 2 split when triggers).

**Triggers para actualizar este README:**

- Cada doc nuevo creado en el subfolder · update sección "Estado actual"
- Cada trigger split activado · update sección "Cuándo split"
- Cada cross-reference añadida en docs upstream · update "Cross-references"
- Cada vendor/service nuevo identificado · update "External resources"
- Cuando triggers split activan → este README archivado · migrate context a nuevo Finance department README

---

*Última actualización: 2026-05-30.*
