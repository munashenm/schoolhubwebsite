import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { sitemapRoutes } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapRoutes.map((path) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/solutions") ? 0.8 : 0.7,
  }));
}
