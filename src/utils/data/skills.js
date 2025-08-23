import mysql from "../../assets/images/logo/mysql.png";
import postgresql from "../../assets/images/logo/postgresql.png";
// import jquery from "../../assets/images/logo/jquery.png";
// import ajax from "../../assets/images/logo/ajax.png";
// import expressjs from "../../assets/images/logo/expressjs.png";
import lumen from "../../assets/images/logo/lumen.png";
// import restfulapi from "../../assets/images/logo/rest-api.png";
// import dart from "../../assets/images/logo/dart.png";
// import flutter from "../../assets/images/logo/flutter.png";
import codeigniter from "../../assets/images/logo/ci.png";

const skills = [
  // ===== FRONTEND =====
  { name: "HTML", isImg: false, src: "fa-brands fa-html5", category: "Frontend" },
  { name: "CSS", isImg: false, src: "fa-brands fa-css3-alt", category: "Frontend" },
  { name: "Javascript", isImg: false, src: "fa-brands fa-js", category: "Frontend" },
  { name: "Bootstrap", isImg: false, src: "fa-brands fa-bootstrap", category: "Frontend" },
  { name: "Jquery", isImg: false, src: "fa-brands fa-js", category: "Frontend" }, // ganti JS icon
  { name: "AJAX", isImg: false, src: "fa-solid fa-arrows-rotate", category: "Frontend" }, // ganti refresh
  { name: "AngularJS", isImg: false, src: "fa-brands fa-angular", category: "Frontend" },
  { name: "ReactJS", isImg: false, src: "fa-brands fa-react", category: "Frontend" },
  { name: "VueJS", isImg: false, src: "fa-brands fa-vuejs", category: "Frontend" },

  // ===== BACKEND =====
  { name: "PHP", isImg: false, src: "fa-brands fa-php", category: "Backend" },
  { name: "Laravel", isImg: false, src: "fa-brands fa-laravel", category: "Backend" },
  { name: "Lumen", isImg: true, src: lumen, category: "Backend" }, // tetap image
  { name: "CodeIgniter 4", isImg: true, src: codeigniter, category: "Backend" }, // tetap image
  { name: "Restful API", isImg: false, src: "fa-solid fa-exchange-alt", category: "Backend" }, // ganti FA

  // ===== DATABASE =====
  { name: "MySQL", isImg: true, src: mysql, category: "Database" }, // tetap image
  { name: "PostgreSQL", isImg: true, src: postgresql, category: "Database" }, // tetap image
  { name: "ERD", isImg: false, src: "fa-solid fa-database", category: "Database" },

  // ===== DEVOPS / TOOLS =====
  { name: "Linux (Ubuntu)", isImg: false, src: "fa-brands fa-linux", category: "DevOps / Tools" },
  { name: "Git", isImg: false, src: "fa-brands fa-git-alt", category: "DevOps / Tools" },
  { name: "GitHub", isImg: false, src: "fa-brands fa-github", category: "DevOps / Tools" },
  { name: "Bitbucket", isImg: false, src: "fa-brands fa-bitbucket", category: "DevOps / Tools" },
  { name: "VPS & Deployment", isImg: false, src: "fa-solid fa-server", category: "DevOps / Tools" },
  { name: "Postman (API Docs)", isImg: false, src: "fa-solid fa-book", category: "DevOps / Tools" },
  { name: "Trello (Project Mgmt)", isImg: false, src: "fa-brands fa-trello", category: "DevOps / Tools" },

  // ===== WORKFLOW =====
  { name: "Agile / Scrum", isImg: false, src: "fa-solid fa-people-group", category: "Workflow" },
  { name: "Waterfall", isImg: false, src: "fa-solid fa-diagram-project", category: "Workflow" },

  // ===== BEST PRACTICES =====
  { name: "Clean Code", isImg: false, src: "fa-solid fa-broom", category: "Best Practices" },
  { name: "Design Patterns", isImg: false, src: "fa-solid fa-puzzle-piece", category: "Best Practices" },
  { name: "Versioning & Branching", isImg: false, src: "fa-solid fa-code-branch", category: "Best Practices" },
  { name: "Code Review & Collaboration", isImg: false, src: "fa-solid fa-people-arrows", category: "Best Practices" },

  // ===== SYSTEM ANALYSIS =====
  { name: "Use Case Diagram", isImg: false, src: "fa-solid fa-diagram-project", category: "System Analysis" },
  { name: "Activity Diagram", isImg: false, src: "fa-solid fa-diagram-next", category: "System Analysis" },
  { name: "Sequence Diagram", isImg: false, src: "fa-solid fa-arrow-right-arrow-left", category: "System Analysis" },
  { name: "BPMN", isImg: false, src: "fa-solid fa-network-wired", category: "System Analysis" },
];

export default skills;
