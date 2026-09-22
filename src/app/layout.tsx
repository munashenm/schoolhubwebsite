import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/PagePrimitives";
import { siteConfig } from "@/lib/config";
import {
  createMetadata,
  organizationJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  keywords: [
    "school management system",
    "school management system South Africa",
    "school administration software",
    "learner management system",
    "student management system",
    "school fees management system",
    "school payroll software",
    "school attendance software",
    "school timetable software",
    "school communication system",
    "student portal software",
    "parent portal software",
    "college management system",
    "multi campus management system",
    "school finance management software",
    "SA-SAMS integration software",
    "African school management system",
  ],
  authors: [{ name: siteConfig.parentCompany.name, url: siteConfig.parentCompany.url }],
  creator: siteConfig.parentCompany.name,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={softwareApplicationJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
