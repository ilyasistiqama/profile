import { faGithub, faInstagram, faLinkedinIn, faThreads } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Info pribadi yang dipakai di beberapa tempat. Ubah di sini saja.
const profile = {
  name: "Muh. Ilyas Istiqama M.",
  fullName: "Muhammad Ilyas Istiqama Makmur",
  displayName: "Ilyas Istiqama",
  nickname: "Ilyas",
  role: "Fullstack Web Developer",
  githubUsername: "ilyasistiqama",
  email: "ilyasistiqama@gmail.com",
  location: "Surabaya, Indonesia",
  get website() { return typeof window !== "undefined" ? window.location.origin : import.meta.env.VITE_SITE_URL; },
  gpa: 3.62,
  cvUrl: "https://drive.google.com/drive/folders/1ToUoWToqsUVoGj7CRcbUsMxIT5RhuYUC?usp=sharing",
  // Form kontak dikirim lewat Formspree
  formEndpoint: "https://formspree.io/f/xlgzwzdk",
  // Tautan sosial dan kontak yang ditampilkan di situs.
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muh-ilyas-istiqama", icon: faLinkedinIn },
    { label: "GitHub", href: "https://github.com/ilyasistiqama", icon: faGithub },
    { label: "Instagram", href: "https://www.instagram.com/life0fays/", icon: faInstagram },
    { label: "Threads", href: "https://www.threads.com/@life0fays", icon: faThreads },
    { label: "Email", href: "mailto:ilyasistiqama@gmail.com", icon: faEnvelope },
  ],
};

export default profile;
