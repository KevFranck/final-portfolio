import type { MetadataRoute } from "next";
import { locales, siteConfig } from "@/data/portfolio";
import { isConfiguredUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;

  if (!isConfiguredUrl(siteUrl)) {
    return [];
  }

  const configuredSiteUrl = siteUrl!;

  return [
    {
      url: configuredSiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: `${configuredSiteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === siteConfig.defaultLocale ? 0.95 : 0.9,
    })),
  ];
}
