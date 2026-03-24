type TagProps = {
  children: string;
  tone?: "default" | "muted";
};

export function Tag({ children, tone = "default" }: TagProps) {
  const toneClasses =
    tone === "muted"
      ? "border-white/10 bg-white/[0.04] text-slate-300"
      : "border-sky-400/20 bg-sky-400/[0.08] text-sky-100";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-medium tracking-[0.03em] ${toneClasses}`}
    >
      {children}
    </span>
  );
}
