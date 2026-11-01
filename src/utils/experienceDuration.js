const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function monthIndex(value) {
  const [month, year] = value.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month);
}

// Data hanya mencatat bulan: hitung bulan awal/akhir, tanpa menggandakan periode tumpang tindih.
export function getExperienceMonths(roles, now = new Date()) {
  const current = now.getFullYear() * 12 + now.getMonth();
  const months = new Set();

  for (const role of roles) {
    const [start, end] = role.since.en.split(" - ");
    const last = Math.min(end === "Present" ? current : monthIndex(end), current);
    for (let month = monthIndex(start); month <= last; month += 1) months.add(month);
  }

  return months.size;
}

export function formatExperienceDuration(months, lang) {
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  const parts = [];
  if (years) parts.push(lang === "id" ? `${years} tahun` : `${years} ${years === 1 ? "year" : "years"}`);
  if (remainder || !years) parts.push(lang === "id" ? `${remainder} bulan` : `${remainder} ${remainder === 1 ? "month" : "months"}`);
  return parts.join(" ");
}
