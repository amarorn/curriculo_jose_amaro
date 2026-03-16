import {
  BrainCircuit,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  GitMerge,
  Layers,
  Shield,
  Sparkles,
  Terminal,
} from "lucide-react";
import { LangSwitcher } from "@/components/LangSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  aiInitiatives,
  articles,
  clientHighlights,
  contactInfo,
  databricksCertifications,
  educationEntries,
  experienceEntries,
  featuredProjects,
  footerInfo,
  githubProjects,
  heroInfo,
  otherCertifications,
  socialLinks,
  techStack,
} from "@/data/resume";

const devStack = [
  { label: "Python", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30" },
  { label: "TypeScript", color: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
  { label: "Node.js", color: "bg-green-500/15 text-green-300 border-green-500/30" },
  { label: "React", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" },
  { label: "Django", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  { label: "Docker", color: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
  { label: "GCP", color: "bg-orange-500/15 text-orange-300 border-orange-500/30" },
  { label: "AWS", color: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
  { label: "BigQuery", color: "bg-purple-500/15 text-purple-300 border-purple-500/30" },
  { label: "Dataflow", color: "bg-pink-500/15 text-pink-300 border-pink-500/30" },
  { label: "Databricks", color: "bg-red-500/15 text-red-300 border-red-500/30" },
  { label: "CI/CD", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30" },
];

const devHighlightIcons = [Code2, Database, Cloud, BrainCircuit];
const devHighlightStyles = [
  { accent: "text-green-400", border: "border-green-500/20", bg: "bg-green-500/5" },
  { accent: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/5" },
  { accent: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/5" },
  { accent: "text-pink-400", border: "border-pink-500/20", bg: "bg-pink-500/5" },
];

const accentMap: Record<string, { badge: string; border: string; bg: string; dot: string }> = {
  violet: {
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    border: "border-violet-500/20 hover:border-violet-400/40",
    bg: "bg-violet-500/5",
    dot: "bg-violet-400",
  },
  green: {
    badge: "bg-green-500/10 border-green-500/20 text-green-300",
    border: "border-green-500/20 hover:border-green-400/40",
    bg: "bg-green-500/5",
    dot: "bg-green-400",
  },
  blue: {
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    border: "border-blue-500/20 hover:border-blue-400/40",
    bg: "bg-blue-500/5",
    dot: "bg-blue-400",
  },
  pink: {
    badge: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    border: "border-pink-500/20 hover:border-pink-400/40",
    bg: "bg-pink-500/5",
    dot: "bg-pink-400",
  },
  orange: {
    badge: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    border: "border-orange-500/20 hover:border-orange-400/40",
    bg: "bg-orange-500/5",
    dot: "bg-orange-400",
  },
};

export default function Home8() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0d1117]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex items-center gap-2.5 font-medium text-[#e6edf3] hover:text-green-400 transition-colors min-w-0"
          >
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
              <Terminal className="w-4 h-4 text-green-400" />
            </div>
            <span className="truncate hidden sm:inline">
              {heroInfo.name}
            </span>
          </a>
          <nav className="flex items-center gap-3">
            <LangSwitcher />
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero */}
        <section className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-7">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#7d8590]">
                <span className="text-green-400">$</span>
                <span>whoami</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#e6edf3] leading-tight tracking-tight">
                {heroInfo.name}
              </h1>
              <p className="text-lg text-green-400 font-mono font-medium">{t.hero.devTitle}</p>
            </div>

            <div className="space-y-3 text-[#8b949e] leading-relaxed">
              {t.profileSummary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {devStack.map((tech) => (
                <span
                  key={tech.label}
                  className={`px-3 py-1 rounded-full border text-xs font-mono font-medium ${tech.color}`}
                >
                  {tech.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const cls =
                  "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#8b949e] hover:text-[#e6edf3] hover:border-white/20 transition-all";
                return item.href ? (
                  <a key={item.label} href={item.href} className={cls}>
                    <Icon className="w-4 h-4 text-green-400/80" />
                    {item.value}
                  </a>
                ) : (
                  <span key={item.label} className={cls}>
                    <Icon className="w-4 h-4 text-green-400/80" />
                    {item.value}
                  </span>
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-sm text-[#e6edf3] hover:bg-white/[0.08] hover:border-green-400/40 transition-all"
                  >
                    <Icon className="w-4 h-4 text-green-400" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {heroInfo.photo?.src && (
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src={heroInfo.photo.src}
                  alt={heroInfo.photo.alt}
                  className="w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-green-300 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {heroInfo.photo.highlight}
                  </span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3">
              {t.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 text-center"
                >
                  <p
                    className={`text-2xl font-bold font-mono ${
                      s.label.includes("Exp") || s.label.includes("Anos") || s.label.includes("Años")
                        ? "text-green-400"
                        : s.label.includes("Cloud")
                          ? "text-blue-400"
                          : "text-purple-400"
                    }`}
                  >
                    {s.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#7d8590] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dev Highlights */}
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-green-400">$</span>
            <h2 className="text-lg font-semibold text-[#e6edf3]">cat expertise.md</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.devHighlights.map((item, i) => {
              const Icon = devHighlightIcons[i];
              const style = devHighlightStyles[i];
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border ${style.border} ${style.bg} p-5 space-y-3`}
                >
                  <Icon className={`w-6 h-6 ${style.accent}`} />
                  <div>
                    <p className={`text-sm font-semibold ${style.accent}`}>{item.title}</p>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-green-400">$</span>
              <h2 className="text-lg font-semibold text-[#e6edf3]">git log --oneline</h2>
            </div>
            <span className="text-xs font-mono text-[#7d8590]">{experienceEntries.length} commits</span>
          </div>
          <div className="space-y-4">
            {experienceEntries.map((exp, idx) => {
              const loc = t.experience[idx];
              return (
                <div
                  key={exp.id}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-green-400/30 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-3 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#7d8590]">
                          {String(experienceEntries.length - idx).padStart(2, "0")}
                        </span>
                        <ChevronRight className="w-3 h-3 text-green-400" />
                        <h3 className="text-base font-semibold text-[#e6edf3]">{loc?.title ?? exp.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 pl-7">
                        <span className="text-sm text-green-400 font-medium">{exp.company}</span>
                        {exp.companyLink && (
                          <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 text-[#7d8590] hover:text-green-400" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pl-7 xl:pl-0 text-xs font-mono text-[#7d8590]">
                      <span>{exp.date}</span>
                      <span className="hidden xl:block">·</span>
                      <span className="hidden xl:block">{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#8b949e] mb-4 pl-7 leading-relaxed">
                    {loc?.description ?? exp.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 pl-7">
                    {(loc?.highlights ?? exp.highlights).map((h, hi) => (
                      <div key={hi} className="flex items-start gap-2 text-xs text-[#8b949e]">
                        <GitMerge className="w-3.5 h-3.5 text-green-400/60 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-green-400">$</span>
            <h2 className="text-lg font-semibold text-[#e6edf3]">ls ./tech-stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((stack) => {
              const Icon = stack.icon;
              return (
                <div
                  key={stack.category}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#8b949e]" />
                    </div>
                    <p className="text-sm font-semibold text-[#e6edf3]">{stack.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.06] text-xs font-mono text-[#8b949e]"
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

        {/* GitHub Projects */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-green-400">$</span>
              <h2 className="text-lg font-semibold text-[#e6edf3]">gh repo list --source</h2>
            </div>
            <a
              href="https://github.com/amarorn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#7d8590] hover:text-green-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              github.com/amarorn
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {githubProjects.map((project, idx) => {
              const accent = accentMap[project.accentColor] ?? accentMap.green;
              const loc = t.githubProjects[idx];
              return (
                <div
                  key={project.name}
                  className={`rounded-2xl border ${accent.border} ${accent.bg} p-5 space-y-3 transition-colors flex flex-col`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${accent.dot}`} />
                      <p className="text-sm font-semibold text-[#e6edf3]">{project.name}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7d8590] hover:text-[#e6edf3] flex-shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs font-mono text-[#7d8590]">
                    {loc?.subtitle ?? project.subtitle}
                  </p>
                  <p className="text-xs text-[#8b949e] leading-relaxed flex-1">
                    {loc?.description ?? project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 rounded border text-[10px] font-mono ${accent.badge}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects & Clients */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-green-400">$</span>
              <h2 className="text-lg font-semibold text-[#e6edf3]">ls ./projects</h2>
            </div>
            <div className="space-y-3">
              {featuredProjects.map((project, idx) => {
                const Icon = project.icon;
                const loc = t.featuredProjectItems[idx];
                return (
                  <div
                    key={project.title}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 flex gap-4 hover:border-blue-400/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#7d8590] uppercase tracking-wider">
                        {loc?.subtitle ?? project.subtitle}
                      </p>
                      <p className="text-sm font-semibold text-[#e6edf3]">{project.title}</p>
                      <p className="text-xs text-[#8b949e] mt-1">
                        {loc?.description ?? project.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-green-400 uppercase tracking-wider">
                    {t.orionCard.badge}
                  </p>
                  <p className="text-sm font-semibold text-[#e6edf3]">Orion Framework</p>
                  <p className="text-xs text-[#8b949e] mt-1">{t.orionCard.description}</p>
                  <a
                    href="https://orion-ake.pages.dev/architecture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-mono text-green-400 hover:underline"
                  >
                    orion-ake.pages.dev <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-green-400">$</span>
              <h2 className="text-lg font-semibold text-[#e6edf3]">ls ./clients</h2>
            </div>
            <div className="space-y-3">
              {clientHighlights.map((client, idx) => {
                const loc = t.clients[idx];
                return (
                  <div
                    key={client.name}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-2 hover:border-purple-400/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-[#e6edf3]">{client.name}</p>
                        <p className="text-xs font-mono text-purple-400">{client.role}</p>
                      </div>
                      {client.link && (
                        <a
                          href={client.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7d8590] hover:text-[#e6edf3]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-[#8b949e]">{loc?.description ?? client.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {client.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Initiatives */}
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-green-400">$</span>
            <h2 className="text-lg font-semibold text-[#e6edf3]">ls ./ai-initiatives</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {aiInitiatives.map((item, idx) => {
              const loc = t.aiInitiatives[idx];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-pink-500/20 bg-pink-500/5 p-5 space-y-3 hover:border-pink-400/40 transition-colors"
                >
                  <div>
                    <p className="text-xs font-mono text-pink-400">{item.client}</p>
                    <h3 className="text-sm font-semibold text-[#e6edf3] mt-1">
                      {loc?.title ?? item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8b949e] leading-relaxed">
                    {loc?.description ?? item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20 text-xs font-mono text-pink-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Articles */}
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-green-400">$</span>
            <h2 className="text-lg font-semibold text-[#e6edf3]">cat articles.json</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {articles.map((article, idx) => {
              const loc = t.articles[idx];
              return (
                <a
                  key={article.title}
                  href={article.link}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-2 hover:border-blue-400/30 hover:bg-white/[0.04] transition-all block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-400">{article.platform}</span>
                    <span className="text-xs text-[#7d8590]">{article.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#e6edf3]">{loc?.title ?? article.title}</p>
                  <p className="text-xs text-[#8b949e]">{loc?.description ?? article.description}</p>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7d8590]" />
                </a>
              );
            })}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-green-400">$</span>
              <h2 className="text-lg font-semibold text-[#e6edf3]">cat education.json</h2>
            </div>
            <div className="space-y-3">
              {educationEntries.map((edu, idx) => {
                const loc = t.education[idx];
                return (
                  <div
                    key={edu.course}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
                  >
                    <p className="text-xs font-mono text-[#7d8590]">{edu.period}</p>
                    <p className="text-sm font-semibold text-[#e6edf3] mt-1">
                      {loc?.course ?? edu.course}
                    </p>
                    <p className="text-xs text-[#8b949e]">{edu.institution}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-green-400">$</span>
              <h2 className="text-lg font-semibold text-[#e6edf3]">ls ./certifications</h2>
            </div>
            <div className="space-y-2">
              {databricksCertifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 flex items-start gap-3"
                >
                  <Shield className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#e6edf3]">{cert.name}</p>
                    <p className="text-xs text-[#7d8590] mt-0.5">{cert.details}</p>
                  </div>
                </div>
              ))}
              {otherCertifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 flex items-start gap-3"
                >
                  <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#e6edf3]">{cert.name}</p>
                    <p className="text-xs text-[#7d8590] mt-0.5">{cert.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#7d8590]">
            <span className="text-green-400">~/</span> {t.footer.description}
          </div>
          <p className="text-xs text-[#7d8590]">{footerInfo.copyright}</p>
        </footer>
      </main>
    </div>
  );
}
