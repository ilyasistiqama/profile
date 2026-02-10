import React, { useEffect } from "react";

const SectionExperience = ({ experiences }) => {
  useEffect(() => {
    const boxes = document.querySelectorAll("#experience .box");

    if (!boxes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      {
        threshold: 0.4,
      }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => observer.disconnect();
  }, [experiences]);

  return (
    <section id="experience">
      <div className="container">
        <div id="content">

          {/* LEFT */}
          <div id="content-left">
            <h2>MY EXPERIENCES</h2>
            <p>
              I started my journey in <b>Informatics Engineering</b> in 2017 and gained
              my first hands-on experience as an <b>Internship Web Developer</b> at{" "}
              <b>CV. Mitra Informatika</b>.
              <br /><br />
              After graduating, I worked at <b>CV. Mamorasoft</b> as an{" "}
              <b>Application Programming Staff</b>.
              <br /><br />
              In 2025, I joined <b>PT. Terik Indonesia Inside</b> as a{" "}
              <b>Web Programmer</b>.
            </p>
          </div>

          {/* RIGHT */}
          <div id="content-right">
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

                  <p className="box-date">{exp.since}</p>

                  <hr />

                  <h6 className="box-position">{exp.position}</h6>

                  <ul className="box-job">
                    {exp.jobdesks.map((job, idx) => (
                      <li key={idx}>{job}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}

            <div className="timeline-end">START</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
