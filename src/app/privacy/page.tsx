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
        description={`How the ${siteConfig.name} marketing website handles personal information, including demo and contact forms.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <Section>
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
          <p>
            This notice applies to the public marketing website at{" "}
            {siteConfig.domain}. It is written for the Protection of Personal
            Information Act 4 of 2013 (POPIA). The SchoolHub application at{" "}
            <a className="text-brand hover:underline" href={siteConfig.applicationUrl}>
              {siteConfig.applicationUrl}
            </a>{" "}
            has its own privacy notice for each institution’s learners, parents
            and staff.
          </p>
          <p>Last updated: 12 November 2026.</p>

          <h2 className="text-lg font-semibold text-ink">Who is responsible</h2>
          <p>
            {siteConfig.parentCompany.name} operates this website and is the
            responsible party for enquiries submitted here. Privacy requests,
            including requests to the information officer, go to{" "}
            <a
              className="text-brand hover:underline"
              href={`mailto:${siteConfig.email.general}`}
            >
              {siteConfig.email.general}
            </a>{" "}
            or {siteConfig.phone.display}. Postal contact: 135 Rivonia Road,
            Sandton, Gauteng, South Africa.
          </p>

          <h2 className="text-lg font-semibold text-ink">Information we collect</h2>
          <p>
            When you submit a demo or contact form we collect the details you
            type: name, institution, institution type, country, email, phone,
            approximate learner numbers, enquiry type and message.
          </p>
          <p>
            The form also records the IP address of the submission and the time
            it was sent. That information is included in the email to our sales
            team and is used to investigate abuse and to rate-limit repeated
            submissions. We do not use it to build a marketing profile.
          </p>
          <p>
            The site does not run third-party advertising or analytics cookies.
            Your browser may still store ordinary technical logs on the host
            that serves the pages.
          </p>

          <h2 className="text-lg font-semibold text-ink">Why we use it</h2>
          <p>
            We use enquiry details to answer sales, demo, support, partnership
            and privacy requests, and to keep a record of that conversation.
            The lawful basis is your request to be contacted, and our legitimate
            interest in securing the form against automated abuse.
          </p>

          <h2 className="text-lg font-semibold text-ink">How long we keep it</h2>
          <p>
            Enquiry emails and the personal information in them are kept for up
            to 24 months after our last message about that enquiry. We keep them
            longer only when a contract, invoice or legal claim requires it.
            After that period they are deleted or reduced so they no longer
            identify you.
          </p>

          <h2 className="text-lg font-semibold text-ink">Who we share it with</h2>
          <p>
            We do not sell form submissions. {siteConfig.parentCompany.name}{" "}
            staff handling the enquiry can read them. Email and website hosting
            providers process them only so the message can be delivered and the
            site can stay online.
          </p>

          <h2 className="text-lg font-semibold text-ink">Your rights</h2>
          <p>You can ask us to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>confirm whether we hold information about you, and for a copy;</li>
            <li>correct information that is inaccurate or incomplete;</li>
            <li>delete information we no longer need for the enquiry;</li>
            <li>object to processing that is not required to answer you;</li>
            <li>withdraw a request to be contacted.</li>
          </ul>
          <p>
            Send the request from the email address you used on the form, to{" "}
            {siteConfig.email.general}. You can also complain to the Information
            Regulator at{" "}
            <a
              className="text-brand hover:underline"
              href="https://inforegulator.org.za"
            >
              inforegulator.org.za
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">Security</h2>
          <p>
            The site is served over HTTPS. Form submissions are emailed to the
            sales inbox. No payment card data is collected on this marketing
            website.
          </p>
        </Container>
      </Section>
    </>
  );
}
