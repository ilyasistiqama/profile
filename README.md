# muis.life

Website portfolio pribadi Muh. Ilyas Istiqama. Dibuat dengan React, Vite, Tailwind CSS v4, dan React Router.

Dokumentasi lengkap ada di [docs/](./docs/README.md) — arsitektur, referensi komponen, panduan konten, build & deployment, serta pengembangan.

## Menjalankan

```bash
npm install
npm run dev       # server lokal di http://localhost:5173
npm test          # jalankan test (Vitest)
npm run lint      # cek kode dengan ESLint
npm run build     # build ke folder build/
npm run deploy    # build lalu upload ke GitHub Pages
```

## Struktur folder

```
index.html              Template HTML (meta SEO, font, script tema, Google Analytics)
public/                 File statis yang disalin apa adanya (favicon, CNAME, sitemap, og-image)
src/
  main.jsx              Titik awal: pasang router, tema, dan bahasa
  App.jsx               Daftar halaman (route)
  index.css             Satu-satunya file CSS: import Tailwind + warna tema light/dark

scripts/prerender.js    Dijalankan setelah build: buat HTML per halaman untuk SEO

  pages/                Satu file per halaman (URL), isinya menyusun section
  sections/             Blok konten besar: Hero, About, Stats, Skills, Experience, Projects, ...
  components/
    layout/             Navbar, Footer, tombol kembali ke atas, Layout pembungkus halaman
    ui/                 Komponen kecil yang dipakai ulang: Button, FilterTabs, Lightbox, ...

  data/                 Isi konten: pengalaman, proyek, skill, info pribadi
  locales/              Semua teks per bahasa (en.js, id.js)
  context/              State global bahasa & tema: *Context.js (hook) + *Provider.jsx (komponen)
  hooks/                Logika yang dipakai ulang: useInView, useScrollState
  assets/images/        Foto dan gambar proyek
  test/                 Setup test
```

## Mengubah konten

| Mau mengubah... | Buka file |
| --- | --- |
| Teks di halaman (EN/ID) | `src/locales/en.js` dan `src/locales/id.js` |
| Pengalaman kerja | `src/data/experiences.js` |
| Proyek | `src/data/projects.js` (gambar di `src/assets/images/project/`) |
| Skill | `src/data/skills.js` (ikon dari [Font Awesome](https://fontawesome.com/search)) |
| Email, sosmed, link CV, IPK | `src/data/profile.js` |
| Warna tema | variabel di bagian atas `src/index.css` |

## Catatan

- **Dark mode** dikontrol lewat atribut `data-theme` di `<html>`. Di Tailwind pakai prefix `dark:`.
- **Warna tema** dipakai sebagai class Tailwind: `bg-bg`, `bg-bg-alt`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `bg-accent`.
- **GitHub Pages & SEO**: setelah `vite build`, `scripts/prerender.js` membuat `build/<halaman>/index.html` untuk tiap halaman (judul, deskripsi, canonical sendiri), jadi `/portfolio/` dll. dilayani dengan status 200 dan bisa diindeks Google. Judul/deskripsi tiap halaman ada di `seo` pada `src/locales/en.js`. Halaman baru: tambahkan juga ke daftar di `scripts/prerender.js` dan `public/sitemap.xml`.
- **Ikon** memakai Font Awesome versi SVG: import ikon yang dibutuhkan saja, contoh `import { faLaravel } from "@fortawesome/free-brands-svg-icons"`, lalu `<FontAwesomeIcon icon={faLaravel} />`.
- **Peran di proyek**: isi `role` (opsional) di `src/data/projects.js`.
