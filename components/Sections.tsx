import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { T, type Locale } from "@/lib/i18n";

// The full page, shared by the language routes (/, /en, /fr). Each route passes
// its locale so the static HTML is generated in the right language at build
// time; the client toggle (Interactions.tsx) swaps it live via data-* attrs.
export default function Sections({ locale = "es" }: { locale?: Locale }) {
  return (
    <>
      <T
        locale={locale}
        as="a"
        className="skip"
        href="#top"
        es="Saltar al contenido"
        en="Skip to content"
        fr="Aller au contenu"
      />
      <Topbar locale={locale} />
      <main id="top" tabIndex={-1}>
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Stack locale={locale} />
        <Projects locale={locale} />
        <Publications locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
