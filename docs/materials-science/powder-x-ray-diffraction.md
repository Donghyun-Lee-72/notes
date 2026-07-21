# Powder X-ray Diffraction

Powder X-ray diffraction (PXRD) measures how a polycrystalline sample scatters
X-rays as a function of the angle 2θ. Because the sample contains many
small crystallites in different orientations, a three-dimensional set of
diffraction conditions is averaged into a one-dimensional pattern of intensity
versus 2θ. PXRD is widely used to compare crystalline phases, monitor
structural change, and estimate microstructural properties.

## From crystallites to a powder pattern

Each family of lattice planes has a spacing called the **d-spacing**, normally
reported in ångströms (Å) or nanometres (nm). At a fixed X-ray wavelength, a
reflection occurs when the plane spacing and scattering angle satisfy Bragg's
condition. The [reciprocal-space note](crystal-diffraction-reciprocal-space.md)
connects this condition to reciprocal-lattice points, wavevectors, and the
Ewald sphere.

In an ideal powder, every crystallite orientation is represented. Reflections
with the same scattering angle collapse into peaks at the same 2θ.
The measured pattern is not a direct image of the atoms; it is a projection of
the sample's scattering intensity after powder averaging and instrument
effects.

## What the pattern contains

Three aspects of a peak carry different information:

- **Position** mainly reflects d-spacings and therefore the unit-cell geometry.
  A uniform angular offset may instead come from sample displacement or an
  instrument zero error.
- **Relative intensity** depends on the atomic arrangement through the
  structure factor. It is also affected by multiplicity (the number of
  symmetry-equivalent reflections), polarization,
  preferred orientation, occupancy, thermal motion, absorption, and sample
  preparation.
- **Width and shape** combine instrument resolution with crystallite size,
  microstrain (small spatial variations in lattice spacing), defects, and
  sometimes overlapping reflections. Width alone
  does not identify a structure.

The horizontal axis is commonly 2θ in degrees, while the vertical axis
may be detector counts, count rate, or normalized relative intensity. Always
record the radiation and wavelength: a Cu Kα pattern and a Mo Kα pattern place
the same d-spacing at different angles.

## Observation and inference

A measured peak is an observation. Assigning it to a phase or Miller index is
an inference made with a model or reference pattern. Agreement of several major
peak positions is useful evidence, but it does not by itself prove phase purity
or a unique structure. Overlapping peaks, minor phases, amorphous material, and
an incomplete reference database can all hide alternatives.

For metal–organic frameworks, compare like sample states. Solvated,
guest-exchanged, activated, collapsed, and open- or closed-pore forms may have
different unit cells and low-angle reflections. A mismatch with a simulated
pattern can therefore reflect a real state change rather than an incorrect
framework assignment.

## Common limits and artifacts

- Preferred orientation can strongly change intensities without changing the
  phase.
- Fluorescence, air scattering, and the sample holder can raise or reshape the
  background.
- Very small crystallites or substantial strain can broaden peaks until nearby
  phases are difficult to separate.
- A laboratory pattern may not resolve peaks that are distinct in a high-
  resolution synchrotron pattern.
- Amorphous content produces broad features rather than a complete set of sharp
  Bragg peaks.

PXRD uses ionizing radiation. Enclosed diffractometers rely on shielding and
interlocks; users should follow the instrument's radiation-safety procedures
and never bypass an interlock.

## References

- [IUCr Online Dictionary: Powder diffraction](https://dictionary.iucr.org/Powder_diffraction)
- [IUCr Online Dictionary: Bragg's law](https://dictionary.iucr.org/Bragg%27s_law)

## Related notes

- [Crystal Diffraction, Reciprocal Space, and Disorder](crystal-diffraction-reciprocal-space.md)
- [PXRD Simulation and Rietveld Refinement](pxrd-simulation-and-refinement.md)
- [Computing PXRD Patterns with pymatgen](pymatgen-pxrd.md)
- [Choosing PXRD Software](pxrd-software-selection.md)
