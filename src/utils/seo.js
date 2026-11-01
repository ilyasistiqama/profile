import profile from "../data/profile";
import experiences from "../data/experiences";
import projects from "../data/projects";
import skills from "../data/skills";
import portrait from "../assets/images/ilyas-formal.webp";
import en from "../locales/en";
import id from "../locales/id";

export const SEO_ROUTES = [
  { page: "home", path: "/" },
  { page: "experience", path: "/experience/" },
  { page: "portfolio", path: "/portfolio/" },
  { page: "contact", path: "/contact/" },
];

export function getPageSeo(page, lang, path, origin) {
  const t = lang === "id" ? id : en;
  const root = new URL("/", origin).href;
  const url = new URL(path, root).href;
  const personId = `${root}#person`;
  const websiteId = `${root}#website`;
  const current = experiences[0];
  const { title, description } = t.seo[page];
  const image = new URL("/og-image.png", root).href;
  const imageAlt = `${profile.displayName} — ${profile.role} · ${profile.location}`;
  const noindex = page === "not_found";
  const pageType = page === "home" ? "ProfilePage" : page === "contact" ? "ContactPage" : "CollectionPage";
  const pageNode = {
    "@type": pageType, "@id": `${url}#webpage`, url, name: title, description,
    inLanguage: lang, isPartOf: { "@id": websiteId }, about: { "@id": personId },
  };
  if (page === "home") pageNode.mainEntity = { "@id": personId };
  else pageNode.breadcrumb = { "@id": `${url}#breadcrumb` };
  if (page === "portfolio") {
    pageNode.mainEntity = {
      "@type": "ItemList", numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        item: {
          "@type": "CreativeWork", name: project.project_name,
          description: project.description[lang],
          url: `${url}#project-${project.id}`,
          ...(project.url ? { sameAs: project.url } : {}),
        },
      })),
    };
  }
  return {
    title, description, url, image, imageAlt, noindex,
    siteName: `${profile.displayName} | ${profile.role}`,
    locale: lang === "id" ? "id_ID" : "en_US",
    robots: noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": noindex ? [] : [
        { "@type": "WebSite", "@id": websiteId, url: root, name: `${profile.displayName} | ${profile.role}`, publisher: { "@id": personId }, inLanguage: ["en", "id"] },
        {
          "@type": "Person", "@id": personId, name: profile.fullName,
          alternateName: [profile.name, profile.displayName, profile.nickname],
          url: root, image: new URL(portrait, root).href, jobTitle: current.position[lang],
          description: t.about.description[0],
          worksFor: { "@type": "Organization", name: current.company, url: current.url },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas 17 Agustus 1945 Surabaya" },
          address: { "@type": "PostalAddress", addressLocality: "Surabaya", addressCountry: "ID" },
          knowsAbout: skills.map((skill) => skill.name),
          sameAs: profile.socials.filter((social) => social.href.startsWith("https://")).map((social) => social.href),
        },
        pageNode,
        ...(page === "home" ? [] : [{
          "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t.nav.home, item: root },
            { "@type": "ListItem", position: 2, name: t.nav[page === "portfolio" ? "project" : page], item: url },
          ],
        }]),
      ],
    },
  };
}

export function serializeStructuredData(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
