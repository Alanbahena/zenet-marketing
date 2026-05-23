---
name: Entorno regulatorio
description: Mapa del entorno regulatorio que rodea al operador casual independiente formal en MX (foco BC), su superficie de contacto con Zenet, y el riesgo regulatorio para Zenet como producto SaaS
type: market-research
last_updated: 2026-05-23
status: active
version: 1.0.1
owner: Alan Bahena
---

# Entorno regulatorio

Los seis documentos previos del subfolder mapearon **el mercado** — qué industria, qué tan grande, a quién atacamos primero, cómo se ve esa persona, cómo opera por dentro y con quién interactúa por fuera. Falta una capa que el documento de estructura y ecosistema dejó pendiente: **el marco institucional y normativo que rodea al operador**. Este documento cubre las obligaciones fiscales, laborales, sanitarias y municipales que un casual independiente formal carga en MX 2024-2026 con foco en BC, cómo Zenet se relaciona con ellas, y qué riesgo regulatorio carga Zenet como producto.

---

## Índice

**Propósito**

1. Propósito y cómo leer este mapa

**Bloque A — El entorno regulatorio del operador**
2. Régimen fiscal y obligaciones SAT
3. Obligaciones laborales y de seguridad social
4. Obligaciones sanitarias y de manejo de alimentos
5. Permisos municipales y estatales (foco BC)
6. Distintivos y certificaciones
7. Calendario fiscal-laboral-sanitario del operador

**Bloque B — Cómo el entorno regulatorio toca a Zenet**
8. Superficie de contacto Zenet ↔ regulación
9. Reformas y cambios regulatorios que amplifican el dolor (y la oportunidad)
10. Riesgo regulatorio para Zenet como producto SaaS

**Bloque C — Implicaciones estratégicas**
11. Implicaciones por capa regulatoria
12. El contador externo como bloqueador silencioso
13. Hipótesis abiertas y pendientes de validar
14. Fuentes consultadas

---

## 1. Propósito y cómo leer este mapa

### 1.1 Para qué existe el doc — los tres lentes

Este documento existe para contestar tres preguntas distintas con el mismo cuerpo de evidencia.

**Lente 1 — Contexto del ICP.** Qué obligaciones marcan el día y mes del dueño-operador casual independiente. La regulación moldea la data que ya está capturando, los incentivos para formalizarse, y los puntos de dolor donde Zenet entra. No es asesoría legal — es entender el terreno donde el operador opera.

**Lente 2 — Superficie de contacto Zenet.** Dónde Zenet *facilita el cumplimiento* sin pretender ser solución regulatoria. Datos limpios para auditorías SAT, evidencia de proceso para Distintivo H, exportes consolidados para el contador externo. La distinción es central: Zenet es facilitador, no certificador, no asesor fiscal.

**Lente 3 — Riesgo regulatorio para Zenet.** Como proveedor SaaS que procesa datos personales (recetarios, nóminas, ventas, identificadores de empleado), Zenet carga obligaciones propias bajo la nueva LFPDPPP 2025 y, eventualmente, bajo la regulación de IA en discusión en el Congreso. Lo cubrimos para que el equipo no tropiece con un marco que ya está vigente.

Las tres lentes operan sobre el mismo cuerpo de evidencia, pero responden a decisiones distintas: producto, mensajería, contratos, infraestructura.

### 1.2 Qué NO encontrarás aquí

- **Asesoría fiscal, contable o legal.** Este documento es descriptivo, no prescriptivo. No reemplaza al despacho contable, al despacho de privacidad, ni al abogado laboralista del operador o de Zenet.
- **Listados exhaustivos de NOMs aplicables al sector restaurantero.** Cubrimos las normas con impacto operativo directo en el casual independiente formal de 1-5 sucursales. Las NOMs sectoriales periféricas (envases específicos, equipo industrial pesado, etc.) quedan fuera.
- **Texto legal completo de los artículos citados.** Citamos artículo y fuente para que quien necesite el texto íntegro pueda ir a la fuente primaria.
- **Análisis de cumplimiento individualizado.** No determinamos si un operador específico está al día o no. Eso es trabajo del despacho contable del operador.
- **Detalle municipal exhaustivo de los 5 municipios BC.** Tijuana queda con cobertura razonable; Mexicali, Ensenada, Rosarito y Tecate quedan parcialmente cubiertos por ausencia de información publicada — los huecos están declarados explícitamente y se sugieren contactos en sección 13.

### 1.3 Convenciones de etiquetado de fuentes

Replicamos las convenciones del documento de estructura y ecosistema, con dos etiquetas adicionales propias del marco regulatorio:

- **[OFICIAL]** cuando la fuente es SAT, DOF, IMSS, STPS, COFEPRIS, PROFECO, gobierno municipal, o ley publicada.
- **[Dato MX casual independiente]** cuando hay fuente mexicana específica para el segmento.
- **[Dato MX sector restaurantero]** cuando la fuente es mexicana pero agregada al sector.
- **[SIN FUENTE PUBLICADA]** cuando la información no se localizó en fuente verificable y la presentamos como práctica común o interpretación, no como hecho establecido.
- **[Estimación cualitativa]** cuando la afirmación es razonada pero sin respaldo cuantitativo publicado.

Las citas inline siguen el formato `(Fuente, año)`. La lista completa de fuentes con URLs vive en la sección 14.

### 1.4 Relación con otros documentos del workspace

Este documento se apoya en:

- `02-definicion-y-alcance.md` — para el filtro de formalidad fiscal (RFC + CFDI 4.0 + 1+ año operando) que define al ICP.
- `04-segmentacion-de-mercado.md` — para los cinco sub-segmentos y el beachhead Sub-segmento B.
- `05-perfil-de-cliente-ideal.md` — para el ICP del beachhead, su día típico y su relación con el contador externo.
- `06-estructura-y-ecosistema.md` — sección 7 (resumen institucional y regulatorio) y sección 3.6 (estructura salarial y reformas laborales). Este documento *desarrolla* lo que la sección 7 declaró como pendiente.
- `Branding/_context/04-voice-and-tone/` — para la voz aplicada en cada cita y sub-sección.

Este documento alimenta:

- Decisiones de producto sobre integraciones con PAC, ingesta de CFDI, y módulos que generan evidencia de cumplimiento (sección 8).
- Mensajería de marketing y ventas — qué prometemos y qué no en materia de cumplimiento (sección 11.2).
- Decisiones de canal y partnership con despachos contables y consultores gastronómicos (sección 11.3).
- Documento legal interno de Zenet sobre su propio cumplimiento bajo LFPDPPP 2025 (sección 10).

---

## 2. Régimen fiscal y obligaciones SAT

El régimen fiscal define el costo administrativo y la carga impositiva del operador. Para un casual independiente formal en MX 2024-2026, las decisiones fiscales relevantes son tres: en qué régimen tributa, cómo cumple con CFDI 4.0 y sus complementos, y cómo navega la fiscalización digital intensificada que el SAT desplegó en 2026.

Esta sección desarrolla el marco fiscal con foco operativo. No reemplaza al contador externo del operador (ver sección 12 sobre el contador como bloqueador silencioso) ni al fiscalista de Zenet.

### 2.1 Regímenes fiscales aplicables al casual independiente

Tres regímenes son relevantes para un restaurante casual independiente formal con 1-5 sucursales:


| Régimen                                  | Tope de ingresos                    | Tasa ISR                                        | Cuándo conviene                                                                                          |
| ---------------------------------------- | ----------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **RESICO Persona Física**                | $3.5M anuales (SAT, 2024) [OFICIAL] | 1% a 2.5% sobre ingresos cobrados               | Operador con 1 sucursal o muy pequeño grupo, gastos deducibles bajos respecto a ingresos                 |
| **RESICO Persona Moral**                 | $35M anuales (SAT, 2024) [OFICIAL]  | 30% sobre utilidad fiscal con flujo de efectivo | Grupo PM con ingresos hasta $35M cuya utilidad real es modesta — paga ISR sobre lo cobrado, no devengado |
| **Régimen General Persona Moral**        | Sin tope                            | 30% sobre utilidad fiscal                       | Grupos con gastos deducibles >70% de ingresos o ingresos >$35M                                           |
| **Persona Física Actividad Empresarial** | Sin tope                            | Progresiva hasta 35% (Art. 152 LISR)            | Operador individual con deducciones personales relevantes; menos común en el segmento                    |


**Criterio de migración.** Si el operador supera el umbral de RESICO durante el ejercicio, sale del régimen al cierre y debe tributar bajo Régimen General desde el ejercicio siguiente (SAT, 2024) [OFICIAL]. La migración no es retroactiva, pero requiere planeación contable previa. La fricción operativa real es la del cambio de procesos contables, no la del costo fiscal mecánico.

**Implicación operativa.** Un Sub-segmento B típico (2-3 sucursales en consolidación, ingresos agregados $15-25M anuales) cabe cómodamente en RESICO PM si está estructurado como sociedad mercantil. Esa es la forma fiscalmente más eficiente de la mayoría del beachhead. Los operadores con 1 sucursal por debajo de $3.5M anuales suelen estar en RESICO PF.

**Lo que esto le importa a Zenet.** El régimen del operador determina cómo se calcula el ISR mensual y qué reportes contables consume internamente. Zenet no asesora sobre el régimen, pero la data que Zenet captura (ventas, costos, mermas, nómina) alimenta la base con la que el contador externo arma la declaración mensual. Cuanto más limpia la data Zenet, más rápido el cierre fiscal del operador.

### 2.2 CFDI 4.0 — emisión, recepción y complementos relevantes

**Versión vigente.** CFDI 4.0 obligatorio desde abril 2023 (SAT, 2023) [OFICIAL]. La versión 4.0 introdujo validación cruzada automática entre emisor y receptor, datos del régimen fiscal del cliente, y obligación de información sobre exportaciones cuando aplica.

**Tres tipos típicos del operador restaurantero.**


| Tipo                                               | Cuándo se emite                     | Particularidades                                                                       |
| -------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| Factura a público general                          | Consumo en mesa sin RFC del cliente | Se factura al RFC genérico XAXX010101000; concentrado al cierre del día                |
| Factura a persona física con actividad empresarial | Cliente B2B persona física          | Requiere RFC y régimen del cliente; aplica nota sobre Art. 28 fracc XX (ver más abajo) |
| Factura a persona moral                            | Cliente B2B persona moral           | Idem; comportamiento de deducción del cliente cambia                                   |


**Complementos relevantes para restaurante.**

- **Pagos.** Para documentar cobros en parcialidades o diferidos. Aplica cuando el restaurante atiende cuentas corporativas con crédito a 7-30 días.
- **Nómina.** Para pago de salarios y asimilados. Mensual mínimo, frecuentemente quincenal.
- **Carta Porte.** Para traslado de mercancías. Análisis dedicado en sección 2.3.

**Sanciones por incumplimiento.**

- $400 a $600 MXN por cada CFDI emitido sin complementos obligatorios (Art. 84 fracc IV CFF) [OFICIAL].
- A partir de 2026, el SAT puede **suspender el Certificado de Sello Digital (CSD)** del contribuyente con incumplimiento sistemático, lo que efectivamente impide seguir facturando hasta regularización (Reforma Fiscal 2026) [OFICIAL].

La suspensión del CSD es la sanción más operativamente grave: un restaurante sin CSD no puede emitir facturas, lo que en menos de 24 horas erosiona la relación con clientes corporativos que requieren CFDI inmediato.

### 2.3 Carta Porte — cuándo aplica al operador con CD interno

**Versión vigente.** Carta Porte 3.1, obligatorio desde el 17 de julio de 2024 (SAT, 2024) [OFICIAL].

**Aplicación al restaurante.** El complemento aplica al traslado de mercancías propias o de terceros. Para el operador casual independiente, el escenario relevante es el del **centro de distribución interno con flotilla propia que mueve insumos entre sucursales**, descrito en `06-estructura-y-ecosistema.md` sección 2 como variante estructural propia del extremo superior del scope Zenet (3-5 sucursales).

**Exenciones relevantes para operación local.**


| Condición                                                                   | Resultado                                                |
| --------------------------------------------------------------------------- | -------------------------------------------------------- |
| Traslado **sin** uso de caminos federales                                   | Exento del complemento Carta Porte (SAT, 2024) [OFICIAL] |
| Traslado con uso de camino federal **menor a 30 km** entre origen y destino | Exento si se cumple además la condición de vehículo      |
| Vehículo de carga **hasta tipo C2** (peso bruto vehicular ≤17,000 kg)       | Compatible con la exención de radio corto                |


**Caso operativo típico Tijuana.** Un grupo restaurantero con CD interno en Zona Urbana TJ que mueve mercancía a sucursales en Zona Río, Otay y Playas usando camionetas tipo C2 sin entrar a carretera federal **queda exento** del complemento Carta Porte. La regla de 30 km se aplicaría únicamente si el grupo abasteciera sucursales en Rosarito, Tecate o Ensenada vía la federal libre o la cuota.

**Lo que esto le importa a Zenet.** La mayoría de los grupos del scope core (Sub-segmento B, 2-3 sucursales en una misma plaza metropolitana) NO necesita emitir Carta Porte para sus traslados internos. Es relevante saberlo porque algunos operadores lo asumen como obligatorio y cargan complejidad innecesaria a su contador. La integración de Zenet con Carta Porte es **diferida** — solo se vuelve relevante si llegamos a operar con grupos que mueven mercancía interestatal o con flotilla mayor.

### 2.4 IVA — frontera norte y zona nacional

**Tasa nacional.** 16% sobre alimentos preparados servidos en establecimiento (SAT, LIVA Art. 2-A) [OFICIAL].

**Tasa frontera norte.** 8% en los estados de la región fronteriza norte, incluyendo los siete municipios de Baja California: Tijuana, Mexicali, Ensenada, Rosarito, Tecate, San Quintín y San Felipe (Decreto de Estímulos Fiscales Región Fronteriza Norte, renovado 31 dic 2025) [OFICIAL].

**Vigencia 2026.** El decreto de estímulos fiscales fue renovado el 31 de diciembre de 2025 y se mantiene vigente durante todo 2026 (DOF, 31 dic 2025) [OFICIAL].

**Requisito para mantener tasa 8%.** El establecimiento debe tener residencia fiscal y operativa en la región fronteriza norte. El beneficio aplica automáticamente a los siete municipios de BC; no requiere trámite adicional más allá de tener domicilio fiscal en zona elegible.

**Implicación operativa para BC.**

- El operador en BC factura con IVA 8% al consumidor final.
- El operador compra insumos al 8% si el proveedor está en zona fronteriza, o al 16% si compra a un proveedor del interior. Esa diferencia genera saldos a favor de IVA recurrentes que el contador del operador debe gestionar (acreditamiento o devolución).
- Un operador con expansión a CDMX, GDL o MTY enfrenta cambio de régimen efectivo de IVA: cada sucursal fuera de zona fronteriza factura al 16%. La sucursal del interior no contagia el beneficio del 8% a la del interior — son contribuciones separadas con tasas separadas.

**Lo que esto le importa a Zenet.** La diferencia 8%/16% es estructural en el costeo del operador BC y en su comportamiento de compra a proveedores. Cuando Zenet calcule food cost, debe ingerir el dato con la tasa de IVA aplicada al CFDI específico — no asumir tasa única. Para grupos multi-plaza con sucursales dentro y fuera de zona fronteriza, el cálculo de margen requiere segmentación por sucursal con IVA correcto.

### 2.5 ISR — cálculo, declaración y deducciones del giro

**Pagos provisionales mensuales.** El día 17 de cada mes (más días hábiles según sexto dígito del RFC) el contribuyente entera ISR provisional sobre los ingresos cobrados del mes anterior (SAT, 2024) [OFICIAL].

**Declaración anual.**


| Tipo de contribuyente | Fecha límite                                               |
| --------------------- | ---------------------------------------------------------- |
| Persona Moral         | 31 de marzo del año siguiente al ejercicio (SAT) [OFICIAL] |
| Persona Física        | 30 de abril del año siguiente al ejercicio (SAT) [OFICIAL] |


**Deducciones específicas del giro restaurantero.** No son una lista exhaustiva — son los rubros con tratamiento particular o con uso intenso en el segmento.


| Rubro                          | Tratamiento                                                                                   | Notas                                                        |
| ------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Insumos de cocina y bebidas    | 100% deducible                                                                                | Requiere CFDI del proveedor con uso fiscal correcto          |
| Nómina y prestaciones          | 100% deducible                                                                                | Incluye cuotas patronales IMSS, INFONAVIT                    |
| Renta del local                | 100% deducible                                                                                | Requiere CFDI de arrendamiento; ver retención en sección 2.6 |
| Equipo de cocina               | Depreciación 10% anual (LISR) [OFICIAL]                                                       | Cocina, refrigeración, hornos, cámaras frías                 |
| Mejoras al local arrendado     | Amortización conforme a LISR                                                                  | Adecuaciones, instalaciones de gas, ventilación, drenajes    |
| Vales de comida para empleados | Deducible si están disponibles para todos los trabajadores y cumplen Ley de Ayuda Alimentaria | Apalanca beneficio fiscal y refuerza retención               |
| Marketing y publicidad         | 100% deducible                                                                                | CFDI de proveedor con uso fiscal correcto                    |


**Nota lateral importante — Art. 28 fracc XX LISR (consumos en restaurantes).** Esta regla **NO es una restricción al restaurante**, es una restricción al **CLIENTE B2B que come en el restaurante**. La empresa cliente solo puede deducir el **8.5% del monto consumido**, y solo si pagó con tarjeta de crédito, débito o monedero electrónico autorizado. Pagos en efectivo no son deducibles para el cliente (LISR Art. 28 fracc XX) [OFICIAL].

¿Por qué importa para el restaurante? Porque el cliente corporativo a veces ignora la regla del 8.5% y asume que la factura le da deducción completa. Cuando descubre la realidad fiscal, frecuentemente la culpa cae sobre el restaurante por "no avisar". Es contexto relevante para el operador que atiende cuentas corporativas y eventos B2B — no es regla que el restaurante aplique, es contexto que ayuda a explicar fricción común con clientes que facturan.

### 2.6 Retenciones aplicables


| Concepto                                                   | Tasa                                       | Quién retiene               | Notas                                                                                         |
| ---------------------------------------------------------- | ------------------------------------------ | --------------------------- | --------------------------------------------------------------------------------------------- |
| Asimilados a salarios                                      | Tarifa Art. 96 LISR sin subsidio al empleo | Restaurante                 | Aplica a ingresos asimilables a salarios pagados por servicios subordinados sin nómina formal |
| Honorarios profesionales (chef externo, consultor)         | 10% ISR + 2/3 partes del IVA               | Restaurante PM              | Aplica cuando contrata a persona física con actividad profesional                             |
| Arrendamiento del local                                    | 10% ISR                                    | Restaurante (si renta a PF) | Aplica cuando el arrendador es persona física                                                 |
| RESICO Persona Física (cuando el restaurante PM le compra) | 1.25% ISR                                  | Restaurante PM              | Aplica al pagar a proveedor que tributa en RESICO PF                                          |


Las tasas son las vigentes 2024-2026; los porcentajes son sobre el monto del comprobante (excluyendo IVA cuando aplica).

**Implicación operativa.** Las retenciones generan obligación adicional de entero al SAT el día 17 del mes siguiente. Para un grupo con 4-5 sucursales que paga renta a persona física, asesoría externa y honorarios a chef consultor, las retenciones mensuales son rutina contable que el despacho consolida. La data limpia de pagos (proveedor, monto, concepto, IVA) que Zenet puede entregar al contador acelera ese proceso.

### 2.7 Buzón Tributario, e.firma y contabilidad electrónica

**Buzón Tributario.** Obligatorio para todas las personas morales inscritas en el RFC desde 2020 (SAT, 2020) [OFICIAL]. Es el canal oficial mediante el cual el SAT notifica auditorías, requerimientos, restricciones del CSD y cualquier acto administrativo.

**Frecuencia mínima de revisión recomendada.** 2-3 días para personas morales operativas. La omisión de consulta tiene consecuencia económica directa.

**Plazo para responder notificaciones.** 3 días hábiles desde la recepción del aviso electrónico (vigente hasta 2025). Para 2026 el plazo se amplía a **20 días hábiles** según la Reforma Fiscal 2026 (Cámara de Diputados, oct 2025) [OFICIAL]. La ampliación es alivio operativo concreto: pasa de "el contador revisa cada 3 días o expone al cliente" a "revisión semanal es viable".

**Sanciones.**


| Conducta                                   | Multa                                          |
| ------------------------------------------ | ---------------------------------------------- |
| Omitir consulta del Buzón Tributario       | $3,080 a $9,250 MXN (Art. 86-A CFF) [OFICIAL]  |
| No activar o no actualizar datos del Buzón | $3,850 a $11,540 MXN (Art. 86-A CFF) [OFICIAL] |
| Multas acumulables por aviso no revisado   | Sí — se suman por cada notificación pendiente  |


**e.firma.** Certificado digital obligatorio para emisión de CFDI, firma de declaraciones, trámites SAT y autoridades fiscales. Vigencia 4 años con renovación presencial o remota según condiciones del SAT. Para grupos con varios apoderados, la gestión de e.firma es cuello de botella recurrente cuando un apoderado deja la organización.

**Contabilidad electrónica.** Personas morales obligadas envían balanza de comprobación mensual y catálogo de cuentas en formato XML al SAT. La obligación pesa sobre el contador externo, no sobre el operador directamente — pero la calidad de la contabilidad electrónica depende de la calidad de la data operativa que el contador recibe.

### 2.8 Fiscalización digital intensificada 2024-2026

El SAT desplegó en 2026 una estrategia de fiscalización con tres componentes que tocan al sector restaurantero.

**Cruces automáticos masivos de CFDI.** Más del 70% de las auditorías federales 2026 se originan del análisis de CFDI emitidos vs CFDI recibidos vs ingresos declarados (cronista.com citando SAT, 2026). El modelo cruza facturación con depósitos bancarios, retenciones recibidas y comportamiento histórico del contribuyente.

**Visitas domiciliarias exprés.** Reactivadas en 2026 con duración máxima de 24 días hábiles. Durante la visita el SAT puede **restringir preventivamente** la emisión de CFDI del contribuyente investigado — efectivamente paralizando facturación hasta que la verificación concluya (Reforma Fiscal 2026) [OFICIAL].

**POS y validación cruzada.** Los restaurantes con más de 100 CFDI diarios entran a un grupo de validación cruzada automática del CFDI 4.0. Inconsistencias entre lo registrado en el POS y lo facturado generan banderas rojas que escalan a auditoría.

**Programa de auditorías SAT 2026 — Comunicado 53/2025.** `[Validado Perplexity Pro report 2026-05 §2.1 · update 2026-05-23]`

El SAT publicó el **Comunicado 53/2025 (20 octubre 2025)** estableciendo un programa transparente y risk-based de auditorías para 2026 (Deloitte, Russell Bedford, AMEXFAL, Siempre al Día, 2025) [OFICIAL]:

| Métrica | Cifra | Detalle |
|---|---|---|
| **Total auditorías planeadas 2026** | **16,200** | ~0.02% del padrón de 66.8 millones de contribuyentes |
| **PyME allocation** | **12,000** (74% del total) | Foco principal del programa |
| **Grandes contribuyentes** | 1,200 | Auditorías profundas a corporativos |
| **Comercio exterior** | 3,000 | Importadores/exportadores |
| **Modelo de selección** | **Algorítmico risk-based** | NO random — selección por behavioral indicators |

**Shift clave vs años previos:** las auditorías ya **no son samples aleatorios**. Solo contribuyentes con *"high-risk behaviors"* son seleccionados. Esto da advance predictability **pero también significa que un restaurant con fiscal hygiene genuinamente pobre enfrenta probabilidad materialmente más alta que el 0.02% headline.**

**Flags específicos restaurant-sector más relevantes al modelo SAT** `[Validado Perplexity §2.1]`:

- **Compras > Ventas** — insumo purchasing exceeding declared sales (structurally easy para restaurants comprando de mercados informales sin CFDI)
- **Tasa efectiva de ISR significantly below sector average** — comparación vs benchmark sector restaurantero
- **Inconsistencies entre delivery platform CFDI (Rappi · UberEats · DiDi) y own-POS declarations**
- **Recurrent fiscal losses despite continued operations** — pérdidas recurrentes sin cierre del negocio

**Casos públicos específicos del sector restaurantero.** [SIN FUENTE PUBLICADA] No se localizaron comunicados oficiales SAT de operativos exclusivos al giro restaurantero con cifras o casos específicos 2024-2026. La estrategia es general; el sector no tiene tratamiento especial publicado.

**Implicación operativa.** El operador casual independiente con 100+ CFDI diarios (típicamente Sub-segmento C y D del scope, 4-5 sucursales o multimarca) ya está dentro del rango donde el cruce automatizado opera. La presión por trazabilidad operativa entre POS, inventario y CFDI es estructural, no episódica.

**Lo que esto le importa a Zenet.** Es la palanca de mensajería más poderosa de toda esta sección. La fiscalización digital no es un riesgo abstracto — es la realidad operativa del operador en 2026. La promesa de Zenet (*"operación clara, ordenada, trazable"*) aterriza directamente en este contexto: un operador con data limpia y reconciliada entre POS, inventario y CFDI no le teme a la auditoría exprés. Un operador con data fragmentada sí. La sección 8 desarrolla cómo Zenet convierte este contexto en valor concreto.

### 2.9 Tratamiento fiscal de propinas — ambigüedad estructural unresolved

`[Validado Perplexity Pro report 2026-05 §2.2 · added 2026-05-23]`

Las propinas representan una **zona gris fiscal específica al sector restaurantero** sin resolución clara. Tres marcos en conflicto que el contable debe navegar **en cada payroll cycle**:

| Marco | Posición | Implicación |
|---|---|---|
| **SAT Criterio 43/ISR/N** | Propina es **salario** para efectos ISR | Retención ISR required |
| **SAT Criterio 33/IVA/N** | Propina es **non-base** para efectos IVA | NO IVA calculation |
| **Tribunal Colegiado 2021** | Ruling que cuestiona obligación retención | Conflicto con Criterio 43 |
| **PRODECON opinion** | Adds further complexity | Compliance gray zone |

**Implicación operativa.** El contable enfrenta judgment call en cada payroll. Audit exposure latente cuando un criterio aplica diferente que el otro. Un error de tratamiento puede generar discrepancia IVA · retención ISR · IMSS integration · todos simultáneamente.

**Addenda PROPINAS CFDI 4.0.** Existe una addenda formal para CFDI 4.0 (*Addenda PROPINAS*) que segrega propina amounts en el XML para que downstream systems reconcilien correctamente · pero **adoption among SMB POS systems is uneven** (FiscalCloud, 2024). La addenda PROPINAS es feature opcional · no obligatoria · muchos POS SMB no la implementan.

**Lo que esto le importa a Zenet.** Una capa potencial de Pain Reliever para el contable: si Zenet captura propinas con la addenda PROPINAS correctly en CFDI export, elimina una de las zonas grises más recurrentes del workflow contable restaurant-specific. NOT urgent para Phase 1 launch · es Phase 2 feature potential cuando se redacte feature roadmap.

---

## 3. Obligaciones laborales y de seguridad social

El segundo bloque regulatorio del operador es el laboral. Tres marcos coexisten y se aplican simultáneamente: la seguridad social (IMSS, INFONAVIT, FONACOT), el régimen laboral del trabajador (LFT con sus reformas 2023-2026), y las Normas Oficiales Mexicanas que la STPS emite para condiciones específicas de trabajo.

`06-estructura-y-ecosistema.md` sección 3.6 ya documentó la estructura salarial del segmento, las cifras de informalidad (44% cocineros sin IMSS, 73.2% del sector sin IMSS, 70% restaurantes sin SS) y la presión que generan las reformas 2024-2026 sobre el coste primario. Esta sección desarrolla la **obligación legal concreta** detrás de esos números: qué debe pagar el operador formal, en qué plazos, bajo qué normas, y dónde la reforma reciente cambió el terreno.

### 3.1 IMSS — registro patronal, cuotas y prima de riesgo

**Registro patronal.** Toda persona física o moral que contrata trabajadores debe registrarse como patrón ante el IMSS y obtener su número de registro patronal. La obligación nace con el primer trabajador subordinado y se extiende a alta del trabajador en los **5 días hábiles** siguientes al inicio de la relación laboral (LSS Art. 15 fracc I) [OFICIAL].

**Clasificación de riesgo de trabajo.** El IMSS clasifica los centros de trabajo en cinco clases según el riesgo del giro. Los restaurantes se ubican típicamente en **Clase IV** (riesgo alto) por la combinación de manejo de cuchillería, fuego, superficies calientes, aceite hirviendo y movimiento físico intenso (factorial.mx, 2024).

**Prima media de la Clase IV.** 4.65325% sobre el Salario Base de Cotización (contadormx, 2026). Es la prima aplicable cuando el patrón inicia operaciones o cuando se determina la prima media del giro. Una vez establecida, la prima se ajusta cada año según la siniestralidad real del centro de trabajo.

**Determinación anual.** Cada año, en el mes de febrero, el patrón presenta la **Determinación Anual de la Prima en el Seguro de Riesgos de Trabajo** ante el IMSS. La prima determinada tiene vigencia del **1 de marzo del año en curso al 28 de febrero del año siguiente** (LSS Art. 74; asconsultinggroup, 2026) [OFICIAL]. Es trámite que el contador externo gestiona, pero requiere data de accidentes e incidencias del año previo — lo que el operador debió haber registrado.

**Desglose de cuotas obrero-patronales 2026 para Clase IV.**

| Concepto | Patrón | Obrero | Notas |
|---|---|---|---|
| Riesgos de trabajo | 4.65325% (prima media Clase IV) | 0% | Prima ajustable según siniestralidad |
| Enfermedades y maternidad — cuota fija | 20.40% sobre 1 UMA | 0% | Aplica hasta 3 SMGV de SBC |
| Enfermedades y maternidad — cuota adicional | 1.10% | 0.40% | Sobre diferencia entre SBC y 3 UMAs |
| Cesantía en Edad Avanzada y Vejez (CEAV) | Variable según tramo SBC: 6.026% a 7.513% | 1.125% | Tramos crecientes con SBC en UMAs |
| Retiro | 2.00% | 0% | Sobre SBC |
| Invalidez y vida | [SIN FUENTE PUBLICADA] vigente 2026 | — | Tasa típica histórica ~1.75% patrón / 0.625% obrero |
| Guarderías y prestaciones sociales | [SIN FUENTE PUBLICADA] vigente 2026 | 0% | Tasa típica histórica 1.00% patrón |

Las cifras vigentes 2026 están publicadas por el IMSS y consolidadas por contadormx (2026). Los rubros marcados con [SIN FUENTE PUBLICADA] no se localizaron en fuente oficial específica para 2026 en este research; el contador del operador maneja los porcentajes vigentes mes a mes.

**Implicación operativa.** Para un cocinero con SBC promedio en BC ($14,000-$22,000 MXN mensual), la cuota patronal mensual al IMSS oscila típicamente entre $4,500 y $8,000 MXN, dependiendo de SBC exacto y de la prima de riesgo determinada del año. Esa cifra está sobre el sueldo bruto y representa entre **30-40% adicional al costo nominal de nómina**. Es la "carga social" estructural que muchos operadores informales eluden y que el operador formal carga en su P&L.

### 3.2 INFONAVIT y FONACOT

**INFONAVIT.** El patrón aporta el **5% sobre el SBC** de cada trabajador al Fondo Nacional de Vivienda (Ley INFONAVIT Art. 29) [OFICIAL]. Es aporte exclusivamente patronal — el trabajador no aporta. El entero es bimestral.

**FONACOT.** El registro como centro de trabajo afiliado al Fondo de Fomento y Garantía para el Consumo de los Trabajadores es obligatorio para todo patrón con trabajadores subordinados (LFT Art. 132 fracc XXVI Bis). La afiliación no implica aportación obligatoria del patrón; sí implica obligación de retener y enterar al FONACOT cuando el trabajador toma un crédito de la institución. La cuota patronal específica vigente 2026 [SIN FUENTE PUBLICADA] no se localizó en este research.

**Implicación operativa.** El 5% de INFONAVIT, sumado a las cuotas IMSS, lleva la carga social total a aproximadamente 35-45% sobre el SBC. Es la diferencia más visible entre el operador formal y el informal, y la que más erosiona la utilidad del operador honesto frente al competidor que paga "por debajo del agua".

### 3.3 Reformas laborales 2023-2026

`06-estructura-y-ecosistema.md` sección 3.6 ya cubrió el impacto operativo. Aquí se documenta el estatus legal preciso de cada reforma a abril 2026.

| Reforma | Estatus | Fecha de vigor | Contenido relevante |
|---|---|---|---|
| **Vacaciones dignas** | Vigente | 1 ene 2023 [OFICIAL] | De 6 a 12 días al primer año, escalando hasta 20 días. 12 días consecutivos obligatorios salvo solicitud del trabajador para distribuirlos (DOF, 27 dic 2022) |
| **Propinas en salario mínimo** | Aprobada en Cámara de Diputados 28 abr 2025; **pendiente en Senado** a abr 2026 | No vigente | El establecimiento debe garantizar el salario mínimo completo sin contar propinas como parte del ingreso base. Si pasa, elimina la práctica común de "sueldo simbólico + propinas" |
| **Reducción de jornada laboral** | En proceso legislativo, **no aprobada** a abr 2026 | No vigente | Propuesta: de 48 a 40 horas semanales con dos días de descanso obligatorio |
| **Salario mínimo 2026** | Vigente | 1 ene 2026 [OFICIAL] | Nacional $315.04/día (+13% vs 2025); frontera norte BC $440.87/día (+5% vs 2025) |

**Implicación operativa para el segmento.**

- El **+13% al salario mínimo nacional** y **+5% en frontera norte** ya están en los costos del operador desde enero 2026. La presión sobre coste primario es real y CANIRAC la nombró públicamente como uno de los retos centrales del año (AbasturHub, 2026).
- La reforma de **propinas en SM**, si pasa el Senado, transforma la nómina de los meseros: deja de ser legal el "sueldo simbólico de $400/semana + propinas". El operador tendría que garantizar el SM completo independientemente de las propinas. Para un grupo de 4 sucursales con 30 meseros, eso son $120,000-$200,000 MXN mensuales adicionales en nómina nominal.
- La **reducción de jornada** sigue en discusión. Si llega a aprobarse, la implicación sería contratar más personal para cubrir las mismas horas operativas — en un contexto donde el sector arrastra déficit de 500,000 trabajadores (CANIRAC vía El Economista, 2026).

### 3.4 NOMs laborales aplicables al restaurante

Las Normas Oficiales Mexicanas de la STPS son obligatorias y se verifican por inspección. Cuatro tienen impacto operativo directo en restaurante.

**NOM-035-STPS-2018 — Factores de riesgo psicosocial.**

Obliga al patrón a identificar, analizar y prevenir factores de riesgo psicosocial, y a promover un entorno organizacional favorable. Las obligaciones se diferencian según número de trabajadores (centros con menos de 15, de 16 a 50, y más de 50). Sanciones: 250 a 5,000 UMAs, equivalente a aproximadamente $27,000 a $543,000 MXN en 2024 (wellhub, 2024).

**NOM-030-STPS-2009 — Servicios preventivos de seguridad y salud.**

Obliga al patrón a integrar servicios preventivos. En centros con **menos de 100 trabajadores**, el patrón puede asumir directamente las funciones del servicio preventivo (STPS, Guía Informativa NOM-030) [OFICIAL] — caso aplicable al 100% del scope Zenet. El patrón debe contar con:

- Diagnóstico integral de condiciones de seguridad y salud, por área del centro de trabajo.
- Programa de seguridad y salud en el trabajo elaborado a partir del diagnóstico.
- Actualización del programa **al menos una vez al año** [OFICIAL].
- Evidencia de capacitación al personal involucrado (constancias DC-3).
- Relación de acciones preventivas y correctivas implementadas.

Sanciones específicas por incumplimiento [SIN FUENTE PUBLICADA] no se localizaron con desglose preciso en este research.

**NOM-019-STPS-2011 — Comisiones de seguridad e higiene.**

Aplica desde **un trabajador** — todos los centros de trabajo con uno o más empleados deben constituir comisión de seguridad e higiene (STPS) [OFICIAL]. Esto contradice la creencia común de "con menos de 15 trabajadores no aplica". Sí aplica.

Para centros con **menos de 15 trabajadores**, la integración mínima es: un trabajador (elegido por los trabajadores) + el patrón o su representante. Actas requeridas:

- Acta constitutiva de la comisión.
- Actas de recorridos de verificación.
- Investigación de accidentes y enfermedades de trabajo.
- Propuestas de medidas preventivas y correctivas.

**NOM-017-STPS-2024 — Equipo de protección personal (EPP).**

Publicada en DOF el 28 de marzo de 2025; entró en vigor el **28 de septiembre de 2025** [OFICIAL]. Obliga a la selección, uso y manejo de EPP basado en evaluación integral de riesgos físicos, químicos, biológicos y ergonómicos del centro de trabajo.

Evidencias requeridas: análisis de riesgos documentado, registros de entrega de EPP a cada trabajador, capacitación en uso correcto. Para restaurante: guantes térmicos, calzado antiderrapante, mandil resistente, protección visual cuando aplica.

**Implicación operativa.** Las cuatro NOMs requieren documentación, capacitación y actas que un operador casual independiente típico **no genera de forma sistemática**. La realidad de cumplimiento parcial del segmento (declarada en doc 06) se materializa aquí: la mayoría de los operadores cumplirían si una inspección STPS llegara, pero no llegan a ese nivel hasta que llega la inspección. La data y los registros que Zenet captura para fines operativos (fichas técnicas, capacitaciones impartidas, control de procesos) generan sub-producto regulatorio: evidencia para NOM-030 y NOM-251.

### 3.5 Capacitación obligatoria — DC-3 y DC-4

**DC-3 (Constancia de Competencias o de Habilidades Laborales).** Documento individual que acredita que un trabajador específico cursó y aprobó una capacitación específica. Se emite por cada capacitación recibida. Obligatorio bajo LFT Art. 153-V.

**DC-4 (Lista de Constancias).** Informe consolidado que el patrón presenta a la STPS con el listado de todas las DC-3 expedidas en un periodo. Es el aviso oficial de que el patrón cumplió con la obligación de capacitación.

**Diferencia operativa.** DC-3 es el documento del trabajador (uno por capacitación). DC-4 es el reporte del patrón a la autoridad (uno consolidado). Si la inspección STPS pide evidencia de capacitación, busca DC-3 individuales y DC-4 que las consolide.

**Casos de uso típicos en restaurante.** Capacitación en manejo higiénico de alimentos (vincula con Distintivo H y NOM-251), manejo seguro de cuchillos y equipo de cocina, primeros auxilios, brigadas de emergencia, NOM-035 sobre riesgo psicosocial.

### 3.6 Subcontratación y outsourcing — reforma 2021

**Vigor.** La reforma a la LFT en materia de subcontratación se publicó en DOF el 23 de abril de 2021 y entró en plena vigencia el 1 de septiembre de 2021 (acsan, 2021) [OFICIAL].

**Lo que prohibió.** La **subcontratación de personal** en sentido estricto — es decir, la figura clásica del "outsourcing" donde una empresa contrata a otra para que le suministre trabajadores que ejecutan la actividad principal del contratante — quedó **prohibida** (factorial, 2021) [OFICIAL].

**Lo que permitió.** Los **servicios u obras especializadas** que **no formen parte del objeto social ni de la actividad económica preponderante** del contratante. Para un restaurante, esto típicamente incluye:

- Vigilancia.
- Limpieza.
- Eventos especiales (catering inverso, banquetes externos).
- Servicios técnicos especializados (mantenimiento de cámaras, refrigeración, gas).

**REPSE — Registro de Prestadoras de Servicios Especializados u Obras Especializadas.** Toda empresa que preste servicios especializados a terceros debe estar inscrita en el REPSE de la STPS y mantener su registro vigente. Cada tres años se renueva.

**Obligaciones del restaurante contratante.**

- Verificar que el proveedor tenga REPSE vigente antes de contratar.
- Verificar que el proveedor esté al corriente con SAT, IMSS e INFONAVIT.
- Firmar contrato por escrito con objeto, alcance y personal involucrado.
- Validar que la actividad contratada efectivamente NO forme parte de la actividad económica preponderante del restaurante (cocinero subcontratado = no permitido; vigilante subcontratado = permitido).

**Responsabilidad solidaria.** Si el proveedor incumple obligaciones laborales, fiscales o de seguridad social, el restaurante contratante responde solidariamente (LFT Art. 13). Esto significa que un restaurante que contrata a una empresa de limpieza sin REPSE vigente o sin pagar IMSS a sus empleados puede ser obligado a pagar las prestaciones del trabajador del proveedor.

**Implicación operativa.** El operador casual independiente que terceriza vigilancia, limpieza o eventos carga el riesgo legal del cumplimiento del proveedor. Esto pesa especialmente sobre grupos con 3-5 sucursales que externalizan servicios para no inflar nómina. La práctica común — contratar a la empresa de limpieza más barata sin verificar REPSE — es exposición legal directa. La mensajería de marketing que usa esto como gancho ("Zenet te ayuda a centralizar contratos y verificar proveedores con REPSE vigente") tendría que materializarse en feature de producto, no es promesa que la herramienta entrega hoy.

---

## 4. Obligaciones sanitarias y de manejo de alimentos

El tercer bloque regulatorio del operador es el sanitario. Tres autoridades concurren: **COFEPRIS** a nivel federal, **COEPRIS BC** a nivel estatal (que coordina con COFEPRIS), y **sanidad municipal** en cada ayuntamiento BC. La norma técnica que articula la operación cotidiana es la **NOM-251-SSA1-2009**, que define las prácticas de higiene en el procesamiento de alimentos, bebidas y suplementos. Junto a ésta, la **NOM-051** rige el etiquetado de productos preenvasados que el restaurante venda como tales, y **PROFECO** vigila la relación con el consumidor (precios, publicidad, propinas).

Esta sección desarrolla las obligaciones del marco sanitario con foco operativo. La sección 6 cubre los **distintivos voluntarios** (Distintivo H, Moderniza, Punto Limpio, ServSafe) que se construyen sobre este piso normativo.

### 4.1 COFEPRIS y COEPRIS BC

**Aviso de funcionamiento.** Toda persona física o moral que opera un establecimiento que procesa, almacena, distribuye o vende alimentos debe presentar **aviso de funcionamiento** ante COFEPRIS al inicio de operaciones (Reglamento de la Ley General de Salud) [OFICIAL]. Es trámite gratuito, vía electrónica, sin renovación periódica salvo cambio de razón social, domicilio o giro.

**Alcance de la verificación COFEPRIS.**

- Manejo higiénico de alimentos (NOM-251).
- Etiquetado y publicidad (NOM-051 y disposiciones de la Ley General de Salud).
- Condiciones de las instalaciones, equipo, personal.
- Control de plagas y agua de uso humano.

**COEPRIS BC.** Comisión Estatal para la Protección Contra Riesgos Sanitarios. Es la contraparte estatal de COFEPRIS en BC y la autoridad que en la práctica visita los establecimientos. Imparte cursos obligatorios de capacitación de manejadores de alimentos a $446 MXN por persona con cupo máximo de 20 personas por curso (COEPRIS BC, 2025) [OFICIAL].

**Periodicidad de inspecciones — el dato más concreto del bloque sanitario BC.**

> *"Los restaurantes reciben al menos 5 inspecciones al mes por parte de COEPRIS."* — Rebeca Aguilar Santuario, Presidenta CANIRAC TJ, abril 2026 (Oem, La Voz de la Frontera, 2026).

Esta cifra, declarada por la dirigencia gremial al periódico local, encuadra la realidad del operador casual independiente formal en BC: **la inspección sanitaria no es evento raro**. Es ritmo. Cinco visitas al mes implican que cualquier deficiencia sostenida en bitácoras, capacitación o instalaciones se va a documentar, no por excepción sino por probabilidad.

**Implicación operativa.** El operador BC vive bajo presión sanitaria sostenida. La diferencia entre el operador que opera con bitácoras al día y el que improvisa en el momento de la inspección no es académica — es el costo de una clausura ($1.13M MXN máximo, ver siguiente sub-sección) o el costo de un día de operación cerrada.

### 4.2 NOM-251-SSA1-2009 — prácticas de higiene

**Alcance.** Es la norma técnica obligatoria que define las prácticas de higiene en el procesamiento de alimentos, bebidas y suplementos. Aplica a **todos los establecimientos** que procesen alimentos para consumo humano, incluyendo restaurantes (DOF, 2009) [OFICIAL].

**Obligaciones operativas concretas.**

| Categoría | Requisito |
|---|---|
| Instalaciones | Pisos, paredes y techos lavables; flujo limpio de procesos (separación entre crudo y cocido); sanitarios funcionales y separados del área de producción |
| Equipo | Termómetros funcionales y calibrados periódicamente; cámaras de refrigeración con control de temperatura; utensilios sin óxido, astillas ni soldaduras expuestas |
| Agua | Calidad sanitaria garantizada; análisis o contrato de potabilización vigente; bitácora de limpieza de tinaco |
| Control de plagas | Barreras físicas (mosquiteros, sellos); servicio profesional documentado; evidencia con folio del proveedor |
| Personal | Capacitación documentada en higiene; uniformes limpios; controles de salud; lavado de manos protocolizado |

**Bitácoras y registros obligatorios.**

- Plan de limpieza por área con firmas diarias.
- Bitácora de temperaturas de refrigeración (cada cámara, mínimo 2 lecturas/día) y de cocción.
- Formato de recepción de materias primas con aceptación o rechazo y temperatura de llegada.
- Bitácora de mantenimiento de equipos y calibración de termómetros.
- Registros de control de plagas (folios del proveedor, frecuencia).
- Registros de capacitación del personal con DC-3 cuando aplique.

**Sanciones.**

- Multas hasta **$1,132,400 MXN** por incumplimiento (capacitaciondepersonal, 2024).
- COFEPRIS realizó **3,847 clausuras** en 2024 por incumplimiento de NOM-251 (capacitaciondepersonal, 2024) [Dato MX sector restaurantero].
- La autoridad fiscalizadora puede ser COFEPRIS, COEPRIS BC o sanidad municipal según el caso.

**Implicación operativa.** Las bitácoras son la principal carga administrativa silenciosa de NOM-251. En un restaurante casual independiente típico operando sin sistema, el cumplimiento se hace "el día antes de la inspección" — alguien copia de memoria temperaturas y firmas sobre formatos en blanco. La inspección competente lo detecta. Las bitácoras al día, generadas por el flujo de trabajo cotidiano, son sub-producto natural de un operador sistematizado — y son exactamente lo que Zenet captura para fines operativos sin que el operador tenga que duplicar registros.

### 4.3 NOM-051 — etiquetado frontal de productos preenvasados

**Alcance general.** La NOM-051-SCFI/SSA1-2010 (modificada en 2020 con la reforma del etiquetado frontal de advertencia) regula el etiquetado de productos **preenvasados destinados al consumidor final** (DOF, 2010 con reformas 2020) [OFICIAL].

**¿Aplica a un restaurante?**

| Caso | Aplica NOM-051 |
|---|---|
| Plato servido en mesa para consumo en local | **No.** El plato no es producto preenvasado al consumidor final |
| Bebida preparada al momento (cóctel, jugo, café) | **No.** Idem |
| Salsa, mermelada, postre o producto de panadería **propio**, **empacado**, vendido en exhibidor para llevar | **Sí.** Es producto preenvasado destinado al consumidor final |
| Producto preempacado del proveedor que el restaurante revende sin transformación | **Sí**, pero la responsabilidad del etiquetado es del fabricante, no del restaurante |
| Etiquetas internas de almacén de cocina (uso operativo, no destinado al consumidor) | **No.** Uso interno operativo no está sujeto a sellos de advertencia frontal |

**Qué exige cuando aplica.**

- Sellos de advertencia frontal cuando el producto excede los límites de calorías, azúcares, grasas saturadas, sodio o grasas trans.
- Declaración nutrimental por porción y por 100g/100ml.
- Lista de ingredientes en orden decreciente de proporción.
- Información del fabricante o responsable.

**Implicación operativa.** La NOM-051 toca al operador casual independiente solo en un caso específico: cuando comercializa producto propio empacado para llevar (panadería interna que vende rebanadas en exhibidor, salsas embotelladas con marca propia, postres en empaque rígido para take-away). Es nicho dentro del scope, pero en crecimiento — los grupos con identidad fuerte tienden a desarrollar producto propio para reforzar marca. Si Zenet llega a un grupo con esta práctica, la advertencia es: empacar y vender producto propio activa la NOM-051, y eso requiere análisis nutrimental, diseño de etiqueta y cumplimiento de sellos. Es trabajo que el operador frecuentemente subestima.

### 4.4 PROFECO — precios, publicidad y propinas

PROFECO es la autoridad federal que vigila la relación restaurante-consumidor. Su jurisdicción no es sanitaria sino de protección al consumidor: precios, publicidad, comprobantes y prácticas comerciales.

**Obligaciones vigentes 2026.**

| Obligación | Detalle |
|---|---|
| Exhibición de precios | Precios deben mostrarse de forma clara y visible **con IVA incluido** (PROFECO, 2026) [OFICIAL] |
| Moneda | Exhibición en pesos mexicanos obligatoria; pueden exhibirse adicionalmente en USD en zonas turísticas con su equivalente en MXN |
| Comprobante de consumo | Obligación de entregar comprobante (no necesariamente CFDI — el comprobante de consumo es el ticket) |
| Paquetes y menús cerrados | Deben respetar exactamente lo anunciado (precio final, platillos incluidos, condiciones aplicables) |
| Formas de pago | Deben especificarse las formas aceptadas |
| Propina | **Voluntaria.** No puede cobrarse de forma automática ni incluirse en la cuenta sin consentimiento del cliente |

**Sanciones recientes.**

- **Propina automática:** multas de $311 hasta más de **$3 millones de pesos** según gravedad y reincidencia (Crónica, abril 2026) [Dato MX sector restaurantero].
- PROFECO emitió advertencia oficial pública en abril 2026 sobre sanciones millonarias a establecimientos que cobren propina obligatoria.
- Verificaciones intensificadas en 2026 con foco en derechos del consumidor.

**Implicación operativa.** El comportamiento más sancionado en 2026 es el de incluir propina automática en la cuenta. El operador BC que opera con clientela parcialmente USA-residente (turismo cross-border en TJ, Rosarito, Ensenada) carga el hábito de la propina automática como práctica norteamericana. Es práctica que en MX está prohibida y multable. La línea correcta: sugerencia explícita ("propina sugerida 10/15/20%") con casilla para que el cliente elija o tache.

**Lo que esto le importa a Zenet.** PROFECO no toca el back-of-house de Zenet — toca el front (POS, menú, ticket). No es zona Zenet directa. Sí es contexto que el operador y su gerente deben conocer y que un POS bien configurado (Parrot, PoloTab, SoftRestaurant) ya gestiona. Cuando Zenet integre con POS para ingerir ventas, la data que recibe ya viene "limpia" de este lado.

### 4.5 IEPS bebidas alcohólicas

**Tasas vigentes 2026.**

| Graduación alcohólica | Tasa IEPS |
|---|---|
| Hasta 14° GL (cerveza, vinos de mesa típicos) | 26.5% (LIEPS) [OFICIAL] |
| Más de 14° y hasta 20° GL (vinos fortificados, sake) | 30% (LIEPS) [OFICIAL] |
| Más de 20° GL (destilados: tequila, mezcal, ron, whisky, ginebra, vodka) | 53% (LIEPS) [OFICIAL] |

**Quién retiene IEPS.** El IEPS se causa al momento de **enajenación o importación** de la bebida alcohólica. Lo paga el productor o el importador, no el restaurante (LIEPS Art. 1) [OFICIAL]. El restaurante compra la bebida con IEPS ya causado e incluido en el costo de adquisición, y lo traslada al consumidor final dentro del precio de venta — sin desglosarlo en el CFDI emitido al cliente.

**Cómo se factura.** El restaurante emite CFDI de ingreso por la venta del platillo o la bebida con IVA correspondiente (8% o 16% según región). No desglosa IEPS porque el impuesto ya está incorporado en el costo de adquisición y, por tanto, en el precio de venta.

**Implicación operativa.** El IEPS no es trámite del operador, pero sí es estructura de costo. Las bebidas destiladas (53% IEPS) tienen margen estructuralmente más comprimido respecto a su precio de proveedor que las bebidas de hasta 14° GL (26.5% IEPS). Cuando Zenet calcule food cost y costo de bebidas, debe entender que la base sobre la que se calcula el costo ya trae IEPS embebido — no es costo "limpio". Para análisis de margen real, las categorías de bebida alcohólica deben separarse por tasa de IEPS, no consolidarse como una sola línea. Es nivel de granularidad que un POS típico no entrega y que Zenet puede aportar.

---

## 5. Permisos municipales y estatales (foco BC)

El cuarto bloque regulatorio es el municipal. A diferencia de SAT, IMSS y COFEPRIS — autoridades federales con reglas idénticas en todo el país —, el marco municipal cambia entre los cinco municipios de BC. Cada Ayuntamiento (Tijuana, Mexicali, Ensenada, Rosarito, Tecate) emite su propio Reglamento de Bebidas Alcohólicas, su propio tabulador de derechos en la Ley de Ingresos Municipal anual, y su propia política de zonificación.

**Honestidad sobre la cobertura de esta sección.** La información publicada por los ayuntamientos varía mucho. Tijuana tiene cobertura razonable: portal municipal estructurado, reglamentos accesibles, Ley de Ingresos publicada. Los otros cuatro municipios — Mexicali, Ensenada, Rosarito y Tecate — tienen información parcial, dispersa o no publicada digitalmente. Esta sección desarrolla TJ como referencia y declara explícitamente los huecos en los otros cuatro, con sugerencias de contacto para investigación de campo cuando un operador real esté en proceso de apertura. Es decisión consciente: preferimos hueco honesto sobre inferencia inventada.

### 5.1 Licencia de funcionamiento — Tijuana

**Tipos.**

| Giro | Trámite |
|---|---|
| Restaurante sin venta de alcohol | Licencia de operación básica |
| Restaurante con venta de alcohol | Licencia de operación + permiso de bebidas alcohólicas (trámite separado) |

**Costos vigentes 2024-2026.**

- **Licencia de operación básica:** $427 MXN (modalidad apertura inmediata, vigencia 90 días renovable a definitiva) (TJ, portal de trámites) [OFICIAL].
- **Permiso de bebidas alcohólicas para restaurante:** $350,000 a $450,000 MXN dependiendo del tipo y zona (Zeta Tijuana, marzo 2026) [Dato MX local].
- **Refrendo anual del permiso de alcohol:** sujeto a la Ley de Ingresos Municipal del año en curso (Ayuntamiento TJ, Reglamento de Bebidas Alcohólicas) [OFICIAL].

**Requisitos típicos para licencia de operación.**

- RFC del operador.
- Comprobante de domicilio del establecimiento.
- Acta constitutiva (personas morales).
- Identificación oficial del representante legal.
- Dictamen de uso de suelo favorable (Dirección de Administración Urbana).
- Certificado de Medidas de Seguridad de Protección Civil.
- Fotografías del local.
- Licencia de construcción cuando el inmueble tiene menos de 5 años.

**Vigencia.**

- Licencia de operación definitiva: **permanente** una vez consolidada (Ayuntamiento TJ) [OFICIAL].
- Permiso de alcohol: vigencia anual con refrendo.

**Tiempo promedio de obtención.**

- Modalidad apertura inmediata: 90 días.
- Permiso de alcohol: variable, frecuentemente meses, sujeto a análisis del Cabildo (Ayuntamiento TJ, Dirección de Bebidas Alcohólicas) [OFICIAL].

**Reforma propuesta 2026.** El Ayuntamiento TJ planteó facilitar el pago del permiso de alcohol en plazos, comenzando con un anticipo del 50% para grupos vulnerables (Rosarito Noticias BC, 2026) — propuesta no aprobada al cierre de este documento.

### 5.2 Permisos de alcohol BC — tipos, costos y transferibilidad

**Tipos de licencia en Tijuana** (Ayuntamiento TJ, Reglamento de Bebidas Alcohólicas) [OFICIAL]:

| Giro | Característica |
|---|---|
| Restaurante | Venta de cerveza, vinos y licores con alimentos como actividad principal |
| Restaurante-bar | Servicio de bar como complemento (frecuente en hoteles y moteles) |
| Café cantante | Giro utilizado por bares; costo de alta superior al millón de pesos |
| Bar turístico, bar-terraza, centro de espectáculos | Giros especializados con régimen propio |

**Costos de alta TJ 2026** (Zeta Tijuana, marzo 2026) [Dato MX local]:

| Giro | Costo de alta MXN |
|---|---|
| Cerveza artesanal | $50,000 |
| Abarrotes con venta de envase cerrado | $250,000 |
| Restaurante | $350,000 a $450,000 |
| Café cantante (uso típico de bares) | Más de $1,000,000 |

**Transferibilidad.** Los permisos pueden cambiar de titular mediante autorización del Secretario de Gobierno Municipal previa verificación del cumplimiento de requisitos del nuevo titular (Ayuntamiento TJ) [OFICIAL]. La transferibilidad es valor económico real: un permiso de restaurante con alcohol vigente y al corriente en TJ tiene valor de mercado por encima de su costo nominal de alta, especialmente en zonas con cupos cerrados.

**Moratoria Zona Norte Tijuana.**

Desde abril de 2024, el Ayuntamiento TJ decretó una **moratoria de 6 años** que suspende la emisión de nuevos permisos de uso de suelo, licencia de operación y permiso de bebidas alcohólicas para restaurantes, bares, fondas, loncherías y giros similares en un polígono de aproximadamente 15 cuadras de la Zona Norte (Punto Norte, abril 2024) [Dato MX local]. Los solicitantes con derechos previos al decreto tuvieron 60 días para presentar documentación.

**Implicación operativa.** Para el ICP del beachhead (Sub-segmento B, 2-3 sucursales en consolidación), la moratoria Zona Norte cierra una zona viable de expansión. El operador que tenía proyectado abrir una segunda sucursal en esa zona debe replantear plaza. Para grupos chef-driven con identidad ya establecida en Zona Río o Zona Centro extendida, la moratoria es contexto pero no obstáculo directo. Para evaluar si un operador potencial está dentro o fuera del polígono, hay que cruzar dirección con cartografía oficial del decreto.

**Otros municipios BC — moratorias o cupos cerrados.** [SIN FUENTE PUBLICADA] No se localizó información publicada 2024-2026 sobre moratorias o cupos cerrados en Mexicali, Ensenada, Rosarito o Tecate.

### 5.3 Otros municipios BC — Mexicali, Ensenada, Rosarito, Tecate

**Mexicali.**

Información publicada disponible: uso de suelo, declaración de apertura, licencia de funcionamiento (obligatoria solo si hay venta de alcohol), vigencia aproximada de licencias de alcohol de 3 años. Costos específicos, tiempo promedio y refrendo anual: [SIN FUENTE PUBLICADA] en este research.

**Sugerencia de contacto:** Sindicatura Municipal de Mexicali, Dirección de Ingresos del Ayuntamiento, CANIRAC delegación Mexicali.

**Ensenada.**

Antecedente relevante: durante la administración 2021-2024 al menos 50 establecimientos operaron años en irregularidad por permisos detenidos; la administración 2024-2027 realizó entrega masiva de permisos rezagados (Zeta Tijuana, marzo 2026). Costos específicos, requisitos detallados, vigencia y tiempo: [SIN FUENTE PUBLICADA] en este research.

**Sugerencia de contacto:** Sindicatura Municipal de Ensenada, Oficialía Mayor del Ayuntamiento, CANIRAC delegación Ensenada.

**Rosarito.**

Cuenta con Reglamento para Venta, Almacenaje y Consumo de Bebidas Alcohólicas; los permisos los expide el Ayuntamiento (Ayuntamiento Rosarito, 2022) [OFICIAL]. Costos específicos, requisitos detallados, vigencia y tiempo: [SIN FUENTE PUBLICADA] en este research.

**Sugerencia de contacto:** Sindicatura Municipal de Playas de Rosarito, Oficialía Mayor, CANIRAC delegación Rosarito.

**Tecate.**

El municipio exige permiso municipal escrito para venta de bebidas alcohólicas, otorgado por el Ayuntamiento a través del Presidente Municipal (Reglamento Municipal Tecate, Orden Jurídico) [OFICIAL]. Costos específicos, requisitos detallados, vigencia y tiempo: [SIN FUENTE PUBLICADA] en este research.

**Sugerencia de contacto:** Sindicatura Municipal de Tecate, Oficialía Mayor, CANIRAC delegación Tecate.

**Lo que esto le importa a Zenet.** El research municipal BC más allá de Tijuana es trabajo de campo, no de búsqueda web. Cuando un operador real de Mexicali, Ensenada, Rosarito o Tecate entre como prospecto, la conversación tiene que apoyarse en su propio conocimiento del trámite local — no en lo que Zenet le diga del marco municipal. La investigación dirigida (una llamada a sindicatura por municipio) es viable y vale la pena hacer cuando un grupo concreto entre en pipeline.

### 5.4 Protección Civil municipal

**Documentos típicos requeridos.**

- **Certificado de Medidas de Seguridad** emitido por la Dirección de Bomberos / Protección Civil del municipio.
- **Dictamen de No Inconveniencia** que certifica que el establecimiento cumple con condiciones mínimas de seguridad estructural.

**Programa Interno de Protección Civil (PIPC).**

El restaurante debe elaborar y mantener actualizado un PIPC que incluya:

- **Identificación de riesgos.** Incendio, fugas de gas, sismos, inundaciones según ubicación.
- **Plan de evacuación.** Rutas señalizadas, dos salidas de emergencia mínimo, puntos de reunión.
- **Protocolos de atención.** Primeros auxilios, control de incendios, procedimiento de evacuación.
- **Análisis de riesgos documentado.** Por área del establecimiento.

**Capacitación de brigadas.**

- Uso de extintores y equipo contra incendios.
- Primeros auxilios y RCP.
- Procedimientos de evacuación.
- Simulacros periódicos (la frecuencia específica depende del reglamento municipal aplicable).

**Vigencia de dictámenes.** [SIN FUENTE PUBLICADA] No se localizó en fuentes oficiales BC el periodo específico de renovación de dictámenes de Protección Civil (anual, bienal u otro) para el periodo 2024-2026. La práctica común — verificable con Protección Civil municipal directamente — apunta a renovación anual o bienal con costo variable según municipio.

**Costo de renovación.** [SIN FUENTE PUBLICADA] No localizado en este research.

**Implicación operativa.** Las inspecciones de Protección Civil suelen activarse en dos contextos: trámite inicial de licencia (obligatorio) y eventos disparadores (incidentes en establecimientos cercanos, denuncias, cambios de regulación). El operador casual independiente típico cumple en el alta y luego desatiende — hasta que un evento en otro establecimiento dispara una ola de inspecciones en la zona. La data que Zenet captura sobre capacitaciones impartidas (cuando el operador la usa para fines operativos de NOM-030 o NOM-251) sirve también como evidencia de capacitación de brigadas Protección Civil.

### 5.5 Zonificación, uso de suelo y anuencias vecinales

**Reglamento de Zonificación y Usos del Suelo Tijuana.** El reglamento define zonas mediante Programas de Desarrollo Urbano y Declaratorias de Usos y Destinos (Ayuntamiento TJ) [OFICIAL]. Los restaurantes con venta de alcohol se clasifican como **giros de control especial** y requieren dictamen de uso de suelo favorable de la Dirección de Administración Urbana.

**Restricciones por distancia a escuelas, hospitales o iglesias.**

[SIN FUENTE PUBLICADA en TJ específicamente.] El Reglamento de Bebidas Alcohólicas de Tijuana revisado en este research no especifica metros exactos de distancia mínima en el documento consultado. La práctica del trámite incluye verificación de cercanía a escuelas, hospitales o iglesias, pero el metraje exacto vigente para TJ no se localizó en fuente oficial publicada digitalmente.

**Referencia comparativa.** En abril de 2026, BCS propuso ampliar a 200 metros la distancia mínima entre expendios de alcohol y escuelas/hospitales/templos (frente a 150m actuales en BCS). Esta propuesta es de Baja California **Sur**, no de Baja California — se cita aquí como referencia regional, no como norma aplicable a TJ o al resto de BC.

**Anuencia de Propietarios Colindantes.** Es figura definida en el Reglamento de Zonificación TJ como carta de consentimiento de vecinos para funcionamiento con uso incompatible a la zona. No se especifica con claridad en qué casos aplica obligatoriamente para restaurantes con alcohol — la práctica varía por zona y por interpretación del trámite específico.

**Implicación operativa.** Para un operador en exploración de plaza nueva en TJ, la verificación de uso de suelo y posibles anuencias vecinales es prerequisito que se hace **antes** de firmar contrato de arrendamiento. La fricción real es de información: el reglamento es accesible pero la interpretación específica por dirección la maneja la Dirección de Administración Urbana caso por caso. Es trabajo del operador — frecuentemente con un gestor — no zona Zenet.

### 5.6 Tesorería municipal — predial y refrendos

**Predial Tijuana.**

- Periodo de pago con descuentos: **del 1 de enero al 31 de marzo** de cada año (Tesorería Municipal TJ, Ley de Ingresos) [OFICIAL].
- Pago extemporáneo causa recargos.
- Aplica al inmueble; en el caso típico del operador casual independiente, lo paga el propietario del local (arrendador), no el restaurante. El restaurante lo paga solo si es propietario del inmueble.

**Refrendos de licencias y permisos municipales.**

- **Permiso de bebidas alcohólicas:** refrendo anual entre enero y marzo (Ley de Ingresos Municipal TJ) [OFICIAL].
- **Licencia de funcionamiento operativa:** vigencia permanente una vez consolidada; sin refrendo regular salvo cambios de razón social, domicilio o giro.

**Multas frecuentes detectadas en operativos municipales 2024-2026.**

[SIN FUENTE PUBLICADA] No se localizaron datos públicos sobre frecuencia y monto típico de multas municipales aplicadas al sector restaurantero en BC en el periodo de referencia.

**Implicación operativa.** El refrendo anual del permiso de alcohol es la fricción municipal recurrente más predecible del operador con alcohol. El costo se aprueba en la Ley de Ingresos Municipal anual, que se publica en diciembre del año previo. La planeación de flujo del primer trimestre debe contemplarlo.

---

## 6. Distintivos y certificaciones

A diferencia de las secciones 2 a 5 — que cubren obligaciones impositivas y regulatorias del operador —, los distintivos y certificaciones son **voluntarios**. Operan como capa adicional de calidad y reputación que el establecimiento adopta por decisión, no por mandato. Su valor para el operador no es legal sino comercial: diferenciación frente al consumidor, acceso a canales corporativos y turísticos, reducción de fricción con clientela internacional.

Para el ICP del beachhead, esta capa es marginal. La mayoría de los casual independientes formales en MX no porta Distintivo H ni Moderniza — la inversión y la disciplina operativa que requieren rebasan el costo-beneficio percibido. Los segmentos donde la adopción es alta son hoteles, cadenas y operadores con clientela corporativa o turística internacional. Aún así, el marco importa para Zenet: la data y los registros que Zenet captura para fines operativos generan la mayoría de las evidencias que estos distintivos requieren — convirtiendo certificación que tomaría meses en sub-producto natural de operar con sistema.

### 6.1 Distintivo H

**Autoridad emisora.** Secretaría de Turismo (SECTUR) en coordinación con la Secretaría de Salud.

**Norma técnica de referencia.** NMX-F-605-NORMEX-2018, que define un estándar de manejo higiénico que **supera los requisitos mínimos de la NOM-251** (blog.polotab, 2024). El Distintivo H es un escalón por encima del piso obligatorio.

**Proceso de obtención.**

1. Capacitación del personal en manejo higiénico de alimentos (consultor autorizado).
2. Implementación de los procedimientos exigidos por la NMX (bitácoras, controles, instalaciones).
3. Auditoría por **Unidad de Verificación (UV)** autorizada por SECTUR.
4. Emisión del distintivo si la auditoría aprueba.

**Costos típicos 2026** (blog.polotab, 2024) [Dato MX sector restaurantero]:

| Componente | Rango MXN |
|---|---|
| Consultoría (microempresa) | $30,000 |
| Consultoría (mediana / grande) | $60,000 o más |
| Unidad de Verificación | $8,000 a $15,000 |
| Equipamiento menor (termómetros, recipientes, etiquetas, kits) | $5,000 a $20,000 |
| **Rango total estimado** | **~$50,000** |

**Apoyo gubernamental.** Algunas fuentes mencionan programas históricos donde el gobierno cubría hasta el 80% del costo, dejando un pago final de $8,000-$10,000 al operador (cursosgastronomia, 2024). La vigencia de este apoyo en 2026 [SIN FUENTE PUBLICADA] no se confirmó en este research — el operador interesado debe verificar con SECTUR estatal o la Secretaría de Turismo BC al momento del trámite.

**Vigencia.** Anual, con renovación condicionada a verificación.

**Adopción en el segmento.** [SIN FUENTE PUBLICADA] No existe cifra oficial publicada de % de adopción del Distintivo H entre restaurantes casual independientes vs cadenas. La AMR ha sostenido que la adopción es más fuerte en hoteles y cadenas que en casual independiente típico (AMR, 2024). Es consistente con el costo de entrada (~$50K MXN) y la disciplina operativa que requiere — barreras altas para un operador con 1-3 sucursales sin sistema operativo formalizado.

**Lo que esto le importa a Zenet.** El Distintivo H es la certificación voluntaria con mayor valor de marca y mayor disciplina operativa exigida del segmento gastronómico. La mayoría de las evidencias que la NMX-F-605 requiere — bitácoras de temperaturas, recetas estandarizadas, capacitación documentada del personal, control de procesos — son exactamente lo que Zenet captura para fines operativos. Para un operador que considera tramitar Distintivo H, la pregunta deja de ser "¿voy a dedicar 3 meses a generar bitácoras?" y se convierte en "¿exporto las bitácoras que ya tengo?". Es palanca de mensajería relevante para el sub-segmento que aspira a Bib Gourmand, Michelin o canal corporativo — no para el operador en crisis del Sub-segmento B típico.

### 6.2 Distintivo Moderniza

**Autoridad emisora.** SECTUR.

**Estatus 2026.** **Activo.** SECTUR publicó documentación vigente para Moderniza Básico, Especializado y Ecoturístico para 2026 (sistemas.sectur.gob, 2026) [OFICIAL].

**Naturaleza del distintivo.** Sistema de Gestión para el Mejoramiento de la Calidad. Cubre gestión de calidad, administración, atención al cliente, recursos humanos, y mejoramiento operativo. Es certificación de **gestión empresarial general**, no de inocuidad alimentaria como Distintivo H.

**Proceso.**

- Implementación a través de consultor autorizado por SECTUR.
- Capacitación, evaluación y cumplimiento de estándares mínimo del 80%.
- Verificación por la entidad responsable.

**Costo.** Variable según consultor y tipo de establecimiento. Como referencia, Coahuila publicó un costo de $32,000 MXN en su tabulador estatal (tramitescoahuila.gob, 2024) [OFICIAL]. El pago se hace directamente al consultor seleccionado.

**Vigencia.** [SIN FUENTE PUBLICADA] El periodo específico de vigencia del distintivo Moderniza 2026 no se localizó en documentos oficiales. Versiones históricas del programa apuntan a vigencia bienal con actualización.

**Adopción en el segmento casual independiente.** Marginal. Moderniza tiene mayor penetración en hoteles MiPyME y servicios turísticos directos. Para casual independiente formal típico, Moderniza no es palanca comercial relevante — el cliente no la pregunta.

**Lo que esto le importa a Zenet.** Moderniza es contexto, no oportunidad. El operador casual independiente del scope no está preguntando por Moderniza, y Zenet no debería empujarlo. Si un operador con vocación turística (Valle de Guadalupe, restaurante de hotel boutique) lo plantea, los procesos que Zenet codifica (manuales operativos, capacitación documentada, control de calidad) son insumo natural — pero la decisión de tramitar es suya, no recomendación nuestra.

### 6.3 Punto Limpio

**Autoridad emisora.** SECTUR.

**Estatus 2026.** [SIN FUENTE PUBLICADA] No se localizaron actualizaciones publicadas del programa para 2024-2026. La última información disponible es del lanzamiento en julio de 2020.

**Información histórica disponible** (eluniversal, 2020; inversion-turistica, 2020):

- Creado en julio 2020 como iniciativa de reactivación turística post-COVID.
- Trámite SECTUR: gratuito (sin costo por el distintivo).
- Costo de implementación: variable, con red de aproximadamente 600 consultores y reducción del ~50% respecto a otros distintivos.
- Vigencia: 2 años.
- Capacitación mínima: 44 horas (aproximadamente 2 meses).

**Naturaleza.** Sello de buenas prácticas higiénicas con enfoque en reactivación turística. Conceptualmente más ligero que el Distintivo H, orientado a cumplimiento básico verificable.

**Adopción y vigencia 2026.** Ante la ausencia de comunicación oficial reciente del programa, el operador interesado debería confirmar con SECTUR estatal si el programa sigue activo o fue absorbido por otro distintivo. Para fines de este documento, **se considera de estatus incierto en 2026**.

### 6.4 ServSafe

**Autoridad emisora.** National Restaurant Association (USA), acreditada por ANSI National Accreditation Board (ANAB) bajo el estándar Conference for Food Protection (CFP).

**Naturaleza.** Certificación voluntaria internacional de seguridad alimentaria. **No es obligatoria por normativa mexicana** y no sustituye al cumplimiento de NOM-251.

**Casos típicos de adopción en MX.**

- **Hoteles internacionales** con estándares corporativos — Bahía Príncipe, cadenas all-inclusive (news.grupo-pinero, 2024).
- **Cadenas USA operando en MX** que requieren ServSafe como estándar corporativo (myfoodsafeconsulting, 2024).
- **Operadores con vínculo a exportación o franquicia internacional** — modelos de negocio que requieren cumplimiento alineado con estándares EE.UU./Canadá.

**Reconocimiento.** Más de 10 millones de profesionales certificados globalmente (pearsonvue, 2024).

**Adopción en casual independiente MX.** [SIN FUENTE PUBLICADA] No existen estadísticas oficiales de penetración en restaurantes mexicanos independientes. La adopción es marginal — ServSafe es relevante para cadenas internacionales y hotelería, no para casual independiente local típico.

**Vigencia de la certificación.** [SIN FUENTE PUBLICADA] El periodo específico no se confirmó en este research; varía según la versión del programa y la jurisdicción.

**Lo que esto le importa a Zenet.** ServSafe no es relevante para el ICP del beachhead. Lo dejamos documentado para que el equipo no lo confunda con Distintivo H ni lo ofrezca como palanca al operador típico. Si entra en conversación, es señal de que el operador tiene cliente corporativo USA o vocación internacional — segmento adyacente al scope core.

### 6.5 Reconocimientos gastronómicos no regulatorios — Bib Gourmand y Michelin

Estos no son distintivos sanitarios ni gubernamentales, pero forman parte del **ecosistema institucional de calidad** del operador casual independiente del extremo superior del scope. Los nombramos brevemente porque toca al beachhead BC.

**Guía Michelin México 2024.** Primera edición en MX cubriendo CDMX, Los Cabos, Nuevo León, Oaxaca, Quintana Roo y Baja California. Distingue restaurantes con estrellas Michelin, Bib Gourmand y recomendados (Guía Michelin, 2024).

**Bib Gourmand.** Reconocimiento a restaurantes que ofrecen comida de calidad a precio razonable. Dentro del scope geográfico Zenet, **Carmelita Molino y Cocina** (Chef Juan Cabrera, TJ) recibió Bib Gourmand 2025 — caso que `04-segmentacion-de-mercado.md` ya identificó como ejemplo del Sub-segmento A en momento de expansión activa post-Michelin.

**Estrellas Michelin en BC.** Tres restaurantes en el Valle de Guadalupe (Ensenada) recibieron una estrella Michelin en 2024-2025 (información pública de Michelin, 2024-2025). Son casos del extremo superior del scope o adyacencia, generalmente con BoH ya muy formalizado.

**Implicación operativa.** Los reconocimientos Michelin/Bib activan momentos de expansión en sus poseedores y elevan la presión sobre estandarización (porque la consistencia es criterio de la guía). Para Zenet, los operadores recién reconocidos son leads de alta intención — el reconocimiento crea ventana de inversión en sistematización que el operador típico no tiene.

---

## 7. Calendario fiscal-laboral-sanitario del operador

Las secciones 2 a 6 documentaron las obligaciones por marco. Esta sección las consolida en un **calendario operativo** que muestra cómo se distribuye la carga regulatoria a lo largo del año. La utilidad es estratégica: identifica los meses de mayor presión, los disparadores de gestión administrativa, y el ritmo cotidiano que el operador casual independiente formal sostiene.

Esta sección no introduce obligaciones nuevas — referencia a las secciones donde cada obligación se desarrolló. Sirve como vista consolidada para el equipo Zenet (producto, marketing, ventas) y para el operador que quiere visualizar su año regulatorio.

### 7.1 Obligaciones mensuales

**Día 17 de cada mes** (más días hábiles según sexto dígito del RFC):

- Declaración provisional de ISR — sección 2.5.
- Declaración mensual de IVA — sección 2.5.
- Entero de retenciones ISR por nómina — sección 2.6.
- Entero de retenciones por honorarios profesionales — sección 2.6.
- Entero de retenciones por arrendamiento — sección 2.6.

**Día 17 también — entero IMSS del mes:**

- Cuotas obrero-patronales del mes anterior (LSS) [OFICIAL] — sección 3.1.

**Cierre de mes — facturación:**

- Emisión consolidada de CFDI a público general (concentrado del periodo).
- Conciliación de CFDI emitidos vs ventas POS — relevante por la fiscalización digital intensificada (sección 2.8).

### 7.2 Obligaciones bimestrales

- **INFONAVIT.** Entero bimestral del 5% sobre SBC patronal (Ley INFONAVIT) [OFICIAL] — sección 3.2.
- **RESICO Persona Física.** Pagos provisionales bimestrales para contribuyentes en este régimen — sección 2.1.

### 7.3 Obligaciones anuales

| Mes | Obligación | Fuente |
|---|---|---|
| Enero-marzo | Predial municipal (en TJ con descuentos hasta 31 marzo) | Sección 5.6 |
| Enero-marzo | Refrendo anual de permiso de bebidas alcohólicas (TJ) | Sección 5.6 |
| **28 de febrero** | **Determinación Anual de la Prima de Riesgo de Trabajo IMSS** | Sección 3.1 |
| **31 de marzo** | **Declaración anual ISR personas morales** del ejercicio anterior | Sección 2.5 |
| **30 de abril** | **Declaración anual ISR personas físicas** del ejercicio anterior | Sección 2.5 |
| **15 de mayo** | Dictamen de estados financieros (PM obligadas o que opten voluntariamente) | Sección 2.5 |
| Variable según fecha de obtención | Renovación anual del Distintivo H (cuando aplica) | Sección 6.1 |
| Cada 4 años desde su emisión | Renovación de e.firma | Sección 2.7 |
| Cada 3 años | Renovación REPSE del proveedor de servicios especializados | Sección 3.6 |

### 7.4 Obligaciones eventuales (disparadas por evento)

| Disparador | Plazo de la obligación |
|---|---|
| Inicio o fin de relación laboral con un trabajador | Aviso de alta/baja IMSS dentro de **5 días hábiles** (LSS Art. 15 fracc I) [OFICIAL] |
| Cambio de domicilio fiscal, razón social o régimen | Aviso al SAT dentro del **mes siguiente** (CFF Art. 27) [OFICIAL] |
| Visita de COEPRIS BC o COFEPRIS | Sin aviso previo — apertura inmediata de bitácoras al inspector (sección 4.1) |
| Visita de Protección Civil municipal | Sin aviso previo o con aviso corto, dependiendo del municipio (sección 5.4) |
| Auditoría/visita domiciliaria SAT | Notificación vía Buzón Tributario; visitas exprés con duración máxima de 24 días hábiles (sección 2.8) |
| Brecha de seguridad de datos personales | Notificación al responsable y eventualmente a titulares (sección 10) |
| Modificación de salario o régimen del trabajador | Aviso modificatorio al IMSS, frecuentemente quincenal o mensual |

### 7.5 Obligaciones continuas — bitácoras y registros diarios

Estas no son fechas; son ritmos cotidianos que el operador debe sostener todos los días o en la frecuencia mínima que la norma exige.

| Categoría | Frecuencia |
|---|---|
| Plan de limpieza por área con firmas (NOM-251) | **Diario** |
| Bitácora de temperaturas de refrigeración (cada cámara) | **Mínimo 2 lecturas/día** |
| Bitácora de cocción de productos críticos | Por evento de cocción |
| Formato de recepción de materias primas | Por entrega del proveedor |
| Bitácora de mantenimiento de equipos y calibración de termómetros | Mensual o por evento |
| Registros de control de plagas | Por servicio del proveedor |
| Registros de capacitación del personal | Por evento de capacitación |
| Revisión del Buzón Tributario | **Cada 2-3 días recomendado** (sección 2.7) |
| Bitácoras de Protección Civil (rondines, brigadas, simulacros) | Variable según PIPC del establecimiento |

### 7.6 Vista consolidada — el año regulatorio del operador BC

El calendario regulatorio del operador casual independiente formal en BC se distribuye a lo largo del año con concentración clara en el primer cuatrimestre.

| Mes | Carga regulatoria principal |
|---|---|
| Enero | Refrendo permiso alcohol; predial; SM 2026 vigente; obligaciones mensuales SAT/IMSS |
| Febrero | **Determinación Anual Prima de Riesgo IMSS (28 feb)**; cierre del periodo de descuento predial; mensuales |
| Marzo | **Declaración anual ISR PM (31 mar)**; vencimiento del periodo predial con descuento; mensuales |
| Abril | **Declaración anual ISR PF (30 abr)**; mensuales |
| Mayo | **Dictamen estados financieros (15 may)** cuando aplica; mensuales |
| Junio | Mensuales; bimestrales (INFONAVIT, RESICO PF) |
| Julio | Mensuales |
| Agosto | Mensuales; bimestrales |
| Septiembre | Mensuales |
| Octubre | Mensuales; bimestrales |
| Noviembre | Mensuales; preparación cierre fiscal |
| Diciembre | Mensuales; **publicación de Ley de Ingresos Municipal** (define refrendos del año siguiente); aguinaldos y prima vacacional |

**Concentración del primer cuatrimestre.** Enero a mayo carga la **mayoría de las obligaciones anuales** del operador: refrendos municipales, predial, prima de riesgo IMSS, declaración anual SAT (PM y PF), dictamen. Combinado con la operación cotidiana, ese periodo es el más demandante administrativamente del año.

**Implicación operativa para Zenet.** El operador casual independiente entra al primer cuatrimestre con flujo presionado por las obligaciones acumuladas y, en BC frontera norte, con el ajuste de salario mínimo recién aplicado en enero. Ese contexto explica por qué el customer journey identificado en `05-perfil-de-cliente-ideal.md` muestra picos de búsqueda de solución operativa en enero ("este año vamos a profesionalizar") y en marzo-abril (cuando el contador entrega la declaración anual y el operador ve el resultado fiscal real con sus desviaciones).

**Lo que esto le importa a Zenet — calendario de mensajería.**

- **Enero:** mensaje de profesionalización ("orden desde el inicio del año"). El operador está mentalmente disponible para nuevas decisiones.
- **Febrero-marzo:** mensaje de soporte al contador ("data limpia para tu declaración anual"). El operador está bajo presión y aprecia herramientas que le ahorren trabajo a su despacho.
- **Abril-mayo:** mensaje post-declaración ("ahora que sabes el resultado real, ¿qué cambia el año entrante?"). Momento de reflexión sobre desviaciones.
- **Junio-octubre:** mensaje operativo ("valle bajo de presión administrativa, ventana para implementar"). Mejor momento para arrancar onboarding.
- **Noviembre-diciembre:** mensaje de preparación ("cierra fuerte, abre el próximo año en orden"). Ventana para cerrar contratación con vigor desde enero.

---

## 8. Superficie de contacto Zenet ↔ regulación

El Bloque A documentó el entorno regulatorio del operador. Este bloque cambia de lente: deja de describir **qué tiene que hacer el operador** y empieza a definir **cómo Zenet se relaciona con eso**. La pregunta de fondo es: ¿dónde toca Zenet la regulación, y qué pretende y qué no pretende ser?

La respuesta corta vive en una distinción que recorre todo el doc: Zenet es **facilitador de cumplimiento**, no es solución regulatoria. La diferencia no es semántica — define qué construimos en el producto, qué prometemos en marketing, y dónde aceptamos límites para no sobre-prometer.

### 8.1 Datos que Zenet ya captura y que sirven para cumplimiento

La data que Zenet ingiere y procesa para fines operativos genera, como sub-producto natural, evidencia que las autoridades regulatorias piden. La tabla siguiente cruza categorías de data Zenet con las obligaciones regulatorias que esa data alimenta.

| Data Zenet | Uso operativo principal | Evidencia regulatoria que genera |
|---|---|---|
| Recetas estandarizadas con gramajes y procesos | Costeo, capacitación, consistencia | Evidencia Distintivo H / NMX-F-605 (sec 6.1); evidencia NOM-251 sobre estandarización (sec 4.2) |
| Bitácora de inventario (entradas, salidas, mermas) | Control de food cost, conciliación con CFDI de compra | Evidencia de trazabilidad SAT (sec 2.8); soporte al contador externo (sec 12) |
| Registro de recepción de materias primas con temperatura y rechazo | Control de calidad y proveedor | Bitácora obligatoria NOM-251 (sec 4.2) |
| Capacitaciones impartidas al personal | Onboarding, retención, consistencia operativa | Evidencia NOM-030 (sec 3.4); insumo para emitir DC-3 (sec 3.5); evidencia para Distintivo H |
| Procesos documentados (apertura, cierre, prep, mise en place) | Operación replicable entre sucursales y turnos | Evidencia NOM-030 sobre programa de seguridad y salud (sec 3.4); evidencia Distintivo H |
| Ventas POS reconciliadas con CFDI emitidos | Análisis de margen, control de fugas | Soporte directo a fiscalización digital SAT (sec 2.8) |
| Compras a proveedores con CFDI ingerido | Costeo real, control de IVA acreditable | Soporte al cierre fiscal del contador (sec 12) |
| Datos de empleados y nómina (cuando aplica) | Control de costo de mano de obra | Insumo IMSS, INFONAVIT (sec 3.1, 3.2); requiere protección bajo LFPDPPP (sec 10) |

**Implicación.** Zenet **no construye módulos regulatorios** desde cero. Construye módulos operativos cuya consecuencia es generar evidencia regulatoria. La diferencia es importante por dos razones:

1. **Producto.** No invertimos en certificación de cumplimiento — invertimos en operación clara que, como sub-producto, deja la huella que el regulador pide.
2. **Mensajería.** No prometemos "Zenet te certifica el Distintivo H". Prometemos "tu data operativa al día se exporta como evidencia para tu trámite". El operador y su consultor hacen la certificación; Zenet entrega los insumos.

### 8.2 Integraciones potenciales con PAC para CFDI — decisión de roadmap, no obligación

**Qué es un PAC.** Proveedor Autorizado de Certificación. Es la figura SAT que certifica los CFDI antes de que el SAT los reciba. Sin PAC no hay CFDI vigente. PACs típicos: Facturama, FactureHoy, Solución Factible, Operadora de Tecnología y Servicios, entre decenas.

**Por qué importa para Zenet.** Si Zenet ingiere CFDI emitidos por el restaurante (para conciliar con POS) y CFDI recibidos de proveedores (para conciliar con compras y mermas), tiene dos opciones:

| Opción | Qué implica | Trade-off |
|---|---|---|
| **Integrar con el PAC del cliente vía API** | Zenet lee CFDI directamente del PAC del operador | Cobertura limitada al PAC integrado; requiere acuerdos por PAC; latencia menor |
| **Ingerir XML descargado** del Buzón Tributario o portal SAT | El operador o su contador descarga, Zenet ingiere | Menor dependencia de PAC; mayor fricción para el operador; carga al contador |
| **No integrar — solo data POS** | Zenet ignora CFDI, trabaja con POS y captura manual de proveedores | Sin reconciliación CFDI/POS; pierde la palanca de fiscalización digital (sec 2.8) |

**Estado de la decisión.** Esta sección no decide el roadmap — eso vive en el repositorio de producción (`/02_Producto-y-Tech/`). El propósito aquí es declarar que **Zenet no es PAC ni se va a convertir en PAC**, y que la integración con CFDI es decisión técnica de ingesta, no obligación regulatoria.

**Implicación.** El día que Zenet ingiera CFDI sistemáticamente, gana dos cosas operativamente potentes: cierre del loop POS↔inventario↔compras con data fiscalmente trazable, y soporte directo al contador externo. Mientras tanto, opera con POS + captura manual de proveedores, lo cual es viable pero deja loop abierto.

### 8.3 Exportes para el contador externo

`05-perfil-de-cliente-ideal.md` y `06-estructura-y-ecosistema.md` (sec 3) ya identificaron al **contador externo como actor clave del buying committee** y como bloqueador silencioso si percibe a Zenet como amenaza. La sección 12 desarrolla la mensajería preventiva. Aquí se documenta la superficie técnica: qué exportes le sirven al contador.

**Exportes que el contador valora.**

| Exporte | Para qué le sirve al contador |
|---|---|
| Resumen mensual de ventas por sucursal con desglose IVA 8%/16% | Conciliación con CFDI emitidos y declaración mensual de IVA |
| Resumen mensual de compras con CFDI capturados o ingeridos | Conciliación con CFDI recibidos y cálculo de IVA acreditable |
| Resumen de mermas y desviaciones de inventario | Soporte para deducciones en ISR y explicación ante auditoría |
| Consolidación multi-sucursal por grupo (cuando aplica) | Estados financieros consolidados; declaración anual del grupo |
| Bitácora de pagos a proveedores con clasificación fiscal | Validación de retenciones aplicadas (sec 2.6) |
| Reporte de horas trabajadas y costos de nómina | Insumo para nómina y entero IMSS |

**Formato.** Exportes en CSV/Excel y, donde aplique, en formato que el software contable del despacho ingiera (Contpaq, Aspel COI, NetSuite, otros). La compatibilidad por software contable es decisión de roadmap; lo central es el formato base.

**Implicación.** El contador externo es uno de los multiplicadores de adopción más concretos identificados en el research: si Zenet le ahorra tiempo, el contador se vuelve aliado en lugar de obstáculo. Es punto de contacto que se diseña conscientemente — no emerge solo. La sección 11.3 lo desarrolla como hipótesis de canal.

### 8.4 Lo que Zenet NO debe pretender ser

La superficie de contacto Zenet ↔ regulación tiene cuatro bordes claros donde **Zenet decide no entrar**.

| Lo que Zenet NO es | Por qué no entra |
|---|---|
| **PAC (Proveedor Autorizado de Certificación)** | Es figura SAT con licencia y régimen propio; no agrega valor estratégico a Zenet entrar; mejor integrar con PACs existentes |
| **Despacho contable / fiscal** | Conflicto de intereses con el contador externo del operador; Zenet quiere al contador como aliado, no competencia |
| **Unidad de Verificación (UV)** | Distintivo H exige UV autorizada por SECTUR; régimen incompatible con producto SaaS |
| **Asesor legal o laboral** | Riesgo de responsabilidad sin licencia; el operador tiene abogado o cámara para eso (CANIRAC) |
| **POS / facturador** | Mercado saturado (sec `02-definicion-y-alcance.md` §4.4); ventaja competitiva de Zenet vive en BoH cognitivo, no en transacción |

**Línea fina.** Zenet ingiere data de POS, ingiere CFDI, exporta a contables, genera evidencia para Distintivo H — pero **no firma**, **no certifica**, **no asesora**. La diferencia entre ingerir y firmar, entre exportar y certificar, entre facilitar y asesorar, es la línea defensiva del posicionamiento.

### 8.5 Mensajería — "facilitador de cumplimiento", no "solución regulatoria"

La distinción central del bloque B aterriza en mensajería accionable.

**Frases que sí usamos.**

- "Tu operación al día genera la evidencia que las autoridades te piden."
- "Tu contador recibe data limpia y conciliada — no pasa horas ordenando lo que tú ya hiciste."
- "Las bitácoras que la NOM-251 exige son las mismas que tú ya necesitas para operar bien."
- "Cuando llega la inspección de COEPRIS, no improvisas — exportas."

**Frases que NO usamos.**

- ~~"Zenet te certifica el Distintivo H."~~ → Zenet no certifica nada.
- ~~"Cumple la NOM-251 con un clic."~~ → Sobrepromesa; el cumplimiento requiere disciplina operativa, no solo software.
- ~~"Zenet te declara los impuestos."~~ → No somos despacho contable.
- ~~"Olvídate de las inspecciones."~~ → No las eliminas; las enfrentas con data ordenada en lugar de improvisar.

**Tono.** Honestidad sobre lo que el software hace y no hace. La voz Zenet (Sabio + Cuidador, sin hype, sin marketing-tech) calza naturalmente con esta postura. Vincular con `Branding/_context/04-voice-and-tone/voz-y-tono.md` cuando se redacte copy específico de cumplimiento.

**Implicación.** La mensajería del Bloque B se nutre de los hallazgos del Bloque A. Las palancas más potentes identificadas:

1. **Fiscalización digital SAT 2026** (sec 2.8) — "auditoría exprés sin estrés porque tu data está reconciliada".
2. **5 inspecciones COEPRIS al mes en BC** (sec 4.1) — "bitácoras al día, no de último momento".
3. **Reformas laborales que aprietan el margen** (sec 3.3) — "controla el costo cuando el SM ya subió".
4. **Distintivo H como ventaja competitiva** (sec 6.1) — "evidencia lista para tramitarlo si decides ir por él".

La sección 11 desarrolla cómo cada palanca aterriza en producto, mensajería y canal.

---

## 9. Reformas y cambios regulatorios que amplifican el dolor (y la oportunidad)

Las obligaciones del Bloque A son contexto estable. Las **reformas** son el contexto cambiante: cada una mueve la línea base del operador y, al moverla, genera nuevas razones para buscar sistema. Esta sección no repite los detalles legales de la sección 3 — los conecta con la propuesta Zenet.

La tesis de la sección es directa: Zenet no causó ninguna de estas reformas, pero la convergencia 2024-2026 genera la ventana más fuerte de los últimos cinco años para empujar profesionalización en BoH. El operador siente la presión; Zenet no necesita inventar el dolor.

### 9.1 Salario mínimo 2026 — +13% nacional, +5% frontera norte

**Lo que cambió.** SM 2026 vigente desde el 1 de enero (sec 3.3): nacional $315.04/día, frontera norte BC $440.87/día.

**Cómo afecta al operador.** El coste primario (food cost + labor cost) sube por la vía de labor. Para un grupo BC con 30 empleados directos, el ajuste de SM y SBC asociado representa típicamente entre $30,000 y $80,000 MXN mensuales adicionales en nómina — sin cambio en operación.

**Cómo amplifica la oportunidad Zenet.** Cuando el labor cost sube y no se puede tocar (porque es ley), el operador solo tiene tres palancas para defender margen: precio de venta, productividad por turno, y food cost. Las dos primeras requieren decisiones estratégicas; la tercera requiere data que la mayoría no tiene. Zenet entra exactamente en la tercera palanca: bajar food cost de 34% a 30% sin reducir calidad ni cambiar carta es trabajo de sistema, no de chef.

CANIRAC y AbasturHub identificaron en 2026 al ajuste salarial como uno de los retos centrales del año (AbasturHub, 2026). El operador escucha el frame "controla el food cost porque el labor ya no se puede" — Zenet aterriza ese frame en producto.

### 9.2 Propinas en salario mínimo — pendiente Senado

**Lo que está en juego.** Reforma aprobada en Cámara de Diputados el 28 abril 2025, **pendiente en Senado a abril 2026** (sec 3.3). Si pasa, los meseros deben recibir SM completo independientemente de propinas — eliminando la práctica común de "sueldo simbólico de $400/semana + propinas".

**Cuánto duele cuando entre en vigor.** Para un grupo de 4 sucursales con 30 meseros, el ajuste neto en nómina puede ser de $120,000 a $200,000 MXN mensuales adicionales (sec 3.3). Para grupos chef-driven con propina alta, el porcentaje es mayor; para grupos con servicio limitado, menor.

**Cómo amplifica la oportunidad Zenet.** Idéntica lógica que 9.1, escalada: si el labor cost sube otra vez en 2026 o 2027 cuando la reforma pase, la presión por food cost limpio se vuelve estructural, no coyuntural. Es palanca de mensajería **en preparación, no en ejecución** — comunicar antes de que la reforma pase es prematuro y especulativo. Cuando pase, será frase de campaña directa.

### 9.3 Reducción de jornada laboral — en discusión legislativa

**Lo que está en juego.** Propuesta de reducir la jornada de 48 a 40 horas semanales con dos días de descanso obligatorio (sec 3.3). Sin fecha de aprobación.

**Cuánto duele si entra en vigor.** Para mantener cobertura de turnos (apertura, comida, cena, fin de semana) con jornadas más cortas, el operador necesita más personal. En un sector que ya carga déficit de 500,000 trabajadores nacional (CANIRAC vía El Economista, 2026) y migración a USA en frontera norte, contratar más es escaso y caro.

**Cómo amplifica la oportunidad Zenet.** La reducción de jornada amplifica la importancia de **productividad por hora trabajada**. Estandarización (recetas, procesos, mise en place) reduce el tiempo improductivo del personal. Capacitación documentada (DC-3) acelera el onboarding del personal nuevo que el operador necesita contratar para cubrir las horas.

Es palanca de **largo plazo**, no de campaña inmediata. Para 2026 sigue siendo discusión, no realidad.

### 9.4 Fiscalización digital SAT 2024-2026 — vigente

**Lo que cambió.** Fiscalización con cruces automáticos masivos de CFDI, visitas exprés de hasta 24 días hábiles con suspensión preventiva del CSD, y validación cruzada para restaurantes con +100 CFDI diarios (sec 2.8). Es el cambio regulatorio **vigente** con mayor implicación inmediata para el segmento.

**Cómo afecta al operador.** Más del 70% de las auditorías federales 2026 se originan del análisis de CFDI (cronista, 2026). Un grupo con 4-5 sucursales emite fácilmente 100+ CFDI diarios; cae automáticamente en el grupo de validación cruzada.

**Cómo amplifica la oportunidad Zenet.** Es la palanca más fuerte del bloque para mensajería **inmediata**, no especulativa. La frase ancla: *"un operador con data limpia y reconciliada entre POS, inventario y CFDI no le teme a la auditoría exprés"*. La operación ordenada se vuelve defensa fiscal, no solo eficiencia operativa.

Para el contador externo, la fiscalización digital también cambia el juego: ahora el contador necesita **data limpia entrante** para defender al cliente. El contador se vuelve aliado natural de Zenet cuando entiende eso.

### 9.5 Reforma Fiscal 2026 — ampliación de plazo Buzón Tributario y otras

**Lo que cambió.** La Reforma Fiscal 2026 amplió el plazo de respuesta a notificaciones del Buzón Tributario de **3 a 20 días hábiles** (sec 2.7). También introdujo la suspensión preventiva del CSD durante visitas exprés y reforzó las sanciones por CFDI sin complementos.

**Cómo afecta al operador.** Mixto. La ampliación de plazo es **alivio operativo concreto**. La suspensión del CSD es **riesgo amplificado** — el operador con incumplimiento sostenido puede quedar paralizado en facturación.

**Cómo amplifica la oportunidad Zenet.** No es palanca directa de mensajería, pero sí refuerza la urgencia de cumplimiento sostenido: la sanción más grave del marco fiscal vigente es perder capacidad de facturar, y eso ocurre cuando hay desorden acumulado, no cuando hay un error puntual.

### 9.6 Síntesis — cómo el momento regulatorio amplifica la oportunidad Zenet

| Reforma | Estatus a abril 2026 | Palanca Zenet | Cuándo activarla en mensajería |
|---|---|---|---|
| SM 2026 +13% nacional / +5% frontera | Vigente | Food cost como única palanca controlable | **Ahora** — campaña 2026 inmediata |
| Propinas en SM | Pendiente Senado | Idéntica a SM | Cuando se apruebe — no antes |
| Reducción de jornada | En discusión | Productividad y capacitación | Largo plazo si pasa |
| Fiscalización digital SAT | Vigente y vigente | Trazabilidad POS↔inventario↔CFDI | **Ahora** — palanca más fuerte 2026 |
| Reforma Fiscal 2026 — Buzón ampliado, CSD reforzado | Vigente | Cumplimiento sostenido como defensa | **Ahora** como contexto, no como gancho directo |

**Conclusión del bloque.** Dos reformas vigentes (SM 2026 y fiscalización digital SAT) son palancas **inmediatas** de mensajería 2026. Dos reformas pendientes (propinas en SM, reducción de jornada) son palancas **en preparación** que se activan cuando se aprueben — no antes. La narrativa central que conecta todas: el operador casual independiente formal en BC en 2026 enfrenta más presión regulatoria que en cualquier momento de la última década, y la única palanca defensiva sostenible es ordenar la operación con sistema. Zenet no inventó ese contexto — lo aterriza en producto.

---

## 10. Riesgo regulatorio para Zenet como producto SaaS

Las secciones 8 y 9 cubrieron la superficie de contacto Zenet con la regulación del operador. Esta sección cierra el Bloque B con la lente complementaria: el **marco regulatorio que aplica a Zenet como producto SaaS**, independientemente de lo que regula al operador. Son obligaciones que Zenet carga por la naturaleza de su software y de los datos que procesa, no por el giro de sus clientes.

Dos cuerpos normativos definen el riesgo regulatorio actual de Zenet: la **Nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP 2025)**, vigente desde el 21 de marzo de 2025, y la **regulación de inteligencia artificial en México**, que a abril 2026 sigue en discusión legislativa sin ley aprobada. Este bloque es prescripción mínima para que el equipo no tropiece con un marco que ya está vigente; no sustituye al despacho de privacidad de Zenet.

### 10.1 LFPDPPP 2025 — Zenet como encargado del tratamiento

**Vigor.** Nueva LFPDPPP publicada en DOF y entrada en vigor el **21 de marzo de 2025** (basham, 2025) [OFICIAL]. Sustituye a la ley de 2010 con cambios estructurales relevantes para proveedores SaaS.

**Figura aplicable a Zenet.** Bajo la LFPDPPP, dos figuras son centrales:

- **Responsable** — quien decide sobre el tratamiento de los datos personales. En el modelo B2B SaaS, el **cliente operador** es el responsable de los datos de sus empleados, recetas y procesos.
- **Encargado** — quien trata datos personales por cuenta del responsable. **Zenet es encargado** respecto a los datos que el cliente operador le confía. Zenet es responsable solo respecto a los datos que recaba directamente (ej. usuarios administradores que crean cuenta en Zenet).

**Cambio estructural de la reforma 2025.** La nueva ley **amplió el universo de sujetos obligados directos**: los encargados, que bajo la ley anterior eran responsables solo contractualmente con el responsable, ahora cargan obligaciones propias frente a la autoridad y a los titulares (hoganlovells, 2025). Esto significa que Zenet no puede escudarse en el contrato con el operador — tiene obligaciones legales propias.

**Cambios relevantes de la LFPDPPP 2025 vs ley anterior** (hoganlovells, 2025; basham, 2025; Perplexity Pro report 2026-05 §2.3 update 2026-05-23):

1. **Ampliación a encargados como obligados directos.** Zenet entra en este grupo.
2. **Eliminación del requisito de informar transferencias en aviso de privacidad integral.** Sigue obligando a registrarlas en el Registro de Actividades de Tratamiento.
3. **Nuevas bases jurídicas para tratamiento sin consentimiento**, alineándose más con estándares internacionales como RGPD europeo.
4. **INAI disuelto · enforcement migra a Secretaría Anticorrupción y Buen Gobierno** `[Validado Perplexity §2.3]` — el regulador histórico de protección de datos (INAI) fue dissolved con la reforma · enforcement authority ahora embedded en executive branch · creating different (and uncertain) enforcement dynamics. Implication: precedente regulatorio del INAI ya NO es directly applicable · nueva práctica enforcement está developing.
5. **Contables externos = data processors técnicamente** `[Validado Perplexity §2.3]` — los despachos contables que manejan client RFC data + employee CURP + bank account info + payroll records son ahora **encargados del tratamiento** con obligaciones propias bajo LFPDPPP 2025. **Most small despachos NOT meeting requirements** como of mid-2025 (ContadorMx, 2024). Implication para Zenet: el contable del operador también es sujeto obligado · puede generar friction si Zenet workflow requires data sharing que despacho no tenga capacity de comply.

**Sanciones.** Multas de **100 a 320,000 días UMA** dependiendo de la conducta (entre aproximadamente $11,000 MXN y $35 millones MXN en 2026). 19 conductas sancionables contempladas en la ley (itmastersmag, 2025).

**Implicación para Zenet.** No es opcional documentar y operar el cumplimiento LFPDPPP. La reforma 2025 cambió la posición de Zenet de "auxiliar contractual del operador" a "sujeto obligado independiente". Las obligaciones concretas se desarrollan en las sub-secciones siguientes.

### 10.2 Avisos de privacidad y consentimientos

**Aviso de privacidad del responsable (cliente operador).**

El cliente operador, en su carácter de responsable, debe redactar y comunicar a sus empleados y proveedores un aviso de privacidad integral que informe el tratamiento de datos personales que ocurre dentro y fuera de su organización (incluyendo a Zenet como encargado). Esto **no es trabajo de Zenet** — es responsabilidad del operador. Zenet puede facilitar plantillas o referencias, pero no firma el aviso del cliente.

**Aviso de privacidad de Zenet (como responsable directo).**

Zenet debe publicar un aviso de privacidad propio para los datos que recaba directamente. Casos típicos:

- Usuario administrador del operador que crea cuenta en Zenet.
- Datos de contacto del comprador de la suscripción.
- Datos del personal de Zenet (cuando aplique).

Contenido mínimo del aviso:

- Datos personales tratados (con identificación de sensibles si aplica).
- Finalidades con consentimiento y sin consentimiento.
- Medidas de seguridad implementadas.
- Procedimiento ARCO (Acceso, Rectificación, Cancelación, Oposición) con datos de contacto del responsable de privacidad.

**Consentimientos.**

| Tipo de dato | Consentimiento requerido |
|---|---|
| Datos laborales (Art. 25 LFT — nombre, RFC, CURP, domicilio, etc.) | **No requiere** consentimiento del empleado cuando el tratamiento esté previsto en ley (LFPDPPP Art. 10 fracc I) [OFICIAL] |
| Datos sensibles (salud, biométricos, ideología) | **Consentimiento expreso por escrito** (LFPDPPP) [OFICIAL] |
| Datos de uso para mejorar producto (analítica, telemetría) | Consentimiento tácito vía aviso de privacidad o expreso según finalidad |

**Derechos ARCO.**

- Plazo de respuesta del responsable: **20 días hábiles** (LFPDPPP Art. 32) [OFICIAL].
- Zenet (como encargado) debe **facilitar al cliente operador** el ejercicio de estos derechos cuando el titular lo solicite vía el operador.
- Zenet (como responsable directo) debe atender directamente las solicitudes que reciba sobre datos que recabó directamente.

### 10.3 Transferencias internacionales — Supabase, AWS, Anthropic

**Marco aplicable.** La LFPDPPP permite transferencias internacionales de datos personales bajo ciertas condiciones, incluyendo la existencia de contrato que garantice el mismo nivel de protección que la ley mexicana en el destino (Hogan Lovells, 2025).

**Caso Zenet.** Tres proveedores de infraestructura procesan datos personales del cliente operador en jurisdicción USA:

| Proveedor | Tipo de servicio | Jurisdicción de almacenamiento |
|---|---|---|
| **Supabase** | Base de datos (Postgres gestionado) | USA (regiones AWS US) |
| **AWS** | Infraestructura subyacente | USA |
| **Anthropic** | API de Claude (procesamiento de prompts y completions con data del operador) | USA |

**Qué exige el cumplimiento.**

1. **DPA (Data Processing Agreement) con cada proveedor.** AWS y Supabase ofrecen DPAs estándar que cumplen LFPDPPP (aws.amazon, 2024). Anthropic ofrece DPA propio en términos comerciales — verificar y firmar antes de procesar data sensible.
2. **Documentación interna en Registro de Actividades de Tratamiento.** Cada flujo de datos a USA debe estar registrado con: finalidad, base jurídica, plazos, medidas de seguridad, sub-encargados.
3. **Aviso de privacidad declara las transferencias.** Aunque la reforma 2025 eliminó la obligación de informarlas en el aviso **integral**, sigue siendo buena práctica y reduce fricción con titulares.

**Implicación operativa para Zenet.** El stack actual (Supabase + AWS + Anthropic) **es compatible con LFPDPPP** siempre que los DPAs estén firmados, vigentes, y la documentación interna sea completa. La residencia en USA no es bloqueador — la falta de documentación sí lo sería ante una verificación.

### 10.4 Notificación de brechas de seguridad

**Marco aplicable.** La LFPDPPP obliga al responsable a notificar a los titulares las vulneraciones de seguridad que afecten significativamente sus derechos patrimoniales o morales, sin dilación indebida (LFPDPPP) [OFICIAL].

**Plazo concreto.** [SIN FUENTE PUBLICADA] La nueva LFPDPPP 2025 no especifica un plazo numérico exacto en días u horas para que el encargado notifique al responsable, ni para que el responsable notifique a titulares. La práctica estándar internacional (RGPD usa 72 horas) se ha adoptado contractualmente en muchos DPAs aunque la ley mexicana no lo exija textualmente.

**Recomendación operativa para Zenet.**

- Comprometerse contractualmente con el cliente operador a notificar **dentro de las 72 horas** de detección — alinea con expectativas internacionales y reduce fricción en negociación de DPAs.
- Mantener bitácora interna de incidentes con clasificación de severidad.
- Capacitar al personal Zenet que accede a datos personales en protocolo de detección y escalamiento.

### 10.5 Regulación de IA en México — estatus a abril 2026

**Estado actual.** A abril 2026, **182 iniciativas** sobre regulación de IA han sido presentadas en el Congreso mexicano y **ninguna se ha convertido en ley** (arenapublica, 2026). El espacio sigue siendo discusión legislativa, no marco vigente.

**Iniciativas relevantes 2026.**

- **3 marzo 2026.** Iniciativa de **reforma constitucional** (artículos 4, 6, 25, 26 y 73) presentada para facultar al Congreso a legislar en materia de ecosistemas digitales e IA (sil.gobernacion, 2026) [OFICIAL].
- **20 abril 2026.** Iniciativa de **Ley General para Regular y Fomentar el Uso de la Inteligencia Artificial** presentada en el Senado.

**Contenido propuesto en las iniciativas.**

- Creación de autoridad nacional supervisora de IA.
- Registro obligatorio de sistemas de **alto riesgo**.
- Prohibición de contenidos sintéticos engañosos con fines de manipulación política (deepfakes).
- Regulación de datos para entrenar modelos.
- Evaluaciones de impacto obligatorias.
- Sanciones desde multas hasta prisión por casos graves.

**Posición institucional.**

- **Secretaría de Economía:** las iniciativas son compatibles con T-MEC, tema que forma parte de discusiones rumbo a la revisión del tratado en 2026 (altonivel, 2026).
- **IFT:** [SIN FUENTE PUBLICADA] posición específica no publicada.
- **Sector privado mexicano:** ha advertido que regulación apresurada elevaría costos operativos y frenaría innovación, frente al enfoque gradual europeo.

**Comparación con UE AI Act.** La UE aprobó el AI Act en 2024 con enfoque basado en riesgo (prohibido, alto riesgo, riesgo limitado, mínimo riesgo). Las iniciativas mexicanas proponen arquitectura similar (autoridad supervisora, registro de alto riesgo, sanciones escalonadas). La diferencia clave: la UE tiene infraestructura institucional consolidada; México enfrenta vacío institucional con rezagos en ciberseguridad y talento especializado (expansion, 2026).

**Implicación para Zenet.**

- **No hay regulación vigente que aplique a Zenet hoy en MX por su uso de IA.** Construir bajo prácticas razonables (transparencia con el operador sobre qué hace la IA, no usarla para decisiones legalmente sensibles sin supervisión humana, registrar las inferencias y sus bases) reduce riesgo futuro.
- **Si se aprueba una ley general en 2026-2027, los puntos sensibles serían:** clasificación de Zenet como sistema de alto riesgo (probablemente no, dado que no toma decisiones autónomas que afecten derechos); registro y evaluaciones de impacto; transparencia sobre uso de datos para entrenar modelos.
- **La filosofía de Zenet** ("augmentar, no reemplazar"; el dueño y el chef siempre validan) se alinea naturalmente con los marcos regulatorios emergentes — la IA que recomienda y el humano que decide es exactamente lo que el regulador europeo y mexicano emergente premian.

### 10.6 Cumplimiento como proveedor SaaS B2B — obligaciones contractuales

Más allá de la LFPDPPP, Zenet carga obligaciones contractuales que emergen del modelo B2B SaaS típico. No son figuras del SAT ni de un regulador específico, pero son práctica estándar y, con frecuencia, exigidas por clientes corporativos.

**Contrato de prestación de servicios (MSA + DPA).**

| Documento | Contenido típico |
|---|---|
| **MSA — Master Services Agreement** | Servicio prestado, niveles de servicio (SLA), responsabilidades, propiedad intelectual, indemnización, terminación |
| **DPA — Data Processing Agreement** | Roles de privacidad (responsable/encargado), finalidades del tratamiento, medidas de seguridad, sub-encargados, plazo de notificación de brechas, retención y devolución de datos |

**Documento de seguridad interno.**

LFPDPPP exige que el encargado mantenga documento de seguridad con inventario de datos personales, sistemas que los procesan, responsables internos, y medidas administrativas, técnicas y físicas implementadas. Este documento es exigible ante una verificación.

**Capacitación interna.**

Personal Zenet con acceso a datos personales del cliente debe estar capacitado en LFPDPPP, protocolo de incidentes y manejo de derechos ARCO. La capacitación es exigible ante una verificación.

**Sub-encargados (AWS, Supabase, Anthropic).**

Zenet debe:

- Mantener DPAs vigentes con cada sub-encargado.
- Documentar la cadena en el Registro de Actividades de Tratamiento.
- Notificar al cliente operador cualquier cambio relevante en la cadena de sub-encargados.

**Implicación.** Zenet operando hoy con un MSA + DPA por cliente, un Registro de Actividades de Tratamiento interno actualizado, y DPAs con AWS, Supabase y Anthropic firmados, **está en cumplimiento básico de LFPDPPP 2025**. La sofisticación adicional (certificaciones SOC 2, ISO 27001) es palanca de venta a corporativos, no obligación legal — y queda fuera del scope de este documento.

---

## 11. Implicaciones por capa regulatoria

Las secciones 8, 9 y 10 establecieron la postura de Zenet frente al marco regulatorio. Esta sección aterriza esa postura en decisiones accionables por área: producto, mensajería, canal y roadmap. Es síntesis, no introducción de material nuevo — referencia las secciones donde cada elemento se desarrolló y propone qué hacer con él.

### 11.1 Para producto — qué construir y qué no

**Construir (alta prioridad).**

| Capacidad | Por qué | Sección de origen |
|---|---|---|
| Bitácora de temperaturas y limpieza con timestamp y firmador | Sub-producto natural NOM-251 + Distintivo H | 4.2, 6.1 |
| Recetas estandarizadas con gramajes, costos y procesos | Insumo Distintivo H + base de food cost | 4.2, 6.1 |
| Reconciliación POS ↔ inventario ↔ compras | Defensa frente a fiscalización digital SAT | 2.8, 8.3 |
| Capacitaciones impartidas con registro y firmas | Insumo NOM-030 + DC-3 + evidencia Distintivo H | 3.4, 3.5, 6.1 |
| Exportes CSV/Excel para contador externo (ventas con IVA 8%/16%, compras, mermas, nómina) | Convierte al contador en aliado | 8.3, 12 |
| Configuración por sucursal con tasa IVA correcta (8% frontera vs 16% interior) | Granularidad necesaria para grupos multi-plaza | 2.4 |
| Separación de bebidas alcohólicas por tasa IEPS (26.5%/30%/53%) en módulo de costos | Análisis de margen real, no consolidado | 4.5 |

**Construir (mediana prioridad — depende de roadmap).**

| Capacidad | Trade-off |
|---|---|
| Ingesta de CFDI emitidos vía PAC del cliente o XML descargado | Cierra el loop fiscal; alta inversión técnica; explorar después del PMF inicial |
| Integración con software contable (Contpaq, Aspel COI) | Multiplicador de valor para el contador; complejidad por proveedor |
| Generación automática de DC-3 y consolidado DC-4 | Cobertura laboral; nicho dentro del scope |

**No construir.**

| Lo que no construimos | Por qué |
|---|---|
| Funcionalidad de PAC (timbrado de CFDI propio) | No agrega valor estratégico; mejor integrar con PACs existentes (sec 8.2, 8.4) |
| Asesoría fiscal automatizada o "asistente legal" | Riesgo de responsabilidad sin licencia (sec 8.4) |
| Certificación de Distintivo H | Régimen incompatible con SaaS — Zenet entrega evidencia, no certificación (sec 8.4) |
| POS (punto de venta / facturador) | Mercado saturado; ventaja competitiva vive en BoH (sec 8.4, doc 02 §4.4) |

### 11.2 Para mensajería — postura y palancas

**Postura central.** Zenet es **facilitador de cumplimiento**, no solución regulatoria. La sección 8.5 documentó frases que sí usamos y frases que no — esa lista es el primer filtro de cualquier copy que toque cumplimiento.

**Palancas activas en 2026** (de mayor a menor prioridad):

| # | Palanca | Frase ancla | Sección |
|---|---|---|---|
| 1 | Fiscalización digital SAT 2026 | "Tu data limpia es tu defensa frente a la auditoría exprés" | 2.8, 9.4 |
| 2 | 5 inspecciones COEPRIS al mes en BC | "Bitácoras al día, no de último momento" | 4.1 |
| 3 | SM 2026 +13%/+5% | "Cuando el labor sube y no se puede tocar, controla el food cost" | 3.3, 9.1 |
| 4 | Contador externo bajo presión por fiscalización | "Tu contador recibe data limpia — ahorras horas en cada cierre" | 8.3, 12 |

**Palancas en preparación (no comunicar todavía):**

- Propinas en SM (cuando se apruebe en Senado).
- Reducción de jornada laboral (si pasa).

**Calendario de mensajería** (sec 7.6):

- Enero: profesionalización ("orden desde el inicio del año").
- Febrero-marzo: soporte al contador ("data limpia para tu declaración anual").
- Abril-mayo: post-declaración ("ahora que sabes el resultado real").
- Junio-octubre: ventana de implementación ("valle bajo, mejor momento para arrancar").
- Noviembre-diciembre: preparación ("cierra fuerte, abre el próximo año en orden").

### 11.3 Para canal — los aliados naturales del cumplimiento

Tres canales emergen del análisis regulatorio como aliados naturales de Zenet. Cada uno con racional propio.

**CANIRAC Tijuana.**

- Touchpoint institucional accionable identificado en `06-estructura-y-ecosistema.md` §7.3 y §14.
- Bootcamp GastronomIA (enero 2026) atrajo 40 marcas, 203 restaurantes (sec 4.1, doc 06).
- Liderazgo activo en agenda 2026: Rebeca Aguilar Santuario (TJ), Iván Nolasco Cruz (BC).
- **Acción concreta:** propuesta de partnership formal con CANIRAC TJ — capacitación gratuita a afiliados sobre fiscalización digital SAT 2026 y NOM-251, con Zenet como herramienta operativa de soporte. Co-marca el contenido educativo, no la publicidad directa.

**Despachos contables.**

- El contador externo es el bloqueador silencioso (doc 06 §3 y sec 12 de este doc).
- La fiscalización digital SAT 2026 cambió el juego del contador: ahora necesita data limpia entrante para defender al cliente (sec 9.4).
- **Acción concreta:** programa de partner con despachos contables medianos en TJ y BC. Zenet le ahorra al contador 10-15 horas mensuales de captura y conciliación; el despacho recomienda Zenet como sistema base a sus clientes restauranteros. Comisión recurrente o tarifa preferencial para clientes referidos.

**Consultores gastronómicos.**

- Anna Palazuelos, Victor Murguía, Algira Garzón ya validaron cualitativamente (doc 02 §4, doc 06).
- Patrón validado en MX: SoftRestaurant opera vía red de distribuidores certificados (SYCA Tijuana).
- Los consultores gastronómicos venden estandarización, costeo, manuales — exactamente lo que Zenet codifica.
- **Acción concreta:** consultor-como-implementador. Zenet entrega plantillas y protocolos al consultor; el consultor implementa con el cliente y monetiza su servicio sobre Zenet. Modelo replica el de SoftRestaurant pero en capa cognitiva.

**Cuándo activar cada canal.**

- **Despachos contables** y **consultores gastronómicos** son canales activables desde fase pre-PMF (corresponde a Fase 1-2 del scope geográfico, sec doc 04).
- **CANIRAC** requiere relación construida y product-market fit demostrado — es Fase 2-3 del scope, no inicial.

### 11.4 Para roadmap — priorización de integraciones regulatorias

Tres decisiones de roadmap se desprenden del análisis regulatorio. No se resuelven en este documento (eso vive en el repo de producción), pero se enmarcan aquí con su trade-off.

**Decisión 1 — Integración con CFDI emitido (POS↔CFDI).**

- Beneficio: cierra el loop más fuerte de la fiscalización digital SAT 2026; soporte directo al contador.
- Costo: integración por PAC o por POS; complejidad técnica relevante.
- **Recomendación:** prioridad alta para Fase 2 del producto (post-PMF inicial). Mientras tanto, captura manual de proveedores y exportes para que el contador concilie.

**Decisión 2 — Integración con IMSS para nómina.**

- Beneficio: data laboral consolidada en Zenet; insumo para reformas vigentes (SM 2026) y futuras (propinas, jornada).
- Costo: complejidad regulatoria adicional (LFPDPPP datos sensibles, Art. 10 fracc I), trabajo de integración con sistemas patronales.
- **Recomendación:** prioridad media-baja. La nómina del operador casual independiente la maneja típicamente el contador externo o un software dedicado (Aspel NOI, NomiPaq); Zenet puede ingerir reportes en lugar de calcular nómina. La integración profunda con IMSS se evalúa cuando un grupo grande del scope (Sub-segmento C, 4-5 sucursales) la pida explícitamente.

**Decisión 3 — Generación de evidencias formateadas para Distintivo H.**

- Beneficio: feature destacable en mensajería para operadores que aspiran a Bib/Michelin o canal corporativo.
- Costo: trabajo de UX para presentar la data en formato que la UV de SECTUR reconozca.
- **Recomendación:** prioridad media. La data ya existe — el trabajo es presentación. Buena candidata para una Fase 2 cuando un cliente del scope core vaya por Distintivo H y co-financie la priorización vía caso.

---

## 12. El contador externo como bloqueador silencioso

`06-estructura-y-ecosistema.md` §3 y §13 ya identificaron al contador externo como actor del buying committee con poder real para hundir la decisión sin aparecer en la conversación. Esta sección profundiza la dinámica con foco en el marco regulatorio: por qué el contador bloquea, cómo se manifiesta el bloqueo, y qué hace Zenet para convertirlo en aliado.

### 12.1 La dinámica — por qué el contador bloquea

**Quién es el contador del operador casual independiente.** Un despacho mediano o pequeño que atiende 5-30 clientes restauranteros y otros giros, con honorarios de $2,500 a $6,000 MXN mensuales por sucursal (doc 06 §3.6, citando Perfectiva 2024 y SoyConta 2024). Es persona física profesional o despacho con 2-5 contadores. Su práctica está construida sobre años de relaciones con cada cliente, conocimiento del régimen fiscal específico, y workflows establecidos con software contable (Contpaq, Aspel COI, Excel).

**Cuatro razones por las que el contador puede percibir a Zenet como amenaza.**

1. **Amenaza al servicio.** Si el operador siente que "ahora con Zenet ya no necesito al contador", el contador pierde un cliente recurrente.
2. **Complicación al workflow.** Si Zenet entrega data en formato que el contador no ingiere fácil, le agrega trabajo en lugar de quitárselo. Un buen mes-tipo del contador ya está cargado; nadie tiene capacidad para más fricción.
3. **Riesgo profesional.** Si Zenet entrega data con errores y el contador la usa, el contador firma una declaración con problemas. Su licencia profesional está en juego, no la del operador.
4. **Curva de aprendizaje.** El contador no quiere aprender una herramienta nueva si no entiende cómo le ayuda concretamente.

**Cuándo se vuelve aliado.** Cuando entiende — ojalá antes del primer cierre — que Zenet:

- **Le ahorra horas** en captura, conciliación y armado de papeles de trabajo.
- **Le entrega data más limpia** que la que tradicionalmente recibía del cliente (Excel improvisado, WhatsApp con fotos de tickets).
- **Le ayuda a defender al cliente** ante la fiscalización digital SAT 2026 — un terreno donde el contador está más expuesto que antes (sec 9.4).

### 12.2 Cómo se manifiesta el bloqueo

El contador bloquea de tres formas. Las tres son señales operativas que el equipo de ventas debe leer.

| Forma de bloqueo | Manifestación típica |
|---|---|
| **Silencio crítico** | El operador menciona que va a contratar Zenet; el contador no se opone abiertamente pero deja caer dudas sueltas ("¿estás seguro que esto se va a llevar bien con cómo declaramos?"). El operador, sin contraevidencia, posterga la decisión |
| **Validación condicional** | "Está bien, pero primero quiero ver cómo se integra con lo que ya hago." La integración nunca se materializa porque el contador no investiga ni Zenet llega a explicarle |
| **Reframe defensivo** | "Mejor déjame yo te organice todo en un Excel mejorado, no necesitamos sistema." El contador se posiciona como solución alternativa con su capa de servicio actual |

Las tres formas comparten característica: **el contador rara vez dice "no compres Zenet"**. Lo que hace es introducir fricción suficiente para que la decisión se enfríe. Si el equipo de ventas no detecta la dinámica, lo que parece cliente "todavía pensándolo" en realidad está cliente "ya bloqueado por el despacho".

### 12.3 Mensajería preventiva — anticipar al contador antes que aparezca

La mensajería preventiva tiene un solo objetivo: **construir el caso de "Zenet le ahorra trabajo al contador" antes de que el contador entre en la conversación**. Tres vehículos:

**1. Discovery con el operador.**

Preguntas explícitas que abren la conversación:

- "¿Quién lleva tu contabilidad — despacho externo o interno?"
- "¿Qué te entrega el contador y qué le entregas tú al contador?"
- "¿Cuántas horas calculas que pasa armando tu cierre mensual?"

Estas tres preguntas hacen visible al contador como actor de la decisión, capturan su workflow actual, y abren ventana para presentar a Zenet como facilitador del workflow del contador.

**2. Material de soporte — "Zenet para tu contador".**

Una pieza específica (1-2 páginas) que el operador entrega o reenvía al contador. Contiene:

- Qué exporta Zenet y en qué formato.
- Compatibilidad con software contable común.
- Casos donde un contador ya en el pipeline reportó ahorro de horas.
- Datos de contacto del equipo Zenet para preguntas técnicas del contador.

El propósito no es vender a Zenet al contador — es darle suficiente información para que su evaluación sea favorable o neutral, no defensiva.

**3. Llamada directa equipo Zenet ↔ contador.**

Cuando el operador autoriza, una llamada de 20-30 minutos entre el equipo técnico de Zenet y el contador. La conversación va sobre workflow concreto: "estos son los exportes que generamos, así se ven, esto te ahorra esto". No es venta — es traspaso técnico.

### 12.4 Programa de partnership con despachos contables

La sección 11.3 lo nombró como acción concreta. Aquí se desarrolla la estructura.

**Tesis del programa.** El despacho contable mediano de TJ y BC opera con presión creciente por la fiscalización digital SAT 2026 y necesita herramientas que les ahorren tiempo en clientes complejos como restaurantes. Zenet entrega exactamente eso. Un programa formal convierte despachos en canal de adquisición y, simultáneamente, en multiplicador de retención (un cliente con contador aliado es cliente que no se va).

**Estructura propuesta** (a refinar con casos reales):

| Elemento | Propuesta inicial |
|---|---|
| Tier de partnership | Despachos con 5+ clientes restauranteros activos en BC |
| Beneficio para el despacho | Comisión recurrente sobre suscripción del cliente referido + descuento preferente para clientes de cartera + soporte técnico dedicado |
| Beneficio para Zenet | Canal de adquisición de calidad (lead pre-calificado por el contador) + retención reforzada (contador aliado) |
| Compromiso del despacho | Recomendar Zenet como sistema base a clientes restauranteros que entren al despacho o roten de sistema |
| Compromiso de Zenet | Capacitación al despacho (1-2 sesiones), exportes optimizados para el software contable que use, soporte técnico prioritario |

**Despachos candidatos en TJ/BC.** [Hipótesis abierta — sec 13] El research no ha identificado por nombre los 5-10 despachos contables medianos que cubren el sector restaurantero en TJ y BC. Es trabajo de campo: a través de CANIRAC TJ, de los primeros clientes Zenet y de búsqueda directa, debería ser posible identificarlos. Es prerrequisito para activar el programa.

**Cuándo activar.** Pre-PMF demostrado en 5-10 clientes que ya generaron data limpia y exportes funcionales. Lanzar el programa antes implica vender una promesa que no se puede demostrar; lanzar después implica perder ventana de adquisición.

### 12.5 Lección operativa para el equipo de ventas

Una sola línea, derivada de todo lo anterior y validada por la dirección Zenet (doc 06 §3): **el chef adopta, el dueño paga, el contador autoriza**. Para el ICP del beachhead (Sub-segmento B, 2-3 sucursales), los tres actores deben estar en la conversación o explícitamente cubiertos antes del cierre. Si uno falta, la venta entra en limbo.

---

## 13. Hipótesis abiertas y pendientes de validar

Esta sección consolida los huecos del documento — información que no se localizó en research y decisiones que no se tomaron porque la evidencia disponible no alcanza. Es declaración honesta de límites del v1.0 y guía para iteraciones futuras.

Tres categorías:

- **Huecos de información publicada** — datos que existen pero no se localizaron en este research. Cerrarían con búsqueda dirigida adicional, llamada a autoridad, o consulta especializada.
- **Hipótesis estratégicas no validadas en campo** — afirmaciones del doc cuya verificación requiere conversación real con operadores, contadores, consultores o instituciones.
- **Triggers de actualización** — eventos que disparan revisión del documento.

### 13.1 Huecos de información publicada

| # | Tema | Sección | Cómo cerrarlo |
|---|---|---|---|
| 1 | Casos públicos específicos de operativos SAT 2024-2026 al sector restaurantero (no solo estrategia general) | 2.8 | Búsqueda en notas de prensa especializada (El Economista, Reforma, Expansión) y comunicados oficiales SAT con filtro por sector |
| 2 | Cuotas IMSS 2026: invalidez/vida y guarderías y prestaciones sociales (porcentajes patrón/obrero) | 3.1 | Tablas oficiales IMSS o cualquier despacho contable BC; trivial con un contador |
| 3 | Cuota patronal FONACOT 2026 | 3.2 | Portal FONACOT o despacho contable |
| 4 | Sanciones específicas NOM-030 y NOM-019 (montos en UMAs) | 3.4 | Reglamento de la LFT en materia de seguridad y salud, o despacho laboralista |
| 5 | DC-4 — periodo de vigencia específico | 3.5 | STPS portal de capacitación o despacho laboralista |
| 6 | Aplicación NOM-051 a etiquetas internas de almacén de cocina | 4.3 | Consulta directa a COFEPRIS o consultor de etiquetado |
| 7 | Estatus 2026 del apoyo gubernamental al Distintivo H (cobertura del 80% histórica) | 6.1 | SECTUR estatal BC o Secretaría de Turismo BC |
| 8 | Vigencia específica del Distintivo Moderniza 2026 | 6.2 | SECTUR portal o consultor autorizado |
| 9 | Estatus 2026 del programa Punto Limpio (vigente, pausado, sustituido) | 6.3 | SECTUR estatal o consulta directa |
| 10 | Vigencia de la certificación ServSafe en MX | 6.4 | National Restaurant Association o entidad acreditada |
| 11 | % de adopción Distintivo H casual independiente vs cadenas en MX | 6.1 | AMR, CANIRAC, o estudios de SECTUR (probablemente no publicado oficialmente) |
| 12 | % de cumplimiento operadores casual independiente formal en (a) IMSS, (b) NOMs, (c) Distintivo H, (d) NOM-251 con bitácoras al día | 4.2, 6.1 | Probable hueco estructural — autoridades no publican estos indicadores; alternativa: encuesta dirigida vía CANIRAC TJ |
| 13 | Costos, requisitos, vigencia y tiempos de licencia en Mexicali, Ensenada, Rosarito, Tecate | 5.3 | Llamada a sindicaturas y CANIRAC delegaciones; trabajo de campo, no web |
| 14 | Distancias mínimas para permisos de alcohol vs escuelas/hospitales/iglesias en TJ específicamente | 5.5 | Reglamento de Bebidas Alcohólicas TJ texto completo o Dirección de Bebidas Alcohólicas |
| 15 | Vigencia y costo de dictámenes de Protección Civil municipal BC | 5.4 | Direcciones de Protección Civil municipal por municipio |
| 16 | Multas frecuentes aplicadas por municipios BC al sector restaurantero 2024-2026 | 5.6 | Solicitud de información pública (acceso transparencia) o nota de prensa local |
| 17 | Plazo concreto de notificación de brechas LFPDPPP 2025 | 10.4 | Reglamento de la LFPDPPP 2025 cuando se publique, o despacho de privacidad |
| 18 | Posición oficial del IFT sobre regulación de IA en MX | 10.5 | Comunicados IFT 2026 o consulta directa |

**Prioridad de cierre.**

- **Alta** — items 2, 3, 5 (regulatorios laborales operativos básicos). Son 30 minutos con un contador.
- **Alta** — items 13, 15 (municipales BC). Son llamadas y trabajo de campo, valen el esfuerzo cuando un cliente real entre en pipeline en esos municipios.
- **Media** — items 1, 17, 18 (contexto regulatorio macro). Útiles pero no bloqueantes para v1.0.
- **Baja** — items 11, 12 (% adopción/cumplimiento). Probablemente no existen como cifra oficial; mejor capturar vía propios clientes Zenet en el tiempo.

### 13.2 Hipótesis estratégicas no validadas en campo

| # | Hipótesis | Cómo validarla |
|---|---|---|
| 1 | Los operadores recién reconocidos por Bib Gourmand / Michelin son leads de alta intención (sec 6.5) | Outreach directo a 3-5 reconocidos en BC y CDMX; medir tasa de respuesta vs control |
| 2 | La mensajería "data limpia es defensa frente a auditoría exprés" funciona en discovery (sec 9.4) | Probar en 10-15 conversaciones de discovery; medir si abre conversación o cae plano |
| 3 | CANIRAC TJ aceptaría partnership formal de capacitación co-marcada (sec 11.3) | Reunión exploratoria con Rebeca Aguilar Santuario o equipo CANIRAC TJ |
| 4 | Despachos contables medianos en TJ/BC recibirían bien un programa de partnership con comisión recurrente (sec 12.4) | Identificar 5 despachos candidatos vía CANIRAC y clientes Zenet; reunión con 2-3 |
| 5 | El frame "el chef adopta, el dueño paga, el contador autoriza" describe correctamente el buying committee del Sub-segmento B (sec 12.5) | Revisar 10 conversaciones de venta cerradas y abiertas; etiquetar quién bloqueó/autorizó |
| 6 | Los consultores gastronómicos validados (Anna Palazuelos, Victor Murguía, Algira Garzón) escalan a programa formal de implementadores con compensación (sec 11.3, doc 06 §14) | Reunión específica para acordar términos de partnership con 1-2 inicialmente |
| 7 | El operador casual independiente formal de BC asocia "5 inspecciones COEPRIS al mes" con la propuesta Zenet sin guiarlo (sec 4.1) | Probar la cita en discovery; medir reacción vs no usarla |
| 8 | La integración con CFDI emitidos genera valor proporcional a la inversión técnica requerida (sec 8.2, 11.4) | Caso piloto con 2-3 clientes que usen Zenet y exporten su CFDI manualmente; medir cuánto del valor viene del CFDI vs sin él |

### 13.3 Triggers de actualización del documento

Eventos que disparan revisión del doc 08:

- **Aprobación en Senado de la reforma de propinas en SM.** Mover de "palanca en preparación" a "palanca activa"; redactar mensajería específica (sec 9.2).
- **Aprobación de reducción de jornada laboral.** Idem para jornada (sec 9.3).
- **Publicación de reglamento de la LFPDPPP 2025** (esperable en 2026-2027). Cierra hueco #17 y posiblemente cambia obligaciones operativas de Zenet (sec 10).
- **Aprobación de Ley General de IA en MX.** Toda la sec 10.5 cambia. Marcar para revisión inmediata cuando ocurra.
- **Cambio de tasa de IVA frontera norte.** Si el decreto del 8% no se renueva al final de 2026, sec 2.4 y módulo de Zenet cambian. Renovación esperada al final de cada año fiscal.
- **Reforma Fiscal anual.** Cada paquete económico publicado en septiembre con cambios fiscales relevantes para 2027 dispara revisión de secciones 2 y 7.
- **Cambio de gobierno municipal en cualquier plaza BC.** Las administraciones municipales cambian políticas de licencias y permisos al inicio. Sec 5 puede requerir actualización tras toma de protesta de nuevos gobiernos.
- **Aprobación o emisión de nueva NOM relevante** (ej. revisión de NOM-251 que está en periodo de actualización en algunos puntos). Sec 3.4 y 4.2.
- **Validación de hipótesis 13.2** que cambien postura de canal o mensajería.

**Cadencia mínima de revisión.** Trimestral para confirmar que ningún trigger se ha activado. Anual para revisar el documento completo en su versión vigente y subir versión si los cambios lo ameritan.

---

## 14. Fuentes consultadas

Fuentes que sostienen las afirmaciones del documento. Organizadas por categoría. URLs cuando aplica.

### 14.1 Fuentes oficiales — leyes, normas y autoridades

**SAT y materia fiscal.**

- DOF. *Decreto que extiende los estímulos fiscales en la región fronteriza norte (IVA 8%, ISR 20%).* Renovado 31 dic 2025, vigente 2026.
- DOF. *Resolución Miscelánea Fiscal — Carta Porte 3.1.* 17 jul 2024. http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_carta_porte.htm
- LISR (Ley del Impuesto sobre la Renta) — Art. 28 fracc XX (consumos en restaurantes), Art. 96 (asimilados), Art. 152 (tarifa progresiva PF).
- LIVA (Ley del Impuesto al Valor Agregado) — Art. 2-A.
- LIEPS (Ley del Impuesto Especial sobre Producción y Servicios) — Art. 1 y tasas vigentes.
- CFF (Código Fiscal de la Federación) — Art. 27 (modificaciones RFC), Art. 84 fracc IV (sanciones CFDI), Art. 86-A (sanciones Buzón Tributario).
- Cámara de Diputados. *Reforma Fiscal 2026 — paquete económico.* Octubre 2025.

**IMSS, INFONAVIT y materia laboral.**

- LSS (Ley del Seguro Social) — Art. 15 fracc I (alta/baja trabajadores), Art. 74 (Determinación Anual de Prima de Riesgo).
- Ley del INFONAVIT — Art. 29 (cuota patronal 5%). https://sdv.com.mx/compendio/ley-infonavit/articulo-29/
- LFT (Ley Federal del Trabajo) — Art. 13 (responsabilidad solidaria), Art. 25 (datos del contrato), Art. 132 fracc XXVI Bis (FONACOT), Art. 153-V (capacitación).
- DOF. *Reforma a la LFT en materia de subcontratación.* 23 abr 2021.
- DOF. *Reforma de Vacaciones Dignas.* 27 dic 2022, vigor 1 ene 2023.

**STPS y NOMs.**

- STPS. *NOM-251-SSA1-2009 — Prácticas de higiene en alimentos y bebidas.* DOF, 2009. https://www.dof.gob.mx/normasOficiales/8150/seeco11_C/seeco11_C.html
- STPS. *NOM-035-STPS-2018 — Riesgos psicosociales.* DOF, 2018.
- STPS. *NOM-030-STPS-2009 — Servicios preventivos de seguridad y salud.* https://www.dof.gob.mx/normasOficiales/3923/stps/stps.htm
- STPS. *NOM-019-STPS-2011 — Comisiones de seguridad e higiene.* https://asinom.stps.gob.mx/upload/noms/Nom-019.pdf
- STPS. *NOM-017-STPS-2024 — Equipo de protección personal.* DOF 28 mar 2025, vigor 28 sep 2025. https://platiica.economia.gob.mx/normalizacion/nom-017-stps-2024/
- STPS. *Guía Informativa NOM-030.* https://repositorio.stps.gob.mx/SPS/DGSST/Documentos%20compartidos/46_Fracc_XLVI/GUIAS%20INFORMATIVAS/GUIA%20INFORMATIVA%20NOM-030%20vf.pdf
- STPS. *Guía NOM-019.* https://www.stps.gob.mx/bp/secciones/dgsst/publicaciones/guias/guia_019.pdf

**SECTUR y SECRETARÍA DE SALUD.**

- SECTUR. *Distintivo Moderniza — documentos vigentes 2026 (Básico, Especializado, Ecoturístico).* https://sistemas.sectur.gob.mx/SECTUR/2026/DGTIC/02_10_qr9ry9/
- SECTUR + SS. *NMX-F-605-NORMEX-2018 — Distintivo H.*

**LFPDPPP y datos personales.**

- DOF. *Nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares.* Publicada 21 mar 2025, vigor 21 mar 2025.
- LFPDPPP — Art. 10 fracc I (datos sin consentimiento), Art. 32 (plazo ARCO 20 días).
- Cámara de Diputados. *LGPDPPSO.* https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf

**Iniciativas de regulación de IA.**

- Sistema de Información Legislativa, Gobernación. *Iniciativa de reforma constitucional en materia de IA.* 3 mar 2026. http://sil.gobernacion.gob.mx/Archivos/Documentos/2026/03/asun_5029115_20260304_1771376894.pdf

**Ayuntamientos BC.**

- Ayuntamiento Tijuana. *Reglamento de Bebidas Alcohólicas.* https://www.tijuana.gob.mx/normatividad/documentos/Reglamentos/40_20211229169628_wp.pdf
- Ayuntamiento Tijuana. *Portal de trámites — licencia de funcionamiento.* https://www.tijuana.gob.mx/tramite.aspx?tramite=72
- Ayuntamiento Tijuana. *Dirección de Bebidas Alcohólicas.* https://www.tijuana.gob.mx/dependencias/dba/
- Tesorería Municipal Tijuana. *Ley de Ingresos Municipal 2026.* https://transparencia.tijuana.gob.mx/Normatividad/N-LEYINGRESOTIJUANA_12-2025.pdf
- Ayuntamiento Playas de Rosarito. *Reglamento que regula la venta, almacenaje y consumo de bebidas alcohólicas.* 2022. https://rosarito.gob.mx/archivo_nuevo/2022-03/reglamento-que-regula-la-venta,-almacenaje-y-consumo-de-bebidas-alcoholicas-en-el-municipio-de-playas-de-rosarito,-baja-california..pdf
- Reglamento Municipal Tecate. *Bebidas alcohólicas.* http://www.ordenjuridico.gob.mx/Estatal/BAJA%20CALIFORNIA/Municipios/Tecate/Reg09.pdf
- Protección Civil BC. *Guía de elaboración del PIPC.* http://www.proteccioncivilbc.gob.mx/Doctos/GuiaElaboActPIPC_V02.pdf
- COEPRIS BC. *Cursos para manejadores de alimentos.* 2025. https://www.coeprisbc.gob.mx/

### 14.2 Fuentes especializadas — fiscal, contable, laboral, privacidad

- Asconsultinggroup. *Prima de riesgo IMSS — determinación anual.* 2026. https://www.asconsultinggroup.com.mx/medios/febrero-no-es-un-tramite-mas-la-prima-de-riesgo-imss-que-define-su-costo/
- Basham. *Nueva LFPDPPP publicada en el DOF.* 2025. https://basham.com.mx/nueva-ley-federal-de-proteccion-de-datos-personales-en-posesion-de-los-particulares-publicada-en-el-diario-oficial-de-la-federacion/
- BBVA. *Calendario fiscal 2026 personas morales.* 2026. https://www.bbva.com/es/mx/empresas/calendario-fiscal-2026-para-personas-morales-en-mexico-y-fechas-esenciales-del-sat/
- Codexmx. *Comidas de negocios — el mito del 100% deducible y la regla del 8.5% del SAT.* 2024. https://codexmx.com/noticias/comidas-de-negocios-el-mito-del-100-deducible-y-la-regla-del-85-del-sat
- Cofide. *IEPS — impuesto especial sobre producción y servicio.* 2024. https://www.cofide.mx/blog/ieps-impuesto-especial-sobre-producci%C3%B3n-y-servicio
- Consolide. *RESICO para personas morales.* 2024. https://consolide.com/blog/resico-para-personas-morales/
- Contadormx. *Cuotas IMSS 2026 — tablas, porcentajes y fechas.* 2026. https://contadormx.com/cuotas-imss-2026-tablas-porcentajes-y-fechas/
- Docdigitales. *RESICO vs régimen general.* 2024. https://www.docdigitales.com/blog/posts/resico-vs-regimen-general/
- DSC. *Reforma sobre propinas — el fin de la simulación en ciertos sectores laborales.* 2025. https://www.dsc.mx/post/reforma-sobre-propinas-el-fin-de-la-simulacion-en-ciertos-sectores-laborales
- Ecija. *México — reforma a la LFT, vacaciones dignas.* 2023. https://www.ecija.com/actualidad-insights/mexico-reformas-a-la-ley-federal-del-trabajo-mexico-aprueba-aumentar-los-dias-de-vacaciones-pagadas/
- Factorial. *REPSE — qué es y cómo cumplir.* 2024. https://factorial.mx/blog/repse/
- Factorial. *Salario mínimo en México.* 2026. https://factorial.mx/blog/salario-minimo-mexico/
- Factorial. *Clase de riesgo IMSS.* 2024. https://factorial.mx/blog/clase-de-riesgo-imss/
- Hoganlovells. *Mexico's new federal data protection law — what it means for companies.* 2025. https://www.hoganlovells.com/es/publications/mexicos-new-federal-data-protection-law-what-it-means-for-companies
- IDC online. *Consumos en restaurantes son deducibles para su empresa.* 2024. https://idconline.mx/fiscal-contable/2024/09/23/consumos-en-restaurantes-son-deducibles-para-su-empresa
- IDC online. *Factores para cuotas y aportaciones 2026.* 2026. https://idconline.mx/seguridad-social/2026/02/16/factores-para-cuotas-y-aportaciones-2026
- Lexlatin. *Reformas laborales 2026 — reducción de jornada, licencias.* 2026. https://lexlatin.com/opinion/reformas-laborales-2026-mexico-reduccion-jornada-licencias
- ORFIS. *Curso retenciones — asimilados y RESICO.* 2023. https://www.orfis.gob.mx/wp-content/uploads/2023/09/curso-rentenciones-asimilados-y-resico-1.pdf
- ParrotSoftware. *Deducciones fiscales restaurantes — guía práctica.* 2024. https://parrotsoftware.com.mx/blog/deducciones-fiscales-restaurantes-guia-practica
- Resguard Solutions. *Mexico LFPDPPP data protection guide.* 2025. https://resguard-solutions.com/blog/es/mexico-lfpdppp-data-protection-guide/
- Rappi Merchants. *NOM-251-SSA1-2009 — guía restaurantes.* 2024. https://merchants.rappi.com/es-mx/nom-251-ssa1-2009-guia-restaurantes
- Wellhub. *NOM-035 — beneficios y programas de bienestar.* 2024. https://wellhub.com/es-mx/blog/beneficios-y-programas-de-bienestar/nom-035/
- ACSAN. *Reforma laboral en materia de subcontratación — REPSE.* 2021. https://acsan.mx/reforma-laboral-en-materia-de-subcontratacion-repse-y-su-aplicacion-practica/

### 14.3 Prensa especializada y nacional

- Cronista. *El SAT hará cruces de CFDI y bases de datos para una auditoría más dura.* 2026. https://www.cronista.com/mexico/finanzas-economia/ya-es-oficial-el-sat-hara-cruces-de-cfdi-y-bases-de-datos-para-una-auditoria-mas-dura-para-estos-contribuyentes/
- InfoChannel. *CFDI 2026 — mayor fiscalización y vigilancia SAT.* 2026. https://infochannel.info/cfdi_2026_mayor_fiscalizacion_vigilancia_sat/
- Sin Embargo. *El SAT puede multar a quienes no revisen su Buzón Tributario.* 2025. https://www.sinembargo.mx/3709395/
- Infobae. *PROFECO alerta — la propina no es obligatoria y los precios deben estar visibles.* 2026. https://www.infobae.com/mexico/2026/02/16/profeco-alerta-en-restaurantes-y-bares-la-propina-no-es-obligatoria-y-los-precios-deben-estar-visibles-en-pesos/
- Crónica. *PROFECO advierte — multarán con hasta 3 millones de pesos.* 2026. https://www.cronica.com.mx/tendencias/2026/04/22/profeco-advierte-multaran-con-hasta-3-millones-de-pesos-a-restaurantes-que-cobren-propina-automatica/
- Arenapublica. *La IA en el Congreso — mucho ruido, poca ley.* 2026. https://www.arenapublica.com/opinion/claudia-jimenez/la-ia-en-el-congreso-mucho-ruido-poca-ley
- Expansión. *México discute una ley de IA en medio de un vacío institucional.* 2026. https://expansion.mx/tecnologia/2026/02/26/mexico-discute-una-ley-de-ia-en-medio-de-un-vacio-institucional
- Infobae. *México perfila su primera ley de IA.* 2026. https://www.infobae.com/mexico/2026/04/25/mexico-perfila-su-primera-ley-de-inteligencia-artificial-entre-ambicion-regulatoria-y-dudas-sobre-su-viabilidad/
- Alto Nivel. *Reforma de IA en México — costos, incertidumbre, innovación.* 2026. https://www.altonivel.com.mx/reforma-de-ia-en-mexico-elevaria-costos-generaria-incertidumbre-y-frenaria-innovacion-alerta-la-industria/

### 14.4 Fuentes locales BC

- BCT News. *Se amplía decreto de IVA al 8% en la frontera.* 2025. https://bctneus.mx/Noticia/BC/30279/
- Punto Norte. *Continuará IVA al 8% e ISR al 20% en BC con decreto de estímulos fiscales.* 2026. https://puntonorte.info/2026/01/02/continuara-iva-al-8-e-isr-al-20-en-bc-con-decreto-de-estimulos-fiscales/
- Punto Norte. *Ayuntamiento ya no dará permisos para bares en la Zona Norte.* 2024. https://puntonorte.info/2024/04/17/ayuntamiento-ya-no-dara-permisos-para-bares-en-la-zona-norte/
- Rancherita. *Continúa el IVA del 8% en la frontera durante todo el 2026.* 2026. https://rancherita.com.mx/noticias/detalles/186442/
- Zeta Tijuana. *Hasta 4 mil puntos de venta de alcohol operan sin permiso en Tijuana.* 2026. https://zetatijuana.com/2026/03/hasta-4-mil-puntos-de-venta-de-alcohol-operan-sin-permiso-en-tijuana/
- Zeta Tijuana. *El negocio de los permisos de alcoholes temporales en Ensenada.* 2026. https://zetatijuana.com/2026/03/el-negocio-de-los-permisos-de-alcoholes-temporales-en-ensenada/
- Oem (La Voz de la Frontera). *Reciben restauranteros al menos 5 inspecciones al mes por COEPRIS.* 2026. https://oem.com.mx/lavozdelafrontera/local/reciben-restauranteros-al-menos-5-inspecciones-al-mes-por-parte-de-coepris-29591484
- Diario El Independiente. *Proponen ampliar distancia mínima entre expendios de alcohol y escuelas en BCS.* 2026. https://www.diarioelindependiente.mx/2026/04/proponen-ampliar-distancia-minima-entre-expendios-de-alcohol-y-escuelas-hospitales-y-templos-en-bcs

### 14.5 Asociaciones, cámaras y prensa nacional sobre el sector

- AbasturHub. *Restaurantes en México enfrentan nuevos retos.* 2026. https://www.abasturhub.com/nota/restaurantes/restaurantes-en-mexico-enfrentan-nuevos-retos
- AMR (Asociación Mexicana de Restaurantes). *Importancia de estandarizar recetas — costo silencioso de la improvisación.* 2024.
- CANIRAC nacional. *El reto del talento en la industria restaurantera.* 2024. https://portal.canirac.org.mx/noticias/el-reto-del-talento-en-la-industria-restaurantera-de-la-rotacion-a-la-solucion/
- CANIRAC TJ — declaraciones públicas de la presidenta delegacional Rebeca Aguilar Santuario en prensa local 2026.
- El Economista. *Mundial agudizará déficit de talento en restaurantes.* 2026.

### 14.6 Distintivos y certificaciones

- Blog PoloTab. *Distintivo H — restaurante México.* 2024. https://blog.polotab.com/distintivo-h-restaurante-mexico
- Cursos Gastronomía. *Distintivo H.* 2024. https://www.cursosgastronomia.com.mx/blog/consejos/distintivo-h/
- El Universal Destinos. *SECTUR crea Punto Limpio v2020.* 2020. https://www.eluniversal.com.mx/destinos/sectur-crea-punto-limpio-v2020-sello-de-calidad-para-reactivar-turismo/
- Inversión Turística. *Sello PuntoLimpio 2020.* 2020. https://inversion-turistica.com/2020/07/13/sello-de-calidad-puntolimpio-2020-sera-el-distintivo-en-mexico/
- Pearson VUE. *ServSafe — National Restaurant Association.* 2024. https://www.pearsonvue.com/mx/es/nra.html
- Tramites Coahuila. *Gestión de certificación Distintivo M (Moderniza).* 2024. https://www.tramitescoahuila.gob.mx/tramites/secretar%C3%ADa-de-turismo-y-desarrollo-de-pueblos-m%C3%A1gicos/gestion-de-certificaci%C3%B3n-distintivo-m-(moderniza).html
- Capacitación de Personal. *NOM-251-SSA1-2009 — guía y certificación DC-3.* 2024. https://capacitaciondepersonal.com.mx/nom-251-ssa1-2009-guia-certificacion-dc3-stps/

### 14.7 Fuentes internas del workspace Zenet

- Zenet Marketing. *01-panorama-de-la-industria.md* v1.1, abril 2026.
- Zenet Marketing. *02-definicion-y-alcance.md* v1.0, abril 2026.
- Zenet Marketing. *03-tamano-de-mercado.md* v1.0, abril 2026.
- Zenet Marketing. *04-segmentacion-de-mercado.md* v1.0, abril 2026.
- Zenet Marketing. *05-perfil-de-cliente-ideal.md* v1.0, abril 2026.
- Zenet Marketing. *06-estructura-y-ecosistema.md* v1.0, abril 2026.
- Zenet Marketing. *Branding/_context/04-voice-and-tone/voz-y-tono.md* v1.0.
- Zenet Production. *Business context for production software.* v1.0, abril 2026. `/02_Producto-y-Tech/Production-software/Zenet/docs/project-strategy/business-context/zenet-business-context-production.md`

---

*Documento elaborado en abril 2026 sintetizando: marco regulatorio mexicano federal y estatal vigente 2024-2026, normativa BC y municipal Tijuana, reformas fiscales y laborales 2023-2026, LFPDPPP 2025, iniciativas de regulación de IA en México 2026, e investigación dirigida (Perplexity Pro Deep Research, runs Apr 2026). Versión actual: ver frontmatter.*













