# LLM Universal Graph Subversion

**Promptfoo CVE ID:** `4e219d50`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:57:34.244Z  
**Source paper:** [Can LLMs Fool Graph Learning? Exploring Universal Adversarial Attacks on Text-Attributed Graphs](https://arxiv.org/abs/2603.21155)  
**Tags:** `model-layer`, `prompt-layer`, `multimodal`, `embedding`, `blackbox`, `api`, `integrity`  
**Affected models (as reported):** Llama 3 8B, Llama 4 17B, Mistral 7B, DeepSeek-V3 671B, Qwen 2.5

## Description

An evasion vulnerability in Text-Attributed Graph (TAG) learning models allows attackers to induce targeted misclassifications via LLM-generated, coordinated perturbations to both graph topology and textual semantics. By identifying a semantically distant "influencer" node, an attacker can use a separate LLM to selectively delete highly relevant edges, insert a deceptive edge connecting the target to the influencer, and slightly modify the target node's text to include a keyword aligned with the influencer's category. This creates a stealthy "cross-modal shortcut" that enforces an incorrect label prediction. Because the perturbations are highly localized and budget-constrained (e.g., removing one edge, adding one edge, and shifting text semantics), the attack preserves global graph homophily, allowing it to bypass standard graph defenses and homophily-based anomaly detection in a strictly black-box setting.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
