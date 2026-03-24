import type { MouseEventHandler, ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary:
    "border border-sky-300/20 bg-[linear-gradient(135deg,rgba(125,211,252,0.98),rgba(56,189,248,0.82))] text-slate-950 shadow-[0_18px_45px_rgba(14,165,233,0.22)] hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(14,165,233,0.28)]",
  secondary:
    "border border-white/[0.14] bg-white/[0.06] text-slate-100 hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/10",
  ghost:
    "border border-transparent bg-transparent text-sky-200 hover:-translate-y-0.5 hover:text-white",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  disabled = false,
  onClick,
}: LinkButtonProps) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-semibold tracking-[0.02em] text-slate-500 ${className}`}
      >
        {children}
      </span>
    );
  }

  const targetProps = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 ease-out ${variantClasses[variant]} ${className}`}
      {...targetProps}
    >
      {children}
    </a>
  );
}
