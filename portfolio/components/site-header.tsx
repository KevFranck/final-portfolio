"use client";

import { useEffect, type MouseEvent, useState } from "react";
import { LinkButton } from "@/components/link-button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { profile, type Locale, type NavItem } from "@/data/portfolio";

type SiteHeaderProps = {
  navigation: NavItem[];
  currentLocale: Locale;
  languageLabel: string;
  summary: string;
  contactLabel: string;
  mobileSectionNavLabel: string;
  showContactAction?: boolean;
};

export function SiteHeader({
  navigation,
  currentLocale,
  languageLabel,
  summary,
  contactLabel,
  mobileSectionNavLabel,
  showContactAction = true,
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    closeMenuOnDesktop();
    window.addEventListener("resize", closeMenuOnDesktop);

    return () => {
      window.removeEventListener("resize", closeMenuOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileSectionNavigation =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) {
        closeMobileMenu();
        return;
      }

      event.preventDefault();
      closeMobileMenu();

      window.setTimeout(() => {
        const target = document.querySelector<HTMLElement>(href);

        if (!target) {
          return;
        }

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        window.location.hash = href;
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }, 220);
    };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/[0.72] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/20 bg-sky-400/[0.08] text-xs font-semibold tracking-[0.16em] text-sky-100">
            KO
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {profile.name}
            </span>
            <span className="hidden text-xs text-slate-400 sm:block">
              {summary}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher currentLocale={currentLocale} label={languageLabel} />
          </div>
          {showContactAction ? (
            <LinkButton
              href="#contact"
              variant="secondary"
              className="hidden min-h-11 px-4 sm:px-5 lg:inline-flex"
            >
              {contactLabel}
            </LinkButton>
          ) : null}
          <button
            type="button"
            aria-label={mobileSectionNavLabel}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="relative z-[60] inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-slate-200 transition hover:border-sky-300/20 hover:text-white lg:hidden"
          >
            <span className="sr-only">{mobileSectionNavLabel}</span>
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-x-4 top-[4.9rem] z-50 origin-top rounded-[1.8rem] border border-white/[0.08] bg-slate-950/[0.96] p-4 shadow-[0_28px_90px_rgba(2,6,23,0.45)] backdrop-blur-xl transition duration-300 ease-out lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          <nav aria-label={mobileSectionNavLabel} className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileSectionNavigation(item.href)}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-300/20 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-3">
            <LanguageSwitcher currentLocale={currentLocale} label={languageLabel} />
            {showContactAction ? (
              <LinkButton
                href="#contact"
                variant="secondary"
                className="min-h-11 px-4"
                onClick={handleMobileSectionNavigation("#contact")}
              >
                {contactLabel}
              </LinkButton>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
