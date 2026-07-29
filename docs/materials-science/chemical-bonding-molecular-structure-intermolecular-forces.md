# Chemical Bonding, Molecular Structure, and Intermolecular Forces

Chemical bonding describes the attractive interactions that hold atoms
together in molecules and extended solids. Molecular structure describes the
three-dimensional arrangement that results, while **intermolecular forces**
describe attractions among separate molecular entities. Together these models
connect valence electrons to shape, polarity, phase, and properties.

No single model on this page is a complete picture of electron density.
Lewis structures are bookkeeping diagrams, valence-shell electron-pair
repulsion (VSEPR) predicts approximate geometry, and valence-bond (VB) and
molecular-orbital (MO) models answer different electronic-structure questions.
The useful habit is to choose the least elaborate model that can answer the
question, then keep its assumptions visible.

## Separate three broad bonding pictures

Bonding is a continuum, but three limiting pictures organize introductory
reasoning:

| Limiting picture | Electronic description | Structural consequence | Property connection and caution |
| --- | --- | --- | --- |
| **Ionic** | Oppositely charged ions attract electrostatically. Electron transfer is useful bookkeeping for forming simple ions. | Ions usually form an extended, charge-neutral array rather than separate molecules. | Strong, nondirectional attractions often accompany high melting points. Ions are generally not freely mobile in an ideal solid, so it is usually a poor electrical conductor; a melt can conduct. Solubility is not guaranteed. |
| **Covalent** | Nuclei attract electron density shared between atoms. | Bonds may produce discrete molecules or an extended covalent network. | Directional bonding helps constrain molecular and network geometry. Molecular substances and network solids can have very different properties, so “covalent” alone is not a property prediction. |
| **Metallic** | Valence electrons are delocalized over many atomic centres rather than assigned to one bond. | Positive atomic cores occupy an extended solid with mobile electronic states. | Electron mobility supports electrical and thermal conduction, and nondirectional cohesion is compatible with plastic deformation. Metals still vary widely in strength and melting point. |

These are models of dominant character, not labels fixed by whether an element
appears on one side of the periodic table. Ionic solids retain some covalent
character, polar covalent bonds approach ionic character gradually, and
metallic bonding requires a many-atom description
([OpenStax, *Chemistry 2e*, §§7.1–7.2](https://openstax.org/books/chemistry-2e/pages/7-1-ionic-bonding);
[§10.5](https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter)).

## Use electronegativity for a bond, not an isolated atom

**Electronegativity**, symbol `χ`, compares how strongly a bonded atom draws
electron density toward itself. It differs from ionization energy and electron
affinity, which refer to isolated gas-phase species. Several electronegativity
definitions and scales exist, so a quoted `χ` or difference `Δχ` is meaningful
only with its scale
([IUPAC Gold Book, “electronegativity”](https://goldbook.iupac.org/terms/view/E01990)).

For a bond `A–B`, unequal attraction shifts electron density toward the more
electronegative atom. The ends may be marked with partial charges `δ+` and
`δ-`, not full ionic charges. In a common chemistry diagram, a crossed-tail
partial-charge arrow runs along the bond from `δ+` toward `δ-`. For an
idealized pair of separated charges, the dipole-moment magnitude is

`μ = q r`

where `q` is the charge magnitude and `r` is the separation distance
([OpenStax, §7.6](https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity)).
The corresponding SI units are coulombs (`C`), metres (`m`), and coulomb
metres (`C m`). The chemistry arrow is a diagrammatic partial-charge symbol,
not the physical electric dipole-moment vector, whose conventional direction
is from negative to positive charge. Keeping the two conventions distinct
avoids a sign mistake.
A larger electronegativity difference often means a more polar bond, but there
is no universal `Δχ` cutoff that turns a covalent bond into an ionic one
([OpenStax, §7.2](https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding)).

## Build and audit a Lewis structure

A **Lewis structure** assigns valence-electron pairs to bonds and lone pairs.
For a main-group molecule or polyatomic ion:

1. Count valence electrons, adding one for each negative charge and
   subtracting one for each positive charge.
2. Choose a plausible connectivity. Hydrogen is terminal; a less
   electronegative atom is commonly central.
3. Place single bonds, complete terminal-atom valence shells, and place
   remaining electrons on the central atom.
4. If the central atom lacks an octet, convert suitable neighboring lone pairs
   into multiple bonds.
5. Recount every electron and calculate every formal charge.

This procedure is an electron-accounting algorithm, not proof that the chosen
connectivity is the lowest-energy structure
([OpenStax, §7.3](https://openstax.org/books/chemistry-2e/pages/7-3-lewis-symbols-and-structures)).

### Worked audit: nitrate without borrowing a source exercise

For `NO3^-`, the valence-electron total is

`5 + 3(6) + 1 = 24 electrons`.

Three `N–O` single bonds use six electrons. Completing the three oxygen octets
uses 18 more, exhausting all 24, but nitrogen then has only six electrons
around it. Converting one oxygen lone pair into an `N=O` bond completes
nitrogen's octet:

`[O^-–N^+(=O)–O^-]`

The line diagram suppresses lone-pair dots, so audit them explicitly: each
single-bonded oxygen has three lone pairs, the double-bonded oxygen has two,
and nitrogen has none. For an atom,

`formal charge = V - N_nonbonding - (N_bonding / 2)`,

where `V` is the neutral atom's valence-electron count. Therefore:

- `FC(N) = 5 - 0 - 8/2 = +1`;
- `FC(O_double) = 6 - 4 - 4/2 = 0`; and
- each `FC(O_single) = 6 - 6 - 2/2 = -1`.

The sum is `(+1) + 0 + 2(-1) = -1`, matching the ion charge. The double bond
can be placed to any of the three oxygens without moving nuclei, giving three
equivalent **resonance forms**. The ion does not switch among them. Its
electron distribution is represented by the resonance hybrid; within this
Lewis bookkeeping, each equivalent `N–O` link has average formal bond order
`(2 + 1 + 1)/3 = 4/3`
([OpenStax, §7.4](https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance);
[IUPAC Gold Book, “resonance hybrid”](https://goldbook.iupac.org/terms/view/RT07094)).

Formal charge is a hypothetical equal division of bonding electrons. It is not
an oxidation state, a measured atomic charge, or the `δ` used for a polar bond.
Structures with small formal-charge magnitudes and negative formal charge on
more electronegative atoms are often useful candidates, but geometry,
electron delocalization, and energy ultimately require evidence or a stronger
model.

### Know where the octet guide stops

Hydrogen normally has a duet. Many second-period main-group atoms are usefully
described by an octet, but odd-electron species, electron-deficient centres,
and compounds of heavier elements can violate that pattern. An expanded Lewis
shell should not automatically be interpreted as participation of an
available `d` orbital. Lewis structures also omit orbital energies, electron
correlation, and most three-dimensional information.

## Turn electron domains into geometry

VSEPR treats each bond—single, double, or triple—as one region of electron
density around a central atom. Each lone pair is another region. The regions
adopt an arrangement that reduces their mutual repulsions; after finding that
**electron-domain geometry**, hide the lone pairs to name the **molecular
geometry**, which describes atomic positions
([OpenStax, §7.6](https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity)).

| Domains | Ideal electron-domain geometry | Common molecular geometries |
| ---: | --- | --- |
| 2 | linear, `180°` | linear (`AX2`) |
| 3 | trigonal planar, `120°` | trigonal planar (`AX3`), bent (`AX2E`) |
| 4 | tetrahedral, `109.5°` | tetrahedral (`AX4`), trigonal pyramidal (`AX3E`), bent (`AX2E2`) |
| 5 | trigonal bipyramidal, `90°`, `120°`, `180°` | trigonal bipyramidal (`AX5`), seesaw (`AX4E`), T-shaped (`AX3E2`), linear (`AX2E3`) |
| 6 | octahedral, `90°`, `180°` | octahedral (`AX6`), square pyramidal (`AX5E`), square planar (`AX4E2`) |

`A` marks the central atom, `X` a bonded atom, and `E` a lone pair on `A`.
These angles are ideal parent-geometry values. Lone pairs commonly compress
nearby bond angles because their electron density is less confined between
two nuclei. VSEPR is a qualitative shape model: it does not calculate precise
angles, distinguish every isomer's stability, or replace measured structure.

For nitrate, nitrogen has three electron domains and no lone pair in every
resonance form. VSEPR therefore predicts trigonal-planar electron-domain and
molecular geometry of the ion, with ideal `O–N–O` angles of `120°`. Resonance
changes the electron bookkeeping, not the placement of the three oxygen
nuclei.

## Distinguish bond polarity from molecular polarity

**Bond polarity** concerns one bond. **Molecular polarity** concerns whether
the vector sum of the chemistry bond-polarity arrows, together with the full
electron distribution in the actual three-dimensional geometry, is nonzero.
Reversing every arrow to the physical dipole-moment convention changes its
reported direction but not whether the contributions cancel. A Lewis formula
alone cannot establish that cancellation
([OpenStax, §7.6](https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity)).

**Polarity audit—`CCl4` versus `CH2Cl2`.** Each carbon has four electron
domains and tetrahedral geometry. Every `C–Cl` bond in `CCl4` is polar, but the
four equal chemistry bond-polarity arrows point from carbon toward the vertices
of a symmetric tetrahedron and sum to zero. `CCl4` is therefore nonpolar
despite containing polar bonds. In `CH2Cl2`, replacing two chlorines with two
hydrogens removes that fourfold equality. The `C–Cl` and `C–H` bond-polarity
arrows have different magnitudes and directions and do not cancel in the
tetrahedral geometry, so the molecule is polar.

This is why “contains a polar bond” and “is a polar molecule” are different
claims. For larger or flexible molecules, conformation and the combined
electron distribution may matter, so symmetry inspection is a first model
rather than a measurement.

## Add only introductory orbital depth

### Valence-bond model: localized overlap

In a VB description, a covalent bond forms from overlap of orbitals associated
with neighboring atoms and pairing of electrons in the overlap region. End-on
overlap along the internuclear axis gives a **sigma (`σ`) bond**; side-on
overlap of parallel orbitals gives a **pi (`π`) bond**. A double bond contains
one `σ` and one `π` component, while a triple bond contains one `σ` and two
`π` components
([OpenStax, §8.1](https://openstax.org/books/chemistry-2e/pages/8-1-valence-bond-theory)).

Hybrid orbitals are a compact VB bookkeeping device. Two, three, and four
equivalent directions around a centre are commonly described as `sp`, `sp^2`,
and `sp^3`, corresponding to linear, trigonal-planar, and tetrahedral
arrangements. In ethene, `C2H4`, each carbon is described as `sp^2`: three
hybrid directions form the `σ` framework, and one unhybridized `2p` orbital on
each carbon overlaps side-on to form the `π` component of `C=C`.

Hybridization is not a directly observed label stamped on an atom, and it is
not required for every useful bonding calculation. In particular, an
introductory `sp^3d` or `sp^3d^2` geometry label should not be treated as proof
that main-group `d` orbitals cause hypervalent bonding.

### Molecular-orbital model: orbitals over the entity

An MO description combines compatible atomic-orbital wavefunctions into
orbitals that can extend over the molecular entity. In-phase combination
produces a bonding orbital; the corresponding out-of-phase combination
produces an antibonding orbital, marked with `*`. Electrons fill these orbitals
subject to the same Pauli and Hund constraints used for atomic orbitals
([IUPAC Gold Book, “molecular orbital”](https://goldbook.iupac.org/terms/view/M03996);
[OpenStax, §8.4](https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory)).

At this level, MO **bond order** is

`bond order = (N_bonding - N_antibonding) / 2`.

For ground-state `O2`, choose `z` as the internuclear axis and omit the
core `1s` orbitals, whose bonding and antibonding contributions cancel. One
consistent valence configuration is

`(σ2s)^2(σ2s*)^2(σ2p_z)^2(π2p_x)^2(π2p_y)^2(π2p_x*)^1(π2p_y*)^1`.

It contains eight bonding and four antibonding electrons, so
`bond order = (8 - 4)/2 = 2`. The two singly occupied, equal-energy `π*`
orbitals also predict two unpaired electrons and therefore paramagnetism. This
is a result that a simple Lewis `O=O` diagram does not display. Texts may order
or label the `2p` orbitals differently; the electron count, degeneracy,
bond order, and number of unpaired electrons must remain consistent
([OpenStax, §8.4](https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory);
[IUPAC Gold Book, “bond order”](https://goldbook.iupac.org/terms/view/BT07005)).

VB and MO are not rival sketches from which one must choose a universal
winner. Localized overlap is often convenient for connectivity and reaction
reasoning; delocalized orbitals are often more direct for electron
delocalization, spectroscopy, and magnetism. Quantitative versions require
basis choices and approximations beyond this introductory page.

## Identify forces among particles

Intermolecular attractions act among separate molecular entities; chemical
bonds act within a molecule or throughout an extended solid. The word
“intermolecular” is sometimes used loosely, so first identify the actual
particles:

| Interaction | When it is present | Introductory mechanism | Boundary |
| --- | --- | --- | --- |
| **London dispersion** | All atoms and molecules | Fluctuating electron density creates an instantaneous dipole that induces a correlated dipole nearby. | Strength depends on polarizability, separation, orientation, and contact area—not molar mass alone. |
| **Dipole–dipole** | Molecules with permanent dipoles | Favorable orientations bring partial positive and partial negative regions together. | Thermal motion samples many orientations; a single aligned drawing is not the whole liquid. |
| **Hydrogen bonding** | In the common introductory case, an `N–H`, `O–H`, or `F–H` donor approaches an available electronegative acceptor | A directional association involving the polarized hydrogen; within a suitably matched introductory series, it can be stronger than ordinary dipole–dipole attraction. | It can be intermolecular or intramolecular. The `N/O/F` rule is a useful first-course screen, not the full IUPAC definition. |
| **Ion–dipole** | An ion is near a polar molecule | A full ionic charge attracts the favorably oriented end of a molecular dipole. | Treat it separately from neutral-particle van der Waals attraction because one partner carries a full charge. |

On this page, the term **van der Waals forces** is a broad label for
attractions in which neutral particles respond to permanent or fluctuating
charge distributions. The mechanism-specific names in the table remain more
useful for predicting how molecular polarity, polarizability, distance, and
orientation change an interaction. Hydrogen bonding and ion–dipole attraction
are kept visible under their own names because their directionality or charge
pattern calls for a more specific model; these labels organize the analysis
rather than divide the underlying physics into perfectly independent boxes
([IUPAC Gold Book, “van der Waals forces”](https://goldbook.iupac.org/terms/view/V06597);
[“hydrogen bond”](https://goldbook.iupac.org/terms/view/H02899)).

### Connect interactions to phase and properties

At a given temperature and pressure, phase reflects competition among
attractive interactions, molecular motion, packing, and entropy. Stronger
cohesive attractions within a carefully matched series generally require more
energy for vaporization, raise boiling temperature at a fixed external
pressure, and lower vapor pressure at the same temperature. They can also
increase surface tension. Viscosity often increases with stronger attractions,
but molecular size, shape, flexibility, and temperature also control flow
([OpenStax, §10.1](https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces);
[§10.2](https://openstax.org/books/chemistry-2e/pages/10-2-properties-of-liquids)).

**Model-based comparison—propanone and propan-2-ol.** Both are small, polar
three-carbon molecules and both experience dispersion and dipole–dipole
attractions. Propanone, `CH3COCH3`, can accept a hydrogen bond at oxygen but
has no `O–H`, `N–H`, or `F–H` donor, so pure propanone cannot form the same
donor–acceptor hydrogen-bond network with itself. Propan-2-ol,
`CH3CH(OH)CH3`, has both an `O–H` donor and oxygen lone pairs. Holding the
comparison to these two similar-sized molecules and using this interaction
model, one predicts stronger cohesive association and a higher boiling point
for propan-2-ol. This is a prediction to test against property data, not
empirical confirmation or a rule that any hydrogen-bonding substance must boil
above every non-hydrogen-bonding substance.

Melting point is less safely ranked because crystal packing and solid
structure matter strongly. “Like dissolves like” is likewise only a screening
heuristic: dispersion, dipoles, hydrogen bonding, ion–dipole attraction,
cavity formation, and entropy all contribute to dissolution. Intermolecular
forces help explain a measured phase or property; they do not determine it
from a functional-group label alone.

## Carry bonding into materials without skipping structure

Bonding constrains which local arrangements are favorable, but bulk response
also depends on long-range order, defects, microstructure, composition,
processing history, temperature, and measurement conditions. Ionic attraction
does not by itself establish brittleness; metallic bonding does not assign one
conductivity; and a hydrogen-bonding polymer need not have one fixed glass
transition or strength. These are hypotheses along the
[processing–structure–properties–performance
chain](materials-science-engineering-framework.md), not substitutes for
structural and property measurements.

## Common misconceptions and limitations

- **“Bond types have sharp electronegativity cutoffs.”** They are limiting
  models along a continuum; `Δχ` is scale- and context-dependent.
- **“Formal charge is the charge on an atom.”** It is Lewis bookkeeping under
  equal bond-electron division.
- **“Resonance forms interconvert.”** The nuclei keep the same connectivity;
  the forms jointly represent one delocalized electronic structure.
- **“Electron geometry and molecular geometry are identical.”** They differ
  when the central atom has lone pairs.
- **“Polar bonds make a polar molecule.”** Molecular geometry determines
  whether bond-polarity contributions cancel.
- **“Hydrogen bonding replaces dispersion.”** Dispersion acts in every
  molecular substance; several interactions act at once.
- **“Boiling breaks covalent bonds.”** Ordinary vaporization separates
  molecular entities without changing their covalent connectivity.
- **“VSEPR, hybridization, and MO diagrams are direct observations.”** They are
  models with different resolution and failure modes.

## Boundary of this page

This page does not calculate lattice energies, bond dissociation enthalpies,
dipole moments, potential-energy surfaces, spectra, or phase equilibria. It
does not cover band theory, coordination compounds, multicentre bonding,
solvation thermodynamics, or quantitative electronic-structure methods.
Those topics need additional models and measured or calculated evidence.

## Related notes

- [Atomic Structure and Periodic Trends](atomic-structure-periodic-trends.md)
- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [General Chemistry Map and Learning Path](chemistry.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)

## References

- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., entries “electronegativity,”
  “molecular orbital,” “bond order,” “resonance hybrid,” “hydrogen bond,” and
  “van der Waals forces.”
  <https://goldbook.iupac.org/terms/view/E01990>
  <https://goldbook.iupac.org/terms/view/M03996>
  <https://goldbook.iupac.org/terms/view/BT07005>
  <https://goldbook.iupac.org/terms/view/RT07094>
  <https://goldbook.iupac.org/terms/view/H02899>
  <https://goldbook.iupac.org/terms/view/V06597>
- OpenStax. *Chemistry 2e*, §§7.1–7.4, 7.6, 8.1, 8.4, 10.1–10.2, and 10.5.
  <https://openstax.org/books/chemistry-2e/pages/7-1-ionic-bonding>
  <https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding>
  <https://openstax.org/books/chemistry-2e/pages/7-3-lewis-symbols-and-structures>
  <https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance>
  <https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity>
  <https://openstax.org/books/chemistry-2e/pages/8-1-valence-bond-theory>
  <https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory>
  <https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces>
  <https://openstax.org/books/chemistry-2e/pages/10-2-properties-of-liquids>
  <https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, Unit II:
  Chemical Bonding & Structure and lecture-note index. Used to check
  first-year depth across ionic and covalent bonding, Lewis structures, VSEPR,
  MO theory, and VB theory.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-ii-chemical-bonding-structure/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/lecture-notes/>
