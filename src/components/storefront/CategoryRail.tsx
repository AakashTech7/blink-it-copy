import { categories } from "@/data/catalog";

export function CategoryRail({
  active,
  onSelect,
}: {
  active: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-extrabold tracking-tight">Shop by category</h2>
        {active && (
          <button
            onClick={() => onSelect(null)}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
        {categories.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onSelect(isActive ? null : c.id)}
              className={`group flex flex-col items-center gap-2 rounded-2xl p-3 text-center transition-[var(--transition-smooth)] hover:-translate-y-0.5 ${
                isActive ? "ring-2 ring-primary" : ""
              }`}
              style={{ background: c.color }}
            >
              <span className="text-3xl md:text-4xl">{c.emoji}</span>
              <span className="text-xs font-semibold leading-tight text-foreground">
                {c.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
