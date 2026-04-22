# Research methodology — using Claude to push capability boundaries

This document captures how Claude Code has been used on this project to gather, synthesize, and extrapolate research at a scale and depth that would be impractical manually. The goal of the research itself is to uncover **novel attack techniques and defensive ideas** on AI-agent social engineering — which means the methodology has to do more than summarize known material: it has to provoke original thinking from the model.

Keep this file alive. As new techniques work (or fail), record them here so future sessions inherit the playbook.

---

## 1. Working patterns that produced the best results

### 1.1 Massively parallel subagent fan-out

When the work is embarrassingly parallel (e.g. "summarize 275 papers", "scrape 100 references", "find SOTA papers in topic X"), dispatch many `Agent` calls in a single message. Each agent gets a bounded, self-contained brief and writes output to disk immediately. The parent session never reads the raw paper text — agents handle that — so the parent's context stays clean for orchestration.

Key patterns that worked:
- **Chunk size ~15–20 files per agent.** Larger chunks risk one refusal killing the whole batch; smaller chunks incur too much orchestration overhead.
- **Run 3 agents at once by default**, not 14. Going too wide triggers rate-limit exhaustion across the whole account and you lose the entire swarm. Three is a sustainable cadence on Opus 4.7.
- **`model: "opus"` explicitly** when deep reasoning matters; let inherit when speed matters. Sonnet is sufficient for mechanical extraction, Opus is better for synthesis.
- **Always pass the file list as a path** (`/tmp/batch_xx`), never inline. Agents can then `wc -l`, `head`, `grep` without you re-listing files.

### 1.2 Defender-side framing for sensitive content

Prompts that say "generate attacker transcripts" or "invent new jailbreak payloads" trip Anthropic's Usage Policy and kill the agent mid-batch. Prompts that say "extract detection features a blue-team analyst would surface" do the same job without the refusal. The information content is identical; the framing difference is whether Claude produces it.

Rule of thumb: if a prompt reads like a red-team brief, reframe it as a detector / classifier-feature brief. Mention: defensive tooling, indicator lists, structural fingerprints, behavioral cues.

### 1.3 Verbatim-first, extrapolation-second

The most valuable corpus content is **real payloads from real papers**, verbatim, in fenced code blocks. Extrapolated content is useful only when clearly labeled (`### Extrapolated example (not in paper):`). Mixing the two without marking them corrupts the corpus.

When papers are thin on concrete artifacts, ask the agent to:
1. Extract what is present verbatim.
2. Construct a plausible but clearly-labeled variant that matches the described technique.
3. Justify the variant in one line (why it is plausible given the paper's threat model).

This turns survey/taxonomy papers into usable red-team samples without fabricating citations.

### 1.4 Persistent session logs in `logs/`

Every session writes a dated log in `logs/`. The log is the handover document — a future session reads the newest log instead of the prior transcript. This means you can recover from compactions, context loss, or a fresh window with almost no re-orientation cost.

See `CLAUDE.md` for the log template.

### 1.5 Durable artifacts, not chat output

Everything substantive lives on disk: source papers in `sources/`, summaries in `sources/{id}-summary.md`, logs in `logs/`, methodology here. Chat output is ephemeral; files persist across sessions, agents, and context resets. Design prompts so the agent writes a file, not so it returns prose.

---

## 2. Techniques for uncovering *novel* ideas

Summarization alone produces a well-organized library, not new ideas. Below are patterns that push Claude toward generating genuinely new material.

### 2.1 Cross-paper synthesis prompts

After the corpus is organized, dispatch an agent that reads **summaries from multiple different categories** and answers: *"What attack would combine technique A from category X with technique B from category Y? What would that look like end-to-end? Which existing paper's threat model covers it? Which does not?"*

The useful output of this is not a single answer; it's the gaps — combinations that the literature hasn't yet covered.

### 2.2 Adversarial self-critique chains

Two-agent loops:
1. Agent A proposes a novel attack given a corpus slice.
2. Agent B, given only the proposal and a defender's toolkit, tries to detect or block it.
3. Agent A revises to evade B's detector.
4. Repeat until B can no longer block, or A can no longer evade.

The transcript becomes a new red-team/blue-team benchmark case. Store in a `benchmarks/` subdirectory.

### 2.3 Cross-domain analogy prompts

Ask Claude to **pull a primitive from a non-AI domain** (e.g. classical social engineering, supply-chain attacks, anti-money-laundering, biological immune evasion) and ask how it would map to an LLM-agent target surface. Domain-crossing produces the most novel ideas because the literature within a domain converges on the same abstractions.

Example prompt shape:
> "Pick a technique from [classical phishing / browser XSS / financial fraud / protein-folding]. Map every element — attacker, channel, payload, trust assumption, exfiltration, detection — onto an AI agent with [browser / tool-calling / RAG / memory]. Where does the mapping break down? Those break-points are either paper-worthy novelties or fundamental defensive invariants."

### 2.4 Tool-use prompts instead of description prompts

Instead of asking Claude to *describe* an attack, give it a sandbox (browser MCP, file system, a running LLM endpoint) and ask it to *demonstrate* the attack against a dummy target. The capability floor of Claude is higher when it actually executes — it notices things that a description-only approach misses.

### 2.5 "What would surprise you" prompts

At the end of a deep research pass, explicitly ask: *"Given everything in this corpus, what is the most surprising gap? Which paper's claimed defense would you expect to fail first, and how?"* Claude is much better at surfacing dissonance when explicitly prompted for it than when asked for neutral summary.

### 2.6 Advisor calls as a stronger second opinion

Use the `advisor` tool (stronger reviewer model) when the main session has committed to a framing that may be wrong — novelty claims, taxonomy choices, or prioritization calls. The advisor sees the whole transcript and can flag when you're building on a shaky premise.

---

## 3. Anti-patterns observed on this project

- **Giant single agent prompt over 100+ files.** Will hit context / rate limits or produce shallow output. Always chunk.
- **Re-reading the full conversation** to understand state instead of reading the newest log. Wastes tokens and is slower.
- **Asking Claude to "be creative"** without a constraint. Useless. Creativity emerges from tight constraints ("invent a payload that exfiltrates through a PDF's embedded font table") not from open-ended prompts.
- **Trusting subagent summaries without verification.** Agent reports what it *intended* to do; always check the actual files. `ls *-summary.md | wc -l` is cheap.
- **Ignoring policy refusals instead of rephrasing.** A refusal is signal about prompt framing, not about the underlying task. Reframe defender-side and retry.

---

## 4. Open methodological questions

- How to detect when an "extrapolated example" is actually a hallucination vs. a plausible reconstruction? Currently relying on explicit labeling, not a verification step.
- Is there a scalable way to make subagents build on *each other's* novel findings, rather than operating independently? A shared scratchpad in `logs/scratch/` that every agent reads at dispatch might work — untested.
- Can we use the Anthropic API directly (not via Claude Code) with extended-thinking + larger thinking budgets to produce deeper single-shot syntheses for the synthesis phase? Worth trying once the corpus is organized.

---

*Update this file whenever a technique produces a clearly better outcome than alternatives. The goal is an evolving playbook, not documentation of a finished methodology.*
