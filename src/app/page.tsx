import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-rule px-6 py-6 text-center font-mono text-xs text-ink-soft">
        Built with Claude Code.
      </footer>
    </>
  );
}
