import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import {
  FinalCta,
  JsonLd,
  PageHero,
} from "@/components/ui/PagePrimitives";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { differentiators, platformModules } from "@/lib/content";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Platform",
  defaultDescriptions.platform,
  "/platform",
);

export default function PlatformPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ])}
      />
      <PageHero
        eyebrow="Platform"
        title="One platform for institutional operations"
        description="SchoolHub is a School & College Management Platform — a student information system, academic management layer and administration suite working together."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Platform" },
        ]}
      />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                title="Replace disconnected tools with one operating system for education"
                description="Admissions, learner records, academics, attendance, portals and reporting should not live in separate silos. SchoolHub keeps them connected."
              />
              <ul className="mt-8 space-y-3">
                {differentiators.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/demo">Request a Demo</Button>
                <Button href="/features" variant="secondary">
                  Browse features
                </Button>
              </div>
            </div>
            <ProductScreenshot
              title="Platform overview"
              alt="SchoolHub platform overview screenshot placeholder"
              description="Core institutional modules in one interface."
            />
          </div>
        </Container>
      </Section>
      <Section tone="surface">
        <Container>
          <SectionHeading
            title="Module landscape"
            description="Every major operational area is designed to connect — not operate in isolation."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformModules.map((module) => (
              <article
                key={module.title}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h3 className="font-semibold text-ink">{module.title}</h3>
                <p className="mt-2 text-sm text-muted">{module.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
