# Summary: PlanGuard — Defending Agents against Indirect Prompt Injection via Planning-based Consistency Verification

**Source file:** 185-arxiv-2604.10134-planguard-defending-agents-against-indirect-prompt-injection-via-plann.md
**Paper/post ID:** 185

## Attack Vector(s)
Defense for LLM agents against Indirect Prompt Injection (IPI) from emails, webpages, retrieved documents. Root cause: "Context Mixing" — the LLM cannot distinguish trusted user instructions from untrusted external data within a single context window. Evaluated on InjecAgent benchmark: Direct Harm (unauthorized transactions) and Data Stealing scenarios.

## Real-World Applicability
Applies to tool-integrated agents using LangChain/ReAct/AutoGPT patterns. Threat: malicious content in retrieved sources hijacks the agent into invoking unauthorized tools (wire transfers, data exfiltration, email forwarding). Reduces ASR from 72.8% to 0% on InjecAgent; 1.49% false positive rate.

## Reproduction Examples
Defense architecture:
1. Isolated Planner: separately receives ONLY the user's initial instruction, no external data, produces a reference plan of valid actions.
2. Agent: full ReAct-style execution over retrieved content.
3. Action Gateway: every tool call by the Agent is compared to the reference plan.
4. Hierarchical verification:
   - Hard constraint: tool name must match; reject unauthorized tools outright.
   - Intent Verifier: when parameters differ, ask an LLM judge whether the deviation is a benign formatting variance or a malicious hijacking.

Paper is defense-focused with no novel payloads; uses InjecAgent's attacks (Direct Harm, Data Stealing) as test corpus.

## Defenses / Mitigations Discussed
PlanGuard (proposed). Critiques of prior approaches:
- Classifier-based detection: poor generalization to novel attacks.
- Perplexity-based detection: high FPR on benign complex content.
- Instruction tuning: expensive, opaque.
- Rule-based execution monitors: rigid.
- Model self-reflection: unreliable on compromised inputs.

## Key Takeaways for a Safety Framework
- Architectural instruction/data isolation (Isolated Planner) gives provable safety vs depending on aligned self-reflection.
- Plan BEFORE exposure to untrusted content; use the plan as a reference to gate subsequent tool calls.
- Allow for stochastic benign variance with an Intent Verifier to avoid blocking legitimate paraphrased actions.
- Tool allowlist derived from the isolated plan beats global allowlists — limits scope per user query.
- Defense in depth: pair Action Gateway with rate limiting, human approval for high-privilege tools.
