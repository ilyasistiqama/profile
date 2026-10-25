import { useLanguage } from "../context/LanguageContext";
import useInView from "../hooks/useInView";
import experiences from "../data/experiences";

/*
 * Semua elemen timeline (garis, titik, label) diposisikan dari titik tengah
 * yang sama: LINE_X dari kiri, lalu digeser -50% supaya pas di tengah garis.
 */
const LINE_X = "left-3"; // 0.75rem

// Label kecil di ujung atas/bawah garis timeline
function TimelineLabel({ children }) {
  return (
    <div className="relative h-7">
      <span className={`absolute top-0 ${LINE_X} -translate-x-1/2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-bold whitespace-nowrap`}>
        {children}
      </span>
    </div>
  );
}

// Satu kartu pengalaman. Muncul perlahan saat di-scroll ke layar.
function ExperienceCard({ exp, lang }) {
  const [ref, inView] = useInView(0.15);

  return (
    <li
      ref={ref}
      className={`relative ml-10 rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Titik di garis timeline: 2.5rem (ml-10) - 0.75rem (LINE_X) = 1.75rem ke kiri */}
      <span className="absolute top-8 -left-7 size-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg" />

      <div className="flex items-center gap-3">
        {exp.logo && (
          <img src={exp.logo} alt={exp.company} loading="lazy" decoding="async" className="size-12 rounded-lg border border-line bg-white object-contain p-1" />
        )}
        <h3 className="text-lg font-bold">
          {exp.url ? (
            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {exp.company}
            </a>
          ) : (
            exp.company
          )}
        </h3>
      </div>

      <p className="mt-3 text-sm text-accent">{exp.since[lang]}</p>
      <h4 className="mt-3 border-t border-line pt-3 font-semibold italic">{exp.position[lang]}</h4>

      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted">
        {exp.jobdesks[lang].map((job) => (
          <li key={job}>{job}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="px-5 pt-32 pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2fr]">
        {/* Kiri: judul (menempel saat di-scroll di desktop) */}
        <div className="animate-fade-up lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-3xl font-bold md:text-4xl">{t.experience.title}</h2>
          <p className="mt-3 text-muted">{t.experience.subtitle}</p>
        </div>

        {/* Kanan: timeline */}
        <div className="relative ml-6 lg:ml-0">
          {/* Garis putus-putus */}
          <span className={`absolute inset-y-3 ${LINE_X} -translate-x-1/2 border-l-2 border-dashed border-accent/50`} />

          <TimelineLabel>{t.experience.present}</TimelineLabel>
          <ol className="my-8 space-y-8">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} exp={exp} lang={lang} />
            ))}
          </ol>
          <TimelineLabel>{t.experience.start}</TimelineLabel>
        </div>
      </div>
    </section>
  );
}
