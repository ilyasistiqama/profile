import { useLanguage } from "../context/LanguageContext";
import useInView from "../hooks/useInView";
import experiences from "../data/experiences";

// Satu baris pengalaman: periode di kiri, detail di kanan. Muncul perlahan saat di-scroll ke layar.
function ExperienceItem({ exp, lang }) {
  const [ref, inView] = useInView(0.15);

  return (
    <li
      ref={ref}
      className={`grid gap-3 border-b border-line py-8 transition-all duration-700 md:grid-cols-[180px_1fr] md:gap-8 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <p className="font-mono text-sm text-muted md:pt-3">{exp.since[lang]}</p>

      <div>
        <div className="flex items-center gap-3">
          {exp.logo && (
            <img src={exp.logo} alt="" loading="lazy" decoding="async" className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1" />
          )}
          <div>
            <h3 className="text-lg font-semibold">
              {exp.url ? (
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h3>
            <p className="text-sm text-accent">{exp.position[lang]}</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-muted">
          {exp.jobdesks[lang].map((job) => (
            <li key={job} className="flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-muted/60" />
              {job}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="px-5 pt-32 pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2.2fr]">
        {/* Kiri: judul (menempel saat di-scroll di desktop) */}
        <div className="animate-fade-up lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-semibold md:text-4xl">{t.experience.title}</h2>
          <p className="mt-3 text-muted">{t.experience.subtitle}</p>
        </div>

        <ol className="border-t border-line">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} exp={exp} lang={lang} />
          ))}
        </ol>
      </div>
    </section>
  );
}
