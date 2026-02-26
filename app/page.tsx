import Hero from "@/components/Hero";
import Navbar from "@/components/Navigation/Navbar";
import SectionWrapper from "@/components/Layout/SectionWrapper";
import Timeline from "@/components/Experience/Timeline";
import ProjectCard from "@/components/Projects/ProjectCard";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import { experiences, projects, aboutMe } from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ThemeToggle />

      <Hero />

      <SectionWrapper
        id="about"
        title="About Me"
        subtitle="Fullstack Developer working with global production standards."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aboutMe.description.map((text, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {text}
              </p>
            ))}
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden group shadow-2xl border border-border">
            <Image
              src="/my-image.png"
              alt="Pravin Kumar"
              style={{
                objectPosition: "0px -10px"
              }}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 glass md:m-6 md:rounded-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">My Philosophy</p>
              <p className="md:text-xl text-sm font-bold">"Clean code, scalable architecture, and pixel-perfect delivery."</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="experience"
        title="Work Experience"
        subtitle="A snapshot of my professional journey and technical contributions."
        className="bg-secondary/20"
      >
        <Timeline items={experiences} />
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        title="Featured Projects"
        subtitle="A collection of production-grade applications built for clients across the globe."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="skills"
        title="Technical Expertise"
        subtitle="Modern stack focused on performance, scalability, and developer experience."
        className="bg-secondary/20"
      >
        <Skills />
      </SectionWrapper>

      <SectionWrapper
        id="why-me"
        title="Why Work With Me"
        subtitle="Values I bring to every project as a Fullstack Developer."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Performance First", desc: "Optimizing for load speed and user experience from day one." },
            { title: "Scalable Architecture", desc: "Building systems that grow seamlessly with your business." },
            { title: "Global Collaboration", desc: "Experienced in remote workflows with Indian and European clients." },
            { title: "Clear Communication", desc: "Proactive updates and agile methodology for on-time delivery." }
          ].map((item, i) => (
            <div key={i} className="p-8 glass rounded-2xl hover:border-primary/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">{i + 1}</span>
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        title="Get In Touch"
        subtitle="Ready to discuss your next project? Drop a message below."
        className="bg-secondary/20"
      >
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}