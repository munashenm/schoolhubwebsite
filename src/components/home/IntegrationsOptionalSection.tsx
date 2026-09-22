import { Button } from "@/components/ui/Button";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteConfig } from "@/lib/config";
import { communicationFeatures, optionalModules } from "@/lib/content";

export function IntegrationsOptionalSection() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Integrations & communication"
              title="SMS, email and a clear integration roadmap"
              description="In-platform communication plus SMS and email keep students, parents and staff informed. WhatsApp, payments and access control are planned or optional."
            />
            <ul className="mt-8 space-y-2.5">
              {communicationFeatures.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  · {item}
                </li>
              ))}
            </ul>
            {siteConfig.saSams.enabled ? (
              <div className="mt-8 rounded-xl border border-border bg-background p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-soft">
                    South Africa
                  </p>
                  <StatusBadge status={siteConfig.saSams.status} />
                </div>
                <h3 className="mt-2 text-base font-semibold text-ink">
                  {siteConfig.saSams.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {siteConfig.saSams.summary}
                </p>
                <p className="mt-2 text-xs text-muted-soft">
                  {siteConfig.saSams.detail}
                </p>
              </div>
            ) : null}
            <div className="mt-6">
              <Button href="/integrations" variant="secondary">
                View integrations
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Grow with the institution"
              title="Optional modules and add-ons"
              description="Extend when your campus needs mobile apps, biometrics, visitor management or institution-specific modules."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {optionalModules.map((module) => (
                <article
                  key={module.title}
                  className="rounded-lg border border-border bg-background p-4"
                >
                  <h3 className="text-sm font-semibold text-ink">
                    {module.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-ink p-6 text-white">
              <h3 className="text-lg font-semibold">Need something specific?</h3>
              <p className="mt-2 text-sm text-white/65">
                SchoolHub can be extended and configured by{" "}
                {siteConfig.parentCompany.name}.
              </p>
              <div className="mt-5">
                <Button href="/contact" variant="invert" size="sm">
                  Talk to our team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
