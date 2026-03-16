export type Lang = "pt" | "en" | "es";

export interface ResumeLocale {
  langLabel: string;

  hero: {
    devTitle: string;
  };

  stats: { value: string; label: string }[];

  profileSummary: string[];

  devHighlights: { title: string; desc: string }[];

  experience: {
    title: string;
    description: string;
    highlights: string[];
  }[];

  githubProjects: { subtitle: string; description: string }[];

  featuredProjectItems: { subtitle: string; description: string }[];

  orionCard: { badge: string; description: string };

  clients: { description: string }[];

  aiInitiatives: { title: string; description: string }[];

  articles: { title: string; description: string }[];

  education: { course: string }[];

  certSection: {
    title: string;
    desc: string;
    databricksLabel: string;
    othersLabel: string;
  };

  footer: { description: string };
}
