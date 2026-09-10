---
name: Página /demo · estrategia y copy
description: La página /demo de zenetapp.com — v0.2 (10-sep-2026): re-encuadrada para la landing v4. Deja de ser "la Etapa 1 del camino" (ahora la Etapa 1 es Compras + WhatsApp), suma el PASO 04 (la primera factura por WhatsApp, ya dentro), el PDF del análisis que el operador se lleva, hero nuevo ("los números reales de tu operación — y qué te está costando no verlos") y la letra honesta reescrita en "qué corre hoy / qué todavía no". La v0.1 (EN VIVO desde el 11-ago, tag v3.1) se conserva abajo íntegra.
type: seo-content
last_updated: 2026-09-10
status: active
version: 0.2
owner: Alan Bahena
---

# Página /demo · estrategia y copy

> ## 🔄 v0.2 (2026-09-10) — re-encuadre para la landing v4
>
> **Por qué:** la v4 de la landing mueve el análisis de la Etapa 1 a la **Etapa 2** (la 1 pasa a ser **Compras + Zenet en WhatsApp**). Esta página se presentaba como *"la primera etapa del camino"* — dejó de ser cierto el día que la v4 quedó armada. Se re-encuadra, no se rehace.
>
> **El flujo real, corregido por el fundador (10-sep):** junta documentos → Zenet los lee → **recibes tu análisis en PDF y lo ves en la app** → **ya dentro**, le mandas una factura por WhatsApp y aparecen tus compras. **Compras no es la puerta del demo: es lo primero que se toca una vez adentro.** (Mi primera propuesta lo ponía como bloque antes del ask de documentos — mal, invertía la secuencia.)
>
> ### Lo que cambia, bloque por bloque
>
> | Bloque | Cambio |
> |---|---|
> | **1 · Hero** | Titular nuevo: **"No verás un producto. Verás los números reales de tu operación — y qué te está costando no verlos."** (era *"…lo que hay detrás de tu restaurante"*). La bajada cierra en *"con el orden en que conviene construir"*. Meta description y OG al mismo marco |
> | **4 · Cómo funciona** | **Pasa de 3 a 4 pasos.** El 03 suma *"Te lo llevas en PDF y lo ves en la app"*. **04 nuevo: "Le mandas tu primera factura"** — *ya dentro, por WhatsApp: mándale una factura como llegue y mira aparecer tus compras y tus precios. **El mismo día.*** La escena gana un beat 4: el chat, **reusado tal cual de la Etapa 1 de la landing** |
> | **4 · el reloj** | *"Todo esto toma menos de 10 minutos"* → **"Del primer documento a tu análisis: menos de 10 minutos."** Con un paso 04 el reloj dejaba de ser cierto; ahora cuelga de 01→03, donde lo es |
> | **5 · Qué vas a ver** | Cierra con **"Todo se va contigo en un PDF."** Las cuatro filas del análisis **no se tocan** — y **no** se añadió una fila de compras: este bloque es lo que entrega el análisis; compras llega en el paso 04. Mezclarlos rompía otra vez la secuencia |
> | **6 · La letra honesta** | Reescrito. Fuera *"Esto es la primera etapa del camino"*. Ahora: **"Lo que ves aquí, corre hoy"** (análisis · compras por WhatsApp · la construcción área por área) + **"Lo que todavía no"** (que los procesos corran solos — el único tag de la landing) + *"Ver tu análisis no te compromete a nada"*, intacto |
> | **7 · Cierre** | Espejo del hero: **"Sube lo que ya tienes y mira lo que te está costando no verlo."** |
> | **En la landing** | *"Mira cómo funciona →"* **baja de la Etapa 1 a la Etapa 2.** Quien hace clic en la Etapa 1 acaba de leer sobre facturas por WhatsApp y aterrizaba en una página cuyo eje es el análisis; en la Etapa 2 acaba de leer exactamente lo que /demo explica. El enlace del navbar (*"Demo"*) no se toca |
>
> ### Decisiones nuevas
>
> | # | Decisión | Por qué |
> |---|---|---|
> | 9 | **/demo ya no se presenta como una etapa del camino** | Es la **antesala del análisis** (Etapa 2) y la puerta a la app. Nombrar etapas aquí obliga a re-sincronizar la página cada vez que el camino se reordena |
> | 10 | **El titular promete un costo — y la página debe pagarlo** | *"Qué te está costando no verlos"* lo sostiene el análisis (dónde están tus costos hoy · las alertas · la lectura financiera si sube su estado de resultados) y lo refuerza el paso 04. Si algún día el análisis deja de leer costos, el titular vuelve a *"y por dónde empezar"* |
> | 11 | **El PDF se nombra tres veces** (paso 03 · cierre del bloque 5 · nada más) | Es reversión de riesgo: *se lo lleva*. Rima con el piso de la invitación en la landing (*"es tuyo y te lo llevas"*) |
> | 12 | **Las facturas NO entran al ask de documentos** | No alimentan el análisis, alimentan Compras. Viven en el paso 04. El ask del bloque 2 se queda intacto |
> | 13 | **Gate de deploy compartido con la v4** | El PDF y Compras + WhatsApp estarán listos en días (estimado del fundador: semana del 14-sep). La página se escribe en presente y **se deploya cuando los tres sean ciertos** — junto con la landing v4, no antes |
>
> **Estado:** ✅ construido en `demo.html` (rama `v4`) · revisado en pantalla por el fundador el 10-sep · **sin deploy** hasta el gate. El lab queda en `lab/v4-demo.html`.
>
> **Lo que sigue sin resolver:** el **aviso de privacidad formal** (pendiente desde la v0.1 · el bloque 3 enlaza a `/privacidad`, que existe, pero el aviso formal sube de prioridad al recibir estados de resultados) · las **capturas reales** del PDF cuando exista (hoy la escena es SVG).

---

> **Qué es:** la página que explica el análisis (Etapa 1) antes de que el operador entre a la app — qué es, qué juntar, qué va a ver, qué pasa con sus datos. Nace de una necesidad real: hoy el ask de documentos se hace a mano por WhatsApp cada vez; la página lo vuelve un link.
>
> **Estado:** ✅ **EN VIVO en `zenetapp.com/demo`** (tag `v3.1` · 2026-08-11). Copy, diseño, animación y deploy cerrados. Junto con ella salió **`/privacidad`** y las dos entradas desde la landing.

---

## 1. El trabajo de la página

**Es una página de preparación, no un funnel self-serve.** El acceso a la app está cerrado — solo el fundador crea usuarios —, así que nadie se topa con una experiencia rota. La página prepara, califica y baja fricción antes de una demo que hoy corre el fundador.

Tres trabajos, en orden:

1. **Decirle qué preparar** — la lista concreta, con el permiso explícito de que esté como esté.
2. **Decirle qué va a ver** — y qué NO, para que no llegue esperando un producto terminado.
3. **Bajarle el miedo a compartir** — especialmente el estado de resultados.

**Por qué existe (validación cruzada):** el customer research ya había declarado ganadora esta estrategia de demo — pedir documentos ANTES de la sesión convierte el demo de *show-and-tell genérico* a **sus números en pantalla** (`02-customer-research/04-customer-journey` §3.6.7). Esta página es ese pedido, productizado.

---

## 2. Decisiones canónicas

| # | Decisión | Valor |
|---|---|---|
| 1 | **URL** | `/demo` — aunque la página habla en "tu análisis", que es el lenguaje del operador ("demo" es lenguaje de vendedor: *mira mi producto* vs *mira tu negocio*) |
| 2 | **Flujo** | **Landing → /demo → app.** El botón de la landing NO va a la app: va a `/demo`, que es la antesala. Nadie entra a la app sin saber qué esperar y qué juntar |
| 3 | **CTA doble** | Principal `Comenzar demo →` (app · para quien ya tiene acceso) · secundario *"¿Aún no tienes acceso? **Hablemos**"* → `/hablemos` (reutiliza la página que ya existe) |
| 4 | **Enlace desde la landing** | **DOS entradas (ajustado 11-ago):** contextual en la **Etapa 1 del camino** (*"Mira cómo funciona →"*) + permanente en el **navbar** (*"Demo"*, enlace de texto teal subrayado — NO botón, para no competir con "Hablemos"). Se descartó ponerlo en el hero (dos botones parten la decisión) y en las Etapas 2 y 3 (/demo **es** la Etapa 1; prometer otra cosa erosiona confianza). La página además **prueba que el producto existe** — ataca de frente la crítica de *"solo es un núcleo de data"* (Alfonso, Sesión #2) |
| 5 | **Voz** | **Voz de Zenet, no del fundador.** Regla heredada de la landing: §6 es Alan en 1ª persona; el resto habla en "tú" y menciona al fundador en 3ª. Nada de "yo" ni "escríbeme" en esta página |
| 6 | **Estado del producto** | Hoy la demo la corre el fundador · después acompañada · eventualmente autoservicio. La página lo dice **como ventaja** (atención directa del fundador = beneficio del Programa Socio Fundador), no como disculpa |
| 7 | **Financieros SÍ se piden** | Corrige el criterio que aplicaba para Carlos (gerente, no dueño): aquí sube **el dueño con sus propios números**. Sin ellos no hay lectura financiera. Cuidado: nunca obligatorios — van en el segundo nivel de la lista |
| 8 | **Sin cifras reales por ahora** | El copy muestra el **formato** de la salida, no números de clientes. ⚠️ Los estructurales (cobertura, alertas) podrían usarse anonimizados con permiso; los **financieros de un operador NUNCA** — contradice el bloque 3 de esta misma página |

---

## 3. Estructura — 7 bloques

| # | Bloque | Su trabajo | La pregunta que contesta |
|---|---|---|---|
| 1 | **Hero** | Qué es + CTA | *¿Qué es esto?* |
| 2 | **Junta esto antes de empezar** | La lista, con jerarquía | *¿Qué tengo que hacer?* |
| 3 | **Tus documentos son tuyos** | Privacidad en lenguaje humano | *¿Qué riesgo corro?* |
| 4 | **De tus documentos a tu análisis** 🎬 | El proceso + tiempo | *¿Cómo funciona?* |
| 5 | **Qué vas a ver** 🎬 | Los entregables | *¿Qué obtengo?* |
| 6 | **La letra honesta** | Estado real del producto | *¿Qué NO es?* |
| 7 | **Cierre / CTA** | La acción | *¿Cómo entro?* |

**Orden con criterio:** el bloque 3 (privacidad) va **inmediatamente después** del pedido de documentos — el segundo exacto en que nace la desconfianza. Cada honestidad donde aparece el miedo, no todas apiladas al final.

**Animación:** los bloques 4 y 5 son **una sola pieza que atraviesa las dos secciones** (subes → el equipo lo revisa → el análisis se dibuja). Beat-loop cross-browser como el camino de la landing. Micro-movimiento en hero y bloque 2. Nada más — la meta declarada es *simple, práctico, no confuso*.

---

## 4. Copy por bloque

### Bloque 1 · Hero

**Eyebrow:** `TU ANÁLISIS`

**Titular:**
> **No verás un producto. Verás lo que hay detrás de tu restaurante.**

**Bajada:**
> Subes tus documentos como están — recetas, inventarios, tu menú, fotos del cuaderno. Zenet los lee y te muestra el estado real de tu operación: qué tan estandarizado estás, dónde están tus costos y qué huecos tienes hoy — con una guía de por dónde empezar a construir. **Con tus números, no con ejemplos.**
>
> *(+ el dato de "menos de 10 minutos" también aquí)*

**CTA:** `Comenzar demo →` · debajo: *¿Aún no tienes acceso?* **Hablemos.**

**Visual:** figura de la Etapa 1 (documentos → núcleo → análisis) con movimiento sutil.

> **Por qué "detrás":** en la cocina, *"atrás"* es donde pasa todo — es back-of-house en vocabulario de operador. Y rima con la línea del fundador en el pitch deck (*"la calidad de un platillo se decide atrás"*). Landing, deck y esta página hablan el mismo idioma.

---

### Bloque 2 · Junta esto antes de empezar

**Bajada — la prueba, no la promesa:**
> **No tienes que preparar nada.** En el último expediente que corrimos venían fracciones que Excel convirtió en fechas, unidades escritas de cinco formas distintas, un *"scoop morado"* mal tecleado, una receta cortada a media hoja y un renglón sin nombre. **Entró completo.** No limpies, no ordenes, no conviertas nada — sube lo que ya tienes, como lo tienes.

**Jerarquía visual: el par esencial arriba (dos tarjetas grandes), los otros cuatro en lista abajo.**

**Empieza por estos dos — juntos valen más que separados:**
- **Tu recetario o fichas técnicas** → recetas documentadas, cantidades, procedimientos, porciones
- **Tu inventario o lista de insumos** → insumos, unidades, familias, presentación de compra

> Solos, cada uno mide lo suyo. **Juntos aparece una tercera lectura:** cuando la receta pide *"un scoop rojo"* y el inventario compra por kilo, Zenet resuelve cuánto es eso. Ese cruce es el que después permite descontar inventario cada vez que vendes un platillo. **Si solo vas a subir dos cosas, que sean estas.**

**Y si tienes más, cada documento abre una lectura nueva:**

| Documento | Qué te dice |
|---|---|
| **Tu menú o carta** *(fotos sirven)* | Qué platillos ya tienen receta y cuáles no |
| **Tu estado de resultados** | Food cost, nómina, prime cost, ocupación, margen |
| **Costeo de recetas** | Cuántos platillos ya tienen su costo calculado |
| **Manual, protocolos o roles** | Qué documentación operativa ya existe |

**Cierre — la puerta del que tiene poco:**
> ¿Tienes poco de esto? **También sirve.** El análisis te dirá qué falta y en qué orden construirlo — que es justo lo que necesitas saber si apenas estás ordenando.

> ⚠️ **Este bloque es el que más trabaja de la página.** Es el ask de WhatsApp vuelto link, y decide si la sesión llega con material o sin él. La bajada (el expediente real) es lo que quita la excusa de *"primero tengo que ordenarlo"*.

---

### Bloque 3 · Tus documentos son tuyos

> **Los ve una sola persona.** Hoy el análisis lo corre el fundador de Zenet — tus documentos no pasan por más manos.
>
> **No se comparten, no se venden, no se usan para otra cosa.** Ni con proveedores, ni con otros restaurantes, ni para entrenar nada público.
>
> **Se quedan en tu cuenta. Si pides que se borren, se borran.**

**Al pie:** `Aviso de privacidad →`

> Evitado a propósito: *"tus datos están seguros"* — lo dice todo el mundo y por eso no dice nada. Tres afirmaciones concretas valen más que cualquier adjetivo. El título rima con el cierre de la invitación en la landing (*"es tuyo y te lo llevas"*).
>
> ⚠️ **Dependencia:** el link necesita destino. El **aviso de privacidad formal** (pendiente Tier 1.5 en el cockpit) deja de ser opcional al recibir estados de resultados.

---

### Bloque 4 · De tus documentos a tu análisis 🎬

| | Paso | Texto |
|---|---|---|
| **01** | **Subes tus documentos** | Como estén. No hay formato, no hay que capturar nada, no hay que ordenar antes. |
| **02** | **Zenet lo revisa área por área** | Un especialista lee tus recetas, otro tus inventarios, otro tus costos. Al final, todo se junta en una sola lectura de tu operación. |
| **03** | **Recibes tu análisis** | Índices por área, las alertas que salieron y los huecos que tiene tu estructura hoy. |

**Destacado:**
> **Todo esto toma menos de 10 minutos.**

**Cierre:**
> La primera vez, el fundador de Zenet la corre contigo.

> **Nota de vocabulario (load-bearing):** por dentro el motor es un coordinador + analistas por área + un sintetizador. **NUNCA escribirlo como "pipeline de agentes de IA"** — el canon prohíbe nombrar a los agentes como entidades separadas. Y no hace falta traducir: la arquitectura real **ES** la categoría de marca (*equipo de especialistas coordinado*). El paso 02 tampoco dice que Zenet "normaliza" nada: **analiza**, no interviene la operación.

---

### Bloque 5 · Qué vas a ver 🎬

| | Qué es |
|---|---|
| **Tus índices por área** | Qué tan estandarizado estás en recetas, inventarios y documentación operativa — con número, no con adjetivos |
| **Tu lectura financiera** | Food cost, prime cost, nómina, ocupación, margen — si subiste tu estado de resultados |
| **Las alertas** | Lo que salió raro y conviene mirar: unidades que no cuadran, costos fuera de rango, recetas incompletas |
| **Los huecos** | Qué le falta a tu estructura operativa hoy — y por dónde conviene empezar |

**Cierre:**
> Lo que veas depende de lo que subas. Y si algo no se puede leer todavía, **el análisis te lo dice** — eso también es información: es la lista de lo que falta.

> Los dos primeros son *dónde estás*; los dos últimos, *qué hacer*. Diagnóstico y ruta, en ese orden — igual que la argumentación de valor: primero se hace visible la brecha, después se vuelve accionable.

---

### Bloque 6 · La letra honesta

> **Esto es la primera etapa del camino.** El análisis es donde empieza Zenet: ver dónde estás parado hoy. Las etapas que siguen —estandarizar tu operación área por área y que tus procesos empiecen a correr solos— las estamos construyendo junto a los primeros Socios Fundadores.
>
> **El análisis te muestra dónde estás.** La siguiente etapa es construir — y se construye contigo, paso por paso.
>
> **Ver tu análisis no te compromete a nada.** Si después no quieres seguir, te quedas con lo que viste.

> Vocabulario: **"etapa", no "fase"** (empata con el camino de la landing) · **"construir", no "desarrollo"** (es el verbo de la marca: *construye contigo el sistema* · *vuelves a construirlo*). Descartado por rudo y por contradecir la marca: *"es un diagnóstico, no una consultoría · no rehace tu operación por ti"* — Zenet **sí** ayuda a construir.

---

### Bloque 7 · Cierre

**Visual:** la misma **tarjeta aurora** del cierre de la landing (ya construida en `index.html` · gradiente cálido + glow que sigue el cursor).

**Título — espejo del hero:**
> **Sube lo que ya tienes y mira lo que hay detrás.**

**Bajada:**
> Menos de 10 minutos. Sin preparar nada. Sin compromiso.

**CTA (botón blanco):** `Comenzar demo →` · micro-línea: *¿Aún no tienes acceso?* **Hablemos.**

> Las tres frases de la bajada matan tres objeciones distintas: tiempo, esfuerzo, riesgo.

---

## 5. Pendientes y dependencias

| # | Pendiente | Nota |
|---|---|---|
| 1 | **Diseño y build** | Hereda esqueleto de `hablemos.html` + tokens de la landing. Se trabaja en branch + `lab/`, se prueba en preview, merge a main |
| 2 | **Aviso de privacidad formal** | El link del bloque 3 necesita destino. Ya estaba en el cockpit (Tier 1.5, Media) — **sube de prioridad** al recibir estados de resultados. No necesita abogado: qué datos · para qué · dónde se guardan · derechos ARCO · contacto |
| 3 | **Enlace desde la landing** | En la Etapa 1 del camino. Requiere tocar `index.html` (producción) |
| 4 | **Números reales** | Diferidos por decisión (10-ago). Cuando se quieran: cobertura de recetas · cobertura de inventario · platillos costeados · total de alertas · tiempo exacto. **Financieros de operadores NUNCA** |
| 5 | **Cuando la demo deje de ser manual** | Cambiar dos frases: el cierre del bloque 4 y el punto 1 del bloque 6 |

## 5.b Lo que quedó construido (11-ago)

| Pieza | Dónde |
|---|---|
| **`/demo`** — 7 bloques + animación de 3 beats sincronizada con el stepper | `zenetapp.com/demo` |
| **`/privacidad`** — *"Cómo cuidamos tus documentos"* | `zenetapp.com/privacidad` |
| **Entrada contextual** — *"Mira cómo funciona →"* al cierre de la Etapa 1 | `index.html` |
| **Entrada permanente** — *"Demo"* en el navbar (texto teal subrayado, no botón) | `index.html` |

**Decisiones de diseño que quedaron canónicas:**

1. **Cada ítem necesita SU figura.** Palomas o puntos idénticos son decoración, no información — se cambiaron por figuras distintas en los documentos (menú/estado de resultados/costeo/manual), las garantías (persona/candado/papelera) y los entregables (índices/barras/alerta/rejilla con hueco).
2. **Un bloque largo se arregla con jerarquía, no recortando argumento.** El bloque 2 bajó 25% metiendo la prueba en el encabezado, el par esencial en tarjetas grandes y los extras en rejilla 2×2.
3. **El bloque de honestidad funciona como panel de términos** (afirmación | explicación con líneas finas) — se lee como letra chiquita puesta a la vista.
4. **Los componentes de la landing se reutilizan tal cual:** banda tintada, stepper de línea de proceso, tarjeta aurora, eyebrows, tokens.
5. **La animación enseña el paso más abstracto.** Tres beats (documentos → revisión área por área → el análisis se dibuja) sincronizados con el stepper: cada beat enciende su paso. JS timer + IntersectionObserver + `prefers-reduced-motion`; escena oculta en móvil.
6. **El enlace vive donde el contenido coincide.** Se descartó repetir "Mira cómo funciona" en Etapas 2 y 3: /demo **es** la Etapa 1, y prometer otra cosa erosiona confianza.
7. **Jerarquía de CTA intacta:** el hero de la landing conserva un solo botón ("Hablemos"). "Demo" es enlace de texto — informa sin competir.

**Sobre el aviso de privacidad — decisión del 11-ago:** en vez de un aviso legal formal, se escribió una página **honesta y sin pretensión legal**. Razones: Zenet aún no es persona física con actividad empresarial ni tiene domicilio, y un aviso formal sin eso finge una figura que no existe. Precisión que bajó la urgencia: **los documentos operativos son datos de negocio, no datos personales** — el dato personal es el del formulario, obligación que ya existía desde julio con Formspree. La página declara con nombre a **Anthropic** como procesador (y que no entrena con el contenido) y cierra con una nota que admite el estado real. **Trigger de reemplazo:** cuando Zenet se constituya + primer Socio Fundador firmado → aviso formal LFPDPPP con abogado (Tier 2.0), junto con el contrato y el DPA.

---

## 6. Cross-doc

| Doc | Relación |
|---|---|
| `01-landing-page/01-copy.md` v0.3 | El copy de la landing — esta página hereda voz, vocabulario y la Etapa 1 |
| `01-landing-page/02-prototipo-y-diseno.md` v3.0 | Tokens, componentes y el esquema SVG canónico |
| `Product Strategy/_templates/guion-pitch-deck-v0.1.md` | El deck comparte el arco y la figura de la Etapa 1 |
| `Product Strategy/03-oferta-y-pricing/06-argumentacion-de-valor-y-precio.md` | El diagnóstico como primer entregable defendible |
| `Market Research/02-customer-research/04-customer-journey-detallado.md` §3.6.7 | La estrategia de demo que esta página productiza |

---

*v0.1 · 2026-08-11 · copy, diseño, animación y deploy cerrados. EN VIVO en zenetapp.com/demo (tag v3.1).*
