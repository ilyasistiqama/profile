import mamorasoft from "../assets/images/company/mamorasoft.webp";
import mitra_informatika from "../assets/images/company/mitra_informatika.webp";
import terik from "../assets/images/company/terik.webp";

const experiences = [
  {
    company: "PT. Terik Indonesia Inside",
    since: { en: "Jan 2025 - Present", id: "Jan 2025 - Sekarang" },
    position: { en: "Web Programmer", id: "Web Programmer" },
    logo: terik,
    url: "https://terik.id",
    jobdesks: {
      en: [
        "Develop web applications based on business requirements from internal teams.",
        "Build new features while maintaining the stability and performance of existing systems.",
        "Design database structures that are scalable and easy to maintain.",
        "Handle debugging and routine maintenance for production applications.",
      ],
      id: [
        "Mengembangkan aplikasi web sesuai kebutuhan bisnis dari tim internal.",
        "Membangun fitur baru serta menjaga stabilitas dan performa sistem yang sudah berjalan.",
        "Merancang struktur database yang mudah dikembangkan dan dirawat.",
        "Menangani debugging dan maintenance rutin untuk aplikasi production.",
      ]
    },
  },
  {
    company: "Freelancer",
    since: { en: "Aug 2024 - Jan 2025", id: "Agu 2024 - Jan 2025" },
    position: { en: "Freelance Web Developer", id: "Freelance Web Developer" },
    logo: null,
    jobdesks: {
      en: [
        "Delivered custom websites and web applications for clients across different industries.",
        "Worked directly with clients, from requirements gathering and development through to launch.",
      ],
      id: [
        "Mengerjakan website dan aplikasi web sesuai kebutuhan klien dari berbagai bidang.",
        "Berkomunikasi langsung dengan klien, mulai dari analisis kebutuhan, pengembangan, hingga aplikasi siap digunakan.",
      ]
    },
  },
  {
    company: "CV. Mamorasoft",
    since: { en: "Feb 2022 - Apr 2024", id: "Feb 2022 - Apr 2024" },
    position: { en: "Application Programming Staff", id: "Staf Programming Aplikasi" },
    logo: mamorasoft,
    url: "https://mamorasoft.com",
    jobdesks: {
      en: [
        "Built responsive web applications using Laravel, CodeIgniter, and JavaScript.",
        "Translated system specifications into working features ready for production.",
        "Designed and optimized databases for several client projects.",
        "Maintained and updated applications running in production.",
      ],
      id: [
        "Membangun aplikasi web responsif menggunakan Laravel, CodeIgniter, dan JavaScript.",
        "Menerjemahkan spesifikasi sistem menjadi fitur yang siap digunakan.",
        "Merancang dan mengoptimasi database untuk beberapa proyek klien.",
        "Melakukan maintenance dan pembaruan aplikasi yang sudah berjalan.",
      ]
    },
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