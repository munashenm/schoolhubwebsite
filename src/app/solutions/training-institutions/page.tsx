import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FeatureList, FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Training Institution Management",
  defaultDescriptions.training,
  "/solutions/training-institutions",
);

const focus = [
  "Learner enrolment and profile management",
  "Programme, class and facilitator structures",
  "Attendance and progress tracking",
  "Assignments and assessment workflows",
  "Reporting for institutional oversight",
  "Configurable roles for lean admin teams",
];

export default function TrainingInstitutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          {
            name: "Training Institutions",
            path: "/solutions/training-institutions",
          },
        ])}
      />
      <PageHero
        eyebrow="Solutions · Training institutions"
        title="Learner management for academies and skills centres"
        description="Academies, skills centres and professional training organisations use SchoolHub to organise learners, programmes, attendance and reporting without grafting on software built only for traditional schools."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Training Institutions" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Practical operations for training providers"
            description="Training institutions still need clean learner records, attendance, assessments and administration — with flexibility to match shorter programmes and specialised cohorts."
          />
          <div>
            <FeatureList items={focus} />
            <div className="mt-8">
              <Button href="/demo">Request a Demo</Button>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCta title="See SchoolHub for your training institution" />
    </>
  );
}
