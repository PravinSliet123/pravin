import About from "@/src/components/about/About";
import Contact from "@/src/components/contact/Contact";
import Experience from "@/src/components/experience/Experience";
import Hero from "@/src/components/hero/Hero";
import Projects from "@/src/components/projects/Projects";
import Skills from "@/src/components/skills/Skills";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
