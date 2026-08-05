# Glossary

## Activity

A dimensionless measure that places a component's chemical potential on a
specified standard-state scale. See [Chemical Potential, Activity, and Partial
Molar Properties](materials-science/chemical-potential-activity-and-partial-molar-properties.md).

## Agent

A system that pursues a goal through state, action selection, observations, and
stopping conditions. See [AI Agents](build/ai-agents.md).

## Attention

A mechanism that computes context-dependent combinations of value vectors using
weights derived from query-key similarity. See [Transformers](learn/transformers.md).

## Bond Energy

The energy required to separate a bonded pair relative to a stated reference
state. In a pair-potential model, it is the well depth, not a bulk elastic
modulus. See [Atomic Structure and Interatomic Bonding in
Materials](materials-science/atomic-structure-and-interatomic-bonding.md).

## Chemical Potential

The partial molar Gibbs energy of a component at stated temperature, pressure,
and composition. It measures the marginal change in Gibbs energy when that
component's amount changes under the declared constraints. See [Chemical
Potential, Activity, and Partial Molar
Properties](materials-science/chemical-potential-activity-and-partial-molar-properties.md).

## Chunk

A retrievable unit created from a larger document. Chunk boundaries affect both
retrieval precision and the amount of surrounding context preserved.

## Context Window

The tokenized information a model can process for one generation, including
input and reserved output. See [Context Windows](learn/context-windows.md).

## Crystallographic Direction

A lattice direction represented by a reduced integer index set such as
`[uvw]`, interpreted in a declared crystallographic basis. See
[Crystallographic Directions and
Planes](materials-science/crystallographic-directions-and-planes.md).

## Crystal Structure

A description that combines a translational lattice with the basis attached to
each lattice point. See [Crystal Structures and Unit
Cells](materials-science/crystal-structures-unit-cells.md).

## Defect

A departure from a declared ideal reference structure, classified by site,
species, geometry, and dimensionality. See [Imperfections and Defects in
Solids](materials-science/imperfections-and-defects-in-solids.md).

## Diffusivity

The transport coefficient that relates flux to a declared gradient under a
specified model, species, reference frame, and set of conditions. See
[Diffusion and Transport in
Solids](materials-science/diffusion-and-transport-in-solids.md).

## Embedding

A vector representation optimized so a chosen similarity function reflects
useful relationships for a task. See [Embeddings](learn/embeddings.md).

## Grounding

Connecting generated claims to inspectable evidence or verified external state.
See [Grounding and Hallucination](evaluate/grounding-and-hallucination.md).

## Hallucination

Fluent output that is false, unsupported, or misleading in its use context.

## Large Language Model (LLM)

A neural model trained to estimate distributions over token sequences. See
[Large Language Models](learn/large-language-models.md).

## Material Property

A measured or modeled response to a specified stimulus under stated material
and test conditions. It is not the same as the performance of a manufactured
part. See [Materials Classification and
Selection](materials-science/materials-classification-and-selection.md).

## Partial Molar Property

The change in an extensive property per incremental amount of one component at
fixed temperature, pressure, and amounts of all other components. See [Chemical
Potential, Activity, and Partial Molar
Properties](materials-science/chemical-potential-activity-and-partial-molar-properties.md).

## Phase

A macroscopic region whose representative samples have the same relevant
physical and chemical characteristics. A phase boundary is marked by a
discontinuous change in one or more of those characteristics, which can
include composition or another thermodynamic property rather than only state
or structure. See [Unary Phase
Equilibria](materials-science/unary-phase-equilibria.md).

## Phase Rule

A constraint count relating components, coexisting phases, and independent
intensive variables at equilibrium. See [Unary Phase
Equilibria](materials-science/unary-phase-equilibria.md).

## Prompt

The instructions, data, examples, and output requirements supplied to a model
for a generation. See [Prompting](learn/prompting.md).

## RAG

Retrieval-augmented generation: retrieving external evidence and including a
selected subset in the generation context. See
[Retrieval-Augmented Generation](build/retrieval-augmented-generation.md).

## Reranker

A model or scoring stage that reorders a limited candidate set produced by an
initial retriever. See [Reranking](build/reranking.md).

## Structured Output

Model output constrained to a machine-readable contract such as JSON Schema or
a typed record. See [Structured Output](build/structured-output.md).

## Thermodynamic Potential

A state function, such as internal energy, enthalpy, Helmholtz energy, or Gibbs
energy, organized so its natural variables match a useful set of constraints.
See [Thermodynamic Systems, Laws, and
Potentials](materials-science/thermodynamic-systems-laws-potentials.md).

## Tie Line

A line joining the equilibrium compositions of coexisting phases at fixed
temperature and pressure. On a binary temperature–composition diagram it is
horizontal, and its endpoints give phase compositions. See [Binary Solutions
and Phase Diagrams](materials-science/binary-solutions-and-phase-diagrams.md).

## Token

A discrete identifier produced by a tokenizer and processed by a model. It may
represent a word, subword, symbol, whitespace, or bytes. See
[Tokenization](learn/tokenization.md).

## Tool Use

A controlled interface through which a model-backed application requests an
external function or service. See
[Tool Use and Function Calling](build/tool-use-and-function-calling.md).

## Unary System

A thermodynamic system with one chemically independent component, even when
that component occupies more than one phase. See [Unary Phase
Equilibria](materials-science/unary-phase-equilibria.md).

## Vector Database

A database or search system that stores embeddings and supports nearest-
neighbor retrieval. See [Vector Databases](tools/vector-databases.md).
