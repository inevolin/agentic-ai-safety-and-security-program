# Summary: OpenClaw PRISM — Zero-Fork Defense-in-Depth Runtime Security Layer for Tool-Augmented LLM Agents

**Source file:** 202-arxiv-2603.11853-openclaw-prism-a-zero-fork-defense-in-depth-runtime-security-layer-for.md
**Paper/post ID:** 202

## Attack Vector(s)
Runtime security layer addressing the fact that tool-augmented agent runtimes have attack surface distributed across many stages: user ingress, prompt construction, tool invocation, tool-result ingestion, outbound messages, sub-agent spawn, control-file tampering. Single-checkpoint defenses fail because indirect prompt injection can arrive via fetched content AFTER user-input checking, and risk accumulates across turns. PRISM distributes enforcement across 10 lifecycle hooks and combines heuristic + LLM scanning + policy enforcement.

## Real-World Applicability
Targets OpenClaw-based agent gateways (tool-using agents with web fetch, shell exec, file persist, outbound messaging). Zero-fork (no upstream code modification) — in-process plugin + optional sidecars. Maps threats to OWASP LLM Top 10 + MITRE ATLAS subset mediable at the gateway. Useful for enterprise LLM gateways, browser-using agents, code-agents.

## Reproduction Examples
10 lifecycle hooks organized into 5 phases:
```
Ingress:       message_received, before_prompt_build
Pre-execution: before_tool_call
Post-execution: after_tool_call, tool_result_persist
Outbound:      before_message_write, message_sending
Lifecycle:     sub_agent_spawn, session_end, gateway_startup
```

before_tool_call enforcement:
- Block high-risk tools at elevated session risk.
- Reject shell metacharacters and trampolines (`bash -c`, `python -c`).
- Executable allowlist/denylist.
- Protected path checks.
- Reject private-network destinations (SSRF).
- Domain-tier handling.

Risk engine: session- and conversation-scoped accumulation with TTL-based decay; graduated response thresholds. Scanner sidecar: heuristic-first, escalate suspicious tool output to LLM classifier; scanner failure adds bounded risk (fail-open for availability, fail-closed would block legitimate traffic).

Outbound DLP: regex secret patterns (API keys, tokens) + conversation-risk block before emit.

Audit plane: append-only chained audit records with integrity verification; hot-reloadable policy; dashboard allow workflows.

## Defenses / Mitigations Discussed
- Defense-in-depth across 10 hooks (lifecycle-wide).
- Hybrid heuristic + LLM scanning (fast-then-deep).
- Session-level risk accumulation with decay (long-horizon escalation detection).
- Unified policy: tools, paths, private networks, domain tiers, outbound secrets.
- Tamper-evident audit records.
- Operator-facing controls (hot-reload, dashboard allowlist).

Out-of-scope: model poisoning, full host compromise, kernel attacks, supply-chain outside PRISM deployment.

## Key Takeaways for a Safety Framework
- Agent security is a distributed runtime problem; concentrate controls at multiple lifecycle points, not a single input filter.
- Low-grade signals across turns compose into attacks; implement session-scoped risk accumulation with TTL decay.
- Treat tool-returned content as untrusted; scan and sanitize BEFORE it enters future prompts.
- Enforce policy at before_tool_call: block private-network, trampoline commands, privileged path writes.
- Outbound DLP + conversation-risk halt is a valuable last-mile control.
- Audit plane needs integrity (chained records) to survive attacker tampering.
- Zero-fork plugin architecture lowers operational friction — prerequisite for adoption.
- Map mediated threats explicitly to OWASP/MITRE taxonomies for consistent reporting.
