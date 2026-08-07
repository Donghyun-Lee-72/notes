# Ternary Systems and Phase Diagrams

A **ternary system** has three chemically independent components. At a stated
pressure and temperature, a ternary phase diagram maps which equilibrium
phase or phases are stable across all overall compositions in scope. Its
triangle contains the same three kinds of information as a binary diagram:
the phases present, the composition of each phase, and their amounts. The
extra component makes the geometry two-dimensional rather than linear.

This note continues from [Unary Phase Equilibria](unary-phase-equilibria.md)
and [Binary Solutions and Phase Diagrams](binary-solutions-and-phase-diagrams.md).
It assumes their definitions of component, phase, equilibrium, tie line, and
lever rule instead of repeating those foundations. IUPAC gives concise
definitions of [component](https://goldbook.iupac.org/terms/view/C01209),
[phase](https://goldbook.iupac.org/terms/view/P04528), and
[phase diagram](https://goldbook.iupac.org/terms/view/15346).

## Encode three fractions with two coordinates

Let `x_A`, `x_B`, and `x_C` be mole fractions. They obey

```text
x_A + x_B + x_C = 1
```

Only two are independent: after choosing `x_A` and `x_B`, the third is
`x_C = 1 - x_A - x_B`. The nonnegative solutions form a filled triangle,
often called a **Gibbs triangle**. The same construction works for mass
fractions or percentages, provided every composition on the diagram uses the
same basis and the total is one or 100%.

- Vertex `A` is pure A: `(x_A, x_B, x_C) = (1, 0, 0)`.
- The edge from `A` to `B` has `x_C = 0` and is the A–B binary subsystem.
- An interior point contains nonzero amounts of all three components.
- A constant-`x_A` line is parallel to the edge opposite vertex `A`.
  Corresponding families apply to B and C.

Two constant-composition lines locate a point; the third coordinate is a
check on the sum. Scale labels can increase clockwise or counterclockwise,
and diagrams use several axis conventions. Never infer direction from the
triangle's orientation alone: identify each vertex, find the zero and maximum
for each component, and follow the tick labels on the actual diagram. The
[SERC ternary-diagram guide](https://serc.carleton.edu/mathyouneed/geomajors/ternary/index.html)
demonstrates vertices, edges, parallel grid lines, and both common direction
conventions.

## Identify which two-dimensional diagram you have

At fixed pressure, the complete equilibrium description needs two composition
coordinates plus temperature. It is therefore a three-dimensional
temperature–composition **prism** with a triangular composition base. Two
different ways of reducing that object to a page must not be confused:

- An **isothermal section** is a horizontal slice at one specified
  temperature and pressure. Its regions report the equilibrium phases at that
  temperature.
- A **liquidus projection** views liquidus-surface information on the
  composition triangle, often with liquidus-temperature contours and primary
  crystallization fields. It is a projection across temperatures, not the
  phase assemblage in one isothermal slice.

A vertical section at a selected composition path is another possible view;
it is not the whole ternary system. Always read the title, fixed conditions,
axes, contour labels, and legend before interpreting fields. Northwestern's
[Phase Equilibria and Diffusion in Materials, Ch. 8](https://msecore.northwestern.edu/315/315text.pdf)
compares the Gibbs triangle, the three-dimensional construction, isothermal
sections, and liquidus projections.

## Apply the phase rule to an isothermal section

For a nonreacting system without additional work coordinates, the Gibbs phase
rule is

```text
F = C - P + 2
```

Here `F` counts independent intensive variables, `C` components, and `P`
phases. Fixing pressure removes one freedom:

```text
F_p = C - P + 1
```

Fixing temperature as well gives the freedom remaining within an isothermal
composition section:

```text
F_p,T = C - P = 3 - P
```

The distinction matters. `F_p` includes temperature; `F_p,T` does not. For an
ordinary ternary section at fixed pressure and temperature:

| Region | `P` | `F_p,T` | Meaning in the composition triangle |
| --- | ---: | ---: | --- |
| One phase | 1 | 2 | Its equilibrium composition can vary over an area. |
| Two phases | 2 | 1 | One intensive composition parameter selects a tie line. |
| Three phases | 3 | 0 | The three equilibrium phase compositions are fixed vertices of a tie triangle. |

The overall composition may still move within a two- or three-phase region by
changing phase amounts. Those amounts are extensive and are not counted by
`F`. The general rule is given by the
[IUPAC Gold Book, “phase rule”](https://goldbook.iupac.org/terms/view/P04533).

## Read phase fields before calculating amounts

For an overall composition `z = (z_A, z_B, z_C)`:

- In a **one-phase region**, the phase composition equals `z` and its fraction
  is one.
- In a **two-phase region**, the point lies on a tie line joining the
  equilibrium compositions of phases `alpha` and `beta`. The endpoints, not
  `z`, give the two phase compositions. A balance along that particular tie
  line gives their fractions, just as on the binary page.
- In a **three-phase region**, the phase compositions are the three vertices
  of a tie triangle. An interior overall composition is a mixture of those
  three phases; moving the overall point changes their fractions, not the
  vertex compositions.

Tie lines generally form a family across a two-phase area. Do not connect
arbitrary boundary points or extend a printed tie line into another field.
Near a boundary, use limiting behavior as an audit: crossing a generic
one-phase/two-phase boundary introduces a second phase with zero fraction at
the boundary, while reaching a side of a tie triangle makes the fraction of
the opposite-vertex phase zero. A triangle vertex leaves only that vertex
phase among the three represented by the triangle.

## Calculate three phase fractions by barycentric balance

Suppose a hypothetical fixed-`p`, fixed-`T` tie triangle has phase
compositions, on a mole-fraction basis,

```text
alpha = (0.70 A, 0.20 B, 0.10 C)
beta  = (0.10 A, 0.70 B, 0.20 C)
gamma = (0.20 A, 0.10 B, 0.70 C)
```

Consider the constructed overall composition

```text
z = (0.290 A, 0.335 B, 0.375 C)
```

Let `f_alpha`, `f_beta`, and `f_gamma` be mole fractions of the phases.
Barycentric mass balance means that `z` is their weighted average:

```text
f_alpha + f_beta + f_gamma = 1

0.70 f_alpha + 0.10 f_beta + 0.20 f_gamma = 0.290   [A]
0.20 f_alpha + 0.70 f_beta + 0.10 f_gamma = 0.335   [B]
0.10 f_alpha + 0.20 f_beta + 0.70 f_gamma = 0.375   [C]
```

Only two component equations are independent because every composition sums
to one. Solving the sum, A, and B equations gives

```text
f_alpha = 0.250
f_beta  = 0.350
f_gamma = 0.400
```

The result passes three independent checks: no fraction is negative, the
fractions sum to `1.000`, and all components reconstruct the overall
composition:

```text
A: 0.250(0.70) + 0.350(0.10) + 0.400(0.20) = 0.290
B: 0.250(0.20) + 0.350(0.70) + 0.400(0.10) = 0.335
C: 0.250(0.10) + 0.350(0.20) + 0.400(0.70) = 0.375
```

Geometrically, these are barycentric coordinates within the phase-composition
triangle. Area ratios or properly constructed opposite-distance ratios give
the same answer, but solving the balances is less vulnerable to measurement
and axis-direction errors. The calculation yields mole fractions of phases
because all input compositions use mole fractions. Mass-based coordinates
would instead yield mass fractions; neither result is automatically a volume
fraction. The ternary lever construction is developed in the
[Northwestern course text, §8.1](https://msecore.northwestern.edu/315/315text.pdf).

## Use a disciplined reading workflow

1. Confirm the three components and whether coordinates are mole or mass
   fractions, normalized percentages, or another declared basis.
2. Identify the diagram type and record its temperature and pressure, rather
   than assuming every triangle is an isothermal section.
3. Locate the overall composition with two coordinates and verify the third
   from the sum.
4. Name the one-, two-, or three-phase field before reading compositions.
5. Read phase compositions from the point itself, tie-line endpoints, or
   tie-triangle vertices, as appropriate.
6. Calculate amounts only after the phase compositions are known, using one
   consistent composition basis.
7. Reconstruct every overall component and confirm nonnegative phase fractions
   that sum to one.

If a computed fraction is negative, the overall point is outside the selected
tie segment or triangle, the wrong endpoints were used, or the coordinates
were read inconsistently. If reconstructed components do not match `z`, do
not repair the result by renormalizing blindly; recheck the axes, basis, tie
line, and arithmetic.

## Know what one section cannot tell you

- **Equilibrium is assumed.** Nucleation barriers, sluggish diffusion, and
  finite processing time can retain metastable phases or composition
  gradients.
- **The section has stated conditions.** A phase field at one temperature and
  pressure need not persist in another slice. Pressure, fields, or constrained
  reactions can also change the applicable phase-rule count.
- **Boundaries depend on evidence and models.** Experimental uncertainty,
  thermodynamic database assessments, and model choices can shift calculated
  boundaries and tie lines. A smooth curve is not proof of exactness.
- **One slice is not a cooling path.** It cannot show which boundaries a
  fixed-composition material crosses as temperature changes. A liquidus
  projection supplies different information and still requires care before
  inferring a full solidification sequence.
- **Phase equilibrium is not microstructure.** A section can constrain stable
  phase identities, compositions, and amounts. It does not uniquely determine
  grain size, morphology, spatial arrangement, segregation, or transformation
  rate.

## Related notes

- [Unary Phase Equilibria](unary-phase-equilibria.md)
- [Binary Solutions and Phase Diagrams](binary-solutions-and-phase-diagrams.md)
- [Chemical Potential, Activity, and Partial Molar Properties](chemical-potential-activity-and-partial-molar-properties.md)
- [Diffusion and Transport in Solids](diffusion-and-transport-in-solids.md)

## References

- International Union of Pure and Applied Chemistry. *Compendium of Chemical
  Terminology (Gold Book)*, 5th ed., entries “component,” “phase,” “phase
  diagram,” and “phase rule.”
- Northwestern University Materials Science and Engineering Core Curriculum.
  *Phase Equilibria and Diffusion in Materials*, Ch. 8.
- Science Education Resource Center at Carleton College. “How Do I Use Ternary
  Diagrams? Depicting Three-Component Systems in the Earth Sciences.”
