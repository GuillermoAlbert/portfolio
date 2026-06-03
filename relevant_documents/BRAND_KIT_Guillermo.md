# Brand Kit Personal — Guillermo Albert García

*Guía de marca para mantener coherencia visual y de tono entre todos los canales: CV, GitHub, LinkedIn, web/portfolio (guillermoalbert.dev), slides, tarjetas y cualquier material futuro.*

*Principio rector: la web y todo lo demás EXTIENDEN la identidad del CV. No se inventan paletas nuevas. La coherencia CV ↔ GitHub ↔ web es lo que proyecta "premium".*

---

## 1. Posicionamiento (la marca en una frase)

**Desarrollador Full Stack backend-first, con una base científica que usa como ventaja.**

- Eje narrativo: **biología → desarrollo** ("de secuenciar datos en un laboratorio a desplegar contenedores en producción").
- Fortaleza declarada: **backend y arquitectura** (no frontend).
- Diferenciador: rigor científico + capacidad docente + desarrollo → traduce entre complejidad técnica y de negocio.
- Tagline corta reutilizable: *Full Stack Developer · Java / Spring / Angular.*

---

## 2. Paleta de color

Origen: titulares y acentos del CV. Esta es la columna vertebral visual.

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Primario | Navy | `#11203a` | Titulares, nombre, fondos oscuros, badges de backend, bordes de sección |
| Secundario | Azul | `#2563a8` | Rol/cargo, enlaces, nombres de empresa, badges de frontend, acentos interactivos |
| Texto | Casi-negro | `#1a1a1a` | Cuerpo de texto principal |
| Texto suave | Gris medio | `#2a2a2a` / `#444` | Resúmenes, texto secundario |
| Texto tenue | Gris | `#555` / `#666` | Metadatos, fechas, subtítulos |
| Neutro infra | Gris | `#666666` | Badges de infraestructura/herramientas (Docker, Proxmox, Git…) |
| Fondo | Blanco | `#ffffff` | Fondo principal claro |
| Fondo cálido (opcional) | Sand | `#F7F4EF` | Solo si se quiere calidez; viene del proyecto GuiasdeAlicante, usar con cuidado para no romper la identidad navy |

**Regla de badges (GitHub / web):**
- Backend / lenguajes core → navy `#11203a`
- Frontend → azul `#2563a8`
- Bases de datos → `#336791` (tono postgres, ya usado)
- Infraestructura y herramientas → gris `#666`

**Accesibilidad:** navy y azul sobre blanco cumplen contraste WCAG AA para texto. Evitar azul `#2563a8` sobre navy (poco contraste); para texto sobre fondo navy usar blanco.

---

## 3. Tipografía

| Contexto | Fuente | Notas |
|---|---|---|
| CV (PDF/print) | Helvetica Neue / Helvetica / Arial | Sans-serif limpia, máxima compatibilidad ATS |
| Web / portfolio | **Inter** | Sustituto web natural de Helvetica; moderno, legible, gratis (Google Fonts) |
| Etiquetas de tecnología / código | **JetBrains Mono** o **Fira Code** | SOLO para tags de stack, snippets, badges tipo código. No para cuerpo |
| Títulos web | Inter (peso 700) | Mismo sistema, jerarquía por peso/tamaño, no por familia distinta |

**Jerarquía (referencia del CV, escalable a web):**
- Nombre / H1: peso 700, tracking ligeramente negativo (`-0.3px`)
- Rol / subtítulo: peso 600, en azul `#2563a8`
- Encabezados de sección: peso 700, mayúsculas, tracking `+0.7px`, borde inferior navy
- Cuerpo: peso 400, interlineado ~1.4

---

## 4. Voz y tono

| Canal | Registro | Persona |
|---|---|---|
| CV | Sobrio, impersonal, denso en datos | 3ª persona implícita |
| GitHub README | Técnico, claro, directo | 1ª persona ("I run…", "administro…") |
| LinkedIn "Acerca de" | Storytelling con gancho, cercano pero profesional | 1ª persona |
| Web / portfolio | Profesional con personalidad; el gancho biología→dev puede liderar | 1ª persona |

**Principios de voz:**
- Honestidad ante todo: nunca inflar. React/Python acotados; cifras defendibles.
- Mostrar, no presumir: "código que mueve millones de €" > "soy muy bueno".
- El pasado científico es un activo, no algo a esconder ni a sobre-explicar.
- Backend-first siempre: cuando se listan tecnologías, Java/Spring/arquitectura lideran.
- Frase ancla disponible para reutilizar: *"De secuenciar datos en un laboratorio a desplegar contenedores en producción."*

**Qué evitar:**
- Emojis en CV (sí permitidos, con mesura, en LinkedIn y quizá web).
- JSF como bandera (es legacy; aparece en detalle de experiencia, no en titulares).
- React y Python como skills protagonistas (acotados; ver decisiones del CV).
- Tono informal/coloquial con exceso de emojis (era el problema del LinkedIn viejo).

---

## 5. Stack a destacar (orden de marca)

Cuando se muestren tecnologías en cualquier material, este es el orden y el énfasis:

1. **Backend (protagonista):** Java, Spring (MVC/Boot), Spring Security (JWT), JPA/Hibernate, REST APIs
2. **Bases de datos:** PostgreSQL, Oracle, SQLite
3. **Frontend (defendible):** Angular, TypeScript, HTML5, CSS3
4. **Infraestructura:** Proxmox, Docker, LXC, Linux, Tailscale
5. **Herramientas:** Git/GitLab, Liquibase, JUnit, SonarQube, JasperReports, Agile
6. **Acotado (mencionar sin protagonismo):** Python (scripting/ETL), React (solo en MAMS)

---

## 6. Activos visuales y elementos recurrentes

- **Badges shields.io** con estilo `flat-square` y la paleta de la regla del punto 2. Plantilla:
  `https://img.shields.io/badge/NOMBRE-HEX?style=flat-square&logo=LOGO&logoColor=white`
- **Diagramas:** Mermaid (renderiza nativo en GitHub; coherente y editable). Ya usado en mams-architecture.
- **Capturas de producto:** en carpeta `assets/`, con alt-text descriptivo siempre.
- **Iconografía:** discreta. En web, line icons monocromos en navy/azul. Evitar packs de emojis 3D o ilustraciones genéricas de SaaS.

---

## 7. Identidad por canal (checklist de coherencia)

| Elemento | CV | GitHub | LinkedIn | Web (.dev) |
|---|---|---|---|---|
| Nombre | Guillermo Albert García | Guillermo Albert García | íd. | íd. |
| Rol | Desarrollador Full Stack · Java/Spring/Angular | Full Stack Developer · Java·Spring·Angular | íd. | íd. |
| Paleta | navy + azul | navy + azul (badges) | foto + banner navy | navy + azul + Inter |
| Foto | — | misma foto profesional | misma foto profesional | misma foto |
| Tono | sobrio | técnico | storytelling | profesional con gancho |
| Email | guillermo.albert@outlook.com | íd. | íd. | íd. |

**Foto profesional:** usar LA MISMA en GitHub, LinkedIn y web. Pendiente de tener una buena (fondo neutro, buena luz, vestimenta smart-casual).

**Banner LinkedIn (sugerencia futura):** fondo navy `#11203a` con la tagline en blanco/Inter y quizá un detalle mono con el stack. Coherente con todo lo demás.

---

## 8. Dominio e identidad digital

- **Dominio objetivo:** `guillermoalbert.dev`
- Email de contacto público: guillermo.albert@outlook.com (o uno @guillermoalbert.dev cuando exista el dominio, más pro).
- Handles: GitHub `GuillermoAlbert`, LinkedIn `guillermo-albert-garcia`. Mantener consistencia de nombre donde se pueda.

---

*Última actualización: tras cerrar GitHub y reescribir el "Acerca de" de LinkedIn. Mantener este documento como única fuente de verdad de la identidad; si algo cambia (p. ej. se añade iBERRITU o se compra el dominio), actualizar aquí primero.*
