---
name: Video «Zenet en acción» · guion
description: Guion del video corto (~54 s, sin sonido) que sustituye al video demo en la landing, en una sección nueva «La solución» justo después de «La realidad de hoy» — el wow de qué es Zenet, en el mismo mundo isométrico del hero, sin repetir los problemas — Zenet arranca el día 1 con tus documentos, une una o varias sucursales, hace en minutos lo que tomaba horas y deja la operación en orden
type: seo-content
last_updated: 2026-10-14
status: draft
version: 0.3
owner: Alan Bahena
---

# Video «Zenet en acción» · guion

> **Qué es:** el momento *wow* de la landing: qué es Zenet, en unos 54 segundos. **Sustituye al video demo** (`00-guion.md`, 71 s): un solo video en la página.
>
> **Qué no es:** no repite los problemas. Esos ya los cuentan el hero (*Hoy, todo se hace a mano*) y *La realidad de hoy*. Aquí el restaurante arranca en calma y Zenet entra.
>
> **Estado:** **v0.3 · EN VIVO en `zenetapp.com` (tag `v4.8`, 2026-10-14)**, en la sección *La solución*. Dos versiones: horizontal 16:9 (`_export/Zenet en acción.mp4`, 1920 × 1080) y **vertical 4:5 para celular** (`_export/Zenet en acción · celular.mp4`, 1080 × 1350), las dos del mismo lab (`zenet-landing/lab/v10-video-accion.html`, `?fmt=v` = vertical) con `build/render-accion.mjs`.

---

## 1. El guion, como quedó construido

| # | Tiempo | Lo que se ve | Texto en pantalla |
|---|---|---|---|
| **1 · Tu restaurante** | 0–6 s | El restaurante isométrico del hero, ya en calma: el camión llega, el repartidor baja, la gente trabaja (pica, mueve la olla, escribe). La cámara se acerca despacio | *Tu restaurante, / como funciona hoy.* |
| **2 · Desde el día 1** | 6–19 s | Etiqueta **"Día 1"**. Arriba a la derecha, un **panel de Zenet** (isotipo + *zenet* + *Tus documentos*). Desde la oficina vuelan los documentos y entran al panel como filas, cada una con *leído ✓*: **Excel de compras · Inventario · Excel de costos · Recetario**. Las áreas se encienden en menta con su etiqueta: Compras · Almacén · Costos · Recetas. Un trazo teal recorre los muros | **Nada de meses para arrancar, / ni instalaciones complicadas.** → *Empiezas el día 1, con tus documentos / tal como los tienes.* |
| **3 · Una sucursal o todas** | 19–27 s | La cámara se aleja; el camión y la calle se van. Suben del piso dos copias del restaurante: **Sucursal Centro · Norte · Sur**. Rutas teal **en el piso** las unen, con pulsos que corren por ellas | *Para una sucursal / o para todas.* |
| **4 · Lo que tomaba horas** | 27–44 s | La red se atenúa y entran tarjetas, una a la vez: **Orden de compra** (Sucursal Centro · aguacate, jitomate, queso) → toque → *Enviada ✓* · **Cotizaciones** del aguacate, tres proveedores lado a lado → toque → *Elegida ✓* (la elige el operador) · un **celular** con *Tus sucursales*: ventas de hoy y food cost por sucursal y la gráfica de la semana | *Lo que tomaba horas, / en minutos.* con subtítulo que cambia: *Armas tu orden de compra en un toque.* → *Comparas cotizaciones lado a lado. Tú eliges.* · luego *Y los números / de cada sucursal, / en tu mano.* · *Ventas y costos de cada sucursal, al día.* |
| **5 · Cierre** | 44–54 s | La red vuelve en calma. Sobre cada cocina, una tarjeta con tres palomitas teal: **Misma receta · Mismo proceso · Misma calidad**, una sucursal tras otra. La escena se apaga del todo y entra **el cierre del video demo**: el isotipo se dibuja y se rellena, suben las letras de *zenet*, la rayita teal y el eslogan | *Una operación / en orden.* → **El caos no es el precio de tener un restaurante.** |

El video corre en ciclo. Datos de ejemplo en todas las tarjetas.

---

## 2. Decisiones y por qué

- **Sustituye al video demo** (decisión del fundador): un solo video en la página, más corto y más impactante.
- **Arranca en calma, sin problemas.** El hero y *La realidad de hoy* ya los cuentan; repetirlos aquí cansa.
- **El bloque 2 es el corazón del video:** Zenet **arranca fácil y desde el día 1**, porque es lo que más pesa para un operador que ya vivió un sistema que tardó meses. Respaldo: `/demo` ya promete *"del primer documento a tu análisis: menos de 10 minutos"*.
- **Un panel de Zenet, no un núcleo.** Se probó un núcleo con el isotipo y no se reconocía; el panel con *Tus documentos* deja claro qué pasa: Zenet lee lo que ya tienes.
- **La red vive en el piso del mundo, no como diagrama.** Se probó una red tipo organigrama y se descartó: parecía un esquema, no un restaurante.
- **Sin pelearse con otros sistemas** (voz *por encima de la pelea*): *"nada de meses para arrancar"*, nunca *"no como los otros sistemas"*. En palabras del operador: *arrancar*, *instalaciones*; no *implementación* ni *integración*.
- **La red = el nombre.** *Zen* + *net*. **Arranca con una sucursal** para que el ICP de 1-2 sucursales no se sienta fuera.
- **Proveedores: se comparan, no se eligen.** Las cotizaciones aparecen lado a lado y **elige el operador** (*"Tú eliges"*). Regla canónica: Zenet nunca recomienda proveedor.
- **El margen se ve, no se promete al alza.** El food cost por sucursal aparece en el celular; ninguna flecha de margen subiendo.
- **Calidad = consistencia.** El cierre no muestra *experiencia del comensal* (el piso es del POS): muestra que **la receta y el proceso son los mismos, y por eso la calidad también**. Se probó un platillo visto desde arriba y no se leía a ese tamaño; quedó la tarjeta con texto.
- **El cierre es el mismo del video demo** (logo animado + *"El caos no es el precio de tener un restaurante"*): los dos videos firman igual. Sin botón *Hablemos* dentro del video: la página ya lo tiene. Alternativa disponible: *"Tú decides lo importante."*

**Descartados:** repasar beneficios en abstracto · *"Zenet selecciona a los mejores proveedores"* · *"margen y experiencia del comensal aumentan"* · *"integración"* como palabra · un tercer miedo en el titular (*cambiar tu POS*) · el mesero caminando (atravesaba la mesa) · el núcleo con isotipo · la red tipo diagrama · el platillo visto desde arriba · el botón *Hablemos* en el cierre.

---

## 3. La sección de la landing: «La solución»

Construida en `lab/v11-solucion.html` (copia de la landing con el video corriendo dentro).

- **Va justo después de *La realidad de hoy*:** hero → La realidad de hoy → **La solución** → El momento → El camino → En concreto… (problema → solución → por qué ahora). Fondo claro; *El momento* pasa a fondo crema para que sigan alternando.
- **Solo la etiqueta *La solución* y el video.** Sin titular visible (queda un encabezado oculto para lectores de pantalla y buscadores), sin subtítulo, sin los tres puntos y sin la caja *"Tu POS se queda"*. Razón: el video abre con su propio título, y un titular encima competía con él. *"Tu POS se queda"* sigue en el plano de *En concreto*; *"Tú decides lo importante"* cierra el hero. Lo único que sale de la página es *"Tu equipo también"*.
- **Ocupa la pantalla** (menos la barra) en escritorio, y el video crece hasta donde cabe completo: hasta 1420 px de ancho, limitado por el alto. En celular y tablet vertical, el tamaño normal.
- **Titulares descartados para esta sección:** *"Tu restaurante en orden, desde el día 1"* · *"Tu restaurante inteligente funcionando desde el día 1"* (*"inteligente"* ya se descartó para el hero: suena a promesa tecnológica e insinúa que hoy su restaurante no lo es).
- **A vigilar:** es la única sección sin titular visible; si al recorrerla se cae, *La solución* pasa a título. Y el arranque de *El momento* (*"Lo que antes se absorbía sin sentirlo…"*) se escribió para ir después de los problemas: revisar que no se sienta un regreso al problema.

---

## 4. Reglas de la animación

- El mismo motor isométrico del hero (`lab/v7`–`v8`), para que el video y la página se vean de la misma familia.
- El teal es solo de Zenet · nada de rojo · los agentes no se nombran (Zenet es uno).
- Texto en pantalla corto, que se lea en un par de segundos. Subtítulos a 1.75vw (máx. 25 px a 1440): a 1.45vw se perdían dentro del marco de la página.
- **Ningún texto encima del restaurante:** en el bloque 2 la cámara se abre (`translate(4%, 4.5%) scale(.92)`) para dejar libre la esquina del texto.
- Render con el pipeline del video demo (`build/`: GSAP → captura → MP4) en **H.264 Main 4.0 con `+faststart`** (el High 5.0 no arrancaba en iPhone). Sin sonido.

---

## 5. Producto: lo que muestra y lo que ya corre

1. **Multiusuario:** sí, ya corre (confirmado por el fundador). *"Los números de cada sucursal, en tu mano"* se sostiene.
2. **Órdenes de compra y comparación de cotizaciones:** salen **en las próximas semanas**. El fundador decidió mostrarlas igual (misma decisión que con la v4.7: la narrativa describe el camino; las instrucciones solo piden lo que ya funciona).

---

## 6. Pendiente

1. ~~Convertir a MP4~~ ✅ (14-oct · horizontal 4.9 MB + vertical 4.2 MB, H.264 Main 4.0, `+faststart`, con póster).
2. ~~Publicar la sección *La solución*~~ ✅ (14-oct · tag `v4.8`).
3. Decidir qué pasa con *El camino* (cuenta parte de lo mismo que el video).
4. ~~Actualizar `01-copy` y `02-prototipo-y-diseno`~~ ✅ (v0.16 · build v4.8).
5. *(Opcional)* Que el texto del bloque 3 y de las tarjetas del cierre se lea mejor en la versión vertical (hoy se entiende la idea, la letra queda chica).
