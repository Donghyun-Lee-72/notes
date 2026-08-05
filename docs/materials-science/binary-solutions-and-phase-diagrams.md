# Binary Solutions and Phase Diagrams

A **binary system** has two chemically independent components. At fixed
pressure, its temperature–composition phase diagram maps the equilibrium
phase or phases for every overall composition and temperature in scope. It is
therefore a compact way to answer three different questions: which phases are
present, what composition each phase has, and how much of each phase is
present. These diagrams connect alloy or ceramic chemistry to solidification
and heat treatment, but only after those three questions are kept separate
(Callister and Rethwisch, 2015, Ch. 10, §§10.7–10.12, pp. 386–408;
[IUPAC, “phase diagram”](https://goldbook.iupac.org/terms/view/15346)).

This note assumes the equilibrium concepts in
[Unary Phase Equilibria](unary-phase-equilibria.md). Unlike a unary `p`–`T`
diagram, the usual binary diagram fixes pressure and replaces pressure on one
axis with composition.

## Read the composition coordinate first

Let the components be `A` and `B`. Only one composition coordinate is
independent because the two fractions sum to one:

```text
x_A + x_B = 1
```

In words: the mole fraction of A plus the mole fraction of B equals one. A
horizontal axis labeled `x_B` therefore runs from pure A at `x_B = 0` to pure
B at `x_B = 1`. The same diagram may instead use mass fraction, mass percent,
or mole percent. For example,

```text
x_B = n_B / (n_A + n_B)
mass% B = 100 m_B / (m_A + m_B)
```

Here `n_i` is amount of substance and `m_i` is mass of component `i`.
`35 mass% B` means `35 g` B per `100 g` of material; it does not generally
mean `x_B = 0.35`. Conversion requires the molar masses. The endpoint labels,
units, and basis must be checked before reading a boundary or applying a
balance (Chang and Oates, 2010, Ch. 5, §5.1, pp. 67–68).

A plotted point has an **overall composition** `C_0`. If it lies in a
two-phase field, neither phase normally has composition `C_0`; atoms partition
between two phases with different compositions. This distinction is the core
of binary-diagram reading.

## Separate components, phases, and solutions

A component is one of the minimum independent chemical constituents needed to
describe every phase. A phase is a physically and chemically distinct region,
as defined in the prerequisite note. The counts need not match: a binary
system may be one homogeneous liquid phase, one homogeneous solid phase, or a
mixture of two phases, while still containing the same two components
([IUPAC, “component”](https://goldbook.iupac.org/terms/view/C01209)).

A **solution phase** is homogeneous at the scale of the thermodynamic model,
yet its composition includes material from multiple substances. It may be a
liquid or a solid. In a substitutional solid solution, atoms share one crystal
lattice by occupying the same kind of lattice sites; in an interstitial solid
solution, smaller atoms occupy interstitial sites. “Solution” therefore does
not imply liquid, and “two components” does not imply two phases
([IUPAC, “solution”](https://goldbook.iupac.org/terms/view/S05746)).

**Solubility** describes the composition range over which a chosen homogeneous
phase is stable under stated conditions. A solubility-limit line bounds that
range. Crossing it at fixed temperature does not make the excess component
vanish: a second phase appears so that mass is conserved. Complete mutual
solubility means one solution phase can span the whole composition axis over
the stated temperature range; limited solubility leaves one- and two-phase
fields (Callister and Rethwisch, 2015, Ch. 10, §§10.2, 10.11, pp. 382,
395–398).

## Isomorphous diagrams: one solid solution

An **isomorphous** binary diagram has complete liquid solubility and one solid
solution, conventionally called `alpha`, across the full composition range.
Its central lens-shaped field contains `alpha + L`, where `L` denotes liquid.
The **liquidus** is the boundary above which the alloy is entirely liquid. The
**solidus** is the boundary below which it is entirely solid. Between them,
liquid and solid coexist (Callister and Rethwisch, 2015, Ch. 10, §10.7,
pp. 386–387; Chang and Oates, 2010, Ch. 10, §10.2.1, pp. 131–132).

For any selected point, use this order:

1. Locate `C_0` and temperature, then name the field.
2. If the field has two phases, draw a horizontal **tie line** at that
   temperature.
3. Read each phase composition where the tie line meets its boundary.
4. Only then calculate phase fractions.

In a one-phase field, the phase composition equals `C_0` and its fraction is
one. In an `alpha + L` field, the left and right tie-line intersections give
`C_alpha` and `C_L` according to the diagram's actual geometry; their order
must be read, not guessed from the phase names.

## Tie lines and the lever rule

At fixed pressure and temperature, two equilibrium phases share the chemical
potential of each component. Those equilibrium conditions select the two
endpoint compositions on a tie line. The overall composition then fixes the
relative amounts by a component balance (Chang and Oates, 2010, Ch. 8,
§8.2.1, pp. 104–106).

For phases `alpha` and `beta`, suppose the chosen composition coordinate
increases from `C_alpha` through `C_0` to `C_beta`. The balances are

```text
f_alpha + f_beta = 1
C_0 = f_alpha C_alpha + f_beta C_beta
```

Accessible reading: the fractions sum to one, and the overall composition is
the phase-fraction-weighted mean of the two phase compositions. Solving gives

```text
f_alpha = (C_beta - C_0) / (C_beta - C_alpha)
f_beta  = (C_0 - C_alpha) / (C_beta - C_alpha)
```

Each phase takes the tie-line length on the opposite side of `C_0`, hence the
name **lever rule**. These are mass fractions when every `C` is on one linear
mass-fraction or mass-percent axis, and mole fractions when every `C` is on one
linear mole-fraction axis. They are not automatically volume fractions
([Engineering LibreTexts, “The Lever Rule”](https://eng.libretexts.org/Bookshelves/Materials_Science/TLP_Library_II/12%3A_Phase_Diagrams_and_Solidification/12.7%3A_The_Lever_Rule)).

### Constructed phase-fraction example

At an invented temperature of `700 K`, a hypothetical A–B diagram has an
`alpha + beta` tie line with

```text
C_alpha = 14 mass% B
C_0     = 38 mass% B
C_beta  = 74 mass% B
```

The mass fractions are

```text
f_alpha = (74 - 38) / (74 - 14) = 36/60 = 0.600
f_beta  = (38 - 14) / (74 - 14) = 24/60 = 0.400
```

Thus a `2.50 kg` sample contains `1.50 kg` alpha and `1.00 kg` beta. Audit the
result in three ways: both fractions lie between zero and one, they sum to one,
and `0.600(14) + 0.400(74) = 38 mass% B`. The numbers describe a constructed
equilibrium state, not a measured material.

## Eutectic diagrams: one liquid becomes two solids

A simple binary **eutectic** diagram has liquid `L`, two terminal solid
solutions `alpha` and `beta`, and the adjacent two-phase fields `alpha + L`,
`beta + L`, and `alpha + beta`. The liquidus branches meet at the eutectic
composition `C_E` and eutectic temperature `T_E`. At fixed pressure, equilibrium
cooling through that point produces

```text
L(C_E) -> alpha(C_alpha,E) + beta(C_beta,E)
```

Accessible reading: liquid of the eutectic composition transforms
isothermally into alpha and beta solids whose compositions are the two ends of
the eutectic tie line. Heating reverses the reaction. IUPAC states the formal
definition in the heating direction; the cooling expression above is its
reverse ([IUPAC, “eutectic reaction”](https://goldbook.iupac.org/terms/view/E02225)).

An alloy left of `C_E` that crosses `alpha + L` first forms **primary alpha**.
In the equilibrium limit approaching `T_E` from above, the remaining liquid
has composition `C_E`; it becomes
the two-phase eutectic microconstituent on cooling through `T_E`. An alloy right
of `C_E` analogously forms primary beta. At exactly `C_E`, no primary phase
forms in the equilibrium path: all liquid transforms into the eutectic
microconstituent (Callister and Rethwisch, 2015, Ch. 10, §§10.11–10.12,
pp. 395–408).

### Distinguish phases from microconstituents

A eutectic **microconstituent** is a recognizable product containing both
alpha and beta; it is not a third phase. Therefore “primary alpha plus
eutectic” names two microconstituents, while “alpha plus beta” names the two
phases. A lever rule just below `T_E` across the full `alpha + beta` field gives
total phase fractions. A lever rule just above `T_E`, between the primary-phase
boundary and `C_E`, gives the fractions of primary phase and remaining liquid;
that liquid fraction becomes the eutectic microconstituent.

For a constructed eutectic, let

```text
C_alpha,E = 10 mass% B    C_E = 45 mass% B
C_0       = 30 mass% B    C_beta,E = 85 mass% B
```

Just above `T_E`, in `alpha + L`,

```text
f_primary alpha = (45 - 30) / (45 - 10) = 0.429
f_liquid        = (30 - 10) / (45 - 10) = 0.571
```

Just below `T_E`, that `0.571` liquid fraction is the eutectic
microconstituent. Across the full solid tie line, the total phase fractions are

```text
f_total alpha = (85 - 30) / (85 - 10) = 0.733
f_total beta  = (30 - 10) / (85 - 10) = 0.267
```

The results are consistent: the eutectic itself contains alpha fraction
`(85 - 45)/(85 - 10) = 0.533`, so total alpha is
`0.429 + 0.571(0.533) = 0.733` after rounding. This independent example also
shows why the eutectic fraction and beta-phase fraction are not synonyms.

## Follow a cooling path without overclaiming microstructure

For a closed alloy of fixed overall composition, equilibrium cooling is a
vertical downward path. At each boundary crossing, identify the new phase,
then use successive tie lines to infer how phase compositions and fractions
change.

- In an isomorphous system, the first solid appears at the liquidus. Its
  composition is read at the opposite tie-line end. With further cooling, the
  solid fraction grows, both phase compositions track their boundaries, and
  solidification ends at the solidus.
- In a hypoeutectic composition (`C_0 < C_E` on an axis increasing in B),
  primary alpha forms before the remaining liquid transforms eutectically.
  For `C_0 > C_E`, primary beta forms first. “Hypo” and “hyper” are positions
  relative to `C_E`, not statements about absolute solute content.
- If a **solvus**—the solid-state solubility-limit boundary—is crossed, a
  second solid phase becomes stable. The diagram predicts its equilibrium
  amount and composition, but not its particle size or distribution.

Phase diagrams constrain plausible equilibrium microstructures; they do not
uniquely determine morphology. Lamellae are common eutectic products because
coupled growth can keep redistribution distances short, but spacing and shape
depend on kinetics, interfacial effects, and thermal history. Finite cooling
and slow solid-state diffusion may instead produce segregation or coring, and
nucleation barriers may preserve metastable states (Callister and Rethwisch,
2015, Ch. 10, §§10.9, 10.12, pp. 392–395, 401–408).

## Assumptions and common errors

- **Equilibrium and fixed pressure:** the usual diagram gives stable bulk
  equilibria at its stated pressure. It does not give transformation time,
  cooling-rate effects, or interface curvature corrections.
- **Closed overall composition:** a vertical cooling path assumes no oxidation,
  evaporation, reaction with a container, or other gain or loss of a component.
- **One coordinate basis:** never combine a mole-percent endpoint with a
  mass-percent overall composition in one lever-rule calculation.
- **Phase composition is not phase amount:** tie-line endpoints answer “what is
  in each phase”; segment ratios answer “how much of each phase.”
- **Use a horizontal tie line:** on a temperature–composition diagram at fixed
  pressure, coexisting phase compositions are read at the same temperature.
- **Read the opposite arm:** using the adjacent segment for a phase reverses the
  fractions. Check the weighted-average balance to catch this error.
- **Respect boundaries:** on a single-phase side, a vanishing second-phase
  fraction is the limiting result. Do not extend a tie line outside its
  two-phase field.
- **Do not confuse phases and microconstituents:** primary alpha and eutectic
  are microstructural products; alpha and beta are phases.
- **Do not infer morphology from fractions alone:** equal phase fractions do
  not imply equal grain sizes, equal area fractions on every section, or a
  particular spatial arrangement.

## Related notes

- [Unary Phase Equilibria](unary-phase-equilibria.md)
- [Chemical Potential, Activity, and Partial Molar Properties](chemical-potential-activity-and-partial-molar-properties.md)
- [Imperfections and Defects in Solids](imperfections-and-defects-in-solids.md)
- [Diffusion and Transport in Solids](diffusion-and-transport-in-solids.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015). *Fundamentals of
  Materials Science and Engineering: An Integrated Approach*, 5th ed., Ch. 10,
  §§10.1–10.12, pp. 381–408.
- Chang, Y. A., and Oates, W. A. (2010). *Materials Thermodynamics*, Ch. 5,
  §5.1, pp. 67–68; Ch. 8, §8.2.1, pp. 104–106; Ch. 10, introduction and
  §10.2.1, pp. 125–132.
- International Union of Pure and Applied Chemistry. *Compendium of Chemical
  Terminology (Gold Book)*, 5th ed., entries “component,” “solution,” “phase
  diagram,” and “eutectic reaction.”
- DoITPoMS. “The Lever Rule,” republished by Engineering LibreTexts.
