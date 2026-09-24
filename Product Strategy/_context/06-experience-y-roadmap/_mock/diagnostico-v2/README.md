# Mock del diagnóstico v2 — fuente

HTML con los tokens de marca (Onest + Hanken Grotesk vía Google Fonts · teal `#2E6E62` · off-white `#FFFCFA` · peach `#F4DED0` para tensión · mint `#BFE2D9`). Restaurante ficticio **Marea Baja**; todos los datos son de ejemplo y el documento lo declara.

| Archivo | Qué es | Págs. |
|---|---|---|
| `diagnostico-v2-ejemplo.html` | Primer diagnóstico, todos los documentos leídos (con el área de Compras desde el 23-sep) · es también el **diagnóstico de ejemplo de venta** | 5 |
| `diagnostico-v2-ejemplo_mes2.html` | Segundo diagnóstico, comparado contra la línea base (+ filas de compras) | 5 |
| `diagnostico-v2-ejemplo_sin-costeo.html` | Primer diagnóstico con solo recetario y menú (Inventario y Compras colapsados a una línea) | 4 |
| `bloque-cabecera.html` · `bloque-indices.html` · `bloque-numeros.html` | Los bloques de la pág. 1 aislados, para verlos grandes | — |

**Regenerar el PDF** (macOS, Chrome instalado; necesita red para las fuentes):

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="salida.pdf" "file://$PWD/diagnostico-v2-ejemplo.html"
```

Los PDF viven en `Product Strategy/_templates/_export/diagnostico-v2/` (gitignored). El spec que explica cada bloque: `../../01-diagnostico-v2-spec.md`.
