import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FeatureList, FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Support & SLA",
  "SchoolHub SA support and configurable service level agreements with Cyber Developers.",
  "/support",
);

export default function SupportPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Support & SLA", path: "/support" },
        ])}
      />
      <PageHero
        eyebrow="Support"
        title={siteConfig.sla.headline}
        description={siteConfig.sla.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support & SLA" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Configurable service level agreements"
            description="SLA coverage can be structured around the operational reality of your school, college or multi-campus organisation. Response-time guarantees are agreed commercially — not published as marketing claims here."
          />
          <div>
            <FeatureList items={siteConfig.sla.areas} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.sla.cta.href}>
                {siteConfig.sla.cta.label}
              </Button>
              <Button href={siteConfig.parentCompany.url} external variant="secondary">
                Visit Cyber Developers
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCta title="Talk to us about support for your institution" />
    </>
  );
}
