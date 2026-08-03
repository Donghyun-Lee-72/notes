# Unary Phase Equilibria

A **unary**, or one-component, system contains one chemically independent
component. Its amount may change and it may occupy several phases, but its
overall composition has no independent composition coordinate. Pure water is
a unary system even when ice, liquid water, and water vapor are all present.

A **phase** can be recognized by sampling a bulk region on a sufficiently
small scale: samples taken without leaving that region have the same state and
composition. Crossing into another phase instead produces a discontinuous
change in state or structure, even when the chemical identity stays the same.
Ice and liquid water are therefore two phases; two crystalline forms of one
element are also two phases. This distinction matters because a
pressure–temperature phase diagram says which phases are thermodynamically
stable at equilibrium (Callister and Rethwisch, 2015, Ch. 10, §§10.3,
10.5–10.6, pp. 383–385; [IUPAC Gold Book, “phase”](https://goldbook.iupac.org/terms/view/P04528)).

## Read regions, curves, and special points

On a unary `p`–`T` diagram, temperature `T` is normally horizontal and
pressure `p` vertical. Locate a state by its two coordinates, then ask whether
it falls inside a region, on a curve, or at an intersection.

- Inside a labeled region, one phase is stable at equilibrium.
- On a coexistence curve, the two phases bordering that curve coexist. The
  solid–vapor, solid–liquid, and liquid–vapor curves mark sublimation,
  melting, and vaporization equilibria, respectively.
- At a **triple point**, three coexistence curves meet and three phases coexist
  at one fixed `p` and `T`.
- The liquid–vapor curve ends at the **critical point**. At this endpoint,
  density and other intensive-property contrasts between the liquid and vapor
  branches vanish; beyond it, no interface-defined liquid/vapor separation
  remains.

Crossing a curve changes the stable phase. Moving along a curve changes `p`
and `T` together while retaining two-phase equilibrium. A horizontal path
represents changing temperature at fixed pressure; its intersections with
curves give transition temperatures at that pressure. These reading rules and
the special points are summarized independently by
[OpenStax Chemistry 2e, §10.4](https://openstax.org/books/chemistry-2e/pages/10-4-phase-diagrams),
while IUPAC defines the [triple point](https://goldbook.iupac.org/terms/view/T06502)
and [critical point](https://goldbook.iupac.org/terms/view/C01396) more narrowly.

Always inspect the axes before estimating. Pressure may be in pascals, bars,
or atmospheres, and its axis is often logarithmic. Equal vertical distances on
a log scale represent equal pressure ratios, not equal pressure differences.
A schematic axis may also be discontinuous or not drawn to constant scale.

## Equilibrium requires three equalities

Suppose specified phases `alpha` and `beta` of a pure substance can exchange
energy, volume, and matter. The equilibrium audit is: would any permitted
exchange still lower the appropriate potential? The answer is no only when

```text
T(alpha) = T(beta)   p(alpha) = p(beta)   mu(alpha) = mu(beta)
```

Matter would otherwise move toward the phase with lower chemical potential
`mu`. Heat exchange and volume displacement likewise cease to offer a
decrease only when the phases share `T` and `p`, respectively. Thus the three
equalities jointly close the chemical, thermal, and mechanical routes to
further change. For a pure phase, chemical potential equals molar Gibbs energy
`G_m`, so at fixed `p` and `T` the chemical condition may also be written

```text
G_m(alpha; p, T) = G_m(beta; p, T)
```

That is, their molar Gibbs energies are equal at the stated pressure and
temperature.

Equality for a chosen pair is necessary but does not by itself prove global
stability: another allowed phase can have a lower total Gibbs energy. The
stable equilibrium is the allowed state with the global minimum appropriate
to the constraints (Chang and Oates, 2010, Ch. 4, §4.1, pp. 52–54). For the
broader meaning of chemical potential, see
[Chemical Potential, Activity, and Partial Molar Properties](chemical-potential-activity-and-partial-molar-properties.md).

## Count degrees of freedom with the phase rule

The Gibbs phase rule for a nonreacting system is `F = C - P + 2`, where `F` is
the number of independent intensive variables, `C` the number of components,
and `P` the number of phases. For a unary system, `C = 1`, hence

```text
F = 3 - P
```

Each additional coexisting phase removes one independent intensive variable.

This count explains the geometry of a `p`–`T` diagram:

| Location | `P` | `F` | Interpretation |
| --- | ---: | ---: | --- |
| Single-phase region | 1 | 2 | `p` and `T` may be varied independently while remaining in that region. |
| Two-phase curve | 2 | 1 | Choosing one of `p` or `T` fixes the other along that curve. |
| Triple point | 3 | 0 | Neither `p` nor `T` can vary while all three phases coexist. |

Thus four ordinary bulk phases cannot coexist at equilibrium in a
nonreacting unary system under these assumptions. The critical point needs
extra criticality constraints and should not be interpreted merely by putting
`P = 1` into this generic regional count (Chang and Oates, 2010, Ch. 4, §4.4,
pp. 61–62).

## Relate a boundary's slope to latent heat and volume

Along a two-phase boundary, equality of molar Gibbs energies must persist as
`p` and `T` change. Using `dG_m = V_m dp - S_m dT` for each phase gives the
**Clapeyron relation**:

```text
dp/dT = Delta H / (T Delta V)
```

This exact slope formula is the Clapeyron relation.

Here `Delta H = H_m^beta - H_m^alpha` and
`Delta V = V_m^beta - V_m^alpha` refer to the same directed transformation
`alpha -> beta`; `T` is absolute temperature in kelvins. Reversing the
transformation changes both deltas' signs, leaving their ratio unchanged.
The equation gives pressure per temperature, such as `Pa K^-1`.

For melting, define the direction solid `->` liquid. The enthalpy of fusion is
positive. Most substances expand on melting, so `Delta V_fus > 0` and the
solid–liquid boundary has positive slope. Water is the familiar exception near
ordinary pressures: liquid water occupies less molar volume than ice, so
`Delta V_fus < 0`; with `Delta H_fus > 0` and `T > 0`, the slope is negative.
Increasing pressure therefore lowers water's melting temperature slightly
(Chang and Oates, 2010, Ch. 4, §4.2.1, pp. 54–56;
[OpenStax Chemistry 2e, §10.4](https://openstax.org/books/chemistry-2e/pages/10-4-phase-diagrams)).

## Worked reading example

Consider an invented unary substance `X`. Near a point on its solid–liquid
boundary, let

```text
T_0 = 400 K                 p_0 = 100 MPa
Delta H_fus = +8.00 kJ mol^-1
Delta V_fus = +0.500 cm^3 mol^-1
```

These are the temperature and pressure of the known point, followed by the
molar enthalpy and molar volume changes for fusion.

The subscript `0` marks the known boundary point; `fus` means the directed
change solid `->` liquid. Convert before substitution:

```text
Delta H_fus = 8.00 × 10^3 J mol^-1
Delta V_fus = 5.00 × 10^-7 m^3 mol^-1
```

The converted quantities use joules and cubic metres, so the resulting
pressure unit is the pascal.

Then

```text
(dp/dT)_s-l = (8.00 × 10^3) / [(400)(5.00 × 10^-7)]
            = 4.00 × 10^7 Pa K^-1
            = +40.0 MPa K^-1
```

Thus pressure on this boundary rises by about `40.0 MPa` for each kelvin of
temperature increase in the local approximation.

Both transformation quantities are positive, so the slope is positive. If the
boundary slope, and therefore the relevant `Delta H/(T Delta V)` combination,
is treated as approximately constant over only `Delta T = +2.00 K`, the local
linear estimate is

```text
p(402 K) ≈ p_0 + (40.0 MPa K^-1)(2.00 K)
         = 180 MPa
```

The kelvin units cancel in the pressure increment, leaving megapascals.

At `402 K` and `180 MPa`, the state lies on the estimated boundary: solid and
liquid coexist, so `P = 2` and `F = 1`. At the same temperature but `150 MPa`,
the point is below the boundary. Because the liquid has the larger molar
volume here (`Delta V_fus > 0`), higher pressure favors the smaller-volume
solid; the lower-pressure side is liquid. Thus the stable equilibrium phase at
`402 K, 150 MPa` is liquid, with `P = 1` and `F = 2`. This is a constructed
local calculation, not measured data for a real material.

## Separate equilibrium from what happens in time

Three cases must be distinguished. A **globally stable equilibrium** is the
allowed state at the global minimum under the stated constraints. A
**metastable stationary state** is locally equilibrated at a local minimum,
not the global minimum, and can persist because a barrier impedes the change
to the globally stable state. A **genuinely nonequilibrium state** is evolving
or retains unsatisfied thermal, mechanical, chemical-potential, or other
gradients. Metastability is therefore distinct from both global stable
equilibrium and genuinely nonequilibrium evolution.

A phase diagram maps equilibrium states; it does not supply a transformation
rate, nucleation barrier, grain size, phase morphology, spatial distribution,
or processing history. Crossing a boundary identifies a thermodynamic change
in stability, but it does not say how quickly a new phase forms or what
microstructure results. Kinetics and heat-transfer history must be analyzed
separately (Callister and Rethwisch, 2015, Ch. 10, §10.5, pp. 383–384;
[IUPAC Gold Book, “phase transition”](https://goldbook.iupac.org/terms/view/P04537)).

## Know the diagram's limits

- The usual two-dimensional unary diagram assumes equilibrium, a nonreacting
  pure substance, and no additional work coordinates. Magnetic, electric,
  stress, or other external fields can add controlling variables or shift
  boundaries.
- Axis units and scaling matter. A log-pressure plot cannot be interpolated as
  though it were linear, and a schematic plot should not be mined for precise
  values.
- Metastable extensions and hysteresis may be experimentally important but do
  not replace the globally stable boundaries on an equilibrium diagram.
- Polymorphism (or allotropy for an element) creates multiple solid phases,
  additional boundaries, and potentially additional triple points. “Solid”
  need not mean one phase.
- The ordinary critical point discussed here terminates liquid–vapor
  coexistence. It does not imply that every solid–solid or solid–liquid
  boundary ends in the same way.

## Related notes

- [Thermodynamic Systems, Laws, and Potentials](thermodynamic-systems-laws-potentials.md)
- [Chemical Potential, Activity, and Partial Molar Properties](chemical-potential-activity-and-partial-molar-properties.md)
- [Thermochemistry, Entropy, and Gibbs Energy](thermochemistry-entropy-gibbs-energy.md)
- [Crystal Structures and Unit Cells](crystal-structures-unit-cells.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015). *Fundamentals of
  Materials Science and Engineering: An Integrated Approach*, 5th ed., Ch. 10,
  §§10.1–10.6, pp. 381–385.
- Chang, Y. A., and Oates, W. A. (2010). *Materials Thermodynamics*, Ch. 4,
  introduction and §§4.1–4.4, pp. 49–62.
- International Union of Pure and Applied Chemistry. *Compendium of Chemical
  Terminology (Gold Book)*, 5th ed., entries “phase,” “phase transition,”
  “triple point,” and “critical point.”
- OpenStax. *Chemistry 2e*, §10.4, “Phase Diagrams.”
