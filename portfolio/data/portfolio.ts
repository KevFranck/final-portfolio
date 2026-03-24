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
  siteUrl: "",
};

export const profile = {
  name: "Kevin Owona",
  location: "Based in Canada, with experience delivering solutions across operations, web platforms, and automation workflows.",
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
    title: "Web Development",
    description: "Frontend and full-stack delivery with a focus on maintainable user-facing products.",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend & APIs",
    description: "Application logic, service integration, and backend systems that support production needs.",
    items: ["Python", "Django", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    description: "Practical experience modeling, querying, and integrating data across common relational and document stores.",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud",
    description: "Building with cloud fundamentals in mind and growing toward architecture and operations roles.",
    items: ["AWS", "Azure Fundamentals"],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Tooling and infrastructure practices that support deployment, repeatability, and operational clarity.",
    items: ["Terraform", "Docker", "Bash"],
  },
  {
    title: "Automation & AI Workflows",
    description: "Workflow systems that connect messaging, scheduling, qualification, and business operations.",
    items: [
      "n8n",
      "Vapi",
      "AI assistants",
      "Workflow automation",
      "API integrations",
      "WhatsApp automation",
      "Scheduling automation",
      "Lead qualification automation",
    ],
  },
];

const skillCategoriesFr: SkillCategory[] = [
  {
    title: "Developpement Web",
    description: "Conception frontend et full-stack avec une attention particuliere a la maintenabilite des produits.",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend & APIs",
    description: "Logique applicative, integration de services et backends adaptes a des besoins reels.",
    items: ["Python", "Django", "FastAPI", "APIs REST"],
  },
  {
    title: "Bases de Donnees",
    description: "Experience pratique de modelisation, de requetage et d'integration avec des bases relationnelles et documentaires.",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud",
    description: "Approche cloud-ready avec une base solide et une progression continue vers des roles cloud et operations.",
    items: ["AWS", "Azure Fundamentals"],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Outils et pratiques qui renforcent le deploiement, la repetition et la lisibilite operationnelle.",
    items: ["Terraform", "Docker", "Bash"],
  },
  {
    title: "Automatisation & Workflows IA",
    description: "Systemes d'automatisation reliant messagerie, planification, qualification et operations metier.",
    items: [
      "n8n",
      "Vapi",
      "Assistants IA",
      "Automatisation de workflows",
      "Integrations API",
      "Automatisation WhatsApp",
      "Automatisation de rendez-vous",
      "Automatisation de qualification de leads",
    ],
  },
];

const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    metadata: {
      title: "Kevin Owona | Web Developer | Cloud & DevOps Enthusiast | Automation Engineer",
      description:
        "Professional portfolio of Kevin Owona, highlighting web development, cloud-ready systems, DevOps tooling, and AI-powered automations.",
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
        "Add your public resume link and deployed site URL in the portfolio data file when they are available.",
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
      summary: "Web • Cloud • DevOps • Automation",
      projectsLabel: "Projects",
      contactLabel: "Let's Talk",
    },
    hero: {
      availability: "Open to recruiter conversations and technical opportunities",
      headline:
        "Building web products, cloud-ready systems, and automation that solves real work.",
      professionalLine:
        "Web Developer | Cloud & DevOps Enthusiast | Automation Engineer",
      summary:
        "I build web applications, cloud-ready systems, and workflow automations that solve real operational problems. My background combines full-stack development, cloud infrastructure, DevOps tooling, and AI-powered automation.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      resumeAvailable: "Download Resume",
      resumeUnavailable: "Resume on Request",
      quickScanPitch:
        "A recruiter-friendly profile for teams hiring across application development, cloud-facing environments, and automation-heavy workflows.",
      quickFacts: [
        {
          label: "Positioning",
          value: "Full-stack development with growing cloud, DevOps, and automation depth.",
        },
        {
          label: "Current Strength",
          value: "Building practical systems that connect product delivery, APIs, and operations.",
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
        "React & Next.js",
        "Python & APIs",
        "Cloud Foundations",
        "Terraform & Docker",
        "Automation & AI",
      ],
      targetRoles: [
        "Web Developer",
        "React Developer",
        "Python Developer",
        "Cloud Engineer",
        "DevOps / Cloud Operations",
        "Automation Engineer",
      ],
      pillars: [
        {
          title: "Web Development",
          description:
            "Modern interfaces and full-stack applications built for real operational use.",
        },
        {
          title: "Cloud",
          description:
            "Cloud-ready thinking with AWS focus and Azure fundamentals already certified.",
        },
        {
          title: "DevOps",
          description:
            "Infrastructure, containers, scripts, and delivery workflows that improve reliability.",
        },
        {
          title: "Automation / AI",
          description:
            "Workflow automation, API orchestration, and AI assistants that remove repetitive work.",
        },
      ],
      fitSummary:
        "Teams looking for someone who can contribute across frontend delivery, backend/API work, infrastructure learning, and practical workflow automation.",
      focusSummary:
        "Strengthening cloud architecture and security capability while continuing to ship real web and automation solutions.",
    },
    about: {
      eyebrow: "About",
      title:
        "A profile shaped by software delivery, infrastructure curiosity, and operational problem solving.",
      description:
        "My background connects web application development with IT operations, cloud learning, and practical automation. That mix helps me move comfortably between user-facing features, backend logic, delivery workflows, and systems thinking.",
      panelText:
        "I focus on building solutions that are useful, reliable, and easier to operate. Whether the work involves a web platform, an integration layer, or a workflow automation, I aim to reduce friction and improve execution.",
      educationLabel: "Education",
      locationLabel: "Location",
    },
    expertise: {
      eyebrow: "Expertise",
      title:
        "A clear skill map across application delivery, cloud foundations, and automation systems.",
      description:
        "The goal here is quick scanability: technologies grouped by how they contribute to real solution delivery, not presented as an unstructured logo wall.",
      categories: skillCategoriesEn,
    },
    projects: {
      eyebrow: "Featured Projects",
      title:
        "Selected work that shows real product delivery, integration thinking, and automation design.",
      description:
        "These projects are presented to help recruiters and hiring managers quickly assess practical capability, architecture awareness, and delivery relevance.",
      note:
        "Private work is intentionally presented with professional summaries rather than invented public links.",
      items: [
        {
          title: "Bravo Jeunesse - Cohort Management Platform",
          eyebrow: "Client Project",
          summary:
            "Designed and developed in Ottawa, Canada, for Mosaique Interculturelle, a full-stack web application to digitize and optimize the management of the Bravo Jeunesse youth training program.",
          problem:
            "Manual coordination across participants, attendance, scheduling, and reporting created friction for administrators and trainers.",
          outcome:
            "Turned a fragmented administrative process into a centralized digital platform that supports coordination, visibility, and reporting.",
          stack: [
            "Full-Stack",
            "React",
            "Django / FastAPI",
            "PostgreSQL",
            "Attendance Tracking",
            "Reporting",
          ],
          highlights: [
            "Centralized participant management, attendance tracking, program scheduling, and reporting for administrators and trainers in a single platform.",
            "Designed around real operational workflows rather than a generic dashboard pattern.",
            "Presented as a private client project without exposing confidential implementation details.",
          ],
          links: [
            { label: "Private Project" },
            { label: "Case Study Available on Request" },
          ],
        },
        {
          title: "ZIM Shipment Tracking Chatbot",
          eyebrow: "Automation / AI Workflow",
          summary:
            "Designed and implemented in Ottawa, Canada, for Otus, an AI-powered WhatsApp chatbot to automate shipment tracking requests using the ZIM platform.",
          problem:
            "Shipment tracking requests are repetitive, time-sensitive, and difficult to scale when handled manually across messaging channels.",
          outcome:
            "Moved repetitive shipment requests into a modular automation flow with better consistency, scalability, and multilingual support.",
          stack: [
            "n8n",
            "WhatsApp API",
            "OAuth2",
            "Automation",
            "AI Chatbot",
            "Google Sheets",
          ],
          highlights: [
            "Integrated the ZIM Shipping API with OAuth2 authentication and real-time data retrieval.",
            "Built modular n8n workflows and sub-workflows to keep the system maintainable and scalable.",
            "Handled invalid references, service errors, analytics logging, and English/French responses.",
          ],
          links: [
            { label: "Client Project" },
            { label: "Workflow Details Available on Request" },
          ],
        },
        {
          title: "Light Web Solutions Website + AI Assistant",
          eyebrow: "Live Project",
          summary:
            "Designed and integrated a conversational AI assistant into a business website to automate lead qualification, communication, and scheduling.",
          problem:
            "Service businesses need faster response handling and clearer lead capture without adding friction to the website experience.",
          outcome:
            "Combined business-facing presentation with automation-driven lead handling to support faster engagement and a cleaner conversion path.",
          stack: [
            "Next.js",
            "AI Assistant",
            "Lead Qualification",
            "Scheduling",
            "Conversion",
            "Automation",
          ],
          highlights: [
            "Integrated an assistant directly into the website experience to support first-contact interactions.",
            "Connected automation flows around lead qualification, client communication, and appointment scheduling.",
            "Balanced web presentation with practical automation that supports business operations.",
          ],
          links: [{ label: "Live Website", href: "https://www.lightwebsolutions.ca" }],
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
      title:
        "Professional experience across software development, systems support, and operational execution.",
      description:
        "The progression below shows practical delivery experience that supports roles spanning web development, cloud operations, and automation.",
      items: [
        {
          role: "IT Engineer",
          company: "Ministry of Public Service and Administrative Reform",
          location: "Cameroon",
          period: "2023 - 2025",
          summary:
            "Supported internal systems while contributing to troubleshooting, operational improvement, and task automation.",
          highlights: [
            "Supported and improved internal IT systems for day-to-day operations.",
            "Assisted with system administration and technical troubleshooting.",
            "Participated in automating repetitive technical tasks and documentation work.",
          ],
        },
        {
          role: "Web Application Developer",
          company: "Univers Binaire",
          location: "Cameroon",
          period: "2019 - 2023",
          summary:
            "Developed and maintained web applications with a focus on APIs, databases, and application logic.",
          highlights: [
            "Developed and maintained web applications used in real project contexts.",
            "Worked across APIs, databases, and backend logic to deliver complete solutions.",
            "Collaborated with cross-functional teams to move projects from idea to implementation.",
          ],
        },
        {
          role: "IT Support Technician",
          company: "Afrikanet Online",
          location: "Cameroon",
          period: "2018 - 2019",
          summary:
            "Provided technical support and incident resolution while maintaining systems and user environments.",
          highlights: [
            "Resolved incidents and provided technical support to users.",
            "Installed and maintained systems and user environments.",
            "Delivered customer-focused IT assistance grounded in reliability and service quality.",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      title:
        "Validated fundamentals today, with cloud and security progression already in motion.",
      description:
        "This section keeps certified and in-progress credentials visible so teams can quickly see current proof points and near-term direction.",
      items: [
        {
          name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
          status: "Certified",
          detail: "Credential verified via Microsoft Learn.",
          href: "https://learn.microsoft.com/en-ca/users/kevinowona-0067/credentials/b70f9dede1be1a35",
          credentialId: "B70F9DEDE1BE1A35",
          certificationNumber: "EB51DB-Q4B342",
        },
        {
          name: "AWS Certified Solutions Architect - Associate",
          status: "In Progress",
          detail: "Expected completion: May 2026.",
        },
        {
          name: "CompTIA Security+",
          status: "In Progress",
          detail: "Expected completion: July 2026.",
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
      title:
        "Open to web development, cloud, DevOps, and automation engineering opportunities.",
      description:
        "If you are hiring for someone who can contribute across application development, cloud-facing systems, and operational automation, I would be glad to connect.",
      detailCards: [
        "Strong fit for recruiter screening, technical interview pipelines, and client-facing technical projects.",
        "Especially relevant for roles needing breadth across frontend, backend, cloud, and automation workflows.",
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
      title: "Kevin Owona | Developpeur Web | Cloud, DevOps et Automatisation",
      description:
        "Portfolio professionnel de Kevin Owona, mettant en avant le developpement web, les systemes cloud-ready, le DevOps et l'automatisation propulsee par l'IA.",
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
        "Ajoutez votre lien de CV public et l'URL du site deploye dans le fichier de donnees quand ils seront disponibles.",
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
      summary: "Web • Cloud • DevOps • Automatisation",
      projectsLabel: "Projets",
      contactLabel: "Echanger",
    },
    hero: {
      availability: "Ouvert aux echanges avec recruteurs et opportunites techniques",
      headline:
        "Je construis des produits web, des systemes cloud-ready et des automatisations utiles a des besoins reels.",
      professionalLine:
        "Developpeur Web | Passionne Cloud & DevOps | Ingenieur en Automatisation",
      summary:
        "Je developpe des applications web, des systemes prets pour le cloud et des automatisations de workflow qui resolvent de vrais problemes operationnels. Mon parcours combine le full-stack, l'infrastructure cloud, les outils DevOps et l'automatisation appuyee par l'IA.",
      primaryCta: "Voir les projets",
      secondaryCta: "Me contacter",
      resumeAvailable: "Telecharger le CV",
      resumeUnavailable: "CV disponible sur demande",
      quickScanPitch:
        "Un profil facile a evaluer pour les equipes qui recrutent sur le developpement applicatif, le cloud et l'automatisation de workflows.",
      quickFacts: [
        {
          label: "Positionnement",
          value: "Developpement full-stack avec une progression continue en cloud, DevOps et automatisation.",
        },
        {
          label: "Force actuelle",
          value: "Concevoir des solutions pratiques qui relient produit, APIs et operations.",
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
        "React & Next.js",
        "Python & APIs",
        "Fondamentaux Cloud",
        "Terraform & Docker",
        "Automatisation & IA",
      ],
      targetRoles: [
        "Developpeur Web",
        "Developpeur React",
        "Developpeur Python",
        "Ingenieur Cloud",
        "DevOps / Operations Cloud",
        "Ingenieur Automatisation",
      ],
      pillars: [
        {
          title: "Developpement Web",
          description:
            "Interfaces modernes et applications full-stack construites pour des usages operationnels reels.",
        },
        {
          title: "Cloud",
          description:
            "Approche cloud-ready avec un focus AWS et une base Azure deja certifiee.",
        },
        {
          title: "DevOps",
          description:
            "Infrastructure, conteneurs, scripts et workflows de livraison qui renforcent la fiabilite.",
        },
        {
          title: "Automatisation / IA",
          description:
            "Automatisation de workflows, orchestration d'API et assistants IA qui reduisent le travail repetitif.",
        },
      ],
      fitSummary:
        "Equipes recherchant quelqu'un capable de contribuer sur le frontend, les APIs/backend, l'apprentissage infrastructure et l'automatisation de workflows.",
      focusSummary:
        "Renforcer les competences en architecture cloud et securite tout en continuant a livrer des solutions web et d'automatisation concretes.",
    },
    about: {
      eyebrow: "A propos",
      title:
        "Un profil faconne par la livraison logicielle, la curiosite infrastructure et la resolution de problemes operationnels.",
      description:
        "Mon parcours relie developpement d'applications web, operations IT, apprentissage cloud et automatisation pratique. Cela me permet d'evoluer facilement entre fonctionnalites produit, logique backend, workflows de livraison et vision systeme.",
      panelText:
        "Je cherche a construire des solutions utiles, fiables et plus simples a exploiter. Qu'il s'agisse d'une plateforme web, d'une couche d'integration ou d'un workflow automatise, mon objectif est de reduire la friction et d'ameliorer l'execution.",
      educationLabel: "Formation",
      locationLabel: "Localisation",
    },
    expertise: {
      eyebrow: "Expertise",
      title:
        "Une lecture claire des competences entre delivery applicatif, fondations cloud et systemes d'automatisation.",
      description:
        "L'objectif est la lisibilite rapide: les technologies sont groupees par usage reel, pas presentees comme un simple mur de logos.",
      categories: skillCategoriesFr,
    },
    projects: {
      eyebrow: "Projets phares",
      title:
        "Des projets selectionnes qui montrent une vraie capacite de delivery, d'integration et de conception d'automatisation.",
      description:
        "Ces projets sont presentes pour permettre aux recruteurs et managers techniques d'evaluer rapidement la capacite pratique, la logique d'architecture et la pertinence operationnelle.",
      note:
        "Les projets prives sont presentes de maniere professionnelle sans inventer de liens publics.",
      items: [
        {
          title: "Bravo Jeunesse - Plateforme de gestion de cohortes",
          eyebrow: "Projet client",
          summary:
            "Conception et developpement a Ottawa, Canada, pour Mosaique Interculturelle, d'une application web full-stack afin de digitaliser et d'optimiser la gestion du programme jeunesse Bravo Jeunesse.",
          problem:
            "La coordination manuelle des participants, des presences, du planning et du reporting creait des frictions pour les administrateurs et formateurs.",
          outcome:
            "Transformation d'un processus administratif disperse en une plateforme centralisee facilitant la coordination, la visibilite et le reporting.",
          stack: [
            "Full-Stack",
            "React",
            "Django / FastAPI",
            "PostgreSQL",
            "Suivi de presence",
            "Reporting",
          ],
          highlights: [
            "Centralisation de la gestion des participants, du suivi de presence, du planning du programme et du reporting pour les administrateurs et les formateurs dans une seule plateforme.",
            "Conception alignee sur des workflows operationnels reels plutot qu'un dashboard generique.",
            "Presentation comme projet client prive sans exposer de details confidentiels.",
          ],
          links: [
            { label: "Projet prive" },
            { label: "Etude de cas disponible sur demande" },
          ],
        },
        {
          title: "Chatbot de suivi d'expeditions ZIM",
          eyebrow: "Workflow d'automatisation / IA",
          summary:
            "Conception et mise en oeuvre a Ottawa, Canada, pour Otus, d'un chatbot WhatsApp propulse par l'IA afin d'automatiser les demandes de suivi d'expeditions via la plateforme ZIM.",
          problem:
            "Les demandes de suivi sont repetitives, sensibles au temps et difficiles a gerer a grande echelle lorsqu'elles sont traitees manuellement.",
          outcome:
            "Passage des demandes de suivi repetitives vers un flux automatise modulaire, plus coherent, plus resilient et multilingue.",
          stack: [
            "n8n",
            "WhatsApp API",
            "OAuth2",
            "Automatisation",
            "Chatbot IA",
            "Google Sheets",
          ],
          highlights: [
            "Integration de l'API ZIM Shipping avec OAuth2 et recuperation de donnees en temps reel.",
            "Construction de workflows et sous-workflows n8n modulaires pour garder une architecture maintenable et evolutive.",
            "Gestion des references invalides, des erreurs de service, du logging analytique et des reponses anglais/francais.",
          ],
          links: [
            { label: "Projet client" },
            { label: "Details du workflow sur demande" },
          ],
        },
        {
          title: "Site Light Web Solutions + assistant IA",
          eyebrow: "Projet en ligne",
          summary:
            "Conception et integration d'un assistant conversationnel IA dans un site business pour automatiser qualification, communication et planification.",
          problem:
            "Les entreprises de services ont besoin de repondre plus vite et de mieux capter les leads sans alourdir l'experience du site.",
          outcome:
            "Association d'une presence web orientee business avec une automatisation de conversion qui fluidifie l'engagement et la qualification.",
          stack: [
            "Next.js",
            "Assistant IA",
            "Qualification de leads",
            "Planification",
            "Conversion",
            "Automatisation",
          ],
          highlights: [
            "Integration d'un assistant directement dans le parcours web pour mieux gerer les premiers contacts.",
            "Connexion de flux d'automatisation autour de la qualification, de la communication client et de la prise de rendez-vous.",
            "Equilibre entre presentation web professionnelle et automatisation utile aux operations commerciales.",
          ],
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
      title:
        "Une experience professionnelle entre developpement logiciel, support systeme et execution operationnelle.",
      description:
        "Le parcours ci-dessous montre une experience concrete de delivery adaptee a des roles web, cloud operations et automatisation.",
      items: [
        {
          role: "Ingenieur IT",
          company: "Ministry of Public Service and Administrative Reform",
          location: "Cameroun",
          period: "2023 - 2025",
          summary:
            "Support des systemes internes avec contribution au troubleshooting, a l'amelioration operationnelle et a l'automatisation de taches.",
          highlights: [
            "Support et amelioration des systemes IT internes au quotidien.",
            "Assistance sur l'administration systeme et la resolution de problemes techniques.",
            "Participation a l'automatisation de taches techniques repetitives et a la documentation.",
          ],
        },
        {
          role: "Developpeur d'applications web",
          company: "Univers Binaire",
          location: "Cameroun",
          period: "2019 - 2023",
          summary:
            "Developpement et maintenance d'applications web avec un focus sur les APIs, les bases de donnees et la logique applicative.",
          highlights: [
            "Developpement et maintenance d'applications web dans des contextes de projets reels.",
            "Travail sur les APIs, les bases de donnees et la logique backend pour livrer des solutions completes.",
            "Collaboration avec des equipes pluridisciplinaires pour faire avancer les projets de l'idee a l'implementation.",
          ],
        },
        {
          role: "Technicien support IT",
          company: "Afrikanet Online",
          location: "Cameroun",
          period: "2018 - 2019",
          summary:
            "Support technique et resolution d'incidents avec maintenance des systemes et des environnements utilisateurs.",
          highlights: [
            "Resolution d'incidents et support technique aux utilisateurs.",
            "Installation et maintenance des systemes et environnements utilisateurs.",
            "Accompagnement des utilisateurs avec une approche orientee service et fiabilite.",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      title:
        "Des fondamentaux deja valides, avec une progression cloud et securite clairement engagee.",
      description:
        "Cette section rend visibles a la fois les preuves actuelles et la trajectoire de progression a court terme.",
      items: [
        {
          name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
          status: "Certifie",
          detail: "Certification verifiee via Microsoft Learn.",
          href: "https://learn.microsoft.com/en-ca/users/kevinowona-0067/credentials/b70f9dede1be1a35",
          credentialId: "B70F9DEDE1BE1A35",
          certificationNumber: "EB51DB-Q4B342",
        },
        {
          name: "AWS Certified Solutions Architect - Associate",
          status: "En cours",
          detail: "Completion prevue: mai 2026.",
        },
        {
          name: "CompTIA Security+",
          status: "En cours",
          detail: "Completion prevue: juillet 2026.",
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
      title:
        "Ouvert aux opportunites en developpement web, cloud, DevOps et automatisation.",
      description:
        "Si vous recrutez un profil capable de contribuer sur le developpement applicatif, les systemes cloud-ready et l'automatisation operationnelle, je serai ravi d'echanger.",
      detailCards: [
        "Profil pertinent pour screening recruteur, entretiens techniques et projets techniques orientés client.",
        "Particulierement adapte aux roles demandant de la largeur sur frontend, backend, cloud et automatisation.",
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
