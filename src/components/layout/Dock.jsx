import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faEnvelope, faFolderOpen, faHouse, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

// Navigasi utama bergaya dock:
// - laptop/PC/TV (variant desk:, lihat index.css): pil vertikal melayang di sisi kiri, ikon membesar saat di-hover + tooltip
// - HP & tablet: pil horizontal melayang di tengah bawah layar
// Efek "membesar" (magnify) diatur lewat class .dock-item di index.css.
export default function Dock() {
  const { t, lang, toggleLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const links = [
    { to: "/", label: t.nav.home, icon: faHouse },
    { to: "/experience", label: t.nav.experience, icon: faBriefcase },
    { to: "/portfolio", label: t.nav.project, icon: faFolderOpen },
    { to: "/contact", label: t.nav.contact, icon: faEnvelope },
  ];

  const item =
    "dock-item group relative flex size-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent desk:size-11";
  const idle = "text-muted hover:bg-bg-alt hover:text-fg";
  // Halaman aktif: ikon teal dengan latar teal tipis
  const active = "bg-accent/10 text-accent";

  // Tooltip nama di sebelah kanan ikon (hanya laptop/PC/TV)
  const tooltip = (label) => (
    <span className="pointer-events-none absolute top-1/2 left-full ml-4 hidden -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-fg opacity-0 shadow-md transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 desk:block">
      {label}
    </span>
  );

  return (
    <nav
      aria-label={t.nav.main}
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 desk:inset-x-auto desk:top-1/2 desk:bottom-auto desk:left-5 desk:-translate-y-1/2 desk:px-0"
    >
      <div className="dock flex items-center gap-1 rounded-full border border-line bg-surface/80 p-1.5 shadow-lg shadow-black/5 backdrop-blur-md desk:flex-col desk:gap-1.5 desk:p-2">
        {/* Logo: hanya di laptop/PC/TV, di HP & tablet fungsinya sudah diwakili ikon Beranda */}
        <NavLink
          to="/"
          aria-label={t.nav.home}
          className="dock-item group relative mb-1 hidden size-10 items-center justify-center desk:flex desk:size-11"
        >
          <span
            aria-hidden="true"
            className="relative flex size-9 -rotate-6 items-center justify-center overflow-hidden rounded-xl bg-accent text-on-accent shadow-sm transition-transform duration-300 group-hover:rotate-0 motion-reduce:transform-none"
          >
            <span className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent" />
            <span className="relative font-serif text-2xl font-bold italic leading-none">I</span>
          </span>
        </NavLink>

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            aria-label={link.label}
            className={({ isActive }) => `${item} ${isActive ? active : idle}`}
          >
            <FontAwesomeIcon icon={link.icon} />
            {tooltip(link.label)}
          </NavLink>
        ))}

        <span aria-hidden="true" className="mx-1 h-6 w-px bg-line desk:mx-0 desk:my-1 desk:h-px desk:w-6" />

        <button type="button" onClick={toggleLang} className={`${item} ${idle} font-mono text-xs font-medium`} aria-label="Toggle language">
          {lang.toUpperCase()}
          {tooltip(t.nav.lang_title)}
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          className={`${item} ${idle}`}
          aria-label="Toggle dark mode"
        >
          {/* Ikon menunjukkan mode yang sedang aktif: bulan = gelap, matahari = terang.
              Bulan sabit berat ke kiri, jadi digeser sedikit ke kanan agar terlihat di tengah. */}
          <FontAwesomeIcon icon={isDark ? faMoon : faSun} className={isDark ? "translate-x-[1.5px]" : "text-amber-500"} />
          {tooltip(isDark ? t.nav.theme_light : t.nav.theme_dark)}
        </button>
      </div>
    </nav>
  );
}
