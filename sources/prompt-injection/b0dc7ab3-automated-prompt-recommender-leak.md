# Automated Prompt Recommender Leak

**Promptfoo CVE ID:** `b0dc7ab3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T03:09:20.636Z  
**Source paper:** [Exploring Approaches for Detecting Memorization of Recommender System Data in Large Language Models](https://arxiv.org/abs/2601.02002)  
**Tags:** `model-layer`, `prompt-layer`, `extraction`, `jailbreak`, `whitebox`, `data-privacy`  
**Affected models (as reported):** GPT-4o, Llama 3 3B, Llama 3.3 70B, Llama 4 1B

## Description

LLaMA-series models (specifically evaluated on LLaMA-1B and LLaMA-3B) exhibit memorization of structured recommender system training data, specifically the MovieLens-1M dataset. While manual prompting yields inconsistent results, the application of Automatic Prompt Engineering (APE)âwhich treats prompt design as an optimization problem using iterative refinementâallows for the successful extraction of item-level training data (e.g., movie titles and genres) with exact-match accuracy surpassing previous baselines. Furthermore, Context Compliance Attack (CCA) jailbreaks, which fabricate a conversation history to prime the model as a "lookup oracle," can bypass alignment to retrieve raw dataset entries. Unsupervised latent knowledge discovery methods (ContrastâConsistent Search) can further distinguish genuine dataset records from synthetic ones with over 92% accuracy, confirming the model stores latent knowledge of the training set structure.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
