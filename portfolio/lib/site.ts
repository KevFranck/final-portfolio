const PLACEHOLDER_PATTERNS = ["your-", "example.com", "linkedin.com/in/your-linkedin"];

export function isPlaceholderValue(value?: string) {
  if (!value) {
    return true;
  }

  const normalized = value.trim().toLowerCase();

  if (!normalized || normalized === "#") {
    return true;
  }

  return PLACEHOLDER_PATTERNS.some((pattern) => normalized.includes(pattern));
}

export function isConfiguredUrl(value?: string) {
  if (isPlaceholderValue(value)) {
    return false;
  }

  try {
    const url = new URL(value as string);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function isConfiguredEmail(value?: string) {
  if (isPlaceholderValue(value)) {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value ?? "");
}
