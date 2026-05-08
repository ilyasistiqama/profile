import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SectionContact = () => {
  const { t } = useLanguage();
  const thisYear = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
    try {

      const res = await fetch("https://formspree.io/f/xlgzwzdk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const SOCIALS = [
    { href: "https://www.facebook.com/I.Istiqama.Makmur", icon: "fab fa-facebook-f", cls: "facebook", label: "Facebook" },
    { href: "https://www.instagram.com/lifeofaays", icon: "fab fa-instagram", cls: "instagram", label: "Instagram" },
    { href: "https://www.threads.net/@lifeofaays", icon: "fa-brands fa-threads", cls: "threads", label: "Threads" },
    { href: "mailto:ilyasistiqama@gmail.com", icon: "fab fa-google", cls: "email", label: "Email" },
    { href: "https://www.linkedin.com/in/muh-ilyas-istiqama", icon: "fab fa-linkedin-in", cls: "linkedin", label: "LinkedIn" },
    { href: "https://github.com/ilyasistiqama", icon: "fab fa-github", cls: "github", label: "GitHub" },
  ];

  return (
    <section id="contact">
      {/* ===== UPPER: FORM + INFO ===== */}
      <div className="contact-upper">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT: Info */}
            <div className="contact-info fade-up">
              <h2 className="contact-heading">{t.contact.title}</h2>
              <p className="contact-sub">
                {t.contact.subtitle}
              </p>

              <div className="contact-detail-list">
                <div className="contact-detail-item">
                  <i className="fas fa-envelope" />
                  <a href="mailto:ilyasistiqama@gmail.com">
                    ilyasistiqama@gmail.com
                  </a>
                </div>
                <div className="contact-detail-item">
                  <i className="fas fa-map-marker-alt" />
                  <span>Surabaya, Indonesia</span>
                </div>
                <div className="contact-detail-item">
                  <i className="fas fa-globe" />
                  <a href="https://muis.life" target="_blank" rel="noopener noreferrer">
                    muis.life
                  </a>
                </div>
              </div>

              <div className="social-wrapper contact-socials fade-up delay-1">
                {SOCIALS.map(({ href, icon, cls, label }) => (
                  <a
                    key={cls}
                    className={`btn btn-outline-light btn-floating ${cls}`}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: Form */}
            <form
              className="contact-form fade-up delay-1"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="contact-name">{t.contact.name_label}</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">{t.contact.email_label}</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">{t.contact.message_label}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={t.contact.message_placeholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-send"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? (
                  <>
                    <i className="fas fa-spinner fa-spin" /> {t.contact.sending_btn}
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" /> {t.contact.send_btn}
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <div className="form-feedback success">
                  <i className="fas fa-check-circle" /> {t.contact.success_msg}
                </div>
              )}
              {formStatus === "error" && (
                <div className="form-feedback error">
                  <i className="fas fa-exclamation-circle" /> {t.contact.error_msg}
                </div>
              )}
            </form>

          </div>
        </div>
      </div>

      {/* ===== LOWER: FOOTER ===== */}
      <footer className="contact-footer text-center text-white">
        <div className="footer-divider" />
        <div className="footer-bottom py-3">
          <p className="m-0">© {thisYear} muis.life • {t.contact.footer}</p>
        </div>
      </footer>
    </section>
  );
};

export default SectionContact;
