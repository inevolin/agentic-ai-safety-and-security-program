"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { createDrawable, createTimeline } from "animejs";

export function RegistryPoisonDiagram() {
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
        const table = svg.querySelector<SVGGElement>("#rp-table");
        const poisonRow = svg.querySelector<SVGGElement>("#rp-poison");
        const arr1 = svg.querySelector<SVGPathElement>("#rp-arr1");
        const agentGroup = svg.querySelector<SVGGElement>("#rp-agent");
        const arr2 = svg.querySelector<SVGPathElement>("#rp-arr2");
        const outGroup = svg.querySelector<SVGGElement>("#rp-out");

        // set animated elements to opacity 0 just-in-time
        [table, poisonRow, agentGroup, outGroup].forEach((el) => {
          if (el) el.style.opacity = "0";
        });

        const tl = createTimeline({
          defaults: { ease: "outCubic" },
          autoplay: true,
        });

        tl.add(table ? [table] : [], { opacity: [0, 1], translateY: [-6, 0], duration: 450 });
        tl.add(poisonRow ? [poisonRow] : [], { opacity: [0, 1], duration: 300 }, "+=50");

        const d1 = arr1 ? createDrawable(arr1) : null;
        if (d1) tl.add([d1], { draw: ["0 0", "0 1"], duration: 450, ease: "outExpo" });

        tl.add(agentGroup ? [agentGroup] : [], { opacity: [0, 1], scale: [0.9, 1], duration: 400 }, "-=150");

        const d2 = arr2 ? createDrawable(arr2) : null;
        if (d2) tl.add([d2], { draw: ["0 0", "0 1"], duration: 450, ease: "outExpo" });

        tl.add(outGroup ? [outGroup] : [], { opacity: [0, 1], translateX: [10, 0], duration: 400 }, "-=150");

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
      viewBox="0 0 340 215"
      className="w-full h-auto"
      aria-label="Registry poisoning: one poisoned CSV row → AI trusts registry → attacker URL propagated"
      role="img"
    >
      <defs>
        <marker id="rp-arrowY" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
        </marker>
        <marker id="rp-arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6" fill="none" stroke="#ef4444" strokeWidth="1.2" />
        </marker>
      </defs>

      {/* Table (registry) */}
      <g id="rp-table" data-anime style={{ transformOrigin: "66px 100px" }}>
        {/* header */}
        <rect x="8" y="30" width="136" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <text x="18" y="42" fill="#64748b" fontSize="11" fontWeight="600">Vendor</text>
        <text x="72" y="42" fill="#64748b" fontSize="11" fontWeight="600">Portal</text>
        {/* row 1 */}
        <rect x="8" y="50" width="136" height="18" rx="0" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
        <text x="18" y="62" fill="#94a3b8" fontSize="10">Acme Inc</text>
        <text x="72" y="62" fill="#94a3b8" fontSize="10">acme.io</text>
        {/* row 2 */}
        <rect x="8" y="68" width="136" height="18" rx="0" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
        <text x="18" y="80" fill="#94a3b8" fontSize="10">Globex</text>
        <text x="72" y="80" fill="#94a3b8" fontSize="10">globex.com</text>
        {/* row 3 - clean */}
        <rect x="8" y="86" width="136" height="18" rx="0" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
        <text x="18" y="98" fill="#94a3b8" fontSize="10">Contoso</text>
        <text x="72" y="98" fill="#94a3b8" fontSize="10">contoso.com</text>
        {/* row 4 - clean */}
        <rect x="8" y="104" width="136" height="18" rx="0" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
        <text x="18" y="116" fill="#94a3b8" fontSize="10">Dunder</text>
        <text x="72" y="116" fill="#94a3b8" fontSize="10">dunder.co</text>
        <text x="76" y="155" textAnchor="middle" fill="#64748b" fontSize="11">IT Vendor Registry</text>
      </g>

      {/* Poisoned row overlay */}
      <g id="rp-poison" data-anime>
        <rect x="8" y="122" width="136" height="18" rx="0" fill="#7f1d1d" fillOpacity="0.7" stroke="#ef4444" strokeWidth="1" />
        <text x="18" y="134" fill="#fca5a5" fontSize="10">Apex Corp</text>
        <text x="72" y="134" fill="#ef4444" fontSize="10">evil.io ⚠</text>
      </g>

      {/* Arrow to agent */}
      <path id="rp-arr1" d="M146 100 L178 100" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#rp-arrowY)" />

      {/* AI Agent reads table */}
      <g id="rp-agent" data-anime style={{ transformOrigin: "216px 100px" }}>
        <rect x="180" y="66" width="72" height="68" rx="10" fill="#1e3a5f" fillOpacity="0.85" stroke="#60a5fa" strokeWidth="1.2" />
        <circle cx="216" cy="90" r="14" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="216" cy="90" r="7" fill="#1d4ed8" fillOpacity="0.6" />
        <text x="216" y="124" textAnchor="middle" fill="#93c5fd" fontSize="12">AI Agent</text>
      </g>

      {/* Arrow out — red (propagates attacker URL) */}
      <path id="rp-arr2" d="M254 100 L278 100" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#rp-arrowR)" />

      {/* Output — attacker URL */}
      <g id="rp-out" data-anime style={{ transformOrigin: "303px 100px" }}>
        <rect x="280" y="72" width="46" height="56" rx="8" fill="#450a0a" fillOpacity="0.85" stroke="#ef4444" strokeWidth="1" />
        <text x="303" y="94" textAnchor="middle" fill="#fca5a5" fontSize="10">evil.io</text>
        <text x="303" y="112" textAnchor="middle" fill="#ef4444" fontSize="16">⚠</text>
        <text x="303" y="141" textAnchor="middle" fill="#fca5a5" fontSize="11">Propagated</text>
      </g>
    </svg>
  );
}
