// Daftar keahlian, ditampilkan per "category" (urutan mengikuti data).
// Sengaja dibuat ringkas: hanya yang benar-benar dipakai. "core: true" = paling sering dipakai di production.
// Hal pendukung (metodologi, analisis sistem, tools) ada di locales: skill.also.
const skills = [
  // ===== BACKEND =====
  { name: "PHP", category: "Backend", core: true },
  { name: "Laravel", category: "Backend", core: true },
  { name: "REST API", category: "Backend", core: true },
  { name: "CodeIgniter 4", category: "Backend" },

  // ===== FRONTEND =====
  { name: "JavaScript", category: "Frontend", core: true },
  { name: "Bootstrap", category: "Frontend", core: true },
  { name: "jQuery", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "React", category: "Frontend" }, // dipakai untuk website ini
  { name: "Tailwind CSS", category: "Frontend" },

  // ===== DATABASE =====
  { name: "MySQL", category: "Database", core: true },
  { name: "PostgreSQL", category: "Database", core: true },

  // ===== SERVER & TOOLS =====
  { name: "Linux (Ubuntu)", category: "Server & Tools", core: true },
  { name: "Nginx", category: "Server & Tools" },
  { name: "VPS Deployment", category: "Server & Tools", core: true },
  { name: "Server Hardening", category: "Server & Tools" },
  { name: "Git", category: "Server & Tools", core: true },
];

export default skills;
