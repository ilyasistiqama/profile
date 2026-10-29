# Build & Deployment

Situs ini adalah SPA statis yang di-deploy ke **GitHub Pages** dengan custom domain `muis.life`.

## Perintah

```bash
npm run build     # vite build lalu node scripts/prerender.js
npm run preview   # menyajikan hasil build secara lokal
npm run deploy    # predeploy (build) lalu gh-pages -d build
```

`predeploy` otomatis menjalankan `build`, jadi cukup `npm run deploy`.

## Output build

`vite.config.js` menetapkan `build.outDir: "build"` (bukan `dist`) agar perintah `gh-pages -d build` tidak perlu diubah.

```
build/
  index.html
  404.html
  experience/index.html
  portfolio/index.html
  contact/index.html
  assets/            # JS, CSS, gambar ber-hash
  CNAME
  robots.txt
  sitemap.xml
  ...aset public lainnya
```

## Apa yang dilakukan `scripts/prerender.js`

GitHub Pages tidak punya server. Tanpa prerender, URL seperti `/portfolio/` hanya dilayani lewat `404.html` dengan status 404, yang membuat Google enggan mengindeksnya.

Script ini:

1. Membaca `build/index.html` sebagai template.
2. Untuk setiap entri di array `pages`, membuat folder `build/<path>/` dan menulis `index.html` hasil penggantian:
   - `<title>`
   - `<meta name="description">`
   - `<link rel="canonical">`
   - `og:url`, `og:title`, `og:description`
   - `twitter:title`, `twitter:description`
3. Menulis `build/404.html` dengan tambahan `<meta name="robots" content="noindex">`.

Daftar halaman saat ini:

| Path | SEO key |
| --- | --- |
| `/` | `en.seo.home` |
| `/experience/` | `en.seo.experience` |
| `/portfolio/` | `en.seo.portfolio` |
| `/contact/` | `en.seo.contact` |
| `/404` | `en.seo.not_found` (noindex) |

Judul dan deskripsi diambil dari locale **Inggris** karena crawler umumnya melihat versi default. Saat runtime, `usePageMeta` akan menggantinya sesuai bahasa pilihan pengunjung.

## GitHub Pages

1. Pastikan repo memiliki branch yang dikonfigurasi sebagai source GitHub Pages (biasanya branch `gh-pages` yang dibuat oleh `gh-pages`).
2. `public/CNAME` berisi `muis.life` — file ini ikut tersalin ke `build/` sehingga custom domain tetap aktif setiap deploy.
3. Di pengaturan DNS domain, arahkan `A`/`CNAME` sesuai dokumentasi GitHub Pages.
4. Jalankan `npm run deploy`.

Catatan: `public/_redirects` (`/* /index.html 200`) hanya berguna bila situs di-host di platform yang mendukung file `_redirects` (misalnya Netlify). GitHub Pages mengabaikannya; fallback SPA di sana ditangani oleh `404.html`.

## SEO dan berkas statis

| File | Fungsi |
| --- | --- |
| `index.html` | Meta global, Open Graph, Twitter Card, JSON-LD `Person`, canonical, Google Analytics `G-4552V28RH` |
| `public/robots.txt` | `Allow: /` + deklarasi sitemap |
| `public/sitemap.xml` | Daftar URL; tanggal `lastmod` diperbarui manual |
| `public/manifest.json` | Metadata PWA sederhana (nama, ikon, warna) |
| `public/CNAME` | Custom domain |
| `public/og-image.png`, `og-banner.png` | Gambar preview saat tautan dibagikan |
| `scripts/prerender.js` | HTML per halaman untuk status 200 |

### Checklist rilis

- [ ] `npm run lint` lulus.
- [ ] `npm test` lulus.
- [ ] `npm run build` sukses; semua halaman tercetak di log `prerender:`.
- [ ] `npm run preview` — cek navigasi, dark mode, ganti bahasa, form kontak.
- [ ] Halaman baru sudah ada di `scripts/prerender.js` **dan** `public/sitemap.xml`.
- [ ] `lastmod` di sitemap diperbarui jika konten berubah.
- [ ] `profile.formEndpoint` masih aktif (uji kirim satu pesan).
- [ ] Setelah deploy: buka `https://muis.life/portfolio/` langsung (bukan lewat navigasi) untuk memastikan status 200, bukan 404.

## Troubleshooting

| Gejala | Penyebab umum |
| --- | --- |
| URL halaman dalam 404 saat dibuka langsung | Halaman belum terdaftar di `pages` pada `scripts/prerender.js`, atau deploy tidak menjalankan build |
| Custom domain hilang setelah deploy | `public/CNAME` terhapus atau tidak ikut ter-build |
| Judul tab sama di semua halaman | Key `seo` tidak ada di locale, atau `usePageMeta` tidak dipanggil |
| Halaman baru tidak muncul di Google | Belum masuk `sitemap.xml` / belum prerender |
| Form kontak selalu error | Endpoint Formspree tidak valid atau kuota habis |
