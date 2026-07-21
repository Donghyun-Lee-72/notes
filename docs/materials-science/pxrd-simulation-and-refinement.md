# PXRD Simulation and Rietveld Refinement

A simulated PXRD pattern predicts diffraction from a structural model under
stated radiation and profile assumptions. Refinement goes further: it adjusts a
model to explain an experimental pattern. These are different tasks, and the
strength of the conclusion depends on which level was actually performed.

## Three levels of calculation

### 1. Ideal reflections

An ideal or **stick pattern** is calculated from a crystal structure, radiation
wavelength, and angular range. It reports reflection positions, calculated
relative intensities, Miller indices, and d-spacings. It is fast and useful for
candidate screening, but it does not reproduce a detector trace.

Required inputs usually include:

- a structural model, commonly a CIF parsed into atoms, occupancies, symmetry,
  and a unit cell;
- the X-ray wavelength or radiation label;
- a 2θ range.

### 2. Full-profile simulation

A full-profile simulation broadens the ideal reflections and adds an instrument
and sample model. Important choices include the angular step, peak-shape
function, wavelength distribution such as Kα1/Kα2, zero offset, instrument
resolution, background, crystallite-size and strain broadening, asymmetry, and
preferred orientation. These settings can change the apparent similarity even
when the underlying structure is unchanged.

### 3. Whole-pattern fitting and refinement

Pawley and Le Bail methods fit a powder profile and extract reflection
intensities without refining a complete atomic structure. **Rietveld
refinement** instead calculates the full pattern from one or more structural
models and optimizes selected structural, phase, instrument, and sample
parameters against measured data.

The output may include lattice parameters, phase scale factors, atomic or
profile parameters, quantitative phase fractions, an estimated background, a
difference curve, uncertainties, and fit statistics such as Rwp, Rp,
or goodness of fit.

## A defensible comparison workflow

1. Validate the CIF and retain parser warnings. Check composition, occupancies,
   symmetry, missing atoms, and whether the model represents the measured
   sample state.
2. Match the radiation, wavelength, angular convention, range, and units used by
   the experiment.
3. Compare major peak positions or d-spacings before comparing intensities.
4. Inspect unexplained measured peaks, missing predicted peaks, and any global
   angular shift.
5. Treat intensity differences cautiously until preferred orientation,
   absorption, background, and instrument response have been considered.
6. If refinement is justified, limit adjustable parameters, inspect parameter
   correlations and uncertainties, and check chemical plausibility.

A useful conclusion vocabulary is deliberately conservative:

- **Match candidate:** the expected reflections are broadly consistent, but
  the assignment still needs full-pattern and chemical support.
- **Conflict:** important observations remain incompatible after obvious
  experimental and sample-state explanations are checked.
- **Insufficient data:** resolution, angular coverage, signal, or metadata do
  not support a reliable conclusion.

## Why a good fit is not proof

Refinement is conditional on the supplied phases, structural models,
constraints, background, and peak profile. A low residual can result from an
over-flexible model, correlated parameters, or compensation between incorrect
terms. Conversely, a scientifically reasonable model can have a poor residual
when the instrument or sample model is incomplete.

Therefore, report the difference curve, excluded regions, refined uncertainties,
parameter correlations, and chemical constraints—not only a single fit number.
Use microscopy, spectroscopy, elemental analysis, thermal analysis, or other
independent evidence when the scientific claim requires it.

## References

- [Rietveld, "A profile refinement method for nuclear and magnetic structures" (1969)](https://doi.org/10.1107/S0021889869006558)
- [McCusker et al., "Rietveld refinement guidelines" (1999)](https://doi.org/10.1107/S0021889898009856)
- [Toby and Von Dreele, "GSAS-II: the genesis of a modern open-source all purpose crystallography software package" (2013)](https://doi.org/10.1107/S0021889813003531)

## Related notes

- [Powder X-ray Diffraction](powder-x-ray-diffraction.md)
- [Computing PXRD Patterns with pymatgen](pymatgen-pxrd.md)
- [Choosing PXRD Software](pxrd-software-selection.md)
- [Crystal Diffraction, Reciprocal Space, and Disorder](crystal-diffraction-reciprocal-space.md)
