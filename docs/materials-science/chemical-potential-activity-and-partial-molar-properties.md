# Chemical Potential, Activity, and Partial Molar Properties

A **partial molar property** is the constrained marginal change in an extensive
property when an infinitesimal amount of one component is added. The most
important case is the **chemical potential** `mu_i`: the partial molar Gibbs
energy of component `i`. It connects composition to the thermodynamic tendency
for matter to transfer, mix, react, or redistribute between phases.

This page treats macroscopic equilibrium states of a simple compressible,
multicomponent system with only pressure-volume work. Unless stated otherwise,
temperature `T`, pressure `p`, and the amounts `n_j` of every component other
than `i` are held fixed. Amount is measured in moles (`mol`), extensive
properties such as `G` in joules (`J`), and partial molar properties such as
`mu_i` in `J mol^-1`.

## Read a partial molar property as a marginal change

Let `Y` be an extensive property such as volume `V`, enthalpy `H`, entropy `S`,
or Gibbs energy `G`. Its partial molar value for component `i` is

`bar(Y)_i = (partial Y/partial n_i)_(T,p,{n_j != i})`.

The bar identifies a partial molar quantity. This derivative asks: near the
specified composition, how much does total `Y` change per infinitesimal mole of
`i` added while `T`, `p`, and every other component amount remain fixed? It is
local to that state and can change with composition. It need not equal the
pure-component molar value or an average property
([IUPAC Gold Book, “partial molar quantity”](https://goldbook.iupac.org/terms/view/P04418);
Chang and Oates, 2010, Ch. 5, §5.2, pp. 68–72).

At fixed `T` and `p`, the total differential is

`dY = sum_i bar(Y)_i dn_i`.

The phrase “hold the other amounts fixed” is essential. Adding component `i`
while removing component `j`, or changing `T` or `p`, describes a different
direction in state space and therefore a different derivative.

### Audit a constructed binary model

Consider a hypothetical binary phase at fixed `T,p` whose total volume is

`V = (10.0 cm^3 mol^-1)n_A + (14.0 cm^3 mol^-1)n_B`

`    + (4.00 cm^3 mol^-1)n_A n_B/(n_A + n_B)`.

This model is independently constructed for illustration. Every term has units
of volume, and scaling both amounts by the same factor scales `V` by that
factor. Differentiation while holding the other amount fixed gives

`bar(V)_A = 10.0 + 4.00[n_B/(n_A + n_B)]^2 cm^3 mol^-1`,

`bar(V)_B = 14.0 + 4.00[n_A/(n_A + n_B)]^2 cm^3 mol^-1`.

At `n_A = 2.00 mol` and `n_B = 3.00 mol`,

`bar(V)_A = 11.44 cm^3 mol^-1`,

`bar(V)_B = 14.64 cm^3 mol^-1`.

The direct model gives `V = 66.80 cm^3`. The partial molar values close the
same total:

`n_A bar(V)_A + n_B bar(V)_B`

`= (2.00 mol)(11.44 cm^3 mol^-1)`

`  + (3.00 mol)(14.64 cm^3 mol^-1) = 66.80 cm^3`.

This check distinguishes a derivative from a simple quotient. For example,
`V/n_A = 33.40 cm^3 mol^-1` here, which is not `bar(V)_A` because the numerator
contains the contribution of both components.

## Identify chemical potential with partial molar Gibbs energy

For `G = G(T,p,{n_i})`,

`mu_i = bar(G)_i = (partial G/partial n_i)_(T,p,{n_j != i})`.

Thus `mu_i` is an intensive marginal Gibbs energy, not the total Gibbs energy
assigned to one mole already present
([IUPAC Gold Book, “chemical potential”](https://goldbook.iupac.org/terms/view/C01032);
Chang and Oates, 2010, Ch. 5, §5.2, pp. 69–70).

For a pure, homogeneous substance, `G/n` equals its molar Gibbs energy and its
chemical potential. In a mixture, however, `G/n_i` generally divides the Gibbs
energy of **all** components by the amount of only component `i`. It is neither
an average mixture molar Gibbs energy, `G/sum_i n_i`, nor the derivative that
defines `mu_i`. Only a special coincidence could make `G/n_i = mu_i`.

## Use extensivity to obtain Euler and Gibbs–Duhem relations

Assume a macroscopic homogeneous phase whose Gibbs energy is differentiable
and first-degree homogeneous in all component amounts at fixed `T,p`:

`G(T,p,{lambda n_i}) = lambda G(T,p,{n_i})` for `lambda > 0`.

Euler's theorem then gives

`G = sum_i n_i mu_i`.

This relation reconstructs the total from partial molar values at one
composition; it does not turn any one `mu_i` into `G/n_i`. Differentiating it,

`dG = sum_i n_i dmu_i + sum_i mu_i dn_i`.

For the same simple compressible equilibrium model, the Gibbs differential is

`dG = -S dT + V dp + sum_i mu_i dn_i`.

Comparison yields the Gibbs–Duhem relation

`S dT - V dp + sum_i n_i dmu_i = 0`,

or, equivalently,

`sum_i n_i dmu_i = -S dT + V dp`.

This sign pattern follows directly by subtracting the Gibbs differential from
the differentiated Euler relation; it also gives the pure-substance limit
`dmu = -S_m dT + V_m dp`
([Chemistry LibreTexts, “The Gibbs-Duhem Equation”](https://chem.libretexts.org/Courses/Millersville_University/CHEM_341-_Physical_Chemistry_I/07:_Mixtures_and_Solutions/7.04:_The_Gibbs-Duhem_Equation)).

At constant `T,p`,

`sum_i n_i dmu_i = 0`.

The component chemical potentials in one phase therefore cannot vary
independently. For a binary phase this becomes
`x_A dmu_A + x_B dmu_B = 0`, where
`x_i = n_i/(sum_j n_j)` is the mole fraction and `sum_i x_i = 1`
(Chang and Oates, 2010, Ch. 5, §5.2.2, pp. 72–73).

The assumptions matter. Surface and interfacial contributions, small-system
nonextensivity, elastic or electrical work, gradients, and driven
nonequilibrium states may require added variables or a different framework.
The equations above apply to the specified homogeneous extensive-system model,
not automatically to every piece of matter called a “phase.”

## Express chemical potential on an activity scale

The **standard chemical potential** `mu_i°` is the value assigned under a
specified standard-state convention. The dimensionless **activity** `a_i`
locates the actual state relative to that convention:

`mu_i = mu_i° + RT ln a_i`.

Here `R` is the molar gas constant, `T` is thermodynamic temperature, and `ln`
is the natural logarithm. Activity must be dimensionless because it appears
inside a logarithm. IUPAC equivalently defines
`a_i = exp[(mu_i - mu_i°)/(RT)]`; the definition of `mu_i°` depends on the
chosen standard state
([IUPAC Gold Book, “activity”](https://goldbook.iupac.org/terms/view/A00115)
and [“standard chemical potential”](https://goldbook.iupac.org/terms/view/S05908)).

Changing the standard-state convention changes the numerical pair `mu_i°` and
`a_i`, but not the combined value `mu_i° + RT ln a_i = mu_i` for the same
physical state. Activities and activity coefficients are therefore meaningless
without their reference-state definitions.

### Audit an activity calculation

Suppose a component at `T = 1000 K` has `a_i = 0.200` on a stated standard-state
scale. With `R = 8.314 J mol^-1 K^-1`,

`mu_i - mu_i° = RT ln a_i`

`= (8.314 J mol^-1 K^-1)(1000 K)ln(0.200)`

`= -1.338 × 10^4 J mol^-1 = -13.38 kJ mol^-1`.

The kelvin units cancel and the logarithm acts on a dimensionless number. The
negative result means that this state's chemical potential lies below the
chosen standard chemical potential; it is not an absolute stability ranking
against states defined on another reference scale.

## Separate ideal limits from activity-coefficient corrections

For an ideal-gas mixture, the activity of component `i` is

`a_i = p_i/p°`,

where `p_i = x_i p` is its partial pressure and `p°` is the specified standard
pressure. Both pressures must use the same unit, so their ratio is
dimensionless. For a real gas, **fugacity** `f_i` is an effective-pressure
quantity introduced so that the chemical-potential equation keeps the same
form:

`a_i = f_i/f_i°`,

`mu_i = mu_i° + RT ln(f_i/f_i°)`.

In the ideal-gas limit, the fugacity ratio reduces to the corresponding
pressure ratio. Fugacity is used here only to clarify gas activity; it is not a
new force or a kinetic escape tendency
([IUPAC Gold Book, “fugacity”](https://goldbook.iupac.org/terms/view/F02543);
Chang and Oates, 2010, Ch. 5, §§5.3.2–5.3.3, pp. 74–75).

For a Raoult-standard ideal condensed solution,

`a_i = x_i` and `mu_i = mu_i° + RT ln x_i`.

A real solution is commonly represented on the same scale by

`a_i = gamma_i x_i`,

where the dimensionless activity coefficient `gamma_i` measures departure
from that defined ideal behavior. Thus

`mu_i = mu_i° + RT ln x_i + RT ln gamma_i`.

The ideal limit is `gamma_i -> 1` on that scale. Other concentration scales and
dilute-solution standard states use corresponding activity coefficients and
limiting conventions; one must not transfer a `gamma_i` value between them
without conversion
([IUPAC Gold Book, “activity coefficient”](https://goldbook.iupac.org/terms/view/A00116);
Chang and Oates, 2010, Ch. 6, §§6.1–6.1.2, pp. 79–84).

In the numerical audit above, if the Raoult scale applies and `x_i = 0.125`,
then `gamma_i = a_i/x_i = 1.60`. Setting `gamma_i = 1` would instead give
`a_i = 0.125`; it would be an ideal-solution approximation, not a definition of
the real mixture.

## State phase equilibrium component by component

Suppose phases `alpha` and `beta` have the same `T` and `p`, component `i` may
transfer between them, and no membrane, electric field, reaction constraint,
or other omitted work term changes the criterion. Moving an infinitesimal
amount `dn_i` from `alpha` to `beta` changes total Gibbs energy by

`dG = (mu_i^beta - mu_i^alpha)dn_i`.

If `mu_i^beta < mu_i^alpha`, transfer toward `beta` lowers `G`; if the inequality
is reversed, the opposite direction lowers `G`. Equilibrium with respect to
that allowed transfer requires

`mu_i^alpha = mu_i^beta`.

The equality applies to each mobile component across the specified equilibrium
phases. Equality for one component does not prove complete equilibrium, and
charged species in an electric field require electrochemical rather than bare
chemical potentials
(Chang and Oates, 2010, Ch. 6, §§6.2–6.2.1, pp. 85–89).

Chemical potential difference is a **thermodynamic driving force**: it selects
a favorable transfer direction under the stated constraints. It does not give
a rate. Diffusion coefficients, interfacial transfer, nucleation barriers, and
reaction mechanisms determine how quickly the system responds; a metastable
state may persist even when a lower-`G` state exists.

## Audit a chemical-potential argument

1. State the system, phases, `T`, `p`, composition, and allowed transfers.
2. Name every held-fixed variable in a partial derivative.
3. Check whether homogeneous first-degree extensivity is justified before
   using Euler or Gibbs–Duhem relations.
4. Specify the standard state and confirm that every activity or fugacity ratio
   is dimensionless.
5. Identify the ideal model and concentration scale before setting
   `gamma_i = 1` or writing `a_i = x_i`.
6. Compare chemical potentials only on consistent reference scales.
7. Separate a thermodynamic direction or equilibrium criterion from kinetic
   evidence about rate and timescale.

## Related notes

- [Thermodynamic Systems, Laws, and Potentials](thermodynamic-systems-laws-potentials.md)
- [Diffusion and Transport in Solids](diffusion-and-transport-in-solids.md)
- [Chemical Equilibrium, Acids and Bases, and Solubility](chemical-equilibrium-acids-bases-solubility.md)
- [Chemical Kinetics and Reaction Mechanisms](chemical-kinetics-reaction-mechanisms.md)

## References

- Chang, Y. A., and Oates, W. A. (2010). *Materials Thermodynamics*, Ch. 5,
  §§5.1–5.3, pp. 67–75, and Ch. 6, §§6.1–6.2.1, pp. 79–89.
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “chemical potential,”
  “partial molar quantity,” “activity,” “activity coefficient,” “standard
  chemical potential,” and “fugacity.”
  <https://goldbook.iupac.org/terms/view/C01032>
  <https://goldbook.iupac.org/terms/view/P04418>
  <https://goldbook.iupac.org/terms/view/A00115>
  <https://goldbook.iupac.org/terms/view/A00116>
  <https://goldbook.iupac.org/terms/view/S05908>
  <https://goldbook.iupac.org/terms/view/F02543>
