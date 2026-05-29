---
name: Operational readiness y business setup Phase 1
description: Documenta el stack de identidades formales (PFAE · WhatsApp Business · Stripe · CFDI · LFPDPPP · Anthropic enterprise · IMPI) requerido operacionalmente para Phase 1 launch · decisión PFAE vs SAPI de CV con sequencing PFAE Phase 1 → SAPI pre-seed close · framework Tier 1 NOW · Tier 1.5 free preparations · Tier 2.0 paid commitments con LOI gate · Tier 3 defer · scope/cost/timing lawyer + despacho contable + vendor stack · 5 compliance anchors profundizados · cost summary Phase 1 escenarios optimista/realista/conservador · timeline hipótesis Q3 2026 launch · validation triggers + pivot signal 60 días post Tier 1.5. Sin este doc declarado y vigente, founder bootstrap Phase 1 opera sin claridad sobre operational prerequisites · arriesga delays catastróficos al primer design partner por long-lead items (WhatsApp Business · Stripe · lawyer templates) · subvalúa personal runway requirements Path A vs Path B.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-29
status: active
version: 0.1
owner: Alan Bahena
---

# Operational readiness y business setup Phase 1

> Documenta los **operational prerequisites** que Zenet debe satisfacer ANTES del primer design partner · stack de identidades formales (legal · fiscal · vendor · compliance) · sequencing PFAE Phase 1 → SAPI pre-seed close · framework Tier 1/1.5/2.0/3 con LOI gate para paid commitments · cost estimates · timeline hipótesis Q3 2026 launch.
>
> Sin este doc declarado y vigente, el founder bootstrap Phase 1 arriesga delays catastróficos al primer design partner por long-lead items (WhatsApp Business verification · Stripe approval · lawyer template prep) · subvalúa personal runway requirements · gasta cash prematuramente en setup que después necesita rework si pivot.

---

## Índice

1. Propósito · scope · boundaries
2. Stack de identidades formales · operational prerequisites
3. PFAE vs SAPI de CV — decisión Phase 1
4. Tier sequencing framework
5. Validation triggers · LOI gate para Tier 2.0
6. Lawyer engagement Phase 1
7. Despacho contable + PAC Phase 1
8. Vendor stack — Stripe · WhatsApp · Anthropic
9. Compliance anchoring · 5 anchors
10. Cost summary Phase 1 · escenarios
11. Timeline hipótesis
12. Decisiones abiertas + version triggers

---

## 1. Propósito · scope · boundaries

### 1.1 Qué responde este doc

- **¿Qué identidades formales y vendor relationships necesita Zenet PRE-Phase 1 launch?** — stack mínimo viable
- **¿En qué orden y timing se construyen?** — sequencing Tier 1/1.5/2.0/3
- **¿Cuánto cuesta operationalmente Phase 1 antes de primer cobro?** — cost estimates
- **¿Qué define cuándo comprometer cash significativo?** — validation triggers + LOI gate
- **¿Qué se difiere hasta pre-seed close u otro evento de capital?** — Tier 3 defer logic

### 1.2 Qué NO responde este doc

| Tipo de trabajo | Por qué NO aquí | Dónde vive |
|---|---|---|
| Funding roadmap + milestones + Path A solo bootstrap vs Path B pre-seed framework completo | Es decisión de capital structure · este doc es operations · capital structure se aborda en doc principal del subfolder | `05-capital-y-fundraising/00-funding-roadmap-y-milestones.md` (pendiente v0.1) |
| Pricing decisions · modelo comercial cliente-facing · MSA + Order Form structure | Cliente-facing decisions · este doc es internal founder operations | `Product Strategy/_context/03-oferta-y-pricing/` |
| Sales motion · outreach · primer design partner pitch | GTM execution downstream | `Product Strategy/_context/04-go-to-market/` |
| Cap table · founder equity vesting · investor terms | Capital structure decisions formalizadas | `05-capital-y-fundraising/00-funding-roadmap-y-milestones.md` cuando se redacte |
| Detallado spec técnico WhatsApp/Stripe/Anthropic integrations | Engineering implementation | Production repo `/02_Producto-y-Tech/Production-software/Zenet/` |

### 1.3 Cross-references críticas

| Doc | Relación |
|---|---|
| `03-oferta-y-pricing/01-modelo-comercial-y-terminos.md` §7.3 | Compliance anchoring · pointer a este doc para profundización operacional |
| `03-oferta-y-pricing/00-marco-de-oferta-y-pricing.md` §6.3 | Dos escenarios COGS · founder-bootstrap Phase 1 ↔ overhead documented aquí |
| `01-industry-and-market/08-entorno-regulatorio.md` v1.0.1 §10.1 | LFPDPPP 2025 + INAI → Secretaría Anticorrupción transition · anclaje regulatorio |
| `02-customer-research/05-buying-process.md` §10 | Buying committee · *"el contador autoriza"* · justifica CFDI compliance prioridad |
| Future `00-funding-roadmap-y-milestones.md` | Path A vs Path B framework · capital sequencing |

---

## 2. Stack de identidades formales · operational prerequisites

Siete items que Zenet debe satisfacer ANTES de primer design partner pagante. Sin este stack, Phase 1 NO arranca · NO es nice-to-have.

| # | Item | Por qué required | Identidad mínima requerida |
|---|---|---|---|
| 1 | **RFC + actividad empresarial** | Base fiscal para todo lo demás · CFDI emission · banco empresarial · Stripe · WhatsApp Business · contratos vendor | Persona Física Actividad Empresarial (PFAE) o Sociedad |
| 2 | **Cuenta bancaria empresarial** | Recibir cobros cliente · integrar Stripe/Conekta · separar finanzas · accounting hygiene | RFC + comprobante domicilio |
| 3 | **Stripe / Conekta merchant account** | Procesar cobros recurring · MX SMB payment methods · auto-CFDI integration | RFC + cuenta bancaria + business identity validation |
| 4 | **WhatsApp Business API verified** | Channel core del producto · sin esto NO hay agency-as-SaaS moat | Facebook Business Manager + RFC + domain matching + business address |
| 5 | **CFDI infrastructure via PAC** | Cliente contable EXIGE factura deducible · buying committee gate · sin CFDI NO closure | RFC + integración PAC (Facturama · Konfio · Solucion Factible) |
| 6 | **LFPDPPP 2025 compliance** | Aviso de Privacidad publicado · DPA con clientes · ARCO rights · evita sanciones INAI/Secretaría Anticorrupción hasta 320K UMA | DPO (Alan Phase 1 dual-role) + Privacy Policy + DPA template |
| 7 | **Anthropic enterprise terms** | Data privacy compliance · cliente data no se usa para training · LFPDPPP coherent | Business entity + billing address + use case approved |

**Stack secundario complementario:**

| Item | Phase 1 needed? |
|---|---|
| IMPI marca registrada "Zenet" | Recomendado · protege brand desde filing |
| Website + dominio empresarial | Required para credibility + Aviso de Privacidad hosting + business verification META |
| Insurance responsabilidad civil profesional | Defer Phase 2 |
| DPO formal externo | Defer post-seed · Alan dual-role Phase 1 |

---

## 3. PFAE vs SAPI de CV — decisión Phase 1

### 3.1 Las dos opciones

| Dimensión | **Persona Física Actividad Empresarial (PFAE)** | **SAPI de CV / SA de CV** |
|---|---|---|
| Qué es | Alan registrado en SAT como persona física con actividad empresarial | Zenet entidad legal independiente · constituida ante notario |
| Setup time | 1 día (cita SAT) | 2-4 semanas |
| Setup cost | $0-2K MXN | $15-30K MXN (notario · registro · capital) |
| Capital requirement | $0 | $50K MXN mínimo (puede ser parcialmente pagado) |
| Annual accounting cost | $5-15K MXN | $20-50K MXN |
| Puede emitir CFDI | ✓ Sí | ✓ Sí |
| Puede registrar WhatsApp Business | ✓ Sí | ✓ Sí |
| Puede recibir Stripe/Conekta | ✓ Sí | ✓ Sí |
| Liability | ❌ Personal (no corporate veil) | ✓ Corporate veil |
| Investor-ready | ❌ Pre-seed/seed require SAPI con cap table | ✓ Sí |
| Credibilidad enterprise | Aceptable Sub-segmento A · marginal B · NO Enterprise | ✓ Cross-segmento |

### 3.2 Decisión canónica Phase 1: PFAE → SAPI sequencing

**PFAE Phase 1 → SAPI pre-seed close** ⭐ `[Hipótesis sin validar]`

**Razones:**

1. **Capital efficiency pre-PMF:** $15-30K MXN setup SAPI sin investor commitment ni validation es burn injustificado
2. **PFAE alcanza Phase 1 cohort:** 3-5 design partners Sub-segmento B aceptan vendor PFAE (Mexican SMB norm)
3. **Setup speed:** 1 día vs 2-4 semanas · arranque inmediato
4. **Conversion natural:** pre-seed close trigger SAPI conversion + cap table + founder equity vesting · ese momento justifica costo
5. **Path A (solo bootstrap) preserved:** PFAE permite operar Phase 1 sin pre-seed mientras se validan unit economics

### 3.3 Trigger explícito para SAPI conversion

**Cualquiera de estos triggers activa SAPI conversion:**

- **Trigger A:** Pre-seed funding commitment (LOI ó term sheet de pre-seed investor)
- **Trigger B:** Primer cliente commercial NO design partner que requiera "venta a corporación" (Sub-segmento C o Enterprise inbound)
- **Trigger C:** 10+ design partners + commercial clientes activos · scale justifica corporate veil
- **Trigger D:** Legal liability event que evidencia exposure personal demasiado alta para PFAE

### 3.4 Trade-off honesto

| Riesgo | PFAE Phase 1 | SAPI Phase 1 |
|---|---|---|
| **Liability personal** | Real · si cliente demanda · bienes personales Alan exposed | Mitigado por corporate veil |
| **Cash burn pre-PMF** | Bajo · $0-2K setup | Alto · $15-30K setup + capital |
| **Investor readiness** | Bajo · conversion required pre-seed | Alto · ya listo |
| **Commercial credibility** | Aceptable Sub-segmento A/B · weak Enterprise | Strong cross-segmento |
| **Compliance simplicity** | Despacho contable más simple | Más obligaciones reporting |

**Lectura honesta:** liability personal es el riesgo no-trivial de PFAE Phase 1. Mitigated por (a) selección cuidadosa primeros design partners (Sub-segmento B conocidos) (b) MSA con limitation of liability strong (c) Insurance Phase 2+ (d) conversion SAPI pre-seed close NO se difiere indefinidamente.

---

## 4. Tier sequencing framework

Framework de 4 tiers que prioriza acciones operacionales según urgencia + cash commitment.

### 4.1 Tier 1 — NOW (próximos 30 días) · ~$8K MXN

**Razón:** baratos · rápidos · desbloquean todo lo demás · O lead time largo no acortable.

| Item | Tiempo | Costo MXN | Lead time approval |
|---|---|---|---|
| **PFAE setup en SAT** | 1 día (cita SAT) | $0 | Inmediato post-cita |
| **Cuenta bancaria empresarial** | 1 semana | $0 | 1-2 semanas activation |
| **Dominio + email empresarial** (zenet.mx + Google Workspace) | 1 hora setup | $300-500/año + $120/mes Workspace | Inmediato |
| **IMPI marca registrada "Zenet"** | 2 horas filing (DIY o lawyer-guided) | $3-5K MXN | **4-6 meses approval** · protección desde filing |
| **Website básico** (landing + Aviso de Privacidad draft) | 2-3 semanas DIY (Webflow/Carrd/Framer) | $0-3K MXN | Inmediato post-build |

**Total Tier 1: ~$5-10K MXN + 2-3 semanas effort distribuido**

### 4.2 Tier 1.5 — Free preparations (2-3 meses pre-design-partner) · ~$0 cash

**Razón:** applications con lead time medio pero SIN cash commitment · submit ahora · approval queda esperando · evita ser bottleneck cuando validación llegue.

| Item | Lead time | Costo upfront | Por qué arrancar pre-validación |
|---|---|---|---|
| **Stripe / Conekta application** | 2-4 sem approval | $0 | Aplicación gratis · approved account waiting · activa solo cuando primer cobro |
| **WhatsApp Business Manager + verification submission** | 2-6 sem META review | $0 setup | **Lead time MÁS largo · risk de delay al primer design partner** si esperas validación primero |
| **Anthropic enterprise terms application** | 2-4 sem Anthropic review | $0 setup | Compliance + data privacy requirement · free to apply |
| **Identificar 2-3 lawyer candidates** (initial conversations · NO engagement) | 1-2 sem networking | $0 (intros gratis) | Cuando validación llegue · ya sabes a quién contratar · engagement 1 sem en lugar de 4 |
| **Identificar 2-3 despachos contables** (cotizaciones · NO contratación) | 1 sem networking | $0 | Same logic · approve pricing + reputation antes de commitment |
| **PAC vendor selection research** (Facturama vs Konfio vs Solucion Factible) | 2-3 hrs research | $0 | Decision tree listo |
| **Privacy Policy draft + Aviso de Privacidad framework** (templates open-source + draft propio) | 1 día | $0 | Borrador funcional que lawyer review/refine después · reduces lawyer hours billed |

**Total Tier 1.5: ~$0 cash + ~2-3 semanas effort distribuido**

**Downside near-zero · upside 4-6 semanas tiempo ahorrado cuando validación llegue.**

### 4.3 Tier 2.0 — Paid commitments (post-LOI trigger) · ~$30-50K MXN

**Razón:** cash burn significativo · NO arrancar hasta tener evidencia conductual de design partner inminente.

| Item | Trigger de activación | Costo MXN |
|---|---|---|
| **Lawyer engagement formal** (MSA + DPA + Aviso de Privacidad final + IMPI guidance + Anthropic review) | LOI signed de 1 design partner + 1-2 más en advanced discovery | $25-40K one-time |
| **Despacho contable monthly engagement** | Primer cobro date confirmado (4 sem antes) | $5-10K/mes starting |
| **PAC subscription activation** | Mismo trigger (primer cobro confirmado) | $300-500/mes |

**Total Tier 2.0: ~$25-40K MXN one-time + ~$5-10K/mes ongoing**

### 4.4 Tier 3 — Defer hasta post-PMF / capital event

| Item | Cuándo | Por qué defer |
|---|---|---|
| **SAPI de CV conversion** | Pre-seed close · O 10+ commercial clientes | Setup $15-30K + capital $50K no justifica sin investor money o commercial validation |
| **Insurance responsabilidad civil profesional** | Phase 2 · 10+ clientes | Bajo risk Phase 1 cohort selectivo |
| **DPO formal externo** | Post-seed | Alan dual-role suficiente Phase 1 |
| **Asesor fiscal estratégico** | Pre-seed close | Despacho cubre Phase 1 |
| **Full-time CFO / GC** | Series A | Overkill Phase 1-1.5 |

---

## 5. Validation triggers · LOI gate para Tier 2.0

### 5.1 El gate decisional es LOI · NO calendar date

**Tier 2.0 paid commitments ($30-50K MXN) NO arrancan por calendar trigger · arrancan por LOI evidence trigger.**

| Nivel evidencia | Acción habilitada |
|---|---|
| Solo discovery interviews | Sigue solo Tier 1.5 |
| 1-2 operadores muestran interés verbal serio | Considerar lawyer outreach · NO engagement formal |
| **LOI verbal ó written de 1 design partner committed** + 2 más en pipeline avanzado | **✓ Arrancar Tier 2.0 lawyer engagement** |
| **Design partner agreement / term sheet signed** | Arrancar despacho contable + PAC integration |
| First cobro date confirmado contractualmente | Activar PAC subscription · primer CFDI ready |

### 5.2 Pivot signal · 60 días post-Tier 1.5 sin LOI

**Disciplina anti-burn:** si en 60 días post-completion de Tier 1.5 NO hay 1 LOI committed:

- ❌ NO arrancar Tier 2.0 lawyer · NO arrancar despacho
- ✅ HOLD operations · re-evaluar product/positioning/ICP hypothesis
- ✅ Posible pivot signal · señales de category mismatch o segment misfit
- ✅ Posible delay Phase 1 ship target Q4 2026 / Q1 2027
- ✅ Posible reframe basado en discovery learnings

**Razón:** Tier 2.0 burn $30-50K MXN sin LOI = ficción anclada · setup que después necesita rework si pivot · destruye runway sin generar learning.

### 5.3 Qué cuenta como "LOI signed" en Phase 1

`[Hipótesis sin validar]` — definición operativa pre-PMF:

| Tipo | Cuenta como LOI? |
|---|---|
| Interés verbal en discovery interview ("interesante · cuando esté listo") | ❌ NO · es discovery signal · NO trigger |
| Email confirmación "quiero ser design partner cuando launch" | ⚠️ Soft signal · NO trigger Tier 2.0 |
| Letter of Intent firmado (formato simple · 1 página · intent to engage post-launch · NO contractual obligation) | ✓ SÍ · trigger Tier 2.0 lawyer |
| Design partner agreement signed (formal · MSA + Order Form pendiente legal review) | ✓ SÍ · trigger Tier 2.0 despacho + PAC |
| First payment processed | ✓ SÍ · ongoing operations active |

**LOI template hipótesis Phase 1** (a refinar con lawyer):

```
Carta de Intención de Participación · Programa Socio Fundador Zenet

[Operator name + business] expresa intención de participar como Socio Fundador 
en el programa de Phase 0 de Zenet (cohort 3-5 design partners), sujeto a:

1. Phase 1 product launch (target Q3 2026)
2. MSA + Order Form a firmar pre-onboarding
3. Términos económicos por confirmar (descuento Socio Fundador hipótesis 20-30%)
4. Reciprocidad esperada: feedback estructurado · case study rights · referrals

Esta carta NO constituye obligación contractual · es intent to engage 
si términos resultan mutuamente aceptables.

Fecha · firma · cargo
```

---

## 6. Lawyer engagement Phase 1

### 6.1 Scope · qué cubre

| Tarea | Necesita abogado? | Costo hipótesis MXN |
|---|---|---|
| **MSA template** (governing law · IP · termination · liability · indemnification) | ✓ Sí · MX SaaS-specialized | $15-25K one-time |
| **Aviso de Privacidad + DPA** (LFPDPPP 2025 compliant) | ✓ Sí · privacy-specialized | $8-15K one-time |
| **Order Form template + click-wrap legal validation** | ✓ Sí (incluido con MSA) | Incluido arriba |
| **IMPI trademark filing guidance** | Opcional (Alan puede solo) | $3-5K si lawyer-guided |
| **Anthropic enterprise terms review** | Recomendado · 1-2 hrs | $2-3K |
| **PFAE → SAPI conversion** (cuando pre-seed close) | ✓ Sí + notario | $15-30K (defer Tier 3) |
| **Vendor terms standard** (Stripe · WhatsApp · Supabase click-through) | NO · standard terms | $0 |

### 6.2 Modelo recomendado Phase 1

- **One-time engagement formal** ($25-40K MXN total) para templates + reviews
- **On-call retainer ligero** (~$3-5K MXN/consulta · estimado 2-3 consultas Phase 1)
- **NO full-time GC · NO retainer mensual fijo**

**Total Phase 1 legal estimado:** ~$30-50K MXN one-time + ~$10-15K MXN ongoing annual

### 6.3 Sourcing · cómo encontrar lawyer adecuado

Networks útiles:

| Network | Tipo de lawyer disponible |
|---|---|
| Egade / Tec / ITAM alumni | SaaS / startups MX-specialized |
| CANIRAC TJ (industry network) | Restaurant industry vertical · útil para clauses específicas |
| BC startup community | Startup-stage friendly |
| Lextrato · LegalAccount · OnTrust (plataformas) | Curated · price-transparent |
| Referencias de otros founders MX SaaS | Highest quality signal |
| Friends-of-friends abogados | Variable quality · risk |

**Criterios de selección Phase 1:**

- MX SaaS experience (>5 deals SaaS estructurados)
- LFPDPPP fluency (privacy compliance work)
- Click-wrap + e-signature legal validation experience
- Flat-fee transparency (NO hourly billing sorpresa)
- Bilingual (English + Spanish) para vendor reviews internacionales
- Disponibilidad on-call para questions Phase 1

### 6.4 Anti-patterns explícitos

- ❌ Friend lawyer favor pricing (calidad risk · slow turnaround · awkward escalation)
- ❌ Generic corporate lawyer sin SaaS experience (templates inadequate)
- ❌ Hourly billing sin cap (cost explosion risk)
- ❌ Foreign lawyer (US/EU) sin MX co-counsel (compliance gaps MX-specific)
- ❌ DIY templates Phase 1 commercial (enforcement + liability risk too high)

---

## 7. Despacho contable + PAC Phase 1

### 7.1 Scope · qué cubre despacho

| Tarea | Frecuencia | Despacho hace? |
|---|---|---|
| **SAT registration setup** (RFC actividad empresarial) | One-time | Alan con guía despacho |
| **PAC vendor selection + integration** | One-time | Despacho recomienda · Alan integra técnico |
| **Monthly CFDI generation cliente** | Mensual | Auto via Stripe + PAC · despacho valida |
| **Monthly CFDI receipt + categorización vendors** | Mensual | ✓ Despacho |
| **DIOT mensual** | Mensual | ✓ Despacho |
| **Declaraciones mensuales IVA + ISR** | Mensual | ✓ Despacho |
| **Annual declaration** | Anual | ✓ Despacho |
| **Bookkeeping + reconciliation** | Mensual | ✓ Despacho · Alan revisa |
| **Payroll (Alan honorarios o PFAE distributions)** | Mensual | ✓ Despacho |
| **CFO / asesoría fiscal estratégica** | Pre-seed close | NO Phase 1 · defer Tier 3 |

### 7.2 Modelo recomendado Phase 1

- **Despacho contable mensual** (~$5-10K MXN/mes SMB-focused)
- **PAC subscription** (Facturama · Konfio · ~$300-500 MXN/mes activation)
- **Bookkeeping software ligero** (Konfio app · CONTPAQi free tier · Aspel SAE básico)

**Total Phase 1 accounting estimado:** ~$60-130K MXN annual ongoing

### 7.3 Sourcing despacho contable

Networks útiles:

| Network | Tipo de despacho |
|---|---|
| Referencias de operadores restauranteros TJ (cliente Carlos Mendoza type) | Familiar con vertical · útil para industry-specific issues |
| BC startup community | Startup-friendly · familiar con SaaS billing |
| CANIRAC TJ ecosystem | Restaurant industry-fluent |
| Plataformas (Konfio · Bancompara) | Software-first · price-transparent |
| Despachos PyME locales TJ | Capital efficiency · accessibility |

**Criterios de selección Phase 1:**

- SMB / startup experience (NO solo grandes corporaciones)
- PAC integration experience (Facturama · similar)
- Stripe / Conekta CFDI integration workflow conocido
- Flat-fee mensual transparency (NO hourly sorpresa)
- Communication speed (response <48h)
- Onboarding time razonable (<2 sem para empezar operar)

### 7.4 PAC selection · 3 candidatos hipótesis

| PAC | Pricing | Pros | Contras |
|---|---|---|---|
| **Facturama** | ~$300/mes plan básico | API robusta · Stripe integration · dashboard SaaS-friendly | Premium pricing |
| **Konfio CFDI** | ~$200-400/mes | Ecosystem integrado (banking + accounting + CFDI) · MX SMB design | Locked-in ecosystem |
| **Solucion Factible** | Variable per-timbre o suscripción | Económico per-volume bajo | Less SaaS-friendly · más manual |

**Decisión PAC se cierra durante Tier 1.5 research · activation en Tier 2.0.**

---

## 8. Vendor stack — Stripe · WhatsApp · Anthropic

### 8.1 Stripe / Conekta merchant account

**Aplicar durante Tier 1.5 (free)**

| Requisito | Cumplimiento Phase 1 |
|---|---|
| RFC actividad empresarial | ✓ PFAE Tier 1 |
| Cuenta bancaria empresarial | ✓ Tier 1 |
| Business identity (website + privacy policy) | ✓ Tier 1 |
| Use case description | Restaurant SaaS subscription |
| Expected volume | $1,500-9,000 MXN/cliente/mes hipótesis |
| Compliance documents | RFC · constancia situación fiscal · ID Alan |

**Lead time:** 2-4 semanas approval Stripe · 1-2 semanas Conekta typically faster

**Decisión Stripe vs Conekta:**

| Dimensión | Stripe | Conekta |
|---|---|---|
| MX SMB methods | Card · Oxxo · SPEI · debit | Card · Oxxo · SPEI · debit · BBVA Wallet |
| Pricing | 3.6% + $3 MXN/transacción | 2.9% + $2.50 MXN/transacción typical |
| Documentation | English-first · global standards | Spanish-first · MX-focused |
| Integration | World-class APIs · Stripe Apps ecosystem | MX-native · simpler for SMB |
| CFDI integration | Via PAC partner | Built-in some plans |

**Hipótesis Phase 1:** Conekta primary (MX SMB-friendly · CFDI integration · pricing) · Stripe backup si Conekta rejection o use case fit issues.

### 8.2 WhatsApp Business API

**Aplicar durante Tier 1.5 (free)** — **LEAD TIME MÁS LARGO · prioridad submission early**

| Paso | Tiempo | Acción |
|---|---|---|
| 1 | 1 día | Facebook Business Manager account setup (gratis) |
| 2 | 1 día | WhatsApp Business Account dentro de Business Manager |
| 3 | **2-4 semanas** | **Business verification submission** — META requiere business legal name · address · website · documents (constancia SAT · comprobante domicilio) |
| 4 | 1 semana | Phone number dedicado activation (puede ser número virtual · NO celular personal Alan) |
| 5 | 1 semana | Display name approval ("Zenet" · approved by META) |
| 6 | 1-2 semanas | Template messages submission (alertas · onboarding · billing) |

**Total lead time realista:** **6-12 semanas Tier 1.5 → operational** (con possible rejection iterations)

**Risk de NO arrancar Tier 1.5 temprano:** primer design partner ready Day 1 + WhatsApp Business no verified = catastrophic operational delay · destruye onboarding experience · design partner can walk.

### 8.3 Anthropic enterprise terms

**Aplicar durante Tier 1.5 (free)**

| Requisito | Cumplimiento Phase 1 |
|---|---|
| Business entity | PFAE OK · SAPI cleaner |
| Billing address | RFC domicilio |
| Use case approval | Restaurant operations + business analytics (standard commercial) |
| Data handling commitment | Cliente data NO se usa para training (enterprise terms guarantee) |
| Rate limiting + quota | Internal caps per tier (cf. `03-oferta-y-pricing/00-marco.md` §6.5) |

**Lead time:** 2-4 semanas Anthropic review

**Cost:** $0 setup · API usage costs ongoing (variable con usage · cf. doc 04 `viabilidad-economica` cuando se redacte)

---

## 9. Compliance anchoring · 5 anchors

Referencia rápida · profundización vive en `03-oferta-y-pricing/01-modelo-comercial-y-terminos.md` §7.3 cuando se redacte.

### 9.1 MX governing law + jurisdiction

- Contrato declara leyes mexicanas · jurisdicción tribunales MX (Tijuana hipótesis)
- Match con MX SMB expectation · NO Delaware court
- Habilita tribunales mercantiles MX
- Required dado domicilio PFAE/SAPI MX

### 9.2 LFPDPPP 2025 compliance

- Zenet = **encargado del tratamiento** · cliente = **responsable**
- Aviso de Privacidad publicado en website (Tier 1)
- DPA template (Tier 2.0 lawyer)
- ARCO rights handling workflow (Phase 1.5+)
- INAI dissolution 2025 → Secretaría Anticorrupción enforces (cf. `01-industry-and-market/08-entorno-regulatorio.md` v1.0.1 §10.1)
- Multas hasta 320K UMA (~$30M MXN máx)
- Sub-procesadores documented: Anthropic · WhatsApp/META · Supabase · Stripe/Conekta

### 9.3 CFDI billing 4.0

- RFC validation cliente required durante onboarding · sin RFC = NO cierre
- CFDI auto-generated post primer cargo Day 8 via PAC integration
- Forma de pago codes (04 · 28 · 03 dependiendo método)
- Método de pago "PUE" (single payment) o "PPD" (annual prepay parcialidades)
- Envío automático XML + PDF · 30 días post-cobro disponible

### 9.4 WhatsApp Business API compliance

- 24-hour customer service window (free cliente-initiated · paid templates business-initiated)
- Opt-in explícito cliente durante onboarding
- Message categories correctos (utility · authentication · marketing)
- Business verification + green check
- Template approval per META process
- NO spam · NO unsolicited marketing (match Zenet voice "sin hype")

### 9.5 Anthropic AUP

- Use case approved (restaurant operations / business analytics)
- NO prohibited uses (none relevant)
- Output disclosure (cliente notified AI-generated)
- Data handling (cliente data NO training)
- Rate limiting + quota internal

---

## 10. Cost summary Phase 1 · escenarios

### 10.1 Baseline (sin optimizaciones)

| Categoría | One-time setup | Annual ongoing |
|---|---|---|
| Lawyer (MSA + DPA + IMPI + reviews) | $30-50K MXN | $10-15K MXN |
| Contador / despacho mensual | — | $60-130K MXN |
| PAC | — | $3-6K MXN |
| Business setup (PFAE + bank + Stripe + WhatsApp) | $8-15K MXN | — |
| Marca registrada IMPI | $3-5K MXN | — |
| **TOTAL** | **~$41-70K MXN setup** | **~$73-151K MXN/año** |

**Year 1 total baseline:** **~$120-220K MXN**

### 10.2 Optimizado (con optimizaciones recomendadas)

| Optimization | Impacto |
|---|---|
| Despacho contable básico SMB ($5K/mes vs $10K) | -$60K/año |
| One-time lawyer package vs retainer ($25K vs $120K) | -$95K/año |
| DIY bookkeeping fintech + despacho monthly review | -$20K/año |
| Defer SAPI hasta pre-seed (PFAE Phase 1) | -$15-30K setup |
| PAC más barato (Facturama básico $200/mes) | -$3-6K/año |
| IMPI trademark DIY con lawyer guidance ligera | -$5K |

**Year 1 optimizado:** **~$80-120K MXN**

### 10.3 Escenarios trigger-gated (realistic spend curve)

**Escenario A: Tier 1 only (validación NO se materializa)**

- Tier 1 NOW: ~$8K MXN
- Tier 1.5 free preps: ~$0
- Tier 2.0: ❌ NO trigger
- Tier 3: ❌ Defer
- **Total burn: ~$8K MXN · ~$0/mes ongoing**

**Escenario B: Validation hits (LOI Mes 3-4)**

- Tier 1: ~$8K MXN
- Tier 1.5: ~$0
- Tier 2.0 lawyer: ~$30K one-time
- Tier 2.0 despacho + PAC: ~$5-10K/mes starting Mes 4
- **Total Year 1: ~$70-120K MXN**

**Escenario C: Aggressive scaling (pre-seed close Mes 6)**

- Tier 1: ~$8K
- Tier 1.5: ~$0
- Tier 2.0: ~$50K + ongoing
- Tier 3 SAPI conversion: ~$30K one-time
- Additional advisory · fractional CS: ~$30-50K
- **Total Year 1: ~$150-250K MXN**

### 10.4 Implicación para Path A vs Path B

| Path | Personal runway requirement Year 1 |
|---|---|
| **Path A (solo bootstrap)** | $300-500K MXN (operational overhead Escenario B + founder living costs + buffer) |
| **Path B (pre-seed bridge $200-500K USD)** | Pre-seed cubre operational + small fractional team · founder no necesita personal runway pesado |

**Lectura honesta:** Path A requires personal financial buffer significativo · NO subestimar. Path B reduces personal burden pero require pre-seed effort 2-3 meses founder time.

---

## 11. Timeline hipótesis

### 11.1 Sequencing por mes (Phase 1 launch target Q3 2026)

| Mes | Acciones · cash | Estado validación |
|---|---|---|
| **Junio 2026 (T-3)** | Tier 1 completo (PFAE · bank · domain · IMPI · website draft) · ~$8K MXN | Discovery interviews active · primeros prospects identified |
| **Julio 2026 (T-2)** | Tier 1.5 free preparations (Stripe · WhatsApp · Anthropic applications · lawyer/despacho identification · PAC research) · ~$0 cash + effort | Discovery deep · primer outreach design partner |
| **Agosto 2026 (T-1)** | Stripe approved · WhatsApp pending or approved · Anthropic enterprise approved · lawyer/despacho seleccionados sin engagement · LOI conversations active | 1-2 LOIs in pipeline ideally |
| **Septiembre 2026 (T-0 Phase 1 launch)** | **Trigger LOI event** → Tier 2.0 lawyer engagement starts · MSA + DPA drafting 4 semanas | First design partner signature target |
| **Octubre 2026** | MSA + DPA finalized · despacho contable engaged · PAC integration · primer design partner onboarding kickoff Day 1 | First design partner active |
| **Noviembre-Diciembre 2026** | Operational stack 100% live · 2do-3er design partner onboarding · Mes 1 high-touch CS | 3+ design partners active |

### 11.2 Trigger checkpoints

| Checkpoint | Si SÍ | Si NO |
|---|---|---|
| **Tier 1 complete (Junio 2026)** | Proceder a Tier 1.5 Julio | Investigate blockers · resolve before continuing |
| **Tier 1.5 complete (Agosto 2026)** | Standby para LOI trigger | Investigate vendor approval delays |
| **LOI signed (Sept 2026 hipótesis)** | Trigger Tier 2.0 immediately | Continue discovery · HOLD Tier 2.0 |
| **60 días post-Tier 1.5 sin LOI** | — | **PIVOT signal · re-evaluar product/positioning/ICP** |
| **Primer design partner active (Oct-Nov 2026)** | Continue cohort building · monitor Mes 6 cliff | Investigate onboarding issues · retain CS attention |

### 11.3 Slip scenarios

| Scenario | Trigger | Acción |
|---|---|---|
| **Phase 1 product NOT ready Q3 2026** | Engineering delay · F1-F6 capabilities incomplete | Delay Tier 2.0 commitment · maintain Tier 1.5 · re-target Q4 2026 |
| **WhatsApp Business rejected** | META review fails | Iterate submission · Tier 2.0 holds until verified · maximum 8 sem delay |
| **Stripe / Conekta rejected** | Approval issue | Try alternative · escalate · NO Tier 2.0 hasta payment processing live |
| **First LOI delays beyond Octubre 2026** | Discovery slower than expected | Continue Tier 1.5 standby · HOLD Tier 2.0 · re-evaluate ICP/messaging |

---

## 12. Decisiones abiertas + version triggers

### 12.1 Decisiones abiertas Phase 1

| # | Decisión | Hipótesis Phase 1 | Trigger de cierre |
|---|---|---|---|
| 1 | **PFAE setup specifics** (régimen fiscal exacto · domicilio) | Régimen Personas Físicas con Actividades Empresariales · domicilio Tijuana | Cita SAT Junio 2026 |
| 2 | **Stripe vs Conekta primary** | Conekta primary · Stripe backup | Application Tier 1.5 · approval determine |
| 3 | **PAC vendor selection** | Facturama hipótesis | Tier 1.5 research + despacho recommendation |
| 4 | **Lawyer selection** | TBD · 2-3 candidates Tier 1.5 | LOI trigger Tier 2.0 |
| 5 | **Despacho contable selection** | TBD · 2-3 candidates Tier 1.5 | Primer cobro confirmado Tier 2.0 |
| 6 | **LOI template formal** | Hipótesis arriba §5.3 | Lawyer engagement Tier 2.0 refine |
| 7 | **PFAE → SAPI conversion timing exacto** | Pre-seed close O 10+ commercial clientes | Capital event O commercial scale trigger |
| 8 | **Insurance Phase 2 carrier + coverage** | TBD · defer | Phase 2 planning |

### 12.2 Version triggers

| Transición | Trigger |
|---|---|
| v0.1 → v0.2 | Tier 1 completed · Tier 1.5 50% done · WhatsApp + Stripe applications submitted |
| v0.2 → v0.3 | First LOI signed · Tier 2.0 lawyer engaged |
| v0.3 → v1.0 | First design partner operational · operational stack 100% live · cost actuals validate hipótesis |
| v1.0 → v2.0 | SAPI conversion event · Phase 2 launch · operational stack overhaul |

### 12.3 Pendientes inmediatos

1. **Junio 2026:** ejecutar Tier 1 completo
2. **Documentar updates a este doc** post-each-checkpoint (Tier 1 done · Tier 1.5 done · LOI signed · etc.)
3. **Cross-reference creation:** cuando `03-oferta-y-pricing/01-modelo-comercial-y-terminos.md` v0.1 cierre, actualizar §1.3 cross-references pointer
4. **Cross-reference creation:** cuando `00-funding-roadmap-y-milestones.md` v0.1 cierre, actualizar §1.3 cross-references + §3 PFAE→SAPI timing alineado con Path A vs Path B framework

---

## Notas finales

Este doc cierra v0.1 con framework completo de operational readiness Phase 1 tras conversación foundational 2026-05-29.

**Para Alan (founder operativo):**

- **Acción inmediata recomendada próximas 4 semanas:** Tier 1 completo (~$8K MXN) — empezar con cita SAT esta o próxima semana
- **Long-lead bottleneck a NO descuidar:** WhatsApp Business verification submission durante Tier 1.5 (Julio 2026) — 6-12 sem lead time realista
- **Disciplina anti-burn:** Tier 2.0 cash ($30-50K) NO hasta 1 LOI signed · 60 días post-Tier 1.5 sin LOI = HOLD + re-evaluar

**Triggers de actualización a flagear:**

- Cada checkpoint de timeline §11.2
- Cada decisión abierta cerrada en §12.1
- Cada slip scenario en §11.3 que se materialice

**Cross-references pendientes (cuando docs target existan):**

- `03-oferta-y-pricing/01-modelo-comercial-y-terminos.md` §7.3
- `05-capital-y-fundraising/00-funding-roadmap-y-milestones.md`

---

*Última actualización: 2026-05-29.*
