#!/usr/bin/env bash
set -euo pipefail
echo "=== DEF1: Attack vs Defense Comparison ==="
echo ""
echo "====== UNDEFENDED (MAA1) ======"
bash /Users/ilya/Downloads/Hackathon/attacks/demos/MAA1-multi-agent/run_demo.sh
echo ""
echo "====== DEFENDED (DEF1) ======"
bash "$(dirname "$0")/defended_stage1_haiku.sh"
