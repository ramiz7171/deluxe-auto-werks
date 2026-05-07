"use client";

import { useLang } from "@/components/LangProvider";
import { cn } from "@/lib/utils";

export default function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const next = lang === "en" ? "es" : "en";
  const label = lang === "en" ? t.lang.switchToEs : t.lang.switchToEn;

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-2 border border-border hover:border-accent transition-colors text-xs uppercase tracking-widest font-semibold",
        className
      )}
    >
      <span
        className={
          lang === "en" ? "text-text-primary" : "text-text-secondary"
        }
      >
        EN
      </span>
      <span aria-hidden className="text-border">
        /
      </span>
      <span
        className={
          lang === "es" ? "text-text-primary" : "text-text-secondary"
        }
      >
        ES
      </span>
    </button>
  );
}
