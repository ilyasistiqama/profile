import React, { useRef, useEffect, useState } from "react";

const SectionSkill = ({ skills }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add("dragging");
  };

  const stopDrag = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("dragging");
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;

    // Cek apakah event adalah sentuhan atau mouse
    const clientX = e.touches ? e.touches[0].pageX : e.pageX;

    if (e.cancelable) e.preventDefault(); // Aman preventDefault jika bisa

    const x = clientX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

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
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={onDrag}
            onTouchStart={(e) => startDrag(e.touches[0])}
            onTouchMove={(e) => onDrag(e.touches[0])}
            onTouchEnd={stopDrag}
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
