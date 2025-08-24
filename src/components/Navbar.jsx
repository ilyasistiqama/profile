import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll ke bawah → langsung hide
        setShowNavbar(false);
      } else {
        // Scroll ke atas → show dulu
        setShowNavbar(true);

        // Kalau ada timeout sebelumnya, clear dulu
        if (timeoutId) clearTimeout(timeoutId);

        // Setelah 3 detik otomatis hide lagi
        const id = setTimeout(() => {
          setShowNavbar(false);
        }, 3000);
        setTimeoutId(id);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY, timeoutId]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${showNavbar ? "navbar-show" : "navbar-hide"
        }`}
      style={{
        backgroundColor: "#212529",
        boxShadow: "0 2px 8px rgba(0,0,0,0.7)",
        padding: "0.8rem 1.5rem",
        transition: "transform 0.4s ease, opacity 0.4s ease",
      }}
    >
      <div className="container-fluid">
        {/* LOGO */}
        <a
          className="navbar-brand"
          href="#intro"
          style={{
            color: "#00adb5",
            fontWeight: "900",
            fontSize: "1.8rem",
            letterSpacing: "2px",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "0px 0px 1px #eeeeee",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
          (e.target.style.textShadow =
            "0px 0px 6px #00adb5, 0px 0px 12px #00adb5")
          }
          onMouseLeave={(e) =>
            (e.target.style.textShadow = "0px 0px 1px #eeeeee")
          }
        >
          ILYAS-DEV
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#00adb5" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{ gap: "2rem" }}
          >
            {[
              { href: "#about-me", label: "ABOUT" },
              { href: "#skill", label: "SKILL" },
              { href: "#experience", label: "EXPERIENCE" },
              { href: "#project", label: "PROJECT" },
              { href: "#contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <a
                  href={href}
                  className="nav-link"
                  style={{
                    color: "#eeeeee",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#00adb5")}
                  onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CSS tambahan */}
      <style>
        {`
          .navbar-hide {
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
          }
          .navbar-show {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
