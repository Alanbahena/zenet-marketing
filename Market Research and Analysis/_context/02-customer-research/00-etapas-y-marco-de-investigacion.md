---
name: Etapas y marco de investigación de cliente
description: Marco de gobernanza de la sección 02-customer-research. Define las 5 etapas de madurez de evidencia, la etapa actual, las convenciones de marcado de fuentes y la disciplina de transición entre etapas.
type: research-framework
last_updated: 2026-05-03
status: active
version: 1.0
owner: Alan Bahena
---

# Etapas y marco de investigación de cliente

## 1. Propósito de la sección `02-customer-research/`

### 1.1 Qué responde

Esta sección es la fuente de verdad sobre **qué contrata el cliente, cómo decide, qué teme y cómo lo dice** — para que toda decisión de mensajería, copy, ventas, onboarding y producto se sostenga en evidencia y no en intuición.

### 1.2 Diferencia frente a `01-industry-and-market/`

- **`01-industry-and-market/`** responde "cuál es el mercado y dónde está nuestro cliente dentro de él" — vista macro y estructural (industria, tamaño, segmentos, geografía, regulatorio, ICP arquetípico).
- **`02-customer-research/`** responde "qué pasa dentro de la cabeza y la operación de ese cliente cuando considera, compra y adopta Zenet" — vista micro y conductual.

01 te dice que existe Carlos Mendoza. 02 te dice qué dijo Carlos cuando le mostraste Zenet, qué te objetó, qué lo hizo seguir y qué lo hizo dudar.

### 1.3 Qué pregunta responde cada doc y quién la consume

| Pregunta | Doc que la responde | Consumidor principal |
|---|---|---|
| ¿Qué evidencia tenemos hoy y cómo la conseguimos? | `01-metodologia-y-fuentes.md` | Cualquiera que vaya a usar la sección |
| ¿Qué *job* contrata el operador cuando paga Zenet? | `02-jobs-to-be-done.md` | Producto, mensajería, posicionamiento |
| ¿Cuál es el dolor real y cómo lo resuelve hoy sin nosotros? | `03-pains-y-workarounds.md` | Copy, landing, founder posts |
| ¿Cómo se entera, evalúa y se convence de probar? | `04-customer-journey-detallado.md` | Growth, canales, content |
| ¿Quién decide, quién veta, quién paga, quién implementa? | `05-buying-process-y-criterios-de-decision.md` | Ventas, sales enablement |
| ¿Qué objeción aparece y qué la desactiva? | `06-objeciones-y-fricciones-de-adopcion.md` | FAQ, ventas, onboarding |
| ¿Cómo habla literalmente del problema y de la solución? | `07-voice-of-customer.md` | Todo el copy diario |

### 1.4 Qué NO es esta sección

- **No es un repositorio de notas crudas de Notion.** Esas viven en Notion. Aquí entran los hallazgos sintetizados con trazabilidad de fuente.
- **No es planeación de campañas, growth ni tácticas.** Eso pertenece a los departamentos de Email/CRM, SEO/Content y Social Media.
- **No es análisis competitivo.** Eso vivirá en `03-competitive-analysis/` cuando se construya.
- **No es estrategia de producto.** Eso vivirá en Product Strategy, alimentándose de aquí.

---

## 2. Naturaleza viva de la sección

`01-industry-and-market/` se cerró a v1.0 porque sus 8 docs describen un mercado y una industria que cambian poco entre revisiones mayores.

`02-customer-research/` no se cierra. Es viva por definición. Cada nueva conversación de discovery, cada design partner que entra, cada objeción que aparece en una llamada de ventas, cada quote que captura una verdad operativa, son input directo a algún doc de la sección.

### 2.1 Triggers de actualización continua

- Una conversación cualitativa nueva con un operador: entrevista formal, demo, llamada de ventas, follow-up post-onboarding.
- Una objeción no anticipada que aparece en ventas u onboarding.
- Un patrón de comportamiento de uso que aparece en data de producto (etapas 3+).
- Un evento de churn con causa identificada.
- Un nuevo design partner activado.

### 2.2 Implicación operativa

Cada doc tiene su propio versionado independiente. No avanzan en bloque. Un doc puede estar en v1.4 mientras otro sigue en v0.2 si la evidencia llegó desigual.

---

## 3. Las 5 etapas de madurez de evidencia

La evidencia que sostiene esta sección madura en cinco etapas. Cada etapa se define por un **trigger de precondición medible** — no por calendario. Esta disciplina está alineada con la doctrina del doc `07-geografia-y-expansion.md` §16.5: avance por evidencia, no por fecha.

### 3.1 Tabla resumen

| # | Nombre | Trigger de entrada | Naturaleza de la evidencia | Estado típico de los docs |
|---|---|---|---|---|
| 1 | `discovery-pre-PMF` | Arranque de la sección | Investigación secundaria + N=1 demos + hipótesis estructuradas | v0.x — predomina `[HIPÓTESIS PRE-PMF]` |
| 2 | `design-partner-validation` | 5 design partners activos (cierre Fase 0 / arranque Fase 1) | Cualitativa profunda: 5+ conversaciones estructuradas + primeros usos reales del producto | v1.x — hipótesis confirmadas, refinadas o caídas |
| 3 | `early-customer-evidence` | 15-25 clientes pagando + retención ≥80% (umbral Fase 3 operativa en doc 07) | Mixta: cualitativa sostenida + primeros datos cuantitativos de uso, churn, WTP | v2.x — willingness-to-pay validado, primeros patrones |
| 4 | `PMF-and-segmentation` | PMF declarado: retention >80% sostenida + NPS≥40 + referrals orgánicos | Patrones cristalizan, research segmentado por sub-segmento | v3.x — variantes o secciones por sub-segmento |
| 5 | `scale-research` | Serie A + entrada a Fase 4-5 (plazas grandes / LATAM) | Multi-mercado, multi-canal, posiblemente con persona dedicada | v4.x — research como operación continua |

### 3.2 Etapa 1 — `discovery-pre-PMF`

**Condición:** estamos antes de tener design partners activos. La evidencia es escasa y mayormente secundaria.

**Cómo se construyen los docs en esta etapa:**

- Los hallazgos de la investigación previa en Notion se sintetizan y se etiquetan con su fuente.
- Las primeras señales de demos individuales se citan literal cuando aplica.
- Donde no hay evidencia directa, se declara `[HIPÓTESIS PRE-PMF]` con la pregunta concreta que falta resolver.
- Los benchmarks externos (Perplexity, prensa, foros sectoriales) entran como contraste, nunca como sustitución de evidencia local.

**Para qué sirven los docs en esta etapa:**

- Son guía de discovery para las primeras 5 conversaciones de design partner. Las hipótesis estructuradas se vuelven el cuestionario implícito que esas conversaciones tienen que resolver.
- Son insumo de mensajería tentativa que se valida en demos.

**Lo que estos docs NO pueden afirmar todavía:**

- Willingness-to-pay validado.
- Patrones de churn o retención.
- Diferencias confirmadas entre sub-segmentos.
- Buying process completo (faltan ventas cerradas).

### 3.3 Etapa 2 — `design-partner-validation`

**Condición de entrada:** 5 design partners activos. Coincide con el cierre de Fase 0 y el arranque de Fase 1 según `07-geografia-y-expansion.md`.

**Qué cambia respecto a etapa 1:**

- El doc 07 (Voice of Customer) empieza a tener volumen real de verbatims locales.
- Hipótesis estructuradas se contrastan con conversaciones reales y se confirman, refinan o caen.
- El doc 06 (Objeciones) recibe insumos directos de demos y onboarding.
- El doc 03 (Pains y workarounds) se ancla en lo que dijeron operadores específicos, no solo en investigación previa.

**Lo que sigue sin poder afirmarse:**

- Patrones cuantitativos sostenidos. Con N=5 hay señales, no patrones.
- Segmentación validada (B vs C vs D vs E).

### 3.4 Etapa 3 — `early-customer-evidence`

**Condición de entrada:** 15-25 clientes activos pagando y retención ≥80%. Umbral declarado en `07-geografia-y-expansion.md` §16.5 para entrar a Fase 3 operativa.

**Qué cambia:**

- Primeros datos cuantitativos de uso, frecuencia, abandono, módulos más usados.
- Willingness-to-pay validado por compras reales y renovaciones.
- Primeros eventos de churn con causa identificada.
- El doc 05 (Buying process) se vuelve operativo: ya hay ciclo de venta documentable.

**Lo que sigue sin poder afirmarse:**

- Diferencias profundas entre sub-segmentos. Con 15-25 clientes posiblemente todos pertenezcan al beachhead.

### 3.5 Etapa 4 — `PMF-and-segmentation`

**Condición de entrada:** PMF declarado — retention >80% sostenida en cohortes + NPS ≥40 + referrals orgánicos consistentes.

**Qué cambia:**

- Los docs empiezan a tener variantes o secciones explícitas por sub-segmento (B, C, D, E del doc 04 de `01-industry-and-market/`).
- Los patrones de objeción y adopción se diferencian por arquetipo del comité (dueño vs chef vs gerente).
- Cohortes permiten análisis de churn temprano vs tardío.
- La voz de cliente se segmenta por contexto operativo.

### 3.6 Etapa 5 — `scale-research`

**Condición de entrada:** Serie A cerrada + entrada a Fase 4-5 (plazas grandes y LATAM).

**Qué cambia:**

- Research deja de ser esfuerzo del fundador y se vuelve función dedicada.
- Aparece research multi-mercado: validar hipótesis cross-geografía (TJ vs MTY vs Bogotá, por ejemplo).
- Se introduce cadencia regular (mensual o trimestral) en lugar de actualización por evento.
- El marco mismo de esta sección se revisa para incorporar disciplinas más maduras (NPS por cohorte, retention curves segmentadas, etc.).

---

## 4. Etapa actual declarada

**Etapa actual: `discovery-pre-PMF`.**
**Fecha de declaración:** 2026-05-01.

### 4.1 Justificación honesta del estado

Tres condiciones definen el estado al momento de inaugurar la sección:

1. **Software de producción aún en construcción.** La versión productiva de Zenet está a semanas de estar lista. No hay producto en manos de operadores reales todavía.
2. **1 demo formal de producto + ~7 conversaciones de discovery documentadas.** La demo con Víctor Murguía (2026-04-01) es la única evidencia de primera mano de cómo un actor del ecosistema reacciona ante el producto. En paralelo hay ~7 conversaciones de discovery con consultores y senior operators registradas en Notion (Anna Palazuelos, Algira Garzón, Víctor Mendoza, Carlos Sánchez, Aldo Alvarado, Abril Borunda, primera llamada Murguía 2026-03-19). **Cero conversaciones con dueño-operador del beachhead específico** (Tijuana, casual independiente, 2-3 sucursales). Toda la evidencia hoy es voz mediada por consultor o por senior operators no-dueños.
3. **Investigación previa estructurada en Notion + síntesis maestra externa.** El material previo está organizado en dos databases tipadas (Validation Log, Conversations & Insights), tres hipótesis versionadas (Problem v0.3, Value Proposition v0.3, Pricing Hypothesis v0.3) y una síntesis maestra `zenet-business-context-production.md` v1.0 (canónica en el repo de producción). Falta extraer los hallazgos relevantes y re-etiquetarlos con la trazabilidad de esta sección.

### 4.2 Implicaciones operativas para esta etapa

- Los 7 docs de contenido (`01` al `07`) se construyen con predominio de `[HIPÓTESIS PRE-PMF]` y `[Notion-research]`.
- El doc 07 (Voice of Customer) arranca con volumen mínimo: solo el verbatim de la demo Murguía y lo que se rescate de Notion. Crece más lento que los demás.
- El doc 05 (Buying process) queda esquemático: sin ventas cerradas, no hay ciclo documentado.
- Las conclusiones que la sección produce hoy son **hipótesis estructuradas**, no afirmaciones validadas.

### 4.3 Trigger de salida hacia etapa 2

La sección cruza a `design-partner-validation` cuando se cumpla:

> **5 design partners activos.** Definidos como: operadores del scope (`02-definicion-y-alcance.md`) que están usando el producto productivamente, con feedback estructurado en cadencia mínima quincenal.

Cuando ese trigger se cumpla, se ejecuta la disciplina de transición de la sección 5.

---

## 5. Disciplina de transición entre etapas

Cuando se cumple el trigger de la siguiente etapa, la sección no se re-escribe en bloque. Se ejecuta una pasada doc por doc con cuatro pasos por archivo.

### 5.1 Snapshot al `_archive/` antes de re-escribir

Antes de modificar el contenido del doc, se copia el archivo completo a `_archive/` con la siguiente convención de naming:

> **`YYYY-MM_NN-nombre-doc_etapa-saliente.md`**
>
> Ejemplo: `2026-08_02-jobs-to-be-done_discovery-pre-PMF.md`

Esto preserva la versión congelada que representa qué creía la organización sobre el cliente al cierre de esa etapa.

### 5.2 Pasada de revisión por hipótesis

Cada bloque marcado `[HIPÓTESIS PRE-PMF]` se revisa contra la nueva evidencia:

- **Confirmada:** se reemplaza la etiqueta por la fuente real (`[Demo Carlos Méndez 2026-09]` o equivalente).
- **Refinada:** se re-escribe el contenido con el matiz que la evidencia trajo, manteniendo trazabilidad.
- **Caída:** se elimina del doc activo. La versión vieja queda en `_archive/` como registro.

### 5.3 Actualización de frontmatter

- `research_stage` cambia al valor de la etapa nueva.
- `version` avanza al siguiente major (v0.x → v1.0, v1.x → v2.0, etc.).
- `last_updated` se actualiza a la fecha de la pasada.

### 5.4 Quién dispara la transición

La transición la dispara **Alan**, no un agente automático. Aunque el trigger sea medible, evaluar si efectivamente se cumple (¿son design partners "activos"? ¿el feedback está siendo estructurado?) requiere juicio humano. Un agente de Claude Code puede preparar la pasada doc por doc, pero la decisión de cruzar la firma Alan.

---

## 6. Convenciones de marcado de evidencia

Cada afirmación que la sección hace debe ser trazable a su fuente. Las etiquetas inline son el mecanismo.

### 6.1 Etiquetas válidas

| Etiqueta | Uso |
|---|---|
| `[Notion-research]` | Información proveniente de la base previa de research en Notion (anterior a la creación de esta sección) |
| `[Demo <nombre> <fecha>]` | Verbatim o señal directa de una demo o entrevista formal con un operador específico. Ejemplo: `[Demo Murguía 2026-04]` |
| `[Conversación <nombre> <fecha>]` | Conversación informal, llamada o reunión con un actor del ecosistema (no operador directo) |
| `[Benchmark sectorial / Perplexity]` | Información derivada de búsquedas estructuradas en Perplexity Pro o fuentes públicas externas |
| `[Estimación cualitativa]` | Estimación derivada por inferencia razonada, sin fuente directa, pero con lógica explicada |
| `[HIPÓTESIS PRE-PMF]` | Afirmación que se sostendrá o caerá con evidencia futura. Debe acompañarse de la pregunta concreta que falta resolver |
| `[SIN FUENTE PUBLICADA]` | Cifra, fecha o nombre que no se encontró en fuente pública confiable y se declara honestamente como gap |

### 6.2 Regla de oro: no mezclar fuentes en el mismo bloque

Un párrafo o tabla nunca combina verbatims reales de operadores con benchmarks externos o hipótesis. Cada bloque tiene **una sola naturaleza de evidencia**. Si se necesita integrar dos fuentes, se hace en bloques separados con su etiqueta correspondiente.

**Por qué importa:** la voz del operador mexicano es el activo más valioso de esta sección. Mezclarla en el mismo bloque con un quote de un operador de Texas o con un blog SaaS-restaurantero contamina la evidencia y el lenguaje.

### 6.3 Lista de fuentes al final de cada doc

Cada doc cierra con una sección **Fuentes** que lista:

- Conversaciones y demos citadas: nombre, rol, fecha, contexto.
- Documentos Notion referenciados: título y fecha de creación si está disponible.
- Búsquedas Perplexity referenciadas: query exacta y fecha.
- Documentos del workspace referenciados (cross-reference).
- Hipótesis abiertas pendientes de validación, con pregunta concreta.

---

## 7. Frontmatter extendido para docs de esta sección

Los docs de `02-customer-research/` añaden un campo al frontmatter estándar del workspace.

### 7.1 Campo nuevo: `research_stage`

**Valores válidos:**

- `discovery-pre-PMF`
- `design-partner-validation`
- `early-customer-evidence`
- `PMF-and-segmentation`
- `scale-research`

**Por qué se declara:** hace cada doc auto-descriptivo sobre la robustez de su evidencia. Un freelance de copy mirando el doc 07 en etapa 1 sabe que está trabajando con material esquemático; en etapa 3 sabe que está trabajando con verbatims validados de clientes pagando.

### 7.2 Ejemplo de frontmatter completo para esta sección

```yaml
---
name: Jobs-to-be-done del operador
description: Trabajos funcionales, emocionales y sociales que el dueño-operador contrata cuando paga Zenet
type: customer-research
research_stage: discovery-pre-PMF
last_updated: 2026-05-15
status: active
version: 0.1
owner: Alan Bahena
---
```

### 7.3 Tipo de documento

- Los docs de contenido (`01` al `07`) usan `type: customer-research`.
- Este doc (`00`) usa `type: research-framework` porque es gobernanza, no evidencia.

---

## 8. Cómo navegar la sección

### 8.1 Orden recomendado de lectura

Para un nuevo contribuidor (humano o agente) que entra a `02-customer-research/`:

1. **Este doc (`00-etapas-y-marco-de-investigacion.md`).** Te dice qué etapa es la actual y cómo leer la evidencia.
2. **`01-metodologia-y-fuentes.md`.** Te dice qué evidencia hay hoy, de dónde salió y qué falta.
3. **`02-jobs-to-be-done.md`.** Es la lente que ordena el resto.
4. **`03-pains-y-workarounds.md`.** El problema real y los sustitutos actuales.
5. **`04-customer-journey-detallado.md`.** Cómo se mueve el operador en el tiempo.
6. **`05-buying-process-y-criterios-de-decision.md`.** Cómo se decide.
7. **`06-objeciones-y-fricciones-de-adopcion.md`.** Qué frena.
8. **`07-voice-of-customer.md`.** Cómo lo dice literal.

### 8.2 Acceso por pregunta

Ver tabla en sección 1.3.

### 8.3 Snapshots de etapas anteriores

Para consultar qué creía la organización sobre el cliente en una etapa pasada, ver `_archive/`. Los archivos siguen la convención de naming declarada en sección 5.1.

---

## Fuentes

- `Market Research and Analysis/_context/01-industry-and-market/02-definicion-y-alcance.md` — para la definición de scope y filtro de formalidad mínimo.
- `Market Research and Analysis/_context/01-industry-and-market/04-segmentacion-de-mercado.md` — para el beachhead y los sub-segmentos B/C/D/E.
- `Market Research and Analysis/_context/01-industry-and-market/05-perfil-de-cliente-ideal.md` — para el ICP arquetípico (Carlos Mendoza).
- `Market Research and Analysis/_context/01-industry-and-market/07-geografia-y-expansion.md` §16.5 — para los triggers de precondición medible que definen las etapas 2 y 3.
- `CLAUDE.md` §6 — convenciones de versionado y `_archive/`.
- `CLAUDE.md` §8 — resumen de marca para alineación de voz.
- `Branding/_context/04-voice-and-tone/voz-y-tono.md` — voz operativa aplicada en la redacción.
- Demo formal con Victor Murguía (2026-04). Única conversación de primera mano con el producto al momento de declarar la etapa actual.
- Investigación previa acumulada en Notion sobre dolores y problemas de operadores de restaurantes, anterior a 2026-05-01.
