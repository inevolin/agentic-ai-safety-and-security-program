# Summary: Embrace The Red — The Dawn of LLM Application Worms (AgentHopper PoC)

**Source file:** 313-blog-embrace-the-red-the-dawn-of-llm-application-worms.md
**Paper/post ID:** 313

## Attack Vector(s)
**AgentHopper** — PoC "AI virus" that propagates across coding agents via indirect prompt injection embedded in Git repositories. Uses *conditional prompt injection* to target different agents (GitHub Copilot, Amp Code, Amazon Q Developer, AWS Kiro) with agent-specific RCE payloads.

## Real-World Applicability
CVEs exploited (all patched by vendors):
- **GitHub Copilot: CVE-2025-53773** — RCE via prompt injection (write `settings.json` to flip into YOLO mode, then exec).
- **Amp Code** — arbitrary command execution via prompt injection (writes fake MCP server config — a Python program that downloads AgentHopper).
- **Amazon Q Developer** — RCE via `find` bash command with `-exec` to download AgentHopper and execute.
- **AWS Kiro** — arbitrary code exec via indirect prompt injection (writes config to allowlist all bash, then runs AgentHopper).

Propagation model: compromised Agent 1 → scans local git repos → injects payload into source files → commits+pushes → Agent 2 pulls → infection hops.

## Reproduction Examples
High-level payload behavior per agent (verbatim bullets):

- **GitHub Copilot:** Write to the agents the `settings.json` file to put Copilot into YOLO mode, then download and run AgentHopper
- **Amp Code:** Write to the agent's configuration file and add a fake MCP server which is a python program that downloads AgentHopper and runs it
- **Amazon Q Developer:** Execute the `find` bash command with the `-exec` argument to download AgentHopper and execute it
- **AWS Kiro:** Write to the agent's configuration file to allowlist all bash commands, then download and run AgentHopper

After infection, inserted instructions appear at the top of source files, hijacking any future agent processing them.

Safety switch: repo-level approval in the PoC prevents unintended spread.

## Defenses / Mitigations Discussed
- **SSH / signing-key passphrases** to block silent `git push` by hijacked agents.
- **Branch protection** (require PR review for main).
- **Least privilege** — never run agents in YOLO mode; don't allowlist dangerous commands.
- **Sandbox capabilities** — use them when agents offer them.
- **Isolate agent config from the agent itself** (agents shouldn't be able to edit their own config files).
- EDR/GitHub-level telemetry for widespread-infection detection.
- Vendors should publish threat-model outcomes.

## Key Takeaways for a Safety Framework
- Detect writes by coding agents to their own config (e.g., `settings.json`, `.amp/config`, `.kiro/allowlist.json`, `.aws-q/*`) — privilege escalation alarm.
- Detect creation/modification of MCP server definitions during a session, especially pointing at newly-fetched URLs.
- Detect `find -exec`, `xargs sh`, process substitution, `curl | sh`, `wget -qO- | sh` — classic download-and-exec patterns.
- Scan repos for injection markers in file headers (hidden instructions prefixing code files) before opening them in an agent session.
- Require separate human-signed commits for config changes to agent tooling.
- Network egress allowlist per agent session; block arbitrary outbound HTTP.
