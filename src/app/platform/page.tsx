import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import {
  FinalCta,
  JsonLd,
  PageHero,
} from "@/components/ui/PagePrimitives";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { differentiators, homeProductAreas } from "@/lib/content";
import { siteConfig } from "@/lib/config";
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
        description="SchoolHub is a School, College & Education Management Platform — admissions, academics, attendance, communication, finance roadmap, portals and administration working together. Broader than an LMS."
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
                title="Admissions, academics, finance and communication — managed from one platform"
                description="Replace disconnected tools with one operating system for education institutions."
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
                <Button href="/modules" variant="secondary">
                  Browse modules
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
            title="Major product areas"
            description="Explore the platform by capability — then open features for full detail and status labels."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeProductAreas.map((area) => (
              <a
                key={area.id}
                href={area.href}
                className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-border-strong"
              >
                <p className="text-xs font-semibold text-muted-soft">{area.id}</p>
                <h3 className="mt-2 font-semibold text-ink">{area.title}</h3>
                <p className="mt-2 text-sm text-muted">{area.summary}</p>
              </a>
            ))}
          </div>
        </Container>
      </Section>
      <Section id="mobile">
        <Container className="rounded-2xl border border-border bg-surface p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Cloud-based. Available wherever your institution works.
            </h2>
            <StatusBadge status={siteConfig.featureStatus.cloudPlatform} />
          </div>
          <p className="mt-4 max-w-3xl text-muted">
            Browser-based access, centralised information and secure sign-in —
            without depending on a single school computer. Supports multi-location
            and multi-campus institutions. Native Android &amp; iOS apps are{" "}
            <StatusBadge status={siteConfig.mobileAppStatus} className="align-middle" />.
          </p>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
