import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/Forms";
import { JsonLd, PageHero } from "@/components/ui/PagePrimitives";
import { Container, Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";
import { contactEnquiryTypes } from "@/lib/navigation";
import { defaultDescriptions, pageMeta } from "@/lib/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Contact",
  defaultDescriptions.contact,
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to the SchoolHub team"
        description="Sales, demos, technical questions and partnerships — handled by the team behind SchoolHub at Cyber Developers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-lg font-semibold text-ink">Enquiry types</h2>
            <ul className="mt-4 space-y-2">
              {contactEnquiryTypes.map((type) => (
                <li key={type} className="text-sm text-muted">
                  {type}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 text-sm text-muted">
              <p>
                Sales:{" "}
                <a
                  className="font-medium text-brand hover:underline"
                  href={`mailto:${siteConfig.email.sales}`}
                >
                  {siteConfig.email.sales}
                </a>
              </p>
              <p>
                General:{" "}
                <a
                  className="font-medium text-brand hover:underline"
                  href={`mailto:${siteConfig.email.general}`}
                >
                  {siteConfig.email.general}
                </a>
              </p>
              <p>
                Developed by{" "}
                <a
                  href={siteConfig.parentCompany.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand hover:underline"
                >
                  {siteConfig.parentCompany.name}
                </a>
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
