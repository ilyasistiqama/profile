# Ilyas Istiqama — Portfolio

Website portfolio pribadi Ilyas Istiqama. Dibuat dengan React, Vite, Tailwind CSS v4, dan React Router.

Dokumentasi lengkap ada di [docs/](./docs/README.md) — arsitektur, referensi komponen, panduan konten, build & deployment, serta pengembangan.

## Menjalankan

```bash
npm install
npm run dev       # server lokal di http://localhost:5173
npm test          # jalankan test (Vitest)
npm run lint      # cek kode dengan ESLint
npm run build     # build ke folder build/
npm run deploy    # deploy manual untuk source Pages berbasis branch (cara lama)
```

## Deploy otomatis

Workflow [pages.yml](./.github/workflows/pages.yml) menjalankan lint, tes, dan build untuk pull request ke `main`. Push ke `main` juga otomatis men-deploy hasil `build/` ke GitHub Pages setelah semua pemeriksaan lulus.

Aktifkan sekali di repository GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**. Cocokkan **Custom domain** dengan `public/CNAME`. Setelah file workflow di-commit dan di-push, pantau hasilnya di tab **Actions**. Tidak perlu menambahkan token atau secret deploy sendiri.

Detail aktivasi dan troubleshooting ada di [panduan deployment](./docs/deployment.md).

## Struktur folder

```
index.html              Template HTML (meta SEO, font, script tema, Google Analytics)
public/                 File statis (favicon, CNAME, og-image)
src/
  main.jsx              Titik awal: pasang router, tema, dan bahasa
  App.jsx               Daftar halaman (route)
  index.css             Tailwind + warna tema light/dark; splash memiliki stylesheet sendiri

scripts/prerender.js    Render konten HTML, metadata, schema, sitemap, dan robots setelah build
scripts/check-seo.js    Verifikasi hasil HTML dan aset SEO sebelum deploy
  entry-server.jsx      Entry render statis yang hanya dipakai ketika build

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

## SEO dan pergantian domain

`npm run build` menghasilkan HTML berisi konten untuk `/`, `/experience/`, `/portfolio/`, dan `/contact/`. Build tidak memerlukan layanan backend atau browser otomatis. Splash hanya dijalankan di browser, sehingga tidak menutupi konten HTML untuk crawler.

Judul dan deskripsi ada di `src/locales/en.js` serta `src/locales/id.js`. `src/utils/seo.js` menyusun metadata dan JSON-LD dari profil, pekerjaan terkini, keahlian, dan proyek aplikasi. Metadata Open Graph, Twitter, canonical, serta schema diperbarui saat navigasi atau ganti bahasa. Bahasa HTML awal mengikuti default aplikasi, yaitu Inggris; pilihan bahasa pada URL yang sama tidak diperlakukan sebagai URL terjemahan terpisah.

Domain SEO saat build berasal dari `SITE_URL` bila disediakan, atau `public/CNAME`. Contoh: `SITE_URL=https://portfolio.example npm run build`. URL canonical, gambar sosial, sitemap, dan robots mengikuti konfigurasi tersebut. Domain di browser mengikuti origin halaman yang dibuka. Untuk GitHub Pages, tetap sesuaikan pengaturan custom domain dan DNS ketika pindah domain.

`build/404.html` memakai `noindex, follow`, tidak memiliki canonical ke beranda, dan tidak dimasukkan ke sitemap. `scripts/check-seo.js` memeriksa isi HTML, satu H1 per halaman, metadata share, schema, gambar lokal, ukuran gambar share 1200×630, sitemap, dan aturan 404.

Gambar share tidak memuat nama domain. Jika profil atau branding berubah, regenerasi dengan `python3 scripts/generate-social-image.py` (memerlukan Pillow dan font DejaVu Sans). Gambar PNG yang dihasilkan disimpan di repository; CI tidak memerlukan Python untuk build normal.

Setelah deploy, kirim `https://<domain-aktif>/sitemap.xml` melalui Google Search Console dan periksa halaman dengan URL Inspection. Perubahan hasil pencarian menunggu crawl ulang; validasi build tidak berarti halaman sudah diindeks Google.
