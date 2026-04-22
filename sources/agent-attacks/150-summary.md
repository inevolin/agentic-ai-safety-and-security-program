# Summary: Architecting Secure AI Agents — Perspectives on System-Level Defenses Against Indirect Prompt Injection

**Source file:** 150-arxiv-2603.30016-architecting-secure-ai-agents-perspectives-on-system-level-defenses-ag.md
**Paper/post ID:** 150

## Attack Vector(s)
Position/architecture paper (NVIDIA + JHU, 2026). Threat model: general-purpose LLM agents whose external **environment is partially compromised** (emails, webpages, tool outputs carrying injection payloads) while system + user prompts are trusted. Argues model-level and text-level defenses alone are insufficient; proposes **system-level architecture** decomposing the agent into {orchestrator, plan/policy approver, executor, policy enforcer}.

Attack categories covered: indirect prompt injection → malicious replan/policy update, tool-output hijacking, cross-origin context poisoning.

## Real-World Applicability
- Design pattern for any agentic system that plans + executes tool calls (Claude Code, Operator, LangChain agents).
- Directly targets the limitations exposed by AgentDojo, InjecAgent, and similar benchmarks.
- Applicable to coding, email-automation, financial, and healthcare agents.

## Reproduction Examples
No attack payloads reproduced. Paper's artifacts are architectural:

```
High-level agent architecture:
  Input Task → Orchestrator → Plan + Policy
                     ↓
            Plan/Policy Approver (security gate)
                     ↓
                 Executor → concrete Action
                     ↓
            Policy Enforcer (approve or block)
                     ↓
            Environment ← or ← negative feedback → Executor
                     ↓ (triggers plan/policy update next iteration)
```

Plan formulation (verbatim):
```
execution step  e := (a, I, O)    # action, inputs, outputs
plan            p := (e_1, ..., e_T)    # ordered sequence (or DAG)
```

Example plan representations for "summarize the most recent email from Alice and draft a reply":
```
Natural-language checklist:
  (i) Search for the most recent email from Alice
  (ii) Summarize key points
  (iii) Draft a polite reply
```

## Defenses / Mitigations Discussed
Three positions:

**Position 1** — Dynamic replanning and security policy updates are necessary for real-world agents. Static plan-execution isolation breaks on deprecated APIs, missing deps, benign runtime errors. Central research problem: distinguish benign replans from malicious ones.

**Position 2** — LLM (or learned) judges are necessary for certain security decisions, but they **must not consume arbitrary environmental text**. Use them only over narrowly-scoped, structured artifacts (e.g., "is this proposed plan/policy change malicious?"). This narrows the attack surface enough to co-design with model-level defenses.

**Position 3** — Personalization and human-in-the-loop are core design considerations for ambiguous cases. Examples:
- Semantic ambiguity ("fetch all *urgent* emails" — "urgent" is user-dependent).
- Objective-alignment ambiguity (install-this-package trust decisions — often indistinguishable from normal behavior without human judgment).

Critique of current benchmarks:
- AgentDojo: only 6 of 97 tasks require policy update/replanning.
- All benchmarks use non-adaptive, static attack payloads — no dynamic attacker optimizing against the defense.
- Both utility and security are overestimated.

## Key Takeaways for a Safety Framework
- Treat agent design as {orchestrator, approver, executor, policy-enforcer} — do not collapse plan and execution into one LLM call.
- Dynamic policy updates are required; static allowlists fail open in production.
- When an LLM must mediate a security decision, give it only **structured inputs** and a **narrowly-scoped yes/no question**, not the raw environmental text.
- Benchmarks must include adaptive attackers and multi-step replanning tasks — single-shot static benchmarks underestimate real risk.
- Build in explicit human-in-the-loop checkpoints for ambiguous semantic/intent cases (package installs, "urgent" email triage, privileged-tool invocations).
- System-level defenses provide explainability and a cleaner target for co-designed model-level robustness.
