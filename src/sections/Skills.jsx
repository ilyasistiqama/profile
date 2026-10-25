import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/ui/SectionHeader";
import skills from "../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSpin, faCircleCheck, faCode, faDatabase, faDiagramProject, faDisplay, faScrewdriverWrench, faServer, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

// Ikon untuk judul tiap kategori
const CATEGORY_ICONS = {
  Frontend: faDisplay,
  Backend: faServer,
  Database: faDatabase,
  "DevOps / Tools": faScrewdriverWrench,
  Security: faShieldHalved,
  Workflow: faArrowsSpin,
  "Best Practices": faCircleCheck,
  "System Analysis": faDiagramProject,
};

// Kelompokkan skill per kategori, urutan mengikuti data
const groups = skills.reduce((acc, skill) => {
  (acc[skill.category] ??= []).push(skill);
  return acc;
}, {});

function SkillChip({ skill }) {
  return (
    <li
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm ${
        skill.core ? "border-accent/40 bg-accent/10 font-semibold text-accent" : "border-line bg-bg text-fg"
      }`}
    >
      <FontAwesomeIcon icon={skill.icon} className="w-4" />
      {skill.name}
    </li>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skill" className="bg-bg-alt px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t.skill.title} subtitle={t.skill.subtitle} center />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groups).map(([category, items]) => (
            <div key={category} className="animate-fade-up rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-4 flex items-center gap-3 font-bold">
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FontAwesomeIcon icon={CATEGORY_ICONS[category] ?? faCode} />
                </span>
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
          <span className="size-3 rounded border border-accent/40 bg-accent/10" />
          {t.skill.core_label}
        </p>
      </div>
    </section>
  );
}
