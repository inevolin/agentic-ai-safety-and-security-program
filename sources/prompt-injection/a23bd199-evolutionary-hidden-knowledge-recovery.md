# Evolutionary Hidden Knowledge Recovery

**Promptfoo CVE ID:** `a23bd199`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T21:12:53.791Z  
**Source paper:** [REBEL: Hidden Knowledge Recovery via Evolutionary-Based Evaluation Loop](https://arxiv.org/abs/2602.06248)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `extraction`, `fine-tuning`, `blackbox`, `data-privacy`, `safety`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) subjected to machine unlearning techniques (specifically AltPO, GradDiff, IDKDPO, IDKNLL, UNDIAL, NPO, and SimNPO) contain a vulnerability regarding the persistence of latent knowledge. Despite achieving high "forgetting" scores on standard, benign benchmarks, these models remain susceptible to black-box evolutionary adversarial attacks. An attacker can utilize an automated framework (REBEL) comprising a "Hacker" model and a "Judge" model to iteratively mutate prompts. By optimizing for leakage scores, the attacker can evolve benign queries into adversarial jailbreaks (utilizing strategies such as role-play, hypothetical framing, and context distortion) that successfully elicit the "unlearned" information. This vulnerability allows for the recovery of sensitive, copyrighted, or hazardous data (e.g., biosecurity information) that was intended to be removed.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
