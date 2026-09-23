import { siteConfig } from "@/lib/config";

/** Default endpoint for cPanel PHP mailer (static export compatible). */
export const defaultFormEndpoint = "/form-handler.php";

export function getFormEndpoint() {
  return (
    process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim() ||
    defaultFormEndpoint
  );
}

export type FormSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitMarketingForm(
  payload: Record<string, string>,
): Promise<FormSubmitResult> {
  const endpoint = getFormEndpoint();

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    let data: { ok?: boolean; error?: string } = {};
    const text = await res.text();
    try {
      data = text ? (JSON.parse(text) as { ok?: boolean; error?: string }) : {};
    } catch {
      data = {};
    }

    if (!res.ok || data.ok === false) {
      return {
        ok: false,
        error:
          data.error ||
          `We could not send your message. Please email ${siteConfig.email.sales} or call ${siteConfig.phone.display}.`,
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: `Network error. Please email ${siteConfig.email.sales} or call ${siteConfig.phone.display}.`,
    };
  }
}
