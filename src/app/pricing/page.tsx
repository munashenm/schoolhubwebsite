import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMeta(
  "Pricing",
  defaultDescriptions.pricing,
  "/pricing",
);

export default function PricingPage() {
  const { pricing } = siteConfig;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHero
        eyebrow="Pricing"
        title="Pricing that fits how institutions buy"
        description="SchoolHub is priced for schools, colleges and training institutions. Larger campuses can request volume pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />

      {!pricing.enabled ? (
        <Section>
          <Container className="max-w-3xl">
            <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
              <SectionHeading
                title="Talk to us about the right plan"
                description="Published package pricing will appear here once commercially confirmed. Until then, request a demo or contact sales for institution-specific pricing — including per-learner and custom institution models."
              />
              <ul className="mt-8 space-y-2 text-sm text-ink-soft">
                <li>· Starter, Professional and Enterprise packaging available</li>
                <li>· Per learner pricing and custom institution pricing supported</li>
                <li>· {pricing.volumeNote}</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/demo">Request a Demo</Button>
                <Button href="/contact" variant="secondary">
                  Contact sales
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted-soft">
                When ready to publish rates, set{" "}
                <code>pricing.enabled</code> to <code>true</code> in{" "}
                <code>src/lib/config.ts</code>. All plan amounts are driven from
                that single file.
              </p>
            </div>
          </Container>
        </Section>
      ) : (
        <Section>
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.plans.map((plan) => (
                <article
                  key={plan.id}
                  className={cn(
                    "rounded-xl border p-6 sm:p-8",
                    plan.highlighted
                      ? "border-brand bg-brand-soft/40"
                      : "border-border bg-surface",
                  )}
                >
                  <h2 className="text-xl font-semibold text-ink">{plan.name}</h2>
                  <p className="mt-2 text-sm text-muted">{plan.description}</p>
                  <p className="mt-6 font-display text-3xl font-semibold text-ink">
                    {plan.pricePerLearner != null
                      ? `${pricing.currencySymbol}${plan.pricePerLearner}`
                      : plan.customLabel}
                    {plan.pricePerLearner != null ? (
                      <span className="ml-2 text-sm font-sans font-normal text-muted">
                        {pricing.billingPeriod}
                      </span>
                    ) : null}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-sm text-ink-soft">
                        · {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="/demo"
                      variant={plan.highlighted ? "primary" : "secondary"}
                    >
                      Request a Demo
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            {pricing.showContactForVolume ? (
              <p className="mt-8 text-center text-sm text-muted">
                {pricing.volumeNote}{" "}
                <a href="/contact" className="font-medium text-brand hover:underline">
                  Contact us
                </a>
                .
              </p>
            ) : null}
          </Container>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
