"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { createDrawable, createTimeline } from "animejs";

export function DocInjectDiagram() {
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
    };

    if (reduced) {
      revealAll();
      return;
    }

    const play = () => {
      try {
        const docGroup = svg.querySelector<SVGGElement>("#di-doc");
        const poisonLine = svg.querySelector<SVGGElement>("#di-poison");
        const arr1 = svg.querySelector<SVGPathElement>("#di-arr1");
        const agentGroup = svg.querySelector<SVGGElement>("#di-agent");
        const arr2 = svg.querySelector<SVGPathElement>("#di-arr2");
        const sysGroup = svg.querySelector<SVGGElement>("#di-sys");

        // set animated elements to opacity 0 just-in-time
        [docGroup, poisonLine, agentGroup, sysGroup].forEach((el) => {
          if (el) el.style.opacity = "0";
        });

        const tl = createTimeline({
          defaults: { ease: "outCubic" },
          autoplay: true,
        });

        tl.add(docGroup ? [docGroup] : [], { opacity: [0, 1], translateY: [-8, 0], duration: 400 });
        tl.add(poisonLine ? [poisonLine] : [], { opacity: [0, 1], duration: 300 }, "-=100");

        const d1 = arr1 ? createDrawable(arr1) : null;
        if (d1) tl.add([d1], { draw: ["0 0", "0 1"], duration: 450, ease: "outExpo" });

        tl.add(agentGroup ? [agentGroup] : [], { opacity: [0, 1], scale: [0.9, 1], duration: 400 }, "-=150");

        const d2 = arr2 ? createDrawable(arr2) : null;
        if (d2) tl.add([d2], { draw: ["0 0", "0 1"], duration: 450, ease: "outExpo" });

        tl.add(sysGroup ? [sysGroup] : [], { opacity: [0, 1], translateY: [8, 0], duration: 400 }, "-=150");

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
      aria-label="Document injection: poisoned doc line → AI agent → downstream system"
      role="img"
    >
      <defs>
        <marker id="di-arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6" fill="none" stroke="#ef4444" strokeWidth="1.2" />
        </marker>
        <marker id="di-arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6" fill="none" stroke="#3b82f6" strokeWidth="1.2" />
        </marker>
      </defs>

      {/* Document block */}
      <g id="di-doc" data-anime style={{ transformOrigin: "66px 100px" }}>
        <rect x="8" y="30" width="116" height="140" rx="8" fill="#1c1917" fillOpacity="0.7" stroke="#57534e" strokeWidth="1" />
        {/* doc lines */}
        <line x1="22" y1="55" x2="110" y2="55" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="68" x2="100" y2="68" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="81" x2="108" y2="81" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" />
        {/* poisoned line — highlighted red */}
        <rect x="18" y="93" width="96" height="14" rx="3" fill="#7f1d1d" fillOpacity="0.7" />
        <line x1="22" y1="100" x2="104" y2="100" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="113" x2="95" y2="113" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="126" x2="103" y2="126" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="139" x2="90" y2="139" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" />
        <text x="66" y="164" textAnchor="middle" fill="#a8a29e" fontSize="12">Vendor Invoice</text>
      </g>

      {/* Poison inject label */}
      <g id="di-poison" data-anime>
        <rect x="14" y="74" width="58" height="17" rx="3" fill="#991b1b" />
        <text x="43" y="86" textAnchor="middle" fill="#fecaca" fontSize="11" fontWeight="600">INJECT</text>
      </g>

      {/* Arrow 1 */}
      <path id="di-arr1" d="M125 100 L158 100" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#di-arrowR)" />

      {/* AI Agent node */}
      <g id="di-agent" data-anime style={{ transformOrigin: "196px 100px" }}>
        <rect x="160" y="66" width="72" height="68" rx="10" fill="#1e3a5f" fillOpacity="0.85" stroke="#60a5fa" strokeWidth="1.2" />
        {/* brain-ish circles */}
        <circle cx="196" cy="90" r="14" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="196" cy="90" r="7" fill="#1d4ed8" fillOpacity="0.6" />
        <text x="196" y="124" textAnchor="middle" fill="#93c5fd" fontSize="12">AI Agent</text>
      </g>

      {/* Arrow 2 */}
      <path id="di-arr2" d="M234 100 L264 100" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#di-arrowB)" />

      {/* System node */}
      <g id="di-sys" data-anime style={{ transformOrigin: "292px 100px" }}>
        <rect x="266" y="72" width="46" height="56" rx="8" fill="#0c1a2e" fillOpacity="0.9" stroke="#3b82f6" strokeWidth="1" />
        <rect x="274" y="82" width="30" height="16" rx="3" fill="#1d4ed8" fillOpacity="0.5" />
        <rect x="274" y="104" width="20" height="6" rx="2" fill="#3b82f6" fillOpacity="0.3" />
        <rect x="274" y="114" width="25" height="6" rx="2" fill="#3b82f6" fillOpacity="0.3" />
        <text x="289" y="141" textAnchor="middle" fill="#93c5fd" fontSize="12">System</text>
      </g>
    </svg>
  );
}
