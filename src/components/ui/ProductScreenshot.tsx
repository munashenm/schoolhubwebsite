import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductScreenshotProps = {
  title: string;
  description?: string;
  alt: string;
  src?: string | null;
  aspect?: "video" | "wide" | "square";
  className?: string;
  priority?: boolean;
};

const aspectMap = {
  video: "aspect-[16/10]",
  wide: "aspect-[16/9]",
  square: "aspect-[4/3]",
};

/**
 * Reusable product screenshot frame.
 * Pass a real `src` when assets are available under /public/images/screenshots/.
 * Without `src`, renders a structured placeholder ready for later insertion.
 */
export function ProductScreenshot({
  title,
  description,
  alt,
  src,
  aspect = "video",
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
        <div className={cn("relative bg-[#eef2f6]", aspectMap[aspect])}>
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-top bg-[#eef2f6]"
              sizes="(max-width: 768px) 100vw, 960px"
              priority={priority}
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col"
              role="img"
              aria-label={alt}
            >
              <div className="flex border-b border-border/80 bg-white">
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
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="h-3 w-28 rounded bg-brand/20" />
                      <div className="mt-3 h-5 w-48 rounded bg-ink/15 sm:w-64" />
                    </div>
                    <div className="h-8 w-24 rounded-md bg-brand/80" />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-border bg-white p-3"
                      >
                        <div className="h-2.5 w-16 rounded bg-ink/10" />
                        <div className="mt-3 h-6 w-12 rounded bg-ink/15" />
                        <div className="mt-3 h-2 w-full rounded bg-ink/[0.05]" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 overflow-hidden rounded-lg border border-border bg-white">
                    <div className="grid grid-cols-4 gap-2 border-b border-border bg-[#f8fafb] px-3 py-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-2 rounded bg-ink/10" />
                      ))}
                    </div>
                    {[1, 2, 3, 4].map((row) => (
                      <div
                        key={row}
                        className="grid grid-cols-4 gap-2 border-b border-border/70 px-3 py-3 last:border-0"
                      >
                        {[1, 2, 3, 4].map((col) => (
                          <div
                            key={col}
                            className="h-2 rounded bg-ink/[0.06]"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-auto border-t border-dashed border-border bg-white/70 px-4 py-3 text-center">
                <p className="text-xs font-medium text-ink-soft">{title}</p>
                <p className="mt-0.5 text-[11px] text-muted-soft">
                  Screenshot placeholder — replace with live SchoolHub UI
                </p>
              </div>
            </div>
          )}
        </div>
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
