---
name: Banco de ideas y backlog de contenido
description: El swipe file vivo del contenido de Alan · backlog de posts listos para publicar (el starter pack validado) + semillas de ideas para futuros posts. Cada post con pillar · idioma · estado · texto · brief de imagen. Se llena conforme se genera y se valida contenido.
type: social-media
last_updated: 2026-06-03
status: active
version: 0.1
owner: Alan Bahena
---

# Banco de ideas y backlog de contenido

> El archivo vivo del contenido de Alan: **posts listos para publicar** (la recámara) + **semillas de ideas** para lo que viene. Se nutre de las semillas del arco (`01-manual` §2.3), del corpus de voz (`02-voz-y-estilo`), y de lo que vaya saliendo.

**Estados:** ✅ listo (aprobado, publicable) · ✏️ borrador · 💡 idea (sin escribir).

**Cómo usarlo:** tomar un post ✅ del backlog → publicar según el calendario (`04-pillars` §5) → marcar como publicado (mover a histórico o borrar). Las semillas 💡 se convierten en borradores cuando toca ese pillar en la semana.

---

## Posts listos (starter pack · 2026-06-03)

5 posts validados en voz de Alan · cubren los 5 pillars activos · ~2 semanas de recámara.

---

### POST-01 · Founder journey · ES · ✅
**Imagen:** sin imagen (text-only) o quote card oscuro con *"No eran fracasos. Eran experimentos."*

```
Durante años llamé "proyectos fallidos" a varias cosas que construí.

Una app de reciclaje que no despegó. Un POS para restaurantes que la tecnología de
2022 no podía sostener. Ideas que se rompieron, que reescribí desde cero, que dejé
en el camino.

Tardé en verlo, pero estaba equivocado en cómo los nombraba.

No eran fracasos. Eran experimentos.

Los últimos años han sido, en realidad, mi propio laboratorio: construir algo, ver
qué aguanta bajo condiciones reales, aprender, y usar ese aprendizaje en lo
siguiente. Cada cosa que "no funcionó" me enseñó algo que la siguiente necesitaba.
El timing. El contexto. Escuchar al usuario antes de construir.

Lo curioso es que con la presión de hoy —tracción, números, IA que acelera todo— es
fácil olvidar esto. Quieres que cada cosa funcione a la primera. Pero un laboratorio
no funciona así. Funciona a base de experimentos que la mayoría de las veces no
salen.

Creo que ahí está la diferencia entre construir y solo ejecutar: construir es estar
dispuesto a que el experimento falle, y quedarte con lo que enseñó.

¿Cuál de tus "fracasos" terminó siendo el que más te enseñó?
```

---

### POST-02 · Technical · EN · ✅
**Imagen:** diagrama oscuro (demo→system) o text-only

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

### POST-05 · Behind-scenes · EN · ✅
**Imagen:** foto real (escritorio / proceso) o text-only

```
People imagine building a product as a series of breakthroughs. It's mostly not.

Most of my days look like this: read what I wrote yesterday, find the thing I got
wrong, fix it, write down why, repeat. Quiet, slow, unglamorous.

This week the "exciting" work was rewriting a data model because the first version
made a simple query painful. No demo. No screenshot worth sharing. Just a foundation
that's now slightly less likely to break later.

I've started to think that's the actual job. Not the breakthroughs — the discipline
between them. The willingness to redo the boring layer so the interesting layer can
stand on it.

AI changed the speed of this. It didn't change the nature of it. I still have to
decide what's right, understand why the last version was wrong, and own the call. The
model types faster. It doesn't carry the judgment.

No grand insight today. Just the honest version of what building actually looks like
from the inside.

Back to it.
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
| El jardín orgánico en Alemania → de dónde viene la comida | 1 journey | ES | Personal · humaniza *(NO front-load platform vision)* |
| "El chef adopta, el dueño paga, el contador autoriza" | 2 industria | ES | El comité de compra invisible |

> Convertir una 💡 en ✏️: pedir *"escríbeme un post sobre [idea]"* — sale calibrado contra `02-voz-y-estilo`.

---

## Notas

- **Disciplina stealth:** todo lo de aquí es pre-reveal · sin nombrar el producto actual · case studies (pillar 6) NO entran hasta el reveal.
- **El backlog se renueva:** conforme publicas, marca/quita los ✅ usados y genera nuevos desde las 💡.
- **Cross-doc:** estructura por pillar → `04-pillars` §3 · voz → `02-voz-y-estilo` · imágenes → `05-visual` §6.3 · calendario → `04-pillars` §5.

---

*Última actualización: 2026-06-03. Vivo · se nutre conforme se genera contenido.*
