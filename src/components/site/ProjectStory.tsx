"use client";

import { useState } from "react";
import type { StoryBeat } from "@/lib/content";

export function ProjectStory({ story }: { story: StoryBeat[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 border-t border-rule pt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="font-mono text-xs tracking-widest text-ink-soft uppercase underline decoration-rule underline-offset-4 hover:decoration-foreground"
      >
        {open ? "Hide the story ↑" : "Read the story ↓"}
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          {story.map((beat) => (
            <div key={beat.label}>
              <p className="font-mono text-xs tracking-widest text-verified uppercase">
                {beat.label}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{beat.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
