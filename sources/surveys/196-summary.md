# Summary: SoK — The Attack Surface of Agentic AI (Tools and Autonomy)

**Source file:** 196-arxiv-2603.22928-sok-the-attack-surface-of-agentic-ai-tools-and-autonomy.md
**Paper/post ID:** 196

## Attack Vector(s)
Systematization of Knowledge (SoK) covering attack surface of agentic LLM systems: (a) tool/API use (code, plugins, browsing), (b) RAG over external corpora, (c) autonomous planning / multi-agent loops. Taxonomy covers prompt-level injections, knowledge-base poisoning, tool/plug-in exploits, multi-agent emergent threats. Synthesizes evidence from 20+ studies (2023–2025) plus industry reports (OWASP GenAI, MITRE ATLAS).

## Real-World Applicability
Real systems in scope: AutoGPT, BabyAGI, LangChain, enterprise RAG, copilots. Cites: one study found 19 RCE flaws across 11 agent frameworks with real exploits. Targeted RAG poisoning steers answers with a few planted docs. Tool bridges expose classic bugs (code exec, path traversal, SSRF).

## Reproduction Examples
No novel payloads — the paper is systematization. Key attacker-aware metrics defined:
- Unsafe Action Rate (UAR)
- Policy Adherence Rate (PAR)
- Privilege Escalation Distance (PED)
- Retrieval Risk Score (RRS)
- Time-to-Contain (TTC)
- Out-of-Role Action Rate (OORAR)
- Cost-Exploit Susceptibility (CES)

Agentic pipeline (reference model): User goal -> Planner (LLM or fixed) -> Orchestrator selects tool -> Tool executes (browser/code/file/API/inter-agent) -> State update -> repeat until stop.

Trust boundaries highlighted:
1. LLM free-form output -> execution environment (LLM is untrusted code generator; output must be validated).
2. Content ingress from untrusted sources -> model context.

## Defenses / Mitigations Discussed
Defense-in-depth framework across four layers: data, inference, planning/acting, environment. Controls discussed: input sanitization, retrieval filters, sandboxes, access control, AI guardrails. Practitioner playbook with phased checklist: design-time hardening, runtime monitoring, incident response.

## Key Takeaways for a Safety Framework
- Treat the LLM as an untrusted code generator; validate all emitted actions before execution.
- Measure UAR, PAR, PED, RRS, OORAR to quantify security posture of agents — baseline these pre-deployment.
- Map each attack to OWASP GenAI / MITRE ATLAS for consistent reporting.
- Minimum TCB: reduce attack surface by disabling unnecessary tools per agent role.
- Cross-layer defense: single-layer guards leave residual risk; combine retrieval filters + sandboxes + access control.
- Supply chain is critical: vet all skills, plugins, and RAG sources.
