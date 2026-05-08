import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const SectionExperience = ({ experiences }) => {
  const { t, lang } = useLanguage();
  useEffect(() => {
    const boxes = document.querySelectorAll("#experience .box");

    if (!boxes.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            obs.unobserve(entry.target); // Hanya animate sekali, hindari infinite loop flicker
          }
        });
      },
      {
        threshold: 0.15, // Turunkan threshold agar lebih cepat trigger dan menghindari flicker
      }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => observer.disconnect();
  }, [experiences]);

  return (
    <section id="experience">
      <div className="container">
        <div id="content">
          {/* LEFT: Intro */}
          <div id="content-left">
            <h2 className="reveal-title">{t.experience.title}</h2>
            <p className="experience-desc reveal-sub">
              {t.experience.subtitle}
            </p>
          </div>

          {/* RIGHT: Timeline */}
          <div id="content-right" style={{ "--present-text": `"${t.experience.present || 'PRESENT'}"` }}>
            {experiences.map((exp, i) => (
              <div key={i} className="box">
                <div className="box-body">

                  <div className="box-title">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="box-logo"
                      />
                    )}
                    <div className="exp-info">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5>{exp.company}</h5>
                        </a>
                      ) : (
                        <h5>{exp.company}</h5>
                      )}
                    </div>
                  </div>

                  <p className="box-date">{exp.since[lang]}</p>
                  <hr />
                  <h6 className="box-position">{exp.position[lang]}</h6>

                  <ul className="box-job">
                    {exp.jobdesks[lang].map((job, idx) => (
                      <li key={idx}>{job}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}

            <div className="timeline-end">{t.experience.start}</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
