#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
echo "Step 1: Seeding Notion page with poisoned content..."
bash "${DIR}/seed_notion_page.sh"
echo ""
echo "Step 2: Running Sonnet against poisoned tool output..."
bash "${DIR}/run_attack.sh" claude-sonnet-4-6
