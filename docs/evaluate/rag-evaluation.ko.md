# RAG 평가

RAG 평가는 필요한 증거를 검색했는지와 생성된 답이 그 증거를 올바르게 사용했는지를 분리합니다. 최종 답만 평가하면 어느 계층이 실패했는지 알기 어렵습니다.

검색 평가는 Recall@k, Precision@k, MRR, nDCG를 사용할 수 있습니다. 최종 context와 같은 granularity에서 평가하고 query type, 문서 종류, 시점, 언어, answerability별로 나누어 보세요.

생성 평가는 정확성, 제공된 증거에 대한 faithfulness, completeness, citation precision·recall, 증거 부족 시 abstention을 포함합니다. 사실상 맞는 답도 제공된 증거가 지지하지 않으면 grounded answer는 아닙니다. 반대로 증거를 충실히 반복해도 출처가 오래되거나 틀릴 수 있습니다.

정답 증거를 직접 제공하는 oracle-context test로 generation 병목을 분리하고, retriever도 generation 없이 평가하세요. Distractor, near duplicate, 상충 출처, 답할 수 없는 질문, 여러 증거가 필요한 질문을 포함합니다.

## 더 읽기
- [BEIR](https://arxiv.org/abs/2104.08663)
- [RAGAS](https://arxiv.org/abs/2309.15217)
- [ARES](https://arxiv.org/abs/2311.09476)
