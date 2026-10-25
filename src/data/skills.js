import { faAngular, faBitbucket, faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faLaravel, faLinux, faPhp, faReact, faTrello } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightArrowLeft,
  faArrowsRotate,
  faBolt,
  faBroom,
  faBug,
  faCodeBranch,
  faDatabase,
  faDiagramNext,
  faDiagramProject,
  faEnvelopeOpenText,
  faFireFlameCurved,
  faNetworkWired,
  faPeopleArrows,
  faPeopleGroup,
  faPuzzlePiece,
  faRightLeft,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

// Daftar keahlian, ditampilkan per "category".
// "icon" diambil dari Font Awesome (import di atas). "core: true" = skill utama (ditandai warna aksen).
const skills = [
  // ===== FRONTEND =====
  { name: "HTML", icon: faHtml5, category: "Frontend", core: true },
  { name: "CSS", icon: faCss3Alt, category: "Frontend", core: true },
  { name: "JavaScript", icon: faJs, category: "Frontend", core: true },
  { name: "Bootstrap", icon: faBootstrap, category: "Frontend", core: true },
  { name: "jQuery", icon: faJs, category: "Frontend", core: true },
  { name: "AJAX", icon: faArrowsRotate, category: "Frontend", core: true },
  { name: "ReactJS", icon: faReact, category: "Frontend" }, // dipakai untuk website ini
  { name: "AngularJS", icon: faAngular, category: "Frontend" },

  // ===== BACKEND =====
  { name: "PHP", icon: faPhp, category: "Backend", core: true },
  { name: "Laravel", icon: faLaravel, category: "Backend", core: true },
  { name: "Lumen", icon: faBolt, category: "Backend" },
  { name: "CodeIgniter 4", icon: faFireFlameCurved, category: "Backend" },
  { name: "Restful API", icon: faRightLeft, category: "Backend", core: true },

  // ===== DATABASE =====
  { name: "MySQL", icon: faDatabase, category: "Database", core: true },
  { name: "PostgreSQL", icon: faDatabase, category: "Database", core: true },
  { name: "ERD", icon: faDiagramProject, category: "Database" },

  // ===== DEVOPS / TOOLS =====
  { name: "Linux (Ubuntu)", icon: faLinux, category: "DevOps / Tools" },
  { name: "Git", icon: faGitAlt, category: "DevOps / Tools", core: true },
  { name: "GitHub", icon: faGithub, category: "DevOps / Tools" },
  { name: "Bitbucket", icon: faBitbucket, category: "DevOps / Tools" },
  { name: "VPS & Deployment", icon: faServer, category: "DevOps / Tools", core: true },
  { name: "Postman (API Docs)", icon: faEnvelopeOpenText, category: "DevOps / Tools" },
  { name: "Trello (Project Mgmt)", icon: faTrello, category: "DevOps / Tools" },

  // ===== SECURITY =====
  { name: "Server Hardening (Nginx & PHP)", icon: faShieldHalved, category: "Security" },
  { name: "Web Shell Incident Response", icon: faBug, category: "Security" },

  // ===== WORKFLOW =====
  { name: "Agile / Scrum", icon: faPeopleGroup, category: "Workflow" },
  { name: "Waterfall", icon: faDiagramProject, category: "Workflow" },

  // ===== BEST PRACTICES =====
  { name: "Clean Code", icon: faBroom, category: "Best Practices" },
  { name: "Design Patterns", icon: faPuzzlePiece, category: "Best Practices" },
  { name: "Versioning & Branching", icon: faCodeBranch, category: "Best Practices" },
  { name: "Code Review & Collaboration", icon: faPeopleArrows, category: "Best Practices" },

  // ===== SYSTEM ANALYSIS =====
  { name: "Use Case Diagram", icon: faDiagramProject, category: "System Analysis" },
  { name: "Activity Diagram", icon: faDiagramNext, category: "System Analysis" },
  { name: "Sequence Diagram", icon: faArrowRightArrowLeft, category: "System Analysis" },
  { name: "BPMN", icon: faNetworkWired, category: "System Analysis" },
];

export default skills;
