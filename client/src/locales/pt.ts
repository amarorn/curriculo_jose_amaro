import type { ResumeLocale } from "./types";

export const pt: ResumeLocale = {
  langLabel: "Português",

  hero: {
    devTitle: "Senior Software & Data Engineer",
  },

  stats: [
    { value: "10+", label: "Anos de Experiência" },
    { value: "5+", label: "Plataformas Cloud" },
    { value: "20+", label: "Projetos Críticos" },
  ],

  profileSummary: [
    "Arquiteto de Dados com trajetória sólida em plataformas de larga escala, cloud computing e integração de sistemas. Experiência abrangente em GCP, AWS, arquitetura orientada a eventos, pipelines distribuídos (NRT/CDC) e modelagem de dados para ambientes analíticos e operacionais.",
    "Atua há mais de uma década na construção de soluções críticas de dados, liderando iniciativas de modernização, governança, performance e transformação digital. Combina profundidade técnica com visão arquitetural, capacidade de comunicação e foco em entregas de alto impacto.",
  ],

  devHighlights: [
    {
      title: "Full-Stack & Backend",
      desc: "APIs REST, microsserviços e interfaces com Node.js, Python, Django e React.",
    },
    {
      title: "Engenharia de Dados",
      desc: "Pipelines distribuídos, ETL/ELT, BigQuery, Dataflow, Delta Lake e streaming CDC.",
    },
    {
      title: "Cloud & DevOps",
      desc: "GCP, AWS e Azure com Docker, CI/CD, ECS, Lambda e observabilidade em produção.",
    },
    {
      title: "IA & LLM Ops",
      desc: "RAG, copilotos LLM, Vertex AI, LangChain e pipelines de visão computacional.",
    },
  ],

  experience: [
    {
      title: "Arquiteto de Dados Sênior",
      description:
        "Responsável por arquitetar soluções críticas em um ambiente híbrido, liderando trilhas de modernização e coordenando o time de engenharia de dados dedicado à área de Suprimentos. Stack Databricks + Azure (Delta Lake, Synapse e Purview) com arquitetura em medalhão.",
      highlights: [
        "Coordenação de squads de engenharia focados em Suprimentos, alinhando negócio, governança e SLAs",
        "Arquitetura em medalhão no Databricks Lakehouse sobre Azure Data Lake, Delta Live Tables e Unity Catalog",
        "Pipelines híbridos com streaming/CDC em Azure Data Factory, Event Hub e integrações GCP/Node.js",
        "Automação de workloads com UC4, BizAgi, Jira e observabilidade ponta a ponta em ITSM",
        "Redução de até 35% no SLA crítico de suprimentos e painel de governança com lineage, quality score e FinOps",
      ],
    },
    {
      title: "CTO & Principal Data Architect",
      description:
        "Liderança técnica e estratégica em soluções de dados, IA generativa e visão computacional. Responsável por roadmaps, squads e entrega de produtos para clientes enterprise como Banco BV, ArcelorMittal e Engefotos.",
      highlights: [
        "Copilotos LLM e RAG conectados a BigQuery/Vertex AI (Banco BV & ArcelorMittal)",
        "Pipeline de visão computacional e relatórios generativos para a Engefotos",
        "Feature store multicloud, CDC e esteiras CI/CD para ML e analytics",
        "Criação de guildas de liderança técnica e programas de inovação BeAnalytic",
      ],
    },
    {
      title: "Arquiteto de Dados Pleno",
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
      title: "Information Technology Team Lead",
      description:
        "Liderança de equipes full-stack em uma migração arquitetural complexa de monólito para microsserviços.",
      highlights: [
        "Migração de monólito para microsserviços com API Gateways",
        "React Native, React.js e Node.js atendendo apps e portal",
        "AWS Elastic Beanstalk, ECS, Lambda e automação CI/CD",
        "PHP, Elasticsearch, Amazon S3 e RDS em ambientes híbridos",
      ],
    },
    {
      title: "Data Architect",
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
      title: "CTO",
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
      title: "JavaScript Developer",
      description:
        "Desenvolvimento full-stack em projetos comerciais e produtos internos, entregando interfaces ricas, APIs Node.js/PHP e integrações com bancos de dados e serviços AWS.",
      highlights: [
        "JavaScript moderno, React.js e React Native",
        "Node.js, PHP e APIs REST orientadas a domínio",
        "AWS (Lambda, S3, RDS) e automação de deploy",
        "Práticas de desenvolvimento de habilidades e mentoria",
      ],
    },
  ],

  githubProjects: [
    {
      subtitle: "Plataforma SaaS de CRM & Automação de Vendas",
      description:
        "SaaS multi-tenant para gestão de relacionamento, comunicação e análise de vendas com event streaming em tempo real.",
    },
    {
      subtitle: "WhatsApp Analytics Platform",
      description:
        "Plataforma de analytics de clientes via WhatsApp com Clean Architecture, orquestração em Kubernetes (EKS) e infraestrutura como código com Terraform.",
    },
    {
      subtitle: "Pipeline Oracle → ClickHouse com PySpark",
      description:
        "Plataforma de dados com orquestração PySpark, camadas bronze/silver/gold, catálogo de lineage via FastAPI e infraestrutura Docker Compose.",
    },
    {
      subtitle: "Personal Trainer com IA Generativa",
      description:
        "App de treino personalizado que utiliza IA para gerar planos adaptativos. Monorepo com NestJS (Clean Architecture) no backend e React/Vite no frontend.",
    },
    {
      subtitle: "Sistema Fullstack Moderno",
      description:
        "Fullstack completo com FastAPI + Clean Architecture no backend, React 18 + Framer Motion no frontend e containerização com Docker/Nginx.",
    },
  ],

  featuredProjectItems: [
    {
      subtitle: "Sistema Web de Controle Financeiro",
      description:
        "Aplicação completa para academias e centros esportivos, utilizando PHP, padrões modernos e arquitetura modular.",
    },
    {
      subtitle: "Projeto USP",
      description:
        "Realidade aumentada aplicada ao desfile da Rosas de Ouro. Atuação com Python e ambientes containerizados.",
    },
  ],

  orionCard: {
    badge: "Framework Autoral",
    description: "Arquitetura em camadas para pipelines resilientes e governáveis.",
  },

  clients: [
    { description: "Liderança técnica em soluções de dados e IA para infraestrutura, energia e varejo." },
    { description: "Data mesh, copilotos LLM orientados a processos e pipelines BigQuery/Dataflow." },
    { description: "Modernização de pipelines Dataflow + BigQuery e integração híbrida on-prem + cloud." },
    { description: "Pipeline de visão computacional com LLMs para relatórios automatizados e insights de campo." },
  ],

  aiInitiatives: [
    {
      title: "Copilotos LLM Multicanais",
      description:
        "Plataformas RAG com monitoramento de alucinação, governança de prompts e integração com BigQuery/Vertex AI.",
    },
    {
      title: "Pipeline Vision AI Engefotos",
      description:
        "Fluxos de ingestão em campo, processamento de imagens e geração automática de relatórios com LLMs especializados.",
    },
    {
      title: "Feature Store & Data Products",
      description:
        "Arquitetura de feature store multicloud, versionamento de modelos e esteiras CI/CD para ML e analíticos.",
    },
  ],

  articles: [
    {
      title: "Arquitetura de Pipelines Distribuídos com Dataflow",
      description: "Guia completo sobre design de pipelines ETL escaláveis em GCP",
    },
    {
      title: "BigQuery Performance Tuning: 10 Técnicas Essenciais",
      description: "Otimizações práticas para reduzir custos e melhorar velocidade",
    },
    {
      title: "Microsserviços e Dados: Desafios de Consistência",
      description: "Estratégias para manter integridade de dados em arquiteturas distribuídas",
    },
  ],

  education: [
    { course: "Análise e Desenvolvimento de Sistemas" },
    { course: "Pós-graduação em Arquitetura de Dados" },
  ],

  certSection: {
    title: "Trilhas Databricks & Credenciais",
    desc: "Certificações oficiais que suportam liderança em arquitetura, governança e engenharia de dados.",
    databricksLabel: "Trilha Databricks",
    othersLabel: "Outras credenciais",
  },

  footer: {
    description: "Especialista em Arquitetura de Dados e Engenharia de Sistemas Escaláveis",
  },
};
