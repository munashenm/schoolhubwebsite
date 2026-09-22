"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { mainNav, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function DesktopDropdown({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = item.href
    ? pathname === item.href || pathname.startsWith(`${item.href}/`)
    : item.children?.some(
        (c) =>
          !c.external &&
          (pathname === c.href || pathname.startsWith(`${c.href.split("#")[0]}/`)),
      );

  if (!item.children?.length) {
    return (
      <Link
        href={item.href || "/"}
        className={cn(
          "rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors",
          active
            ? "bg-brand-soft text-brand-strong"
            : "text-ink-soft hover:bg-black/[0.03] hover:text-ink",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href || item.children[0].href}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors",
          active
            ? "bg-brand-soft text-brand-strong"
            : "text-ink-soft hover:bg-black/[0.03] hover:text-ink",
        )}
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-[240px] rounded-xl border border-border bg-surface p-2 shadow-lg">
          {item.children.map((child) =>
            child.external ? (
              <a
                key={child.href + child.label}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-black/[0.03] hover:text-ink"
              >
                {child.label}
              </a>
            ) : (
              <Link
                key={child.href + child.label}
                href={child.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-black/[0.03] hover:text-ink"
              >
                <span className="font-medium text-ink">{child.label}</span>
                {child.description ? (
                  <span className="mt-0.5 block text-xs text-muted">
                    {child.description}
                  </span>
                ) : null}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-border bg-surface/95 backdrop-blur-md"
          : "border-transparent bg-surface/80 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <BrandLogo priority />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            href={siteConfig.cta.login.href}
            variant="ghost"
            size="sm"
            external
          >
            {siteConfig.cta.login.label}
          </Button>
          <Button href={siteConfig.cta.primary.href} size="sm">
            {siteConfig.cta.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-surface xl:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-4">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <div key={item.label}>
                {item.children?.length ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-ink"
                      onClick={() =>
                        setExpanded((v) => (v === item.label ? null : item.label))
                      }
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition",
                          expanded === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {expanded === item.label ? (
                      <div className="mb-2 ml-2 space-y-1 border-l border-border pl-3">
                        {item.children.map((child) =>
                          child.external ? (
                            <a
                              key={child.href + child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-md px-2 py-2 text-sm text-muted hover:text-ink"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="block rounded-md px-2 py-2 text-sm text-muted hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          ),
                        )}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink-soft hover:text-ink"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <Button href={siteConfig.cta.login.href} variant="secondary" external>
              {siteConfig.cta.login.label}
            </Button>
            <Button href={siteConfig.cta.primary.href}>
              {siteConfig.cta.primary.label}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
