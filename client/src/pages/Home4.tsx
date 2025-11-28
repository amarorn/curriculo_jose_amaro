import {
  Activity,
  BookOpen,
  Brain,
  Calendar,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Mic2,
  Server,
  Zap,
} from "lucide-react";
import { useMemo } from "react";
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
  socialLinks,
  orionOverview,
  stats,
  talks,
  techStack,
} from "@/data/resume";

export default function Home4() {
  const heroModel =
    resumeModels.find((model) => model.id === "ia") ?? resumeModels[0];

  const derivedMetrics = useMemo(
    () => [
      {
        label: "Experiências",
        value: experienceEntries.length,
        caption: "carreira",
      },
      {
        label: "Clientes Enterprise",
        value: clientHighlights.length,
        caption: "impacto",
      },
      {
        label: "Iniciativas IA",
        value: aiInitiatives.length,
        caption: "copilotos",
      },
      {
        label: "Certificações",
        value: certifications.length,
        caption: "credenciais",
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">{heroInfo.name}</p>
              <p className="text-xs text-slate-400">{heroInfo.title}</p>
            </div>
          </div>
          <LayoutSwitcher active="D" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 space-y-6 shadow-2xl shadow-slate-900/40">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.4em] text-teal-400">
                Data & Strategy
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
                {heroInfo.name}
              </h1>
              <p className="text-lg text-slate-400">{heroModel.heroSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
              {heroModel.summary.map((paragraph, idx) => (
                <p key={`intro-${idx}`} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {heroModel.focusHighlights?.map((focus) => (
                <span
                  key={focus}
                  className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-[0.3em] text-teal-300"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Sinais de Dados</p>
            <div className="grid grid-cols-2 gap-4">
              {derivedMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-teal-400 mt-1">
                    {metric.label}
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-500 mt-1">
                    {metric.caption}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4 text-teal-300" />
                    {item.value}
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-center gap-2">
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-2">
                    {content}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-semibold uppercase tracking-[0.3em]"
                  >
                    <Icon className="w-3 h-3" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">Framework Orion</h2>
              <p className="text-sm text-slate-400">
                Referencial arquitetural autoral para pipelines e governança de dados
              </p>
            </div>
            <a
              href="https://orion-ake.pages.dev/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-teal-300 hover:text-amber-300"
            >
              orion-ake.pages.dev/architecture
            </a>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {orionOverview.map((layer) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3 shadow-lg shadow-teal-500/10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-teal-300">{layer.title}</p>
                <p className="text-sm text-slate-300">{layer.description}</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  {layer.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="w-1 h-1 rounded-full bg-teal-300 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-slate-900/70 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Linha do Tempo</h2>
              <span className="text-xs uppercase tracking-[0.4em] text-slate-500">Data Ops</span>
            </div>
            <div className="space-y-6">
              {experienceEntries.map((experience) => (
                <div key={experience.id} className="border-l-4 border-teal-400/60 pl-4 space-y-2">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-teal-300">{experience.date}</p>
                      <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                      <p className="text-sm text-slate-400 flex items-center gap-2">
                        <Globe className="w-3 h-3" />
                        {experience.company}
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {experience.location}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300">{experience.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {experience.highlights.map((highlight) => (
                      <div key={`${experience.id}-${highlight}`} className="flex gap-2 text-sm text-slate-300">
                        <Activity className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Clientes</p>
                <span className="text-xs uppercase tracking-[0.3em] text-teal-400">KPIs</span>
              </div>
              <div className="space-y-3">
                {clientHighlights.map((client) => (
                  <div key={client.name} className="rounded-2xl border border-white/10 p-4">
                    <p className="text-sm font-semibold text-white">{client.name}</p>
                    <p className="text-xs text-teal-300 uppercase tracking-[0.3em]">{client.role}</p>
                    <p className="text-xs text-slate-400 mt-1">{client.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Stack Analítica</p>
              <div className="space-y-3">
                {techStack.map((stack) => (
                  <div key={stack.category}>
                    <p className="text-xs uppercase tracking-[0.3em] text-teal-400">{stack.category}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {stack.items.slice(0, 4).map((item) => (
                        <span key={item} className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-200">
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

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">AI & LLM Pipelines</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-teal-300">MLOps</span>
            </div>
            <div className="space-y-3">
              {aiInitiatives.map((initiative) => (
                <div key={initiative.title} className="rounded-2xl border border-white/10 p-4 space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{initiative.client}</p>
                  <p className="text-base font-semibold text-white">{initiative.title}</p>
                  <p className="text-sm text-slate-300">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Projetos</p>
              {featuredProjects.map((project) => (
                <div key={project.title} className="flex items-start gap-3 border border-white/10 rounded-2xl p-4">
                  <Brain className="w-5 h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {project.subtitle}
                    </p>
                    <p className="text-base font-semibold text-white">{project.title}</p>
                    <p className="text-sm text-slate-300 mt-1">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Publicações & Talks</p>
              <div className="space-y-3">
                {articles.slice(0, 2).map((article) => (
                  <div key={article.title} className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-amber-400 mt-1" />
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">
                        {article.platform} • {article.date}
                      </p>
                      <a href={article.link} className="text-sm text-white hover:text-amber-300">
                        {article.title}
                      </a>
                    </div>
                  </div>
                ))}
                {talks.slice(0, 2).map((talk) => (
                  <div key={talk.title} className="flex items-start gap-3">
                    <Mic2 className="w-4 h-4 text-rose-400 mt-1" />
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">
                        {talk.event} • {talk.date}
                      </p>
                      <p className="text-sm text-white">{talk.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-teal-300" />
              <h3 className="text-lg font-semibold">Formação</h3>
            </div>
            {educationEntries.map((education) => (
              <div key={education.course} className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{education.period}</p>
                <p className="text-base font-semibold text-white">{education.course}</p>
                <p className="text-sm text-slate-300">{education.institution}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold">Certificações</h3>
            </div>
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-2xl border border-white/10 p-4">
                <p className="text-base font-semibold text-white">{cert.name}</p>
                <p className="text-sm text-slate-300">{cert.details}</p>
                {cert.extra && <p className="text-xs text-slate-500 mt-1">{cert.extra}</p>}
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-rose-300" />
              <h3 className="text-lg font-semibold">Diferenciais</h3>
            </div>
            <div className="space-y-2">
              {professionalDifferentials.map((diff) => (
                <div key={diff} className="flex gap-3 text-sm text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-b from-teal-300 to-rose-300 mt-2" />
                  {diff}
                </div>
              ))}
            </div>
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

