import { Hero, ProductAreasSection } from "@/components/home/Hero";
import { AdmissionsSection } from "@/components/home/AdmissionsSection";
import { PortalsSection } from "@/components/home/PortalsSection";
import { SuperAdminSection } from "@/components/home/SuperAdminSection";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { InternationalSection } from "@/components/home/InternationalSection";
import { IntegrationsOptionalSection } from "@/components/home/IntegrationsOptionalSection";
import {
  CyberDevelopersSection,
  SecurityPreview,
} from "@/components/home/SecurityCyber";
import { TrustMarkets } from "@/components/home/TrustMarkets";
import { FinalCta, JsonLd } from "@/components/ui/PagePrimitives";
import { Button } from "@/components/ui/Button";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteConfig } from "@/lib/config";
import { faqJsonLd } from "@/lib/seo";

const homeFaqs = [
  {
    question: "What is SchoolHub SA?",
    answer:
      "SchoolHub SA is a school, college and education management platform covering admissions, learners, academics, attendance, communication, finance, reporting and administration — broader than an LMS.",
  },
  {
    question: "Is SchoolHub only for South African schools?",
    answer:
      "No. South Africa is a primary market, but SchoolHub is designed for institutions across Africa and beyond, with configurable academic structures for schools and colleges.",
  },
  {
    question: "Does SchoolHub include finance and payroll?",
    answer:
      "Finance, fees, HR and payroll are part of the SchoolHub product roadmap and are marketed according to implementation status. Core academic and administration modules are available today.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <TrustMarkets />
      <ProductAreasSection />

      <Section tone="surface">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            title="Your institution. Your rules."
            description="Super Admin controls users, roles, permissions and modules — so each person only accesses what their role requires."
          />
          <div className="rounded-xl border border-border bg-background p-6">
            <p className="text-sm text-muted">
              Granular role-based access control for schools and colleges —
              including multi-campus scoping as that architecture rolls out.
            </p>
            <div className="mt-5">
              <Button href="/features#security" variant="secondary">
                Explore administration &amp; security
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <AdmissionsSection />
      <PortalsSection />
      <SuperAdminSection />
      <SolutionsPreview />
      <InternationalSection />

      <Section id="mobile">
        <Container className="grid gap-8 rounded-2xl border border-border bg-surface p-8 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-brand">SchoolHub Mobile</p>
              <StatusBadge status={siteConfig.mobileAppStatus} />
            </div>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink">
              Android &amp; iOS on the roadmap
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Native apps for students, parents and teachers / lecturers are
              coming soon. Meanwhile, the SchoolHub web platform is accessible
              from mobile browsers wherever your institution works.
            </p>
          </div>
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <Button href="/modules" variant="secondary">
              View all modules
            </Button>
          </div>
        </Container>
      </Section>

      <IntegrationsOptionalSection />
      <SecurityPreview />

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Support"
            title={siteConfig.sla.headline}
            description={siteConfig.sla.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.sla.cta.href}>
              {siteConfig.sla.cta.label}
            </Button>
            <Button href="/support" variant="secondary">
              Support &amp; SLA overview
            </Button>
          </div>
        </Container>
      </Section>

      <CyberDevelopersSection />
      <FinalCta />
    </>
  );
}
