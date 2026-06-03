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

export const metadata: Metadata = {
  title: "Guillermo Albert García — Full Stack Developer",
  description:
    "Guillermo Albert García — Desarrollador Full Stack backend-first. Java, Spring, Angular. De secuenciar datos en un laboratorio a desplegar contenedores en producción.",
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
      </head>
      <body data-lang="es" suppressHydrationWarning>
        <a className="skip" href="#work">
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
