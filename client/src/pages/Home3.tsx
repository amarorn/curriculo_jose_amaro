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
  resumeModels,
  orionOverview,
  socialLinks,
  stats,
  talks,
  techStack,
  databricksCertifications,
  otherCertifications,
} from "@/data/resume";

export default function Home3() {
  const heroModel =
    resumeModels.find((model) => model.id === "ia") ?? resumeModels[0];
  const databricksCerts = databricksCertifications;
  const otherCerts = otherCertifications;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-rose-100/80 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center shadow-lg shadow-rose-200/60">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-lg text-slate-900">{heroInfo.name}</p>
              <p className="text-xs tracking-[0.3em] uppercase text-slate-500">{heroInfo.title}</p>
            </div>
          </div>
          <LayoutSwitcher active="C" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-[32px] bg-white/80 border border-rose-100 shadow-xl shadow-rose-200/40 p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-rose-400">Perfil</p>
              <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
                {heroInfo.name}
              </h1>
              <p className="text-base text-slate-600">{heroModel.heroSubtitle}</p>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              {heroModel.summary.map((paragraph, idx) => (
                <p key={`model-summary-${idx}`} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {heroModel.focusHighlights?.length ? (
              <div className="flex flex-wrap gap-2">
                {heroModel.focusHighlights.map((focus) => (
                  <span
                    key={`hero-focus-${focus}`}
                    className="px-4 py-2 rounded-full text-xs font-semibold tracking-[0.3em] uppercase border border-rose-100 text-slate-500"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-rose-50 p-4"
                >
                  <p className={`text-2xl font-semibold ${stat.colorClass.replace("text-", "text-")}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 rounded-[32px] bg-white/70 border border-amber-100 shadow-xl shadow-amber-200/40 p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4 text-amber-500" />
                    {item.value}
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-white/70 px-4 py-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-white/70 px-4 py-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-medium shadow-lg shadow-slate-900/20"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              {activeModel.focusHighlights?.map((focus) => (
                <span
                  key={focus}
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.3em] bg-rose-100 text-rose-500"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Framework Orion</h2>
              <p className="text-sm text-slate-500">
                Arquitetura própria para pipelines resilientes e governáveis
              </p>
            </div>
            <a
              href="https://orion-ake.pages.dev/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400 hover:text-amber-500"
            >
              orion-ake.pages.dev/architecture
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {orionOverview.map((layer) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-rose-100 bg-white/80 p-6 space-y-3 shadow-lg shadow-rose-200/30"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-rose-400">{layer.title}</p>
                <p className="text-sm text-slate-500">{layer.description}</p>
                <ul className="space-y-2 text-xs text-slate-500">
                  {layer.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="w-1 h-1 rounded-full bg-rose-400 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-[32px] border border-rose-100 bg-white/80 p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Experiência</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Linha do tempo</p>
            </div>
            <div className="space-y-8">
              {experienceEntries.map((experience) => (
                <div key={experience.id} className="space-y-3 border-l-4 border-rose-200 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
                        {experience.date}
                      </p>
                      <h3 className="text-lg font-semibold">{experience.title}</h3>
                      <p className="text-sm text-rose-500">
                        {experience.company}
                        {experience.companyLink && (
                          <a
                            href={experience.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-xs uppercase tracking-[0.3em] text-slate-400"
                          >
                            {experience.companyLink.replace(/^https?:\/\//, "")}
                          </a>
                        )}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 uppercase tracking-[0.3em]">
                      {experience.location}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600">{experience.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {experience.highlights.map((highlight) => (
                      <div key={`${experience.id}-${highlight}`} className="flex gap-2 text-sm text-slate-600">
                        <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-amber-100 bg-white/80 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Clientes</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-amber-500">Impacto</span>
              </div>
              <div className="space-y-4">
                {clientHighlights.map((client) => (
                  <div key={client.name} className="rounded-2xl border border-amber-100 p-4 space-y-2">
                    <p className="text-sm font-semibold">{client.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-500">{client.role}</p>
                    <p className="text-sm text-slate-600">{client.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-rose-100 bg-white/80 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Stack TNK</h3>
              <div className="space-y-3">
                {techStack.map((stack) => (
                  <div key={stack.category}>
                    <p className="text-xs uppercase tracking-[0.3em] text-rose-400">{stack.category}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {stack.items.map((item) => (
                        <span key={item} className="px-3 py-1 rounded-full bg-rose-100 text-xs text-rose-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="rounded-[32px] border border-amber-100 bg-white/80 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">IA & LLM</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Aplicações</p>
            </div>
            <div className="space-y-4">
              {aiInitiatives.map((initiative) => (
                <div
                  key={initiative.title}
                  className="rounded-2xl border border-amber-100/60 p-4 space-y-2"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                    {initiative.client}
                  </p>
                  <h4 className="text-base font-semibold text-slate-900">{initiative.title}</h4>
                  <p className="text-sm text-slate-600">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-rose-100 bg-white/80 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Projetos</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Produto</p>
            </div>
            <div className="space-y-4">
              {featuredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className="flex items-start gap-3 rounded-2xl border border-rose-100/60 p-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
                        {project.subtitle}
                      </p>
                      <h4 className="text-base font-semibold text-slate-900">{project.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{project.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-[32px] border border-white/60 bg-white/80 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-rose-500" />
              <h3 className="text-lg font-semibold">Publicações & Palestras</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  className="rounded-2xl border border-rose-100/70 p-4 hover:border-rose-300 transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
                    {article.platform} • {article.date}
                  </p>
                  <h4 className="text-base font-semibold text-slate-900">{article.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{article.description}</p>
                </a>
              ))}
            </div>
            <div className="space-y-3">
              {talks.map((talk) => (
                <div
                  key={talk.title}
                  className="rounded-2xl border border-amber-100 p-4 flex items-start gap-3"
                >
                  <Mic2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                      {talk.event} • {talk.date}
                    </p>
                    <h4 className="text-base font-semibold text-slate-900">{talk.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{talk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[32px] border border-white/60 bg-white/80 p-6">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-semibold">Formação & Certificações</h3>
            </div>
            <div className="space-y-4">
              {educationEntries.map((education) => (
                <div key={education.course} className="rounded-2xl border border-amber-100 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-500">{education.period}</p>
                  <h4 className="text-base font-semibold text-slate-900">{education.course}</h4>
                  <p className="text-sm text-slate-600">{education.institution}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Trilha Databricks</p>
              {databricksCertifications.map((cert) => (
                <div key={cert.name} className="rounded-2xl border border-rose-100 p-4 space-y-1">
                  <h4 className="text-base font-semibold text-slate-900">{cert.name}</h4>
                  <p className="text-sm text-slate-600">{cert.details}</p>
                  {cert.extra && <p className="text-xs text-slate-500">{cert.extra}</p>}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Outras credenciais</p>
              {otherCertifications.map((cert) => (
                <div key={cert.name} className="rounded-2xl border border-amber-100 p-4 space-y-1">
                  <h4 className="text-base font-semibold text-slate-900">{cert.name}</h4>
                  <p className="text-sm text-slate-600">{cert.details}</p>
                  {cert.extra && <p className="text-xs text-slate-500">{cert.extra}</p>}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {professionalDifferentials.map((diff) => (
                <div key={diff} className="flex gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-b from-rose-500 to-amber-400 mt-2" />
                  {diff}
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="text-center text-sm text-slate-500 border-t border-rose-100/80 pt-8">
          <p>{footerInfo.description}</p>
          <p className="text-slate-400 mt-1">{footerInfo.copyright}</p>
        </footer>
      </main>
    </div>
  );
}

