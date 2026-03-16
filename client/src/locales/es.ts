import type { ResumeLocale } from "./types";

export const es: ResumeLocale = {
  langLabel: "Español",

  hero: {
    devTitle: "Senior Software & Ingeniero de Datos",
  },

  stats: [
    { value: "10+", label: "Años de Experiencia" },
    { value: "5+", label: "Plataformas Cloud" },
    { value: "20+", label: "Proyectos Críticos" },
  ],

  profileSummary: [
    "Arquitecto de Datos e Ingeniero de Software con sólida trayectoria en plataformas de gran escala, computación en la nube e integración de sistemas. Amplia experiencia en GCP, AWS, arquitectura orientada a eventos, pipelines distribuidos (NRT/CDC) y modelado de datos para entornos analíticos y operacionales.",
    "Más de una década construyendo soluciones críticas de datos, liderando iniciativas de modernización, gobernanza, rendimiento y transformación digital. Combina profundidad técnica con visión arquitectónica, comunicación efectiva y enfoque en resultados de alto impacto.",
  ],

  devHighlights: [
    {
      title: "Full-Stack & Backend",
      desc: "APIs REST, microservicios e interfaces con Node.js, Python, Django y React.",
    },
    {
      title: "Ingeniería de Datos",
      desc: "Pipelines distribuidos, ETL/ELT, BigQuery, Dataflow, Delta Lake y streaming CDC.",
    },
    {
      title: "Cloud & DevOps",
      desc: "GCP, AWS y Azure con Docker, CI/CD, ECS, Lambda y observabilidad en producción.",
    },
    {
      title: "IA & LLM Ops",
      desc: "RAG, copilotos LLM, Vertex AI, LangChain y pipelines de visión computacional.",
    },
  ],

  experience: [
    {
      title: "Arquitecto de Datos Senior",
      description:
        "Responsable de arquitectar soluciones críticas en un entorno híbrido, liderando iniciativas de modernización y coordinando el equipo de ingeniería de datos del área de Suministros. Stack Databricks + Azure (Delta Lake, Synapse y Purview) con arquitectura medallón.",
      highlights: [
        "Coordinación de squads de ingeniería enfocados en Suministros, alineando negocio, gobernanza y SLAs",
        "Arquitectura medallón en Databricks Lakehouse sobre Azure Data Lake, Delta Live Tables y Unity Catalog",
        "Pipelines híbridos con streaming/CDC en Azure Data Factory, Event Hub e integraciones GCP/Node.js",
        "Automatización de workloads con UC4, BizAgi, Jira y observabilidad de extremo a extremo en ITSM",
        "Reducción de hasta 35% en SLA crítico de suministros y panel de gobernanza con lineage, quality score y FinOps",
      ],
    },
    {
      title: "CTO & Principal Data Architect",
      description:
        "Liderazgo técnico y estratégico en soluciones de datos, IA generativa y visión computacional. Responsable de roadmaps, squads y entrega de productos para clientes enterprise como Banco BV, ArcelorMittal y Engefotos.",
      highlights: [
        "Copilotos LLM y RAG conectados a BigQuery/Vertex AI (Banco BV & ArcelorMittal)",
        "Pipeline de visión computacional e informes generativos para Engefotos",
        "Feature store multicloud, CDC y pipelines CI/CD para ML y analítica",
        "Creación de guildas de liderazgo técnico y programas de innovación BeAnalytic",
      ],
    },
    {
      title: "Arquitecto de Datos",
      description:
        "Trabajo estratégico en la evolución de la plataforma de datos, apoyando squads de crédito, analítica y BI con arquitectura orientada a dominio, microservicios e integración con plataformas cloud (GCP & AWS).",
      highlights: [
        "Arquitectura de microservicios Node.js con Pub/Sub y API Gateway",
        "Modelado BigQuery, BigTable, Firestore y Amazon S3",
        "Orquestaciones UC4, BizAgi, Jira/Confluence para flujos críticos",
        "Diagramas Archimate, Dataflow y cadencia ágil con equipos remotos",
      ],
    },
    {
      title: "IT Team Lead",
      description:
        "Liderazgo de equipos full-stack en una compleja migración arquitectónica de monolito a microservicios.",
      highlights: [
        "Migración de monolito a microservicios con API Gateways",
        "React Native, React.js y Node.js para apps y portal",
        "AWS Elastic Beanstalk, ECS, Lambda y automatización CI/CD",
        "PHP, Elasticsearch, Amazon S3 y RDS en entornos híbridos",
      ],
    },
    {
      title: "Arquitecto de Datos",
      description:
        "Arquitectura de datos para plataforma de streaming y telecomunicaciones, entregando pipelines de analítica, gobernanza y capas de consumo para squads distribuidos.",
      highlights: [
        "BigQuery, BigTable, Firestore y MongoDB",
        "Pipelines de analítica con Dataflow, CDC y TDD",
        "Docker products, pipelines CI/CD y versionado",
        "Habilitación de equipos y aceleración de skills en datos",
      ],
    },
    {
      title: "CTO",
      description:
        "Liderazgo ejecutivo de productos digitales, definiendo portafolio, arquitectura y capacitación técnica de squads mobile/web.",
      highlights: [
        "TDD, DDD, Clean Code y gobernanza técnica del stack",
        "React Native, React.js y automatización con Docker Products",
        "Arquitectura escalable, Estructuras de Datos y observabilidad",
        "Formación y mentoría de líderes técnicos",
      ],
    },
    {
      title: "Desarrollador JavaScript",
      description:
        "Desarrollo full-stack en proyectos comerciales y productos internos, entregando interfaces ricas, APIs Node.js/PHP e integraciones con bases de datos y servicios AWS.",
      highlights: [
        "JavaScript moderno, React.js y React Native",
        "Node.js, PHP y APIs REST orientadas a dominio",
        "AWS (Lambda, S3, RDS) y automatización de despliegue",
        "Prácticas de desarrollo de habilidades y mentoría",
      ],
    },
  ],

  githubProjects: [
    {
      subtitle: "Plataforma SaaS de CRM & Automatización de Ventas",
      description:
        "SaaS multi-tenant para gestión de relaciones, comunicación y análisis de ventas en tiempo real con event streaming.",
    },
    {
      subtitle: "Plataforma de Analítica WhatsApp",
      description:
        "Plataforma de analítica de clientes vía WhatsApp con Clean Architecture, orquestación en Kubernetes (EKS) e infraestructura como código con Terraform.",
    },
    {
      subtitle: "Pipeline Oracle → ClickHouse con PySpark",
      description:
        "Plataforma de datos con orquestación PySpark, capas bronze/silver/gold, catálogo de lineage vía FastAPI e infraestructura Docker Compose.",
    },
    {
      subtitle: "Entrenador Personal con IA Generativa",
      description:
        "App de entrenamiento personalizado que usa IA para generar planes adaptativos. Monorepo con NestJS (Clean Architecture) en backend y React/Vite en frontend.",
    },
    {
      subtitle: "Sistema Fullstack Moderno",
      description:
        "Fullstack completo con FastAPI + Clean Architecture en backend, React 18 + Framer Motion en frontend y contenedorización con Docker/Nginx.",
    },
  ],

  featuredProjectItems: [
    {
      subtitle: "Sistema Web de Control Financiero",
      description:
        "Aplicación completa para gimnasios y centros deportivos, usando PHP, patrones modernos y arquitectura modular.",
    },
    {
      subtitle: "Proyecto USP",
      description:
        "Realidad aumentada aplicada al desfile de Rosas de Ouro. Desarrollo con Python y entornos contenedorizados.",
    },
  ],

  orionCard: {
    badge: "Framework Propio",
    description: "Arquitectura en capas para pipelines resilientes y gobernables.",
  },

  clients: [
    { description: "Liderazgo técnico en soluciones de datos e IA para infraestructura, energía y retail." },
    { description: "Data mesh, copilotos LLM orientados a procesos y pipelines BigQuery/Dataflow." },
    { description: "Modernización de pipelines Dataflow + BigQuery e integración híbrida on-prem + cloud." },
    { description: "Pipeline de visión computacional con LLMs para informes automatizados e insights de campo." },
  ],

  aiInitiatives: [
    {
      title: "Copilotos LLM Multicanal",
      description:
        "Plataformas RAG con monitoreo de alucinaciones, gobernanza de prompts e integración con BigQuery/Vertex AI.",
    },
    {
      title: "Pipeline Vision AI Engefotos",
      description:
        "Flujos de ingestión en campo, procesamiento de imágenes y generación automática de informes con LLMs especializados.",
    },
    {
      title: "Feature Store & Data Products",
      description:
        "Arquitectura de feature store multicloud, versionado de modelos y pipelines CI/CD para ML y analítica.",
    },
  ],

  articles: [
    {
      title: "Arquitectura de Pipelines Distribuidos con Dataflow",
      description: "Guía completa sobre diseño de pipelines ETL escalables en GCP",
    },
    {
      title: "BigQuery Performance Tuning: 10 Técnicas Esenciales",
      description: "Optimizaciones prácticas para reducir costos y mejorar velocidad",
    },
    {
      title: "Microservicios y Datos: Desafíos de Consistencia",
      description: "Estrategias para mantener la integridad de datos en arquitecturas distribuidas",
    },
  ],

  education: [
    { course: "Análisis y Desarrollo de Sistemas" },
    { course: "Posgrado en Arquitectura de Datos" },
  ],

  certSection: {
    title: "Rutas Databricks & Credenciales",
    desc: "Certificaciones oficiales que respaldan el liderazgo en arquitectura de datos, gobernanza e ingeniería.",
    databricksLabel: "Ruta Databricks",
    othersLabel: "Otras credenciales",
  },

  footer: {
    description: "Especialista en Arquitectura de Datos e Ingeniería de Sistemas Escalables",
  },
};
