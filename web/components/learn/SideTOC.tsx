"use client";

import { useEffect, useState, useCallback } from "react";
import { useLearn } from "./LearnContext";

export function SideTOC() {
  const { modules, viewedLessons, expandModuleAndLesson } = useLearn();
  const [activeModule, setActiveModule] = useState<number>(1);

  // Track which module is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id; // "mN"
            const num = parseInt(id.replace("m", ""));
            if (!isNaN(num)) setActiveModule(num);
          }
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    for (const m of modules) {
      const el = document.getElementById(`m${m.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [modules]);

  const handleClick = useCallback(
    (moduleId: number) => {
      expandModuleAndLesson(moduleId);
      // Small delay so state update propagates before scrolling
      requestAnimationFrame(() => {
        const el = document.getElementById(`m${moduleId}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      history.replaceState(null, "", `#m${moduleId}`);
    },
    [expandModuleAndLesson]
  );

  return (
    <aside className="hidden lg:block sticky top-24 h-fit">
      <div className="glass rounded-2xl p-4 space-y-1 min-w-[200px]">
        <div className="text-xs font-mono text-slate-500 uppercase tracking-wider px-2 pb-2 border-b border-slate-800 mb-2">
          Modules
        </div>
        {modules.map((m) => {
          const viewed = m.lessonCount > 0
            ? Array.from({ length: m.lessonCount }, (_, i) =>
                viewedLessons.has(`${m.id}-${i + 1}`)
              )
            : [];
          const isActive = activeModule === m.id;

          return (
            <button
              key={m.id}
              onClick={() => handleClick(m.id)}
              className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left transition-colors text-sm group ${
                isActive
                  ? "bg-brand-900/50 text-white border border-brand-700/50"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              {/* Module number */}
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive ? "bg-brand-600 text-white" : "bg-slate-800 text-slate-500 group-hover:bg-slate-700"
                }`}
              >
                {m.id}
              </span>
              <span className="flex-1 text-xs leading-tight line-clamp-2">
                {m.title.replace(/^Module \d+:\s*/, "")}
              </span>
              {/* Progress dots */}
              <div className="flex gap-0.5 flex-shrink-0" aria-label={`${viewed.filter(Boolean).length}/${m.lessonCount} viewed`}>
                {viewed.map((v, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      v ? "bg-cyan-400" : "bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
