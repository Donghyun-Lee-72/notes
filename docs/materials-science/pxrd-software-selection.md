# Choosing PXRD Software

PXRD software spans several distinct jobs: calculating ideal reflections,
viewing structures, identifying phases, fitting peak profiles, and refining
structural models. A tool is reliable only for the task and assumptions it was
designed to handle; calling every program a "PXRD simulator" hides important
differences.

## Software by primary role

| Software | Primary role | Access model | Best fit |
| --- | --- | --- | --- |
| pymatgen | Scripted ideal diffraction calculations | MIT open source | Reproducible automation and batch screening |
| Mercury | Crystal visualization with simulated patterns | Free Mercury for non-commercial use; fuller CSD products licensed | Interactive structure and packing checks |
| VESTA | Structure and volumetric-data visualization with diffraction utilities | Freeware under its published terms | Visual inspection and teaching |
| Dans_Diffraction | Scripted and graphical X-ray, neutron, and electron diffraction calculations | Apache-2.0 open source | Independent calculations and multiple radiation types |
| GSAS-II | Data reduction, profile fitting, and crystallographic analysis including Rietveld refinement | Free open source under the GSAS-II license | Laboratory and large-facility diffraction analysis |
| FullProf Suite | Powder-profile and Rietveld analysis, especially X-ray and neutron data | Available without charge under its own terms | Established refinement workflows |
| DIFFRAC.TOPAS | Whole-pattern fitting, quantitative phase and structural analysis | Commercial, quote-based | Licensed advanced refinement workflows |
| HighScore / HighScore Plus | Phase identification; Plus adds extended fitting, quantification, and structural tools | Commercial, quote-based | Database-assisted search-match and integrated analysis |

Access terms and features can change. Check the current official license and
product edition before use, redistribution, or integration into a service.

## Ideal-pattern and visualization tools

**pymatgen** is the strongest choice here when a Python pipeline must process
many structures with explicit, versioned settings. Its output is an ideal
reflection list rather than a realistic instrument profile.

**Mercury** is primarily a crystal-structure and packing viewer. Free Mercury
can calculate a simulated pattern for a displayed structure and is useful for a
human cross-check. Free Mercury is a reduced CSD-Community offering for
non-commercial use; it should not be described as the full CSD system or as a
Rietveld suite.

**VESTA** emphasizes interactive visualization of crystal structures and
volumetric data. Its diffraction display is helpful for visual reasoning, but
VESTA is freeware rather than open-source software.

**Dans_Diffraction** provides Python and graphical workflows for X-ray,
neutron, and electron scattering. It overlaps with pymatgen for ideal
calculations while offering an independent implementation and broader
scattering modes.

## Experimental-data and refinement suites

**GSAS-II** handles powder and single-crystal X-ray and neutron data, including
area-detector calibration and integration, peak fitting, indexing, Pawley and
Le Bail fitting, sequential analysis, and Rietveld refinement. It is a broad
analysis environment, not an automatic source of a unique structural answer.

**FullProf Suite** is an established collection for profile matching and
Rietveld analysis of powder diffraction, particularly X-ray and neutron data.
It is available without charge, but its licensing and redistribution terms are
not the same as an OSI-style open-source license.

**DIFFRAC.TOPAS** is a commercial Bruker suite for whole-pattern fitting,
quantitative phase analysis, microstructure analysis, structure solution, and
refinement. **HighScore** focuses on phase identification, while the **Plus**
option adds extended profile fitting, quantitative analysis, indexing, and
structural workflows. A software license does not automatically include every
external reference database; database rights and coverage must be checked
separately.

## How to choose

- Use an ideal calculator when the question is whether a proposed structure
  predicts reflections near the observed positions.
- Use a visualizer when inspecting symmetry, packing, atom labels, or sample-
  state alternatives is central.
- Use search-match software when phase identification against a reference
  database is required, while remembering that the answer is limited by that
  database and the measured pattern.
- Use a full-profile or Rietveld suite when extracting quantitative parameters
  from experimental data, with appropriate calibration, models, constraints,
  uncertainties, and independent checks.
- Cross-checking two implementations can reveal parsing or settings errors, but
  agreement between programs is not independent experimental validation.

Runtime is rarely a useful product ranking by itself. Ideal stick-pattern
calculations are usually much lighter than iterative full-profile refinement;
actual time depends on structure size, angular sampling, number of phases and
parameters, convergence criteria, implementation, and hardware. Benchmark the
real workflow with representative public or shareable data instead of relying
on a universal time claim.

## Official resources

- [pymatgen](https://pymatgen.org/pymatgen.analysis.diffraction.html)
- [CCDC Free Mercury](https://www.ccdc.cam.ac.uk/solutions/software/free-mercury/)
- [VESTA](https://jp-minerals.org/vesta/en/)
- [Dans_Diffraction](https://github.com/DanPorter/Dans_Diffraction)
- [GSAS-II](https://github.com/AdvancedPhotonSource/GSAS-II)
- [FullProf Suite](https://www.ill.eu/sites/fullprof/)
- [DIFFRAC.TOPAS](https://www.bruker.com/en/products-and-solutions/diffractometers-and-scattering-systems/x-ray-diffractometers/diffrac-suite-software/diffrac-topas.html)
- [HighScore with Plus option](https://www.malvernpanalytical.com/en/products/category/software/x-ray-diffraction-software/highscore-with-plus-option)

## Related notes

- [Powder X-ray Diffraction](powder-x-ray-diffraction.md)
- [PXRD Simulation and Rietveld Refinement](pxrd-simulation-and-refinement.md)
- [Computing PXRD Patterns with pymatgen](pymatgen-pxrd.md)
