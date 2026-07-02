---
name: Tipografía
description: Sistema tipográfico de marca Zenet · primaria Geon (títulos/copy) · secundaria Roboto (cuerpo) · capturado del Zenet Brandbook 2025 · escala/pesos y fallback web como scaffold a confirmar con la landing.
type: visual-identity
last_updated: 2026-07-01
status: active
version: 1.0
owner: Alan Bahena
---

# Tipografía

> Cargar `00-marco` primero. Estados: ✅ · 🟡 base · 🚧.

## Familias — ✅ confirmadas en la landing (2026-07-01)

| Rol | Fuente | Uso |
|---|---|---|
| **Display** | **Onest** (600) | Headlines · títulos de sección · kickers · eyebrows · nombres |
| **Body** | **Hanken Grotesk** (400/500/600) | Párrafos · UI · botones |

Ambas vía **Google Fonts** (gratuitas · webfont). Regla: **display = Onest · todo lo demás = Hanken**.

> **⛔ Geon NO se usa.** Es de pago (foundry Cretype · MyFonts/Fontspring) y no hay licencia webfont. Los stand-ins gratuitos se eligieron **a propósito** (más cálidos que un system sans). El wordmark del logo conserva el lettering original de Geon (es un asset, no texto en vivo). El producto en prod usa Inter → inconsistencia a limpiar a futuro.

## Principios de uso

- Onest para **impacto** (hero · títulos · frases ancla) · Hanken para **lectura** (párrafos · UI).
- Tamaños **fluidos** con `clamp()` · `letter-spacing: -0.018em` en títulos · `text-wrap: balance` (títulos) / `pretty` (párrafos).
- Mucho aire · jerarquía clara · sin densidad (principio "claro y ordenado").
- Sin MAYÚSCULAS para énfasis (cf. `reglas-de-redaccion.md`) · **excepción:** el eyebrow (etiqueta funcional pequeña, no énfasis de copy).

## 🚧 / Decisiones abiertas

- Mapeo formal a tokens de tipo (display / h1-h6 / body / caption) al portar a Next.js.
- Coordinación con el design system de producto (capa 1 · usa Inter hoy).

---

*Última actualización: 2026-07-01. v1.0 · Onest + Hanken Grotesk confirmadas en la landing (Geon descartado · sin licencia web).*
