"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { dictionaries, type Dict, type Lang } from "@/lib/i18n";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LangCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "daw-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as Lang | null)
        : null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
      document.documentElement.lang = stored;
      return;
    }
    if (
      typeof navigator !== "undefined" &&
      navigator.language?.toLowerCase().startsWith("es")
    ) {
      setLangState("es");
      document.documentElement.lang = "es";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  };

  return (
    <LangCtx.Provider value={{ lang, setLang, t: dictionaries[lang] as Dict }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
