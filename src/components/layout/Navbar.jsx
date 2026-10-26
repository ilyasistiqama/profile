import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import useScrollState from "../../hooks/useScrollState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";

const iconButton =
  "flex size-9 items-center justify-center rounded-full border border-line font-mono text-xs font-medium transition-colors hover:border-fg/30";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { scrolled, hidden } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/experience", label: t.nav.experience },
    { to: "/portfolio", label: t.nav.project },
    { to: "/contact", label: t.nav.contact },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-fg ${isActive ? "text-fg" : "text-muted"}`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300
        ${scrolled || menuOpen ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent"}
        ${hidden && !menuOpen ? "-translate-y-full" : ""}`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="font-mono text-lg font-medium">
          muis<span className="text-accent">.life</span>
        </NavLink>

        {/* Tombol menu (HP) */}
        <button
          type="button"
          className={`${iconButton} lg:hidden`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        {/* Menu: selalu tampil di desktop, buka-tutup di HP */}
        <div
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-5 top-full flex-col items-center gap-4 rounded-2xl border border-line bg-surface p-6 shadow-lg
            lg:static lg:flex lg:flex-row lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-3">
            <button type="button" onClick={toggleLang} className={iconButton} title={t.nav.lang_title} aria-label="Toggle language">
              {lang.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className={iconButton}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} className={isDark ? "text-yellow-400" : ""} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
