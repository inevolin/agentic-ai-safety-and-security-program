import React from "react";

function ClaudeMark({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      {/* Simplified Claude / Anthropic radial mark */}
      <circle cx="10" cy="10" r="3" fill="#D97559" />
      <line x1="10" y1="1" x2="10" y2="4.5"  stroke="#D97559" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="15.5" x2="10" y2="19" stroke="#D97559" strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="10" x2="4.5" y2="10"  stroke="#D97559" strokeWidth="2" strokeLinecap="round" />
      <line x1="15.5" y1="10" x2="19" y2="10" stroke="#D97559" strokeWidth="2" strokeLinecap="round" />
      <line x1="3.2" y1="3.2" x2="5.7" y2="5.7"   stroke="#D97559" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="14.3" y1="14.3" x2="16.8" y2="16.8" stroke="#D97559" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="16.8" y1="3.2" x2="14.3" y2="5.7"  stroke="#D97559" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="5.7" y1="14.3" x2="3.2" y2="16.8"  stroke="#D97559" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Inline pill: "Built at Anthropic · Claude Opus 4.7 Hackathon" */
export function ClaudeSponsorPill({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 ${className}`}
    >
      <ClaudeMark size={13} />
      <span>
        Built at Anthropic&rsquo;s{" "}
        <span className="text-[#D97559] font-semibold">Claude Opus 4.7</span>{" "}
        Hackathon
      </span>
    </span>
  );
}

/** Larger badge for hero / footer use */
export function ClaudeSponsorBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-[#D97559]/10 border border-[#D97559]/30 rounded-full px-3 py-1 text-xs font-medium text-[#D97559] ${className}`}
    >
      <ClaudeMark size={14} />
      Built at Anthropic&rsquo;s Claude Opus 4.7 Hackathon
    </span>
  );
}
