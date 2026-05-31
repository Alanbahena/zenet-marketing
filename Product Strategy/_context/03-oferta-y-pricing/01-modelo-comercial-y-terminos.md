---
name: Modelo comercial y términos
description: Documenta la estructura comercial cliente-facing de Zenet Phase 1 · cómo se compra, qué se firma, qué se cobra, cómo se cancela. Define modelo canónico pure subscription (NO setup fee · NO project pricing · NO Mantenimiento) · 5 razones canónicas · términos de compromiso (90-day minimum + annual prepay) · términos de inicio (ventana de cancelación 7 días + primer cargo Day 8 con agency trabajando desde Day 1 cleanup + estandarización · NO fase gratuita framing) · self-serve in-app cancellation (Owner role · admin panel) · 9 anti-positions con razón estructural · estructura contractual virtual diferenciada (click-wrap Esencial-Pro-Multi · e-signature Enterprise) · 5 compliance anchors (governing law MX · LFPDPPP · CFDI · WhatsApp · Anthropic) con pointer a operational readiness doc. Hereda 10 decisiones canónicas de marco doc 00. Validation pending design partners.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-29
status: active
version: 0.1
owner: Alan Bahena
---

# Modelo comercial y términos

> Documenta la estructura comercial cliente-facing de Zenet Phase 1 — cómo se compra, qué se firma, qué se cobra, cómo se cancela. Hereda 10 decisiones canónicas del marco doc 00 sin relitigar · profundiza mecánica operacional · referencia compliance anchoring + operational readiness en docs adyacentes.
>
> Audiencia: sales motion (cómo cobrar + qué incluir) · prospects (durante negociación · términos transparentes) · contractual reference interno · legal review pre-launch · founder strategic clarity.

---

## Índice

1. Propósito del doc · scope
2. Modelo canónico: pure subscription
3. Términos de compromiso (90-day minimum + annual prepay)
4. Términos de inicio (ventana de cancelación + activación de suscripción)
5. Términos de cancelación, refund y escalation
6. Anti-positions: lo que NO hacemos
7. Estructura contractual + compliance anchoring
8. Estado del doc + version triggers

---

## 1. Propósito del doc · scope

### 1.1 Qué responde este doc

Cuatro preguntas operativas cliente-facing:

- **¿Cómo se compra Zenet?** — onboarding flow · firma de contrato · payment method capture
- **¿Qué se firma?** — MSA + Order Form · click-wrap vs e-signature por tier
- **¿Qué se cobra y cuándo?** — modelo subscription · términos de compromiso · términos de inicio
- **¿Cómo se cancela?** — self-serve in-app · refund cases · escalation paths

### 1.2 Qué NO responde este doc

| Tipo de trabajo | Por qué NO aquí | Dónde vive |
|---|---|---|
| Pricing exacto por tier ($1,500 / $1,999 / $1,799 hipótesis) | Es decisión específica de tier structure | `03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` (pending v0.1) |
| Programa Socio Fundador deal terms · descuentos · reciprocidad | Es ofrecimiento específico Fase 0 design partners | `03-oferta-y-pricing/02-programa-socio-fundador-offer.md` (pending v0.1) |
| Viabilidad económica · COGS · margin floor | Es análisis financiero interno | `03-oferta-y-pricing/04-viabilidad-economica-y-cogs.md` (pending v0.1) |
| WTP validation methodology · PSM · willingness ladders | Es plan de validación | `03-oferta-y-pricing/05-wtp-validation-plan.md` (pending v0.1) |
| Operational readiness · stack identidades formales · sequencing Tier 1/1.5/2.0 | Es operations + capital structure decision | `05-capital-y-finanzas/01-operational-readiness-y-business-setup-phase-1.md` v0.1 |
| Sales motion · scripts de negociación · cierre · objection handling | Es ejecución comercial downstream | `Product Strategy/_context/04-go-to-market/` (pending v0.1) |

### 1.3 Hereda de marco doc 00 sin relitigar

Diez decisiones canónicas del marco se asumen vigentes (cf. `00-marco-de-oferta-y-pricing.md` v1.0 §4):

1. Pure subscription · 90-day minimum · annual prepay · NO setup fee
2. High-touch onboarding incluido uniforme cross-tier · agent-led
3. Pricing per-sucursal NO per-user · internal caps invisibles
4. Estructura 4 tiers · WhatsApp en todas diferenciado por service level · AI agents Phase 1 full cross-tier
5. Enterprise tier "Custom · contact sales" · NO list price Phase 1
6. Internal capacity caps tracked religiosamente · NO visible al cliente
7. Add-ons (Heavy Usage Pack · Specialty Agent Pack) como roadmap Phase 1.5+
8. Contable externo siempre incluido cross-tier
9. Pricing uniforme dentro de MX
10. Phase 1 = TIER 1 + TIER 2A · Phase 1.5 = TIER 2B · Phase 2 = TIER 3

---

## 2. Modelo canónico: pure subscription

### 2.1 Definición

> **Subscription mensual recurrente · cliente paga por uso continuo del producto + agency · sin setup fee · sin project pricing · sin per-seat metering · sin per-query charges visibles.**

Estructura básica:

| Componente | Definición |
|---|---|
| **Unidad de cobro** | Per-sucursal/mes (NO per-user · NO per-query · NO flat-account) |
| **Frecuencia** | Mensual recurring (primary) · Annual prepay (optional con descuento) |
| **Compromiso mínimo** | 90 días desde primer cargo (cf. §3.1) |
| **Método de pago** | Card / debit / transferencia bancaria via Stripe/Conekta · CFDI auto-generated |
| **Renovación** | Auto-renewal opt-in default · cancellation self-serve in-app (cf. §5.1) |

### 2.2 Las 5 razones canónicas (heredadas)

| # | Razón | Detalle |
|---|---|---|
| 1 | **Preserva pricing power** | Agency commands premium vs tool/utility · pure subscription mantiene categoría agency-as-SaaS |
| 2 | **Single commercial decision MX SMB-friendly** | Operador decide una vez (tier + sucursales) · NO negociación por feature · NO sales cycle complejo |
| 3 | **Evita atomizar value en project pricing** | Project pricing destruye agency framing + reduce ARPA + complica accounting |
| 4 | **Compatible LFPDPPP recurring billing** | Modelo standard MX para servicios continuos · framework regulatorio claro |
| 5 | **Habilita pure SaaS ARR narrative para investor pitch** | Métricas SaaS clásicas (MRR · ARR · NRR · churn) sin friction de project revenue mixing |

**Anclaje:** `00-marco-de-oferta-y-pricing.md` v1.0 §2.4 + `Branding/_context/04-voice-and-tone/vocabulario.md` v1.3 §2.8 + `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.1 §14.

### 2.3 Contraste con modelos rechazados

| Modelo rechazado | Por qué NO funciona para Zenet | Detalle anti-position |
|---|---|---|
| **Project pricing** | Atomiza value · destruye agency framing · breaks investor SaaS narrative | cf. §6 anti-position #2 |
| **Setup fee + subscription** | Single commercial decision principle · MX SMB resistance | cf. §6 anti-position #1 |
| **Per-seat pricing** | Rompe agency-as-SaaS framing · adoption friction · breaks single decision principle | cf. §6 anti-position #3 |
| **Per-query / per-token metering visible** | Utility-bill anxiety MX SMB · habilita comparison ChatGPT pricing · destruye categoría | cf. §6 anti-position #4 |
| **Mantenimiento legacy fees** | Producto vivo · no legacy software | cf. §6 anti-position #5 |
| **Free trial sin compromiso** | Adverse selection · no commitment signal · onboarding labor desperdiciado | cf. §6 anti-position #9 |

### 2.4 Implicaciones operativas

- **Billing recurring mensual** auto-procesado vía Stripe/Conekta · CFDI auto-generated post-cobro
- **Auto-renewal opt-in default** · cliente cancela vía self-serve in-app (cf. §5.1)
- **NO billing complexity por usage** · internal caps tracked operacionalmente sin surface al cliente (cf. doc 00 §6.5)
- **Single line-item en factura** · "Suscripción Zenet · [Tier] · [Sucursal/es]"

---

## 3. Términos de compromiso

### 3.1 90-day minimum commitment

**Definición:** desde la fecha del primer cargo (Day 8 · cf. §4.3), el cliente se compromete a mantener la suscripción activa mínimo 90 días.

#### Razón estructural

Restaurant BoH adoption curve documented `[Anclado en research]` (`02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` v0.5 §4.0):

| Stage | Periodo | Caracterización |
|---|---|---|
| **Novelty Engagement** | Mes 1-2 | Adopción activa · alto engagement · WhatsApp constante |
| **Routine Degradation** | Mes 2-4 | Window crítico menos observado · data discipline puede colapsar |
| **Silent Coasting** | Mes 4-8 | Uso baseline · cliente espera valor compound |
| **Pre-Cancellation Drift** | Mes 8-12 | Restaurant BoH cliff típico Mes 6 |

**Lectura:** cliente que cancela <90 días NO ha atravesado critical adoption window · NO ha experimentado el producto en steady-state · cancellation pre-90-day es typically incomplete evaluation.

#### Operacional

| Escenario | Tratamiento |
|---|---|
| Cliente cancela durante días 1-7 (ventana de cancelación) | Walks away free · MSA voided · cf. §4.2 |
| Cliente cancela días 8-97 (dentro de 90-day commitment) | Paga hasta Day 98 (Day 8 + 90 días) · NO refund por meses transcurridos · NO se cobran restantes post-cancellation effective date |
| Cliente cancela post-Day 98 | Termina al final del current paid period · cf. §5.1 |

#### Excepciones (90-day commitment NO aplica)

| Escenario | Razón |
|---|---|
| Material breach Zenet (SLA breach Enterprise · downtime crítico documented) | Zenet responsable de incumplimiento · cliente puede salir sin penalty |
| Force majeure documentado | Standard contractual exception |
| Cancellation durante ventana de cancelación Day 1-7 | Pre-commitment · clean exit |

### 3.2 Annual prepay structure

**Definición:** cliente paga upfront el equivalente de 12 meses con descuento (% específico TBD · cf. §3.2.4) · cobertura 12 meses inicia desde Day 8 (primer cargo) · NO desde Day 1.

#### 3 razones canónicas

| # | Razón | Detalle |
|---|---|---|
| 1 | **Cash flow Phase 1 (founder-bootstrap reality)** | Annual prepay genera cash upfront · reduce founder bridge financing required · alinea con Path A solo bootstrap discutido en `05-capital-y-finanzas/01-operational-readiness.md` v0.1 |
| 2 | **Retention lock-in estructural** | 12 meses cobertura atraviesa Mes 6 cliff documented · cliente NO puede walk en Mes 4 (routine degradation window) |
| 3 | **CFO-friendly accounting (cliente-side)** | Capex-friendly + budget predictability · contable cliente prefiere annual line-item vs monthly recurring · facilita buying committee approval |

#### Estructura operacional

- Pago único upfront Day 8 (primer cargo · NO Day 1)
- 12 meses cobertura · auto-renewal opt-in al final del prepay period
- Descuento conceptual aplicado (% TBD en doc 03)
- CFDI generated al momento del prepay charge
- Método de pago "PPD" (Pago en Parcialidades) si annual prepay generates múltiples CFDIs · O "PUE" si single CFDI cobertura 12 meses (decisión despacho contable cf. operational readiness doc)

#### Excepción cancellation con annual prepay

| Escenario | Tratamiento |
|---|---|
| Annual prepay mid-year cancellation (Mes 1-11) | Pro-rata refund MENOS descuento aplicado · cliente puede convertir a monthly post-cancellation period |
| Annual prepay durante ventana de cancelación Day 1-7 | Full refund · MSA voided · clean exit |
| Annual prepay post-12-month renewal | Standard cancellation rules apply (cf. §5) |

#### 3.2.4 Descuento exacto

`[Hipótesis sin validar]` — rango defendible **10-20% discount vs monthly subscription** · cierre con behavioral data Phase 1 design partners en doc 03.

---

## 4. Términos de inicio: ventana de cancelación + activación de suscripción

> **Frame conceptual:** Zenet NO opera con "fase gratuita" · "free trial" · ni "período de implementación sin labor". Opera con **ventana de cancelación + activación de suscripción**. La agency trabaja desde Day 1 (cleanup + estandarización + setup) · cliente firma contrato Day 1 · cliente tiene 7 días para cancelar sin cargo · primer cargo procesa Day 8 · 90-day commitment activa Day 8.

### 4.1 Agency trabajando desde Day 1

A diferencia de "fase gratuita" donde el cliente "prueba" el producto, en Zenet la agency está activamente trabajando desde Day 1 sobre los datos y operación del cliente.

**Qué hace la agency Day 1-7:**

| Actividad | Categoría |
|---|---|
| Limpieza de data del cliente (POS exports · históricos · catálogos) | Cleanup |
| Estandarización de menús + recetas + costos top-10 platillos | Standardization |
| Documentación de SOPs operativos | Setup |
| Setup integraciones (WhatsApp · agents · permissions) | Setup |
| Multi-stakeholder training (Owner · Manager · Chef · Contable) | Training |
| Construcción inicial de dashboards + alerts configuration | Setup |

**Razón:** matches MX professional services pattern (despacho contable · consultor operativo · agencia marketing) — todos trabajan + cobran desde firma · NO regalan labor de cleanup/setup.

### 4.2 Ventana de cancelación (7 días post-firma)

**Definición:** Day 1-7 cliente puede void el MSA sin cargo · walks away clean · sin justificación required.

**Operacional:**

- Cliente cancela vía self-serve in-app (cf. §5.1)
- MSA terminated · Order Form voided
- Onboarding sessions consumidas Day 1-7 = Zenet absorbs como learning cost (justified por 7 días labor)
- Data cliente disponible export 30 días post-cancellation
- NO charge processed · NO refund processing required
- NO restrictions de re-engagement futuro

**Razón del límite 7 días:**

- Escape hatch limpio · matches consumer protection-style standard
- Suficiente para Sesión 1-2 de onboarding + initial data review
- Cliente puede evaluar fit cualitativo (interactions iniciales con agency · stakeholder coordination · setup quality)
- Corto enough para preservar commitment signal · NO se vuelve trial sin compromiso

### 4.3 Primer cargo Day 8

**Definición:** Day 8 procesa el primer cargo recurring · 90-day commitment activates desde esta fecha.

**Operacional:**

| Componente | Detalle |
|---|---|
| Fecha cargo | Day 8 (right after cancellation window closes) |
| Monto | Per tier seleccionado (cf. doc 03 pricing tiers) |
| Método | Payment method capturado durante onboarding flow Day 1 |
| CFDI | Auto-generated · enviado a Owner email + disponible admin panel |
| 90-day commitment | Activates desde Day 8 · termina Day 98 |
| Subscription period | Day 8 → Day 38 (Mes 1) |

**Razón del Day 8 (no Day 1):**

| Razón | Sustentación |
|---|---|
| **Honra ventana de cancelación** | Cliente que cancela Day 1-7 NO debe ser cobrado · Day 8 alinea primer cargo con cierre de ventana |
| **Reduce friction operativa** | Single billing event Day 8 · NO refunds Day 1-7 cancellations · simpler accounting |
| **Match con MX SMB expectation** | Cliente firma Day 1 · "entra en serio" Day 8 · feels natural · NO rushed |
| **Preserves clean cancellation UX** | Day 1-7 narrative claro: "puede salir libre" · Day 8 narrative: "ya entró formalmente" |

### 4.4 Mes 1 (Day 8 - Day 38) · high-touch onboarding incluido

**Definición:** Primer mes pagado es subscription estándar con high-touch onboarding incluido (sesiones adicionales · agent transition · weekly reviews) — NO extra fees · NO separate billing.

**Qué pasa Mes 1:**

| Actividad | Frecuencia hipótesis |
|---|---|
| Sesiones onboarding adicionales (Sesión 3-6 typically: Owner ROI review · Contable parallel · multi-sucursal coordination si Multi-Sitio) | Distribuidas Day 8-30 |
| Agent training continúa sobre data cliente | Background continuous |
| Transition de cleanup phase a steady-state operation | Day 15-25 typical |
| Bi-weekly CS check-ins | Cada 2 sem · `[Anclado en research]` (`02-customer-research/06-objeciones.md` §4.0) |
| WhatsApp 24/7 active según tier | Continuous |
| Primer weekly dashboard review | Day 14 typical |
| Mes 1 review checkpoint | Day 30-38 |

**Razón uniformidad cross-tier:**

High-touch onboarding incluido es decisión canónica heredada (doc 00 §4 decisión #2) · NO diferenciación por tier porque:

- Agent-led onboarding scales independent of tier
- Tier differentiation aditiva (cf. doc 00 §6.7) NO incluye onboarding mechanics
- Enterprise tier puede recibir dedicated CS adicional (que es differenciador SLA, NO onboarding scope)

### 4.5 Phase 2 evolution posible (defer)

`[Hipótesis sin validar]` — para Phase 2 (post 10+ clientes pagantes · producto más maduro · onboarding parcialmente automated):

| Phase | Modelo hipótesis |
|---|---|
| Phase 1 (Q3 2026 - Q1 2027) | Ventana cancelación 7 días + primer cargo Day 8 |
| Phase 1.5 (Q1-Q2 2027) | Posible refinement con behavioral data Phase 1 |
| Phase 2+ (Q3 2027+) | Posible: 15-day true free trial cuando producto self-serve · validation con behavioral data |

NO commitment Phase 2 mechanics en v0.1 · solo flagueamos evolución posible.

### 4.6 Edge cases

| Edge case | Tratamiento hipótesis |
|---|---|
| Cliente cancela Day 1-7 | Walks away free · MSA voided · onboarding labor absorbed Zenet · data export 30 días |
| Cliente cancela Day 8+ (post-window pre-Day 98) | 90-day commitment activa · paga hasta Day 98 · NO refund de meses transcurridos |
| Agency NO ready operacionalmente Day 8 | NO afecta cobro Day 8 procesa · pero CS escalation interna · founder rectifica timeline · cliente notified honestamente |
| Cliente queja Day 10 *"no veo agency funcionando"* | Honesty conversation: agency está working (cleanup + standardization phase) · transition a steady-state ETA Day 15-20 · weekly review Day 14 evidence tangible |
| Multi-Sitio cleanup más largo (3+ sucursales) | Cobro inicia Day 8 igual · high-touch onboarding incluye más sesiones Mes 1 sin cargo extra |
| Stakeholder no-show cliente-side delays | Si delay >2 semanas por cliente · honest conversation re-scheduling o pause · NO charge durante pause documentado |
| Data migration blocker (POS export issues) | Workaround Modo 2 manual capture · Modo 3 photo+OCR · NO blocking cobro Day 8 |
| Annual prepay durante onboarding | Pago Day 1 · 12 meses cobertura inicia Day 8 (primer cargo · NO Day 1) · ventana cancelación = full refund si cancela |

---

## 5. Términos de cancelación, refund y escalation

### 5.1 Self-serve in-app cancellation

**Decisión canónica:** cancelación es self-serve desde admin panel · NO via email · NO via WhatsApp · NO forced phone call.

**Razón:** standard SaaS moderno · ethical practice · evita dark patterns retention · FTC "click to cancel" alignment · MX SMB trust preservation.

#### Flow operativo

```
Owner ingresa a admin panel
  ↓
Settings → Subscription → Cancel subscription
  ↓
Confirmation step (reason capture dropdown + free text · feedback alimenta v0.2)
  ↓
Re-authentication (anti-accidental cancellation)
  ↓
Cancellation processed inmediato
  ↓
Auto-triggered post-cancel:
  • Data export scheduled (30 días disponible)
  • CS notification sent (Zenet internal)
  • Confirmation email to Owner
  • Optional CS reach-out <24h (NOT blocking · post-fact retention conversation · max 1 outreach)
```

#### Decisiones operativas asociadas

| Decisión | Hipótesis Phase 1 |
|---|---|
| Quién puede cancelar | Solo Owner role (no Manager · no Chef · no Contable) · permission gate explícito |
| Multi-sucursal cancellation | Per-sucursal cancellable independently · Multi-Sitio tier puede cancel sucursal individual o todo el contract |
| Confirmation step | Reason capture (dropdown predefined + free text) · feedback alimenta product roadmap + v0.2 del subfolder |
| CS save attempt | Permitida POST-cancellation · NO bloquea acción del cliente · 24h window · max 1 outreach · agency-styled (NO discount offering inicial) |
| Re-activation | <90 días post-cancel: same payment method · NO re-onboarding · Owner one-click · NO fee · razón: friction-free return matches modern SaaS |
| >90 días post-cancel | Standard re-onboarding flow · ventana cancelación Day 1-7 reactiva · cuenta como new customer |
| Enterprise cancellation | Per contract terms · NOT in-app (negotiable terms) · contact CS dedicated |

### 5.2 Refund cases · matriz

| Escenario | Refund | Razón |
|---|---|---|
| Cancellation Day 1-7 (ventana de cancelación) | NO refund needed (nada cobrado) · clean exit | Pre-commitment window |
| Cancellation Day 8-97 (dentro 90-day commitment) | NO refund de meses transcurridos · NO se cobran restantes post-effective-date | 90-day minimum commitment activo |
| Annual prepay mid-year cancellation (Mes 1-11) | Pro-rata refund MENOS descuento aplicado | Cliente recibió valor proporcional · descuento condicional a 12-month commitment |
| Cancellation post-Day 98 (post 90-day commitment) | NO refund mes actual · termina end of current period | Standard subscription practice |
| Material breach Zenet (SLA breach Enterprise · downtime crítico documented) | Pro-rata refund + escalation | Zenet responsable de incumplimiento contractual |
| Force majeure documentado | Caso por caso · standard contractual treatment | Beyond Zenet control |
| Data export failure post-cancellation | Servicio remediación + posible courtesy refund | Zenet operational responsibility |

### 5.3 Escalation path

| Tier | Quién | Response time hipótesis |
|---|---|---|
| Tier 1 — General queries / issues operacionales | CS Manager (founder Alan Phase 1 reality) | <4 horas business hours |
| Tier 2 — Escalation operacional · billing issues · onboarding problems | Customer Success Lead (Phase 2+) · founder Phase 1 | <24h |
| Tier 3 — Strategic complaint · cancellation save · executive escalation | Founder direct (Phase 1) · Head of CS post-seed | Same day business hours |
| Enterprise — Contract-defined SLA | Dedicated CS + Contract SLA response times | Per contract |

**Anti-pattern explícito:** NO multi-tier hoops forced antes de cancellation. Escalation es para issue resolution · NO para hacer cancellation deliberately difícil.

---

## 6. Anti-positions: lo que NO hacemos

Tabla canónica · cada anti-position con razón estructural + qué SÍ hacemos en su lugar.

| # | NO hacemos | Razón canónica | Qué SÍ hacemos |
|---|---|---|---|
| 1 | **Setup fee** | Single commercial decision principle · MX SMB resistance · destruye agency framing | Ventana cancelación 7 días + primer cargo Day 8 · onboarding labor incluida en suscripción |
| 2 | **Project pricing** | Atomiza value · destruye agency framing · breaks investor SaaS narrative | Pure subscription mensual recurring |
| 3 | **Per-seat pricing** | Rompe agency-as-SaaS framing · adoption friction · breaks single decision principle | Per-sucursal flat + cap soft users + tier upgrades (cf. doc 03) |
| 4 | **Per-query / per-token metering visible** | Utility-bill anxiety MX SMB · habilita comparison ChatGPT pricing · destruye categoría | Internal caps invisibles (cf. doc 00 §6.5) + tier differentiation por service level |
| 5 | **Mantenimiento legacy fees** | Producto vivo · no legacy software · all updates incluidos | Producto evolutivo continuo · all Phase 1 features incluidos · no separate maintenance billing |
| 6 | **Hardware lock-in** | POS-agnostic positioning · 95% adoption/coexistence framing | Cualquier POS · cualquier hardware · BoH AI layer encima · hardware-agnostic |
| 7 | **Long-term contracts (2-3 años)** | MX SMB resistance · pre-PMF requires flexibility · destruye trust | 90-day minimum commitment + annual prepay opcional con descuento |
| 8 | **Heavy discounting tactical** | Year 1 churn lever documented · destruye anchor + arbitrage narrative | Descuento Socio Fundador estructurado (doc 02) + premium positioning preserved |
| 9 | **Free trial sin compromiso** | Adverse selection · no commitment signal · onboarding labor desperdiciado · WhatsApp 24/7 drena COGS sin revenue | Ventana cancelación 7 días CON contrato firmado (cf. §4) |
| 10 | **Email/phone-only cancellation** | Dark pattern retention · FTC alignment · destroys trust · anti-cliente | Self-serve in-app cancellation Owner role (cf. §5.1) |
| 11 | **Multi-step retention hoops antes de cancellation** | Anti-cliente · forced friction · destruye trust | Confirmation + re-auth + immediate processing · CS save POST-cancellation (NOT blocking) |
| 12 | **Paper signature Esencial-Pro-Multi** | Friction sin razón · operational overhead · MX SMB unfriendly | Click-wrap contract digital (cf. §7) |

---

## 7. Estructura contractual + compliance anchoring

### 7.1 Dos documentos: MSA + Order Form

| Doc | Qué contiene | Frecuencia de firma |
|---|---|---|
| **MSA** (Master Subscription Agreement) | Términos generales: licencia · IP · LFPDPPP / data processing · SLA tier-defined · limitation of liability · governing law MX · dispute resolution · termination clauses · indemnification · force majeure | Una vez · cuando cliente cierra Zenet · re-firma si MSA version updates significativos |
| **Order Form** | Específicos del deal: tier seleccionado · # sucursales · # users incluidos · billing cycle (monthly vs annual) · descuento aplicado (Socio Fundador) · effective dates · authorized signatories · payment method confirmation | Por cada renewal · tier change · sucursal addition |

### 7.2 Estructura virtual diferenciada por tier

| Tier | MSA | Order Form | Razón |
|---|---|---|---|
| **Esencial · Pro · Multi-Sitio** | **Click-wrap** (acepta T&C standardized durante onboarding flow) | **Click-wrap** o **simple e-signature** | Standardized terms · no negotiation · fast onboarding · MX SMB friendly · legalmente válido MX |
| **Enterprise** | **E-signature** (DocuSign/HelloSign) · MSA negotiable | **E-signature** (custom per cliente) | High-value · custom terms · procurement approval cliente requires formal signature · match expectativa enterprise |

#### 7.2.1 Click-wrap explained

> Cliente ve los Términos y Condiciones en pantalla durante onboarding flow · clickea checkbox afirmativo *"He leído y acepto los Términos de Servicio + Política de Privacidad + Order Form de mi plan"* · sistema captura IP + timestamp + user-ID + version del documento aceptado · esto constituye contrato legalmente válido en MX.

**Por qué click-wrap funciona Phase 1:**

- ✅ Legalmente válido en MX (Ley de Firma Electrónica · Código de Comercio · Código Civil Federal · jurisprudencia consolidada)
- ✅ Standard SaaS industry-wide (Slack · Notion · Stripe · Square usan click-wrap)
- ✅ Fast onboarding (no friction de DocuSign para Esencial-Pro-Multi)
- ✅ MX SMB friendly (operador no quiere firmar 10 documentos PDF)
- ✅ Audit trail completo (versions T&C · timestamp · user-ID · IP)

#### 7.2.2 E-signature Enterprise

Para Enterprise tier:
- Negotiable MSA terms (procurement cliente puede pedir modificaciones)
- Custom Order Form per deal
- DocuSign / HelloSign / similar formal e-signature platform
- Contraparte Zenet co-firma (Alan founder Phase 1 · authorized signatory)
- Standard procurement workflow cliente

### 7.3 Compliance anchoring · 5 anchors

> **Compliance anchoring = los marcos legales/regulatorios MX a los que el contrato + operación de Zenet DEBEN apegarse para ser válido, enforceable y libre de riesgo regulatorio.**

Cinco anchors canónicos · profundización operacional vive en `05-capital-y-finanzas/01-operational-readiness-y-business-setup-phase-1.md` v0.1 §9.

| # | Anchor | Qué requiere · cómo se cumple |
|---|---|---|
| 1 | **MX governing law + jurisdicción** | Contrato declara leyes mexicanas · jurisdicción tribunales MX (Tijuana hipótesis) · standard clause en MSA |
| 2 | **LFPDPPP 2025 compliance** | Aviso de Privacidad publicado · DPA template en MSA addendum · ARCO rights handling · Zenet = encargado del tratamiento · cliente = responsable · sub-procesadores documented (Anthropic · WhatsApp · Supabase · Stripe/Conekta) |
| 3 | **CFDI billing 4.0 (SAT compliance)** | RFC validation cliente durante onboarding · CFDI auto-generated via PAC · forma de pago codes correctos · método de pago PUE/PPD · envío XML+PDF automático · 30 días disponible admin panel |
| 4 | **WhatsApp Business API compliance (META)** | Opt-in explícito cliente onboarding · message categorías correctos (utility · authentication) · business verification + green check · template messages pre-approved · NO spam · NO unsolicited marketing |
| 5 | **Anthropic AUP (Acceptable Use Policy)** | Use case approved (restaurant operations) · data handling (cliente data NO training) · rate limiting via internal caps · output disclosure cliente notified AI-generated |

**Anclaje regulatorio crítico:**

- **LFPDPPP 2025 (vigor 21 mar 2025):** INAI dissolution → Secretaría Anticorrupción enforces · multas hasta 320,000 UMA (~$30M MXN máx) · `[Anclado en research]` (`01-industry-and-market/08-entorno-regulatorio.md` v1.0.1 §10.1)
- **CFDI 4.0 buying committee importance:** *"el contador autoriza"* · sin CFDI valid = silent veto del contable · `[Anclado en research]` (`02-customer-research/05-buying-process-y-criterios-de-decision.md` v0.7 §10)

### 7.4 Operational readiness pre-launch

**Pendiente flagged · documented canonical en doc adyacente:**

Para que el contrato + compliance anchoring sea operacionalmente real, Zenet necesita:

- Stack de identidades formales (RFC actividad empresarial · cuenta bancaria empresarial · Stripe/Conekta merchant · WhatsApp Business verified · PAC integration · LFPDPPP compliance · Anthropic enterprise terms · IMPI marca registrada)
- PFAE Phase 1 → SAPI pre-seed close (sequencing canonical)
- Tier 1 NOW ~$8K MXN · Tier 1.5 free preparations 2-3 meses pre-design-partner · Tier 2.0 paid commitments con **LOI gate** $30-50K MXN

**Detalle completo, sequencing, costs, timeline y triggers** vive en:

> 📄 `Product Strategy/_context/05-capital-y-finanzas/01-operational-readiness-y-business-setup-phase-1.md` v0.1

**Pendiente legal review pre-launch:**

- MSA template (governing law + IP + termination + LFPDPPP DPA addendum)
- Privacy Policy final (LFPDPPP 2025 compliant)
- Order Form template + click-wrap legal validation
- PAC vendor selection + integration spec
- WhatsApp Business verification submission
- Anthropic enterprise terms review

---

## 8. Estado del doc + version triggers

### 8.1 Estado v0.1

Cerrado 2026-05-29 tras conversación foundational del subfolder.

**Hipótesis fundamentales declaradas:**

- Pure subscription canonical
- 90-day minimum commitment + annual prepay
- Ventana cancelación 7 días + primer cargo Day 8 (reframed de "fase gratuita 30 días")
- Self-serve in-app cancellation Owner role
- Click-wrap contract Esencial-Pro-Multi + e-signature Enterprise
- 12 anti-positions documented
- 5 compliance anchors documented
- Operational readiness flagged con pointer canonical

### 8.2 Version triggers

| Transición | Trigger | Estado actual |
|---|---|---|
| v0.1 → v0.2 | 3+ design partners firmados + feedback MSA + Order Form aplicado | Pendiente |
| v0.2 → v1.0 | 5+ cierres reales + MSA template refinado por legal review + actual usage observed Phase 1 cohort | Pendiente |
| v1.0 → v2.0 | Phase 2 launch · Enterprise tier productización · pricing model overhaul | Pendiente · futuro |

### 8.3 Pendientes inmediatos post-v0.1

1. **MSA template draft** — Tier 2.0 lawyer engagement (LOI gate · cf. operational readiness doc)
2. **Order Form template draft** — Tier 2.0 lawyer engagement
3. **Privacy Policy final + DPA** — Tier 2.0 lawyer engagement (LFPDPPP-specialized)
4. **Click-wrap implementation spec** — engineering coordination con production repo
5. **PAC integration spec** — Tier 1.5 PAC vendor selection + Tier 2.0 lawyer review

### 8.4 Cross-doc dependencies

| Doc | Relación |
|---|---|
| `00-marco-de-oferta-y-pricing.md` v1.0 | Source canonical de 10 decisiones heredadas (§1.3) |
| `02-programa-socio-fundador-offer.md` (pending) | Deal terms específicos Fase 0 · usa modelo comercial documented aquí como baseline |
| `03-pricing-tiers-hipotesis.md` (pending) | Pricing exacto por tier · usa modelo comercial canonical |
| `04-viabilidad-economica-y-cogs.md` (pending) | Viabilidad económica del modelo comercial documented aquí |
| `05-wtp-validation-plan.md` (pending) | Plan de validación de términos comerciales con design partners |
| `05-capital-y-finanzas/01-operational-readiness.md` v0.1 | Compliance anchoring + operational readiness pre-launch |
| `Branding/_context/04-voice-and-tone/vocabulario.md` v1.3 §2.8 + §4.5 | Modelo comercial vocabulary canonical |
| `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.1 §14 | Programa design partners commercial terms |

---

## Notas finales

**Para sales motion (cuando se redacte `04-go-to-market/`):**

Este doc es la **referencia canonical** para presentar términos comerciales a prospects. Sales motion debe:

- Mantener consistencia con anti-positions §6 (NO improvisar setup fees · descuentos tácticos heavy · long-term contracts)
- Honor estructura virtual contract §7.2 (click-wrap default · e-signature Enterprise)
- Comunicar ventana cancelación + primer cargo Day 8 como diferenciador (NO trial framing · NO free framing)
- Frame 90-day commitment como **commitment to value evaluation** (NO lock-in trap)
- Frame annual prepay como **CFO-friendly optimization** (NO pressure tactic)

**Para legal review pre-launch:**

Este doc declara hipótesis estructurales. Lawyer engagement (Tier 2.0 post-LOI) debe:

- Validar click-wrap enforceability MX
- Confirmar 90-day commitment defensibility
- Draft MSA + DPA template aligned con §3, §4, §5
- Review compliance anchoring §7.3 alignment con LFPDPPP 2025 final regulations

**Para founder strategic clarity:**

Este doc consolida 90+ min de conversación foundational con corrections estructurales (agency working Day 1 · self-serve cancellation · click-wrap virtual · compliance anchoring). Sin este doc, sales motion + legal + operational decisions Phase 1 operarían sobre framing inconsistente.

---

*Última actualización: 2026-05-29.*
