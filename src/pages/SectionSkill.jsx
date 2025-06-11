import React, { useRef } from "react";

const SectionSkill = ({ skills }) => {
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  const startDrag = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollStart = scrollRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // drag speed
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  return (
    <section id="skill">
      <div className="container">
        <h2>MY SKILLS</h2>
        <p className="text-center" style={{ margin: "25px 0" }}>
          These are the core skills that form the foundation of my web development journey.
        </p>
        <div className="box">
          <div
            id="content"
            ref={scrollRef}
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={onDrag}
          >
            {skills.map((skill, i) => (
              <div key={i} className="list-skill">
                <div className="list-skill-body">
                  {skill.isImg ? (
                    <img src={skill.src} className="icon-skill-img" alt={skill.name} />
                  ) : (
                    <div className="icon-skill">
                      <i className={skill.src}></i>
                    </div>
                  )}
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSkill;
