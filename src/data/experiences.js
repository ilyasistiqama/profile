import mamorasoft from "../assets/images/company/mamorasoft.webp";
import mitra_informatika from "../assets/images/company/mitra_informatika.webp";
import terik from "../assets/images/company/terik.webp";

const experiences = [
  {
    company: "PT. Terik Indonesia Inside",
    since: { en: "Sep 2026 - Present", id: "Sep 2026 - Sekarang" },
    position: { en: "Staff IT", id: "Staff IT" },
    logo: terik,
    url: "https://terik.id",
    jobdesks: {
      en: [
        "Develop and maintain web applications based on internal business requirements.",
        "Serve as Project PIC for SIMPe, a multi-tenant SaaS platform for livestock management, including tenant data isolation and an egg sales Point of Sale (POS) module.",
        "Manage Ubuntu-based production VPS infrastructure with Nginx, PHP, MySQL, and Supervisor-managed background queue workers to support daily application operations.",
        "Design database structures and handle maintenance and debugging for production applications.",
        "Develop the company's official website to present its profile and digital livestock investment products.",
      ],
      id: [
        "Mengembangkan dan memelihara aplikasi web sesuai kebutuhan bisnis internal.",
        "Menjadi Project PIC untuk SIMPe, platform SaaS multi-tenant untuk manajemen peternakan, termasuk isolasi data tenant dan modul Point of Sale (POS) penjualan telur.",
        "Mengelola VPS produksi berbasis Ubuntu dengan Nginx, PHP, MySQL, dan background queue worker yang dikelola Supervisor untuk mendukung operasional aplikasi sehari-hari.",
        "Merancang struktur database serta menangani pemeliharaan dan debugging aplikasi produksi.",
        "Mengembangkan situs resmi perusahaan untuk menampilkan profil dan produk investasi peternakan digital.",
      ]
    },
  },
  {
    company: "PT. Terik Indonesia Inside",
    since: { en: "Dec 2025 - Aug 2026", id: "Des 2025 - Agu 2026" },
    position: { en: "Full Stack Developer", id: "Full Stack Developer" },
    logo: terik,
    url: "https://terik.id",
    // Rincian tugas periode ini belum tersedia dalam dokumen sumber.
    jobdesks: { en: [], id: [] },
  },
  {
    company: "PT. Terik Indonesia Inside",
    since: { en: "Jan 2025 - Nov 2025", id: "Jan 2025 - Nov 2025" },
    position: { en: "Web Programmer", id: "Web Programmer" },
    logo: terik,
    url: "https://terik.id",
    // Rincian tugas periode ini belum tersedia dalam dokumen sumber.
    jobdesks: { en: [], id: [] },
  },
  {
    company: "Freelancer",
    since: { en: "May 2024 - Jan 2025", id: "Mei 2024 - Jan 2025" },
    position: { en: "Freelance Web Developer", id: "Freelance Web Developer" },
    logo: null,
    jobdesks: {
      en: [
        "Delivered custom websites and web applications for clients across different industries.",
        "Worked directly with clients, from requirements gathering and development through to launch.",
        "Developed Synn Store, a gaming e-commerce platform with digital wallet integration, reseller management, and a RESTful API architecture.",
      ],
      id: [
        "Mengerjakan website dan aplikasi web sesuai kebutuhan klien dari berbagai bidang.",
        "Berkomunikasi langsung dengan klien, mulai dari analisis kebutuhan, pengembangan, hingga aplikasi siap digunakan.",
        "Mengembangkan Synn Store, platform e-commerce untuk gamer dengan integrasi dompet digital, manajemen reseller, dan arsitektur RESTful API.",
      ]
    },
  },
  {
    company: "CV. Mamorasoft",
    since: { en: "May 2022 - Apr 2024", id: "Mei 2022 - Apr 2024" },
    position: { en: "Application Programmer", id: "Staf Programmer Aplikasi" },
    logo: mamorasoft,
    url: "https://mamorasoft.com",
    jobdesks: {
      en: [
        "Served as Project PIC for enterprise application projects for Petrokimia Gresik.",
        "Developed RMP, an HR workflow application built with Laravel and PostgreSQL to support employee rotation, transfers, and promotion approval processes.",
        "Developed SERGIO, an employee innovation registration system with review status tracking.",
        "Designed and optimized relational databases and maintained existing production applications.",
      ],
      id: [
        "Menjadi Project PIC untuk proyek aplikasi enterprise bagi Petrokimia Gresik.",
        "Mengembangkan RMP, aplikasi alur kerja SDM berbasis Laravel dan PostgreSQL untuk mendukung proses rotasi, mutasi, dan persetujuan promosi karyawan.",
        "Mengembangkan SERGIO, sistem registrasi inovasi karyawan dengan pelacakan status review.",
        "Merancang dan mengoptimasi database relasional serta memelihara aplikasi produksi yang sudah berjalan.",
      ]
    },
  },
  {
    company: "CV. Mamorasoft",
    since: { en: "Feb 2022 - Apr 2022", id: "Feb 2022 - Apr 2022" },
    position: { en: "Application Programmer Trainee", id: "Training Staf Programmer Aplikasi" },
    logo: mamorasoft,
    url: "https://mamorasoft.com",
    // Materi pelatihan dan kontribusi belum tersedia dalam dokumen sumber.
    jobdesks: { en: [], id: [] },
  },
  {
    company: "CV. Mitra Informatika",
    since: { en: "Jan 2021 - Mar 2021", id: "Jan 2021 - Mar 2021" },
    position: { en: "Internship Web Developer", id: "Magang Web Developer" },
    internship: true, // tidak dihitung di "Years of experience"
    logo: mitra_informatika,
    jobdesks: {
      en: [
        "Contributed to a fintech website integrated with payment gateway APIs and other third-party services.",
      ],
      id: [
        "Terlibat dalam pengembangan website fintech yang terintegrasi dengan API payment gateway dan layanan pihak ketiga.",
      ]
    },
  },
];

export default experiences;
