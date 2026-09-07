---
name: Scorecard — Fase A
description: Los números de la Fase A en un solo lugar. Dos tablas con trabajos distintos — el tablero del gate (estado acumulado por hipótesis H1-H6 + las dos condiciones del gate A→B + cobertura por perfil) y la serie semanal (una fila por semana, para ver la tendencia sin leer siete retros). Instancia con datos reales del scorecard que 06-plan §6.2 define. Los números se escriben SOLO aquí; la bitácora 09 narra y apunta; 08-learnings guarda la evidencia citada por sesión. Se actualiza cada domingo en la retro.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-09-06
status: active
version: 0.2
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
> **Disciplina heredada del plan:** revelado > declarado · cada semáforo se lee con su N al lado (🟢 con N=1 es dirección, no verdad) · buscar activamente lo que refuta.

---

## 1. El tablero del gate *(al 2026-09-06 · 9 semanas de Fase A)*

### 1.1 Gate A→B — las dos condiciones, juntas

| Condición | Umbral (`06-plan` §9.2) | Hoy | |
|---|---|---|---|
| **(a)** H1-H3 en 🟢 a lo largo de ~5-8 conversaciones | 5-8 | **1** del beachhead (2 operadores) · H1-H3 en 🟡 | ✗ |
| **(a)** Compromisos revelados (H4) | ≥ 3-4 | **1** — Carlos (abrió docs + ofreció intros) | ✗ |
| **(a)** Intent-to-join | ≥ 1-2 | **1 soft-commit** (Carlos · 14-jul) — frío desde agosto, 3 fechas pasadas · *¿cuenta?* → decisión abierta §4 | ✗ / ? |
| **(a)** H6 no en 🔴 | — | 🟡 | ✓ |
| **(b)** App V1 demostrable | — | ✅ **desde el 30-ago** (desktop + móvil · Task 28 verificada en producción) | ✓ |
| **(b)** Legal listo (entidad · abogado · contratos en borrador) | — | ⬜ sin registro en el workspace · cf. `05-capital-y-finanzas/01-operational-readiness` (Tier 2.0 con gate de intent confirmation) | ⬜ |

**Lectura:** la condición **(b)** dejó de ser el bloqueo — por primera vez desde que arrancó la Fase A no queda nada del lado del producto entre Zenet y una conversación. La condición **(a)** está donde estaba el 19 de julio.

### 1.2 Hipótesis H1-H6 — estado acumulado

| H | Qué valida | Evidencia revelada (con quién · cuándo) | Kill signals | Read | N |
|---|---|---|---|---|---|
| **H1** | Los pains que priorizamos son **sus** principales | **Miguel (12-ago):** *la carga* —tiempo, energía, incendios— como dolor #1, en sus palabras · **Carlos (14-jul):** pains reales (protocolos · mantenimiento · gente) pero **no los hipotetizados** (inventario/estandarización) · JP (7-ago · control): resuenan, pero invertidos — construcción, no extensión | ninguno | 🟡→🟢 | 2 op. |
| **H2** | Nuestro valor **conecta** con lo que más valoran | **Carlos:** prendió AI/chat + automatizar sus procesos; el core del demo (estandarización) no · Miguel: pitch verbal, "sí" post-pitch (cortesía posible) | **Arballo (28-jul):** *"¿otro software más?"* — declarado, social, pero bandera fuerte · **Alfonso (27-ago) T1 contaminado:** eco, no comprensión espontánea | 🟡 | 1 |
| **H3** | Ven a Zenet **distinto** de su alternativa actual | **Alfonso (27-ago):** articuló **solo** el moat *hardware-agnostic* vs SoftRestaurant — la mejor señal de la Fase A, de quien conoce a los vendors · **Carlos:** Zenet ≠ POS, la coexistencia aterrizó | Arballo | 🟢 direccional | 1 insider + 1 op. |
| **H4** | Está dispuesto a **dar** | **Carlos 🟢:** abrió todos sus docs · ofreció intro a Alma + departamentos · **Miguel 🟡:** relación revelada fuerte (platillo · tiempo · apertura) pero el ask de docs no se hizo como se diseñó | **JP:** puerta declarada, cero revelado · **Arballo:** ningún ask aterrizó · **Carlos frío desde agosto** | 🟡 | 1 de 3-4 |
| **H5** | Qué **mensaje + canal** convierte | **Victor → Miguel:** ciclo completo referido→sesión presencial 🟢 · **red del programa de emprendimiento → JP:** 1ª warm real 🟢 · **Pedro → CANIRAC:** la puerta funcionó (canal post-PMF) | **Frío / LinkedIn: 5 canales tocados → 0 respuestas** (24-30 ago) · **31 ago–6 sep: 2 → 0, ninguno visto** — Juanjo y Algira Garzón por LinkedIn, mensajes sin abrir y links Dub sin clic → dato del canal, no del mensaje · 10 prospectos "por enviar" desde julio | 🟡 partido: **tibio funciona · frío no** | — |
| **H6** | Existe un **pozo de valor** (painkiller, no vitamina) | *(ninguna cuantificación revelada todavía)* · **Miguel:** *"realmente pagaría"* — declarado, post-pitch, en calidez · **Alfonso:** *"un chef pagaría $2-4K"* — declarado, en **tercera persona** | **Carlos:** costos abiertos, sin cuantificar · HV-03 (el punto) corrió 1 vez, en versión aproximada | 🟡 riesgo | 0 revelados · 2 declarados sobre el ancla |

**Lo que el tablero dice de un vistazo:** la VP (H1-H3) tiene señal pero no N · el compromiso revelado sigue en uno · el canal tibio produce y el frío no · y **nadie ha cuantificado todavía lo que le cuesta hoy** — que es exactamente el riesgo *"yo SOY el sistema"* que el plan pidió vigilar.

### 1.3 Cobertura del framework de 3 perfiles

| Perfil | Definición (eje: estandarización previa) | Sesión | Estado |
|---|---|---|---|
| ① Estandarizado / gran producción | ya documentado · Zenet extiende y mantiene | Carlos · Alma Verde (14-jul) | ✓ · acota el beachhead **por arriba** |
| ② Alta cocina / gourmet | preserva calidad y consistencia · *fine dining ≠ documentado* | Miguel Bahena (12-ago) | ✓ · **adyacente** |
| ③ **Independiente sin estandarizar** | el centro del beachhead declarado · Zenet construye desde lo que ya tiene | — | **✗ · 9ª semana en cero** |
| *(control)* bajo el beachhead | nada que extraer — pediría construcción | Juan Pablo (7-ago) | acota **por abajo** |

---

## 2. La serie semanal

`s/r` = sin registro en la bitácora · `⚠️` = kill signal presente esa semana · `⬜` = no probado · los semáforos se **arrastran** de la última lectura conocida; la semana en que cambian va en **negrita**.

| Semana | Sesiones con operador | N beachhead / 5-8 | Perfil 3 | Msj → resp | H1 | H2 | H3 | H4 | H5 | H6 | ¿Movió? |
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

*H5 se lee 🟡 partido desde el 31 ago–6 sep para alinear la serie con §1.2 (decisión #5); las filas anteriores conservan el 🟢 del referido tibio (3-9 ago), que fue su lectura honesta en su momento.*

**Lo que la serie dice de un vistazo:** 9 semanas · 2 sesiones con operador · 1 en el bucket del beachhead · perfil 3 nunca tocado · **7 semanas sin movimiento, 4 consecutivas** · y la columna *Msj → resp* casi vacía — **la entrada no se estuvo midiendo**, que es en sí un hallazgo.

---

## 3. Qué significa cada columna

| Columna | Definición | Fuente del dato |
|---|---|---|
| **Sesiones con operador** | Conversaciones esa semana con alguien que **opera un restaurante** — cuente o no al beachhead. Conectores e insiders (Arballo · Alfonso) van en cursiva y **no suman** | `08-learnings` · bitácora |
| **N beachhead / 5-8** | Acumulado de conversaciones con el **beachhead declarado** (2-3 sucursales · sistema en la cabeza · se rompió al crecer), contra el umbral del gate. Hoy: estricto (ver §4) | gate `06-plan` §9.2 |
| **Perfil 3** | Sesiones con el **centro del beachhead** (independiente sin estandarizar). Con contador de semanas en cero, para que el cero no se vuelva invisible. Cuenta desde la semana 1 de Fase A (6-jul) | framework 3 perfiles · bitácora 20-26 jul |
| **Msj → resp** | Mensajes de outreach enviados esa semana → cuántos los **vieron** → cuántos contestaron. Un no visto es dato del canal, no del mensaje (decisión #5). La **única columna que mide entrada**, no producto | bitácora · Notion Pipeline · clics en Dub · estado "visto" en LinkedIn/WhatsApp |
| **H1–H6** | Semáforo por hipótesis según `06-plan` §2: 🟢 señal revelada fuerte · 🟡 mixto / poca data · 🔴 kill signals acumulándose · ⚠️ kill signal presente · ⬜ no probado | `08-learnings` §3 de cada sesión |
| **¿Movió?** | Sí / Parcial / No + una línea. El resumen honesto de la semana | retro |

---

## 4. Decisiones de conteo *(abiertas · las cierra Alan)*

| # | Decisión | Estado |
|---|---|---|
| 1 | **¿Miguel suma al N del gate?** La bitácora dice que no (perfil 2, adyacente); el conteo luego se escribió como *"1-2 de 5-8"*. Por eso hay **dos columnas** (sesiones con operador · N beachhead). Falta decidir si el gate se cuenta **estricto** (solo beachhead → N=1) o **amplio** (cualquier operador → N=2) | ⬜ **en curso** · se cierra con `11-icp-hipotesis-fase-a` (la apuesta: Miguel entra al N, Alma Verde sale) · mientras, la tabla sigue **estricta** |
| 2 | **¿El soft-commit de Carlos cuenta como intent-to-join?** Fue explícito el 14-jul; lleva 3 fechas pasadas y un mes frío | ⬜ · hoy marcado `?` |
| 3 | **Volver al canon H1-H6 en los run-sheets.** Las sesiones #4 (V1-V8) y #5 (T1-T5) usaron mapas propios; aquí se tradujeron (el mapa T lo dice explícito: T1·H2 · T4·H3 · T5·H1 · precio·H6; el V es directo: V1·H1 · V3·H2 · V4·H4 · V5·H6 · V8·H5). Para que la tabla se llene sola, el score de cada sesión debe salir ya en H | ⬜ · aplica desde la próxima sesión |
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
