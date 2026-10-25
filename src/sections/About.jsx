import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import Lightbox from "../components/ui/Lightbox";
import profile from "../data/profile";
import photo from "../assets/images/ilyas2.webp";

export default function About() {
  const { t } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="about-me" className="px-5 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:items-start">
        <img
          src={photo}
          alt="Ilyas"
          onClick={() => setZoomed(true)}
          loading="lazy"
          decoding="async"
          className="w-2/3 max-w-xs animate-fade-up cursor-zoom-in rounded-2xl shadow-xl md:w-1/3"
        />

        <div className="animate-fade-up">
          <h2 className="text-3xl font-bold md:text-4xl">{t.about.title}</h2>
          <p className="mt-2 text-sm text-accent">{t.about.subtitle}</p>

          <div className="mt-6 space-y-5 leading-relaxed text-muted">
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

      <Lightbox image={zoomed ? photo : null} alt="Ilyas" onClose={() => setZoomed(false)} />
    </section>
  );
}
