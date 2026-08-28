"use client";

import { useEffect, useRef, useState } from "react";
import { backtest } from "@/lib/content";

const MAX = Math.max(...backtest.rows.map((r) => r.value));

export function BacktestChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="mt-5" ref={ref}>
      <figcaption className="font-mono text-xs text-ink-soft">
        {backtest.title}
      </figcaption>
      <div className="mt-3 space-y-3">
        {backtest.rows.map((row, i) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="w-40 shrink-0 text-xs text-ink-soft sm:w-56 sm:text-sm">
              {row.label}
            </span>
            <div className="min-w-0 flex-1">
              <div
                className="h-4 rounded-r-[4px] transition-[width] ease-out motion-reduce:transition-none"
                style={{
                  width: visible ? `${(row.value / MAX) * 100}%` : "0%",
                  backgroundColor: row.highlight ? "#0ca30c" : "#c3c2b7",
                  transitionDuration: "900ms",
                  transitionDelay: `${i * 120}ms`,
                }}
              />
            </div>
            <span className="w-16 shrink-0 text-right font-mono text-xs tabular-figures sm:text-sm">
              {row.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-soft">{backtest.unit}, full season</p>
    </figure>
  );
}
