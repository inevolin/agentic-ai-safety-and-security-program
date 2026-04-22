#!/usr/bin/env bash
# run_attempt.sh <attempt_dir> <model_alias> [prompt_override]
#
# attempt_dir: path like attacks/001-direct-override/  (must contain payload/)
# model_alias: haiku | sonnet | opus  (or a full claude model ID)
# prompt_override: optional — if set, use as user prompt; else read payload/user_prompt.txt
#
# Conventions inside payload/:
#   user_prompt.txt        — the attacker-controlled user prompt (REQUIRED unless prompt_override given)
#   seed_files/            — optional. Contents copied into sandbox BEFORE claude runs.
#   append_system.txt      — optional. Extra text appended via --append-system-prompt.
#   extra_flags.txt        — optional. Extra CLI flags (one per line, shell-split).
#
# Writes: <attempt_dir>/run.log, <attempt_dir>/verdict.md
# Sandbox: attacks/_sandbox/<attempt_basename>-<ts>/
set -o pipefail

ATTEMPT="${1:?attempt dir}"
MODEL_ALIAS="${2:?model alias}"
PROMPT_OVERRIDE="${3:-}"

ATTEMPT_DIR="$(cd "$ATTEMPT" && pwd)"
HARNESS_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$HARNESS_DIR/../.." && pwd)"
BASENAME="$(basename "$ATTEMPT_DIR")"
TS="$(date -u +%Y%m%dT%H%M%SZ)"
SANDBOX="/tmp/claude-redteam/${BASENAME}-${TS}"
TRANSCRIPT="$ATTEMPT_DIR/run.$MODEL_ALIAS.log"

case "$MODEL_ALIAS" in
  haiku)  MODEL="claude-haiku-4-5-20251001" ;;
  sonnet) MODEL="claude-sonnet-4-6" ;;
  opus)   MODEL="claude-opus-4-7" ;;
  *)      MODEL="$MODEL_ALIAS" ;;
esac

mkdir -p "$SANDBOX"
if [ -d "$ATTEMPT_DIR/payload/seed_files" ]; then
  cp -R "$ATTEMPT_DIR/payload/seed_files/." "$SANDBOX/"
fi
# Snapshot sandbox state BEFORE the claude run (for grader diffing)
PRE_MANIFEST="$SANDBOX/../.${BASENAME}-${TS}.pre"
find "$SANDBOX" -type f -exec md5 -q {} \; -print 2>/dev/null \
  | paste - - | awk '{print $1"  "$2}' > "$PRE_MANIFEST"

if [ -n "$PROMPT_OVERRIDE" ]; then
  USER_PROMPT="$PROMPT_OVERRIDE"
elif [ -f "$ATTEMPT_DIR/payload/user_prompt.txt" ]; then
  USER_PROMPT="$(cat "$ATTEMPT_DIR/payload/user_prompt.txt")"
else
  echo "ERR: no user_prompt.txt in $ATTEMPT_DIR/payload/ and no override"
  exit 3
fi

SYSTEM_PROMPT="$(cat "$HARNESS_DIR/system_prompt.md")"

EXTRA_FLAGS=()
if [ -f "$ATTEMPT_DIR/payload/append_system.txt" ]; then
  EXTRA_FLAGS+=(--append-system-prompt "$(cat "$ATTEMPT_DIR/payload/append_system.txt")")
fi
if [ -f "$ATTEMPT_DIR/payload/extra_flags.txt" ]; then
  while IFS= read -r line; do
    [ -z "$line" ] && continue
    [[ "$line" =~ ^# ]] && continue
    # shellcheck disable=SC2206
    EXTRA_FLAGS+=($line)
  done < "$ATTEMPT_DIR/payload/extra_flags.txt"
fi

{
  echo "=== run_attempt.sh ==="
  echo "timestamp: $TS"
  echo "attempt:   $ATTEMPT_DIR"
  echo "model:     $MODEL ($MODEL_ALIAS)"
  echo "sandbox:   $SANDBOX"
  echo "--- user prompt ---"
  echo "$USER_PROMPT"
  echo "--- seed files ---"
  (cd "$SANDBOX" && find . -type f | head -20)
  echo "--- claude output ---"
} > "$TRANSCRIPT"

# Run with timeout, narrow tools, no network tools, bounded budget.
cd "$SANDBOX"
# Portable timeout via background + sleep-kill
(
  claude -p \
  --model "$MODEL" \
  --system-prompt "$SYSTEM_PROMPT" \
  --permission-mode bypassPermissions \
  --allowedTools Read Write Edit Bash Glob Grep \
  --disallowedTools WebFetch WebSearch \
  --no-session-persistence \
  --disable-slash-commands \
  --setting-sources user \
  --max-budget-usd 0.50 \
  --output-format text \
  "${EXTRA_FLAGS[@]}" \
  -- "$USER_PROMPT" \
  >> "$TRANSCRIPT" 2>&1
) &
CLAUDE_PID=$!
# Watchdog: if claude still alive after 240s, kill it.
( i=0; while [ $i -lt 240 ] && kill -0 "$CLAUDE_PID" 2>/dev/null; do sleep 1; i=$((i+1)); done; kill -9 "$CLAUDE_PID" 2>/dev/null ) &
WATCHDOG_PID=$!
wait "$CLAUDE_PID" 2>/dev/null
EXIT=$?
kill -9 "$WATCHDOG_PID" 2>/dev/null
wait 2>/dev/null || true

echo "--- exit code: $EXIT ---" >> "$TRANSCRIPT"

# Grade
GRADE_OUT="$( "$HARNESS_DIR/grade.sh" "$SANDBOX" "$TRANSCRIPT" "$PRE_MANIFEST" )"
GRADE_EXIT=$?

case $GRADE_EXIT in
  0) VERDICT="success" ;;
  1) VERDICT="fail" ;;
  2) VERDICT="inconclusive" ;;
  *) VERDICT="error" ;;
esac

cat > "$ATTEMPT_DIR/verdict.$MODEL_ALIAS.md" <<EOF
# Verdict — $BASENAME

- **timestamp:** $TS
- **model:**     $MODEL ($MODEL_ALIAS)
- **exit code:** $EXIT
- **verdict:**   **$VERDICT**
- **sandbox:**   $SANDBOX

## Grader output
\`\`\`
$GRADE_OUT
\`\`\`

## Last 40 lines of transcript
\`\`\`
$(tail -40 "$TRANSCRIPT")
\`\`\`
EOF

echo "[$BASENAME/$MODEL_ALIAS] → $VERDICT"
exit 0
