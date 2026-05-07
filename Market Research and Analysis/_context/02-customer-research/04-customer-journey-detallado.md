---
name: Customer journey detallado
description: Mapa full-lifecycle del operador del beachhead desde pre-awareness hasta advocacy o churn. Estado emocional, cognitivo y comportamental por fase, triggers transversales, friction y churn risk windows, journeys multi-stakeholder, e implicaciones operativas para mensajería, producto y customer success.
type: customer-research
research_stage: discovery-pre-PMF
last_updated: 2026-05-06
status: active
version: 0.7
owner: Alan Bahena
---

# Customer journey detallado

## 1. Propósito + diferencia con docs vecinos

### 1.1 Qué responde el documento

¿Cómo se mueve el operador en el tiempo desde que el problema empieza a manifestarse hasta que es advocate, churns, o llega a su tercera renewal?

Doc 04 mapea el ciclo completo — pre-awareness → awareness → consideración → decisión → onboarding → activación → adopción → expansión → advocacy — declarando para cada fase: estado emocional, estado cognitivo, comportamiento observable, canales activos, triggers de salida hacia la siguiente fase, friction points y métricas (cuando aplican).

### 1.2 Diferencia frente a docs vecinos

| Doc | Qué responde | Lente |
|---|---|---|
| `01-industry-and-market/05-perfil-de-cliente-ideal.md` §5 | Customer journey base awareness → paying con foco lead qualification | Acquisition lens, compacto |
| `02-jobs-to-be-done.md` | Qué progreso busca el operador (motivación atemporal) | JTBD — atemporal |
| `03-pains-y-workarounds.md` | Qué duele y cómo lo resuelve hoy | Transversal — sin secuencia |
| **`04-customer-journey-detallado.md`** | **Cómo evoluciona el dolor, la búsqueda y la relación con el producto en el tiempo** | **Secuencial — full lifecycle** |
| `06-objeciones-y-fricciones-de-adopcion.md` | Por qué frena el journey en momentos específicos | Friction-focused |

Doc 04 absorbe el customer journey de doc 05 §5 y lo expande con tres dimensiones que doc 05 no cubre: (1) post-purchase completo (onboarding → expansión → advocacy → churn), (2) profundidad emocional/cognitiva por fase anclada al 5-phase arc académico (cf. doc 03 §9.3), (3) multi-stakeholder journey paralelo (dueño/gerente/chef/contador).

### 1.3 Disciplina de evidencia

La mayor parte del journey pre-compra está sostenida con evidencia local + triangulaciones de Perplexity ya integradas en doc 03. El journey post-compra (onboarding, activación, retención, expansión, advocacy, churn) es estructuralmente más especulativo en etapa 1 — el producto no está en manos de operadores reales aún. La sección §10 declara explícitamente las áreas candidatas a triangulación post-redacción, mismo patrón que doc 03.

---

## 2. Marco del customer journey aplicado

### 2.1 Modelo blended B2B SaaS lifecycle + JTBD time map

El modelo que estructura este doc combina dos frameworks:

- **B2B SaaS lifecycle estándar**: Awareness → Consideración → Decisión → Onboarding → Activación → Adopción → Retención → Expansión → Advocacy. Captura las fases relevantes del producto-empresa.
- **JTBD time map (Christensen)**: First Thought → Passive Looking → Active Looking → Deciding → Onboarding → Ongoing Use. Captura el journey del cliente desde su perspectiva, anclado a la circunstancia que dispara el progreso.

El blend produce 10 fases que cubren el ciclo completo desde antes de que el problema se nombre hasta que el operador es referente activo en su comunidad — o churns, lo cual también es parte del journey real.

### 2.2 Integración con el 5-phase emotional arc

Doc 03 §9.3 inventarió como hallazgo de Query 1 (Perplexity 2026-05-06) un **5-phase emotional arc** documentado en research académico de operadores independientes:

1. **Phase 1 — Launch energy** (mes 0-18): adrenalina, pasión, alta tolerancia al overwork.
2. **Phase 2 — First normalization** (mes 18-36): excitación inicial se desvanece, complejidad operativa crece, "I'll just do it myself" se vuelve default. Síntomas físicos sin nombrar como estrés.
3. **Phase 3 — Scaling rupture** (típicamente segunda apertura): elimina el control mechanism que sostuvo Phase 2 — presencia personal. Período de mayor distress agudo.
4. **Phase 4 — Chronic survival mode**: 90% del tiempo reaccionando a crises. Sleep crónicamente perturbado, deterioro relacional, riesgo de adicciones.
5. **Phase 5 — Decision point**: bifurcación. Persisten quienes tienen identity anchors externos y restructuring lifeline; cierran tras 2-5 años de "running out of road".

Este arc emocional **es la columna vertebral académica del customer journey de Zenet**. Las fases del journey de adquisición no operan en vacío — operan sobre un operador en estado emocional específico. Cada fase del journey declara dónde se encuentra el operador típicamente en el 5-phase arc.

**Mapeo aproximado:**

| Fase del journey Zenet | 5-phase arc del operador |
|---|---|
| 3.1 Pre-awareness | Phase 1 + entrada a Phase 2 |
| 3.2 Awareness del problema | Phase 2 → entrada Phase 3 |
| 3.3 Awareness de la categoría | Phase 3 |
| 3.4 Consideración activa | Phase 3 → 4 |
| 3.5 Decisión | Phase 4 (decisión de actuar antes de Phase 5) |
| 3.6 Onboarding | Phase 4 con esperanza emergente |
| 3.7 Activación | Salida de Phase 4 hacia agencia recuperada |
| 3.8 Adopción y maduración | Identity reformation — "operador con sistema" |
| 3.9 Expansión | Identity consolidation — crecimiento informado |
| 3.10 Advocacy | Identity outward — "soy referente" |

### 2.3 Disciplina por fase

Cada fase declara, cuando aplica:

- **Descripción** — qué pasa en el operador en esta fase.
- **Duración típica** — con caveat de incertidumbre.
- **Estado emocional** anclado al 5-phase arc.
- **Estado cognitivo** — qué piensa, cómo nombra el problema.
- **Comportamiento observable** — qué hace y dónde se ve.
- **Canales activos** — dónde toca contenido, conversaciones, demos.
- **Triggers de salida** hacia la siguiente fase.
- **Friction points** — qué frena el avance (cross-ref doc 06 cuando se construya).
- **Métricas** — qué medimos en esta fase (etapas 3+, post-PMF mayormente).

---

## 3. Las 10 fases del journey

### 3.1 Pre-awareness — operación rota, problema no nombrado

**Descripción:** el operador opera con sistema roto pero atribuye el dolor a "así es el negocio", "es la industria", "el equipo no se compromete", o "yo necesito esforzarme más". El problema no se nombra como problema solucionable. Está habituado.

**Duración típica:** años. Algunos operadores nunca salen de esta fase — operan así hasta que cierran.

**Estado emocional:** Phase 1 (launch energy) + entrada a Phase 2 (first normalization). Adrenalina del primer año post-apertura, gradual cansancio que se atribuye a "esto es lo normal".

**Estado cognitivo:**
- Atribución del dolor a talento, esfuerzo, suerte o industria.
- Vocabulario ausente para nombrar la categoría de solución.
- Capa cultural antagonista: *"el caos es el precio inevitable de tener un restaurante"* (workspace `02-brand-story/narrativa.md`).

**Comportamiento observable:**
- Continúa con workarounds (Excel + WhatsApp + libreta + memoria de personas clave).
- Acepta el dolor como background — no busca solución activamente.
- Mínima exposición a contenido de la categoría.

**Canales activos:**
- Ninguno orientado a la categoría.
- Exposición ambient a contenido de operación restaurantera (Instagram chefs, podcasts ocasionales) sin orientación específica al problema.

**Triggers de salida hacia 3.2:**
- Trigger event agudo (pérdida grande por mermas en un mes específico, salida abrupta de gerente clave, segunda apertura que rompe la operación).
- Acumulación crítica de pequeños fallos que cruzan umbral subjetivo.
- Conversación con peer que articula el problema en términos sistémicos.

**Friction:**
- Habituación documentada (doc 03 §5.2): el dolor crónico se naturaliza.
- Identity threat: nombrar el problema como sistémico admite implícitamente que el sistema actual (que el operador construyó) es inadecuado.

**Métricas:** ninguna. Pre-funnel total.

### 3.2 Awareness del problema

**Descripción:** el operador empieza a nombrar el problema como **estructural**, no temporal ni personal. Reconoce que no es de talento ni de esfuerzo — es de sistema. Aún no conoce categoría de solución.

**Duración típica:** según doc 05 §5.1 timeline para el beachhead típico (post-segunda apertura): meses 0-3 atribución a "ajustes normales" → meses 4-9 cuestionamiento → meses 10-18 reconocimiento estructural.

**Estado emocional:** Phase 2 (first normalization) profundizándose hacia Phase 3 (scaling rupture). El operador empieza a nombrar el agotamiento. Aparecen los primeros verbatims tipo *"no puedo desconectar"* o *"esto se está rompiendo"*.

**Estado cognitivo:**
- Articulación inicial: *"esto no es normal, hay un patrón"*.
- Frase diagnóstica recurrente (validada por consultores): *"el problema no es del equipo, es del sistema"*.
- Vocabulario aún imprecisa — todavía no nombra "estandarización", "back-of-house", "operating system".

**Comportamiento observable:**
- Empieza a leer/escuchar contenido sobre operación restaurantera con lente nuevo.
- Pregunta a peers: *"¿a ustedes les pasa lo mismo?"*.
- Conversaciones más profundas con su consultor gastronómico (cuando lo tiene) o con su contador.
- Aparecen frases en su discurso cotidiano que antes no tenía: "control", "estandarización", "consistencia entre sucursales".

**Canales activos:**
- Social media ambient: contenido de chefs/operadores que articulan dolor estructural.
- Podcasts gastronómicos / business.
- Conversaciones peer-to-peer con otros restauranteros de la plaza.
- LinkedIn (consumo, no posteo).

**Triggers de salida hacia 3.3:**
- Exposición a contenido que **nombra la categoría intermedia** entre Excel y ERP enterprise — el "sistema operativo cognitivo para back-of-house" o equivalente conceptual.
- Recomendación específica de un peer o consultor que menciona herramienta o categoría: *"¿conoces lo que está usando [otro operador]?"*.

**Friction:**
- Falta de conciencia de alternativa (doc 03 §5.3): el operador puede saber que duele pero no saber que existe categoría de solución.
- IIEG Jalisco 2024: 13.2% de no-adoptantes citan "ignorancia de la función" como razón para no usar plataformas digitales — proxy de magnitud del gap conceptual.
- Aguante identity (doc 03 §2.4.6): nombrar el dolor estructuralmente puede sentirse como admisión de fracaso personal.

**Métricas:**
- Indirectas: web traffic a contenido educativo sobre back-of-house operations (no convertido aún a lead).
- Ambient: searches Google tipo "cómo organizar inventario restaurante", "cómo estandarizar recetas multi-sucursal".

### 3.3 Awareness de la categoría — "sí existe esto"

**Descripción:** el operador descubre que existe categoría de solución intermedia entre Excel y ERP enterprise. Empieza a tener vocabulario para discriminar opciones: "sistema operativo", "back-of-house software", "cognitive infrastructure".

**Duración típica:** semanas a pocos meses. Una vez nombrada la categoría, el operador transiciona relativamente rápido a consideración activa si el dolor está agudo.

**Estado emocional:** Phase 3 (scaling rupture) en pleno desarrollo. La frustración se canaliza hacia búsqueda — el operador siente esperanza por primera vez en meses.

**Estado cognitivo:**
- Vocabulario de la categoría se consolida.
- Empieza a discriminar entre POS (que ya tiene), Excel (que usa), apps de inventario aisladas (que conoce o ha probado), ERP enterprise (que descartó por costo).
- **Nuevo frame:** "lo que necesito vive entre Excel y ERP — algo que conecte mi operación entre sucursales sin tener que ser SAP."

**Comportamiento observable:**
- Búsquedas más específicas en Google: "software operación restaurante mexicano", "sistema multi-sucursal restaurante", "estandarizar recetas multi-location".
- Consume contenido de vendors de la categoría.
- Pregunta a peers de forma más específica: *"¿qué están usando ustedes para back-of-house?"*.
- Pide recomendaciones a su consultor gastronómico.

**Canales activos (priorizados según doc 03 §5.8 trust hierarchy):**
- Peer recomendaciones (más alta).
- Social media (Instagram, TikTok, LinkedIn) — discovery ambient. Belle Communication 2026: operadores no tienen tiempo para canales formales.
- CANIRAC / asociaciones gremiales (latent trust capital alto en México).
- Trade press hispano-parlante.
- Vendor websites — pero con vendor distrust 40.9% en Jalisco (doc 03 §5.7), el contenido de vendor entra como referencia, no como autoridad.

**Triggers de salida hacia 3.4:**
- Shortlist de 3-5 opciones para evaluar concretamente.
- Demo agendada (típicamente con 2-3 vendors).
- Recomendación de peer/consultor que push a evaluación específica.

**Friction:**
- Choice paralysis (doc 03 §5.3): NRN 2023 documenta 20% de operadores "overwhelmed by all the tech options out there".
- Distrust de vendors (doc 03 §5.7): 40.9% Jalisco IIEG 2024.
- El operador necesita validación social para reducir el riesgo percibido — sin peer recommendation, la consideración no arranca.

**Métricas:**
- Empiezan métricas de funnel marketing: web visits a sitio Zenet, downloads de contenido, suscripciones a newsletter, requests de demo.
- TOFU conversion rate: visit-to-demo-request.

### 3.4 Consideración activa

**Descripción:** el operador evalúa específicamente Zenet (entre 3-5 candidatos típicamente). Compara opciones, consulta múltiples fuentes, modela ROI mentalmente, alinea internamente con stakeholders.

**Duración típica:** según doc 05 §5.4 + Belle Communication 2026: el operador consulta **8-9 fuentes** antes de purchase decision (casi el doble que hace 5 años). Ciclo típico desde primer contacto hasta compromiso: 3-8 semanas (Perplexity Pro Apr 2026 benchmark LATAM SMB SaaS).

**Estado emocional:** Phase 3 (scaling rupture) → Phase 4 (entering chronic survival mode). El operador está en estado de máxima urgencia emocional — pero también de máxima saturación cognitiva. Tiene poco tiempo y mucha presión.

**Estado cognitivo:**
- Construcción de criterios de decisión (formales o implícitos).
- Comparación de candidates.
- ROI modeling — generalmente mental, no riguroso.
- Risk assessment: "¿y si no funciona?", "¿cuánto me costaría que no funcione?".
- Buying committee alignment: ¿qué piensa María, mi gerente?, ¿qué piensa el contador?, ¿qué piensa el chef?

**Comportamiento observable:**
- Demos (presenciales si es posible — el dueño quiere ver el sistema mientras opera).
- Llamadas con vendors.
- Lectura de casos de éxito (especialmente locales — operador similar en Tijuana).
- Pregunta a peers ya usuarios: *"¿lo recomiendas?"*.
- Consulta con consultor gastronómico de confianza.
- Internal alignment: conversaciones con gerente operativo, contador externo, chef ejecutivo.
- Pricing comparison.

**Canales activos:**
- Vendor demos, vendor sites.
- Peer references (ya usuarios de Zenet).
- Consultor referrals.
- Caso de estudio local (LionFish, Carmelita tipo cuando se construyan).
- Internal team conversations.

**Información que busca (doc 05 §5.4):**

| Información | Importancia | Formato preferido |
|---|---|---|
| Casos similares en Tijuana específicamente | **Crítico** | Caso de estudio + visita a operador que ya usa Zenet |
| ROI numérico claro | Alto | Calculadora interactiva en MXN |
| Funcionalidad del producto | Alto | Demo en sitio durante operación |
| Implementación y soporte | Alto | Tiempo de onboarding, soporte local en español |
| Compatibilidad con POS actual | Alto | Listado claro de integraciones |
| Validación externa | Alto | Endorsement de Plascencia, Palazuelos, Murguía cuando aplique |
| Pricing transparente | Medio-alto | Idealmente publicado |

**Triggers de salida hacia 3.5:**
- Shortlist se reduce a 1-2 candidates.
- Buying committee alineado (al menos: dueño + gerente, idealmente + contador).
- Confianza en el vendor pasa umbral de "vamos a probar".
- Trigger frecuente: piloto de 30-60 días en 1 sucursal aceptado por ambos lados.

**Friction (cross-ref doc 03 §5):**
- 6 clusters de barreras de adopción aplican aquí en pleno (Query 5):
  - Switching costs reales (training, integration, data migration).
  - Cognitive: complexity, choice paralysis, distrust.
  - Time-availability paradox: 16+ hrs/sem en admin tasks deja poco tiempo para evaluación rigurosa.
  - Identity: spreadsheet attachment, self-efficacy threat, control loss aversion.
- Trust hierarchy: peer > CANIRAC > vendors. Sin validación peer, el cycle se complica.

**Métricas:**
- SQL conversion rate (lead → qualified opportunity).
- Demo-to-pilot ratio.
- Demo-to-close ratio.
- Touchpoints típicos antes de cierre: 7-15 (doc 05 §5.4).

### 3.5 Decisión

**Descripción:** el operador (con su buying committee) toma decisión final. Firma contrato. Compromete pago. Activa onboarding.

**Duración típica:** 2-6 semanas adicionales tras la primera demo seria (doc 05 §5.5).

**Estado emocional:** Phase 4 (chronic survival) — la decisión de actuar ANTES de Phase 5 (decision point del bifurcation entre persistir o cerrar). Comprar Zenet es elegir persistir con sistema, en vez de persistir con esfuerzo o cerrar.

**Estado cognitivo:**
- Risk assessment final: "¿qué pasa si no funciona?".
- Commitment psychological: nombrar internamente que "esto va a cambiar".
- Anticipación de implementación: imagina cómo va a comunicárselo al equipo.

**Comportamiento observable:**
- Negociación de contrato.
- Internal alignment final con gerente, contador, chef.
- Firma de contrato + pago inicial.
- Acuerdo de plan de implementación (típicamente: piloto 1 sucursal → rollout multi-sucursal en 30-60 días).

**Canales activos:**
- Direct sales engagement final.
- Financial review con contador externo.
- Partnership review con socio si aplica.
- Cross-stakeholder kickoff call.

**Quiénes participan en la decisión final (doc 05 §5.5):**

| Rol | Función | Cómo se involucra |
|---|---|---|
| Dueño-operador | Decisión final, aprobación presupuesto | Demo + visita comparativa + ROI |
| Gerente operativo | Validación operativa | Sesión técnica con sales engineer / fundador |
| Contador externo | Validación financiera | Email/llamada con materiales financieros |
| Chef ejecutivo (en restaurantes con cocina compleja) | Validación operativa de cocina | Demo con foco en módulos receta/inventario |

**Triggers de salida hacia 3.6:**
- Contrato firmado + pago confirmado.
- Onboarding scheduled.
- Champion designado internamente (típicamente gerente operativo).

**Friction:**
- Cluster 4 identity barriers (doc 03 §5.6): self-efficacy threat — al firmar implícitamente admite "lo que tenía no era suficiente".
- Cluster 1 switching costs concretos: el operador realiza el costo de transición que hasta ahora era abstracto.
- Conflicto de socios o decisor no claro (anti-perfil 4 de doc 05 §6.2): puede stallear la decisión indefinidamente.
- Contador externo conservador como gatekeeper (anti-perfil 6).

**Métricas:**
- Close rate (qualified opportunity → closed-won).
- Deal size promedio.
- Time-to-close.
- Pricing acceptance rate sin descuento.

### 3.6 Onboarding (días 1-30 post-compra)

> ℹ️ **Estado de evidencia post-triangulación (Query 1, 2026-05-06):** la fase se reforzó significativamente con benchmarks de vendors restaurant SaaS (Nory, MarginEdge, MarketMan, Soft Restaurant Mexico), benchmarks SaaS generales, y research académica. El gap declarado por la propia investigación: **no existe data Mexico-específica de onboarding completion rates en restaurant BOH SaaS**. Los benchmarks US/EU se aplican como **upper-bound** — operadores mexicanos probablemente underperform dado el contexto de digital maturity.

> ⚠️ **Caveat estructural Fase 1 — POS data exchange (2026-05-07):** los benchmarks importados (Nory, MarginEdge, etc.) asumen **API integration con POS** como baseline. **Zenet Fase 1 NO tiene API integration con POS** — los POS del mercado mexicano no exponen APIs estándar todavía. La conexión Zenet ↔ POS en Fase 1 es **batch upload manual del operador** (export CSV/Excel/PDF del POS → upload a Zenet, idealmente diario). Las menciones a "POS integration" en las sub-secciones siguientes se refieren a **este flujo batch upload**, NO a API. Esto altera material del Tier 1 first value, los stall points y las compression interventions — detalle en §3.6.7 NEW.

**Descripción:** primera fase post-compra. Setup de cuenta, capacitación inicial del equipo, migración de data desde Excel/libretas, primer setup operativo. El operador y su equipo están aprendiendo a usar Zenet.

**Duración típica:** 30 días para setup core; 60-90 días para integración completa multi-sucursal. Benchmark cross-vendor: most purpose-built BOH platforms (MarketMan, StockTake Online, Nory) target full go-live within 3-5 weeks; value realization at 60-90 días. Soft Restaurant Mexico: 12-16 horas para basic implementation. `[Benchmark sectorial / Perplexity 2026-05-06]`

**Estado emocional:** salida tentativa de Phase 4 (chronic survival) hacia esperanza. **Estado vulnerable**: el operador comprometió capital y bandwidth, está esperando ver si funciona. Cualquier setback se siente desproporcionadamente alto.

**Estado cognitivo:**
- Apprehension sobre aceptación del staff.
- "Esperando ver si funciona" — tentative validation.
- Comparación constante con lo que tenía antes.
- Sensibilidad alta a fricción operativa.

**Comportamiento observable:**
- Asiste a sesiones de capacitación (1-3 sesiones in-situ típicamente).
- Input inicial de data (recetas, inventario, proveedores).
- Primeros usos del sistema — frecuentemente con su gerente operativo como co-piloto.
- Feedback frecuente al equipo de customer success.
- Resistencia ocasional del staff que el operador navega activamente.

**Canales activos:**
- Customer success team de Zenet (alta intensidad).
- Materiales de training.
- In-product flows de onboarding.
- Internal team interactions.

#### 3.6.1 Arco canónico de 4 fases — 90 días

> Estructura de 4 fases sintetizada de vendor frameworks (Nory, MarginEdge, MarketMan, Soft Restaurant). `[Benchmark sectorial / Perplexity 2026-05-06]`

**Fase 1 — Configuración y fundación (Días 1-7):**
- Día 1: kickoff call con onboarding manager dedicado.
- **POS data exchange setup (Zenet Fase 1, NO API):** identificar qué reportes/exports el POS del operador puede generar (sales totals diarios CSV, ticket detail Excel, reporte PDF), definir formato preferred, training del operador o gerente en el flujo batch upload diario hacia Zenet. Detalle de modos en §3.6.7.
- Account/user setup, permisos y roles asignados.
- Preliminary data audit: revisión de Excel/papel/recetas existentes.
- **Mexico-Soft Restaurant:** instalación base 1-2 horas; basic implementation 12-16 horas según operación.
- **Fin de Semana 1:** primer batch upload de POS data exitoso + sales data primer día visible en Zenet + supplier records entered + first inventory count sheet for top-20 high-cost items + admin staff trained on basic navigation. **Nota:** el equivalent al "POS integration live" de Nory aquí es "operador completó su primer ciclo manual upload sin asistencia" — milestone behavioral, NO técnico.

**Fase 2 — Recipe library y baseline costing (Semanas 2-4 / Mes 1):**
- **El highest-effort phase y el most common stall point** (cf. §3.6.4).
- Recipe entry: ingredient lists, yield percentages, portion standards.
- Supplier price linkage a invoices reales.
- First real-vs-theoretical food cost comparison generado.
- MarginEdge: 30 días estructurados con kick-off + status calls + live training.
- MarketMan: 2-4 semanas para single location.
- **Key activation milestone:** primera vez que el operador ve un live plate cost calculado con precios actuales — el "aha moment" de BOH SaaS. Operadores que llegan aquí en Mes 1 tienen substantially higher 90-day retention.

**Fase 3 — Integración operativa (Semanas 5-8 / Mes 2):**
- Routine de inventory counting establecida (semanal o quincenal).
- Ordering workflow: purchase orders por plataforma vs. WhatsApp a proveedores.
- Waste y spoilage logging.
- First meaningful variance report: actual vs. theoretical usage.
- Multi-location: completar configuración en pilot location; decision point para rollout (cf. §3.6.6).

**Fase 4 — Value realization y habit formation (Semanas 9-12 / Mes 3):**
- Operador independientemente corre weekly/monthly food cost reports.
- Recipe costing actualizado cuando cambian precios de proveedor.
- Plataforma embedded en weekly operational rhythm — sin requerir vendor support para tasks rutinarias.
- Quarterly refresher training scheduled.

#### 3.6.2 Contexto Mexico-específico — modelo distribuidor

`[Benchmark sectorial / Perplexity 2026-05-06]` — la dominante Soft Restaurant (National Soft) estructura onboarding en México vía **distribuidores regionales autorizados**:

- **SYCA Consultores** — distribuidor Soft Restaurant en Baja California (Tijuana específicamente). 10+ años de experiencia implementando.
- **Entropía Digital Tijuana** — distribuidor autorizado, 30 años de experiencia en sector restaurantero.

**Implicación operativa:** la pace de onboarding depende heavily on local distributor capacity y operator engagement, no solo del platform design. SYCA estructura proceso 3-step: diagnóstico → joint solution planning → growth implementation. **Capacitación es servicio ongoing, no evento one-time** — el modelo de Soft Restaurant Academy (National Soft) entrega training como micro-lecciones.

**Implicación para Zenet GTM:** el modelo "consultor partner como extensión Zenet" del workspace `06-estructura-y-ecosistema.md` §14 tiene precedente directo en cómo Soft Restaurant ya opera el mercado mexicano. El distribuidor local **es la unidad de onboarding**, no Zenet centralizado.

#### 3.6.3 Completion rate benchmarks

> **Caveat crítico declarado por la propia investigación de Perplexity:** no existe completion rate data específica para restaurant BOH SaaS o para LATAM. Los benchmarks abajo son SaaS general — **upper-bound para Zenet en México**, ya que el baseline de digital literacy del operador objetivo es substancialmente menor que comparable US/Canada cohorts. Solo ~10% de restaurantes mexicanos usan algún software de management; 96.4% son micro/SME (INEGI); empresas mexicanas 30 puntos abajo del target de digital transformation declarado; solo 1% en "digital maturity". `[Benchmark sectorial / Perplexity 2026-05-06]`

| Benchmark | Cifra | Aplicabilidad para Zenet |
|---|---|---|
| Average SaaS onboarding checklist completion (Userpilot 2024 n=188) | 19.2% (mediana 10.1%) | Self-serve baseline — NO el modelo Zenet |
| B2B SaaS onboarding completion (Totango) | 40-60% | Range de modelo standard |
| Enterprise SaaS con assisted onboarding (Gainsight) | 70-90% | **Ceiling relevante para Zenet** dado modelo high-touch |
| Users abandoning product within first week | 75% | El "cliff" universal |
| Users who churn if no value in first week | 90% | Hace TTFV crítica |
| 3-step vs 7-step in-app tours completion | 72% vs 16% | Argumento por simplicidad de onboarding |
| Pre-structured vs structured onboarding (RetentionForge) | 60% → 87% | Phase-gating de milestones funciona |

**Aplicación para Zenet:** modelo high-touch operator-assisted onboarding (CS dedicado, milestones phased, in-person support) puede aspirar a 70-90% completion. Self-serve cae bajo 40%. Para el beachhead mexicano TJ con baseline de digital literacy menor, **expectativa realista probablemente 50-70% en etapa temprana**, escalable a 80%+ con maduración del playbook.

#### 3.6.4 Stall points documentados — friction concentrada

> Síntesis de vendor documentation (Nory, TRIS/R365, MarginEdge, SynergySuite), CS literature, operator forum evidence (r/restaurantowners), y EHL independent restaurateur study. `[Benchmark sectorial / Perplexity 2026-05-06]`

**Stall Point 1 — Recipe Library Entry Overwhelm (el #1 más documentado):**

Entrar la recipe library completa con yield percentages, sub-recipes, unit conversions es **el step most time-consuming y morale-draining**. Un restaurante con 60-80 menu items × 8-12 ingredients = **500-1,000 ingredient entries**. Operadores subestiman este scope al firmar.

Razones del stall: (a) operador no tiene single authoritative recipe source — recetas viven en cabezas de cocineros, paper notes y múltiples Excel files; (b) yield percentages requieren kitchen testing, no solo data entry; (c) la task no se siente operacionalmente urgente cuando hay mesas que rotar.

> **Verbatim operador (Kladana case study):** *"Before Kladana, we were doing everything in Excel. All the stock and production records were maintained in spreadsheets. We weren't able to arrange timely updates."* `[Benchmark sectorial / Perplexity 2026-05-06]`

**Stall Point 2 — "Dual-running" friction (shadow Excel):**

Operadores con años de Excel/papel enfrentan productivity dip durante transición. Sistema nuevo toma más tiempo en short run. Cuando llega rush, regresan a métodos familiares.

> **Verbatim operador r/restaurantowners 2025:** *"I don't see the benefit of incorporating technology, as it wouldn't save me any time and might actually create more complications."*

> **Verbatim operador r/restaurantowners 2025:** *"Our KPI is an Excel spreadsheet. We track data from three platforms that don't talk to each other so I input the data at the end of each night."*

Este "shadow Excel" behavior es el **single most common predictor of eventual abandonment** — el sistema paralelo nunca se retira.

**Stall Point 3 — Sustainability del ritual diario de POS upload (refinado para Zenet Fase 1, NO API):**

> **Reformulado 2026-05-07.** El stall point original del benchmark cross-vendor ("POS integration mapping failures") asume API. Para Zenet Fase 1, el stall equivalent es estructuralmente distinto: **el operador no sostiene el ritual diario de export+upload del POS hacia Zenet.**

Manifestación: primer 1-2 semanas el operador o gerente sube data del POS diariamente. A partir de Semana 3, comienza a haber gaps — un día se olvidaron, dos días se olvidaron, y para Semana 5 el último upload tiene 10 días de antigüedad. Sin POS data fresca, las cost reports se vuelven meaningless porque comparan inventario actual contra ventas viejas. Operador pierde confianza en la data y deja de revisar reports.

> **Adaptación del insight TRIS/R365 al contexto Zenet manual:** *"Un upload de POS rezagado significa que tu Daily Sales Summary requiere comparison manual. Over time, esto crea data integrity issues en P&L, labor reports e inventario."*

**Por qué pasa específicamente con Zenet Fase 1:**
- Sin API integration, el operador es responsable de un ritual diario de export+upload (5-15 min según mode — ver §3.6.7).
- El operador en consolidación 2-3 sucursales tiene 30-45 minutos disponibles, no horas. Cualquier ritual >10 min/día está en riesgo.
- Cuando el upload se rezaga, las consequencias no son inmediatas — el operador no se da cuenta del data drift hasta que algo no cuadra en cierre mensual.

**Intervention para Zenet:** automated reminders + simplest possible upload flow + tolerar formats imperfectos (CSV, Excel, PDF, foto) en vez de exigir uno solo + diseñar fallback para que el gerente operativo o admin lo haga si el dueño se atrasa.

**Cuando llegue API integration en Fase 2+:** este stall point se transforma en el original (POS integration mapping failures) — distinto problema, distinta intervention.

**Stall Point 4 — Staff training gaps + team resistance:**

Industry-wide staff turnover ~79.6%. El equipo entrenado durante onboarding incluye gente que se va dentro de 110 días. Nuevos hires heredan sistema incompletamente configurado y no training. Cycle de perpetua data entry de baja calidad que degrada el platform value.

Staff resistance compounds: front-line team members no entienden el por qué del log de waste o el counting nuevo. Sin clear communication of "why", revierten a shortcuts.

**Stall Point 5 — Owner bandwidth + priority competition:**

Independientes en consolidation phase manejan simultáneamente hiring, supplier relationships, second-location ramp, y frecuentemente trabajan turnos. Tech implementation **compite directamente con survival tasks**. EHL European study confirma 3 primary adoption barriers: cost, priority, strategy.

**Stall Point 6 — Data quality + dirty migration:**

Excel sources tienen inconsistent naming ("tomato", "tomate", "tom."), duplicate entries, outdated recipes, sin single authoritative source. Migrar sin limpiar primero importa los errores al sistema nuevo, produciendo cost reports misleading que erosionan trust en la plataforma.

> **Insight Nory onboarding doc:** *"Don't wait 'til spring for that spring clean. A change of systems is the perfect time to clean house. This proactive cleanup not only improves data accuracy and integrity but also has a knock-on impact on making the system more usable for your team."*

**Stall Point 7 — Onboarding como IT project vs. operational change:**

Multi-unit operators frecuentemente tratan implementación como back-office config task, no como operational transformation. Cuando dueño o controller lidera setup pero floor managers están excluded, location-level adoption falla: inventory counts incorrectos, waste no logged, sistema nunca refleja realidad.

#### 3.6.5 Predictors de éxito vs. fracaso

> Tabla cross-fuente. `[Benchmark sectorial / Perplexity 2026-05-06]`

**Operator profile traits que predicen éxito:**

| Trait | Direction | Evidencia |
|---|---|---|
| Prior software experience (cualquier dominio) | ✅ | Soft Restaurant: "much easier when operator has tech experience" |
| Dedicated non-owner manager | ✅ | Operador no es sole implementer |
| Committed to leaving Excel | ✅ | Operadores que retiran completo el parallel system 2-4x más probables de sustain usage |
| Recently opened 2nd/3rd location | ✅ | **Pain agudo + motivación alineada** — directamente describe el beachhead Zenet |
| Single-person operation (owner = chef = manager) | ❌ | Sin bandwidth para recipe entry o training |
| Technically resistant team o high churn staff | ❌ | Training investment destruido por turnover |
| Technology not part of stated business strategy | ❌ | EHL study: top adoption barrier |
| Low digital maturity (first software adoption ever) | ❌ | **Relevante para México** dado 10% software adoption baseline |

**Organizational behaviors que predicen éxito:**

- Asigna **"champion"** en cada location: manager o lead que owns daily system use.
- **Limpia data antes de migration:** audita y estandariza Excel/paper records antes de importar.
- **Completa first inventory count en primeras 2 semanas post go-live:** strongest early behavioral predictor.
- **Logs in ≥3 veces/semana en first 30 días:** declining login frequency es **el single strongest leading churn indicator** (ProfitWell, 23,000 SaaS companies).
- **Completa primer ciclo de POS upload exitoso antes de go-live** (no post-launch). Para Zenet Fase 1: validar que el formato export del POS es legible por Zenet y que el operador o gerente puede ejecutar el upload sin asistencia ya en kickoff session.
- **Involves floor managers en training**, no solo owners/controllers.

**Customer success engagement patterns que predicen éxito:**

- **High-touch first 30 days** con dedicated onboarding manager (industry background preferred).
- **Phase-gated onboarding** mejora completion ~60% → ~87%.
- **Proactive CS at Day 7 y Day 21** — intervenir antes de que el operador se vaya silencioso predice save rates >35%.
- **On-site o video kickoff** (no solo email) — restaurant buyers cierran e implementan más rápido con engagement sincrónico.
- **ROI framing en first session** — operadores que ven specific dollar impact (food cost %, waste MXN) en la primera sesión engage más rápido que con feature lists.

**Failure predictors documentados:**

- No login ni actividad en 72 horas post-account creation → **90% churn probability**.
- Recipe library <30% complete at Day 30 → typically abandoned without intervention.
- No primer POS upload exitoso en Week 1 → data nunca empieza a fluir, operador no ve valor. **Para Zenet Fase 1 (manual batch upload):** equivalente más concreto = no upload exitoso del primer día de ventas para fin de Día 7.
- First support ticket es sobre POS integration o data errors (no user questions) → trust dañado early.
- Owner asistió kickoff pero no manager assigned → implementation orphaned.

#### 3.6.6 Time investment esperado del operador y equipo

`[Benchmark sectorial / Perplexity 2026-05-06]` — caveat: no Mexico-specific time investment data; cifras US/global con ajustes.

| Phase | Tiempo del operador | Notas |
|---|---|---|
| Setup inicial (Días 1-7) | 8-16 horas | Soft Restaurant Mexico: 12-16 horas para basic |
| Recipe library entry (Semanas 2-4) | **20-40+ horas** | El más variable y más subestimado. Reducible a 10-15 con CSV templates si Excel está bien organizado |
| Training cadence | Variable | MarginEdge: 30 días estructurados con calls + video. MarketMan: quarterly refreshers + micro-learning. Nory: 4 milestones phased |
| Manager time vs owner time | +30-50% overhead first 4-6 weeks | Manager promedio gasta ~10 hrs/sem en training/admin; implementation agrega temporary overhead |
| Staff training | 15-30 minutos por shift function | **Strongly favorable** vs marathon onboarding days. Soft Restaurant Academy delivera micro-lessons por esto |

**Ongoing weekly time post-onboarding:** operadores que completan exitosamente típicamente gastan 2-4 hrs/semana en inventory counts, PO review, report checking — **vs. 5-10 hrs/semana en manual scheduling y ordering pre-implementation**. Net time savings claim varía: Nory claims 100+ horas/mes saved per location; Chowly industry estimates 100+ horas/año solo en scheduling.

**Triggers de salida hacia 3.7:**
- Primer workflow usable activo en al menos 1 sucursal (típicamente: inventario digital + recetas estandarizadas funcionando).
- Equipo capacitado lo suficiente para usar sin intervención constante de Zenet o del dueño.
- **Crítico (Perplexity):** primera receta digitalizada con plate cost real visible al operador → "aha moment" detonador de adopción.

**Friction (alta densidad de friction en esta fase) — refinada con Query 1:**
- Time-availability paradox aplicado a onboarding (doc 03 §5.5): el operador tiene 30-45 minutos disponibles, no 4 horas.
- Resistance del staff que el operador anticipó pero subestima.
- Data migration burden: las recetas, los inventarios, los proveedores — todo tiene que ser traducido a estructura del sistema. **Pero el problema real es estandarización, no técnico CSV import.**
- Self-efficacy threat se reactiva: cada error en el setup se interpreta como "ven, esto no era para mí".
- 7 stall points específicos documentados en §3.6.4.

**Métricas críticas (etapa 3 + del workspace) — con benchmarks externos:**
- Time-to-first-action — **target: login dentro de 72 horas** (90% churn risk si no).
- Onboarding milestone completion rate — **target: 70%+ aspiración**, con realismo Mexican baseline.
- Día N del primer login del usuario gerente.
- Día N de primera receta digitalizada — **target: Día 30, recipe library ≥30% completa**.
- Día N de primer inventario reconciliado — **target: primeras 2 semanas post go-live**.
- Día N del primer upload exitoso de POS data (Zenet Fase 1 specific) — **target: Día 7**.
- Login frequency primera 30 días — **target: ≥3/semana**.
- **Frecuencia de POS upload primeras 4 semanas (Zenet Fase 1 specific) — target: ≥5 uploads/semana**, declining frequency = leading churn signal específico para modelo manual.
- NPS al cierre de onboarding.

#### 3.6.7 Realidad del POS data exchange en Zenet Fase 1 — modos y trade-offs

> **Sub-sección incorporada 2026-05-07** tras feedback del fundador. Aclara la doctrina específica para Zenet Fase 1.

**Restricción estructural:** los POS dominantes en el mercado mexicano restaurantero (SoftRestaurant, PoloTab, Parrot, Fudo, Clip) **no exponen APIs estándar accesibles para integration** en el momento de redacción. Zenet Fase 1 opera bajo esta restricción; API integration es objetivo de Fase 2+ cuando los POS evolucionen o cuando Zenet construya partnerships específicas con vendors.

**Tres modos posibles de POS data exchange para Zenet Fase 1:**

| Modo | Mecanismo | UX time/día | Sustainability | Recomendación |
|---|---|---|---|---|
| **Mode 1 — Export-Upload (preferred)** | Operador o gerente extrae reporte de ventas del POS (CSV, Excel o PDF — formato TBD por POS), sube a Zenet | 5-10 min/día si export structured; 10-20 min si requiere review/cleanup | Alta si flow es <10 min/día y bien diseñado | **Primary mode** — apuesta principal |
| **Mode 2 — Captura manual** | Operador teclea totales de ventas diarias directamente en Zenet | 15-30 min/día según granularidad | **Baja** — operador abandona tras 2-3 semanas | Solo fallback de emergencia |
| **Mode 3 — Foto del reporte POS** | Operador toma foto del reporte de cierre de turno y la sube; OCR extrae datos | 1-2 min/día (si OCR robusto) o 10+ (si requiere correction manual) | Variable — depende fuertemente de OCR quality | Ideal como **convenience fallback** para operadores en turno tardío |

**Implicaciones por modo:**

**Mode 1 (preferred):**
- Tier 1 first value (POS data flowing en Zenet) achievable **Día 7-14** si formato del POS está supported y operador completa primer upload exitoso en kickoff.
- Sustainability depende de: (a) simplicidad del export del POS (algunos requieren navegar 3-4 menus); (b) reliability del upload flow en Zenet; (c) reminder cadence cuando el operador se rezaga.
- **Producto requirement crítico:** Zenet debe support los formatos export de los **5-7 POS dominantes** del beachhead (SoftRestaurant, PoloTab, Parrot, Fudo, Clip, mínimo). Sin esto, el operador queda en Mode 2 (suboptimal).

**Mode 2 (fallback):**
- Solo viable si el operador es highly motivated y el volumen es bajo (1 sucursal pequeña).
- Para 2-3 location operator del beachhead: structurally unsustainable. Diseñar el producto para que Mode 2 NO sea el default.

**Mode 3 (convenience):**
- Si OCR robusto en Zenet: puede ser el **mode más usado por operadores** dado que es el más rápido.
- Riesgo: si OCR mal calibrado, operador pierde confianza tras 2-3 errores y abandona el flow.
- **Producto requirement crítico:** OCR debe operar a >95% accuracy en los formatos PDF/foto de los POS principales antes de promoverlo activamente.

**Implicación TTFV — ajuste a benchmarks externos heredados:**

Los benchmarks importados de Query 1 + Query 2 asumen API integration. Para Zenet Fase 1 con Mode 1 bien implementado:

| Tier (de §3.7.1) | Definición | Benchmark MarginEdge (API) | **Zenet Fase 1 (Mode 1 manual upload)** |
|---|---|---|---|
| Tier 1 (system connection value) | POS data flowing + first daily P&L visible | Día 7 | **Día 7-14** (assuming Mode 1; +1-2 weeks vs API) |
| Tier 2 (first analytical output) | First cost report generado | Día 14-28 | **Día 21-45** (POS data + recipes + inventory cycle todos manuales) |
| Tier 3 (first operational decision) | Operator changes purchasing/pricing por platform data | Mes 1-2 | **Mes 1.5-3** |
| Tier 4 (measured ROI) | Quantifiable improvement | Mes 2-3 | **Mes 3-4** |

**Implicación crítica:** Zenet Fase 1 está estructuralmente más cerca del **upper end** del retention zone (TTFV 30-60 días = 88% retención) que del optimal (<14 días = 89% retención). **Esto es un trade-off conocido de la Fase 1**, no un fallo de diseño.

**Plan de evolution declarado:**
- **Fase 1 (actual):** batch upload Modes 1-3, con Mode 1 como primary y Mode 3 como convenience fallback cuando OCR madure.
- **Fase 2+ (cuando emerja):** API integration con POS dominantes vía partnerships o cuando los POS expongan APIs públicas. Esto comprime TTFV de Tier 1 hacia el benchmark cross-vendor (Día 7).
- **Implicación competitiva:** mientras Zenet esté en Fase 1, vendors competidores con API integration ya disponible (MarginEdge tipo, no presentes activamente en MX todavía pero llegarán) tendrán ventaja en TTFV. Zenet debe compensar con depth de interpretación operativa + acompañamiento + lenguaje del operador (cf. doc 03 §6 implicaciones para mensajería).

### 3.7 Activación — first value moment

> ℹ️ **Estado de evidencia post-triangulación (Query 2, 2026-05-06):** la fase se reforzó significativamente con benchmarks cuantitativos de TTFV-retention correlation, taxonomía de 4 tiers de "first value" para BOH SaaS, variance por operator profile, y datos específicos MarginEdge (recipe entry, inventory count timing). **Crítico:** no existe data TTFV Mexico-específica para restaurant BOH SaaS — para el beachhead Zenet, expectativa realista es 28-45 días bajo condiciones normales, 60-90+ días con paper/no-system migration o bandwidth constraints. La frecuente cifra cross-SaaS "1 día 12 horas" NO aplica — es para product-led tools, no BOH.

**Descripción:** el momento donde el operador o su equipo experimenta primer beneficio tangible. **Trigger crítico para retención** — la correlación TTFV ↔ 12-month retention es la más documentada cross-fuentes en research SaaS post-PMF.

**Duración típica para el beachhead Zenet:**

| Profile del operador beachhead | TTFV esperado | Retención 12-mes esperada (proxy) |
|---|---|---|
| Operador con prior software experience + organized Excel + dedicated manager | 14-28 días | ~89% (zona high-retention) |
| Operador con disorganized Excel + manager dedicado | 28-45 días | ~88% (zona buena) |
| Operador solo + organized Excel | 30-60 días | ~88% |
| Operador con paper/no-system + dedicated manager | 45-75 días | ~79-88% |
| Operador solo + paper/no-system + high staff turnover | 60-90+ días | ~34-79% (zona riesgo) |

**Implicación crítica:** dado que ~90% de restaurantes mexicanos no usan software de management (`[Benchmark sectorial / Perplexity 2026-05-06]`), una porción significativa del beachhead cae en el segundo half de la tabla — **las primeras 5-10 conversaciones con design partners deben validar dónde caen los específicamente en Tijuana**.

**Estado emocional:** salida de Phase 4 hacia agencia recuperada. El operador empieza a sentir que recuperó control sobre algo que se sentía perdido. Sensación de "esto está sirviendo".

**Estado cognitivo:**
- Confirmación: "OK, valió la pena".
- Trust en el sistema empieza a consolidarse.
- Imagina expandir a más sucursales, módulos, casos de uso.

**Comportamiento observable:**
- Profundización en uso del producto (más allá del workflow inicial).
- Equipo empieza a usar autónomamente.
- Operador empieza a delegar tareas que antes hacía manualmente.
- Aparecen primeros decisions tomadas con system data — no solo con intuición.

**Canales activos:**
- In-product engagement.
- Customer success check-ins (cadencia mensual o quincenal).
- Internal team daily use.

#### 3.7.1 Taxonomía de 4 tiers de "first value" para BOH SaaS

> Definición operativa importada de Query 2. **NO existe estándar único de TTFV para BOH SaaS** — Zenet debe declarar internamente cuál tier define su "activation moment" oficial. `[Benchmark sectorial / Perplexity 2026-05-06]`

**Tier 1 — System connection value (Días 1-7 con API; Días 7-14 para Zenet Fase 1 manual):**
- La plataforma está técnicamente live y pulling real data.
- Típicamente (modelo API benchmark): POS integration active, first invoice processed, first daily P&L visible.
- **MarginEdge Phase 1 milestone:** *"real-time food cost visibility unlocked"* al fin de Semana 1 (asume API).
- **Para Zenet Fase 1 (manual batch upload — ver §3.6.7):** equivalent es "primer ciclo de POS upload exitoso + first daily P&L visible en Zenet". Achievable Día 7-14 con Mode 1 bien implementado, +1-2 semanas vs API benchmark. Detalle de modos en §3.6.7.
- **Caveat:** es un *activity milestone*, no un *outcome milestone*. El operador no ha actuado sobre la data todavía.
- Es el más vendor-defined porque es el más rápido y measurable.

**Tier 2 — First analytical output (Semanas 2-4):**
- Operador genera su primer meaningful cost report: food cost variance, actual-vs-theoretical comparison, o live plate cost.
- Requiere recipe entry + al menos un inventory count cycle.
- **MarginEdge Phase 2 target:** Weeks 2-4.
- **El más operationally meaningful "first value" para BOH costing/inventory.**

**Tier 3 — First operational decision informed by data (Mes 1-2):**
- Operador cambia una purchasing decision, ajusta menu price, identifica waste issue *porque* del platform data.
- **El genuine outcome-based "first value"** — pero difícil de atribuir y rara vez tracked en vendor docs.

**Tier 4 — Measured ROI (Mes 2-3):**
- Mejora cuantificable: food cost % down, labor hours reduced, admin time saved.
- MarketMan training ROI: *"food cost % reductions una vez recipe costing y variance alerts se usan consistentemente — operadores ven ROI within months"* — deliberadamente vague.

**Recomendación para Zenet:** declarar internamente **Tier 2 como el "official activation moment"** — alineado con MarginEdge model. Tier 1 es prerrequisito; Tier 3-4 son consecuencias. Tier 2 es el momento donde el operador VE valor por primera vez.

#### 3.7.2 TTFV-Retention Correlation — la evidencia más load-bearing

> Tabla cross-fuente. La correlación TTFV ↔ 12-month retention es el data point más documentado y consistente. `[Benchmark sectorial / Perplexity 2026-05-06]`

| TTFV Range | 12-Month Retention | Source / Sample |
|---|---|---|
| <14 días | **89%** | User Intuition (10,000+ customer interviews) + cohort confirmation |
| <30 días | **96%** (first-year) | RetentionForge TTV Framework |
| 30-60 días | **88%** (first-year) | RetentionForge |
| 60-90 días | **79%** (first-year) | RetentionForge |
| >30 días | **34%** | User Intuition |
| Activate within 3 días | 90% más probable de continue using product | SaasFactor |
| Achieve value within 30 días | **2.3x renewal likelihood** | Tom Parker CS |
| TTFV <14 días → expansion | +47% expansion revenue | Tom Parker |
| TTFV <24 hr → NRR | +18% NRR | OpenView Partners |

**El stark finding:** spread entre <14 días (89% retención) y >30 días (34% retención) es enorme. Para BOH SaaS donde "first value" realísticamente toma 14-28 días bajo good conditions y 45-90+ días bajo difficult conditions, **la inversión más apalancada en producto/CS es comprimir recipe entry y first inventory cycle al primer 14 días**.

**4x churn ratio pre/post-90 días (12% mensual vs. 3% mensual):** confirma que operadores que sobreviven primeros 90 días han construido switching costs (embedded routines, team training, data history) que hacen churn improbable. **El 90-day window es el defining retention battleground.**

**70% de SaaS customers churn dentro de 90 días por poor onboarding** (SaasFactor). El 90-day window NO es opcional — es la hipotenusa entre TTFV y retention.

#### 3.7.3 Variance por operator profile

> Inferencia direccional sintetizada de operator profile evidence + SaaS CS practitioner analysis + platform documentation. **No published peer-reviewed study compara TTFV por operator profile específicamente para restaurant BOH SaaS.** `[Benchmark sectorial / Perplexity 2026-05-06]`

**Solo owner-operator vs. owner con management team:**

| Profile factor | TTFV impact | Mecanismo |
|---|---|---|
| Solo owner sin dedicated manager | **+2-4 semanas** | Owner implementa mientras corre turnos; recipe entry stalls durante service |
| Owner + dedicated manager | **Baseline (best case)** | Manager absorbe implementation tasks durante non-peak hours |
| Owner con prior software experience | **-30-50% TTFV** | Soft Restaurant MX: *"much easier when operator has tech experience"* |
| Staff turnover durante onboarding | **+1-3 semanas** | Training investment destruido; platform underpopulated |

**Single-location vs. multi-location (2-3 locations):**

Multi-location no es simple double — multiplica complexity en varios ejes:
- Recipe library scope: si menus difieren, recipe entry scales por location.
- POS integration complexity: diferentes POS por location requieren separate mapping.
- User management: más staff a entrenar.
- Supplier variation: cada location puede tener proveedores locales con pricing distinto.

**Multiplicador estimado:** multi-location TTFV es **1.5x-2.5x** longer que single-location cuando se corre simultáneo, vs. **1.0x-1.3x** longer con pilot-first + standardized template.

**Manual/paper prior tech vs. digitally experienced — el highest-variance dimension para México:**

- **Excel organizado:** TTFV en low end del range. Bottleneck = standardization/mapping.
- **Excel desorganizado multi-file:** TTFV +2-4 semanas vs. organized.
- **Paper / no-system:** TTFV efectivo **60-90 días** antes de first reliable cost report. Requiere "recipe audit" phase no típicamente incluido en vendor onboarding timelines.

**Implicación para beachhead Zenet:** dado que ~90% de restaurantes mexicanos no usan software de management, gran parte del segmento cae en categoría paper/no-system o disorganized Excel. **TTFV expectations deben ajustarse upward por ~30-50% vs. US benchmarks.**

#### 3.7.4 Compression interventions documentadas

`[Benchmark sectorial / Perplexity 2026-05-06]` — interventions con evidencia de effectiveness:

**Customer Success interventions:**
- **Phase-gated onboarding:** 60% → 87% completion.
- **Proactive CS at Days 7 + 21:** 50% reduction in manual CS workload + save rates >35%.
- **CSM compensation tied to TTFV:** alinea incentives con velocity y calidad.
- **Role-based / persona-based onboarding flows:** activation +30-50% vs. generic.
- **Reducing onboarding steps by 30%:** completion rates +50%.
- **Documented case study (CirclStdio):** TTFV cut 14 → 7 días → trial-to-paid 8% → 13%, support tickets -35%.

**Product design choices:**
- **Pre-populated templates / CSV import para recipes:** elimina blank-form problem.
- **Automated invoice processing (MarginEdge model):** invoice processing en 24-48 horas crea immediate data flow without operator effort.
- **POS integration pre-mapped (modelo API benchmark):** cada día de POS integration delayed = día de no data flow. **Para Zenet Fase 1 (manual batch upload):** equivalente = formato export validado en kickoff + primer upload exitoso antes de cerrar Día 1 + reminder cadence diseñada para sostener el ritual diario.
- **"Quick win" first session:** entregar visible result (incluso estimated cost range) en first session crea psychological commitment antes de harder setup work.
- **Interactive guidance over documentation:** users retain más con learn-by-doing — tooltip/walkthrough outperforms written tutorials para low-digital-literacy operators.

**Operator characteristics que aceleran:**
- Prior software experience (cualquier dominio).
- Designated internal implementation champion (NO el owner).
- Organized pre-existing recipe data (incluso imperfect Excel > paper).
- Annual contract vs. month-to-month: psychological commitment to complete the investment.

#### 3.7.5 Datos MarginEdge específicos para granularity

> Las métricas más concretas disponibles sobre time-per-task en BOH onboarding:

- **Recipe entry:** 10-15 minutos por recipe. Para 60-80 menu items = 10-20 horas solo de recipe entry.
- **First inventory count:** ~45 minutos cada uno; **se necesitan dos counts** para baseline confiable = 90 minutos primer ciclo.
- **Phase 1 TTFV target:** Week 1 — POS + invoices connected = "real-time food cost visibility unlocked".
- **MarginEdge full arc:** 90 días (Phase 1: Week 1; Phase 2: Weeks 2-4; Phase 3: Months 2-3).

**Benchmark Zenet realista para target segment beachhead — ajustado por restricción manual batch upload (Zenet Fase 1, ver §3.6.7):**
- Tier 1 (primer upload POS exitoso + invoice + daily P&L visible): **Día 7-14** (vs. MarginEdge API 7 días — el delta viene de doble factor: baseline digital MX + manual batch upload).
- Tier 2 (first analytical output): **Día 21-45** (vs. MarginEdge 14-28 días — los recipe entry + inventory cycle ya manuales se compounded por POS data manual).
- Tier 3 (first operational decision): **Mes 1.5-3**.
- Tier 4 (measured ROI): **Mes 3-4**.

**Implicación crítica para retention forecast:** Zenet Fase 1 está más cerca del Tier 2 = 30-45 días — eso pone al operador típico en **zona retención 88% (TTV 30-60 días, RetentionForge framework)** en vez de la zona óptima 96% (<30 días). Es un trade-off conocido y aceptable de la Fase 1; cuando llegue API integration en Fase 2+, Zenet puede aspirar a la zona alta. Mientras tanto, **CS team debe operar con TTV-30-45 días como baseline realista**, NO 14 días.

**Triggers de salida hacia 3.8:**
- Primer measurable improvement (lower waste, faster reconciliation, hours recovered, etc.).
- Equipo en uso autónomo sostenido.
- Operador articula valor a peer o stakeholder externo.
- **Crítico (Query 2):** TTFV achieved en Tier 2 antes de Día 30 → predicción de retención fuerte.

**Friction:**
- Si TTFV se extiende >90 días: riesgo de churn significativo. El operador puede perder la fe antes del momento de validación. **Cifra documentada:** TTFV >30 días → 34% retention (vs. 89% en <14 días).
- Si el primer value no es proporcional al esfuerzo de onboarding: deception, frustración, reconsideration.
- 70% de SaaS churn dentro de 90 días por poor onboarding — el window es el todo.

**Métricas con benchmarks concretos:**
- **TTFV definido por tier** (Zenet declara cuál es su activation moment oficial — recomendación: Tier 2).
- TTFV target Tier 2: **<30 días** para zona high-retention.
- TTFV target Tier 1: **<14 días** para mantener momentum.
- NPS at activation.
- Feature usage breadth at activation — operadores que adoptan **3+ features** muestran 70% higher retention vs. single-feature users.
- Stickiness (DAU/MAU) post-activation.
- Login frequency primer 30 días — declining frequency es **#1 churn predictor** (ProfitWell, 23,000 SaaS companies — heredado de Query 1).

### 3.8 Adopción y maduración (3-12 meses)

**Descripción:** uso steady-state. El operador y su equipo usan Zenet diariamente. Profundidad de feature adoption crece. Hábito se consolida. Zenet pasa de ser "lo nuevo que estamos probando" a "cómo operamos".

**Duración típica:** 3-12 meses.

**Estado emocional:** post-rupture stabilization. El operador sale del modo crisis. Empieza a operar con calma, planeación, espacio para pensamiento estratégico que antes no tenía. **Identity reformation:** "soy operador con sistema", no "operador apagando incendios".

**Estado cognitivo:**
- Trust en el sistema sostenida.
- Exploración de features beyond core.
- Imagina próximas etapas: tercera sucursal, expansión de módulos, profesionalización.

**Comportamiento observable:**
- Uso diario sostenido.
- Equipo autosuficiente — el operador solo entra para decisiones.
- Exploración ocasional de features nuevas.
- Empieza a aparecer en eventos sectoriales con actitud distinta — más confianza, más autoridad.
- Conversaciones con peers cambian — ahora cuenta cómo opera, no solo cómo sufre.

**Canales activos:**
- In-product (uso diario).
- Periodic CS reviews (trimestrales típicamente).
- Peer community emerging (otros operadores Zenet).
- Eventos sectoriales (CANIRAC, gremio).

**Triggers de salida hacia 3.9 (expansión):**
- Nueva apertura del operador (3ra sucursal, nueva marca).
- Nuevo módulo lanzado por Zenet que aplica al operador.
- Crecimiento del equipo que requiere más usuarios.
- Capacidad financiera para invertir más.

**Friction:**
- Mes 3-6 (post-honeymoon): el operador empieza a comparar Zenet con lo que tenía antes con perspectiva. Si las expectativas no se cumplen, riesgo de churn aumenta.
- Mes 9-12 (renewal): primera renewal decision. Si ROI no es claro, no renueva.
- Cambio de gerente clave o salida del champion: alta vulnerabilidad. El champion era el daily driver del producto; sin él, uso decae.

**Métricas:**
- DAU/MAU.
- Feature adoption depth (cuántos módulos / features se usan).
- NPS sostenido.
- Churn rate / renewal rate.
- Net revenue retention.

### 3.9 Expansión

> ℹ️ **Estado de evidencia post-triangulación (Queries 1 + 4, 2026-05-06):** la fase se reforzó con benchmarks NRR cross-segment, time-to-first-expansion realista para restaurant operators (materialmente más largo que B2B SaaS típico), 6 triggers de expansión ranked, fragmented stack reality (cross-vendor vs same-vendor upsell), pricing model impact en NRR, y expansion sales motion economics. Hallazgo crítico (Query 4): **expansion revenue será slow en Years 1-2** porque trigger principal (segunda apertura) está operator-capability-constrained, no software-constrained — toma 18-36 meses post-firma vs. B2B SaaS típico 6-12.

**Descripción:** el operador agrega sucursales (su tercera, cuarta), módulos adicionales, usuarios. Zenet escala con el negocio. **Net revenue expansion** se convierte en motor económico para Zenet — pero con timeline distinto al SaaS típico.

**Duración típica realista (Query 4):**

| Cross-SaaS benchmark | Timing |
|---|---|
| Usage-based expansion (auto-scaling) | 3-6 meses |
| Upsells (post-value proof) | 6-12 meses |
| Cross-sells (post-trust) | 12-18 meses |

| **Restaurant operator second-location reality** | **Timing** |
|---|---|
| First location operativa → decisión de segunda | 18-24 meses de operación rentable |
| Decisión → segunda location operativa | 12-18 meses (site, build-out, hiring, training) |
| Segunda location → estabilidad rentable | 6-12 meses |
| **TOTAL: initial SaaS purchase → second-location software expansion** | **30-54 meses (2.5-4.5 años)** |

**Implicación crítica para Zenet:** operators que firman para una sola location **NO deben esperarse a expandir within Year 1**. La median expansion window es **18-36 meses post-initial-purchase**, alineada con second-location opening cycle. **NRR en Years 1-2 será driven más por retención (alta GRR) que por expansion revenue.**

**Multi-location rollout pattern documentado** `[Benchmark sectorial / Perplexity 2026-05-06]`:

**Approach pilot-first (recommended para 2-3 sucursales del beachhead):**
- Elegir location con strongest management y moderate volume — NO la más busy ni la más slow.
- Configurar, train y stabilize pilot location (típicamente 4-6 semanas).
- Documentar cada configuration decision y fix como "gold standard" template.
- Usar template para acelerar segunda y tercera location — **típicamente 50-70% más rápido rollout**.
- **Verbatim Nory:** *"In larger and more complex rollouts, it's always best to start with one or two locations."*

**Approach simultaneous (cuando funciona):**
- Best para operadores con menus idénticos cross-location, mismo POS, management centralizado.
- Multi-location operators con un centralized platform pueden implementar best practices simultaneously creando "multiplier effect".
- **Higher short-term disruption risk** — recommended SOLO con management depth fuerte across todas las sites simultáneamente.

**Implicación operativa para Zenet:** dado que el beachhead está en consolidation phase post-segunda apertura (segundalocation typically aún standardizing operational rhythms, operador stretched), **pilot-first es strongly indicated**. Adding full-system implementation across both/all locations simultáneamente **crea staffing-overwhelm stall risk** documentado cross-fuentes. Ver §5.2 churn risk windows.

#### 3.9.1 NRR benchmarks por segmento — y target realista para Zenet

`[Benchmark sectorial / Perplexity 2026-05-06]` — Query 4 cross-segment evidence:

| Segmento | NRR median | Source |
|---|---|---|
| **SMB SaaS (ACV <$25K)** | **97%** | Optifai Pipeline (n=939) |
| SMB SaaS top quartile | >105% | Optifai |
| Mid-market SaaS (ACV $25K-$100K) | 108% | Optifai |
| Enterprise SaaS (ACV >$100K) | 118% | Optifai |
| B2B SaaS median (all segments) | 106% | ChartMogul (n=2,100) |
| Best-in-class B2B SaaS | >130% | Optifai |
| **Vertical SaaS multi-product** | **110%** | Tidemark (n=200+) |
| Vertical SaaS single-product | ~100% | Tidemark |
| Usage-based pricing | 120-140% | OpenView Partners |
| Seat-based pricing | 105-115% | OpenView Partners |

**Target NRR realista para Zenet:**

> **Baseline expectation: 95-100% NRR** (slightly below global SMB median 97% por Mexico structural factors — higher business closure rates, payment infrastructure challenges, lower digital maturity).
>
> **Stretch target: 105%+** = top quartile para el segmento.
>
> **Path a >100% NRR:** land con inventario/costing → expand a additional locations → add labor/scheduling cuando complexity demands it. **NO "sell all modules at once"** — strategic product sequencing aligned con operator's operational maturity curve.

#### 3.9.2 Triggers de expansión — ranked

> Query 4 — los 6 triggers en orden de probabilidad para multi-location restaurant operators:

| Rank | Trigger | Mecanismo | Predictibilidad |
|---|---|---|---|
| 1 | **Apertura de nueva ubicación física** | Operador necesita agregar location al software | **El más predecible y high-probability** |
| 2 | **Hitting usage/capacity limits** | Inventory item limits, user seat limits, transaction volume caps | **80% del límite = optimal prompt timing** (Athenic) |
| 3 | Achieving operational milestone | Primer quarter de positive ROI; primer waste catch costoso; primer supplier price discrepancy detected | Crea willingness para deepen investment |
| 4 | Staff expansion | Hiring de operations manager o controller que se vuelve nuevo champion → requests additional modules (reporting, analytics, multi-location dashboards) | Variable — depende de hiring del operator |
| 5 | Vendor proactive outreach | QBRs, milestone celebrations, CS-initiated "you're ready for X" | **Limited effectiveness** — upsell debe ser subtle y value-first, no sales-first |
| 6 | Competitive pressure / peer influence | Ver competitors con tools más sophisticated; influence en local restaurant associations (CANIRAC events) | Variable — alineado con doc 03 §5.7-§5.8 trust hierarchy peer-first |

#### 3.9.3 Fragmented stack reality — el competitor real es cross-vendor

> Query 4 — finding crítico para GTM strategy:

**Independent restaurants usan 5-8 tools desconectados** en promedio (Chowly 2026):
- POS, online ordering, delivery management, website, marketing, analytics, operations.

**75% de independents** planearon adoptar new technology en 2023 (Hospitality Tech).

**Adoption rates 2023:** accounting platforms 25%, loyalty programs 25%, employee scheduling 24%, QR codes 24%, online ordering 24%.

**Implicación:** operadores **agregan complementary products de different vendors más a menudo que expanden within single vendor**. Ejemplo: operator usando Zenet para inventory podría agregar Toast para POS, Homebase para scheduling, SevenRooms para reservations — NO expandir Zenet a incluir todo.

**El competitor de expansion para Zenet NO es solo otro BOH SaaS — es la decisión del operador de buy-vendor-X-for-need-Y.** Cada nueva need operativa que no es BOH es a vendor distinto fácilmente.

**Multi-product vertical SaaS advantage (cuando funciona):**
- Tidemark 2025 (n=200+): multi-product vertical SaaS = **110% NRR vs ~100% single-product**.
- Multi-product companies: **addressable market grows 10x**, ARPA nearly doubles, ARR growth 50% → 60%.
- **PERO:** advantage viene de **strategic product sequencing**, NO feature dumping.

**Mordor Intelligence 2026:** enterprise chains (100+ locations) = 40% del market revenue, pero **small chains (2-20 locations) growing fastest at 15.78% CAGR** — Zenet's expansion opportunity exists but es slower y requires longer nurturing.

#### 3.9.4 Module adoption depth over time

> Query 4 — caveat: no published study cuantifica module adoption depth para restaurant BOH SaaS over time.

**General SaaS pattern:**
- 3+ features adopted = 70% higher retention vs single-feature (SaasFactor 2026 — heredado Query 2).
- Hospitality tech: operadores reportan que current CRM/marketing platforms tienen features que NO usan (Chris Munz 2025).
- Independents express frustración con feature sprawl en all-in-one platforms (Chowly 2026).

**Patrón aplicado para Zenet:**
- Operadores activan **1-2 core modules inicialmente** (típicamente: inventory tracking + recipe costing).
- Permanecen en esa depth indefinidamente UNLESS specific operational pain point crea demand para tercer módulo.
- Ejemplo de trigger natural: labor scheduling se agrega cuando segunda location abre y scheduling complexity aumenta.
- **Esperar >3 module adoption within 12 months es UNREALISTIC para este segmento.**

#### 3.9.5 Pricing model impact en expansion

> Query 4 — diferentes models producen different expansion behaviors:

| Model | NRR esperado | Expansion behavior | Aplicabilidad Zenet |
|---|---|---|---|
| **Per-location** | Linear con location count | **Automatic y predictable.** Cuando opera 2da, agrega 2da licencia | **DOMINANT model recomendado** — clearest path para multi-location restaurant |
| Per-user/seat | Suprimido por behavior | Operadores resisten — turnover 80%+ hace per-seat punitive. Slack solucionó con per-active-user | Requires per-active-user variant si se usa |
| Usage-based / consumption | **120-140% NRR** (OpenView) | Frictionless — usage grows = revenue grows. Sin sales conversation | Requires sophisticated metering infrastructure |
| **Hybrid (recommended)** | Predictable base + upside | Base subscription + transaction fees / add-ons. Ejemplo: $99/mes base + $0.50/invoice; o $149/location + $29/additional user | **Optimal long-term** — predictable retention + growth-driven expansion |

**Implicación:** per-location pricing es **el optimal model** para Zenet en Fase 1-2 — predictable expansion alineado con operator growth. Hybrid (base + usage) crea upside pero requiere billing infrastructure investment.

#### 3.9.6 Expansion sales motions — economics y effectiveness

> Query 4 — el finding GTM más impactante:

**Existing customer expansion economics vs. new customer acquisition (Athenic 2025, n=19 B2B SaaS over 18 months):**

| Métrica | New customer | Existing customer expansion |
|---|---|---|
| Cost | £3,200 CAC | **£180** |
| Close cycle | 45 días | **7 días** |
| Close rate | 21% | **68%** |
| Payback | 32 meses | **1 mes** |

**Top quartile companies generan 62% del revenue de expansion** — usando behavioral triggers proactivamente, NO esperando que customers ask.

**Effectiveness ranking de expansion motions (Query 4):**

**1. In-product usage triggers (highest conversion):**
- Contextual in-app prompts triggered by behavior convert **3-5x higher than email campaigns** (GroovyWeb 2026).
- Ejemplo: *"Has entrado 45 recetas. Upgrade to Pro para unlimited recipes + cost variance alerts."*
- **Mejor implementación:** trigger-based en specific behavioral milestones, no calendar-based.
- **Triggers Zenet aplicables:**
  - Operator completa primer full quarter de consistent inventory counts → prompt para multi-location rollout conversation.
  - Recipe library hits 80% del plan limit → prompt para upgrade.
  - Operator logs in daily for 30 consecutive días → high-engagement signal, upsell readiness.

**2. Event-based triggers (no calendar-based):**
- Case study (r/SaaS 34% churn reduction): trigger-based outreach en specific behavioral milestones supera calendar QBRs.
- Para Zenet: **5-7 north star events** (heredado Query 3 §5.2.9) sirven double duty — health score + expansion triggers.

**3. QBRs (mixed effectiveness para 1-3 location independents):**
- **Effective:** ROI-focused, data-driven, identifies expansion opportunities subtly como natural next steps.
- **Ineffective:** generic status updates, sales-heavy pitches, infrequent executive access.
- **Para Zenet beachhead:** QBRs típicos (formal quarterly with deck) **probablemente demasiado formal** para 1-3 location independents — un casual *"check-in over coffee"* approach fits the relationship better. Aligns con doc 03 §5.7-§5.8 — relationship-based dynamics dominate Mexican SMB.

**4. Milestone celebrations:**
- Reconocer operator achievements (first month food cost reduction, 100th inventory count, primer year anniversary) crea goodwill y opens expansion conversations naturally.
- Sin quantified effectiveness data, pero widely cited best practice.

**5. Automated email sequences (lowest effectiveness):**
- Behavioral email (upgrade recommendations al approaching limits) son lower-friction pero **convert at baseline rates**.
- Best uso: persistent background nurture, NO primary expansion driver.

**Estado emocional:** identity consolidation. El operador opera ahora desde frame "crecimiento informado", no "sobrevivencia ansiosa". Phase 5 ya no es bifurcation entre persistir y cerrar — es bifurcation entre crecer y consolidar.

**Estado cognitivo:**
- "Zenet escala con mi negocio" — confianza estructural.
- Planeación de tercera apertura con Zenet pre-instalado (no remediación post-rotura).
- Visión de profesionalización: equipo, sucursales, marca.

**Comportamiento observable:**
- Tercera apertura: instala Zenet desde día 0.
- Adición de módulos (forecasting, analytics, etc. cuando existan).
- Adición de usuarios — sub-gerentes, nuevos chefs, contador interno.
- Conversaciones con account success sobre próximos pasos.

**Canales activos:**
- Account expansion conversations con Zenet.
- Success milestones celebraciones.
- Peer conversations en eventos.

**Triggers de salida hacia 3.10 (advocacy):**
- Operador articula valor a peer no-prompted.
- Operador participa en case study o entrevista pública.
- Operador invita a peer a ver su operación con Zenet.

**Friction (refinada con Query 4):**
- **Operator-capability-constrained, NO software-constrained:** segunda apertura toma 30-54 meses cycle — Zenet no puede acelerar.
- Tercera apertura puede ser stress operativo aunque haya Zenet — el sistema ayuda pero no elimina la complejidad de abrir un nuevo lugar.
- Cambio de equipo en sucursal nueva puede crear regresión temporal en uso.
- **Cross-vendor competition:** cada nueva need operativa que no es BOH puede ir a vendor distinto fácilmente — Zenet no puede asumir same-vendor expansion default.
- Si Zenet no escala bien con el negocio (limitaciones técnicas, soporte que se queda corto), riesgo de re-evaluación competitiva.

**Métricas clave (con benchmarks Query 4):**
- **Net revenue retention (NRR) — target 95-105% para Mexico SMB beachhead, stretch >105% top quartile.**
- Gross revenue retention (GRR) — más importante que NRR en Years 1-2 dado expansion timeline.
- Expansion revenue por cuenta.
- Modules per account — esperar 1-2 baseline, 3+ es signal de power user.
- Locations per account.
- Users per account.
- **Time-to-first-expansion** — target 18-36 meses (alineado con operator second-location cycle, no SaaS típico 6-12).
- **% revenue from expansion** — top quartile companies = 62% (objetivo aspiracional para Year 3+).

**Estado emocional:** identity consolidation. El operador opera ahora desde frame "crecimiento informado", no "sobrevivencia ansiosa". Phase 5 ya no es bifurcation entre persistir y cerrar — es bifurcation entre crecer y consolidar.

**Estado cognitivo:**
- "Zenet escala con mi negocio" — confianza estructural.
- Planeación de tercera apertura con Zenet pre-instalado (no remediación post-rotura).
- Visión de profesionalización: equipo, sucursales, marca.

**Comportamiento observable:**
- Tercera apertura: instala Zenet desde día 0.
- Adición de módulos (forecasting, analytics, etc. cuando existan).
- Adición de usuarios — sub-gerentes, nuevos chefs, contador interno.
- Conversaciones con account success sobre próximos pasos.

**Canales activos:**
- Account expansion conversations con Zenet.
- Success milestones celebraciones.
- Peer conversations en eventos.

**Triggers de salida hacia 3.10 (advocacy):**
- Operador articula valor a peer no-prompted.
- Operador participa en case study o entrevista pública.
- Operador invita a peer a ver su operación con Zenet.

**Friction:**
- Tercera apertura puede ser stress operativo aunque haya Zenet — el sistema ayuda pero no elimina la complejidad de abrir un nuevo lugar.
- Cambio de equipo en sucursal nueva puede crear regresión temporal en uso.
- Si Zenet no escala bien con el negocio (limitaciones técnicas, soporte que se queda corto), riesgo de re-evaluación competitiva.

**Métricas:**
- Net revenue retention (>100% indicates healthy expansion).
- Expansion revenue por cuenta.
- Modules per account.
- Users per account.
- Locations per account.

### 3.10 Advocacy

**Descripción:** el operador recomienda Zenet a peer activamente, participa en case studies, habla en eventos sectoriales, invita a peers a ver su operación. **Crítico en el contexto mexicano** dado que peer trust > vendor trust (doc 03 §5.7-§5.8).

**Duración típica:** sostenida — no es una fase puntual, es un estado.

**Estado emocional:** identity outward. El operador se identifica como "referente de su comunidad" — operador profesional que otros peers consultan. **Job social del operador** (doc 02 §5.1) materializado.

**Estado cognitivo:**
- "Esto debe ser conocido por más operadores como yo".
- Sentido de comunidad — el operador ve valor en ayudar a peers.
- Identity reformation completa: "soy operador con sistema, parte de comunidad de operadores profesionales".

**Comportamiento observable:**
- Recomendaciones peer-to-peer: *"deberías ver lo que estoy usando"*.
- Participación en case studies de Zenet.
- Participación en eventos gremiales con Zenet visible.
- Invitaciones a peers a visitar su operación.
- Posts ocasionales en LinkedIn / social media mencionando experiencia.

**Canales activos:**
- Peer-to-peer (#1 trust source en doc 03 §5.8).
- CANIRAC events.
- Social media (LinkedIn, Instagram).
- Vendor case studies.

**Triggers (no de salida — de profundización):**
- Reconocimiento público (premio, mención en prensa).
- Apertura de cuarta sucursal con expansión exponencial.
- Operador se convierte en "referencia" en su plaza.

**Friction:**
- Aguante identity (doc 03 §2.4.6): aún en advocacy, operadores mexicanos pueden ser reservados sobre nombrar problemas pasados públicamente.
- Riesgo de over-promising por advocate enthusiasm — si Zenet no funciona para el peer al que recomendó, daño bidireccional.

**Métricas:**
- Referral rate.
- Net Promoter Score (NPS).
- Case study participation rate.
- Brand advocacy events (mentions, invitations, referrals tracked).

---

## 4. Triggers transversales

Los triggers no operan dentro de una sola fase — son disparadores que aparecen a lo largo del journey y aceleran la transición entre fases. Cuatro tipos.

### 4.1 Triggers operativos

| Trigger | Descripción | Fase del journey donde aparece |
|---|---|---|
| Pérdida grande por mermas en mes específico | Crisis financiera concreta | 3.1 → 3.2 (despierta), 3.4 (acelera) |
| Salida abrupta de gerente clave o chef de confianza | Ruptura del knowledge holder | 3.1 → 3.2, 3.6 → churn risk |
| Apertura de segunda sucursal | Trigger #1 más común para el beachhead | 3.1 → 3.2 (3-9 meses post-apertura) |
| Auditoría fiscal o cambio normativo CFDI | Urgencia legal | 3.4 (acelera decisión) |
| Apertura de tercera sucursal próxima | Anticipación de complejidad | 3.4 (decisión proactiva), 3.9 (expansión) |
| Falla operativa pública (mal review, evento PR negativo) | Crisis reputacional | 3.2 (despierta), 3.4 (acelera) |
| Cambio de equipo masivo (rotación >20%) | Crisis de capacidad | 3.6 → churn risk; 3.8 → friction |

### 4.2 Triggers psicológicos

| Trigger | Descripción | Fase |
|---|---|---|
| Fatiga acumulada que cruza umbral subjetivo | "No aguanto más" | 3.1 → 3.2, 3.4 → 3.5 |
| Resolución de año fiscal | "Este año vamos a profesionalizar" | 3.2 → 3.3, 3.4 → 3.5 |
| Crisis personal (salud, familia) | Forzar reorganización | 3.2 → 3.3, 3.6 → churn |
| Reconocimiento público de pares (premio, mención) | Identity shift hacia "operador profesional" | 3.8 → 3.9 → 3.10 |

### 4.3 Triggers sociales

| Trigger | Descripción | Fase |
|---|---|---|
| Peer recomendando solución específica | El peer-to-peer #1 trust source | 3.2 → 3.3, 3.3 → 3.4 |
| Chef respetado endorsando categoría o producto | Trigger de validación social | 3.3 → 3.4 |
| Evento gremial (CANIRAC, Bootcamp GastronomIA) | Exposición a categoría + peers | 3.2 → 3.3, 3.4 (decisión) |
| Consultor gastronómico recomendando activamente | Validación experta | 3.3 → 3.4, 3.5 (decisión) |

### 4.4 Triggers post-compra

| Trigger | Descripción | Fase |
|---|---|---|
| Primer mes con ahorro tangible | First value moment | 3.6 → 3.7 |
| Primer cierre mensual donde inventarios cuadran | Validation moment | 3.6 → 3.7 |
| Primer upsell propuesto por Zenet | Conversation de expansión | 3.8 → 3.9 |
| Renewal anniversary | Decision point | 3.8 (mes 9-12) |
| Crisis operativa que Zenet resuelve | Reinforcing moment | 3.7 → 3.8 |
| Crisis operativa que Zenet NO resuelve | Churn risk acute | 3.7 → churn, 3.8 → churn |

---

## 5. Friction y churn risk windows

### 5.1 Friction por fase — mapa cross-reference

Doc 03 §5 documentó 6 clusters de barreras de adopción (Query 5 Perplexity 2026-05-06). Aquí se mapea contra fases del journey:

| Cluster de barrera (doc 03 §5) | Fases del journey donde más impacto tiene |
|---|---|
| 1. Switching costs (cost, training, integration, data migration) | 3.4, 3.5, 3.6 |
| 2. Cognitive (complexity, choice paralysis, distrust, AI fear, identity exclusion) | 3.3, 3.4 |
| 3. Time-availability paradox | 3.4 (evaluación), 3.6 (onboarding) |
| 4. Identity (spreadsheet attachment, self-efficacy threat, control loss) | 3.4, 3.5, 3.6, 3.7 |
| 5. Demographic (age, education, business stage) | Transversal — modula intensidad de todo |
| 6. Trust (vendor distrust 40.9% Mexico) | 3.3, 3.4, 3.5 |

### 5.2 Churn risk windows

> ℹ️ **Estado de evidencia post-triangulación (Query 3, 2026-05-06):** la sección se reforzó significativamente con:
> - 3 evidence-based concentration windows (onboarding cliff 40-60%, adoption gap 20-25%, renewal cliff 60-70%) que confirman las 6 windows del draft local con cifras concretas.
> - Cause taxonomy ranked (n=200 B2B SaaS — 34% preventable; restaurant POS-specific con closure 34%).
> - Voluntary/involuntary breakdown con **Mexico involuntary churn premium** (10-20% revenue loss en LATAM por preventable payment failures — implicación crítica para billing infrastructure).
> - Champion departure quantified: **51% churn probability within 12 months** + 4.7 months avg lag.
> - Refined predictors hierarchy con cifras: 78% del churn preceded by behavioral signals 30+ días antes.
> - Estructural baseline: **60% restaurantes fail within 3 years** — incluso con software perfecto, 12-month churn será 15-20%.

Momentos específicos del journey donde el operador tiene mayor probabilidad de abandonar el producto. Cada uno requiere intervención específica.

#### Distribución temporal del churn — 3 concentration windows (cross-SaaS evidence)

`[Benchmark sectorial / Perplexity 2026-05-06]` — las 3 windows que concentran la mayoría del churn:

| Window cross-SaaS | Timing | % del annual churn | Mecanismo raíz |
|---|---|---|---|
| **Onboarding cliff** | Días 0-90 | **40-60%** | Failure to reach first value milestone |
| **Adoption gap** | Días 90-180 | ~20-25% | Launched pero NO habituated; sin routine usage |
| **Renewal cliff** | 60 días pre-renewal | **60-70% del annual churn concentra aquí** | Perceived ROI insuficiente para justificar renewal |
| **Year 2 fragility** | Meses 13-24 | Materialmente elevado vs. Years 3+ | Enthusiasm/ROI reassessment cycle |

**Implicación operativa:** las 6 windows del draft local mapean bien:
- Windows A + B (pre-onboarding + steep learning) = **Onboarding cliff** del cross-SaaS evidence.
- Window C (post-honeymoon) = **Adoption gap**.
- Window D (renewal decision) = **Renewal cliff** + Year 2 fragility.
- Windows E (champion departure) y F (operational shock) son transversales — pueden activarse en cualquier window y multiplican churn risk.

**Window A — Pre-onboarding (firmó pero no implementa)**

- **Timing:** **primeras 72 horas post-firma** (refinado con Query 1).
- **Mecanismo:** el operador firmó en momento de urgencia emocional pero no encuentra bandwidth para empezar onboarding. El producto se pospone indefinidamente.
- **Cifra documentada:** **operadores que NO engage en 72 horas tienen 90% probabilidad de churn** `[Benchmark sectorial / Perplexity 2026-05-06]`. Es la "inactivity cliff" universal SaaS.
- **Señales tempranas:** sin respuesta a kickoff call, sin completion de setup inicial, sin asistencia a sesiones de training, no login en 72 horas.
- **Intervención:** fast-onset CS engagement con gerente operativo (no solo con dueño); reducción del onboarding mínimo viable a 30-60 minutos primer paso. **Triggear Day 1 kickoff sincrónico (video o in-situ), nunca solo email.**

**Window B — Steep learning curve (mes 1-2 onboarding)**

- **Timing:** semanas 3-8 post-firma.
- **Mecanismo:** equipo no acepta el cambio, dueño se frustra, regresión temporal a workarounds. Self-efficacy threat reactivado. **Recipe library entry phase es el highest-friction step** — punto donde la mayoría de operadores stall o partially abandon.
- **Cifras documentadas (Query 1):**
  - Operadores que **no completan first inventory count en 30 días churnean 3-4x más rápido**.
  - Recipe library <30% complete at Day 30 → typically abandoned without intervention.
  - First support ticket sobre POS integration o data errors (no user questions) → trust dañado early — predictor fuerte de churn subsecuente.
- **Señales tempranas:** soporte tickets por confusión recurrente, login frequency cayendo (declining login frequency es **el single strongest leading churn indicator** en 23,000 SaaS companies analizadas por ProfitWell), equipo bypasseando sistema (volviendo a Excel — "shadow Excel" behavior).
- **Intervención:** in-person training adicional, cambio de approach pedagógico, customer success champion designation. **Proactive CS at Day 7 y Day 21** — intervenir antes de que el operador se vaya silencioso predice save rates >35%.

**Window C — Post-honeymoon (mes 3-6)**

- **Timing:** mes 3-6 post-activación.
- **Mecanismo:** el operador empieza a comparar Zenet con su stack anterior con perspectiva. Si el perceived value no es proporcional al esfuerzo, reconsideration.
- **Cifra documentada (Query 2):** **70% de SaaS customers churn dentro de 90 días por poor onboarding** (SaasFactor). Operadores que sobreviven 90 días tienen **3% mensual churn**; los que están en primeros 90 días tienen **12% mensual churn — 4x más alto** (Reddit r/SaaS B2B operator data, 2026). Esto reframea el window: NO es solo "mes 3-6 post-activación" — es **"si no llegas a Día 90 con value claro, el churn risk se cuadruplica"**.
- **Señales tempranas:** baja engagement con CS, pérdida de momentum en feature exploration, comentarios sobre "antes era más fácil" o "ya no veo el beneficio".
- **Intervención:** quarterly business review con métricas de improvement; addition de módulos relevantes; visit a peer usuario que esté en estado de adopción profunda. **Operadores que adoptan 3+ features muestran 70% higher retention** vs single-feature — push activamente hacia feature breadth.

**Window D — Renewal decision (mes 9-12)**

- **Timing:** mes 9-12 post-firma — primer renewal cycle. **60 días pre-renewal concentra 60-70% del annual churn** (cross-SaaS benchmark Query 3).
- **Mecanismo:** decisión consciente de seguir pagando. Si ROI no se ha materializado claramente, no renueva.
- **Cifras clave (Query 3):**
  - Customers en monthly billing son **3-5x más propensos a churn** que customers en annual plans (ChartMogul). Migrar at-risk monthly → annual con discount incentive es **uno de los highest-ROI retention levers disponibles**.
  - **Year 2 fragility:** churn "materialmente elevado" vs. Years 3+ por ROI reassessment cycle. Companies que generan no feature expansion ni incremental value en Year 1 son significativamente más vulnerables a Year 2 churn.
- **Señales tempranas:** payment delay, conversaciones sobre "estamos evaluando", reducción en account expansion.
- **Intervención:** ROI documentation explícita con números del operador; renewal conversation 30-60 días antes; opciones de modificación de plan; **migración monthly → annual con incentive como save move primario**.

**Window E — Champion departure (cualquier momento)**

> Esta window se refinó significativamente con Query 3 — Sturdy/ChurnZero quantified data convierte champion departure de risk genérico a riesgo de magnitud específica conocida.

- **Timing:** evento puntual.
- **Mecanismo:** el gerente operativo o chef que era el daily driver del producto se va. El uso decae rápidamente porque la persona que mantenía el sistema activo ya no está.
- **Cifras documentadas (Query 3):**
  - **Customer champion sale = 51% probabilidad de churn within 12 meses** (Sturdy / ChurnZero BIG RYG conference).
  - **Executive sponsor (decisor senior) sale = 65% probabilidad de churn within 12 meses.**
  - User Intuition 723-case churn analysis: champion loss aparece como contributing factor en **20%+ de churn cases** — y rara vez en exit surveys porque "the person completing cancellation form was not the champion — they were the person left holding a tool they never championed."
  - **Avg time from champion departure to churn: 4.7 meses.**
  - Cuando CS actúa en ≤48 horas post-señal de exec change: **+33% renewal likelihood**.
- **Cascade timeline documentada:**
  - 2-3 semanas post-departure: usage del champion's direct team cae.
  - 6-8 semanas: broader organizational usage cae.
  - Mes 3: producto operating at **40-50% del peak adoption**.
  - Renewal conversation arrives "perfunctory" — el new decision-maker no tiene relación con el producto.
- **Implicación específica para Zenet beachhead:** restaurant staff turnover industry-wide es **~79.6% annual**. Para 2-3 location operators del beachhead, **champion departure NO es occasional risk — es near-certainty annual**. Cada cliente Zenet en este segmento debe asumirse a face champion departure ≥1 vez por contract cycle.
- **Señales tempranas:** email bounce del champion's address, new contact aparece en support tickets, decreased login del specific user account, billing contact change.
- **Intervención playbook (Query 3):**
  - **Multi-thread desde Day 1:** owner Y location manager en onboarding relationship — no solo el champion.
  - **Monitor for job change signals:** sistemático.
  - **Proactive re-onboarding within 48 horas** de detectar departure (33% renewal lift).
  - **Cultivate peer network:** WhatsApp / community touchpoints crean distributed advocacy que sobrevive individual changes.

**Window F — Operational shock (cualquier momento)**

- **Timing:** evento puntual.
- **Mecanismo:** crisis operativa grande (pandemia, crisis económica, cambio normativo, salida de socio) altera la situación del operador. Tres mecanismos de churn se activan simultáneamente:
  1. **Business closure (estructural):** irreversible — el customer ya no existe.
  2. **Budget triage (forced cancellation):** operadores en survival mode cortan every non-essential expense. Sin demonstrated specific ROI, el producto se percibe overhead.
  3. **Champion displacement:** layoffs eliminan a quienes sabían usar el producto.
- **Evidencia mexicana documentada (Query 3) — COVID-19 baseline:**
  - **15% de todos los restaurantes mexicanos cerraron** (90,000-122,000 establishments).
  - **47% de SMEs mexicanos tenían >50% probabilidad de cierre permanente.**
  - Mexico GDP -8.9% en 2020 — peor performance desde 1932.
  - **25% de operadores independientes de South Carolina no reabrieron** tras 60-day closure (PMC study).
  - **Restaurants con digital infrastructure sobrevivieron at materially higher rates** (LSEEE peer-reviewed). **Implicación contraintuitiva:** deepening product integration durante normal times crea switching costs que sobreviven shocks.
- **Señales tempranas:** payment delays, layoffs anunciados, cierre de sucursal, comments tipo "estamos viendo qué cortar".
- **Intervención (Query 3):**
  - **Subscription pause ofrecida proactivamente** ANTES de cancellation request (15-25% accept; 60-70% return). El pause specifically es high-ROI en crisis.
  - **Downgrade a tier menor** en vez de perder cuenta — preserva data history y relationship.
  - **Proactive outreach con value recap específico** (MXN savings metrics) ANTES de budget decisions.
  - **Reframe del valor en contexto de crisis:** "Zenet te ayuda MÁS en crisis que en estabilidad — datos para cortar lo correcto, no lo desesperado".

#### 5.2.7 Cause taxonomy del churn — ranking documentado

> Basado en n=200 B2B SaaS cancellation survey (operator-reported, r/SaaS 2025) + RetentionCheck restaurant POS vertical benchmark. `[Benchmark sectorial / Perplexity 2026-05-06]`

**Cross-SaaS B2B (n=200):**

| Rank | Causa | % | Categoría | Preventable? |
|---|---|---|---|---|
| 1 | Too expensive | 22% | Financial | Partially |
| 2 | Switched to competitor | 18% | Competitive | Partially |
| 3 | Business closed/changed | 16% | Structural | No |
| 4 | Missing features | 14% | Product | Partially |
| 5 | Didn't use enough | 12% | Adoption | Yes |
| 6 | Too complicated | 9% | Onboarding | Yes |
| 7 | Bad support experience | 5% | Service | Yes |
| 8 | Other | 4% | — | — |

**34% del total fue preventable** — primarily "too complicated" + "didn't use enough" + algunos "missing features". El 66% restante fue parcialmente o fully estructural.

**Restaurant POS vertical específico (RetentionCheck):**

| Rank | Causa | % |
|---|---|---|
| 1 | **Restaurant closed o changed concept** | **34%** (vs. 16% cross-SaaS — estructural duplicado) |
| 2 | Hardware requirements / upgrade costs | 23% (POS-specific; less aplicable a cloud BOH) |
| 3 | Missing integrations con delivery apps | 19% |
| 4 | Reliability issues durante peak service | 15% |
| 5 | Competitor offered better payment processing rates | 9% |

**Para BOH SaaS específicamente:** hardware dependency se reemplaza por **data migration burden** + **recipe entry overwhelm** como primary complexity-driven churn causes. Pero leading cause — customer business closure — es estructuralmente similar.

**Verbatim análisis vertical GTM (LinkedIn Mar 2026):** *"60% of restaurants fail within 3 years. Your customers are going out of business constantly. Your 12-month churn might be 15-20% even if your software is perfect."* — define **el structural churn floor para Zenet** independiente de calidad de producto.

**Cause taxonomy aplicada al beachhead Zenet:**

| Rank | Causa | Categoría | Preventable | Evidencia |
|---|---|---|---|---|
| 1 | Restaurant closure / business failure | Estructural | NO | 16-34% — para Mexico potencialmente mayor por SME fragility |
| 2 | Perceived lack of value / "didn't use enough" | Adopción | Mayormente sí | 22-34% combined |
| 3 | Budget constraint / price sensitivity | Financial | Parcialmente | 22%+ |
| 4 | Recipe/data complexity overwhelm | Onboarding | Sí | High en BOH (mapea a "too complicated" + "didn't use enough") |
| 5 | Champion departure | Relationship | Parcialmente | 20%+ contributing factor |
| 6 | Missing integration o feature | Producto | Parcialmente | 14-19% |
| 7 | Competitor displacement | Competitivo | Parcialmente | 18% |
| 8 | Payment failure (involuntario) | Billing | Mayormente sí | Ver §5.2.8 |

#### 5.2.8 Voluntary vs. involuntary churn — el Mexico premium

> El finding más impactante para Zenet GTM en este Query 3.

**Cross-SaaS B2B baseline (Focus Digital 2025 / Vitally.io):**

| Tipo de churn | Median monthly rate | % of total churn | Causa primaria |
|---|---|---|---|
| Voluntary | 2.6% | **74%** | Perceived value decline |
| Involuntary | 0.9% | **26%** | Payment failures |
| **Total** | 3.5% | 100% | Combined |

**Within involuntary churn:** expired credit cards 42%, insufficient funds 31%, fraud prevention blocks 18%, technical processing errors 9%. Recovery rates: expired card failures recover **68% con smart retry logic vs. 23% con single-retry**.

**Otros sources placean involuntary share más alto:** MRRSaver "up to 48% of all churn"; r/micro_saas analysis "up to 40%". Range (26-48%) refleja diferencias metodológicas y ARPA — **lower-ARPA, lower-margin products como SMB restaurant SaaS están en el high end**.

**El Mexico/LATAM involuntary churn premium — finding crítico:**

`[Benchmark sectorial / Perplexity 2026-05-06]` — drivers estructurales ausentes de US/EU benchmarks:

- **LATAM payment processing decline rates: 15-25% — entre los más altos del mundo** (Rapyd) — fraud concerns, card-not-present restrictions, insufficient funds, local banking regulations.
- **Credit card penetration menor en México;** debit card y cash dominan, making recurring card billing inherently fragile.
- **Mexico's informal economy = 33% del GDP**; cash use 37% del consumer spending en 2025 (down from 57% in 2022).
- **4Geeks LATAM SaaS billing analysis:** *"If your current SaaS payment gateway treats Latin American transactions the same way it treats US transactions, you are likely losing 10-20% of your recurring revenue to preventable payment failures."*

**Implicación Zenet (inference):** en Mexico market context, involuntary churn podría plausibly representar **30-40%+ del total churn** (vs. global 26% median), driven by combinación de payment infrastructure fragility + SME financial instability.

**Implicación operativa CRÍTICA:** local payment method strategy (**OXXO Pay, SPEI, CoDi, o Clip-based billing**) NO es nice-to-have — **ES retention intervention**. Operadores pagando vía annual bank transfer o alternative local rails tendrán structurally lower involuntary churn que aquellos en international credit card billing.

**Note:** no published study cuantifica involuntary churn específicamente para Mexican restaurant SaaS. Lo anterior es síntesis de LATAM payment infrastructure research + general LATAM SME dynamics.

#### 5.2.9 Predictors hierarchy — refined

> Cross-fuente convergencia (ProfitWell n=23,000 + KissMetrics + ChurnAssassin). `[Benchmark sectorial / Perplexity 2026-05-06]`

**El finding más actionable de toda la sección:** **78% de churn events son preceded por measurable behavioral changes ≥30 días antes de cancellation** (ProfitWell). Las señales están — el failure es organizational (no detecting o acting on them in time).

| # | Predictor | Lead time | Notas |
|---|---|---|---|
| 1 | **Login frequency decline** | 30+ días | **#1 predictor cross-fuentes**. Declining 14-day rolling average precede 67% de churn events. Customer que loggeaba daily y ahora weekly = high-priority signal |
| 2 | **Feature adoption narrowing** | 30-60 días | Operadores que stop submitting invoices o stop running weekly inventory counts = behaviorally disengaging del core value loop |
| 3 | **Support ticket pattern inversion** | Variable | **Spike** = frustración; **drop sudden** = disengagement (operador stopped trying). Both signals require different responses |
| 4 | **Onboarding milestone failure** | Inmediato | Recipe library <30% en Día 30 + no completed inventory count by Día 14 = high-confidence churn predictors (heredado Query 1) |
| 5 | **Billing contact change** | 1-3 meses | A menudo signals organizational change (champion departure, ownership transition) que precede churn |
| 6 | **Engagement con product updates** | 30+ días | Customers que NO engage con announcements = disengaging del vendor relationship. Alto engagement correlaciona con high renewal probability |

**Health Score Framework standard (Query 3):**

| Dimensión | Señales | Weight |
|---|---|---|
| Activity | Login frequency, session count, DAU/MAU | 40% |
| Engagement | Feature adoption depth, core workflow completion | 30% |
| Milestones | Onboarding completion, first inventory count, first cost report | 20% |
| Recency | Time since last meaningful interaction | 10% |

Risk thresholds: 80-100 healthy / 60-79 monitor / 40-59 at-risk / 20-39 critical / 0-19 churning.

**Para Zenet lean CS team early-stage:** tracking **5-7 "north star" activation events** rather than full composite score es más actionable. Documented case study: 34% annual churn reduction by identifying 7 key activation events + event-triggered outreach.

### 5.3 Patterns de recuperación

> Refinada con Query 3 (2026-05-06) — recovery interventions con effectiveness documentada.

**Recovery interventions — pre-churn (highest ROI):**

| Intervención | Effectiveness | Source |
|---|---|---|
| **Subscription pause como save offer** | **15-25% accept rate; 60-70% return post-pause** | ChurnRecovery 2026 |
| **Phase-gated onboarding** | 60% → 87% completion | RetentionForge |
| **Proactive CS at Days 7 + 21** | Save rates >35%; 50% reduction en CS workload | r/SaaS case study + ChurnAssassin |
| **Annual contract migration** | Monthly customers 3-5x más propensos a churn que annual | ChartMogul |
| **CSM compensation tied to TTFV** | Aligns velocity y calidad | Tom Parker CS |
| **Structured cancel flows** | **40-65% save rate** | ChurnRecovery 2026 |

**Optimal save offer sequence (Query 3):**
1. Exit survey first (entender la razón).
2. Offer pause (15-25% accept).
3. Offer discount si pause declined (25-40% accept).
4. Accept gracefully si both declined.

**Win-back (post-churn) interventions — benchmarks:**

| Métrica | Benchmark |
|---|---|
| Win-back rate genérico | ~12% |
| **Win-back rate personalized + reason-matched** | **25-45%** (V. Kumar HBR n=40,000) |
| Win-back rate structured program | 15-30% (Totango) |
| Win-back rate informal sin programa | 3-5% |
| **Win-back attempts within 30 días vs. later** | **3x más successful** |
| **Optimal first win-back message timing** | **14-30 días post-churn** (Dropbox: 14 días = +28% recovery) |
| Reactivated customer ARPU vs. new | **+23% higher** |
| Up to 34% de cancelled customers recoverable | Churnkey, 5M cancellation sessions |

**El finding más actionable:** el V. Kumar HBR study (n=40,000) — **matching el win-back offer al stated churn reason** logró **45% success rates con 596% ROI**. Segmentation es el primary driver de win-back effectiveness — generic campaigns 12% vs. reason-matched 45%.

**Recovery patterns recomendadas para Zenet beachhead:**

- **Re-anchor at success moment:** mostrar al operador concretamente cómo está mejor que antes (data-driven).
- **Peer reinforcement:** conectar con otro operador en estado de adopción profunda — el peer trust opera más fuerte que vendor messaging (alineado con doc 03 §5.8 trust hierarchy).
- **Modular flexibility:** permitir reducción de scope temporal sin perder cuenta (downgrade vs churn).
- **Champion intervention:** el rol del champion interno no se delega a vendor — Zenet tiene que apoyar al champion para que sostenga el sistema internamente.
- **Subscription pause como first-line save:** especially para Mexican operators con cash flow seasonality (post-holiday rush, post-summer slow). Math is favorable: 60-day pause → 6 months retained > 25% discount permanent.
- **Local payment rails como structural retention move:** OXXO Pay / SPEI / CoDi reduce involuntary churn dramatically vs international card billing.

**Mexico-specific note:** un *"right of return"* offer atado a season cycle (post-holiday rush, post-summer slow season) puede resonar mejor que discount, dado el cyclical nature del Mexican restaurant cash flow.

#### 5.4 Estructural churn baseline — qué esperar incluso con producto perfecto

> Refinada con Query 3.

**El verdad operacional cruda para Zenet:**

- **60% de restaurantes fail within 3 years** (US baseline; Mexico likely similar o mayor por SME fragility).
- Toast (líder del market) tiene ~5% annual churn — y mucho de eso es estructural, no preventable.
- **12-month churn de 15-20% es realista incluso con producto perfecto.**

**Mexico estructural churn baseline estimado:**

- US first-year restaurant failure: 0.9% en 2025 (anomalous low post-pandemic), 4.7% en 2024, históricamente 4-6%.
- US 5-year failure: 31% pre-pandemic, 5.1% en 2024 (anomalous low).
- **Mexico COVID: 15% de todos los restaurantes cerraron (90,000-122,000)**.
- **47% de Mexican SMEs tenían >50% probabilidad de cierre permanente** (Signos Vitales Mexico 2024).

Para un Zenet con 1,000 Mexican independent restaurant customers, **budget realista de 5-15% annual structural churn from business closures alone** (ajustado contextualmente por economic conditions), ANTES de cualquier performance-driven churn.

**Implicación de planning:** distinguir entre **preventable churn (target measurement)** y **structural churn (baseline assumption)** desde el inicio. Mezclar ambos da números pesimistas que no permiten medir qué tan bien Zenet hace su trabajo. Con baseline structural de 10-15%, el target de Zenet es minimizar **preventable churn additional** sobre ese baseline.

#### 5.5 Estado de evidencia de la sección

`[HIPÓTESIS PRE-PMF]` para los detalles específicos del beachhead Zenet — sin clientes pagando aún, los churn windows y recovery patterns son inferencia de SaaS lifecycle research aplicado al segmento. Lo que SÍ está bien sostenido cross-fuentes:

- Las 3 concentration windows (onboarding cliff, adoption gap, renewal cliff) y sus % distributions.
- Champion departure quantified (51%/65%, 4.7 mes lag, 48-hour intervention = 33% lift).
- Voluntary/involuntary breakdown (74%/26% baseline; Mexico premium up to 48%).
- Predictors hierarchy con 78% de signals 30+ días antes.
- Recovery interventions with effectiveness rates.
- Estructural baseline 60% restaurant failure 3 años + 5-15% annual closure churn.

Validación con primeros 5-10 design partners ajusta los porcentajes para Mexico-specifics. Pero la **estructura del finding** está bien anclada.

---

## 6. Multi-stakeholder journeys

> ℹ️ **Estado de evidencia post-triangulación (Query 5, 2026-05-06):** la sección se expandió masivamente. **Hallazgos Mexico-specific load-bearing:** (1) el *contable externo* como structural fiscal gatekeeper (NO edge case); (2) CFDI 4.0 compliance + SAT real-time access (mayo 2026) eleva veto del *contable* a función compliance, no opinión financiera; (3) high power distance + *confianza* dynamics — "yes" no significa acuerdo; resistance se manifiesta post-decisión como inacción, no en meeting; (4) three-session demo structure (Ops Manager / Chef / Owner+Manager) supera demo combinado; (5) "Bind para Contadores" como precedente product que sugiere "Zenet para Contadores" view como retention move. **Crítical caveat:** ningún empirical study documenta este buying committee específicamente en Mexican independent restaurants — la sección triangula desde B2B SaaS frameworks + Mexican SMB digitalization research + fiscal compliance literature.

El customer journey de Zenet **no es uno** — son cuatro paralelos con velocidades, triggers y duraciones distintas. La research empirical está ausente para Mexican independent restaurants específicamente, pero dynamics adyacentes están bien documentados.

### 6.1 Composición del buying committee — mapeo formal

`[Benchmark sectorial / Perplexity 2026-05-06]` — para 2-3 location casual independiente en México, el effective buying committee mapea contra el canonical B2B framework:

| Stakeholder | B2B role equivalent | Entry stage típico | Power level |
|---|---|---|---|
| **Dueño-operador** | Economic Buyer + Decider | Awareness → activo en Decision | **Highest** — sole final authority |
| **Gerente operativo** | Champion + Technical Buyer | Awareness (triggers la búsqueda) o Consideration | High — drives evaluation, shapes criteria |
| **Chef ejecutivo** | End User + Potential Blocker | Late Consideration (demo) o post-purchase | **Low formal, HIGH de facto veto** |
| **Contable externo** | Financial Gatekeeper | Decision/Validation | **Variable — low to high según trust con dueño** |

### 6.2 Stakeholder journey timing — diagrama

```
AWARENESS → CONSIDERATION → EVALUATION → VALIDATION → DECISION → IMPLEMENTATION

Dueño:           [trigger] —————————————————————————————————————> [commit]
Gerente Ops:     [trigger] → [research → shortlist → demo mgmt] → [internal advocacy]
Chef ejecutivo:  ——————————————————————————————> [demo] → [post-purchase resistance or adoption]
Contable:        ——————————————————————————————————————> [fiscal check] → [approve/block]
```

**Key insight:** los 4 stakeholders están en estados de awareness/engagement completamente distintos en cada momento del journey. Sales motion debe operar a 4 velocidades simultáneas y NO asumir que un evento (ej. demo) sirve para los 4 a la vez.

### 6.3 Dueño-operador (primary buyer)

**Journey duration:** 6-24+ meses desde pre-awareness hasta advocacy. Fases tocadas: las 10.

**Patrón Mexican SMB context (Santander Trade):** decision-making authority concentrada en executive level. Subordinados esperan instrucciones, no push initiatives upward. **El dueño es activo en awareness trigger y final financial commitment** — en middle evaluation phase delega heavily al gerente operativo.

**Trigger inicial:** dolor estructural propio (escalamiento, mermas, salida de gerente).

**Trigger de cierre:** alineamiento del buying committee + ROI claro + peer/consultor validation + **contable approval**.

**Decision criteria primarios** (TouchBistro multi-stakeholder guide + ICT adoption research):
- **ROI y payback period.** Reduce food cost loss? Quantifiable saving?
- **Cross-location visibility.** Variance entre sucursales en single view.
- **Control without dependency.** Vulnerability concern si vendor falla o sube precios.
- **Pricing model simplicity.** Per-location > per-user > consumption-based.

**Driver primario en post-compra:** ROI, control, identidad de "operador profesional".

**Riesgo de churn:** principal en window D (renewal) — si no ve ROI claro, no renueva.

**Sales motion específica (Query 5):**
- Best channel: **peer referral** (otro restaurantero de Tijuana > vendor content), industry association presence (CANIRAC), WhatsApp social proof.
- **Numbers-first, not feature-first.** 15-minute business case > multi-hour demos.
- **Engagement final solo cuando el gerente operativo ya validó el producto** y está listo para presentarlo como recomendación. Let the champion do the internal selling.

### 6.4 Gerente operativo (champion + technical buyer)

> **El stakeholder más leverage del committee** — Challenger research (CEB/Gartner): champion-backed deals = **60-80% win rates vs. 15-25% sin champion** | **47 días close cycle vs. 134 días** | **73% vs. 31% win rate**.

**Journey duration:** desde fase 3.2-3.3 (frecuentemente initiates the search) hasta 3.10. Fases tocadas: 9 de 10 (no pre-awareness).

**Trigger inicial:** dolor operativo cotidiano agudo en consolidación 2-3 sucursales — inconsistent inventory counts, labor variance, inability to track recipe costs at scale.

**Decision criteria primarios** (workflow-driven):
- **Ease of daily use.** Highest-frequency user; bears training burden. Complexity → reversion a Excel en 30-60 días.
- **Data import capability.** Tiene los Excel files existentes y sabe how messy son. CSV import vs. manual entry of 200+ recipes = practical deal-breaker.
- **Cross-location management.** Single interface across both/all sucursales o login separado per location?
- **POS integration.** **71% de independents say POS integration capability drives purchase decision** (Query 5). **Caveat Zenet Fase 1:** Zenet NO tiene API integration con POS en Fase 1 — opera con batch upload manual (CSV/Excel/PDF/foto, ver §3.6.7). Esto significa que Zenet **compite contra una expectativa de mercado** que vendors API-integrated (MarginEdge tipo) sí cumplirían. Mitigación: Zenet debe articular en demo que el flow batch upload toma 5-10 min/día (Mode 1), y compensar con depth de interpretación operativa + acompañamiento. Esta es restricción declarada, no fallo — plan de evolution a API en Fase 2+.

**Driver primario post-compra:** reducción de cargas operativas; capacidad de operar con menos dependencia del dueño.

**Riesgo de churn:** alta vulnerabilidad — window E (champion departure). Restaurant turnover ~80% annual hace champion departure annual near-certainty (alineado con doc 04 §5.2 Window E + Query 3).

**Sales motion específica (Query 5):**
- **Best channel:** direct outreach, LinkedIn, food industry forums, restaurant ops communities. Están actively searching.
- **What to show:** **live demo** focused en specific workflow (inventory count, recipe entry, supplier price update, multi-location view). 79% buyers prefer live walkthrough > recorded demos.
- **Champion development:** provide internal selling tools — business case template para presentar al dueño, one-pager con competitor benchmarks, sample ROI con su actual food cost data.
- **Timing:** earliest y most sustained engagement. Toda la evaluation energy debe fluir through this relationship.

### 6.5 Chef ejecutivo (end user + potential blocker)

> **Strong de facto veto en Implementation stage** — el chef no puede bloquear a purchase already-made, pero puede **kill adoption silently** post-purchase (no entrando recetas, no instruyendo kitchen staff a usar plataforma, no recording yield variances).

**Journey duration:** variable — entra late (demo stage o post-purchase).

**Patrón documentado** (peer-reviewed multi-dimensional study n=27 chefs 2025): perceptions cluster en 8 themes (food quality, HR, financial, competitiveness, image, customer experience, food waste, job safety). **Mostly positive attitudes hacia tecnología en principle** — pero context matters críticamente:
- **Aceptan tecnología que SUPPORTS culinary execution** (recipe cards, yield tracking, allergen management).
- **Resisten tecnología que feels like SURVEILLANCE de su craft** (detailed costing exposing wastage, recipe locks constraining creativity).
- **Resistance es behavioral, no attitudinal** — pueden expresar verbal approval mientras failing to engage in practice.

**Decision criteria primarios** (culinary first, operational second):
- **Recipe integrity.** Recetas se sienten *suyas* en el sistema, NO abstracted into cost lines (FoodCostChef + Kafoodle Chef docs).
- **Yield + sub-recipe accuracy.** Acutely aware que yields varían por season, supplier batch, prep technique. Fixed yields = less credible.
- **NOT additional reporting burden.** Chief fear: sistema requerirá que personalmente loggee every prep variance + waste event — adding admin overhead a physical job sin admin support.
- **Kitchen-specific UX.** Diseño que requiere laptop/desktop = rejected en kitchen surfaces near heat/water. **Tablet, no laptop.**

**Trigger inicial:** invitación del dueño a validar funcionalidad culinaria.

**Riesgo de friction (doc 02 §6.1 + Query 5):**
- Chef puede ver Zenet como amenaza a autoridad culinaria si NO se enmarca como "augmenta tu capacidad".
- En Mexican high-power-distance context: chef NO opondrá openly al dueño en meeting — resistance surfaces post-purchase como inacción.

**Sales motion específica (Query 5) — la más distinta del resto del committee:**
- **Best channel: in-person, en la cocina. NO sala de demos SaaS.** Show sistema en tablet.
- **What to show:** recipe entry de un dish que ya hacen, yield adjustment para ingrediente específico, cost alert cuando supplier price cambia. **Frame: "tu kitchen's financial health dashboard" NO "nuestro cost control system."**
- **What NOT to show:** reports que expose kitchen inefficiency (waste %, prep yield gaps) ANTES de que chef internalize sistema como benefit. Son los right long-term outcomes pero **wrong entry point**.
- **Timing crítico:** **dedicated chef session, separate from operations manager's demo. NEVER combine.** En combined session, chef defers al manager y actual concerns no surface.

### 6.6 Contable externo (fiscal gatekeeper) — el stakeholder Mexico-específico

> **El finding más load-bearing del Query 5.** En US/UK literature, "finance manager" típicamente in-house o el dueño mismo. **En Mexican SMB hospitality, financial gatekeeper is almost ALWAYS external *despacho contable*.** Esta es estructura, no edge case.

**Datos load-bearing:**
- **34.9% de Mexican SMEs reciben accountancy advice para decisiones financieras** (ASEM/Siigo Aspel 2025). En sector formal (CFDI-issuing, RFC registered, monthly IVA/ISR filing) — proporción significativamente mayor.
- *Contable* role evolution: de bookkeeping specialist a **"strategic advisor que guides technology integration"** (Portal ERP México). Modern *contable* described como **"the architect of formality"** cuyas recomendaciones de tech adoption carry significant weight.
- **CFDI 4.0 + SAT real-time access (mayo 2026):** el *contable* bears professional liability si recommends software que crea SAT compliance problems. Risk-aversion hacia unfamiliar systems es estructural.

**Journey duration:** corto pero crítico. Entra en Decision/Validation.

**Decision criteria primarios — entirely fiscal y operational-process driven:**

- **CFDI 4.0 compliance.** Plataforma issues, receives, stores CFDIs en SAT-compliant XML format? Integration con certified PAC (Proveedor Autorizado de Certificación)? **Non-negotiable.**
- **Compatibility con existing accounting platform.** Si *contable* maneja contabilidad en CONTPAQi o Aspel: ¿BOH system exporta a esos formatos? O crea parallel data stream requiring manual reconciliation?
- **Cost justification.** *Contable* es functionally a CFO para muchos small operators. Evalúa monthly SaaS cost contra visible operational benefit. ROI unclear → recomienda deferral.
- **Data ownership y security.** Cloud-based storing financial data raises concerns about SAT audit exposure.

**Riesgo de veto:** **Strong de facto veto en Decision stage**. Si *contable* assess negative ("won't integrate" o "SAT audit risk"), **owner will follow** — relationship dueño/*contable* en Mexican SMB context es high personal trust, frecuentemente decades-spanning, carries authority disproportionate to formal organizational rank.

**Sales motion específica (Query 5):**
- **Engage proactively at Consideration stage**, BEFORE owner reaches Decision. *Contable* first introduced at contract signing → delay or block.
- **Best channel:** direct email o WhatsApp al *contable* (NO through cliente), con specific fiscal integration document.
- **What to show:** CFDI compliance certification, PAC authorization status, integration con CONTPAQi/Aspel, data export format, SAT audit trail capabilities.
- **What NOT to do:** treat *contable* como rubber stamp. Es **most technically demanding stakeholder para fiscal compliance questions**. Marketing materials en vez de technical specs → genera skepticism.

**Documento crítico recomendado: *Ficha Técnica Contable*** — one-pager written *for the contable* addressing CFDI integration, PAC, CONTPAQi/Aspel export. Standard sales asset.

**Strategic move estratégico — "Zenet para Contadores":**

Bind ERP success en México partly attributable a explicit "Bind for Accountants" platform que brings *contador* + business owner onto same cloud workspace. **Zenet debe evaluar developing "Zenet para Contadores" view** — read-only financial reporting que mapea al *contable*'s chart of accounts. Esto puede **eliminate accountant veto entirely** by making Zenet's data their native working environment.

### 6.7 Decision criteria divergence matrix

> Query 5 — el core insight: **cada stakeholder está solving a different problem**. "Good platform" no es shared criterion.

| Criterio | Dueño | Gerente Ops | Chef | *Contable* |
|---|---|---|---|---|
| Financial ROI | ★★★ | ★★ | ★ | ★★★ |
| Ease of daily use | ★ | ★★★ | ★★★ | ★ |
| Cross-location visibility | ★★★ | ★★★ | ★ | ★ |
| Recipe integrity / culinary control | ★ | ★★ | ★★★ | ✗ |
| **CFDI / SAT compliance** | ★★ | ★ | ✗ | **★★★** |
| POS integration | ★★ | ★★★ | ★★ | ★ |
| Cost / pricing simplicity | ★★★ | ★★ | ★ | ★★★ |
| Vendor reliability / support | ★★ | ★★★ | ★★ | ★ |

*★★★ primary, ★★ secondary, ★ tertiary, ✗ not evaluated*

### 6.8 Conflict patterns documentados

**Conflict 1: Dueño aprueba, Chef resiste implementation (el más común y documentado).**
- Mecanismo: dueño commits basado en financial ROI logic; chef percibe sistema como surveillance de yield/waste performance.
- Manifestación: NO objection explícita — resistance behavioral. Slow adoption, incomplete recipe entry, declining system access tras primeras semanas.
- **Resolution pattern:** dueño debe pre-sell al chef on specific culinary benefit ("esto te dirá qué dishes están costando margen para que enfoques en los profitable" en vez de "esto trackeará tu food waste"). **Framing: control vs insight.** Involucrar chef en demo sessions específicamente focused en recipe entry y yield, NO financial reporting.

**Conflict 2: Gerente operativo wants to move fast; *contable* stalls for CFDI/integration validation.**
- Mecanismo: temporal conflict. Champion has momentum y ready to commit; financial gatekeeper hasn't completed evaluation.
- En Mexican SMB culture: **dueño typically NOT override *contable*'s recommendation**. Relationship is high personal trust, decades-spanning.
- **Resolution pattern:** vendor proactively engage *contable* BEFORE Decision stage con technical integration brief. *Ficha Técnica Contable* como standard asset.

**Conflict 3: Multi-location timing — pilot vs simultaneous.**
- Mecanismo: gerente advocates pilot (lower risk), dueño que just committed budget pushes simultaneous para max ROI.
- Evidence (heredado Query 1): simultaneous rollout doubles implementation failure risk sin dedicated on-site support.
- **Resolution pattern:** frame pilot como accelerator, no delay — "live across both locations en 90 días en vez de 45, pero sin perder data quality porque ops manager está overwhelmed."

### 6.9 Veto dynamics — quiénes pueden bloquear y cuándo

| Stakeholder | Veto trigger | Stage | Probability |
|---|---|---|---|
| ***Contable*** | **CFDI integration gap o fiscal risk signal** | **Decision** | **High si NO proactively engaged** |
| **Chef ejecutivo** | **Sistema framed como surveillance vs insight** | **Implementation** | **Medium — chef profile dependent** |
| Gerente operativo (departure) | Staff turnover durante onboarding | Post-purchase | **High (~80% annual restaurant turnover)** |
| Dueño | Budget shock — plataforma percibida no delivering ROI by Mes 3 | 90-day review | Medium |

**Implicación crítica:** veto dynamics no son symmetrical. Owner tiene formal veto único pero shares de facto veto con 3 otros stakeholders en distintos stages. Sales motion + CS motion deben respetar esto.

### 6.10 Three-session demo structure — la sales motion recomendada

> Query 5 — para este committee, **three-session demo** > single combined demo:

| Session | Para quién | Duración | Objetivo |
|---|---|---|---|
| **Session 1** | Operations Manager | 60-90 min | Full product walkthrough, discovery-focused. **Qualify y develop el champion.** |
| **Session 2** | Executive Chef (separate) | 30-45 min | **Kitchen-context demo en tablet.** **Neutralize resistance ANTES de que se vuelva blocker.** |
| **Session 3** | Owner + Operations Manager | 20-30 min | **Business case presentation, led por ops manager con vendor support.** Convert economic buyer usando champion como co-presenter. |

**Contable NO es demo participant** — recibe *Ficha Técnica Contable* + direct technical call con vendor integration specialist.

### 6.11 Post-purchase multi-stakeholder dynamics

**Gainsight 5-persona model aplicado al beachhead Zenet (Query 5):**

| Gainsight persona | Rol en Zenet account |
|---|---|
| End Users | Kitchen staff (prep cooks, inventory clerks) + operations manager |
| Admin | Operations manager (primary configuration, data entry owner) |
| Champion | Operations manager (ongoing internal advocacy, training de new staff) |
| Executive Sponsor | Owner-operator (budget holder, expansion decision-maker) |
| Blocking role | Executive chef (puede suppress kitchen adoption) |

**Ongoing dynamics críticos a monitorear:**

**(a) Multi-threading como retention insurance:** si operations manager es el ÚNICO con active product engagement, su departure crea automatic churn event. **CS debe systematically asegurar que owner has logged in al menos once por mes y entiende al menos one core value metric** (ej. food cost variance del cross-location report). "Executive sponsor activation" previene single-threaded accounts churning silently.

**(b) Chef adoption como data quality signal:** leading indicator que plataforma generará useful data es chef + kitchen team compliance con recipe standards y waste logging. **CS health scores deben include kitchen data input frequency** as proxy de chef adoption. Accounts con low kitchen-side input están at risk no de explicit cancellation pero de "silent degradation" — paying for a platform they stopped using 60 días into implementation.

**(c) *Contable* re-engagement at Mes 3:** el *contable* typically performs post-adoption fiscal check at first monthly close cycle post-implementation. Si CFDI integration genera accounting discrepancies, *contable* raises concerns al owner — this is often the trigger para "pause and review" que precedes churn. **Proactive CS outreach al *contable* at Mes 1 close cycle** ("¿Was the data export to your accounting system complete?") puede preempt this at-risk moment.

**(d) Expansion trigger es owner-driven:** ops manager puede advocate adding tercera location, pero **expansion budget decision rests entirely con owner**. CS expansion motions deben ser owner-facing (business case for new location's ROI), no solo ops-manager-facing.

### 6.12 Mexican business culture patterns que shape el committee

**(1) High Power Distance (Hofstede) amplifies single-point dependency risk:**
- Mexico scores high — decision-making concentrada at top, employees show deference rather than challenging.
- Implication: ops manager y chef NO push back openly on owner's software decision en meeting, pero may **privately resist implementation**.
- **Zenet's CS motion must create private channels** para honest feedback de ops managers y chefs — NO solo meeting-room consensus.
- **Santander Trade verbatim:** *"A 'yes' may not mean total agreement. It can be a way to preserve harmony or avoid conflict."* Aplica directo a onboarding calls donde kitchen staff confirma understand training materials they have not absorbed.

**(2) *Contable externo* as structural feature, NO edge case:**
- Mexican SMB hospitality: financial gatekeeper almost always external *despacho*, NOT in-house.
- *Contable* role evolved: bookkeeping specialist → **strategic advisor** que recommends/opposes software based on platform preferences (muchos use Aspel/CONTPAQi exclusively).
- Bind ERP "Bind for Accountants" precedent — direct product response a esta dinámica.

**(3) SAT CFDI obligations elevate *contable* practical authority:**
- E-invoicing requirements (CFDI 4.0, mandatory para all formally registered).
- May 2026 SAT now requires digital platforms continuous real-time online access to transactional data.
- **Regulatory environment elevates *contable*'s gatekeeping a compliance function**, not just financial opinion. *Contable* recommending software con SAT compliance problems bears professional liability.

**(4) *Confianza* (trust) precedes commitment:**
- Mexican B2B culture relacional. Business decisions follow personal trust — takes time to build.
- Restaurant owner Tijuana more likely to purchase BOH software recommended by trusted CANIRAC peer than from vendor whose demo impressed.
- **Implication:** Zenet sales motion should invest en **community presence** (CANIRAC Tijuana membership, events sponsorship, operator testimonials Spanish + local market) BEFORE expecting demos to close.

**(5) Lower digital maturity extends evaluation cycle:**
- Solo 34.9% Mexican SMEs reciben formal accounting advice; >60% recognize digitalization importance pero only minority has done so comprehensively.
- Tijuana independents managing operations informally → cloud-based BOH SaaS may require **educational selling** — not just product demonstration.
- ICT adoption resistance study (ERTR): "lack of knowledge about what products are available" + "difficulty predicting ROI" son common barriers en independents. Different from US/UK operators using 5-8 tools comparatively.

### 6.13 Cuándo divergen los journeys y cómo sincronizar

**Divergen estructuralmente en:**

- **Velocidad:** dueño está en journey de meses-años; *contable* entra y sale en días.
- **Lenguaje:** dueño habla operación; *contable* habla números/CFDI; chef habla cocina; gerente habla equipo.
- **Drivers:** cada uno valora cosas distintas (cf. doc 02 §6 + matrix §6.7).
- **Channels:** peer/CANIRAC para dueño; LinkedIn/forums para gerente; in-kitchen tablet para chef; direct technical brief para *contable*.

**Estrategia de sincronización (refinada con Query 5):**

- **Fase 3.4-3.5 (consideración + decisión):** sales motion opera a **4 velocidades simultáneas**. **Three-session demo** (§6.10) + parallel *contable* track (§6.6).
- **Fase 3.6-3.10 (post-purchase):** customer success rastrea estados emocionales y de uso **por rol** — no solo "el operador". Multi-thread Day 1 + Mes 1 *contable* check-in + kitchen adoption metric separate from management login.
- **Mensajería diferenciada por rol:** doc 02 §6 ya documenta jobs distintos por persona. Doc 04 confirma que **el journey también es distinto** — diseñar mensajería única para todos los stakeholders falla en este segmento.

**Implicación de diseño:** Zenet necesita 4 journeys de mensajería paralelos, no 1. Esto es coste estructural pero **es ineludible dado el buying committee documentado del beachhead Mexican** (doc 06 ecosystem + doc 02 §6 + Query 5 multi-stakeholder evidence).

---

## 7. Implicaciones operativas

Tres síntesis accionables del journey, ancladas a fases concretas — no consejo genérico.

### 7.1 Mensajería por fase

| Fase | Hook que funciona | Hook que falla |
|---|---|---|
| 3.1 Pre-awareness | NO se hace mensajería directa — el operador aún no reconoce el problema. Solo content ambient sobre "cómo crece un restaurante con orden" | Mensajes que asumen reconocimiento del problema ("¿harto del caos?") |
| 3.2 Awareness del problema | *"El problema no es del equipo, es del sistema"* — articula la transición cognitiva crítica. Validado por doc 03 §2.1.2 | Mensajes que ofrecen solución antes de nombrar el problema sistémicamente |
| 3.3 Awareness de la categoría | *"Más que Excel, menos que SAP — un sistema operativo para tu back-of-house"* — nombra la categoría intermedia | Tech jargon ("AI-native", "cloud-native"), o framings de POS ("punto de venta inteligente") |
| 3.4 Consideración activa | Casos similares locales + ROI numérico + endorsement peer/consultor + demo presencial | Demos virtuales genéricas, ROI abstracto, sin caso comparable local |
| 3.5 Decisión | Piloto 30-60 días con opción de salir + plan de implementación claro + commitment de acompañamiento | Long-term contracts sin escape; pricing arbitrario; sin claridad sobre soporte |
| 3.6 Onboarding | *"Te acompañamos durante la implementación, no te dejamos solo"* + materiales en lenguaje del operador | Documentación técnica en jargon; expectativa de auto-onboarding |
| 3.7 Activación | *"Mira lo que ya cambió en 60 días"* — data concreta de improvement | Mensajes vagos sobre "potencial"; comparación con casos no relevantes |
| 3.8 Adopción y maduración | *"Zenet evoluciona contigo"* — frame de partnership, no de proveedor | Up-sell agresivo prematuro; mensajes que sienten transaccionales |
| 3.9 Expansión | *"Tu siguiente sucursal arranca con sistema desde día 0"* | Up-sell no anclado a milestone real del operador |
| 3.10 Advocacy | *"Comparte tu historia con peers que están donde tú estabas"* — invitación a referir | Solicitudes de referrals sin vínculo emocional o sin reciprocidad |

### 7.2 Producto y customer success — touchpoints críticos

**Touchpoints que sostienen retención (cross-fase):**

- **Onboarding milestone celebration:** marcar momentos pequeños en setup como wins concretos — primera receta digitalizada, primer inventario reconciliado, primer cierre mensual cuadrado.
- **First Value Moment (FVM) explícito:** Zenet debe identificar explícitamente cuándo el operador alcanzó FVM y celebrarlo activamente. No dejarlo implícito.
- **Quarterly Business Review (QBR):** trimestral con data de improvement. Esencial para sustentar perceived value durante post-honeymoon (window C).
- **Champion onboarding ritual:** cuando el champion interno cambia (window E), Zenet tiene un protocolo formal de re-onboarding del nuevo champion.
- **Renewal conversation 30-60 días antes (no día previo):** anticipación para evitar surprise en window D.

**Producto features críticas para journey:**

- **Visibility cross-sucursal:** clave en 3.7-3.8 (adopción) — el operador necesita ver el valor extendido a multi-location, no solo a una.
- **Modular addition:** clave en 3.9 (expansión) — la capacidad de agregar módulos/sucursales sin re-onboarding completo.
- **Reporting that supports advocacy:** en 3.10, el operador necesita mostrar resultados a peers — Zenet debe facilitar el "show your wins" naturalmente.
- **In-product behavioral triggers para expansión** (Query 4): contextual prompts triggered by behavior convert **3-5x más** que email campaigns. Diseño desde Día 1 — no como afterthought. Triggers concretos para Zenet beachhead: completing primer full quarter de consistent inventory counts → multi-location rollout prompt; recipe library hits 80% del plan limit → upgrade prompt; daily login for 30 consecutive días → upsell readiness signal.

**Economics que justifican el énfasis en expansion vs new acquisition (Query 4 — Athenic n=19 B2B SaaS over 18 months):**

| Métrica | New customer acquisition | Existing customer expansion |
|---|---|---|
| Cost | £3,200 CAC | **£180** |
| Close cycle | 45 días | **7 días** |
| Close rate | 21% | **68%** |
| Payback | 32 meses | **1 mes** |

Top quartile B2B SaaS companies generan **62% del revenue from expansion** (no de new logos). Para Zenet en Year 3+, este es el target aspiracional — pero requiere construir the in-product trigger infrastructure desde Year 1.

### 7.3 Canal y timing por fase

Anclado a doc 03 §5.7-§5.8 trust hierarchy.

| Fase | Canal primario | Canal secundario | NO usar |
|---|---|---|---|
| 3.1 Pre-awareness | Content ambient social media + LinkedIn de Alan + podcasts | Eventos gremiales | Outreach directo |
| 3.2 Awareness del problema | Content educativo + peer conversations | LinkedIn organic | Vendor cold email |
| 3.3 Awareness categoría | Peer recommendations + consultor partner introductions | Trade press hispano | Vendor cold call |
| 3.4 Consideración | Demos presenciales + peer references + consultor endorsement | Vendor website + caso de estudio | Cold outreach |
| 3.5 Decisión | Direct sales engagement + financial materials + pilot offer | Visit to peer Zenet user | Pressure tactics |
| 3.6 Onboarding | Customer success team in-person + materials | Self-service docs | Pure asynchronous onboarding |
| 3.7 Activación | CS check-ins + product engagement | Peer success stories | Aggressive upsell |
| 3.8 Adopción | Periodic CS review + community emerging | Events + content | Transactional vendor model |
| 3.9 Expansión | Account success conversations | Module launches | Cold cross-sell |
| 3.10 Advocacy | Peer events + social media + case studies | Awards / press | Solicit-and-disappear referral programs |

---

## 8. Hipótesis abiertas prioritarias

Cinco preguntas críticas que las primeras conversaciones con design partners — y luego los primeros 15-25 clientes pagando — tienen que cerrar específicamente sobre el customer journey en el tiempo. Diferentes de las de doc 01 §8, doc 02 §8, doc 03 §7.

### 8.1 ¿Cuál es el TTFV real para el beachhead?

¿Cuántos días desde firma hasta primer beneficio tangible? ¿Es 30, 60, 90, o más? Crítico para diseño de onboarding y para forecast de retención. La hipótesis de etapa 1 es 30-90 días pero sin medición real es estimación.

### 8.2 ¿En qué momento y por qué churnean los operadores que churnean?

Las 6 churn windows del §5.2 son inferencia de SaaS research general. Para el beachhead específico — TJ casual independiente, dueño-operador, post-segunda apertura — ¿cuál window es la más letal? ¿Hay alguna que no anticipamos?

### 8.3 ¿Cuándo y cómo aparece advocacy genuino?

¿Después de cuántos meses de uso? ¿Bajo qué condiciones? ¿Solo después de tercera apertura? ¿Solo si Zenet sustenta resultados ante peers que el operador admira? La fase 3.10 es teóricamente el flywheel del negocio — sin entender su trigger real, no se puede operacionalizar.

### 8.4 ¿Cuánto tiempo real toma cada fase pre-purchase para el dueño TJ?

La estimación de doc 05 §5.1 (mes 0-3 → 4-9 → 10-18) es razonable pero no validada con dueños TJ específicamente. ¿Es más rápido en TJ (dolor más agudo por contexto inflación 2024)? ¿Es más lento (distrust mayor)? Determina cadencia de marketing y timing de outreach.

### 8.5 ¿El journey del chef converge o diverge del journey del dueño?

¿El chef llega al estado de "adopción profunda" al mismo ritmo que el dueño, antes, o después? ¿Hay casos donde el chef churnea mientras el dueño persiste (o viceversa)? Crítico para diseño de customer success multi-stakeholder.

### 8.6 ¿El operador del beachhead reconoce el "scaling rupture" como momento específico, o lo vive como "cosas se rompieron sin saber por qué"?

El 5-phase emotional arc académico (doc 03 §9.3) declara la apertura de segunda sucursal como momento de mayor riesgo psicológico. Pero el operador puede no atribuirlo conscientemente al escalamiento — puede atribuirlo a "el equipo nuevo no se compromete" o "fue un mal año". Si la atribución consciente difiere del mecanismo estructural, mensajería que invoca "scaling rupture" puede no resonar — habría que invocar los síntomas, no la causa.

---

## 9. Fuentes

### Conversaciones citadas

- **Víctor Murguía** — Chef y consultor gastronómico independiente (Mexicali). Demo MVP 2026-04-01. Industry insights: 7-year restaurant lifecycle, escasez de cocineros, augmentar no reemplazar.
- **Anna Palazuelos** — Consultora gastronómica. LinkedIn DM 2026-03-19. Secuencia operativa estandarización → inventario → costo.
- **Algira Garzón** — Consultora OD en hospitalidad. Discovery 2026-03-20.

### Documento externo central

- `/02_Producto-y-Tech/Production-software/Zenet/docs/project-strategy/business-context/zenet-business-context-production.md` v1.0 (2026-04-06):
  - §4 User Personas — alimenta §6 multi-stakeholder.
  - §5 Value Components — alimenta §3.7 first value moment.
  - §10 Go-to-Market — alimenta §7.3 canal y timing.
  - §11 Industry Insights — alimenta §3.1, §3.2 (escalamiento), §5.2 (churn windows).

### Documentos del workspace referenciados

- `00-etapas-y-marco-de-investigacion.md` — taxonomía de etiquetas, etapa actual (`discovery-pre-PMF`).
- `01-metodologia-y-fuentes.md` — gap del dueño-operador del beachhead, criterios de saturación.
- `02-jobs-to-be-done.md` — articulación de jobs por persona; alimenta §6 multi-stakeholder.
- `03-pains-y-workarounds.md` — fuente master para friction (§5.1), trust hierarchy (§7.3), 5-phase arc académico (§2.2), workaround patterns que sostienen pre-awareness (§3.1).
- `Market Research and Analysis/_context/01-industry-and-market/05-perfil-de-cliente-ideal.md` §5 — base original del customer journey awareness → paying que doc 04 absorbe y expande.
- `Market Research and Analysis/_context/01-industry-and-market/04-segmentacion-de-mercado.md` — beachhead = sub-segmento B en consolidación post-segunda apertura.
- `Market Research and Analysis/_context/01-industry-and-market/06-estructura-y-ecosistema.md` §14 — modelo consultor partner como canal estructural.
- `Market Research and Analysis/_context/01-industry-and-market/07-geografia-y-expansion.md` — Tijuana como Fase 1, criterios de avance por precondición.
- `CLAUDE.md` §8 — capa cultural antagonista.
- `Branding/_context/02-brand-story/narrativa.md` — frame antagonista cultural.

### Triangulaciones externas heredadas (vía doc 03 §9.3)

Las 5 queries Perplexity 2026-05-06 ya integradas en doc 03 alimentan doc 04 indirectamente:

- **Query 1 — 5-phase emotional arc:** columna vertebral de §2.2 y mapeo emocional por fase.
- **Query 1 — tabla de triggers de estrés agudo:** alimenta §4.1.
- **Query 5 — trust hierarchy peer > vendor:** alimenta §7.3 canal y timing.
- **Query 5 — 6 clusters de barreras:** alimenta §5.1 friction por fase.
- **Query 5 — 8-9 fuentes consultadas pre-purchase:** alimenta §3.4.
- **Query 5 — distrust 40.9% Mexico:** alimenta §3.3-§3.4 friction y canal.
- **Query 2 — silence architecture:** alimenta §6 multi-stakeholder (los stakeholders no nombran espontáneamente fricción relacional, requiere protocolo de discovery).

### Triangulación Perplexity Pro — Query 1 (2026-05-06)

Query: *"Restaurant SaaS onboarding patterns first 30 60 90 days independent operators time-to-first-value benchmarks"*. Modo: DeepSearch.

**Fuentes Mexico-específicas:**

| # | Título | Autor / Org | Fecha | Tipo | Notas |
|---|---|---|---|---|---|
| Q1-1 | "Los retos de implementar un software para restaurantes" | Soft Restaurant / National Soft | abr 2020 | Vendor doc | 12-16 hrs basic implementation, dual-running, learning curve México |
| Q1-2 | Distribuidor Soft Restaurant Tijuana | SYCA Consultores | ongoing | Regional distributor | 10+ años Tijuana market — modelo distribuidor local |
| Q1-3 | Entropía Digital Tijuana | Entropía Digital | ongoing | Regional distributor | 30 años sector restaurantero — distribuidor autorizado Soft Restaurant TJ |
| Q1-4 | "10% de los restaurantes utilizan software" | Retailers.mx / National Soft | may 2023 | Trade press | **10% adopción software MX** — baseline crítico |
| Q1-5 | "Mexican companies far from digital maturity" | Needed Education / Expansion | 2024 | Business report | 41.7% digital transformation; solo 1% AI maturity |
| Q1-6 | "AI in restaurant sector — Ciudad Juárez study" | Dialnet | 2024 | Academic study (n=159) | Border-region MX restaurant SMEs digital adoption — análogo geográfico más cercano |
| Q1-7 | CANIRAC digital transformation alliances | CANIRAC | 2022-2025 | Industry association | 96.4% micro-enterprises |
| Q1-8 | Soft Restaurant Academy | National Soft | 2024+ | Vendor training platform | Micro-lessons como modelo de capacitación ongoing |

**Fuentes vendor practitioners (US/EU benchmarks):**

| # | Título | Autor / Org | Fecha | Tipo | Notas |
|---|---|---|---|---|---|
| Q1-9 | "What I've learned from 100+ restaurant tech rollouts" | Nory.ai | feb 2025 | Vendor practitioner | 4-phase milestone framework — gold standard reference |
| Q1-10 | "R365 Implementation Mistakes Multi-Unit Operators" | TRIS | abr 2026 | Implementation consultant | POS mapping failures, data migration audits |
| Q1-11 | "Beyond the Demo: Restaurant SaaS Sales Success" | SynergySuite / Cloud Awards | ene 2026 | Vendor thought leadership | ROI requirements, 30-60 day value window |
| Q1-12 | MarginEdge Onboarding documentation | MarginEdge | 2023-2026 | Vendor doc | 30-day structured onboarding model |
| Q1-13 | MarketMan Implementation FAQ | MarketMan | 2024-2026 | Vendor doc | 2-4 week single-location timeline |
| Q1-14 | StockTake Online | StockTake | 2025 | Vendor doc | POS integration + menu/recipe mapping |

**Fuentes SaaS general benchmarks:**

| # | Título | Autor / Org | Fecha | Tipo | Notas |
|---|---|---|---|---|---|
| Q1-15 | "Customer Onboarding Statistics 2026" | Userpilot benchmarks | 2025-2026 | Industry benchmark | 19.2% checklist completion, 75%/90% abandonment cliff |
| Q1-16 | "B2B Onboarding Completion Rates" | Getmonetizely / Totango / Gainsight | jun 2025 | Industry benchmark | B2B 40-60%; enterprise 70-90% |
| Q1-17 | "Time-to-Value Framework" | RetentionForge | 2025 | CS practitioner | Pre-structured 60% → structured 87% completion |
| Q1-18 | "SaaS Customer Health Score Automation" | USTech / ProfitWell | mar 2026 | CS practitioner | **Login frequency #1 churn predictor** en 23K SaaS companies |
| Q1-19 | "Why Users Drop Off During Onboarding" | SaasFactor | mar 2026 | CS practitioner | 75% abandon first week; 3-step vs 7-step tour data |

**Fuentes operator-voice + research académica:**

| # | Título | Autor / Org | Fecha | Tipo | Notas |
|---|---|---|---|---|---|
| Q1-20 | r/restaurantowners threads | Reddit | 2025-2026 | Operator forum | Shadow Excel behavior + tech resistance verbatims |
| Q1-21 | "Independent restaurateurs and technology" | EHL / METRO Chair | 2017 | Academic | **Caveat: 2017, EU/Japón.** 3 adoption barriers: cost, priority, strategy |
| Q1-22 | Kladana case studies | Kladana | 2023+ | Vendor case study | Operator verbatims sobre Excel transition |

**Reporte original completo (28 fuentes):** `/Users/alanbahena/Downloads/Restaurant SaaS Onboarding First 90 Days — Independent Operators in Mexico & LATAM.md`.

**Caveats críticos declarados por la propia investigación:**
1. **No existe data Mexico/LATAM-específica de BOH SaaS onboarding completion rates.** Benchmarks abajo son SaaS/US general — Mexican operators probably underperform dado baseline digital maturity.
2. **No operator-voice case studies de independientes mexicanos** publicados online. SYCA/Entropía Digital no publican case studies del Tijuana market.
3. **EHL study es 2017, EU/Japón** — el más rigurous académico disponible pero con caveat temporal/cultural.
4. **Ciudad Juárez study (n=159)** es geographic analog más cercano disponible — confirma constraints similares pero sin completion rate quantitativo.
5. **Vendor case studies** son US/UK/EU markets — Mexico likely requires longer timelines, more hand-holding, more Spanish-language training.

**Implicación estratégica para Zenet:** las primeras 5-10 conversaciones con design partners producirán **literatura primaria de onboarding restaurant BOH SaaS para operadores independientes mexicanos que no existe en ningún otro lado**. Activo de research declarado, mismo patrón que doc 03 §9.

### Triangulación Perplexity Pro — Query 2 (2026-05-06)

Query: *"Time-to-first-value B2B SaaS small business hospitality back-of-house benchmarks"*. Modo: Search Pro.

**Fuentes load-bearing — TTFV-retention correlation:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q2-1 | Time-to-Value: The Quiet Predictor of Future Churn | User Intuition | nov 2025 | CS analysis 10,000+ customer interviews | **TTFV <14 días = 89% retención; >30 días = 34%** |
| Q2-2 | Time-to-Value Framework | RetentionForge (PDF) | 2024 | CS framework | <30 días: 96% first-year; 30-60: 88%; 60-90: 79% |
| Q2-3 | Metrics That Matter Ep.3: TTFV | Tom Parker (LinkedIn) | abr 2025 | CS practitioner | 2.3x renewal at <30 días; 47% expansion at <14 días |
| Q2-4 | The Silent, Lurking Churn: Activation Rates Less Than 90% | SaaStr (Jason Lemkin) | jul 2025 | Founder practitioner 12+ SaaS companies | SMB TTV <30 días; Klaviyo 90% activation |
| Q2-5 | First 90 days matter more than anything | Reddit r/SaaS | mar 2026 | Primary operator data | **12% vs 3% mensual churn pre/post-90 días (4x)** |
| Q2-6 | The Science of SaaS Onboarding | SaasFactor | mar 2026 | CS framework | **70% churn dentro 90 días por poor onboarding**; 3+ features = 70% higher retention |
| Q2-7 | B2B SaaS TTFV under 7 days = 50% lower churn | Optifai Pipeline / Axion | 2026 | n=939 B2B SaaS companies | Industry avg TTFV = 14 días |
| Q2-8 | 2023 B2B SaaS Retention Benchmarks | SaaS Capital | 2023 | n=1,500+ B2B SaaS US/EU | 90% gross retention at ACV <$25K (SMB) |
| Q2-9 | SaaS Onboarding Statistics 2026 | Userpilot / Focus Digital via ShNo | 2025-2026 | Benchmark aggregation | **43% SMB losses en primeros 90 días**; Cross-SaaS TTFV 1d 12hr |
| Q2-10 | TTFV Calculation Guide | Getmonetizely / OpenView Partners / Totango | jun 2025 | Practitioner | TTFV <24hr = +18% NRR; -30% TTFV = +15% conversion |

**Fuentes BOH-específicas (las más relevantes para Zenet):**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q2-11 | MarginEdge Onboarding Phase 1 | MarginEdge | feb 2026 | Vendor onboarding doc | Week 1 TTFV: "real-time food cost visibility unlocked" |
| Q2-12 | Your Onboarding Journey — MarginEdge | MarginEdge | ene 2025 | Vendor onboarding doc | 3-phase 90-day structure |
| Q2-13 | MarginEdge Onboarding Guide (timing detail) | MarginEdge | 2025-2026 | Vendor doc | **10-15 min/recipe; ~45 min/inventory count** |
| Q2-14 | MarginEdge case study (Firm of the Future) | Intuit | feb 2023 | Vendor case study | Invoice processing 24-48 hrs |
| Q2-15 | Los retos de implementar un software para restaurantes | Soft Restaurant MX | abr 2020 | Vendor doc | 12-16 hrs base implementation; tech experience as predictor |
| Q2-16 | 10% de los restaurantes utilizan software | Retailers.mx / National Soft | may 2023 | Trade press | Mexico baseline 10% software adoption |
| Q2-17 | How Different is Inventory Management Single vs Multi-site | TechOnToast | jun 2024 | Industry practitioner | Multi-site complexity "exponentially" greater |

**Fuentes case studies + compression:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q2-18 | CirclStdio B2B SaaS Onboarding Case Study | CirclStdio | dic 2025 | Implementation case study | TTFV 14→7 días → conversion 8%→13%, support tickets -35% |
| Q2-19 | The 30-Day Time-to-Value Plan | ClientSuccess | abr 2026 | CS practitioner | TTFV vs onboarding completion: activities ≠ outcomes |
| Q2-20 | Average Time to Value by SaaS Category 2026 | Artisan Growth Strategies | abr 2026 | Benchmark synthesis | 1d 1hr median; B2B 1-3 months; AI-native fastest |
| Q2-21 | How to Reduce Time to Value in Onboarding in SaaS | Chameleon.io | 2023-2024 | Practitioner | B2B typical 1-3 months; 30-60 days initial milestone |
| Q2-22 | Rapid Customer Onboarding in B2B SaaS | Brainstorm Inc | 2025 | Practitioner | Drive value in 20 days framework |
| Q2-23 | SaaS Onboarding Optimization | Loyalty.cx / Rocketlane | dic 2025 | Practitioner | **83% B2B buyers say slow onboarding is dealbreaker; ROI within 14 días expected** |
| Q2-24 | 3 GTM Benchmarks 2026 | Pierson / LinkedIn | ene 2026 | Practitioner | Customers hitting value en 14 días = 3x less likely to churn en 90 días |

**Reporte original completo (24 fuentes):** `/Users/alanbahena/Downloads/Time-to-First-Value (TTFV) Benchmarks Restaurant BOH SaaS & SMB Operators.md`.

**Caveats críticos declarados por la propia investigación:**
1. **No published TTFV data específica para restaurant BOH SaaS exists.** MarginEdge, MarketMan, Nory no publican TTFV metrics quantified.
2. **No TTFV data para Mexico, LATAM, o cualquier non-English-speaking market.** Mexican operators likely **1.5x-2x longer** TTFV vs. US benchmarks dado baseline digital maturity.
3. **No quantified TTFV comparison entre solo operators y managed teams** existe — variance por profile es síntesis de qualitative practitioner evidence.
4. **Distinction entre BOH y FOH/POS TTFV no se hace en ninguna fuente publicada** — consensus es BOH es materially longer pero no quantified.
5. **All retention correlation figures** son global/US SaaS sin hospitality-specific stratification — directional anchors, no precise predictions para Mexican restaurant operators.

**Implicación estratégica para Zenet — la cifra más importante a internalizar:**

> **TTFV <14 días = 89% retención 12-mes. TTFV >30 días = 34% retención 12-mes.**

Para BOH SaaS donde Tier 2 first value realísticamente toma 14-28 días bajo good conditions y 45-90+ días bajo difficult conditions, **la inversión más apalancada en producto/CS de Zenet es comprimir recipe entry y first inventory cycle al primer 14 días**. Cada día comprimido del TTFV es retention margin gained.

**El 90-day window es el defining retention battleground.** 70% del churn de SaaS pasa ahí. 4x ratio churn pre/post-90 días.

### Triangulación Perplexity Pro — Query 3 (2026-05-06)

Query: *"Customer churn patterns timing causes restaurant SaaS independent SMB hospitality"*. Modo: DeepSearch.

**Fuentes load-bearing — churn timing distribution:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q3-1 | Restaurant POS Software Churn Rate: Benchmarks | RetentionCheck | mar 2026 | Vertical benchmark | Restaurant POS 3.9% mensual; **34% closure-driven churn** |
| Q3-2 | SMB SaaS Churn Rate Benchmarks | RetentionCheck | mar 2026 | SMB benchmark | 4.5% mensual / 42.3% anual; 30-day activation 3-4x churn lever |
| Q3-3 | Full Guide to B2B SaaS Churn Rate Management 2026 | Churnbuster.io | abr 2026 | CS practitioner | 90-day concentration 15-25%; renewal 60-70%; involuntary 20-40% |
| Q3-4 | First 90 days matter more than anything | Reddit r/SaaS | mar 2026 | Primary operator data | **12% vs 3% mensual churn pre/post-90 días** |
| Q3-5 | B2B SaaS Churn Rate Benchmarks | Optifai Pipeline | 2026 | n=939 B2B SaaS | SMB 3-5% mensual; mid-market 1.5-3%; enterprise 1-2% |

**Fuentes voluntary/involuntary breakdown + Mexico premium:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q3-6 | Average Churn Rate by Industry SaaS 2025 | Focus Digital / Vitally.io | dic 2025 | Industry benchmark | **74% voluntary / 26% involuntary** baseline |
| Q3-7 | SaaS Churn Rate Benchmarks 2026 | MRRSaver / Recurly | feb 2026 | Benchmark aggregation | Up to 48% involuntary; lower-ARPA = higher involuntary |
| Q3-8 | Why Payment Processing Decline Rates Are So High in LATAM | Rapyd | mar 2025 | Payments industry | **LATAM decline rates 15-25% — among highest in world** |
| Q3-9 | Reduce Churn with Automated Billing Solutions in LATAM | 4Geeks | abr 2026 | Payments practitioner | **10-20% recurring revenue loss to preventable payment failures en LATAM** |
| Q3-10 | 2025 Latin America Informal Economy & Digital Payments | PaymentsCMI | jun 2025 | Payments research | 33% GDP informal; cash 37% consumer spending 2025 |

**Fuentes champion departure quantified:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q3-11 | A Comprehensive 6-Step Strategy: Champion Departures | ChurnZero / Sturdy research | jun 2023 | CS practitioner (BIG RYG conference) | **51% churn after champion leaves; 65% after exec sponsor; 48-hour intervention = +33% renewal** |
| Q3-12 | Churn Analysis for SaaS: Playbook | User Intuition | mar 2026 | 723-case churn analysis | Champion loss 20%+ de cases; **4.7 mes avg departure-to-churn timeline** |
| Q3-13 | Why Do Customers Churn? | GetPerspective | abr 2026 | CS analysis | Champion tenure 18-24 meses; champion turnover #1 hidden churn driver |
| Q3-14 | Strategies to reduce restaurant staff turnover | Spindl | 2025 | Industry guide | Restaurant turnover **~79.6% industry-wide** — champion departure annual near-certainty |

**Fuentes predictors + health scoring:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q3-15 | SaaS Customer Health Score Automation | USTech / ProfitWell | mar 2026 | n=23,000 SaaS companies | **78% churn preceded by behavioral signals 30+ días prior**; login frequency #1 |
| Q3-16 | SaaS Churn: How to Diagnose, Measure, Fix | KissMetrics | 2025 | CS practitioner | Login frequency, support tickets pattern, milestones |
| Q3-17 | B2B SaaS Retention Guide for Lean Teams | Churn Assassin | 2026 | CS practitioner | "Churn shows up 90-180 días antes en quieter ways" |
| Q3-18 | How we slashed churn by 34% | Reddit r/SaaS | ene 2026 | Primary case study | 7 north star activation events; 34% churn reduction |

**Fuentes recovery / save / win-back:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q3-19 | Discount vs Pause vs Cancel: What Saves Subscribers | ChurnRecovery | feb 2026 | Practitioner | **Pause 15-25% accept; 60-70% return; structured cancel flow 40-65% save** |
| Q3-20 | Segmenting by Churn Type / Reactivation Strategies | ChurnWard | feb 2026 | Win-back synthesis | Win-back 7-15%; **personalized up to 45%** (V. Kumar HBR) |
| Q3-21 | Customer WinBack Benchmark Study 2023 | WinBack Labs | 2023 | Industry study | 26% avg win-back rate; 20-40% probability reactivation |
| Q3-22 | How to Track Win-Back Campaign Effectiveness | Getmonetizely / Totango | jun 2025 | CS practitioner | **Dropbox 14-day timing = +28% recovery** |

**Fuentes operational shock + Mexico SME fragility:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q3-23 | The Restaurant Industry in Mexico — COVID Impact | Academia Journals Oaxaca | 2021 | Academic | **90,000 restaurants cerraron en MX durante COVID** |
| Q3-24 | Business Closure: Other Unstoppable Epidemic | Signos Vitales Mexico | 2024 | SME research | **47% Mexican SMEs >50% bankruptcy probability** |
| Q3-25 | 120,000 Restaurant Closures in Mexico | USDA/FAS | 2021 | Government report | 120,000 closures; Mexico GDP -8.9% |
| Q3-26 | Independent Restaurant Operator Perspectives COVID-19 | PMC/NIH | nov 2020 | Academic study (US South Carolina) | 25% no reabrieron tras 60-day closure |
| Q3-27 | Restaurant closures during COVID-19 | PMC/NIH | feb 2022 | Academic (Yelp/SafeGraph national) | 15.2% US restaurant closure 2020 |
| Q3-28 | Platform Dependence During COVID-19 | LSEEE peer-reviewed | dic 2025 | Academic | Digital infrastructure = survival advantage |
| Q3-29 | Restaurant Failure Rate Plunges in 2025 | Datassential | feb 2026 | Industry data | **60% fail in 3 years**; baseline failure rates |
| Q3-30 | Restaurant SaaS Churn: Why Product Alone Isn't Enough | Vertical GTM Guild / LinkedIn | mar 2026 | Practitioner | **"12-month churn 15-20% even if your software is perfect"** |

**Reporte original completo (30 fuentes):** `/Users/alanbahena/Downloads/SMB Hospitality SaaS Churn Timing, Causes, Predictors, and Recovery Interventions.md`.

**Caveats críticos declarados por la propia investigación:**
1. **No published study cuantifica SaaS churn rates, timing distributions o cause rankings específicamente para Mexican restaurant operators.**
2. **No churn rate benchmarks para Mexican restaurant SaaS** (any platform).
3. **No timing distribution data para Mexican SMB hospitality SaaS churn.**
4. **No published data sobre win-back rates para LATAM SMB SaaS.**

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) Mexico involuntary churn premium 30-40%+:** local payment rails (OXXO Pay / SPEI / CoDi / Clip) NO son nice-to-have — son retention infrastructure. Sin esto, Zenet pierde 10-20% recurring revenue a preventable payment failures.
>
> **(2) Champion departure es near-certainty annual** (79.6% restaurant staff turnover): multi-thread desde Day 1 (owner + manager) NO es opcional. 48-hour intervention al detectar señal = +33% renewal lift.
>
> **(3) 78% del churn es predicted 30+ días antes por behavioral signals.** El failure de retención es organizational (no detecting), no producto. Lean health score con 5-7 north star events > full composite.
>
> **(4) Estructural baseline floor 15-20% annual churn** independiente de calidad de producto. Distinguir preventable vs structural desde inicio.
>
> **(5) Subscription pause es high-ROI save:** 15-25% accept, 60-70% return. First-line intervention para Mexican operators con cash flow seasonality.

### Triangulación Perplexity Pro — Query 4 (2026-05-06)

Query: *"Expansion revenue patterns SMB SaaS restaurant industry net revenue retention benchmarks"*. Modo: Search Pro.

**Fuentes load-bearing — NRR benchmarks por segmento:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q4-1 | B2B SaaS Churn Rate Benchmarks | Optifai Pipeline Study | 2025-2026 | n=939 B2B SaaS | **SMB <$25K NRR median 97%; top quartile >105%; mid-market 108%; enterprise 118%; best-in-class >130%** |
| Q4-2 | 2025 Vertical SaaS Benchmark Report | Tidemark | 2025 | n=200+ vertical SaaS | **Multi-product NRR 110% vs single 100%**; ARPA nearly doubles; ARR 50%→60% |
| Q4-3 | ChartMogul SaaS Benchmarks 2024 | ChartMogul | 2024 | n=2,100 venture-backed | B2B SaaS median NRR 106% |
| Q4-4 | Usage-Based Pricing State of the Industry | OpenView Partners | 2025 | Global SaaS | **Usage-based 120-140% NRR vs seat-based 105-115%** |

**Fuentes time-to-expansion + restaurant-specific:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q4-5 | Expansion Metrics Library | Rework.com | 2025 | Practitioner synthesis | Usage 3-6 mo / Upsells 6-12 / Cross-sells 12-18 |
| Q4-6 | How to Scale Restaurant Business | Misekit | 2026 | Restaurant operations guide | First location to second-location decision: **18-24 meses** |
| Q4-7 | Restaurant Multi-Location Strategy | Spindl | 2026 | Industry guide | Decision to opening: 12-18 meses; second-location stable: 6-12 meses |
| Q4-8 | Restaurant Management Software Market | Mordor Intelligence | 2026 | Industry report | **Small chains 2-20 locations growing 15.78% CAGR**; enterprise chains 100+ = 40% del market revenue |

**Fuentes triggers + expansion sales motions:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q4-9 | Expansion Revenue Upsell Timing Triggers | Athenic | 2025 | n=19 B2B SaaS over 18 months | **Existing expansion: £180 cost, 7-day close, 68% close rate, 1-month payback vs new £3,200 CAC, 45-day, 21%, 32-month**; **80% of limit = optimal trigger timing** |
| Q4-10 | SaaS Growth Strategies 2026 | GroovyWeb | 2026 | Practitioner | **In-product behavioral triggers convert 3-5x higher than email** |
| Q4-11 | QBR Best Practices | Work-Bench | 2025 | Practitioner | Upsells in QBRs must be subtle, value-first |
| Q4-12 | The Essential Guide to QBRs | Gainsight | 2025 | CS practitioner | QBR must emerge from value, not lead with sales |
| Q4-13 | Upselling Through Automation | Velaris | 2025 | CS practitioner | Email automation lowest effectiveness; persistent background nurture |

**Fuentes fragmented stack + module adoption:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q4-14 | Restaurant Software in the United States 2026 | Chowly | 2026 | Industry analysis | **Independents use 5-8 disconnected tools**; feature sprawl frustration |
| Q4-15 | 75% Independent Restaurants Plan New Tech 2023 | Hospitality Tech | 2023 | Study | Adoption rates: accounting 25%, loyalty 25%, scheduling 24%, QR 24%, online ordering 24% |
| Q4-16 | Breaking Down Restaurant Tech Adoption | Chris Munz LinkedIn | 2025 | Practitioner | Operadores reportan que CRM/marketing platforms tienen features que NO usan |
| Q4-17 | The Science of SaaS Onboarding | SaasFactor | 2026 | CS framework | **3+ features = 70% higher retention** vs single (heredado Q2 — confirma) |

**Fuentes pricing models:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q4-18 | Food Service SaaS Pricing Optimization | Getmonetizely | 2025 | Practitioner | Per-location dominant; hybrid (base + transaction fees) optimal |
| Q4-19 | SaaS Pricing Models Strategies | Paddle | 2025 | Practitioner | Slack per-active-user variant para resolver per-seat resistance |
| Q4-20 | Usage-Based Pricing in SaaS | Udit | 2025 | Practitioner | UBP = 120-140% NRR vs seat 105-115% |

**Reporte original — Query 4 fue compartido como texto en hilo de chat (no como file separado), 2026-05-06.**

**Caveats críticos declarados por la propia investigación:**
1. **NO existe data Mexico/LATAM-specific de expansion para restaurant SaaS o SMB hospitality tech.** Todos los NRR benchmarks, timing patterns y pricing model impacts son US/global SaaS.
2. **NO independent validation de restaurant SaaS NRR.** Tidemark, Optifai no break out restaurant/hospitality como sub-vertical. El 97% SMB NRR baseline es cross-industry.
3. **NO published module adoption depth studies** para restaurant BOH platforms. El "3+ features = 70% higher retention" es general SaaS, no hospitality-specific.
4. **Second-location expansion timing es operator-capability-constrained, no software-constrained.** El 18-36 month expansion window refleja restaurant industry operational realities (capital, real estate, staffing), NO SaaS product dynamics. Esto hace time-to-first-expansion **fundamentalmente different** para Zenet vs B2B SaaS típico.
5. **Most restaurant expansion research focuses on enterprise chains (100+ locations) o QSR**, NO 1-5 location independent segment Zenet targets.

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) Target NRR realista 95-105%** — below global SMB median 97% por Mexico structural factors, pero achievable con strong retention + location-based expansion. **Stretch >105% = top quartile.**
>
> **(2) Expansion revenue será SLOW en Years 1-2** — primary trigger (segunda apertura) toma 18-36 meses post-firma. **Diseñar business model para sobrevivir on retention revenue first 24 months.** GRR > NRR como métrica primaria temprana.
>
> **(3) Per-location pricing optimal model** para predictable expansion alineado con operator growth. Hybrid (base + usage) crea upside pero requiere billing infrastructure investment.
>
> **(4) In-product behavioral triggers >> email campaigns >> QBRs** para driving expansion en este segmento. **3-5x conversion delta**. Independent operators no tienen tiempo para formal QBRs — responden a contextual, in-workflow prompts.
>
> **(5) Multi-threading prevents champion-departure expansion loss** (alineado con Query 3 §5.2 Window E). Si operations manager que championed initial purchase se va, owner relationship debe ya existir para preservar expansion conversation.
>
> **(6) Cross-vendor competition es real:** independents usan 5-8 tools desconectados. Zenet's expansion no puede asumir same-vendor default — debe explicitly compete each new operational need against complementary vendors.

### Triangulación Perplexity Pro — Query 5 (2026-05-06)

Query: *"Multi-stakeholder B2B SaaS buying journey owner manager chef accountant divergence hospitality"*. Modo: DeepSearch.

**Fuentes B2B buying committee + champion development:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q5-1 | B2B Decision Making in 2026: How Buying Committees Work | Prospeo | 2026 | B2B framework | 13+ stakeholders en B2B decisions; SMB committee specifics |
| Q5-2 | Champion Development: Building Internal Advocates | Rework.com | 2025 | B2B SaaS practitioner | Champion-backed deals 60-80% win vs 15-25% sin champion |
| Q5-3 | Champion-Based Selling for SaaS Growth | Rework.com | 2025 | B2B SaaS practitioner | 47 días close vs 134 días; 73% vs 31% win rate con strong champion |
| Q5-4 | The Challenger Customer | Challenger Inc / CEB | 2019 | Research synthesis | Buyers 57% through journey antes de vendor engagement; 17% time con vendors |
| Q5-5 | Software Demo Best Practices | Reprise | 2025 | n=350+ sales pros | 79% buyers prefer live walkthrough |

**Fuentes Mexico business culture + power distance:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q5-6 | Business practices in Mexico | Santander Trade | 2025 | Business culture guide | Decision-making concentrada at executive level; "yes" may not mean total agreement |
| Q5-7 | Understanding Mexican business culture | American Industries | 2025 | Cultural guide | Hierarchical, strong authority emphasis |
| Q5-8 | Cultural Dimensions of Hofstede in Mexican Context | ID Publications | 2017 | Academic | High power distance Index Mexico |
| Q5-9 | Navigating Cultural Differences Mexico | MexTax | 2025 | Business guide | Hierarchy pronounced; decision top-down |
| Q5-10 | Mexico Business Culture Guide | Global Business Culture | 2025 | Cultural guide | Locally owned/managed = strongly hierarchical |
| Q5-11 | Mexican Work Culture and Outsourcing | Unity Connect | 2025 | Business guide | *Confianza* como precondition para B2B commitment |

**Fuentes Mexican SMB digitalization + *contable* role:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q5-12 | Digitalizar a las PyMES, cierre fiscal 2025 | Portal ERP MX / ASEM Siigo Aspel | 2025 | SMB research | **34.9% de Mexican SMEs reciben accountancy advice**; *contable* como "architect of formality" |
| Q5-13 | Mexico Pioneering SMB Financial Management SaaS | Bind ERP / SUMA | 2025 | Vendor case | **"Bind for Accountants"** — direct product response a *contable* dynamic |
| Q5-14 | Digitalización de PyMEs en México | Bind ERP | 2025 | SMB research | First step typically Excel + manual processes; >60% recognize importance |
| Q5-15 | Trends in Smart Restaurant Research | PMC Bibliometric Review | 2025 | Academic | ICT adoption resistance, internal locus of control |

**Fuentes CFDI + SAT compliance:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q5-16 | Untangling CFDI 2025 | FacturAPI | 2025 | Compliance practitioner | CFDI 4.0 mandatory; PAC certification |
| Q5-17 | Mexico CFDI and Contabilidad Electrónica | Sovos | 2025 | Compliance practitioner | E-invoicing schema; SAT requirements |
| Q5-18 | Electronic Invoicing in Mexico (CFDI) | EDICOM | 2025 | Compliance practitioner | Compliance obligations, current versions |

**Fuentes restaurant tech stakeholder + chef dynamics:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q5-19 | Who Should Weigh in on POS Purchase | TouchBistro | 2025 | Vendor stakeholder guide | Owner: ROI + analytics + prime costs |
| Q5-20 | A Multidimensional Perspective of Chefs on Technology | Tandfonline peer-reviewed | 2025 | Academic (n=27 chefs) | 8 themes; mostly positive principle but resistance behavioral |
| Q5-21 | Resistance to ICT Adoption Independent Restaurants | ERTR Journal (China & UK) | 2019 | Academic | "Concerns about cost-savings"; "inability to test" — primary resistance |
| Q5-22 | Why Your Team Isn't Adopting New Tech | Sunday App | 2025 | Practitioner | Server/staff resistance behavioral, surfaces in inaction |
| Q5-23 | 2022 Restaurant Technology Study | Hughes / Hospitality Tech | 2022 | Industry study | 71% POS integration drives purchase |
| Q5-24 | 75% Independent Restaurants Plan New Tech 2023 | Hospitality Tech | 2023 | Study | 44% payroll challenge |
| Q5-25 | User-Friendly Restaurant Management Software | CashToKitchen | 2025 | Industry guide | User roles + inventory tracking |
| Q5-26 | Chef Software Recipe & Menu Management | Kafoodle | 2025 | Vendor doc | Chef recipe ownership critical |
| Q5-27 | FoodCost Chef Excel Software | FoodCostChef | 2025 | Vendor doc | Chef-led costing flexibility |

**Fuentes restaurant sales + demo motion:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q5-28 | Demo Best Practices for Restaurant | FirstSales.io | 2025 | Sales guide | Restaurant cycles 2-6 meses, NOT 2-weeks; multi-touch outperforms cold email |
| Q5-29 | Customer Adoption Best Practices | Dock | 2025 | CS practitioner | Multi-threading patterns |
| Q5-30 | Gainsight High Touch CS Guide | Gainsight | 2025 | CS framework | 5 post-sale personas (End Users, Admins, Champions, Exec Sponsors, Decision-Makers) |

**Fuentes adicionales Mexico tech ecosystem:**

| # | Título | Autor / Org | Fecha | Tipo | Cifra clave |
|---|---|---|---|---|---|
| Q5-31 | How to Scale Restaurant Business | Misekit | 2026 | Restaurant ops guide | Multi-location implementation timing |
| Q5-32 | How to Open Second Restaurant Successfully | Spindl | 2026 | Restaurant ops guide | Unit economics + sequenced rollout |
| Q5-33 | Strategies to Reduce Staff Turnover Restaurants | Spindl | 2025 | Industry guide | ~80% annual restaurant turnover |
| Q5-34 | Restaurant Software in the United States | Chowly | 2026 | Industry analysis | 5-8 disconnected tools |
| Q5-35 | Food Service SaaS Pricing Optimization | Getmonetizely | 2025 | Practitioner | Per-location pricing model |
| Q5-36 | B2B Buying Committees: How to Target | Influ2 | 2025 | B2B framework | Stakeholder mapping |
| Q5-37 | Breaking Down Restaurant Tech Adoption | Chris Munz LinkedIn | 2025 | Practitioner | Operadores reportan features no usadas |

**Reporte original completo (37 fuentes):** `/Users/alanbahena/Downloads/Multi-Stakeholder Buying Journey for BOH SaaS Independent Restaurant Operators in Mexico.md`.

**Caveats críticos declarados por la propia investigación:**
1. **NO empirical study documents the Mexican restaurant operator buying committee** en cualquier rigorous study. Genuine research white space.
2. **NO data on *contable* veto frequency** para restaurant SaaS en México. Influence pattern es inferred from Mexican SMB digitalization research + structural importance de *despachos contables*, NOT from restaurant-specific studies.
3. **NO LATAM analog** for esta committee configuration. Brazilian/Argentine SaaS research no mapea cleanly por different fiscal regimes, accounting software ecosystems, cultural patterns.

**Implicación estratégica para Zenet — los hallazgos load-bearing:**

> **(1) Two-track outreach desde Day 1:** ops manager track (champion development, demo, internal selling enablement) Y *contable* track (fiscal integration document, CFDI compliance, CONTPAQi/Aspel mapping) running EN PARALELO desde Consideration stage, NO sequentially.
>
> **(2) Three-session demo structure es ineludible** — single combined demo NO surfaces chef's real concerns ni satisfies *contable*'s technical requirements. Diseñar sales process around 3 separate sessions + parallel *contable* engagement.
>
> **(3) "Zenet para Contadores" view = potential retention infrastructure crítico.** Bind ERP precedente. Read-only financial reporting que mapea al *contable*'s chart of accounts puede eliminate accountant veto entirely.
>
> **(4) Multi-threading desde Day 1 + Mes 1 *contable* check-in + kitchen adoption como separate health metric.** Sin estas 3 disciplinas de CS, accounts churning silently incluso con good product.
>
> **(5) Community presence (CANIRAC + peer testimonials Spanish) precede demos.** *Confianza* es precondition — sin trust accumulation previa, demos no cierran independientemente de calidad.
>
> **(6) Private channels para honest feedback** de ops manager y chef (no solo meeting-room consensus). High power distance + "yes may not mean agreement" hace que real concerns surface ONLY en private settings.

### Hipótesis abiertas pendientes de validación

Listadas en §8 (seis preguntas críticas para customer journey) y dispersas inline en cada fase con etiqueta `[HIPÓTESIS PRE-PMF]` para fases post-compra (3.6-3.10). Cierre con design partners durante etapa 2 (`design-partner-validation`) y primeros 15-25 clientes pagando en etapa 3 (`early-customer-evidence`).

---

## 10. Áreas candidatas a triangulación con Perplexity Pro

Pasada de revisión post-redacción. Identifica las áreas concretamente delgadas en evidencia local que justifican dispatch de queries dirigidas. Mismo patrón que doc 03.

### 10.1 Áreas identificadas como delgadas

| Área | Sección afectada | Por qué delgada hoy | Query candidata |
|---|---|---|---|
| Restaurant SaaS onboarding patterns (días 1-30-60-90) | §3.6 | Sin clientes pagando, post-purchase flow es inferencia. Necesita benchmarks de cómo se ve onboarding real en restaurant SaaS independiente | "Restaurant SaaS onboarding patterns first 30 60 90 days independent operators time-to-first-value benchmarks" |
| Time-to-first-value en BOH SaaS independiente | §3.7 | Métrica clave para diseño de onboarding y forecast de retención. Sin medición local, es estimación | "Time to first value B2B SaaS small business hospitality back-of-house benchmarks" |
| Patterns de churn en SMB hospitality SaaS | §5.2 | Las 6 churn windows son inferencia general — necesita validación específica para SMB hospitality | "Customer churn patterns timing causes restaurant SaaS independent SMB hospitality" |
| Expansion revenue patterns en restaurant SaaS | §3.9 | Sin entender cuándo upsellan operadores, no se puede diseñar account expansion strategy | "Expansion revenue patterns SMB SaaS restaurant industry net revenue retention benchmarks" |
| Multi-stakeholder buying journey divergence | §6 | Investigación específica sobre cómo difiere el journey por rol en SMB hospitality es delgada | "Multi-stakeholder B2B SaaS buying journey owner manager chef accountant divergence hospitality" |

### 10.2 Estado de dispatch

| Query | Estado | Fecha | Integración | Notas |
|---|---|---|---|---|
| 1 — Restaurant SaaS onboarding patterns (1-30-60-90 días) | ✅ Integrada | 2026-05-06 | §3.6 expandida significativamente con 4-phase arc + Mexico-specific Soft Restaurant context + completion benchmarks + 7 stall points + predictors success/failure + time investment. §3.9 refinada con multi-location pilot-first. §5.2 windows A y B refinadas con cifras concretas (72-horas, 30-días recipe library) | DeepSearch alta calidad. 28 fuentes, balance vendor docs + academic + operator forums. Hallazgo crítico: ~10% de restaurantes mexicanos usan management software — baseline very low |
| 2 — Time-to-first-value | ✅ Integrada | 2026-05-06 | §3.7 expandida con taxonomía 4-tier de "first value" + TTFV-retention correlation table + variance por operator profile + compression interventions + datos MarginEdge específicos. §5.2 window C refinada con 70%/4x churn ratio | Search Pro alta calidad para benchmarks numéricos. 24 fuentes. Hallazgo más load-bearing: TTFV <14 días = 89% retention vs >30 días = 34% retention. 4x churn ratio pre/post-90 días. Caveat declarado: no Mexico-specific TTFV data; expectation +30-50% vs US benchmarks |
| 3 — Churn patterns SMB hospitality | ✅ Integrada | 2026-05-06 | §5.2 expandida masivamente con 3 concentration windows (cifras), cause taxonomy ranked (n=200 + restaurant POS), Mexico involuntary churn premium, champion departure quantified (51%/65%), predictors hierarchy refined (78% signals 30+ días). §5.3 expandida con recovery interventions effectiveness. §5.4 NEW estructural baseline 60% failure / 15-20% expected churn. §5.5 NEW estado de evidencia | DeepSearch alta calidad. 30 fuentes, balance practitioner + academic + Mexican SME data. Hallazgo crítico: Mexico involuntary churn premium 30-40%+ vs global 26% — implica local payment rails (OXXO/SPEI/CoDi) como retention infrastructure |
| 4 — Expansion revenue patterns | ✅ Integrada | 2026-05-06 | §3.9 expandida masivamente con NRR benchmarks por segmento (target Zenet 95-105%, stretch 105%+), 6 triggers de expansión ranked, fragmented stack reality (5-8 tools/operator), pricing model impact, expansion sales motion economics (existing customer 68% close rate vs 21% new). §7.2 refinada con in-product triggers economics. Hallazgo crítico: time-to-first-expansion 18-36 meses (vs B2B típico 6-12) por operator-capability constraint | Search Pro alta calidad para benchmarks numéricos. ~25 fuentes citadas. Crítical caveat: NO Mexico/LATAM-specific expansion data exists; benchmarks US/global; Mexico structural factors → realistic NRR 95-100% (below SMB 97% median) |
| 5 — Multi-stakeholder buying journey divergence | ✅ Integrada | 2026-05-06 | §6 expandida masivamente. Restructurada de 5 sub-secciones a 13: composición committee + diagrama timing + 4 stakeholder profiles refinados + decision criteria divergence matrix + conflict patterns + veto dynamics + three-session demo structure + post-purchase 5-persona model + Mexican business culture patterns + sync strategy | DeepSearch alta calidad. ~37 fuentes. Hallazgo Mexico-específico load-bearing: *contable externo* es structural fiscal gatekeeper (NO edge case) con CFDI 4.0 + SAT real-time access elevando su role a compliance authority. Recomendación estratégica: "Zenet para Contadores" view como retention move (precedente Bind ERP) |

### 10.3 Hallazgos secundarios que esperan home en otros docs

La redacción de doc 04 no produce hallazgos nuevos para otros docs (es síntesis de evidencia ya existente). Pero confirma que dos áreas siguen delgadas a nivel sección:

- **Doc 06 (objeciones y fricciones):** las 6 churn windows del §5.2 son material directo cuando se redacte doc 06.
- **Doc 07 (voice of customer):** verbatims por fase (especialmente lenguaje del operador en pre-awareness vs awareness vs consideración) son material directo cuando se redacte doc 07.
