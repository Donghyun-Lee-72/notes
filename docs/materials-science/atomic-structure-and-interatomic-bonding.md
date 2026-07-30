# Atomic Structure and Interatomic Bonding in Materials

Interatomic bonding is the stabilization represented when the total potential
energy of an assembly of atoms is lower at finite separation than for the
chosen separated-atom reference. In the pair model below, `U(r)` represents
that potential energy as a function of separation; no particular electronic-
structure approximation is assumed. Bonding constrains which local arrangements
are favorable and how a material responds when those arrangements are
disturbed. The prerequisite
[Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
explains electron configurations and atomic trends; here the focus is the
interaction between atoms and its consequences for materials.

Bond labels are models of electron-density distribution, not permanent tags
attached to whole classes of materials. Ionic, covalent, metallic, and
secondary-interaction descriptions identify useful limiting behavior. A real
solid may combine them, and its measured properties also depend on structure,
defects, phases, microstructure, processing, environment, temperature, time
scale, and test direction.

## Find equilibrium from competing interactions

Consider a model potential energy `U(r)` for two atoms whose nuclei are
separated by `r`. Set `U(∞) = 0`. At intermediate separation, attraction can
lower the energy below zero. At very short separation, overlap of occupied
electron states and electrostatic interactions produce a steep repulsive
contribution. The sum has a minimum at the equilibrium separation `r_0`
(Callister and Rethwisch, 2015, §2.5, pp. 28–30).

Using a radial sign convention in which positive force increases `r`,

`F(r) = -dU/dr`

Therefore:

- at `r = r_0`, `dU/dr = 0` and the net radial force is zero;
- at `r > r_0`, a usual bonding well has `dU/dr > 0`, so `F < 0` pulls the
  atoms toward smaller separation;
- at `r < r_0`, `dU/dr < 0`, so `F > 0` pushes them toward larger separation.

The **bond energy** in this model is the well depth
`E_b = U(∞) - U(r_0) = -U(r_0) > 0`: the energy required to take the modeled
pair from its minimum to infinite separation. A different zero of energy
changes the numerical value of `U` everywhere but not `F`, `r_0`, or `E_b`.

Near a stable minimum, a Taylor expansion gives

`U(r) ≈ U(r_0) + (1/2)k_r(r - r_0)^2`,

where `k_r = d^2U/dr^2 |_(r_0) > 0`. A larger local curvature means a larger
restoring force for the same small change in this bond coordinate, so it is a
qualitative indicator of local bond stiffness. It is **not** a bulk modulus.
A bulk modulus describes the energy or pressure response of a many-atom body
to volumetric strain; coordination, bond angles, crystal symmetry, many-body
interactions, defects, phases, porosity, and temperature all intervene.

### Sign-and-unit audit for an illustrative pair potential

This independently constructed example uses

`U(r) = ε[(r_0/r)^12 - 2(r_0/r)^6]`,

with illustrative parameters `ε = 1.00 eV` and `r_0 = 0.300 nm`. These are
model choices, not data for a named material.

| Check | Result | Interpretation |
| --- | --- | --- |
| Dimensions | Ratios `(r_0/r)` are dimensionless; `U` has units of eV. | The expression is dimensionally consistent. |
| Force | `F(r) = (12ε/r_0)[(r_0/r)^13 - (r_0/r)^7]` | `ε/r_0` has units eV/nm, an energy per length and therefore a force. |
| Equilibrium | `U(r_0) = -ε` and `F(r_0) = 0` | The well depth is `E_b = ε = 1.00 eV` for this pair model. |
| Stability | `d^2U/dr^2 |_(r_0) = 72ε/r_0^2 = 800 eV/nm^2` | Positive curvature confirms a local minimum; the value is a radial pair stiffness, not a modulus. |
| Stretched pair | At `r > r_0`, `(r_0/r)^13 < (r_0/r)^7`, hence `F < 0`. | The force points toward smaller `r`, as attraction requires. |
| Compressed pair | At `r < r_0`, the thirteenth-power term dominates, hence `F > 0`. | The force points toward larger `r`, as repulsion requires. |

This form is useful for checking reasoning because its derivatives are simple.
It is not asserted to be an accurate potential for ionic, covalent, metallic,
or molecular solids. Even a pair potential fitted to one configuration may
miss changes in coordination or electronic structure.

## Use primary-bond models without making pure categories

**Primary bonding** denotes the interactions that usually provide the main
cohesion within an ionic lattice, covalent network, or metal. The three models
emphasize different electron distributions (Callister and Rethwisch, 2015,
§2.6, pp. 30–37).

| Limiting model | Electronic picture | Directionality | Electrical consequence to test |
| --- | --- | --- | --- |
| Ionic | Oppositely charged ions are stabilized by electrostatic attraction, together with short-range repulsion. | The attraction is nondirectional; an ion's nearest neighbors have opposite charge. | Ionic solids are generally electrical insulators. |
| Covalent | Adjacent atoms share electron density concentrated along particular directions between their nuclei. | The bond is directional between the atoms that share electrons. | Covalently bonded materials usually impede electrical current, although semiconducting cases occur. |
| Metallic | Valence electrons are delocalized over many atomic cores rather than assigned to one pair. | The bonding is nondirectional. | Metals are generally good electrical conductors because their valence electrons can move through the metal. |

OpenStax likewise describes ionic attraction between opposite charges,
covalent bonding through shared electron density, and metallic solids through
delocalized electrons, while showing that crystalline-solid categories have
important variations and exceptions
([OpenStax, *Chemistry 2e*, §§7.1–7.2](https://openstax.org/books/chemistry-2e/pages/7-1-ionic-bonding);
[§10.5](https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter)).

“Metal,” “ceramic,” “polymer,” and “semiconductor” are not synonyms for single
pure bond types.

## Keep secondary interactions distinct

**Secondary interactions** act between atoms or molecular units without
forming the primary ionic, covalent, or metallic framework. They include:

- **London dispersion:** correlated instantaneous fluctuations in electron
  density produce attraction; it occurs between all atoms and molecules.
- **Dipole–dipole interaction:** permanent molecular dipoles favor
  orientations that bring opposite partial charges together.
- **Dipole-induced-dipole interaction:** a permanent dipole polarizes a
  neighboring species.
- **Hydrogen bonding:** a particularly strong and directional dipolar
  interaction involving an H atom covalently bonded to a strongly
  electronegative atom and an electron-rich site on another molecular unit.

These are intermolecular or inter-unit attractions, not extra primary
covalent bonds. Their individual energy scale is often smaller than that of a
primary bond, yet they can substantially affect the physical properties of
molecular materials. Dispersion is not absent from polar substances, and
hydrogen bonding does not replace the covalent bond within an O–H or N–H group
(Callister and Rethwisch, 2015, §2.7, pp. 37–40;
[OpenStax, §10.1](https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces)).

## Translate bonding into qualified property trends

Bonding constrains properties through an arrangement of many atoms, not by a
one-label lookup.

- **Coordination and structure:** nondirectional interactions often permit
  more neighbors, whereas directional covalent interactions restrict favorable
  angles. Ionic size and charge balance, molecular shape, pressure, and
  competing phases can overturn that tendency.
- **Elastic response:** deeper, more sharply curved energy wells often
  correspond qualitatively to stronger local restoring forces. Bulk elastic
  properties require a many-atom structural model and cannot be read directly
  from one pair-energy curve.
- **Thermal expansion:** the shape of a bonding-energy well is qualitatively
  related to thermal expansion. A pair curve alone does not supply a bulk
  thermal-expansion coefficient.
- **Melting and softening:** stronger cohesive interactions often raise the
  temperature needed for disordering. Melting is collective, however;
  entropy, crystal structure, molecular architecture, pressure, decomposition,
  and whether the solid is crystalline or amorphous matter
  ([OpenStax, §10.5](https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter)).
- **Electrical behavior:** mobile, delocalized electrons favor electronic
  conduction, whereas localized electrons do not. Mobile ions may carry
  current in an ionic material when they are able to move.
- **Brittle or ductile tendency:** directional networks or charge-alternating
  lattices often resist shape change, whereas nondirectional metallic bonding
  is consistent with the common ductility of metals. These are broad
  tendencies, not predictions of fracture or plastic deformation for a
  particular material.

These links belong inside the broader
[processing–structure–properties–performance
framework](materials-science-engineering-framework.md). Diffraction can
provide structural evidence about atomic arrangement and disorder. As
editorial guidance, that evidence may constrain a bonding interpretation, but
it does not by itself uniquely determine a bond model; the linked note explains
the structural measurement rather than establishing a universal rule about
bonding
([Crystal Diffraction, Reciprocal Space, and
Disorder](crystal-diffraction-reciprocal-space.md)).

## Limit the model before using it

- A two-atom curve suppresses the other neighbors and cannot by itself predict
  a real bulk modulus, melting point, thermal-expansion coefficient, fracture
  mode, or conductivity.
- `r_0` is the minimum of a stated model coordinate. It need not equal every
  measured neighbor distance in a vibrating, stressed, defective, or
  multi-component solid.
- Bond energy is not the same as activation energy, lattice energy, cohesive
  energy per atom, or bond-dissociation enthalpy under specified chemical
  conditions.
- Directional does not mean rigid, and nondirectional does not mean weak.
- Secondary does not mean negligible. A large population of weaker contacts
  can control a bulk response.
- A bond label does not establish oxidation state, partial charge, or a unique
  electron-density partition. Those quantities depend on the model and
  measurement or calculation used.

## Related notes

- [Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)
- [Crystal Diffraction, Reciprocal Space, and Disorder](crystal-diffraction-reciprocal-space.md)
- [Materials Science & Chemistry](index.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Chapter 2, §§2.5–2.8, pp. 28–42.
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, Unit II,
  “Chemical Bonding & Structure.” Used to check prerequisite order and
  first-year depth.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
- OpenStax. *Chemistry 2e*, §§7.1–7.2 and 10.1, 10.5.
  <https://openstax.org/books/chemistry-2e/pages/7-1-ionic-bonding>
  <https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding>
  <https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces>
  <https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter>
