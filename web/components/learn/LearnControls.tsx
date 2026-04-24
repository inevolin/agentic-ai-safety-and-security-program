"use client";

import { useRef, useEffect, useCallback } from "react";
import { useLearn } from "./LearnContext";

const TOTAL_LESSONS = 20;

export function LearnControls() {
  const {
    searchQuery,
    setSearch,
    expandAll,
    collapseAll,
    viewedLessons,
    lessonHeaderIds,
  } = useLearn();

  const inputRef = useRef<HTMLInputElement>(null);

  const focusSearch = useCallback(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      const isInput =
        tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

      if (e.key === "/" && !isInput) {
        e.preventDefault();
        focusSearch();
        return;
      }

      if (e.key === "Escape" && isInput) {
        setSearch("");
        inputRef.current?.blur();
        return;
      }


      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const focused = document.activeElement;
        if (!focused) return;
        const dataId = (focused as HTMLElement).dataset?.lessonHeader;
        if (!dataId) return;
        e.preventDefault();
        const idx = lessonHeaderIds.indexOf(dataId);
        if (idx === -1) return;
        const nextIdx =
          e.key === "ArrowDown"
            ? Math.min(idx + 1, lessonHeaderIds.length - 1)
            : Math.max(idx - 1, 0);
        const nextId = lessonHeaderIds[nextIdx];
        const nextEl = document.querySelector<HTMLElement>(
          `[data-lesson-header="${nextId}"]`
        );
        nextEl?.focus();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [focusSearch, expandAll, collapseAll, lessonHeaderIds, setSearch]);

  const viewed = viewedLessons.size;

  return (
    <div className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Title */}
        <h1 className="text-base font-bold text-white flex-shrink-0 hidden sm:block">
          Learning modules
        </h1>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            aria-label="Search lessons"
            placeholder="Search lessons… (/)"
            value={searchQuery}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900/60 border border-slate-700/60 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500"
          />
          {searchQuery && (
            <button
              onClick={() => { setSearch(""); inputRef.current?.focus(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              aria-label="Clear search"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={expandAll}
            title="Expand all (e)"
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors border border-slate-700/60"
          >
            Expand all
          </button>
          <button
            onClick={collapseAll}
            title="Collapse all (c)"
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors border border-slate-700/60"
          >
            Collapse all
          </button>
          <div className="text-xs text-slate-500 font-mono ml-1 flex-shrink-0">
            <span className={viewed > 0 ? "text-cyan-400" : ""}>{viewed}</span>
            <span> / {TOTAL_LESSONS}</span>
            <span className="hidden sm:inline"> viewed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
