import Link from "next/link";
import { locales, type Locale } from "@/data/portfolio";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400 md:block">
        {label}
      </span>
      <div className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] p-1">
        {locales.map((locale) => {
          const isActive = locale === currentLocale;
          const href = `/${locale}`;

          return (
            <Link
              key={locale}
              href={href}
              className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                isActive
                  ? "bg-sky-300 text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {locale}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
