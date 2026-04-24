"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { animate, createDrawable, onScroll } from "animejs";

interface HowIconProps {
  type: "doc" | "db" | "chain";
}

export function HowIcon({ type }: HowIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const paths = Array.from(container.querySelectorAll<SVGPathElement>("path, ellipse"));
    if (paths.length === 0) return;

    paths.forEach((p) => { p.style.opacity = "1"; });

    if (reduced) return;

    try {
      const drawables = paths.map((p) => createDrawable(p));
      const anim = animate(drawables, {
        draw: ["0 0", "0 1"],
        opacity: [0, 1],
        duration: 700,
        ease: "inOutSine",
        delay: (_el: unknown, i: number) => i * 80,
        autoplay: onScroll({ target: container, sync: false }),
      });
      return () => { anim.revert(); };
    } catch {
      return;
    }
  }, [reduced]);

  if (type === "doc") {
    return (
      <div ref={ref} className="w-12 h-12 rounded-xl bg-danger-950/60 border border-danger-800/40 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9L14 3z" stroke="#fb7185" strokeWidth="1.5" strokeLinejoin="round" opacity="0" />
          <path d="M14 3v6h6" stroke="#fb7185" strokeWidth="1.5" strokeLinecap="round" opacity="0" />
          <path d="M8 13h8M8 17h5" stroke="#fda4af" strokeWidth="1.5" strokeLinecap="round" opacity="0" />
        </svg>
      </div>
    );
  }
  if (type === "db") {
    return (
      <div ref={ref} className="w-12 h-12 rounded-xl bg-warn-950/60 border border-warn-800/40 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#fbbf24" strokeWidth="1.5" opacity="0" />
          <path d="M4 5v4c0 1.657 3.582 3 8 3s8-1.343 8-3V5" stroke="#fbbf24" strokeWidth="1.5" opacity="0" />
          <path d="M4 9v4c0 1.657 3.582 3 8 3s8-1.343 8-3V9" stroke="#fbbf24" strokeWidth="1.5" opacity="0" />
          <path d="M4 13v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4" stroke="#fbbf24" strokeWidth="1.5" opacity="0" />
        </svg>
      </div>
    );
  }
  // chain
  return (
    <div ref={ref} className="w-12 h-12 rounded-xl bg-brand-950/60 border border-brand-800/40 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 12h2M15 12h2" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" opacity="0" />
        <path d="M4 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" stroke="#93c5fd" strokeWidth="1.5" opacity="0" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" stroke="#60a5fa" strokeWidth="1.5" opacity="0" />
        <path d="M20 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" stroke="#ef4444" strokeWidth="1.5" opacity="0" />
      </svg>
    </div>
  );
}
