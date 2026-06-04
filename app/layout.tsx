import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Interactions from "@/components/Interactions";

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

const SITE_URL = "https://guillermoalbert.dev";
const DESCRIPTION =
  "Guillermo Albert García — Desarrollador Full Stack backend-first. Java, Spring, Angular. De secuenciar datos en un laboratorio a desplegar contenedores en producción.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Guillermo Albert García — Full Stack Developer",
    template: "%s · Guillermo Albert García",
  },
  description: DESCRIPTION,
  keywords: [
    "Guillermo Albert García",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Guillermo Albert García",
    title: "Guillermo Albert García — Full Stack Developer",
    description: DESCRIPTION,
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo Albert García — Full Stack Developer",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

// Structured data (schema.org Person) for SEO E-E-A-T and AI/LLM attribution.
// All facts here are already shown on the site.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guillermo Albert García",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
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
  knowsAbout: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "REST APIs", "ETL"],
  sameAs: [
    "https://github.com/GuillermoAlbert",
    "https://www.linkedin.com/in/guillermo-albert-garcia",
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
        {/* Reads localStorage before React hydrates to prevent dark-mode flash */}
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
      <body data-lang="es" suppressHydrationWarning>
        <a className="skip" href="#top">
          Saltar al contenido
        </a>
        <Topbar />
        {children}
        <Footer />
        <Interactions />
      </body>
    </html>
  );
}
