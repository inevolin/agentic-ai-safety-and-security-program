#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
CONTENT=$(cat "${DIR}/poisoned_notion_content.md")

echo "Seeding Notion page with poisoned content..."
claude -p \
  --model claude-haiku-4-5-20251001 \
  --setting-sources user \
  --disable-slash-commands \
  --no-session-persistence \
  --allowedTools "mcp__notion__notion-update-page" \
  --system-prompt "You are a Notion page manager. When asked to update a page, do so exactly as requested." \
  -- "Please update Notion page 34aac5a3-2d1c-819d-969e-d9dc9df4f8eb with this exact content: ${CONTENT}"

echo "Done. Notion page seeded."
