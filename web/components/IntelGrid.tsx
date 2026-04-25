"use client";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { useReducedMotion } from "@/lib/useReducedMotion";

export interface Tip {
  icon: string;
  text: string;
}

interface IntelGridProps {
  tips: Tip[];
}

type Category = "ATTACK SURFACE" | "DEFENSE" | "HEURISTIC";
type Severity = "critical" | "hardening" | "watch";

interface IntelMeta {
  category: Category;
  severity: Severity;
}

const INTEL_MAP: IntelMeta[] = [
  { category: "ATTACK SURFACE", severity: "critical" },
  { category: "DEFENSE",        severity: "hardening" },
  { category: "HEURISTIC",      severity: "watch" },
  { category: "HEURISTIC",      severity: "watch" },
  { category: "HEURISTIC",      severity: "watch" },
  { category: "ATTACK SURFACE", severity: "critical" },
  { category: "ATTACK SURFACE", severity: "critical" },
  { category: "ATTACK SURFACE", severity: "critical" },
  { category: "DEFENSE",        severity: "hardening" },
  { category: "DEFENSE",        severity: "hardening" },
];

function SeverityDot({ severity }: { severity: Severity }) {
  const cls =
    severity === "critical"  ? "bg-danger-400 shadow-[0_0_6px_rgba(244,63,94,0.7)]" :
    severity === "hardening" ? "bg-brand-400 shadow-[0_0_6px_rgba(96,165,250,0.7)]" :
                               "bg-warn-400 shadow-[0_0_6px_rgba(251,191,36,0.7)]";
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full shrink-0 animate-pulse-glow ${cls}`}
      aria-hidden="true"
    />
  );
}

function CategoryPill({ category }: { category: Category }) {
  const cls =
    category === "ATTACK SURFACE"
      ? "bg-danger-900/50 border-danger-700/60 text-danger-300"
      : category === "DEFENSE"
      ? "bg-brand-900/50 border-brand-700/60 text-brand-300"
      : "bg-warn-900/50 border-warn-700/60 text-warn-300";
  return (
    <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${cls}`}>
      {category}
    </span>
  );
}

function AttackSurfaceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="text-danger-400">
      <path d="M16 3L30 27H2L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <line x1="16" y1="13" x2="16" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="16" cy="23.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function DefenseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="text-brand-400">
      <path d="M16 3L28 8V17C28 23.627 22.627 29 16 29C9.373 29 4 23.627 4 17V8L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M11 16L14.5 19.5L21 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeuristicIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="text-warn-400">
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="20" x2="28" y2="28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function CategoryIcon({ category }: { category: Category }) {
  switch (category) {
    case "ATTACK SURFACE": return <AttackSurfaceIcon />;
    case "DEFENSE":        return <DefenseIcon />;
    case "HEURISTIC":      return <HeuristicIcon />;
  }
}

function CornerBrackets({ category }: { category: Category }) {
  const cls =
    category === "ATTACK SURFACE"
      ? "text-danger-500/60 group-hover:text-danger-400 transition-colors duration-200"
      : category === "DEFENSE"
      ? "text-brand-500/60 group-hover:text-brand-400 transition-colors duration-200"
      : "text-warn-500/60 group-hover:text-warn-400 transition-colors duration-200";

  const bracket = (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M0 10 L0 0 L10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
  return (
    <>
      <span className={`absolute top-2 left-2 ${cls}`}>{bracket}</span>
      <span className={`absolute top-2 right-2 rotate-90 ${cls}`}>{bracket}</span>
      <span className={`absolute bottom-2 left-2 -rotate-90 ${cls}`}>{bracket}</span>
      <span className={`absolute bottom-2 right-2 rotate-180 ${cls}`}>{bracket}</span>
    </>
  );
}

function AccentBarFill({ category, index }: { category: Category; index: number }) {
  const cls =
    category === "ATTACK SURFACE" ? "bg-danger-500/70" :
    category === "DEFENSE"        ? "bg-brand-500/70" :
                                    "bg-warn-500/70";
  return (
    <div
      data-bar-index={index}
      className={`h-full w-full rounded-full ${cls} origin-left scale-x-0`}
    />
  );
}

function IntelCard({ tip, meta, index }: { tip: Tip; meta: IntelMeta; index: number }) {
  const serial = `INTEL-${String(index + 1).padStart(2, "0")}`;
  return (
    <div
      data-card-index={index}
      className="group relative glass rounded-xl border p-5 h-full flex flex-col gap-3 opacity-0 translate-y-4
        hover:-translate-y-0.5 hover:border-slate-600/80 transition-transform duration-200 cursor-default"
    >
      <CornerBrackets category={meta.category} />

      <div className="flex items-center gap-2">
        <SeverityDot severity={meta.severity} />
        <CategoryPill category={meta.category} />
        <span className="ml-auto font-mono text-[10px] text-slate-500 shrink-0">{serial}</span>
      </div>

      <div className="flex items-center justify-center py-1">
        <CategoryIcon category={meta.category} />
      </div>

      <p className="flex-1 text-base font-medium leading-snug text-slate-300 group-hover:text-white transition-colors duration-200">
        {tip.text}
      </p>

      <div className="h-[2px] rounded-full overflow-hidden bg-slate-800/60 mt-auto">
        <AccentBarFill category={meta.category} index={index} />
      </div>
    </div>
  );
}

function ReducedCard({ tip, meta, i }: { tip: Tip; meta: IntelMeta; i: number }) {
  const barCls =
    meta.category === "ATTACK SURFACE" ? "bg-danger-500/70" :
    meta.category === "DEFENSE"        ? "bg-brand-500/70" :
                                         "bg-warn-500/70";
  return (
    <div className="group relative glass rounded-xl border p-5 h-full flex flex-col gap-3">
      <CornerBrackets category={meta.category} />
      <div className="flex items-center gap-2">
        <SeverityDot severity={meta.severity} />
        <CategoryPill category={meta.category} />
        <span className="ml-auto font-mono text-[10px] text-slate-500 shrink-0">
          {`INTEL-${String(i + 1).padStart(2, "0")}`}
        </span>
      </div>
      <div className="flex items-center justify-center py-1">
        <CategoryIcon category={meta.category} />
      </div>
      <p className="flex-1 text-base font-medium leading-snug text-slate-300">{tip.text}</p>
      <div className="h-[2px] rounded-full overflow-hidden bg-slate-800/60 mt-auto">
        <div className={`h-full w-full rounded-full ${barCls}`} />
      </div>
    </div>
  );
}

export function IntelGrid({ tips }: IntelGridProps) {
  const reduced = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const container = gridRef.current;
    if (!container) return;

    let fired = false;

    const run = () => {
      if (fired) return;
      fired = true;

      const cards = container.querySelectorAll<HTMLElement>("[data-card-index]");
      const bars  = container.querySelectorAll<HTMLElement>("[data-bar-index]");

      try {
        animate(cards, {
          opacity:    [0, 1],
          translateY: [16, 0],
          duration:   500,
          ease:       "outCubic",
          delay:      stagger(50),
        });

        animate(bars, {
          scaleX:   [0, 1],
          duration: 600,
          ease:     "outCubic",
          delay:    stagger(50, { start: 300 }),
        });
      } catch {
        cards.forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
        bars.forEach((el)  => { el.style.transform = "scaleX(1)"; });
      }
    };

    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [reduced]);

  if (reduced) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tips.map((tip, i) => {
          const meta = INTEL_MAP[i] ?? INTEL_MAP[0];
          return <ReducedCard key={i} tip={tip} meta={meta} i={i} />;
        })}
      </div>
    );
  }

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {tips.map((tip, i) => {
        const meta = INTEL_MAP[i] ?? INTEL_MAP[0];
        return <IntelCard key={i} tip={tip} meta={meta} index={i} />;
      })}
    </div>
  );
}
