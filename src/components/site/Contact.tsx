import { links } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="font-heading text-xl font-bold tracking-tight">
        Get in touch
      </h2>
      <p className="mt-3 max-w-2xl">
        Open to roles in SAP / financial systems, finance analytics, or data
        engineering.
      </p>
      <p className="mt-2 font-mono text-xs text-ink-soft">
        Chicago area · open to hybrid or remote
      </p>
      <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        <a
          href={`mailto:${links.email}`}
          className="font-medium underline decoration-rule underline-offset-4 hover:decoration-foreground"
        >
          {links.email}
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-rule underline-offset-4 hover:decoration-foreground"
        >
          linkedin.com/in/briankileo
        </a>
      </p>
      <p className="mt-6 max-w-2xl text-sm text-ink-soft">
        Authorized to work in the U.S. on F-1 OPT (effective July 2026),
        STEM OPT-eligible through 2029.
      </p>
    </section>
  );
}
