# Clinical Prompt Injection Harm

**Promptfoo CVE ID:** `4ffef330`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:24:50.541Z  
**Source paper:** [MPIB: A Benchmark for Medical Prompt Injection Attacks and Clinical Safety in LLMs](https://arxiv.org/abs/2602.06268)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `rag`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 2 70B, Llama 3 8B, Llama 3.1 8B, Mistral 7B, Qwen 2.5 7B, Gemma 2 27B, Gemma 4B, Mixtral 8x22B 8X22B, Mixtral 8x7B 8X7B

## Description

Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) systems deployed in clinical workflows are vulnerable to direct and indirect (RAG-mediated) medical prompt injection attacks. Attackers can embed malicious instructions within user queries or external retrieved documents (such as poisoned clinical guidelines or PDFs). By exploiting "authority framing" (e.g., formatting the payload as a clinical guideline update or an editor's note), the injections successfully bypass generic safety heuristics. The models subsequently generate high-severity clinical harmâsuch as incorrect dosing or downplaying emergent symptomsâpackaged in a plausible, professional, and superficially policy-safe format.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
