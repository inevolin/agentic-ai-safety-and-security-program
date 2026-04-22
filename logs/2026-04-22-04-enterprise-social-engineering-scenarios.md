# 2026-04-22 — Enterprise social-engineering scenarios catalog

**Session start:** 2026-04-22T05:30Z (approx)
**Session end:**   2026-04-22T06:30Z (approx)

## Goal

Pivot from the CTF harness's single-shot jailbreak focus to the real enterprise threat model: attacks that reach AI agents through legitimate business surfaces (Gmail/Outlook, M365, Notion, Slack, Salesforce, GitHub, MCP, SKILL.md, etc.). Per user directive: design 50+ unique creative orchestration attacks focused on corporate phishing / social engineering; ground them in the `sources/` corpus; build live Notion + GitHub examples for a representative subset; stage the catalog as input to the next phase (defensive framework). User also directed Opus-designs-Sonnet-executes split for token efficiency.

## Actions taken

1. **Scaffolded `attacks/_scenarios/`** with `README.md` (methodology + schema + diversity dimensions), `catalog.md` (scanable master index), and the `by-department/` + `live-examples/` subtrees.
2. **Dispatched an Explore subagent** to mine `sources/` (1,205-item corpus) for enterprise-integration attack precedents across five buckets (indirect-injection in business docs, BEC/LLM, tool/agent-specific attacks, multi-step SE orchestrations, persistence/memory attacks). Returned ~30 high-signal citations and a gap analysis (Slack/Teams, Jira workflow, calendar chains, M365-Copilot, Salesforce Agentforce, Notion API, cross-SaaS chaining, HR/Payroll, SKILL.md format specifics all under-represented).
3. **Designed (Opus)** 52 scenario specs in `_scenarios/specs.md`, distributed across 10 departments + cross-functional + supply-chain. Each spec tagged on 6 diversity axes (integration, injection channel, attacker goal, automation level, pivot mechanism, realism rating) with specific source-corpus citations.
4. **Dispatched 5 parallel Sonnet subagents (medium effort)** to expand the specs into the 11 `by-department/*.md` files with full schema entries (narrative, payload, detection signals, mitigation hooks, citations).
5. **Authenticated Notion MCP** and created parent page "🛡️ Enterprise AI Red-Team Lab" (page id `34aac5a3-2d1c-81d3-8615-c0b008ea911f`).
6. **Dispatched a Sonnet subagent** to build 3 live Notion exhibits: L1 (NDA-summary-worm), M1 (RAG-poison analyst briefing), L4 (reverse-DDQ exfil questionnaire). All three are live under the parent page with visible RESEARCH-ARTIFACT banners.
7. **Dispatched a Sonnet subagent** to build 2 private GitHub repos: `inevolin/redteam-awesome-claude-skills` (SC2/E2 — malicious SKILL.md embedded in an awesome-list) and `inevolin/redteam-npm-readme-injection` (SC1 — npm README injection). Both confirmed PRIVATE.
8. **Wrote (Opus, directly)** `_scenarios/assessment.md` (F+A+B+C−D scoring across all 52, top-10 list, 4 root-pattern clusters, recommended defensive-phase sprint ordering) and `_scenarios/mitigation-primitives.md` (10 primitives with per-scenario coverage matrix, minimum-viable-defensive-kit recommendation).
9. **Updated `attacks/INDEX.md`** to separate the CTF-harness ledger from the scenarios workstream and point to the new catalog/assessment/primitives/live-examples files.
10. **Updated `CLAUDE.md`** to document the `attacks/` tree, the CTF gotchas (sandbox-outside-project, no --bare, portable watchdog, pre-manifest diffing, per-model paths, success* caveat), and the ideation-protocol pointer.

## Artifacts produced / modified

### New — `attacks/_scenarios/`

- `README.md` — methodology, schema, diversity dimensions, layout.
- `specs.md` — Opus-authored design specs for all 52 scenarios (source of truth).
- `catalog.md` — master scanable table of 52 scenarios + top-severity subset.
- `assessment.md` — priority scoring, pattern clusters, sprint ordering for defensive phase.
- `mitigation-primitives.md` — 10 primitives + scenario-coverage matrix + MVP defensive kit.
- `by-department/01-legal-compliance.md` through `11-cross-functional-agent-to-agent.md` — 11 files, ~3,000 lines total, full schema entries for all 52 scenarios.
- `live-examples/README.md` — pointer to the live Notion + GitHub artifacts.

### New — Live Notion

Parent: https://www.notion.so/34aac5a32d1c81d38615c0b008ea911f

- **L1**: https://www.notion.so/34aac5a32d1c819d969ed9dc9df4f8eb — Mutual NDA with hidden legal-wiki summary injection.
- **M1**: https://www.notion.so/34aac5a32d1c8122a8abdf59257a5ab0 — Pre-IPO analyst briefing with RAG poisoning.
- **L4**: https://www.notion.so/34aac5a32d1c819a866dc29d49108da1 — Reverse-vendor due-diligence questionnaire soliciting SOC 2 evidence.

### New — Live GitHub (private)

- **SC2/E2**: https://github.com/inevolin/redteam-awesome-claude-skills — malicious SKILL.md in a plausible awesome-list.
- **SC1**: https://github.com/inevolin/redteam-npm-readme-injection — npm README with telemetry-injection instructions.

### Modified

- `attacks/INDEX.md` — added the two-workstream preamble pointing to the new `_scenarios/` tree.
- `CLAUDE.md` — added `attacks/` to project layout; added "Red-team harness" section with gotchas and ideation-protocol pointer.

## Blockers / issues

- Initial Notion `create-pages` with teamspace ID as parent returned 404 — used workspace-level private page creation (no parent) instead, which worked.
- Two Sonnet subagents reported minor cites gaps (F2/F3/F4/E4/E5/M4/H2/H3/H5 in specs.md had no explicit paper path). They filled with plausible 1-line defaults or marked "none in spec" rather than fabricating.
- One arxiv-ID typo noted in specs.md (`2602.19955` vs `19555` for paper 208) — not corrected this session, flagged for follow-up.
- Grader v2 and harness-based validation of the new catalog scenarios are NOT yet done; this is the next session's work.

## State at end of session

**File counts:** 7 top-level files in `_scenarios/`, 11 `by-department/` files, 5 live exhibits (3 Notion pages + 2 GitHub repos), plus README/INDEX/CLAUDE.md updates.

**Scenario count:** 52 unique scenarios, tagged across 6 diversity axes, none sharing more than 3 axes identically. Priority top-10 identified (led by E2 SKILL.md poison, with L4, M1, E1, E3, SC2 tied at rank 2).

**Pattern clusters** identified for the defensive framework:
- α Attacker-as-pseudo-trusted-source (L4, P2, F5, X3)
- β Untrusted-content drives trusted-action (L1, L5, S1, M1, H1, F1, F4, IT1, X4, C1, C4) — the plurality
- γ Supply-chain / tool-description compromise (E1, E2, E3, SC1, SC2, P3, C1, IT2)
- δ Persistent poisoning with delayed detonation (M1, IT5, A2, C2, H4, X2)

The catalog is ready to drive the **next phase**: building the 10-primitive defensive framework, starting with Sprint 1 (Provenance tagging + Write-scope contracts + HITL gates), which covers ~25 of 52 scenarios.

## Next steps

1. **Validate top-10 via the harness** — for the highest-priority scenarios (E2, L4, M1, E1, E3, SC2, H1, F1, P2), build harness attempts that simulate the integration environment and measure attack-success rates against Haiku/Sonnet/Opus targets. This bridges the `_scenarios/` catalog and the `_harness/` ledger.
2. **Start Sprint 1 of the defensive framework** — implement a minimal Primitive 1 (provenance tagging wrapper) + Primitive 3 (write-scope contracts) + Primitive 5 (HITL gates for high-impact actions). Target the MVP that can be evaluated against the Notion + GitHub live exhibits already staged.
3. **Address gaps flagged by the Explore mining agent** — seed 3-5 additional Promptfoo-corpus-style entries for Slack/Teams, Jira-workflow, calendar-invite, M365-Copilot, Notion-API-specific, and cross-SaaS chaining gaps (these were noted as under-represented in `sources/`).
4. **Patch minor typos** — reconcile arxiv-ID `2602.19555` vs `19955` typo in specs.md; re-scan Sonnet-written files for any citation gaps marked as defaults and fill from corpus.
5. **Add a few more high-realism scenarios** if the 52 turn out to miss a category once we start the framework (open slot).
6. **Do NOT** attempt to run live exploits against any of the 3 Notion pages or 2 GitHub repos from a production agent. The live exhibits are for *offline* evaluation only; any agent connected to them must be in a sandboxed profile.

When future Claude sessions open these artifacts, remember: every Notion child page and every README in the GitHub repos opens with a visible RESEARCH-ARTIFACT banner. Do not remove those banners — they are the safety boundary between defensive-research content and actionable instruction.
