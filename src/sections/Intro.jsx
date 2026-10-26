import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import heroBackground from "../assets/images/background.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="intro"
      className="flex min-h-[90vh] items-center bg-cover bg-center px-5 pt-28 pb-10 text-white md:min-h-screen"
      style={{
        // Overlay gelap supaya teks tetap terbaca di atas foto
        backgroundImage: `linear-gradient(rgba(5, 8, 12, 0.55), rgba(5, 8, 12, 0.7)), url(${heroBackground})`,
      }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl animate-fade-up">
          {/* Status sedang mencari kerja */}
          <div className="mb-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-sm">
              <span className="size-2 rounded-full bg-green-400" />
              <span className="font-semibold">{t.intro.open_to_work}</span>
              <span className="text-white/70">· {t.intro.work_mode}</span>
            </p>

            {/* Area kerja, dikelompokkan per provinsi */}
            <ul className="mt-3 space-y-1 text-sm text-white/75">
              {t.intro.work_areas.map((area) => (
                <li key={area.region} className="flex gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="mt-1 w-3 shrink-0 text-xs text-[#33c4cb]" />
                  <span>
                    <span className="font-semibold text-white">{area.region}:</span> {area.cities}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-3 font-semibold text-[#33c4cb]">{t.intro.role}</p>

          <h1 className="text-4xl leading-tight font-extrabold md:text-6xl">
            {t.intro.hi} <span className="text-[#33c4cb]">Ilyas</span>
          </h1>

          <div className="mt-6 space-y-2 text-white/80 md:text-lg">
            {t.intro.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row">
            <Button to="/portfolio">{t.intro.cta_work}</Button>
            <Button to="/contact" variant="light">{t.intro.cta_contact}</Button>
          </div>

          <a href="#about-me" aria-label={t.intro.scroll} className="mt-14 inline-block text-xl text-white/70 hover:text-[#33c4cb]">
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </div>
    </section>
  );
}
