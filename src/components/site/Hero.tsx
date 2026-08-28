export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
      <p className="ledger-line font-mono text-xs tracking-widest text-ink-soft uppercase">
        Brian Kileo — CPA (T) · SAP FI · MBA Business Analytics
      </p>
      <h1
        className="ledger-line mt-4 font-heading text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl"
        style={{ animationDelay: "80ms" }}
      >
        I build systems that have to balance.
        <br />
        Literally.
      </h1>

      <div
        role="img"
        aria-label="Ledger entry: Debit, finance and audit — CPA (T), SAP FI, four years accounts payable and audit. Credit, data and build — Python, SQL, PostgreSQL. Balance: the same person does both. Balanced."
        className="mt-10 overflow-x-auto rounded-md border border-rule bg-card px-5 py-4 font-mono text-sm tabular-figures sm:text-base"
      >
        <div
          className="ledger-line flex items-baseline gap-3 whitespace-nowrap"
          style={{ animationDelay: "220ms" }}
        >
          <span className="w-8 shrink-0 text-ink-soft">DR</span>
          <span className="shrink-0">Finance &amp; audit</span>
          <span className="flex-1 border-b border-dotted border-rule" aria-hidden />
          <span className="shrink-0 text-ink-soft">CPA (T) · SAP FI · 4yr AP/audit</span>
        </div>
        <div
          className="ledger-line mt-2 flex items-baseline gap-3 whitespace-nowrap"
          style={{ animationDelay: "340ms" }}
        >
          <span className="w-8 shrink-0 text-verified">CR</span>
          <span className="shrink-0">Data &amp; build</span>
          <span className="flex-1 border-b border-dotted border-rule" aria-hidden />
          <span className="shrink-0 text-ink-soft">Python · SQL · PostgreSQL</span>
        </div>
        <div className="my-3 border-t border-rule" aria-hidden />
        <div
          className="ledger-line flex items-baseline gap-3 whitespace-nowrap font-semibold"
          style={{ animationDelay: "460ms" }}
        >
          <span className="w-8 shrink-0">BAL</span>
          <span className="shrink-0">→ the same person does both</span>
          <span className="flex-1 border-b border-dotted border-rule" aria-hidden />
          <span className="stamp-in shrink-0 text-verified" style={{ animationDelay: "620ms" }}>
            ✓ BALANCED
          </span>
        </div>
      </div>
    </section>
  );
}
