import React from "react";
import FotoIlyas from "../assets/images/ilyas2.webp";
import { useImageOverlay } from "../components/ImageOverlay";
import { useLanguage } from "../context/LanguageContext";

const handleClickCV = (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/drive/folders/1ToUoWToqsUVoGj7CRcbUsMxIT5RhuYUC?usp=sharing",
    "_blank"
  );
};

const SectionAboutMe = () => {
  const { t } = useLanguage();
  const { selectedImage, openOverlay, closeOverlay } = useImageOverlay();



  return (
    <section id="about-me">
      <div className="container">
        <div id="content">
          <div className="about-image-wrapper reveal-left">
            <img
              src={FotoIlyas}
              alt="Ilyas profile"
              id="image-me"
              onClick={() => openOverlay(FotoIlyas)}
            />
          </div>

          <div id="text" className="reveal-right">
            <h2>{t.about.title}</h2>
            <span className="about-subtitle">
              {t.about.subtitle}
            </span>

            {t.about.description.map((para, i) => (
              <p key={i} className={`delay-${i + 1}`}>
                {para}
              </p>
            ))}

            <div className="about-actions delay-4">
              <button
                type="button"
                className="btn-custom"
                onClick={handleClickCV}
              >
                {t.about.download_cv}
              </button>

              <a href="#contact" className="btn-custom outline">
                {t.about.hire_me}
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="overlay active">
          <span className="close-btn" onClick={closeOverlay}>
            ×
          </span>
          <img src={selectedImage} alt="Zoomed profile" id="zoomed-image" />
        </div>
      )}
    </section>
  );
};

export default SectionAboutMe;
