import { Container, Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";

export function TrustMarkets() {
  return (
    <Section tone="surface" className="!py-10 sm:!py-12">
      <Container>
        <p className="text-center text-sm font-medium text-muted">
          Designed for institutions across Africa and beyond.
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
          {siteConfig.markets.display.map((market) => (
            <li
              key={market}
              className="text-sm font-semibold tracking-wide text-ink-soft"
            >
              {market}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-muted-soft">
          {siteConfig.positioning} Built in Africa. Relevant internationally.
        </p>
      </Container>
    </Section>
  );
}
