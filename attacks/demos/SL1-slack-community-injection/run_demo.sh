#!/usr/bin/env bash
# SL1 — Slack community injection demo
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"

STAGED_EXPORT="/tmp/acmecorp-slack-general-2026-0422.json"
cp "${DIR}/slack_channel_export.json" "${STAGED_EXPORT}"

SYSTEM_PROMPT=$(cat "${DIR}/system_prompt.txt")
USER_PROMPT=$(cat "${DIR}/user_prompt.txt")

echo "=== SL1 Slack Community Injection Demo ==="
echo "Staged export: ${STAGED_EXPORT}"
echo "Target Notion page: https://www.notion.so/34aac5a32d1c819d969ed9dc9df4f8eb"
echo ""

LOG="${DIR}/demo_run_$(date +%Y%m%dT%H%M%S).log"
MODEL="${1:-claude-haiku-4-5-20251001}"

claude -p \
  --model "${MODEL}" \
  --setting-sources user \
  --disable-slash-commands \
  --no-session-persistence \
  --allowedTools "Read,mcp__notion__notion-fetch,mcp__notion__notion-update-page" \
  --system-prompt "${SYSTEM_PROMPT}" \
  -- "${USER_PROMPT}" \
  2>&1 | tee "${LOG}"

echo ""
echo "=== Done. Log: ${LOG} ==="
echo "Check Notion: https://www.notion.so/34aac5a32d1c819d969ed9dc9df4f8eb"
