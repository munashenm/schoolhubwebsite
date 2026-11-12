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
    "SchoolHub SA is a school, college and education management platform for admissions, learners, academics, attendance, communication, fees, payroll, reporting and administration. Multi-campus group administration is on the product roadmap.",
  primaryTerminology: "School, College & Education Management Platform",
  shortTerminology: "School & College Management Platform",
  domain: "https://schoolhubsa.co.za",
  url: "https://schoolhubsa.co.za",
  applicationUrl: "https://app.schoolhubsa.co.za",
  locale: "en_ZA",
  logo: {
    src: "/images/branding/schoolhub-sa-logo.png",
    alt: "SchoolHub SA",
    width: 220,
    height: 220,
  },
  email: {
    sales: "sales@cyberdevelopers.co.za",
    support: "sales@cyberdevelopers.co.za",
    general: "sales@cyberdevelopers.co.za",
  },
  phone: {
    display: "087 550 1813",
    href: "tel:+27875501813",
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
    finance: "available",
    fees: "available",
    paymentGateways: "available",
    hr: "available",
    leave: "available",
    payroll: "available",
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
    mobileApp: "planned",
    biometrics: "optional",
    library: "optional",
    transport: "optional",
    hostel: "optional",
    onlineClasses: "optional",
    gateSecurity: "optional",
  } satisfies Record<string, CapabilityStatus>,
  integrationStatus: {
    saSams: "optional",
    sms: "available",
    email: "available",
    payments: "available",
    accessControl: "planned",
  } satisfies Record<string, CapabilityStatus>,
  mobileAppStatus: "planned" as CapabilityStatus,
  /**
   * SA-SAMS wording — update as integration progress changes.
   */
  saSams: {
    enabled: true,
    title: "SA-SAMS Integration",
    status: "optional" as CapabilityStatus,
    summary:
      "Schools that already use SA-SAMS can enable an import module for learner data. SchoolHub is not an official Department of Basic Education product and does not claim government certification.",
    detail:
      "Where the module is switched on, schools can bring across learner records and related administration fields from a SA-SAMS export. Attendance and marks synchronisation, identifiers and grade mapping depend on that deployment. Ask during a demo what is enabled for your institution.",
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
    enabled: true,
    currency: "ZAR",
    currencySymbol: "R",
    billingPeriod: "per learner / month",
    showContactForVolume: true,
    volumeNote: "Larger campuses and groups can request volume pricing.",
    disclaimer:
      "Starter pricing is indicative. Final fees depend on modules, learners and support level — confirm with sales.",
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
    secondary: { label: "Explore the Platform", href: "/platform" },
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
