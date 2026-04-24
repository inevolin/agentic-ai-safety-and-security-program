interface ComparisonSide {
  title: string;
  points: string[];
}

interface ComparisonProps {
  left: ComparisonSide;
  right: ComparisonSide;
}

export function Comparison({ left, right }: ComparisonProps) {
  if (!left || !right) return null;
  return (
    <div className="relative my-6 grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-white/5 sm:grid-cols-2">
      {/* Left card */}
      <div className="border-b border-white/5 bg-slate-900/60 p-5 sm:border-b-0 sm:border-r">
        <h4 className="mb-3 text-sm font-semibold text-slate-200">{left.title}</h4>
        <ul className="space-y-2">
          {(left.points ?? []).map((pt, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* Gradient divider (visible only between columns on sm+) */}
      <div
        className="hidden sm:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      {/* Right card */}
      <div className="bg-slate-800/40 p-5">
        <h4 className="mb-3 text-sm font-semibold text-slate-200">{right.title}</h4>
        <ul className="space-y-2">
          {(right.points ?? []).map((pt, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
