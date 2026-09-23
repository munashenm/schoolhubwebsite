import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
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
        title="Simple packages for schools and colleges"
        description="Start with core administration, grow into full academic operations, or talk to us about custom and multi-site needs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.plans.map((plan) => (
              <article
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-xl border p-6 sm:p-8",
                  plan.highlighted
                    ? "border-brand bg-brand-soft/40"
                    : "border-border bg-surface",
                )}
              >
                <h2 className="text-xl font-semibold text-ink">{plan.name}</h2>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <p className="mt-6 font-display text-3xl font-semibold text-ink">
                  {plan.pricePerLearner != null ? (
                    <>
                      From {pricing.currencySymbol}
                      {plan.pricePerLearner}
                      <span className="ml-2 text-sm font-sans font-normal text-muted">
                        {pricing.billingPeriod}
                      </span>
                    </>
                  ) : (
                    plan.customLabel
                  )}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
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

          <p className="mt-8 text-center text-sm text-muted">
            {pricing.disclaimer}
          </p>

          {pricing.showContactForVolume ? (
            <p className="mt-3 text-center text-sm text-muted">
              {pricing.volumeNote}{" "}
              <a
                href="/contact"
                className="font-medium text-brand hover:underline"
              >
                Contact sales
              </a>
              .
            </p>
          ) : null}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/demo">Request a Demo</Button>
            <Button href="/contact" variant="secondary">
              Ask about volume pricing
            </Button>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
