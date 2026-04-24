interface AttackCardProps {
  id: string;
  model: string;
  title: string;
  mechanism: string;
  impact: string;
}

function sentences(text: string): string[] {
  return text
    .split(/\.\s+(?=[A-Z"'])/)
    .map((s, i, arr) => (i < arr.length - 1 ? s + "." : s))
    .filter((s) => s.trim().length > 0);
}

function ProseList({ text, className }: { text: string; className?: string }) {
  const items = sentences(text);
  if (items.length <= 1) {
    return <span className={className}>{text}</span>;
  }
  return (
    <ul className="space-y-1 mt-0.5">
      {items.map((s, i) => (
        <li key={i} className={`flex gap-2 ${className ?? ""}`}>
          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-current opacity-40" aria-hidden="true" />
          {s}
        </li>
      ))}
    </ul>
  );
}

export function AttackCard({ id, model, title, mechanism, impact }: AttackCardProps) {
  return (
    <div className="my-4 rounded-xl border border-danger-800/40 bg-slate-900/70 overflow-hidden">
      {/* Top chip row */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/5 bg-slate-800/50 px-4 py-3">
        <span className="rounded bg-danger-700/80 px-2 py-0.5 font-mono text-xs font-bold tracking-widest text-danger-100">
          {id}
        </span>
        <span className="rounded border border-white/10 bg-slate-700/50 px-2 py-0.5 text-xs font-medium text-slate-300">
          Bypassed: {model}
        </span>
      </div>

      {/* Body */}
      <div className="px-4 py-4 space-y-3">
        <p className="text-sm font-semibold text-slate-100">{title}</p>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">Mechanism</p>
          <ProseList text={mechanism} className="text-xs text-slate-400" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">Impact</p>
          <ProseList text={impact} className="text-xs text-danger-300" />
        </div>
      </div>
    </div>
  );
}
