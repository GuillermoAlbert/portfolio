import type { ElementType } from "react";

export type Locale = "es" | "en" | "fr";

export const LOCALES: Locale[] = ["es", "en", "fr"];

type TProps = {
  locale: Locale;
  /** Element to render (span by default). */
  as?: ElementType;
  /** HTML strings per language. */
  es: string;
  en: string;
  fr: string;
  /** Any extra attributes (className, href, data-*, aria-*…). */
  [attr: string]: unknown;
};

// Localized rich text. The route's language is rendered into the static HTML
// at build time (so crawlers that don't run JS read the right language), and
// the three variants travel as data attributes for the client-side toggle
// (see components/Interactions.tsx).
export function T({ locale, as: Tag = "span", es, en, fr, ...rest }: TProps) {
  const html = locale === "en" ? en : locale === "fr" ? fr : es;
  return (
    <Tag
      {...rest}
      data-es={es}
      data-en={en}
      data-fr={fr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Per-locale CV file, used for the static href/download attributes so the
// right PDF is linked even before (or without) JavaScript.
export function cvFile(locale: Locale) {
  return `Guillermo_Albert_CV_${locale.toUpperCase()}.pdf`;
}

// Contact email shown per language (hola@ for Spanish, contact@ otherwise) —
// must stay in sync with the MAIL map in components/Interactions.tsx.
export function contactEmail(locale: Locale) {
  return locale === "es" ? "hola@guillermoalbert.dev" : "contact@guillermoalbert.dev";
}
