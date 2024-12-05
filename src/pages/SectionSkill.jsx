import React from 'react'

const SectionSkill = ({ skills }) => {
    return (
        <section id="skill">
            <div className="container">
                <h2>MY SKILLS</h2>
                <div className="box">
                    <div id="content">
                        {skills.map((skill, index) => (
                            <div key={index} className="list-skill">
                                <div className="list-skill-body">
                                    {
                                        skill.isImg === true ?
                                            <img src={skill.src} className="icon-skill-img" alt={skill.name} /> :
                                            <div className="icon-skill">
                                                <i className={`${skill.src}`} />
                                            </div>
                                    }
                                    <h4>{skill.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSkill
