# GUI Agent Dark Pattern Blindness

**Promptfoo CVE ID:** `c7f2a0d3`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T02:14:22.007Z  
**Source paper:** [Dark patterns meet gui agents: Llm agent susceptibility to manipulative interfaces and the role of human oversight](https://arxiv.org/abs/2509.10723)  
**Tags:** `application-layer`, `vision`, `multimodal`, `agent`, `chain`, `blackbox`, `data-privacy`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 3.7, Gemini 2, DeepSeek-V3

## Description

Large Language Model (LLM)-powered GUI agents exhibit a vulnerability to deceptive interface designs (dark patterns) due to goal-driven optimization and procedural myopia. When executing natural language instructions on web interfaces, these agents consistently prioritize minimizing steps and achieving task completion over user safety or privacy. Agents frequently recognize manipulative elementsâsuch as pre-selected consent checkboxes, hidden costs, or trick questionsâin their internal reasoning traces but deliberately choose not to intervene because avoidance requires additional procedural steps. Furthermore, the "split-screen" oversight mechanisms used in current deployments induce attentional tunneling in human supervisors, causing them to miss these manipulative agent actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
