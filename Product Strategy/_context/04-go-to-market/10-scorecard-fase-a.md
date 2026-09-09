---
name: Scorecard — Fase A
description: Los números de la Fase A en un solo lugar. Dos tablas con trabajos distintos — el tablero del gate (estado acumulado por hipótesis H1-H6 + las dos condiciones del gate A→B + cobertura por perfil) y la serie semanal (una fila por semana, para ver la tendencia sin leer siete retros). Instancia con datos reales del scorecard que 06-plan §6.2 define. Los números se escriben SOLO aquí; la bitácora 09 narra y apunta; 08-learnings guarda la evidencia citada por sesión. Se actualiza cada domingo en la retro.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-09-08
status: active
version: 0.3
owner: Alan Bahena
---

# Scorecard — Fase A

> **Qué es:** el marcador. Dos tablas que contestan dos preguntas distintas:
> - **§1 · El tablero del gate** — *¿estamos pasando?* Estado acumulado por hipótesis + las dos condiciones del gate A→B.
> - **§2 · La serie semanal** — *¿nos estamos moviendo?* Una fila por semana; su valor está en la tendencia, no en la última fila.
>
> **Carril:** los números se teclean **solo aquí**. `06-plan` §6.2 **define** el scorecard (hipótesis · señales · kill · umbrales); `08-learnings` guarda la **evidencia** citada por sesión; `09-bitacora` cuenta la **historia** y apunta aquí. Notion se queda con pipeline y tareas (lo vivo del día) — el scorecard H1-H6 que vivía allá pasa a ser espejo o se retira.
>
> **Regla anti-drift:** el tablero (§1) **se deriva** de la serie (§2) + `08`. No se edita por separado. Si un día no cuadran, mandan §2 y `08`.
>
> **v0.3 (2026-09-08):** el conteo pasa a medirse contra el **ICP de hipótesis de la Fase A** (`11-icp-hipotesis-fase-a.md` §2.3) — Miguel entra al N, Alma Verde sale al carril de producto · fila nueva en el gate: *hay de dónde extraer* (el experimento) · **H6 se lee en dos partes** (pozo · precio) · intent-to-join = *conociendo el precio* · decisiones #1 y #2 cerradas · §1.1 gana la columna *qué hipótesis mide*.
>
> **Disciplina heredada del plan:** revelado > declarado · cada semáforo se lee con su N al lado (🟢 con N=1 es dirección, no verdad) · buscar activamente lo que refuta.

---

## 1. El tablero del gate *(al 2026-09-08 · 9 semanas de Fase A · contra el ICP de hipótesis de la Fase A · `11` §2.3)*

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
| **(b)** Legal listo (entidad · abogado · contratos en borrador) | readiness | — | ⬜ sin registro en el workspace · cf. `05-capital-y-finanzas/01-operational-readiness` | ⬜ |

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
| ③ **Independiente sin estandarizar** | **el centro** · Zenet extrae su sistema de lo que ya tiene | — | **✗ · 9ª semana en cero** |
| *(control)* bajo el beachhead | nada que extraer — pediría construcción | Juan Pablo (7-ago) | fuera · acota **por abajo** |

---

## 2. La serie semanal

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

*La columna **N ICP Fase A** se llamaba *N beachhead* hasta el 8-sep. Los valores históricos no cambian pero **cambia lo que significa el 1**: hasta el 31 ago–6 sep, 1 = Carlos, contra el beachhead anterior; desde el 7-13 sep, 1 = Miguel, contra el ICP de hipótesis de la Fase A (`11` §2.3). Las filas anteriores conservan su lectura.*

*H5 se lee 🟡 partido desde el 31 ago–6 sep para alinear la serie con §1.2 (decisión #5); las filas anteriores conservan el 🟢 del referido tibio (3-9 ago), que fue su lectura honesta en su momento.*

**Lo que la serie dice de un vistazo:** 9 semanas · 2 sesiones con operador · 1 en el bucket del beachhead · perfil 3 nunca tocado · **7 semanas sin movimiento, 4 consecutivas** · y la columna *Msj → resp* casi vacía — **la entrada no se estuvo midiendo**, que es en sí un hallazgo.

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

---

## 4. Decisiones de conteo *(abiertas · las cierra Alan)*

| # | Decisión | Estado |
|---|---|---|
| 1 | **¿Miguel suma al N del gate?** | ✅ **cerrada 8-sep** — regla `11` §2.3: **amplio por perfil** (③ y ② suman) · **estricto por regla** (3 eliminatorios + ≥ 4 de 6 calificadores + quién valida qué · N por cuenta). **Miguel entra (5 de 6) · Alma Verde sale al carril de producto (perfil ①)** |
| 2 | **¿El soft-commit de Carlos cuenta como intent-to-join?** | ✅ **resuelta por consecuencia 8-sep** — Alma Verde está fuera del N; su soft-commit es señal de H4, no intent del ICP de Fase A. Intent-to-join se lee además *conociendo el precio* |
| 3 | **Volver al canon H1-H6 en los run-sheets.** Las sesiones #4 (V1-V8) y #5 (T1-T5) usaron mapas propios; aquí se tradujeron (el mapa T lo dice explícito: T1·H2 · T4·H3 · T5·H1 · precio·H6; el V es directo: V1·H1 · V3·H2 · V4·H4 · V5·H6 · V8·H5). Para que la tabla se llene sola, el score de cada sesión debe salir ya en H | ⬜ · aplica desde la próxima sesión · **ya tiene dónde vivir:** `11` §7.9 (nueve checks + perfil + H canon) |
| 4 | **Medir la entrada.** *Msj → resp* solo tiene dato en 2 de 9 semanas. Cada retro registra enviados y respondidos, aunque sea 0 → 0 | ⬜ · aplica desde la retro del 6-sep |
| 5 | **Medir "visto" y alinear H5.** La entrada se registra como enviados → vistos → respondidos; un no visto es dato del canal, no kill de H5. La serie lee H5 como 🟡 partido desde el 31 ago–6 sep (igual que §1.2); las filas anteriores conservan su lectura. Para contactos tibios, LinkedIn no es canal de primer toque | ✅ **cerrada 6-sep** |

---

## 5. Cómo se actualiza (el ritual del domingo)

1. **Agregar la fila de la semana** en §2 — con lo que haya, incluidos los ceros.
2. **Recalcular §1** solo si la semana produjo evidencia nueva (una sesión, una respuesta, un compromiso cumplido). Si no, cambia la fecha del encabezado y nada más.
3. **La sección `📊` de la bitácora** se reduce a una línea: el delta + *"scorecard → `10-scorecard-fase-a.md`"*.
4. **Cuando algo gradúa** (una H llega a 🟢 con N suficiente · un perfil se cubre · una condición del gate cambia), se registra también en `08-learnings` (evidencia) y, si es canónico, en CLAUDE.md §4.

---

## 6. Cross-references

| Doc | Relación |
|---|---|
| `06-plan-de-activacion-y-validacion-fase-a.md` §2 · §6.2 · §9.2 | **Define** las hipótesis, el formato del scorecard y los umbrales del gate. Este doc es su instancia con datos |
| `08-learnings-de-validacion.md` | **La evidencia** citada por sesión (#1 Carlos · #2 Arballo · #3 JP · #4 Miguel · #5 Alfonso). Cada celda de §1.2 apunta a una entrada |
| `09-bitacora-semanal-fase-a.md` | **La narrativa** por semana. Desde el 5-sep su sección `📊` apunta aquí |
| `Product Strategy/_templates/criterios-icp-y-design-partner-fase-a.md` | Los criterios con que se decide si una sesión suma al N |
| `05-capital-y-finanzas/01-operational-readiness-y-business-setup-phase-1.md` | La condición (b) legal del gate |
| Notion · cockpit `🎯 Zenet — Fase A` | Pipeline + tareas (lo vivo). Ya no es la fuente del scorecard |
