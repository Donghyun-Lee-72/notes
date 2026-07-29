# Electrochemical Cells, Potentials, and Applications

An **electrochemical cell** separates oxidation from reduction so that
electrons travel through an external electronic conductor while ions carry
charge through an electrolyte. This separation lets a spontaneous reaction
deliver electrical energy, or lets an external power supply drive a
nonspontaneous reaction. The same framework explains batteries, fuel cells,
electrolysis, and much aqueous corrosion
([IUPAC Gold Book, “electrochemical cell”](https://goldbook.iupac.org/terms/view/09058);
[OpenStax, *Chemistry 2e*, §17.2](https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells)).

This page treats cell potentials as thermodynamic quantities. Unless stated
otherwise, a calculation assumes reversible behavior, negligible liquid
junction potential, and no current large enough to create kinetic or resistive
losses. A real device under load need not deliver its equilibrium potential.

## Name electrodes by reaction, not by sign

Two definitions survive every operating mode:

- Assign the name **anode** to the electrode that hosts **oxidation**.
- Assign the name **cathode** to the electrode that hosts **reduction**
  ([IUPAC Gold Book, “anode”](https://goldbook.iupac.org/terms/view/A00370);
  [“cathode”](https://goldbook.iupac.org/terms/view/C00905)).

Electrode signs depend on what drives the cell:

| Operating mode | Energy conversion | Anode | Cathode |
| --- | --- | --- | --- |
| Galvanic (voltaic) | spontaneous chemical change → electrical energy | negative | positive |
| Electrolytic | electrical energy → driven chemical change | positive | negative |

In a galvanic cell, oxidation releases electrons at the anode, so that
electrode is the electron source and is negative relative to the cathode. In
an electrolytic cell, the power supply removes electrons from the anode and
delivers them to the cathode; the signs therefore reverse
([IUPAC Gold Book, “electrochemical cell”](https://goldbook.iupac.org/terms/view/09058);
[“electrolytic cell”](https://goldbook.iupac.org/terms/view/09062);
[OpenStax, §17.7](https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis)).

**The anode is not always negative.** “Anode = oxidation” and “cathode =
reduction” are the dependable rules. In rechargeable-battery practice,
manufacturers may keep the names *anode* and *cathode* assigned according to
discharge even while charging. Reaction-based analysis instead renames the
electrodes when the reactions reverse, so always state the operating mode.

## Follow both charge paths

During operation, electrons move through the external circuit from the
oxidation site, the anode, toward the reduction site, the cathode.
Conventional electric current points in the opposite direction. Electrons do
not normally cross the bulk electrolyte; ions move there and prevent
persistent charge separation.

In a common two-compartment cell, oxidation produces excess positive charge in
the anode compartment and reduction removes positive charge from the cathode
compartment. Anions from a salt bridge therefore migrate toward the anode
side, while cations migrate toward the cathode side. This is a charge-balance
description, not a universal list of reacting ions: a particular half-reaction
may instead consume or generate other ionic species. A porous separator or
salt bridge must permit ionic transport while limiting direct mixing and
electronic short circuit
([OpenStax, *Chemistry 2e*, §17.2](https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells)).

## Read cell notation from anode to cathode

For a galvanic reaction written in its spontaneous direction, conventional
cell notation places the anode half-cell on the left and the cathode half-cell
on the right:

- `|` marks an interface between phases.
- `||` marks the separator or salt bridge between half-cells.
- A comma separates species in the same phase.
- An inert conductor such as `Pt(s)` is included when no reacting species is
  an electronically conducting solid
  ([OpenStax, §17.2](https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells)).

Consider this independently constructed zinc–nickel cell:

`Zn(s) | Zn^2+(aq) || Ni^2+(aq) | Ni(s)`

Its half-reactions and net reaction are

`anode, oxidation: Zn(s) → Zn^2+(aq) + 2 e^-`

`cathode, reduction: Ni^2+(aq) + 2 e^- → Ni(s)`

`cell: Zn(s) + Ni^2+(aq) → Zn^2+(aq) + Ni(s)`

The audit is direct: one Zn and one Ni occur on each side; both half-reactions
transfer two electrons; the oxidation products have net charge zero
(`+2 - 2 = 0`); and the reduction reactants have net charge zero
(`+2 - 2 = 0`). The electrons cancel from the net equation. When the cell runs
galvanically as written, zinc is the negative anode and nickel is the positive
cathode.

## Obtain a cell potential from reduction potentials

An isolated half-cell potential cannot be measured; only a potential
difference between two electrodes can. Standard electrode potentials are
reported relative to the standard hydrogen electrode, assigned `0 V`, and are
conventionally tabulated for half-reactions written as reductions
([IUPAC Gold Book, “standard electrode potential”](https://goldbook.iupac.org/terms/view/S05912);
[OpenStax, §17.3](https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials)).

For both tabulated entries written as reductions,

`E°_cell = E°_cathode - E°_anode`

At `298.15 K`, OpenStax lists
`E°(Ni^2+/Ni) = -0.257 V` and
`E°(Zn^2+/Zn) = -0.7618 V`. Therefore,

`E°_cell = (-0.257 V) - (-0.7618 V) = +0.5048 V ≈ +0.505 V`

The positive result predicts that the displayed net reaction is
thermodynamically favored under the stated standard conditions. Reversing the
cell reaction changes the sign of `E°_cell`. Multiplying a half-reaction to
balance electrons does **not** multiply its potential: potential is energy per
charge, not an extensive reaction amount
([OpenStax, *Chemistry 2e*, §17.3](https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials)).

Here, the standard symbol means that each species is in its chosen standard
state: solute activities are `1`, gas activities are referenced to a standard
pressure of `1 bar`, and pure solids and pure liquids have activity `1`.
Temperature is not fixed by the degree symbol, so `298.15 K` is stated
separately. Introductory tables often approximate unit solute activity by
`1 mol L^-1` and ideal-gas activity by `p/(1 bar)`
([IUPAC Gold Book, “activity”](https://goldbook.iupac.org/terms/view/A00115);
[OpenStax, §17.3](https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials)).

## Connect potential, Gibbs energy, and equilibrium

For a balanced cell reaction in a specified direction,

`Δ_rG = -n F E_cell`

and, under standard conditions,

`Δ_rG° = -n F E°_cell = -R T ln K`

so

`E°_cell = (R T / n F) ln K`

Here `n` is the number of moles of electrons transferred per mole of the
balanced reaction as written, `F` is the Faraday constant
(`9.6485 × 10^4 C mol^-1`), `R` is the molar gas constant, `T` is absolute
temperature, and `K` is the dimensionless thermodynamic equilibrium constant
for that balanced reaction at the same temperature and standard-state
convention. Since `1 V = 1 J C^-1`, the units in `nFE` reduce to energy per
mole of reaction
([IUPAC Gold Book, “affinity of reaction”](https://goldbook.iupac.org/terms/view/A00178)
and [“Faraday constant”](https://goldbook.iupac.org/terms/view/F02325);
[OpenStax, §17.4](https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium)).

For the zinc–nickel reaction, `n = 2`. Using the displayed
`E°_cell = 0.5048 V` estimate from the tabulated electrode values,

`Δ_rG° = -(2 mol e^- mol^-1 reaction)(96485 C mol^-1 e^-)(0.5048 J C^-1)`

`Δ_rG° = -9.741 × 10^4 J mol^-1 = -97.4 kJ mol^-1`

At `T = 298.15 K`, with `R = 8.314 J mol^-1 K^-1`,

`ln K = n F E°_cell/(R T) = 39.2974... ≈ 39.30`

`K = e^(39.2974...) ≈ e^39.30 = 1.17 × 10^17`

Thus, for the reaction direction written, `E°_cell > 0`, `Δ_rG° < 0`, and
`K > 1` give the same thermodynamic conclusion. At equilibrium under the
actual conditions, `Δ_rG = 0`, `E_cell = 0`, and `Q = K`. None of these
relations supplies a reaction rate, current, power, or storage capacity
([OpenStax, *Chemistry 2e*, §17.4](https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium)).

## Adjust composition with the Nernst equation

Away from standard composition, the reaction quotient `Q` changes the
equilibrium cell potential:

`E_cell = E°_cell - (R T / n F) ln Q`

At exactly `298.15 K`, this may be written with a base-10 logarithm as

`E_cell = E°_cell - (0.05916 V / n) log10 Q`

`Q` must be dimensionless and must match the balanced reaction direction.
It is built from activities raised to their stoichiometric powers; pure
solids and pure liquids are omitted because their activities are `1`
([IUPAC Gold Book, “activity”](https://goldbook.iupac.org/terms/view/A00115);
[OpenStax, §17.4](https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium)).

For the zinc–nickel cell,

`Q = a(Zn^2+)/a(Ni^2+)`

Suppose `a(Zn^2+) = 0.0500` and `a(Ni^2+) = 0.500` at `298.15 K`. Then
`Q = 0.100`, `log10 Q = -1.000`, and

`E_cell = 0.5048 V - (0.05916 V/2)(-1.000) = 0.5344 V`

The result is larger than `E°_cell` because this composition contains
relatively more reactant ion than product ion for the reaction as written.
For a dilute solution treated as ideal, one may approximate
`a_i ≈ c_i/c°`, where `c° = 1 mol L^-1`; writing bare concentrations inside
the logarithm silently means these dimensionless ratios. At appreciable ionic
strength, activity coefficients are needed. Under current, activation and
concentration overpotentials, ohmic drop, mass transport, and temperature
gradients can make terminal voltage differ from this reversible prediction.

## Convert reactions into useful devices

### Batteries and fuel cells

A **battery** packages one or more galvanic cells with reactants available
inside the device. A primary battery is intended mainly for discharge. A
secondary battery is designed so that an external source can drive the
discharge chemistry backward within a specified operating window. Charging
therefore uses electrolytic operation and reverses the reaction-based
anode/cathode roles.

A **fuel cell** is also galvanic while producing power, but its reactants are
supplied and products removed during operation rather than relying only on a
sealed initial inventory. Cell potential describes energy per charge; useful
energy, capacity, power, cycle life, and efficiency also depend on reactant
amount, kinetics, transport, construction, and operating conditions
([OpenStax, *Chemistry 2e*, §17.5](https://openstax.org/books/chemistry-2e/pages/17-5-batteries-and-fuel-cells)).

### Electrolysis and Faraday's law

Electrolysis uses an external potential to drive a nonspontaneous cell
reaction. The source must oppose the spontaneous direction, and a working
cell generally requires additional applied potential to overcome kinetic and
resistive losses. Charge passed by a constant current is

`q = I t`

and the corresponding amount of electrons is

`n(e^-) = q/F = I t/F`

If one mole of product requires `z` moles of electrons, the ideal product
amount is

`n(product) = I t/(z F)`

For an independently chosen copper-deposition example,

`Cu^2+(aq) + 2 e^- → Cu(s)`

A current of `1.80 A = 1.80 C s^-1` for
`25.0 min × 60 s min^-1 = 1.50 × 10^3 s` transfers

`q = (1.80 C s^-1)(1500 s) = 2.70 × 10^3 C`

`n(e^-) = 2700 C/(96485 C mol^-1) = 2.80 × 10^-2 mol e^-`

`n(Cu) = (2.80 × 10^-2 mol e^-)/(2 mol e^- mol^-1 Cu)`

`n(Cu) = 1.40 × 10^-2 mol`

The first result is the amount of electrons passed; the second is the
theoretical amount of copper deposited if all measured charge follows the
copper half-reaction. Charge diverted to another electrode process would make
the copper amount smaller
([OpenStax, *Chemistry 2e*, §17.7](https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis)).

## Treat corrosion as a distributed cell

In much aqueous metallic corrosion, different surface regions act as local
anodes and cathodes. At an anodic iron site,

`Fe(s) → Fe^2+(aq) + 2 e^-`

while a possible cathodic reaction in aerated neutral or basic water is

`O2(g) + 2 H2O(l) + 4 e^- → 4 OH^-(aq)`

(Callister and Rethwisch, 5th ed., Chapter 16, §16.2, p. 713).

Doubling the iron half-reaction gives the charge-balanced initial net process

`2 Fe(s) + O2(g) + 2 H2O(l) → 2 Fe^2+(aq) + 4 OH^-(aq)`

Electrons move through the metal from anodic to cathodic regions; ions move
through the surface electrolyte. Later precipitation and oxidation reactions
produce corrosion products whose composition and protection vary with the
environment. A favorable cell potential identifies a possible direction, not
a corrosion rate or service lifetime
([OpenStax, *Chemistry 2e*, §17.6](https://openstax.org/books/chemistry-2e/pages/17-6-corrosion)).

**Passivation** occurs when a surface film greatly reduces further reaction.
Such a film can explain why a thermodynamically reactive metal corrodes
slowly, but protection depends on the material, film integrity, potential,
and environment; “passive” does not mean immune to every form of attack
([OpenStax, §17.6](https://openstax.org/books/chemistry-2e/pages/17-6-corrosion);
Callister and Rethwisch, 5th ed., Chapter 16, §16.5, p. 727).

**Cathodic protection** supplies electrons to the structure so that it acts as
a cathode rather than the site of metal oxidation. A more readily oxidized
sacrificial anode can supply those electrons. The sacrificial component is the
anode and is intentionally consumed
([OpenStax, §17.6](https://openstax.org/books/chemistry-2e/pages/17-6-corrosion);
Callister and Rethwisch, 5th ed., Chapter 16, §16.9, p. 738).
In impressed-current protection, an external DC source drives the electron supply
(Callister and Rethwisch, 5th ed., Chapter 16, §16.9, p. 738).
Selecting a protection system requires the actual environment, coating
condition, geometry, current distribution, and inspection plan; a
standard-potential table alone is not a design method.

## Audit conclusions before trusting them

- Identify oxidation and reduction first; assign anode and cathode second;
  assign signs only after naming the operating mode.
- Balance atoms and charge, and use the cancelled electron count as `n`.
- Subtract tabulated reduction potentials; never scale a potential with a
  half-reaction coefficient.
- Build `Q` from the balanced reaction, omit pure condensed phases, and never
  take a logarithm of a quantity carrying units.
- Separate open-circuit thermodynamic potential from voltage under load, rate,
  capacity, efficiency, and durability.

## Safety and scope boundary

This note is not an experimental procedure. Batteries and electrolysis cells
can combine large current with caustic electrolytes, toxic metals, or hazardous
gases. Never create an intentional battery short circuit
([FAA, “PackSafe: Lithium Batteries”](https://www.faa.gov/hazmat/packsafe/lithium-batteries)).
Do not open or disassemble a sealed battery cell outside
manufacturer-approved service instructions. This note does not provide a
charging or service procedure; follow the instructions for the specific
device and battery
([US EPA, “Used Household Batteries”](https://www.epa.gov/recycle/used-household-batteries)).
Disposal rules depend on battery chemistry and jurisdiction: identify the
chemistry, follow the manufacturer's instructions and local collection or
recycling rules, and do not place a battery in household trash where those
rules prohibit it
([US EPA, “Used Household Batteries”](https://www.epa.gov/recycle/used-household-batteries)).
Electrolysis products can depend on competing electrode reactions and on
whether the cell keeps products in separate compartments. Identify the
intended half-reactions and cell arrangement before interpreting the result
([OpenStax, *Chemistry 2e*, §17.7](https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis)).
Corrosion-control decisions for infrastructure require environment-specific
measurements, applicable codes, inspection, and qualified engineering review.

## Related notes

- [Redox Foundations and Half-Reaction Balancing](redox-foundations-half-reaction-balancing.md)
- [Thermochemistry, Entropy, and Gibbs Energy](thermochemistry-entropy-gibbs-energy.md)
- [Chemical Equilibrium, Acids and Bases, and Solubility](chemical-equilibrium-acids-bases-solubility.md)
- [Chemical Kinetics and Reaction Mechanisms](chemical-kinetics-reaction-mechanisms.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Chapter 16, §16.2, p. 713; §16.5, p. 727; and §16.9,
  pp. 737–738.
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., “activity”, “anode”, “cathode”,
  “electrochemical cell”, “electrolytic cell”, “Faraday constant”, and
  “standard electrode potential”, plus “affinity of reaction” for the reaction
  Gibbs-energy convention.
  <https://goldbook.iupac.org/terms/view/A00178>
  <https://goldbook.iupac.org/terms/view/A00115>
  <https://goldbook.iupac.org/terms/view/A00370>
  <https://goldbook.iupac.org/terms/view/C00905>
  <https://goldbook.iupac.org/terms/view/09058>
  <https://goldbook.iupac.org/terms/view/09062>
  <https://goldbook.iupac.org/terms/view/F02325>
  <https://goldbook.iupac.org/terms/view/S05912>
- OpenStax. *Chemistry 2e*, Chapter 17, §§17.2–17.7.
  <https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells>
  <https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials>
  <https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium>
  <https://openstax.org/books/chemistry-2e/pages/17-5-batteries-and-fuel-cells>
  <https://openstax.org/books/chemistry-2e/pages/17-6-corrosion>
  <https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis>
- Federal Aviation Administration. “PackSafe: Lithium Batteries.”
  <https://www.faa.gov/hazmat/packsafe/lithium-batteries>
- US Environmental Protection Agency. “Used Household Batteries.”
  <https://www.epa.gov/recycle/used-household-batteries>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, Lecture 25,
  “Oxidation-Reduction and Electrochemical Cells”, in the resource index. Used
  to check first-year depth and the thermodynamics/equilibrium prerequisites.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/lecture-25-oxidation-reduction-and-electrochemical-cells/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
