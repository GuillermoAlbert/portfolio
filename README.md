# guillermoalbert.dev

Portfolio personal de Guillermo Albert García, desarrollador full stack. Sitio estático, trilingüe (español, inglés y francés) y con modo oscuro, desplegado en [guillermoalbert.dev](https://guillermoalbert.dev).

## Stack

- **Next.js 16** (App Router) con `output: "export"`: el build genera HTML estático en `/out`, sin runtime de Node en producción.
- **React 19** y **TypeScript** en modo estricto.
- **Tailwind CSS 4** más un sistema visual propio en `app/globals.css` (tokens, componentes, animaciones, modo oscuro e impresión).

## Decisiones técnicas

### Trilingüe sin framework de i18n

No usa el i18n de Next ni ninguna librería. Hay tres rutas estáticas (`/`, `/en`, `/fr`), cada una en su propio route group con su propio root layout, de modo que el HTML estático de cada ruta ya lleva el atributo `lang` correcto para crawlers que no ejecutan JavaScript.

Sobre esa base, el cambio de idioma en vivo es client-side: cada texto se renderiza con el componente `T` (`lib/i18n.tsx`), que pinta un idioma en el HTML y lleva los tres como atributos `data-es`, `data-en` y `data-fr`. Al pulsar el selector de idioma, `Interactions.tsx` recorre esos nodos y los intercambia sin recargar la página. Los `aria-label` localizados siguen el mismo patrón con `data-aria-*`.

### Server components casi en todo

Solo tres ficheros llevan `"use client"`: `Interactions.tsx` y los dos efectos de máquina de escribir (`Hero.tsx`, `NotFoundTitle.tsx`). El resto, incluida la topbar con sus botones de tema e idioma, es servidor: los controles se renderizan como marcado inerte y `Interactions.tsx` los localiza por selector y los activa desde un único `useEffect`.

### Tema oscuro sin flash

El tema vive en un atributo `data-theme` en `<html>`. Un script inline en `RootDocument.tsx` lee `localStorage` (o la preferencia del sistema) antes de que React hidrate, así la página nunca parpadea con el tema equivocado.

### SEO y metadatos

Metadatos por idioma en `lib/seo.ts`, con hreflang recíproco entre las tres rutas, sitemap, robots, JSON-LD de tipo Person y un `llms.txt`. La tarjeta social (Open Graph) se genera en build con `opengraph-image.tsx`.

### Tipografía

Cuatro voces con papeles cerrados: Hanken Grotesk para el cuerpo, Space Grotesk para momentos de display, JetBrains Mono para etiquetas y código (las tres vía `next/font/google`), y Departure Mono (píxel, self-hosted en `components/fonts/`) reservada para dos artefactos de terminal: el título del 404 y la imagen social.

## Estructura

```
app/            Rutas: un route group por idioma, cada uno con su root layout
  (es)/ (en)/ (fr)/
  globals.css   Todo el sistema visual
components/     Un componente por sección de la página, más el shell compartido
lib/            i18n (componente T) y SEO (metadatos por idioma)
public/cv/      Los tres CV descargables desde el sitio
```

## Desarrollo

```bash
npm run dev     # servidor de desarrollo en http://localhost:3000
npm run build   # export estático a /out
npm start       # sirve /out en local (requiere build previo)
npm run lint    # ESLint
```

## Deploy

Cada push a `main` dispara un workflow de GitHub Actions que hace el build y publica `/out` como assets estáticos en Cloudflare Workers, con dominio propio y página 404 real (`wrangler.toml`).
