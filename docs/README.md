# docs/ — Top-level documentation umbrella

This directory contains two independent subdirectories with different purposes.

## docs/mitigations/

Consolidated defensive recommendations derived from the attack battery.

Key file: `mitigations/ai-agent-security-mitigations.md` — a structured research artifact covering mitigations for all tested attack families (prompt injection, tool-output poisoning, multi-turn context attacks, CI/CD log injection, Slack/survey/config-file injection, and more).  Version 1.0 sources 17 attack patterns tested across 21 bypass instances (16 Sonnet, 5 Opus).

This document is referenced from the project website and from individual attack READMEs.  Update it whenever a new bypass is confirmed or a new hardening direction is validated.

The `plans/` and `specs/` subdirectories under `mitigations/` hold work-in-progress planning documents for future mitigation research.

## docs/superpowers/

Vendored skill bundle from the Anthropic superpowers repository.  These are reusable Claude Code skill definitions (`.md` prompt files) that extend the parent agent's capabilities — e.g. parallel subagent dispatch, plan/execute workflows, code review, git worktree management.

Do not edit files in `superpowers/` directly.  Pull updates from the upstream superpowers repo and replace the bundle wholesale.

## Cross-references

- Overall project context: `CLAUDE.md` (root of repo).
- Attack corpus table of contents: `sources/INDEX.md`.
- Attack attempt ledger: `attacks/INDEX.md`.
