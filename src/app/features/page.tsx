import type { Metadata } from "next";
import { FeatureList, FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import {
  academicFeatures,
  admissionsFeatures,
  assignmentFeatures,
  attendanceAddOns,
  attendanceFeatures,
  parentPortalFeatures,
  platformModules,
  reportingExamples,
  staffPortalFeatures,
  studentManagementFeatures,
  studentPortalFeatures,
  superAdminCapabilities,
} from "@/lib/content";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Features",
  defaultDescriptions.features,
  "/features",
);

function FeatureBlock({
  id,
  title,
  description,
  items,
  note,
}: {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
  note?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-border py-12 last:border-0">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-muted">{description}</p>
      <div className="mt-8">
        <FeatureList items={items} />
      </div>
      {note ? <p className="mt-6 text-sm text-muted-soft">{note}</p> : null}
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />
      <PageHero
        eyebrow="Features"
        title="School and college management features that stay connected"
        description="From learner records and online applications to attendance, portals, reporting and granular role-based access control."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Features" },
        ]}
      />
      <Section tone="surface" className="!py-10">
        <Container>
          <SectionHeading
            title="At a glance"
            description="A complete feature set for institutional administration and academics."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {platformModules.map((m) => (
              <span
                key={m.title}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-ink-soft"
              >
                {m.title}
              </span>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-4xl">
          <FeatureBlock
            id="student-management"
            title="Student / learner management"
            description="Maintain a complete learner record across the academic journey — personal details, guardians, placement, documents, history and status."
            items={studentManagementFeatures}
          />
          <FeatureBlock
            id="admissions"
            title="Admissions & online applications"
            description="Take applications online, review documents, approve or reject applicants and convert accepted applicants into students."
            items={admissionsFeatures}
          />
          <FeatureBlock
            id="academics"
            title="Academic management"
            description="Configure the academic structure your institution actually uses, then keep marks, results and report cards aligned to it."
            items={academicFeatures}
          />
          <FeatureBlock
            id="assignments"
            title="Assignments & learning support"
            description="Support teaching with assignment creation, submission and grading — alongside institutional administration, not instead of it."
            items={assignmentFeatures}
          />
          <FeatureBlock
            id="attendance"
            title="Attendance"
            description="Track daily and class attendance with history and reporting for authorised roles."
            items={attendanceFeatures}
            note={`Optional / add-on: ${attendanceAddOns.join(", ")}.`}
          />
          <FeatureBlock
            id="student-portal"
            title="Student portal"
            description="Give learners access to the academic information they need."
            items={studentPortalFeatures}
          />
          <FeatureBlock
            id="parent-portal"
            title="Parent portal"
            description="Share progress and key academic updates with guardians. Visibility into the learner journey is the selling point — not payments."
            items={parentPortalFeatures}
          />
          <FeatureBlock
            id="staff-portal"
            title="Teacher / staff portal"
            description="A practical workspace for classes, attendance, assignments, marks and communication."
            items={staffPortalFeatures}
          />
          <FeatureBlock
            id="reporting"
            title="Reporting & analytics"
            description="Operational and academic reporting for administrators and leadership."
            items={reportingExamples}
          />
          <FeatureBlock
            id="permissions"
            title="Super Admin & granular role-based access control"
            description="Administrators control users, roles, permissions and modules so each person only accesses what their role requires."
            items={superAdminCapabilities}
          />
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
