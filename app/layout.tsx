import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Interactions from "@/components/Interactions";
import { SITE_URL, localeMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jb-mono",
  display: "swap",
});

// Global, language-neutral metadata. Localized bits (description, openGraph,
// hreflang alternates) come from localeMetadata — Spanish here, EN/FR in their
// own routes (app/en, app/fr).
export const metadata: Metadata = {
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
  ...localeMetadata("es"),
};

// Structured data (schema.org Person) for SEO E-E-A-T and AI/LLM attribution.
// All facts here are already shown on the site.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guillermo Albert García",
  url: SITE_URL,
  jobTitle: "Backend-first Full Stack Developer",
  email: "guillermo.albert@outlook.com",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="light"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
        {/* Before React hydrates: resolve theme (no dark-mode flash) and set the
            document language from the URL on the /en and /fr routes. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ga-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);var p=location.pathname,l=p.indexOf('/en')===0?'en':p.indexOf('/fr')===0?'fr':'';if(l)document.documentElement.setAttribute('lang',l);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body data-lang="es" suppressHydrationWarning>
        <a className="skip" href="#top">
          Saltar al contenido
        </a>
        <Topbar />
        {children}
        <Footer />
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
