import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const SectionPhoto = () => {
  const { t } = useLanguage();

  return (
    <section id="photo">
      <div className="container">
        <div className="photo-content">
          <h2>{t.photo.title}</h2>
          <p>{t.photo.text}</p>
          <Link to="/contact" className="btn-photo">{t.photo.cta}</Link>
        </div>
      </div>
      <span className="photo-caption">
        <i className="fa-solid fa-camera" /> {t.photo.caption}
      </span>
    </section>
  );
};

export default SectionPhoto;
