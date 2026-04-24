"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { Defeats } from "./Defeats";

export interface Primitive {
  name: string;
  desc: string;
  bullets: string[];
  defeats: string;
}

type IconKey =
  | "layers" | "search" | "gate" | "tags" | "link-check"
  | "shield" | "globe" | "gauge" | "eye" | "book";

const PRIM_ICONS: IconKey[] = [
  "layers", "search", "gate", "tags", "link-check",
  "shield", "globe", "gauge", "eye", "book",
];

// Per-primitive accent gradient (from/to hex) — drives glow + border
const ACCENTS: { from: string; to: string; text: string; ring: string }[] = [
  { from: "#06b6d4", to: "#0ea5e9", text: "#67e8f9", ring: "rgba(6,182,212,0.45)"   }, // cyan
  { from: "#8b5cf6", to: "#a78bfa", text: "#c4b5fd", ring: "rgba(139,92,246,0.45)"  }, // violet
  { from: "#f59e0b", to: "#f97316", text: "#fcd34d", ring: "rgba(245,158,11,0.45)"  }, // amber
  { from: "#10b981", to: "#059669", text: "#6ee7b7", ring: "rgba(16,185,129,0.45)"  }, // emerald
  { from: "#f43f5e", to: "#e11d48", text: "#fda4af", ring: "rgba(244,63,94,0.45)"   }, // rose
  { from: "#3b82f6", to: "#2563eb", text: "#93c5fd", ring: "rgba(59,130,246,0.45)"  }, // blue
  { from: "#0ea5e9", to: "#0284c7", text: "#7dd3fc", ring: "rgba(14,165,233,0.45)"  }, // sky
  { from: "#f97316", to: "#ea580c", text: "#fdba74", ring: "rgba(249,115,22,0.45)"  }, // orange
  { from: "#d946ef", to: "#a21caf", text: "#f0abfc", ring: "rgba(217,70,239,0.45)"  }, // fuchsia
  { from: "#14b8a6", to: "#0d9488", text: "#5eead4", ring: "rgba(20,184,166,0.45)"  }, // teal
];

function PrimIcon({ name, className = "w-7 h-7" }: { name: IconKey; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "layers":
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "gate":
      return (
        <svg {...common}>
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      );
    case "tags":
      return (
        <svg {...common}>
          <path d="M20.59 13.41L13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      );
    case "link-check":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="8" />
          <path d="M12 13l4-4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="4.2" y1="6.2" x2="5.6" y2="7.6" />
          <line x1="19.8" y1="6.2" x2="18.4" y2="7.6" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="8" y1="7" x2="17" y2="7" />
          <line x1="8" y1="11" x2="17" y2="11" />
        </svg>
      );
  }
}

export function DefensivePrimitivesGrid({ primitives }: { primitives: Primitive[] }) {
  const [selected, setSelected] = useState<number>(0);
  const handleSelect = (i: number) => setSelected(i);
  const p = primitives[selected];
  const a = ACCENTS[selected];

  return (
    <div className="space-y-6">
      {/* Tile grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {primitives.map((prim, i) => {
          const acc = ACCENTS[i];
          const isSelected = selected === i;
          return (
            <Reveal key={prim.name} delay={i * 40}>
              <button
                onClick={() => handleSelect(i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleSelect(i); } }}
                className={`primitive-tile relative w-full p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2.5 overflow-hidden group ${
                  isSelected
                    ? "border-transparent shadow-xl -translate-y-0.5"
                    : "border-slate-700/50 bg-slate-900/40 hover:-translate-y-0.5"
                }`}
                style={
                  isSelected
                    ? {
                        background: `linear-gradient(135deg, ${acc.from}20 0%, ${acc.to}20 100%)`,
                        boxShadow: `0 0 0 1px ${acc.from}60, 0 10px 30px -10px ${acc.ring}`,
                      }
                    : undefined
                }
                aria-pressed={isSelected}
                tabIndex={0}
              >
                {/* Decorative blurred blob on hover/active */}
                <span
                  className={`pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl transition-opacity duration-300 ${
                    isSelected ? "opacity-60" : "opacity-0 group-hover:opacity-30"
                  }`}
                  style={{ background: `radial-gradient(circle, ${acc.from}, transparent 70%)` }}
                  aria-hidden="true"
                />

                {/* Number pill */}
                <span
                  className={`absolute top-2 right-2 text-[10px] font-mono font-bold tracking-wider transition-colors ${
                    isSelected ? "" : "text-slate-600 group-hover:text-slate-400"
                  }`}
                  style={isSelected ? { color: acc.from } : undefined}
                >
                  P{i + 1}
                </span>

                {/* Icon with gradient square */}
                <span
                  className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: isSelected
                      ? `linear-gradient(135deg, ${acc.from}, ${acc.to})`
                      : `linear-gradient(135deg, ${acc.from}18, ${acc.to}18)`,
                    boxShadow: isSelected
                      ? `0 4px 14px -4px ${acc.ring}, inset 0 0 0 1px ${acc.from}60`
                      : `inset 0 0 0 1px ${acc.from}30`,
                  }}
                >
                  <span style={{ color: isSelected ? "#ffffff" : acc.from }}>
                    <PrimIcon name={PRIM_ICONS[i]} className="w-6 h-6" />
                  </span>
                </span>

                <span
                  className={`relative z-10 text-xs font-semibold text-center leading-tight transition-colors ${
                    isSelected ? "" : "text-slate-300"
                  }`}
                  style={isSelected ? { color: acc.from } : undefined}
                >
                  {prim.name}
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        className="primitive-detail relative rounded-2xl border border-slate-800/60 overflow-hidden backdrop-blur-sm"
        aria-live="polite"
      >
        {/* Accent backdrop — theme-safe tint over neutral surface */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: `linear-gradient(180deg, ${a.from}14 0%, transparent 65%)` }}
        />
        {/* Top accent strip */}
        <div className="relative h-1" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} aria-hidden="true" />

        <div className="relative p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-4">
            <span
              className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                boxShadow: `0 10px 30px -10px ${a.ring}`,
              }}
            >
              <span className="text-white">
                <PrimIcon name={PRIM_ICONS[selected]} className="w-7 h-7" />
              </span>
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold tracking-widest" style={{ color: a.from }}>
                  P{selected + 1}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Guardrail</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{p.name}</h3>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">{p.desc}</p>

          <ul className="space-y-2 mb-5">
            {p.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: a.from, boxShadow: `0 0 8px ${a.ring}` }}
                  aria-hidden="true"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {p.defeats && (
            <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-slate-800/60">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Defeats</span>
              <Defeats ids={p.defeats} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
