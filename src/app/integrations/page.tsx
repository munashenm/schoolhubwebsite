import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { communicationFeatures, optionalModules } from "@/lib/content";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Integrations",
  defaultDescriptions.integrations,
  "/integrations",
);

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations" },
        ])}
      />
      <PageHero
        eyebrow="Integrations"
        title="Connect SchoolHub to the way your institution already works"
        description="Start with core platform communication. Add optional integrations and institution-specific extensions as your deployment grows."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Integrations" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="In-platform communication"
              description="Announcements and notifications keep students, parents and staff informed. SMS, WhatsApp or email channel integrations are treated as integration-ready / optional integrations — not assumed defaults."
            />
            <ul className="mt-6 space-y-2">
              {communicationFeatures.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
          {siteConfig.saSams.enabled ? (
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-soft">
                Configurable · South Africa
              </p>
              <h2 className="mt-2 text-xl font-semibold text-ink">
                {siteConfig.saSams.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {siteConfig.saSams.summary}
              </p>
              <p className="mt-3 text-sm text-muted-soft">
                {siteConfig.saSams.detail}
              </p>
              <p className="mt-4 text-xs font-medium text-brand">
                Current status: {siteConfig.saSams.status.replace("-", " ")}
              </p>
              <p className="mt-4 text-xs text-muted-soft">
                Update wording in <code>src/lib/config.ts</code> as integration
                work progresses. Do not claim government certification unless
                formally obtained.
              </p>
            </div>
          ) : null}
        </Container>
      </Section>
      <Section tone="surface">
        <Container>
          <SectionHeading
            title="Optional modules & extensions"
            description="SchoolHub can grow with add-ons and custom development from Cyber Developers."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {optionalModules.map((module) => (
              <article
                key={module.title}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h3 className="text-sm font-semibold text-ink">{module.title}</h3>
                <p className="mt-2 text-sm text-muted">{module.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact">Need something specific?</Button>
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
