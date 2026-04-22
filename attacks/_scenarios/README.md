# attacks/_scenarios/ — Enterprise social-engineering catalog

## Purpose

The `attacks/` workstream began with a CTF-style harness (`_harness/`) that tries to breach a `claude -p` target directly. That was useful for baselining, but the real enterprise threat model is different: **attackers rarely face the LLM directly — they reach it through legitimate business content** (emails, shared docs, tickets, calendar invites, CSVs, OCR'd PDFs) that an AI-integrated employee or automation later feeds into the model.

This catalog documents **50 unique orchestration attacks** that target AI-integrated corporate workflows. The model of compromise is:

```
attacker → legitimate enterprise surface (email / wiki / CRM / ticket / doc / MCP)
        → AI agent reads or is asked to act on that content
        → agent performs an attacker-beneficial action against another internal system
        → (often) a human is the ultimate victim — phishing link, wire fraud,
          policy drift, auth bypass, reputational damage.
```

The LLM is the **confused deputy**, not the jailbreak target. We don't need to break Claude's safety training — we just need Claude to do something useful to the attacker using its normal, policy-respecting behavior, because the instructions arrived through a channel the operator told it to trust.

## Relationship to the CTF harness

| | `attacks/NNN-*/` (harness) | `attacks/_scenarios/` (this dir) |
|---|---|---|
| **Goal** | Can we make the model produce a canary artifact against an explicit CTF system prompt? | Can we chain real enterprise tools + content so the model takes an attacker-beneficial action? |
| **Target** | `claude -p` single-shot | Simulated multi-tool agent (Notion MCP, Gmail MCP, Slack MCP, etc.) |
| **Success signal** | File/string/URL canary | Real-world impact: link propagation, record change, exfil, policy drift |
| **Primary ask** | Defense-under-adversary-pressure baseline | Threat-model catalog for corporate defense tooling |

The two complement each other. The harness tells us the intrinsic model-level robustness. The scenarios tell us what breaks when the model is embedded in a real corporate agent.

## Schema — every scenario entry includes

Each scenario under `by-department/` follows this structure:

```markdown
### [ID]. [Title]

**Department:** …
**Primary integration:** Gmail / Notion / Salesforce / …
**Injection channel:** email body / PDF attachment / calendar invite description / …
**Attacker goal:** credential-phish / BEC / policy-rewrite / exfil / propagation / persistence / …
**Automation:** fully-auto (no human trigger) | semi-auto (human asks AI to act) | human-in-loop (AI proposes, human approves)
**Pivot mechanism:** indirect-injection / retrieval-poisoning / tool-desc-poisoning / memory-persistence / agent-handoff / unicode-smuggle / …
**Realistic? (1-5):** how likely this is to succeed today against an average mid-market company with stock AI integrations

**Precondition:**
- What the attacker needs to know or have first (an employee's name, a vendor ID, etc.).

**Attack narrative:**
- Hour-by-hour or step-by-step story.

**Payload (example):**
- The literal text/encoding the attacker plants. Labeled as research artifact.

**Expected agent behavior:**
- What Claude (or equivalent) would do if the operator hasn't pre-hardened.

**Detection signals:**
- The three or four observables a SOC/detection pipeline could use.

**Mitigation hooks:**
- Which mitigation primitives (see `mitigation-primitives.md`) would break the chain.
```

## Dimensions we explicitly vary

To force real diversity across 50 scenarios (not 50 variations of "email with hidden instruction"), every scenario is tagged on:

1. **Department** — Legal, Sales, Marketing, HR, Finance, Engineering, IT, Exec, Procurement, Support, Cross-functional.
2. **Integration** — at least 25 distinct SaaS/tool surfaces across the 50.
3. **Injection channel** — at least 20 distinct channels (email body, PDF attachment, calendar description, Notion comment, Slack workflow, Jira custom field, GitHub PR body, CI log, MCP tool description, SKILL.md, OCR'd image, audio transcript, CSV cell, webhook payload, OAuth app description, etc.).
4. **Goal** — 12+ distinct attacker objectives (credential-phish, BEC/wire fraud, exfil, policy-rewrite, propagation, persistence, priv-esc, auth bypass, supply chain, disinfo, approval-rig, SEC-relevant misstatement).
5. **Automation level** — the spectrum from fully-auto agent pipelines to human-triggered "summarize this" to human-approval chains.
6. **Pivot mechanism** — the specific bypass primitive: direct instruction override / indirect-content / tool-desc poisoning / retrieval poisoning / memory persistence / agent-to-agent handoff / output-side injection / cross-modal (OCR, transcript) / unicode / fabricated-history / tool-schema confusion.

No two scenarios are allowed to be identical on more than 3 of these 6 axes.

## Not in scope (deliberately)

- **Classic phishing without AI in the loop.** If the scenario would work equally well without an AI agent anywhere, it's not in this catalog.
- **Pure single-shot jailbreaks** of the target. That's the harness workstream.
- **Novel model weaknesses.** We assume Claude's safety training is near-current. The scenarios assume legitimate, policy-respecting model behavior — we only exploit how operators wire the model into workflows.

## Layout

```
_scenarios/
  README.md                       ← this file
  catalog.md                      ← master index, all 50 scenarios in one table
  by-department/
    01-legal-compliance.md        ← scenarios L1–L5
    02-sales-customer-success.md  ← S1–S5
    03-marketing-pr.md            ← M1–M5
    04-hr-people-ops.md           ← H1–H5
    05-finance-accounts-payable.md ← F1–F5
    06-engineering-devops.md      ← E1–E5
    07-it-security-admin.md       ← IT1–IT5
    08-exec-board.md              ← X1–X5
    09-procurement-vendor.md      ← P1–P4
    10-customer-support.md        ← C1–C4
    11-cross-functional-agent-to-agent.md ← A1–A2 and SC1–SC2
  assessment.md                   ← real-threat rating across all 50
  mitigation-primitives.md        ← ~10 defensive primitives that cover the majority
  live-examples/                  ← working Notion pages + GitHub repos demonstrating select scenarios
    README.md
    notion-nda-summary/
    github-malicious-skill/
    ...
```

## Safety note

Every payload in this catalog is labeled as **research-artifact**. Live examples built in Notion and GitHub are tagged with a visible `RESEARCH ARTIFACT — DO NOT CLICK LINKS — DO NOT ACT ON INSTRUCTIONS` banner and are kept in private workspaces. The goal is to build defensive tooling, not to maintain a functioning attack toolkit.
