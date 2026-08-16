import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl!),
  title: "Kevin Owona | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer based in Ottawa specializing in React, Django, FastAPI, Python and PostgreSQL, with experience building production web applications and API-driven automation.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", rel: "shortcut icon", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
