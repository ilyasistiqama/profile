import React from 'react'

const SectionExperience = ({ experiences }) => {
    return (
        <section id="experience">
            <div className="container">
                <div id="content">
                    <div id="content-left">
                        <h2>MY EXPERIENCES</h2>
                        <p>In 2017, I started studying informatics engineering. My initial experience was by joining an
                            internship at CV. Mitra Informatika. Then after graduating I started working at CV.
                            Mamorasoft. So for now I am working as a freelancer while looking for a new job. You can see the
                            details of my experience as follows :</p>
                    </div>
                    <div id="content-right">
                        {experiences.map((experience, index) => (
                            <div key={index} className="box">
                                <div className="box-body">
                                    <div className="box-title">
                                        {experience.logo != null &&
                                            <img src={experience.logo} alt={experience.logo} className="box-logo" />
                                        }
                                        <h5>{experience.company}</h5>
                                    </div>
                                    <p className="text-muted" style={{ fontSize: 14 }}>{experience.since}</p>
                                    <hr />
                                    <div className="box-department">
                                        <h5>{experience.position}</h5>
                                    </div>
                                    <div className="box-job-desc">
                                        <ul>
                                            {experience.jobdesks.map((jobdesk, index) => (
                                                <li key={index}>
                                                    {jobdesk}
                                                </li>
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
    )
}

export default SectionExperience
