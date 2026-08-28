import { Stamp } from "./Stamp";
import { BacktestChart } from "./BacktestChart";
import { ProjectStory } from "./ProjectStory";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="group border border-rule bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-verified/40 hover:shadow-[0_8px_24px_-12px_rgba(20,32,43,0.25)] sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs tracking-widest text-ink-soft uppercase">
          {project.code}
        </span>
        <Stamp status={project.status} />
      </div>

      <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-2 text-ink-soft">{project.summary}</p>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
        {project.stats.map((stat, i) => (
          <div key={stat.label}>
            <dt className="text-xs text-ink-soft">{stat.label}</dt>
            <dd
              className={cn(
                "font-mono text-sm font-medium tabular-figures",
                i === 0 && "text-verified font-semibold"
              )}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {project.code === "ENTRY-FPL" && <BacktestChart />}

      {project.detail && (
        <p className="mt-5 border-l-2 border-rule pl-3 text-sm text-ink-soft">
          {project.detail}
        </p>
      )}

      {project.story && <ProjectStory story={project.story} />}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-soft">
          {project.tech.map((t, i) => (
            <li key={t}>
              {t}
              {i < project.tech.length - 1 && <span aria-hidden> ·</span>}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link.href}
            {...(project.link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-sm font-medium text-verified underline decoration-verified/40 underline-offset-4 transition-colors hover:decoration-verified"
          >
            {project.link.label} →
          </a>
        )}
      </div>
    </article>
  );
}
