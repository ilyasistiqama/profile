// Validate the actual deployable HTML rather than just the metadata helper.
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";

const routes = ["/", "/experience/", "/portfolio/", "/contact/"];
const titles = new Set();
let origin;
for (const route of routes) {
  const html = readFileSync(`build${route}index.html`, "utf8");
  const { document } = new JSDOM(html).window;
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href");
  assert(canonical, `${route}: missing canonical URL`);
  origin ??= new URL(canonical).origin;
  assert.equal(canonical, `${origin}${route}`);
  assert(!titles.has(document.title), `${route}: duplicate title`);
  titles.add(document.title);
  assert.equal(document.querySelectorAll("h1").length, 1, `${route}: expected one page heading`);
  assert(document.querySelector("main")?.textContent.trim().length > 80, `${route}: missing prerendered content`);
  assert(!document.querySelector(".portfolio-splash"), `${route}: splash must not cover static content`);
  assert(!html.includes("site.invalid"), `${route}: unresolved metadata placeholder`);
  const description = document.querySelector('meta[name="description"]')?.content;
  assert(description?.length > 50, `${route}: missing description`);
  assert.equal(document.querySelector('meta[property="og:title"]')?.content, document.title);
  assert.equal(document.querySelector('meta[name="twitter:title"]')?.content, document.title);
  assert.equal(document.querySelector('meta[property="og:description"]')?.content, description);
  assert.equal(document.querySelector('meta[name="twitter:description"]')?.content, description);
  assert.equal(document.querySelector('meta[property="og:url"]')?.content, canonical);
  assert.equal(document.querySelectorAll('script[type="application/ld+json"]').length, 1);
  const schema = JSON.parse(document.getElementById("structured-data").textContent);
  const person = schema["@graph"].find((node) => node["@type"] === "Person");
  assert(person.name && person.sameAs.length >= 4, `${route}: incomplete identity`);
  assert.equal(new URL(person.image).origin, origin);
  for (const image of document.querySelectorAll("img[src]")) {
    const src = image.getAttribute("src");
    if (!src.startsWith("/")) continue;
    assert(existsSync(resolve("build", src.slice(1))), `${route}: missing image ${src}`);
  }
  if (route === "/portfolio/") {
    const page = schema["@graph"].find((node) => node["@type"] === "CollectionPage");
    for (const item of page.mainEntity.itemListElement) {
      const anchor = new URL(item.item.url).hash.slice(1);
      assert(document.getElementById(anchor), `Project schema points to a missing anchor: ${anchor}`);
    }
  }
}
const notFound = new JSDOM(readFileSync("build/404.html", "utf8")).window.document;
assert.equal(notFound.querySelector('meta[name="robots"]').content, "noindex, follow");
assert(!notFound.querySelector('link[rel="canonical"]'));
const sitemap = new JSDOM(readFileSync("build/sitemap.xml", "utf8"), { contentType: "text/xml" }).window.document;
assert.deepEqual([...sitemap.querySelectorAll("loc")].map((node) => node.textContent), routes.map((route) => origin + route));
assert(readFileSync("build/robots.txt", "utf8").includes(`Sitemap: ${origin}/sitemap.xml`));
const png = readFileSync("build/og-image.png");
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
console.log("SEO checks passed: static content, headings, metadata, schema, assets, social image, sitemap, and 404.");
