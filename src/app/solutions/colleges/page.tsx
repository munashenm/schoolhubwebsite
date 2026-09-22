import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FeatureList, FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "College Management System",
  defaultDescriptions.colleges,
  "/solutions/colleges",
);

const focus = [
  "Programme and class structures suited to colleges",
  "Admissions and applicant conversion workflows",
  "Learner records across vocational and academic tracks",
  "Staff portals for lecturers and administrators",
  "Assessment, results and institutional reporting",
  "Granular permissions for multi-department campuses",
];

export default function CollegesSolutionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Colleges", path: "/solutions/colleges" },
        ])}
      />
      <PageHero
        eyebrow="Solutions · Colleges"
        title="College management system for complex institutions"
        description="Private colleges, TVET-style institutions, higher education / vocational providers and training providers need more than a basic school register. SchoolHub supports college-scale administration and academics."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Colleges" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Designed for colleges as first-class institutions"
            description="College operations often involve different programme structures, intake patterns and administrative roles. SchoolHub is built to serve schools and colleges — not retrofit a school-only product."
          />
          <div>
            <FeatureList items={focus} />
            <div className="mt-8">
              <Button href="/demo">Request a Demo</Button>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCta title="See SchoolHub for your college" />
    </>
  );
}
