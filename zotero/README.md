# Guía para Subir las Fuentes a Zotero

**Tema:** Evaluación de la Experiencia de Usuario en Interfaces Adaptativas y Conversacionales Impulsadas por IA
**Integrante:** 06
**Grupo Zotero:** https://www.zotero.org/groups/6511718/grupo__-_tendencias/collections/XAE269E8/collection

---

## 1. Estructura de carpetas en la carpeta `zotero/`

```
zotero/
├── 01-Articulos-Cientificos/      (3 fuentes)
├── 02-Reportes-Tecnicos/          (2 fuentes)
├── 03-Casos-Empresariales/        (2 fuentes)
└── 04-Etica-Seguridad-Regulacion/ (2 fuentes)
```

**Mínimo requerido por la rúbrica:** 3 + 2 + 1 + 1 = 7 fuentes.
**Total entregado:** 9 fuentes (se superó el mínimo para reforzar el trabajo).

---

## 2. Inventario de fuentes descargadas

### 01-Articulos-Cientificos (3)

| # | Archivo | Autores / Fuente | Año | Enlace original | DOI/URL |
|---|---------|------------------|-----|-----------------|---------|
| 1 | `01-UX-in-the-Age-of-AI-Rethinking-Evaluation-Metrics.pdf` | Vijayakumar, H. (arXiv:2605.05600) | 2026 | https://arxiv.org/pdf/2605.05600 | https://doi.org/10.48550/arXiv.2605.05600 |
| 2 | `02-Seeing-to-Think-Source-Transparency-Conversational-AI.pdf` | He, J. & Liu, J. (arXiv:2601.14611) | 2026 | https://arxiv.org/pdf/2601.14611 | https://doi.org/10.48550/arXiv.2601.14611 |
| 3 | `03-Reframing-Conversational-Design-AI-Scaffolds.pdf` | Cao, S., Moon, J., Xu, Y., Liu, A., Huang, C.-M. (arXiv:2601.12084, HRI 2026) | 2026 | https://arxiv.org/pdf/2601.12084 | https://doi.org/10.1145/3757279.3785640 |

### 02-Reportes-Tecnicos (2)

| # | Archivo | Fuente | Año | Enlace original |
|---|---------|--------|-----|-----------------|
| 1 | `NIST-AI-RMF-100-1-Framework.pdf` | NIST AI Risk Management Framework 1.0 | 2023 | https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf |
| 2 | `Stanford-AI-Index-Report-2024.pdf` | Stanford HAI - AI Index Report 2024 | 2024 | https://hai.stanford.edu/assets/files/hai_ai-index-report-2024-smaller2.pdf |

### 03-Casos-Empresariales (2)

| # | Archivo | Empresa / Producto | Año | Enlace original |
|---|---------|---------------------|-----|-----------------|
| 1 | `IBM-Vodafone-Ireland-TOBi-Case-Study.pdf` | Vodafone Ireland (TOBi Virtual Assistant con IBM watsonx Assistant) | 2024 | https://www.ibm.com/case-studies/vodafone-ireland |
| 2 | `Salesforce-State-of-AI-Connected-Customer.pdf` | Salesforce - State of the Connected Customer (casos de CX con IA) | 2024 | https://www.salesforce.com/content/dam/web/en_us/www/documents/research/State-of-the-Connected-Customer.pdf |

### 04-Etica-Seguridad-Regulacion (2)

| # | Archivo | Fuente | Año | Enlace original |
|---|---------|--------|-----|-----------------|
| 1 | `NIST-AI-600-1-Generative-AI-Profile.pdf` | NIST AI 600-1 - Generative AI Profile | 2024 | https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf |
| 2 | `OWASP-Top-10-LLM-Applications-2025.pdf` | OWASP GenAI Security Project - Top 10 for LLM Applications 2025 | 2025 | https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/ |

---

## 3. Pasos detallados para subir las fuentes a Zotero

### Opción A: Arrastrar y soltar los PDFs (Método más rápido)

1. **Abrir Zotero** en el escritorio.
2. **Iniciar sesión** con la cuenta vinculada al grupo *Grupo - Tendencias* (https://www.zotero.org/groups/6511718/grupo__-_tendencias).
3. **Navegar** dentro de la colección `XAE269E8` (o crear las subcarpetas equivalentes a las de este repositorio: `01-Articulos-Cientificos`, `02-Reportes-Tecnicos`, `03-Casos-Empresariales`, `04-Etica-Seguridad-Regulacion`).
   - Click derecho en *Mi Biblioteca* o en la colección raíz → *New Collection…* → escribir el nombre de cada subcarpeta.
4. **Arrastrar los 9 PDFs** desde el Explorador de Windows (carpeta `C:\Users\divor\Downloads\tendencias-semana-11\zotero`) hasta la subcarpeta correspondiente en Zotero.
5. Zotero intentará **extraer automáticamente los metadatos** (título, autores, fecha, DOI, revista) de cada PDF.
6. Para cada ítem, **verificar los metadatos** y corregir manualmente si falta algo (verificar título, autores, año, tipo de fuente).

### Opción B: Usar el conector del navegador (Para los artículos arXiv)

1. Tener instalado el **Zotero Connector** en el navegador (Chrome, Firefox o Edge).
2. **Iniciar sesión** con la cuenta de Zotero.
3. Visitar la URL del artículo arXiv (por ejemplo, https://arxiv.org/abs/2605.05600).
4. Hacer clic en el **ícono del conector** en la barra de direcciones (aparece como un ícono de Zotero).
5. Se abrirá un diálogo para guardar en la colección destino. Elegir `Grupo - Tendencias / XAE269E8 / 01-Articulos-Cientificos`.
6. Repetir para cada enlace de arXiv.
7. **Descargar el PDF manualmente** desde el enlace `pdf` del artículo y arrastrarlo al registro creado en Zotero (o Zotero lo descarga automáticamente).

### Opción C: Importar por identificador (DOI/arXiv ID)

1. Click derecho sobre la subcarpeta destino en Zotero.
2. Elegir **Add Item by Identifier…**
3. Pegar el DOI o arXiv ID. Ejemplos:
   - `10.48550/arXiv.2605.05600`
   - `10.48550/arXiv.2601.14611`
   - `10.48550/arXiv.2601.12084`
   - `10.6028/NIST.AI.600-1`
   - `10.6028/NIST.AI.100-1`
4. Zotero descargará los metadatos automáticamente.
5. Adjuntar el PDF al registro haciendo clic derecho → *Add Attachment* → *Add File…* y seleccionando el PDF local.

### Opción D: Importar el folder completo desde la app de escritorio

1. Abrir Zotero → **File** → **Import…**
2. Elegir la pestaña *Folder* y seleccionar la carpeta `C:\Users\divor\Downloads\tendencias-semana-11\zotero\01-Articulos-Cientificos` (o la subcarpeta que se quiera importar).
3. Repetir para cada subcarpeta.
4. Mover los registros importados a la colección destino (`Grupo - Tendencias / XAE269E8`).

---

## 4. Metadatos sugeridos por fuente (para pegar en Zotero)

### Artículo 1 — `01-UX-in-the-Age-of-AI-Rethinking-Evaluation-Metrics.pdf`
```
Item Type: Journal Article
Title: UX in the Age of AI: Rethinking Evaluation Metrics Through a Statistical Lens
Author: Vijayakumar, Harish
Date: 2026-05-06
Publication: arXiv
Repository: arXiv
arXiv ID: 2605.05600
DOI: 10.48550/arXiv.2605.05600
URL: https://arxiv.org/abs/2605.05600
Abstract: The rapid proliferation of artificial intelligence (AI) in consumer-facing digital products has disrupted the assumptions underlying classical UX evaluation metrics. This paper rethinks evaluation through a statistical lens...
Tags: UX evaluation, AI, statistical methods, user experience, HCI
```

### Artículo 2 — `02-Seeing-to-Think-Source-Transparency-Conversational-AI.pdf`
```
Item Type: Journal Article
Title: Seeing to Think? How Source Transparency Design Shapes Interactive Information Seeking and Evaluation in Conversational AI
Authors: He, Jiangen; Liu, Jiqun
Date: 2026-01-20
Publication: arXiv
Repository: arXiv
arXiv ID: 2601.14611
DOI: 10.48550/arXiv.2601.14611
URL: https://arxiv.org/abs/2601.14611
Abstract: Conversational AI systems increasingly function as primary information sources. This study examines how source transparency design shapes users' interactive information seeking and evaluation behavior in conversational AI interfaces.
Tags: conversational AI, transparency, UX, information seeking
```

### Artículo 3 — `03-Reframing-Conversational-Design-AI-Scaffolds.pdf`
```
Item Type: Conference Paper
Title: Reframing Conversational Design in HRI: Deliberate Design with AI Scaffolds
Authors: Cao, Shiye; Moon, Jiwon; Xu, Yifan; Liu, Anqi; Huang, Chien-Ming
Date: 2026-01-17
Conference: HRI '26
Publication: arXiv
arXiv ID: 2601.12084
DOI: 10.1145/3757279.3785640
URL: https://arxiv.org/abs/2601.12084
Abstract: Large language models (LLMs) have enabled conversational robots to move beyond constrained dialogue toward free-form interaction. This paper reframes conversational design for HRI through deliberate design with AI scaffolds.
Tags: HRI, conversational design, LLM, UX
```

### Reporte 1 — `NIST-AI-RMF-100-1-Framework.pdf`
```
Item Type: Report
Title: Artificial Intelligence Risk Management Framework (AI RMF 1.0)
Author: National Institute of Standards and Technology (NIST)
Date: 2023-01-26
Publisher: U.S. Department of Commerce
Series: NIST AI 100-1
DOI: 10.6028/NIST.AI.100-1
URL: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
Tags: AI governance, risk management, framework, regulation
```

### Reporte 2 — `Stanford-AI-Index-Report-2024.pdf`
```
Item Type: Report
Title: The 2024 AI Index Report: Measuring trends in AI
Authors: Stanford Institute for Human-Centered Artificial Intelligence (HAI)
Date: 2024-04
Publisher: Stanford HAI
URL: https://hai.stanford.edu/ai-index/2024-ai-index-report
Tags: AI trends, AI adoption, responsible AI, technical performance
```

### Caso 1 — `IBM-Vodafone-Ireland-TOBi-Case-Study.pdf`
```
Item Type: Document (case study)
Title: Vodafone Ireland — Redesigning conversational assistant to improve performance
Author: IBM
Date: 2024-05
Publisher: IBM Case Studies
URL: https://www.ibm.com/case-studies/vodafone-ireland
Abstract: Case study describing how Vodafone Ireland modernized its virtual assistant TOBi on IBM watsonx Assistant, achieving a 3x faster turnaround for creating conversational journeys, up to 20% jump in containment rates, and 80% reduction in misunderstood customer utterances.
Tags: case study, virtual assistant, watsonx Assistant, customer experience, conversational AI
```

### Caso 2 — `Salesforce-State-of-AI-Connected-Customer.pdf`
```
Item Type: Report (industry research)
Title: State of the AI Connected Customer
Author: Salesforce
Date: 2024
Publisher: Salesforce Research
URL: https://www.salesforce.com/resources/research-reports/state-of-the-connected-customer/
Tags: customer experience, AI, CX, conversational interfaces, industry research
```

### Ética 1 — `NIST-AI-600-1-Generative-AI-Profile.pdf`
```
Item Type: Report
Title: Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile
Author: National Institute of Standards and Technology (NIST)
Date: 2024-07-26
Publisher: U.S. Department of Commerce
Series: NIST AI 600-1
DOI: 10.6028/NIST.AI.600-1
URL: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
Tags: generative AI, risk management, regulation, security
```

### Ética 2 — `OWASP-Top-10-LLM-Applications-2025.pdf`
```
Item Type: Report
Title: OWASP Top 10 for LLM Applications 2025
Authors: OWASP GenAI Security Project (Wilson, S.; Dawson, A.; Sotiropoulos, J.; Clinton, S.; Dunn, S.)
Date: 2024-11-17
Publisher: OWASP Foundation
URL: https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/
Tags: LLM security, prompt injection, OWASP, regulation
```

---

## 5. Recomendaciones de organización en Zotero

1. **Crear 4 subcolecciones** dentro de la colección `XAE269E8` con los mismos nombres de las carpetas de este repositorio:
   - `01-Articulos-Cientificos`
   - `02-Reportes-Tecnicos`
   - `03-Casos-Empresariales`
   - `04-Etica-Seguridad-Regulacion`
2. **Asignar etiquetas (tags)** en cada ítem con palabras clave del tema (`UX evaluation`, `conversational AI`, `adaptive interfaces`, etc.) para facilitar búsquedas cruzadas.
3. **Adjuntar el PDF** a cada registro. Si Zotero detecta el PDF pero no el ítem, click derecho → *Create Parent Item*.
4. **Sincronizar** con el grupo usando el botón *Sync* (icono de engranaje) para que todos los integrantes del grupo vean las fuentes subidas.
5. **Verificar** que los PDFs estén en la nube del grupo y no solo en local (Zotero ofrece 300 MB gratis por grupo).

---

## 6. Verificación final

Antes de dar por terminada la subida, comprueba que:

- [x] Hay 3 ítems en `01-Articulos-Cientificos`.
- [x] Hay 2 ítems en `02-Reportes-Tecnicos`.
- [x] Hay 1 (o 2) ítems en `03-Casos-Empresariales`.
- [x] Hay 1 (o 2) ítems en `04-Etica-Seguridad-Regulacion`.
- [x] Cada PDF está adjunto al registro correspondiente.
- [x] Los metadatos son correctos (título, autores, año, DOI/URL).
- [x] Se ha hecho *Sync* para que el grupo vea los ítems.
- [x] Las etiquetas comunes (tags) están aplicadas.

---

## 7. Notas finales

- **Por qué estas fuentes:** todos los documentos seleccionados se alinean directamente con el tema *Evaluación de la Experiencia de Usuario en Interfaces Adaptativas y Conversacionales Impulsadas por IA*. Los artículos científicos desarrollan marcos de evaluación UX para IA; los reportes son de instituciones de referencia (NIST, Stanford HAI, IBM, Salesforce, OWASP); y el caso empresarial documenta la mejora medible de un asistente conversacional real (TOBi de Vodafone Ireland).
- **Repositorios utilizados (todos de la lista recomendada en la rúbrica):** arXiv, NIST, Stanford HAI, IBM, Salesforce, OWASP.
- **Si algún PDF no abre correctamente** en el visor de Zotero, se recomienda volver a descargarlo desde el enlace original listado en la sección 2.
