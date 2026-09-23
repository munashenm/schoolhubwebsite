import { Button } from "@/components/ui/Button";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { securityPrinciples } from "@/lib/content";
import { screenshots } from "@/lib/screenshots";

export function SecurityPreview() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Security"
              title="Institutional data deserves disciplined access"
              description="SchoolHub is engineered around authentication, role-based permissions, controlled cloud deployment and audit-friendly administration — without overstating certifications we do not hold."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {securityPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm text-muted">
              Deployments can be configured with POPIA-conscious data-handling
              practices for South Africa and GDPR-conscious practices for European
              institutions. This describes engineering posture — not a formal legal
              certification claim.
            </p>
            <div className="mt-6">
              <Button href="/security" variant="secondary">
                Read security overview
              </Button>
            </div>
          </div>
          <ProductScreenshot
            src={screenshots.backup.src}
            title={screenshots.backup.title}
            description={screenshots.backup.description}
            alt={screenshots.backup.alt}
            width={screenshots.backup.width}
            height={screenshots.backup.height}
          />
        </div>
      </Container>
    </Section>
  );
}

export function CyberDevelopersSection() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid items-center gap-8 rounded-2xl border border-border bg-background px-6 py-10 sm:px-10 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-medium text-brand">Built by Cyber Developers</p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink">
              Serious education software, backed by a product engineering team
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {siteConfig.parentCompany.description} SchoolHub SA is one of{" "}
              {siteConfig.parentCompany.name}&apos;s education technology
              platforms — developed and supported as a commercial product, not a
              disposable template.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <Button href={siteConfig.parentCompany.url} external>
              Visit Cyber Developers
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function StudentManagementPreview() {
  return (
    <Section tone="soft" className="!py-12 sm:!py-14">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Learner management"
            title="One complete record per student"
            description="Profiles, guardians, placement, documents, attendance, assessments, promotion, transfers and academic history — managed as a single learner lifecycle."
          />
          <Button href="/features#student-management" variant="secondary" className="shrink-0">
            Explore learner management
          </Button>
        </div>
      </Container>
    </Section>
  );
}
