# Summary: Embrace The Red — Spyware Injection into LLM Memory (ChatGPT Hacking Memories)

**Source file:** 315-blog-embrace-the-red-spyware-injection-into-llm-memory.md
**Paper/post ID:** 315

## Attack Vector(s)
Indirect prompt injection that abuses ChatGPT's **memory (`bio`) tool** to persist attacker-chosen content across sessions. Three tested delivery channels:
1. **Connected Apps** (Google Drive / OneDrive docs referenced in conversation) — full success.
2. **Image upload / file analysis** — full success.
3. **Bing Browsing** — fix partially deployed; bypasses via tool-chaining (image gen + memory write) and delayed-tool-invocation tricks.

Additional impact: can **delete all existing memories** with a single injection.

## Real-World Applicability
- ChatGPT memory is **on by default** — every user is exposed.
- Connected App (Google Doc containing injection) is the easiest path.
- Persistence: tainted memories are re-injected into the Model Set Context in every future conversation.
- OpenAI triaged the initial report as "Model Safety" not security; Rehberger disputes.

## Reproduction Examples
Memory API surface:
- Tool name: `bio` (`to=bio`)
- Natural-language invocation works: *"Please remember that I like cookies"* → "Memory updated".
- Memory display: "Model Set Context" section at end of system prompt on recall.

Bypass-on-browsing techniques (verbatim):
- **Tool chaining**: page instructs Copilot-like to *create an image* and simultaneously *remember that "I like ice cream and cookies"*.
- **Delayed execution**: multi-turn, define trigger words that later cause the memory tool to fire (technique originally described for Google Gemini).

## Defenses / Mitigations Discussed
- Do not automatically invoke tools once untrusted data enters chat context.
- Require user confirmation before persisting any memory or deleting memories.
- Limit batch-insert — dozens of memories were writable in a single injection.
- UI: always surface "Memory updated"; give users a one-click audit-and-revert.
- Users: disable memory feature entirely if unsure.

## Key Takeaways for a Safety Framework
- Memory write = state-changing action; apply same controls as send-email/delete-file.
- Enforce rate-limit on memory inserts per single turn; deny batches > N.
- Block memory writes if ANY untrusted-data source touched this turn's context (taint-based gate).
- Red-team checklist: document upload → memory invoke, image upload → memory invoke, browse → memory invoke; all must require user confirmation.
- Detect delayed-trigger patterns ("If the user says X later, call tool Y") in assistant output — suggest blocking the turn.
