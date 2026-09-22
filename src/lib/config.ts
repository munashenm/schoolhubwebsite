/**
 * Central configuration for SchoolHub SA marketing site.
 * Update URLs, statuses, pricing and contact here — not across components.
 */

export type CapabilityStatus =
  | "available"
  | "optional"
  | "planned"
  | "coming-soon"
  | "roadmap";

export const siteConfig = {
  name: "SchoolHub SA",
  legalName: "SchoolHub SA",
  tagline: "One Platform. Your Entire Institution.",
  positioning: "Designed for institutions everywhere.",
  description:
    "SchoolHub SA is a complete school, college and education management platform for admissions, learners, academics, attendance, communication, finance, reporting and administration.",
  primaryTerminology: "School, College & Education Management Platform",
  shortTerminology: "School & College Management Platform",
  domain: "https://schoolhubsa.co.za",
  url: "https://schoolhubsa.co.za",
  applicationUrl: "https://app.schoolhubsa.co.za",
  locale: "en_ZA",
  logo: {
    src: "/images/branding/schoolhub-sa-logo.png",
    alt: "SchoolHub SA",
    width: 180,
    height: 180,
  },
  email: {
    sales: "sales@schoolhubsa.co.za",
    support: "support@schoolhubsa.co.za",
    general: "info@schoolhubsa.co.za",
  },
  parentCompany: {
    name: "Cyber Developers",
    url: "https://www.cyberdevelopers.co.za",
    description:
      "Cyber Developers develops custom business applications, workflow systems, cloud platforms and digital solutions.",
  },
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
  },
  markets: {
    primary: ["South Africa", "Zimbabwe", "Namibia", "Botswana"],
    secondary: [
      "Other African countries",
      "United Kingdom",
      "Poland",
      "Other European countries",
    ],
    display: [
      "South Africa",
      "Zimbabwe",
      "Botswana",
      "Namibia",
      "Africa",
      "Europe",
    ],
  },
  /**
   * Feature / module status — single source of truth for marketing claims.
   * Update here when capabilities go live.
   */
  featureStatus: {
    admissions: "available",
    studentManagement: "available",
    studentCards: "available",
    academics: "available",
    timetables: "available",
    timetableAutoGenerate: "planned",
    assignments: "available",
    assessments: "available",
    studentReports: "available",
    calendarEvents: "available",
    attendance: "available",
    visitorManagement: "planned",
    communicationInApp: "available",
    sms: "available",
    email: "available",
    pushNotifications: "planned",
    whatsapp: "planned",
    studentPortal: "available",
    parentPortal: "available",
    staffPortal: "available",
    finance: "planned",
    fees: "planned",
    paymentGateways: "planned",
    hr: "planned",
    leave: "planned",
    payroll: "planned",
    reporting: "available",
    exportPdf: "available",
    exportExcel: "planned",
    exportCsv: "planned",
    administration: "available",
    rbac: "available",
    superAdmin: "available",
    multiCampus: "planned",
    cloudPlatform: "available",
    backups: "available",
    mobileApp: "coming-soon",
    biometrics: "optional",
    library: "optional",
    transport: "optional",
    hostel: "optional",
    onlineClasses: "optional",
    gateSecurity: "optional",
  } satisfies Record<string, CapabilityStatus>,
  integrationStatus: {
    saSams: "roadmap",
    sms: "available",
    email: "available",
    payments: "planned",
    accessControl: "planned",
  } satisfies Record<string, CapabilityStatus>,
  mobileAppStatus: "coming-soon" as CapabilityStatus,
  /**
   * SA-SAMS wording — update as integration progress changes.
   */
  saSams: {
    enabled: true,
    title: "SA-SAMS Integration",
    status: "roadmap" as CapabilityStatus,
    summary:
      "Designed with South African school administration requirements in mind, with SA-SAMS integration included in the SchoolHub integration roadmap.",
    detail:
      "Potential scope includes student data transfer, attendance and marks synchronisation, identifiers and grade/class mapping where implemented. Contact us for the current roadmap status for your institution.",
  },
  sla: {
    headline: "Software Is Only Part of the Service",
    description:
      "SchoolHub SA is developed and supported by Cyber Developers. Service Level Agreements can be configured around the support your institution needs.",
    areas: [
      "Technical support",
      "Incident reporting",
      "Application support",
      "Platform maintenance",
      "Security updates",
      "User support",
      "Implementation support",
      "Administrator training",
      "Custom development",
      "Integration support",
      "Backup assistance",
      "System monitoring",
    ],
    /** Do not publish numeric response-time guarantees until commercial tiers are approved. */
    publishResponseTimes: false,
    cta: { label: "Discuss Your SLA", href: "/contact" },
  },
  pricing: {
    enabled: false,
    currency: "ZAR",
    currencySymbol: "R",
    billingPeriod: "per learner / month",
    showContactForVolume: true,
    volumeNote: "Contact us for volume pricing.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "For smaller schools starting with core administration.",
        pricePerLearner: 10,
        highlighted: false,
        features: [
          "Learner management",
          "Basic academics",
          "Attendance",
          "Student portal",
          "Standard reporting",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        description: "For schools and colleges needing full academic operations.",
        pricePerLearner: null as number | null,
        customLabel: "Custom",
        highlighted: true,
        features: [
          "Everything in Starter",
          "Online applications",
          "Parent portal",
          "Assignments & assessments",
          "Advanced reporting",
          "Role-based access control",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "For multi-campus and high-complexity institutions.",
        pricePerLearner: null as number | null,
        customLabel: "Contact us",
        highlighted: false,
        features: [
          "Everything in Professional",
          "Custom modules",
          "Dedicated support",
          "Optional integrations",
          "Institution-specific configuration",
          "Priority onboarding",
        ],
      },
    ],
  },
  cta: {
    primary: { label: "Request a Demo", href: "/demo" },
    secondary: { label: "Explore SchoolHub", href: "/platform" },
    login: { label: "Login", href: "https://app.schoolhubsa.co.za" },
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const statusLabels: Record<CapabilityStatus, string> = {
  available: "Available",
  optional: "Optional add-on",
  planned: "Planned",
  "coming-soon": "Coming soon",
  roadmap: "Integration roadmap",
};
