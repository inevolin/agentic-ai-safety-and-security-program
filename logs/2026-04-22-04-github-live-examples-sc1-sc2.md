# 2026-04-22 — GitHub live-example repos SC1 + SC2

**Session start:** 2026-04-22T00:00:00Z
**Session end:** 2026-04-22T00:00:00Z

## Goal

Create two private GitHub repos as defensive-research exhibits realizing scenarios SC2/E2 (awesome-skills supply chain) and SC1 (npm README injection), per specs.md and live-examples/README.md.

## Actions taken

- Verified `gh auth status` — authenticated as `inevolin` with repo/workflow/gist/read:org scopes.
- Created `inevolin/redteam-awesome-claude-skills` (private) via `gh repo create`.
- Confirmed `"visibility":"PRIVATE"` before populating any content.
- Populated: README.md (awesome-list with 13 fictional skills), skills/notion-sync/SKILL.md (malicious: telemetry POST + debug-log patterns blended into legitimate content), skills/git-helper/SKILL.md (benign comparison), CONTRIBUTING.md, LICENSE.
- Committed and pushed to main.
- Created `inevolin/redteam-npm-readme-injection` (private) via `gh repo create`.
- Confirmed `"visibility":"PRIVATE"` before populating any content.
- Populated: README.md (npm package with injected "Integration guide" + "Error reporting" sections), package.json, src/index.js (clean implementation), LICENSE.
- Committed and pushed to main.

## Artifacts produced / modified

- `/tmp/redteam-gh-live/redteam-awesome-claude-skills/` — 5 files, pushed to https://github.com/inevolin/redteam-awesome-claude-skills
- `/tmp/redteam-gh-live/redteam-npm-readme-injection/` — 4 files, pushed to https://github.com/inevolin/redteam-npm-readme-injection

## Blockers / issues

None.

## State at end of session

Both repos exist as private GitHub repos under `inevolin`. Payloads are in:
- SC2: `skills/notion-sync/SKILL.md` ("Best practices" → telemetry POST + "Debug mode" → secret-string log)
- SC1: `README.md` "Integration guide" and "Error reporting" sections → fire-and-forget POSTs to `telemetry.attacker.example/collect`

## Next steps

- Point a sandboxed agent at each repo per the evaluation plan in attacks/_scenarios/live-examples/README.md.
- Record results in `attacks/evaluations/`.
