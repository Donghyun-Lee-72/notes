#!/usr/bin/env python3
"""Check durable structural and identity requirements for Notes."""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit


LINK = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")
IMAGE = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
HEADING = re.compile(r"^(#{1,6})\s+\S", re.M)
NAV_MD = re.compile(r"(?:^|:\s+|-\s+)([A-Za-z0-9_./-]+\.md)\s*$", re.M)
EXPECTED = {
    "site_name": "Notes",
    "site_url": "https://notes.donghyunlee.me/",
    "repo_url": "https://github.com/Donghyun-Lee-72/notes",
}


def local_target(source: Path, raw: str) -> Path | None:
    value = raw.strip().split()[0].strip("<>")
    parsed = urlsplit(value)
    if parsed.scheme or parsed.netloc or value.startswith(("#", "mailto:")):
        return None
    path = unquote(parsed.path)
    if not path:
        return None
    return (source.parent / path).resolve()


def main() -> int:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
    docs = root / "docs"
    config = (root / "mkdocs.yml").read_text()
    errors: list[str] = []

    for key, expected in EXPECTED.items():
        match = re.search(rf"^{key}:\s*(.+?)\s*$", config, re.M)
        if not match or match.group(1) != expected:
            errors.append(f"mkdocs.yml: expected {key}: {expected}")
    if (docs / "CNAME").read_text().strip() != "notes.donghyunlee.me":
        errors.append("docs/CNAME: expected notes.donghyunlee.me")

    pages = sorted(docs.rglob("*.md"))
    english = {p.relative_to(docs).as_posix() for p in pages if not p.name.endswith(".ko.md")}
    nav = set(NAV_MD.findall(config))
    redirects = set(re.findall(r"^\s{8}([A-Za-z0-9_./-]+\.md):", config, re.M))
    missing_nav = sorted(english - nav - redirects)
    if missing_nav:
        errors.append("mkdocs.yml: canonical pages missing from nav: " + ", ".join(missing_nav))

    for page in pages:
        rel = page.relative_to(root)
        text = page.read_text(errors="replace")
        headings = HEADING.findall(text)
        if headings.count("#") != 1:
            errors.append(f"{rel}: expected exactly one level-1 heading")

        previous = 0
        for hashes in headings:
            level = len(hashes)
            if previous and level > previous + 1:
                errors.append(f"{rel}: heading level jumps from h{previous} to h{level}")
            previous = level

        for raw in LINK.findall(text):
            target = local_target(page, raw)
            if target is not None and not target.exists():
                errors.append(f"{rel}: broken local link: {raw}")
        for alt, raw in IMAGE.findall(text):
            if not alt.strip():
                errors.append(f"{rel}: image has empty alternative text: {raw}")
            target = local_target(page, raw)
            if target is not None and not target.exists():
                errors.append(f"{rel}: missing local image: {raw}")

    if errors:
        print("\n".join(errors), file=sys.stderr)
        print(f"Content-quality check failed: {len(errors)} issue(s)", file=sys.stderr)
        return 1
    print(f"Content-quality check passed: {len(pages)} pages, {len(english)} canonical")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
