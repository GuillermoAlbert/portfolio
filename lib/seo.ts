import type { Metadata } from "next";

export const SITE_URL = "https://guillermoalbert.dev";

// Reciprocal hreflang map. The three routes (/, /en, /fr) all declare the same
// alternates so crawlers and AI engines can find every language version.
export const LANGUAGE_ALTERNATES = {
  es: "/",
  en: "/en",
  fr: "/fr",
} as const;

type Locale = keyof typeof LANGUAGE_ALTERNATES;

const TITLE = "Guillermo Albert García — Backend-first Full Stack Developer";

const DESCRIPTION: Record<Locale, string> = {
  es: "Guillermo Albert García — Desarrollador Full Stack backend-first. Java, Spring, Angular, PostgreSQL. Biólogo de formación que hoy diseña APIs y despliega contenedores en producción.",
  en: "Guillermo Albert García — Backend-first Full Stack Developer. Java, Spring, Angular, PostgreSQL. A biologist by training, now designing APIs and deploying containers to production.",
  fr: "Guillermo Albert García — Développeur Full Stack backend-first. Java, Spring, Angular, PostgreSQL. Biologiste de formation, je conçois des API et déploie des conteneurs en production.",
};

const OG_LOCALE: Record<Locale, string> = { es: "es_ES", en: "en_GB", fr: "fr_FR" };

// The build-time share image (app/opengraph-image.tsx) is served at this path.
// Referenced explicitly because each route sets its own `openGraph`, which would
// otherwise drop the auto-attached image on every locale. Resolved to an absolute
// URL via `metadataBase` (set in each root layout via rootMetadata).
const OG_IMAGE = "/opengraph-image";

// Per-locale metadata shared by the language routes. Relative URLs resolve
// against `metadataBase` (set in each root layout via rootMetadata).
export function localeMetadata(locale: Locale): Metadata {
  const path = LANGUAGE_ALTERNATES[locale];
  const description = DESCRIPTION[locale];
  return {
    description,
    alternates: { canonical: path, languages: LANGUAGE_ALTERNATES },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Guillermo Albert García",
      title: TITLE,
      description,
      locale: OG_LOCALE[locale],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
    },
    twitter: { card: "summary_large_image", title: TITLE, description, images: [OG_IMAGE] },
  };
}

// Full metadata for a locale's root layout: the global, language-neutral fields
// (title template, keywords, author, robots, metadataBase) merged with the
// per-locale bits from localeMetadata (description, canonical, hreflang, og,
// twitter). Each route group's root layout exports rootMetadata(locale).
export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Guillermo Albert García — Backend-first Full Stack Developer",
      template: "%s · Guillermo Albert García",
    },
    keywords: [
      "Guillermo Albert García",
      "Backend-first Full Stack Developer",
      "Full Stack Developer",
      "Backend Developer",
      "Java",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "Docker",
      "Alicante",
      "España",
      "remoto",
    ],
    authors: [{ name: "Guillermo Albert García", url: SITE_URL }],
    creator: "Guillermo Albert García",
    robots: { index: true, follow: true },
    ...localeMetadata(locale),
  };
}
