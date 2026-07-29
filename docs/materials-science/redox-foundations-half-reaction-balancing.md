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

**Formal charge** assigns the bonding electrons in a Lewis structure equally
between the bonded atoms:

`formal charge = valence electrons - nonbonding electrons - 1/2(bonding electrons)`

Formal charges depend on a chosen Lewis representation. They help compare
electron-counting structures, but they are not measured charges residing on
individual atoms.

**Oxidation state** instead makes an ionic approximation: heteronuclear bonding
electrons are assigned to one partner according to the oxidation-state rules,
while homonuclear bonds are divided equally. It is a formal electron-counting
model, not a measurement of an atom's charge or a claim that a covalent bond
is fully ionic
([IUPAC Gold Book, “oxidation state”](https://goldbook.iupac.org/terms/view/O04365);
[OpenStax, *Chemistry 2e*, §17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).
Real electron density in a covalent species can be uneven, but assigning an
atomic partial charge requires a stated measurement or partitioning model and
need not equal either formal charge or oxidation state.

The tetrafluoroborate ion, `BF4^-`, shows all three ideas:

- The complete ion has actual charge `1-`.
- In its usual Lewis structure, B has formal charge `-1` and each F has formal
  charge `0`.
- F in a compound is assigned oxidation state `-1`. Because the oxidation
  states must sum to the ion charge, B has oxidation state `+3`:
  `x + 4(-1) = -1`, so `x = +3`.

The formal charge and oxidation state on B therefore differ even though each
complete set sums to the same ionic charge.

## Assign oxidation states from the model, not from slogans

Use the defining sum rule together with a short priority list. These are
assignment conventions, not statements about measured atomic charge
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

Consider the independently constructed ionic equation:

`2 Fe^3+ + Sn^2+ -> 2 Fe^2+ + Sn^4+`

Write the changes as half-reactions:

`2 Fe^3+ + 2 e^- -> 2 Fe^2+`

`Sn^2+ -> Sn^4+ + 2 e^-`

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

`2 Cu^+ -> Cu^2+ + Cu`

The coupled half-reactions are:

`Cu^+ -> Cu^2+ + e^-`

`Cu^+ + e^- -> Cu`

One `Cu^+` is oxidized from `+1` to `+2`, while another is reduced from `+1`
to `0`. Thus `Cu^+` supplies both the reductant and oxidant roles. Cu atoms
balance `2 = 1 + 1`, charge balances `+2 = +2`, and one electron is produced
and consumed. Whether this net change is favored depends on the medium and on
species such as ligands; the balanced equation alone is not a prediction of
equilibrium.

## Balance an aqueous redox equation by half-reactions

For an acidic aqueous equation:

1. Write oxidation and reduction skeletons.
2. In each half-reaction, balance elements other than H and O.
3. Balance O with `H2O`, then H with `H+`.
4. Balance actual charge with `e^-`. Electrons must appear on the product side
   of oxidation and the reactant side of reduction.
5. Multiply the half-reactions to make electron counts equal, add them, and
   cancel identical species.
6. Reduce all coefficients only if they share a common factor, then audit
   every element and the total charge.

This is an algebraic conservation method for aqueous acidic media
([OpenStax, *Chemistry 2e*, §17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).
It does not authorize adding `H+`, `OH^-`, or `H2O` to an arbitrary
nonaqueous or solid-state reaction.

### Worked acidic example

Balance the stated skeleton in acidic solution:

`SeO3^2- + HSO3^- -> Se + SO4^2-`

Se is `+4` in `SeO3^2-` and `0` in elemental `Se`, so one Se atom gains four
electrons. S is `+4` in `HSO3^-` and `+6` in `SO4^2-`, so each of two S
atoms must lose two electrons.

Balance the reduction half-reaction:

`SeO3^2- -> Se`

`SeO3^2- -> Se + 3 H2O`

`6 H^+ + SeO3^2- -> Se + 3 H2O`

`4 e^- + 6 H^+ + SeO3^2- -> Se + 3 H2O`

Balance the oxidation half-reaction:

`HSO3^- -> SO4^2-`

`H2O + HSO3^- -> SO4^2-`

`H2O + HSO3^- -> SO4^2- + 3 H^+`

`H2O + HSO3^- -> SO4^2- + 3 H^+ + 2 e^-`

Multiply the oxidation half-reaction by two, add, and cancel four electrons,
all six `H+`, and two of the three waters:

`SeO3^2- + 2 HSO3^- -> Se + 2 SO4^2- + H2O`

The full audit is:

- Atoms: Se `1 = 1`; S `2 = 2`; O `3 + 6 = 8 + 1 = 9`;
  H `2 = 2`.
- Charge: left `-2 + 2(-1) = -4`; right `2(-2) = -4`.
- Electrons: one Se atom gains `1(4) = 4`; two S atoms lose
  `2(2) = 4`.

All three checks are required. Atom balance alone cannot detect a missing
electron or an incorrect ionic charge.

## Convert an acidic result to basic solution

For a basic aqueous equation, first obtain a correct acidic form. Add one
`OH^-` to **both** sides for every remaining `H+`; combine each
`H+ + OH^-` pair into `H2O`, then cancel water present on both sides. Do not
delete `H+` or replace it with `OH^-`, because either move changes charge and
hydrogen balance
([OpenStax, §17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).

Start from the independently chosen skeleton:

`NO3^- + Al -> NH3 + [Al(OH)4]^-`

The acidic half-reactions are:

`NO3^- + 9 H^+ + 8 e^- -> NH3 + 3 H2O`

`Al + 4 H2O -> [Al(OH)4]^- + 4 H^+ + 3 e^-`

The reduction half-reaction is multiplied by three and the oxidation
half-reaction by eight. After adding and cancelling 24 electrons, 27 `H+`,
and nine `H2O`, the acidic intermediate is:

`3 NO3^- + 8 Al + 23 H2O -> 3 NH3 + 8 [Al(OH)4]^- + 5 H^+`

Add `5 OH^-` to both sides. The five pairs on the right form `5 H2O`;
cancel those five waters against the 23 on the left:

`3 NO3^- + 8 Al + 18 H2O + 5 OH^- -> 3 NH3 + 8 [Al(OH)4]^-`

Audit the final basic equation:

- Atoms: N `3 = 3`; Al `8 = 8`; O `9 + 18 + 5 = 8(4) = 32`;
  H `18(2) + 5 = 3(3) + 8(4) = 41`.
- Charge: left `3(-1) + 5(-1) = -8`; right `8(-1) = -8`.
- Electrons: three N atoms change `+5 -> -3` and gain 24 electrons;
  eight Al atoms change `0 -> +3` and lose 24 electrons.

The conversion removes `H+` from the final basic equation. A result that still
contains both `H+` and excess `OH^-` has not been fully simplified.
Writing the aluminium product as `[Al(OH)4]^-` assumes a sufficiently basic
aqueous medium; actual speciation and whether the stated reaction proceeds
must still be checked for the conditions.

## Reaction labels answer different questions

Acid–base, precipitation, complexation, and redox are not mutually exclusive
names for an equation. Test the defining change for each label
([OpenStax, *Chemistry 2e*, §4.2](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions)).

- Proton transfer can make a process acid–base; the mere appearance of `H+`
  inserted during balancing does not prove a proton-transfer mechanism.
- Formation of a sparingly soluble solid can make a process precipitation.
  In `2 Cu^2+ + 4 I^- -> 2 CuI(s) + I2`, Cu changes `+2 -> +1` and two
  iodides change `-1 -> 0`, while solid `CuI` also forms. The equation
  therefore records both redox and precipitation aspects.
- Coordination can make a process complexation. In
  `Cu^2+ + 4 NH3 -> [Cu(NH3)4]^2+`, the Cu oxidation state remains `+2`;
  complex formation alone is not evidence of redox.

Species identity, phase, and medium must be chemically justified before
balancing. A perfectly balanced equation with the wrong dissolved species is
still a poor representation.

## Connect bookkeeping to electrochemical cells

In a single overall equation, electrons produced by oxidation equal electrons
consumed by reduction and cancel. If the half-reactions occur at spatially
separated electrodes, electrons can travel through an external electronic
path while ions move through the electrolyte to avoid sustained charge
accumulation. That separation is the conceptual bridge from half-reaction
bookkeeping to electrochemical cells
([OpenStax, §17.1](https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry)).

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
  “reduction,” and “oxidation state.”
  <https://goldbook.iupac.org/terms/view/O04362>
  <https://goldbook.iupac.org/terms/view/R05222>
  <https://goldbook.iupac.org/terms/view/O04365>
- OpenStax. *Chemistry 2e*, §§4.2 and 17.1. Used for introductory redox
  coverage, oxidation-state exceptions, reaction classification, and the
  half-reaction method. The worked equations on this page were constructed
  independently.
  <https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions>
  <https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus and
  resource index. Used to check first-year depth and the placement of redox
  among its prerequisites.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
