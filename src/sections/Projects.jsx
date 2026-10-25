import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/ui/SectionHeader";
import FilterTabs from "../components/ui/FilterTabs";
import ImageCarousel from "../components/ui/ImageCarousel";
import Lightbox from "../components/ui/Lightbox";
import projects from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const CATEGORIES = ["All", "Company", "Freelance", "Personal"];

const MAX_STACKS = 6;

function ProjectCard({ project, lang, t, categoryLabel, onImageClick }) {
  const stacks = project.stacks.slice(0, MAX_STACKS);
  const hiddenStacks = project.stacks.length - stacks.length;

  return (
    <article className="flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-lg">
      {project.images?.length > 0 && (
        <ImageCarousel images={project.images} alt={project.project_name} onImageClick={onImageClick} />
      )}

      <div className="flex grow flex-col p-5">
        <p className="mb-2 flex flex-wrap items-center gap-x-2 text-xs">
          <span className="font-bold text-accent uppercase">{categoryLabel}</span>
          <span className="text-muted">· {project.project_origin}</span>
        </p>

        <h3 className="text-lg leading-snug font-semibold">{project.project_name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description[lang]}</p>

        {/* Peran saya di proyek (hanya jika diisi di data) */}
        {project.role && (
          <p className="mt-3 rounded-lg border-l-2 border-accent bg-bg-alt px-3 py-2 text-sm">{project.role[lang]}</p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {stacks.map((stack) => (
            <li key={stack} className="rounded-md bg-bg-alt px-2 py-0.5 text-xs">
              {stack}
            </li>
          ))}
          {hiddenStacks > 0 && (
            <li className="rounded-md px-2 py-0.5 text-xs text-muted" title={project.stacks.slice(MAX_STACKS).join(", ")}>
              +{hiddenStacks}
            </li>
          )}
        </ul>

        {/* mt-auto: tombol selalu menempel di bawah, sejajar antar kartu */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 self-start pt-5 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            {t.project.visit} <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const [category, setCategory] = useState("All");
  const [zoomedImage, setZoomedImage] = useState(null);

  const categoryLabels = {
    All: t.project.filter_all,
    Company: t.project.cat_company,
    Freelance: t.project.cat_freelance,
    Personal: t.project.cat_personal,
  };

  const visibleProjects = category === "All" ? projects : projects.filter((p) => p.category === category);

  const options = CATEGORIES.map((value) => ({
    value,
    label: categoryLabels[value],
    count: value === "All" ? projects.length : projects.filter((p) => p.category === value).length,
  }));

  return (
    <section id="project" className="bg-bg-alt px-5 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t.project.title} subtitle={t.project.subtitle} center />
        <FilterTabs options={options} value={category} onChange={setCategory} />

        {visibleProjects.length === 0 ? (
          <div className="rounded-2xl border border-line bg-surface p-14 text-center text-muted">
            <FontAwesomeIcon icon={faFolderOpen} className="mb-3 text-3xl" />
            <p>{t.project.no_project}</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                t={t}
                categoryLabel={categoryLabels[project.category]}
                onImageClick={setZoomedImage}
              />
            ))}
          </div>
        )}
      </div>

      <Lightbox image={zoomedImage} onClose={() => setZoomedImage(null)} />
    </section>
  );
}
