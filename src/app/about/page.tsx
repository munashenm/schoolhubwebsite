import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "About",
  defaultDescriptions.about,
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title={`${siteConfig.name}: school and college management, built properly`}
        description={`${siteConfig.positioning} ${siteConfig.name} is a complete learner and institution management platform for schools, colleges, academies and training institutions.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <Section>
        <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            {siteConfig.name} brings administration, academics, communication,
            attendance, reporting, applications and learner services together in
            one secure platform. It is broader than an LMS — a School & College
            Management Platform, student information system and academic
            management layer in one product.
          </p>
          <p>
            The product serves institutions in South Africa, Zimbabwe, Namibia,
            Botswana and across wider Africa, with relevance for European and
            international private schools and colleges. The name remains{" "}
            {siteConfig.name}; the market is not limited to one country.
          </p>
        </Container>
      </Section>
      <Section tone="surface">
        <Container>
          <div className="grid gap-8 rounded-2xl border border-border bg-background p-8 lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Built by Cyber Developers"
                title="Product engineering behind the platform"
                description={siteConfig.parentCompany.description}
              />
              <p className="mt-4 text-sm text-muted">
                {siteConfig.name} is one of {siteConfig.parentCompany.name}&apos;s
                education technology platforms — developed and supported as
                commercial software.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:justify-center lg:items-end">
              <Button href={siteConfig.parentCompany.url} external>
                Visit Cyber Developers
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
