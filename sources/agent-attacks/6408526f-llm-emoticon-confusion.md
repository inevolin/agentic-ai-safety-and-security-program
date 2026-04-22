# LLM Emoticon Confusion

**Promptfoo CVE ID:** `6408526f`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T03:52:54.992Z  
**Source paper:** [Small Symbols, Big Risks: Exploring Emoticon Semantic Confusion in Large Language Models](https://arxiv.org/abs/2601.07885)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `agent`, `blackbox`, `data-security`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-5.1, Claude 4.5, Gemini 2, DeepSeek-V3 685B, Qwen 2.5 480B

## Description

A vulnerability in Large Language Models (LLMs) and autonomous agent frameworks, termed "Emoticon Semantic Confusion," allows for the generation and execution of unintended, potentially destructive code. Because ASCII-based emoticons (e.g., `~`, `*`, `!(^^)!`) heavily overlap with the symbol space of programming operators, shell wildcards, and file paths, LLMs frequently misinterpret these affective, non-verbal cues as executable directives. When processing user instructions in code-generation or agentic workflows, this syntactic ambiguity leads to "silent failures"âthe generation of syntactically valid but semantically erroneous commands that bypass standard static analysis and alter the intended execution scope.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
