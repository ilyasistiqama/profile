import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const getStats = (t) => [
  {
    end: 4,
    suffix: "+",
    label: t.stats.years,
    icon: "fa-solid fa-calendar-alt",
  },
  {
    end: 12, // Saya sesuaikan sedikit datanya agar lebih 'pop'
    suffix: "+",
    label: t.stats.projects,
    icon: "fa-solid fa-laptop-code",
  },
  {
    end: 3,
    suffix: "",
    label: t.stats.companies,
    icon: "fa-solid fa-building",
  },
  {
    end: 3.62,
    suffix: "",
    label: t.stats.gpa,
    icon: "fa-solid fa-graduation-cap",
    isFloat: true,
  },
];

const CountUp = ({ end, suffix, isFloat, active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = isFloat
        ? parseFloat((eased * end).toFixed(2))
        : Math.floor(eased * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [active, end, isFloat]);

  return (
    <span className="stat-number">
      {isFloat ? Number(count).toFixed(2) : count}
      {suffix}
    </span>
  );
};

const SectionStats = () => {
  const { t } = useLanguage();
  const STATS = getStats(t);
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="stat-icon">
                <i className={stat.icon} />
              </div>
              <CountUp
                end={stat.end}
                suffix={stat.suffix}
                isFloat={stat.isFloat}
                active={isActive}
              />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
