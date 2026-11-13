import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/ui/SectionHeader";
import projects from "../data/projects";
import experiences from "../data/experiences";
import slugify from "../utils/slug";

// Perusahaan yang punya entri di halaman Pengalaman (nama grup bisa di-klik ke sana)
const experienceCompanies = new Set(experiences.map((exp) => exp.company));

// Urutan grup: kerjaan kantor/klien dulu, lalu freelance, terakhir proyek pribadi
const CATEGORY_ORDER = ["Company", "Freelance", "Personal"];

// Kelompokkan proyek per klien. Proyek tanpa "client" dikelompokkan per kategori.
function groupProjects(t) {
  const groups = new Map();
  // label -> nama perusahaan di data pengalaman (untuk link), mis. grup "Freelance" -> "Freelancer"
  const sorted = [...projects].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
  );

  for (const project of sorted) {
    const label =
      project.client ?? (project.category === "Freelance" ? t.selected.freelance : t.selected.personal);
    const company = project.client ?? (project.category === "Freelance" ? "Freelancer" : null);
    if (!groups.has(label)) {
      groups.set(label, { items: [], experience: experienceCompanies.has(company) ? company : null });
    }
    groups.get(label).items.push(project);
  }
  return [...groups.entries()];
}

// Indeks ringkas semua kerjaan: klien di kiri, proyek di kanan (terinspirasi gaya "credits list").
export default function SelectedWork() {
  const { t, lang } = useLanguage();

  return (
    <section id="selected-work" className="px-5 pt-20 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader title={t.selected.title} subtitle={t.selected.subtitle} />
          <Link
            to="/portfolio"
            className="group -mt-6 mb-8 inline-flex items-center gap-2 font-mono md:mt-0 md:mb-10 text-xs text-muted transition-colors hover:text-accent"
          >
            {t.selected.all}
            <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="animate-fade-up divide-y divide-line rounded-2xl border border-line bg-surface font-mono text-sm">
          {groupProjects(t).map(([client, { items, experience }]) => (
            <div key={client} className="grid gap-2 p-5 md:grid-cols-[260px_1fr] md:gap-6 md:px-8">
              <div>
                <h3 className="font-semibold text-fg">
                  {experience ? (
                    <Link
                      to={`/experience#experience-${slugify(experience)}`}
                      className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {client}
                    </Link>
                  ) : (
                    client
                  )}
                </h3>
                {/* Klien akhir, mis. proyek Mamorasoft yang dibuat untuk Petrokimia Gresik */}
                {[...new Set(items.map((p) => p.end_client).filter(Boolean))].map((endClient) => (
                  <p key={endClient} className="mt-0.5 text-xs text-muted">
                    {t.selected.for_client} {endClient}
                  </p>
                ))}
              </div>
              <ul className="space-y-1.5">
                {items.map((project) => (
                  <li key={project.id}>
                    <Link
                      to={`/portfolio#project-${project.id}`}
                      className="group inline-flex flex-wrap items-baseline gap-x-2 transition-colors hover:text-accent"
                    >
                      <span className="font-medium text-fg group-hover:text-accent">
                        {project.short_name ?? project.project_name}
                      </span>
                      {project.tagline && <span className="text-muted">— {project.tagline[lang]}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
