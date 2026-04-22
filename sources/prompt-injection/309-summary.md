# Summary: Embrace The Red (Rehberger) — ASCII Smuggler / Unicode Tags

**Source file:** 309-blog-embrace-the-red-johann-rehberger-ascii-smuggler-unicode-tags.md
**Paper/post ID:** 309

## Attack Vector(s)
**ASCII Smuggling via Unicode Tags Block (U+E0000–U+E007F)**. The Tags block mirrors ASCII codepoints but renders invisibly in most UIs; LLM tokenizers still parse them. Used for:
1. Hiding instructions in pasted text, PDFs, web pages, GPT configurations — LLM executes them, human cannot see.
2. Causing LLM to *emit* invisible text (e.g., embedded in clickable links) that smuggles exfiltrated data past the user's eyes.

## Real-World Applicability
- Invisible instructions in websites, PDFs, databases, GPT instructions (attacker-owned custom GPTs).
- Defeats the "human-in-the-loop" mitigation: user approves/forwards text without realizing it contains hidden instructions.
- Riley Goodside PoC: invisible instructions in pasted text cause ChatGPT to invoke DALL-E.

## Reproduction Examples
Core technique: encode an instruction by mapping each ASCII byte `0x20-0x7E` into the corresponding Unicode Tag codepoint `U+E0020-U+E007E`. Tool: **ASCII Smuggler** (web) and a Python script by Joseph Thacker builds custom payloads.

Demonstration pattern (rehberger "Emitter GPT"):
```
[visible boundary] START [invisible tag-encoded message] END [visible boundary]
```
— user copies the whole span → paste into decoder reveals hidden instructions.

Reference: "A completely tag-unaware implementation will display any sequence of tag characters as invisible, without any effect on adjacent characters." — Unicode® Technical Standard #51

## Defenses / Mitigations Discussed
- Filter Unicode Tag codepoints (U+E0000–U+E007F) at both prompt-input and response-output boundaries.
- Applications should normalize inputs and strip non-printable code points before LLM ingestion.

## Key Takeaways for a Safety Framework
- Strip or flag any codepoint in U+E0000–U+E007F (Tags block) on ingest and on output.
- Also monitor: U+2060–U+2064 (word joiner/invisible operators), U+200B–U+200F (zero-width, bidi), U+FE00–U+FE0F (variation selectors), soft hyphen U+00AD.
- Emit warnings/visual indicators when suspicious codepoint densities appear in user-pasted text.
- Auditing requirement: LLM outputs containing hidden codepoints must never be shown unescaped in UI or included in clickable URLs.
- Consider multi-byte/UTF-16 evasions and confusables (Unicode Confusable-Detection per UAX #39).
