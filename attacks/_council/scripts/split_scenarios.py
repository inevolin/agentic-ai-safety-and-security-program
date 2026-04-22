"""One-time: split `attacks/_scenarios/by-department/*.md` into per-scenario
files under `attacks/_scenarios/singles/{ID}.md`.

The council's orchestrator operates one scenario at a time. The department
files contain 4-5 scenarios each; keeping them as the catalog-of-record
while letting the council iterate on individual scenarios means we split
at `### {ID}. <title>` boundaries and write each chunk to its own file.

On scenario convergence, the orchestrator overwrites the single file.
The original by-department/ file remains untouched as reference.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path


_ID_HEADING_RE = re.compile(
    r"^(### ([A-Z]+\d+[a-z]?)\.\s.*)$",
    re.MULTILINE,
)


def split_department_file(src: Path, dest_dir: Path) -> list[tuple[str, Path]]:
    """Split a department markdown file into per-scenario files.
    Returns [(scenario_id, written_path), ...]."""
    text = src.read_text()
    matches = list(_ID_HEADING_RE.finditer(text))
    if not matches:
        return []

    dest_dir.mkdir(parents=True, exist_ok=True)
    written: list[tuple[str, Path]] = []
    for i, m in enumerate(matches):
        sid = m.group(2).upper()
        start = m.start(1)
        end = matches[i + 1].start(1) if i + 1 < len(matches) else len(text)
        # Strip trailing horizontal-rule separators between scenarios
        chunk = text[start:end].rstrip().rstrip("-").rstrip() + "\n"
        out_path = dest_dir / f"{sid}.md"
        out_path.write_text(chunk)
        written.append((sid, out_path))
    return written


def main() -> int:
    by_dept = Path("attacks/_scenarios/by-department")
    singles = Path("attacks/_scenarios/singles")
    if not by_dept.exists():
        print(f"missing: {by_dept}", file=sys.stderr)
        return 1
    total = 0
    for md in sorted(by_dept.glob("*.md")):
        written = split_department_file(md, singles)
        for sid, path in written:
            print(f"  {sid} → {path}")
            total += 1
    print(f"wrote {total} single-scenario files under {singles}/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
