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
  clientHighlights,
  contactInfo,
  experienceEntries,
  featuredProjects,
  footerInfo,
  heroInfo,
  profileSummary,
  resumeModels,
  socialLinks,
  talks,
  techStack,
} from "@/data/resume";

export default function Home6() {
  const [selectedModel, setSelectedModel] = useState(resumeModels[0].id);
  const activeModel =
    resumeModels.find((model) => model.id === selectedModel) ?? resumeModels[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-black text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Database className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">{heroInfo.name}</p>
              <p className="text-xs text-slate-400 uppercase tracking-[0.3em]">
                {heroInfo.title}
              </p>
            </div>
          </div>
          <LayoutSwitcher active="F" className="text-slate-400" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6 shadow-2xl shadow-blue-500/20">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">Overview</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
              {heroInfo.name}
            </h1>
            <p className="text-lg text-slate-400">{activeModel.heroSubtitle}</p>
            <div className="space-y-3 text-sm text-slate-300">
              {profileSummary.map((paragraph, idx) => (
                <p key={`profile-${idx}`} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {resumeModels.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model.id)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] border transition-all ${
                    selectedModel === model.id
                      ? "bg-gradient-to-r from-blue-500 to-amber-400 text-black border-transparent shadow-lg shadow-blue-400/40"
                      : "border-white/30 text-slate-400 hover:text-white hover:border-amber-400"
                  }`}
                >
                  {model.label}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950 via-black to-indigo-950 p-6 space-y-4">
            <div className="grid sm:grid-cols-3 gap-4 text-center text-xs uppercase tracking-[0.3em]">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/10 px-4 py-3 flex flex-col gap-2 items-center hover:border-amber-400"
                  >
                    <Icon className="w-4 h-4 text-amber-400" />
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4 text-amber-400" />
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

        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Experiência</h2>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Timeline</p>
            </div>
            <div className="space-y-6">
              {experienceEntries.map((experience) => (
                <div key={experience.id} className="border-l-4 border-blue-500/60 pl-4 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-400">{experience.date}</p>
                      <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                      <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                        {experience.company}
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {experience.location}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950 to-slate-900 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-400">Clientes</p>
                <span className="text-xs uppercase tracking-[0.3em] text-blue-300">Impact</span>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                {clientHighlights.map((client) => (
                  <div key={client.name} className="rounded-2xl border border-white/10 p-4">
                    <p className="text-sm font-semibold text-white">{client.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-300">{client.role}</p>
                    <p className="text-xs text-slate-500 mt-1">{client.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Stack</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {techStack.flatMap((stack) => stack.items).slice(0, 12).map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-white/10 text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-white">Publicações</h3>
            </div>
            <div className="space-y-3">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 p-4 hover:border-amber-300"
                >
                  <ExternalLink className="w-4 h-4 text-amber-400 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                      {article.platform} • {article.date}
                    </p>
                    <p className="text-sm font-semibold text-white">{article.title}</p>
                    <p className="text-xs text-slate-400">{article.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mic2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Talks & Conferências</h3>
            </div>
            <div className="space-y-3">
              {talks.map((talk) => (
                <div key={talk.title} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                    {talk.event} • {talk.date}
                  </p>
                  <p className="text-sm font-semibold text-white">{talk.title}</p>
                  <p className="text-xs text-slate-400">{talk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">IA & Pipelines</h3>
            <div className="space-y-3">
              {aiInitiatives.map((initiative) => (
                <div key={initiative.title} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                    {initiative.client}
                  </p>
                  <p className="text-sm font-semibold text-white">{initiative.title}</p>
                  <p className="text-xs text-slate-400">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900 to-black p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">Projetos</h3>
            <div className="space-y-3">
              {featuredProjects.map((project) => (
                <div key={project.title} className="flex items-start gap-3 rounded-2xl border border-white/10 p-4">
                  <Database className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                      {project.subtitle}
                    </p>
                    <p className="text-sm font-semibold text-white">{project.title}</p>
                    <p className="text-xs text-slate-400">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          <p>{footerInfo.description}</p>
          <p className="text-slate-600 mt-1">{footerInfo.copyright}</p>
        </footer>
      </main>
    </div>
  );
}


