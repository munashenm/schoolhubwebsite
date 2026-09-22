import { cn } from "@/lib/utils";

type StoreBadgesProps = {
  className?: string;
  /** Visual only — apps are not live yet */
  comingSoon?: boolean;
};

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("h-6 w-6", className)}
      fill="currentColor"
    >
      <path d="M16.365 1.43c0 1.14-.418 2.2-1.176 3.02-.78.85-2.07 1.51-3.18 1.42-.13-1.1.4-2.25 1.15-3.05.78-.85 2.15-1.47 3.2-1.39zM20.5 17.2c-.56 1.28-.83 1.85-1.55 2.98-.99 1.55-2.39 3.48-4.13 3.5-1.54.02-1.94-.99-4.04-.98-2.1.01-2.54 1-4.08.98-1.74-.02-3.07-1.76-4.06-3.31C.64 17.2-.7 12.66.98 9.57c.92-1.7 2.57-2.77 4.35-2.8 1.62-.03 3.15 1.09 4.04 1.09.88 0 2.72-1.35 4.59-1.15.78.03 2.97.31 4.38 2.36-3.71 2.03-3.11 7.32.16 8.13z" />
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("h-6 w-6", className)}
      fill="currentColor"
    >
      <path d="M17.6 9.48l1.84-3.18a.5.5 0 10-.87-.5l-1.86 3.22A7.9 7.9 0 0012 8c-1.62 0-3.12.48-4.71 1.02L5.43 5.8a.5.5 0 10-.87.5l1.84 3.18C3.97 10.9 2.5 13.2 2.5 16v.5h19V16c0-2.8-1.47-5.1-3.9-6.52zM8.25 13.25a.75.75 0 110-1.5.75.75 0 010 1.5zm7.5 0a.75.75 0 110-1.5.75.75 0 010 1.5zM4.5 17.5h15v1.25c0 .97-.78 1.75-1.75 1.75h-.5v2a.75.75 0 01-1.5 0v-2h-7.5v2a.75.75 0 01-1.5 0v-2h-.5A1.75 1.75 0 014.5 18.75V17.5z" />
    </svg>
  );
}

export function StoreBadges({ className, comingSoon = true }: StoreBadgesProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <div
        className="inline-flex min-w-[9.5rem] items-center gap-3 rounded-xl border border-border bg-ink px-4 py-3 text-white"
        role="img"
        aria-label={comingSoon ? "iOS app coming soon" : "Download on the App Store"}
      >
        <AppleIcon className="h-7 w-7 shrink-0" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-white/60">
            {comingSoon ? "Coming soon" : "Download on the"}
          </span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </div>
      <div
        className="inline-flex min-w-[9.5rem] items-center gap-3 rounded-xl border border-border bg-ink px-4 py-3 text-white"
        role="img"
        aria-label={comingSoon ? "Android app coming soon" : "Get it on Google Play"}
      >
        <AndroidIcon className="h-7 w-7 shrink-0 text-[#3DDC84]" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-white/60">
            {comingSoon ? "Coming soon" : "Get it on"}
          </span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </div>
    </div>
  );
}
