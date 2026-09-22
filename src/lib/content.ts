export const platformModules = [
  {
    title: "Student / Learner Management",
    description:
      "Complete learner profiles, placement, documents, status and academic history in one record.",
  },
  {
    title: "Admissions & Online Applications",
    description:
      "Accept, review and convert applications without paper-heavy intake processes.",
  },
  {
    title: "Academic Management",
    description:
      "Years, terms, grades, classes, subjects, teachers and assessment structures.",
  },
  {
    title: "Attendance Management",
    description:
      "Daily and class attendance with history, late tracking and reporting.",
  },
  {
    title: "Class & Subject Management",
    description:
      "Allocate classes and subjects, then keep teaching loads organised.",
  },
  {
    title: "Timetables",
    description:
      "Publish and manage class schedules so staff and learners stay aligned.",
  },
  {
    title: "Assignments",
    description:
      "Create, distribute, submit and assess coursework across classes.",
  },
  {
    title: "Assessments",
    description:
      "Structure continuous assessment and formal evaluation with clear mark capture.",
  },
  {
    title: "Examinations",
    description:
      "Plan and manage exam cycles with results flowing into learner records.",
  },
  {
    title: "Results",
    description:
      "Capture, review and release results with visibility for authorised roles.",
  },
  {
    title: "Report Cards",
    description:
      "Generate progress reports and report cards from academic data already in the system.",
  },
  {
    title: "Student Portal",
    description:
      "Give learners access to assignments, results, attendance, timetables and announcements.",
  },
  {
    title: "Parent Portal",
    description:
      "Share academic progress, attendance and key updates with guardians.",
  },
  {
    title: "Teacher / Staff Portal",
    description:
      "Classes, attendance, assignments, marks and communication in one workspace.",
  },
  {
    title: "Administration Portal",
    description:
      "Institution-wide control of people, academics, admissions and operations.",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Granular permissions so each user only sees what their role requires.",
  },
  {
    title: "Communication",
    description:
      "Announcements and in-platform communication for students, parents and staff.",
  },
  {
    title: "Document Management",
    description:
      "Store and retrieve learner and institutional documents securely.",
  },
  {
    title: "Student Promotion",
    description:
      "Move learners between grades and academic years with prerequisite checks.",
  },
  {
    title: "Transfer Management",
    description:
      "Track transfers and related documentation as learners move between institutions.",
  },
  {
    title: "Student Cards",
    description:
      "Produce learner identification records for campus and administrative use.",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Operational and academic reports for leadership, teachers and administrators.",
  },
] as const;

export const optionalModules = [
  {
    title: "Online Classes",
    description: "Extend delivery with optional online class capabilities.",
  },
  {
    title: "Biometric Attendance",
    description: "Add-on attendance capture for campuses that need it.",
  },
  {
    title: "Gate / Access Control",
    description: "Optional integration with campus access workflows.",
  },
  {
    title: "Visitor Management",
    description: "Track visitors as an institution-specific extension.",
  },
  {
    title: "Advanced Communication",
    description:
      "Integration-ready / optional integrations for broader messaging channels.",
  },
  {
    title: "Additional Integrations",
    description: "Connect SchoolHub to systems your institution already uses.",
  },
  {
    title: "Custom Reporting",
    description: "Institution-specific report packs built around your processes.",
  },
  {
    title: "Institution-Specific Modules",
    description:
      "Custom development by Cyber Developers when standard modules are not enough.",
  },
] as const;

export const studentManagementFeatures = [
  "Complete learner / student profiles",
  "Personal details",
  "Guardian information",
  "Academic information",
  "Class / grade placement",
  "Documents",
  "Attendance history",
  "Assessment history",
  "Results",
  "Behaviour / notes where applicable",
  "Student status",
  "Edit and update student information",
  "Promotion between grades / academic years",
  "Promotion prerequisites",
  "Transfer records",
  "Student cards",
  "Transfer letters",
  "Academic history",
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

export const academicFeatures = [
  "Academic years",
  "Terms / semesters",
  "Grades",
  "Classes",
  "Subjects",
  "Teachers",
  "Class allocation",
  "Subject allocation",
  "Class timetable",
  "Assessment structures",
  "Marks",
  "Results",
  "Progress reports",
  "Report cards",
] as const;

export const assignmentFeatures = [
  "Teacher assignment creation",
  "Student assignment viewing",
  "Online assignment submission",
  "Due dates",
  "Assessment / grading",
  "Student progress",
] as const;

export const attendanceFeatures = [
  "Daily learner attendance",
  "Class attendance",
  "Attendance reporting",
  "Student attendance history",
  "Late arrivals",
  "Absence tracking",
  "Parent / administrator visibility where configured",
] as const;

export const attendanceAddOns = [
  "Biometric attendance",
  "Gate attendance",
  "Access control integration",
] as const;

export const studentPortalFeatures = [
  "Assignments",
  "Assessment information",
  "Results",
  "Reports",
  "Attendance",
  "Timetables",
  "Announcements",
  "Academic progress",
] as const;

export const parentPortalFeatures = [
  "Progress",
  "Results",
  "Reports",
  "Attendance",
  "Assignments",
  "Assessments",
  "Announcements",
] as const;

export const staffPortalFeatures = [
  "Classes",
  "Learners",
  "Attendance",
  "Assignments",
  "Assessments",
  "Marks",
  "Reports",
  "Timetables",
  "Communication",
  "Academic information",
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
  "Control administrative permissions",
] as const;

export const reportingExamples = [
  "Learner performance",
  "Attendance",
  "Class performance",
  "Assessment results",
  "Academic progress",
  "Enrolment",
  "Applications",
  "Administrative reporting",
] as const;

export const communicationFeatures = [
  "Announcements",
  "Student communication",
  "Parent communication",
  "Staff communication",
  "Notifications",
] as const;

export const securityPrinciples = [
  {
    title: "Secure user authentication",
    description: "Controlled sign-in for institutional users and roles.",
  },
  {
    title: "Role-based access",
    description: "Access follows the role, not informal sharing of credentials.",
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
    description: "Administration patterns that support oversight and accountability.",
  },
  {
    title: "Backups where configured",
    description: "Backup practices aligned to the deployment arrangement.",
  },
] as const;

export const differentiators = [
  "One platform instead of disconnected systems",
  "Designed for both schools and colleges",
  "Role-based administration",
  "Student and parent visibility",
  "Online applications",
  "Academic management",
  "Attendance",
  "Assignments, assessments, results and reporting",
  "Flexible modules",
  "Configurable permissions",
  "Multi-country capability",
  "Grows with the institution",
  "Custom development and support through Cyber Developers",
] as const;
