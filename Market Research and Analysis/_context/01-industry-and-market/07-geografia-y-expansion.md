---
name: Geografía y expansión
description: Ruta geográfica faseada de Zenet — Tijuana como plaza de origen, Baja California completa, Fase 3 operativa (Sonora, Querétaro, Puebla) y Fase 3 bis (Mérida con modelo remoto), plazas grandes Fase 4 (GDL, MTY, CDMX), LATAM Fase 5
type: market-research
last_updated: 2026-05-01
status: active
version: 1.0
owner: Alan Bahena
---

# Geografía y expansión

Los seis documentos previos del subfolder establecieron el qué del mercado: panorama del sector, scope declarado, tamaño, segmentación, ICP del beachhead, estructura y ecosistema. El documento de entorno regulatorio definió el marco institucional sobre el que el operador opera. Falta una capa que las decisiones de scope y sizing dejaron implícita pero no desarrollada: **el dónde** — qué significa concretamente "México con prioridad inicial en Tijuana y plazas de condiciones óptimas, y visión de expansión a LATAM" (`02-definicion-y-alcance.md`).

Este documento aterriza la dimensión geográfica del scope. Profundiza Tijuana como plaza de origen, mapea el resto de Baja California, caracteriza las plazas Fase 3 (Sonora, Querétaro, Puebla, Mérida), describe las plazas grandes Fase 4 (Guadalajara, Monterrey, Ciudad de México) y deja un panorama inicial de LATAM Fase 5. Sobre esa base, define el modelo operativo de entrada a una plaza nueva, el pricing por plaza, y los riesgos de la estrategia faseada.

---

## Índice

**Propósito**
1. Propósito y cómo leer este mapa

**Bloque A — La estrategia faseada**
2. Las 5 fases declaradas (recap del scope geográfico)
3. Los 6 criterios de priorización por plaza

**Bloque B — Tijuana en profundidad (Fase 1)**
4. Por qué Tijuana como plaza de origen
5. Anatomía de Tijuana — sub-zonas y concentración del ICP
6. Comunidad, eventos y prensa local TJ

**Bloque C — Baja California completa (Fase 2)**
7. Mexicali — capital del estado
8. Ensenada urbano y Valle de Guadalupe
9. Rosarito y Tecate — satélites de TJ

**Bloque D — Plazas Fase 3 y más allá**
10. Sonora — Hermosillo y Cd. Obregón
11. Querétaro — fine dining y migración corporativa
12. Puebla — cocina con identidad nacional
13. Mérida — Fase 3 bis con modelo remoto
14. Plazas grandes (Fase 4) — Guadalajara, Monterrey, CDMX
15. LATAM (Fase 5) — panorama inicial

**Bloque E — Modelo operativo de expansión**
16. Cómo se entra a una plaza nueva — los tres modelos
17. Pricing por plaza
18. Riesgos de la estrategia faseada

**Cierre**
19. Hipótesis abiertas y pendientes de validar
20. Triggers de actualización del documento
21. Fuentes consultadas

---

## 1. Propósito y cómo leer este mapa

### 1.1 Para qué existe el doc

Este documento existe para contestar tres preguntas que el resto del subfolder dejó parcialmente abiertas.

**Pregunta 1 — Qué significa operativamente cada fase del scope.** El documento de definición y alcance declaró cinco fases (Tijuana → BC → plazas óptimas selectas → plazas grandes → LATAM) y seis criterios de priorización. Este documento profundiza cada una con cifras, casos referenciales, dinámica local y particularidades. Sin ese aterrizaje, las fases son etiqueta sin contenido.

**Pregunta 2 — Cómo se entra a una plaza nueva.** El equipo Zenet opera desde Tijuana. La pregunta operativa real es qué cambia cuando se decide entrar a Mexicali, a Hermosillo o a Mérida — qué se hace presencial, qué remoto, qué con partner local, qué pre-condiciones se exigen. La respuesta no es uniforme entre plazas: este documento desarrolla **tres modelos operativos de entrada** que aplican según la plaza.

**Pregunta 3 — Qué riesgos carga la estrategia faseada.** Saturación local antes de migrar, costo de oportunidad por no entrar a CDMX antes, competidor que se mueve más rápido, otra plaza que surja como mejor beachhead. El documento los nombra y declara los triggers que dispararían revisión.

### 1.2 Qué NO encontrarás aquí

- **Plan de growth ni roadmap de ventas.** No hay metas trimestrales, cuotas por plaza ni asignaciones de presupuesto. Eso vive en el plan operativo de marketing/ventas, no en el research.
- **Análisis financiero por plaza.** CAC, LTV, payback period y proyecciones P&L se construyen sobre este mapa, pero no son contenido de este documento.
- **Detalle operativo del producto Zenet.** Las decisiones de roadmap (integración con CFDI, ingesta POS, módulos por fase) viven en el repositorio de producción.
- **Análisis competitivo dedicado al espacio SaaS B2B restaurantero.** El documento menciona saturación competitiva como criterio de priorización, pero el análisis profundo vive en `03-competitive-analysis/` cuando se redacte.
- **Lista contactable de design partners por plaza.** Es trabajo de outbound real, no de research. El documento identifica candidatos por nombre cuando aparecen en fuentes públicas; la lista priorizada con datos de contacto se construye cuando ventas opere.

### 1.3 Convenciones de etiquetado de fuentes

Replicamos las convenciones de los documentos previos del subfolder:

- **[Dato MX casual independiente]** cuando hay fuente mexicana específica para el segmento.
- **[Dato MX sector restaurantero]** cuando la fuente es mexicana pero agregada al sector.
- **[Dato local plaza X]** cuando la fuente es local de la plaza específica (CANIRAC delegacional, prensa local, gobierno municipal).
- **[Estimación cualitativa]** cuando la afirmación es razonada pero sin respaldo cuantitativo publicado.
- **[SIN FUENTE PUBLICADA]** cuando la información no se localizó en fuente verificable y la presentamos como hipótesis o como hueco honesto.
- **[OFICIAL]** cuando la fuente es gobierno, cámara reconocida, o publicación regulada.

Las citas inline siguen el formato `(Fuente, año)`. La lista completa de fuentes con URLs vive en la sección 21.

### 1.4 Relación con otros documentos del workspace

Este documento se apoya en:

- `02-definicion-y-alcance.md` §3.2 — declaración original de las 5 fases geográficas y los 6 criterios de priorización por plaza. Este documento profundiza esa declaración sin contradecirla.
- `03-tamano-de-mercado.md` §3.2 — cifras SAM Fases 1-3 con rangos. Las cifras por plaza de este documento son consistentes con esas, profundizando con material adicional cuando aplica.
- `04-segmentacion-de-mercado.md` — los cinco sub-segmentos del scope que operan transversalmente sobre la geografía.
- `05-perfil-de-cliente-ideal.md` — el ICP del beachhead (Carlos Mendoza, dueño-operador 2-3 sucursales en Zona Río Tijuana). Este documento desarrolla el equivalente operativo de Carlos en otras plazas.
- `06-estructura-y-ecosistema.md` — cadena de valor BoH, capa upstream BC, cross-border dynamics, capa institucional. Mucho del material de Tijuana y Baja California en este documento se sostiene en el ecosistema mapeado allí.
- `08-entorno-regulatorio.md` — marco regulatorio municipal BC, IVA frontera norte 8%, salario mínimo frontera, reformas laborales 2024-2026. Implicaciones operativas de plaza con anclaje regulatorio.

Este documento alimenta:

- Decisiones de canal de adquisición y eventos por plaza (sección 6 TJ, sección 16 modelo operativo).
- Decisiones de roadmap producto sobre soporte multi-IVA (8% frontera vs 16% nacional), multi-plaza y multi-moneda eventual (sección 17 pricing, doc 08 §2.4).
- Modelo de presencia de equipo Zenet en plazas Fase 2-5 (sección 16).
- Narrativa de fundraising sobre escalabilidad geográfica del modelo Zenet más allá de TJ.

---

## 2. Las 5 fases declaradas — recap del scope geográfico

`02-definicion-y-alcance.md` §3.2 declaró cinco fases geográficas para el scope Zenet. Esta sección las recapitula con el material acumulado en el resto del subfolder (cifras de sizing del doc 03, casos referenciales de docs 02 y 04, marco institucional de doc 06, marco regulatorio de doc 08, e investigación dirigida posterior).

Una corrección de scope respecto al doc 02 entra aquí: el doc original declaró Fase 3 como "Sonora, Querétaro, Mérida". Investigación posterior — incluyendo el anuncio de expansión de la Guía Michelin México a Yucatán, Querétaro y Puebla en 2026, la salida de operación de K'u'uk como referente meridano histórico, y el reconocimiento del cluster gastronómico poblano — llevó a dos ajustes:

- **Puebla entra a Fase 3 explícitamente** por TAM superior, identidad nacional de la cocina poblana y entrada a Michelin 2026.
- **Mérida se mueve a Fase 3 bis** — categoría intermedia con modelo operativo distinto (sección 13 desarrolla; sección 16 explica los tres modelos de entrada).

El cluster Valle de Guadalupe queda como **caso especial activable desde Año 1** independiente de la lógica de fases (sección 8.2).

### 2.1 Vista consolidada de las 5 fases

| Fase | Plaza(s) | TAM ICP rango | Estado del scope | Modelo de entrada |
|---|---|---|---|---|
| **1** | Tijuana | 1,500-2,500 (`03` §3.2) | Activa — plaza de origen | Equipo TJ presencial |
| **2** | BC completa: Mexicali, Ensenada urbano, Rosarito, Tecate, Valle de Guadalupe | 1,000-2,000 adicional (`03` §3.2) | Activable mes 6-9 desde inicio TJ | Equipo TJ + viajes Alan |
| **3 operativa** | Sonora (Hermosillo + Cd. Obregón), Querétaro, Puebla | Sonora 800-1,200; Querétaro ~600-1,200; Puebla ~1,200-2,400 | Activable cuando hay tracción TJ+BC | Equipo TJ + viajes Alan + consultor partner local |
| **3 bis** | Mérida | 150-600 ICP estricto (Run Mérida, abr 2026) | Activable solo con partnership obligatorio | **Modelo remoto + partnership con chef o consultor local** |
| **4** | Guadalajara, Monterrey, Ciudad de México | GDL 4-6K, MTY 5-7K, CDMX 15-20K (`03` §3.2) | Diferida hasta tracción demostrada en fases 1-3 | Equipo TJ + presencia local cuando justifique |
| **5** | LATAM — Centroamérica selectiva (Guatemala City, San José) y Sudamérica (Bogotá, Lima, Santiago) | No cuantificado | Detonada por Serie A + partnership regional | Por definir con la ronda |

Las cifras TAM corresponden a establecimientos casual independientes formales del segmento; el filtro "en expansión activa" reduce a aproximadamente 10-20% según doc 02 §6.

### 2.2 Lógica del orden de fases

La secuencia no es geográfica simple ni puramente comercial. Está construida sobre tres principios:

**Principio 1 — Validar antes de escalar.** Tijuana es la plaza donde el modelo Zenet se prueba contra realidad operativa. Sin product-market fit demostrable en TJ no se entra a Fase 2; sin tracción consolidada en TJ+BC no se entra a Fase 3. Es disciplina contra la tentación de perseguir mercados grandes (CDMX) antes de tener el modelo afinado.

**Principio 2 — Defender antes de competir frontalmente.** Las plazas grandes (GDL, MTY, CDMX) están saturadas competitivamente con POS y software BoH (PoloTab, Parrot, SoftRestaurant según `02-definicion-y-alcance.md` §4.4). Entrar tarde con caso ancla demostrado en plazas medianas es mejor que entrar temprano sin diferenciación. La Fase 4 se gana, no se asalta.

**Principio 3 — Plaza accesible antes de plaza prestigiosa.** Sonora, Querétaro y Puebla son accesibles operativamente desde Tijuana (vía CDMX o conexiones regulares) y tienen cluster gastronómico identificable. Mérida tiene cluster con identidad fuerte y prestigio Michelin 2026 inminente, pero la distancia logística desde TJ (~4,000 km, sin vuelo directo) la hace candidata para modelo remoto, no presencial. La Fase 3 bis reconoce que algunas plazas valen entrada pero requieren modelo distinto.

### 2.3 Trigger de avance entre fases

El doc 02 declaró el filtro "en expansión activa" como criterio del scope. Aplicado a la dimensión geográfica, los avances entre fases se disparan por **pre-condiciones medibles**, no por calendario:

| Avance | Pre-condición sugerida |
|---|---|
| Fase 1 → Fase 2 | 5 design partners TJ contratados, con data fluyendo limpia y NPS ≥ 40 |
| Fase 2 → Fase 3 operativa | 15-25 clientes activos en TJ+BC, retención ≥ 80% a 6 meses, casos de éxito documentados |
| Fase 3 → Fase 4 | Tracción multiplaza demostrada, ARR mínimo definido en plan de fundraising |
| Fase 4 → Fase 5 | Cierre de Serie A + partnership regional identificado |

Las cifras son indicativas — la decisión real se calibra cuando el momento llega, con data operativa real. Lo que importa es la **disciplina de no avanzar por calendario** sino por evidencia.

---

## 3. Los 6 criterios de priorización por plaza

`02-definicion-y-alcance.md` §3.3 declaró seis criterios para priorizar una plaza candidata dentro de su fase. Esta sección los desarrolla con el material acumulado y agrega cuatro criterios complementarios derivados de la investigación posterior.

### 3.1 Los seis criterios originales

**3.1.1 TAM accesible.** Número estimado de operadores casual independientes formales con filtro "en expansión activa" en la plaza. No es el universo total del sector — es el subconjunto que cumple los tres criterios de scope (BoH propio + identidad propia + cocina protagonista) más el filtro de momento (en expansión activa). En la mayoría de plazas, este filtro reduce el universo aproximadamente al 10-20% del total de restaurantes formales (`02` §6).

**3.1.2 Densidad de ICP en expansión.** Concentración geográfica del subconjunto que califica. Una plaza con 500 ICP-potenciales pero dispersos en un área metropolitana grande es operativamente más cara que una con 300 ICP concentrados en un corredor identificable. Tijuana ilustra el caso favorable: Zona Río + Chapultepec + Hipódromo concentran probablemente 60-70% de ICP del scope core en pocos kilómetros (`07` §5).

**3.1.3 Cuisine fit con scope core.** El scope declara casual independiente con cocina protagonista. Plazas dominadas por formatos fuera del scope (cantinas tradicionales sin cocina seria, food trucks individuales, cocinas industriales, hotelería corporativa pura) tienen menor cuisine fit aunque el TAM bruto sea alto. Es un criterio de match de tipo de operación, no de cocina específica.

**3.1.4 Marco regulatorio.** Formalidad fiscal mínima del operador típico de la plaza. Una plaza con alto porcentaje de operadores informales fiscalmente reduce el TAM accionable porque el filtro de scope (RFC + CFDI 4.0 regular + 1+ año operando) los excluye. La frontera norte mexicana ofrece marco favorable adicional: IVA 8% + decreto de estímulos fiscales vigente 2026 (`08` §2.4).

**3.1.5 Competencia tecnológica.** Saturación de la plaza por software BoH y POS especializados ya establecidos. CDMX y Monterrey tienen alta penetración de Parrot, PoloTab y SoftRestaurant (`02` §4.4); Tijuana tiene presencia de SoftRestaurant vía SYCA pero menor saturación de soluciones AI-native. Mayor saturación = mayor costo de adquisición y mayor fricción de switching.

**3.1.6 Canal viable.** Existencia operativa en la plaza de los canales de adquisición que Zenet planea usar: LinkedIn, consultores gastronómicos validados, eventos sectoriales recurrentes, prensa local. Una plaza con CANIRAC delegacional activa y consultores identificables es operativamente más fácil que una con ecosistema institucional débil.

### 3.2 Cuatro criterios complementarios derivados de la investigación

La investigación dirigida sobre las plazas Fase 2-3 reveló cuatro criterios adicionales que el doc 02 no nombró explícitamente pero que la operación real exige.

**3.2.1 Conectividad logística desde Tijuana.** Distancia, vuelo directo, costo y tiempo de viaje para field-sales. Es criterio operativo para un equipo basado en TJ. Hermosillo es accesible (~900 km, vuelos cortos); Querétaro y Puebla requieren vuelo a CDMX y traslado terrestre; Mérida requiere conexión con 6-9 horas puerta a puerta y costo >$5,000 MXN por viaje (Run Mérida, 2026). La conectividad no descalifica una plaza, pero define el modelo de entrada (sección 16).

**3.2.2 Comunidad organizada institucionalmente.** Existencia y nivel de actividad de CANIRAC delegacional, asociaciones de chefs, festivales sectoriales con componente B2B. Investigación 2026 identificó **CANIRAC Querétaro como la delegación más activa** entre las plazas Fase 3 — Rosalinda Hernández Rosiles como presidenta, 400 afiliados estatales, 65,000 empleos directos, comunicación frecuente sobre inversiones (Cinoticias 2024, Quadratín Querétaro 2024). CANIRAC Tijuana sigue como referencia (`06` §7.3, `08` §4.1). La organización institucional acelera entrada porque facilita partnerships, capacitaciones co-marcadas y outreach masivo a operadores.

**3.2.3 Vínculos personales o palancas de acceso.** Red existente en la plaza — chefs, consultores, periodistas, dueños operadores — que reduce costo de cold outreach. Investigación 2026 confirmó que Zenet tiene red validada en TJ/BC (Anna Palazuelos, Victor Murguía, Algira Garzón) pero no en plazas Fase 3. La estrategia para entrar a Sonora/Querétaro/Puebla es activar a la red TJ como puente: pregunta directa a los consultores ya validados sobre colegas en plazas Fase 3 antes de cold outreach LinkedIn.

**3.2.4 Reconocimientos gastronómicos como amplificador narrativo.** Premios y guías (Michelin, 50 Best LatAm, Bib Gourmand, premios nacionales) crean ventana de inversión en sistematización en sus poseedores y elevan la visibilidad nacional de la plaza completa. La expansión de la Guía Michelin México 2026 a Querétaro, Puebla y Yucatán cambia el cálculo: las tres plazas suben en prioridad porque sus operadores top recibirán prensa nacional fresca, lo que abre conversación con Zenet en momentum favorable.

### 3.3 Aplicación de los criterios a las plazas Fase 3 — tabla resumen

| Criterio | Hermosillo (Sonora) | Querétaro | Puebla | Mérida (Fase 3 bis) |
|---|---|---|---|---|
| **TAM accesible** | ~400-900 ICP-potenciales (Run 2-bis) | ~600-1,200 (Run 2-bis) | ~1,200-2,400 (Run 2-bis) | 150-600 ICP estricto (Run Mérida) |
| **Densidad ICP** | Concentrada Blvd. Kino y zonas premium | Centro Histórico + corredor Álamos | Centro Histórico + Angelópolis | Centro + Paseo Montejo |
| **Cuisine fit** | Alto (steakhouses, mariscos, mexicana contemporánea) | Alto (fine dining + casual contemporáneo) | Alto (cocina poblana contemporánea + clásica) | Alto (cocina yucateca contemporánea) |
| **Marco regulatorio** | Frontera norte (no IVA 8% — Sonora no califica) pero sí SM frontera | Sin beneficios fronterizos | Sin beneficios fronterizos | Sin beneficios fronterizos |
| **Competencia tecnológica** | Baja-media (sin penetración POS documentada) | Media (Parrot/PoloTab presentes en cluster premium) | Media (cadenas CDMX llegando) | Baja (sin penetración documentada) |
| **Canal viable** | CANIRAC Sonora moderada; consultores no identificados | **CANIRAC más activa**; consultores no identificados | CANIRAC con voz pública (Carlos Azomoza Alacio) | CANIRAC Yucatán activa (Israel López García) |
| **Conectividad logística TJ** | Buena (~900 km) | Media (vía CDMX) | Media (vía CDMX) | **Prohibitiva sin partnership** |
| **Comunidad institucional** | Moderada | **Alta** | Alta | Alta |
| **Vínculos personales** | Sin red identificada | Sin red identificada | Sin red identificada | Sin red identificada |
| **Reconocimientos amplificadores** | Sin Michelin / 50 Best | **Michelin México 2026** | **Michelin México 2026** | **Michelin México 2026 + 50 Best LatAm potencial** |

**Lectura estratégica.** Querétaro emerge como la plaza Fase 3 más balanceada — CANIRAC fuerte, Michelin 2026, cluster fine dining identificable, conectividad media. Puebla la sigue de cerca con TAM superior y cluster con identidad nacional. Sonora ofrece la mejor conectividad pero menor amplificador narrativo. Mérida tiene los amplificadores más fuertes (Michelin + identidad regional única) pero la peor conectividad — confirmando el tratamiento Fase 3 bis con modelo remoto + partnership.

### 3.4 Criterios eliminatorios vs criterios de priorización

Los criterios anteriores son de **priorización** dentro de las plazas que ya cumplieron los criterios mínimos del scope. Hay tres condiciones que **eliminan** una plaza del scope independientemente de cómo califique en los criterios anteriores:

1. **Operación informal sistémica.** Plaza donde el operador típico no cumple el filtro mínimo de formalidad (RFC + CFDI 4.0 + 1+ año operando) en proporción suficiente para sostener TAM accionable razonable.
2. **Ecosistema casual independiente no medible.** Plaza dominada por formatos fuera del scope (food trucks individuales, cantinas tradicionales sin cocina, fondas micro) sin masa de casual independiente formal.
3. **Marco regulatorio fundamentalmente distinto.** Aplica primariamente a Fase 5 LATAM — países donde el marco fiscal, de protección de datos o de IA cambia radicalmente las condiciones de operación de Zenet.

Estos criterios eliminatorios están alineados con las exclusiones del doc 02 §3.1 y se mantienen como filtro de primera línea.

---

## 4. Por qué Tijuana como plaza de origen

Tijuana no fue elegida como plaza de origen por proximidad personal ni por azar. Es la plaza con la combinación más fuerte de criterios estructurales para validar el modelo Zenet en su forma más exigente. Esta sección desarrolla las cinco razones que sostienen la decisión.

### 4.1 Frontera norte — capacidad de pago estructural

**Salario mínimo elevado.** El SM frontera norte 2026 es **$440.87 MXN/día (+5% vs 2025)** vs nacional **$315.04 MXN/día (+13%)** (`08` §3.3). En base mensual, eso son **$13,409 MXN frontera vs $9,582 MXN nacional** — diferencial de +40% que se sostiene desde 2019. El operador casual independiente formal de TJ paga nómina más alta que su equivalente del interior, lo que **filtra estructuralmente** al segmento informal: solo los operadores con margen suficiente para absorber el costo laboral formal sobreviven en BC.

**Beneficio fiscal IVA 8%.** El decreto de estímulos fiscales región fronteriza norte mantiene **IVA 8% sobre alimentos preparados** vs 16% nacional. Decreto renovado el 31 dic 2025, vigente todo 2026 (`08` §2.4). Esto da al operador BC **8 puntos porcentuales adicionales de margen** sobre el ticket bruto vs su equivalente del interior. Un restaurante que vende $1M MXN al mes en BC retiene $80,000 MXN más al año respecto al mismo restaurante en CDMX.

**BC en el top 3 nacional de salarios.** Baja California es el **tercer estado con mejor salario promedio del país ($14,711 MXN/mes)**, después de CDMX ($16,578) y Baja California Sur ($15,825) (Periódico El Debate, 2026; `06` §3.6). Eso significa que el ticket promedio que el cliente final puede pagar en BC es competitivo respecto a las plazas centro-sur, sin la saturación de CDMX.

**Implicación operativa.** El operador TJ que paga $1,500 MXN/mes/sucursal por software lo absorbe con menos fricción que su contraparte de Puebla o Hermosillo. La capacidad de pago no es supuesta — es estructural por marco fiscal y salarial.

### 4.2 Cluster gastronómico maduro con identidad propia

**Cluster fine dining chef-driven.** Grupo Plascencia (Misión 19, Animalón, Erizo, Jaguar — 4 marcas hermanas) opera como referente nacional de cocina Baja Med (`02`, `06`). Javier Plascencia es figura de prensa nacional sostenida (Saborearte 2024, El Universal Menú 2024). Sumado a Oryx (Ruffo Ibarra) — restaurante recomendado en Guía Michelin México 2024-2025 (Run 1, abr 2026) — el cluster tiene profundidad reputacional.

**Cluster brewpub con cocina protagonista.** Cervecería Insurgente y Border Psycho son los dos más visibles, con presencia en Avenida Revolución (Border Psycho — La Cantina, Av. Revolución 821) y otros corredores. Run 1 identificó candidatos adicionales con cocina propia: Norte Brewing, Madueño Brewing, Mamut Brewery, Teorema Brewing — todos con taproom + menú, aunque la profundidad del BoH varía y requiere validación de campo.

**Cluster mariscos / Baja Med multi-sucursal.** LionFish Restaurant (mariscos contemporáneos, varias sedes incluyendo LionFish Río y La Terraza), Cabanna Tijuana (microcadena nacional), La Corriente Cevichería, Villa Marina. Es el cluster donde el ICP Sub-segmento B típico (2-3 sucursales en consolidación) más se ubica.

**Otros clusters relevantes.** Italiana contemporánea (Casa Zibarita, Bianca, MOMA, Saverios, Napoli Cucina), mexicana contemporánea / Baja Med no-mariscos (La Querencia de Miguel Ángel Guerrero, Casa de Leo, Casa Bonita), internacional / fusión (Marenca, Innato, Beyka), asiática nicho (La Lonchería Japonesa).

**Implicación operativa.** TJ tiene ~15-20 candidatos identificables a casos referenciales o design partners — base suficiente para los primeros 5-10 contratos del Año 1.

### 4.3 Reconocimientos gastronómicos amplificadores

**Bib Gourmand 2025 — Carmelita Molino y Cocina (Chef Juan Cabrera).** Comfort food con cocina protagonista, 1 sucursal en momento de expansión activa post-Michelin. Caso prototipo Sub-segmento A del scope (`02`, `04`).

**Tres estrellas Michelin 2024-2025 en Valle de Guadalupe.** Aunque están técnicamente en Ensenada (Fase 2), la proximidad a TJ (~100 km) hace que la prensa y la conversación gastronómica los traten como cluster regional BC — amplificador narrativo para toda la plaza Zenet.

**Oryx — Recomendado Guía Michelin México 2024-2025.** Ruffo Ibarra como chef con visibilidad nacional (El Economista 2026), restaurante con potencial trayecto a estrella futura (Run 1).

**Implicación operativa.** El reconocimiento Michelin abre conversación con el operador en momento de inversión en sistematización (consistencia es criterio Michelin). Un caso ancla con Bib Gourmand o Recomendado en TJ vale narrativa nacional, no solo regional.

### 4.4 Comunidad gastronómica tight + peer referral viable

**Tamaño manejable.** TJ tiene ~7,000 restaurantes establecidos según CANIRAC (40% del total estatal BC; Diario Tijuana 2026). Pero el subconjunto del scope core (casual independiente formal con BoH propio en expansión) es de varios cientos, no miles. Eso permite que el equipo Zenet tenga visibilidad sobre **quién es quién**, conozca a los actores institucionales (Rebeca Aguilar Santuario en CANIRAC TJ, Iván Nolasco Cruz CANIRAC BC estatal — `08` §4.1), y use peer referral como canal real.

**CANIRAC TJ activa institucionalmente.** Bootcamp GastronomIA (enero 2026) atrajo **40 marcas representando 203 restaurantes** participantes, impartido por Raymundo Ceja González (Uniradio Baja, 2026; `06` §7.3, `08`). Programa Capacita Tijuana en alianza con FIDEM, Consejo de Desarrollo de Tijuana y CANIRAC TJ. Calendario mensual de capacitación CANIRAC nacional con sede TJ frecuente.

**Red de consultores ya validada.** Anna Palazuelos, Victor Murguía, Algira Garzón validaron cualitativamente el problema de Zenet (`02`, `06`). Es red operativa, no aspiracional.

**Implicación operativa.** El canal peer-to-peer es real en TJ. Un primer cliente satisfecho convierte conversaciones futuras a velocidad mayor que en plazas grandes anónimas.

### 4.5 Vulnerabilidades estructurales que la estrategia debe reconocer

La elección de TJ no es óptima en todos los ejes — tiene fragilidades estructurales que afectan el modelo Zenet y que merecen tratarse explícitamente, no esconderse.

**Déficit agudo de cocineros.** El sector arrastra **déficit nacional de 500,000 trabajadores** (El Economista citando CANIRAC, 2026). En TJ se intensifica por migración a Estados Unidos: **75% de cocineros abandonan antes de los 5 meses** (CANIRAC, 2024), **8 de cada 10 restaurantes operan con plantillas incompletas** (CANIRAC, 2024). El operador TJ vive con personal escaso de forma crónica.

**Implicación para Zenet.** El producto debe responder a esta realidad: estandarización que sobrevive a la rotación, manuales operativos que reducen onboarding del nuevo cocinero, capacitación documentada que el siguiente trabajador encuentra al llegar. El "augmentar, no reemplazar" toma significado concreto en un contexto donde el equipo es siempre incompleto.

**Dependencia cross-border y volatilidad turística.** TJ depende parcialmente de turismo y clientela san-dieguina cruzando la frontera. CANIRAC reportó cierres en 2025 ligados a desaceleración económica y caída del turismo USA (OEM Sol de Tijuana, 2025; Run 1). El modelo Zenet debe demostrar valor independiente de la afluencia turística — el operador con data limpia y procesos sistemáticos defiende margen en mes flojo, no solo lo amplifica en mes lleno.

**Informalidad parcial sectorial.** A pesar del filtro fiscal frontera, **44% de cocineros del sector sin IMSS** y **70% de restaurantes sin seguridad social** (INEGI Q1 2025, La Jornada 2020; `06` §3.6). El segmento que paga Zenet — operador formal completo — es subset del sector total, no su totalidad. El sizing realista debe partir de ese filtro.

**Moratoria Zona Norte 2024-2030.** Decretada en abril 2024, suspende permisos de uso de suelo, operación y alcohol en polígono ~15 cuadras de Zona Norte por 6 años (Punto Norte 2024; `08` §5.2). No afecta scope Zenet directamente — Zona Norte tiene baja densidad de ICP — pero cierra una zona viable de expansión para operadores que la consideraban.

### 4.6 Síntesis — la apuesta detrás de elegir TJ

TJ ofrece **el contexto más exigente y simultáneamente más viable** para validar el modelo Zenet:

- Capacidad de pago estructural (frontera norte fiscal y salarial).
- Cluster gastronómico maduro con casos identificables.
- Reconocimientos Michelin/Bib que abren conversación.
- Comunidad tight donde peer referral funciona.
- Vulnerabilidades reales (déficit personal, dependencia cross-border) que **el producto debe resolver, no rodear** — y eso lo hace mejor producto cuando se lleve a otras plazas.

La doctrina implícita: si Zenet funciona en TJ, donde el déficit de cocineros es más agudo y la presión cross-border es más volátil, funciona en cualquier otra plaza Fase 2-4. Si no funciona en TJ, no se rescata escalando antes de validar.

---

## 5. Anatomía de Tijuana — sub-zonas y concentración del ICP

TJ no es una plaza homogénea. Las decisiones de outbound, evento, partnership y caso ancla cambian según sub-zona. Esta sección mapea las diez sub-zonas con relevancia para el ICP del scope Zenet, identifica los tres corredores más densos, y deriva implicaciones operativas para el equipo.

Las cifras de ICP por zona son **estimaciones razonadas** — no hay conteo censal público de "casual independiente formal con BoH propio" por delegación. Provienen de cruce entre listados curados (OpenTable, TripAdvisor, guías locales), creadores de contenido gastronómico TJ (Baja Foodie / Baja Califoodie) y caracterización pública de las zonas (Run 1, abril 2026). Sirven para orden de magnitud y priorización relativa, no como cifra exacta.

### 5.1 Las diez sub-zonas

**5.1.1 Zona Río / Zona Urbana Río Tijuana.** Eje Paseo de los Héroes / Paseo Centenario / Blvd. Sánchez Taboada, de glorieta Cuauhtémoc a 3ª Etapa del Río. Plaza Río como ancla. Promovida públicamente como "centro gastronómico de clase mundial" (Metroguia 2024).
- ICP estimado: 120-180 restaurantes casual independiente formal.
- Cuisine dominante: mexicana contemporánea / Baja Med, steakhouse, italiana, mariscos, internacional.
- NSE atendido: medio-alto y alto, ejecutivos, turismo médico y gastronómico.
- Casos ancla: Misión 19 (Plascencia), LionFish Río, Marenca, Mochomos TJ, Innato.
- Dinámica 2024-2026: **crecimiento sostenido**.

**5.1.2 Zona Centro (Av. Revolución / 2ª a 10ª).** Cuadrante Av. Revolución–Constitución–Niños Héroes, Pasaje Rodríguez, Mercado Hidalgo. Mezcla de bares, brewpubs, restaurantes de autor y comida tradicional para turismo fronterizo.
- ICP estimado: 80-130 restaurantes casual independiente formal.
- Cuisine dominante: brewpub con cocina, mexicana tradicional, Baja Med casual, autor, mariscos.
- NSE: amplio rango, fuerte componente turístico USA "value seeking".
- Casos ancla: Border Psycho — La Cantina (Av. Revolución 821), Caesar's, conceptos de autor.
- Dinámica 2024-2026: **crecimiento moderado** con rotación alta en corredores de fiesta; viralidad acelera apertura en conceptos instagrameables (El Imparcial, abr 2026).

**5.1.3 Zona Norte.** Barrio rojo al norte de Zona Centro, entorno de Calle Coahuila.
- ICP estimado: 15-30 restaurantes que califican como casual independiente formal.
- Cuisine dominante: bajo ticket, late-night, comida rápida, antojos.
- Dinámica 2024-2026: **estable / ligera contracción** en formatos formales. Moratoria 2024-2030 cierra nuevos permisos (`08` §5.2).
- Implicación scope: zona de baja prioridad para outreach Zenet.

**5.1.4 Otay (Otay Universidad, Otay Constituyentes, zona Aeropuerto).** Eje Blvd. Industrial, Garita Otay, campus UABC y otras universidades.
- ICP estimado: 60-90 restaurantes casual independiente formal.
- Cuisine dominante: mexicana casual, carne asada, antojitos, comida rápida mejorada, pizzerías, internacional ligera.
- NSE: medio y medio-bajo, trabajadores industriales y estudiantes.
- Dinámica 2024-2026: **crecimiento** ligado a industria, vivienda vertical y flujo a garita.
- Casos: oportunidad para formatos eficientes y escalables; algunos grupos usan Otay como base para expansión a Garita Otay y San Diego.

**5.1.5 Playas de Tijuana.** Delegación Playas, eje Paseo Ensenada / Paseo Costero hasta el muro fronterizo.
- ICP estimado: 50-80 restaurantes casual independiente formal.
- Cuisine dominante: mariscos, Baja Med, autor de mar, bares-restaurante con vista.
- NSE: medio y medio-alto local, turismo nacional, visitante sandieguino "day trip".
- Dinámica 2024-2026: **crecimiento moderado** consolidando sub-destino lifestyle.

**5.1.6 Cerro Colorado / 3ª Etapa del Río / Zona Este emergente.** Área residencial-comercial al oriente de 3ª Etapa, Cerro Colorado y bulevares principales.
- ICP estimado: 40-70 restaurantes casual independiente formal en plazas nuevas y corredores viales.
- Cuisine dominante: mexicana, wings/burgers, italiana básica, mariscos, conceptos familiares.
- NSE: medio y medio-bajo residencial.
- Dinámica 2024-2026: **crecimiento** según contenido de creadores como Baja Foodie ("3ª Etapa del Río como nueva zona fuerte para comer").

**5.1.7 Lomas de Agua Caliente / Hipódromo / Agua Caliente.** Entorno Hipódromo Agua Caliente, Blvd. Agua Caliente, colinas residenciales.
- ICP estimado: 50-80 restaurantes casual independiente formal.
- Cuisine dominante: mexicana contemporánea / Baja Med, steakhouse, internacional fine-casual.
- NSE: medio-alto y alto.
- Casos ancla: Oryx (Ruffo Ibarra), restaurantes premium ligados a hoteles y casinos.
- Dinámica 2024-2026: **crecimiento** en fine-casual y autor, impulsado por reconocimiento Michelin.

**5.1.8 Las Palmas / La Mesa.** Colonias Las Palmas y La Mesa, ejes Blvd. Insurgentes, Díaz Ordaz y bulevares secundarios.
- ICP estimado: 70-110 restaurantes casual independiente formal.
- Cuisine dominante: mexicana familiar, tacos, pollos, mariscos, italianas casuales, gastropubs.
- NSE: medio y medio-bajo, fuerte consumo local de frecuencia alta.
- Dinámica 2024-2026: **crecimiento leve pero estable** por base residencial amplia.

**5.1.9 Insurgentes (corredor Blvd. Insurgentes y periferia).** Tramo largo de Blvd. Insurgentes desde La Mesa hacia el este, múltiples plazas.
- ICP estimado: 60-90 restaurantes casual independiente formal.
- Cuisine dominante: mexicana casual, fast-casual, pollo, pizza, mariscos, propuestas American style.
- NSE: medio y medio-bajo.
- Dinámica 2024-2026: **estable**.

**5.1.10 Chapultepec (Paseo Chapultepec, Col. Chapultepec).** Entorno Paseo Chapultepec al sur de Zona Río, colonias residenciales Chapultepec.
- ICP estimado: 60-90 restaurantes casual independiente formal.
- Cuisine dominante: internacional contemporánea, mexicana moderna, gastropub, autor.
- NSE: medio-alto y alto, jóvenes profesionales, empresarios, turismo gastronómico.
- Dinámica 2024-2026: **crecimiento / consolidación** como cluster lifestyle anclado en seguridad y formato peatonal.

### 5.2 Los tres corredores más densos para outreach Zenet

**Corredor 1 — Zona Río (Plaza Río + Paseo Héroes + Sánchez Taboada).** Mayor concentración absoluta de ICP del scope core en pocos kilómetros. Casos ancla potenciales: Misión 19 (Plascencia), LionFish Río, Mochomos, Marenca. Es el corredor de **caso ancla narrativo** — un cliente aquí amplifica más que un cliente en zona residencial.

**Corredor 2 — Paseo Chapultepec / Hipódromo.** Cluster lifestyle con NSE medio-alto y alto. Densidad alta de conceptos chef-driven (Oryx, restaurantes Michelin recomendados) y bares con cocina seria. Es el corredor de **profundidad reputacional** — un cliente aquí abre conversación con el resto del cluster.

**Corredor 3 — Avenida Revolución y entorno (Zona Centro).** Densidad alta de brewpubs, autor y mariscos. Casos como Border Psycho con presencia direct-to-consumer fuerte. Es el corredor de **cluster brewpub con cocina** — caso ancla aquí refuerza una de las narrativas diferenciadoras de TJ.

Otros corredores con densidad relevante: Blvd. Agua Caliente (zona Hipódromo, fine-casual), Blvd. Insurgentes / Díaz Ordaz (residencial amplio), 3ª Etapa del Río (emergente).

### 5.3 Implicaciones operativas para el equipo Zenet

**Priorización inicial.** Los primeros 10-15 outreach del equipo deberían concentrarse en Corredores 1 y 2 (Zona Río + Chapultepec/Hipódromo). Razón: mayor densidad de ICP del scope core + mayor amplificación narrativa por proximidad a referentes.

**Cobertura de mapa.** El doc 07 v1.0 no es lista contactable de operadores por zona — eso es trabajo de outbound real. Pero el cruce de las diez sub-zonas con la lista de candidatos identificados (Run 1) sostiene una matriz que ventas debería construir como primer entregable: zona × candidato × prioridad × estado.

**Eventos y presencia física.** Plaza Río (Zona Río) es la sede natural de eventos profesionales. Caliente Casino estacionamiento es sede de Baja Culinary Fest exposición principal (sección 6). La presencia de Zenet en eventos debería priorizar estas sub-zonas, no las residenciales.

**Total ICP estimado para TJ.** La suma de las diez sub-zonas da rango ~600-1,000 ICP del scope core. Aplicando filtro "en expansión activa" (10-20% del bucket; `02` §6), el SOM accionable Año 1-2 está en **~60-200 cuentas accionables** — consistente con el rango 150-500 que doc 02 declaró para TJ y con el SAM 150-500 del doc 03.

---

## 6. Comunidad, eventos y prensa local TJ

Tijuana tiene la combinación de comunidad institucional, eventos sectoriales y prensa local más madura entre las plazas Fase 1-3 del scope Zenet. Esta sección la mapea como input directo para decisiones de canal, presencia física y partnership.

### 6.1 Eventos sectoriales recurrentes

**Baja Culinary Fest — el evento ancla.** Festival gastronómico regional con fuerte componente profesional. Organizado por Secretaría de Turismo de BC, chefs locales y comité organizador. La edición 11 (oct 2024) se celebró del 16 al 20 de octubre con sedes en Misión 19, La Querencia y Saverios para cenas maridaje con chefs invitados; concurso culinario profesional y estudiantil; exposición principal en Caliente Casino con **40+ restaurantes, 20+ vinícolas, talleres**; afluencia esperada de **~3,000 personas** (Saborearte 2024, El Universal Menú 2024, Ciudad Tijuana 2024).
- Periodicidad: anual (octubre).
- Asistencia operadora: alta — el comité organizador y los anfitriones son operadores reales del scope core.
- Implicación para Zenet: presencia obligatoria. Pre-evento como momento ideal para activar outreach con anfitriones; post-evento como momento de seguimiento con asistentes.

**Bootcamp GastronomIA — capacitación CANIRAC TJ.** Enero 2026 — taller intensivo de IA en gestión restaurantera, **40 marcas representando 203 restaurantes de Tijuana participantes** (Uniradio Baja 2026; `06` §7.3, `08` §4.1). Impartido por Raymundo Ceja González.
- Periodicidad: por confirmar — primera edición pública 2026.
- Implicación para Zenet: oportunidad de partnership formal (capacitación co-marcada en próxima edición). El público objetivo del evento **es exactamente el ICP** y el formato (taller intensivo, no panel pasivo) favorece producto que aterriza en operación.

**Capacita Tijuana.** Programa continuo de capacitación con FIDEM, Consejo de Desarrollo de Tijuana y CANIRAC TJ. Calendario menos público que Bootcamp.

**Festival del Pescado y el Marisco (Ensenada).** Aunque sede formal es Ensenada, el componente B2B atrae operadores TJ. VI edición documentada por Gobierno BC con participación de restaurantes incluso de CDMX usando productos del mar de BC (Run 2).
- Periodicidad: anual.

**Catas y eventos de Provino BC.** Asociación de vinícolas con múltiples vendimias y eventos a lo largo del año. Componente B2B de proveedores y operadores. Calendario detallado disponible en sitio Provino directamente.

### 6.2 Asociaciones, cámaras y comunidad

**CANIRAC Tijuana.** Capítulo local con consejo directivo 2026-2027 encabezado por **Rebeca Aguilar Santuario** (Zeta Tijuana 2026; `06` §7.3, `08`). Presidente estatal BC: **Iván Nolasco Cruz**. Ciudad con 7,000+ restaurantes establecidos, 40% del estado (Diario Tijuana 2026). Membresía afiliada: fracción significativa del padrón formal — cifra exacta no publicada.
- Actividades: cabildeo regulatorio, promoción gastronómica, capacitaciones, eventos institucionales.
- Implicación para Zenet: touchpoint institucional accionable más concreto en TJ. Outreach directo con Aguilar Santuario es viable y validado por el Bootcamp GastronomIA.

**Provino Baja California.** Asociación de vinicultores BC. Organiza vendimias y eventos. Participa en Baja Culinary Fest (Saborearte 2024).
- Implicación para Zenet: tangencial pero útil para casos del Valle de Guadalupe (sección 8.2).

**AMR — Asociación Mexicana de Restaurantes.** Presencia institucional nacional con lectura del sector BC. Voz pública sostenida sobre estandarización de recetas vinculada con +15% rentabilidad y "costo silencioso de la improvisación" como frame del problema (`06` §7.3). Aliada narrativa natural para el frame Zenet.

**Otras asociaciones.** Vatel Club, Mesa Hispana, Slow Food TJ, asociaciones de bartenders y sommeliers — presencia documentada pero peso operativo menor para casual independiente formal.

### 6.3 Espacios físicos de comunidad gastronómica

**Culinary Art School (CAS).** Escuela de gastronomía profesional en TJ. Sede del concurso culinario profesional y estudiantil de Baja Culinary Fest 2024 (El Universal Menú 2024). Punto de encuentro estudiantes-chefs-proveedores; nodo natural para iniciativas de capacitación y pilotos tecnológicos.
- Implicación para Zenet: potencial partnership con la escuela (talleres de costeo, sistemas operativos, IA en BoH) que genera lead a estudiantes que luego operarán restaurantes.

**Mercado Hidalgo.** Cerca de Zona Río. Mercado tradicional de productos regionales con presencia de restaurantes y fondas; lugar de abastecimiento y networking informal entre proveedores y cocineros.

**Plazas gastronómicas — Paseo Chapultepec, Plaza Río, Caliente Casino estacionamiento.** Hubs naturales para meetups con operadores y eventos sectoriales.

**Universidades con carreras gastronómicas en TJ.** UABC, CETYS, CUT con programas de gastronomía/turismo. Detalle específico de campus por verificar en próxima iteración.

### 6.4 Prensa local y medios gastronómicos

**Periódicos generales con cobertura industria restaurantera.**

| Medio | Cobertura típica | Accesibilidad para pitch industrial |
|---|---|---|
| **AFN Tijuana** | Notas de negocio y economía gastronómica (caso "Tijuana Competitiva") | Alta |
| **Diario Tijuana / El Imparcial sección TJ** | Temas gastronómicos y empresariales | Viable vía área de economía/negocios |
| **Zeta Tijuana** | Investigación con cobertura cultura y conversatorios gastronómicos para estudiantes | Vía cultura o economía |
| **El Sol de Tijuana (OEM)** | Entrevistas a CANIRAC TJ sobre cierres y perspectivas | Sección economía/local |

**Blogs y revistas.**

- **Baja Foodie / Baja Califoodie.** Creadores de contenido enfocados en consumidor pero con audiencia operadora. Identificó "3ª Etapa del Río" como nueva zona fuerte para comer (Run 1). Útil para colaboraciones tangenciales sobre restaurant tech.
- **Saborearte, El Universal Menú.** Cobertura nacional de Baja Culinary Fest y chefs locales. Útil para posicionar casos emblemáticos de TJ con audiencia nacional.
- **Sitios de turismo (Baja California Travel, Hoteles.com Go Guides).** Útiles para reforzar narrativa de destino, no para pitch industrial directo.

**Influencers y voceros con audiencia mixta consumidor-industria.**

- **Chefs con presencia mediática:** Ruffo Ibarra (Oryx), Javier Plascencia (Misión 19), Miguel Ángel Guerrero (La Querencia). Nodos clave para difundir innovaciones BoH en su comunidad.
- **Cuentas tipo Baja Foodie / Baja Califoodie.** Audiencia mixta — su reseña influye en decisiones de apertura/expansión.

**Periodistas específicos por nombre.** [SIN FUENTE PUBLICADA] El Run 1 no logró extraer firmas individuales de las notas consultadas. Trabajo pendiente: revisar notas completas para extraer autores, o pedir media list a CANIRAC TJ y Sectur BC.

### 6.5 Implicaciones operativas — calendario de presencia física Zenet

A partir del mapeo anterior, la presencia física TJ del equipo Zenet (eventos donde estar presente) en orden de prioridad:

| Evento / espacio | Periodicidad | Acción Zenet sugerida |
|---|---|---|
| **Baja Culinary Fest** | Anual (oct) | Presencia obligatoria; pre-evento outreach con anfitriones |
| **Bootcamp GastronomIA / Capacita TJ** | Por edición CANIRAC | Partnership formal de co-capacitación (acción Q3 2026) |
| **Reuniones CANIRAC TJ con consejo directivo** | Periodicidad CANIRAC | Outreach directo con Aguilar Santuario (acción Q1-Q2 2026) |
| **CAS — talleres / eventos académicos** | Calendario CAS | Partnership con escuela para talleres de costeo / sistemas |
| **Vendimias Provino BC** | Múltiples al año | Tangencial — útil para casos Valle de Guadalupe |

El equipo Zenet no necesita presencia en todos los eventos consumidor-foodie de TJ. La regla operativa: **donde está el operador**, no donde está el comensal.

---

## 7. Mexicali — capital del estado

Mexicali es la segunda plaza BC en orden de prioridad operativa después de TJ. Comparte los beneficios fiscales de frontera norte pero opera con dinámica gastronómica distinta: menos turismo, más mercado local, identidad regional dominada por la cocina chinesca y los asaderos. Esta sección la caracteriza con las cifras y casos disponibles, marcando los huecos honestamente.

### 7.1 Caracterización general

**Tamaño y economía.** Capital de Baja California. ZM Mexicali ~1.1-1.2M habitantes 2024-2026 (proyección Conapo, requiere validación). Economía basada en maquila e industria manufacturera, servicios, comercio y agroindustria del valle agrícola. Mexicali concentra el aparato administrativo del estado.

**Frontera norte — beneficio fiscal compartido con TJ.** Mexicali está en la región fronteriza norte con IVA 8% sobre alimentos preparados y SM frontera elevado (`08` §2.4, `08` §3.3). El operador formal de Mexicali carga la misma estructura de costos y márgenes que el de TJ, lo que mantiene la viabilidad de pricing Zenet uniforme MX (`07` §17).

**Identidad regional distintiva — cocina chinesca.** Mexicali tiene una de las comunidades chinas históricas más grandes de México y se promueve como **"capital de la comida china en México"** (Escapadas México Desconocido 2024). La cocina chinesca local (cantonesa adaptada al gusto mexicano) es seña identitaria con presencia masiva: decenas de restaurantes de gran formato.

**Turismo.** Moderado comparado con TJ y Ensenada. Más orientado a gastronomía (chinesca, tacos, cerveza artesanal) y negocios por maquila que a ocio masivo.

**Clima.** Extremo en verano (>45°C frecuentes). Impacta costos energéticos (aire acondicionado intensivo) y patrones de consumo (horarios desplazados, mayor delivery en meses calurosos). Es factor que el modelo operativo del cliente Mexicali debe contemplar.

### 7.2 TAM estimado

| Capa | Estimación |
|---|---|
| Universo total restaurantes formales ZM Mexicali | 2,000-3,000 (extrapolación desde TJ; requiere DENUE 722 para confirmar) |
| Casual independiente formal con BoH propio | 20-30% del universo → ~400-900 unidades ICP-potenciales |
| Aplicando filtro "en expansión activa" (~10-20%) | **~40-180 cuentas accionables Año 2-3** |

Las cifras son consistentes con el rango BC adicional 1,000-2,000 del SAM Fase 2 declarado en doc 03 §3.2, asumiendo que Mexicali contribuye aproximadamente el 50% del SAM BC fuera de TJ.

### 7.3 Cuisines dominantes y casos referenciales

**Cluster chinesca multi-sucursal.** Es el cluster más característico de Mexicali y candidato natural para casos ancla. Los nombres identificables públicamente:

- **Imperial Garden** — concepto desde 2004, dueño Pablo Abel Chee (Escapadas México Desconocido, 2024). Cocina cantonesa adaptada. 1 sede principal documentada; estructura de grupo por verificar.
- **Chiang's Cocina China** y **Chieng's Bistro** — bien valorados en TripAdvisor (2024).
- **Cheng Heng** — cocina cantonesa y mariscos, servicio a domicilio (Infoisinfo Mexicali 2024).
- **China House Mexicali** — Justo Sierra 1001, Col. Burocrata. Potencial multi-sucursal bajo marca.
- **Golden Island, Lucky City, otros** — listados en rankings, posibles grupos.

[SIN FUENTE PUBLICADA] sobre cuáles son los grupos chinesca con BoH propio y multi-sucursal confirmada. Para identificarlos se requiere DENUE Mexicali (SCIAN 722) + filtrado por razón social + validación con CANIRAC Mexicali.

**Cluster asaderos y cortes.** Cocina al estilo Sonora/Baja con influencia ranchero-fronteriza. Asadero Acuña y otros asaderos locales documentados en blogs y prensa local. Estructura de grupo por verificar caso por caso.

**Cluster mariscos del Golfo de California.** Marisquerías con varias sedes; Mariscos El Güero y otros nombres aparecen en rankings locales sin estructura de grupo confirmada.

### 7.4 Comunidad e institucionalidad

**CANIRAC Mexicali.** Capítulo local relevante por ser ciudad capital. Cabildeo y gestión regulatoria estatal. Calendario público detallado de eventos no localizado en este research — sugerencia de outreach directo (Run 2).

**Eventos sectoriales.** Mexicali no tiene un festival gastronómico urbano con componente B2B comparable a Baja Culinary Fest de TJ. La promoción gastronómica del estado concentra recursos en TJ y Ensenada/Valle. [SIN FUENTE PUBLICADA] sobre festivales sectoriales propios de Mexicali.

**Prensa local.** La Voz de la Frontera (OEM), La Crónica de Mexicali — cobertura económica con notas sobre cierres y dinámica del sector. Cobertura gastronómica nacional puntual (Escapadas México Desconocido sobre cocina chinesca).

**Cierres documentados 2025.** CANIRAC Mexicali reportó cierre de **18 restaurantes 2025** dentro de su membresía + **430 empresas formales cerradas reportadas por IMSS** en la ciudad (OEM Voz de la Frontera, 2025). Es señal de presión del sector que coincide con el discurso nacional CANIRAC sobre desaceleración económica.

### 7.5 Implicaciones operativas para Zenet

**Pre-condición de entrada.** Pre-PMF demostrado en TJ con 5+ design partners contratados, antes de outreach activo en Mexicali. Mientras tanto, leads orgánicos de Mexicali se atienden — pero no se persiguen.

**Modelo de entrada.** Equipo TJ + viajes Alan. La conectividad TJ-Mexicali es buena (~190 km por carretera, 2-3 horas, sin escalas) — viajes mensuales son viables sin disrupción operativa del equipo TJ.

**Caso ancla potencial — cluster chinesca.** El cluster chinesca de Mexicali es candidato narrativo único: si Zenet gana al primer grupo chinesca multi-sucursal (Imperial Garden u otro), abre conversación con un cluster vertical específico que no existe en otras plazas BC. Vale identificarlo como objetivo de outbound dirigido cuando llegue el momento.

**Riesgo a documentar.** Las 17 inspecciones COEPRIS al mes citadas para BC en doc 08 aplican a Mexicali con la misma intensidad que a TJ. La narrativa "data limpia es defensa" funciona aquí.

---

## 8. Ensenada urbano y Valle de Guadalupe

Ensenada y el Valle de Guadalupe son dos plazas distintas — geográficamente próximas pero operativamente diferenciadas. Ensenada urbano es ciudad portuaria con cluster mariscos consolidado; el Valle es cluster vinícola gastronómico de alto valor con casos chef-driven en hoteles boutique. Las trato en una sola sección porque comparten ecosistema regional y porque la decisión sobre el Valle como caso especial activable se tomó de forma conjunta.

### 8.1 Ensenada urbano

**Tamaño y economía.** ZM Ensenada urbano ~350-450K habitantes (sin contar interior del municipio). Economía basada en puerto, pesca y marisquería, servicios, turismo, y como puerta al Valle de Guadalupe. **Capital marisquera de México** según narrativa institucional y prensa nacional (TripAdvisor 2024, Gobierno BC 2024).

**TAM estimado.** Universo de restaurantes formales 800-1,500 (urbano sin Valle); casual independiente formal con BoH propio ~160-450 unidades; aplicando filtro de expansión activa, **~16-90 cuentas accionables Año 2-3**.

**Cuisines y casos referenciales.**

- **Cluster mariscos icónico.** **La Guerrerense** (Doña Sabina Bandera) — referente nacional de mariscos callejeros con presencia en 50 Best Street Food y prensa nacional sostenida. Operación con puesto original + locales formales + presencia fuera de Ensenada (CDMX). Es caso ancla con visibilidad nacional disproporcionada respecto al tamaño urbano de Ensenada.
- **Muelle 3** — mariscos contemporáneos en zona portuaria. Reseñas en TripAdvisor y blogs nacionales (2024).
- **Mariscos Bahía de Ensenada, Mariscos El Güero, El Primo Nava, Mahi-Mahi** — marisquerías con presencia local y multi-sucursal probable (estructura de grupo por verificar caso por caso).
- **Tacos Fénix y Tacos Floresta** — taquerías de mariscos con varias carretas/puntos. Caso interesante de cadena local con BoH propio (central de insumos potencial).
- **El Rey Sol** — restaurante clásico francés con identidad histórica nacional.
- **King and Queen Cantina** — caso cross-border con presencia en San Diego y Ensenada. Útil como caso de operación a ambos lados de la frontera.

**Eventos sectoriales.** **Festival del Pescado y el Marisco** — anual, con componente B2B documentado. Edición VI con participación de restaurantes incluso de CDMX usando productos del mar de BC (Gobierno BC 2024). Provino BC organiza vendimias y eventos de vino con sede en zona Valle pero con componente urbano (catas en Ensenada ciudad).

**Comunidad institucional.** CANIRAC Ensenada activa, participa en co-organización de festivales de mariscos. Cooperativas pesqueras y cámaras de productos del mar articuladas con restaurantes urbanos vía festivales. Es la plaza BC con más densidad de productores locales con relación HORECA directa.

**Implicaciones para Zenet.** Pre-PMF TJ demostrado como pre-condición. Conectividad TJ-Ensenada buena (~100 km por carretera, 1.5 horas). Caso ancla potencial: La Guerrerense por amplificación narrativa nacional, aunque el modelo (puesto + locales) tiene complejidad operativa que vale validar el fit con producto Zenet primero.

### 8.2 Valle de Guadalupe — caso especial activable desde Año 1

**Por qué se trata distinto.** El Valle es geográficamente Fase 2 (BC), pero **operativamente NO es el ICP del beachhead estricto** (Sub-segmento B típico, 2-3 sucursales en consolidación). El Valle es chef-driven en hoteles boutique con identidad gastronómica de alto valor — modelo equivalente, no core.

**Por qué vale activar desde Año 1.** Cuatro razones:

1. **Un caso ancla del Valle vale como narrativa nacional**, no solo regional. Animalón en Bruma, Manzanilla y Fuego Cocina del Valle son nombres que cualquier operador casual independiente en MX reconoce.
2. **Tres estrellas Michelin 2024-2025 en el Valle** + reconocimientos 50 Best LatAm previos amplifican el cluster a nivel regional latinoamericano.
3. **El costo operativo es bajo:** ~100 km de TJ, mismo huso horario, misma red logística (La Canasta cubre Ensenada y Valle según doc 06 §4.4).
4. **El riesgo es de foco:** cazar al Valle activamente roba bandwidth del beachhead Sub-segmento B en TJ.

**Regla operativa: abrir la puerta, no salir a tocarla.** Si Animalón en Bruma, Manzanilla u otros del Valle llegan vía referido, prensa o LinkedIn de Alan, se convierten con prioridad alta como design partner. Si no llegan, no se invierte outbound activo en el Valle hasta que el beachhead TJ esté firme.

**Casos identificables en el cluster Valle.**

- **Animalón en Bruma** (Javier Plascencia, ubicado en hotel boutique Bruma).
- **Manzanilla** (Benito Molina, Solange Muris).
- **Fuego Cocina del Valle.**
- **Deckman's en El Mogor** (Drew Deckman).
- **Laja** (Jair Téllez, referente histórico del Valle).
- **Otros restaurantes en hoteles boutique** del Valle — Encuentro Guadalupe, Endémico, Cuatro Cuatros, La Lomita, varios más.

**Productores y proveedores con cobertura HORECA Valle.** Provino BC con 80+ vinícolas (`02`, `06` §4.5), cinturón quesero Ojos Negros (La Cava de Marcelo / Quesos Ramonetti, Casa Marcelo en Ensenada), aceite de oliva (mayoría producida en Ensenada y consumida en el Valle), cooperativas pesqueras y mariscos directos del Mercado Negro. La cadena upstream del Valle es densa y especializada — es activo del cluster.

**Implicaciones operativas para Zenet — Valle.** Producto debe soportar nativamente: trazabilidad de proveedor pequeño/artesanal (vinícola micro, productor de queso, aceite con producción limitada), recetario que cambia por temporada y por disponibilidad de producto, costeo por evento (muchos restaurantes del Valle operan modelos chef's table o cenas reservadas vs servicio continuo). Este modelo es más exigente que el del Sub-segmento B típico — pero los aprendizajes alimentan el producto cuando llegan operadores chef-driven en otras plazas.

### 8.3 Síntesis Ensenada + Valle

Ensenada urbano es plaza Fase 2 estándar con cluster mariscos sólido y eventos B2B (Festival del Pescado y Marisco) accionables. Su caso ancla narrativo más fuerte es La Guerrerense por amplificación nacional.

Valle de Guadalupe es **caso especial activable desde Año 1** con regla "abrir la puerta, no salir a tocarla". Un caso ancla del Valle (Animalón, Manzanilla, Fuego, Deckman's u otro) genera narrativa nacional que beneficia a Zenet más allá del valor MRR del cliente individual. La regla preserva foco en el beachhead Sub-segmento B sin perder la oportunidad de oro si llega.

---

## 9. Rosarito y Tecate — satélites de Tijuana

Rosarito y Tecate son las dos plazas BC más pequeñas del scope de Fase 2. Su tratamiento es más breve que el de Mexicali y Ensenada/Valle por dos razones: (1) ambas están operativamente integradas a TJ vía el **Programa Metropolitano TJ-Tecate-Rosarito 2022-2027** (Implan Playas de Rosarito 2022), y (2) la información publicada granular sobre cada una es escasa, lo que justifica documentarlas a nivel suficiente para v1.0 sin pretender precisión censal.

### 9.1 Rosarito — turística fronteriza fin de semana

**Caracterización.** Playas de Rosarito ~100-150K habitantes 2024-2026. Economía fuertemente turística (playa, hospedaje, servicios) con alta afluencia de visitantes USA fin de semana. Gastronomía dominante: **mariscos costeros, langosta al estilo Puerto Nuevo, bares de playa, conceptos turísticos**.

**TAM estimado.** Universo restaurantes formales ~300-600 (estimación, requiere DENUE Rosarito SCIAN 722). El aspecto distintivo de la plaza es la **alta proporción de operación informal o semi-formal estacional**: estimación 30-50% formal vs 50-70% informal/turístico estacional. El TAM ICP casual independiente formal con BoH propio se reduce a ~100-250 unidades.

**Cuisines y casos.** Mariscos, campechana, ceviches, langosta Puerto Nuevo. La identificación de casos multi-sucursal con BoH propio en Rosarito es trabajo de campo, no de búsqueda web — la mayoría de operadores conocidos son negocios familiares con presencia en un mismo corredor (varias sedes en Puerto Nuevo, varias en Blvd. Benito Juárez).

**Implicación para Zenet.** Plaza secundaria dentro de Fase 2. La proporción alta de informal-estacional reduce TAM accionable; el cluster que sí califica es nicho mariscos costeros. Conectividad excelente desde TJ (~30 km) — el equipo Zenet puede atender Rosarito en visitas de medio día sin requerir presencia local. Outreach activo se justifica solo cuando hay lead orgánico o cuando un operador rosaritense con BoH propio identifiable entre en pipeline.

### 9.2 Tecate — fronterizo cervecero pequeño

**Caracterización.** Tecate ~110-130K habitantes 2024-2026. Economía cervecera (Cerveza Tecate como icono nacional), servicios, turismo rural y de naturaleza. Parte formal de la Zona Metropolitana TJ según Programa Metropolitano 2022-2027.

**TAM estimado.** Universo restaurantes formales ~150-300. ICP casual independiente formal ~40-90 unidades. Es la plaza BC más pequeña del scope.

**Cuisines y casos.** Cocina mexicana tradicional, asadores, algunos proyectos ligados a ruta del vino y campo. Parte del flujo gastronómico se conecta con TJ y Valle de Guadalupe — operadores que sirven a turistas en ruta TJ-Valle pasan por Tecate. [SIN FUENTE PUBLICADA] sobre nombres específicos de operadores casual independiente formal multi-sucursal en Tecate; las menciones suelen aparecer en compilados Tijuana-Tecate (Gourmet de México 2024).

**Implicación para Zenet.** Plaza marginal dentro de Fase 2. El TAM accionable (~5-20 cuentas) no justifica outreach activo. Tratamiento operativo: si llega lead orgánico, se atiende; si no, no se persigue. Lo mismo aplica a otros casos donde Tecate aparezca como mención secundaria en pipeline (operador de Tecate que considera abrir en TJ, por ejemplo).

### 9.3 Rosarito + Tecate como zona metropolitana TJ ampliada

El **Programa Metropolitano TJ-Tecate-Rosarito 2022-2027** los integra formalmente en una zona metropolitana planificada conjuntamente. Operativamente, esto significa que el equipo Zenet puede tratarlos como **periferia de TJ**, no como plazas independientes que requieren modelo de entrada propio. La presencia física de Alan en TJ cubre ambos satélites con viajes de medio día, sin necesidad de calendario de viaje específico ni partner local.

La pre-condición para activar outreach en Rosarito o Tecate es la misma que para el resto de Fase 2: pre-PMF TJ con 5+ design partners contratados, retención fluida y NPS validado.

---

## 10. Sonora — Hermosillo y Cd. Obregón

Sonora es la primera plaza Fase 3 operativa por dos razones: proximidad cultural a Tijuana (frontera norte, mismo SM elevado, mismo perfil cliente final) y conectividad logística buena (~900 km, vuelos cortos directos viables). El cluster gastronómico se ancla en cortes, mariscos y un grupo de origen sonorense que escaló nacional.

### 10.1 Hermosillo

**Tamaño y economía.** ZM Hermosillo ~900-1,000K habitantes 2024-2026. Capital de Sonora con economía basada en industria manufacturera (automotriz, aeroespacial), servicios, gobierno estatal y comercio. Cluster industrial robusto sostiene clase media-alta local con capacidad de pago.

**Particularidad fronteriza.** Sonora **no recibe el beneficio fiscal IVA 8%** del decreto región fronteriza norte — el decreto cubre BC pero no Sonora. Sin embargo, sí aplica el SM frontera norte para municipios fronterizos del estado (Nogales, San Luis Río Colorado), no para Hermosillo. El operador hermosillense paga IVA 16% como el del interior, lo que limita parte del beneficio que en TJ es estructural.

**TAM estimado.** Universo restaurantes formales ZM 2,000-3,000 (extrapolación, requiere DENUE 722 para validar). Casual independiente formal con BoH propio ~400-900 unidades. Aplicando filtro expansión activa, **~40-180 cuentas accionables**.

**Cluster gastronómico — cortes y mariscos como ancla.**

- **Mochomos** — confirmado de origen sonorense (no cadena CDMX como asumió originalmente el doc 02). Concepto nacido en Sonora hoy con presencia nacional en HMO, CDMX, GDL y otras plazas (Run 2-bis, abr 2026). Cuisine: mexicana contemporánea / steakhouse de alto ticket. **Modelo Mochomos** — grupo regional que escaló nacional manteniendo BoH robusto — es referencia narrativa para Zenet ("acompañamos al próximo Mochomos antes de que escale").
- **Sonora Grill** — confirmado como cadena originaria de CDMX, no de Sonora (Run 2-bis). Sucursal en HMO ubicada en Blvd. Kino, corredor restaurantero premium.
- **Néctar Hermosillo, Punto Cardinal, Manzo Prime Steak House** — restaurantes locales con cocina contemporánea o cortes, sin evidencia de expansión nacional.
- **Maguro Edomae Sushi, Zen Hermosillo** — cocina japonesa con BoH complejo, candidatos del scope core por sofisticación operativa.
- **Mariscos Los Arcos** — confirmado de origen Mazatlán (Sinaloa), no hermosillense. Sucursal en HMO con BoH desarrollado.

**Cluster brewpub.** [SIN FUENTE PUBLICADA] El Run 2-bis no localizó cluster brewpub HMO comparable al de TJ. La cervecería artesanal en Sonora existe pero la evidencia pública sobre brewpubs con cocina protagonista es escasa. Hueco a cerrar con outreach LinkedIn local.

**Reconocimientos 2024-2026.** Sin restaurantes de Hermosillo en Guía Michelin México 2024-2025 ni en 50 Best LatAm 2023-2025 (Run 2-bis). Es la plaza Fase 3 con menor amplificación narrativa — pero también la de mejor conectividad logística desde TJ.

**Comunidad institucional.** CANIRAC Sonora con presencia visible nacional pero menos comunicación específica de la delegación HMO 2024-2026 que CANIRAC Querétaro o Puebla. [SIN FUENTE PUBLICADA] sobre festivales sectoriales B2B HMO 2024-2026.

### 10.2 Cd. Obregón

**Tamaño y economía.** ZM Cd Obregón ~400-450K habitantes. Economía agroexportadora fuerte (granos, hortalizas, industria alimentaria). Es la segunda ciudad de Sonora, no la principal.

**TAM estimado.** Universo restaurantes formales ~800-1,200; ICP casual independiente formal ~150-300 unidades. **Significativamente menor que Hermosillo en tamaño y diversidad** (Run 2-bis).

**Implicación operativa.** Cd Obregón es plaza marginal dentro de Fase 3. No justifica outreach activo independiente — se atiende como secundario a Hermosillo si llega lead orgánico o cuando un grupo agroexportador local con BoH propio identifiable entre en pipeline.

### 10.3 Implicaciones operativas para Zenet en Sonora

**Pre-condición de entrada.** Tracción consolidada en TJ + BC con 15-25 clientes activos antes de outreach activo en HMO.

**Modelo de entrada.** Equipo TJ + viajes Alan + consultor partner local. La conectividad TJ-HMO permite viajes mensuales viables. La búsqueda de consultor partner se activa vía LinkedIn + preguntas a la red TJ ya validada (Anna Palazuelos, Victor Murguía, Algira Garzón) sobre colegas en Sonora.

**Caso ancla potencial.** Mochomos como cliente-ancla amplifica narrativamente para todo el segmento "grupo regional escalando nacional". Es objetivo de outbound dirigido si aceptan prospectarse.

**Riesgo declarado.** Sin amplificador Michelin/50 Best y con CANIRAC delegacional de menor comunicación pública, Sonora carga el peor amplificador narrativo de las plazas Fase 3. Compensa con mejor conectividad y match cultural fronterizo.

---

## 11. Querétaro — fine dining y migración corporativa

Querétaro emerge como la plaza Fase 3 más balanceada según los 10 criterios de la sección 3. CANIRAC delegacional fuerte, cluster fine dining reconocido, migración corporativa post-nearshoring sostenida, y entrada inminente a Guía Michelin México 2026.

### 11.1 Caracterización general

**Tamaño y economía.** ZM Santiago de Querétaro ~1.5-1.7M habitantes 2024-2026. Economía basada en manufactura avanzada (aeroespacial — Bombardier, Safran; automotriz — Daimler), logística, servicios, y fuerte atracción de inversión extranjera. Centro Histórico Patrimonio Mundial sostiene turismo doméstico relevante.

**Migración corporativa.** Post-2020, Querétaro ha sido beneficiaria principal de la **ola de nearshoring** mexicano. Empresas USA y europeas relocalizadas, profesionistas mudándose desde CDMX por seguridad y costo de vida. El efecto en demanda restaurantera es directo: ejecutivos con poder adquisitivo y expectativa de oferta gastronómica de calidad.

**TAM estimado.** Universo restaurantes formales ZM 2,500-3,500 (basado en CANIRAC Querétaro 400 afiliados estatal + universo total mayor). Casual independiente formal con BoH propio ~600-1,200 unidades. **Aplicando filtro expansión activa, ~60-240 cuentas accionables Año 3+**.

### 11.2 Cluster gastronómico

**Sub-zonas de concentración.** Centro Histórico, **corredor Álamos** (CANIRAC Querétaro reportó concentración de inversiones 2025 aquí), Juriquilla, Jurica, El Refugio.

**Casos esperados con BoH propio multi-sucursal.** [Confirmación parcial requiere outreach directo]

- **Grupo Loop** — múltiples conceptos (La Mar, Hank's New Orleans, otros) en Centro y Juriquilla.
- **Doña Urraca** — restaurante dentro del hotel boutique homónimo, Centro Histórico. Posible grupo con más de una unidad estatal.
- **Asadores y steakhouses locales** — varios en Juriquilla y zonas de alto ingreso (La Bocha y similares).

**Visibilidad nacional pendiente.** Para 2024-2025, Querétaro no estaba en perímetro de Guía Michelin México. **Michelin expande a Querétaro en 2026** como nuevo territorio (Instagram oficial Michelin, mar 2026). La lista oficial de estrellas, Bib Gourmand y Recomendados queretanos no está publicada al cierre de este documento — es trigger de actualización.

### 11.3 Comunidad institucional

**CANIRAC Querétaro — la más activa institucionalmente entre las plazas Fase 3.**

- Presidencia: **Rosalinda Hernández Rosiles** (al menos hasta 2025) (Cinoticias 2024, Quadratín Querétaro 2024).
- 400 restaurantes afiliados estatales y 65,000 empleos directos.
- Comunicación frecuente en prensa sobre aperturas e inversiones.
- "Asociación de Restauranteros de Querétaro" complementaria con declaraciones públicas (AR Noticias 2024).

**Eventos sectoriales.**

- **Wine & Food Fest Querétaro** — formato similar a otros wine & food de México con presencia de chefs, vinícolas y restaurantes. Ficha técnica 2024-2026 [SIN FUENTE PUBLICADA] específica.
- **Festival del Vino y el Queso Tequisquiapan** — importante para operadores queretanos que trabajan con producto local. Foco más B2C pero con componente B2B de proveedores.

**Prensa local.** Cinoticias, Quadratín Querétaro, páginas de turismo de gobierno. Cobertura sostenida sobre apertura de nuevos restaurantes y crecimiento del sector.

### 11.4 Implicaciones operativas para Zenet en Querétaro

**Pre-condición de entrada.** Tracción consolidada en TJ + BC + Sonora antes de outreach activo en Querétaro.

**Modelo de entrada.** Equipo TJ + viajes Alan vía CDMX (~3.5 horas vuelo + traslado) + consultor partner local. La activación del partnership con CANIRAC Querétaro vía Hernández Rosiles es palanca natural — su comunicación pública confirma apertura institucional a iniciativas de profesionalización.

**Caso ancla potencial.** Restaurante queretano que reciba reconocimiento Michelin 2026 (estrella, Bib o Recomendado) en momento de inversión post-reconocimiento. La ventana entre publicación de guía y consolidación operativa es la zona donde Zenet entra con mejor recepción.

**Caso de palanca corporativa.** Restaurantes premium que atienden ejecutivos nearshoring corporativo (corredor Álamos, Juriquilla) tienen ticket alto y exigencia operativa elevada. Es el sub-cluster donde la mensajería "operación al nivel de tu cliente corporativo" aterriza directo.

---

## 12. Puebla — cocina con identidad nacional

Puebla es la plaza Fase 3 con mayor TAM bruto y la única con cocina de identidad nacional (cocina poblana: mole, chiles en nogada, chalupas, dulces típicos). Sumado al cluster industrial-universitario denso y la entrada a Michelin 2026, es plaza con argumentos estructurales fuertes.

### 12.1 Caracterización general

**Tamaño y economía.** ZM Puebla-Tlaxcala ~3M habitantes 2024-2026 — la mayor ZM entre las plazas Fase 3. Economía industrial densa (VW, Audi, electrónica, manufactura), comercio, servicios. **Cluster universitario fuerte y diversificado**: BUAP (la pública estatal), UDLAP, Anáhuac Puebla, Ibero Puebla, Tec de Monterrey campus Puebla, otras. Es driver de demanda explícito que ninguna otra plaza Fase 3 ofrece con esta densidad.

**Cercanía a CDMX (~125 km).** Variable a evaluar con matiz: la cercanía facilita llegada de **cadenas y franquicias CDMX a Puebla** (15 nuevos restaurantes de cadena 2024 según El Sol Puebla) y abre oportunidad para operadores poblanos de proyectarse a CDMX (caso por verificar). La dinámica neta 2024-2026 es de **coexistencia**, no de "fuga" masiva ni de saturación destructiva — el cluster local mantiene autonomía narrativa.

**TAM estimado.** Universo restaurantes formales ZM 6,000-8,000 (basado en tamaño poblacional y densidad gastronómica). Casual independiente formal con BoH propio ~1,200-2,400 unidades. **Aplicando filtro expansión activa, ~120-480 cuentas accionables Año 3+** — el TAM más grande de las plazas Fase 3.

### 12.2 Cluster gastronómico

**Sub-zonas de concentración.** Centro Histórico (cocina poblana clásica), **Angelópolis y Lomas** (zonas premium con casual contemporáneo, italiana, internacional), Sonata, Barrio de Santiago (estudiantil-universitario).

**Casos referenciales con BoH propio.**

- **El Güero Marinero** — caso Sub-segmento B accesible y validado: marisquería poblana que abrió 2da sucursal en Angelópolis 2025 (original en Barrio de Santiago, 15 Sur 909). Microcadena local con BoH fuerte y momento de expansión activa explícito (Guía Oca Puebla 2025; Run 2-bis). **Es el ejemplo más concreto del ICP del beachhead en plaza Fase 3** — equivalente operativo del Sub-segmento B típico de TJ trasplantado a Puebla.
- **Casa Reyna** — hotel-restaurante con foco en cocina tradicional poblana. Centro Histórico. Caso emblemático con BoH robusto.
- **El Mural de los Poblanos** — restaurante emblemático de cocina poblana con cobertura nacional sostenida.
- **Augurio (Ángel Vázquez)** — cocina poblana contemporánea de autor. Candidato natural a Michelin 2026.
- **Intro** — cocina contemporánea con visibilidad nacional.
- **Las Bodegas del Molino** — cocina poblana y eventos en antiguo molino. BoH robusto por volumen de eventos.
- **Mesón Sacristía de la Compañía** — hotel boutique con restaurante de cocina poblana tradicional.

**Cluster universitario como driver explícito.** El cluster universitario poblano (BUAP, UDLAP, Anáhuac, Ibero, Tec) concentra población estudiantil-académica que sostiene demanda casual independiente formal en zonas como Barrio de Santiago. El Güero Marinero ilustra el patrón: marisquería joven en barrio universitario que escala a Angelópolis. Es ángulo no presente con esta densidad en otras plazas Fase 3.

### 12.3 Visibilidad nacional y reconocimientos

**Inversión documentada.** El Economista reportó **$100M MXN de inversión en 12 nuevos restaurantes 2025** (propios y franquicias) en Puebla, con concentración en zona sur (El Economista 2024). El Sol Puebla complementó con **15 nuevos restaurantes de cadena 2024** (El Sol Puebla 2024). Es señal cuantificada de mercado en crecimiento.

**Michelin México 2026.** **Puebla entra como nuevo territorio en 2026** junto con Querétaro y Yucatán (Instagram oficial Michelin, mar 2026). Candidatos naturales de la lista esperada (no oficial al cierre del doc): El Mural de los Poblanos, Augurio, Casa Reyna, Intro. Lista oficial es trigger de actualización.

### 12.4 Comunidad institucional

**CANIRAC Puebla.** Presidente: **Carlos Azomoza Alacio**, citado en notas sobre inversiones y dinámica del sector (El Sol Puebla 2024). Comunicación pública sostenida, segunda en visibilidad después de CANIRAC Querétaro entre las plazas Fase 3.

**Eventos sectoriales.** Festivales recurrentes ligados a la cocina poblana (Festival del Mole de Caderas, eventos de Chiles en Nogada en temporada). Ficha técnica B2B 2024-2026 [SIN FUENTE PUBLICADA] específica.

### 12.5 Implicaciones operativas para Zenet en Puebla

**Pre-condición de entrada.** Tracción consolidada en TJ + BC + al menos una plaza Fase 3 antes (Sonora o Querétaro).

**Modelo de entrada.** Equipo TJ + viajes Alan vía CDMX (similar a Querétaro) + consultor partner local + alianza CANIRAC vía Azomoza Alacio.

**Caso ancla potencial.** El Güero Marinero como caso Sub-segmento B accesible y operativamente afín al ICP. Adicionalmente, restaurante poblano con reconocimiento Michelin 2026 como caso narrativo nacional.

**Argumento estructural.** Puebla combina TAM bruto superior + cluster con identidad nacional + visibilidad Michelin 2026 + cluster universitario denso. Es la plaza Fase 3 donde el SOM accionable tiene mayor techo, aunque Querétaro tiene mejor balance institucional.

---

## 13. Mérida — Fase 3 bis con modelo remoto

Mérida es la única plaza del scope que opera bajo categoría "Fase 3 bis". Tiene cluster gastronómico con identidad regional fuerte y entra a Guía Michelin México 2026 — argumentos potentes para inclusión en Fase 3 estricta. Pero la distancia logística desde Tijuana (~4,000 km, sin vuelo directo) hace que el modelo de entrada presencial estándar sea inviable. La solución es modelo remoto + partnership obligatorio con chef o consultor local.

Esta sección desarrolla la decisión, la documenta y enmarca el modelo operativo distinto. La decisión refleja el principio de la sección 16: **algunas plazas valen entrada pero requieren modelo distinto**.

### 13.1 Caracterización general

**Tamaño y economía.** ZM Mérida ~1.2-1.4M habitantes 2024-2026 (proyección Conapo, requiere validación). Economía basada en servicios, comercio, turismo, construcción/real estate y componente industrial creciente (parques industriales, logística). Sector restaurantero muy competitivo: **17,000 unidades de negocios dedicados a la comida en Yucatán** según CANIRAC Yucatán 2026 (Yucatán Quadratín 2026; Run Mérida).

**Crecimiento por migración interna, NO por nearshoring industrial.** A diferencia de Querétaro, Mérida atrae principalmente **profesionistas y familias mudándose desde CDMX** por seguridad y calidad de vida — no clusters industriales nearshoring tipo Bombardier o Audi. El efecto en demanda restaurantera es indirecto: más residentes con poder adquisitivo medio-alto, no inversión corporativa directa.

**TAM estimado.** Si 60-70% de las 17,000 unidades estatales están en ZM Mérida, hay ~10,000-12,000 negocios de A&B en la zona. De ese universo, 15-25% son casual independiente formal con BoH propio (~1,500-3,000 unidades). Aplicando filtro estricto del scope (identidad fuerte, cocina protagonista, 1-5 sucursales, expansión activa): **TAM ICP estricto Mérida ~150-600 restaurantes** (Run Mérida, abr 2026).

### 13.2 Cluster yucateco — corrección del doc 02

El doc 02 §3.2 declaró originalmente "K'u'uk como referente, cocina regional". **Corrección importante: K'u'uk (Pedro Evia) cerró sus puertas hace años** y no es referente activo en 2024-2026 (Run Mérida). Pedro Evia sigue siendo figura referencial histórica, pero el polo activo del cluster yucateco contemporáneo se ha movido.

**El referente activo de la nueva cocina yucateca es Néctar y Huniik** (Roberto Solís), reinterpretando recetas tradicionales con técnicas modernas, menús degustación y uso creativo de ingredientes locales (venado, faisán, miel de melipona, zapote negro).

**Cluster yucateco contemporáneo identificable.**

- **Néctar (Roberto Solís)** — alta cocina yucateca contemporánea. 1 sede principal en Mérida.
- **Huniik (Roberto Solís)** — proyecto paralelo, espacio para ~16 comensales, menú degustación de 10 tiempos. Centro Mérida (Calle 60).
- **La Tradición (David Cetina)** — 30+ años operando, preservando cocina maya ancestral con procesos artesanales y productos locales. Restaurante principal con posible expansión.
- **La Chaya Maya / La Chaya Maya Casona** — microcadena local con mínimo 2 sedes (Calle 55 + Casona). Cocina yucateca tradicional para público local y turístico.
- **Apoala Mexican Cuisine** — cocina mexicana contemporánea con influencia yucateca y oaxaqueña. Parque Santa Lucía.
- **Rosas & Xocolate** — hotel boutique con restaurante de cocina contemporánea en Paseo de Montejo.
- **Picheta** — yucateca contemporánea con vista a la Catedral, terraza con vista a la Plaza Grande.
- **Catrín Restaurante & Cantina** — restaurante-cantina contemporáneo, Calle 47/Santa Lucía.
- **Micaela Mar & Leña** — mariscos y cocina a la leña con enfoque contemporáneo.
- **Manjar Blanco** — cocina yucateca tradicional.
- **Mesón del Marqués** (Valladolid, fuera de Mérida pero parte del ecosistema yucateco) — hotel-restaurante referencial.

**Observación estructural.** Muchos referentes meridanos son **mono-sucursal** (Néctar, Huniik, Apoala, Picheta, Rosas & Xocolate). La capa "casual independiente formal con BoH propio multi-sucursal 1-5" en Mérida es más limitada que en Puebla o Querétaro. Esto reduce el volumen de grupos accionables como design partners de escala — pero los que sí califican (La Chaya Maya, posible expansión La Tradición) son altamente reputacionales.

### 13.3 Visibilidad nacional y reconocimientos

**Hasta Guía Michelin México 2024-2025.** Yucatán no estaba dentro de los territorios cubiertos.

**Michelin México 2026.** **Yucatán entra como nuevo territorio** junto con Querétaro y Puebla (Instagram oficial Michelin, mar 2026). Candidatos naturales esperados: Néctar/Huniik (Roberto Solís), La Tradición (David Cetina), Apoala, Micaela. Lista oficial pendiente.

**50 Best LatAm 2023-2025.** Sin restaurantes meridanos identificados (Run Mérida).

**Reconocimientos previos.** La cocina yucateca tiene visibilidad nacional sostenida vía medios gastronómicos especializados (Culinaria Mexicana, Food & Pleasure, Marco Beteta). El cluster está documentado pero no premiado a nivel internacional pre-2026.

### 13.4 Comunidad institucional

**CANIRAC Yucatán.**

- Presidente: **Israel López García** (notas 2025-2026, Yucatán Quadratín).
- Vocera: **Claudia González**, advirtiendo un 2026 complejo para el sector restaurantero por desaceleración, aumento de costos y menor actividad en eventos masivos (Yucatán Quadratín 2026).
- Comunicación pública sostenida sobre costos al alza, impacto de salarios, retos de consumo.

**Eventos sectoriales.** Mérida Fest como festival cultural anual con componente gastronómico, pero estructura B2B no detallada. **No hay festival sectorial B2B comparable a Baja Culinary Fest TJ** según el research disponible. Hueco honesto: la organización de eventos B2B Mérida es trabajo de campo más que de búsqueda web.

**Comunidad de chefs.** Roberto Solís y David Cetina como figuras activas. Pedro Evia como figura referencial histórica (post-cierre K'u'uk). Otros chefs (Apoala, Micaela, Picheta) componen comunidad activa con menor perfil mediático nacional.

### 13.5 Logística — el factor que define el modelo de entrada

**Conectividad TJ-Mérida — confirmada prohibitiva sin partnership.**

| Factor | Realidad documentada |
|---|---|
| Vuelo directo TJ-MID | No existe — todas las rutas requieren escala (CDMX, MTY o GDL) |
| Tiempo total puerta-a-puerta | 6-9 horas |
| Costo por viaje | >$5,000 MXN redondo en temporadas medias-altas |
| Viabilidad de viaje mensual del equipo Zenet | Baja — bandwidth significativo perdido en logística |

**Comparación con plazas Fase 3 operativas:**

- TJ-Hermosillo: ~900 km, vuelos cortos directos, ~2-3 horas puerta-a-puerta.
- TJ-Querétaro: vuelo TJ-CDMX + traslado, ~4-5 horas total.
- TJ-Puebla: vuelo TJ-CDMX + traslado, ~4-5 horas total.
- TJ-Mérida: 6-9 horas con escala obligatoria.

Mérida requiere **2-3x más tiempo y ~2x el costo** que las otras plazas Fase 3 — diferencia operativa que justifica modelo distinto.

### 13.6 El modelo "Fase 3 bis" — remoto + partnership obligatorio

**Definición.** Mérida no se atiende vía equipo TJ + viajes Alan estándar. Se atiende vía **modelo remoto con partner local obligatorio como pre-condición**.

**Componentes del modelo.**

1. **Partnership con chef o consultor local como prerrequisito.** No se activa outreach sin tener identificado y comprometido un partner que actúe como "extensión Zenet" en plaza. Candidatos potenciales de outreach inicial: Roberto Solís (Néctar/Huniik) por visibilidad y red, David Cetina (La Tradición) por trayectoria, o consultor identificado vía CANIRAC Yucatán o LinkedIn.
2. **Pilotos limitados — 2-3 emblemáticos, no volumen.** El objetivo Mérida no es captura masiva del TAM. Es **hub reputacional**: 2-3 restaurantes con visibilidad Michelin 2026 que generan caso narrativo nacional desproporcionado al volumen MRR.
3. **Implementación principalmente remota.** Onboarding vía Zoom + documentación + entrenamiento del partner local. Visitas presenciales de Alan limitadas a momentos críticos (cierre, problemas operativos graves, evento Michelin u otro hito narrativo).
4. **Pricing y contrato estándar.** Mérida paga el mismo $1,500 MXN/mes/sucursal del scope MX, sin descuento ni recargo. La diferencia es operativa, no comercial.

**Ventajas del modelo.**

- Permite presencia Zenet en cluster Michelin 2026 sin costo prohibitivo de viajes.
- Construye narrativa nacional con plazas reconocidas internacionalmente.
- Valida el modelo "consultor partner como extensión Zenet" antes de aplicarlo a otras plazas más lejanas (eventualmente LATAM Fase 5).

**Riesgos del modelo.**

- Sin partner identificado, no hay entrada — la pre-condición es bloqueo real.
- Onboarding remoto con cliente premium puede frustrar si la implementación se traba sin presencia física para destrabarla.
- 2-3 clientes Mérida no justifican expansión activa del scope local — el riesgo es estancarse en pocos clientes sin trayectoria de crecimiento en plaza.

### 13.7 Pre-condición de activación de Mérida

Mérida se activa cuando se cumplen las dos condiciones:

1. **Tracción consolidada en TJ + BC + al menos 2 plazas Fase 3 operativas** (Sonora, Querétaro o Puebla con clientes activos y casos validados).
2. **Partner local identificado y comprometido formalmente** vía contrato o LOI.

Sin las dos, Mérida queda en stand-by. La paciencia operativa es decisión consciente: cazar Mérida prematuramente compromete bandwidth y aumenta riesgo de mal aterrizaje del primer caso emblemático.

---

## 14. Plazas grandes (Fase 4) — Guadalajara, Monterrey, Ciudad de México

Las plazas grandes mexicanas — Guadalajara, Monterrey y Ciudad de México — son la Fase 4 del scope. Esta sección las trata a nivel narrativo, no granular: el research dirigido del Run 3 confirmó que datos finos como saturación POS por plaza, listas Michelin 2026 completas y casos referenciales con BoH propio multi-sucursal por cluster requieren trabajo propietario más que búsqueda web pública. La doctrina del scope ya está clara desde doc 02 — entrar a plazas grandes **tarde, no temprano** — y eso es lo que esta sección documenta.

### 14.1 La doctrina — entrar tarde, no temprano

El doc 02 §4.4 declaró que las plazas grandes están saturadas competitivamente con POS y software BoH ya establecidos. PoloTab opera intensamente en CDMX (~500 cafés y restaurantes en 70+ ciudades, varios casos confirmados en CDMX), Parrot tiene presencia consolidada nacional, SoftRestaurant tiene red de distribuidores certificados, Fudo (Argentina) tiene adopción creciente. La saturación no es total — el segmento "AI-native + BoH-first" sigue siendo defendible — pero el costo de adquisición y la fricción de switching son materialmente más altos en GDL/MTY/CDMX que en plazas medianas.

**La estrategia operativa en consecuencia:**

1. **Validar el modelo en plazas medianas primero.** TJ-BC-Fase 3 son donde el costo de adquisición es razonable y la diferenciación de Zenet (AI-native + BoH-first) tiene espacio competitivo abierto.
2. **Entrar a Fase 4 con caso ancla demostrado.** No con pitch. Un grupo de 4-5 sucursales en TJ que documenta ROI medible es activo de venta superior en CDMX que cualquier deck genérico.
3. **No entrar a CDMX como primera plaza grande.** El doc 02 §3.2 lo dice explícitamente. La justificación: CDMX es la plaza con mayor saturación competitiva y mayor sofisticación del comprador. Aprender a vender plaza grande en GDL o MTY antes — con menor saturación relativa — reduce riesgo.

### 14.2 Caracterización por plaza

**Guadalajara.** ZM ~5M habitantes incluyendo Tlaquepaque, Tonalá, Zapopan, El Salto y otros municipios. TAM total casual independiente formal estimado en doc 03: **4,000-6,000 unidades**. Cluster gastronómico con identidad regional (cocina tapatía, birria, torta ahogada) y casos chef-driven contemporáneos: Hueso (Alfonso Cadena), Karne Garibaldi, La Tequila, Birriería Las 9 Esquinas. **Tlaquepaque + Tonalá** suman cluster artesanal-gastronómico con peso turístico nacional. Saturación competitiva media-alta.

**Monterrey.** ZM ~5M habitantes incluyendo San Pedro Garza García, Guadalupe, Apodaca, San Nicolás. TAM total: **5,000-7,000 unidades**. **San Pedro Garza García concentra la mayor densidad de fine dining nacional per cápita** — operadores chef-driven con tickets altos y exigencia operativa elevada. Casos referenciales: Pangea (Guillermo González Beristain) como referente histórico, Koli Cocina de Origen, Rey del Cabrito, La Nacional. MTY tuvo presencia en Guía Michelin México 2024-2025. Saturación competitiva alta.

**Ciudad de México.** ZM ~22M habitantes — la plaza más grande del país por amplio margen. TAM total: **15,000-20,000 unidades**. Cluster gastronómico con visibilidad mundial (50 Best, Michelin), múltiples sub-zonas con concentración casual independiente formal: Polanco, Roma-Condesa, Cuauhtémoc-Juárez, Coyoacán-San Ángel, Lomas de Chapultepec, Santa Fe. Casos chef-driven internacionales: Pujol (Enrique Olvera), Quintonil, Sud777, Maximo Bistrot, Lardo, Hermanos Torres / Grupo Tetelas. **Saturación competitiva la más alta del país** — Parrot, PoloTab, Fudo y otros con casos públicos consolidados. Es la plaza de **mayor potencial pero mayor costo de adquisición** del scope MX.

### 14.3 Pre-condición de entrada a Fase 4

Las pre-condiciones son explícitamente más exigentes que para Fase 3:

- **Tracción multiplaza demostrada.** Al menos clientes activos en TJ + BC + 2 de 3 plazas Fase 3 operativas con retención sostenida y casos documentados.
- **ARR mínimo definido en plan de fundraising.** Las plazas grandes consumen capital de adquisición más rápido que las medianas; entrar a Fase 4 sin runway suficiente expone al modelo.
- **Caso ancla narrativo activo.** Idealmente con prensa nacional ya documentada — Bib Gourmand TJ (Carmelita), restaurantes Valle de Guadalupe Michelin, restaurantes de Querétaro/Puebla/Yucatán Michelin 2026 como referencias activadas.

### 14.4 Orden recomendado de entrada Fase 4

**Recomendación heredada del doc 02 §3.2:**

1. **GDL primero o MTY primero**, no CDMX. La razón: aprender a vender plaza grande en mercados con menor saturación competitiva relativa antes de enfrentar CDMX. GDL ofrece TAM relevante, cluster identificable y conexiones culturales (con Bajío y Pacífico) que pueden ser palanca. MTY ofrece poder adquisitivo más alto (San Pedro) pero sofisticación de comprador mayor.
2. **CDMX como última plaza grande**, no primera. Cuando el modelo está validado en GDL/MTY y hay casos documentados de plazas grandes con casual independiente formal multi-sucursal, CDMX se vuelve abordable.

**La decisión específica entre GDL y MTY como primera plaza grande es trabajo posterior.** No se decide en este documento — depende de tracción real, vínculos personales que emerjan, y oportunidades específicas.

### 14.5 Hipótesis abiertas críticas para Fase 4

Hay tres hipótesis sin datos públicos suficientes que se documentan en sección 19 como triggers de research:

1. **Saturación POS exacta por plaza** — número de clientes Parrot, PoloTab, Fudo, SoftRestaurant en GDL, MTY y CDMX. Información propietaria de los proveedores que solo se obtiene vía entrevistas, casos de éxito públicos o cuando un cliente de Zenet venga de uno de ellos.
2. **Lista oficial Michelin México 2026** — se publicará oficialmente en 2026. Restaurantes CDMX en lista actualizada + Querétaro, Puebla y Yucatán como nuevos territorios.
3. **Casos de éxito documentados en Fase 4 con casual independiente formal multi-sucursal** — investigación dirigida cuando Zenet inicie outbound a plaza grande, no antes.

---

## 15. LATAM (Fase 5) — panorama inicial

LATAM Fase 5 se documenta a nivel panorámico. La decisión real de entrada a LATAM se toma con Serie A + partnership regional identificado, no en este documento. Lo que sí cabe acá es enmarcar las plazas candidatas con conocimiento sectorial general para que cuando llegue el momento, el equipo no parta de cero.

### 15.1 Plazas candidatas y rationale

**Centroamérica selectiva — Guatemala City y San José.**

- **Guatemala City.** Cluster gastronómico contemporáneo emergente, escena casual independiente con identidad regional. Mercado relativamente menor pero con chefs y operadores con visibilidad regional. Marco regulatorio y fiscal local específico requiere research dedicado pre-entrada.
- **San José, Costa Rica.** Cluster pequeño pero con poder adquisitivo alto y exposición a ecosistema gastronómico internacional. Mercado nicho.

**Sudamérica — plazas con casual independiente formal fuerte.**

- **Bogotá.** Cluster en crecimiento sostenido. Casos referenciales: Leo (Leonor Espinosa) — 50 Best LatAm sostenido, El Chato, Mesa Franca. Capital colombiana con clase media-alta amplia.
- **Lima.** **Cuna gastronómica latinoamericana**. Maido, Central, Astrid y Gastón en 50 Best mundial. Cluster casual independiente denso, ecosistema institucional (APEGA) consolidado. La plaza con mayor profundidad gastronómica de la región pero también con saturación competitiva alta.
- **Santiago de Chile.** Boragó (Rodolfo Guzmán), Ambrosía. Cluster premium con poder adquisitivo alto, marco regulatorio robusto.

### 15.2 Variables a investigar pre-entrada por país

Cuando se active Fase 5, el research por país debe cubrir como mínimo:

1. **Tamaño aproximado del mercado de restaurantes formales en la ciudad principal.**
2. **Marco regulatorio fiscal clave** — equivalente a CFDI 4.0 mexicano, nivel de fiscalización digital, complementos obligatorios.
3. **Marco de protección de datos** — equivalente a LFPDPPP 2025 mexicana, obligaciones para SaaS B2B, requisitos de DPA con proveedores cloud (`08` §10).
4. **Competencia regional.** **Fudo (Argentina) tiene operación masiva en LATAM** con miles de clientes regionales. Otros SaaS BoH locales pueden dominar en países específicos (Bsale en Chile, Alegra en Colombia). Saturación competitiva por país.
5. **Idioma y moneda.** Español confirma para los 5 candidatos; moneda local con implicaciones para pricing y procesamiento de pagos.
6. **Reconocimientos gastronómicos internacionales.** Peso de la ciudad/país en 50 Best LatAm y otras guías.
7. **Comunidad institucional** — equivalente a CANIRAC, asociaciones de chefs, eventos sectoriales B2B.

### 15.3 Trade-offs estructurales

LATAM no es expansión natural del modelo MX. Carga tres fricciones que el equipo debe reconocer:

1. **Marco regulatorio cambia por país.** Mientras MX tiene marco unificado (SAT, IMSS, CFDI), cada país LATAM exige cumplimiento propio. El producto Zenet probablemente requiere versionado por país antes de poder operar legalmente.
2. **Idioma en común no implica modelo en común.** Los modos operativos del operador casual independiente, la cultura de adopción de software, la relación con el contador externo y la estructura del cluster gastronómico **varían materialmente por país**. Lo que funciona en MX no se transplanta directo a Bogotá o Lima.
3. **Competencia regional ya establecida.** Fudo lleva años operando en varios países LATAM. Entrar a un país LATAM frente a Fudo es competencia frontal, no espacio abierto como TJ es respecto a CDMX.

### 15.4 Pre-condición de activación Fase 5

Como declaró el scope inicial (alineado con tu decisión de Fase 5 detonada por Serie A + partnership regional):

1. **Cierre exitoso de Serie A** con runway suficiente para soportar 18-24 meses de operación inicial en plaza LATAM.
2. **Partnership regional identificado** — chef, consultor, distribuidor o inversionista con red en plaza candidata que reduzca costo de cold entry.
3. **Tracción multi-plaza demostrada en MX** con casos documentados, retención sostenida y P&L unitario positivo.

Sin las tres, Fase 5 queda en stand-by con la misma disciplina que aplica a Fase 4. La paciencia operativa es decisión consciente — Zenet construye plataforma sustentable, no carrera de banderazos geográficos.

---

## 16. Cómo se entra a una plaza nueva — los tres modelos de expansión

El equipo Zenet opera desde Tijuana y, según la decisión declarada, mantendrá esa estructura: equipo único en TJ con Alan viajando a plazas cuando aplique. La pregunta operativa real es **cómo cambia esa estructura cuando se decide entrar a una plaza distinta de TJ** — qué se hace presencial, qué remoto, qué exige partnership local, qué pre-condiciones se cumplen antes de outreach activo.

La respuesta no es uniforme entre plazas. Las secciones 7-15 implícitamente definieron tres modelos operativos distintos según el perfil de la plaza. Esta sección los formaliza.

### 16.1 Plaza de origen — caso único (no es modelo replicable)

Tijuana es **Fase 1** y opera distinto a todas las otras plazas: el equipo Zenet está físicamente presente, opera diariamente con la comunidad gastronómica local, los eventos sectoriales (Baja Culinary Fest, Bootcamp GastronomIA) son del propio entorno, el peer referral funciona porque la comunidad es tight, y los design partners se construyen con relación directa.

Este modelo no se replica en otras plazas — es la condición de origen. Lo que sí se replica son los tres modelos de expansión que vienen abajo. Las secciones 16.2 a 16.4 desarrollan cada uno.

### 16.2 Modelo 1 — Periferia accesible (Fase 2)

**Cuándo aplica.** Plazas con conectividad excelente desde TJ (≤200 km, viaje en día) que comparten ecosistema regional. Aplica a Mexicali, Ensenada urbano, Rosarito, Tecate, y como caso especial al Valle de Guadalupe.

**Estructura operativa.**

- **Equipo:** TJ atiende todo lo remoto (onboarding, soporte, success). Alan viaja para reuniones críticas (cierre de venta, eventos institucionales, problemas operativos graves).
- **Frecuencia de viaje:** mensuales o quincenales según pipeline activo.
- **Outreach:** lead orgánico se atiende desde el mes 1 de Fase 1; outbound activo desde mes 6-9 cuando el pre-PMF TJ esté demostrado.
- **Canal local:** CANIRAC delegacional (Mexicali, Ensenada) cuando la relación TJ se transfiera; sin partner local obligatorio.

**Pre-condición de activación.** 5 design partners TJ contratados, data fluyendo limpia, NPS ≥ 40 en clientes TJ.

**Costo operativo.** Bajo. La conectividad TJ-periferia BC permite cobertura sin equipo adicional, sin oficina local, sin partner pagado. Es el modelo más eficiente del scope.

**Caso especial dentro del modelo — Valle de Guadalupe.** Aplica el mismo modelo pero con regla de "abrir la puerta, no salir a tocarla" (sección 8.2). No outbound activo; sí atención prioritaria si llega lead orgánico de Animalón en Bruma, Manzanilla u otros del cluster.

### 16.3 Modelo 2 — Plaza con consultor partner local (Fase 3 operativa)

**Cuándo aplica.** Plazas con conectividad media desde TJ (vuelos con escala, 4-5 horas puerta-a-puerta) y con cluster gastronómico maduro pero comunidad gastronómica que no está en la red personal de TJ. Aplica a Sonora (Hermosillo), Querétaro, Puebla.

**Estructura operativa.**

- **Equipo:** TJ atiende remoto. Alan viaja a la plaza en momentos críticos.
- **Consultor partner local como extensión Zenet.** Replica al revés el modelo SoftRestaurant + SYCA TJ (`02` §4.4). Un consultor gastronómico local que entrene a Zenet, lo implemente con sus clientes y monetize su servicio sobre el sistema. La presencia Zenet en plaza ocurre vía el consultor partner sin contratar plantilla local.
- **Outreach:** vía CANIRAC delegacional (Querétaro y Puebla las más activas) + consultor partner + LinkedIn. La estrategia de identificación de consultor parte de la red TJ ya validada (Anna Palazuelos, Victor Murguía, Algira Garzón) — preguntar por colegas en plaza Fase 3 antes de cold outreach LinkedIn.

**Pre-condición de activación.** Tracción consolidada en TJ + BC. 15-25 clientes activos, retención ≥ 80% a 6 meses, casos documentados con métricas verificables.

**Costo operativo.** Medio. El partner local cobra (comisión recurrente sobre suscripción del cliente referido + tarifa preferencial para sus clientes + soporte técnico dedicado), pero la presencia de Zenet en plaza no requiere oficina ni equipo nuevo. La fricción real es la **identificación y comprometimiento del partner** — sin partner identificado, el modelo no se activa.

**Variable por plaza.** Querétaro tiene CANIRAC Hernández Rosiles como palanca institucional fuerte; Puebla tiene Azomoza Alacio; Sonora tiene CANIRAC más desorganizada públicamente y carga el peor amplificador narrativo. La calidad del partner local compensa o agrava esa diferencia.

### 16.4 Modelo 3 — Plaza remota con partnership obligatorio (Fase 3 bis y futuro Fase 5)

**Cuándo aplica.** Plazas con conectividad prohibitiva desde TJ (>6 horas puerta-a-puerta, escalas obligatorias) que tienen cluster con identidad fuerte y valor reputacional alto pero no soportan modelo presencial-eficiente. Aplica explícitamente a Mérida (Fase 3 bis) y eventualmente a plazas LATAM Fase 5.

**Estructura operativa.**

- **Equipo:** TJ totalmente remoto. Alan viaja solo a momentos críticos (cierre del primer cliente emblemático, evento Michelin u otro hito narrativo).
- **Partnership con chef o consultor local como prerrequisito formal.** No hay outreach sin partner identificado y comprometido vía LOI o contrato. El partner es la única presencia Zenet en plaza.
- **Pilotos limitados — 2-3 clientes emblemáticos como hub reputacional**, no captura masiva. El objetivo es narrativa nacional/regional, no volumen MRR local.
- **Implementación principalmente remota.** Onboarding vía Zoom, documentación, entrenamiento del partner. Visitas presenciales acotadas a hitos.

**Pre-condición de activación.** Tracción multi-plaza demostrada en MX (TJ + BC + al menos 2 plazas Fase 3 operativas con clientes activos) + partner local identificado y comprometido formalmente. Sin las dos, la plaza queda en stand-by.

**Costo operativo.** Bajo en presencia (sin viajes frecuentes ni equipo local) pero alto en complejidad operativa de implementación remota con cliente premium. El riesgo es de mal aterrizaje del primer caso emblemático: sin presencia física para destrabar problemas operativos, una mala experiencia inicial cierra la plaza prematuramente.

**Variante futura — LATAM Fase 5.** El modelo Mérida valida el patrón antes de aplicarlo a plazas LATAM. Lecciones de Mérida (qué funciona y qué falla en modelo remoto + partner) informan diseño del modelo LATAM cuando llegue Serie A.

### 16.5 Pre-condiciones recap — la disciplina del avance entre fases

Las pre-condiciones de cada modelo no son recomendaciones — son **disciplina de avance**. La tentación recurrente en empresas SaaS es activar nuevas plazas antes de tener el modelo afinado en la actual; la respuesta de Zenet es explícita en cada fase:

| Fase | Plaza(s) | Pre-condición |
|---|---|---|
| 1 | Tijuana | Plaza de origen — sin pre-condición formal |
| 2 (Modelo 1) | BC completa | 5 design partners TJ contratados, data limpia, NPS ≥ 40 |
| 3 operativa (Modelo 2) | Sonora, Querétaro, Puebla | 15-25 clientes activos TJ+BC, retención ≥ 80% a 6 meses, casos documentados |
| 3 bis (Modelo 3) | Mérida | Tracción multi-plaza + partner local identificado y comprometido vía LOI |
| 4 | GDL, MTY, CDMX | Tracción multiplaza demostrada, ARR mínimo en plan de fundraising, caso ancla narrativo activo |
| 5 | LATAM | Cierre Serie A + partnership regional + tracción MX consolidada |

Las cifras son indicativas y se calibran cuando el momento llega con data operativa real. Lo que **no** se calibra es la disciplina de no avanzar por calendario.

---

## 17. Pricing por plaza

La decisión sobre pricing por plaza dentro de México fue tomada explícitamente: **pricing uniforme MX, LATAM se evalúa cuando se active Fase 5**. Esta sección documenta la decisión y su justificación para que iteraciones futuras del workspace tengan trazabilidad.

### 17.1 La decisión

**Pricing uniforme dentro de México.** El rango base $1,500 MXN/mes/sucursal en Fase 1 (`05-perfil-de-cliente-ideal.md`) aplica para toda plaza MX — TJ, Mexicali, Ensenada, Hermosillo, Querétaro, Puebla, Mérida, GDL, MTY, CDMX. Sin descuento por plaza pequeña ni recargo por plaza grande.

**Descuento por etapa, no por plaza.** Fase 0 design partners pueden recibir 20-30% de descuento sobre el rango base como reconocimiento de su rol pionero. Es descuento por momento del cliente (early adopter), no por geografía.

**LATAM como decisión separada.** El pricing en plazas Fase 5 (Guatemala City, San José, Bogotá, Lima, Santiago) no se decide en este documento. Se evalúa cuando se active Fase 5 con cierre de Serie A y partnership regional, considerando capacidad de pago local, moneda, competencia regional (Fudo en plazas LATAM con pricing posiblemente distinto al rango MX) y costo de cumplimiento regulatorio local.

### 17.2 Argumentos a favor de pricing uniforme MX

**Capacidad de pago estructural.** El segmento ICP (casual independiente formal con BoH propio en expansión activa) maneja tickets que sostienen ARPU de $1,500 MXN/mes en todas las plazas MX del scope. Las plazas frontera norte (TJ, Mexicali, Ensenada) tienen capacidad de pago amplificada por el beneficio fiscal (IVA 8% + SM frontera elevado, `08`); las plazas Fase 3 (Querétaro corporativo, Puebla universitario, Hermosillo industrial) la tienen por estructura económica local; CDMX/MTY/GDL la tienen por tamaño bruto. **La capacidad de pago no es problema en ninguna plaza MX del scope.**

**Simplicidad de marca y contrato.** Pricing uniforme reduce fricción de comunicación interna y externa: un mismo plan, una misma propuesta, un mismo contrato. La complejidad de pricing diferenciado por plaza genera fricción operativa (qué plaza recibe cuál pricing, cómo se comunica, qué pasa si un cliente abre sucursal en plaza con pricing distinto) que excede el valor capturado por la diferenciación.

**Disciplina contra la presión de descuento por plaza.** Cada equipo de ventas que opera en una plaza con presión de descuento puede argumentar "en mi plaza no se puede vender al precio MX". Pricing uniforme cierra ese argumento — el descuento se justifica por momento del cliente o tamaño de cuenta, no por geografía. Mantiene integridad del modelo a escala.

### 17.3 Argumentos contra pricing diferenciado (rechazados)

Los argumentos a favor de diferenciar — que el doc 02 §3.2 implícitamente abrió cuando declaró fases con TAMs distintos — fueron evaluados y rechazados:

- **Capacidad de pago menor en plazas medianas.** Se rechaza porque el ICP filtrado por scope (operación formal con BoH propio en expansión activa) tiene capacidad estructural en todas las plazas MX. La afirmación "Hermosillo no paga lo mismo que CDMX" puede ser cierta en promedio del sector pero no en el sub-segmento que Zenet atiende.
- **Competencia local con pricing menor.** Algunos POS (Fudo, conceptos locales) operan en MTY/GDL/CDMX con pricing más bajo. Zenet compite por valor (AI-native + BoH-first) no por pricing — la respuesta a competencia local barata no es bajar precio sino comunicar diferencial.
- **Plaza pequeña justifica plan reducido.** Tecate o Cd Obregón tienen TAM accesible pequeño, pero el operador individual paga al rango MX. La discriminación geográfica complica el modelo sin capturar valor.

### 17.4 Diferenciación legítima (no por plaza)

Pricing uniforme por plaza no significa pricing único. Existen tres ejes de diferenciación legítima dentro del scope MX:

1. **Por número de sucursales.** Es la dimensión natural del producto — más sucursales más valor entregado, naturalmente más MRR. Estructura por sucursal o tier por número.
2. **Por momento del cliente.** Design partners (Fase 0), early adopters (primeros 50 clientes), clientes maduros. Descuentos transparentes por etapa de la compañía.
3. **Por features o módulo.** Plan base con módulos opcionales (CFDI ingestión, integración con software contable específico, analytics avanzado). Más features más MRR sin afectar plaza.

Estas tres dimensiones son ortogonales a la geografía. Un cliente Tijuana paga lo mismo que un cliente Puebla a igualdad de sucursales, etapa y plan. Eso es lo que define "pricing uniforme MX".

### 17.5 Implicación para el roadmap de modelos

La decisión de pricing uniforme MX no es definitiva — es la postura inicial. Triggers que disparan revisión:

- **Fricción sostenida en ventas** que reportan "el pricing no es viable en plaza X". Si emerge en 2-3 plazas distintas, vale revisar.
- **Cambio regulatorio significativo** que afecte estructura de costos del operador (eliminación de IVA 8% frontera norte, reformas laborales mayores).
- **Activación de Fase 5 LATAM** — la decisión de pricing LATAM se toma entonces, y puede o no replicar el modelo MX según condiciones.

El registro de la decisión y sus argumentos en este documento es deliberado: cuando Alan o un equipo futuro revise la postura, el contexto y razones están explícitos.

---

## 18. Riesgos de la estrategia faseada

La estrategia faseada (TJ → BC → Fase 3 operativa → Fase 3 bis → Fase 4 → LATAM) optimiza para validar antes de escalar y para preservar capital de adquisición. Pero carga riesgos estructurales que merecen documentarse explícitamente, no esconderse en optimismo de plan.

### 18.1 Riesgo 1 — Saturación local TJ antes de migrar

**Naturaleza del riesgo.** Tijuana tiene SAM accionable de **150-500 cuentas en expansión activa** según `02` §4.1 y `03` §3.2. Si Zenet captura agresivamente Año 1-2 dentro de ese rango, puede llegar a un punto donde el growth marginal en TJ se desacelera por agotamiento del SAM, sin haber completado la pre-condición para activar Fase 2 (que es relacional, no de cobertura: 5 design partners con NPS ≥ 40).

**Síntomas tempranos a vigilar:**

- Outreach a operadores TJ donde la mayoría ya conoce Zenet por peer referral (señal de cobertura alta).
- Pipeline de leads orgánicos TJ desacelerándose mes a mes.
- Conversaciones donde el operador menciona "ya hablé con dos de los chefs que usan Zenet" — densidad alta de presencia.

**Mitigación.** Activar Fase 2 con disciplina pero sin esperar saturación absoluta. La pre-condición "5 design partners + NPS ≥ 40" es para PMF demostrado, no para cobertura completa de TJ. Con esos 5 design partners, BC se activa en paralelo a continuación de outbound TJ.

**Probabilidad estimada.** Media-baja. El segmento "casual independiente formal en expansión activa" en TJ es lo suficientemente grande para sostener growth Año 1-2; saturación crítica es escenario Año 3+.

### 18.2 Riesgo 2 — Costo de oportunidad por no entrar a CDMX antes

**Naturaleza del riesgo.** CDMX tiene TAM accesible ~15-20K establecimientos (`03` §3.2) — 30-40x el de TJ. Posponer CDMX a Fase 4 implica que el growth de los primeros 18-24 meses se construye sobre plazas con TAM menor, mientras competidores con strategy de "atacar CDMX primero" capturan participación en la plaza más grande del país.

**Síntomas tempranos a vigilar:**

- Competidores AI-native con narrativa similar a Zenet anuncian rondas de capital con foco CDMX.
- Operadores CDMX referidos por clientes TJ activos preguntan por Zenet en CDMX y reciben respuesta "todavía no operamos ahí".
- Prensa nacional cubre el segmento sin mención de Zenet por ausencia de presencia capital.

**Mitigación.** El argumento de fondo de la doctrina (sección 14.1) es que **entrar tarde con caso ancla es mejor que entrar temprano sin diferenciación**. Mitigación operativa: cuando llegue Fase 3 con tracción demostrada en plazas medianas, monitorear el momento para acelerar entrada a Fase 4 — no por calendario sino por convergencia de pre-condiciones (caso ancla activo + ARR mínimo + capacidad operativa).

**Probabilidad estimada.** Media. Un competidor con velocidad de iteración alta (Parrot, PoloTab) puede pivotar a "AI-native + BoH-first" en CDMX en 12-24 meses. La defensa es velocidad de Zenet en construir profundidad cognitiva difícil de copiar — no presencia geográfica temprana.

### 18.3 Riesgo 3 — Competidor que se mueve más rápido

**Naturaleza del riesgo.** El doc 02 §4.4 declaró que "cuando un Tier 1 (Parrot, PoloTab) pivotee, escenario probable en 12-24 meses, la defensa es velocidad de iteración + profundidad cognitiva". El riesgo geográfico específico es: **competidor pivotea con producto AI-native y captura plazas grandes (CDMX, MTY) antes de que Zenet llegue**.

**Síntomas tempranos a vigilar:**

- Anuncios públicos de Parrot, PoloTab, Fudo o nuevos entrantes sobre módulos AI o roadmap BoH cognitivo.
- Casos públicos en CDMX/MTY/GDL de operadores adoptando "soluciones AI" (incluso de otros sectores adaptados a restaurante).
- Inversores especializados (Antler, 500 Latam, Quona) movilizando capital en thesis "AI for restaurants LATAM".

**Mitigación.**

- Mantener velocidad de iteración del producto. Diferenciación AI-native es activo defendible mientras Zenet sea más profundo y rápido.
- No competir por presencia geográfica temprana. Competir por profundidad cognitiva — recetario inteligente, costeo predictivo, anomaly detection en mermas, capacidades que un POS pivoteado no replica en 12 meses.
- Activar Fase 4 cuando la profundidad cognitiva esté visible en producto, no antes.

**Probabilidad estimada.** Media-alta. Un Tier 1 con capital y red de distribuidores existente (SoftRestaurant + SYCA, Parrot) tiene ventajas estructurales si decide pivotar. La carrera no es geográfica sino de profundidad.

### 18.4 Riesgo 4 — Otra plaza emerge como mejor beachhead

**Naturaleza del riesgo.** La elección de TJ como plaza de origen está fundamentada en frontera norte fiscal-salarial + cluster gastronómico + reconocimientos + comunidad tight (sección 4). Pero la doctrina implícita es que **TJ es la mejor plaza de origen identificada en abril 2026** — no necesariamente la mejor en abril 2027.

**Escenarios donde otra plaza podría emerger como mejor beachhead:**

- **Cambio regulatorio que afecte beneficio fiscal frontera norte.** Si el decreto IVA 8% no se renueva al final de 2026 (el decreto se renueva año tras año), TJ pierde palanca fiscal estructural. Otras plazas con SM elevado (CDMX) podrían comparar mejor.
- **Crisis económica o de seguridad agudizada en TJ.** Eventos de seguridad o caída prolongada del turismo USA pueden contraer el SAM accionable más rápido de lo previsto.
- **Cluster en otra plaza acelera reconocimiento.** Si Querétaro o Puebla reciben múltiples estrellas Michelin 2026 y captura prensa nacional sostenida, el peso narrativo de "el caso ancla viene de allá" puede inclinar la balanza.

**Mitigación.** Documentar triggers explícitos en sección 20. Revisar la postura "TJ como plaza de origen" anualmente con data fresca, no asumir que la decisión es permanente.

**Probabilidad estimada.** Baja. La combinación de criterios que sostiene a TJ es estructural y no se desplaza fácilmente. Pero la disciplina de revisión sostiene el modelo a largo plazo.

### 18.5 Síntesis — los riesgos que más vigilar

| Riesgo | Probabilidad | Severidad si materializa | Vigilancia recomendada |
|---|---|---|---|
| Saturación local TJ | Media-baja | Media | Monitor mensual de pipeline orgánico TJ |
| Costo de oportunidad CDMX | Media | Media-alta | Trigger: anuncio de competidor AI-native con foco CDMX |
| Competidor más rápido | Media-alta | Alta | Monitor trimestral de roadmap Parrot/PoloTab/Fudo |
| Otra plaza mejor beachhead | Baja | Alta | Revisión anual de postura "TJ como origen" |

**Conclusión.** Los riesgos más probables y severos no son geográficos puros — son de **velocidad y profundidad de producto**. La estrategia faseada es defensa razonable contra saturación competitiva y costo de adquisición, pero no sustituye velocidad de iteración del producto AI-native. El doc 07 enmarca el dónde; el repositorio de producción enmarca el qué construir y a qué velocidad. Ambos deben moverse en paralelo.

---

## 19. Hipótesis abiertas y pendientes de validar

Esta sección consolida los huecos del documento — información que no se localizó en research público, hipótesis estratégicas sin validación de campo, y decisiones operativas que requieren input adicional. Es declaración honesta de límites del v1.0 y guía para iteraciones futuras.

Tres categorías:

- **Huecos de información publicada** — datos que existen pero no se localizaron. Cerrarían con búsqueda dirigida adicional, llamadas a fuentes locales, o trabajo de DENUE / OpenStreetMap / scraping específico.
- **Hipótesis estratégicas sin validación de campo** — afirmaciones del doc cuya verificación requiere conversaciones reales con operadores, consultores o instituciones.
- **Decisiones operativas pendientes** — puntos donde el doc no toma decisión porque requiere input que no es de research.

### 19.1 Huecos de información publicada

| # | Tema | Sección | Cómo cerrarlo |
|---|---|---|---|
| 1 | DENUE actualizado SCIAN 722 por delegación TJ con geocoding | 5 | Descarga DENUE 2024-2026 + geocodificación + agrupación por polígono |
| 2 | Operadores TJ con sucursal en San Diego/Chula Vista/Bonita | 4.5 | Investigación dirigida web por grupo (Plascencia, LionFish, La Corriente, otros) |
| 3 | Periodistas TJ por nombre cubriendo industria gastronómica | 6.4 | Revisión nota por nota o pedido de media list a CANIRAC TJ y Sectur BC |
| 4 | Profundidad de cocina en brewpubs TJ (Norte, Madueño, Mamut, Teorema) | 4.2 | Visita / verificación de menús en redes / entrevista |
| 5 | DENUE SCIAN 722 Mexicali, Ensenada, Rosarito, Tecate | 7-9 | Descarga DENUE + filtrado por concepto |
| 6 | Grupos chinesca Mexicali con BoH propio multi-sucursal confirmado | 7.3 | DENUE + filtrado razón social + CANIRAC Mexicali |
| 7 | Estructura de grupo Cabanna, La Corriente Cevichería, Villa Marina | 4.2 | Sitios oficiales + investigación |
| 8 | DENUE SCIAN 722 Hermosillo, Cd Obregón, Querétaro, Puebla, Mérida | 10-13 | Descarga DENUE por ciudad |
| 9 | Cluster brewpub Hermosillo — existencia y profundidad de cocina | 10.1 | Búsqueda Google / IG "cervecería artesanal Hermosillo" + CANIRAC Sonora |
| 10 | Lista oficial Michelin México 2026 (Querétaro, Puebla, Yucatán) | 11, 12, 13 | Esperar publicación oficial Guía Michelin 2026 |
| 11 | Eventos sectoriales B2B con ficha técnica 2024-2026 — Querétaro, Puebla, Mérida | 11, 12, 13 | Outreach directo CANIRAC delegacional |
| 12 | Penetración Parrot, PoloTab, Fudo, SoftRestaurant por plaza | 14 | Información propietaria — vía entrevistas, casos públicos puntuales, o cuando un cliente Zenet venga de ellos |
| 13 | Consultores gastronómicos por nombre — Hermosillo, Querétaro, Puebla, Mérida | 10-13 | LinkedIn por ciudad + recomendación CANIRAC delegacional |
| 14 | Nombres específicos de restaurantes esperados con BoH propio multi-sucursal en GDL/MTY/CDMX | 14 | Investigación dirigida cuando Fase 4 se active |
| 15 | LATAM por país — TAM cuantitativo, marco regulatorio fiscal, marco LFPDPPP-equivalente, saturación Fudo/Bsale/Alegra | 15 | Research dedicado por país pre-entrada Fase 5 |
| 16 | Vuelos directos TJ-Mérida — confirmación de existencia, costo y frecuencia | 13.5 | Webs Volaris, VivaAerobus, Aeroméxico |
| 17 | Identificación nominal de candidatos a partner local Mérida (chef o consultor) | 13.6 | Reunión exploratoria con Roberto Solís (Néctar/Huniik), David Cetina (La Tradición), o vía CANIRAC Yucatán |

**Prioridad de cierre.**

- **Alta — operativa inmediata:** items 17 (partner Mérida), 13 (consultores Fase 3), 11 (eventos Fase 3) cuando se active outreach a esas plazas.
- **Alta — disparada por trigger externo:** item 10 (Michelin 2026 oficial) cuando se publique.
- **Media:** items 1, 5, 8 (DENUE por ciudad) — útiles cuando ventas opere outbound dirigido en plaza específica.
- **Baja:** items 12, 14, 15 (datos finos Fase 4 y LATAM) — se cierran cuando Fase 4 o Fase 5 se activen, no antes.

### 19.2 Hipótesis estratégicas sin validación de campo

| # | Hipótesis | Cómo validarla |
|---|---|---|
| 1 | Mochomos como cliente-ancla amplifica narrativamente para todo el segmento "grupo regional escalando nacional" en Sonora (sec 10.3) | Outreach específico a Mochomos cuando se active Fase 3 operativa |
| 2 | El Güero Marinero como caso Sub-segmento B accesible y operativamente afín en Puebla (sec 12.2) | Outreach a Cliente cuando se active Fase 3 Puebla |
| 3 | CANIRAC Querétaro (Hernández Rosiles) abierta a partnership formal de capacitación co-marcada (sec 11.3) | Reunión exploratoria con CANIRAC Querétaro cuando se active Fase 3 |
| 4 | Roberto Solís (Néctar/Huniik) o David Cetina (La Tradición) disponibles como partner local Mérida (sec 13.6) | Outreach exploratorio cuando se cumplan pre-condiciones Fase 3 bis |
| 5 | Apoyo gubernamental SECTUR Distintivo H del 80% sigue vigente 2026 (sec 6.1 referenciado vía `08`) | Verificación con SECTUR estatal o Secretaría de Turismo BC |
| 6 | El cluster Valle de Guadalupe genera leads orgánicos a Zenet vía LinkedIn de Alan o referrals TJ — cumpliendo la regla "abrir la puerta, no salir a tocarla" (sec 8.2) | Monitor mensual de conversaciones con operadores Valle |
| 7 | La saturación POS en CDMX es lo suficientemente alta para justificar entrar a CDMX como última plaza grande, no primera (sec 14.4) | Investigación dirigida cuando Fase 4 se active; verificar con casos reales |
| 8 | Entrar a Fase 5 LATAM con Fudo competencia ya establecida es viable si Zenet diferencia AI-native con profundidad cognitiva (sec 15.3) | Caso piloto LATAM cuando Fase 5 se active |

### 19.3 Decisiones operativas pendientes

| # | Decisión | Cuándo se toma |
|---|---|---|
| 1 | Calendario específico de viajes Alan a plazas Fase 2 (Mexicali, Ensenada, Rosarito, Tecate) | Cuando Fase 2 se active — frecuencia mensual o quincenal según pipeline |
| 2 | Selección entre Sonora vs Querétaro vs Puebla como **primera** plaza Fase 3 | Cuando se cumpla pre-condición Fase 3 (15-25 clientes TJ+BC con retención ≥ 80%) |
| 3 | Selección entre GDL vs MTY como primera plaza Fase 4 | Cuando se cumpla pre-condición Fase 4 (tracción multiplaza demostrada) |
| 4 | Pricing LATAM por país | Cuando se active Fase 5 |
| 5 | Modelo de equipo cuando se active CDMX (continúa solo TJ o presencia local) | Cuando Fase 4 entre a CDMX |
| 6 | Partner regional para Fase 5 LATAM | Pre-cierre Serie A o cierre |

---

## 20. Triggers de actualización del documento

Eventos que disparan revisión del doc 07:

**Triggers de mercado y regulatorios:**

- **Renovación o no renovación del decreto IVA 8% frontera norte** (anual, fin de año fiscal). Si no se renueva al final de 2026 o años subsiguientes, secciones 4.1 y 7.1 (TJ y Mexicali como frontera norte fiscal) cambian materialmente.
- **Publicación oficial Guía Michelin México 2026** con expansión a Querétaro, Puebla y Yucatán. Secciones 11, 12 y 13 se actualizan con la lista nominal de reconocimientos.
- **Aprobación reforma propinas en salario mínimo en Senado** (`08` §3.3). Sección 4.5 e implicaciones por plaza cambian (presión sobre coste primario amplificada).
- **Aprobación reducción de jornada laboral** (`08` §3.3). Idem — implicación operativa por plaza.
- **Cambio de gobierno municipal en cualquier plaza BC** (Tijuana, Mexicali, Ensenada, Rosarito, Tecate). Secciones 7-9 pueden requerir actualización tras toma de protesta de nuevos gobiernos por cambios en políticas de licencias y permisos (`08` §5).
- **Anuncio público de competidor AI-native con foco CDMX** (Parrot, PoloTab, Fudo o nuevo entrante). Sección 18.3 (Riesgo competidor más rápido) se reevalúa.

**Triggers internos de Zenet:**

- **Cierre exitoso Serie A.** Activa Fase 5 LATAM (sección 15.4). Sección 17.5 (pricing LATAM) se decide.
- **5 design partners TJ contratados con NPS ≥ 40 y data limpia.** Activa Fase 2 BC. Sección 16.2 entra en operación.
- **15-25 clientes activos TJ+BC con retención ≥ 80% a 6 meses.** Activa Fase 3 operativa. Sección 16.3 entra en operación.
- **Identificación y compromiso formal (LOI) de partner local Mérida.** Activa Fase 3 bis (sección 13.6). Sin esto, Mérida queda en stand-by.
- **Tracción multiplaza demostrada + ARR mínimo en plan de fundraising + caso ancla narrativo activo.** Activa Fase 4 plazas grandes. Sección 14.3 se opera.

**Triggers de research adicional:**

- **Activación de outreach activo en plaza específica Fase 3.** Dispara cierre de huecos #11, #13 de la sección 19.1 para esa plaza.
- **Pre-cierre Fase 5.** Dispara cierre de hueco #15 (LATAM por país) con research dedicado.
- **Lead orgánico Valle de Guadalupe (Animalón en Bruma, Manzanilla, Fuego u otro).** Dispara activación inmediata bajo regla "abrir la puerta" (sección 8.2) y posiblemente actualización de sección 8 con caso real.

**Cadencia mínima de revisión.** Trimestral para confirmar que ningún trigger se ha activado. Anual para revisar el documento completo en su versión vigente y subir versión si los cambios lo ameritan.

---

## 21. Fuentes consultadas

Fuentes que sostienen las afirmaciones del documento. Organizadas por categoría y por plaza. URLs cuando aplica.

### 21.1 Fuentes institucionales y oficiales

- CANIRAC Tijuana — declaraciones públicas 2024-2026 (Rebeca Aguilar Santuario, presidencia delegacional 2026-2027). https://portal.canirac.org.mx
- CANIRAC Querétaro — declaraciones públicas 2024-2026 (Rosalinda Hernández Rosiles, presidencia).
- CANIRAC Puebla — declaraciones públicas 2024-2026 (Carlos Azomoza Alacio, presidencia).
- CANIRAC Yucatán — declaraciones públicas 2024-2026 (Israel López García, presidencia; Claudia González, vocería).
- CANIRAC Sonora — voz nacional con cobertura limitada por delegación específica.
- Gobierno de Baja California. *VI Festival del Pescado y el Marisco — Ensenada.* 2024. https://www.bajacalifornia.gob.mx/Prensa/Noticia/12896
- Implan Playas de Rosarito. *Programa Metropolitano TJ-Tecate-Rosarito 2022-2027.* https://implanplayasderosarito.gob.mx/programa-metropolitano-de-tijuana-baja-california-2022-2027/
- Ayuntamiento Tijuana. *Reglamento de Bebidas Alcohólicas + portal de trámites.* https://www.tijuana.gob.mx/normatividad/
- Diario Oficial de la Federación. *Decreto de estímulos fiscales región fronteriza norte.* Renovado 31 dic 2025, vigente 2026.
- Guía Michelin México. *Anuncio expansión 2026 a Querétaro, Puebla y Yucatán.* Marzo 2026 (referencia oficial).

### 21.2 Prensa local Tijuana y Baja California

- AFN Tijuana. *Industria gastronómica de Tijuana se consolida como motor económico.* 2026. https://www.afntijuana.info/informacion_general/173852_se_posiciona_la_industria_gastronomica_como_motor_economico_de_tijuana
- Diario Tijuana. *Industria gastronómica como motor económico — Tijuana Competitiva.* 2026. https://diariotijuana.info/2026/02/industria-gastronomica-se-posiciona-como-motor-economico-en-tijuana-competitiva
- El Imparcial Tijuana. *Esperan apertura de nuevos restaurantes en Baja California a partir de marzo.* 2026. https://www.elimparcial.com/tij/tijuana/2026/02/06/esperan-apertura-de-nuevos-restaurantes-en-baja-california-a-partir-de-marzo/
- El Imparcial Tijuana. *Viralidad acelera apertura y crecimiento de restaurantes en Tijuana.* 2026. https://www.elimparcial.com/tij/tijuana/2026/04/29/viralidad-acelera-apertura-y-crecimiento-de-restaurantes-en-tijuana/
- Zeta Tijuana. *Hasta 4 mil puntos de venta de alcohol operan sin permiso en Tijuana.* 2026. https://zetatijuana.com/2026/03/hasta-4-mil-puntos-de-venta-de-alcohol-operan-sin-permiso-en-tijuana/
- Zeta Tijuana. *Toma de compromiso del Consejo Directivo CANIRAC TJ 2026.* 2026. https://zetatijuana.com/2026/03/celebran-toma-de-compromiso-del-consejo-directivo-2026-de-la-canirac-tijuana/
- OEM El Sol de Tijuana. *Restauranteros cierran un año difícil — CANIRAC TJ.* 2025. https://oem.com.mx/elsoldetijuana/local/restauranteros-cierran-un-ano-dificil-pero-anticipan-recuperacion-en-2026-canirac-tijuana-27098715
- OEM La Voz de la Frontera. *5 inspecciones COEPRIS al mes — restauranteros BC.* 2026. https://oem.com.mx/lavozdelafrontera/local/reciben-restauranteros-al-menos-5-inspecciones-al-mes-por-parte-de-coepris-29591484
- OEM La Voz de la Frontera. *CANIRAC reconoce cierres por desaceleración económica — Mexicali.* 2025. https://oem.com.mx/lavozdelafrontera/local/reconoce-canirac-cierre-de-restaurantes-por-desaceleracion-economica-29345165
- Punto Norte BC. *Ayuntamiento ya no dará permisos para bares en la Zona Norte — moratoria 6 años.* 2024. https://puntonorte.info/2024/04/17/ayuntamiento-ya-no-dara-permisos-para-bares-en-la-zona-norte/
- Uniradio Baja. *Bootcamp GastronomIA CANIRAC TJ — 40 marcas, 203 restaurantes.* Enero 2026.

### 21.3 Eventos y festivales gastronómicos

- Saborearte. *Baja Culinary Fest 2024 — 11ª edición, sedes Misión 19 / La Querencia / Saverios.* 2024. https://www.saborearte.com.mx/baja-culinary-fest-2024/
- El Universal Menú. *Baja Culinary Fest 2024 — fecha, ponentes e invitados.* 2024. https://www.eluniversal.com.mx/menu/baja-culinary-fest-2024-fecha-ponentes-e-invitados/
- Ciudad Tijuana. *Baja Culinary Fest 2024 — el evento más relevante y esperado.* 2024. https://ciudadtijuana.info/baja-culinary-fest-2024-el-evento-mas-relevante-y-esperado-del-ano-ya-tiene-fecha/

### 21.4 Casos referenciales y restaurantes

- OpenTable México. *Mejores restaurantes Tijuana / Hermosillo / Mérida.* https://www.opentable.com.mx
- TripAdvisor México. *Restaurantes Tijuana / Mexicali / Ensenada / Mérida.* https://www.tripadvisor.com.mx
- Guía Michelin México. *Oryx Tijuana — recomendado 2024-2025.* https://guide.michelin.com/mx/es/baja-california/tijuana_2061688/restaurante/oryx
- Hoteles.com Go Guides. *Best restaurants in Tijuana.* https://es.hoteles.com/go/mexico/best-restaurants-in-tijuana
- Border Psycho Brewery. *Sitio oficial.* https://borderpsychobrewery.com
- Néctar Mérida. *Sitio oficial.* https://www.nectarmerida.com.mx
- Yucatán Today. *Cocina mexicana contemporánea en Mérida.* https://yucatantoday.com/cocina-mexicana-contemporanea-en-merida/
- Food & Pleasure. *Restaurantes alta cocina Mérida — Néctar, Huniik.* 2024. https://foodandpleasure.com/restaurantes-alta-cocina-merida/
- Marco Beteta. *Restaurantes cocina yucateca Mérida.* https://mbmarcobeteta.com/restaurantes-cocina-yucateca-merida/
- Culinaria Mexicana. *Mejores restaurantes Mérida.* https://www.culinariamexicana.com.mx/mejores-restaurantes-merida/
- Guía Oca Puebla. *10 restaurantes favoritos de 2025 — caso El Güero Marinero.* 2025. https://puebla.guiaoca.mx/es/contenido/nuestros-10-restaurantes-favoritos-de-2025/
- Escapadas México Desconocido. *Restaurantes de comida china en Mexicali.* https://escapadas.mexicodesconocido.com.mx/restaurantes-de-comida-china-en-mexicali/

### 21.5 Prensa nacional sobre plazas Fase 3

- El Economista. *2025 — Puebla espera 100 millones de pesos en inversiones de nuevos restaurantes.* 2024. https://www.eleconomista.com.mx/estados/2025-puebla-espera-100-millones-pesos-inversiones-nuevos-restaurantes-20241209-737603.html
- El Economista. *Frontera y limbo — cocina con gran identidad. Ruffo Ibarra.* 2026. https://www.eleconomista.com.mx/bistronomie/frontera-limbo-cocina-gran-identidad-ruffo-ibarra-20260129-797355.html
- El Sol de Puebla (OEM). *15 nuevos restaurantes de cadena en Puebla.* 2024. https://oem.com.mx/elsoldepuebla/finanzas/abriran-sus-puertas-15-nuevos-restaurantes-de-cadena-en-puebla-13429705
- Cinoticias Querétaro. *Proyectan llegada de más restaurantes a Querétaro 2025.* 2024. https://cinoticiasmx.com/2024/12/19/proyectan-nuevos-restaurantes-en-queretaro-para-2025/
- Quadratín Querétaro. *Pronostican llegada de más restaurantes a Querétaro.* 2024. https://queretaro.quadratin.com.mx/pronostican-llegada-de-mas-restaurantes-a-queretaro/
- AR Noticias. *Asociación de Restauranteros Querétaro — 2025.* 2024.

### 21.6 Prensa Mérida y Yucatán

- Yucatán Quadratín. *CANIRAC advierte un 2026 complejo para el sector restaurantero.* 2026. https://yucatan.quadratin.com.mx/yucatan/canirac-advierte-un-2026-complejo-para-el-sector-restaurantero-en-yucatan/
- Yucatán a la mano. *Sector restaurantero Yucatán — retos.* https://yucatanalamano.com/sector-restaurantero-de-yucatan-presenta-retos-a-pesar-de-presentar-un-ligero-incremento/
- Senderos del Mayab. *Alza en insumos presiona restaurantes Yucatán.* https://senderosdelmayab.com/alza-en-insumos-presiona-a-restaurantes-en-yucatan-sector-busca-evitar-incrementos-al-consumidor/
- Diario de Yucatán. *Restaurantes en Yucatán enfrentan costos al alza.* 2026. https://www.yucatan.com.mx/merida/2026/04/28/restaurantes-en-yucatan-enfrentan-costos-al-alza.html

### 21.7 Creadores de contenido y blogs gastronómicos

- Baja Foodie / Baja Califoodie. Cuentas FB/IG con cobertura de zonas TJ y BC. https://www.facebook.com/bajacalifoodie
- Saborearte. *Cobertura nacional de Baja Culinary Fest.* https://www.saborearte.com.mx
- Gourmet de México. *Lugares para comer en Tijuana y Tecate.* https://gourmetdemexico.com.mx
- Baja Foodie blog Ensenada. *La historia del Mercado Negro de Mariscos.* https://bajafoodie.blog
- Metroguia Tijuana. *Zonas y corredores gastronómicos.* https://metroguia.mx/tijuana/

### 21.8 Fuentes adicionales sobre tema regulatorio y económico

Marco regulatorio detallado (IVA 8% frontera, SM frontera norte, reformas laborales 2024-2026, regulación municipal BC) está documentado en `08-entorno-regulatorio.md` con fuentes propias. Este documento referencia ese trabajo en lugar de duplicarlo.

### 21.9 Fuentes internas del workspace Zenet

- Zenet Marketing. *01-panorama-de-la-industria.md* v1.1, abril 2026.
- Zenet Marketing. *02-definicion-y-alcance.md* v1.0, abril 2026.
- Zenet Marketing. *03-tamano-de-mercado.md* v1.0, abril 2026.
- Zenet Marketing. *04-segmentacion-de-mercado.md* v1.0, abril 2026.
- Zenet Marketing. *05-perfil-de-cliente-ideal.md* v1.0, abril 2026.
- Zenet Marketing. *06-estructura-y-ecosistema.md* v1.0, abril 2026.
- Zenet Marketing. *08-entorno-regulatorio.md* v1.0, abril 2026.
- Zenet Marketing. *Branding/_context/04-voice-and-tone/voz-y-tono.md* v1.0.
- Zenet Production. *Business context for production software.* v1.0, abril 2026. `/02_Producto-y-Tech/Production-software/Zenet/docs/project-strategy/business-context/zenet-business-context-production.md`

---

*Documento elaborado en abril-mayo 2026 sintetizando: marco geográfico declarado en `02-definicion-y-alcance.md` §3.2, cifras SAM/SOM por plaza de `03-tamano-de-mercado.md`, ICP del beachhead de `05-perfil-de-cliente-ideal.md`, ecosistema BC de `06-estructura-y-ecosistema.md`, marco regulatorio municipal y fiscal de `08-entorno-regulatorio.md`, e investigación dirigida (Perplexity Pro Deep Research, runs Apr-May 2026) sobre sub-zonas TJ, anatomía de plazas BC y Fase 3, y revisión Mérida tras anuncio Michelin México 2026. Versión actual: ver frontmatter.*






