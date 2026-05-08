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
        "Developing web applications tailored to company business needs.",
        "Building new features and keeping the systems running smoothly.",
        "Designing database structures that are easy to manage and scale.",
        "Finding and fixing bugs to make sure everything works perfectly.",
      ],
      id: [
        "Ngembangin aplikasi web yang sesuai dengan kebutuhan bisnis perusahaan.",
        "Bikin fitur baru dan mastiin semua sistem jalan dengan lancar.",
        "Ngerancang struktur database yang gampang dikelola dan bisa berkembang.",
        "Nyari dan benerin bug supaya aplikasi selalu bisa diandalkan.",
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
        "Creating custom web solutions for various clients and needs.",
        "Working closely with clients to understand and build what they need.",
      ],
      id: [
        "Bikin solusi web kustom buat berbagai macam klien dan kebutuhan.",
        "Diskusi bareng klien buat nangkep ide mereka dan ngubahnya jadi website beneran.",
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
        "Built responsive websites using Laravel, CodeIgniter, and JavaScript.",
        "Translated system requirements into working web applications.",
        "Handled database design and optimization for client projects.",
        "Maintained and improved existing systems through regular updates.",
      ],
      id: [
        "Bangun website responsif pakai Laravel, CodeIgniter, dan JavaScript.",
        "Nerjemahin kebutuhan sistem jadi aplikasi web yang fungsional.",
        "Nanganin perancangan dan optimasi database buat proyek-proyek klien.",
        "Ngelakuin pemeliharaan dan update rutin buat jaga performa sistem.",
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
        "Developed a fintech-style website integrated with payment gateway and service APIs.",
      ],
      id: [
        "Bikin website ala fintech yang terintegrasi sama API payment gateway dan layanan pihak ketiga.",
      ]
    },
  },
];

export default experiences;
