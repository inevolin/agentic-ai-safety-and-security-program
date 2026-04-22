# Summary: Social Engineering with AI (Matecas, Kieseberg, Tjoa)

**Source file:** 00-ROOT-social-engineering-with-ai-matecas-et-al.md
**Paper/post ID:** 00

## Attack Vector(s)
Root survey paper on AI-enabled social engineering. Threat model: commodity LLMs as attacker copilots lowering the barrier for crafting spear-phishing, vishing (voice phishing), chatbot-based social-engineers, and CFO fraud. Target surface: human victims via email/voice/chat; LLM itself used as tooling.

## Real-World Applicability
- CFO-fraud / Business Email Compromise (BEC) where LLM drafts persona-aligned messages.
- Cross-LLM spear-phishing comparisons (GPT-4, Claude, Gemini, open-weight).
- Voice-cloning + LLM for vishing at scale.
- Chatbot trained as social engineer that elicits credentials or sensitive info conversationally.

## Reproduction Examples
No reproducible payloads in source text (MDPI-blocked; only abstract and topic list available). Referenced threat-model subjects:
- Spear-phishing comparisons across LLMs
- Voice phishing (vishing) with LLMs
- Training an AI chatbot to act as a social engineer
- CFO-fraud attack blueprint

## Defenses / Mitigations Discussed
Not reproduced in the available stub.

## Key Takeaways for a Safety Framework
- Detect LLM-authored phishing artefacts across text/voice channels.
- Track LLM usage patterns that indicate persona-aligned message generation (BEC precursors).
- Build classifiers for chatbots impersonating employees/finance roles.
- Monitor for CFO-fraud specific lexical patterns (wire-transfer urgency, authority framing).
