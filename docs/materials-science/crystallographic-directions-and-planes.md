# Crystallographic Directions and Planes

**Crystallographic indices** describe a direction or a plane relative to a
declared unit-cell basis. They turn orientation into compact integer labels,
which are useful when discussing anisotropy, slip, surfaces, and diffraction.
The labels are coordinates, not pictures: their meaning depends on the cell,
axis directions, and setting used to assign them (Callister and Rethwisch,
2015, Ch. 3, §§3.12–3.15, pp. 72–88).

## Declare the coordinate frame first

Let the direct-lattice basis vectors be `a`, `b`, and `c`, with lengths `a`,
`b`, and `c`. A point with fractional coordinates `(x, y, z)` has position

`r = x a + y b + z c`.

Thus `(1/2, 1/4, 0)` means half of `a`, one quarter of `b`, and none of `c`.
Fractional coordinates need not be Cartesian distances. In a monoclinic,
triclinic, or hexagonal setting, some basis vectors are not perpendicular.
Choose a right-handed basis and state whether it is primitive or conventional;
changing the origin translates point coordinates, while changing the basis or
setting can change every index label without changing the physical crystal.

## Reduce a displacement to a direction `[uvw]`

A direction is a directed line represented by a displacement. For a tail at
`(x1, y1, z1)` and head at `(x2, y2, z2)`:

1. Subtract tail from head: `(Δx, Δy, Δz) = (x2-x1, y2-y1, z2-z1)`.
2. Clear fractions with one common multiplier.
3. Divide by any common integer factor to obtain the smallest integer triple.
4. Enclose the result in square brackets: `[uvw]`.

The corresponding vector is parallel to `u a + v b + w c`. Translating the
arrow does not change its direction indices. Reversing the arrow changes every
sign. A negative index is conventionally printed with an overbar; this page
uses an explicit leading minus sign, so `[-1 2 1]` means the same indices as an
overbar on the first `1`. Do not reduce signs independently.

### Original direction example

Take the tail `(1/4, 1/2, 0)` and head `(3/4, 0, 1/2)`. Their difference is

`(1/2, -1/2, 1/2)`.

Multiplying all components by `2` gives `[1 -1 1]`; the reverse direction is
`[-1 1 -1]`. As an algebraic check,
`(1/2)a-(1/2)b+(1/2)c` is exactly one half of
`a-b+c`, so both vectors are parallel and point the same way.

`[uvw]` denotes one direction. Angle brackets, `<uvw>`, denote all directions
related to it by the crystal's point symmetry. For example, in a cubic setting
`<100>` includes the positive and negative directions along each of the three
cube edges. It is not permission to permute or change signs in every crystal
system: equivalence is determined by the actual symmetry (Callister and
Rethwisch, 2015, Ch. 3, §3.13, pp. 75–81).

## Construct a plane from intercept reciprocals

A plane orientation is indexed from where a parallel representative plane
meets the crystallographic axes. If a plane passes through the chosen origin,
translate it to a parallel lattice plane or select an equivalent origin first;
otherwise a zero intercept would make the reciprocal step undefined.

1. Express the intercepts in lattice units: `(p, q, r)` means `pa`, `qb`, and
   `rc`.
2. Take reciprocals: `(1/p, 1/q, 1/r)`. An axis parallel to the plane has an
   infinite intercept and therefore a zero reciprocal.
3. Clear fractions together and reduce to the smallest integer triple.
4. Write the result in parentheses: `(hkl)`.

For a primitive basis, reduced Miller indices are relatively prime. Centred
conventional cells require care: diffraction reflection labels and lattice-plane
families can retain non-coprime indices because centring changes which indexed
planes contain lattice points
([IUCr, “Miller indices”](https://dictionary.iucr.org/Miller_indices)).

### Original plane example

Suppose a plane intersects the axes at `2a` and `-b` and is parallel to `c`.
The normalized intercepts and reciprocals are

`(2, -1, ∞) → (1/2, -1, 0) → (1 -2 0)`.

The reconstruction gives intercepts `a/1`, `b/(-2)`, and `c/0 = ∞` after an
allowed common rescaling. Those are proportional to `2a`, `-b`, and `∞`, so
the orientation is recovered. A zero Miller index means **parallel to that
axis**, not an intercept at zero.

`(hkl)` identifies the orientation of a parallel-plane family. Braces,
`{hkl}`, collect plane orientations related by the crystal's point symmetry.
Individual translated planes have the same orientation indices, whereas members
of a brace family need not be parallel. IUCr expresses planes of one indexed
family in fractional coordinates as `hx + ky + lz = C`, with the integer `C`
selecting parallel members
([IUCr, “Miller indices”](https://dictionary.iucr.org/Miller_indices)).

## Keep three kinds of parallelism separate

- Two arrows with proportional `[uvw]` components lie along the same line
  orientation; a negative proportionality makes them antiparallel.
- Planes with the same `(hkl)` orientation and different `C` values are
  parallel translated planes.
- A direction `[uvw]` lies in a plane `(hkl)` when the **zone condition**
  `hu + kv + lw = 0` holds. A zone is a set of planes sharing a direction
  called the zone axis.

The reciprocal vector `g_hkl = h a* + k b* + l c*` is normal to `(hkl)`, where
`a*`, `b*`, and `c*` are the reciprocal basis vectors. In a cubic cell only,
the direct-space direction `[hkl]` is parallel to that normal. Outside the cubic
case, `[hkl]` and the normal to `(hkl)` generally differ because lengths and
angles in the direct metric are not all equal and orthogonal
([IUCr, “Reciprocal lattice”](https://dictionary.iucr.org/Reciprocal_lattice)).

## Introduce four-index hexagonal notation carefully

Hexagonal symmetry is clearer when the basal plane uses three equal-length axes
`a1`, `a2`, and `a3`, separated by `120°`, with
`a1 + a2 + a3 = 0`; the `c` axis is perpendicular to that plane. The fourth
index is therefore redundant, not a fourth independent spatial dimension.

- A plane is `(h k i l)`, with `h + k + i = 0`. Thus the basal plane is
  `(0 0 0 1)`, and a first-order prism orientation can be `(1 0 -1 0)`.
- A direction is `[u v t w]`, with `u + v + t = 0`. Starting from three-axis
  direction indices `[U V W]` referred to `a1`, `a2`, and `c`, use
  `u=(2U-V)/3`, `v=(2V-U)/3`, `t=-(u+v)`, and `w=W`, then clear common
  fractions. Hence `[1 0 0]` becomes `[2 -1 -1 0]`.

Plane conversion only adds `i=-(h+k)`, but direction conversion changes three
basal components and must not be done by merely inserting a digit. This
introduction assumes the standard hexagonal setting; rhombohedral axes and
alternative settings require an explicit basis transformation
([IUCr, “Miller indices”](https://dictionary.iucr.org/Miller_indices);
[University of Strathclyde crystallographic calculator](https://ssd.phys.strath.ac.uk/resources/crystallography/crystallographic-direction-calculator/)).

## Audit linear and planar density independently

**Linear density** (LD) counts atom centres on a repeat segment divided by its
length. **Planar density** (PD) counts atom centres in a repeating planar tile
divided by its area:

`LD = assigned centres on segment / segment length`

`PD = assigned centres in planar tile / tile area`.

Their units are inverse length and inverse area, such as `nm^-1` and `nm^-2`.
Boundary atoms must be shared by the number of adjacent repeat segments or
tiles. Count atom centres, not the area or volume of spheres cut by the line or
plane. Results also depend on the crystal basis: the same lattice-plane indices
can cut different atomic arrangements in different structures (Callister and
Rethwisch, 2015, Ch. 3, §3.15, pp. 87–88).

### Simple-cubic audit

Consider a monatomic simple-cubic lattice of parameter `a`.

- Along `[110]`, choose the face diagonal from `(0,0,0)` to `(1,1,0)`. Its
  length is `a√2`. Each endpoint belongs half to this repeat segment, giving
  `1/2 + 1/2 = 1` assigned centre. Therefore `LD_[110] = 1/(a√2)`.
- For `(110)`, choose the rectangular planar repeat tile with sides `a√2`
  (along `[-1 1 0]`) and `a` (along `[001]`). Its area is `a^2√2`. Its four
  corner centres each belong to four adjacent planar tiles, giving
  `4(1/4) = 1`. Therefore `PD_(110) = 1/(a^2√2)`.

Dimensional checks give `length^-1` and `length^-2`. The zone checks also pass:
`(110)` contains `[-1 1 0]` because `1(-1)+1(1)+0(0)=0`, and it contains
`[001]` because `1(0)+1(0)+0(1)=0`. This audit is constructed independently;
it is not a tabulated density result.

## Avoid common indexing mistakes

- Do not use absolute Cartesian coordinates for a direction; subtract head and
  tail first, then express the displacement in the declared lattice basis.
- Do not clear each fraction with a different multiplier or discard a minus
  sign. One common scale factor preserves orientation.
- Do not take reciprocals for directions, or skip reciprocals for planes.
- Do not call `<uvw>` or `{hkl}` a set of every permutation. Apply the crystal's
  point symmetry in the declared setting.
- Do not infer that `[hkl]` is normal to `(hkl)` except for the cubic metric.
- Do not confuse a family of symmetry-equivalent planes `{hkl}` with the
  parallel translated members represented by one `(hkl)` orientation.
- Do not count drawn boundary atoms as whole atoms in LD or PD, and do not mix
  a primitive-cell count with a conventional-cell length or area.
- Record the phase, basis, origin, axis handedness, cell choice, and setting
  when exchanging indices. A correct label in one setting can describe a
  different orientation when silently read in another.

## Related notes

- [Crystal structures and unit cells](crystal-structures-unit-cells.md)
- [Imperfections and defects in solids](imperfections-and-defects-in-solids.md)
- [Crystal diffraction, reciprocal space, and disorder](crystal-diffraction-reciprocal-space.md)
- [Powder X-ray diffraction](powder-x-ray-diffraction.md)

## References

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Ch. 3, §§3.12–3.15, pp. 72–88. Wiley.
- International Union of Crystallography (IUCr). “Miller indices” and
  “Reciprocal lattice,” *Online Dictionary of Crystallography*.
  <https://dictionary.iucr.org/>
- University of Strathclyde, Semiconductor Spectroscopy and Devices.
  “Crystallographic calculator.”
  <https://ssd.phys.strath.ac.uk/resources/crystallography/crystallographic-direction-calculator/>
