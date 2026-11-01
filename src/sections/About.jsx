import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import Lightbox from "../components/ui/Lightbox";
import profile from "../data/profile";
import formalPhoto from "../assets/images/ilyas-formal.webp";

// Foto formal melengkapi perkenalan di bagian About.
export default function About() {
  const { t } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="about-me" className="px-5 pt-20 pb-6 md:pt-24 md:pb-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr]">
        <div className="animate-fade-up">
          <h2 className="text-3xl font-semibold md:text-4xl">{t.about.title}</h2>
          <p className="mt-3 text-muted">{t.about.subtitle}</p>
        </div>
        <p className="self-end font-mono text-xs uppercase tracking-widest text-accent md:justify-self-end">
          {profile.role} · {profile.location}
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-8 rounded-3xl border border-line bg-bg-alt p-6 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 lg:p-10">
        <figure className="flex min-w-0 flex-wrap items-center gap-5 self-start lg:block">
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label={t.about.view_portrait}
            className="block w-28 shrink-0 cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-36 lg:w-52"
          >
            <img
              src={formalPhoto}
              alt={profile.name}
              width={800}
              height={1067}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover"
            />
          </button>
          <figcaption className="min-w-0 lg:mt-5">
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">{profile.role}</p>
            <span aria-hidden="true" className="mt-5 block h-1 w-10 rounded-full bg-accent" />
          </figcaption>
        </figure>

        <div>
          <div className="space-y-5 text-base leading-8 text-muted">
            {t.about.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
            <Button href={profile.cvUrl}>{t.about.download_cv}</Button>
            <Button to="/contact" variant="outline">{t.about.hire_me}</Button>
          </div>
        </div>
      </div>

      <Lightbox image={zoomed ? formalPhoto : null} alt={profile.name} onClose={() => setZoomed(false)} />
    </section>
  );
}
