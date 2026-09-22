/**
 * Central configuration for SchoolHub SA marketing site.
 * Update product, URLs, pricing and contact details here — not across components.
 */

export const siteConfig = {
  name: "SchoolHub SA",
  legalName: "SchoolHub SA",
  tagline: "One Platform. Your Entire Institution.",
  positioning: "Built in Africa. Designed for modern education everywhere.",
  description:
    "SchoolHub SA is a complete school and college management platform for learners, academics, attendance, applications, assessments, reporting, communication and administration.",
  primaryTerminology: "School & College Management Platform",
  domain: "https://schoolhubsa.co.za",
  url: "https://schoolhubsa.co.za",
  applicationUrl: "https://app.schoolhubsa.co.za",
  locale: "en_ZA",
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
    // Add real profiles when available
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
   * SA-SAMS wording — update as integration progress changes.
   * Keep claims limited to what is actually implemented.
   */
  saSams: {
    enabled: true,
    title: "SA-SAMS Integration / Compatibility",
    status: "in-progress" as "planned" | "in-progress" | "available",
    summary:
      "SchoolHub is being designed to support workflows and integrations relevant to South African institutions, including SA-SAMS-related requirements where implemented.",
    detail:
      "Integration scope and availability may vary by institution and deployment. Contact us for the current status for your school or district.",
  },
  /**
   * Pricing — keep disabled until commercially confirmed.
   * When enabled, values below drive the pricing page from one place.
   */
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
    secondary: { label: "Explore the Platform", href: "/platform" },
    login: { label: "Login", href: "https://app.schoolhubsa.co.za" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
