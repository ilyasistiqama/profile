import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SectionSkill = ({ skills }) => {
  const { t } = useLanguage();
  const scrollRef = useRef(null);

  const [isOverflowing, setIsOverflowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  /* ================= FILTER ================= */
  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const translateCategory = (cat) => {
    if (cat === "All") return t.project.filter_all;
    return cat;
  };

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

  /* ================= MANUAL SCROLL ================= */
  const scrollLeft = () => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="skill">
      <div className="container">
        <h2 className="reveal-title">{t.skill.title}</h2>

        <p className="skill-desc reveal-sub">
          {t.skill.subtitle}
        </p>

        {/* FILTER */}
        <div className="category-filter reveal-sub">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {translateCategory(cat)}
            </button>
          ))}
        </div>

        <div className="scroll-box-wrapper">
          {isOverflowing && (
            <button className="scroll-btn left" onClick={scrollLeft} aria-label="Scroll left">
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
                style={{ animationDelay: `${i * 0.05}s` }}
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
            <button className="scroll-btn right" onClick={scrollRight} aria-label="Scroll right">
              ›
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default SectionSkill;