import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/content";

const STATUS_STYLE: Record<ProjectStatus, string> = {
  VERIFIED: "border-verified text-verified",
  AUDITED: "border-verified text-verified",
  "IN PROGRESS": "border-credit text-credit",
};

export function Stamp({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-block -rotate-2 select-none rounded-sm border-2 px-2 py-0.5 font-mono text-[0.65rem] font-semibold tracking-widest uppercase transition-transform duration-200 group-hover:rotate-0 group-hover:scale-105",
        STATUS_STYLE[status]
      )}
    >
      {status}
    </span>
  );
}
