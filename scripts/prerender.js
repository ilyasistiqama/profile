// Generate HTML with page content, metadata, and structured data before JavaScript runs.
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { env } from "node:process";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const origin = new URL(env.SITE_URL || `https://${readFileSync("public/CNAME", "utf8").trim()}`).origin;
const template = readFileSync("build/index.html", "utf8");
const escape = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
mkdirSync("node_modules/.cache", { recursive: true });
const serverDir = mkdtempSync(resolve("node_modules/.cache/seo-render-"));

try {
  await build({
    logLevel: "warn",
    define: { "import.meta.env.VITE_SITE_URL": JSON.stringify(origin) },
    build: { ssr: "src/entry-server.jsx", outDir: serverDir, copyPublicDir: false, emptyOutDir: true },
  });
  const { renderPage, getPageSeo, SEO_ROUTES, serializeStructuredData } = await import(pathToFileURL(resolve(serverDir, "entry-server.js")).href);
  function render(page, path) {
    const meta = getPageSeo(page, "en", path, origin);
    const tags = [
      `<title>${escape(meta.title)}</title>`,
      `<meta name="description" content="${escape(meta.description)}" />`,
      `<meta name="robots" content="${meta.robots}" />`,
      ...(!meta.noindex ? [`<link rel="canonical" href="${escape(meta.url)}" />`] : []),
      ...Object.entries({
        title: meta.title, description: meta.description, type: "website", url: meta.url,
        site_name: meta.siteName, locale: meta.locale,
        image: meta.image, "image:alt": meta.imageAlt, "image:width": "1200", "image:height": "630", "image:type": "image/png",
      }).map(([key, value]) => `<meta property="og:${key}" content="${escape(value)}" />`),
      ...Object.entries({ card: "summary_large_image", title: meta.title, description: meta.description, image: meta.image, "image:alt": meta.imageAlt })
        .map(([key, value]) => `<meta name="twitter:${key}" content="${escape(value)}" />`),
      `<script id="structured-data" type="application/ld+json">${serializeStructuredData(meta.structuredData)}</script>`,
    ];
    return template
      .replace(/<title>.*?<\/title>/s, "")
      .replace(/<meta\b[^>]*(?:name="(?:description|robots|keywords|twitter:[^"]*)"|property="og:[^"]*")[^>]*>/g, "")
      .replace(/<link\b[^>]*rel="canonical"[^>]*>/g, "")
      .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "")
      .replace("</head>", `${tags.join("\n")}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${renderPage(path)}</div>`);
  }
  for (const { page, path } of SEO_ROUTES) {
    const dir = `build${path}`;
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}index.html`, render(page, path));
    console.log(`prerender: ${path} (content + metadata)`);
  }
  writeFileSync("build/404.html", render("not_found", "/404/"));
  writeFileSync("build/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  writeFileSync("build/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SEO_ROUTES.map(({ path }) => `  <url><loc>${escape(origin + path)}</loc></url>`).join("\n")}\n</urlset>\n`);
} finally {
  rmSync(serverDir, { recursive: true, force: true });
}
