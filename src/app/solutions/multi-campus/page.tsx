import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FeatureList, FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Multi-Campus Management",
  "Multi-campus school and college management for organisations operating across multiple sites — with campus-scoped access and consolidated reporting.",
  "/solutions/multi-campus",
);

const capabilities = [
  "Multiple campuses under one organisation",
  "Campus-specific student records",
  "Campus-specific staff",
  "Campus administrators",
  "Classes / programmes by campus",
  "Timetables by campus",
  "Fees by campus (as finance modules roll out)",
  "Attendance by campus",
  "Reports by campus",
  "Consolidated institution-wide reporting for authorised head-office users",
];

export default function MultiCampusPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Multi-Campus", path: "/solutions/multi-campus" },
        ])}
      />
      <PageHero
        eyebrow="Solutions · Multi-campus"
        title="Multi-campus management for school and college groups"
        description="Built for organisations operating from more than one site — with an Organisation → Campus hierarchy and scoped administrator access."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Multi-Campus" },
        ]}
      />
      <Section>
        <Container>
          <div className="mb-6">
            <StatusBadge status="planned" />
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeading
              title="One organisation. Multiple campuses."
              description="Head-office users see aggregated information. Campus administrators only see permitted campus information. Architecture supports Organisation → Campus A / B / C."
            />
            <div>
              <FeatureList items={capabilities} />
              <p className="mt-6 text-sm text-muted-soft">
                Multi-campus management is on the SchoolHub product roadmap.
                Speak to us about timelines for your organisation.
              </p>
              <div className="mt-6">
                <Button href="/demo">Request a Demo</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCta title="Discuss multi-campus SchoolHub for your group" />
    </>
  );
}
