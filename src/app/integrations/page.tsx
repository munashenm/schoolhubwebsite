import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteConfig, statusLabels } from "@/lib/config";
import { communicationFeatures } from "@/lib/content";
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
        title="Connect SchoolHub to how your institution already works"
        description="SMS, email and payment gateways are available. SA-SAMS import is optional for schools that already use it. Access control is still planned."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Integrations" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Messaging integrations"
              description="Keep students, parents and staff informed with channels that are actually available today."
            />
            <ul className="mt-6 space-y-2">
              {communicationFeatures.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  · {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <StatusBadge status={siteConfig.integrationStatus.sms} />
              <StatusBadge status={siteConfig.integrationStatus.email} />
            </div>
            <p className="mt-4 text-xs text-muted-soft">
              WhatsApp and push notifications:{" "}
              {statusLabels[siteConfig.featureStatus.whatsapp].toLowerCase()}.
            </p>
          </div>
          {siteConfig.saSams.enabled ? (
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-soft">
                  South Africa
                </p>
                <StatusBadge status={siteConfig.saSams.status} />
              </div>
              <h2 className="mt-2 text-xl font-semibold text-ink">
                {siteConfig.saSams.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {siteConfig.saSams.summary}
              </p>
              <p className="mt-3 text-sm text-muted-soft">
                {siteConfig.saSams.detail}
              </p>
            </div>
          ) : null}
        </Container>
      </Section>
      <Section tone="surface">
        <Container>
          <SectionHeading
            title="Payments and what is still planned"
            description="PayFast, Ozow and Yoco can be enabled per institution. Access control is planned. SA-SAMS import is optional and is not a government certification."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {(
              [
                ["Payments", siteConfig.integrationStatus.payments],
                ["Access control", siteConfig.integrationStatus.accessControl],
                ["SA-SAMS", siteConfig.integrationStatus.saSams],
              ] as const
            ).map(([title, status]) => (
              <article
                key={title}
                className="rounded-xl border border-border bg-background p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <StatusBadge status={status} />
                </div>
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
