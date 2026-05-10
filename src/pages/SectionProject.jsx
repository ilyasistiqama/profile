import React, { useRef, useState } from "react";
import { useImageOverlay } from "../components/ImageOverlay";
import { useLanguage } from "../context/LanguageContext";

const SectionProject = ({ projects }) => {
    const { t, lang } = useLanguage();
    const contentRef = useRef(null);
    const { selectedImage, openOverlay, closeOverlay } = useImageOverlay();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const CATEGORIES = ["All", "Company", "Freelance", "Personal"];

    const translateCategory = (cat) => {
        if (cat === "All") return t.project.filter_all;
        if (cat === "Company") return t.project.cat_company;
        if (cat === "Freelance") return t.project.cat_freelance;
        if (cat === "Personal") return t.project.cat_personal;
        return cat;
    };

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const scrollLeft = () => {
        if (!contentRef.current) return;
        const container = contentRef.current;
        const card = container.querySelector(".box");
        if (!card) return;
        const gap = parseInt(getComputedStyle(container).gap) || 0;
        container.scrollBy({ left: -(card.offsetWidth + gap), behavior: "smooth" });
    };

    const scrollRight = () => {
        if (!contentRef.current) return;
        const container = contentRef.current;
        const card = container.querySelector(".box");
        if (!card) return;
        const gap = parseInt(getComputedStyle(container).gap) || 0;
        container.scrollBy({ left: card.offsetWidth + gap, behavior: "smooth" });
    };

    return (
        <section id="project">
            <div className="container">
                <h2 className="reveal-title">{t.project.title}</h2>
                <p className="text-center project-desc reveal-sub">
                    {t.project.subtitle}
                </p>

                {/* FILTER */}
                <div className="project-category-filter">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className={`project-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {translateCategory(cat)}
                            <span className="filter-count">
                                {cat === "All"
                                    ? projects.length
                                    : projects.filter((p) => p.category === cat).length}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="scroll-wrapper">
                    <button className="scroll-nav-button scroll-prev" onClick={scrollLeft} aria-label="Scroll left">
                        ‹
                    </button>
                    <button className="scroll-nav-button scroll-next" onClick={scrollRight} aria-label="Scroll right">
                        ›
                    </button>

                    <div className="scrollable-content" ref={contentRef}>
                        {filteredProjects.length === 0 ? (
                            <div className="no-projects">
                                <i className="fas fa-folder-open" />
                                <p>{t.project.no_project}</p>
                            </div>
                        ) : (
                            filteredProjects.map((project, index) => (
                                <div key={index} className="box">
                                    {project.images?.length > 0 && (
                                        <div className="box-carousel">
                                            <div id={project.id} className="carousel slide">
                                                <div className="carousel-inner">
                                                    {project.images.map((image, i) => (
                                                        <div
                                                            key={i}
                                                            className={`carousel-item ${i === 0 ? "active" : ""}`}
                                                        >
                                                            <img
                                                                src={image}
                                                                className="d-block w-100 img-project"
                                                                alt={`${project.project_name}-${i}`}
                                                                onClick={() => openOverlay(image)}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>

                                                <button
                                                    className="carousel-control-prev btn-carousel"
                                                    type="button"
                                                    data-bs-target={`#${project.id}`}
                                                    data-bs-slide="prev"
                                                    aria-label="Previous image"
                                                >
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                </button>

                                                <button
                                                    className="carousel-control-next btn-carousel"
                                                    type="button"
                                                    data-bs-target={`#${project.id}`}
                                                    data-bs-slide="next"
                                                    aria-label="Next image"
                                                >
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="box-explanation">
                                        <div className="box-category-badge p-2">{translateCategory(project.category)}</div>
                                        <h3>{project.project_name}</h3>
                                        <p className="text-muted">{project.project_origin}</p>
                                        <p>{project.description[lang]}</p>
                                    </div>

                                    <div className="box-develop-by">
                                        {project.stacks.map((stack, i) => (
                                            <span key={i} className="child-box">
                                                {stack}
                                            </span>
                                        ))}
                                    </div>

                                    {project.url && (
                                        <div style={{ textAlign: "center" }}>
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-visit"
                                            >
                                                <i className="fas fa-external-link-alt me-2" /> {t.project.visit}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="overlay active" onClick={closeOverlay}>
                    <span className="close-btn">×</span>
                    <img src={selectedImage} alt="Zoomed" />
                </div>
            )}
        </section>
    );
};

export default SectionProject;
