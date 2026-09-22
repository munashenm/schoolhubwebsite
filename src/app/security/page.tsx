import type { Metadata } from "next";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { securityPrinciples } from "@/lib/content";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Security",
  defaultDescriptions.security,
  "/security",
);

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Security", path: "/security" },
        ])}
      />
      <PageHero
        eyebrow="Security"
        title="Access control engineered for institutions"
        description="SchoolHub protects institutional information through authentication, granular permissions, controlled cloud deployment and disciplined administration practices."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Security" },
        ]}
      />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Data backup & recovery"
            description="Backups are part of a disciplined deployment — without inventing a fixed frequency that may not match every environment."
          />
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
            <p>
              Automated database backups, secure backup storage and recovery
              procedures help protect against accidental data loss where
              configured for your deployment.
            </p>
            <p>
              Institution-specific backup and retention policies can be
              discussed as part of implementation and SLA arrangements.
            </p>
          </div>
          <SectionHeading
            title="Careful wording on compliance"
            description="We describe engineering practices — not certificates we have not earned."
          />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Deployments can be configured with POPIA-conscious data-handling
              practices for South African institutions. This is not a claim of
              formal POPIA certification.
            </p>
            <p>
              For European customers, deployments can be configured with
              GDPR-conscious data-handling practices. This is not a claim of
              GDPR certification.
            </p>
            <p>
              We do not claim ISO 27001, SOC 2 or similar certifications on this
              website unless they have been formally obtained and verified.
            </p>
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
