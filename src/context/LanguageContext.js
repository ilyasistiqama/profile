import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

// Pakai di komponen: const { t, lang, toggleLang } = useLanguage();
export function useLanguage() {
  return useContext(LanguageContext);
}
