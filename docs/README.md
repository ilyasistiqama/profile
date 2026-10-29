# Dokumentasi muis.life

Dokumentasi teknis website portofolio **muis.life** — situs statis milik Muh. Ilyas Istiqama yang dibangun dengan React + Vite + Tailwind CSS v4.

## Daftar isi

| Dokumen | Isi |
| --- | --- |
| [architecture.md](./architecture.md) | Arsitektur aplikasi, alur render, routing, state global, tema, bahasa, dan SEO |
| [components.md](./components.md) | Referensi folder, komponen layout/UI, section, halaman, dan hook |
| [content-guide.md](./content-guide.md) | Cara mengubah teks, proyek, pengalaman, skill, dan menambah halaman baru |
| [deployment.md](./deployment.md) | Build, prerender, GitHub Pages, dan checklist SEO |
| [development.md](./development.md) | Setup lokal, perintah npm, testing, dan linting |

## Ringkasan proyek

| Aspek | Keterangan |
| --- | --- |
| Jenis | Personal portfolio / company-profile satu orang |
| Domain | https://muis.life (custom domain GitHub Pages) |
| Bahasa | Bilingual: Inggris (`en`) dan Indonesia (`id`) |
| Tema | Light & dark mode, disimpan di `localStorage` |
| Konten | Data statis di `src/data`, teks di `src/locales` |
| Form kontak | Dikirim ke Formspree (`profile.formEndpoint`) |
| SEO | Meta statis di `index.html` + prerender per halaman saat build |
| Output build | Folder `build/` (bukan `dist/`) |

## Stack

- **React 18** — UI berbasis komponen
- **Vite 8** — dev server dan bundler
- **Tailwind CSS v4** — styling lewat `@tailwindcss/vite` (tanpa file config terpisah)
- **React Router 7** — routing sisi klien (`BrowserRouter`)
- **Font Awesome SVG** — ikon diimpor per ikon, bukan seluruh paket
- **Vitest + Testing Library** — unit test dengan environment `jsdom`
- **ESLint 10** — aturan JS, React Hooks, dan React Refresh
- **gh-pages** — deploy ke GitHub Pages

## Peta folder singkat

```
index.html              Template HTML: meta SEO, font, script tema, Google Analytics
public/                 Aset statis (favicon, CNAME, sitemap, robots, manifest)
scripts/prerender.js    Generator HTML per halaman setelah build (SEO)
src/
  main.jsx              Entry point: router + provider tema & bahasa
  App.jsx               Definisi route
  index.css             Tailwind + token warna tema + animasi
  pages/                Satu komponen per URL
  sections/             Blok konten besar (Intro, About, Projects, ...)
  components/layout/    Navbar, Footer, Layout, SplashScreen, BackToTop
  components/ui/        Button, FilterTabs, ImageCarousel, Lightbox, SectionHeader
  context/              State tema & bahasa (Context + Provider)
  hooks/                useInView, useScrollState, usePageMeta
  data/                 Konten terstruktur: profile, experiences, projects, skills
  locales/              Semua teks EN/ID
  assets/images/        Foto profil, background, logo perusahaan, screenshot proyek
  test/                 Setup Vitest
docs/                   Dokumentasi ini
```

## Mulai cepat

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build + prerender ke build/
npm run preview  # cek hasil build secara lokal
```

Panduan lengkap ada di [development.md](./development.md).
