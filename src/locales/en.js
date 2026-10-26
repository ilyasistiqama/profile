// Semua teks bahasa Inggris. Struktur key harus sama dengan id.js.
const en = {
  nav: {
    home: "Home",
    about: "About",
    skill: "Skills",
    experience: "Experience",
    project: "Projects",
    contact: "Contact",
    back_to_top: "Back to top",
    lang_title: "Language: English (click for Bahasa Indonesia)",
  },
  // Judul & deskripsi per halaman (tab browser dan hasil Google)
  seo: {
    home: {
      title: "Ilyas Istiqama | Fullstack Web Developer",
      description: "Portfolio of Ilyas Istiqama, a fullstack web developer based in Surabaya specializing in Laravel, database design, and server deployment. Open to onsite or remote work.",
    },
    experience: {
      title: "Experience | Ilyas Istiqama",
      description: "Work history of Ilyas Istiqama: web programmer at PT. Terik Indonesia Inside, application programming staff at CV. Mamorasoft, and freelance web developer.",
    },
    portfolio: {
      title: "Projects | Ilyas Istiqama",
      description: "Selected Laravel projects by Ilyas Istiqama, including SaaS farm management, HR and innovation systems for Petrokimia Gresik, and e-commerce.",
    },
    contact: {
      title: "Contact | Ilyas Istiqama",
      description: "Contact Ilyas Istiqama for job opportunities or freelance web development projects. Based in Surabaya, open to onsite or remote work.",
    },
    not_found: {
      title: "Page not found | Ilyas Istiqama",
      description: "The page you're looking for doesn't exist.",
    },
  },
  intro: {
    role: "Fullstack Web Developer · Surabaya",
    open_to_work: "Open to work",
    work_mode: "Onsite / Remote",
    work_areas: [
      { region: "East Java", cities: "Surabaya, Sidoarjo, Mojokerto, Malang & nearby" },
      { region: "Central Sulawesi", cities: "Luwuk, Palu & nearby" },
    ],
    hi: "Hi, I'm",
    description: [
      "I've been building web applications since 2022, from internal company systems to SaaS products. I usually own the whole thing: database, backend, frontend, and deployment.",
      "Currently at PT. Terik Indonesia Inside, working on SIMPe (a livestock management app) and the company website.",
    ],
    currently: "Currently at",
    cta_work: "View projects",
    cta_contact: "Get in touch",
    scroll: "Scroll down",
  },
  about: {
    title: "About Me",
    subtitle: "Background, education, and what I'm working on now.",
    description: [
      "I'm Muhammad Ilyas Istiqama Makmur, a web developer based in Surabaya. I hold a Bachelor's degree in Informatics Engineering (S.Kom) from Universitas 17 Agustus 1945 Surabaya, graduating with a GPA of 3.62.",
      "I began my career in 2022 at CV. Mamorasoft, building web applications for clients with Laravel and CodeIgniter, including HR and innovation management systems for Petrokimia Gresik. Since then I've delivered company systems, an e-commerce platform, and several freelance projects.",
      "I'm currently a Web Programmer at PT. Terik Indonesia Inside, working on the company's livestock management SaaS and website. I'm open to new job opportunities and freelance projects.",
    ],
    photo_caption: "Ranu Kumbolo, photographed by me",
    download_cv: "View CV",
    hire_me: "Get in touch",
  },
  stats: {
    years: "Years of experience",
    projects: "Projects",
    companies: "Companies",
    gpa: "GPA / 4.00",
  },
  photo: {
    title: "Let's build something together",
    text: "Have a role or project in mind? I'd be glad to hear about it.",
    cta: "Get in touch",
    caption: "Milky Way, photographed by me",
  },
  skill: {
    title: "Skills",
    subtitle: "What I work with day to day. Highlighted ones are what I use most in production.",
    core_label: "Used most in production",
    also_label: "Also comfortable with",
    also: ["Agile / Scrum", "System analysis (UML, BPMN, ERD)", "Code review", "Postman", "GitHub & Bitbucket"],
  },
  experience: {
    title: "Experience",
    subtitle: "My professional roles, starting with the most recent.",
  },
  project: {
    title: "Projects",
    subtitle: "Selected projects from my work at companies, for freelance clients, and personal projects.",
    filter_all: "All",
    cat_company: "Work",
    cat_freelance: "Freelance",
    cat_personal: "Personal",
    visit: "Visit site",
    no_project: "Nothing in this category yet.",
  },
  contact: {
    title: "Contact",
    subtitle: "I'm open to job opportunities and freelance projects. Send a message through the form or email me directly, and I'll get back to you as soon as I can.",
    info_title: "Contact Information",
    form_title: "Send a message",
    name_label: "Name",
    name_placeholder: "Your full name",
    email_label: "Email",
    message_label: "Message",
    message_placeholder: "Tell me about the role or project",
    send_btn: "Send Message",
    sending_btn: "Sending...",
    success_msg: "Thank you, your message has been sent. I'll reply to your email soon.",
    error_msg: "Sorry, the message couldn't be sent. Please try again or email me directly.",
    footer: "Coded & designed by me over plenty of coffee ☕.",
  },
  not_found: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    back: "Back to home",
  },
};

export default en;
