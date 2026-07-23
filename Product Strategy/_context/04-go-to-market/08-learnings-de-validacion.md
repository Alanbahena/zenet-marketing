---
name: Bitácora de learnings de validación — Fase A
description: Registro durable y estructurado de lo que enseña cada sesión de validación con design partners (Fase A). Una entrada por sesión — contexto · observaciones (dicho vs hecho) · scores H1-H6 + ICP/DP fit · learnings estratégicos (marcados N=1) · implicaciones (qué feeds a Product Strategy vs repo de producción vs VoC) · decisión · evidencia. Entrada #1 = Carlos / Alma Verde (demo 14-jul-2026). Disciplina anti-autoengaño: todo es DIRECCIÓN a bajo N, no verdad validada — alimenta VP/segmentación/MVP scope solo cuando el patrón se confirma con 2-3+ sesiones. La lista granular de features/UX es evidencia aquí, pero el build vive en el repo de producción.
type: product-strategy
last_updated: 2026-07-16
status: active
version: 0.1
owner: Alan Bahena
---

# Bitácora de learnings de validación — Fase A

> Lo que aprendemos de cada conversación/demo con design partners, ordenado y durable. **No reescribe la VP ni la segmentación** — las **alimenta** cuando un patrón se confirma con varias sesiones. A bajo N todo es hipótesis.

---

## Cómo se usa

- **Una entrada por sesión** (misma plantilla, ver abajo).
- **Todo marcado N=1** hasta validar con 2-3+ operadores. Un learning de una sola sesión es **dirección, no verdad**.
- **La frontera de captura:**
  - **Aquí:** learnings estratégicos + la evidencia (para no perderla y para que los patrones salten con el tiempo).
  - **Repo de producción:** la lista granular de features + cambios de UX (el build).
  - **VoC library** (`Market Research/02-customer-research/07-voice-of-customer`): las citas de oro.
- **Disciplina anti-autoengaño:** un champion muy entusiasta que te **redirige** el producto es, a la vez, buena señal (compromiso) y bandera amarilla (tu cosa actual aún no es la suya). Registra ambas.

**Plantilla de entrada:** 1) Contexto · 2) Observaciones (dicho vs hecho) · 3) Scores · 4) Learnings estratégicos (N=1) · 5) Implicaciones (qué feeds a dónde) · 6) Decisión / siguiente paso · 7) Evidencia.

---

## Sesión #1 · Carlos — Alma Verde (demo presencial · 14-jul-2026)

### 1. Contexto

- **Prospecto:** Carlos, **gerente** de Alma Verde (casual independiente formal · +5 restaurantes · 3 ciudades).
- **Rol:** gerente/adopter — **NO el payer** (esa es Alma, la dueña) · mismo account = multi-thread.
- **Cómo se llegó:** warm (ya le había mostrado demos + le dio una entrevista hace +1 año) → re-enganche por WhatsApp (Ola 1) → **demo presencial** en su sucursal, 9:30am.
- **Instrumento:** run-sheet Fase A (Mom Test → cuantificar el costo → demo de la app en vivo → ask).

### 2. Observaciones (dicho vs hecho)

**Cómo opera Alma Verde HOY (su mundo):**
- Procesos rápidos · **checklists para todos los procesos** · ya están estandarizando sus propios procesos.
- **Recetas estandarizadas · todo documentado** (tienen procesos documentados para todo).
- Inventarios a mano cada día (por las tardes) · protocolos diarios (chequeo de salsas, bebidas, pan, etc.).
- Las compras las hace un **departamento de compras**.
- Usan **Excel** para inventarios y recetas · han integrado **AI para generar templates** de sus documentos.
- Se comunican con todo el equipo por **Google Chat** (grupos donde está todo el equipo · toda la info pasa por ahí).
- **Observación de Alan:** sus documentos siguen viviendo en **canales múltiples** (fragmentados), no en un solo lugar.

**Dolores reales (los que resonaron):**
- **Capacitación de empleados = dolor fuerte.** Antes tenían un centro de capacitación interno; desapareció. Es complicado capacitar siempre, más aún con procesos nuevos. Todo está documentado, pero capacitar sigue siendo complicado.
- **Personal / horarios:** cuando los empleados cambian de horario o no pueden estar, le come mucho tiempo y frustración.
- **Mantenimiento** de máquinas/estructura (ej. una empleada le mandó un **video del ruido raro** de la máquina de expresos · la sucursal de cacho llegó con mal mantenimiento).
- **Permisos de gobierno:** complicado tener en mente cuándo renovar + los requisitos.

**Hipódromo → cacho:** lo que más se complicó fue el **mantenimiento** de la sucursal (máquinas/estructura, hubo que invertir tiempo/energía/dinero). En cambio, continuar con **calidad/procesos/proveedores NO le costó** — porque todo estaba estandarizado. De hecho, en su experiencia, las cosas se hacían **mejor** en cacho.

**Reacción al demo:**
- **Rechazó el ángulo POS:** quiere que Zenet **solo se encargue del back of house**.
- Le interesó el **concepto de AI + chat** · que sea **fácil de usar y entender**.
- **NO** se mostró muy interesado en las features de inventario/recetas/unidades (ya las tiene).
- **Sí** le interesó **automatizar sus procesos/protocolos** del back operativo.
- Quiere poder hacerlo **desde su tablet** · **app móvil** para el equipo.

**Lo que DIJO (síntesis):** sus pains **no están** en lo que ya ofrecen los POS (inventario, recetas, unidades) · su interés está en los **protocolos personalizados de Alma Verde** y en **automatizar** esos procesos del back · interesado en AI/chat/facilidad · *"sus pains van más a los procesos y protocolos personales"*.

**Lo que HIZO (revelado):**
- Dedicó su tiempo (demo presencial).
- **Abrió la puerta a las recetas — e incluso a TODOS los documentos y procesos** de Alma Verde.
- **Ofreció presentarlo con Alma** (la dueña/payer) **y con otros departamentos.**
- Confirmó que **se suma a construir** algo juntos · propuso **follow-up en ~1 mes** para validar sus observaciones.
- Confirmó que Zenet **es de valor SI** se agregan los protocolos + la automatización de procesos internos del back, y **sin relación con un POS**.

### 3. Scores (N=1)

| Hipótesis | Read | Evidencia |
|---|---|---|
| **H1** · los pains resuenan | 🟡 | Resonaron pains **reales** (capacitación, protocolos, mantenimiento) pero **no los hipotetizados** (inventario/estandarización) — te redirigió |
| **H2** · el valor conecta / "aha" | 🟡 | El core del demo (estandarización) no prendió (ya lo tiene) · sí conectó el concepto **AI/chat + automatizar sus procesos** |
| **H3** · distinto a su forma actual | 🟡 | Ve Zenet ≠ POS (coexistencia aterrizó) · pero el producto *actual* aún no es "mejor" para SU dolor |
| **H4** · compromiso revelado | 🟢 | Abrió **todos** los docs · **ofreció intro a Alma + departamentos** · construir juntos · follow-up 1 mes |
| **H6** · pozo de valor | 🟡 | *"Sería de gran valor SI se agregan las features"* · **costos abiertos**, sin cuantificar |

**Fit de Alma Verde como cuenta:** ICP **🟢** · Design Partner **🟢** → **perseguir** (candidato a Fase B).

**Resultado global:** **mixto pero muy productivo** — se ganó el design partner (H4 🟢 + puerta al payer abierta) **y** el partner redirigió el producto (H1-H3 pedían refinamiento). Salida clásica y valiosa de una sesión de validación.

### 4. Learnings estratégicos ⚠️ *(N=1 — dirección, no verdad)*

1. **La segmentación se afina.** El operador que más se prende **no** es el del "caos / operación rota" — es el que **YA tiene procesos documentados pero fragmentados** (Excel + Google Chat, manual). Hipótesis de Fase 1: apuntar primero a ese segmento; los que aún no tienen procesos = fases posteriores.
2. **Principio de producto: "Zenet extrae, nunca propone."** Para el ICP ya-documentado, Zenet **ingiere/organiza/automatiza** los procesos DEL operador · puede encontrar mejoras, pero **no propone procesos** (por ahora). Muy on-brand (*"aumentar, no reemplazar"*).
3. **El dolor real ≠ el hipotetizado.** Dolor #1 = **empleados/capacitación + protocolos personalizados + procesos internos + mantenimiento.** NO inventario/recetas/costos (features tipo-POS).
4. **Móvil/tablet es clave** (no solo web). El equipo se comunica por Google Chat · se necesita una **app accesible a todo el equipo** (staff/chefs) + **tablero admin** (dueño/gerentes).
5. **Coexistencia confirmada.** *"No quiero que sea un POS"* — el framing de **capa sobre el POS** aterriza limpio.

> ⚠️ **Riesgo a validar:** Alma Verde es un operador **sofisticado** (ya estandarizado · departamento de compras · tenían centro de capacitación · usan AI para templates). Eso está **por encima** del beachhead que la research definió (*"2-3 sucursales donde la operación se rompió"* — operadores que **necesitan** estandarizar). Posible **outlier**. Estos 5 learnings son **hipótesis de sesión-1** → validar con **2-3 operadores más (Ola 2)** antes de pivotear el ICP + el build.

### 5. Implicaciones — qué feeds a dónde *(cuando valide con 2-3+)*

| Learning | A dónde alimenta |
|---|---|
| Segmentación afinada (ya-documentados-fragmentados) | `Market Research/01-industry-and-market/04-segmentacion-de-mercado` + ICP profile |
| "Extraer no proponer" + dolor real (protocolos > inventario) | Product Strategy VP (`01-propuesta-de-valor`) + MVP scope (`02-features-y-scope`) |
| Móvil/tablet + tablero admin | MVP scope (surface de entrega · revisar E4 WhatsApp) + **repo de producción** |
| Lista de features + cambios de UX | **Repo de producción** (el build · aparte) |
| Cita de oro (POS) | **VoC library** (`02-customer-research/07-voice-of-customer`) |

### 6. Decisión / siguiente paso

- **Alma Verde = design partner #1** (soft-commit). **Plan:** construir el core que pidió → volver en ~1 mes con avances → **Carlos introduce a Alma + departamentos**.
- **Disciplina de ejecución:** construir el **core cross-cutting** (protocolos / extraer-no-proponer / móvil · alta convicción) **en paralelo** a **validar el redirect con Ola 2** (hipótesis afiladas). **NO** construir la lista completa de Carlos a ciegas (N=1).

### 7. Evidencia — lo que Carlos pidió *(input de la sesión · el build vive en el repo de producción)*

**Áreas / features que mencionó:**
- Permisos de gobierno
- Inventario
- Estructura operativa
- Manual de cómo solicitar factura a proveedor
- Recetas
- Checklist mañanera
- Checklist de mantenimiento
- Automatizar temas visuales
- Protocolos: apertura · clausura · pan · turnos
- Protocolos de compras y órdenes
- Capacitación
- Atención a cliente
- *(Referencia cultural que citó: el libro "Hospitalidad irracional" / Unreasonable Hospitality — Will Guidara)*

**Mejoras a la app actual (observadas durante el demo en vivo):**
- Cambiar los parámetros de **onboarding** (más enfocados a la segmentación).
- Formato para configurar la **estructura completa** (sucursales / CEDIS).
- Repensar la sección **"estandarización"** — quizá no se llama así · renombrar subsecciones · quizá "clasificación" ya no se necesita · en catálogos, agregar la opción de **subir documento** · el agente **no debe proponer** por ahora.
- Sección para la **estructura operativa**.
- **Tablero administrativo** (dueño + administradores) + **app móvil** (staff + chefs).
- Sección de **mantenimiento** por sucursal.
- Que los restaurantes puedan **correr sus propios workflows/procesos** (protocolo de cierre, apertura, pan, checklist mañanero).
- Sección de **permisos de gobierno**.
- Preparar la versión **tablet + móvil web**.

**Citas de oro (VoC · del apunte de la sesión, paráfrasis cercana — no grabación literal):**
- 🌟 *"No quiero que sea un POS, quiero que solo se encargue del back of house."*
- *"Todo lo tenemos documentado."* (dicho con orgullo · refuerza el "yo SOY el sistema" · el matiz es que ese documentado vive fragmentado)

---

*Entrada #1 · fuentes: apuntes de sesión de Alan (`Sesiones-Fase-A/Carlos-AlmaVerde-Apuntes-Debrief`) + debrief 16-jul. Trigger de acción sobre estos learnings: confirmarlos con Ola 2 (2-3 operadores) antes de alimentar VP/segmentación/MVP scope. Próxima entrada: siguiente sesión de validación.*
