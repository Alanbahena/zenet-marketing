---
name: Video demo · guion
description: Guion escena por escena del video demo de Zenet (animación sin sonido, con subtítulos, ~48 s) — qué se ve, qué toca el cursor, el subtítulo exacto, las reglas que lo mantienen simple y el plan de producción por actos
type: seo-content
last_updated: 2026-10-03
status: active
version: 1.0
owner: Alan Bahena
---

# Video demo · guion

## 0. Qué es este video

Una animación corta —sin sonido ni música, solo movimiento y subtítulos— que enseña **qué es Zenet y cómo se usa** en menos de un minuto. Estilo *demo de producto*: tarjetas de app flotando sobre el fondo cálido de la marca y un cursor que hace clic, como los ejemplos de referencia que trajo el fundador (2026-10-01), pero dibujado con el sistema de diseño de la landing.

- **Duración:** ~71 s en la versión final. El objetivo inicial era ~45 s; el fundador priorizó que se pueda leer y mirar con calma (subtítulo primero, figuras después).
- **Formato:** horizontal 1920×1080, 30 cuadros por segundo, MP4 (H.264). Versión cuadrada opcional al final.
- **Fuente:** HTML + SVG + CSS animados con una línea de tiempo (GSAP) que se adelanta cuadro por cuadro → Chrome headless → ffmpeg. Vive en `build/`; los MP4 salen a `_export/` (fuera de git).

## 1. Reglas del video

**De forma** (para que se entienda de un vistazo, como los ejemplos):

1. **Una escena, una idea, una acción.**
2. **Máximo dos tarjetas en pantalla a la vez.**
3. **Texto en tarjeta solo si se lee de un vistazo:** 3 a 5 renglones.
4. **El cursor se mueve con propósito:** va directo a donde hace clic, nunca deambula.
5. **Cada escena se detiene ~1 s en su estado final** para que el ojo alcance a leer.
6. **El cursor es el operador.** Aparece solo cuando él actúa (sube, revisa, elige). Cuando trabaja Zenet, el cursor se va: *tú decides, Zenet lo carga*. En WhatsApp, en lugar del cursor, un dedo que toca.

**De contenido** (heredadas de la landing y del diagnóstico):

7. **Primero se lee, luego se ve.** En cada cambio de escena las figuras y el subtítulo se desvanecen juntos, el escenario queda limpio y el subtítulo nuevo aparece **al centro y más grande**, el tiempo que pide su largo (1.1 s + 0.11 s por palabra: ~1.65 s con 5 palabras, ~2.2 s con 10); cuando entran las figuras baja a su lugar abajo y se hace chico. Cada escena termina con ~1.1 s de su resultado junto a su subtítulo. Excepciones: de las áreas al cambio (4→5) la red se queda y solo cambia el texto abajo; antes del logo no hay título.
8. **Tarjetas dibujadas con los tokens de la landing, no capturas.** Teal para la calma, **peach para "subió"**, mint para "bajó", **nada de rojo**.
9. **Datos de Marea Baja**, el mismo ejemplo del diagnóstico de venta, con la etiqueta *Ejemplo · datos ficticios* en las escenas con números.
10. **Cero cifras de impacto de Zenet.** Las cifras que aparecen son del restaurante (sus precios, su food cost), nunca "lo que ahorraste".
11. **Los agentes no se nombran.** La arquitectura se enseña como *un especialista por área, un solo cerebro operativo*.
12. **Zenet compara; el operador elige.** Ninguna etiqueta de "recomendado"; el razonamiento se muestra como datos junto a cada opción.
13. **En WhatsApp, el operador escribe primero.** Zenet responde, no inicia (así corre hoy).

## 2. La estructura

| # | Escena | Tiempo | Qué se ve | Interacción | Subtítulo |
|---|---|---|---|---|---|
| 1 | Tus documentos | 0:00–0:04 | Caen cuatro documentos sueltos e inclinados: PDF de recetas, Excel de inventario, foto de una factura, estado de resultados | El cursor arrastra dos a la tarjeta *Sube tus documentos* | *Tus documentos, como los tienes.* |
| 2 | La base | 0:04–0:09 | Tres nombres del mismo insumo (*camaron 21-25* · *CAMARÓN 21/25 KG* · *camarón grande*) se funden en uno: *Camarón 21/25 · kg*. Luego se dibuja la cadena platillo → receta → insumo → proveedor → compra | Sin cursor | *Zenet los ordena y los conecta: del platillo a la compra.* |
| 3 | El diagnóstico | 0:09–0:16 | Una línea de pulso cruza una vez y se vuelve un reporte tipo examen: los dos índices (46 y 29) + food cost, nómina y margen, cada uno con su rango y su marcador (teal dentro · peach fuera) | El cursor hace *scroll* | *Tu primer diagnóstico: dónde está tu operación hoy.* |
| 4 | Las áreas | 0:16–0:20 | El reporte se encoge y se vuelve la esfera de Zenet; a su alrededor se encienden seis nodos (Compras · Costos · Recetas · Inventario · Procesos · Equipo), cada uno con su trabajo en dos palabras | Sin cursor | *Un especialista por área. Un solo cerebro operativo.* |
| 5 | El cambio | 0:20–0:24 | El dominó en versión red: entra *Sube el camarón*, se sacuden Costos y Recetas, un pulso recorre las líneas, todo se recompone y aparece *Al día*. La esfera no se mueve | Sin cursor | *Sube el camarón: Zenet reacomoda lo que toca. Tú apruebas.* |
| 6 | Compras | 0:24–0:30 | Eyebrow *Empieza con tus compras*. Entran tres facturas a la tarjeta de movimientos; se llenan cuatro renglones (camarón · aguacate · aceite · jitomate) | Clic en *Camarón 21/25* → su detalle: +18% desde julio, una línea por proveedor | *Cada factura, guardada: qué subió, con quién y desde cuándo.* |
| 7 | Cotizaciones | 0:30–0:36 | La tabla aparece vacía; cada cotización entra a su renglón y se vuelve ese proveedor (círculo con iniciales); Zenet compara cada uno contra tu última compra y tu promedio de 3 meses, con los datos junto a cada opción | Clic en **Elegir** → el renglón elegido se marca, los otros se apagan y aparece *"Proveedor elegido: …"* | *Subes tus cotizaciones. Zenet las compara. Tú eliges al proveedor.* |
| 8 | WhatsApp | 0:36–0:42 | Un teléfono: el operador manda la foto de una factura → *"Listo, guardé 12 insumos de Mariscos del Pacífico."* Pregunta *"¿Por qué subió mi food cost?"* → *"Camarón +18% y aguacate +31% desde julio. Están en 31 y 22 de tus recetas."* | Un dedo toca | *Si sabes usar WhatsApp, sabes usar Zenet.* |
| 9 | Cada mes | 0:42–0:45 | Las páginas del diagnóstico se apilan (*septiembre · línea base* · octubre · noviembre); tres gráficas sin números ni ejes: tiempo ↓ · esfuerzo ↓ · margen ↑ | Sin cursor | *Cada mes, lo que se movió: tiempo, esfuerzo, margen.* |
| 10 | Cierre | 0:45–0:48 | Como el frente de la tarjeta de presentación: el contorno del isotipo se dibuja, se rellena y entran las letras de *zenet* (todo en charcoal `#2B3738`); crece la línea teal; entra el slogan en dos líneas y *"no es el precio"* se enciende en teal | — | *El caos no es el precio de tener un restaurante.* |

**El arco:** abre con documentos tirados (el caos) y cierra con el logo armándose en orden y la raíz de la narrativa.

## 3. Datos del ejemplo (Marea Baja · ficticios)

Mariscos · casual · Zona Río, Tijuana · 1 sucursal. Fuente: `Product Strategy/_context/06-experience-y-roadmap/_mock/diagnostico-v2/diagnostico-v2-ejemplo.html`.

- **Lo que leímos:** 48 recetas · 52 platillos · 86 insumos · 94 renglones de compra · 7 proveedores.
- **Índices:** estandarización 46/100 (recetas 71% · inventario 52%) · *qué tanto se puede enseñar sin una persona clave* 29/100.
- **Tus números:** food cost 34.6% (rango 28–33%) · nómina 27.8% (25–35%) · margen operativo 7.2% (8–12%).
- **La cadena (escena 2):** Aguachile verde (platillo) → 180 g de camarón (receta) → Camarón 21/25 · kg (insumo) → Mariscos del Pacífico (proveedor) → $342 / kg (compra). Los tres nombres crudos: *camaron 21-25* (factura) · *CAMARÓN 21/25 KG* (inventario) · *camarón grande* (recetario).
- **Compras (escena 6):** Camarón 21/25 · Mariscos del Pacífico · $290 → $342 / kg · +18% · Aguacate Hass · Frutas Beltrán · $54 → $71 / kg · +31% · Aceite vegetal · Abarrotes La Mesa · $412 → $449 / caja · +9% · Jitomate saladet · Frutas Beltrán · $450 → $396 / caja · −12%. Segundo proveedor de camarón: *Pescadería del Puerto* ($318 / kg).

## 4. Plan de producción

Se revisa **por actos, no escena por escena**: lo que más falla en una animación son las transiciones entre escenas, y eso no se ve revisando escenas aisladas.

| Fase | Qué | Revisión del fundador |
|---|---|---|
| 0 · El motor ✅ | Lienzo con los tokens de la landing · tarjeta · cursor con clic · subtítulos · script de render a MP4 (el teléfono y la esfera entran con sus actos) | No |
| 1 · Prueba de estilo 🔄 | **Escena 6 (Compras)**: fija el estilo de tarjeta, el movimiento del cursor, el subtítulo y la velocidad · `_export/escena-06-compras_prueba-v3.mp4` (2026-10-02) | **Sí** · estilo y ritmo aprobados; v2 facturas legibles · v3 cabecera gris |
| 2 · Los actos 🔄 | Acto 1 (escenas 1–3) ✅ `acto-1_v1.mp4` (15.8 s) · Acto 2 (4–5) ✅ `acto-2_v1.mp4` · corrido 1→6: `escenas-1-a-6_v1.mp4` (31 s) · Acto 3 (7–8) ✅ `acto-3_v2.mp4` · Cierre (9–10) ✅ `cierre_v5.mp4` | Sí, uno por uno |
| 3 · Ensamble ✅ | **Versión final: `_export/Video demo · Zenet.mp4`** (= `video-demo-completo_v7.mp4` · 71.4 s · 1920×1080 · 4.8 MB · aprobada por el fundador 2026-10-03). Pendiente opcional: versión cuadrada | Sí |

**Cómo se genera:** `node build/render.mjs --scene=compras --ffmpeg=<ruta> --out=_export/x.mp4` (sin `--scene`, el video completo; con `--stills=1,3.5` saca cuadros sueltos en PNG). Usa el Chrome instalado y ffmpeg con libx264; sin dependencias de npm. Un render de 6 s tarda ~25 s. `--from=5.4` hace que el MP4 empiece en ese segundo (cortes de revisión que entran desde el final de la escena anterior).

En cada revisión se entregan **el MP4** (para verlo a velocidad real) y **la vista en el navegador** (`build/index.html`, con barra para adelantar y decir *"en el segundo 3 el cursor va muy rápido"*).

## 5. Decisiones y por qué

| # | Decisión | Por qué |
|---|---|---|
| 1 | Estilo demo de producto (tarjetas + cursor) con el sistema de la landing | Los ejemplos funcionan porque enseñan en lugar de explicar; con los tokens de la landing es Zenet desde el primer cuadro |
| 2 | Los departamentos como red alrededor de la esfera, sin la palabra "agente" | Regla canónica: Zenet es uno, también en las animaciones. Se enseña la arquitectura, no personajes |
| 3 | La escena 5 dice *reacomoda*, no *corre* | En la landing, "lo ejecuta cada día" todavía lleva la píldora *En construcción* |
| 4 | Cotizaciones termina en **Elegir**, sin orden de compra ni envío | El envío aún no existe; Zenet compara y el operador elige (fundador, 2026-10-02) |
| 5 | WhatsApp como escena propia (estructura del fundador) | Variante si el acto 3 se siente largo: la factura de la escena 6 llega por WhatsApp y la escena 8 se queda solo con la pregunta |
| 6 | Escena 9 con gráficas sin números ni ejes | La intención es enseñar que tiempo, esfuerzo y margen se mueven, sin prometer cifras (regla: cero cifras de impacto hasta la primera curva real de un Socio Fundador) |
| 7 | El cierre es solo el logo y la raíz, sin dominio | Decisión del fundador (2026-10-02) |
| 8 | La gráfica de la escena 6 es el **detalle del insumo** (historial por proveedor), no la general | Enseña *con quién y desde cuándo* con un solo clic, y no depende del nombre de la gráfica general de Compras |

## 6. Abierto

- **Nombre de la gráfica general de Compras** en la app: *"Tus precios vs tu llegada"* (diseño del repo, task 40) o *"vs tus últimas compras"*. No bloquea la escena 6 (decisión #8); importa si se agrega en otra escena.
- **Cotizaciones:** cuando el flujo esté construido, una captura para que el dibujo de la escena 7 coincida con la app.
- **Versión cuadrada** para WhatsApp: se decide en el ensamble.

### Changelog

- **v0.1 (2026-10-02):** guion acordado con el fundador en cuatro rondas (estructura de 10 pasos del fundador → ajustes por reglas canónicas → observaciones del fundador → simplificación al estilo de los ejemplos). Fase 0 lista; prueba de estilo de la escena 6 entregada (esqueleto de carga → facturas → renglones → clic → detalle con una línea por proveedor).
- **v0.1.1 (2026-10-02):** el fundador aprueba el estilo y el ritmo de la escena 6. Ajuste: las facturas aparecen una por una a la izquierda y se quedan ~1 s antes de volar a la píldora (en la v1 no alcanzaban a leerse). La escena pasa de 6.0 a 6.8 s; los 0.8 s se compensan en el ensamble. Segundo ajuste: la cabecera de las tarjetas pasa a gris frío `#ECEFEC` (la cálida `#F7F2EC` se perdía contra el fondo `#F9F4EF`), el borde sube a 12% y el renglón seleccionado pasa a mint para no fundirse con la cabecera → `prueba-v3`.
- **v0.2 (2026-10-02):** Acto 1 construido (escenas 1–3, 15.8 s). Detalles que fijó el build: en la escena 1 el operador arrastra el recetario y la foto de la factura, los otros dos entran solos y el cursor se va · en la escena 2 la píldora *"3 nombres, un solo insumo"* nombra la fusión y la cadena crece desde el insumo hacia los dos lados · la línea de pulso barre la cadena (cada nodo se apaga antes de que la línea lo cruce) · en la escena 3 el reporte abre con *"Lo que leímos"*, los anillos de los dos índices y los renglones de números visibles en guion largo; al hacer scroll se llenan valor, marcador y chip.
- **v0.3 (2026-10-02):** Acto 1 aprobado. Acto 2 construido (escenas 4–5): el reporte se condensa en la esfera de Zenet (con su nombre adentro), seis áreas en dos columnas con su trabajo en pocas palabras (Compras *lee tus facturas* · Costos *recalcula cada platillo* · Recetas *las escribe y costea* · Inventario *lo pone en orden* · Procesos *los deja escritos* · Equipo *enseña a quien llega*); el cambio usa el dominó de la landing (píldora peach, turbulencia en Costos y Recetas, pulso desde la esfera) y termina en *costos recalculados* · *31 recetas, al día* (el camarón está en 31 de las 48 recetas de Marea Baja) · *Al día*. La salida lleva el área de Compras hacia la tarjeta de la escena 6. Duración acumulada 1→6: 31.0 s (el guion preveía 30); proyección total ~49 s, se recorta en el ensamble.
- **v0.4 (2026-10-02):** Acto 2 aprobado (sin el clic de *Aprobar*: el subtítulo carga el *"Tú apruebas"*). Acto 3 construido (escenas 7–8). **Cotizaciones:** tres cotizaciones de camarón 21/25 (20 kg) entran y se leen antes de volar a la tabla — Mariscos del Pacífico $338 · Pescadería del Puerto $318 · Mar de Cortés $326 —, comparadas contra *tu última compra* ($342) y *tu promedio de 3 meses* ($330) con chips mint (más barato) y peach (más caro); *"el más bajo"* se marca como dato, sin *"recomendado"*; el cursor elige y el botón pasa a *Elegido ✓*. **WhatsApp:** teléfono con el chat de Zenet; un dedo manda la foto de la factura → *"Listo, guardé 12 insumos de Mariscos del Pacífico. Total $18,420. Ya están en tus compras."* (el total es el de la factura de la escena 6) → pregunta *"¿Por qué subió mi food cost?"* → *"Camarón +18% y aguacate +31% desde julio. Están en 31 y 22 de tus recetas."* El operador siempre escribe primero. Acumulado 1→8: 43.2 s.
- **v0.4.1 (2026-10-02):** observaciones del fundador al Acto 3: (1) las cotizaciones flotaban encima de la tabla con los renglones grises y se veía ruido → ahora la tabla aparece vacía y cada cotización entra a su renglón y se vuelve ese proveedor; sin esqueleto en esta escena; (2) no se notaba que se elige un proveedor → círculo con las iniciales de cada proveedor, el elegido se marca (mint + barra teal + círculo teal), los otros se apagan y aparece la confirmación *"Proveedor elegido: Pescadería del Puerto · $318/kg"*; subtítulo propuesto *"…Tú eliges al proveedor."* La escena pasa a 6.4 s → `acto-3_v2.mp4`.
- **v0.5 (2026-10-02):** Acto 3 aprobado con el subtítulo *"…Tú eliges al proveedor."*. Cierre construido. **Escena 9:** tres diagnósticos apilados (septiembre *línea base* · octubre · noviembre, con su anillo y barras creciendo sin números) + la tarjeta *"Lo que se movió desde tu línea base"* con tres líneas sin números ni ejes (tu tiempo ↓ · tu esfuerzo ↓ · tu margen ↑) que suman un tramo por mes. **Escena 10:** el isotipo se arma como piedras apiladas (la mitad de abajo sube, la de arriba cae encima), entran las letras de *zenet* y la frase *"El caos no es el precio de tener un restaurante."*; ~2 s quieto al final. Primer corrido completo: 51.2 s.
- **v0.5.1 (2026-10-02):** el fundador observa que el logo armado en dos mitades se ve partido → ahora el contorno del isotipo se dibuja solo (mismo lenguaje de líneas que se dibujan del resto del video), se rellena de teal de una sola vez y entran las letras; el cierre pasa a 4.2 s → `cierre_v2.mp4`.
- **v0.5.2 (2026-10-02):** el fundador pide más tiempo para leer la escena 9 → los meses entran cada 0.8 s (antes 0.6) y la escena queda ~2 s quieta al final; pasa de 3.8 a 5.0 s → `cierre_v3.mp4`. Total proyectado ~53 s: el recorte a ~45 se hace en el ensamble, en las escenas con tiempo de sobra (documentos · la base · Compras), no en esta.
- **v0.5.3 (2026-10-02):** a pedido del fundador, la escena 9 gana otro segundo (6.0 s · ~3 s quieta) y el cierre se acorta a 3.4 s (el logo se arma un poco más rápido; ~1.2 s quieto al final) → `cierre_v4.mp4`.
- **v0.5.4 (2026-10-02):** el logo del cierre pasa del teal al imagotipo oscuro de la landing (`#243D41`, *negro turquesa* del brandbook: isotipo y letras del mismo color), por pedido del fundador → `cierre_v5.mp4`.
- **v0.6 (2026-10-03):** observación del fundador: los subtítulos aparecían al mismo tiempo que las figuras y el operador no sabía a qué voltear primero → regla nueva **"primero se lee, luego se ve"** (§1 regla 7): cada subtítulo entra 0.6 s antes que su escena y se va 0.6 s antes de que termine. El video abre con el primer subtítulo sobre la pantalla limpia; documentos, la base y Compras ganan 0.3 s de pausa para que su imagen final no se quede sin su texto demasiado pronto. Total 54.5 s.
- **v0.7 (2026-10-03):** el fundador siente que todavía pasa muy rápido para leer y ver a la vez → la anticipación sube de 0.6 a **1.0 s** y cada escena termina con al menos ~1.7 s quieta (documentos 6.2 · la base 6.25 · diagnóstico 5.95 · áreas 4.4 · cambio 5.25 · Compras 7.5 · cotizaciones 6.6 · WhatsApp 6.55 s). Total ~59 s: con este ritmo los 45 s ya no son realistas sin quitar contenido. Palancas si sigue rápido: bajar 10 % la velocidad de todo (~65 s) o acortar subtítulos.
- **v0.8 (2026-10-03):** idea del fundador: que en cada cambio de escena el fondo se quede sin figuras y solo se vea el subtítulo antes de que entre lo siguiente. Refinamiento: el subtítulo aparece al centro, grande, donde ya está la mirada, y baja a su lugar cuando entran las figuras (*momento de título*, `TITLE` = 1.3 s). La base ya no la barre la línea de pulso (se desvanece con su texto; el pulso cruza el escenario limpio). Total ~65 s.
- **v0.8.1 (2026-10-03):** el fundador pide más tiempo con el texto al centro → el momento de título deja de ser fijo (1.3 s) y depende del largo de la frase: 1.1 s + 0.11 s por palabra. Total ~71 s.
- **v0.8.2 (2026-10-03):** el cierre se iguala al frente de la tarjeta de presentación (`Product Strategy/_templates/tarjeta-fundador.html`): logo completo en charcoal `#2B3738`, línea teal corta debajo, slogan en dos líneas *"El caos no es el precio / de tener un restaurante."* con *"no es el precio"* en teal, mismas proporciones. El cierre pasa a 3.9 s.
- **v1.0 (2026-10-03):** el fundador aprueba el video completo (*"se ve muy bien, me gusta"*). Versión final: `_export/Video demo · Zenet.mp4` (71.4 s · 1920×1080). Pendientes opcionales: versión cuadrada para WhatsApp · instalar ffmpeg de forma permanente · commit del guion y de `build/`.
