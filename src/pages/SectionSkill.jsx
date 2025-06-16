import React, { useRef, useEffect, useState } from "react";

const SectionSkill = ({ skills }) => {
  const scrollRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    const checkOverflow = () => {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [skills]);

  return (
    <section id="skill">
      <div className="container">
        <h2>MY SKILLS</h2>
        <p className="text-center" style={{ margin: "25px 0" }}>
          These are the core skills that form the foundation of my web development journey.
        </p>
        <div className="scroll-box-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>‹</button>
          <div
            id="content"
            className={!isOverflowing ? "center-content" : ""}
            ref={scrollRef}
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
          <button className="scroll-btn right" onClick={scrollRight}>›</button>
        </div>
      </div>
    </section>
  );
};

export default SectionSkill;
