"use client";
import { useReducedMotion } from "@/lib/useReducedMotion";

export interface Tip {
  icon: string;
  text: string;
}

interface TipsMarqueeProps {
  tips: Tip[];
}

export function TipsMarquee({ tips }: TipsMarqueeProps) {
  const reduced = useReducedMotion();

  // Double the list so the loop is seamless
  const doubled = [...tips, ...tips];

  if (reduced) {
    return (
      <div className="section-content">
        <ul className="grid sm:grid-cols-2 gap-3">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
              <span aria-hidden="true">{tip.icon}</span>
              {tip.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges — use CSS var for theme-aware fade color */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none marquee-fade-left" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none marquee-fade-right" />

      <div
        className="flex gap-12 marquee-track w-max"
        aria-hidden="true"
      >
        {doubled.map((tip, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-slate-400 whitespace-nowrap py-2"
          >
            <span className="text-base leading-none">{tip.icon}</span>
            <span>{tip.text}</span>
          </div>
        ))}
      </div>

      {/* Accessible static version */}
      <ul className="sr-only">
        {tips.map((tip, i) => <li key={i}>{tip.text}</li>)}
      </ul>
    </div>
  );
}
