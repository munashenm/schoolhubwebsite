import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
  title: "Page not found | SchoolHub SA",
  description: "That address is not a page on the SchoolHub SA website.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main
          id="main-content"
          className="flex flex-1 items-center justify-center px-6 py-24"
        >
          <div className="text-center">
            <p className="font-display text-5xl font-semibold text-ink">404</p>
            <h1 className="mt-4 text-xl font-semibold text-ink">
              This page could not be found
            </h1>
            <p className="mt-3 max-w-md text-sm text-muted">
              The address may be mistyped, or the page may have moved.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-brand px-5 text-sm font-medium text-white hover:bg-brand-strong"
            >
              Back to the homepage
            </Link>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
