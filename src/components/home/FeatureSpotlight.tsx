import { Button } from "@/components/ui/Button";
import { FeatureList } from "@/components/ui/PagePrimitives";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

type FeatureSpotlightProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
  screenshot: {
    src: string;
    title: string;
    description: string;
    alt: string;
  };
  ctaHref?: string;
  ctaLabel?: string;
  tone?: "default" | "surface" | "soft";
  reverse?: boolean;
  note?: string;
  id?: string;
};

export function FeatureSpotlight({
  eyebrow,
  title,
  description,
  items,
  screenshot,
  ctaHref = siteConfig.cta.primary.href,
  ctaLabel = siteConfig.cta.primary.label,
  tone = "surface",
  reverse = false,
  note,
  id,
}: FeatureSpotlightProps) {
  return (
    <Section id={id} tone={tone}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            <div className="mt-8">
              <FeatureList items={items} />
            </div>
            {note ? (
              <p className="mt-5 text-xs leading-relaxed text-muted-soft">{note}</p>
            ) : null}
            <div className="mt-8">
              <Button href={ctaHref}>{ctaLabel}</Button>
            </div>
          </div>
          <ProductScreenshot
            src={screenshot.src}
            title={screenshot.title}
            description={screenshot.description}
            alt={screenshot.alt}
            aspect="auto"
            fit="cover"
          />
        </div>
      </Container>
    </Section>
  );
}
