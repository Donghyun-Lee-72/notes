# 임베딩

임베딩은 텍스트, 이미지, 분자, query 같은 객체를 고정 길이 벡터로 나타낸 것입니다. 선택한 유사도 함수가 특정 작업에 유용한 관계를 반영하도록 학습됩니다. 따라서 임베딩은 보편적인 의미 좌표가 아니며 모델, 학습 목표, 입력 형식, 도메인에 따라 달라집니다.

Cosine similarity, dot product, Euclidean distance가 흔히 쓰이지만 점수와 threshold는 서로 호환되지 않습니다. Bi-encoder는 query와 문서를 따로 인코딩해 대규모 검색에 효율적이고, cross-encoder는 쌍을 함께 읽어 더 정밀하지만 비용이 큽니다. 그래서 넓게 검색한 뒤 소수 후보를 rerank하는 구성이 흔합니다.

모델과 버전, 언어·도메인 범위, chunk 경계, 정규화와 거리 함수, metadata filter, 갱신·삭제 정책을 함께 결정하세요. 모델이 바뀌면 index migration으로 보고 다시 임베딩해야 합니다. 평가는 실제 query와 관련 문서, hard negative를 사용해 도메인과 언어별로 나눠 측정합니다.

## 더 읽기

- [Sentence-BERT](https://arxiv.org/abs/1908.10084)
- [Dense Passage Retrieval](https://arxiv.org/abs/2004.04906)
