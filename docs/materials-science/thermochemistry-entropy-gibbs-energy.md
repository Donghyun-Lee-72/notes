# Thermochemistry, Entropy, and Gibbs Energy

Thermochemistry tracks energy transferred as heat or work during physical and
chemical change. Entropy and Gibbs energy then help decide which direction a
process can favor under stated conditions. Together, these ideas constrain
synthesis, phase change, thermal processing, and chemical stability—but they
do not say how fast a change will occur.

This page treats macroscopic equilibrium states and ordinary pressure–volume
work. Every sign belongs to the system defined for the calculation, and every
direction claim is conditional on temperature, pressure, composition, and
phase.

## Draw the boundary before assigning a sign

The **system** is the matter or region selected for study. The
**surroundings** are everything outside its boundary; system plus surroundings
form the thermodynamic universe. In one calorimetry model, the reacting species
can be the system while the bulk solution, cup, thermometer, and external room
act as parts of its surroundings
([OpenStax, *Chemistry 2e*, §5.2](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)).

- An **open system** can exchange matter and energy with its surroundings.
- A **closed system** can exchange energy but not matter.
- An **isolated system** exchanges neither in the idealized model.

Real apparatus is isolated only to a stated approximation and observation
time. A covered calorimeter may suppress evaporation yet still leak heat
slowly.

This page uses the chemistry convention

`ΔU = q + w`

where `U` is internal energy, `q > 0` means heat enters the system, and
`w > 0` means work is done **on** the system. Heat leaving the system and work
done by the system are negative. For pressure–volume work against a constant
external pressure,

`w = -p_ext ΔV`

where `p_ext` is the constant external pressure and
`ΔV = V_final - V_initial`. Expansion therefore has `ΔV > 0` and `w < 0`;
compression has `ΔV < 0` and `w > 0`. Another discipline may define work done
**by** the system as positive. Either convention works if it is declared and
used consistently
([OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

Heat is energy in transfer because of a temperature difference, not a material
content stored inside a body. Work is the other energy-transfer mode used
here. Both have the SI unit joule (`J`).

## Separate state functions from paths

A **state function** depends only on the specified state, not on the path used
to reach it. Internal energy `U`, enthalpy `H`, entropy `S`, and Gibbs energy
`G` are state functions. Their changes have the form

`ΔX = X_final - X_initial`

Heat `q` and work `w` are path quantities. Two routes between the same initial
and final states can exchange different amounts of heat and work, while their
sums give the same `ΔU`. A reaction enthalpy also refers to the reaction
**as written**: reversing the equation reverses the sign, and multiplying all
coefficients multiplies the extensive energy change
([OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

This distinction prevents statements such as “the system contains heat” or
“the reaction has a positive heat.” Name the boundary, process, direction, and
conditions instead.

## Infer heat transfer with calorimetry

A calorimeter converts an observed temperature change into a heat-transfer
estimate. Over a range where heat capacities can be treated as constant and
no unmodelled phase change occurs,

`q_body = m c ΔT` or `q_body = C ΔT`

where `m` is mass, `c` is specific heat capacity, and `C` is the heat capacity
of the whole body or apparatus. Their common units are `J g^-1 K^-1` and
`J K^-1`, respectively. A temperature difference has the same numerical value
in kelvins and degrees Celsius
([IUPAC Gold Book, “heat capacity”](https://goldbook.iupac.org/terms/view/H02753);
[OpenStax, §§5.1–5.2](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)).

For an ideally insulated measurement,

`q_system + q_surroundings = 0`

but the surroundings term may include the solution, container, probe, and
other calibrated parts.

**Calorimetry audit.** Suppose `0.0125 mol` of a reactant is consumed in a
constant-pressure solution calorimeter. The model assigns `75.0 g` of solution
a specific heat capacity of `4.00 J g^-1 K^-1`, assigns the calorimeter a heat
capacity of `18.0 J K^-1`, and measures `ΔT = +3.20 K`.

`q_surroundings = [(75.0 g)(4.00 J g^-1 K^-1) + 18.0 J K^-1] × (3.20 K)`

`= 1.0176 × 10^3 J = 1.02 kJ`

The surroundings warmed, so they gained heat and
`q_system = -1.02 kJ`. Per mole consumed,

`q_system/n = -1.0176 kJ / 0.0125 mol = -81.4 kJ mol^-1`

The signs and units close: positive surroundings heat corresponds to negative
system heat. The result assumes negligible heat leakage and evaporation,
uniform final temperature, the stated heat capacities, and no energy term
missing from the apparatus model. Calibration, mixing delay, probe response,
mass, and temperature uncertainty limit a real result
([OpenStax, §5.2](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)).

A constant-volume bomb calorimeter gives `q_v = ΔU` when pressure–volume work
is the only possible work. Enthalpy is defined without requiring constant
pressure:

`H = U + pV`

where `p` is system pressure and `V` is volume. At constant pressure,
`q_p = ΔH` when only pressure–volume work occurs. The heat equalities are
conditional measurement relations, not interchangeable labels for heat,
internal energy, and enthalpy
([IUPAC Gold Book, “enthalpy”](https://goldbook.iupac.org/terms/view/E02141);
[OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

## Add enthalpy changes with Hess's law

Because enthalpy is a state function, the enthalpy change for an overall
process is the sum of the changes for any set of steps that adds to the same
initial and final states. This is **Hess's law**. Phases, stoichiometric
coefficients, pressure, and temperature belong to those states and must remain
consistent.

For a symbolic audit, suppose the following measured transformations refer to
the same temperature and pressure:

`A(s) + 1/2 X2(g) -> AX(s)        ΔH1 = -210 kJ`

`AX(s) + 1/2 X2(g) -> AX2(s)      ΔH2 = -95 kJ`

Adding them cancels the intermediate `AX(s)`:

`A(s) + X2(g) -> AX2(s)           ΔH = -305 kJ`

The labels are hypothetical rather than data for named substances. The example
shows the audit rules: reverse a step and reverse its sign; multiply an
equation and multiply its `ΔH`; cancel identical species only when their
phases and conditions match
([OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

## Use entropy for the complete thermodynamic universe

Entropy `S` is a state function. For two equilibrium states, its change can be
evaluated along a hypothetical reversible path:

`ΔS = integral(δq_rev/T)`

where `T` is thermodynamic temperature in kelvins. For reversible isothermal
heat transfer this becomes `ΔS = q_rev/T`; `δq_rev` denotes an infinitesimal
reversible heat transfer along that path. Entropy has units `J K^-1`, and molar
entropy has units `J mol^-1 K^-1`
([IUPAC Gold Book, “entropy”](https://goldbook.iupac.org/terms/view/E02149)).

In a microcanonical model whose accessible microstates are equiprobable,
`S = k_B ln W`, where `k_B` is the Boltzmann constant, `ln` is the natural
logarithm, and `W` counts those microstates under the model. Entropy therefore
concerns how matter and energy can be distributed among accessible states.
Calling it merely “disorder” hides the model, the constraints, and the
quantitative definition. A system's entropy can decrease; the second law
applies to the complete isolated total:

`ΔS_universe = ΔS_system + ΔS_surroundings >= 0`

An irreversible spontaneous change has `ΔS_universe > 0`; a reversible limit
has `ΔS_universe = 0`. A proposed change with
`ΔS_universe < 0` cannot proceed spontaneously in that direction under the
stated constraints
([OpenStax, *Chemistry 2e*, §§16.2–16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).

**Heat-flow audit.** Let `1.00 kJ` pass from an ideal hot reservoir at `400 K`
to an ideal cold reservoir at `300 K`, with the pair otherwise isolated and the
stated reservoir temperatures treated as fixed model values. The entropy
changes can be evaluated by reversible paths between each reservoir's endpoints
even though the actual heat transfer across a finite temperature difference is
irreversible:

`ΔS_hot = -1000 J / 400 K = -2.50 J K^-1`

`ΔS_cold = +1000 J / 300 K = +3.33 J K^-1`

`ΔS_universe = +0.83 J K^-1`

The hot reservoir loses entropy, but the cold reservoir gains more. This
positive total, rather than the sign of either part alone, identifies the
allowed direction.

## Bound Gibbs-energy conclusions to their conditions

IUPAC defines Gibbs energy as

`G = H - TS`

([IUPAC Gold Book, “Gibbs energy”](https://goldbook.iupac.org/terms/view/G02629)).
For a finite change in general,

`ΔG = ΔH - Δ(TS)`

and only when the initial and final states have the same temperature does this
reduce to

`ΔG = ΔH - TΔS`

Use kelvins, and convert `ΔH` and `TΔS` to the same energy units before
subtracting.

For a closed system held at constant temperature and pressure, with no imposed
non-pressure–volume work, three related quantities must remain distinct:

| Quantity | Meaning under the stated conditions |
| --- | --- |
| finite `ΔG = G_final - G_initial` | compares two specified endpoints; `ΔG < 0` means the final endpoint has lower `G`, whereas `ΔG = 0` means only that the endpoints have equal `G` |
| infinitesimal `dG` | describes an allowed differential change; a spontaneous direction has `dG < 0`, while general equilibrium is stationary (`dG = 0` for every permitted infinitesimal variation) and stable equilibrium is a minimum of `G` |
| reaction Gibbs energy `Δ_rG = (∂G/∂ξ)_(T,p)` | is the derivative of `G` with respect to reaction extent `ξ`; `Δ_rG < 0` favors increasing `ξ`, `Δ_rG > 0` favors decreasing it, and `Δ_rG = 0` is the reaction-equilibrium condition |

Thus equality of `G` for two arbitrarily selected finite endpoints is not by
itself an equilibrium test. For one reaction with extent `ξ` at constant
temperature and pressure,

`dG = Δ_rG dξ`

so the reaction criterion is the reaction-coordinate form of the general
minimum-`G` criterion. These criteria follow from the second law under the
stated constraints
([OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)).
They are not rules for arbitrary changing temperature or pressure, and they do
not by themselves describe an open, driven, or nonequilibrium steady system.

**Reaction Gibbs-energy audit.** Consider a hypothetical reaction at `298 K`
and constant pressure with
`Δ_rH = +18.0 kJ mol^-1` and `Δ_rS = +75.0 J mol^-1 K^-1`.
First convert the entropy unit:

`Δ_rS = 0.0750 kJ mol^-1 K^-1`

Then

`Δ_rG = Δ_rH - TΔ_rS`

`= 18.0 - (298 K)(0.0750 kJ mol^-1 K^-1)`

`= -4.35 kJ mol^-1 ≈ -4.4 kJ mol^-1`

The unrounded arithmetic gives `-4.35 kJ mol^-1`, but subtraction with the
stated inputs supports reporting the result to one decimal place. Because
`Δ_rG < 0`, increasing the reaction extent is thermodynamically favored at
`298 K`. If `Δ_rH` and `Δ_rS` were approximately constant with temperature, the
sign would cross near
`T = Δ_rH/Δ_rS = 18.0/0.0750 = 2.40 × 10^2 K`. The three significant figures
show the precision of the input ratio, not exactness: the crossover remains an
approximation because heat capacities, phase changes, and composition can make
`Δ_rH` and `Δ_rS` temperature-dependent
([OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)).

The usual sign table carries the same approximation:

| `Δ_rH` | `Δ_rS` | Reaction direction inferred from `Δ_rG = Δ_rH - TΔ_rS` |
| --- | --- | --- |
| negative | positive | favored at all temperatures in the valid range |
| positive | negative | not favored at any temperature in the valid range |
| negative | negative | favored at sufficiently low temperature |
| positive | positive | favored at sufficiently high temperature |

For reactions, distinguish the actual reaction Gibbs energy `Δ_rG` from the
standard-state value `Δ_rG°`. Composition changes the actual value; in an ideal
introductory treatment,

`Δ_rG = Δ_rG° + RT ln Q`

where subscript `r` means the reaction as written, `R` is the molar gas
constant, and `Q` is the dimensionless reaction quotient defined using
**activities**—dimensionless effective measures of species' thermodynamic
concentrations or pressures relative to chosen standard states. `Q` multiplies
those activities raised to their stoichiometric powers.
Therefore `Δ_rG° < 0` does not mean the forward reaction is favored at every
composition. At reaction equilibrium, `Δ_rG = 0` and `Q` has its equilibrium
value `K`. A later equilibrium note will develop `Q`, activities, and the
equilibrium constant
([OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)).

## Thermodynamic direction is not reaction rate

Thermodynamics compares states and constrains direction. **Kinetics** asks how
quickly a process proceeds and by what pathway. A negative `Δ_rG` supplies no
clock: a reaction may be too slow to detect on the observation time because its
available pathway has a large **activation barrier**, the energy or Gibbs-energy
hurdle between the reactant state and a higher-energy transition region along
that pathway. A catalyst provides an alternative pathway with a lower barrier
but leaves the reactant and product thermodynamic endpoints unchanged
([OpenStax, §16.1](https://openstax.org/books/chemistry-2e/pages/16-1-spontaneity);
[OpenStax, §12.7](https://openstax.org/books/chemistry-2e/pages/12-7-catalysis)).
The unchanged endpoints leave `Δ_rG°` unchanged, and at the same temperature,
pressure, and composition the catalyst also leaves `Q` unchanged. It therefore
changes neither term in `Δ_rG = Δ_rG° + RT ln Q`. The equilibrium position is
the composition satisfying `Δ_rG = 0`, so it too is unchanged. A catalyst can
change only how quickly that position is approached in this thermodynamic model
([OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy);
[MIT OCW 5.111SC, Unit III](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-iii-thermodynamics-chemical-equilibrium/)).

Likewise, “spontaneous” does not mean instantaneous, violent, or complete. It
identifies a favored infinitesimal direction from the stated state. As
composition changes, `Δ_rG` moves toward and equals zero at reaction
equilibrium rather than forcing all reactant to disappear.

## Audit a thermodynamic claim

Before accepting a calculation or conclusion, check:

1. **Boundary:** What is the system, and may matter or energy cross it?
2. **Convention:** Are `q`, `w`, expansion, and reaction direction signed
   consistently?
3. **State:** Are temperature, pressure, composition, amount, and phase stated?
4. **Quantity:** Is the value `ΔU`, `q`, `ΔH`, `ΔS`, finite `ΔG`, differential
   `dG`, reaction `Δ_rG`, or a standard-state quantity rather than an unlabeled
   “energy”?
5. **Conditions:** Does `q_p = ΔH`, `q_v = ΔU`, or
   `ΔG = ΔH - TΔS` actually apply?
6. **Units:** Are joules and kilojoules reconciled, and is temperature in
   kelvins for entropy and Gibbs-energy calculations?
7. **Direction versus rate:** Does the evidence concern thermodynamic
   favorability, equilibrium composition, reaction rate, or mechanism?
8. **Measurement model:** Were calorimeter heat capacity, heat leakage,
   calibration, phase change, and uncertainty included or justified as
   negligible?

Common misconceptions are that exothermic means spontaneous, that the
system's entropy must always rise, that negative `Δ_rG` guarantees a fast or
complete reaction, and that `Δ_rG°` describes every composition. Each drops a
condition needed for the conclusion.

## Boundary of this page

This introduction does not derive chemical potentials, activities, phase
equilibria, electrochemical work, or nonequilibrium thermodynamics. It treats
heat capacities as constant within each compact example and uses common
closed-system criteria. Real materials may have metastable phases, gradients,
interfaces, elastic or electrical work, and transport limitations; those
features require a more complete model and independent measurements. MIT
OCW's first-year sequence likewise places reaction enthalpy, entropy and Gibbs
energy before equilibrium and later kinetics
([MIT OCW 5.111SC, Lecture 15](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec15/);
[Lecture 16](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec16/)).

## Related notes

- [General Chemistry Map and Learning Path](chemistry.md)
- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)

## References

- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “enthalpy,” “entropy,”
  “Gibbs energy,” and “heat capacity.”
  <https://goldbook.iupac.org/terms/view/E02141>
  <https://goldbook.iupac.org/terms/view/E02149>
  <https://goldbook.iupac.org/terms/view/G02629>
  <https://goldbook.iupac.org/terms/view/H02753>
- OpenStax. *Chemistry 2e*, §§5.1–5.3, 12.7, and 16.1–16.4.
  <https://openstax.org/books/chemistry-2e/pages/5-1-energy-basics>
  <https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry>
  <https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy>
  <https://openstax.org/books/chemistry-2e/pages/12-7-catalysis>
  <https://openstax.org/books/chemistry-2e/pages/16-1-spontaneity>
  <https://openstax.org/books/chemistry-2e/pages/16-2-entropy>
  <https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics>
  <https://openstax.org/books/chemistry-2e/pages/16-4-free-energy>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, Unit III,
  Lectures 15–16. Used to check first-year depth and the separation of
  thermodynamic direction, equilibrium, and kinetics.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-iii-thermodynamics-chemical-equilibrium/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec15/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec16/>
