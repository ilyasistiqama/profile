import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import useInView from "../hooks/useInView";
import experiences from "../data/experiences";
import projects from "../data/projects";
import profile from "../data/profile";

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
    { value: yearsSinceFirstJob(), suffix: "+", label: t.stats.years },
    { value: projects.length, suffix: "+", label: t.stats.projects },
    { value: companies.size, label: t.stats.companies },
    { value: profile.gpa, decimals: 2, label: t.stats.gpa },
  ];

  return (
    <section ref={ref} id="stats" className="px-5">
      {/* gap-px + bg-line = garis pemisah 1px antar kotak */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface p-6 md:p-8">
            <p className="font-mono text-3xl font-medium tabular-nums md:text-4xl">
              <CountUp end={stat.value} decimals={stat.decimals} start={inView} />
              <span className="text-accent">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
