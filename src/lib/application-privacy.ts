import { siteConfig } from "./config";
const APP_NAME = siteConfig.name;
const COMPANY_NAME = siteConfig.parentCompany.name;
const COMPANY_WEBSITE = siteConfig.parentCompany.url;
const APPLICATION_PRIVACY_PATH = "/application-privacy";
const DELETION_REQUEST_PATH = "/data-deletion";

export const APPLICATION_PRIVACY_URL_PATH = APPLICATION_PRIVACY_PATH;

export type PrivacySection = { heading: string; paragraphs: string[] };

/** Statements below describe behaviour in this codebase. They are not a certificate or a fixed retention schedule. */
export function applicationPrivacySections(): PrivacySection[] {
  return [
    {
      heading: "Who this policy covers",
      paragraphs: [
        `${APP_NAME} is the school, college and training portal published by ${COMPANY_NAME}. The Android application is a Trusted Web Activity that opens https://app.schoolhubsa.co.za. It does not keep a separate copy of school records.`,
        `The operator published on ${COMPANY_WEBSITE} is Cyber Developers (Pty) Ltd, 135 Rivonia Road, Sandton, Gauteng, South Africa. Telephone 087 550 1813. This application does not store a company registration number, so none is stated here. The Android signing certificate is not used as proof of that identity or address.`,
        `Each school, college or training centre decides what to record about its learners, guardians and staff, and remains responsible for that institution's own privacy notice. The page at /privacy shows that institution's notice. This page describes the platform.`,
      ],
    },
    {
      heading: "Accounts",
      paragraphs: [
        `Portal accounts for learners, guardians, educators and staff are created by the institution. A person does not create a portal login from the Play Store or from a public registration form.`,
        `A public admissions form can be submitted when the institution has applications open. That form creates an application for the institution. It does not create a portal login.`,
        `An account stores a name, a unique email address, a role, and a password hash. A phone number and profile image can be stored when the institution records them. The password itself is not stored. The access session is an httpOnly cookie lasting up to 8 hours.`,
        `Every browser session ends after 15 minutes without activity. The sign-in screen does not offer a longer session. A warning appears after 10 minutes. Ordinary use of the page resets the timer. Prefetch, polling and other automatic requests do not. A 30-day sign-in is not issued, because the Android application cannot yet prove that a request came from the installed app rather than a browser. A copied user agent or referrer is not accepted. An existing remembered browser credential cannot restore a session. Shared school devices and Super Admin, school administrator, principal, finance and HR accounts stay on the same 15-minute limit. Signing out of this device ends that device's remembered sign-in. Signing out of all devices, changing or resetting the password, or turning the account off ends every remembered device for that account.`,
      ],
    },
    {
      heading: "Learner, guardian, educator and staff information",
      paragraphs: [
        `Where the institution uses the relevant screens, records can include names, contact details, addresses, date of birth, gender, nationality, home language, emergency contacts, photographs, and staff employment details.`,
        `South African identity numbers written through the application are stored with AES-256-GCM, using the application secret, together with a separate lookup hash. Passport numbers, medical notes and disability notes are stored when the institution enters them. This policy does not claim that every free-text field is encrypted.`,
        `Employee bank account numbers entered on the employee record are encrypted with the same application secret. School fee bank details on the institution profile are stored for the institution's own invoices.`,
      ],
    },
    {
      heading: "Admissions, attendance and academic records",
      paragraphs: [
        `Admissions records can include the applicant, the guardian, the grade or programme applied for, and files the applicant uploads. Attendance, marks, report cards, assignments, exams and letters are stored when staff use those functions.`,
        `A learner data export is available to authorised staff for a data-subject request. Generating that export does not delete the record.`,
      ],
    },
    {
      heading: "Fees and payments",
      paragraphs: [
        `The platform can store invoices, receipts, allocations, credits, refunds and debtor records for an institution. Those records are not sold inside the Android app as a digital purchase.`,
        `If the institution turns on PayFast, Yoco, Ozow or Paystack, a fee payment can be handed to that provider. The provider then processes the payment under its own terms. A school can also record cash or EFT without a gateway. No payment gateway is forced on for every school.`,
        `Platform licences for an institution are arranged with ${COMPANY_NAME}. They are not sold as an in-app purchase in the Android application.`,
      ],
    },
    {
      heading: "Files, photographs and messages",
      paragraphs: [
        `Documents, photographs and other files uploaded for a school are stored for that school. Production can use an S3-compatible store, or a mounted volume when local storage is explicitly allowed. The application does not name a single storage vendor in code.`,
        `Announcements and internal messages are visible to the people the institution addresses. They are not published as a public social feed.`,
      ],
    },
    {
      heading: "Passkeys and push",
      paragraphs: [
        `Passkey sign-in is optional. The platform stores a public key, a credential identifier and a signature counter. It does not store a fingerprint, a face image or a device PIN. Adding or removing a passkey requires the current password. Password sign-in and password reset remain available.`,
        `Phone notifications are optional and stay off until that person turns them on. The Android app can ask the device for notification permission. If the person agrees, the platform stores the browser push endpoint and that browser's user-agent string for that person and that school. Lock-screen text does not include results, fees or attendance details. Turning notifications off, or signing out, removes that device's subscription.`,
      ],
    },
    {
      heading: "Service providers",
      paragraphs: [
        `The production website and its PostgreSQL database are hosted on Railway. A production deployment of this service has run in Railway region us-east4 in the United States, so personal information is transferred outside South Africa for hosting. Mail from the platform can be sent with Resend when those variables are set. An institution can instead configure its own SendGrid account, SMTP server, Twilio account or other SMS gateway. Those providers receive only what that function needs, such as an email address and the message. Their processing location is set by that provider.`,
        `There is no advertising SDK and no analytics SDK in the Android application. The app can request internet access and notification permission. Notification permission is used only for optional push, and only after the person turns notifications on.`,
        `This policy does not name a single storage country for backups or uploaded files beyond the configured host, and it does not claim a security certification.`,
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        `The site is served over HTTPS. The Android application disables cleartext traffic. Portal passwords are hashed. The session cookie is httpOnly. Institution access is checked on each request so one school's session does not open another school's records.`,
        `Backups can be encrypted with AES-256-GCM when a backup key is configured. This is a control in the product, not a statement that every backup has been independently audited.`,
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        `Learners can be children. The institution decides to collect their information for education and administration. ${COMPANY_NAME} processes that information so the institution can run the portal. The platform does not show advertising and does not sell personal information.`,
        `A child does not create their own portal account. Public admissions pages ask for the institution's consent statement before an application is accepted.`,
      ],
    },
    {
      heading: "Rights, retention and contact",
      paragraphs: [
        `A person can ask the institution for access or correction. Authorised staff can export a learner's record. A deletion or account-closure request can be sent at ${DELETION_REQUEST_PATH} without installing the app, and from Account security after sign-in.`,
        `The application does not apply an automatic retention period. Submitting a request does not delete educational, attendance, academic, financial or statutory records. After identity is confirmed, an authorised reviewer at that institution may turn off the portal sign-in and replace its email, name, phone, profile image and password, and remove that sign-in's passkeys, remembered devices and push subscriptions. The account row stays linked to the institution's learner, guardian, educator or staff record. The request keeps the name and email supplied on the form. Turning the sign-in off without replacing those details is not treated as deletion. Learner marks, attendance registers, fee invoices and receipts, payroll, statutory finance and the institution's audit trail stay with the school, which controls those records. The reason for retention is written on the request. The product does not state a number of years because no such period is configured.`,
        `Privacy contact: sales@cyberdevelopers.co.za. That address is published on the operator's website. Questions about a particular learner should also go to that learner's school. A deletion request can be followed up with the reference shown after the form is sent, without installing the Android app.`,
      ],
    },
  ];
}
