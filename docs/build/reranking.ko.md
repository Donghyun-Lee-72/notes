# 재순위화

Reranking은 초기 검색기가 반환한 작은 후보 집합에 더 정밀한 점수 모델을 적용합니다. 빠른 1단계 검색으로 recall을 확보하고, 느리지만 정확한 2단계에서 순서를 개선하는 방식입니다.

Cross-encoder, late-interaction model, 학습된 ranker가 대표적입니다. 후보에 없는 증거는 복구할 수 없으므로 1단계 recall이 상한을 결정합니다. 후보 수, 모델, latency, batching, 최종 context 크기를 함께 선택하고, 중복 chunk가 context를 채우지 않도록 해야 합니다.

평가에서는 reranking 전후 ranking metric과 최종 답 품질을 비교하고 hard negative를 포함하세요. 품질 향상뿐 아니라 지연시간과 비용도 함께 보고해야 합니다.
