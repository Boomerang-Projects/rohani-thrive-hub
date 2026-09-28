import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "sv" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "sv",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sv");

  useEffect(() => {
    const stored = window.localStorage.getItem("rohani-lang");
    if (stored === "en" || stored === "sv") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("rohani-lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = (sv: ReactNode, en: ReactNode) => (lang === "en" ? en : sv);
  return { lang, setLang, t };
}

/** Pick a plain string by language. */
export function useT() {
  const { lang } = useContext(LangContext);
  return (sv: string, en: string) => (lang === "en" ? en : sv);
}
