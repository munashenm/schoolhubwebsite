/**
 * Real SchoolHub product screenshots from the running app.
 * Files live in /public/images/screenshots/ and are JPEG bytes with a .jpg extension.
 * width/height keep frames at the capture’s natural aspect (no crop/zoom).
 */
export const screenshots = {
  dashboard: {
    src: "/images/screenshots/live-admin-dashboard.jpg",
    width: 1024,
    height: 478,
    title: "Admin dashboard",
    description:
      "Licence, backups, learners, staff, classes and fee collection in the admin portal.",
    alt: "SchoolHub SA admin portal dashboard with learner counts, enrolment trend and fee collection",
  },
  analytics: {
    src: "/images/screenshots/live-admin-analytics.jpg",
    width: 1024,
    height: 468,
    title: "Enrolment and fee reporting",
    description:
      "Learner totals, enrolment trend and fee collection from the admin portal.",
    alt: "SchoolHub SA admin portal showing outstanding fees, enrolment trend and fee collection",
  },
  applications: {
    src: "/images/screenshots/live-admin-dashboard.jpg",
    width: 1024,
    height: 478,
    title: "Applications in the admin portal",
    description:
      "Online applications are reviewed from the same admin portal as enrolment and learner records.",
    alt: "SchoolHub SA admin portal, where staff review applications and enrolment",
  },
  teacherRegister: {
    src: "/images/screenshots/live-lecturer-dashboard.jpg",
    width: 1024,
    height: 478,
    title: "Lecturer portal",
    description:
      "Mark attendance, capture marks, open groups and message learners from one teaching workspace.",
    alt: "SchoolHub SA lecturer portal dashboard with groups, attendance and marks actions",
  },
  studentLogin: {
    src: "/images/screenshots/live-student-login.jpg",
    width: 1024,
    height: 468,
    title: "Student portal sign-in",
    description:
      "Learners sign in from a browser, on campus or at home, to reach timetable, results, fees and notices.",
    alt: "SchoolHub SA student portal login screen",
  },
  results: {
    src: "/images/screenshots/live-admin-analytics.jpg",
    width: 1024,
    height: 468,
    title: "Reporting",
    description:
      "Enrolment and fee collection reporting from the admin portal.",
    alt: "SchoolHub SA reporting charts for enrolment and fee collection",
  },
  cloudHosted: {
    src: "/images/screenshots/live-student-login.jpg",
    width: 1024,
    height: 468,
    title: "Browser sign-in",
    description: "Open the institution portal from any modern browser.",
    alt: "SchoolHub SA student portal sign-in page in the browser",
  },
  backup: {
    src: "/images/screenshots/live-backup-restore.jpg",
    width: 1024,
    height: 505,
    title: "Backup and restore",
    description:
      "Cloud backups, schedules and restore points from the admin portal.",
    alt: "SchoolHub SA backup and restore screen with schedules and recent backups",
  },
  moreReasons: {
    src: "/images/screenshots/live-admin-analytics.jpg",
    width: 1024,
    height: 468,
    title: "Institution admin portal",
    description:
      "The admin portal used by a school or college today. Multi-campus group oversight is still on the roadmap.",
    alt: "SchoolHub SA admin portal overview for a single institution",
  },
  studentCard: {
    src: "/images/screenshots/live-student-welcome.jpg",
    width: 1024,
    height: 471,
    title: "Learner identity card",
    description:
      "Student card with a barcode for the gate or office, plus a printable PDF.",
    alt: "SchoolHub SA student portal showing a barcode student card",
  },
  lecturerDashboard: {
    src: "/images/screenshots/live-lecturer-dashboard.jpg",
    width: 1024,
    height: 478,
    title: "Lecturer portal",
    description:
      "Teaching workspace for groups, attendance, marks and learner messaging.",
    alt: "SchoolHub SA lecturer portal dashboard",
  },
  studentDashboard: {
    src: "/images/screenshots/live-student-dashboard.jpg",
    width: 1024,
    height: 505,
    title: "Student portal",
    description:
      "Attendance, averages, fees, timetable and academic progress for a learner.",
    alt: "SchoolHub SA student portal dashboard with attendance, fees and progress",
  },
} as const;

export type ScreenshotKey = keyof typeof screenshots;
