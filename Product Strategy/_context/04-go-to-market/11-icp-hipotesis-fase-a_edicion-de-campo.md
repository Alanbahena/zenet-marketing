---
name: ICP de hipótesis — Fase A · edición de campo
description: "Versión corta y legible del ICP de hipótesis de la Fase A para llevar a la mesa y revisar con pluma. Doce páginas, una idea por página — qué es la Fase A · las seis hipótesis · el experimento · el ICP · dónde buscar y quién califica · lo que le pesa y lo que quiere · a quién no · en la mesa · el marcador hoy. Se regenera desde 11-icp-hipotesis-fase-a.md (el canon) y 10-scorecard-fase-a.md; no contiene etiquetas de origen ni trazabilidad — eso vive en el doc 11. Salida — HTML + PDF en _export/ (Chrome headless)."
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-09-08
status: draft
version: 0.1
owner: Alan Bahena
---

<!--
BUILD (desde 04-go-to-market/):
  pandoc 11-icp-hipotesis-fase-a_edicion-de-campo.md -s --metadata title="ICP de hipótesis — Fase A · edición de campo v0.1" -o _export/icp-fase-a_edicion-de-campo.html
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=6000 --print-to-pdf="$PWD/_export/icp-fase-a_edicion-de-campo.pdf" "file://$PWD/_export/icp-fase-a_edicion-de-campo.html"
-->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@500;600;700&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">

<style>
:root{--ac:#2E6E62;--ac2:#265C52;--ch:#1F2421;--ch2:#3d4642;--off:#FAF7F2;--paper:#FFFCFA;--mint:#BFE2D9;--peach:#F4DED0;--line:#d8d2c8;--fd:"Onest",-apple-system,Helvetica,Arial,sans-serif;--fb:"Hanken Grotesk",-apple-system,Helvetica,Arial,sans-serif}
@page{size:letter;margin:13mm 14mm 13mm 14mm}
html{background:var(--off)}
body{font-family:var(--fb);color:var(--ch);font-size:15px;line-height:1.5;max-width:820px;margin:0 auto;padding:0 20px 60px}
header#title-block-header{display:none}
h1,h2,h3,h4{font-family:var(--fd);color:var(--ac);line-height:1.2;margin:0 0 .4em}
h2{font-size:1.55em;font-weight:700;padding-bottom:6px;border-bottom:2px solid var(--ac);margin-bottom:.7em}
h3{font-size:1.08em;font-weight:600;color:var(--ch);margin-top:1.3em}
p{margin:.45em 0 .8em}
strong{color:#14161B}em{color:var(--ch2)}
blockquote{border-left:3px solid var(--ac);background:var(--paper);margin:.8em 0;padding:.5em 14px;color:var(--ch)}
blockquote p{margin:.3em 0}
table{border-collapse:collapse;width:100%;margin:.7em 0 1em;font-size:.86em;line-height:1.35}
th,td{border:1px solid var(--line);padding:.42em .55em;vertical-align:top;text-align:left}
th{background:var(--mint);color:var(--ch);font-family:var(--fd);font-weight:600}
tr:nth-child(even) td{background:var(--paper)}
code{font-family:ui-monospace,Menlo,monospace;font-size:.85em;background:#efece6;padding:.05em .3em;border-radius:3px}
hr{border:none;border-top:1px solid var(--line);margin:1.2em 0}
ul,ol{padding-left:1.25em}li{margin-bottom:.35em}
.page{padding:28px 0 8px}
.eyebrow{font-family:var(--fd);font-size:.72em;letter-spacing:.14em;text-transform:uppercase;color:var(--ac);font-weight:600;margin:0 0 .5em}
.cover{min-height:88vh;display:flex;flex-direction:column;justify-content:center;padding:40px 0}
.cover h1{font-size:2.6em;font-weight:700;margin:.2em 0 .25em;color:var(--ch)}
.cover .sub{font-family:var(--fd);font-size:1.25em;color:var(--ac);font-weight:600;margin:0 0 1.2em}
.cover .meta{color:var(--ch2);font-size:.95em;line-height:1.7}
.cover .rule{width:56px;height:4px;background:var(--ac);margin:1.6em 0}
.kicker{font-family:var(--fd);font-size:1.02em;color:var(--ch2);margin:-.3em 0 1em}
.callout{background:var(--peach);border-radius:6px;padding:.7em 14px;margin:.9em 0}
.callout p{margin:.25em 0}
.foot{color:var(--ch2);font-size:.8em;margin-top:1.6em;border-top:1px solid var(--line);padding-top:.5em}
.two{display:grid;grid-template-columns:1fr 1fr;gap:18px}
@media print{
  html,body{background:#fff}
  body{max-width:none;padding:0;font-size:10.3pt;line-height:1.4}
  p{margin:.35em 0 .6em}
  h2{font-size:1.45em;margin-bottom:.5em}
  h3{margin-top:.9em;font-size:1.02em}
  table{font-size:8pt;line-height:1.28;margin:.5em 0 .7em}
  th,td{padding:.32em .45em}
  blockquote{margin:.6em 0;padding:.4em 12px}
  .callout{padding:.55em 12px;margin:.7em 0}
  .kicker{margin:-.2em 0 .7em}
  ul,ol{margin:.3em 0 .6em}li{margin-bottom:.22em}
  .page{break-after:page;padding:0}
  .page:last-of-type{break-after:auto}
  .cover{min-height:auto;padding:120px 0 0}
  h2,h3{break-after:avoid}
  table,blockquote,.callout{break-inside:avoid}
  p,li{orphans:3;widows:3}
  a{color:inherit;text-decoration:none}
}
</style>

<section class="page cover">

<p class="eyebrow">Zenet · Product Strategy · Fase A</p>

# ICP de hipótesis — Fase A

<p class="sub">Edición de campo · v0.1 · 8 de septiembre de 2026</p>

<div class="rule"></div>

<p class="meta"><strong>Un experimento, no el canon.</strong> El perfil con el que la Fase A sale a buscar sus primeros Socios Fundadores — escrito para confirmarse o tumbarse con conversaciones reales.<br><br>Se lee de corrido en veinte minutos. Se relee antes de cada conversación. Se corrige con pluma.<br><br>Fuente: <code>11-icp-hipotesis-fase-a.md</code> (canon, con etiquetas de origen y trazabilidad) · <code>10-scorecard-fase-a.md</code> (el marcador) · <code>06-plan-de-activacion-y-validacion-fase-a.md</code> (las hipótesis y el gate).</p>

</section>

<section class="page">

<p class="eyebrow">1 · El contexto</p>

## Qué es la Fase A y para qué existe

<p class="kicker">La fase de validación previa a firmar. Comprobar con operadores reales —no con opiniones— que el problema, el valor y la diferencia de Zenet existen para un perfil concreto, y que ese perfil está dispuesto a dar tiempo, documentos y dinero.</p>

### Cómo se valida

- **Mom Test.** Se habla de su vida, no de nuestra idea. Nada de pitch hasta el final, y corto.
- **Revelado > declarado.** Lo que hizo pesa más que lo que dijo. Un *"me encanta"* no mueve nada; un documento que llega el jueves, sí.
- **Kill criteria de antemano.** Se decide antes de la conversación qué señal tumbaría la hipótesis — y se busca activamente.
- **Bajo N = cualitativo.** Con cinco u ocho conversaciones no hay estadística; hay patrones y dirección.

### Cuándo termina — el gate a la Fase B

Dos condiciones, **juntas**:

| | Condición | Umbral |
|---|---|---|
| **(a) Validación** | La propuesta de valor la reconocen suficientes personas del perfil correcto (H1-H3) | 🟢 sobre 5-8 conversaciones |
| | Compromisos **revelados** — mandaron docs, dieron un intro, agendaron (H4) | ≥ 3-4 |
| | Intent-to-join — *"quiero entrar"*, conociendo el precio y los términos | ≥ 1-2 |
| | El problema le cuesta algo hoy (H6) | no en 🔴 |
| **(b) Readiness** | App V1 demostrable | ✅ desde el 30-ago |
| | Legal listo — entidad · contratos en borrador | ⬜ |

Al cruzar: se firman Socios Fundadores (programa con 20-30% de descuento permanente), onboarding high-touch, blitz presencial en Tijuana y el reveal público.

### Dónde estamos — 8 de septiembre

<div class="callout">

**9 semanas · 5 sesiones · 2 con operadores · 1 conversación del ICP de Fase A · perfil ③ nunca tocado · 7 semanas sin movimiento, 4 consecutivas.** Todo lo que dependía de construir está hecho — landing, demo, producto V1 completo en desktop y móvil. Lo que no avanza son las conversaciones. Y las tres sesiones con operadores reales cayeron *alrededor* del beachhead declarado, nunca en su centro.

**Por eso este documento: el blanco se redefine.**

</div>

</section>

<section class="page">

<p class="eyebrow">2 · Las hipótesis</p>

## Las seis cosas que la Fase A existe para averiguar

<p class="kicker">Definidas el 2 de julio, antes de la primera conversación. H1-H3 juntas son la propuesta de valor; H4 el deseo real; H5 el camino; H6 el dinero detrás.</p>

| | La pregunta, en plano | Qué la contesta (revelado) | Qué la tumba | Hoy |
|---|---|---|---|---|
| **H1 · El problema** | ¿Los dolores que creemos que tiene son los que **él** siente, con sus palabras? | *"Eso me pasa exacto"* · lenguaje espejo sin que se lo sugieras · sin defensividad | Se ofende · aparece otro dolor mayor, repetido | 🟡→🟢 · Miguel: la carga como dolor #1 |
| **H2 · El valor** | Cuando le contamos qué hace Zenet, ¿**conecta** con su dolor — o le suena a *"otro software más"*? | Conecta el valor con su dolor top · *"¿cómo consigo esto?"* | *"¿Es otro software más?"* · le importa otra cosa | 🟡 · Arballo lo dijo · nunca probado sin Alan presente |
| **H3 · La diferencia** | ¿Ve a Zenet como algo **distinto** de lo que ya tiene — su cabeza, su Excel, su POS? | Articula **solo** por qué es distinto | *"Yo ya tengo sistema"* | 🟢 direccional · Alfonso: *hardware-agnostic*, solo |
| **H4 · El compromiso** | ¿Está dispuesto a **dar** — documentos, una segunda junta, un intro? | **Lo cumple.** Manda, agenda, presenta | Entusiasmo + cero acción · *"mándame info"* y desaparece | 🟡 · Carlos sí (perfil ①) · Miguel abierto |
| **H5 · El canal** | ¿Por qué **camino** llegamos a él? | Cuál produce conversaciones reales | — | 🟡 partido · **tibio funciona, frío no** (7 mensajes por LinkedIn, ninguno visto) |
| **H6 · El pozo de valor** | ¿Le **cuesta** algo hoy este problema — horas, dinero, un empleado — y lo ve como necesidad, no como lujo? | Cuantifica un costo real · pide los pasos cuando oye el precio | *"No me cuesta nada, lo hago yo"* · *"está caro"* sin contrapropuesta | 🟡 · dos *"pagaría"* declarados, cero cuantificados · el precio no se ha dicho con el punto a nadie del ICP |

<div class="callout">

**La regla que gobierna todo:** *"¿cuánto pagarías?"* no se pregunta. Se pregunta *"¿cuánto te cuesta esto hoy?"* — y el precio **se dice**, no se consulta. Lo declarado se anota; lo revelado se cuenta.

</div>

</section>

<section class="page">

<p class="eyebrow">3 · El experimento</p>

## Qué apostamos — y cómo sabremos si nos equivocamos

> **Que el operador chico —1-2 sucursales, que carga la operación él mismo, joven y abierto a lo digital— tiene el dolor que Zenet resuelve, tiene de dónde extraer su sistema, y está dispuesto a dar tiempo, documentos y dinero por dejar de cargarlo.** Y que validar con él es más rápido que con el restaurante grande, porque decide solo, en semanas, sin comité.

**La secuencia:** chico → grande. Primero el que adopta primero; después los restaurantes tipo Alma Verde, con un disparador medible.

### Qué lo confirma

| Señal | Umbral |
|---|---|
| H1-H3 en 🟢 con el perfil ③/② | 5-8 conversaciones |
| **Hay de dónde extraer** — el análisis del producto corre con lo que el operador ya tiene (recetas sueltas · un Excel · fotos · el WhatsApp) y produce algo que reconoce como suyo | ≥ 3 de las primeras 5 |
| Compromisos **revelados** | ≥ 3-4 |
| Intent-to-join, conociendo el precio | ≥ 1-2 |
| H6 · pozo: cuantifica un costo real · H6 · precio: acepta el ancla cuando se le dice | no en 🔴 · ≥ 2 de 5 piden los pasos |

### Qué lo tumba

| Kill signal | Qué significaría |
|---|---|
| **No hay de dónde extraer** — 3+ operadores ③ sin recetas, listas ni registros, que piden que Zenet les *proponga* el sistema | El piso está más arriba. Se sube el piso (② · 2 sucursales · estandarización mínima), no se cambia el producto |
| **Dice que sí y no da** — entusiasmo alto + compromisos en cero, 3+ veces | El targeting *joven-abierto* selecciona curiosos → endurecer quién califica |
| **H6 🔴 en el rango bajo** — *"no me cuesta nada"* como respuesta dominante debajo de ~$300K/mes | El pozo no está donde apostamos: hacer visible el costo oculto o subir el piso de ventas |
| **El dolor que nombran no es la carga** — otro dolor mayor, repetido, que Fase 1 no toca | H1 falla para este perfil; se revisa la VP antes de seguir |

### Cuándo subimos de segmento

> Se abre el perfil ① (tipo Alma Verde · 3+ sucursales · gerente y comité) cuando haya **2-3 Socios Fundadores del perfil ③/② activos y con retención al Mes 3.** Por pre-condición, nunca por fecha. *(Umbral por fijar.)*

Mientras tanto el perfil ① no desaparece: entra por el **carril de producto** — feedback de la app y prueba del análisis con documentos reales — sin sumar al N.

</section>

<section class="page">

<p class="eyebrow">4 · El ICP</p>

## Quién es

> **El ICP de la Fase A es el dueño de un restaurante independiente de 1-2 sucursales en Tijuana —tres, si se da— que carga la operación él mismo, o entre 1-3 personas clave, y que ya siente lo que cuesta cargarla: en tiempo, en energía y en costos.**
>
> Su sistema funciona. Vive en su cabeza y en tres o cuatro herramientas que no se hablan, y se rompe cada vez que algo cambia: un precio, una receta, una persona. Suele ser joven, opera desde el celular y está abierto a probar herramientas nuevas. Y lo que más quiere no es crecer — es dejar de cargar todo lo que no sea la experiencia de su restaurante, y recuperar su cabeza.

### Los perfiles — el eje es cuánto han estandarizado ya, no cuántas sucursales tienen

| | Perfil | En la Fase A | Nota |
|---|---|---|---|
| **③** | **Independiente sin estandarizar** | **El centro** | El que nunca se ha tocado. Zenet extrae su sistema de lo que ya tiene |
| **②** | **Alta cocina / chef-dueño** | **Adyacente · entra** | Miguel · *fine dining ≠ documentado* · no quiere crecer, quiere su vida de vuelta |
| **②b** | **Cafetería con cocina propia** | **Entra si hay BoH que extraer** | Recetas o fichas · insumos que se compran y **transforman** · cocina de 2+ personas. Barra sin cocina = fuera. Vigilar H6 |
| **①** | **Estandarizado / gran producción** | **Fuera · carril de producto** | Alma Verde: ya estandarizado, el valor central no le hace falta. Sirve para feedback de la app y probar el análisis con sus documentos. **No suma al N** |
| — | *Control · bajo el beachhead* | **Fuera** | Juan Pablo: nada que extraer, pediría construcción. Define el piso |

### Tamaño

| | |
|---|---|
| **Sucursales** | centro **1-2** · aceptable **3** (a las 3 suele aparecer gerente y comité) · **4+ = después** |
| **Ventas** | **$200K – $2M MXN/mes**, total entre sucursales · debajo de ~$300K, H6 bajo vigilancia · el bucket *"menos de $200K"* del formulario = precaución, no exclusión |
| **Geografía** | Tijuana — dónde buscar, presencial primero. **No es filtro del N**: Miguel es de Ensenada y suma |

<div class="callout">

**Por qué el piso aguanta:** a $200K/mes, un punto porcentual de food cost son **$2,000**. Zenet a $1,500 cuesta menos que un punto incluso en el operador más chico del rango (a $1M son 0.15 puntos). Debajo de ~$300K el precio deja de ser invisible — ahí H6 se vigila, no se descarta.

</div>

</section>

<section class="page">

<p class="eyebrow">5 · El filtro</p>

## Dónde buscar no es lo mismo que quién califica

<p class="kicker">Joven y abierto a lo digital dice <strong>a quién le escribes</strong>. Sentir el número y tener algo que extraer dice <strong>quién suma al N</strong>. Lo primero es necesario para entrar; no es suficiente para contar.</p>

### Dónde buscar

**Joven, 20-45** · opera desde el celular · abierto a probar · **1-2 sucursales** · Tijuana · **cafeterías con cocina** y **chef-dueños**.
**Canales que ya produjeron:** referido tibio (Victor → Miguel) · programa de emprendimiento · jóvenes CANIRAC · Culinary Art School · contadores y consultores aliados. **Por abrir:** comunidad de emprendedores de **CETYS** · **conocidos de conocidos** — *"¿a quién conoces que tenga un restaurante chico y lo cargue solo?"* **LinkedIn no es primer toque con tibios** — WhatsApp o en persona.

### Quién califica

| | Eliminatorios — los tres o nada | | Calificadores — cuántos de seis se vieron |
|---|---|---|---|
| 1 | **Formal** — RFC · CFDI regular · 1+ año | 4 | Carga la operación él mismo |
| 2 | **Cocina propia** — hay back-of-house que extraer | 5 | **Siente el número** (no *"números conformes"*) |
| 3 | **El problema es estructural, no del equipo** | 6 | **Hay algo que extraer** — recetas sueltas, un Excel, fotos |
| | | 7 | Delega la carga, **no el criterio** |
| | | 8 | Ventas $200K – $2M |
| | | 9 | Decide solo, o con un socio claro |

### La regla de conteo — ¿esta conversación suma al N?

1. **Puerta:** pasa los tres eliminatorios.
2. **Termómetro:** se vieron **≥ 4 de los 6** calificadores — lo que no se sondeó cuenta como ausente. Con 2-3 se registra y se aprende; no suma.
3. **Quién valida qué:** el **gerente o chef** valida H1-H3 y H4 si cumple (*"esto muéstraselo al dueño"* es la mejor señal de H4). **Solo el que paga** valida H6 y el intent. El N se cuenta **por cuenta**, no por persona. En 1-2 sucursales, el dueño casi siempre es el operador: una conversación valida todo.

| Sesión | Interlocutor | Eliminatorios | Calificadores | ¿Suma? |
|---|---|---|---|---|
| Carlos · Alma Verde | gerente | ✓✓✓ | 4 | **No — solo por perfil ①** |
| Juan Pablo | dueño | formal ✗ | — | **No — puerta** |
| Miguel Bahena | dueño-operador | ✓✓✓ | 5 | **Sí** |

*Los umbrales son hipótesis: si todos suman, se sube a 5 de 6; si nadie suma, se revisa el filtro o el sondeo.*

</section>

<section class="page">

<p class="eyebrow">6 · El dolor y el deseo</p>

## Lo que le pesa

<p class="kicker">Cinco problemas, en el orden que el campo enseñó: la carga primero, los costos al final. Todos tienen costos; el ICP es quien los <strong>siente</strong>.</p>

| | | En sus términos |
|---|---|---|
| **P1** | **La carga.** Todo pasa por él — o por 1-3 personas clave. Y nada corre solo: corre con su energía, todos los días | *"apagar incendios"* · *"si no estoy, no sale"* |
| **P2** | **Se rompe cada vez que algo cambia.** Un precio, una receta, un proveedor, una persona. Lo que ordenó hace meses ya no describe cómo opera hoy | *"cambié la carta y el costeo ya no sirve"* |
| **P3** | **Todo se sostiene, pero nada se conecta.** Recetas en Excel, pendientes en WhatsApp, protocolos en un cuaderno, ventas en el POS. Lo único que las conecta es él | *"eso ya lo tengo en varias herramientas"* |
| **P4** | **Cada persona nueva empieza de cero.** Y cuando alguien clave se va, se lleva lo que sabía | *"lo capacito y se me va"* |
| **P5** | **Los costos suben y no siempre sabe por dónde.** Conoce el resultado —*"estoy en 32%"*— pero no la composición | *"no sé dónde se me va"* |

## Lo que quiere

> **Paz mental: poder delegar los problemas diarios del restaurante que no tengan que ver con las ventas ni con la experiencia del comensal.**

**Que desaparezcan de su día:** los incendios — permisos · rotación · capacitación · costos y calidad de proveedores · el margen apretado · **y el mantenimiento**: volver a acomodar la carta, el costeo y los procesos cada vez que algo cambia. *(“Incendios” es palabra de Miguel, no nuestra.)*

**Que recupere:** su cabeza. Y con ella, lo que lo llevó a abrir — la experiencia, la calidad, las ventas.

**Cómo lo diría** *(síntesis del fundador, no verbatim — se reemplaza el día que un operador lo diga solo)*:

> *"Desearía poder tener un asistente o un soporte que conozca toda mi operación y se haga cargo de los problemas y los fuegos diarios de mi negocio."*

<div class="callout">

**El guardarraíl:** delega **la carga**, no **el criterio**. *"Tú decides; Zenet lo carga."* Quien pide que la IA decida por él no es el perfil.

**Lo que esto dice de la propuesta de valor:** de las cuatro promesas —tiempo · dinero · tranquilidad · escalamiento— este ICP compra **dos: tranquilidad y tiempo**. *"Crece sin caos"* no es su mensaje; *"recupera tu cabeza"* sí. *(Miguel, N=1 — se confirma con 2-3 sesiones más.)*

</div>

</section>

<section class="page">

<p class="eyebrow">7 · A quién no</p>

## Los que parecen, pero no son

<p class="kicker">Un ICP que no excluye a nadie no es un ICP. Nueve anti-perfiles — los primeros tres los enseñó el campo.</p>

| | Anti-perfil | Cómo se manifiesta | Por qué no |
|---|---|---|---|
| **A1** | **Números conformes** | Tiene desperdicio y costos altos —como todos— pero no lo siente: *"así es el negocio"* | Sin dolor sentido no hay pozo de valor |
| **A2** | **Nada que extraer** | No opera todavía, o no tiene recetas, listas ni registros; pide que Zenet le *proponga* cómo operar | *"Zenet extrae, nunca propone"* — Fase 1 no construye criterio desde cero |
| **A3** | **Dice que sí y no da** | *"Me encanta"*, *"mándame info"* — y cero compromisos cumplidos | El curioso, no el comprador |
| **A4** | **Culpa al equipo** | *"Si todos hicieran bien las cosas no habría problema"* | Busca control sobre su gente, no un sistema |
| **A5** | **Quiere que la IA decida por él** | *"¿Tu sistema toma las decisiones?"* | Expectativa que el producto no cumple → churn temprano |
| **A6** | **Barra o café sin cocina** | Revende alimentos de terceros | No hay back-of-house — no hay dolor que Zenet toque |
| **A7** | **Switcher serial** | 3+ softwares abandonados en 2 años, razones genéricas | El problema no es el software |
| **A8** | **Sin decisor claro** | *"Yo decido pero mi socio tiene que aprobar"*, sin cuándo | El ciclo no cierra |
| **A9** | **Informal** | Sin RFC de actividad empresarial, sin CFDI | No puede contratar ni facturar |

**Fuera, pero no anti:** el perfil ① ya estandarizado. No es un mal cliente — es otro momento.

### Las cuatro preguntas que separan

| Pregunta | Detecta |
|---|---|
| *"¿Qué es lo que más te pesa hoy?"* | A1 · A4 · A5 |
| *"¿Qué tienes hoy de tu operación por escrito, aunque sea suelto?"* | A2 · A6 |
| *"¿Qué has probado antes y por qué lo dejaste?"* | A7 |
| **¿Cumplió lo que dijo que iba a mandar?** — la responde el tiempo, no la charla | A3 |

</section>

<section class="page">

<p class="eyebrow">8 · En la mesa (I)</p>

## Cómo se corre la conversación

### Cinco reglas

1. **Su vida, no nuestra idea.** Nada de pitch hasta el final — y corto.
2. **Específicos del pasado.** *"La última vez que…"* vale; *"¿usarías…?"* no vale nada.
3. **Revelado > declarado.** Cada señal se anota con su tipo.
4. **Lo que no se sondeó cuenta como ausente.** Se sondean los nueve criterios aunque la charla fluya.
5. **Nunca se termina sin un ask.**

### El orden — 25 minutos

> Su **día de ayer** *(la carga)* → **la última vez que algo salió mal** *(estructural)* → **la última vez que se le fue alguien clave** *(P4)* → **la última vez que le subió un insumo — qué pasó, cómo se enteró, qué hizo** *(P5 · H6)* → **cuánto le cuesta su platillo más vendido / cómo sabe cuánto le queda** → **qué tiene por escrito** *(extraer)* → **cómo enseña el platillo estrella · la última carta** *(perfil)* → **dónde vive su operación** *(P3)* → **quién más tendría que verlo** *(decide)* → **pitch de dos minutos** → **qué esperaría que hiciera — y qué no** *(delega la carga)* → **el ask.**

Formalidad y ventas se averiguan **antes** o llegan por `/hablemos`. **El precio no va aquí** — es del segundo contacto, salvo que él lo pregunte.

### Las preguntas que hacen que cuente — una por dolor

| | La pregunta | Confirma | Tumba |
|---|---|---|---|
| **P1** | *"Llévame por tu día de ayer."* · *"¿Qué pasa si te vas tres días?"* | Una cadena de incendios · aparece la energía, no solo el tiempo | *"Mi gerente lo ve"* |
| **P2** | *"¿Cuándo cambiaste la carta por última vez — y qué tuviste que actualizar después?"* | Nombra la cascada: receta → costo → capacitar → el Excel · o confiesa que no actualizó nada | *"Nada, ya estaba todo"* (→ ①) |
| **P3** | *"¿Dónde vive hoy tu operación? Si sube un precio, ¿en cuántos lados lo cambias?"* | Enumera 3+ lugares · *"lo persigo por todos lados"* | Un solo sistema que conecta |
| **P4** | *"¿Cuándo fue la última vez que se te fue alguien clave? ¿Qué se fue con esa persona y cuánto tardaste en recuperarlo?"* | Nombra lo perdido y un tiempo de recuperación | *"Se va uno, entra otro, igual"* |
| **P5** | *"¿Cuándo fue la última vez que te subió un insumo importante? ¿Qué pasó — y cómo te enteraste?"* → **"¿Y qué hiciste al respecto?"** | Insumo + efecto **+ emoción** · *"me enteré hasta el cierre"* · **recosteó a mano** = cuantificó solo lo que le cuesta | *"Ahí va, todo sube"* · no hizo nada · solo subió precios |
| **bis** | *"¿Cuánto te cuesta hacer tu platillo más vendido?"* → *"¿Y cuánto te queda al mes — lo sabes por tus números o por lo que queda en la cuenta?"* | Número **desglosado** → conoce la composición (①) · *"por lo que queda en la cuenta"* → **el ICP esperado** | *"Ni idea y no me interesa"* |

**Regla:** preguntar qué pasó y **dejar que él nombre el impacto**. Si dice *"margen"* solo, la señal vale el doble. **H1 por sesión:** 🟢 si reconoce 3+ de 5 con episodio propio.

</section>

<section class="page">

<p class="eyebrow">9 · En la mesa (II)</p>

## Perfil, precio, ask y registro

### Clasificar el perfil — dos preguntas

*"¿Cómo le enseñas a alguien nuevo a hacer tu platillo estrella?"* · *"¿Cuándo cambiaste la carta por última vez y qué tuviste que actualizar?"*

| Responde… | Perfil | Carril |
|---|---|---|
| Fichas, manual, alguien de compras, *"ya lo tenemos"* | **①** | Producto — feedback, no N |
| Chef-dueño · semi-documenta y fragmentado · la consistencia como obsesión | **②** | Adyacente — suma |
| De memoria · *"yo les enseño"* · cambió la carta y no actualizó nada porque no había nada | **③** | **Centro** — suma |

**El clasificador definitivo no es la charla: es el análisis del producto con sus documentos.**

### El precio — cuándo y cómo se dice

*"¿Pagaría?"* no se pregunta. **Se dice el precio y se observa.**

1. **No en el primer café.** Entra en el segundo contacto, con su análisis en la mano.
2. **Nunca se evade si él pregunta.** *"Mil quinientos al mes por sucursal; los Socios Fundadores entran con 20-30% menos, para siempre."*
3. **Siempre con el punto:** *"a tus ventas, un punto de food cost son tantos pesos al mes — esto cuesta menos que un punto."*

| Reacción | Lectura |
|---|---|
| Pregunta *cómo empezar* · pide los pasos | **✓** · candidato a intent |
| No objeta, no avanza | 🟡 · el ask desempata |
| Compara con su POS | **Anclaje POS** — problema de mensaje, no de precio |
| *"Está caro"* sin contrapropuesta · *"no me cuesta nada hacerlo yo"* | **✗** |

### El ask — la única medida de H4

Nunca se termina sin un compromiso **pequeño, concreto y con fecha**: **tres documentos en 48 horas** · **la intro al dueño o al socio** · **segunda sesión con fecha** · **el link de `/demo`** — y observar qué hace con él. *El "sí" no vale. Lo que llega, sí.* Si no llega en una semana → A3, sin drama.

### Qué se registra — dentro de 24 horas

- Los **nueve checks** (✓ / ✗ / no sondeado) · el **perfil** · **precio dicho sí/no + reacción**
- Los scores en **H1-H6** — canon, no mapas propios · cada señal `[revelado]` o `[declarado]`
- **¿Suma al N?** → la regla de la página 5 → fila del domingo en el scorecard
- Los **verbatims**, con nombre y sesión → la biblioteca de voz de cliente

</section>

<section class="page">

<p class="eyebrow">10 · El marcador</p>

## Dónde estamos hoy — 8 de septiembre

<p class="kicker">Contado contra el ICP de hipótesis de la Fase A. El marcador <strong>bajó</strong> al cambiar de blanco — de 1 · 1 · 1 (Alma Verde, perfil ①) a 1 · 0 · 0 (Miguel) — y eso es lo honesto: las hipótesis no cambiaron, cambió a quién se le pregunta.</p>

### El gate

| Condición | Mide | Umbral | Hoy | |
|---|---|---|---|---|
| La propuesta de valor la reconocen suficientes del perfil correcto | H1-H3 | 🟢 sobre 5-8 | **1 — Miguel** · H1 🟢 dir · H2 🟡 · H3 🟢 dir | ✗ |
| **Hay de dónde extraer** — el análisis corre con lo que ya tiene | experimento | ≥ 3 de 5 | **0 de 0** — no ha corrido con documentos de nadie del ICP | ⬜ |
| Compromisos revelados | H4 | ≥ 3-4 | **0** del ICP · *(Carlos: 1, fuera del ICP)* | ✗ |
| Intent-to-join, conociendo el precio | H4 + H6 | ≥ 1-2 | **0** | ✗ |
| El problema le cuesta algo hoy | H6 · pozo | no 🔴 | 🟡 · cero cuantificaciones reveladas | ✓ |
| App V1 demostrable | readiness | — | ✅ desde el 30-ago | ✓ |
| Legal listo | readiness | — | ⬜ | ⬜ |

### Las hipótesis

| | Read | En una línea |
|---|---|---|
| H1 · problema | 🟡→🟢 | Miguel: la carga #1 · Carlos: mantenimiento · JP: resuena, invertido |
| H2 · valor | 🟡 | Arballo: *"¿otro software más?"* · nunca probado sin Alan presente |
| H3 · diferencia | 🟢 dir | Alfonso articuló solo el *hardware-agnostic* |
| H4 · compromiso | 🟡 | Carlos abrió todo (perfil ①) · Miguel abierto · JP y Arballo nada |
| H5 · canal | 🟡 partido | Tibio funciona (Victor → Miguel) · frío no (7 → 0 por LinkedIn) |
| H6 · pozo | 🟡 | 2 *"pagaría"* declarados · 0 cuantificados |
| H6 · precio | ⬜ | El precio no se ha dicho con el punto a nadie del ICP |

### Cobertura por perfil

| ① estandarizado | ② alta cocina | ②b cafetería con cocina | **③ sin estandarizar** |
|---|---|---|---|
| ✓ Alma Verde · carril de producto | ✓ Miguel · suma | ✗ sin sesión | **✗ · 9ª semana en cero — el centro** |

</section>

<section class="page">

<p class="eyebrow">11 · Cierre</p>

## Qué no está aquí — y cómo se mantiene vivo

### Lo que este PDF deja fuera a propósito

- **Las etiquetas de origen** de cada afirmación (*campo · sesión · revelado/declarado* · research · hipótesis) — están línea por línea en `11-icp-hipotesis-fase-a.md`.
- **La trazabilidad** — qué decía el research de abril, qué dice este ICP, qué está en prueba y qué sigue en pie (industria · competitivo · precio · comité). Doc 11 §10.
- **Las seis preguntas post-compra** — vacías, para el primer Socio Fundador entre el Mes 1 y el 3.
- **Las cross-references** al resto del workspace.

### Cómo se actualiza

- **Cada domingo**, después de la retro: la skill `/scorecard-fase-a-semanal` mueve el marcador; la página 10 de este PDF se regenera de ahí.
- **Cada vez que una sesión enseñe algo** que cambie el ICP (un criterio, un anti-perfil, una pregunta que funciona mejor): primero el doc 11, después este PDF. Nunca al revés.
- **Cuando el experimento se confirme o se tumbe** — 5-8 conversaciones del ICP registradas — este documento gradúa al ICP canónico o se archiva con el bloque de la Fase A. No antes.

### Lo que este documento pide de la semana que entra

Una sola cosa, que ninguna página anterior puede sustituir: **una conversación nueva con un operador del perfil ③.** El centro lleva nueve semanas en cero, y todo lo demás —el filtro, las preguntas, el precio, el marcador— existe para esa mesa.

<p class="foot">ICP de hipótesis — Fase A · edición de campo v0.1 · 2026-09-08 · Zenet · se regenera desde <code>11-icp-hipotesis-fase-a.md</code> y <code>10-scorecard-fase-a.md</code>.</p>

</section>
