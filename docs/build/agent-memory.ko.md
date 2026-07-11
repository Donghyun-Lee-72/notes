# Agent Memory

Agent memory는 이후 의사결정에 영향을 주도록 저장된 정보입니다. 단순히 대화 기록 전체를 prompt에 넣는 것이 아니라 저장, 선택, 갱신, 삭제의 시스템입니다.

- **Working state:** 현재 실행에 필요한 정보
- **Episodic memory:** 과거 사건이나 작업 결과
- **Semantic memory:** 통합된 사실과 개념
- **Procedural memory:** 재사용 가능한 전략과 절차

후보를 선택하고, 출처와 보존 범위를 검증하고, 시간·provenance·confidence와 함께 저장한 뒤, 관련 있을 때만 검색해야 합니다. 충돌과 갱신을 처리하고 정책에 따라 만료·삭제해야 합니다.

무분별한 자동 기억은 오류, 민감정보, prompt injection을 보존할 수 있습니다. 검색 관련성도 진실을 보장하지 않습니다. 평가는 기억이 작업 성공을 높이는지뿐 아니라 낡은 정보와 정보 누출을 늘리지 않는지 확인해야 합니다.

## 더 읽기
- [Generative Agents](https://arxiv.org/abs/2304.03442)
- [MemGPT](https://arxiv.org/abs/2310.08560)
