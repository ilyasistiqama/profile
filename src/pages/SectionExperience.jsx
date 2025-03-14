import React from "react";

const SectionExperience = ({ experiences }) => {
  return (
    <section id="experience">
      <div className="container">
        <div id="content">
          <div id="content-left">
            <h2>MY EXPERIENCES</h2>
            <p>
              In 2017, I started studying Informatics Engineering. My first experience was an internship at CV. Mitra Informatika. After graduating, I worked at CV. Mamorasoft. Currently, I am working at PT. Terik Indonesia Inside while
              also taking on some freelance projects. You can see the details of my experience below:
            </p>
          </div>
          <div id="content-right">
            {experiences.map((experience, index) => (
              <div key={index} className="box">
                <div className="box-body">
                  <div className="box-title">
                    {experience.logo != null && <img src={experience.logo} alt={experience.logo} style={{ maxHeight: "52px", maxWidth: "52px", padding: "5px" }} className="box-logo" />}
                    <h5>{experience.company}</h5>
                  </div>
                  <p className="text-muted" style={{ fontSize: 14 }}>
                    {experience.since}
                  </p>
                  <hr />
                  <div className="box-department">
                    <h5>{experience.position}</h5>
                  </div>
                  <div className="box-job-desc">
                    <ul>
                      {experience.jobdesks.map((jobdesk, index) => (
                        <li key={index}>{jobdesk}</li>
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
};

export default SectionExperience;
