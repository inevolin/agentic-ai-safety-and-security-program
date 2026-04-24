"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { animate, createDrawable, onScroll } from "animejs";

export function CurriculumLine() {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const path = svg.querySelector<SVGPathElement>("#curriculum-path");
    if (!path) return;

    path.style.opacity = "1";
    if (reduced) return;

    try {
      const drawable = createDrawable(path);
      const anim = animate(drawable, {
        draw: ["0 0", "0 1"],
        opacity: [0, 1],
        duration: 1200,
        ease: "inOutCubic",
        autoplay: onScroll({ target: svg, sync: false }),
      });
      return () => { anim.revert(); };
    } catch {
      return;
    }
  }, [reduced]);

  return (
    <svg
      ref={ref}
      className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 pointer-events-none"
      width="2"
      style={{ height: "calc(100% - 4rem)" }}
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 2 100"
    >
      <defs>
        <linearGradient id="curriculum-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
          <stop offset="30%" stopColor="#4f46e5" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#4f46e5" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        id="curriculum-path"
        d="M1 0 L1 100"
        stroke="url(#curriculum-grad)"
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
        opacity="0"
      />
    </svg>
  );
}
