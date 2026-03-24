import { BackToTopButton } from "@/components/back-to-top-button";
import { LinkButton } from "@/components/link-button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { Tag } from "@/components/tag";
import {
  contactLinks,
  getPortfolioContent,
  profile,
  type Locale,
} from "@/data/portfolio";
import { isConfiguredEmail, isConfiguredUrl } from "@/lib/site";

type PortfolioPageProps = {
  locale: Locale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = getPortfolioContent(locale);
  const sameAs = [
    contactLinks.github,
    contactLinks.linkedin,
    contactLinks.website,
  ].filter(isConfiguredUrl);
  const hasEmail = isConfiguredEmail(contactLinks.email);
  const hasGitHub = isConfiguredUrl(contactLinks.github);
  const hasResume = isConfiguredUrl(contactLinks.resume);
  const hasPhone = Boolean(contactLinks.phone);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: content.hero.professionalLine,
    description: content.hero.summary,
    email: hasEmail ? contactLinks.email : undefined,
    telephone: hasPhone ? contactLinks.phoneDisplay : undefined,
    sameAs,
    knowsAbout: [
      "Web Development",
      "Cloud",
      "DevOps",
      "Automation",
      "Next.js",
      "React",
      "Python",
      "Terraform",
      "n8n",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sky-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        {content.ui.skipToContent}
      </a>

      <div className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_15%_20%,rgba(125,211,252,0.12),transparent_18%),linear-gradient(180deg,#06101c_0%,#07111b_36%,#030712_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-[28rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.05] blur-3xl" />

        <SiteHeader
          navigation={content.navigation}
          currentLocale={locale}
          languageLabel={content.ui.languageSwitcherLabel}
          summary={content.header.summary}
          contactLabel={content.header.contactLabel}
          mobileSectionNavLabel={content.ui.mobileSectionNavLabel}
        />

        <main id="content" className="mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-6 lg:px-8">
          <section
            id="top"
            className="relative grid min-h-[calc(100vh-80px)] items-start gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:gap-10 lg:py-28"
          >
            <div className="reveal-up max-w-3xl pt-4 lg:pt-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/[0.1] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-100">
                {content.hero.availability}
              </div>

              <h1 className="mt-8 max-w-4xl text-[2.9rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-[4.1rem] lg:text-[5.35rem]">
                {content.hero.headline}
              </h1>

              <p className="mt-6 text-lg font-medium leading-8 text-slate-100 sm:max-w-2xl sm:text-[1.35rem]">
                {profile.name} <span className="text-slate-400">•</span>{" "}
                {content.hero.professionalLine}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {content.hero.summary}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <LinkButton href="#projects" className="sm:min-w-[11rem]">
                  {content.hero.primaryCta}
                </LinkButton>
                <LinkButton href="#contact" variant="secondary" className="sm:min-w-[11rem]">
                  {content.hero.secondaryCta}
                </LinkButton>
                <LinkButton
                  href={hasResume ? contactLinks.resume : "#"}
                  variant="ghost"
                  disabled={!hasResume}
                >
                  {hasResume
                    ? content.hero.resumeAvailable
                    : content.hero.resumeUnavailable}
                </LinkButton>
              </div>

              <div className="mt-12 rounded-[1.7rem] border border-white/[0.08] bg-white/[0.04] p-5 sm:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-xl">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-sky-300">
                      {content.ui.recruiterQuickScan}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {content.hero.quickScanPitch}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {content.hero.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {content.hero.quickFacts.map((fact) => (
                    <article
                      key={fact.label}
                      className="rounded-2xl border border-white/[0.08] bg-slate-950/[0.55] px-4 py-4"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
                        {fact.label}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{fact.value}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {content.hero.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-2 text-[0.72rem] font-medium tracking-[0.03em] text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal-up delay-1 relative lg:pt-6">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(160deg,rgba(56,189,248,0.16),rgba(15,23,42,0.08)_52%,rgba(3,7,18,0.66))] blur-2xl" />
              <div className="premium-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-7">
                <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.45),transparent)]" />

                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-sm font-medium text-slate-300">
                      {content.ui.portfolioSnapshot}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {content.ui.technicalRange}
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    {content.ui.openToOpportunities}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {content.hero.pillars.map((pillar, index) => (
                    <article
                      key={pillar.title}
                      className="subtle-hover rounded-2xl border border-white/[0.08] bg-slate-950/[0.6] p-5 motion-safe:animate-[float-card_9s_ease-in-out_infinite]"
                      style={{ animationDelay: `${index * 0.9}s` }}
                    >
                      <p className="text-sm font-semibold text-white">{pillar.title}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {pillar.description}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-6 grid gap-4">
                  <article className="rounded-2xl border border-white/[0.08] bg-slate-950/[0.72] p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-300">
                      {content.ui.whereIFitBest}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {content.hero.fitSummary}
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {content.ui.currentFocus}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {content.hero.focusSummary}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="reveal-up border-t border-white/[0.08] py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] lg:items-start">
              <SectionHeading
                eyebrow={content.about.eyebrow}
                title={content.about.title}
                description={content.about.description}
              />

              <div className="grid gap-5">
                <article className="premium-panel rounded-[1.8rem] p-6">
                  <p className="text-lg leading-8 text-slate-200">
                    {content.about.panelText}
                  </p>
                </article>
                <div className="grid gap-5 sm:grid-cols-2">
                  <article className="rounded-[1.6rem] border border-white/[0.08] bg-slate-950/[0.7] p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-300">
                      {content.about.educationLabel}
                    </p>
                    <p className="mt-4 text-base font-semibold leading-7 text-white">
                      {profile.education}
                    </p>
                  </article>
                  <article className="rounded-[1.6rem] border border-white/[0.08] bg-slate-950/[0.7] p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-300">
                      {content.about.locationLabel}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{profile.location}</p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section id="expertise" className="reveal-up border-t border-white/[0.08] py-24 lg:py-32">
            <SectionHeading
              eyebrow={content.expertise.eyebrow}
              title={content.expertise.title}
              description={content.expertise.description}
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.expertise.categories.map((category) => (
                <article
                  key={category.title}
                  className="subtle-hover rounded-[1.7rem] border border-white/[0.08] bg-white/[0.045] p-6"
                >
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Tag key={item} tone="muted">
                        {item}
                      </Tag>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="reveal-up border-t border-white/[0.08] py-24 lg:py-32">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow={content.projects.eyebrow}
                title={content.projects.title}
                description={content.projects.description}
              />
              <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-sm leading-7 text-slate-300 lg:max-w-sm">
                {content.projects.note}
              </div>
            </div>

            <div className="mt-12 grid gap-7">
              {content.projects.items.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  index={index}
                  project={project}
                  projectPrefixLabel={content.ui.projectPrefix}
                  businessLensLabel={content.ui.businessLens}
                  coreStackLabel={content.ui.coreStack}
                  whatStandsOutLabel={content.ui.whatStandsOut}
                  deliveryOutcomeLabel={content.ui.deliveryOutcome}
                  signalLabel={content.ui.projectSignal}
                />
              ))}
            </div>
          </section>

          <section className="reveal-up py-6 lg:py-10">
            <div className="rounded-[2rem] border border-sky-300/15 bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(15,23,42,0.64))] p-7 sm:p-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-sky-300">
                  {content.hiringCta.eyebrow}
                </p>
                <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                  {content.hiringCta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">
                  {content.hiringCta.description}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
                <LinkButton href="#contact">{content.hiringCta.primaryCta}</LinkButton>
                <LinkButton href="#experience" variant="secondary">
                  {content.hiringCta.secondaryCta}
                </LinkButton>
              </div>
            </div>
          </section>

          <section id="experience" className="reveal-up border-t border-white/[0.08] py-24 lg:py-32">
            <SectionHeading
              eyebrow={content.experience.eyebrow}
              title={content.experience.title}
              description={content.experience.description}
            />
            <div className="mt-12 grid gap-5">
              {content.experience.items.map((item) => (
                <article
                  key={`${item.role}-${item.company}`}
                  className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.045] p-6 sm:p-7"
                >
                  <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                    <div className="lg:border-r lg:border-white/[0.08] lg:pr-6">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-300">
                        {item.period}
                      </p>
                      <p className="mt-4 text-base font-semibold text-white">{item.role}</p>
                      <p className="mt-2 text-sm text-slate-300">{item.company}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.location}</p>
                    </div>
                    <div>
                      <p className="text-sm leading-7 text-slate-300">{item.summary}</p>
                      <ul className="mt-5 grid gap-3 md:grid-cols-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="rounded-2xl border border-white/[0.08] bg-slate-950/[0.58] px-4 py-3 text-sm leading-6 text-slate-300"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="certifications" className="reveal-up border-t border-white/[0.08] py-24 lg:py-32">
            <SectionHeading
              eyebrow={content.certifications.eyebrow}
              title={content.certifications.title}
              description={content.certifications.description}
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {content.certifications.items.map((item) => (
                <article
                  key={item.name}
                  className="subtle-hover rounded-[1.7rem] border border-white/[0.08] bg-white/[0.045] p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-sky-300">
                      {item.status}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm font-medium text-sky-200 transition hover:text-white"
                      >
                        {content.ui.viewCredential}
                      </a>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-8 text-white">{item.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
                  {item.credentialId ? (
                    <div className="mt-6 rounded-[1.35rem] border border-white/[0.08] bg-slate-950/[0.68] p-4 text-sm text-slate-300">
                      <p>
                        {content.ui.credentialIdLabel}: {item.credentialId}
                      </p>
                      <p className="mt-2">
                        {content.ui.certificationNumberLabel}: {item.certificationNumber}
                      </p>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section id="github" className="reveal-up border-t border-white/[0.08] py-24 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow={content.github.eyebrow}
                  title={content.github.title}
                  description={content.github.description}
                />
                <div className="mt-12 grid gap-5">
                  {content.github.items.map((repo) => (
                    <article
                      key={repo.title}
                      className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.045] p-6 sm:p-7"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-sky-300">
                        {content.ui.repository}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {repo.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                        {repo.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {repo.tags.map((tag) => (
                          <Tag key={tag} tone="muted">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                      <div className="mt-8">
                        <LinkButton href={repo.href} variant="secondary" external>
                          {content.ui.viewRepository}
                        </LinkButton>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="rounded-[1.8rem] border border-dashed border-sky-300/20 bg-sky-400/[0.05] p-6 lg:sticky lg:top-24">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-sky-300">
                  {content.ui.expandableSection}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {content.github.expandableText}
                </p>
              </aside>
            </div>
          </section>

          <section id="contact" className="reveal-up border-y border-white/[0.08] py-24 lg:py-32">
            <div className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(15,23,42,0.74))] p-7 sm:p-9 lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-10">
              <div className="max-w-3xl">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-sky-300">
                  {content.contact.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                  {content.contact.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-200">
                  {content.contact.description}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {content.contact.detailCards.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl border border-white/[0.08] bg-slate-950/[0.55] px-4 py-4 text-sm leading-7 text-slate-300"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3 lg:mt-0">
                <a
                  href={`tel:${contactLinks.phone}`}
                  className="rounded-[1.35rem] border border-white/[0.08] bg-slate-950/[0.55] px-4 py-4 text-sm leading-6 text-slate-200 transition hover:border-sky-300/20"
                >
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sky-300">
                    {content.contact.phoneLabel}
                  </span>
                  <span className="mt-2 block">{contactLinks.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${contactLinks.email}`}
                  className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-200 transition hover:border-sky-300/20"
                >
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sky-300">
                    {content.contact.emailLabel}
                  </span>
                  <span className="mt-2 block break-all">{contactLinks.email}</span>
                </a>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-200 transition hover:border-sky-300/20"
                >
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sky-300">
                    {content.contact.linkedinLabel}
                  </span>
                  <span className="mt-2 block truncate">{content.contact.linkedinCta}</span>
                </a>
                {hasGitHub ? (
                  <a
                    href={contactLinks.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-200 transition hover:border-sky-300/20"
                  >
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sky-300">
                      {content.contact.githubLabel}
                    </span>
                    <span className="mt-2 block truncate">{content.contact.githubCta}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <div className="mt-6 text-sm leading-7 text-slate-400">
              {content.ui.placeholderNotice}
            </div>
          </section>
        </main>

        <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p>
              {profile.name} - {content.hero.professionalLine}
            </p>
            <p className="mt-1">{contactLinks.phoneDisplay} • {contactLinks.email}</p>
          </div>
          <p>{content.footer.builtWith}</p>
        </footer>

        <BackToTopButton label={content.ui.backToTop} />
      </div>
    </>
  );
}
