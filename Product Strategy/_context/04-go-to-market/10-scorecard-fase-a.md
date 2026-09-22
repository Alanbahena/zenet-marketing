---
name: Scorecard — Fase A
description: Los números de la Fase A en un solo lugar. Tres tablas con trabajos distintos — el tablero del gate (estado acumulado por hipótesis H1-H6 + las dos condiciones del gate A→B + cobertura por perfil), la serie semanal de hipótesis (una fila por semana, para ver la tendencia sin leer siete retros) y, desde la v0.5, el embudo de ventas (los nueve conteos de 12-proceso-de-ventas §6, una fila por semana, con acumulado). Instancia con datos reales del scorecard que 06-plan §6.2 define. Los números se escriben SOLO aquí; la bitácora 09 narra y apunta; 08-learnings guarda la evidencia citada por sesión. Se actualiza cada domingo en la retro.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-09-20
status: active
version: 0.6
owner: Alan Bahena
---

# Scorecard — Fase A

> **Qué es:** el marcador. Dos tablas que contestan dos preguntas distintas:
> - **§1 · El tablero del gate** — *¿estamos pasando?* Estado acumulado por hipótesis + las dos condiciones del gate A→B.
> - **§2.1 · La serie de hipótesis** — *¿nos estamos moviendo?* Una fila por semana; su valor está en la tendencia, no en la última fila.
> - **§2.2 · El embudo de ventas** — *¿dónde se atora la gente?* Los nueve conteos de `12-proceso-de-ventas-fase-a.md` §6, una fila por semana y el acumulado abajo. **Validación y venta no se mezclan en una tabla, pero viven en el mismo doc** — se alimentan: ④ *Discovery → Pitch* es el N · ⑥ *Síes* es el intent-to-join del gate.
>
> **Carril:** los números se teclean **solo aquí**. `06-plan` §6.2 **define** el scorecard (hipótesis · señales · kill · umbrales); `08-learnings` guarda la **evidencia** citada por sesión; `09-bitacora` cuenta la **historia** y apunta aquí. Notion se queda con pipeline y tareas (lo vivo del día) — el scorecard H1-H6 que vivía allá pasa a ser espejo o se retira.
>
> **Regla anti-drift:** el tablero (§1) **se deriva** de la serie (§2) + `08`. No se edita por separado. Si un día no cuadran, mandan §2 y `08`.
>
> **v0.5 (2026-09-16):** entra **§2.2 el embudo de ventas** — los nueve conteos que `12-proceso-de-ventas` §6.2 define, como tabla aparte de la serie de hipótesis (decisión del fundador, 16-sep: *son cosas distintas; mismo doc, tablas distintas*). Arranca la semana del 14-sep, cuando arranca el proceso; lo anterior queda como contexto, no como acumulado. §3 gana las nueve definiciones · §5 el ritual llena dos filas · la skill pide los nueve.
>
> **v0.3 (2026-09-08):** el conteo pasa a medirse contra el **ICP de hipótesis de la Fase A** (`11-icp-hipotesis-fase-a.md` §2.3) — Miguel entra al N, Alma Verde sale al carril de producto · fila nueva en el gate: *hay de dónde extraer* (el experimento) · **H6 se lee en dos partes** (pozo · precio) · intent-to-join = *conociendo el precio* · decisiones #1 y #2 cerradas · §1.1 gana la columna *qué hipótesis mide*.
>
> **Disciplina heredada del plan:** revelado > declarado · cada semáforo se lee con su N al lado (🟢 con N=1 es dirección, no verdad) · buscar activamente lo que refuta.

---

## 1. El tablero del gate *(al 2026-09-20 · 11 semanas de Fase A · contra el ICP de hipótesis de la Fase A · `11` §2.3)*

### 1.1 Gate A→B — las dos condiciones, juntas

Cada fila de **(a)** es un **umbral sobre una o varias hipótesis de §1.2**; **(b)** es lo que Zenet necesita tener listo si dicen que sí. El conteo es contra el ICP de hipótesis de la Fase A (`11` §2.3: 3 eliminatorios · ≥ 4 de 6 calificadores · quién valida qué · N por cuenta).

| Condición | Qué hipótesis mide | Umbral (`06-plan` §9.2) | Hoy | |
|---|---|---|---|---|
| **(a)** La propuesta de valor la reconocen suficientes personas del perfil correcto | H1 · H2 · H3 | 🟢 sobre ~5-8 conversaciones | **1 — Miguel (perfil ②)** · H1 🟢 dir. · H2 🟡 · H3 🟢 dir. | ✗ |
| **(a)** **Hay de dónde extraer** — el análisis del producto corre con lo que el operador ya tiene y produce algo que reconoce como suyo *(experimento `11` §0.2)* | la hipótesis propia del ICP chico | ≥ 3 de las primeras 5 | **0 de 0** — Miguel tiene Excel+Word+Trello; el análisis no ha corrido con sus documentos | ⬜ |
| **(a)** Compromisos **revelados** — hicieron algo: mandaron docs, dieron un intro, agendaron | H4 | ≥ 3-4 | **0** del ICP de Fase A · Miguel: abierto (el ask de docs no se hizo; la señal decisiva es qué hace con `/demo`) · *Carlos: 1, como señal de H4 fuera del ICP (perfil ①)* | ✗ |
| **(a)** Intent-to-join — *"quiero entrar al programa"*, **conociendo el precio y los términos** | H4 + H6·precio, al nivel del que paga | ≥ 1-2 | **0** — el soft-commit de Carlos sale con Alma Verde (decisión #2) | ✗ |
| **(a)** El problema le cuesta algo hoy | H6 · pozo | no en 🔴 | 🟡 — cero cuantificaciones reveladas; Miguel *"realmente pagaría"* es declarado | ✓ |
| **(b)** App V1 demostrable | readiness | — | ✅ **desde el 30-ago** (desktop + móvil · Task 28 verificada en producción) | ✓ |
| **(b)** Legal listo (entidad · abogado · contratos en borrador) | readiness | — | ⬜ **marca registrada ante el IMPI (otorgada 14-sep)** · régimen fiscal en cambio (contador · respuesta 21-22 sep) · sin entidad ni abogado: **el acuerdo de la Fase A es el kit de bienvenida** (5ª desviación · `02-programa` v0.1.1) · abogado detrás del primer sí · cf. `05-capital-y-finanzas/01-operational-readiness` | ⬜ |

**Lectura:** al recontar contra el ICP de Fase A el marcador **baja y se vuelve honesto** — de *1 · 1 · 1* (Alma Verde, perfil ①) a **1 conversación · 0 compromisos · 0 intent** (Miguel). Las hipótesis no cambiaron; cambió a quién se le pregunta. Lo que sí hay es dirección (H1 y H3 con señal) y un experimento sin correr (extraer). La condición **(b)** ya no bloquea nada del lado del producto.

### 1.2 Hipótesis H1-H6 — estado acumulado

| H | Qué valida | Evidencia revelada (con quién · cuándo) | Kill signals | Read | N |
|---|---|---|---|---|---|
| **H1** | Los pains que priorizamos son **sus** principales | **Miguel (12-ago):** *la carga* —tiempo, energía, incendios— como dolor #1, en sus palabras · **Carlos (14-jul):** pains reales (protocolos · mantenimiento · gente) pero **no los hipotetizados** (inventario/estandarización) · JP (7-ago · control): resuenan, pero invertidos — construcción, no extensión | ninguno | 🟡→🟢 | 2 op. |
| **H2** | Nuestro valor **conecta** con lo que más valoran | **Carlos:** prendió AI/chat + automatizar sus procesos; el core del demo (estandarización) no · Miguel: pitch verbal, "sí" post-pitch (cortesía posible) | **Arballo (28-jul):** *"¿otro software más?"* — declarado, social, pero bandera fuerte · **Alfonso (27-ago) T1 contaminado:** eco, no comprensión espontánea | 🟡 | 1 |
| **H3** | Ven a Zenet **distinto** de su alternativa actual | **Alfonso (27-ago):** articuló **solo** el moat *hardware-agnostic* vs SoftRestaurant — la mejor señal de la Fase A, de quien conoce a los vendors · **Carlos:** Zenet ≠ POS, la coexistencia aterrizó | Arballo | 🟢 direccional | 1 insider + 1 op. |
| **H4** | Está dispuesto a **dar** | **Carlos 🟢:** abrió todos sus docs · ofreció intro a Alma + departamentos · **Miguel 🟡:** relación revelada fuerte (platillo · tiempo · apertura) pero el ask de docs no se hizo como se diseñó | **JP:** puerta declarada, cero revelado · **Arballo:** ningún ask aterrizó · **Carlos frío desde agosto** | 🟡 | 1 de 3-4 |
| **H5** | Qué **mensaje + canal** convierte | **Victor → Miguel:** ciclo completo referido→sesión presencial 🟢 · **red del programa de emprendimiento → JP:** 1ª warm real 🟢 · **Pedro → CANIRAC:** la puerta funcionó (canal post-PMF) | **Frío / LinkedIn: 5 canales tocados → 0 respuestas** (24-30 ago) · **31 ago–6 sep: 2 → 0, ninguno visto** — Juanjo y Algira Garzón por LinkedIn, mensajes sin abrir y links Dub sin clic → dato del canal, no del mensaje · 10 prospectos "por enviar" desde julio | 🟡 partido: **tibio funciona · frío no** | — |
| **H6 · pozo** | El problema le **cuesta** algo hoy (painkiller, no vitamina) | *(ninguna cuantificación revelada todavía)* · **Miguel:** *"realmente pagaría"* — declarado, post-pitch, en calidez · **Alfonso:** *"un chef pagaría $2-4K"* — declarado, en **tercera persona** | **Carlos:** costos abiertos, sin cuantificar | 🟡 riesgo | 0 revelados · 2 declarados sobre el ancla |
| **H6 · precio** | Acepta el ancla **cuando se le dice** (no se le pregunta) — con el argumento del punto (HV-03) | *(el precio no se ha dicho con el punto a ningún operador del ICP de Fase A)* · HV-03 corrió 1 vez, aproximado, con un insider (S#5) | — | ⬜ sin probar | 0 |

**Lo que el tablero dice de un vistazo:** la VP (H1-H3) tiene señal pero no N · el compromiso revelado sigue en uno · el canal tibio produce y el frío no · y **nadie ha cuantificado todavía lo que le cuesta hoy** — que es exactamente el riesgo *"yo SOY el sistema"* que el plan pidió vigilar.

### 1.3 Cobertura del framework de 3 perfiles

| Perfil | Definición (eje: estandarización previa) | Sesión | Estado en la Fase A (`11` §1.2) |
|---|---|---|---|
| ① Estandarizado / gran producción | ya documentado · Zenet extiende y mantiene | Carlos · Alma Verde (14-jul) | ✓ · **carril de producto · no suma al N** — feedback de la app + prueba del análisis con docs reales · vuelve como ICP al cumplirse `11` §0.4 |
| ② Alta cocina / chef-dueño | preserva calidad y consistencia · *fine dining ≠ documentado* | Miguel Bahena (12-ago) | ✓ · **adyacente · suma al N** |
| ②b Cafetería con cocina propia | entra si hay BoH que extraer | — | ✗ · sin sesión |
| ③ **Independiente sin estandarizar** | **el centro** · Zenet extrae su sistema de lo que ya tiene | — | **✗ · 11ª semana en cero** |
| *(control)* bajo el beachhead | nada que extraer — pediría construcción | Juan Pablo (7-ago) | fuera · acota **por abajo** |

---

## 2. Las series semanales

### 2.1 La serie de hipótesis — *¿la apuesta se sostiene?*

`s/r` = sin registro en la bitácora · `⚠️` = kill signal presente esa semana · `⬜` = no probado · los semáforos se **arrastran** de la última lectura conocida; la semana en que cambian va en **negrita**.

| Semana | Sesiones con operador | N ICP Fase A / 5-8 | Perfil 3 | Msj → resp | H1 | H2 | H3 | H4 | H5 | H6 | ¿Movió? |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 6–12 jul | 0 · arranque · Ola 1 | 0 | 0 (1ª) | Ola 1 (s/r) | — | — | — | — | — | — | Arranque |
| 13–19 jul | **+1 Carlos** (perfil 1) | **1** | 0 (2ª) | s/r | **🟡** | **🟡** | **🟡** | **🟢** | — | **🟡** | **Sí** — sesión #1 · primer scorecard · soft-commit |
| 20–26 jul | 0 | 1 | 0 (3ª) | 2 enviados (Alma · Miguel) → s/r | 🟡 | 🟡 | 🟡 | 🟢 | — | 🟡 | No — landing v2 (era el gate para compartir con Miguel) · Ola 2 arranca |
| 27 jul–2 ago | 0 *(Arballo · conector)* | 1 | 0 (4ª) | s/r | 🟡 | **⚠️** | 🟡 | 🟢 | **🟡** | 🟡 | No — *"la semana que se pensó, no se habló"* |
| 3–9 ago | 0 *(JP · control)* | 1 | 0 (5ª) | s/r | 🟡 | ⚠️ | 🟡 | 🟢 | **🟢** | 🟡 | No al N — landing v3 a producción · el pipeline revivió solo |
| 10–16 ago | **+1 Miguel** (perfil 2) | 1 | 0 (6ª) | s/r | **🟢** | **⬜** | 🟡 | **🟡** | 🟢 | 🟡 | Parcial — la carga como dolor #1 · 1ª WTP declarada de un dueño · bucket quieto |
| 17–23 ago | 0 | 1 | 0 (7ª) | s/r | 🟢 | ⬜ | 🟡 | 🟡 | 🟢 | 🟡 | No — 2ª consecutiva · onboarding/análisis en construcción · Hablemos v0.4 |
| 24–30 ago | 0 *(Alfonso · insider)* | 1 | 0 (8ª) | **5 → 0** | 🟢 | ⬜ | **🟢** | 🟡 | 🟢 | 🟡 | No — 3ª consecutiva · **gate (b) ✅ V1 demostrable** |
| 31 ago–6 sep | 0 | 1 | 0 (9ª) | **2 → 0, ninguno visto** (Juanjo · Algira · ambos por LinkedIn · mensajes sin abrir · links Dub sin clic) | 🟢 | ⬜ | 🟢 | 🟡 | **🟡 partido** | 🟡 | No — 4ª consecutiva · landing v3.3 · deudas de doc cerradas · scorecard v0.1 · **la apuesta cambia de blanco: el ICP de Fase A se redefine** (doc 11 en curso · perfil 2-3 · 1-2 sucursales · early adopters) · gate (b) V1 ✅ · legal sin cambio |
| 7–13 sep | 0 | 1 *(= Miguel · contra el ICP de Fase A)* | 0 (10ª) | **0 → 0** (nada enviado · Juanjo y Algira siguen sin ver el de LinkedIn, 2ª semana) | 🟢 | ⬜ | 🟢 | 🟡 | 🟡 partido | 🟡 | No — 5ª consecutiva · **landing v4 + `/demo` v0.2 EN VIVO** (regla del deploy: la narrativa describe, las instrucciones piden solo lo que corre) · **ICP de Fase A v0.1 cerrado** + edición de campo · guión v0.6 · mensajes v0.2 (ask #1 = 5 facturas) · Compras 40.1–40.6 · gate (b) V1 ✅ · legal sin cambio |
| 14–20 sep | 0 | 1 | 0 (11ª) | **0 → 0 → 0** (nada enviado — el #9 adjunta el ejemplo y el ejemplo no existió · Juanjo y Algira siguen sin ver el de LinkedIn, 3ª semana) | 🟢 | ⬜ | 🟢 | 🟡 | 🟡 partido | 🟡 | No — 6ª consecutiva · **el kit de venta entero** (doc 12 v0.1 · script · flyer SF · kit de bienvenida · tarjeta impresa · mensajes v0.3 · canon con 5 desviaciones) · **IMPI ® otorgado** · diagnóstico v2 pág. 1 · producto sin avance · gate (b) V1 ✅ · legal: ® + régimen fiscal en curso |

*La columna **N ICP Fase A** se llamaba *N beachhead* hasta el 8-sep. Los valores históricos no cambian pero **cambia lo que significa el 1**: hasta el 31 ago–6 sep, 1 = Carlos, contra el beachhead anterior; desde el 7-13 sep, 1 = Miguel, contra el ICP de hipótesis de la Fase A (`11` §2.3). Las filas anteriores conservan su lectura.*

*H5 se lee 🟡 partido desde el 31 ago–6 sep para alinear la serie con §1.2 (decisión #5); las filas anteriores conservan el 🟢 del referido tibio (3-9 ago), que fue su lectura honesta en su momento.*

**Lo que la serie dice de un vistazo:** 11 semanas · 2 sesiones con operador · 1 en el N · perfil ③ nunca tocado · **9 semanas sin movimiento, 6 consecutivas** · la entrada ya se mide (decisión #4): **cuatro filas seguidas con dato, y las cuatro en cero** — la última porque el mensaje dependía de un adjunto que no existió.

### 2.2 El embudo de ventas — *¿dónde se atora la gente?* `[desde 12-proceso-de-ventas §6 · v0.5]`

**Qué cuenta cada columna:** los nueve conteos de `12` §6.2, en el orden del pipeline. Cada celda es **lo que pasó esa semana**; la última fila es **el acumulado desde el 14-sep**. **Conteos, no porcentajes** (`12` §6.3: con cinco lugares y diez mensajes, una tasa es ruido — lo que informa es en qué columna se para la gente). Una persona está en una sola etapa y avanza solo con evidencia: un *sí* sin precio dicho se queda en ④, no pasa a ⑥ · el *"va"* no es pago: ⑥ ≠ ⑦.

**Metas ya escritas** (no nuevas): semana 14–20 sep → **≥ 10 en ① y ≥ 1 en ③** (retro 13-sep · **no se cumplió: 0 · 0**) · **semana 21–27 sep → las mismas** (retro 20-sep) · gate A→B → **5-8 en ④ · 3-4 compromisos revelados · 1-2 en ⑥** (`06-plan` §9.2 · §1.1) · la cohorte → **5 en ⑦**.

| Semana | ① Contactados (env → vistos → resp) | ③ Sesiones (agend → hechas) | ④ Discovery → Pitch | ⑤ Ofertas dichas | ⑥ Síes | ⑦ Pagados | ⑧ Diagnósticos entregados | ⑨ Activos al mes 2 | de ellos, perfil ③ |
|---|---|---|---|---|---|---|---|---|---|
| *antes del 14-sep (10 semanas · contexto, no acumula)* | *≥ 9 registrados → s/r → 1 (Miguel) · Ola 1 s/r* | *2 → 2 (Carlos 14-jul · Miguel 12-ago) — sesiones de validación, no de venta* | *0 — no había proceso* | *0 — el precio nunca se dijo* | *0* | *0* | *0* | *0* | *0* |
| 14–20 sep | **0 → 0 → 0** — el #9 no salió: dependía del PDF de ejemplo | 0 → 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Σ desde el 14-sep** | **0 → 0 → 0** | **0 → 0** | **0** | **0** | **0** | **0** | **0** | **0** | **0** |

*② Respondieron es la tercera cifra de ①; ⑧ y ⑨ arrancan vacías por diseño (`12` §6.2). Los días entre etapas se anotan en Notion, no aquí.*

**Lo que el embudo dice de un vistazo:** primera fila cerrada, en cero. Nadie se atoró en una etapa: nadie entró — el mensaje no salió porque el adjunto (el PDF de ejemplo) no existió. La meta se repite para el 21–27.

---

## 3. Qué significa cada columna

| Columna | Definición | Fuente del dato |
|---|---|---|
| **Sesiones con operador** | Conversaciones esa semana con alguien que **opera un restaurante** — cuente o no al beachhead. Conectores e insiders (Arballo · Alfonso) van en cursiva y **no suman** | `08-learnings` · bitácora |
| **N ICP Fase A / 5-8** | Acumulado de **cuentas** que suman según `11` §2.3 (3 eliminatorios · ≥ 4 de 6 calificadores · quién valida qué), contra el umbral del gate. Perfiles ③ y ② suman; ① va al carril de producto | `11` §2.3 · gate `06-plan` §9.2 |
| **Perfil 3** | Sesiones con el **centro del beachhead** (independiente sin estandarizar). Con contador de semanas en cero, para que el cero no se vuelva invisible. Cuenta desde la semana 1 de Fase A (6-jul) | framework 3 perfiles · bitácora 20-26 jul |
| **Msj → resp** | Mensajes de outreach enviados esa semana → cuántos los **vieron** → cuántos contestaron. Un no visto es dato del canal, no del mensaje (decisión #5). La **única columna que mide entrada**, no producto | bitácora · Notion Pipeline · clics en Dub · estado "visto" en LinkedIn/WhatsApp |
| **H1–H6** | Semáforo por hipótesis según `06-plan` §2: 🟢 señal revelada fuerte · 🟡 mixto / poca data · 🔴 kill signals acumulándose · ⚠️ kill signal presente · ⬜ no probado | `08-learnings` §3 de cada sesión |
| **¿Movió?** | Sí / Parcial / No + una línea. El resumen honesto de la semana | retro |

**Las columnas del embudo (§2.2)** — definidas en `12-proceso-de-ventas-fase-a.md` §6.1; aquí solo qué cuenta y quién lo valida:

| Columna | Cuenta cuando | Quién valida |
|---|---|---|
| **① Contactados** | se mandó el mensaje 1:1 (`mensajes` #9 · un Dub por persona) → lo vio → contestó algo. Los insiders y conectores van en cursiva y no suman | — |
| **③ Sesiones** | hay fecha, hora y lugar → la sesión ocurrió | — |
| **④ Discovery → Pitch** | reconoció 3+ de los 5 problemas con episodio **y** es perfil ③/② (`12` §1). Es la misma cuenta que el N de §2.1 | gerente/chef validan el dolor |
| **⑤ Ofertas dichas** | se dijo el precio **con el punto** (`12` §3). Un precio soltado sin el argumento no cuenta | **solo el que paga** |
| **⑥ Síes** | dijo sí **conociendo precio y términos**. = *intent-to-join* del gate (§1.1). Un *"me interesa"* sin precio dicho se queda en ④ | **solo el que paga** |
| **⑦ Pagados** | la transferencia está en la cuenta (el *"va"* no es pago) | — |
| **⑧ Diagnósticos entregados** | la sesión de entrega ocurrió; se registra textual *"¿te dijo algo que no supieras?"* y si pidió su dinero | el que paga |
| **⑨ Activos al mes 2** | pagó el mes 2 (o siguió sin pedir devolución) | — |
| **de ellos, perfil ③** | cuántos de los de ④ en adelante son el centro del beachhead | `11` §1.2 |

---

## 4. Decisiones de conteo *(abiertas · las cierra Alan)*

| # | Decisión | Estado |
|---|---|---|
| 1 | **¿Miguel suma al N del gate?** | ✅ **cerrada 8-sep** — regla `11` §2.3: **amplio por perfil** (③ y ② suman) · **estricto por regla** (3 eliminatorios + ≥ 4 de 6 calificadores + quién valida qué · N por cuenta). **Miguel entra (5 de 6) · Alma Verde sale al carril de producto (perfil ①)** |
| 2 | **¿El soft-commit de Carlos cuenta como intent-to-join?** | ✅ **resuelta por consecuencia 8-sep** — Alma Verde está fuera del N; su soft-commit es señal de H4, no intent del ICP de Fase A. Intent-to-join se lee además *conociendo el precio* |
| 3 | **Volver al canon H1-H6 en los run-sheets.** Las sesiones #4 (V1-V8) y #5 (T1-T5) usaron mapas propios; aquí se tradujeron (el mapa T lo dice explícito: T1·H2 · T4·H3 · T5·H1 · precio·H6; el V es directo: V1·H1 · V3·H2 · V4·H4 · V5·H6 · V8·H5). Para que la tabla se llene sola, el score de cada sesión debe salir ya en H | ⬜ · aplica desde la próxima sesión · **ya tiene dónde vivir:** `11` §7.9 (nueve checks + perfil + H canon) |
| 4 | **Medir la entrada.** *Msj → resp* solo tenía dato en 2 de 9 semanas. Cada retro registra enviados y respondidos, aunque sea 0 → 0 | ✅ **cerrada 13-sep** — aplicada desde el 24-ago: tres filas seguidas con dato (5 → 0 · 2 → 0 · 0 → 0) |
| 5 | **Medir "visto" y alinear H5.** La entrada se registra como enviados → vistos → respondidos; un no visto es dato del canal, no kill de H5. La serie lee H5 como 🟡 partido desde el 31 ago–6 sep (igual que §1.2); las filas anteriores conservan su lectura. Para contactos tibios, LinkedIn no es canal de primer toque | ✅ **cerrada 6-sep** |

---

## 5. Cómo se actualiza (el ritual del domingo)

1. **Agregar las dos filas de la semana** — la de hipótesis en §2.1 y la del embudo en §2.2 — con lo que haya, incluidos los ceros; lo que no se sabe queda `s/r`, nunca se estima. **Recalcular la fila Σ** de §2.2.
2. **Recalcular §1** solo si la semana produjo evidencia nueva (una sesión, una respuesta, un compromiso cumplido). Si no, cambia la fecha del encabezado y nada más.
3. **La sección `📊` de la bitácora** se reduce a una línea: el delta + *"scorecard → `10-scorecard-fase-a.md`"*.
4. **Cuando algo gradúa** (una H llega a 🟢 con N suficiente · un perfil se cubre · una condición del gate cambia), se registra también en `08-learnings` (evidencia) y, si es canónico, en CLAUDE.md §4.

---

## 6. Cross-references

| Doc | Relación |
|---|---|
| `06-plan-de-activacion-y-validacion-fase-a.md` §2 · §6.2 · §9.2 | **Define** las hipótesis, el formato del scorecard y los umbrales del gate. Este doc es su instancia con datos |
| `12-proceso-de-ventas-fase-a.md` §6 | **Define el pipeline y los nueve conteos** del embudo (§2.2): etapas, qué mueve a cada persona, quién valida qué. Este doc los registra |
| `08-learnings-de-validacion.md` | **La evidencia** citada por sesión (#1 Carlos · #2 Arballo · #3 JP · #4 Miguel · #5 Alfonso). Cada celda de §1.2 apunta a una entrada |
| `09-bitacora-semanal-fase-a.md` | **La narrativa** por semana. Desde el 5-sep su sección `📊` apunta aquí |
| `Product Strategy/_templates/criterios-icp-y-design-partner-fase-a.md` | Los criterios con que se decide si una sesión suma al N |
| `05-capital-y-finanzas/01-operational-readiness-y-business-setup-phase-1.md` | La condición (b) legal del gate |
| Notion · cockpit `🎯 Zenet — Fase A` | Pipeline + tareas (lo vivo). Ya no es la fuente del scorecard |
