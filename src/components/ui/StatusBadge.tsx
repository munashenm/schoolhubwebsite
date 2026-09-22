import type { CapabilityStatus } from "@/lib/config";
import { statusLabels } from "@/lib/config";
import { cn } from "@/lib/utils";

const tones: Record<CapabilityStatus, string> = {
  available: "bg-brand-soft text-brand-strong",
  optional: "bg-black/[0.05] text-ink-soft",
  planned: "bg-accent-soft text-accent",
  "coming-soon": "bg-ink/5 text-ink-soft",
  roadmap: "bg-brand-soft/70 text-brand-strong",
};

export function StatusBadge({
  status,
  className,
}: {
  status: CapabilityStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
        tones[status],
        className,
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
