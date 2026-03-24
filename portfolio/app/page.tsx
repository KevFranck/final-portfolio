import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio-page";
import { defaultLocale, getPortfolioContent } from "@/data/portfolio";

const defaultContent = getPortfolioContent(defaultLocale);

export const metadata: Metadata = {
  title: defaultContent.metadata.title,
  description: defaultContent.metadata.description,
};

export default function Home() {
  return <PortfolioPage locale={defaultLocale} />;
}
