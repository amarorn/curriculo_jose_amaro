import type { ResumeLocale } from "./types";

export const en: ResumeLocale = {
  langLabel: "English",

  hero: {
    devTitle: "Senior Software & Data Engineer",
  },

  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "5+", label: "Cloud Platforms" },
    { value: "20+", label: "Critical Projects" },
  ],

  profileSummary: [
    "Data & Software Engineer with a solid track record on large-scale platforms, cloud computing, and system integration. Broad expertise in GCP, AWS, event-driven architecture, distributed pipelines (NRT/CDC), and data modeling for analytical and operational environments.",
    "Over a decade building critical data solutions, leading modernization, governance, performance, and digital transformation initiatives. Combines deep technical expertise with architectural vision, strong communication, and a focus on high-impact delivery.",
  ],

  devHighlights: [
    {
      title: "Full-Stack & Backend",
      desc: "REST APIs, microservices and interfaces with Node.js, Python, Django and React.",
    },
    {
      title: "Data Engineering",
      desc: "Distributed pipelines, ETL/ELT, BigQuery, Dataflow, Delta Lake and CDC streaming.",
    },
    {
      title: "Cloud & DevOps",
      desc: "GCP, AWS and Azure with Docker, CI/CD, ECS, Lambda and production observability.",
    },
    {
      title: "AI & LLM Ops",
      desc: "RAG, LLM copilots, Vertex AI, LangChain and computer vision pipelines.",
    },
  ],

  experience: [
    {
      title: "ASW & Senior Dev",
      description:
        "Solutions Architect and Senior Developer on product and engineering projects, with focus on cloud architecture, APIs and value delivery.",
      highlights: [
        "Solutions architecture and senior development on modern stack",
        "Product delivery and engineering with focus on quality and governance",
      ],
    },
    {
      title: "Senior Data Architect",
      description:
        "Responsible for architecting critical solutions in a hybrid environment, leading modernization tracks and coordinating the data engineering team dedicated to the Procurement area. Databricks + Azure stack (Delta Lake, Synapse and Purview) with medallion architecture.",
      highlights: [
        "Coordination of engineering squads focused on Procurement, aligning business, governance and SLAs",
        "Medallion architecture on Databricks Lakehouse over Azure Data Lake, Delta Live Tables and Unity Catalog",
        "Hybrid pipelines with streaming/CDC in Azure Data Factory, Event Hub and GCP/Node.js integrations",
        "Workload automation with UC4, BizAgi, Jira and end-to-end observability in ITSM",
        "Up to 35% reduction in critical procurement SLA and governance dashboard with lineage, quality score and FinOps",
      ],
    },
    {
      title: "CTO & Principal Data Architect",
      description:
        "Technical and strategic leadership in data solutions, generative AI and computer vision. Responsible for roadmaps, squads and product delivery for enterprise clients such as Banco BV, ArcelorMittal and Engefotos.",
      highlights: [
        "LLM copilots and RAG connected to BigQuery/Vertex AI (Banco BV & ArcelorMittal)",
        "Computer vision pipeline and generative reports for Engefotos",
        "Multi-cloud feature store, CDC and CI/CD pipelines for ML and analytics",
        "Creation of technical leadership guilds and BeAnalytic innovation programs",
      ],
    },
    {
      title: "Data Architect",
      description:
        "Strategic work on the evolution of the data platform, supporting credit, analytics and BI squads with domain-driven architecture, microservices and integration with cloud platforms (GCP & AWS).",
      highlights: [
        "Node.js microservices architecture with Pub/Sub and API Gateway",
        "BigQuery, BigTable, Firestore and Amazon S3 modeling",
        "UC4, BizAgi, Jira/Confluence orchestrations for critical flows",
        "Archimate drawings, Dataflow and agile cadence with remote teams",
      ],
    },
    {
      title: "IT Team Lead",
      description:
        "Leadership of full-stack teams in a complex architectural migration from monolith to microservices.",
      highlights: [
        "Monolith to microservices migration with API Gateways",
        "React Native, React.js and Node.js serving apps and portal",
        "AWS Elastic Beanstalk, ECS, Lambda and CI/CD automation",
        "PHP, Elasticsearch, Amazon S3 and RDS in hybrid environments",
      ],
    },
    {
      title: "Data Architect",
      description:
        "Data architecture for a streaming and telecom platform, delivering analytics pipelines, governance and consumption layers for distributed squads.",
      highlights: [
        "BigQuery, BigTable, Firestore and MongoDB",
        "Analytics pipelines with Dataflow, CDC and TDD",
        "Docker products, CI/CD pipelines and versioning",
        "Team enablement and data skills acceleration",
      ],
    },
    {
      title: "CTO",
      description:
        "Executive leadership of digital products, defining portfolio, architecture and technical capacity building for mobile/web squads.",
      highlights: [
        "TDD, DDD, Clean Code and technical stack governance",
        "React Native, React.js and automation with Docker Products",
        "Scalable architecture, Data Structures and observability",
        "Training and mentoring of technical leaders",
      ],
    },
    {
      title: "JavaScript Developer",
      description:
        "Full-stack development on commercial projects and internal products, delivering rich interfaces, Node.js/PHP APIs and integrations with databases and AWS services.",
      highlights: [
        "Modern JavaScript, React.js and React Native",
        "Node.js, PHP and domain-driven REST APIs",
        "AWS (Lambda, S3, RDS) and deploy automation",
        "Skills development practices and mentoring",
      ],
    },
  ],

  githubProjects: [
    {
      subtitle: "SaaS CRM & Sales Automation Platform",
      description:
        "Multi-tenant SaaS for relationship management, communication and real-time sales analytics with event streaming.",
    },
    {
      subtitle: "WhatsApp Analytics Platform",
      description:
        "Customer analytics platform via WhatsApp with Clean Architecture, Kubernetes (EKS) orchestration and infrastructure as code with Terraform.",
    },
    {
      subtitle: "Oracle → ClickHouse Pipeline with PySpark",
      description:
        "Data platform with PySpark orchestration, bronze/silver/gold layers, lineage catalog via FastAPI and Docker Compose infrastructure.",
    },
    {
      subtitle: "AI-Powered Personal Trainer",
      description:
        "Personalized workout app that uses AI to generate adaptive training plans. Monorepo with NestJS (Clean Architecture) backend and React/Vite frontend.",
    },
    {
      subtitle: "Modern Fullstack System",
      description:
        "Complete fullstack with FastAPI + Clean Architecture on the backend, React 18 + Framer Motion on the frontend and Docker/Nginx containerization.",
    },
  ],

  featuredProjectItems: [
    {
      subtitle: "Financial Management Web System",
      description:
        "Complete application for gyms and sports centers, using PHP, modern patterns and modular architecture.",
    },
    {
      subtitle: "USP Project",
      description:
        "Augmented reality applied to the Rosas de Ouro parade. Development with Python and containerized environments.",
    },
  ],

  orionCard: {
    badge: "Authored Framework",
    description: "Layered architecture for resilient and governable pipelines.",
  },

  clients: [
    { description: "Technical leadership in data and AI solutions for infrastructure, energy and retail." },
    { description: "Data mesh, process-oriented LLM copilots and BigQuery/Dataflow pipelines." },
    { description: "Dataflow + BigQuery pipeline modernization and hybrid on-prem + cloud integration." },
    { description: "Computer vision pipeline with LLMs for automated reports and field insights." },
  ],

  aiInitiatives: [
    {
      title: "Multi-channel LLM Copilots",
      description:
        "RAG platforms with hallucination monitoring, prompt governance and BigQuery/Vertex AI integration.",
    },
    {
      title: "Engefotos Vision AI Pipeline",
      description:
        "Field ingestion flows, image processing and automatic report generation with specialized LLMs.",
    },
    {
      title: "Feature Store & Data Products",
      description:
        "Multi-cloud feature store architecture, model versioning and CI/CD pipelines for ML and analytics.",
    },
  ],

  articles: [
    {
      title: "Distributed Pipeline Architecture with Dataflow",
      description: "Complete guide on designing scalable ETL pipelines on GCP",
    },
    {
      title: "BigQuery Performance Tuning: 10 Essential Techniques",
      description: "Practical optimizations to reduce costs and improve speed",
    },
    {
      title: "Microservices and Data: Consistency Challenges",
      description: "Strategies for maintaining data integrity in distributed architectures",
    },
  ],

  education: [
    { course: "Systems Analysis and Development" },
    { course: "Graduate Studies in Data Architecture" },
  ],

  certSection: {
    title: "Databricks Tracks & Credentials",
    desc: "Official certifications supporting leadership in data architecture, governance and engineering.",
    databricksLabel: "Databricks Track",
    othersLabel: "Other credentials",
  },

  footer: {
    description: "Data Architecture and Scalable Systems Engineering Specialist",
  },
};
