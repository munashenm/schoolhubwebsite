import { FeatureList } from "@/components/ui/PagePrimitives";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import {
  parentPortalFeatures,
  studentPortalFeatures,
} from "@/lib/content";

export function PortalsSection() {
  return (
    <Section tone="soft">
      <Container>
        <SectionHeading
          eyebrow="Student & parent experience"
          title="Visibility into the learner’s academic journey"
          description="Students and guardians get clear access to progress, results, attendance and assignments — not a payment-first portal. Academic visibility is the point."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">Student portal</h3>
            <p className="mt-2 text-sm text-muted">
              Learners can follow their own academic work and institutional
              updates.
            </p>
            <div className="mt-6">
              <FeatureList items={studentPortalFeatures} />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">Parent portal</h3>
            <p className="mt-2 text-sm text-muted">
              Guardians stay informed on progress, results, reports and
              attendance where your institution enables it.
            </p>
            <div className="mt-6">
              <FeatureList items={parentPortalFeatures} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ProductScreenshot
            title="Learner progress view"
            description="Academic journey visibility for authorised portal users."
            alt="SchoolHub student and parent portal screenshot placeholder"
          />
        </div>
      </Container>
    </Section>
  );
}
