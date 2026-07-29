# Atomic Structure and Periodic Trends

Atomic structure describes how protons and neutrons form a nucleus and how
electrons occupy quantized states around it. **Periodic trends** are broad,
recurring changes in atomic properties as proton count and electron
configuration change across the periodic table. Together they explain why
elements in the same column often behave similarly and provide the electronic
starting point for bonding. For materials, this is a constraint on possible
bonding and response—not a direct prediction of a bulk property.

## Keep identity, mass, and charge separate

An element is identified by its **atomic number** `Z`, the number of protons in
each of its nuclei. Changing the proton count changes the element. An isotope
keeps `Z` fixed but has a different neutron count. Its **mass number** `A` is
the whole-number count of protons plus neutrons in that particular nucleus:

`A = Z + number of neutrons`

For example, `^31P` has `Z = 15`, so it contains 15 protons and
`31 - 15 = 16` neutrons. The notation identifies one isotope; `31` is not the
element's average relative atomic mass
([OpenStax, *Chemistry 2e*, §2.2](https://openstax.org/books/chemistry-2e/pages/2-2-evolution-of-atomic-theory)).

A neutral atom has as many electrons as protons. An ion has gained or lost
electrons while its nucleus, and therefore its elemental identity, remains
unchanged. With charge written in units of the elementary positive charge,

`number of electrons = Z - ionic charge`

Thus `P^3-` has `15 - (-3) = 18` electrons, whereas `P^3+` has
`15 - (+3) = 12`. A positive ion has fewer electrons, not more; the sign states
the net charge.

The decimal value shown for an element in a periodic table is usually its
**relative atomic mass**: an abundance-weighted mean over the isotopic
composition of the stated sample or reference material. It is dimensionless
and need not be a whole number. A mass number belongs to one nuclide and is a
count; a relative atomic mass is an average. The later conversion from atomic
mass to molar mass is handled in [Chemical Language, the Mole, and
Stoichiometry](chemical-language-mole-stoichiometry.md).

## Replace paths with quantum states

The Bohr model assigns the electron in hydrogen-like, one-electron species to
fixed-energy circular orbits. It usefully introduces discrete energy levels
and explains the hydrogen spectrum, but its paths are not a general physical
picture of electrons in many-electron atoms
([OpenStax, §6.2](https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model)).

In the quantum model, a calculation assigns an amplitude to each possible
location around the nucleus. Squaring the magnitude of that amplitude gives
the probability density for finding an electron there. Chemists call each
allowed spatial-and-energy pattern an **atomic orbital**
([IUPAC Gold Book, “atomic orbital”](https://goldbook.iupac.org/terms/view/A00500);
[OpenStax, §6.3](https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory)).
An orbital is therefore a state with an energy and spatial distribution, not a
track that an electron follows. Boundary surfaces often drawn for `s` or `p`
orbitals enclose a chosen fraction of the probability; they are not hard
containers.

Four quantum numbers provide the minimum useful label for an electron in an
atomic-orbital model:

- The principal quantum number `n = 1, 2, 3, ...` labels the shell and is
  strongly related to energy and spatial extent.
- The angular-momentum quantum number `l = 0, 1, ..., n - 1` labels the
  subshell. The letters `s`, `p`, `d`, and `f` correspond to
  `l = 0, 1, 2, 3`.
- The magnetic quantum number `m_l = -l, ..., 0, ..., +l` distinguishes the
  orbitals within a subshell. An `s`, `p`, `d`, or `f` subshell therefore has
  1, 3, 5, or 7 orbitals.
- The spin quantum number `m_s = +1/2` or `-1/2` labels either allowed spin
  projection.

These labels describe states. They do not assign a classical size, direction,
and spinning trajectory to an electron.

## Build ground-state electron configurations

An electron configuration records occupied subshells. Three rules construct
the usual ground-state configuration of an isolated atom
([OpenStax, §6.4](https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations)):

1. **Pauli exclusion principle:** no two electrons in an atom have the same
   four quantum numbers. One orbital holds at most two electrons, with
   opposite spin projections.
2. **Aufbau ordering:** place electrons into the available lower-energy
   orbitals before higher-energy ones. The commonly used neutral-atom order
   begins `1s`, `2s`, `2p`, `3s`, `3p`, `4s`, `3d`, `4p`. It is an ordering
   guide, not a claim that orbital energies never shift or that every
   transition-metal configuration is regular.
3. **Hund's rule:** within orbitals of equal energy in one subshell, occupy
   separate orbitals with parallel spins before pairing.

**Configuration audit—silicon.** Silicon has `Z = 14`. The filled
`1s`, `2s`, and `2p` subshells account for ten electrons; `3s^2` accounts for
two more. The two remaining electrons enter separate `3p` orbitals before
either pairs:

`Si: 1s^2 2s^2 2p^6 3s^2 3p^2 = [Ne] 3s^2 3p^2`

The superscripts sum to `2 + 2 + 6 + 2 + 2 = 14`. The two `3p` electrons
have `n = 3` and `l = 1`; any two different labels among
`m_l = -1, 0, +1`, with parallel selected spin projections, satisfy Pauli and
Hund. Which two degenerate `m_l` labels are drawn is not a distinct
configuration.

**Charge audit—aluminium ion.** Neutral aluminium has 13 electrons:

`Al: [Ne] 3s^2 3p^1`

The ion `Al^3+` has lost its three outer-shell electrons, so it has
`13 - (+3) = 10`:

`Al^3+: 1s^2 2s^2 2p^6 = [Ne]`

The configuration accounts for ten electrons and a nucleus with 13 protons,
giving net charge `13 - 10 = +3`. Forming an ion changes occupancy, not the
element.

For main-group atoms, **valence electrons** occupy the outermost shell and
usually dominate introductory bonding arguments; the remaining electrons are
**core electrons**. Silicon therefore has four valence electrons
(`3s^2 3p^2`) and ten core electrons. Transition metals require more care
because nearby `ns` and `(n - 1)d` states can both participate; “outermost
shell only” is not a universal bonding rule.

## Use effective nuclear charge as a mechanism

Every electron is attracted to the nucleus but repelled by other electrons.
Inner electrons **shield** an outer electron from part of the nuclear
attraction. A qualitative **effective nuclear charge** can be written

`Z_eff ≈ Z - S`

where `S` represents shielding. This is a reasoning model, not a literal
smaller nucleus or one exact value shared by every orbital. Penetration,
electron correlation, and different radial distributions mean that electrons
in the same atom need not experience identical attraction.

Across a period, `Z` rises while added electrons mainly enter the same
principal shell. Shielding does not rise enough to cancel the added nuclear
charge, so valence electrons are generally pulled inward and held more
tightly. Down a group, a new occupied shell places valence electrons farther
from the nucleus and adds shielding. These competing effects organize the
trends below
([OpenStax, §6.5](https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties)).

## Read each trend with its conditions

### Atomic radius

An isolated atom has no sharp edge, so “atomic radius” depends on the
operational definition—commonly half a distance between bonded nuclei, or
another model-based measure. Compare values defined in the same way.

For main-group elements, radius generally decreases from left to right across
a period as effective nuclear attraction increases, and increases down a group
as higher shells are occupied. Ionic charge also matters: a cation is commonly
smaller than its parent atom, while an anion is commonly larger. In an
isoelectronic series, the species with more protons generally holds the same
number of electrons more tightly and is smaller. Definition, coordination, and
electronic state can change a quoted radius, especially for ions and
transition metals.

### First ionization energy

The **first ionization energy** is the minimum energy needed to remove an
electron from an isolated, gaseous, ground-state neutral atom:

`X(g) -> X^+(g) + e^-`

It is positive for this endothermic removal
([IUPAC Gold Book, “ionization energy”](https://goldbook.iupac.org/terms/view/I03199)).
It generally rises across a period and falls down a group, consistent with
stronger attraction and smaller size across a period and greater distance and
shielding down a group.

The pattern has informative exceptions. In period 2, boron's first `2p`
electron is easier to remove than beryllium's filled `2s` electron, so
`IE1(B) < IE1(Be)`. Pairing in one oxygen `2p` orbital increases
electron–electron repulsion relative to nitrogen's half-filled `2p` subshell,
so `IE1(O) < IE1(N)`. These comparisons show why configuration matters in
addition to position.

### Electron affinity

Electron affinity concerns

`X(g) + e^- -> X^-(g)`

but two sign conventions are common. IUPAC defines electron affinity as the
**energy released**, so favorable attachment has a positive affinity. Some
general-chemistry tables, including OpenStax, instead report the **energy
change of the system**, which is negative for an exothermic attachment. Always
read the definition and sign before comparing numbers
([IUPAC Gold Book, “electron affinity”](https://goldbook.iupac.org/terms/view/E01977);
[OpenStax, §6.5](https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties)).

First electron attachment tends to become more energetically favorable across
much of a period and less favorable down many groups, but the pattern is less
regular than radius or first ionization energy. Filled `ns^2`, half-filled
`np^3`, and closed-shell configurations resist the simple trend. Chlorine's
attachment is more favorable than fluorine's because the incoming electron in
compact fluorine experiences stronger electron–electron repulsion. Do not
infer a charge state in a solid or a reaction pathway from electron affinity
alone.

## Carry the model forward, not beyond its range

Valence configuration, size, ionization energy, and electron affinity help
frame whether atoms may lose, gain, or share electron density.
[Chemical Bonding, Molecular Structure, and Intermolecular
Forces](chemical-bonding-molecular-structure-intermolecular-forces.md) combines
those atomic starting points with interactions between atoms. It also
introduces electronegativity, which describes electron attraction in a bonding
context rather than electron attachment to an isolated gas-phase atom. MIT's
first-year sequence likewise moves from atomic states and configurations into
periodic trends and then bonding
([MIT OCW 5.111SC syllabus](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/);
[resource index](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/)).

For materials, electronic structure and bonding constrain stable structures
and influence electrical, optical, thermal, mechanical, and chemical
responses. Bulk properties also depend on crystal or molecular arrangement,
defects, phases, microstructure, processing history, environment, and the
measurement conditions. A periodic trend can motivate a hypothesis; it cannot
by itself select a material or establish its performance.

## Related notes

- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [Chemical Bonding, Molecular Structure, and Intermolecular Forces](chemical-bonding-molecular-structure-intermolecular-forces.md)
- [General Chemistry Map and Learning Path](chemistry.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Chapter 2, §§2.1–2.4, pp. 18–27.
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “atomic orbital,”
  “ionization energy,” and “electron affinity.”
  <https://goldbook.iupac.org/terms/view/A00500>
  <https://goldbook.iupac.org/terms/view/I03199>
  <https://goldbook.iupac.org/terms/view/E01977>
- OpenStax. *Chemistry 2e*, §§2.2 and 6.2–6.5.
  <https://openstax.org/books/chemistry-2e/pages/2-2-evolution-of-atomic-theory>
  <https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model>
  <https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory>
  <https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations>
  <https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus and
  resource index. Used to check first-year depth and prerequisite order.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
