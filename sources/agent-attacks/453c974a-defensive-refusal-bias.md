# Defensive Refusal Bias

**Promptfoo CVE ID:** `453c974a`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T23:11:41.454Z  
**Source paper:** [Defensive Refusal Bias: How Safety Alignment Fails Cyber Defenders](https://arxiv.org/abs/2603.01246)  
**Tags:** `model-layer`, `blackbox`, `agent`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Llama 3.3 70B

## Description

Safety-aligned Large Language Models (LLMs) exhibit a "Defensive Refusal Bias" vulnerability, resulting in a safety-induced denial-of-service for legitimate cybersecurity operations. The models systematically refuse authorized defensive queries when they contain security-sensitive terminology (e.g., "exploit," "payload," "shell") because current alignment mechanisms rely on semantic similarity to harmful training data rather than intent analysis. Paradoxically, explicit authorization signals (e.g., "I'm on the blue team" or "this is for NCCDC") amplify this effect, increasing refusal rates up to 50%, as models misclassify these contextual justifications as adversarial jailbreak attempts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
