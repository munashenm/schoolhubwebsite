import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { PublicDeletionRequestForm, PublicDeletionStatusForm } from "@/components/privacy/DeletionForms";
import { siteConfig } from "@/lib/config";
import { pageMeta } from "@/lib/pages";

export const metadata: Metadata = pageMeta(
  "Request Account or Data Deletion",
  "Request SchoolHub SA account or personal-information deletion and follow up with your request reference without installing the app.",
  "/data-deletion",
);

export default function DataDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy / SchoolHub application"
        title="Request account or data deletion"
        description="You can request a review of your SchoolHub SA account or personal information without signing in or installing the application."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Data deletion" }]}
      />
      <Section>
        <Container className="max-w-3xl space-y-8">
          <div className="rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted sm:p-6">
            <h2 className="mb-3 text-xl font-semibold text-ink">How requests are handled</h2>
            <p>
              SchoolHub SA records your request in the existing platform privacy queue. If your
              institution is identified, its authorised reviewer can see the request; SchoolHub
              platform privacy administrators can also review it. Identity verification is
              required before eligible account actions are taken.
            </p>
            <p className="mt-3">
              Submitting this form does not automatically delete any data. After identity
              verification, an authorised reviewer can disable the portal sign-in, replace
              its email, name, phone, profile image and password, and remove its passkeys,
              remembered devices, push subscriptions and personal notification inbox.
              The account row remains linked to the institution&apos;s learner, guardian,
              educator or staff records. Learner marks, attendance, enrolment, fees,
              invoices, payroll and other school records are retained by the institution,
              together with the request history and the name and email supplied on this form.
              The reviewer records the reason for retention. Simply turning off access
              without replacing the sign-in details is not treated as account deletion.
            </p>
            <p className="mt-3">
              See the{" "}
              <Link className="font-medium text-brand underline" href="/application-privacy">
                SchoolHub application privacy policy
              </Link>
              . For enquiries, contact{" "}
              <a className="font-medium text-brand underline" href={`mailto:${siteConfig.email.general}`}>
                {siteConfig.email.general}
              </a>
              .
            </p>
          </div>
          <section aria-labelledby="request-heading" className="space-y-4">
            <h2 id="request-heading" className="text-2xl font-semibold text-ink">Submit a request</h2>
            <PublicDeletionRequestForm />
          </section>
          <section aria-labelledby="status-heading" className="space-y-4">
            <h2 id="status-heading" className="text-2xl font-semibold text-ink">Check an existing request</h2>
            <p className="text-sm text-muted">
              Enter your reference and the email address supplied in the original request.
              The status checker shows only the request&apos;s status, not your private details.
            </p>
            <PublicDeletionStatusForm />
          </section>
          <p className="text-xs leading-relaxed text-muted">
            Requests are processed by the SchoolHub SA application backend at{" "}
            <a href={siteConfig.applicationUrl} className="text-brand underline">
              {siteConfig.applicationUrl}
            </a>
            . This marketing website does not maintain a second account-deletion database.
          </p>
        </Container>
      </Section>
    </>
  );
}
