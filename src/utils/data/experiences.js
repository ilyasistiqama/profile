import mamorasoft from "../../assets/images/company/mamorasoft.webp";
import mitra_informatika from "../../assets/images/company/mitra_informatika.webp";
import terik from "../../assets/images/company/terik.webp";

const experiences = [
  {
    company: "PT. Terik Indonesia Inside",
    since: { en: "Jan 2025 - Present", id: "Jan 2025 - Sekarang" },
    position: { en: "Web Programmer", id: "Web Programmer" },
    logo: terik,
    url: "https://terik.id",
    jobdesks: {
      en: [
        "Developing web applications tailored to meet specific business requirements.",
        "Implementing new features and ensuring optimal system stability and performance.",
        "Designing scalable and easily maintainable database architectures.",
        "Conducting debugging and routine system maintenance to ensure application reliability.",
      ],
      id: [
        "Mengembangkan aplikasi web yang disesuaikan dengan kebutuhan bisnis perusahaan.",
        "Merancang dan mengimplementasikan fitur baru serta memastikan stabilitas sistem berjalan optimal.",
        "Merancang arsitektur basis data yang terukur (scalable) dan mudah dikelola.",
        "Melakukan proses debugging dan pemeliharaan sistem untuk memastikan keandalan aplikasi.",
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
        "Developing custom web solutions tailored to diverse client requirements.",
        "Collaborating directly with clients to translate business concepts into functional digital products.",
      ],
      id: [
        "Mengembangkan solusi web kustom yang disesuaikan dengan beragam kebutuhan klien.",
        "Berkolaborasi langsung dengan klien untuk merumuskan konsep bisnis menjadi produk digital yang fungsional.",
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
        "Built responsive websites leveraging Laravel, CodeIgniter, and JavaScript.",
        "Translated detailed system specifications into high-performing web applications.",
        "Managed database design and optimization across multiple client projects.",
        "Performed routine system maintenance and updates to ensure sustained application performance.",
      ],
      id: [
        "Membangun situs web responsif menggunakan kerangka kerja Laravel, CodeIgniter, dan JavaScript.",
        "Menerjemahkan spesifikasi sistem menjadi aplikasi web yang berkinerja tinggi.",
        "Menangani perancangan serta optimasi basis data untuk berbagai proyek klien.",
        "Melakukan pemeliharaan sistem dan pembaruan berkala guna menjaga performa aplikasi.",
      ]
    },
  },
  {
    company: "CV. Mitra Informatika",
    since: { en: "Jan 2021 - Mar 2021", id: "Jan 2021 - Mar 2021" },
    position: { en: "Internship Web Developer", id: "Magang Web Developer" },
    logo: mitra_informatika,
    jobdesks: {
      en: [
        "Developed a fintech-oriented website integrated with payment gateway APIs and third-party services.",
      ],
      id: [
        "Mengembangkan situs web berbasis tekfin (fintech) dengan integrasi API payment gateway dan layanan pihak ketiga.",
      ]
    },
  },
];

export default experiences;