import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import en from "../locales/en";
import id from "../locales/id";

const locales = { en, id };

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (locales[saved]) return saved;
  } catch {
    // localStorage bisa diblokir (mode private), pakai default saja
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  const t = locales[lang];

  // Simpan pilihan bahasa (judul halaman diatur per halaman lewat usePageMeta)
  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // abaikan
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "id" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
