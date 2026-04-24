"use client";

import type { ReactNode } from "react";
import { useLearn } from "./LearnContext";

const MODULE_COLORS: Record<number, { bg: string; border: string; badge: string }> = {
  1: { bg: "from-brand-950/80 to-brand-900/40", border: "border-brand-800/60", badge: "bg-brand-800/60 text-brand-300 border-brand-700/50" },
  2: { bg: "from-danger-950/80 to-danger-900/30", border: "border-danger-900/60", badge: "bg-danger-900/60 text-danger-300 border-danger-800/50" },
  3: { bg: "from-warn-950/80 to-amber-950/30", border: "border-warn-900/60", badge: "bg-warn-900/60 text-warn-300 border-warn-800/50" },
  4: { bg: "from-cyan-950/80 to-cyan-900/30", border: "border-cyan-900/60", badge: "bg-cyan-900/60 text-cyan-300 border-cyan-800/50" },
  5: { bg: "from-slate-900/80 to-slate-800/30", border: "border-slate-700/60", badge: "bg-slate-800/60 text-slate-300 border-slate-700/50" },
  6: { bg: "from-brand-950/80 to-indigo-950/30", border: "border-indigo-900/60", badge: "bg-indigo-900/60 text-indigo-300 border-indigo-800/50" },
};

interface Props {
  id: number;
  title: string;
  description?: string;
  duration?: string;
  lessonCount: number;
  children: ReactNode;
}

export function ModuleSection({ id, title, description, duration, lessonCount, children }: Props) {
  const { viewedLessons } = useLearn();
  const colors = MODULE_COLORS[id] ?? MODULE_COLORS[1];

  const viewedCount = Array.from({ length: lessonCount }, (_, i) =>
    viewedLessons.has(`${id}-${i + 1}`)
  ).filter(Boolean).length;

  return (
    <section
      id={`m${id}`}
      className={`rounded-2xl border ${colors.border} overflow-hidden mb-4`}
      style={{ scrollMarginTop: "7rem" }}
    >
      {/* Module header — static grouping, not interactive */}
      <div className={`module-header w-full bg-gradient-to-r ${colors.bg} flex items-center gap-4 px-5 py-4`}>
        <span
          className={`module-badge flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-bold text-sm ${colors.badge}`}
        >
          {id}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-base font-bold text-white leading-tight">
              {title.replace(/^Module \d+:\s*/, "")}
            </h2>
            {duration && (
              <span className="text-xs text-slate-500 font-mono">{duration}</span>
            )}
          </div>
          {description && (
            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{description}</p>
          )}
        </div>

        {/* Progress dots */}
        <div
          className="flex gap-1 flex-shrink-0"
          aria-label={`${viewedCount} of ${lessonCount} lessons viewed`}
        >
          {Array.from({ length: lessonCount }, (_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                viewedLessons.has(`${id}-${i + 1}`) ? "bg-cyan-400" : "bg-slate-700"
              }`}
            />
          ))}
        </div>

        <span className="text-xs text-slate-500 font-mono flex-shrink-0 hidden sm:block">
          {lessonCount} lessons
        </span>
      </div>

      {/* Lessons — always visible */}
      <div className="divide-y divide-slate-800/60">
        {children}
      </div>
    </section>
  );
}
