import {
  BookOpen,
  Calendar,
  Code2,
  Database,
  ExternalLink,
  Mic2,
  Server,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { LayoutSwitcher } from "@/components/LayoutSwitcher";
import {
  aiInitiatives,
  articles,
  certifications,
  clientHighlights,
  contactInfo,
  educationEntries,
  experienceEntries,
  featuredProjects,
  footerInfo,
  heroInfo,
  professionalDifferentials,
  profileSummary,
  resumeModels,
  socialLinks,
  stats,
  talks,
  techStack,
} from "@/data/resume";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState(resumeModels[0].id);
  const activeModel =
    resumeModels.find((model) => model.id === selectedModel) ?? resumeModels[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
              <Database className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-bold text-lg text-foreground">{heroInfo.name}</p>
              <p className="text-xs text-muted-foreground">{heroInfo.title}</p>
            </div>
          </div>
          <LayoutSwitcher active="A" />
        </div>
      </header>

      <main className="container py-12 md:py-16">
        <section className="mb-16">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Escolha a versão do currículo
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {resumeModels.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    selectedModel === model.id
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-muted/60 text-muted-foreground border-transparent hover:border-border"
                  }`}
                >
                  {model.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {activeModel.heroBadge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
                {heroInfo.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-2 font-medium">
                {activeModel.heroSubtitle}
              </p>
              {activeModel.summary.map((paragraph, idx) => (
                <p
                  key={`${selectedModel}-summary-${idx}`}
                  className={`text-base text-muted-foreground leading-relaxed max-w-2xl ${
                    idx === activeModel.summary.length - 1 ? "mb-8" : "mb-4"
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {activeModel.focusHighlights?.length ? (
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeModel.focusHighlights.map((focus) => (
                    <span
                      key={`${selectedModel}-${focus}`}
                      className="px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold text-muted-foreground"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  if (item.href) {
                    return (
                <a
                        key={item.label}
                        href={item.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                        <Icon className="w-4 h-4" />
                        {item.value}
                      </a>
                    );
                  }
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Icon className="w-4 h-4" />
                      {item.value}
                </div>
                  );
                })}
              </div>

              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                <a
                      key={link.label}
                      href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
                >
                      <Icon className="w-4 h-4" />
                      {link.label}
                </a>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24 space-y-6">
                {stats.map((stat, idx) => (
                  <div key={stat.label}>
                    <p className={`text-2xl md:text-3xl font-bold ${stat.colorClass} mb-1`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    {idx < stats.length - 1 && <div className="h-px bg-border mt-6" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
              <h2 className="text-3xl font-bold text-foreground">
                Clientes & Impactos Recentes
              </h2>
              <p className="text-muted-foreground">
                Destaques da atuação como CTO da BeAnalytic e consultor enterprise
              </p>
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              BeAnalytic • Projetos Enterprise
            </span>
                </div>
          <div className="grid md:grid-cols-2 gap-6">
            {clientHighlights.map((client) => (
              <div
                key={client.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                    <p className="text-lg font-semibold text-foreground">{client.name}</p>
                    <p className="text-sm text-primary font-medium">{client.role}</p>
                  </div>
                  {client.link && (
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      Visitar
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{client.description}</p>
                <div className="flex flex-wrap gap-2">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border my-16" />

        <section className="mb-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-foreground">Stack Técnico</h2>
            <p className="text-muted-foreground">
              Tecnologias e metodologias que domino para arquitetar soluções escaláveis
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.category}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
                >
                  <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {tech.category}
                      </h3>
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Perfil Profissional</h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4 text-muted-foreground leading-relaxed">
            {profileSummary.map((paragraph, idx) => (
              <p key={`profile-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="h-px bg-border my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Experiência Profissional</h2>
          <div className="space-y-8">
            {experienceEntries.map((experience) => (
              <div key={experience.id} className="border-l-4 border-primary pl-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                    <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                    <p className="text-primary font-semibold flex items-center gap-2 flex-wrap">
                      {experience.company}
                      {experience.companyLink && (
                        <a
                          href={experience.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-primary font-semibold"
                        >
                          {experience.companyLink.replace(/^https?:\/\//, "")}
                        </a>
                      )}
                    </p>
                </div>
                  <span className="text-sm text-muted-foreground font-medium">{experience.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{experience.location}</p>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                  {experience.highlights.map((highlight) => (
                    <div key={`${experience.id}-${highlight}`} className="flex gap-3">
                  <Zap className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
        </section>

        {/* IA & LLM */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
              <h2 className="text-3xl font-bold text-foreground">IA, LLM Ops & Visão Computacional</h2>
              <p className="text-muted-foreground">
                Modelos proprietários, pipelines cognitivos e MLOps implementados em produção
              </p>
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Engefotos • Banco BV • ArcelorMittal
                </span>
              </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiInitiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4 hover:border-accent transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {initiative.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">{initiative.client}</p>
                </div>
                <p className="text-sm text-muted-foreground flex-1">{initiative.description}</p>
                <div className="flex flex-wrap gap-2">
                  {initiative.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tag}
                </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border my-16" />

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              Formação Acadêmica
            </h3>
            <div className="space-y-6">
              {educationEntries.map((education) => (
                <div key={education.course} className="border-l-4 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground">{education.course}</h4>
                  <p className="text-primary font-medium">{education.institution}</p>
                  <p className="text-sm text-muted-foreground">{education.period}</p>
              </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
              <Code2 className="w-6 h-6 text-secondary" />
              Certificações
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="border-l-4 border-accent pl-6">
                  <p className="font-semibold text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.details}</p>
                  {cert.extra && (
                    <p className="text-xs text-muted-foreground mt-1">{cert.extra}</p>
                  )}
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Projetos de Destaque</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg"
                >
              <div className="flex items-start justify-between mb-4">
                <div>
                      <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                      <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                </div>
                    <Icon className="w-6 h-6 text-primary/40" />
              </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            Publicações & Palestras
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                Artigos Técnicos
              </h3>
              <div className="space-y-4">
                {articles.map((article) => (
                  <a
                    key={article.title}
                    href={article.link}
                    className="block p-4 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-lg group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {article.platform} • {article.date}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary mt-1 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground">{article.description}</p>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <Mic2 className="w-5 h-5 text-accent" />
                Palestras & Conferências
              </h3>
              <div className="space-y-4">
                {talks.map((talk) => (
                  <div
                    key={talk.title}
                    className="p-4 rounded-lg bg-card border border-border hover:border-accent transition-all"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <Mic2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {talk.title}
                        </h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {talk.event} • {talk.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground ml-7">{talk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Diferenciais Profissionais</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalDifferentials.map((diff) => (
              <div
                key={diff}
                className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-primary to-secondary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{diff}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border my-16" />

        <footer className="text-center py-8 text-muted-foreground text-sm border-t border-border">
          <p>{footerInfo.copyright}</p>
          <p className="mt-2">{footerInfo.description}</p>
        </footer>
      </main>
    </div>
  );
}
