---
name: Marco de oferta y pricing
description: Documento foundational del subfolder 03-oferta-y-pricing. Declara scope y boundaries, frames estratégicos (value-based + arbitrage 70-100x + honestidad founder labor subsidy + agency-as-SaaS + competitive anchoring dual), frameworks aplicados, 10 decisiones canónicas heredadas, 8 decisiones abiertas para validación con design partners, 8 principios estructurales (dual COGS + tres pricing scenarios + internal vs visible caps + defensa multi-capa AI inference + tier differentiation aditiva), versionado y orden de lectura. Marco que los 5 docs siguientes (modelo comercial · programa Socio Fundador · pricing tiers · viabilidad económica · WTP validation) heredan sin relitigar.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-29
status: active
version: 1.0
owner: Alan Bahena
---

# Marco de oferta y pricing

> Documento foundational del subfolder `03-oferta-y-pricing` del departamento Product Strategy. Define cómo se redactan, versionan y mantienen los 5 docs que siguen — sin este marco declarado y vigente, las decisiones de oferta y pricing operarían sobre lente inconsistente, frames sin justificación y referencias sin trazabilidad.
>
> Si un AI agent o contribuidor humano lee solo un doc del subfolder, este es ese doc.

---

## Índice

1. Propósito del subfolder · scope y boundaries
2. Frames estratégicos de pricing
3. Metodologías y frameworks aplicados
4. Decisiones canónicas heredadas
5. Decisiones abiertas
6. Disciplina y principios estructurales
7. Versionado · ownership · cross-workspace
8. Cómo usar este subfolder · orden de lectura

---

## 1. Propósito del subfolder · scope y boundaries

### 1.1 Qué responde este subfolder

Este subfolder responde cuatro preguntas operativas centrales:

- **¿Qué cobramos?** — estructura de tiers · precios hipótesis · add-ons roadmap
- **¿Cómo cobramos?** — modelo comercial (pure subscription · 90-day minimum · annual prepay · fase gratuita · refund/escalation)
- **¿A quién cobramos?** — alineación tiers ↔ sub-segmentos (Esencial → Sub-segmento A · Pro → A heavy-user · Multi-Sitio → **B beachhead** · Enterprise → C cadenas regionales)
- **¿Por qué cobramos eso?** — defensa value-based + competitive anchoring + viabilidad económica + plan de validación con design partners

### 1.2 Qué NO responde este subfolder

Para evitar scope creep y mantener ownership claro:

| Tipo de trabajo | Por qué NO aquí | Dónde vive |
|---|---|---|
| Modelo financiero proyectado · LTV/CAC formal · cohort analysis · multi-year P&L · runway · capital requirements | Es financial modeling completo · requiere data conductual que no existe pre-PMF | `Product Strategy/_context/05-capital-y-fundraising/` |
| Sales motion para presentar pricing · scripts de negociación · cierre · objection handling pricing-specific | Es ejecución comercial downstream | `Product Strategy/_context/04-go-to-market/` |
| Programa design partner operativo (criteria · cohort management · acuerdo template) | Vive en workspace separado · canonical | `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.1 |
| Ejecución WTP qualitative interviews · PSM execution · feedback synthesis | Es ejecución de research · operacional | `05-customer-development/` (operacional) |
| VP statement · features Phase 1 scope · roadmap features | Heredados de upstream | `Product Strategy/_context/01-propuesta-de-valor/` + `02-features-y-scope/` |

### 1.3 Cross-workspace boundaries

| Boundary | Pricing aquí | Lo que vive allá |
|---|---|---|
| ↔ `05-capital-y-fundraising/` | Pricing decisions + viabilidad económica Nivel 2 (sanity check estructurado) | Modelo financiero completo + projections + capital requirements + milestone-anchored funding roadmap |
| ↔ `04-go-to-market/` | Pricing terms + tier structure + add-on roadmap | Sales motion + scripts de presentación pricing + objection handling pricing-specific |
| ↔ `08_Estrategia-Producto/_context/05-customer-development/` | WTP validation plan (estructura · metodología · willingness ladders) | Ejecución del plan (interviews · PSM · feedback synthesis) con design partners reales |
| ↔ `Branding/_context/` | Pricing model consistente con framing | Canonical brand language · agency-as-SaaS framing · vocabulario commercial (`vocabulario.md` §2.8 + §4.5) |

---

## 2. Frames estratégicos de pricing

Cinco frames invariables que gobiernan toda decisión en el subfolder. Cualquier decisión que contradiga uno de estos frames requiere relitigar el frame primero — no rebasarlo silenciosamente.

### 2.1 Value-based pricing (NO cost-plus)

**Frame:** el precio se define por el valor que el cliente recibe — NO por lo que cuesta producir el producto · NO por lo que cobran competidores.

**Implicación operativa:** la defensa del precio se construye desde el VALUE side (work equivalent agencia humana · jobs done · pains resueltos), NO desde el COGS side. COGS aparece en doc 04 como **check de viabilidad** (¿podemos producirlo a este precio?) · no como driver del precio.

**Trampa que este frame previene:** cost-plus reflex pre-PMF destruye categorías nuevas. Founders típicamente calculan COGS hipotético + margen deseado = precio · esto anclorea bajo y regala value capturable.

**Anclaje:** `Product Strategy/_context/01-propuesta-de-valor/03-vp-statement-compressed.md` v0.1.

### 2.2 Pricing arbitrage 70-100x como ancla narrativa

**Frame:** Zenet entrega trabajo equivalente a equipo humano specialist (procurement + costing + forecasting + operations + analytics + compliance + supplier relations + recipes) por una fracción del costo de ese equipo.

**Math hipotético:**

- Equipo humano equivalente: $105K-185K MXN/mes en sueldos `[Anclado en research]` (`03-competitive-analysis/07-defensibility.md` §4.1.3)
- Zenet Multi-Sitio · 2 sucursales · Sub-segmento B beachhead: $3,598 MXN/mes `[Hipótesis sin validar]`
- **Arbitrage: 70-100x discount vs equipo humano**

**Uso operativo:**

- **Sales motion:** defensa del pricing contra presión de descuento
- **Investor pitch:** narrative central de value capture + WTP runway
- **Internal discipline:** previene over-discounting tactical que erosionaría narrative

**Anclaje:** `Market Research and Analysis/_context/03-competitive-analysis/07-diferenciacion-zenet-y-defensibility.md` v0.1 §4.1.

### 2.3 Honestidad estructural sobre founder labor subsidy

**Frame:** durante Phase 1, founder labor (high-touch onboarding + CS bi-weekly + soporte WhatsApp ad-hoc) NO aparece en cash COGS pero ES costo real que post-seed se convierte en hire. El pricing analysis DEBE declarar ambos escenarios COGS explícitos para evitar self-anchoring optimista.

**Implicación operativa:**

- Doc 04 modela **DOS escenarios COGS canónicos** (cf. §6.3): founder-bootstrap Phase 1 (margen inflated · NO defender pricing long-term aquí) + post-seed steady-state (CS hire amortizado · gross margin realista · ESTE defiende pricing long-term)
- Sin esta separación explícita, el pricing luce artificialmente rentable Phase 1 → fija anchoring optimista que se rompe cuando hires reales entran

**Trampa que este frame previene:** unit economics pre-PMF con founder subsidy oculto · anclorea decisiones de pricing que después colapsan al hire.

### 2.4 Subscription-first · agency-as-SaaS framing

**Frame:** Zenet es agencia de especialistas AI entregada via subscription. NO project pricing. NO setup fee. NO per-seat. NO per-query metering visible al cliente.

**Razones:**

- Preserva pricing power (agency commands premium vs tool/utility)
- Single commercial decision facilita Mexican SMB sale
- Evita atomizar value en project pricing (cada interacción "cuesta")
- Compatible con LFPDPPP recurring billing
- Habilita pure SaaS ARR narrative para investor pitch

**Implicación operativa:** cualquier propuesta de pricing structure que rompa este frame (setup fees · per-seat · per-query visible) debe ser explícitamente examinada contra este frame antes de adoptar.

**Anclaje:** `Branding/_context/04-voice-and-tone/vocabulario.md` v1.3 §2.8 + §4.5 + `08_Estrategia-Producto/_context/05-customer-development/methodology/programa-design-partners.md` v1.1 §14.

### 2.5 Competitive anchoring DUAL framing

**Frame:** competitive anchoring opera en DOS funciones distintas que el subfolder debe mantener separadas. Una sola = problema estructural.

| Función | Qué hace | Cómo se usa |
|---|---|---|
| **A · Wallet calibration** | Calibra presupuesto mental cliente vs software que ya conoce | *"Zenet $1,500 está en banda Bistrosoft Pro $1,599 · PoloTab $1,490 · Fudo Pro $1,050"* |
| **B · Category claim** | Diferencia value entregado al mismo precio | *"A ese precio, ellos te dan POS+inventario · Zenet te da agencia de 8 especialistas BoH AI-native · same wallet, different category"* |

**Ancla secundaria · vertical AI premium global** (para investor pitch + premium positioning):

| Categoría | Pricing reference |
|---|---|
| Vertical AI legal (Harvey AI) | $500-1,500 USD/seat/mes |
| Vertical AI healthcare (Hippocratic) | Premium enterprise |
| **Zenet (vertical AI restaurant)** | **~$75 USD/sucursal/mes** |

Lectura: Zenet captura <5% del premium vertical AI global. Discount es **estratégico** para accesibilidad MX SMB, NO señal de bajo value.

**Riesgo que este frame previene:** anchoring solo en wallet sin category claim → commoditiza Zenet a categoría POS+inventario · destruye value-based defense · anclorea hacia abajo.

---

## 3. Metodologías y frameworks aplicados

| Framework | Para qué · dónde se aplica |
|---|---|
| Value-based logic (§2.1) | Defensa primaria del precio · doc 03 |
| Competitive anchoring dual (§2.5) | Posicionamiento vs Bistrosoft / PoloTab / Fudo + vertical AI premium global · doc 03 |
| WTP qualitative (design partner interviews) | Validación inicial · doc 05 + ejecución en `05-customer-development/` |
| Van Westendorp PSM | Post 3+ design partners · doc 05 · willingness ladder ($1,000 / $1,300 / $1,500 / $1,800 / $2,100) |
| TIER alignment (heredado Kano-inspired) | Estructura pricing por tier vs features Phase 1 · doc 03 |
| Sensitivity analysis (tier × COGS scenario × usage intensity) | Nivel 2 sanity check viabilidad · doc 04 |
| **NO usados aquí** (defer a `05-capital-y-fundraising/`) | LTV · CAC · cohort analysis · multi-year P&L · payback formal · runway calculation · valuation |

**Razón del defer:** cada framework "NO usado aquí" requiere data conductual que pre-PMF no existe (churn observado · sales motion costs medidos · cohort comparisons). Hacerlos pre-PMF produce ficción que después ancla decisiones. Trigger de upgrade documented en §7.

---

## 4. Decisiones canónicas heredadas

Diez decisiones canónicas que este subfolder hereda. **NO se relitigan aquí** — si quieres relitigar, abrir conversación en el source doc, no en este subfolder.

| # | Decisión | Source canonical |
|---|---|---|
| 1 | **Pure subscription · 90-day minimum · annual prepay · NO setup fee · NO project pricing · NO Mantenimiento legacy** | `Branding/_context/04-voice-and-tone/vocabulario.md` v1.3 §2.8 + §4.5 · `05-customer-development/methodology/programa-design-partners.md` v1.1 §14 |
| 2 | **High-touch onboarding incluido en suscripción · uniforme cross-tier · agent-led con human oversight** | `programa-design-partners.md` v1.1 + decisión del subfolder (no tier differentiation por onboarding) |
| 3 | **Pricing per-sucursal NO per-user** — cap users + interaction intensity manejada via internal caps · agency framing preserved | Decisión del subfolder · anclada en agency-as-SaaS framing §2.4 |
| 4 | **Pricing structure 4 tiers** (Esencial · Pro · Multi-Sitio · Enterprise) — WhatsApp diferenciado por service level (Esencial **ventana 10 hrs/día customizable** · Pro/Multi-Sitio 24/7 instant · Enterprise 24/7 + dedicated CS + Contract SLA) · **AI agents Phase 1 incluidos full cross-tier** (integrated MVP · NO gating sustractivo · cf. §6.7) · agency framing preserved | Decisión del subfolder · anclada en `02-features-y-scope/00-fase-1-mvp-scope.md` v0.1 · refinement WhatsApp Esencial documentado en `03-pricing-tiers-hipotesis.md` v0.1 §3.2 |
| 5 | **Enterprise tier productizado como "Custom · contact sales"** — NO list price Phase 1 · target Sub-segmento C · capability fulfillment Phase 2 | Decisión del subfolder · anclada en `01-industry-and-market/04-segmentacion-de-mercado.md` v1.0 |
| 6 | **Internal capacity caps tracked religiosamente · NO visible al cliente** — soft signaling agency-styled · hard ceiling solo en outlier abuse (2x soft cap · cf. §6.5) | Decisión del subfolder · anclada en agency-as-SaaS framing §2.4 + COGS protection §6.6 |
| 7 | **Add-ons (Heavy Usage Pack · Specialty Agent Pack) como roadmap Phase 1.5+** — reactivos post observación design partners · NO fragmentadores de primera venta | Decisión del subfolder · anclada en `02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 |
| 8 | **Contable externo NO cuenta hacia cap users · siempre incluido cross-tier** — buying committee load-bearing | `02-customer-research/05-buying-process-y-criterios-de-decision.md` v0.7 §10 (multi-threading 68% · *"el contador autoriza"*) |
| 9 | **Pricing uniforme dentro de MX** (no per-plaza · descuentos por etapa NO por geografía) | `01-industry-and-market/07-geografia-y-expansion.md` v1.0 §17 |
| 10 | **Phase 1 = TIER 1 + TIER 2A · Phase 1.5 = TIER 2B · Phase 2 = TIER 3** | `02-features-y-scope/00-fase-1-mvp-scope.md` v0.1 + `01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 |

---

## 5. Decisiones abiertas (validar con design partners)

Ocho decisiones que el subfolder documenta como **hipótesis directional** pero NO cierra Phase 1. Validación real ocurre en `05-customer-development/` con design partners · alimenta v0.2 + v1.0 del subfolder.

| # | Decisión abierta | Hipótesis Phase 1 | Trigger de cierre |
|---|---|---|---|
| 1 | Pricing exacto por tier | $1,500 / $1,999 / $1,799/sucursal (anchor) · rango defendible $1,200 (downside) - $1,800-2,000 (upside) | PSM con 3+ design partners + 2+ cierres reales |
| 2 | Cap exacto active users por tier | 5 / 8 / 10 | Behavioral data Months 1-3 (¿forced upgrade prematura? ¿holgado?) |
| 3 | Internal cap interactions/sucursal por tier | ~1,200 / 2,000 / 2,500 | Behavioral data Months 1-3 (interaction patterns observados) |
| 4 | Annual prepay descuento % específico | TBD (rango hipótesis 10-20%) | Cierres reales con annual prepay aceptación |
| 5 | Descuento Socio Fundador rango exacto | 20-30% | Cierres Fase 0 + feedback design partners |
| 6 | Add-on pricing Heavy Usage Pack | $600-800 hipótesis | Phase 1.5 · post observación design partners outliers |
| 7 | Enterprise tier capability productization timing | Phase 2 hipótesis | Primer Sub-segmento C inbound o outbound conversion |
| 8 | Sub-tiers dentro de cada nivel (Básico/Pro/Multi escalonado) | NO Phase 1 (4 tiers simples) | Si behavioral data muestra fragmentación natural · v0.2+ |

**Disciplina:** cada hipótesis se documenta con `[Hipótesis sin validar]` label + defensa + trigger. NO se elimina el label hasta que evidencia conductual cierre.

---

## 6. Disciplina y principios estructurales

Ocho principios invariables que gobiernan la práctica del subfolder. Cualquier doc que los rompa debe ser revisado contra esta sección.

### 6.1 Hipótesis labeling explícito

Tres tags canónicos en uso cross-doc:

- `[Hipótesis sin validar]` — número/decisión sin evidencia conductual
- `[Estimación cualitativa]` — derivado de research backbone o triangulación
- `[Anclado en research]` — directamente soportado por doc fuente con cita inline

**Trampa que previene:** collapse de hipótesis a "hecho" silenciosamente entre versiones del doc.

### 6.2 Sensitivity NO substitute for real data

Rangos (downside · anchor · upside) son **disciplina anti-anchoring**, NO precisión. Mostrar rango previene fijar punto único como verdad pre-evidencia. Trigger de colapso a punto único: behavioral data con 3+ design partners.

### 6.3 Dos escenarios COGS canónicos

Toda viabilidad económica modela ambos escenarios:

| Escenario | Estructura | Cuándo aplica | Defiende pricing long-term? |
|---|---|---|---|
| **A · Founder-bootstrap Phase 1** | Anthropic API + WhatsApp Business + Supabase + tools (founder labor NO en cash COGS) | Q3 2026 - Mes 6+ | NO — gross margin inflated artificialmente |
| **B · Post-seed steady-state** | Lo anterior + CS hire amortizado + onboarding labor amortizado | Mes 6-12 post-seed | SÍ — gross margin realista |

**Razón:** sin esta separación, pricing luce artificialmente rentable Phase 1 → fija anchoring optimista que se rompe al hire.

### 6.4 Tres escenarios pricing canónicos

Anti-anchoring premature · todos los docs operativos del subfolder mantienen tres escenarios:

| Escenario | Multi-Sitio referencia | Cuándo defender |
|---|---|---|
| **Downside** | $1,200/sucursal | Si WTP softer than expected en PSM |
| **Anchor** ⭐ | $1,799/sucursal (Multi-Sitio · $1,500 Esencial · $1,999 Pro) | Default Phase 0 design partners |
| **Upside** | $1,800-2,000/sucursal | Post-validación 3 design partners con NPS≥40 + willingness >$1,800 PSM |

Cada uno con defensa explícita + trigger de transición documentado en doc 03.

### 6.5 Internal vs visible caps principle

**Principio:** *trackeamos religiosamente · signaleamos suavemente · hard-stop solo en catastrophe.*

| Tipo de límite | Visibilidad cliente | Mecanismo |
|---|---|---|
| Internal capacity cap (soft target) | Invisible | Dashboard interno Zenet · trend analysis |
| Soft signaling (~80% threshold) | CS conversation reactiva | *"Tu agencia está procesando uso intenso · conversemos del próximo tier"* |
| Hard ceiling (~2x soft cap) | Rate-limiting en outlier abuse | *"Tu agencia está saturada · refuerzo en marcha"* (agency-styled · last resort) |

**Razón estructural:** visible caps rompen agency framing · activan utility-bill anxiety MX SMB · habilitan comparison contra ChatGPT/OpenAI pricing → destruyen categoría.

### 6.6 Riesgo estructural AI inference COGS · defensa multi-capa

WhatsApp 24/7 access amplifica usage vs SaaS tradicional · COGS escala con engagement, NO se queda flat como SaaS clásico (compute marginal cost ≈ 0). Defensa requiere **cinco capas combinadas**:

| Capa | Mecanismo | Impacto estimado |
|---|---|---|
| 1 | Architecture cost reduction (model routing Haiku/Sonnet/Opus · context window discipline · response caching · prompt compression · pre-computed insights batch nocturno) | -40% a -60% COGS · lever más alto |
| 2 | Soft caps + alertas CS reactivas | Identifica outliers temprano |
| 3 | Tier differentiation por service level (business hours vs 24/7) | Captura cost-driver real en tier upgrade |
| 4 | Add-ons reactivos Phase 1.5+ (Heavy Usage Pack) | Captura clientes outlier sin fragmentar primera venta |
| 5 | Worst-case pricing protection ($2,200-2,500/sucursal upside scenario) | Last resort si Capas 1-4 fallan |

Tratamiento detallado: doc 04 (sensitivity tables × tier × COGS scenario × usage intensity).

### 6.7 Tier differentiation ADITIVA NO sustractiva (Phase 1)

**Principio:** tiers escalan scope (users · sucursales · service window · specialty agents Phase 2+) · nunca sustraen capabilities del producto core.

| Diferenciación | Aditiva (OK) | Sustractiva (NO) |
|---|---|---|
| Number of users incluidos | ✓ | — |
| Number of sucursales | ✓ | — |
| WhatsApp service window | ✓ (business hours vs 24/7) | — |
| Cross-sucursal analytics | ✓ (solo aplicable a multi-sucursal · scope condicional) | — |
| Internal capacity caps | ✓ (operacional invisible) | — |
| SLA / dedicated CS (Enterprise) | ✓ | — |
| Phase 2 specialty agents | ✓ (extensions futuras · genuine add-on territory) | — |
| **Phase 1 AI agents (E1-E6 + H1-H2)** | — | **✗ NO gatear** |

**Razón estructural:** Phase 1 MVP es sistema integrado. Gating de agents Phase 1:

- Rompe agency framing (*"tu agencia con la mitad del staff missing NO es agencia"*)
- Contradice value-based logic (incomplete BoH system es unusable · captura cero value)
- Forza manual workarounds (silent churn driver documented en `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` v0.5 §4.6)
- Crea tier upgrade pressure punitiva (*"paga más o hazlo tú"*)

Phase 2 specialty agents (F5 agentes especializados · F6 cumplimiento · custom) son el lugar correcto para agent-level gating · genuine add-on territory.

### 6.8 Qué NO hacemos aquí

Defer a `Product Strategy/_context/05-capital-y-fundraising/`:

- Modelo financiero proyectado 3-5 años
- Cohort analysis (no cohorts pre-PMF)
- Sensitivity tables para fundraising
- Runway + capital requirements
- LTV/CAC formal con churn observado
- Valuation + dilution modeling

Hacer estos análisis aquí pre-PMF produce ficción que después ancla decisiones de pricing equivocadamente.

---

## 7. Versionado · ownership · cross-workspace

### 7.1 Versionado del subfolder

| Transición | Trigger | Estado actual |
|---|---|---|
| Pre-v0.1 → v0.1 | Outline aprobado + decisiones canónicas heredadas declaradas + scaffold 6 docs redactados | 🚧 En curso 2026-05-29 (doc 00 cerrado · docs 01-05 pending) |
| v0.1 → v0.2 | 3-5 design partners con WTP qualitative observada + 2+ cierres reales | Pendiente |
| v0.2 → v1.0 | Data real retention + willingness post-90-day + churn observado | Pendiente |
| v1.0 → v2.0 | Geographic Phase 5 (LATAM · Serie A) o pricing model overhaul | Pendiente · futuro |

### 7.2 Cross-doc versioning

Docs del subfolder evolucionan a ritmos distintos · NO requieren version-bump sincronizado:

- **Doc 04 (viabilidad económica)** probablemente más rápido · sensitivity tables se refinan con cada cohort observation
- **Doc 01 (modelo comercial)** probablemente más lento · decisiones canónicas heredadas son estables
- **Doc 05 (WTP validation plan)** se vuelve SOP cuando madura · candidato a migrar a `Product Strategy/_sop/` v1.0+

### 7.3 Ownership

- **Owner Phase 1:** founder (Alan Bahena) · TEMPORARY
- **Migration path:** post pre-seed → Head of Product/Strategy hire · convención cross-workspace ownership documented en `Product Strategy/_context/00-marco-y-metodologia/00-marco-product-strategy.md` v1.1

---

## 8. Cómo usar este subfolder · orden de lectura

### 8.1 Orden de redacción y first read

Dependencias upstream → downstream:

```
00 marco (este doc)
  ↓
01 modelo comercial y términos
  ↓
02 programa Socio Fundador offer
  ↓
03 pricing tiers hipótesis
  ↓
04 viabilidad económica y COGS
  ↓
05 WTP validation plan
```

**Razón del orden:** cada doc upstream desbloquea el siguiente · pricing tiers (03) → viabilidad (04) → WTP (05) es la secuencia natural *hipótesis de precio → defendemos desde nuestro lado → validamos desde el lado del cliente*.

### 8.2 Por rol/uso

| Rol/uso | Docs relevantes |
|---|---|
| Founder estratégico | Todos |
| Sales motion (cómo cobrar · qué incluir) | 01 + 02 + 03 |
| Investor pitch (defensa pricing + economics) | 03 + 04 + 05 |
| Design partner pitch (Fase 0 specifics) | 02 |
| Financial modeling completo | Empezar aquí (04 como punto de entrada) · profundizar en `05-capital-y-fundraising/` |
| Compliance · contracts · refund policy | 01 |
| Future PSM execution | 05 + `08_Estrategia-Producto/_context/05-customer-development/` |

### 8.3 Disciplina de uso

- **NO relitigar §4** (decisiones canónicas heredadas) sin reabrir conversación en source doc primero
- **SÍ revisar §5** (decisiones abiertas) periódicamente · son hipótesis con triggers explícitos
- **Honrar §6** (disciplina y principios estructurales) en toda redacción — hypothesis labeling + dual COGS + tres pricing scenarios + internal vs visible caps + tier differentiation aditiva
- **Aplicar voice/tone** de `Branding/_context/04-voice-and-tone/` en cualquier output customer-facing que derive del subfolder

---

## Notas finales

Este doc cierra v1.0 con outline + decisiones consolidadas tras conversación foundational 2026-05-28/29.

**Próximas revisiones esperadas:**

- **Trigger de actualización menor (v1.0 → v1.1):** ajustes a §4 o §6 si los docs siguientes (01-05) revelan decisiones canónicas o principios que valen elevar al marco
- **Trigger de actualización mayor (v1.0 → v2.0):** post v0.2 del subfolder · re-evaluación de frames §2 si behavioral data design partners contradice asunción fundamental

**Pendientes inmediatos:**

1. Redactar doc 01 (modelo comercial y términos) v0.1
2. Continuar secuencia 02 → 03 → 04 → 05 con checkpoint approval por doc
3. Actualizar CLAUDE.md tras cierre v0.1 del subfolder completo

---

*Última actualización: 2026-05-29.*
