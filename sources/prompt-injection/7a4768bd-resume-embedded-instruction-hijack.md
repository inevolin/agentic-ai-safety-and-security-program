# Resume Embedded Instruction Hijack

**Promptfoo CVE ID:** `7a4768bd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T20:48:17.499Z  
**Source paper:** [AI Security Beyond Core Domains: Resume Screening as a Case Study of Adversarial Vulnerabilities in Specialized LLM Applications](https://arxiv.org/abs/2512.20164)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `blackbox`, `integrity`  
**Affected models (as reported):** GPT-4o 120B, GPT-5, Claude 3.5, Llama 3.1 8B, Gemini 2, DeepSeek-R1 8B, Qwen 2.5 8B

## Description

Application-integrated Large Language Models (LLMs) deployed for automated resume screening and candidate ranking are vulnerable to indirect prompt injection via Adversarial Resume Injection. Malicious actors can embed adversarial contentâspecifically hidden instructions, invisible keywords, or CSS-concealed fabricated experienceâwithin resume documents. When the LLM processes the unstructured resume data alongside structured job requirements, these injections manipulate the model's reasoning process. This allows unqualified candidates to override the screening logic, forcing the model to classify them as a "STRONG_MATCH" or higher ranking regardless of their actual qualifications. The vulnerability stems from the model's failure to distinguish between privileged system instructions (job descriptions/scoring criteria) and untrusted user data (candidate profiles), particularly when utilizing standard attention mechanisms on concatenated inputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
