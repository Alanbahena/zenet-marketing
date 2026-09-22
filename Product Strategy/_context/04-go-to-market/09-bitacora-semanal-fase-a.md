---
name: Bitácora semanal — Fase A
description: Log corrido de las retros semanales de la Fase A (reclutamiento/validación de design partners). Una entrada por semana, la más reciente arriba, con formato fijo (foco previo · logros · qué funcionó · learnings · decisiones · scorecard H1-H6 · foco próxima semana). Carril: Notion ejecuta (Pipeline/tareas/Scorecard vivos) · esta bitácora recuerda (registro histórico agent-readable). Los learnings grandes gradúan a los docs canónicos (ICP/segmentación · learnings de validación `08` · decisions log de CLAUDE.md §4).
type: product-strategy
last_updated: 2026-09-20
status: active
version: 0.9
owner: Alan Bahena
---

# Bitácora semanal — Fase A

> **Qué es:** el registro de las retros semanales de la Fase A. Una entrada por semana, **la más reciente arriba**.
>
> **Carril (por qué vive en el repo y no en Notion):** Notion **ejecuta** — Pipeline, tareas y Scorecard, vivos, cambian a diario. Esta bitácora **recuerda** — registro histórico, versionado en git, agent-readable (cualquier sesión nueva hereda el contexto de un solo archivo). El *foco de la próxima semana* se vuelve tareas en Notion; el *Scorecard* vive en el cockpit. Aquí queda la narrativa.
>
> **Graduación:** cuando un learning es grande y canónico, gradúa a su hogar durable — docs de ICP/segmentación, `08-learnings-de-validacion.md`, o el decisions log de CLAUDE.md §4. La bitácora lo captura la semana que pasa; el doc canónico lo conserva para siempre.
>
> **Los números viven en `10-scorecard-fase-a.md` (desde 2026-09-05).** Ahí están el tablero del gate (estado acumulado H1-H6 + condiciones A→B + cobertura por perfil) y la serie semanal (una fila por semana). Esta bitácora **narra**; la sección `📊` de cada retro se reduce a **el delta de la semana + pointer**. Los números se teclean solo allá — así la tendencia se ve en una tabla y no en siete párrafos.
>
> **Un solo archivo, log corrido.** Válvula de escape si algún día se alarga (cierre de fase): mover entradas viejas a `_archive/` con prefijo de fecha (convención del workspace). No antes de tiempo.

> **Plantilla de entrada** (copia y pega arriba de la más reciente):
> ```
> ## Semana DD–DD mmm — "tema de la semana"
> ▸ Foco que traíamos: ✅/🟡/❌ por punto (dicho vs hecho)
> ▸ 🏆 Logros
> ▸ ✅ Qué funcionó
> ▸ 💡 Learnings
> ▸ 🔀 Decisiones
> ▸ 📊 Scorecard H1–H6 → delta de la semana + pointer a `10-scorecard-fase-a.md`
> ▸ 🎯 Foco próxima semana
> ```

---

## Semana 14–20 sep — "el kit entero, cero mensajes: la semana se atoró en un PDF"

**▸ Foco que traíamos** (plan por día de la retro 13-sep): **Lun 14** contador → ✅ mensaje enviado (respuesta y propuesta de trabajo: lun-mar 21-22 · el cambio de régimen ya está en curso) · doc de ventas v0.1 → ✅ (mar 15) · mensaje #9 → ✅ (v0.3 · 16-sep) · flyer v0.1 → ✅ (16-sep) · **Mar 15** flyer → PDF ✅ · tarjeta → ✅ (diseñada 16 · **impresa 17**) · **primera tanda 8-10 contactos → ❌ 0 envíos** · **Mié 16** diagnóstico de ejemplo → ❌ (se convirtió en el rediseño v2: crítica + mock, pág. 1 cerrada) · hoja de acuerdo → ✅ como **kit de bienvenida** de 2 págs · landing `/demo → /diagnostico` → ❌ · segunda tanda → ❌ · **Jue 17** seguimiento + sesiones → ❌ · docs (canon · CLAUDE.md · runsheet · criterios) → ✅ un día antes (16) · **Vie 18** deploy v4.1 → ❌ · tarjetas → ✅. **Mínimo de la semana:** contador arrancado ✅ · ventas v0.1 ✅ · kit completo 🟡 (flyer ✅ · kit ✅ · tarjeta ✅ · **diagnóstico de ejemplo ❌**) · **≥ 10 mensajes → 0** · **≥ 1 sesión → 0**.

**▸ 🏆 Logros**
- **★★ El tríptico cerrado y el kit de venta entero, salvo una pieza.** `12-proceso-de-ventas-fase-a` **v0.1** (mar 15 · 7 secciones sobre la estructura del fundador: Discovery · Pitch · Cierre · Navegar el final · Objeciones + pipeline de 9 etapas y 9 conteos) → **script de sesión** en PDF (5 págs · beats + cheat-sheet) → **flyer Socio Fundador** (media carta · $2,500 / $1,500 + IVA · `Zenet®`) → **kit de bienvenida** (2 págs · fechas · qué mandar · cómo se paga · *Lo que acordamos* con las reglas de tiempo y cobro) → **tarjeta del fundador** (diseñada mié 16 · **impresa jue 17** · QR a Dub) → `mensajes-outreach` **v0.3** (#9 con el ejemplo ADJUNTO + café de 20 min) → `10-scorecard` **v0.5** (§2.2 el embudo) → canon `01-modelo` y `02-programa` **v0.1.1** con las **cinco desviaciones** → CLAUDE.md al 16-sep. Todo pusheado (`a885f0a` · `7e9692a`). Logo vectorizado del EPS del brandbook; Dub físicos `go.zenetapp.com/tarjeta` y `/flyer-sf` verificados.
- **★ Marca: el IMPI otorgó el registro de Zenet (14-sep)** → `Zenet®` en flyer y kit.
- **Flyer de primer toque decidido** (16-sep · el #9 en papel, sin precio) y la regla **enseñar ≠ recorrer** registrada en doc 12 v0.1.1, script y mensajes.
- **El diagnóstico se rediseña.** Crítica del reporte actual en 8 puntos (tres *"fuera de rango"* que son buenas noticias con la misma píldora · *"brecha $0.00"* como único renglón en pesos · gramática de déficit y *"huecos"* · nombres viejos de la app · **y adentro los datos de Alma Verde** — no podía ser el ejemplo) → **mock v2 "Marea Baja"** de 4 págs · **pág. 1 cerrada el 18-sep** (dos índices lado a lado · banda del dinero con tres cifras · *"declarado por ti"* · regla de píldoras · lista fija de 8 procesos clave).
- Contador contactado el lunes; cambio de régimen en curso.
- Producto: **sin avance esta semana** (Task 43 · Compras 40.7+ · WhatsApp) — la semana se fue al kit y al diagnóstico v2.

**▸ ✅ Qué funcionó**
- **El doc de ventas sobre la estructura del fundador, sección por sección:** 7 secciones en 3 días, cada una con OK antes de la siguiente. Los artefactos salieron *del* doc (§7 los especificó; flyer y kit se construyeron después), no antes.
- **Una sola base de diseño para todo el papel:** HTML con tokens de marca → Chrome headless. Script, flyer, kit y tarjeta salieron en dos días sin abrir una herramienta de diseño.
- **Auditar el reporte antes de mandarlo.** El PDF que se iba a adjuntar decía "Alma Morada" y traía el recetario real de Alma Verde. Se detectó antes del primer envío.
- Cerrar la deuda de doc 12 §7.1 en bloque (seis puntos en un día, 16-sep), como con las deudas del 5-sep.

**▸ 💡 Learnings**
1. **★★ Toda la entrada de la semana quedó colgada de una sola pieza.** El #9 lleva el PDF de ejemplo adjunto; el PDF no existió; **no salió ni un mensaje** — 6ª semana consecutiva sin operador, perfil ③ en cero por 11ª. El kit se terminó entero y a mitad de semana la pieza que faltaba **creció** (de *corpus ficticio → onboarding → PDF* a *rediseñar el reporte*), sin timebox. Es el patrón de las dos retros anteriores por tercera vez, ahora con nombre exacto: **una dependencia sin fecha se come la semana.**
2. **★ La dependencia era más chica de lo declarado.** El flyer de primer toque no necesita el PDF completo: necesita **un fragmento de la pág. 1**, que ya está cerrada. Y el PDF de ejemplo no necesita la Task 43 ni el repo de producción: **el mock v2 terminado ES el ejemplo** (restaurante ficticio, declarado). Dos piezas que parecían bloqueadas no lo estaban.
3. **★ El rediseño fue necesario, no evasión** — el reporte actual no se podía mostrar a un tercero. Lo que faltó fue acotarlo: la pág. 1 tomó dos sesiones; las págs. 2-4 tienen que tomar una.
4. La regla escrita el 13-sep — *el kit existe antes de la primera sesión, no antes del primer mensaje* — se escribió y no se aplicó: el kit se construyó antes del primer mensaje de todos modos. Escribir la regla no la ejecuta; la fecha sí.
5. **El ejemplo es un mock de un reporte que el producto todavía genera en la forma vieja.** No bloquea el envío, pero **el reporte real tiene que alcanzar al ejemplo antes de la primera entrega** (2-3 semanas después del primer sí). Eso pone la Task 43 v2 como lo primero del carril de producto.
6. Técnicos, ya en memoria: `$2,500` dentro de un heredoc sin comillas expande `$2` · el `viewBox` del QR debe ser el que escribe segno (el viejo de 35 para un código de 27 lo encogía a la esquina).

**▸ 🔀 Decisiones**
- **★ La oferta Socio Fundador con cinco desviaciones al canon, registradas** (`01-modelo` · `02-programa` v0.1.1 · CLAUDE.md §4): precio de lista congelado · mes 1 $2,500 por adelantado · sin compromiso · devolución anclada a la entrega, sin plazo · el kit + *"va"* como acuerdo. Gradúan a v0.2 con el primer SF pagado.
- **★ El diagnóstico se paga → el primer toque no pide facturas ni promete un número gratis:** manda el ejemplo adjunto y pide el café (`mensajes` #9 · supersede el ask del 10-sep).
- **Enseñar ≠ recorrer:** el ejemplo se *enseña* en el primer toque (una página, un minuto) y se *recorre* en el Pitch; nunca de pie en servicio. Flyer de primer toque sin precio; nunca junto al flyer de la oferta.
- **Validación y venta en el mismo scorecard, en tablas distintas** (§2.1 hipótesis · §2.2 embudo); conteos, no porcentajes.
- **Reglas de tiempo y cobro del SF** (kit p. 2 · doc 12 §4): el mes 1 corre desde la entrega · corte mensual · pago por adelantado con 5 días · pausa sin recargos · 30 días → lugar liberado.
- **Diagnóstico v2 (18-sep):** dos índices — estandarización (Recetas + Inventario; Normalización *informa, no califica*) y **"qué tanto se puede enseñar sin una persona clave"** (8 procesos fijos + recetas ejecutables) · onboarding pide 2 preguntas nuevas (personas por área · altas/bajas 6 meses) → tercer origen *"declarado por ti"* · costo de rotación en pesos hasta tener su dato · **fuera** "capacidad de crecimiento" y teórico vs real · nunca *"huecos"*.
- **Tarjeta:** "Ing." sí · LinkedIn sí · Tijuana fuera · "software" no · el teal nunca en "caos".
- **★ Retro 20-sep — el ejemplo sale del mock v2** (págs. 2-4), **acotado al lunes 21**; no se espera a la Task 43. El flyer de primer toque se construye el mismo lunes con el fragmento de la pág. 1.
- **★ CANACO Jóvenes (mar 22) es entrada, no cierre.** *Cámaras como puente* (doc 12 §0) + targeting del ICP de Fase A (joven · abierto). El ask es el café de 20 min; **un contacto cuenta en ① cuando sale su WhatsApp con Dub al día siguiente**, no cuando se entrega la tarjeta.
- **Landing v4.1 condicionada:** solo si ya salieron ≥ 10 mensajes. No bloquea nada (`/demo` funciona; el Dub y el #9 apuntan a `zenetapp.com`).
- **Abiertas:** dónde vive el ICP canónico al graduar el experimento · `"tus operaciones"` en el strip anti-POS · la nota de research con los datos de mercado · **lista de los 8 procesos clave contra el Manual Operativo del repo** (Alan) · `[CLABE]` y facturación `[Provisional]` (se cierran con BBVA y el contador esta semana).

**▸ 📊 Scorecard H1–H6** — sin movimiento · **6ª semana consecutiva sin conversaciones con operadores** · N **1** (Miguel) · perfil ③ en cero (**11ª**) · entrada **0 → 0 → 0** (nada enviado: el #9 dependía del PDF de ejemplo · Juanjo y Algira sin ver el de LinkedIn, 3ª semana) · semáforos sin cambio · **embudo §2.2, primera fila real: 0 en los nueve** · gate (a) sin cambio · (b) V1 ✅ · legal: **IMPI ® otorgado 14-sep** + régimen fiscal en curso · scorecard → `10-scorecard-fase-a.md`

**▸ 🎯 Foco semana 21–27 sep — la fecha primero; los builds al servicio de la fecha** *(el ancla es CANACO Jóvenes el martes · producto en su carril aparte)*

| Día | Ventas · kit · entrada | Admin (según caiga) |
|---|---|---|
| **Lun 21** | ★ **PDF de ejemplo:** cerrar págs. 2-4 del mock v2 "Marea Baja" → PDF final (**acotado al día**) · **flyer de primer toque** (fragmento de la pág. 1 · sin precio · QR con Dub propio) → PDF → imprimir · **lista de la primera tanda** (8-10 nombres: Miguel · Juanjo · Algira · Ana · Alan Jiménez · los "por enviar") + un Dub por persona | Contador si llama (propuesta de trabajo · régimen listo) |
| **Mar 22** | **Mañana: sale la primera tanda** — #9 con el PDF adjunto · cada envío al scorecard §2.2 · **Tarde: CANACO Jóvenes** con tarjeta + flyer de primer toque + la pág. 1 en el teléfono · el ask es el café de 20 min, nunca el pitch de pie | Contador si llama |
| **Mié 23** | Seguimiento a los de CANACO por WhatsApp (#9 con primera línea *"nos conocimos ayer en CANACO"* — agregarla a la tabla del mensaje) · **segunda tanda** | **BBVA** → cuenta → CLABE → cierra `[CLABE]` en el kit |
| **Jue 24** | Seguimiento + **agendar sesiones** · si cae una: script + flyer SF + kit · kit p. 2 y doc 12 §4 con lo que dijo el contador (cierra facturación `[Provisional]`) | |
| **Vie 25** | **Landing v4.1** (`/demo → /diagnostico` + redirect + copy que dice *demo*) + deploy — **solo si ya salieron ≥ 10 mensajes**; si no, más mensajes | |
| **Dom 27** | Retro + scorecard (dos filas: hipótesis + embudo) | |

**Producto (carril aparte):** **Task 43 v2** — el reporte real hacia la estructura del mock (la entrega tiene que parecerse al ejemplo) → Compras 40.7–40.13 → Task 41 WhatsApp.

**Mínimo de la semana** (lo que la retro del 27 lee): PDF de ejemplo cerrado **el lunes** · **≥ 10 contactados** (tanda + CANACO con WhatsApp de seguimiento) · **≥ 1 sesión agendada** · CLABE y facturación cerradas. Fuera a propósito: pasarela de pago · abogado · precio en la landing · más rediseño del diagnóstico después del lunes.

*▸ Pipeline: 1 soft-commit frío (Carlos · fuera del N · 3 fechas pasadas) · Miguel en pausa consciente (único en el N · reentra con la oferta en la primera tanda) · JP sin retomar · JC Gallina y Alan Jiménez sin respuesta · Juanjo y Algira por LinkedIn, sin ver (3ª semana) → van por WhatsApp en la tanda · conocido del brunch pospuesto · Ana pospuesta (11ª semana) · 10 prospectos en "Por enviar" desde julio · **entrada nueva: CANACO Jóvenes mar 22**.*

---

## Semana 7–13 sep — "el tríptico casi cerrado, la landing en dos días — y la quinta semana sin operador"

**▸ Foco que traíamos** (retro 31 ago–6 sep, el tríptico para salir a vender): ① cerrar el doc 11 → ✅ (mar 8 · v0.1 + edición de campo en PDF + scorecard v0.3) · ② copy y landing alineados al ICP → ✅ **y más: la v4 salió EN VIVO** (jue 10 · tag `v4.0`) · ③ proceso de ventas v0.1 → 🟡 **en curso, todavía sin archivo en el repo** (sigue el lun 14). En paralelo: Task 29 / V1 completa → ✅ (mergeada a `main` dom 6, 21:33 — siete minutos después de la retro) · registrar enviados → respondidos → ✅ se registra: **0 → 0** · Juanjo y Algira por WhatsApp → ❌ no se hizo; siguen sin ver el mensaje de LinkedIn (2ª semana).

**▸ 🏆 Logros**
- **★★ Landing v4 + `/demo` v0.2 EN VIVO** (jue 10 · tag `v4.0` · verificado en producción `/` · `/demo` · `/privacidad` · `/hablemos` · OG). Todo entre el miércoles 14:08 y el jueves 12:50: **papel** (`00-estrategia` v0.4 → `01-copy` v0.5 10/10 → spec v4.0-draft) → **`lab/`** (§2 siete iteraciones · §6 · §3 · §4 variante C sin capturas · Etapa 1 · Etapa 2 de 7 beats · Etapa 3 + la consulta) → **integración** en `index.html` → limpieza, meta, `/demo`, privacidad → deploy. 10 secciones · 284 KB · cero capturas (todo SVG + CSS) · móvil verificado en el teléfono del fundador. Cuatro docs sincronizados con el deploy (estrategia v0.4 · copy v0.5 · spec v4.0 · demo v0.2).
- **★ El ICP de la Fase A, cerrado y en la mesa** (mar 8): `11-icp-hipotesis-fase-a` v0.1 (§0–§11 · statement · 3 perfiles por estandarización · dónde buscar vs quién califica · regla de conteo §2.3 · §7 cómo se valida) + **edición de campo de 12 páginas en PDF** (pipeline nuevo: pandoc → HTML con CSS de marca → Chrome headless) + `10-scorecard` v0.3 recontado contra el ICP nuevo (**1 · 0 · 0** · H6 en dos partes · #1 y #2 cerradas) + skill sincronizada.
- **Los assets de campo realineados al ICP:** guión v0.5 → **v0.6** (vocabulario del producto verificado — *Alineamiento* ya no existe · ask #1 = las facturas) · `mensajes-outreach` **v0.2** (#7 nuevo: *"mándame fotos de tus últimas 5 facturas"* con la regla de 48 h · #8 conocido de conocido · #4 LinkedIn nunca primer toque · #5 seguimiento de hilo frío).
- **La fuente del 40% verificada — y corregida.** Es CANIRAC **nacional** (El Imparcial · 12-ago-2026 · Ignacio Alarcón), no Tijuana: nuestra atribución era falsa. El *6-20% de costos operativos* **se retiró** por no tener publicación. Aviso de privacidad endurecido (responsable con domicilio · encargados sin nombrar proveedores · ARCO 20/15 días).
- **Producto:** Task 29 en `main` (V1 completa: Recetas · Inventario · Equivalencias · `audit_claims.sh`) · **Task 40 Compras: 40.1–40.6 cerradas en dos días** (mié-jue: cimiento de datos · parser CFDI · revisión · confirmación · lecturas · shell frontend 16/16) · 40.7 en curso · PDF de diagnóstico (Task 43) en worktree, sin commitear. Vie–dom sin avance.
- CLAUDE.md al día dos veces (§2 bloque del 10-sep · §4 dos decisiones nuevas).

**▸ ✅ Qué funcionó**
- **Papel antes que pantalla, 3ª vez** (v2 · v3 · v4): el copy v0.5 se aprobó sección por sección **antes** de abrir `lab/`; el diseño nunca tuvo que decidir texto. Es lo que permitió una landing entera en dos días.
- **Decidir con toggles en pantalla, no con descripciones:** §6 con 5 / 4 / fusionadas · §4 con variantes A / B / C · §2 en siete iteraciones de media hora. Alan eligió viendo; ninguna vuelta.
- **El gate como pregunta concreta** — *¿qué corre hoy?* — y no como *¿está listo?*. De ahí salió la regla del deploy.
- **Verificar la fuente antes de publicar la cifra:** la cifra sobrevivió; la atribución, no.
- **Cerrar el ICP primero pagó:** guión, mensajes, landing y demo salieron alineados a **un solo doc** en vez de a la memoria de cinco sesiones.
- El método de producto se sostiene: seis subtareas de Compras en dos días con subtasks + PR, mientras la landing se armaba.

**▸ 💡 Learnings**
1. **★★ El patrón se repitió con otro nombre.** La retro pasada lo escribió por adelantado: *"el riesgo a vigilar es que el doc 11, la landing nueva y el proceso de ventas sean tres piezas más construidas antes de la primera conversación nueva"*. Pasó: dos de tres piezas + la landing entera, **cero mensajes enviados**, 5ª semana consecutiva sin operador, perfil ③ en cero por 10ª. Lo que sí cambia respecto a las semanas anteriores: **ya no queda ningún asset que preceda al mensaje.** ICP, guión, mensajes, landing, demo, producto — todo existe. La secuencia declarada el 5-sep (ICP → landing → ventas → salir) tiene una sola pieza pendiente y se termina mañana. Después de eso no hay "antes de".
2. **★ Describir ≠ pedir.** La regla que levantó el gate —*la narrativa puede describir el camino; las instrucciones solo pueden pedir lo que ya funciona*— resuelve la tensión que cargó cada deploy desde agosto (la landing prometiendo en presente). Se aplicó a dos superficies con dos respuestas: §5 salió sin tocar; el paso 04 de `/demo` lleva la píldora. Y deja una línea para la mesa: *"eso entra esta semana"*.
3. **★ D1 funcionó como filtro, no como permiso.** De las cifras candidatas sobrevivieron dos. El 40% conservó el número y perdió la atribución; el 6-20% se cayó aunque la nota que lo respaldaría existe (Uniradio · 18-ago) — confirma lo cualitativo, no publica el porcentaje. **Una cifra sin publicación no es una cifra.**
4. **★ Cuando una tarjeta se ve "grotesca" o "muy junta", el problema es el texto, no la caja.** Cinco cuerpos de §3, dos pasos de §4, dos tarjetas de §6: todos se arreglaron recortando. Regla para las secciones de tarjetas: cuerpo corto, remate en negritas.
5. **★ Producto y landing fueron en paralelo por primera vez:** la Etapa 1 del camino se dibujó en SVG el mismo día que su backend se commiteaba (Compras 40.3–40.6). La landing describe lo que está a días, no a meses — por eso la regla del deploy alcanzó.
6. Técnicas, ya en el spec §G-bis y §H: el CSS entre `lab/` e index se copia **por bloque**, nunca filtrando por selector (un `@media (prefers-reduced-motion)` desenvuelto mató la animación del chat sin dar error) · los nombres genéricos de clase colisionan al integrar · headless con `--force-prefers-reduced-motion` para estados finales; el movimiento se juzga solo en navegador real.
7. **LinkedIn tibio, 2ª semana sin ver** (Juanjo · Algira). La decisión #5 ya dijo que van por WhatsApp o en persona; no se hizo. Es dato de ejecución, no de canal — y cuesta dos minutos.

**▸ 🔀 Decisiones**
- **★ La regla del deploy** (canon en CLAUDE.md §2 + spec §G-bis): la narrativa describe el camino; las instrucciones piden solo lo que funciona. Gate levantado con el PDF corriendo, **sin Compras ni WhatsApp**. `/demo` paso 04 con la píldora *En construcción* hasta que corran.
- **★ El ask #1 de campo son cinco facturas por WhatsApp, no la reunión** — se paga en 48 h o no se manda (`mensajes` #7 · `11` §7.8 · CLAUDE.md §4).
- **`/demo` no se nombra como etapa del camino** — es la antesala del análisis; Compras es lo primero que se toca ya dentro (paso 04), no la puerta.
- **Landing v4:** la consulta **se queda** como cierre de §5 (rescate de Alan: es lo único que prueba que Zenet se usa hablando; tres preguntas de *por qué*) · §2 **no nombra a Zenet** · §4 **sin capturas** (variante C: §4 promete, §5 prueba) · puntos de progreso en las tres escenas · fuente en una línea *"CANIRAC · 2024–2026"* · *Recuperas tu cabeza* entra a §7, *Creces sin multiplicar el caos* sale.
- **Scorecard:** #1 cerrada (Miguel entra, 5 de 6 · Alma Verde al carril ①) · #2 por consecuencia (el soft-commit de Carlos es señal de H4, no intent del ICP de Fase A).
- **Alan (13-sep):** esta semana se terminan **Compras + WhatsApp**; el doc de ventas sigue el lunes.
- **Abiertas:** *"tus operaciones"* en el strip anti-POS (canon: *"tu operación"*) · `criterios-icp-y-design-partner` superseded + `plantilla-runsheet` con los 9 checks (`11` §8.3 · 2ª retro que lo carga) · la nota de research con los datos de mercado (`05-market-insights/02-…`) · dónde vive el ICP canónico cuando el experimento gradúe.
- **★★ Decidido en la retro (13-sep, noche): la Fase A sale a VENDER.** Cinco sesiones sin precio dicho no produjeron un dato de H6; un *no* con precio enfrente es dato, un *sí* sin precio es cortesía. No es otra fase — es la Fase A con el instrumento correcto (*intent-to-join = conociendo el precio*, `10` §1.1). **La oferta Socio Fundador, en la mesa:** mes 1 = **diagnóstico con sus documentos + Compras corriendo con sus facturas + Alan directo cada semana → $2,500 + IVA** · desde el mes 2 **$1,500 + IVA, fijo para siempre** (*"preferencial" = lock-in permanente; los que entren después pagan más*) · **5 lugares** (la cohorte del canon; si llegan más, segunda cohorte a precio más alto) · **sin compromiso mínimo** — *te vas cuando quieras*; los 90 días y el GO/NO-GO Mes 3 quedan como checkpoint interno · **el precio no se negocia**: una sola concesión decidida de antemano (*"te cobro el mes 1 al entregar el diagnóstico; si en 7 días no te sirve, te lo regreso"* = la ventana del canon usada como cierre). **Dos excepciones al canon que se registran** en `01-modelo-comercial` (el mes 1 a $2,500 vs *NO setup fee* · sin compromiso vs 90 días mínimos): si funcionan, gradúan; si no, mueren ahí. **Vocabulario:** nunca *"encontrar sus huecos"* (veto *falta de X*) → *"los números reales de tu operación — y qué te está costando no verlos"*; nunca *"te construyo features"* → *"tu operación moldea lo que se construye"*. **En la sesión se promete lo que corre** (la regla del deploy aplica al pitch). **Prerrequisito no-marketing:** el ICP es formal → **cobrar sin CFDI no es opción** (el gasto no le deduce, el contador lo marca) → contador el lunes: RESICO vs actividad empresarial · CSD · IVA frontera; RFC y e.firma ya vigentes → días, no semanas · cobro por SPEI + factura, cargo del mes 1 al entregar el diagnóstico · cuenta bancaria dedicada (no "empresarial" hasta la SAPI) · domicilio fiscal = casa · **abogado detrás del primer sí** (el primer sí es el LOI); mientras, **una hoja de acuerdo** de una página. **Secuencia:** los mensajes salen esta semana; **el kit existe antes de la primera sesión, no antes del primer mensaje** · red primero (1:1 · WhatsApp · doble ask *¿tú operas? / ¿a quién conoces?*) · si la red no produce sesiones, **frío presencial en Tijuana** con flyer + el ask de las 5 facturas. Gradúa a CLAUDE.md §4 y a `02-programa` el jueves.

**▸ 📊 Scorecard H1–H6** — sin movimiento · **5ª semana consecutiva sin conversaciones con operadores** · N **1** (Miguel · desde esta fila contra el ICP de Fase A) · perfil ③ en cero (**10ª**) · entrada **0 → 0** (nada enviado; Juanjo y Algira siguen sin ver el de LinkedIn) · semáforos sin cambio · gate (b) V1 ✅ · legal sin cambio · scorecard → `10-scorecard-fase-a.md`

**▸ 🎯 Foco semana 14–20 sep — salir a vender, con el kit listo antes de la primera sesión** *(plan fijado en la retro · los dos verificamos cada pieza · producto en su carril aparte)*

| Día | Ventas · kit · entrada |
|---|---|
| **Lun 14** | Contador (RESICO vs actividad empresarial · CSD · IVA frontera · banco) · **doc de ventas v0.1 con el cierre** (precio con el punto · el ask · confirmación por WhatsApp · cargo al entregar el diagnóstico) · **mensaje #9** (invitación al programa · doble ask · sin precio) · **flyer v0.1** (3 beneficios · $2,500 / $1,500 + IVA · fijo para siempre · 5 lugares · te vas cuando quieras) |
| **Mar 15** | Flyer cerrado → PDF · **tarjeta** (QR → Dub → zenetapp.com) → imprenta · **primera tanda: 8-10 contactos**, 1:1, un link Dub por persona |
| **Mié 16** | **Diagnóstico de ejemplo** (corpus ficticio con datos declarados → onboarding → PDF) · **hoja de acuerdo** (1 página) · landing **`/demo` → `/diagnostico`** + redirect + el copy que dice *demo* (rama `v4.1` · el CTA *Hablemos* se queda) · segunda tanda |
| **Jue 17** | Seguimiento · **agendar sesiones** · docs: `01-modelo-comercial` (las dos excepciones) · `02-programa` (3 beneficios · 5 lugares) · CLAUDE.md §4 · runsheet con los 9 checks + el cierre · criterios superseded |
| **Vie 18** | Deploy **v4.1** (`/diagnostico`; la píldora sale solo si WhatsApp corre) · recoger tarjetas · sesiones si ya cayeron |
| **Dom 20** | Retro + scorecard, con dos datos nuevos: **sesiones agendadas** · **ofertas dichas → sí** |

**Producto (carril aparte):** Task 43 PDF (lo que se muestra y se deja) → Compras 40.7–40.13 → Task 41 WhatsApp.

**Mínimo de la semana** (lo que la retro del 20 lee): contador arrancado · ventas v0.1 · kit completo (flyer + diagnóstico de ejemplo + hoja + tarjeta) · **≥ 10 mensajes enviados y registrados** · **≥ 1 sesión agendada**. Fuera a propósito: pasarela de pago · abogado · precio en la landing.

*▸ Pipeline: 1 soft-commit frío (Carlos · fuera del N · 3 fechas pasadas) · Miguel en pausa consciente (único en el N) · JP sin retomar · JC Gallina y Alan Jiménez sin respuesta · Juanjo y Algira por LinkedIn, sin ver (2ª semana) · conocido del brunch pospuesto · Ana pospuesta (10ª semana) · 10 prospectos en "Por enviar" desde julio.*

---

## Semana 31 ago–6 sep — "cuatro semanas sin hablar con un operador; la apuesta cambia de blanco"

**▸ Foco que traíamos** (retro 24-30): ① cebar el flujo — conocido del brunch de Alfonso · Juanjo · Ana/San Miguel → **1 de 3** (Juanjo ✅ mensaje enviado por LinkedIn, **ni visto** · el conocido de Alfonso ❌ pospuesto 1-2 semanas mínimo · Ana ❌ pospuesta otra vez, 9ª semana) · **fuera del foco previo: mensaje a Algira Garzón** (consultora · canal partner potencial · LinkedIn · ni visto) · ② meter los documentos de Alma Verde a Zenet → ❌ · ③ la calculadora del punto → ❌ (diferida desde julio, 4ª retro que la carga). **Los tres focos de entrada se pospusieron por decisión explícita (5-sep), no por deriva** — ver Decisiones.

**▸ 🏆 Logros**
- **★ Landing v3.3 EN VIVO** (2-sep · tag `v3.3`): la pasada de copy del fundador, sección por sección (11 cambios + 1 retiro). §3 pasa del mercado al costo humano (*"Lo más caro de tu operación no se compra. Se carga."*) · El camino baja a **3 etapas ciertas y cero tags** — la Etapa 3 deja de ser automatización y pasa a **mantenimiento ante el cambio**, con la animación del dominó (las piezas se sacuden, el núcleo no se mueve) · §7 abre con el cambio de mercado, sin una sola cifra. Docs sincronizados: `00-estrategia` v0.3 · `01-copy` v0.4 · `02-prototipo` v3.3. Cuatro reglas de contenido quedan canónicas: cero cifras · cero colores de alerta · nunca "falta de X" · los agentes no se nombran.
- **CLAUDE.md al día** (2-sep): cuatro semanas de trabajo que no estaban registradas (v3.1 /demo · v3.2 Hablemos · v3.3 · la demo terminada · sesiones #4 y #5 · las dos bitácoras).
- **Las deudas de doc, cerradas en un día** (5-sep): `06-argumentacion-de-valor-y-precio` v0.2 (§6.1 con la raíz corregida — *copiar el criterio sí se puede: cuesta años y el mantenimiento no termina* · §6.6 Alma Verde como prueba de la ruta alterna · §6.7 la evidencia de las 5 sesiones) · `03-hablemos-estrategia-y-copy` v0.1 nuevo (el copy de /hablemos ya no vive solo en el HTML).
- **`10-scorecard-fase-a` v0.1 + skill `/scorecard-fase-a-semanal`** (5-sep): los números salen de la narrativa y viven en un solo lugar — tablero del gate + serie semanal con las 9 semanas reconstruidas · 4 decisiones de conteo abiertas por escrito · esta bitácora deja de teclear números (v0.6).
- **Producto: la V1 completa, a punto.** Task 33 cerrada y mergeada a `main` (4-sep · el caché leyendo en producción, medido) · Task 29 con sus 9 subtareas en cierre (6-sep · Alineamiento se reparte en **Recetas · Inventario · Equivalencias** · Ajustes gana la pestaña Restaurante · 12 columnas menos · `audit_claims.sh` para que los docs no vuelvan a mentir · el cierre documental explícitamente *"sin afirmar producción todavía"*).
- **El ICP de Fase A empezó a redefinirse** desde el borrador que Alan escribió con los aprendizajes de campo — doc `11-icp-hipotesis-fase-a` en curso, puliéndose bloque por bloque. Ver Decisiones.

**▸ ✅ Qué funcionó**
- **Cerrar deudas en bloque.** Un mes abiertas, una sesión para cerrarlas (5-sep). Lo mismo con CLAUDE.md: cuatro semanas en una pasada.
- **Sacar los números de la prosa.** La serie semanal mostró de golpe lo que siete retros diluían: 7 semanas sin movimiento, 4 consecutivas, y la entrada nunca medida. Una tabla dijo más que siete párrafos.
- **Auditar antes de escribir.** El desfase del ICP se verificó en el filesystem (4-sep) antes de tocar una línea: tres docs pre-campo, cero graduación. Se escribe sobre lo que hay, no sobre lo que se recuerda.
- **El método de la landing aplicado al ICP:** partir del borrador real del fundador y pulirlo bloque por bloque contra el canon, en lugar de redactar desde cero.

**▸ 💡 Learnings**
1. **★★ Cuatro semanas sin hablar con un operador, y la respuesta que emergió no fue "insistir más" sino "el blanco puede estar mal".** El beachhead declarado (2-3 sucursales · dueño con gerente · se rompió al crecer) lleva 9 semanas con N=1 y su centro nunca se tocó. Reformular el blanco es lo que pide la disciplina del propio plan (*buscar lo que refuta*). **El riesgo a vigilar es el otro:** que el doc 11, la landing nueva y el proceso de ventas sean tres piezas más construidas antes de la primera conversación nueva. El patrón *"todo construido, nada validado"* no se rompe con un documento mejor; se rompe con un mensaje enviado. El fin declarado de esta semana —sesiones con prospectos— es la vara con la que se lee la retro que sigue.
2. **★★ El ICP vivía en tres docs pre-campo y ninguno recibió las cinco sesiones.** `04-segmentacion` v1.0 y `05-perfil-de-cliente-ideal` v1.0 (abril) + `00-customer-profile` v0.1.1 (mayo). Lo que el campo enseñó — el eje de **estandarización previa** → 3 perfiles · el beachhead acotado por tres lados con el centro sin tocar · *"el perfil 2 no compra crecimiento, compra su vida de vuelta"* · *fine dining ≠ documentado* · **"números conformes" como marcador de anti-ICP** · la carga como dolor #1 · *Zenet extrae, nunca propone* — vivía solo en `08` y aquí. La bitácora capturó; nada graduó. Es exactamente el riesgo que la regla de graduación anticipaba.
3. **★ Dónde buscar ≠ quién califica.** Joven · abierto a lo digital · canal es *targeting*: necesario para entrar, no suficiente para contar. Quién califica sigue siendo *fit*: siente el número · hay algo que extraer · formal (RFC + CFDI + 1 año) · problema estructural, no del equipo. Sin esa separación, "joven y digital" se vuelve el ICP y el gate se llena de gente que no paga.
4. **★ Momento ≠ trigger.** Miguel tiene dolor crónico sin evento disparador — tensiona el *"se rompió al crecer"* del beachhead (la 2ª sucursal como trigger). El estado pesa más que el evento. *(N=1)*
5. **El canon funcionó de guardarraíl, no de freno.** Tensiones del borrador que el canon detectó: *"falta de experiencia"* describe a JP (a quien la Fase 1 no sirve) · café estaba excluido (JC Gallina ≠ ICP) · un piso de $200K/mes de ventas sube H6 a vigilancia (Zenet ≈ 0.75% de ventas) · formalidad se había quedado solo en RFC · *"el contador puede opinar"* subestima el veto silencioso.
6. **Dos mensajes tibios por LinkedIn, ninguno visto, en la semana que no era de entrada.** Juanjo y Algira: mensajes sin abrir, links de Dub sin clic. Un "no visto" no es un no: es dato del canal, no del mensaje ni de la relación. Para contactos tibios, LinkedIn deja de ser canal de primer toque; se cambia de canal, no se espera. *(N=2 · se suma al 5 → 0 de la semana anterior · vuelve regla en la decisión #5 del scorecard)*
7. **El vocabulario de la demo se movió debajo del guión.** Task 29 retiró *"Alineamiento"* del producto (hoy son Recetas · Inventario · Equivalencias); el run-sheet de `_templates/guion-conversacion-y-demo-fase-a.md` sigue anclado en *"Alineamiento — el corazón"* (§7, dos menciones). Deuda chica, pero es la que hace que un demo diga una palabra que la pantalla ya no muestra. Se paga al estandarizar el proceso de ventas.

**▸ 🔀 Decisiones**
- **★★ El ICP de Fase A se redefine** (doc `11-icp-hipotesis-fase-a` · en curso · hoy existe en conversación, todavía no en el repo). **La apuesta:** apuntar primero a operadores **chicos (1-2 sucursales), jóvenes y abiertos a lo digital** — early adopters — para validar rápido, y subir a restaurantes tipo Alma Verde después, con disparador medible. **Encuadre:** es un *ICP de hipótesis para la Fase A*, un experimento (qué apostamos · qué lo confirma · qué lo tumba · cuándo subimos); **no** es el ICP canónico ni una reescritura del proyecto. **Cinco decisiones de diseño ya acordadas:** (1) separar *dónde buscar* de *quién califica* · (2) perfil ③ sin estandarizar = centro · ② alta cocina = adyacente, entra · ① estandarizado (Alma Verde) = fuera de la Fase A · (3) **la carga** al centro de los problemas, no los costos (Carlos no habló de food cost · Miguel: la carga #1 · Alfonso: *"números conformes"* = anti-ICP) · (4) sin *"falta de X"* ni *"descontrol"* · (5) **consecuencia en el gate: Miguel entra al N y Alma Verde sale** — cierra la decisión #1 de `10-scorecard` §4, pero **se formaliza cuando exista el doc 11; mientras, el scorecard cuenta estricto.** Estado exacto: §1 statement v1 redactado, esperando corrección de Alan (tres calls reversibles: la edad fuera del statement · *"lo que más quiere no es crecer"* viene de Miguel, N=1 · 1-2 sucursales y no 1-3).
- **Los tres focos de entrada se posponen, conscientemente** (Alan · 5-sep): Ana/San Miguel más tiempo · el conocido de Alfonso 1-2 semanas mínimo · Juanjo enviado, se espera. Razón: terminar la V1 completa y **salir a compartir Zenet con el ICP y el proceso de ventas claros**, comunicando bien la problemática y los mensajes clave. Secuencia declarada: ICP de hipótesis (doc 11) → copy y landing alineados a ese ICP → proceso y acercamiento de ventas v0.1, paso por paso. **El fin es concreto: tener sesiones con prospectos, empezar a vender Zenet y armar los primeros design partners.**
- **Abierta (esperando a Alan):** dónde vive el ICP canónico cuando el experimento termine. Propuesta: bump de `05-perfil-de-cliente-ideal` a v2.0 con `04-segmentacion` y `00-customer-profile` como pointers. Se decide después del doc 11, no antes.
- **Abierta (propuesta, no decisión):** para el proceso de ventas v0.1 la teoría ya existe (`04-sales-motion` v0.1) y los assets están en `_templates/`; lo que falta es la **ruta operativa de punta a punta**, y su espina nueva debería ser el onboarding/análisis del producto — demo *"tus números"* y clasificador de perfil a la vez — que no existía cuando se escribió el doc.

**▸ 📊 Scorecard H1–H6** — sin movimiento · 4ª semana consecutiva sin conversaciones con operadores · N 1 de 5-8 (estricto) · perfil 3 en cero (9ª) · entrada 2 → 0, ninguno visto (Juanjo · Algira · LinkedIn · links Dub sin clic) · H5 pasa a 🟡 partido en la serie (alineada con el tablero · decisión #5 cerrada) · demás semáforos sin cambio · gate (b) V1 ✅ · legal sin cambio · decisión #1 (Miguel al N) en curso, se cierra con el doc 11 · scorecard → `10-scorecard-fase-a.md`

**▸ 🎯 Foco semana 7–13 sep — el tríptico para salir a vender**, en este orden porque cada pieza alimenta a la siguiente:
1. **★ Cerrar el doc 11** (ICP de hipótesis de Fase A): §1 corregido por Alan → §7 (cómo se valida cada criterio en conversación: detecta · señal · kill) → §8 (qué cambia en el gate + reconciliar `_templates/criterios-icp-y-design-partner-fase-a.md`). Cierra la decisión #1 del scorecard.
2. **★ Copy y landing a una versión nueva que coincida con el ICP del doc 11.** El copy va primero (`01-copy` v0.5) y el diseño lo sigue, como en v2 y v3. Versión propuesta: **landing v4** (es reestructura, no retoque).
3. **★ Documentar y estandarizar el proceso y acercamiento de ventas (v0.1):** la ruta operativa de punta a punta, del primer mensaje a la sesión, para acercarnos a prospectos con el problema y los mensajes clave bien contados.

**En paralelo:** cerrar Task 29 y declarar la V1 completa en producción · registrar enviados → respondidos aunque sea 0 → 0 (decisión #4 del scorecard, activa desde hoy) · Juanjo y Algira por WhatsApp o en persona (decisión #5: para tibios, LinkedIn no es canal de primer toque).

*▸ Pipeline: 1 soft-commit frío (Carlos · 3 fechas pasadas) · Miguel en pausa consciente · JP sin retomar · JC Gallina y Alan Jiménez sin respuesta · Juanjo y Algira enviados (LinkedIn · ni vistos · links sin clic) · conocido del brunch (vía Alfonso) pospuesto · Ana pospuesta (9ª semana) · 10 prospectos en "Por enviar" desde julio.*

---

## Semana 24–30 ago — "la demo llegó a la meta; el pipeline se quedó sin gasolina"

**▸ Foco que traíamos** (retro 17-23): ① cerrar onboarding + corrida real con docs de JC Gallina → **✅/❌** (el onboarding cerró; la corrida no — JC nunca respondió) · ② análisis de Alma Verde en el producto → ❌ · ③ mensajes: lun JP + Alan Jiménez, **mié 27 fecha dura Carlos + Miguel** → **1 de 4** (solo Alan Jiménez, que no respondió). **La fecha dura se venció, y era la 3ª de Carlos.**

**▸ 🏆 Logros**
- **★★ LA DEMO DE ZENET TERMINADA — desktop y móvil — lista para probarse con personas.** El flujo completo de onboarding + análisis corre de punta a punta en ambos formatos (Task 28 verificada en dispositivos reales contra producción). **Esto paga la deuda que dejó el gate del deploy del 7 de agosto**: desde entonces la landing prometía en presente un análisis que todavía no existía — ahora existe. Que corra en **móvil** no es cobertura, es el canal donde vive el operador (learning de Carlos: el equipo trabaja desde el teléfono).
- **La semana más productiva del repo de producción:** Task 26 cerrada con sus **19 subtareas** (el expediente/onboarding) · Task 28 cerrada y verificada contra producción · Task 27: limpieza de esquema (32 columnas eran 23) con runbook y docs corregidos — *"el README ya no miente"* · Task 31 arrancada (dashboard de Inicio).
- **Sesión con Alfonso Arellano** (mié 27 · carril insider/conector · run-sheet propio, 5ª sesión con guión): relación excelente, **demo completa mostrada por primera vez a alguien de la industria**, y **HV-03 finalmente salió** tras 5 sesiones en el bolsillo.
- **Dos decisiones estratégicas de fondo tomadas** (contratar ingeniería · cofundadores) — ver Decisiones.

**▸ ✅ Qué funcionó**
- **El método de producto se consolidó:** tasks con subtareas, PRs, cierre documentado y verificación en dispositivo real. Task 28 no se cerró "porque compila" — se cerró contra producción.
- **El run-sheet, 5ª vez:** el objetivo relacional se logró y la sesión quedó legible para el debrief.
- **La disciplina de lectura funcionó en caliente:** se detectó que T1 estaba contaminado y que el precio era declarado-en-tercera-persona, en lugar de anotar "le encantó" y seguir.

**▸ 💡 Learnings**
1. **★★ La asimetría llegó a su punto máximo: todo construido, nada validado.** Landing v3, /demo, /privacidad, formulario de 3 pasos, pitch deck, guiones, run-sheets, criterios de ICP, argumentación de valor — y ahora **el producto entero, en desktop y móvil**. Del otro lado: 1-2 conversaciones de las 5-8 del gate, cero del perfil central. Todo lo que dependía de Alan **construyendo** está hecho; todo lo que depende de Alan **exponiéndose**, no. Es la semana en que se acabaron las excusas de producto — y la evidencia definitiva de que contratar ingeniería habría sido acelerar el lado que ya llegó.
2. **★★ El estancamiento es de ENTRADA, no de capacidad.** Cinco canales tocados esta semana, **cero respuestas**: Alan Jiménez ignoró · JC Gallina no contestó · JP de vacaciones · Carlos y Miguel sin mensaje. Y el fondo: Carlos frío, Miguel en pausa, Ana nunca contactada (7 semanas), Juanjo nunca escrito, Diego Gonzales nunca abordado, los **10 "por enviar" de julio siguen ahí**. El motor de referidos (Victor→Miguel) produjo una vez y no se volvió a cebar. **No hay flujo nuevo desde hace un mes.** Sumar gente no genera prospectos; volver a cebar la red sí.
3. **★ Una sesión que es lo único que pasó carga más peso del que puede.** Alfonso se siente como la mejor sesión de la Fase A y en el libro de validación es de las más suaves: amigo, no comprador, catering (≠ ICP), todo declarado y post-pitch — la misma gravedad psicológica del café con Arballo. **Lo que sí se sostiene:** articuló **solo** la ventaja *hardware-agnostic* (*"Soft Restaurant te obliga a rentar hardware; Zenet corre en cualquier dispositivo"*) = mejor señal de H3 de toda la Fase A, dicha por quien conoce a los vendors · y **capacitación/gente sube a 2 señales independientes** (Carlos + Alfonso), un dolor que NO está en el centro de la Fase 1.
4. **★ T1 contaminado enseñó algo distinto de lo que buscaba.** Alan explicó Zenet "de forma fácil" y Alfonso lo repitió → eco, no comprensión espontánea. Lo demostrado: **Alan explica muy bien en vivo**. Lo que sigue sin probarse — y siempre fue el hueco real de H2 — es que **el mensaje funcione cuando Alan no está** (landing, deck, mensaje frío).
5. **El precio en tercera persona no es dato de precio.** *"Un chef pagaría $2-4 mil"* ≠ *"yo pagaría"*. Se registra solo como direccional: **2ª señal declarada por encima del ancla de $1,500** (Miguel fue la 1ª). El precio se decide con comportamiento.
6. **HV-03 corrió, pero en versión aproximada** — el argumento del punto vive en un documento, no en la cabeza (se preguntó qué era durante el debrief). La **calculadora del punto** deja de ser un "estaría bien" y pasa a ser el fix concreto.
7. **La corrida del análisis llevaba semanas bloqueada por un corpus que ya estaba en la mano.** Primero esperaba el build (ya está), luego a JC Gallina (no respondió) — pero **los inventarios y recetas de Alma Verde están en poder de Alan desde el 9 de agosto**. El bloqueo era de secuencia, no de insumos.

**▸ 🔀 Decisiones**
- **★ NO contratar ingeniería ahora** (analizado a fondo): el cuello de botella no está en producto (V1 va adelante, validación va atrás) · 1-2 ingenieros = 10-30× el burn actual, con cero LOI y cero ingresos · el spec de Fase 1.5 se prioriza con design partners que aún no existen · el propio funding roadmap ancla la 1ª contratación (CS junior, mes 6) a pre-seed, y el pre-seed a 1-2 LOI. **Triggers que revierten la decisión:** 1-2 design partners firmados · pre-seed cerrado · ingresos recurrentes que cubran el sueldo.
- **★ Cofundador: no ahora — escalera en su lugar.** Cuesta 20-50% (más que la ronda pre-seed completa, 10-20%), es la decisión más irreversible, y el hueco real —conversaciones— es founder-led por canon y no se delega en Fase A. Camino: **asesor con equity chico → trabajar juntos en algo real → cofundador solo con validación en mano.** Si algún día se hace: vesting 4 años con cliff de 1, empresa constituida, roles por escrito.
- **Asesor: Juanjo Gutiérrez es el candidato** (construyó tech de logística en TJ y la escaló a España — **y vendió software B2B a restaurantes y cafés en Tijuana**: la motion exacta que no avanza). Secuencia: reconectar y pedir su lectura sobre UNA cosa (el framework de 3 perfiles) → formalizar solo si la relación produce. Rangos de referencia: 0.25% estándar · 0.5% estratégico · 1% muy involucrado, con vesting a 2 años. **NO mezclar el ask de mentoría con el de capital** (además, sin SAPI no puede entrar inversión limpia).
- **Miguel: pausa consciente** (decisión de Alan, no deriva) — la ventana del "gracias" expiró; se reentra con una razón nueva. **Gancho listo:** el hallazgo de productores↔restaurantes que él mismo regaló.
- **Alfonso = carril insider/conector**, no suma al N.

**▸ 📊 Scorecard H1–H6**
**Sin movimiento — 3ª semana consecutiva sin conversaciones con operadores.** Sigue 1-2 de 5-8. Perfil 3 en cero (**8ª semana**). Señal nueva: **H3 🟢 direccional** (hardware-agnostic articulado por un insider). **PERO el gate se movió del otro lado: la condición (b) está CUMPLIDA — V1 demostrable existe, desktop y móvil.** Por primera vez desde que arrancó la Fase A, **no queda nada del lado del producto bloqueando una conversación**; el único obstáculo a Fase B es la validación.

**▸ 🎯 Foco semana 31 ago–6 sep — TRES, todos de entrada**
1. **★ Cebar el flujo (lo único que mueve el scorecard):** el conocido del **brunch de Alfonso** (pedir nombre + que él presente — se evapora en días) · **Juanjo** (el mensaje que lleva un mes) · **Ana/San Miguel** (8ª semana · el mensaje de 2 minutos, no la llamada).
2. **Meter los documentos de Alma Verde a Zenet** — ya no depende de nadie más y ya no es proyecto: es una tarde. Es la 1ª corrida real del producto **y** el contenido del mensaje a Carlos (que deja de ser disculpa: *"corrí tus documentos, esto encontré"*).
3. **La calculadora del punto** (media hora) — para que HV-03 salga completo la próxima vez.

*▸ Pipeline: 1 soft-commit frío (Carlos · 3 fechas pasadas) · Miguel en pausa consciente · JP de vacaciones · JC Gallina sin respuesta · Alan Jiménez sin respuesta · **puerta nueva: conocido del brunch (vía Alfonso)** · 10 prospectos siguen en "Por enviar" desde julio.*

---

## Semana 17–23 ago — "el foco mutó a producto: el análisis se construye, los mensajes esperan otra vez"

**▸ Foco que traíamos** (decidido mié 19): UNO — mago-de-Oz **manual** con docs de Alma Verde → mensaje a Carlos vie 21 con su análisis. **El foco no se ejecutó como se diseñó — se transformó:** en lugar del análisis a mano, Alan construyó **el análisis dentro del producto** (onboarding completo, a punto de cerrar). Carlos vie 21 ❌ (2ª fecha explícita que pasa sin mensaje). Extra no planeado que SÍ se cerró: **Hablemos v0.4 EN VIVO** (jue 20 · tag v3.2).

**▸ 🏆 Logros**
- **Onboarding + análisis completo EN EL PRODUCTO, a punto de cerrar** (8 commits mar-dom · tasks 26.x: el expediente, la capa de correcciones, "resolver no es contestar"). Al cerrar: se pueden meter documentos reales y sale un análisis completo. **Es LA deuda del gate del deploy en camino de pagarse** — la landing dejaría de prometer en presente algo que no existe. Y convierte el mago-de-Oz de ejercicio manual en instrumento reusable para todos los corpus (Alma Verde, JP, Miguel, los que vengan).
- **Hablemos v0.4 EN VIVO** (`zenetapp.com/hablemos` · v3.2 · 20-ago): formulario en 3 pasos con panel de marca (foto de insumos elegida entre 9 candidatas montadas), lada 🇲🇽/🇺🇸, ventas en rangos, y el campo de oro: **el reto en sus palabras** — cada envío llega ahora clasificado por ICP y con VoC antes de la primera llamada. QA con envío real verificado. Spec sincronizado (`02-prototipo` v3.2 §9.b).
- Retro 10-16 + plan semanal documentados y commiteados (`a7db921`).

**▸ ✅ Qué funcionó**
- **Decisiones visuales por comparación montada, no por descripción:** 9 fotos puestas en el panel real → Alan eligió viendo. Rápido y sin vueltas.
- **El envío de prueba real como gate del deploy** — el correo completo fue la condición, no un "se ve bien".
- **Construir sobre lo construido, 3ª vez:** Hablemos v0.4 salió en ~1 día efectivo porque tokens, método y QA ya existían.

**▸ 💡 Learnings**
1. **★★ El foco mutó sin re-agendar lo que dependía de él.** Cambiar "análisis manual" por "análisis en producto" fue probablemente la MEJOR decisión técnica (paga la deuda del gate, es reusable, es lo que el copy ya promete) — pero la mutación se llevó puesto el mensaje de Carlos por segunda vez. La lección no es "no cambies el plan": es que **cambiar el plan obliga a re-agendar explícitamente los compromisos relacionales que colgaban de él**, no a dejarlos caer en silencio.
2. **★ La deuda relacional ya es compuesta.** Carlos: 2 fechas explícitas pasadas (~14 y vie 21), ~9 días desde la ventana pactada. Miguel: 11 días sin el gracias/link que se prometió "en unos días". Cada semana de espera hace el mensaje MÁS caro de escribir, no menos — y eso alimenta el ciclo. El patrón construir-vs-exponer ya no es un sesgo de agenda: es interés acumulándose.
3. **★ Los 5 mensajes del lunes se redujeron a 2 — y son exactamente los 2 ligeros.** JP y Alan Jiménez no cargan promesas; Carlos y Miguel sí — y por eso son los que se posponen. Es el patrón en su forma más nítida: no se recorta por tiempo, se recorta por peso.
4. **(a favor) El corpus de prueba correcto apareció solo:** **Juan Carlos Gallina** (amigo · tenía un café) está dispuesto a prestar sus documentos = banco de pruebas del análisis **sin riesgo relacional** (café ≠ ICP · no cuenta en N · si el análisis sale raro, no quema nada). Es la secuencia sana: probar el instrumento en terreno amigo ANTES de correrlo con Alma Verde.

**▸ 🔀 Decisiones**
- **Lunes 24: solo JP + Alan Jiménez** (decisión de Alan — los 2 micros sin dependencia).
- **★ Miércoles 27 = FECHA DURA para Carlos Y Miguel** (decisión de Alan): Carlos con su análisis — y a la 3ª fecha ya no se llega ni con las manos vacías NI en silencio: se llega con lo que haya · Miguel con el gracias + link de `/demo`.
- **Juan Carlos Gallina = corpus #0 del análisis** (prueba del instrumento, NO validación).
- **Secuencia de la semana:** cerrar onboarding → corrida de prueba con docs de JC Gallina → análisis de Alma Verde en el producto → los 2 mensajes del miércoles.

**▸ 📊 Scorecard H1–H6**
**Sin movimiento — 2ª semana consecutiva sin conversaciones.** Sigue 1-2 de 5-8. Perfil 3 en cero (7ª semana). Lo que SÍ se movió es la condición **(b)** del gate: **V1 demostrable está a días de existir** — la readiness avanzó aunque la validación no.

**▸ 🎯 Foco semana 24–30 — TRES**
1. **Cerrar el onboarding + primera corrida real** con los docs de Juan Carlos Gallina.
2. **Análisis de Alma Verde en el producto** → listo para el miércoles.
3. **Los mensajes:** lun 24 JP + Alan Jiménez · **mié 27 fecha dura: Carlos + Miguel** (con análisis o con lo que haya).

*▸ Pipeline: 1 soft-commit (Carlos/Alma Verde — **frío · 2 fechas pasadas**) · 5 en conversación (Victor · Pedro · Alfonso Arballo · Juan Pablo · Miguel Bahena — esperando demo hace 11 días) · **JC Gallina NEW como test-user del instrumento** (fuera del N).*

---

## Semana 10–16 ago — "la semana partida: deck + /demo + sesión #4, follow-ups en cero"

**▸ Foco que traíamos** (retro 3–9): mago-de-Oz + análisis a Carlos ~14 ❌ (no se corrió · **la fecha pactada pasó en silencio**) · reunión Miguel Bahena ✅ (sesión #4 ejecutada · aviso a Victor enviado · pero el argumento del punto NO se estrenó) · micro-mensajes Ana ❌ + docs a JP ❌ → **1 de 3.** La semana se partió en dos: lunes-miércoles rindieron por siete días; jueves en adelante Alan salió de la ciudad y todo lo pendiente quedó congelado.

**▸ 🏆 Logros**
- **/demo + /privacidad EN VIVO** (`zenetapp.com` · tag `v3.1` · 11-ago): la antesala del análisis (7 bloques · qué juntar · cómo se cuida · animación de 3 tiempos · CTA a la app) + "Cómo cuidamos tus documentos" (versión base honesta pre-constitución) + **2 entradas desde la landing** (navbar "Demo" + link en Etapa 1). Doc nuevo: `SEO and Content/_context/02-demo/00-estrategia-y-copy.md`. De paso **cierra en versión base la card del aviso de privacidad** (Tier 1.5) — el formal LFPDPPP queda gateado a constitución + 1er SF firmado.
- **Pitch deck v0.1 terminado** (15 slides · versión operador · construido SOBRE la narrativa v3, no de cero · figuras de marca dibujadas en lugar de screenshots · build regenerable) + **guión completo** en `_templates/guion-pitch-deck-v0.1.md` (visible + hablado + asas mentales). Doble propósito cumplido: base iterable + herramienta de estudio.
- **Sesión #4 ejecutada — Miguel Bahena** (mié 12 · presencial en Madre · +1 hora) → debrief completo en `08` v0.4. **2ª conversación real con un operador y 1ª con un dueño-payer** · relación lograda "con creces" (invitó el platillo · se abrió por completo) · **1ª declaración de WTP de un dueño en toda la Fase A** ("realmente pagaría por esa pastilla").
- **Plantilla estándar de run-sheets** (`_templates/plantilla-runsheet.html` → PDF) — el formato queda canónico para todas las sesiones.
- Mensajes que SÍ salieron (lun 11): aviso de cortesía a Victor · primer contacto post-CETYS a Alan Jiménez.
- Commits: `07ff596` · `46af89e` · `0e81704` · `557d9d9`.

**▸ ✅ Qué funcionó**
- **El run-sheet — 4ª sesión consecutiva con guión previo.** El objetivo #1 (la relación) se logró con creces; el mapa V1-V8 hizo legible la sesión en el debrief. Ya no es método: es infraestructura (por eso se estandarizó la plantilla).
- **El referido de Victor completó el ciclo entero** (V8 🟢): intro warm → Miguel agendó solo → sesión presencial + relación. El canal referido-de-consultor tiene su primer ciclo completo.
- **Construir sobre lo construido:** el deck salió en un día porque la landing v3 ya ERA la narrativa; /demo salió en dos porque el sistema visual ya existía. La inversión de julio-agosto está pagando en velocidad.

**▸ 💡 Learnings**
1. **★★ El perfil 2 no compra crecimiento — compra su vida de vuelta.** Miguel NO quiere crecer ("pierde el control"); su sueño es que "todo lo extra disminuya". El ICP declarado dice "en crecimiento" — el perfil 2 puede quedar fuera de ese marco y aun así ser cliente: su pitch es la cumbre de Qué cambia (*"dejas de cargar tu negocio"*), no *"crece sin caos"*. ⚠️ N=1 — espera a San Miguel para triangular.
2. **★ La creatividad del chef rompe el costeo** — no es que no sepa costear: cambia platillos seguido y el costeo muere. El caso perfecto de "lo mantiene vivo" + hook de producto para chefs. Y **fine dining ≠ documentado** (Excel + Word + Trello como inventario): el perfil 2 está operativamente más cerca del perfil 3 de lo asumido.
3. **★★ El hallazgo de plataforma llegó solo:** productores↔restaurantes sin puente — y Miguel YA arbitra ese hueco a mano (compra directo, revende a amigos, financia sus insumos). Primera señal de campo para la visión-plataforma, sin preguntarla.
4. **HV-03 va en 4 sesiones sin correr.** La conversación fue tan rica en lo emocional que lo económico nunca se forzó — correcto para la relación, pero el argumento del punto sigue sin probarse en voz alta.
5. **★ El patrón construir-vs-exponer cobró su primer costo real.** Tres retros seguidas observándolo — esta semana rompió una regla explícita propia: la fecha pactada con Carlos (~14) pasó **en silencio**, exactamente lo que la card decía "no se vale". Y el follow-up de Miguel (gracias + link), diseñado para el mismo jueves/viernes, tampoco salió — el calor de la mejor sesión de la Fase A lleva una semana decayendo con V4 abierto. Matiz honesto: el viaje explica jueves-domingo, pero los mensajes de 2 minutos tenían ventana antes de salir. **Ya no es observación: es el riesgo #1 de la fase.**

**▸ 🔀 Decisiones**
- **Formato de run-sheet estandarizado** (plantilla canónica en `_templates/` · todos los PDFs nuevos salen de ahí).
- **/demo canónico documentado** (8 decisiones de diseño en `02-demo/00-estrategia-y-copy.md` · el CTA "Ya tienes acceso" apunta a la app · solo Alan crea usuarios).
- **Privacidad en dos etapas:** versión base honesta HOY ("proyecto del fundador, no empresa constituida") · aviso formal LFPDPPP gateado a constitución + 1er SF.
- **Follow-up Miguel en dos tiempos por juicio relacional de Alan** (gracias sin link → link el viernes) — no ejecutado; al retomarse, va en UN solo mensaje.
- **Deck v0.1 versión operador cerrada** — se itera con evidencia de sesiones, no en el vacío.

**▸ 📊 Scorecard H1–H6**
**Sesión real, bucket quieto.** Miguel = perfil 2 (adyacente) — no suma al N del beachhead. Sigue **1 de las 5-8 conversaciones** del gate. Señales nuevas: V1 🟢 con sorpresa (la CARGA como dolor #1) · **V5 🟡 primera WTP declarada de un dueño** (declarada ≠ revelada) · V4 abierto (la señal decisiva = qué hace con el link de /demo). El mapa quedó acotado por TRES lados (arriba Alma Verde · abajo JP · adyacente Miguel) — **el centro (perfil 3/San Miguel) sigue en cero, 5ª semana corrida.**

**▸ 🎯 Foco esta semana (17–23 ago — retro escrita y plan decidido el mié 19) — UNO**

**El mago-de-Oz, a mano, y nada más.** Alcance confirmado: **manual con Claude** sobre los inventarios y recetas de Alma Verde — **NO** el build en la app (esa deuda se gana su lugar después, con el diseño ya validado por la corrida manual). Entregable en **dos capas**: (1) lo que los documentos actuales permiten decir — nivel de estandarización + costeo donde alcance · (2) sección corta *"esto es lo que vería con tus checklists y protocolos"*, que convierte el hueco en el ask natural y apunta a **su** dolor #1.

**Único mensaje de la semana: Carlos, el viernes 21** — sus niveles de estandarización, para ver si le resulta llamativo, + nota honesta de que el proyecto se atrasó un poco y que vuelve pronto a continuar el proceso. *Decisión de Alan: llegar con trabajo hecho repara mejor una fecha pasada que una disculpa.* Eso pone deadline real al análisis: **jueves.**

**Los otros cuatro mensajes se mueven al lunes 24 por decisión explícita** (Miguel · Juan Pablo · Alan Jiménez · Ana) — **como un solo bloque a primera hora del lunes, antes de tocar cualquier otra cosa.** Razón de la forma: llevamos tres semanas donde lo que se construye avanza y lo que se escribe se recorre; un slot con hora rompe el patrón mejor que una lista de pendientes.

⚠️ **La cuenta que ninguna de estas tareas mueve:** el gate pide 5-8 conversaciones y vas en 1-2. El centro del beachhead (perfil 3 / San Miguel) sigue en **cero después de seis semanas de Fase A**.

*▸ Pipeline: 1 soft-commit (Carlos/Alma Verde — **enfriándose**) · 5 en conversación (Victor · Pedro · Alfonso Arballo · Juan Pablo · **Miguel Bahena — sesión hecha, esperando demo**) · resto sin cambios.*

---

## Semana 3–9 ago — "v3 a producción + el pipeline revivió solo"

**▸ Foco que traíamos** (retro 27jul–2ago): pulir la VP (Why/How/What) ✅ **desbordado** (no se pulió — se reescribió el copy completo y se construyó y desplegó la landing v3 entera) · mensaje a Ana ❌ (3ª semana que se corre) · Juanjo ❌ → **1 de 3, y el 1 se comió la semana.**

**▸ 🏆 Logros**
- **Landing v3 EN VIVO en producción** (`zenetapp.com` · tag `v3.0` · 07-ago): copy v0.3 (Sinek + raíz "el caos no es el precio") → build completo (9 secciones · **el camino**: 3 etapas animadas + la consulta) → QA (móvil · iPhone Safari · hero sólido) → deploy. Specs sincronizados (`02-prototipo` v3.0 · `00-estrategia` v0.2) + OG v3. **El gate de deploy se levantó por decisión explícita** (los tags "En construcción" = honestidad suficiente) → la deuda cambió de carril: **onboarding + análisis real = prioridad de producto** (la página promete en presente).
- **Sesión #3 ejecutada — Juan Pablo (07-ago · control del beachhead)** con run-sheet propio → debrief completo en `08` v0.3. Salió la rama sorpresa (ver learnings 1-3).
- **★ Miguel Bahena respondió y AGENDÓ** (07-ago · reunión semana 10-16) — sin necesitar el recordatorio de Victor. Kill date desactivado · vouch intacto.
- **Plática con Victor desde Egipto** (05-ago) → nota del **umbral del dolor** en `08` (señal fuera de sesión).
- **Evento de networking de la universidad (jue 06-ago):** contacto con emprendedores más jóvenes — unos arrancando, otros más avanzados, varios con ideas afines. Primera acción del enfoque-networking que Alan decidió esta semana (ver Decisiones).
- Workspace pusheado a GitHub (36 commits al día) · commits de la semana: `d6063e6` · `34f7128` · `7850f2c` · `0728164`.

**▸ ✅ Qué funcionó**
- **El tope de 2 toques + esperar** (Miguel): el sistema de outreach protegió el vouch y el prospecto volvió solo. "Temporada alta ≠ un no" era la lectura correcta.
- **El diseño de sesión-control** (JP): se planteó para que cualquiera de los dos resultados enseñara — y el que salió enseñó más de lo esperado.
- **El método de build** (labs → integrar → QA con capturas propias · scripts con asserts) + dos disciplinas nuevas que nacieron de errores: *verificar el index antes de pedir que Alan mire* · *avisar solo con deploy Ready + pestaña privada*.
- **La relación con Victor produce inteligencia sin pedirla** — llegó solo, refirió a Miguel, y ahora manda insights desde una cocina en Egipto.

**▸ 💡 Learnings**
1. **★ El beachhead quedó acotado por los DOS lados — con el centro aún sin tocar.** Por arriba, Alma Verde (S#1: ya estandarizado — pide protocolos, no estandarización). Por abajo, Juan Pablo (S#3: nada que extraer — pediría construcción). El centro ("2-3 sucursales · el sistema en la cabeza · se rompió al crecer") sigue con **cero contacto directo** → San Miguel (perfil 3) es más urgente, no menos.
2. **El dolor abajo del beachhead existe — pero es OTRO dolor.** El del beachhead es de **extensión** ("mi sistema no escala a donde no estoy"); el de JP es de **construcción con criterio prestado** ("no tengo sistema NI experiencia"). A él Zenet tendría que *proponerle* — justo lo que "extraer, nunca proponer" excluye en Fase 1. La resonancia NO amplía el ICP: le da evidencia de campo al filtro. (Hipótesis WTP-novato registrada con trigger · no perseguir con N=1.)
3. **🌟 El chef que no suelta las recetas** (JP): el conocimiento como poder de negociación del empleado — la inversión del "yo SOY el sistema" (el empleado ES el sistema y lo sabe). Implicación: el chef no solo adopta o no — puede **vetar la ingesta**. A vigilar si reaparece.
4. **★ El umbral del dolor** (Victor/Egipto, 05-ago): hotel con desperdicio ENORME y números conformes → cero intención de mejorar. La misma semana, JP: desperdicio chico y números ROTOS → dolor por todos lados. **El dolor de compra = brecha vs número esperado, no ineficiencia objetiva.** Corolarios: "números conformes" ≈ anti-ICP · usuario ≠ comprador en estado puro · **el diagnóstico es el fabricante del trigger** (hace visible la brecha invisible) — otro argumento para el mago-de-Oz.
5. **El patrón construir-vs-hablar se repitió exacto.** La semana produjo un deploy completo (trabajo real y de calidad) y cero de los 2 mensajes comprometidos. Igual que la retro pasada: avanza lo que se hace solo, se cae lo que expone. Matiz nuevo: esta vez el pipeline se movió *de todos modos* (Miguel volvió solo · JP se agendó solo — la sesión venía de un mensaje de la semana anterior). La red que ya está sembrada trabaja aunque no se siembre más — pero no indefinidamente.
6. **HV-03 sigue sin correr.** Tres sesiones y el argumento del punto porcentual no ha salido en voz alta. Para Miguel/Carlos: llevarlo escrito enfrente.
7. **La red de emprendimiento YA produce — y hay que leer bien QUÉ produce.** La sesión de Juan Pablo salió de esa red (canal 🟢 en el debrief), y el evento del jueves la amplió. Pero su rendimiento natural es **aprendizaje, aliados y moral de fundador** — no operadores del beachhead. Carril correcto: **Red estratégica** (ficha y cultiva) ≠ Pipeline de validación (el N). El networking es el primo amable del patrón del learning 5: se siente productivo y es más cómodo que una sesión de validación — crece la red sin que sustituya a las 5-8 conversaciones del gate.

**▸ 🔀 Decisiones**
- **Gate de deploy de v3 LEVANTADO conscientemente** (trade-off presentado y elegido) → deuda a producto con nombre: onboarding + análisis corrido ≥1 vez con docs reales.
- **Mensajes (Ana · Juanjo) pospuestos a la semana 10-16 por decisión explícita** — no deriva. El recordatorio-vía-Victor se volvió innecesario (Miguel respondió solo).
- **Juan Pablo: etiqueta test-user candidato** (NO design partner · NO cuenta en N) · la jugada = **pedirle sus docs** ("te regreso un análisis") → si los manda: señal revelada + corpus #2 del mago-de-Oz.
- **Pitch deck v0.1 como asset del kit** (card en Notion · doble propósito: base iterable + estudio/práctica · la landing v3 ES la narrativa — no se empieza de cero · versión OPERADOR primero).
- **★ Distribución y red — postura ratificada y ampliada (decisión de Alan):** (1) **LinkedIn continúa** con build-in-public — el reencuadre de la retro pasada sigue (publicar sobre la problemática · métrica = operadores/llamadas) **+ propósito nuevo: marca personal como activo de confianza para el networking** · (2) **Instagram arranca con el primer design partner** (ratifica la decisión canónica · sigue pendiente la nota v0.2 en `02-digital-distribution-strategy`) · (3) **Networking como foco creciente los próximos meses** — "ahora que Zenet va tomando forma, es tiempo de crecer la red" — con disciplina de dos carriles: la **Red estratégica en Notion se mantiene viva** (fichar contactos nuevos al conocerlos, no meses después) y el Pipeline de validación sigue siendo la vara del avance.

**▸ 📊 Scorecard H1–H6**
**Sin movimiento del N** — JP es control (perfil frontera) y no cuenta en el bucket del beachhead. Sigue **1 de las 5-8 conversaciones** del gate a Fase B. **PERO:** por primera vez desde el 14-jul, la semana que entra tiene **dos sesiones reales en el calendario** (Miguel Bahena + follow-up Carlos ~14) + el instrumento (mago-de-Oz) por correr. El scorecard puede moverse de verdad.

**▸ 🎯 Foco próxima semana (10–16 ago) — "la semana cargada" · TRES**
1. **Mago-de-Oz con los docs de Alma Verde** → llevar el **análisis** (no features) al follow-up con Carlos ~14. Es a la vez: la respuesta a la crítica de sustancia de la VP · la prueba del instrumento · y el pago de la deuda del gate.
2. **Reunión con Miguel Bahena** — prep: run-sheet perfil 2 / chef-dueño fine dining (card lista · palomear al confirmar fecha) · **estrenar el argumento del punto EN VOZ ALTA** · avisar a Victor (cortesía).
3. **Los 2 micro-mensajes de 2 minutos:** Ana (proponer llamada — 4ª semana ya) + docs a Juan Pablo.

*Diferido consciente: Juanjo (si la semana da) · pitch deck · aviso de privacidad · calculadora del punto.*

*▸ Pipeline: 1 soft-commit (Carlos/Alma Verde) · **5 en conversación** (Victor · Pedro · Alfonso Arballo · **Juan Pablo NEW** · **Miguel Bahena NEW** — 2 con sesión hecha/agendada) · resto sin cambios.*

---

## Semana 27 jul–2 ago — "la semana que se pensó, no se habló"

**▸ Foco que traíamos** (retro 20–26): CANIRAC ✅ · perfil 3 / San Miguel ❌ · mentor ❌ · nudge a Miguel ✅ → **2 de 4**.

**▸ 🏆 Logros**
- **Café CANIRAC ejecutado** (lun 28 · Alfonso Arballo · puente de Pedro) con run-sheet propio (`_templates/guion-reunion-canirac-fase-a.md` v0.1) → debrief completo en `08` v0.2 (Sesión #2).
- **`03-oferta-y-pricing/06-argumentacion-de-valor-y-precio.md` v0.1** — el activo más grande de la semana. Traduce las decisiones canónicas al lenguaje económico del operador sin inventar cifras: mapa de gastos línea por línea · diagnóstico **costo teórico vs real** como primer entregable defendible · **el punto porcentual** como unidad de conversación · precio bilateral · **8 anti-claims** · HV-01..05.
- **Nudge a Miguel Bahena** enviado (30-jul · sin respuesta).
- **Tabla nueva en Notion `🤝 Red estratégica`** (mentores · inversionistas · aliados), separada del Pipeline de validación, con la regla de reparto escrita en el cockpit.
- **3 contactos fichados:** Juanjo Gutiérrez (**= el "mentor potencial" que llevaba semanas sin nombre**) · Antonio López Montañez · Alfonso Arellano (puerta a Culinary Art School TJ).
- Commit `a56b8b5`.

**▸ ✅ Qué funcionó**
- **Escribir el guión antes de la sesión.** Segunda vez que el patrón rinde (la 1ª fue Carlos). Ya es método, no suerte.
- **Pedro entregó otra vez** — la tesis *contador → aliado de canal* lleva dos cumplimientos seguidos.
- **La disciplina "entusiasmo ≠ validación" hizo su trabajo:** se detectó que **no aterrizó ningún ask**, en lugar de contar el café como puerta abierta. Un año atrás esto se hubiera guardado como "gran reunión".
- *(Queda pendiente de esta retro: la lectura en vivo del guión — ¿sirvió durante el café o se soltó a los cinco minutos?)*

**▸ 💡 Learnings**
1. **★ EL FRENO NO ERA AGENDA — ERA EXPOSICIÓN.** Avanzó **todo lo que se hace solo** (el doc, el debrief, las tablas) y se cayó **todo lo que implicaba mostrarle Zenet a alguien**. San Miguel y Juanjo no se atoraron por tiempo: se atoraron porque escribirle a alguien significa exponer algo que no se siente listo. Nombrado, se puede diseñar alrededor.
   - ⚠️ **La trampa:** *"pulo la propuesta de valor y luego hablo con operadores"* es un círculo que no cierra — la VP no se valida escribiéndola mejor, se valida en conversaciones, y mientras tanto la única fuente que podría decir si está lista queda apagada.
   - ✅ **La salida precisa (no es fuerza de voluntad):** **H1** (los pains resuenan) y **H6** (el pozo de valor) **no necesitan VP pulida** — el Mom Test explora SU mundo, 80/20 escuchando. **La mitad del scorecard se puede mover sin enseñar nada.** H2 y H3 sí la necesitan. Dos carriles, no una fila.
2. **La VP no aterriza — 2ª señal independiente** (Carlos 14-jul + Alfonso 28-jul) → **ya no es N=1**. Dos capas con remedios distintos: **(a) comunicación** (el mensaje) y **(b) sustancia** (el alcance de Fase 1, que Alan concede en parte). El doc 06 responde a (b); (a) se ataca la semana que entra.
3. **Objeción nueva y distinta: *"otro software más"*.** Alfonso: *"quizá sea complicado lograr que un restaurante pague por otro software más."* Es **vitamina vs painkiller = H6 directo**, y no es lo mismo que la objeción #1: aquélla dice *"no entiendo qué resuelve"*, ésta dice *"aunque lo entienda, la categoría ya está saturada de cosas que se pagan"*. **No se resuelve con mejor copy — se resuelve con el operador correcto.** Quien siente el dolor no compra "otro software": compra la salida de su problema.
4. **CANIRAC = canal post-PMF, no de Fase A.** Cámara política y burocrática · membresía ~$3,000 MXN/año · empresas grandes ahí por imagen. Confirma con detalle de campo el Tier 2 institucional del channel strategy (awareness, no revenue). Ajuste honesto: en la retro anterior iba como *"la grande"* de la semana. No lo era.
5. **Convergencia del framework de 3 perfiles.** Alfonso llegó solo a la misma segmentación (independientes nuevos · alta cocina · producción grande estandarizada) y a la misma implicación (*"si atacamos todas, no atacamos ninguna"*). Un framework que sobrevive el contacto con alguien de la industria **sube de hipótesis de retro a hipótesis con apoyo externo**.
6. **Alfonso Arballo es supply-side, no operador.** Trabaja en el negocio familiar de distribución de vinos y licores (surte a Calimax, Soriana en TJ). Doble clasificación, **ambas post-PMF**: conector institucional (Tier 2) + distribuidor (Tier 3 · Fase 2+ con leverage · demand-side primero). Consistente con no forzarlo.
7. **★ LinkedIn se detuvo — y el diagnóstico importa más que el hecho.** Alan dejó de publicar: *"me cuesta continuar cuando veo que no hay avance"* (poco alcance · casi nula interacción · cero mensajes). Cuatro lecturas honestas:
   - **(a) Dos meses es muy poco.** El horizonte real de LinkedIn orgánico es 6-12 meses de compounding. Se estaba leyendo la parte plana de la curva como si fuera horizontal.
   - **(b) Se midió con la métrica equivocada.** Alcance y likes son exactamente lo que `02-digital-distribution-strategy` advierte NO optimizar; su north star declarado es **relaciones**.
   - **(c) Con esa métrica, LinkedIn no ha fallado.** **Victor Murguía llegó por LinkedIn** (inbound, él contactó a Alan) — y Victor produjo el referido a **Miguel Bahena**. Una relación que genera un referido no es cero. *(Corrección: en la conversación de la retro se afirmó primero que ningún prospecto vino de LinkedIn; es falso.)*
   - **(d) El stealth quita el material más potente:** no se puede nombrar Zenet, que es lo que Alan tiene más ganas de contar.

**▸ 🔀 Decisiones**
- **Secuencia canónica para atacar el hueco de la VP:** (1) probar el **argumento del punto porcentual** en conversación → (2) **mago-de-Oz del diagnóstico** con los docs de Alma Verde → (3) **copy v0.3** → (4) landing v3.
- **NO prometer el diagnóstico en la landing hasta correrlo una vez.** Razones: el perfil 3 se auto-excluiría (*"yo no tengo documentos"*) · es promesa verificable sin evidencia · `06-argumentacion` §9 lo pone como **el disparador mayor** que mueve los claims a v1.0. Lo seguro hoy es prometer el **método**, no el **hallazgo**.
- **Mentores e inversionistas viven fuera del Pipeline de validación.** Regla: *¿su red lleva a operadores → Pipeline Fase A; a capital/mentoría/ecosistema → Red estratégica?*
- **Miguel Bahena: tope de 2 toques directos alcanzado** (un tercero quema el vouch) → reactivar **vía Victor** · **kill date ~15-ago** → si nada, Pausado.
- **Legal: se confirma el Tier framework propio.** Lo caro (abogado · contratos · DPA · SAPI) espera al LOI. **El aviso de privacidad de la landing se hace ya** — Formspree ya recolecta datos personales desde julio y bajo LFPDPPP 2025 Zenet es encargado del tratamiento. No es prematuro: va tarde.
- **La VP se re-articula con Why/How/What (Sinek) + tono evangelizador.** ⚠️ Es cambio de **expresión**, no de estrategia — la VP canónica sigue siendo la de `01-propuesta-de-valor` v0.1.
- **Reveal / IG build-in-public anclado al primer design partner.** Coincide con las decisiones abiertas #1 y #2 del plan de Fase A §9.5. ⚠️ **Tensión a resolver conscientemente:** `02-digital-distribution-strategy` declara **LinkedIn ONLY en Fase 1** y difiere IG a Fase 1.5+/2+. Si IG entra al reveal, es un cambio deliberado de esa decisión, no deriva.
- **★ LinkedIn se reencuadra: de canal de audiencia a instrumento de validación.** Publicar **de vez en cuando** (sin cadencia forzada) y **solo sobre la PROBLEMÁTICA** — no sobre Zenet ni sobre producto. Dos objetivos: **(1) seguir validando problem fit / H1** (un operador que comenta *"eso me pasa exacto"* es evidencia casi gratis, y alimenta la VoC library) · **(2) cerrar llamadas para Mom Test**. Compatible con el stealth. **Métrica:** ni alcance ni likes → *¿comentó o escribió un operador real? ¿se agendó una llamada?*
  - ⚠️ **Riesgo a verificar barato:** ¿la audiencia de Alan en LinkedIn son operadores de restaurantes o es red tech/industria? Si no hay operadores leyendo, ningún contenido convierte — y entonces el trabajo de LinkedIn no es publicar sino **conectar y comentar** en el mundo de ellos. Revisar tras 3-4 posts.
  - ⚠️ **`02-digital-distribution-strategy` v0.1 (LinkedIn ONLY · 3-5 posts/semana) ya no describe la realidad** → necesita nota de revisión a v0.2, o el canon se vuelve ficción y contamina todo lo que se apoya en él.
- **El foco semanal baja a 3 puntos** (capacidad observada ≈2, no 4).

**▸ 📊 Scorecard H1–H6**
**Sin movimiento.** Cero conversaciones nuevas con operadores. El café de CANIRAC **no cuenta** (conector, contexto social, señales declaradas). Sigue **1 de las 5-8 conversaciones** que pide el gate a Fase B. **Todos los assets están construidos; faltan operadores.**

**▸ 🎯 Foco próxima semana (3–9 ago) — TRES, no cuatro**
1. **Pulir la propuesta de valor** (Why → How → What · tono evangelizador). Es el trabajo que destraba lo demás — **pero no es precondición para el punto 2**.
2. **Mensaje a Ana proponiendo llamada.** *(Versión chica de "San Miguel" — 2 minutos, no la llamada completa. La tarea llevaba 2 semanas cayéndose porque pedía una llamada; se redimensiona.)*
3. **Juanjo** — redactarlo juntos y mandarlo martes o miércoles.

*Carril de producto (aparte): onboarding con análisis de estandarización y costos. Nota: correrlo **a mano una vez** con los docs de Alma Verde antes de construir la ruta — un día manual puede ahorrar semanas de build en la dirección equivocada.*
*Diferido: reactivar a Miguel vía Victor (kill date 15-ago) · aviso de privacidad · calculadora del punto.*

*▸ Pipeline: 16 prospectos · 1 soft-commit (Carlos/Alma Verde) · 3 conversación (Victor, Pedro, Alfonso Arballo) · 2 enviados sin respuesta (Alma, Miguel Bahena) · **10 en "Por enviar"**.*

---

## Semana 20–26 jul — "Landing v2 a producción + Ola 2 arranca"

**▸ Foco que traíamos** (retro 13–19): Landing v2 ✅ (en producción) · Ola 2 🟡 (arrancó — Miguel enviado; San Miguel/Diego pendientes).

**▸ 🏆 Logros**
- **Landing v2 EN VIVO** (`zenetapp.com` · tag `v2.0`) — acento teal · copy v2 · animación "Cómo funciona" (tablero → núcleo Zenet) · sección nueva "En acción" · §3 en 3 movimientos · QA + OG/favicon + docs sync. Nacida de los learnings de Carlos.
- **Ola 2 arrancó** — mensaje a Miguel Bahena (Madre · fine-dining Ensenada) vía intro warm de Victor (texto + voice note + link).
- **Puerta CANIRAC abierta** — Pedro cumplió como aliado de canal: reunión lun 28-jul con integrante de la mesa de jóvenes.
- Sección El fundador refinada (hilo de calidad · candado "sistema" · cierre inversión/equipo).

**▸ ✅ Qué funcionó**
- Iterar en `lab/` con checkpoints visuales (color · stepper · animación A/B) antes de tocar la página.
- Ángulo por perfil (fine-dining → "libera energía para la experiencia y la calidad") en el mensaje a Miguel.
- Voice note para la propuesta de valor (fundador → chef · cultura MX).
- Pedro entregando (valida la tesis contador → aliado del channel strategy).

**▸ 💡 Learnings**
- **★ Primer framework de segmentación — 3 perfiles de ICP** (el eje = nivel de estandarización que YA tienen):
  - **(1) Estandarizado / gran producción** (Alma Verde) → Zenet **extiende / automatiza / mantiene**. Puede pagar · multi-sucursal = más ACV · pero su necesidad del valor "crea el sistema" es baja.
  - **(2) Alta cocina / gourmet** (Miguel Bahena) → Zenet **preserva calidad y consistencia**. Peer-proof brutal · pero pocas sucursales · puede que no quiera "escalar".
  - **(3) Independiente sin estandarizar** (*no probado*) → Zenet **construye el sistema desde cero** (estandarización = punto de entrada · diferenciador #4 puro). El que más lo necesita · pero menos docs de dónde extraer · quizá menos capaz de pagar.
  - **Implicación:** cada perfil quiere un trabajo distinto → no se puede clavar VP/demo/pricing para los 3 a la vez pre-PMF. **Banderas:** (a) no sobre-indexar en Alma Verde (N=1, probable outlier); (b) el **perfil 3 es el que más urge probar** — único sin tocar + más cercano al beachhead declarado + al VoC "el verdadero incumbente = no system / cuaderno + cabeza". *Gradúa a docs de ICP/segmentación como hipótesis abierta.*
- **Onboarding = demo = clasificador de ICP** (son la misma idea): un análisis de "nivel de estandarización inicial" a partir de los docs del operador sirve de (a) demo "tus números" (estrategia ganadora del customer research), (b) instrumento que clasifica el perfil, (c) encarna "extraer, no proponer". *Validar primero en modo mago-de-Oz (manual) antes de construir la ruta.* → producto (backlog).
- **Postura de ventas más relajada / menos técnica** — alineada con el canon de voz (lenguaje del operador · sin tech · sin hype). NO leerla del silencio de Miguel (3 días + fin de semana ≠ señal).
- Diferenciación sigue siendo el reto #1 (categoría + profundidad + confianza, no features) — movió todo el rediseño v2.

**▸ 🔀 Decisiones**
- Acento de marca **terracota → teal** (diferenciación vs el food-tech · canónico en `03-visual-identity/02-color` v2.0).
- §4 de la landing **sin animación** (2 piezas animadas bastan).
- Las **retros viven en el repo** (esta bitácora) · Notion queda como dashboard vivo.

**▸ 📊 Scorecard H1–H6**
- Sin nueva data de validación esta semana (Miguel en espera · CANIRAC es el lunes · no hubo demo nueva). Reads siguen post-Carlos. Semana de **construcción** (landing v2) + **activación** (Ola 2 + CANIRAC), no de validación — y estaba bien: era el gate para poder compartir con Miguel.

**▸ 🎯 Foco próxima semana (27 jul–2 ago)**
1. **Reunión CANIRAC lunes** (diseñar plan · ejecutar) — la grande.
2. **Probar un perfil 3** (San Miguel vía Ana) — el beachhead casual, contrapeso al sesgo high-end.
3. **Escribir al mentor potencial** (LinkedIn · reconectar · ask calibrado, no "sé mi mentor" en frío).
4. **Vigilar a Miguel** (nudge suave si calla ~1 semana).

*▸ Pipeline: 14 prospectos · 1 soft-commit (Carlos/Alma Verde) · 2 conversación (Victor, Pedro) · 2 enviados (Alma, Miguel Bahena) + puerta CANIRAC · resto por enviar.*

---

## Semana 13–19 jul — "Kit de validación + primera demo (Carlos)"

**▸ Foco que traíamos:** armar el kit de validación + ejecutar la primera demo presencial (Carlos / Alma Verde).

**▸ 🏆 Logros**
- **Kit de validación completo** — guión Mom Test · criterios ICP/DP · template de debrief · docs para iPad (PDF/Word).
- **Primer design partner** — Carlos (Alma Verde) soft-commit tras la demo del 14-jul.
- Debrief procesado → Notion (Pipeline) + bitácora de learnings (`08`) + VoC (V-035 "no quiero que sea un POS").
- Victor activado como conector (pasó a Miguel Bahena / Madre) + template #6 (intro por conector).

**▸ ✅ Qué funcionó**
- Prep del run-sheet antes de la demo.
- Mom Test — escuchar > pitchear.
- Warm-first (re-enganche con memoria específica compartida).

**▸ 💡 Learnings**
- **Redirect de producto (N=1 · Carlos):** su dolor #1 NO era inventario/recetas (Alma Verde ya estandarizado) sino **protocolos personalizados + gente/capacitación + mantenimiento + permisos** · "extraer, no proponer" · móvil · rechazó el ángulo POS.
- **Mercado ruidoso:** los ads de IG/FB de "proyectos con IA para restaurantes" = POS + integraciones IA menores (NO es Zenet = AI-native BoH) → la **diferenciación es el reto de comunicación #1**.
- **Semilla del framework de segmentación:** "Alma Verde quizá ya totalmente estandarizado → falta oír al verdadero ICP casual + a la alta cocina" (madura en la retro 20–26 a los **3 perfiles**).

**▸ 🔀 Decisiones**
- Frame anti-POS reforzado ("que solo se encargue del back").
- Siguiente sprint = **Landing v2** (comunicar la diferenciación por contraste) + **Ola 2**.

**▸ 📊 Scorecard H1–H6**
- Carlos: **H4 🟢** (compromiso revelado fuerte — abrió todos sus docs + ofreció intros a Alma y otros departamentos) · **H1/H2/H3 🟡** (pains reales pero distintos a los hipotetizados) · **H6 🟡** (costos abiertos). N=1.

**▸ 🎯 Foco próxima semana (20-jul):** Landing v2 + Ola 2.

---

*Última actualización: 2026-08-30. v0.5 · 7 entradas (13–19 jul · 20–26 jul · 27 jul–2 ago · 3–9 ago · 10–16 ago · 17–23 ago · 24–30 ago).*
