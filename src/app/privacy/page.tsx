import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { defaultDescriptions, pageMeta } from "@/lib/pages";

export const metadata: Metadata = pageMeta(
  "Privacy Policy",
  defaultDescriptions.privacy,
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How the ${siteConfig.name} marketing website handles information you submit through forms.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <Section>
        <Container className="prose-like max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
          <p>
            This policy applies to the public marketing website at{" "}
            {siteConfig.domain}. The SchoolHub application at{" "}
            {siteConfig.applicationUrl} may have separate product terms and
            privacy notices for institutional deployments.
          </p>
          <h2 className="text-lg font-semibold text-ink">Information we collect</h2>
          <p>
            When you submit a demo or contact form, we collect the details you
            provide — such as name, institution, email, phone and message
            content — so we can respond to your enquiry.
          </p>
          <h2 className="text-lg font-semibold text-ink">How we use information</h2>
          <p>
            Enquiry details are used to respond to sales, demo, technical,
            partnership or general requests. They are handled by the{" "}
            {siteConfig.name} team at {siteConfig.parentCompany.name}.
          </p>
          <h2 className="text-lg font-semibold text-ink">Sharing</h2>
          <p>
            We do not sell form submissions. Information may be processed by
            service providers used to operate email, hosting or CRM tooling,
            solely to support legitimate business communication.
          </p>
          <h2 className="text-lg font-semibold text-ink">Contact</h2>
          <p>
            Privacy questions about this website:{" "}
            <a
              className="text-brand hover:underline"
              href={`mailto:${siteConfig.email.general}`}
            >
              {siteConfig.email.general}
            </a>
            .
          </p>
          <p className="text-xs text-muted-soft">
            Last updated: {new Date().getFullYear()}. Have counsel review this
            policy before public launch if required for your jurisdiction.
          </p>
        </Container>
      </Section>
    </>
  );
}
