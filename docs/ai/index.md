# AI

This section develops core AI concepts into systems that retrieve evidence,
use tools, run workflows, and can be evaluated systematically. AI4Science is a
focused area within this section rather than a separate top-level domain.

## Foundations

Start with [Large Language Models](../learn/large-language-models.md), then
connect [Tokenization](../learn/tokenization.md),
[Transformers](../learn/transformers.md),
[Context Windows](../learn/context-windows.md),
[Embeddings](../learn/embeddings.md), and
[Prompting](../learn/prompting.md). These pages establish the representation
and inference layer used by later systems.

## Engineering systems

The build notes connect [Retrieval-Augmented Generation](../build/retrieval-augmented-generation.md),
[Reranking](../build/reranking.md), [Structured Output](../build/structured-output.md),
[Tool Use](../build/tool-use-and-function-calling.md),
[Agent Memory](../build/agent-memory.md),
[Workflows](../build/workflows-and-agents.md), and
[AI Agents](../build/ai-agents.md). Practical notes cover
[Pydantic](../tools/pydantic.md),
[LangChain and LangGraph](../tools/langchain-langgraph.md), and
[Vector Databases](../tools/vector-databases.md).

Across these pages, application code—not the model—owns authorization,
validation, execution, and stopping conditions.

## Evaluation

Use [Grounding and Hallucination](../evaluate/grounding-and-hallucination.md),
[LLM Evaluation](../evaluate/llm-evaluation.md), and
[RAG Evaluation](../evaluate/rag-evaluation.md) to separate source quality,
retrieval, reasoning, generation, and tool-execution failures.

## AI4Science

The [AI4Science](../ai4science/index.md) area applies these foundations, engineering
patterns, and evaluation methods to scientific discovery, simulation,
experiment planning, literature synthesis, and data analysis.
