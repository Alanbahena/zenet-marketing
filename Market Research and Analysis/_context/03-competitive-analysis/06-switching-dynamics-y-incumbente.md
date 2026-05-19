---
name: Adopción, coexistencia y switching dynamics
description: Doc reframed v0.1 — 95% de Zenet scenarios MX son **adoption + coexistence** (NO switching). Solo 5% son true switching (rare edge case foreign BoH competitor). 4 scenarios decision landscape + 13 trigger events + 3-narrative adoption/coexistence framework + *contable* gating dynamics + 11 coexistence/switching scripts por vendor + anti-patterns documented + 6 Mexican cultural dynamics (incluyendo tech adoption friction + integration infrastructure gap MX). Pointer to external doc para pilot strategy.
type: competitive-analysis
last_updated: 2026-05-18
status: active
version: 0.1
owner: Alan Bahena
---

# Adopción, coexistencia y switching dynamics

> Filename `06-switching-dynamics-y-incumbente.md` preserved per CLAUDE.md convention. **Title reframed v0.1 (2026-05-18):** doc original asumía "switching" como dominant scenario, pero Zenet positioning core (Pure BoH AI layer · hardware-agnostic · POS-agnostic · "trabajamos sobre tu POS, no lo reemplazamos") significa que **95% de scenarios MX son adoption + coexistence**, NOT switching. Reframed accordingly.

## Índice

1. [Propósito + diferencia con docs vecinos](#1-propósito--diferencia-con-docs-vecinos)
2. [Marco aplicado — decision landscape framework](#2-marco-aplicado--decision-landscape-framework)
3. **[Decision landscape + cost analysis per scenario](#3-decision-landscape--cost-analysis-per-scenario)**
   - 3.1 Decision landscape MX — 4 scenarios frequency-ranked
   - 3.2 Adoption cost — Scenario A (pure adoption · vast majority)
   - 3.3 Coexistence cost — Scenario B (POS coexistence · frequent)
   - 3.4 Coexistence cost — Scenario D (*contable* gating accounting POS)
   - 3.5 Switching cost — Scenario C (foreign BoH competitor · rare edge case)
   - 3.6 Strategic implication — coexistence-primary narrative
4. **[Trigger events que abren window de adopción/decisión](#4-trigger-events-que-abren-window-de-adopcióndecisión)**
   - 4.1 Operacionales (escala + sistema) — Triggers #1, #8, #11
   - 4.2 Financieros — Triggers #7, #9
   - 4.3 Operacionales-supplier — Trigger #13
   - 4.4 Relacionales (gatekeepers + community + consultores) — Triggers #2, #10, #12
   - 4.5 Regulatorios — Trigger #3
   - 4.6 Vendor friction (vendor software) — Triggers #4, #5
   - 4.7 Demográficos — Trigger #6
5. **[3-narrative adoption/coexistence framework](#5-3-narrative-adoptioncoexistence-framework)**
   - 5.1 "Layer ON top" narrative (Scenarios A + B)
   - 5.2 "*Contable*-friendly augmentation" narrative (Scenario D)
   - 5.3 "Generational gap" narrative (adoption decisions + rare switching)
6. [*Contable* gating dynamics deep dive](#6-contable-gating-dynamics-deep-dive)
7. **[Coexistence + switching scripts por scenario](#7-coexistence--switching-scripts-por-scenario)**
   - 7.1 Adoption scripts — Scenario A (vast majority)
   - 7.2 Coexistence scripts — Scenario B (POS coexistence)
   - 7.3 *Contable* coexistence scripts — Scenario D
   - 7.4 Switching scripts — Scenario C (rare edge case)
8. [Anti-patterns documented](#8-anti-patterns-documented)
9. **[Mexican cultural dynamics — 6 sub-secciones](#9-mexican-cultural-dynamics--6-sub-secciones)**
   - 9.1 *Confianza* accumulation requires patience
   - 9.2 Hofstede uncertainty avoidance → pilot model essential
   - 9.3 Family-business decision dynamics
   - 9.4 Relationship loyalty respect (NOT vendor-bashing)
   - 9.5 NEW Mexican tech adoption cultural friction
   - 9.6 NEW Integration infrastructure gap MX vs US/EU
10. **[Zenet adoption/coexistence playbook synthesized por scenario](#10-zenet-adoptioncoexistence-playbook-synthesized-por-scenario)**
11. [Watchlist + cadence](#11-watchlist--cadence)
12. [Fuentes + primary research path](#12-fuentes--primary-research-path)

---

## 1. Propósito + diferencia con docs vecinos

### 1.1 Qué responde

Doc 06 responde: **"¿Cómo Zenet convierte prospects en clientes, dado que la realidad MX es 95% adoption/coexistence y 5% true switching?"** — operational sales playbook con narrative frameworks + per-vendor scripts + Mexican cultural overlay.

### 1.2 Reframing fundamental v0.1 — coexistence-primary

**Doc original (v0.0 scaffold) asumía "switching" como dominant scenario.** Reality (consolidated post docs 02-05):

- Zenet positioning core: **Pure BoH AI layer · hardware-agnostic · POS-agnostic** · *"trabajamos sobre tu POS, no lo reemplazamos"*
- Operator NO cambia su POS — **mantiene POS + AGREGA Zenet on top**
- **95% de scenarios MX = adoption + coexistence** (NOT switching)
- **5% scenarios = true switching** (rare edge case foreign BoH competitor)

**Implicación operacional:** sales motion debe partir de **additive framing** (NOT replacement) · pricing positioning como **new line item additive** (NOT replacement of POS spend) · objeción primary: *"¿por qué pago dos sistemas?"* (NOT *"¿por qué cambio?"*).

### 1.3 Diferencia con docs vecinos

| Doc | Lens |
|---|---|
| 01 mapa | Quién está en el competitive space |
| 02 directos deep dive | Per-vendor deep narrative |
| 03 indirectos | Resto landscape + displacement narratives heredadas |
| 04 feature-pricing matrix | Comparative side-by-side |
| 05 GTM positioning | Cómo Zenet llega al mercado |
| **06 adoption/coexistence dynamics** (este doc) | **Cómo Zenet convierte deals en MX cultural reality** |
| 07 defensibility | Synthesis moat dimensions |

### 1.4 Reader usage patterns

| Reader | Usage |
|---|---|
| **Sales rep pre-deal** | §3 (identify scenario) → §4 (verify trigger heat) → §7 (find vendor script) → §9 (apply cultural overlay) |
| **Founder strategic** | §5 (narrative framework) + §10 (synthesized playbook) |
| **CS playbook design** | §8 (anti-patterns) + §10 (playbook) + cf. doc externo pilot strategy |
| **Sales training** | Entire doc — operational reference manual |

---

## 2. Marco aplicado — decision landscape framework

**Critical concept:** different scenarios require different sales approaches. **No single playbook fits all.**

### 2.1 4 scenarios decision landscape

```
                              ZENET DECISION LANDSCAPE MX
                              ───────────────────────────
                              
Scenario A — Pure adoption                    Scenario B — POS coexistence
(no incumbent BoH)                            (operator has POS w/ BoH modules)
TRUE incumbent V-001 cuaderno                 SoftRestaurant · PoloTab · Parrot · Wansoft
**VAST MAJORITY** Fase 0-1 beachhead          Sistemas Sierra · SICAR · Fudo · Toteat · etc.
                                              **FREQUENT**
                                              
                                              
Scenario C — True switching                   Scenario D — *Contable* coexistence
(foreign BoH competitor)                      (accounting POS Aspel CAJA / CONTPAQi PoV)
MarginEdge · Apicbase · Restoke · Supy        Operator usa para POS · *contable* recomendó
**RARE EDGE CASE** MX                         **FREQUENT**
```

### 2.2 Discovery question primary

> **"¿Qué sistema usas hoy para manejar tu BoH (inventarios + recetas + costos + procurement)?"**

Respuesta operator → identifies scenario → customizes entire sales approach:

| Respuesta operator | Scenario | Script base |
|---|---|---|
| *"Nada formal, cuaderno + memoria + Excel"* | **A — Pure adoption** | Adoption script · TRUE incumbent V-001 reframe |
| *"Tengo [SoftRestaurant/PoloTab/Parrot/Wansoft/etc.]"* | **B — POS coexistence** | Per-vendor coexistence script · additive value framing |
| *"Tengo Aspel CAJA / CONTPAQi PoV (recomendó mi contador)"* | **D — *Contable* coexistence** | *Contable*-friendly augmentation script |
| *"Tengo [foreign BoH solution: MarginEdge, Apicbase, Restoke, etc.]"* | **C — True switching** | MX-native advantage script · rare scenario |

**Sales rep training:** discovery question es OBLIGATORIO Stage 1 de toda conversación. Without scenario identification, sales motion = generic + low conversion.

---

## 3. Decision landscape + cost analysis per scenario

### 3.1 Decision landscape MX — 4 scenarios frequency-ranked

| Frequency | Scenario | % Mexican operators (estimated Fase 0-1 beachhead) | Cost framing |
|---|---|---|---|
| **Vast majority** | **A — Pure adoption** (cuaderno/no system) | ~50-60% | Adoption cost (cognitive · budget allocation new) |
| **Frequent** | **B — POS coexistence** (Mexican POS · Mexican-active foreign) | ~25-30% | Coexistence cost (budget overlap · feature overlap · integration friction) |
| **Frequent** | **D — *Contable* coexistence** (Aspel CAJA / CONTPAQi PoV recommended by *contable*) | ~10-15% | Coexistence cost (*contable* relationship preserve · accounting ecosystem) |
| **Rare edge case** | **C — True switching** (foreign BoH competitor active) | <2% | Switching cost (Hofstede uncertainty · *confianza* rebuild) |

**Source:** Estimates based on doc 03 customer research §5.10 foundational research (industry tech adoption lag 10% MX) + Q1 Perplexity IIEG 40.9% *"no les da confianza"* + V-001 Romagosa TRUE incumbent insight. **Primary research priority:** validate frequencies via design partner interviews TJ Fase 0 (heredado doc 03 §16.3).

### 3.2 Adoption cost — Scenario A (pure adoption · vast majority)

**Operator profile:** Carlos Mendoza arquetipo · cuaderno + memoria + bank balance como TRUE incumbent · NO software BoH formal.

**Cost composition para adoption:**

| Cost component | Magnitud | Sales response |
|---|---|---|
| **Cognitive cost** | **HIGH** — *"Yo SOY el sistema"* (V-010) · Financial Control Identity reframe required | *"Zenet NO replaces tu sistema mental — lo extiende a la sucursal donde tú NO estás"* (V-021) |
| **Budget allocation NEW line item** | $1,500 MXN/mes · operator has NO previous SaaS subscription baseline | *"Cost per shift staff/day = $50 MXN — Zenet menos que un staff/día"* · ROI quantified |
| **Cuaderno → digital transition friction** | Medium · operator literacy gap (avg age 45-55+) · smartphone-native required | WhatsApp Business operational interface (uso #3) · photo upload + manual capture Fase 1 |
| **Trust gap** | **HIGH** — IIEG 40.9% *"no les da confianza"* | Peer references + Mexican-native + Hofstede-aligned sales motion + 30-day pilot |
| **Time investment** | Operator already over-stretched · "no tengo tiempo para aprender" | Onboarding zero-training · WhatsApp-native UX · Day 1-7 high-touch support |

**Sales response framework:**
- Lead with **dolor surface** — *"¿qué pasa cuando abres tu segunda sucursal y no estás físicamente?"*
- Reframe TRUE incumbent — *"Tu sistema funcionó bien para 1 lugar · NO funcionará para 3"* (V-008 reframe)
- Quantify time saved — *"5+ horas/semana ganadas en invoice processing + procurement"*
- Pilot offer — *"30 días sin compromiso · sin tarjeta de crédito"* (cf. doc externo pilot strategy)

### 3.3 Coexistence cost — Scenario B (POS coexistence · frequent)

**Operator profile:** ya tiene POS (SoftRestaurant · PoloTab · Parrot · Wansoft · Sistemas Sierra · SICAR · Fudo · Toteat · Last.app · Bistrosoft · Pacific Soft) con BoH modules incluidos (inventory · recipes).

**Cost composition para coexistence:**

| Cost component | Magnitud | Sales response |
|---|---|---|
| **Budget overlap concern** | **HIGH** — operator pregunta *"¿por qué pago Zenet si ya pago POS?"* | **The critical objection** — answer prepared per vendor (cf. §7.2) |
| **Feature overlap concern** | Medium-High — POS tiene "inventario y recetas" según marketing | *"Tu POS tracks inventory · Zenet predicts food cost. Diferente layer."* |
| **Integration friction** | Medium · Fase 1 manual upload (CSV/Excel/PDF · photo+OCR · manual capture) | WhatsApp Business operational interface reduces friction · CS team handles setup Day 1-7 |
| **Cognitive overhead** | Low-Medium · "otro sistema más" anxiety | Pilot demonstrates additive value rápido (Day 14 quantified metrics) |
| **Vendor relationship preserve** | Medium · operator no quiere "traicionar" vendor actual (loyalty cultural) | NEVER vendor-bash · respect POS tenure · positioning additive |
| **Hardware lock-in concern** | LOW (Zenet hardware-agnostic) | *"Mantén tu POS y tu terminal de pago como están — Zenet no requires hardware change"* |

**Per-vendor cost specifics (handled detail en §7.2):**

| POS incumbent | Specific coexistence cost concern |
|---|---|
| **SoftRestaurant** (24 años legacy) | "Mi distribuidor SYCA/Entropía Digital ya nos cuida bien" — relationship preserve concern |
| **PoloTab / Parrot** (modern Mexican) | Hardware lock-in (PoloTab terminal · Parrot Pay) — Zenet hardware-agnostic |
| **Wansoft (by Clip)** | Clip ecosystem lock-in payment terminal |
| **Sistemas Sierra** (BC regional 46 años) | Mexicali HQ proximity · "Lleva con nosotros desde siempre" |
| **SICAR** (dual product) | Perpetual license sunk cost · "Ya pagué mi sistema una vez" |
| **Fudo · Toteat · Last.app · Bistrosoft** | Recent cloud LATAM/Spain · Spanish friction · *"otro sistema en otro idioma"* |
| **Pacific Soft** | Multi-vertical generic · IT distributor relationship |

**Sales response framework:**
- **Acknowledge POS value** — *"Tu [vendor] hace [POS function] bien · Zenet NO replaces eso"*
- **Identify gap** — *"Lo que tu [vendor] NO hace shipped es AI BoH predictivo: forecasting + procurement automation + costing"*
- **Demonstrate additive ROI** — *"+$X MXN/mes en savings · pilot 30 días sin compromiso"*
- **Coexistence positioning** — *"Mantén tu sistema actual · Zenet vive on top"*

### 3.4 Coexistence cost — Scenario D (*contable* gating accounting POS)

**Operator profile:** usa Aspel CAJA / CONTPAQi PoV / Eleventa como POS recomendado por *contable* externo (porque su contabilidad ya está en Aspel SAE / CONTPAQi Comercial Premium).

**Cost composition para coexistence:**

| Cost component | Magnitud | Sales response |
|---|---|---|
| ***Contable* relationship preserve** | **CRITICAL** — *contable* es gatekeeper · veto risk | Engage *contable* parallel Stage F (cf. §6 deep dive) · NOT bypass |
| **Accounting data continuity** | High · *contable* needs data en Aspel SAE / CONTPAQi format | Zenet CONTPAQi/Aspel integration roadmap Q3-Q4 2026 · interim CSV export |
| **Generic POS limitation acknowledged** | Operator may know Aspel/CONTPAQi NO restaurant-specialized | Easy upgrade narrative *"agrega restaurant-specific AI BoH on top"* |
| **Audit trail concern** | High · SAT compliance + *contable* audit | Zenet audit trail + CFDI 4.0 + export capabilities |
| **Cost** | Low-Medium · Aspel CAJA ~$1,108 MXN/mes already paid | *"+$400 MXN/mes adicional para AI BoH restaurant-specific"* |

**Sales response framework:**
- **Lead with *contable* respect** — *"Tu *contable* fue inteligente recomendando Aspel — keep that"*
- **Identify category gap** — *"Aspel CAJA es POS generic · NO restaurant-specialized para BoH AI"*
- **Integration commitment** — *"Zenet roadmap Q3-Q4 2026 integration native CONTPAQi/Aspel · interim CSV export"*
- ***Contable* engagement** — *"Antes de proceder, podemos coordinar reunión con tu *contable* para validate setup"*

### 3.5 Switching cost — Scenario C (foreign BoH competitor · rare edge case)

**Operator profile:** **EXTREMELY RARE en MX** — operator usando MarginEdge · Apicbase · Restoke.ai · Supy · Loaded · FoodOp · Nory (foreign Pure BoH).

**¿Por qué tan rare?** Cf. doc 04 §5.5 — 6 of 7 foreign Direct CATEGORIAL references están en **0/10 MX Readiness**. Sin CFDI · sin Mexican Spanish · sin *contable* integration · sin WhatsApp Business · sin Mexican peer logos. **Vendor entry friction = 24-36 meses minimum.** Almost no Mexican operator currently uses these.

**Cost composition para switching:**

| Cost component | Magnitud | Sales response |
|---|---|---|
| **Hofstede UAI 82 anxiety** | **MUY HIGH** — switching even cuando dolor con vendor actual | Extended pilot + parallel running + money-back guarantee · cf. doc externo pilot strategy |
| **Data migration** | Medium · foreign vendor probably exports CSV/JSON | Zenet imports · data continuity preserved |
| **Relationship loyalty respect** | Medium · vendor actual generated value | NEVER vendor-bash · acknowledge value · then identify MX-specific gaps |
| **Mexican market depth advantage** | This is Zenet's WIN dimension | *"Vendor foreign no tiene CFDI native, Spanish localizado, WhatsApp Business CS, *contable* integration"* |
| **Learning curve new system** | Medium · operator already SaaS-literate | Reduced barrier vs Scenario A |

**Sales response framework:**
- **MX-native advantage primary** — *"[Foreign vendor] es buen producto globalmente · pero NO MX-native"*
- **Specific gaps listed** — CFDI 4.0 · Spanish · WhatsApp · *contable* integration · peer references local
- **Parallel pilot strategy** — *"Pruébalo paralelo a [foreign vendor] 30 días · compare directly"* (cf. doc externo pilot strategy)
- **Trust transfer narrative** — *"Tu vendor actual es buen producto, Zenet es buen producto MX-native"*

### 3.6 Strategic implication — coexistence-primary narrative

**The dominant Zenet narrative is "Layer ON top" coexistence, NOT replacement.** This shapes:

| Element | Implication |
|---|---|
| **Marketing messaging** | *"NO te pedimos cambiar tu sistema actual"* leading positioning |
| **Sales pitch flow** | Acknowledge incumbent value FIRST · then identify gap · then propose additive |
| **Pricing presentation** | $1,500 MXN as **additive line item** (NOT replacement) |
| **Integration roadmap priority** | Must work alongside existing POS investments (CSV upload Fase 1 · API Q3-Q4 2026) |
| **Discovery question primary** | *"¿qué sistema usas hoy?"* → identify scenario → customize |
| **Budget objection handling** | *"¿por qué pago dos sistemas?"* es la objection más frecuente · script prepared |
| **CS playbook** | Coexistence support (Zenet alongside POS) · NOT migration support |
| **Brand archetype reinforced** | Sabio + Cuidador (sous chef cognitivo) · NOT replacement narrative |

---

## 4. Trigger events que abren window de adopción/decisión

> Sales motion timing > sales motion content. Operator NOT en trigger event = baja conversión even con best demo. Operator AT trigger event = high conversión even con mediocre approach.

### 4.0 Marco — 13 triggers organizados en 7 categorías

| Categoría | Triggers |
|---|---|
| Operacionales (escala + sistema) | #1 Segunda sucursal · #8 Key staff turnover · #11 Standardization awareness |
| Financieros | #7 Cash flow crisis · #9 Delivery commission shock |
| Operacionales-supplier | #13 Supplier relationship crisis |
| Relacionales | #2 *Contable* changeover · #10 Peer reference shift · #12 Active consultor engagement |
| Regulatorios | #3 SAT auditoría 2026 |
| Vendor friction (software) | #4 Pricing dispute · #5 Service decline |
| Demográficos | #6 Generational handover |

### 4.1 Operacionales (escala + sistema)

#### Trigger #1 — Segunda sucursal opens (operación se rompe)

**Source:** `02-customer-research/04-customer-journey-detallado.md` + `05-perfil-de-cliente-ideal.md` — el trigger arquetípico Carlos Mendoza Zenet beachhead.

**Mechanism:** Operator tenía sistema (cuaderno + cabeza + bank balance) que funcionaba para 1 sucursal. Abre segunda sucursal y la operación se rompe — pérdidas inventario en sucursal donde no está · food cost variable · *contable* pidiendo data que no existe.

**Sales signal:** Operator anuncia segunda sucursal en LinkedIn · CANIRAC · WhatsApp groups. **Outreach 60-90 días después de apertura** (cuando dolor maduró).

**Heat level:** 🔥🔥🔥 **HIGHEST** para Zenet beachhead — Carlos Mendoza arquetipo direct match.

#### Trigger #8 — Key staff turnover (chef o gerente operativo)

**Source:** `02-customer-research/06-objeciones` §4.7 — 70-80% industry turnover MX.

**Mechanism:** Chef ejecutivo o gerente operativo renuncia. Sistema operativo "en su cabeza" se va con él — recetas, costs, procesos, vendor relationships. Operator descubre que sistema NUNCA fue documentado.

**Sales signal:** LinkedIn (chef/gerente transitions) · CANIRAC community gossip · consultor partner intelligence (*"este restaurant perdió chef · operación rota"*).

**Heat level:** 🔥🔥 **HIGH** · urgent dolor · receptivity alta para standardization solutions.

#### Trigger #11 ⭐ — Awareness of standardization gap (Zenet-aligned)

**Source:** Heredado de CLAUDE.md §8 mission *"convierte caos diario en operaciones claras, estandarizadas e inteligentes"* + customer research §3.1 JTBD + Alan's observation strategic.

**Mechanism:** Operator reconoce explícitamente *"mi operación no está estandarizada · necesito estandarizar"* via:
- Operational incident (plato sale diferente cada día · cocinero nuevo no sabe receta)
- Peer comparison (*"envidia"* de operación organizada de colega)
- Self-realization (preparando vacation · hand-off · expansion)
- Educational exposure (CANIRAC Bootcamp GastronomIA · YouTube · book)

**Sales signal:** WhatsApp groups MX restauranteros (*"¿cómo estandarizo recetas?"*) · LinkedIn posts struggle con consistency · discovery question *"¿tus recetas están documentadas?"*

**Heat level:** 🔥🔥🔥 **HIGHEST conversion probability** dado **perfect product-message fit** con Zenet positioning *"sistema operativo cognitivo que estandariza"*.

### 4.2 Financieros

#### Trigger #7 — Cash flow crisis / margin compression

**Source:** V-001 Romagosa Financial Control Identity *"yo veo si a final de mes queda dinero"*.

**Mechanism:** Operator descubre que **no queda dinero al cierre** · search for inefficiency activado · willingness to invest en visibility tools.

**Sales signal:** Discovery question *"¿qué tal te quedó a fin de mes el balance este trimestre?"* → answer reveals trigger heat.

**Heat level:** 🔥🔥🔥 **HIGHEST en MX context** — most Mexican-cultural-relevant trigger · activates Romagosa frame.

#### Trigger #9 — Delivery commission shock / supplier price hike (PRICE-specific)

**Source:** Q1 Perplexity context · MX-specific external shock.

**Mechanism:** Uber Eats / Rappi / DiDi sube comisión 3-5 puntos · supplier mariscos sube 15% · **margin shock** → operator busca compensar via BoH efficiency.

**Sales signal:** Trade press cobertura commission changes · supplier price hike notices CANIRAC · operator posts dolor.

**Heat level:** 🔥🔥 **HIGH** · dolor external + clear ROI argument para AI BoH.

### 4.3 Operacionales-supplier

#### Trigger #13 ⭐ — Supplier relationship / reliability crisis (BROADER than #9 price)

**Source:** Heredado V-002 Bruce Nelson *"vendor pricing changes but the system doesn't"* + multiple verbatim references.

**Mechanism (broader than #9):** 
- Invoice discrepancies frecuentes (proveedor cobra precio diferente al pactado)
- Delivery reliability collapse (proveedor entrega tarde, incompleto)
- Quality inconsistencies (mariscos hoy distintos al lunes)
- Multiple supplier complexity (60+ WhatsApps día con proveedores)
- Supplier closure / change forced
- Invoice format inconsistencies (papel, photo, WhatsApp, email)
- Discount/credit dispute

**Sales signal:** Discovery question *"¿cómo te están tratando tus proveedores últimamente?"* → operator suelta dolor inmediatamente.

**Heat level:** 🔥🔥🔥 **HIGHEST** · conexión direct con Zenet AI invoice processing + procurement automation + discrepancy detection features.

### 4.4 Relacionales (gatekeepers + community + consultores)

#### Trigger #2 — *Contable* changeover

**Source:** Heredado `02-customer-research/06-objeciones` §6.3 + doc 03 §14.2.

**Mechanism:** Operator cambia *contable* externo (jubilación · mudanza · conflicto · costo). Nuevo *contable* tiene vendor preferences diferentes. El argumento *"porque mi contador anterior me lo recomendó"* se desbloquea.

**Sales signal:** *Contable* changeover discovery questions durante demo · partnership con consultores BoH (Anna · Murguía · Algira) que detectan estos events en su network.

**Heat level:** 🔥🔥 **HIGH** especialmente para Scenario D coexistence.

#### Trigger #10 — Peer reference shift (Mexican-specific)

**Source:** Heredado `02-customer-research/06-objeciones` §4.9 + Q1 verbatim *"¿quién más aquí lo usa?"*.

**Mechanism:** Peer respetado (otro operator TJ · consultor BoH conocido · ex-chef ahora consultant) **recomienda Zenet** o critica vendor incumbent. **Social trust currency flips.**

**Sales signal:** Primer design partner success story TJ = trigger #10 para next 10-20 prospects · CANIRAC Bootcamp GastronomIA peer-to-peer recommendation channel.

**Heat level:** 🔥🔥🔥 **HIGHEST en Mexican context** — *confianza* gate desbloqueada via peer · Mexican switching catalyst #1.

#### Trigger #12 ⭐ — Active consultor gastronómico engagement

**Source:** Heredado doc 01-industry §14 + doc 05 §7.3 *"consultor partner como extensión Zenet"* model.

**Mechanism:** Operator **ya contrató o está contratando** consultor gastronómico — **active buying mode** · decision-maker mobilized · buying objection (*"no quiero gastar más"*) already overcome.

**Sales signal:** Direct consultor partner intelligence (*"acabo de empezar contrato con restaurant X"*) · LinkedIn announcements · trade press case studies.

**Heat level:** 🔥🔥🔥 **HIGHEST conversion** dado consultor partner profit share (20-30% revenue heredado doc 05 §7.3) = consultor activamente cierra deal · operator already past "buying decision threshold".

### 4.5 Regulatorios

#### Trigger #3 — SAT auditoría / fiscalización digital 2026

**Source:** Heredado `01-industry/08-entorno-regulatorio` + CLAUDE.md §4 strategic decision: *"Fiscalización digital SAT 2026 = palanca #1 de mensajería."*

**Mechanism:** SAT auditoría exprés exige data consistente entre POS + inventario + CFDI. Operator descubre que su sistema actual produce data inconsistente → multa o stress regulatorio → motivación upgrade.

**Sales signal:** Trade press SAT enforcement waves · CANIRAC alerts · *contable* outreach sobre prospects facing auditoría.

**Heat level:** 🔥🔥 **HIGH** especialmente para Scenario D *contable* coexistence (*contable* directly affected).

### 4.6 Vendor friction (vendor software)

#### Trigger #4 — Software vendor pricing change / contract dispute

**Mechanism:** Sistema actual sube precio · cambia términos contrato · disputa facturación. Operator activamente buscando alternative.

**Sales signal:** Reddit / Facebook MX groups operators ventean frustration · trade press cobertura price changes (e.g., SoftRestaurant 12 ajusta pricing) · monitor competitive intelligence per vendor.

**Heat level:** 🔥🔥 **HIGH** — anti-vendor sentiment ya presente + budget validation activa.

#### Trigger #5 — Software vendor service quality decline

**Mechanism:** Distribuidor consultor del sistema actual deja de responder · soporte 365-day fail · features prometidas no llegan. Operator pierde *confianza* — el currency más importante Mexican B2B.

**Sales signal:** G2 / Capterra negative reviews recent · word-of-mouth CANIRAC events · consultor partner intelligence (*"cliente frustrado con SoftRestaurant"*).

**Heat level:** 🔥🔥🔥 **HIGHEST** — *confianza* loss = strongest displacement motivator MX (Hofstede UAI uncertainty avoidance).

### 4.7 Demográficos

#### Trigger #6 — Generational handover

**Source:** Heredado `02-customer-research/05-buying-process` §10.5 family-business decision dynamics.

**Mechanism:** Family-business successor (siguiente generación) toma operación · trae tech preferences distintas · dispuesto invertir en modern tools · impatient con legacy ways.

**Sales signal:** LinkedIn announcements generational transitions · CANIRAC Jóvenes Restauranteros membership (cf. CLAUDE.md §4) · trade press successor stories.

**Heat level:** 🔥🔥 **HIGH** — demographic shift en buying committee + greenfield receptivity AI.

### 4.8 Operational implementation triggers

**Sales rep daily checklist:**

1. **Monitor trigger signals daily:**
   - LinkedIn announcements (segunda sucursal · chef/gerente changes · generational transitions)
   - WhatsApp/Facebook MX restauranteros groups (frustration posts · "¿cómo estandarizo?")
   - Consultor partner intelligence (Anna · Murguía · Algira · Entropía Digital)
   - CANIRAC events + trade press

2. **CRM tagging by trigger state:**
   - WARM = trigger active (heat 🔥🔥🔥 priority outreach)
   - LUKEWARM = trigger possible (heat 🔥🔥 monitor + nurture)
   - COLD = no trigger evidence (light nurture only)

3. **Discovery questions explicit trigger probing:**
   - *"¿Qué te trae aquí ahora? ¿Qué cambió últimamente?"*
   - *"¿Cómo te están tratando tus proveedores últimamente?"*
   - *"¿Qué tal te quedó el balance este trimestre?"*
   - *"¿Trabajas con algún consultor BoH ahora?"*
   - *"¿Tu chef actual lleva mucho contigo?"*

4. **Outreach prioritization:**
   - WARM triggers = same-week outreach
   - LUKEWARM = 2-week follow-up cycle
   - COLD = content marketing nurture · NO outbound pressure

---

## 5. 3-narrative adoption/coexistence framework

> Heredado doc 03 §14.4 · refined v0.1 para reflect coexistence-primary reality.

### 5.1 "Layer ON top" narrative — Scenarios A + B

**Apply para:** Pure adoption (Scenario A) + POS coexistence (Scenario B) — **vast majority Zenet conversations**.

**Mensaje verbatim:**

> *"NO replace [vendor X / tu sistema actual]. Tu [POS / sistema actual] sigue siendo tu POS. Zenet vive encima y te agrega capa AI BoH que [vendor X] no ha construido. Pruébalo paralelo 30 días sin cambiar nada. Si te suma valor, lo mantienes."*

**Aplicable específicamente a:**

| Scenario | Application |
|---|---|
| **A — Pure adoption** | *"Tu sistema actual (cuaderno + cabeza + bank balance) funcionó para 1 sucursal. Zenet lo extiende digitally a la sucursal donde tú NO estás físicamente."* (V-021 reframe heredado) |
| **B — POS coexistence (SoftRestaurant)** | *"Mantén SoftRestaurant para POS + facturación + inventario base. Zenet agrega AI BoH que SoftRestaurant NO ha shipped: procurement automation + demand forecasting + costing predictivo."* |
| **B — POS coexistence (PoloTab)** | *"Mantén PoloTab para POS + hardware. Zenet vive sobre cualquier POS hardware-agnostic. Te suma AI BoH layer que PoloTab tiene en datos pero NO en producto."* |
| **B — POS coexistence (Parrot)** | *"Mantén Parrot + Parrot Pay para POS y pagos. Zenet vive sobre Parrot y te agrega AI BoH que Parrot tiene en 3,200 POS dataset pero NO ha shipped como producto AI."* |

**Critical principle — NEVER vendor-bash:** Operator chose current vendor · criticizing vendor = criticizing operator's judgment · damages *confianza* (cf. §9.4).

### 5.2 "*Contable*-friendly augmentation" narrative — Scenario D

**Apply para:** *Contable* gating accounting POS (Aspel CAJA · CONTPAQi PoV · Eleventa).

**Mensaje verbatim:**

> *"Tu *contable* sigue feliz con [Aspel SAE / CONTPAQi Comercial Premium]. Zenet integra directly con [accounting software] (roadmap Q3-Q4 2026) y te agrega capa AI BoH restaurant-specific que [accounting POS] no es. Tu *contable* gets his data + audit trail · tú sumas AI BoH operacional."*

**Critical components:**

1. **Acknowledge *contable* wisdom** — *"Tu *contable* fue inteligente recomendando Aspel — keep that"*
2. **Identify category gap** — *"Aspel CAJA es POS generic · NO restaurant-specialized para BoH AI"*
3. **Integration commitment** — Roadmap Q3-Q4 2026 native integration · interim CSV export
4. ***Contable* engagement promise** — *"Antes de proceder, coordinamos reunión con tu *contable*"*
5. **Audit trail preserved** — CFDI 4.0 native · audit-friendly export

### 5.3 "Generational gap" narrative — Adoption decisions + rare switching

**Apply para:** Greenfield prospects o switch-evaluating users · rare Scenario C true switching.

**Mensaje verbatim:**

> *"Si vas a comprar sistema nuevo en 2026, considera arquitectura: [vendor X] es legacy [year] + cloud edition agregada (su codebase original NO permite AI-native real). Zenet es AI-native desde Day 1, hardware-agnostic, MX-native. Reset technical debt."*

**Aplicable específicamente a:**

| Scenario | Application |
|---|---|
| **Generational handover (#6)** | Successor evaluating tools first time · receptive a modern stack reasoning |
| **Greenfield prospect Scenario A** | NO incumbent · choosing first system · why invest en legacy vs AI-native |
| **Rare Scenario C true switching** | Foreign BoH competitor user · MX-native + AI BoH depth combination advantage |

**Critical caveats:**
- Use **sparingly** vs incumbents (NOT default approach) — risks vendor-bashing perception
- **Best applied** con greenfield + generational handover scenarios where operator NOT emotionally invested en current vendor
- **NEVER as opening line** vs operator using SoftRestaurant 15 años — apply solo si operator opens evaluation conversation

---

## 6. *Contable* gating dynamics deep dive

> **El threat structural más underestimated del competitive landscape MX** (heredado doc 03 §14.2). Critical para Scenario D + cross-cutting Scenarios B + A donde *contable* externo involved en decisión.

### 6.1 Pattern típico de *contable* gating

**Sources heredados:**
- `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §2.4.5 — *Contable* gating dynamics
- `02-customer-research/05-buying-process-y-criterios-de-decision.md` §10.2 — *Contable* engagement sequencing
- doc 03 §14.2 — *Contable* gating dynamics deep dive heredado
- CLAUDE.md §4 strategic decision: *"El chef adopta, el dueño paga, el contador autoriza"*

**Pattern:**

1. Operator confía en *contable* externo para advice fiscal + tecnológico
2. *Contable* recommends **lo que él conoce + le da comisión**:
   - Si *contable* usa Aspel → recomienda Aspel CAJA
   - Si *contable* usa CONTPAQi → recomienda CONTPAQi PoV (via Distribuidor Maestro)
   - Si *contable* es Distribuidor Integral Aspel → upselling Aspel CAJA + SAE
3. **Vendor coalition mayo 2025 (CONTPAQi + MyBusiness POS alliance)** = bridge que cubre limitation accounting-software (NOT restaurant-specialized) con restaurant front-end MyBusiness POS

### 6.2 *Contable* concerns típicos sobre Zenet

| *Contable* concern | Zenet response prepared |
|---|---|
| *"¿Cómo se conecta con mi Aspel SAE / CONTPAQi Comercial?"* | Roadmap Q3-Q4 2026 native integration · interim CSV/Excel export native · audit trail complete |
| *"¿Y la facturación CFDI 4.0?"* | Zenet CFDI 4.0 native · PAC integration · operator continues using current invoicing OR Zenet handles |
| *"¿Cómo va a afectar mi cierre mensual?"* | Zenet provides reconciled data input para tu cierre · NO disruption · acelera proceso |
| *"¿Y los respaldos de información?"* | Cloud backup 99.9% uptime · data export anytime · ownership operator |
| *"¿Quién paga si SAT audita?"* | Zenet facilita compliance · operator/contable retain responsibility · audit trail Zenet supports inspection |
| *"¿Cuánto extra tiempo me toma esto?"* | Zenet reduces *contable* manual work via integration · NET time savings post-Q3 2026 |

### 6.3 Zenet disarming script per *contable* concern

**Pre-call preparation:**

- Identify *contable* name · contact info · accounting software used
- Research *contable*'s vendor relationships (Aspel Distribuidor · CONTPAQi Maestro · independent)
- Prepare integration roadmap document specific para tu *contable*'s software

**Script — *contable* introduction call (Stage F parallel desde Stage C demo · heredado doc 05 §4.5):**

> *"Hola [contable name], soy [Zenet rep]. [Operator name] me pidió coordinar contigo antes de tomar decisión sobre Zenet. Sé que tu opinión es crítica para esta decisión — quiero ANTES de avanzar entender tus concerns y cómo Zenet puede facilitar tu trabajo, no complicarlo."*

**Discovery questions para *contable*:**

1. *"¿Qué accounting software usas para [operator]?"*
2. *"¿Cómo recibes data del POS actualmente?"*
3. *"¿Qué te frustra del setup actual?"*
4. *"¿Qué información necesitas que actualmente no tienes fácil?"*

**Positioning Zenet para *contable*:**

> *"Zenet NO replaces tu Aspel SAE / CONTPAQi. Zenet captura data BoH operacional (facturas, inventario, recetas, costos) y la entrega TÚ en el formato que tu accounting software espera. Roadmap Q3-Q4 2026 native integration. Mientras tanto, CSV/Excel export anytime."*

### 6.4 *Contable* engagement parallel track Stage F

**Heredado doc 05 §4.5 sales motion three-session demo + Stage F parallel:**

| Stage | Activity | *Contable* involvement |
|---|---|---|
| A Lead recibido | Inbound | None |
| B Discovery call | Owner | *Contable* mention surfaced |
| C Demo Sesión 1 (Manager) | Workflow | *Contable* communication initiated by sales rep |
| D Demo Sesión 2 (Chef) | Recipe | None |
| E Demo Sesión 3 (Owner+Manager) | ROI close | None |
| **F *Contable* engagement** | Integration roadmap · audit trail · CFDI alignment | **PRIMARY conversation** |
| G Negociación + pilot agreement | Owner | *Contable* signoff received |
| H Cierre + onboarding kickoff | All | *Contable* informed of go-live |

### 6.5 Vendor coalition response — CONTPAQi + MyBusiness POS alliance mayo 2025

**Threat:** Mayo 2025 alliance creates restaurant-capable front-end (MyBusiness POS) para CONTPAQi Comercial Premium users · vendor coalition contra unified restaurant SaaS players (Zenet).

**Zenet response strategy:**

> *"CONTPAQi + MyBusiness POS alliance es bridge accounting-to-restaurant. Útil para CONTPAQi users existentes. Pero el bundle NO incluye AI BoH substantive — MyBusiness POS es restaurant-capable POS, NOT AI BoH. Zenet roadmap integra con CONTPAQi directly + te da capa AI BoH sin requerir MyBusiness POS layer."*

**Differentiation:** MyBusiness POS = POS · Zenet = AI BoH layer. Compatible · NOT direct competitors. Zenet integrates con CONTPAQi sin requerir MyBusiness intermediate.

---

## 7. Coexistence + switching scripts por scenario

> Operational sales scripts ready-to-use · organized por scenario. Sales rep memorize structure · adapt language to specific operator context.

### 7.1 Adoption scripts — Scenario A (vast majority Mexican operators)

#### 7.1.1 vs cuaderno + memoria + bank balance (TRUE incumbent V-001)

**Operator profile:** Carlos Mendoza arquetipo · NO sistema formal BoH · sistema mental + cuaderno + balance bancario al cierre.

**Discovery questions:**
- *"¿Cómo manejas inventario actualmente?"*
- *"¿Cómo sabes cuánto te cuesta cada platillo realmente?"*
- *"¿Qué pasa cuando abres tu segunda sucursal?"*
- *"¿Qué tal te quedó el balance a fin de mes este trimestre?"*

**Disarming script:**

> *"Entiendo perfecto — tu sistema actual es tu cabeza + cuaderno + balance al cierre. Y ha funcionado para 1 sucursal porque tú estás físicamente allí. Pero piensa en esto: cuando abriste tu segunda sucursal, ese sistema dejó de funcionar porque tú no puedes estar en ambos lados.*
>
> *Zenet NO replaces tu sistema mental — lo extiende digitally a la sucursal donde tú NO estás físicamente. Tu juicio operacional sigue siendo el cerebro · Zenet es la herramienta que te da la información tan rápido como tú tomarías la decisión.*
>
> *30 días pilot sin compromiso. Pruébalo en tu segunda sucursal. Si te suma valor, lo mantienes."*

**Reframe load-bearing:** V-001 *"yo veo si queda dinero a fin de mes"* + V-008 *"lo que te trajo aquí no te lleva a la siguiente sucursal"* + V-010 *"Yo SOY el sistema"* respect.

#### 7.1.2 vs Excel + manual processes

**Operator profile:** Más sofisticado que cuaderno · usa Excel/Google Sheets · alguna sistematización manual.

**Disarming:**

> *"Excel es buen punto de partida — significa que ya entiendes la importancia de tracking. Zenet automatiza lo que tú haces en Excel manualmente: captura facturas via foto WhatsApp · actualiza costos por receta automáticamente · te alerta cuando proveedor cambia precio.*
>
> *Tu Excel sigue siendo TU análisis personal. Zenet alimenta tu Excel con data confiable que hoy capturas manualmente."*

### 7.2 Coexistence scripts — Scenario B (POS coexistence)

#### 7.2.1 vs SoftRestaurant

**Operator profile:** Usa SoftRestaurant (LITE/PRO/SR 11/12) · distribuidor relationship (SYCA/Entropía Digital/SonoraTech/etc.) · 5-24 años tenure típico.

**Acknowledge value:**

> *"SoftRestaurant tiene 24 años en MX · es el referente · tu distribuidor probably te cuida bien."*

**Identify gap:**

> *"Pero SoftRestaurant es POS-first — su BoH module (inventario · recetas · costos) es secondary. Y AI BoH features substantive (procurement automation · demand forecasting · costing predictivo) NO está shipped en SoftRestaurant — incluso Soft Restaurant 12 lanzado septiembre 2025 menciona 'real-time decision modules' pero NOT AI predictive verifiable."*

**Coexistence propose:**

> *"Zenet vive ENCIMA de SoftRestaurant. Mantén SoftRestaurant + tu distribuidor relationship. Zenet integra via CSV upload Fase 1 · API Q3-Q4 2026 · te agrega AI BoH layer que SoftRestaurant no ha shipped. Pruébalo paralelo 30 días sin tocar tu SoftRestaurant."*

**Pricing comparison:**

> *"SoftRestaurant PRO $999 MXN/mes + Zenet Pro $1,500 MXN/mes = $2,499 total · vs solo SoftRestaurant $999. ¿Qué retorno te da los $1,500 extra? Pilot 30 días lo demuestra: typical operators recover 5+ horas/semana en time savings + 2-5% reduction en food cost variance · ROI typical mes 1-2 post-pilot."*

#### 7.2.2 vs PoloTab

**Operator profile:** PoloTab YC W23 modern · proprietary hardware (PoloTab terminal) · 36+ ciudades MX · likely 1-3 años tenure.

**Acknowledge value:**

> *"PoloTab es modern · YC-backed · su POS funciona bien para tu segmento."*

**Identify gap:**

> *"PoloTab NO ha shipped AI BoH features (procurement automation · demand forecasting · costing predictivo). Tu PoloTab tiene datos · pero NO la inteligencia AI sobre esos datos en producto."*

**Coexistence + open ecosystem:**

> *"Zenet es hardware-agnostic — funciona sobre PoloTab + tu terminal PoloPay sin requerir cambio hardware. Te agrega AI BoH layer que PoloTab no tiene shipped."*

**Anticipated objection:** *"¿Pero PoloTab algún día va a hacer AI?"*

**Response:**

> *"Probablemente sí, en 6-12 meses. PERO para entonces ya tendrás Zenet ROI compounded 6-12 meses · puedes evaluate switching later si PoloTab AI es superior. Mientras tanto, no esperes."*

#### 7.2.3 vs Parrot Software

**Operator profile:** Parrot ParrotConnect · founded 2020 · 3,200+ POS · Parrot Pay closed ecosystem · 1-5 años tenure.

**Acknowledge value:**

> *"Parrot es POS Mexicano established · Parrot Pay simplifies pagos · su Industry Report 2025 demuestra que captura datos sólidos."*

**Identify gap + leverage Parrot Pay closed ecosystem vulnerability:**

> *"Parrot tiene los datos (3,200+ POS) · pero NO la inteligencia AI shipped como producto. El Industry Report 2025 es BI descriptivo, NOT AI predictivo. Y hay otra cosa: Parrot Pay closed ecosystem te encierra en MDR rates que no puedes negociar. Si tu volume justifica negociar bank TPV directly, Zenet permite migration."*

**Coexistence propose:**

> *"Mantén Parrot + Parrot Pay si te funcionan ahora. Zenet hardware-agnostic — vive sobre Parrot y te agrega AI BoH que Parrot tiene en datos pero NO en producto. Plus opción de open payment ecosystem si volume justifica."*

#### 7.2.4 vs Wansoft (by Clip)

**Operator profile:** Wansoft 15-20 años + Clip rebrand reciente · Clip Total 2/Ultra terminals bundled · payment ecosystem lock-in.

**Acknowledge value:**

> *"Wansoft 100% mexicano · 15-20 años en MX · Clip partnership te da bundle pagos + software conveniente."*

**Identify gap:**

> *"Wansoft is mid-market POS · NO AI BoH features shipped. Y el Clip ecosystem lock-in (pagos + hardware) puede ser caro para operators con volume alto que pueden negociar bank TPV mejor."*

**Coexistence propose:**

> *"Zenet hardware-agnostic — coexiste con Wansoft + Clip si te funcionan. Te agrega AI BoH layer separate del payment ecosystem."*

#### 7.2.5 vs Sistemas Sierra (BC regional 46 años)

**Operator profile:** TJ/BC restaurant operator · Sistemas Sierra desde 1980 · 4 offices (Mexicali HQ + TJ + MTY + GDL) · 5-30 años tenure · mariscos sweet spot.

**Acknowledge value (CRITICAL — 46 año relationship respect):**

> *"Sistemas Sierra ha servido TJ/BC desde 1980 — 46 años. Eso es respeto y relationship. Sierra entiende mariscos como segmento — yo escuché que su sweet spot declarado es 'desde una carreta de mariscos hasta sucursales con centro de distribución'."*

**Identify gap (NOT vendor-bash · architectural framing):**

> *"Sierra ha sido confiable. Y al mismo tiempo, su stack es de 46 años — built en architecture pre-cloud, pre-AI. Migrar Sierra a AI-native sería rewrite completo · improbable corto plazo. Zenet es 2025 AI-native desde Day 1."*

**Coexistence propose:**

> *"Zenet vive ENCIMA de Sierra. Mantén Sierra para POS + ERP base que ya funciona. Zenet agrega AI BoH layer (procurement · forecast · costing predictivo) que Sierra no puede ship rápido. Pruébalo paralelo 30 días sin tocar tu Sierra."*

**TJ-specific advantage:**

> *"Plus — yo estoy basado en TJ. Si necesitas reunión presencial, yo voy a tu sucursal."*

#### 7.2.6 vs SICAR (dual product · 120K businesses claim)

**Operator profile:** SICAR v4.0 (legacy desktop) + SICAR X cloud edition · CFDI 4.0 shipped · "sin rentas mensuales" model classic.

**Acknowledge value:**

> *"SICAR tiene 120K+ businesses en MX/LATAM · CFDI 4.0 native · 'sin rentas mensuales' model atractivo para pricing."*

**Identify gap:**

> *"SICAR es POS multi-vertical (retail + restaurant + cafeterías). NO restaurant-specialized AI BoH. Tu stack tiene dual product (legacy v4.0 + cloud SICAR X) que sugiere foco en cloud catch-up, NOT AI innovation."*

**Coexistence propose:**

> *"Zenet vive sobre cualquier POS — SICAR X cloud incluido. Te agrega AI BoH layer restaurant-specific que SICAR multi-vertical no es."*

#### 7.2.7 vs Fudo (LATAM cloud + AI shipped FoH)

**Operator profile:** Fudo Argentina via CDMX office · pricing PDF MX feb 2026 · AI WhatsApp chatbot shipped diciembre 2025 (FoH delivery).

**Acknowledge value + AI velocity:**

> *"Fudo es buen cloud POS Argentino · MX-active 4+ años · y ya shippearon WhatsApp AI chatbot diciembre 2025. Velocity proven."*

**Identify gap (critical distinction FoH vs BoH AI):**

> *"PERO Fudo AI está en FoH delivery (taking orders from customers) · NOT en tu BoH operacional (procurement + invoices + costing). BoH AI native = next step natural para Fudo en 12-18 meses · pero NOT shipped today. Zenet es BoH AI native Day 1."*

**Coexistence propose:**

> *"Zenet vive sobre Fudo. Mantén Fudo para POS + delivery + customer-facing WhatsApp AI. Zenet agrega BoH AI layer (procurement automation + demand forecasting + costing predictivo) que Fudo no ha shipped."*

**Mexican Spanish friction:**

> *"Y un detalle: Fudo es argentino — 'querés' en lugar de 'quieres'. Zenet es MX desde Day 1 · Mexican Spanish nativo."*

#### 7.2.8 vs Toteat (LATAM cloud + AI funded NOT shipped)

**Operator profile:** Toteat Chile via MX commercial team (Tomás Drápela Country Manager) · $7.4M septiembre 2025 raised específicamente para AI development.

**Acknowledge value:**

> *"Toteat es buen POS chileno cloud-native · MX commercial team active desde 2023 · 5,000+ MX restaurants self-reported · $7.4M raised para AI specifically septiembre 2025."*

**Identify gap (critical distinction funded vs shipped):**

> *"Pero Toteat AI is funded NOT shipped — su comunicación es 'AI roadmap', no AI feature demo verificable como producto. Zenet AI BoH es shipped hoy."*

**Coexistence vs switching path:**

> *"Zenet vive sobre Toteat. Mantén Toteat para POS + LATAM cloud. Zenet agrega AI BoH layer hoy mientras Toteat construye su AI."*

**Mexican Spanish + MX-resident advantage:**

> *"Tomás Drápela manages MX desde Chile. Yo estoy físicamente en MX, TJ-resident."*

#### 7.2.9 vs Last.app (Spain modern · AI "Supper" shipped)

**Operator profile:** Last.app Barcelona Spain · MX entry julio 2025 · distributor program /mx/distribuidores active · "Supper" AI assistant shipped (natural language query).

**Acknowledge value:**

> *"Last.app es modern Spanish cloud · MX entry recent julio 2025 · 'Supper' AI assistant shipped (natural language queries)."*

**Identify gap (Supper narrow scope):**

> *"Supper AI is NL query — single feature. NOT comprehensive BoH AI stack (procurement + forecast + costing automated). Plus Spain Spanish — Mexican operators notice 'Castilian usage'."*

**Coexistence propose:**

> *"Zenet vive sobre Last.app. Mantén Last.app para POS + Supper NL query. Zenet agrega comprehensive AI BoH layer · MX-native Spanish."*

#### 7.2.10 vs Bistrosoft (Argentine cloud · AI gap)

**Operator profile:** Bistrosoft founded enero 2019 (cloud-native) · MX active desde 2022 · CFDI 4.0 operational · NO AI features shipped · CIO ex-fintech (Ingenico/Lyra) NOT AI/ML background.

**Acknowledge value:**

> *"Bistrosoft es Argentine cloud-native · MX active 4+ años · CFDI 4.0 operational."*

**Identify gap critical:**

> *"PERO Bistrosoft NO ha shipped AI features. Su CIO viene de fintech (Ingenico, Lyra Network), NOT AI/ML. Bistrosoft es POS+inventory cloud sin AI layer."*

**Coexistence propose:**

> *"Zenet vive sobre Bistrosoft. Mantén Bistrosoft para POS + CFDI base. Zenet agrega AI BoH layer que Bistrosoft no ha construido."*

### 7.3 *Contable* coexistence scripts — Scenario D

#### 7.3.1 vs Aspel CAJA (Siigo)

**Operator profile:** Aspel CAJA suscripción ~$1,108 MXN/mes · *contable* externo usa Aspel SAE · 300+ Distribuidores Integrales nacional.

**Acknowledge *contable* wisdom:**

> *"Tu *contable* fue inteligente recomendando Aspel — Aspel SAE + Aspel CAJA integran natively. Tu cierre mensual está armado."*

**Identify category gap:**

> *"Aspel CAJA es POS retail generic — sirve para tiendas + restaurantes + farmacias. NO es restaurant-specialized. Y Aspel NO tiene AI BoH features shipped — su stack es legacy."*

***Contable*-friendly augmentation:**

> *"Zenet integra con Aspel SAE (roadmap Q3-Q4 2026 · interim CSV export). Tu *contable* sigue feliz con su Aspel — recibe data BoH operacional desde Zenet en el formato Aspel espera. Tú agregas AI BoH restaurant-specific que Aspel CAJA no es."*

***Contable* engagement promise:**

> *"Antes de proceder, podemos coordinar reunión con tu *contable*. Yo le explico la integration roadmap · él me dice qué data necesita exactly. Decisión after that meeting."*

#### 7.3.2 vs CONTPAQi Punto de Venta

**Operator profile:** CONTPAQi PoV via Distribuidores Maestros (S&P · LIMAC · Ad Hoc · BECMA) · *contable* maneja CONTPAQi Contabilidad + Comercial Premium.

**Same framework como 7.3.1 con CONTPAQi-specific adjustments:**

> *"Tu *contable* maneja CONTPAQi Comercial Premium + CONTPAQi Contabilidad. CONTPAQi PoV es POS generic — sirve para múltiples industries · NO restaurant-specialized AI BoH."*

> *"Zenet integra con CONTPAQi Comercial Premium (roadmap Q3-Q4 2026 · interim CSV/Excel export native). Tu *contable* sigue feliz · tú agregas AI BoH layer restaurant-specific."*

#### 7.3.3 vs CONTPAQi + MyBusiness POS alliance (mayo 2025)

**Operator profile:** Operator considerando o usando MyBusiness POS por CONTPAQi alliance · *contable* recomendó el bridge accounting-to-restaurant.

**Acknowledge alliance value:**

> *"CONTPAQi + MyBusiness POS alliance es bridge inteligente accounting-to-restaurant. MyBusiness POS es restaurant-capable POS · útil si vienes desde CONTPAQi accounting."*

**Identify gap (alliance NOT incluye AI BoH):**

> *"Pero el alliance bundle NO incluye AI BoH substantive — MyBusiness POS es restaurant-capable POS, NOT AI BoH layer. Zenet integra con CONTPAQi directly · no requires MyBusiness POS intermediate."*

**Coexistence propose:**

> *"Tienes opción: (A) Mantener MyBusiness POS + agregar Zenet AI BoH on top · (B) Skip MyBusiness POS · ir directly Zenet integrado con CONTPAQi. Cualquier path, tu *contable* sigue feliz con CONTPAQi."*

### 7.4 Switching scripts — Scenario C (rare edge case)

#### 7.4.1 vs MarginEdge (US BoH archetype) — rare scenario

**If prospect actually has MarginEdge** (extremely rare en MX):

**Acknowledge MarginEdge value:**

> *"MarginEdge es referente global · 10 años AI head start desde 2015 · best-in-class AI BoH execution US/Canada."*

**MX-native advantage:**

> *"PERO MarginEdge NO MX-native — NO CFDI 4.0 nativo · NO *contable* Aspel/CONTPAQi integration · NO Mexican Spanish localizado · NO WhatsApp Business CS · NO Mexican peer references local. Spanish toggle UI only — NOT Spanish-MX product."*

**Switching narrative:**

> *"Zenet es 'MarginEdge para México · MX-native desde Day 1'. Mismas AI BoH capabilities core (invoice processing · procurement automation · demand forecasting · costing predictivo) · plus Mexican market depth completa."*

**Pilot strategy:**

> *"Pruébalo paralelo 30 días contra MarginEdge. Compare directly. Si MarginEdge sigue siendo mejor para tu operación · keep MarginEdge. Si Zenet's MX-native advantage te suma valor · switch."*

#### 7.4.2 vs Apicbase / Supy / Restoke / Loaded / FoodOp / Nory — rare scenarios

**Similar framework — MX-native advantage primary**:

> *"[Foreign vendor] es buen producto globalmente — [acknowledge specific strengths]. PERO NO MX-native — sin CFDI · sin Spanish-MX · sin WhatsApp · sin *contable* integration · sin Mexican peer references. Zenet construye la versión MX-native con AI shipped y la profundidad del mercado mexicano que [foreign vendor] tendría que construir desde cero (24-36 meses estimated entry friction)."*

#### 7.4.3 vs Oracle Simphony — integration partnership (NOT replacement)

**If operator uses Oracle Simphony** (enterprise · multi-unit chains o hoteles):

**Different from typical switching:**

> *"Oracle Simphony es enterprise POS — diseñado para chains + hotels + stadiums multi-unit. NOT your typical Zenet ICP, pero MX presence sólida (Oracle Mexico City office · HRS partner · dxlatam network · AI Smart Assistant launched marzo 2026)."*

**Integration partnership (NOT competition):**

> *"Zenet positions como Simphony-compatible BoH AI layer · NOT competitor. Si ya usas Simphony para POS function · Zenet integra via API (roadmap Q2-Q3 2027) y te agrega capa AI BoH que Simphony Smart Assistant NO es (Smart Assistant es operational support AI · NOT BoH cost optimization)."*

**For SMB segment (NOT Simphony users):**

> *"Si estás considerando Simphony para tu 2-5 sucursales operation: probably overkill — Simphony enterprise + $2,595 implementation + multi-year contracts. Zenet diseñado para tu segmento (SMB independent) con pricing accessible + AI BoH shipped + sin implementation fee."*

---

## 8. Anti-patterns documented

### 8.1 MarketMan G2 case study heredado

**Source:** `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §4.10 · V-006 verbatim.

**Anti-pattern:** Operator post-cancellation feedback when vendor responded with contract citations + repeated feature demos instead of acknowledging operational habit failure.

**Verbatim load-bearing (V-006):**

> *"After years of being a paying customer, this was insulting and incredibly tone-deaf."*

**Lessons for Zenet CS playbook:**

| Anti-pattern | What NOT to do | What TO do instead |
|---|---|---|
| **Feature-demo response a churn** | Re-demo features when customer wants to cancel | Acknowledge operational habit failure · address discipline gap (Bruce Nelson reference) |
| **Contract citation save attempts** | *"You committed to annual contract, you can't cancel"* | Honor cancellation request · ask post-mortem · learn |
| **Generic complaint dismissal** | Treating all churn as "didn't use the product enough" | Distinguish: technical failure vs operational habit collapse vs ICP mismatch |
| **Late onboarding intervention** | Wait until customer complains | Proactive 30-60-90 day check-ins (cf. doc 05 §8 + doc externo pilot strategy) |

### 8.2 Mexican-specific anti-patterns

**Source:** `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §5.2 + §5.6 + Hofstede dimensions.

**NO hacer en Mexican context:**

| Anti-pattern | Reason it fails MX | Right approach |
|---|---|---|
| **Vendor-bashing incumbent** (*"SoftRestaurant es viejo y malo"*) | Operator chose incumbent · criticizing it = criticizing his judgment · damages *confianza* | Acknowledge incumbent value first · then identify gap · then propose additive |
| **Pressure tactics urgency** (*"solo hasta el viernes"*) | Hofstede UAI 82 — pressure activates risk aversion · backfires | Educational pace · multi-touchpoint · let *confianza* accumulate |
| **Direct contradiction senior buyer** (*"estás equivocado"*) | Hofstede PDI 81 — face loss · destroys relationship | Reframe via questions (*"¿qué pasaría si...?"*) · never direct contradiction |
| **Cold outbound mass email** | Mexican B2B expects warm intro · relationship-driven sales | Warm introductions via consultor partner network · CANIRAC events · peer referrals |
| **Aggressive ROI math early** | Premature ROI math feels manipulative pre-trust · Hofstede UAI | Trust-building first · ROI math after pilot data |
| **Single-stakeholder closing** | Mexican buying committee multi-stakeholder · *contable* veto risk · family decisions | Three-session demo structure · *contable* parallel track · family decision-maker identification |
| **Auto-renewal w/o conversation** | Mexican relationship-driven · auto-renewal feels impersonal | Pre-renewal conversation 30-60 days before · WhatsApp + in-person if TJ |
| **Save tactic = price discount** | Mexican: senior personal attention > price · MarketMan G2 lesson | In-person founder visit > discount · *confianza* repair |

### 8.3 Coexistence-specific anti-patterns NEW

**Anti-patterns when operator wants to ADD Zenet alongside existing vendor (not switch):**

| Anti-pattern | Why it fails | Right approach |
|---|---|---|
| **POS vendor self-defense response** (incumbent says *"pero nuestro sistema ya tiene inventario · ¿por qué necesitas otro?"*) | Generic feature comparison loses to incumbent's *"all-in-one"* messaging | Educate operator on category distinction (POS BoH module vs AI BoH layer) |
| **Treating Zenet as POS replacement** | Operator anxious about replacement · friction | Lead with *"NO te pedimos cambiar tu POS"* · additive framing |
| **Integration overpromise** | If Zenet ships manual upload Fase 1 but promises API integration that's roadmap | Honest current state · clear roadmap · acknowledge friction temporarily |
| **Pricing as replacement of POS spend** | Operator sees Zenet as $1,500 MXN/mes EXTRA on top of $999 SoftRestaurant = $2,499 total → sticker shock | Frame Zenet as additive line item with quantified ROI · 30-day pilot zero risk |
| **Vendor-bashing implicit** (e.g., *"SoftRestaurant no es realmente AI"*) | Even implicit criticism feels vendor-bashing · *confianza* damage | Stick to facts: *"SoftRestaurant ha shipped X · Zenet ha shipped Y · diferentes layers"* |

### 8.4 Adoption-specific anti-patterns NEW

**Anti-patterns para Scenario A pure adoption operators:**

| Anti-pattern | Why fails | Right approach |
|---|---|---|
| **Assuming operator wants "software"** | Operator's TRUE incumbent is *"yo SOY el sistema"* (V-010) · NOT looking for software | Reframe: *"extender tu sistema mental, NOT software replacement"* |
| **Tech jargon (cloud, AI, ML)** | Operator literacy gap · activates resistance | Operator language: *"información rápida"* · *"controlar costos"* · *"saber qué pasa"* |
| **Promising "automatización total"** | Triggers *"replacement of operator judgment"* fear · backfires Mexican operator identity | Frame: *"AI que augmenta tu criterio, NOT lo reemplaza"* (Murguía validation V-022) |
| **Demanding 100% data entry upfront** | Operator overwhelmed · NO time to enter all recipes Day 1 | Start partial (5-10 recipes critical) · expand over pilot · AI fills gaps from invoices |

---

## 9. Mexican cultural dynamics — 6 sub-secciones

### 9.1 *Confianza* accumulation requires patience

**Source:**
- `02-customer-research/05-buying-process` §10.1 *Confianza* accumulation timeline
- CLAUDE.md §4 — *"3-lane sales cycle model — Fast 4-8 sem / Standard 8-16 sem / Slow 16-30+ sem"*
- Hofstede MX UAI 82
- V-016 *"hablamos pronto"* (Mexican linguistic stall code)
- V-007 *"prefieren observar antes de comprometer"*

**Content:**

- Mexican B2B trust NO se gana en single demo
- Requires 3-8 touchpoints over 4-12 semanas típicamente
- *"Hablamos pronto"* sin commitment specific = soft no
- Pressure tactics aceleran perceived risk → operator pulls back
- **Implicación adoption/coexistence:** even with valid trigger event, operator won't decide quickly · sales rep must be paciente · multi-touchpoint cadence

**Sales rep action:**

- NEVER push close en first demo
- Schedule firm follow-up con specific date (NOT *"hablamos pronto"*)
- Pilot offer reduces friction (cf. doc externo pilot strategy)
- *Confianza* travels through peers · invest en peer references early

### 9.2 Hofstede uncertainty avoidance → pilot model essential

**Source:**
- Hofstede MX UAI 82 (one of highest uncertainty avoidance scores Latin America)
- `02-customer-research/06-objeciones` §3.5 implementation fear as biggest barrier
- doc 04 §8 Matrix #6 contract + trial
- **Pilot strategy details → cf. doc externo pilot strategy**

**Content:**

- Mexican operators NO trust new vendors sin proof-of-concept
- Pilot 30-60 días = uncertainty reducer estructural
- Money-back guarantee 30-day acceptable pero pilot más powerful
- *"Déjame probarlo primero"* es Mexican-cultural code para uncertainty avoidance
- **Implicación adoption/coexistence:** pilot phase es non-negotiable · sin pilot = high churn risk Fase 0

**Pilot strategy details:** cf. doc externo pilot strategy (referenced throughout doc 06)

### 9.3 Family-business decision dynamics

**Source:**
- `02-customer-research/05-buying-process` §10.5 family-business decision dynamics
- `02-customer-research/06-objeciones` §6.1 anti-perfil conflicto societario
- CLAUDE.md §4 — *"chef adopta, dueño paga, contador autoriza"*
- V-011 verbatim multi-stakeholder chaos

**Content:**

- Many Mexican restaurants are family businesses (spouse · sibling · successor involved)
- Multi-stakeholder buying committee + family pressure
- Decision NO solo operator — esposa, hermano, padre, hijo involved often
- Conflict potential: *"yo quiero X, mi socio (esposo/hermano) quiere Y"*
- **Implicación adoption/coexistence:** identify family decision-makers en discovery · address concerns de ALL stakeholders · respect family hierarchy

**Discovery question key:**

> *"¿Quién más está involucrado en esta decisión?"*

**Multi-thread strategy:** 68% win rate vs 23% single-thread (heredado doc 06 customer research §5.7).

### 9.4 Relationship loyalty respect (NOT vendor-bashing)

**Source:**
- `02-customer-research/06-objeciones` §4.9 Mexican recovery patterns
- `02-customer-research/06-objeciones` §5.2 Mexican cultural specifics (NO confrontation · NO *"estás equivocado"*)
- Hofstede MX PDI 81 (power distance)
- V-019 *apechugar* (stoicism cultural code)

**Content:**

- Operator's relationship with current vendor (distribuidor · consultor · *contable*) is **ASSET** — operator chose them, criticizing them = criticizing his judgment
- Mexican Hofstede PDI 81: direct contradiction of vendor or operator's choice = face loss
- *"SoftRestaurant lleva 24 años — eso es respeto"* es Mexican cultural acknowledgment
- *Apechugar* cultural code — esfuerzo es virtue · "trabajar menos" messaging activa resistance
- **NEVER vendor-bash:** *"SoftRestaurant es viejo y malo"* destroys *confianza* with operator
- **Reframe correcto:** *"Mantén tu sistema actual + agrega Zenet on top"* (additive, NOT replacement)

**Sales rep action:**

- Acknowledge incumbent value FIRST en every conversation
- Identify gap via questions (NOT statements about incumbent)
- Propose additive (NOT replacement)
- Respect *apechugar* identity — AI augments hard work, NOT replaces it

### 9.5 NEW — Mexican tech adoption cultural friction

**Source heredado extensive:**

- `02-customer-research/03-pains-y-workarounds.md` §5.10 — Foundational research industry tech adoption lag (10-15% globally · **10% Mexico**) · 6 structural drivers documented
- V-003 STAT — IIEG Encuesta Restaurantes Jalisco 2024 (n=478): **40.9% reportan "no les da confianza"** software/tech · 23.2% "comisiones son altas"
- V-005 VERBATIM — EFE/Concanaco Anabell González CANIRAC septiembre 2022: *"El sector restaurantero ve la tecnología como **algo difícil y muy costoso**"* — paired beliefs
- V-013 VERBATIM — Romagosa: *"No es que la AI no sirva, es que el operador no sabe qué hacer con la respuesta cuando llega"* — interpretation gap
- Q1 Perplexity output — Mexican AI adoption SMB context

**6 structural drivers de tech adoption lag MX (heredado doc 03 §5.10):**

1. **Economic** — margin compression sector → tech is "extra cost"
2. **Operational** — no IT person · no time to learn
3. **Talent** — avg operator age 45-55+ · generational tech literacy gap
4. **Cultural** — *"complicado y costoso"* institutional belief (Anabell González)
5. **Vendor-market** — over-promised historically · broken trust (IIEG 40.9%)
6. **Mexico-specific** — Spanish-language tech vocabulary friction · smartphone-native expectations vs desktop UX

**Cultural codes adjacent:**

- ***Apechugar*** (V-019) — hard work as virtue · NOT replaced by AI · messaging *"trabajar menos"* puede activar resistance
- ***El diablo conocido***: Mexican risk aversion proverb · even painful incumbent preferable to uncertain new vendor
- **Romagosa interpretation gap** (V-013) — *"no sabe qué hacer con la respuesta"* — operator needs interpretation + action support, NOT just data access

**Implicación operacional para Zenet sales motion:**

1. **Cannot lead with "AI-native" technical language** — friction · operator anxiety
2. **Must demonstrate IMMEDIATE concrete value** (NOT abstract capabilities · NOT "transformation")
3. **Smartphone + WhatsApp interface critical** — operator's existing literacy + comfort zone
4. **Pilot model essential** — *"prove it works in MY operation"* before trust (cf. doc externo pilot strategy)
5. **Interpretation support built-in** — Zenet NO solo da answer · también dice operator QUÉ HACER con ella
6. **Reference operators** — *confianza* travels through peers, NOT vendor claims

**Messaging language adjustments:**

| Tech-language (avoid) | Operator-language (use) |
|---|---|
| "AI-native platform" | "Sistema que aprende de tu operación" |
| "Machine learning" | "Información inteligente · alertas automáticas" |
| "Automation" | "Te ahorra el trabajo manual" |
| "API integrations" | "Se conecta con lo que ya usas" |
| "Predictive analytics" | "Te dice qué va a pasar antes de que pase" |
| "Data-driven decisions" | "Información clara para decidir rápido" |
| "Streamline operations" | "Te quita el caos diario" |

### 9.6 NEW — Integration infrastructure gap MX vs US/EU

**Source heredado:**

- `01-industry-and-market/02-definicion-y-alcance.md` §4.4 + CLAUDE.md §4 — Zenet capa cognitiva sobre POS existente positioning
- `02-customer-research/04-customer-journey-detallado.md` §3.6.7 — **Zenet Fase 1 manual POS upload (NOT API)** — Modo 1 CSV/Excel/PDF · Modo 2 manual capture · Modo 3 photo+OCR (Alan's clarification heredada)
- Q4 Parrot — Parrot Pay closed ecosystem
- Q3 Q2 outputs — PoloTab proprietary hardware lock-in · Wansoft Clip ecosystem · SoftRestaurant proprietary data
- doc 04 §6 Matrix #4 — POS integration mode
- doc 05 §7 — distributor/consultor network MX

**Structural gaps MX vs US/EU:**

| Dimensión | MX/LATAM | US/EU |
|---|---|---|
| **POS API exposure** | Rare · most legacy desktop · proprietary lock-in (Parrot Pay · PoloTab · Wansoft Clip) | Toast 200+ integrations marketplace · Square ecosystem · Lightspeed open |
| **Accounting integration** | Legacy file-based — Aspel SAE Excel/CSV export · CONTPAQi via local DB · *contable* manual workflow | QuickBooks + Xero con thousands de integraciones nativas · API-first |
| **CFDI standardization** | Standard format pero implementation varies per vendor · PAC dependencies | N/A (US/EU different invoicing standards) |
| **Multi-vendor stack interop** | Operator manages multiple disconnected tools manually (POS + accounting + delivery + spreadsheets) | Native integrations between Toast/Square/QuickBooks |
| **Developer ecosystem** | Limited · few certified integrators · most vendors don't have developer programs | Mature ecosystem (Zapier · APIs · webhooks · documentation standards) |
| **Vendor lock-in culture** | Proprietary hardware (PoloTab · Parrot Pay · Clip) · ecosystem moats | Open API expectation · interoperability norm |

**Implicaciones operacional para Zenet:**

1. **Manual upload Fase 1 necessary** (NOT optional) — Zenet must work with photo OCR + CSV/Excel upload + manual capture **porque POS APIs aren't available**
2. **CONTPAQi/Aspel integration es competitive moat** — vendors NO ofrecen native integration · Zenet's Q3-Q4 2026 roadmap (heredado doc 03 §7 + doc 05 §13.3) es structural differentiator
3. **Coexistence narrative facilitated** — *"Zenet trabaja sobre cualquier POS sin integration native"* es ADVANTAGE en MX (no integration friction · operator NO loses POS investment)
4. **Integration roadmap matters more** — Q3-Q4 2026 CONTPAQi/Aspel + Q1 2027 POS APIs (priority order)
5. **Pilot strategy must accommodate friction** — pilot includes data import labor (NOT just feature trial) · cf. doc externo pilot strategy
6. **Distributor/consultor model leverages this gap** — consultors **handle integration manually** for operator (= service revenue layer adicional para consultor partners)

**Strategic implication para messaging:**

> *"Zenet trabaja sobre cualquier POS — NO requires API integration. Subes facturas via foto WhatsApp · CSV/Excel import · manual capture. Sin friction de integration técnica. Sin esperar que tu POS exponga API."*

**Sales rep action:**

- Don't promise API integration that requires POS vendor cooperation
- Lead with manual upload simplicity Fase 1
- Demonstrate photo OCR demo (Day 1 setup live demo)
- Roadmap CONTPAQi/Aspel + POS APIs (transparent timeline)

---

## 10. Zenet adoption/coexistence playbook synthesized por scenario

> Operational sales rep daily playbook · consolidated across docs 01-05 + this doc.

### 10.1 Sales rep daily workflow

**Pre-prospect contact:**

1. **Identify trigger heat** (cf. §4)
   - Monitor LinkedIn · CANIRAC · WhatsApp groups · consultor partner intelligence
   - Tag prospect WARM / LUKEWARM / COLD based on trigger evidence
2. **CRM enrichment**
   - Vendor used (POS · accounting · BoH if any)
   - *Contable* involvement signals
   - Family business signals
   - Number of locations
   - Mariscos vs other cuisine

**Discovery call (Stage B doc 05 §4.5):**

1. **Trigger probing questions:**
   - *"¿Qué te trae aquí ahora?"*
   - *"¿Cómo te están tratando tus proveedores últimamente?"*
   - *"¿Qué tal te quedó el balance este trimestre?"*
2. **Scenario identification question primary:**
   - *"¿Qué sistema usas hoy para BoH (inventarios + recetas + costos + procurement)?"*
3. **Stakeholder mapping:**
   - *"¿Quién más está involucrado en esta decisión? (socio · esposa · gerente · chef · *contable*)"*
4. **Pain validation:**
   - *"¿Qué te frustra del setup actual?"*

**Scenario-specific demo planning (Stages C-E):**

| Scenario identified | Demo focus |
|---|---|
| **A — Pure adoption** | Lead with V-001 reframe · TRUE incumbent acknowledgment · cuaderno extension narrative · WhatsApp Business operational interface demo |
| **B — POS coexistence** | Acknowledge POS value · identify AI BoH gap · coexistence demo (Zenet alongside POS visible) · pricing comparison |
| **D — *Contable* coexistence** | *Contable* engagement Stage F parallel · integration roadmap presentation · audit trail emphasis |
| **C — True switching (rare)** | MX-native advantage primary · parallel pilot offer · cf. doc externo pilot strategy |

### 10.2 Discovery questions by scenario

**Universal (todos scenarios):**

- *"¿Cuántas sucursales tienes?"*
- *"¿Cuánto tiempo llevas operando?"*
- *"¿Quién es tu chef ejecutivo?"*
- *"¿Quién maneja tu contabilidad?"*

**Scenario A (Pure adoption):**

- *"¿Cómo manejas inventario actualmente?"*
- *"¿Cómo sabes cuánto te cuesta cada platillo?"*
- *"¿Qué pasa cuando abres tu segunda sucursal?"*
- *"¿Cómo coordinas con tu *contable* mensualmente?"*

**Scenario B (POS coexistence):**

- *"¿Cuánto tiempo llevas con [vendor X]?"*
- *"¿Qué te frustra de [vendor X]?"*
- *"¿Qué información NO te da [vendor X] hoy que te gustaría tener?"*
- *"¿Cómo usas el módulo de inventarios de [vendor X]?"*

**Scenario D (*Contable* coexistence):**

- *"¿Tu *contable* maneja Aspel SAE o CONTPAQi?"*
- *"¿Cómo recibe data del POS actualmente?"*
- *"¿Qué le frustra de tu setup?"*
- *"¿Puedes invitarlo a la próxima conversación?"*

**Scenario C (True switching rare):**

- *"¿Por qué consideraste [foreign vendor]?"*
- *"¿Qué funciona bien? ¿Qué te frustra?"*
- *"¿Cómo manejas CFDI 4.0 con [foreign vendor]?"*
- *"¿Tu *contable* puede integrar con [foreign vendor]?"*

### 10.3 Disarming responses por objeción común

| Objeción | Disarming |
|---|---|
| *"¿Por qué pago dos sistemas?"* | *"Tu POS hace POS function. Zenet hace AI BoH. Diferentes layers. Pilot 30 días sin compromiso · si NO te suma valor cuantificable, no continúas."* |
| *"Mi sistema actual ya tiene inventarios"* | *"Sí — captura inventarios. Zenet predicts qué pasará con tu inventario + automate procurement + costing predictivo. Captura ≠ inteligencia."* |
| *"Mi *contable* no le tiene confianza a la nube"* | *"Entendible. ¿Podemos coordinar reunión con tu *contable*? Yo le explico setup data · seguridad · audit trail. Decisión after that."* |
| *"Está caro"* | *"$1,500 MXN/mes = menos que un staff/día. Pilot 30 días sin tarjeta. ROI typical: 5+ horas/semana saved + 2-5% food cost reduction = $5K-10K MXN/mes saved typically."* |
| *"No es buen momento"* | *"Entiendo · operación tiene momentos. ¿Qué tendría que cambiar para ser buen momento? ¿Cuándo cerramos siguiente trimestre?"* (commitment specific) |
| *"Déjame pensarlo"* | *"Por supuesto. ¿Qué necesitas pensar specifically? ¿Falta información que pueda darte?"* (probe para identify real concern) |
| *"Hablamos pronto"* | (Soft no detected.) *"Cuando tengas tiempo. ¿Te llamo el [specific date 7-10 días away]?"* (commitment specific) |
| *"Mi distribuidor SYCA/Entropía Digital me cuida bien"* | *"Eso es valioso · respect ese relationship. Zenet NO replaces SYCA · puede coexistir. ¿Quieres que coordinemos con tu distribuidor para que entienda?"* |

### 10.4 Closing language Mexican-aligned

**NEVER use:**
- *"¿Cuándo firmamos?"* (pressure · Hofstede UAI activates)
- *"Solo hasta el viernes"* (urgency · backfires)
- *"Es la mejor decisión que vas a hacer"* (hype · Mexican operator skepticism)

**DO use:**

| Stage | Closing language |
|---|---|
| **Demo close** | *"¿Qué te pareció? ¿Qué necesitas para sentirte tranquilo con esto?"* (probe genuine concerns) |
| **Pilot offer** | *"30 días pilot sin tarjeta · sin compromiso. Si te suma valor, lo mantienes. Si no, sin penalidad."* (Hofstede UAI reduction) |
| **Stakeholder coordination** | *"Antes de avanzar, ¿quién más necesita estar involucrado? Coordinemos meeting con [esposa / socio / *contable*]."* (multi-thread) |
| **Pilot conversion close** | *"Has visto los datos de 30 días. ¿Qué te dice tu *intuición*? ¿Tiene sentido continuar?"* (Mexican intuition language) |
| **Annual contract close** | *"Annual con 20% descuento Fase 0 design partner · cancelable anytime con 30 días aviso. Sin lock-in agresivo."* (commitment-light Mexican preference) |

### 10.5 Multi-thread checklist per deal

**Heredado doc 06 customer research §5.7 — multi-thread 68% vs single-thread 23% win rate**

| Stakeholder | Touchpoint by Stage |
|---|---|
| **Owner/dueño** | Stage B Discovery + Stage E Owner+Manager demo + Stage G Negotiation |
| **Operations Manager** | Stage C Demo Sesión 1 + Stage E + Stage H Onboarding |
| **Executive Chef** | Stage D Demo Sesión 2 (separate) — *"augmentar criterio chef"* framing |
| ***Contable* externo** | Stage F parallel from Stage C — integration + audit trail focus |
| **Spouse/socio family** | If family business — meeting at home OR informal conversation |
| **Successor/next generation** | If generational handover trigger — separate conversation re modern tools |

**Discovery question critical:**

> *"¿Quién más está involucrado en esta decisión?"*

**Failure mode:** Single-thread owner only = 23% win rate · multi-thread 3+ stakeholders = 68% win rate.

---

## 11. Watchlist + cadence

### 11.1 Sales rep monitoring cadence

| Monitoring activity | Cadence | Owner |
|---|---|---|
| **Trigger event monitoring** (LinkedIn · WhatsApp groups · CANIRAC) | Daily | Sales rep + founder |
| **Consultor partner intelligence** (Anna · Murguía · Algira · Entropía Digital) | Weekly | Founder + sales lead |
| **Vendor-friction tracking** (G2/Capterra negative reviews · pricing changes) | Weekly | Sales team |
| **Pipeline review (scenario distribution)** | Weekly | Sales lead |
| **Lost-deal post-mortems** | Continuous | Sales rep + founder |
| **Pilot success metrics review** | Day 7, 14, 30 milestones | CS team + sales rep |
| **Renewal cadence** | 30-60 days before renewal | CS + sales |

### 11.2 Scenario distribution health check

**Monthly review questions:**

| Question | Action si misalignment |
|---|---|
| ¿Qué % de pipeline está en cada scenario A/B/C/D? | Re-evaluate ICP focus si distribution skewed wrong way |
| ¿Cuál scenario tiene highest conversion rate? | Double-down on highest-conversion scenario for outreach |
| ¿Cuáles triggers activos están generando más leads? | Re-prioritize trigger monitoring channels |
| ¿Cuáles disarming scripts no están funcionando? | Update scripts based on lost-deal analysis |
| ¿Hay nuevos vendors o triggers no documentados? | Update doc 06 v0.X+1 |

### 11.3 Anti-pattern recurrence prevention

**Sales rep quarterly self-audit:**

- ¿He vendor-bashed alguna vez en último trimestre?
- ¿He usado pressure tactics urgency?
- ¿He cerrado single-stakeholder sin multi-thread?
- ¿He aplicado generic disarming sin scenario-specific?
- ¿He honrado pilot cancellations gracefully?

---

## 12. Fuentes + primary research path

### 12.1 Queries Perplexity Pro integradas (heredadas docs 01-05)

| Query | Cadence | Coverage doc 06 |
|---|---|---|
| Q1 Discovery competitive landscape | DeepSearch 2026-05-15 | Vendor base data · MX market context |
| Q2 Below-radar regional MX | DeepSearch 2026-05-15 | Distributor map + *contable* gating dynamics |
| Q3 3-dim threat assessment | DeepSearch 2026-05-16 | Per-vendor scripts data |
| Q4 Parrot Software targeted | DeepSearch 2026-05-16 | Parrot Pay closed ecosystem details |
| Q5 International watchlist radar | DeepSearch 2026-05-16 | Restoke + Loaded + Oracle Simphony for switching scripts |

### 12.2 Customer research docs heredados

- `02-customer-research/05-buying-process-y-criterios-de-decision.md` §10 — Mexican buying patterns
- `02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §2.4 + §3 + §4.7-4.10 + §5 + §6
- `02-customer-research/07-voice-of-customer.md` — verbatims V-001, V-005, V-007, V-008, V-010, V-011, V-013, V-016, V-019, V-021, V-022
- `02-customer-research/03-pains-y-workarounds.md` §5.10 — foundational research industry tech adoption lag
- `02-customer-research/04-customer-journey-detallado.md` §3.6.7 — Zenet Fase 1 manual POS upload

### 12.3 Industry + brand docs heredados

- `01-industry-and-market/06-estructura-y-ecosistema.md` §14 — consultor partner network (Anna · Murguía · Algira)
- `01-industry-and-market/08-entorno-regulatorio.md` — SAT fiscalización digital 2026
- `Branding/_context/01-brand-strategy/personalidad-y-arquetipo.md` — Sabio + Cuidador archetype
- `Branding/_context/04-voice-and-tone/voz-y-tono.md` — voice principles
- CLAUDE.md §4 strategic decisions log

### 12.4 Docs 01-05 cross-references load-bearing

- doc 01 §3.4-3.5 — threat ranking + framework 3-dim
- doc 01 §11 — distributor network map MX
- doc 02 — per-vendor deep dives
- doc 03 §14.4 — 3-narrative framework original
- doc 03 §7 — *contable* gating dynamics
- doc 04 §5 — Mexican market readiness matrix
- doc 04 §6 — POS integration mode matrix
- doc 05 §7 — consultor partner ecosystem
- doc 05 §8 — CS playbook patterns

### 12.5 Pilot strategy reference (external doc)

> **Pilot mechanics + duration + scope + pricing + success criteria + conversion → cf. doc externo pilot strategy** (path TBD when Alan creates)

Areas referenced en doc 06 que requieren doc externo:
- §3.2 adoption cost (pilot offer)
- §3.5 switching cost (parallel pilot strategy)
- §4 triggers (pilot post-trigger event)
- §7 scripts (pilot offers en cada script)
- §9.2 Hofstede UAI (pilot as friction-reducer)
- §10 sales playbook (pilot conversion mechanics)

### 12.6 Primary research path declarada

GTM details que requieren primary research (NOT Perplexity-closable):

- **Scenario frequency validation** — diseñar partner interviews TJ con *"¿qué sistema usas hoy?"*
- **Pricing realmente cobrado** (vs list) per vendor
- **Sales cycle length actual** per vendor
- ***Contable* recommendation patterns reales**
- **Trigger event frequencies** (segunda sucursal · staff turnover · etc.)
- **Mexican-cultural nuances per region** (TJ vs CDMX vs MTY vs Mérida)

**Primary research priority:**

1. **15-20 design partner interviews TJ** (heredado doc 03 §16.3) — validate scenario frequencies + trigger heat + script effectiveness
2. **Lost-deal post-mortems** — competitor framing + *contable* veto reasons
3. **Consultor partner outreach** (Entropía Digital · Anna · Murguía · Algira · SonoraTech) — distributor commission models + sales cycle reality
4. **Trade event observation** (CANIRAC TJ · ABASTUR · Expo Proveedores · InfoChannel)

### 12.7 Anti-patterns reference (refer cuando aparezcan en field)

- doc 06 customer research §4.10 MarketMan G2 case
- doc 06 customer research §5.6 Mexican-specific anti-patterns
- doc 06 customer research §5.2 NO confrontation rules
- doc 04 §5.5 MX readiness gap dynamics
- This doc §8 anti-patterns documented

---

*Last updated: 2026-05-18.*
*Next planned update: Q3 2026 (90 days) o trigger event (Fase 0 design partner data validates/invalidates frequencies + scripts effectiveness).*
