import Link from "next/link";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { platformModules } from "@/lib/content";

const featured = platformModules.slice(0, 8);
const remaining = platformModules.slice(8);

export function CoreModules() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Platform capabilities"
          title="Everything your institution needs — connected"
          description="SchoolHub brings administration, academics, communication and learner services into one School & College Management Platform. Not a narrow LMS — a full institutional system."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {featured.map((module, index) => (
              <article
                key={module.title}
                className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
              >
                <p className="text-xs font-medium text-muted-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold text-ink">
                  {module.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {module.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="rounded-xl border border-border bg-ink p-6 text-white lg:col-span-5 lg:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Built to work as one system
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Admissions feed learner records. Attendance informs reporting.
              Assessments flow into results and report cards. Portals keep
              students, parents and staff looking at the same institutional
              truth.
            </p>
            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
              {remaining.map((module) => (
                <li
                  key={module.title}
                  className="flex items-start gap-2 text-sm text-white/80"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-300" />
                  {module.title}
                </li>
              ))}
            </ul>
            <Link
              href="/features"
              className="mt-8 inline-flex text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              View all features
            </Link>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
