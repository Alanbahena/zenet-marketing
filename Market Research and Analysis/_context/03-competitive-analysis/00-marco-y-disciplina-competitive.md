---
name: Marco y disciplina de competitive analysis
description: Cómo se hace competitive intelligence en este workspace — refresh cadence, source hygiene, anti-falsificación rules, evidence tags taxonomy, classification lens (Direct / Indirect / Adjacent / Reference-only), _archive/ discipline, source strategy, navegación de la sección. Constitución del subfolder.
type: competitive-analysis
last_updated: 2026-05-15
status: active
version: 1.0
owner: Alan Bahena
---

# Marco y disciplina de competitive analysis

## Índice

1. [Propósito de la sección `03-competitive-analysis/`](#1-propósito-de-la-sección-03-competitive-analysis)
   - 1.1 Qué responde
   - 1.2 Diferencia frente a `01-industry-and-market/` y `02-customer-research/`
   - 1.3 Qué pregunta responde cada doc y quién la consume
   - 1.4 Qué NO es esta sección
2. [Por qué competitive intelligence tiene maturity model diferente](#2-por-qué-competitive-intelligence-tiene-maturity-model-diferente)
   - 2.1 Customer research es design-partner-driven; competitive analysis es refresh-driven
   - 2.2 Por qué no aplica el campo `research_stage`
   - 2.3 Estado de cobertura como concepto alternativo
3. **[Classification lens — Direct / Indirect / Adjacent / Reference-only](#3-classification-lens--direct--indirect--adjacent--reference-only)**
   - 3.1 Criterios operativos
   - 3.2 Reasoning required per classification
   - 3.3 Re-clasificación cuando el landscape cambia
4. **[Convenciones de marcado de evidencia](#4-convenciones-de-marcado-de-evidencia)**
   - 4.1 Etiquetas válidas
   - 4.2 Trazabilidad por player
   - 4.3 Distinción entre data publicly disclosed vs inferred vs gap declared
5. [Anti-falsificación rules — non-negotiable](#5-anti-falsificación-rules--non-negotiable)
   - 5.1 NO inventar pricing, features, fundraises, reviews
   - 5.2 NO componer pricing compuesto o feature compuesto
   - 5.3 Distinguir "active Mexico presence" vs "Spanish-translated website only"
   - 5.4 Distinguir vendor self-reported vs independently validated
   - 5.5 `[Status unclear]` para vendors dormant
6. [Source strategy](#6-source-strategy)
   - 6.1 Public sources (websites, reviews, trade press, community)
   - 6.2 Perplexity Pro queries — modo + cadencia
   - 6.3 Reuse desde docs previos
   - 6.4 Community listening — Reddit, LinkedIn, foros mexicanos
   - 6.5 Primary research opportunity declarada
7. [Refresh cadence + `_archive/` discipline](#7-refresh-cadence--_archive-discipline)
   - 7.1 Cadencia por doc
   - 7.2 Trigger events para refresh prioritario
   - 7.3 `_archive/` con date prefix obligatorio para snapshots de pricing/features
   - 7.4 Honest declaration de stale information
8. [Convenciones de redacción por player](#8-convenciones-de-redacción-por-player)
   - 8.1 Estructura recomendada de entry por competitor
   - 8.2 Source diversity obligatoria por finding
   - 8.3 Cómo manejar information thin sin inflar
9. [Cómo navegar la sección](#9-cómo-navegar-la-sección)
   - 9.1 Orden recomendado de lectura
   - 9.2 Acceso por pregunta
   - 9.3 Snapshots de versiones anteriores
10. [Fuentes](#10-fuentes)

---

## 1. Propósito de la sección `03-competitive-analysis/`

### 1.1 Qué responde

Esta sección responde una sola pregunta: **¿quién más juega en el espacio de back-of-house operations SaaS para restaurantes, dónde, cómo, y qué significa para Zenet?**

Lo consume cualquier contribuidor que necesite:
- Posicionar mensaje contra un competitor específico en sales o marketing.
- Diseñar reframe que respete el frame del operador y desactive comparación natural.
- Tomar decisión de feature priority informada por gaps competitivos reales.
- Evaluar vendor risk + watchlist signals (qué se mueve en el landscape).
- Sales enablement — entender qué pricing/feature/positioning enfrenta el operador antes de Zenet.

### 1.2 Diferencia frente a `01-industry-and-market/` y `02-customer-research/`

| Subfolder | Lens | Qué produce |
|---|---|---|
| `01-industry-and-market/` | Mercado, scope, sizing, segmentación, ICP, ecosistema, geografía, regulatorio | El **mapa del mercado** — qué territorio juega Zenet |
| `02-customer-research/` | Cliente: JTBD, dolores, journey, buying, objeciones, voice-of-customer | El **mapa del cliente** — qué quiere, qué le duele, cómo decide |
| **`03-competitive-analysis/`** | **Competidores: quién más, qué hacen, cómo se diferencian, dónde Zenet defiende** | El **mapa del adversario** — quién más juega y dónde está espacio defendible |

Los tres subfolders se cruzan pero **no se duplican**. Cuando emerge contenido en zona ambigua:
- Si la pregunta es *"¿el mercado tiene este actor?"* → `01-industry`.
- Si es *"¿qué dolor tiene el cliente que el actor X resuelve mal?"* → `02-customer`.
- Si es *"¿qué hace el actor X, cómo, dónde, contra quién?"* → `03-competitive`.

### 1.3 Qué pregunta responde cada doc y quién la consume

| Doc | Pregunta canónica | Consumidor principal |
|---|---|---|
| `00-marco-y-disciplina-competitive.md` | ¿Cómo hacemos CI sin inventar y sin quedar stale? | Cualquier contribuidor antes de leer otros docs de la sección |
| `01-mapa-competitivo-y-categorias.md` | ¿Cuál es la taxonomía del competitive space y dónde encaja cada vendor? | Cualquier contribuidor que necesita orientación rápida del landscape |
| `02-competidores-directos-deep-dive.md` | ¿Quiénes son los direct competitors y cómo juegan? | Sales, product, founder strategy |
| `03-competidores-indirectos-y-adyacentes.md` | ¿Qué incumbents, adyacentes y reference points informan el playbook? | Sales motion, switching playbook design |
| `04-feature-y-pricing-comparative.md` | ¿Cómo se compara Zenet feature-by-feature + pricing-by-pricing contra el campo? | Product, pricing, sales enablement |
| `05-gtm-y-positioning-comparado.md` | ¿Cómo va al mercado cada competitor y dónde Zenet tiene espacio? | Marketing, founder strategy, channel design |
| `06-switching-dynamics-y-incumbente.md` | ¿Cómo movemos clientes del incumbente al sistema Zenet? | Sales motion, CS playbook |
| `07-diferenciacion-zenet-y-defensibility.md` | ¿Qué hace defendible la posición Zenet y qué nos puede atacar? | Founder strategy, board narrative, investor narrative |

### 1.4 Qué NO es esta sección

- **NO es propaganda interna.** No celebramos diferenciadores que no resisten audit competitivo. Si un competitor hace algo mejor, lo decimos honestamente y declaramos cómo Zenet responde.
- **NO es watchtower exhaustivo.** No todos los vendors merecen deep dive — el classification lens (Direct/Indirect/Adjacent/Reference-only) regula profundidad por player.
- **NO es feature checklist competition.** Vendor con más checkmarks NO necesariamente es better — la matrix existe para mostrar relaciones, no declarar ganadores.
- **NO es predicción de mercado.** No declaramos "ganador" antes de que el mercado lo declare. Vendor risk + watchlist signals son framing honesto de incertidumbre.

---

## 2. Por qué competitive intelligence tiene maturity model diferente

### 2.1 Customer research es design-partner-driven; competitive analysis es refresh-driven

`02-customer-research/` usa un 5-stage maturity model (`discovery-pre-PMF` → `design-partner-validation` → `early-customer-evidence` → `PMF-and-segmentation` → `scale-research`). La progresión es **driven por adquisición de design partners + clientes** — la evidencia mejora cuando llegan operadores reales al producto.

`03-competitive-analysis/` opera diferente. La evidencia NO mejora con el tiempo automáticamente — **decae**. Pricing cambia. Features se agregan o eliminan. Vendors hacen pivot. Algunos cierran. Fundraises o exits cambian el balance de poder.

El maturity model relevante aquí NO es "qué tan validado está", sino **"qué tan fresco está el snapshot"**.

### 2.2 Por qué no aplica el campo `research_stage`

Docs de esta sección **NO usan `research_stage`** en frontmatter. En su lugar usan el campo estándar:

```yaml
status: active | draft | deprecated
version: X.Y
last_updated: YYYY-MM-DD
```

Y dependen rigorosamente de `last_updated` + `_archive/` discipline para señalar staleness.

### 2.3 Estado de cobertura como concepto alternativo

Cada doc declara explicitly su **estado de cobertura** al inicio:

| Estado | Significado |
|---|---|
| **Snapshot fresco** | Última actualización <60 días. Citable directly. |
| **Snapshot vigente** | 60-180 días. Citable con caveat de fecha. |
| **Snapshot stale** | >180 días. Treat como contexto histórico; verify antes de citar. |
| **Trigger pendiente** | Se sabe que cambió algo material pero el doc no refleja todavía. Verify before citing. |

`last_updated` en frontmatter es authoritative. Cuando se cita un finding competitivo en otros docs del workspace, el citador debe verificar la freshness antes de actuar.

---

## 3. Classification lens — Direct / Indirect / Adjacent / Reference-only

### 3.1 Criterios operativos

Todo vendor surfaced en esta sección se clasifica explicitly con uno de cuatro labels. Criteria con respecto a Zenet, donde Zenet = **AI-native back-of-house operations layer targeting Mexican independent restaurants 2-5 locations, NOT POS, NOT inventory standalone**:

| Label | Criterio | Ejemplo (heredado pre-discovery) |
|---|---|---|
| **Direct** | AI-native + BoH-first + Mexican/LATAM active + ICP coincidente (independents 1-10 locations) | TBD post-Query 1 |
| **Indirect** | POS+inventory or restaurant ops platform donde BoH overlap es significativo; compite por mismo budget + decision-maker attention | PoloTab, Parrot, Fudo, SoftRestaurant, Aspel, Bistrosoft |
| **Adjacent** | Vertical tool resolviendo solo parte del problema BoH (procurement-only, KDS-only, costing-only, recipe management standalone) | Choco, Symbiotic, recipe management standalones |
| **Reference-only** | NOT active en Mexico/LATAM, pero informa playbook Zenet (US/Canada-dominant o regiones distantes) | MarginEdge, MarketMan, Toast BoH, Restaurant365, Crunchtime |

### 3.2 Reasoning required per classification

**Toda classification requiere reasoning de una sentencia.** No se acepta "es Direct porque sí".

Ejemplo de formato:

> **Vendor X — Direct.** AI-native (built post-2022 on LLM foundation), pure BoH (no POS, no FoH), confirmed active en Mexico (CDMX + Monterrey customer logos), targets independents 2-8 locations. ICP coincidente con Zenet beachhead.

Si el reasoning NO se sostiene, la classification se cambia. **Confirmation bias es el riesgo #1** — asumir que un vendor es Direct porque lo conocemos, cuando en realidad NO es active en Mexico o targets diferente ICP.

### 3.3 Re-clasificación cuando el landscape cambia

Triggers para re-clasificar:
- Vendor anuncia entrada al mercado mexicano (Spanish-translated website → active sales presence) → Reference-only puede subir a Indirect o Direct.
- Vendor levanta fundraise y pivota a AI-native → Indirect puede subir a Direct.
- Vendor cierra operación Mexico → Direct/Indirect baja a Reference-only o se marca deprecated.
- Vendor expande feature set materially hacia BoH → Adjacent puede subir a Indirect.

Cada re-clasificación se registra en `_changelog.md` del subfolder con fecha + trigger event + reasoning.

---

## 4. Convenciones de marcado de evidencia

### 4.1 Etiquetas válidas

Para findings cuantitativos o named claims:

| Etiqueta | Cuándo usar | Ejemplo |
|---|---|---|
| `[Public website]` | Vendor's own website, pricing page, product page | `[Public website / PoloTab.com / 2026-05-15]` |
| `[Vendor reported]` | Press release, vendor blog, investor announcement | `[Vendor reported / Series B / Crunchbase 2025-09-12]` |
| `[Trade press]` | InfoChannel, El Imparcial, El Financiero, etc. | `[Trade press / InfoChannel / 2026-03-08]` |
| `[Review corpus]` | G2, Capterra, GetApp aggregated | `[Review corpus / G2 PoloTab n=47 / 2026-05-10]` |
| `[Community]` | Reddit, LinkedIn comments, foros mexicanos | `[Community / r/lacamiseta / 2024-08-15]` |
| `[Perplexity QN]` | Output de Query N (DeepSearch o Search Pro) | `[Perplexity Q1 / 2026-05-15]` |
| `[Inferred]` | Conclusión propia desde múltiples sources — NOT directly stated por la fuente | `[Inferred from public website + LinkedIn job postings]` |
| `[SIN FUENTE PUBLICADA]` | Gap declarado — no encontramos fuente pero el dato existe | `[SIN FUENTE PUBLICADA — verificar con Murguía]` |
| `[Status unclear]` | Vendor parece dormant o estado actual no verificable | `[Status unclear / website live pero no customer logos updated desde 2023]` |
| `[Classification gap]` | Insufficient info para clasificar Direct/Indirect/etc. | `[Classification gap — pending Spanish presence verification]` |

### 4.2 Trazabilidad por player

Cada player surfaced tiene su propio bloque de citation footer:

```
**Sources consulted (Vendor X):**
- [Public website / vendor-x.com / 2026-05-15]
- [Review corpus / G2 Vendor X n=23 / 2026-05-10]
- [Trade press / TechCrunch / 2025-11-02]
- [Perplexity Q1 / 2026-05-15]
- [Community / r/restaurantowners thread / 2025-08-20]
```

Cualquier persona que cite un finding sobre Vendor X **debe poder trazar la cadena de evidence al footer del vendor**. Si no puede, el finding está stale o mal-sourced.

### 4.3 Distinción entre data publicly disclosed vs inferred vs gap declared

Tres categorías deben mantenerse separadas:

- **Publicly disclosed** — vendor mismo o trade press confirmó (pricing en website, fundraise en press release).
- **Inferred** — combinamos múltiples sources para llegar a conclusión (vendor no publica pricing, pero foros reportan $X y product hunt comments confirman ~$X → inferimos pricing range).
- **Gap declared** — sabemos que no sabemos. NO inventamos.

Mezclar las tres en un mismo finding pierde la trazabilidad. Mejor:

> **Pricing:** `[Public website]` Plan Pro $1,490 MXN/mes/sucursal. `[Inferred from Reddit + LinkedIn comments]` enterprise pricing custom, estimated range $3,000-5,000 MXN/sucursal/mes. `[SIN FUENTE PUBLICADA]` discount practices para multi-location accounts.

---

## 5. Anti-falsificación rules — non-negotiable

> Estas reglas son structural priority. Violarlas degrada esta sección de research artifact a marketing fiction.

### 5.1 NO inventar pricing, features, fundraises, reviews

Si Vendor X publica pricing $1,490, citamos $1,490 con source. Si no publica, citamos *"pricing not publicly disclosed"* + cómo cerrar el gap. **No componemos pricing "que suena razonable"**.

Mismo principle aplica a:
- Feature lists (NO listar features que no están confirmadas en website, demo, o review)
- Fundraise amounts (NO inventar cifras — usar Crunchbase o press release verbatim)
- Customer counts (NO inflar — vendor self-reported con source attribution)
- Review scores (NO promediar mal — citar G2/Capterra exact con n + fecha)

### 5.2 NO componer pricing compuesto o feature compuesto

No combinar partial pricing de dos vendors en un "average market price". No agregar features de dos planes diferentes en un "composite feature set". **Cada finding es atomic + atribuible a un vendor + a un plan específico**.

### 5.3 Distinguir "active Mexico presence" vs "Spanish-translated website only"

Vendor con website en español NO es automáticamente active en Mexico. **Active = customer logos en Mexico + sales team Mexico-based o partner channel local + soporte en español operacional, NO solo i18n**.

Cuando es ambiguo, marcamos:
- `[Active Mexico — confirmed customer logos]`
- `[Spanish-translated only — no Mexico-specific customer evidence]`
- `[Active Mexico via partner channel — vendor X via consultor Y]`

### 5.4 Distinguir vendor self-reported vs independently validated

Vendor self-reports:
- *"95% customer satisfaction"* en website
- *"Used by 1,500+ restaurants"* en homepage
- *"30% reduction in food cost"* en case study

**NO son validated** salvo que tengamos source third-party. Citamos con `[Vendor self-reported]` tag explicit + NOT como hecho establecido. Si el claim es controversial (ej: *"AI-powered"* en producto que solo tiene rule-based logic), flaggear como `[Vendor self-reported — claim disputed in reviews]`.

### 5.5 `[Status unclear]` para vendors dormant

Vendor que aparece en trade press 2023 pero website no se actualiza, customer logos están freezed en 2022, LinkedIn empleados muestran exodus → **flag `[Status unclear]`** en clasificación. NOT classify Direct/Indirect hasta verificar status actual.

---

## 6. Source strategy

### 6.1 Public sources

| Fuente | Qué provee | Frecuencia |
|---|---|---|
| **Vendor's own website** | Pricing tier, feature list, customer logos, recent announcements | Cada vez que se actualiza un doc |
| **G2 / Capterra / GetApp** | Review corpus con n, score, recent reviews, sentiment, feature ratings | Cada 60-90 días |
| **Crunchbase / AngelList** | Fundraise history, board, key people, exits | Cuando hay trigger event |
| **LinkedIn vendor company page** | Headcount evolution, key hires, geographic expansion | Cada 90 días |
| **LinkedIn employee profiles** | Founding team, technical depth, prior experience | Solo cuando deep-diving un Direct competitor |
| **Trade press MX** | InfoChannel, El Imparcial, El Financiero, Expansión, Forbes MX, ITSitio | Continuo (alertas + search) |
| **Trade press US/global** | TechCrunch, Restaurant Business, Nation's Restaurant News, Forbes | Solo para reference-only competitors |
| **Product Hunt + Hacker News** | Launch signals, community sentiment, technical assessment | Alertas |
| **YouTube vendor channels** | Demo videos, feature walkthroughs, customer testimonials | Cuando hay claim que verificar |

### 6.2 Perplexity Pro queries — modo + cadencia

`[Heredado de doc 00 customer-research §6.2]` + tunings competitive-specific:

| Tipo de query | Modo | Cadencia |
|---|---|---|
| Discovery competitive landscape | **DeepSearch** — source diversity + qualitative breadth | Una vez por subfolder + refresh cada 6 meses |
| Feature/pricing deep dive por vendor | **Search Pro** — quantitative + benchmark-style | Una vez por Direct competitor + refresh cada 3 meses |
| GTM + messaging analysis | **DeepSearch** | Una vez por Direct + cada 4-6 meses |
| Switching dynamics + customer review analysis | **DeepSearch** | Una vez para subfolder + refresh cuando hay trigger |
| Fundraise + market signals tracking | **Search Pro** | Mensual (light query, just signals) |

Queries se guardan completos en `_archive/queries/` con fecha + modo + output file path.

### 6.3 Reuse desde docs previos

Inventario inicial heredado antes de Query 1 discovery:

| Heredado | Fuente |
|---|---|
| Tier 1 saturado: PoloTab, Parrot, Fudo | `01-industry/02-definicion-y-alcance.md` §4.4 |
| Pricing landscape MX: Bistrosoft Pro $1,599, PoloTab $1,490, Fudo Pro $1,050 | `02-customer-research/05-buying-process` §5.2 |
| SoftRestaurant + Aspel como incumbents MX | `02-customer-research/06-objeciones` §3.6 + §4.10 |
| MarketMan G2 anti-pattern case study | `02-customer-research/06-objeciones` §4.10 |
| MarginEdge data maintenance failure pattern | `02-customer-research/06-objeciones` §4.6 |
| Verbatims V-006 (MarketMan), V-012 (SoftRestaurant), V-014 (MarginEdge) | `02-customer-research/07-VoC` |
| Consultor partner como extensión Zenet (replica al revés modelo SoftRestaurant + SYCA TJ) | `01-industry/06-estructura-y-ecosistema.md` §14 |
| "Espacio AI-native + BoH-first es defendible mientras Zenet sea primero y más profundo" | CLAUDE.md §4 |

### 6.4 Community listening

| Canal | Qué buscar |
|---|---|
| **Reddit** — r/restaurantowners, r/Restaurant_Managers, r/AskMexico, r/mexico, r/lacamiseta | Operator language sobre vendor X, switching stories, real-world complaints |
| **LinkedIn** — comments en vendor posts, employee reviews, industry thought leaders | Industry positioning signals, customer testimonials orgánicos |
| **Facebook** grupos restauranteros MX | Solo cuando ethics permits + member access disponible |
| **WhatsApp** grupos sectoriales | NO en discovery — solo via referrals personales y con permission |
| **Trade events** (CANIRAC, ABASTUR, expo restaurante) | Booth presence + messaging hero — capturable via fotos + videos publicly shared |

### 6.5 Primary research opportunity declarada

`[Heredado del pattern customer research]`:

Las primeras 15-20 design partner interviews TJ/CDMX van a producir **información competitive que ningún competitor publicly indexed tiene**:
- Qué competitor usa el prospect hoy (named incumbent)
- Por qué considera cambiar (trigger events reales)
- Qué le gusta + le frusta del incumbent (verbatim language)
- Qué precio le cobra el incumbent realmente (pricing landscape verified)
- Qué *contable* externo del prospect usa o recomienda

Esta información es **activo competitive del workspace** — declared, NOT auto-captured. Pertenece a `02-customer-research/` (verbatims, dolores) pero **alimenta directamente** docs 02-03-04-06 de esta sección.

---

## 7. Refresh cadence + `_archive/` discipline

### 7.1 Cadencia por doc

| Doc | Refresh esperado | Trigger event que acelera |
|---|---|---|
| `00-marco-y-disciplina-competitive.md` | Anual (constitución del subfolder) | Cambio mayor en source strategy o framework |
| `01-mapa-competitivo-y-categorias.md` | Cada 6 meses | Nuevo Direct competitor surfaced o exit relevante |
| `02-competidores-directos-deep-dive.md` | Cada 4-6 meses | Fundraise, pivot, expansion, exit de algún Direct |
| `03-competidores-indirectos-y-adyacentes.md` | Cada 6 meses | Cambio material en pricing o feature de incumbent |
| `04-feature-y-pricing-comparative.md` | **Cada 3 meses** — el más volatile | Cualquier pricing change reported |
| `05-gtm-y-positioning-comparado.md` | Cada 6 meses | Cambio mayor de messaging hero o channel strategy |
| `06-switching-dynamics-y-incumbente.md` | Anual + cuando customer feedback agrega trigger nuevo | Switch story documented en design partner interview |
| `07-diferenciacion-zenet-y-defensibility.md` | Cada 6 meses | Cambio de strategy Zenet o entrada de nuevo Direct |

### 7.2 Trigger events para refresh prioritario

- **Fundraise mayor** (Series A+, >$10M) en Direct o Indirect competitor → refresh dentro de 30 días.
- **Vendor pivot** (cambio de positioning o ICP) → refresh dentro de 30 días.
- **Pricing change** detectado en cualquier Direct → snapshot a `_archive/` + actualizar `04-feature-y-pricing-comparative.md` dentro de 60 días.
- **Mexican market exit o entry** → re-clasificación inmediata.
- **Customer feedback de design partner que invalida una afirmación competitiva** → review dentro de 14 días.

### 7.3 `_archive/` con date prefix obligatorio

Para snapshots de pricing + features (los datos más volatile), antes de overwrite **se copia el doc actual a `_archive/` con date prefix**:

```
_archive/
├── 2026-05-15_04-feature-y-pricing-comparative.md
├── 2026-08-15_04-feature-y-pricing-comparative.md
├── 2026-11-15_04-feature-y-pricing-comparative.md
```

Permite trazar evolución del pricing de cada vendor over time → input para narrative de mercado en `01-industry/03-tamano-de-mercado.md` future updates.

### 7.4 Honest declaration de stale information

Si un doc no se ha actualizado en >180 días y se va a citar en otra parte del workspace, **el citador agrega caveat**:

> Pricing de PoloTab Plan Pro: $1,490 MXN/mes/sucursal `[Public website / 2025-11-15 — stale, verificar pre-cite]`.

Mejor citar honestamente que pretender freshness que no tenemos.

---

## 8. Convenciones de redacción por player

### 8.1 Estructura recomendada de entry por competitor

Para docs 02 + 03, cada vendor surfaced sigue esta estructura:

```markdown
### Vendor X

**Classification:** Direct / Indirect / Adjacent / Reference-only — [one-sentence reasoning]
**Country of origin:** [País]
**Active Mexico presence:** Yes (customer logos + sales team) / Spanish-translated only / Via partner channel / No

#### Positioning (cómo se posiciona el vendor a sí mismo)
[Quote del hero del website + paraphrase del positioning frame]

#### Target customer
[ICP del vendor — vs Zenet ICP overlap]

#### Feature set (BoH-relevant)
[Lista de features confirmed con source — inventario, costeo, recetario, compras, mermas, analytics, AI/automation]

#### Pricing
[Tier structure + pricing con currency + per-unit basis — citar source con fecha]

#### GTM motion
[Channel — direct sales / partner / self-serve / freemium. Sales cycle observado. Founder visibility.]

#### Customer reviews (G2 / Capterra / forum)
[Sentiment summary + n + fecha + top complaints + top praise]

#### Recent signals
[Fundraise, hires, customer wins, exits, controversies — con fecha]

#### Strategic implications para Zenet
[1-3 bullet points: dónde Zenet defiende, dónde Vendor X es threat, qué watchlist signal triggers re-evaluation]

**Sources consulted (Vendor X):**
- [tags + fechas]
```

### 8.2 Source diversity obligatoria por finding

Cada finding sobre un vendor debe estar respaldado por **al menos 2 sources independent** cuando es citable + actionable.

Excepciones aceptables (single source):
- Pricing publicado en vendor website (vendor mismo es source autoritativo).
- Fundraise announcement (Crunchbase o press release).
- Customer logo en vendor website (vendor mismo lo declara — pero validation third-party si es claim importante).

### 8.3 Cómo manejar information thin sin inflar

Si un vendor tiene info thin (poco surfaced en discovery, website parco, no reviews), **NO inflamos el entry**:

- Entry de 3 líneas + classification + reasoning + gap declared es mejor que entry de 30 líneas con padding.
- Si NO podemos clasificar con confidence → `[Classification gap]` + roadmap to close.
- Si el vendor NO es relevante para Zenet → mention en `01-mapa-competitivo-y-categorias.md` Tier 4 + skip deep dive.

---

## 9. Cómo navegar la sección

### 9.1 Orden recomendado de lectura

| Lector | Orden |
|---|---|
| **Contribuidor nuevo en general** | 00 → 01 → 07 (mapa + defensibility para context) → docs 02-06 según necesidad |
| **Sales preparing para deal** | 02 (directos) + 03 (indirect del incumbent que tiene el prospect) + 06 (switching playbook) |
| **Product priorizando roadmap** | 04 (feature gap analysis) + 07 (defensibility) |
| **Founder preparing investor narrative** | 01 + 07 + signals de 02 |
| **Marketing diseñando messaging** | 05 (positioning comparado) + 07 + cross-ref con `Branding/04-voice-and-tone/` |

### 9.2 Acceso por pregunta

| Pregunta | Doc primario |
|---|---|
| ¿Quién es el competidor #1 directo de Zenet hoy? | 02 |
| ¿Qué pricing cobra Vendor X? | 04 |
| ¿Cómo desplazo a SoftRestaurant en un deal? | 06 |
| ¿Qué hace Vendor Y mejor que Zenet? | 02 (si Direct) o 03 (si Indirect) — sección Strategic implications |
| ¿Quién acaba de levantar Serie A en restaurant SaaS? | 02 signals o `_archive/signals-log.md` (TBD) |
| ¿Qué hace defendible Zenet? | 07 |
| ¿Cómo posicionamos vs un incumbent que el prospect ya usa? | 06 + cross-ref `02-customer-research/06-objeciones` §3.6 |

### 9.3 Snapshots de versiones anteriores

`_archive/` mantiene snapshots por date prefix. Para investigar **cómo cambió** un competitor over time, listar `_archive/` chronologically + diff entre versiones.

---

## 10. Fuentes

### Documentos del workspace referenciados (heredados pre-Query 1)

- `CLAUDE.md` §4 — Decisions log, sub-sección "Competitivo"
- `Market Research and Analysis/_context/01-industry-and-market/02-definicion-y-alcance.md` §4.4
- `Market Research and Analysis/_context/01-industry-and-market/06-estructura-y-ecosistema.md` §14
- `Market Research and Analysis/_context/02-customer-research/05-buying-process-y-criterios-de-decision.md` §5.2
- `Market Research and Analysis/_context/02-customer-research/06-objeciones-y-fricciones-de-adopcion.md` §2.4.3, §3.6, §4.6, §4.10
- `Market Research and Analysis/_context/02-customer-research/07-voice-of-customer.md` V-006, V-012, V-014, V-001
- `Branding/_context/01-brand-strategy/posicionamiento.md` (mapa competitivo brand-level)

### Convenciones heredadas

- Anti-falsificación rules (cf. `02-customer-research/07-voice-of-customer.md` §2.4) — extended for vendor data.
- Source labeling discipline (cf. `02-customer-research/00-etapas-y-marco-de-investigacion.md` §6) — extended con tags vendor-specific.
- Working principles workspace-wide (cf. `CLAUDE.md` §7).

### Queries Perplexity Pro planeadas

| Query | Modo | Estado | Output path |
|---|---|---|---|
| Q1 Discovery competitive landscape | DeepSearch | 🚧 Dispatched 2026-05-15 | `_archive/queries/` (path pending) |
| Q2 Feature + pricing deep dive (Direct competitors) | Search Pro | Pending Q1 output | TBD |
| Q3 GTM + messaging analysis (Direct competitors) | DeepSearch | Pending Q1 output | TBD |
| Q4 Switching dynamics + customer review analysis | DeepSearch | Pending | TBD |
| Q5 Fundraise + market signals tracker (light, recurrent) | Search Pro | Pending | TBD |

### Activo declarado para v1.0+ del subfolder

- 15-20 design partner interviews TJ/CDMX (vía `02-customer-research/` discovery) producirán competitive information primary que ningún competitor publicly indexed tiene.
- Sales call recordings: capturar incumbent named + switch trigger reasoning.
- Lost-deal post-mortems: incumbent retention reasons + competitor framing.
- Trade event observation (CANIRAC, ABASTUR) — booth presence + messaging hero.
