---
name: Estructura y ecosistema
description: Cadena de valor del back-of-house, actores del ecosistema externo y mapa de roles internos del restaurante
type: market-research
last_updated: 2026-04-30
status: active
version: 1.0
owner: Alan Bahena
---

# Estructura y ecosistema

Los primeros cinco documentos de este subfolder contestaron preguntas de mercado: qué industria, qué tan grande, a quién atacamos primero, cómo se ve esa persona. Lo que falta es la **anatomía**: cómo opera por dentro un restaurante casual independiente y con quién interactúa por fuera. Este documento cubre la cadena de valor del back-of-house, los roles internos y las capas del ecosistema externo, con foco en Tijuana y Baja California.

---

## Índice

**Propósito**
1. Propósito y cómo leer este mapa

**Bloque A — Adentro del restaurante**
2. Cadena de valor del back-of-house
3. Mapa de roles internos

**Bloque B — Afuera del restaurante (ecosistema)**
4. Capa upstream — proveedores, logística e insumos
5. Capa downstream — canales de venta
6. Capa de software preexistente y la realidad de las integraciones en MX
7. Capa institucional y regulatoria *(resumen — profundidad en doc 08)*
8. Capa de financiamiento y capital de trabajo
9. Capa de talento, formación y consultoría
10. Capa de medios, comunidad y eventos

**Bloque C — Implicaciones para Zenet**
11. Mapa visual del ecosistema
12. Implicaciones por capa
13. Buying committee resuelto
14. Hipótesis de canal y partnerships iniciales
15. Puente al platform play

**Cierre**
16. Fuentes consultadas
17. Hipótesis abiertas y pendientes de validar

---

## 1. Propósito y cómo leer este mapa

### Para qué existe este documento

Este documento mapea tres capas que el resto del subfolder no cubre:

1. **La cadena de valor del back-of-house** — el flujo operativo end-to-end desde la compra de insumos hasta el análisis del día.
2. **El mapa de roles internos** — quién hace qué dentro del restaurante, cómo varía por tamaño, y cómo se forma el buying committee para decisiones de software operativo.
3. **El ecosistema externo** — proveedores, canales de venta, software preexistente, instituciones, financiamiento, talento, medios y comunidades que tocan al restaurante desde fuera.

Sin esto no podemos contestar preguntas operativas concretas: por dónde entra Zenet en el flujo del operador, quién decide la compra y quién la bloquea, con qué software preexistente convivimos, quiénes son intermediarios que pueden volverse canal de adquisición, dónde mostrarnos para hablar con operadores reales en lugar de foodies.

El documento es descriptivo en su mayor parte. La lectura estratégica vive en las secciones 12-15.

### Convenciones de lectura

**Foco geográfico.** Tijuana y Baja California en primer plano. México nacional como referencia comparativa cuando el dato local no existe o es insuficiente. La detalle de expansión geográfica vive en `07-geografia-y-expansion.md`.

**Etiquetado de la fuente.** Las cifras del documento llevan una etiqueta visible que aclara qué tan local es el dato:

- **[Dato MX casual independiente]** cuando hay fuente mexicana específica para el segmento.
- **[Dato MX sector restaurantero]** cuando la fuente es mexicana pero agregada al sector.
- **[Proxy global, calibrado a MX]** cuando usamos benchmarks internacionales por ausencia de fuente local.
- **[Estimación cualitativa]** cuando la afirmación es razonada pero sin respaldo cuantitativo publicado.

**Voz del operador.** Donde existen citas textuales de operadores mexicanos en prensa, podcasts, foros o testimonios institucionales, las incluimos con atribución. La voz del segmento es ella misma evidencia.

**"En Tijuana hoy" vs equivalente nacional.** Dentro de cada sub-sección sobre actores externos, marcamos explícitamente la presencia local cuando aplica.

**Citas inline.** Usamos formato `(Fuente, año)`. La lista completa de fuentes con URLs vive en la sección 16.

### Qué NO encontrarás aquí

- **Detalle regulatorio.** SAT, COFEPRIS, IMSS, Profeco, sanidad municipal, alcohol y zonificación BC. Resumen breve en sección 7. Profundidad completa en `08-entorno-regulatorio.md`.
- **Análisis de expansión geográfica.** Sonora, Querétaro, CDMX, LATAM viven en `07-geografia-y-expansion.md`.
- **Análisis competitivo dedicado al espacio SaaS B2B restaurantero.** La sección 6 mapea el software preexistente del operador. El análisis competitivo full —jugadores, funding, posicionamiento, diferenciación— vive en un documento dedicado dentro de `03-competitive-analysis/` que se redactará después.
- **Detalle del producto Zenet.** La sección 12 nombra dónde Zenet toca cada capa, pero la especificación de producto vive en el repositorio de producción (`/02_Producto-y-Tech/`).

### Relación con otros documentos del workspace

Este documento se apoya en:

- `01-panorama-de-la-industria.md` para la categorización del sector y la definición de casual independiente como zona Zenet.
- `02-definicion-y-alcance.md` para el scope declarado del mercado Zenet.
- `04-segmentacion-de-mercado.md` para los cinco sub-segmentos y la fase de adquisición pre-PMF.
- `05-perfil-de-cliente-ideal.md` para el ICP del beachhead, su día típico y customer journey.
- `Branding/_context/04-voice-and-tone/` para la voz aplicada en cada cita y sub-sección.

Este documento alimenta:

- Decisiones de canal de adquisición (secciones 12 y 14).
- Decisiones de roadmap producto sobre integraciones e ingesta de data (secciones 6 y 12).
- Narrativa de fundraising sobre platform play y data moat (sección 15, con detalle en `_context/05-market-insights/01-vision-plataforma-zenet.md`).

### Relación con el business context de producción

El documento `zenet-business-context-production.md` (en el repositorio de producción) tiene tres piezas que este documento usa como anclajes validados:

1. **Tres personas validadas en campo** — Owner-Operator, Kitchen Manager / Executive Chef, Admin / Accountant. Aparecen en la sección 3.
2. **La secuencia operativa Zenet** — el documento usa la **arquitectura de 4 fases** (Estandarización → Inventario → Distribuciones/proveedores → Interpretación de costos) como mapeo canónico de qué módulos Zenet toca en cada eslabón del workflow. Esta arquitectura coexiste con la **distilación de 3 momentos** que Anna Palazuelos articuló en campo (Estandarización → Inventario → Interpretación de costo): la primera describe lo que Zenet construye, la segunda describe el journey mental del operador. Cuando el documento dice "Fase 1" o "Fase 2" en sus columnas, refiere a la arquitectura de 4 fases. La sub-sección "La secuencia operativa de Zenet sobre el workflow" (sección 2) desarrolla la relación entre ambas.
3. **Diferenciadores y posicionamiento** — sistema vs herramienta, interpretación vs medición, acompañamiento, estandarización como entrada, modular vs monolítico. Aparecen como lente al final de la sección 2 y en la sección 12.

Cuando este documento dice "fase 1" o "fase 2" en la columna Zenet, refiere a esa secuencia.

---

## 2. Cadena de valor del back-of-house

### Cómo leer la cadena de valor

La cadena de valor del back-of-house es el flujo operativo end-to-end de un restaurante casual independiente: desde que decide qué comprar hasta que analiza qué pasó al cierre del día. No es lineal único — algunos eslabones corren en paralelo y otros se retroalimentan — pero sí tiene una secuencia temporal y dependencias claras.

Lo organizamos en tres bloques:

- **Upstream del plato** (eslabones 1-4): cómo el insumo llega de un proveedor a la cocina lista para producir.
- **Corazón operativo** (eslabones 5-7): cómo el insumo se transforma en plato servido al comensal.
- **Downstream del servicio** (eslabones 8-9): cómo el día se cierra, se reconcilia y se aprende.

Para cada eslabón cubrimos:

- **Qué pasa** — la operación real, no la idealizada.
- **Qué duele** — fricciones que el operador experimenta, anclados en citas cuando existen.
- **Herramientas que ya existen** — lo que el operador usa hoy, con honestidad sobre la fragmentación real.
- **Quién lo ejecuta** — rol responsable y cómo varía por tamaño de operación.
- **Dónde Zenet toca y en qué fase** — usando la secuencia Estandarización → Inventario → Costo (Palazuelos, business context).

Esta sección es la más densa del documento. Es el corazón operativo del que dependen las decisiones de las secciones 12 y 14.

### Mapa del flujo end-to-end

Representación textual del flujo principal en una sucursal típica:

```
   UPSTREAM DEL PLATO                              CORAZÓN OPERATIVO

1. Compras y proveeduría   ──┐
                             ↓
2. Logística y entregas      │
                             ↓
3. Recepción y verificación  │
                             ↓
4. Almacén e inventario   ──┐│
                            ││
                            ↓↓
                    5. Recetarios y estandarización
                            ↓
                    6. Producción y cocina (mise en place + servicio activo)
                            ↓
                    7. Servicio en sala

                                                  DOWNSTREAM DEL SERVICIO

                    8. Cierre y conciliación   ──┐
                                                 ↓
                    9. Análisis y aprendizaje   ─┘
                            │
                            └──→ retroalimenta a 1, 4 y 5 al día siguiente
```

El loop no es una metáfora — es operativo. El análisis del cierre del día (eslabón 9) idealmente alimenta las compras del día siguiente (eslabón 1), el conteo del almacén (eslabón 4) y los ajustes al recetario (eslabón 5). En la práctica del segmento, ese loop está roto en la mayoría de los casos. Volveremos a esta observación al final de la sección.

### 2.1 Compras y proveeduría

**Qué pasa.** El operador (dueño, gerente o chef, dependiendo del tamaño) decide qué comprar con base en lo que se acabó, lo que recuerda haber vendido, lo que viene en el menú y lo que el proveedor le dice que está disponible. La orden se pone por canal informal (WhatsApp, llamada, visita en persona en la central de abasto) o, en una minoría de casos, vía sistema con orden de compra automática (ITN Consultores, 2024).

Las **frecuencias típicas** varían por categoría (PoloTab, 2025; Trezy, 2024; Rappi Merchants, 2024):

| Categoría | Frecuencia típica | Modalidad dominante |
|---|---|---|
| Frutas y verduras frescas | Diario o cada 2 días | Central de abasto, mercado mayorista |
| Cárnicos, lácteos no congelados | 2-3 veces/semana | Distribuidor foodservice con entrega |
| Mariscos | Diario o cada 2 días en costa | Mercado especializado, cooperativa |
| Abarrotes secos | 1-2/semana, hasta quincenal | Distribuidor o club de mayoreo |
| Bebidas (sin alcohol) | 1-2/semana | Distribuidor o autoservicio |
| Bebidas alcohólicas | 1-2/semana, hasta mensual | Distribuidor especializado con permiso |
| Congelados | 1-2/semana | Distribuidor con cadena de frío |

**Quién pone la orden** depende del tamaño:

- **1 sucursal:** dueño o chef directamente.
- **2-3 sucursales:** gerente operativo o encargado de compras emergente.
- **4-5 sucursales:** encargado de compras formal, frecuentemente con roles separados para frescos vs abarrotes.

**Términos de pago a proveedores** (Stripe, 2025; ASEM, 2024):

- **Frescos en mercado:** efectivo o transferencia el mismo día.
- **Foodservice formal (La Canasta, Sysco, Alimentos Ochoa, Ciemsa):** transferencia a 15-30 días con factura. 60 días aparece solo con clientes con historial de pago muy estable.
- **Factoraje:** raro en el segmento. Es producto de proveedores grandes, no del restaurante casual independiente.

**Qué duele.** El operador típico no calcula la compra contra demanda esperada — la calcula contra lo que recuerda y lo que ve en el almacén. Eso genera dos errores frecuentes (Comparasoftware, 2024; Unilever Food Solutions, 2024):

- **Sobre-pedido por miedo a quedar sin** o por aprovechar precio en club de mayoreo. Resultado: inventario inmovilizado y merma cuando caduca.
- **Ruptura de stock** en ingredientes clave durante hora pico, forzando a sacar productos del menú o sustituir sin avisar.

**Herramientas que ya existen.** Mayoritariamente WhatsApp con cada vendedor, libreta o Excel para anotar lo que falta, y memoria. El segmento que usa software dedicado (Soft Restaurant, StockManager, MarketMan) genera órdenes de compra desde niveles mínimos definidos en el sistema (ITN Consultores, 2024). En casual independiente típico de 1-3 sucursales, este nivel de adopción es minoritario — el segmento al que apuntan las soluciones SaaS de inventario revela, por sí mismo, dónde está el promedio del segmento.

**Dónde Zenet toca y en qué fase.** Compras toca Fase 2 (inventario), **Fase 3 (distribuciones y proveedores) directamente** y Fase 4 (interpretación de costos). La Fase 3 es la zona más explícita: orden de compra optimizada, gestión de proveedores, evaluación de cumplimiento. La estandarización previa (Fase 1) da la receta y los gramajes que permiten calcular qué comprar contra demanda esperada — sin esa base, las "órdenes de compra automáticas" de cualquier software se basan en consumo histórico sin estructura, lo que perpetúa los errores que se buscan corregir.

### 2.2 Logística, entregas y cadena de frío

**Qué pasa.** Una vez puesta la orden, dos modalidades coexisten en casual independiente típico (PickerExpress, 2024; Ciemsa Foodservice, 2024):

- **El restaurante recoge** del proveedor o central de abasto. Común en frescos. Implica que dueño, chef o encargado destina tiempo de la mañana a manejar al mercado, comprar, cargar y volver. En Tijuana, esto se combina ocasionalmente con cruce a San Diego para insumos especializados (Bancomext, 2017; Dialnet/Universidad Autónoma de Coahuila, 2022).
- **El proveedor entrega** en el restaurante. Común en cárnicos, lácteos, abarrotes y congelados via foodservice formal. Frecuencia 1-3 veces por semana con ventanas de entrega típicamente matutinas.

**Cadena de frío.** Los proveedores foodservice formales como Ciemsa Foodservice o La Canasta declaran transporte refrigerado y entrega hasta cocina (Ciemsa Foodservice, 2024; La Canasta, 2024). En la práctica del segmento, **la cadena de frío real es heterogénea**: estudios sectoriales sugieren que entre 40-45% de la producción alimentaria en MX se pierde por almacenamiento y transporte inadecuados (Hiperabasto, 2024; EY México, 2023).

**Quién lo ejecuta.** En 1 sucursal, frecuentemente el dueño o chef sigue siendo el receptor. En 2-5 sucursales, hay un cocinero o almacenista con la rutina de recibir. En operaciones nuevas o desorganizadas, el receptor cambia día a día — lo que rompe la trazabilidad.

**Qué duele.** Las fallas más reportadas (Rappi Merchants, 2024; Trezy, 2024):

- **Faltantes y sustituciones** sin previo aviso del proveedor.
- **Calidad inconsistente** especialmente en frescos.
- **Retrasos** que afectan el prep matutino.
- **Cadena de frío rota** que se descubre solo al usar el producto, ya cocinado.

**Dónde Zenet toca y en qué fase.** Fase 3 (distribuciones y proveedores) parcialmente. La logística externa es del proveedor. Zenet observa y registra el resultado (mermas anormales, sustituciones que rompen la receta, retrasos) para alimentar evaluación de proveedor en Fase 3 y atribuir mermas en Fase 4, pero no controla el proceso físico. Es una zona donde **Zenet documenta y evalúa**, no donde **Zenet automatiza la operación**.

### 2.3 Recepción y verificación

**Qué pasa.** Producto entra. Se verifica contra orden de compra y factura. Se registra en almacén. Idealmente, este proceso es rápido y formal. En la práctica del segmento, suele ser apresurado y mayoritariamente manual (Comparasoftware, 2024).

**Qué duele.** Diferencias entre lo facturado y lo recibido. Producto en mal estado descubierto demasiado tarde para reclamar. Doble captura o no captura. Pago al proveedor por algo que no llegó. Errores que se vuelven mermas no atribuibles.

Un estudio académico mexicano sobre restaurantes independientes en Ensenada documentó que estos restaurantes muestran **mayores mermas por caducidad y mal estado** que restaurantes de hotel comparables, asociadas a peor control de almacén (Eumed, 2013). Es un dato dated en su publicación pero la fricción estructural sigue vigente: aparece en blogs operativos contemporáneos como uno de los problemas centrales del segmento (Soft Restaurant Blog, 2024; Studocu, 2024).

**Herramientas que ya existen.** Hoja física firmada con la factura, libreta de almacén, Excel en computadora del back-office, software dedicado de inventario en una minoría. Soluciones como StockManager se posicionan precisamente sobre el dolor de "el inventario nunca cuadra" — su discurso comercial revela qué problema sigue sin resolverse en el segmento (ITN Consultores, 2024).

**Dónde Zenet toca y en qué fase.** Fase 2 (inventario) y Fase 3 (distribuciones y proveedores). La recepción es donde el inventario se actualiza por entrada y donde se evalúa cumplimiento del proveedor (cantidad, calidad, tiempos). Sin recetario formal y sin orden de compra estructurada (Fase 1), la recepción es solo registro de lo que llegó — no permite verificar si llegó lo que el negocio realmente necesita ni en qué cantidad correcta.

### 2.4 Almacén e inventario

**Qué pasa.** Producto en cuarto frío, congelador, almacén seco. Se cuenta físicamente con frecuencia que varía enormemente:

- **Diario** en categorías sensibles (proteínas caras, alcohol) cuando hay disciplina.
- **Semanal completo** si hay procesos.
- **Quincenal o mensual** en muchos casos.
- **Nunca formalmente** en operaciones de menor madurez.

La estructura física típica en casual independiente serio es almacén seco + refrigeración + congelación, con multibodega cuando hay varias sucursales (ITN Consultores, 2024). Las herramientas reales son una mezcla de papel, libreta, Excel, Google Sheets, WhatsApp con foto, y software dedicado en una minoría.

**Qué duele.** Tres frases recurrentes del segmento aparecen en testimonios institucionales y en el business context de Zenet:

> *"El inventario nunca cuadra."* — Frase recurrente en testimonios validados (business context, 2026).
>
> *"Paso 5 horas a la semana cuadrando inventarios entre 3 sucursales porque cada gerente cuenta diferente."* — Carlos Mendoza, gerente, Grupo Sabor Auténtico (business context, 2026).

La fricción central no es contar — es que la diferencia entre inventario teórico (lo que debería haber según ventas y recetas) y físico (lo que hay) **no se puede calcular** sin recetario formal previo. Sin esa base, el conteo solo dice "hay X kilos hoy" pero no "deberían haber X kilos según lo que vendiste".

**Dónde Zenet toca y en qué fase.** Fase 2 (inventario) directa. Pero nuevamente la dependencia de Fase 1 es estructural: el inventario interpretable requiere recetario estandarizado primero.

### 2.5 Recetarios y estandarización

**Qué pasa.** Aquí vive la zona Zenet más directa. Y aquí es donde el segmento opera más a oscuras.

No existe en MX una encuesta pública que cuantifique qué porcentaje de restaurantes casual independientes opera con recetarios formales documentados (con gramajes exactos, fichas técnicas, costeo por plato, fotos de presentación). Tampoco qué porcentaje tiene manuales operativos (procesos de prep, mise en place, apertura, cierre, controles). Lo que sí existe es evidencia consultiva fuerte de que el problema es generalizado:

- La AMR (Asociación Mexicana de Restaurantes) habla del **"costo silencioso de la improvisación"** y describe cómo la falta de estandarización genera mermas, sobreuso de insumos y eroda márgenes (AMR, 2024).
- CESSA Universidad ofrece recurrentemente cursos como "Estandarización, costeo y conversión de recetas" dirigidos a propietarios y gerentes que quieren formalizar las recetas de su negocio. La existencia y demanda sostenida del curso revela que la audiencia objetivo es grande (CESSA, 2024).
- Consultoras como Grupo Klee, EMCEBAR, Fatfish, GCC Sistemas California venden estandarización y costeo como producto. El mercado de consultoría operativa restaurantera mexicana — sin tamaño cuantificado público pero con presencia sostenida — confirma demanda (Grupo Klee, 2024; EMCEBAR, 2024; Fatfish, 2024; GCC Sistemas California, 2024).
- Una pieza académica sobre estandarización de recetas concluye que la práctica "demuestra ser fundamental para la capacitación y desarrollo del personal, mejorando la eficiencia operativa al reducir tiempos de espera y minimizar errores" (Ciencialatina, 2024).
- La AMR cita un dato de RestaurantOwner.com (USA): los restaurantes con recetas estandarizadas reportan **hasta 15% más de rentabilidad** (AMR, 2024). Es un proxy USA adoptado institucionalmente por la asociación mexicana como aplicable.

**Herramientas que ya existen.** Word, Excel, PDF, papel, en orden aproximado de uso. Software dedicado de recetario y costeo en una minoría. WhatsApp para comunicar cambios al equipo. Pizarras en cocina para listas de prep diaria.

**Quién lo ejecuta.** El chef cuando el chef es el dueño. El chef ejecutivo en operaciones más grandes. En la práctica del segmento, **el conocimiento operativo vive en la cabeza del chef o cocinero más experimentado** — y desaparece cuando esa persona se va.

**La brecha formación ↔ campo.** Las escuelas de gastronomía mexicanas (CESSA, Ambrosía, ICUM, Le Cordon Bleu MX, Universidad Anáhuac) **enseñan estandarización como estándar profesional** desde licenciatura (CESSA, 2024; Anáhuac, 2024). El Distintivo H de la Secretaría de Turismo **exige** procedimientos estandarizados de limpieza, almacenamiento, preparación y servicio. La práctica de campo está lejos de cumplir lo que la formación enseña y la regulación menciona. Esa brecha es exactamente la zona donde Zenet entra.

**Dónde Zenet toca y en qué fase.** Fase 1 (estandarización) directa. Es la zona fundacional de Zenet. Sin esta capa, las tres fases siguientes (inventario interpretable, distribución optimizable, costo explicable) no se pueden construir.

### 2.6 Producción y cocina

**Qué pasa.** Mise en place matutino: lavado, corte, porcionado, prep de salsas y bases. Estaciones de cocina (caliente, fría, parrilla, post, ensaladas, pastelería) según el tamaño y concepto. Servicio activo: cocina recibe comanda, ejecuta receta, despacha al pase.

**Qué duele.** Tres frases que aparecen en consultoría especializada y testimonios:

- "Cada cocinero hace lo suyo." — sin recetario formal, cada estación interpreta los platos según su criterio.
- "Cuando se va el chef se pierde todo." — dependencia estructural del talento individual.
- "Las porciones cambian según quien esté en parrilla." — control de porciones inconsistente, principal driver de food cost descontrolado.

Los cocineros mexicanos abandonan su empleo a tasas extremas: **75% de cocineros abandona su empleo antes de los cinco meses, y solo 20% de ayudantes generales permanece después de seis meses** (CANIRAC, 2024). El sector enfrenta un **déficit de 500,000 trabajadores** (El Economista citando CANIRAC, 2026), agravado en frontera norte por la migración a Estados Unidos. **8 de cada 10 restaurantes operan con plantillas incompletas** (CANIRAC, 2024).

**Implicación operativa central:** sin estandarización formal, la rotación de personal destruye conocimiento. El restaurante reaprende cada turno. Los manuales y recetarios estandarizados se promueven precisamente como herramienta para que **el conocimiento no dependa de una sola persona** (Ciencialatina, 2024).

**Herramientas que ya existen.** Memoria y observación del cocinero más experimentado. Pizarra en cocina con prep del día. WhatsApp para indicaciones del chef. Recetario impreso o en Word cuando existe. Kitchen Display Systems en una minoría que tiene POS con módulo KDS — BDKREST en MX cubre esta función como parte de suite POS (BDKREST, 2024).

**Dónde Zenet toca y en qué fase.** Fase 1 (estandarización) y Fase 2 (inventario, vía consumo de receta vs lo que efectivamente se usó). La Fase 4 (interpretación de costos) se construye exactamente aquí: comparar lo que se debió usar (según receta estándar) contra lo que se usó (según consumo real de inventario) revela desviaciones y permite preguntar por qué.

### 2.7 Servicio en sala

**Qué pasa.** Comensal entra, se sienta, ordena, recibe, paga, se va. El POS captura la venta y el pago. Las propinas se distribuyen. La caja cierra al final del turno o del día.

**Qué duele para BoH específicamente.** El front-of-house es zona front (no Zenet directa), pero tres fricciones tocan back:

- **Comandas mal capturadas** en el POS generan platos mal hechos en cocina y mermas.
- **Pedidos cancelados o devueltos** generan inventario consumido sin venta registrada.
- **Promociones y descuentos** no documentados sistemáticamente afectan el costo real por plato sin que nadie lo vea hasta el cierre del mes.

**Herramientas que ya existen.** POS dominante en MX para casual independiente: Soft Restaurant en la mayoría de la operación formal, Loyverse en operadores cloud-savvy, Square en sub-segmento más joven, MyBusiness POS y SICAR en operadores más cerrados. La sección 6 cubre el panorama completo.

**Dónde Zenet toca y en qué fase.** Marginalmente. El servicio en sala es zona POS, no zona BoH. Zenet ingiere data del POS (ventas por plato, descuentos, devoluciones) para alimentar Fase 4 (interpretación de costos), pero no opera en el momento del servicio.

### 2.8 Cierre y conciliación

**Qué pasa.** Se cuenta la caja. Se concilia contra el POS. Se verifica el cobro electrónico contra terminal de pago. Se cierra el inventario en categorías sensibles. Se mandan los reportes al dueño o gerente.

**Tiempo dedicado al cierre** en casual independiente típico: 30-90 minutos por sucursal por día, dependiendo de complejidad. En operaciones multi-sucursal, el dueño dedica 5+ horas a la semana solo a reconciliar inventarios entre sucursales (business context, 2026).

**Qué duele.** Tres fricciones recurrentes:

- **Diferencias caja vs POS** — qué tan común es que no cuadre, cómo se resuelve, quién pone la diferencia.
- **Inventario teórico vs físico** — qué tan común es que no coincida, y la imposibilidad de explicar por qué sin recetario formal.
- **Reportes que llegan tarde** — el dueño ve el costo del mes con dos meses de retraso (cuando llega el reporte del contador externo), demasiado tarde para corregir.

**Herramientas que ya existen.** Excel mayoritariamente. POS dashboard básico. WhatsApp para mandar resúmenes. CONTPAQi, Aspel, Bind ERP, Alegra del lado del contador externo (programascontabilidad.com, 2026). Software dedicado de gestión de cierre en una minoría.

**Dónde Zenet toca y en qué fase.** Fase 2 (inventario) y Fase 4 (interpretación de costos) directas. Esta es la zona donde Zenet entrega el ROI más visible para el operador: tiempo recuperado, claridad sobre dónde se fue el dinero, capacidad de cerrar el día con información completa.

### 2.9 Análisis y aprendizaje

**Qué pasa.** Idealmente: el operador revisa la data del día/semana/mes y ajusta. Cambia precio de un plato. Saca un plato del menú. Cambia un proveedor. Reentrena al equipo.

**Qué realmente pasa.** El segmento opera mayoritariamente por intuición. La data está fragmentada (POS dice ventas, contador dice impuestos, inventario en Excel, costos calculados a mano). Cuando el reporte llega, el dueño ya no recuerda qué pasó esa semana. Las decisiones operativas se toman con información incompleta.

> *"Most software tells you your cost was 34%. Zenet tells you WHY it was 34% and what process to fix so it becomes 30%."* — Síntesis del business context derivada de conversaciones con Anna Palazuelos (business context, 2026).

**Herramientas que ya existen.** Reuniones informales con el chef o gerente. Reportes mensuales del contador. Dashboards básicos del POS. Excel manual de seguimiento. Software de BI vertical para restaurantes en MX/LATAM nacido 2018-2026: **no existe** como categoría específica — todo se maneja vía dashboards de POS o herramientas horizontales (Power BI, Looker, Excel) (panorama de Bundle 4 research, 2026).

**Dónde Zenet toca y en qué fase.** Fase 4 (interpretación de costos) directa, y donde la propuesta de valor es más alta de cara al dueño-operador. La diferencia entre costo teórico (lo que debería costar según receta estándar) y costo real (según consumo de inventario) revela desviaciones que normalmente quedan invisibles. El sistema dice no solo "tu costo subió a 34%", sino "por qué" y "qué proceso corregir".

### Variantes estructurales: el centro de distribución interno

El flujo descrito en los nueve eslabones aplica a la sucursal individual. En el extremo superior del scope Zenet (3-5 sucursales), una variación estructural relevante aparece: el centro de distribución (CD) interno operado por el propio grupo restaurantero, que combina almacén, cocina de prep central y función administrativa.

**Cómo cambia el flujo.** El CD introduce un nodo intermedio entre proveedores y sucursales con tres funciones simultáneas:

- **Función logística.** Recibe insumos de alto volumen consolidados, los almacena, hace transferencias internas a cada sucursal con frecuencia diaria o cada 2 días.
- **Función productiva (commissary kitchen).** Hace prep batch que centraliza trabajo: salsas base, marinados, porcionado de proteínas, panadería interna cuando aplica, postres. La sucursal recibe insumos pre-procesados y se enfoca en producción final y servicio.
- **Función administrativa.** Concentra compras y facturación del grupo. Los proveedores facturan al CD; la contabilidad consolidada del grupo se gestiona ahí.

**Sourcing híbrido, no centralización absoluta.** Una observación operativa importante: no todos los insumos pasan por el CD. Categorías de alto volumen y baja perecibilidad (abarrotes, cárnicos en cortes grandes, congelados) se benefician del CD porque consolidan poder de compra. Categorías locales y hyper-frescas (panadería diaria, lácteos especiales, frutas y verduras de proveedor cercano) suelen seguir entrando directo a cada sucursal porque la ventana de frescura no admite el rebote vía CD. El CD es selectivo, no dogmático.

**Casos observables en Tijuana.** Grupos como Alma Verde operan un CD interno que abastece a varias sucursales en la ciudad (observación de campo, 2026). El patrón es común en grupos casual independiente que cruzan el salto estructural de 3 a 4-5 sucursales descrito en la sección 3.

**Por qué importa estratégicamente.** El CD es síntoma de tres cosas simultáneas:

1. **El operador ya descubrió que la replicación distribuida no escala.** Cada sucursal con su propia cocina haciendo prep desde cero generaba inconsistencia, mermas y dependencia de talento que dejó de ser sostenible.
2. **El operador ya invirtió en estandarización implícita.** Para que un CD funcione, hay que tener recetas, especificaciones de calidad y procesos de prep relativamente claros — aunque no estén formalmente documentados. Es el fitness operativo más alto del segmento.
3. **El operador ya piensa como operador, no como cocinero.** Compras consolidadas, logística interna, control central y función administrativa centralizada son lenguaje de gestión.

**Dónde Zenet entra.** En las cuatro fases simultáneamente, con complejidad adicional sobre el flujo de sucursal individual. **El CD es la implementación física más clara de la Fase 3** — es donde Zenet aporta más valor relativo respecto a un grupo sin CD:

- **Fase 1 (estandarización).** El CD necesita recetarios jerárquicos: recetas de prep (salsas base, marinados, porcionados) en el CD que son insumos de recetas de plato final en sucursal. Zenet modela esa jerarquía nativamente.
- **Fase 2 (inventario).** Inventario multi-nodo: stock en CD más stock por sucursal (con split perecederos / no perecederos), conteos cruzados, ajustes por mermas locales. Excel deja de funcionar a esta escala.
- **Fase 3 (distribuciones y proveedores) — zona principal.** Aquí vive la complejidad central del CD: orden de compra consolidada, transferencias CD-sucursal con frecuencia y volúmenes optimizados, evaluación de proveedores con data agregada del grupo, mermas atribuibles a logística interna vs proveedor externo, sourcing inteligente. Zenet maneja distribución multi-nodo con transferencias internas como ciudadano de primera clase, no como add-on.
- **Fase 4 (interpretación de costos).** El costo real por plato incluye costo de prep en CD (mano de obra, energía, merma de proceso), logística interna (transporte, combustible) y producción final en sucursal. Zenet construye la trazabilidad completa CD-sucursal-plato — algo que un POS con módulo de inventario simplemente no puede hacer.

**Sourcing híbrido como feature explícita.** El operador con CD necesita ver en una vista unificada las compras consolidadas vía CD y las compras directas a sucursal, con costos atribuibles a cada flujo. Es feature requirement de producto, no nice-to-have.

**Implicación para go-to-market.** Operadores con CD son target prioritario dentro del beachhead:

- Ya validaron que la estandarización vale (la implementaron físicamente).
- Tienen complejidad operativa que ya rebasó las herramientas manuales.
- Tienen capacidad de pago — un CD requiere capital, son operadores serios.
- Su contador externo o administrador interno ya trabaja contra un nodo central, lo que facilita la integración Zenet vs un grupo donde la contabilidad está fragmentada por sucursal.
- Su adopción es modelo replicable: si funciona en grupo con CD, la narrativa se traslada limpiamente a grupos de 3-5 sucursales que aún no construyen CD pero ven el destino.

La sección 13 (buying committee) y la sección 14 (hipótesis de canal) desarrollan este sub-segmento como prioritario.

### Tabla resumen comparativa

| Eslabón | Rol responsable típico | Herramienta dominante hoy | Dolor central | Fase Zenet |
|---|---|---|---|---|
| 1. Compras | Dueño / chef / encargado | WhatsApp + memoria | Sobre-pedido, ruptura de stock | F2, **F3 directa**, F4 |
| 2. Logística | Proveedor / equipo recepción | Cadena de frío del proveedor | Faltantes, calidad inconsistente | F3 (documenta y evalúa) |
| 3. Recepción | Cocinero / almacenista | Papel, libreta, Excel | "Lo recibido vs lo facturado" | F2, F3 |
| 4. Almacén e inventario | Almacenista / encargado | Excel, papel, software minoritario | "El inventario nunca cuadra" | **F2 directa** |
| 5. Recetario y estandarización | Chef / dueño | Word, Excel, PDF, papel | "Cada cocinero hace lo suyo" | **F1 directa** |
| 6. Producción y cocina | Chef / cocineros línea | Memoria + pizarra + WhatsApp | Rotación destruye conocimiento | F1, F2, F4 |
| 7. Servicio en sala | Mesero / cajero / POS | POS (Soft Restaurant, Loyverse...) | Comandas mal capturadas, descuentos invisibles | F4 (ingiere data) |
| 8. Cierre y conciliación | Gerente / dueño | Excel + POS dashboard | "Paso 5 horas reconciliando" | F2, **F4 directa** |
| 9. Análisis y aprendizaje | Dueño + contador externo | Reportes mensuales, intuición | Decisiones sin data, reportes tarde | **F4 directa** |
| Variante: Centro de distribución | Encargado de CD / administrador | Multi-bodega, Excel multi-sucursal | Multi-nodo: transferencias, mermas atribuibles | F1, F2, **F3 directa**, F4 |

### KPIs operativos del segmento

Los rangos siguientes son referencias sectoriales **para casual independiente en MX 2024-2026**, calibrados con fuentes mexicanas cuando existen y marcados como proxy global cuando no. No son promedios verificados de una muestra representativa del segmento — son rangos orientadores derivados de guías de operación, consultoras y planes financieros publicados.

| KPI | Rango sano | Rango problemático | Etiqueta |
|---|---|---|---|
| Food cost (% de ventas) | 28-35% (objetivo 30-33%) | sostenido >35-38% | [Dato MX casual independiente] (PoloTab, 2025; CLAB Group, 2024) |
| Labor cost (% de ventas) | 28-35% (objetivo 30-32%) | sostenido >35-38% | [Dato MX casual independiente] (PoloTab, 2025) |
| Coste primario (food + labor) | 60-65% objetivo | sostenido >70% | [Dato MX casual independiente] (PoloTab, 2025) |
| Merma sobre ventas | 2-3% objetivo | crítico >5% | [Dato MX casual independiente] (PoloTab, 2025) |
| Overhead operativo (renta + utilities + admin) | 22-27% | crítico >32-35% | [Dato MX casual independiente] (ModelosDePlanDeNegocios, 2024) |
| Margen operativo neto | 8-15% bien gestionado | <3% sostenido | [Dato MX casual independiente] (ModelosDePlanDeNegocios, 2024; WhitePaper Monterrey, 2024) |
| Ticket promedio QSR MX 2025 | $281 MXN promedio | — | [Dato MX sector restaurantero] (Parrot Software, 2026) |
| Ticket promedio casual independiente | $220-$350 MXN | — | [Dato MX casual independiente] (Parrot Software + El Economista, 2026) |
| Rotación de mesas | 1-1.5x día normal · 2-3x fin de semana | <0.7x día | [Proxy global, calibrado a MX] (ModelosDePlanDeNegocios, 2024) |
| Ventas por m²/año | $35K-$60K MXN urbano sano | <$25K MXN | [Proxy global, calibrado a MX] (Kitchen NMBRS adaptado, 2024) |

**Vida promedio del restaurante.** Un estudio académico de la UABC documentó **61% de fracaso en los primeros tres años** en restaurantes independientes mexicanos (UABC, 2008, periodo 1996-1999). El desglose: 26% cierra el primer año, 19% el segundo, 14% el tercero. La cifra es histórica pero el orden de magnitud sigue vigente en testimonios sectoriales contemporáneos (canales de consultoría, 2026; Murguia citado en business context).

**Rotación de personal.** En el sector restaurantero mexicano, CANIRAC reporta rotación anual de **30-80% en condiciones estándar y hasta 120-180% en algunos segmentos** (CANIRAC, 2024). En cocina específicamente, **75% abandona antes de los cinco meses** y solo **20% de ayudantes generales permanece después de seis meses** (CANIRAC, 2024). El sector arrastra un **déficit de 500,000 trabajadores** (El Economista citando CANIRAC, 2026).

### La secuencia operativa de Zenet sobre el workflow

La arquitectura operativa de Zenet sobre el workflow del back-of-house tiene **cuatro fases secuenciales**, donde cada una depende estructuralmente de la anterior:

- **Fase 1 — Estandarización.** Recetario formal con gramajes exactos, fichas técnicas, costeo por plato. Manuales operativos para prep, apertura, cierre, limpieza. Sin esto, no hay base contra la cual medir.
- **Fase 2 — Inventario.** Conteo de entrada (compras, recepción) y salida (consumo según receta vs ventas). Diferencias entre teórico y real se vuelven cuantificables. Sin Fase 1, el inventario es solo registro.
- **Fase 3 — Distribuciones y proveedores.** Orden de compra optimizada, transferencias internas multi-nodo (entre CD y sucursales cuando aplica), evaluación de proveedores con data agregada del grupo, sourcing inteligente. Sin Fase 2, la distribución y el sourcing son ciegos al consumo real.
- **Fase 4 — Interpretación de costos.** No solo qué costó (eso lo dice cualquier reporte de POS), sino **por qué** costó eso y **qué proceso ajustar**. Sin Fase 3, faltan dimensiones de costo (transferencia interna, mermas atribuibles a logística vs proveedor, costo de prep en CD). Sin las dimensiones completas, no hay interpretación posible.

**Relación con la distilación de 3 momentos de Anna Palazuelos.** El business context de producción registra una secuencia de tres momentos articulada por Anna Palazuelos en campo: Estandarización → Inventario → Interpretación de costo. Esa es la **versión narrativa para el operador** — el journey mental que el dueño o chef recorre al darse cuenta de cómo se ordena su negocio. Es válida y es la que típicamente se comunica en discovery o en mensajería externa.

La arquitectura de cuatro fases que este documento usa es la **versión operativa de Zenet** — qué módulos construye el sistema y en qué orden dependen entre sí. Distribuciones y proveedores existe como capacidad discreta porque operacionalmente lo es: orden de compra, transferencias internas, evaluación y sourcing son flujos distintos del conteo de inventario. La distilación Palazuelos absorbe esa capa dentro de "Inventario" para simplificar la conversación con el operador, pero internamente Zenet la construye y la opera por separado.

**Por qué esta secuencia y no otra.** Otras propuestas de software empiezan por dashboards de costos o forecasting con IA. Eso requiere data limpia desde día uno — data que el segmento no tiene. La secuencia Zenet **construye la data limpia** en Fase 1, la **estructura** en Fase 2, **optimiza el flujo** en Fase 3, y la **interpreta** en Fase 4. Es un orden operativo, no una preferencia estética.

**Implicación de Fase 3 para el platform play.** La Fase 3 (Distribuciones y proveedores) es exactamente la capa donde el platform play — marketplace de proveedores, fintech para proveedores, factoraje, logística — se conecta naturalmente con el SaaS BoH. Esa capa no es un salto futuro: ya está en el corazón del producto desde día uno. La sección 15 desarrolla esta lectura.

### El vacío de benchmarking como observación estratégica

El segmento opera sin visibilidad estructural de sí mismo. No hay encuestas públicas que midan:

- Qué porcentaje del segmento opera con recetarios formales documentados.
- Qué porcentaje tiene manuales operativos completos.
- Cómo distribuye su stack de herramientas entre papel, Excel, software dedicado.
- Cuánto tiempo dedica al cierre del día.
- Cuál es la relación cuantitativa entre nivel de estandarización y supervivencia del negocio.

Las cifras que sí existen son sectoriales agregadas (INEGI Censos Económicos 2019, CANIRAC declaraciones públicas) o proxies globales (PoloTab USA-style benchmarks adaptados). El segmento — casual independiente 1-5 sucursales en MX — no se ha medido a sí mismo en lo público.

**Esto es observación estratégica, no solo limitación de research.** El operador casual independiente no tiene contra qué compararse. No sabe si su 32% de food cost está bien o mal *para alguien como él en Tijuana*. Vuela con proxies generales o intuición. Es síntoma de un mercado underserved en datos, no solo en software.

Para Zenet es zona de palanca:

- **Hoy:** la sección 12 desarrolla cómo este vacío justifica el wedge de Zenet y refuerza la mensajería de "interpretación, no medición".
- **Año 2-3:** si Zenet captura 50-100 clientes en TJ/BC, puede generar el primer benchmark agregado real del segmento. La data anonimizada y devuelta al operador ("tu food cost está en el percentil 60 de casual independiente en BC") es producto y narrativa simultáneamente.

La sección 15 conecta esto con la visión platform play más amplia.

---

## 3. Mapa de roles internos

### Cómo leer este mapa de roles

Esta sección mapea quién hace qué dentro del restaurante y cómo se forma el buying committee para decisiones de software operativo como Zenet. Cubre:

- Las **tres personas validadas en campo** del business context (Owner-Operator, Kitchen Manager, Admin/Accountant) como anclaje.
- Los **roles operativos extendidos** que pueden o no existir según tamaño.
- La **variación por tamaño de operación** (1, 2-3, 4-5, 6+ sucursales) — qué roles colapsan, cuáles emergen.
- Los **roles fantasma** — cuando un rol formal no existe, ¿quién hace ese trabajo?
- La **estructura salarial 2025-2026** con ajuste regional Tijuana / Baja California.
- El **cook shortage** y su efecto sobre la presión de estandarización.
- El **buying committee** resuelto: quién decide, quién influye, quién bloquea, quién usa.

La sección apunta a un solo objetivo operativo: que el equipo Zenet entienda, antes de cualquier conversación con un prospecto, **quién va a estar en la mesa cuando se decida la compra y quién va a ser el usuario diario.**

### Las tres personas validadas en campo

El business context de producción documenta tres personas validadas con conversaciones de campo a lo largo de febrero-abril 2026 (~15 conversaciones, validadores nombrados: Victor Murguia, Anna Palazuelos, Algira Garzón, Carlos Sánchez, Aldo Alvarado, Abril Borunda, Victor Mendoza).

#### Persona 1 — Owner-Operator (dueño-operador)

- **Quién.** Dueño de 1-5 sucursales, usualmente en fase de crecimiento.
- **Realidad diaria.** Pasa **70% de su tiempo en tareas del día**. No puede desconectarse. Siempre apagando incendios.
- **Lo que necesita de Zenet.**
  - Visibilidad cross-sucursal sin micromanaging.
  - KPIs y *cost insights* que le digan no solo qué pasó sino por qué.
  - Confianza para delegar.
  - Estructura para escalar sin multiplicar caos.
  - Asistencia digital que convierta data en decisiones.

> *"I spend 5 hours a week reconciling inventories across 3 locations because each manager counts differently."* — Carlos Mendoza, gerente, Grupo Sabor Auténtico (business context, 2026).

- **Su rol en el buying committee.** Decisor primario. Aprueba el presupuesto. Firma.

#### Persona 2 — Kitchen Manager / Executive Chef (chef ejecutivo)

- **Quién.** Chef con responsabilidad operativa. Maneja recetas, inventario y equipo de cocina día con día.
- **Realidad diaria.** Construye procesos desde cero constantemente. Depende de su conocimiento personal. La rotación de personal borra el progreso.
- **Lo que necesita de Zenet.**
  - Recetarios estandarizados con gramajes exactos.
  - Inventario que se cruce contra los estándares.
  - Material de capacitación que sobreviva a la rotación de personal.
  - Menos tiempo en tareas administrativas, más tiempo en cocina.
- **Su rol en el buying committee.** Influenciador clave para cadenas. Decisión validada por dirección Zenet en abril 2026: **"el chef adopta, el dueño paga"** — son dos narrativas diferentes y dos usuarios diferentes (business context, 2026).

#### Persona 3 — Admin / Accountant (administrador / contador)

- **Quién.** Maneja números, compras, reportes de costos. En 1 sucursal puede ser el dueño mismo. En 2-5 sucursales suele haber un administrador interno + contador externo.
- **Realidad diaria.** Persigue información a través de WhatsApp, papel, Excel. Los números nunca cuadran.
- **Lo que necesita de Zenet.**
  - Exportes de data consolidada.
  - Reportes de costo que expliquen el por qué, no solo el qué.
  - Sugerencias de optimización en compras.
  - *Audit trail* para movimientos de inventario.
- **Su rol en el buying committee.** Usuario primario de reportes. Influenciador del contador externo, que puede ser bloqueador silencioso si percibe Zenet como amenaza a su servicio.

### Roles operativos extendidos

Más allá de las tres personas validadas, una operación casual independiente típica tiene roles que pueden o no existir formalmente según tamaño:

- **Encargado de compras / steward.** Pone órdenes, recibe entregas, maneja relación con proveedores.
- **Almacenista / bodeguero.** Conteo, rotación, control físico del almacén.
- **Sous chef / segundo de cocina.** Operación de cocina cuando el chef ejecutivo no está.
- **Cocinero línea (caliente, fría, parrilla, post, ensaladas, pastelería).** Ejecución directa de recetas en estación.
- **Lavaloza / steward bajo.** Limpieza de utensilios y área.
- **Cajero / host.** Cobro y recepción al comensal.
- **Mesero.** Servicio en sala, ingreso de comanda al POS.
- **Bartender.** Cuando hay barra dedicada.
- **Contador externo.** Servicio fiscal y de nómina, generalmente despacho que atiende múltiples clientes.

### Variación por tamaño de operación

| Rol | 1 sucursal | 2-3 sucursales | 4-5 sucursales | 6+ |
|---|---|---|---|---|
| Dueño-operador | Operativo full-time, hace casi todo | Empieza a delegar gerencia | Estratégico, supervisa gerentes | Estratégico, decide expansión |
| Gerente operativo | Frecuentemente no existe (es el dueño) | 1 por sucursal o 1 itinerante | 1 por sucursal + posible gerente regional | Estructura corporativa |
| Chef ejecutivo | A menudo es el dueño | Chef ejecutivo dedicado | Chef corporativo + chef de sucursal | Brigadas formales |
| Sous chef | Usualmente no existe | Emerge en 2-3 | Formal | Formal |
| Encargado de compras | Dueño o chef lo hace | Emerge como rol parcial | Rol formal dedicado | Equipo de compras |
| Almacenista | Cocinero más viejo lo hace | Rol parcial | Rol formal | Rol formal |
| Contador externo | Despacho compartido | Despacho dedicado | Contador interno + externo | Equipo contable interno |
| Administrador interno | No existe | Emerge | Rol formal | Equipo administrativo |

**Implicación operativa central:** en 1 sucursal, el dueño-operador concentra 5-7 roles. En 2-3, empieza a fragmentarse pero el dueño sigue operativo. **El salto de 3 a 4 sucursales es estructural** — requiere formalizar gerencia operativa, encargado de compras y procesos. Algunos grupos responden a este salto construyendo un centro de distribución interno que centraliza compras, prep batch y función administrativa para múltiples sucursales (ver sección 2 — Variantes estructurales). La mayoría de los operadores que no formalizan procesos ni construyen estructura quiebran o estancan precisamente en este salto, porque no tienen los sistemas para sostener la complejidad. Es exactamente el punto donde Zenet entrega más valor relativo.

### Roles fantasma

Cuando el rol formal no existe, alguien hace el trabajo igual. Casi siempre es el dueño o el chef más experimentado, restando tiempo de su rol principal. Algunos ejemplos típicos en 1-2 sucursales:

- **El dueño-operador como encargado de compras.** Va al mercado de madrugada. Pone la orden por WhatsApp. Recibe la entrega. Reclama al proveedor cuando hay diferencias. Tiempo dedicado: 10-15 horas a la semana.
- **El chef como almacenista informal.** Hace conteo cuando puede, anota en libreta, no hay control formal de mermas.
- **El cocinero más viejo como sous chef de facto.** Sostiene la cocina cuando el chef no está, sin reconocimiento formal ni compensación adicional.
- **La esposa del dueño como administradora informal.** Lleva los Excel del costo, paga proveedores, manda reportes al contador. Sin nómina ni rol declarado.
- **El gerente como receptor de incidencias 24/7 vía WhatsApp.** Funciona como hub de comunicación entre cocina, dueño y proveedores, sin sistema de tickets ni formalización.

Reconocer roles fantasma es importante para Zenet por dos razones: (1) son señal de cuellos de botella estructurales que el sistema puede aliviar; (2) cuando Zenet automatiza partes de estos roles fantasma, libera al dueño o al chef para hacer lo que sí debería estar haciendo.

### Estructura salarial 2025-2026

Rangos salariales mensuales en MXN para roles operativos en restaurantes casual independientes. Las cifras nacionales son promedios o rangos típicos publicados; la columna TJ/BC ajusta por el diferencial regional documentado (salario mínimo +40% en frontera norte vs nacional, BC promedio salarial +15-25% sobre nacional según AMEDIRH y ED).

| Rol | Rango nacional MXN/mes | TJ/BC ajustado | Etiqueta |
|---|---|---|---|
| Gerente operativo / gerente de turno | $14,000-$30,000 | $17,000-$37,000 | [Dato MX casual independiente] (PoloTab, 2025; Computrabajo, 2025) |
| Chef ejecutivo (casual independiente) | $17,000-$20,000 | $20,000-$25,000 | [Dato MX casual independiente] (Computrabajo, 2025) |
| Sous chef | $12,000-$16,000 | $14,000-$20,000 | [Dato MX casual independiente] (PoloTab, 2025) |
| Encargado de compras | $9,500-$15,000 | $11,000-$19,000 | [Dato MX casual independiente] (Jooble, 2025) |
| Almacenista | $8,000-$10,000 | $9,000-$12,000 | [Dato MX casual independiente] (Jooble, 2025) |
| Cocinero línea (caliente/fría/parrilla/post) | $9,000-$12,000 | $11,000-$15,000 | [Dato MX casual independiente] (PoloTab, 2025) |
| Ayudante de cocina | $6,400-$8,700 | $7,500-$11,000 | [Dato MX casual independiente] (UVM Blog, 2024) |
| Lavaloza | $6,200-$6,500 | $7,000-$8,000 | [Dato MX casual independiente] (Computrabajo, 2025) |
| Mesero (sueldo base) | $8,000-$11,000 | $9,000-$13,500 | [Dato MX casual independiente] (PoloTab, 2025) |
| Mesero (sueldo + propinas, ingreso total) | $13,000-$18,000 | $15,000-$22,000 | [Estimación cualitativa] propinas representan 40-60% del ingreso total |
| Bartender | $10,000-$14,000 | $12,000-$17,500 | [Dato MX casual independiente] (PoloTab, 2025) |
| Cajero / host | $7,500-$9,500 | $8,500-$12,000 | [Dato MX casual independiente] (PoloTab, 2025) |
| Contador externo (servicio mensual a 1-3 sucursales) | $2,500-$6,000 mensual | similar | [Dato MX casual independiente] (Perfectiva, 2024; SoyConta, 2024) |
| Dueño-operador (draw/compensación) | Opaco | Opaco | [Estimación cualitativa] frecuentemente equivale a salario de gerente general + utilidades |

**Salario mínimo frontera norte 2026:** $13,409.80 MXN/mes vs nacional $9,582.47 MXN/mes — **+40% superior** (AMEDIRH, 2026). **Baja California es el tercer estado con mejores salarios promedio del país** ($14,711 MXN/mes), después de CDMX ($16,578) y Baja California Sur ($15,825) (Periódico El Debate, 2026).

**Informalidad estructural en el sector:**

- **44% de cocineros sin IMSS** (INEGI Q1 2025).
- **73.2% de trabajadores en preparación y servicio de alimentos sin IMSS** (INEGI Q3 2024).
- **70% de los restaurantes operan sin dar seguridad social** y **41.7% del personal del sector está sin IMSS** (La Jornada, 2020).
- **74% del personal en restaurantes informales no recibe salario fijo** — sus ingresos son solo propinas (La Jornada, 2020).

**Implicación operativa para Zenet:** el segmento que paga Zenet (casual independiente formal con flujo bancarizado) **se correlaciona con el segmento del sector que opera con formalidad fiscal y nómina**. No diseñar Zenet para el ~70% informal — diseñar para el ~30% formal serio. Es el mismo subsegmento que ya accede a fintechs lending y banca empresarial (ver sección 8).

**Reformas laborales 2024-2026 que afectan estructura salarial:**

- **Vacaciones dignas** (vigente 2023): de 6 días a 12 días al primer año, escalando hasta 20 días, con 2 días adicionales por año.
- **Propinas en salario mínimo** (aprobada en Diputados, pendiente Senado): el establecimiento debe garantizar el salario mínimo **sin contar propinas** como parte del ingreso base. Si pasa, elimina la práctica común de "sueldo simbólico + propinas".
- **+13% al salario mínimo 2026:** presión adicional sobre coste primario, que CANIRAC y AbasturHub identifican como uno de los retos centrales del sector para el año (AbasturHub, 2026).

### Cook shortage y la presión sobre la estandarización

El sector restaurantero mexicano enfrenta una crisis estructural de talento que, lejos de ser problema lateral, es el argumento operativo central a favor de la estandarización:

- **Déficit de 500,000 trabajadores** en la industria nacional (CANIRAC vía El Economista, 2026).
- **75% de cocineros abandona su empleo antes de los cinco meses** (CANIRAC, 2024).
- **Solo 20% de ayudantes generales permanece después de seis meses** (CANIRAC, 2024).
- **8 de cada 10 restaurantes operan con plantillas incompletas** (CANIRAC, 2024).
- **Mundial 2026 demanda 12,000-14,000 empleos temporales adicionales** que el sector no puede cubrir con plantillas actuales (El Economista, 2026).

> *"No hay el personal suficiente y adecuado para cubrir todas las plantillas."* — Ignacio Alarcón, presidente CANIRAC nacional, febrero 2026 (El Economista, 2026).

> *"Estamos sufriendo por un déficit de personal. Esperamos que las nuevas generaciones quieran trabajar en los restaurantes para poder suplir esas vacantes que tenemos."* — CANIRAC Puebla, julio 2025 (Milenio, 2025).

**Frontera norte intensifica el problema.** La proximidad a Estados Unidos y el diferencial salarial generan migración constante de cocineros mexicanos. Tijuana, Mexicali y Cd. Juárez están sobre-representados en el cook shortage — aunque el dato cuantitativo segmentado por región no está publicado, la dinámica está documentada cualitativamente en prensa local y testimonios.

**Implicación central para la propuesta de valor de Zenet:** la estandarización **reduce dependencia del talento individual**. Cuando una receta está documentada con gramajes, fotos y procedimiento, un cocinero nuevo se vuelve productivo en días, no en meses. Cuando los manuales operativos cubren apertura, prep, cierre, limpieza, la rotación de personal deja de borrar el progreso. Las consultoras que venden estandarización lo enmarcan exactamente así (Ciencialatina, 2024; Grupo Klee, 2024). Zenet automatiza esta capa.

### Buying committee para sistemas operativos como Zenet

Tabla del buying committee Zenet por tamaño de operación. Incluye cuatro dimensiones: decisor (firma y aprueba presupuesto), influenciador (recomienda), bloqueador (puede vetar), usuario (uso diario).

| Rol | 1 sucursal | 2-3 sucursales | 4-5 sucursales |
|---|---|---|---|
| Dueño-operador | **Decisor + Usuario primario** | Decisor | Decisor estratégico |
| Gerente operativo | (no existe formal) | Influenciador + Usuario | **Decisor operativo + Usuario** |
| Chef ejecutivo | (puede ser el dueño) | **Influenciador clave** ("chef adopta") | Influenciador clave |
| Encargado de compras | (no existe formal) | Usuario emergente | Usuario regular |
| Administrador interno | (rol fantasma — esposa, etc.) | Usuario de reportes | Usuario primario reportes |
| Contador externo | **Bloqueador silencioso potencial** | Bloqueador silencioso potencial | Influenciador externo |

**Tres lecciones operativas para el equipo Zenet en conversaciones de venta:**

1. **El chef adopta, el dueño paga.** Para 2+ sucursales, ganar al chef antes que al dueño es prerrequisito. El chef tiene que ver Zenet como amplificación de su criterio, no reemplazo. La narrativa "augment, not automate" del business context (validada por Victor Murguia, 2026) funciona aquí.

2. **El contador externo es bloqueador silencioso.** Si percibe Zenet como amenaza a su servicio o complicación adicional al ciclo fiscal, puede hundir la decisión sin aparecer en la conversación. Mensajería preventiva: Zenet le ahorra trabajo al contador (data más limpia, exportes consolidados), no le quita trabajo.

3. **En 1 sucursal el comprador es el usuario.** Eso es ventaja (menos gente en la mesa) y desventaja (el dueño tiene que ver el ROI directamente sin intermediario que abogue). El onboarding tiene que ser obvio en la primera semana o el dueño abandona.

La sección 13 desarrolla este buying committee con tácticas de outreach y con los mensajes específicos por persona.

---

## 4. Capa upstream — proveedores, logística e insumos

### Cómo leer la capa upstream

Esta sección mapea el ecosistema de actores que abastecen al restaurante casual independiente en Tijuana y Baja California: mercados mayoristas, distribuidores HORECA, formatos cash-and-carry, productores con venta directa, dinámica de cruce fronterizo, y proveedores de equipo y servicios recurrentes.

El criterio de inclusión es **B2B HORECA real**, no actores que solo sirven a consumidor final. Cuando un actor sirve a ambos públicos, lo marcamos explícitamente.

Cada actor identificado lleva nombre comercial, sitio web o redes públicas cuando existen, ubicación, cobertura geográfica, perfil de cliente declarado y modalidad comercial. Donde la información operativa (mínimos de compra, condiciones de crédito, volumen de flotilla) no es pública, lo decimos explícitamente — la opacidad operativa es ella misma señal del segmento.

### 4.1 Mercados mayoristas y centrales de abasto en BC

A diferencia de la CDMX (Central de Abasto de Iztapalapa) o Guadalajara, **Baja California no tiene una central de abasto única dominante**. La función se distribuye entre mercados regionales más distribuidores privados con flotilla puerta a puerta.

**Mercado de Abastos Tijuana.** Vía Rápida Poniente 15441, Col. Río Tijuana 3a Etapa (Mercado de Abastos Tijuana, redes oficiales 2024). Comunicación y dinámica con camiones descargando desde madrugada indican orientación primaria a mayoreo B2B, aunque también vende a público general. Productos dominantes: frutas y verduras frescas, abarrotes, cárnicos en bodegas específicas. Acceso para restaurante: compra de contado por caja, arpilla o pieza, sin requisito formal de cuenta. Algunas bodegas ofrecen entrega a domicilio a clientes frecuentes. [Estimación cualitativa] sobre volumen B2B vs retail: predominantemente B2B por horarios y empaques, sin % oficial publicado.

**Central de Abastos Benítez (Tijuana).** Blvd. Federico Benítez López 6420, Col. San Antonio Oeste, horario 05:00-16:00 todos los días (Waze listing, 2024). Operación complementaria al Mercado de Abastos principal, enfocada en abasto matutino. Sin información oficial pública sobre tamaño o composición de bodegas.

**Mercado Negro de Mariscos (Ensenada).** Malecón / zona portuaria. Productos dominantes: pulpo, camarones, almejas, caracoles, langostas, ostiones, pescados varios (Baja Foodie, 2024). Es a la vez plataforma de compra B2B para restaurantes locales y food trucks, y destino gastronómico/turístico — la mezcla de funciones lo hace difícil de cuantificar en términos de % B2B. Muchos restaurantes de Ensenada y del Valle de Guadalupe se surten ahí; algunos locatarios ofrecen entrega o pedidos grandes para negocios (Ensenada Land 646 / Yo Amo Ensenada, redes oficiales 2024).

**Mexicali.** Existe un Mercado de Abastos Mexicali enfocado en frutas, verduras y abarrotes, pero la información pública detallada sobre número de bodegas, superficie o % B2B es muy limitada. La dinámica esperada es similar a Tijuana: predominio B2B con venta también a consumidor final, predominante en madrugadas y mañanas (sin fuente cuantitativa publicada).

**Implicación operativa.** Sin una central única dominante, el restaurante casual independiente en BC depende fuertemente de **distribuidores privados con flotilla** (siguiente sub-sección) más combinaciones puntuales con mercados.

### 4.2 Distribuidores HORECA dominantes en BC

**Distribuidora La Canasta.** lacanasta.com.mx. Comercializadora líder en noroeste con cobertura Baja California, Baja California Sur y Sonora. Puntos de venta en Tijuana, Rosarito, Ensenada y Mexicali (CANACINTRA Ensenada directorio, 2024). Portafolio: carnes y vísceras, cortes finos, quesos y lácteos, abarrotes, desechables, deli (sitio oficial, 2024).

El segmento declarado en su propio sitio es notable por lo explícito: *"mayoristas de alimentos, proveedores de tacos, pizzas, carnitas, chicharrones, menudo, pozoles, sushis, antojitos, bares, hoteles, banquetes en todo Baja California"* (La Canasta, 2024). Eso describe casi textualmente el ICP de Zenet.

Operación comercial: envío a domicilio desde centros propios (camionetas de reparto, sin número público), precios de mayoreo sin membresía. Formas de pago no especificadas en sitio público; el patrón típico del foodservice formal es transferencia a 15-30 días con factura para clientes con historial.

**Comercializadora de Alimentos Ochoa.** alimentosochoa.com. Sede en Tijuana, opera importación y cadena de frío para entregar a clientes en México y Estados Unidos. Origen como importador de quesos, ahora con portafolio ampliado a cárnicos y otros productos alimenticios (Alimentos Ochoa, 2024). Segmento mixto: cadenas de autoservicio, mayoristas, distribuidores y restaurantes. Función de broker formal para insumos importados USA.

**Sysco / Pacific Star Foodservice Tijuana.** Parque Industrial Girasol, Andador del Rey 20051, Nave 8-A, Col. Rancho El Águila, C.P. 22215, Tijuana (Sysco directory, 2024). Filial mexicana de Sysco con perfil HORECA puro y orientación más enterprise (cadenas medianas, hoteles, casual independiente high-end). Modalidad típica de Sysco a nivel global: catálogo digital, alta como cliente, condiciones de crédito negociadas, entregas programadas. El detalle específico para la plaza de Tijuana no está públicamente desglosado.

**Otros distribuidores especializados.** Existe un ecosistema de distribuidores más pequeños o verticales (cárnicos especializados, lácteos, mariscos, abarrotes secos) cuya documentación pública es limitada — generalmente operan vía relaciones directas con el restaurante, sin sitio web robusto.

**Implicación de canal para Zenet.**

1. **La Canasta como apuesta de canal #1.** Su discurso comercial nombra textualmente al ICP Zenet, ya tiene flotilla y entregas en BC + BCS + Sonora, está institucionalizado en cámaras (CANACINTRA Ensenada). Es el partner de canal natural más obvio identificado en la investigación.
2. **Sysco / Pacific Star como apuesta #2.** Perfil más enterprise, casual independiente high-end.
3. **Mercado fragmentado.** No hay un partner único dominante — Zenet puede explorar varias relaciones en paralelo sin riesgo de "casarse" con uno solo.

La sección 14 desarrolla las apuestas de canal concretas.

### 4.3 Cash-and-carry y clubes de precio en BC

**Smart & Final.** El formato cash-and-carry sin membresía con orientación explícita a "suministros para restaurantes" tiene presencia concentrada en frontera norte (Cocina Vital, 2024; RadioFórmula, 2025):

- **Tijuana: 7-8 sucursales** (La Mesa, Calle Segunda, Calzada Tecnológico, Blvd. Salinas, Blvd. Insurgentes, Blvd. Casablanca, Soler, Parque Industrial Lago).
- **Mexicali: 5 sucursales.**
- **Ensenada: 2 sucursales.**
- **Rosarito, Tecate, San Luis Río Colorado: 1 cada uno.**

Total nacional: 17-18 tiendas, casi todas en frontera norte. La estrategia comercial apela explícitamente a tiendas minoristas, taquerías, catering y pequeños negocios de comida que prefieren auto-servicio cash-and-carry y tickets facturables. El % real de adopción por casual independiente típico no tiene benchmark publicado, pero la concentración geográfica en BC sugiere uso significativo del formato como complemento (no reemplazo) de distribuidores con entrega.

**Costco Business y Sam's Club Business.** Ambos operan en TJ, Mexicali y Ensenada. Requieren membresía empresarial. La práctica común en frontera es que muchos restaurantes pequeños usan membresías personales o empresariales para comprar embutidos, quesos importados, productos USDA, productos especializados que no consiguen con su distribuidor regular. Documentado en testimonios y blogs operativos como práctica regular sin estadística cuantitativa publicada.

**Restaurant Depot.** No se identificó presencia operativa en TJ/BC. Es un actor presente en USA con cruce de relevancia (siguiente sub-sección) pero sin tiendas en lado mexicano de BC.

**La Comer Empresarial.** El formato existe a nivel nacional pero no se identificó sucursal específica en BC en la información pública revisada.

**Implicación operativa.** El operador casual independiente típico en BC opera con un **stack de abasto híbrido**: distribuidor con entrega para 60-80% del volumen + mercado mayorista para frescos diarios + cash-and-carry para complementos puntuales. Zenet tiene que ingerir data de los tres flujos en una vista unificada — no es feature opcional.

### 4.4 Cruce fronterizo San Diego ↔ Tijuana

Esta es la pregunta más BC-específica de la sección. La evidencia cuantitativa para restaurantes específicamente es prácticamente inexistente, pero la dinámica está sólidamente documentada en consumo y prácticas comerciales de frontera.

**El antecedente cultural.** Estudios de Bancomext sobre patrones y hábitos de consumo en BC documentan que **históricamente el 70% de las ventas de Price Club en frontera provenían de residentes mexicanos**, y que Price Club/Costco, Ralph's y Vons fueron destinos principales de compras fronterizas para residentes de Tijuana (Bancomext, 2017). Estudios académicos sobre flujos de carga entre Otay y San Diego cuantifican el comercio en miles de millones de dólares anuales (Scielo, 2017).

**Restaurantes específicamente.** No hay cifra publicada que diga "X% de restaurantes casual independientes en TJ compra insumos en USA". La dinámica documentada cualitativamente:

- **Compra a título personal.** Dueño o chef con visa cruza, compra en supermercados mayoristas (Costco, Smart & Final del lado USA, Restaurant Depot San Diego), regresa con la mercancía como uso personal. Es la modalidad más común para volúmenes medios.
- **Pasadores informales.** Intermediarios que acumulan mercancía de varios clientes y la cruzan con distinta formalidad (Dialnet / Universidad Autónoma de Coahuila, 2022).
- **Importación formal con broker aduanal.** Reservada para volúmenes que justifican la complejidad legal. No es práctica común para casual independiente típico.
- **Brokers logísticos B2B formales.** Sysco / Pacific Star y Alimentos Ochoa actúan como brokers de hecho — importan formalmente y luego venden B2B a restaurantes en MX. Es la ruta "limpia" para el operador que no quiere manejar el cruce.

**Restricciones SENASICA y SAT.** SENASICA regula estrictamente importación de productos de origen animal y vegetal. Cárnicos, lácteos, huevos y productos frescos requieren permiso sanitario, certificación de origen y deben entrar por canales de importación formal. **Si el restaurante cruza cantidades comerciales de productos restringidos en vehículo particular, está en riesgo de decomiso y sanciones.** Sin estadística pública de sanciones específicas a restaurantes de TJ por esta causa.

**Qué se cruza típicamente:**

- Productos especializados (quesos, embutidos finos, insumos étnicos, materia prima para coctelería).
- Equipo menor y utensils de cocina.
- Cárnicos y lácteos USDA para conceptos que buscan diferenciarse en calidad.
- Productos de consumo gastronómico que no tienen presencia en MX.

**Casos publicados.** Prensa BC (Zeta Tijuana, 2024) cubre cómo el incremento de costos de insumos y los tiempos de cruce afectan a restaurantes, pero no describe esquemas de abasto cross-border restaurant-by-restaurant.

**Implicación para Zenet.** El operador casual independiente serio en TJ tiene una capa adicional de complejidad logística que no existe en CDMX o Guadalajara. Zenet tiene que:

- Soportar trazabilidad de insumos cross-border (origen MX vs USA).
- Manejar costos en doble divisa cuando aplica.
- Ingerir compras hechas a título personal sin factura formal — el operador necesita registrarlas igual.
- Documentar evaluación de proveedor cross-border vs nacional para la Fase 3 (distribuciones y proveedores).

### 4.5 Productores del Valle de Guadalupe y zona agrícola BC con venta directa

El Valle de Guadalupe es el sello regional distintivo del ecosistema gastronómico de BC. La sub-sección mapea productores con **venta directa B2B a restaurantes locales**, no el panorama enoturístico genérico.

**Vinos — el ecosistema Provino BC.** El Comité Provino Baja California es asociación civil que agremia a **más de 80 vinícolas del estado** (Provino BC, 2024). **Provino NO opera como distribuidor único** — su misión es promoción cultural (Fiestas de la Vendimia, Club del Vino, eventos educativos). Las vinícolas se mueven independientemente con tres modelos:

- **Vinícolas medianas y grandes con fuerza comercial propia** — Monte Xanic con 220 hectáreas y 21 etiquetas (México Desconocido, 2024), Las Nubes con cobertura nacional declarada, Casa Magoni, L.A. Cetto, Adobe Guadalupe.
- **Vinícolas boutique con integración vertical productor-restaurante** — Hilo Negro con su restaurante Émat in situ (vinohilonegro.com, 2024), evidencia clara de venta B2B interna.
- **Vinícolas garage o micro** que venden 80%+ a restaurantes locales del Valle/Ensenada y al cliente en bodega — sin lista pública de clientes.

**Quesos — cinturón Ojos Negros.** La Cava de Marcelo / Quesos Ramonetti (Valle de Ojos Negros, este de Ensenada) es el caso más documentado de integración vertical productor-restaurante: cuarta generación de queseros con producción de quesos artesanales, mantequilla y helados, con su restaurante Casa Marcelo en Ensenada que sirve sus productos y suministra a otros restaurantes (Revista Todos Santos, 2024; TripAdvisor, 2024). Existen otros ranchos queseros relevantes en Ojos Negros (Rancho La Bellota), pero la documentación de su canal HORECA es más fragmentaria.

**Aceite de oliva.** Baja California es uno de los cuatro principales estados productores de aceite de oliva en MX, con producción concentrada en Ensenada. La AMR documenta que **"la mayoría del aceite de oliva de Baja California se produce en Ensenada y todo se queda en el Valle, aunque algunas empresas y cooperativas envasan y venden una parte en otras partes de la República"** (AMR, 2024). Eso indica peso fuerte de canal HORECA local, sin nombres específicos de aceiterías con programa explícito B2B documentado en abierto.

**Microgreens y vegetales chef-oriented (insight relevante para Zenet).** Un sub-segmento de productores micro emergentes opera 100% B2B chef-oriented vía mensajería:

- **Geek Greens (Tijuana).** Instagram @geekgreens. Microgreens con venta directa por DM/WhatsApp, entregas locales en TJ y alrededores. Comunicación dirigida explícitamente a chefs (*"Vendemos Microgreens en Tijuana y sus alrededores. Contamos con una gran variedad de brotes a su disposición"*).
- **Microgreens Tijuana / Jardín Comestible.** Facebook con publicaciones tipo *"MICROGREENS en Tijuana, ATENCIÓN CHEFS: INNOVA en tus platillos"* dirigidas a chefs y encargados de restaurantes, con promociones para degustación gratuita.

Estos productores son **piezas estratégicas para Zenet más allá del producto**. Operan en la realidad WhatsApp-nativa que la sección 2 documenta como dominante en el segmento, sirven al perfil exacto de chef serio en casual independiente, y son contactos públicos accionables — Alan puede DM-earles directamente para entender la realidad del proveedor especializado que toca al chef todos los días. Bajo costo de field research, alta señal.

**Mariscos y cooperativas.** Cooperativas de pescadores como la Sociedad Cooperativa de Producción Pesquera de Bahía Falsa en San Quintín (Cooperativa Chapalita, La Jornada 2017) y productores de moluscos listados en directorios del Comité Estatal de Sanidad Acuícola de Baja California (CESAIBC, 2010+) abastecen tanto a Mercado Negro Ensenada como directo a restaurantes y catering en zona costera. Modalidad típica: pedido por contacto directo, entrega coordinada o recolección en muelle, pago de contado.

**Hortícolas grandes (Maneadero, San Quintín, Valle de Mexicali).** Empresas como Productora Agrícola Industrial del Noroeste / Rancho Los Pinos (San Quintín) producen tomate, pepino y hortalizas para mercados nacionales e internacionales (Conexión México, 2024). Su volumen y orientación principal es exportación y cadenas grandes, no venta directa a restaurante casual independiente — el insumo termina en el restaurante vía intermediarios.

**Patrón distintivo del Valle: rancho con restaurante propio.** Más allá de productores individuales, el Valle alberga grupos integrados verticalmente: La Cava de Marcelo + Casa Marcelo, Hilo Negro + Émat, el ecosistema "Baja Divina" del chef Javier Plascencia (Finca Altozano, Animalón, Erizo, Caffé Saverios). Estos operadores son **early-adopter potenciales para Zenet**: ya están en mindset de gestión integral (productor + restaurante + experiencia), tienen recetario implícito formalizado por la integración productiva, y son operadores serios con capacidad de pago. La sección 14 los nombra como hipótesis de prospecto temprano.

### 4.6 Equipo de cocina industrial y servicios recurrentes

**Proveedores de equipo de cocina industrial en TJ/BC.**

- **Todo Equipos.** todoequipos.com.mx. Carretera Aeropuerto 1900, local D-01, Otay Centro Comercial, Col. Nueva Tijuana. Equipos para cocina industrial: parrillas, planchas, rosticeros, hornos, licuadoras industriales, extractores, procesadores, mobiliario de acero inoxidable. Segmento claramente B2B HORECA.
- **EMC Baja.** emcbaja.com.mx. Empresa con trayectoria en zona gastronómica de Tijuana. Equipos y mobiliario para cocinas, restaurantes, bares, hoteles e industria alimentaria. Servicio adicional de refacciones, mantenimiento preventivo y correctivo, reparación de equipos para carnicerías.
- **Cocinas Institucionales (cobertura nacional).** cocinasi.com. 25+ años, diseña, equipa e instala cocinas industriales "llave en mano" para restaurantes, hoteles, hospitales y comedores. Marcas representadas: Rational, Unox, True. Cobertura nacional sin sucursal declarada en BC.
- **Sección Amarilla y directorios.** Listan múltiples negocios de equipo en TJ ("El Chef Cocinas Industriales", "Automática División") confirmando ecosistema de varias empresas B2B locales, muchas con baja presencia digital estructurada (operación offline / WhatsApp).

**Servicios recurrentes (lavandería, mantenimiento, plagas, gas, energéticos).** En el barrido de research no aparecen actores con marca clara presentándose explícitamente como "servicio para restaurantes en TJ/BC" con cobertura pública robusta. El patrón observado:

- Lavandería industrial: parte del servicio lo dan lavanderías que también atienden hoteles y hospitales.
- Control de plagas y mantenimiento de equipos: empresas multi-sector (industria, comercios, hogares).
- Gas LP industrial: empresas gaseras locales (Zeta Gas y similares) sin segmentación HORECA pública.
- Empaques y desechables (clave por delivery y takeout): proveedores con presencia en distribuidores generales como La Canasta.

Este sub-segmento tiene **menos densidad pública que distribuidores de alimentos** — la documentación de actores requiere field research más que desk research.

### Implicaciones operativas de la capa upstream

Cuatro lecturas estratégicas que la sección 12 desarrolla:

1. **Apuesta de canal #1 — Distribuidora La Canasta.** Su discurso comercial nombra textualmente al ICP Zenet. Canal natural para co-marketing, programa de referidos o material POP en sus puntos de venta.
2. **Mercado fragmentado de proveeduría.** No hay un Sysco MX dominante en BC. Zenet puede explorar varias relaciones de canal en paralelo.
3. **Productores micro chef-oriented (Geek Greens y similares) como touchpoints de campo.** Operan en la realidad WhatsApp-nativa del segmento y son contactos accionables para entender al chef serio.
4. **Cross-border como capa adicional de complejidad operativa** que Zenet tiene que soportar nativamente (trazabilidad MX vs USA, doble divisa, compras informales registrables).

El mapa visual del ecosistema completo (sección 11) integra esta capa con las demás.

---

## 5. Capa downstream — canales de venta

### Cómo leer la capa downstream

Esta sección mapea por dónde sale la venta del restaurante hacia el comensal. Tres flujos coexisten: dine-in en sucursal, takeout directo y delivery vía agregadores o canal directo. La sección concentra la mayor parte de su análisis en agregadores (Rappi, DiDi Food, Uber Eats) porque es donde más fricción operativa acumula el operador casual independiente y donde más data hay disponible.

### 5.1 Las tres apps dominantes en MX

México es el segundo mercado de delivery más importante de Latinoamérica para las apps líderes (Expansión, 2025).

**Rappi.** Cobertura declarada de **110 ciudades del país y alrededor de 100,000 negocios registrados** (Logística 360, 2024) — la app con mayor capilaridad geográfica. Activa en Tijuana, Mexicali y todo BC.

**DiDi Food.** **Más de 360 millones de pedidos en más de 60 ciudades en sus primeros cinco años en México** (Expansión citando DiDi, 2025). Landing específica de Tijuana BC en su sitio oficial.

**Uber Eats.** **Más de 70 ciudades mexicanas, incluyendo Tijuana y Mexicali** (Marketing4eCommerce, 2024). Listado amplio de restaurantes de Tijuana en su sitio oficial confirma operación activa local.

**Sin alternativa local de escala en BC.** Foros locales en Tijuana sugieren preferencia ligera por Uber Eats sobre Rappi para usuarios (Reddit r/tijuana, 2024). **DoorDash NO opera en TJ ni en MX en general** — concentrado en Estados Unidos. La frontera tiene una dinámica especial: usuarios desde San Diego usan Uber Eats para pedir comida a familiares en TJ — uso cross-border que no aparece en otras ciudades del país.

**Salidas y consolidación.** No hay anuncios de retiro de Rappi, Uber Eats o DiDi del país en 2024-2026. Las tres se preparan para un aumento histórico de pedidos por el Mundial 2026 (El CEO, 2025). iFood (líder de Brasil) sigue concentrado en su mercado y no opera a escala en MX.

### 5.2 Estructura real de comisiones — nominal vs efectiva

El insight central de la sección. Las **comisiones declaradas** son solo una parte del costo real para el operador.

**Comisiones nominales declaradas 2025-2026** (Líder Empresarial, 2024; PoloTab, 2025; Calisto, 2024):

| Plataforma | Con repartidor propio | Con repartidor de la plataforma | Pickup |
|---|---|---|---|
| Uber Eats | 15% | 25-30% | ~15% |
| DiDi Food | 18% | 30% | — |
| Rappi | — | 20-25% + IVA | — |

CANIRAC ubica el rango total típico en **15-35% según tipo de contrato y tamaño del establecimiento**, con cadenas grandes negociando mejor y casual independiente acercándose al extremo alto (San Luis El Universal citando CANIRAC, 2026).

**Comisión efectiva — el dato que el operador no calcula.** Análisis especializado para restauranteros mexicanos identifica que **la comisión efectiva está típicamente 8-12 puntos arriba de la tasa nominal** por costos no obvios (Calisto, 2024):

| Componente | % adicional sobre el pedido |
|---|---|
| Procesamiento de pagos | 3-4% |
| Empaques especiales para delivery | ~4% del valor del pedido |
| Tiempo extra de personal (20% más) | ~6% atribuible a delivery |

**Ejemplo numérico (Calisto, 2024):** un restaurante con comisión nominal del 25% termina con afectación total de **38.5% del valor del pedido** después de sumar fees de pago, empaques y tiempo del personal. Eso es 13 puntos de diferencia entre lo que el operador percibe y lo que realmente está pagando.

**Costos hundidos no obvios adicionales** (Calisto, 2024; San Luis El Universal, 2026):

- Tablets adicionales por cada app (compra/renta + espacio físico + corriente).
- Penalizaciones por cancelaciones o ajustes "a favor del cliente" que la plataforma decide y el restaurante absorbe.
- Promociones forzadas o fuertemente recomendadas para eventos como Mundial 2026 cofinanciadas por el operador.
- Descuentos promocionales que el restaurante absorbe parcial o totalmente.

**Planes Plus / Pro / Marketing.** Las tres plataformas tienen planes pagados de visibilidad que añaden 5-10 puntos porcentuales adicionales (PoloTab, 2025). Sin estos planes, el restaurante pequeño tiende a perder visibilidad frente a competidores que sí pagan — la opción de "no entrar al plan premium" en la práctica significa "quedar invisible".

**Implicación central para Zenet.** El operador intuye que pierde dinero en agregadores, pero **no calcula cuánto exactamente**. Zenet puede generar el reporte que le muestre la pérdida real (nominal vs efectiva) — diferencial de mensajería más concreto que cualquier feature de software. La sección 12 lo desarrolla.

### 5.3 Convivir con POS sin APIs — la operación digital paralela

Esta sub-sección conecta directamente con la sección 6. Como la mayoría de los restaurantes mexicanos opera **sin tecnología avanzada** y los POS dominantes no exponen APIs públicas accesibles (sección 6.3), el operador con 2-3 plataformas activas opera una **operación digital paralela** dentro del restaurante (eSemanal, 2025; Deliverect, 2025).

**Patrón típico:**

- 1 tablet por plataforma activa (Rappi + Uber + DiDi = 3 tablets).
- Cajero o "encargado digital" revisa tablets, transcribe órdenes al POS o comanda manual, actualiza estados (aceptado, en preparación, listo).
- En horas pico, alguna sucursal designa a una persona casi exclusiva para manejar pedidos digitales y tablets.

**Errores típicos** (Deliverect, 2025):

- Pedidos duplicados o perdidos por falta de atención a la tablet.
- Items fuera de stock que siguen apareciendo en la app por falta de actualización manual.
- Tiempos de preparación mal calibrados que generan quejas, reembolsos o degradación del rating.
- Captura manual al POS con error que afecta inventario y costo.

**Tiempo dedicado por sucursal.** No hay estadística oficial de "minutos por día" dedicados a manejo de agregadores. Consultoras describen el manejo como una nueva línea de trabajo que en hora pico absorbe a una persona de tiempo completo (Deliverect, 2025). **Preparar pedidos para delivery toma 20% más tiempo de personal** que un pedido en sala (Calisto, 2024).

**Plataformas integradoras en MX.**

- **Deliverect (Bélgica).** Único integrador con presencia activa explícita en MX y landing es-mx (Deliverect, 2024). Conecta apps con POS, sincroniza menú e inventario. Modelo de suscripción + cargo por sucursal — costos no publicados en abierto.
- **Otter, Cuboh, Hostie.** Players globales presentes en LatAm con info MX más limitada.

**Fricciones aún con integradores** (Deliverect, 2025):

- Desfase entre menú real y menú en apps cuando no se sincroniza correctamente.
- Errores de mapeo de productos que derivan en items mal registrados en POS o tickets incorrectos.
- Dependencia de la estabilidad de las APIs de las plataformas — caídas puntuales paran la operación.

### 5.4 % de ventas vía agregadores por sub-segmento

Datos sectoriales para MX 2025-2026:

| Sub-segmento | % típico de ventas vía agregadores | Fuente |
|---|---|---|
| Sector general restaurantes con delivery | 30-40% del ingreso | Luis Manuel Rivera, 2025 |
| Quick Service / fast food | ~30% de las órdenes (Uber Eats >50% del canal) | Parrot Software, 2026 |
| Casual independiente full-service | 10-25% (delivery secundario) | El Economista, 2026 |
| Dark kitchens y nativos digitales | hasta 70%+ | El Economista, 2026 |

**Implicación crítica para mensajería Zenet.** **El delivery NO es columna principal del negocio** para casual independiente full-service. Zenet no debe sobre-pesar la narrativa de "te resolvemos delivery". Debe enfocarse en lo que SÍ es columna: servicio en sala, recetario, inventario, costo. El delivery aparece como un eslabón más del sistema, no como el dolor central.

**TJ/BC específicamente.** Sin estadística publicada que compare el % de delivery vs CDMX/MTY, pero la dinámica fronteriza (cross-border ordering, mayor exposición cultural a modelos USA tipo DoorDash) sugiere posible sobre-representación. Field research necesario para validar.

### 5.5 Canal directo — WhatsApp Business, apps propias, marketplaces locales

**Salidas de agregadores.** Operadores en blogs, podcasts y redes sociales han documentado decisiones de salir de agregadores por considerar las comisiones insostenibles. Razones reportadas (Facebook posts curados de operadores, 2024):

- Comisiones altas y poca capacidad de negociación.
- Falta de control sobre datos de clientes y dependencia de algoritmos de visibilidad.
- Servicio al cliente donde la app reembolsa al usuario pero el costo lo absorbe el restaurante.

Resultados típicos: caída de volumen total, pero mejora de margen unitario y mayor control de relación con clientes frecuentes.

**WhatsApp Business como canal directo.** Plataforma dominante para canal directo en LatAm — gratuita, alta tasa de apertura, sin comisiones de apps (Kasumi, 2024; Blog Fudo, 2024). Recomendación de blogs operativos: lograr que **más del 40% de pedidos vengan por WhatsApp** vs apps para ahorrar comisiones (Kasumi, 2024). Restaurantes que implementan bien WhatsApp reportan incrementos de 30-50% en pedidos a domicilio.

WhatsApp Business API se sugiere para restaurantes con más de 100 pedidos diarios o que requieren integraciones avanzadas; para casual independiente pequeño, la app Business estándar suele ser suficiente.

La evidencia agregada sugiere que WhatsApp es **complemento más que reemplazo total** de agregadores. Algunos casos radicales sí cierran apps y se quedan solo con canal directo, sacrificando volumen.

**Apps propias y white-label.** Empresas SaaS mexicanas y regionales ofrecen apps de marca propia / white-label donde el restaurante tiene su canal de pedidos pero la infraestructura la opera un tercero. Costos típicos: cuota de setup + mensualidad + comisión por pedido menor que la de agregadores grandes. Información detallada generalmente en pitch privado, no en sitios públicos (eSemanal, 2025).

**Rappi mismo promueve combinar su plataforma con WhatsApp** como canal propio (Rappi Merchants, 2024) — usar WhatsApp para marketing y redirigir tráfico hacia la tienda en Rappi. Es señal de que las apps reconocen la importancia del canal directo como complemento, no buscan eliminarlo.

**Marketplaces locales / cooperativos en TJ/BC.** No aparecen en 2024-2026 marketplaces de delivery cooperativos de operadores con escala mediática en BC. Lo más cercano son iniciativas individuales de restaurantes y agrupaciones informales que promueven pedidos directos por WhatsApp y redes sociales.

### 5.6 Marco regulatorio

**CDMX impuso 2% sobre comisiones de plataformas digitales de entrega de alimentos y paquetería**, validado por la Suprema Corte en noviembre 2025 (La Jornada, 2025). Es impuesto al ingreso de las apps, no tope a comisiones cobradas al restaurante.

**No hay tope federal de comisiones** en MX, ni leyes estatales vigentes en Jalisco o Nuevo León que impongan tope porcentual similar al de ciudades de USA (Nueva York 15%, Chicago, San Francisco). Los esfuerzos se concentran en propuestas, monitoreo de competencia (Cofece) y fiscalidad.

**Posición CANIRAC pública 2024-2026.** Postura consistente: las comisiones de **15-35% son uno de los principales retos para el sector** y afectan severamente la rentabilidad, especialmente a micro y pequeños operadores. Ha pedido en varias ocasiones reducciones temporales en contextos de crisis y planteado **~17% como referencia sostenible** (Directo al Paladar, 2024; San Luis El Universal, 2026).

**Comparativos internacionales citados pero no adoptados.** Análisis de competencia mencionan los topes de USA como referencia de lo que podría discutirse localmente (Centro Competencia, 2024). No hay traducción regulatoria efectiva en MX a 2026.

### 5.7 Dark kitchens y cloud kitchens

**Estado del fenómeno en MX 2024-2026.** Consolidación desde 2020 con players como CloudKitchens, Foodology y operadores locales que aprovechan el boom de delivery (Expansión, 2025). Casos como Chubbies Burger documentan modelos que nacieron como dark kitchens en pandemia y hoy generan ~70% de sus ventas vía delivery (El Economista, 2026).

**TJ/BC específicamente.** Sin cobertura nacional detallada sobre dark kitchens en BC, pero apps de entrega muestran múltiples marcas "solo delivery" y restaurantes exclusivos de Uber Eats en Tijuana, lo que indica presencia de modelos de cocina fantasma aunque no siempre identificados con marcas globales (Uber Eats Tijuana, 2024).

**Implicación para casual independiente.** Doble lectura:

- **Como competencia.** Los dark kitchens pueden atacar el mismo segmento con menores costos de renta/sala.
- **Como vía de expansión virtual.** Algunos conceptos casual independientes usan sus cocinas subutilizadas para operar una marca virtual adicional exclusivamente para apps, aprovechando horas valle (Parrot Software, 2026).

### Implicaciones operativas de la capa downstream

Tres lecturas estratégicas que la sección 12 desarrolla:

1. **El "diff" 13 puntos (nominal vs efectivo) es palanca de mensajería.** Zenet le muestra al operador la pérdida real, no la nominal. Diferencial vs cualquier reporte de POS o de la propia app.
2. **El operador YA carga la "cabina digital" como costo operativo no remunerado.** Zenet integra esa carga en una vista única (donde Deliverect resuelve solo una parte). Reduce captura manual, errores, tiempo de persona dedicada.
3. **Modular narrativa de delivery a casual full-service.** El delivery es 10-25% en nuestro ICP — no central. Mensajería Zenet NO es "te resolvemos delivery" — es "te resolvemos el sistema; delivery es uno de los canales".

---

## 6. Capa de software preexistente y la realidad de las integraciones en MX

### Cómo leer la capa de software

Esta sección mapea el stack de software con el que el restaurante casual independiente opera hoy en México. Es la sección estratégicamente más densa del bloque ecosistema porque define con qué Zenet convive, contra qué compite parcialmente y dónde tiene espacio de categoría nueva.

La pregunta central no es "¿qué software existe?" — eso está saturado en comparativas y blogs. La pregunta operativa es: **¿qué APIs están realmente disponibles, qué integraciones funcionan en MX hoy, y dónde queda espacio que no esté ocupado?**

### 6.1 La asunción operativa que cambia todo — el estado real de APIs en POS MX

El hallazgo central de la sub-sección y de la investigación: **en el segmento casual independiente en México, ningún POS dominante ofrece un developer ecosystem público abierto comparable a Toast Developer Portal o Square Developer Platform** (Programas Contabilidad, 2026; investigación propia, 2026).

Esto se desglosa en tres niveles distintos de superficie de integración, no en una sola realidad:

| Nivel | Qué hay | POS típicos en MX |
|---|---|---|
| **Cerrado** | Sin API. Integraciones por exportación de archivos | MyBusiness POS, SICAR |
| **Partner-gated** | API REST existe, pero solo con cuenta de cliente o partner. Sin developer portal público, sin sandbox abierto, sin marketplace, sin webhooks evidentes | **Soft Restaurant** (el dominante) |
| **API-first cloud** | API REST + webhooks + marketplace global. Funcionan en MX pero adopción local mínima | Loyverse, Square, Toast (marginal MX) |
| **Enterprise** | API-first robusto, foco en cadenas, fuera del scope independiente | Oracle MICROS / Simphony |

**Implicación operativa central.** El problema no es que los POS no tengan APIs — es que **las APIs que existen no son utilizables por el ecosistema independiente mexicano hoy**. Soft Restaurant tiene API REST documentada (api.softrestaurant.com.mx) pero el acceso pasa por cuenta de cliente o partner, sin sandbox público (NationalSoft API, 2024). Loyverse y Square sí tienen developer platform abierto, pero su adopción en el segmento casual independiente mexicano es menor que la de Soft Restaurant.

**El operador no articula este problema como dolor.** CANIRAC y prensa especializada se enfocan en CFDI, comisiones de agregadores, costo laboral, no en "fricción de integraciones POS" como tema central (CANIRAC, prensa 2024-2026). El operador vive con el POS como caja negra que solo registra ventas — el insight del business context lo expresa textualmente: *"I have POS but it only tracks sales, it doesn't help with purchasing or real inventory"*. El operador ya separa mentalmente POS = ventas y todo lo demás = aparte.

**Implicación para mensajería Zenet.** **NO comunicamos "integración" como valor central.** El operador no lo articula como dolor. Comunicamos "lo que el POS no atiende" — inventario que cuadra, costo que se explica, recetario que sobrevive a la rotación.

### 6.2 POS — los tres niveles con detalle

**Cerrado (sin API operativa).** MyBusiness POS y SICAR dominan operaciones más cerradas, on-premise, con integraciones únicamente vía exportación de archivos a contabilidad o inventario. Son herramientas funcionales para venta y facturación SAT pero estructuralmente incompatibles con un sistema operativo que necesita ingerir data en tiempo real (SICAR, 2024).

**API-first cloud (presencia MX moderada).**

- **Loyverse.** API REST oficial documentada con webhooks disponibles desde hace años (Loyverse Town, 2024). Plataformas no-code como Integrately y Appy Pie ofrecen conectores entre Loyverse y otros sistemas. Listado en guías de POS para LatAm como opción común para cafés y restaurantes pequeños (Treinta, 2025).
- **Square (incl. Square for Restaurants).** Developer platform global con APIs REST (pagos, órdenes, catálogo, inventario) y marketplace de apps. Operativo en México como solución de pagos y POS, presente en comparativas mexicanas con foco CFDI 4.0 (Programas Contabilidad, 2026). Integración vía Deliverect documentada para pedidos online en mercado MX.
- **Toast.** Stack API sólido (Orders, Menu, Inventory, Reporting) y posicionado como API-first en USA. Listados de empresas usando Toast en MX muestran adopción **casi anecdótica** (1 empresa identificada en GetApp MX). Las capacidades API casi no impactan el ecosistema mexicano hoy.

**Enterprise.**

- **Oracle MICROS / Simphony (vía distribuidores como Pospan).** Documentación de APIs en la nube, integraciones con Uber Eats, Rappi, DoorDash y otros delivery (Oracle LATAM, 2024). En MX se usa principalmente en cadenas medianas y grandes — fuera del scope independiente. El costo y la complejidad lo dejan estructuralmente fuera del casual independiente típico.
- **NCR Aloha.** Mismo perfil enterprise, sin presencia significativa en casual independiente.

### 6.3 Soft Restaurant como caso especial

Soft Restaurant (National Soft) merece tratamiento individual porque es **el POS dominante en el segmento mexicano** según consenso de comparativas y prensa, autodeclarándose "software restaurantero #1 en México y Latinoamérica" (Soft Restaurant, 2024; InfoChannel, 2026).

**Modelo de canal y partners — distinción crítica.**

Existe un programa de canal formal (distribuidores y socios comerciales) con niveles **bronce / plata / oro / platino**, academia de certificación con 30+ cursos, alta de socio autorizado con requisitos fiscales, kit inicial, capacitaciones (Soft Restaurant alta de socio comercial, 2024; InfoChannel, 2026). **Este programa es para distribuidores que venden e implementan Soft Restaurant.**

**No hay programa público específico de "technology partners" / "ISV partners"** equivalente a Toast Partner Program o Square App Partner Program. Si existe ruta para que un SaaS B2B externo se integre formalmente, se gestiona vía relación bilateral directa con National Soft, no vía programa documentado con sign-up público.

**Estrategia closed-platform observada.** Soft Restaurant construye internamente las adyacencias en lugar de invitar partners externos:

- **Soft Restaurant Payments** — procesamiento de pagos integrado al POS.
- **Delivery Manager** — integra directamente Uber Eats, Rappi, DiDi en el POS sin terceros.
- **FoodBot** — comercio electrónico y automatización con "algoritmo inteligente" propio.
- **Módulo de integración ERP/PMS** — JSON sobre HTTP POST/GET, bidireccional para PMS, unidireccional ERP. Documentación semi-pública en Zohodesk + manuales PDF para clientes. Sin lista pública de ERPs certificados (Soft Restaurant Zohodesk, 2024).

El patrón es **NCR Aloha pre-2010, no Toast 2020+** — closed-platform play, no open ecosystem.

**Punto de contacto público.** InfoChannel cita a un ejecutivo apellidado Mantilla como responsable de estrategia de canal (InfoChannel, 2026). Es el punto de entrada público si Zenet eventualmente abre conversación bilateral con National Soft.

**Fricción reportada por integradores.** El principal rastro público está en Reddit r/Devmexico (mayo 2025), donde un desarrollador pregunta cómo integrarse y comenta haber buscado en toda la documentación pública sin encontrar API abierta — sugiere que sin ser cliente o partner es difícil acceder al stack técnico.

**Implicación de canal para Zenet.** **Partnership formal con National Soft no es ruta programática** — es apuesta de relación bilateral, alta-fricción, sin precedente público de un SaaS B2B mexicano integrado vía partnership formal. Asumir tiempo 12-24 meses si se persigue, no construir GTM dependiente de ello. Coexistencia primero (importación manual, archivos, exportación), partnership después si tiene sentido.

**Riesgo competitivo nombrado.** Soft Restaurant ya tiene FoodBot (con "algoritmo inteligente" declarado), Analytics propio, Payments. Está construyendo el playbook de "platform play interno". Si decide moverse a estandarización + inventario inteligente antes de que Zenet capture share, el corredor se cierra. Vigilancia activa.

### 6.4 PayFacs y la capa de pagos físicos

Capa que aparece en paralelo al POS y vale la pena nombrar por su escala.

**Clip, Mercado Pago, Conekta, Openpay** son procesadores de pago / PayFacs (Payment Facilitators) con alcance masivo en MX. Mastercard reportó en 2025 que **los PayFacs son responsables del ~80% de las terminales POS en México** (Mastercard, 2025). Los productos de Clip Capital y Mercado Pago Crédito (sección 8) son working capital construido sobre data transaccional propia.

Es ecosistema masivo paralelo — hardware de pago, no software de gestión BoH — pero relevante para Zenet porque la data transaccional procesada vía Clip y Mercado Pago es exactamente la dimensión que el platform play eventualmente puede usar para underwriting más rico (sección 15).

### 6.5 Reservas y front-of-house digital

- **OpenTable, Resy, Yelp Reservations, Bistro.** Operan en MX para restaurantes de gama media-alta y hoteles, principalmente en CDMX y destinos turísticos (ComparaSoftware, 2024). Enfoque en reservas, descubrimiento y experiencia del comensal. Casi nada de BoH.
- **Yumminn (España, no LATAM).** App de pedido y pago en restaurantes que terminó en quiebra; no opera en MX (Xataka Móvil, 2024).

Capa **agnóstica para Zenet** — no integramos por defecto, no competimos. Si el restaurante usa OpenTable, sigue usándolo en paralelo a Zenet.

### 6.6 Inventarios y control de operación

- **Excel y Google Sheets** son la herramienta default real del segmento casual independiente típico (sección 2 lo desarrolla cualitativamente).
- **MarketMan (USA/Israel).** Localizado al español y con materiales orientados a LatAm/MX. Cobertura HORECA enterprise y mid-market. Claim global de 15,000+ restaurantes (MarketMan, 2024).
- **StockManager / ITN Consultores (México).** Sistema especializado para restaurantes con multi-bodega, recetas, producción, costeo, órdenes de compra automáticas, transferencias internas (ITN Consultores, 2024). Adopción en MX limitada al segmento más maduro.
- **Crisp (USA, QSR enterprise).** Plataforma de gestión con POS + inventarios + scheduling + back-office para QSR de alto volumen. Fuera del scope casual independiente típico.

**No existe un "MarketMan mexicano puro-play"** de inventarios para restaurantes en el barrido de research. El control de inventarios viene embebido en el POS (Soft Restaurant, Fudo, EasyPOS) o en ERPs horizontales — lo que **deja un hueco claro para una solución especializada tipo Zenet** que ataque inventario inteligente como capa cognitiva sobre el POS, no como módulo dentro del POS.

### 6.7 Contabilidad y facturación — el stack del contador externo

Capa crítica porque el contador externo es **bloqueador silencioso potencial** del buying committee (sección 3). Software dominante en despachos contables que sirven a restaurantes mexicanos:

- **CONTPAQi.** Estándar histórico en despachos contables MX. Fuerte en contabilidad y nómina.
- **Aspel.** Contendiente histórico, fuerte en facturación y administrativo.
- **Bind ERP.** Cloud, más moderno, adopción creciente en PYMEs.
- **Alegra.** Cloud, simple, popular en operadores chicos directos.
- **Konfío Contador, Xero MX, otros.** Players más nuevos, adopción menor.

Estado de adopción del CFDI 4.0 y CFDI Carta Porte en el sector restaurantero es generalizado por obligación fiscal (Programas Contabilidad, 2026). El contador externo típicamente define el stack — si el operador trae su propio software, el contador lo acepta o lo cambia según su práctica.

**Costos típicos de servicios de contabilidad externa:** $2,500-$6,000 MXN mensuales para casual independiente de 1-3 sucursales (Perfectiva, 2024; SoyConta, 2024).

**Implicación para Zenet.** Debemos entregar exportes de data que faciliten al contador externo (no que le compliquen). Mensajería preventiva al contador: Zenet le ahorra trabajo, no le quita servicio.

### 6.8 Programas de lealtad y CRM

- **Leal (Colombia).** Red de lealtad multicomercio con CRM para comercios. Levantó $3M USD en 2024 con FCP Ventures para expansión a MX y otros mercados (Latam List, 2024). Atiende retail y HORECA, no exclusivamente restaurantes.
- **Yumminn (España, quebrado).** No relevante para MX.
- **Programas locales armados desde el POS o por fintechs.** No hay un jugador mexicano nuevo 2018-2026 100% vertical-restaurantes con huella relevante en lealtad/CRM.

Capa **agnóstica para Zenet** — no integramos ni competimos directamente.

### 6.9 HR y nómina

- **Worky, Runa, Buk.** HRIS y nómina para PYMEs en MX y LatAm. Atienden restaurantes como vertical entre muchos, sin producto específico para HORECA.
- **Sin un "7shifts latinoamericano"** centrado en scheduling y workforce management solo para restaurantes (investigación propia, 2026).

Capa **agnóstica para Zenet** — coexiste, no integramos por defecto.

### 6.10 Kitchen Display Systems y cocina digital

- **BDKREST (México).** Sistema para restaurantes y bares con comandas a cocina, monitor de cocina y concentrador web para supervisión en tiempo real (BDKREST, 2024). Suite POS con módulo KDS, no KDS puro stand-alone.
- **POS con KDS integrado.** Soft Restaurant, Fudo, otros suelen incluir KDS como módulo opcional.

No encontramos un SaaS nuevo solo de KDS / recetario digital / BoH nacido 2018-2026 en MX/LATAM con foco en casual independiente — hueco adicional para Zenet en la capa cognitiva.

### 6.11 Integradores de delivery

Cubierto en sección 5.3. Resumen aquí:

- **Deliverect (Bélgica).** Único integrador con presencia MX activa documentada. Conecta apps con POS, sincroniza menú e inventario.
- **Otter, Cuboh, Hostie.** Globales en LatAm con info MX limitada.
- **Sin integrador mexicano nacido 2018-2026** identificado en la investigación.

**Posicionamiento Zenet vs Deliverect.** Deliverect es **integrador puro** que resuelve UNA fricción (consolidación de pedidos). Zenet es **sistema operativo** que resuelve la operación completa (estandarización + inventario + distribuciones + costo). No competimos directamente — Zenet hace lo que Deliverect + recetario + inventario + costo + estandarización. Si el operador quiere consolidar pedidos sin el resto, Deliverect es opción. Si quiere el sistema completo, Zenet.

### 6.12 La validación de categoría — NO hay operating system BoH MX/LATAM

Hallazgo estructural de la investigación competitive (Bundle 4.2, 2026):

**Ningún SaaS B2B mexicano o LATAM nacido entre 2018 y 2026 se autodenomina "operating system", "sistema operativo cognitivo" o "back-of-house intelligence" para restaurantes casual independientes.** Cero. El framing de "OS" en LatAm aparece solo en Rotamundos OS — pero es PMS para hotelería, no BoH restaurantero.

Comparables internacionales con ese framing **sin presencia activa anunciada en MX 2024-2026:**

- BOHA! (TransAct, USA)
- Restaurant365 (USA)
- Crunchtime (USA)
- Apicbase (Bélgica)

**Implicación estratégica.** Zenet no compite por categoría — la crea. Es validación competitiva sólida para narrativa de fundraising y posicionamiento. La línea **"DeepSeek of restaurant industry"** del business context (validada con Victor Murguia, 2026) tiene ahora respaldo competitivo dimensionado.

**Caveat honesto.** "No encontramos" no es "no existe absolutamente". Es señal fuerte pero no prueba matemática. El research seguirá vigilando si algún player nuevo aparece con framing similar — especialmente vigilando Soft Restaurant y MarketMan, que son los que tienen recursos y data para moverse hacia capa cognitiva si quisieran.

### Implicaciones operativas de la capa de software

Cuatro lecturas que la sección 12 desarrolla:

1. **POS sin APIs en MX no es problema, es asunción operativa.** Zenet diseña para coexistencia desde día uno (importación manual, archivos, exportación). Integración nativa donde aplique (Loyverse, Square) es bonus, no foundation.
2. **Soft Restaurant es el dominante con quien hay que coexistir, no el partner inmediato.** Partnership bilateral es apuesta de largo plazo, no go-to-market táctico.
3. **El contador externo es bloqueador silencioso potencial.** Mensajería preventiva: Zenet le ahorra trabajo, no le quita servicio.
4. **Categoría nueva validada.** Zenet no es "otro POS", "otro inventario", "otro analytics". Es operating system BoH cognitivo — categoría sin competidor mexicano/LATAM directo identificado. Eso es palanca de narrativa.

---

## 7. Capa institucional y regulatoria *(resumen — profundidad en doc 08)*

### Cómo leer este resumen

Esta sección mapea actores institucionales y reguladores que tocan al restaurante casual independiente en MX y BC, con foco en cómo cada uno se relaciona con la operación día a día. **No es la sección regulatoria detallada del workspace** — esa vive en `08-entorno-regulatorio.md`. Aquí solo se enumeran capas y se nombran implicaciones para Zenet.

### 7.1 Reguladores federales que tocan la operación

- **SAT.** Cumplimiento fiscal del régimen. CFDI 4.0 y CFDI Carta Porte son obligatorios. Toda factura del restaurante (a clientes y de proveedores) pasa por la maquinaria SAT vía PAC autorizado.
- **COFEPRIS.** Manejo higiénico de alimentos, aviso de funcionamiento, inspecciones sanitarias, etiquetado y publicidad.
- **IMSS.** Registro patronal, cuotas, capacitación obligatoria, riesgos de trabajo.
- **PROFECO.** Atención al consumidor, publicidad, precios al público.
- **STPS.** Reglamento laboral, NOM aplicables, capacitación obligatoria.

Estos reguladores no son "actores de canal" para Zenet — son contexto del que el operador no se puede salir. Zenet puede facilitar el cumplimiento (data limpia para auditorías, registros de proceso para Distintivo H) sin pretender ser solución regulatoria.

### 7.2 Reguladores estatales y municipales en BC

- **Sanidad municipal Tijuana, Mexicali, Ensenada, Rosarito, Tecate.** Permisos de operación, inspecciones de manejo de alimentos, certificados de fumigación.
- **Coepris BC.** Comisión Estatal para la Protección Contra Riesgos Sanitarios — coordina con COFEPRIS a nivel estatal.
- **Permisos de alcohol.** Por municipio. Costos y renovaciones varían — CANIRAC Jalisco ofrece 20% de descuento en renovación de licencias de bar a sus afiliados (CANIRAC Jalisco, 2024); el patrón es replicable en otros capítulos.
- **Protección Civil municipal.** Capacitación obligatoria en prevención de incendios, plan de emergencia.
- **Tesorería municipal.** Predial, refrendos, licencias.
- **Zonificación y uso de suelo.** Restringe dónde puede abrir un restaurante con cocina y manejo de alcohol.

### 7.3 Cámaras y asociaciones del sector

**CANIRAC nacional.** Presidente actual **Ignacio Alarcón Rodríguez Pacheco** (2024-2026, reelecto para 2025-2026, continuidad de agenda) (InfoChannel, 2024; Los Titulares, 2025). Estructura: declara representar a más de 600,000 establecimientos con ~13,000 afiliados de pago y 56 delegaciones en 31-32 estados (CANIRAC FAQ, 2024). Cuotas de afiliación nacional referenciales: Micro $2,700 / Pequeño $3,750 / Mediano $5,850 / Grande $8,950 MXN/año.

**CANIRAC Baja California / Tijuana.** Presidente delegación TJ 2026-2027: **Rebeca Aguilar Santuario** (AFN Tijuana, 2026; Multimedios, 2026). Presidente estatal BC: **Iván Nolasco Cruz**. Penetración estimada en BC: 3-8% de restaurantes formales del estado, con TJ posiblemente arriba (10-15%) por ser plaza estratégica — sin cifras oficiales segmentadas. Vocería pública 2024-2026 enfocada en formalización vs informalidad de food trucks, seguridad en zonas gastronómicas, agilización de licencias de alcohol.

**Eventos clave de CANIRAC Tijuana documentados:**

- **Bootcamp GastronomIA (enero 2026).** Taller intensivo de IA en gestión restaurantera, **40 marcas representando 203 restaurantes de Tijuana participantes** (Uniradio Baja, 2026). Impartido por Raymundo Ceja González.
- **Capacita Tijuana.** Programa continuo de capacitación con FIDEM, Consejo de Desarrollo de Tijuana y CANIRAC TJ.
- **Calendario mensual de capacitación CANIRAC nacional** con temas como "Marketing digital para restaurantes", "Prepárate para el Mundial controlando tus insumos", "Habilidades profesionales" — modalidad virtual y presencial (CANIRAC, 2024).

**AMR (Asociación Mexicana de Restaurantes).** Difunde análisis de la industria en alianza frecuente con CANIRAC. Posición pública institucionalizada: estandarización de recetas vinculada con **hasta 15% más de rentabilidad** (cifra de RestaurantOwner.com adoptada por AMR como aplicable a MX) y "costo silencioso de la improvisación" como frame del problema (AMR, 2024).

**COPARMEX BC, CANACINTRA, INDEX y CANACO Servytur.** Cámaras empresariales generales con presencia en BC. Algunos restauranteros se afilian para acceso a foros, networking, gestoría con autoridades. Sin tratamiento sectorial específico — el restaurantero es uno de muchos giros que acompañan.

**Asociaciones especializadas.** Provino BC (vinos del Valle, 80+ vinícolas) ya cubierto en sección 4.5. Asociaciones de bartenders, sommeliers, chefs (Vatel Club, Mesa Hispana) tienen presencia pero peso operativo menor para casual independiente.

### 7.4 Distintivos y certificaciones oficiales

- **Distintivo H** (SECTUR + SS). Manejo higiénico de alimentos. Vigencia 1 año, renovación con verificación. Cubre buenas prácticas de higiene, tiempos y temperaturas, limpieza, salud del personal. Adopción más fuerte en hoteles y cadenas que en casual independiente típico (AMR, 2024).
- **Distintivo Moderniza** (SECTUR). Modelo de calidad para competitividad turística MiPyME. Cubre gestión de calidad, administración, servicio al cliente. Vigencia ~2 años con actualización.
- **ServSafe** (National Restaurant Association USA). Certificación de seguridad alimentaria. Adoptada en MX en operaciones con vínculo USA o clientes internacionales — no mainstream en casual independiente local.
- **Certificaciones técnicas obligatorias en BC.** Manejo higiénico (Coepris BC), licencias de alcohol (municipios), capacitación de protección civil (bomberos). Vigencias 1-3 años según municipio.

### 7.5 Reformas laborales 2024-2026 que afectan operación

Cubierto en detalle en sección 3.6 (estructura salarial). Resumen:

- **+13% salario mínimo 2026** — presión sobre coste primario (AbasturHub, 2026; CANIRAC).
- **Vacaciones dignas** vigente 2023: de 6 a 12 días al primer año, escalando a 20.
- **Propinas en salario mínimo** — aprobada en Diputados, pendiente Senado. Si pasa, elimina la práctica de "sueldo simbólico + propinas".
- **Reducción de jornada laboral** en discusión legislativa.

### 7.6 Programas oficiales no-financieros (BC)

Más allá del financiamiento (sección 8), Baja California opera programas estatales y municipales que tocan al restaurantero:

- **Secretaría de Economía Sustentable y Turismo BC.** Programas de capacitación, ferias regionales, distintivos turísticos.
- **Secretaría de Salud BC / Coepris BC.** Cursos obligatorios de manejo de alimentos.
- **Programas municipales TJ / Mexicali / Ensenada.** Promoción turístico-gastronómica, certificaciones locales.

### Implicaciones operativas de la capa institucional

Cuatro lecturas estratégicas que la sección 12 desarrolla:

1. **Zenet no es solución regulatoria, pero facilita cumplimiento.** Datos limpios para auditorías SAT/IMSS, registros de proceso para Distintivo H, evidencia de capacitación. Mensajería: "Zenet te ahorra trabajo en cumplimiento", no "Zenet te certifica".
2. **CANIRAC Tijuana es el touchpoint institucional accionable más concreto** identificado en la investigación. Aguilar Santuario, Nolasco Cruz, Bootcamp GastronomIA con 203 restaurantes participantes — outreach directo es viable.
3. **AMR como voz institucional aliada de la mensajería de estandarización.** "Costo silencioso de la improvisación" es frame que Zenet puede amplificar — la asociación lo dice primero, Zenet lo opera.
4. **Reformas laborales 2026 amplifican la presión que Zenet alivia.** El operador con +13% salario mínimo tiene incentivo más fuerte para optimizar mediante estandarización + control de costos.

La profundidad regulatoria completa vive en `08-entorno-regulatorio.md`.

---

## 8. Capa de financiamiento y capital de trabajo

### Cómo leer la capa de financiamiento

Esta sección mapea las opciones de financiamiento accesibles para restaurantes casual independientes (1-5 sucursales) en MX 2024-2026, con foco en BC cuando aplica. La pregunta no es "¿qué fintechs PYME existen?" — eso está documentado. Lo que necesitamos entender es **qué productos están realmente al alcance de un casual independiente promedio y cómo opera el underwriting**.

La sección culmina con la observación más estratégica del bloque: **el underwriting basado en data operativa es el platform-play moat más concreto identificado** para Zenet (sección 15 lo desarrolla).

### 8.1 La brecha entre oferta nominal y acceso real

El panorama 2024-2026 muestra alta oferta de productos pero acceso restringido. La mayoría de fintechs y bancos anuncian "PYME" pero el underwriting y los costos reales filtran fuerte. En la práctica, lo más accesible y usado para casual independiente termina siendo:

1. **Adelantos sobre ventas** (Clip Capital, Mercado Pago Crédito) — accesibles porque underwriting con data transaccional propia.
2. **Programas oficiales BC y NAFIN** — baratos pero subutilizados por fricción de canal.
3. **Crédito de proveedores** (7-30 días) — informal pero universal.
4. **Crowdfunding gastronómico** — caso especial de aperturas/expansiones.

Lo que **menos** penetra: créditos clásicos de banca tradicional con plazo medio-largo, factoraje específico para HORECA.

### 8.2 Fintechs lending PYME — Konfío como benchmark

**Konfío** es el proxy de cómo evalúan las fintechs PYME no colaterales en MX (Konfío, 2024; Financera, 2024).

**Productos:**

- **Crédito Emprendedor:** $80K-$1M MXN, 12-24 meses.
- **Crédito PyME:** $80K-$2.5M MXN, 12-24 meses.
- **Crédito Empresarial:** hasta $5M MXN, usualmente con garantía hipotecaria.
- **Tarjeta de crédito empresarial** y terminal de cobro.

**Costo real (Financera, 2024; Pagaste, 2024):**

- Tasa nominal anual: 31-44% para PyME y Emprendedor, ~42% para Empresarial.
- CAT promedio: **40-70% sin IVA**, dependiendo de riesgo y uso recurrente.
- Comisión de apertura ~1%, administración ~$250/mes, disposición 3.5-5% por desembolso.

**Underwriting y requisitos:**

- RFC, alta SAT activa, antigüedad mínima del negocio (≥6-12 meses; Emprendedor opera con 3 meses de facturación).
- Estados de cuenta bancarios 3-12 meses para analizar flujo.
- Facturación CFDI o declaraciones SAT.
- Buró de Crédito tanto de la persona física dueña como de la empresa cuando existe.
- Garantías hipotecarias para montos altos.

**Accesibilidad real para casual independiente.** Operador típico de 2-5 años operando, formalizado y con flujo bancario razonable **sí puede pasar underwriting** en montos $300K-$1.5M con plazos 12-24 meses. Pero el costo efectivo alto (40-70% CAT) y la necesidad de buró sano filtran a una gran parte del segmento. Konfío no ofrece producto especializado para restaurantes — es PYME genérico (El CEO, 2024).

**Otros jugadores fintech PYME relevantes en MX:**

- **R2 Capital** — embedded finance vía partners.
- **Aplazo Empresas** — crédito a comercios.
- **Mendel** — tarjetas corporativas y gestión de gastos.
- **Kueski Pay / Business** — crédito a comercios.
- **Bnext, Albo Empresas, Klar Empresas** — cuentas y crédito empresarial.
- **CapitalTech, Fairplay, Camino Financial, Credijusto, Drip Capital** — otros lending B2B mexicanos.

Sin oferta diferenciada para restaurantes en ninguno de los anteriores — todos atienden PYME genérica.

### 8.3 Procesadores con working capital — Clip Capital como benchmark

Esta categoría es la más accesible de facto para restaurantes porque se fondea sobre el flujo POS, usa información transaccional propia y evita muchos requisitos contables tradicionales.

**Clip Capital** ofrece adelantos de efectivo a comercios que ya procesan pagos con su terminal o app (Clip, 2024; Startupeable, 2024).

**Disponibilidad y montos:**

- Solo para comercios con cierta frecuencia y volumen — más de 2 cobros/semana y al menos 3 meses procesando con Clip.
- Montos típicos: desde $10K-$20K hasta varios cientos de miles para comercios de buen volumen.
- No publica tabla detallada — los rangos se infieren de casos de uso.

**Cobro y plazo:**

- Clip descuenta un porcentaje fijo de ventas diarias procesadas (5-50%) hasta cubrir total más comisión.
- Plazo variable: 3-9 meses para restaurantes con ventas estables, dependiendo del descuento aplicado.

**Costo efectivo:**

- Clip no publica CAT en página de producto — usa lenguaje de "comisión fija" deducida del monto solicitado.
- Análisis externos estiman CAT anualizado en **40-80%**, dependiendo de cuánto se descuente cada día y velocidad de pago (Cronista, 2024).
- La opacidad (costo presentado como fee fijo, no tasa) es consistente con la categoría merchant cash advance a nivel global.

**Underwriting:**

- **No requiere estados financieros, garantías, ni historial bancario externo.**
- El filtro principal es el patrón de transacciones con Clip (volumen, recurrencia, devoluciones, contracargos).
- Esto hace que un restaurante casual formal o incluso semiformal que cobre buena parte de su ticket con tarjeta sea **candidato natural**, incluso con buró imperfecto a nivel personal.

**Accesibilidad real.** Es de los pocos productos que un restaurante casual independiente promedio realmente sí ve en su dashboard y sí puede tomar — siempre que haya bancarizado su cobro con Clip. Trade-off: CAT muy alto y opaco a cambio de fricción mínima y fondeo casi automático.

**Mercado Pago Crédito, Conekta Capital, Openpay Capital.** Productos similares con underwriting basado en flujo procesado por la plataforma (Cronista, 2024). Información menos transparente públicamente.

**¿Apps de delivery con productos financieros?** Rappi, Uber Eats y DiDi promueven herramientas para sus restaurantes afiliados pero los productos de capital de trabajo vinculados a comisiones no están claramente documentados en fuentes abiertas (Rappi Merchants, 2024).

### 8.4 Banca de desarrollo — NAFIN "Crédito Ven a Comer"

Pieza clave del ecosistema porque cuando se logra usar, baja drásticamente el costo respecto a fintechs y banca comercial.

**NAFIN "Crédito Ven a Comer"** está diseñado explícitamente para micro y pequeñas empresas restauranteras (Hosteltur, 2024; Tonalá Gob, 2017+).

**Características:**

- Montos desde **$500K hasta $15M MXN** vía intermediarios financieros.
- **Tasas preferenciales 9.5-13% anual** — drásticamente menor que fintechs (40-80% CAT).
- Periodos de gracia de capital hasta 6 meses.
- Sin garantía hipotecaria hasta $2.5M.

**Accesibilidad real (la trampa).** Excelente diseño en papel, baja accesibilidad en práctica:

- **A favor:** producto pro-restaurantes con tasa muy competitiva.
- **En contra:** el restaurante NO tramita directamente con NAFIN — tramita con bancos intermediarios. Si la sucursal bancaria local no promueve activamente Ven a Comer o no entiende el esquema, el dueño nunca lo ve (Rappi Merchants, 2024). Exigen formalidad fiscal completa y documentación de proyecto.

**Crédito empresarial NAFIN general.** Líneas hasta $20M para PYMEs en industria, comercio y servicios incluyendo restaurantes (Indetec Gob, 2024). Mismo patrón: el banco comercial otorga el crédito con respaldo NAFIN, pero la fricción es el banco intermediario.

**Implicación para Zenet.** **NAFIN "Ven a Comer" es feature potencial.** Zenet puede avisar al operador cuándo cumple los requisitos típicos (antigüedad SAT, IMSS al día, monto target, formalidad documental). No es producto Zenet — es valor agregado a costo cero. Diferencial pequeño pero real.

### 8.5 Programas estatales Baja California 2024-2026

El gobierno de BC opera programas vía Secretaría de Economía e Innovación que aplican a restaurantes (El Imparcial, 2026; Gobierno BC, 2025+):

- **Tu Idea, Tu Negocio.**
- **Emprende Tradicional.**
- **Emprende Empresarial.**

**Condiciones declaradas:**

- Créditos desde $10K hasta **$500K MXN**, 36 meses máximo.
- Tasas "accesibles", incluso esquemas de **tasa cero efectiva** para proyectos con pago puntual (El Soberano, 2026).
- En 2025 se canalizaron **$68 millones MXN** vía estos programas, beneficiando giros como restaurantes, hotelería y comercios de alimentos (InfoBaja, 2025).

**Requisitos típicos:** constancia de situación fiscal, comprobante de domicilio, plan de proyecto, evaluación por comité.

**Accesibilidad real.** Los programas son discrecionales por convocatoria — competitiva pero viable para operador con documentación en orden. Para tickets de hasta $500K, es probablemente el producto más barato disponible (Mi Bolsillo, 2026).

**Para tickets >$500K-$1M, el campo regresa a fintechs y banca comercial.**

### 8.6 Banca tradicional, factoraje, crowdfunding (cobertura ligera)

Áreas con menos documentación específica para casual independiente HORECA:

**Banca tradicional (BBVA, Santander, Banorte, Banregio, Bajío, HSBC).** Productos PYME existen pero tienen requisitos más altos que fintechs. **Banregio y Bajío son particularmente activos en BC.** Sin productos diferenciados para HORECA en lo público.

**Factoraje.** Más bien tema de proveedores grandes que venden a cadenas, no del restaurante casual independiente típico (El Financiero, 2024). Mundi, R2 Factoring, Drip Capital operan en MX pero con foco distinto.

**Crowdfunding gastronómico.** **Play Business, Briq, Snowball, M2 Crowd** son plataformas mexicanas de crowdfunding empresarial. Casos públicos documentados de restaurantes que han levantado capital incluyen La Cervecería de Barrio y Mr. Sushi vía Play Business (Bloomberg Línea, 2022). Modelo emergente, no mainstream.

**Modelo "preventas / membresías"** que algunos restaurantes han usado para financiar apertura — caso por caso, sin sistematización.

### 8.7 Underwriting — cómo evalúan y por qué importa para Zenet

Esta es la sección estratégicamente más importante del bloque.

**Datos típicos requeridos** para evaluar crédito a restaurante casual independiente sin estados financieros auditados:

- RFC, constancia de situación fiscal, antigüedad mínima.
- CFDIs de ventas, declaraciones de impuestos (ISR, IVA), opinión de cumplimiento.
- Estados de cuenta bancarios 3-12 meses para flujo y estacionalidad.
- Historial POS (Clip), ventas en apps de delivery, reportes de plataformas de pago en fintechs con underwriting alternativo.
- Para productos formales: registro patronal IMSS, antigüedad de operación, sucursales, permisos.
- Garantías y obligados solidarios para montos altos.

**Buró de Crédito y SIC.** Fintechs PYME consultan tanto buró de la persona física dueña como de la empresa. **Mal historial personal del dueño suele ser razón de rechazo o tasa máxima**, incluso si el restaurante tiene buen flujo. En productos basados en flujo POS (Clip Capital, Mercado Pago Crédito), el buró pesa menos porque el riesgo se mitiga con recobro automático sobre ventas.

**El hallazgo estratégico.** Las fintechs que ya están **rompiendo** el cuello de botella del buró tradicional (Clip, Mercado Pago) lo hacen con **data transaccional propia y limitada** — solo ven procesamiento de pagos. **Zenet tendría data mucho más rica:**

- Recetario formal con costos por plato.
- Inventario teórico vs real con mermas atribuibles.
- Costo real por plato con todas las dimensiones (insumo + prep + logística interna).
- Margen por plato con desglose.
- Comportamiento operativo del proveedor.
- Trazabilidad completa CD-sucursal-producción.

Esto significa: **Zenet puede hacer underwriting con visibilidad de operación completa, no solo de cobros.** Eso es 10x cierto, no aspiracional. Es el platform-play moat más concreto identificado en toda la investigación.

**Implicación para producto Año 1.** Las decisiones técnicas que ya nombró el draft platform play (APIs limpias, schema modular, eventos/observabilidad capturados para data downstream) se justifican desde aquí — no desde Año 5-7. El moat se construye desde día uno aunque la fintech adyacente no se lance hasta Año 4-5.

### 8.8 Voz del operador — citas representativas

CANIRAC y prensa especializada han documentado la postura del segmento:

> *"En 2025 muchos restauranteros han optado por una postura más cautelosa, priorizando mejorar márgenes, fortalecer flujo de efectivo y optimizar la rentabilidad por unidad, en lugar de abrir nuevas sucursales."* — AbasturHub citando CANIRAC, 2026.

> *"Tenemos que estar mucho más preparados, tenemos poco tiempo para esas plantillas que nos faltan tenerlas bien capacitadas. No hay el personal suficiente y adecuado para cubrir todas las plantillas."* — Ignacio Alarcón, presidente CANIRAC nacional, febrero 2026 (El Economista, 2026).

La narrativa 2024-2026 conecta **costos crecientes (laboral, insumos)** con **necesidad de eficiencia operativa** y **acceso a capital de trabajo** como tres ejes inseparables del segmento.

### Implicaciones operativas de la capa de financiamiento

Cuatro lecturas que la sección 12 desarrolla:

1. **Underwriting con data operativa = platform-play moat dimensionado y empíricamente respaldado.** Las fintechs que rompen el cuello de botella usan data transaccional limitada. Zenet tendría data 10x más rica. **Decisiones técnicas Año 1 se justifican desde aquí**, no solo desde Año 5-7.
2. **NAFIN "Ven a Comer" como feature de valor agregado.** Aviso automatizado cuándo el operador cumple requisitos. Costo cero, diferencial pequeño pero real.
3. **Programas BC son palanca local concreta** para apertura/expansión. Marketing puede señalar el camino sin convertirse en agente financiero.
4. **El segmento que paga Zenet ≈ segmento bancarizable.** Casual independiente formal con flujo bancarizado — el ~30% del universo del sector que opera en formalidad. No diseñar Zenet para informales.

---

## 9. Capa de talento, formación y consultoría

### Cómo leer la capa de talento

Esta sección mapea de dónde sale el talento operativo del restaurante casual independiente, qué formación reciben, y qué consultores activos venden el problem-set que Zenet automatiza. La pregunta central no es "¿dónde se enseña a cocinar?" — está saturado. Es **¿dónde se forma el talento operativo (gerentes, encargados de compras, costeadores, administradores) y quiénes son los consultores que venden estandarización y operación como servicio?**

La sección conecta con la sección 3 (mapa de roles internos) — el cook shortage cuantificado vive ahí; aquí se cubre el lado de formación y consultoría.

### 9.1 Escuelas de gastronomía nacionales

Para entender de dónde viene el talento operativo del segmento, vale distinguir entre escuelas que producen **chefs** vs escuelas que producen **gerentes operativos**.

**CESSA Universidad (CDMX)** es **la única licenciatura mexicana claramente operativa** — su carrera de Administración de Restaurantes está diseñada explícitamente para formar al "restaurateur" que conjuga operación y administración de A&B, no solo cocina (Estudia MX, 2024; Borradopedia, 2024). Diplomado en Restaurant Management (en línea) con módulos de ingeniería de menú, estandarización y costeo, administración financiera, administración de personal, mercadotecnia restaurantera y servicio (CESSA, 2024).

**Otras escuelas con énfasis en chef y bloque administrativo limitado:**

- Centro Culinario Ambrosía
- Colegio Superior de Gastronomía
- ICUM
- Le Cordon Bleu México
- Universidad del Claustro de Sor Juana
- Universidad Anáhuac (Gastronomía y Turismo)
- UVM (Gastronomía)
- Tec de Monterrey (Gestión Restaurantera)

**Universidad Anáhuac (Mérida)** ofrece un Diplomado en Gestión de Negocios de Alimentos y Bebidas con módulos de control de costos, liderazgo, marketing gastronómico y herramientas digitales — **incluye uso de SoftRestaurant explícitamente en el módulo digital** (Anáhuac Mérida, 2024). Es señal de que SoftRestaurant es estándar de facto en formación restaurantera mexicana, no solo en operación.

**Egresados anuales:** no publicados por ninguna escuela. La mayoría de las licenciaturas siguen centradas en cocina con bloque administrativo limitado; la formación operativa profunda ocurre más en diplomados y educación continua que en licenciatura.

### 9.2 Formación en Tijuana / Baja California

**Culinary Art School Tijuana (CAS).** Centro de estudios superiores con Licenciatura en Arte Culinario (3 años, 6 semestres), 60-70% práctica y 30-40% teoría. El plan combina cocina con bloque económico-administrativo: matemáticas culinarias, contabilidad, administración, gerencia de servicio (Culinary Art School Tijuana, 2024). Egresados anuales no publicados, pero por modelo de centro especializado se infieren decenas por generación.

**CETYS Universidad — Educon.** No tiene licenciatura en gastronomía, pero ofrece **Diplomado en Administración de Restaurantes y Bares (en línea)** dirigido a propietarios y gerentes activos (CETYS, 2024). **Es la pieza más cercana a un bootcamp de gerente operativo accesible localmente en BC.**

**UABC, CESUN, Universidad Xochicalco, IBERO Tijuana.** No tienen carreras de gastronomía como tal; sus programas relacionados (turismo, administración de empresas turísticas, hospitalidad) sirven más como pipeline de gerentes hoteleros que de cocineros o gerentes restauranteros.

**Cursos técnicos cortos en BC.** Constelación dispersa: barismo, sommelería, manejo higiénico, Distintivo H, capacitación de protección civil. Costos típicos de unos pocos miles de pesos por curso de 10-40 horas — sin centralización pública (EMCEBAR, 2024).

### 9.3 Formación operativa NO-cocina (zona Zenet)

Donde Zenet vive — el pipeline del gerente operativo, el contralor de costos, el encargado de compras.

**Tres vías principales en MX:**

1. **Licenciaturas con foco en A&B operativo.**
   - CESSA (Administración de Restaurantes) — fuerte componente de operación, finanzas, costos, personal y marketing.
   - Anáhuac, varias privadas — administración de empresas con énfasis en turismo y A&B.

2. **Diplomados y cursos de administración restaurantera.**
   - **CESSA Restaurant Management** (online) — módulos de ingeniería de menú, estandarización, costeo, administración financiera, personal, mercadotecnia (CESSA, 2024).
   - **CETYS Educon Diplomado en Administración de Restaurantes y Bares** (online, BC) — operación de restaurantes con énfasis en producción y servicio.
   - **Anáhuac Mérida Diplomado en Gestión de Negocios de A&B** — incluye SoftRestaurant en módulo digital.

3. **Cursos cortos de consultoras especializadas.**
   - **Grupo Klee Capacitación.** 20+ años de programas para industria restaurantera en MX. Cursos de "Estandarización, costeo y conversión de recetas", "Administración restaurantera", "Elaboración y diseño de menús", manejo de clientes difíciles, asesoría legal/laboral (Grupo Klee, 2024).
   - **EMCEBAR (Escuela Mexicana de Capacitación Empresarial de Bares y Restaurantes).** Cursos para emprendedores, dueños y gerentes en costeo de menú, administración, capacitación de personal (EMCEBAR, 2024).

**Encargados de compras / contralores de costos.** No hay carrera formal en MX. Los perfiles se forman por combinación de licenciaturas genéricas (contabilidad, administración), experiencia in situ y cursos cortos en costeo, inventarios y software (Factorial MX, 2024).

**Brecha formación ↔ campo.** Las escuelas mexicanas **enseñan estandarización como estándar profesional** desde licenciatura. El Distintivo H **exige** procedimientos estandarizados. La práctica de campo está lejos. Esa brecha es exactamente la zona donde Zenet entra (ya documentado en sección 2.5).

### 9.4 Certificaciones cortas

Cubierto en sección 7.4. Resumen aquí:

- **Distintivo H** (manejo higiénico) — requiere capacitación, vigencia 1 año.
- **Distintivo Moderniza** (calidad turística) — vigencia ~2 años.
- **ServSafe** — adopción en operaciones con vínculo USA, no mainstream local.
- **Certificaciones técnicas BC** (sanidad municipal, alcohol, prevención incendios) — vigencias 1-3 años por municipio.

### 9.5 Plataformas online y comunidad de consultoría digital

- **Crehana, Domestika, Coursera, Platzi.** Cursos genéricos de administración, finanzas, gestión de inventarios, liderazgo aplicables a operadores de restaurantes pero no etiquetados como "gastronomía" (Factorial MX, 2024).
- **Canales YouTube de consultoría con audiencia activa.** Marketing para Restaurantes, EMCEBAR Revista, Tiendana, Plan Financiero (episodios sobre pricing) — funcionan como **escuelas informales** combinando contenido educativo, plantillas descargables y comunidad WhatsApp/redes (sección 10 lo desarrolla).
- **Comunidades cerradas** (FB grupos, WhatsApp, Slack) ligadas a consultoras o academias digitales.

### 9.6 Consultoras gastronómicas activas en MX (sección crítica)

Aquí el problem-set de Zenet se cruza directo con un mercado de servicio que ya existe. Las consultoras activas venden lo que Zenet automatiza — son **competidor educativo y canal natural simultáneamente**.

**Firmas con producto explícitamente alineado a Zenet:**

| Firma | Producto declarado | Cobertura |
|---|---|---|
| **Grupo Klee** | Estandarización, costeo y conversión de recetas · Administración restaurantera · Elaboración y diseño de menús | Nacional, 20+ años |
| **EMCEBAR** | Costeo de menú · Administración para emprendedores y dueños | Nacional |
| **Fatfish Consultores** | Diseño y ajuste de conceptos · Mejora de rentabilidad y procesos | Nacional |
| **GCC Sistemas California** | Manuales · Procesos · Costeo · Desarrollo de menú · Capacitación operativa | Nacional |
| **SYCA Consultores** | Distribuidor SoftRestaurant + consultoría + capacitación + implementación | Tijuana / BC |

**Consultores individuales validados en campo** (business context, 2026):

- **Anna Palazuelos.** Consultora, autora de "Recetas para el éxito", supervisó 27 restaurantes Moshi Moshi y 16 Giornale. Articuladora de la secuencia Estandarización → Inventario → Interpretación de costo en distilación de 3 momentos.
- **Victor Murguia.** Consultor gastronómico (Mexicali), experiencia internacional. Validó solución, valor y precio Zenet en abril 2026. Acuñó el posicionamiento "DeepSeek of restaurant industry".
- **Algira Garzón.** Consultora OD. Validó problema cultural de estandarización como ventaja competitiva.
- **Carlos Sánchez.** A&B Manager con 18 años de experiencia. Validó profundidad del problema y dolor del segmento.

**Mercado de consultoría operativa restaurantera MX.** Sin estudio público que cuantifique tamaño. Señales indirectas (FoodShot, 2024):

- Industria QSR MX superó $12.6B USD en 2025 con CAGR ~8.1%.
- Tarifas referenciales globales calibrables a MX:
  - Por hora: USD 75-300.
  - Por proyecto: USD 2K-25K.
  - Retainer mensual: USD 1.5K-5K.
  - Ingeniería de menú restaurante pequeño: USD 2K-5K.
  - Paquete preapertura completo: USD 15K-25K+.

**Modelos de servicio típicos:**

- Diagnóstico inicial (auditoría operativa, revisión de menú, costos, SOP).
- Proyecto con entregables (manuales, recetarios, ingeniería de menú, layout cocina).
- Acompañamiento por meses (coaching, seguimiento de KPIs, ajustes).
- Interim management (gerente operativo temporal en reaperturas).

### 9.7 Cook shortage como presión amplificadora

Cuantificado en sección 3.7. Resumen del impacto sobre la formación:

- Déficit de 500K trabajadores en sector restaurantero MX (CANIRAC vía El Economista, 2026).
- 75% de cocineros abandona antes de 5 meses; solo 20% de ayudantes generales permanece después de 6 meses.
- 8 de cada 10 restaurantes operan con plantillas incompletas.
- Frontera norte (TJ, Mexicali, Cd. Juárez) intensifica el problema por migración a USA.

**Implicación cruzada con formación.** Las escuelas locales (CAS, programas técnicos) no alcanzan a cubrir la demanda. La estandarización se promueve precisamente como herramienta para reducir dependencia de cocineros estrella y permitir que brigadas menos experientes operen consistentemente — punto explícito de Grupo Klee, EMCEBAR y canales de consultoría digital (Ciencialatina, 2024; Smart Kitchen Solutions, 2026).

### 9.8 Voz del consultor y del operador

La narrativa 2024-2026 conecta tres ejes:

> *"El principal problema de los restaurantes independientes es la falta de información financiera básica, el control pobre de costos y la ausencia de manuales y SOP."* — Síntesis de canales de consultoría digital MX, 2026.

> *"Solo ~10% de establecimientos usan herramientas digitales completas de gestión y 80% de emprendimientos gastronómicos están en riesgo de cerrar en sus primeros 2 años."* — Canal de consultoría restaurantera, 2026 [caveat: fuente comercial, no estudio académico].

Estas cifras son citables con la etiqueta correcta de fuente y conectan con la cifra del UABC (61% fracaso en 3 años) y la de Murguia (vida promedio 7 años) — los tres anclajes pintan la misma curva de mortalidad del segmento.

### Implicaciones operativas de la capa de talento

Cuatro lecturas que la sección 12 desarrolla:

1. **Consultoras: doble lectura competidor / partner.** Especialmente Grupo Klee, GCC y SYCA Tijuana. Modelo posicional Zenet: **"hacemos continuo lo que el consultor hace puntual."**
2. **CETYS Educon como touchpoint formativo en TJ.** Posible partnership educativo (caso de estudio en diplomado, módulo digital con Zenet como Anáhuac hace con SoftRestaurant). Outreach concreto.
3. **SYCA Tijuana como apuesta de canal local doble.** Si Zenet logra partnership con National Soft, SYCA es ejecutor local lógico. Si no, SYCA es competidor adyacente que ofrece "implementación + consultoría" en TJ. Ambos escenarios requieren contacto.
4. **Tarifas de consultoría dimensionan costo del status quo.** El operador casual independiente que NO contrata consultor pierde más dinero por mala estandarización que el costo de Zenet. Mensaje: **"Zenet es la fracción del costo de un consultor, con ejecución continua y memoria institucional."**

Anchors de campo identificados (sección 14 los desarrolla como hipótesis de canal):

- Anna Palazuelos, Victor Murguia, Algira Garzón, Carlos Sánchez como red de consultores validados que pueden referir o respaldar Zenet.
- CETYS Educon como partner educativo potencial.
- Grupo Klee como referencia nacional en formación operativa.

---

## 10. Capa de medios, comunidad y eventos

### Cómo leer la capa de medios

Esta sección mapea dónde se forma audiencia de operadores, dónde se publican análisis sectoriales B2B, qué eventos juntan a operadores con proveedores y consultores, y qué comunidades cerradas existen en español para el segmento. La distinción crítica es **B2B operador vs B2C foodie** — son ecosistemas paralelos con muy poco solapamiento.

Cubrir esta capa importa para Zenet por tres razones:

- Define dónde mostrarse para hablar con operadores reales (no comensales).
- Identifica creadores y comunidades que pueden volverse partners de contenido.
- Mapea eventos donde Zenet puede tener presencia (visitante, expositor, ponente).

### 10.1 La distinción B2B operador vs B2C foodie

Antes de listar actores, conviene anclar la diferencia.

**B2C foodie (no es zona Zenet).** Animal Gourmet, Food & Wine MX, Travesías Gastronómicas, Reforma Buena Mesa. Audiencia primaria: comensales que buscan dónde comer, qué probar, qué chef seguir. Operadores los leen como prensa de referencia, pero no son medio operativo. Útiles para Zenet solo como termómetro cultural — qué restaurantes son visibles, qué tendencias gastronómicas están en discurso.

**B2B operador (zona Zenet).** Newsletters, podcasts, canales y publicaciones dirigidos a dueños, gerentes, chefs ejecutivos y administradores. Foco en operación, costos, gestión, tecnología, expansión, regulación. Mucho menos denso que el ecosistema foodie en español, pero existe — solo está fragmentado y disperso.

**Patrón general.** El ecosistema B2B operador en español es **menos hegemónico que el anglosajón**. No existe en español un equivalente claro a "Restaurant Unstoppable" o "Restaurant Strategy" (referentes USA con miles de episodios y comunidad mastermind robusta). Hay nodos medianos dispersos en MX y LATAM, sin un líder de categoría.

### 10.2 Podcasts B2B operador en español

Dos shows visibles con tracción en LATAM:

**Restaurantes Exitosos (antes Restocast) — Germán Debonis.** Podcast en español sobre operación, marketing, management, liderazgo y gastronomía innovadora dirigido a empresarios, emprendedores, chefs ejecutivos y gerentes (Apple Podcasts, 2024). Publicación semanal. Espíritu cercano a Restaurant Strategy o The Restaurant Boss en USA — procesos, liderazgo, marketing y rentabilidad.

**El Podcast de Marketing para Restaurantes (MPR).** "100% dedicado al marketing para restaurantes donde entrevistamos a emprendedores del sector" (Amazon Music, 2024). Plataformas: Amazon Music, YouTube, otras. Más de 200 episodios con entregas activas 2024-2026. Contenido de casos prácticos, metodología de estandarización RED (Registrar, Establecer, Duplicar), procesos y sistemas operativos. Comunidad activa en WhatsApp y librería propia.

**Podcasts más pequeños o adyacentes.** Plan Financiero (canal de finanzas con episodios para restaurantes — pricing, KPIs, metas financieras), webinars de proveedores tecnológicos (Tiendana). Sin alcance comparable a los dos principales.

**Implicación para Zenet.** Restaurantes Exitosos y MPR son los **dos partnerships de contenido más obvios** identificados. Auspicio, episodio especial sobre estandarización con casos Zenet, o promoción cruzada son rutas con baja fricción. Outreach concreto en sección 14.

### 10.3 YouTube B2B — escuelas informales

Canales que combinan contenido educativo, plantillas descargables y comunidad — funcionan como escuelas informales del segmento.

- **Marketing para Restaurantes (MPR)** en YouTube. Videos como "Sistema de Costeo COMPLETO para Restaurantes" con cálculo de costo real de platillos, ingeniería de menú, métricas y rentabilidad. Frecuencia regular 2024-2026.
- **EMCEBAR Revista** en YouTube. Videos de "Cómo calcular el costo de la comida — Revista EMCEBAR" enfocados en costos, rentabilidad, variables de food cost.
- **Plan Financiero.** No es solo restaurantero, pero episodios concretos como "Cómo PONER PRECIOS en un Restaurante" cubren cálculo de precio por hora, armado de menú, análisis de competencia.
- **Tiendana / webinars de Víctor Abril.** "Aprende a digitalizar tu restaurante" sobre ingeniería de menú, métricas, rentabilidad desde la operación diaria.

Estos canales sirven como **complemento educativo de las consultoras** — el operador los consume gratis y los acompaña con cursos pagados o consultoría puntual cuando escala.

### 10.4 Newsletters y publicaciones B2B

**Institucionales y cámaras.**

- **CANIRAC nacional — Boletín informativo.** PDFs periódicos descargables sobre normativa, programas y noticias sectoriales (CANIRAC, 2024). Audiencia: dueños y administradores afiliados.
- **CANIRAC capítulos estatales.** Boletines regionales (Michoacán, Jalisco, otros) con foco en programas y gestiones locales ante gobierno (CANIRAC Michoacán, 2025; CANIRAC Jalisco, 2024).
- **AMR.** Sitio de noticias con análisis de la industria y proyecciones de crecimiento, en alianza frecuente con CANIRAC.

**SaaS y proveedores.**

- **Parrot Software blog.** Artículos para dueños y gerentes: digitalización, POS, control financiero, tendencias QSR.
- **RAY blog.** Comparativas de plataformas de reservas para restaurantes en LATAM.
- **Justo / Reservando.com.** Notas sobre digitalización y reservas, audiencia gerencial.

**Portales sectoriales.**

- **AbasturHub.** Portal asociado a la feria ABASTUR con notas sobre proveedores, tendencias y datos de la industria (AbasturHub, 2024-2026).
- **Restaurant Es / Exporrestaurantes.** Publicación tipo revista vinculada con EXPORESTAURANTES (Scribd, 2024).
- **Modelos de Plan de Negocios.** Análisis del mercado restaurantero MX para emprendedores y operadores (Modelos de Plan de Negocios, 2024).

**Modelo a observar — Residente.mx (Monterrey).** Medio que se presenta como "autoridad en periodismo gastronómico y restaurantero de Monterrey" con sección B2B explícita dirigida a restauranteros (Residente.mx, 2024). Es ejemplo de qué podría existir en BC pero **no existe equivalente identificado**.

**GAP estratégico.** No se identificó en BC un medio B2B restaurantero con sección dedicada equivalente a Residente.mx en Monterrey. La cobertura local (Frontera, Zeta, El Sol de Tijuana) tiende a ser foodie/turística, con impacto indirecto en operadores. Es **espacio editorial vacío** para Zenet, especialmente cuando se quiera generar contenido propio sobre operación restaurantera en BC.

### 10.5 LinkedIn, Instagram, TikTok B2B

Patrones observables sin métricas precisas en cada cuenta:

- **Marketing para Restaurantes (MPR)** tiene presencia multicanal (web, YouTube, Instagram, TikTok) con handles tipo "marketing_para_restaurantes_" y "mktgpararestaurantes". Contenido replica la línea B2B: tips, plantillas, invitaciones a webinars y comunidad. Audiencia inferida de decenas de miles cruzando todas las plataformas.
- **Parrot Software, RAY, Justo** amplifican blog vía redes con orientación B2B operador.
- **Cuentas de consultoras** (Grupo Klee, EMCEBAR, GCC) con presencia activa en redes sociales como amplificación de cursos y casos.

**Escala limitada.** En el segmento B2B operador específico, las cuentas con audiencia masiva (50K+ seguidores) son raras. Los grandes volúmenes en redes (>100K) tienden a ser **B2C foodie** (críticos, recomendadores), no B2B operativo. **El "influencer B2B operador gastronómico" a escala masiva todavía es relativamente raro en español.**

### 10.6 Comunidades cerradas (FB, WhatsApp, Slack)

Las comunidades B2B restauranteras son intensivas en Facebook y WhatsApp, pero opacas (contenido no indexable públicamente).

- **Comunidad MPR (WhatsApp).** Promovida activamente desde sus videos y podcast — comunidad de operadores compartiendo dudas, plantillas, resultados. Tamaño no público pero infiere varios cientos a miles de miembros activos.
- **Grupos de Diplomado Grupo Klee (Facebook).** Comunidades cerradas de alumnos y exalumnos del Diplomado en Administración y Operación de Restaurantes. Dinámica típica: cada generación con grupo dedicado.
- **CANIRAC y cámaras estatales.** Sin grupos públicos identificados, pero la estructura de afiliación implica canales cerrados de comunicación a nivel estatal y nacional.

**No hay "Dueños de Restaurantes México 10K miembros"** público fácilmente identificable. La cartografía fina de grupos cerrados requiere búsqueda manual dentro de las plataformas (FB groups search, WhatsApp groups por invitación) más que desk research.

**Específico Tijuana / BC.** No se identificó grupo cerrado de alto perfil exclusivo para operadores BC en información indexada pública. Si existe, opera dentro del ecosistema local y cerrado. Field research necesario.

### 10.7 Eventos B2B HORECA en MX

**ABASTUR — el evento líder nacional.**

- **Edición 2026:** 26-28 de agosto, Centro Citibanamex, CDMX (ABASTUR, 2024).
- **Edición 2025:** más de 600 expositores nacionales e internacionales, 19,600 compradores calificados, 30,000 m² de piso de exposición totalmente vendido (ABASTUR, 2025).
- **Organizador:** E.J. Krause de México en alianza con CANIRAC. 40 años como exposición líder HORECA en LATAM (Mexico Hospitality Expo, 2024).
- **Perfil del asistente:** profesionales de hoteles, restaurantes independientes y cadenas, cafeterías, banquetes y catering.
- **Costo de stand:** **~€463/m² + IVA** para edición 2026 — equivalente a **~$85,000-$120,000 MXN** para módulo básico de 9-12 m² (ICEX, 2025).
- **Conferencias y agenda:** programa con foco en transformación digital, sostenibilidad y preparación para Mundial 2026. OpenTable y CANIRAC han presentado en piso (Fast Company, 2025).
- **Casos de SaaS B2B con presencia documentada:** OpenTable promocionando OpenTable Pro y asistente de IA, Wansoft POS con presencia en redes (Instagram Wansoft, 2025). **Sin casos públicos de ROI cuantificado por proveedores tecnológicos.**

**México Hospitality Expo.** 6-8 octubre 2026, Expo Guadalajara. Evento especializado para fabricantes, distribuidores, cadenas hoteleras, restaurantes y cafeterías. Incluye programa "The Horeca Hub" con conferencias de proveedores tecnológicos (Mexico Hospitality Expo, 2024). **Alternativa a ABASTUR con menor saturación.**

**ANTAD & Alimentaria.** 19-21 mayo 2026, Expo Guadalajara. Feria de 55,000 m² con 1,800 expositores y 45,000-50,000 visitantes profesionales (Xnova International, 2024). **Relevancia media-baja para casual independiente** — enfoque en cadenas de suministro y retail masivo, no operadores pequeños.

**Eventos verticales.** Expo Café (13-15 marzo, Guadalajara), ExpHotel (Puerto Vallarta y Cancún) — relevancia limitada para casual independiente full-service. Útiles solo si el concepto del operador entra en su vertical específico.

**Festivales gastronómicos descartados como B2B.** Mesamerica, Morelia en Boca, Sabor a Cabo son festivales foodie sin agenda B2B paralela documentada. **No relevantes para Zenet** salvo como termómetro cultural.

### 10.8 Eventos en Baja California — pieza crítica local

**Eventos CANIRAC Tijuana** (la pieza más concreta del bloque local):

- **Bootcamp GastronomIA (enero 2026).** Taller intensivo sobre uso de IA en gestión restaurantera. **40 marcas representando 203 restaurantes de Tijuana participantes.** Impartido por Raymundo Ceja González. Foco en optimización operativa, reducción de costos, marketing digital con IA (Uniradio Baja, 2026).
- **Capacita Tijuana — Formación Integral para Restaurantes.** Programa de capacitación continua (liderazgo, seguridad, calidad de servicio) impulsado por FIDEM, Consejo de Desarrollo de Tijuana y CANIRAC TJ. Periodicidad bimensual/trimestral (San Diego Red, 2026).

**Eventos Valle de Guadalupe (Vendimias).**

- **Muestra del Vino y Mar (agosto).** 84 vinícolas, 160+ etiquetas, 20+ productores de mariscos, 50+ restaurantes (Wine Eat and Travel, 2025). **Mixto B2B/foodie** — operadores asisten para networking con proveedores de vino y mariscos, pero el evento es también destino foodie.
- **Tianguis del Valle, Cenas de Gala en Vinícolas.** Más bien B2C con componente cultural — networking informal entre operadores, pero sin agenda B2B estructurada (Wine Eat and Travel, 2025; MB Marco Beteta, 2025).

**Provino BC / Cluster de Vinos.** Calendario anual de eventos de vendimias **dirigidos a consumidores**, no a operadores B2B (Provino BC, 2024). **Sin congresos B2B específicos para restauranteros identificados.**

**Eventos cross-border SD ↔ TJ.** No identificados en cobertura HORECA específica para 2024-2026. **Espacio vacío** que Zenet podría eventualmente patrocinar/crear.

**Eventos descartados o poco relevantes para BC HORECA:**

- Baja Culinary Fest (Scottsdale, Arizona — no relevante para BC).
- Baja Culinary Expedition / Baja Culinary Week — turismo gastronómico premium, no B2B.

### Implicaciones operativas de la capa de medios

Cuatro lecturas que la sección 12 desarrolla:

1. **Restaurantes Exitosos y MPR como partnerships de contenido prioritarios.** Outreach concreto para auspicios, episodios especiales o promoción cruzada. Bajo fricción, alta señal.
2. **CANIRAC Tijuana como plataforma de capacitación accesible.** Bootcamp GastronomIA con 203 restaurantes participantes confirma audiencia movilizable. Posibles formatos: Zenet patrocina capacitación, ofrece módulo de contenido sobre estandarización, presenta caso de uso.
3. **Espacio editorial B2B BC vacío** — Tijuana no tiene equivalente a Residente.mx Monterrey. Oportunidad para Zenet de crear newsletter, podcast o contenido editorial regional sin competidor.
4. **ABASTUR como evento prioritario nacional, México Hospitality Expo como alternativa.** Costo de stand alto en ABASTUR ($85K-$120K MXN módulo básico) — recomendación: **visitar antes de exponer** para validar perfil de asistentes BC y oportunidades reales para SaaS B2B.

La sección 14 desarrolla las hipótesis de canal con outreach concreto a partir de estos touchpoints.

---

## 11. Mapa visual del ecosistema

### Cómo leer este mapa

Esta sección consolida en un diagrama ASCII el ecosistema descrito en las secciones 2-10, mostrando dónde se ubica el grupo restaurantero (con la variante de centro de distribución), qué capas lo rodean, y dónde Zenet se posiciona. **Es la versión textual; el FigJam o Figma con detalle visual se construirá después** una vez que el contenido esté validado.

El mapa no busca exhaustividad — busca ortografía estratégica: ver de un vistazo dónde toca cada capa y dónde aparece Zenet como categoría nueva.

### Diagrama del ecosistema

```
                    ╔═══════════════════════════════════════════════╗
                    ║   CAPA INSTITUCIONAL Y REGULATORIA            ║
                    ║                                               ║
                    ║   CANIRAC nacional · CANIRAC TJ (Aguilar)     ║
                    ║   AMR · COPARMEX BC · CANACINTRA              ║
                    ║   SAT · COFEPRIS · IMSS · PROFECO · STPS      ║
                    ║   Distintivos H · Moderniza · ServSafe        ║
                    ║   Programas BC: Tu Idea · Emprende            ║
                    ╚════════════════════╤══════════════════════════╝
                                         │
┌───────────────────┐         ┌──────────┴─────────────────┐         ┌───────────────────┐
│   UPSTREAM        │         │   GRUPO RESTAURANTERO       │         │   DOWNSTREAM      │
│                   │         │                            │         │                   │
│ Mercados mayor.   │         │  ┌──────────────────────┐  │         │  Rappi (110 ciud.)│
│  Mdo Abastos TJ   │         │  │ CD interno (variante)│  │         │  DiDi Food        │
│  Central Benítez  │         │  │  · Compras consol.   │  │         │  Uber Eats        │
│  Mdo Negro Ens.   │         │  │  · Prep batch        │  │         │   (los 3 en TJ)   │
│                   │         │  │  · Función admin.    │  │         │                   │
│ Distribuidores    │  ────→  │  └──────────┬───────────┘  │  ────→  │  WhatsApp Business│
│  ★ La Canasta     │         │             │              │         │  Apps propias     │
│    Ochoa          │         │             ↓              │         │                   │
│    Sysco/Pacific  │         │  ┌──────────────────────┐  │         │  Dark kitchens    │
│                   │         │  │   Sucursal 1-N       │  │         │   (presencia BC) │
│ Cash & carry      │         │  │   Cocina · Inventario│  │         │                   │
│  Smart & Final    │         │  │   POS · Servicio     │  │         │                   │
│   (8 en TJ)       │         │  └──────────────────────┘  │         │                   │
│  Costco · Sam's   │         │                            │         │                   │
│                   │         │       ◆ ZENET aquí         │         │                   │
│ Productores Valle │         │       Fases F1 → F4        │         │                   │
│  Vinos (Provino,  │         │                            │         │                   │
│   80+ vinícolas)  │         │                            │         │                   │
│  Quesos Ramonetti │         │                            │         │                   │
│  Microgreens TJ   │         │                            │         │                   │
│  Cooperativas mar │         │                            │         │                   │
│                   │         │                            │         │                   │
│ Cross-border      │         │                            │         │                   │
│  SD ↔ TJ          │         │                            │         │                   │
└───────────────────┘         └──────────────┬─────────────┘         └───────────────────┘
                                             │
                    ╔════════════════════════╧═══════════════════════╗
                    ║   CAPA SOFTWARE                                ║
                    ║                                                ║
                    ║   POS (Soft Restaurant — dominante MX,         ║
                    ║         Loyverse, Square, MyBusiness, SICAR)   ║
                    ║   PayFacs (Clip, Mercado Pago — ~80% terminal) ║
                    ║   Integradores delivery (Deliverect)           ║
                    ║   Contabilidad externa (CONTPAQi, Aspel, Bind) ║
                    ║   HR / nómina (Worky, Runa, Buk)               ║
                    ║                                                ║
                    ║   ◆ ZENET = operating system BoH cognitivo     ║
                    ║     (categoría nueva en MX/LATAM, sin          ║
                    ║      competidor directo identificado)          ║
                    ╚════════════════════════════════════════════════╝


           CAPAS DE APOYO PARALELAS (no operativas, sí relevantes)
  ┌───────────────────┬──────────────────────┬─────────────────────────┐
  │  FINANCIAMIENTO   │  TALENTO/FORMACIÓN   │  MEDIOS Y COMUNIDAD     │
  ├───────────────────┼──────────────────────┼─────────────────────────┤
  │ Konfío            │ CESSA Univ. (CDMX)   │ Podcasts B2B:           │
  │  (CAT 40-70%)     │ CAS Tijuana (cocina) │   Restaurantes Exitosos │
  │                   │ CETYS Educon (BC)    │   MPR (Mkt Restaurantes)│
  │ Clip Capital      │  - Diplomado online  │                         │
  │  (CAT 40-80%,     │  - Admin de restaur. │ YouTube B2B:            │
  │   más accesible)  │                      │   EMCEBAR Revista       │
  │ Mercado Pago      │ Consultoras:         │   Plan Financiero       │
  │  Crédito          │   Grupo Klee         │                         │
  │                   │   EMCEBAR            │ Eventos B2B:            │
  │ NAFIN "Ven a      │   Fatfish · GCC      │   ABASTUR (líder, ago)  │
  │  Comer"           │   ★ SYCA Tijuana     │   Mex. Hospitality Expo │
  │  (9.5-13% anual,  │                      │   Bootcamp GastronomIA  │
  │   subutilizado)   │ Validados campo:     │    (CANIRAC TJ, 203     │
  │                   │   Anna Palazuelos    │     restaurantes)       │
  │ Programas BC      │   Victor Murguia     │   Vendimias Valle       │
  │  Tu Idea·Emprende │   Algira Garzón      │    (mixto B2B/foodie)   │
  │  ($68M en 2025)   │   Carlos Sánchez     │                         │
  │                   │                      │ GAP: sin medio B2B BC   │
  │ Crowdfunding:     │                      │  equivalente a          │
  │  Play Business    │                      │  Residente.mx (MTY)     │
  └───────────────────┴──────────────────────┴─────────────────────────┘
```

### Leyenda

- **★** = apuesta de canal #1 identificada en investigación.
- **◆** = posición de Zenet en el ecosistema.
- **CD** = centro de distribución (variante estructural opcional para grupos 3-5 sucursales — ver sección 2.10).
- **F1 → F4** = secuencia de fases Zenet:
  - F1 Estandarización
  - F2 Inventario
  - F3 Distribuciones y proveedores
  - F4 Interpretación de costos

### Cómo se usa este mapa

**Para conversaciones de venta.** Permite ubicar al prospecto en el ecosistema antes de la conversación. Si el operador tiene CD, partir de la sección 2.10. Si tiene 1 sucursal sin CD, partir del flujo lineal de eslabones.

**Para conversaciones con inversionistas.** El cuadro de "CAPA SOFTWARE" hace explícito el insight de validación de categoría: Zenet no se ubica entre los POS, ni entre los integradores, ni entre los inventarios — está en una capa nueva nombrada como "operating system BoH cognitivo" sin competidor directo identificado en MX/LATAM.

**Para roadmap de producto.** Los flujos de upstream y downstream que cruzan al grupo restaurantero (con CD opcional) muestran qué data tiene que ingerir Zenet desde el día uno. Las capas paralelas (financiamiento, talento, medios) muestran zonas adyacentes para platform play (sección 15).

### Pendiente — versión visual

Cuando este documento llegue a `status: active` (después de validación final del Bloque E), proponemos producir una versión visual del mapa en FigJam o Figma con:

- Iconografía consistente con el design system Zenet (cuando se finalice — ver `Branding/_context/05-design-system/`).
- Diferenciación visual entre **capas operativas** (upstream / restaurante / downstream / software), **capa institucional** (encima), y **capas de apoyo** (debajo).
- Anotación de Zenet en el centro con las 4 fases.
- Marcado de actores con asterisco como apuestas de canal con código de color.
- Flechas de retroalimentación entre capas (especialmente Fase 4 análisis → Fase 1 estandarización del día siguiente).

La versión ASCII actual sirve como esqueleto y referencia textual del diagrama final.

---

## 12. Implicaciones por capa

### Cómo leer esta sección

Cada una de las capas del ecosistema (secciones 4-10) cerró con una sub-sección de "implicaciones operativas". Esta sección **eleva esas implicaciones** a tres niveles:

1. **Patrones que cruzan capas** — observaciones transversales que no aparecen al mirar capa por capa.
2. **Tabla de relación Zenet ↔ ecosistema** — dónde Zenet integra, compite parcialmente, es agnóstico, busca canal o vigila cambios.
3. **Apuestas estratégicas centrales** — cinco apuestas concretas que el equipo Zenet puede comunicar y ejecutar.

Esta sección es donde el research deja de ser descriptivo y se vuelve guía de acción.

### 12.1 Patrones que cruzan capas

Cinco patrones aparecen consistentemente en múltiples capas del ecosistema. Son insights transversales que valen más que la suma de implicaciones por capa.

**Patrón 1 — WhatsApp-nativo es la realidad operativa transversal del segmento.**

WhatsApp aparece como herramienta operativa default en cinco capas distintas:

- En la cocina y back-of-house para coordinar cambios diarios y comunicar al equipo (sección 2).
- En la relación con proveedores para poner órdenes y negociar (secciones 2.1, 4.2).
- Con productores micro chef-oriented como Geek Greens y Microgreens Tijuana cuyo modelo comercial completo opera por DM/WhatsApp (sección 4.5).
- Como canal de venta directa al comensal complementario a agregadores (sección 5.5).
- En comunidades de operadores, capacitación de consultoras y comunicación interna de cámaras (sección 10.6).

**Implicación.** Zenet **NO compite con WhatsApp ni lo reemplaza**. Coexiste con WhatsApp como interfaz secundaria. Cualquier flujo de Zenet (recetario, inventario, distribución, costo) tiene que tener una "huella WhatsApp" — sea exportando recordatorios, recibiendo pedidos por WhatsApp y registrando, o integrando con WhatsApp Business API para confirmaciones. **WhatsApp es ciudadano de primera clase del producto, no afterthought.**

**Patrón 2 — El operador articula síntomas, no causas técnicas.**

En múltiples capas, la fricción real existe pero el operador no la nombra como dolor:

- Comisiones nominales 25% vs efectivas 38% — el operador intuye que pierde dinero pero no calcula la diferencia (sección 5.2).
- POS sin APIs públicas en MX — no aparece como dolor articulado en CANIRAC ni prensa (sección 6.1).
- 13 puntos de "diff" delivery, mermas no atribuibles, costo silencioso de la improvisación — todos son consecuencia, no causa, en el lenguaje del segmento (secciones 2.4, 5.2, 8.7).

Lo que el operador **sí articula** son síntomas operativos: "el inventario nunca cuadra", "paso 5 horas reconciliando", "cuando se va el chef se pierde todo", "no hay personal". Y dolores financieros: "los márgenes están apretados", "los costos suben", "el delivery se lleva mucho".

**Implicación.** Zenet **comunica en el lenguaje del síntoma, no de la causa técnica**. Promesas anchadas en lo que el operador articula:

- "Hacemos que tu inventario cuadre."
- "Te recuperamos las horas que pasas reconciliando."
- "Tu sistema sobrevive a la rotación de personal."
- "Te decimos no solo cuánto cuesta, sino por qué."

Reservar el lenguaje técnico (APIs, integraciones, arquitectura, fases de underwriting) para conversaciones con inversionistas o partners técnicos, no para discovery con el operador.

**Patrón 3 — Categoría nueva validada en MX/LATAM.**

Sección 6.12 lo dimensiona estructuralmente: ningún SaaS B2B mexicano o LATAM nacido 2018-2026 se autodenomina "operating system BoH cognitivo" para casual independiente. Comparables internacionales (BOHA!, Restaurant365, Crunchtime, Apicbase) **sin presencia activa anunciada en MX**.

**Implicación.** Esta es la palanca narrativa principal de Zenet para fundraising y posicionamiento. Tres aplicaciones:

- **Para inversionistas:** Zenet no compite por categoría — la crea. Toast LATAM con AI-native como ancla mental.
- **Para prensa:** "DeepSeek of restaurant industry" (línea de Murguia) tiene respaldo competitivo dimensionado.
- **Para producto:** las decisiones de arquitectura desde día uno (APIs limpias, schema modular, observabilidad) se justifican porque crean el moat — no porque lo prescribe un manual.

**Caveat narrativo.** "Categoría nueva" no significa "sin competencia". Significa "sin competidor directo identificado con framing equivalente". Zenet sigue compitiendo con Excel, con Soft Restaurant + módulos internos, con consultoras puntuales — pero compite desde una posición distinta, no desde la misma categoría.

**Patrón 4 — El salto estructural 3→4 sucursales es la zona de máximo valor Zenet.**

Múltiples capas convergen en este punto:

- Sección 3.5 lo nombra: "el salto de 3 a 4 sucursales es estructural — requiere formalizar gerencia operativa, encargado de compras y procesos. La mayoría de los operadores quiebran o estancan precisamente en este salto."
- Sección 2.10 (CD) lo describe arquitectónicamente: el centro de distribución es la respuesta concreta de algunos grupos al salto.
- Sección 8 lo confirma financieramente: el operador en 3-5 sucursales tiene capacidad de pago y necesita capital de trabajo más serio.
- Sección 9.6 lo señala consultivamente: las consultoras se contratan principalmente cuando el grupo cruza este salto.

**Implicación.** El **wedge prioritario de Zenet dentro del beachhead es el operador en transición de 3 a 5 sucursales con CD interno o pensando en construirlo.**

Razones:

- Tienen complejidad operativa que rebasó las herramientas manuales — necesitan sistema, no Excel.
- Tienen capacidad de pago — un CD requiere capital, son operadores serios.
- Ya validaron implícitamente la estandarización (la implementaron físicamente con CD).
- Su contador externo o administrador interno ya trabaja contra un nodo central — facilita integración.
- Adopción es modelo replicable: si funciona en grupo con CD, la narrativa se traslada limpiamente a grupos de 3-5 sucursales que aún no construyen CD pero ven el destino.

**Patrón 5 — Underwriting con data operativa = el platform-play moat más concreto identificado.**

Sección 8.7 lo desarrolla. Lo que aparece en otras capas:

- Sección 6.4 (PayFacs): Clip y Mercado Pago controlan ~80% de las terminales en MX, y ya hacen working capital con data transaccional limitada.
- Sección 8.3 (Clip Capital): el modelo está validado — funciona, opera, escala. La pregunta es solo qué tan rica es la data subyacente.
- Sección 4 (proveedores): la data de comportamiento de proveedor que Zenet captura es exactamente la dimensión que un fintech de factoring para proveedores eventualmente quisiera underwriting-ear.

**Implicación.** La sección 15 desarrolla. Aquí solo se nombra: el platform play **no es salto futuro especulativo** — es consecuencia natural de la arquitectura de producto Año 1 si se construye con disciplina (APIs limpias, eventos capturados, schema preparado para data downstream).

### 12.2 Tabla de relación Zenet ↔ ecosistema

Resumen accionable de cómo Zenet se posiciona frente a cada capa.

| Capa / actor | Relación con Zenet | Acción específica |
|---|---|---|
| **POS dominantes (Soft Restaurant)** | Coexiste · partnership bilateral largo plazo | Ingesta vía importación manual / archivos. Outreach a Mantilla cuando Zenet tenga 5-10 clientes. |
| **POS API-first (Loyverse, Square)** | Integra nativamente cuando es posible | Conectores oficiales para los pocos clientes que los usen. |
| **Soft Restaurant Add-ons (FoodBot, Payments, Delivery Manager)** | Vigila como movimiento competitivo | Si lanza módulo de estandarización + costo, trigger de re-evaluación. |
| **Deliverect** | Adyacente, no competidor directo | Posicionamiento: "hacemos lo de Deliverect + lo demás." |
| **Distribuidores HORECA (La Canasta)** | **Canal #1 identificado** | Outreach a área comercial — co-marketing, programa de referidos. |
| **Sysco / Pacific Star** | Canal #2 (segmento enterprise) | Outreach posterior, perfil más enterprise. |
| **Cash-and-carry (Smart & Final, Costco)** | Touchpoint físico | Material POP en sucursales TJ cuando Zenet tenga producto maduro. |
| **Productores Valle (vinos, quesos, microgreens)** | Field research touchpoint, no canal | Geek Greens y Microgreens TJ como contactos accionables para entender realidad WhatsApp-nativa. |
| **Agregadores (Rappi, DiDi, Uber Eats)** | Coexiste · ingesta de data | Interface para registrar pedidos y comisiones, no integración profunda. |
| **WhatsApp Business** | Ciudadano de primera clase del producto | Recordatorios, confirmaciones, pedidos directos integrados. |
| **CONTPAQi, Aspel, Bind ERP, Alegra** | Coexiste · exporta data limpia | Mensajería al contador: "le ahorramos trabajo, no servicio." |
| **PayFacs (Clip, Mercado Pago)** | Adyacente · ingesta de data transaccional | Año 1 ingesta de cobros · platform play eventualmente fuente de underwriting. |
| **Reservas, lealtad, HR** | Agnóstico | Coexiste sin integración por defecto. |
| **CANIRAC TJ (Aguilar, Nolasco)** | **Touchpoint institucional accionable** | Outreach directo, posible patrocinio de Bootcamp GastronomIA o capacitación. |
| **AMR** | Voz aliada de mensajería | Amplificar "costo silencioso de la improvisación" como frame del problema. |
| **Reguladores (SAT, COFEPRIS, IMSS)** | Contexto · facilita cumplimiento | Mensajería: "te ahorramos trabajo en cumplimiento", no "te certificamos." |
| **NAFIN "Ven a Comer"** | Feature de valor agregado | Avisar al operador cuándo cumple requisitos. |
| **Programas BC (Tu Idea, Emprende)** | Palanca local de marketing | Señalar el camino sin convertirse en agente financiero. |
| **Konfío, fintechs PYME** | Coexisten | Sin integración por defecto. Posible partnership Año 4-5 cuando platform play active fintech vertical. |
| **Consultoras (Grupo Klee, EMCEBAR, Fatfish, GCC)** | Doble lectura — competidor educativo + canal natural | Modelo posicional: "hacemos continuo lo que el consultor hace puntual." |
| **SYCA Consultores Tijuana** | Apuesta de canal local doble | Outreach directo — ejecutor potencial si hay partnership SoftRestaurant, competidor adyacente si no. |
| **Consultores validados (Palazuelos, Murguia, Garzón, Sánchez)** | Red de respaldo y referidos | Continuar relación, formalizar como advisors o partners de referencia. |
| **CETYS Educon** | Partnership educativo potencial | Outreach para incluir Zenet como caso de estudio o módulo digital. |
| **Podcasts (Restaurantes Exitosos, MPR)** | Partnership de contenido prioritario | Auspicios, episodios especiales, promoción cruzada. |
| **ABASTUR** | Evento prioritario nacional | Visitar 2026 para validar perfil, decidir exponer en 2027. |
| **CANIRAC Bootcamp GastronomIA** | Touchpoint movilizable (203 restaurantes) | Posible patrocinio o módulo de contenido. |
| **DoorDash MX** | Vigilar entrada | No opera en TJ ni en MX a 2026. Si entra, cambia dinámica. |

### 12.3 Apuestas estratégicas centrales

Cinco apuestas que sintetizan las implicaciones del documento. Cada una con racional, acción concreta y métrica de éxito.

**Apuesta 1 — Mensajería core anclada en la voz del operador.**

- **Racional.** El operador articula síntomas, no causas técnicas (Patrón 2). La voz institucional ya está validada por AMR ("costo silencioso de la improvisación") y CANIRAC ("comisiones son el principal reto").
- **Acción.** Toda comunicación externa de Zenet (sitio, deck, posts, conversaciones de venta) usa lenguaje de síntoma reconocible: "el inventario que cuadra", "las horas recuperadas", "el sistema que sobrevive a la rotación", "el porqué del costo, no solo el cuánto". Lenguaje técnico (API, arquitectura, fases) reservado a inversionistas y partners técnicos.
- **Métrica de éxito.** En las primeras 10 conversaciones de discovery con operadores casual independiente en TJ, ≥80% reconoce al menos uno de los síntomas como propio sin que Zenet lo sugiera primero.

**Apuesta 2 — Posicionamiento de categoría nueva.**

- **Racional.** Validación competitiva confirmada (Patrón 3) — sin competidor directo en MX/LATAM con framing "operating system BoH cognitivo".
- **Acción.** Comunicación externa nombra explícitamente la categoría. No es "otro POS", "otro inventario", "otro analytics". El frame "DeepSeek of restaurant industry" es accionable. La sección 6.12 sirve como respaldo en deck de inversionistas con caveat honesto ("no encontramos" ≠ "no existe absolutamente").
- **Métrica de éxito.** En narrativa de fundraising, el inversionista no pregunta "¿qué los diferencia de Toast?" — pregunta "¿por qué nadie ha hecho esto antes en LATAM?".

**Apuesta 3 — Wedge prioritario: operadores en salto 3→5 sucursales con CD o pensando en construirlo.**

- **Racional.** Patrón 4 — el salto estructural 3→4 sucursales es donde Zenet entrega más valor relativo. Operadores con CD ya validaron implícitamente la estandarización.
- **Acción.** Los primeros 20 clientes paying en TJ se buscan en este perfil específico. Outreach prioritario:
  - Grupos casual independiente en TJ con 3-5 sucursales identificables (Alma Verde como caso confirmado en sección 2.10).
  - Restaurantes emblemáticos del Valle con integración vertical (ecosistema Plascencia, Hilo Negro/Émat, La Cava de Marcelo).
  - Consultores validados (Palazuelos, Murguia, Garzón, Sánchez) como source de referidos.
- **Métrica de éxito.** ≥60% de los primeros 20 clientes paying son grupos en este perfil (3-5 sucursales con CD o en transición).

**Apuesta 4 — Producto Año 1 con arquitectura preparada para platform play.**

- **Racional.** Patrón 5 — underwriting con data operativa es el moat platform play más concreto. El moat se construye desde día uno aunque la fintech adyacente no se lance hasta Año 4-5.
- **Acción.** Decisiones técnicas Año 1 que se justifican desde aquí:
  - APIs limpias preparadas para que módulos futuros (marketplace de proveedores, fintech) conecten.
  - Schema modular que pueda incorporar transacciones financieras y data de proveedores sin re-arquitectar.
  - Eventos y observabilidad capturados con disciplina para que la data sea valuable downstream.
  - Data ownership pensada para platform, no solo para SaaS BoH.
- **Métrica de éxito.** Año 2 puede demostrar técnicamente (no solo conceptualmente) que la data acumulada de los primeros clientes alimenta un modelo de underwriting con dimensiones que ningún fintech tradicional ve.

**Apuesta 5 — Canal #1: Distribuidora La Canasta + CANIRAC Tijuana + consultores validados.**

- **Racional.** Tres apuestas concretas que la investigación identificó:
  - **La Canasta** nombra textualmente al ICP Zenet en su discurso comercial (sección 4.2). Tiene flotilla y entregas en BC + BCS + Sonora.
  - **CANIRAC Tijuana** con Aguilar Santuario presidenta y Bootcamp GastronomIA con 203 restaurantes participantes (secciones 7.3, 10.8) — audiencia movilizable confirmada.
  - **Consultores validados** (Palazuelos, Murguia, Garzón, Sánchez) ya validaron problema y solución (business context, abril 2026) — base para referidos.
- **Acción.** Outreach específico desarrollado en sección 14.
- **Métrica de éxito.** Al cumplir 6 meses de outreach activo, al menos uno de los tres canales ha generado ≥2 leads calificados de operadores en el perfil ICP.

### 12.4 Riesgos competitivos a vigilar

Cinco frentes donde la dinámica puede cambiar y forzar re-evaluación de estrategia:

1. **Soft Restaurant moviéndose hacia BoH cognitivo.** Ya tiene FoodBot ("algoritmo inteligente"), Analytics, Payments construidos internamente. Si lanza módulo de estandarización + interpretación de costo antes de que Zenet capture share, el corredor estratégico se cierra parcialmente. **Vigilancia activa de comunicaciones de National Soft, blog Soft Restaurant, InfoChannel.**

2. **DoorDash MX entry.** No opera en TJ ni en MX a 2026 — concentrado en USA. Si decide entrar, especialmente vía frontera norte (con dinámica cross-border especial documentada en sección 5.1), puede cambiar percepción local de agregadores y dinámica del segmento.

3. **POS mexicano AI-first / API-first nuevo entrante.** No identificado a 2026 en investigación competitiva. Si emerge un POS nacido AI-first con developer portal abierto, puede capturar el sub-segmento más cloud-savvy más rápido que Zenet.

4. **Consolidación entre fintechs y POS** (ejemplo Toast Capital + Toast POS en USA). Si Clip o Mercado Pago avanzan hacia BoH cognitivo apoyándose en su data transaccional, pueden capturar el platform play desde el otro lado.

5. **Cambio regulatorio en agregadores o trabajo.** Si MX adopta tope federal de comisiones (precedente CDMX 2%) o cambian dinámicas laborales (propinas en salario mínimo aprobada en Senado), el contexto operativo del segmento cambia y la mensajería Zenet debe ajustarse.

La vigilancia activa de estos cinco frentes vive como hipótesis abiertas en sección 17.

---

## 13. Buying committee resuelto

### Cómo leer este capítulo

La sección 3.8 introdujo la tabla del buying committee Zenet por tamaño de operación. Esta sección extiende ese análisis con tres niveles de detalle táctico:

1. **Mensajería específica por persona** — qué decirle al dueño-operador, al chef ejecutivo, al admin. Lo que sí decir y lo que no.
2. **El contador externo como bloqueador silencioso** — tratamiento dedicado porque es el riesgo de venta menos visible.
3. **Sequence de discovery call recomendada** — orden y forma de llevar la conversación con el operador casual independiente.

Esta sección es para uso interno del equipo Zenet en conversaciones de venta y onboarding.

### 13.1 Mensajería por persona

#### Persona 1 — Dueño-operador

**Lo que necesita escuchar (en su lenguaje de síntoma):**

- "Recuperas las horas que pasas reconciliando entre sucursales."
- "Vas a poder desconectarte un fin de semana sin que se caiga la operación."
- "Tu sistema sobrevive a la rotación de personal — no se pierde el conocimiento cuando se va el chef."
- "Vas a ver no solo tus números sino qué hacer con ellos."

**Lo que NO funciona en su discurso:**

- Lenguaje técnico (APIs, integración, arquitectura, módulos).
- Comparativas con software que no usa (Toast, Square enterprise).
- Promesas de "automatización" sin matiz — el dueño-operador no quiere reemplazar a su equipo, quiere que su equipo trabaje mejor (validado con Murguia, abril 2026: el frame correcto es "augment, not replace").

**Tácticas de outreach.** El dueño-operador NO tiene tiempo para extraños (decisión validada del business context, marzo 2026: cold outreach a dueños de restaurantes pausado porque "el segmento no le da tiempo a desconocidos"). Vías que funcionan:

- Referido de consultor que el dueño respeta (Palazuelos, Murguia, Garzón, Sánchez).
- Referido de proveedor con quien ya hace negocio (Distribuidora La Canasta como canal natural).
- Encuentro presencial en evento donde el dueño asiste con disposición (Bootcamp GastronomIA, eventos CANIRAC TJ, vendimias).
- Comunidad cerrada donde otros dueños recomiendan (vía MPR WhatsApp, alumni Grupo Klee).

#### Persona 2 — Kitchen Manager / Executive Chef

**Lo que necesita escuchar:**

- "Tus recetas quedan documentadas con gramajes exactos."
- "El nuevo cocinero llega y sabe qué hacer en su primer turno."
- "Cuando estés en tu día libre, la cocina sabe cómo operar sin ti."
- "Vas a tener menos tiempo en Excel y más en cocinar."

**Lo que NO funciona:**

- Posicionarlo como "automatización que reemplaza al chef" — genera defensividad. El chef es un profesional que defiende su criterio.
- Hablar de "estandarización" sin matiz — algunos chefs lo perciben como rigidez. Mejor enmarcar como "tu manera, documentada."
- Promesas de control/medición que suenen a vigilancia.

**Decisión validada (abril 2026):** *"el chef adopta, el dueño paga"* (business context). En grupos de 2+ sucursales, ganar al chef antes que al dueño es prerrequisito. Si el chef ve a Zenet como amplificación de su criterio, la conversación con el dueño es fácil. Si el chef es bloqueador, no hay venta.

**Tácticas de outreach.**

- Demos en cocina con el chef presente (no solo con el dueño en oficina).
- Casos de uso anclados en problemas de cocina (recetario, mise en place, prep), no en problemas administrativos.
- Endorsement de chefs ejecutivos que ya validaron Zenet en su operación.

#### Persona 3 — Admin / Accountant interno

**Lo que necesita escuchar:**

- "Te ahorra horas de captura manual."
- "Los reportes salen consolidados, no fragmentados."
- "El cierre del día se hace en minutos, no horas."
- "El contador externo recibe data limpia y exportable."

**Lo que NO funciona:**

- Posicionarlo como reemplazo de su rol — el admin tiene años de experiencia en captura, conciliación, manejo de contador. Mejor: "te quita el trabajo aburrido, te deja el análisis."

**Tácticas de outreach.**

- Demo focalizado en flujos administrativos (cierre del día, conciliación de caja, reportes al contador).
- Champion para que el admin sea quien le explique al dueño los beneficios cuantificables.

### 13.2 El contador externo como bloqueador silencioso

Esta sub-sección merece tratamiento dedicado porque es el riesgo menos visible de la venta.

**El problema.** El contador externo no aparece en la conversación de venta inicial. Pero después de que el dueño aprueba implementar Zenet, puede vetar silenciosamente:

- "Eso me complica el cierre fiscal."
- "Mejor sigamos con lo que ya conozco."
- "Esos exportes no me sirven, necesito formato XYZ."

Resultado: el dueño se enfría, el proyecto se posterga, eventualmente se cancela. Sin que el equipo Zenet se entere de que el contador fue el bloqueador.

**La asimetría operativa.** El contador externo:

- Ya tiene su stack (CONTPAQi, Aspel, Bind, Alegra).
- Cobra por servicio mensual ($2,500-$6,000 MXN para casual independiente 1-3 sucursales).
- Atiende a múltiples clientes — un cambio en uno solo no le compensa.
- Percibe nuevo software como riesgo de re-trabajo, no como oportunidad.

**Mensajería preventiva — qué decirle al contador antes de que sea bloqueador:**

- "Zenet exporta data limpia en formato compatible con tu software actual."
- "El cierre fiscal te llega más completo, no más complicado."
- "Tu cliente te paga el mismo servicio mensual; nosotros le simplificamos a él, no a ti."
- "Si necesitas formato específico, lo configuramos en onboarding."

**Tácticas en la venta.**

- En el discovery, preguntar explícitamente "¿quién lleva la contabilidad?" y "¿qué software usa el contador?".
- Si el contador es interno, es admin/accountant (Persona 3) — fácil.
- Si el contador es externo (lo más común en casual independiente 1-3 sucursales), incluirlo como stakeholder desde antes del onboarding. Una llamada de 15 minutos contador-Zenet en pre-implementación previene el veto silencioso.
- Tener un PDF de "Para el contador externo" listo: explica formatos de exportación, integraciones con CONTPAQi/Aspel/Bind/Alegra, y compromiso de soporte.

**Métrica de éxito.** En clientes con contador externo, ≥80% de los onboardings tienen una llamada formal o PDF entregado al contador antes de la implementación.

### 13.3 Sequence de discovery call recomendada

Orden de conversación con un operador casual independiente típico (1-5 sucursales, en perfil wedge prioritario).

**Fase 1 — Diagnóstico del síntoma (10-15 min).**

Preguntas que invitan al operador a articular sus dolores en lenguaje propio:

- "¿Cuánto tiempo te lleva cerrar el día / la semana?"
- "¿Cómo te enteras de que algo no cuadró en inventario?"
- "Cuando se va un cocinero clave, ¿cuánto se tarda en estabilizarse la operación?"
- "¿Qué reportes ves del negocio y cada cuánto?"

Objetivo: que el operador diga sus síntomas. No anticipar la solución todavía.

**Fase 2 — Anclaje del problema (5-10 min).**

Conectar los síntomas escuchados con causas estructurales (sin decir "tu problema es la falta de estandarización"):

- "Lo que escucho es que el inventario es complicado de cuadrar porque las recetas no están al 100% estandarizadas."
- "Lo que pasa cuando se va el cocinero clave es que el conocimiento estaba en su cabeza, no documentado."
- "Los reportes que ves son tarde porque la data viene fragmentada."

Objetivo: que el operador asienta — "sí, exactamente". Si no asienta, ajustar el anclaje.

**Fase 3 — Presentación del frame (5-10 min).**

Explicar Zenet en términos del problema diagnosticado, no como demo de features:

- "Zenet documenta tus recetas con gramajes exactos para que el inventario sí cuadre."
- "Zenet es el sistema operativo que sobrevive a la rotación de personal."
- "Zenet te da el cierre del día completo, no fragmentado."

**Fase 4 — Caso similar (3-5 min).**

Aterrizar con caso de operador en perfil similar:

- "Conozco a [nombre o descriptor de operador validador, según permiso para nombrar] que tenía estos mismos dolores. Después de implementar el sistema [resultado concreto]."

**Fase 5 — Próximo paso (5 min).**

Invitar a paso siguiente concreto:

- Demo focalizado con el chef presente (si es grupo de 2+).
- Llamada con el contador externo si aplica.
- Trial / piloto en 1 sucursal.

**Total tiempo de discovery:** 30-45 minutos. Si el operador da más tiempo, profundizar Fase 1 (diagnóstico) — los datos de discovery son insumo para refinar mensajería futura.

### 13.4 Las tres lecciones operativas

Síntesis de la sección, repetida por importancia:

1. **El chef adopta, el dueño paga.** En grupos de 2+ sucursales, ganar al chef es prerrequisito. La narrativa "augment, not replace" funciona aquí.

2. **El contador externo es bloqueador silencioso.** Mensajería preventiva: Zenet le ahorra trabajo, no le quita servicio. Llamada o PDF formal antes de la implementación previene el veto.

3. **En 1 sucursal el comprador es el usuario.** Eso es ventaja (menos gente en la mesa) y desventaja (el dueño ve el ROI directo sin abogados intermediarios). El onboarding tiene que ser obvio en la primera semana o el dueño abandona.

---

## 14. Hipótesis de canal y partnerships iniciales

### Cómo leer esta sección

Esta sección consolida las apuestas de canal identificadas a lo largo del documento en una lista priorizada por tier (alta / media / largo plazo), con outreach específico recomendado para cada apuesta.

**Estas son hipótesis, no decisiones.** Cada apuesta requiere validación con conversación directa antes de convertirse en plan operativo. La sección es guía de **dónde buscar primero** y **qué pedir** en la conversación.

El criterio de tier:

- **Tier 1 — alta prioridad, baja fricción.** Tracción esperada en 3-6 meses si se ejecuta el outreach.
- **Tier 2 — media prioridad, mayor incertidumbre.** Vale la pena explorar pero el ROI no es claro hasta tener conversación.
- **Tier 3 — largo plazo / vigilancia.** Apuestas que requieren que Zenet tenga ya tracción para ser conversación viable.

### Tier 1 — alta prioridad

#### 14.1 Distribuidora La Canasta — apuesta de canal #1

- **Quién.** lacanasta.com.mx. Distribuidor HORECA dominante en BC + BCS + Sonora. Puntos de venta en TJ, Rosarito, Ensenada, Mexicali. Catálogo de cárnicos, lácteos, abarrotes, desechables (sección 4.2).
- **Por qué importa.** Su discurso comercial nombra textualmente al ICP Zenet ("tacos, pizzas, carnitas, chicharrones, menudo, pozoles, sushis, antojitos, bares, hoteles, banquetes en todo Baja California"). Tiene flotilla. Está institucionalizado en CANACINTRA Ensenada. Toca al operador físicamente antes que cualquier software.
- **Outreach específico.** Llamada/visita al área comercial de La Canasta en TJ. Pitch inicial: "Vendemos software operativo a sus clientes y queremos explorar formas de que sea valor agregado para ustedes (programa de referidos, kit de bienvenida del distribuidor incluyendo trial Zenet, co-marketing en sus puntos de venta)."
- **Lo que pedimos en la conversación.** (a) Confirmar interés en partnership tipo affiliate o co-marketing. (b) Identificar contactos comerciales y operativos. (c) Acordar piloto pequeño (5-10 clientes referidos para validar conversión).
- **Timeline esperado.** 3-6 meses entre primer contacto y piloto operativo.
- **Caveat.** La Canasta no es La Comer ni Sysco — es local, estructura comercial probablemente más informal. Esperar tiempos de decisión y formalización propios de empresa familiar/regional, no corporativa.

#### 14.2 CANIRAC Tijuana — touchpoint institucional accionable

- **Quién.** Delegación CANIRAC TJ con **Rebeca Aguilar Santuario** como presidenta 2026-2027 y **Iván Nolasco Cruz** como presidente estatal BC. Bootcamp GastronomIA con 203 restaurantes participantes confirma audiencia movilizable.
- **Por qué importa.** Es el touchpoint institucional con audiencia ya capturada. AMR ya validó el frame del problema ("costo silencioso de la improvisación"). CANIRAC TJ es plataforma de capacitación regular.
- **Outreach específico.** Solicitar reunión con Aguilar Santuario presentando Zenet como herramienta complementaria a la agenda de profesionalización del capítulo. Posibles formatos:
  - Patrocinio del próximo Bootcamp con módulo de contenido Zenet (estandarización con caso de uso).
  - Webinar conjunto CANIRAC TJ + Zenet sobre estandarización operativa.
  - Participación en Capacita Tijuana con sesión sobre sistema operativo BoH.
- **Lo que pedimos.** (a) Reunión de 30 min con Aguilar y/o Nolasco. (b) Acuerdo sobre formato de colaboración inicial. (c) Acceso a calendario de eventos próximos para evaluar patrocinio.
- **Timeline esperado.** 1-3 meses para primera reunión, 4-8 meses para primera colaboración formal.
- **Caveat.** CANIRAC tiene estructura política — el cambio de directiva implica re-validar la relación. La gestión actual tiene 2026-2027, lo cual da ventana razonable.

#### 14.3 Consultores validados como red de respaldo

- **Quiénes.** Anna Palazuelos (consultora, autora "Recetas para el éxito", supervisó 27 Moshi Moshi + 16 Giornale), Victor Murguia (consultor Mexicali, validó solución y precio Zenet en abril 2026, acuñó "DeepSeek of restaurant industry"), Algira Garzón (OD), Carlos Sánchez (A&B Manager 18 años).
- **Por qué importa.** Ya validaron problema y solución. Tienen redes propias en el segmento. Son fuente natural de referidos.
- **Outreach específico.** Conversación de seguimiento con cada uno (especialmente Murguia, ya activo) para formalizar el siguiente paso:
  - Programa de referidos con compensación (revenue share o flat fee por cliente convertido).
  - Advisor formal con equity simbólico para los más involucrados (Murguia es candidato natural).
  - Casos de éxito conjuntos cuando Zenet tenga 5-10 clientes paying — caso de estudio firmado por consultor + Zenet.
- **Lo que pedimos.** (a) Mantener relación activa con check-ins trimestrales. (b) Acuerdo formal sobre referidos. (c) Co-creación de contenido (testimonio video, post conjunto, episodio de podcast).
- **Timeline esperado.** Continuo. Murguia ya está activo; Palazuelos y los demás requieren outreach formal.
- **Caveat.** Los consultores valoran su independencia. No estructurar la relación como exclusividad — funciona mejor como referidos no exclusivos con incentivo claro.

#### 14.4 Podcasts B2B operador — Restaurantes Exitosos y MPR

- **Quiénes.** Germán Debonis (Restaurantes Exitosos, Apple Podcasts) y MPR (Marketing para Restaurantes, multi-plataforma con +200 episodios).
- **Por qué importa.** Son los dos podcasts B2B operador con tracción visible en español. Audiencia activa de operadores en LATAM (incluyendo MX). MPR tiene comunidad WhatsApp activa que puede ser canal de prueba para early access o programa beta.
- **Outreach específico.** Email/DM a hosts proponiendo:
  - Auspicio de episodio (formato típico: presentación de Zenet + caso de uso + descuento o trial para audiencia).
  - Episodio especial sobre estandarización con Anna Palazuelos como invitada (cruce de validadores).
  - Promoción cruzada en redes y comunidades.
- **Lo que pedimos.** (a) Auspicio de 1-2 episodios. (b) Co-creación de contenido educativo. (c) Acceso a comunidad WhatsApp MPR para early access selectivo.
- **Timeline esperado.** 2-4 meses entre primer contacto y episodio en aire.
- **Caveat.** El auspicio tiene costo. Validar previamente el ROI esperado — para Zenet en fase pre-PMF, probablemente más útil como awareness que como adquisición directa.

#### 14.5 CETYS Educon — partnership educativo TJ

- **Quién.** CETYS Universidad - Educon, Diplomado en Administración de Restaurantes y Bares (online), dirigido a propietarios y gerentes activos.
- **Por qué importa.** Es la pieza más cercana a un bootcamp de gerente operativo accesible localmente en BC. Anáhuac Mérida ya incluye SoftRestaurant en módulo digital — patrón replicable con Zenet.
- **Outreach específico.** Reunión con coordinación académica del diplomado:
  - Incluir Zenet como caso de estudio en módulo de tecnología operativa.
  - Módulo digital con uso de plataforma Zenet (similar a Anáhuac + SoftRestaurant).
  - Workshop conjunto sobre "operating system BoH" para alumnos del diplomado.
- **Lo que pedimos.** (a) Inclusión como caso o módulo en el diplomado próximo. (b) Acceso a alumnos como audiencia para webinar o evento.
- **Timeline esperado.** 3-9 meses, con calendario académico universitario como restricción.
- **Caveat.** Universidades operan con tiempos largos. Probablemente alineado mejor con calendario académico (semestres, ciclos de diplomado).

### Tier 2 — media prioridad

#### 14.6 SYCA Consultores Tijuana — apuesta de canal local doble

- **Quién.** SYCA Consultores, distribuidor SoftRestaurant + consultoría + capacitación + implementación en Tijuana / BC.
- **Por qué importa.** Es ejecutor local lógico si Zenet logra partnership con National Soft, o competidor adyacente si no. Ambos escenarios requieren contacto.
- **Outreach específico.** Reunión exploratoria. Preguntas clave: (a) ¿Qué % de sus clientes ya operan SoftRestaurant pero buscan más? (b) ¿Tienen apetito por integrar herramienta complementaria? (c) ¿Cómo ven a Zenet — competidor o complemento?
- **Caveat.** SYCA tiene incentivo económico claro con SoftRestaurant. Pueden percibir Zenet como amenaza. Conversación delicada — explorar antes de proponer formalmente.

#### 14.7 Sysco / Pacific Star Foodservice — canal segmento enterprise

- **Quién.** Filial mexicana de Sysco con perfil HORECA enterprise en TJ.
- **Por qué importa.** Es canal #2 después de La Canasta, perfil más enterprise (cadenas medianas, hoteles, casual independiente high-end).
- **Outreach específico.** Más complejo que La Canasta — Sysco opera con procesos corporativos. Probablemente vía contacto comercial directo en TJ o vía partnership vertical con Sysco México central.
- **Caveat.** El segmento que sirve Sysco no es exactamente el ICP Zenet — más enterprise. Esperar a tener tracción antes de priorizar.

#### 14.8 Geek Greens y Microgreens Tijuana — touchpoints de field research

- **Quiénes.** Geek Greens (Instagram @geekgreens) y Microgreens Tijuana (Facebook). Productores micro chef-oriented que operan 100% B2B vía DM/WhatsApp.
- **Por qué importa.** No son canal de adquisición — son **touchpoints de field research**. Sirven al perfil exacto de chef serio en casual independiente y operan en realidad WhatsApp-nativa.
- **Outreach específico.** DM directo. Conversación informal: "Estamos investigando cómo operan los chefs en TJ. ¿Te tomas un café para platicar 30 min?"
- **Lo que pedimos.** Insight cualitativo sobre qué chefs son sus mejores clientes, qué dolores ven, qué patterns observan en cocinas.
- **Timeline esperado.** Inmediato. Bajo costo, alta señal.
- **Caveat.** No esperar venta de aquí. Es input para refinar ICP y mensajería.

### Tier 3 — largo plazo / vigilancia

#### 14.9 National Soft / Soft Restaurant — partnership formal

- **Quién.** Mantilla (ejecutivo de canal según InfoChannel) o equipo equivalente.
- **Por qué importa.** Es el dominante con quien hay que coexistir. Partnership formal sería palanca enorme — pero es apuesta de relación bilateral, sin precedente público de SaaS B2B mexicano integrado vía partnership formal.
- **Outreach específico.** **Esperar a tener 5-10 clientes paying.** Sin tracción previa, la conversación con National Soft es asimétrica — Zenet pide mucho, ofrece poco demostrable. Con tracción, la conversación es de igual a igual: "tenemos clientes en común, vamos a integrar mejor".
- **Timeline esperado.** Año 2-3, no Año 1.
- **Caveat.** Riesgo competitivo nombrado: si Soft Restaurant decide construir BoH cognitivo internamente antes de que Zenet capture share, el corredor se cierra. Vigilancia activa.

#### 14.10 Restaurantes emblemáticos del Valle — early adopter aspiracional

- **Quiénes.** Ecosistema "Baja Divina" del chef Javier Plascencia (Finca Altozano, Animalón, Erizo, Caffé Saverios), Hilo Negro/Émat, La Cava de Marcelo/Casa Marcelo, Fauna, Deckman's, Misión 19.
- **Por qué importa.** Son operadores de alta visibilidad pública con integración vertical o sourcing local declarado. Si uno de ellos adopta Zenet, es testimonio replicable.
- **Outreach específico.** Vía consultores validados (especialmente Murguia y Palazuelos, con redes en Valle). No outreach frío.
- **Timeline esperado.** Año 1-2, dependiente de tracción inicial.
- **Caveat.** Estos restaurantes son fine dining premiado en su mayoría — sub-segmento adyacente al casual independiente. La conversación es distinta. Útiles más como caso visible que como segmento principal.

#### 14.11 Eventos cross-border SD ↔ TJ — espacio para crear

- **Estado.** No identificados eventos cross-border específicos para HORECA en 2024-2026 (sección 10.8).
- **Por qué importa.** Espacio vacío que Zenet podría patrocinar o crear cuando tenga tracción.
- **Outreach específico.** Asociaciones empresariales TJ-SD (BCCIE, cámaras binacionales) cuando Zenet tenga 20+ clientes paying. Modelo posible: "Operadores serios de TJ y SD" como evento anual de Zenet.
- **Timeline esperado.** Año 2-3, no antes.
- **Caveat.** Crear evento es esfuerzo grande. Validar con interés expreso de operadores antes de invertir.

### Resumen ejecutivo de las 11 apuestas

Lista comprimida con timing esperado:

| # | Apuesta | Tier | Timing |
|---|---|---|---|
| 14.1 | Distribuidora La Canasta | T1 | 3-6 meses |
| 14.2 | CANIRAC Tijuana (Aguilar) | T1 | 1-8 meses |
| 14.3 | Consultores validados (red) | T1 | Continuo |
| 14.4 | Podcasts (Debonis, MPR) | T1 | 2-4 meses |
| 14.5 | CETYS Educon | T1 | 3-9 meses |
| 14.6 | SYCA Consultores TJ | T2 | exploratorio |
| 14.7 | Sysco / Pacific Star | T2 | post-tracción |
| 14.8 | Geek Greens / Microgreens TJ | T2 (field research) | inmediato |
| 14.9 | National Soft / Soft Restaurant | T3 | Año 2-3 |
| 14.10 | Restaurantes Valle emblemáticos | T3 | Año 1-2 |
| 14.11 | Eventos cross-border SD ↔ TJ | T3 | Año 2-3 |

La sección 17 mantiene como hipótesis abiertas las preguntas de validación específicas para cada apuesta.

---

## 15. Puente al platform play

### Cómo leer esta sección

Esta sección **no desarrolla la visión platform play** — esa profundidad vive en `_context/05-market-insights/01-vision-plataforma-zenet.md`. Lo que esta sección hace es **conectar las capas del ecosistema documentadas en este documento con las verticales adyacentes nombradas en el draft platform play**, y explicitar cómo cada capa eventualmente genera o conecta con una vertical específica.

El propósito es doble:

- **Para el equipo Zenet:** mostrar que el platform play no es salto futuro especulativo — es consecuencia natural de la arquitectura de producto Año 1 si se construye con disciplina.
- **Para inversionistas y stakeholders:** dimensionar la oportunidad más allá del wedge BoH SaaS sin abandonar la disciplina del wedge.

### 15.1 Las verticales adyacentes nombradas en el draft

El draft `01-vision-plataforma-zenet.md` (versión 0.1, abril 2026) identifica cinco verticales adyacentes al wedge BoH:

1. **Marketplace de proveedores y distribución** — TAM estimado $1.2-2.4B MXN/año, multiplicador 60-100x sobre el TAM SaaS BoH puro.
2. **Fintech para restaurantes (lending y working capital)** — revenue potencial $150-500M USD ARR.
3. **Logística y last-mile** — $10-60M USD revenue potencial (probablemente vía partnerships, no propio).
4. **Fintech para proveedores (factoring, B2B payments)** — $10-50M USD revenue potencial.
5. **Total Año 10 platform consolidado** — $110-440M USD ARR potencial, valuación $700M-$5B USD a múltiplo SaaS-fintech híbrido.

### 15.2 Cómo cada capa del ecosistema mapea a una vertical adyacente

| Capa documentada en este doc | Vertical adyacente platform play | Conexión |
|---|---|---|
| **Capa upstream — proveedores HORECA, distribuidores (sección 4)** | Marketplace de proveedores | Zenet ya documenta qué compra el restaurante, a quién, con qué frecuencia, a qué precio. Esa data alimenta directamente un marketplace donde proveedores compiten y Zenet captura take rate. |
| **Capa upstream — productores Valle de Guadalupe directos (sección 4.5)** | Marketplace especializado / curado | Productores micro chef-oriented (Geek Greens, Microgreens TJ) son inventario natural de un marketplace curado de "proveedores que ya validó Zenet". Diferenciador vs Sysco genérico. |
| **Capa downstream — agregadores (sección 5)** | Fintech / cash flow management | Comisiones efectivas 38% sobre ventas vía agregadores son data que alimenta producto de adelanto de ingresos al restaurante (anti-Clip Capital con underwriting más rico). |
| **Capa software — PayFacs y data transaccional (sección 6.4)** | Fintech para restaurantes | Clip y Mercado Pago ya hacen working capital con data limitada. Zenet con data 10x más rica puede ofrecer underwriting de operación completa, no solo de cobros. |
| **Capa institucional — CANIRAC, AMR, programas oficiales (sección 7)** | Red de distribución y validación | Cámaras y asociaciones son canal de awareness y validación cuando el platform play se lance. No genera vertical, pero acelera adopción. |
| **Capa financiamiento — fintechs PYME, NAFIN (sección 8)** | Fintech para restaurantes | Zenet eventualmente compite con Konfío, complementa Clip, integra NAFIN. La capa actual es punto de partida, no zona Zenet por defecto. |
| **Capa talento — consultoras y formación (sección 9)** | Marketplace de servicios profesionales | Eventualmente posible: marketplace donde Zenet conecta a operadores con consultores validados. No es prioritario, pero es vertical adyacente nameable. |
| **Capa medios y comunidad (sección 10)** | Awareness y community-led growth | No genera vertical de revenue, pero amplifica la captura de los demás. |

### 15.3 La Fase 3 (Distribuciones y proveedores) como conector central

La sección 2 del documento estableció la arquitectura de 4 fases de Zenet (Estandarización → Inventario → Distribuciones/proveedores → Interpretación de costos). La Fase 3 es **el conector estructural con el platform play**:

- F3 documenta qué compra el restaurante, a quién, con qué patrón, a qué precio, con qué calidad.
- Esa data es exactamente la materia prima de un marketplace de proveedores.
- Esa data también permite scoring de proveedores para fintech de factoring.
- Esa data permite optimización logística para vertical de last-mile cuando aplique.

**Implicación arquitectónica para Año 1.** Las decisiones técnicas en Fase 3 (cómo se modela la orden de compra, las transferencias internas, la evaluación de proveedor, la trazabilidad cross-border) **deben tomarse pensando en el platform play**, no solo en el SaaS BoH. Esto significa:

- Schema de proveedores desde día uno con campos para evaluación, scoring y eventual marketplace.
- APIs de Fase 3 limpias y separables — para que el módulo marketplace pueda consumirlas sin re-arquitectar.
- Eventos de orden de compra capturados con observabilidad fina — sirven para underwriting fintech downstream.
- Data ownership y consentimiento explícitos pensados para marketplace (anonimización, agregación, devolución al operador).

Estas son decisiones que se toman ahora aunque el platform no se exponga al mercado todavía.

### 15.4 Triggers de activación de cada vertical adyacente

El draft platform play insiste: **el wedge debe estar dominante antes de expandir.** Triggers concretos para cada vertical:

**Marketplace de proveedores — trigger Año 3-4.**

- Activación: cuando 100+ clientes paying nos están pidiendo proveedores recomendados espontáneamente, o quejándose de su distribuidor actual.
- Pre-requisito: data de Fase 3 acumulada con suficiente cobertura geográfica (al menos BC + 1 estado adicional).
- Precedente: Mercado Libre lanzó MercadoPago después de dominar marketplace, no antes.

**Fintech para restaurantes — trigger Año 4-5.**

- Activación: cuando los clientes paying piden capital de trabajo y la data de operación de Zenet permite underwriting con dimensiones que Konfío y Clip no ven.
- Pre-requisito: 200+ clientes con al menos 12 meses de operación bajo Zenet (para que el underwriting basado en data tenga histórico suficiente).
- Precedente: Toast Capital se lanzó después de miles de clientes Toast POS, no antes.

**Logística y last-mile — trigger Año 5-6 (probablemente vía partnership, no propio).**

- Activación: cuando los clientes pagantes operan multi-sucursal y la complejidad de transferencias internas (CD ↔ sucursal) justifica producto dedicado.
- Pre-requisito: % significativo de clientes paying con CD operativo.
- Precedente: Mercado Libre construyó Mercado Envíos en partnership inicial, no de cero.

**Fintech para proveedores — trigger Año 6-7.**

- Activación: cuando el marketplace de proveedores tiene volumen suficiente para que productos de factoring B2B tengan escala de underwriting.
- Pre-requisito: marketplace operativo en Año 4-5.
- Precedente: muchos marketplaces B2B agregan fintech después de establecer flujo transaccional.

### 15.5 Implicación práctica para producto Año 1

La sección 8.7 ya estableció: **el moat se construye desde día uno.** Aquí se concreta qué decisiones de producto Año 1 son consecuentes con el platform play sin sacrificar foco del wedge.

**Decisiones que sí afectan ya la arquitectura Año 1:**

- APIs internas separables por fase (F1, F2, F3, F4) para que módulos futuros conecten sin re-arquitectar.
- Schema modular preparado para incorporar transacciones financieras y data de proveedores.
- Eventos y observabilidad capturados con disciplina downstream-friendly.
- Data ownership y términos pensados para platform desde inicio (no dejar para después).

**Decisiones que NO se distraen ya con platform play:**

- Funcionalidades de marketplace de proveedores no se construyen en Año 1.
- Productos fintech no se construyen en Año 1.
- Logística no se construye en Año 1.

La diferencia entre las dos columnas es disciplina. El draft platform play insiste explícitamente en este punto: *"el wedge debe estar dominante antes de expandir"* (`01-vision-plataforma-zenet.md`, sección "La señal de cuándo expandir").

### 15.6 Riesgo crítico: pensar plataforma antes de PMF

El draft platform play nombra explícitamente la trampa: *"si Zenet empieza a pensar en marketplace y fintech en Año 1, el riesgo es foco diluido en Tijuana, fundraising basado en platform vision sin tener PMF, equipo pequeño intentando construir features de marketplace antes de perfeccionar el BoH."*

**Implicación para este documento.** La sección 15 existe para dimensionar la oportunidad y orientar decisiones de arquitectura — no para activar verticales adyacentes en Año 1. La conversación con inversionistas usa la sección 15 como respaldo de magnitud futura, pero los OKRs y métricas de Año 1 se basan en el wedge:

- Clientes paying en TJ.
- NPS y retención.
- Casos de uso replicables.
- Tracción operativa (sucursales bajo Zenet, recetarios estandarizados, costos interpretados).

Cuando el wedge esté dominante (200+ clientes, NPS alto, churn <15%), la sección 15 deja de ser referencia teórica y se vuelve roadmap operativo.

### 15.7 Conexión final con el draft platform play

Para profundidad cuantitativa (sizing de cada vertical, capital requerido, comparables internacionales, secuencia de fases año por año, probabilidades subjetivas de cada escenario) — ver:

`_context/05-market-insights/01-vision-plataforma-zenet.md` (versión 0.1, abril 2026, draft de trabajo)

Cuando ese draft pase a documento oficial (probablemente integrado a `07-geografia-y-expansion.md` o sub-sección dedicada), esta sección 15 actualiza su pointer.

Por ahora, la **lectura de cierre del documento 06** es:

> Zenet construye un sistema operativo cognitivo de back-of-house para casual independiente en MX. Esa es la apuesta del wedge. La arquitectura de ese wedge — APIs limpias, schema modular, observabilidad disciplinada, Fase 3 (distribuciones y proveedores) como capacidad de primera clase — habilita un platform play hacia marketplace de proveedores, fintech para restaurantes y verticales adyacentes en Año 4-7. El wedge primero. La plataforma después. La arquitectura, desde día uno.

---

## 16. Fuentes consultadas

*Esta sección se va poblando conforme se redactan las demás. Lista parcial al cierre del Bloque A.*

### Fuentes mexicanas — institucionales y prensa

- AbasturHub. *Restaurantes en México enfrentan nuevos retos.* 2026. https://www.abasturhub.com/nota/restaurantes/restaurantes-en-mexico-enfrentan-nuevos-retos
- AMEDIRH. *Por qué la frontera norte tiene un salario mínimo más alto que el resto del país.* 2026. https://www.amedirh.com.mx/rh40/recursos-humanos/por-que-la-frontera-norte-tiene-un-salario-minimo-mas-alto-que-el-resto-del-pais/
- AMR (Asociación Mexicana de Restaurantes). *Importancia de estandarizar recetas — costo silencioso de la improvisación.* 2024. https://www.amr.org.mx/noticias.phtml?id=6024
- AMR. *Crecimiento de la industria restaurantera 2025.* 2025. https://www.amr.org.mx/noticias.phtml?id=5928
- CANIRAC. *El reto del talento en la industria restaurantera: de la rotación a la solución.* 2024. https://portal.canirac.org.mx/noticias/el-reto-del-talento-en-la-industria-restaurantera-de-la-rotacion-a-la-solucion/
- CESSA Universidad. *Curso Estandarización, costeo y conversión de recetas.* 2024. https://www.cessa.edu.mx/educacion-online/curso-estandarizacion-costeo-y-conversion-de-recetas
- El Economista. *Mundial agudizará déficit de talento en restaurantes.* 2026. https://www.eleconomista.com.mx/empresas/mundial-agudizara-deficit-talento-restaurantes-20260211-799365.html
- El Economista. *Hay tanta rotación laboral en industria restaurantera.* 2025. https://www.eleconomista.com.mx/bistronomie/hay-tanta-rotacion-laboral-industria-restaurantera-20250516-759250.html
- INEGI. *La industria restaurantera en México. Censos Económicos 2019.* https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/702825199357.pdf
- La Jornada. *En la informalidad siete de cada 10 restaurantes.* 2020. https://www.jornada.com.mx/noticia/2020/08/15/economia/en-la-informalidad-siete-de-cada-10-restaurantes-1436
- Milenio. *Escasea personal en industria restaurantera — CANIRAC Puebla.* 2025. https://www.milenio.com/negocios/escasea-personal-industria-restaurantera-canirac-puebla
- Anáhuac Mérida. *Diplomado en Gestión de Negocios de Alimentos y Bebidas.* 2024. https://merida.anahuac.mx/educacion-continua/gastronomia/diplomado-gestion-negocios-alimentos-bebidas

### Fuentes mexicanas — guías operativas, software y consultoras

- BDKREST. *Sistema para restaurantes y bares.* 2024. https://www.bdkrest.com
- Calisto. *El costo real de las comisiones de apps de delivery para restaurantes.* 2024. https://calisto.ai/es/blog/el-costo-real-de-las-comisiones-de-apps-de-delivery-para-restaurantes
- CLAB Group. *Food cost por formato de restaurante.* 2024. https://clabgroup.com/es/blog/food-cost/
- Comparasoftware. *Logística y compras en restaurantes.* 2024. https://blog.comparasoftware.com/logistica-compras-restaurante/
- Computrabajo. *Salarios en restaurantes en México.* 2025. https://mx.computrabajo.com/salarios/restaurantes
- EMCEBAR (Escuela Mexicana de Capacitación Empresarial de Bares y Restaurantes). 2024. https://www.emcebar.org.mx/cursos-empresariales-restaurantes/
- Fatfish Consultores. 2024. https://www.fatfish.com.mx
- GCC Sistemas California. *Consultoría en gestión de restaurantes.* 2024. https://gcc.sistemascalifornia.com
- Grupo Klee. *Capacitación restaurantera.* 2024. https://www.grupoklee.com/capacitacion-restaurantera/
- Hiperabasto. *La guía definitiva de la cadena de frío de alimentos en México.* 2024. https://hiperabasto.mx/blogs/noticias/la-guia-definitiva-de-la-cadena-de-frio-alimentos-en-mexico
- ITN Consultores (StockManager). *Software para restaurantes — sistema de inventario.* 2024. https://itnconsultores.com/software-para-restaurantes/sistema-de-inventario
- Jooble. *Salarios en México por rol.* 2025. https://mx.jooble.org/
- La Canasta. *Foodservice — dónde compran los restaurantes y negocios.* 2024. https://www.lacanasta.com.mx/foodservice-donde-compran-los-restaurantes-y-negocios
- Mapal-OS. *Consistencia operativa en restaurantes — por qué falla la ejecución cuando más importa.* 2024. https://mapal-os.com/es/mx/control-calidad/consistencia-operativa-en-restaurantes-por-que-falla-la-ejecucion-cuando-mas-importa
- ModelosDePlanDeNegocios. *Rentabilidad restaurante de comida mexicana.* 2024. https://modelosdeplandenegocios.com/blogs/news/rentabilidad-restaurante-comida-mexicana
- Parrot Software. *Tendencias en quick service y fast food en México 2026.* 2026. https://parrotsoftware.com.mx/blog/tendencias-en-quick-service-y-fast-food-en-mexico-2026
- Perfectiva. *Cuánto cuesta contratar un despacho contable.* 2024. https://perfectiva.com.mx/cuanto-cuesta-contratar-un-despacho-contable-en-cdmx-y-que-incluye/
- PoloTab. *Finanzas para restaurantes 101 México 2025.* 2025. https://blog.polotab.com/finanzas-restaurantes-101-mexico-2025/
- PoloTab. *Sueldos y salarios en restaurantes México 2025.* 2025. https://blog.polotab.com/sueldos-salarios-restaurantes-mexico-2025
- Programascontabilidad.com. *Comparativa de software POS México 2026.* 2026. https://programascontabilidad.com/comparativas-de-software/pos/sistemas-pos-mexico/
- Rappi Merchants. *Gestión de inventarios eficientes en restaurantes.* 2024. https://merchants.rappi.com/es-mx/gestion-inventarios-eficientes-restaurantes
- Soft Restaurant. *Blog restaurantero — cómo hacer el costeo de recetas.* 2024. https://softrestaurant.com/blog-restaurantero/como-hacer-el-costeo-de-recetas-en-un-restaurante
- SoyConta. *Honorarios de un despacho contable.* 2024. https://www.soyconta.com/honorarios-de-un-despacho-contable-como-determinarlos/
- Stripe. *What businesses need to know about 30 days payment terms.* 2025. https://stripe.com/mx/resources/more/what-businesses-need-to-know-about-30-days-payment-terms
- Trezy. *Gestión de flujo de caja en restaurantes — guía completa.* 2024. https://www.trezy.io/es/blog/gestion-flujo-caja-restaurantes-guia-completa
- Unilever Food Solutions México. *Evitar desperdicio de alimentos.* 2024. https://www.unileverfoodsolutions.com.mx/tendencias/evitar-desperdicio-de-alimentos.html
- UVM Blog. *Carrera de gastronomía — duración, campo laboral, sueldo.* 2024. https://blog.uvm.mx/carrera-de-gastronomia-duracion-campo-laboral-sueldo
- WhitePaper Monterrey. *Cuánto venderá La Nacional.* 2024. https://www.whitepaper.mx/p/cuanto-vendera-la-nacional

### Fuentes académicas

- Bancomext. *Patrones y hábitos de consumo en Baja California.* http://revistas.bancomext.gob.mx/rce/sp/articleReader.jsp?id=7&idRevista=21
- Ciencialatina. *La estandarización de las recetas gastronómicas en la calidad del servicio y la fidelización de los comensales.* 2024. https://ciencialatina.org/index.php/cienciala/article/download/15450/22010/
- Eumed. *Evaluación de la productividad en restaurantes independientes y en hoteles.* 2013. https://www.eumed.net/rev/turydes/14/restaurantes.html
- UABC. *Estudio sobre fracaso de restaurantes independientes.* 2008. https://repositorioinstitucional.uabc.mx/bitstream/20.500.12930/854/1/ENS080529.pdf

### Fuentes internas del workspace Zenet

- Zenet Production. *Business context for production software.* v1.0, abril 2026. `/02_Producto-y-Tech/Production-software/Zenet/docs/project-strategy/business-context/zenet-business-context-production.md`
- Zenet Marketing. *Visión platform play — del wedge BoH al ecosistema completo.* draft v0.1, abril 2026. `_context/05-market-insights/01-vision-plataforma-zenet.md`

### Fuentes adicionales — Bloque B (capas upstream, downstream y software)

**Capa upstream — actores y prensa.**

- Alimentos Ochoa. *Comercializadora de alimentos.* 2024. https://alimentosochoa.com
- AMR. *Producción de aceite de oliva en Baja California.* 2024. https://www.amr.org.mx/noticias.phtml?id=4104
- Baja Foodie. *La historia del Mercado Negro de Mariscos de Ensenada.* 2024. https://bajafoodie.blog/la-historia-del-mercado-negro-de-mariscos-de-ensenada-tradicion-sabor-y-resiliencia
- Bancomext. *Patrones y hábitos de consumo en Baja California.* 2017. http://revistas.bancomext.gob.mx/rce/sp/articleReader.jsp?id=7&idRevista=21
- CANACINTRA Ensenada. *Directorio empresarial — La Canasta.* 2024. https://directorio.canacintraens.org/listing/la-canasta/
- CESAIBC. *Directorio de productores de moluscos Baja California.* 2010+. http://www.cesaibc.org/pdf/Directorios/2010/Moluscos/productoresmoluscos2010.pdf
- Cocina Vital. *Tiendas de Smart & Final en México.* 2024. https://www.cocinavital.mx/blog-de-cocina/tips-de-estilo-de-vida/en-donde-se-ubican-las-tiendas-de-smart-final-en-mexico-mapa-completo/2024/08/
- Cocinas Institucionales. 2024. https://cocinasi.com
- Conexión México. *Productora Agrícola Industrial del Noroeste.* 2024. https://conexionmexico.net/empresas/productora-agricola-industrial-del-noroeste
- Dialnet / Universidad Autónoma de Coahuila. *Comercio transfronterizo en frontera norte.* 2022. https://dialnet.unirioja.es/descarga/articulo/8182345.pdf
- EMC Baja. *Equipos para industria alimenticia.* 2024. https://www.emcbaja.com.mx
- Ensenada Land 646. *Mercado Negro de Mariscos.* 2024. https://www.facebook.com/EnsenadaLand646
- Geek Greens. *Microgreens Tijuana.* 2024. https://www.instagram.com/geekgreens/
- Hilo Negro Viñedos y Bodega. *Vino mexicano y restaurante Émat.* 2024. https://vinohilonegro.com/valle-de-guadalupe-esencialmente-vinicola/
- La Canasta. *Distribuidora de alimentos.* 2024. https://www.lacanasta.com.mx
- La Jornada. *Cooperativa de ostión Bahía Falsa San Quintín.* 2017. https://www.jornada.com.mx/2017/09/17/cam-quintin.html
- Mercado de Abastos Tijuana. *Cuenta oficial.* 2024. https://www.instagram.com/mercadodeabastostijuana/
- México Desconocido. *Valle de Guadalupe — vinos, hoteles, museos y restaurantes.* 2024. https://www.mexicodesconocido.com.mx/valle-de-guadalupe-en-baja-vinos-hoteles-museos-y-restaurantes.html
- Microgreens Tijuana / Jardín Comestible. *Cuenta oficial.* 2024. https://www.facebook.com/MicrogreensTijuana
- Pinos Agrícola. *Empresa hortícola San Quintín.* 2024. http://pinosagricola.com.mx/Empresa.html
- Provino Baja California. *Asociación civil de vinícolas.* 2024. https://provinobc.mx
- RadioFórmula. *Smart & Final en México.* 2025. https://www.radioformula.com.mx/estilo-de-vida/la-tienda-que-le-echa-competencia-a-costco-y-donde-puedes-comprar-sin-membresia-20251105-0049.html
- Revista Todos Santos. *Quesos Ramonetti y helados Rancho La Campana.* 2024. https://www.rtodos-santos.mx/?p=4420
- Scielo. *Movilidad y comercio Tijuana–San Diego.* 2017. https://www.scielo.org.mx/scielo.php?pid=S0187-69612017000100022&script=sci_arttext&tlng=es
- Sección Amarilla. *Equipos para restaurantes en Tijuana.* 2024. https://www.seccionamarilla.com.mx/resultados/equipos-para-restaurantes/baja-california/tijuana/1
- Sysco México. *Pacific Star Foodservice Tijuana.* 2024. https://www.sysco.com
- Todo Equipos. *Equipo de cocina industrial Tijuana.* 2024. http://www.todoequipos.com.mx
- TripAdvisor. *Casa Marcelo Ensenada.* 2024. https://www.tripadvisor.com.mx/Restaurant_Review-g150770-d8787544-Reviews-Casa_Marcelo-Ensenada_Ensenada_Municipality_Baja_California.html
- Waze. *Central de Abastos Benítez Tijuana.* 2024. https://www.waze.com/es/live-map/directions/mx/b.c./tijuana/central-de-abastos-benitez
- Yo Amo Ensenada. *Mercado Negro de Mariscos.* 2024. https://www.facebook.com/YoAmoEns
- Zeta Tijuana. *Restaurantes en crisis por carestía y garitas lentas.* 2024. https://zetatijuana.com/2024/01/restaurantes-en-crisis-por-carestia-y-garitas-lentas/

**Capa downstream — agregadores y canales.**

- Centro Competencia. *Competencia a domicilio: exclusividades y concentración en plataformas de delivery en México.* 2024. https://centrocompetencia.com/competencia-a-domicilio-exclusividades-y-concentracion-en-plataformas-de-delivery-en-mexico/
- Calisto. *El costo real de las comisiones de apps de delivery para restaurantes.* 2024. https://calisto.ai/es/blog/el-costo-real-de-las-comisiones-de-apps-de-delivery-para-restaurantes
- Deliverect. *Plataforma de pedidos digitales (es-mx).* 2024. https://www.deliverect.com/es-mx
- DiDi Food. *Sitio oficial México.* 2024. https://didifood.com
- Directo al Paladar. *Industria restaurantera pide a apps bajar comisiones.* 2024. https://www.directoalpaladar.com.mx/eventos/industria-restaurantera-pide-a-apps-bajar-comisiones-entregas-a-domicilio
- El CEO. *Uber Eats, Rappi y DiDi se preparan para Mundial 2026.* 2025. https://elceo.com/economia/uber-eats-rappi-y-didi-se-preparan-para-un-aumento-historico-de-pedidos-por-el-mundial-2026/
- El Economista. *Delivery impulsa 70% de ventas y divide al sector en CDMX.* 2026. https://www.eleconomista.com.mx/bistronomie/delivery-impulsa-70-ventas-restaurantes-divide-sector-cdmx-20260417-809104.html
- eSemanal. *Restaurantes en México: medio millón de oportunidades.* 2025. https://esemanal.mx/2025/07/restaurantes-en-mexico-un-sector-con-mas-de-medio-millon-de-oportunidades/
- Expansión. *México segundo mercado delivery LatAm.* 2025. https://expansion.mx/tecnologia/2025/05/30/mexico-segundo-mercado-delivery-latinoamerica
- Fudo. *Mejores softwares para restaurantes en LatAm.* 2024. https://blog.fu.do/mejores-softwares-para-restaurantes-en-latam
- Kasumi. *WhatsApp para restaurantes y pedidos.* 2024. https://kasumi.cx/blog/whatsapp-restaurantes-pedidos/
- La Jornada. *SCJN valida cobro 2% a plataformas digitales en CDMX.* 2025. https://www.jornada.com.mx/noticia/2025/11/27/politica/valida-la-corte-cobro-del-2-a-plataformas-digitales-de-entrega-de-alimentos-en-cdmx
- Líder Empresarial. *Rappi, DiDi Food y Uber Eats: comisiones promedio en México.* 2024. https://www.liderempresarial.com/rappi-didi-food-y-uber-eats-donde-cobran-menos-comision-promedio-en-mexico/
- Logística 360. *Rappi y Uber Eats en LatAm.* 2024. https://logistica360.pe/uber-eats-y-rappi/
- Luis Manuel Rivera. *Tendencias clave en industria restaurantera 2025-2026.* 2025. https://luismanuelrivera.com/2025/06/09/tendencias-clave-en-la-industria-restaurantera-2025-2026/
- Marketing4eCommerce. *Apps de comida a domicilio en México.* 2024. https://marketing4ecommerce.mx/didi-food-uber-eats-rappi-apps-de-comida-a-domicilio-mexico/
- Rappi Merchants. *Estrategias de marketing con WhatsApp para restaurantes.* 2024. https://merchants.rappi.com/es-mx/estrategias-marketing-whatsapp-restaurantes
- Reddit r/tijuana. *Food delivery services in Tijuana.* 2024. https://www.reddit.com/r/tijuana/comments/1bcbskt/food_delivery_services_in_tijuana/
- San Luis El Universal. *Comisiones hasta 35% en apps de reparto: principal reto CANIRAC.* 2026. https://sanluis.eluniversal.com.mx/economia-y-negocios/comisiones-de-hasta-el-35-por-ciento-en-apps-de-reparto-el-principal-reto-para-restaurantes-canirac
- Uber Eats. *Sitio oficial Tijuana BC.* 2024. https://www.ubereats.com/mx/city/tijuana-bc

**Capa software — POS, integradores y comparables.**

- BDKREST. *Sistema para restaurantes y bares.* 2024. https://www.bdkrest.com
- ComparaSoftware. *Software para restaurantes.* 2024. https://www.comparasoftware.com/software-para-restaurantes
- Crisp QSR. *Restaurant management platform.* 2024. https://www.crispqsr.com
- GetApp México. *Toast POS adopción MX.* 2024. https://www.getapp.com.mx/software/103313/toast-pos
- InfoChannel. *Soft Restaurant: foco en desarrollo de socios y nuevas herramientas.* 2026. https://infochannel.info/soft_restaurant_foco_desarrollo_socios_nuevas_herramientas_colaboracion/
- Latam List. *Leal raises $3M for LatAm expansion.* 2024. https://latamlist.com/colombias-leal-raises-3m/
- Loyverse Town. *Webhooks ahora disponibles en Loyverse API.* 2024. https://loyverse.town/topic/3748-now-webhooks-are-available-in-loyverse-api/
- MarketMan. *Restaurant inventory management software.* 2024. https://es.marketman.com/restaurant-inventory-management-software
- Mastercard. *Powering the future of commerce in Mexico, Central America and the Caribbean.* 2025. https://www.mastercard.com/news/media/roin4ns1/mastercard_powering_the_future_of_commerce_in_mexico_central_america_and_the_caribbean_es_11.pdf
- NationalSoft API. *SoftRestaurant Service.* 2024. https://api.softrestaurant.com.mx
- Oracle LATAM. *Integraciones POS para restaurantes y bares.* 2024. https://www.oracle.com/latam/food-beverage/restaurant-pos-systems/pos-integrations/
- Pospan. *Distribuidor Oracle Food & Beverage LatAm.* 2024. https://pospan.com
- Reddit r/Devmexico. *Integración Soft Restaurant.* 2025. https://www.reddit.com/r/Devmexico/comments/1kf1k42/integracion_soft_restaurant/
- Soft Restaurant. *Sitio oficial.* 2024. https://softrestaurant.com
- Soft Restaurant. *Alta de socio comercial autorizado.* 2024. https://softrestaurant.com/alta-de-socio-comercial
- Soft Restaurant. *Add-ons y módulos.* 2024. https://softrestaurant.com/addons
- Soft Restaurant. *Integraciones.* 2024. https://softrestaurant.com/integraciones
- Soft Restaurant. *Manuales — Guía módulo conexión ERP/PMS.* 2024. https://softrestaurant.com/manuales/file/200-ope-ana-sr11-guia-para-el-modulo-de-conexion-de-erp-y-pms
- Soft Restaurant Zohodesk. *Módulo de integración ERP/PMS.* 2024. https://softrestaurant.zohodesk.com/portal/es/kb/articles/m%C3%B3dulo-de-integraci%C3%B3n-erp-y-psm
- TheirStack. *Toast POS adoption Mexico.* 2024. https://theirstack.com/en/technology/toast-pos/mx
- Treinta. *Mejores POS para restaurantes en LatAm.* 2025. https://www.treinta.co/blog/los-5-mejores-sistemas-pos-para-restaurantes-en-latinoamerica-2025
- Trendencias. *Smart & Final formato sin membresía.* 2024. https://www.trendencias.com/mexico/esta-nueva-tienda-mexico-donde-podras-comprar-membresia-que-hara-temblar-a-sams-club-costco
- Xataka Móvil. *Yumminn quiebra.* 2024. https://www.xatakamovil.com/movil-y-sociedad/crearon-app-barcelona-que-facilitaba-pagar-restaurantes-tres-anos-choca-realidad-nadie-usaba

### Fuentes adicionales — Bloque C (capas institucional, financiamiento, talento)

**Capa institucional — cámaras, asociaciones, regulación.**

- AFN Tijuana. *Toma protesta Rebeca Aguilar como presidenta CANIRAC Tijuana.* 2026. https://www.afntijuana.info/informacion_general/173628_toma_protesta_rebeca_aguilar_como_presidenta_de_canirac_tijuana
- CANIRAC. *FAQ — afiliación y estructura.* 2024. https://portal.canirac.org.mx/faq/
- CANIRAC. *Calendario de capacitación.* 2024. https://portal.canirac.org.mx/calendario-capacitacion-canirac/
- CANIRAC Jalisco. *Beneficios afiliado 2024.* 2024. https://caniracjalisco.org/2023/12/21/afiliado-canirac-2024/
- InfoChannel. *CANIRAC nacional — Asamblea 2024 toma de protesta.* 2024. https://infochannel.info
- Los Titulares. *Ignacio Alarcón reelegido presidente CANIRAC 2025-2026.* 2025. https://lostitulares.com.mx/nacional/ignacio-alarcon-rodriguez-es-reelegido-como-presidente-nacional-de-canirac-2025-2026/
- Multimedios. *Rebeca Aguilar presidenta CANIRAC Tijuana 2026-2027.* 2026. https://multimedios.info/gastronomia/rebeca-aguilar-es-la-nueva-presidenta-de-la-canirac-tijuana/
- San Diego Red. *Consejo Directivo 2026 CANIRAC Tijuana.* 2026. https://www.sandiegored.com/noticia/consejo-directivo-2026-de-canirac-tijuana-lleva-a-cabo-toma-de-compromiso/
- San Diego Red. *Capacita Tijuana — formación integral para restaurantes.* 2026. https://www.sandiegored.com/noticia/tijuana-impulsa-una-nueva-capacitacion-en-el-sector-restaurantero-con-el-curso-liderazgo-que-transforma/
- Uniradio Baja. *CANIRAC lleva inteligencia artificial a restaurantes Tijuana — Bootcamp GastronomIA.* 2026. https://www.uniradiobaja.com/sociedad/canirac-lleva-inteligencia-artificial-restaurantes-tijuana-bootcamp-gastronomia-n866376

**Capa financiamiento — fintechs, banca de desarrollo, programas estatales.**

- ASEM. *Pronto pago a PYMEs aprobado en Comisiones Diputados.* 2024. https://asem.mx/pronto-pago-para-las-pymes-es-aprobada-en-comisiones-de-la-camara-de-diputados/
- Bloomberg Línea. *Play Business pelea contra impagos de Cervecería de Barrio, Mr. Sushi y BodyBrite.* 2022. https://www.bloomberglinea.com/2022/05/17/play-business-pelea-contra-impagos-de-cerveceria-de-barrio-mr-sushi-y-body-brite/
- Blog KardMatch. *Préstamo Konfío.* 2024. https://blog.kardmatch.com.mx/prestamo-konfio
- Clip. *Préstamos para negocios.* 2024. https://www.clip.mx/soluciones/prestamos-para-negocios
- Cronista. *Mercado Pago, Clip y Revolut superan a banca en zonas rurales MX.* 2024. https://www.cronista.com/mexico/finanzas-economia/asi-es-como-mercado-pago-clip-y-revolut-ya-superan-por-3-a-1-a-la-banca-en-las-zonas-rurales-de-mexico/
- DnF. *Recuperación restaurantes hasta 2024.* 2024. https://dnf.com.mx/proyectan-recuperacion-total-de-restaurantes-hasta-2024/
- El CEO. *Konfío gana terreno entre PYMEs en alza de tasas.* 2024. https://elceo.com/negocios/konfio-quiere-ganar-terreno-entre-pymes-en-medio-de-alza-de-tasas/
- El Economista. *Mundial agudizará déficit talento restaurantes.* 2026. https://www.eleconomista.com.mx/empresas/mundial-agudizara-deficit-talento-restaurantes-20260211-799365.html
- El Financiero. *Por ley deberían pagar a proveedores en 30 días máximo.* 2024. https://www.elfinanciero.com.mx/opinion/eduardo-torreblanca-jacques/por-ley-deberia-pagarse-a-proveedores-en-30-dias-maximo/
- El Imparcial. *Financiamientos 2026 para emprendedores en BC — créditos hasta 500 mil pesos.* 2026. https://www.elimparcial.com/tij/tijuana/2026/01/08/anuncian-financiamientos-2026-para-emprendedores-en-baja-california-con-creditos-de-hasta-500-mil-pesos/
- El Soberano. *Gobierno BC abrirá convocatorias financiamiento 2026.* 2026. https://elsoberano.mx/2026/01/08/gobierno-de-baja-california-abrira-convocatorias-de-financiamiento-2026-para-impulsar-el-emprendimiento/
- Financera. *Konfío opiniones.* 2024. https://financera.mx/opiniones/konfio/
- Financer. *Konfío entidad financiera.* 2024. https://financer.com/mx/entidad/konfio/
- Gobierno Baja California. *Convocatoria Emprende Empresarial 2025.* 2025. https://www.bajacalifornia.gob.mx/Documentos/economia/reactivabc/FONDO-EMPRENDE-EMPRESARIAL-PF/CONVOCATORIA%20EMPRENDE%20EMPRESARIAL%202025.pdf
- Gobierno Baja California. *Reglas de operación Tu Idea Tu Negocio 2025.* 2025. https://www.bajacalifornia.gob.mx/Documentos/economia/reactivabc/FONDO-TU-IDEA-TU-NEGOCIO/REGLAS%20DE%20OPERACI%C3%93N%20TU%20IDEA%20TU%20NEGOCIO%202025.pdf
- Hosteltur. *México presenta programa Crédito Ven a Comer para restaurantes.* 2024. https://www.hosteltur.com/lat/118850_mexico-presenta-programa-impulsar-micro-pequenos-restaurantes.html
- Indetec. *Apoyos NAFIN para PYMEs.* 2024. https://www.indetec.gob.mx/delivery?srv=0&sl=2&route=%2Fnoticias_interes%2FAPOYOS_QUE_OFRECE_NAFIN&ext=.pdf
- InfoBaja. *Programas de financiamiento para proyectos productivos en BC.* 2025. https://www.infobaja.info/anuncian-programas-de-financiamiento-para-impulsar-proyectos-productivos-en-bc/
- Konfío. *Sitio oficial.* 2024. https://konfio.mx
- Konfío. *Guía CAT.* 2024. https://konfio.mx/blog/soluciones-financieras/creditos/guia-para-entender-que-es-el-cat-y-como-funciona/
- Mi Bolsillo. *Programas BC enero 2026.* 2026. https://www.mibolsillo.com/tips/baja-california-sorprende-a-emprendedores-con-programas-de-financiamiento-sin-intereses-y-asi-puedes-aplicar-en-enero-20260110-0009.html
- OEM (El Heraldo de San Luis). *Programa Ven a Comer.* 2017+. https://oem.com.mx/tribunadesanluis/local/lanzan-programa-ven-a-comer-19320846
- Pagaste. *Crédito PyME Konfío.* 2024. https://pagaste.com/mx-pr-creditopymekonfio-p1/
- Rappi Merchants. *Opciones de financiamiento para abrir restaurantes en MX.* 2024. https://merchants.rappi.com/es-mx/opciones-financiamiento-abrir-restaurantes-mexico
- Rappi Merchants. *Financiamiento gubernamental restaurantes MX.* 2024. https://merchants.rappi.com/es-mx/financiamiento-gubernamental-restaurantes-mexico
- Solcredito. *Konfío prestamistas.* 2024. https://www.solcredito.es/prestamistas/konfio
- Startupeable. *Clip — perfil de empresa.* 2024. https://startupeable.com/clip/
- Tonalá Gob. *Nota programa Ven a Comer.* 2017+. https://tonala.gob.mx/portal/wp-content/uploads/2017/07/NOTA-PROGRAMA-VEN-A-COMER.pdf
- Trustpilot. *Konfío reseñas.* 2024. https://es.trustpilot.com/review/konfio.mx

**Capa talento — escuelas, formación, consultoría.**

- Borradopedia. *Universidad CESSA.* 2024. https://borradopedia.com/index.php?title=Universidad_CESSA
- CESSA Universidad. *Diplomado Restaurant Management online.* 2024. https://6005631.fs1.hubspotusercontent-na1.net/hubfs/6005631/CESSA%20descargables/Educaci%C3%B3n%20en%20l%C3%ADnea/FT_CESSA_DIPLOMADO_RESTAURANT_MANAGEMENT_ONLINE_2024.pdf
- CESSA Universidad. *Sitio oficial.* 2024. https://www.cessa.edu.mx/es/
- CETYS Universidad. *Diplomado en Administración de Restaurantes y Bares — Educon.* 2024. https://www.cetys.mx/educon/programas/diplomado-en-administracion-de-restaurantes-y-bares-e-room-2/
- Culinary Art School Tijuana. *Licenciatura en Arte Culinario.* 2024. https://culinary.mx/licenciatura-en-arte-culinario
- EMCEBAR. *Cursos para restaurantes.* 2024. https://www.emcebar.org.mx/cursos-restaurantes/
- Estudia MX. *Escuelas de gastronomía CDMX.* 2024. https://estudiamx.com/escuelas-de-gastronomia/ciudad-de-mexico/
- Factorial MX. *Formación de personal gastronómico.* 2024. https://factorial.mx/blog/fomacion-personal-gastronomico/
- Fatfish Consultores. *Consultoría para restaurantes.* 2024. https://www.fatfish.com.mx
- FoodShot. *Guía consultor alimentario y tarifas.* 2024. https://foodshot.ai/es/blog/guia-consultor-alimentario
- GCC Sistemas California. *Consultoría restaurantera.* 2024. https://gcc.sistemascalifornia.com
- Gaastro. *Plantilla ingeniería de menú.* 2024. https://www.gaastro.mx/product-page/ingenier%C3%ADa-de-men%C3%BA
- I-Soluciones. *Soft Restaurant 12 actualización ERP.* 2024. https://i-soluciones.com.mx/noticias/sistemas-erp/soft-restaurant-12-actualizacion-erp/
- SYCA Consultores. *Distribuidor SoftRestaurant Baja California Tijuana.* 2024. https://syca.com.mx/distribuidor-soft-restaurant/baja-california/tijuana/
- SYCA Consultores. *Capacitación SoftRestaurant.* 2024. https://syca.com.mx/distribuidor-soft-restaurant/capacitacion-soft-restaurant/
- YouTube — webinars de consultoría restaurantera MX. *Sistemas de costeo, ingeniería de menú, SOP.* 2024-2026. (Smart Kitchen Solutions y otros canales similares; sin URL única).

### Fuentes adicionales — Bloque D (capa de medios, comunidad y eventos)

**Podcasts y canales B2B operador.**

- Apple Podcasts. *Restaurantes Exitosos — Germán Debonis.* 2024. https://podcasts.apple.com/mx/podcast/restaurantes-exitosos/id1496938377
- Amazon Music. *El Podcast de Marketing para Restaurantes (MPR).* 2024. https://music.amazon.com/es-us/podcasts/1538b51e-7e9e-4419-83a7-80f7b38c0c9d/el-podcast-de-marketing-para-restaurantes
- Apple Podcasts. *MPR — episodio 232 sobre 2026.* 2024. https://podcasts.apple.com/gt/podcast/ep-232-2026-el-a%C3%B1o-en-que-los-restaurantes-tendr%C3%A1n/id1566724019
- Germán De Bonis. *Sitio oficial del consultor restaurantero.* 2024. https://germandebonis.com/podcast-2/
- Revfine. *14 podcasts excelentes para propietarios de restaurantes.* 2024. https://www.revfine.com/es/podcasts-de-restaurantes/
- YouTube — Marketing para Restaurantes (MPR). *Sistema de Costeo COMPLETO para Restaurantes.* 2024-2026. https://www.youtube.com/watch?v=ZAyZ2qgm52o
- YouTube — Marketing para Restaurantes (MPR). *Comunidad WhatsApp y plantillas.* 2024-2026. https://www.youtube.com/watch?v=SkX0DsLleUM
- YouTube — EMCEBAR Revista. *Cómo calcular el costo de la comida.* 2024. https://www.youtube.com/watch?v=GUaiWDkxGP4
- YouTube — Plan Financiero. *Cómo poner precios en un restaurante o negocio gastronómico.* 2024. https://www.youtube.com/watch?v=o78r9JziXgA
- YouTube — Tiendana. *Aprende a digitalizar tu restaurante 2026.* 2026. https://www.youtube.com/watch?v=gXAj7xFGFoQ
- Open.spotify. *MPR podcast.* 2024. https://open.spotify.com/episode/2IPM97wExFycBIQNvpGZnh

**Newsletters, publicaciones y portales B2B.**

- CANIRAC. *Boletín informativo nacional.* 2024. https://portal.canirac.org.mx/boletin/
- CANIRAC Michoacán. *Boletín informativo regional.* 2025. https://caniracmichoacan.org.mx
- CANIRAC Jalisco. *Comunicación y prensa para el gremio restaurantero.* 2024. https://caniracjalisco.org/comunicacion-y-prensa-2/
- AMR. *Crecimiento de la industria restaurantera 2025.* 2025. https://www.amr.org.mx/noticias.phtml?id=5928
- AbasturHub. *CANIRAC pronostica crecimiento de la industria 2024.* 2024. https://www.abasturhub.com/nota/restaurantes/canirac-pronostica-crecimiento-de-la-industria-en-2024
- Parrot Software. *Retos para restaurantes en México 2024.* 2024. https://parrotsoftware.com.mx/blog/retos-de-restaurantes-en-mexico-2024
- RAY blog. *12 plataformas de reservas para restaurantes.* 2024. https://blog.rayapp.io/es/reservas-sin-comisiones/12-plataformas-reservas-restaurantes/
- Startups LATAM. *Justo lanza Reservando.com.* 2024. https://startupslatam.com/justo-estrena-reservando-com-plataforma-que-revoluciona-las-reservas-gastronomicas/
- Restaurant Es / Exporrestaurantes. *Publicación sectorial.* 2024. https://es.scribd.com/document/738052124/Restaurant-Es
- Modelos de Plan de Negocios. *Industria de restaurantes en México.* 2024. https://modelosdeplandenegocios.com/blogs/news/industria-restaurantes-mexico
- Residente.mx (Monterrey). *Sección B2B para restauranteros.* 2024. https://residente.mx/b2b
- Unilever Food Solutions México. *Recomendaciones de blogs de chefs.* 2024. https://www.unileverfoodsolutions.com.mx/tendencias/inspiracion-para-chef/recomendaciones/10-paginas-de-blogueros.html

**Eventos B2B HORECA.**

- ABASTUR. *Sitio oficial 2026.* 2024. https://www.abastur.com
- ABASTUR — Cobertura 2025. *Sector hospitalidad.* 2025. https://fastcompany.mx/2025/08/22/abastur-sector-hospitalidad-prepararse-mundial-2025/
- ABASTUR — Cobertura prensa. *La feria que transformará la industria.* 2024. https://www.dineroenimagen.com/economia/abastur-2025-la-feria-que-transformara-la-industria-de-hospitalidad-en-mexico/179211
- CANIRAC. *Hospitalidad y tecnología — futuro de la gastronomía MX.* 2025. https://portal.canirac.org.mx/noticias/hospitalidad-y-tecnologia-impulsando-el-futuro-de-la-gastronomia-en-mexico/
- ICEX. *Costo de stand ABASTUR 2026.* 2025. https://www.icex.es/content/dam/icex/asset-generales/documentos/servicios/ayuda-y-financiacion/ayudas-icex/subcomisiones/2026/2026-3/industrias-creativas/fa-abastur-ciudad-de-mexico-mexico-afehc-2026.pdf
- Mexico Hospitality Expo. *Sitio oficial.* 2024. https://mexicohospitalityexpo.com
- Xnova International. *ANTAD & Alimentaria 2026.* 2024. https://www.xnovainternational.com/es/post/antad-alimentaria-2026-mexico-presents-latin-americas-largest-gastronomy-fair
- Infohoreca. *Calendario de eventos HORECA México.* 2024. https://www.infohoreca.com/eventos
- GDL Plaza Expo. *Mexico Hospitality Expo en calendario.* 2024. https://www.gdlplazaexpo.com/calendario-de-eventos/mexico-hospitality-expo
- Wansoft POS. *Presencia en ABASTUR 2025.* 2025. https://www.instagram.com/p/DN8sVsEjsFM/
- Wine Eat and Travel. *Vendimias Valle de Guadalupe 2025.* 2025. https://www.wineeatandtravel.com/valledeguadalupetravelblog/valledeguadalupe-harvest-festivals-2025
- MB Marco Beteta. *Eventos más conocidos de la Vendimia.* 2025. https://mbmarcobeteta.com/los-eventos-mas-conocidos-de-la-vendimia-en-valle-de-guadalupe/
- Diario Tijuana. *Tijuana me Encantas — Sabores del Noroeste.* 2025. https://diariotijuana.info/2025/12/todo-listo-para-degustar-la-birria-tijuanense-en-el-evento-tijuana-me-encantas-sabores-del-noroeste

**Comunidades y otros.**

- Facebook — Grupo Diplomado Grupo Klee. *Diplomado en Administración y Operación de Restaurantes.* 2024. https://www.facebook.com/groups/2005025979822465
- Facebook — InfoChannel videos. *25 años Soft Restaurant.* 2024. https://www.facebook.com/InfochannelMX/videos
- LinkedIn — Provino Baja California. *Perfil oficial.* 2024. https://mx.linkedin.com/in/provino-baja-california-b7206b73
- Vinetur. *Provino BC entrevista presidente.* 2024. https://www.vinetur.com/2024011177210/7-de-cada-10-vinicolas-de-provino-tienen-algun-tipo-de-programa-de-sustentabilidad-wenceslao-martinez-payan-presidente-de-provino-baja-california-mexico.html
- Tienda Provino. *Club del Vino.* 2024. https://tienda.clubprovino.mx
- ComparaSoftware. *Software para restaurantes — comparativas.* 2024. https://www.comparasoftware.com/software-para-restaurantes

*Lista parcial — se completa en bloques posteriores.*

---

## 17. Hipótesis abiertas y pendientes de validar

*Esta sección se va poblando conforme se redactan las demás. Hipótesis abiertas surgidas en el Bloque A:*

### Vacíos cuantitativos del segmento (Zenet eventualmente puede llenar)

- **% de restaurantes casual independientes en MX con recetarios formales documentados** — sin medir.
- **% del segmento con manuales operativos completos** — sin medir.
- **Distribución de herramientas para estandarización** (papel · Excel · software dedicado) en el segmento — sin medir.
- **Correlación cuantificada entre nivel de estandarización y supervivencia del negocio** — sin estudio publicado.
- **Tiempo promedio que el dueño-operador dedica al cierre y conciliación** por sucursal — sin medir.
- **% real de cocineros mexicanos que migran a Estados Unidos por año** y desglose regional — sin cifra cuantitativa segmentada por entidad.
- **% de operadores casual independiente 4-5 sucursales en TJ/BC que opera centro de distribución propio** — sin medir. Cualitativamente confirmado en campo (Alma Verde y otros), pero falta cuantificación del patrón en BC.

### Anclajes cualitativos no respaldables públicamente

- **"Vida promedio del restaurante: 7 años"** atribuido a Victor Murguia (business context). El dato del UABC (61% fracaso en 3 años) calibra el orden de magnitud pero es de 1996-1999 y se mantiene como anclaje cualitativo, no benchmark contemporáneo respaldado.

### Pendientes de bloques posteriores (que se cerrarán al redactar)

- Apetito real de Soft Restaurant / National Soft para integraciones bilaterales con SaaS B2B (sección 6 lo nombra como apuesta de largo plazo; conversación directa pendiente).
- Penetración real de cada POS en restaurantes específicos de Tijuana — sin breakdown público.
- Apetito de Distribuidora La Canasta para partnership co-marketing con Zenet (sección 14).
- Apetito de CANIRAC Tijuana (Aguilar, Nolasco) para colaboración (sección 14).
- Restaurantes específicos del Valle / TJ que serían early adopters identificables por nombre (sección 14).

### Adicionales surgidas en Bloque B

- **% real de operadores casual independientes en TJ que cruzan a USA por insumos** vs los que se quedan exclusivamente con distribuidores nacionales — sin cifra publicada, validable solo con field research.
- **DoorDash MX entry timing** — DoorDash domina en USA y no opera en MX a 2026. Si decide entrar (especialmente vía frontera norte), cambia la dinámica de agregadores. Vigilancia activa.
- **Geek Greens y Microgreens Tijuana como touchpoints de field research** — contactos públicos accionables vía DM/WhatsApp para entender la realidad WhatsApp-nativa del proveedor especializado.
- **Apetito de Mantilla / National Soft** para conversación bilateral sobre integración Zenet — solo se valida con outreach directo, no con desk research.
- **Penetración de Loyverse vs Square vs Soft Restaurant en TJ específicamente** — sin breakdown geográfico publicado. Hipótesis a validar: cuáles son sub-perfiles de operador que usan cada uno.
- **Movimiento competitivo de Soft Restaurant hacia capa cognitiva BoH** — vigilancia explícita. Si lanza módulo de estandarización + interpretación de costo antes de que Zenet capture share, el corredor estratégico se cierra parcialmente.
- **Costos reales de Deliverect en MX** — no publicados, requieren cotización directa. Relevante para dimensionar la "mensajería de Zenet vs Deliverect" en el segmento donde ambos coexisten.

### Adicionales surgidas en Bloque C

- **Apetito real de Aguilar Santuario y Nolasco Cruz (CANIRAC TJ y BC)** para colaboración con Zenet — solo se valida con outreach directo. Bootcamp GastronomIA con 203 restaurantes participantes confirma audiencia movilizable, pero el apetito de la presidencia para asociarse con un SaaS específico es hipótesis abierta.
- **Apetito de CETYS Educon para partnership educativo.** Posibilidad de incluir Zenet como caso de estudio o módulo digital en el Diplomado en Administración de Restaurantes y Bares — sin precedente público de partnership similar.
- **Apetito de SYCA Consultores Tijuana para conversación.** Como distribuidor SoftRestaurant + consultoría, SYCA es ejecutor local lógico si Zenet logra partnership con National Soft, o competidor adyacente si no — ambos escenarios piden contacto.
- **Apetito de Anna Palazuelos, Victor Murguia, Algira Garzón, Carlos Sánchez** para co-marketing, referencia continuada o programas conjuntos. Validaron problema y solución en abril 2026; el siguiente paso (testimonios públicos, casos de éxito conjuntos) es hipótesis abierta.
- **Tamaño cuantitativo del mercado de consultoría operativa restaurantera MX** — sin estudio publicado. Tarifas globales sirven como referencia (USD 75-300/hora; USD 2K-25K/proyecto), pero la calibración a MX requiere field research o entrevistas con consultoras.
- **Penetración real del Distintivo H** en casual independiente Tijuana / BC — sin estadística desagregada. AMR sugiere adopción limitada en independientes vs hoteles y cadenas.
- **% de operadores BC que efectivamente acceden a NAFIN "Ven a Comer"** — sin breakdown público. La fricción reportada del programa (banco intermediario que no promueve activamente) sugiere bajo aprovechamiento, pero sin cuantificación.
- **Cuántos restaurantes BC tomaron crédito en programas estatales 2024-2025** — sin desglose por giro publicado más allá del agregado de $68M canalizados.
- **Apetito real de Mantilla / National Soft** para conversación bilateral sobre integración Zenet — solo se valida con outreach directo, no con desk research.

### Adicionales surgidas en Bloque D

- **Apetito de Germán Debonis (Restaurantes Exitosos)** para auspicio Zenet, episodio especial sobre estandarización con casos validados, o promoción cruzada — outreach directo necesario para validar.
- **Apetito de MPR** (El Podcast de Marketing para Restaurantes) para los mismos formatos. Su comunidad WhatsApp activa puede ser canal de prueba para early access o programa beta.
- **¿Vale la pena que Zenet construya medio editorial B2B propio para BC** (newsletter, podcast, contenido editorial regional) o esperar a que el segmento alcance masa crítica? El gap está identificado (no existe Residente.mx para BC), pero la decisión de construirlo vs solo aprovechar canales existentes es estratégica.
- **ROI real de exponer en ABASTUR** — sin casos públicos de proveedores SaaS B2B con métricas declaradas. Recomendación de **visitar antes de exponer** sigue siendo la apuesta segura para 2026, decidir exponer en 2027.
- **Comunidades cerradas BC en FB / WhatsApp / Slack** — exigen field research dentro de las plataformas (FB groups search, invitaciones de WhatsApp). No identificadas en desk research público.
- **Eventos cross-border SD ↔ TJ específicos para HORECA** — espacio vacío. ¿Vale la pena que Zenet patrocine o cree uno cuando tenga 20+ clientes paying en BC? Hipótesis de creación de evento como táctica de awareness.

### Adicionales surgidas en Bloque E (cierre estratégico)

**Validación de las 5 apuestas estratégicas centrales** (sección 12.3) — cada una con métrica de éxito declarada que requiere validación con campo:

- **Apuesta 1 (mensajería core):** ¿≥80% de los primeros 10 operadores en discovery reconocen al menos un síntoma como propio sin que Zenet lo sugiera primero?
- **Apuesta 2 (categoría nueva):** ¿En conversaciones de fundraising, los inversionistas preguntan "¿por qué nadie ha hecho esto antes en LATAM?" en lugar de "¿qué los diferencia de Toast?"?
- **Apuesta 3 (wedge prioritario):** ¿≥60% de los primeros 20 clientes paying son grupos en perfil 3-5 sucursales con CD o en transición?
- **Apuesta 4 (arquitectura platform-ready):** ¿Año 2 puede demostrar técnicamente que la data acumulada alimenta un modelo de underwriting con dimensiones que ningún fintech tradicional ve?
- **Apuesta 5 (canal #1):** ¿Al cumplir 6 meses de outreach activo, al menos uno de los tres canales (La Canasta, CANIRAC TJ, consultores) ha generado ≥2 leads calificados?

**Activación del platform play — triggers cuantitativos** (sección 15.4):

- **Marketplace de proveedores — trigger Año 3-4.** ¿Cuándo 100+ clientes paying piden proveedores recomendados espontáneamente?
- **Fintech para restaurantes — trigger Año 4-5.** ¿Cuándo 200+ clientes con 12+ meses de histórico bajo Zenet permiten underwriting con dimensiones diferenciadas?
- **Logística y last-mile — trigger Año 5-6.** ¿Cuándo % significativo de clientes paying tienen CD operativo?
- **Fintech para proveedores — trigger Año 6-7.** ¿Cuándo el marketplace tiene volumen suficiente?

**Decisiones de relación con consultores validados** (sección 14.3):

- **Murguia como advisor formal con equity simbólico** — apuesta razonable pero requiere conversación específica sobre términos.
- **Programa de referidos formalizado** con compensación clara para Palazuelos, Murguia, Garzón, Sánchez — pendiente de diseño.
- **Caso de estudio conjunto consultor + Zenet** cuando haya 5-10 clientes paying — formato y consultor a elegir.

**Vigilancia activa de los 5 riesgos competitivos** (sección 12.4):

- Soft Restaurant moviéndose hacia BoH cognitivo (FoodBot evolución, comunicaciones National Soft).
- DoorDash MX entry (especialmente vía frontera norte).
- POS mexicano AI-first / API-first nuevo entrante.
- Consolidación PayFacs (Clip / Mercado Pago) hacia BoH cognitivo.
- Cambio regulatorio en agregadores o trabajo (tope federal de comisiones, propinas en salario mínimo).

*Lista cerrada para v1.0 del documento. Se reabrirá en versiones posteriores cuando aparezcan nuevos hallazgos o se cierren hipótesis vigentes.*
