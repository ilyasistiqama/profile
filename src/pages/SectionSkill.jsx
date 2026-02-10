import React, { useRef, useEffect, useState } from "react";

const SectionSkill = ({ skills }) => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const [isOverflowing, setIsOverflowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  /* ================= FILTER ================= */
  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  /* ================= CHECK OVERFLOW ================= */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [filteredSkills]);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (!isOverflowing) return;

    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = 220;

    intervalRef.current = setInterval(() => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScrollLeft - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(intervalRef.current);
  }, [isOverflowing, selectedCategory, filteredSkills]);

  /* ================= MANUAL SCROLL ================= */
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <section id="skill">
      <div className="container">
        <h2 className="reveal-title">MY SKILLS</h2>

        <p className="skill-desc reveal-sub">
          These are the core skills that form the foundation of my web development journey.
        </p>

        {/* FILTER */}
        <div className="category-filter reveal-sub">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="scroll-box-wrapper">
          {isOverflowing && (
            <button className="scroll-btn left" onClick={scrollLeft}>
              ‹
            </button>
          )}

          <div
            id="content"
            ref={scrollRef}
            className={!isOverflowing ? "center-content" : ""}
          >
            {filteredSkills.map((skill, i) => (
              <div
                key={i}
                className="list-skill reveal-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="list-skill-body">
                  {skill.isImg ? (
                    <img
                      src={skill.src}
                      className="icon-skill-img"
                      alt={skill.name}
                    />
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

          {isOverflowing && (
            <button className="scroll-btn right" onClick={scrollRight}>
              ›
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default SectionSkill;
