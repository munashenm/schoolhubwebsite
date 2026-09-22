import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { moduleGroups } from "@/lib/content";
import { pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Modules",
  "Build the SchoolHub your institution needs — core, business, operations, integrations and optional modules for schools and colleges.",
  "/modules",
);

export default function ModulesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Modules", path: "/modules" },
        ])}
      />
      <PageHero
        eyebrow="Modules"
        title="Build the SchoolHub your institution needs"
        description="Start with core academic and administration modules. Add business, operations and integrations as your institution grows — with clear status on what is available today."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Modules" },
        ]}
      />
      <Section>
        <Container className="space-y-14">
          {moduleGroups.map((group) => (
            <div key={group.title}>
              <SectionHeading
                title={group.title}
                description={group.description}
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  const body = (
                    <>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-ink">{item.title}</h3>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="mt-2 text-sm text-muted">{item.description}</p>
                    </>
                  );
                  return item.href ? (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
                    >
                      {body}
                    </Link>
                  ) : (
                    <article
                      key={item.title}
                      className="rounded-xl border border-border bg-surface p-5"
                    >
                      {body}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </Container>
      </Section>
      <FinalCta title="Need a module configured for your institution?" />
    </>
  );
}
