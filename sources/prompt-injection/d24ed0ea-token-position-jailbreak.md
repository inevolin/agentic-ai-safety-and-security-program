# Token Position Jailbreak

**Promptfoo CVE ID:** `d24ed0ea`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T02:54:00.318Z  
**Source paper:** [Beyond Suffixes: Token Position in GCG Adversarial Attacks on Large Language Models](https://arxiv.org/abs/2602.03265)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `whitebox`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Mistral 7B, Qwen 2.5 7B, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks that exploit the positional sensitivity of adversarial tokens. Existing gradient-based attacks, such as the Greedy Coordinate Gradient (GCG), conventionally append adversarial tokens as a suffix to the user prompt. This vulnerability allows attackers to bypass safety alignment mechanisms with significantly higher success rates by optimizing adversarial tokens as a prefix (GCG-Prefix) or relocating existing adversarial suffixes to the beginning of the prompt. Safety evaluations that restrict testing to fixed adversarial token positions (suffixes) fail to detect these successful jailbreaks, as models exhibit distinct attention dynamics and refusal behaviors based on the structural placement of the adversarial sequence.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
