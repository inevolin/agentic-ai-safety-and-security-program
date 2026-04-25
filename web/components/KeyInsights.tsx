"use client";
import { Reveal } from "@/components/Reveal";
import { AttackRef } from "@/components/AttackRef";
import { useTheme } from "@/components/ThemeProvider";

type Accent = {
  bar: string;
  iconBg: string;
  iconBorder: string;
  iconText: string;
  label: string;
  glow: string;
  glowHover: string;
  watermark: string;
};

const INSIGHTS = [
  {
    number: "01",
    category: "ATTACK VECTOR",
    headline: "No hacking required",
    body: "Attackers submit through your public surfaces — a vendor registration form, a support ticket, a pull request. Your AI treats everything it reads as potentially authoritative and carries it into production without questioning the source.",
    accent: {
      bar: "#ef4444",
      iconBg: "rgba(127,29,29,0.35)",
      iconBorder: "rgba(239,68,68,0.3)",
      iconText: "#f87171",
      label: "rgba(248,113,113,0.6)",
      glow: "rgba(239,68,68,0.12)",
      glowHover: "rgba(239,68,68,0.22)",
      watermark: "rgba(239,68,68,0.04)",
    } satisfies Accent,
    accentLight: {
      bar: "#ef4444",
      iconBg: "rgba(254,226,226,0.85)",
      iconBorder: "rgba(239,68,68,0.35)",
      iconText: "#dc2626",
      label: "#b91c1c",
      glow: "rgba(239,68,68,0.08)",
      glowHover: "rgba(239,68,68,0.14)",
      watermark: "rgba(239,68,68,0.06)",
    } satisfies Accent,
    attackIds: ["SP1", "SURV1", "SL1", "ITS1"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    number: "02",
    category: "ARCHITECTURE",
    headline: "Read ≠ Write",
    body: "Letting the same agent read untrusted public data and immediately write to production is the root cause of most AI agent compromises. A single human approval gate between read and write eliminates the entire class.",
    accent: {
      bar: "#f59e0b",
      iconBg: "rgba(120,53,15,0.35)",
      iconBorder: "rgba(245,158,11,0.3)",
      iconText: "#fbbf24",
      label: "rgba(251,191,36,0.6)",
      glow: "rgba(245,158,11,0.10)",
      glowHover: "rgba(245,158,11,0.20)",
      watermark: "rgba(245,158,11,0.04)",
    } satisfies Accent,
    accentLight: {
      bar: "#f59e0b",
      iconBg: "rgba(254,243,199,0.85)",
      iconBorder: "rgba(245,158,11,0.4)",
      iconText: "#d97706",
      label: "#b45309",
      glow: "rgba(245,158,11,0.08)",
      glowHover: "rgba(245,158,11,0.14)",
      watermark: "rgba(245,158,11,0.06)",
    } satisfies Accent,
    attackIds: ["MAA1", "CI1", "EL1", "CONF1"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    number: "03",
    category: "INPUT VALIDATION",
    headline: "Every URL is user input",
    body: "URLs in git commits, CI logs, config files, and vendor registries were written by someone outside your org. Source authority — internal repo, approved catalog, official log — does not make contents safe.",
    accent: {
      bar: "#06b6d4",
      iconBg: "rgba(8,51,68,0.5)",
      iconBorder: "rgba(6,182,212,0.3)",
      iconText: "#22d3ee",
      label: "rgba(34,211,238,0.6)",
      glow: "rgba(6,182,212,0.10)",
      glowHover: "rgba(6,182,212,0.20)",
      watermark: "rgba(6,182,212,0.04)",
    } satisfies Accent,
    accentLight: {
      bar: "#06b6d4",
      iconBg: "rgba(207,250,254,0.85)",
      iconBorder: "rgba(6,182,212,0.4)",
      iconText: "#0891b2",
      label: "#0e7490",
      glow: "rgba(6,182,212,0.08)",
      glowHover: "rgba(6,182,212,0.14)",
      watermark: "rgba(6,182,212,0.06)",
    } satisfies Accent,
    attackIds: ["GIT1", "CI1", "WIKI1", "SP1"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        <line x1="18" y1="6" x2="18.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
];

export function KeyInsights() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {INSIGHTS.map((insight, i) => (
        <Reveal key={insight.number} delay={i * 120} direction="up" distance={32}>
          <InsightCard insight={insight} />
        </Reveal>
      ))}
    </div>
  );
}

function InsightCard({ insight }: { insight: typeof INSIGHTS[number] }) {
  const { theme } = useTheme();
  const accent = theme === "light" ? insight.accentLight : insight.accent;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border transition-all duration-300 group"
      style={{
        background: "var(--t-surface)",
        borderColor: "var(--t-border)",
        backdropFilter: "blur(12px)",
        boxShadow: `0 0 0 0 transparent, 0 4px 24px ${accent.glow}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 0 1px ${accent.bar}44, 0 8px 40px ${accent.glowHover}`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${accent.bar}33`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 0 0 transparent, 0 4px 24px ${accent.glow}`;
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--t-border)";
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${accent.bar}, ${accent.bar}00)` }}
      />

      {/* Watermark number */}
      <div
        className="absolute right-3 top-0 font-black leading-none select-none pointer-events-none"
        style={{
          fontSize: "7rem",
          color: accent.watermark,
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        {insight.number}
      </div>

      <div className="relative p-7 pt-8 flex flex-col h-full">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: accent.iconBg,
            border: `1px solid ${accent.iconBorder}`,
            color: accent.iconText,
            boxShadow: `0 0 20px ${accent.glow}`,
          }}
        >
          {insight.icon}
        </div>

        {/* Category */}
        <p
          className="font-mono text-xs tracking-widest uppercase mb-2"
          style={{ color: accent.label }}
        >
          {insight.category}
        </p>

        {/* Headline */}
        <h3 className="text-lg font-bold text-white mb-3 leading-snug">
          {insight.headline}
        </h3>

        {/* Body */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {insight.body}
        </p>

        {/* Attack ID badges */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {insight.attackIds.map((id) => (
            <AttackRef key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
