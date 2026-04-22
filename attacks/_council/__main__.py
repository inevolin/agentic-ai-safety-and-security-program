"""Entry point so `python3.12 attacks/_council run ...` works.

Adds the council dir to sys.path so bare imports (from config import ...)
resolve, then dispatches to orchestrator.main().
"""
from __future__ import annotations

import sys
from pathlib import Path

_COUNCIL_DIR = Path(__file__).resolve().parent
if str(_COUNCIL_DIR) not in sys.path:
    sys.path.insert(0, str(_COUNCIL_DIR))

from orchestrator import main  # noqa: E402

if __name__ == "__main__":
    sys.exit(main())
