# Aqueous Reactions and Net Ionic Equations

An **aqueous reaction** occurs in water, but the notation `(aq)` says only that
a species is dissolved. It does not say that the species is ionic, that a
reaction is complete, or that the solution is safe. A **net ionic equation**
removes dissolved ions that remain unchanged and displays the smallest
chemically meaningful change.

This distinction matters in solution synthesis, separations, analysis, and
corrosion. A correct equation must represent the species actually present
under stated conditions while conserving every element and net charge.

State symbols describe the represented physical setting: `(s)` is a solid,
`(l)` a liquid, `(g)` a gas, and `(aq)` a species dissolved in water. They are
part of the chemical claim, not decoration. This note assumes familiarity with
formulae, charge, and coefficients, but no separate bonding note: that
prerequisite remains planned. The ligand and Lewis acid–base terms needed
below are defined locally; orbital-level bonding models are outside this
note's scope.

## Read state and particle identity separately

Start with two particle inventories: what entered the water, and what is
present after it entered. In an unsaturated sucrose solution, the same neutral
molecule appears on both sides:

`C12H22O11(s) -> C12H22O11(aq)`

Sodium sulfate requires a different inventory. Its solid is an extended ionic
array, and water disperses the charged constituents:

`Na2SO4(s) -> 2 Na^+(aq) + SO4^2-(aq)`

The second equation neither inserts a neutral `Na2SO4` molecule between the
solid and solution nor assigns the charges during mixing. The solid formula
records the charge-balanced ratio.

These examples separate two ideas. Use **dissolution** for the phase-level
result: added material becomes part of one solution. Use **dissociation** only
when the particle ledger must replace one chemical unit with multiple product
species. One can occur without the other, as the sucrose line shows. IUPAC
defines the terms separately
([IUPAC Gold Book, “dissolution”](https://goldbook.iupac.org/terms/view/D01806);
[“dissociation”](https://goldbook.iupac.org/terms/view/D01801)).

A covalent solute can form ions by reacting with water rather than by
unpacking ions from a crystal. **Hydronium**, `H3O^+`, is the protonated water
ion formed when a water molecule accepts a proton. Acetic acid produces
hydronium only to a limited equilibrium extent:

`CH3COOH(aq) + H2O(l) ⇌ H3O^+(aq) + CH3COO^-(aq)`

The reversible arrow records coexistence of neutral acid and ions, rather than
complete conversion. Introductory usage may call this **ionization** or acid
dissociation; neither label turns it into the physical act of dissolving.
OpenStax treats ion release from ionic solids and ion-producing solvent
reactions of covalent solutes as different microscopic routes
([OpenStax, *Chemistry 2e*, §11.2](https://openstax.org/books/chemistry-2e/pages/11-2-electrolytes)).

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
effect. **Ionic strength** is one-half the sum of each ion's concentration
multiplied by the square of its charge number. It describes the overall
charged environment, so a multivalent ion receives greater weight.
**Activity** is a thermodynamic measure of a species' effective availability
relative to a chosen standard state; it replaces raw concentration in exact
equilibrium expressions. Thus a cancelled ion can still change solution
properties or the relation between concentration and activity. Under another
set of conditions it may also enter the represented reaction
([IUPAC Gold Book, “ionic strength”](https://goldbook.iupac.org/terms/view/I03180);
[“activity”](https://goldbook.iupac.org/terms/view/A00115)).

## Decide which dissolved species to split

An **electrolyte** provides mobile ions in a solvent or in the molten state,
allowing ionic conduction
([IUPAC Gold Book, “electrolyte”](https://goldbook.iupac.org/terms/view/09061)).
For equation writing, classify the particles in the dissolved portion rather
than the amount originally added:

| Class | Dominant particle picture in water | Complete-ionic treatment |
| --- | --- | --- |
| Strong electrolyte | Dissolved material is represented almost entirely as ions | Show its component ions |
| Weak electrolyte | Neutral and ionic forms coexist to an appreciable extent | Retain the neutral form unless displaying its equilibrium |
| Nonelectrolyte | Dissolved particles remain mainly neutral | Retain the molecular formula |

Soluble salts, strong acids, and strong bases are familiar strong
electrolytes; weak acids and bases are weak electrolytes; sucrose is a
nonelectrolyte. These names do not rank hazard, concentration, or solubility.
Solubility asks how much material enters solution, whereas electrolyte
strength asks what particle forms characterize the dissolved share. A
sparingly soluble salt can therefore yield few ions overall even when the
material that has entered solution is represented as ions
([OpenStax, *Chemistry 2e*, §11.2](https://openstax.org/books/chemistry-2e/pages/11-2-electrolytes)).

Conductivity can reveal mobile ions, but its magnitude also reflects their
amounts, charges, mobilities, temperature, and the measurement setup. It is not
a context-free scale of electrolyte strength.

## Reaction labels describe different features

Reaction classifications are useful questions, not mutually exclusive bins.
The following independently chosen equations show the feature each label
tracks.

| Description | What to look for | Balanced net representation |
| --- | --- | --- |
| Precipitation | Dissolved species form a solid phase | `Mg^2+(aq) + 2 OH^-(aq) -> Mg(OH)2(s)` |
| Brønsted acid–base | A proton moves from an acid to a base | `NH4^+(aq) + OH^-(aq) ⇌ NH3(aq) + H2O(l)` |
| Gas-forming | Acidic carbonate solution evolves a gas | `2 H3O^+(aq) + CO3^2-(aq) -> CO2(g) + 3 H2O(l)` |
| Complexation | Ligands bind a central atom or ion to form a coordination entity | `Ag^+(aq) + 2 NH3(aq) ⇌ [Ag(NH3)2]^+(aq)` |
| Redox | A metal in suitable acid evolves hydrogen while oxidation states change | `Zn(s) + 2 H3O^+(aq) -> Zn^2+(aq) + H2(g) + 2 H2O(l)` |

The carbonate equation is both acid–base and gas-forming. The zinc equation is
both redox and gas-forming. A **ligand** is an ion or molecule attached to a
central species; in the Lewis description used here, the ligand is an
electron-pair donor and the central species is an electron-pair acceptor.
IUPAC defines the bracketed metal-plus-ligand unit used here as a
**coordination entity**, and OpenStax describes complex-ion formation with the
Lewis model
([IUPAC Gold Book, “coordination entity”](https://goldbook.iupac.org/terms/view/C01330);
[OpenStax, *Chemistry 2e*, §15.2](https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases)).

The silver–ammonia equation is the specific aqueous formation equilibrium
given in OpenStax §15.2. It applies when `Ag^+` and sufficient unprotonated
`NH3` coexist; its reversible arrow does not guarantee that the complex is the
only silver species. Water hydration, acid conversion of `NH3` to `NH4^+`,
other ligands, and precipitating anions can change the species distribution.
The compact equation therefore identifies one supported equilibrium under
stated composition, not a complete microscopic inventory
([OpenStax, *Chemistry 2e*, §15.1](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution);
[§15.2](https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases)).

## Treat solubility rules as conditional screens

Introductory solubility rules summarize recurring observations and are useful
for predicting whether common ionic combinations may precipitate. They are
not universal laws. “Insoluble” normally means low solubility under the
specified conditions, not exactly zero solubility
([OpenStax, *Chemistry 2e*, §4.2](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions)).

For a sparingly soluble ionic solid at saturation, the **solubility product**,
`Ksp`, is the equilibrium constant constructed from the dissolved-ion
activities, with each exponent set by the dissolution stoichiometry; the pure
solid contributes no variable factor. A precipitation prediction compares the
corresponding reaction quotient, `Qsp`, with `Ksp`. The cited treatment
directly supports changes in dissolved reactant levels, pH, common-ion
addition, and ligand complexation as reasons that this comparison—and thus
whether a solid appears—can change
([IUPAC Gold Book, “solubility product”](https://goldbook.iupac.org/terms/view/S05742);
[OpenStax, *Chemistry 2e*,
§15.1](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution);
[§15.2](https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases)).
A rule-based screen should therefore state its context—for example, dilute
water near room temperature—and a consequential prediction should be checked
with appropriate equilibrium data or experiment. The state symbols in an
equation are conclusions under those conditions, not permanent labels attached
to a formula. For a nonideal solution, ionic strength alone is not a
precipitation verdict; a specified activity model and suitable data are needed.

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
respectively, `0 = 0`, `0 = 0`, `0 = 0`, `+1 = +1`, and `+2 = +2`.
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
- A net ionic equation is an atom-and-charge summary of the represented
  change. It does not by itself reveal elementary steps or prove that a
  reaction is fast or complete.

Real solutions can contain hydrated ions, ion pairs, hydrolyzed species, and
several competing complexes or precipitates. In nonideal solutions,
concentrations may be inadequate proxies for the activities already defined
above. This introductory workflow postpones quantitative equilibrium,
solubility-product, acid–base, and redox balancing calculations, but identifies
where those later models become necessary. MIT's first-year course likewise
treats solubility and acid–base equilibrium before moving to redox and
transition-metal chemistry
([MIT OpenCourseWare 5.111SC syllabus](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/);
[resource index](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/)).

Equations are not mixing instructions. Gas-forming or redox reactions may
create toxic products, heat, or pressure, and an omitted spectator can still
affect hazards. Use an approved procedure, labels and safety data, appropriate
engineering controls and ventilation, and trained supervision. Household
cleaner compatibility must come from the product directions, not from a net
ionic equation or an improvised trial. CDC guidance places bleach and other
disinfectants behind a no-mixing boundary: adding another cleaner or
disinfectant can create an inhalation hazard
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
  “dissociation,” “electrolyte,” “coordination entity,” “ionic strength,”
  “activity,” and “solubility product.”
  <https://goldbook.iupac.org/terms/view/D01806>
  <https://goldbook.iupac.org/terms/view/D01801>
  <https://goldbook.iupac.org/terms/view/09061>
  <https://goldbook.iupac.org/terms/view/C01330>
  <https://goldbook.iupac.org/terms/view/I03180>
  <https://goldbook.iupac.org/terms/view/A00115>
  <https://goldbook.iupac.org/terms/view/S05742>
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
