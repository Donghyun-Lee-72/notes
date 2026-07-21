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

## Review checklist

Before publishing a change:

1. Confirm the page belongs to one of the two content domains or Reference.
2. Check that the opening is understandable without specialist context.
3. Remove duplicated explanations and add useful internal links.
4. Verify claims, examples, units, limitations, and citations as applicable.
5. Confirm navigation and relative links resolve.
6. Run the public-content scan and strict site build.
7. Inspect the page in context, including its section overview and related notes.
