import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LessonAudioPlayer } from "@/components/LessonAudioPlayer";
import { introAudioPublicPath } from "@/lib/audio-manifest";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI Safety Intro — 5-Minute Brief",
  description:
    "A plain-language 5-minute intro to AI agent security for executives, managers, and employees. No exam, no certificate — just what you need to know.",
};

export default function IntroPage() {
  const introAudioSrc = introAudioPublicPath() ?? "/api/audio/intro";
  return (
    <main className="min-h-screen pt-24 pb-32 overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative section-content py-16 text-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-brand-700/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-cyan-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <Reveal>
          <div className="inline-flex items-center gap-2 bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            No exam · No certificate · 5-minute read
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
            AI Safety,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-400 to-danger-400">
              in 5 minutes
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-2">
            <span className="text-white font-semibold">For executives, managers, and curious employees.</span>
          </p>
        </Reveal>

        <Reveal delay={280}>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            This is the no-exam version of our full course. It covers what AI agent security means for your organisation, what to watch out for, and what questions to ask — in plain English, without the technical depth the certified course requires.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-8 max-w-2xl mx-auto text-left">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 text-center">
              Prefer to listen?
            </p>
            <LessonAudioPlayer moduleId={0} lessonId={0} audioSrc={introAudioSrc} />
          </div>
        </Reveal>
      </section>

      {/* ── What's actually happening ─────────────────────────── */}
      <section className="section-content py-12 sm:py-16">
        <Reveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              The situation
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              What&apos;s actually happening
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            {
              n: "1",
              title: "AI agents now take real actions inside companies",
              body: "Today's AI assistants don't just answer questions — they write to wikis, send messages, file tickets, push code, and call external services. A single bad instruction can trigger a chain of real actions your team didn't authorise.",
              color: "border-brand-700/40 bg-brand-900/40",
              accent: "text-brand-400",
            },
            {
              n: "2",
              title: "Attackers don't need to hack — they just fill out forms",
              body: "Attackers have learned that it's easier to put a malicious instruction inside ordinary business data — a Slack message, a CSV row, an error log, a calendar invite — than to break into systems directly. The AI reads that data and acts on it.",
              color: "border-danger-700/40 bg-danger-950/20",
              accent: "text-danger-400",
            },
            {
              n: "3",
              title: "We documented 16 attacks on Claude. None required hacking.",
              body: "Our research team ran 21 attack scenarios against Claude Sonnet and Opus. 16 succeeded against Sonnet; 5 against Opus. Every single one used ordinary business inputs — no exploits, no zero-days, no technical skills beyond knowing how to write a convincing sentence.",
              color: "border-warn-800/40 bg-warn-950/20",
              accent: "text-warn-400",
            },
          ].map((card) => (
            <Reveal key={card.n} delay={Number(card.n) * 80}>
              <div className={`glass rounded-2xl border ${card.color} p-6 h-full`}>
                <div className={`text-3xl font-bold ${card.accent} mb-3`}>{card.n}</div>
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What this means for you ───────────────────────────── */}
      <section className="section-content py-12 sm:py-16">
        <Reveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-mono tracking-widest uppercase">
              By role
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              What this means for you
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">

          {/* Executives / board */}
          <Reveal delay={80}>
            <div className="glass rounded-2xl border border-slate-700/60 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-900/60 border border-brand-700/60 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                  </svg>
                </span>
                <h3 className="text-white font-semibold text-base">Executives &amp; board</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">Ask your CISO and engineering leads:</p>
              <ul className="space-y-2">
                {[
                  "Do we have a map of which AI agents can write to which systems — and is it reviewed quarterly?",
                  "Which AI integrations have a human approval step before irreversible actions?",
                  "Have we tested our agents against prompt-injection attacks, or only against accuracy benchmarks?",
                  "Is there an incident-response playbook specifically for AI-assisted actions gone wrong?",
                ].map((q) => (
                  <li key={q} className="flex gap-2 text-sm text-slate-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-400 flex items-center justify-center text-xs">?</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Managers / product owners */}
          <Reveal delay={160}>
            <div className="glass rounded-2xl border border-slate-700/60 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" />
                    <path d="M8 12h8M8 16h5" />
                  </svg>
                </span>
                <h3 className="text-white font-semibold text-base">Managers &amp; product owners</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">Before greenlighting an AI-assisted workflow, require:</p>
              <ul className="space-y-2">
                {[
                  "A write-permission map — document exactly which external systems the agent can modify.",
                  "Second-channel verification for any action that moves money, sends communications, or deletes data.",
                  "An audit log that records what the agent read and what it wrote, with timestamps.",
                  "A defined rollback procedure — what happens if the agent acts on a poisoned input?",
                ].map((q) => (
                  <li key={q} className="flex gap-2 text-sm text-slate-300">
                    <span className="flex-shrink-0 text-cyan-400">✓</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Sales / marketing / ops */}
          <Reveal delay={240}>
            <div className="glass rounded-2xl border border-slate-700/60 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-warn-950/50 border border-warn-800/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-warn-400" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </span>
                <h3 className="text-white font-semibold text-base">Sales, marketing &amp; ops</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">How to spot a suspicious AI output:</p>
              <ul className="space-y-2">
                {[
                  "A URL you didn't expect — especially in a summary, checklist, or recommendation that mentions an external link for the first time.",
                  "Instructions framed as \"per IT's request\" or \"per the approved vendor registry\" — attackers use institutional language to add fake authority.",
                  "Confident, specific text with a brand-new external link you haven't seen before — the AI sounds certain because the injected instruction told it to.",
                  "Any output asking you to take an irreversible action (wire money, delete a record, send to a new email) based on something the AI read.",
                ].map((q) => (
                  <li key={q} className="flex gap-2 text-sm text-slate-300">
                    <span className="flex-shrink-0 text-warn-400">!</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* End users / employees */}
          <Reveal delay={320}>
            <div className="glass rounded-2xl border border-slate-700/60 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-emerald-950/50 border border-emerald-800/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <h3 className="text-white font-semibold text-base">End users &amp; employees</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">Basic hygiene when working with AI tools:</p>
              <ul className="space-y-2">
                {[
                  "Don't paste secrets — passwords, API keys, or customer PII — into AI chat unless you know exactly where the data goes.",
                  "Treat AI outputs as drafts. If it's important, verify with a primary source before acting.",
                  "Verify links before clicking. AI agents can be fed false information about what a URL does.",
                  "If an AI tool asks you to approve an action that seems unusual, ask your manager before proceeding.",
                ].map((q) => (
                  <li key={q} className="flex gap-2 text-sm text-slate-300">
                    <span className="flex-shrink-0 text-emerald-400">✓</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What's at stake ───────────────────────────────────── */}
      <section className="section-content py-12">
        <Reveal>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-danger-700/40 bg-danger-950/20 text-danger-400 text-xs font-mono tracking-widest uppercase">
              Numbers
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              What&apos;s at stake
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
              The bill for getting AI security wrong is already on the books.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <Reveal delay={80}>
            <div className="glass rounded-2xl border border-slate-700/60 p-6 text-center">
              <p className="text-3xl font-bold text-danger-400 mb-2">$4.88M</p>
              <p className="text-sm font-medium text-white mb-2">Average cost of a data breach</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                That&apos;s the global average in 2024 — including investigation, notification, remediation, and lost business. AI-assisted breaches are trending higher.
              </p>
              <p className="text-[10px] text-slate-500 mt-3">IBM Cost of a Data Breach Report 2024</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="glass rounded-2xl border border-slate-700/60 p-6 text-center">
              <p className="text-3xl font-bold text-warn-400 mb-2">$2.9B</p>
              <p className="text-sm font-medium text-white mb-2">Business email compromise losses in 2023 (US)</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                AI agents that summarise email and draft responses are a new, scalable version of this attack — automated impersonation at scale.
              </p>
              <p className="text-[10px] text-slate-500 mt-3">FBI IC3 Annual Report 2023</p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="glass rounded-2xl border border-slate-700/60 p-6 text-center">
              <p className="text-3xl font-bold text-brand-400 mb-2">7%</p>
              <p className="text-sm font-medium text-white mb-2">Max EU AI Act fine on global annual turnover</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                For the most serious AI violations. For a $1B revenue company, that&apos;s $70M — and the Act explicitly covers agentic and high-risk AI deployments.
              </p>
              <p className="text-[10px] text-slate-500 mt-3">Regulation (EU) 2024/1689</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA to full course ────────────────────────────────── */}
      <section className="section-content pt-12 pb-4 text-center">
        <Reveal>
          <div
            className="cta-gradient-card rounded-2xl border border-white/10 p-8 sm:p-10 shadow-xl shadow-black/20 max-w-3xl mx-auto"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0c4a6e 50%, #1c1917 100%)" }}
          >
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Want the full version?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Take the certified course</h2>
            <p className="text-slate-300 text-sm sm:text-base mb-2 leading-relaxed max-w-xl mx-auto">
              7 modules · approximately 3 hours · exam-graded certificate. Designed for engineers, security practitioners, and technical leaders who want to go beyond awareness into hands-on defence.
            </p>
            <p className="text-slate-400 text-xs mb-8">
              This brief page does <span className="text-white font-medium">not</span> yield a certificate — only the full course and exam do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn" className="btn-primary">
                Start the course →
              </Link>
              <Link href="/about#audience" className="btn-outline">
                Who should take it?
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
