"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/config";
import { contactEnquiryTypes, institutionTypes } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-border-strong bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm placeholder:text-muted-soft focus:border-brand focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

const labelClass = "block text-sm font-medium text-ink";

type DemoFormProps = {
  className?: string;
};

export function DemoForm({ className }: DemoFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end capture for now — wire to API / CRM later.
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
        "rounded-xl border border-border bg-surface p-6 sm:p-8",
        className,
      )}
      noValidate
    >
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
      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-brand px-6 text-[15px] font-medium text-white transition-colors hover:bg-brand-strong sm:w-auto"
      >
        Request Your SchoolHub Demo
      </button>
      <p className="mt-3 text-xs text-muted">
        Submitted details are handled by the SchoolHub team at{" "}
        {siteConfig.parentCompany.name}.
      </p>
    </form>
  );
}

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-xl border border-border bg-surface p-6 sm:p-8",
        className,
      )}
    >
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
      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-brand px-6 text-[15px] font-medium text-white transition-colors hover:bg-brand-strong"
      >
        Send Message
      </button>
    </form>
  );
}
