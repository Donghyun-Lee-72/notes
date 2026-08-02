# Diffusion and Transport in Solids

**Diffusion** is the thermally activated redistribution of atoms, ions, or
molecules through many microscopic jumps. Individual jumps are irregular and
local; **flux** is their net continuum-scale transport through an area. This
distinction matters because a heat treatment is designed with concentration
profiles and times, while its attainable rate is constrained by defects,
bonding, composition, and temperature (Callister and Rethwisch, 2015,
Ch. 6, §§6.1–6.8, pp. 187–207;
[MIT OCW 3.091SC, Session 24](https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/reactions-and-kinetics/24-diffusion/)).

The equations below describe mass transport, not heat flow or electrical
current, although those transport problems can have analogous mathematical
forms. They also require a declared species, reference frame, coordinate, and
set of conditions.

## Connect atomic jumps to net transport

Atoms in a solid vibrate about local configurations. A successful jump needs
an accessible destination and enough thermal fluctuation to cross the relevant
energy barrier. Random jumps occur in every direction. Without a driving
tendency their averages cancel; with a spatial imbalance, slightly more
successful transport occurs one way than the other, producing a net flux.

Two introductory mechanisms are especially useful:

- In **vacancy diffusion**, an atom on a regular site exchanges with a nearby
  empty site. The atomic displacement and vacancy displacement are opposite.
  Host self-diffusion and substitutional-solute diffusion commonly use this
  mechanism, so both vacancy availability and jump mobility matter.
- In **interstitial diffusion**, a sufficiently small atom moves between
  interstitial sites. It does not require a regular lattice vacancy. In many
  metals an interstitial species moves faster than a substitutional species,
  but this is a conditional trend, not an identity attached to the mechanism.

A jump model is discrete. Fickian equations average enormous numbers of jumps
over distances and times large enough that concentration and flux can be
treated as smooth fields. Atomically resolved behavior is outside this
continuum description.

## Define concentration, flux, and coordinates

Let `C_i(x,t)` be the concentration of species `i`. It may be amount
concentration in `mol m^-3`, mass concentration in `kg m^-3`, or number density
in `m^-3`; the choice must remain consistent. A mole fraction or mass fraction
is not interchangeable with a volume concentration without density and
composition information.

The one-dimensional molar flux `J_i` is the signed amount crossing a plane
normal to the `+x` direction per area per time, in `mol m^-2 s^-1`. Number flux
has units `m^-2 s^-1`, and mass flux has units `kg m^-2 s^-1`. Positive `J_i`
means net motion toward `+x`; it does not mean that every atom moves that way.

For an isotropic medium, Fick's first law is

`J_i = -D_i ∂C_i/∂x`,

where `D_i` is the diffusivity in `m^2 s^-1`. Since `∂C_i/∂x` has units
`mol m^-4`, the product has units `mol m^-2 s^-1`. The minus sign says that
this Fickian contribution points down the chosen concentration gradient. For
example, if `C_i` falls as `x` increases, then `∂C_i/∂x < 0` and `J_i > 0`.
(Callister and Rethwisch, 2015, Ch. 6, §6.3, pp. 189–191.)

In three dimensions the isotropic form is `J_i = -D_i ∇C_i`. The scalar
coefficient used on this page is therefore an isotropic-model assumption, not
a general description of every solid.

## Separate steady state from transient evolution

At **steady state**, concentration at each position and flux do not change with
time. This does not require zero flux: maintained reservoirs can sustain a
constant through-flux with no local accumulation. For one-dimensional,
source-free transport with constant `D`, the concentration profile is linear.

For transient transport, conservation supplies the balance. With no bulk
reaction or source,

`∂C_i/∂t = -∂J_i/∂x`.

Substituting Fick's first law gives the conservative form of Fick's second law,

`∂C_i/∂t = ∂/∂x (D_i ∂C_i/∂x)`.

Only when `D_i` is independent of position and concentration over the modeled
range does this reduce to

`∂C_i/∂t = D_i ∂²C_i/∂x²`.

The left side has units `mol m^-3 s^-1`; so does the right side because
`D_i(∂²C_i/∂x²)` has units `(m² s^-1)(mol m^-5)`. If a species is created or
consumed, add its volumetric source term to the continuity equation instead of
hiding reaction inside an apparent `D` (Callister and Rethwisch, 2015, Ch. 6,
§6.4, pp. 191–195; MIT OCW 3.205, Kinetics Lecture 2).

## State conditions before using an error-function profile

A common transient solution assumes a one-dimensional, homogeneous,
semi-infinite solid; constant scalar `D`; uniform initial concentration `C_0`;
and a surface at `x = 0` that is instantaneously set to and held at `C_s`:

- initial condition: `C(x,0) = C_0` for `x > 0`;
- surface boundary condition: `C(0,t) = C_s` for `t > 0`; and
- far-field boundary condition: `C(x,t) → C_0` as `x → ∞`.

The solution is

`[C(x,t) - C_0]/(C_s - C_0) = 1 - erf[x/(2√(Dt))]`

`= erfc[x/(2√(Dt))]`,

where `erf` is the Gaussian error function and `erfc(z) = 1 - erf(z)`. The
argument `x/(2√(Dt))` is dimensionless. The characteristic diffusion length
scales as `√(Dt)`, so reaching twice the depth at the same normalized
concentration requires four times the time if `D` remains unchanged
(Callister and Rethwisch, 2015, Ch. 6, §6.4, pp. 192–195;
[Engineering LibreTexts, “Fick's Second Law of Diffusion”](https://eng.libretexts.org/Bookshelves/Materials_Science/TLP_Library_I/20%3A_Diffusion/20.02%3A_Fick%27s_Second_Law_of_Diffusion)).

“Semi-infinite” is a timescale approximation: the diffusion front must remain
far from the back surface. A finite slab, a changing surface concentration, an
interface resistance, or a limited deposited dose requires different boundary
conditions and therefore a different solution.

## Audit a coupled temperature-and-time calculation

Consider a hypothetical solute with `D_0 = 2.00 × 10^-5 m² s^-1` and activation
energy `Q_d = 140 kJ mol^-1`. A 10 mm thick solid initially contains no solute,
and its surface is maintained at `C_s = 1.20 mol m^-3` for `t = 4.00 h` at
`T = 1000 K`. Estimate `C` at `x = 0.200 mm`. These values are teaching inputs,
not reported data for a real material.

The Arrhenius relation is

`D = D_0 exp[-Q_d/(RT)]`,

where `R = 8.314 J mol^-1 K^-1`. Convert first:
`Q_d = 1.40 × 10^5 J mol^-1` and `t = 1.440 × 10^4 s`. Then

`Q_d/(RT) = (1.40 × 10^5)/[(8.314)(1000)] = 16.84`,

`D = (2.00 × 10^-5) exp(-16.84) = 9.73 × 10^-13 m² s^-1`.

The exponent is dimensionless and negative. The diffusion length and
error-function argument are

`√(Dt) = √[(9.73 × 10^-13)(1.440 × 10^4)] = 1.18 × 10^-4 m`,

`z = x/(2√(Dt)) = (2.00 × 10^-4)/[2(1.18 × 10^-4)] = 0.845`.

Using `erfc(0.845) = 0.232`,

`C = C_0 + (C_s - C_0)erfc(z) = (1.20)(0.232)`

`= 0.278 mol m^-3`.

Three checks support the result. `0 < C < C_s`; the normalized value is
dimensionless; and the back surface is about `10 mm/(0.118 mm) = 84.5`
diffusion lengths away, so it cannot influence this estimate appreciably. The
calculation remains conditional on constant `D`, a truly maintained surface
concentration, and the absence of reaction or phase change.

## Treat temperature dependence as a bounded model

For one mechanism over a suitable temperature interval,

`D = D_0 exp[-Q_d/(RT)]`,

or equivalently

`ln(D/D°) = ln(D_0/D°) - (Q_d/R)(1/T)`,

where `D°` is a fixed reference diffusivity with the same units. `D_0` has
units `m² s^-1`, `Q_d` is in `J mol^-1`, and `T` is in kelvins. The slope of a
plot of `ln(D/D°)` against `1/T` is `-Q_d/R`; writing `ln D` is conventional
shorthand but the logarithm's argument is formally dimensionless (Callister
and Rethwisch, 2015, Ch. 6, §6.5, pp. 195–200).

An apparent straight line does not prove one microscopic pathway. A change in
phase, defect population, composition, charge state, or dominant short-circuit
path can change `D_0` or the apparent activation energy. Extrapolation beyond
the measured range is therefore risky.

## Do not treat every diffusivity as the same quantity

The label on `D` identifies both an experiment and a reference frame:

- **Tracer diffusivity** follows a distinguishable label, often an isotope, in
  an otherwise chemically equivalent population. A tracer profile can measure
  random atomic mobility without imposing a bulk composition gradient.
- **Self-diffusivity** describes motion of a component in a chemically uniform
  pure material or homogeneous phase. Isotopic tracing is one way to measure
  it; “self” describes the physical process, while “tracer” describes the
  labeling measurement.
- **Intrinsic diffusivity** relates one component's flux to its gradient in a
  frame fixed to the crystal lattice. Different components can have different
  intrinsic diffusivities, so lattice markers need not remain fixed relative
  to the diffusion zone.
- **Interdiffusivity** is the effective coefficient describing mutual mixing
  in a composition gradient in a stated volume- or laboratory-fixed frame. It
  combines component motions and is not generally equal to either intrinsic
  diffusivity.

These distinctions are summarized at greater depth by
[MIT OCW 3.205, Kinetics Lecture 2](https://ocw.mit.edu/courses/3-205-thermodynamics-and-kinetics-of-materials-fall-2006/1baa318e2b9bd0996e61c1e5017c1dbf_lecture02_review.pdf),
which also notes that stress, temperature, and capillary gradients can drive
mass transport. A concentration gradient is therefore not universal. More
generally, flux is linked to gradients of chemical potential (and, for charged
species, electrochemical potential), with mobility setting the kinetic
response. Thermodynamics supplies the tendency; atomic mechanisms and defect
populations supply the mobility. The [thermodynamics note](thermodynamic-systems-laws-potentials.md)
defines chemical potential, while the [kinetics note](chemical-kinetics-reaction-mechanisms.md)
explains why a favorable tendency does not specify a rate.

## Expect microstructure to matter

Grain boundaries, dislocation cores, and free surfaces often offer faster
paths than the lattice because their local structures and defect populations
are different
([NIST, “Diffusivity and Mobility Data”](https://www.nist.gov/publications/diffusivity-and-mobility-data)).

## Apply material-class caveats

- **Ionic solids:** mobile ions and charged defects respond to electrochemical,
  not merely chemical, potential. Charge neutrality, defect association, and
  coupled electronic carriers can constrain the measured rate. Conductivity is
  one route to diffusion data, but interpreting it requires identifying the
  mobile species.
- **Polymers:** a penetrant commonly dissolves into the polymer and then
  diffuses. Permeability therefore combines sorption and diffusion; swelling,
  crystallinity, temperature, and penetrant concentration can affect transport.

These caveats extend the same discipline: identify the mobile entity, its
charge or chemical identity, the phase and path, the driving potential, and
the observable before assigning one coefficient (Callister and Rethwisch,
2015, Ch. 6, §§6.6–6.8, pp. 200–207).

## Know when the simple model fails

Do not use a constant-`D`, one-dimensional solution without checking:

1. geometry and boundary conditions, including finite thickness and moving
   interfaces;
2. whether `D` changes with composition, position, phase, stress,
   or time;
3. bulk sources or sinks such as reaction, precipitation, trapping, or
   evaporation;
4. multiple coupled species, electric fields, or material motion
   (advection);
5. short-circuit paths and exchange between them and the lattice; and
6. whether the continuum scale is large compared with jumps and
   microstructural heterogeneity.

Measured concentration profiles also have finite depth and lateral resolution,
surface-position uncertainty, background and calibration error, and sometimes
specimen-preparation artifacts. Fitting a simple profile returns an **effective**
diffusivity conditional on the assumed initial condition, boundary condition,
geometry, and mechanism. A good fit is not unique evidence for that mechanism.
Tracer experiments add label detection and isotope-exchange assumptions;
conductivity measurements add a carrier-number and defect-chemistry model.
Report temperature history, composition range, orientation, microstructure,
method, fitted model, uncertainty, and the reference frame with any `D` value.

## Related notes

- [Imperfections and Defects in Solids](imperfections-and-defects-in-solids.md)
- [Thermodynamic Systems, Laws, and Potentials](thermodynamic-systems-laws-potentials.md)
- [Chemical Potential, Activity, and Partial Molar Properties](chemical-potential-activity-and-partial-molar-properties.md)
- [Chemical Kinetics and Reaction Mechanisms](chemical-kinetics-reaction-mechanisms.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Ch. 6, §§6.1–6.8, pp. 187–207. Wiley.
- Massachusetts Institute of Technology OpenCourseWare. “24. Diffusion,”
  3.091SC *Introduction to Solid State Chemistry*, Fall 2010.
  <https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/reactions-and-kinetics/24-diffusion/>
- Massachusetts Institute of Technology OpenCourseWare. “Kinetics Lecture 2:
  Mass Diffusion and Heat Conduction,” 3.205 *Thermodynamics and Kinetics of
  Materials*, Fall 2006.
  <https://ocw.mit.edu/courses/3-205-thermodynamics-and-kinetics-of-materials-fall-2006/1baa318e2b9bd0996e61c1e5017c1dbf_lecture02_review.pdf>
- National Institute of Standards and Technology. “Diffusivity and Mobility
  Data.” Updated February 17, 2017.
  <https://www.nist.gov/publications/diffusivity-and-mobility-data>
- Engineering LibreTexts/DoITPoMS. “Fick's Second Law of Diffusion.”
  <https://eng.libretexts.org/Bookshelves/Materials_Science/TLP_Library_I/20%3A_Diffusion/20.02%3A_Fick%27s_Second_Law_of_Diffusion>
