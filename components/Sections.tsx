import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

// The full page body, shared by the language routes (/, /en, /fr). The text is
// the same Spanish-default markup; the client swaps it per language and each
// route declares its own localized metadata + hreflang (see lib/seo.ts).
export default function Sections() {
  return (
    <main id="top" tabIndex={-1}>
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
}
