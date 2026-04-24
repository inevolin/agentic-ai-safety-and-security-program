"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { createDrawable, createTimeline } from "animejs";

export function MultiAgentDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const revealAll = () => {
      svg.querySelectorAll("[data-anime]").forEach((el) => {
        (el as SVGElement).style.opacity = "1";
        (el as SVGElement).style.strokeDashoffset = "0";
      });
      const boundary = svg.querySelector<SVGPathElement>("#ma-boundary");
      if (boundary) boundary.style.opacity = "1";
    };

    if (reduced) {
      revealAll();
      return;
    }

    const play = () => {
      try {
        const haiku = svg.querySelector<SVGGElement>("#ma-haiku");
        const arr1 = svg.querySelector<SVGPathElement>("#ma-arr1");
        const store = svg.querySelector<SVGGElement>("#ma-store");
        const poison = svg.querySelector<SVGGElement>("#ma-poison");
        const boundary = svg.querySelector<SVGPathElement>("#ma-boundary");
        const arr2 = svg.querySelector<SVGPathElement>("#ma-arr2");
        const opus = svg.querySelector<SVGGElement>("#ma-opus");
        const arr3 = svg.querySelector<SVGPathElement>("#ma-arr3");
        const out = svg.querySelector<SVGGElement>("#ma-out");

        // set animated elements to opacity 0 just-in-time
        [haiku, store, poison, opus, out].forEach((el) => {
          if (el) el.style.opacity = "0";
        });
        if (boundary) boundary.style.opacity = "0";

        const tl = createTimeline({
          defaults: { ease: "outCubic" },
          autoplay: true,
        });

        tl.add(haiku ? [haiku] : [], { opacity: [0, 1], translateY: [-6, 0], duration: 380 });

        const d1 = arr1 ? createDrawable(arr1) : null;
        if (d1) tl.add([d1], { draw: ["0 0", "0 1"], duration: 380, ease: "outExpo" });

        tl.add(store ? [store] : [], { opacity: [0, 1], scale: [0.92, 1], duration: 380 }, "-=100");
        tl.add(poison ? [poison] : [], { opacity: [0, 1], duration: 280 }, "+=60");

        // trust boundary dashes — animate opacity + draw
        const db = boundary ? createDrawable(boundary) : null;
        if (db) tl.add([db], { opacity: [0, 1], draw: ["0 0", "0 1"], duration: 600, ease: "inOutSine" }, "-=200");

        const d2 = arr2 ? createDrawable(arr2) : null;
        if (d2) tl.add([d2], { draw: ["0 0", "0 1"], duration: 400, ease: "outExpo" });

        tl.add(opus ? [opus] : [], { opacity: [0, 1], scale: [0.92, 1], duration: 420 }, "-=150");

        const d3 = arr3 ? createDrawable(arr3) : null;
        if (d3) tl.add([d3], { draw: ["0 0", "0 1"], duration: 380, ease: "outExpo" });

        tl.add(out ? [out] : [], { opacity: [0, 1], translateX: [8, 0], duration: 380 }, "-=150");

        return tl;
      } catch {
        revealAll();
        return null;
      }
    };

    let io: IntersectionObserver | null = null;
    let tl: ReturnType<typeof createTimeline> | null = null;

    const rect = svg.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      tl = play() ?? null;
    } else {
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            tl = play() ?? null;
            io?.disconnect();
            io = null;
          }
        },
        { threshold: 0, rootMargin: "0px 0px -10% 0px" }
      );
      io.observe(svg);
    }

    return () => {
      io?.disconnect();
      tl?.revert();
    };
  }, [reduced]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 320 200"
      className="w-full h-auto"
      aria-label="Multi-agent poisoning: Haiku seeds shared store, Opus reads it and propagates attacker URL"
      role="img"
    >
      <defs>
        <marker id="ma-arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6" fill="none" stroke="#10b981" strokeWidth="1.2" />
        </marker>
        <marker id="ma-arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6" fill="none" stroke="#ef4444" strokeWidth="1.2" />
        </marker>
        <marker id="ma-arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6" fill="none" stroke="#60a5fa" strokeWidth="1.2" />
        </marker>
      </defs>

      {/* Haiku — small agent */}
      <g id="ma-haiku" data-anime style={{ transformOrigin: "36px 100px" }}>
        <rect x="8" y="76" width="56" height="48" rx="8" fill="#0f2a1a" fillOpacity="0.9" stroke="#10b981" strokeWidth="1" />
        <circle cx="36" cy="96" r="9" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="36" cy="96" r="4" fill="#065f46" fillOpacity="0.8" />
        <text x="36" y="116" textAnchor="middle" fill="#6ee7b7" fontSize="12">Haiku</text>
      </g>

      {/* Arrow Haiku → store */}
      <path id="ma-arr1" d="M65 100 L92 100" stroke="#10b981" strokeWidth="1.8" fill="none" markerEnd="url(#ma-arrowG)" />

      {/* Shared store (CSV / catalog) */}
      <g id="ma-store" data-anime style={{ transformOrigin: "127px 100px" }}>
        <rect x="94" y="62" width="66" height="76" rx="8" fill="#1a1a2e" fillOpacity="0.9" stroke="#4338ca" strokeWidth="1" />
        {/* table rows inside */}
        <line x1="102" y1="80" x2="152" y2="80" stroke="#3730a3" strokeWidth="0.8" />
        <line x1="102" y1="92" x2="152" y2="92" stroke="#3730a3" strokeWidth="0.8" />
        <line x1="102" y1="104" x2="152" y2="104" stroke="#3730a3" strokeWidth="0.8" />
        <line x1="102" y1="116" x2="152" y2="116" stroke="#3730a3" strokeWidth="0.8" />
        <text x="127" y="124" textAnchor="middle" fill="#818cf8" fontSize="10">Approved</text>
        <text x="127" y="134" textAnchor="middle" fill="#818cf8" fontSize="10">Catalog</text>
      </g>

      {/* Poison row overlay in store */}
      <g id="ma-poison" data-anime>
        <rect x="94" y="104" width="66" height="12" fill="#7f1d1d" fillOpacity="0.65" stroke="#ef444440" strokeWidth="0.5" />
        <text x="110" y="113" fill="#fca5a5" fontSize="10">evil.io ✓</text>
      </g>

      {/* Trust boundary dashed vertical line — no opacity attr; controlled via JS */}
      <path
        id="ma-boundary"
        d="M168 40 L168 160"
        stroke="#f59e0b"
        strokeWidth="1.2"
        strokeDasharray="5 4"
        fill="none"
      />
      <text x="165" y="36" textAnchor="middle" fill="#f59e0b" fontSize="10" fontStyle="italic">trust boundary</text>

      {/* Arrow store → Opus */}
      <path id="ma-arr2" d="M161 100 L190 100" stroke="#ef4444" strokeWidth="1.8" fill="none" markerEnd="url(#ma-arrowR)" />

      {/* Opus — larger agent */}
      <g id="ma-opus" data-anime style={{ transformOrigin: "218px 100px" }}>
        <rect x="192" y="66" width="52" height="68" rx="9" fill="#1e3a5f" fillOpacity="0.9" stroke="#60a5fa" strokeWidth="1.3" />
        <circle cx="218" cy="90" r="12" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="218" cy="90" r="6" fill="#1d4ed8" fillOpacity="0.7" />
        <text x="218" y="126" textAnchor="middle" fill="#93c5fd" fontSize="12">Opus</text>
      </g>

      {/* Arrow Opus → output */}
      <path id="ma-arr3" d="M245 100 L268 100" stroke="#ef4444" strokeWidth="1.8" fill="none" markerEnd="url(#ma-arrowR)" />

      {/* Output */}
      <g id="ma-out" data-anime style={{ transformOrigin: "292px 100px" }}>
        <rect x="270" y="72" width="42" height="56" rx="8" fill="#450a0a" fillOpacity="0.85" stroke="#ef4444" strokeWidth="1" />
        <text x="291" y="96" textAnchor="middle" fill="#fca5a5" fontSize="10">Docs</text>
        <text x="291" y="112" textAnchor="middle" fill="#ef4444" fontSize="14">⚠</text>
        <text x="291" y="141" textAnchor="middle" fill="#fca5a5" fontSize="11">Bypassed</text>
      </g>
    </svg>
  );
}
