"use client";

import { useEffect } from "react";
import type { Locale } from "@/data/portfolio";

type DocumentLanguageProps = {
  locale: Locale;
};

export function DocumentLanguage({ locale }: DocumentLanguageProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
