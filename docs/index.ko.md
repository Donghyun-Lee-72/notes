# Notes

Notes는 인공지능, 재료과학, 화학의 오래가는 개념을 설명하는 공개 가이드입니다. 특정 모델이나 프레임워크의 새 소식을 모두 모으기보다, 언어 모델 공학과 AI4Science를 출처 기반 도메인 노트에 연결합니다.

지식은 두 영역으로 분류합니다.

- **[AI](ai/index.md):** 모델 기초, 검색, Agent, 평가와 하위 AI4Science 영역
- **[재료과학·화학](materials-science/index.md):** 구조, 공정, 물성, 반응, 분석법과 과학 계측

## 학습 경로

### 모델 계층 이해하기

[대규모 언어 모델](learn/large-language-models.md)에서 시작해 [토큰화](learn/tokenization.md), [Transformer](learn/transformers.md), [컨텍스트 윈도](learn/context-windows.md)를 읽으세요. 모델이 무엇을 입력으로 받고, 정보를 어떻게 혼합하며, 애플리케이션이 왜 컨텍스트를 관리해야 하는지 설명합니다.

### 근거 기반 애플리케이션 구축하기

[임베딩](learn/embeddings.md), [검색 증강 생성](build/retrieval-augmented-generation.md), [벡터 데이터베이스](tools/vector-databases.md)를 읽은 뒤, 검색 기술을 선택하기 전에 [RAG 평가](evaluate/rag-evaluation.md)를 확인하세요.

### 통제 가능한 Agent 구축하기

[AI Agent](build/ai-agents.md), [도구 사용과 함수 호출](build/tool-use-and-function-calling.md), [구조화 출력](build/structured-output.md)을 연결해 읽으세요. LLM은 행동을 제안할 수 있지만 검증, 권한 부여, 실행, 종료는 애플리케이션 코드가 담당해야 합니다.

### 신뢰성 측정하기

[근거성과 환각](evaluate/grounding-and-hallucination.md)은 증거 문제를 설명합니다. [LLM 평가](evaluate/llm-evaluation.md)는 계층별 평가 전략을, [RAG 평가](evaluate/rag-evaluation.md)는 검색 실패와 생성 실패를 구분하는 방법을 다룹니다.

### 과학에 AI 적용하기

[AI4Science](ai4science/index.md) 영역에서는 근거, 도구, workflow, 불확실성, 평가를 과학적 발견, 시뮬레이션, 실험 계획, 문헌 종합, 데이터 분석과 연결합니다.

### 재료과학·화학과 분석 장비 공부하기

[재료과학·화학](materials-science/index.md) 섹션에서 분야 기초를 찾을 수 있습니다. 첫 상세 문서인 [전자현미경: SEM과 TEM](materials-science/electron-microscopy-sem-tem.md)은 전자–물질 상호작용을 영상 대비, 회절, 분광과 연결하고, 흔히 말하는 “3D SEM 영상”과 실제 높이 측정을 구분합니다.

## 문서 읽는 법

각 문서는 다섯 질문에 답하는 것을 목표로 합니다.

1. 이 개념은 무엇인가?
2. 어떻게 작동하는가?
3. 어떤 설계 선택이 중요한가?
4. 어떻게 실패하는가?
5. 어떻게 평가해야 하는가?

빠른 정의는 [용어집](glossary.md), 원 논문과 공식 문서는 [참고문헌](references.md)을 이용하세요. 영어 문서가 canonical 원문이며 한국어 파일은 보관 중이고 현재 공개 빌드에서는 제외됩니다.
