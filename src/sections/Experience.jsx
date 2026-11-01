import { useLanguage } from "../context/LanguageContext";
import useInView from "../hooks/useInView";
import experiences from "../data/experiences";
import { formatExperienceDuration, getExperienceMonths } from "../utils/experienceDuration";

// Urutan perusahaan dan jabatan mengikuti data pengalaman, dari yang terbaru.
const companyGroups = Array.from(
  experiences.reduce((groups, exp) => {
    if (!groups.has(exp.company)) groups.set(exp.company, []);
    groups.get(exp.company).push(exp);
    return groups;
  }, new Map()),
  ([company, roles]) => ({ company, roles }),
);

function ExperienceCompany({ company, roles, lang, index: companyIndex }) {
  const [ref, inView] = useInView(0.15);
  const latest = roles[0];
  const earliest = roles[roles.length - 1];
  const period = `${earliest.since[lang].split(" - ")[0]} - ${latest.since[lang].split(" - ")[1]}`;
  const jobdesks = [...new Set(roles.flatMap((role) => role.jobdesks[lang]))];

  return (
    <li
      id={`experience-company-${companyIndex}`}
      ref={ref}
      className={`min-w-0 scroll-mt-24 border-b border-line py-6 transition-all duration-700 sm:py-8 lg:scroll-mt-28 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <p className="mb-4 font-mono text-xs leading-6 text-muted sm:text-sm">{period}</p>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          {latest.logo && (
            <img src={latest.logo} alt="" loading="lazy" decoding="async" className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1" />
          )}
          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold">
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
              <div className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="min-w-0 break-words font-medium text-accent">{role.position[lang]}</h4>
                <p className="max-w-full font-mono text-xs leading-6 text-muted">{role.since[lang]}</p>
              </div>
            </li>
          ))}
        </ol>

        {jobdesks.length > 0 && (
          <div className="mt-6 rounded-2xl border border-line bg-bg-alt p-4 sm:p-6">
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
  const now = new Date();
  const totalMonths = getExperienceMonths(experiences.filter((role) => !role.internship), now);

  return (
    <section id="experience" className="px-4 pt-28 pb-16 sm:px-5 sm:pt-32 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-6xl lg:grid lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
        {/* Ringkasan masa kerja sekaligus navigasi ke setiap perusahaan. */}
        <div className="flex min-w-0 flex-col self-start border-b border-line bg-bg py-3 lg:sticky lg:top-24 lg:border-0 lg:py-0">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">{t.experience.title}</h1>
            <p className="mt-2 text-sm leading-6 text-muted">{t.experience.subtitle}</p>
          </div>

          <nav aria-label={t.experience.career_index} className="hidden pt-6 lg:block">
            <div className="mb-4 border-l-2 border-accent pl-4">
              <p className="text-xs text-muted">{t.experience.total_tenure}</p>
              <p className="mt-1 text-xl font-semibold text-accent">{formatExperienceDuration(totalMonths, lang)}</p>
            </div>
            <ol className="border-t border-line">
              {companyGroups.map(({ company, roles }, index) => (
                <li key={company} className="border-b border-line">
                  <a href={`#experience-company-${index}`} className="block py-2.5 transition-colors hover:text-accent focus-visible:outline-accent">
                    <span className="block break-words text-sm font-medium">{company}</span>
                    <span className="mt-0.5 block text-xs text-muted">{formatExperienceDuration(getExperienceMonths(roles, now), lang)}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <ol className="mt-4 min-w-0 lg:mt-0 lg:border-t lg:border-line">
          {companyGroups.map((group, index) => (
            <ExperienceCompany key={group.company} {...group} lang={lang} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
