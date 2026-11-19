import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/pages";
import { applicationPrivacySections } from "@/lib/application-privacy";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = pageMeta(
  "Application Privacy Policy",
  "How the SchoolHub SA application handles personal information for schools, learners, guardians and staff.",
  "/application-privacy",
);

export default function ApplicationPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal / SchoolHub application"
        title="Application Privacy Policy"
        description="How the SchoolHub SA web and Android application processes school, learner, guardian and staff information. This policy is separate from the marketing website policy and each institution's own notice."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Application Privacy Policy" },
        ]}
      />
      <Section>
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          <p className="rounded-xl border border-border bg-surface p-5">
            This page describes the SchoolHub SA application at{" "}
            <a className="font-medium text-brand underline" href={siteConfig.applicationUrl}>
              {siteConfig.applicationUrl}
            </a>
            . For the marketing website&apos;s own enquiries and contact forms, see{" "}
            <Link className="font-medium text-brand underline" href="/privacy">
              Marketing website Privacy Policy
            </Link>
            .
          </p>
          {applicationPrivacySections().map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="text-lg font-semibold text-ink">Request account or data deletion</h2>
            <p className="mt-2">
              You may submit a request without installing or signing in to the app.
              Submission is reviewed; it does not automatically erase school records.
            </p>
            <Link href="/data-deletion" className="mt-3 inline-block font-semibold text-brand underline">
              Open the data-deletion request page
            </Link>
          </div>
          <p className="text-xs text-muted-soft">
            Updated 19 November 2026. This document describes the current application implementation;
            it does not replace a school&apos;s own privacy notice or legal obligations.
          </p>
        </Container>
      </Section>
    </>
  );
}
