import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { HistoryTimeline } from "@/components/HistoryTimeline";

export const metadata: Metadata = {
  title: "About — AI Safety Cert",
  description:
    "Why AI safety is paramount right now, and the full experiment log behind this course — 16 confirmed bypasses, every milestone, every failure.",
};

const PILLARS: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "Agents act on the world",
    body:
      "AI assistants now read inboxes, write to wikis, push to repos, and call APIs on your behalf. A single poisoned input no longer just produces a wrong answer — it executes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-cyan-400">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Untrusted input is everywhere",
    body:
      "Every CSV row, Slack message, error log, git commit, calendar invite, ticket field, and config file is a potential attacker channel. The attack surface is the whole web of data your agent reads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-danger-400">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Even Opus gets tricked",
    body:
      "5 Opus bypasses with no jailbreaking — no DAN, no prompt-injection prefixes, no obfuscation. Just ordinary-looking enterprise data shaped to land inside the model's trust boundary.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-warn-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    title: "Defenders are 1–2 years behind",
    body:
      "Most teams ship agentic features without explicit trust tiers, write-gates, or output review. The gap between deployed agents and deployed defenses is the single biggest near-term security risk.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-emerald-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-32 overflow-x-hidden">
      {/* ── About hero ─────────────────────────────────────────── */}
      <section className="relative section-content py-16 text-center">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-brand-700/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-cyan-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <Reveal>
          <div className="inline-flex items-center gap-2 bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            About this project
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
            We fooled AI sixteen times.
            <br className="hidden sm:block" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-400 to-danger-400">
              Here&apos;s the full story.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">AI Safety and Security is paramount.</span> AI agents are taking actions inside organizations every day — summarizing emails, processing documents, opening tickets, reacting to error logs. We documented <span className="text-white font-medium">16 successful attacks on Claude Sonnet and 5 on Opus</span>, all using ordinary business inputs. Each one comes with a practical safeguard.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Every finding became a course lesson. This page tells the whole story — what we tried, what worked against the AI, and what to do about it.
          </p>
        </Reveal>
      </section>

      {/* ── Why AI safety is paramount ─────────────────────────── */}
      <section className="section-content py-16 sm:py-20">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              Why now
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              AI safety is no longer optional
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The frontier moved from chatbots to autonomous agents in less than two years. The threat model came with it.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="glass rounded-2xl border p-6 h-full hover:-translate-y-0.5 transition-transform duration-300 shadow-xl shadow-black/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl border border-danger-800/40 bg-danger-950/20">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <span className="text-danger-300 font-mono text-xs uppercase tracking-wider mr-2">Bottom line</span>
              If your team ships an agent that reads any input it didn&apos;t hand-write, it has a prompt-injection attack surface. The question is whether you&apos;ve mapped it before someone else does.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Who should take this course ───────────────────────── */}
      <section id="audience" className="section-content py-16 sm:py-20">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-800/50 bg-emerald-950/30 text-emerald-400 text-xs font-mono tracking-widest uppercase">
              Audience
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Who should take this course
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              This is a certification-level course — 7 modules of audio-narrated lessons, 45-question exam, 80% pass mark, roughly a 3–4 hour commitment end-to-end. It rewards people who own or defend AI-adjacent systems.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Best fit */}
          <Reveal delay={80}>
            <div className="glass rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 text-xs font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Best fit
                </span>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  { who: "AI app / integration engineers", why: "You ship the agentic systems this course defends." },
                  { who: "AppSec, red teamers & pentesters", why: "AI is now in scope — this is the attack surface map." },
                  { who: "Security architects & platform/SRE leads", why: "You approve agent rollouts and define trust boundaries." },
                  { who: "Tech-literate CISOs, GRC & IT admins", why: "You own the AI security policy and vendor vetting." },
                  { who: "MLOps/DevOps wiring agents to Slack, Jira, Notion or CI", why: "Every integration you build is an input channel." },
                ].map((item) => (
                  <li key={item.who} className="text-sm">
                    <span className="text-white font-medium">{item.who}</span>
                    <span className="text-slate-400"> — {item.why}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Marginal fit */}
          <Reveal delay={160}>
            <div className="glass rounded-2xl border border-warn-800/40 bg-warn-950/20 p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warn-950/50 border border-warn-800/50 text-warn-400 text-xs font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  Marginal fit
                </span>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  { who: "ML researchers focused on training-time work", why: "Inference-time attacks are a different discipline — some overlap, most is deployment-side." },
                  { who: "Junior devs new to security", why: "You will get value, but recommend baseline security fundamentals first to make the most of the exam." },
                ].map((item) => (
                  <li key={item.who} className="text-sm">
                    <span className="text-white font-medium">{item.who}</span>
                    <span className="text-slate-400"> — {item.why}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not a fit for the certificate */}
          <Reveal delay={240}>
            <div className="glass rounded-2xl border border-slate-700/60 bg-slate-800/20 p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-400 text-xs font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  Not a fit for the certificate exam
                </span>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  { who: "Non-technical execs, sales, marketing & ops", why: "There's a 5-minute brief written for you — see below." },
                  { who: "End users needing AI-usage awareness", why: "The executive brief covers the practical hygiene you need." },
                  { who: "Pure offensive red teams without defender duties", why: "Course is defender-framed; attack taxonomy is thorough but not offensive-tooling deep." },
                  { who: "Compliance auditors with no engineering background", why: "The exam assumes ability to reason about system architecture and data flows." },
                ].map((item) => (
                  <li key={item.who} className="text-sm">
                    <span className="text-white font-medium">{item.who}</span>
                    <span className="text-slate-400"> — {item.why}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Callout to executive brief */}
        <Reveal delay={360}>
          <div className="max-w-3xl mx-auto mt-10 p-5 rounded-2xl border border-brand-700/40 bg-brand-900/40 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-sm sm:text-base text-white font-medium">Executive, manager, or end-user just exploring?</p>
              <p className="text-sm text-slate-400 mt-0.5">Read the 5-minute brief — no exam, no certificate.</p>
            </div>
            <Link
              href="/intro"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-700/60 border border-brand-600/60 text-brand-300 text-sm font-medium hover:bg-brand-600/60 transition-colors"
            >
              Read the brief →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Economic Impact ────────────────────────────────────── */}
      <section className="section-content py-12">
        <Reveal>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What&apos;s at stake — in numbers</h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
              Real dollars, real fines. The bill for getting AI security wrong is already on the books.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "$4.88M", label: "Average cost of a data breach (2024)", source: "IBM Cost of a Data Breach Report 2024", color: "text-danger-400" },
            { value: "$2.9B",  label: "BEC / impersonation losses in 2023 (US)", source: "FBI IC3 Annual Report 2023", color: "text-warn-400" },
            { value: "7%",    label: "Max EU AI Act fine on global turnover (prohibited-AI violations)", source: "Regulation (EU) 2024/1689", color: "text-brand-400" },
            { value: "4%",    label: "Max GDPR fine on global turnover for severe violations", source: "GDPR Art. 83(5)", color: "text-cyan-400" },
          ].map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80}>
              <div className="glass rounded-2xl border border-slate-700/60 p-4 text-center h-full flex flex-col justify-between">
                <div>
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-xs font-medium text-white leading-snug mb-1">{stat.label}</p>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 leading-snug">{stat.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <p className="text-center text-xs text-slate-500 italic mt-6 max-w-xl mx-auto">
            These numbers are why AI safety is paramount.
          </p>
        </Reveal>
      </section>

      {/* ── Timeline ───────────────────────────────────────────── */}
      <section className="py-12 border-t border-slate-800/60">
        <div className="section-content text-center mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-mono tracking-widest uppercase">
              Research log
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How we got here
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Every milestone, every failure, every bypass — in order. Each entry links to the commit on GitHub.
            </p>
          </Reveal>
        </div>
        <HistoryTimeline />
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-content pt-16 pb-4 text-center">
        <div
          className="cta-gradient-card rounded-2xl border border-white/10 p-8 sm:p-10 shadow-xl shadow-black/20 max-w-3xl mx-auto"
          style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0c4a6e 50%, #1c1917 100%)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Learn how to defend your organisation!</h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
            A simple three-step path from awareness to action.
          </p>

          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-9 text-left">
            {[
              { n: 1, title: "Learn", body: "Seven short lessons covering every attack and defense in plain English." },
              { n: 2, title: "Test",  body: "A timed final exam to prove you can spot the attacks in the wild." },
              { n: 3, title: "Defend", body: "Earn a verifiable certificate and take the playbook back to your team." },
            ].map((s) => (
              <li
                key={s.n}
                className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 border border-white/25 text-white font-bold flex items-center justify-center text-sm">
                    {s.n}
                  </span>
                  <h3 className="text-white font-semibold text-base">{s.title}</h3>
                </div>
                <p className="text-slate-200/90 text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>

          <Link href="/learn" className="btn-primary">
            Start the course →
          </Link>
        </div>
      </section>
    </main>
  );
}
