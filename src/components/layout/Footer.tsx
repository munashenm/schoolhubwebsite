import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { footerNav } from "@/lib/navigation";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.external ? (
              <a
                href={link.href}
                className="text-sm text-white/65 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-lg bg-white/95 p-2 inline-flex">
              <BrandLogo href="/" className="h-14 sm:h-16" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.shortTerminology}. {siteConfig.positioning}
            </p>
            <p className="mt-5 text-sm text-white/55">
              {siteConfig.name} is developed and supported by{" "}
              <a
                href={siteConfig.parentCompany.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 underline-offset-2 hover:text-white hover:underline"
              >
                {siteConfig.parentCompany.name}
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <FooterColumn title="Platform" links={footerNav.platform} />
            <FooterColumn title="Solutions" links={footerNav.solutions} />
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Resources" links={footerNav.resources} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href={siteConfig.parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              {siteConfig.parentCompany.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
