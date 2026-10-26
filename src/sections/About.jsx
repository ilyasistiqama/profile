import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import Lightbox from "../components/ui/Lightbox";
import profile from "../data/profile";
import ranuKumbolo from "../assets/images/background.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

// Foto profil ada di Intro, di sini foto jepretan sendiri
export default function About() {
  const { t } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="about-me" className="px-5 pt-20 pb-6 md:pt-24 md:pb-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr]">
        <div className="animate-fade-up">
          <h2 className="text-3xl font-semibold md:text-4xl">{t.about.title}</h2>
          <p className="mt-3 text-muted">{t.about.subtitle}</p>

          <figure className="mt-8">
            <img
              src={ranuKumbolo}
              alt={t.about.photo_caption}
              onClick={() => setZoomed(true)}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full cursor-zoom-in rounded-2xl border border-line object-cover"
            />
            <figcaption className="mt-2 text-xs text-muted">
              <FontAwesomeIcon icon={faCamera} className="mr-1" /> {t.about.photo_caption}
            </figcaption>
          </figure>
        </div>

        <div className="animate-fade-up">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {t.about.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={profile.cvUrl}>{t.about.download_cv}</Button>
            <Button to="/contact" variant="outline">{t.about.hire_me}</Button>
          </div>
        </div>
      </div>

      <Lightbox image={zoomed ? ranuKumbolo : null} alt={t.about.photo_caption} onClose={() => setZoomed(false)} />
    </section>
  );
}
