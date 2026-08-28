import { projects } from "@/lib/content";
import { ProjectEntry } from "./ProjectEntry";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="font-heading text-xl font-bold tracking-tight">Work</h2>
      <p className="mt-2 text-ink-soft">
        Three entries so far — more going in as they&apos;re ready.
      </p>
      <div className="mt-6 space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.code} delay={i * 100}>
            <ProjectEntry project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
