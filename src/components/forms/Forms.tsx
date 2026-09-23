"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/config";
import { submitMarketingForm } from "@/lib/forms";
import { contactEnquiryTypes, institutionTypes } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-border-strong bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm placeholder:text-muted-soft focus:border-brand focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

const labelClass = "block text-sm font-medium text-ink";

function Honeypot() {
  return (
    <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

type DemoFormProps = {
  className?: string;
};

export function DemoForm({ className }: DemoFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const result = await submitMarketingForm({
      formType: "demo",
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      name: `${fd.get("firstName") || ""} ${fd.get("lastName") || ""}`.trim(),
      institutionName: String(fd.get("institutionName") || ""),
      institution: String(fd.get("institutionName") || ""),
      institutionType: String(fd.get("institutionType") || ""),
      country: String(fd.get("country") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      learners: String(fd.get("learners") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
    });

    setPending(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-xl border border-border bg-surface p-8 sm:p-10",
          className,
        )}
        role="status"
      >
        <h2 className="font-display text-2xl font-semibold text-ink">
          Demo request received
        </h2>
        <p className="mt-3 text-muted">
          Thank you. Our team will review your details and follow up about a
          SchoolHub demonstration. For urgent enquiries, email{" "}
          <a
            className="font-medium text-brand underline-offset-2 hover:underline"
            href={`mailto:${siteConfig.email.sales}`}
          >
            {siteConfig.email.sales}
          </a>{" "}
          or call{" "}
          <a
            className="font-medium text-brand underline-offset-2 hover:underline"
            href={siteConfig.phone.href}
          >
            {siteConfig.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "relative rounded-xl border border-border bg-surface p-6 sm:p-8",
        className,
      )}
      noValidate
    >
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="institutionName" className={labelClass}>
            Institution Name
          </label>
          <input
            id="institutionName"
            name="institutionName"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="institutionType" className={labelClass}>
            Institution Type
          </label>
          <select
            id="institutionType"
            name="institutionType"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            {institutionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            required
            autoComplete="country-name"
            placeholder="e.g. South Africa, Zimbabwe, United Kingdom"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="learners" className={labelClass}>
            Number of Students / Learners
          </label>
          <input
            id="learners"
            name="learners"
            inputMode="numeric"
            placeholder="Approximate headcount"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={fieldClass}
            placeholder="Tell us about your institution and what you want to see in the demo."
          />
        </div>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-brand px-6 text-[15px] font-medium text-white transition-colors hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending…" : "Request Your SchoolHub Demo"}
      </button>
      <p className="mt-3 text-xs text-muted">
        Submitted details are emailed to the SchoolHub team at{" "}
        {siteConfig.parentCompany.name}.
      </p>
    </form>
  );
}

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const result = await submitMarketingForm({
      formType: "contact",
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      institution: String(fd.get("institution") || ""),
      enquiryType: String(fd.get("enquiryType") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
    });

    setPending(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-xl border border-border bg-surface p-8",
          className,
        )}
        role="status"
      >
        <h2 className="font-display text-2xl font-semibold text-ink">
          Message sent
        </h2>
        <p className="mt-3 text-muted">
          Thanks for getting in touch. We will respond using the email you
          provided. For urgent matters, call{" "}
          <a
            className="font-medium text-brand underline-offset-2 hover:underline"
            href={siteConfig.phone.href}
          >
            {siteConfig.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "relative rounded-xl border border-border bg-surface p-6 sm:p-8",
        className,
      )}
    >
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className={labelClass}>
            Full Name
          </label>
          <input
            id="contactName"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className={labelClass}>
            Work Email
          </label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contactInstitution" className={labelClass}>
            Institution / Organisation
          </label>
          <input
            id="contactInstitution"
            name="institution"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="enquiryType" className={labelClass}>
            Enquiry Type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select enquiry type
            </option>
            {contactEnquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contactMessage" className={labelClass}>
            Message
          </label>
          <textarea
            id="contactMessage"
            name="message"
            required
            rows={5}
            className={fieldClass}
          />
        </div>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-brand px-6 text-[15px] font-medium text-white transition-colors hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
