import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/locales/types";

const LANGS: { id: Lang; flag: string; short: string }[] = [
  { id: "pt", flag: "🇧🇷", short: "PT" },
  { id: "en", flag: "🇺🇸", short: "EN" },
  { id: "es", flag: "🇪🇸", short: "ES" },
];

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {LANGS.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono transition-all",
            lang === l.id
              ? "bg-green-400/15 border border-green-400/40 text-green-300"
              : "border border-transparent text-[#7d8590] hover:text-[#e6edf3] hover:border-white/10",
          )}
          aria-label={`Switch to ${l.id.toUpperCase()}`}
          aria-pressed={lang === l.id}
        >
          <span>{l.flag}</span>
          <span>{l.short}</span>
        </button>
      ))}
    </div>
  );
}
