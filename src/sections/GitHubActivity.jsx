import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import profile from "../data/profile";
import { getContributions } from "../data/githubActivity";

const LEVEL_CLASSES = ["fill-bg-alt", "fill-accent/20", "fill-accent/40", "fill-accent/70", "fill-accent"];
const STEP = 16;
const LEFT = 36;
const TOP = 24;
const DAY = 86400000;

function ContributionCalendar({ days, lang, labels }) {
  const locale = lang === "id" ? "id-ID" : "en-US";
  const first = new Date(`${days[0].date}T00:00:00Z`);
  const offset = first.getUTCDay();
  const cells = days.map((day) => {
    const date = new Date(`${day.date}T00:00:00Z`);
    return { ...day, date, column: Math.floor((Math.round((date - first) / DAY) + offset) / 7), row: date.getUTCDay() };
  });
  const width = LEFT + (cells.at(-1).column + 1) * STEP + 20;
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const summary = `${total.toLocaleString(locale)} ${labels.total}`;

  return (
    <>
      <p className="text-lg font-semibold tracking-tight sm:text-xl">{summary}</p>
      <div className="mt-6 overflow-x-auto pb-3" role="region" aria-label={labels.calendar} tabIndex={0}>
        <svg role="img" aria-label={summary} viewBox={`0 0 ${width} ${TOP + 7 * STEP}`} className="w-full min-w-[760px]">
          <title>{summary}</title>
          {[1, 3, 5].map((row) => (
            <text key={row} x="0" y={TOP + row * STEP + 10} className="fill-muted text-[10px]">
              {new Date(Date.UTC(2023, 0, 1 + row)).toLocaleDateString(locale, { weekday: "short", timeZone: "UTC" })}
            </text>
          ))}
          {cells.filter((cell) => cell.date.getUTCDate() === 1).map((cell) => (
            <text key={`month-${cell.date.toISOString()}`} x={LEFT + cell.column * STEP} y="12" className="fill-muted text-[10px]">
              {cell.date.toLocaleDateString(locale, { month: "short", timeZone: "UTC" })}
            </text>
          ))}
          {cells.map((cell) => (
            <rect key={cell.date.toISOString()} x={LEFT + cell.column * STEP} y={TOP + cell.row * STEP} width="12" height="12" rx="3" className={`${LEVEL_CLASSES[cell.level]} stroke-line/40`}>
              <title>{`${cell.count} ${labels.contributions} · ${cell.date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}`}</title>
            </rect>
          ))}
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <p>{labels.scroll}</p>
        <div className="flex items-center gap-1.5" aria-label={labels.legend}>
          <span className="mr-1">{labels.less}</span>
          {LEVEL_CLASSES.map((className, level) => (
            <svg key={level} aria-hidden="true" width="12" height="12"><rect width="12" height="12" rx="3" className={`${className} stroke-line/40`} /></svg>
          ))}
          <span className="ml-1">{labels.more}</span>
        </div>
      </div>
    </>
  );
}

export default function GitHubActivity() {
  const { t, lang } = useLanguage();
  const [calendar, setCalendar] = useState({ status: "loading", days: [] });

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    getContributions(profile.githubUsername, controller.signal)
      .then((days) => {
        if (active) setCalendar({ status: "ready", days });
      })
      .catch(() => {
        if (active) setCalendar({ status: "error", days: [] });
      })
      .finally(() => clearTimeout(timeout));
    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <section id="github-contributions" className="px-5 pb-20 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div><SectionHeader title={t.github.title} subtitle={t.github.subtitle} /></div>
          <Button href={`https://github.com/${profile.githubUsername}`} variant="outline" className="shrink-0">
            <FontAwesomeIcon icon={faGithub} /> {t.github.profile}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
          </Button>
        </div>
        <div className="min-w-0 rounded-2xl border border-line bg-surface p-5 sm:p-8" aria-busy={calendar.status === "loading"}>
          <p className="mb-5 flex items-center gap-2 font-mono text-xs text-muted">
            <FontAwesomeIcon icon={faGithub} className="text-base text-fg" /> @{profile.githubUsername}
          </p>
          {calendar.status === "ready" && calendar.days.length > 0 ? (
            <ContributionCalendar days={calendar.days} lang={lang} labels={t.github} />
          ) : (
            <p role="status" className="py-8 text-sm leading-relaxed text-muted">
              {calendar.status === "loading" ? t.github.loading : calendar.status === "error" ? t.github.unavailable : t.github.empty}
            </p>
          )}
          <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">{t.github.note}</p>
        </div>
      </div>
    </section>
  );
}
