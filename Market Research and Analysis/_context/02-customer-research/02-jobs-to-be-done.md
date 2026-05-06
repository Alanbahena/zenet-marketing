---
name: Jobs-to-be-done del operador
description: Trabajos funcionales, emocionales y sociales que el dueño-operador del beachhead contrata cuando paga Zenet. Incluye jobs secundarios para chef ejecutivo y admin, anti-jobs explícitos e hipótesis pendientes de validación con dueño directo.
type: customer-research
research_stage: discovery-pre-PMF
last_updated: 2026-05-05
status: active
version: 0.1
owner: Alan Bahena
---

# Jobs-to-be-done del operador

## 1. Propósito + marco JTBD aplicado

### 1.1 Qué responde el documento

¿Qué *job* contrata el dueño-operador del beachhead cuando paga Zenet? La pregunta tiene tres capas: el trabajo práctico que necesita resolver (funcional), cómo quiere sentirse al resolverlo (emocional) y cómo quiere ser percibido al resolverlo (social).

### 1.2 Por qué JTBD y no solo personas o lista de needs

Una lista de "needs from Zenet" describe lo que el cliente pide. Una persona describe quién es. Ninguna de las dos articula **la circunstancia que dispara la búsqueda de solución y el resultado que el cliente persigue**. JTBD obliga a juntar las tres piezas: cuándo aparece el dolor → qué progreso se busca → qué resultado se valora.

Para customer research esto importa por una razón concreta: la mensajería, el copy y el diseño del onboarding se construyen sobre la circunstancia y el resultado, no sobre la lista de features. Sin JTBD bien articulado, el copy termina diciendo "Zenet automatiza tu inventario" cuando el job real es "recuperar control sobre un negocio que se siente que controla al dueño".

### 1.3 Cómo cabe en `discovery-pre-PMF`

En etapa 1 este doc no afirma jobs validados — declara **hipótesis priorizadas de jobs** estructuradas para que las primeras 5 conversaciones con design partners puedan confirmarlas, refinarlas o tirarlas. Cada job lleva etiqueta de fuente; cuando la mayoría son `[HIPÓTESIS PRE-PMF]` con respaldo `[Notion-research]`, el doc avisa visualmente al consumidor que está leyendo material por validar, no conclusiones.

### 1.4 Disciplina de evidencia

Por la regla de doc 00 §6.2 (no mezclar fuentes en el mismo bloque), cada sub-job declara su capa de evidencia con etiqueta inline. La mayoría de jobs hoy son hipótesis derivadas de:

- Voz de consultores (Murguía, Anna Palazuelos, Algira Garzón, Víctor Mendoza).
- Voz de senior operators no-dueños (Carlos Sánchez, Aldo Alvarado, Abril Borunda).
- Síntesis del business context v1.0.

**El gap central de doc 01 §4.1 aplica completo aquí:** ningún dueño-operador del beachhead específico ha articulado en sus propias palabras qué job contrata. Todo lo de abajo es hipótesis estructurada hasta que un dueño lo diga.

---

## 2. Master job statement del dueño-operador del beachhead

### 2.1 La declaración central

> **Cuando** abro mi segunda sucursal y el caos operativo que era manejable en una sola se multiplica — y empiezo a ver que yo me estoy volviendo el cuello de botella de mi propio negocio —, **quiero** instalar un sistema que estandarice cómo opera mi back-of-house en cada sucursal y que interprete qué está pasando, sin depender de ninguna persona clave en particular, **para** poder crecer mi restaurante con calma en vez de con miedo, y recuperar control sobre mi tiempo y mis decisiones.

### 2.2 Variantes consideradas y descartadas

| Formulación | Por qué no |
|---|---|
| "Automatizar mi operación" | Wrong frame. Validado con Murguía: el dueño teme la robotización. El framing correcto es "augmentar, no reemplazar" (decisión Centro de Control Zenet abr-2026 `[Demo Murguía 2026-04-01]`). |
| "Implementar inteligencia artificial en mi restaurante" | Nivel de abstracción equivocado. El dueño no contrata IA — contrata un resultado operativo. El producto ES el agente; el agente no se nombra como entidad separada (CLAUDE.md §8). |
| "Tener mejores reportes" | Output, no job. Anna Palazuelos lo articuló así: "los reportes te dicen que tu costo fue 34%; lo que necesitas es saber por qué" `[Conversación Anna Palazuelos 2026-03-19]`. |
| "Saber dónde está mi dinero" | Captura un sub-job (interpretación de costos) pero no el job completo. El dolor estructural va más allá de la visibilidad financiera. |
| "Profesionalizar mi negocio" | Captura una dimensión social pero no la circunstancia ni el resultado. Los jobs sociales son consecuencia, no driver. |

### 2.3 Estado de evidencia del master job

**Etiqueta:** `[HIPÓTESIS PRE-PMF]` con respaldo fuerte de `[Notion-research]`, `[Síntesis traducida — Business Context v1.0]` y `[Demo Murguía 2026-04-01]`.

**Confianza al 2026-05-05:** Media-Alta para la formulación general. Baja para el lenguaje literal — el dueño puede no decir "cuello de botella de mi propio negocio" ni "instalar un sistema". Esa formulación es síntesis Alan + consultor, no verbatim del dueño.

**Pregunta de validación crítica:** ¿el dueño se reconoce en esta circunstancia disparadora ("abro mi segunda sucursal y el caos se multiplica") o el detonante real es otro (apertura de la tercera, primer churn de gerente clave, primer mes con pérdidas no explicadas)?

---

## 3. Jobs funcionales del dueño-operador

Siete sub-jobs prioritarios. Todos comparten el master job; cada uno articula un fragmento concreto del progreso buscado.

### 3.1 Estandarizar procesos que sobrevivan a la rotación de personas

> **Cuando** un cocinero o gerente clave renuncia y la operación de esa estación o sucursal se rompe, **quiero** que la forma de hacer las cosas no salga con esa persona ni se reinvente con la siguiente, **para** no perder semanas reconstruyendo conocimiento que ya estaba en mi negocio.

**Evidencia:**
- Anna Palazuelos: "el control de costos no se sostiene sin estandarización previa de procesos" `[Conversación Anna Palazuelos 2026-03-19]`.
- Business context §1 problem #2 — "no operational manuals, no structured training, each manager has their own method" `[Síntesis Business Context v1.0]`.
- Business context §1.3 verbatim: "Everyone does things however they want" `[Síntesis traducida — Business Context v1.0]`.
- Centro de Control Zenet: "El problema cultural de estandarización es ventaja competitiva para Zenet, no obstáculo" (mar-2026).
- Murguía industry insight: escasez de cocineros amplifica dependencia de personas clave `[Demo Murguía 2026-04-01]`.

**Hipótesis abierta:** ¿el dueño nombra este job como "estandarización" (lenguaje de consultor) o con palabras más concretas como "que cada gerente cuente igual" o "que no se me caiga la cocina si Pepe se va"? `[HIPÓTESIS PRE-PMF]`.

### 3.2 Reconciliar inventario sin pasar el día persiguiendo información

> **Cuando** llega el cierre de mes y los inventarios físicos no cuadran con lo que las hojas o el sistema dicen, **no quiero** pasar 5-10 horas semanales chasing información entre WhatsApp, papel y Excel para entender qué pasó, **para** usar ese tiempo en algo que sí mueve mi negocio.

**Evidencia:**
- Business context §1 problem #1 — "Manual, repetitive processes... dependency on Excel, paper, WhatsApp" `[Síntesis Business Context v1.0]`.
- Business context §1.3 verbatim: "Inventory never adds up" + "I spend too much time reconciling numbers" `[Síntesis traducida — Business Context v1.0]`.
- Business context §5 ROI: "From 5-10 hrs/week lost reconciling → Automated" `[Síntesis Business Context v1.0]`.

**Hipótesis abierta:** la cifra "5-10 horas semanales" viene de síntesis Business Context, no de medición real con dueño del beachhead. ¿Es la magnitud correcta o sub/sobreestima el dolor?

### 3.3 Interpretar costos, no solo verlos

> **Cuando** mi costo de alimentos se mueve del 30% al 34%, **no quiero** un reporte que solo me diga el número — **quiero** entender por qué se movió y qué proceso tengo que ajustar para regresarlo, **para** tomar decisión, no acumular ansiedad.

**Evidencia:**
- Anna Palazuelos: "el software te dice que tu costo fue 34%; Zenet te dice POR QUÉ fue 34% y qué proceso ajustar para que sea 30%" `[Conversación Anna Palazuelos 2026-03-19]`.
- Business context §2 Operational Sequence Phase 3 — "Cost interpretation, not cost reports" `[Síntesis Business Context v1.0]`.
- Business context §1.3 verbatim: "I have POS but it only tracks sales, it doesn't help with purchasing or real inventory" `[Síntesis traducida — Business Context v1.0]`.

**Hipótesis abierta:** ¿el dueño valora más la interpretación causal ("por qué se movió") o el alerta temprano ("avísame antes de que se mueva")? Determina cómo se diseña la capa de inteligencia.

### 3.4 Entrenar al staff nuevo sin reconstruir desde cero

> **Cuando** contrato un cocinero o gerente nuevo, **no quiero** pasar dos semanas mostrándole cómo hacemos cada cosa porque no está documentado en ningún lado, **para** que la curva de aprendizaje no descarrille la operación cada vez que rota personal.

**Evidencia:**
- Business context Persona 2 needs: "Training material that survives staff turnover" `[Síntesis Business Context v1.0]`.
- Business context §5 UX as core value: "Onboarding matters as much as the product" `[Síntesis Business Context v1.0]`.
- Murguía industry insight: escasez de cocineros = rotación frecuente = costo de re-entrenar amplificado `[Demo Murguía 2026-04-01]`.

**Hipótesis abierta:** ¿el dueño ve este job como suyo o como del chef ejecutivo? Si lo delega al chef, este sub-job vive más en jobs de personas secundarias (§6.1) que en los del dueño.

### 3.5 Escalar a la siguiente sucursal sin multiplicar el caos

> **Cuando** estoy planeando abrir mi tercera sucursal, **no quiero** que cada apertura nueva sea volver a empezar de cero ni que los problemas operativos se multipliquen por sucursal, **para** crecer con orden en vez de crecer con miedo.

**Evidencia:**
- Business context §1 problem #6 — "Growth by trial and error... Problems multiply with each new location" `[Síntesis Business Context v1.0]`.
- Workspace `04-segmentacion-de-mercado.md` — beachhead = sub-segmento B en consolidación operativa post-segunda apertura.
- Business context §5 Value Components: "Ordered scaling — Grow without multiplying chaos" `[Síntesis Business Context v1.0]`.

**Hipótesis abierta:** este job está casi por construcción en el beachhead (B = consolidación post-segunda apertura). La pregunta no es si existe — es si pesa más que los jobs 3.1-3.3 al momento de la decisión de compra.

### 3.6 Tener visibilidad cross-sucursal sin micromanage

> **Cuando** estoy en una sucursal, **no quiero** estar ciego sobre qué está pasando en las otras dos, ni tampoco tener que llamar al gerente cinco veces al día, **para** saber cómo va el negocio sin estar parado en cada cocina.

**Evidencia:**
- Business context Persona 1 needs: "Visibility across all locations without micromanaging" `[Síntesis Business Context v1.0]`.
- Business context §1 problem #3 — administradores pasan hasta 70% del tiempo en tareas diarias `[Síntesis Business Context v1.0]`.
- Workspace `05-perfil-de-cliente-ideal.md` — Carlos Mendoza arquetípico abre WhatsApp 60 veces al día.

**Hipótesis abierta:** ¿la visibilidad debe ser pull (el dueño consulta cuando quiere) o push (el sistema le avisa)? Cambia diseño del producto y del messaging.

### 3.7 Recuperar tiempo del día operativo

> **Cuando** termina mi semana y veo que pasé 70% del tiempo apagando incendios cotidianos, **no quiero** seguir así, **para** tener espacio para pensar estrategia, descansar, o estar con mi familia.

**Evidencia:**
- Business context §1 problem #3 — "70% of time on daily tasks. No space to innovate or grow" `[Síntesis Business Context v1.0]`.
- Business context §1.3 verbatim: "I can't disconnect for even one day" `[Síntesis traducida — Business Context v1.0]`.
- Business context §5 ROI hipotético: 28 horas/mes recuperables (sin validación de uso real) `[Síntesis Business Context v1.0]`.

**Hipótesis abierta:** este job se solapa con el job emocional 4.1 (recuperar control). ¿Son dos jobs distintos o el mismo en dos capas? Determinar al validar.

---

## 4. Jobs emocionales del dueño-operador

Cinco sub-jobs prioritarios. Estos son los más especulativos en etapa 1 — los consultores hablan de procesos, no de cómo se siente el dueño.

### 4.1 Recuperar control sobre un negocio que se siente que controla al dueño

**Job articulado:** sentir que estoy al volante del negocio en vez de sentir que el negocio me arrastra. Volver a operar con la confianza con la que abrí.

**Evidencia:**
- Business context §1 problem #5 — "Decisions without clear data... Reactive decisions, not strategic ones" `[Síntesis Business Context v1.0]`.
- Business context §1.3 verbatim: "I can't disconnect for even one day" `[Síntesis traducida — Business Context v1.0]`.
- Capa cultural antagonista (workspace `02-brand-story/narrativa.md` referenciada en CLAUDE.md §8): la creencia silenciosa de que el caos es el precio inevitable de tener un restaurante.

**Hipótesis abierta:** `[HIPÓTESIS PRE-PMF]`. ¿El dueño nombra este job como "control" o lo articula como "tranquilidad", "paz mental", "dejar de estar en alerta"? El matiz cambia el copy.

### 4.2 Dormir tranquilo

**Job articulado:** que cada notificación nocturna no detone ansiedad real sobre si la operación va a estar bien mañana.

**Evidencia:**
- Workspace `05-perfil-de-cliente-ideal.md` — el ICP arquetípico abre WhatsApp 60 veces al día.
- Business context Persona 1 — "Always putting out fires" `[Síntesis Business Context v1.0]`.

**Hipótesis abierta:** `[HIPÓTESIS PRE-PMF]`. La articulación literal del dolor nocturno necesita verbatim del dueño directo. Hoy es inferencia razonada.

### 4.3 Dejar de sentir que sobrevivo en vez de construir

**Job articulado:** sentir que el negocio es un proyecto en construcción, no una crisis sostenida. Recuperar la sensación inicial cuando abrí — esto es algo que se está creando, no algo que apenas se mantiene a flote.

**Evidencia:**
- Business context §1 problem #6 — "Growth by trial and error" `[Síntesis Business Context v1.0]`.
- Murguía industry insight: período de vida promedio de un restaurante es 7 años; a los 6 meses si está en buen camino, a los 2 años necesita números verdes `[Demo Murguía 2026-04-01]`.

**Hipótesis abierta:** `[HIPÓTESIS PRE-PMF]`. ¿Este job aparece consciente o el dueño lo nombra solo cuando alguien se lo pregunta directamente?

### 4.4 Reducir la dependencia psicológica de personas clave

**Job articulado:** dejar de sentir que un solo humano (chef ejecutivo, gerente principal, contador interno) puede romper el negocio si se enferma o renuncia.

**Evidencia:**
- Business context §1.3 verbatim: "When a key person is missing, everything falls apart" `[Síntesis traducida — Business Context v1.0]`.
- Business context Persona 1 needs: "Less dependency on key people, systems work without owner present" `[Síntesis Business Context v1.0]`.
- Murguía: escasez de cocineros amplifica esta dependencia `[Demo Murguía 2026-04-01]`.

**Hipótesis abierta:** ¿este job se siente como ansiedad latente (dolor crónico de baja intensidad) o como crisis aguda (dolor que solo aparece cuando alguien clave realmente se va)? Cambia la urgencia con que se compra la solución.

### 4.5 Sentir orgullo profesional de operar como negocio maduro

**Job articulado:** dejar de sentir que el negocio es "fuego del fundador" para sentirlo como "sistema profesional". Tener satisfacción interior de operar con la claridad de las grandes cadenas, aunque sea un negocio independiente.

**Evidencia:**
- Workspace CLAUDE.md §8 visión: "que cualquier restaurante en crecimiento opere con la claridad, el orden y la inteligencia que antes solo tenían las grandes cadenas — sin la complejidad ni el costo".
- Inferencia derivada del posicionamiento "DeepSeek de la industria restaurantera" — hay aspiración de estar a la altura de la categoría más sofisticada `[Demo Murguía 2026-04-01]`.

**Hipótesis abierta:** `[HIPÓTESIS PRE-PMF]`. Este es el más especulativo de los emocionales. Posible que pese mucho (orgullo profesional como driver subterráneo) o que sea retrospectivo (aparece como satisfacción post-implementación, no como driver de compra).

---

## 5. Jobs sociales del dueño-operador

Tres sub-jobs. Los menos respaldados por evidencia hoy y los más necesitados de verbatim del dueño directo.

### 5.1 Ser visto como operador profesionalizado en la comunidad de la plaza

**Job articulado:** cuando converso con otros dueños, chefs respetados o consultores de Tijuana, ser visto como uno que opera con sistema, no como uno que creció improvisando. Tener credibilidad operativa en la comunidad.

**Evidencia:**
- Inferencia desde dinámicas de ecosistema documentadas en workspace `06-estructura-y-ecosistema.md` (CANIRAC TJ, eventos presenciales, comunidad operativa local).
- Decisión Centro de Control Zenet (mar-2026): "construir comunidad alrededor del problema, no del producto" — implica que la comunidad de operadores existe y que el reconocimiento en ella tiene valor.

**Etiqueta:** `[HIPÓTESIS PRE-PMF]`.

### 5.2 Tener credibilidad operativa con socios, banca y stakeholders externos

**Job articulado:** cuando me siento con un socio inversionista, con un banco evaluando crédito, o con un nuevo socio operativo, no quiero que la respuesta a "¿cómo opera tu negocio?" sea "pues yo me encargo de todo". Quiero inspirar confianza con datos y procesos demostrables.

**Evidencia:**
- Workspace `04-segmentacion-de-mercado.md` — sub-segmento B en consolidación operativa frecuentemente busca crédito o socio para tercera apertura.
- Business context Persona 1 needs: "Confidence to delegate" + "KPIs and cost insights" `[Síntesis Business Context v1.0]`.

**Etiqueta:** `[HIPÓTESIS PRE-PMF]`.

### 5.3 Demostrar madurez del negocio como prerrequisito para crecer

**Job articulado:** cuando estoy planeando tercera sucursal, vender el negocio en algún punto, o tomar un préstamo importante, no quiero que mi falta de orden interno sea el cuello de botella. Quiero que el negocio sea crédito-apto, socio-apto, vendible, o lo que decida después.

**Evidencia:**
- Workspace `07-geografia-y-expansion.md` §16.3 — consolidación operativa como precondición para avance entre fases (lógica del negocio replicada al nivel del operador individual).
- Business context §5 Value Components: "Ordered scaling" como componente de valor `[Síntesis Business Context v1.0]`.
- Murguía: "estructurar el restaurante desde el inicio es crítico... a los 2 años necesita números verdes" `[Demo Murguía 2026-04-01]`.

**Etiqueta:** `[HIPÓTESIS PRE-PMF]`.

---

## 6. Jobs de personas secundarias

El producto Zenet tiene tres usuarios distintos según el business context §4. El dueño es el primario; chef ejecutivo y admin son secundarios. Ambos tienen jobs propios — no son simples extensiones del job del dueño.

**Nota explícita de scope:** los **consultores externos** (Murguía, Anna, Algira) NO son persona en este doc. Son canal de distribución, no usuario final. Sus jobs propios viven en futura sección de Product Strategy / Go-to-Market, no aquí.

### 6.1 Chef ejecutivo / Kitchen Manager

**Quién:** chef con responsabilidad operativa, gestiona recetas, inventario y equipo diariamente. Persona 2 en el business context.

**Jobs funcionales:**
- Estandarizar recetas con gramajes exactos para que sobrevivan rotación.
- Cruzar inventario contra recetas estandarizadas (consumo teórico vs. real).
- Generar material de training de cocina que sobreviva rotación de cocineros.
- Dedicar más tiempo a cocina y menos a admin.

**Jobs emocionales:**
- Ser reconocido como chef serio que sostiene calidad operativa, no chef caótico que apaga incendios.
- Dejar legado profesional en la operación (recetas, procesos, sistema) que continúa cuando no esté.

**Jobs sociales:**
- Ser respetado por sus pares (otros chefs ejecutivos en la plaza, consultores) por la calidad operativa que sostiene.

**Evidencia:** business context Persona 2 + decisión Centro de Control Zenet (mar-2026) "para cadenas, conquistar al chef antes que al dueño; en independientes puede no aplicar". `[HIPÓTESIS PRE-PMF]` para todo lo emocional y social — los chefs entrevistados (Aldo Alvarado, Abril Borunda) validaron operational reality, no las dimensiones internas.

### 6.2 Admin / Contador interno

**Quién:** maneja números, compras, reportes de costo. Persona 3 en el business context.

**Jobs funcionales:**
- Consolidar data dispersa entre WhatsApp, papel y Excel.
- Generar reportes de costo que expliquen el porqué, no solo el qué.
- Optimizar compras con sugerencias informadas.
- Tener audit trail de movimientos de inventario.
- Minimizar errores manuales que erosionan margen.

**Jobs emocionales:**
- Dejar de sentirse "el cazador de información perpetuo".
- Tener data limpia con qué hacer su trabajo bien.

**Jobs sociales:** menos relevantes para este rol; trabajo de bastidores.

**Evidencia:** business context Persona 3. `[HIPÓTESIS PRE-PMF]` — no hay conversación con admin/contador interno de un restaurante del beachhead.

### 6.3 Por qué importa que cada secundaria tenga jobs propios

Si Zenet diseña producto y onboarding pensando solo en el dueño, falla en adopción real (el chef y el admin son los usuarios diarios). Si diseña solo para el chef o el admin, pierde al comprador. La tensión "el chef adopta, el dueño paga" del workspace `06-estructura-y-ecosistema.md` se materializa aquí: el producto debe servir tres jobs simultáneamente.

---

## 7. Anti-jobs: lo que NO se contrata Zenet para hacer

Cinco anti-jobs explícitos. Sirven para tres cosas: anclar posicionamiento, anticipar confusiones, y proteger scope contra deriva.

### 7.1 No es: reemplazar personas (chef, gerente, contador)

**Validado.** Murguía 2026-04-01: cuando el framing fue "Zenet automatiza tu operación", apareció miedo de robotización. Cuando el framing cambió a "Zenet amplifica tu inteligencia operativa", el miedo desapareció y la disposición de adopción subió.

Operadores que buscan reemplazar equipo con IA quedan **fuera del scope** explícitamente, según el primer valor "Aumentar, no reemplazar" (workspace `01-brand-strategy/mision-vision-valores.md`) y la exclusión cultural #2 de `02-definicion-y-alcance.md`.

### 7.2 No es: tracking de ventas / front-of-house

POS es POS (Toast, Square, Clover, PoloTab, Parrot, Fudo). Zenet es complementario, no competidor. La verbatim "I have POS but it only tracks sales, it doesn't help with purchasing or real inventory" `[Síntesis traducida — Business Context v1.0]` lo articula desde la voz del segmento.

Mensajería operativa: "Zenet trabaja sobre el POS que ya tienes, no lo reemplaza".

### 7.3 No es: facturación CFDI ni cumplimiento contable

Lo hacen despachos contables y PACs (Proveedores Autorizados de Certificación). Zenet ayuda al operador a tener data limpia que el despacho consume — pero no es PAC, no es despacho, no es asesor fiscal.

Frame de cumplimiento del workspace `08-entorno-regulatorio.md` §8.4: Zenet es **facilitador, no certificador**. Aplica completo aquí.

### 7.4 No es: marketing digital, gestión de reseñas, ni pedidos por delivery

Otras categorías de software se ocupan de eso — Google My Business, Rappi/UberEats dashboards, software de CRM/loyalty. Zenet vive en back-of-house, no en customer-facing.

### 7.5 No es: ERP enterprise multi-función para grupos de 50+ sucursales

Ese segmento es de SAP, Oracle, Odoo. Cuestan $10K+ USD/mes y requieren equipo de IT dedicado (business context §6 competitive landscape). Zenet es para 1-5 sucursales, idealmente 2-3 en beachhead. Si un operador con 60 sucursales pregunta por Zenet, la respuesta correcta es "no somos para ti todavía" (workspace `02-definicion-y-alcance.md` exclusión por escala).

---

## 8. Hipótesis abiertas prioritarias para etapa 1

Cinco preguntas que las primeras 5 conversaciones con design partners tienen que cerrar específicamente para JTBD. Diferentes a las de doc 01 §8 — más finas, sobre articulación interna del job.

### 8.1 ¿El master job se formula primero como "control" o como "tiempo recuperado"?

Murguía y Anna validan ambas dimensiones. El dueño puede priorizar una. Si dice primero "quiero recuperar control", la mensajería ancla en autonomía y delegación. Si dice primero "quiero recuperar mi tiempo", la mensajería ancla en eficiencia y descanso. Cambia el ángulo principal del copy.

### 8.2 ¿Los jobs sociales pesan en la decisión de compra o solo aparecen post-implementación?

Si pesan en compra, van en mensajería de adquisición ("opera como cadena, sin la complejidad"). Si solo aparecen post, van en lifecycle marketing y testimonials. La diferencia es operativa: cambia qué dice la landing vs. qué dice el customer-success email.

### 8.3 ¿El job emocional 4.3 ("dejar de sentir que sobrevivo") es vivido como dolor explícito o como "así es el negocio"?

Si es lo primero, se puede vender directo apelando a él. Si es lo segundo (dolor naturalizado), hay que despertar la conciencia del job antes de que el dueño esté dispuesto a comprar la solución. Cambia toda la fase de awareness del journey.

### 8.4 ¿El chef del beachhead independiente tiene jobs propios fuertes o está alineado al job del dueño?

Determina si chef es co-comprador con veto real, co-influencer secundario, o solo usuario operacional sin voz en la decisión. Decisión Centro de Control (mar-2026) deja la pregunta abierta para independientes. Cambia diseño del producto, del onboarding y de la dinámica de venta.

### 8.5 ¿Hay un job no anticipado que aparece cuando el dueño ve el producto?

Pregunta abierta por construcción. La conversación de design partner debe permitir que aparezcan jobs que no pre-listamos. Si los hay y aparecen consistentemente, este doc se actualiza con un sub-job nuevo, no se ajustan los existentes.

---

## 9. Cobertura del framework canónico

Pasada de revisión al cierre del draft contra la taxonomía estándar de JTBD (Christensen + Ulwick) para verificar que no faltan categorías:

| Categoría canónica | Cobertura en este doc | Comentario |
|---|---|---|
| Functional jobs | ✓ §3 (7 sub-jobs) | Densa. Respaldada por evidencia de consultores y senior operators |
| Emotional jobs | ✓ §4 (5 sub-jobs) | Especulativa. La mayoría son `[HIPÓTESIS PRE-PMF]` por ausencia de voz del dueño directo |
| Social jobs | ✓ §5 (3 sub-jobs) | Más delgada que las anteriores. Inferencia razonada — esperar evidencia de design partners para refinar |
| Anti-jobs | ✓ §7 (5 anti-jobs) | Robusta. Posicionamiento Zenet ya define mucho de esto |
| Consumption-chain jobs (acquire, install, use, transport, store, dispose) | Cubierto parcialmente vía anti-jobs §7.2-7.5 y vía referencia a job de onboarding en 3.4 | No se desarrolla como categoría propia. Pertenece más a doc 04 (customer journey) y doc 06 (objeciones de adopción) |
| Outcome metrics (Ulwick — outcome-driven) | Postergado a etapa 3 | Sin clientes pagando ni datos de uso, las métricas de outcome son hipótesis aspiracionales, no evidencia. ROI hipotético del business context queda como referencia, no como métrica validada |

**Conclusión de la pasada:** no se identificaron categorías ausentes que requirieran dispatch a Perplexity Pro al momento de redactar el draft. Si conversaciones con design partners revelan jobs que no caben en estas categorías, se reabre la pasada y se considera triangulación externa.

---

## Fuentes

### Conversaciones y demos citadas

- **Víctor Murguía** — Chef y consultor gastronómico independiente (Mexicali). Demo MVP 2026-04-01. Validó framing "augmentar no reemplazar"; aportó industry insights (escasez de cocineros, restaurant 7-year lifespan, problemas más allá de operación interna).
- **Anna Palazuelos** — Consultora gastronómica, autora "Recetas para el éxito". LinkedIn DM 2026-03-19. Articuló secuencia operativa (estandarización → inventario → costo) que sostiene jobs 3.1 y 3.3.
- **Algira Garzón** — Consultora OD en hospitalidad. Discovery 2026-03-20. Validó dimensión cultural de la estandarización.

### Documento externo central

- `/02_Producto-y-Tech/Production-software/Zenet/docs/project-strategy/business-context/zenet-business-context-production.md` v1.0 (2026-04-06).
  - §1 Problem Statement — base para sub-jobs funcionales 3.1, 3.2, 3.3, 3.5, 3.6, 3.7.
  - §1.3 verbatims (en inglés, etiquetados como `[Síntesis traducida]`) — base para articulaciones de dolor.
  - §4 User Personas — base para sub-jobs por persona en §6.
  - §5 Value Components — base para resultado esperado (`para que...`) del master job.
  - §11 Industry Insights — base para jobs 3.4 y 4.4.

### Documentos del workspace referenciados

- `00-etapas-y-marco-de-investigacion.md` — taxonomía de etiquetas de evidencia, regla de no mezclar fuentes.
- `01-metodologia-y-fuentes.md` — gap del dueño-operador del beachhead, criterios de saturación.
- `Market Research and Analysis/_context/01-industry-and-market/02-definicion-y-alcance.md` — exclusiones de scope (alimentan §7).
- `Market Research and Analysis/_context/01-industry-and-market/04-segmentacion-de-mercado.md` — beachhead = sub-segmento B en consolidación post-segunda apertura.
- `Market Research and Analysis/_context/01-industry-and-market/05-perfil-de-cliente-ideal.md` — ICP arquetípico Carlos Mendoza, day-in-the-life base para emocionales.
- `Market Research and Analysis/_context/01-industry-and-market/06-estructura-y-ecosistema.md` — buying committee, dinámica chef-dueño en independientes.
- `Market Research and Analysis/_context/01-industry-and-market/07-geografia-y-expansion.md` §16.3 — consolidación operativa como precondición.
- `Market Research and Analysis/_context/01-industry-and-market/08-entorno-regulatorio.md` §8.4 — frame "facilitador, no certificador" (alimenta anti-job 7.3).
- `Branding/_context/01-brand-strategy/mision-vision-valores.md` — primer valor "Aumentar, no reemplazar" (alimenta anti-job 7.1).
- `CLAUDE.md` §8 — visión y categoría declarada (sustento del master job).

### Centro de Control Zenet — decisiones estratégicas relevantes

- "Posicionamiento DeepSeek" (abr-2026, Murguía).
- "Augmentar, no reemplazar" (abr-2026, Murguía) — sustento principal del anti-job 7.1.
- "Para cadenas, conquistar al chef antes que al dueño; para independientes puede no aplicar" (mar-2026) — abre la pregunta 8.4.
- "Construir comunidad alrededor del problema, no del producto" (mar-2026) — sustento contextual de jobs sociales §5.

### Hipótesis abiertas pendientes de validación

Listadas en §8 (cinco preguntas críticas para JTBD) y dispersas inline en cada sub-job con etiqueta `[HIPÓTESIS PRE-PMF]`. Cada una se cierra con verbatim de dueño-operador del beachhead durante etapa 2 (`design-partner-validation`).
