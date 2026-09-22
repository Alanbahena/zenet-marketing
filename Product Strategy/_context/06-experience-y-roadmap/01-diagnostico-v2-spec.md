---
name: Diagnóstico v2 — spec del reporte
description: "Spec del rediseño del reporte de diagnóstico que Zenet genera en el onboarding. Cambia el eje: de los módulos de Zenet a las preguntas del dueño. Cuatro páginas (tu operación en una página · lo que sale de tus documentos · tu camino en orden · anexo), dos índices (el sistema de la cocina · el sistema de la gente), reglas de lectura de rangos y de píldoras, tres orígenes de dato (documento · declarado · sector), y plantilla con-documento / sin-documento por área. Escrito con el fundador bloque por bloque sobre un mock con datos ficticios (Marea Baja). Es el handoff para la sesión del repo de producción. v1.0 (21-sep-2026): las cuatro páginas cerradas con el fundador en sus tres versiones (primer mes · mes 2 · sin costeo), más el contrato de generación para los agentes y la definición del asistente del diagnóstico."
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-09-21
status: active
version: 1.0
owner: Alan Bahena
---

# Diagnóstico v2 — spec del reporte

> **Para quien implementa (sesión del repo de producción):** este documento dice *qué* muestra el reporte, *cómo se calcula* cada cifra, *de dónde sale* y *qué copy* lleva. No dice cómo se implementa. El mock que lo acompaña vive en `06-experience-y-roadmap/_mock/diagnostico-v2/` (fuente HTML, en git) y sus PDF en `Product Strategy/_templates/_export/diagnostico-v2/` (fuera de git): `diagnostico-v2-ejemplo.html/.pdf` (todos los documentos) y `diagnostico-v2-ejemplo_sin-costeo.html/.pdf` (solo recetario y menú). Los bloques sueltos `bloque-cabecera`, `bloque-indices` y `bloque-numeros` son los mismos bloques aislados para verlos grandes.
>
> **Estado: v1.0 — primera versión oficial del diseño (21-sep-2026).** Las cuatro páginas cerradas con el fundador en tres versiones: primer mes (4 págs) · mes 2 (5 págs) · sin costeo ni números (4 págs). **La fuente HTML de los tres mocks está en git:** `06-experience-y-roadmap/_mock/diagnostico-v2/` (con README para regenerar el PDF). §10 es el contrato para los agentes que generan el reporte; §11 define el asistente que responde dudas sobre él. Lo marcado `[Alan verifica]` depende del repo de producción.

## 0. Por qué se rediseña

El reporte actual (4 págs, ago-2026) tiene dos cosas buenas que se conservan —el índice de estandarización y los costos contra rango— y ocho defectos que este spec corrige:

1. Tres "fuera de rango" que son buenas noticias (nómina, ocupación y prime cost *por debajo*) llevan la misma píldora que un problema.
2. *"Brecha mensual estimada: $0.00 MXN"* es el único renglón en pesos y dice cero.
3. No hay ningún número suyo que le importe: 22 recetas costeadas y no se dice nada de ellas.
4. Gramática de déficit: "no tienes", "todavía no lo tienes" ×3, "sin medir", "huecos" ×2 (vetado en `01-copy`), "le faltan".
5. Repetición: la lista de unidades aparece seis veces; "por qué pasa" repite el riesgo 1.
6. Lo importante enterrado: riesgos en pág. 2, "qué cambia" al final de la 3, la pág. 1 abre con prosa que explica qué es el documento.
7. Nombres viejos de la app (Alineamiento · Estructura · Normalización) junto a los nuevos (Recetas · Inventario · Equivalencias · Catálogos) en el mismo documento.
8. "Las 1 que declaraste"; pág. 4 con un solo párrafo.

**Además:** el PDF de muestra dice "Alma Morada" pero adentro aparece "ALMA VERDE SUCURSAL CACHO" y su recetario. Ese archivo **no puede ser el diagnóstico de ejemplo**; el ejemplo sale de un corpus ficticio declarado.

## 1. Principios — atraviesan todo el documento

1. **El eje son las preguntas del dueño, no los módulos de Zenet.** ¿Cómo está mi operación? · ¿Dónde se me va el dinero? · ¿Qué depende de una persona? · ¿Qué hago primero? · ¿De dónde salió esto?
2. **Cada hallazgo vive en un solo lugar.** La pág. 1 resume, la 2 prueba, la 3 actúa, la 4 detalla.
3. **Sin gramática de déficit.** El marco es *"hoy X, con Y"*: "tus recetas dicen qué llevan; con porciones dirían cuánto cuestan". Prohibidos: "huecos", "falta / le falta", "no tienes sistema", "áreas de oportunidad", "todavía no lo tienes". "No leímos X" sí se dice, seguido de qué se leería y con qué basta.
4. **Cada número lleva su origen**, uno de tres: **tuyo, del documento** (qué documento y de qué mes) · **declarado por ti** (lo que respondió en el onboarding) · **del sector** (el rango de referencia, con fuente). Nunca se presenta una estimación con dato del sector como si fuera suya.
5. **Un rango es una señal, no un veredicto.** Se dice en el bloque de números y se aplica la regla de tres lecturas (§3.3).
6. **Zenet extrae, nunca propone.** El reporte muestra los números y dice qué los mueve; no dice qué platillo subir de precio, qué proveedor cambiar ni qué quitar del menú. Eso se dice explícitamente en la pág. 3.
7. **Nombres de sección = navegación actual de la app** (Catálogos · Recetas · Inventario · Equivalencias · Manual Operativo), en todo el documento.
8. **Cada área tiene dos plantillas: con documento y sin documento.** La versión sin documento es una sola línea, en positivo, que dice qué se leería y con qué basta. Nunca un bloque de ceros.
9. **Es la línea base.** El reporte se vuelve a correr el mes siguiente y se compara contra este; por eso la fecha se explica y cada índice dice qué lo mueve.
10. **El ejemplo de venta usa la misma estructura** con un restaurante ficticio declarado ("Ejemplo · datos ficticios" en cada página), y en el primer toque se *enseña* solo la pág. 1.

## 2. Estructura — cuatro páginas

| Pág. | Nombre | Pregunta que responde | Estado |
|---|---|---|---|
| 1 | Tu operación en una página | ¿Cómo estoy y dónde se me va el dinero? | ✅ cerrada 18-sep |
| 2 | Lo que sale de tus documentos | ¿De dónde sale y qué hay detrás? | ✅ cerrada 21-sep |
| 3 | Tu camino, en orden | ¿Qué hago primero y qué me desbloquea? | ✅ cerrada 21-sep |
| 4 | El mes que viene, y el detalle | Qué pasa con este documento después; el anexo | ✅ cerrada 21-sep (5 págs en el mes 2) |

## 3. Página 1 · Tu operación en una página

Lo que el dueño lee de pie, en dos minutos. Cabe en carta con cuatro bloques: cabecera · dos índices · tus números · cierre. **Fuera de esta página:** "lo que hoy depende de una persona" (lo cubre el índice de la gente con número; su detalle va en la pág. 2).

### 3.1 Cabecera

- Eyebrow *Diagnóstico de tu operación* · nombre del restaurante · línea de contexto (*Mariscos · casual · Zona Río, Tijuana · 1 sucursal*). El número de sucursales siempre va aquí.
- **Fecha explicada:** *"Diagnóstico al 17 de septiembre de 2026 · describe tu operación a esa fecha; el mes que viene se compara contra este."* No una fecha suelta.
- **"Lo que leímos"** como fichas con documento + alcance: *Recetario · 48 recetas* · *Menú · 52 platillos* · *Inventario · 86 insumos* · *Costos desglosados · jul–ago* · *Estado de resultados · jun–ago* · *Operación escrita · 1 documento*. Con 2+ sucursales, cada ficha dice de cuál vino el documento (o "consolidado").
- En el ejemplar de ejemplo: píldora *Ejemplo · datos ficticios* arriba a la derecha, en peach.

### 3.2 Dos índices, lado a lado

**A · Tu índice de estandarización, hoy** — *"el sistema de tu cocina"*.
- Número de 0 a 100 = promedio de **Recetas** e **Inventario** (como hoy).
- Componentes con barra y línea de detalle: Recetas (procedimiento · cantidades · porciones) · Inventario (con unidad · con presentación de compra) · **Normalización: se muestra con la etiqueta "informa · no califica"**, barra gris y porcentaje atenuado. *Decisión del fundador 18-sep, confirmada el 21: Normalización se muestra con la etiqueta y no entra al índice por ahora; se evaluó quitar la barra de la pág. 1 y se decidió dejarla.* Costos y operación escrita tampoco califican (se dice en la línea bajo el número).
- **"Qué lo sube más rápido"**: las una o dos capturas que más mueven el promedio, con el número al que se recalcula (*"porciones en 19 recetas y presentación de compra en 48 insumos → ~70"*). El número lo calcula el mismo motor del índice simulando las capturas; si no se puede calcular, la línea dice solo qué lo mueve. **Sin referencias a "paso N del camino"**: eso vive en la pág. 3.
- Sin documento de inventario: el componente cuenta 0 para el promedio y se etiqueta *"no leímos"*, no *"no tienes"*.

**B · Qué tanto se puede enseñar sin una persona clave, hoy** — *"el sistema de tu gente"*. **Nuevo.**
- Número de 0 a 100 = promedio de dos componentes:
  - **Procesos clave escritos** = escritos ÷ 8. **Lista fija de 8, igual para todos los restaurantes** (para que sea comparable entre restaurantes y mes a mes): 1 apertura y cierre · 2 recibir mercancía · 3 almacenar y rotar inventario · 4 producción y porcionado · 5 servicio al cliente · 6 limpieza e higiene · 7 caja y cierre de caja · 8 inducción de alguien nuevo. `[Alan verifica]` la lista contra las secciones del Manual Operativo y las cinco categorías que hoy lee operación escrita (roles · protocolos · servicio · higiene · capacitación); si el manual tiene otra taxonomía, la lista se alinea a ella.
  - **Recetas que alguien nuevo ejecuta igual** = recetas con porción **y** con todas sus unidades con equivalencia ÷ total de recetas.
- **Bloque "Tu equipo · declarado por ti"** (tres filas, una sola etiqueta): *Personas · 14 · cocina 8 · piso 4 · otros 2* · *Trabajan con procesos no escritos · 12 de 14* · *Rotación en seis meses · salieron 5 · entraron 4*. Con 2+ sucursales, se parte por sucursal con total.
- **"Qué lo sube más rápido"**: igual que en A (*"escribir los 4 procesos de cocina y caja que hoy van de memoria → ~55"*).
- **El costo de la rotación en pesos NO se muestra** hasta que el dato sea suyo (altas y bajas capturadas en Zenet, mes 2+). Nunca con dato del sector.

### 3.3 Tus números

Cabecera del bloque: *"Tus números · contra el rango de tu segmento. Un rango es una señal, no un veredicto. Cada cifra dice de dónde sale."*

**Food cost como cifra principal** (columna izquierda): número grande · píldora con la magnitud (*"1.6 puntos arriba del techo"*), debajo del número, no al lado · línea de origen (*"Tuyo · estado de resultados de agosto · rango de tu segmento 28–33%"*) · escala con la banda del rango **rotulada en los extremos** (28% · 33%) y la marca con su valor encima · **tendencia** de los meses leídos como gráfica de puntos con valores (31.9 → 33.8 → 34.6) + texto: cuánto subió, si las ventas se movieron, y **qué subió en sus compras** (*camarón +18% · aguacate +31% · aceite +9%*, de los costos desglosados).

**Cuatro celdas compactas** (columna derecha): costo de nómina · prime cost · costo de ocupación · margen operativo. Cada una: etiqueta · cifra · píldora · escala rotulada · una línea de origen.

**Regla de píldoras (tres lecturas):**
- **dentro** → mint.
- **tensión real** → peach: un **costo por arriba** del rango, o el **margen por debajo**. La píldora dice cuánto cuando se puede (*"1.6 puntos arriba del techo"*).
- **por debajo en un costo con datos completos** → es favorable: píldora mint *"por debajo"*.
- **"revisa el dato"** → gris, solo cuando el reporte detecta que falta una línea en el documento (p. ej. ocupación sin luz, agua ni gas), y la línea de origen dice cuál.
- Ninguna buena noticia lleva color de tensión. Nunca colores de alerta (rojo/amarillo): la tensión es peach, como en todas las superficies.

**Banda del dinero** (bajo las celdas, tres cifras, con rótulo cada una):
1. **Lo que vale un punto** — *$4,100 al mes*: 1% de las ventas promedio de los meses leídos. Es la unidad de conversación del argumento de valor (`03-oferta-y-pricing/06`).
2. **Lo que hoy estás arriba del techo** — *$6,560 al mes · $78,720 al año*, **con la cuenta visible**: *"1.6 puntos × $4,100 = $6,560. Es lo que hay entre tu 34.6% y el techo del 33%."* Solo aparece si el food cost está por arriba; si está dentro, la banda muestra el punto y la tercera cifra.
3. **Cada $10,000 más que vendas** — *$6,540 se quedan*: 10,000 × (1 − food cost). Texto: *"Después de insumos, con tu food cost de hoy. De ahí salen nómina, renta y el resto: vender más solo ayuda si esto sube."* Es la única línea que sobrevive de la idea de un "índice de crecimiento" (descartado: no es calculable, sería un juicio).
- **Fuera:** la varianza teórico contra real ("lo que gastas y no vendes"). Requiere conteo de cierre; el producto no lo tiene. Se retoma cuando exista.
- **Sin estado de resultados:** el bloque se colapsa a una línea: *"No leímos costos ni estado de resultados. Cuando los tengas, aquí se leen contra el rango de tu segmento y sale lo que vale un punto en tu operación. Basta con el estado de resultados de un mes."*

### 3.4 Cierre (al pie)

Una frase en el marco *hoy X, con Y*, específica a sus documentos: *"Tus recetas ya dicen qué llevan y cómo se hacen. Cuando además digan cuánto rinden y tu inventario diga cuánto cuesta cada gramo, sabrás qué platillo te deja dinero y cuál no — el día que suba el camarón, no al cierre del mes."* Dos líneas; se genera a partir de los dos componentes que más pesan.

### 3.5 Del segundo diagnóstico en adelante · "lo que se movió desde tu línea base"

*(Idea del fundador, 21-sep: "tus ahorros desde que tienes Zenet"; reencuadrada para que el documento no se atribuya el resultado.)* Solo aparece **a partir de la segunda corrida**, y **nunca en el ejemplo de venta** (sería una cifra de impacto ficticia).
- **Cabecera:** *"Diagnóstico al 17 de octubre de 2026 · segundo mes · comparado contra tu línea base del 17 de septiembre."*
- **Índices:** píldora mint *"+22 desde tu línea base"* junto al número; cada componente que cambió dice entre paréntesis lo que era (*"porciones 100% (era 60%)"*).
- **Food cost:** la píldora dice el estado y el movimiento (*"dentro · bajó 1.7 puntos desde tu línea base"*); la tendencia suma el mes nuevo; el texto dice **por qué** con honestidad (qué insumo bajó, qué siguió subiendo, qué parte es porción).
- **Banda del dinero:** la primera cifra pasa a ser **"Lo que se movió desde tu línea base"** — *$6,970 al mes · $83,640 al año, si se sostiene* — con la cuenta visible (*34.6% → 32.9% = 1.7 puntos × $4,100*) y su origen (*"tuyo: estado de resultados de septiembre"*). "Lo que hoy estás arriba del techo" desaparece si ya está en rango. "Cada $10,000" dice lo que era. **Si el food cost subió, la misma celda lo dice, en peach.**
- **Vocabulario:** la palabra *"ahorro"* puede usarse porque es su resultado; **nunca "de Zenet" ni "desde que tienes Zenet"**: el reporte prueba que el número se movió, no que fue Zenet. La atribución la hace él.
- **Cierre:** constata lo hecho y apunta a lo que sigue.

### 3.6 Cuando solo hay recetario y menú — la pág. 1 sin números

Es la prueba dura del principio 8. Así se comporta (mock `_sin-costeo`):
- **Fichas:** las leídas, y una ficha punteada en gris: *"No leímos · inventario · costos · estado de resultados · operación escrita"*. La línea de fecha dice *"con cada documento nuevo se vuelve a correr"*.
- **Índice A:** Inventario aparece con la etiqueta *"no leímos"*, sin porcentaje, y la línea bajo el número lo explica: *"Inventario cuenta 0 porque no lo leímos, no porque no exista."* Su detalle en positivo: *"tus recetas ya traen la lista: 86 ingredientes distintos."* "Qué lo sube más rápido": porciones + **dar de alta el inventario desde los 86 ingredientes de las recetas**.
- **Índice B:** procesos 0 de 8 con *"no leímos protocolos. Lo que sí está escrito son las 48 recetas con procedimiento."*
- **Tus números** se colapsa a dos párrafos: con qué basta para leerlos (*"el estado de resultados de un mes"*) y **lo que sí sale de las recetas**: los insumos que más pesan (*limón en 40 de 48 · camarón 31 · aguacate 22*).
- **Bloque nuevo "Con qué crece este diagnóstico"**, en orden de lo que más cambia: el estado de resultados de un mes · las facturas de compra · el inventario si lo tiene (si no, se arma desde las recetas) · protocolos y roles aunque sean sueltos. Ocupa el lugar del dinero.
- **Cierre:** reconoce lo hecho (*"tus 48 recetas ya dicen qué llevan y cómo se hacen: es la parte más difícil y ya está"*).
- En la pág. 3, el paso 2 pasa a ser *"dar de alta tu inventario desde los 86 ingredientes"* (86 altas · con las facturas en la mano), desaparece el paso de ingredientes faltantes, y la rutina del estado de resultados se vuelve la que más importa (*"empezando por el último que tengas"*). En la pág. 4, "no leímos" nombra los cinco documentos y cuál cambia más el reporte.

**Regla:** cuanto menos manda, más dice el documento *con qué basta*; nunca aparece un cero sin su razón.

## 4. Página 2 · Lo que sale de tus documentos

Por área, **solo donde hubo documento**, y cada área con el mismo patrón: **qué hay · qué frena · qué permite** (rótulos en versalitas teal). Subtítulo de la página cuando faltan documentos: *"Esta vez leímos recetario y menú; lo demás se mide cuando lo tengas."*

### 4.1 Recetas y menú

**Con costeo — abre con la tabla, no con los conteos:**
- **"Lo que dicen tus N recetas costeadas"**: dos tablas, las cinco de food cost más alto y las cinco más bajo, con nombre y %. Línea de lectura debajo: rango (*"van de 18% a 47%"*), qué insumo comparten las más altas y si ese insumo subió, y de qué fecha es el costeo (*"es de julio y no se ha recalculado con los precios de agosto"*).
- **Qué hay** en una línea: *48 con procedimiento · 44 con cantidades completas · 29 con porción · 31 con costo.*
- **Qué frena** en tres renglones, uno por hallazgo, sin listas de nombres: *19 recetas sin porción: dicen qué llevan, no para cuántos · 7 platillos del menú sin receta: se venden sin saber qué dejan · 3 recetas que ya no están en el menú.* Los nombres de los platillos van al anexo (o a una tabla corta si sobra espacio).

**Sin costeo — la tabla cambia, no el lugar:**
- **"Los insumos que más pesan en tu recetario"**: los diez ingredientes que más recetas llevan (*limón 40 de 48 · cebolla morada 38 · camarón 31…*). Línea de lectura: cuántos ingredientes distintos usan las recetas (*86*), *"cuando sube el camarón, toca 31 de tus 48 recetas"*, y qué agrega el costeo (*"con costeo, esta tabla dice cuánto le pega a cada platillo"*).
- Qué hay / qué frena igual; **qué permite**: *"con las 19 porciones, cada receta dice para cuántos rinde. Con un precio por insumo, las 48 se costean de una vez: la lista de los 86 ya está."*

**Con menú:** siempre se cruza menú ↔ recetario (platillos sin receta · recetas fuera del menú).

### 4.2 Inventario y compras

- **Con documento:** qué hay (insumos con unidad, con presentación de compra, % de ingredientes de recetas que existen en inventario) · qué frena (insumos sin presentación de compra: *"sabes que compras 'una caja de camarón', no cuánto cuesta el gramo que va a la receta"* · ingredientes de recetas que no están en el inventario) · qué permite (*"con la presentación de compra, el costo por platillo se recalcula solo cada vez que entra una factura"*).
- **Sin documento (una línea, en positivo):** *"No leímos inventario ni compras. Tus recetas ya traen la lista: 86 ingredientes distintos, con la unidad en que los usa cada receta. Ese es el inventario con el que se arranca; lo que hace falta es la presentación en que compras cada uno y su precio."*

### 4.3 Costos y resultados

- **Con documento:** qué hay (meses completos, líneas presentes, compras por proveedor) · qué frena (líneas que no aparecen como propias, p. ej. luz/agua/gas) · **qué se movió** (food cost por mes; qué subió en compras; si las ventas se movieron: *"la subida es de insumos, no de volumen"*).
- **Sin documento:** *"No leímos costos ni estado de resultados. Cuando los tengas, aquí se leen contra el rango de tu segmento y sale lo que vale un punto de food cost en tu operación, en pesos. Basta con el estado de resultados de un mes."*

### 4.4 Lo que hoy depende de una persona clave

*(Antes "Operación escrita". Lleva la misma frase que el índice B para que el lector conecte el número de la pág. 1 con su explicación.)*
- **Qué hay:** los procesos escritos de los 8 (*"1 de los 8 procesos clave"*; sin documentos: *"ningún proceso escrito de los 8 clave. Lo que sí está escrito son las recetas: 48 con procedimiento. Es la parte de la operación que ya no depende de la memoria."*).
- **Qué se ejecuta de memoria:** los procesos restantes, nombrados.
- **Dónde se nota:** tres ejemplos concretos con dato, en el lenguaje del dueño, elegidos según lo que haya: *Porcionar el camarón y el pulpo* (recetas sin porción) · *Recibir mercancía* (insumos sin presentación de compra; si no hay inventario → *Medir en la cocina*: unidades que solo entiende quien ya trabaja ahí) · *Enseñar a alguien nuevo* (procesos de memoria + rotación declarada: *"en seis meses entraron 4 personas: cada una aprendió viendo"*).

### 4.5 Cierre de la página · "Lo que nos dijiste y lo que vimos" — el espejo

Bloque de bisagra entre la evidencia (pág. 2) y el camino (pág. 3). Convierte el reporte en una respuesta al problema que el dueño declaró, con sus palabras. Cuatro partes, en una caja con borde teal:

1. **Lo que nos dijiste** *(etiqueta "declarado por ti")* — su frase **textual**, entre comillas, tal como la escribió en el onboarding. Nunca parafraseada ni interpretada (disciplina de Voice of Customer). Ejemplo: *"Los insumos suben cada mes y yo me entero hasta el cierre. Y si no estoy, la cocina no sale igual."*
2. **Lo que vimos en tus documentos** — dos o tres datos que **ya están** en las págs. 1-2, citados, no repetidos ni nuevos. Se eligen los que explican su frase.
3. **Por qué pasa** — el mecanismo en una o dos oraciones, causa → efecto, **sin gramática de déficit** (nunca "no sabes", "no tienes", "no conoces tus números"; nunca vocabulario de consultor como "ingeniería de menú"). Ejemplo: *"El precio cambia en la factura, pero el costo de cada platillo se quedó en julio. Nada conecta las dos cosas, así que la diferencia aparece donde se juntan todas: en el cierre."*
4. **Qué lo cambia** — una oración con lo que lo resuelve y el puente: *"Por ahí empieza tu camino, en la página siguiente."*

Reglas: **un problema, máximo dos** — el que sus documentos puedan explicar; si declaró más, los demás en una línea cada uno con *"esto se lee cuando tengamos X"*. Si no declaró ninguno, el bloque no aparece. **El deseo** (lo que quiere que cambie) no va aquí: abre la pág. 3 como marco del camino (§5). **Requisito de onboarding:** capturar el problema y el deseo en texto libre — los cinco problemas del ICP (`04-go-to-market/11` §3) como opciones + campo abierto `[Alan verifica]` si hoy se pregunta.

Nota de maquetación: para que el espejo quepa, la pág. 2 lleva el título en una línea (sin rótulo "Página 2" ni subtítulo aparte) y el patrón *qué hay / qué frena / qué permite* en líneas cortas.

### 4.6 Con dos o más sucursales

Entra una comparación lado a lado (inventario · equipo · costos) por sucursal, con total. El recetario suele ser uno para todas; inventario, equipo y procesos son por lugar. `[Diseño pendiente]`.

## 5. Página 3 · Tu camino, en orden — construida 21-sep

Se lee de arriba abajo como la respuesta a lo que él pidió. Título en una línea: *"Tu camino, en orden · primero lo que desbloquea dinero; solo se pide lo que ya corre en Zenet"*.

### 5.1 "Lo que quieres que cambie" — el deseo, arriba

Misma caja que el espejo de la pág. 2: **su deseo textual** con la etiqueta "declarado por ti" (*"Quiero saber cuánto me deja cada platillo sin esperar al cierre, y poder irme tres días sin que la cocina cambie."*) y al lado **"Qué lo hace posible"**: dos o tres líneas que apuntan a pasos y secciones concretas, marcando qué es hoy y qué entra con cada sección en construcción.

### 5.2 El camino, en dos tiempos

**Regla dura:** es la parte de *instrucciones* del documento → **solo se numera lo que ya corre en Zenet**. Lo que no corre va sin número, en gris, con *"[Sección] · en construcción"*. (Misma regla que la landing: la narrativa describe el camino; las instrucciones solo piden lo que funciona.)

- **"Una vez · capturas":** los pasos numerados, cada uno con qué (con el conteo) · **qué desbloquea** · **a qué índice le pega** · dónde y cuántas capturas (*Recetas · 19 capturas · tú dices cuánto rinde, Zenet lo carga*). Orden: primero lo que desbloquea dinero. Escribir los procesos va sin número mientras el Manual Operativo esté en construcción.
- **"Cada semana, cada mes · rutinas — son las que mantienen vivos los números":** marca propia (*sem* / *mes* en peach). **Cada factura a Compras el día que llega** (hoy) → *saber qué subió y cuánto ese mismo día, no al cierre; con los pasos 1 y 2, cuánto le pega a cada platillo*. **El estado de resultados de cada mes** → Costos, en construcción; mientras, se manda a Zenet y se corre a mano → *tus números contra el rango cada mes, y que este diagnóstico se vuelva a correr*. Razón: el modo de falla post-firma no es el software, es la disciplina (`02-customer-research/06` §4.6); el reporte tiene que pedir las rutinas.
- **No entra aquí** el hallazgo *"tus costos están altos"*: vive en la pág. 1 (cifra) y en el espejo de la 2 (porqué). Un solo lugar.

### 5.3 "Cómo se completa en Zenet" — el mapa de la 1.0

*(Decisión del fundador, 21-sep: mostrar la versión completa para que el dueño vea hacia dónde va lo suyo.)* Es **narrativa**, separada de las instrucciones. Cabecera: *"la versión completa, en construcción con los primeros Socios Fundadores. Lo que dice 'hoy' ya corre; lo demás, tu operación lo moldea."* **Sin fechas.**

Cinco columnas, alineadas a la navegación, cada una con etiqueta **hoy** (mint) o **en construcción** (borde gris), ítems con punto teal (hoy) o gris (en construcción), y *"aquí aterrizan los pasos N"*:
1. **Compras** — hoy: qué subió y cuánto, con cada factura · costo por insumo, al día · en construcción: recosteo, qué platillo te deja qué.
2. **Estandarización** — hoy: Catálogos · Recetas · Inventario · Equivalencias · en construcción: Protocolos.
3. **Costos** — en construcción: tus números contra el rango, cada mes · qué se movió y por qué (*"lo que hoy lees en este diagnóstico, vivo"*).
4. **Manual Operativo** — en construcción: los 8 procesos clave, escritos · roles y accesos para tu equipo (multiusuario).
5. **Zenet por WhatsApp** — en construcción: le preguntas sobre este diagnóstico · le mandas la factura y te dice qué tocó. *(El asistente no se nombra como entidad: es "le preguntas a Zenet".)*

`[Alan verifica]` qué está "hoy" en cada columna (asumido: Compras con variación y costo por insumo; Estandarización sin Protocolos) y si el recosteo vive en Compras o en Costos. **Vocabulario:** nunca "ingeniería de menú" → *"recosteo: qué platillo te deja qué"*.

### 5.4 Cierre — la frontera honesta

*"Lo que este documento no dice: qué platillo subir de precio, qué proveedor cambiar ni qué quitar del menú. Eso lo decides tú. Zenet te pone los números enfrente y los mantiene al día."* Al pie de la página, con aire.

**Fuera de la pág. 3:** la proyección de índices ("cómo se leen el mes que viene") — sobra porque la pág. 1 ya da el número recalculado en "qué lo sube más rápido", y en cuatro celdas sueltas no se entendía (el fundador: "no entiendo esta sección").

## 6. Página 4 · El mes que viene, y el detalle — construida 21-sep

Dos estados de la misma página:

- **Primer diagnóstico:** abre con **la nota de línea base** (una caja con borde teal, tres líneas): *"Este diagnóstico es tu línea base. El mes que viene se vuelve a correr con tus documentos nuevos y cada número de aquí —los dos índices, tu food cost, lo que vale un punto— aparece junto al nuevo, con lo que se movió. Lo que cambie será por lo que hayas capturado; lo que no, también se verá."* Título: *"El mes que viene, y el detalle"*. Cabe en 4 páginas.
- **Del segundo en adelante:** abre con la tabla **"Hoy contra tu línea base"**: columnas *línea base · hoy · se movió · por qué*; filas: los dos índices · food cost · prime cost · margen · nómina y ocupación · lo que se movió en pesos (con la cuenta) · recetas con costo · platillos del menú sin receta · procesos clave escritos. Lo que no cambió dice *"igual"* y por qué. Título: *"Lo que se movió, y el detalle"*. **Para que la tabla tenga aire, el anexo sigue en una página 5** (decisión del fundador: no apretar; 5 páginas está bien).

**Anexo** (rótulo *"se consulta, no se lee de corrido"*):
- **Lo que encontramos en las unidades**: unidades duplicadas e inconsistentes, una sola vez aquí.
- **Lo que se nombró en las páginas anteriores**: los platillos del menú sin receta (con su paso) · los ingredientes de recetas que no están en inventario (con su paso) · las recetas fuera del menú. En el mes 2 desaparece lo ya resuelto; lo pendiente va como fila de la tabla.
- **Lo que leímos** por tipo · **"no leímos"** y que se incorpora cuando exista.
- **De dónde salen los rangos** con su fuente. `[Alan verifica]` la fuente real de los rangos del motor; en el ejemplo, ilustrativos.
- **¿Dudas sobre este diagnóstico?** — línea de contacto antes de la nota legal: en la Fase A, *"Escríbele a Alan por WhatsApp al +52 664 194 6634 o a alan@zenetapp.com. En la Fase de Socios Fundadores, Alan está en tu operación cada semana."* Cuando exista el asistente (§9), pasa a *"pregúntale a Zenet por WhatsApp"*. No en el pie de página (se repite y se ensucia). Un buzón genérico (hola@) solo si existe y le llega a alguien.
- **Sobre este documento**: fecha, propiedad de los datos, método e índices de Zenet, © Zenet®; en el ejemplo, la nota de datos ficticios.
- **Cabecera:** el imagotipo real de Zenet (vector del brandbook, charcoal) en todas las páginas; **la portada solo lleva el logo** (el título de abajo ya dice de quién es); las páginas interiores llevan el encabezado corrido *"Diagnóstico · [restaurante]"*.
- Nunca una página con un solo párrafo.

**Fuera de la pág. 4 (decisión 21-sep):** una comparación entre lo que vale un punto y lo que cuesta Zenet ("Zenet vale menos que eso"). Razones: el ejemplo va en el primer toque y el precio no se lee, se dice; el reporte no puede afirmar que Zenet recupera el punto; y funciona mejor dicho por Alan en la mesa con la pág. 1 enfrente. El número del punto queda imposible de no ver en la pág. 1; la comparación la pone la persona.

## 7. Lo que el onboarding pide de más

Tres preguntas nuevas. Las dos primeras en la misma pantalla donde declara sucursales y alimentan el índice B y el bloque "Tu equipo":
1. **Personas que trabajan hoy, por área:** cocina · piso · otros. Si mandó nómina, Zenet propone el número y él confirma.
2. **Cuántas personas entraron y cuántas salieron en los últimos seis meses.**
3. **Qué es lo que más te está pegando hoy** y **qué quieres que cambie** — texto libre, con los cinco problemas del ICP como opciones. Alimentan el espejo (§4.5) y la apertura de la pág. 3. `[Alan verifica]` si el onboarding ya lo pregunta.

Con 2+ sucursales, las dos preguntas se responden por sucursal. Todo lo que responde aquí lleva la etiqueta *"declarado por ti"* en el reporte.

## 8. Contrato de generación — lo que necesita un agente para producir este reporte

El reporte lo generan los agentes de Zenet a partir de los documentos leídos en el onboarding. Este contrato dice qué entra, qué sale y qué reglas aplican. No dice cómo se implementa.

### 8.1 Entradas

| Entrada | De dónde | Alimenta |
|---|---|---|
| Recetario (recetas con procedimiento, cantidades, unidades, porciones, categoría, costo si lo hay) | documento | índice A · pág. 2 recetas · camino · anexo unidades |
| Menú (platillos, precios) | documento | cruce menú ↔ recetario |
| Inventario (insumos, unidad, familia, presentación de compra, precio) | documento | índice A · pág. 2 inventario · camino |
| Costos desglosados / compras (por insumo, por mes) | documento | "qué subió en tus compras" · tendencia |
| Estado de resultados (uno o más meses: ventas, costo de venta, nómina, renta, servicios, utilidad) | documento | tus números · el punto · lo que se movió |
| Operación escrita (protocolos, roles, servicio, higiene, capacitación) | documento | índice B · pág. 2 persona clave |
| Personas por área · altas y bajas 6 meses · problema · deseo | **declarado** en el onboarding | índice B "tu equipo" · espejo · deseo |
| Rangos de referencia del segmento | **sector** (fuente fija, citada en el anexo) | tus números |
| Sucursales declaradas | declarado | cabecera · por sucursal |
| Diagnóstico anterior (si existe) | Zenet | mes 2: línea base |

### 8.2 Cálculos canónicos

- **Índice A** = promedio(Recetas, Inventario). *Recetas* = promedio de % con procedimiento, % con cantidades completas, % con porción. *Inventario* = promedio de % con unidad, % con presentación de compra. Componente sin documento = 0, etiquetado *"no leímos"*. Normalización se calcula (% de unidades con equivalencia) y se muestra, no suma.
- **Índice B** = promedio(procesos clave escritos ÷ 8, recetas con porción **y** todas sus unidades con equivalencia ÷ total).
- **"Qué lo sube más rápido"** = simular las 1-2 capturas que más mueven el promedio y reportar el índice resultante (redondeado, con "~"). Si no hay simulación, solo nombrar las capturas.
- **Tus números** = cada métrica ÷ ventas del último mes leído; rango del sector; tres lecturas (dentro · tensión real · por debajo favorable) + "revisa el dato" cuando falte una línea esperada (luz/agua/gas en ocupación).
- **Lo que vale un punto** = 1% del promedio de ventas de los meses leídos. **Arriba del techo** = (métrica − techo) × punto, solo si > 0. **Cada $10,000** = 10,000 × (1 − food cost).
- **Tendencia** = la métrica por mes leído; "qué subió en tus compras" = los 3 insumos con mayor variación de precio entre los dos últimos meses.
- **Insumos que más pesan** (sin costeo) = ingredientes ordenados por número de recetas que los llevan.
- **Costeadas** = las 5 recetas de mayor y las 5 de menor food cost; la línea de lectura cruza con los insumos que subieron.
- **Mes 2** = cada métrica e índice contra el diagnóstico anterior; "lo que se movió" = Δ puntos × punto.

### 8.3 Reglas de redacción para el agente

1. Plantillas fijas con espacios, no prosa libre. Cada bloque tiene su copy canónico en este spec; el agente rellena números, nombres y listas.
2. **Prohibido:** "huecos", "falta / le falta", "no tienes sistema", "áreas de oportunidad", "todavía no lo tienes", "ingeniería de menú", vocabulario técnico o de consultor, nombres de agentes. **Permitido:** "no leímos X" seguido de qué se leería y con qué basta.
3. Cada cifra lleva su origen: *tuyo · [documento] de [mes]* · *declarado por ti* · *del sector*.
4. Las frases del dueño (problema, deseo) van **textuales**, entre comillas, sin corregir ni parafrasear.
5. En "por qué pasa" y "qué lo cambia": causa → mecanismo → efecto, una o dos oraciones, sin "no sabes / no conoces".
6. Los ejemplos de "dónde se nota" se eligen según lo que haya: porcionar (recetas sin porción) · recibir mercancía (insumos sin presentación) o medir en la cocina (unidades sin equivalencia) · enseñar a alguien nuevo (procesos de memoria + rotación declarada).
7. Nombres de sección = navegación actual de la app. Solo se numera lo que ya corre; lo demás, *"[Sección] · en construcción"*, sin fecha.
8. Nunca comparar con el precio de Zenet ni afirmar que Zenet recupera un punto.

### 8.4 Control de calidad antes de emitir

- [ ] Ninguna palabra prohibida (§8.3.2). — [ ] Ningún cero sin su razón. — [ ] Cada cifra con origen. — [ ] Las frases del dueño textuales. — [ ] Nombres de sección vigentes. — [ ] Pasos numerados = solo lo que corre. — [ ] 4 páginas (5 en el mes 2); ninguna página con un solo párrafo. — [ ] Sin sangrado de bloques sobre el pie. — [ ] El ejemplo de venta lleva *"Ejemplo · datos ficticios"* en cada página, sin precio, sin "lo que se movió".

## 9. El asistente del diagnóstico — "le preguntas a Zenet"

Es la primera columna "en construcción" que el dueño ve en el mapa de la 1.0: *Zenet por WhatsApp · le preguntas sobre este diagnóstico*. Define lo mínimo para diseñarlo en el repo de producción; el nombre interno del agente no aparece nunca frente al dueño (los agentes no se nombran; es Zenet).

- **Qué sabe:** este documento completo, los datos de los que salió (recetas, inventario, estado de resultados…), este spec (para explicar qué significa cada bloque y cómo se calculó), y el diagnóstico anterior si existe.
- **Para qué sirve:** aclarar el diagnóstico. *"¿Por qué mi índice es 46?"* → los dos componentes y qué lo sube. *"¿De dónde sale el $4,100?"* → la cuenta y el documento. *"¿Qué recetas no tienen porción?"* → la lista. *"¿Qué pasa si subo el precio del aguachile?"* → **no propone**: dice cuánto cuesta hoy el aguachile y qué margen tiene, y que decidir el precio es suyo.
- **Frontera (la misma del documento):** no dice qué platillo subir de precio, qué proveedor cambiar ni qué quitar del menú; no inventa un dato que no esté en los documentos (si no está, dice qué documento haría falta y con qué basta); no compara con el precio de Zenet; no promete fechas de lo que está en construcción.
- **Voz:** la de Zenet (`Branding/_context/04-voice-and-tone/`): tú, lenguaje del operador, sin tech, sin hype, una idea por mensaje, el porqué y no solo el qué. En WhatsApp: mensajes cortos, un número por mensaje cuando se pueda, y la cifra siempre con su origen.
- **Sin gramática de déficit** (§1.3) también hablando: *"tus recetas dicen qué llevan; con porciones dirían cuánto cuestan"*.
- **Cuándo pasa a Alan:** cuando la pregunta es de decisión (*"¿qué hago con el camarón?"*), cuando pide algo que está en construcción, o cuando el dato no cuadra con lo que él sabe. En la Fase A, Alan está adentro cada semana: el asistente lo dice.
- **Registro:** cada pregunta se guarda como Voice of Customer (qué no se entendió del reporte alimenta la siguiente versión del spec).

## 10. Descartado, con razón

- **Índice de "capacidad de crecimiento" / escalabilidad** (¿aguanta 10x–30x?): no es calculable, es un juicio; el escenario está fuera de escala para 1–2 sucursales; el ICP de la Fase A compra tranquilidad y tiempo, no escalamiento. Sobrevive como la línea *"cada $10,000 más que vendas"*.
- **Costo de rotación en pesos con dato del sector**: sería una estimación ajena presentada como suya.
- **Varianza teórico contra real** en la pág. 1: requiere conteo de cierre; el producto no lo captura hoy.
- **"Brecha mensual estimada"** como cifra: reemplazada por el punto y por "lo que hoy estás arriba del techo".
- **"Zenet vale menos que un punto"** dentro del documento (§6).
- **Proyección de índices en cuatro celdas** en la pág. 3/4 (§5.4).
- **"Ahorros desde que tienes Zenet"** como rótulo → *"lo que se movió desde tu línea base"* (§3.5).
- **Referencias a "paso N del camino"** en la pág. 1: el camino vive en la pág. 3.

## 11. Pendientes

- Diseño de la comparación por sucursal (§4.6).
- Rediseñar el reporte actual del onboarding con esta estructura (repo de producción) · alinear los agentes que lo generan al contrato de §8 · diseñar el asistente de §9.
- `[Alan verifica]` la lista de 8 procesos clave contra el Manual Operativo · qué está "hoy" en cada columna del mapa 1.0 · dónde vive el recosteo · la fuente real de los rangos · si el onboarding ya pregunta problema y deseo.
- Decidir si el diagnóstico de ejemplo de la venta (Task 43) sale de este mock o del reporte actual con corpus ficticio.

---

*Historial: v1.0 (2026-09-21) — primera versión oficial: las cuatro páginas cerradas en tres versiones + contrato de generación (§8) + asistente (§9) + fuente de los mocks en git. v0.1 (2026-09-21) — págs. 1 y 2 cerradas con el fundador el 18 y el 21 de septiembre (la 2 con el espejo "lo que nos dijiste y lo que vimos"); págs. 3 y 4 construidas con él el 21 (deseo · camino en dos tiempos · mapa 1.0 · línea base) y la versión del mes 2 ("lo que se movió"); pendiente la revisión completa.*
