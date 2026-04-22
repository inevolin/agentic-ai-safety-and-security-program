# Summary: FATH — Formatting AuThentication with Hash-based tags (Test-time Defense against IPI)

**Source file:** 178-arxiv-2410.21492-fath-authentication-based-test-time-defense-against-indirect-prompt-in.md
**Paper/post ID:** 178

## Attack Vector(s)
Defense paper targeting indirect prompt injection (IPI) in LLM-integrated applications (Bing, GPTs store, custom agents). Threat model: attacker controls external text (websites, emails, messages) ingested by the LLM but not the user instruction or template. Evaluates attacks including Naive, Escape Characters, Context Ignoring, Fake Completion, Combined Attack, and gradient-based optimization attacks (worst case).

## Real-World Applicability
Deployed targets: Microsoft New Bing, OpenAI GPTs store, Code Interpreter, Web Browsing, DALL-E tool, AutoGPT, LangChain, Mind2web, ReAct. Reference to concrete prior exploit: Wu et al. (2024) exfiltrating chat history via code-interpreter + web access (OWASP LLM Top 1).

## Reproduction Examples
Adaptive attack that breaks naive tag-based defenses:
```
"ignore previous instructions" defeats "ignore additional instructions"
Attackers insert </data> fake closing tags to break segregation.
```
FATH defense flow:
1. Secure input formatting with dynamic delimiters.
2. Prompt LLM to respond to ALL instructions (user + any injected) but wrap each response in authentication tags tied to an HMAC-derived secret key generated per-query. Example format: `<answer key="HMAC_hash">response</answer>`.
3. Rule-based parser extracts responses; accept only those wrapped with the matching key.

Because attackers cannot predict the per-query HMAC key, injected responses lack authenticable wrappers and are dropped. Results: near-0% ASR on GPT-3.5 across attacks; 0% on Llama3 for optimization-based attacks; 0% on InjecAgent tool-use benchmark.

## Defenses / Mitigations Discussed
- Training-time: adversarial fine-tuning (Chen et al., Yi et al.) — effective but expensive, infeasible for closed-source LLMs.
- Test-time: delimiter isolation, "ignore additional instructions" prompts, spotlighting (Hines et al.) — all broken by adaptive attackers.
- FATH (proposed): per-query HMAC authentication tags tied to user instruction, rule-based output filtering.

## Key Takeaways for a Safety Framework
- Don't rely on static delimiters or negative-instruction "ignore additional text" prompts; both lose under adaptive attack.
- Use per-session/per-query secret nonces to authenticate which response segments came from which instruction.
- Parse LLM output with a verifier that requires a cryptographically-tied tag; drop unauthenticated segments before rendering to the user or dispatching tools.
- Evaluate defenses against adaptive attackers who know the defense scheme — Threat Modeling 2 is the realistic case.
- Optimization-based (GCG-style) attacks are a worst-case baseline; any proposed defense should survive them.
