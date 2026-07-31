---
name: Argumentación de valor y precio — cómo se defiende el costo de Zenet en dinero
description: Documento de trabajo que consolida cómo se argumenta el valor económico de Zenet frente al operador sin inventar cifras. Mapa de gastos del restaurante → dónde toca Zenet · diagnóstico costo teórico vs costo real (la varianza como lo recuperable) · el punto porcentual como unidad de conversación · frontera honesta Fase 1 vs Fase 2 · síntesis del problema que Zenet realmente ataca · evaluación del precio desde el lado cliente y desde el lado Zenet · lista explícita de anti-claims. Hypothesis-level · NO redefine pricing · NO es guión de venta. Insumo para 05-wtp-validation-plan y 04-go-to-market/04-sales-motion.
type: product-strategy
research_stage: discovery-pre-PMF
last_updated: 2026-07-31
status: draft
version: 0.1
owner: Alan Bahena
---

# Argumentación de valor y precio

> **Cómo se defiende el costo de Zenet en dinero, frente al operador, sin inventar cifras.**
>
> Documento de trabajo derivado de una sesión de análisis del **2026-07-31**. Consolida el razonamiento económico que conecta el mapa de gastos de un restaurante con lo que Zenet Fase 1 realmente entrega — y con lo que todavía no puede prometer.
>
> **Estado: `draft` · hypothesis-level.** Varias piezas se van a mover cuando Fase 1 cierre alcance y costos reales. Ver §9 para los disparadores de revisión.

---

## Convención de etiquetas de origen

Cada cifra en este documento lleva su origen visible. Cuando lo releas en dos semanas, esto es lo que te dice qué es dato y qué es supuesto.

| Etiqueta | Significa |
|---|---|
| `[Ancla v0.1]` | Decisión canónica del workspace, sin validar con clientes todavía |
| `[Hipótesis]` | Supuesto explícito · sin evidencia propia ni externa verificada |
| `[Research]` | Proviene del research backbone con fuente citada en el doc origen |
| `[Aritmética]` | Cálculo, no afirmación. Verdadero por construcción |
| `[SIN FUENTE PUBLICADA]` | Se usa el dato pero no hay fuente verificada. No citar externamente |

---

## Índice

1. Propósito y disciplina del documento
2. El mapa de gastos → dónde toca Zenet
3. El diagnóstico: costo teórico vs costo real
4. El punto porcentual como unidad de conversación
5. Qué fugas toca Fase 1 y cuáles son Fase 2
6. El problema que Zenet realmente ataca
7. Evaluación del precio — lado cliente vs lado Zenet
8. Anti-claims — lo que no se dice
9. Qué revisar cuando cambien los números
10. Hipótesis abiertas + cross-references

---

## 1. Propósito y disciplina del documento

### 1.1 Qué es

Este doc responde una pregunta operativa concreta: **cuando un operador te enseña sus números, ¿qué puedes decirle honestamente sobre lo que Zenet le mueve?**

Nace de un caso real de conversación: un restaurante con costo de insumos entre **30% y 35%** del ingreso, y la pregunta directa de cuánto puede mejorar eso Zenet en términos numéricos.

### 1.2 Qué NO es

| No es | Dónde vive eso |
|---|---|
| Redefinición del pricing | `03-pricing-tiers-hipotesis.md` v0.1 |
| Modelo financiero o unit economics | `04-viabilidad-economica-y-cogs.md` v0.1 · `05-capital-y-finanzas/02-financial-model` |
| Guión de venta operacional | `04-go-to-market/04-sales-motion-three-session-demo.md` v0.1 |
| Metodología de validación de WTP | `05-wtp-validation-plan.md` v0.1 |
| Redefinición del posicionamiento | `Branding/_context/01-brand-strategy/posicionamiento.md` v1.5 |

### 1.3 La disciplina que gobierna este doc

**Zenet tiene cero clientes con datos propios.** Cualquier porcentaje de ahorro que salga de este documento o de tu boca en una sesión es inventado — y un operador con doce años en la industria lo detecta.

De ahí las tres reglas:

1. **Ningún % de impacto.** Ni de food cost, ni de mermas, ni de horas recuperadas.
2. **Aritmética sí, promesa no.** Mostrar cuánto vale un punto en *su* negocio es matemática. Prometer que se lo vas a entregar es ficción.
3. **El diagnóstico es el entregable defendible.** Lo único que puedes prometer hoy con evidencia es que vas a hacer visible algo que hoy no lo es.

---

## 2. El mapa de gastos → dónde toca Zenet

### 2.1 La tabla de referencia

Estructura de gastos típica de un restaurante como porcentaje del ingreso. `[SIN FUENTE PUBLICADA]` — los rangos son consistentes con benchmarks estándar del sector, pero la tabla original no trae fuente ni año. **No usar externamente sin verificar.**

| Concepto | % del ingreso |
|---|---|
| Alquiler | 10-20% |
| Servicios públicos (luz, agua, gas) | 3-5% |
| Sueldos y salarios | 25-35% |
| Insumos y materia prima | 25-30% |
| Marketing y publicidad | 5-10% |
| Mantenimiento | 3-5% |

### 2.2 Las dos observaciones que importan

**Primera — el prime cost es el juego completo.**

Sueldos (25-35%) + insumos (25-30%) = **50-65% del ingreso en dos líneas**. `[Aritmética]`

Las otras cuatro se deciden una vez al año (renta, marketing) o son prácticamente fijas (servicios, mantenimiento). El único dinero que se mueve **todos los días** está en esas dos — y es exactamente donde vive el back-of-house.

**Segunda — la tabla suma 71-105%.** `[Aritmética]`

En el techo de cada rango, el restaurante pierde dinero. El margen vive en la diferencia entre el piso y el techo, y esa diferencia se pelea diario, en dos líneas. Es un buen abridor de conversación porque el operador lo reconoce de inmediato.

### 2.3 Línea por línea

| Concepto | % | ¿Zenet? | Qué hace exactamente |
|---|---|---|---|
| **Insumos y materia prima** | 25-30% | **Directo — objetivo #1** | Fase 1: catálogo de insumos, recetas y proveedores estandarizado (E2) + costeo de cada platillo con precios reales de las facturas subidas (E5) + porciones fijas consultables (E1). Ahí vive la merma y el food cost |
| **Sueldos y salarios** | 25-35% | **Indirecto — y con candado** | Zenet **no recorta nómina** (valor #1: aumentar, no reemplazar). Lo que sí: manual operativo (E1) + organigrama (H1) + mapa de procesos (H2) hacen que el que entra aprenda leyendo, no preguntándole al chef. Ataca el costo escondido de la rotación y el tiempo del dueño haciendo trabajo de sistema |
| **Mantenimiento** | 3-5% | **Directo (chico pero real)** | Protocolos y checklists de mantenimiento preventivo dentro del manual (E1 + H2). Fue el **dolor #1 de Carlos en Alma Verde** (sesión 2026-07-14) — por eso "Mantenimiento y permisos" ya es un área del tablero en la landing v2 |
| **Servicios públicos** | 3-5% | Marginal | Solo de rebote (protocolos de apagado, refrigeración con mantenimiento al día). No vender por aquí |
| **Alquiler** | 10-20% | No | Negociación anual, no operación diaria |
| **Marketing y publicidad** | 5-10% | No | Front-of-house. Fuera del scope declarado |

### 2.4 La lectura estratégica

Zenet toca **dos líneas con fuerza, una de refilón y tres nada**. Y las dos que toca son las dos grandes. Eso es coherencia de scope, no una limitación: el back-of-house *es* el prime cost.

---

## 3. El diagnóstico: costo teórico vs costo real

### 3.1 El 30-35% no es un número. Son dos números encimados.

| Concepto | Definición |
|---|---|
| **Costo teórico** | Lo que *debería* costar: cada receta costeada × unidades vendidas |
| **Costo real** | Lo que *efectivamente* salió: compras + inventario inicial − inventario final |
| **Varianza** | La diferencia entre ambos. **Esta es la parte recuperable** |

### 3.2 Por qué la distinción es load-bearing

El **costo teórico** es estructura: precios de proveedor, mix de menú, ingeniería de precios del menú. Casi no se mueve con software — se mueve renegociando con proveedores o subiendo precios de venta.

La **varianza** sí se mueve. Y ahí está el hallazgo central:

> **El operador que te enseña "estoy en 32%" casi nunca sabe cuál de los dos números es ese.**

Es el real. Su teórico no existe, porque nunca escribió la receta con gramajes y precios. Y no la escribió porque no le hacía falta: él *sabe* cuánto lleva ese platillo. Lo sabe de verdad. Lleva doce años sabiéndolo.

### 3.3 La consecuencia para el producto

**Zenet Fase 1 no ataca el 32%. Hace que el costo teórico exista por primera vez, y con eso la brecha se vuelve visible.**

Ese diagnóstico es el primer entregable real y es lo único que puedes prometer hoy sin mentir. No requiere Fase 2, no requiere inventario en tiempo real, no requiere integración con POS. Requiere las recetas, las facturas y una semana.

### 3.4 El diagnóstico como instrumento de validación

Esto conecta directo con **H6 de Fase A** (el pozo de valor · el "QUE pagarían", no el cuánto).

En el levantamiento del Día 1 se captura baseline con lo que el operador ya tiene: 3 meses de facturas, ventas, su porcentaje real. Se costea el menú. **La brecha teórico-vs-real del Día 1 es el primer dato duro de Zenet** — y probablemente se obtiene en la primera semana, sin esperar a Mes 3.

Ese número, medido en un restaurante real con nombre y apellido, vale más que cualquier benchmark citable. Es el que va a la landing v3, al pitch de pre-seed y a la segunda conversación de venta.

---

## 4. El punto porcentual como unidad de conversación

### 4.1 Definición

Un **punto** es un punto porcentual de costo de insumos medido **contra la venta**. Es vernáculo real del sector: *"bajé dos puntos"*, *"ando tres puntos arriba del año pasado"*.

### 4.2 La mecánica

Restaurante con venta mensual de **$1,000,000 MXN**: `[Aritmética]`

| Food cost | Gasto en insumos |
|---|---|
| 32% | $320,000 |
| 31% | $310,000 |
| | **Diferencia: $10,000 / mes** |

Pasar de 32% a 31% = **bajar un punto** = $10,000 al mes = $120,000 al año.

### 4.3 El error de cálculo común

Un punto se mide contra la **venta**, no contra los **insumos**. `[Aritmética]`

- 1 punto de food cost = 1% de la venta = **$10,000** ✅
- 1% de los insumos = 1% de $320,000 = **$3,200** ❌

**Regla rápida: un punto = el 1% de la venta mensual**, sin importar en qué porcentaje esté parado el restaurante.

### 4.4 Tabla de sensibilidad

Valor de un punto y peso relativo de la suscripción. Precio de referencia $1,500 MXN/mes/sucursal (Esencial) `[Ancla v0.1]`, food cost supuesto 32%:

| Venta mensual | Insumos al 32% | 1 punto vale | Suscripción como % de un punto |
|---|---|---|---|
| $500,000 MXN | $160,000 | **$5,000 / mes** | 30% |
| $1,000,000 MXN | $320,000 | **$10,000 / mes** | 15% |
| $2,000,000 MXN | $640,000 | **$20,000 / mes** | 7.5% |

Con Pro a $1,999 `[Ancla v0.1]` las proporciones son 40% / 20% / 10% respectivamente. En ambos casos, **la suscripción cuesta menos de la mitad de un punto** en cualquier escenario de venta razonable del ICP.

### 4.5 Por qué esta unidad y no otra

Un punto de insumos cae **completo** a la utilidad. No cambió la renta, ni la nómina, ni el precio del menú — se vendió lo mismo y se gastó menos comprando. Ese peso llega intacto abajo.

Ahí es donde pega en la conversación: si el restaurante deja, por ejemplo, 8% neto, **un solo punto de insumos es un octavo de toda la utilidad del mes**. No es un ahorro operativo abstracto — es una fracción visible de lo que el dueño se lleva a su casa.

### 4.6 El guión honesto

> *"No sé cuántos puntos hay escondidos en tu operación. Tú tampoco — y eso es justo el problema. Lo que sí sé es que la suscripción cuesta menos de un tercio de un punto. Si encontramos uno solo, ya salió tres veces. Si no encontramos ninguno, te ahorré la duda y te vas."*

Esto no promete nada, hace el precio irrelevante, y es honestidad bilateral — que es exactamente la voz de la invitación de Socio Fundador.

---

## 5. Qué fugas toca Fase 1 y cuáles son Fase 2

### 5.1 Mapa de fugas

| Fuga | ¿Fase 1? | Capacidad |
|---|---|---|
| Recetas nunca costeadas / nunca recosteadas | **Sí** | E2 Estandarización + recetario |
| Porción sin estandarizar (cada cocinero sirve distinto) | **Sí** | E1 Manual Operativo + receta fija |
| Proveedor subió precio y nadie lo notó | **Sí** | E5 upload de facturas → precios reales |
| Platillos vendidos por debajo de costo sin saberlo | **Sí** | Sale solo al costear el menú completo |
| Merma física, robo, consumo de personal | **Parcial** | Solo si hay conteo físico periódico y el operador lo sube |
| Detección automática de varianza, alertas de precio, inventario vivo | **No** | F1 / F4 · Fase 2 (Q3-Q4 2027) |

### 5.2 El riesgo estructural del "parcial"

La varianza es calculable en Fase 1 **si el operador hace conteo físico y sube los datos**. Ese "si" es el riesgo #1 del modelo.

El modo de falla dominante post-firma documentado en el research no es que el software se rompa — es que **la disciplina se cae**: *"The software isn't broken. The discipline is."* `[Research]` (Bruce Nelson · `02-customer-research/06-objeciones` §4.6)

Un cliente que no cuenta no tiene varianza que medir, y el costeo se vuelve teatro. El acantilado del **Mes 6** `[Research]` es exactamente esto materializado.

**Implicación operativa:** el onboarding de alto contacto (E6) no es un lujo comercial. Es la contramedida al único riesgo que mata el valor entregado.

### 5.3 La frontera honesta en la venta

- ❌ No prometer: *"Zenet se integra con tu POS y detecta tus mermas automáticamente."* F7 (integración POS API) fue **removido del roadmap canónico** por barreras estructurales validadas en research 2026-05-26.
- ✅ Sí prometer: *"Zenet trabaja sobre tu POS actual. Tú subes tus facturas y tus ventas — por foto, por archivo o por WhatsApp — y Zenet te dice cuánto debería costarte cada platillo y cuánto te está costando."*

---

## 6. El problema que Zenet realmente ataca

### 6.1 En una frase

> **El criterio del operador funciona, pero no se puede copiar.**

Vive en su cabeza. Se ejecuta de memoria. Y se ejecuta distinto cada turno, con cada persona, en cada sucursal donde él no está parado.

### 6.2 Cómo el análisis de costos lo comprueba

El operador dice **"estoy en 32%"**. Eso no es ignorancia — es un dato real que saca solo, sin software. **Conoce su resultado.**

Lo que no tiene es el **por qué**. No hay costo teórico contra el cual comparar. Y no lo hay porque el mecanismo que produce ese 32% nunca salió de su cabeza.

> **Conoce el resultado. No puede explicar el mecanismo. Y no puede explicarlo porque el mecanismo nunca se escribió.**

Mientras él está parado en la cocina, el mecanismo funciona perfecto: su criterio corrige la porción, huele el producto que ya no sirve, sabe que ese proveedor subió. **El sistema sí existe — y es él.**

El día que abre la segunda sucursal, el sistema no se rompe. Simplemente deja de llegar.

### 6.3 Alineación con el antagonista canónico

Esto es la expresión económica del antagonista ya canónico del workspace: **"el sistema atrapado en una sola cabeza: funciona pero no escala"** (reframe 2026-06-03 · `Branding/_context/02-brand-story/narrativa.md` v1.1).

Este documento **no redefine** el antagonista. Lo traduce al lenguaje de la tabla de gastos, que es el lenguaje en el que el operador ya piensa.

### 6.4 Por eso el mensaje no es "no tienes sistema"

Decirle eso es un ataque a su identidad, y el research lo documenta explícitamente: *"yo SOY el sistema"* `[Research]` (V-001 / V-010 · `02-customer-research/07-voice-of-customer.md`). Tiene razón. Lo es.

El mensaje correcto es: **"Zenet extiende tu sistema a donde tú no estás."**

Y eso es literalmente lo que hacen las 8 capacidades de Fase 1. No inventan criterio nuevo. Sacan el criterio que ya existe —recetas, porciones, proveedores, procesos, protocolos— de la cabeza del operador y lo dejan escrito, consultable y ejecutable por alguien más. **El costeo del menú no es el producto: es la prueba de que el criterio ya salió de ahí.**

### 6.5 Lo que NO es el problema

| No es | Por qué importa la distinción |
|---|---|
| "Gastan de más" | Muchos gastan bien. No pueden demostrarlo ni repetirlo sin estar presentes |
| "Les falta software" | Ya tienen POS, Excel y despacho contable. Zenet no compite con eso — se monta encima |
| "No saben sus números" | Saben el resultado. No saben la composición |
| "Necesitan reemplazar gente" | Al revés. El criterio que se copia hace que la gente que ya tienen valga más |

### 6.6 Por qué es el problema correcto

Explica el resto de las decisiones canónicas sin forzar ninguna:

- **Por qué el beachhead son 2-3 sucursales.** No es preferencia de segmentación — es el punto exacto donde nace el dolor. Con una sucursal y el dueño adentro, el problema no existe.
- **Por qué el verdadero incumbente es "ningún sistema".** No compites contra SoftRestaurant. Compites contra una cabeza que funciona. `[Research]` (V-001)
- **Por qué Carlos, en Alma Verde, no habló de food cost.** Ya tenía eso resuelto — y su dolor #1 seguía siendo protocolos y mantenimiento. Misma enfermedad, otro órgano: el criterio que no alcanza a llegar a cada rincón. **N=1 · posible outlier · no pivotear con una muestra.**
- **Por qué la promesa es tiempo y tranquilidad, no ahorro.** Lo que se recupera cuando el criterio se copia solo es la cabeza del operador.

### 6.7 Estado de validación

Esto sigue siendo **hipótesis**. Es lo que **H1-H3 de Fase A** existen para probar o tumbar.

Una sesión presencial lo apoya y ninguna lo contradice todavía. Eso es **señal, no validación**.

**Kill criteria (puesto de antemano):** si en las próximas 4-5 sesiones los operadores no reconocen este dolor con sus propias palabras —sin que se les ponga en la boca— el problema está mal planteado.

---

## 7. Evaluación del precio — lado cliente vs lado Zenet

> La pregunta *"¿lo vale?"* tiene dos respuestas distintas según de qué lado de la mesa se haga.

### 7.1 Lado cliente: sí, y no está cerca

Un restaurante de $1M/mes paga $2,000 = **0.2% de su venta**. `[Aritmética]` Un punto de insumos vale $10,000. La suscripción cuesta **una quinta parte de un punto**.

Para que $2,000 sea mala inversión, Zenet tendría que no encontrar ni siquiera 0.2 puntos en toda la operación. En un restaurante que nunca costeó una receta, eso es difícil de imaginar.

**Pero ese argumento no sirve para vender.** Es circular: asume que Zenet entrega el punto, que es justamente lo que no se puede probar todavía. Un operador con oficio lo tumba en una frase: *"eso me lo dijo el de PoloTab también"*.

### 7.2 El riesgo real no es que sea caro

Contra el mercado que el operador conoce `[Research]` (`02-customer-research/05-buying-process` §5.2):

| Vendor | Precio referencia MXN/mes |
|---|---|
| Fudo Pro | $1,050 |
| PoloTab | $1,490 |
| Bistrosoft Pro | $1,599 |
| **Zenet Esencial** | **$1,500** `[Ancla v0.1]` |
| **Zenet Pro** | **$1,999** `[Ancla v0.1]` |

Zenet Pro queda **arriba de todos**, y no es un POS. Eso dispara la peor pregunta posible:

> *"¿Por qué te pago más que a mi punto de venta, si no me das punto de venta?"*

Ahí es donde el **anclaje dual** tiene que hacer su trabajo, y por eso existe el strip anti-POS de la landing v2 (*"Tu POS se queda. El caos se va."*).

- Si la conversación se queda comparando contra software de restaurante → $2,000 se ve **caro**.
- Si se mueve a *"esto es un equipo de especialistas, no un programa"* → $2,000 se ve **absurdamente barato**: el equivalente humano son **$105K-185K MXN/mes** `[Research]` (`03-competitive-analysis/07-defensibility` §4.1.3), un arbitraje de **70-100x**.

**El trabajo en la venta no es defender el precio. Es cambiar contra qué se compara.**

### 7.3 El riesgo espejo: demasiado barato

A $2,000, prometiendo *"un equipo de especialistas"*, el precio es tan bajo que **puede leerse como poco serio**. Cobrar menos que un POS por algo que se declara más grande que un POS es una señal contradictoria. El precio comunica categoría.

### 7.4 Lado Zenet: es delgado, y ya está documentado

| Hecho | Fuente |
|---|---|
| ARPA de $75-180 USD es **bajo** para B2B SaaS sostenible | `04-viabilidad-economica-y-cogs` §hallazgo 2 |
| Break-even en **14-21 clientes** (escenario mixto B) | `04-viabilidad-economica-y-cogs` |
| Onboarding presencial del fundador + llamadas quincenales 90 días, **incluido** | `02-programa-socio-fundador-offer` |
| El camino a rentabilidad depende de recargar la mezcla a Multi-Sitio y Enterprise | `04-viabilidad-economica-y-cogs` §hallazgo 3 |

**Traducido: $2,000 no es un precio de negocio. Es un precio de validación.**

Está bien que lo sea ahora — se está comprando aprendizaje y los primeros casos con nombre y apellido. Pero no debe confundirse con el precio que sostiene la empresa a 50 clientes.

### 7.5 Lo que de verdad decide si "lo vale"

No es el número. Es si el valor **se ve**.

El modo de falla no es cancelar por caro — es el **acantilado del Mes 6** `[Research]`: el operador deja de abrirlo, deja de subir datos, y a los seis meses ya no sabe por qué paga. **$2,000 invisibles duelen más que $5,000 visibles.**

Por eso el diagnóstico teórico-vs-real del Día 1 no es un extra: es el artefacto que hace visible el valor desde la primera semana. Y por eso el manual operativo tiene que ser algo que el gerente **abra**, no algo que exista.

### 7.6 Recomendación

**No mover el precio ahora.** La decisión canónica de diferir el precio exacto a Mes 3 es correcta y no debe apurarse: cambiar el número antes de tener datos de comportamiento sería adivinar dos veces.

Lo que sí cambia es **de qué se habla cuando sale el precio**. Hay tres cosas honestas que decir hoy, y ninguna es un porcentaje:

1. **Cuánto vale un punto en su negocio** — aritmética, no promesa (§4)
2. **Contra qué se compara de verdad** — equipo de especialistas, no software (§7.2)
3. **Qué se lleva aunque se salga en 90 días** — recetas costeadas, procesos escritos, manual suyo, exportable

El tercero es el más fuerte y el menos usado. Convierte $2,000/mes en algo con piso: aunque Zenet no le sirva, sale con su operación escrita por primera vez en doce años.

---

## 8. Anti-claims — lo que no se dice

> Lista explícita. Si alguna de estas frases aparece en una sesión, en la landing o en un deck, es un error de disciplina, no una licencia de marketing.

| ❌ No decir | Por qué |
|---|---|
| *"Bajamos tu food cost 2-3 puntos"* | Cero evidencia propia. N=0 clientes |
| *"Recuperas la inversión en N meses"* | La misma promesa disfrazada de ROI |
| *"Los restaurantes desperdician X% de sus insumos"* | Hay cifras circulando, pero ninguna verificada en este workspace ni medida en México en casual independiente. Si se cita, con fuente y año — o no se cita |
| *"Te ahorramos ~28 horas al mes"* / *"~3% de mermas"* | Son **hipótesis** de la promesa de marca, no resultados medidos. No presentar como dato |
| *"Zenet se integra con tu POS"* | F7 removido del roadmap canónico por barreras estructurales validadas |
| *"Tu inventario en tiempo real"* | Fase 2 (F1). Fase 1 es periódico y depende de que el operador suba datos |
| *"No vas a necesitar tanta gente"* | Viola el valor #1 (aumentar, no reemplazar) y expulsa al ICP correcto |
| *"No tienes sistema"* | Ataque a la identidad del operador. Contradicho por el research (*"yo SOY el sistema"*) |

---

## 9. Qué revisar cuando cambien los números

> Este doc se escribió con el alcance y los costos de Fase 1 tal como estaban al **2026-07-31**. Varias piezas se van a mover. Estos son los disparadores explícitos.

| Disparador | Qué invalida en este doc | Acción |
|---|---|---|
| **Se cierra el precio real de Fase 1** (Mes 3 · post-triangulación WTP) | §4.4 tabla de sensibilidad · §7.1 aritmética · §7.2 tabla competitiva | Recalcular las 3 tablas · revisar si el argumento de "menos de medio punto" sigue en pie |
| **Se observan COGS reales** con los primeros clientes | §7.4 completo (el argumento de "precio de validación") | Actualizar contra `04-viabilidad-economica-y-cogs` v0.2 |
| **Primer diagnóstico teórico-vs-real de un cliente real** | §3.4 · §8 (la línea de anti-claims sobre puntos) | **Este es el disparador mayor.** Es el momento en que se puede dejar de decir "no sé" y empezar a decir un número medido. v0.1 → v1.0 |
| **Cambia el alcance de Fase 1** (recortes o adiciones vs las 8 capacidades) | §2.3 · §5.1 mapa de fugas | Re-mapear qué fuga toca qué capacidad |
| **4-5 sesiones de Fase A completadas** | §6.7 estado de validación | Confirmar o tumbar el planteamiento del problema (§6.1) |
| **Se valida o se cae el anclaje dual** en sesiones reales | §7.2 | Si los operadores insisten en comparar contra POS pese al strip anti-POS, el problema es de mensaje, no de precio |

---

## 10. Hipótesis abiertas + cross-references

### 10.1 Hipótesis abiertas de este doc

| # | Hipótesis | Cómo se prueba |
|---|---|---|
| **HV-01** | El operador del ICP no tiene costo teórico calculado | Preguntar en sesión: *"¿cuánto te cuesta hacer tu platillo más vendido?"* · si contesta con un número que puede desglosar, la hipótesis falla |
| **HV-02** | La brecha teórico-vs-real es material (≥1 punto) en el ICP | Primer levantamiento de Día 1 con un design partner |
| **HV-03** | El frame del punto porcentual mueve la conversación de precio | Observar si la objeción de precio cae después de usarlo · señal revelada, no declarada |
| **HV-04** | El anclaje "equipo de especialistas" vence al anclaje POS | Contar cuántas sesiones derivan en la pregunta *"¿por qué más caro que mi POS?"* |
| **HV-05** | El operador valora el artefacto exportable (§7.6 punto 3) | Mencionarlo y observar reacción · ¿pregunta por él sin que se insista? |

### 10.2 Inputs (upstream)

| Doc | Qué aporta |
|---|---|
| `03-oferta-y-pricing/03-pricing-tiers-hipotesis.md` v0.1 | Ancla de precio 4 tiers |
| `03-oferta-y-pricing/04-viabilidad-economica-y-cogs.md` v0.1 | ARPA · break-even · COGS · hallazgos load-bearing |
| `03-oferta-y-pricing/05-wtp-validation-plan.md` v0.1 | Metodología de triangulación · Mes 3 GO/NO-GO |
| `02-features-y-scope/00-fase-1-mvp-scope.md` v0.1 | Las 8 capacidades E1-E6 + H1-H2 |
| `02-features-y-scope/01-roadmap-hipotesis-fase-1.5-y-2.md` v0.1 | Frontera Fase 1 vs 2 · F7 removido |
| `02-customer-research/05-buying-process` §5.2 | Precios competitivos MX |
| `02-customer-research/06-objeciones` §4.0 + §4.6 | Acantilado Mes 6 · colapso de disciplina |
| `02-customer-research/07-voice-of-customer` V-001 / V-010 | *"Yo SOY el sistema"* |
| `03-competitive-analysis/07-defensibility` §4.1.3 | Arbitraje 70-100x |
| `04-go-to-market/06-plan-de-activacion-y-validacion-fase-a.md` v0.1 | H1-H6 · Mom Test · kill criteria |
| `Branding/02-brand-story/narrativa.md` v1.1 | Antagonista canónico |

### 10.3 Outputs (downstream)

| Destino | Qué consume |
|---|---|
| `04-go-to-market/04-sales-motion-three-session-demo.md` | §4 frame del punto · §7.6 los tres argumentos · §8 anti-claims |
| `05-wtp-validation-plan.md` v0.2 | §3.4 el diagnóstico como métrica conductual |
| `04-go-to-market/09-bitacora-semanal-fase-a.md` | §10.1 hipótesis a observar en sesión |
| Kit de Fase A (`_templates/`) | Calculadora "cuánto vale un punto" (pendiente) |
| Landing v3 (futuro) | El primer número medido, cuando exista |

### 10.4 Anti-scope explícito

| Información | Dónde va |
|---|---|
| Tiers y números exactos de pricing | `03-pricing-tiers-hipotesis.md` |
| Modelo financiero, proyecciones, runway | `05-capital-y-finanzas/02-financial-model` |
| Guión palabra por palabra de la sesión | `04-go-to-market/04-sales-motion` + `_templates/guion-conversacion-y-demo-fase-a.md` |
| Especificaciones de producto | Production repo |
| Copy de la landing | `SEO and Content/_context/01-landing-page/01-copy.md` |

---

## Notas

- **Origen.** Sesión de análisis conversacional del 2026-07-31, disparada por una tabla de estructura de gastos de restaurante y la pregunta directa de cuánto mejora Zenet la línea de insumos.
- **Disciplina anti-ficción.** El doc no contiene un solo porcentaje de impacto. Todo lo cuantitativo es aritmética condicional o cifra heredada con fuente.
- **Este doc no decide nada nuevo.** Traduce decisiones canónicas existentes al lenguaje económico del operador. Si algo aquí contradice un doc canónico, gana el canónico.
- **Documento vivo con fecha de caducidad corta.** §9 lista los disparadores. El mayor es el primer diagnóstico real con un cliente.

### Changelog

- **v0.1 (2026-07-31).** Documento base. 10 secciones. Mapa de gastos línea por línea con frontera de scope. Diagnóstico costo teórico vs real como primer entregable defendible. Frame del punto porcentual como unidad de conversación con tabla de sensibilidad. Mapa de fugas Fase 1 vs Fase 2 con el riesgo de disciplina explícito. Síntesis del problema que Zenet ataca alineada al antagonista canónico. Evaluación de precio bilateral (cliente vs Zenet · $2,000 como precio de validación). Lista de 8 anti-claims. 6 disparadores de revisión. 5 hipótesis abiertas HV-01..05.

---

*Last updated: 2026-07-31.*
*Next planned update: primer diagnóstico teórico-vs-real con un design partner real · O cierre del precio de Fase 1 post-Mes 3 · O 4-5 sesiones de Fase A completadas.*
