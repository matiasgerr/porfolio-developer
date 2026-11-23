import { createContext, useContext } from 'react';

export type Lang = 'es' | 'en';

export interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Picks the string for the active language. */
  t: (es: string, en: string) => string;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'es',
  setLang: () => {},
  t: (es) => es,
});

export const useLang = () => useContext(LangContext);
