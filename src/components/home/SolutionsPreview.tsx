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
      "Primary, secondary, high, private and independent schools — grade, class, teacher and subject terminology.",
  },
  {
    href: "/solutions/colleges",
    title: "Colleges",
    description:
      "Private colleges, TVET-style and vocational providers — programme, module, lecturer and semester terminology.",
  },
  {
    href: "/solutions/training-institutions",
    title: "Training institutions",
    description:
      "Academies, skills centres and professional training organisations.",
  },
  {
    href: "/solutions/multi-campus",
    title: "Multi-campus organisations",
    description:
      "School and college groups operating across multiple sites with scoped campus access.",
  },
];

export function SolutionsPreview() {
  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Built for schools and colleges — not one or the other"
          description="The same platform adapts to different institution types and academic language."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
