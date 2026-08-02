# Imperfections and Defects in Solids

A **defect** is a localized departure from the reference structure used to
describe a solid. Defects are not merely mistakes: their type, density,
distribution, and chemistry help determine how atoms move, how crystals
deform, how charge is transported, and where damage accumulates. The word
only has meaning after the reference has been stated—an ideal periodic
crystal, a specified composition, or a pore-free continuum
(Callister and Rethwisch, 2015, Ch. 5, §§5.1–5.10, pp. 147–168).

Defects span several dimensions and length scales. A vacancy is localized near
one lattice site; a dislocation is organized around a line; an interface
extends across an area; and a pore or inclusion occupies a volume. This
classification describes geometry, not importance. One crack can matter more
than many vacancies, while a dilute population of charged point defects can
dominate ionic transport.

## Separate equilibrium populations from processing history

Some defects are present at **thermodynamic equilibrium**. For a simple,
one-component crystal with independent dilute vacancies, an introductory
model for the equilibrium vacancy site fraction is

`x_v = N_v/N = exp[-Q_v/(k_B T)]`,

where `N_v` is the number of vacant sites, `N` is the number of available
atomic sites, `Q_v` is the vacancy-formation energy per vacancy, `k_B` is the
Boltzmann constant, and `T` is absolute temperature. The exponential says
that the equilibrium fraction increases with temperature. It is not a kinetic
law and does not say how rapidly equilibrium is reached. A more complete
treatment can include formation entropy, interactions, multiple site types,
and composition constraints
(Callister and Rethwisch, 2015, §5.2, pp. 148–149).

For an independently chosen teaching case, let `Q_v = 1.00 eV`,
`T = 1000 K`, and `k_B = 8.62 × 10^-5 eV K^-1`. Then

`x_v = exp[-1.00/(8.62 × 10^-5 × 1000)] ≈ 9.2 × 10^-6`.

This is about nine equilibrium vacancies per million sites under the stated
model inputs. It is not data for a named material.

Other populations preserve **history** rather than equilibrium alone.
Solidification, deposition, deformation, quenching, sintering, joining, and
chemical reaction can introduce defects or prevent them from reaching their
equilibrium population. Mechanical work creates and rearranges dislocations;
rapid cooling can retain excess vacancies. Thus “the defect concentration at
temperature `T`” is incomplete without time, processing, and environment.

**This note treats thermal vibration separately from structural defects.**
Atoms fluctuate about their mean positions, whereas the point, line,
interfacial, and volume defects below are defined relative to site occupancy
or a persistent structural feature. Thermal motion can still enable defect
formation and migration. Some textbooks use *imperfection* broadly enough to
include atomic vibration, so this separation is a stated scope convention,
not universal terminology (Callister and Rethwisch, 2015, §5.10,
pp. 167–168).

## Identify point defects by site and species

A **vacancy** is a normally occupied site from which its atom or ion is absent.
A **self-interstitial** is a host atom occupying a normally unoccupied
interstitial position. Both distort their surroundings. Self-interstitials are
usually much less common than vacancies in close-packed elemental metals
because crowding a host atom between occupied sites costs substantial energy.

An impurity is classified by where it resides:

- a **substitutional impurity** replaces a host atom or ion on a regular site;
- an **interstitial impurity** occupies a normally unoccupied site between
  host sites.

Site identity is not determined by a micrograph's colour or contrast. Atomic
size, charge, bonding, available interstitial geometry, chemical potential,
and competing phases affect which configuration is stable. A “solid solution”
also requires the solute to share one solid phase; a visible second-phase
particle is an inclusion or precipitate, not simply an oversized point defect
(Callister and Rethwisch, 2015, §5.4, pp. 152–156).

## Preserve electroneutrality in ionic solids

In an ionic crystal, defect bookkeeping must preserve overall electrical
neutrality. A **Frenkel pair** consists of an ion vacancy and an interstitial
of the same ionic species: the ion has moved off its regular site, so overall
composition and charge are unchanged. A **Schottky set** consists of vacancies
in the stoichiometric proportions required to remove electrically neutral
formula content. In an ideal `AB` crystal with `A^+` and `B^-`, that means one
`A` vacancy plus one `B` vacancy. In `AB_2` with `A^2+` and `B^-`, a neutral
Schottky set instead requires one `A` vacancy and two `B` vacancies
(Callister and Rethwisch, 2015, §5.3, pp. 149–152).

Two caveats prevent faulty charge arguments:

- Electroneutrality constrains the sum over all charged species and electronic
  carriers in a sufficiently large region. It does not require every charged
  defect to have its compensating partner as a nearest neighbour.
- Schottky and Frenkel labels describe ideal coupled disorder. Real solids may
  also compensate aliovalent substitutions through other vacancies,
  interstitials, changes in oxidation state, electrons, holes, or combinations
  of these. Composition can therefore depart from the simplest integer formula.

## State composition with an explicit denominator

Defect and solute concentrations are ambiguous unless their denominator is
named. Useful measures include:

- **site fraction**, `x_i = N_i/N_sites`, for species or defects `i` on a
  defined sublattice;
- **atomic percent**, `at% i = 100 n_i/Σ_j n_j`, based on numbers of atoms or
  moles of atoms;
- **mass percent**, `wt% i = 100 m_i/Σ_j m_j`, based on masses; and
- **number density**, such as vacancies per cubic metre.

Here `N_i` is the count of entities `i`, `N_sites` is the count of specified
sites, `n_i` is amount of atoms in moles, and `m_i` is mass. Atomic percent and
site fraction are not interchangeable when several sublattices or vacancies
are present. Weight percent cannot be converted to atomic percent without
molar masses
(Callister and Rethwisch, 2015, §5.6, pp. 157–160).

For an independently constructed binary example, mix `85.0 g` of element `A`
with molar mass `50.0 g mol^-1` and `15.0 g` of element `B` with molar mass
`100.0 g mol^-1`. The mixture is `15.0 wt% B`, but

`n_A = 85.0/50.0 = 1.70 mol`, and `n_B = 15.0/100.0 = 0.150 mol`,

so

`at% B = 100(0.150)/(1.70 + 0.150) = 8.11 at% B`.

The difference follows from the different molar masses, not from a change in
the specimen.

## Read a dislocation through its Burgers vector

A **dislocation** is a line defect around which the lattice displacement is
not compatible with a perfect crystal. Its **Burgers vector** `b` is the
closure failure of a circuit made with equivalent lattice steps around the
dislocation, compared with the same circuit in the reference crystal. The
vector specifies both a magnitude and a crystallographic direction; it is not
the direction in which the line must point
(Callister and Rethwisch, 2015, §5.7, pp. 161–164).

Let `t` denote the local unit tangent to the dislocation line:

- **edge character:** `b · t = 0`; the line is perpendicular to `b`, and an
  extra half-plane is the usual introductory picture;
- **screw character:** `b × t = 0`; the line is parallel or antiparallel to
  `b`, and the lattice displacement winds helically around it;
- **mixed character:** neither relation holds, so edge and screw components
  coexist along the line.

For example, in a cubic coordinate frame, a line along `[001]` with
`b = (a/2)[110]` has pure edge character because
`[001] · [110] = 0`. Here `a` is the cubic lattice parameter, square brackets
denote a crystallographic direction, and the example establishes geometry
only; whether that Burgers vector and slip process are permitted depends on
the actual crystal structure.

Dislocation motion is a principal carrier of permanent deformation in many
crystals, but this statement is not a complete deformation model. Temperature,
stress direction, available slip systems, obstacles, interfaces, strain rate,
and competing twinning or fracture mechanisms all matter. Density alone is
also insufficient: arrangement, sign, character, and mobility determine how a
dislocation population interacts.

## Distinguish planar defects and interfaces

An **interface** is a two-dimensional transition between regions. Important
cases are:

- an external surface, where the solid terminates;
- a **grain boundary**, separating crystals of the same phase with different
  orientations;
- a phase boundary, separating distinct phases;
- a **twin boundary**, across which the lattices have a specific symmetry
  relationship, often represented as a mirror relation; and
- a **stacking fault**, a local interruption of the expected stacking order.

For close-packed planes, `ABCABC…` and `ABAB…` are distinct stacking
sequences. A local interruption such as `ABCABABC…` is a stacking fault, not a
new grain merely because the letters change. Low-angle grain boundaries can
often be represented as ordered dislocation arrays, whereas high-angle
boundaries require a broader interfacial description. Twin boundaries are
special crystallographic boundaries, not synonyms for every straight line in
a polished micrograph
(Callister and Rethwisch, 2015, §5.8, pp. 164–167).

Interfaces can provide fast transport paths, barriers, reaction sites, or
crack-initiation locations, but none of those roles is universal. Boundary
structure, chemistry, segregation, temperature, environment, and the property
being measured decide the effect.

## Include volume defects without calling them points

**Volume defects** occupy three-dimensional regions larger than atomic point
defects. They include pores and voids, cracks, foreign inclusions, and
second-phase particles. Their shape, size distribution, spacing, connectivity,
orientation, interface condition, and internal contents can matter more than
their total volume fraction. A rounded isolated pore, a sharp crack, and a
well-bonded reinforcing inclusion therefore cannot be treated as equivalent
“missing material”
(Callister and Rethwisch, 2015, §5.9, p. 167).

These features commonly arise from incomplete densification, solidification,
gas evolution, contamination, phase transformation, machining, loading, or
environmental attack. Calling a feature “processing-introduced” identifies a
possible origin, not proof of its mechanism.

## Connect defects to properties without skipping mechanisms

- **Diffusion:** vacancies and interstitials can provide atomic jump
  mechanisms; interfaces and dislocations may provide distinct paths. A
  defect's presence does not by itself give a diffusion coefficient.
- **Deformation:** dislocation glide can carry plastic strain; solutes,
  particles, other dislocations, and boundaries can impede or redirect it.
- **Conductivity:** charged point defects, electrons, and holes can maintain
  coupled charge balance and transport. Concentration and mobility are both
  required, and electronic and ionic contributions must be separated.
- **Failure:** pores, inclusions, interfaces, and cracks can concentrate stress
  or enable environmental attack. Outcome depends on geometry, loading,
  toughness, residual stress, environment, and time.

These are causal starting points for later transport, mechanical-property,
electrical-property, and fracture notes—not complete predictions. A useful
defect report therefore states the reference structure, defect type, density,
spatial and orientational distribution, chemistry or charge state, processing
history, observation method, resolution, and uncertainty.

## Related notes

- [Crystal Structures and Unit Cells](crystal-structures-unit-cells.md)
- [Crystallographic Directions and Planes](crystallographic-directions-and-planes.md)
- [Diffusion and Transport in Solids](diffusion-and-transport-in-solids.md)
- [Atomic Structure and Interatomic Bonding in Materials](atomic-structure-and-interatomic-bonding.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Ch. 5, §§5.1–5.10, pp. 147–168. Wiley.
