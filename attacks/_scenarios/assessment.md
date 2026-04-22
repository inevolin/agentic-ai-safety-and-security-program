# Real-threat assessment — which of the 52 scenarios are actually dangerous today?

This file rates each scenario on five axes so that the next phase (building the defensive framework) can prioritize. The catalog is not a flat list: a handful of scenarios account for the majority of near-term risk, and they cluster around a small set of structural patterns.

## Rating axes

Each scenario is scored 1–5 on:

| Axis | Meaning |
|------|---------|
| **F — Feasibility today** | How likely is this to succeed against a real mid-market company with stock AI integrations? 5 = works out of the box; 1 = requires heavy pre-compromise. |
| **A — Automation/scale** | How reproducibly can the attack be run at scale without bespoke targeting? 5 = one mass campaign fires to thousands; 1 = per-target bespoke. |
| **B — Blast radius** | Max damage if it works. 5 = cross-company / SEC / material-money; 1 = single-user nuisance. |
| **D — Detectability** | How likely is the attack to be caught by existing tools (email gateway, DLP, SIEM, AI-output classifiers). **HIGHER = easier to catch, so LOWER detectability is worse.** 5 = almost certainly caught; 1 = invisible. |
| **C — Cost to attacker** | How expensive is the attack to mount. 5 = trivially cheap; 1 = nation-state. |

**Priority = F + A + B + C − D** (higher = higher priority). Range −1 to 24.

## Scored table

| ID | F | A | B | D | C | **Pri** | Notes |
|----|:-:|:-:|:-:|:-:|:-:|:-:|-------|
| **L1** | 5 | 4 | 3 | 2 | 4 | **14** | NDA-summary worm. Easy, scales, harmful, hard to detect. |
| **L2** | 4 | 3 | 4 | 2 | 3 | **12** | Redline ratchet. Long-tail drift; legal-reviewed so lower detection. |
| **L3** | 4 | 3 | 4 | 3 | 3 | **11** | Subpoena authority is widely respected. |
| **L4** | 5 | 5 | 4 | 2 | 5 | **17** | DPA backflow. Almost passive; attacker just asks. |
| **L5** | 4 | 4 | 3 | 3 | 4 | **12** | Cross-tool phish propagation. |
| **S1** | 5 | 4 | 3 | 2 | 4 | **14** | CRM drift is silent, long-dwell. |
| **S2** | 4 | 3 | 3 | 3 | 4 | **11** | RFP PDF trojan. Widely used format. |
| **S3** | 4 | 3 | 3 | 3 | 4 | **11** | Calendar descriptions rarely sanitized. |
| **S4** | 3 | 3 | 3 | 3 | 3 | **9**  | LinkedIn-contract chain is newer / rarer. |
| **S5** | 4 | 5 | 3 | 3 | 5 | **14** | Feedback-form hijack → mass email blast. |
| **M1** | 5 | 5 | 4 | 1 | 4 | **17** | RAG poisoning is the single highest-impact passive attack; fixes once poisoned. |
| **M2** | 3 | 2 | 4 | 3 | 3 | **9**  | Requires permissive PR workflow. |
| **M3** | 4 | 4 | 3 | 3 | 4 | **12** | SEO/malware backlinks in blog posts. |
| **M4** | 3 | 3 | 3 | 3 | 3 | **9**  | Social-calendar hijack; most have human review. |
| **M5** | 3 | 2 | 3 | 3 | 3 | **8**  | Partner-asset swap; rarer. |
| **H1** | 5 | 5 | 4 | 2 | 4 | **16** | Trojan-horse resumes — documented in corpus. |
| **H2** | 3 | 3 | 3 | 4 | 3 | **8**  | Candidate pipe has many human gates. |
| **H3** | 3 | 3 | 4 | 3 | 3 | **10** | Benefits-template poisoning. |
| **H4** | 4 | 4 | 4 | 2 | 4 | **14** | Survey aggregators rarely sanitized. |
| **H5** | 3 | 2 | 4 | 3 | 3 | **9**  | Needs spoofable email. |
| **F1** | 5 | 4 | 5 | 2 | 4 | **16** | Invoice BEC — the classic. AI amplifies. |
| **F2** | 3 | 3 | 3 | 3 | 3 | **9**  | Expense-OCR abuse; limited blast. |
| **F3** | 3 | 2 | 3 | 3 | 3 | **8**  | Treasury-advisor mistake; needs human action. |
| **F4** | 4 | 4 | 5 | 2 | 4 | **15** | Mass vendor-onboarding CSV. |
| **F5** | 4 | 3 | 5 | 2 | 4 | **14** | Auditor-inquiry exfil during audit season. |
| **E1** | 5 | 5 | 5 | 2 | 4 | **17** | Dependabot PR → auto-merge is exactly how CI works today. |
| **E2** | 5 | 5 | 4 | 1 | 5 | **18** | SKILL.md poison — hardest to detect. **#1 priority.** |
| **E3** | 5 | 5 | 4 | 1 | 4 | **17** | MCP tool-description poison — as bad as E2. |
| **E4** | 4 | 3 | 4 | 3 | 4 | **12** | CI-log → backdoor commit. |
| **E5** | 3 | 3 | 3 | 3 | 3 | **9**  | Jira-ticket-to-docs poison. |
| **IT1** | 4 | 3 | 4 | 3 | 3 | **11** | MFA-bypass via helpdesk is the #1 real-world SE pattern; AI amplifies. |
| **IT2** | 3 | 3 | 4 | 3 | 3 | **10** | SIEM false-positive poisoning — detection blind spot. |
| **IT3** | 3 | 3 | 3 | 3 | 3 | **9**  | Phish-sim-in-sim. |
| **IT4** | 3 | 3 | 4 | 3 | 3 | **10** | MDM auto-enroll. |
| **IT5** | 4 | 4 | 4 | 1 | 3 | **14** | Memory-persistence; invisible. |
| **X1** | 3 | 2 | 5 | 3 | 3 | **10** | Board-deck comment → SEC misstatement. |
| **X2** | 3 | 3 | 4 | 3 | 3 | **10** | OKR rewrite via analyst PDF. |
| **X3** | 4 | 3 | 5 | 2 | 4 | **14** | CFO-level AI-laundered BEC. |
| **X4** | 3 | 4 | 4 | 3 | 4 | **12** | Priority-flag spoofing bypasses EA. |
| **X5** | 3 | 2 | 5 | 2 | 3 | **11** | Earnings-prep footnote — regulator-grade. |
| **P1** | 3 | 3 | 3 | 3 | 3 | **9**  | RFQ self-endorsement. |
| **P2** | 4 | 5 | 4 | 2 | 5 | **16** | Reverse-vendor questionnaire. |
| **P3** | 3 | 2 | 4 | 3 | 2 | **8**  | MSA template drift needs insider or drive compromise. |
| **P4** | 3 | 3 | 4 | 3 | 3 | **10** | Requisition auto-approve. |
| **C1** | 4 | 4 | 4 | 2 | 4 | **14** | Zendesk macro exfil fires every use. |
| **C2** | 3 | 4 | 3 | 2 | 4 | **12** | RLHF steering over weeks. |
| **C3** | 3 | 3 | 3 | 3 | 3 | **9**  | KB anti-security advice. |
| **C4** | 4 | 5 | 3 | 3 | 4 | **13** | Mass CSAT-link phish. |
| **A1** | 4 | 4 | 4 | 2 | 4 | **14** | Agent-to-agent handoff escape. |
| **A2** | 4 | 4 | 4 | 1 | 4 | **15** | Shared vector-memory poison — invisible persistence. |
| **SC1** | 4 | 4 | 4 | 2 | 4 | **14** | NPM README injection. |
| **SC2** | 4 | 5 | 5 | 1 | 4 | **17** | "awesome" list supply chain is currently undefended. |

## Priority top 10 (highest F+A+B+C−D)

| Rank | ID | Pri | Why |
|:----:|----|:---:|-----|
| 1 | **E2** | 18 | SKILL.md supply chain — invisible, automatic, broad. |
| 2 | **L4** | 17 | Reverse-DPA questionnaire — attacker just asks. |
| 2 | **M1** | 17 | RAG poisoning — amplifies across marketing output. |
| 2 | **E1** | 17 | Dependabot auto-merge via AI review. |
| 2 | **E3** | 17 | MCP tool-description poisoning. |
| 2 | **SC2** | 17 | "Awesome" skill-list supply chain. |
| 7 | **H1** | 16 | Trojan-horse resume — documented class. |
| 7 | **F1** | 16 | Invoice BEC — classic, high-dollar. |
| 7 | **P2** | 16 | Reverse-vendor questionnaire — same pattern as L4 in procurement. |
| 10 | **F4** | 15 | Mass vendor-onboarding CSV. |
| 10 | **A2** | 15 | Shared-memory poison — invisible persistence. |

## Pattern clusters (why this matters for the defensive framework)

The top-10 clusters collapse onto four root patterns:

### Cluster α — "Attacker-as-pseudo-trusted-source"
(L4, P2, F5, X3) — the agent mistakes an attacker-controlled message for an authoritative internal or audit request, because corporate communication norms assume the sender identity.

**Framework handle:** Primitive 7 (cross-channel consistency) + Primitive 1 (provenance tagging).

### Cluster β — "Untrusted-content drives trusted-action"
(L1, L5, S1, M1, H1, F1, F4, IT1, X4, C1, C4) — the agent reads content from one surface and writes to a more-privileged surface. This is the plurality of the catalog.

**Framework handle:** Primitive 3 (write-scope contracts) + Primitive 1 (provenance tagging) + Primitive 5 (HITL gates).

### Cluster γ — "Supply-chain / tool-description compromise"
(E1, E2, E3, SC1, SC2, P3, C1, IT2) — the compromise is in the *tooling* the agent uses, not in the content it consumes.

**Framework handle:** Primitive 2 (tool-description integrity) + Primitive 4 (outbound-link allowlist for the telemetry-exfil variants).

### Cluster δ — "Persistent poisoning with delayed detonation"
(M1, IT5, A2, C2, H4, X2) — the compromise lives in a memory store, RAG corpus, or fine-tune dataset and affects all future queries.

**Framework handle:** Primitive 6 (anomaly-aware retrieval/memory) + Primitive 8 (output-side provenance).

## Recommended defensive-phase sprint ordering

If we build the framework primitives in priority order, each sprint buys broad coverage:

1. **Sprint 1 — Provenance & write-scope (Primitives 1, 3, 5)** — covers Cluster β and most of α. Ships with detection against ~25 of the 52 scenarios.
2. **Sprint 2 — Tool-integrity & link allowlisting (Primitives 2, 4)** — covers Cluster γ. Ships with detection against ~8 more.
3. **Sprint 3 — Retrieval/memory classifiers + cross-modal normalization (Primitives 6, 9)** — covers Cluster δ and the OCR-class scenarios.
4. **Sprint 4 — Session-scoped auth + cross-channel verification (Primitives 7, 10)** — the architectural pieces; hardest but highest ceiling.

This ordering maximizes catalog-coverage-per-sprint and is defensible against an executive audience: each sprint has a concrete number of scenarios it measurably reduces.

## What a real customer threat-model looks like

When the framework is built, a customer intake is:

```
For each AI integration the customer has (CRM, ATS, AP, Notion, MCP, etc.),
   For each scenario in the catalog that maps to that integration,
      Check which primitives the customer has implemented.
      Report unmitigated scenarios as open risk.
Aggregate → a single CSV of open risks, sorted by priority score above.
```

The output is an **AI risk posture report** — something currently absent from most SOC2 / ISO / NIST-AI-RMF assessments.

## Known gaps in this assessment

- **Scores are expert-judgement, not empirical.** Next phase: validate top-10 against the CTF harness (`../_harness/`) by running end-to-end simulations.
- **Realism ratings drift as agent deployments mature.** Automation score will rise over the next 12 months as more companies adopt agent-platforms.
- **Detectability assumes vanilla corporate stack.** Advanced customers (e.g., with AI-specific DLP like Harmonic/Lasso) will score differently.
- **No attacker-skill differentiation.** A skilled attacker trivially bypasses detection on several of these; the `D` scores reflect the median attacker.

For the next working session, the explicit next step is to take the top-10 and instrument them against our harness (`attacks/_harness/`) to get real attack-success-rates per scenario.
