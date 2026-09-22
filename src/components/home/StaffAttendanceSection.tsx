import { FeatureList } from "@/components/ui/PagePrimitives";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import {
  attendanceAddOns,
  attendanceFeatures,
  reportingExamples,
  staffPortalFeatures,
} from "@/lib/content";

export function StaffAttendanceSection() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Teacher & staff tools"
              title="A practical workspace for day-to-day teaching operations"
              description="Staff manage classes, learners, attendance, assignments, marks and communication without jumping between disconnected tools."
            />
            <div className="mt-8">
              <FeatureList items={staffPortalFeatures} />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-ink">Attendance</h3>
              <p className="mt-2 text-sm text-muted">
                Capture daily and class attendance, track late arrivals and
                absences, and give authorised roles the history they need.
              </p>
              <div className="mt-6">
                <FeatureList items={attendanceFeatures} />
              </div>
              <div className="mt-6 rounded-lg border border-dashed border-border-strong bg-surface px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-soft">
                  Optional add-ons
                </p>
                <p className="mt-2 text-sm text-muted">
                  {attendanceAddOns.join(" · ")}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-ink">
                Reporting & analytics
              </h3>
              <p className="mt-2 text-sm text-muted">
                Leadership and administrators get operational and academic
                reporting from the same platform data.
              </p>
              <div className="mt-6">
                <FeatureList items={reportingExamples} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
