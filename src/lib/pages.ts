import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const sitemapRoutes = [
  "/",
  "/platform",
  "/features",
  "/solutions",
  "/solutions/schools",
  "/solutions/colleges",
  "/solutions/training-institutions",
  "/integrations",
  "/pricing",
  "/security",
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
  platform: `Explore the ${siteConfig.name} school and college management platform — learner management, academics, attendance, admissions, portals and administration.`,
  features: `SchoolHub features for schools and colleges: student management, online applications, academics, attendance, assignments, assessments, reporting and role-based access control.`,
  solutions: `SchoolHub solutions for schools, colleges and training institutions across Africa and internationally.`,
  schools: `School management software for primary, secondary, high, private and independent schools.`,
  colleges: `College management system for private colleges, TVET-style institutions and vocational providers.`,
  training: `Learner management for academies, skills centres and professional training organisations.`,
  integrations: `SchoolHub integrations, SA-SAMS-related workflows for South African institutions, and optional communication add-ons.`,
  pricing: `SchoolHub pricing for schools and colleges. Contact us for institution and volume pricing.`,
  security: `Security practices for SchoolHub: authentication, granular role-based access control, cloud deployment and POPIA/GDPR-conscious configuration.`,
  about: `About SchoolHub SA — a school and college management platform developed by Cyber Developers.`,
  demo: `Request a SchoolHub demo for your school, college or training institution.`,
  contact: `Contact SchoolHub SA and Cyber Developers for sales, demos, technical and partnership enquiries.`,
  resources: `Resources for evaluating SchoolHub as a school management system and college management platform.`,
  privacy: `Privacy policy for the SchoolHub SA marketing website.`,
  terms: `Terms of use for the SchoolHub SA marketing website.`,
};
