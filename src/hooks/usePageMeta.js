import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const SITE_URL = "https://muis.life";

/**
 * Pasang judul tab, meta description, dan canonical URL untuk satu halaman.
 * page = key di locales seo, misalnya "home" atau "portfolio".
 *
 * usePageMeta("portfolio", "/portfolio/");
 */
export default function usePageMeta(page, path) {
  const { t } = useLanguage();
  const { title, description } = t.seo[page];

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    if (path) document.querySelector('link[rel="canonical"]')?.setAttribute("href", SITE_URL + path);
  }, [title, description, path]);
}
