# Summary: Embrace The Red — Microsoft Copilot Data Exfiltration via Indirect Prompt Injection (duplicate of 311)

**Source file:** 314-blog-embrace-the-red-microsoft-copilot-data-exfiltration-via-indirect-promp.md
**Paper/post ID:** 314

This file contains the identical content as 311 (same source URL). See `311-summary.md` for the complete exploit-chain analysis, including the verbatim prompt-injection payload, Unicode-Tags ASCII Smuggling technique, automatic tool invocation (Slack MFA search), hyperlink exfiltration, and the MSRC disclosure timeline.

## Attack Vector(s)
Indirect prompt injection → automatic tool invocation → ASCII smuggling → hyperlink exfiltration. Target: M365 Copilot.

## Reproduction Examples
Main payload (verbatim) — see 311-summary.md.

## Defenses / Mitigations Discussed
- Strip Unicode Tag codepoints on both input and output.
- Disable auto tool invocation after untrusted content in context.
- Do not render clickable hyperlinks.

## Key Takeaways for a Safety Framework
See 311-summary.md.
