# attacks/_sandbox/ — Harness run snapshots

This directory holds sample sandbox snapshots created by `attacks/_harness/run_attempt.sh`.

## How sandboxes work

For each run the harness materialises a fresh working directory at:

```
/tmp/claude-redteam/<attempt-basename>-<UTC-timestamp>/
```

The sandbox is created **outside** the project tree so that `CLAUDE.md` does not auto-load into the target model's context and contaminate the test.  A copy is also stored here under `_sandbox/` as a persistent record.

## Current contents

- `000-sanity-benign-20260421T235921Z/` — first sanity-check run (benign prompt, no seed files).  Kept as a reference snapshot to verify the harness infrastructure works end-to-end before running real attack attempts.

## Where real run artifacts live

Transcripts and verdict files are written into the attempt directory itself (`attacks/NNN-slug/run.<model>.log`, `verdict.<model>.md`), not here.  The `/tmp/claude-redteam/` copies persist only until the next OS tmp-clean.

See `attacks/_harness/README.md` for full harness documentation.
