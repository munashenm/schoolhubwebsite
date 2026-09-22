import { FeatureList } from "@/components/ui/PagePrimitives";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import {
  parentPortalFeatures,
  staffPortalFeatures,
  studentPortalFeatures,
} from "@/lib/content";
import { screenshots } from "@/lib/screenshots";

export function PortalsSection() {
  return (
    <Section tone="soft">
      <Container>
        <SectionHeading
          eyebrow="Student, parent & staff portals"
          title="Visibility into the learner’s academic journey"
          description="Students, guardians and teachers / lecturers get authorised access to progress, results, attendance and assignments. Fees are available where enabled — they are not the sole purpose of the parent portal."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-ink">Student portal</h3>
            <div className="mt-5">
              <FeatureList items={studentPortalFeatures} className="sm:grid-cols-1" />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-ink">
              Teacher / lecturer portal
            </h3>
            <div className="mt-5">
              <FeatureList items={staffPortalFeatures} className="sm:grid-cols-1" />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-ink">
              Parent / guardian portal
            </h3>
            <div className="mt-5">
              <FeatureList items={parentPortalFeatures} className="sm:grid-cols-1" />
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProductScreenshot
            src={screenshots.collegeStudent.src}
            title={screenshots.collegeStudent.title}
            description={screenshots.collegeStudent.description}
            alt={screenshots.collegeStudent.alt}
          />
          <ProductScreenshot
            src={screenshots.teacherRegister.src}
            title={screenshots.teacherRegister.title}
            description={screenshots.teacherRegister.description}
            alt={screenshots.teacherRegister.alt}
          />
        </div>
      </Container>
    </Section>
  );
}
