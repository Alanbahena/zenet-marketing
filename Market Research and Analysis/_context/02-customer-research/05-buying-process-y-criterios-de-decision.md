---
name: Buying process y criterios de decisión
description: Sales playbook para Zenet — sales cycle de 8 stages, decision criteria con tradeoff analysis, willingness-to-pay deep dive, deal-breakers, buying signals, anti-patterns y patrones Mexican-specific.
type: customer-research
research_stage: discovery-pre-PMF
last_updated: 2026-05-07
status: active
version: 0.6
owner: Alan Bahena
---

# Buying process y criterios de decisión

## 1. Propósito + diferencia con docs vecinos

### 1.1 Qué responde el documento

¿Cómo se mueve un deal desde lead a cierre? ¿Qué stages atraviesa, qué criterios se evalúan en cada uno, cuándo aparecen signals de readiness vs. stalling, cómo funciona el willingness-to-pay y qué deal-breakers cierran la puerta?

Doc 05 es el **sales playbook** de Zenet — operacional, no analítico. Provee el manual que sales motion + customer success usan para mover deals concretos.

### 1.2 Diferencia frente a docs vecinos

| Doc | Qué responde | Lente |
|---|---|---|
| `02-jobs-to-be-done.md` | Qué progreso busca el operador | JTBD — atemporal |
| `03-pains-y-workarounds.md` | Qué duele y cómo lo resuelve hoy | Inventario transversal |
| `04-customer-journey-detallado.md` | Cómo evoluciona el dolor y la búsqueda en el tiempo (incluye §6 multi-stakeholder) | Lifecycle full |
| **`05-buying-process-y-criterios-de-decision.md`** | **Cómo se mueve un deal desde lead a cierre, etapa por etapa** | **Sales playbook** |
| `06-objeciones-y-fricciones-de-adopcion.md` | Por qué frena el deal en momentos específicos | Friction-focused |

Doc 05 absorbe lo de doc 04 §6 (composición buying committee, criteria divergence, three-session demo) y lo profundiza desde la lente de **sales motion sequencing + decision criteria tradeoff analysis + willingness-to-pay**. NO duplica — refina hacia operativo.

### 1.3 Disciplina de evidencia

Estamos en `discovery-pre-PMF` (cf. doc 00 §4): sin pipeline real de deals cerrados, los stages, conversion rates y timing son **hipótesis estructuradas** sostenidas por triangulación cross-doc + benchmarks externos. Cada sub-sección declara dónde está sólida y dónde es `[HIPÓTESIS PRE-PMF]`.

---

## 2. Marco del buying process aplicado

### 2.1 Modelo blended: stages + gates + signals

El doc estructura el buying process en tres dimensiones combinadas:

- **Stages** — secuencia de momentos del deal (Lead → Discovery → Demo Sessions × 3 → *Contable* engagement → Negociación → Cierre).
- **Gates** — condiciones que deben cumplirse para avanzar al siguiente stage. Si gate no se cumple, deal stalls o muere.
- **Signals** — comportamientos observables del buyer que indican readiness (avanza) o stalling (atascado) — verbal, behavioral, stakeholder.

### 2.2 Disciplina por stage

Cada stage en §3 declara:
- **Descripción** — qué pasa.
- **Stakeholders activos** — quién participa (cf. doc 04 §6.1-§6.6).
- **Duración típica** — con caveat para Mexican SMB.
- **Criteria evaluadas** — qué decide el buyer aquí.
- **Gate to next stage** — condición de avance.
- **Signals of progress** — readiness indicators.
- **Anti-signals** — stalling indicators.
- **Sales motion específica** — qué hace el vendor.

---

## 3. El sales cycle de Zenet — 8 stages

### 3.1 Stage A: Lead recibido

**Descripción:** prospect hace contacto inicial. Origen del lead determina mucho del resto del cycle.

**Stakeholders activos:** uno solo (frecuentemente el gerente operativo o el dueño directo).

**Duración típica:** evento puntual, 0 días.

**Criteria evaluadas (por Zenet en este stage):**
- Origen del lead — peer/consultor warm intro vs. inbound directo vs. evento.
- Calificación BANT-light: empresa dentro de scope (workspace `02-definicion-y-alcance.md`) + signal de trigger event reciente.
- Aplicación del scoring de doc 05 ICP §7 (workspace).

**Gate to next stage:** lead califica como SQL (≥70 puntos, threshold workspace ICP §7.3) y stakeholder de contacto está dispuesto a discovery call ≤7 días.

**Signals of progress:**
- Llegó vía referencia de consultor/peer — alta probabilidad (cf. doc 03 §5.7-§5.8 trust hierarchy peer > vendor).
- Trigger event articulado en mensaje inicial.
- Identifica role propio (no "consultando para alguien más").

**Anti-signals:**
- Cold inbound sin contexto.
- Pregunta solo precio sin contexto.
- Atribuye problemas al equipo (anti-perfil 1 ICP doc 05 §6.2).

**Sales motion:** respuesta rápida (<24 hrs). Si referido, mencionar referente. Calendly link para discovery, no llamada inmediata (respeta time-availability paradox del operador, cf. doc 03 §5.5).

### 3.2 Stage B: Discovery call

**Descripción:** llamada inicial de calificación. Identifica champion, valida problema estructural, mapea buying committee.

**Stakeholders activos:** típicamente gerente operativo (champion potencial). A veces dueño directo.

**Duración típica:** 30-45 min, 1-3 días post-lead.

**Criteria evaluadas (por ambos lados):**
- Zenet evalúa: champion development potential, naturaleza del trigger event, mapeo de stakeholders (¿hay socio? ¿chef ejecutivo? ¿*contable* externo? ¿qué peso tiene cada uno?).
- Buyer evalúa: ¿este vendor entiende mi negocio? ¿hablan mi idioma o me hablan en tech?

**Gate to next stage:** mapeo claro del buying committee + champion identificado + agendamiento de Demo Session 1 confirmado.

**Signals of progress:**
- Champion (típicamente gerente) muestra dolor articulado en lenguaje del operador.
- Acepta agendar dedicated demo en sitio (no demo virtual express).
- Nombra al menos 2 de los 4 stakeholders del committee (dueño + gerente + chef y/o *contable*).
- Articula trigger event concreto reciente.

**Anti-signals:**
- Atribuye problemas al equipo (anti-perfil 1).
- Busca "magia AI" / reemplazo de personas (anti-perfil 2).
- Lista 3+ softwares churneados sin razones específicas (anti-perfil 3 — switcher serial).
- No claridad sobre quién decide (anti-perfil 4 — conflict societario).

**Sales motion:** discovery questions del workspace ICP §6.3 ("¿cuál es el problema más grande hoy en tu operación?", "¿qué ha pasado en los últimos 6-12 meses que te llevó a buscar esto?", "¿qué software has usado antes y por qué dejaste de usarlo?"). NO presentar producto en este stage — solo escuchar y mapear.

### 3.3 Stage C: Demo Session 1 — Operations Manager

**Descripción:** primera demo formal. Champion development primary objective. Cf. doc 04 §6.10.

**Stakeholders activos:** gerente operativo + sales engineer/founder de Zenet.

**Duración típica:** 60-90 min, 7-14 días post-discovery.

**Criteria evaluadas (cf. doc 04 §6.4):**
- Ease of daily use (highest-frequency user).
- Data import capability (CSV vs manual entry).
- Cross-location management (single interface).
- POS integration — **caveat Zenet Fase 1:** flujo batch upload manual con 3 modes (cf. doc 04 §3.6.7), NO API. Articular esto explícitamente en demo.

**Gate to next stage:** champion convencido + acuerda agendar Demo Session 2 con chef ejecutivo + comparte business case template para internal pitch al dueño.

**Signals of progress:**
- Champion toma notas, hace preguntas operativas específicas ("¿cómo manejaríamos X workflow concreto?").
- Pide acceso a sandbox o trial.
- Acepta llevar la conversación al chef ejecutivo (no intentar saltarlo).
- Solicita ROI calculator con su data real.

**Anti-signals:**
- Champion pasivo, sin preguntas.
- "Voy a comentarlo con el dueño y te aviso" sin agenda concreta.
- Resistencia a involucrar chef o contable.

**Sales motion:**
- Live demo (no recorded) con su workflow específico — 79% buyers prefer live (Query 5).
- Champion development tools: business case template, one-pager con competitor benchmarks (Excel/POS-only/ERP), sample ROI calc.
- Cerrar Demo Session 2 con chef antes de despedirse.

### 3.4 Stage D: Demo Session 2 — Executive Chef (separate)

**Descripción:** demo dedicada al chef ejecutivo, en cocina, en tablet. **Neutralize chef resistance ANTES de que se vuelva blocker post-purchase.** Cf. doc 04 §6.5 + §6.10.

**Stakeholders activos:** chef ejecutivo + sales engineer Zenet. Champion (gerente) puede acompañar pero no liderar.

**Duración típica:** 30-45 min, 5-10 días post-Demo 1.

**Criteria evaluadas (cf. doc 04 §6.5):**
- Recipe integrity (recetas se sienten *suyas*, no abstracted).
- Yield + sub-recipe accuracy (flexible vs fixed).
- NOT additional reporting burden.
- Kitchen-specific UX (tablet, no laptop).

**Gate to next stage:** chef no expresa veto activo + acepta participar (no liderar) en Demo Session 3 con dueño.

**Signals of progress:**
- Chef interactúa con tablet — entra una receta de su menú, ajusta yield, observa cost calc.
- Hace preguntas culinarias ("¿qué pasa si cambio el corte del pescado a media porción?").
- Verbal acceptance: "esto sí me sirve" o equivalente.

**Anti-signals:**
- Chef silencioso, brazos cruzados, deferring al gerente.
- "Sí, sí, está bien" sin engagement (high power distance "yes" — cf. doc 04 §6.12).
- Frame del sistema como "control" o "surveillance" en preguntas.

**Sales motion:**
- **NUNCA combinar con Demo Session 1.** En combined session, chef defers al manager y real concerns no surface (Query 5 explicit warning).
- Frame: *"tu kitchen's financial health dashboard"* NO *"nuestro cost control system."*
- NO mostrar reports que expose kitchen inefficiency (waste %, prep yield gaps) — wrong entry point. Usar solo recipe entry + yield + cost alert.
- Si chef expresa silent resistance, NO push — agendar follow-up 1:1 sin gerente.

### 3.5 Stage E: Demo Session 3 — Owner + Operations Manager

**Descripción:** business case presentation. Champion lidera, vendor apoya. **Convert economic buyer.** Cf. doc 04 §6.10.

**Stakeholders activos:** dueño-operador + gerente operativo (champion como co-presenter) + sales engineer Zenet.

**Duración típica:** 20-30 min, 3-7 días post-Demo 2.

**Criteria evaluadas (cf. doc 04 §6.3):**
- ROI y payback period — quantified saving.
- Cross-location visibility — single view de variance.
- Control without dependency — vulnerability si vendor falla.
- Pricing model simplicity (per-location > per-user > consumption).

**Gate to next stage:** dueño avanza a Stage F/G — agendamiento de Ficha Técnica para *contable* + apertura de negociación.

**Signals of progress:**
- Dueño hace ROI questions específicas ("¿cuántos pesos al mes recupero en mermas?").
- Pide referencias de operadores similares en TJ/BC (peer validation).
- Pregunta timing concreto ("¿cuándo podríamos arrancar?").
- Introduce *contable* o socios al loop ("voy a mandarle la info a mi contador").

**Anti-signals:**
- Dueño focused solo en precio sin discutir valor.
- Pregunta vague sobre "vamos a pensarlo" sin commitment.
- Champion ya no presenta con autoridad — back-tracking.
- *Contable* nunca mencionado (red flag — confirmar que no es gatekeeper omitido).

**Sales motion:**
- **Champion lidera la presentación.** Vendor apoya con datos cuando se piden.
- Numbers-first, no feature-first (Query 5 — owner wants 15-min business case, no product walkthrough).
- ROI con su data real (food cost, revenue, sucursales).
- Mencionar pilot 30-60 días disponible si applicable.
- Cerrar con next step concreto: *"te mando Ficha Técnica para tu contador esta semana."*

### 3.6 Stage F: *Contable* engagement (parallel desde Stage C)

**Descripción:** track parallel al main demo cycle. **Inicia desde Stage C, NO post-Stage E** — engaging el *contable* tarde es deal-killer documentado (cf. doc 04 §6.6).

**Stakeholders activos:** *contable* externo (despacho contable del operador) + technical specialist Zenet.

**Duración típica:** 1-3 semanas en paralelo a Stages C-E. Touchpoint primary: 1 email + 1 llamada técnica.

**Criteria evaluadas (cf. doc 04 §6.6):**
- CFDI 4.0 compliance + PAC certification.
- Compatibility con CONTPAQi/Aspel del cliente.
- Cost justification + ROI lens fiscal.
- Data ownership + SAT audit exposure.

**Gate to next stage:** *contable* approves o no opone activamente. Approval es preferred; "no opose" es minimum viable.

**Signals of progress:**
- *Contable* responde Ficha Técnica con preguntas técnicas específicas (no genéricas).
- Solicita demo dedicada con focus en exports a su accounting platform.
- Confirma que data export es compatible.

**Anti-signals:**
- *Contable* no responde 7+ días.
- Solicita SAT audit trail de Zenet con tone defensivo.
- Recomienda al dueño quedarse con SoftRestaurant (incumbent + on-premise — anti-perfil 6 doc 05 §6.2).

**Sales motion:**
- Engage proactively al *contable* desde Stage C, NO esperar a Stage E. Pedirle al champion el contacto del *contable* en Discovery (Stage B).
- Material primary: ***Ficha Técnica Contable*** (one-pager addressing CFDI integration, PAC, CONTPAQi/Aspel export, SAT audit trail).
- NO marketing material — technical specs.
- Si contable bloquea: evaluar opción "Zenet para Contadores" view (cf. doc 04 §6.6 strategic recommendation, modeled on Bind ERP).

### 3.7 Stage G: Negociación + pilot agreement

**Descripción:** términos finales — pricing, contract length, pilot conditions, implementation timeline.

**Stakeholders activos:** dueño + gerente + Zenet.

**Duración típica:** 1-2 semanas post-Stage E con *contable* approval (Stage F closed).

**Criteria evaluadas:**
- Pricing accept/negotiate (cf. §5).
- Contract terms — anual vs mensual, opt-out clauses.
- Pilot conditions — 1 sucursal × 30-60 días con criterios de success documentados.
- Implementation plan — fechas, recursos, support level.

**Gate to next stage:** términos acordados verbalmente + contract draft enviado.

**Signals of progress:**
- Dueño negocia detalles específicos (signal de commitment cognitivo).
- Acepta pricing con discount Fase 0 (20-30% workspace doc 07 §17) sin pushback agresivo.
- Pilot conditions razonables y reciprocas.

**Anti-signals:**
- Demands absurdos (descuento 70%+, contract terms unilateral).
- "Necesito consultar más con [stakeholder no mencionado antes]" — gatekeeper omitido.
- Pilot indefinido sin fecha de evaluación.

**Sales motion:**
- Pilot 30-60 días en 1 sucursal como save move + risk reduction.
- Annual contract preferred (Query 3: monthly customers 3-5x más propensos a churn) con discount como incentive.
- Implementation plan claro: kickoff date + onboarding team de Zenet.

### 3.8 Stage H: Cierre + onboarding kickoff

**Descripción:** firma del contrato, pago inicial, kickoff de onboarding (transición a doc 04 §3.6).

**Stakeholders activos:** dueño firma; gerente recibe handoff a CS team.

**Duración típica:** 3-7 días post-Stage G.

**Criteria evaluadas:** cierre administrativo — payment method, billing setup, account creation, contract signing.

**Gate to next stage (a doc 04 §3.6 onboarding):**
- Contract firmado.
- Pago inicial confirmado.
- Onboarding kickoff agendado dentro de 7 días post-firma.

**Signals of progress:**
- Pago en primeras 48 horas.
- Champion + dueño + chef + *contable* todos en kickoff invite.
- Operador ya tiene fecha tentativa de go-live.

**Anti-signals:**
- Pago retrasa >7 días.
- Solo gerente en kickoff — owner missing (single-threaded risk, cf. doc 04 §6.11).
- Operador empieza a postponer kickoff con razones operativas.

**Sales motion:**
- Multi-thread desde Day 1 (Query 5 critical insight): capturar contact info de owner + manager + chef + *contable* + accounting platform.
- CS handoff document con todo el contexto del sales cycle.
- Set expectations: TTFV realista 30-45 días para Tier 2 (cf. doc 04 §3.7.5 ajustado por Fase 1 manual upload).

---

## 4. Decision criteria — depth matrix + tradeoff analysis

### 4.1 Matrix de criterios por stakeholder (heredado doc 04 §6.7)

| Criterio | Dueño | Gerente Ops | Chef | *Contable* |
|---|---|---|---|---|
| Financial ROI | ★★★ | ★★ | ★ | ★★★ |
| Ease of daily use | ★ | ★★★ | ★★★ | ★ |
| Cross-location visibility | ★★★ | ★★★ | ★ | ★ |
| Recipe integrity | ★ | ★★ | ★★★ | ✗ |
| **CFDI / SAT compliance** | ★★ | ★ | ✗ | **★★★** |
| POS integration (manual batch en Fase 1) | ★★ | ★★★ | ★★ | ★ |
| Pricing simplicity | ★★★ | ★★ | ★ | ★★★ |
| Vendor reliability | ★★ | ★★★ | ★★ | ★ |

### 4.2 Tradeoff dynamics — el net new del doc

Cuando criteria conflict entre sí, ¿qué wins? Hipótesis estructuradas para el dueño-operador del beachhead:

**ROI vs. Pricing simplicity:**
- Si pricing model is complex (per-user × per-location × per-feature), incluso ROI fuerte se diluye por cognitive cost de explicarlo internamente.
- **Wins:** simplicidad de pricing model. Operador prefiere pricing flat aunque overall costo sea ~10% mayor que pricing model "óptimo" complejo.
- **Confirmado con Query 3 (2026-05-07):** transparency score per-location flat = 10/10 vs hybrid = 7/10 vs usage-based = 5/10. **79% de buyers prefer brands con clear upfront pricing; 70% frustrated por hidden fees**. Transparency es proxy directo de trust en high-uncertainty-avoidance Mexico (UAI 82).

**Cross-location visibility vs. Ease of daily use:**
- Operador 2-3 sucursales valora ambos. Si visibility cross-sucursal requiere setup pesado del gerente, ease wins inicialmente.
- **Wins:** ease en evaluation; visibility wins post-onboarding como driver de retention.

**ROI vs. Control without dependency:**
- ROI claro puede mover deal, pero si dueño percibe vendor lock-in fuerte (data no exportable, contracts long-term sin opt-out), el "control" wins.
- **Wins:** control si vendor parece "captive". Mensajería de Zenet debe enfatizar data ownership + opt-out clauses.

**CFDI compliance vs. ROI (perspectiva del *contable*):**
- *Contable* nunca trade-off compliance por ROI. Compliance gap = automatic veto independiente de ROI.
- **Wins:** CFDI compliance. Sin esto, no hay deal con *contable* presente.

**Recipe integrity vs. Cost interpretation (perspectiva del chef):**
- Chef puede tolerar cost interpretation si recipe entry no se siente surveillance. Si feels surveillance, recipe integrity wins automáticamente.
- **Wins:** depende del framing del vendor. Frame "tu dashboard culinario" → cost interpretation acepta. Frame "tu reporte de waste" → recipe integrity defends y deal stalls.

### 4.3 Decision tree típico del dueño cuando criteria conflict

`[HIPÓTESIS PRE-PMF]` — basado en triangulación cross-doc + Mexican SMB business culture (doc 04 §6.12):

1. **Primera filtro:** ¿el *contable* aprueba? Si no → no avanza independiente del resto. (Compliance es absoluta.)
2. **Segunda filtro:** ¿el chef no expresa veto activo? Si chef expresa resistance fuerte → dueño postpone.
3. **Tercera filtro:** ¿hay peer validation o consultor endorsement? Sin esto, *confianza* no acumula y deal stall pasado Stage E.
4. **Cuarta filtro:** ¿ROI es articulable en MXN/mes que recupero? Si abstracción → bajo commitment.
5. **Quinta filtro:** ¿pricing es simple y predecible? Per-location wins.
6. **Sexta filtro:** ¿pilot 30-60 días disponible? Reduce risk percibido al 70%+ del operador.

Si los 6 filtros pasan → cierre probable. Si 4-5 pasan → negociación posible. Si <4 → deal muere o stall indefinido.

### 4.4 Sensibilidad a cada criterio por stage del sales cycle

| Criterio | Stage donde más se evalúa |
|---|---|
| Pricing simplicity | Stage E (Owner) + Stage G (Negociación) |
| ROI claro | Stage E (Owner) |
| Ease of daily use | Stage C (Manager demo) |
| Recipe integrity | Stage D (Chef demo) |
| CFDI compliance | Stage F (*Contable*) |
| Cross-location visibility | Stage C + Stage E |
| Pilot disponible | Stage G |
| Vendor reliability | Stage B (Discovery — peer references) |

---

## 5. Willingness-to-pay — sección densa

> ℹ️ **Estado de evidencia post-triangulación (Query 1, 2026-05-07):** la sección se reforzó significativamente con landscape completo de pricing Mexico-native + LATAM + US analog BOH-specific + Canadian WTP study. **Recalibración crítica:** $1,500 MXN/sucursal/mes está en **upper-mid / lower premium tier** del mercado mexicano (no mid-tier como inicialmente posicionado) — Bistrosoft Pro $1,599, PoloTab ~$1,490, Fudo Pro $1,050 lo bracket. **Recomendación reforzada:** MXN-native pricing (no USD) + per-location flat fee. **Gap declarado:** no formal WTP survey for Mexican independent restaurant BOH SaaS exists — primera 5-10 design partner interviews son literatura primaria.

### 5.1 Evidencia local actual

**Validación primaria:** Murguía en demo MVP 2026-04-01 confirmó que **$1,500 MXN/sucursal/mes** es razonable para el segmento objetivo. `[Demo Murguía 2026-04-01]`. Confianza en este dato: **Media** — Murguía es chef-consultor, no dueño-operador del beachhead pagando con su cartera (cf. doc 01 §3.2 + §4.2 jerarquía de evidencia).

**Status según business context v1.0:** marked Validated con confidence Medium — *"Needs broader validation with 5-10 more conversations."* Pricing range business context: **$1,000-$2,000 MXN/sucursal/mes** ($55-110 USD).

**Triangulación con landscape de mercado (Query 1):**

`[Benchmark sectorial / Perplexity 2026-05-07]` — el $1,500 MXN se posiciona dentro de la siguiente estructura de tiers documentada en mercado mexicano:

| Tier | Range MXN/mes | Vendors típicos en este tier | Posicionamiento |
|---|---|---|---|
| Cheap/accessible | $360-699 | Fudo Inicial $360, SICAR $499, Poster Mini $495, Bistrosoft Web $499 | "Primer paso" — operadores digitalizando por primera vez |
| Mid-tier | $700-1,179 | SoftRestaurant PRO $999, Fudo Avanzado $690, Bistrosoft Light $949, Poster Business $837 | Sweet spot comercial — established independents seeking real operational control |
| **Premium / full-featured** | **$1,050-1,599** | Fudo Pro $1,050, **PoloTab ~$1,490, Bistrosoft Pro $1,599, Dyshez $2,100 anual** | Multi-location management, advanced recipe costing, full inventory control, integrations |
| Expensive / barrier ceiling | >$2,100 | Solo Dyshez en este rango (con narrative ROI explícito) | Operadores 1-5 sucursales tienden a disengage sin clear ROI story |

**Implicación para Zenet:** **$1,500 MXN posiciona Zenet en lower premium tier**, no mid-tier. Comparables directos: Bistrosoft Pro ($1,599), PoloTab (~$1,490). Esto es **defensible y dentro del market range, pero requires premium positioning narrative** — no se puede vender como "alternativa accesible". Debe articular el premium feature set (cross-location intelligence, cognitive interpretation, augment-not-automate framing).

**Mexican SaaS pricing tier guidance (Magokoro 2026):**
- Básico: MXN 500-800/mes
- **Profesional: MXN 1,500-2,500/mes** ← Zenet en entry de este tier
- Empresarial: MXN 5,000+/mes

Ubicación de Zenet $1,500 = **entry point del Profesional tier** — alineado con guidance del mercado.

### 5.2 Anchoring del operador — competitor pricing landscape documentado

> Refinado con Query 1 (2026-05-07) — pricing competitor antes inferred ahora documentado con sources.

El precio de Zenet no se evalúa en aislamiento — se evalúa contra anchors mentales del operador. Tabla de anchors actualizada con benchmarks publicados:

| Categoría | Costo documentado | Cómo Zenet se posiciona |
|---|---|---|
| **Excel + WhatsApp + libreta** | $0 (gratis tools, costo es time) | "Excel se queda corto cuando creces" (cf. doc 03 §3.2.2) |
| **Apps simples / specialized standalone** | $200-500 MXN/mes | "Más que app aislada — sistema integrado" |
| **Mexico POS budget tier** | $360-699 MXN/mes (Fudo Inicial, SICAR, Bistrosoft Web, Poster Mini) | NO directamente comparable — Zenet es BOH, no POS |
| **Mexico POS mid-tier** | $700-1,179 MXN/mes (Fudo Avanzado $690, Bistrosoft Light $949, SoftRestaurant PRO $999, Poster Business $837) | Zenet es premium relative — articular por qué BOH-specific vale más que POS+BOH bundle a precio menor |
| **Mexico POS premium / Zenet competitive set** | **$1,050-1,599 MXN/mes** | **Zenet $1,500 está aquí** — Fudo Pro $1,050, **PoloTab ~$1,490, Bistrosoft Pro $1,599** son comparables directos. **Estos son los "competitive anchors" más relevantes.** |
| **POS subutilizado del operador (existing)** | $500-2,000 MXN/mes (lo que ya pagan al POS actual) | Complementario — Zenet no compite, opera sobre POS. **Pero sumado al POS existing, total stack tech del operador llega a $2,000-3,500/mes** |
| **US/Canada BOH-specific (analog)** | USD 199-500/mes (~$3,700-9,250 MXN) — MarketMan $199-249, MarginEdge $350-500, WISK $189-249 | Zenet en MXN es **substantially cheaper en USD-equivalent** — argument para premium positioning |
| **Consultor por proyecto puntual** | $20,000-80,000 MXN proyecto `[Estimación cualitativa]` (cf. doc 03 §3.2.7) | "Consultor te diagnostica, Zenet sostiene la solución diaria" |
| **ERP enterprise** (SAP, Oracle, Odoo, Restaurant365 enterprise) | $10,000+ USD/mes (~$170K MXN); Restaurant365 USD 499+/location (~$9,250 MXN) | Posición: 50-100x más barato sin la complejidad |

**Cifra revelada del mercado — BOH operations premium documentado:**

`[Benchmark sectorial / Perplexity 2026-05-07]` — operadores Mexicans **revealed accept paying $330-650 MXN/mes premium** sobre POS base por features BOH (inventory + recipe costing):

- **Fudo:** Inicial $360 → Avanzado (con BOH) $690 = **$330 BOH premium**.
- **Bistrosoft:** Light $949 → Pro (con costs/recipes) $1,599 = **$650 BOH premium**.

**Implicación crítica:** $1,500 standalone BOH price ya incluye implícitamente "POS value + BOH premium" — operador puede percibirlo como duplication si ya paga POS. **Mensajería operativa requerida:** Zenet NO reemplaza POS — **sí reemplaza la combinación Excel + WhatsApp + libreta + memoria**, que SÍ sumaba en time-cost equivalente. Frame: Zenet sustituye stack manual oculto, no el POS visible.

**Implicación de mensajería refinada:**
- **Anchor primario: Mexico POS premium tier** (Bistrosoft Pro, PoloTab, Fudo Pro). Zenet es comparable en precio pero con diferente value prop (BOH-first cognitive interpretation, no POS+inventario superficial).
- **Anchor secundario: US BOH analog en USD** — argumenta que Zenet es accessible en pesos vs lo que costaría un MarketMan/MarginEdge si llegaran a México.
- **Anchor evitado: Excel free** — frame "evolución natural" en vez de comparativa de precio (Excel siempre va a ganar comparativa $0 vs $1,500).

### 5.3 Pricing models considerados — refinado con Query 3 perception research

> Refinado significativamente con Query 3 (2026-05-07). El finding crítico: **per-location flat es perceived como el más fair + predictable + transparent** por SMB restaurant operators. Transaction-fee (% of sales) es perceived como el más extractivo. Esta es **revealed preference cross-mercado, no solo Mexican-specific**.

#### 5.3.1 Pricing model perception ranking — quantitative + qualitative

`[Benchmark sectorial / Perplexity 2026-05-07]` — 7 pricing models ranked por SMB restaurant operators:

| Rank | Model | Fairness (1-10) | Predictability (1-10) | Transparency (1-10) | Operator Preference |
|---|---|---|---|---|---|
| **1** | **Per-Location Flat Rate (unlimited users)** | **9.0** | **10.0** | **10** | **Highest** |
| 2 | Value Metric (tied to business outcomes — locations, covers, sales bands) | 8.5 | 7.0 | 8 | High |
| 3 | Tiered Feature-Based (unlimited users) | 8.0 | 9.0 | 9 | High |
| 4 | Hybrid (base + usage for specific features) | 7.5 | 6.0 | 7 | Medium |
| 5 | Usage-Based / Consumption | 7.0 | 4.0 | 5 | Medium-Low |
| 6 | Per-User / Seat (traditional) | 5.0 | 8.0 | 9 | Low |
| 7 | Transaction Fee (% of sales) | 4.0 | 3.0 | 4 | **Lowest** |

#### 5.3.2 Operator voice por modelo — verbatims y patrones

**Per-location flat (rank #1) — operator language documentado:**

> *"Flat rate per location turns software from a moving target into a stable line on the P&L."* — Jelly UK case study `[Benchmark sectorial / Perplexity 2026-05-07]`

Operadores describen per-location flat con 3 themes consistentes:
- *"Predictable / no surprises."*
- *"I can explain it in one sentence to my finance person and chef."*
- *"Matches how I think about cost structure"* — rent, utilities, otros licenses ya per-location.

**Por qué wins:**
- No penalty for doing the right thing (adding users, adding shifts).
- Easy ROI math: "if this saves X% food cost o Y horas admin per location/month, it pays for itself" — independent of staff churn.
- Match con mental model existente del operador.

**Per-user / per-seat (rank #6) — operator language documentado:**

> *"I get punished for involving more of my team."* `[Benchmark sectorial / Perplexity 2026-05-07]`

> *"I have to police logins or share accounts to keep costs down."*

**En contexto restaurantero específicamente:**
- Turnover 60-80%/year (cf. doc 03 + doc 04 §5.2 Window E) makes constantly adding/removing seats; **owners resent paying for users who quit last month**.
- Multi-shift roles + part-time staff hace que "1 user = 1 FTE" sea bad proxy.
- **Validated solution: Slack per-active-user + fair billing policy** — only pay for active users, auto-credits inactive seats. Per-seat puede ser aceptado **si avoids charging for shelfware**.

**Transaction fee % of sales (rank #7) — operator language documentado:**

> Mexican operator on transaction fees: *"Otra mordida en mis márgenes ya delgados."* `[Benchmark sectorial / Perplexity 2026-05-07 — BFA Global]`

> Restaurant trade press framing: *"Tax on revenue."*

**Por qué pierde catastróficamente:**
- Mexican/LATAM operators **ya pagan stacked commissions** a delivery (Rappi/UberEats/DiDi 18-30%), payments (Clip 3.6%+IVA, Mercado Pago similar), aggregators.
- Cornell hospitality fairness research: diners perceive surcharges como less fair que simple price increases at identical economics — **operators extrapolate this lógica a vendor relationships**.
- Operadores explícitamente **escape % of sales schemes** y choose flat/hybrid alternatives (Jelly UK case).

**Usage-based (rank #5) — *"fair en principio, stressful en práctica"*:**

- Conceptually fair ("pay for what you use") pero **emotionally risky** porque bills fluctuate y harder to forecast.
- En contexto restaurantero: *"another variable I can't control"*.
- **Works only when:** clearly capped ("incluye hasta X invoices/mo, después MXN Y por extra 100") + visible en dashboards para forecast.

#### 5.3.3 Hybrid acceptance patterns

**Hybrid wins cuando feels like "fuel" (extra SMS, storage, locations) NO "tax" en core job.**

**Preferred hybrid shape para SMB restaurant (Query 3):**
- **Flat per-location base** que cubre unlimited users + core BOH workflows (recipes, stock, purchasing, reporting).
- **Optional add-ons** para clearly separate value pools: advanced analytics, multi-brand consolidation, módulos extra (delivery, HR).
- Si variable component existe: tied to clearly incremental value (e.g., e-invoices beyond high threshold, SMS alerts, external API calls), **NO gross sales**.

**Stripe + Chargebee + SaaS Capital data:** hybrid + value metrics improves expansion revenue + perceived as more aligned que pure per-seat o pure usage.

#### 5.3.4 Tiered pricing — Good-Better-Best guidance

**Works cuando:**
- Entry tier incluye **core job-to-be-done** (no paywall el job básico).
- Higher tiers add **scale, control, analytics** rather than basic functionality.
- Modest, clearly justified step-ups.

**Falla cuando:**
- Big jumps (29 → 149 USD pattern criticized).
- Paywalling basics — entry tier sin core value.

#### 5.3.5 Recomendación Zenet Fase 1 — confirmada y refinada

> Recomendación cross-fuente convergente con perception research + Mexican market revealed preferences:

**Modelo primario para Zenet Fase 1:**

> **MXN per-location flat rate, unlimited users, 3 tiers simples, all publicly listed, NO % of sales, NO per-seat.**

**Estructura específica recomendada:**

| Tier | Pricing MXN/sucursal/mes | Para quién |
|---|---|---|
| **Básico** | $1,200 +IVA | Single location o operador en Fase 0 design partner |
| **Pro** | $1,500 +IVA | **Default tier — beachhead 2-3 sucursales** |
| **Multi-Sitio** | $1,800 +IVA | 4-5 sucursales con cross-location consolidation needs |

Modest jumps ($300 step-ups) — alineados con Quantide warning sobre big jumps. **Core BOH value en entry tier**, no paywalled.

**Add-ons opcionales potenciales (si necesario long-term):**
- Advanced analytics dashboard.
- Multi-brand consolidation.
- Integration premium con accounting/BI tools (CONTPAQi/Aspel deep integration).
- Aligned con cost-to-serve donde aplique (e.g., invoices OCR'd above high free threshold).

**Confirmación del modelo con Mexican vendor revealed preferences (Query 1):**

`[Benchmark sectorial / Perplexity 2026-05-07]` — **TODOS los Mexico-native vendors usan per-location flat o tiered**. NONE use % of sales para BOH. Esto es revealed preference cross-mercado: **per-location es lo que el mercado mexicano accepts y entiende**. Adoptar otro model crea cognitive friction prematura en evaluación.

**Contraindicación explícita: NO % of sales / transaction fee model.**

`[Benchmark sectorial / Perplexity 2026-05-07]` — Mexican operators ya stacked commissions. Add Zenet % fee = "stacking" perception. **Lowest preference rank documented (4.0/10 fairness)**. Avoid completamente — incluso hybrid component que touches gross sales.

### 5.4 Discount sensitivity — Mexican SMB B2B con cultural specifics

> Refinada significativamente con Query 4 (2026-05-07). El core finding: **discount funciona en Mexican SMB B2B cuando tiene legitimate structural reason que el buyer puede retell** — a sí mismo, a su contable, a su pareja. Discounts arbitrarios, time-pressured, o inexplicablemente grandes triggera *"¿qué tiene de malo?"* y *"este vendor está desesperado"* — opuesto del intended effect. `[Benchmark sectorial / Perplexity 2026-05-07]`

#### 5.4.1 Discount frames ranked por effectiveness

`[Benchmark sectorial / Perplexity 2026-05-07]` — 6 frames documentados, en orden descendente:

| Rank | Frame | Trust signal | Magnitude típica | Source / pattern |
|---|---|---|---|---|
| **1** | **Design partner / "Socio fundador"** ("estamos en etapa fundacional, buscamos socios que nos ayuden a construir el producto; a cambio precio especial permanente primer año") | **High** — validates buyer's intelligence ("you're being invited"), creates reciprocity (feedback en exchange), credibility sin desperation | **30-50% durante 12-24 meses**, transición a standard pricing | SaaStr design partner framework |
| **2** | **Multi-location / volume commitment** ("por tus 2-3 locales 15% sobre regular") | **High** — tied to buyer behavior operator controls; feels earned | **10-20%** según volume | Activa Ventas |
| **3** | **Annual prepayment** (10-15% off vs monthly) | **High** — culturally legible: "usted nos da certidumbre, nosotros descuento". Zero distrust signal | **10-15%** | Mexico revealed: SoftRestaurant, Fudo, SICAR todos lo usan |
| **4** | **Referral discount** (ongoing MRN reduction per active referral) | **High** — combina social proof network effect + legitimate frame; aligned con Mexico word-of-mouth culture | Variable | PoloTab Amigos model |
| **5** | **Pilot / onboarding fee waiver** (first month free, setup waived) | **High** — removes implementation-fear barrier (BFA Stanford finding) sin cheapening ongoing price | First month / setup | BFA Global Mexico SME study |
| **6** | **Urgency-based / "solo hasta el viernes"** | **NEGATIVE** — pressure tactics signal desperation, erode confianza | N/A — counterproductive | Santander Trade + Tecma + GlobalBusinessCulture |

**Verbatim crítico — Activa Ventas (Spanish sales training):**

> *"NUNCA ofrezcas un descuento a priori para enganchar al cliente... cuando un vendedor concede un descuento sin un motivo válido, transmite implícitamente que el producto vale menos."*

**Verbatim crítico — El Economista 2024:**

> Descuentos sin estrategia válida *"devalúan el producto y la confianza del cliente."*

#### 5.4.2 Discount magnitude thresholds — quantified zones

`[Benchmark sectorial / Perplexity 2026-05-07]` — pricing psychology research + B2B practitioner evidence:

| Range | Effect | Aplicabilidad |
|---|---|---|
| **5-15%** | Minimal negative quality perception | Mexico negotiation ritual normal at close; safe range para annual commitment, referral, multi-location |
| **15-25%** | Strong value perception if **clearly justified** | OK con narrative claro (annual + multi-location combo, early adopter). Threshold superior ~25% donde quality skepticism activates |
| **25-30%** | Quality skepticism beginning to activate | Buyers start wondering if listed price was inflated. Use solo con strong narrative |
| **30-50%** | Design partner / founding customer territory | **Acceptable SOLO con clear narrative** ("you're helping build the product, compensation for feedback + risk"). SaaStr explicit recommendation |
| **>50%** | Damage zone | "Devalúan el producto y confianza" (El Economista). Avoid sin extraordinary structural reason |
| **<MXN 800-900 sin structural reason** | "Toy product" perception | Below SoftRestaurant Pro $999, Bistrosoft Pro $1,599. Signals "not a serious tool" en Mexico market context |

**El "too cheap to trust" floor — high-UAI amplification:**

`[Benchmark sectorial / Perplexity 2026-05-07]` — Mexico UAI 82 (cf. §8.2) amplifies price-as-quality-proxy heuristic vs low-UAI markets.

> **Verbatim Benny Fluman (B2B pricing commentary):** *"A low price doesn't reduce risk for the buyer. It increases it — now they're thinking: if it's this cheap, what's wrong with it? Why isn't anyone else paying more?"*

**Aplicación a Zenet:** pricing **debajo de MXN 800-900 sin structural reason** signals "toy product" en context donde SoftRestaurant Pro está en $999 + IVA y Bistrosoft Pro en $1,599 + IVA. **NO go below entry tier baseline incluso por save move táctico**.

#### 5.4.3 Mexican negotiation ritual — el 5-10% expected at close

`[Benchmark sectorial / Perplexity 2026-05-07]` — **CLADEA Ogliastri & Davis academic study (closest primary source):**

> *"At first, Mexicans see negotiations as an opportunity to get the greatest benefit at the supplier's expense, by insisting on steep discounts while giving little or nothing in return"* — Mexican buyers **WILL ASK** for discounts as normal opening negotiation move. **PERO esto es ritual, no genuine price sensitivity signal.**

**Cuando the asking is done:** *"Usually, it was just 5% or 10%."*

**Implicación operativa para Zenet:**
- **Esperar push para 5-10% discount en negociación final** — es ritual cultural, no señal de price sensitivity real.
- **NO ofrecerlo upfront** (Activa Ventas warning).
- **OK accommodate a 5-10% en cierre** si buyer pushes; this preserves cultural ritual sin damaging price credibility.
- **NO accommodate request de 30-50% sin structural reason** — eso indica buyer no está serious o vendor está perceived como desperate.

**Lo que NO funciona — pressure tactics en Mexico:**

> Santander Trade Mexico business practices: *"Hard selling, pressure tactics and confrontation are to be avoided."*

> CLADEA study: ultimatums + fake urgency *"give me my price or no deal"* eran **the worst tactic observed** in Mexican negotiations.

**Implicación para Zenet sales motion:**
- **Avoid completamente:** "limited time offer, expires Friday", "20% solo esta semana", end-of-quarter urgency.
- Estos triggear desconfianza inmediata + erode *confianza* accumulation (cf. §10.1).

#### 5.4.4 Cuándo descuento mueve el deal vs cuándo es ruido

**Cuándo descuento mueve el deal:**

- Stage G negociación cuando es **el último gap entre commitment y firma** (5-10% ritual close).
- Como compensation por commitment de pilot 30-60 días.
- **Fase 0 design partner discount 30-50%** con clear narrative ("socio fundador"). NO genérico 20-30% — needs structural framing.
- Annual commitment 10-15% off (Mexico convention).
- Multi-location commitment 10-20% (volume framing).
- Referral discount ongoing per active referral.

**Cuándo descuento NO mueve el deal:**

- Si la objeción real es **CFDI compliance** (no resoluble con descuento — *contable* veta independiente).
- Si **chef expresa silent resistance** (descuento al dueño no resuelve veto del chef).
- Si **peer validation está ausente** (descuento sin trust = sigue sin trust).
- Pressure tactics tipo "20% descuento solo esta semana" — **desconfianza inmediata**.
- Cuando real concern es **implementation fear** (BFA Stanford 22 friction points) — solution es free pilot / waived setup, NO ongoing price discount.

#### 5.4.5 Save-move discount effectiveness — MEXICAN-specific behavior

`[Benchmark sectorial / Perplexity 2026-05-07]` — global benchmarks aplican con **critical Mexican caveat**:

**Global benchmarks (Paddle Retain data):**
- Structured cancellation flows + targeted offers: **25-30% save rate**.
- Blanket 50% discounts at cancellation: **only 2% deflection** (low effectiveness).
- Well-designed churn prevention: ~5.3% annual ARR churn reduction.

**Mexican-specific behavior — CRÍTICO:**

> **Mexican non-confrontational culture means cancellation requests are RARE but GENUINE when they arrive.** A Mexican independent operator who asks to cancel **has typically already decided**. The "pending decision" phase is over.

**Implicación:** standard "discount at cancellation" save move **menos effective en Mexico** — operador que llega a cancellation YA decidió, vs US donde cancellation puede ser exploration.

**Risk amplificado:** consistent save-discounting **trains operator (y peer network via boca a boca) que el real price es lower** — eroding price credibility across entire referral network. Critical en Mexico's word-of-mouth-first culture.

**Better save-moves recomendadas para Mexican restaurant operators (Query 4):**

| Save move | Por qué funciona en Mexico |
|---|---|
| **Free 30-60 day usage extension durante transition** ("sabemos que la temporada está difícil — pausa sin costo dos meses y regresa cuando estés listo") | Acknowledges Mexican operator reality (cash flow seasonality), preserves price integrity, frames as relationship not transaction |
| **Downgrade path a lighter tier** rather than permanent discount | Reduces cost without eroding price credibility |
| **Escalation a founder/senior relationship** | **Mexican culture values personal attention from leadership FAR MORE than price reduction** as retention signal |
| Time-limited coupon (2-3 meses at 20-30%) framed as *"estamos ajustando tu plan temporalmente por la situación actual"* — NO programmatic win-back | Acceptable per global best practice + Mexico cultural framing as exception not pattern |

**Implicación operativa Zenet:** **Subscription pause como first-line save move** (heredado doc 04 §5.2 Window F + §5.3) está doblemente validado por Query 4 — funciona en Mexico **mejor** que discount-based saves. Pause + founder escalation como combined intervention.

#### 5.4.6 "Más por lo mismo" vs "same for less" — bundle preference

`[Benchmark sectorial / Perplexity 2026-05-07]` — Mexican framing preference documented:

| Frame | Effect en Mexico |
|---|---|
| **"Más por lo mismo"** (more for the same price) — agregar feature, módulo, extra value | **Preferred** — feels like gain, no destabiliza price anchor |
| **"Same for less"** — direct price cut | **Feels destabilizing** — implies original price era inflated |

**Implicación para Zenet:**
- En lugar de "20% off Pro tier" → "Mismo precio Pro, te agregamos módulo de analytics avanzado primer año".
- En lugar de "free month" save → "te agregamos 3 meses de soporte premium sin costo".
- Bundle additions feel like gain; price cuts feel like price was originally inflated.

#### 5.4.7 Síntesis estratégica — discount doctrine para Zenet

**Doctrina recomendada:**

1. **Pricing transparente publicado** sin upfront discounts (cf. §5.3.5 — 79% transparency expectation).
2. **Esperar 5-10% close negotiation discount** como ritual cultural; accommodate sin pushback agresivo.
3. **Fase 0 design partner: 30-50% discount con clear "socio fundador" narrative** — 12-24 meses lock-in, transition a standard.
4. **Annual commitment 10-15%** + multi-location 10-20% como standard convention discounts.
5. **NUNCA ofrecer urgency-based ("expira el viernes") o blanket discounts** sin structural reason.
6. **NUNCA pricing below MXN 800-900** sin structural reason — toy product perception.
7. **Save move primary: subscription pause + founder escalation**, NO price discount.
8. **Bundle additions over price cuts** — "más por lo mismo" framing siempre preferred.

**El principle anchor:** *"Si necesito un descuento para vender, no estoy vendiendo, estoy pidiendo permiso."* — Zenet vende premium positioning con justified value prop, no price competition.

### 5.5 Pricing por fase Zenet — heredado workspace `07-geografia-y-expansion.md` §17

| Fase | Pricing | Rationale |
|---|---|---|
| **Fase 0 (design partners)** | $1,050-$1,200 MXN/sucursal/mes (20-30% discount) | Incentivar early adopters; compensa risk de producto en construcción |
| **Fase 1 (TJ beachhead)** | **$1,500 MXN/sucursal/mes** (precio base) | Validado verbalmente Murguía 2026-04-01 |
| **Fase 2 (BC completa)** | $1,500 (mantener uniforme dentro de MX) | Doctrina de pricing uniforme dentro de MX (workspace doc 07 §17) |
| **Fase 3+ (Sonora, QRO, Mérida)** | $1,500 (mantener uniforme) | Misma doctrina |
| **Fase 5 (LATAM)** | Evaluado con Serie A | Diferentes mercados, currency, baseline competitive |

**Implicación crítica:** **uniformidad dentro de MX es decisión declarada del workspace.** Descuentos son por etapa de adopción (Fase 0 design partner), NO por plaza. Esto simplifica sales motion + protege brand pricing equity.

### 5.6 Conditions for willingness to pay (heredado business context v1.0 §7)

WTP $1,500 MXN/mes se sostiene SI Zenet cumple:

1. **Saves 10+ horas/mes/sucursal.** ROI tangible en time recovered.
2. **Visibly reduces operational errors.** Mermas detectables, costo correcto.
3. **Decreases work overload del operador.**
4. **Doesn't add complexity — reduces it.** Ease of use sustained.
5. **Fast onboarding (<1 semana al primer milestone).** Para Zenet Fase 1 manual upload: TTFV Tier 1 al Día 7-14 (cf. doc 04 §3.6.7).
6. **Accessible support en español.** Customer success local, no email automatizado en inglés.
7. **Clear ROI (value > cost).** ROI articulable en MXN, no abstracto.

Si una de las 7 conditions falla post-firma, retention se compromete (cf. doc 04 §5.2 churn windows).

### 5.7 Hipótesis crítica abierta — el WTP del dueño directo

**Pregunta open:** ¿WTP $1,500 MXN se sostiene cuando el **dueño-operador del beachhead específico (TJ casual independiente 2-3 sucursales)** firma con su cartera? — vs. estimación de Murguía consultor.

**Por qué importa:** Murguía es consultor con experiencia operadora — su estimate refleja su criterio profesional sobre el segmento, no el behavioral economics del dueño en el momento de firmar. La diferencia puede ser 0% o 30%+ — sin validación con dueño directo, no se sabe.

**Cómo se cierra:** primeras 5 design partner conversations en Fase 0 deben incluir test de pricing concreto: presentar $1,500 sin discount, observar reacción, negociar si necesario, documentar el outcome. Este es **uno de los hipótesis más load-bearing pendientes** (cf. doc 01 §8.1).

**Triangulación post-Query 1 — el gap específico declarado:**

`[Benchmark sectorial / Perplexity 2026-05-07]` — **NO formal WTP survey for Mexican independent restaurant BOH SaaS exists**. Confirmed cross-fuente (CANIRAC publications, IIEG Jalisco, trade press, academic databases, vendor research). Esto significa que las primeras 5-10 design partner interviews de Zenet **producen literatura primaria de WTP que no existe en ningún otro lado** — activo de research declarado.

**Closest analog — Canada study (2024-2025):**

Canada's Restaurant Guy (n=podcast interviews + follow-up surveys de 3 años con independent Canadian operators):
- **73% de Canadian independents NO tienen accurate food costing**.
- **47% admitieron NO querer saber sus real costs** (avoidance factor).
- **79% pagarían por servicio que solucione food costing si trusted**.
- **Median WTP: USD 350/month** (~MXN 6,475 — ~4x el precio de Zenet).
- Few said less than USD 200.

**Caveat crítico:** Canada economics distinta (higher labor, higher avg check, different cuisines). **NO transponer directamente** — el USD 350 mediano canadiense no es proxy de WTP mexicano. **Pero la finding behavioral aplica cross-cultural:** operadores intelectualmente quieren cost control pero emocionalmente avoid it; pagarán meaningful fee una vez established trust. **Esto valida que demand for the value prop existe** — la pregunta es solo el price point específico para MX.

**Reforming Retail finding (US, 2024) — el floor counterpoint:**

US small independents (under USD 500K revenue) spend "nothing" on technology beyond POS. *"They're not actively looking for solutions, and even if they were they're not paying more than free for said solution."* Tijuana independents likely más cerca a este profile que al canadiense por economics.

**Síntesis pricing realista para Zenet beachhead:**

Triangulando el spread:
- **Floor (Reforming Retail US small independents):** ~$0 (skeptic resistance)
- **Mexican market lower-mid tier:** $700-1,179 MXN (Fudo Avanzado, Poster Business)
- **Zenet $1,500 MXN:** lower premium tier
- **Mexican market upper premium ceiling:** $2,000-2,100 MXN (Dyshez)
- **Canadian analog WTP median:** USD 350 (~MXN 6,475) — para Canadian higher-economics segment

`[HIPÓTESIS PRE-PMF]`: Zenet $1,500 es defensible PERO existe risk material de pricing pushback en 30-50% del beachhead — operadores que perciben Zenet como "too expensive" para BOH-only sin ROI claro inmediato. Mitigations declaradas: Fase 0 design partner discount 20-30% baja a $1,050-1,200 (alineado con Fudo Pro $1,050). Annual contract con discount como retention move.

---

## 6. Deal-breakers explícitos

Conditions que cierran el deal independiente del resto del cycle. Cada uno requiere mitigation strategy explícita.

### 6.1 CFDI 4.0 compliance gap

**Deal-breaker absoluto en Mexican context.** Si Zenet no integra con PAC certificado o no genera/recibe CFDIs en formato XML SAT-compliant, el *contable* veta automáticamente (cf. doc 04 §6.6). Cero mitigation possible — fix the product.

**Mitigation:** asegurar CFDI 4.0 compliance + PAC integration desde Fase 0. NO opcional.

### 6.2 Sin Spanish support estructural

Vendor que solo opera en inglés es no-go. Soporte automatizado en inglés también es no-go.

**Mitigation:** customer success team en español + materiales en español + WhatsApp como canal preferred (cf. doc 04 §6.13).

### 6.3 Pricing model perceived as arbitrary

Si el operador no entiende el pricing model en 30 segundos, lo desconfía. Per-user × per-feature × per-volume es arbitrary-feeling.

**Mitigation:** per-location flat fee (cf. §5.3). Simplicidad > optimization.

### 6.4 *Contable* veta integration con CONTPAQi/Aspel

Si *contable* declara incompatibility con su accounting platform, deal stall en Stage F.

**Mitigation:** Ficha Técnica Contable (cf. doc 04 §6.6) + integration capability con CONTPAQi/Aspel desde Fase 0. Long-term: "Zenet para Contadores" view.

### 6.5 Cloud-only sin contingencia offline en plaza con conexión inestable

Algunas plazas del beachhead (sucursales periferia TJ, Valle de Guadalupe, Mexicali) tienen conexión intermitente. Cloud-only sin offline backup = operación detenida cuando falla internet.

**Mitigation:** offline mode for critical workflows (capturar conteos, ver recetas) con sync cuando vuelve la conexión.

### 6.6 No POS data flow viable (Zenet Fase 1 specific)

Si POS del operador no permite ningún export (ni CSV, ni Excel, ni PDF) y la foto OCR no funciona en el formato del POS, los 3 modes de Zenet Fase 1 fallan (cf. doc 04 §3.6.7).

**Mitigation:** validar en Stage B (Discovery) qué POS tiene el operador y confirmar que Zenet supports al menos uno de los 3 modes para ese POS específico. Si no, **descalificar el lead** o esperar a Fase 2 (API integration).

### 6.7 Conflicto societario sin claridad de decisor (anti-perfil 4)

Si el deal requiere aprobación de socio cuya posición es ambigua, deal stall indefinido.

**Mitigation:** discovery question explícita en Stage B ("¿quién toma la decisión final? ¿Hay otros stakeholders que necesiten aprobar?"). Si vague — pause lead hasta clarity.

---

## 7. Buying signals — readiness vs. stalling

### 7.1 Verbal signals de readiness

Dichos en Stage B-E que indican momentum:

- *"¿Cuándo podríamos arrancar?"* — timing concrete signal.
- *"¿Tienes referencias de operadores parecidos en TJ?"* — peer validation explicit ask.
- *"Voy a mandarle la info a mi contador"* — *contable* engagement self-initiated.
- *"¿Cuántos pesos al mes recupero en mermas?"* — ROI math engagement.
- *"Necesito que [socio/familiar] vea esto"* — buying committee expansion organic.

### 7.2 Behavioral signals de readiness

Comportamiento observable post-touchpoint:

- Repeat visits a la propuesta o ROI calculator.
- Solicitud de pilot conditions específicos.
- Follow-up emails/WhatsApp en <24 horas tras Demo.
- Request de Ficha Técnica Contable proactively.
- Sharing de Zenet con peer (peer-to-peer validation antes de firma).

### 7.3 Stakeholder signals

Patrones por stakeholder específico:

- **Champion (gerente):** preguntas operativas detalladas, request de business case template, scheduled internal meetings to discuss.
- **Owner:** ROI math en sesión, asks about contract terms specifics, mentions timing commitments.
- ***Contable*:** responde Ficha Técnica con preguntas técnicas (no genéricas), agenda llamada técnica.
- **Chef:** interactúa con tablet en demo, hace preguntas culinarias específicas, verbal acceptance ("esto sí me sirve").

### 7.4 Anti-signals — deal stalling

Comportamientos que predicen deal muerto o stalled:

- *"Vamos a pensarlo y te aviso"* sin commitment de fecha (vague).
- Vague answers a discovery questions específicas.
- Ausencia de *contable* en la conversación pasado Stage E (gatekeeper omitido).
- 3+ softwares churneados en últimos 2 años con razones genéricas (anti-perfil 3 ICP).
- Conflicto societario sin decisor claro (anti-perfil 4).
- Tire-kicker pattern: "estamos viendo opciones" sin trigger event (anti-perfil 5).
- Champion turns passive entre Stage C y Stage E.
- Pricing pushback agresivo sin counter-proposal específico.
- Demanda de pilot indefinido sin fecha de evaluación.

---

## 8. Sales cycle timing benchmarks

> ℹ️ **Estado de evidencia post-triangulación (Query 2, 2026-05-07):** la sección se reforzó significativamente con benchmarks cross-SaaS por ACV, LATAM elongation multipliers, Hofstede cultural scores cuantificados, stage-by-stage timing US vs Mexico, source consultation sequence Mexico-specific, y el finding más importante: **la hipótesis original 4-12 semanas fue optimista — realidad es 6-20 semanas con un 3-lane model**. NO hay primary data de Mexico restaurant BOH SaaS sales cycle — todo es triangulación cross-fuente. **Las primeras 20 conversations de Zenet producen literatura primaria que no existe en otro lado**.

### 8.1 Cross-SaaS benchmarks por ACV (heredado + refinado Query 2)

| Segmento | ACV range | Median cycle | Source |
|---|---|---|---|
| Self-serve / light-touch SMB | <$5K/yr | **14-18 días** | Culta.ai / Optifai (n=939) 2026 |
| **Sales-assisted SMB** | **$5K-$25K/yr** | **42 días** | Culta.ai 2026 |
| SMB broad (all <$15K) | <$15K/yr | 14-30 días | Optifai Pipeline Study 2026 |
| **Vertical SaaS SMB (industry-specific) — closest analog Zenet** | **$1K-$15K/yr** | **90-120 días** | ORM-Tech vertical SaaS benchmark 2026 |
| All B2B SaaS median | All | **84 días** | Multiple sources 2026 |
| Average B2B SaaS (rising) | All | **134 días (+25% desde 2022)** | Prospeo 2026 |
| Restaurant tech SaaS US (multi-stakeholder enterprise) | Enterprise | **9-12 meses** | SaasHero 2026 |

**Implicación crítica:** el "global SMB SaaS 14-30 días" benchmark aplica **casi exclusivamente a inbound, self-serve PLG funnels** — NO a sales-assisted SaaS con demo + integration discussion + training como Zenet. **Vertical SaaS SMB (90-120 días) es el closest analog para Zenet** — incluso EN US, antes de cualquier LATAM cultural friction multiplier.

**Otros benchmarks heredados:**

| Métrica | Cifra | Source |
|---|---|---|
| Touchpoints antes de cierre (cold) | **10-18** | Aexus 2025 + Query 2 inferencia |
| Touchpoints antes de cierre (warm/referred) | **5-9** | Aexus 2025 |
| Sources consultadas pre-purchase | **8-9** | Belle Communication 2026 (Query 5 doc 04) |
| Buyers % through journey before vendor engagement | **57%** | Challenger CEB 2019 |
| % decision-makers que start con referral | **84%** | Genius Referrals 2025 |

### 8.2 Hofstede cultural multipliers — cuantificados

`[Benchmark sectorial / Perplexity 2026-05-07]` — los structural drivers culturales que extienden el cycle Mexicano:

| Dimensión | Mexico | US | Delta | Impact en sales cycle |
|---|---|---|---|---|
| **Power Distance (PDI)** | **81** | 40 | +41 | Solo el dueño puede decidir; subordinates won't decide ni signal preference. Adds "reach the real buyer" stage |
| **Uncertainty Avoidance (UAI)** | **82** | 46 | +36 | Operadores risk-averse; "if it ain't broke, don't fix it"; demand peer references before commit. **El single most important structural determinant del extended cycle** |
| **Individualism (IDV)** | **30** | 91 | -61 | Collectivist — decisions validadas through peer networks, community proof, personal referrals. NO independent evaluation US-style |

**El UAI 82 es la dimensión más alta de Mexico Hofstede.** Traduce directamente a:
- Reluctance to be first adopter.
- Demand existing customer references **antes** de commitment.
- Preference for "wait and see" sobre decision-making.
- Status quo bias hacia keeping current systems however imperfect.

Mexican SME tech adoption research (UANL 2022) confirma: non-adoption driven by **"complexity of technology, lack of knowledge, and resistance to change"** — NOT primarily cost.

**LATAM elongation multiplier estimado:** +30-50% vs US baseline (vs EMEA +20-30%). Practitioner heuristic, no measured CRM data.

### 8.3 Stage-by-stage timing — US vs Mexico restaurant SaaS

> Reformulación crítica con Query 2. **Las 8 stages del sales cycle Zenet (cf. §3) tienen Mexico-specific timing patterns documentados:**

| Stage | US SMB Estimate | **Mexico Independent Restaurant Estimate** | Friction Mexico-specific |
|---|---|---|---|
| 1. Awareness → Initial Interest | 1-3 días | **1-14 días** | Owner-operators NO proactively search BOH software; discovery passive (word-of-mouth, social, eventos) |
| 2. First contact → Demo scheduling | 3-7 días | **7-21 días** | "Hablamos pronto" stall; owner-operators solo disponibles Mar-Jue 14:00-16:30; scheduling toma 1-3 attempts |
| 3. Demo / evaluation | 7-14 días | **14-35 días** | Single on-site demo insuficiente; necesita ver funcionando con su menú; puede compartir con *contable* |
| 4. Internal validation / social proof gathering | 14-21 días | **21-56 días** | Operador asks peer restauranteros (boca a boca); UAI drives extensive reference-checking; *contable* review |
| 5. **"Necesito pensarlo" stall (Mexico-specific)** | 1-2 cycles | **2-4 cycles × 2-4 semanas cada uno = 4-16 semanas en stall** | Non-confrontational culture: "lo voy a pensar" puede significar "no me interesa" o "casi sí" — **indistinguishable sin probing** |
| 6. Decision / commitment | 21-30 días | **35-84 días** | Final decision requires: trust accumulated + *contable* not objecting + no fiscal period conflict + business calm enough for change |
| 7. Payment authorization / setup | 30-40 días | **40-100+ días** | Mexican SMB pay by transfer/OXXO; online subscription credit card lower-friction pero many prefer known methods; onboarding delayed if owner busy |
| **TOTAL** | **21-45 días (3-6.5 sem)** | **35-100+ días (6-20 semanas)** | |

**Ajuste crítico:** la hipótesis original 4-12 semanas en doc 05 captura solo **el fast/standard lane**, NO el slow lane que Mexico-specific.

### 8.4 3-lane model — la hipótesis revisada

> Replace de la hipótesis original 4-12 semanas. `[Benchmark sectorial / Perplexity 2026-05-07]`

| Lane | Conditions | Cycle estimate | Aplicabilidad |
|---|---|---|---|
| **Fast lane** | Warm referral + operador con BOH pain agudo + *contable* neutral o pre-engaged | **4-8 semanas** | Subset minoritario — design partners ideales |
| **Standard lane** | Light prior contact + operador interested pero sin urgencia + *contable* no consultado todavía | **8-16 semanas (realistic median)** | **El bucket más común — base case operativa** |
| **Slow lane** | Cold outreach + operador sin prior tech adoption + *contable* concerned por CFDI + fiscal timing conflict | **16-30+ semanas** | Donde "pending decisions" viven y mueren silently |

**Implicación operativa para Zenet pipeline forecasting:**
- **Median realistic cycle = 8-16 semanas**, no 4-12.
- Forecasting con 4-12 mediana subestima el cycle; sales motion + cash flow planning deben asumir 8-16.
- **Mover deals de standard → fast lane es el highest-leverage lever** — driven primarily by referral quality, NO product quality. Investing en referral mechanics (PoloTab "Amigos" tipo) likely higher ROI que feature development en este stage.

### 8.5 Stall points específicos del Mexican context

`[Benchmark sectorial / Perplexity 2026-05-07]` — patrones documented:

- **Stage 3→4 transition:** demo va bien pero operador no agenda follow-up sin clear next step set in person.
- **Stage 4→5:** *contable* tiene CFDI compatibility concerns; *contable* opera en monthly cycle; deal waits para next *contable* meeting.
- **Stage 5 stall loop:** non-confrontational expressions de "lo voy a pensar" / "márkame la próxima". **Stage puede loop 3-4 veces consumiendo 4-8 semanas sin movement**.
- **Stage 6→7:** fiscal timing (avoid implementing mid-month o peak season); owner travel/illness/high-volume period (**Diciembre/Navidad/Semana Santa son blackout windows**).

**Pattern operativo crítico (LATAM B2B Mexico Business News 2023):** deals accumulate en *"pending decisions"* rather than *"lost deals"* porque prospects avoid giving direct *"no"*. *"Hablemos el próximo mes"* puede cycle 2-4 veces antes de que deal close o die silently — **adding 4-8 semanas de phantom pipeline time** sobre evaluation period real.

### 8.6 Acceleration levers documentados

- **Warm referral de peer restaurantero personal:** potencialmente cuts **3-6 semanas** de stages 1-4.
- **CANIRAC / trade association endorsement** o government digital transformation program participation — institutional credibility que substitutes para *confianza* accumulation.
- **Concrete ROI en MXN con local restaurant comparable** (NO US case study) — directly addresses UAI "proof before commitment" pattern.
- **Free pilot / *prueba sin compromiso* 2-4 semanas:** restaurant operators más willing to test que to sign; effectively starts onboarding **antes** del formal close, dramatically compressing perceived risk.
- **Specific next-step date agreed in person** ("¿Te queda bien martes a las 3 PM para finalizar?") — converts vague stall a concrete timeline.
- ***Contable* engaged proactively** desde Stage C (cf. doc 04 §6.6 + §3.6 de este doc) — removes gating risk.
- **In-person cold visit during slow hours** (Mar-Jue 14:00-16:30) — supera email/cold call effectiveness.

### 8.7 Source consultation sequence — Mexico-specific

`[Benchmark sectorial / Perplexity 2026-05-07]` — orden documentado para Tijuana casual independiente operator evaluating BOH SaaS:

1. **Word-of-mouth de otros restauranteros (highest weight)** — peer recommendations dominate initial shortlisting. **84% B2B decision-makers start con referral**; amplified en high-collectivism Mexico (IDV=30).
2. **WhatsApp groups / local restaurantero networks** — Mexico-specific. **NO LinkedIn, NO G2 reviews, NO analyst reports.** Industry WhatsApp groups son primary informal research channels.
3. **In-person demo / vendor rep visit** — operadores require physical presence to validate trust **antes** de web research. Opposite del US pattern donde research precede contact.
4. **Vendor website / social media** — secondary validation **después** de personal contact established. **Instagram + Facebook más relevantes que LinkedIn** para este segment.
5. **Contable consultation** — formal vetting por external accountant, typically at month-end.
6. **Facebook/TikTok restaurant operator content (Spanish)** — growing channel. PoloTab, SoftRestaurant, Dyshez todos use Spanish-language video.
7. **Third-party directories (Capterra.mx, ComparaSoftware.com)** — usados pero less decisive que personal referral.

**Implicación de marketing:** Zenet content investment debe priorizar Instagram/Facebook content en español + WhatsApp Business presence + in-person event presence (CANIRAC eventos), **NO LinkedIn ads ni G2 listings** para este segment.

### 8.8 Implementation fear como barrier mayor que awareness

`[Benchmark sectorial / Perplexity 2026-05-07]` — finding **counterintuitive crítico** (BFA Global / Stanford 2024):

> **Adoption frictions are concentrated en onboarding y first-use phase — NOT en awareness or interest phase.**

Operadores express interest pero face **22 unique friction points** en vendor onboarding process que kill momentum. **El longest drag del Mexican restaurant SaaS sales cycle NO es evaluation skepticism — es implementation fear.** El operador believes el producto might work pero fears the disruption of setting it up.

**Implicación operativa para Zenet:**
- **Marketing investment alone insufficient** — operator interest no es la friction primaria.
- **Onboarding simplicity es retention infrastructure** además de TTFV lever (cf. doc 04 §3.6.7 manual batch upload patterns).
- **Free pilot 2-4 semanas** funciona porque **bypasses implementation fear** — pone al operador en onboarding antes de financial commitment.
- **Sin commitment-light activation path, gran proporción de qualified leads converts a phantom pipeline (Stage 5 stall loop) por implementation fear, no por skepticism**.

### 8.9 Touchpoint count refinado

| Channel | Touchpoints estimados (Mexico) | Comentario |
|---|---|---|
| Cold | **10-18** | Higher than US 8-15 por stall-loop repetitions + trust-building requirements |
| Referred / warm | **5-9** | Referral substitutes para multiple trust-building touchpoints |

### 8.10 Mexican B2B practitioner benchmarks heredados

- **Ecosistemastartup.com 2026:** PyMEs 2-4 semanas; medianas 1-3 meses; corporativos 6-18 meses (idealized cycle, no actual con LATAM friction).
- **MediaSource México 2026:** B2B "3 a 12 meses" en local market (más realistically captures distribution tail).

### 8.11 Funnel conversion benchmarks por stage — Query 5 sales-led SMB SaaS

> Sub-sección incorporada con triangulación Query 5 (2026-05-07). **Hospitality SaaS slice única disponible: FirstPageSage 2025.** No Mexico-specific numeric funnel data — global benchmarks adjusted con Mexico cultural multipliers de §8.2-§8.4.

#### 8.11.1 Conversion rates por stage transition — sales-led SMB SaaS

`[Benchmark sectorial / Perplexity 2026-05-07]`

| Stage transition | Conversion rate típico | Source / sample |
|---|---|---|
| **Lead → SQL** | **20-30%** B2B SaaS general; SMB SaaS con inside sales 25-35% | PixelWithin, FirstPageSage 2024-25 |
| **Lead → SQL (hospitality slice)** | Lead→MQL 45% × MQL→SQL 38% = **~17% cumulative** | FirstPageSage 2025 hospitality benchmarks |
| **SQL → Demo (SQL→Opportunity)** | **40-50%** typical; 50-62% top performers | PixelWithin, SPOTIO, HiBob |
| **Demo → Pilot** (cuando pilot ofrecido como default next step) | **50-70%** sales-led SMB SaaS; **30-50%** cuando pilot optional | Pipelineroad, generic SaaS POC data |
| **Pilot → Paid** | **60-80%** typical; **~75% median POC→paid** para SMB ACVs <$10k cuando pilots structured + time-bound | Ibbaka, SaaS Capital 2023-26 |
| **Demo → Closed-Won (NO pilot)** | **~44%** SMB SaaS con pre-qualification (ACV ~$5k/yr); **~20%** SMB SaaS sin pre-qualification (ACV ~$2.4k/yr) | Maxiality 2022 |
| **SQL → Closed-Won** | **20-25%** B2B SaaS; top performers 30%+ | SaasHero 2026 |
| **Opportunity → Close (HOSPITALITY SaaS)** | **38%** opportunity→close para hospitality SaaS slice | FirstPageSage 2025 |
| **Lead → Closed-Won (overall)** | **3-7% B2B SaaS average; 7-10% top quartile** | Prospeo, PixelWithin 2025-26 |
| **Lead → Closed-Won (HOSPITALITY)** | **~6-7%** en strong inbound motion | FirstPageSage 2025 implied math |

#### 8.11.2 Recommended Zenet baseline targets

`[Benchmark sectorial / Perplexity 2026-05-07]` — Query 5 explicit recommendation para sales-led BOH SaaS targeting Mexican beachhead, ajustado por cultural friction:

| Stage transition | Target Zenet inicial |
|---|---|
| Lead → SQL | **20-25%** |
| SQL → Demo | **50-60%** |
| Demo → Pilot | **60-70%** (assuming default 2-4 week pilot offered) |
| Pilot → Paid | **60-75%** |
| **Demo → Closed (NO pilot)** | **25-45%** según pre-qualification quality |
| **Overall Lead → Closed-Won** | **4-8%** |

**Implicación crítica:** los percentages **NO degradan substantialmente en Mexico vs US** — pero **stage durations sí stretch 1.5-2x**. Mexican context adds time, NO necessarily reduces conversion en cada stage individual. La excepción: **Pilot → Paid puede tener leakage adicional si implementation fear is high** (cf. doc 04 §3.6.7 + §8.8).

#### 8.11.3 Stage timing benchmarks — US sales-led SMB SaaS

`[Benchmark sectorial / Perplexity 2026-05-07]` — duration por stage (NO ajustado por Mexico):

| Stage | US duration típica | Where stalls occur |
|---|---|---|
| Lead → SQL | **1-7 días** si SDR follow-up prompt | >48h SDR delay = dramatic conversion drop |
| SQL → Demo | **3-14 días** | Scheduling conflicts, multi-stakeholder coordination |
| Demo → Pilot / Proposal | **7-21 días** | Internal evaluation; more stakeholders = longer |
| Pilot duration (sí ofrecido) | **14-45 días** typical SMB POC | Implementation, data import, change management overhead |
| Pilot → Paid | **7-30 días** post-pilot end | Procurement/admin, contract review |
| Demo → Close (no pilot, $2-10k USD ACV) | **30-60 días** | Internal prioritization, budget cycles |

**Mexican adjustment:** **stage durations stretch 1.5-2x** (cf. §8.3 + §8.4). Más tiempo extra concentrated en:
- Demo → Pilot: chef alignment + initial *contable* check.
- Pilot → Paid: *contable* fiscal validation + fiscal calendar timing + implementation fear navigation.

#### 8.11.4 Restaurant tech-specific cycle data (SaasHero)

`[Benchmark sectorial / Perplexity 2026-05-07]`:

- **First contact → Demo:** 1-3 semanas (scheduling around service hours).
- **Demo → Close (independent single-location):** **30-90 días** cuando value is clear y switching cost low.
- **Demo → Close (multi-stakeholder con GM, chef, sometimes finance):** **2-6 meses**.
- **Restaurant tech enterprise franchise/chain:** **9-12 meses**.

**Para Zenet beachhead (independent 2-3 sucursales en consolidación):** timing entre "single-location" y "multi-stakeholder SMB" — **estimate Demo→Close 60-120 días en standard lane** (alineado con 8-16 semanas standard lane de §8.4).

#### 8.11.5 Multi-stakeholder committee impact — quantified

`[Benchmark sectorial / Perplexity 2026-05-07]`:

- **Apollo.io research:** committees 5.4 → 6.8 members = **+15-20% cycle length, BUT win rate improves on well-qualified opportunities** (more internal champions).
- **Gartner / Forrester:** median B2B tech buying group mid-market 6-10 people; **SMB 2-4 people**.
- **Restaurant SaaS specific:** chef/kitchen manager input **increases close rates** porque BOH workflows succeed/fail en kitchen; excluding them leads to post-sale failure y churn.
- **External accountant (*contable*) inclusion:** lengthens cycle materially (waiting for month-end o year-end reviews) PERO dramatically reduces post-sale friction si they're on board.

**Implicación quantified para Zenet:**

Mexican beachhead committee = **3-4 stakeholders** (dueño + gerente + chef + *contable*) — ya en SMB band. Adding *contable* específicamente:
- **+2-4 semanas duration** (fiscal calendar timing).
- **PERO:** -30-50% post-sale churn risk (cf. doc 04 §6.6 + §6.11).

**Net for Zenet:** committee size es feature, not bug. Larger committee + longer cycle, BUT higher close quality + lower churn = better unit economics aunque IRR-by-deal sea slower.

#### 8.11.6 Highest-leverage improvements para Zenet funnel

`[Benchmark sectorial / Perplexity 2026-05-07]` — Query 5 explicit guidance: los stages con highest leverage para improvement NO son los obvios:

| Stage | Leverage | Por qué |
|---|---|---|
| **Lead → SQL** | **HIGHEST** | Lead quality + rapid follow-up (SDR <48h response). Doblar Lead→SQL doblar el funnel entero |
| Pilot → Paid | **HIGH** | Implementation success + *contable* buy-in. Esta es la zona Mexican-specific (implementation fear) |
| SQL → Demo | Moderate | Mostly depends on scheduling discipline |
| Demo → Pilot | **NOT highest leverage** | Já típicamente alto (60-70%) — diminishing returns |

**Implicación operativa:** invertir CS/sales effort en Lead → SQL quality y Pilot → Paid implementation success **>>** squeezing más Demo → Pilot conversion. Los primeros dos son donde más return on effort live.

#### 8.11.7 Caveats críticos del data

`[Benchmark sectorial / Perplexity 2026-05-07]`:

1. **NO Mexico/LATAM-specific numeric funnel benchmarks exist** para sales-led SaaS. Todo es global/US/EU + una hospitality slice.
2. **Hospitality SaaS data muy limitada** — FirstPageSage es la única public hospitality slice. Heavily SEO/inbound-biased — puede overstate conversion vs outbound.
3. **PLG vs sales-led distinction:** todos los benchmarks citados focus on sales-led o mixed-motion funnels — NO self-serve, NO free trial mass funnels. Para Zenet (sales-led BOH con onboarding requirement), **ignore PLG trial→paid stats**.
4. **ACV sensitivity crítica:** demo→close varía con deal size. Maxiality: $5k/yr ACV con pre-qualification = 44%; $2.4k/yr sin = 20%. **Zenet ACV ~MXN 18-25k/yr/location ($1k-1.4k USD)** está en lower SMB band — **pre-qualification es CRÍTICO** para keep demo→close above ~30%.
5. **Vendor self-reported data excluded** — MarginEdge, Toast, etc. publish case studies sin sample sizes ni methodology. Excluded from numeric modeling.

#### 8.11.8 Hipótesis abierta crítica para Zenet — funnel benchmarks Mexicanos

**Pregunta open:** ¿los conversion rates above hold para Mexican beachhead en práctica, o degradan más allá del cultural multiplier de timing? Sin pipeline real measured, es estimación.

**Cómo se cierra:** instrument CRM desde primer lead. Track:
- Date stamps por stage transition.
- Channel of origin (peer referral / consultor / inbound / outbound).
- Pre-qualification status (BANT-light scoring).
- *Contable* engagement timing.
- Pilot offered yes/no + outcome.

**Después de primeros 30-50 leads:** report median conversion + spread por stage. Compare contra benchmarks en §8.11.1-§8.11.2. Esto es **literatura primaria de Mexican restaurant SaaS funnel** que no existe en otro lado.

---

## 9. Anti-patterns que matan deals

Patrones validated como deal-killers que Zenet debe evitar consistentemente:

### 9.1 Demo combinado en vez de three-session structure

Combinar Demo Sessions 1-3 en un único meeting falla porque:
- Chef defers al manager y real concerns no surface (Query 5 explicit).
- Owner se aburre con detalle operativo destinado al gerente.
- *Contable* nunca participa.

**Fix:** three-session structure (cf. doc 04 §6.10 + §3 de este doc).

### 9.2 *Contable* engaged tarde

Engaging el *contable* post-Stage E es deal-killer. *Contable* introducido en Stage F directly = delays + fricción + potential veto.

**Fix:** *contable* track parallel desde Stage C (cf. §3.6).

### 9.3 Pressure tactics ("limited time offer", "price ends Friday")

Desconfianza inmediata en Mexican SMB context (cf. doc 03 §5.7 — 40.9% distrust de vendors en Jalisco). Validated cross-fuentes.

**Fix:** pricing transparente + consistent + sin urgencia artificial.

### 9.4 Cold outreach al operador

Validado como ineficaz en workspace + Centro de Control Zenet decisión mar-2026 ("pausar entrevistas en frío con dueños de restaurantes — segmento no cede tiempo a desconocidos").

**Fix:** vías alternativas validadas — consultor partner como #1, eventos presenciales TJ, red caliente Alan, La Canasta como apuesta upstream futura (cf. doc 01 §5.2).

### 9.5 Tech jargon en mensajería

Rechazado por workspace `01-brand-strategy/posicionamiento.md` y `04-voice-and-tone/voz-y-tono.md` (9 principios voz operativa). Mexican SMB digital maturity baseline (~10% software adoption cf. doc 04 §3.6.3) hace tech jargon doblemente alienante.

**Fix:** lenguaje del operador, no del software. *"Sistema operativo"* sí, *"AI-native cloud-native platform"* no.

### 9.6 Vendor-led demo sin operator running their own scenario

Demos donde el sales engineer hace todo el clicking mientras el operador observa pasivamente. Engagement bajo, recall bajo, conviction bajo.

**Fix:** dar control al operador en demo. *"Mete una de tus recetas — mira cómo funciona con tu data."*

### 9.7 Skipping kitchen tablet demo con chef

Argumentar "el chef no es decisor formal" para skip Demo Session 2. Validated como error: chef tiene strong de facto veto post-purchase si no se neutralizó pre-compra (cf. doc 04 §6.5 + §6.9).

**Fix:** chef session siempre, idealmente en cocina, en tablet, durante service slow period.

---

## 10. Mexican-specific buying process patterns

Esta sección sintetiza las dynamics culturales y estructurales documentadas en doc 04 §6.12 + Mexican SMB digitalization research, aplicadas al sales cycle de Zenet.

### 10.1 *Confianza* accumulation timeline

**Hipótesis estructurada:** el dueño Mexican SMB necesita ~2-4 meses de touchpoints recurrentes con Zenet (eventos, peer mentions, content consumption) **ANTES** de estar dispuesto a entrar al sales cycle formal. *Confianza* es precondition.

**Implicación:** marketing community-building (LinkedIn de Alan, eventos CANIRAC, podcast presence) son **investment de 6-12 meses ANTES** de esperar deals close. Zenet no puede esperar que el sales cycle entero salga de cold to closed en 4-12 semanas si no hay *confianza* accumulation previa via community.

### 10.2 *Contable* engagement sequencing

Refinado de doc 04 §6.6:

- **Stage B (Discovery):** identificar nombre y contacto del *contable*.
- **Stage C (Demo Manager):** champion debe introducir Zenet al *contable* via email/WhatsApp.
- **Stage D-E:** Ficha Técnica Contable enviada en parallel.
- **Stage F:** llamada técnica con specialist Zenet.
- **Stage G-H:** *contable* approval confirmed antes de firma.

Anti-pattern: *contable* engaged solo en Stage F-G como rubber stamp. Falla.

### 10.3 Peer validation como gate informal

Sin endorsement específico de peer (otro restaurantero TJ/BC) o consultor reconocido (Murguía, Anna, Algira tipo), deal stall en Stage E independiente del demo quality.

**Implicación operativa:** Zenet debe construir bench de **operator references** desde primeros design partners. Cada cliente Fase 0-1 satisfecho es gate-opener para próximos 5-10 deals.

### 10.4 CANIRAC / industry association como legitimacy proxy

Membership o presencia en CANIRAC TJ + Bootcamp GastronomIA opera como signal de legitimidad similar a "third-party validation" en otros mercados.

**Implicación:** Zenet membership en CANIRAC TJ + sponsorship visible en eventos sectoriales locales = retorno en sales cycle compression.

### 10.5 Family-business decision dynamics

Cuando aplican (frecuencia hipótesis abierta — cf. doc 04 §2.4.5):

- Socio cónyuge/hermano puede tener veto silencioso.
- Decisión "hablada en casa" puede tomar semanas adicionales.
- *Confianza* familiar es separate de *confianza* commercial.

**Implicación:** sales cycle puede extenderse 1-2 semanas adicional cuando hay socio familiar no-visible. Acomodar en pricing/timing forecasts.

### 10.6 WhatsApp como canal de venta primario post-demo

Mexican SMB: post-demo follow-up vía WhatsApp es expectation, no preference. Email tarda más en respuesta. Voice notes son acceptable y a veces preferidos.

**Implicación:** Zenet sales process debe operar primarily en WhatsApp Business para post-demo communications. Email para formal materials (Ficha Técnica, contracts), WhatsApp para todo lo demás.

### 10.7 Pricing currency anchoring

Pricing en MXN, no USD. Conversión USD agrega cognitive friction y potential resistance.

**Implicación:** $1,500 MXN/sucursal/mes es declarative. Si referenciar USD, es secundario contextual (~$80 USD), no anchor primario.

---

## 11. Hipótesis abiertas prioritarias

Cinco preguntas críticas a cerrar con primeros 5-10 design partners y 15-25 paying customers. Diferentes a las de docs anteriores.

### 11.1 ¿WTP $1,500 MXN se sostiene cuando dueño directo firma?

Murguía (consultor) validó. **Falta validación con dueño directo del beachhead específico (TJ casual independiente 2-3 sucursales).** Probable que se sostenga, pero probabilidad de pricing pushback significativo en 30%+ del segmento es real.

**Cómo se cierra:** first 5 design partners se les presenta $1,500 sin descuento upfront, observar reacción + negociación; documentar outcome.

### 11.2 ¿Sales cycle real es 3-8 sem (US benchmark) o 4-12 sem (ajuste Mexican)?

`[HIPÓTESIS PRE-PMF]` 4-12 sem para Mexican beachhead. **Falta data primaria de pipeline real.**

**Cómo se cierra:** track desde lead inicial hasta firma de contract con primeros 5-10 design partners. Reportar mediana + spread.

### 11.3 ¿Three-session demo se sostiene en práctica, o el dueño insiste en demo único?

Three-session structure (cf. §3) está sostenida por Query 5 + best practices, pero pueden conflict con time-availability paradox del operador. Posible que dueño rechace 3 sesiones separadas y exija "una sola reunión de 1 hora con todos."

**Cómo se cierra:** primeras 5 sales attempts — proponer three-session structure y observar push-back. Si 3+ de 5 rechazan, ajustar a structure híbrido.

### 11.4 ¿Cuál es el deal-breaker más letal en práctica?

Los 7 deal-breakers de §6 son exhaustivos en teoría. **Falta data de cuál mata deals con mayor frecuencia real.** Hipótesis: CFDI compliance gap + *contable* veto. Pero podría ser otro no anticipado.

**Cómo se cierra:** documentar cada deal lost con razón primaria. Después de 10-20 deals lost, patrón emerge.

### 11.5 ¿Pilot 30-60 días cierra deals o es excusa para postponer commitment?

Pilot offer es save move táctico, pero puede convertirse en "indefinite delay" si operador usa pilot como way to avoid firma final. **Falta data de tasa de conversión pilot → paying.**

**Cómo se cierra:** track tasa de conversión pilot → paying en primeros 10 pilots. Hipótesis: 60-80% (Perplexity benchmark LATAM SMB SaaS), pero podría ser menor en Mexican beachhead.

---

## 12. Fuentes

### Conversaciones citadas

- **Víctor Murguía** — Chef y consultor gastronómico independiente (Mexicali). Demo MVP 2026-04-01. Validó pricing $1,500 MXN como razonable para el segmento.
- **Anna Palazuelos** — Consultora gastronómica. LinkedIn DM 2026-03-19. Aporta context sobre criterios de evaluación de operación restaurantera.

### Documento externo central

- `/02_Producto-y-Tech/Production-software/Zenet/docs/project-strategy/business-context/zenet-business-context-production.md` v1.0:
  - §7 Pricing Hypothesis — base para §5 WTP.
  - §8 Validation Status — Murguía como single validator de pricing.

### Documentos del workspace referenciados

- `00-etapas-y-marco-de-investigacion.md` — taxonomía de etiquetas de evidencia, etapa actual.
- `02-jobs-to-be-done.md` — articulación de jobs por persona; alimenta §4 criteria.
- `03-pains-y-workarounds.md`:
  - §3.2 workarounds (Excel, POS, despacho contable, consultor) — alimenta §5.2 anchoring.
  - §5.7 distrust 40.9% Jalisco — alimenta §9.3 pressure tactics anti-pattern.
  - §5.8 trust hierarchy peer-first — alimenta §10 Mexican-specific patterns.
- `04-customer-journey-detallado.md`:
  - §3.4 Consideración + §3.5 Decisión — base para §3 sales stages.
  - §3.6.7 Realidad POS data exchange Fase 1 — alimenta §3.3 + §3.4 + §6.6.
  - **§6 Multi-stakeholder journeys completo** — fuente master para §3 (stages), §4 (criteria), §10 (Mexican patterns).
  - §6.6 *Contable externo* — fuente master para §3.6 + §6.4.
  - §6.10 Three-session demo structure — fuente master para §3.3-§3.5 + §9.1.
  - §6.12 Mexican business culture patterns — fuente master para §10.
- `Market Research and Analysis/_context/01-industry-and-market/05-perfil-de-cliente-ideal.md`:
  - §5.4-§5.5 customer journey base — sales cycle 3-8 weeks, 7-15 touchpoints.
  - §6 Anti-ICP — base para §6 deal-breakers + §7.4 anti-signals.
  - §7 Sistema scoring — alimenta §3.1 lead qualification.
- `Market Research and Analysis/_context/01-industry-and-market/06-estructura-y-ecosistema.md`:
  - §14 Modelo consultor partner — alimenta §3.1 lead origin + §8.3 deal accelerators.
- `Market Research and Analysis/_context/01-industry-and-market/07-geografia-y-expansion.md` §17 — pricing por fase.
- `Market Research and Analysis/_context/01-industry-and-market/08-entorno-regulatorio.md` — CFDI compliance + SAT context para §6.1.
- `CLAUDE.md` §8 — capa cultural antagonista.

### Triangulaciones externas heredadas (vía doc 04 §10)

Las 5 queries Perplexity 2026-05-06 ya integradas en doc 04 alimentan doc 05 indirectamente:

- **Query 1 — onboarding patterns:** alimenta §3.8 transition a onboarding.
- **Query 2 — TTFV-retention correlation:** alimenta §5.6 conditions for WTP.
- **Query 3 — churn patterns + champion departure:** alimenta §3.7 pilot + §8.4 deal stalls + §9 anti-patterns.
- **Query 4 — expansion + sales motion economics:** alimenta §3 sales cycle + §5.3 pricing models.
- **Query 5 — multi-stakeholder buying journey:** **fuente master para §3 sales cycle structure + §4 criteria divergence + §10 Mexican patterns**. Three-session demo structure, *contable* dynamics, champion data, trust hierarchy todos provienen aquí.

### Triangulación Perplexity Pro — Query 1 (2026-05-07)

Query: *"Willingness to pay benchmarks SMB restaurant SaaS Mexico LATAM monthly recurring price points"*. Modo: DeepSearch.

**Fuentes Mexico-native vendor pricing (load-bearing para §5.1, §5.2, §5.3):**

| # | Vendor / Doc | Tier | MXN/mes | Pricing Model | Source |
|---|---|---|---|---|---|
| Q1-1 | SoftRestaurant | LITE/PRO monthly | $699-999 +IVA | Per-installation | softrestaurant.com 2024 |
| Q1-2 | Fudo Mexico | Inicial / Avanzado / Pro | $360 / $690 / $1,050 +IVA | Per-location | fu.do PDF feb 2026 |
| Q1-3 | PoloTab | Standard | ~$1,490 +IVA inferred | Per-location | polotab.com/amigos |
| Q1-4 | Poster POS Mexico | Mini / Business / Pro | $495 / $837 / $1,179 +IVA | Per-location | joinposter.mx 2026 |
| Q1-5 | SICAR / SICAR X | Restaurantes | $399-499 IVA incl. | Per-server license | sicar.mx / sicarx.com 2025 |
| Q1-6 | Bistrosoft Mexico | Web / Light / Pro | $499 / $949 / $1,599 +IVA | Per-location | bistrosoft.com/mx 2026 |
| Q1-7 | Dyshez | Premium | $2,100/mes (annual) | Per-location | dyshez.com 2025 |
| Q1-8 | Nei Digital | (vs SoftRestaurant) | desde $597 | Per-location | nei.digital 2024 |

**Fuentes US/Canada BOH-specific analog (load-bearing para §5.2 anchor):**

| # | Vendor | Tier | USD/mes | Source |
|---|---|---|---|---|
| Q1-9 | MarketMan | Starter / Growth | USD 199 / 249 | marketman.com 2024 |
| Q1-10 | MarginEdge | Full / + Freepour | USD 350 / 500 | marginedge.com 2025 |
| Q1-11 | WISK AI | Small / Professional | USD 189-249 | wisk.ai 2025 |
| Q1-12 | Toast | Core / Full stack effective | USD 69 / 400-500 | koronapos.com 2024 |
| Q1-13 | DishCost | Recipe costing only | USD 39 | dishcost.com 2026 |
| Q1-14 | Restaurant365 | Full BOH ops | USD 499+ | wisk alternatives review 2025 |

**Fuentes WTP research + market context:**

| # | Source | Key contribution |
|---|---|---|
| Q1-15 | Canada's Restaurant Guy 2024-2025 | **Cierre análogo más cercano:** 73% Canadian independents sin food costing; 79% pagarían si trusted; **median WTP USD 350/mo** |
| Q1-16 | ComparaSoftware Mexico/LATAM 2024 | Market avg: USD 35/mo entry tier; USD 50-60/mo advanced tier |
| Q1-17 | Reforming Retail 2024 | US small independents (<USD 500K rev) = "$0 spend on tech beyond POS" — floor counterpoint |
| Q1-18 | Magokoro Mexico SaaS guide 2026 | **Mexican SaaS tier guidance: Básico $500-800; Profesional $1,500-2,500; Empresarial $5,000+** |
| Q1-19 | Grand View Research LATAM 2024 | LATAM restaurant software market USD 294.6M en 2024; growing 18.6% CAGR; Mexico highest CAGR |
| Q1-20 | IIEG Jalisco 2023-2024 | 23.2% restaurants citing "high commissions / not profitable"; 40.9% distrust |

**Fuentes currency anchoring + USD friction:**

| # | Source | Key contribution |
|---|---|---|
| Q1-21 | Reddit r/SaaS USD-to-local pricing experiment 2026 | **+28% conversion en switching to local currency** |
| Q1-22 | Shopify multi-currency research 2025 | **92% prefer local currency; 33% abandon if USD-only** |
| Q1-23 | MyFundbox SaaS currency mistakes 2025 | Peso volatility makes Mexican operators particularly USD-resistant |

**Reporte original completo (45 fuentes):** `/Users/alanbahena/Downloads/WTP Benchmarks for BOH Restaurant SaaS — Mexico   LATAM   US Analog.md`.

**Caveats críticos declarados por la propia investigación:**
1. **NO formal WTP survey for Mexican independent restaurant BOH SaaS exists** — confirmed cross-fuente (CANIRAC, IIEG, trade press, academic). Las primeras 5-10 design partner interviews son literatura primaria.
2. **Canadian USD 350 median NOT directly transposable** — Canadian economics distinta (higher labor, higher avg check). Behavioral pattern aplica; price point no.
3. **Mexican market shows revealed BOH premium of MXN 330-650/mo** above base POS — primary triangulation evidence para Zenet pricing.

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) Recalibración importante:** $1,500 MXN está en **lower premium tier** del mercado mexicano, NO mid-tier. Comparables directos: PoloTab $1,490, Bistrosoft Pro $1,599, Fudo Pro $1,050. Mensajería debe articular premium positioning con justified value prop, no posicionar como "alternativa accesible".
>
> **(2) MXN-native pricing strongly recommended.** Toda evidencia converge: USD pricing pierde 28% conversion en LATAM; 92% prefer local currency; peso volatility amplifica USD resistance. Presentar como **MXN 1,500 + IVA**, no USD 80.
>
> **(3) Per-location flat fee es la convención dominante mexicana.** Todos los competitors la usan. Zenet alineado con expectation del mercado — friction-free cognitively.
>
> **(4) Standalone BOH positioning challenge:** todos los Mexican vendors entre $500-1,600 bundlean POS+BOH. Zenet standalone en $1,500 enfrenta "duplication perception" si operator already paga POS. Mensajería: "Zenet sustituye Excel + WhatsApp + libreta, NO el POS". POS coexiste.
>
> **(5) Fase 0 design partner discount 20-30% lleva precio a $1,050-$1,200** — alineado con Fudo Pro $1,050 + Poster Business $837. Esto convierte el discount strategically en alignment con mid-tier mexicano para early adopters.
>
> **(6) WTP gap es el research opportunity más fuerte de Zenet.** Producir literatura primaria desde primeras 5-10 design partners.

### Triangulación Perplexity Pro — Query 2 (2026-05-07)

Query: *"B2B SaaS sales cycle duration Mexican SMB hospitality benchmarks confianza relationship building"*. Modo: DeepSearch.

**Fuentes cross-SaaS sales cycle benchmarks:**

| # | Source | Cifra clave |
|---|---|---|
| Q2-1 | Culta.ai B2B SaaS Sales Cycle Benchmarks 2026 | <$5K = 18 días; $5K-$25K = 42 días; median 84 días |
| Q2-2 | Optifai Pipeline Study (n=939) 2026 | SMB <$15K = 14-30 días; cycles up 22% desde 2022 |
| Q2-3 | Prospeo SaaS Sales Cycle 2026 | Average 134 días (+25% desde 2022) |
| Q2-4 | ORM-Tech Sales Cycle Length Guide 2026 | **Vertical SaaS (industry-specific) = 90-120 días** — closest analog Zenet |
| Q2-5 | ROIpad B2B SaaS Sales Cycle Benchmarks 2026 | **EMEA +20-30% vs US**; LATAM estimado +30-50% |
| Q2-6 | SaasHero Restaurant Tech B2B Marketing 2026 | Restaurant tech multi-stakeholder = 9-12 meses |

**Fuentes Mexico/LATAM sales cycle:**

| # | Source | Cifra clave |
|---|---|---|
| Q2-7 | Mexico Business News — minu B2B SaaS LATAM 2023 | "Pending decisions" stall pattern; trust como primary barrier; LATAM cultural friction documentada |
| Q2-8 | Ecosistemastartup.com B2B Glosario 2026 | Mexico PyMEs 2-4 sem; medianas 1-3 meses; corporativos 6-18 meses |
| Q2-9 | MediaSource México 2026 | B2B "3 a 12 meses" en local market |
| Q2-10 | FirstSales.io Mexico Sales Guide 2025 | Referral-first culture; hierarchy; family business dynamics |

**Fuentes Hofstede + cultural dimensions:**

| # | Source | Cifra clave |
|---|---|---|
| Q2-11 | Hofstede Insights / Cyborlink Mexico | **PDI 81, UAI 82, IDV 30** — structural cultural multipliers |
| Q2-12 | International Business Center — Hofstede Mexico | **UAI 82 = highest dimension Mexico**; risk-averse pattern |
| Q2-13 | MexTax Cultural Differences 2025 | Hierarchy; "yes" doesn't mean agreement; differing urgency |
| Q2-14 | Mexicada — Trust Mexican Business Negotiations 2025 | "Trust takes several meetings to months" |

**Fuentes Mexican SME tech adoption:**

| # | Source | Cifra clave |
|---|---|---|
| Q2-15 | Science Publishing — Mexican SME Software Adoption 2023 | **Mexican SMEs adopt based on recommendations, NOT economic feasibility** |
| Q2-16 | UANL — ICT Adoption Mexican SMEs 2025 | Resistance to change como primary non-adoption factor |
| Q2-17 | Sonora SME tech barriers research 2023 | Complexity + lack of knowledge + resistance to change como main barriers |
| Q2-18 | Telefónica Movistar Adopción Digital PyMEs 2023 (n=1,748) | **64% SMEs see barriers; 21% no budget; 24% complexity (micro)** |
| Q2-19 | BFA Global / Stanford Digital Payments Mexico 2024 | **22 friction points en vendor onboarding** — implementation fear > awareness skepticism |
| Q2-20 | IIEG Jalisco Encuesta Restaurantes 2024 (n=300+) | **40.9% distrust > 23.2% commissions** como primary barrier |

**Fuentes restaurant tech sales practice:**

| # | Source | Cifra clave |
|---|---|---|
| Q2-21 | Leadbeam.ai Restaurant Tech Sales Field Guide 2026 | **Best timing Mar-Jue 14:00-16:30**; demo <15 min; stall handling |
| Q2-22 | Cloud-Awards SynergySuite — Beyond the Demo 2026 | 30-60 day ROI demonstration requirement; pilot programs |
| Q2-23 | Aexus B2B Touchpoints 2025 | **8-15 touchpoints standard; cold +**, warm - |
| Q2-24 | Genius Referrals B2B 2025 | **84% B2B decision-makers start con referral** |
| Q2-25 | Siempre al Día Migración Software Contable Mexico 2026 | **Best migration window Enero-Febrero**; fiscal calendar gating |

**Reporte original completo (34 fuentes):** `/Users/alanbahena/Downloads/B2B SaaS Sales Cycle in Mexico — Restaurant & SMB Benchmarks.md`.

**Caveats críticos declarados por la propia investigación:**
1. **NO Mexico-specific BOH restaurant SaaS sales cycle primary data exists.** Todo es triangulación cross-fuente.
2. **"4-12 weeks" hypothesis cannot be validated ni refuted from published sources** — sits within plausible range.
3. **LATAM cycle elongation multipliers NOT quantified** para Mexico specifically. +30-50% es practitioner heuristic, no measured CRM data.
4. **Tijuana-specific factors** pueden accelerar (border-city higher digital maturity) o delay (segment behavior may differ from aggregate).
5. ***Contable* gating effect** documented as Mexico SMB pattern pero **not quantified in time** — estimated +4-8 semanas si not managed proactively.
6. **Restaurant segment-specific data within Mexico is absent** — CANIRAC/IIEG cover broadly pero no isolate independent casual 2-3 location segment.

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) Hipótesis revisada CRÍTICA: 4-12 sem fue optimista.** Realidad es **6-20 sem con 3-lane model**. Median realistic = **8-16 sem** (standard lane). Forecasting + cash flow planning deben asumir esto.
>
> **(2) UAI 82 + IDV 30 son los structural drivers principales.** Risk aversion + collectivism amplifican stall-loop pattern. Solution: peer references + local proof + warm referrals como acceleration #1.
>
> **(3) Implementation fear > awareness skepticism** como barrier dominante. **22 friction points en onboarding kill momentum**. Implicación: marketing investment alone insufficient — onboarding simplicity es structural sales lever.
>
> **(4) Free pilot 2-4 sem bypasses implementation fear** — pone operador en onboarding antes de financial commitment. High-leverage move documentado.
>
> **(5) "Hablamos pronto" stall loop puede consumir 4-8 sem de phantom pipeline.** Sin specific next-step date set in person, deals accumulate en pending state. Sales motion debe close every interaction con **concrete commitment**: *"¿Te queda bien martes 3PM para finalizar?"*
>
> **(6) Source consultation sequence Mexico-specific NO LinkedIn-driven.** Investment priorities: Instagram/Facebook content español + WhatsApp Business + in-person eventos (CANIRAC) + peer referral mechanics. **NO LinkedIn ads, NO G2 listings** para este segment.
>
> **(7) Best timing in-person operativo: Mar-Jue 14:00-16:30** — owner-operators tienen ventana específica de availability. Sales motion debe targeting esto.
>
> **(8) Blackout windows declarados: Diciembre/Navidad/Semana Santa.** Avoid scheduling implementation o close mid-season peak.

### Triangulación Perplexity Pro — Query 3 (2026-05-07)

Query: *"Pricing model perception independent restaurant operators per-location vs hybrid vs usage-based fairness"*. Modo: Search Pro.

**Fuentes pricing model perception research:**

| # | Source | Cifra clave |
|---|---|---|
| Q3-1 | Maxio Guide to SaaS Pricing Models 2025 | Operadores valoran predictability + simplicity + linkage a economics propios sobre theoretical "fairness" |
| Q3-2 | Jelly UK Restaurant Software Pricing | "Flat rate per location turns software from moving target to stable line on P&L" — **operator language documentado** |
| Q3-3 | Flippa SaaS Pricing Value Perception | Value-metric pricing matches mental model operator; **better retention + expansion** |
| Q3-4 | WithOrb B2B SaaS Pricing | ProfitWell / Patrick Campbell: value-metric correlates con better retention |
| Q3-5 | Quantide LinkedIn Pricing Strategy | Tiered works si entry tier incluye core job; SMBs reaccionan mal a big jumps (29→149 USD) y "paywalling basics" |
| Q3-6 | Stripe Hybrid Pricing Models | Hybrid increasingly common B2B SaaS; outperforms pure flat o usage en growth |
| Q3-7 | Chargebee Hybrid Pricing | SaaS Capital data: hybrid + value metrics improves expansion revenue |
| Q3-8 | Airwallex SaaS Pricing | Pure usage-based: "fair en principio, stressful en práctica"; emotionally risky bills fluctuate |

**Fuentes per-seat / per-user backlash:**

| # | Source | Cifra clave |
|---|---|---|
| Q3-9 | Forbes Tech Council Per-Seat 2025 | **"SaaS pricing model that everyone hates"** — psychological + operational backlash |
| Q3-10 | Bain Per-Seat Software Pricing 2024 | "Per-seat not dead but new models gaining steam" |
| Q3-11 | Wise SaaS Pricing Models | "I get punished for involving more of my team" — operator language |
| Q3-12 | UserHub Slack Fair Billing Policy | **Slack per-active-user + auto-credit inactive seats**: solution to per-seat pain. Per-seat acceptable si avoids charging shelfware |
| Q3-13 | Vista Point Advisors SaaS Pricing | OpenView/Monetizely: companies moving beyond per-seat show higher NRR |

**Fuentes restaurant pricing fairness:**

| # | Source | Cifra clave |
|---|---|---|
| Q3-14 | Cornell Hospitality Surcharge Research | **Diners perceive surcharges como less fair que simple price increases at identical economics** — operators extrapolate to vendor relationships |
| Q3-15 | DePaul "Fair or Unfair?" Hospitality Research | Same finding — transparency + bundled pricing = fairer perception |
| Q3-16 | RMS Sherri Kimes Menu Price Increases | Explaining changes improves fairness perception; surprise add-ons damage trust |
| Q3-17 | Restaurant Law Center FTC Comments | Transaction fees = "tax on revenue" en restaurant trade press framing |
| Q3-18 | Marcus Treamer Hospitality Hidden Fees | Hidden fees = "hospitality crisis" |

**Fuentes pricing transparency:**

| # | Source | Cifra clave |
|---|---|---|
| Q3-19 | OpenView Pricing Transparency Study | **79% customers prefer brands con clear upfront pricing; 70% frustrated por hidden fees** |
| Q3-20 | HG Partners Publishing Your Pricing | "Hidden prices, lost buyers" — opaque pricing suppresses inbound + trust |
| Q3-21 | PacePricing B2B Transparency | SMBs don't want "get on sales call just to find out if budget" |

**Fuentes Mexican / LATAM revealed preferences:**

| # | Source | Cifra clave |
|---|---|---|
| Q3-22 | Mexican vendors revealed preferences | **TODOS use per-location flat o tiered** — SoftRestaurant, Fudo, Poster, Bistrosoft, SICAR, PoloTab. **NONE charge % of sales para BOH** |
| Q3-23 | Clip Mexico transaction fees | 3.6% +IVA per transaction — payments only, no BOH features |
| Q3-24 | International Business Center Hofstede Mexico | UAI 82 — SMBs uncomfortable con unpredictable costs / hard-to-verify calculations |
| Q3-25 | BFA Global Mexican SME % fee fatigue | Operadores describe additional % fees como "another bite out of already thin margins"; fixed fees feel more controllable |
| Q3-26 | Telefónica Movistar Mexico Adoption 2023 | Complexity + lack of understanding como top barriers; variable fees add complexity |
| Q3-27 | Unlock LATAM SaaS Pricing | Multi-currency / USD-denominated SaaS associated con foreign enterprise tools; adds friction en Mexican SMB |

**CSV adjunto: pricing_model_perception_rankings.csv** — quantitative scoring 8 models (Fairness / Predictability / Transparency / Operator Preference Restaurant).

**Reporte original — Query 3 fue compartido como texto en hilo de chat + CSV (no como file separado), 2026-05-07.**

**Caveats críticos declarados por la propia investigación:**
1. **Direct quantitative research on Mexican restaurant operators' pricing model preferences for SaaS is essentially absent.** Evidence indirecta — revealed preferences competitor pricing, Hofstede dimensions, BFA Global SME research, hospitality fairness research transposed.
2. Sources mostly US/UK/global hospitality + Mexico SMB digitalization research broadly, no restaurant-specific Mexican pricing perception study.

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) Per-location flat es indisputable winner cross-fuente.** Fairness 9/10, Predictability 10/10, Transparency 10/10. Confirmed cross-mercado + Mexican vendor revealed preferences. Validates Zenet decision.
>
> **(2) Transaction fee % of sales = catastrophic loser.** Lowest perception scores (4/10 fairness, 3/10 predictability). Mexican operators ya stacked commissions; add Zenet % = "stacking" perception. **Avoid completamente — incluso en hybrid component que touches gross sales**.
>
> **(3) 3-tier structure recomendada:** Básico $1,200 / Pro $1,500 (default beachhead) / Multi-Sitio $1,800 +IVA. Modest $300 step-ups alineados con Quantide warning. **Core BOH value en entry tier — no paywall el core job**.
>
> **(4) Pricing transparency expectation: 79% prefer published pricing; 70% frustrated por hidden fees.** Implication: publish prices on Zenet site. Reserve "call us" only para genuinamente atypical multi-brand/franchise deals.
>
> **(5) Per-active-user (Slack model) es la única forma viable de per-seat** si alguna vez Zenet evalúa ese model. Auto-credit inactive seats neutraliza objection. Pero NO recomendado para Fase 1 dado restaurant turnover 80% — overhead de tracking + cognitive friction superan benefit.
>
> **(6) Hybrid acceptable solo cuando variable component feels like "fuel" (extra storage, SMS, integrations) NO "tax" en core job.** Aceptable add-on potencial: advanced analytics, multi-brand consolidation, deep CONTPAQi/Aspel integration. NUNCA tied to gross sales o invoice volume general.

### Triangulación Perplexity Pro — Query 4 (2026-05-07)

Query: *"Discount sensitivity SMB B2B SaaS Mexico LATAM cultural pricing perception"*. Modo: DeepSearch.

**Fuentes academic + cultural research Mexico:**

| # | Source | Cifra clave |
|---|---|---|
| Q4-1 | CLADEA Ogliastri & Davis — Intercultural Negotiations Mexico City | **Mexicans expect 5-10% discount as ritual at close**; ultimatums + pressure tactics worst-rated; "give me my price or no deal" counterproductive |
| Q4-2 | Santander Trade Mexico Business Practices | "Hard selling, pressure tactics, confrontation are to be avoided" |
| Q4-3 | Tecma Group Negotiations Mexico | Credibility + personal relationship as primary levers; consistent stance preserves price credibility |
| Q4-4 | GlobalBusinessCulture Mexico Negotiation | Patience; no urgency; relationship overrides proposal; personal connection > pricing structure |
| Q4-5 | MexTax Cultural Differences Mexico | Hierarchy; indirect communication; "yes" doesn't mean agreement |
| Q4-6 | International Business Center Hofstede Mexico | **UAI 82 amplifies price-as-quality-proxy heuristic** — low price increases perceived risk |

**Fuentes B2B discount research:**

| # | Source | Cifra clave |
|---|---|---|
| Q4-7 | El Economista — Aplica descuentos de forma efectiva (Jan 2024) | 49% Mexicans prefer buy with discounts (consumer); BUT excessive/unjustified discounts **"devalúan el producto y la confianza del cliente"**; 40-70% ranges flagged damaging |
| Q4-8 | Activa Ventas — Defensa del precio (Spanish sales training) | **"NUNCA ofrezcas descuento a priori para enganchar"**; unjustified discount = "producto vale menos" |
| Q4-9 | SaaStr — Design Partner Incentive Structures | **30-50% discount durante 12-24 meses + structured exit a standard pricing** |
| Q4-10 | GrowthSuite — Discounts and Product Quality Perception | 5-15% minimal impact; 15-25% strong satisfaction si justified; 25%+ triggers quality skepticism |

**Fuentes save-move + cancellation research:**

| # | Source | Cifra clave |
|---|---|---|
| Q4-11 | Paddle Retain Cancellation Flows | **Structured flows save 25-30%; 50% discount at cancel = 2% deflection** (low effectiveness); annual ARR churn -5.3% |
| Q4-12 | Tony Sternberg LinkedIn — Retention Discounts | Time-constrained, targeted, A/B tested; permanent blanket "cheapen brand" |
| Q4-13 | ChurnMate LinkedIn — Cancellation Flows | **"Train your market to cancel for discounts"** as explicit risk |
| Q4-14 | Mexico Business News B2B SaaS LATAM | Mexico cancellation requests RARE pero GENUINE; operator already decided cuando arrive |
| Q4-15 | Naps International — Mexican Business Culture | **Mexican culture values personal attention from leadership > price reduction** as retention signal |

**Fuentes bundle vs discount preference:**

| # | Source | Cifra clave |
|---|---|---|
| Q4-16 | Activa Ventas | "Más por lo mismo" preferred framing en Mexico |
| Q4-17 | Gratify Pay — Bundling Products as Alternative to Discounting | Bundle additions feel like gain; direct price cuts destabilizing |
| Q4-18 | Ibbaka — Discount Fixed vs Variable Components | When/how discount platform fee vs usage components |

**Fuentes implementation fear + alternatives:**

| # | Source | Cifra clave |
|---|---|---|
| Q4-19 | BFA Global / Stanford Mexico SME Digital Payments 2024 | **22 friction points en onboarding** — implementation fear primary barrier; free pilot bypasses |
| Q4-20 | PoloTab Amigos | Referral discount model precedente Mexico |
| Q4-21 | SoftRestaurant Pricing | Annual prepay 11 meses charged, 1 free — convención mexicana |
| Q4-22 | Bistrosoft Mexico | Annual commitment discount precedente |

**Fuentes PPP / currency:**

| # | Source | Cifra clave |
|---|---|---|
| Q4-23 | Reddit r/SaaS USD-to-Local Currency | 280% LATAM conversion uplift con PPP-adjusted regional pricing |
| Q4-24 | Unlock LATAM SaaS Pricing | MXN-native pricing already embedded PPP — don't double-adjust |
| Q4-25 | ChurnZero SMB Retention Benchmarks | Median annual SMB revenue churn 10-14% |

**Reporte original — Query 4 fue compartido como texto en hilo de chat (no como file separado), 2026-05-07.**

**Caveats críticos declarados por la propia investigación:**
1. **NO Mexico-specific cancellation discount effectiveness data exists.** Global benchmarks aplican con Mexican behavioral caveats.
2. **CLADEA study es academic primary source más cercano** sobre Mexican negotiation behavior — pero es general B2B, no restaurant-specific.
3. **El Economista 49% prefer discounts es consumer context** — extrapolated to B2B con caveat.

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) "Socio fundador" es la única framing que justifies 30-50% discount.** Sin esa narrative, magnitudes >25% trigger quality skepticism. Zenet Fase 0 design partner pricing **DEBE comunicarse como "estamos en etapa fundacional buscando socios"**, NO como "20% off para early adopters" genérico.
>
> **(2) Esperar push 5-10% en negociación final como ritual cultural.** Accommodate sin pushback agresivo — preserves cultural ritual sin damage de price credibility. NO accommodate >15% sin structural reason.
>
> **(3) Pressure tactics ("expira viernes") = catastrophic en Mexico.** Avoid completamente. Triggers desconfianza inmediata + erode confianza. CLADEA confirma como "worst tactic observed".
>
> **(4) Save-move primary: subscription pause + founder escalation, NO price discount.** Mexican culture values personal attention from leadership > price reduction. Pause durante seasonality + downgrade path > permanent discount.
>
> **(5) "Más por lo mismo" framing siempre preferred over "same for less".** Bundle additions feel like gain; price cuts destabilizing. Implicación: agregar features/modules como save move, NO descuentos directos.
>
> **(6) NEVER price below MXN 800-900 sin structural reason.** Below entry tier baseline of SoftRestaurant Pro ($999) y Bistrosoft Pro ($1,599) = "toy product" perception en high-UAI Mexico. Quality skepticism doblemente amplificada.
>
> **(7) Discount doctrine declarada (cf. §5.4.7):** transparent published pricing + accommodate 5-10% close ritual + Fase 0 design partner 30-50% con narrative + annual + multi-location + referral discounts como standard convention. NUNCA urgency-based.

### Triangulación Perplexity Pro — Query 5 (2026-05-07)

Query: *"B2B SaaS funnel conversion rates by stage SMB hospitality lead to close benchmarks"*. Modo: Search Pro.

**Fuentes hospitality SaaS slice (la única disponible):**

| # | Source | Cifra clave |
|---|---|---|
| Q5-1 | FirstPageSage 2025 — B2B SaaS Funnel Conversion Benchmarks (Hospitality SaaS slice) | **Visitor→Lead 1.6% / Lead→MQL 45% / MQL→SQL 38% / SQL→Opp 38% / Opp→Close 38%**. Lead→Close ~6-7% en strong inbound |

**Fuentes B2B SaaS funnel benchmarks general:**

| # | Source | Cifra clave |
|---|---|---|
| Q5-2 | PixelWithin B2B SaaS Conversion Benchmarks 2026 | Lead→MQL 37-41% / MQL→SQL 39-42% / SQL→Opp 42-48% típico |
| Q5-3 | CausalFunnel B2B SaaS Funnel Benchmarks 2026 | Aggregated CRM data B2B SaaS sales-led |
| Q5-4 | SaasHero 2026 B2B SaaS Conversion | **SQL→Closed-Won 20-25%; top performers 30%+** |
| Q5-5 | Maxiality 2022 SMB SaaS Demo Conversion | **Demo→customer 44% ($5k/yr ACV pre-qualified) vs 20% ($2.4k/yr no pre-qualification)** |
| Q5-6 | Pipelineroad B2B SaaS Sales Funnel | **Demo→Pilot 50-70% sales-led SMB con default pilot; 30-50% optional** |
| Q5-7 | Apollo.io B2B SaaS Sales Funnel | Cycle 107→134 días (+25% 2022-2025); SMB <$10k = 45-90 días |
| Q5-8 | SPOTIO B2B Sales Funnels 2026 | Average 60-120 días; win rate 15-30% B2B SaaS |
| Q5-9 | Prospeo Funnel Conversion Rate | Lead→Customer **3-5% average; 7-10% top quartile** B2B SaaS |
| Q5-10 | Ibbaka B2B SaaS POC Conversion | **Pilot→Paid 75% median** SMB ACVs <$10k cuando structured + time-bound; 60-80% range typical |

**Fuentes restaurant tech specific cycle:**

| # | Source | Cifra clave |
|---|---|---|
| Q5-11 | SaasHero Restaurant Tech B2B Marketing 2026 | **Independent single-location: Demo→Close 30-90 días; Multi-stakeholder (GM/chef/finance): 2-6 meses; Enterprise/franchise: 9-12 meses** |
| Q5-12 | SaasHero Restaurant Tech qualitative guide | Sales-led, field-heavy; chef inclusion increases close rates |

**Fuentes multi-stakeholder committee impact:**

| # | Source | Cifra clave |
|---|---|---|
| Q5-13 | Apollo.io Buying Committee Research | Committees 5.4→6.8 = **+15-20% cycle length pero higher win rate quality** |
| Q5-14 | Gartner / Forrester (via SaasHero) | Median B2B tech buying group mid-market 6-10; **SMB 2-4 people** |

**Reporte original — Query 5 fue compartido como texto en hilo de chat (no como file separado), 2026-05-07.**

**Caveats críticos declarados por la propia investigación:**
1. **NO Mexico/LATAM-specific numeric funnel benchmarks exist** para sales-led SaaS. Todo global/US/EU + 1 hospitality slice.
2. **Hospitality SaaS data muy limitada** — FirstPageSage única public source. Heavily SEO/inbound-biased.
3. **Definitions vary:** Lead/MQL/SQL/Opportunity differ across studies. Internal definitions deben ser consistent antes de comparar contra benchmarks.
4. **PLG vs sales-led:** todos los benchmarks citados son sales-led o mixed-motion. **Ignore PLG trial→paid stats para Zenet BOH**.
5. **ACV sensitivity:** demo→close varía con deal size. Zenet ACV ~MXN 18-25k/yr está en lower SMB band — pre-qualification crítico.
6. **Vendor self-reported data excluded** — MarginEdge, Toast, etc. excluded from numeric modeling.

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) Recommended baseline targets para Zenet:** Lead→SQL 20-25%, SQL→Demo 50-60%, Demo→Pilot 60-70%, Pilot→Paid 60-75%, Lead→Closed 4-8%. **Mexican context NO degrada percentages substantialmente — degrada timing 1.5-2x**.
>
> **(2) Highest-leverage improvements:** Lead→SQL (lead quality + rapid SDR <48h follow-up) y Pilot→Paid (implementation success + *contable* buy-in). NOT Demo→Pilot (já típicamente alto).
>
> **(3) Pre-qualification es crítica.** ACV $2.4k/yr sin pre-qualification = 20% demo→close vs $5k con = 44%. **Zenet ACV ~$1.4k USD → demo→close lower band si no se pre-qualifica disciplinadamente.** Implementation del workspace ICP §7 scoring system (cf. doc 05 ICP) es non-negotiable.
>
> **(4) Multi-stakeholder committee es feature, no bug.** +15-20% cycle length, BUT higher win rate quality + lower post-sale churn. Mexican beachhead committee size (3-4 stakeholders) es ya en SMB band.
>
> **(5) Restaurant tech timing realistic:** Demo→Close 30-90 días single-location; **60-120 días para Zenet beachhead 2-3 sucursales con multi-stakeholder + Mexican adjustment** (alineado con 8-16 sem standard lane §8.4).
>
> **(6) Hospitality SaaS Lead→Closed 6-7% en strong inbound (FirstPageSage)** — superior al overall B2B average 3-7%, but heavily SEO-biased. Para Zenet con sales-led + outbound mix, **target realista 4-6% Lead→Closed inicial**, scaling to 6-8% con maduración del playbook.
>
> **(7) NO data Mexico-específica existe.** Las primeras 30-50 leads instrumented en CRM producen literatura primaria de Mexican restaurant SaaS funnel — activo de research declarado.

### Hipótesis abiertas pendientes de validación

Listadas en §11 (cinco preguntas críticas). Cierre con design partners durante etapa 2 + early-customer-evidence en etapa 3.

---

## 13. Áreas candidatas a triangulación con Perplexity Pro

Pasada de revisión post-redacción. Identifica gaps específicos donde local evidence es delgada y triangulación externa puede aportar.

### 13.1 Áreas identificadas como delgadas

| Área | Sección afectada | Estado | Query candidata |
|---|---|---|---|
| WTP benchmarks SMB hospitality SaaS Mexico/LATAM | §5.1 + §5.7 | ✅ Integrada 2026-05-07 — Query 1 DeepSearch | — |
| Mexican B2B SaaS sales cycle timing benchmarks | §8.2 | ✅ Integrada 2026-05-07 — Query 2 DeepSearch | — |
| Pricing model perception en hospitality operators | §4.2 + §5.3 | ✅ Integrada 2026-05-07 — Query 3 Search Pro | — |
| Discount sensitivity en SMB B2B SaaS Mexican context | §5.4 | ✅ Integrada 2026-05-07 — Query 4 DeepSearch | — |
| Conversion rates por stage del funnel SMB SaaS | §3 + §8 | ✅ Integrada 2026-05-07 — Query 5 Search Pro | — |

### 13.2 Próximo paso

Dispatch de **5 queries dirigidas** post-aprobación del draft. Mismo flow que doc 03 + doc 04. **Modo recomendado:**

| Query | Modo | Razón |
|---|---|---|
| 1 — WTP benchmarks Mexico/LATAM | DeepSearch | Mix cuali-cuantitativo + necesita source diversity |
| 2 — Mexican B2B sales cycle timing | DeepSearch | Cultural/qualitative dimension importante |
| 3 — Pricing model perception | Search Pro | Más conceptual, Search da overview adecuado |
| 4 — Discount sensitivity Mexican | DeepSearch | Cultural research, Search no llegará al matiz |
| 5 — Funnel conversion rates | Search Pro | Numérico/benchmark — Search da las cifras directo |

Lo que vuelva entra etiquetado `[Benchmark sectorial / Perplexity 2026-XX-XX]` en bloques separados de la evidencia local en sub-secciones específicas. Si una query no devuelve material útil, se descarta.

Esta sub-sección se actualiza con los resultados al ejecutar el dispatch.

### 13.3 Hallazgos secundarios que esperan home en otros docs

La redacción de doc 05 confirma que dos áreas siguen delgadas:

- **Doc 06 (objeciones y fricciones):** los anti-signals y anti-patterns de §7 + §9 son material directo cuando se redacte.
- **Doc 07 (voice of customer):** verbatims por stage del sales cycle (especialmente lenguaje del operador en Demo Sessions 1-3) son material a capturar cuando primeros design partners hablen.
