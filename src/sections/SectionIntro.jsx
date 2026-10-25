import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { Link } from 'react-router-dom';

const SectionIntro = () => {
  const { t } = useLanguage();

  return (
    <section id="intro">
      <div className="container">
        <div id="intro-content">

          <p className="hero-role reveal-item delay-1">{t.intro.role}</p>

          <h1 className="reveal-item delay-2" id="name">
            {t.intro.hi} <span className="name-highlight">Ilyas</span>
          </h1>

          <div className="reveal-item delay-3 desc-wrapper">
            {t.intro.description.map((desc, index) => (
              <p key={index} className="intro-desc">
                {desc}
              </p>
            ))}
          </div>

          <div className="reveal-item delay-4 action-group">
            <Link to="/portfolio" className="btn-primary">{t.intro.cta_work}</Link>
            <Link to="/contact" className="btn-secondary">{t.intro.cta_contact}</Link>
          </div>

          <a href="#about-me" id="redirect" aria-label={t.intro.scroll}>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>

        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
