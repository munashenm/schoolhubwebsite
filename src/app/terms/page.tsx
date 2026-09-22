import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { defaultDescriptions, pageMeta } from "@/lib/pages";

export const metadata: Metadata = pageMeta(
  "Terms of Use",
  defaultDescriptions.terms,
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description={`Terms governing use of the ${siteConfig.name} marketing website.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <Section>
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
          <p>
            By using {siteConfig.domain}, you agree to these terms. This website
            provides product information about {siteConfig.name}. It is not the
            SchoolHub application itself.
          </p>
          <h2 className="text-lg font-semibold text-ink">No reliance as a contract</h2>
          <p>
            Website content is informational. Commercial terms, service levels
            and data processing arrangements for the SchoolHub platform are
            agreed separately with {siteConfig.parentCompany.name}.
          </p>
          <h2 className="text-lg font-semibold text-ink">Accuracy</h2>
          <p>
            We aim to keep product descriptions current. Features, integrations
            and availability may change. Confirm details during a demo or
            proposal process.
          </p>
          <h2 className="text-lg font-semibold text-ink">Intellectual property</h2>
          <p>
            Branding, copy and design on this website are owned by{" "}
            {siteConfig.parentCompany.name} or its licensors. You may not copy
            or reuse them without permission.
          </p>
          <h2 className="text-lg font-semibold text-ink">Contact</h2>
          <p>
            Questions:{" "}
            <a
              className="text-brand hover:underline"
              href={`mailto:${siteConfig.email.general}`}
            >
              {siteConfig.email.general}
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
