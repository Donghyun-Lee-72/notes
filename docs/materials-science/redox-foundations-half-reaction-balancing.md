# Redox Foundations and Half-Reaction Balancing

An **oxidation–reduction (redox) reaction** couples electron loss with electron
gain. Oxidation is electron loss and an increase in oxidation state; reduction
is electron gain and a decrease in oxidation state. This bookkeeping makes it
possible to identify the two coupled changes and balance both matter and
charge, even when electrons do not appear in the overall equation
([IUPAC Gold Book, “oxidation”](https://goldbook.iupac.org/terms/view/O04362);
[“reduction”](https://goldbook.iupac.org/terms/view/R05222)).
For a covalent change, electron loss and gain can be a formal accounting of
redistributed bonding electrons rather than a literal transfer of free
electrons between isolated atoms
([OpenStax, *Chemistry 2e*, §4.2](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions)).

This page treats aqueous equations as representations of specified species.
Balancing can show whether an equation conserves atoms and charge. It cannot
by itself establish that those species predominate, that the reaction proceeds
in the written direction, or that it is fast.

## Keep three kinds of charge bookkeeping separate

**Actual charge** is the net electric charge of a complete entity. A sulfate
ion has actual charge `2-`; a neutral molecule has actual charge zero. For a
monatomic ion such as `Fe^3+`, the ion's actual charge is also its oxidation
state.

A **Lewis structure** is an electron-bookkeeping drawing that shows bonds and
nonbonding valence-electron pairs. **Formal charge** assigns the bonding
electrons in such a structure equally between the bonded atoms:

`formal charge = valence electrons - nonbonding electrons - 1/2(bonding electrons)`

Formal charges depend on a chosen Lewis representation. They help compare
electron-counting structures, but they are not measured charges residing on
individual atoms
([IUPAC Gold Book, “formal charge”](https://goldbook.iupac.org/terms/view/08169)).

**Oxidation state** instead makes an ionic approximation: heteronuclear bonding
electrons are assigned to the more electronegative partner—the bond's main
atomic contributor in the IUPAC model—while homonuclear bonds are divided
equally. It is a formal electron-counting model, not a measurement of an atom's
charge or a claim that a covalent bond is fully ionic
([IUPAC Gold Book, “oxidation state”](https://goldbook.iupac.org/terms/view/O04365);
[OpenStax, *Chemistry 2e*, §17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).
Real electron density in a covalent species can be uneven, but assigning an
atomic partial charge is model-dependent. Different population analyses,
electron-density partitions, or fits to measured properties can give different
values, so a numerical partial charge is incomplete unless its method is named.
It need not equal either formal charge or oxidation state
([IUPAC Gold Book, “partial atomic charges”](https://goldbook.iupac.org/terms/view/11482)).

The tetrafluoroborate ion, `BF4^-`, shows how the ledgers can disagree. Use the
Lewis representation with four single B–F bonds, no nonbonding electrons on B,
and three lone pairs on each F:

- The complete ion has actual charge `1-`.
- The formula above gives B formal charge
  `3 - 0 - 1/2(8) = -1`. Each F has formal charge
  `7 - 6 - 1/2(2) = 0`.
- F in a compound is assigned oxidation state `-1`. Because the oxidation
  states must sum to the ion charge, B has oxidation state `+3`:
  `x + 4(-1) = -1`, so `x = +3`.

The formal charge and oxidation state on B therefore differ even though each
complete set sums to the same ionic charge.

## Assign oxidation states from the model, not from slogans

Use the sum rule implied by that ionic approximation together with a short
priority list. These are assignment conventions, not statements about measured
atomic charge
([OpenStax, §4.2](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions);
[IUPAC Gold Book, “oxidation state”](https://goldbook.iupac.org/terms/view/O04365)).

1. An atom in an elemental substance has oxidation state `0`, including each
   atom in `O2`, `S8`, and a pure metal.
2. A monatomic ion has an oxidation state equal to its ionic charge.
3. The oxidation states of all atoms sum to the actual charge of the complete
   species.
4. Group 1 and group 2 metals in their ordinary compounds are assigned `+1`
   and `+2`, respectively. Fluorine in compounds is assigned `-1`.
5. Hydrogen is usually `+1` with nonmetals but is `-1` in metal hydrides.
6. Oxygen is usually `-2`, but each O is `-1` in a peroxide and the
   formula-level average is `-1/2` in a superoxide such as `KO2`. Oxygen has a
   positive state when bonded to fluorine; in `OF2`, O is `+2`.
7. Cl, Br, and I are commonly `-1`, except in compounds with O or a more
   electronegative halogen, where the sum rule determines another value.

Apply higher-priority constraints before a usual value. For example:

- In `CaH2`, Ca is `+2`, so each H is `-1`, not the usual `+1`.
- In `Na2O2`, each Na is `+1`, so each O is `-1`, not the usual `-2`.
- In `OF2`, each F is `-1`, so O is `+2`.
- In `IO4^-`, O is `-2`, and `x + 4(-2) = -1` gives I as `+7`.

A fractional formula-level average does not mean that an experiment found a
fraction of an electron fixed on each atom. It can summarize equivalent atoms
or unresolved sites within this bookkeeping scheme.

## Track both changed species and their roles

An **ionic equation** writes dissolved ionic species explicitly instead of
keeping every soluble electrolyte as a neutral formula unit. Consider the
independently constructed ionic equation:

`2 Fe^3+(aq) + Sn^2+(aq) -> 2 Fe^2+(aq) + Sn^4+(aq)`

Write the changes as half-reactions:

`2 Fe^3+(aq) + 2 e^- -> 2 Fe^2+(aq)`

`Sn^2+(aq) -> Sn^4+(aq) + 2 e^-`

Each Fe changes from `+3` to `+2` and gains one electron, so `Fe^3+` is
**reduced**. It accepts electrons and is the **oxidant** (oxidizing agent).
Sn changes from `+2` to `+4` and loses two electrons, so `Sn^2+` is
**oxidized**. It supplies electrons and is the **reductant** (reducing agent).
The electron counts are equal and cancel when the half-reactions are added
([OpenStax, §§4.2 and 17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).

The agent names describe what a reactant does to its partner, so they can feel
reversed at first: the oxidant is itself reduced, and the reductant is itself
oxidized.

### Disproportionation

In **disproportionation**, different atoms of one starting species move to
higher and lower oxidation states. A compact bookkeeping example is:

`2 Cu^+(aq) -> Cu^2+(aq) + Cu(s)`

The coupled half-reactions are:

`Cu^+(aq) -> Cu^2+(aq) + e^-`

`Cu^+(aq) + e^- -> Cu(s)`

One `Cu^+` is oxidized from `+1` to `+2`, while another is reduced from `+1`
to `0`. Thus `Cu^+` supplies both the reductant and oxidant roles. Cu atoms
balance `2 = 1 + 1`, charge balances `+2 = +2`, and one electron is produced
and consumed. Whether this net change is favored depends on the medium and on
species such as ligands; the balanced equation alone is not a prediction of
equilibrium.

## Balance an aqueous redox equation by half-reactions

An acidic-medium balance is represented here by two conservation ledgers,
rather than by a search for coefficients in the overall equation. Each ledger
represents one oxidation-state change and passes through the following
checkpoints.

**Chemical frame.** The medium is aqueous and acidic, and the formulas,
charges, and phases in the stated reactants and products remain unchanged.
Separate frames are opened for the oxidation and reduction changes. Only
coefficients and the bookkeeping species `H2O(l)`, `H+(aq)`, and `e^-` may enter.

**Atom closure.** Coefficients first make every element except H and O
equal across a frame. An O deficit is supplied with `H2O(l)`; the H imbalance
created or left by that choice is then supplied with `H+(aq)`. Water must precede
the hydrogen correction because it changes both atom counts.

**Charge closure.** Once the atoms agree, the actual charge on each side is
totalled. The charge difference is the required number of electrons, placed
on the more positive side. A valid oxidation ledger releases electrons, whereas
a valid reduction ledger accepts them. The opposite result is a signal to
recheck the split, oxidation states, and atom balance.

**Ledger recombination.** The least common multiple of the two
electron counts determines the scale factor for each entire half-reaction.
After addition, only species identical in formula, charge, and phase cancel.
A common factor may then reduce every coefficient. The result is accepted only
if every atom and the net charge match, no electron remains, and electron loss
equals electron gain.

This ledger method is limited to aqueous acidic media
([OpenStax, *Chemistry 2e*, §17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).
It does not authorize adding `H+`, `OH^-`, or `H2O` to an arbitrary
nonaqueous or solid-state reaction.

### Worked acidic example

The stated skeleton in acidic solution is:

`SeO3^2-(aq) + HSO3^-(aq) -> Se(s) + SO4^2-(aq)`

Se is `+4` in `SeO3^2-` and `0` in elemental `Se`, so one Se atom gains four
electrons. S is `+4` in `HSO3^-` and `+6` in `SO4^2-`, so each of two S
atoms must lose two electrons.

The reduction ledger develops as follows:

`SeO3^2-(aq) -> Se(s)`

`SeO3^2-(aq) -> Se(s) + 3 H2O(l)`

`6 H^+(aq) + SeO3^2-(aq) -> Se(s) + 3 H2O(l)`

`4 e^- + 6 H^+(aq) + SeO3^2-(aq) -> Se(s) + 3 H2O(l)`

The oxidation ledger develops as follows:

`HSO3^-(aq) -> SO4^2-(aq)`

`H2O(l) + HSO3^-(aq) -> SO4^2-(aq)`

`H2O(l) + HSO3^-(aq) -> SO4^2-(aq) + 3 H^+(aq)`

`H2O(l) + HSO3^-(aq) -> SO4^2-(aq) + 3 H^+(aq) + 2 e^-`

Multiplication of the oxidation half-reaction by two makes four electrons
available for cancellation. Addition then removes all six `H+` and two of the
three waters:

`SeO3^2-(aq) + 2 HSO3^-(aq) -> Se(s) + 2 SO4^2-(aq) + H2O(l)`

The full audit is:

- Atoms: Se `1 = 1`; S `2 = 2`; O `3 + 6 = 8 + 1 = 9`;
  H `2 = 2`.
- Charge: left `-2 + 2(-1) = -4`; right `2(-2) = -4`.
- Electrons: one Se atom gains `1(4) = 4`; two S atoms lose
  `2(2) = 4`.

All three checks are required. Atom balance alone cannot detect a missing
electron or an incorrect ionic charge.

## Convert an acidic result to basic solution

The acidic ledger can be changed to a basic-medium ledger without altering its
algebra. Suppose its simplified result contains `n H+(aq)` on one side.
Adding `n OH^-(aq)` to both sides preserves the equality; on the side containing
`H+(aq)`, the added ions account for `n H2O(l)`. Water common to both sides can
then be cancelled. Directly deleting `H+(aq)` or substituting `OH^-(aq)` for it
is not the same operation and does not preserve the atom and charge ledgers
([OpenStax, §17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).

The example begins from the independently chosen skeleton:

<div class="display-equation" role="math" aria-label="Nitrate aqueous plus aluminium solid yields ammonia aqueous plus tetrahydroxoaluminate aqueous.">
  NO<sub>3</sub><sup>−</sup>(aq) + Al(s) →
  NH<sub>3</sub>(aq) + [Al(OH)<sub>4</sub>]<sup>−</sup>(aq)
</div>

The acidic half-reactions are:

`NO3^-(aq) + 9 H^+(aq) + 8 e^- -> NH3(aq) + 3 H2O(l)`

`Al(s) + 4 H2O(l) -> [Al(OH)4]^-(aq) + 4 H^+(aq) + 3 e^-`

The reduction half-reaction is multiplied by three and the oxidation
half-reaction by eight. After adding and cancelling 24 electrons, 27 `H+`,
and nine `H2O`, the following equation is retained only as an **algebraic
acidic-form intermediate** for the conversion; it is not a claim that
`[Al(OH)4]^-(aq)` is stable in acidic solution:

<div class="display-equation" role="math" aria-label="Three nitrate aqueous plus eight aluminium solid plus twenty-three water liquid yields three ammonia aqueous plus eight tetrahydroxoaluminate aqueous plus five hydrogen ions aqueous.">
  3 NO<sub>3</sub><sup>−</sup>(aq) + 8 Al(s) + 23 H<sub>2</sub>O(l) →
  3 NH<sub>3</sub>(aq) + 8 [Al(OH)<sub>4</sub>]<sup>−</sup>(aq) +
  5 H<sup>+</sup>(aq)
</div>

Adding `5 OH^-` to both sides forms `5 H2O` on the right; cancellation against
the 23 waters on the left gives:

<div class="display-equation" role="math" aria-label="Three nitrate aqueous plus eight aluminium solid plus eighteen water liquid plus five hydroxide aqueous yields three ammonia aqueous plus eight tetrahydroxoaluminate aqueous.">
  3 NO<sub>3</sub><sup>−</sup>(aq) + 8 Al(s) + 18 H<sub>2</sub>O(l) +
  5 OH<sup>−</sup>(aq) → 3 NH<sub>3</sub>(aq) +
  8 [Al(OH)<sub>4</sub>]<sup>−</sup>(aq)
</div>

Audit the final basic equation:

- Atoms: N `3 = 3`; Al `8 = 8`; O `9 + 18 + 5 = 8(4) = 32`;
  H `18(2) + 5 = 3(3) + 8(4) = 41`.
- Charge: left `3(-1) + 5(-1) = -8`; right `8(-1) = -8`.
- Electrons: three N atoms change `+5 -> -3` and gain 24 electrons;
  eight Al atoms change `0 -> +3` and lose 24 electrons.

The conversion removes `H+` from the final basic equation. A result that still
contains both `H+` and excess `OH^-` has not been fully simplified.
Here `[Al(OH)4]^-(aq)` is a species stipulated by the exercise, not a speciation
prediction produced by balancing. Whether it is an adequate representation of
a real mixture, and whether the stated net reaction proceeds, require separate
equilibrium and reaction-condition evidence.

## Reaction labels answer different questions

Acid–base, precipitation, complexation, and redox classify different features,
so the tests for the labels are applied independently
([OpenStax, *Chemistry 2e*, §4.2](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions)).

- Proton transfer can make a process acid–base; the mere appearance of `H+`
  inserted during balancing does not prove a proton-transfer mechanism.
- Formation of a solid from dissolved reactants is the precipitation feature.
  In the observed reaction
  `2 Cu^2+(aq) + 4 I^-(aq) -> 2 CuI(s) + I2(aq)`, Cu changes
  `+2 -> +1`, two iodides change `-1 -> 0`, and `CuI(s)` is produced.
  The same equation therefore meets both the redox and precipitation tests
  ([University of Wisconsin–Madison Chemistry Department,
  “Copper(II) Nitrate with Sodium Iodide”](https://www2.chem.wisc.edu/deptfiles/genchem/lab/ccaold/mvhtm/cuno/cunonaix.htm)).
- Coordination can make a process complexation. In
  `Cu^2+(aq) + 4 NH3(aq) -> [Cu(NH3)4]^2+(aq)`, the Cu oxidation state
  remains `+2`; complex formation alone is not evidence of redox.

Species identity, phase, and medium must be chemically justified before
balancing. A perfectly balanced equation with the wrong dissolved species is
still a poor representation.

## Connect bookkeeping to electrochemical cells

In a single overall equation, electrons produced by oxidation equal electrons
consumed by reduction and cancel. A galvanic cell realizes the paired changes
at separate electrode interfaces: oxidation supplies electrons to the
electrode connected to the external circuit, and reduction takes electrons
from that circuit at the other electrode. The solutions need a separate ionic
connection—such as a salt bridge—so compensating ions can move as the
half-cells would otherwise accumulate charge. Thus the external electron path
and the internal ionic path close different parts of the cell circuit
([OpenStax, *Chemistry 2e*, §17.2](https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells)).

Oxidation-state changes identify electron-counting roles, but they do not give
a cell voltage, prove spontaneity, locate every electron in a real material,
or determine a reaction rate. Those questions require thermodynamics,
equilibrium, electrode conditions, transport, and kinetics.

## Limitations and common misconceptions

- **Oxidation is not synonymous with adding oxygen.** Electron loss or an
  oxidation-state increase is the general criterion.
- **The oxidant is reduced; the reductant is oxidized.** Name the changed
  reactant first, then assign its agent role.
- **Oxidation state is not a measured atomic charge.** Formal charge, partial
  charge, and oxidation state use different partitions and can disagree.
- **Coefficients do not change an atom's oxidation state.** They change how
  many formula units participate; subscripts and ionic charges define the
  represented species and must not be altered to balance an equation.
- **A balanced equation is necessary, not predictive.** It does not establish
  speciation, direction, extent, rate, or mechanism.
- **Electrons must cancel from the net reaction.** If they remain, the paired
  half-reactions or their multipliers are incomplete.
- **The medium matters.** Use the acidic or basic procedure only for an
  aqueous reaction stated in that medium, and recheck the plausibility of the
  written species after algebraic balancing.

## Related notes

- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
- [General Chemistry Map and Learning Path](chemistry.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)

## References

- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “oxidation,”
  “reduction,” “oxidation state,” “formal charge,” and “partial atomic
  charges.”
  <https://goldbook.iupac.org/terms/view/O04362>
  <https://goldbook.iupac.org/terms/view/R05222>
  <https://goldbook.iupac.org/terms/view/O04365>
  <https://goldbook.iupac.org/terms/view/08169>
  <https://goldbook.iupac.org/terms/view/11482>
- OpenStax. *Chemistry 2e*, §§4.2, 17.1, and 17.2. Used for introductory redox
  coverage, oxidation-state exceptions, reaction classification, the
  half-reaction method, and the electron/ion paths in a galvanic cell. The
  worked balancing equations on this page were constructed independently.
  <https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions>
  <https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry>
  <https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells>
- University of Wisconsin–Madison Chemistry Department. “Copper(II) Nitrate
  with Sodium Iodide.” Used to verify the phase-labelled CuI reaction.
  <https://www2.chem.wisc.edu/deptfiles/genchem/lab/ccaold/mvhtm/cuno/cunonaix.htm>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus and
  resource index. Used to check first-year depth and the placement of redox
  among its prerequisites.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
