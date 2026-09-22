import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const sitemapRoutes = [
  "/",
  "/platform",
  "/features",
  "/modules",
  "/solutions",
  "/solutions/schools",
  "/solutions/colleges",
  "/solutions/training-institutions",
  "/solutions/multi-campus",
  "/integrations",
  "/pricing",
  "/security",
  "/support",
  "/about",
  "/demo",
  "/contact",
  "/resources",
  "/privacy",
  "/terms",
] as const;

export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return createMetadata({ title, description, path });
}

export const defaultDescriptions = {
  platform: `Explore the ${siteConfig.name} school, college and education management platform — admissions, academics, attendance, portals, finance roadmap and administration.`,
  features: `SchoolHub features: student management, academics, attendance, communication, finance, HR & payroll, portals, reporting, security and integrations.`,
  modules: `SchoolHub modules for schools and colleges — core, business, operations, integrations and optional add-ons.`,
  solutions: `SchoolHub solutions for schools, colleges, training institutions and multi-campus organisations.`,
  schools: `School management software for primary, secondary, high, private and independent schools.`,
  colleges: `College management system for private colleges, TVET-style institutions and vocational providers.`,
  training: `Learner management for academies, skills centres and professional training organisations.`,
  multiCampus: `Multi-campus school and college management for organisations operating across multiple sites.`,
  integrations: `SchoolHub integrations including SMS, email and SA-SAMS integration roadmap for South African institutions.`,
  pricing: `SchoolHub pricing for schools and colleges. Contact us for institution and volume pricing.`,
  security: `Security practices for SchoolHub: authentication, granular RBAC, cloud deployment, backups and POPIA/GDPR-conscious configuration.`,
  support: `SchoolHub support and configurable SLAs with Cyber Developers.`,
  about: `About SchoolHub SA — a school, college and education management platform developed by Cyber Developers.`,
  demo: `Request a SchoolHub demo for your school, college or training institution.`,
  contact: `Contact SchoolHub SA and Cyber Developers for sales, demos, technical and partnership enquiries.`,
  resources: `Resources for evaluating SchoolHub as a school management system and college management platform.`,
  privacy: `Privacy policy for the SchoolHub SA marketing website.`,
  terms: `Terms of use for the SchoolHub SA marketing website.`,
};
