import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/ui/SectionHeader";
import skills from "../data/skills";

// Kelompokkan skill per kategori, urutan mengikuti data
const groups = skills.reduce((acc, skill) => {
  (acc[skill.category] ??= []).push(skill);
  return acc;
}, {});

function SkillChip({ skill }) {
  return (
    <li
      className={`rounded-full border px-3 py-1 text-sm ${
        skill.core ? "border-accent/30 bg-accent/10 font-medium text-accent" : "border-line bg-bg text-fg"
      }`}
    >
      {skill.name}
    </li>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skill" className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t.skill.title} subtitle={t.skill.subtitle} />

        {/* Satu baris per kategori: nama di kiri, skill di kanan */}
        <div className="animate-fade-up divide-y divide-line rounded-2xl border border-line bg-surface">
          {Object.entries(groups).map(([category, items]) => (
            <div key={category} className="grid gap-3 p-5 md:grid-cols-[200px_1fr] md:items-center md:px-8">
              <h3 className="font-mono text-sm text-muted">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 text-sm text-muted md:flex-row md:items-start md:justify-between">
          <p>
            <span className="font-medium text-fg">{t.skill.also_label}:</span> {t.skill.also.join(" · ")}
          </p>
          <p className="flex shrink-0 items-center gap-2">
            <span className="size-3 rounded-full border border-accent/30 bg-accent/10" />
            {t.skill.core_label}
          </p>
        </div>
      </div>
    </section>
  );
}
