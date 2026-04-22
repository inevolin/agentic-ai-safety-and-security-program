# SMILES-Prompting LLM Jailbreak

**Promptfoo CVE ID:** `0e96c4d8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-28T23:33:04.486Z  
**Source paper:** [SMILES-Prompting: A Novel Approach to LLM Jailbreak Attacks in Chemical Synthesis](https://arxiv.org/abs/2410.15641)  
**Tags:** `prompt-layer`, `jailbreak`, `model-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, Llama 3 70B Instruct

## Description

Large Language Models (LLMs) used in chemical synthesis applications are vulnerable to a novel attack vector, dubbed "SMILES-prompting," which leverages the Simplified Molecular-Input Line-Entry System (SMILES) notation to bypass safety mechanisms and elicit instructions for synthesizing hazardous substances. The attack exploits the LLM's inability to effectively filter or interpret SMILES strings representing dangerous chemicals, leading to the disclosure of synthesis procedures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
