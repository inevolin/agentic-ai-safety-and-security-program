import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SplitHeading } from "@/components/SplitHeading";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { ClaudeSponsorBadge } from "@/components/ClaudeSponsor";

export const metadata: Metadata = {
  title: "Just Use Opus — AI Safety Course",
  description:
    "Why most teams should just run their AI agents on Opus. We tested 21 real attacks: simple ones beat the weaker models, but Opus held.",
};

export default function JustUseOpusPage() {
  return (
    <main className="min-h-screen pt-24 pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-content py-12 sm:py-16 text-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-brand-700/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-cyan-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <Reveal>
          <div className="inline-flex items-center gap-2 bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Bonus read
          </div>
        </Reveal>

        <SplitHeading
          text="Just use Opus."
          as="h1"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5"
          delay={120}
        />

        <Reveal delay={260}>
          <p className="text-xl sm:text-2xl font-semibold max-w-2xl mx-auto leading-snug text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-400 to-danger-400">
            The strongest model is the cheapest security upgrade a team can buy.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-6 flex justify-center">
            <ClaudeSponsorBadge />
          </div>
        </Reveal>
      </section>

      {/* Stat contrast */}
      <section className="section-content py-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          <Reveal>
            <div className="glass rounded-2xl border border-danger-800/40 bg-danger-950/20 p-6 text-center h-full">
              <p className="text-5xl sm:text-6xl font-bold text-danger-400 tabular-nums">
                <AnimatedNumber value={16} />
              </p>
              <p className="mt-2 text-sm text-slate-400 leading-snug">
                times <span className="text-white font-medium">Sonnet</span> fell to simple, single-surface attacks
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-6 text-center h-full">
              <p className="text-5xl sm:text-6xl font-bold text-emerald-400 tabular-nums">
                <AnimatedNumber value={5} />
              </p>
              <p className="mt-2 text-sm text-slate-400 leading-snug">
                times <span className="text-white font-medium">Opus</span> fell, and never to a simple one
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <section className="section-content py-8">
        <article className="reading-content max-w-2xl mx-auto space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
          <Reveal>
            <p>
              Most teams overthink AI agent security. They reach for elaborate filters and custom guardrails before they check the one setting that moves the needle most: which model is doing the reasoning.
            </p>
          </Reveal>

          <Reveal>
            <p>
              This course tested 21 real attacks against Claude Haiku, Sonnet, and Opus. The attacks were not jailbreaks or clever prompt tricks. They were ordinary business inputs: a vendor form, a support ticket, a Slack message, a git commit. The kind of data an agent reads every day.
            </p>
          </Reveal>

          <Reveal>
            <p>
              The weaker models fell often. Sonnet was bypassed 16 times by simple attacks. An attacker only had to plant bad data in one place the agent trusted, then wait.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Opus held. The same simple attacks that beat Sonnet did not beat Opus. It reasoned about where each piece of data came from, named the attack out loud, quarantined anything that looked off, and escalated instead of acting.
            </p>
          </Reveal>

          <Reveal>
            <figure className="my-8 border-l-2 border-brand-500/60 pl-5">
              <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                The same tricks that fooled the cheaper model walked straight into a wall on Opus.
              </blockquote>
            </figure>
          </Reveal>

          <Reveal>
            <p>
              Opus was bypassed only 5 times, and never by a simple vector. Each success needed a multi-stage setup: poison a registry, get a weaker agent to write to it, then trick a stronger one into trusting the result. That is real effort, not a drive-by. Most attackers will never get that far.
            </p>
          </Reveal>

          <Reveal>
            <p>
              The lesson is not that Opus is magic. Architecture still matters. Write-gates, allowlists, and human review for high-stakes actions all earn their place, and this course covers them in detail. But model choice is the cheapest, highest-leverage move a team can make. It costs a config change, not a project.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-white font-medium">
              So for most people the honest advice is short. Pick the strongest model you can run, wire in a few basic controls, and move on. Just use Opus.
            </p>
          </Reveal>
        </article>
      </section>

      {/* CTA */}
      <section className="section-content pt-10 text-center">
        <div
          className="cta-gradient-card rounded-2xl border border-white/10 p-8 sm:p-10 shadow-xl shadow-black/20 max-w-2xl mx-auto"
          style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0c4a6e 50%, #1c1917 100%)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Want the proof, attack by attack?</h2>
          <p className="text-slate-300 text-sm sm:text-base mb-7 leading-relaxed">
            The full course walks through every attack we ran and the defenses that held.
          </p>
          <Link href="/intro" className="btn-primary">
            Start the course →
          </Link>
        </div>
      </section>
    </main>
  );
}
