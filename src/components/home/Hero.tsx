import { Button } from "@/components/ui/Button";
import { Badge, Container } from "@/components/ui/Section";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-wash text-white">
      <div className="absolute inset-0 surface-grid opacity-[0.12]" aria-hidden />
      <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="max-w-3xl section-fade-up">
          <Badge tone="invert">{siteConfig.primaryTerminology}</Badge>
          <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Run Your Entire Institution From One Platform
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
            Manage learners, academics, attendance, applications, assessments,
            reporting, communication and administration with a modern platform
            built for schools and colleges.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.cta.primary.href} variant="invert" size="lg">
              {siteConfig.cta.primary.label}
            </Button>
            <Button
              href={siteConfig.cta.secondary.href}
              variant="outline"
              size="lg"
            >
              {siteConfig.cta.secondary.label}
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/55">
            For schools, colleges, academies and training institutions.
          </p>
        </div>

        <div className="mt-12 lg:mt-14">
          <ProductScreenshot
            title="SchoolHub operations overview"
            description="Administration, academics and learner services in one workspace."
            alt="SchoolHub SA platform dashboard placeholder awaiting product screenshot"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
