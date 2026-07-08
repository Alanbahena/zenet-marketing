---
name: Banco de ideas y backlog de contenido
description: El swipe file vivo del contenido de Alan · backlog de posts listos para publicar (el starter pack validado) + semillas de ideas para futuros posts. Cada post con pillar · idioma · estado · texto · brief de imagen. Se llena conforme se genera y se valida contenido.
type: social-media
last_updated: 2026-07-08
status: active
version: 0.1
owner: Alan Bahena
---

# Banco de ideas y backlog de contenido

> El archivo vivo del contenido de Alan: **posts listos para publicar** (la recámara) + **semillas de ideas** para lo que viene. Se nutre de las semillas del arco (`01-manual` §2.3), del corpus de voz (`02-voz-y-estilo`), y de lo que vaya saliendo.

**Estados:** ✅ listo (aprobado, publicable) · 🗓️ programado · 📤 publicado · ✏️ borrador · 💡 idea (sin escribir).

**Cómo usarlo:** tomar un post ✅ del backlog → publicar según el calendario (`04-pillars` §5) → marcar como publicado (mover a histórico o borrar). Las semillas 💡 se convierten en borradores cuando toca ese pillar en la semana.

---

## Posts listos (starter pack · 2026-06-03)

5 posts validados en voz de Alan · cubren los 5 pillars activos. **POST-02 publicado 2026-06-03 (primer post del sistema en vivo) · POST-05 publicado 2026-06-04 (editado en vivo por Alan · primer behind-scenes) · POST-06 publicado 2026-06-09 (founder journey · huerto Alemania · carrusel de 2 fotos) · POST-07 publicado 2026-06-10 (técnico EN · prompt engineering / model drift · diagrama del enum escapado) · POST-01 publicado 2026-06-15 (founder journey · foto del escritorio · 2 anclas + cierre "reconstruir desde ahí") · POST-08 publicado 2026-06-16 (industria ES · mapa de la operación · lista validada vs VP) · POST-09 publicado 2026-06-18 (técnico EN · cost management · gráfica de la inversión) · POST-10 publicado 2026-06-22 (journey ES · origin story · "mi primer cliente fue un restaurante" · text-only) · POST-11 publicado 2026-06-30 (industria ES · pregunta de engagement · "¿por qué cuesta tanto estandarizar?" · text-only · ~350 impresiones + comentario de calidad) · POST-12 publicado 2026-07-06 (industria ES · pregunta de engagement · herramientas digitales / WhatsApp · text-only) · POST-13 publicado 2026-07-08 (técnico/journey EN · "systems are systems" · arco cross-industria · diagrama físico→datos→AI).** Recámara restante: POST-03 · POST-04.

---

### POST-01 · Founder journey · ES · 📤 publicado (2026-06-15)
**Imagen:** foto real del escritorio — toma candid, luz cálida ámbar (modo oscuro · on-paleta `05-visual` §2), código en pantallas · refuerza el frame *"mi propio laboratorio"*. (Chequeo stealth: pantallas = código/logs + dashboard Supabase, no UI de producto · sin nombres de archivo/tabla legibles.) Versión previa text-only / quote card descartada a favor de la foto.
**Origen:** editado con Alan 2026-06-14 · 2 anclas concretas limpias (red de viajeros 2020 + app de logística de reciclaje) · **se quitó el POS de food-waste** por stealth/marca (food-waste es tema dropped del relato Zenet · cf. nota VE-09) · cierre declarativo nuevo (*"reconstruir desde ahí"* — eco rompieron→reescribí→reconstruir · en lugar de la pregunta abierta original) · gramática corregida. Se evaluaron 2 fotos: descartada la de luz neón morada (off-paleta · lee "gamer RGB") · elegida la de luz cálida ámbar.

```
Durante años quizá llamé "proyectos fallidos" a varias cosas que construí.

Una red de viajeros que compartían en blogs experiencias peculiares de viajes alrededor
del mundo, en 2020. Una app de logística de reciclaje que no despegó. Ideas que se
rompieron, que reescribí desde cero, que quizás dejé en el camino.

Quizá tardé años en verlo, pero estaba equivocado en cómo las nombraba.

No eran fracasos. Eran experimentos.

Los últimos años han sido, en realidad, mi propio laboratorio: construir algo, ver qué
aguanta bajo condiciones reales, aprender, y usar ese aprendizaje en lo siguiente. Cada
cosa que "no funcionó" me enseñó algo que la siguiente necesitaba. El timing. El
contexto. Escuchar al usuario antes de construir.

Lo curioso es que con la presión de hoy —tracción, números, IA que acelera todo— es
fácil olvidar esto. Quieres que cada cosa funcione a la primera. Pero un laboratorio no
funciona así. Funciona a base de experimentos que la mayoría de las veces no salen.

Creo que ahí está la diferencia entre construir y solo ejecutar: construir es estar
dispuesto a que el experimento falle, y quedarte con lo que enseñó para reconstruir
desde ahí.
```

---

### POST-02 · Technical · EN · 📤 publicado (2026-06-03)
**Imagen:** ✅ diagrama "Model dentro de System" (oscuro + azul + ámbar) · primer post del sistema en vivo

```
A demo and a system are not the same thing. I keep relearning this.

A demo works because you control the inputs. A system has to work when reality
controls them.

Here's what that gap actually looks like, from the last few weeks:

→ The model is the easy part. Picking it, prompting it, getting a good output —
that's an afternoon. The architecture around it is the month.

→ Most failures aren't model failures. They're context failures. The model did
exactly what you asked — you just asked with assumptions you didn't know you had.

→ Guardrails aren't a feature you add later. If the system can do something it
shouldn't, "later" is already too late.

→ State is where it gets hard. A single agent answering a question is trivial. An
agent that remembers, coordinates, and stays consistent across a real workflow is a
different kind of problem.

The honest framing: AI made the demo cheap. It didn't make the system cheap. The
hard, unglamorous part — schemas, boundaries, what happens when something breaks —
is still the work. AI just moved it, it didn't remove it.

Still figuring out a lot of this. But the pattern is clear: design the system, then
let the model live inside it. Not the other way around.

#BuildingInPublic #AIEngineering #AgenticAI
```

---

### POST-03 · Industria · ES · ✅
**Imagen:** text-only o data viz mínima · *(lleva el reframe del antagonista)*

```
Hay un momento exacto en que un restaurante que funciona deja de funcionar.

No es cuando abre. Es cuando abre la segunda sucursal.

Durante años el dueño fue el sistema. Tenía todo en la cabeza: las recetas, los
costos, qué proveedor falla, cuánto pedir un viernes. Y funcionaba. Mejor que
cualquier software, porque era criterio puro, afinado servicio tras servicio.

El problema no es que le falte sistema. El problema es que el sistema vive en una
sola cabeza. Y una cabeza no puede estar en dos lugares a la vez.

Entonces abre la segunda. Y de repente lo que antes era intuición ahora tiene que
explicarse, escribirse, delegarse. El gerente nuevo opera distinto. La sucursal
nueva arranca desde cero. Lo que cabía en una persona ya no cabe en dos cocinas.

No es falta de talento. Es que el talento no escala si vive solo en la memoria de
alguien.

Llevo tiempo observando este patrón de cerca, y aparece casi siempre en el mismo
punto: entre la primera y la tercera sucursal. Justo cuando el negocio crece, la
operación se rompe.

¿Lo has vivido? ¿Qué fue lo primero que se te rompió al abrir la segunda?
```

---

### POST-04 · Operador · ES · ✅
**Imagen:** quote card claro-cálido — *"La cuenta te dice qué pasó, no qué está pasando."* + subrayado ámbar

```
"Yo sé si me fue bien cuando a fin de mes queda dinero en la cuenta."

Me lo dijo un dueño hace poco, sin pensarlo mucho. Para él era obvio.

Y tiene toda la lógica del mundo. Ese es su sistema de control: la cuenta del banco
al cierre del mes. Si quedó, le fue bien. Si no, algo pasó.

El detalle es que para cuando lo ve en la cuenta, ya pasó. El mes ya cerró. La merma
que se comió el margen ya se sirvió. El proveedor que subió el precio ya cobró. El
platillo que se vende mucho pero deja poco ya salió cientos de veces.

No es que esté mal mirar la cuenta. Es que la cuenta te dice qué pasó, no qué está
pasando.

Y esa diferencia —entre enterarte a fin de mes y enterarte el martes— es, muchas
veces, la diferencia entre un restaurante que sobrevive y uno que crece.

Lo curioso es que el dueño ya tiene el instinto. Ya sabe leer su negocio. Solo le
falta verlo antes, no después.

¿Cómo sabes tú, hoy, si una semana te fue bien o mal — antes de que cierre el mes?
```

---

### POST-05 · Behind-scenes · EN · 📤 publicado (2026-06-04)
**Imagen:** text-only · *(editado en vivo por Alan: cambió el ejemplo del data model por el ángulo "los años sin IA = el criterio". Versión publicada abajo · primer post del pillar behind-scenes.)*

```
People imagine building a product as a series of breakthroughs. It's mostly not.

Most of my days look like this: read what I wrote yesterday, find the thing I got
wrong, fix it, write down why, repeat. Quiet, slow, unglamorous.

After building my own stuff these last few years, I catch myself thinking "what a
time to be able to build with AI." But I also know this: without years of building
things the hard way — before AI — I wouldn't see what I see now. The model didn't
give me the judgment. The boring years did.

I've started to think that's the actual work. Not the breakthroughs — the discipline
between them. The willingness to redo the boring layer, to go back to basics, so the
interesting layer can stand on it.

No grand insight today. Just the honest version of what building actually looks like
from where I sit.

Back to it.
```

---

### POST-06 · Founder journey · ES · 📤 publicado (2026-06-09)
**Imagen:** carrusel de 2 fotos reales de Alemania — (1) el huerto desde la ventana, el inicio, 5 abr 2020 · (2) la cama elevada con lechugas, ya crecido · arco *semilla → cosecha*.
**Origen:** semilla "jardín orgánico Alemania" · co-desarrollado con Alan en varios drafts · **stealth cuidado** (food-waste removido · cadena origen→trazabilidad→restaurantes evitada · origen/calidad de alimentos queda como valor personal, NO tesis de producto).

```
Encontré esta foto hace unos días. La tomé desde mi ventana el 5 de abril de 2020.

Es el jardín de mi casa cuando vivía en Alemania, el día que apenas empezaba a armar
el huerto orgánico. Todavía no sabía que esa experiencia iba a cambiar la forma en que
veo las cosas hoy.

Lo que inició como un hobby terminó siendo la semilla de varias de las ideas que me
acompañan desde entonces. Las cosechas. La calidad de los alimentos y de dónde venían.
El gusto de compartir y regalar lo que crecía entre los vecinos de la comunidad.

Soy ingeniero. Pero esta foto me recuerda que algunas de las mejores cosas que he
construido no empezaron en un archivo digital. Empezaron en algo simple que disfrutaba
hacer, casi sin darme cuenta de a dónde me llevaría.

A veces las mejores ideas vienen de las experiencias a las que menos atención les damos.
```

---

### POST-07 · Technical · EN · 📤 publicado (2026-06-10)
**Imagen:** diagrama de sistema (oscuro + azul técnico + 1 acento ámbar) — un set definido con 4 tokens azules dentro + 1 token escapado en ámbar fuera del límite. Generado con Nano Banana Pro (prompt #1 de `_templates/prompts-imagenes-ai.md`). Lee como *"un valor fuera del set permitido"* · conecta con la anécdota del enum y el cierre "validate at the boundary".
**Origen:** bug real encontrado probando la app de producción (agentes devolviendo valores fuera del enum aceptado — `"fine dining"` cuando solo valía `"casual"`/`"gourmet"` · posible drift por actualización de modelo) · co-desarrollado con Alan en varios drafts · gancho **"parece fácil al principio"** + tesis **"prompt engineering es disciplina propia"** + teaser de cost management para el próximo técnico. Segundo post del pillar 3 (después de POST-02).

```
One of the biggest lessons I've learned this year: working with AI looks easy at first.

Coming from the older generation of AI models, it feels almost trivial now — plain
text in, an answer out. But that ease hides a real discipline. Prompt engineering is a
craft of its own, and one missing instruction can break your whole system.

I learned it the hard way. My tests passed — unit, E2E, manual, all green. But my
agents started returning values that don't exist: a field that had to be "casual" or
"gourmet" came back as "fine dining." It used to work. Same prompts, same tests. The
model underneath had changed.

A few things I'm taking from it:

→ A prompt is not a contract. Code doesn't change unless you change it. A prompt can
break when nothing in your repo moved — because the model moved.

→ "It passed before" guarantees nothing. Tests freeze your code, not a model's
reasoning. An update can quietly shift behavior every test was blind to.

→ If a value must be one of five things, the system enforces that — not the prompt.
Asking the model nicely isn't a guardrail. Validating at the boundary is.

→ Prompts need regression testing too. Continuously, against every model version you
run on.

Prompt engineering isn't a side skill anymore — it's core product engineering. (Cost
management is the other half; a topic for another post.)

Models don't always respect your constraints. You have to build the system so they
can't break them.

#BuildingInPublic #AIEngineering #AgenticAI
```

---

### POST-08 · Industria · ES · 📤 publicado (2026-06-16)
**Imagen:** ✅ mapa de la operación de BoH — diagrama blueprint (carbón `#14161B` + nodos off-white `#ECEAE3` + íconos de línea), 6 nodos (Recetas · Inventarios · Compras/proveedores · Merma · Costos por platillo · Proyección) conectados por flechas · cada nodo con punto ámbar `#E2A33C` = "manual" + leyenda. Generado con Nano Banana Pro (4:5 · prompt en `_templates/prompts-imagenes-ai.md`) · watermark ✦ removido en Apple Fotos.
**Origen:** desarrollado con Alan 2026-06-14/15 · Pillar 2 industria · **lista de actividades refinada y validada contra el VP** (value-map + customer-profile + scope Fase 1 + 8 dominios agency-as-SaaS): se quitó "recepción y distribución entre sucursales" (off-scope · supply chain, no BoH-first · cf. `03-competitive/07` §4.3) y se agregó "recetas y estandarización" (dolor core + diferenciador de entrada · `customer-profile` §5.3). Línea **"esquema corporativo global a pequeña escala"** (insight de Alan · ownable) · reframe del antagonista (*"no es que no existan procesos · viven en la cabeza"*) · cierre declarativo + convicción de builder **suave** (*"vale la pena resolver bien"* · se descartó el lenguaje de pitch *"gran oportunidad / transformar la industria"*) · **sin hashtags** (patrón ES `02-voz-y-estilo` §3).

```
Después de años analizando operaciones de cerca, hay algo que no deja de sorprenderme.

El back of house de un restaurante opera, en el fondo, como un esquema corporativo
global — pero a pequeña escala. La misma complejidad, sin la estructura que la sostiene.
Y aun así, casi todo sigue funcionando de memoria.

He trabajado con operaciones de varias industrias, y el de un restaurante es de los
casos más retadores que he visto. En algún momento, cada restaurante tiene que diseñar
sus procesos y transformarlos conforme crece, para depender menos de una sola persona.
Cómo se cocina. Cómo se compra. Cómo se recibe. Cómo se mide. Cómo se pasa un turno al
siguiente.

No es que no existan procesos. El detalle es dónde viven y cómo se ejecutan: manuales,
sin documentar, dependientes de que cierta persona esté presente.

Y conforme el negocio crece, esos patrones se vuelven más difíciles de cambiar — y más
caros, aunque casi nunca se vea cuánto. Estandarizar cuesta enormidades. Abrir otra
sucursal significa empezar prácticamente de cero.

Cuando mapeas una operación completa, la lista de lo que todavía se hace a mano es larga:

→ Recetas y estandarización de procesos
→ Inventarios y conteos
→ Compras y pedidos a proveedores
→ Control de merma
→ Escandallos y costos por platillo
→ Proyección de cuánto preparar cada día

Cada una funciona. Pero cada una depende de alguien.

Y ahí está lo que más me llama la atención: no es que la operación sea manual. Es lo
bien que funciona a pesar de serlo — sostenida por la gente, no por el sistema.
Y creo que ahí hay algo que vale la pena resolver bien.
```

---

### POST-09 · Technical · EN · 📤 publicado (2026-06-18)
**Imagen:** ✅ gráfica de la inversión del costo (Nano Banana Pro) — modo Pillar 3 (carbón `#14161B` + azul de plano `#3E5B7D` + 1 ámbar `#E2A33C`): dos líneas sobre ejes off-white — "Classic SaaS" (azul) bajando hacia cero vs "AI-native" (ámbar) subiendo con la escala · *costo por usuario vs escala*. Watermark ✦ removido. Diagrama técnico distinto del mapa de industria de POST-08 (azul = solo técnico).
**Origen:** desarrollado con Alan 2026-06-17 · Pillar 3 técnico EN · **cierra el hilo de serie** prometido en POST-07/VE-10 (*"cost management is the other half"*) · apertura = reflexión personal (cómo cambió construir SaaS · pedida por Alan) · spine económico = **inversión del costo marginal** (SaaS clásico costo ~0 → AI-native costo real/variable/volátil · a escala puede encarecer en vez de abaratar) · 3 palancas (model routing · prompt caching · context discipline · se cortó *batching* por largo) · beat de **modelo de negocio** agregado a nivel industria (NO pricing de Zenet) · cierre = aforismo *"design problem + business-model one"* + línea *"old playbook"* (gesto amplio específico, NO el genérico "everything is changing"). **Stealth:** craft del costo de inferencia, NO economía/márgenes/ventaja MX (moat).

```
I've spent years building SaaS, and one of the assumptions I built everything on has
started to break.

For most of the SaaS era, the math was simple: build it once, and one more user costs
almost nothing. Near-zero marginal cost is the whole reason software is such a good
business — at scale, you get cheaper.

AI-native software breaks that. Every interaction has a real, variable cost, and it's
volatile in a way code never was: a heavy user can cost many times a light one, and a
model update can move your costs overnight. So the thing that made SaaS great can quietly
invert — at scale, you get more expensive per user, not cheaper. Unless you design
against it.

That's the part I underestimated. Cost stopped being a line item and became an
architecture decision:

→ Not every task needs the biggest model. Routing simple calls to a smaller one is often
the single largest saving.

→ Caching is money left on the table if you don't design for it. The same context and
system prompts get sent on every call.

→ Context is a cost, not just a capability. Loading the full history every turn feels
safe, until you see the bill.

But it goes beyond architecture. When serving one more user stops being almost free, the
flat-rate model SaaS was built on starts to strain too. AI-native software won't just be
built differently — the business around it has to be rethought.

The honest framing: the per-token price is the smallest part of the story. I used to
think cost was a finance problem. Now I think it's both a design problem and a
business-model one.

And this is just the cost side. The longer I build with AI, the more of the old playbook
I find I have to rewrite.

#BuildingInPublic #AIEngineering #AgenticAI
```

---

### POST-10 · Founder journey · ES · 📤 publicado (2026-06-22)
**Imagen:** ninguna — **text-only** (decisión deliberada · un origin story personal rinde mejor sin imagen). Se descartó: quote card (modo declaración/marketing · choca con el tono personal) · y un still-life ilustrado de Nano Banana (salió con **texto fake de IA en inglés** · el "tell" de IA va contra el north star "real, no performático").
**Origen:** desarrollado con Alan 2026-06-21/22 · Pillar 1 journey · **origin story**: su primera agencia de software (2021) · primer cliente = un restaurante · así descubrió el problema del back of house. **Cierre reframeado de "oportunidad" → "pregunta/descubrimiento"** (la oportunidad queda implícita · evita el front-load comercial · mismo fix que POST-01/POST-08) · honestidad del *"no tenía bien segmentado el perfil de cliente"* · contraste founder-ingeniero (*"yo venía de un mundo de ingeniería"*) · reframe canónico (el sistema vive en la memoria, no que falte) · cierre con guiño building-in-public (*"casi todo lo que he construido este último año… nace de ella"*) · apretado ~30% del primer draft · sin hashtags (patrón ES).

```
Cuando armé mi primera agencia de software en 2021, no tenía idea de en qué me estaba
metiendo. Ni siquiera tenía claro mi perfil de cliente. Mi primer cliente terminó siendo
un restaurante.

Llegué pensando que el trabajo era técnico — construir una herramienta, resolver un
problema de software. Pasé semanas metido en su operación, y lo que más me sorprendió no
fue lo que les faltaba. Fue todo lo que sostenían a mano.

Inventarios en papel. Pedidos de memoria. Recetas que solo existían en la cabeza del
cocinero. Y aun así, el lugar funcionaba.

Ahí me di cuenta de algo que me siguió dando vueltas durante años: el problema nunca fue
la tecnología. Era que toda la operación vivía en la memoria de la gente, y se rompía en
el momento en que esa gente no estaba.

Yo venía de un mundo de ingeniería, donde todo se estructura y se documenta. Ver una
cocina funcionar al revés — a puro esfuerzo repetitivo, cada día — me dejó pensando.

No salí de ahí con una solución. Salí con una pregunta que no he soltado desde entonces:
¿cómo le das estructura y estandarización a algo que funciona, pero depende de una sola
persona?

Años después, sigo persiguiendo esa pregunta. Y casi todo lo que he construido este
último año, de una forma u otra, nace de ella.
```

---

### POST-11 · Industria (pregunta de engagement) · ES · 📤 publicado (2026-06-30)
**Imagen:** ninguna — text-only (post corto de engagement).
**Origen:** desarrollado con Alan 2026-06-30 · **primer post corto de engagement** (formato nuevo · pregunta abierta a la comunidad para incitar interacción de calidad) · Pillar 2/4 industria/operador · pregunta = *"¿por qué cuesta tanto estandarizar y documentar los procesos de un restaurante?"* con 5 candidatos cebados (tiempo · dinero · todo en una cabeza · rotación de personal · algo más) · **problema, no solución** (se descartó una versión previa que describía el producto = pitch encubierto + stealth risk · cf. nota voz VE-14 oportunidad implícita) · postura de campo *"después de años observando las operaciones de cerca"* (autoridad para preguntar) · cierre abierto · sin hashtags (patrón ES) · **se prefirió texto sobre poll** (conversaciones de calidad > volumen de taps · north star "conversaciones, no seguidores").

```
Pregunta honesta para la industria restaurantera:

¿Por qué cuesta tanto estandarizar y documentar los procesos de un restaurante?

¿Es el tiempo? ¿El dinero? ¿Que todo vive en la cabeza de quien lo hace? ¿La rotación de
personal? ¿Algo más?

Después de años observando las operaciones de cerca, me interesa de verdad cómo lo ven
desde adentro.
```

---

### POST-12 · Industria (pregunta de engagement) · ES · 📤 publicado (2026-07-06)
**Imagen:** ninguna — text-only (post corto de engagement).
**Origen:** desarrollado con Alan 2026-07-06 · **segundo post del formato pregunta de engagement** (después de POST-11, que alcanzó ~350 impresiones + comentario de calidad de Juan Pablo Ramírez — señal del pilot de que el formato funciona · cf. `04-pillars` §8) · Pillar 2 industria · pregunta = *"¿qué herramientas digitales se usan de verdad para operar el back-of-house de un restaurante?"* · **nugget de campo** que revela el insight diferenciador (*"no es un software complejo — es WhatsApp, Excel, notas de voz y una libreta"* = WhatsApp como interfaz operacional · conecta con el 10% de adopción de VE-04) · arco **abre-genérico → nugget → cierra-personal** (invita a confirmar o corregir) · **lección de craft:** el cierre-invitación es el motor del engagement (sin él, el post se contesta solo) · sin hashtags (patrón ES) · stealth-safe (observación, no pitch · se descartó una versión previa que describía el producto).

```
Otra pregunta honesta para la industria restaurantera:

¿Qué herramientas digitales se usan de verdad para operar el back-of-house de un
restaurante?

Pregunto porque, después de años observando de cerca, casi siempre me encuentro con lo
mismo: no es un software complejo con todas las funcionalidades. Es WhatsApp o una app de
mensajería, Excel, notas de voz y una libreta.

¿Cómo funciona tu operación en el día a día? ¿Te apoyas en algo más?
```

---

### POST-13 · Technical/Journey · EN · 📤 publicado (2026-07-08)
**Imagen:** ✅ diagrama blueprint del arco *físico → datos → AI* — 3 nodos con íconos (engrane → base de datos → red de nodos en ámbar) conectados por flechas azul de plano · carbón + off-white + 1 ámbar en el nodo final · **sin texto** (los íconos cargan el significado · esquivó el garbled-text de IA) · generado con Nano Banana Pro · watermark ✦ removido antes de publicar. **El resultado de IA más limpio hasta ahora — valida el enfoque ícono/no-texto para diagramas técnicos.** Publicado texto + imagen.
**Origen:** desarrollado con Alan 2026-07-07/08 · Pillar 3 técnico + Pillar 1 journey (blend) · **"systems are systems"** — el arco cross-industria (turbinas/automotriz premium → software → datos → AI/operaciones) hecho narrativa · **su diferenciador core** (el ingeniero que ha visto muchos sistemas · conecta con el arco del headline) · **anti-hype deliberado** (contrapeso al post de "50X" descartado) · cierre B (*"when I look at how a restaurant runs — as one example — I don't see a restaurant problem. I see a systems problem"* · reframe outsider→activo) · staccato *"A bad decision. A non-standardized procedure. Weak data infrastructure."* · reframe canónico aplicado cross-dominio (el sistema que vive en un solo punto) · pasada de inglés (varios errores corregidos · la gramática = credibilidad ante audiencia builder EN) · hashtags EN técnicos · **rebalancea el feed** (EN + formato, tras 3 posts ES/pregunta seguidos). Stealth-safe (nombra restaurantes como foco, no el producto).

```
I've worked on very different systems over the years: turbines in premium automotive
manufacturing, software engineering, enterprise data infrastructure, and now AI for
real-world operations.

Different worlds. Same lesson, over and over: systems are systems.

The domain changes — metal, a factory floor, software and data, a restaurant's inventory.
The underlying truths don't.

A bad decision. A non-standardized procedure. Weak data infrastructure. It rarely shows up
right away — it surfaces weeks, months, sometimes years later, once you've already built on
top of it.

Structure comes before execution. It doesn't have to be perfect — it has to be a foundation
you can scale on. Map the system first; the parts matter less than how they connect.

And the most fragile system is always the one that lives in a single point — one person, one
machine — and breaks the moment that point isn't there.

I used to think each new field would mean starting over. It didn't. What transferred wasn't
the domain knowledge. It was the way of seeing.

That's why, when I look at how a restaurant runs — as one example — I don't see a restaurant
problem. I see a systems problem I've seen before — just wearing different clothes.

The tools change fast. The systems thinking underneath is what compounds.

#BuildingInPublic #Systems #Engineering
```

---

## Semillas de ideas (💡 sin escribir)

Temas con material real esperando su turno. Pillar entre paréntesis. (Fuente: `01-manual` §2.3 + research backbone.)

| 💡 Idea | Pillar | Idioma | Gancho |
|---|---|---|---|
| El sueño a los 15 (Alemania) → cumplirlo a los 23 | 1 journey | ES/EN | Prometerse algo y construir el camino |
| Turbinas 2017 → "mapea el sistema antes de tocar el componente" | 3 técnico | EN | El origen de su pensamiento sistémico |
| Aprender a programar solo, de noche → "cargar los principios, no el título" | 1/3 | EN | Founder-ingeniero · vulnerabilidad |
| La agencia → "escuchar antes de construir" / "un sistema debe entender a su usuario" | 1/2 | ES | Por qué hace discovery |
| Teradata → "sistemas son sistemas" (turbinas = datos = restaurantes) | 3 técnico | EN | La prueba cross-industria |
| SAT 2026 / fiscalización digital → "data limpia = defensa" | 2 industria | ES | La palanca fiscal #1 |
| WhatsApp como interfaz operacional (no solo soporte) | 2/4 | ES | El operador ya vive ahí |
| Prompt caching / model routing → costo vs arquitectura | 3 técnico | EN | Decisión técnica con impacto real |
| ✅ ~~El jardín orgánico en Alemania~~ → **usado en POST-06** (huerto · sin food-waste · stealth cuidado) | 1 journey | ES | Personal · humaniza |
| "El chef adopta, el dueño paga, el contador autoriza" | 2 industria | ES | El comité de compra invisible |

> Convertir una 💡 en ✏️: pedir *"escríbeme un post sobre [idea]"* — sale calibrado contra `02-voz-y-estilo`.

---

## Notas

- **Disciplina stealth:** todo lo de aquí es pre-reveal · sin nombrar el producto actual · case studies (pillar 6) NO entran hasta el reveal.
- **El backlog se renueva:** conforme publicas, marca/quita los ✅ usados y genera nuevos desde las 💡.
- **Cross-doc:** estructura por pillar → `04-pillars` §3 · voz → `02-voz-y-estilo` · imágenes → `05-visual` §6.3 · calendario → `04-pillars` §5.

---

*Última actualización: 2026-07-08. Vivo · se nutre conforme se genera contenido.*
