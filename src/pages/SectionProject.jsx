import React, { useRef } from "react";
import { useImageOverlay } from "../components/ImageOverlay";

const SectionProject = ({ projects }) => {
    const contentRef = useRef(null);
    const { selectedImage, openOverlay, closeOverlay } = useImageOverlay();

    const scrollLeft = () => {
        if (!contentRef.current) return;
        contentRef.current.scrollBy({
            left: -contentRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        if (!contentRef.current) return;
        contentRef.current.scrollBy({
            left: contentRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <section id="project">
            <div className="container">
                <h2>MY PROJECTS</h2>
                <p className="text-center project-desc">
                    These projects reflect my hands-on experience in building practical, real-world applications using various web technologies.
                </p>

                <div className="scroll-wrapper">
                    <button className="scroll-nav-button scroll-prev" onClick={scrollLeft}>
                        ‹
                    </button>
                    <button className="scroll-nav-button scroll-next" onClick={scrollRight}>
                        ›
                    </button>

                    <div className="scrollable-content" ref={contentRef}>
                        {projects.map((project, index) => (
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
                                            >
                                                <span className="carousel-control-prev-icon" />
                                            </button>

                                            <button
                                                className="carousel-control-next btn-carousel"
                                                type="button"
                                                data-bs-target={`#${project.id}`}
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="box-explanation">
                                    <h3>{project.project_name}</h3>
                                    <p className="text-muted">{project.project_origin}</p>
                                    <p>{project.description}</p>

                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-visit"
                                        >
                                            Visit Project
                                        </a>
                                    )}
                                </div>

                                <div className="box-develop-by">
                                    {project.stacks.map((stack, i) => (
                                        <span key={i} className="child-box">
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
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
