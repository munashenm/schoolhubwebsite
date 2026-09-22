"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge, Container, Section, SectionHeading } from "@/components/ui/Section";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { homeProductAreas } from "@/lib/content";
import { screenshots } from "@/lib/screenshots";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-wash text-white">
      <div className="absolute inset-0 surface-grid opacity-[0.12]" aria-hidden />
      <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="max-w-3xl section-fade-up">
          <Badge tone="invert">{siteConfig.shortTerminology}</Badge>
          <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Run Your Entire Institution From One Platform
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
            Manage admissions, learners, academics, attendance, communication,
            finance, reporting and administration from one secure platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href={siteConfig.cta.primary.href}
              variant="invert"
              size="lg"
              className="min-w-[11.5rem] px-7 text-base shadow-lg shadow-black/20"
            >
              {siteConfig.cta.primary.label}
            </Button>
            <Button
              href={siteConfig.cta.secondary.href}
              variant="outline"
              size="lg"
              className="border-white/35 text-white/90 hover:bg-white/10"
            >
              {siteConfig.cta.secondary.label}
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Designed for institutions everywhere. Suitable for schools,
            colleges, academies, training institutions and multi-campus
            organisations.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-wide text-white/50">
            <li>Schools &amp; colleges</li>
            <li>Multi-campus ready</li>
            <li>Role-based access</li>
            <li>SLA-backed support</li>
          </ul>
        </div>

        <div className="mt-12 lg:mt-14">
          <ProductScreenshot
            src={screenshots.dashboard.src}
            title={screenshots.dashboard.title}
            description={screenshots.dashboard.description}
            alt={screenshots.dashboard.alt}
            aspect="wide"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

export function ProductAreasSection() {
  const [active, setActive] = useState<string>(homeProductAreas[0].id);
  const current =
    homeProductAreas.find((area) => area.id === active) ?? homeProductAreas[0];

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="Everything your institution needs to run better"
          description="Eight major product areas — not a wall of identical cards. Explore what each area covers, then dig into full feature detail."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="grid gap-2 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {homeProductAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => setActive(area.id)}
                className={cn(
                  "rounded-xl border px-4 py-3.5 text-left transition-colors",
                  active === area.id
                    ? "border-brand bg-brand-soft/50"
                    : "border-border bg-surface hover:border-border-strong",
                )}
              >
                <span className="text-xs font-semibold text-muted-soft">
                  {area.id}
                </span>
                <span className="mt-1 block text-sm font-semibold text-ink">
                  {area.title}
                </span>
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {current.title}
            </h3>
            <p className="mt-3 text-muted">{current.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {current.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={current.href}
              className="mt-8 inline-flex text-sm font-medium text-brand hover:underline"
            >
              Explore this area
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
