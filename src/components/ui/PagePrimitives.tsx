import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-14 sm:py-16 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-ink">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
        ) : null}
        <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </Container>
    </div>
  );
}

export function FeatureList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
        >
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FinalCta({
  title = "See SchoolHub in action",
  description = "Request a demo and walk through the platform with our team. We will map it to how your institution actually operates.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-ink px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.cta.primary.href} variant="invert" size="lg">
                {siteConfig.cta.primary.label}
              </Button>
              <Button
                href={siteConfig.cta.secondary.href}
                variant="outline"
                size="lg"
              >
                {siteConfig.cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
