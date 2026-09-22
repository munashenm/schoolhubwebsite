import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";

const solutions = [
  {
    href: "/solutions/schools",
    title: "Schools",
    description:
      "Primary, secondary, high, private and independent schools that need learner management, academics and parent visibility in one place.",
  },
  {
    href: "/solutions/colleges",
    title: "Colleges",
    description:
      "Private colleges, TVET-style institutions and vocational providers with more complex programmes and administrative workflows.",
  },
  {
    href: "/solutions/training-institutions",
    title: "Training institutions",
    description:
      "Academies, skills centres and professional training organisations that need structured learner and programme management.",
  },
];

export function SolutionsPreview() {
  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Built for schools and colleges — not one or the other"
          description="The same platform adapts to different institution types, academic structures and administrative models."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {solutions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-border-strong hover:bg-surface"
            >
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand-strong">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-medium text-brand">
                Explore solution
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/solutions" variant="secondary">
            View all solutions
          </Button>
        </div>
      </Container>
    </Section>
  );
}
