interface UseCaseProps {
  scenario: string;
  attacker: string;
  impact: string;
  defense: string;
}

function sentences(text: string): string[] {
  return text
    .split(/\.\s+(?=[A-Z"'])/)
    .map((s, i, arr) => (i < arr.length - 1 ? s + "." : s))
    .filter((s) => s.trim().length > 0);
}

function ProseField({ text, className }: { text: string; className?: string }) {
  const items = sentences(text);
  if (items.length <= 1) {
    return <p className={`text-sm ${className ?? "text-slate-200"}`}>{text}</p>;
  }
  return (
    <ul className="space-y-1.5 pl-0">
      {items.map((s, i) => (
        <li key={i} className={`flex gap-2 text-sm ${className ?? "text-slate-200"}`}>
          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-current opacity-40" aria-hidden="true" />
          {s}
        </li>
      ))}
    </ul>
  );
}

export function UseCase({ scenario, attacker, impact, defense }: UseCaseProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/5 bg-slate-900/60">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-slate-800/60 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-danger-500" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Attack Use Case
        </span>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Scenario */}
        <div className="border-b border-white/5 p-4 sm:border-r">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            Scenario
          </p>
          <ProseField text={scenario} />
        </div>

        {/* Attacker */}
        <div className="border-b border-white/5 bg-danger-950/20 p-4">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-danger-400">
            Attacker
          </p>
          <ProseField text={attacker} />
        </div>

        {/* Impact */}
        <div className="p-4 sm:border-r border-white/5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            Impact
          </p>
          <ProseField text={impact} />
        </div>

        {/* Defense */}
        <div className="bg-emerald-950/20 p-4">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-emerald-400">
            Defense
          </p>
          <ProseField text={defense} />
        </div>
      </div>
    </div>
  );
}
