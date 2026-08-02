# Thermodynamic Systems, Laws, and Potentials

A **thermodynamic system** is the matter or region chosen for analysis; a
**boundary** separates it from the surroundings. Its **state** is specified by
enough macroscopic properties—such as temperature, pressure, volume, phase,
and composition—to reproduce the equilibrium description. Drawing that
boundary and naming what is controlled come before choosing an equation.

This matters in materials engineering because processing equipment imposes
different constraints. A sealed, rigid capsule and an open furnace at controlled
temperature and pressure do not use the same equilibrium test. Thermodynamic
potentials reorganize the same energy and entropy information so that the
potential paired with the imposed constraints moves toward an extremum
(Chang and Oates, 2010, Chapter 1, §§1.1–1.6, pp. 2–14;
[MIT OCW 3.020, Lecture 6](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/)).

This page assumes macroscopic states, a simple compressible multicomponent
system, and pressure–volume (`pV`) work unless stated otherwise. Temperature
`T` is in kelvins (`K`); pressure `p` is in pascals (`Pa`); volume `V` is in
cubic metres (`m^3`); amount `n_i` is in moles (`mol`); and `U`, `H`, `A`, and
`G` are energies in joules (`J`). Entropy `S` has units `J K^-1`, and chemical
potential `μ_i` has units `J mol^-1`.

## Define exchanges and signs at the boundary

- An **open system** can exchange matter and energy with its surroundings.
- A **closed system** has fixed total matter but can exchange energy.
- An **isolated system** exchanges neither matter nor energy in the model.

A real vessel approximates one of these categories over a stated time. A
nominally closed ampoule can leak; an insulated furnace can still lose heat.
OpenStax gives the same boundary-first distinction and emphasizes that a
boundary may transmit heat or work
([OpenStax, *University Physics*, §3.1](https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems)).

We use the chemistry sign convention

`dU = δq + δw`

where `δq > 0` means heat enters the system and `δw > 0` means work is done
**on** it. The `δ` notation marks path-dependent infinitesimal transfers. For
pressure–volume work,

`δw_pV = -p_ext dV`

so expansion (`dV > 0`) does negative work on the system. With reversible
mechanical contact, `p_ext` differs from system pressure by only an
infinitesimal amount and

`δw_pV,rev = -p dV`.

Thus the first law becomes `dU = δq - p dV` for reversible `pV` work. A
work-positive-by-the-system convention is equally valid, but mixing the two is
not ([OpenStax, *Chemistry 2e*, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

## Separate state properties from process paths

A **state property** has a value fixed by the state. Its finite change is
`ΔX = X_final - X_initial`, independent of the route between endpoints.
`U`, `H`, `S`, `A`, and `G` are state properties. Heat and work are **path
functions**: two routes can have different `q` and `w` even when their sum gives
the same `ΔU`.

An **extensive quantity** is additive when noninteracting subsystems are
combined: examples are `V`, `S`, `U`, and each `n_i`. An **intensive quantity**
does not scale with system size: examples are `T`, `p`, and `μ_i`. Dividing an
extensive quantity by mass or amount often produces an intensive specific or
molar quantity. For example, `G_m = G/n` has units `J mol^-1`
([IUPAC, *Green Book*, §1.4](https://publications.iupac.org/books/gbook/green_book_2ed.pdf)).

## Recognize equilibrium as several simultaneous conditions

Equilibrium is a constraint-dependent absence of a permitted driving tendency,
not merely an unchanging instrument reading. Constant macroscopic readings can
coexist with ongoing transfers across a boundary. The test must instead specify
the boundary and allowed exchanges, then ask whether any allowed infinitesimal
change can further drive the system.

- **Thermal equilibrium:** no temperature difference drives net heat transfer.
- **Mechanical equilibrium:** no unbalanced pressure or generalized force
  drives boundary motion or deformation.
- **Chemical equilibrium:** no allowed reaction or transfer of a component
  between phases lowers the appropriate potential.

For phases that may exchange component `i`, chemical equilibrium requires the
same `μ_i` in those phases (Chang and Oates, 2010, Ch. 1, §1.2, p. 5). These
conditions must coexist; equal temperature does not by itself establish
mechanical or chemical equilibrium. The zeroth
law gives the transitive basis for comparing temperatures
([OpenStax, *Physics*, §12.1](https://openstax.org/books/physics/pages/12-1-zeroth-law-of-thermodynamics-thermal-equilibrium)).

## Use the four laws for their operational roles

1. **Zeroth law:** if two systems are separately in thermal equilibrium with a
   third, they are in thermal equilibrium with each other. This makes
   temperature a transferable equilibrium coordinate and enables thermometry.
2. **First law:** energy is conserved. With the convention above,
   `dU = δq + δw`; it accounts for transfer but does not select the spontaneous
   direction.
3. **Second law:** for an isolated total comprising system and surroundings,
   `dS_total >= 0`; equality is the reversible limit. It supplies direction and
   equilibrium criteria, not a rate or mechanism
   ([OpenStax, *Chemistry 2e*, §16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).
4. **Third law:** for a pure, perfect crystal at equilibrium, entropy has its
   zero reference in the ideal `0 K` limit. This anchors absolute entropy
   calculations within that stated scope
   ([OpenStax, *Chemistry 2e*, §16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).

A **reversible process** is an ideal limiting path through successive
equilibrium states. An infinitesimal change in the conditions reverses its
direction; in this limit, the entropy change of system plus surroundings is
zero. An actual irreversible path does not satisfy this limiting construction,
even when its endpoints are equilibrium states. A hypothetical reversible path
remains useful for evaluating state-property differences between those
endpoints
(Chang and Oates, 2010, Chapter 1, §§1.2–1.3, pp. 4–8;
[OpenStax, *Chemistry 2e*, §16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).

## Build the potentials from one fundamental relation

For a simple compressible multicomponent equilibrium system with only `pV`
work and independently variable species amounts,

`dU = T dS - p dV + Σ_i μ_i dn_i`.

This is the fundamental differential. Its natural variables are
`U = U(S, V, {n_i})`, where `{n_i}` denotes the complete set of species
amounts. It also defines the conjugate derivatives

`T = (∂U/∂S)_(V,{n_i})`,

`p = -(∂U/∂V)_(S,{n_i})`.

Experiments rarely control entropy directly. A **Legendre transform** exchanges
an inconvenient extensive natural variable for its conjugate intensive
variable. Applying it gives

| Potential and definition | Differential | Natural variables |
| --- | --- | --- |
| Internal energy, `U` | `dU = T dS - p dV + Σ_i μ_i dn_i` | `S, V, {n_i}` |
| Enthalpy, `H = U + pV` | `dH = T dS + V dp + Σ_i μ_i dn_i` | `S, p, {n_i}` |
| Helmholtz energy, `A = U - TS` | `dA = -S dT - p dV + Σ_i μ_i dn_i` | `T, V, {n_i}` |
| Gibbs energy, `G = U + pV - TS = H - TS` | `dG = -S dT + V dp + Σ_i μ_i dn_i` | `T, p, {n_i}` |

The signs follow directly by differentiating each definition and substituting
the fundamental differential. Natural variables are the quantities whose
differentials remain in the resulting expression
(Chang and Oates, 2010, Chapter 1, §§1.4–1.5.2, pp. 8–13;
[MIT OCW 3.020, Lecture 6](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/)).

At constant `T` and `p`,

`μ_i = (∂G/∂n_i)_(T,p,{n_j≠i})`.

The chemical potential is therefore the **partial molar Gibbs energy** of
component `i`, not simply `G/n_i` for a mixture. It measures the marginal change
in `G` when that component is added while `T`, `p`, and the other amounts are
held fixed
([IUPAC Gold Book, “chemical potential”](https://goldbook.iupac.org/terms/view/C01032)).

## Match the equilibrium criterion to the constraints

For a closed system of fixed overall composition, with the listed variables
held by ideal reservoirs and no omitted work mode, stable equilibrium has the
following local extremum:

In this table, fixed `{n_i}` means fixed overall amounts of each component;
allowed internal variations may still redistribute components among phases or
configurations.

| Controlled constraints | Spontaneous tendency | Stable equilibrium |
| --- | --- | --- |
| isolated, fixed `U, V, {n_i}` | `dS >= 0` | maximum `S` |
| fixed `S, V, {n_i}` | `dU <= 0` | minimum `U` |
| fixed `S, p, {n_i}` | `dH <= 0` | minimum `H` |
| fixed `T, V, {n_i}` | `dA <= 0` | minimum `A` |
| fixed `T, p, {n_i}` | `dG <= 0` | minimum `G` |

“Minimum” means with respect to every **allowed** internal variation under the
constraints. At equilibrium the first variation is zero; stability additionally
requires positive curvature in permitted directions. Equality of potential
values at two arbitrarily chosen finite states is not an equilibrium proof.
Likewise, a maximum-entropy statement requires the isolated, fixed-constraint
model—it is not a rule that the entropy of every subsystem must increase
([MIT OCW 3.020, Lecture 6](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/)).

### Constraint-selection example

Consider a sealed alloy specimen annealed in a large furnace that holds `T`
and `p` fixed. Suppose an independently constructed model predicts that,
at the current composition, transferring material from a permitted `α`
arrangement to a `β` arrangement changes the molar Gibbs energy by
`ΔG_m = -1.20 kJ mol^-1`. Assuming this molar change remains representative
over a small allowed trial transfer of `0.150 mol`,

`ΔG = (0.150 mol)(-1.20 kJ mol^-1) = -0.180 kJ`.

The negative sign identifies the `α -> β` trial direction as favorable under
these `T,p` constraints. It does not prove complete conversion: composition
changes alter chemical potentials, and equilibrium is reached when no allowed
transfer lowers total `G`. If the same specimen were sealed in a rigid container
held at fixed `T` and `V`, `A`, not `G`, would be the appropriate potential.
If it were rigid and isolated at fixed `U` and `V`, total `S` would be maximized.

## Keep the model inside its limits

Thermodynamics constrains equilibrium states and allowed direction; it does not
supply a transformation rate, pathway, nucleation barrier, or diffusion length.
A phase can therefore be **metastable**: a local potential minimum separated
from a lower minimum by a barrier. Processing time and kinetics decide whether
the system escapes it. See
[Thermochemistry, Entropy, and Gibbs Energy](thermochemistry-entropy-gibbs-energy.md)
for introductory direction calculations and
[Chemical Kinetics and Reaction Mechanisms](chemical-kinetics-reaction-mechanisms.md)
for the rate distinction.

The simple differential also omits important materials terms. Surface creation,
elastic strain, electric or magnetic polarization, charge transfer, gravity,
and other work modes require their own conjugate force–displacement terms
(Chang and Oates, 2010, Ch. 1, §1.5.2, p. 13).
Open, flowing, driven, gradient-containing, or nonequilibrium steady systems
require balance equations and boundary fluxes, not an automatic closed-system
minimum rule. A useful equilibrium claim must therefore state the system,
allowed exchanges, controlled variables, phases and composition, work modes,
and whether the candidate is a global or only local extremum.

## Related notes

- [Thermochemistry, Entropy, and Gibbs Energy](thermochemistry-entropy-gibbs-energy.md)
- [Chemical Potential, Activity, and Partial Molar Properties](chemical-potential-activity-and-partial-molar-properties.md)
- [Chemical Equilibrium, Acids and Bases, and Solubility](chemical-equilibrium-acids-bases-solubility.md)
- [Diffusion and Transport in Solids](diffusion-and-transport-in-solids.md)

## References

- Chang, Y. A., and Oates, W. A. (2010). *Materials Thermodynamics*,
  Chapter 1, §§1.1–1.6, pp. 2–14.
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., “chemical potential.”
  <https://goldbook.iupac.org/terms/view/C01032>
- International Union of Pure and Applied Chemistry (IUPAC). *Quantities,
  Units and Symbols in Physical Chemistry*, 2nd ed., §1.4.
  <https://publications.iupac.org/books/gbook/green_book_2ed.pdf>
- MIT OpenCourseWare. *3.020 Thermodynamics of Materials*, Spring 2021,
  “Lecture 6 Notes – Thermodynamic Potentials.”
  <https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/>
- OpenStax. *Chemistry 2e*, §§5.3 and 16.3.
  <https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy>
  <https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics>
- OpenStax. *University Physics*, §3.1, “Thermodynamic Systems,” and
  *Physics*, §12.1, “Zeroth Law of Thermodynamics.”
  <https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems>
  <https://openstax.org/books/physics/pages/12-1-zeroth-law-of-thermodynamics-thermal-equilibrium>
