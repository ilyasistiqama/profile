# Panduan Konten

Semua konten situs berasal dari `src/data` (data terstruktur) dan `src/locales` (teks antarmuka). Panduan ini menjelaskan cara mengubahnya dan menambah halaman baru.

## Ringkasan: mau ubah apa, buka file mana

| Mau mengubah | File |
| --- | --- |
| Teks antarmuka (EN) | `src/locales/en.js` |
| Teks antarmuka (ID) | `src/locales/id.js` |
| Email, lokasi, IPK, link CV, sosial media | `src/data/profile.js` |
| Pengalaman kerja | `src/data/experiences.js` |
| Proyek + screenshot | `src/data/projects.js` |
| Skill | `src/data/skills.js` |
| Warna tema | `src/index.css` (`:root` dan `[data-theme="dark"]`) |
| Meta global & JSON-LD | `index.html` |
| Daftar URL sitemap | `public/sitemap.xml` |

> Setiap teks yang punya padanan bahasa wajib diubah di **kedua** file locale. Struktur key `en.js` dan `id.js` harus identik; jika tidak, `t.some.key` akan `undefined` di salah satu bahasa.

## Menambah proyek

Tambahkan objek baru di `src/data/projects.js`:

```js
{
  id: "carouselNamaIndicators",       // unik, dipakai sebagai key React
  category: "Company",                // "Company" | "Freelance" | "Personal"
  images: [img1, img2, img3],         // minimal 1; urutan = urutan carousel
  project_name: "Nama Proyek",
  project_origin: "PT. Contoh",       // asal proyek, tampil di kartu
  role: {                             // opsional
    en: "Project PIC: ...",
    id: "PIC proyek: ...",
  },
  description: {
    en: "Deskripsi singkat dalam bahasa Inggris.",
    id: "Deskripsi singkat dalam bahasa Indonesia.",
  },
  stacks: ["Laravel", "MySQL"],       // maksimal 6 tampil, sisanya "+N"
  url: "https://contoh.com",          // opsional; tanpa url, tombol tidak tampil
}
```

Langkah gambar:

1. Buat folder `src/assets/images/project/<nama-proyek>/`.
2. Simpan screenshot sebagai `.webp` (disarankan rasio 2:1 agar tidak terpotong oleh carousel).
3. Import di bagian atas `projects.js` dan masukkan ke array `images`.

Jumlah proyek otomatis memengaruhi statistik "Projects" di beranda dan jumlah pada filter kategori.

## Menambah pengalaman kerja

Tambahkan objek di `src/data/experiences.js` (urutan terbaru di atas):

```js
{
  company: "PT. Contoh",
  since: { en: "Jan 2026 - Present", id: "Jan 2026 - Sekarang" },
  position: { en: "Web Developer", id: "Web Developer" },
  logo: logoContoh,                  // null jika tidak ada
  url: "https://contoh.com",        // opsional
  internship: true,                  // opsional; true = tidak dihitung "Years of experience"
  jobdesks: {
    en: ["Poin pekerjaan pertama.", "Poin kedua."],
    id: ["Poin pekerjaan pertama.", "Poin kedua."],
  },
}
```

Efek samping yang perlu diketahui:

- Item **pertama** di array dianggap pekerjaan saat ini dan tampil di kartu foto pada `Intro`.
- Entri dengan `internship: true` tidak dihitung pada statistik tahun pengalaman.
- Entri dengan `company === "Freelancer"` tidak dihitung pada statistik jumlah perusahaan.
- Format `since` memakai `"Mon YYYY - ..."` (contoh `"Jan 2021"`), karena `Stats.jsx` mem-parse bulan dan tahun dari string ini.

## Menambah atau mengubah skill

`src/data/skills.js` adalah array datar:

```js
{ name: "Go", category: "Backend", core: true },
```

- `category` menentukan baris pengelompokan; urutan kategori mengikuti kemunculan pertama di file.
- `core: true` memberi highlight aksen dan ikut legenda "paling sering dipakai di production".
- Skill pendukung yang bukan teknologi (metodologi, tools analisis) sebaiknya ditaruh di `skill.also` pada file locale, bukan di sini.

## Mengubah profil dan kontak

`src/data/profile.js`:

| Field | Dipakai di |
| --- | --- |
| `name`, `email`, `location`, `website` | `Contact`, `Footer`, JSON-LD (nama di `index.html`) |
| `gpa` | Statistik IPK |
| `cvUrl` | Tombol "Lihat CV" di `About` |
| `formEndpoint` | Endpoint Formspree pada form kontak |
| `socials` | `Intro`, `Contact`, `Footer` |

Untuk mengganti penerima pesan form, buat form baru di Formspree lalu ganti `formEndpoint`.

## Mengubah teks antarmuka

Struktur `src/locales/en.js` (dan `id.js`):

```
nav            Label navigasi
seo            Judul & deskripsi per halaman (dipakai usePageMeta + prerender)
intro          Hero
about          Tentang saya
stats          Label statistik
photo          Banner foto
skill          Judul, legenda, dan daftar "also"
experience     Judul pengalaman
project        Label filter, tombol, empty state
contact        Semua label form dan pesan status
not_found      Halaman 404
```

Jika menambah key baru, tambahkan di kedua locale dengan nama yang sama.

## Menambah halaman baru

Contoh menambah halaman `/blog/`:

1. **Buat komponen halaman** di `src/pages/BlogPage.jsx`:
   ```jsx
   import usePageMeta from "../hooks/usePageMeta";

   export default function BlogPage() {
     usePageMeta("blog", "/blog/");
     return <section>...</section>;
   }
   ```
2. **Daftarkan route** di `src/App.jsx` di dalam `<Route element={<Layout />}>`.
3. **Tambahkan SEO** `seo.blog = { title, description }` di `en.js` **dan** `id.js`.
4. **Tambahkan label navigasi** di `nav` kedua locale, lalu masukkan ke array `links` pada `Navbar.jsx`.
5. **Daftarkan untuk prerender** di `scripts/prerender.js`:
   ```js
   { path: "/blog/", seo: en.seo.blog },
   ```
6. **Tambahkan ke sitemap** `public/sitemap.xml`.
7. Jika halaman punya section dengan anchor, pastikan `id` section unik.

Tanpa langkah 5, halaman tetap bisa diakses lewat `404.html` di GitHub Pages, tetapi Google akan menerima status 404 sehingga kecil kemungkinan diindeks.

## Mengubah warna dan font

Di `src/index.css`:

```css
:root {
  --accent: #00787e;       /* mode terang */
}
[data-theme="dark"] {
  --accent: #22c3cb;       /* mode gelap */
}
```

- Jaga kontras teks minimal 4.5:1, terutama `--accent` di mode terang.
- `--on-accent` adalah warna teks di atas latar aksen.
- Font didefinisikan di blok `@theme` (`--font-sans`, `--font-mono`) dan dimuat dari Google Fonts di `index.html`.

## Mengganti foto

| Foto | Lokasi |
| --- | --- |
| Foto profil hero | `src/assets/images/ilyas2.webp` |
| Foto About | `src/assets/images/background.webp` |
| Banner Milky Way | `src/assets/images/background-2.webp` |
| Logo perusahaan | `src/assets/images/company/*.webp` |
| Screenshot proyek | `src/assets/images/project/<proyek>/*.webp` |

Gunakan format `.webp` dan perbarui `alt` atau caption di locale bila makna foto berubah.

## Checklist setelah mengubah konten

- [ ] Key locale ada di `en.js` dan `id.js`.
- [ ] Gambar baru sudah diimpor di file data.
- [ ] `npm run lint` bersih.
- [ ] `npm test` lulus.
- [ ] `npm run build` sukses dan halaman baru muncul di `build/`.
- [ ] Sitemap dan `scripts/prerender.js` diperbarui jika menambah halaman.
