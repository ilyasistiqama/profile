import React, { useRef } from "react";
import { useImageOverlay } from "../components/ImageOverlay"; // import hook

const SectionProject = ({ projects }) => {
    const contentRef = useRef();
    const { selectedImage, openOverlay, closeOverlay } = useImageOverlay();

    const scrollLeft = () => {
        contentRef.current.scrollBy({
            left: -contentRef.current.offsetWidth,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        contentRef.current.scrollBy({
            left: contentRef.current.offsetWidth,
            behavior: "smooth",
        });
    };

    return (
        <section id="project">
            <div className="container">
                <h2>MY PROJECTS</h2>
                <p className="text-center" style={{ margin: "25px 0" }}>
                    These projects reflect my hands-on experience in building practical, real-world applications using various web technologies.
                </p>
                <div className="scroll-wrapper">
                    <button className="scroll-nav-button scroll-prev" onClick={scrollLeft}>
                        &lt;
                    </button>
                    <button className="scroll-nav-button scroll-next" onClick={scrollRight}>
                        &gt;
                    </button>
                    <div id="content" className="scrollable-content" ref={contentRef}>
                        {projects.map((project, index) => (
                            <div key={index} className="box">
                                {project.images.length !== 0 && (
                                    <div className="box-carousel">
                                        <div id={project.id} className="carousel carousel-dark slide">
                                            <div className="carousel-inner">
                                                {project.images.map((image, index1) => (
                                                    <div key={index1} className={`carousel-item ${index1 === 0 ? "active" : ""}`}>
                                                        <img
                                                            src={image}
                                                            className="d-block w-100 img-project thumbnail"
                                                            alt={image + index1}
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
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next btn-carousel"
                                                type="button"
                                                data-bs-target={`#${project.id}`}
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <div className="box-explanation">
                                    <h2>{project.project_name}</h2>
                                    <p className="text-muted">{project.project_origin}</p>
                                    <p>{project.description}</p>

                                    {/* Button Visit Project */}
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary btn-visit"
                                            style={{ backgroundColor: "#212529" }}
                                        >
                                            Visit
                                        </a>
                                    )}
                                </div>
                                <div className="box-develop-by">
                                    {project.stacks.map((stack, i) => (
                                        <div key={i} className="child-box">{stack}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {selectedImage && (
                <div className="overlay active" id="overlay">
                    <span className="close-btn" onClick={closeOverlay}>x</span>
                    <img src={selectedImage} alt="Zoomed" id="zoomed-image" />
                </div>
            )}
        </section>
    );
};

export default SectionProject;
