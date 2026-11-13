const CACHE_TTL = 60 * 60 * 1000;
const DAY = 86400000;
const WEEKS = 53;

/** Keeps the most recent 53 weekly columns (Sunday-first), matching GitHub's profile calendar. */
export function lastWeeks(days, weeks = WEEKS) {
  if (!days.length) return days;
  const last = new Date(`${days.at(-1).date}T00:00:00Z`);
  const start = last.getTime() - (last.getUTCDay() + (weeks - 1) * 7) * DAY;
  return days.filter((day) => Date.parse(`${day.date}T00:00:00Z`) >= start);
}

export async function getContributions(username, signal) {
  const cacheKey = `github-contributions:${username}`;
  try {
    const cached = JSON.parse(sessionStorage.getItem(cacheKey));
    const age = Date.now() - cached?.savedAt;
    if (age >= 0 && age < CACHE_TTL && Array.isArray(cached?.days)) return cached.days;
  } catch {
    // The calendar also works when storage is unavailable.
  }
  // Reads the contribution calendar displayed on the public GitHub profile.
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`, { signal });
  if (!response.ok) throw new Error("GitHub contributions unavailable");
  const data = await response.json();
  if (!Array.isArray(data.contributions)) throw new Error("Invalid contribution response");
  const days = data.contributions;
  const valid = days.every((day) => /^\d{4}-\d{2}-\d{2}$/.test(day.date)
    && Number.isFinite(Date.parse(`${day.date}T00:00:00Z`))
    && new Date(`${day.date}T00:00:00Z`).toISOString().slice(0, 10) === day.date
    && Number.isInteger(day.count) && day.count >= 0
    && Number.isInteger(day.level) && day.level >= 0 && day.level <= 4);
  if (!valid || new Set(days.map((day) => day.date)).size !== days.length) throw new Error("Invalid contribution days");
  days.sort((a, b) => a.date.localeCompare(b.date));
  const recent = lastWeeks(days);
  try {
    sessionStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), days: recent }));
  } catch {
    // Blocked storage must not prevent the calendar from being shown.
  }
  return recent;
}
