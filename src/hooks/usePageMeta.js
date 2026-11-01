import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getPageSeo, serializeStructuredData } from "../utils/seo";

function setMeta(attribute, name, content) {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.append(tag);
  }
  tag.setAttribute("content", content);
}

export default function usePageMeta(page, path) {
  const { lang } = useLanguage();
  useEffect(() => {
    const meta = getPageSeo(page, lang, path || window.location.pathname, window.location.origin);
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", meta.robots);
    for (const [key, value] of Object.entries({
      title: meta.title, description: meta.description, type: "website", url: meta.url,
      site_name: meta.siteName, locale: meta.locale,
      image: meta.image, "image:alt": meta.imageAlt, "image:width": "1200", "image:height": "630", "image:type": "image/png",
    })) setMeta("property", `og:${key}`, value);
    for (const [key, value] of Object.entries({ card: "summary_large_image", title: meta.title, description: meta.description, image: meta.image, "image:alt": meta.imageAlt })) {
      setMeta("name", `twitter:${key}`, value);
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (meta.noindex) canonical?.remove();
    else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = meta.url;
    }
    let schema = document.getElementById("structured-data");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "structured-data";
      schema.type = "application/ld+json";
      document.head.append(schema);
    }
    schema.textContent = serializeStructuredData(meta.structuredData);
  }, [page, path, lang]);
}
