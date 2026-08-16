export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type NavItem = {
  href: string;
  label: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type QuickFact = {
  label: string;
  value: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type ProjectLink = {
  label: string;
  href?: string;
};

export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  outcome: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Certification = {
  name: string;
  status: string;
  detail: string;
  href?: string;
  credentialId?: string;
  certificationNumber?: string;
};

export type TechnicalPractice = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export type SiteConfig = {
  siteUrl?: string;
  defaultLocale: Locale;
  locales: readonly Locale[];
};

export type PortfolioContent = {
  metadata: {
    title: string;
    description: string;
    locale: string;
  };
  ui: {
    skipToContent: string;
    languageSwitcherLabel: string;
    mobileSectionNavLabel: string;
    portfolioSnapshot: string;
    technicalRange: string;
    whereIFitBest: string;
    currentFocus: string;
    recruiterQuickScan: string;
    openToOpportunities: string;
    businessLens: string;
    coreStack: string;
    whatStandsOut: string;
    deliveryOutcome: string;
    projectSignal: string;
    projectPrefix: string;
    repository: string;
    viewRepository: string;
    expandableSection: string;
    placeholderNotice: string;
    viewCredential: string;
    credentialIdLabel: string;
    certificationNumberLabel: string;
    backToTop: string;
  };
  navigation: NavItem[];
  header: {
    summary: string;
    projectsLabel: string;
    contactLabel: string;
  };
  hero: {
    availability: string;
    headline: string;
    professionalLine: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    resumeAvailable: string;
    resumeUnavailable: string;
    quickScanPitch: string;
    quickFacts: QuickFact[];
    tags: string[];
    targetRoles: string[];
    pillars: Pillar[];
    fitSummary: string;
    focusSummary: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    panelText: string;
    educationLabel: string;
    locationLabel: string;
  };
  expertise: {
    eyebrow: string;
    title: string;
    description: string;
    categories: SkillCategory[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    items: Project[];
    otherTitle: string;
    otherDescription: string;
    otherItems: Project[];
  };
  hiringCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    description: string;
    items: Certification[];
  };
  github: {
    eyebrow: string;
    title: string;
    description: string;
    expandableText: string;
    items: TechnicalPractice[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    detailCards: string[];
    phoneLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    phoneCta: string;
    emailCta: string;
    linkedinCta: string;
    githubCta: string;
  };
  footer: {
    builtWith: string;
  };
};

export const siteConfig: SiteConfig = {
  defaultLocale,
  locales,
  siteUrl: "https://kevinowona.com",
};

export const profile = {
  name: "Kevin Owona",
  location: "Ottawa, Canada",
  education: "Master's degree in Telecommunications and Networking",
};

export const contactLinks = {
  phone: "+16133163657",
  phoneDisplay: "+1 613 316 3657",
  email: "kf.owona@gmail.com",
  linkedin: "https://www.linkedin.com/in/franc-kevin-owona-nguini-575526395",
  github: "https://github.com/KevFranck",
  resume: "",
  website: "",
};

const skillCategoriesEn: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Accessible, maintainable interfaces for real application workflows.",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    description: "Application logic, data flows, and APIs that support operational needs.",
    items: ["Python", "Django", "FastAPI", "REST APIs"],
  },
  {
    title: "Database",
    description: "Relational data modeling and application integration.",
    items: ["PostgreSQL"],
  },
  {
    title: "API & Automation",
    description: "Connecting applications and business workflows through reliable integrations.",
    items: ["n8n", "Webhooks", "OAuth2", "API Integration", "WhatsApp Integration"],
  },
  {
    title: "Tools & Deployment",
    description: "Tools used to ship, operate, and support web applications.",
    items: ["Git", "GitHub", "Postman", "Docker", "Linux", "Ubuntu Server", "Nginx", "AWS"],
  },
];

const skillCategoriesFr: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces accessibles et maintenables pour de vrais workflows applicatifs.",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    description: "Logique applicative, flux de donnees et APIs adaptes a des besoins reels.",
    items: ["Python", "Django", "FastAPI", "APIs REST"],
  },
  {
    title: "Base de donnees",
    description: "Modelisation de donnees relationnelles et integration applicative.",
    items: ["PostgreSQL"],
  },
  {
    title: "API & Automatisation",
    description: "Connexion d'applications et de processus metier par des integrations fiables.",
    items: ["n8n", "Webhooks", "OAuth2", "Integration API", "Integration WhatsApp"],
  },
  {
    title: "Outils & Deploiement",
    description: "Outils utilises pour livrer, exploiter et soutenir des applications web.",
    items: ["Git", "GitHub", "Postman", "Docker", "Linux", "Ubuntu Server", "Nginx", "AWS"],
  },
];

const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    metadata: {
      title: "Kevin Owona | Full-Stack Web Developer",
      description:
        "Full-Stack Web Developer based in Ottawa specializing in React, Django, FastAPI, Python and PostgreSQL, with experience building production web applications and API-driven automation.",
      locale: "en_CA",
    },
    ui: {
      skipToContent: "Skip to content",
      languageSwitcherLabel: "Language",
      mobileSectionNavLabel: "Section shortcuts",
      portfolioSnapshot: "Portfolio Snapshot",
      technicalRange: "Technical Range",
      whereIFitBest: "Where I fit best",
      currentFocus: "Current Focus",
      recruiterQuickScan: "Recruiter Quick Scan",
      openToOpportunities: "Open to Opportunities",
      businessLens: "Business / Problem Lens",
      coreStack: "Core Stack",
      whatStandsOut: "What Stands Out",
      deliveryOutcome: "Delivery Outcome",
      projectSignal: "Project Signal",
      projectPrefix: "Project",
      repository: "Repository",
      viewRepository: "View Repository",
      expandableSection: "Expandable Section",
      placeholderNotice:
        "Resume available on request. Add the deployed site URL in the portfolio data file when it is available.",
      viewCredential: "View credential",
      credentialIdLabel: "Credential ID",
      certificationNumberLabel: "Certification Number",
      backToTop: "Back to top",
    },
    navigation: [
      { href: "#about", label: "About" },
      { href: "#expertise", label: "Expertise" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#certifications", label: "Certifications" },
      { href: "#contact", label: "Contact" },
    ],
    header: {
      summary: "Full-Stack Web Developer",
      projectsLabel: "Projects",
      contactLabel: "Let's Talk",
    },
    hero: {
      availability: "Open to recruiter conversations and technical opportunities",
      headline: "Full-Stack Web Developer",
      professionalLine: "React • Django • FastAPI • Python • PostgreSQL",
      summary:
        "I design and build complete web applications, from the user interface to the backend and database, with particular attention to business needs, APIs, and deployment.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      resumeAvailable: "Download Resume",
      resumeUnavailable: "Resume on Request",
      quickScanPitch:
        "Web development first, with API integration, automation, and deployment experience that supports complete delivery.",
      quickFacts: [
        {
          label: "Positioning",
          value: "Full-Stack Web Developer",
        },
        {
          label: "Current Strength",
          value: "React, Django, FastAPI, Python, and PostgreSQL.",
        },
        {
          label: "Certified",
          value: "Microsoft Azure Fundamentals (AZ-900).",
        },
        {
          label: "Education",
          value: profile.education,
        },
      ],
      tags: [
        "React",
        "Django",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "API Integration • Automation • Deployment",
      ],
      targetRoles: [
        "Full-Stack Web Developer",
        "React Developer",
        "Python Developer",
      ],
      pillars: [
        {
          title: "Full-Stack Web Development",
          description:
            "Complete applications from responsive interfaces to backend logic and data.",
        },
        {
          title: "APIs & Backend",
          description:
            "Django, FastAPI, REST APIs, and PostgreSQL for reliable application foundations.",
        },
        {
          title: "Automation & Integration",
          description:
            "Webhooks, n8n, and external APIs that connect applications to operations.",
        },
        {
          title: "Deployment",
          description:
            "Practical tooling for deploying and operating web applications.",
        },
      ],
      fitSummary:
        "Teams building useful web applications that need thoughtful frontend, backend, database, and API work.",
      focusSummary:
        "Building practical web applications and integrations that solve operational needs.",
    },
    about: {
      eyebrow: "About",
      title: "Full-stack web development grounded in real operational needs.",
      description:
        "A Full-Stack Web Developer based in Ottawa, I build applications that solve real operational needs. My work primarily uses React, Django, FastAPI, Python, and PostgreSQL.",
      panelText:
        "My experience spans requirements analysis, backend design, REST APIs, databases, administrative interfaces, authentication, deployment, and external-service integration. I also use n8n, webhooks, and APIs to connect applications to automated business processes.",
      educationLabel: "Education",
      locationLabel: "Location",
    },
    expertise: {
      eyebrow: "Expertise",
      title: "A focused full-stack skill set, from interface to deployment.",
      description:
        "Web development is the core focus. API integration, automation, and deployment complement the applications I build.",
      categories: skillCategoriesEn,
    },
    projects: {
      eyebrow: "Selected Projects",
      title: "Recent projects built for real organizations and operational needs.",
      description:
        "A selection of full-stack web applications first, followed by an API-driven automation workflow.",
      note:
        "Private work is described with confirmed technologies and delivery context only.",
      items: [
        {
          title: "CESOC — Print Management System",
          eyebrow: "Full-Stack / Volunteer Developer • May 2026 – July 2026",
          summary:
            "Internal application developed to manage and control print usage at CESOC.",
          problem:
            "The organization needed a practical way to apply print quotas and business rules while giving administrators visibility and control.",
          outcome:
            "Deployed and currently used internally at CESOC.",
          stack: ["React", "FastAPI", "Python", "PostgreSQL"],
          highlights: [
            "React administration interface with FastAPI and Python backend services.",
            "Desktop application in Python, with quota management and business rules.",
            "Administrative and tracking features deployed in CESOC's internal environment.",
          ],
          links: [
            { label: "Private Project" },
          ],
        },
        {
          title: "Black Med Mentorship",
          eyebrow: "Full-Stack Web Developer • Two-developer team • 2026",
          summary:
            "Web platform supporting mentorship and community engagement in the medical field.",
          problem:
            "The platform needed reliable account, event, administrative, and data-management workflows.",
          outcome:
            "Contributed full-stack features as part of a two-developer team.",
          stack: ["React", "Django", "PostgreSQL"],
          highlights: [
            "Authentication, user accounts, and administrative dashboard contributions.",
            "Event management, React interfaces, backend functionality, and PostgreSQL data management.",
          ],
          links: [
            { label: "View Live Website", href: "https://blackmedmentorship.ca" },
          ],
        },
        {
          title: "Bravo Jeunesse — Mosaïque Interculturelle",
          eyebrow: "Sole Full-Stack Developer • February 2026 – April 2026",
          summary:
            "Web application that centralized participant, training, attendance, schedule, and program information management.",
          problem:
            "The Mosaïque Interculturelle program needed one place to organize participant and operational information.",
          outcome:
            "Delivered a centralized application and refined it through user feedback.",
          stack: ["React", "Django"],
          highlights: [
            "Participant, training/session, attendance, and schedule management.",
            "Administrative dashboard features and centralized program data.",
            "Built independently as the sole full-stack developer.",
          ],
          links: [{ label: "Private Project" }],
        },
        {
          title: "ZIM Shipment Tracking Automation",
          eyebrow: "API Integration & Automation",
          summary:
            "Automated workflow that returns shipment-tracking information through WhatsApp by connecting a conversational workflow to the ZIM API.",
          problem:
            "Tracking requests need consistent, timely responses without manual lookup for every message.",
          outcome:
            "WhatsApp → n8n workflow → ZIM API → processed shipment information → automated reply.",
          stack: ["n8n", "REST API", "OAuth2", "WhatsApp", "Webhooks", "Google Sheets"],
          highlights: [
            "ZIM API integration with OAuth2 authentication and shipment-data processing.",
            "Modular n8n workflows, error handling, and English/French automated responses.",
          ],
          links: [{ label: "Client Project" }],
        },
      ],
      otherTitle: "Other Projects",
      otherDescription: "Additional work that complements the primary full-stack portfolio.",
      otherItems: [
        {
          title: "Light Web Solutions Website + AI Assistant",
          eyebrow: "Live Project",
          summary: "Business website with a conversational assistant supporting lead qualification, communication, and scheduling.",
          problem: "Service businesses need faster first-contact handling and clearer lead capture.",
          outcome: "Combined web presentation with automation-supported engagement.",
          stack: ["Next.js", "AI Assistant", "Automation"],
          highlights: ["Conversational assistant integrated into the website experience."],
          links: [{ label: "View Live Website", href: "https://www.lightwebsolutions.ca" }],
        },
      ],
    },
    hiringCta: {
      eyebrow: "Current Fit",
      title:
        "Looking for someone who can bridge application delivery, API work, and automation-minded execution.",
      description:
        "I am especially aligned with junior-to-associate opportunities where versatility, clarity, and practical systems thinking matter.",
      primaryCta: "Start a Conversation",
      secondaryCta: "Review Experience",
    },
    experience: {
      eyebrow: "Experience",
      title: "Recent full-stack development experience.",
      description:
        "Technical roles most relevant to full-stack web development.",
      items: [
        {
          role: "Full-Stack Developer",
          company: "Bravo Jeunesse — Mosaïque Interculturelle",
          location: "Ottawa, Canada",
          period: "February 2026 – April 2026",
          summary:
            "Sole developer for a web application centralizing program participants, training sessions, attendance, schedules, and administrative data.",
          highlights: [
            "React and Django application delivery.",
            "Improved the application from user feedback.",
          ],
        },
        {
          role: "Volunteer Developer",
          company: "CESOC",
          location: "Ottawa, Canada",
          period: "May 2026 – July 2026",
          summary:
            "Developed an internal print-management system deployed for CESOC use.",
          highlights: [
            "React, FastAPI, Python, and PostgreSQL.",
            "Quota rules, administration, and usage tracking.",
          ],
        },
        {
          role: "Full-Stack Web Developer",
          company: "Black Med Mentorship",
          location: "Canada",
          period: "2026",
          summary:
            "Contributed to a web platform for medical mentorship and community engagement as part of a two-developer team.",
          highlights: [
            "React, Django, and PostgreSQL contributions.",
            "Accounts, administration, events, and backend features.",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Certification",
      description:
        "A verified cloud fundamentals credential that complements the web-development focus.",
      items: [
        {
          name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
          status: "Certified",
          detail: "Credential verified via Microsoft Learn.",
          href: "https://learn.microsoft.com/en-ca/users/kevinowona-0067/credentials/b70f9dede1be1a35",
          credentialId: "B70F9DEDE1BE1A35",
          certificationNumber: "EB51DB-Q4B342",
        },
      ],
    },
    github: {
      eyebrow: "GitHub & Labs",
      title:
        "Hands-on technical practice that reinforces infrastructure and cloud capability.",
      description:
        "This section is intentionally extensible, so future repositories and labs can be added without reworking the page structure.",
      expandableText:
        "Add future repositories here for backend APIs, deployment experiments, cloud labs, or automation prototypes without changing the overall design.",
      items: [
        {
          title: "Terraform AWS Learning Repository",
          description:
            "Ongoing infrastructure-as-code practice covering AWS concepts, provisioning workflows, and hands-on cloud learning.",
          href: "https://github.com/KevFranck/terraform_aws_learning",
          tags: ["Terraform", "AWS", "Infrastructure as Code", "Labs"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Build Something Useful",
      description:
        "If you are hiring a Full-Stack Web Developer to build useful applications, APIs, and integrations, I would be glad to connect.",
      detailCards: [
        "Full-stack web development: interface, backend, database, and deployment.",
        "API integration and automation experience for operational workflows.",
      ],
      phoneLabel: "Phone",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      phoneCta: "Call",
      emailCta: "Email Me",
      linkedinCta: "LinkedIn",
      githubCta: "GitHub",
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript, and a reusable App Router structure.",
    },
  },
  fr: {
    metadata: {
      title: "Kevin Owona | Developpeur Web Full-Stack",
      description:
        "Developpeur Web Full-Stack base a Ottawa, specialise en React, Django, FastAPI, Python et PostgreSQL, avec une experience d'applications web en production et d'automatisation pilotee par API.",
      locale: "fr_CA",
    },
    ui: {
      skipToContent: "Aller au contenu",
      languageSwitcherLabel: "Langue",
      mobileSectionNavLabel: "Raccourcis de sections",
      portfolioSnapshot: "Vue d'ensemble",
      technicalRange: "Champ technique",
      whereIFitBest: "Ou je peux apporter le plus",
      currentFocus: "Focus actuel",
      recruiterQuickScan: "Lecture rapide recruteur",
      openToOpportunities: "Ouvert aux opportunites",
      businessLens: "Probleme / besoin metier",
      coreStack: "Stack principale",
      whatStandsOut: "Points marquants",
      deliveryOutcome: "Resultat obtenu",
      projectSignal: "Signal projet",
      projectPrefix: "Projet",
      repository: "Depot",
      viewRepository: "Voir le depot",
      expandableSection: "Section extensible",
      placeholderNotice:
        "CV disponible sur demande. Ajoutez l'URL du site deploye dans le fichier de donnees lorsqu'elle sera disponible.",
      viewCredential: "Voir le certificat",
      credentialIdLabel: "ID du certificat",
      certificationNumberLabel: "Numero de certification",
      backToTop: "Retour en haut",
    },
    navigation: [
      { href: "#about", label: "A propos" },
      { href: "#expertise", label: "Expertise" },
      { href: "#projects", label: "Projets" },
      { href: "#experience", label: "Experience" },
      { href: "#certifications", label: "Certifications" },
      { href: "#contact", label: "Contact" },
    ],
    header: {
      summary: "Developpeur Web Full-Stack",
      projectsLabel: "Projets",
      contactLabel: "Echanger",
    },
    hero: {
      availability: "Ouvert aux echanges avec recruteurs et opportunites techniques",
      headline: "Developpeur Web Full-Stack",
      professionalLine: "React • Django • FastAPI • Python • PostgreSQL",
      summary:
        "Je conçois et developpe des applications web completes, de l'interface utilisateur au backend et a la base de donnees, avec une attention particuliere aux besoins metier, aux APIs et au deploiement.",
      primaryCta: "Voir les projets",
      secondaryCta: "Me contacter",
      resumeAvailable: "Telecharger le CV",
      resumeUnavailable: "CV disponible sur demande",
      quickScanPitch:
        "Le developpement web est mon axe principal, complete par l'integration d'API, l'automatisation et le deploiement.",
      quickFacts: [
        {
          label: "Positionnement",
          value: "Developpeur Web Full-Stack",
        },
        {
          label: "Force actuelle",
          value: "React, Django, FastAPI, Python et PostgreSQL.",
        },
        {
          label: "Certification",
          value: "Microsoft Azure Fundamentals (AZ-900).",
        },
        {
          label: "Formation",
          value: profile.education,
        },
      ],
      tags: [
        "React",
        "Django",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Integration API • Automatisation • Deploiement",
      ],
      targetRoles: [
        "Developpeur Web Full-Stack",
        "Developpeur React",
        "Developpeur Python",
      ],
      pillars: [
        {
          title: "Developpement Web Full-Stack",
          description:
            "Applications completes, de l'interface responsive a la logique backend et aux donnees.",
        },
        {
          title: "APIs & Backend",
          description:
            "Django, FastAPI, APIs REST et PostgreSQL pour des fondations applicatives fiables.",
        },
        {
          title: "Automatisation & Integration",
          description:
            "Webhooks, n8n et APIs externes pour relier les applications aux operations.",
        },
        {
          title: "Deploiement",
          description:
            "Outils pratiques pour deployer et exploiter des applications web.",
        },
      ],
      fitSummary:
        "Equipes qui construisent des applications web utiles et ont besoin de frontend, backend, base de donnees et APIs.",
      focusSummary:
        "Construire des applications web et integrations pratiques qui repondent a des besoins operationnels.",
    },
    about: {
      eyebrow: "A propos",
      title: "Le developpement web full-stack au service de besoins operationnels reels.",
      description:
        "Developpeur Web Full-Stack base a Ottawa, je conçois des applications pour resoudre des besoins operationnels reels, principalement avec React, Django, FastAPI, Python et PostgreSQL.",
      panelText:
        "Mon experience couvre l'analyse des besoins, le backend, les APIs REST, les bases de donnees, les interfaces administratives, l'authentification, le deploiement et l'integration de services externes. n8n, les webhooks et les APIs me permettent aussi de connecter les applications aux processus metier automatises.",
      educationLabel: "Formation",
      locationLabel: "Localisation",
    },
    expertise: {
      eyebrow: "Expertise",
      title: "Des competences full-stack ciblees, de l'interface au deploiement.",
      description:
        "Le developpement web est le coeur du profil. L'integration API, l'automatisation et le deploiement completent les applications realisees.",
      categories: skillCategoriesFr,
    },
    projects: {
      eyebrow: "Projets selectionnes",
      title: "Des realisations recentes pour des organisations et besoins operationnels reels.",
      description:
        "Trois applications web full-stack, suivies d'un workflow d'automatisation pilote par API.",
      note:
        "Les projets prives sont decrits uniquement avec des technologies et un contexte de livraison confirmes.",
      items: [
        {
          title: "CESOC — Systeme de gestion des impressions",
          eyebrow: "Developpeur Full-Stack benevole • Mai 2026 – Juillet 2026",
          summary:
            "Application interne developpee pour gerer et controler l'utilisation des impressions au CESOC.",
          problem:
            "Le CESOC avait besoin d'appliquer des quotas et regles metier tout en donnant aux administrateurs de la visibilite et du controle.",
          outcome:
            "Deployee et actuellement utilisee en interne au CESOC.",
          stack: ["React", "FastAPI", "Python", "PostgreSQL"],
          highlights: [
            "Interface d'administration React avec services backend FastAPI et Python.",
            "Application desktop Python, gestion des quotas et regles metier.",
            "Fonctions administratives et de suivi dans l'environnement interne du CESOC.",
          ],
          links: [{ label: "Projet prive" }],
        },
        {
          title: "Black Med Mentorship",
          eyebrow: "Developpeur Web Full-Stack • Equipe de deux developpeurs • 2026",
          summary:
            "Plateforme web destinee a faciliter le mentorat et l'engagement communautaire dans le domaine medical.",
          problem:
            "La plateforme avait besoin de workflows fiables de comptes, evenements, administration et gestion des donnees.",
          outcome:
            "Contribution a des fonctionnalites full-stack au sein d'une equipe de deux developpeurs.",
          stack: ["React", "Django", "PostgreSQL"],
          highlights: [
            "Authentification, comptes utilisateurs et tableau de bord administrateur.",
            "Gestion des evenements, interfaces React, backend et donnees PostgreSQL.",
          ],
          links: [{ label: "Voir le site", href: "https://blackmedmentorship.ca" }],
        },
        {
          title: "Bravo Jeunesse — Mosaique Interculturelle",
          eyebrow: "Unique developpeur Full-Stack • Fevrier 2026 – Avril 2026",
          summary:
            "Application web centralisant la gestion des participants, formations, presences, horaires et informations du programme.",
          problem:
            "Le programme Mosaique Interculturelle avait besoin d'un espace unique pour organiser ses informations operationnelles.",
          outcome:
            "Application centralisee livree puis amelioree a partir des retours utilisateurs.",
          stack: ["React", "Django"],
          highlights: [
            "Gestion des participants, formations/sessions, presences et horaires.",
            "Tableau de bord administratif et centralisation des donnees du programme.",
            "Application construite de bout en bout par un unique developpeur.",
          ],
          links: [{ label: "Projet prive" }],
        },
        {
          title: "Automatisation du suivi d'expeditions ZIM",
          eyebrow: "Integration API & Automatisation",
          summary: "Workflow automatise qui fournit des informations de suivi via WhatsApp en se connectant a l'API de ZIM.",
          problem: "Les demandes de suivi necessitent des reponses coherentes et rapides sans recherche manuelle pour chaque message.",
          outcome: "WhatsApp → workflow n8n → API ZIM → traitement des informations → reponse automatisee.",
          stack: ["n8n", "API REST", "OAuth2", "WhatsApp", "Webhooks", "Google Sheets"],
          highlights: [
            "Integration de l'API ZIM avec OAuth2 et traitement des informations d'expedition.",
            "Workflows n8n modulaires, gestion des erreurs et reponses automatisees en francais et anglais.",
          ],
          links: [{ label: "Projet client" }],
        },
      ],
      otherTitle: "Autres projets",
      otherDescription: "Des realisations complementaires au portfolio web full-stack principal.",
      otherItems: [
        {
          title: "Site Light Web Solutions + assistant IA",
          eyebrow: "Projet en ligne",
          summary: "Site business avec assistant conversationnel pour la qualification, la communication et la planification.",
          problem: "Les entreprises de services ont besoin de mieux gerer les premiers contacts.",
          outcome: "Presentation web associee a une automatisation de l'engagement.",
          stack: ["Next.js", "Assistant IA", "Automatisation"],
          highlights: ["Assistant conversationnel integre au parcours web."],
          links: [{ label: "Voir le site", href: "https://www.lightwebsolutions.ca" }],
        },
      ],
    },
    hiringCta: {
      eyebrow: "Positionnement actuel",
      title:
        "A l'aise sur les environnements ou il faut relier delivery applicatif, APIs et execution orientee automatisation.",
      description:
        "Je cible particulierement les opportunites junior a intermediaires ou la polyvalence, la clarte et la logique systeme ont de la valeur.",
      primaryCta: "Demarrer un echange",
      secondaryCta: "Voir l'experience",
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience recente en developpement full-stack.",
      description:
        "Les roles techniques les plus pertinents pour le developpement web full-stack.",
      items: [
        {
          role: "Developpeur Full-Stack",
          company: "Bravo Jeunesse — Mosaique Interculturelle",
          location: "Ottawa, Canada",
          period: "Fevrier 2026 – Avril 2026",
          summary:
            "Unique developpeur d'une application web centralisant participants, formations, presences, horaires et donnees administratives.",
          highlights: [
            "Livraison d'une application React et Django.",
            "Ameliorations apportees a partir des retours utilisateurs.",
          ],
        },
        {
          role: "Developpeur benevole",
          company: "CESOC",
          location: "Ottawa, Canada",
          period: "Mai 2026 – Juillet 2026",
          summary:
            "Developpement d'un systeme interne de gestion des impressions deploye au CESOC.",
          highlights: [
            "React, FastAPI, Python et PostgreSQL.",
            "Regles de quotas, administration et suivi d'utilisation.",
          ],
        },
        {
          role: "Developpeur Web Full-Stack",
          company: "Black Med Mentorship",
          location: "Canada",
          period: "2026",
          summary:
            "Contribution a une plateforme de mentorat medical et d'engagement communautaire au sein d'une equipe de deux developpeurs.",
          highlights: [
            "Contributions React, Django et PostgreSQL.",
            "Comptes, administration, evenements et fonctionnalites backend.",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Certification",
      description:
        "Une certification cloud fondamentale verifiee qui complete le positionnement web.",
      items: [
        {
          name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
          status: "Certifie",
          detail: "Certification verifiee via Microsoft Learn.",
          href: "https://learn.microsoft.com/en-ca/users/kevinowona-0067/credentials/b70f9dede1be1a35",
          credentialId: "B70F9DEDE1BE1A35",
          certificationNumber: "EB51DB-Q4B342",
        },
      ],
    },
    github: {
      eyebrow: "GitHub & Labs",
      title:
        "Une pratique technique concrete qui renforce les competences infrastructure et cloud.",
      description:
        "Cette section reste extensible pour ajouter de futurs depots et laboratoires sans revoir toute la structure.",
      expandableText:
        "Ajoutez ici de futurs depots pour des APIs backend, des experimentations de deploiement, des labs cloud ou des prototypes d'automatisation.",
      items: [
        {
          title: "Depot d'apprentissage Terraform AWS",
          description:
            "Pratique continue de l'infrastructure as code autour d'AWS, du provisioning et de l'apprentissage cloud.",
          href: "https://github.com/KevFranck/terraform_aws_learning",
          tags: ["Terraform", "AWS", "Infrastructure as Code", "Labs"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Travaillons ensemble",
      description:
        "Si vous recrutez un Developpeur Web Full-Stack pour construire des applications, APIs et integrations utiles, je serai ravi d'echanger.",
      detailCards: [
        "Developpement web full-stack : interface, backend, base de donnees et deploiement.",
        "Experience en integration API et automatisation de workflows operationnels.",
      ],
      phoneLabel: "Telephone",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      phoneCta: "Appeler",
      emailCta: "Envoyer un email",
      linkedinCta: "LinkedIn",
      githubCta: "GitHub",
    },
    footer: {
      builtWith: "Construit avec Next.js, TypeScript et une architecture App Router reutilisable.",
    },
  },
};

export function getPortfolioContent(locale: Locale) {
  return portfolioContent[locale];
}
