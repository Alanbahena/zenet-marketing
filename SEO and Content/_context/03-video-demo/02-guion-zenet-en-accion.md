---
name: Video «Zenet en acción» · guion
description: Guion del video corto (~42 s, sin sonido) que sustituye al video demo en «Cómo trabaja» de la landing — el wow de qué es Zenet, en el mismo mundo isométrico del hero, sin repetir los problemas — Zenet aprende con tus documentos desde el día 1, une una o varias sucursales y deja la operación en orden
type: seo-content
last_updated: 2026-10-14
status: draft
version: 0.1
owner: Alan Bahena
---

# Video «Zenet en acción» · guion

> **Qué es:** el momento *wow* de la landing: qué es Zenet, en unos 42 segundos. **Sustituye al video demo** (`00-guion.md`, 71 s) en la sección *Cómo trabaja* — un solo video en la página.
>
> **Qué no es:** no repite los problemas. Esos ya los cuentan el hero (*Hoy, todo se hace a mano*) y *La realidad de hoy*. Aquí el restaurante arranca en calma y Zenet entra.
>
> **Estado:** guion v0.1 acordado con el fundador (2026-10-14). **Sin construir.** Antes de animar se confirman dos cosas del producto (al final).

---

## 1. El guion

| # | Tiempo | Lo que se ve | Texto en pantalla |
|---|---|---|---|
| **1 · Tu restaurante** | 0–6 s | El restaurante isométrico del hero, ya en calma: la gente trabajando, el camión llegando | *Tu restaurante, como funciona hoy.* |
| **2 · Zenet aprende, desde el día 1** | 6–16 s | Aparece una etiqueta de calendario **"Día 1"**. Desde la oficina salen los documentos **tal como están** (la foto de una factura, un Excel, el recetario en papel, un chat de WhatsApp) y entran a un núcleo teal en el centro, **sin formularios ni captura**. Las áreas se encienden una tras otra: compras, almacén, costos, recetas | **Nada de meses para arrancar, ni instalaciones complicadas.** → *Empiezas el día 1, con tus documentos tal como los tienes.* (el titular primero; la segunda línea cuando entran los documentos) |
| **3 · La red** | 16–24 s | La cámara se aleja, el restaurante se hace pequeño y aparecen dos sucursales más. Líneas teal salen del núcleo y las unen | *Para una sucursal o para todas.* |
| **4 · El día con Zenet** | 24–34 s | Tres viñetas rápidas sobre la red: la gerente arma una orden de compra en un toque · las cotizaciones aparecen **lado a lado** · el dueño revisa los números de cada sucursal en su celular | *Lo que tomaba horas, en minutos.* → *Y los números de cada sucursal, en tu mano.* |
| **5 · Cierre** | 34–42 s | Las tres sucursales en calma, **el mismo platillo saliendo igual de las tres cocinas** y el margen de cada una visible. Termina con el logo de Zenet | *Una operación en orden. Tú decides lo importante.* · **Hablemos** |

---

## 2. Decisiones y por qué

- **Sustituye al video demo** (decisión del fundador): un solo video en la página, más corto y más impactante.
- **Arranca en calma, sin problemas.** El hero y *La realidad de hoy* ya los cuentan; repetirlos aquí cansa.
- **El paso 2 es el corazón del video.** El fundador quiere que quede claro que Zenet **arranca fácil y desde el día 1**, porque es lo que más pesa para un operador que ya vivió un sistema que tardó meses. Respaldo: `/demo` ya promete *"del primer documento a tu análisis: menos de 10 minutos"*.
- **Sin pelearse con otros sistemas** (voz *por encima de la pelea*): *"nada de meses para arrancar"*, nunca *"no como los otros sistemas"*. En palabras del operador: *arrancar*, *instalaciones*; no *implementación* ni *integración*.
- **La red = el nombre.** *Zen* + *net*: el núcleo une una o varias sucursales. **Arranca con una sucursal** para que el ICP de 1-2 sucursales no se sienta fuera (*"para una sucursal o para todas"*).
- **Proveedores: se comparan, no se eligen.** Las cotizaciones aparecen lado a lado; elige el operador. Regla canónica: Zenet nunca recomienda proveedor.
- **El margen se ve, no se promete al alza.** Sin flechas de margen subiendo: es una cifra de impacto que todavía no se puede sostener (regla de la landing).
- **Calidad = consistencia, no experiencia del comensal.** Zenet trabaja en el back-of-house; lo que sí cuida es que el mismo platillo salga igual en todas las sucursales (la estandarización). *"El piso es del POS."*

**Descartados en la sesión:** repasar beneficios en abstracto · *"Zenet selecciona a los mejores proveedores"* · *"margen y experiencia del comensal aumentan"* · *"integración"* como palabra · un tercer miedo en el titular (*cambiar tu POS*) — con dos ideas ya está al límite.

---

## 3. Reglas de la animación

- El mismo motor isométrico del hero (`zenet-landing/lab/v7`–`v8`), para que el video y la página se vean de la misma familia.
- El teal es solo de Zenet · nada de rojo · los agentes no se nombran (Zenet es uno) · el núcleo no se mueve, solo respira.
- Texto en pantalla corto, que se lea en un par de segundos.
- Render con el pipeline del video demo (`build/`: GSAP → captura → MP4) en **H.264 Main 4.0 con `+faststart`** (el High 5.0 no arrancaba en iPhone). Sin sonido. Póster con el cuadro del cierre.

---

## 4. Pendiente antes de construir (el paso 4 depende de esto)

1. **¿Zenet ya es multiusuario?** ¿El dueño puede ver los números de cada sucursal y cada gerente entra con su usuario? Si no, *"los números de cada sucursal, en tu mano"* se ajusta.
2. **¿La comparación de cotizaciones sale junto con las órdenes de compra** (en unas semanas)? Si no, la viñeta de cotizaciones sale del paso 4.
3. *(Abierta)* Cuándo publicarlo: con las órdenes de compra ya corriendo, el paso 4 queda cubierto.
