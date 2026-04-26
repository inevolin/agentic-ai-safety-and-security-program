# 2026-04-26 — Honor TTS_SKIP_EXISTING in on-demand audio route

**Session start:** 2026-04-26T08:42:00Z
**Session end:** 2026-04-26T08:48:00Z

## Goal
Stop on-demand TTS regen when transcript hash drifts. User reported `m1-l1-rex-9d5a947c046a.wav` was generated on production despite `TTS_SKIP_EXISTING=1` and existing `m1-l1-rex-*.wav` already on disk.

## Root cause
`TTS_SKIP_EXISTING=1` was only consulted by `lib/prebuild-audio.ts` at server boot. The on-demand path `app/api/audio/[moduleId]/[lessonId]/route.ts` calls `getOrCreateLessonAudio()` directly, which keys cache by the exact `m{M}-l{L}-{voice}-{hash}.wav` filename. Lesson MDX content edit → new transcript hash → exact-filename miss → regen, even though a prior wav with the same lesson/voice prefix existed.

## Actions taken
- Added `findExistingByPrefix(prefix)` helper in `web/lib/tts.ts` that, when `TTS_SKIP_EXISTING=1`, scans `public/audio/` for any `.wav` matching the given prefix and returns the most recently modified match.
- In `getOrCreateLessonAudio`: after exact-hash miss, look up `m{M}-l{L}-{voice}-` prefix; if a drifted-hash wav exists, return it as `cacheHit: true` and log `[tts] skip … reuse {filename}`.
- Same pattern in `getOrCreateIntroAudio` for `intro-` prefix.
- When flag unset, behavior unchanged: hash-keyed cache, regen on miss.

## Artifacts produced / modified
- `web/lib/tts.ts` — `findExistingByPrefix` + drift fallbacks in `getOrCreateLessonAudio` + `getOrCreateIntroAudio`.
- `logs/2026-04-26-02-tts-skip-existing-on-demand.md` — this log.

## Blockers / issues
- Pre-existing `lib/attacks.test.ts:14:14` TS error unrelated to this change.
- Side effect: when content drifts, audio served may be stale (old transcript). That is the intended trade-off of `TTS_SKIP_EXISTING` — preserve cost / keep wavs. To force regen of one lesson, delete its `m{M}-l{L}-*.wav` files on the server; next request regenerates.

## State at end of session
After deploy, remote `[tts]` log should show `skip   m1/l1/rex → reuse m1-l1-rex-*.wav (TTS_SKIP_EXISTING=1)` instead of `start … (7 chunks)` for any lesson where a prior wav exists. Lessons with no prior wav still generate (intended).

## Next steps
- Push to `main`, wait for `deploy-web.yml`, browse `/learn/1/1`, confirm pm2 logs show skip line not regen.
- If a transcript change must take effect on prod, ssh in and `rm web/public/audio/m{M}-l{L}-*.wav` to force regen on next request.
