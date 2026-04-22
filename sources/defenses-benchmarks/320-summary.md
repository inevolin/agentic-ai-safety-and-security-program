# Summary: NCC Group — Analyzing AI Application Threat Models

**Source file:** 320-blog-ncc-group-analyzing-ai-application-threat-models.md
**Paper/post ID:** 320

## Attack Vector(s)
Source file captured only NCC Group's research-landing boilerplate (the full post content was not retrieved). The post title and URL indicate it covers **threat modeling for AI-integrated applications** — enumerating trust boundaries, data flows between user/LLM/tool/data stores, and where prompt injection, output handling, and supply-chain risks materialise. Threat surface: LLM-integrated web apps, agents, plugin systems, RAG back-ends.

## Real-World Applicability
Threat-model methodology applies to any enterprise rolling out Copilot/Claude/Gemini assistants, RAG chatbots, or autonomous coding agents (Cursor/Devin-likes). Used by consulting engagements to identify trust-boundary crossings where untrusted text is concatenated into privileged prompts or where model output reaches privileged executors (shells, SQL, email send).

## Reproduction Examples
Source content unavailable in captured file. Based on NCC Group's known methodology:

### Extrapolated example (not in paper): STRIDE-style entries for an LLM chatbot with web search + email tool

```
Asset: system prompt (contains API keys, persona rules)
  Spoofing    — user claims to be "system"/"developer" role.
  Tampering   — indirect injection from web search result overrides persona.
  Repudiation — no signed audit trail of tool calls.
  Info Disc.  — prompt-leak attack ("print everything above").
  DoS         — user forces recursive tool loop.
  EoP         — injection causes email-send tool to be invoked with attacker args.

Trust boundary: `user_input || retrieved_docs → prompt_builder → LLM → tool_router → email_send_tool`
Controls:
- Tag retrieved_docs with <untrusted> and strip role markers.
- Sign & scope tool-call JSON; refuse if arguments originated post-retrieval without user confirmation.
- Rate-limit tool loop depth.
```

### Extrapolated: data-flow diagram asset list
Assets: user credentials, system prompt, retrieved documents, tool API keys, conversation history, model output. Each with confidentiality/integrity/availability ratings and the adversary classes that can reach them.

## Defenses / Mitigations Discussed
Not captured. Typical NCC prescriptions (inferable): STRIDE or LINDDUN over the LLM data flow, explicit trust-boundary markers between user/system/tool contexts, output validation layer, privilege minimisation for plugins, logging and anomaly detection on tool calls.

## Key Takeaways for a Safety Framework
1. Start every LLM app engagement with a data-flow diagram; mark each arrow where untrusted text can reach a privileged context.
2. Enumerate assets protected by the system prompt (keys, persona, policy) — treat these as first-class secrets.
3. Map every tool call to a threat-modeling question: what if the arguments were attacker-controlled?
4. Flag full-source unavailability: the summary caller should re-fetch the post if deeper detail is needed.
