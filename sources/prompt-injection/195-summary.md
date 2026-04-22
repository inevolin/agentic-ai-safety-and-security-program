# Summary: PIDP-Attack — Combining Prompt Injection with Database Poisoning on RAG Systems

**Source file:** 195-arxiv-2603.25164-pidp-attack-combining-prompt-injection-with-database-poisoning-attacks.md
**Paper/post ID:** 195

## Attack Vector(s)
Compound attack on RAG systems combining (a) query-time prompt injection (malicious characters appended to queries) AND (b) limited database poisoning (injecting a small number of poisoned passages). Crucially, unlike prior PoisonedRAG / PR-Attack / Corpus Poisoning / Disinformation-Attack, PIDP does NOT require prior knowledge of user queries — the attacker does not need to know target questions in advance.

## Real-World Applicability
Targets general RAG deployments (Wikipedia-backed QA, enterprise document retrieval, customer-support bots). Evaluated on Natural Questions, HotpotQA, MS-MARCO across 8 LLMs. Improves attack success rates 4–16% over PoisonedRAG on open-domain QA while maintaining high retrieval precision. Real-world application: influence operations, targeted disinformation, commercial-promotion injection.

## Reproduction Examples
Attack components (first 150 lines):
- Corpus-path manipulation (poison passages in DB).
- Query-path manipulation (append adversarial characters at inference time without knowing exact query).
- Retrieval steering (ensure poisoned passages rank top-k).
- Unaware of user query — the adversarial characters are query-agnostic.
- Black-box retriever and LLM assumed.

Conceptual pseudocode implied by table:
```
Step 1: Attacker injects N poisoned passages into RAG knowledge base, each containing
         (semantic retrieval bait) + (malicious instruction to LLM).
Step 2: At user query time, attacker appends adversarial character suffix to query
         (achievable via e.g., browser extension, form injection, or DOM-level manipulation).
Step 3: Retriever finds poisoned passages via suffix-induced similarity; LLM follows
         embedded instruction; user sees attacker-chosen answer.
```

## Defenses / Mitigations Discussed
Paper is an attack; no defense proposed. Shows that PR-Attack/PoisonedRAG defenses designed for known-query setups do not cover query-agnostic compound attacks.

## Key Takeaways for a Safety Framework
- Defend both corpus and query paths; either alone leaves gaps.
- Monitor for adversarial character suffixes on queries (non-ASCII, high-perplexity, unusual token sequences).
- Scan ingested corpus for instruction-like passages embedded in content (imperatives, addressing the LLM directly).
- Retrieval-side detection: suspicious top-k passages whose content contains instruction patterns should be blocked or sanitized before generation.
- Evaluate compound attacks where attacker controls BOTH corpus and query surfaces, even partially.
