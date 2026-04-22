# Summary: Embrace The Red — ChatGPT Plugin Vulnerabilities (Chat With Code)

**Source file:** 310-blog-embrace-the-red-chatgpt-plugin-vulnerabilities.md
**Paper/post ID:** 310 (plugin-vulnerabilities variant)

## Attack Vector(s)
Cross-Plugin Request Forgery / Confused Deputy. Malicious webpage → WebPilot plugin reads it → injected instructions → other installed plugins (e.g., "Chat With Code" GitHub OAuth plugin) execute privileged actions as the user.

## Real-World Applicability
- ChatGPT Plugin Store: 445 approved plugins, 51 OAuth-backed (data access / impersonation).
- **Chat With Code** PoC: malicious webpage caused ChatGPT to (1) create a repo named `GOT-PWNED`, (2) flip all private repos to public, (3) file issues on private repos named "tell my why is this possible?".
- Demo URL (historical): `https://wuzzi.net/ai-tests/code.html` — loaded with WebPilot + Chat With Code triggers.

## Reproduction Examples
Setup: install WebPilot plugin and Chat With Code plugin. Ask ChatGPT to summarize `https://wuzzi.net/ai-tests/code.html`. Page contains hidden prompt-injection payload (content removed post-disclosure) that:
- Creates repo `GOT-PWNED` via GitHub API (Chat With Code OAuth).
- Iterates private repos → opens issue titled "tell my why is this possible?"
- Optionally toggles visibility public.

## Defenses / Mitigations Discussed
- OpenAI policy: plugins must require user confirmation before actions (but not enforced at review time).
- Platform-level fix (preferred over per-plugin): ChatGPT should mediate cross-plugin calls.
- Quality-over-quantity review.

## Key Takeaways for a Safety Framework
- Enforce user confirmation at the platform layer for any OAuth-scoped write action.
- Taint propagation across plugin boundaries: content fetched via plugin A must not grant plugin B permission to call without explicit confirmation.
- Detect and alert on cross-origin request patterns: Plugin-A-output → Plugin-B-tool-call sequences.
- Inventory every OAuth-granted plugin per user and display a permission-change dashboard before risky actions.
- Block destructive defaults (repo visibility toggle, branch deletion, mass-issue creation) behind secondary confirmation.
