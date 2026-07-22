# Authoring Notes

This file defines the internal standard for adding and improving pages. It is
kept outside `docs/` and is not part of the website.

## Reader contract

Write for a reader with bachelor's-level STEM literacy but no assumed
specialization in language models, microscopy, materials science, or chemistry.
Basic algebra, introductory data or programming concepts, and introductory
physical science may be assumed only when relevant. Define field-specific
terms, symbols, abbreviations, and assumptions at first use.

The reader should be able to understand the central idea without following an
external citation. A link or reference supports the explanation; it does not
replace it.

## Information architecture

The website has exactly two content domains:

1. **AI** — foundations, systems, evaluation, and AI4Science.
2. **Materials Science & Chemistry** — shared foundations, materials,
   chemistry, characterization, and related methods.

Start and Reference are navigation utilities, not additional content domains.
Place a new page in the closest existing group. Add a new group only when at
least two useful pages need it; avoid one-item navigation layers.

AI4Science remains under AI because it reuses AI foundations, retrieval,
tools, workflows, and evaluation. It should link to scientific domain pages
rather than duplicate them. Its neutral URL allows it to grow into a larger
subsection if enough distinct pages accumulate.

## Page design

- Cover one main concept or method per page.
- Begin with a plain definition and why the topic matters.
- Keep sections short and descriptive.
- Explain the mechanism before listing terminology or tools.
- Add a concrete example when it makes the idea easier to grasp.
- Define important choices, conditions, limitations, and common
  misinterpretations.
- End with two to four **Related notes** links when useful.
- Link to an existing explanation instead of repeating it.
- Keep product-specific details separate from durable concepts.

AI pages should identify validation, authority, state, failure modes, and
evaluation when those concerns apply. Scientific pages should distinguish
observation from inference and state relevant units, conditions, uncertainty,
measurement limits, and safety considerations.

## References

References are optional. Include them when a claim is quantitative, contested,
safety-sensitive, rapidly changing, or clearly attributable to prior work. Use
official documentation for tool behavior and public primary or review sources
for scientific claims. Do not add a ceremonial reference list that does not
help explain or verify the page.

## Connections and navigation

Use ordinary relative Markdown links. Check both directions when two pages are
strongly related. Section overview pages should act as maps: describe what is
available now, distinguish future topics from existing pages, and link directly
to every current page in the section.

## Language and publication

English is the canonical and currently published language. Korean source files
are retained but excluded from the build. Do not block an English correction on
a Korean update. If Korean publication is re-enabled, review its structure,
links, terminology, and claims against the current English page first.

## Dual-model publication gate

Every new page and every material revision must pass independent review by
both ChatGPT and Claude Code before it is added to the website. A material
revision changes a claim, definition, number, mechanism, example, instruction,
scope, limitation, citation, translation meaning, navigation, or rendered
output. Typographic, formatting, and equivalent-link corrections that cannot
change meaning are exempt from the model reviews, but still require the
automated checks below. A series of small edits that changes meaning is
material.

Give both reviewers the same draft, diff, public sources, and reader contract.
Do not show either reviewer the other's verdict until both reviews are
complete. Both reviewers must assess every dimension; use these lead roles to
force different kinds of scrutiny:

- **ChatGPT lead:** claim-to-source accuracy, citation quality, completeness,
  conceptual clarity, readability, and usefulness to the intended reader.
- **Claude Code lead:** technical operability, assumptions and failure modes,
  privacy and public-scope safety, bilingual and cross-page consistency,
  navigation, links, and build or render evidence.

Each review must report `pass`, `fail`, `unverifiable`, or `not applicable`
for every dimension. A `not applicable` verdict must include a reason.

1. **Accuracy and evidence:** material claims, numbers, units, mechanisms, and
   examples are supported by locatable public sources; observation, inference,
   and editorial guidance are distinguished. A model's confidence or general
   knowledge is not evidence.
2. **Clarity and usefulness:** the page satisfies the reader contract, defines
   specialist terms, explains the central mechanism, and states important
   limitations and common misinterpretations without unnecessary duplication.
3. **Operability:** procedures, commands, or design recommendations state the
   relevant assumptions, versions or environments, expected result, failure
   modes, validation method, and safe boundaries when applicable. A reader
   should not be led to believe an untested example is guaranteed to work.
4. **Sources and currency:** citations actually support the adjacent claims,
   links resolve, source authority matches the claim, and time-sensitive or
   version-specific statements are dated or scoped.
5. **Scope and publication safety:** the note belongs in the public site and
   contains no private provenance, personal data, unpublished material,
   internal path, sensitive authentication material, or operational detail.
6. **Consistency:** terminology, claims, numbers, caveats, related pages, and
   any Korean counterpart do not conflict with the canonical English page.
7. **Information architecture:** the page is in the correct section, is linked
   from the relevant overview or navigation, has useful related links, and
   does not create avoidable duplication or an orphan page.
8. **Build and presentation:** the public-content scan and strict site build
   pass, internal links resolve, and changed figures, tables, equations, and
   responsive layouts are inspected in rendered context when applicable.

A bare approval is not a review. Each reviewer must identify the draft or diff
reviewed, give a verdict for every dimension, cite the source location for each
challenged or material factual claim, and list required fixes separately from
optional improvements. Retain both review records and the automated check
results in the working task, pull request, or other private audit trail; do not
publish private review transcripts on the site.

For a material change, publication requires both reviewers to pass every
applicable dimension and the automated checks to pass. Any `fail` or
`unverifiable` result blocks publication. A non-material exempt change requires
the automated checks but not model verdicts. Resolve disagreements against the
primary or official source, not by asking more models to vote. If the evidence
remains ambiguous, narrow, qualify, or remove the claim, then rerun both
reviews on the revised draft. The final editor must spot-check at least one
material factual claim directly in its source and confirm that all required
fixes were incorporated.

## Review checklist

Before publishing a change:

1. Confirm the page belongs to one of the two content domains or Reference.
2. Check that the opening is understandable without specialist context.
3. Remove duplicated explanations and add useful internal links.
4. Verify claims, examples, units, limitations, and citations as applicable.
5. For a material change, obtain independent, complete passes from ChatGPT and
   Claude Code under the dual-model publication gate.
6. Confirm navigation and relative links resolve.
7. Run the public-content scan and strict site build.
8. Inspect the page in context, including its section overview and related notes.
