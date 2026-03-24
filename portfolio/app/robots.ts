import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";
import { isConfiguredUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = isConfiguredUrl(siteConfig.siteUrl)
    ? [`${siteConfig.siteUrl}/sitemap.xml`]
    : undefined;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
