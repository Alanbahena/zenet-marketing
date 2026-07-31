---
name: Bitácora de learnings de validación — Fase A
description: Registro durable y estructurado de lo que enseña cada sesión de campo de la Fase A. Una entrada por sesión — contexto · observaciones (dicho vs hecho) · scores H1-H6 + ICP/DP fit · learnings estratégicos (marcados N=1) · implicaciones (qué feeds a Product Strategy vs repo de producción vs VoC) · decisión · evidencia. Entrada #1 = Carlos / Alma Verde (demo 14-jul-2026 · design partner). Entrada #2 = Alfonso Arballo / mesa jóvenes CANIRAC (café 28-jul-2026 · conector institucional — NO cuenta como N de validación, se registra por el patrón que forma). Disciplina anti-autoengaño: todo es DIRECCIÓN a bajo N, no verdad validada — alimenta VP/segmentación/MVP scope solo cuando el patrón se confirma con 2-3+ sesiones. La lista granular de features/UX es evidencia aquí, pero el build vive en el repo de producción.
type: product-strategy
last_updated: 2026-07-31
status: active
version: 0.2
owner: Alan Bahena
---

# Bitácora de learnings de validación — Fase A

> Lo que aprendemos de cada conversación/demo con design partners, ordenado y durable. **No reescribe la VP ni la segmentación** — las **alimenta** cuando un patrón se confirma con varias sesiones. A bajo N todo es hipótesis.

---

## Cómo se usa

- **Una entrada por sesión** (misma plantilla, ver abajo).
- **Todo marcado N=1** hasta validar con 2-3+ operadores. Un learning de una sola sesión es **dirección, no verdad**.
- **La frontera de captura:**
  - **Aquí:** learnings estratégicos + la evidencia (para no perderla y para que los patrones salten con el tiempo).
  - **Repo de producción:** la lista granular de features + cambios de UX (el build).
  - **VoC library** (`Market Research/02-customer-research/07-voice-of-customer`): las citas de oro.
- **Disciplina anti-autoengaño:** un champion muy entusiasta que te **redirige** el producto es, a la vez, buena señal (compromiso) y bandera amarilla (tu cosa actual aún no es la suya). Registra ambas.

**Plantilla de entrada:** 1) Contexto · 2) Observaciones (dicho vs hecho) · 3) Scores · 4) Learnings estratégicos (N=1) · 5) Implicaciones (qué feeds a dónde) · 6) Decisión / siguiente paso · 7) Evidencia.

---

## Sesión #1 · Carlos — Alma Verde (demo presencial · 14-jul-2026)

### 1. Contexto

- **Prospecto:** Carlos, **gerente** de Alma Verde (casual independiente formal · +5 restaurantes · 3 ciudades).
- **Rol:** gerente/adopter — **NO el payer** (esa es Alma, la dueña) · mismo account = multi-thread.
- **Cómo se llegó:** warm (ya le había mostrado demos + le dio una entrevista hace +1 año) → re-enganche por WhatsApp (Ola 1) → **demo presencial** en su sucursal, 9:30am.
- **Instrumento:** run-sheet Fase A (Mom Test → cuantificar el costo → demo de la app en vivo → ask).

### 2. Observaciones (dicho vs hecho)

**Cómo opera Alma Verde HOY (su mundo):**
- Procesos rápidos · **checklists para todos los procesos** · ya están estandarizando sus propios procesos.
- **Recetas estandarizadas · todo documentado** (tienen procesos documentados para todo).
- Inventarios a mano cada día (por las tardes) · protocolos diarios (chequeo de salsas, bebidas, pan, etc.).
- Las compras las hace un **departamento de compras**.
- Usan **Excel** para inventarios y recetas · han integrado **AI para generar templates** de sus documentos.
- Se comunican con todo el equipo por **Google Chat** (grupos donde está todo el equipo · toda la info pasa por ahí).
- **Observación de Alan:** sus documentos siguen viviendo en **canales múltiples** (fragmentados), no en un solo lugar.

**Dolores reales (los que resonaron):**
- **Capacitación de empleados = dolor fuerte.** Antes tenían un centro de capacitación interno; desapareció. Es complicado capacitar siempre, más aún con procesos nuevos. Todo está documentado, pero capacitar sigue siendo complicado.
- **Personal / horarios:** cuando los empleados cambian de horario o no pueden estar, le come mucho tiempo y frustración.
- **Mantenimiento** de máquinas/estructura (ej. una empleada le mandó un **video del ruido raro** de la máquina de expresos · la sucursal de cacho llegó con mal mantenimiento).
- **Permisos de gobierno:** complicado tener en mente cuándo renovar + los requisitos.

**Hipódromo → cacho:** lo que más se complicó fue el **mantenimiento** de la sucursal (máquinas/estructura, hubo que invertir tiempo/energía/dinero). En cambio, continuar con **calidad/procesos/proveedores NO le costó** — porque todo estaba estandarizado. De hecho, en su experiencia, las cosas se hacían **mejor** en cacho.

**Reacción al demo:**
- **Rechazó el ángulo POS:** quiere que Zenet **solo se encargue del back of house**.
- Le interesó el **concepto de AI + chat** · que sea **fácil de usar y entender**.
- **NO** se mostró muy interesado en las features de inventario/recetas/unidades (ya las tiene).
- **Sí** le interesó **automatizar sus procesos/protocolos** del back operativo.
- Quiere poder hacerlo **desde su tablet** · **app móvil** para el equipo.

**Lo que DIJO (síntesis):** sus pains **no están** en lo que ya ofrecen los POS (inventario, recetas, unidades) · su interés está en los **protocolos personalizados de Alma Verde** y en **automatizar** esos procesos del back · interesado en AI/chat/facilidad · *"sus pains van más a los procesos y protocolos personales"*.

**Lo que HIZO (revelado):**
- Dedicó su tiempo (demo presencial).
- **Abrió la puerta a las recetas — e incluso a TODOS los documentos y procesos** de Alma Verde.
- **Ofreció presentarlo con Alma** (la dueña/payer) **y con otros departamentos.**
- Confirmó que **se suma a construir** algo juntos · propuso **follow-up en ~1 mes** para validar sus observaciones.
- Confirmó que Zenet **es de valor SI** se agregan los protocolos + la automatización de procesos internos del back, y **sin relación con un POS**.

### 3. Scores (N=1)

| Hipótesis | Read | Evidencia |
|---|---|---|
| **H1** · los pains resuenan | 🟡 | Resonaron pains **reales** (capacitación, protocolos, mantenimiento) pero **no los hipotetizados** (inventario/estandarización) — te redirigió |
| **H2** · el valor conecta / "aha" | 🟡 | El core del demo (estandarización) no prendió (ya lo tiene) · sí conectó el concepto **AI/chat + automatizar sus procesos** |
| **H3** · distinto a su forma actual | 🟡 | Ve Zenet ≠ POS (coexistencia aterrizó) · pero el producto *actual* aún no es "mejor" para SU dolor |
| **H4** · compromiso revelado | 🟢 | Abrió **todos** los docs · **ofreció intro a Alma + departamentos** · construir juntos · follow-up 1 mes |
| **H6** · pozo de valor | 🟡 | *"Sería de gran valor SI se agregan las features"* · **costos abiertos**, sin cuantificar |

**Fit de Alma Verde como cuenta:** ICP **🟢** · Design Partner **🟢** → **perseguir** (candidato a Fase B).

**Resultado global:** **mixto pero muy productivo** — se ganó el design partner (H4 🟢 + puerta al payer abierta) **y** el partner redirigió el producto (H1-H3 pedían refinamiento). Salida clásica y valiosa de una sesión de validación.

### 4. Learnings estratégicos ⚠️ *(N=1 — dirección, no verdad)*

1. **La segmentación se afina.** El operador que más se prende **no** es el del "caos / operación rota" — es el que **YA tiene procesos documentados pero fragmentados** (Excel + Google Chat, manual). Hipótesis de Fase 1: apuntar primero a ese segmento; los que aún no tienen procesos = fases posteriores.
2. **Principio de producto: "Zenet extrae, nunca propone."** Para el ICP ya-documentado, Zenet **ingiere/organiza/automatiza** los procesos DEL operador · puede encontrar mejoras, pero **no propone procesos** (por ahora). Muy on-brand (*"aumentar, no reemplazar"*).
3. **El dolor real ≠ el hipotetizado.** Dolor #1 = **empleados/capacitación + protocolos personalizados + procesos internos + mantenimiento.** NO inventario/recetas/costos (features tipo-POS).
4. **Móvil/tablet es clave** (no solo web). El equipo se comunica por Google Chat · se necesita una **app accesible a todo el equipo** (staff/chefs) + **tablero admin** (dueño/gerentes).
5. **Coexistencia confirmada.** *"No quiero que sea un POS"* — el framing de **capa sobre el POS** aterriza limpio.

> ⚠️ **Riesgo a validar:** Alma Verde es un operador **sofisticado** (ya estandarizado · departamento de compras · tenían centro de capacitación · usan AI para templates). Eso está **por encima** del beachhead que la research definió (*"2-3 sucursales donde la operación se rompió"* — operadores que **necesitan** estandarizar). Posible **outlier**. Estos 5 learnings son **hipótesis de sesión-1** → validar con **2-3 operadores más (Ola 2)** antes de pivotear el ICP + el build.

### 5. Implicaciones — qué feeds a dónde *(cuando valide con 2-3+)*

| Learning | A dónde alimenta |
|---|---|
| Segmentación afinada (ya-documentados-fragmentados) | `Market Research/01-industry-and-market/04-segmentacion-de-mercado` + ICP profile |
| "Extraer no proponer" + dolor real (protocolos > inventario) | Product Strategy VP (`01-propuesta-de-valor`) + MVP scope (`02-features-y-scope`) |
| Móvil/tablet + tablero admin | MVP scope (surface de entrega · revisar E4 WhatsApp) + **repo de producción** |
| Lista de features + cambios de UX | **Repo de producción** (el build · aparte) |
| Cita de oro (POS) | **VoC library** (`02-customer-research/07-voice-of-customer`) |

### 6. Decisión / siguiente paso

- **Alma Verde = design partner #1** (soft-commit). **Plan:** construir el core que pidió → volver en ~1 mes con avances → **Carlos introduce a Alma + departamentos**.
- **Disciplina de ejecución:** construir el **core cross-cutting** (protocolos / extraer-no-proponer / móvil · alta convicción) **en paralelo** a **validar el redirect con Ola 2** (hipótesis afiladas). **NO** construir la lista completa de Carlos a ciegas (N=1).

### 7. Evidencia — lo que Carlos pidió *(input de la sesión · el build vive en el repo de producción)*

**Áreas / features que mencionó:**
- Permisos de gobierno
- Inventario
- Estructura operativa
- Manual de cómo solicitar factura a proveedor
- Recetas
- Checklist mañanera
- Checklist de mantenimiento
- Automatizar temas visuales
- Protocolos: apertura · clausura · pan · turnos
- Protocolos de compras y órdenes
- Capacitación
- Atención a cliente
- *(Referencia cultural que citó: el libro "Hospitalidad irracional" / Unreasonable Hospitality — Will Guidara)*

**Mejoras a la app actual (observadas durante el demo en vivo):**
- Cambiar los parámetros de **onboarding** (más enfocados a la segmentación).
- Formato para configurar la **estructura completa** (sucursales / CEDIS).
- Repensar la sección **"estandarización"** — quizá no se llama así · renombrar subsecciones · quizá "clasificación" ya no se necesita · en catálogos, agregar la opción de **subir documento** · el agente **no debe proponer** por ahora.
- Sección para la **estructura operativa**.
- **Tablero administrativo** (dueño + administradores) + **app móvil** (staff + chefs).
- Sección de **mantenimiento** por sucursal.
- Que los restaurantes puedan **correr sus propios workflows/procesos** (protocolo de cierre, apertura, pan, checklist mañanero).
- Sección de **permisos de gobierno**.
- Preparar la versión **tablet + móvil web**.

**Citas de oro (VoC · del apunte de la sesión, paráfrasis cercana — no grabación literal):**
- 🌟 *"No quiero que sea un POS, quiero que solo se encargue del back of house."*
- *"Todo lo tenemos documentado."* (dicho con orgullo · refuerza el "yo SOY el sistema" · el matiz es que ese documentado vive fragmentado)

---

*Entrada #1 · fuentes: apuntes de sesión de Alan (`Sesiones-Fase-A/Carlos-AlmaVerde-Apuntes-Debrief`) + debrief 16-jul. Trigger de acción sobre estos learnings: confirmarlos con Ola 2 (2-3 operadores) antes de alimentar VP/segmentación/MVP scope.*

---

## Sesión #2 · Alfonso Arballo — mesa de jóvenes CANIRAC TJ (café · 28-jul-2026)

> ⚠️ **Sesión de tipo distinto — leerla con otra vara.** No es un design partner ni una demo: es un **café con un conector institucional**, en contexto social, con Pedro de puente. Las señales aquí son **declaradas/sociales, no reveladas** → **no mueven el N del scorecard H1-H6**. Se registra aquí igual porque lo que enseñó pesa demasiado para vivir solo como viñeta de retro — y porque **forma patrón con la Sesión #1**.

### 1. Contexto

- **Contacto:** Alfonso Arballo, integrante de la mesa de jóvenes de **CANIRAC Tijuana**.
- **Cómo se llegó:** Pedro Castañeda (contador de Zenet · channel partner) hizo el puente → café informal, **Pedro presente**. Primer toque institucional warm.
- **Instrumento:** guión de café con conector institucional (`_templates/guion-reunion-canirac-fase-a.md` v0.1 · 5 beats).
- **Objetivo declarado:** aprender + relación + abrir puerta. NO venta, NO validación formal.
- ⚠️ **No confundir con Alfonso Arellano Castro** (excompañero de universidad · chef de catering · puerta a Culinary Art School TJ). Son dos personas distintas, ambas en el Pipeline.

### 2. Observaciones (dicho vs hecho)

**CANIRAC por dentro** *(intel de canal · H5)*:
- Cámara **política y burocrática** · funciona también como vía para sostener estatus político y regional.
- Hay **empresas grandes y reconocidas que están ahí principalmente por imagen**.
- Los miembros entran por: aprender · hacer contactos · buscar posición política · relaciones públicas.
- **Membresía ~$3,000 MXN anuales** → beneficios exclusivos (descuentos preferenciales a eventos).
- **Lectura de Alan:** buena apuesta **cuando ya haya PMF** y se busquen aliados para escalar · requiere habilidades sociales para negociar *"entre tanta pez grande"*.

**Su lectura de la industria:**
- **Sobresaturación de restaurantes en la región.** Mucha gente quiere abrir un negocio restaurantero y muchos fallan — es difícil sostenerse en un mercado tan competitivo.

**Su reacción a Zenet — lo importante de la sesión:**
- Le pareció una idea interesante, **pero no le quedó claro cuál es la problemática que Zenet realmente ataca** por la que un restaurantero diría *"lo compro"*.
- 🌟 *"Sí, Zenet se ve muy bonito, y sí es un asistente virtual — sin embargo al día de hoy solo es un núcleo de data estructurada, que el restaurantero ya hace y ya tiene en múltiples herramientas."* (paráfrasis cercana del apunte, no grabación literal)
- No le convence del todo que la propuesta de valor ataque un problema real de la industria.
- **Alan concede parcialmente:** *"en cierta parte tiene razón — por ahora la Fase 1 de Zenet solo es un prototipo que funciona como un núcleo de infraestructura de datos."*

**Lo que HIZO (revelado):**
- **Ningún ask aterrizó.** Sin nombre concreto de la mesa, sin siguiente paso propuesto, sin invitación. Interés intelectual y cortesía; **cero acción**.
- Lectura honesta: la sesión **aportó inteligencia, no avance de pipeline**.

### 3. Scores

| Hipótesis | Read | Nota |
|---|---|---|
| **H5** · fit de canal | 🟡 **matizado** | La puerta funcionó (Pedro entregó → la tesis *contador → aliado de canal* se sostiene) · pero **CANIRAC como canal es post-PMF, no Fase A** |
| **H2 / H3** | **no mueve el N** | No es ICP y el contexto era social · pero deja **bandera amarilla fuerte** (learning 1) |
| **H4** · compromiso revelado | ninguno | Ningún ask aterrizó |

**Fit como cuenta:** no aplica — es conector institucional, no prospecto de design partner.

> **Asimetría a notar:** en un café social, **su crítica pesa más que su entusiasmo**. Un *"está padrísimo"* de un insider es cortesía; un *"no me queda claro qué problema resuelve"* va **contra** el incentivo social de la conversación — por eso es información y no ruido.

### 4. Learnings estratégicos

1. **★ La VP no aterriza — y es la 2ª señal independiente.** Carlos (14-jul) dijo que su dolor no era inventario/recetas; Alfonso (28-jul) dice que no se entiende qué problema ataca. Dos fuentes distintas, mismo hueco → **ya no es N=1**. Hay que separar dos capas con remedios distintos:
   - **(a) Comunicación** — no se entiende qué problema ataca. Ya identificado como reto #1 desde el 19-jul · motivó la landing v2.
   - **(b) Sustancia** — *"hoy solo estructura data, eso ya lo tengo"*. Es una crítica al **alcance de Fase 1**, no al mensaje. **Alan la concede en parte.**
   - **Nota de coincidencia:** `03-oferta-y-pricing/06-argumentacion-de-valor-y-precio.md` (escrito el 31-jul, tres días después) **responde a (b) de frente**: su §3.3 argumenta que Fase 1 no ataca el food cost — hace que **el costo teórico exista por primera vez**, y con eso la brecha se vuelve visible. Eso ya no es "estructurar data": es un diagnóstico que el operador no tiene y no puede sacar solo. **Hipótesis operativa:** puede que el problema no sea de producto sino que **el argumento que lo defiende todavía no ha salido de la boca de Alan en una conversación real**. Sin probar (= HV-01 y HV-03 de ese doc).
2. **CANIRAC es canal post-PMF, no canal de Fase A.** Confirma con detalle de campo (precio + dinámica política) lo que `05-channel-partner-strategy.md` ya clasificaba como **Tier 2 institucional: awareness, NO revenue**. Ajuste honesto de expectativa: en la retro del 26-jul CANIRAC iba como *"la grande"* de la semana. No lo era — es una relación a cultivar lento.
3. **Convergencia del framework de 3 perfiles.** Alan escribe que hay que elegir entre *"independientes nuevos y en crecimiento · alta cocina o gourmet · producción grande ya estandarizados"* — **exactamente los 3 perfiles de la bitácora del 26-jul**, llegados por otro camino y en conversación con alguien de la industria, con la misma implicación: *"si intentamos atacar todas de una, no vamos a atacar ninguna."* Un framework que sobrevive el contacto con un insider sin que se lo plantees **sube de hipótesis de retro a hipótesis con apoyo externo**.
4. **Multi-stakeholder reforzado.** *"Cada restaurante cuenta con una estructura operativa, del dueño al staff de limpieza; cada miembro tiene sus propios problemas."* Refuerza el canon de multi-threading (68% vs 23%) — nada nuevo, pero llega de la industria y no del research.
5. **Un café social sin ask aterrizado no es pérdida, pero tampoco es progreso.** Vale registrarlo así para no confundir inteligencia con avance. La disciplina del guión (*"entusiasmo ≠ validación"*) funcionó: se detectó que no hubo señal revelada en vez de contarlo como puerta abierta.

### 5. Implicaciones — qué feeds a dónde

| Learning | A dónde alimenta |
|---|---|
| La VP no aterriza (2ª señal) | Copy de la landing (`SEO and Content/01-landing-page/01-copy.md` → v0.3) + `01-propuesta-de-valor/` cuando haya 3ª señal |
| Argumento del punto porcentual sin probar | `03-oferta-y-pricing/06-argumentacion-de-valor-y-precio.md` §10.1 (HV-01 · HV-03) — probar en la próxima sesión |
| CANIRAC = post-PMF + precio/dinámica | `04-go-to-market/05-channel-partner-strategy.md` (Tier 2 · confirma, no cambia) |
| Framework 3 perfiles con apoyo externo | `Market Research/01-industry-and-market/04-segmentacion-de-mercado` + ICP profile |
| Zenet como núcleo que reparte data a otros canales | `Market Research/05-market-insights/01-vision-plataforma-zenet.md` (draft v0.1) |

### 6. Decisión / siguiente paso

**Orden acordado (31-jul), de menor a mayor costo:**

1. **Probar el argumento en conversación** — llevar el frame del punto porcentual (§4 del doc 06) a la próxima sesión 1:1. Cero build. Prueba HV-03 directo.
2. **Mago-de-Oz del diagnóstico** — correr manualmente el análisis sobre los documentos de **Alma Verde** (Carlos ya los ofreció **todos** · H4 🟢 · follow-up pactado a ~1 mes → mediados de agosto). Prueba el instrumento con un voluntario y da con qué volver a Carlos: **un análisis, no una lista de features**.
3. **Pulir el copy de la landing** (v0.3) — 3 ediciones quirúrgicas, no rediseño: (a) remate de §2 que nombra el diagnóstico (*"tu criterio funciona, el problema es que no se puede copiar"*), (b) respuesta explícita al *"eso ya lo tengo en otras herramientas"* junto al strip anti-POS, (c) el piso en §7 (*qué te llevas aunque te vayas*: recetas costeadas, procesos escritos, manual tuyo, exportable — doc 06 §7.6, *"el más fuerte y el menos usado"*).
4. **Landing v3** — solo después de correr el diagnóstico una vez. **No prometerlo antes de tenerlo**: (i) el perfil 3 se auto-excluiría (*"yo no tengo documentos"*), (ii) es una promesa verificable con fecha implícita, (iii) `06-argumentacion` §9 pone el primer diagnóstico real como **el disparador mayor** que mueve los claims a v1.0. Lo seguro hoy es prometer el **método** (*"empezamos por entender cómo operas, con lo que ya tienes"* — ya está en la página), no el **hallazgo**.

**Sobre CANIRAC:** no forzar. Mantener la relación tibia con Alfonso y con Pedro; reactivar como canal cuando haya PMF y casos que enseñar.

### 7. Evidencia

**Brain-dump de framing de Alan (mismo documento de la sesión):**
- Núcleo de estructura operativa
- Agencia de especialistas / Agentic AI para restaurantes
- **Base de datos para otras herramientas o softwares** (extracción de manuales y reportes)
- Automatización de procesos digitales (todo proceso que requiera documentos o herramientas digitales)

**Enunciado de visión que escribió en caliente:**
> *"Construir una herramienta que brinde orden, paz y eficiencia a los restauranteros, que les permita enfocarse en lo que realmente importa: la calidad del servicio y la experiencia. Vender un sentimiento y un núcleo operativo capaz de repartir toda la data a otros canales —sea un POS, un software de contabilidad, etc.— pero que a la vez tenga la IA para automatizar procesos digitales y maximizar el potencial humano de creación y ejecución."*

⚠️ **Tensión a resolver (no contradicción):** *"repartir la data a otros canales (POS, contabilidad)"* apunta a integración, y **F7 (POS API) fue removido del roadmap canónico** el 26-05-2026 por barreras estructurales validadas. Salida **hacia afuera** (exportar) ≠ integración **hacia adentro** (API), y para cumplimiento la vía canónica ya es CFDI/PAC directo (F6). Vale aclararlo antes de que la frase entre a un pitch.

**Preguntas que quedaron abiertas a propósito:**
- *"¿Qué hace diferente a cada restaurante?"* — hilo sin jalar. Cruza con el framework de 3 perfiles y con el principio *"extraer, no proponer"*.
- *"¿Qué pasa cuando la industria restaurantera ya hace todo a mano?"* — respuesta preliminar de Alan: *"siempre hay algo que se puede mejorar… son procesos que se pueden estandarizar."*

---

*Entrada #2 · fuente: reflexiones de Alan post-café (`Sesiones-Fase-A/Alfonso_Arballo_joven_canirac.docx` · 31-jul). Sesión de conector institucional — **no cuenta como N de validación**. Trigger de acción: la bandera de la VP se confirma o se cae con la 3ª señal (próxima sesión 1:1 con ICP). Próxima entrada: siguiente sesión de validación.*
