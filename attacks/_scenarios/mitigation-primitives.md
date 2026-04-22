# Mitigation Primitives

The 52 scenarios in `catalog.md` differ on surface (department, integration, channel) but converge on a short list of underlying defensive **primitives**. Building any of these primitives once reduces risk across many scenarios, not just one. This document defines the primitives that matter, what they cost, and which scenarios each one blunts.

The goal of the eventual defensive framework (next phase) is **not** to enumerate 52 per-scenario patches; it is to implement this ~10-primitive kit and measure coverage across the catalog.

---

## Primitive 1 — Provenance tagging ("instruction vs data" separation)

**What it is:** Every piece of content that enters the agent's context is labelled with its trust level: `trusted-system`, `trusted-user-this-session`, `untrusted-external`. The model is hardened (at the wrapper layer, via system prompt + output filters) to treat instructions from `untrusted-external` as data to summarize, never instructions to execute.

**Current state of the art:** Anthropic's [prompt shields / system-prompt hardening](https://www.anthropic.com/research/prompt-injection), [StruQ (arxiv 2402.06363)](https://arxiv.org/abs/2402.06363), Spotlighting (datamarking / encoding).

**Covers (primary):** L1, L2, L3, L5, M1, M3, M5, S2, S3, H1, H3, X1, X2, X3, E4, E5, C3 — anything where the injection arrives through an attacker-controllable data channel.

**Cost to implement:** Medium. Requires every tool/retrieval call to return content with a provenance envelope, and a wrapper layer that strips/tags it before model consumption.

**Known limits:** Does not help when the untrusted source IS the instruction channel (e.g., the user's own request). Does not help against tool-description poisoning (see P2).

---

## Primitive 2 — Tool-description integrity verification

**What it is:** Every MCP tool, SKILL.md, custom agent, or plugin is content-addressed (hash-pinned). On load, the hash is checked against a signed allowlist. Description changes require a review step.

**Covers (primary):** E2, E3, SC1, SC2, C1 (Zendesk macros as "tool-like"), P3 (MSA templates as "tool-like"), IT2 (SIEM macros).

**Cost:** Medium-to-high. Requires registry + signing infrastructure. But Anthropic / Microsoft / OpenAI tool registries are heading here.

**Known limits:** Supply-chain attacker can still plant a malicious tool with a clean hash — the attack just moves upstream to the source-of-truth.

**Key paper:** `sources/agent-attacks/197-arxiv-2603.22489` (MCP threat modeling) lists 5/7 major MCP clients lacking static metadata validation — this primitive closes that gap.

---

## Primitive 3 — Write-scope contracts ("agent least privilege by session")

**What it is:** When a user invokes "summarize this NDA into our wiki", the agent session is scoped to exactly one write: a new wiki page attached to this user, this source document, this session. Any attempt to also write to unrelated surfaces (CRM, Slack, outbound email) fails — not because the model refused but because the session capability doesn't include it.

**Covers:** L1, L5, M4, S1, S4, S5, H2, H5, F1, F4, X4, C1, C4, E1 — almost every scenario that pivots from "read one thing" to "write to another system".

**Cost:** High architectural. Requires every agent host to consume session-scoped capability tokens rather than long-lived OAuth scopes.

**Known limits:** Doesn't help when the attacker's action and the user's intent share the same scope (e.g., both legitimately need CRM write).

**Conceptual model:** OAuth-per-request, with the scope derived automatically from the user's original request.

---

## Primitive 4 — Outbound-link canonicalization and allowlisting

**What it is:** Any URL the agent produces — in a wiki page, an email draft, a Slack message, a PR comment, an outbound-customer message — is compared against a domain allowlist (internal + verified-partner). Unfamiliar domains either get rewritten via a redirect/warning service or are stripped and flagged for human review.

**Covers:** L1, L5, M3, M5, S5, H1, C4, SC1 — every scenario whose end-state is "a URL gets propagated to humans who click it".

**Cost:** Low-to-medium. Existing corporate email gateways already do link-rewriting; extending to AI-generated output is mostly plumbing.

**Known limits:** Bypassable by attackers who register look-alike domains on the allowlist (e.g., `acme-portal.com` if `acme.com` is allowlisted).

**Implementation hint:** LinkGuard-style tool that sits on every agent tool-result boundary.

---

## Primitive 5 — Human-in-loop gates for high-impact actions

**What it is:** Agents automatically categorize actions by blast radius and route high-impact ones (wire transfer, vendor-master edit, mass email, SIEM suppression, identity-system change, external publication) through a structured human approval step with diff-view.

**Covers:** F1, F2, F4, H5, IT1, IT2, IT4, X4, P4, X1 — the scenarios where auto-action is the whole attack.

**Cost:** Medium. Requires an action-taxonomy and approval UI.

**Known limits:** Slows operations. Humans rubber-stamp. Must be paired with an approval UI that highlights anomalies, not one that just asks "OK?".

---

## Primitive 6 — Anomaly-aware retrieval and memory

**What it is:** Before a RAG pipeline injects retrieved content, it runs classifiers on each chunk for known injection patterns (imperative verbs in "data" sections, encoded instructions, excessive authority cues). Memory-store writes are similarly classified and flagged.

**Covers:** M1, IT5, A2, H4, C2, X2 — the RAG/memory-poisoning class.

**Cost:** Medium. Classifiers exist but require tuning per domain. Retrieval latency penalty ~50-200ms.

**Known limits:** Adversarial injection can be crafted to evade classifiers; arms race.

**Key papers:** `sources/training-poisoning-backdoors/2604.02623` (eTAMP poison-once-exploit-forever), `sources/agent-attacks/0d8a9194-rag-worm-jailbreak`.

---

## Primitive 7 — Cross-channel consistency checks

**What it is:** When an agent's action references an external fact (a vendor's banking detail, an exec's approval, a board member's instruction), the agent cross-verifies through an independent channel before acting. Banking-detail changes get phone-verified. Exec approvals get checked in the official approval system, not in the email that claims approval.

**Covers:** F1, F5, X3, IT1, S3 — BEC and authority-spoofing class.

**Cost:** High UX. Will friction users. Hard to automate — that's kind of the point.

**Known limits:** Only works when an independent channel exists and is unbreached.

---

## Primitive 8 — Output-side provenance ("AI wrote this — here's the sources")

**What it is:** Every AI-produced artifact — wiki page, email, PR comment, KB article — is automatically tagged with a provenance footer: which agent, which model, what inputs it consumed, what URL sources contributed. A defensive reviewer (human or downstream agent) can see whether any untrusted content influenced the output.

**Covers:** M1, M3, E5, C3, X5, C2 — the "AI-written content propagates" class.

**Cost:** Low-medium. Needs every agent host to emit a provenance manifest and every downstream reader (CMS, Confluence, Notion) to display it.

**Known limits:** Humans ignore footers. But downstream classifiers can use the provenance to weight trust.

---

## Primitive 9 — Cross-modal input normalization

**What it is:** Before any agent consumes content, multi-modal inputs get normalized: OCR runs against images to reveal all text (including white-on-white); PDFs get text-layer-extracted AND rendered-visual-OCR'd and diffed; Unicode is NFKC-normalized and tag-block / zero-width / ASCII-smuggled bytes get stripped or flagged; audio transcripts get paraphrased into a sanitized form.

**Covers:** H1, F2, IT1, L1, S2, F1 — every scenario where the delivery channel uses a modality the LLM's "text view" misses.

**Cost:** Medium (OCR compute, PDF renderer). Existing corporate DLP already does parts of this.

**Known limits:** Perfect visual-OCR still misses stego in image bytes; audio can smuggle via wake-word collisions.

---

## Primitive 10 — Session-scoped session-anchored auth

**What it is:** The agent runs with auth credentials derived from the user's session, not with long-lived service accounts. When the user logs off or the session ends, the capability tokens the agent minted for tool calls all expire.

**Covers:** A1, A2, IT1, IT4, H5 — agent-swarm + persistence-class attacks.

**Cost:** Very high architectural rework. But it's where OAuth 2.1 / downstream-auth patterns are headed (see [Google A2A protocol drafts](https://github.com/google/a2a)).

**Known limits:** Handoff / sub-agent patterns complicate capability propagation. Getting this right without making it unusable is an open problem.

---

## Coverage matrix (primitive × scenario)

| Primitive | Scenarios where this is the PRIMARY mitigation |
|-----------|-----------------------------------------------|
| 1. Provenance tagging | L1–L3, L5, M1, M3, M5, S2–S3, H1, H3, X1–X3, E4–E5, C3 (**18**) |
| 2. Tool-description integrity | E2–E3, SC1–SC2, C1, P3, IT2 (**7**) |
| 3. Write-scope contracts | L1, L5, S1, S4, S5, M4, H2, H5, F1, F4, X4, C1, C4, E1 (**14**) |
| 4. Outbound-link allowlist | L1, L5, M3, M5, S5, H1, C4, SC1 (**8**) |
| 5. HITL gates for high-impact | F1–F2, F4, H5, IT1, IT2, IT4, X4, P4, X1 (**10**) |
| 6. Anomaly-aware retrieval/memory | M1, IT5, A2, H4, C2, X2 (**6**) |
| 7. Cross-channel consistency | F1, F5, X3, IT1, S3 (**5**) |
| 8. Output-side provenance | M1, M3, E5, C3, X5, C2 (**6**) |
| 9. Cross-modal normalization | H1, F2, IT1, L1, S2, F1 (**6**) |
| 10. Session-scoped auth | A1, A2, IT1, IT4, H5 (**5**) |

(Sums exceed 52 because most scenarios require 2-3 primitives to fully break the chain.)

## Minimum viable defensive kit

If budget allows building only **three** primitives first, they should be:

1. **Provenance tagging** (Primitive 1) — touches the most scenarios by raw count, and is the foundational primitive everything else depends on.
2. **Write-scope contracts** (Primitive 3) — converts a compromise-of-context into a harmless pivot attempt because the agent can't reach the downstream system.
3. **HITL gates for high-impact actions** (Primitive 5) — the final brake. If 1 and 2 fail, this catches the highest-blast-radius outcomes (wire fraud, mass email, IAM change).

A defensive framework that implements these three, even at MVP quality, covers the primary mitigation for ~35 of the 52 scenarios.

## Explicit non-primitives

These show up in proposals but don't earn a primitive slot because they don't actually block the attacks in this catalog:

- **"Train the model to refuse injection."** The scenarios don't require a refused model — they require a confused-deputy model. Training helps but doesn't close the gap.
- **"Run a prompt-injection classifier on user input."** The input is trusted; the injection is in the tool-returned content. Classifier at the wrong boundary.
- **"Use a safer model."** Doesn't help — every in-scope scenario works with any policy-respecting model.
- **"Audit logs."** Useful for post-mortem, not for prevention. Mention but not a primitive.

## What we learn by tagging

Once the full catalog is tagged against primitives, a risk scoring of each customer's AI integration can be computed as: `coverage_score = Σ(primitives_implemented × scenarios_covered) / 52`. This is the metric the defensive framework will expose.
