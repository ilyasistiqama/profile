import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        // scroll ke bawah
        setShowNavbar(false);
      } else {
        // scroll ke atas
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top main-navbar ${
        showNavbar ? "navbar-show" : "navbar-hide"
      }`}
    >
      <div className="container-fluid">
        {/* LOGO */}
        <a className="navbar-brand brand-logo" href="#intro">
          ILYAS<span>-DEV</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {[
              { href: "#about-me", label: "ABOUT" },
              { href: "#skill", label: "SKILL" },
              { href: "#experience", label: "EXPERIENCE" },
              { href: "#project", label: "PROJECT" },
              { href: "#contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <a href={href} className="nav-link nav-animated">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
        .main-navbar {
          background: rgba(33, 37, 41, 0.85);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.8rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.45);
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .navbar-hide {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .navbar-show {
          transform: translateY(0);
          opacity: 1;
        }

        .brand-logo {
          font-weight: 900;
          font-size: 1.7rem;
          letter-spacing: 2px;
          color: #00adb5;
          text-shadow: 0 0 4px rgba(0,173,181,0.5);
          transition: text-shadow 0.3s ease;
        }

        .brand-logo span {
          color: #eeeeee;
        }

        .brand-logo:hover {
          text-shadow:
            0 0 6px #00adb5,
            0 0 14px #00adb5;
        }

        .navbar-nav {
          gap: 1.8rem;
        }

        .nav-animated {
          position: relative;
          color: #eeeeee;
          font-weight: 600;
          letter-spacing: 1px;
          padding: 6px 0;
          transition: color 0.3s ease;
        }

        .nav-animated::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00adb5, #5ffbf1);
          transition: width 0.3s ease;
        }

        .nav-animated:hover {
          color: #00adb5;
        }

        .nav-animated:hover::after {
          width: 100%;
        }

        @media (max-width: 991px) {
          .navbar-nav {
            gap: 1rem;
            margin-top: 12px;
          }
        }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
