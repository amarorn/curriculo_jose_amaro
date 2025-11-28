import {
  BookOpen,
  Calendar,
  Database,
  ExternalLink,
  Mic2,
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
  orionOverview,
  socialLinks,
  stats,
  talks,
  techStack,
  databricksCertifications,
  otherCertifications,
} from "@/data/resume";

export default function Home2() {
  const defaultModelId = resumeModels.find((model) => model.id === "ia")?.id ?? resumeModels[0].id;
  const [selectedModel, setSelectedModel] = useState(defaultModelId);
  const activeModel =
    resumeModels.find((model) => model.id === selectedModel) ?? resumeModels[0];
  const databricksCerts = databricksCertifications;
  const otherCerts = otherCertifications;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">{heroInfo.name}</p>
              <p className="text-xs text-slate-400">{heroInfo.title}</p>
            </div>
          </div>
          <LayoutSwitcher active="B" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
              Visão Geral
            </p>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
                {heroInfo.name}
              </h1>
              <p className="text-lg text-primary/80 mt-2">{activeModel.heroSubtitle}</p>
            </div>
            {profileSummary.map((paragraph, idx) => (
              <p key={`intro-${idx}`} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className={`text-2xl font-semibold ${stat.colorClass}`}>{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const baseClass =
                  "flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200";
                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} className={`${baseClass} hover:border-primary/60`}>
                      <Icon className="w-4 h-4 text-primary/70" />
                      {item.value}
                    </a>
                  );
                }
                return (
                  <div key={item.label} className={baseClass}>
                    <Icon className="w-4 h-4 text-primary/70" />
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
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            {heroInfo.photo?.src && (
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 overflow-hidden">
                <div className="aspect-[3/4] w-full">
                  <img
                    src={heroInfo.photo.src}
                    alt={heroInfo.photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white">
                    {heroInfo.photo.highlight}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent space-y-1 text-white">
                  <p className="text-xs uppercase tracking-[0.4em] text-primary/80">{heroInfo.title}</p>
                  <p className="text-lg font-semibold">{heroInfo.name}</p>
                  <p className="text-sm text-slate-200">{heroInfo.tagline}</p>
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6">
              <div className="flex flex-wrap gap-2">
                {resumeModels.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => setSelectedModel(model.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border transition-colors ${
                      selectedModel === model.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-white/20 text-slate-400 hover:border-primary/40"
                    }`}
                  >
                    {model.label}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {activeModel.summary.map((paragraph, idx) => (
                  <p key={`model-summary-${idx}`} className="text-sm text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {activeModel.focusHighlights?.map((focus) => (
                  <span
                    key={focus}
                    className="text-xs tracking-wide uppercase px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-300"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Clientes & Impactos</h2>
            <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
              BeAnalytic • Enterprise
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {clientHighlights.map((client) => (
              <div
                key={client.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-white">{client.name}</p>
                    <p className="text-sm text-primary/80">{client.role}</p>
                  </div>
                  {client.link && (
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary uppercase tracking-[0.3em]"
                    >
                      Visitar
                    </a>
                  )}
                </div>
                <p className="text-sm text-slate-300">{client.description}</p>
                <div className="flex flex-wrap gap-2">
                  {client.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">Linha do tempo</h2>
            <p className="text-sm text-slate-400">
              Trajetória profissional com foco em dados, IA e liderança técnica
            </p>
          </div>
          <div className="relative space-y-12 before:absolute before:left-6 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-white/20 before:to-transparent">
            {experienceEntries.map((experience, idx) => (
              <div key={experience.id} className="relative pl-16">
                <span className="absolute left-0 top-2 w-8 h-8 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  {idx < experienceEntries.length - 1 && (
                    <span className="absolute left-1/2 top-8 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" aria-hidden="true" />
                  )}
                </span>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 hover:border-primary/40 transition-colors">
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2">
                    <div>
                      <p className="text-xs text-primary/80 uppercase tracking-[0.3em]">
                        {experience.date}
                      </p>
                      <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                      <p className="text-sm text-primary/80">
                        {experience.company}
                        {experience.companyLink && (
                          <a
                            href={experience.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-xs text-slate-400 uppercase tracking-[0.3em]"
                          >
                            {experience.companyLink.replace(/^https?:\/\//, "")}
                          </a>
                        )}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">
                      {experience.location}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300">{experience.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {experience.highlights.map((highlight) => (
                      <div key={`${experience.id}-${highlight}`} className="flex gap-3 text-sm text-slate-300">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Stack técnico</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Cloud • Dados • IA
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((stack) => {
              const Icon = stack.icon;
              return (
                <div
                  key={stack.category}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-lg font-semibold text-white">{stack.category}</p>
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stack.color} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {stack.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">Framework Orion</h2>
              <p className="text-sm text-slate-400">
                Arquitetura autoral para pipelines resilientes e governáveis
              </p>
            </div>
            <a
              href="https://orion-ake.pages.dev/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-primary hover:text-secondary"
            >
              orion-ake.pages.dev/architecture
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {orionOverview.map((layer) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3 hover:border-primary/40 transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{layer.title}</p>
                <p className="text-sm text-slate-300">{layer.description}</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  {layer.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">IA, LLM & Visão</h2>
              <p className="text-sm text-slate-400">
                Iniciativas de IA aplicadas em clientes enterprise
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
              BeAnalytic • Squads de IA
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiInitiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4"
              >
                <div>
                  <p className="text-sm text-primary/90 uppercase tracking-[0.3em]">
                    {initiative.client}
                  </p>
                  <h3 className="text-lg font-semibold text-white mt-1">{initiative.title}</h3>
                </div>
                <p className="text-sm text-slate-300 flex-1">{initiative.description}</p>
                <div className="flex flex-wrap gap-2">
                  {initiative.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Projetos & Produtos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-primary/70">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-slate-300 mt-3">{project.description}</p>
                  </div>
                  <Icon className="w-10 h-10 text-primary/50 flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold text-white">Artigos Técnicos</h2>
            </div>
            <div className="space-y-4">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-primary/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-primary/70 uppercase tracking-[0.3em]">
                        {article.platform} • {article.date}
                      </p>
                      <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-300 mt-2">{article.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Mic2 className="w-6 h-6 text-secondary" />
              <h2 className="text-xl font-semibold text-white">Palestras & Conferências</h2>
            </div>
            <div className="space-y-4">
              {talks.map((talk) => (
                <div
                  key={talk.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-secondary/80 uppercase tracking-[0.3em]">
                        {talk.event}
                      </p>
                      <h3 className="text-lg font-semibold text-white">{talk.title}</h3>
                    </div>
                    <Calendar className="w-4 h-4 text-secondary/70 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {talk.date} • {talk.location}
                  </p>
                  <p className="text-sm text-slate-300 mt-2">{talk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-white">Formação Acadêmica</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {educationEntries.map((education) => (
              <div
                key={education.course}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm text-primary/70 uppercase tracking-[0.3em]">
                  {education.period}
                </p>
                <h3 className="text-lg font-semibold text-white">{education.course}</h3>
                <p className="text-sm text-slate-300">{education.institution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary/70">Certificações</p>
              <h2 className="text-2xl font-semibold text-white">Trilhas Databricks & Credenciais</h2>
              <p className="text-sm text-slate-400">
                Certificações oficiais que suportam liderança em arquitetura, governança e engenharia de dados.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" /> Databricks
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary" /> Outras credenciais
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Trilha Databricks</p>
              {databricksCerts.map((cert) => (
                <div key={cert.name} className="rounded-2xl border border-primary/20 bg-black/20 p-4 space-y-1">
                  <p className="text-sm font-semibold text-white">{cert.name}</p>
                  <p className="text-sm text-slate-300">{cert.details}</p>
                  {cert.extra && <p className="text-xs text-slate-500">{cert.extra}</p>}
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-secondary/30 bg-secondary/5 p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">Outras credenciais</p>
              {otherCerts.map((cert) => (
                <div key={cert.name} className="rounded-2xl border border-secondary/20 bg-black/20 p-4 space-y-1">
                  <p className="text-sm font-semibold text-white">{cert.name}</p>
                  <p className="text-sm text-slate-300">{cert.details}</p>
                  {cert.extra && <p className="text-xs text-slate-500">{cert.extra}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-secondary" />
            <h2 className="text-xl font-semibold text-white">Diferenciais Profissionais</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {professionalDifferentials.map((diff) => (
              <div
                key={diff}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-primary to-secondary mt-2" />
                {diff}
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>{footerInfo.description}</p>
          <p className="text-slate-600 mt-1">{footerInfo.copyright}</p>
        </footer>
      </main>
    </div>
  );
}

