# Referensi Komponen

Ringkasan setiap folder dan komponen di `src/`, beserta props dan tanggung jawabnya.

## Halaman (`src/pages`)

Halaman hanya bertugas memanggil `usePageMeta` lalu menyusun section. Tidak ada logika bisnis di sini.

| Komponen | Route | Isi |
| --- | --- | --- |
| `HomePage.jsx` | `/` | `Intro`, `Stats`, `About`, `Skills`, `PhotoBanner` |
| `ExperiencePage.jsx` | `/experience` | `Experience` |
| `ProjectsPage.jsx` | `/portfolio` | `Projects` |
| `ContactPage.jsx` | `/contact` | `Contact` |
| `NotFoundPage.jsx` | `*` | Angka 404, pesan, tombol kembali |

## Section (`src/sections`)

Blok konten besar. Semua memakai `useLanguage()` untuk teks.

| Section | ID anchor | Fungsi |
| --- | --- | --- |
| `Intro.jsx` | `intro` | Hero: status "open to work", nama, deskripsi, CTA, area kerja, foto profil, kartu perusahaan saat ini |
| `Stats.jsx` | `stats` | Empat statistik dengan animasi hitung: tahun pengalaman, jumlah proyek, jumlah perusahaan, IPK |
| `About.jsx` | `about-me` | Narasi tentang saya + foto Ranu Kumbolo (bisa di-zoom) + tombol CV & kontak |
| `Skills.jsx` | `skill` | Skill dikelompokkan per kategori; skill `core` disorot warna aksen |
| `PhotoBanner.jsx` | `photo` | Banner foto Milky Way dengan lazy load via `useInView` dan CTA kontak |
| `Experience.jsx` | `experience` | Daftar pengalaman kerja; judul sticky di desktop, item muncul saat di-scroll |
| `Projects.jsx` | `project` | Grid proyek + filter kategori + carousel gambar + lightbox |
| `Contact.jsx` | `contact` | Info kontak, tautan sosial, dan form yang dikirim ke Formspree |

### Logika penting di section

- **`Stats.jsx`** menghitung tahun pengalaman dari tanggal mulai pekerjaan pertama (magang dikecualikan lewat `internship: true`). Jumlah perusahaan memakai `Set` dan mengecualikan `"Freelancer"`. `CountUp` memakai easing `1 - (1 - p)^3` selama 1500 ms.
- **`Projects.jsx`** menyaring berdasarkan `category` (`Company`, `Freelance`, `Personal`). Setiap kartu menampilkan maksimal 6 stack, sisanya diringkas menjadi `+N`. Tombol "Visit site" memakai `mt-auto` agar sejajar antar kartu.
- **`Skills.jsx`** mengelompokkan data dengan `reduce`; urutan kategori mengikuti kemunculan pertama di `skills.js`.
- **`Intro.jsx`** menganggap `experiences[0]` sebagai pekerjaan saat ini.
- **`Contact.jsx`** memiliki honeypot `_gotcha` dan status `idle | loading | success | error`.

## Komponen layout (`src/components/layout`)

| Komponen | Tanggung jawab |
| --- | --- |
| `Layout.jsx` | Kerangka semua halaman; scroll ke atas saat pindah route tanpa hash |
| `Navbar.jsx` | Navigasi fixed, menu mobile, toggle bahasa (`EN`/`ID`), toggle tema; menyembunyi saat scroll ke bawah |
| `Footer.jsx` | Hak cipta, tagline, tautan sosial dari `profile.socials` |
| `BackToTop.jsx` | Tombol muncul setelah `scrollY > 120` |
| `SplashScreen.jsx` | Layar pembuka animasi nama; sekali per sesi tab, mengunci scroll selama tampil |

## Komponen UI (`src/components/ui`)

| Komponen | Props | Catatan |
| --- | --- | --- |
| `Button.jsx` | `to`, `href`, `variant`, `className`, `children` | `to` → `Link`, `href` → `<a target="_blank">`, selain itu `<button>`. Varian: `primary`, `outline`, `light` |
| `SectionHeader.jsx` | `title`, `subtitle`, `center` | Judul + deskripsi di atas section |
| `FilterTabs.jsx` | `options: [{ value, label, count }]`, `value`, `onChange` | Tombol filter dengan badge jumlah |
| `ImageCarousel.jsx` | `images`, `alt`, `onImageClick` | Rasio 2:1, panah saat hover (desktop), titik indikator, klik gambar membuka lightbox |
| `Lightbox.jsx` | `image`, `alt`, `onClose` | Overlay layar penuh, tutup via klik atau `Esc`, mengunci scroll |

## Hook (`src/hooks`)

| Hook | Signature | Perilaku |
| --- | --- | --- |
| `useInView` | `(threshold = 0.2, rootMargin = "0px") => [ref, inView]` | `true` saat elemen pertama kali terlihat; observer langsung dilepas (animasi sekali) |
| `useScrollState` | `() => { scrollY, scrolled, hidden }` | Listener scroll pasif; `scrolled` jika `y > 50`, `hidden` jika scroll ke bawah dan `y > 100` |
| `usePageMeta` | `(pageKey, path?) => void` | Set `document.title`, meta description, dan canonical dari `t.seo[pageKey]` |

## Context (`src/context`)

| File | Ekspor |
| --- | --- |
| `ThemeContext.js` | `ThemeContext`, `useTheme()` → `{ theme, isDark, toggleTheme }` |
| `ThemeProvider.jsx` | `ThemeProvider` |
| `LanguageContext.js` | `LanguageContext`, `useLanguage()` → `{ lang, t, toggleLang }` |
| `LanguageProvider.jsx` | `LanguageProvider` |

## Helper internal

- `Field` (di `Contact.jsx`) — membungkus label + input agar konsisten.
- `ProjectCard` (di `Projects.jsx`) — kartu proyek.
- `ExperienceItem` (di `Experience.jsx`) — satu baris riwayat kerja dengan animasi masuk.
- `SkillChip` (di `Skills.jsx`) — chip skill, disorot jika `core`.
- `CountUp` (di `Stats.jsx`) — animasi angka.

## Konvensi penulisan komponen

- Nama file komponen memakai PascalCase; hook memakai camelCase dengan prefix `use`.
- Semua teks yang terlihat pengguna berasal dari `locales`, bukan string literal — kecuali nama diri dan label teknis.
- Class Tailwind disusun inline; tidak ada `clsx`/`cn` helper.
- Import gambar relatif terhadap file komponen.
- Semua tombol non-submit memakai `type="button"` eksplisit.
