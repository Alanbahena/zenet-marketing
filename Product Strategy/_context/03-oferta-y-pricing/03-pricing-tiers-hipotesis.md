---
name: Pricing tiers hipótesis
description: Documenta la estructura 4 tiers Phase 1 de Zenet (Esencial · Pro · Multi-Sitio · Enterprise) con pricing hipótesis · cap users · internal caps invisibles · WhatsApp service level diferenciado (Esencial ventana 10 hrs/día customizable · Pro/Multi-Sitio 24/7 · Enterprise 24/7 + SLA) · AI agents Phase 1 full cross-tier (NO gating sustractivo) · tier differentiation aditiva NO sustractiva (cf. doc 00 §6.7) · competitive anchoring DUAL framing (wallet calibration vs Bistrosoft/PoloTab/Fudo + category claim vs vertical AI premium global) · 3 escenarios pricing canónicos (downside $1,200 · anchor $1,500/$1,999/$1,799 · upside $1,800-2,000) · 12+ edge cases (contable · founder dual role · user dormant · trial · multi-sucursal cancellation · window split · upgrade paths automáticos · outlier abuse) · add-ons roadmap Phase 1.5+ (Heavy Usage Pack ~$600-800 · Specialty Agent Pack ~$400/agente) · 8 decisiones abiertas con triggers de cierre · validation con design partners Months 1-3 + PSM. Doc más denso del subfolder porque concentra toda la complejidad tier structure + sensitivity + edge cases.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-05-30
status: active
version: 0.1
owner: Alan Bahena
---

# Pricing tiers hipótesis

> Documenta la estructura 4 tiers Phase 1 de Zenet con pricing hipótesis, cap users, internal caps, WhatsApp service level diferenciado, edge cases, upgrade paths, add-ons roadmap, y validation triggers. Doc más denso del subfolder · concentra toda la complejidad tier structure + 3 escenarios sensitivity + edge cases operacionales.
>
> Hereda 8 decisiones canónicas del marco doc 00 + estructura comercial base de doc 01 + descuento aplicable Socios Fundadores de doc 02. Define pricing standard sobre el cual operan los demás docs del subfolder.

---

## Índice

1. Propósito del doc · scope · boundaries
2. Frame · por qué 4 tiers (no 3 · no 5)
3. Estructura tier completa · matrix differentiation + deep dives
4. Pricing por tier · 3 escenarios canónicos
5. Competitive anchoring DUAL framing aplicado
6. Cap users + internal caps por tier
7. Tier differentiation aditiva NO sustractiva
8. Tier upgrade paths automáticos + edge cases
9. Add-ons roadmap Phase 1.5+
10. Validation triggers + decisiones abiertas
11. Anti-patterns + estado + version triggers

---

## 1. Propósito del doc · scope · boundaries

### 1.1 Qué responde este doc

Cinco preguntas pricing-specific:

1. **¿Cuántos tiers tiene Zenet Phase 1 y por qué?** — estructura 4 tiers defendida
2. **¿Cuál es el pricing hipótesis exacto por tier?** — números defendidos con value-based + competitive anchoring
3. **¿Cómo se diferencian los tiers?** — matrix completa (sucursales · users · WhatsApp service level · agents · cross-sucursal · SLA · internal caps)
4. **¿Qué edge cases existen?** — contable · founder dual role · user dormant · trial · multi-sucursal · upgrade paths · window-related
5. **¿Cuándo se valida y cómo se actualiza?** — triggers de cierre por decisión + PSM plan + behavioral data Months 1-3

### 1.2 Qué NO responde este doc

| Tipo | Dónde vive |
|---|---|
| Modelo comercial base (subscription · 90-day · annual prepay · cancellation · refund) | `01-modelo-comercial-y-terminos.md` v0.1 |
| Programa Socio Fundador deal terms (descuento · lock-in · reciprocidad · 10-step flow) | `02-programa-socio-fundador-offer.md` v0.1 |
| Viabilidad económica + COGS analysis (cost breakdown · margin floor · break-even · sensitivity tables) | `04-viabilidad-economica-y-cogs.md` (pending) |
| WTP validation methodology (Van Westendorp PSM · willingness ladders · execution plan) | `05-wtp-validation-plan.md` (pending) |
| Add-ons detailed specs (Heavy Usage Pack · Specialty Agent Pack feature scope) | `02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 |
| Capital requirements + funding roadmap | `05-capital-y-finanzas/00-funding-roadmap-y-milestones.md` (pending) |

### 1.3 Hereda de docs upstream

| Doc | Qué hereda |
|---|---|
| `00-marco-de-oferta-y-pricing.md` v1.0 §4 #4 | Estructura 4 tiers canonical · WhatsApp diferenciado por service level · AI agents Phase 1 full cross-tier |
| `00-marco-de-oferta-y-pricing.md` v1.0 §4 #6 | Internal capacity caps tracked religiosamente · NO visible al cliente |
| `00-marco-de-oferta-y-pricing.md` v1.0 §4 #7 | Add-ons roadmap Phase 1.5+ · NO Phase 1 |
| `00-marco-de-oferta-y-pricing.md` v1.0 §6.4 | Tres escenarios pricing canónicos |
| `00-marco-de-oferta-y-pricing.md` v1.0 §6.5 | Internal vs visible caps principle |
| `00-marco-de-oferta-y-pricing.md` v1.0 §6.7 | Tier differentiation ADITIVA NO sustractiva |
| `00-marco-de-oferta-y-pricing.md` v1.0 §2.5 | Competitive anchoring DUAL framing |
| `02-features-y-scope/00-fase-1-mvp-scope.md` v0.1 | TIER 1 + TIER 2A scope Phase 1 (E1-E6 + H1-H2) |

---

## 2. Frame · por qué 4 tiers (no 3 · no 5)

### 2.1 Standard B2B SaaS pattern

3 tiers commerciales + 1 Enterprise = pattern industry standard (Stripe · Notion · Salesforce · HubSpot · Linear).

| # | Tier | Pattern role |
|---|---|---|
| 1 | Esencial | Entry · early-stage · price-sensitive |
| 2 | Pro | Standard · most customers · "sweet spot" |
| 3 | Multi-Sitio | Power user · scaling operation · **beachhead Sub-segmento B** |
| 4 | Enterprise | Custom · high-value · negotiated |

### 2.2 Mapeo tier ↔ ICP sub-segment

| Tier | Target ICP | Razón mapeo |
|---|---|---|
| Esencial | Sub-segmento A (1 sucursal early-stage) | Entry-level operator probando agency-as-SaaS |
| Pro | Sub-segmento A heavy-user (1 sucursal · power user · prepara expansión) | 24/7 needed · validation pre-Multi-Sitio |
| Multi-Sitio | **Sub-segmento B beachhead** (2-3 sucursales · BoH chaos cliff) | ICP arquetípico Carlos Mendoza · scope nativo `[Anclado en research]` (`01-industry-and-market/04-segmentacion.md` v1.0) |
| Enterprise | Sub-segmento C (cadenas regionales · 6+ sucursales) | Phase 2+ · custom · NO list price |

### 2.3 Por qué NO 3 tiers

| Si solo 3 tiers... | Problema |
|---|---|
| (Esencial + Pro + Multi-Sitio) sin Enterprise | Sub-segmento C inbound futuro sin path · forced to "Multi-Sitio" inadequate · pierde optionality strategic |
| (Esencial + Multi-Sitio + Enterprise) sin Pro | Sub-segmento A heavy-user fuerza upgrade prematuro a Multi-Sitio · friction · O cliente queda en Esencial sin 24/7 que necesita |

### 2.4 Por qué NO 5+ tiers

| Si 5+ tiers... | Problema |
|---|---|
| Sub-tiers dentro de Pro (Básico/Pro/Pro+) | Decision fatigue · sales complexity · MX SMB resistance |
| Tier extra entre Multi-Sitio y Enterprise | Premature optimization · sin demand observada · scope creep |

### 2.5 4 tiers = sweet spot

3 commercial + 1 Enterprise · matches B2B SaaS pattern · mapea cleanly a ICP segments · escalable Phase 2+.

---

## 3. Estructura tier completa · matrix differentiation + deep dives

### 3.1 Matrix master cross-tier

| Componente | Esencial | Pro | Multi-Sitio | Enterprise |
|---|---|---|---|---|
| **Pricing model** | Flat per-sucursal | Flat per-sucursal | Per-sucursal · mínimo 2 | Custom · contact sales |
| **Pricing anchor hipótesis** | $1,500/sucursal/mes | $1,999/sucursal/mes | $1,799/sucursal/mes | Negotiated |
| **Sucursales** | 1 | 1 | 2-5 | 6+ o custom |
| **Active users/sucursal** | 5 | 8 | 10 | 15+ negotiated |
| **WhatsApp service level** | **Ventana 10 hrs/día customizable** · response <10 min · alerts urgentes push fuera ventana | **24/7 instant** conversational | **24/7 instant + cross-sucursal** | **24/7 + dedicated CS + Contract SLA** |
| **AI agents Phase 1** (E1-E6 + H1-H2) | ✓ **FULL** | ✓ **FULL** | ✓ **FULL** | ✓ **FULL** |
| **Cross-sucursal analytics** | N/A (1 sucursal) | N/A (1 sucursal) | ✓ | ✓ + custom dashboards |
| **Phase 2 specialty agents** (cuando F5/F6/F8 maduran) | Add-on opcional Phase 1.5+ | Add-on opcional | Add-on opcional | Incluidos default |
| **Contable externo** | ✓ Incluido (NO cuenta cap) | ✓ Incluido | ✓ Incluido | ✓ Incluido |
| **SLA** | Best-effort | Best-effort | Best-effort | Contract SLA |
| **Internal cap interactions/sucursal** | ~1,200/mes | ~2,000/mes | ~2,500/mes | Custom negotiated |
| **Onboarding** | Standard high-touch (cf. doc 01 §4) | Standard high-touch | Standard high-touch (multi-sucursal · más sesiones) | Custom + dedicated PM |
| **Target ICP** | Sub-segmento A | Sub-segmento A heavy | **Sub-segmento B · BEACHHEAD** | Sub-segmento C |

### 3.2 Esencial · deep dive

**Target:** 1 sucursal · early-stage operator (Sub-segmento A)

**Value prop:** *"Tu agency BoH durante tus horas operativas · WhatsApp dentro de tu ventana de 10 horas · agents Phase 1 completos · entry premium tier accesible."*

**WhatsApp service level refinado (Esencial-specific):**

> Cliente elige una **ventana de 10 horas diarias** dentro de la cual la agency responde via WhatsApp conversational (response <10 min). Fuera de la ventana, agency manda alerts urgentes via push notifications (no conversational). Cliente puede ajustar ventana **1 vez cada 30 días**.

**Pre-set templates comunes para selección rápida durante onboarding:**

| Template | Ventana | Use case típico |
|---|---|---|
| **Mañana** | 6am-4pm | Breakfast + lunch · cafeterías · loncherías |
| **Día completo** | 10am-8pm | Lunch + early dinner · mariscos · taquerías día |
| **Tarde-noche** | 3pm-1am | Dinner · brewpub · cocina de autor |
| **Custom** | Cliente elige hora inicio | Cualquier operación atípica |

**Default suggestion durante onboarding:** 10am-8pm (cubre 95% restaurant operation patterns)

**Use case típico:** operador 1 sucursal validando agency-as-SaaS antes de scale · BoH chaos cliff todavía no agudo · presupuesto sensible

**Inventario realista users:** Owner + Manager + Chef + 1 sous chef + Contable = 5 (sweet spot cap)

**Diferenciador clave vs Pro:** ventana 10 hrs vs 24/7 · 5 users vs 8 users

### 3.3 Pro · deep dive

**Target:** 1 sucursal heavy-user · power operator preparando expansión (Sub-segmento A heavy)

**Value prop:** *"Pro upgrade: agency 24/7 WhatsApp instant + más users (8) + scale-ready para 2da sucursal."*

**Diferenciadores clave vs Esencial:**

- **WhatsApp 24/7 instant** (sin ventana limit) — owner puede consultar 3am sin restriction
- **3 users adicionales** (8 vs 5) — kitchen team grande · multi-shift operation
- **Mismo agents Phase 1** (FULL cross-tier · canonical)
- **Mismo onboarding** (standard high-touch · uniforme)

**Use case típico:** operador 1 sucursal con kitchen team grande · multi-shift operation · heavy engagement con agency · evaluating 2da sucursal expansion

**Upgrade path natural:**
- Esencial → Pro cuando user count >5 OR cliente solicita 24/7
- Pro → Multi-Sitio cuando abre 2da sucursal (auto-conversion offer)

### 3.4 Multi-Sitio · deep dive · BEACHHEAD ICP

**Target:** **Sub-segmento B beachhead** — Carlos Mendoza arquetípico, 2-3 sucursales mariscos Tijuana `[Anclado en research]` (`01-industry-and-market/05-perfil-de-cliente-ideal.md` v1.0)

**Value prop:** *"Multi-sucursal management nativo · 24/7 WhatsApp instant + cross-sucursal analytics · agency works ACROSS sucursales sin silos · scale operacional real."*

**Diferenciadores clave vs Pro:**

- **2-5 sucursales** (vs 1 sucursal Pro)
- **Cross-sucursal analytics** (UNIQUE a este tier · scope condicional · solo aplicable a multi-sucursal · NO disponible single sucursal)
- **10 users/sucursal** (vs 8 users Pro · accomoda kitchen team grande × multiple sucursales)
- **Per-sucursal pricing lower** ($1,799 vs $1,999 Pro) — rewards multi-sucursal commitment

**Mínimo 2 sucursales para activar.** NO disponible para 1 sucursal · forza Pro tier (canonical decision · cf. §10.1 decisión abierta #4).

**Math Carlos Mendoza arquetípico:**

- 2 sucursales × $1,799 = **$3,598 MXN/mes** ($180 USD/mes)
- Capacidad: 20 active users total · 24/7 WhatsApp · cross-sucursal · full Phase 1 agency
- Anchor scenario · descuento Socio Fundador 25% si aplicable = $2,698 MXN/mes ($135 USD)

**Use case típico:** dueño-operador 2-3 sucursales con manager por sucursal · contable externo · BoH chaos cliff exactly atravesado en 2da sucursal expansion · ICP arquetípico

**Upgrade path natural:**
- Multi-Sitio → Enterprise cuando 6+ sucursales O requiere SLA contract-defined O custom integrations

### 3.5 Enterprise · deep dive

**Target:** Sub-segmento C (6+ sucursales · cadenas regionales) · Phase 2+ productización

**Value prop:** *"Custom · negotiated · dedicated CS + Contract SLA + advanced agents + custom integrations · enterprise-grade infrastructure."*

**Pricing model:** NO list price Phase 1 · "Custom · contact sales" · consultative pricing per cliente

**Estimación informativa (NO list):** typical $4,000-8,000 MXN/sucursal/mes para 6+ sucursales · ajustable según requirements

**Diferenciadores reales vs Multi-Sitio:**

- **SLA contract-defined** (99.5% uptime · response time guarantees · SLA credits por incumplimiento)
- **Dedicated CS Manager** (NO shared CS tier · personalized account management)
- **Custom integrations** (POS API si available Phase 2 · accounting systems custom · ERP)
- **Advanced Phase 2 specialty agents pre-included** (F5 agentes especializados · F6 cumplimiento · F8 partner channel)
- **Custom dashboards** beyond standard
- **Single-tenant option** si data isolation premium required

**Sales motion:** consultative · NO self-serve · founder/dedicated sales involvement · MSA negotiable · DocuSign e-signature (cf. doc 01 §7.2)

**Productización Phase 1:** NO productizado · "Custom · contact sales" only · referrals/inbound a founder

**Productización Phase 2+:** standard Enterprise tier con list pricing range cuando hay 2-3 Enterprise clientes validating

---

## 4. Pricing por tier · 3 escenarios canónicos

### 4.1 Anchor scenario (current hypothesis)

| Tier | Anchor pricing | Defensa value-based |
|---|---|---|
| **Esencial** | **$1,500/sucursal/mes** ($75 USD) | Wallet anchor MX SMB (Bistrosoft Pro $1,599 · PoloTab $1,490) · captures 1-2% del work equivalent agency humana |
| **Pro** | **$1,999/sucursal/mes** ($100 USD) | $400-500 premium vs POS+inventario competitors · justificado por 24/7 + 8 users + agency framing |
| **Multi-Sitio** | **$1,799/sucursal/mes** ($90 USD) mínimo 2 sucursales | Per-sucursal lower than Pro · rewards multi-sucursal commitment · 2× anchor = $3,598 mensual baseline |
| **Enterprise** | **Custom** (typical $4,000-8,000/sucursal/mes estimate · Phase 2 productización) | Vertical AI premium global anchor · custom features · SLA value |

### 4.2 Downside scenario · $1,200 base

| Tier | Downside pricing | Aplicación |
|---|---|---|
| Esencial | $1,200/sucursal/mes | Reduce friction si WTP softer than expected |
| Pro | $1,500/sucursal/mes | Proporcional · mantiene $300 premium vs Esencial |
| Multi-Sitio | $1,400/sucursal/mes | Proporcional · mantiene attractive multi-sucursal economics |
| Enterprise | Custom (typical $3,000-6,000) | Ajustado proporcionalmente |

**Triggers para considerar downside:**

- PSM design partners reveal optimal price <$1,500 Esencial
- 3+ design partners cite price como friction primario en discovery
- Conversion <30% en primer outreach cohort (5+ rejected price-related)

**Riesgo de adoptar downside:**

- Destruye arbitrage 70-100x narrative
- Anchors low (hard to raise later)
- "Cheap = sketchy" signal MX SMB
- Worsens unit economics significantly

### 4.3 Upside scenario · $1,800-2,000 base

| Tier | Upside pricing | Aplicación |
|---|---|---|
| Esencial | $1,800/sucursal/mes | Post-validación strong WTP signal |
| Pro | $2,499/sucursal/mes | Proporcional · $700 premium vs upside Esencial |
| Multi-Sitio | $2,199/sucursal/mes | Proporcional · multi-sucursal economics preserved |
| Enterprise | Custom (typical $5,000-10,000) | Vertical AI premium global more aggressively captured |

**Triggers para mover a upside:**

- PSM design partners reveal optimal price range $1,800-2,200
- NPS ≥40 + zero price-related cancellations Mes 6
- Strong word-of-mouth driving inbound demand
- Founder bandwidth saturated (signal de demand exceeds supply)

**Beneficios de upside:**

- Captures más value · mejor unit economics
- Runway extension Path A bootstrap
- Acelera pre-seed timing posible
- Premium positioning stronger vs vertical AI global anchor

### 4.4 Disciplina anti-anchoring

Todos los docs operativos del subfolder mantienen **3 escenarios** simultáneos (heredado de doc 00 §6.4). NO se colapsa a punto único hasta behavioral data con 3+ design partners cierra la decisión.

### 4.5 Pricing IVA treatment

- Todos los precios cited **+ IVA 16%**
- CFDI auto-generated con IVA breakdown line-item
- Annual prepay IVA aplicado al monto upfront

### 4.6 Pricing display al cliente

Customer-facing pricing page (sales motion downstream `04-go-to-market/`) debe:

- Mostrar prices + IVA explícito (NO sorpresas)
- Frame Multi-Sitio per-sucursal pricing con math example (2 sucursales = $3,598)
- Enterprise NO list price · "Contact sales" CTA
- Annual prepay descuento mostrado como ahorro anual (NO solo % off)
- Descuento Socio Fundador NOT mostrado en pricing page pública (oferta privada cohort)

---

## 5. Competitive anchoring DUAL framing aplicado

### 5.1 Wallet calibration · banda software mensual MX restaurantes

| Vendor | Precio referencia | Categoría real |
|---|---|---|
| **SoftRestaurant base** | ~$800/mes | POS legacy + módulos básicos |
| **Fudo Pro** | ~$1,050/mes | POS + inventario light + FoH chatbot |
| **PoloTab Pro** | ~$1,490/mes | POS + hardware-locked + inventario |
| **Bistrosoft Pro** | ~$1,599/mes | POS + inventario · standard SaaS |
| **Zenet Esencial** | **$1,500/mes (anchor)** | **Agency-as-SaaS · 8 AI agents · BoH cognitive layer** |
| **Zenet Pro** | **$1,999/mes (anchor)** | **Agency 24/7 · scale-ready** |
| **Zenet Multi-Sitio** | **$1,799/sucursal/mes (anchor)** | **Multi-sucursal agency** |

**Anclaje:** `Market Research and Analysis/_context/03-competitive-analysis/04-feature-y-pricing-comparative.md` v0.2.1.

**Párrafo crítico inmediatamente debajo (canonical messaging):**

> Este anchoring es **wallet calibration**, NO category equivalence. A precio similar ($1,500-1,999 banda), POS vendors te dan POS + inventario (herramientas). Zenet te da agencia de 8 especialistas AI-native (trabajo). Same wallet, different category, radically more value. Esta diferencia es el corazón del pricing power · razón por la que NO competimos feature-by-feature contra POS+inventario incumbents.

### 5.2 Category claim · vertical AI premium global anchor

| Categoría vertical AI global | Pricing reference |
|---|---|
| Harvey AI (legal vertical) | $500-1,500 USD/seat/mes |
| Hippocratic AI (healthcare) | Premium enterprise pricing |
| Vertical AI radiology/finance | Premium positioning |
| **Zenet (restaurant vertical AI)** | **$75-100 USD/sucursal/mes** |

**Lectura:** Zenet captures <5-10% del premium vertical AI global · discount es **estratégico** para accesibilidad MX SMB · NO señal de bajo value.

**Uso del second anchor:**

| Audiencia | Cómo usar second anchor |
|---|---|
| **Investor pitch** | Pricing power runway demonstration · "Captures <5% del vertical AI premium global · 10-20x headroom para premium pricing futuro" |
| **Future pricing optionality** | Phase 2+ LATAM/USD plays podrían rebalancear hacia premium global |
| **Defense contra "muy barato luce poco serio"** | Contraste con vertical AI premium muestra discount intencional, NO low quality signal |

### 5.3 Por qué dual framing matters

| Sin wallet calibration... | Sin category claim... |
|---|---|
| Cliente NO entiende dónde encaja Zenet en su budget mental | Cliente compara feature-by-feature con POS |
| Friction de adopción | Commoditiza Zenet · destruye pricing power |
| MX SMB resistance ("no sé qué presupuesto darle") | Forces race to bottom |

Both layers necesarias en sales motion (`04-go-to-market/` cuando se redacte).

### 5.4 Anti-comparisons (NO usar como anchor)

| NO comparar | Razón |
|---|---|
| ChatGPT Plus ($20/mes) | Different category · confunde · destruye agency framing · activates "es solo un chatbot" perception |
| Notion AI ($10/user/mes) | Horizontal AI · NO vertical specialist |
| CONTPAQi accounting ($500/mes) | Different problem space · activates wrong mental model |
| Slack ($200/seat/mes) | Different lane entirely · per-seat metering reference (que NO usamos) |

---

## 6. Cap users + internal caps por tier

### 6.1 Cap users por tier (visible al cliente · soft enforcement)

| Tier | Active users cap | Enforcement mechanism |
|---|---|---|
| Esencial | 5 active users/sucursal | Soft cap · CS alert si se excede · upgrade conversation a Pro |
| Pro | 8 active users/sucursal | Soft cap · CS alert · upgrade conversation a Multi-Sitio si abre 2da sucursal |
| Multi-Sitio | 10 active users/sucursal | Soft cap · CS alert · Enterprise conversation si scale beyond |
| Enterprise | 15+ negotiated | Per contract |

**Visibilidad al cliente:** cap mostrado en admin panel · cliente ve quiénes están "active" · ve cuándo se acerca al cap · CS proactivo a 80%.

### 6.2 "Active user" definition operativo

`[Hipótesis sin validar]` · definición pendiente refinamiento Months 1-3 con product analytics setup:

**Hipótesis Phase 1:** active user = login al web/app **OR** interaction WhatsApp con agency últimos 30 días.

| Caso | Cuenta como active user? |
|---|---|
| Login web/app últimos 30 días | ✓ Sí |
| Mandó/recibió mensaje WhatsApp con agency últimos 30 días | ✓ Sí |
| Solo recibió alerts push sin interaction | ❌ No (passive recipient) |
| Login >60 días sin actividad | ❌ No · auto-archive · NO cuenta cap |
| Trial onboarding Day 1-7 | ❌ No cuenta · ventana cancelación · cap activa Day 8 |
| Stakeholder externo (contable) | ❌ NO cuenta cap (siempre incluido cross-tier · canonical) |
| Founder/owner que también es manager/chef | ✓ Cuenta como 1 user (NO doble) |

### 6.3 Internal caps interactions/sucursal/mes (invisible al cliente)

| Tier | Soft target | Alerta CS interna | Hard ceiling (catastrophe) |
|---|---|---|---|
| Esencial | ~1,200 interactions/mes | 80% (1,000) trigger outreach proactivo | 2,400 (2x) rate-limiting agency-styled |
| Pro | ~2,000 interactions/mes | 80% (1,600) | 4,000 (2x) |
| Multi-Sitio | ~2,500 interactions/mes/sucursal | 80% (2,000) | 5,000 (2x) |
| Enterprise | Custom negotiated | Custom | Custom |

**Disfraz agency-aligned:** cliente NUNCA ve estos números · solo CS conversation cuando trend lo amerita.

**Hard ceiling messaging hipótesis:** *"Tu agencia está procesando uso intenso · agendar conversación tier upgrade"* (agency-styled · NO utility-bill messaging).

### 6.4 Soft cap + hard ceiling mechanics

Resumen de doc 00 §6.5 internal vs visible caps principle aplicado a tier mechanics:

```
Internal cap (soft target)      → Operational tracking · invisible cliente
   ↓ approach 80%
Soft signaling (CS reactive)    → "Tu agencia está procesando uso intenso · conversemos del próximo tier"
   ↓ approach 100%
Standard usage continues        → No restriction · cliente no ve nada
   ↓ exceed 200% (outlier abuse)
Hard ceiling (rate-limiting)    → "Tu agencia está saturada · refuerzo en marcha" (last resort)
```

### 6.5 Anti-pattern explícito

**NO surface tokens · NO surface interactions count · NO show "remaining capacity" al cliente.** Internal caps son operacional invisible. Cliente experience agency framing · NO utility-bill framing.

---

## 7. Tier differentiation aditiva NO sustractiva

### 7.1 Principio reiterated (heredado doc 00 §6.7)

> Tier differentiation Phase 1 escala scope **ADITIVAMENTE** (users · sucursales · service window · specialty agents Phase 2+) · **NUNCA sustrae capabilities del producto core.**

### 7.2 Matrix qué SÍ gatea vs qué NO gatea

| Dimensión | Tipo | Por tier |
|---|---|---|
| Number of users incluidos | Aditiva (OK) | 5 / 8 / 10 / 15+ |
| Number of sucursales | Aditiva (OK) | 1 / 1 / 2-5 / 6+ |
| WhatsApp service window | Aditiva (OK · service tier) | 10 hrs custom / 24/7 / 24/7 / 24/7 + SLA |
| Cross-sucursal analytics | Aditiva (scope condicional · solo aplicable multi-sucursal) | N/A / N/A / ✓ / ✓+custom |
| Internal capacity caps | Aditiva (operacional invisible) | 1,200 / 2,000 / 2,500 / custom |
| SLA / dedicated CS | Aditiva (Enterprise only) | Best-effort / Best-effort / Best-effort / Contract SLA |
| Phase 2 specialty agents | Aditiva (extensions futuras) | Add-on / Add-on / Add-on / Incluidos default |
| **Phase 1 AI agents (E1-E6 + H1-H2)** | **✗ NO gatear** | **FULL cross-tier** |

### 7.3 Por qué Phase 1 agents NO se gatean

5 razones estructurales (heredadas doc 00 §6.7):

1. **Rompe agency framing** — *"tu agencia con la mitad del staff missing NO es agencia"*
2. **Contradice value-based logic** — incomplete BoH system es unusable · captures cero value
3. **Forza manual workarounds** — silent churn driver `[Anclado en research]` (`02-customer-research/06-objeciones.md` v0.5 §4.6)
4. **Crea tier upgrade pressure punitiva** — *"paga más o hazlo tú"* destruye trust
5. **Phase 1 MVP es sistema integrado** — agents Phase 1 son interdependientes operacionalmente · gating rompe coherence

### 7.4 Phase 2 specialty agents = lugar correcto para gating

Cuando F5 agentes especializados (Phase 2) maduran:

- **Specialty Agent Pack** add-on opcional Esencial/Pro/Multi-Sitio (~$400/agente/mes hipótesis)
- **Incluidos default** en Enterprise tier
- Esto es **genuine add-on territory** (extensions futuras · NO core Phase 1)

---

## 8. Tier upgrade paths automáticos + edge cases

### 8.1 Upgrade paths estándar

| Trigger | From | To | Mechanism |
|---|---|---|---|
| Cliente excede cap users repeatedly (3+ veces en 60 días) | Esencial | Pro | CS conversation upgrade · NO auto-bill increase |
| Cliente excede internal cap interactions repeatedly | Esencial | Pro | CS conversation upgrade |
| Cliente requiere 24/7 WhatsApp (fuera de ventana 10 hrs frecuentemente) | Esencial | Pro | CS conversation · "tu ventana actual no captura suficiente" |
| **Cliente abre 2da sucursal** | Esencial / Pro | Multi-Sitio | **Auto-conversion offer** · CS reach-out 1 sem post-2da sucursal · prorrateo desde sucursal addition date |
| Cliente Multi-Sitio escala a 6+ sucursales | Multi-Sitio | Enterprise | CS conversation · sales motion consultative · custom negotiated |
| Cliente Multi-Sitio requiere features Enterprise (SLA · custom integrations · advanced agents) | Multi-Sitio | Enterprise | CS conversation · sales motion |

### 8.2 Downgrade paths

| Trigger | From | To | Mechanism |
|---|---|---|---|
| Cliente Pro cierra negocio · queda 1 sucursal small operation | Pro | Esencial | CS conversation downgrade · friction conversacional pero permitido (NO trap) |
| Cliente Multi-Sitio cierra sucursal · queda 1 sucursal | Multi-Sitio | Pro | CS conversation · prorrateo · effective next billing cycle |
| Cliente Enterprise consolidates operation · queda <6 sucursales | Enterprise | Multi-Sitio | Custom negotiated · per contract terms |

**Anti-pattern explicit:** NUNCA dificultar downgrades · NO dark patterns · cliente puede downgrade libremente con CS conversation (agency framing requires trust).

### 8.3 Edge cases · operacional matrix

| Edge case | Tratamiento hipótesis |
|---|---|
| **Contable externo** | NO cuenta hacia cap users · siempre incluido cross-tier · razón: buying committee load-bearing `[Anclado en research]` (`02-customer-research/05-buying-process.md` v0.7 §10) |
| **Founder/owner que también es manager/chef** | Cuenta como 1 user · NO doble · operational reality |
| **User dormant** (login >60 días sin actividad) | NO cuenta hacia cap · auto-archive · re-activación libre cuando vuelven |
| **Trial users durante onboarding Day 1-7** | NO cuenta hacia cap · ventana cancelación · cap activa Day 8 |
| **Multi-sucursal cancellation** | Per-sucursal granular · Multi-Sitio puede cancelar 1 sucursal individual sin cancelar todo el contract |
| **Multi-sucursal addition mid-cycle** | Prorrateo desde addition date · CFDI ajustado · NO charge upfront full month |
| **Outlier abuse (3x soft cap interactions)** | Hard ceiling activate · agency-styled rate-limiting · CS escalation immediate · founder review |
| **Cliente Esencial agrega 6to user** | Soft cap exceeded · CS reach-out 24-48h · upgrade conversation a Pro (NO auto-bill increase) |
| **Cliente Esencial paga annual prepay · luego quiere upgrade a Pro mid-year** | Pro-rata calculation · annual prepay credit aplicado al Pro pricing · diferencia cobrada · cycle continúa |
| **Cliente Multi-Sitio cierra 2 sucursales rapidly · queda 1** | Forced downgrade automatic a Pro tier · CS conversation · prorrateo · effective next billing |
| **Cliente Pro abre 2da sucursal sin notificar** | Detección via product analytics (multi-sucursal data appearing) · CS proactive reach-out · Multi-Sitio offer · grace period 1 mes para conversion |
| **Cliente NO Sub-segmento B intenta Multi-Sitio (e.g., 1 sucursal heavy-user)** | NO permitido (mínimo 2 sucursales) · forced Pro tier · razón: Multi-Sitio features condicional a multi-sucursal reality |

### 8.4 Edge cases · WhatsApp ventana (Esencial-specific)

| Edge case | Tratamiento hipótesis |
|---|---|
| **Cliente quiere split window** (e.g., 7am-11am breakfast + 6pm-12am dinner) | NO Phase 1 · single contiguous block · cliente puede upgrade a Pro 24/7 si necesita split coverage |
| **Cliente quiere extender ventana >10 horas** | Upgrade a Pro (24/7) · NO option intermedia Phase 1 |
| **Cliente solicita cambio ventana >1x/30 días** | NO permitido sin friction · CS conversation · razón excepcional only |
| **Cliente cambia ventana mid-day** | Cambio efectivo next 24 hrs (no retroactive · ops simplicity) |
| **Día especial (e.g., evento privado fuera de ventana normal)** | NO accommodation Phase 1 · upgrade temporal NO disponible · simplicity Phase 1 · v0.2+ posible flex |
| **Multi-day operations (kitchen prep madrugada)** | NO accommodation Esencial · upgrade a Pro 24/7 |
| **Time zone** (futuro LATAM expansion) | Cliente local timezone · sistema TZ-aware · Phase 1 MX timezone solo |
| **Cliente fuera de ventana manda WhatsApp** | Mensaje queued · response al inicio siguiente ventana · cliente notified "fuera de horario · respuesta a las XX:XX" |

---

## 9. Add-ons roadmap Phase 1.5+

### 9.1 Heavy Usage Pack (Phase 1.5+ hipótesis)

- **Target:** clientes que repeatedly exceden internal cap interactions (outlier heavy users)
- **Pricing hipótesis:** **~$600-800 MXN/mes/sucursal** `[Hipótesis sin validar]`
- **Trigger de lanzamiento:** observación design partners outliers Mes 1-3 · si patrón confirma necesidad
- **NO Phase 1:** Phase 1 = soft cap + CS conversations · NO surface metric · NO billing add-on (cf. doc 00 §6.5 + §4 #7)
- **Por qué add-on vs tier upgrade:** captura outlier sin forced tier upgrade · preserves agency framing · "you use more, you pay more" honest

**Mecánica hipótesis:**

- Add-on activable mid-cycle si cliente excede cap repeatedly
- CS conversation propone add-on como alternativa a tier upgrade
- Billing add-on aparece como line-item separate en CFDI
- Cliente puede cancel add-on anytime sin friction (no commitment)

### 9.2 Specialty Agent Pack (Phase 2+)

- **Target:** clientes que quieren agentes Phase 2 specialty (F5 agentes especializados · F6 cumplimiento · F8 partner channel cuando maduran)
- **Pricing hipótesis:** **~$400 MXN/agente/mes** `[Hipótesis sin validar]`
- **Trigger de lanzamiento:** Phase 2 GA · cuando F5 agentes especializados productizan `[Anclado]` (`02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1)
- **Disponible:** Esencial · Pro · Multi-Sitio (add-on opcional) · Incluidos default Enterprise

**Mecánica hipótesis:**

- Cliente puede activar 1+ specialty agents individualmente
- Pricing per-agente (NO bundle forzado)
- Billing add-on line-item separate
- Cliente puede activar/desactivar agents mensualmente

### 9.3 Add-ons NO contemplados Phase 1/1.5 (defer Phase 2+)

| Add-on | Razón defer |
|---|---|
| White-label / multi-brand | Sub-segmento C · Enterprise · Phase 2+ |
| API access standalone | Engineering investment significant · Phase 3+ |
| Training portal / academy | TIER 2B canonical · Phase 1.5 separate decision |
| Insurance / compliance bundle | Phase 2+ regulatory expansion |
| Industry vertical packs (mariscos · brewpub · etc.) | Premature segmentation · v2.0 si demand |

### 9.4 Principio add-ons

Add-ons son **reactivos post observación**, NO fragmentadores de primera venta. Sales motion Phase 1 NO menciona add-ons en pitch inicial · solo cuando observación cliente justifica conversación.

---

## 10. Validation triggers + decisiones abiertas

### 10.1 8 decisiones abiertas con triggers de cierre

| # | Decisión | Hipótesis | Trigger de cierre |
|---|---|---|---|
| 1 | Pricing exacto por tier | $1,500 / $1,999 / $1,799 | PSM con 3+ design partners + 2+ cierres reales |
| 2 | Cap users por tier | 5 / 8 / 10 | Behavioral data Months 1-3 |
| 3 | Internal caps interactions | 1,200 / 2,000 / 2,500 | Behavioral data Months 1-3 · interaction patterns observados |
| 4 | Multi-Sitio mínimo 2 vs upgrade path 1 sucursal | Mínimo 2 (forzado) | Behavioral data · ¿Sub-segmento A heavy quiere features Multi-Sitio sin 2 sucursales? |
| 5 | Sub-tiers escalonamiento | NO Phase 1 (4 tiers simples) | Si behavioral data muestra fragmentación natural · v0.2+ |
| 6 | Add-on pricing exact | Heavy $600-800 · Specialty $400 | Phase 1.5+ post observación |
| 7 | Enterprise productization timing | Phase 2 hipótesis | Primer Sub-segmento C inbound o outbound |
| 8 | "Active user" definition operativo | Login OR WhatsApp últimos 30 días | Behavioral data Months 1-3 + product analytics setup |
| 9 | **Ventana 10 hrs vs alternativas (8 hrs · 12 hrs · split allowed)** | 10 hrs single contiguous | Behavioral data Phase 1 design partners · ¿operadores solicitan flex frecuentemente? |

### 10.2 PSM plan summary

Detail completo en `05-wtp-validation-plan.md` (pending) · resumen aquí:

- **Quién:** 3+ design partners post-Mes 3 (Tier 2 onwards · cf. doc 02 §4.2)
- **Cómo:** Van Westendorp PSM con willingness ladder explícita
- **Willingness ladder hipótesis:** $1,000 / $1,300 / $1,500 / $1,800 / $2,100 (Esencial baseline)
- **Output:** mapping de 4 puntos (demasiado barato · barato razonable · óptimo · caro razonable · demasiado caro)
- **Cierre decisión:** convergence behavioral data + PSM consistency → adopt single point por tier · collapse 3 scenarios a anchor

### 10.3 Behavioral data metrics Months 1-3

Métricas que alimentan v0.2 del subfolder:

| Métrica | Pricing decision que informa |
|---|---|
| User count actual per sucursal por tier | Cap users validation (#2) |
| Interactions/mes/sucursal patrón | Internal caps validation (#3) |
| WhatsApp window utilization (Esencial) | Ventana validation (#9) |
| Conversion rate per tier | Pricing elasticity signal (#1) |
| Upgrade triggers observados | Tier path mechanics |
| Heavy usage outliers identification | Heavy Usage Pack trigger (#6) |
| Multi-sucursal expansion rate | Multi-Sitio tier validation (#4) |
| Active user dormancy rate | Active user definition refinement (#8) |

---

## 11. Anti-patterns + estado + version triggers

### 11.1 Anti-patterns explícitos del pricing

| NO hacemos | Razón |
|---|---|
| **Gating Phase 1 AI agents por tier** | Rompe agency framing · forza manual workarounds · destruye value (cf. §7) |
| Hidden fees · sorpresas en factura | Trust destruction · MX SMB resistance fuerte |
| **Per-query metering visible al cliente** | Utility-bill anxiety · habilita comparison ChatGPT · destruye categoría (cf. doc 00 §6.5) |
| Pricing per-plaza (TJ vs CDMX vs BC) | Pricing uniforme MX canonical (cf. doc 00 §4 #9) |
| Auto-upgrade billing sin CS conversation | Dark pattern · trust destruction · CS conversation required para upgrades |
| Force downgrade friction (hoops) | Anti-cliente · cliente puede downgrade libre con CS conversation |
| Premature add-on launch sin design partner observation | Speculative · fragmenta primera venta · NO disciplined |
| Heavy discount negotiation desde primer outreach | Year 1 churn lever · destruye anchor + arbitrage narrative (descuento Socio Fundador es structured · NO ad-hoc) |
| Tier escalonamiento sub-tiers prematuro (5+ tiers Phase 1) | Decision fatigue · sales complexity · MX SMB resistance |
| Mostrar pricing without context (raw price page) | Sin defensa value-based · friction adopción · necesita sales motion narrative |
| **Cambiar ventana WhatsApp Esencial frecuentemente sin friction** | Operational chaos · pierde patron stability · 1x/30 días limit anti-abuse |
| **Ofrecer split window Esencial Phase 1** | Premature complexity · operational chaos · v0.2+ si demand |

### 11.2 Estado v0.1

Cerrado 2026-05-30 tras conversación foundational del subfolder + iteración WhatsApp service level Esencial (ventana 10 hrs customizable vs fixed 7am-11pm propuesta inicial).

### 11.3 Version triggers

| Transición | Trigger |
|---|---|
| v0.1 → v0.2 | 3+ design partners con WTP qualitative observada + 2+ cierres reales + behavioral data Months 1-3 disponible |
| v0.2 → v1.0 | 5+ cierres reales + Mes 6 retention observed + cap users validation + internal caps tuned · pricing scenarios collapsed a single anchor point per tier |
| v1.0 → v2.0 | Phase 2 launch · Enterprise productization · Phase 1.5+ add-ons activos · pricing model overhaul |

### 11.4 Pendientes inmediatos post-v0.1

1. **PSM survey design** (Tier 2 deliverable · cf. doc 05 pending)
2. **Product analytics setup** — instrumentation para measure interaction patterns + user activity + window utilization (`02-features-y-scope/` engineering coordination)
3. **Pricing page customer-facing copy** — sales motion downstream (`04-go-to-market/` cuando se redacte)
4. **Order Form template** — Tier 2.0 lawyer engagement (incluye tier + sucursales + pricing applied + window selected si Esencial)
5. **CFDI line-item structure** — despacho contable coordination Tier 2.0
6. **WhatsApp Business templates** — pre-approved messages para window enforcement (Esencial) · alerts urgentes · soft cap warnings · hard ceiling rate-limiting

### 11.5 Cross-doc dependencies

| Doc | Relación |
|---|---|
| `00-marco-de-oferta-y-pricing.md` v1.0 | 8 decisiones heredadas + 3 principios estructurales · update menor §4 #4 (WhatsApp Esencial ventana 10 hrs customizable) |
| `01-modelo-comercial-y-terminos.md` v0.1 | Pricing aplica sobre estructura comercial base |
| `02-programa-socio-fundador-offer.md` v0.1 | Descuento Socio Fundador 20-30% aplica sobre pricing standard documented aquí |
| `04-viabilidad-economica-y-cogs.md` (pending) | Pricing per tier × COGS por tier = margin analysis |
| `05-wtp-validation-plan.md` (pending) | PSM methodology valida pricing hipótesis · 9 decisiones abiertas |
| `02-features-y-scope/00-fase-1-mvp-scope.md` v0.1 | Agents Phase 1 (E1-E6 + H1-H2) scope determina tier value differentiation |
| `02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 | Add-ons roadmap Phase 1.5+ alignment (Heavy Usage Pack · Specialty Agent Pack) |
| `03-competitive-analysis/04-feature-y-pricing-comparative.md` v0.2.1 | Competitive anchoring wallet calibration data source |
| `03-competitive-analysis/07-diferenciacion-zenet.md` v0.1 §4.1 | Pricing arbitrage 70-100x value-based defense |
| `01-industry-and-market/05-perfil-de-cliente-ideal.md` v1.0 | ICP arquetípico Carlos Mendoza Multi-Sitio math anchor |

---

## Notas finales

**Para sales motion (cuando se redacte `04-go-to-market/`):**

Este doc es la **referencia canonical** para pricing presentation. Sales motion debe:

- Frame Esencial como **"agency durante tus horas"** (NO "limited tier") · ventana 10 hrs customizable es feature, no limitation
- Frame Pro como **"agency siempre disponible"** (24/7 differentiator)
- Frame Multi-Sitio como **"agency cross-sucursal"** (multi-sucursal nativo)
- Frame Enterprise como **"custom · contact sales"** (NO list price)
- Mantener consistencia anti-patterns §11.1 (NO heavy discount tactical · NO gating Phase 1 agents · NO surface internal caps)
- Usar dual anchoring §5 (wallet calibration + category claim) en mismo pitch
- Pricing IVA explicit · NO sorpresas

**Para legal review pre-launch (Tier 2.0 lawyer engagement):**

Order Form template debe capturar:

- Tier seleccionado + pricing aplicado
- Sucursales (count + addresses)
- Active users incluidos cap
- WhatsApp window seleccionada (Esencial) o 24/7 (Pro/Multi)
- Annual prepay si aplica
- Descuento Socio Fundador si aplica (referencia Adendum SF doc 02)
- Effective dates · auto-renewal opt-in
- Authorized signatories

**Para product analytics (engineering coordination):**

Instrumentation requerida para v0.1 → v0.2 validation:

- Active user tracking (login + WhatsApp interaction events últimos 30 días)
- Interaction count per sucursal per día/mes
- WhatsApp window utilization (Esencial)
- Tier upgrade triggers (cap exceeded · window exceeded · sucursal added)
- Heavy usage outliers identification (cap × 1.5+ repeatedly)

**Para founder strategic clarity:**

Este doc consolida iteraciones foundational sobre pricing tier structure · WhatsApp service level refinement (ventana 10 hrs customizable) · edge cases extensive · 3 escenarios pricing canónicos. Sin este doc, pricing decisions + sales motion + Order Form templates + product analytics setup operarían sobre framing inconsistente.

---

*Última actualización: 2026-05-30.*
