import { afterEach, describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { LanguageContext } from "../context/LanguageContext";
import usePageMeta from "./usePageMeta";

const originalHead = document.head.innerHTML;
afterEach(() => { document.head.innerHTML = originalHead; });

function Metadata({ page, path, lang }) {
  usePageMeta(page, path);
  return <span>{lang}</span>;
}

function Page({ page, path, lang = "en" }) {
  return <LanguageContext.Provider value={{ lang }}><Metadata page={page} path={path} lang={lang} /></LanguageContext.Provider>;
}

describe("client-side SEO navigation", () => {
  test("updates social metadata and schema on navigation and language changes", () => {
    const { rerender } = render(<Page page="home" path="/" />);
    const homeTitle = document.title;
    rerender(<Page page="portfolio" path="/portfolio/" lang="id" />);
    expect(document.title).not.toBe(homeTitle);
    expect(document.querySelector('meta[property="og:title"]').content).toBe(document.title);
    expect(document.querySelector('meta[name="twitter:title"]').content).toBe(document.title);
    expect(document.querySelector('meta[property="og:locale"]').content).toBe("id_ID");
    expect(document.querySelector('link[rel="canonical"]').href).toBe(`${window.location.origin}/portfolio/`);
    const graph = JSON.parse(document.getElementById("structured-data").textContent)["@graph"];
    expect(graph.find((node) => node["@type"] === "CollectionPage").inLanguage).toBe("id");
  });

  test("sets noindex for unknown routes and restores indexing on known pages", () => {
    const { rerender } = render(<Page page="not_found" />);
    expect(document.querySelector('meta[name="robots"]').content).toBe("noindex, follow");
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    rerender(<Page page="contact" path="/contact/" />);
    expect(document.querySelector('meta[name="robots"]').content).toContain("index, follow");
    expect(document.querySelector('link[rel="canonical"]').href).toBe(`${window.location.origin}/contact/`);
    expect(document.querySelectorAll('#structured-data')).toHaveLength(1);
  });
});
