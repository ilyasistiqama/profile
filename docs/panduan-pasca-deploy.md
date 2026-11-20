# Panduan Pasca Deploy muis.life

Langkah setelah perubahan portofolio di-upload ke GitHub Pages: memastikan versi
terbaru tayang, mengecek tampilan di berbagai perangkat, dan memberi tahu Google.
Diperbarui 20 November 2026.

## Alamat penting

| Kebutuhan | Alamat |
| --- | --- |
| Situs publik | https://muis.life/ |
| Halaman proyek | https://muis.life/portfolio/ |
| Repository | https://github.com/ilyasistiqama/profile |
| Status build dan deploy | https://github.com/ilyasistiqama/profile/actions |
| Sitemap | https://muis.life/sitemap.xml |
| Proyek baru: Tanda Tangan PDF | https://ilyasistiqama.github.io/pdfkit-id/ |

## Perubahan pada rilis ini

- **Posisi dock mengikuti perangkat.** Laptop, PC, dan TV memakai dock vertikal
  di kiri. HP dan tablet, termasuk tablet landscape, memakai dock di bawah.
  Aturannya ada di variant `desk:` pada `src/index.css`: lebar minimal 768px
  dan input utama bukan layar sentuh.
- **Proyek baru: Tanda Tangan PDF.** Kartunya ada di sebelah kiri Kalkulator HPP
  dan muncul di tabel Selected work, grup Personal. Datanya ada di
  `src/data/projects.js` dan gambarnya di `src/assets/images/project/ttd-pdf/`.
- Deskripsi SEO di `src/locales/id.js` dan `src/locales/en.js` sekarang
  menyebut Tanda Tangan PDF.

## 1. Commit dan push

Jalankan dari folder proyek:

```bash
git status
git add src/index.css src/components/layout src/data/projects.js \
  src/locales/id.js src/locales/en.js src/assets/images/project/ttd-pdf \
  docs/panduan-pasca-deploy.md docs/README.md
git commit -m "feat: device-based dock placement and Tanda Tangan PDF project"
git push origin main
```

Periksa hasil `git status` sebelum `git add`. Jika ada file lain yang berubah,
lihat isinya dulu sebelum ikut dimasukkan ke commit.

Folder `build/` tidak perlu di-commit. Setiap push ke `main` otomatis menjalankan
lint, tes, build, prerender, lalu deploy.

## 2. Pastikan versi terbaru sudah tayang

1. Buka tab **Actions** di repository.
2. Pilih run **Check and deploy GitHub Pages** untuk commit yang baru di-push.
3. Tunggu job **Lint, test, and build** dan **Deploy GitHub Pages** selesai
   dengan centang hijau.
4. Buka https://muis.life/portfolio/ langsung dari address bar, bukan lewat
   navigasi. Kartu pertama harus **Tanda Tangan PDF**.

Jika masih tampil versi lama, tekan **Ctrl+Shift+R** atau buka jendela incognito.
Jika Actions gagal, buka langkah berwarna merah dan baca error pertama. Push yang
berhasil belum tentu deploy-nya juga berhasil.

## 3. Cek tampilan di perangkat nyata

Dock memakai deteksi jenis input, jadi hasilnya hanya bisa dipastikan di
perangkat asli. Resize jendela atau DevTools di laptop tidak cukup.

**Dock**

- [ ] Laptop/PC: dock vertikal di kiri, ikon membesar saat di-hover, tooltip
      muncul di kanan ikon.
- [ ] HP: dock di bawah, konten bawah tidak tertutup dock.
- [ ] Tablet portrait **dan** landscape: dock di bawah.
- [ ] TV atau layar besar (jika ada): dock di kiri.
- [ ] Tombol kembali ke atas tidak bertumpuk dengan dock, baik di HP maupun laptop.
- [ ] Halaman Pengalaman di laptop: kolom indeks karier tetap sejajar dan tidak
      tertutup dock.

**Proyek Tanda Tangan PDF**

- [ ] Di `/portfolio/`, kartu ada di kiri Kalkulator HPP (kartu pertama pada
      filter **All** dan **Personal**).
- [ ] Keempat gambar bisa digeser di carousel dan dibuka di lightbox.
- [ ] Tombol **Visit site** membuka https://ilyasistiqama.github.io/pdfkit-id/.
- [ ] Ganti bahasa EN/ID: deskripsi dan tagline ikut berubah.
- [ ] Di beranda, tabel Selected work menampilkan
      "Tanda Tangan PDF — tanda tangan & alat PDF di browser" di grup Personal.
- [ ] Klik baris tersebut: diarahkan ke kartunya di halaman Portfolio.
- [ ] Angka **Projects** di statistik beranda bertambah satu.

Kemungkinan khusus perangkat:

| Perangkat | Kemungkinan |
| --- | --- |
| iPad + Magic Keyboard / trackpad | Browser bisa membacanya sebagai laptop, sehingga dock pindah ke kiri. Ini wajar. |
| Laptop layar sentuh | Dock tetap di kiri selama input utamanya touchpad/mouse. |
| Smart TV | Browser TV umumnya melaporkan input remote sebagai bukan sentuhan, jadi dock di kiri. Jika ternyata di bawah, catat merek dan browser TV-nya. |

Jika menemukan masalah, catat perangkat, browser, orientasi layar, dan screenshot.

## 4. Kabari Google tentang perubahan

Sitemap dibuat otomatis oleh `scripts/prerender.js` setiap build, jadi tidak
perlu diedit atau dikirim ulang.

1. Buka [Google Search Console](https://search.google.com/search-console/),
   lalu pilih properti `muis.life`.
2. Gunakan **URL Inspection / Inspeksi URL** untuk `https://muis.life/portfolio/`
   dan `https://muis.life/`.
3. Klik **Request indexing / Minta pengindeksan** jika tersedia.

Google bisa butuh beberapa hari sampai minggu untuk memperbarui deskripsi di hasil
pencarian. Mengulang permintaan untuk URL yang sama tidak mempercepat prosesnya.

## 5. Cek pratinjau saat link dibagikan

Kirim `https://muis.life/portfolio/` ke chat sendiri di WhatsApp atau Telegram,
lalu pastikan judul, deskripsi, dan gambar pratinjau tampil. Pratinjau di aplikasi
chat sering disimpan lama. Jika masih versi lama, coba lagi beberapa jam kemudian
atau tambahkan `?v=2` di ujung URL untuk tes.

## 6. Hubungkan dua situs

Tautan pembuat di footer PDFKit ID sudah mengarah ke `https://muis.life/`
(`src/web/site/SiteFooter.tsx` di repository `pdfkit-id`). Cukup klik sekali dari
situs publiknya untuk memastikan tautan itu terbuka. Sebaliknya, tombol
**Visit site** di kartu portofolio membawa pengunjung ke PDFKit ID.

## 7. Saat gambar proyek perlu diperbarui

Gambar Tanda Tangan PDF berukuran 1600×800 piksel dalam format WebP, sama seperti
gambar proyek lain. Gambar dibuat dari screenshot asli aplikasi dalam **mode gelap**
karena tampilan aplikasi mengikuti mode perangkat dan pengguna umumnya melihat
versi gelap. Jika tampilan aplikasi berubah besar, buat ulang keempat gambar
dengan gaya yang sama agar carousel tetap seragam, lalu ganti file di
`src/assets/images/project/ttd-pdf/` dengan nama yang sama.

## Checklist singkat

- [ ] Commit dan push ke `main`.
- [ ] Actions hijau (build dan deploy).
- [ ] `/portfolio/` tampil versi baru saat dibuka langsung.
- [ ] Dock dicek di laptop, HP, dan tablet.
- [ ] Kartu dan Selected work Tanda Tangan PDF tampil benar dalam dua bahasa.
- [ ] Minta pengindeksan `/` dan `/portfolio/` di Search Console.
