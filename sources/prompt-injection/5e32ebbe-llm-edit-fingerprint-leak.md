# LLM Edit Fingerprint Leak

**Promptfoo CVE ID:** `5e32ebbe`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T17:33:53.431Z  
**Source paper:** [Reverse-Engineering Model Editing on Language Models](https://arxiv.org/abs/2602.10134)  
**Tags:** `model-layer`, `extraction`, `side-channel`, `fine-tuning`, `whitebox`, `data-privacy`  
**Affected models (as reported):** Llama 3 8B, Qwen 2.5 7B

## Description

A side-channel information leakage vulnerability exists in the "locate-then-edit" paradigm of Large Language Model (LLM) knowledge editing, specifically affecting algorithms such as ROME, MEMIT, and AlphaEdit. The parameter update matrix ($\Delta W$) generated during the editing process preserves the algebraic structure of the edited data. Specifically, the row space of the parameter difference matrix encodes a mathematical fingerprint of the key vectors associated with the edited subjects. An attacker with access to the model weights before and after an edit (white-box access) can leverage this structure via spectral analysis (Singular Value Decomposition) to reconstruct the linear subspace spanned by the edited knowledge. This allows the attacker to reverse-engineer the specific subjects (e.g., entities, names) involved in the edit and, through entropy reduction analysis, recover the semantic prompts (context) used, thereby extracting the sensitive information the edit was intended to modify or erase.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
