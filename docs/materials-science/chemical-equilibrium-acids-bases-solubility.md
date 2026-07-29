# Chemical Equilibrium, Acids and Bases, and Solubility

**Chemical equilibrium** is the dynamic state in which a reversible process has
equal forward and reverse rates, so macroscopic composition no longer changes
with time. Equilibrium reasoning connects reaction conditions to composition.
It is essential for controlling solution synthesis, precipitation, dissolution,
speciation, and pH, but it does not say how quickly a system reaches that state.

This note treats closed or otherwise composition-controlled systems at a stated
temperature. Numerical examples use hypothetical constants and the dilute,
ideal-solution approximation unless stated otherwise. Real solutions may
require activity coefficients, complete mass and charge balances, and kinetic
evidence that equilibrium has actually been approached.

## Dynamic balance is not chemical inactivity

For a reversible reaction, equilibrium requires the forward and reverse
reaction rates to be equal. Individual molecular events continue, while the
amounts or concentrations observed at the bulk scale remain constant. Equal
rates do **not** require equal reactant and product concentrations, and a
constant reading alone does not prove equilibrium: a reaction may instead be
too slow to detect or the system may be externally maintained
([OpenStax, *Chemistry 2e*, §13.1](https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria);
[IUPAC Gold Book, “chemical equilibrium”](https://goldbook.iupac.org/terms/view/C01023)).

Equilibrium composition depends on the reaction as written, temperature, and
the imposed constraints. Starting from reactants or products can lead to the
same equilibrium state when those constraints are identical and no metastable
or kinetically trapped state intervenes. An equilibrium constant describes the
final composition relation; its magnitude does not determine the time required
to reach it. A large `K` means product activities are favored in the quotient
for the reaction as written; it does not guarantee literal consumption of
every reactant
([OpenStax, §13.2](https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants)).

## Build `Q` and `K` from activities

For the reaction

`alpha A + beta B ⇌ gamma C + delta D`

the thermodynamic **reaction quotient** is

`Q = (a_C^gamma a_D^delta)/(a_A^alpha a_B^beta)`

where each `a_i` is a dimensionless **activity** relative to a stated standard
state. Products have positive stoichiometric exponents and reactants have
negative ones, which gives the numerator and denominator above. At equilibrium,
`Q = K`, where the standard equilibrium constant `K` is dimensionless and is
fixed for that reaction as written at a specified temperature
([IUPAC Gold Book, “activity”](https://goldbook.iupac.org/terms/view/A00115),
[“equilibrium constant”](https://goldbook.iupac.org/terms/view/E02177), and
[“standard equilibrium constant”](https://goldbook.iupac.org/terms/view/S05915)).

Activity represents chemical potential on a standard-state scale. Common
introductory substitutions are

- for a solute, `a_i ≈ gamma_i c_i/c°`, with activity coefficient `gamma_i`
  and standard amount concentration `c° = 1 mol L^-1`;
- for an ideal gas, `a_i ≈ p_i/p°`; and
- for a pure solid or pure liquid in its standard state, `a_i ≈ 1`.

Setting `gamma_i ≈ 1` turns activity ratios into numerical concentration
ratios. This is a dilute-solution approximation, not a definition. Ionic
strength, charge, solvent, temperature, and composition can make activity
coefficients depart substantially from unity
([IUPAC Gold Book, “activity coefficient”](https://goldbook.iupac.org/terms/view/A00116);
[OpenStax, §13.2](https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants)).
Pure solids are absent from a simplified quotient because their activities are
constant, not because the solids are chemically irrelevant. The pure phase
must still be present for that constraint to apply.

The reaction equation is part of the definition. Reversing a reaction changes
`K` to `1/K`; multiplying every coefficient by `n` changes `K` to `K^n`;
adding reactions multiplies their constants after any cancelled species are
removed.

## Use `Q/K` to predict direction

Comparing the current quotient with the equilibrium constant gives a direct
direction test:

- `Q < K`: net forward reaction raises `Q`;
- `Q > K`: net reverse reaction lowers `Q`;
- `Q = K`: the stated composition is at equilibrium.

This test predicts net direction, not rate or the size of the composition
change
([OpenStax, *Chemistry 2e*, §§13.2–13.4](https://openstax.org/books/chemistry-2e/pages/13-4-equilibrium-calculations)).

**Direction audit.** Consider the illustrative association

`M^2+ + L^- ⇌ ML^+`

at a temperature where `K = 40.0`. The charges balance:
`(+2) + (-1) = (+1)`. Suppose the current activities are
`a(M^2+) = 0.100`, `a(L^-) = 0.200`, and `a(ML^+) = 0.400`. Then

`Q = 0.400/(0.100 × 0.200) = 20.0`

Since `Q < K`, the mixture has a net tendency to form `ML^+` until `Q = 40.0`.
The calculation does not claim that the change is fast, nor can it determine
the final three activities without material balances and an equilibrium
calculation.

## Disturb equilibrium by changing `Q` or `K`

Le Châtelier reasoning says that an equilibrated system responds to a
disturbance with a net change that partly opposes it. The more precise workflow
is to calculate how the disturbance changes `Q`, compare the new `Q` with `K`,
and then apply material balance. Changing a solute amount or a gas partial
pressure usually changes `Q`; changing temperature can change `K`
([OpenStax, §13.3](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle)).

Important limits prevent common overextensions:

- A catalyst accelerates both directions and can shorten the time to
  equilibrium, but it does not change `K` or the equilibrium composition.
- Adding more of a pure solid already present does not change its activity and
  therefore does not shift equilibrium, although changing surface area can
  affect the rate.
- Compression matters through gas activities. Adding an inert gas at constant
  volume leaves reacting-gas partial pressures unchanged in an ideal mixture;
  at constant total pressure, the accompanying volume change can alter them.
- “The system cancels the change” is too strong. The response is generally
  partial, and conservation laws constrain its magnitude.
- The heuristic does not replace a `Q/K` calculation for simultaneous
  disturbances, nonideal mixtures, several coupled reactions, or disappearing
  phases.

## Use two complementary acid–base models

In the Brønsted–Lowry model, an acid donates a hydron (proton) and a base
accepts one. In water,

`HA + H2O ⇌ H3O^+ + A^-`

contains the conjugate pairs `HA/A^-` and `H3O^+/H2O`; members of each pair
differ by one proton and one unit of charge. `H^+(aq)` is common shorthand, but
`H3O^+` makes water's participation explicit
([IUPAC Gold Book, “acid”](https://goldbook.iupac.org/terms/view/A00071),
[“Brønsted base”](https://goldbook.iupac.org/terms/view/B00745), and
[“conjugate acid–base pair”](https://goldbook.iupac.org/terms/view/C01266);
[OpenStax, §14.1](https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases)).

The Lewis model follows electron pairs instead. A Lewis acid accepts an
electron pair and a Lewis base supplies one to form an adduct. For example,

`Ag^+ + 2 NH3 ⇌ [Ag(NH3)2]^+`

has `Ag^+` as the electron-pair acceptor and `NH3` as the donor; the total
charge remains `+1`. This model includes proton transfer because a proton
accepts a pair from a Brønsted base, but it also includes complex formation
without proton transfer
([IUPAC Gold Book, “Lewis acid”](https://goldbook.iupac.org/terms/view/L03508)
and [“Lewis base”](https://goldbook.iupac.org/terms/view/L03511);
[OpenStax, §15.2](https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases)).
The two labels answer different bookkeeping questions; neither makes every
reaction an acid–base reaction in every useful classification.

## Separate pH, strength, and concentration

Thermodynamically,

`pH = -log10 a(H^+)`

so pH is based on hydrogen-ion activity, not a dimensional concentration
inside a logarithm. In sufficiently dilute idealized solutions,
`a(H^+) ≈ c(H3O^+)/c°`, giving the familiar concentration calculation.
Practical pH measurement is operational and has uncertainties associated with
standards, electrodes, junctions, temperature, and the sample matrix
([IUPAC Gold Book, “pH”](https://goldbook.iupac.org/terms/view/P04524);
[OpenStax, §14.2](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh)).
On this logarithmic scale, a one-unit pH difference corresponds to a factor of
ten in hydrogen-ion activity.

**Acid strength** is an equilibrium tendency to donate a proton in a specified
solvent and at a specified temperature. For `HA`, its activity-based
dissociation constant is

`K_a = a(H3O^+) a(A^-)/a(HA)`

and `pK_a = -log10 K_a`; larger `K_a` and smaller `pK_a` mean greater
dissociation under comparable conditions. **Concentration** instead says how
much acid was placed in a volume. A dilute strong acid can therefore have a
higher pH than a more concentrated weak acid. Strength is not the same as
corrosiveness, which also depends on concentration, solvent, kinetics,
temperature, and the material exposed
([IUPAC Gold Book, “acid dissociation constant”](https://goldbook.iupac.org/terms/view/15441);
[OpenStax, §14.3](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases)).

For a base `B`, the analogous equilibrium is

`B + H2O ⇌ BH^+ + OH^-`

and larger `K_b` means a stronger base under comparable conditions. For a
conjugate pair in the same aqueous medium and at the same temperature,
`K_a(BH^+) K_b(B) = K_w`, where
`K_w = a(H3O^+) a(OH^-)`. Acid and base strength are therefore relative to
conditions and to one another; neither is an inventory concentration
([OpenStax, §14.3](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases)).

**Weak-acid audit.** Let a hypothetical monoprotic acid have
`K_a = 1.00 × 10^-5` and initial concentration
`c_0 = 0.100 mol L^-1`. If water autoionization and activity-coefficient
corrections are negligible, set
`x = c(H3O^+) = c(A^-)` at equilibrium. Using concentrations as ratios to
`c° = 1 mol L^-1`,

`1.00 × 10^-5 = (x/c°)^2/[(c_0 - x)/c°]`

The positive root of the resulting quadratic is

`x = 9.95012... × 10^-4 mol L^-1`

so only `0.995%` of the initial acid dissociates and

`pH ≈ -log10(x/c°) = 3.00217... ≈ 3.00`

The shortcut `x ≈ sqrt(K_a c_0 c°) = 1.00 × 10^-3 mol L^-1` differs by about
`0.50%` from the exact `x` and is self-consistent because `x/c_0 < 1%`.
An approximation must be checked after solving; it should not be assumed merely
because an acid is called weak.

## Treat buffers and titrations as stoichiometry followed by equilibrium

A buffer combines both members of a weak conjugate pair in quantities large
enough to consume a modest addition of acid or base. Added strong acid first
consumes the base member; added strong base first consumes the acid member.
After that near-complete stoichiometric step, the remaining pair establishes
equilibrium. Under the concentration and activity approximations, the
Henderson–Hasselbalch form is

`pH ≈ pK_a + log10(c(A^-)/c(HA))`

It works best when both members remain appreciable. The ratio chiefly controls
pH, while their absolute amounts and the solution volume control how much
strong acid or base can be absorbed before buffering fails
([OpenStax, §14.6](https://openstax.org/books/chemistry-2e/pages/14-6-buffers)).

**Buffer audit.** A hypothetical buffer has `pK_a = 4.80`,
`0.0200 mol HA`, and `0.0300 mol A^-` in one solution. Initially,

`pH ≈ 4.80 + log10(0.0300/0.0200) = 4.976... ≈ 4.98`

Adding `0.00500 mol` strong acid, with negligible volume change, converts that
amount of `A^-` to `HA`. The new amounts are `0.0250 mol` of each, so
`pH ≈ 4.80`. This calculation is valid only while the strong acid is consumed
and both buffer components remain; adding `0.0300 mol` or more would exhaust
the original base component and require a different calculation.

An acid–base titration follows the same sequence
([OpenStax, §14.7](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations)):

1. Before much titrant is added, the analyte's own equilibrium dominates.
2. Before equivalence in a weak-acid/strong-base titration, neutralization sets
   the `HA/A^-` amounts and the mixture is a buffer.
3. At half-equivalence, those amounts are equal, so `pH ≈ pK_a`.
4. At equivalence, stoichiometric acid and base amounts match. The pH need not
   be 7: the conjugate base of a weak acid can hydrolyze water and make the
   solution basic.
5. Beyond equivalence, excess strong titrant usually controls pH.

The **equivalence point** is a stoichiometric condition; an indicator or
instrumental **endpoint** is the observed signal used to estimate it. They are
not identical by definition. Dilution, activities, multiple acidic sites,
side reactions, and electrode response can all alter a real titration curve.

## Express solubility with an ion-activity product

For the dissolution

`MX2(s) ⇌ M^2+ + 2 X^-`

the solubility product is

`K_sp = a(M^2+) a(X^-)^2`

when pure `MX2(s)` is present. The corresponding ion-activity product `Q_sp`
uses the current solution activities. `Q_sp < K_sp` is undersaturated;
`Q_sp = K_sp` is saturated equilibrium with solid present; and
`Q_sp > K_sp` gives a thermodynamic tendency to precipitate. Nucleation or
growth barriers can delay precipitation even when `Q_sp > K_sp`
([IUPAC Gold Book, “solubility product”](https://goldbook.iupac.org/terms/view/S05742);
[OpenStax, §15.1](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution)).

`K_sp` is not the molar solubility `s`; stoichiometry connects them. For a
hypothetical `MX2` with `K_sp = 4.00 × 10^-12`, assume ideal dilute behavior
and no other source of either ion. In pure water,

`4.00 × 10^-12 = (s/c°)(2s/c°)^2 = 4(s/c°)^3`

so

`s = 1.00 × 10^-4 mol L^-1`

For a different salt stoichiometry, the powers and numerical factors change.
Comparing `K_sp` values alone therefore does not reliably rank molar
solubilities across different formula types.

## Couple common ions, proton transfer, and complex formation

If the same hypothetical solid is placed in a solution initially containing
`1.00 × 10^-2 mol L^-1 X^-`, then

`K_sp ≈ (s/c°)[(0.0100 mol L^-1 + 2s)/c°]^2`

Neglecting `2s` initially gives

`s ≈ 4.00 × 10^-8 mol L^-1`

and the check `2s/0.0100 mol L^-1 = 8.00 × 10^-6` confirms that the neglected
term is only `0.000800%`. This **common-ion effect** reduces solubility under
the stated ideal approximation. In a real ionic solution, changed activity
coefficients can modify the concentration result, so “a common ion always
lowers measured solubility by the simple formula” is too broad
([OpenStax, §15.1](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution)).

Other equilibria can instead consume a dissolved ion and promote further
dissolution. If neutral ligand `L` forms a complex,

`M^2+ + 3 L ⇌ ML3^2+` with `K_f = 1.00 × 10^8`,

adding this reaction to dissolution cancels free `M^2+` and gives

`MX2(s) + 3 L ⇌ ML3^2+ + 2 X^-`

with

`K_overall = K_sp K_f = (4.00 × 10^-12)(1.00 × 10^8)`

`= 4.00 × 10^-4`

The ligand lowers free `M^2+` activity and can increase total dissolved metal,
but the actual solubility still requires ligand, metal, and charge balances.
Likewise, protonating a basic anion `X^-` removes it from the dissolution
quotient and can promote dissolution. These are **coupled equilibria**:
reactions share species, so changing one equilibrium changes the quotients of
others
([OpenStax, §§15.2–15.3](https://openstax.org/books/chemistry-2e/pages/15-3-coupled-equilibria)).
Multiplying constants is valid only after the component equations, directions,
coefficients, and standard states have been made consistent.

## Audit an equilibrium argument

Before accepting a conclusion, check:

1. **Reaction:** Is the equation balanced for atoms and charge, and is its
   direction and coefficient scale the one used to define `K`?
2. **Expression:** Do stoichiometric coefficients become exponents? Are pure
   phases treated correctly and actually present?
3. **State:** Are temperature, solvent, standard state, and relevant pressure
   or composition constraints stated?
4. **Model:** Are activities being used, or is a concentration/ideal-gas
   approximation stated and checked?
5. **Direction:** Is the current `Q` compared with `K`, rather than inferring
   direction from the size of `K` alone?
6. **Balances:** Are material balance, charge balance, dilution, and all
   important coupled reactions included?
7. **Numerics:** Are powers, logarithm bases, signs, units, positive roots, and
   neglected terms verified?
8. **Kinetics:** Does the evidence show equilibrium was approached, rather than
   only that equilibrium is thermodynamically favored?

The central misconception is to treat an equilibrium rule as a complete
prediction. `K` constrains composition, `Q/K` gives a net direction, balances
set feasible amounts, activities connect composition to chemical potential,
and kinetics determines whether the predicted change is observable on the
available timescale. MIT's first-year sequence similarly joins equilibrium,
Le Châtelier reasoning, solubility, acid–base systems, buffers, and titrations
as a problem-solving chain
([MIT OCW 5.111SC syllabus](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/);
[resource index, Lectures 18–24](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/)).

## Related notes

- [General Chemistry Map and Learning Path](chemistry.md)
- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)

## References

- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “activity,” “activity
  coefficient,” “chemical equilibrium,” “equilibrium constant,” “standard
  equilibrium constant,” “acid,” “Brønsted base,” “conjugate acid–base pair,”
  “acid dissociation constant,” “pH,” “Lewis acid,” “Lewis base,” and
  “solubility product.”
  <https://goldbook.iupac.org/terms/view/A00115>
  <https://goldbook.iupac.org/terms/view/A00116>
  <https://goldbook.iupac.org/terms/view/C01023>
  <https://goldbook.iupac.org/terms/view/E02177>
  <https://goldbook.iupac.org/terms/view/S05915>
  <https://goldbook.iupac.org/terms/view/A00071>
  <https://goldbook.iupac.org/terms/view/B00745>
  <https://goldbook.iupac.org/terms/view/C01266>
  <https://goldbook.iupac.org/terms/view/15441>
  <https://goldbook.iupac.org/terms/view/P04524>
  <https://goldbook.iupac.org/terms/view/L03508>
  <https://goldbook.iupac.org/terms/view/L03511>
  <https://goldbook.iupac.org/terms/view/S05742>
- OpenStax. *Chemistry 2e*, §§13.1–13.4, 14.1–14.3, 14.6–14.7, and
  15.1–15.3.
  <https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria>
  <https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants>
  <https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle>
  <https://openstax.org/books/chemistry-2e/pages/13-4-equilibrium-calculations>
  <https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases>
  <https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh>
  <https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases>
  <https://openstax.org/books/chemistry-2e/pages/14-6-buffers>
  <https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations>
  <https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution>
  <https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases>
  <https://openstax.org/books/chemistry-2e/pages/15-3-coupled-equilibria>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus and
  resource index, Lectures 18–24. Used to check freshman depth, dependencies,
  and problem-oriented scope.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
