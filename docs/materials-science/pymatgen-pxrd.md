# Computing PXRD Patterns with pymatgen

`pymatgen` is an open-source Python library for materials analysis. Its
`XRDCalculator` converts a `Structure` into an ideal list of X-ray diffraction
peaks. It is useful for reproducible scripts and batch comparisons, but it is
not a structure-solution program, phase-search engine, or Rietveld refinement
suite.

## What the calculator does

The calculator uses the lattice, atomic coordinates, species, and occupancies
stored in a `Structure`. It evaluates allowed reflections and calculated
intensities using atomic scattering factors and a Lorentz–polarization term,
which corrects geometric and X-ray polarization weighting.
The returned `DiffractionPattern` contains:

- `x`: peak positions in degrees 2θ;
- `y`: calculated intensities;
- `hkls`: contributing Miller-index families and multiplicities;
- `d_hkls`: d-spacings in ångströms.

With scaled output, the largest calculated peak is normalized to 100. Unscaled
values are still calculated quantities, not absolute experimental detector
counts.

## Minimal calculation

```python
from pymatgen.analysis.diffraction.xrd import XRDCalculator
from pymatgen.core import Structure

structure = Structure.from_file("structure.cif")
calculator = XRDCalculator(wavelength="CuKa")
pattern = calculator.get_pattern(
    structure,
    scaled=True,
    two_theta_range=(5, 50),
)

for angle, intensity, families, d_spacing in zip(
    pattern.x, pattern.y, pattern.hkls, pattern.d_hkls
):
    print(angle, intensity, families, d_spacing)
```

Record the `pymatgen` version, input-file hash, radiation or numeric wavelength,
angular range, symmetry tolerance, scaling choice, and any Debye–Waller factors.
Defaults can change between versions; explicit settings make a calculation
easier to reproduce.

## A CIF is a model, not a guarantee

`Structure.from_file` reconstructs the model described by the CIF. It cannot
infer a uniquely correct experimental structure merely because a CIF parses.
Before simulation, check:

- whether symmetry expansion and site occupancies were interpreted as intended;
- parser warnings, overlapping sites, and chemically implausible distances;
- missing hydrogen atoms, guests, solvent, or disordered components;
- whether the CIF represents the solvated, activated, defective, open, or
  closed form measured experimentally;
- provenance, refinement quality, temperature, and radiation conditions.

Different CIFs may represent alternative settings or sample states of the same
material. Conversely, a syntactically valid CIF may contain an incomplete or
incorrect model.

## What is not simulated automatically

`XRDCalculator` returns discrete ideal reflections. It does not automatically
add instrument broadening, background, sample displacement, preferred
orientation, absorption, crystallite-size or microstrain profiles, or an
experimental noise model. Thermal attenuation is only represented when
appropriate Debye–Waller factors, which describe attenuation from atomic
displacement, are supplied.

Consequently, major peak positions should usually be compared first. Calculated
intensities are more sensitive to the structural model and to experimental
effects absent from the ideal calculation. For profile fitting, quantitative
phase analysis, or structure refinement, use a dedicated package and an
experimental uncertainty model.

## Cost and scope

`pymatgen` is distributed under the MIT License and can be installed and used
without a commercial software fee. The library also provides separate neutron
and electron diffraction calculators; `XRDCalculator` specifically models
X-ray diffraction.

## References

- [pymatgen diffraction API](https://pymatgen.org/pymatgen.analysis.diffraction.html#pymatgen.analysis.diffraction.xrd.XRDCalculator)
- [pymatgen source repository and MIT License](https://github.com/materialsproject/pymatgen)
- [Ong et al., "Python Materials Genomics (pymatgen)" (2013)](https://doi.org/10.1016/j.commatsci.2012.10.028)

## Related notes

- [Powder X-ray Diffraction](powder-x-ray-diffraction.md)
- [PXRD Simulation and Rietveld Refinement](pxrd-simulation-and-refinement.md)
- [Choosing PXRD Software](pxrd-software-selection.md)
