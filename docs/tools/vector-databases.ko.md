# 벡터 데이터베이스

벡터 데이터베이스 또는 벡터 검색 엔진은 임베딩을 저장하고 nearest-neighbor 검색을 지원합니다. exact search는 모든 벡터와 비교하고, ANN index는 일부 recall을 지연시간과 메모리 효율과 교환합니다.

데이터베이스는 임베딩의 의미나 chunk가 질문에 답하는지를 결정하지 않습니다. 임베딩 모델, chunking, metadata, query, reranking은 별도 설계 요소입니다. 안정적인 외부 ID와 provenance, 모델·index version, 갱신·삭제 규칙, 접근 제어, 재구축 절차, index 지연 monitoring이 필요합니다.

권한과 collection filter는 가능하면 검색 단계에서 적용하세요. 모델이 허용되지 않은 결과를 무시할 것이라고 기대하면 안 됩니다. 시스템 선택은 corpus 규모, 갱신률, filter, latency, 운영 제약, 측정된 검색 품질을 기준으로 합니다.

ANN recall과 task retrieval recall은 다릅니다. 전자는 approximate result를 exact neighbor와 비교하고, 후자는 사람이 판단한 관련성과 비교합니다.

## 더 읽기
- [Hierarchical Navigable Small World Graphs](https://arxiv.org/abs/1603.09320)
