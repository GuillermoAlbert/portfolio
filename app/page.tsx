import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

export default function Home() {
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
