---
name: Bitácora semanal — Fase A
description: Log corrido de las retros semanales de la Fase A (reclutamiento/validación de design partners). Una entrada por semana, la más reciente arriba, con formato fijo (foco previo · logros · qué funcionó · learnings · decisiones · scorecard H1-H6 · foco próxima semana). Carril: Notion ejecuta (Pipeline/tareas/Scorecard vivos) · esta bitácora recuerda (registro histórico agent-readable). Los learnings grandes gradúan a los docs canónicos (ICP/segmentación · learnings de validación `08` · decisions log de CLAUDE.md §4).
type: product-strategy
last_updated: 2026-08-03
status: active
version: 0.2
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

## Semana 27 jul–2 ago — "la semana que se pensó, no se habló"

**▸ Foco que traíamos** (retro 20–26): CANIRAC ✅ · perfil 3 / San Miguel ❌ · mentor ❌ · nudge a Miguel ✅ → **2 de 4**.

**▸ 🏆 Logros**
- **Café CANIRAC ejecutado** (lun 28 · Alfonso Arballo · puente de Pedro) con run-sheet propio (`_templates/guion-reunion-canirac-fase-a.md` v0.1) → debrief completo en `08` v0.2 (Sesión #2).
- **`03-oferta-y-pricing/06-argumentacion-de-valor-y-precio.md` v0.1** — el activo más grande de la semana. Traduce las decisiones canónicas al lenguaje económico del operador sin inventar cifras: mapa de gastos línea por línea · diagnóstico **costo teórico vs real** como primer entregable defendible · **el punto porcentual** como unidad de conversación · precio bilateral · **8 anti-claims** · HV-01..05.
- **Nudge a Miguel Bahena** enviado (30-jul · sin respuesta).
- **Tabla nueva en Notion `🤝 Red estratégica`** (mentores · inversionistas · aliados), separada del Pipeline de validación, con la regla de reparto escrita en el cockpit.
- **3 contactos fichados:** Juanjo Gutiérrez (**= el "mentor potencial" que llevaba semanas sin nombre**) · Antonio López Montañez · Alfonso Arellano (puerta a Culinary Art School TJ).
- Commit `a56b8b5`.

**▸ ✅ Qué funcionó**
- **Escribir el guión antes de la sesión.** Segunda vez que el patrón rinde (la 1ª fue Carlos). Ya es método, no suerte.
- **Pedro entregó otra vez** — la tesis *contador → aliado de canal* lleva dos cumplimientos seguidos.
- **La disciplina "entusiasmo ≠ validación" hizo su trabajo:** se detectó que **no aterrizó ningún ask**, en lugar de contar el café como puerta abierta. Un año atrás esto se hubiera guardado como "gran reunión".
- *(Queda pendiente de esta retro: la lectura en vivo del guión — ¿sirvió durante el café o se soltó a los cinco minutos?)*

**▸ 💡 Learnings**
1. **★ EL FRENO NO ERA AGENDA — ERA EXPOSICIÓN.** Avanzó **todo lo que se hace solo** (el doc, el debrief, las tablas) y se cayó **todo lo que implicaba mostrarle Zenet a alguien**. San Miguel y Juanjo no se atoraron por tiempo: se atoraron porque escribirle a alguien significa exponer algo que no se siente listo. Nombrado, se puede diseñar alrededor.
   - ⚠️ **La trampa:** *"pulo la propuesta de valor y luego hablo con operadores"* es un círculo que no cierra — la VP no se valida escribiéndola mejor, se valida en conversaciones, y mientras tanto la única fuente que podría decir si está lista queda apagada.
   - ✅ **La salida precisa (no es fuerza de voluntad):** **H1** (los pains resuenan) y **H6** (el pozo de valor) **no necesitan VP pulida** — el Mom Test explora SU mundo, 80/20 escuchando. **La mitad del scorecard se puede mover sin enseñar nada.** H2 y H3 sí la necesitan. Dos carriles, no una fila.
2. **La VP no aterriza — 2ª señal independiente** (Carlos 14-jul + Alfonso 28-jul) → **ya no es N=1**. Dos capas con remedios distintos: **(a) comunicación** (el mensaje) y **(b) sustancia** (el alcance de Fase 1, que Alan concede en parte). El doc 06 responde a (b); (a) se ataca la semana que entra.
3. **Objeción nueva y distinta: *"otro software más"*.** Alfonso: *"quizá sea complicado lograr que un restaurante pague por otro software más."* Es **vitamina vs painkiller = H6 directo**, y no es lo mismo que la objeción #1: aquélla dice *"no entiendo qué resuelve"*, ésta dice *"aunque lo entienda, la categoría ya está saturada de cosas que se pagan"*. **No se resuelve con mejor copy — se resuelve con el operador correcto.** Quien siente el dolor no compra "otro software": compra la salida de su problema.
4. **CANIRAC = canal post-PMF, no de Fase A.** Cámara política y burocrática · membresía ~$3,000 MXN/año · empresas grandes ahí por imagen. Confirma con detalle de campo el Tier 2 institucional del channel strategy (awareness, no revenue). Ajuste honesto: en la retro anterior iba como *"la grande"* de la semana. No lo era.
5. **Convergencia del framework de 3 perfiles.** Alfonso llegó solo a la misma segmentación (independientes nuevos · alta cocina · producción grande estandarizada) y a la misma implicación (*"si atacamos todas, no atacamos ninguna"*). Un framework que sobrevive el contacto con alguien de la industria **sube de hipótesis de retro a hipótesis con apoyo externo**.
6. **Alfonso Arballo es supply-side, no operador.** Trabaja en el negocio familiar de distribución de vinos y licores (surte a Calimax, Soriana en TJ). Doble clasificación, **ambas post-PMF**: conector institucional (Tier 2) + distribuidor (Tier 3 · Fase 2+ con leverage · demand-side primero). Consistente con no forzarlo.
7. **★ LinkedIn se detuvo — y el diagnóstico importa más que el hecho.** Alan dejó de publicar: *"me cuesta continuar cuando veo que no hay avance"* (poco alcance · casi nula interacción · cero mensajes). Cuatro lecturas honestas:
   - **(a) Dos meses es muy poco.** El horizonte real de LinkedIn orgánico es 6-12 meses de compounding. Se estaba leyendo la parte plana de la curva como si fuera horizontal.
   - **(b) Se midió con la métrica equivocada.** Alcance y likes son exactamente lo que `02-digital-distribution-strategy` advierte NO optimizar; su north star declarado es **relaciones**.
   - **(c) Con esa métrica, LinkedIn no ha fallado.** **Victor Murguía llegó por LinkedIn** (inbound, él contactó a Alan) — y Victor produjo el referido a **Miguel Bahena**. Una relación que genera un referido no es cero. *(Corrección: en la conversación de la retro se afirmó primero que ningún prospecto vino de LinkedIn; es falso.)*
   - **(d) El stealth quita el material más potente:** no se puede nombrar Zenet, que es lo que Alan tiene más ganas de contar.

**▸ 🔀 Decisiones**
- **Secuencia canónica para atacar el hueco de la VP:** (1) probar el **argumento del punto porcentual** en conversación → (2) **mago-de-Oz del diagnóstico** con los docs de Alma Verde → (3) **copy v0.3** → (4) landing v3.
- **NO prometer el diagnóstico en la landing hasta correrlo una vez.** Razones: el perfil 3 se auto-excluiría (*"yo no tengo documentos"*) · es promesa verificable sin evidencia · `06-argumentacion` §9 lo pone como **el disparador mayor** que mueve los claims a v1.0. Lo seguro hoy es prometer el **método**, no el **hallazgo**.
- **Mentores e inversionistas viven fuera del Pipeline de validación.** Regla: *¿su red lleva a operadores → Pipeline Fase A; a capital/mentoría/ecosistema → Red estratégica?*
- **Miguel Bahena: tope de 2 toques directos alcanzado** (un tercero quema el vouch) → reactivar **vía Victor** · **kill date ~15-ago** → si nada, Pausado.
- **Legal: se confirma el Tier framework propio.** Lo caro (abogado · contratos · DPA · SAPI) espera al LOI. **El aviso de privacidad de la landing se hace ya** — Formspree ya recolecta datos personales desde julio y bajo LFPDPPP 2025 Zenet es encargado del tratamiento. No es prematuro: va tarde.
- **La VP se re-articula con Why/How/What (Sinek) + tono evangelizador.** ⚠️ Es cambio de **expresión**, no de estrategia — la VP canónica sigue siendo la de `01-propuesta-de-valor` v0.1.
- **Reveal / IG build-in-public anclado al primer design partner.** Coincide con las decisiones abiertas #1 y #2 del plan de Fase A §9.5. ⚠️ **Tensión a resolver conscientemente:** `02-digital-distribution-strategy` declara **LinkedIn ONLY en Fase 1** y difiere IG a Fase 1.5+/2+. Si IG entra al reveal, es un cambio deliberado de esa decisión, no deriva.
- **★ LinkedIn se reencuadra: de canal de audiencia a instrumento de validación.** Publicar **de vez en cuando** (sin cadencia forzada) y **solo sobre la PROBLEMÁTICA** — no sobre Zenet ni sobre producto. Dos objetivos: **(1) seguir validando problem fit / H1** (un operador que comenta *"eso me pasa exacto"* es evidencia casi gratis, y alimenta la VoC library) · **(2) cerrar llamadas para Mom Test**. Compatible con el stealth. **Métrica:** ni alcance ni likes → *¿comentó o escribió un operador real? ¿se agendó una llamada?*
  - ⚠️ **Riesgo a verificar barato:** ¿la audiencia de Alan en LinkedIn son operadores de restaurantes o es red tech/industria? Si no hay operadores leyendo, ningún contenido convierte — y entonces el trabajo de LinkedIn no es publicar sino **conectar y comentar** en el mundo de ellos. Revisar tras 3-4 posts.
  - ⚠️ **`02-digital-distribution-strategy` v0.1 (LinkedIn ONLY · 3-5 posts/semana) ya no describe la realidad** → necesita nota de revisión a v0.2, o el canon se vuelve ficción y contamina todo lo que se apoya en él.
- **El foco semanal baja a 3 puntos** (capacidad observada ≈2, no 4).

**▸ 📊 Scorecard H1–H6**
**Sin movimiento.** Cero conversaciones nuevas con operadores. El café de CANIRAC **no cuenta** (conector, contexto social, señales declaradas). Sigue **1 de las 5-8 conversaciones** que pide el gate a Fase B. **Todos los assets están construidos; faltan operadores.**

**▸ 🎯 Foco próxima semana (3–9 ago) — TRES, no cuatro**
1. **Pulir la propuesta de valor** (Why → How → What · tono evangelizador). Es el trabajo que destraba lo demás — **pero no es precondición para el punto 2**.
2. **Mensaje a Ana proponiendo llamada.** *(Versión chica de "San Miguel" — 2 minutos, no la llamada completa. La tarea llevaba 2 semanas cayéndose porque pedía una llamada; se redimensiona.)*
3. **Juanjo** — redactarlo juntos y mandarlo martes o miércoles.

*Carril de producto (aparte): onboarding con análisis de estandarización y costos. Nota: correrlo **a mano una vez** con los docs de Alma Verde antes de construir la ruta — un día manual puede ahorrar semanas de build en la dirección equivocada.*
*Diferido: reactivar a Miguel vía Victor (kill date 15-ago) · aviso de privacidad · calculadora del punto.*

*▸ Pipeline: 16 prospectos · 1 soft-commit (Carlos/Alma Verde) · 3 conversación (Victor, Pedro, Alfonso Arballo) · 2 enviados sin respuesta (Alma, Miguel Bahena) · **10 en "Por enviar"**.*

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

*Última actualización: 2026-08-03. v0.2 · 3 entradas (13–19 jul · 20–26 jul · 27 jul–2 ago).*
