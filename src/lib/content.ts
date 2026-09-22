import type { CapabilityStatus } from "./config";

export type ModuleItem = {
  title: string;
  description: string;
  status: CapabilityStatus;
  href?: string;
};

export const homeProductAreas = [
  {
    id: "01",
    title: "Admissions & Student Management",
    summary:
      "Online applications, enrolment, learner profiles, transfers, promotion and student cards.",
    href: "/features#student-management",
    points: [
      "Online applications",
      "Application review & enrolment",
      "Learner profiles & guardians",
      "Promotion & transfers",
      "Student ID cards",
    ],
  },
  {
    id: "02",
    title: "Academics & Timetables",
    summary:
      "Years, terms or semesters, classes, subjects or modules, timetables, assignments and reports.",
    href: "/features#academic-management",
    points: [
      "Timetables for classes, students and staff",
      "Assignments & marking",
      "Assessments & results",
      "Term / semester reports",
      "Academic calendar & events",
    ],
  },
  {
    id: "03",
    title: "Attendance & Reporting",
    summary:
      "Daily and class registers with history, absence tracking and attendance reporting.",
    href: "/features#campus-operations",
    points: [
      "Daily learner attendance",
      "Class registers",
      "Late & absence tracking",
      "Attendance history",
      "Attendance reports",
    ],
  },
  {
    id: "04",
    title: "Students, Parents & Staff Portals",
    summary:
      "Role-based portals for learners, guardians and teachers / lecturers.",
    href: "/features#portals",
    points: [
      "Student portal",
      "Parent / guardian portal",
      "Teacher / lecturer portal",
      "Academic progress visibility",
      "Authorised documents & announcements",
    ],
  },
  {
    id: "05",
    title: "Communication",
    summary:
      "Central messaging across administration, staff, students and parents.",
    href: "/features#communication",
    points: [
      "In-app announcements",
      "SMS",
      "Email",
      "Class / grade / programme messaging",
      "Bulk and individual messages",
    ],
  },
  {
    id: "06",
    title: "Finance, Fees & Payroll",
    summary:
      "Fees, finance and HR/payroll modules — delivered according to your institution’s roadmap.",
    href: "/features#finance",
    points: [
      "Fee structures & balances",
      "Statements & receipts",
      "Finance reporting",
      "Staff & leave management",
      "Payroll (planned)",
    ],
  },
  {
    id: "07",
    title: "Campus Administration",
    summary:
      "Institution configuration, users, roles, permissions and Super Admin controls.",
    href: "/features#security",
    points: [
      "Institution & academic setup",
      "User management",
      "Granular RBAC",
      "Module enable / disable",
      "Multi-campus roadmap",
    ],
  },
  {
    id: "08",
    title: "Cloud, Security & Integrations",
    summary:
      "Browser-based access, controlled permissions, backups and an integration roadmap including SA-SAMS.",
    href: "/features#integrations",
    points: [
      "Cloud platform access",
      "Secure authentication",
      "Data backup & recovery",
      "SMS & email integrations",
      "SA-SAMS integration roadmap",
    ],
  },
] as const;

export const featureCategories = [
  {
    id: "student-management",
    title: "Student Management",
    description:
      "From online application through enrolment, learner records, promotion and student cards.",
    sections: [
      {
        title: "Online application",
        status: "available" as CapabilityStatus,
        items: [
          "Complete applications online",
          "Personal and guardian details",
          "Programme / grade selection",
          "Supporting document uploads",
          "Application submission",
          "Application status tracking",
        ],
      },
      {
        title: "Student admission",
        status: "available" as CapabilityStatus,
        items: [
          "Review applications",
          "Approve or reject",
          "Request additional documentation",
          "Convert applicants into enrolled students",
          "Allocate grade / programme / class",
          "Generate admission records",
        ],
      },
      {
        title: "Student management",
        status: "available" as CapabilityStatus,
        items: [
          "Student profiles",
          "Guardian details & contacts",
          "Academic history & documents",
          "Student status",
          "Grade / class / programme allocation",
          "Transfer management",
          "Promotion / progression",
          "Student reports",
        ],
      },
      {
        title: "Student cards",
        status: "available" as CapabilityStatus,
        items: [
          "Generate student ID cards",
          "Printable card format",
          "Student photograph",
          "Institution information",
          "Unique student ID",
          "QR / barcode-ready architecture where implemented",
        ],
      },
    ],
  },
  {
    id: "academic-management",
    title: "Academic Management",
    description:
      "Configure school or college structures, timetables, assignments, assessments and academic reports.",
    sections: [
      {
        title: "Timetable creation",
        status: "available" as CapabilityStatus,
        items: [
          "Class timetables",
          "Student timetables",
          "Teacher / lecturer timetables",
          "Venue allocation",
          "Subject / module allocation",
          "Programme timetables",
          "Academic schedule management",
        ],
        note: "Conflict detection and automatic timetable generation are on the product roadmap — not claimed as live unless implemented.",
      },
      {
        title: "Assignment management",
        status: "available" as CapabilityStatus,
        items: [
          "Create assignments",
          "Deadlines",
          "Student viewing & online submission",
          "Teacher / lecturer marking",
          "Feedback",
          "Assessment tracking",
        ],
      },
      {
        title: "Student reports",
        status: "available" as CapabilityStatus,
        items: [
          "Term / semester reports",
          "Progress reports",
          "Assessment reports",
          "Results",
          "Attendance information",
          "Academic performance",
        ],
      },
      {
        title: "School calendar & events",
        status: "available" as CapabilityStatus,
        items: [
          "Academic calendar",
          "Exams",
          "School / college events",
          "Meetings & holidays",
          "Important dates",
          "Announcements for authorised users",
        ],
      },
    ],
  },
  {
    id: "campus-operations",
    title: "Campus Operations",
    description:
      "Attendance registers and campus operational tools including visitor management on the roadmap.",
    sections: [
      {
        title: "School attendance register",
        status: "available" as CapabilityStatus,
        items: [
          "Student daily attendance",
          "Class attendance",
          "Staff attendance where configured",
          "Absence & late recording",
          "Attendance history & reporting",
          "Parent visibility where enabled",
        ],
      },
      {
        title: "Visitor management",
        status: "planned" as CapabilityStatus,
        items: [
          "Visitor sign-in",
          "Visitor details & purpose",
          "Person / department visiting",
          "Arrival and departure times",
          "Visitor history",
          "Security desk access",
        ],
        note: "QR visitor passes, gate access and access control are optional future integrations.",
      },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "Keep administration, teachers / lecturers, students, parents and staff informed from one platform.",
    sections: [
      {
        title: "Integrated communication",
        status: "available" as CapabilityStatus,
        items: [
          "Individual and bulk messages",
          "Class, grade, programme and campus messages",
          "Parent communication",
          "Emergency announcements",
          "SMS",
          "Email",
        ],
        note: "Push notifications and WhatsApp integration are planned optional channels.",
      },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Fees and finance modules for institutional money management — delivered according to implementation status.",
    sections: [
      {
        title: "Finance management",
        status: "planned" as CapabilityStatus,
        items: [
          "Institution finance dashboard",
          "Income & expenses",
          "Budget tracking",
          "Student accounts",
          "Invoices, statements & receipts",
          "Outstanding balances",
          "Campus and institution-wide finance reporting",
        ],
        note: "Full accounting capabilities are not claimed until implemented. Multi-currency and multi-year finance are architectural targets.",
      },
      {
        title: "Fees collection",
        status: "planned" as CapabilityStatus,
        items: [
          "Fee structures by grade / programme / student",
          "Balances, statements & receipts",
          "Outstanding fees & payment tracking",
          "Parent account visibility where enabled",
          "Payment reminders",
        ],
        note: "Online payment gateways and EFT reconciliation are planned integrations — gateway brands are only named when live.",
      },
    ],
  },
  {
    id: "hr-payroll",
    title: "HR & Payroll",
    description:
      "Staff, leave and payroll capabilities for schools and colleges — status-driven so claims stay accurate.",
    sections: [
      {
        title: "Staff management",
        status: "planned" as CapabilityStatus,
        items: [
          "Staff profiles & employment information",
          "Departments & roles",
          "Teacher / lecturer allocation",
          "Qualifications & documents",
          "Employment status",
        ],
      },
      {
        title: "Leave application",
        status: "planned" as CapabilityStatus,
        items: [
          "Leave requests by type and date",
          "Approval / rejection workflow",
          "Leave history",
          "Leave balances where applicable",
        ],
      },
      {
        title: "Payroll",
        status: "planned" as CapabilityStatus,
        items: [
          "Salary profiles",
          "Earnings, deductions & allowances",
          "Payroll periods & payslips",
          "Payroll reports & history",
        ],
        note: "Country-specific tax or statutory payroll compliance is not advertised unless genuinely implemented for that country.",
      },
    ],
  },
  {
    id: "reporting",
    title: "Reporting",
    description:
      "Advanced reporting across academics, attendance, finance, admissions and administration.",
    sections: [
      {
        title: "Academic reports",
        status: "available" as CapabilityStatus,
        items: [
          "Student results",
          "Class / subject / programme performance",
          "Assessment results",
          "Promotion eligibility",
          "Academic trends where configured",
        ],
      },
      {
        title: "Attendance reports",
        status: "available" as CapabilityStatus,
        items: [
          "By learner, class, grade, programme",
          "By campus (when multi-campus is enabled)",
          "By date period",
        ],
      },
      {
        title: "Finance & admissions reports",
        status: "planned" as CapabilityStatus,
        items: [
          "Fee collection & outstanding balances",
          "Income / expenses / payment history",
          "Applications, acceptance and enrolment",
        ],
      },
      {
        title: "Administration reports",
        status: "available" as CapabilityStatus,
        items: [
          "Student demographics",
          "Campus statistics where applicable",
          "Staff information",
          "User activity where configured",
        ],
      },
      {
        title: "Exports",
        status: "available" as CapabilityStatus,
        items: ["PDF exports where implemented"],
        note: "Excel and CSV exports are planned where not yet implemented.",
      },
    ],
  },
  {
    id: "portals",
    title: "Portals",
    description:
      "Dedicated experiences for students, parents / guardians and teachers / lecturers.",
    sections: [
      {
        title: "Student portal",
        status: "available" as CapabilityStatus,
        items: [
          "Profile",
          "Timetable",
          "Assignments & submission",
          "Assessments, results & reports",
          "Attendance",
          "Calendar & announcements",
          "Documents & academic progress",
        ],
      },
      {
        title: "Teacher / lecturer portal",
        status: "available" as CapabilityStatus,
        items: [
          "Assigned classes & subjects / modules",
          "Student records",
          "Attendance registers",
          "Timetables",
          "Assignments, assessments & marks",
          "Student reports",
          "Announcements, calendar & communication",
        ],
      },
      {
        title: "Parent / guardian portal",
        status: "available" as CapabilityStatus,
        items: [
          "Learner profile",
          "Attendance & timetable",
          "Assignments, assessments, results & reports",
          "Calendar & announcements",
          "Academic progress",
          "Fee information where enabled",
        ],
        note: "Fees are not the sole purpose of the parent portal — academic visibility is the priority.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Administration",
    description:
      "Institution administration with Super Admin controls and granular role-based access.",
    sections: [
      {
        title: "Institution administration",
        status: "available" as CapabilityStatus,
        items: [
          "Institution profile",
          "Academic years, terms / semesters",
          "Grades, programmes, classes",
          "Subjects / modules & departments",
          "Staff, students & guardians",
          "Roles, permissions & user management",
          "Documents, announcements, calendar & reporting",
        ],
      },
      {
        title: "Super Admin",
        status: "available" as CapabilityStatus,
        items: [
          "Create, edit, disable and delete users where permitted",
          "Assign roles & permissions",
          "Restrict access",
          "Enable / disable modules",
          "Manage campuses (as multi-campus rolls out)",
          "Manage institutional settings",
        ],
      },
      {
        title: "Data backup & recovery",
        status: "available" as CapabilityStatus,
        items: [
          "Automated database backups where configured",
          "Secure backup storage",
          "Recovery procedures",
          "Protection against accidental data loss",
        ],
        note: "Backup frequency is deployment-specific and not published as a fixed claim here.",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    description:
      "SMS, email and a South African SA-SAMS integration roadmap — with optional future channels.",
    sections: [
      {
        title: "Messaging integrations",
        status: "available" as CapabilityStatus,
        items: ["SMS", "Email"],
        note: "WhatsApp, push notifications and payment / access-control integrations are planned or optional.",
      },
      {
        title: "SA-SAMS",
        status: "roadmap" as CapabilityStatus,
        items: [
          "Student data import / export",
          "Attendance synchronisation",
          "Marks / results synchronisation",
          "Student identifiers",
          "Grade / class mapping",
          "Academic data transfer",
        ],
        note: "Not marketed as official partnership, government certification or DBE approval.",
      },
    ],
  },
] as const;

export const moduleGroups: {
  title: string;
  description: string;
  items: ModuleItem[];
}[] = [
  {
    title: "Core modules",
    description: "Foundational institutional operations for schools and colleges.",
    items: [
      { title: "Admissions", description: "Online applications through enrolment.", status: "available", href: "/features#student-management" },
      { title: "Students", description: "Learner profiles, placement and academic history.", status: "available", href: "/features#student-management" },
      { title: "Academics", description: "Years, classes, subjects/modules and assessment structures.", status: "available", href: "/features#academic-management" },
      { title: "Attendance", description: "Daily and class registers with reporting.", status: "available", href: "/features#campus-operations" },
      { title: "Assignments", description: "Create, submit, mark and track coursework.", status: "available", href: "/features#academic-management" },
      { title: "Assessments", description: "Marks, results and evaluation workflows.", status: "available", href: "/features#academic-management" },
      { title: "Reporting", description: "Academic, attendance and administrative reports.", status: "available", href: "/features#reporting" },
      { title: "Portals", description: "Student, parent and teacher / lecturer access.", status: "available", href: "/features#portals" },
      { title: "Administration", description: "Institution setup, users and configuration.", status: "available", href: "/features#security" },
    ],
  },
  {
    title: "Business modules",
    description: "Commercial and people-operations capabilities.",
    items: [
      { title: "Fees", description: "Fee structures, balances, statements and tracking.", status: "planned", href: "/features#finance" },
      { title: "Finance", description: "Institution finance dashboards and reporting.", status: "planned", href: "/features#finance" },
      { title: "Payroll", description: "Payslips and payroll periods with country-aware architecture.", status: "planned", href: "/features#hr-payroll" },
      { title: "HR", description: "Staff profiles, departments and employment records.", status: "planned", href: "/features#hr-payroll" },
      { title: "Leave", description: "Leave requests, approvals and history.", status: "planned", href: "/features#hr-payroll" },
    ],
  },
  {
    title: "Operations",
    description: "Day-to-day campus and organisational tools.",
    items: [
      { title: "Visitor Management", description: "Visitor sign-in, history and security desk workflows.", status: "planned", href: "/features#campus-operations" },
      { title: "Calendar & Events", description: "Academic calendar, exams, events and holidays.", status: "available", href: "/features#academic-management" },
      { title: "Multi-Campus", description: "Organisation → campus hierarchy with scoped access.", status: "planned", href: "/solutions/multi-campus" },
      { title: "Document Management", description: "Institutional and learner document storage.", status: "available" },
    ],
  },
  {
    title: "Integrations",
    description: "Connect SchoolHub to institutional and regional systems.",
    items: [
      { title: "SA-SAMS", description: "South African administration integration roadmap.", status: "roadmap", href: "/integrations" },
      { title: "SMS", description: "Bulk and targeted SMS communication.", status: "available", href: "/integrations" },
      { title: "Email", description: "Email notifications and announcements.", status: "available", href: "/integrations" },
      { title: "Payments", description: "Payment gateway integrations when configured.", status: "planned", href: "/integrations" },
      { title: "Access Control", description: "Gate / access control integrations.", status: "planned", href: "/integrations" },
    ],
  },
  {
    title: "Future / optional",
    description: "Extend SchoolHub as your institution grows.",
    items: [
      { title: "Mobile Apps", description: "Android & iOS apps for students, parents and staff.", status: "coming-soon", href: "/platform#mobile" },
      { title: "Biometrics", description: "Optional biometric attendance capture.", status: "optional" },
      { title: "Library", description: "Institution-specific library module.", status: "optional" },
      { title: "Transport", description: "Transport management extension.", status: "optional" },
      { title: "Hostel / Residence", description: "Residence management extension.", status: "optional" },
      { title: "Online Classes", description: "Optional online class delivery.", status: "optional" },
      { title: "Visitor QR", description: "QR visitor passes.", status: "optional" },
      { title: "Gate Security", description: "Gate security workflows.", status: "optional" },
      { title: "Advanced analytics", description: "Deeper analytics packs as data maturity grows.", status: "optional" },
    ],
  },
];

export const differentiators = [
  "Schools and colleges on one platform",
  "Modular architecture that can grow with you",
  "Granular role-based permissions",
  "Online admissions",
  "Student, teacher / lecturer and parent portals",
  "Finance and fees roadmap",
  "HR and payroll roadmap",
  "Multi-campus architecture",
  "Custom integrations and module development",
  "SLA-backed support through Cyber Developers",
  "International configuration for different education systems",
] as const;

export const communicationFeatures = [
  "Announcements",
  "Student communication",
  "Parent communication",
  "Staff communication",
  "SMS",
  "Email",
] as const;

export const optionalModules = [
  {
    title: "Mobile Apps",
    description: "Android & iOS apps — coming soon. Web remains mobile-browser accessible.",
  },
  {
    title: "Biometric Attendance",
    description: "Optional add-on attendance capture.",
  },
  {
    title: "Visitor Management",
    description: "Visitor sign-in and history — planned operations module.",
  },
  {
    title: "Online Classes",
    description: "Optional online class capabilities.",
  },
  {
    title: "Access Control",
    description: "Gate / access control integrations — planned.",
  },
  {
    title: "Custom Modules",
    description: "Institution-specific modules built by Cyber Developers.",
  },
] as const;

export const securityPrinciples = [
  {
    title: "Secure user authentication",
    description: "Controlled sign-in for institutional users and roles.",
  },
  {
    title: "Role-based access",
    description: "Access follows the role, not informal credential sharing.",
  },
  {
    title: "Permission controls",
    description: "Module and action-level permissions for sensitive operations.",
  },
  {
    title: "Secure cloud deployment",
    description: "Hosted with controlled access to institutional environments.",
  },
  {
    title: "Controlled data access",
    description: "Institutional information is limited to authorised users.",
  },
  {
    title: "Database security",
    description: "Protected data stores with disciplined access practices.",
  },
  {
    title: "Audit-friendly administration",
    description: "Administration patterns that support oversight.",
  },
  {
    title: "Backups where configured",
    description: "Automated database backups and recovery procedures where configured.",
  },
] as const;

export const admissionsFeatures = [
  "Accept applications online",
  "Review applications",
  "Approve or reject applicants",
  "Capture applicant information",
  "Upload required documents",
  "Convert accepted applicants into students",
  "Track application status",
] as const;

export const studentPortalFeatures = [
  "Profile",
  "Timetable",
  "Assignments & submission",
  "Assessments, results & reports",
  "Attendance",
  "Calendar & announcements",
  "Documents & academic progress",
] as const;

export const parentPortalFeatures = [
  "Learner profile",
  "Attendance & timetable",
  "Assignments, assessments, results & reports",
  "Calendar & announcements",
  "Academic progress",
  "Fee information where enabled",
] as const;

export const staffPortalFeatures = [
  "Assigned classes & subjects / modules",
  "Student records",
  "Attendance registers",
  "Timetables",
  "Assignments, assessments & marks",
  "Student reports",
  "Announcements & communication",
] as const;

export const superAdminCapabilities = [
  "Create users",
  "Edit users",
  "Disable users",
  "Delete users where permitted",
  "Assign roles",
  "Grant module-specific access",
  "Restrict functionality",
  "Enable / disable modules",
  "Manage institutional settings",
] as const;
