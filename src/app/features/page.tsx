import type { Metadata } from "next";
import { FeatureList, FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { featureCategories } from "@/lib/content";
import { pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Features",
  "SchoolHub SA features for schools and colleges: student management, academics, attendance, communication, finance, HR, portals, reporting, security and integrations.",
  "/features",
);

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />
      <PageHero
        eyebrow="Features"
        title="School and college management — organised by product area"
        description="Browse by category. Each capability shows whether it is available, planned, optional or on the integration roadmap."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Features" },
        ]}
      />

      <Section tone="surface" className="!py-8">
        <Container>
          <nav aria-label="Feature categories" className="flex flex-wrap gap-2">
            {featureCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-ink-soft hover:border-border-strong hover:text-ink"
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl space-y-16">
          {featureCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 border-b border-border pb-16 last:border-0 last:pb-0"
            >
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
                {category.title}
              </h2>
              <p className="mt-3 max-w-2xl text-muted">{category.description}</p>
              <div className="mt-8 space-y-8">
                {category.sections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-xl border border-border bg-surface p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-ink">
                        {section.title}
                      </h3>
                      <StatusBadge status={section.status} />
                    </div>
                    <div className="mt-5">
                      <FeatureList items={section.items} />
                    </div>
                    {"note" in section && section.note ? (
                      <p className="mt-5 text-xs leading-relaxed text-muted-soft">
                        {section.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
