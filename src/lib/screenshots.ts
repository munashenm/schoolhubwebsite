/**
 * Real SchoolHub product / demo screenshots.
 * Files live in /public/images/screenshots/
 */
export const screenshots = {
  dashboard: {
    src: "/images/screenshots/demo-01-keep-homepage.png",
    title: "Institution dashboard",
    description: "Open your institution and run day-to-day operations from one workspace.",
    alt: "SchoolHub SA institution dashboard showing core school and college modules",
  },
  institutions: {
    src: "/images/screenshots/demo-01-open-institutions.png",
    title: "Institutions",
    description: "Select and manage institutions on the platform.",
    alt: "SchoolHub SA institutions selection screen",
  },
  applications: {
    src: "/images/screenshots/demo-02-apply-status.png",
    title: "Online applications",
    description: "Track application status from submission through review.",
    alt: "SchoolHub SA online application status screen",
  },
  enrolment: {
    src: "/images/screenshots/demo-03-enrol-said.png",
    title: "Enrolment",
    description: "Convert accepted applicants into enrolled learners.",
    alt: "SchoolHub SA learner enrolment screen",
  },
  printCollect: {
    src: "/images/screenshots/demo-04-collect-print.png",
    title: "Collect & print",
    description: "Generate institutional documents when you need them.",
    alt: "SchoolHub SA document collection and print workflow",
  },
  familyAcademics: {
    src: "/images/screenshots/demo-05-family-academics.png",
    title: "Family academics",
    description: "Parents and families follow academic progress.",
    alt: "SchoolHub SA parent and family academics view",
  },
  parentFees: {
    src: "/images/screenshots/demo-05-parent-pay.png",
    title: "Parent fees visibility",
    description: "Fee information where enabled for guardians.",
    alt: "SchoolHub SA parent portal fee payment view",
  },
  teacherRegister: {
    src: "/images/screenshots/demo-06-teacher-register.png",
    title: "Teacher attendance register",
    description: "Capture class attendance and assessment marks.",
    alt: "SchoolHub SA teacher portal attendance register and assessments",
  },
  modules: {
    src: "/images/screenshots/demo-07-optional-close.png",
    title: "Modular platform",
    description: "Enable the modules your institution needs.",
    alt: "SchoolHub SA modular platform overview",
  },
  saSams: {
    src: "/images/screenshots/demo-08-sasams.png",
    title: "SA-SAMS roadmap",
    description: "South African administration integration on the roadmap.",
    alt: "SchoolHub SA SA-SAMS integration roadmap visual",
  },
  sla: {
    src: "/images/screenshots/demo-09-sla.png",
    title: "Support & SLA",
    description: "Service backed by Cyber Developers.",
    alt: "SchoolHub SA service level agreement overview",
  },
  timetable: {
    src: "/images/screenshots/demo-10-timetable.png",
    title: "Timetables",
    description: "Class, learner and teacher / lecturer schedules.",
    alt: "SchoolHub SA timetable management screen",
  },
  studentLogin: {
    src: "/images/screenshots/demo-11-student-login.png",
    title: "Student portal",
    description: "Learners access homework, timetable and more.",
    alt: "SchoolHub SA student portal login and navigation",
  },
  assignments: {
    src: "/images/screenshots/demo-12-assignment.png",
    title: "Assignments",
    description: "View, submit and track homework online.",
    alt: "SchoolHub SA student homework assignment submission screen",
  },
  results: {
    src: "/images/screenshots/demo-13-results.png",
    title: "Results",
    description: "Classroom marks and published results for authorised users.",
    alt: "SchoolHub SA learner portal My Results screen",
  },
  messages: {
    src: "/images/screenshots/demo-14-messages.png",
    title: "Internal messaging",
    description: "Communication between educators and learners.",
    alt: "SchoolHub SA internal messaging conversation screen",
  },
  payroll: {
    src: "/images/screenshots/demo-15-payroll.png",
    title: "HR payroll",
    description: "Payslip preview and payroll runs for staff.",
    alt: "SchoolHub SA HR payroll and payslip preview screen",
  },
  paperSavings: {
    src: "/images/screenshots/demo-16-paper-savings.png",
    title: "Less paper, better admin",
    description: "Print when you need it — not a copy for every household.",
    alt: "SchoolHub SA paper savings and digital documents promotion",
  },
  collegeStudent: {
    src: "/images/screenshots/demo-17-college-student.png",
    title: "College student portal",
    description: "Timetable, assignments, attendance and results for colleges.",
    alt: "SchoolHub SA college student portal dashboard",
  },
  cloudHosted: {
    src: "/images/screenshots/demo-18-cloud-hosted.png",
    title: "Cloud-hosted access",
    description: "Work from campus or home in the browser.",
    alt: "SchoolHub SA cloud-hosted dashboard accessed from laptop",
  },
  backup: {
    src: "/images/screenshots/demo-19-backup.png",
    title: "Backup & restore",
    description: "Cloud backups and encrypted backup packages.",
    alt: "SchoolHub SA backup and restore administration screen",
  },
  smsReminders: {
    src: "/images/screenshots/demo-20-sms-reminders.png",
    title: "Fee reminders",
    description: "Email and SMS fee reminder rules.",
    alt: "SchoolHub SA finance fee reminders with SMS example",
  },
  cloudDocs: {
    src: "/images/screenshots/demo-21-cloud-docs.png",
    title: "Document management",
    description: "Institution documents hosted securely in the cloud.",
    alt: "SchoolHub SA document uploads and cloud storage screen",
  },
  moreReasons: {
    src: "/images/screenshots/demo-22-more-reasons.png",
    title: "Built for real institutions",
    description: "Auditability, role-based access, offline grace and multi-campus oversight.",
    alt: "SchoolHub SA features including audit log, roles, offline grace and multi-campus",
  },
  visitors: {
    src: "/images/screenshots/demo-23-visitors.png",
    title: "Visitors book",
    description: "Sign in visitors and manage today's register.",
    alt: "SchoolHub SA visitors book sign-in and today's visitors table",
  },
  leave: {
    src: "/images/screenshots/demo-24-leave.png",
    title: "Leave management",
    description: "Staff leave applications, approvals and balances.",
    alt: "SchoolHub SA staff leave application and HR approval screen",
  },
  studentCard: {
    src: "/images/screenshots/demo-25-student-card.png",
    title: "Learner identity cards",
    description: "Generate printable learner cards with photo and barcode.",
    alt: "SchoolHub SA generate learner identity card preview",
  },
  certificates: {
    src: "/images/screenshots/demo-26-certificates.png",
    title: "Certificates",
    description: "Issue and download certificates of completion.",
    alt: "SchoolHub SA certificates issue and preview screen",
  },
} as const;

export type ScreenshotKey = keyof typeof screenshots;
