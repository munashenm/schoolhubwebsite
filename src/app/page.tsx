import { Hero, ProductAreasSection } from "@/components/home/Hero";
import { DifferentiationSection } from "@/components/home/DifferentiationSection";
import { ScreenshotGallery } from "@/components/home/ScreenshotGallery";
import {
  AdmissionsSection,
  AttendanceSpotlight,
  FinanceSpotlight,
  MultiCampusSpotlight,
  ReportingSpotlight,
} from "@/components/home/AdmissionsSection";
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
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { siteConfig } from "@/lib/config";
import { screenshots } from "@/lib/screenshots";
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
      "Finance, fees, HR and payroll are part of the SchoolHub product modules and are delivered according to implementation status. Core academic and administration modules are available today.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <TrustMarkets />
      <DifferentiationSection />
      <ProductAreasSection />

      <AdmissionsSection />
      <AttendanceSpotlight />
      <FinanceSpotlight />
      <ReportingSpotlight />
      <MultiCampusSpotlight />

      <PortalsSection />
      <SuperAdminSection />

      <Section tone="surface">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            title="Administration that fits your institution"
            description="Configure academic years, programmes or grades, users and modules around how your school or college actually operates — without forcing one country’s model onto every campus."
          />
          <div className="rounded-xl border border-border bg-background p-6">
            <p className="text-sm text-muted">
              From single campuses to multi-site groups, SchoolHub keeps
              administration, academics and reporting in one place — with
              Cyber Developers available for custom modules and SLA-backed
              support.
            </p>
            <div className="mt-5">
              <Button href="/features#security" variant="secondary">
                Explore administration &amp; security
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <SolutionsPreview />
      <InternationalSection />

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Cloud access"
              title="Work from campus or home"
              description="SchoolHub is browser-based and cloud-hosted — so your teams are not tied to a single office computer or on-premise server rack."
            />
            <div className="mt-8">
              <Button href={siteConfig.cta.primary.href}>
                {siteConfig.cta.primary.label}
              </Button>
            </div>
          </div>
          <ProductScreenshot
            src={screenshots.cloudHosted.src}
            title={screenshots.cloudHosted.title}
            description={screenshots.cloudHosted.description}
            alt={screenshots.cloudHosted.alt}
            aspect="wide"
          />
        </Container>
      </Section>

      <Section id="mobile" tone="surface">
        <Container className="grid gap-8 rounded-2xl border border-border bg-background p-8 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-brand">SchoolHub Mobile</p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink">
              SchoolHub Mobile for Android &amp; iOS
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Native apps for students, parents and teachers / lecturers —
              alongside the SchoolHub web platform, which remains accessible from
              mobile browsers wherever your institution works.
            </p>
            <div className="mt-6">
              <StoreBadges />
            </div>
          </div>
          <div className="flex flex-col items-start justify-end gap-3 lg:col-span-5 lg:items-end">
            <Button href="/modules" variant="secondary">
              View all modules
            </Button>
          </div>
        </Container>
      </Section>

      <ScreenshotGallery />
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
