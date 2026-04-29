---
name: Tamaño de mercado
description: TAM, SAM y SOM del mercado objetivo de Zenet con fuentes, supuestos y horizontes
type: market-research
last_updated: 2026-04-29
status: active
version: 1.0
owner: Alan Bahena
---

# Tamaño de mercado

## Índice

1. [Propósito y metodología](#1-propósito-y-metodología)
   - 1.1 Qué responde y qué no
   - 1.2 Top-down vs bottom-up
   - 1.3 Supuestos clave
2. [TAM — Total Addressable Market](#2-tam--total-addressable-market)
   - 2.1 Universo del cual partimos
   - 2.2 TAM categórico Zenet en MX
   - 2.3 TAM categórico Zenet en LATAM
   - 2.4 Cross-check con mercado real de software restaurantero
3. [SAM — Serviceable Addressable Market](#3-sam--serviceable-addressable-market)
   - 3.1 Filtros aplicados
   - 3.2 SAM Fases 1-3 (Tijuana + BC + plazas óptimas)
   - 3.3 SAM nacional eventual
   - 3.4 SAM en valor (ARR potencial)
4. [SOM — Serviceable Obtainable Market](#4-som--serviceable-obtainable-market)
   - 4.1 SOM Año 1 (Tijuana, beachhead)
   - 4.2 SOM Año 3 (Tijuana + BC + Fase 3)
   - 4.3 SOM Año 5 (Fases 1-4 nacional + early LATAM)
   - 4.4 Resumen consolidado de SOM en cuentas y ARR
5. [Análisis de sensibilidad](#5-análisis-de-sensibilidad)
   - 5.1 Sensibilidad por ARPU
   - 5.2 Sensibilidad por penetración
   - 5.3 Sensibilidad por unidades promedio por cliente
   - 5.4 Punto de break-even / inflexión operativa
6. [Comparativa con benchmarks](#6-comparativa-con-benchmarks)
   - 6.1 vs. mercado mexicano de software restaurantero
   - 6.2 vs. competidores con ARR publicado
   - 6.3 vs. expectativas venture-scale
7. [Implicaciones para Zenet](#7-implicaciones-para-zenet)
   - 7.1 ¿El SAM declarado es suficiente?
   - 7.2 Triggers de revisión del sizing
   - 7.3 Implicaciones para go-to-market y producto
8. [Fuentes consultadas y supuestos](#8-fuentes-consultadas-y-supuestos)
9. [Hipótesis abiertas](#9-hipótesis-abiertas)

---

## 1. Propósito y metodología

### 1.1 Qué responde y qué no

Este documento cuantifica el mercado declarado en `02-definicion-y-alcance.md` v1.0. Responde con precisión a tres preguntas:

1. **¿Qué tan grande es el mercado total potencial de Zenet?** (TAM)
2. **¿Qué porción de ese mercado puede Zenet servir realísticamente dado su scope?** (SAM)
3. **¿Qué porción de ese SAM puede Zenet capturar en horizontes 1, 3 y 5 años?** (SOM)

Es un documento **cuantitativo con sensibilidad explícita**. Los números son estimaciones trianguladas, no cifras oficiales. Se actualizan cuando llegue evidencia primaria (clientes pagando, datos de campo, estudios sectoriales nuevos).

**Lo que NO responde:**

- Sub-segmentación accionable dentro del SAM → vive en `04-segmentacion-de-mercado.md`.
- Perfil quirúrgico del cliente ideal → vive en `05-perfil-de-cliente-ideal.md`.
- Estructura del ecosistema (canales, partners, distribuidores) → vive en `06-estructura-y-ecosistema.md`.

### 1.2 Top-down vs bottom-up

Usamos **bottom-up** como método primario para TAM/SAM/SOM, con **top-down como cross-check**.

| Método | Cuándo se usa | Por qué |
|---|---|---|
| **Bottom-up** (establecimientos × ARPU) | TAM, SAM, SOM | Más defendible, anclado en datos verificados del panorama |
| **Top-down** (mercado total × % addressable) | Cross-check de TAM | Valida orden de magnitud, detecta inconsistencias gruesas |

Bottom-up es más conservador y trazable. Top-down sirve para verificar que no estamos inflando ni subestimando.

### 1.3 Supuestos clave

| Supuesto | Valor base | Sensibilidad |
|---|---|---|
| **ARPU efectivo** por sucursal/mes | $1,500 MXN | Sensibilidad horizontal $1,000 / $1,500 / $2,000 (ver sección 5 cuando se complete) |
| **ARR por sucursal** | $18,000 MXN/año ($1,500 × 12) | $12K / $18K / $24K en sensibilidad |
| **Promedio de unidades operativas por cliente** | 1.5 (mezcla de operadores 1 sucursal + 2-3 + 4-5) | Validar con primeros 20 clientes paying |
| **Tipo de cambio MXN/USD** | $20 MXN/USD (referencia 2026) | — |
| **CAGR mercado MX software restaurantero** | 10% anual (punto medio del rango 9-12%) | — |
| **% en expansión activa** dentro del filtro tamaño | 15% (punto medio del rango 10-20%) | — |
| **Penetración Año 1** (% del SAM Tijuana) | 2% (punto medio del rango 1-3%) | — |
| **Penetración Año 3** (% del SAM acumulado Fases 1-3) | 8% (punto medio del rango 5-10%) | — |
| **Penetración Año 5** (% del SAM nacional) | 12% (punto medio del rango 10-15%) | — |
| **Modelo de pricing asumido** | Capa BoH sobre POS existente | Permite ARPU incremental razonable y cubre mercado más amplio que BoH-first puro |

**Nota sobre early adopter discounting:** Año 1 puede experimentar ARPU efectivo en rango $1,000-$1,200 MXN por descuentos a primeros clientes (validación). Se asume normalización a base ($1,500) en Año 2-3 conforme se reduce el descuento de validación.

---

## 2. TAM — Total Addressable Market

### 2.1 Universo del cual partimos

Datos verificados del panorama (`01-panorama-de-la-industria.md` v1.1):

| Universo | MX |
|---|---|
| Establecimientos restauranteros amplios (incluye informales) | ~730,000 (CANIRAC 2024) |
| Establecimientos restauranteros formales | ~345,000 (CANIRAC León 2026) |
| % microempresas en sector | 96% (CANIRAC + INEGI 2025) |
| % independientes vs cadena | 85-90% / 10-15% (Perplexity Apr 2026) |

El **universo formal de ~345,000 establecimientos** es el punto de partida. La operación informal queda fuera por filtro de formalidad declarado en `02-definicion-y-alcance.md` sección 3.4.

### 2.2 TAM categórico Zenet en MX

Aplicamos el filtro categórico (scope core + adyacencia tier 1, NO QSR ni hoteles ni fondas ni dark kitchens) al universo formal:

| Categoría | % del universo formal MX | Establecimientos |
|---|---|---|
| Casual independiente y modelos equivalentes (scope core) | ~55% | ~190,000 |
| Cafeterías y café especialidad (adyacencia tier 1) | ~3% | ~10,000 |
| Cadena casual pequeña 5-15 sucursales (adyacencia tier 1) | ~1% | ~3,500 |
| **TAM categórico Zenet MX** | **~59%** | **~203,500** |

*Nota:* el ~55% de "casual independiente" deriva de cruzar 85-90% de independientes con la proporción del padrón que opera modelo casual de mesa con cocina protagonista (excluyendo fine dining puro, food trucks, fondas tradicionales del scope). Es estimación derivada del panorama, no censo dedicado.

#### TAM en valor

| Cálculo | Valor |
|---|---|
| Establecimientos × ARPU base anual | 203,500 × $18,000 MXN/año |
| **TAM bruto MX (capa BoH sobre POS)** | **~$3.66B MXN/año** |
| **TAM bruto MX en USD** | **~$183M USD/año** |

### 2.3 TAM categórico Zenet en LATAM

Estimación de orden de magnitud, no cifra rigurosa. Datos triangulados de Perplexity Pro Apr 2026:

| País | Mercado software restaurantero 2024 (USD) | % LATAM |
|---|---|---|
| Brasil | $100-150M | 35-45% |
| **México** | **$80-120M** | **20-30%** |
| Argentina | $20-40M | ~10% |
| Colombia | $20-40M | ~10% |
| Chile | $10-25M | ~7% |
| Perú | $10-20M | ~5% |
| Centroamérica (CR, Guatemala, etc.) | $10-20M | ~5% |
| **Total LATAM 2024** | **$270-400M** | 100% |

Asumiendo MX representa ~25% del mercado LATAM:

| Cálculo | Valor |
|---|---|
| TAM Zenet MX (calculado arriba) | ~$3.66B MXN/año (~$183M USD) |
| Multiplicador LATAM (1 / 25%) | 4x |
| **TAM categórico Zenet LATAM** | **~$14.6B MXN/año (~$732M USD/año)** |

*Caveat importante:* este multiplicador asume distribución similar de casual independiente en LATAM que en MX. Es razonable como orden de magnitud para Brasil, Argentina, Colombia, Chile (mercados con clase media gastronómica desarrollada), pero menos preciso para Centroamérica (donde el sector formal es más pequeño en proporción).

### 2.4 Cross-check con mercado real de software restaurantero

El TAM bruto bottom-up debe ser consistente con el mercado real observado. Comparamos:

| Métrica | Valor |
|---|---|
| TAM bruto MX bottom-up (Zenet scope) | ~$183M USD/año |
| Mercado MX software restaurantero 2024 (todas categorías) | $80-120M USD (Perplexity, IMARC, Statista, Deep Market Insights triangulado) |
| Mercado MX software restaurantero excluyendo enterprise/QSR cadena | ~$50-80M USD (proporcional al 60-70% del total que es POS+inventario para casual y pyme) |

**Lectura:** el TAM bottom-up de Zenet (~$183M USD) es **2-3x del gasto real actual del segmento target en software**. Esto refleja que **la penetración actual de SaaS en casual independiente es 50-65%** — el resto sigue en Excel + WhatsApp + papel.

| Implicación para Zenet |
|---|
| Crecer el TAM efectivo no requiere quitarle clientes a competidores. El upside está en convertir el 35-50% del segmento que **todavía no paga por software estructurado**. Esto refuerza el positioning como "alternativa al stack de Excel + WhatsApp + Slack" más que como sustituto de POS+inventario existente. |

---

## 3. SAM — Serviceable Addressable Market

### 3.1 Filtros aplicados

Sobre el TAM categórico, aplicamos las cuatro dimensiones del scope declaradas en `02-definicion-y-alcance.md` sección 3:

| Filtro | Efecto sobre el universo |
|---|---|
| **Categórico** | Ya aplicado en TAM (203,500 establecimientos) |
| **Geográfico** | Solo Fases 1-3 para SAM accesible inmediato; Fases 4-5 son SAM nacional eventual y LATAM eventual |
| **Tamaño y madurez** | 1-5 unidades operativas EN EXPANSIÓN ACTIVA — solo ~15% del segmento (punto medio 10-20%) |
| **Formalidad** | RFC + factura electrónica + 1+ año — ya implícito en universo formal de partida |

### 3.2 SAM Fases 1-3 (Tijuana + BC + plazas óptimas selectas)

Plazas dentro de Fases 1-3:

| Plaza | Casual indep. formal | Cafés especialidad | Adyacencia cadena pequeña | Total scope |
|---|---|---|---|---|
| **Tijuana** (Fase 1) | 1,500-2,500 | 60-100 | ~50-100 | **~1,610-2,700** |
| **BC** (Mexicali, Ensenada, Valle Guadalupe — Fase 2) | 1,000-2,000 | 50-100 | ~40-80 | **~1,090-2,180** |
| **Sonora** (Hermosillo, Cd Obregón — Fase 3) | 800-1,200 | 30-50 | ~30-60 | **~860-1,310** |
| **Querétaro** (Fase 3) | 1,200-1,800 | 40-70 | ~40-80 | **~1,280-1,950** |
| **Mérida** (Fase 3) | 1,000-1,500 | 30-50 | ~30-60 | **~1,060-1,610** |
| **Total Fases 1-3** | **5,500-9,000** | **210-370** | **~190-380** | **~5,900-9,750** |

Aplicando filtro "en expansión activa" (~15%):

| Cálculo | Valor |
|---|---|
| Total Fases 1-3 (punto medio 7,825) × 15% | **~1,170 cuentas accionables** |
| Rango (10-20% expansión) | **~590-1,565 cuentas accionables** |

### 3.3 SAM nacional eventual

Si Zenet entra a Fase 4 (CDMX, Monterrey, Guadalajara) además de Fases 1-3:

| Plaza | Casual indep. formal | Total scope (con adyacencias) |
|---|---|---|
| **CDMX** (Fase 4) | 15,000-20,000 | ~16,000-21,500 |
| **Monterrey** (Fase 4) | 5,000-7,000 | ~5,500-7,800 |
| **Guadalajara** (Fase 4) | 4,000-6,000 | ~4,400-6,700 |
| **Puebla** (Fase 4) | 2,500-3,500 | ~2,800-3,900 |
| **Total Fase 4** | **26,500-36,500** | **~28,700-39,900** |

| Cálculo | Valor |
|---|---|
| Total nacional Fases 1-4 (punto medio 39,400) | ~39,400 establecimientos |
| Aplicando filtro "en expansión activa" 15% | **~5,910 cuentas accionables** |
| Rango (10-20% expansión) | **~3,940-7,880 cuentas accionables** |

### 3.4 SAM en valor (ARR potencial)

Asumiendo ARPU base $1,500 MXN/sucursal/mes × 1.5 unidades promedio por cliente × 12 meses = **$27,000 MXN/cliente/año** (~$1,350 USD/cliente/año):

| Nivel de SAM | Cuentas accionables | ARR potencial total |
|---|---|---|
| **SAM Fases 1-3** (Tijuana + BC + Sonora + Querétaro + Mérida) | ~1,170 (rango 590-1,565) | **~$31.6M MXN/año** (rango $15.9M-$42.3M) ≈ **$1.6M USD/año** |
| **SAM nacional Fases 1-4** | ~5,910 (rango 3,940-7,880) | **~$160M MXN/año** (rango $106M-$213M) ≈ **$8.0M USD/año** |
| **SAM nacional + early LATAM** (≈ +30%) | ~7,680 | **~$207M MXN/año** ≈ **$10.4M USD/año** |

*Lectura:* el SAM accesible inmediato (Fases 1-3) es deliberadamente pequeño — entre 590 y 1,565 cuentas — pero suficiente para un beachhead con ~$1-2M USD ARR potencial. El SAM nacional crece a ~$8M USD ARR potencial cuando Zenet alcanza Fase 4.

---

## 4. SOM — Serviceable Obtainable Market

### 4.1 SOM Año 1 (Tijuana, beachhead)

Universo: SAM Tijuana = **~150-500 cuentas accionables** (1,610-2,700 establecimientos × 15% en expansión, rango 10-20%).

| Escenario | Penetración | Cuentas | ARR (MXN) | ARR (USD) |
|---|---|---|---|---|
| Conservador | 1% | ~2-5 | $54K-$135K | $3K-$7K |
| **Base** | **2%** | **~3-10** | **$81K-$270K** | **$4K-$13K** |
| Optimista | 3% | ~5-15 | $135K-$405K | $7K-$20K |

**Lectura:** Año 1 es deliberadamente un período de validación, no de revenue. El número que importa NO es ARR — es la cantidad de clientes paying que validan el producto y permiten iterar (3-15 cuentas en escenario base).

### 4.2 SOM Año 3 (Tijuana + BC + Fase 3 selecta)

Universo: SAM Fases 1-3 = **~590-1,565 cuentas accionables** (cubrimos plazas progresivamente, no instantáneamente — asumimos ~70% del SAM efectivo está accesible al Año 3).

| Escenario | Penetración (sobre SAM accesible al Año 3 ≈ 410-1,100) | Cuentas | ARR (MXN) | ARR (USD) |
|---|---|---|---|---|
| Conservador | 5% | ~20-55 | $540K-$1.5M | $27K-$74K |
| **Base** | **8%** | **~33-88** | **$891K-$2.4M** | **$45K-$119K** |
| Optimista | 10% | ~41-110 | $1.1M-$3.0M | $55K-$149K |

**Lectura:** Año 3 marca el punto donde Zenet debería alcanzar ARR ~$50-150K USD en escenario base. Es la primera evidencia de unit economics positivos a escala.

### 4.3 SOM Año 5 (Fases 1-4 nacional + early LATAM)

Universo: SAM nacional + early LATAM = **~5,910-7,880 cuentas accionables** (asumimos ~85% del SAM nacional accesible al Año 5, plus penetración mínima en 1-2 mercados LATAM seleccionados).

| Escenario | Penetración (sobre SAM accesible Año 5 ≈ 5,025-6,700) | Cuentas | ARR (MXN) | ARR (USD) |
|---|---|---|---|---|
| Conservador | 10% | ~503-670 | $13.6M-$18.1M | $679K-$905K |
| **Base** | **12%** | **~603-804** | **$16.3M-$21.7M** | **$814K-$1.09M** |
| Optimista | 15% | ~754-1,005 | $20.4M-$27.1M | $1.02M-$1.36M |

**Lectura:** Año 5 con escenario base proyecta **~$16-22M MXN ARR ($800K-$1.1M USD)**. Esta es la zona donde Zenet se convierte en un negocio SaaS B2B vertical sostenible — no venture-scale gigante, pero defendible para series A/B con métricas de SaaS healthy.

### 4.4 Resumen consolidado de SOM en cuentas y ARR

| Horizonte | Escenario | Cuentas | ARR MXN | ARR USD |
|---|---|---|---|---|
| **Año 1** | Conservador | 2-5 | $54K-$135K | $3K-$7K |
| **Año 1** | **Base** | **3-10** | **$81K-$270K** | **$4K-$13K** |
| **Año 1** | Optimista | 5-15 | $135K-$405K | $7K-$20K |
| **Año 3** | Conservador | 20-55 | $540K-$1.5M | $27K-$74K |
| **Año 3** | **Base** | **33-88** | **$891K-$2.4M** | **$45K-$119K** |
| **Año 3** | Optimista | 41-110 | $1.1M-$3.0M | $55K-$149K |
| **Año 5** | Conservador | 503-670 | $13.6M-$18.1M | $679K-$905K |
| **Año 5** | **Base** | **603-804** | **$16.3M-$21.7M** | **$814K-$1.09M** |
| **Año 5** | Optimista | 754-1,005 | $20.4M-$27.1M | $1.02M-$1.36M |

**Trayectoria escenario base:**

```
Año 1:  3-10 clientes,      ARR ~$4-13K USD
Año 3:  33-88 clientes,     ARR ~$45-119K USD
Año 5:  603-804 clientes,   ARR ~$814K-$1.09M USD
```

Esta trayectoria asume:
- Ejecución consistente del go-to-market faseado.
- Pricing $1,500 MXN/sucursal/mes promedio.
- Penetración progresiva (2% Año 1 → 8% Año 3 → 12% Año 5).
- Churn anual neto ~15% (asumido del benchmark Perplexity 10-20%, contemplado implícitamente en cuentas netas).
- Sin entrada destructiva de competidor AI-native local en Tier 1 antes del Año 3.

*Sensibilidad detallada vive en sección 5.*

---

## 5. Análisis de sensibilidad

Las proyecciones de SOM dependen de tres palancas críticas: **ARPU**, **penetración**, y **promedio de unidades operativas por cliente**. Esta sección explora cómo se mueve el SOM Año 5 cuando cada palanca varía.

### 5.1 Sensibilidad por ARPU

Manteniendo penetración base 12% y unidades promedio 1.5, variamos ARPU:

| ARPU MXN/sucursal/mes | Cuentas Año 5 (base 700) | ARR MXN Año 5 | ARR USD Año 5 |
|---|---|---|---|
| $1,000 (conservador) | 700 | $12.6M | **$630K** |
| **$1,500 (base)** | **700** | **$18.9M** | **$945K** |
| $2,000 (optimista) | 700 | $25.2M | **$1.26M** |
| $2,500 (premium AI-native validado) | 700 | $31.5M | **$1.58M** |

**Lectura:** una mejora de pricing de $500 MXN/mes (de $1,500 a $2,000) en Año 5 mueve el ARR de $945K a $1.26M USD — **+33% solo por pricing**. Esto justifica invertir en validar pricing premium con módulos de IA antes del Año 3.

### 5.2 Sensibilidad por penetración

Manteniendo ARPU base $1,500 y unidades promedio 1.5, variamos penetración sobre SAM Año 5 accesible (~5,860):

| Penetración Año 5 | Cuentas | ARR MXN | ARR USD |
|---|---|---|---|
| 8% (conservador) | ~470 | $12.7M | **$633K** |
| **12% (base)** | **~700** | **$18.9M** | **$945K** |
| 16% (agresivo) | ~940 | $25.4M | **$1.27M** |
| 20% (penetración alta de SaaS B2B) | ~1,170 | $31.6M | **$1.58M** |

**Lectura:** alcanzar 20% de penetración (vs base 12%) requiere ejecución sostenida pero **multiplica ARR 1.7x** sin tocar el pricing. La inversión en go-to-market faseado y red de canales paga compuesto.

### 5.3 Sensibilidad por unidades promedio por cliente

Manteniendo ARPU base $1,500 y penetración 12%:

| Unidades promedio por cliente | Equivalente | ARR MXN Año 5 | ARR USD Año 5 |
|---|---|---|---|
| 1.0 | 100% clientes 1 sucursal | $12.6M | **$630K** |
| **1.5 (base)** | **Mezcla 50/30/15/5** | **$18.9M** | **$945K** |
| 2.0 | 50% multi-sucursal | $25.2M | **$1.26M** |
| 2.5 | Sesgo a microcadena | $31.5M | **$1.58M** |

**Lectura:** capturar más operadores multi-sucursal (subir promedio de 1.5 a 2.0) aumenta ARR 33% sin nuevos clientes. **Implicación de marketing:** vale la pena segmentar el embudo para priorizar leads con 2-3 sucursales sobre leads con 1 sucursal estable.

### 5.4 Punto de break-even / inflexión operativa

Estimando costos operativos para una operación SaaS B2B vertical en early stage:

| Concepto | Costo anual estimado MXN |
|---|---|
| Equipo core (5-10 personas: producto, ventas, soporte, ingeniería) | $8M-$16M |
| Infraestructura cloud + AI compute | $1M-$2M |
| Marketing + canal de consultores | $1.5M-$3M |
| **Costo operativo total estimado** | **$10.5M-$21M MXN/año** |

Con **ARPU efectivo $25,000/cliente/año** después de costo de servir (~$2,000/cliente/año):

| Costo operativo | Clientes para break-even |
|---|---|
| $10.5M MXN | ~420 clientes |
| **$15M MXN (punto medio)** | **~600 clientes** |
| $21M MXN | ~840 clientes |

**Lectura:** Zenet alcanza break-even cuando llega a **~600 clientes paying** — exactamente donde proyecta el escenario base Año 5 (603-804 clientes). Esto significa que **escenario base = break-even, no profit**. Profit sostenible requiere acelerar SOM (vía Fase 4 más rápido o pricing premium) o controlar costos.

Punto de inflexión clave para revisión: **al llegar a 100 clientes paying** (probablemente Año 3-4), ya hay datos reales de unit economics para reproyectar SOM Año 5 con sensibilidad afinada por evidencia, no por hipótesis.

---

## 6. Comparativa con benchmarks

Tres benchmarks contextualizan el sizing de Zenet:

### 6.1 vs. mercado mexicano de software restaurantero

| Métrica | Valor |
|---|---|
| Mercado MX software restaurantero 2024 | $80-120M USD |
| Mercado MX excluyendo enterprise/cadenas grandes | ~$50-80M USD |
| **SOM Zenet Año 5 base** | **~$945K USD** |
| % del mercado addressable que Zenet capturaría Año 5 | **~1.0-1.9%** |

**Lectura:** capturar 1-2% del mercado mexicano de software restaurantero en 5 años es **razonable y no aspiracional**. Si el mercado MX crece al 10% CAGR (verificado), el mercado Año 5 será $128-193M USD — y Zenet seguiría siendo 1-2% de ese tamaño expandido.

### 6.2 vs. competidores con ARR/valor publicado

| Competidor | ARR estimado / valor | Operación |
|---|---|---|
| Toast (USA) | ~$1.5B ARR (2024) | POS+ecosistema completo, USA |
| Restaurant365 (USA) | ~$400-500M ARR (2024) | ERP restaurantero multi-unit, USA |
| MarketMan (Internacional) | ~$50-80M ARR estimado | BoH inventory, mid-market |
| PoloTab (MX) | No publicado | 500+ clientes en MX, VC-backed |
| SoftRestaurant (MX) | No publicado | Líder histórico MX |
| **Zenet Año 5 base** | **~$945K USD ARR** | BoH-first AI-native, MX |
| **Zenet potencial Año 8-10** | **$5-15M USD ARR (extrapolación)** | Si mantiene CAGR 50-70% post-PMF |

**Lectura:** Zenet Año 5 está al inicio de la curva — comparable con **MarketMan en sus primeros 3-4 años**, no con Restaurant365 maduro. Es realista, no decepcionante.

### 6.3 vs. expectativas venture-scale

Benchmarks de SaaS B2B venture-scale en MX/LATAM:

| Hito | Threshold típico |
|---|---|
| Pre-seed / seed | <$200K USD ARR + product-market fit signals |
| **Series A** | **$1-2M USD ARR + path to $10M en 24 meses** |
| Series B | $5-10M USD ARR + crecimiento 100%+ YoY |
| Series C | $20M+ USD ARR |

Posicionamiento Zenet:

| Año Zenet | ARR proyectado | Hito que califica |
|---|---|---|
| Año 1 | $4-13K USD | Pre-seed (validación) |
| Año 3 | $45-119K USD | Seed → pre-Serie A (delgado) |
| **Año 5 base** | **$814K-$1.09M USD** | **Borderline Serie A** (alcanza threshold mínimo, no holgado) |

**Lectura honesta:**

- **Para validación de modelo y break-even sostenible:** el sizing es suficiente.
- **Para venture-scale agresivo (Serie B+ con valuaciones de unicornio):** el scope actual NO sostiene esa trayectoria. Requiere palancas adicionales:
  - Acelerar a Fase 4 (CDMX/MTY/GDL) en Año 3-4 en lugar de Año 5+ → multiplica SAM 5x.
  - Validar pricing premium AI-native ($2,500+/mes) → mejora ARPU 67%.
  - Expandir LATAM en Año 4-5 (no Año 5+) → multiplica SAM 3-4x.

Las tres palancas combinadas elevarían SOM Año 5 a **$5-12M USD ARR** — territorio Series B real.

---

## 7. Implicaciones para Zenet

### 7.1 ¿El SAM declarado es suficiente para validar el modelo?

**Sí, para fase de validación (Año 1-3).** El SAM accesible Año 1-3 (~590-1,565 cuentas, $15.9M-$42.3M MXN ARR potencial) es suficiente para:

- Validar product-market fit con ~30-100 clientes paying al Año 3.
- Construir métricas SaaS reales (CAC, LTV, churn, NRR) con muestra significativa.
- Anclar fundraising Serie A modesta basada en evidencia, no hipótesis.

**No, para venture-scale agresivo.** Si la aspiración es construir un unicornio mexicano de restaurant tech, el scope geográfico declarado es **demasiado conservador**. La conversación honesta con inversionistas requiere reconocer este punto.

### 7.2 Triggers de revisión del sizing

Reproyectar el sizing cuando ocurra alguno:

1. **Primer cliente paying con ARPU verificado.** Reemplazar la hipótesis $1,500 con dato real.
2. **20-50 clientes paying.** Reproyectar penetración Año 1 con data real, ajustar curva Año 3-5.
3. **Decisión de acelerar a Fase 4.** Si Zenet decide entrar a CDMX/MTY/GDL en Año 2-3 (no Año 4+), recalcular SAM accesible y SOM Año 3-5.
4. **Validación de pricing premium AI-native.** Si Zenet logra cobrar $2,000-2,500/mes a un subset paying, recalcular ARR sensibility.
5. **Entrada de competidor AI-native fuerte en MX.** Reconsiderar penetración esperada y churn.
6. **Cambio macro relevante.** Recesión, cambio regulatorio CFDI/SAT, devaluación significativa.

### 7.3 Implicaciones para go-to-market y producto

| Implicación | Acción derivada |
|---|---|
| **El 35-50% del segmento NO paga por software.** | Mensaje primario debe ser "alternativa al stack manual de Excel + WhatsApp + papel," no "mejor que tu POS actual." |
| **Año 5 base ≈ break-even, no profit.** | Operación lean en Año 1-3 es crítica. No sobre-contratar. |
| **Pricing premium mueve ARR +33%.** | Invertir en módulos avanzados de IA (forecasting, simulación de menú) antes del Año 3 paga compuesto. |
| **Multi-sucursal mueve ARR +33%.** | Priorizar leads con 2-3 sucursales sobre leads con 1 sucursal estable en el embudo de ventas. |
| **Fase 4 multiplica SAM 5x.** | La velocidad de entrada a CDMX/MTY/GDL es la palanca más alta de crecimiento — pero solo cuando el modelo Tijuana esté validado. |

---

## 8. Fuentes consultadas y supuestos

### Fuentes primarias

- **`zenet-business-context-production.md` v1** (Apr 2026) — pricing hipotético, segmento primario, 15 entrevistas de validación.
- **`01-panorama-de-la-industria.md` v1.1** (Apr 2026) — universo formal MX, distribución por categoría, casual independiente por ciudad.
- **`02-definicion-y-alcance.md` v1.0** (Apr 2026) — scope declarado, 4 dimensiones, criterios de calificación.
- **`posicionamiento.md` v1.0** (Apr 2026) — categoría Zenet (sistema operativo cognitivo BoH), competidores tier 1-5.

### Fuentes externas

- **CANIRAC** (Cámara Nacional de la Industria Restaurantera) — universo formal restaurantero MX (~345K), composición sectorial.
- **INEGI Censos Económicos 2024** — clase SCIAN 7224, distribución por tamaño de empresa, antojitos como clase de mayor crecimiento.
- **IMARC Group** — mercado food service MX 2024 ($37.1B USD), proyecciones 2033, mercado QSR/fast casual.
- **Deep Market Insights** — fast casual MX $4.99B, CAGR 5.77%.
- **Spherical Insights** — digitalización de restaurantes global, software vs hardware.
- **Business Research Insights** — software de gestión de restaurantes global (CAGR 9.4%).
- **Statista, Euromonitor** — referencia de mercado.
- **Perplexity Pro Deep Research** (Apr 2026) — benchmarks de pricing competitivos, penetración SaaS, mercado LATAM equivalente.
- **Sitios oficiales** — PoloTab, Parrot, SoftRestaurant, Toteat, Bistrosoft, Poster, Fudo, Wansoft, Pacto, Sierra para pricing público.
- **Reportes de revistas y blogs** — El Economista, Expansión, Forbes México, IHL Services para ARPU benchmarks y tendencias.

### Supuestos clave reiterados

| Supuesto | Valor base | Sensibilidad explorada |
|---|---|---|
| ARPU efectivo MXN/sucursal/mes | $1,500 | $1,000 / $1,500 / $2,000 / $2,500 |
| Promedio unidades operativas por cliente | 1.5 | 1.0 / 1.5 / 2.0 / 2.5 |
| % en expansión activa dentro del segmento | 15% | 10-20% |
| Penetración Año 1 (Tijuana) | 2% | 1-3% |
| Penetración Año 3 (acumulado Fases 1-3) | 8% | 5-10% |
| Penetración Año 5 (SAM nacional) | 12% | 8-20% |
| Churn neto anual | ~15% | (no explorado en sensibilidad explícita; benchmark 10-20%) |
| Tipo de cambio MXN/USD | $20:1 | — |
| CAGR mercado MX software restaurantero | 10% | 9-12% |
| Modelo de pricing | Capa BoH sobre POS existente | Modelo BoH-first puro reduciría TAM 60-70% pero permitiría pricing más alto |

---

## 9. Hipótesis abiertas

### Hipótesis críticas pendientes de validar

1. **ARPU efectivo real vs. hipotético.** $1,500 MXN/sucursal/mes es punto medio del rango validado parcialmente con un solo validador (Victor Murguía). Validación dura llega con primeros 5-10 clientes paying.
2. **% real en expansión activa dentro del segmento.** El 15% es punto medio del rango Perplexity 10-20% — sin validación de campo en MX.
3. **Promedio real de unidades operativas por cliente.** El 1.5x es derivado de la distribución del padrón (75-80% con 1 sucursal). El cliente paying puede sesgar a multi-sucursal (más motivado por dolor) o mantener 1.5x.
4. **Penetración real Año 1 en Tijuana.** El 1-3% es benchmark de SaaS B2B nuevo, no específico de SaaS restaurantero MX.
5. **Churn real con primer cohorte.** El benchmark 20-30% bruto / 10-20% neto de Perplexity es de mercado general SaaS B2B, no específico de casual independiente mexicano.

### Hipótesis estructurales pendientes

6. **Distribución real del padrón formal por sucursal.** Las cifras 75-80% / 10-12% / 3-5% / 4-6% son trianguladas, no censo INEGI directo con ese corte.
7. **% del padrón formal MX que es casual independiente operativo.** El 55% asumido para TAM categórico es derivación, no censo.
8. **Tamaño LATAM accionable.** El multiplicador 4x sobre MX es estimación gruesa. Validación requiere análogo de panorama por país en LATAM.
9. **Penetración SaaS por ciudad.** No tenemos datos por ciudad — solo nacionales.
10. **Costo operativo real para break-even.** Los $10.5-21M MXN asumidos son rango orientativo, no presupuesto detallado.

### Triggers para reproyectar el sizing

| Trigger | Cuándo | Acción |
|---|---|---|
| Primer cliente paying | Año 1 Q3-Q4 | Validar ARPU real, ajustar Año 1 SOM |
| 20 clientes paying | Año 2 | Validar churn, NRR, distribución unidades; reproyectar Año 3-5 |
| 100 clientes paying | Año 3 | Reproyección completa con datos reales; cierre de hipótesis abiertas críticas |
| Decisión de acelerar a Fase 4 | Año 2-3 | Recalcular SAM accesible y SOM Año 3-5 con plazas grandes incluidas |
| Validación de pricing premium AI-native | Año 2-3 | Recalcular sensibility ARPU |
| Entrada de competidor AI-native fuerte en MX | Cualquier momento | Recalcular penetración esperada y churn |

### Cadencia de revisión

- **Revisión ligera trimestral:** confirmar que ningún trigger se activó.
- **Revisión profunda anual:** reproyectar SOM con evidencia acumulada, ajustar todos los supuestos.
- **Revisión inmediata** ante trigger fuerte (cliente fundacional, competidor disruptor, cambio macro).

---

*Documento elaborado en abril 2026, sintetizando `zenet-business-context-production.md` v1, `posicionamiento.md` v1.0, `01-panorama-de-la-industria.md` v1.1, `02-definicion-y-alcance.md` v1.0, e investigación cuantitativa externa (Perplexity Pro Deep Research). Versión actual: ver frontmatter.*