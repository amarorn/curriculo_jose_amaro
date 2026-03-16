import { createContext, useContext, useEffect, useState } from "react";
import { en } from "@/locales/en";
import { es } from "@/locales/es";
import { pt } from "@/locales/pt";
import type { Lang, ResumeLocale } from "@/locales/types";

const LOCALES: Record<Lang, ResumeLocale> = { pt, en, es };
const STORAGE_KEY = "resume-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: ResumeLocale;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as Lang) || "pt";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: LOCALES[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
