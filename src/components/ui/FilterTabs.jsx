/**
 * Deretan tombol filter kategori.
 * options: [{ value: "All", label: "Semua", count: 7 }]
 */
export default function FilterTabs({ options, value, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "border-fg bg-fg text-bg"
                : "border-line bg-surface text-muted hover:border-fg/30 hover:text-fg"
            }`}
          >
            {option.label}
            {option.count !== undefined && (
              <span className={`font-mono text-xs ${active ? "text-bg/70" : "text-muted"}`}>
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
