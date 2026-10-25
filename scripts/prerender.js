/**
 * Dijalankan setelah `vite build`.
 *
 * GitHub Pages hanya punya file statis. Tanpa script ini, URL seperti /portfolio
 * dilayani lewat 404.html (status 404), sehingga Google enggan mengindeksnya.
 * Script ini membuat build/<halaman>/index.html untuk setiap halaman, masing-masing
 * dengan judul, deskripsi, dan canonical URL sendiri, jadi semuanya status 200.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import en from "../src/locales/en.js";

const SITE_URL = "https://muis.life";
const template = readFileSync("build/index.html", "utf8");

const pages = [
  { path: "/", seo: en.seo.home },
  { path: "/experience/", seo: en.seo.experience },
  { path: "/portfolio/", seo: en.seo.portfolio },
  { path: "/contact/", seo: en.seo.contact },
];

const escape = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function render({ path, seo }, extraHead = "") {
  const url = SITE_URL + path;
  const title = escape(seo.title);
  const description = escape(seo.description);

  return template
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/(<meta name="description"\s+content=")[^"]*"/, `$1${description}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta property="og:description"\s+content=")[^"]*"/, `$1${description}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta name="twitter:description"\s+content=")[^"]*"/, `$1${description}"`)
    .replace("</head>", `${extraHead}</head>`);
}

for (const page of pages) {
  const dir = "build" + page.path;
  mkdirSync(dir, { recursive: true });
  writeFileSync(dir + "index.html", render(page));
  console.log(`prerender: ${page.path}`);
}

// Halaman 404 untuk URL yang memang tidak ada: jangan diindeks
writeFileSync(
  "build/404.html",
  render({ path: "/404", seo: en.seo.not_found }, '  <meta name="robots" content="noindex" />\n')
);
console.log("prerender: 404.html");
