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
  databricksCertifications,
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
  otherCertifications,
  leadershipSpotlight,
} from "@/data/resume";

export default function Home() {
  const heroModel =
    resumeModels.find((model) => model.id === "ia") ?? resumeModels[0];
  const databricksCerts = databricksCertifications;
  const otherCerts = otherCertifications;

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
          <div className="rounded-[32px] border border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.3),_rgba(2,6,23,0.95))] text-slate-50 p-8 md:p-10 shadow-[0_25px_80px_rgba(2,6,23,0.55)]">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-slate-300 mb-6">
              <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-primary to-secondary" />
              {heroModel.heroBadge}
              </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{heroInfo.name}</h1>
                <p className="text-base md:text-lg text-slate-200">{heroModel.heroSubtitle}</p>
                {heroModel.summary.map((paragraph, idx) => (
                  <p
                    key={`hero-summary-${idx}`}
                    className="text-sm md:text-base text-slate-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                {heroModel.focusHighlights?.length ? (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {heroModel.focusHighlights.map((focus) => (
                      <span
                        key={`hero-focus-${focus}`}
                        className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wide text-slate-100"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 text-sm text-slate-200">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const base =
                      "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm";
                    if (item.href) {
                      return (
                        <a key={item.label} href={item.href} className={`${base} hover:border-primary/60`}>
                          <Icon className="w-4 h-4 text-primary" />
                          {item.value}
                        </a>
                      );
                    }
                    return (
                      <div key={item.label} className={base}>
                        <Icon className="w-4 h-4 text-primary" />
                        {item.value}
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                        <Icon className="w-4 h-4" />
                        {link.label}
                </a>
                    );
                  })}
                </div>
              </div>
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
                    <p className="text-xs uppercase tracking-[0.4em] text-white">{heroInfo.title}</p>
                    <p className="text-lg font-semibold">{heroInfo.name}</p>
                    <p className="text-sm text-slate-200">{heroInfo.tagline}</p>
            </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 text-white p-8 md:p-10 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Leadership</p>
                <h2 className="text-3xl font-bold">{leadershipSpotlight.title}</h2>
                <p className="text-slate-300">{leadershipSpotlight.subtitle}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.5em] text-slate-500">
                CTO • BeAnalytic & AFX
              </span>
                </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4 text-sm text-slate-200 leading-relaxed">
                {leadershipSpotlight.summary.map((paragraph, idx) => (
                  <p key={`lead-summary-${idx}`}>{paragraph}</p>
                ))}
                </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {leadershipSpotlight.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs tracking-[0.2em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 p-10 text-white space-y-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Trilha profissional</p>
                <h2 className="text-3xl font-bold">Stack Técnico & Perfil</h2>
                <p className="text-slate-300">
                  Tecnologias, liderança e arquitetura que sustentam os resultados em clientes enterprise.
            </p>
          </div>
              <span className="text-xs uppercase tracking-[0.5em] text-slate-500">
                BEANALYTIC • ENTERPRISE
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                      key={tech.category}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4"
                >
                      <div className="flex items-center justify-between">
                    <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {tech.category}
                          </p>
                          <p className="text-lg font-semibold text-white">{tech.category}</p>
                    </div>
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {tech.items.map((item) => (
                      <span
                            key={item}
                            className="px-3 py-1 rounded-full border border-white/15 text-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4 text-slate-200">
                  <h3 className="text-lg font-semibold text-white">Perfil Profissional</h3>
                  {profileSummary.map((paragraph, idx) => (
                    <p key={`profile-${idx}`} className="text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-white">Framework Orion</h3>
                  <p className="text-sm text-slate-300">
                    Arquitetura autoral que organiza contextos de dados, governança e delivery em camadas resilientes.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {orionOverview.map((layer) => (
                      <div key={layer.title} className="rounded-xl border border-white/10 p-4 space-y-2">
                        <p className="text-xs uppercase tracking-[0.3em] text-primary">{layer.title}</p>
                        <p className="text-sm text-slate-200">{layer.description}</p>
                        <ul className="space-y-1 text-xs text-slate-400">
                          {layer.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://orion-ake.pages.dev/architecture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-primary hover:text-secondary"
                  >
                    orion-ake.pages.dev/architecture
                  </a>
                </div>
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

          <div className="space-y-6">
          <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Code2 className="w-6 h-6 text-secondary" />
                Trilha Databricks
            </h3>
              <div className="space-y-3 rounded-2xl border border-border bg-card/80 p-5">
                {databricksCerts.map((cert) => (
                  <div key={cert.name} className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">{cert.name}</p>
                    <p>{cert.details}</p>
                    {cert.extra && <p className="text-xs">{cert.extra}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Outras credenciais
              </h3>
              <div className="space-y-3 rounded-2xl border border-border bg-card/60 p-5">
                {otherCerts.map((cert) => (
                  <div key={cert.name} className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">{cert.name}</p>
                    <p>{cert.details}</p>
                    {cert.extra && <p className="text-xs">{cert.extra}</p>}
                  </div>
                ))}
              </div>
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
