import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import projects from "../data/projects";
import useInView from "../hooks/useInView";
import experiences from "../data/experiences";
import slugify from "../utils/slug";
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

// Proyek yang dikerjakan di perusahaan ini: dicocokkan dari field "client" di data proyek.
// Untuk "Freelancer", ambil proyek berkategori Freelance.
function relatedProjects(company) {
  return projects.filter((project) =>
    company === "Freelancer" ? project.category === "Freelance" : project.client === company
  );
}

// Posisi "top" untuk kolom kiri yang menempel (sticky), dihitung supaya kolom berada
// di tengah layar secara vertikal (sejajar dock). Kalau kolom lebih tinggi dari layar,
// cukup beri jarak kecil dari atas.
function useCenteredStickyTop(minTop = 24) {
  const ref = useRef(null);
  const [top, setTop] = useState(minTop);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setTop(Math.max(minTop, Math.round((window.innerHeight - el.offsetHeight) / 2)));
    update();
    // ResizeObserver: tinggi kolom bisa berubah (ganti bahasa, font selesai dimuat)
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    observer?.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [minTop]);

  return [ref, top];
}

function ExperienceCompany({ company, roles, lang, t }) {
  const [ref, inView] = useInView(0.15);
  const latest = roles[0];
  const earliest = roles[roles.length - 1];
  const period = `${earliest.since[lang].split(" - ")[0]} - ${latest.since[lang].split(" - ")[1]}`;
  const jobdesks = [...new Set(roles.flatMap((role) => role.jobdesks[lang]))];
  const related = relatedProjects(company);
  const isInternship = roles.every((role) => role.internship);
  // Kalau cuma satu jabatan, periodenya sama dengan periode perusahaan -> tidak perlu ditulis dua kali
  const showRoleDates = roles.length > 1;

  return (
    <li
      id={`experience-${slugify(company)}`}
      ref={ref}
      className={`min-w-0 scroll-mt-6 border-b border-line py-6 transition-all duration-700 sm:py-8 lg:scroll-mt-10 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <p className="mb-4 font-mono text-xs leading-6 text-muted sm:text-sm">{period}</p>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          {latest.logo ? (
            <img src={latest.logo} alt="" loading="lazy" decoding="async" className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1" />
          ) : (
            // Tanpa logo (mis. Freelancer): ikon pengganti dengan kotak yang sama
            <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-accent">
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
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
            {isInternship && (
              <span
                title={t.experience.internship_note}
                className="mt-1 inline-block rounded-full border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {t.experience.internship}
              </span>
            )}
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
                {showRoleDates && <p className="max-w-full font-mono text-xs leading-6 text-muted">{role.since[lang]}</p>}
              </div>
            </li>
          ))}
        </ol>

        {jobdesks.length > 0 && (
          <div className="mt-6 rounded-2xl border border-line bg-bg-alt p-4 sm:p-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-fg">
              {t.experience.key_contributions}
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

        {related.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-xs text-muted">{t.experience.related_projects}:</span>
            {related.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio#project-${project.id}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium transition-colors hover:border-accent/40 hover:text-accent"
              >
                {project.short_name ?? project.project_name}
                <FontAwesomeIcon icon={faArrowRight} className="text-[10px] transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  const { t, lang } = useLanguage();
  const now = new Date();
  const [stickyRef, stickyTop] = useCenteredStickyTop();
  const totalMonths = getExperienceMonths(experiences.filter((role) => !role.internship), now);

  return (
    <section id="experience" className="px-4 pt-12 pb-16 sm:px-5 sm:pb-20 md:pt-20">
      <div className="mx-auto min-w-0 max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)] lg:gap-10 xl:gap-16">
        {/* Ringkasan masa kerja sekaligus navigasi ke setiap perusahaan. */}
        {/* Desktop: kolom ini di kanan (dock sudah di kiri), "top" dihitung oleh useCenteredStickyTop.
            Di HP urutannya tetap: judul dulu, baru timeline. */}
        <div
          ref={stickyRef}
          style={{ top: stickyTop }}
          className="flex min-w-0 flex-col self-start border-b border-line bg-bg py-3 lg:sticky lg:order-2 lg:border-0 lg:py-0"
        >
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">{t.experience.title}</h1>
            <p className="mt-2 text-sm leading-6 text-muted">{t.experience.subtitle}</p>
            {/* Di HP indeks karier disembunyikan, jadi total masa kerja ditampilkan di sini */}
            <p className="mt-3 text-sm lg:hidden">
              <span className="text-muted">{t.experience.total_tenure}: </span>
              <span className="font-semibold text-accent">{formatExperienceDuration(totalMonths, lang)}</span>
            </p>
          </div>

          <nav aria-label={t.experience.career_index} className="hidden pt-6 lg:block">
            <div className="mb-4 border-l-2 border-accent pl-4">
              <p className="text-xs text-muted">{t.experience.total_tenure}</p>
              <p className="mt-1 text-xl font-semibold text-accent">{formatExperienceDuration(totalMonths, lang)}</p>
            </div>
            <ol className="border-t border-line">
              {companyGroups.map(({ company, roles }) => (
                <li key={company} className="border-b border-line">
                  <a href={`#experience-${slugify(company)}`} className="block py-2.5 transition-colors hover:text-accent focus-visible:outline-accent">
                    <span className="block break-words text-sm font-medium">{company}</span>
                    <span className="mt-0.5 block text-xs text-muted">{formatExperienceDuration(getExperienceMonths(roles, now), lang)}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <ol className="mt-4 min-w-0 lg:order-1 lg:mt-0 lg:border-t lg:border-line">
          {companyGroups.map((group) => (
            <ExperienceCompany key={group.company} {...group} lang={lang} t={t} />
          ))}
        </ol>
      </div>
    </section>
  );
}
