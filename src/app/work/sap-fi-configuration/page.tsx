import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sapConfigLog, sapCourses } from "@/lib/content";
import { Stamp } from "@/components/site/Stamp";

export const metadata: Metadata = {
  title: "SAP S/4HANA FI Configuration — Brian Kileo",
  description:
    "Configuration log across SAP's S4F12 (FI Customizing: GL, AP, AR) certification track.",
};

export default function SapConfigPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/#work"
        className="font-mono text-xs text-ink-soft underline decoration-rule underline-offset-4 hover:decoration-foreground"
      >
        ← Back
      </Link>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs tracking-widest text-ink-soft uppercase">
          ENTRY-SAP
        </span>
        <Stamp status="IN PROGRESS" />
      </div>

      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        S/4HANA FI Configuration Log
      </h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        This is a training-system config log, not a production build — exercises
        completed in SAP&apos;s S4F12 course (Customizing FI: GL, AP, AR) on a
        practice tenant, toward the SAP Certified Associate exam (C_TS4FI). Each
        row is a real exercise: the T-code and what got configured.
      </p>

      <dl className="mt-6 space-y-2 border-y border-rule py-4">
        {sapCourses.map((c) => (
          <div key={c.code} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm">
            <dt className="font-mono text-xs tracking-widest text-ink-soft uppercase">
              {c.code}
            </dt>
            <dd>
              {c.name}
              <span className="ml-2 font-mono text-xs text-ink-soft">— {c.status}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 space-y-10">
        {sapConfigLog.map((unit) => (
          <section key={unit.unit}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-2">
              <h2 className="font-heading text-lg font-bold tracking-tight">
                {unit.unit}
              </h2>
              <span className="font-mono text-xs text-ink-soft">{unit.weeks}</span>
            </div>
            <table className="mt-3 w-full border-collapse text-sm">
              <colgroup>
                <col className="w-10" />
                <col className="w-24" />
                <col />
              </colgroup>
              <tbody>
                {unit.entries.map((entry) => (
                  <tr key={entry.ex} className="border-b border-rule last:border-0">
                    <td className="py-2 pr-2 align-top font-mono text-xs text-ink-soft tabular-figures">
                      {entry.ex}
                    </td>
                    <td className="py-2 pr-3 align-top font-mono text-xs tabular-figures">
                      {entry.tcode}
                    </td>
                    <td className="py-2 align-top">
                      {entry.config}
                      {"screenshots" in entry && entry.screenshots && (
                        <div className="mt-3 mb-1 grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {entry.screenshots.map((shot) => (
                            <figure
                              key={shot.src}
                              className="overflow-hidden border border-rule bg-background"
                            >
                              <Image
                                src={shot.src}
                                alt={shot.caption}
                                width={1600}
                                height={900}
                                className="h-auto w-full"
                              />
                              <figcaption className="border-t border-rule px-2 py-1.5 text-xs text-ink-soft">
                                {shot.caption}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </main>
  );
}
