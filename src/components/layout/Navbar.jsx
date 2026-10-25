import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import useScrollState from "../../hooks/useScrollState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";

const iconButton =
  "flex size-9 items-center justify-center rounded-lg border border-line text-sm font-bold transition-colors hover:border-accent hover:text-accent";

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
    `font-semibold transition-colors hover:text-accent ${isActive ? "text-accent" : ""}`;

  return (
    <nav
      className={`fixed inset-x-4 top-4 z-50 rounded-xl border border-line backdrop-blur-md transition-all duration-300
        ${scrolled || menuOpen ? "bg-surface/95 shadow-lg" : "bg-surface/85"}
        ${hidden && !menuOpen ? "-translate-y-[calc(100%+1rem)]" : ""}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <NavLink to="/" className="text-2xl font-extrabold text-accent">
          muis<span className="text-fg">.life</span>
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
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full mt-2 flex-col items-center gap-4 rounded-xl border border-line bg-surface p-6 shadow-lg
            lg:static lg:mt-0 lg:flex lg:flex-row lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
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
