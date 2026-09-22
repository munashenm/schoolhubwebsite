import type { Metadata } from "next";
import { DemoForm } from "@/components/forms/Forms";
import { JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Request a Demo",
  defaultDescriptions.demo,
  "/demo",
);

export default function DemoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Request a Demo", path: "/demo" },
        ])}
      />
      <PageHero
        eyebrow="Demo"
        title="Request your SchoolHub demo"
        description="Tell us about your institution. We will walk through the platform with your use cases in mind — schools, colleges or training organisations, locally or internationally."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a Demo" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-ink">
              What to expect
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              <li>· A focused walkthrough of SchoolHub modules relevant to you</li>
              <li>· Discussion of permissions, portals and academic structure</li>
              <li>· Clear next steps with the {siteConfig.parentCompany.name} team</li>
            </ul>
            <p className="mt-8 text-sm text-muted">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.email.sales}`}
                className="font-medium text-brand hover:underline"
              >
                {siteConfig.email.sales}
              </a>
            </p>
          </div>
          <div className="lg:col-span-7">
            <DemoForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
