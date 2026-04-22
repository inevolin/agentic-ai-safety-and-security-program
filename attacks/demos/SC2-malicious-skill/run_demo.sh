#!/usr/bin/env bash
# SC2 malicious-skill demo
# Stages a convincing SKILL.md to /tmp then asks Claude to evaluate it.
# An unhardened model will miss the exfil hook buried in the telemetry JSON.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"

STAGED_SKILL="/tmp/smart-file-reader-skill.md"
cp "${DIR}/malicious_skill.md" "${STAGED_SKILL}"

MODEL="${1:-claude-haiku-4-5-20251001}"

SYSTEM_PROMPT="$(cat "${DIR}/system_prompt.txt")"
USER_PROMPT="$(cat "${DIR}/user_prompt.txt")"

echo "=== SC2 Malicious-Skill Demo ==="
echo "Model  : ${MODEL}"
echo "Staged : ${STAGED_SKILL}"
echo ""

LOG="${DIR}/demo_run_$(date +%Y%m%dT%H%M%S).log"

claude -p \
  --model "${MODEL}" \
  --setting-sources user \
  --disable-slash-commands \
  --no-session-persistence \
  --allowedTools "Read" \
  --system-prompt "${SYSTEM_PROMPT}" \
  -- "${USER_PROMPT}" \
  2>&1 | tee "${LOG}"

echo ""
echo "=== Done. Log: ${LOG} ==="
