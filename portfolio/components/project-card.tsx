import { LinkButton } from "@/components/link-button";
import { Tag } from "@/components/tag";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  index: number;
  project: Project;
  projectPrefixLabel: string;
  businessLensLabel: string;
  coreStackLabel: string;
  whatStandsOutLabel: string;
  deliveryOutcomeLabel: string;
  signalLabel: string;
};

export function ProjectCard({
  index,
  project,
  projectPrefixLabel,
  businessLensLabel,
  coreStackLabel,
  whatStandsOutLabel,
  deliveryOutcomeLabel,
  signalLabel,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(15,23,42,0.52))] p-6 shadow-[0_18px_60px_rgba(2,6,23,0.24)] transition duration-300 hover:border-sky-300/20 sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.4),transparent)] opacity-70" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(290px,0.85fr)]">
        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-sky-300">
                {projectPrefixLabel} {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-medium text-slate-400">{project.eyebrow}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) =>
                link.href ? (
                  <LinkButton
                    key={link.label}
                    href={link.href}
                    variant="secondary"
                    external
                    className="min-h-11 px-4"
                  >
                    {link.label}
                  </LinkButton>
                ) : (
                  <span
                    key={link.label}
                    className="inline-flex min-h-11 items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {link.label}
                  </span>
                ),
              )}
            </div>
          </div>

          <h3 className="mt-6 max-w-3xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-[2rem]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">{project.summary}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/[0.08] bg-slate-950/[0.62] p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
                {businessLensLabel}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.problem}</p>
            </div>
            <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.04] p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
                {coreStackLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-[1.6rem] border border-white/[0.08] bg-slate-950/[0.72] p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
              {whatStandsOutLabel}
            </p>
            <span className="text-sm font-medium text-sky-200">{signalLabel}</span>
          </div>

          <ul className="mt-5 space-y-4">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2.5 h-2 w-2 rounded-full bg-sky-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[1.3rem] border border-white/[0.08] bg-white/[0.04] p-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
              {deliveryOutcomeLabel}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.outcome}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
