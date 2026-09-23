import { FeatureSpotlight } from "@/components/home/FeatureSpotlight";
import { admissionsFeatures } from "@/lib/content";
import { screenshots } from "@/lib/screenshots";

export function AdmissionsSection() {
  return (
    <FeatureSpotlight
      id="admissions"
      eyebrow="Online applications"
      title="Take your admissions online"
      description="Accept applications, review documents, approve or reject applicants, and convert accepted applicants into enrolled students — without rebuilding your intake process in spreadsheets."
      items={admissionsFeatures}
      screenshot={screenshots.applications}
      tone="surface"
    />
  );
}

const attendanceItems = [
  "Daily learner attendance",
  "Class attendance registers",
  "Late arrivals and absences",
  "Attendance history by learner",
  "Attendance reporting for leadership",
  "Parent visibility where enabled",
] as const;

export function AttendanceSpotlight() {
  return (
    <FeatureSpotlight
      id="attendance"
      eyebrow="Attendance"
      title="Registers that stay connected to the learner record"
      description="Capture daily and class attendance once, then use the same data for history, reporting and authorised parent visibility."
      items={attendanceItems}
      screenshot={screenshots.teacherRegister}
      tone="default"
      reverse
    />
  );
}

const financeItems = [
  "Fee structures by grade, programme or student",
  "Student balances, statements and receipts",
  "Outstanding fees and payment tracking",
  "Fee reminders by email and SMS",
  "Institution finance dashboards",
  "Payroll and HR workflows as modules grow",
] as const;

export function FinanceSpotlight() {
  return (
    <FeatureSpotlight
      id="finance"
      eyebrow="Finance & fees"
      title="Fees, finance and payroll in the same institutional stack"
      description="Give finance teams and parents a clearer view of balances and collections — with payroll and HR available as your institution expands the platform."
      items={financeItems}
      screenshot={screenshots.analytics}
      tone="surface"
      note="Finance, fees and payroll capabilities are delivered according to your institution’s module configuration and implementation status."
    />
  );
}

const reportingItems = [
  "Learner and class performance",
  "Assessment results and academic trends",
  "Attendance by learner, class and period",
  "Admissions and enrolment reporting",
  "Administrative and campus statistics",
  "PDF exports where implemented",
] as const;

export function ReportingSpotlight() {
  return (
    <FeatureSpotlight
      id="reporting"
      eyebrow="Reporting & analytics"
      title="Reports leadership can act on"
      description="Pull academic, attendance, admissions and administrative reporting from the same operational data — instead of reconciling spreadsheets after the fact."
      items={reportingItems}
      screenshot={screenshots.results}
      tone="default"
      reverse
    />
  );
}

const multiCampusItems = [
  "Multiple campuses under one organisation",
  "Campus-scoped student and staff records",
  "Campus administrators with limited access",
  "Classes, programmes and timetables by campus",
  "Campus-level and consolidated reporting",
  "Head-office oversight for authorised Super Admins",
] as const;

export function MultiCampusSpotlight() {
  return (
    <FeatureSpotlight
      id="multi-campus"
      eyebrow="Multi-campus"
      title="One organisation. Multiple campuses."
      description="Built for school and college groups that need campus-level operations with central oversight — Organisation → Campus A / B / C."
      items={multiCampusItems}
      screenshot={screenshots.moreReasons}
      tone="soft"
      ctaHref="/solutions/multi-campus"
      ctaLabel="Explore multi-campus"
      note="Multi-campus management is part of the SchoolHub architecture and module rollout for institution groups."
    />
  );
}
