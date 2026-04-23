interface ProgressBarProps {
  value: number;
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-1">
      {label && <div className="text-sm text-gray-500">{label}</div>}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-brand-600 h-2 rounded-full transition-all"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
