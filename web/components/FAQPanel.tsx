"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQPanel({ items }: { items: FAQItem[] }) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="space-y-0">
      {/* Desktop: two-column layout */}
      <div className="hidden md:grid md:grid-cols-[280px_1fr] gap-6">
        {/* Left: question pills */}
        <nav aria-label="FAQ questions" className="space-y-1.5">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                selected === i
                  ? "bg-brand-800/60 border-brand-500/60 text-cyan-300 shadow-sm shadow-brand-900/30"
                  : "glass border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700/60"
              }`}
              aria-pressed={selected === i}
            >
              {item.q}
            </button>
          ))}
        </nav>

        {/* Right: answer panel */}
        <div
          key={selected}
          className="glass rounded-xl px-8 py-7 min-h-[240px]"
          aria-live="polite"
          style={{ animation: "faqFadeIn 0.22s ease-out" }}
        >
          <h3 className="text-white font-bold text-lg mb-4">{items[selected].q}</h3>
          <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{items[selected].a}</p>
        </div>
      </div>

      {/* Mobile: chip row + answer */}
      <div className="md:hidden space-y-4">
        {/* Horizontally scrollable chip row */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 snap-x"
          role="tablist"
          aria-label="FAQ questions"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setSelected(i)}
              aria-selected={selected === i}
              className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                selected === i
                  ? "bg-brand-800/70 border-brand-500/60 text-cyan-300"
                  : "glass border-slate-700/50 text-slate-400"
              }`}
            >
              {item.q}
            </button>
          ))}
        </div>

        {/* Answer */}
        <div
          key={`m-${selected}`}
          className="glass rounded-xl px-5 py-5"
          aria-live="polite"
          style={{ animation: "faqFadeIn 0.22s ease-out" }}
        >
          <h3 className="text-white font-bold text-base mb-3">{items[selected].q}</h3>
          <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{items[selected].a}</p>
        </div>
      </div>

      {/* Animation keyframe injected once */}
      <style>{`
        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes faqFadeIn { from { opacity:1; } to { opacity:1; } }
        }
      `}</style>
    </div>
  );
}
