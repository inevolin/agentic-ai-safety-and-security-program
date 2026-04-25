"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { animate, createTimeline } from "animejs";

/*
  Radial "blast-radius" diagram
  ─────────────────────────────
  - Center: compromised AI Agent (pulsing red ring)
  - Inbound  (left/top-left/bottom-left arc): 6 attack sources → agent
  - Outbound (right/top-right/bottom-right arc): 4 damage outputs ← agent
  - viewBox 400×400, center (200,200)
*/

const CX = 320;
const CY = 320;
const AGENT_R = 54;
const INBOUND_R  = 185;
const OUTBOUND_R = 195;
const NODE_R  = 32;
const LABEL_R = 244; // inbound label radius (185+32+27)

type IconKey =
  | "git" | "doc" | "ticket" | "registry" | "gear" | "chat"
  | "link" | "dollar" | "rocket" | "upload" | "users" | "bug";

const INBOUND: { label: string; icon: IconKey; angle: number }[] = [
  { label: "Git Commits",   icon: "git",      angle: 122 },
  { label: "Docs",          icon: "doc",      angle: 146 },
  { label: "Help Tickets",  icon: "ticket",   angle: 170 },
  { label: "IT Registries", icon: "registry", angle: 194 },
  { label: "CI/CD Logs",    icon: "gear",     angle: 218 },
  { label: "Slack",         icon: "chat",     angle: 242 },
];

const OUTBOUND: { label: string; icon: IconKey; angle: number }[] = [
  { label: "Malicious URLs",      icon: "link",   angle: 290 },
  { label: "Trojans",             icon: "dollar", angle: 317 },
  { label: "Social\nEngineering", icon: "users",  angle: 344 },
  { label: "Prod Deploy\nPoison", icon: "rocket", angle: 11  },
  { label: "AI Worms",            icon: "bug",    angle: 38  },
  { label: "Data Leaks",          icon: "upload", angle: 65  },
];

// Lucide-style stroke paths on a 24x24 grid. Rendered centered on a node.
function IconGlyph({ name, cx, cy, color }: { name: IconKey; cx: number; cy: number; color: string }) {
  const size = 24;
  const tx = cx - size / 2;
  const ty = cy - size / 2;
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <g transform={`translate(${tx} ${ty})`} {...common}>
      {name === "git" && (
        <>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </>
      )}
      {name === "doc" && (
        <>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="14 3 14 9 20 9" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="14" y2="17" />
        </>
      )}
      {name === "ticket" && (
        <>
          <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.5a1.5 1.5 0 0 0 0 3V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.5a1.5 1.5 0 0 0 0-3z" />
          <line x1="9" y1="9" x2="9" y2="15" strokeDasharray="2 2" />
        </>
      )}
      {name === "registry" && (
        <>
          <ellipse cx="12" cy="5.5" rx="8" ry="2.5" />
          <path d="M4 5.5v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" />
          <path d="M4 11.5v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" />
        </>
      )}
      {name === "gear" && (
        <>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.09a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
      {name === "chat" && (
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      )}
      {name === "link" && (
        <>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </>
      )}
      {name === "dollar" && (
        <>
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </>
      )}
      {name === "rocket" && (
        <>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </>
      )}
      {name === "upload" && (
        <>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </>
      )}
      {name === "users" && (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="3.2" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      )}
      {name === "bug" && (
        <>
          <rect x="8" y="7" width="8" height="13" rx="4" />
          <path d="M12 20v-8" />
          <path d="M8 10L5 8M16 10l3-2M8 14H4M16 14h4M8 18l-3 2M16 18l3 2" />
          <path d="M10 6l-1-2M14 6l1-2" />
        </>
      )}
    </g>
  );
}

function toXY(angleDeg: number, radius: number, cx = CX, cy = CY) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
}

function labelAnchor(angleDeg: number): "start" | "middle" | "end" {
  const cos = Math.cos((angleDeg * Math.PI) / 180);
  if (cos > 0.35) return "start";
  if (cos < -0.35) return "end";
  return "middle";
}

export function AttackFlowDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const revealAll = () => {
      svg.querySelectorAll("[data-anime]").forEach((el) => {
        (el as SVGElement).style.opacity = "1";
      });
    };

    if (reduced) {
      revealAll();
      return;
    }

    try {
      // Set animated groups to opacity 0 just-in-time
      svg.querySelectorAll("[data-anime]").forEach((el) => {
        (el as SVGElement).style.opacity = "0";
      });

      const tl = createTimeline({ defaults: { ease: "outCubic" } });

      // 1. Agent node appears first
      const agentGroup = svg.querySelector<SVGGElement>("#br-agent");
      tl.add(agentGroup ? [agentGroup] : [], { opacity: [0, 1], scale: [0.85, 1], duration: 250 });

      // 2. Inbound: node + its arrow paired, cascading
      INBOUND.forEach((_, i) => {
        const nodeEl = svg.querySelector<SVGGElement>(`#br-in-${i}`);
        const arrEl = svg.querySelector<SVGLineElement>(`#br-inarr-${i}`);
        if (nodeEl) tl.add([nodeEl], { opacity: [0, 1], duration: 160 }, i === 0 ? "+=50" : "-=60");
        if (arrEl) tl.add([arrEl], { opacity: [0, 1], duration: 140 }, "-=120");
      });

      // 3. Outbound: node + its arrow paired, cascading
      OUTBOUND.forEach((_, i) => {
        const nodeEl = svg.querySelector<SVGGElement>(`#br-out-${i}`);
        const arrEl = svg.querySelector<SVGLineElement>(`#br-outarr-${i}`);
        if (nodeEl) tl.add([nodeEl], { opacity: [0, 1], duration: 160 }, i === 0 ? "+=40" : "-=60");
        if (arrEl) tl.add([arrEl], { opacity: [0, 1], duration: 140 }, "-=120");
      });

      // 4. Pulse ring loops forever
      const pulse = svg.querySelector<SVGCircleElement>("#br-pulse");
      if (pulse) {
        animate(pulse, {
          strokeOpacity: [0.7, 0, 0.7],
          r: [AGENT_R + 2, AGENT_R + 14, AGENT_R + 2],
          duration: 2400,
          loop: true,
          ease: "inOutSine",
          delay: 1200,
        });
      }

      // 5. Inbound arrows: march dashes toward agent (negative offset = flow in)
      INBOUND.forEach((_, i) => {
        const el = svg.querySelector<SVGLineElement>(`#br-inarr-${i}`);
        if (!el) return;
        animate(el, {
          strokeDashoffset: [0, -14],
          duration: 900,
          loop: true,
          ease: "linear",
          delay: 1400 + i * 120,
        });
      });

      // 6. Outbound arrows: pulse opacity + stroke width for a "shooting" feel
      OUTBOUND.forEach((_, i) => {
        const el = svg.querySelector<SVGLineElement>(`#br-outarr-${i}`);
        if (!el) return;
        el.setAttribute("stroke-dasharray", "10 6");
        animate(el, {
          strokeDashoffset: [0, -32],
          strokeOpacity: [0.5, 1, 0.5],
          duration: 1600,
          loop: true,
          ease: "linear",
          delay: 1600 + i * 180,
        });
      });

      // 7. Source nodes gentle breathing
      INBOUND.forEach((_, i) => {
        const el = svg.querySelector<SVGGElement>(`#br-in-${i} circle`);
        if (!el) return;
        animate(el, {
          strokeOpacity: [0.35, 0.9, 0.35],
          duration: 2600,
          loop: true,
          ease: "inOutSine",
          delay: 1800 + i * 150,
        });
      });

      OUTBOUND.forEach((_, i) => {
        const el = svg.querySelector<SVGGElement>(`#br-out-${i} circle`);
        if (!el) return;
        animate(el, {
          strokeOpacity: [0.4, 1, 0.4],
          duration: 2200,
          loop: true,
          ease: "inOutSine",
          delay: 2000 + i * 180,
        });
      });

      return () => { tl.revert(); };
    } catch {
      revealAll();
    }
  }, [reduced]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg
        ref={ref}
        viewBox="0 0 640 640"
        className="w-full h-auto"
        aria-label="Blast-radius diagram: many attack sources converge on a compromised AI agent, which propagates damage outward"
        role="img"
      >
        <defs>
          {/* Red arrowhead for inbound */}
          <marker id="br-arr-in" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6" fill="none" stroke="#ef4444" strokeWidth="1.2" />
          </marker>
          {/* Amber arrowhead for outbound */}
          <marker id="br-arr-out" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
          </marker>
          {/* Radial gradient for agent */}
          <radialGradient id="br-agent-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#991b1b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.75" />
          </radialGradient>
        </defs>

        {/* ── Inbound arrows (attack sources → agent) ─────────── */}
        {INBOUND.map((src, i) => {
          const fromPt = toXY(src.angle, INBOUND_R - NODE_R - 4);
          const toPt   = toXY(src.angle, AGENT_R + 10);
          return (
            <line
              key={`inarr-${i}`}
              id={`br-inarr-${i}`}
              data-anime
              x1={fromPt.x} y1={fromPt.y}
              x2={toPt.x}   y2={toPt.y}
              stroke="#ef4444"
              strokeWidth="1.4"
              strokeDasharray="4 3"
              markerEnd="url(#br-arr-in)"
            />
          );
        })}

        {/* ── Outbound arrows (agent → damage) ─────────────────── */}
        {OUTBOUND.map((dst, i) => {
          const fromPt = toXY(dst.angle, AGENT_R + 10);
          const toPt   = toXY(dst.angle, OUTBOUND_R - NODE_R - 4);
          return (
            <line
              key={`outarr-${i}`}
              id={`br-outarr-${i}`}
              data-anime
              x1={fromPt.x} y1={fromPt.y}
              x2={toPt.x}   y2={toPt.y}
              stroke="#f59e0b"
              strokeWidth="1.6"
              markerEnd="url(#br-arr-out)"
            />
          );
        })}

        {/* ── Pulsing ring ─────────────────────────────────────── */}
        <circle
          id="br-pulse"
          cx={CX}
          cy={CY}
          r={AGENT_R + 2}
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeOpacity="0"
        />

        {/* ── Agent center node ────────────────────────────────── */}
        <g id="br-agent" data-anime style={{ transformOrigin: `${CX}px ${CY}px` }}>
          <circle cx={CX} cy={CY} r={AGENT_R} fill="url(#br-agent-grad)" stroke="#ef4444" strokeWidth="2" />
          <text x={CX} y={CY - 10} textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="600" letterSpacing="0.8">AI AGENT</text>
          <text x={CX} y={CY + 8}  textAnchor="middle" fill="#fff"    fontSize="15" fontWeight="700">Integration</text>
          <text x={CX} y={CY + 25} textAnchor="middle" fill="#fca5a5" fontSize="10">compromised</text>
        </g>

        {/* ── Inbound source icons ─────────────────────────────── */}
        {INBOUND.map((src, i) => {
          const pt  = toXY(src.angle, INBOUND_R);
          const lpt = toXY(src.angle, LABEL_R);
          const anchor = labelAnchor(src.angle);
          return (
            <g key={`in-${i}`} id={`br-in-${i}`} data-anime>
              <circle className="diag-node-in" cx={pt.x} cy={pt.y} r={NODE_R} fillOpacity="0.85" stroke="#ef4444" strokeWidth="1.4" strokeOpacity="0.7" />
              <IconGlyph name={src.icon} cx={pt.x} cy={pt.y} color="#ef4444" />
              <text className="diag-label-in" x={lpt.x} y={lpt.y} textAnchor={anchor} dominantBaseline="middle" fontSize="13" fontWeight="500">{src.label}</text>
            </g>
          );
        })}

        {/* ── Outbound damage icons ────────────────────────────── */}
        {OUTBOUND.map((dst, i) => {
          const pt     = toXY(dst.angle, OUTBOUND_R);
          const lpt    = toXY(dst.angle, OUTBOUND_R + NODE_R + 20);
          const anchor = labelAnchor(dst.angle);
          const lines  = dst.label.split("\n");
          const lineH  = 14;
          const topOffset = -((lines.length - 1) * lineH) / 2;
          return (
            <g key={`out-${i}`} id={`br-out-${i}`} data-anime>
              <circle className="diag-node-out" cx={pt.x} cy={pt.y} r={NODE_R} fillOpacity="0.85" stroke="#f59e0b" strokeWidth="1.4" strokeOpacity="0.8" />
              <IconGlyph name={dst.icon} cx={pt.x} cy={pt.y} color="#f59e0b" />
              {lines.map((line, li) => (
                <text className="diag-label-out" key={li} x={lpt.x} y={lpt.y + topOffset + li * lineH} textAnchor={anchor} dominantBaseline="middle" fontSize="13" fontWeight="500">{line}</text>
              ))}
            </g>
          );
        })}

        {/* ── Legend labels ────────────────────────────────────── */}
        <text x="20"  y="28" textAnchor="start"  fill="#ef4444" fontSize="12" fontWeight="600" opacity="0.85">ATTACK SOURCES →</text>
        <text x="320" y="28" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="600" opacity="0.9" letterSpacing="1">ORGANISATION</text>
        <text x="620" y="28" textAnchor="end"    fill="#f59e0b" fontSize="12" fontWeight="600" opacity="0.85">← DOWNSTREAM DAMAGE</text>
      </svg>
    </div>
  );
}
