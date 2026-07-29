# General Chemistry Map and Learning Path

General chemistry studies what matter is made of, how atoms and molecules are
organized, and how matter changes through chemical reactions and energy
transfer. It matters because composition, bonding, reaction conditions, and
chemical stability help determine which materials can be made and whether they
will retain their intended function.

This page is a learning map for a bachelor's-level STEM reader without a
chemistry specialization. It identifies the concepts to learn, the order in
which they support one another, and the questions to carry into materials
science. All ten foundation clusters now have pages in this repository
checkout, so the map can also serve as an index to the complete sequence.
Repository availability does not by itself confirm deployment or public
publication.

## Why the path follows dependencies

Chemical ideas form a dependency network rather than a collection of isolated
facts. A balanced reaction requires a language for atoms, formulae, amounts,
and charge. Molecular shape depends on a prior model of electrons and bonding.
Equilibrium and reaction rate answer different questions, but both require a
clear description of reactions and energy. Electrochemistry then combines
reaction bookkeeping, thermodynamics, equilibrium, and charge transfer.

The sequence below is an independently constructed prerequisite-based
structure for this learning path. Its breadth has been checked against an
openly available two-semester general chemistry text
([OpenStax, *Chemistry 2e*, Preface](https://openstax.org/books/chemistry-2e/pages/preface))
and its progression against an independent first-year course that develops
atomic structure, bonding, thermodynamics, equilibrium, redox chemistry, and
kinetics through lectures and problems
([MIT OpenCourseWare 5.111SC syllabus](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/);
[resource index](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/)).
These sources check coverage and level; they do not define the order or
wording of this roadmap.

## The ten topic clusters

All 10 of 10 foundation clusters are available as live repository links below.
The prerequisite line for each cluster identifies the preparation that makes
the page most useful; it is guidance, not a rule that every reader must follow
one linear route.

1. [**General Chemistry Map and Learning Path**](chemistry.md) — locate the
   major concepts, their prerequisites, and their materials-science uses.
   **Prerequisite:** none; this is the route map.
2. [**Chemical Language, the Mole, and
   Stoichiometry**](chemical-language-mole-stoichiometry.md) — represent
   substances and reactions, relate particle-scale descriptions to measurable
   amounts, and track matter through a reaction.
   **Prerequisite:** the route map is helpful, but no earlier chemistry cluster
   is required.
3. [**Atomic Structure and Periodic
   Trends**](atomic-structure-periodic-trends.md) — connect electronic
   structure to recurring patterns in chemical behavior without treating
   those patterns as exception-free rules.
   **Prerequisite:** chemical symbols, formulae, ions, and charge from cluster
   2.
4. [**Chemical Bonding, Molecular Structure, and Intermolecular
   Forces**](chemical-bonding-molecular-structure-intermolecular-forces.md) —
   reason from electron sharing or transfer to shape, polarity, and
   interactions among particles. **Prerequisite:** atomic electronic structure
   and periodic trends from cluster 3.
5. [**Aqueous Reactions and Net Ionic
   Equations**](aqueous-reactions-net-ionic-equations.md) — distinguish the
   species present in water and identify the chemical change a reaction
   equation represents. **Prerequisites:** formulae, charge, coefficients, and
   amount reasoning from cluster 2; cluster 4 strengthens particle-level
   interpretation.
6. [**Redox Foundations and Half-Reaction
   Balancing**](redox-foundations-half-reaction-balancing.md) — use oxidation
   states as a formal bookkeeping model, identify coupled oxidation and
   reduction, and balance matter and charge. **Prerequisites:** balanced
   equations and charge from cluster 2, plus aqueous species from cluster 5 for
   solution examples.
7. [**Thermochemistry, Entropy, and Gibbs
   Energy**](thermochemistry-entropy-gibbs-energy.md) — track heat, enthalpy,
   entropy, and Gibbs energy while distinguishing thermodynamic direction from
   reaction rate. **Prerequisite:** equations, amounts, and stoichiometric
   scaling from cluster 2.
8. [**Chemical Equilibrium, Acids and Bases, and
   Solubility**](chemical-equilibrium-acids-bases-solubility.md) — analyze
   reversible reactions and coupled solution equilibria under stated
   conditions. **Prerequisites:** aqueous species from cluster 5 and reaction
   Gibbs energy from cluster 7.
9. [**Chemical Kinetics and Reaction
   Mechanisms**](chemical-kinetics-reaction-mechanisms.md) — connect measured
   reaction rates to pathways, temperature, concentration, and catalysis.
   **Prerequisites:** stoichiometric rate normalization from cluster 2 and the
   thermodynamics–rate distinction from cluster 7; cluster 8 helps with
   reversible steps.
10. [**Electrochemical Cells, Potentials, and
    Applications**](electrochemical-cells-potentials-applications.md) —
    connect redox reactions to electron and ion paths, cell potential,
    batteries, electrolysis, and corrosion. **Prerequisites:** redox balancing
    from cluster 6, Gibbs energy from cluster 7, and equilibrium from cluster
    8; cluster 9 explains real rate losses.

The order is a route through prerequisites, not a claim that every learner must
move in a straight line. The broader general-chemistry curriculum will also
need states of matter, solutions, descriptive inorganic chemistry,
introductory organic chemistry, nuclear chemistry, synthesis, and analytical
measurement. The first ten clusters prioritize the shared foundation and the
shortest coherent route to redox and electrochemistry.

## How to use this map

Begin with the earliest cluster whose summary is not yet familiar. For each
cluster, test three levels of understanding:

- **Represent:** Can you read the symbols, diagrams, and terms without
  confusing a model with the matter it describes?
- **Reason:** Can you explain what is conserved, what can change, and which
  assumptions control the conclusion?
- **Connect:** Can you state how the idea could affect synthesis, structure,
  measurement, degradation, or service behavior?

When a later topic becomes difficult, trace the missing step backward. Trouble
balancing a redox reaction may indicate a gap in charge or stoichiometry;
trouble interpreting a cell potential may indicate a gap in redox,
thermodynamics, or equilibrium. Use external textbooks or courses for practice
problems, but use this map to decide which prerequisite the practice should
strengthen.

## Connect chemistry to the materials framework

The [processing–structure–properties–performance
framework](materials-science-engineering-framework.md) asks how a material's
history leads to its internal organization, measurable responses, and behavior
in service. Chemistry contributes to every link:

- **Processing:** stoichiometry, solution chemistry, reaction direction, and
  kinetics constrain synthesis, heat treatment, deposition, and curing.
- **Structure:** atomic electronic structure, bonding, molecular geometry, and
  intermolecular forces help explain which arrangements can form and persist.
- **Properties:** composition and bonding help shape electrical, optical,
  thermal, mechanical, and chemical responses under specified conditions.
- **Performance:** equilibrium, kinetics, redox chemistry, and interfaces help
  explain environmental change, corrosion, aging, and other routes by which a
  component can lose function.

Chemistry does not replace processing records, structural characterization,
property measurements, or service tests. It supplies models and constraints
that help connect those forms of evidence. For example, a redox model can
identify a plausible corrosion reaction, but it does not by itself establish a
component's corrosion rate or lifetime.

## Repository availability and broader scope

The links above cover all ten foundation clusters in this repository checkout.
They identify files available for review here; they do not claim that a
particular deployed or public site already includes them. The
[MOF Topology and Up–Down Design](mof-topology-up-down-design.md) case study is
also available in the repository and shows chemistry and structure guiding a
materials-design question, but it is not one of the ten foundation clusters.

The broader curriculum still has useful gaps: states of matter, solution
properties, descriptive inorganic chemistry, introductory organic and nuclear
chemistry, synthesis, and analytical measurement. Those gaps do not reduce the
availability count for the defined ten-cluster foundation.

## Related notes

- [Materials Science & Chemistry](index.md)
- [Chemical Language, the Mole, and Stoichiometry](chemical-language-mole-stoichiometry.md)
- [Electrochemical Cells, Potentials, and Applications](electrochemical-cells-potentials-applications.md)
- [Materials Science and Engineering Framework](materials-science-engineering-framework.md)
