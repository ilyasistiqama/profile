import React from "react";

const SectionExperience = ({ experiences }) => (
  <section id="experience">
    <div className="container">
      <div id="content">
        <div id="content-left">
          <h2>MY EXPERIENCES</h2>
          <p>
            I started studying <b>Informatics Engineering</b> in 2017 and had my first experience as an{" "}
            <b>Internship Web Developer</b> at <b>CV. Mitra Informatika</b>, where I built a credit sales
            website using Laravel and third-party APIs.<br /><br />
            After graduating, I worked at <b>CV. Mamorasoft</b> as an{" "}
            <b>Application Programming Staff</b>, focusing on web development, database design, and system
            maintenance.<br /><br />
            In 2025, I joined <b>PT. Terik Indonesia Inside</b> as a <b>Web Programmer</b>, developing new
            features, managing databases, and fixing bugs on web-based systems.<br /><br />
            Since August 2024, I have also been working on freelance projects as a{" "}
            <b>Web Developer</b>.<br /><br />
            You can find more details about my experience below:
          </p>

        </div>
        <div id="content-right">
          {experiences.map((exp, i) => (
            <div key={i} className="box">
              <div className="box-body">
                <div className="box-title">
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="box-logo" />
                  )}
                  <h5>{exp.company}</h5>
                </div>
                <p className="text-muted" style={{ fontSize: 14 }}>{exp.since}</p>
                <hr />
                <div className="box-department">
                  <h5>{exp.position}</h5>
                </div>
                <div className="box-job-desc">
                  <ul>
                    {exp.jobdesks.map((job, idx) => (
                      <li key={idx}>{job}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SectionExperience;
