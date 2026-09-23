import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductScreenshotProps = {
  title: string;
  description?: string;
  alt: string;
  src?: string | null;
  /** Intrinsic pixel size — keeps the full UI visible without crop/zoom. */
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Browser-chrome product screenshot.
 * Real captures render at their natural aspect ratio so nothing is cropped or over-zoomed.
 */
export function ProductScreenshot({
  title,
  description,
  alt,
  src,
  width = 1280,
  height = 720,
  className,
  priority,
}: ProductScreenshotProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_60px_-28px_rgba(10,22,40,0.45)]">
        <div className="flex items-center gap-2 border-b border-border bg-[#f0f3f6] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7dde5]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7dde5]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7dde5]" aria-hidden />
          <div className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-muted-soft ring-1 ring-border">
            app.schoolhubsa.co.za
          </div>
        </div>
        {src ? (
          <div className="bg-[#e8edf2]">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="block h-auto w-full"
              sizes="(max-width: 768px) 100vw, 1100px"
              priority={priority}
            />
          </div>
        ) : (
          <div
            className="relative aspect-[16/10] bg-[#eef2f6]"
            role="img"
            aria-label={alt}
          >
            <div className="absolute inset-0 flex flex-col">
              <div className="flex flex-1 border-b border-border/80 bg-white">
                <div className="hidden w-44 shrink-0 border-r border-border/80 p-4 sm:block">
                  <div className="h-3 w-24 rounded bg-ink/10" />
                  <div className="mt-5 space-y-2.5">
                    {[72, 58, 64, 48, 60].map((w) => (
                      <div
                        key={w}
                        className="h-2.5 rounded bg-ink/[0.06]"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1 p-4 sm:p-6">
                  <div className="h-3 w-28 rounded bg-brand/20" />
                  <div className="mt-3 h-5 w-48 rounded bg-ink/15 sm:w-64" />
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-border bg-white p-3"
                      >
                        <div className="h-2.5 w-16 rounded bg-ink/10" />
                        <div className="mt-3 h-6 w-12 rounded bg-ink/15" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-dashed border-border bg-white/70 px-4 py-3 text-center">
                <p className="text-xs font-medium text-ink-soft">{title}</p>
                <p className="mt-0.5 text-[11px] text-muted-soft">
                  Screenshot placeholder
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {(description || !src) && (
        <figcaption className="mt-3 text-sm text-muted">
          <span className="font-medium text-ink-soft">{title}</span>
          {description ? ` — ${description}` : null}
        </figcaption>
      )}
    </figure>
  );
}
