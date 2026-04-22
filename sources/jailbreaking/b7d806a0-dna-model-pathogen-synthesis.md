# DNA Model Pathogen Synthesis

**Promptfoo CVE ID:** `b7d806a0`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-06-11T23:59:51.224Z  
**Source paper:** [GeneBreaker: Jailbreak Attacks against DNA Language Models with Pathogenicity Guidance](https://arxiv.org/abs/2505.23839)  
**Tags:** `model-layer`, `jailbreak`, `extraction`, `blackbox`, `data-security`, `safety`  
**Affected models (as reported):** Evo1 7B, Evo2 1B, Evo2 40B, Evo2 7B, GPT-4o, PathoLM

## Description

DNA language models, such as the Evo series, are vulnerable to jailbreak attacks that coerce the generation of DNA sequences with high homology to known human pathogens.  The GeneBreaker framework demonstrates this by using a combination of carefully crafted prompts leveraging high-homology non-pathogenic sequences and a beam search guided by pathogenicity prediction models (e.g., PathoLM) and log-probability heuristics. This allows bypassing safety mechanisms and generating sequences exceeding 90% similarity to target pathogens.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
