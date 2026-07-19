import { Hanken_Grotesk, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import Interactions from "@/components/Interactions";
import { SITE_URL } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jb-mono",
  display: "swap",
});

// Display face for the big moments only (hero name, section titles, card
// titles, quote, contact email). Body stays Hanken; labels stay JetBrains.
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "700"],
});

// Structured data (schema.org Person) for SEO E-E-A-T and AI/LLM attribution.
// All facts here are already shown on the site.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guillermo Albert García",
  url: SITE_URL,
  jobTitle: "Backend-first Full Stack Developer",
  email: "hola@guillermoalbert.dev",
  description:
    "Desarrollador Full Stack (backend-first) especializado en Java, Spring Boot, Angular y PostgreSQL. Graduado en Biología por la Universidad de Alicante con 3 publicaciones revisadas por pares. Actualmente en Inetum, desarrollando un proyecto del sector público. Residente en La Nucía, Alicante.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Nucía",
    addressRegion: "Alicante",
    addressCountry: "ES",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Alicante" },
  knowsLanguage: ["es", "fr", "en"],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Angular",
    "PostgreSQL",
    "Docker",
    "REST APIs",
    "ETL",
    "LLM",
    "AI Agents",
    "Cloudflare Workers",
  ],
  sameAs: [
    "https://github.com/GuillermoAlbert",
    "https://www.linkedin.com/in/guillermo-albert-garcia",
    "https://scholar.google.com/citations?hl=fr&user=Xo9Er0sAAAAJ",
  ],
};

// Shared document shell rendered by every per-locale root layout. Each language
// route (/, /en, /fr) lives in its own route group with its own root layout, so
// the static HTML carries the correct `lang` at build time — crawlers that don't
// run JS read the right language on every page.
export default function RootDocument({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      data-theme="light"
      className={`${sans.variable} ${mono.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      {/* App Router renders <head> directly here (next/head is Pages-Router only). */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <meta name="theme-color" content="#ffffff" />
        {/* Resolve the theme before React hydrates so there's no dark-mode flash.
            Language no longer needs fixing here: the static HTML already ships
            with the correct `lang` per route (Interactions.tsx handles the live
            client-side language toggle). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ga-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      {/* The skip link, Topbar and Footer live in Sections (per-route) so their
          static HTML is generated in each route's language. */}
      <body data-lang={lang} suppressHydrationWarning>
        {children}
        <Interactions />
        {/* Cloudflare Web Analytics — cookieless. Only renders when the token is
            set (NEXT_PUBLIC_CF_BEACON_TOKEN in the build/deploy env), so nothing
            is hardcoded. Token: Cloudflare dashboard → Web Analytics. */}
        {process.env.NEXT_PUBLIC_CF_BEACON_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${process.env.NEXT_PUBLIC_CF_BEACON_TOKEN}"}`}
          />
        )}
      </body>
    </html>
  );
}
