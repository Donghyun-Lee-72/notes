# Chemical Kinetics and Reaction Mechanisms

**Chemical kinetics** describes how fast a chemical system changes and which
molecular-scale steps may connect reactants to products. It matters whenever a
reaction must finish within a processing window, be slowed during storage, or
be directed toward one pathway rather than another. A balanced equation states
the net change; kinetics adds measured time dependence and tests possible
pathways.

This page treats well-mixed systems at fixed volume and temperature unless
stated otherwise. Concentrations are amount concentrations in `mol L^-1`, time
is in seconds, and `k` denotes a rate constant for specified conditions.
Changes in solvent, phase, surface, mixing, or temperature can change the
observed law as well as the value of `k`
([OpenStax, *Chemistry 2e*, §12.2](https://openstax.org/books/chemistry-2e/pages/12-2-factors-affecting-reaction-rates)).

## Define one reaction rate consistently

For the reaction

`a A + b B -> c C + d D`

reactant concentrations decrease while product concentrations increase. A
stoichiometrically normalized instantaneous reaction rate is

`v = -(1/a)d[A]/dt = -(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt`

The minus signs make `v` positive for forward progress. Dividing by each
stoichiometric coefficient makes every species report the same reaction rate.
For a finite interval, replace each derivative by `Delta[species]/Delta t` to
obtain an average rate. With concentration in `mol L^-1` and time in `s`, the
rate unit is `mol L^-1 s^-1`
([OpenStax, *Chemistry 2e*, §12.1](https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates);
[IUPAC Gold Book, “rate of reaction”](https://goldbook.iupac.org/terms/view/R05156)).

Concentration is often inferred from another observation. Absorbance,
pressure, gas volume, conductivity, or another calibrated signal can provide a
concentration–time record. The instrument observes that signal; the rate
follows only after applying the calibration, stoichiometry, and stated
conditions. A delayed sample, an uncorrected temperature drift, or
mass-transfer limitation can therefore masquerade as chemical kinetics.

## Determine the rate law by experiment

A common empirical form is

`v = k[A]^m[B]^n`

The exponents `m` and `n` are partial **reaction orders**, and `m + n` is the
overall order for this law. They describe how the measured rate responds to
concentration; they are not generally the coefficients `a` and `b` in the
overall equation. Orders and `k` must be inferred from data at specified
conditions. Orders may be zero, non-integer, or negative in composite
reactions
([IUPAC Gold Book, “rate law”](https://goldbook.iupac.org/terms/view/R05141)
and [“order of reaction”](https://goldbook.iupac.org/terms/view/O04322);
[OpenStax, §12.3](https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws)).

**Initial-rate audit.** Consider the net equation `2 X + Y -> products` and
this independently constructed dataset:

| Trial | Initial `[X]` (`mol L^-1`) | Initial `[Y]` (`mol L^-1`) | Initial `v` (`mol L^-1 s^-1`) |
| --- | ---: | ---: | ---: |
| 1 | 0.100 | 0.100 | `2.40 × 10^-4` |
| 2 | 0.200 | 0.100 | `4.80 × 10^-4` |
| 3 | 0.100 | 0.200 | `9.60 × 10^-4` |
| 4 | 0.200 | 0.200 | `1.92 × 10^-3` |

Trials 1 and 2 double `[X]` at fixed `[Y]` and double the rate, so
`2^m = 2` and `m = 1`. Trials 1 and 3 double `[Y]` at fixed `[X]` and
quadruple the rate, so `2^n = 4` and `n = 2`. Therefore,

`v = k[X][Y]^2`

The law is first order in X, second order in Y, and third order overall—despite
the net coefficients 2 for X and 1 for Y. Trial 1 gives

`k = (2.40 × 10^-4 mol L^-1 s^-1)/[(0.100 mol L^-1)(0.100 mol L^-1)^2]`

`= 0.240 L^2 mol^-2 s^-1`

Trial 4 predicts
`(0.240)(0.200)(0.200)^2 = 1.92 × 10^-3 mol L^-1 s^-1`, which checks the
table but does not prove a unique mechanism.

For overall order `N`, dimensional consistency gives

`units of k = (mol L^-1)^(1-N) s^-1`

Thus zero-, first-, second-, and third-order constants have units
`mol L^-1 s^-1`, `s^-1`, `L mol^-1 s^-1`, and
`L^2 mol^-2 s^-1`, respectively. A number reported as “the rate constant”
without its rate law, units, temperature, and relevant medium is incomplete.

## Relate concentration to time

For a single reactant A with coefficient 1, suppose its disappearance obeys

`-d[A]/dt = k[A]^N`

Integrating gives different concentration–time relations for different
orders. The following forms apply only while the stated order and constant `k`
remain valid
([OpenStax, §12.4](https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws)).

| Order `N` | Integrated law | Linear diagnostic | Slope | Half-life `t_1/2` |
| --- | --- | --- | ---: | --- |
| 0 | `[A]_t = [A]_0 - kt` | `[A]_t` versus `t` | `-k` | `[A]_0/(2k)` |
| 1 | `ln([A]_t/[A]_0) = -kt` | `ln([A]_t/c°)` versus `t` | `-k` | `ln(2)/k` |
| 2 | `1/[A]_t = 1/[A]_0 + kt` | `1/[A]_t` versus `t` | `+k` | `1/(k[A]_0)` |

Here `c° = 1 mol L^-1` makes the plotted logarithm dimensionless. Textbooks
often label the same ordinate `ln[A]`; using one consistent concentration unit
only shifts the intercept and leaves the slope `-k` unchanged. The
second-order row is specifically for `-d[A]/dt = k[A]^2`; a reaction between
two different reactants requires the corresponding integrated derivation.

The half-life is the time for the chosen reactant concentration to become half
its starting value. Only a first-order half-life is independent of initial
concentration. A zero-order law predicts a straight decrease only over its
valid regime and must not be extrapolated to negative concentration.

**First-order audit.** Let `[A]_0 = 0.0800 mol L^-1`,
`k = 3.50 × 10^-3 s^-1`, and `t = 240 s`. Then

`[A]_t = [A]_0 exp(-kt)`

`= (0.0800 mol L^-1)exp[-(3.50 × 10^-3 s^-1)(240 s)]`

`= (0.0800 mol L^-1)exp(-0.840) = 0.0345 mol L^-1`

The exponent is dimensionless. The fraction remaining is
`exp(-0.840) = 0.4317`, so `56.8%` has disappeared. Independently,

`t_1/2 = ln(2)/(3.50 × 10^-3 s^-1) = 198 s`

Because `240/198 = 1.21` half-lives, a remaining fraction below one-half is
consistent with the direct calculation.

Linearized plots are diagnostics, not automatic truth tests. Compare residuals
and uncertainty over the measured range rather than selecting whichever
transformation looks straightest by eye. Depletion, product inhibition,
reversible reaction, changing surface coverage, or a pathway change can make
one simple integrated law valid only over part of a run.

## Connect temperature to the rate constant

For many reactions over a bounded temperature range, the Arrhenius equation is

`k = A exp[-E_a/(RT)]`

where `E_a` is the activation energy, `R` is the gas constant, `T` is absolute
temperature in kelvin, and `A` is the pre-exponential factor. For two
temperatures, assuming the same Arrhenius parameters over that range,

`ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2)`

The logarithm and exponential arguments are dimensionless. A dimensionally
explicit Arrhenius plot uses `ln(k/k°)` against `1/T`, where `k°` is a fixed
reference with the same units as `k`; its slope is `-E_a/R`. The common
ordinate label `ln k` is shorthand for this ratio. Changing the units or
reference shifts the intercept but does not change the slope
([OpenStax, §12.5](https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory)).

**Temperature audit.** Suppose `E_a = 62.0 kJ mol^-1`,
`T_1 = 298 K`, and `T_2 = 318 K`. Using
`R = 8.314 J mol^-1 K^-1` requires `E_a = 6.20 × 10^4 J mol^-1`:

`ln(k_2/k_1) = [(6.20 × 10^4)/(8.314)] × (1/298 - 1/318) = 1.574`

`k_2/k_1 = exp(1.574) = 4.83`

The estimated rate constant is therefore 4.83 times larger at 318 K, not
merely `318/298` times larger. This is an Arrhenius-range estimate, not a
universal temperature rule: `A`, `E_a`, phase, or the dominant mechanism may
change across a wider range.

## Build mechanisms from elementary steps

A **reaction mechanism** is a proposed sequence of **elementary reactions**.
An elementary reaction represents one molecular event; its rate-law powers can
therefore be read from the reactant entities in that step. **Molecularity** is
the number of reactant entities in one elementary reaction: one is
unimolecular, two bimolecular, and three termolecular. Molecularity applies to
an elementary step, never to an unverified overall equation or an empirical
order
([IUPAC Gold Book, “elementary reaction”](https://goldbook.iupac.org/terms/view/E02035)
and [“molecularity”](https://goldbook.iupac.org/terms/view/M03989);
[OpenStax, §12.6](https://openstax.org/books/chemistry-2e/pages/12-6-reaction-mechanisms)).

An **intermediate** is formed on the route and then consumed. It cancels when
the steps are summed and is absent from the net equation, although it may be
detectable
([IUPAC Gold Book, “intermediate”](https://goldbook.iupac.org/terms/view/I03096)).
For any proposed mechanism, perform three separate tests:

1. Add the steps and cancel only species appearing on opposite sides.
2. Check conservation of every element and net charge in each step and in the
   sum.
3. Derive the observable rate law under explicit approximations and compare it
   with experiment.

Agreement is necessary but not sufficient: different mechanisms can predict
the same rate law, and spectroscopy, isotope effects, product distributions,
or other evidence may be needed to distinguish them.

## Bound pre-equilibrium and steady-state reasoning

Pre-equilibrium and steady state are different approximations, so it is useful
to examine them with different mechanisms.

For a pre-equilibrium example, consider

`Step 1: A + B <=> I` with forward `k_1` and reverse `k_-1`

`Step 2: I -> P` with `k_2`

Adding the forward route cancels I and gives `A + B -> P`. If step 1
re-equilibrates well before step 2 appreciably drains I, its opposing fluxes
are nearly equal:

`k_1[A][B] ≈ k_-1[I]`

so

`[I] ≈ (k_1/k_-1)[A][B]`

and product formation is predicted to obey

`v = k_2[I] = (k_1k_2/k_-1)[A][B]`

The effective constant has units `L mol^-1 s^-1`, giving `v` in
`mol L^-1 s^-1`. In timescale language, the equilibrium relaxation time
`tau_eq` must satisfy `tau_eq << tau_drain`, where
`tau_drain ≈ 1/k_2`, and it must also be short compared with the times over
which `[A]` and `[B]` change. If B is in large excess and is effectively
constant, `tau_eq ≈ 1/(k_1[B] + k_-1)`; requiring this to be much smaller than
`1/k_2`, with `k_-1 >> k_2`, is a practical sufficient check rather than a
conclusion that follows from the mechanism alone.

Now consider a separate network in which an intermediate has two irreversible
fates:

`Step 1: A -> J` with `k_3`

`Step 2: J + B -> P` with `k_4`

`Step 3: J -> Q` with `k_5`

Steps 1 and 2 sum to the productive reaction `A + B -> P`; steps 1 and 3
sum to the competing reaction `A -> Q`. J cancels from either sum. After the
initial buildup of J, the **steady-state approximation** treats its formation
and its two consumption fluxes as nearly balanced:

`d[J]/dt = k_3[A] - k_4[J][B] - k_5[J] ≈ 0`

Solving this balance and substituting into the rate of P formation gives

`[J] ≈ k_3[A]/(k_4[B] + k_5)`

`v_P = k_4[J][B] ≈ k_3k_4[A][B]/(k_4[B] + k_5)`

Both terms in the denominator have units `s^-1`. The result also passes a
flux audit: `v_P + v_Q ≈ k_3[A]`, where `v_Q = k_5[J]`, and
`v_P/v_Q = k_4[B]/k_5`. Thus, when `k_4[B] << k_5`,
`v_P ≈ (k_3k_4/k_5)[A][B]`; when `k_4[B] >> k_5`, almost every J forms P
and `v_P ≈ k_3[A]`. These limits describe competition between product
channels, not a hidden equilibrium.

Steady state does not mean equilibrium, nor does it require `[J]` to be exactly
constant for the entire run. Here the intermediate adjusts over a timescale
of about `1/(k_4[B] + k_5)`, so A and B must change much more slowly during
the modeled interval. Equivalently, `|d[J]/dt|` must be small relative to the
individual formation and consumption fluxes
([IUPAC Gold Book, “steady state”](https://goldbook.iupac.org/terms/view/S05962)).

## Use “rate-determining step” with care

At fixed concentrations and conditions, **rate control** qualitatively
describes how sensitively the overall rate responds to a small fractional
change in one step's rate constant `k_i`. If one step has much greater
sensitivity than the others, calling it **rate-controlling** or
**rate-determining** can be a useful summary. Introductory discussions
sometimes assign control to whichever step appears least ready to proceed.
That shortcut is reliable only for a suitably separated sequence after the
relations imposed by earlier steps have been included; it is not a general
derivation
([IUPAC Gold Book, “rate-controlling step”](https://goldbook.iupac.org/terms/view/R05139)
and [“rate-determining step”](https://goldbook.iupac.org/terms/view/R05140)).

In the steady-state network above, the high-`[B]` product rate is sensitive to
`k_3` but nearly insensitive to `k_4`; in the low-`[B]` limit it depends on
`k_3`, `k_4`, and `k_5`. Reversible steps, intermediate accumulation, parallel
paths, catalyst coverage, and changing concentrations can distribute or shift
control. Always derive the relevant limiting law before assigning a single
controlling step.

## Understand what a catalyst changes

A **catalyst** participates in a mechanism and is regenerated, increasing the
rate without changing the overall standard Gibbs energy change. It supplies a
different pathway whose controlling barrier is lower under the stated
conditions. It does not change the net reaction, create a more favorable
equilibrium, or alter the equilibrium constant
([IUPAC Gold Book, “catalyst”](https://goldbook.iupac.org/terms/view/C00876);
[OpenStax, §12.7](https://openstax.org/books/chemistry-2e/pages/12-7-catalysis)).

For example, the symbolic catalytic cycle

`C + A -> CA`

`CA + B -> C + P`

sums to `A + B -> P`: catalyst C and intermediate CA both cancel, but for
different reasons. C is consumed and regenerated within the cycle; CA is
formed and consumed. The cancellation audit does not show how much active
catalyst is present or whether side reactions deactivate it.

Classify a catalytic system by tracking where the active catalyst and
reactants reside. In **homogeneous catalysis**, they share one bulk phase, so
concentrations and molecular-scale encounters usually organize the kinetic
description. In **heterogeneous catalysis**, the catalyst occupies a distinct
phase and supplies sites that reactants must reach. Transport to those sites,
adsorption, surface conversion, and product release can each influence the
measured rate; surface area and the fraction of available sites therefore
matter as well. This phase classification does not by itself identify the
rate-controlling process. In either class, catalysis speeds approach from both
directions to the same equilibrium and cannot make an unfavorable net
conversion thermodynamically favorable.

## Keep kinetics and thermodynamics separate

Thermodynamics asks about energy differences, reaction direction under stated
conditions, and equilibrium. Kinetics asks about rates, time evolution, and
pathways. A thermodynamically favorable reaction can be imperceptibly slow
because its accessible pathways have large barriers; a rapid reaction can
still stop at equilibrium before complete conversion. A catalyst changes the
path to equilibrium, not the equilibrium itself
([MIT OCW 5.111SC, Unit V: Chemical Kinetics](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-v-chemical-kinetics/)).

Carry these distinctions into materials processing. A favorable phase or
product does not guarantee formation during a finite heat treatment, and a
measured rate under one temperature, atmosphere, particle size, or surface
condition does not establish service life under another. Rate laws are
conditional models supported over measured ranges, not permanent labels
attached to equations.

## Audit a kinetics claim

Before accepting a kinetic result, check:

1. **Observable:** What signal was measured, and how was it converted to a
   concentration or extent?
2. **Rate definition:** Are signs and stoichiometric normalization consistent?
3. **Conditions:** Are temperature, phase, medium, mixing, surface, and
   concentration range stated?
4. **Order and units:** Were exponents measured, and do the units of `k`
   reproduce concentration per time?
5. **Integrated law:** Is the logarithm dimensionless, is the plotted slope
   signed correctly, and is extrapolation confined to the valid regime?
6. **Temperature:** Are kelvin, energy units, exponent signs, and Arrhenius
   assumptions consistent?
7. **Mechanism:** Do the steps sum correctly, do intermediates and catalysts
   cancel for the right reasons, and does the derived law omit intermediates?
8. **Inference:** Is a compatible mechanism described as plausible rather than
   uniquely proved?

Common errors are reading rate-law powers from an overall equation, calling an
overall third-order law “termolecular,” using first-order half-life for another
order, plotting a dimensional logarithm without a unit convention, assigning
the wrong sign to a linear slope, using degrees Celsius in `1/T`, treating the
largest barrier as an unconditional slow step, and claiming that a catalyst
changes equilibrium.

## Related notes

- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
- [General Chemistry Map and Learning Path](chemistry.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)

## References

- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “rate of reaction,”
  “rate law,” “order of reaction,” “elementary reaction,” “molecularity,”
  “intermediate,” “steady state,” “rate-controlling step,”
  “rate-determining step,” and “catalyst.”
  <https://goldbook.iupac.org/terms/view/R05156>
  <https://goldbook.iupac.org/terms/view/R05141>
  <https://goldbook.iupac.org/terms/view/O04322>
  <https://goldbook.iupac.org/terms/view/E02035>
  <https://goldbook.iupac.org/terms/view/M03989>
  <https://goldbook.iupac.org/terms/view/I03096>
  <https://goldbook.iupac.org/terms/view/S05962>
  <https://goldbook.iupac.org/terms/view/R05139>
  <https://goldbook.iupac.org/terms/view/R05140>
  <https://goldbook.iupac.org/terms/view/C00876>
- OpenStax. *Chemistry 2e*, Chapter 12, §§12.1–12.7.
  <https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates>
  <https://openstax.org/books/chemistry-2e/pages/12-2-factors-affecting-reaction-rates>
  <https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws>
  <https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws>
  <https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory>
  <https://openstax.org/books/chemistry-2e/pages/12-6-reaction-mechanisms>
  <https://openstax.org/books/chemistry-2e/pages/12-7-catalysis>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, Unit V:
  Chemical Kinetics. Used to check first-year depth for rate-law analysis,
  mechanisms, steady state, activation barriers, and catalysis.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-v-chemical-kinetics/>
