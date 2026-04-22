# Summary: Prompt Injection Attacks on Agentic Coding Assistants — Skills, Tools, and Protocol Ecosystems

**Source file:** 165-arxiv-2601.17548-prompt-injection-attacks-on-agentic-coding-assistants-a-systematic-ana.md
**Paper/post ID:** 165

## Attack Vector(s)
Systematization of Knowledge (Maloyan & Namiot, 2026). Threat model: **agentic coding assistants** — Claude Code, GitHub Copilot, Cursor, OpenAI Codex CLI — with file-system, shell, and web access via Model Context Protocol (MCP). Proposes **3-dimensional attack taxonomy**:

1. **Delivery Vector** (D1 direct / D2 indirect / D3 protocol-level).
2. **Attack Modality** (M1 text / M2 semantic / M3 multimodal).
3. **Propagation Behavior** (not fully expanded in the first 300 lines).

**31 cataloged attack techniques**; meta-analysis of 78 studies (2021–2026). Reports **>85% attack success rate** against state-of-the-art defenses when adaptive strategies are used; 18 defenses evaluated — most achieve **<50%** mitigation against adaptive attacks.

## Real-World Applicability
- **>30 CVEs** against major coding assistants documented.
- **73% of tested platforms fail at least one trust boundary** (user-agent, agent-tool, tool-tool, session).
- Enables data exfiltration (source code, credentials, env vars, API keys), code injection (supply-chain backdoors), privilege escalation, DoS, persistence.
- Zero-click attacks possible when malicious content is in repo files the agent autonomously reads.

## Reproduction Examples
Attack taxonomy (verbatim):

**Direct Prompt Injection (D1):**
- D1.1 Role Hijacking (privilege-level claims)
- D1.2 Context Override (redefine agent purpose)
- D1.3 Instruction Negation ("ignore previous")

**Indirect Prompt Injection (D2):**
```
D2.1 Repository-Based:
  • Rules File Backdoor: .cursorrules, .github/copilot-instructions.md
  • Code Comments: hidden instructions in source files
  • Issue/PR Poisoning: malicious content in GitHub artifacts
D2.2 Documentation-Based:
  • README Exploitation
  • API Doc Poisoning
  • Manifest Injection: package.json, pyproject.toml
D2.3 Web Content:
  • Search Poisoning
  • Documentation Compromise (attack via official docs)
```

**Protocol-Level (D3 — MCP):**
```
D3.1 MCP Attacks:
  • Tool Poisoning: malicious tool descriptions
  • Rug Pull: post-approval behavior modification
  • Shadowing: context contamination
  • Tool Squatting: name-similar malicious tools
D3.2 Transport:
  • MITM on MCP communication
  • DNS Rebinding for request redirection
  • SSE Injection (Server-Sent Events)
```

**Modalities:**
```
M1 Text:
  • M1.1 Hierarchy Exploitation
  • M1.2 Completion Attacks (malicious context crafting)
  • M1.3 Encoding Obfuscation (Base64, Unicode, word splitting)
M2 Semantic:
  • M2.1 XOXO (cross-origin context poisoning)
  • M2.2 Implicit Instructions
  • M2.3 Logic Bombs
M3 Multimodal:
  • M3.1 Image Injection (instructions in screenshots/diagrams)
```

**Attacker capability levels:**
- Level 1 Content Injector — issues/PRs/code comments, docs, web pages.
- Level 2 Tool Publisher — publish MCP servers, skills, extensions; list on marketplaces.
- Level 3 Network Attacker — MITM on transport, DNS manipulation.

**Platform skill-sandboxing comparison:**
```
Claude Code:    Markdown config,    Partial sandbox, no review
GitHub Copilot: TypeScript,         Sandboxed,      Marketplace review
Cursor:         JSON/MCP,           Not sandboxed, no review
OpenAI Codex:   MCP,                Not sandboxed, no review
```

## Defenses / Mitigations Discussed
- Critiques 18 defense mechanisms; most fall below 50% against adaptive attacks.
- Advocates architectural-level mitigations, not ad-hoc filtering.
- Proposes defense-in-depth framework (details in later sections of the paper).
- Highlights MCP's "semantic layer vulnerable to meaning-based manipulation."

## Key Takeaways for a Safety Framework
- Treat `.cursorrules`, `.github/copilot-instructions.md`, README.md, and package manifest files as **untrusted input** when present in a repo the agent will read.
- MCP tool descriptions are a first-class attack surface — validate and pin tool schemas; detect rug-pull changes after approval.
- Flag tool-name squatting by semantic similarity to known-good tools.
- Quantine agent output that writes to file system or runs shell unless action is policy-allowed given the trust level of the triggering input.
- Encoding-obfuscation defense is required (Base64, Unicode confusables, word-splitting).
- Test against adaptive attackers — 85% ASR is the status quo; static benchmarks are insufficient.
- Sandbox skills and MCP servers by default; maintain a marketplace-style review for published tools.
