import { FeatureList } from "@/components/ui/PagePrimitives";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { academicFeatures, assignmentFeatures } from "@/lib/content";

export function AcademicSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Academic management"
          title="Structure the academic year the way your institution runs"
          description="Configure years, terms or semesters, grades, classes, subjects and assessment structures — then keep marks, results and report cards connected to the same academic framework."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">
              Core academic operations
            </h3>
            <p className="mt-2 text-sm text-muted">
              From class allocation to report cards, academic data stays in one
              place.
            </p>
            <div className="mt-6">
              <FeatureList items={academicFeatures} />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">
              Assignments & learning support
            </h3>
            <p className="mt-2 text-sm text-muted">
              SchoolHub supports teaching workflows without positioning itself
              as an online-learning-only product. It covers learning and
              institutional administration together.
            </p>
            <div className="mt-6">
              <FeatureList items={assignmentFeatures} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
