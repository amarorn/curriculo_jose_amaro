import {
  BookOpen,
  Calendar,
  Database,
  ExternalLink,
  Mic2,
  Zap,
} from "lucide-react";
import { LayoutSwitcher } from "@/components/LayoutSwitcher";
import {
  aiInitiatives,
  articles,
  clientHighlights,
  contactInfo,
  experienceEntries,
  featuredProjects,
  footerInfo,
  heroInfo,
  profileSummary,
  resumeModels,
  orionOverview,
  socialLinks,
  talks,
  techStack,
} from "@/data/resume";

export default function Home5() {
  const heroModel =
    resumeModels.find((model) => model.id === "ia") ?? resumeModels[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-200 text-emerald-900 flex items-center justify-center shadow-lg shadow-emerald-200/80">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-lg">{heroInfo.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                {heroInfo.title}
              </p>
            </div>
          </div>
          <LayoutSwitcher active="E" className="text-emerald-500" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-emerald-100 bg-white p-8 shadow-2xl shadow-emerald-100/70 space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                Visão Estratégica
              </p>
              <h1 className="text-4xl font-semibold text-slate-900">{heroInfo.name}</h1>
              <p className="text-base text-slate-500">{heroModel.heroSubtitle}</p>
            </div>
            <div className="space-y-3 text-slate-600">
              {profileSummary.map((paragraph, idx) => (
                <p key={`profile-${idx}`} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {heroModel.summary.map((paragraph, idx) => (
              <p key={`hero-summary-${idx}`} className="text-sm text-slate-500 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {heroModel.focusHighlights?.length ? (
              <div className="flex flex-wrap gap-2">
                {heroModel.focusHighlights.map((focus) => (
                  <span
                    key={`hero-focus-${focus}`}
                    className="px-4 py-1 rounded-full border border-emerald-200 text-xs uppercase tracking-[0.3em] text-emerald-600"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-600 text-white p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/30 p-4 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4" />
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
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[#064e3b]">Framework Orion</h2>
              <p className="text-sm text-emerald-600">
                Arquitetura proprietária para pipelines resilientes e governáveis
              </p>
            </div>
            <a
              href="https://orion-ake.pages.dev/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-emerald-500 hover:text-emerald-700"
            >
              orion-ake.pages.dev/architecture
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {orionOverview.map((layer) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-emerald-100 bg-white p-6 space-y-3 shadow-lg shadow-emerald-100/60"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{layer.title}</p>
                <p className="text-sm text-emerald-700">{layer.description}</p>
                <ul className="space-y-2 text-xs text-emerald-600">
                  {layer.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">Clientes</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                Impacto
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {clientHighlights.map((client) => (
                <div key={client.name} className="rounded-2xl border border-emerald-100 p-4 space-y-2">
                  <p className="text-sm font-semibold text-slate-800">{client.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">{client.role}</p>
                  <p className="text-xs text-slate-500">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Stack</h3>
            <div className="space-y-3 text-sm">
              {techStack.map((stack) => (
                <div key={stack.category}>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">{stack.category}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {stack.items.slice(0, 3).map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Experiência</h3>
            <div className="space-y-4">
              {experienceEntries.map((experience) => (
                <div key={experience.id} className="border-l-4 border-emerald-300 pl-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{experience.title}</p>
                    <span className="text-xs text-slate-400 uppercase tracking-[0.3em]">
                      {experience.date}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                    {experience.company}
                  </p>
                  <p className="text-sm text-slate-500">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">IA & Pipelines</h3>
              <div className="space-y-3 mt-3">
                {aiInitiatives.map((initiative) => (
                  <div key={initiative.title} className="rounded-2xl border border-emerald-100 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                      {initiative.client}
                    </p>
                    <p className="text-sm font-semibold text-slate-800">{initiative.title}</p>
                    <p className="text-sm text-slate-500">{initiative.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Projetos</h3>
              <div className="space-y-3 mt-3">
                {featuredProjects.map((project) => (
                  <div key={project.title} className="rounded-2xl border border-emerald-100 p-4 flex items-start gap-3">
                    <Database className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                        {project.subtitle}
                      </p>
                      <p className="text-sm font-semibold text-slate-800">{project.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              Publicações
            </h3>
            <div className="space-y-3">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  className="flex items-start gap-3 rounded-2xl border border-emerald-100 p-4 hover:border-emerald-400"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-400 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                      {article.platform} • {article.date}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">{article.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{article.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Mic2 className="w-5 h-5 text-emerald-400" />
              Talks & Conferências
            </h3>
            <div className="space-y-3">
              {talks.map((talk) => (
                <div key={talk.title} className="rounded-2xl border border-emerald-100 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                    {talk.event} • {talk.date}
                  </p>
                  <p className="text-sm font-semibold text-slate-900">{talk.title}</p>
                  <p className="text-xs text-slate-500">{talk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-emerald-100 pt-8 text-center text-sm text-slate-500">
          <p>{footerInfo.description}</p>
          <p className="text-slate-400 mt-1">{footerInfo.copyright}</p>
        </footer>
      </main>
    </div>
  );
}


