import {
  Brain,
  Calendar,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const heroInfo = {
  name: "José Amaro",
  title: "Arquiteto de Dados Sênior",
  tagline: "Cloud & Pipelines Escaláveis",
  summary: [
    "Especialista em engenharia de dados com mais de uma década construindo soluções críticas em plataformas de larga escala.",
    "Domínio em GCP, AWS, arquitetura orientada a eventos e pipelines distribuídos.",
  ],
};

export const contactInfo = [
  {
    label: "phone",
    icon: Phone,
    value: "+55 84 99867-1188",
    href: "tel:+5584998671188",
  },
  {
    label: "email",
    icon: Mail,
    value: "j.amarorn@gmail.com",
    href: "mailto:j.amarorn@gmail.com",
  },
  {
    label: "location",
    icon: MapPin,
    value: "Natal – RN",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/josé-amaro-40351553",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/amarorn",
    icon: Github,
  },
];

export const stats = [
  { value: "10+", label: "Anos de Experiência", colorClass: "text-primary" },
  { value: "5+", label: "Plataformas Cloud", colorClass: "text-secondary" },
  { value: "20+", label: "Projetos Críticos", colorClass: "text-accent" },
];

export const techStack = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["GCP", "BigQuery", "Dataflow", "AWS", "Lambda", "ECS"],
    color: "from-primary to-primary/60",
  },
  {
    category: "Data Architecture",
    icon: Database,
    items: ["ETL/ELT", "BigData", "Pipelines", "NoSQL", "OLTP/OLAP"],
    color: "from-secondary to-secondary/60",
  },
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript", "Node.js", "Django"],
    color: "from-accent to-accent/60",
  },
  {
    category: "Engineering",
    icon: GitBranch,
    items: ["Docker", "CI/CD", "Microservices", "DDD", "TDD"],
    color: "from-primary to-secondary",
  },
  {
    category: "AI & MLOps",
    icon: Brain,
    items: ["LLM Ops", "RAG", "Vertex AI", "LangChain", "Vision AI"],
    color: "from-accent to-primary",
  },
];

export const resumeModels = [
  {
    id: "estrategico",
    label: "Modelo Estratégico",
    heroBadge: "Arquiteto de Dados Sênior",
    heroSubtitle: "Cloud & Pipelines Escaláveis",
    summary: [
      "Especialista em engenharia de dados com mais de uma década construindo soluções críticas em plataformas de larga escala.",
      "Domínio em GCP, AWS, arquitetura orientada a eventos, governança e pipelines distribuídos para suportar produtos de negócios.",
    ],
    focusHighlights: [
      "Roadmaps corporativos de dados",
      "FinOps e governança multi-cloud",
      "Integração híbrida e event-driven",
    ],
  },
  {
    id: "lideranca",
    label: "Modelo Liderança Técnica",
    heroBadge: "CTO & Tech Leadership",
    heroSubtitle: "Escalando times, microservices e produtos digitais",
    summary: [
      "Atuação como CTO na BeAnalytic e na AFX System, liderando squads multidisciplinares e decisões de arquitetura de ponta a ponta.",
      "Mentoria de líderes técnicos, definição de OKRs e implantação de programas de confiabilidade, segurança e eficiência operacional.",
    ],
    focusHighlights: [
      "Playbooks DevSecOps & SRE",
      "Programas de liderança técnica",
      "Portfólio de produtos orientado a dados",
    ],
  },
  {
    id: "ia",
    label: "Modelo IA & LLM",
    heroBadge: "IA Aplicada & LLM Ops",
    heroSubtitle: "Copilotos, visão computacional e pipelines cognitivos",
    summary: [
      "Responsável por soluções de IA generativa e visão computacional em clientes BeAnalytic, conectando dados, modelos e produtos digitais.",
      "Experiência em pipelines de dados em tempo real para treinar, servir e monitorar modelos LLM e computer vision em ambientes enterprise.",
    ],
    focusHighlights: [
      "LLM fine-tuning e RAG",
      "Vision AI na Engefotos",
      "MLOps + Observabilidade",
    ],
  },
];

export const profileSummary = [
  "Arquiteto de Dados com trajetória sólida em plataformas de larga escala, cloud computing e integração de sistemas. Experiência abrangente em GCP, AWS, arquitetura orientada a eventos, pipelines distribuídos (NRT/CDC) e modelagem de dados para ambientes analíticos e operacionais.",
  "Atua há mais de uma década na construção de soluções críticas de dados, liderando iniciativas de modernização, governança, performance e transformação digital. Combina profundidade técnica com visão arquitetural, capacidade de comunicação e foco em entregas de alto impacto.",
];

export const clientHighlights = [
  {
    name: "BeAnalytic",
    role: "CTO • beanalytic.com.br",
    description:
      "Liderança técnica em soluções de dados e IA para infraestrutura, energia e varejo.",
    tags: ["LLM Ops", "Tech Strategy", "C-level Advisory"],
    link: "https://beanalytic.com.br",
  },
  {
    name: "Banco BV",
    role: "Squads de Crédito & Analytics",
    description:
      "Data mesh, copilotos LLM orientados a processos e pipelines BigQuery/Dataflow.",
    tags: ["RAG", "Governança", "FinOps"],
  },
  {
    name: "ArcelorMittal Sistemas",
    role: "Arquitetura Corporativa",
    description:
      "Modernização de pipelines Dataflow + BigQuery e integração híbrida on-prem + cloud.",
    tags: ["Dataflow", "CDC", "Pipelines Massivos"],
  },
  {
    name: "Engefotos",
    role: "Computer Vision & IA Generativa",
    description:
      "Pipeline de visão computacional com LLMs para relatórios automatizados e insights de campo.",
    tags: ["Vision AI", "MLOps", "LLM Reports"],
  },
];

export const aiInitiatives = [
  {
    title: "Copilotos LLM Multicanais",
    client: "BeAnalytic • Banco BV & ArcelorMittal",
    description:
      "Plataformas RAG com monitoramento de alucinação, governança de prompts e integração com BigQuery/Vertex AI.",
    tags: ["RAG", "Vertex AI", "Observabilidade"],
  },
  {
    title: "Pipeline Vision AI Engefotos",
    client: "Engefotos",
    description:
      "Fluxos de ingestão em campo, processamento de imagens e geração automática de relatórios com LLMs especializados.",
    tags: ["Computer Vision", "Edge AI", "LLM Summaries"],
  },
  {
    title: "Feature Store & Data Products",
    client: "BeAnalytic • Energia & Infraestrutura",
    description:
      "Arquitetura de feature store multicloud, versionamento de modelos e esteiras CI/CD para ML e analíticos.",
    tags: ["Feature Store", "CI/CD", "MLOps"],
  },
];

export const experienceEntries = [
  {
    id: "arcelor",
    title: "Arquiteto de Dados Sênior",
    company: "ArcelorMittal Sistemas",
    date: "Fev 2025 – Atual",
    location: "Remoto / São Paulo",
    description:
      "Responsável por arquitetar soluções críticas em um ambiente híbrido, liderando trilhas de modernização que conectam times de negócio, squads de engenharia e governança. Uso intensivo de Python, UC4, BizAgi, Confluence e Google Cloud para garantir fluxos de dados auditáveis e resilientes.",
    highlights: [
      "Desenho técnico de arquitetura de dados e integração GCP/Node.js",
      "Governança de pipelines BigQuery, BigTable, Firestore e S3",
      "Automação de workloads com UC4, BizAgi, Jira e ferramentas ITSM",
      "Modelagem Archimate, DataFlow e DataOps para squads remotos",
    ],
  },
  {
    id: "beanalytic",
    title: "CTO & Principal Data Architect",
    company: "BeAnalytic",
    date: "Jan 2021 – Atual",
    location: "São Paulo / Remoto",
    description:
      "Liderança técnica e estratégica em soluções de dados, IA generativa e visão computacional. Responsável por roadmaps, squads e entrega de produtos para clientes enterprise como Banco BV, ArcelorMittal e Engefotos.",
    companyLink: "https://beanalytic.com.br",
    highlights: [
      "Copilotos LLM e RAG conectados a BigQuery/Vertex AI (Banco BV & ArcelorMittal)",
      "Pipeline de visão computacional e relatórios generativos para a Engefotos",
      "Feature store multicloud, CDC e esteiras CI/CD para ML e analytics",
      "Criação de guildas de liderança técnica e programas de inovação BeAnalytic",
    ],
  },
  {
    id: "bancobv",
    title: "Arquiteto de Dados Pleno",
    company: "Banco BV",
    date: "Mar 2022 – Dez 2024",
    location: "Remoto / São Paulo",
    description:
      "Atuação estratégica na evolução da plataforma de dados, suportando squads de crédito, analytics e BI com arquitetura orientada a domínio, microsserviços e integração com plataformas cloud (GCP & AWS).",
    highlights: [
      "Arquitetura de microsserviços Node.js com Pub/Sub e API Gateway",
      "Modelagem BigQuery, BigTable, Firestore e armazenamento Amazon S3",
      "Orquestrações UC4, BizAgi, Jira/Confluence para fluxos críticos",
      "Desenhos Archimate, Dataflow e cadência ágil com times remotos",
    ],
  },
  {
    id: "parceria",
    title: "Information Technology Team Lead",
    company: "Parceria da Construção",
    date: "Mar 2023 – Ago 2023",
    location: "São Paulo / Remoto",
    description:
      "Liderança de equipes full-stack em uma migração arquitetural complexa de monólito para microsserviços.",
    highlights: [
      "Migração de monólito para microserviços com API Gateways",
      "React Native, React.js e Node.js atendendo apps e portal",
      "AWS Elastic Beanstalk, ECS, Lambda e automação CI/CD",
      "PHP, Elasticsearch, Amazon S3 e RDS em ambientes híbridos",
    ],
  },
  {
    id: "globalhits",
    title: "Data Architect",
    company: "GLOBAL HITSS",
    date: "Nov 2020 – Mar 2023",
    location: "Remoto",
    description:
      "Arquitetura de dados para plataforma de streaming e telecom, oferecendo pipelines de analytics, governança e camadas de consumo para squads distribuídos.",
    highlights: [
      "BigQuery, BigTable, Firestore e MongoDB",
      "Pipelines analytics com Dataflow, CDC e TDD",
      "Docker products, esteiras CI/CD e versionamento",
      "Enablement de times e aceleração de skills em dados",
    ],
  },
  {
    id: "afx",
    title: "CTO",
    company: "AFX SYSTEM",
    date: "Jan 2018 – Mai 2021",
    location: "Natal/RN",
    description:
      "Liderança executiva de produtos digitais, definindo portfólio, arquitetura e capacitação técnica de squads mobile/web.",
    highlights: [
      "TDD, DDD, Clean Code e governança técnica do stack",
      "React Native, React.js e automação com Docker Products",
      "Arquitetura escalável, Data Structures e observabilidade",
      "Formação e mentoria de lideranças técnicas",
    ],
  },
  {
    id: "javascript",
    title: "JavaScript Developer",
    company: "Projetos Autorais & Consultoria",
    date: "Jan 2018 – Mai 2020",
    location: "Natal/RN",
    description:
      "Desenvolvimento full-stack em projetos comerciais e produtos internos, entregando interfaces ricas, APIs Node.js/PHP e integrações com bancos de dados e serviços AWS.",
    highlights: [
      "JavaScript moderno, React.js e React Native",
      "Node.js, PHP e APIs REST orientadas a domínio",
      "AWS (Lambda, S3, RDS) e automação de deploy",
      "Práticas de desenvolvimento de habilidades e mentoria",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Bepass",
    subtitle: "Sistema Web de Controle Financeiro",
    description:
      "Aplicação completa para academias e centros esportivos, utilizando PHP, padrões modernos e arquitetura modular.",
    icon: Database,
  },
  {
    title: "Carnaval 4.0",
    subtitle: "Projeto USP",
    description:
      "Realidade aumentada aplicada ao desfile da Rosas de Ouro. Atuação com Python e ambientes containerizados.",
    icon: Cloud,
  },
];

export const articles = [
  {
    title: "Arquitetura de Pipelines Distribuídos com Dataflow",
    platform: "Medium",
    date: "Nov 2024",
    description: "Guia completo sobre design de pipelines ETL escaláveis em GCP",
    link: "#",
  },
  {
    title: "BigQuery Performance Tuning: 10 Técnicas Essenciais",
    platform: "Dev.to",
    date: "Set 2024",
    description: "Otimizações práticas para reduzir custos e melhorar velocidade",
    link: "#",
  },
  {
    title: "Microsserviços e Dados: Desafios de Consistência",
    platform: "LinkedIn",
    date: "Ago 2024",
    description:
      "Estratégias para manter integridade de dados em arquiteturas distribuídas",
    link: "#",
  },
];

export const talks = [
  {
    title: "Event-Driven Architecture em Escala",
    event: "Data Summit Brasil 2024",
    date: "Out 2024",
    location: "São Paulo",
    description: "Padrões e práticas para sistemas orientados a eventos",
  },
  {
    title: "Modernização de Data Warehouses Legados",
    event: "GCP Community Meetup",
    date: "Set 2024",
    location: "Natal",
    description: "Estratégias de migração com zero downtime",
  },
  {
    title: "DDD e Arquitetura de Dados: Uma Perspectiva Integrada",
    event: "TechTalk Series",
    date: "Ago 2024",
    location: "Online",
    description:
      "Como Domain-Driven Design melhora decisões arquiteturais",
  },
];

export const professionalDifferentials = [
  "Capacidade de liderar iniciativas complexas de dados com visão estratégica",
  "Domínio de plataformas cloud e pipelines distribuídos",
  "Forte background em desenvolvimento, potencializando decisões arquiteturais",
  "Comunicação clara, responsabilidade técnica e foco em entrega de valor",
  "Perfil pró-ativo com experiência real em projetos críticos",
  "Expertise em transformação digital e modernização de sistemas",
];

export const educationEntries = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "UNI-RN",
    period: "2012–2016",
  },
];

export const certifications = [
  {
    name: "Neo4j Certified Professional",
    details: "2024",
    extra: "ID: 3e53bb00-3e53-4e88-9109-147fb79ace65",
  },
  {
    name: "Formação Complementar",
    details: "Pipelines distribuídos, BigQuery, Dataflow e arquitetura cloud",
  },
];

export const footerInfo = {
  copyright: "© 2024 José Amaro. Todos os direitos reservados.",
  description:
    "Especialista em Arquitetura de Dados e Engenharia de Sistemas Escaláveis",
};

export const sectionAnchors = {
  hero: "inicio",
  clients: "clientes",
  stack: "stack",
  profile: "perfil",
  experience: "experiencia",
  ai: "ia",
  projects: "projetos",
  publications: "publicacoes",
};

