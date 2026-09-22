import { FeatureList } from "@/components/ui/PagePrimitives";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { superAdminCapabilities } from "@/lib/content";

export function SuperAdminSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Enterprise administration"
              title="Your Institution. Your Rules."
              description="Control exactly which users can access each module and what actions they are permitted to perform — with a powerful Super Administrator role and granular role-based access control."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              In plain terms: each staff member sees what their job requires.
              Admissions officers, teachers, registrars and executives can share
              one platform without sharing the same level of access.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-base font-semibold text-ink">
              Super Admin can control
            </h3>
            <p className="mt-2 text-sm text-muted">
              Users, roles, permissions, modules and access rights — including
              the ability to enable or disable functionality for your
              institution.
            </p>
            <div className="mt-6">
              <FeatureList items={superAdminCapabilities} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
