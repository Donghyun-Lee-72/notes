# Notes

Notes is a public guide organized into AI and Materials Science & Chemistry.
AI4Science is a bridge from AI methods to scientific applications. Notes are
written and published in English only. The site is maintained by Donghyun Lee
and published as a static GitHub Pages site.

Only reviewed public-facing material belongs in this repository. Private notes,
project records, source archives, internal paths, and operational details are
excluded.

## Quality Gates

```bash
python3 scripts/public_scan.py .
python3 scripts/content_quality.py .
mkdocs build --strict
```

All checks run in GitHub Actions before deployment. A failed safety scan,
content check, or strict build blocks publication.

## License

Unless a page states otherwise, the written content is available under the
[Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

## Local Preview

```bash
python -m pip install mkdocs==1.6.1 mkdocs-material==9.7.6 mkdocs-redirects==1.2.2
mkdocs serve
```
