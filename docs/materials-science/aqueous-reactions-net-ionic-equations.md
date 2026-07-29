# Aqueous Reactions and Net Ionic Equations

An **aqueous reaction** occurs in water, but the notation `(aq)` says only that
a species is dissolved. It does not say that the species is ionic, that a
reaction is complete, or that the solution is safe. A **net ionic equation**
removes dissolved ions that remain unchanged and displays the smallest
chemically meaningful change.

This distinction matters in solution synthesis, separations, analysis, and
corrosion. A correct equation must represent the species actually present
under stated conditions while conserving every element and net charge.

## Separate dissolution from ion formation

**Dissolution** is the formation of a homogeneous solution from initially
separate phases. **Dissociation** is the separation of an entity or aggregate
into smaller entities, including separation of an ion pair into free ions.
They answer different questions: dissolution concerns mixing into one phase;
dissociation concerns which particles result
([IUPAC Gold Book, “dissolution”](https://goldbook.iupac.org/terms/view/D01806);
[“dissociation”](https://goldbook.iupac.org/terms/view/D01801)).

For example, in an unsaturated solution:

`C12H22O11(s) -> C12H22O11(aq)`

Sucrose dissolves, but its molecules remain neutral. By contrast, a soluble
ionic solid both dissolves and releases its pre-existing ions:

`Na2SO4(s) -> 2 Na^+(aq) + SO4^2-(aq)`

Water solvates the separated ions. The equation does not mean that neutral
`Na2SO4` molecules first existed in the crystal, nor that dissolution created
the ionic charges. Ionic solids are extended arrays, and their formulae state
charge-balanced ratios.

A covalent solute can form ions by reacting with water rather than by
separating ions that already existed. Acetic acid does so only partly:

`CH3COOH(aq) + H2O(l) ⇌ H3O^+(aq) + CH3COO^-(aq)`

The equilibrium arrow is essential: substantial neutral acid remains at
typical introductory-solution concentrations. Introductory texts often call
this acid **ionization**, while “acid dissociation” is also common. In either
wording, do not equate the process with dissolution. OpenStax distinguishes the
physical separation of ions from soluble ionic solids from the chemical
formation of ions by covalent electrolytes
([OpenStax, *Chemistry 2e*, §11.2](https://openstax.org/books/chemistry-2e/pages/11-2-electrolytes)).

## Strong, weak, and nonelectrolytes

An **electrolyte** supplies mobile ions in a solvent or when molten. Those ions
carry electric current
([IUPAC Gold Book, “electrolyte”](https://goldbook.iupac.org/terms/view/09061)).
The labels below refer to the extent to which dissolved solute produces ions,
not simply to how much solute was added. The ionized fraction of a weak
electrolyte is condition-dependent rather than one fixed number.

| Class | Particle-level description in water | Introductory representation |
| --- | --- | --- |
| Strong electrolyte | Nearly all dissolved formula units or molecules produce ions | Write separated ions in a complete ionic equation |
| Weak electrolyte | Only a fraction of dissolved solute produces ions | Keep the weak species intact unless its equilibrium is the reaction being shown |
| Nonelectrolyte | Dissolved solute remains predominantly neutral | Keep the molecular formula intact |

Soluble ionic salts, strong acids, and strong bases are common strong
electrolytes; weak acids and weak bases are common weak electrolytes; sucrose
is a nonelectrolyte. These are particle descriptions, not hazard ratings.
“Strong” does not mean concentrated: a dilute strong electrolyte can contain
fewer ions per litre than a more concentrated weak electrolyte. “Strong” also
does not mean highly soluble. A sparingly soluble ionic solid may dissociate
almost completely in the small portion that dissolves, yet still produce a
low total ion concentration
([OpenStax, *Chemistry 2e*, §11.2](https://openstax.org/books/chemistry-2e/pages/11-2-electrolytes)).

Conductivity is evidence for mobile ions, but its magnitude also depends on
ion concentration, charge, mobility, temperature, and the apparatus. A single
conductivity reading is therefore not a universal strength scale.

## Three equation views of one precipitation

Suppose dilute aqueous magnesium sulfate and sodium hydroxide are mixed at
room temperature in concentrations sufficient to form magnesium hydroxide.
The three equation forms emphasize different information
([OpenStax, *Chemistry 2e*, §4.1](https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations)).

### Molecular equation

`MgSO4(aq) + 2 NaOH(aq) -> Mg(OH)2(s) + Na2SO4(aq)`

The **molecular equation** groups dissolved ions into neutral formula units.
It is convenient for reagent amounts, but it can hide which particles change.

### Complete ionic equation

`Mg^2+(aq) + SO4^2-(aq) + 2 Na^+(aq) + 2 OH^-(aq) -> Mg(OH)2(s) + 2 Na^+(aq) + SO4^2-(aq)`

The **complete ionic equation** separates aqueous strong electrolytes into
their ions. It does not split the solid precipitate. The atom audit is
Mg `1 = 1`, S `1 = 1`, O `6 = 6`, H `2 = 2`, and Na `2 = 2`.
The total charge is zero on each side.

### Net ionic equation

`Mg^2+(aq) + 2 OH^-(aq) -> Mg(OH)2(s)`

`Na^+(aq)` and `SO4^2-(aq)` occur in equal amounts and the same state on both
sides. They are **spectator ions** for this represented change, so cancelling
them gives the **net ionic equation**. Its left-hand charge is
`(+2) + 2(-1) = 0`, matching the neutral solid, and its atoms also balance.

“Spectator” is equation-specific, not a claim that an ion has no physical
effect. Spectator ions can affect ionic strength, activity, conductivity, and
later equilibria. A different set of conditions can also make a previously
unchanged ion participate.

## Reaction labels describe different features

Reaction classifications are useful questions, not mutually exclusive bins.
The following independently chosen equations show the feature each label
tracks.

| Description | What to look for | Balanced net representation |
| --- | --- | --- |
| Precipitation | Dissolved species form a solid phase | `Mg^2+(aq) + 2 OH^-(aq) -> Mg(OH)2(s)` |
| Brønsted acid–base | A proton moves from an acid to a base | `NH4^+(aq) + OH^-(aq) ⇌ NH3(aq) + H2O(l)` |
| Gas-forming | Dissolved reactants produce a gas | `2 H3O^+(aq) + CO3^2-(aq) -> CO2(g) + 3 H2O(l)` |
| Complexation | Ligands bind a central atom or ion to form a coordination entity | `Ni^2+(aq) + 6 NH3(aq) ⇌ [Ni(NH3)6]^2+(aq)` |
| Redox | Oxidation states change through coupled oxidation and reduction | `Zn(s) + 2 H3O^+(aq) -> Zn^2+(aq) + H2(g) + 2 H2O(l)` |

The carbonate equation is both acid–base and gas-forming. The zinc equation
is both redox and gas-forming; both gas equations describe conditions where
the named gas evolves from the solution. Complex formation is also a Lewis
acid–base interaction because a ligand donates an electron pair to the central
species. IUPAC recommends **coordination entity** for a central atom with
attached ligands, while OpenStax explains coordination-complex formation as
Lewis acid–base association
([IUPAC Gold Book, “coordination entity”](https://goldbook.iupac.org/terms/view/C01330);
[OpenStax, *Chemistry 2e*, §15.2](https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases)).

The complexation arrow is reversible because the distribution of free and
bound species depends on equilibrium and composition. Likewise, aqueous metal
ions are solvated even when the compact symbol `Ni^2+(aq)` omits coordinated
water. A compact equation is a controlled representation, not a complete
microscopic picture.

## Treat solubility rules as conditional screens

Introductory solubility rules summarize recurring observations and are useful
for predicting whether common ionic combinations may precipitate. They are
not universal laws. “Insoluble” normally means low solubility under the
specified conditions, not exactly zero solubility
([OpenStax, *Chemistry 2e*, §4.2](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions)).

Temperature, concentration, solvent composition, pH, ionic strength, common
ions, and complex formation can change whether a solid appears
([OpenStax, *Chemistry 2e*,
§15.1](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution);
[§15.2](https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases)).
A rule-based screen should therefore state its context—for example, dilute
water near room temperature—and a consequential prediction should be checked
with appropriate equilibrium data or experiment. The state symbols in an
equation are conclusions under those conditions, not permanent labels attached
to a formula.

## A reliable writing and verification workflow

1. **Inventory the species and conditions.** Record correct formulae, charges,
   concentrations when relevant, temperature, solvent, and observed or
   justified states. Remember that `(aq)` means dissolved, not ionized.
2. **Write a chemically plausible skeleton.** Identify the likely change:
   solid formation, proton transfer, gas formation, coordination, redox, or a
   combination. Do not invent an exchange reaction merely because two
   solutions were mixed.
3. **Balance the molecular or overall equation.** Change coefficients only,
   never subscripts or ionic charges. Reduce coefficients to the smallest
   whole-number ratio when appropriate.
4. **Construct the complete ionic equation.** Split aqueous strong
   electrolytes into correctly charged ions. Keep solids, liquids, gases,
   nonelectrolytes, weak electrolytes, and intact coordination entities
   together. Preserve a reversible arrow when equilibrium is being represented.
5. **Cancel only unchanged species.** Remove equal amounts of exactly the same
   species in the same state from both sides. What remains is the net ionic
   equation. If everything cancels, the proposed equation gives no net
   reaction under its assumptions.
6. **Audit every line independently.** Count each element on both sides, then
   sum ionic charge with coefficients. Check formulae, coefficients, state
   symbols, and arrow direction again rather than assuming that cancellation
   preserved an earlier mistake.
7. **Check the chemical claim.** Name the feature that makes the representation
   plausible and state the conditions and limitations. A balanced equation
   alone does not establish rate, mechanism, extent, or experimental safety.

For the five classification equations above, the charge audits are,
respectively, `0 = 0`, `0 = 0`, `0 = 0`, `+2 = +2`, and `+2 = +2`.
Direct atom counts also balance every element in each line. This two-part
mass-and-charge audit is required even when an equation looks familiar.

## Common misconceptions and boundaries

- Dissolving is not synonymous with dissociating, and `(aq)` does not mean
  “split into ions.”
- Electrolyte strength is not concentration, solubility, or safety.
- Weak electrolytes, pure liquids, gases, solids, and nonelectrolytes should
  not be mechanically split in a complete ionic equation.
- Spectator ions are unchanged in a chosen equation; they are not absent from
  the solution or irrelevant to all properties.
- Precipitation, acid–base, gas-forming, complexation, and redox labels can
  overlap because they describe different aspects of change.
- A net ionic equation is stoichiometric bookkeeping. It does not by itself
  reveal elementary steps or prove that a reaction is fast or complete.

Real solutions can contain hydrated ions, ion pairs, hydrolyzed species, and
several competing complexes or precipitates. Concentrated solutions may
require activities rather than concentrations. This introductory workflow
deliberately postpones quantitative equilibrium, solubility-product, acid–base,
and redox balancing calculations, but it identifies where those later models
become necessary. MIT's first-year course likewise treats solubility and
acid–base equilibrium before moving to redox and transition-metal chemistry
([MIT OpenCourseWare 5.111SC syllabus](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/);
[resource index](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/)).

Equations are not mixing instructions. Gas-forming or redox reactions may
create toxic products, heat, or pressure, and an omitted spectator can still
affect hazards. Use an approved procedure, labels and safety data, appropriate
engineering controls and ventilation, and trained supervision. In everyday
use, never mix bleach or disinfectants with other cleaners; dangerous vapors
can result
([CDC, “Cleaning and Disinfecting with Bleach”](https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html)).

## Related notes

- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
- [General Chemistry Map and Learning Path](chemistry.md)

## References

- Centers for Disease Control and Prevention (CDC). “Cleaning and Disinfecting
  with Bleach.”
  <https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html>
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “dissolution,”
  “dissociation,” “electrolyte,” and “coordination entity.”
  <https://goldbook.iupac.org/terms/view/D01806>
  <https://goldbook.iupac.org/terms/view/D01801>
  <https://goldbook.iupac.org/terms/view/09061>
  <https://goldbook.iupac.org/terms/view/C01330>
- OpenStax. *Chemistry 2e*, §§4.1, 4.2, 11.2, 15.1, and 15.2.
  <https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations>
  <https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions>
  <https://openstax.org/books/chemistry-2e/pages/11-2-electrolytes>
  <https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution>
  <https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus and
  resource index. Used to check first-year depth and the progression from
  solution equilibria to redox and transition-metal chemistry.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
