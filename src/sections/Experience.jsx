import { useLanguage } from "../context/LanguageContext";
import useInView from "../hooks/useInView";
import experiences from "../data/experiences";

// Urutan perusahaan dan jabatan mengikuti data pengalaman, dari yang terbaru.
const companyGroups = Array.from(
  experiences.reduce((groups, exp) => {
    if (!groups.has(exp.company)) groups.set(exp.company, []);
    groups.get(exp.company).push(exp);
    return groups;
  }, new Map()),
  ([company, roles]) => ({ company, roles }),
);

function ExperienceCompany({ company, roles, lang }) {
  const [ref, inView] = useInView(0.15);
  const latest = roles[0];
  const earliest = roles[roles.length - 1];
  const period = `${earliest.since[lang].split(" - ")[0]} - ${latest.since[lang].split(" - ")[1]}`;
  const jobdesks = [...new Set(roles.flatMap((role) => role.jobdesks[lang]))];

  return (
    <li
      ref={ref}
      className={`grid gap-3 border-b border-line py-8 transition-all duration-700 md:grid-cols-[180px_1fr] md:gap-8 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <p className="font-mono text-sm text-muted md:pt-3">{period}</p>

      <div>
        <div className="flex items-center gap-3">
          {latest.logo && (
            <img src={latest.logo} alt="" loading="lazy" decoding="async" className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1" />
          )}
          <div>
            <h3 className="text-lg font-semibold">
              {latest.url ? (
                <a href={latest.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {company}
                </a>
              ) : (
                company
              )}
            </h3>
          </div>
        </div>

        <ol className="mt-5">
          {roles.map((role, index) => (
            <li key={`${role.position.en}-${role.since.en}`} className="relative pb-5 pl-7 last:pb-0">
              {index < roles.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-[-0.75rem] left-1.5 top-3 w-px -translate-x-1/2 bg-line" />
              )}
              <span aria-hidden="true" className="absolute left-1.5 top-3 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h4 className="font-medium text-accent">{role.position[lang]}</h4>
                <p className="shrink-0 font-mono text-xs text-muted">{role.since[lang]}</p>
              </div>
            </li>
          ))}
        </ol>

        {jobdesks.length > 0 && (
          <div className="mt-7 rounded-2xl border border-line bg-bg-alt p-5 sm:p-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-fg">
              {lang === "id" ? "Kontribusi utama" : "Key contributions"}
            </h4>
            <ul className="mt-4 space-y-4">
              {jobdesks.map((job) => (
                <li key={job} className="grid grid-cols-[0.375rem_minmax(0,1fr)] gap-3 text-sm leading-7 text-muted">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 rounded-full bg-accent/70" />
                  <p className="break-words">{job}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
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
          {companyGroups.map((group) => (
            <ExperienceCompany key={group.company} {...group} lang={lang} />
          ))}
        </ol>
      </div>
    </section>
  );
}
