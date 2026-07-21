# Notes

Notes is a compact guide to durable concepts in artificial intelligence,
materials science, and chemistry. It connects related ideas across pages rather
than collecting every new framework, model release, or isolated definition.

## Choose a Learning Path

The library is organized around two knowledge domains:

- **[AI](ai/index.md):** model foundations, retrieval, agents,
  evaluation, and an AI4Science area for scientific applications.
- **[Materials Science & Chemistry](materials-science/index.md):** structure,
  processing, properties, reactions, characterization, and scientific
  instrumentation.

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

### Apply AI to science

Use [AI4Science](ai4science/index.md) to connect evidence,
tools, workflows, uncertainty, and evaluation to scientific discovery,
simulation, experiment planning, literature synthesis, and data analysis.

### Study materials science, chemistry, and instrumentation

Use the [Materials Science & Chemistry](materials-science/index.md) section for
domain foundations. The first detailed guide, [Electron Microscopy: SEM and TEM](materials-science/electron-microscopy-sem-tem.md),
connects electron–matter interactions to image contrast, diffraction, and
spectroscopy while separating direct measurements from common visual
shortcuts such as the “3D SEM image” description.

## How to Read These Notes

Pages are designed to make five things easy to find:

1. What is the idea or method?
2. How does it work?
3. Which choices or conditions matter?
4. What can fail or mislead?
5. Which related note should come next?

Use the [Glossary](glossary.md) for quick definitions and
[References](references.md) when a topic benefits from primary papers or
official documentation.
