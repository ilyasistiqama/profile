import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import Lightbox from "../components/ui/Lightbox";
import experiences from "../data/experiences";
import profile from "../data/profile";
import photo from "../assets/images/ilyas2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Pekerjaan paling atas di data = pekerjaan saat ini
const current = experiences[0];

export default function Intro() {
  const { t } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="intro" className="relative isolate px-5 pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.5fr_1fr]">
        <div className="animate-fade-up">
          {/* Status sedang mencari kerja */}
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            <span className="font-medium">{t.intro.open_to_work}</span>
            <span className="text-muted">· {t.intro.work_mode}</span>
          </p>

          <p className="mt-8 font-mono text-sm text-muted">{t.intro.hi}</p>
          <h1 className="mt-2 text-5xl leading-[1.05] font-semibold md:text-7xl">
            Ilyas Istiqama<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-muted md:text-2xl">{t.intro.role}</p>

          <div className="mt-6 max-w-xl space-y-3 leading-relaxed text-muted">
            {t.intro.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/portfolio">
              {t.intro.cta_work} <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Button>
            <Button to="/contact" variant="outline">{t.intro.cta_contact}</Button>
            <div className="ml-1 flex gap-1">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-bg-alt hover:text-fg"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Area kerja, dikelompokkan per provinsi */}
          <ul className="mt-10 space-y-1.5 text-sm text-muted">
            {t.intro.work_areas.map((area) => (
              <li key={area.region} className="flex gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="mt-1 w-3 shrink-0 text-xs text-accent" />
                <span>
                  <span className="font-medium text-fg">{area.region}:</span> {area.cities}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Foto + tempat kerja saat ini */}
        <figure className="relative mx-auto w-full max-w-xs animate-fade-up md:max-w-none">
          <img
            src={photo}
            alt="Ilyas Istiqama"
            onClick={() => setZoomed(true)}
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/5] w-full cursor-zoom-in rounded-3xl border border-line object-cover shadow-2xl shadow-black/10"
          />
          <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-black/55 p-3 text-white backdrop-blur-md">
            {current.logo && (
              <img src={current.logo} alt="" className="size-10 shrink-0 rounded-lg bg-white object-contain p-1" />
            )}
            <span className="min-w-0">
              <span className="block text-xs text-white/70">{t.intro.currently}</span>
              <span className="block truncate text-sm font-medium">{current.company}</span>
            </span>
          </figcaption>
        </figure>
      </div>

      <Lightbox image={zoomed ? photo : null} alt="Ilyas Istiqama" onClose={() => setZoomed(false)} />
    </section>
  );
}
