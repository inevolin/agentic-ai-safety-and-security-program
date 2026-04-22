# Summary: BackdoorAgent — A Unified Framework for Backdoor Attacks on LLM-Based Agents

**Source file:** 220-arxiv-2601.04566-backdooragent-a-unified-framework-for-backdoor-attacks-on-llm-based-ag.md
**Paper/post ID:** 220

## Topic & Contribution
Feng, Li, Wu, Tan, Guo, Ding, Zhai, Ma, Jiang (Fudan, SMU, Alibaba, Deakin, HIAT, Shanghai Innovation Institute). Proposes **BackdoorAgent**, the first modular, stage-aware, agent-centric framework for systematically characterizing backdoor threats across the three functional stages of LLM-agent workflows: **Planning, Memory, Tools**. Releases a standardized benchmark over four agent apps (Agent QA, Agent Code, Agent Web, Agent Drive) in language-only and multimodal settings. Code: github.com/Yunhao-Feng/BackdoorAgent.

## Threat Model / Scope
Adversary implants a hidden trigger τ into outputs of one workflow stage. Benign trajectory `A(q)` → benign; triggered `A^τ(q)` → backdoor behavior. Because intermediate artifacts (plans p_t, memory m_t, tool outputs o_t) are written back into context `x_{t+1} = x_t ∪ {p_t, m_t, o_t}` and internal state, the trigger **propagates across steps and stages**. Access and persistence vary by attack (Table 1).

## Key Technical Content
Agent formalism:
- Planning: `p_t = P(q, x_t, s_t)`
- Memory: `m_t = M(q, x_t, s_t, p_t)`
- Tools: `o_t = T(q, x_t, s_t, p_t, m_t)`
- Update: `x_{t+1} = x_t ∪ {p_t, m_t, o_t}`, `s_{t+1} = UpdateState(s_t; p_t, m_t, o_t)`

Attacked agent: `A^τ ∈ { (P_τ, M, T), (P, M_τ, T), (P, M, T_τ) }`.

Stage-oriented taxonomy (Table 1, seven representative attacks):

| Attack       | Planning | Memory | Tools | Access    | Persistence        | Stealth | Objective  |
|--------------|----------|--------|-------|-----------|--------------------|---------|------------|
| BadChain     | ✓        | ✗      | ✗     | Black-box | Short-term         | Low     | Hijack     |
| BadAgent     | ✓        | ✗      | ✗     | White-box | Short-term         | Low     | Disruption |
| PoisonedRAG  | ✗        | ✓      | ✗     | White-box | Long-term          | Medium  | Hijack     |
| TrojanRAG    | ✗        | ✓      | ✗     | White-box | Long-term          | Medium  | Control    |
| AgentPoison  | ✗        | ✓      | ✗     | White-box | Long-term          | High    | Control    |
| DemonAgent   | ✗        | ✗      | ✓     | White-box | Session-persistent | High    | Control    |
| AdvAgent     | ✗        | ✗      | ✓     | Black-box | Short-term         | High    | Disruption |

Framework: explicit hook points at plan generation, retrieval call, tool exec/return. Standardizes (i) prompt construction, (ii) tool-call formatting, (iii) memory retrieval (indexing, top-k, rerank, insertion). Trajectory logging `T(q) = {x_t, s_t, p_t, m_t, o_t}_{t=0..T-1}` for reproducible replay.

Representative agent tasks:
- **Agent QA** — retrieval-grounded reasoning; induce incorrect but fluent answers.
- **Agent Code** — tool-grounded code synthesis; trigger destructive ops (DB deletion) while code appears correct.
- **Agent Web** — multimodal web interaction; interface misdirection (wrong purchase).
- **Agent Drive** — closed-loop sequential decisions; unsafe control (sudden stop) via compounding small perturbations.

Empirical trigger persistence (GPT backbone):
- **Planning** attacks: 43.58%
- **Memory** attacks: 77.97%
- **Tool-stage** attacks: 60.28%

→ Memory backdoors are the most persistent channel.

## Defenses / Mitigations
Attack/benchmark unification, not a defense. However, the stage taxonomy and trajectory logging directly support defender instrumentation, forensics, and cross-attack regression.

## Takeaways for a Defensive Tooling Framework
- Instrument agents at the **planning / memory / tool** hooks; log full trajectories `{x_t, s_t, p_t, m_t, o_t}` for forensic replay.
- **Memory attacks propagate most strongly** (~78% persistence) — harden vector-store/RAG pipelines with provenance tagging, retrieval sanitization, cross-session integrity checks.
- Defenses must span stages: a trigger in one module writes into future context and can influence later stages via the update rule.
- Standardize prompt construction, tool-call formatting, and memory retrieval protocols to enable deterministic replay and auditing.
- Use the four-application suite (QA, Code, Web, Drive) covering language-only + multimodal as a regression battery for agent safety releases.
- Evaluate defenses against the full taxonomy (BadChain, BadAgent, PoisonedRAG, TrojanRAG, AgentPoison, DemonAgent, AdvAgent), not a single attack class.
- Session-persistent attacks (DemonAgent-style) require integrity verification of skills, plans, and memory at session start.
