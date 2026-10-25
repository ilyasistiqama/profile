import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import useInView from "../hooks/useInView";
import experiences from "../data/experiences";
import projects from "../data/projects";
import profile from "../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendarDays, faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "Jan 2021 - Mar 2021" -> Date(2021, 0, 1)
function parseStartDate(since) {
  const [month, year] = since.split(" - ")[0].split(" ");
  return new Date(Number(year), Math.max(0, MONTHS.indexOf(month)), 1);
}

// Dihitung dari pekerjaan pertama; magang (internship: true) tidak ikut dihitung
function yearsSinceFirstJob() {
  const jobs = experiences.filter((exp) => !exp.internship);
  const first = Math.min(...jobs.map((exp) => parseStartDate(exp.since.en)));
  return Math.floor((Date.now() - first) / (1000 * 60 * 60 * 24 * 365.25));
}

// Angka yang naik dari 0 ke "end" saat "start" bernilai true
function CountUp({ end, decimals = 0, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const startTime = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end]);

  return value.toFixed(decimals);
}

export default function Stats() {
  const { t } = useLanguage();
  const [ref, inView] = useInView(0.3);

  const companies = new Set(experiences.filter((exp) => exp.company !== "Freelancer").map((exp) => exp.company));

  const stats = [
    { icon: faCalendarDays, value: yearsSinceFirstJob(), suffix: "+", label: t.stats.years },
    { icon: faLaptopCode, value: projects.length, suffix: "+", label: t.stats.projects },
    { icon: faBuilding, value: companies.size, label: t.stats.companies },
    { icon: faGraduationCap, value: profile.gpa, decimals: 2, label: t.stats.gpa },
  ];

  return (
    <section ref={ref} id="stats" className="border-y border-line px-5 py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`text-center ${i % 2 === 1 ? "border-l border-line" : ""} md:border-l md:first:border-l-0`}>
            <FontAwesomeIcon icon={stat.icon} className="mb-3 text-xl text-accent" />
            <p className="text-4xl font-extrabold tabular-nums">
              <CountUp end={stat.value} decimals={stat.decimals} start={inView} />
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
