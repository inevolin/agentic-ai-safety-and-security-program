"use client";
import { Reveal } from "@/components/Reveal";

/* ─── Types ────────────────────────────────────────────────── */
type Outcome = "milestone" | "attack-success" | "defense-held" | "partial";

interface Milestone {
  date: string;
  title: string;
  body: string;
  outcome: Outcome;
  commit?: string;
  youtubeId?: string;
}

const REPO_BASE = "https://github.com/inevolin/agentic-ai-safety-and-security-program";

/* ─── Data ──────────────────────────────────────────────────── */
const MILESTONES: Milestone[] = [
  {
    date: "2026-04-21",
    title: "Corpus buildout",
    body: "Built a research library of 1,205 sources covering every known way AI systems get tricked or attacked — academic papers, industry reports, security blogs, and a public exploit database — organized into ten clear categories.",
    outcome: "milestone",
    commit: "3da1a40",
  },
  {
    date: "2026-04-22",
    title: "Red-team CTF harness",
    body: "Built a controlled testing environment that lets us safely run attacks against Claude and grade whether they succeeded — without ever touching a real production system.",
    outcome: "milestone",
    commit: "f8d8e62",
  },
  {
    date: "2026-04-22",
    title: "Haiku: 12 / 12 compromised",
    body: "Tested twelve different attacks against the smallest Claude model. Every single one succeeded. The AI willingly inserted attacker-supplied phishing links into summaries, internal wiki pages, and follow-up emails — across channels as ordinary as a help-desk ticket, an internal Slack post, or a git commit message.",
    outcome: "attack-success",
    commit: "a03c1db",
  },
  {
    date: "2026-04-22",
    title: "LLM Council framework",
    body: "Tried to automate attack discovery with a panel of smaller AI models that critique and improve each other's ideas. The system worked end-to-end, but hand-crafted attacks ended up finding real weaknesses faster.",
    outcome: "partial",
    commit: "894d326",
  },
  {
    date: "2026-04-22",
    title: "Sonnet holds the line",
    body: "Moved on to a stronger Claude model. Our first wave of attacks failed — Sonnet noticed the suspicious patterns we'd planted (mismatched web addresses, oddly-formatted instructions, overly long inputs) and refused to act on them.",
    outcome: "defense-held",
    commit: "8979934",
  },
  {
    date: "2026-04-22",
    title: "First Sonnet bypass — split across documents",
    body: "First successful attack against Sonnet. We split malicious instructions across three innocent-looking documents — none suspicious on its own. Together they pointed Sonnet to a fake vendor portal, and Sonnet recommended it confidently.",
    outcome: "attack-success",
    commit: "c23fe6f",
  },
  {
    date: "2026-04-22",
    title: "Second Sonnet bypass — conversation only",
    body: "Second successful attack — no malicious documents at all. In a casual conversation, a fake web address was mentioned as if it were common knowledge. A few sentences later, Sonnet repeated it as a real instruction in its own answer.",
    outcome: "attack-success",
    commit: "764787f",
  },
  {
    date: "2026-04-23",
    title: "Third Sonnet bypass — hidden metadata leak",
    body: "Third successful attack. We discovered Sonnet was reading hidden metadata from connected tools and using it as a trust signal. By renaming a folder to look more legitimate, an attack that previously failed suddenly worked.",
    outcome: "attack-success",
    commit: "d815388",
  },
  {
    date: "2026-04-23",
    title: "Multi-agent attack — one AI poisons another",
    body: "One AI helping another fall into a trap. A weaker AI assistant was tricked into adding fake information to an internal \"approved vendors\" list. A stronger AI later read that list and trusted it completely — the attacker never spoke to the stronger AI directly.",
    outcome: "attack-success",
    commit: "b5fb993",
  },
  {
    date: "2026-04-23",
    title: "9 more Sonnet bypasses",
    body: "Nine more successful attacks against Sonnet, each one delivered through an everyday business channel: a help-desk ticket, a customer survey, an internal wiki page, a configuration file, a deployment log, a code-change description, an error log, and a Slack message. Total successful attacks on Sonnet: 16.",
    outcome: "attack-success",
    commit: "d676af4",
  },
  {
    date: "2026-04-23",
    title: "Opus catches the multi-step trick",
    body: "Tested the most capable Claude model. The same multi-step trick that fooled Sonnet didn't work here — Opus noticed the suspicious link looked too similar to an internal product name, named the attack technique out loud, and refused to act.",
    outcome: "defense-held",
    commit: "1467652",
  },
  {
    date: "2026-04-23",
    title: "Domain rotation defeats Opus",
    body: "Even Opus has limits. By swapping in a different fake web address that didn't resemble any internal name, the same attack slipped through. Opus accepted the link as legitimate and even erased an earlier safety warning from its own draft.",
    outcome: "attack-success",
    commit: "12bce7c",
  },
  {
    date: "2026-04-23",
    title: "Defense playbook — 10 building blocks",
    body: "Turned every attack we ran into a clear set of defenses: an executive risk register, an organizational policy template, ten practical building blocks any team can use to harden their AI agents, and 17 plain-language attack write-ups.",
    outcome: "milestone",
    commit: "9a43de8",
  },
  {
    date: "2026-04-23",
    title: "Training platform launched",
    body: "Built this website. Seven lessons covering the full landscape of AI agent attacks and defenses, a quiz after each lesson, a timed final exam, and a verifiable certificate when you pass.",
    outcome: "milestone",
    commit: "be64ba7",
  },
  {
    date: "2026-04-24",
    title: "Polish and final launch",
    body: "Final pass: clearer wording across the site, real example attacks linked from the homepage, an extra lesson on protective AI features, and a sharper title that says exactly who this course is for.",
    outcome: "milestone",
    commit: "1123e81",
  },
  {
    date: "2026-04-26",
    title: "Hackathon submission",
    body: "Submitted to the Cerebral Valley × Anthropic hackathon. Walkthrough video covering the corpus, red-team harness, confirmed bypasses against Haiku/Sonnet/Opus, and the training platform built on top of all of it.",
    outcome: "milestone",
    youtubeId: "X1Zh8RTZdDY",
  },
];

/* ─── Outcome style maps ────────────────────────────────────── */
const OUTCOME_LABEL: Record<Outcome, string> = {
  milestone: "Milestone",
  "attack-success": "Attack succeeded",
  "defense-held": "Defense held",
  partial: "Partial",
};

const TONE_CLASS: Record<Outcome, string> = {
  milestone: "history-tone--milestone",
  "attack-success": "history-tone--attack-success",
  "defense-held": "history-tone--defense-held",
  partial: "history-tone--partial",
};

const NODE_RING_CLASS: Record<Outcome, string> = {
  milestone: "history-node--milestone",
  "attack-success": "history-node--attack-success",
  "defense-held": "history-node--defense-held",
  partial: "history-node--partial",
};

const NODE_FILL_CLASS: Record<Outcome, string> = {
  milestone: "history-node-fill--milestone",
  "attack-success": "history-node-fill--attack-success",
  "defense-held": "history-node-fill--defense-held",
  partial: "history-node-fill--partial",
};

const NODE_COLOR: Record<Outcome, string> = {
  milestone: "#6366f1",
  "attack-success": "#f43f5e",
  "defense-held": "#10b981",
  partial: "#f59e0b",
};

const NODE_SIZE: Record<Outcome, number> = {
  milestone: 12,
  "attack-success": 14,
  "defense-held": 14,
  partial: 12,
};

/* ─── Spine — static gradient div, always visible ──────────── */
function Spine() {
  return (
    <div
      aria-hidden="true"
      className="history-spine absolute top-0 bottom-0 left-5 md:left-1/2 -translate-x-1/2 w-1 pointer-events-none rounded-full"
    />
  );
}

/* ─── Date + commit pair ─────────────────────────────────────── */
function DateCommit({ m, align = "left" }: { m: Milestone; align?: "left" | "right" }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${align === "right" ? "flex-row-reverse" : ""}`}>
      <time className="text-sm font-mono text-slate-400 tracking-wide whitespace-nowrap tabular-nums">
        {m.date}
      </time>
      {m.commit && (
        <a
          href={`${REPO_BASE}/commit/${m.commit}`}
          target="_blank"
          rel="noopener noreferrer"
          className="commit-badge"
          title={`View commit ${m.commit} on GitHub`}
        >
          {m.commit}
        </a>
      )}
    </span>
  );
}

/* ─── Legend ─────────────────────────────────────────────────── */
function Legend() {
  const outcomes: Outcome[] = ["milestone", "attack-success", "defense-held", "partial"];
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {outcomes.map((outcome) => (
        <span
          key={outcome}
          className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium border ${TONE_CLASS[outcome]}`}
        >
          <span
            className="inline-block w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: NODE_COLOR[outcome] }}
          />
          {OUTCOME_LABEL[outcome]}
        </span>
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function HistoryTimeline() {
  return (
    <div className="section-content py-4">
      <Legend />

      {/* Outer container with relative positioning for the spine */}
      <div className="relative">
        <Spine />

        <div className="flex flex-col gap-0">
          {MILESTONES.map((m, i) => {
            const isLeft = i % 2 === 0;
            const nodeSize = NODE_SIZE[m.outcome];
            const ringClass = NODE_RING_CLASS[m.outcome];
            const fillClass = NODE_FILL_CLASS[m.outcome];

            return (
              <div
                key={i}
                className="relative flex items-start"
                style={{ minHeight: "6rem" }}
              >
                {/* Node on the spine — desktop */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10 rounded-full ${ringClass} ${fillClass}`}
                  style={{
                    width: nodeSize,
                    height: nodeSize,
                    backgroundColor: NODE_COLOR[m.outcome],
                    top: "2rem",
                  }}
                  aria-hidden="true"
                />

                {/* Node on the spine — mobile */}
                <div
                  className={`md:hidden absolute flex items-center justify-center z-10 rounded-full ${ringClass} ${fillClass}`}
                  style={{
                    width: nodeSize,
                    height: nodeSize,
                    backgroundColor: NODE_COLOR[m.outcome],
                    left: "1.25rem",
                    top: "1.75rem",
                    transform: "translateX(-50%)",
                  }}
                  aria-hidden="true"
                />

                {/* Desktop: two-column layout */}
                <div className="hidden md:grid md:grid-cols-2 w-full gap-8 py-6">
                  {isLeft ? (
                    <>
                      {/* Card on the left */}
                      <Reveal direction="right" delay={i * 40} className="flex justify-end pr-8">
                        <MilestoneCard m={m} />
                      </Reveal>
                      {/* Date + commit on the right */}
                      <div className="flex items-start pl-8 pt-1">
                        <DateCommit m={m} align="left" />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Date + commit on the left */}
                      <div className="flex items-start justify-end pr-8 pt-1">
                        <DateCommit m={m} align="right" />
                      </div>
                      {/* Card on the right */}
                      <Reveal direction="left" delay={i * 40} className="flex justify-start pl-8">
                        <MilestoneCard m={m} />
                      </Reveal>
                    </>
                  )}
                </div>

                {/* Mobile: single-column, left-shifted */}
                <div className="md:hidden flex w-full py-5 pl-12 pr-0">
                  <Reveal direction="up" delay={i * 30} className="w-full">
                    <MilestoneCard m={m} mobile />
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Card sub-component ─────────────────────────────────────── */
function MilestoneCard({ m, mobile = false }: { m: Milestone; mobile?: boolean }) {
  return (
    <div
      className={`glass rounded-2xl border p-5 sm:p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-black/30 hover:-translate-y-0.5 ${
        mobile ? "w-full" : "max-w-md w-full"
      }`}
    >
      {mobile && (
        <div className="mb-2">
          <DateCommit m={m} align="left" />
        </div>
      )}
      <div className="flex items-start gap-2 flex-wrap mb-3">
        <span
          className={`inline-flex items-center text-[11px] uppercase tracking-wider font-mono px-2 py-0.5 rounded-full font-medium border ${TONE_CLASS[m.outcome]}`}
        >
          {OUTCOME_LABEL[m.outcome]}
        </span>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-2 leading-snug">
        {m.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {m.body}
      </p>
      {m.youtubeId && (
        <div className="mt-4 relative rounded-xl overflow-hidden border border-slate-700/60 bg-black" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${m.youtubeId}`}
            title={m.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
