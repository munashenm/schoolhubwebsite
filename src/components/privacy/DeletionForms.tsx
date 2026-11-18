"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/config";

const API = `${siteConfig.applicationUrl}/api/privacy/deletion-requests`;
const inputClass = "mt-1.5 w-full rounded-md border border-border-strong bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";
const labelClass = "block text-sm font-medium text-ink";
const actionClass = "inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-60";

type ApiResponse = { success?: boolean; reference?: string; followUp?: string; status?: string; message?: string };

async function postToSchoolHub(path: string, payload: Record<string, string>) {
  const response = await fetch(`${API}${path}`, {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await response.json().catch(() => null)) as ApiResponse | null;
  return { ok: response.ok, data };
}

function BackendFallback() {
  return (
    <p className="mt-3 text-sm text-muted">
      If this form cannot connect, you can use the{" "}
      <a href={`${siteConfig.applicationUrl}/data-deletion`} className="font-semibold text-brand underline">
        existing SchoolHub application request page
      </a>
      . Do not resubmit if you already received a reference.
    </p>
  );
}

export function PublicDeletionRequestForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiResponse | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      requesterName: String(form.get("requesterName") ?? "").trim(),
      requesterEmail: String(form.get("requesterEmail") ?? "").trim(),
      institutionName: String(form.get("institutionName") ?? "").trim(),
      roleLabel: String(form.get("roleLabel") ?? "").trim(),
      details: String(form.get("details") ?? "").trim(),
      companyWebsite: String(form.get("companyWebsite") ?? "").trim(),
    };
    setError(null);
    setBusy(true);
    try {
      const response = await postToSchoolHub("", payload);
      if (!response.ok || !response.data?.reference) {
        setError(response.data?.message || "The request could not be submitted. Please try again or use the application request page.");
      } else {
        setResult(response.data);
      }
    } catch {
      setError("We could not connect to SchoolHub SA. Please use the application request page below.");
    } finally {
      setBusy(false);
    }
  }

  if (result) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6" role="status" aria-live="polite">
        <h3 className="text-lg font-semibold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-muted">
          Your request has been recorded for review. No account or school records were automatically deleted.
        </p>
        <p className="mt-3 break-all rounded-md bg-background px-4 py-3 font-mono text-sm text-ink">
          Reference: <strong>{result.reference}</strong>
        </p>
        <p className="mt-2 text-sm text-muted">
          Keep this reference and the email address you used. You can check the status below.
        </p>
        {result.followUp ? <p className="mt-2 text-sm text-muted">{result.followUp}</p> : null}
      </div>
    );
  }

  return (
    <form onSubmit={(event) => void submit(event)} className="space-y-5 rounded-xl border border-border bg-surface p-5 sm:p-7">
      <div>
        <label className={labelClass} htmlFor="deletion-name">Name on the account</label>
        <input id="deletion-name" name="requesterName" required minLength={2} maxLength={120} autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="deletion-email">Email on the account</label>
        <input id="deletion-email" name="requesterEmail" type="email" required maxLength={180} autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="deletion-school">School, college or institution</label>
        <input id="deletion-school" name="institutionName" required minLength={2} maxLength={160} className={inputClass} />
        <p className="mt-1 text-xs text-muted">Use the institution&apos;s registered name or SchoolHub code if known.</p>
      </div>
      <div>
        <label className={labelClass} htmlFor="deletion-role">Account type</label>
        <select id="deletion-role" name="roleLabel" defaultValue="" required className={inputClass}>
          <option value="" disabled>Select your account type</option>
          <option value="Learner">Learner</option>
          <option value="Parent or guardian">Parent or guardian</option>
          <option value="Educator">Educator</option>
          <option value="School staff">School staff</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="deletion-details">What would you like reviewed or deleted?</label>
        <textarea id="deletion-details" name="details" required minLength={10} maxLength={2000} rows={5} className={inputClass}
          placeholder="Describe the account or personal information concerned and your request. Do not include passwords or identity-document numbers." />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="deletion-website">Website</label>
        <input id="deletion-website" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? <p role="alert" className="text-sm text-red-700">{error}</p> : null}
      <button type="submit" className={actionClass} disabled={busy}>
        {busy ? "Submitting…" : "Submit deletion request"}
      </button>
      <BackendFallback />
    </form>
  );
}

export function PublicDeletionStatusForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError(null);
    setStatus(null);
    setBusy(true);
    try {
      const response = await postToSchoolHub("/lookup", {
        reference: String(form.get("reference") ?? "").trim(),
        email: String(form.get("email") ?? "").trim(),
      });
      if (!response.ok || !response.data?.status) {
        setError(response.data?.message || "No request matches that reference and email.");
      } else {
        setStatus(response.data.status);
      }
    } catch {
      setError("The status could not be checked right now. Please try the application request page.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={(event) => void submit(event)} className="space-y-4 rounded-xl border border-border bg-surface p-5 sm:p-7">
      <div>
        <label htmlFor="deletion-reference" className={labelClass}>Request reference</label>
        <input id="deletion-reference" name="reference" required minLength={8} maxLength={40} className={inputClass} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="deletion-check-email" className={labelClass}>Email used for the request</label>
        <input id="deletion-check-email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </div>
      {status ? <p role="status" aria-live="polite" className="rounded-md bg-brand-soft p-3 text-sm text-ink">Status: <strong>{status}</strong></p> : null}
      {error ? <p role="alert" className="text-sm text-red-700">{error}</p> : null}
      <button type="submit" className={actionClass} disabled={busy}>
        {busy ? "Checking…" : "Check request status"}
      </button>
      <BackendFallback />
    </form>
  );
}
