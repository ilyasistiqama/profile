# Pengembangan & Pengujian

## Prasyarat

- Node.js versi modern (proyek memakai ESM `"type": "module"`, Vite 8, dan ESLint 10)
- npm

## Setup

```bash
npm install
npm run dev
```

Dev server berjalan di `http://localhost:5173`.

## Perintah npm

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Vite dev server dengan HMR |
| `npm start` | Alias dari `vite` |
| `npm run build` | `vite build` + `node scripts/prerender.js` ke folder `build/` |
| `npm run preview` | Menyajikan hasil build untuk verifikasi |
| `npm run lint` | ESLint untuk seluruh repo (folder `build` diabaikan) |
| `npm test` | Menjalankan Vitest (mode watch secara default) |
| `npm run deploy` | Build lalu unggah ke GitHub Pages via `gh-pages` |

Tips: untuk sekali jalan pada CI, gunakan `npx vitest run`.

## Testing

Konfigurasi ada di `vite.config.js`:

```js
test: {
  environment: "jsdom",
  setupFiles: "./src/test/setup.js",
}
```

`src/test/setup.js` melakukan:

- Memuat matcher `@testing-library/jest-dom/vitest`.
- Membersihkan DOM setelah setiap test (`cleanup()`).
- Menyediakan stub `IntersectionObserver` dan `window.scrollTo`, karena jsdom tidak menyediakannya.

Test yang ada di `src/App.test.jsx` memverifikasi:

1. Halaman utama menampilkan heading level 1 berisi "Ilyas".
2. Setiap halaman (`/experience`, `/portfolio`, `/contact`) dirender di dalam layout dan memiliki `navigation`.
3. Route tidak dikenal menampilkan halaman 404 dan tetap memiliki navbar.

Pola render test:

```jsx
render(
  <MemoryRouter initialEntries={["/portfolio"]}>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </MemoryRouter>
);
```

Gunakan `MemoryRouter` (bukan `BrowserRouter`) agar URL bisa dikontrol di test.

## Linting

Konfigurasi di `eslint.config.js`:

- `@eslint/js` recommended
- `eslint-plugin-react-hooks` flat recommended
- `eslint-plugin-react-refresh` (aturan Vite)
- Globals browser, JSX aktif
- Folder `build` diabaikan

Aturan turunan yang perlu diingat saat menulis kode:

- Hook harus dipanggil tanpa kondisi.
- Peringatan Fast Refresh muncul jika satu file `.jsx` mengekspor komponen **dan** nilai non-komponen. Karena itu context dan hook dipisah ke file `.js`.
- Variabel yang tidak dipakai akan gagal lint.

## Alur kerja yang disarankan

1. Ubah kode/konten.
2. `npm run lint` — tangani error, bukan hanya warning.
3. `npm test` — pastikan routing tidak rusak.
4. `npm run build` — pastikan prerender berhasil (log `prerender: /path`).
5. `npm run preview` — cek visual: dark mode, bahasa, carousel, lightbox, form.

## Catatan teknis untuk kontributor

- **Jangan hardcode warna**; gunakan token seperti `bg-surface`, `text-muted`, `border-line`, `bg-accent`.
- **Jangan menambah file CSS baru**; semua styling Tailwind dan variabel tema berada di `src/index.css`.
- **Semua teks UI** harus lewat `t` dari `useLanguage()`; hindari string literal yang terlihat pengguna.
- **Data dua bahasa** memakai pola `{ en, id }` lalu diakses dengan `[lang]`.
- **Ikon** diimpor per ikon dari Font Awesome (`@fortawesome/free-solid-svg-icons` / `free-brands-svg-icons`) agar bundle tetap kecil.
- **Gambar** diimpor sebagai modul; tambahkan `loading="lazy"` dan `decoding="async"` kecuali untuk gambar hero di atas fold.
- **Aksesibilitas**: pertahankan `aria-label` pada tombol ikon, `aria-hidden` pada dekorasi/honeypot, dan fokus keyboard pada lightbox (`Esc`).
- **StrictMode** aktif di `main.jsx`; efek akan berjalan dua kali di development. Pastikan semua efek punya cleanup.

## Struktur file yang perlu dijaga

| Aturan | Alasan |
| --- | --- |
| `context/*Context.js` hanya ekspor context + hook | Menghindari peringatan Fast Refresh |
| `context/*Provider.jsx` hanya ekspor provider | Sama seperti di atas |
| Section menerima teks dari `useLanguage`, data dari `src/data` | Memisahkan konten dari presentasi |
| Halaman hanya memanggil `usePageMeta` + menyusun section | Menjaga route tetap tipis |
