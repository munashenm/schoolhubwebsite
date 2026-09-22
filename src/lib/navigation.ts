export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const mainNav: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Overview", href: "/platform", description: "How SchoolHub runs an institution" },
      { label: "Admissions", href: "/features#student-management" },
      { label: "Student Management", href: "/features#student-management" },
      { label: "Academics", href: "/features#academic-management" },
      { label: "Attendance", href: "/features#campus-operations" },
      { label: "Communication", href: "/features#communication" },
      { label: "Finance", href: "/features#finance" },
      { label: "HR & Payroll", href: "/features#hr-payroll" },
      { label: "Reporting", href: "/features#reporting" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Schools", href: "/solutions/schools" },
      { label: "Colleges", href: "/solutions/colleges" },
      { label: "Training Institutions", href: "/solutions/training-institutions" },
      { label: "Multi-Campus Organisations", href: "/solutions/multi-campus" },
    ],
  },
  {
    label: "Modules",
    href: "/modules",
    children: [
      { label: "All Modules", href: "/modules" },
      { label: "Student Portal", href: "/features#portals" },
      { label: "Parent Portal", href: "/features#portals" },
      { label: "Teacher Portal", href: "/features#portals" },
      { label: "Finance", href: "/features#finance" },
      { label: "Payroll", href: "/features#hr-payroll" },
      { label: "Visitor Management", href: "/features#campus-operations" },
    ],
  },
  { label: "Integrations", href: "/integrations" },
  { label: "Resources", href: "/resources" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Support & SLA", href: "/support" },
      { label: "Security", href: "/security" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      {
        label: "Cyber Developers",
        href: "https://www.cyberdevelopers.co.za",
        external: true,
      },
    ],
  },
];

export const footerNav = {
  platform: [
    { label: "Platform", href: "/platform" },
    { label: "Modules", href: "/modules" },
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Security", href: "/security" },
    { label: "Login", href: "https://app.schoolhubsa.co.za", external: true },
  ],
  solutions: [
    { label: "Schools", href: "/solutions/schools" },
    { label: "Colleges", href: "/solutions/colleges" },
    { label: "Training Institutions", href: "/solutions/training-institutions" },
    { label: "Multi-Campus", href: "/solutions/multi-campus" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Support & SLA", href: "/support" },
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
    { label: "Pricing", href: "/pricing" },
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
  "Multi-Campus Organisation",
  "Other",
] as const;

export const contactEnquiryTypes = [
  "Sales Enquiry",
  "Demo",
  "Technical Enquiry",
  "Partnership",
  "SLA / Support",
  "General Enquiry",
] as const;
