# Knowledge Notes

Knowledge Notes is a public guide to durable concepts in artificial intelligence and
the scientific domains in which those systems are used. It connects language-
model engineering with source-linked notes in materials science and scientific
instrumentation rather than collecting every new framework or model release.

## Choose a Learning Path

The library is organized around two knowledge domains:

- **[AI & AI4Science](ai-ai4science/index.md):** model foundations, retrieval,
  agents, evaluation, and the use of these systems in scientific work.
- **[Materials Science & Engineering](materials-science/index.md):** structure,
  processing, properties, characterization, and scientific instrumentation.

### Understand the model layer

Start with [Large Language Models](learn/large-language-models.md), then read
[Tokenization](learn/tokenization.md), [Transformers](learn/transformers.md),
and [Context Windows](learn/context-windows.md). These pages explain what the
model consumes, how it mixes information, and why application-level context
management matters.

### Build a grounded application

Read [Embeddings](learn/embeddings.md),
[Retrieval-Augmented Generation](build/retrieval-augmented-generation.md), and
[Vector Databases](tools/vector-databases.md). Follow with
[RAG Evaluation](evaluate/rag-evaluation.md) before choosing an indexing or
retrieval stack.

### Build a controlled agent

Begin with [AI Agents](build/ai-agents.md), then connect
[Tool Use and Function Calling](build/tool-use-and-function-calling.md) with
[Structured Output](build/structured-output.md). The key theme is that an LLM
may propose actions, but application code owns validation, authorization,
execution, and stopping.

### Measure reliability

[Grounding and Hallucination](evaluate/grounding-and-hallucination.md) explains
the evidence problem. [LLM Evaluation](evaluate/llm-evaluation.md) introduces a
layered evaluation strategy, while [RAG Evaluation](evaluate/rag-evaluation.md)
separates retrieval failures from generation failures.

### Study materials science and instrumentation

Use the [Materials Science](materials-science/index.md) section for domain
foundations. The first detailed guide, [Electron Microscopy: SEM and TEM](learn/electron-microscopy-sem-tem.md),
connects electron–matter interactions to image contrast, diffraction, and
spectroscopy while separating direct measurements from common visual
shortcuts such as the “3D SEM image” description.

## How to Read These Notes

Each page aims to answer five questions:

1. What is the concept?
2. How does it work?
3. Which design choices matter?
4. How does it fail?
5. How should it be evaluated?

Use the [Glossary](glossary.md) for quick definitions and
[References](references.md) for primary papers and official documentation.
