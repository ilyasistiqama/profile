# Arsitektur Aplikasi

Dokumen ini menjelaskan bagaimana muis.life disusun: alur render, routing, state global, sistem tema, sistem bahasa, dan strategi SEO.

## 1. Alur render

Rantai provider di `src/main.jsx`:

```
StrictMode
└── BrowserRouter
    └── ThemeProvider
        └── LanguageProvider
            └── App (Routes)
                └── Layout (Navbar + Outlet + Footer)
                    └── Page → Sections
```

- `BrowserRouter` dipakai karena situs berjalan di domain sendiri (custom domain GitHub Pages), bukan di sub-path.
- `ThemeProvider` berada di luar `LanguageProvider` agar tema tidak bergantung pada bahasa.
- Semua halaman berada di dalam `Layout`, jadi navbar, footer, splash screen, dan tombol *back to top* selalu tersedia.

## 2. Routing

Route didefinisikan di `src/App.jsx`:

| Path | Komponen | Section yang dirender |
| --- | --- | --- |
| `/` | `HomePage` | `Intro`, `Stats`, `About`, `Skills`, `PhotoBanner` |
| `/experience` | `ExperiencePage` | `Experience` |
| `/portfolio` | `ProjectsPage` | `Projects` |
| `/contact` | `ContactPage` | `Contact` |
| `*` | `NotFoundPage` | Halaman 404 mandiri |

`Layout` (`src/components/layout/Layout.jsx`) melakukan dua hal:

1. Merender kerangka halaman (`min-h-screen` flex column) agar footer selalu menempel di bawah.
2. Menggulir ke atas setiap kali `pathname` berubah — **kecuali** navigasi ke `#anchor`, supaya lompatan ke section tidak dibatalkan.

Setiap halaman memanggil `usePageMeta(key, path)` untuk memasang `document.title`, meta description, dan canonical URL sesuai bahasa aktif.

## 3. Lapisan data dan konten

Ada pemisahan tegas antara **data** dan **teks**:

| Sumber | Isi | Format |
| --- | --- | --- |
| `src/data/profile.js` | Nama, email, lokasi, IPK, CV, endpoint form, sosial media | Objek tunggal |
| `src/data/experiences.js` | Riwayat kerja + logo perusahaan | Array objek |
| `src/data/projects.js` | Proyek + screenshot | Array objek |
| `src/data/skills.js` | Daftar skill per kategori | Array datar |
| `src/locales/en.js` | Semua teks Inggris | Objek bersarang |
| `src/locales/id.js` | Semua teks Indonesia | Objek bersarang (key identik) |

Data yang tampil dalam dua bahasa memakai pola `{ en: "...", id: "..." }` di dalam `experiences.js` dan `projects.js`, lalu dirender dengan `[lang]` yang berasal dari `useLanguage()`.

Gambar diimpor sebagai modul (bukan path string) agar Vite melakukan hashing dan optimasi:

```js
import photo from "../assets/images/ilyas2.webp";
<img src={photo} />
```

## 4. State global

Tidak ada state management library. State global hanya dua, keduanya memakai pola **Context + Provider terpisah**:

```
context/ThemeContext.js      createContext + useTheme()
context/ThemeProvider.jsx    Logika state + <ThemeContext.Provider>
context/LanguageContext.js   createContext + useLanguage()
context/LanguageProvider.jsx Logika state + <LanguageContext.Provider>
```

Pemecahan ini menjaga file context tetap ringan dan menghindari peringatan React Fast Refresh (file `.js` hanya mengekspor context/hook, file `.jsx` mengekspor komponen).

### Tema (`useTheme`)

- Nilai: `theme` (`"light"` / `"dark"`), `isDark`, `toggleTheme`.
- Tema awal **dibaca dari DOM**, karena sudah dipasang oleh inline script di `index.html` sebelum React dimuat. Ini mencegah kedipan putih (*flash of wrong theme*).
- Setiap perubahan menulis `data-theme` ke `<html>` dan menyimpan ke `localStorage["theme"]`.
- Akses `localStorage` dibungkus `try/catch` agar aman di mode privat.

### Bahasa (`useLanguage`)

- Nilai: `lang` (`"en"` / `"id"`), `t` (objek locale aktif), `toggleLang`.
- Bahasa awal: `localStorage["lang"]`, fallback `"en"`.
- Setiap perubahan memperbarui `document.documentElement.lang`.

## 5. Sistem styling

Satu file CSS: `src/index.css`.

1. `@import "tailwindcss"` memuat Tailwind v4.
2. `@custom-variant dark` mendefinisikan dark mode berbasis atribut:
   ```css
   @custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
   ```
3. Warna didefinisikan sebagai CSS custom property di `:root` dan `[data-theme="dark"]`:
   - `--bg`, `--bg-alt`, `--surface`, `--fg`, `--muted`, `--line`
   - `--accent`, `--accent-hover`, `--on-accent`
4. `@theme inline` mendaftarkan variabel tersebut ke Tailwind, sehingga bisa dipakai sebagai utility:
   `bg-bg`, `bg-bg-alt`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `bg-accent`, `text-on-accent`.
5. `@theme` mendefinisikan font (`Geist`, `Geist Mono`) dan animasi (`animate-fade-up`, `animate-splash-progress`).
6. Utility kustom `bg-grid` menghasilkan pola grid hero dengan mask radial.

Konsekuensi penting: **jangan hardcode warna** seperti `bg-zinc-100` untuk permukaan. Gunakan token tema agar dark mode otomatis bekerja. Pengecualian yang disengaja: warna status (hijau/merah) pada form kontak dan latar splash screen.

## 6. Animasi dan interaksi

| Mekanisme | Implementasi |
| --- | --- |
| Muncul saat di-scroll | `useInView` (IntersectionObserver, sekali jalan) + transisi opacity/translate |
| Hitung angka naik | `CountUp` di `Stats.jsx` memakai `requestAnimationFrame` + easing |
| Navbar menyembunyi saat scroll ke bawah | `useScrollState` (ambang 10px untuk mencegah kedip, sembunyi setelah `y > 100`) |
| Splash screen | `SplashScreen.jsx`, tampil sekali per sesi (`sessionStorage["splash-seen"]`), 1800 ms tampil + 500 ms animasi keluar |
| Efek parallax foto | `bg-fixed` hanya di `md:` karena bermasalah di iOS |
| Lightbox | `Lightbox.jsx`, tutup dengan klik atau `Esc`, mengunci scroll body |

## 7. Form kontak

`src/sections/Contact.jsx` mengirim `POST` JSON ke `profile.formEndpoint` (Formspree).

- State `status`: `idle` → `loading` → `success` / `error`.
- **Honeypot anti-spam**: field tersembunyi `_gotcha`. Jika terisi, UI menampilkan sukses palsu tetapi request tidak dikirim.
- Tombol submit dinonaktifkan selama `loading`.

## 8. Strategi SEO

Situs statis di GitHub Pages tidak punya server yang bisa merender per-URL, sehingga SEO ditangani di tiga lapis:

1. **`index.html`** — meta dasar, Open Graph, Twitter Card, JSON-LD `Person` (nama, pekerjaan, pendidikan, alamat, `sameAs`), canonical, manifest, Google Analytics.
2. **Runtime** — `usePageMeta` memperbarui title/description/canonical saat navigasi klien.
3. **Build-time prerender** — `scripts/prerender.js` menyalin `build/index.html` menjadi `build/<route>/index.html` dengan title, description, canonical, `og:*`, dan `twitter:*` masing-masing. Hasilnya setiap URL dilayani dengan status 200 dan bisa diindeks Google.

Selain itu:

- `build/404.html` dibuat dengan meta `robots: noindex`.
- `public/robots.txt` mengizinkan semua crawler dan menunjuk sitemap.
- `public/sitemap.xml` mendaftar keempat URL utama.

Detail langkah build ada di [deployment.md](./deployment.md).

## 9. Batasan yang diketahui

- Prerender hanya menghasilkan HTML "kerangka" — isi React tetap dirender di klien, jadi crawler yang tidak menjalankan JavaScript hanya melihat meta, bukan konten lengkap.
- Splash screen dikunci per sesi tab; membuka tab baru akan menampilkannya lagi.
- Tidak ada backend sendiri; kontak bergantung pada Formspree.
- `sitemap.xml` diperbarui manual (tidak digenerate saat build).
