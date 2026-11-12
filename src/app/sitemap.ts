import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/solutions") ? 0.8 : 0.7,
  }));
}
