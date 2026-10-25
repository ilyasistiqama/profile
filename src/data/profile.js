import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Info pribadi yang dipakai di beberapa tempat. Ubah di sini saja.
const profile = {
  name: "Muh. Ilyas Istiqama",
  email: "ilyasistiqama@gmail.com",
  location: "Surabaya, Indonesia",
  website: "https://muis.life",
  gpa: 3.62,
  cvUrl: "https://drive.google.com/drive/folders/1ToUoWToqsUVoGj7CRcbUsMxIT5RhuYUC?usp=sharing",
  // Form kontak dikirim lewat Formspree
  formEndpoint: "https://formspree.io/f/xlgzwzdk",
  // Hanya akun yang relevan untuk perekrut
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muh-ilyas-istiqama", icon: faLinkedinIn, color: "bg-[#0a66c2]" },
    { label: "GitHub", href: "https://github.com/ilyasistiqama", icon: faGithub, color: "bg-[#24292f]" },
    { label: "Email", href: "mailto:ilyasistiqama@gmail.com", icon: faEnvelope, color: "bg-[#c5221f]" },
  ],
};

export default profile;
