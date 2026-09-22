import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FeatureList, FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "School Management Software",
  defaultDescriptions.schools,
  "/solutions/schools",
);

const focus = [
  "Learner records and class placement",
  "Parent visibility into academic progress",
  "Attendance and reporting for school leadership",
  "Online applications for intake periods",
  "Teacher workflows for marks and assignments",
  "Role-based access for administrative staff",
];

export default function SchoolsSolutionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Schools", path: "/solutions/schools" },
        ])}
      />
      <PageHero
        eyebrow="Solutions · Schools"
        title="School management software for modern campuses"
        description="Primary, secondary, high, private and independent schools use SchoolHub to manage learners, academics, attendance, applications and parent communication from one platform."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Schools" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Built for the realities of school administration"
            description="School leaders need one system that teachers, administrators and parents can actually use. SchoolHub focuses on learner management, academic operations and clear visibility — without forcing a one-size-fits-all country model."
          />
          <div>
            <FeatureList items={focus} />
            <div className="mt-8">
              <Button href="/demo">Request a Demo</Button>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCta title="See SchoolHub for your school" />
    </>
  );
}
