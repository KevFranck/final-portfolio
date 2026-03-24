import type { Metadata } from "next";
import { DocumentLanguage } from "@/components/document-language";
import {
  contactLinks,
  getPortfolioContent,
  isLocale,
  locales,
  profile,
  siteConfig,
  type Locale,
} from "@/data/portfolio";
import { isConfiguredUrl } from "@/lib/site";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getPortfolioContent(locale);
  const metadataBase = isConfiguredUrl(siteConfig.siteUrl)
    ? new URL(siteConfig.siteUrl as string)
    : undefined;
  const languages = isConfiguredUrl(siteConfig.siteUrl)
    ? Object.fromEntries(
        locales.map((value) => [value, `${siteConfig.siteUrl}/${value}`]),
      )
    : undefined;
  const sameAs = [contactLinks.linkedin, contactLinks.github, contactLinks.website].filter(
    isConfiguredUrl,
  );

  return {
    metadataBase,
    title: content.metadata.title,
    description: content.metadata.description,
    applicationName: "Kevin Owona Portfolio",
    authors: [{ name: profile.name }],
    creator: profile.name,
    publisher: profile.name,
    category: "technology",
    keywords: [
      "Kevin Owona",
      "Web Developer",
      "React Developer",
      "Python Developer",
      "Django Developer",
      "FastAPI Developer",
      "Cloud Engineer",
      "DevOps",
      "Automation Engineer",
      locale === "fr" ? "portfolio bilingue" : "bilingual portfolio",
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: metadataBase ? `/${locale}` : undefined,
      languages,
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      type: "website",
      locale: content.metadata.locale,
      siteName: "Kevin Owona Portfolio",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
      images: ["/twitter-image"],
    },
    other: sameAs.length ? { sameAs: sameAs.join(",") } : undefined,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale}>
      <DocumentLanguage locale={locale as Locale} />
      {children}
    </div>
  );
}
