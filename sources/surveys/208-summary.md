# Summary: SoK — Taxonomy of Attack Vectors and Defense Strategies for Agentic Supply Chain Runtime

**Source file:** 208-arxiv-2602.19555-sok-a-taxonomy-of-attack-vectors-and-defense-strategies-for-agentic-su.md
**Paper/post ID:** 208

## Attack Vector(s)
SoK positioning agent security as a runtime supply-chain problem. Introduces "Stochastic Dependency Resolution": unlike static software (imports resolve to verified binaries), agents assemble execution context at inference time via semantic probability, so retrieved docs, APIs, tools become implicit unvetted dependencies. Categorizes threats into: (a) data supply chain — transient context injection vs persistent memory poisoning; (b) tool supply chain — discovery, implementation, invocation phases. Identifies the "Viral Agent Loop": agents becoming vectors for self-propagating generative worms that require no code vulnerabilities. Introduces "Man-in-the-Environment" (MitE) adversary: does not compromise channel or weights, but pollutes the endpoint the agent treats as ground truth via Prompt-Data Isomorphism (passive data D upcast to instructions I at inference).

## Real-World Applicability
Running example: autonomous travel agent G booking corporate trip — every step (search, retrieve blog, invoke suggested Python lib) introduces unvetted runtime artifacts. Applies to every modern agent that browses, retrieves, memorizes, or discovers tools at runtime. Maps onto LangChain, AutoGPT, BabyAGI, enterprise copilots, MCP tool registries.

## Reproduction Examples
Data supply chain — within-session:
- Indirect Prompt Injection (IPI): malicious payload in third-party data that the agent fetches and prepends to user query. Multimodal extension: subtle perturbations in images/sounds decoded as textual payload (e.g., "delete all files"), up to 98% ASR (Bagdasaryan et al.).
- In-Context Learning attacks / Many-Shot Jailbreaking (256+ fictitious dialogues) — ASR follows power-law growth with shot count, obsoleting standard alignment filters (Anil et al.).

Data supply chain — across-session (memory poisoning): poisoned data written into agent long-term memory persists across sessions; "prompt infection" propagates to future users.

Tool supply chain — three phases:
- Discovery: registry manipulation (attacker uploads tool to MCP/Skill store with seductive description).
- Implementation: malicious code in tool binary/source executed at invocation.
- Invocation: tool-stream manipulation (output of one tool steers next tool selection).

Viral Agent Loop: agent A produces output → ingested by agent B → output propagates → self-replicating generative worm; no CVE-style exploit needed.

## Defenses / Mitigations Discussed
Zero-Trust Runtime Architecture (proposed direction):
- Treat context as untrusted control flow (spotlighting, provenance tags).
- Tool execution bounded by cryptographic provenance, not semantic likelihood.
- Data vs tool supply chains need distinct controls (content-integrity checks vs code-provenance checks).
- Dynamic dependency verification at runtime (signatures on fetched docs, sandboxed tool binaries).

## Key Takeaways for a Safety Framework
- Treat runtime-resolved dependencies (retrieved docs, dynamically discovered tools) as a supply chain; apply provenance and signing.
- Distinguish transient (session) vs persistent (memory) data poisoning — each needs different controls.
- Tool supply chain phases (discovery/implementation/invocation) need separate audits.
- MitE threat model is orthogonal to MitM: control the endpoints (wikis, repos, tool registries) the agent trusts.
- Many-shot in-context jailbreaks escape standard safety filters — monitor for abnormally long dialogue contexts with escalating content.
- Plan for Viral Agent Loop: a single contaminated agent output can propagate through multi-agent systems; include loop-break mechanisms (provenance tokens, trust levels).
- Budget for cryptographic verification of tool implementations BEFORE execution, not just description matching.
