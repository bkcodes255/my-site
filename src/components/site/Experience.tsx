import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="font-heading text-xl font-bold tracking-tight">Experience</h2>
      <ol className="mt-6 divide-y divide-rule border-y border-rule">
        {experience.map((role, i) => (
          <Reveal
            as="li"
            key={`${role.org}-${role.range}`}
            delay={i * 60}
            className="flex flex-col gap-2 py-4 sm:flex-row sm:gap-6"
          >
            <span className="shrink-0 font-mono text-xs tabular-figures text-ink-soft sm:w-28 sm:pt-0.5">
              {role.range}
            </span>
            <div className="flex-1">
              <p>
                <span className="font-medium">{role.title}</span>
                <span className="text-ink-soft"> — {role.org}, {role.place}</span>
              </p>
              {"bullets" in role && role.bullets && (
                <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden>·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
