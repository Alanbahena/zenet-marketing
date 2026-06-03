---
name: Pillars y sistema editorial
description: Operacionaliza los 6 content pillars de la digital distribution strategy en un sistema de producción · por cada pillar (objetivo · audiencia · idioma · ángulos · conexión con material real · estado stealth) · estructura de post por pillar anclada a la huella de voz · mapeo idioma ES/EN · cadencia 4 core/sem (3-5) + calendario semanal tipo · mezcla y balance mensual · anti-patterns. Hereda distribution strategy §5 (qué/cuánto) y la ejecuta. v0.1 directional · se calibra con métricas del pilot.
type: social-media
last_updated: 2026-06-03
status: active
version: 0.1
owner: Alan Bahena
---

# Pillars y sistema editorial

> Convierte los **6 content pillars** (definidos en `02-digital-distribution-strategy.md` §5) en un **sistema de producción**: qué se ve en un post de cada pillar, en qué idioma, con qué estructura, y cómo rotan en la semana. Aterriza lo que en el Manual de Marca Personal v1.0 eran las líneas A/B/C.
>
> **v0.1 es directional.** La asignación de pillars, la cadencia y el calendario son hipótesis de arranque — se calibran con la data real del pilot (cf. §8). Empezamos con esta estructura y la detallamos conforme avanzamos.

---

## Índice

1. Propósito · frontera
2. Los 6 pillars operacionalizados
3. Estructura de post por pillar
4. Mapeo idioma × pillar
5. Cadencia + calendario semanal
6. Mezcla + balance mensual
7. Anti-patterns
8. Estado + version + cross-doc deps

---

## 1. Propósito · frontera

### 1.1 Hereda (no relitiga)

De `02-digital-distribution-strategy.md` §5: los 6 pillars · sus % de allocation · el format mix · la cadencia 3-5/sem (4 core + flex). Eso está decidido allá. Aquí se **ejecuta**.

### 1.2 Qué NO va aquí

| Tema | Dónde vive |
|---|---|
| Templates de copy listos para usar | `_templates/plantillas-post-por-pillar.md` |
| Workflow de producción (idea → borrador → publicar) | `_sop/produccion-de-contenido.md` |
| La huella de voz · devices firma · corpus | `02-voz-y-estilo-de-alan.md` |
| Selección de canal · % canónico de pillars | `02-digital-distribution-strategy.md` (GTM) |
| La doctrina stealth/reveal completa | `00-marco-y-estrategia.md` §3 |

---

## 2. Los 6 pillars operacionalizados

> Cada pillar conecta con material que **ya existe**: las semillas del arco (`01-manual` §2.3), el corpus de voz (`02-voz-y-estilo`), y los 3-4 años de estudio de campo.

### Pillar 1 · Founder journey + building in public — 20%

| | |
|---|---|
| **Objetivo** | Confianza + transparencia · humanizar la construcción |
| **Audiencia** | Founders · builders · investors/advisors LATAM (+ cross) |
| **Idioma** | ES + EN (flexea según audiencia del post) |
| **Ángulos** | Decisiones + reasoning · **el laboratorio** (Lu'um-e, BIOWELT como experimentos) · errores + pivots honestos · construir bajo incertidumbre · el sueño a los 15 · aprender a programar de noche |
| **Material** | `01-manual` §2.3 semillas · corpus **VE-01, VE-02** |
| **Stealth** | ✅ libre — sin nombrar el producto actual |

### Pillar 2 · Industry insights + thought leadership — 20%

| | |
|---|---|
| **Objetivo** | Autoridad · ser dueño del **espacio del problema** |
| **Audiencia** | Operadores · industria · contadores |
| **Idioma** | ES |
| **Ángulos** | El 10% de adopción digital · fricción operativa · SAT 2026 fiscalización · CFDI · industria adoption laggard · el patrón restaurantero (**con reframe**) · 22-27 hrs/sem manuales |
| **Material** | 3-4 años de estudio de campo · corpus **VE-04, VE-05, VE-07** · verbatim library (customer research) |
| **Stealth** | ✅ libre — el problema, no el producto |

### Pillar 3 · Technical + AI/ML/Architecture — 20%

| | |
|---|---|
| **Objetivo** | Credibilidad + diferenciación (founder = ingeniero) |
| **Audiencia** | Engineers · AI community · technical investors · future hires |
| **Idioma** | EN |
| **Ángulos** | Arquitectura multi-agente (**anonimizada**) · prompt caching · model routing · context discipline · AI as pair programmer vs code generator · *clarity first, speed second* · planning before code · lecciones de testing/RLS |
| **Material** | corpus **VE-03, VE-06** · arquitectura del production repo · "código de noche" · agency-as-SaaS (ownable, sin nombrar Zenet) |
| **Stealth** | ✅ libre — *"a multi-agent system for restaurant operations"* construye autoridad sin nombrar el producto |

### Pillar 4 · Operator vernacular + voice of customer — 15%

| | |
|---|---|
| **Objetivo** | Fluidez de lenguaje · creación de categoría |
| **Audiencia** | Operadores potenciales · MX SMB |
| **Idioma** | ES |
| **Ángulos** | Verbatim del operador · *"apagando incendios"* · *"yo SOY el sistema"* (reframe) · conversaciones reales con chefs · el vernáculo (escandallo · merma · plaza · cuaderno) |
| **Material** | verbatim library · corpus **VE-05, VE-07** · 3-4 años de campo |
| **Stealth** | ✅ libre |

### Pillar 5 · Behind-scenes + transparency — 10%

| | |
|---|---|
| **Objetivo** | Amplificador de confianza |
| **Audiencia** | Todas, cross-section |
| **Idioma** | Mixto |
| **Ángulos** | **El laboratorio** (cómo construyo) · rutina del founder · decisiones del día · selección de vendors · el proceso real, no el resultado |
| **Material** | el frame "laboratorio" (`01-manual` §2.5) · §1 track record |
| **Stealth** | ✅ libre — proceso, no producto |

### Pillar 6 · Case studies + customer stories — 15% (⛔ POST-REVEAL)

| | |
|---|---|
| **Objetivo** | Prueba social |
| **Audiencia** | Clientes potenciales · investors |
| **Idioma** | ES |
| **Ángulos** | Wins de Socios Fundadores (con consentimiento) · antes/después · ROI |
| **Material** | post-reveal (no existe pre-reveal) |
| **Stealth** | ⛔ **0% pre-reveal** · se activa cuando se cumple el trigger de revelación (`00-marco` §3.4) |

---

## 3. Estructura de post por pillar

El esqueleto concreto de cada tipo, anclado a tu huella (`02-voz-y-estilo` §2.2). No es camisa de fuerza — es el patrón base.

| Pillar | Esqueleto | Ejemplo del corpus |
|---|---|---|
| **1 Founder journey** | Hook (pregunta o confesión honesta) → tensión/aprendizaje → experiencia personal → síntesis → cierre abierto | VE-01 · VE-02 |
| **2 Industria** | Hook (dato duro o "no es X, es Y") → desarrollo del problema → empatía con el operador → reframe → pregunta abierta | VE-04 · VE-07 |
| **3 Técnico (EN)** | Hook ("the real experience, not the theory") → secciones etiquetadas / flechas → específicos técnicos → "the takeaway / honest framing" → reflexión + hashtags | VE-03 · VE-06 |
| **4 Operador** | Hook (conversación real / cita de chef) → vernáculo + fricción → "no es negligencia" → cierre con pregunta operacional | VE-05 · VE-07 |
| **5 Behind-scenes** | Hook (algo del día / del laboratorio) → el proceso real → aprendizaje → forward-looking | (capturar ejemplos) |

> Todos pasan por las **reglas de generación** de `02-voz-y-estilo` §4 (✅ SÍ / ⛔ NUNCA) + el filtro north star (humano · sin hype · que te represente) + stealth.

---

## 4. Mapeo idioma × pillar

Lockeado en `00-marco` §4.2: ES-primario + EN técnico.

| Pillar | Idioma | Razón |
|---|---|---|
| 1 Founder journey | ES + EN (flexea) | Journey resuena en ambas audiencias · ES para comunidad, EN para builders |
| 2 Industria | **ES** | Comunidad restaurantera LATAM |
| 3 Técnico | **EN** | Autoridad global · builders · investors · talento |
| 4 Operador | **ES** | Vernáculo MX SMB |
| 5 Behind-scenes | Mixto | Cross-audience |
| 6 Case studies | ES (post-reveal) | Clientes LATAM |

**Ritmo semanal:** ~3 ES + 1 EN (ver §5). Honra el ES-primario (comunidad semilla = meta Phase 0) sin soltar el drumbeat técnico EN.

---

## 5. Cadencia + calendario semanal

### 5.1 El número

> **4 publicaciones core/semana · rango 3-5.**

- **4 core** = target sostenible (~16/mes)
- **3** = piso en semanas de build pesado (regla: *calidad > frecuencia*)
- **5º flex** = solo con energía **y** material listo · nunca forzado

`[Hipótesis de arranque]` — se puede rampear desde 3/sem las primeras semanas si hace falta. La cadencia óptima se valida con el pilot.

### 5.2 Calendario tipo

| Día | Pillar | Tipo | Idioma | Esfuerzo |
|---|---|---|---|---|
| **Lunes** | 2 · Industria | Insight / observación | ES | Medio |
| **Martes** | 1 · Founder journey | Building in public / reflexión | ES *(a veces EN)* | Medio |
| **Miércoles** | — | **OFF de publicación** · engagement (comentarios ICP + DMs) | — | Ligero |
| **Jueves** | 3 · Técnico | Deep-dive arquitectura / AI | **EN** | Alto |
| **Viernes** | 4 / 5 *(alternan)* | Operador (verbatim) / Behind-scenes (laboratorio) | ES / Mixto | Medio / Ligero |
| **Sáb-Dom** | — | OFF · descanso + engagement ligero | — | — |
| **Flex 5º** *(opcional)* | 1 ó 2 | Long-form síntesis · solo si hay surplus | ES/EN | Variable |

### 5.3 Notas de diseño

- **Miércoles sin post es a propósito** — día de engagement puro (regla: *responder 10 comentarios > publicar*). No es hueco, es estrategia.
- **El flex 5º es la palanca:** comunidad semilla ES necesita empuje → 5º en ES · alimentar audiencia global/investors → 5º en EN técnico.
- **Guía, no camisa de fuerza** — *autenticidad > consistencia forzada*. Si el jueves técnico no está listo, no se publica basura; se mueve.

---

## 6. Mezcla + balance mensual

### 6.1 Distribución (16 posts core/mes · pre-reveal)

| Pillar | Posts/mes | ~% | Target distribution strategy |
|---|---|---|---|
| 1 Founder journey | 4 | 25% | 20% |
| 2 Industria | 4 | 25% | 20% |
| 3 Técnico | 4 | 25% | 20% |
| 4 Operador | 2-3 | ~15% | 15% |
| 5 Behind-scenes | 1-2 | ~10% | 10% |
| 6 Case studies | **0** | 0% | 15% (post-reveal) |

**Pre-reveal redistribución:** el 15% del pillar 6 se reparte al trío journey/industria/técnico (autoridad + comunidad). Post-reveal, el pillar 6 entra y el trío baja a su target.

### 6.2 Reglas de balance

- **Si un pillar no tiene material real** → no se fuerza · se cubre con otro pillar que sí (sobre todo el técnico: no inventar deep-dives).
- **Si un pillar satura** (ej. mucha industria seguida) → rotar a journey o behind-scenes para variedad.
- **El flex 5º** corrige desbalances de la semana.
- **Pillar 6 = 0% hasta el reveal** · no hay excepción pre-reveal.

---

## 7. Anti-patterns

| ⛔ NO hacemos | Razón |
|---|---|
| Forzar un pillar sin material real (esp. técnico) | Filler · rompe la regla calidad > frecuencia |
| Romper stealth en industria/técnico (nombrar el producto) | Viola `00-marco` §3 |
| Publicar case studies pre-reveal | Pillar 6 = 0% hasta el trigger |
| Postear por cumplir la cuota | Degradación · penalización de algoritmo |
| Mismo pillar muchos días seguidos | Monotonía · el feed pierde rango |
| Traducir mecánicamente ES↔EN | Cada idioma tiene su registro (cf. `02-voz-y-estilo` §3) · no es el mismo post traducido |
| Front-load la visión de plataforma | Disciplina heredada (`00-marco` §3 · distribution strategy §2.5) |

---

## 8. Estado + version + cross-doc deps

### 8.1 Estado v0.1

Cerrado 2026-06-03 · directional. 6 pillars operacionalizados + estructura por pillar (anclada al corpus) + calendario 4 core (3 ES + 1 EN) + balance mensual. Pillar 6 en 0% por stealth.

### 8.2 Version triggers (se calibra con métricas)

| Transición | Trigger |
|---|---|
| v0.1 → v0.2 | **Pilot 4 sem completado** · qué pillar/idioma/día resuena (engagement signals) → recalibrar allocation + cadencia + horarios óptimos |
| v0.2 → v0.3 | 30 días de analytics · estructura de post por pillar refinada con lo que funciona |
| v0.3 → v1.0 | Reveal ejecutado · pillar 6 activado · calendario post-reveal · cadencia validada |

> **El detalle se construye con data.** Esta v0.1 es el punto de partida; las métricas (no la opinión) deciden los ajustes — qué pillar sube, qué día mueve, qué idioma pesa más.

### 8.3 Cross-doc deps

| Doc | Relación |
|---|---|
| `02-digital-distribution-strategy.md` §5 | Source de los 6 pillars + % + cadencia |
| `02-voz-y-estilo-de-alan.md` | Estructura de post por pillar · corpus VE-NN |
| `01-manual` §2.3 | Semillas de contenido (arco → pillar) |
| `00-marco` §3 | Stealth (pillar 6 = 0%) · §5 objetivos por fase |
| `_templates/plantillas-post-por-pillar.md` | Templates derivados de estas estructuras |
| `_sop/produccion-de-contenido.md` | Workflow que usa este sistema |

---

*Última actualización: 2026-06-03. v0.1 directional · se calibra con el pilot.*
