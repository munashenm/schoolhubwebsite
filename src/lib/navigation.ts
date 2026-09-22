export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  platform: [
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Security", href: "/security" },
    { label: "Login", href: "https://app.schoolhubsa.co.za", external: true },
  ],
  solutions: [
    { label: "Schools", href: "/solutions/schools" },
    { label: "Colleges", href: "/solutions/colleges" },
    { label: "Training Institutions", href: "/solutions/training-institutions" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request Demo", href: "/demo" },
    {
      label: "Cyber Developers",
      href: "https://www.cyberdevelopers.co.za",
      external: true,
    },
  ],
  resources: [
    { label: "Resources", href: "/resources" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export const institutionTypes = [
  "Primary School",
  "Secondary School",
  "Combined School",
  "College",
  "Training Institution",
  "University / Higher Education",
  "Other",
] as const;

export const contactEnquiryTypes = [
  "Sales Enquiry",
  "Demo",
  "Technical Enquiry",
  "Partnership",
  "General Enquiry",
] as const;
