---
name: Página /hablemos · estrategia y copy
description: La página /hablemos de zenetapp.com — EN VIVO (v0.4 · tag v3.2 · 20-ago-2026). Formulario de 3 pasos escalados por intimidad con panel de marca. Qué trabajo hace, las decisiones canónicas, el copy verbatim de los tres pasos (panel · etiquetas · placeholders · legal · éxito), el payload que llega por correo y cómo se lee un envío contra los criterios de ICP. El diseño y la mecánica viven en 02-prototipo-y-diseno §9.b.
type: seo-content
last_updated: 2026-09-05
status: active
version: 0.1
owner: Alan Bahena
---

# Página /hablemos · estrategia y copy

> **Qué es:** el destino de los tres CTA de la landing. No es una página de contacto — es la **primera conversación, en diferido**: recoge quién es, qué opera y **el reto en sus palabras** antes de que exista una llamada.
>
> **Estado:** ✅ **EN VIVO en `zenetapp.com/hablemos`** (v0.4 · tag `v3.2` · 2026-08-20). QA con envío real verificado por el fundador (11 campos + WhatsApp combinado).
>
> **Frontera:** aquí vive **el copy y el porqué**. El diseño, la mecánica y el QA viven en `02-prototipo-y-diseno.md` **§9.b**. El artefacto vivo es `hablemos.html` en el repo `zenet-landing`.

---

## 1. El trabajo de la página

Tres trabajos, en orden:

1. **Bajar la fricción de decir "sí".** El operador llega desde un CTA; lo que sigue no puede ser un muro de campos.
2. **Calificar antes de la conversación.** Rol, tipo, sucursales y ciudad llegan resueltos → el envío se puede leer contra los criterios de ICP sin una llamada de descubrimiento.
3. **★ Capturar VoC pre-conversación.** El campo obligatorio *"¿Cuál es el mayor problema o reto de tu operación hoy?"* es **oro**: el dolor en las palabras del operador, sin que nadie se las haya puesto en la boca — exactamente lo que el Mom Test pide y lo que la verbatim library necesita (`02-customer-research/07-voice-of-customer.md`).

---

## 2. Decisiones canónicas

| # | Decisión | Valor |
|---|---|---|
| 1 | **Tres pasos escalados por intimidad** | ① quién eres → ② tu restaurante → ③ tu operación. Lo barato primero, lo sensible al final — cuando ya hay compromiso invertido |
| 2 | **El reto es obligatorio; las ventas, no** | El texto libre es el activo (VoC + calificación); la cifra de ventas es un *nice to have* que no vale la fricción de perder el envío |
| 3 | **Ventas en rangos y "(opcional)"** | Sin opción *"prefiero no decirlo"* — la etiqueta hace ese trabajo sin invitar a la evasiva |
| 4 | **País fijo México** (campo oculto) | En pantalla solo *Ciudad*. La lada 🇲🇽/🇺🇸 cubre al operador con número de EE. UU. en la frontera |
| 5 | **"Te responde el fundador — no un equipo de ventas"** | La promesa de trato es el diferenciador pre-PMF (`04-go-to-market/00-marco` · founder-led). Debe seguir siendo cierta: si deja de serlo, la línea se cae |
| 6 | **Sin navbar ni footer** | Página enfocada. El panel lleva el logo y el *Volver*; `/privacidad` va junto al botón Enviar |
| 7 | **Rechazado: quote de entrevistado en el panel** | Parafrasear conversaciones privadas sin permiso = testimonial inventado. El slot se activa con el **primer Socio Fundador que dé permiso** |
| 8 | **Rol incluye Contador/a** | El contable es parte del buying committee (veto silencioso · `02-customer-research/05-buying-process` §10.8) |

---

## 3. El copy, verbatim

### 3.1 Meta

- **`<title>`** — Hablemos — Zenet
- **`meta description`** — Cuéntanos de tu operación en tres pasos y agendamos una conversación. Sin compromiso.

### 3.2 Panel de marca (izquierda · banda superior en móvil)

> ← Volver
>
> **El caos no es el precio de tener un restaurante.**
>
> Cuéntanos de tu operación. Te responde el fundador — no un equipo de ventas.

*(El titular es **la raíz** de la marca, la misma que abre la landing. La página de conversión no estrena mensaje: lo confirma.)*

### 3.3 Paso 1 de 3 — quién eres

> **Hablemos de tu restaurante.**
> Primero, cuéntanos un poco sobre ti.

| Campo | Etiqueta | Placeholder / opciones | Obligatorio |
|---|---|---|---|
| `nombre` | Nombre | *Tu nombre* | sí |
| `rol` | Tu rol | Dueño/a · Gerente · Chef · Contador/a · Otro | sí |
| `email` | Correo | *tu@correo.com* | sí |
| `whatsapp` | Celular / WhatsApp | *664 123 4567* · lada 🇲🇽 +52 (default) / 🇺🇸 +1 | sí |

**Botón:** Continuar

### 3.4 Paso 2 de 3 — tu restaurante

> **Ahora, tu restaurante.**
> Para conocer de qué operación estamos hablando.

| Campo | Etiqueta | Placeholder / opciones | Obligatorio |
|---|---|---|---|
| `restaurante` | Nombre del restaurante | *Tu restaurante* | sí |
| `ciudad` | Ciudad | *Ciudad* | sí |
| `tipo` | Tipo de restaurante | Casual · Alta cocina · Cafetería / desayunos · Bar / gastropub · Comida rápida · Otro | sí |
| `sucursales` | Sucursales | 1 · 2-3 · 4-5 · 6+ | sí |

**Botones:** Atrás · Continuar

### 3.5 Paso 3 de 3 — tu operación

> **Y por último, tu operación.**
> Esto nos ayuda a llegar a la conversación con contexto.

| Campo | Etiqueta | Placeholder / opciones | Obligatorio |
|---|---|---|---|
| `ventas` | Ventas mensuales aproximadas *(opcional)* | Menos de $200K · $200K – $500K · $500K – $1M · Más de $1M | no |
| `reto` | **¿Cuál es el mayor problema o reto de tu operación hoy?** | *En tus palabras — lo que más te pesa del día a día…* | **sí** |
| `extra` | Algo más que quieras contarnos *(opcional)* | *Lo que quieras agregar…* | no |

**Botones:** Atrás · Enviar

### 3.6 Legal y éxito

> Al enviar, aceptas que Zenet use tus datos solo para contactarte sobre el Programa Socio Fundador. No compartimos tu información.
>
> [Cómo cuidamos tus datos](https://zenetapp.com/privacidad)

> **¡Gracias!**
> Recibimos tu información. Te escribimos pronto para agendar una conversación.

---

## 4. Qué llega por correo

Un solo POST a Formspree (`f/xrewyvab`) al final del paso 3. Asunto: **"Nuevo interesado — Programa Socio Fundador (landing Zenet)"**.

`nombre` · `rol` · `email` · `whatsapp` (lada + número ya combinados en un campo) · `restaurante` · `ciudad` · `tipo` · `sucursales` · `ventas` · `reto` · `extra` · `pais` (México, oculto).

`lada` se elimina del payload antes de enviar. `_gotcha` es la trampa antispam.

---

## 5. Cómo se lee un envío *(propuesta operativa v0.1 — sin uso real todavía)*

| Campo | Qué dice del fit |
|---|---|
| `sucursales` | **2-3 = centro del beachhead.** 1 = frontera por abajo · 4-5 = frontera por arriba · 6+ = fuera |
| `tipo` | Aproxima el perfil del framework de 3: *Casual* → perfil 3 (el que falta) · *Alta cocina* → perfil 2 (Miguel) · el perfil 1 (ya estandarizado) no se detecta aquí — se detecta en la conversación |
| `rol` | Quién escribe ≠ quién paga. *Dueño/a* = decisor · *Gerente* = champion · *Chef* = adopción · *Contador/a* = el veto que conviene tener adentro |
| `ciudad` | TJ/BC = Fase 1. Fuera de BC no descalifica en Fase A, pero cambia el costo de la sesión presencial |
| `reto` | **El campo que más pesa.** Si nombra el dolor con verbos propios (*cargar · perseguir · repetir*) sin lenguaje de folleto, es señal fuerte. Alimenta la verbatim library |
| `ventas` | Direccional para el ancla de precio. Declarado, no revelado — no decide nada solo |

> ⚠️ Este mapa es **propuesta**, no criterio validado. Se calibra con los primeros envíos reales y se reconcilia con `_templates/criterios-icp-y-design-partner-fase-a.md`.

---

## 6. Decisiones abiertas

| # | Abierto | Trigger |
|---|---|---|
| 1 | **El slot de testimonial en el panel** | Primer Socio Fundador que dé permiso explícito |
| 2 | **¿Los envíos reales se registran en algún lado?** Hoy llegan a correo y no hay bitácora de leads en el workspace | Primer envío real de un operador → decidir si vive en Notion (cockpit) o en un doc |
| 3 | **Calibrar el mapa de lectura (§5)** contra los criterios de ICP | 3-5 envíos reales |
| 4 | **La línea del fundador** (*"te responde el fundador"*) | Deja de ser cierta cuando exista alguien más respondiendo |

---

## 7. Cross-references

| Doc | Qué aporta / consume |
|---|---|
| `01-landing-page/02-prototipo-y-diseno.md` **§9.b** | Diseño, split 44/56, panel, mecánica de pasos, QA, assets |
| `01-landing-page/01-copy.md` v0.4 · *La raíz* | El titular del panel |
| `02-demo/00-estrategia-y-copy.md` v0.1 | La otra página hija: `/demo` enlaza aquí como CTA secundario |
| `Product Strategy/_templates/criterios-icp-y-design-partner-fase-a.md` | Los criterios contra los que se lee un envío (§5) |
| `02-customer-research/07-voice-of-customer.md` | Destino del campo `reto` |
| `03-oferta-y-pricing/02-programa-socio-fundador-offer.md` | Lo que se promete en el aviso legal y el asunto del correo |
