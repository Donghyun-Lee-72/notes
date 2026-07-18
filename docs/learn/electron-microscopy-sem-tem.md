# Electron Microscopy: SEM and TEM

Scanning electron microscopy (SEM) and transmission electron microscopy (TEM) use accelerated electrons and electromagnetic lenses, but they answer different questions. SEM raster-scans a focused probe and maps signals generated near a specimen surface. TEM records electrons transmitted through an electron-transparent specimen to reveal internal structure, diffraction, and spectroscopy.

!!! correction "SEM images are usually 3D-like, not direct 3D height maps"
    A conventional single SEM frame is a two-dimensional map of detector intensity. Its strong depth of field and detector-dependent topographic shading often create a three-dimensional appearance. Quantitative height normally requires stereo reconstruction, photogrammetry, serial sectioning, or another profilometry method.

## Why electrons can resolve small features

An electron accelerated through a high voltage has a short relativistic de Broglie wavelength. Electron guns (thermionic or field-emission), condenser lenses, apertures, scan coils, the objective lens, and detectors form the electron-optical column. High vacuum limits gas scattering, contamination, and electrical discharge.

The short wavelength is necessary but not sufficient for high resolution. Lens aberrations, source brightness and energy spread, probe size, mechanical and electromagnetic stability, specimen thickness, contamination, and radiation damage usually set the practical limit.

## Electron–matter interactions

An incident, or primary, electron interacts through Coulomb forces with atomic nuclei and electrons. Three related terms should not be conflated:

- **Electron scattering** changes the primary electron's direction, phase, or energy.
- **Excitation or ionization** transfers energy to the specimen.
- **Signal generation or emission** produces a detectable electron, photon, X-ray, or current after an interaction. A backscattered or diffracted electron is the redirected primary electron; a secondary electron, characteristic X-ray, Auger electron, or cathodoluminescence photon is newly generated.

In **elastic scattering**, direction and phase change while kinetic-energy loss is negligible. Large-angle nuclear scattering produces many SEM backscattered electrons; coherent elastic scattering by a crystal produces TEM diffraction. In **inelastic scattering**, the primary electron loses energy to electronic excitation, ionization, plasmons, phonons, or other processes. It generates secondary electrons, characteristic X-rays, Auger electrons, light, and the energy-loss spectrum measured by EELS. It also contributes to heat and beam damage.

The **interaction volume** is the three-dimensional region traversed by primary electrons undergoing multiple elastic and inelastic events. It generally grows with accelerating voltage and shrinks with increasing density and atomic number. Signal information depth is not identical to the whole interaction volume: escape depth, absorption, detector geometry, and selection apertures determine what is actually measured.

## How SEM forms an image

Scan/deflection coils drive a focused electron probe across an x–y raster. At each pixel, a detector integrates counts during a dwell interval. The acquisition system assigns that intensity to the synchronized beam position. An SEM image is therefore a position-indexed signal map, not a lens-projected photograph.

### Major SEM signals

- **Secondary electrons (SE):** Low-energy electrons produced mainly by inelastic interactions. Because only those generated close to the surface escape, SE imaging is highly surface sensitive, often sampling the top few nanometres. Edges, surface tilt, and detector position strongly affect topographic contrast.
- **Backscattered electrons (BSE):** Primary electrons that return after predominantly elastic scattering. Backscatter yield generally increases with mean atomic number, enabling compositional or Z contrast. BSE can originate deeper than SE, and crystallographic channeling can also change brightness.
- **Characteristic X-rays and EDS:** Inner-shell ionization followed by electronic relaxation emits element-specific X-rays; bremsstrahlung forms a continuous background. The X-ray generation volume is usually much larger than the SE escape region. Thin films and small particles can therefore contain substrate signal. Peak overlap, absorption, fluorescence, detector windows, and poor sensitivity to very light elements constrain quantification.
- **Auger electrons:** Non-radiative core-hole relaxation transfers energy to another emitted electron. Their very short escape depth makes them surface sensitive, although quantitative Auger work normally uses a dedicated instrument.
- **Cathodoluminescence (CL):** Photon emission after electron–hole recombination or defect/impurity excitation. It maps band-gap, defect, and growth-zoning information in semiconductors and minerals.
- **Absorbed/specimen current:** Electrical current remaining after incident and emitted charges are balanced. It can probe continuity, junctions, or beam-induced current; it is a circuit measurement rather than an emitted particle signal.

Information depth is conditional, not a universal number. Lower accelerating voltage often reduces the interaction volume and improves surface specificity, but it can lower X-ray overvoltage and signal-to-noise ratio.

## How TEM forms images and diffraction patterns

TEM requires an electron-transparent foil, commonly tens to a few hundred nanometres thick depending on composition, voltage, and the intended measurement. The objective lens forms both an image plane and a diffraction pattern in its back focal plane; intermediate and projector lenses select which one is magnified onto the detector.

- **Direct/transmitted beam:** Unscattered and very-low-angle electrons form the central beam. In bright-field (BF) imaging, an objective aperture commonly admits this beam, so regions that scatter or diffract strongly may become dark.
- **Diffracted electrons:** Elastically scattered beams satisfying crystal diffraction conditions. Dark-field (DF) imaging selects one diffracted beam, often making a chosen phase, orientation, or defect bright.
- **SAED:** Selected-area electron diffraction uses an image-plane aperture to limit the nominal specimen region contributing to a diffraction pattern. Spot/ring geometry can identify orientation, spacings, and phases, but dynamical multiple scattering and the finite selected volume complicate intensity interpretation.
- **HRTEM:** Phase contrast results from interference among transmitted and diffracted beams. Atomic-column-like contrast is not a simple photograph of atoms; defocus, aberrations, thickness, orientation, and image simulation matter.
- **STEM:** A small probe raster-scans a TEM foil. BF, annular dark-field (ADF), and high-angle ADF detectors form images, while EDS or EELS can acquire spectrum images. HAADF is often approximately Z-sensitive and incoherent, but thickness and collection geometry prevent a universal Z-power rule.
- **EDS and EELS:** TEM/STEM EDS maps characteristic X-rays from a small volume. EELS directly energy-analyzes inelastically scattered electrons; edge onset and fine structure report elements, bonding, oxidation, thickness, and plasmon response.

## Specimen preparation, vacuum, and charging

SEM specimens must fit the chamber and remain stable in vacuum. Insulators may charge, causing brightness shifts, streaking, beam deflection, and false contrast. Good grounding, lower voltage/current, variable-pressure operation, or a thin carbon/metal coating can help. Coatings can obscure the original surface and alter EDS results.

TEM foils may be made by mechanical thinning and ion milling, electropolishing, ultramicrotomy, particle dispersion, or focused-ion-beam lift-out. Preparation can introduce curtaining, redeposition, implantation, amorphization, strain relaxation, oxidation, or preferential thinning.

Both methods can cause radiolysis, knock-on displacement, hydrocarbon deposition, heating, charging, or volatilization. Beam-sensitive polymers, biological material, and battery compounds may require low-dose, cryogenic, or controlled-atmosphere transfer methods.

## Contrast controls

- **Accelerating voltage:** Changes penetration, scattering, X-ray overvoltage, charging, and damage. Lower-kV SEM is often more surface sensitive; higher-voltage TEM improves penetration but can increase knock-on damage.
- **Probe current, aperture, and dwell time:** More electrons improve counting statistics but may enlarge the probe or increase charging, drift, and damage.
- **SEM working distance:** A short distance often supports high spatial resolution; it also changes depth of field, detector take-off geometry, EDS collection, and collision clearance.
- **Detector geometry:** Controls SE shadowing, BSE directionality, and EDS solid angle. Brightness must not automatically be interpreted as height or concentration.
- **TEM thickness, orientation, defocus, apertures, and camera length:** Control mass-thickness, diffraction and phase contrast, and diffraction-pattern scale.

## Choosing between SEM and TEM

- Choose **SEM** for surface morphology, fracture surfaces, particle surveys, and rapid large-area imaging. Add BSE/EDS for composition and CL or current detectors for electronic/optical information.
- Choose **TEM/STEM** for internal interfaces, dislocations, nanoscale phases, lattice/diffraction information, or nanoscale EDS/EELS.
- SEM preparation is usually simpler and the field of view and depth of field are large, but lateral resolution and analytical volume can limit interpretation.
- TEM can reach atomic-scale information, but it samples a very small, thin region. Representativeness, preparation artifacts, and diffraction/phase-contrast interpretation are major limitations.

## Safe and reproducible interpretation

Electron microscopes contain high voltage, vacuum systems, hot components, and X-ray-generating electron columns; interlocks and facility procedures must not be bypassed. Preparation hazards can include nanoparticles, toxic stains, ion sources, reactive specimens, and cryogens.

Report the microscope and source, accelerating voltage, probe current or aperture, working distance or camera length, detector and vacuum mode, coating, specimen preparation, calibration, pixel size, acquisition time, and image processing. Examine multiple fields and independent specimens; a visually striking micrograph is not automatically representative.

## References

- Callister, W. D., Jr., & Rethwisch, D. G. (2015). *Fundamentals of Materials Science and Engineering: An Integrated Approach* (5th ed., pp. 171–173). Wiley.
- Goldstein, J. I., et al. (2018). *Scanning Electron Microscopy and X-Ray Microanalysis* (4th ed.). Springer. <https://doi.org/10.1007/978-1-4939-6676-9>
- Williams, D. B., & Carter, C. B. (2009). *Transmission Electron Microscopy* (2nd ed.). Springer. <https://doi.org/10.1007/978-0-387-76501-3>

