import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";

const configurable = [
  "Academic years",
  "Grades",
  "Classes",
  "Terms",
  "Semesters",
  "Subjects",
  "Assessment structures",
  "Reporting formats",
  "User roles",
];

export function InternationalSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Multi-country capability"
            title="Built for more than one education system"
            description="SchoolHub can be configured for institutions with different academic calendars, grade structures, assessment models and reporting needs — across Africa and for European and international private schools and colleges."
          />
          <div>
            <p className="text-sm leading-relaxed text-muted">
              We do not claim that every national education regulation is already
              fully integrated. We do build a configurable platform that
              institutions in different countries can adapt to their operating
              model.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {configurable.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ...siteConfig.markets.primary,
                "Wider Africa",
                "Europe",
                "International",
              ].map((market) => (
                <div
                  key={market}
                  className="rounded-lg border border-border bg-surface px-3 py-3 text-sm font-medium text-ink"
                >
                  {market}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
