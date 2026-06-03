import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
}
