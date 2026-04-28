---
name: Reglas de Redacción
description: La mecánica de la escritura de Zenet — gramática, estructura, puntuación, formato, números y reglas de español. La capa técnica del sistema voice-and-tone.
type: voice-and-tone
last_updated: 2026-04-28
status: active
version: 1.0
owner: Alan Bahena
---

# Reglas de Redacción

> Las reglas no escriben buenos textos. Pero los buenos textos respetan reglas.

Este documento define la mecánica de la escritura de Zenet: cómo se construyen oraciones, cómo se puntúa, cómo se formatean números y fechas, y qué reglas específicas del español aplican.

Es la capa técnica del sistema voice-and-tone. Para los principios de voz, ver `voz-y-tono.md`. Para vocabulario y términos, ver `vocabulario.md`.

---

## 1. Cómo usar este documento

Este documento se consulta cuando hay duda mecánica — *"¿el em-dash lleva espacios?"*, *"¿se escribe `1,500 MXN` o `$1,500.00`?"*, *"¿coma antes de y?"*. No se memoriza. Se aplica.

**Tres formas de usarlo:**

- **Antes de escribir** — leer la sección 7 (longitud por superficie) para calibrar el tamaño del texto que vas a producir.
- **Mientras escribes** — consultar secciones específicas cuando dudes (puntuación, números, etc.).
- **Antes de publicar** — pasar la pieza por la sección 8 (checklist final).

**Boundaries con los documentos hermanos:**

- Si la duda es de **voz** (qué postura tomamos): ver `voz-y-tono.md`.
- Si la duda es de **palabras** (qué término usar): ver `vocabulario.md`.
- Si la duda es de **mecánica** (cómo se construye, formatea, puntúa): este documento.

---

## 2. Estructura de oraciones y párrafos

### 2.1 Largo de oraciones

| Recomendación | Detalle |
|---|---|
| **Objetivo** | 15-25 palabras |
| **Máximo recomendado** | 30 palabras |
| **Si pasa de 30** | Partir en dos oraciones. Casi siempre se puede. |

**Test rápido:** si una oración tiene "y", "pero", "además", "el cual", "que", probablemente puede partirse en dos sin perder sentido.

### 2.2 Una idea por oración

Operacionaliza el principio 5 de `voz-y-tono.md`. La regla concreta:

> Cuando una oración intenta cargar dos ideas, ambas pierden.

**Cómo aplicar:**

- Identifica el verbo principal. ¿Hay solo uno? Si hay dos verbos coordinados que cargan ideas distintas, parte la oración.
- Identifica el sujeto. ¿Cambia a la mitad de la oración? Si sí, parte.
- Las cláusulas subordinadas (que, donde, cuando) son OK si son cortas. Si la subordinada tiene más de 10 palabras, partir.

✅ *"Zenet analiza tus datos. Identifica desviaciones. Te dice qué corregir."*
❌ *"Zenet analiza tus datos operativos identificando desviaciones que pueden corregirse, lo cual te ahorra tiempo y reduce mermas."*

### 2.3 Voz activa

Operacionaliza el principio 4 de `voz-y-tono.md`. La regla concreta:

| Marcador de voz pasiva | Cómo se reescribe |
|---|---|
| "Se ha + participio" | Identifica al sujeto real. Ponlo primero. *"Se ha detectado..."* → *"Zenet detectó..."* |
| "Es/son + participio + por" | Cambia el orden. *"El error es generado por X"* → *"X genera el error."* |
| "Fue/fueron + participio" | Mismo patrón. *"Fue identificado..."* → *"Identificamos..."* o *"Zenet identificó..."* |

**Excepción documentada:** cuando atribuir a alguien crearía vergüenza para el operador (*"el inventario que tú no cuadraste..."*), la voz pasiva puede usarse como cortesía. Pero es la excepción, nunca la regla.

### 2.4 Sujeto temprano

El español permite mucha flexibilidad de orden de palabras. Pero la claridad demanda que el sujeto aparezca temprano.

✅ *"Zenet detectó una desviación de 18% en las mermas de res."*
❌ *"En las mermas de res, durante la última semana, una desviación de 18% fue detectada por Zenet."*

### 2.5 Evitar nominalizaciones

Las nominalizaciones (verbo convertido en sustantivo) inflan el texto sin agregar información.

| Nominalización (peor) | Verbo (mejor) |
|---|---|
| "La implementación de Zenet permite..." | "Implementar Zenet permite..." |
| "La realización del inventario tomó..." | "Hacer el inventario tomó..." |
| "La estandarización de procesos genera..." | "Estandarizar procesos genera..." |

**Excepción:** *"Estandarización"* como concepto/categoría sí se sustantiva (es un concepto Zenet). El criterio es: si el sustantivo nombra un concepto, mantenerlo; si solo nombra una acción, preferir el verbo.

### 2.6 Largo de párrafos

| Recomendación | Detalle |
|---|---|
| **Objetivo** | 2-4 oraciones |
| **Máximo recomendado** | 6 oraciones |
| **Si pasa de 6** | Partir el párrafo. La idea mayor casi siempre tiene sub-ideas. |

Cada párrafo debe tener **una idea principal** (la primera oración suele cargarla). Si pasa de 4 oraciones sin que aparezca una idea distinta, está bien. Si aparece una idea distinta, párrafo nuevo.

---

## 3. Reglas de español

Zenet escribe en español neutro latinoamericano con anclaje mexicano. Las reglas en esta sección aplican a todo contenido en español.

### 3.1 Tratamiento (tú/usted)

**Regla operativa:** "tú" por defecto en todas las superficies excepto legales y prensa. (Definido en `vocabulario.md` sección 7.)

**Implicaciones gramaticales del "tú":**

- Conjugaciones de segunda persona singular: *tú tienes*, *tú haces*, *tú decides*. No *vos tenés*.
- Imperativos de tú: *haz*, *ten*, *decide*. No *hagas*, *tengas* (negativos sí: *no hagas*).
- Posesivos: *tu* / *tus*, no *vuestro*.
- Plural: *ustedes* siempre. Conjugaciones de tercera persona plural: *ustedes tienen*, *ustedes deciden*.

### 3.2 Pronombres y leísmo/loísmo

En el español mexicano, el complemento directo masculino se expresa con "lo" (no "le"). Zenet sigue esta convención.

| ✅ Mexicano (preferido) | ❌ Leísmo (peninsular) |
|---|---|
| "Lo encontré" (a Juan) | "Le encontré" (a Juan) |
| "Lo invité" (al cliente) | "Le invité" (al cliente) |

Para complemento indirecto, "le" funciona normal: *"Le di el reporte."*

### 3.3 Subjuntivo en condicionales

Error común: confundir el condicional con el subjuntivo en oraciones del tipo "si + condición".

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| "Si tuviera más tiempo, lo haría." | "Si tendría más tiempo, lo haría." |
| "Si fuera fácil, ya lo habrían resuelto." | "Si sería fácil, ya lo habrían resuelto." |

**Regla:** "Si + imperfecto del subjuntivo (-ra/-se) + condicional simple."

### 3.4 Gerundio

El español usa el gerundio mucho menos que el inglés. Evitar el gerundio cuando el español pide otra construcción.

| ❌ Gerundio incorrecto | ✅ Construcción correcta |
|---|---|
| "Una recomendación informando al usuario..." | "Una recomendación que informa al usuario..." |
| "Tomó la decisión, comprando los insumos al día siguiente." | "Tomó la decisión y compró los insumos al día siguiente." |

**Regla mental:** el gerundio español es solo para acciones simultáneas o continuas (*"Estoy escribiendo"*, *"Caminando, llegamos al mercado"*). No es adjetivo ni causal.

### 3.5 Anglicismos

Minimizar anglicismos cuando exista una palabra en español de uso común. Las decisiones específicas viven en `vocabulario.md` sección 6. Regla general: si la palabra existe y suena natural en español, usarla. Si la versión en inglés es más reconocida en industria, mantener.

### 3.6 Acentuación

Seguir las reglas de la RAE (Real Academia Española). Tres recordatorios prácticos:

- **Sí lleva tilde:** *sólo* (cuando significa "solamente"), *éste / ése / aquél* (cuando son pronombres). NOTA: la RAE consideró estas tildes opcionales desde 2010, pero Zenet las **omite** para alinearse con la convención editorial moderna.
- **No lleva tilde:** *fue, vio, dio, fui* (monosílabos sin tilde diacrítica).
- **Tildes diacríticas que sí mantenemos:** *él* (pronombre) vs *el* (artículo); *té* (bebida) vs *te* (pronombre); *sí* (afirmación) vs *si* (condicional); *qué/cómo/dónde/cuándo* en preguntas e interrogaciones indirectas.

### 3.7 Diminutivos

Aceptables en moderación. No abusar.

✅ *"Solo unos minutitos."* (En conversación, redes casuales.)
❌ *"Te traemos una appcita súper fácil de usar."* (Empalagoso, no Zenet.)

---

## 4. Puntuación, mayúsculas y formato visual

### 4.1 Comas

| Regla | Detalle |
|---|---|
| **Sin coma de Oxford** | Lista en español: "A, B y C" — no "A, B, y C". |
| **Coma antes de "y/o/pero"** | Solo cuando cambia el sujeto: *"Zenet detecta el problema, y tú decides qué hacer."* |
| **Coma para vocativos** | *"Hola, Carla,"* — siempre con comas alrededor del nombre. |
| **Coma para incisos** | Cláusulas no esenciales van entre comas: *"Zenet, basado en datos reales, sugiere..."*. |
| **Sin comas innecesarias** | No partir sujeto y verbo con coma: ❌ *"Zenet, detectó una desviación."* |

### 4.2 Punto

- Punto al final de toda oración declarativa.
- **Sin punto al final de títulos.**
- **Sin punto al final de items en bullets** — excepto si los items son oraciones completas.
- Después de punto, siempre mayúscula.

### 4.3 Signos de interrogación y exclamación

**Siempre con apertura ¿? ¡!** — es español, no inglés.

✅ *"¿Cuántas sucursales tienes?"*
❌ *"Cuántas sucursales tienes?"*

✅ *"¡Bienvenido a Zenet!"*
❌ *"Bienvenido a Zenet!"*

**Recordatorio:** Zenet usa exclamaciones con extrema moderación (es parte del principio "sin hype"). Cuando se usen, los signos van completos.

### 4.4 Punto y coma

- Para separar elementos complejos en una serie cuando ya hay comas internas.
- Para frases independientes pero conectadas conceptualmente.
- Usar con moderación — si el texto pide muchos `;`, probablemente las oraciones son muy largas.

### 4.5 Dos puntos

- Antes de listas, citas, explicaciones, ejemplos.
- En español, **después de dos puntos va minúscula** (a menos que inicie cita o nombre propio).

✅ *"La regla es simple: la voz no cambia, el tono sí."*
❌ *"La regla es simple: La voz no cambia..."*

### 4.6 Em-dash (—)

- Usar el em-dash real (—), no doble guion (--), no guion corto (-).
- **Sin espacios alrededor** (convención española): *"Zenet—el sistema operativo del back-of-house—"*
  - **Nota:** muchas guías españolas usan espacios. Zenet usa **sin espacios** por consistencia tipográfica con la web moderna y por ahorrar caracteres en superficies cortas.
- Para inserciones parentéticas, énfasis, o cambios de dirección.

✅ *"Zenet detectó una desviación—18% por encima del promedio."*

### 4.7 Comillas

- **Tipográficas dobles (" ")** para citas y énfasis: *"Esto es lo que dijo el chef."*
- **Tipográficas simples (' ')** para citas dentro de citas.
- **No** comillas angulares (« ») — formales y antiguas para nuestro estilo.
- **No** comillas rectas (`"..."`) — son de mecanografía vieja, evitar.

### 4.8 Elipsis (...)

- Tres puntos juntos, sin más. No espacio antes, espacio después.
- Usar con moderación. La elipsis suspende el pensamiento — si el pensamiento debe terminar, terminarlo.

### 4.9 Mayúsculas y minúsculas

| Regla | Aplicación |
|---|---|
| **Inicio de oración** | Mayúscula. |
| **Nombres propios y marcas** | Mayúscula. *Zenet, BIOWELT, Audi.* |
| **Días de la semana** | **Minúscula** en español. *"Lunes pasado..."* es anglicismo. ✅ *"el lunes pasado..."*. |
| **Meses** | **Minúscula**. ✅ *"abril de 2026"*. |
| **Idiomas y gentilicios** | **Minúscula**. *"español, mexicano, francés"*. |
| **Cargos y títulos** | **Minúscula**. *"el director, la chef ejecutiva, el gerente"*. (Diferente del inglés.) |
| **Después de dos puntos** | **Minúscula**, salvo cita o nombre propio. |
| **Acrónimos** | Mayúsculas (POS, ERP, IA), salvo si están integrados como palabra (láser, sida). |
| **Énfasis CON MAYÚSCULAS** | **NUNCA** en producto o marketing serio. ✅ Aceptable raramente en redes sociales — pero no es estilo Zenet. |

### 4.10 Negritas, cursivas, subrayado

| Recurso | Cuándo usarlo | Cuándo evitarlo |
|---|---|---|
| **Negritas** | Para énfasis estructural en textos largos (clave de un concepto). Para resaltar el dato central de una recomendación. | Si todo es negrita, nada es negrita. Sin abusar. |
| *Cursivas* | Para títulos de obras, libros, films. Para palabras en otro idioma (*mise en place*). Para énfasis suave (alternativa a negritas). | Para énfasis emocional repetido — se siente teatral. |
| Subrayado | **Solo para hipervínculos.** | Nunca para énfasis — confunde con enlaces. |

---

## 5. Números, unidades, moneda y fechas

### 5.1 Números

| Regla | Aplicación |
|---|---|
| **0-9** | En palabras: cero, uno, dos, ..., nueve. |
| **10+** | En cifras: 10, 11, 25, 100, 1,500. |
| **Excepción** | Cuando el número es central al mensaje (KPIs, datos), siempre en cifras: *"5 horas a la semana"* > *"cinco horas..."*. |
| **Decimal** | Punto: 15.5, 4.7. |
| **Miles** | Coma: 1,500; 1,500,000. |
| **Decimales innecesarios** | Omitir: 15, no 15.0. |
| **Rangos** | Guion corto: *"5-10 horas"*. |

### 5.2 Porcentajes

- Siempre con %, **sin espacio**: 18%, no 18 %.
- Decimales solo cuando aporten valor: 4.7% sí, 18.0% no.
- Reducciones/aumentos: signo +/- cuando ayude a leer: *"-3% en mermas"*, *"+18% esta semana"*.

### 5.3 Unidades de medida

- **Sistema métrico siempre** (kg, g, ml, L, °C). Sin equivalencias en sistema imperial.
- **Sin punto después** (kg, no kg.) excepto fin de oración.
- **Espacio entre número y unidad**: 5 kg, 250 ml, 30 °C.
- **Excepciones sin espacio**: porcentajes (18%), grados sin sistema (25°).
- **Plurales no se pluralizan**: 5 kg, no 5 kgs.

### 5.4 Moneda

**Pesos mexicanos: `$1,500 MXN`**

| Detalle | Aplicación |
|---|---|
| Símbolo primero, código al final | `$1,500 MXN` |
| Sin espacio entre $ y número | `$1,500`, no `$ 1,500` |
| Sin decimales para enteros | `$1,500`, no `$1,500.00` |
| Con decimales para precisión real | `$1,500.75` |
| Espacio antes del código de moneda | `$1,500 MXN`, no `$1,500MXN` |

**Otras monedas:** `$100 USD`, `€100`, `£100`. Misma lógica que MXN.

**Cuándo omitir el código MXN:**
- En interfaces de producto donde el contexto del usuario es 100% mexicano.
- En contenido para audiencia exclusivamente mexicana cuando ya quedó claro el contexto.

**Cuándo incluir el código MXN siempre:**
- Comunicación para audiencia mixta (LATAM, mercado internacional).
- Pricing pages, propuestas comerciales, contratos.
- Comparaciones con competencia internacional.

### 5.5 Fechas

| Contexto | Formato |
|---|---|
| **Marketing y contenido (formal)** | "28 de abril de 2026" |
| **Producto y UI (compacto)** | "28/04/2026" |
| **Logs y técnicos** | "2026-04-28" (ISO 8601) |
| **Día de la semana** | "lunes 28 de abril" — sin coma. *"Lunes, 28 de abril"* es anglicismo. |
| **Meses** | minúsculas siempre |

### 5.6 Horas

| Contexto | Formato |
|---|---|
| **Customer-facing** (marketing, producto) | 12h con AM/PM: *"8:30 PM"* |
| **Técnico/operativo** (logs, dashboards de operación) | 24h: *"20:30"* |
| **Espaciado AM/PM** | Espacio: *"2:30 PM"*, no *"2:30PM"* |
| **Mayúsculas** | AM y PM (no am/pm) en convención mexicana |

---

## 6. Listas, títulos y CTAs

### 6.1 Listas (numeradas vs bullets)

| Tipo | Cuándo usar |
|---|---|
| **Numeradas (1, 2, 3)** | Secuencias, pasos, rankings, top 5. Cuando el orden importa. |
| **Bullets (•)** | Items no-secuenciales, atributos, beneficios. Cuando el orden no importa. |

**Reglas comunes:**

- **Estructura paralela:** todos los items empiezan igual (todos verbo, todos sustantivo, todos pregunta).
- **Capitalización:** primera palabra del item con mayúscula.
- **Puntuación al final del item:**
  - Si los items son oraciones completas → punto al final.
  - Si los items son fragmentos → sin puntuación al final.

✅ Items oraciones completas:
> 1. Zenet revisa tu inventario todos los días.
> 2. Zenet detecta desviaciones antes de que se vuelvan problema.
> 3. Zenet sugiere acciones concretas, con su porqué.

✅ Items fragmentos:
> - Recetas estandarizadas
> - Inventarios estructurados
> - Costos interpretados

### 6.2 Títulos y encabezados

| Regla | Aplicación |
|---|---|
| **Sentence case** | Solo primera palabra y nombres propios en mayúscula. Nunca title case en inglés. |
| **Sin punto al final** | "Cómo funciona Zenet" — no "Cómo funciona Zenet." |
| **Largo títulos de página/post** | ≤ 70 caracteres |
| **Largo subtítulos** | ≤ 100 caracteres |
| **Jerarquía** | H1 > H2 > H3 > H4. Un solo H1 por documento. |
| **Puntuación interna** | OK si aporta (¿pregunta?, ¡exclamación!) — pero preferir tono declarativo. |

### 6.3 CTAs (llamados a la acción)

| Regla | Aplicación |
|---|---|
| **Verbo primero** | Imperativo o infinitivo. *"Empezar el setup"*, *"Probar Zenet"*. |
| **Cortos** | 2-5 palabras idealmente. |
| **Específicos** | *"Empezar el setup"* > *"Empezar"*. |
| **Suaves** | *"Hablemos"* > *"¡Compra ya!"*. |
| **Sin signos de exclamación** | *"Probar Zenet"* — no *"¡Probar Zenet!"*. |

**Patrones recomendados:**

- *Empezar [acción específica]*
- *Probar Zenet*
- *Hablemos*
- *Ver cómo funciona*
- *Conocer la historia*
- *Solicitar demo*

**Patrones a evitar (todos hype):**

- *¡Click aquí!*
- *¡No te lo pierdas!*
- *¡Apúrate!*
- *¡Descubre más!*

---

## 7. Longitud por superficie

Cada superficie tiene un tamaño óptimo. Esta tabla es referencia, no ley — pero alejarse mucho rara vez ayuda.

| Superficie | Largo recomendado |
|---|---|
| Tweet / X | ~200 caracteres (máximo 280) |
| LinkedIn (post) | 1,300-1,500 caracteres (sweet spot del algoritmo) |
| Instagram (caption) | 125-150 caracteres antes del *"ver más"* |
| Email — asunto | 30-50 caracteres (~5-7 palabras) |
| Email — preview text | 50-100 caracteres |
| Email — cuerpo (cold) | 75-150 palabras |
| Email — cuerpo (newsletter) | 250-500 palabras |
| Hero copy (landing) — headline | 8-12 palabras |
| Hero copy (landing) — subheadline | 15-25 palabras |
| Section copy (landing) — bloque | 50-100 palabras |
| Button label / CTA | 2-5 palabras |
| Tooltip / inline help | 1-2 oraciones cortas |
| Error message | 1-2 oraciones, con acción |
| Empty state | 2-4 oraciones |
| Long-form (blog/artículo) | 800-2,500 palabras |
| Caso de estudio | 600-1,200 palabras |
| Press release | 300-500 palabras |
| Bio del fundador | 50-100 palabras |
| About Us page | 800-1,500 palabras |

---

## 8. Checklist final antes de publicar

Antes de publicar cualquier pieza, pasarla por estos chequeos en orden. Cualquier "no" dispara una revisión.

### Voz (de `voz-y-tono.md`)

- [ ] ¿Pasa los 9 principios de voz?
- [ ] ¿Está en el tono correcto para la superficie donde va?
- [ ] ¿Se entiende sin esfuerzo en su contexto?

### Vocabulario (de `vocabulario.md`)

- [ ] ¿Usé palabras del operador (no tech, no hype)?
- [ ] ¿"Zenet" escrita correctamente (Z mayúscula, resto minúsculas)?
- [ ] ¿Sin nombrar al "agente" o al "asistente" como entidad separada — solo Zenet hace cosas?
- [ ] ¿Sin superlativos prohibidos (increíble, único, garantizado, etc.)?

### Mecánica (este documento)

- [ ] ¿Voz activa donde aplica?
- [ ] ¿Una idea por oración (oraciones <30 palabras)?
- [ ] ¿Sentence case en títulos y subtítulos?
- [ ] ¿Signos de apertura ¿? ¡! cuando aplica?
- [ ] ¿Números, fechas, moneda en formato Zenet?
- [ ] ¿Sin emoji innecesario (cero en producto y errores; máx 1-2 en social)?
- [ ] ¿Días, meses, cargos en minúscula?

### Tests narrativos

- [ ] ¿Sería embarazoso si Anna Palazuelos lo leyera? *(test del consultor sabio)*
- [ ] ¿Suena como Zenet, o suena como otra marca de B2B SaaS?
- [ ] ¿Cumple el principio "si no se entiende, fallamos"?

Si los chequeos pasan, se publica. Si alguno falla, se reescribe — no se publica con asterisco.

---

## Notas

- **Origen.** Este documento operacionaliza la mecánica que sostiene la voz declarada en `voz-y-tono.md` y las palabras definidas en `vocabulario.md`. Las decisiones de formato (decimales, moneda, fechas, horas) fueron tomadas considerando convención mexicana de uso comercial común.
- **Idioma base.** Español neutro latinoamericano con anclaje mexicano. Cuando Zenet expanda a otros mercados, las reglas regionales específicas se anexarán como secciones por país (no se reemplazará el documento base).
- **Inglés.** Cuando Zenet eventualmente comunique en inglés, este documento se adaptará a las reglas mecánicas del inglés (no se traducirán mecánicamente). Las reglas en inglés vivirán en un documento separado.
- **Documento vivo.** Las reglas se revisan cuando: (1) un patrón nuevo aparece consistentemente en la comunicación de la marca, (2) un cliente o agencia reporta sistemáticamente confusión por una regla específica, (3) la RAE o las convenciones editoriales mexicanas cambian alguna norma relevante.
- **Documentos hermanos.** `voz-y-tono.md` (los principios), `vocabulario.md` (las palabras), y este documento (la mecánica) forman juntos el sistema voice-and-tone de Zenet.
