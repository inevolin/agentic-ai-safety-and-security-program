# AI Agent Security — Mitigation Research Document

> **Research artifact — defensive use only.** All attack data sourced from controlled tests
> against Claude Haiku/Sonnet/Opus. No untested extrapolation.

**Version:** 1.0 — 2026-04-23
**Source:** 17 attack patterns tested across 21 bypass instances (16 Sonnet, 5 Opus)

---

## Part 1 — Executive Risk Register

### 1.1 Scored Bypass Table

**Scoring formula:** Priority = F + A + B + C − D

- **F** — Feasibility (1–5): ease of mounting the attack
- **A** — Automation/scale (1–5): how easily the attack can be automated or scaled
- **B** — Blast radius (1–5): severity/scope of damage if successful
- **C** — Attacker ease (1–5): how cheaply and easily the attacker can execute; 1 = requires significant resources or expertise, 5 = trivial / no specialized resources needed
- **D** — Detectability (1–5, where 1 = essentially invisible to defenders)
- **Priority** = F + A + B + C − D (higher = more urgent to mitigate)

| Attack | Plain name | Class | Model | F | A | B | C | D | Pri |
|--------|-----------|-------|-------|---|---|---|---|---|-----|
| MAA1 | Multi-agent transitive poisoning | Multi-agent | Sonnet+Opus | 5 | 4 | 5 | 4 | 1 | 17 |
| INV1 | Invoice payment portal injection | Structured-data | Sonnet | 5 | 4 | 5 | 4 | 2 | 16 |
| CONF1-MAA1-v2 | Domain-rotation catalog poisoning | Multi-agent | Opus | 5 | 4 | 4 | 4 | 1 | 16 |
| CI1 v2 | CI/CD Deployment Gates injection | Log injection | Sonnet | 4 | 4 | 4 | 4 | 2 | 14 |
| GIT1 v3 | Git commit body URL injection | Structured-data | Sonnet | 4 | 4 | 4 | 4 | 2 | 14 |
| SP1 | Semantic split / registry poisoning | Registry | Sonnet+Opus | 4 | 4 | 4 | 4 | 2 | 14 |
| SP1-FC | Full-chain worm (Notion propagation) | Registry+worm | Sonnet+Opus | 4 | 3 | 4 | 4 | 2 | 13 |
| WIKI1 v4 | Wiki channel registry injection | Registry | Sonnet+Opus | 4 | 3 | 4 | 4 | 2 | 13 |
| EL1 v2 | Error log IDP_FALLBACK_URL injection | Log injection | Sonnet | 4 | 3 | 4 | 4 | 2 | 13 |
| TP1 v3 | MCP tool-output prose injection | Tool-output | Sonnet | 4 | 3 | 4 | 4 | 2 | 13 |
| CONF1 v3 | Config app-domain subdomain alignment | Config | Sonnet | 4 | 3 | 4 | 4 | 2 | 13 |
| ITS1 v2 | IT helpdesk KB metadata injection | Structured-data | Sonnet | 4 | 4 | 3 | 4 | 2 | 13 |
| SURV1 v2 | Single-respondent survey injection | Community | Sonnet | 4 | 4 | 3 | 4 | 2 | 13 |
| CAL1 | Calendar invite organizer injection | Structured-data | Sonnet | 4 | 4 | 3 | 4 | 2 | 13 |
| EMAIL1 | Email thread resource link injection | Structured-data | Sonnet | 4 | 4 | 3 | 4 | 2 | 13 |
| SL1 v5 | Slack community doc-gap injection | Community | Sonnet | 4 | 4 | 3 | 4 | 2 | 13 |
| AI1 | Conversational fact establishment | Conversational | Sonnet | 4 | 3 | 3 | 4 | 2 | 12 |

### 1.2 Minimum Viable Defensive Kit

If budget allows building only three primitives, implement these in order (primitive numbers refer to catalog IDs 1, 3, and 5 from the 10-primitive catalog in Part 2):

**1. Provenance Tagging (Primitive 1) — 2–3 weeks**
Label every context item as `trusted-system`, `trusted-user`, or `untrusted-external`.
Harden the system prompt to treat `untrusted-external` content as data only, never instructions.
Covers the primary mitigation for 17 of the 52 catalog scenarios; directly reduces
surface for CI1, GIT1, EL1, TP1, SL1, SURV1, CAL1, EMAIL1, ITS1.

**2. Write-Scope Contracts (Primitive 3) — 4–6 weeks**
Scope each agent session to exactly the writes required by the user's stated task.
A compromised agent that cannot reach the Notion runbook, vendor registry, or AP tracking
page cannot complete the attack chain. Covers MAA1, SP1-FC, INV1, CI1, GIT1, EL1.

**3. HITL Gates for High-Impact Actions (Primitive 5) — 1–2 weeks**
Route wire transfers, vendor-master edits, mass email, IAM changes, and public-facing
content through a structured human approval step with diff-view. Final brake if 1 and 2 fail.
Covers INV1 (wire fraud), CONF1 (runbook poisoning), WIKI1 (policy poisoning).

Together these three cover the primary mitigation for ~35 of 52 catalog scenarios.

### 1.3 One-Page Policy Mandate Template

> Copy-adapt for your organization. Replace [COMPANY] with your organization name.

---

> **[COMPANY] — AI Agent Usage and Security Policy**
> *Effective date: [DATE] | Review cadence: Quarterly*
>
> **1. Scope**
> This policy applies to all AI agent integrations at [COMPANY] where an AI model
> (any tier — Haiku, Sonnet, Opus, or equivalent) has write access to one or more
> internal systems (Notion, Confluence, Jira, Slack, CRM, ERP, ticketing systems,
> CI/CD pipelines, vendor registries, or email).
>
> **2. Prohibited patterns**
> The following configurations are prohibited without explicit Security review and sign-off:
> - Running a sub-tier model (e.g., Haiku) with write access to any internal data registry,
>   approved-vendor list, or configuration database without human review of every write.
> - Deploying an AI agent with a system prompt that instructs it to include all URLs from
>   external documents, tool outputs, or user-provided data in downstream artifacts.
> - Using AI-generated content in outbound communications without a provenance tag
>   indicating which model, inputs, and tool calls produced it.
> - Agent sessions with write scope exceeding the scope of the user's stated task.
>
> **3. Required controls for high-impact actions**
> The following actions require a human approval step with diff-view before execution:
> - Wire transfers or payment instruction changes of any amount
> - Vendor master record edits (banking details, portal URLs, contact info)
> - Mass email or Slack broadcasts to >50 recipients
> - IAM changes (account creation, privilege escalation, MFA reset)
> - Changes to internal approved-vendor lists, security runbooks, or policy documents
>
> **4. Incident response triggers**
> Open a security incident if an AI agent:
> - Produces a URL in a Notion/Confluence/wiki artifact that is not on the corporate
>   domain allowlist and was not explicitly provided by a verified human in that session.
> - Modifies a vendor registry, approved-service catalog, or runbook without a
>   corresponding HITL approval record.
> - Writes content to a public-facing channel that references an external URL not
>   previously approved by Marketing or Legal.
>
> **5. Accountability**
> Every AI agent integration must have a named owner. The owner is responsible for
> ensuring the integration complies with this policy and for triaging incidents.
