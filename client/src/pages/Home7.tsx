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

export default function Home7() {
  const heroModel =
    resumeModels.find((model) => model.id === "ia") ?? resumeModels[0];

  return (
    <div className="min-h-screen bg-[#fdfae7] text-[#1c1917]">
      <header className="sticky top-0 z-30 border-b border-[#f4e3a1] bg-[#fffef3]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#f4e3a1] flex items-center justify-center text-[#a16207]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-[#1c1917]">{heroInfo.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d97706]">
                {heroInfo.title}
              </p>
            </div>
          </div>
          <LayoutSwitcher active="G" className="text-[#a16207]" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d97706]">Resumo</p>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1c1917]">{heroInfo.name}</h1>
            <div className="space-y-3 text-sm text-[#44403c]">
              {profileSummary.map((paragraph, idx) => (
                <p key={`profile-${idx}`}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-2 text-sm text-[#6b4e16]">
              {heroModel.summary.map((paragraph, idx) => (
                <p key={`hero-summary-${idx}`}>{paragraph}</p>
              ))}
            </div>
            {heroModel.focusHighlights?.length ? (
              <div className="flex flex-wrap gap-2">
                {heroModel.focusHighlights.map((focus) => (
                  <span
                    key={`hero-focus-${focus}`}
                    className="px-4 py-1 rounded-full border border-[#f4e3a1] text-xs uppercase tracking-[0.3em] text-[#a16207]"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="lg:col-span-2 rounded-3xl border border-[#f4e3a1] bg-white p-6 space-y-4">
            <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.3em] text-[#a16207]">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-[#f4e3a1]/60 px-3 py-4 flex flex-col items-center gap-2 hover:border-[#d97706]"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-[#57534e]">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4 text-[#d97706]" />
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
              <h2 className="text-2xl font-semibold text-[#1c1917]">Framework Orion</h2>
              <p className="text-sm text-[#a16207]">
                Modelagem que ancora camadas, fluxo e governança das pipelines
              </p>
            </div>
            <a
              href="https://orion-ake.pages.dev/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-[#d97706] hover:text-[#a16207]"
            >
              orion-ake.pages.dev/architecture
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {orionOverview.map((layer) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-[#f4e3a1] bg-white p-6 space-y-3 shadow-lg shadow-[#f4e3a1]/60"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#d97706]">{layer.title}</p>
                <p className="text-sm text-[#57534e]">{layer.description}</p>
                <ul className="space-y-2 text-xs text-[#78716c]">
                  {layer.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#d97706] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#f4e3a1] bg-white p-6 space-y-4">
            <h2 className="text-lg font-semibold text-[#1c1917]">Trajetória</h2>
            <div className="space-y-4">
              {experienceEntries.map((experience) => (
                <div key={experience.id} className="border-l-4 border-[#fbbf24] pl-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#1c1917]">{experience.title}</p>
                    <span className="text-xs text-[#a16207] uppercase tracking-[0.3em]">
                      {experience.date}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d97706]">
                    {experience.company}
                  </p>
                  <p className="text-sm text-[#57534e]">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#f4e3a1] bg-white p-6 space-y-4">
            <h2 className="text-lg font-semibold text-[#1c1917]">Clientes & Stack</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {clientHighlights.map((client) => (
                <div key={client.name} className="rounded-2xl border border-[#f4e3a1]/70 p-4 space-y-2">
                  <p className="text-sm font-semibold text-[#1c1917]">{client.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d97706]">{client.role}</p>
                  <p className="text-xs text-[#78716c]">{client.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-[#a16207]">
              {techStack.flatMap((stack) => stack.items).slice(0, 10).map((item) => (
                <span key={item} className="px-3 py-1 rounded-full border border-[#f4e3a1]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#f4e3a1] bg-white p-6 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#d97706]" />
              <h3 className="text-lg font-semibold text-[#1c1917]">Publicações</h3>
            </div>
            <div className="space-y-3">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  className="flex items-start gap-3 rounded-2xl border border-[#f4e3a1]/70 p-4 hover:border-[#d97706]"
                >
                  <ExternalLink className="w-4 h-4 text-[#d97706] mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#fbbf24]">
                      {article.platform} • {article.date}
                    </p>
                    <p className="text-sm font-semibold text-[#1c1917]">{article.title}</p>
                    <p className="text-xs text-[#57534e]">{article.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#f4e3a1] bg-white p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Mic2 className="w-5 h-5 text-[#d97706]" />
              <h3 className="text-lg font-semibold text-[#1c1917]">Talks</h3>
            </div>
            <div className="space-y-3">
              {talks.map((talk) => (
                <div key={talk.title} className="rounded-2xl border border-[#f4e3a1]/70 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#fbbf24]">
                    {talk.event} • {talk.date}
                  </p>
                  <p className="text-sm font-semibold text-[#1c1917]">{talk.title}</p>
                  <p className="text-xs text-[#57534e]">{talk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#f4e3a1] bg-white p-6 space-y-4">
          <h3 className="text-lg font-semibold text-[#1c1917]">IA, Projetos & Iniciativas</h3>
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d97706]">IA</p>
              {aiInitiatives.map((initiative) => (
                <div key={initiative.title} className="rounded-2xl border border-[#f4e3a1]/60 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#fbbf24]">
                    {initiative.client}
                  </p>
                  <p className="text-sm font-semibold text-[#1c1917]">{initiative.title}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d97706]">Projetos</p>
              {featuredProjects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-[#f4e3a1]/60 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#fbbf24]">
                    {project.subtitle}
                  </p>
                  <p className="text-sm font-semibold text-[#1c1917]">{project.title}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d97706]">Stack</p>
              <div className="flex flex-wrap gap-2 text-xs text-[#a16207]">
                {techStack.flatMap((stack) => stack.items).slice(10, 20).map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full border border-[#f4e3a1]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#f4e3a1] pt-8 text-center text-xs uppercase tracking-[0.3em] text-[#a16207]">
          <p>{footerInfo.description}</p>
          <p className="text-[#d97706] mt-1">{footerInfo.copyright}</p>
        </footer>
      </main>
    </div>
  );
}


