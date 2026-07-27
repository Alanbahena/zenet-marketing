---
name: Bitácora semanal — Fase A
description: Log corrido de las retros semanales de la Fase A (reclutamiento/validación de design partners). Una entrada por semana, la más reciente arriba, con formato fijo (foco previo · logros · qué funcionó · learnings · decisiones · scorecard H1-H6 · foco próxima semana). Carril: Notion ejecuta (Pipeline/tareas/Scorecard vivos) · esta bitácora recuerda (registro histórico agent-readable). Los learnings grandes gradúan a los docs canónicos (ICP/segmentación · learnings de validación `08` · decisions log de CLAUDE.md §4).
type: product-strategy
last_updated: 2026-07-26
status: active
version: 0.1
owner: Alan Bahena
---

# Bitácora semanal — Fase A

> **Qué es:** el registro de las retros semanales de la Fase A. Una entrada por semana, **la más reciente arriba**.
>
> **Carril (por qué vive en el repo y no en Notion):** Notion **ejecuta** — Pipeline, tareas y Scorecard, vivos, cambian a diario. Esta bitácora **recuerda** — registro histórico, versionado en git, agent-readable (cualquier sesión nueva hereda el contexto de un solo archivo). El *foco de la próxima semana* se vuelve tareas en Notion; el *Scorecard* vive en el cockpit. Aquí queda la narrativa.
>
> **Graduación:** cuando un learning es grande y canónico, gradúa a su hogar durable — docs de ICP/segmentación, `08-learnings-de-validacion.md`, o el decisions log de CLAUDE.md §4. La bitácora lo captura la semana que pasa; el doc canónico lo conserva para siempre.
>
> **Un solo archivo, log corrido.** Válvula de escape si algún día se alarga (cierre de fase): mover entradas viejas a `_archive/` con prefijo de fecha (convención del workspace). No antes de tiempo.

> **Plantilla de entrada** (copia y pega arriba de la más reciente):
> ```
> ## Semana DD–DD mmm — "tema de la semana"
> ▸ Foco que traíamos: ✅/🟡/❌ por punto (dicho vs hecho)
> ▸ 🏆 Logros
> ▸ ✅ Qué funcionó
> ▸ 💡 Learnings
> ▸ 🔀 Decisiones
> ▸ 📊 Scorecard H1–H6
> ▸ 🎯 Foco próxima semana
> ```

---

## Semana 20–26 jul — "Landing v2 a producción + Ola 2 arranca"

**▸ Foco que traíamos** (retro 13–19): Landing v2 ✅ (en producción) · Ola 2 🟡 (arrancó — Miguel enviado; San Miguel/Diego pendientes).

**▸ 🏆 Logros**
- **Landing v2 EN VIVO** (`zenetapp.com` · tag `v2.0`) — acento teal · copy v2 · animación "Cómo funciona" (tablero → núcleo Zenet) · sección nueva "En acción" · §3 en 3 movimientos · QA + OG/favicon + docs sync. Nacida de los learnings de Carlos.
- **Ola 2 arrancó** — mensaje a Miguel Bahena (Madre · fine-dining Ensenada) vía intro warm de Victor (texto + voice note + link).
- **Puerta CANIRAC abierta** — Pedro cumplió como aliado de canal: reunión lun 28-jul con integrante de la mesa de jóvenes.
- Sección El fundador refinada (hilo de calidad · candado "sistema" · cierre inversión/equipo).

**▸ ✅ Qué funcionó**
- Iterar en `lab/` con checkpoints visuales (color · stepper · animación A/B) antes de tocar la página.
- Ángulo por perfil (fine-dining → "libera energía para la experiencia y la calidad") en el mensaje a Miguel.
- Voice note para la propuesta de valor (fundador → chef · cultura MX).
- Pedro entregando (valida la tesis contador → aliado del channel strategy).

**▸ 💡 Learnings**
- **★ Primer framework de segmentación — 3 perfiles de ICP** (el eje = nivel de estandarización que YA tienen):
  - **(1) Estandarizado / gran producción** (Alma Verde) → Zenet **extiende / automatiza / mantiene**. Puede pagar · multi-sucursal = más ACV · pero su necesidad del valor "crea el sistema" es baja.
  - **(2) Alta cocina / gourmet** (Miguel Bahena) → Zenet **preserva calidad y consistencia**. Peer-proof brutal · pero pocas sucursales · puede que no quiera "escalar".
  - **(3) Independiente sin estandarizar** (*no probado*) → Zenet **construye el sistema desde cero** (estandarización = punto de entrada · diferenciador #4 puro). El que más lo necesita · pero menos docs de dónde extraer · quizá menos capaz de pagar.
  - **Implicación:** cada perfil quiere un trabajo distinto → no se puede clavar VP/demo/pricing para los 3 a la vez pre-PMF. **Banderas:** (a) no sobre-indexar en Alma Verde (N=1, probable outlier); (b) el **perfil 3 es el que más urge probar** — único sin tocar + más cercano al beachhead declarado + al VoC "el verdadero incumbente = no system / cuaderno + cabeza". *Gradúa a docs de ICP/segmentación como hipótesis abierta.*
- **Onboarding = demo = clasificador de ICP** (son la misma idea): un análisis de "nivel de estandarización inicial" a partir de los docs del operador sirve de (a) demo "tus números" (estrategia ganadora del customer research), (b) instrumento que clasifica el perfil, (c) encarna "extraer, no proponer". *Validar primero en modo mago-de-Oz (manual) antes de construir la ruta.* → producto (backlog).
- **Postura de ventas más relajada / menos técnica** — alineada con el canon de voz (lenguaje del operador · sin tech · sin hype). NO leerla del silencio de Miguel (3 días + fin de semana ≠ señal).
- Diferenciación sigue siendo el reto #1 (categoría + profundidad + confianza, no features) — movió todo el rediseño v2.

**▸ 🔀 Decisiones**
- Acento de marca **terracota → teal** (diferenciación vs el food-tech · canónico en `03-visual-identity/02-color` v2.0).
- §4 de la landing **sin animación** (2 piezas animadas bastan).
- Las **retros viven en el repo** (esta bitácora) · Notion queda como dashboard vivo.

**▸ 📊 Scorecard H1–H6**
- Sin nueva data de validación esta semana (Miguel en espera · CANIRAC es el lunes · no hubo demo nueva). Reads siguen post-Carlos. Semana de **construcción** (landing v2) + **activación** (Ola 2 + CANIRAC), no de validación — y estaba bien: era el gate para poder compartir con Miguel.

**▸ 🎯 Foco próxima semana (27 jul–2 ago)**
1. **Reunión CANIRAC lunes** (diseñar plan · ejecutar) — la grande.
2. **Probar un perfil 3** (San Miguel vía Ana) — el beachhead casual, contrapeso al sesgo high-end.
3. **Escribir al mentor potencial** (LinkedIn · reconectar · ask calibrado, no "sé mi mentor" en frío).
4. **Vigilar a Miguel** (nudge suave si calla ~1 semana).

*▸ Pipeline: 14 prospectos · 1 soft-commit (Carlos/Alma Verde) · 2 conversación (Victor, Pedro) · 2 enviados (Alma, Miguel Bahena) + puerta CANIRAC · resto por enviar.*

---

## Semana 13–19 jul — "Kit de validación + primera demo (Carlos)"

**▸ Foco que traíamos:** armar el kit de validación + ejecutar la primera demo presencial (Carlos / Alma Verde).

**▸ 🏆 Logros**
- **Kit de validación completo** — guión Mom Test · criterios ICP/DP · template de debrief · docs para iPad (PDF/Word).
- **Primer design partner** — Carlos (Alma Verde) soft-commit tras la demo del 14-jul.
- Debrief procesado → Notion (Pipeline) + bitácora de learnings (`08`) + VoC (V-035 "no quiero que sea un POS").
- Victor activado como conector (pasó a Miguel Bahena / Madre) + template #6 (intro por conector).

**▸ ✅ Qué funcionó**
- Prep del run-sheet antes de la demo.
- Mom Test — escuchar > pitchear.
- Warm-first (re-enganche con memoria específica compartida).

**▸ 💡 Learnings**
- **Redirect de producto (N=1 · Carlos):** su dolor #1 NO era inventario/recetas (Alma Verde ya estandarizado) sino **protocolos personalizados + gente/capacitación + mantenimiento + permisos** · "extraer, no proponer" · móvil · rechazó el ángulo POS.
- **Mercado ruidoso:** los ads de IG/FB de "proyectos con IA para restaurantes" = POS + integraciones IA menores (NO es Zenet = AI-native BoH) → la **diferenciación es el reto de comunicación #1**.
- **Semilla del framework de segmentación:** "Alma Verde quizá ya totalmente estandarizado → falta oír al verdadero ICP casual + a la alta cocina" (madura en la retro 20–26 a los **3 perfiles**).

**▸ 🔀 Decisiones**
- Frame anti-POS reforzado ("que solo se encargue del back").
- Siguiente sprint = **Landing v2** (comunicar la diferenciación por contraste) + **Ola 2**.

**▸ 📊 Scorecard H1–H6**
- Carlos: **H4 🟢** (compromiso revelado fuerte — abrió todos sus docs + ofreció intros a Alma y otros departamentos) · **H1/H2/H3 🟡** (pains reales pero distintos a los hipotetizados) · **H6 🟡** (costos abiertos). N=1.

**▸ 🎯 Foco próxima semana (20-jul):** Landing v2 + Ola 2.

---

*Última actualización: 2026-07-26. v0.1 · 2 entradas (13–19 + 20–26 jul).*
