import { AcademicSection } from "@/components/home/AcademicSection";
import { AdmissionsSection } from "@/components/home/AdmissionsSection";
import { CoreModules } from "@/components/home/CoreModules";
import { Hero } from "@/components/home/Hero";
import { IntegrationsOptionalSection } from "@/components/home/IntegrationsOptionalSection";
import { InternationalSection } from "@/components/home/InternationalSection";
import {
  CyberDevelopersSection,
  SecurityPreview,
  StudentManagementPreview,
} from "@/components/home/SecurityCyber";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { StaffAttendanceSection } from "@/components/home/StaffAttendanceSection";
import { SuperAdminSection } from "@/components/home/SuperAdminSection";
import { PortalsSection } from "@/components/home/PortalsSection";
import { TrustMarkets } from "@/components/home/TrustMarkets";
import { FinalCta, JsonLd } from "@/components/ui/PagePrimitives";
import { faqJsonLd } from "@/lib/seo";

const homeFaqs = [
  {
    question: "What is SchoolHub SA?",
    answer:
      "SchoolHub SA is a school and college management platform that brings learner management, admissions, academics, attendance, assignments, assessments, reporting, portals and administration into one system.",
  },
  {
    question: "Is SchoolHub only for South Africa?",
    answer:
      "No. The product name is SchoolHub SA, but the platform is designed for institutions in Africa and internationally, with configurable academic structures and roles.",
  },
  {
    question: "Is SchoolHub just an LMS?",
    answer:
      "No. SchoolHub is broader than a learning management system. It is a full school and college management platform covering administration and academics together.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <TrustMarkets />
      <StudentManagementPreview />
      <CoreModules />
      <AdmissionsSection />
      <AcademicSection />
      <PortalsSection />
      <StaffAttendanceSection />
      <SuperAdminSection />
      <SolutionsPreview />
      <InternationalSection />
      <IntegrationsOptionalSection />
      <SecurityPreview />
      <CyberDevelopersSection />
      <FinalCta />
    </>
  );
}
