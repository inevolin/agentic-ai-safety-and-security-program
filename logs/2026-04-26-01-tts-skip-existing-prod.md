# 2026-04-26 — Enable TTS_SKIP_EXISTING=1 on remote pm2

**Session start:** 2026-04-26T08:33:00Z
**Session end:** 2026-04-26T08:35:00Z

## Goal
Make remote server skip TTS regeneration when valid `.wav` files already exist; only generate missing ones.

## Actions taken
- Inspected `web/lib/prebuild-audio.ts` — `TTS_SKIP_EXISTING=1` already implemented (skips hash-mismatch regen + stale-prune sweep, only generates missing files keyed by `intro-*.wav` and `m{M}-l{L}-*.wav` prefixes).
- Confirmed `web/instrumentation.ts` → `instrumentation-node.ts` triggers `runPrebuild` at Next.js Node runtime startup (server boot, not build).
- Edited `web/ecosystem.config.cjs` to add `TTS_SKIP_EXISTING: "1"` to pm2 app env. Deploy workflow (`.github/workflows/deploy-web.yml`) calls `pm2 reload ecosystem.config.cjs --update-env`, so var is injected on next deploy.

## Artifacts produced / modified
- `web/ecosystem.config.cjs` — added `TTS_SKIP_EXISTING: "1"`.
- `logs/2026-04-26-01-tts-skip-existing-prod.md` — this log.

## Blockers / issues
- None. Existing logic in `prebuild-audio.ts` checks file existence by prefix (`m{M}-l{L}-` and `intro-`), so any valid wav with current hash naming convention satisfies skip.

## State at end of session
Remote will, on next deploy, run prebuild with skip-existing semantics: missing wavs generated, present wavs preserved, no stale prune. Local dev unaffected (env var only set in pm2 production app).

## Next steps
- Merge to `main` to trigger `deploy-web.yml`; verify `[tts-prebuild] start (… lessons) [skip-existing]` log line on server after pm2 reload.
- If a transcript edit later requires forced regen of one lesson, delete its `m{M}-l{L}-*.wav` from `web/public/audio/` on server; next start will regenerate just that one.
