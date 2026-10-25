/**
 * Deretan tombol filter kategori.
 * options: [{ value: "All", label: "Semua", count: 7 }]
 */
export default function FilterTabs({ options, value, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {options.map((option) => {
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              active
                ? "border-accent bg-accent text-on-accent"
                : "border-line bg-surface text-fg hover:border-accent hover:text-accent"
            }`}
          >
            {option.label}
            {option.count !== undefined && (
              <span className={`rounded-full px-2 text-xs ${active ? "bg-on-accent/20" : "bg-bg-alt"}`}>
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
