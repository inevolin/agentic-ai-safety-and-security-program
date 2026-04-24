type BarColor = "brand" | "cyan" | "emerald" | "amber" | "danger";

interface StatBarProps {
  label: string;
  value: number;
  max: number;
  color?: BarColor;
}

const colorMap: Record<BarColor, { bar: string; text: string; track: string }> = {
  brand: {
    bar: "bg-brand-500",
    text: "text-brand-300",
    track: "bg-brand-950/60",
  },
  cyan: {
    bar: "bg-cyan-500",
    text: "text-cyan-300",
    track: "bg-cyan-950/60",
  },
  emerald: {
    bar: "bg-emerald-500",
    text: "text-emerald-300",
    track: "bg-emerald-950/60",
  },
  amber: {
    bar: "bg-warn-500",
    text: "text-warn-300",
    track: "bg-warn-900/30",
  },
  danger: {
    bar: "bg-danger-500",
    text: "text-danger-300",
    track: "bg-danger-950/60",
  },
};

export function StatBar({ label, value, max, color = "brand" }: StatBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const { bar, text, track } = colorMap[color];

  return (
    <div className="my-3">
      <div className="flex items-baseline justify-between mb-1.5 gap-2">
        <span className="text-sm text-slate-300">{label}</span>
        <span className={`font-mono text-sm font-semibold tabular-nums ${text}`}>
          {value}
          <span className="text-slate-600">/{max}</span>
        </span>
      </div>
      <div
        className={`h-2 w-full rounded-full ${track} overflow-hidden`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={`h-full rounded-full ${bar} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
