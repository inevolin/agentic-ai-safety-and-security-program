"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";

export interface Primitive {
  name: string;
  desc: string;
  bullets: string[];
  defeats: string;
}

// One distinct icon per primitive — visually varied
const PRIM_ICONS = ["🏛", "🔎", "🚪", "🗂", "🔗", "🧱", "🌐", "⏱", "📡", "📖"];

export function DefensivePrimitivesGrid({ primitives }: { primitives: Primitive[] }) {
  const [selected, setSelected] = useState<number>(0);

  const handleSelect = (i: number) => setSelected(i);

  const p = primitives[selected];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {primitives.map((prim, i) => (
          <Reveal key={prim.name} delay={i * 50}>
            <button
              onClick={() => handleSelect(i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleSelect(i); } }}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col items-center gap-2 ${
                selected === i
                  ? "bg-brand-800/60 border-brand-500/60 shadow-lg shadow-brand-900/20"
                  : "glass hover:border-brand-600/40"
              }`}
              aria-pressed={selected === i}
              tabIndex={0}
            >
              <span className="text-2xl" aria-hidden="true">{PRIM_ICONS[i]}</span>
              <span className={`text-xs font-semibold text-center leading-tight ${selected === i ? "text-cyan-300" : "text-slate-300"}`}>
                {prim.name}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Description panel */}
      <div
        className="glass rounded-xl px-6 py-5 transition-all duration-200"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl flex-shrink-0" aria-hidden="true">{PRIM_ICONS[selected]}</span>
          <span className="font-mono text-cyan-400 font-bold text-base">
            P{selected + 1} — {p.name}
          </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">{p.desc}</p>
        <ul className="space-y-1 mb-3">
          {p.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="text-cyan-500 mt-0.5 flex-shrink-0">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs font-mono text-slate-500 border-t border-slate-700/50 pt-2">
          Defeats: <span className="text-brand-400">{p.defeats}</span>
        </p>
      </div>
    </div>
  );
}
