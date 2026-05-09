---
name: Voice of customer — verbatim library
description: Library plana de verbatims curados (gold / load-bearing / illustrative) con metadata estructurada por entry (persona × theme × stage × marketing use-case) + indices de navegación + coverage gaps. Designed for retrieval/reuse across marketing operations (copy, landing, social, sales enablement). NO repite docs 03/06 — esos usan verbatims como evidence; este ES la library misma.
type: customer-research
research_stage: discovery-pre-PMF
last_updated: 2026-05-08
status: active
version: 0.1
owner: Alan Bahena
---

# Voice of customer — verbatim library

## Índice

1. [Propósito + diferencia con docs vecinos](#1-propósito--diferencia-con-docs-vecinos)
   - Diferencia con docs vecinos
   - Cómo navegar este doc
2. [Marco metodológico](#2-marco-metodológico)
   - 2.1 Tipos de verbatims
   - 2.2 Source labeling + traceability
   - 2.3 Curation tiers
   - 2.4 Anti-falsificación rules — non-negotiable
   - 2.5 Metadata schema por entry
3. **[Library](#3-library)**
   - 3.0 Top 10 gold-tier — empieza aquí
   - 3.1 Library completa (V-001 → V-030)
4. **[Indices de navegación](#4-indices-de-navegación)**
   - 4.1 Por persona
   - 4.2 Por theme
   - 4.3 Por decision stage
   - 4.4 Por marketing use-case
5. [Coverage gaps + primary research roadmap](#5-coverage-gaps--primary-research-roadmap)
   - 5.1 Gaps declarados — verbatims que NO existen en library v0.1
   - 5.2 Primary research roadmap
   - 5.3 Library maintenance
   - 5.4 Honest declaration final
6. [Fuentes](#6-fuentes)

---

## 1. Propósito + diferencia con docs vecinos

Doc 07 es la **library curada de verbatims** del proyecto. Su propósito es servir como single source of truth para retrieval y re-use en marketing operations: copy, landing pages, social content, sales enablement, internal team alignment.

### Diferencia con docs vecinos

| Doc | Lens | Verbatim role |
|---|---|---|
| 02 JTBD | Jobs taxonomy | Sparingly cited |
| 03 Pains | Pain categorization + workarounds | Evidence inline |
| 04 Journey | Phase narrative | Contextual inline |
| 05 Buying | Criteria + sales cycle | Procedural inline |
| 06 Objections | Objection catalog | Anchor verbatim + disarming inline |
| **07 VoC** | **Verbatim library itself** | **El artefacto** — flat list con metadata por entry, organizado para retrieval |

Docs 03-06 usan verbatims como evidencia incrustada en narrativa. Doc 07 NO repite contenido narrativo — extrae los verbatims, les asigna metadata, y los hace retrievable por persona / theme / stage / use-case.

### Cómo navegar este doc

- **§3.0 Top 10 gold-tier** — los verbatims más load-bearing. Empieza aquí si solo tienes 60 segundos.
- **§3.1 Library completa** — todos los verbatims con metadata por entry, ordenados por tier descending.
- **§4 Indices de navegación** — listas de IDs por persona / theme / stage / marketing use-case. NO repiten contenido — solo referencian.
- **§5 Coverage gaps + roadmap** — qué NO está capturado todavía y por qué.

---

## 2. Marco metodológico

### 2.1 Tipos de verbatims

| Tipo | Definición | Marca en library |
|---|---|---|
| **In vivo** | Quote literal directo, atribuido a fuente nombrada o anónima trazable | `[VERBATIM]` |
| **Paraphrase** | Reformulación cercana de pattern documentado por researcher (NOT exact quote) | `[PARAPHRASE]` |
| **Aggregated** | Pattern documentado en multiple sources sin single attribution literal | `[AGGREGATED]` |
| **Stat-finding** | Hallazgo cuantitativo (NOT quote técnicamente, pero load-bearing como language) | `[STAT]` |

### 2.2 Source labeling + traceability

Cada entry incluye source + fecha + tipo. Convenciones heredadas de doc 00 §3:

- `[Q1-N]` / `[Q2-N]` / `[Q3-N]` — Perplexity queries doc 06 (Query 1 verbatim objections / Query 2 post-firma friction / Query 3 objection-handling effectiveness)
- `[Q-Foundation]` — Foundational research industry tech adoption lag (doc 03 §5.10)
- `[Demo Murguía 2026-04-01]` — Demo + entrevista chef-consultor Victor Murguía
- `[Notion-research]` — 7 Notion conversations curadas (cf. doc 01 §3-§5)
- `[Business context v1.0]` — Production repo zenet-business-context-production.md
- `[Mexican linguistic pattern]` — Pattern documented across múltiples Mexican Spanish sources

### 2.3 Curation tiers

| Tier | Criterio | Marca |
|---|---|---|
| **Gold** | Load-bearing — informa positioning, copy hero, sales motion fundamental. Citable at-will. | 🌟 |
| **Load-bearing** | Anchored evidence para una category específica. Citable con context. | ⭐ |
| **Illustrative** | Texture y color cultural. Útil para prose, NO para hero copy. | • |

### 2.4 Anti-falsificación rules — non-negotiable

> Estas reglas son structural priority. Violarlas degrada library de research artifact a marketing fiction.

1. **NO inventar verbatims.** Si el research no produjo el quote, NO se compone uno "que suena auténtico". Mejor declarar gap (cf. §5).
2. **NO componer verbatims compuestos.** No combinar fragmentos de 2+ operadores en un solo "quote" para impacto narrativo. Cada verbatim es atomic + atribuible.
3. **NO traducir literally del inglés sin nota.** Si la fuente es inglés (Bruce Nelson, MarketMan G2, Reddit US), el quote permanece en inglés con traducción al español marcada como tal — NO reemplaza el original.
4. **Mexican linguistic patterns marcados como `[AGGREGATED]`, NO como `[VERBATIM]`** salvo que tengan single attribution traceable. *"Hablamos pronto"*, *"el negocio es complicado"*, *"queda algo a fin de mes"* son patterns documentados, NO single-source quotes.
5. **Notion-research + Demo Murguía** se citan via paraphrase + reference — NOT as fabricated verbatims. Las conversaciones internas no produjeron transcripts publicables; lo que se sabe es pattern + summary.
6. **`[SIN FUENTE PUBLICADA]`** se usa para gaps declarados — coverage roadmap §5, NOT placeholder verbatims.

### 2.5 Metadata schema por entry

Cada entry de §3.1 sigue:

```
**V-XXX** [TIER] [TIPO]

> "Quote o paraphrase exacta"

- **Source:** [tag] — fuente + fecha
- **Persona:** dueño-operador / gerente / chef / contable / socio / industria / vendor
- **Theme:** identity-control / chaos-burnout / distrust / stoicism / aspirational / validation-seeking / time-scarcity / money-roi / discipline-failure / vendor-relationship
- **Stage:** pre-awareness / awareness / research / evaluation / negotiation / post-firma / renewal-churn
- **Use-case tags:** copy-hero / landing-body / social / sales-pitch / sales-disarm / internal-alignment
- **Cited en:** docs vecinos donde aparece como evidence
```

---

## 3. Library

### 3.0 Top 10 gold-tier — empieza aquí

Los 10 verbatims más load-bearing del proyecto. Cada uno informa positioning, sales motion, o messaging structural.

| # | ID | Verbatim corto | Theme |
|---|---|---|---|
| 1 | V-001 | *"Yo veo si a final de mes queda dinero en la cuenta, quiere decir que estoy haciendo dinero"* | identity-control |
| 2 | V-002 | *"The software isn't broken. The discipline is."* | discipline-failure |
| 3 | V-003 | **40.9%** de operadores Jalisco *"no les da confianza"* a software/tech vendors | distrust |
| 4 | V-004 | *"El grueso del restaurante no tiene almacenista"* | chaos-burnout |
| 5 | V-005 | *"Es difícil"* + *"es muy costoso"* — paired beliefs | distrust + money-roi |
| 6 | V-006 | *"After years of being a paying customer, this was insulting and incredibly tone-deaf."* | vendor-relationship |
| 7 | V-007 | *"Prefieren observar antes de comprometer"* | stage-stall |
| 8 | V-008 | *"Lo que te trajo aquí no te lleva a la siguiente sucursal"* | aspirational reframe |
| 9 | V-009 | *"El problema es sobrevivir"* | chaos-burnout |
| 10 | V-010 | *"Yo SOY el sistema"* | identity-control |

---

### 3.1 Library completa

Ordenada por tier descending. Dentro de cada tier, agrupada por theme primario.

---

#### V-001 🌟 [VERBATIM]

> *"Yo veo si a final de mes queda dinero en la cuenta, quiere decir que estoy haciendo dinero."*

- **Source:** `[Q1-1]` Soy Restaurantero Podcast T1:E7 — Jaume Romagosa, julio 2025 (cliente del entrevistado)
- **Persona:** dueño-operador
- **Theme:** identity-control · money-roi
- **Stage:** pre-awareness
- **Use-case tags:** copy-hero · sales-pitch · sales-disarm · internal-alignment
- **Cited en:** doc 03 §5.10 · doc 04 §6.5 · doc 06 §2.4.1 + §3.6 + §5.3 (gold verbatim of Query 1)
- **Por qué es gold:** El verbatim que reformula el TRUE incumbent. NO Excel, NO SoftRestaurant — el incumbent es **bank balance + cabeza + cuaderno como unified financial control system**. Reframes positioning entirely: Zenet NO se vende a operadores que "necesitan software" — se vende a operadores que YA tienen un sistema (mental + bancario) y necesitan **extenderlo a la sucursal donde no están físicamente**. Cualquier copy hero que ignore este frame falla estructuralmente.

---

#### V-002 🌟 [VERBATIM]

> *"You Spent $15K on Inventory Software. Your Data Is Still Wrong. I see it constantly. Operators invest in inventory software... New inventory items never get entered. Recipes are built once and never updated. Vendor pricing changes but the system doesn't. Counts get skipped because it's a busy week. Six months later, the reports say your pizza is running 40% food cost and your filet is at 25%... **The software isn't broken. The discipline is.**"*

- **Traducción ES (NOT replacement):** *"Gastaste $15K en software de inventario. Tu data sigue mal. Lo veo constantemente. Operadores invierten en software de inventario... Nuevos items de inventario nunca se capturan. Las recetas se arman una vez y nunca se actualizan. Los precios del proveedor cambian pero el sistema no. Los conteos se saltan porque fue una semana pesada. Seis meses después, los reportes dicen que tu pizza corre 40% food cost y tu filete 25%... El software no está roto. La disciplina sí."*
- **Source:** `[Q2-1]` Bruce Nelson, F&B practitioner LinkedIn post abril 2026
- **Persona:** industria (practitioner)
- **Theme:** discipline-failure · post-firma adoption
- **Stage:** post-firma
- **Use-case tags:** sales-disarm · internal-alignment · CS playbook
- **Cited en:** doc 06 §4.6 (data maintenance collapse foundational verbatim)
- **Por qué es gold:** Frame mental que reorienta CS desde Day 1. El dominant failure mode NO es product capability — es habit formation. Implica que CS playbook debe asumir que discipline NO se institucionalizará automáticamente; requires intentional habit support. Sales-disarm angle: cuando operador objeta *"no tenemos disciplina para sistema"*, este verbatim valida + reframes — *"tienes razón, ese es el problema real. JUSTAMENTE por eso Zenet trabaja sobre WhatsApp y no requiere que entres a una pantalla."*

---

#### V-003 🌟 [STAT]

> **40.9%** de restaurantes encuestados en Jalisco reportan que **"no les da confianza"** el software/tech para su operación. **23.2%** declaran que "las comisiones son altas".

- **Source:** `[Q1-2]` IIEG Encuesta a Restaurantes 2024 — Jalisco, n=478
- **Persona:** industria (survey aggregate)
- **Theme:** distrust · money-roi
- **Stage:** pre-awareness · research
- **Use-case tags:** sales-disarm · landing-body · internal-alignment
- **Cited en:** doc 03 §5.10 · doc 06 §2.4.4 + §3.1 + §3.8 + §5.3 (platform vs product distrust)
- **Por qué es gold:** Survey-validated language anchoring. *"No me da confianza"* NO es objection idiosyncrática — es authoritative institutional voice de 40.9% del mercado. Vendors mexicanos tienen que **directly address platform distrust ANTES de poder discutir product fit**. Confoundment honest: encuesta cubre delivery apps + tech genérico, NO BOH SaaS specifically — pero pattern transfers.

---

#### V-004 🌟 [VERBATIM]

> *"El grueso del restaurante no tiene almacenista."*

- **Source:** `[Q1-1]` Soy Restaurantero Podcast T1:E7 — Jaume Romagosa, julio 2025
- **Persona:** industria (operator-consultant voice)
- **Theme:** chaos-burnout · operational reality
- **Stage:** pre-awareness
- **Use-case tags:** sales-pitch · landing-body · internal-alignment
- **Cited en:** doc 03 §5.10 · doc 06 §2.4
- **Por qué es gold:** Strips the assumption que cualquier sistema de inventario asume — **alguien dedicado a inventory existe**. En realidad mexicana ICP: NO. El cocinero hace conteo entre servicios. El gerente revisa al cierre. El dueño pregunta cuando ve el invoice. Implicación de producto: Zenet debe asumir cero rol dedicado, NOT design para "almacenista user persona".

---

#### V-005 🌟 [VERBATIM]

> *"El sector restaurantero ve la tecnología como **algo difícil y muy costoso**."* — Anabell González, vocera nacional CANIRAC, septiembre 2022.

- **Source:** `[Q1-3]` EFE / Concanaco — Anabell González CANIRAC septiembre 2022
- **Persona:** industria (institutional voice)
- **Theme:** distrust · money-roi · paired beliefs
- **Stage:** pre-awareness
- **Use-case tags:** sales-disarm · internal-alignment · positioning
- **Cited en:** doc 06 §2.4.3 (cost + complexity paired beliefs)
- **Por qué es gold:** Confirma pattern crítico: *"es difícil"* y *"es muy costoso"* son **inseparables**. Vendor que solo resuelve uno (precio bajo, training fácil) deja la otra dimensión sin desactivar — y la objeción combinada persiste. Para Zenet: pricing concession sin UX simplification es perdida; UX simple sin pricing claim es perdida. Ambos must move together.

---

#### V-006 🌟 [VERBATIM]

> *"After years of being a paying customer, this was insulting and incredibly tone-deaf."*

- **Traducción ES:** *"Después de años siendo cliente pagando, esto fue insultante e increíblemente sordo."*
- **Source:** `[Q2-2]` MarketMan G2 review (operator post-cancellation feedback)
- **Persona:** dueño-operador (US context, transferable)
- **Theme:** vendor-relationship · post-firma adoption · churn
- **Stage:** renewal-churn
- **Use-case tags:** internal-alignment · CS anti-pattern training
- **Cited en:** doc 06 §4.10 (counter-productive save tactics) · §5.6.4
- **Por qué es gold:** Single line que captura el damage de save tactics mal-aplicadas. Cuando operador YA decidió cancel, vendor responde con contract citations + *"jump on a call"* feature demos = relationship destruction. Lectura para Zenet: el right save move addresses operational habit (data maintenance), NOT product capability. US-context pero pattern translates a Mexican context con factor amplificado por *confianza* dynamics.

---

#### V-007 🌟 [VERBATIM]

> *"Los restauranteros prefieren observar antes de comprometer."*

- **Source:** `[Q1-6]` Vanguardia / CANIRAC outlook 2026
- **Persona:** industria (institutional press)
- **Theme:** stage-stall · risk aversion · uncertainty avoidance
- **Stage:** awareness · research · evaluation
- **Use-case tags:** sales-disarm · landing-body · internal-alignment
- **Cited en:** doc 06 §2.4 + §3.4 (timing objections)
- **Por qué es gold:** Authoritative institutional framing del *"hablamos pronto"* stall. NO es individual procrastination — es sector-wide pattern documented por trade press. Implica timing motion para Zenet: rushing decisions backfires; structured follow-up con near-term commitment > pressure tactics.

---

#### V-008 🌟 [PARAPHRASE]

> *"Lo que te trajo aquí no te lleva a la siguiente sucursal. NO porque tu método sea malo — sino porque era para 1 lugar, no para 3."*

- **Source:** Disarming reframe construido a partir de Romagosa V-001 frame + beachhead segmentation (cf. doc 04 §4 sub-segmento B 2-3 sucursales en consolidación operativa)
- **Persona:** dueño-operador (Carlos Mendoza arquetipo)
- **Theme:** aspirational reframe · scaling pain
- **Stage:** awareness · research
- **Use-case tags:** copy-hero · sales-pitch · sales-disarm
- **Cited en:** doc 06 §5.3 (reframing technique)
- **Por qué es gold:** Reframe que valida el sistema mental existente del dueño-operador (NO le dice "tu sistema está mal") + identifica trigger del beachhead exacto (segunda sucursal rompe el modelo unipersonal). Único reframe que respeta financial control identity (V-001) sin desafiar la competencia del operador.

---

#### V-009 🌟 [VERBATIM]

> *"En el sector restaurantero, el problema es sobrevivir."*

- **Source:** `[Q1-9]` InfoChannel / Technomex SoftRestaurant 2026 (vendor counter-objection framing)
- **Persona:** industria (vendor voice citing operator reality)
- **Theme:** chaos-burnout · operational reality · sobrevivencia
- **Stage:** pre-awareness
- **Use-case tags:** internal-alignment · positioning
- **Cited en:** doc 06 §2.4
- **Por qué es gold:** Frame mental del operador en mercado mexicano post-pandemia. Vendor que vende *"crecimiento"*, *"escala"*, *"optimización"* a un operador en survival mode = mismatch fatal. Zenet debe primero validar survival reality, después articular cómo orden + visibilidad **ES survival lever**, NO growth aspiration.

---

#### V-010 🌟 [AGGREGATED]

> *"Yo SOY el sistema."*

- **Source:** Pattern aggregated de V-001 (Romagosa frame) + Mexican operator-identity research + foundational research (doc 03 §5.10)
- **Persona:** dueño-operador
- **Theme:** identity-control · founder-as-system
- **Stage:** pre-awareness
- **Use-case tags:** internal-alignment · positioning · sales-disarm
- **Cited en:** doc 06 §2.4.1 (Financial Control Identity foundation)
- **Por qué es gold:** Frame structural del positioning challenge. El operador NO percibe ausencia de sistema — percibe que ÉL ES el sistema. Cualquier mensaje que implique *"tu negocio no tiene sistema"* es perceived attack on identity. Mensaje correcto: *"Zenet extiende tu sistema a donde tú no estás."*

---

#### V-011 ⭐ [PARAPHRASE]

> Operador en Reddit (r/AskMexico, mayo 2026): *"el contador me dice una cosa, el del POS otra, mi gerente otra; al final yo decido por instinto."*

- **Source:** `[Q1-4]` r/AskMexico restaurant owner thread mayo 2026 (paraphrase + summary del researcher)
- **Persona:** dueño-operador
- **Theme:** chaos-burnout · multi-stakeholder · *contable* gating
- **Stage:** awareness
- **Use-case tags:** sales-pitch · sales-disarm · landing-body
- **Cited en:** doc 06 §2.4 + §3.6
- **Por qué es load-bearing:** Captures multi-stakeholder chaos del buying committee mexicano (*contable* + POS vendor + gerente + dueño). Implica que single-thread sales motion falla — owner está triangulando entre voces conflicting + decidiendo "por instinto" porque ningún stakeholder le da claridad consolidada. Zenet positioning: *"la voz que reconcilia las otras voces"*, NO otra voz más en el coro.

---

#### V-012 ⭐ [PARAPHRASE]

> r/lacamiseta SoftRestaurant comparison thread (diciembre 2023): operadores reportan que **"capacitar al equipo nuevo en SoftRestaurant cada vez que rota es lo más costoso del software"** — training cost > license cost.

- **Source:** `[Q1-5]` r/lacamiseta SoftRestaurant thread diciembre 2023 (aggregated pattern de múltiples comments)
- **Persona:** dueño-operador · gerente
- **Theme:** time-scarcity · training cost · turnover
- **Stage:** post-firma
- **Use-case tags:** sales-pitch · landing-body · positioning
- **Cited en:** doc 06 §2.4.2 + §3.7
- **Por qué es load-bearing:** Reframes total cost de software para restaurante. License es fraction; training-on-rotation is dominant cost dada 70-80% industry turnover. SoftRestaurant tiene structural advantage — operadores ya pagaron training cost. Zenet (unknown) arranca con training cost full + needs **zero-training UX** o smartphone-native interaction como structural priority NO opcional.

---

#### V-013 ⭐ [PARAPHRASE]

> Romagosa T1:E7 (julio 2025) — sobre AI implementation skepticism: *"no es que la AI no sirva, es que el operador no sabe qué hacer con la respuesta cuando llega."*

- **Source:** `[Q1-1]` Soy Restaurantero Podcast T1:E7 — paraphrase del segment AI skepticism
- **Persona:** industria (operator-consultant voice)
- **Theme:** distrust · AI skepticism · interpretation gap
- **Stage:** pre-awareness · research
- **Use-case tags:** sales-disarm · internal-alignment · positioning
- **Cited en:** doc 06 §2.4 + §3.5 (AI ideological objections)
- **Por qué es load-bearing:** Reframe del AI objection. NO es ideological *"reemplazar gente"* — es practical *"qué hago con esto"*. Implica que Zenet debe entregar **respuesta + acción siguiente sugerida**, NOT solo signal/insight. El gap NO es output, es interpretation + decision support.

---

#### V-014 ⭐ [VERBATIM]

> *"Restaurant accountants have described clients who implement MarginEdge and then never keep recipes updated or do regular inventory counts, ending up with a $330/month subscription generating bad data."*

- **Traducción ES:** *"Contadores de restaurantes han descrito clientes que implementan MarginEdge y luego nunca mantienen las recetas actualizadas ni hacen conteos regulares de inventario, terminando con una suscripción de $330/mes generando data mala."*
- **Source:** `[Q2-3]` FoodAIDaily summary de MarginEdge restaurant accountants
- **Persona:** *contable* externo (third-party voice)
- **Theme:** discipline-failure · post-firma adoption · data quality
- **Stage:** post-firma · renewal-churn
- **Use-case tags:** internal-alignment · CS playbook · sales-disarm
- **Cited en:** doc 06 §4.6
- **Por qué es load-bearing:** Refuerza V-002 desde voz del *contable* — el stakeholder que en Mexican context es key software gatekeeper. Implica que parallel-track *contable* engagement debe incluir habit formation framing, NO solo CFDI/SAT compliance angle.

---

#### V-015 ⭐ [PARAPHRASE]

> El Imparcial Tijuana — CANIRAC Jóvenes Restauranteros (agosto 2025): operadores TJ reportan que el frame dominante es *"cómo sobrevivir el siguiente trimestre con los costos como están"*.

- **Source:** `[Q1-7]` El Imparcial Tijuana CANIRAC Jóvenes Restauranteros agosto 2025
- **Persona:** dueño-operador · gerente (TJ-specific)
- **Theme:** chaos-burnout · sobrevivencia · TJ-local context
- **Stage:** pre-awareness
- **Use-case tags:** internal-alignment · positioning · TJ-specific copy
- **Cited en:** doc 06 §2.4
- **Por qué es load-bearing:** TJ-specific framing — beachhead reality. Cualquier copy targeting TJ que asume operadores están en growth mode falla; survival framing es authoritative.

---

#### V-016 ⭐ [AGGREGATED]

> *"Hablamos pronto."*

- **Source:** `[Mexican linguistic pattern]` — pattern documented across múltiples Mexican Spanish sources + Hofstede high-context + non-confrontational research
- **Persona:** dueño-operador · gerente
- **Theme:** stage-stall · non-confrontational decline · cultural code
- **Stage:** evaluation · negotiation
- **Use-case tags:** sales-disarm · sales-internal-alignment · CS coaching
- **Cited en:** doc 06 §2.4 + §3.4
- **Por qué es load-bearing:** Mexican linguistic code para soft no. Sales motion sin entender este pattern over-counts pipeline. Implica disciplina: **schedule firm follow-up con specific commitment** ANTES de cerrar la conversación; *"hablamos pronto"* sin date attached = lead lost.

---

#### V-017 ⭐ [AGGREGATED]

> *"El negocio es complicado."*

- **Source:** `[Mexican linguistic pattern]` — operator preemptive complexity acknowledgment, documented across MX restaurant operator interviews + foundational research
- **Persona:** dueño-operador
- **Theme:** stoicism · apechugar · preemptive resistance
- **Stage:** pre-awareness · awareness
- **Use-case tags:** sales-disarm · positioning · internal-alignment
- **Cited en:** doc 06 §3.3 (Mexican linguistic pattern) · §5.3 (reframing technique)
- **Por qué es load-bearing:** Operador uses esta frase como **preemptive defense** — establece complexity como inherent + irreducible para deflect simplification claims del vendor. Reframe Zenet: *"Tienes razón — el negocio es complicado. JUSTAMENTE por eso necesitas un sistema. Zenet asume complejidad y te ayuda a manejarla."* (cf. V-021 reframing)

---

#### V-018 ⭐ [AGGREGATED]

> *"A ver si queda algo a fin de mes."*

- **Source:** `[Mexican linguistic pattern]` — operator pseudo-KPI frame, related a V-001 financial control identity
- **Persona:** dueño-operador
- **Theme:** identity-control · money-roi · pseudo-KPI
- **Stage:** pre-awareness
- **Use-case tags:** sales-disarm · landing-body · internal-alignment
- **Cited en:** doc 06 §2.4.1
- **Por qué es load-bearing:** Operador's actual financial KPI no es food cost % o labor %. Es **balance bancario al cierre de mes**. Vendor que muestra dashboard con margen por SKU + variance vs target = cognitive overhead. Vendor que muestra *"estimación de tu balance al cierre + qué lo está moviendo"* = native al frame del operador.

---

#### V-019 ⭐ [AGGREGATED]

> *Apechugar.*

- **Source:** `[Mexican linguistic pattern]` — operator stoicism cultural code, documented Mexican SMB family-business research
- **Persona:** dueño-operador (especially family-business successor)
- **Theme:** stoicism · cultural code · sacrifice-as-virtue
- **Stage:** pre-awareness
- **Use-case tags:** internal-alignment · positioning · TJ-specific
- **Cited en:** doc 06 §2.4 + §3
- **Por qué es load-bearing:** Cultural code que valoriza endurance + sacrificio como virtud operativa. Implica que mensajes de *"trabajar menos"* o *"vacaciones"* o *"descansar"* pueden activar resistance — el operador's identity está construida around *apechugar*. Reframe correcto: NO *"trabaja menos"* — *"trabaja sobre lo que importa, no sobre lo que se puede automatizar"*.

---

#### V-020 ⭐ [PARAPHRASE]

> Bruce Nelson context — el data maintenance collapse pattern: *"Recipes are built once and never updated. Counts get skipped because it's a busy week."*

- **Source:** `[Q2-1]` Bruce Nelson LinkedIn abril 2026 (sub-fragment de V-002)
- **Persona:** industria (practitioner)
- **Theme:** discipline-failure · operational reality
- **Stage:** post-firma
- **Use-case tags:** CS playbook · sales-pitch (preemptive)
- **Cited en:** doc 06 §4.6
- **Por qué es load-bearing:** Specific failure modes que CS playbook debe address: recipes-built-once + skipped-counts. Para Zenet WhatsApp-based reminders + visual data freshness indicators son responses operacionales directas a estos failure modes.

---

#### V-021 ⭐ [PARAPHRASE]

> Disarming construido (Query 1 integration): *"Tu sistema de hoy es tu cabeza + cuaderno + balance al cierre. Ese sistema funcionó bien hasta que abriste tu segunda. ¿Cuánto control real tienes ahora sobre lo que pasa cuando tú no estás?"*

- **Source:** Disarming reframe construido a partir de V-001 + V-018 + beachhead trigger (segunda sucursal)
- **Persona:** dueño-operador (Carlos Mendoza arquetipo)
- **Theme:** identity-control · aspirational reframe · scaling pain
- **Stage:** awareness · research
- **Use-case tags:** sales-pitch · sales-disarm · copy-hero
- **Cited en:** doc 06 §5.3
- **Por qué es load-bearing:** Reframe que (a) valida el sistema mental existente, (b) identifica el trigger exacto (segunda sucursal rompe el modelo), (c) abre conversation sobre control NOT software. Único framing que respeta V-001 + V-010 sin contradecir.

---

#### V-022 ⭐ [PARAPHRASE]

> Murguía Demo 2026-04-01 — frame validation: *"un agente que augmenta el criterio del chef cuando él no está en el piso"* (paraphrase del researcher).

- **Source:** `[Demo Murguía 2026-04-01]` — Victor Murguía, chef + consultor BoH (paraphrase del researcher; NOT verbatim transcript)
- **Persona:** chef + consultor partner
- **Theme:** aspirational · augmentar-no-reemplazar
- **Stage:** evaluation
- **Use-case tags:** sales-pitch · positioning · chef-targeted copy
- **Cited en:** doc 06 §5.3 + Branding 01-brand-strategy/mision-vision-valores.md (valor #1)
- **Por qué es load-bearing:** Frame validation por chef + consultor que es archetype del partner local Zenet. Confirma que *"augmentar no reemplazar"* es resonante con chef persona — NO defensive, NO threatening. Marked as paraphrase porque conversación interna, NOT publishable transcript.

---

#### V-023 ⭐ [PARAPHRASE]

> Operadores forum corpus (r/restaurantowners + r/Restaurant_Managers): pattern de reaction negativa a salespeople que *"talk past"* cost o staff issues — operadores prefer reps que *"get the business"*.

- **Source:** `[Q3-10]` Forum corpus r/restaurantowners + r/Restaurant_Managers
- **Persona:** dueño-operador (US, transferable)
- **Theme:** vendor-relationship · sales-trust · industry-fluency
- **Stage:** evaluation
- **Use-case tags:** sales-internal-alignment · CS coaching
- **Cited en:** doc 06 §5.6 anti-pattern
- **Por qué es load-bearing:** Confirma que **industry fluency es prerequisite, NOT optional**. Sales rep que NO puede traducir features a food-cost % / labor % / P&L impact pierde credibility instantly. Para Zenet: sales hire profile must include restaurant operations background OR rigorous training.

---

#### V-024 • [PARAPHRASE]

> Romagosa T1:E7 — sobre orden electrónico: pattern de *"el cocinero dice 'a mí déjenme mi papel, yo así sé qué hacer'"* — kitchen resistance a digital order tickets.

- **Source:** `[Q1-1]` Soy Restaurantero Podcast paraphrase
- **Persona:** chef · cocinero
- **Theme:** distrust · kitchen-floor resistance · workflow disruption
- **Stage:** post-firma
- **Use-case tags:** internal-alignment · product-design implication
- **Cited en:** doc 03 §5.10
- **Por qué es illustrative:** Reminder que tech adoption NO es "owner buys → kitchen uses". Kitchen-floor resistance es separate adoption layer. Para Zenet (BoH-first): touch points que requieren kitchen interaction = high friction. Smartphone-based + chef-as-user (no cocinero) = lower friction path.

---

#### V-025 • [PARAPHRASE]

> Codat Global SMB Market Guide — Mexico SMB software adoption: *"founder visibility + acompañamiento directo"* es trust accelerator más citado en early customer wins.

- **Source:** `[Q3-6]` Codat Mexico SMB market guide
- **Persona:** industria (Mexican SMB cross-sector)
- **Theme:** vendor-relationship · founder-led-sales · trust-acceleration
- **Stage:** evaluation · negotiation
- **Use-case tags:** sales-motion · founder-led GTM
- **Cited en:** doc 06 §4.9 (Mexican-specific recovery patterns)
- **Por qué es illustrative:** Cross-sector confirmation que founder-led sales motion en Fase 0-1 NO es solo logistics — es structural trust lever. Alan presence en design partner deals NO es preference, es competitive advantage perishable.

---

#### V-026 • [PARAPHRASE]

> WeKook Marketing HoReCa B2B analysis ES/LatAm: *"hybrid motions (initial remote discovery → in-person visit/demo for serious prospects) perform best en Spain/LatAm hospitality markets"*.

- **Source:** `[Q3-11]` WeKook Marketing HoReCa B2B
- **Persona:** industria (sector marketing)
- **Theme:** vendor-relationship · in-person-vs-remote
- **Stage:** evaluation
- **Use-case tags:** sales-motion design
- **Cited en:** doc 06 §4.9 + §5.5.3
- **Por qué es illustrative:** Hybrid motion benchmark. Implica que pure-remote demos a serious TJ prospects underperforms; physical visit at evaluation stage = retention + close lever.

---

#### V-027 • [PARAPHRASE]

> Anabell González CANIRAC framing: vendor message debe *"hablar el lenguaje del operador, no el del software"*.

- **Source:** `[Q1-3]` EFE / Concanaco — Anabell González (paraphrase + extension)
- **Persona:** industria (institutional voice)
- **Theme:** vendor-relationship · industry-fluency · language fit
- **Stage:** awareness · research
- **Use-case tags:** copy guidance · positioning
- **Cited en:** Branding/_context/04-voice-and-tone/voz-y-tono.md (voice principle #1: lenguaje del operador)
- **Por qué es illustrative:** Institutional confirmation del voice principle. NO es Zenet-specific — es sector-wide expectation. Vendors que usan tech jargon están structurally disadvantaged en Mexican restaurant context.

---

#### V-028 • [PARAPHRASE]

> Notion-research conversations (Anna Palazuelos, Algira Garzón, Victor Murguía): los tres consultores partners locales validaron cualitativamente el modelo *"consultor partner como extensión Zenet"* — NO directo verbatim publicable, pattern aggregated.

- **Source:** `[Notion-research]` — 7 Notion conversations (cf. doc 01 §3-§5) + `[Demo Murguía 2026-04-01]`
- **Persona:** consultor partner local
- **Theme:** ecosystem · partner channel · validation
- **Stage:** GTM design
- **Use-case tags:** internal-alignment · ecosystem strategy
- **Cited en:** Market Research/01-industry-and-market/06-estructura-y-ecosistema.md §14 + 07-geografia-y-expansion.md §16.3
- **Por qué es illustrative:** Reference pointer — la triangulación cualitativa con consultores partners es load-bearing strategically pero NO produce verbatims publishable. Marked as `[PARAPHRASE]` honest about its evidentiary status. Activo de research declarado: capturar verbatims publishable en próximas sesiones consultor.

---

#### V-029 • [STAT]

> WeKook Marketing: **>65%** of Mexican B2B buyers have completed B2B purchases online + *"rely heavily on peers/online reviews in supplier selection"*.

- **Source:** `[Q3-11]` WeKook Marketing
- **Persona:** industria (Mexican B2B aggregate)
- **Theme:** validation-seeking · peer-evidence · digital-readiness
- **Stage:** research · evaluation
- **Use-case tags:** landing-body · social proof strategy
- **Cited en:** doc 06 §4.9
- **Por qué es illustrative:** Confirms peer-reference primacy + digital readiness en Mexican B2B. NO contradicts in-person preference (V-026) — peer evidence is digital + initial discovery; serious eval is in-person. Both layers need investment.

---

#### V-030 • [VERBATIM]

> Romagosa T1:E7 — sobre cuadernito: *"todavía hay restaurantes donde el conteo de inventario está en una libreta arriba del refri."*

- **Source:** `[Q1-1]` Soy Restaurantero Podcast — Jaume Romagosa
- **Persona:** industria (operator-consultant voice)
- **Theme:** chaos-burnout · TRUE incumbent · pre-tech baseline
- **Stage:** pre-awareness
- **Use-case tags:** internal-alignment · positioning · TJ-specific copy
- **Cited en:** doc 06 §2.4.2 + §3.7
- **Por qué es illustrative:** Concrete image que materializa el TRUE incumbent. Cualquier copy que asuma "tu sistema actual" deja al ICP fuera — la libreta arriba del refri NO se llama "sistema" en la cabeza del operador, pero ES el sistema. Mensaje correcto reconoce + extiende, NOT replaces.

---

> **Library v0.1 cierra en V-030.** Total: 10 gold + 13 load-bearing + 7 illustrative = 30 entries. Coverage gaps en §5.

---

## 4. Indices de navegación

> Los siguientes indices solo referencian IDs — NO repiten contenido. Para leer el verbatim, ir al entry en §3.1.

### 4.1 Por persona

| Persona | IDs |
|---|---|
| **Dueño-operador** | V-001, V-006, V-008, V-010, V-011, V-012, V-015, V-016, V-017, V-018, V-019, V-021 |
| **Gerente** | V-011, V-012, V-015, V-016 |
| **Chef · cocinero** | V-022, V-024 |
| ***Contable* externo** | V-014 |
| **Industria (institutional / practitioner / press)** | V-002, V-003, V-004, V-005, V-007, V-009, V-013, V-020, V-023, V-025, V-026, V-027, V-029, V-030 |
| **Consultor partner local** | V-022, V-028 |

### 4.2 Por theme

| Theme | IDs |
|---|---|
| **identity-control** | V-001, V-010, V-011, V-018, V-021 |
| **chaos-burnout** | V-004, V-009, V-011, V-015, V-030 |
| **distrust** | V-003, V-005, V-013, V-024 |
| **stoicism · apechugar** | V-017, V-019 |
| **aspirational · reframe** | V-008, V-021, V-022 |
| **validation-seeking · peer-evidence** | V-029 |
| **time-scarcity · training cost** | V-012 |
| **money-roi** | V-001, V-003, V-005, V-018 |
| **discipline-failure · post-firma** | V-002, V-014, V-020 |
| **vendor-relationship** | V-006, V-023, V-025, V-026, V-027 |
| **stage-stall · cultural code** | V-007, V-016 |

### 4.3 Por decision stage

| Stage | IDs |
|---|---|
| **Pre-awareness** | V-001, V-004, V-005, V-007, V-009, V-010, V-013, V-015, V-017, V-018, V-019, V-030 |
| **Awareness** | V-008, V-011, V-013, V-016, V-017, V-021, V-027 |
| **Research** | V-003, V-007, V-008, V-013, V-021, V-027, V-029 |
| **Evaluation** | V-007, V-016, V-022, V-023, V-025, V-026, V-029 |
| **Negotiation** | V-016, V-025 |
| **Post-firma** | V-002, V-012, V-014, V-020, V-024 |
| **Renewal-churn** | V-002, V-006, V-014 |

### 4.4 Por marketing use-case

| Use-case | IDs primarios |
|---|---|
| **Copy hero / landing headline** | V-001, V-008, V-010, V-021 |
| **Landing body / pain articulation** | V-003, V-004, V-009, V-011, V-012, V-015, V-018, V-029 |
| **Sales pitch (Sesión 1 demo)** | V-001, V-008, V-011, V-012, V-013, V-021, V-022, V-023 |
| **Sales disarm (objection handling)** | V-001, V-005, V-006, V-007, V-011, V-013, V-016, V-017, V-021 |
| **Social content** | V-001, V-002, V-008, V-019, V-021, V-030 |
| **Internal alignment / team training** | V-002, V-003, V-006, V-009, V-010, V-019, V-020, V-023, V-027 |
| **CS playbook** | V-002, V-006, V-014, V-020, V-024 |
| **Founder-led sales / GTM design** | V-022, V-025, V-026, V-028 |
| **Positioning + brand strategy** | V-001, V-005, V-009, V-010, V-019, V-027, V-030 |
| **TJ-specific copy** | V-015, V-019, V-030 |
| **Chef-targeted copy** | V-022, V-024 |
| ***Contable*-targeted copy** | V-014 |

---

## 5. Coverage gaps + primary research roadmap

### 5.1 Gaps declarados — verbatims que NO existen en library v0.1

`[Heredado de doc 06 §9.5 caveat #2 — Query 1 self-declared gaps]`:

| Gap | Por qué falta | Cómo cerrarlo |
|---|---|---|
| **Direct first-person operator verbatims sobre BOH SaaS específicamente en español** | Majority de authentic operator language vive en closed WhatsApp groups, Facebook communities, conversaciones face-to-face NO indexadas | 15-20 design partner interviews TJ/CDMX con audio + transcript |
| **Timing objections — direct verbatims sobre stall language** | Aggregated patterns existen (V-016 *"hablamos pronto"*) pero NO single-source operator quotes específicos a SaaS timing | Sales call recording analysis + lost-deal analysis |
| **Multi-stakeholder SaaS-specific objection language** (chef / socio / *contable*) | NO direct operator quotes en publicly indexed sources — V-011 es lo más cercano vía paraphrase | Three-session demo recordings (Manager + Chef + Owner) durante Fase 0 |
| **AI ideological objections — *"no quiero reemplazar gente"*** | NO operator-attributed quotes encontrados | Discovery question explícita en design partner interviews |
| **Competition / incumbent-named objections — *"ya tengo SoftRestaurant"*** | NO direct operator quotes en publicly indexed sources | Switch-from-incumbent interviews |
| **Tijuana-specific verbatims sobre software adoption** | NO TJ-context quotes encontrados (V-015 es CANIRAC framing, NOT operator quote) | TJ-specific design partner interviews — beachhead activación |
| **LATAM analog verbatims** (Argentine, Colombian, Peruvian operators) | NOT found en publicly indexed sources sobre BOH SaaS objections | Diferred a Fase 5 LATAM expansion |
| **Renewal/churn verbatims en Mexican context** | V-006 es US (MarketMan G2); NO Mexican equivalents | Future activo — emerge cuando primeros design partners alcanzan Mes 12 |
| **Buying committee internal conversation verbatims** | El operador hablando con su socio o *contable* NO es publicly indexed | Multi-stakeholder interview format con socio + *contable* presentes |
| **Verbatims post-firma adoption en Mexican context** | V-002, V-014, V-020 son US; pattern transfers pero language local NO captured | Design partner Mes 3-6 interviews |

### 5.2 Primary research roadmap

`[Activo declarado, heredado de docs 03/06 caveats]`:

**Las primeras 15-20 design partner interviews TJ/CDMX producirán literatura primaria sobre BOH SaaS verbatim language en español que NO existe en ningún lado.** Activo estratégico de research que ningún competitor mexicano tiene.

**Methodology recomendada (cf. doc 01 §6 + doc 00):**

| Fase de research | Qué capturar | Cuándo |
|---|---|---|
| **Design partner kickoff interviews** (n=15-20) | Pre-awareness verbatims · objections during pitch · stakeholder concerns | Fase 0, primeras 8-12 semanas |
| **Sales call recording + transcript** | Timing language · stall patterns · multi-stakeholder dynamics | Continuous desde Fase 0 |
| **Lost-deal post-mortems** (n≥10) | Honest no-go reasons · competitor framing · *contable* concerns | Continuous desde Fase 0 |
| **Three-session demo recordings** | Persona-specific objections (Manager / Chef / Owner) | Fase 0-1 |
| **Switch-from-incumbent interviews** (cuando aplique) | SoftRestaurant-named objection language · training cost framing | Fase 1-2 |
| **Mes 3 + Mes 6 + Mes 12 customer interviews** | Post-firma adoption · discipline failure language · renewal framing | Continuous desde Fase 0 (lagging by retention curve) |
| **Multi-stakeholder format interviews** (operador + socio + *contable*) | Buying committee internal conversation patterns | Fase 1+ |
| **WhatsApp / Facebook community listening** | Closed-channel authentic operator language | Continuous, ethics-permitted |

### 5.3 Library maintenance

**Cadencia de update:**
- **Cada cierre de cycle de design partner interviews:** add new verbatims a §3.1 + actualizar indices §4.
- **Cada nueva Perplexity query relevante:** add nuevas sources a library + tag con query ID.
- **Cuando un verbatim se cita en nueva campaign / piece de copy / social post:** add use-case tag a entry.
- **Versioning:** v0.X durante Fase 0 (pre-PMF). v1.0 cuando design partner cycle complete (15+ partners + Mes 6 retention data).

**Triggers de review:**
- Cualquier verbatim que se prueba en copy/sales y **NO resuena** debe ser marcado + reviewed (puede ser library noise, no signal).
- Cualquier nuevo Mexican linguistic pattern documented debe ser added como `[AGGREGATED]`.
- Anti-falsificación rules (§2.4) deben ser auditadas en cada cycle de update — drift to fictional verbatims es structural risk.

### 5.4 Honest declaration final

> **Library v0.1 es construida desde public indexed sources + 3 Perplexity queries doc 06 + foundational research + Notion/Demo references.** El **80%+ de la real authentic operator language** vive en closed channels, sales conversations no recorded, family dinners, kitchen conversations. Library v0.1 es scaffold honesto — NOT comprehensive. Comprehensiveness es activo de research declarado para Fase 0-1.

---

## 6. Fuentes

`[Consolidated source list — IDs back-reference §3.1 entries]`:

- **Q1-1** Soy Restaurantero Podcast T1:E7 — Jaume Romagosa, julio 2025 → V-001, V-004, V-013, V-024, V-030
- **Q1-2** IIEG Encuesta a Restaurantes 2024 (Jalisco, n=478) → V-003
- **Q1-3** EFE / Concanaco — Anabell González CANIRAC septiembre 2022 → V-005, V-027
- **Q1-4** r/AskMexico restaurant owner thread mayo 2026 → V-011
- **Q1-5** r/lacamiseta SoftRestaurant comparison thread diciembre 2023 → V-012
- **Q1-6** Vanguardia / CANIRAC outlook 2026 → V-007
- **Q1-7** El Imparcial Tijuana — CANIRAC Jóvenes Restauranteros agosto 2025 → V-015
- **Q1-9** InfoChannel / Technomex SoftRestaurant 2026 → V-009
- **Q2-1** Bruce Nelson F&B practitioner LinkedIn abril 2026 → V-002, V-020
- **Q2-2** MarketMan G2 review → V-006
- **Q2-3** FoodAIDaily summary de MarginEdge restaurant accountants → V-014
- **Q3-6** Codat Global SMB Market Guide — Mexico → V-025
- **Q3-10** r/restaurantowners + r/Restaurant_Managers forum corpus → V-023
- **Q3-11** WeKook Marketing HoReCa B2B analysis ES/LatAm → V-026, V-029
- **Mexican linguistic patterns** (cross-source) → V-010, V-016, V-017, V-018, V-019
- **Demo Murguía 2026-04-01** + **Notion-research** → V-022, V-028
- **Construido (disarming reframes)** → V-008, V-021

**Referencias internas a docs vecinos:**
- doc 00 §3 — research stages + tags taxonomy
- doc 01 §3-§5 — methodology + sources inventory
- doc 03 §5.10 — foundational research industry tech adoption lag
- doc 04 §4-§6 — beachhead segmentation + journey phases
- doc 06 §2.4, §3, §4, §5.3, §9.5-§9.7 — Query 1/2/3 integration

**Activo declarado para v1.0:**
- 15-20 design partner interviews TJ/CDMX
- Sales call recordings + transcripts (continuous)
- Mes 3/6/12 customer interviews
- Multi-stakeholder format interviews
