# Pervasive Multi-turn Jailbreaks

**Promptfoo CVE ID:** `13c741bf`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T22:06:50.186Z  
**Source paper:** [Death by a Thousand Prompts: Open Model Vulnerability Analysis](https://arxiv.org/abs/2511.03247)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `extraction`, `prompt-leaking`, `blackbox`, `safety`, `integrity`, `data-security`  
**Affected models (as reported):** GPT-4o 20B, Llama 3.3 70B, Mistral Large, DeepSeek-V3, Qwen 2.5 32B, Gemma 1B, Phi-4

## Description

Multiple open-weight Large Language Models (LLMs)âspecifically those prioritizing capability over safety alignmentâexhibit a critical vulnerability to adaptive multi-turn prompt injection and jailbreak attacks. While these models effectively reject isolated, single-turn adversarial inputs (averaging ~13.11% Attack Success Rate), they fail to maintain safety guardrails and policy enforcement across extended conversational contexts. By leveraging iterative strategies such as "Crescendo" (gradual escalation), "Contextual Ambiguity," and "Role-Play," attackers can bypass safety filters. In automated testing, this vulnerability resulted in Attack Success Rates (ASR) increasing by 2x to 10x, reaching up to 92.78% in Mistral Large-2 and 86.18% in Qwen3-32B. The vulnerability stems from the models' inability to retain forceful rejection states or detect intent drift over long context windows.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
