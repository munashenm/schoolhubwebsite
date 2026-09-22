import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Resources",
  defaultDescriptions.resources,
  "/resources",
);

const resources = [
  {
    title: "Platform overview",
    href: "/platform",
    description: "How SchoolHub connects institutional operations.",
  },
  {
    title: "Feature guide",
    href: "/features",
    description: "Detailed capabilities across learners, academics and portals.",
  },
  {
    title: "Security overview",
    href: "/security",
    description: "Authentication, permissions and deployment posture.",
  },
  {
    title: "Request a demo",
    href: "/demo",
    description: "See the product with your institution type in mind.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="Evaluate SchoolHub with clear product information"
        description="Start with the platform and feature pages. Case studies and a blog can be added here later without changing the site architecture."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
              >
                <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
