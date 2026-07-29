# Chemical Language, the Mole, and Stoichiometry

Chemistry uses formulae to identify composition and balanced equations to
track how much of each substance reacts. **Stoichiometry** is the quantitative
use of those equations. It connects atom-scale descriptions to measurable
mass and solution volume, so it is a prerequisite for planning synthesis and
checking whether a reported product amount is plausible.

This page assumes pure substances with the stated formulae, complete reaction
according to the displayed equation unless a yield is specified, and enough
information to neglect competing reactions. Real experiments may violate
those assumptions.

## Read symbols, formulae, and formula units

A **chemical symbol** identifies an element: `Mg` denotes magnesium and `Cl`
denotes chlorine. A **chemical formula** gives the elements and their relative
numbers in the represented entity. In `H2O`, the subscript 2 belongs to the
formula and says that each water molecule contains two hydrogen atoms. A
missing subscript means one. Formulae give composition; a molecular formula
alone does not fully specify how atoms are connected
([OpenStax, *Chemistry 2e*, §2.4](https://openstax.org/books/chemistry-2e/pages/2-4-chemical-formulas)).

For a substance made of discrete molecules, such as `H2O`, the entity can be a
**molecule**. An ionic solid is an extended array rather than a collection of
separate molecules. Its **formula unit** is the smallest electrically neutral
whole-number ratio represented by the formula. Thus `CaCl2` denotes one
calcium ion for every two chloride ions: `Ca^2+ + 2 Cl^-` has net charge zero
([OpenStax, §3.1](https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept)).

A **coefficient** multiplies the entire formula, whereas a subscript changes
the formula itself:

- Two `H2O` molecules contain four H atoms and two O atoms. At the amount
  scale, `2 mol H2O` contains `4 mol` of H atoms and `2 mol` of O atoms.
- `H2O2` represents hydrogen peroxide, a different substance.

When balancing an equation, change coefficients only. Changing a subscript
changes chemical identity rather than conserving a specified substance
([OpenStax, *Chemistry 2e*, §§2.4 and 4.1](https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations)).

## Keep the quantities distinct

Several related quantities answer different questions:

- **Amount of substance**, symbol `n`, counts specified entities in chemical
  units; its SI unit is the mole (`mol`).
- **Entity count**, symbol `N`, is a dimensionless number of specified atoms,
  molecules, ions, or formula units.
- **Mass**, symbol `m`, is measured here in grams (`g`).
- **Molar mass**, symbol `M`, is the conversion factor between a sample's
  amount and its mass: `M = m/n`. This page reports it in `g mol^-1`
  ([IUPAC Gold Book, “molar mass”](https://goldbook.iupac.org/terms/view/12214)).
- **Amount concentration**, symbol `c`, assigns a solute amount to the total
  solution volume: `c = n/V`. This page uses `mol L^-1`. Many chemistry texts
  call this quantity **molarity** and also give it the symbol `M`; here `c`
  prevents confusion with molar mass
  ([IUPAC Gold Book, “amount concentration”](https://goldbook.iupac.org/terms/view/A00295);
  [OpenStax, §3.3](https://openstax.org/books/chemistry-2e/pages/3-3-molarity)).

The SI fixes the Avogadro constant at exactly
`N_A = 6.02214076 × 10^23 mol^-1`. It therefore connects amount of substance
to a count of named elementary entities: an amount of `1 mol` corresponds to
`6.02214076 × 10^23` of them
([BIPM, “mole”](https://www.bipm.org/en/si-base-units/mole)). In symbols:

`N = n N_A` and `n = N/N_A`

Specify the elementary entity whenever stating an amount. One mole of O atoms
and one mole of `O2` molecules contain different numbers of oxygen atoms.

Molar mass connects amount and mass:

`n = m/M` and `m = nM`

The displayed relative atomic-mass values for Mg, H, and Cl are `24.31`,
`1.008`, and `35.45`, respectively
([OpenStax, *Chemistry 2e*, Periodic Table](https://openstax.org/books/chemistry-2e/pages/a-the-periodic-table)),
and are dimensionless. The corresponding molar masses used below are
`M(Mg) = 24.31 g mol^-1`, `M(H) = 1.008 g mol^-1`, and
`M(Cl) = 35.45 g mol^-1`. Therefore,
`M(HCl) = 1.008 + 35.45 = 36.458 g mol^-1` and
`M(MgCl2) = 24.31 + 2(35.45) = 95.21 g mol^-1`.
Formula or molecular mass is obtained by summing the atomic masses represented
by a formula; molar mass is the corresponding mass per mole
([OpenStax, §3.1](https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept)).
The reference values and intermediate molar masses here retain more digits
than the measured inputs so that premature rounding does not control the
result.

## A balanced equation is a conservation statement

Consider:

`Mg + 2 HCl -> MgCl2 + H2`

The smallest whole-number coefficients are `1:2:1:1`. Counting atoms gives Mg
`1 = 1`, H `2 = 2`, and Cl `2 = 2`, so the equation conserves each element.
The coefficients also state amount ratios:

`1 mol Mg : 2 mol HCl : 1 mol MgCl2 : 1 mol H2`

These ratios are exact consequences of the balanced representation, not
measured masses. For example, `n(MgCl2) = n(HCl)/2` only when HCl is the
reactant amount being consumed according to this equation. Balanced
coefficients provide the conversion factors used in reaction stoichiometry
([OpenStax, §4.3](https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry)).

A useful audit is to count every element before calculating, then write each
conversion so unwanted units cancel:

`g reactant -> mol reactant -> mol product -> g product`

Mass does not convert directly through a coefficient ratio; amounts in moles
do.

## Limiting reactant, theoretical yield, and percent yield

Suppose `5.40 g Mg` is mixed with `18.0 g HCl` and the reaction above is the
only reaction. Which reactant limits `MgCl2`, and what is the yield if
`18.7 g MgCl2` is isolated?

First convert both reactants to amounts:

`n(Mg) = 5.40 g / 24.31 g mol^-1 = 0.222131... mol`

`n(HCl) = 18.0 g / 36.458 g mol^-1 = 0.493719... mol`

Consuming all Mg requires:

`0.222131... mol Mg × (2 mol HCl / 1 mol Mg) = 0.444262... mol HCl`

More HCl is available than required, so Mg is the **limiting reactant**: under
the stated model, it sets the maximum product amount. HCl is in excess. The
same conclusion follows by computing the possible product from each reactant:
Mg permits `0.222131... mol MgCl2`, while HCl permits
`0.493719.../2 = 0.246859... mol MgCl2`; the smaller product amount controls
([OpenStax, §4.4](https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields)).

The **theoretical yield** is the maximum product predicted from the limiting
reactant under the model:

`m_theoretical = 0.222131... mol × 95.21 g mol^-1 = 21.1491... g`

The **actual yield** is the experimentally isolated product mass, here
`18.7 g`. **Percent yield** compares the two:

`percent yield = (actual yield / theoretical yield) × 100%`

`= (18.7 g / 21.1491... g) × 100% = 88.4%`

The limiting-reactant choice used unrounded amounts. Both input masses have
three significant figures, so `21.1 g` theoretical yield and `88.4%` percent
yield are appropriately reported to three significant figures. A yield below
100% can reflect incomplete conversion, competing reactions, or loss during
isolation. A value above 100% does not create matter; it signals that an
assumption or measurement needs checking, for example residual solvent or an
impure product.

## Molarity and solution stoichiometry

Amount concentration turns a measured solution volume into solute amount:

`n = cV`

Suppose `25.00 mL` of `0.1600 mol L^-1 Na2CO3` solution is to react exactly
with `0.1000 mol L^-1 CaCl2` solution according to:

`Na2CO3 + CaCl2 -> CaCO3 + 2 NaCl`

The coefficients are `1:1:1:2`. Atom counts are Na `2 = 2`, C `1 = 1`,
O `3 = 3`, Ca `1 = 1`, and Cl `2 = 2`. The formula units are also neutral:
`2 Na^+ + CO3^2-` and `Ca^2+ + 2 Cl^-` each sum to zero charge.

Convert millilitres to litres before applying `c = n/V`:

`n(Na2CO3) = 0.1600 mol L^-1 × 0.02500 L = 0.004000 mol`

The 1:1 ratio requires `0.004000 mol CaCl2`, so:

`V(CaCl2) = n/c = 0.004000 mol / 0.1000 mol L^-1`

`= 0.04000 L = 40.00 mL`

The units reduce to litres, and four significant figures are justified by the
given concentrations and volume. This result assumes the labelled
concentrations describe the solutions and asks for the stoichiometric
equivalence volume. It does not establish complete precipitation, purity, or
the species remaining at equilibrium.

## Audit a stoichiometric calculation

Before accepting a result, check:

1. **Identity:** Are the symbols, formulae, phases if relevant, and named
   entities correct?
2. **Conservation:** Does the equation balance each element? If ions or
   electrons appear, does it also balance net charge?
3. **Quantity:** Is each number an entity count, amount, mass, molar mass,
   concentration, or volume rather than an unlabeled “quantity”?
4. **Units:** Do units cancel to the unit requested?
5. **Constraint:** Were all reactants tested before choosing the limiting one?
6. **Precision:** Were guard digits retained until the end, followed by
   rounding consistent with the least precise measured inputs?
7. **Model:** Are purity, reaction completeness, competing reactions,
   isolation loss, and solution-volume assumptions stated or tested?

Common failures are altering subscripts to balance an equation, applying a
coefficient ratio to grams, omitting the entity after “mole,” confusing molar
mass with amount concentration because both may be called `M`, using
millilitres as litres, selecting a limiting reactant from mass alone, and
rounding intermediate values until the limiting comparison or final digit
changes.

## Boundary of this page

This page treats formulae and complete molecular equations as quantitative
bookkeeping. [Aqueous Reactions and Net Ionic
Equations](aqueous-reactions-net-ionic-equations.md) distinguishes strong
electrolytes and spectator ions, while [Redox Foundations and Half-Reaction
Balancing](redox-foundations-half-reaction-balancing.md) balances charge and
electron transfer. [Thermochemistry, Entropy, and Gibbs
Energy](thermochemistry-entropy-gibbs-energy.md), [Chemical Equilibrium, Acids
and Bases, and Solubility](chemical-equilibrium-acids-bases-solubility.md), and
[Chemical Kinetics and Reaction
Mechanisms](chemical-kinetics-reaction-mechanisms.md) remove the assumptions
that a balanced reaction is necessarily favorable, complete, or fast. A
balanced equation fixes stoichiometric proportions; by itself it does not prove
that a reaction occurs, goes to completion, follows a particular mechanism, or
proceeds quickly.

## Related notes

- [General Chemistry Map and Learning Path](chemistry.md)
- [Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
- [Aqueous Reactions and Net Ionic Equations](aqueous-reactions-net-ionic-equations.md)
- [Redox Foundations and Half-Reaction Balancing](redox-foundations-half-reaction-balancing.md)

## References

- Bureau International des Poids et Mesures (BIPM). “Mole.” SI base units.
  <https://www.bipm.org/en/si-base-units/mole>
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, entries “amount concentration” and
  “molar mass.”
  <https://goldbook.iupac.org/terms/view/A00295>
  <https://goldbook.iupac.org/terms/view/12214>
- OpenStax. *Chemistry 2e*, §§2.4, 3.1, 3.3, 4.1, 4.3, and 4.4.
  <https://openstax.org/books/chemistry-2e/pages/a-the-periodic-table>
  <https://openstax.org/books/chemistry-2e/pages/2-4-chemical-formulas>
  <https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept>
  <https://openstax.org/books/chemistry-2e/pages/3-3-molarity>
  <https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations>
  <https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry>
  <https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus and
  resource index. Used to check first-year level and problem-oriented scope.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
