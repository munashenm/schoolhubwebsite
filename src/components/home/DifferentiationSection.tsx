import { Button } from "@/components/ui/Button";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { differentiators } from "@/lib/content";
import { siteConfig } from "@/lib/config";

const featured = differentiators.slice(0, 3);
const rest = differentiators.slice(3);

export function DifferentiationSection() {
  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Why institutions choose SchoolHub"
          title="Built for schools and colleges — with room to grow"
          description="One platform for academic operations and institutional administration: online applications, portals, granular permissions, custom modules and SLA-backed support from Cyber Developers — with finance and multi-campus on the roadmap."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item}
              className="border-l-2 border-brand bg-background px-5 py-5"
            >
              <p className="text-base font-semibold leading-snug text-ink">
                {item}
              </p>
            </article>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href={siteConfig.cta.primary.href}>
            {siteConfig.cta.primary.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
