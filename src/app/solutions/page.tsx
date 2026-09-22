import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Solutions",
  defaultDescriptions.solutions,
  "/solutions",
);

const solutions = [
  {
    href: "/solutions/schools",
    title: "Schools",
    items: [
      "Primary schools",
      "Secondary schools",
      "High schools",
      "Private schools",
      "Independent schools",
    ],
  },
  {
    href: "/solutions/colleges",
    title: "Colleges",
    items: [
      "Private colleges",
      "TVET-style institutions",
      "Higher education / vocational institutions",
      "Training providers",
    ],
  },
  {
    href: "/solutions/training-institutions",
    title: "Training institutions",
    items: [
      "Academies",
      "Skills centres",
      "Professional training organisations",
    ],
  },
  {
    href: "/solutions/multi-campus",
    title: "Multi-campus organisations",
    items: [
      "School groups",
      "College groups",
      "Multi-site training organisations",
      "Campus-scoped administration",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />
      <PageHero
        eyebrow="Solutions"
        title="Configured for how your institution operates"
        description="SchoolHub serves schools, colleges, training institutions and multi-campus organisations — with terminology that fits schools and colleges without forcing one model on the other."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="rounded-xl border border-border bg-surface p-7 transition-colors hover:border-border-strong"
              >
                <h2 className="text-xl font-semibold text-ink">{solution.title}</h2>
                <ul className="mt-5 space-y-2">
                  {solution.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex text-sm font-medium text-brand">
                  View solution
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
