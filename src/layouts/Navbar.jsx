import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/layouts/navbar.css";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  /* ===== SCROLL BEHAVIOR ===== */
  useEffect(() => {
    let lastScroll = window.scrollY;
    const scrollThreshold = 10; // delta minimal untuk trigger hide/show

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      // Deteksi jika sudah scroll dari paling atas
      setIsScrolled(currentScroll > 50);

      // Logika Hide/Show dengan Delta
      if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNavbar(false); // Scroll kebawah -> Sembunyikan
      } else {
        setShowNavbar(true); // Scroll keatas -> Tampilkan
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== DARK MODE ===== */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top main-navbar ${
        showNavbar ? "navbar-show" : "navbar-hide"
      } ${isScrolled ? "navbar-scrolled" : "navbar-top"} ${
        isExpanded ? "navbar-expanded" : ""
      }`}
    >
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand brand-logo" href="#intro">
          muis<span>.life</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-label="Toggle navigation"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {[
              { href: "#about-me", label: t.nav.about },
              { href: "#skill", label: t.nav.skill },
              { href: "#experience", label: t.nav.experience },
              { href: "#project", label: t.nav.project },
              { href: "#contact", label: t.nav.contact },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <a href={href} className="nav-link nav-animated">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions d-flex align-items-center">
            {/* LANG TOGGLE */}
            <button
              className="lang-toggle-btn"
              onClick={toggleLang}
              aria-label="Toggle language"
              title={lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
            >
              {lang === "en" ? "ID" : "EN"}
            </button>

          {/* DARK MODE TOGGLE */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`} />
          </button>
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;
