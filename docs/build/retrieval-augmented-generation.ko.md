# 검색 증강 생성

검색 증강 생성(RAG)은 외부 증거를 검색해 선택한 일부를 모델 컨텍스트에 넣고 답을 생성합니다. 변화가 잦거나 전문적이거나 검증 가능한 자료에 답이 의존할 때 유용합니다. RAG 자체가 정답을 보장하지는 않지만 측정 가능한 증거 경로를 만듭니다.

## 파이프라인

자료 수집 → 구조 보존 parsing → chunking → lexical/vector/hybrid indexing → 후보 검색 → reranking과 filtering → context 조립 → 생성 → 인용 검증 순으로 볼 수 있습니다.

Lexical search는 정확한 이름과 희귀 용어에 강하고, dense retrieval은 표현이 달라도 의미가 비슷한 항목을 찾는 데 유리합니다. Chunk가 너무 작으면 문맥을 잃고 너무 크면 관련 근거가 희석됩니다. 실제 corpus에서 크기, overlap, 문서 구조, parent expansion을 평가해야 합니다.

인용은 같은 주제의 문서가 아니라 가까운 주장을 실제로 지지해야 합니다. 실패를 자료 부재, indexing·retrieval 실패, context 조립 실패, 생성의 증거 왜곡으로 구분하면 개선 지점을 찾을 수 있습니다.

## 더 읽기
- [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401)
- [BEIR](https://arxiv.org/abs/2104.08663)
