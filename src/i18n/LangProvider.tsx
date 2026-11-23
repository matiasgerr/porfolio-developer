import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LangContext, type Lang } from './context';

const readInitialLang = (): Lang => {
  try {
    return localStorage.getItem('lang') === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
};

const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem('lang', next);
    } catch {
      /* storage unavailable: language just won't persist */
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: (es: string, en: string) => (lang === 'en' ? en : es) }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LangProvider;
