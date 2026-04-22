# Summary: Embrace The Red — ChatGPT Plugin Vulnerabilities (Chat With Code) — duplicate copy

**Source file:** 312-blog-embrace-the-red-chatgpt-plugin-vulnerabilities.md
**Paper/post ID:** 312 (plugin-vulnerabilities variant — content duplicates file 310-blog-embrace-the-red-chatgpt-plugin-vulnerabilities.md)

This file is a duplicate of the "Chat With Code" ChatGPT plugin write-up. See `310-chatgpt-plugin-vulnerabilities-summary.md` for the full analysis.

## Attack Vector(s)
Cross-Plugin Request Forgery / Confused Deputy across ChatGPT plugins (WebPilot → Chat With Code).

## Reproduction Examples
Malicious page at `https://wuzzi.net/ai-tests/code.html`; WebPilot loads it, injected instructions cause Chat With Code to create `GOT-PWNED` repo and open issues in private repos.

## Defenses / Mitigations Discussed
- Platform-level confirmation gating for plugin OAuth actions.
- Enforce plugin-store review for action plugins.

## Key Takeaways for a Safety Framework
Same as 310-plugin-vulnerabilities-summary: enforce cross-plugin taint propagation and confirmation gates for privileged OAuth actions.
