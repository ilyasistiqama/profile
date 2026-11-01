import { describe, expect, test } from "vitest";
import { getPageSeo, serializeStructuredData } from "./seo";
import projects from "../data/projects";
import profile from "../data/profile";

describe("SEO derived from portfolio content", () => {
  test("identifies the real person, current employer, portrait, and social profiles", () => {
    const meta = getPageSeo("home", "en", "/", "https://portfolio.example");
    const person = meta.structuredData["@graph"].find((node) => node["@type"] === "Person");
    expect(person.name).toBe(profile.fullName);
    expect(person.jobTitle).toBe("Staff IT");
    expect(person.worksFor.name).toBe("PT. Terik Indonesia Inside");
    expect(person.image).toContain("https://portfolio.example/");
    expect(person.sameAs).toContain("https://www.instagram.com/life0fays/");
    expect(person.sameAs).toContain("https://www.threads.com/@life0fays");
    expect(person.sameAs.some((url) => url.startsWith("mailto:"))).toBe(false);
  });

  test("lists the real projects with their descriptions and in-page anchors", () => {
    const meta = getPageSeo("portfolio", "id", "/portfolio/", "https://new-domain.example");
    const page = meta.structuredData["@graph"].find((node) => node["@type"] === "CollectionPage");
    expect(page.mainEntity.numberOfItems).toBe(projects.length);
    projects.forEach((project, index) => {
      const item = page.mainEntity.itemListElement[index].item;
      expect(item.name).toBe(project.project_name);
      expect(item.description).toBe(project.description.id);
      expect(item.url).toBe(`https://new-domain.example/portfolio/#project-${project.id}`);
    });
    expect(meta.locale).toBe("id_ID");
  });

  test("excludes unknown pages from indexing and safely serializes script content", () => {
    const meta = getPageSeo("not_found", "en", "/unknown/", "https://portfolio.example");
    expect(meta.robots).toBe("noindex, follow");
    expect(meta.structuredData["@graph"]).toEqual([]);
    const serialized = serializeStructuredData({ name: "</script><script>alert(1)</script>" });
    expect(serialized).not.toContain("<");
    expect(JSON.parse(serialized).name).toContain("</script>");
  });
});
