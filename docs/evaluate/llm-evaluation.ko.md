# LLM 평가

LLM 평가는 정의된 작업 분포에서 모델 기반 시스템이 요구사항을 충족하는지 측정합니다. 사용자, 입력, 허용 출력, 실패 비용, 운영 조건을 명시해야 하며 일반 benchmark 점수는 특정 애플리케이션의 보장이 아닙니다.

모델, 컨텍스트, 도구, 애플리케이션, 최종 outcome을 계층별로 평가하세요. 실제 production 작업과 어려운 실패를 표본화하고, 일반 사례뿐 아니라 경계 조건, 모호한 요청, 정보 부족, 적대적 입력을 포함합니다. 개발에 사용한 자료와 held-out 평가 자료를 분리해야 합니다.

Schema, 계산, program test에는 결정론적 검사가 적합합니다. 인간 평가는 미묘한 정확성과 고위험 판단에 중요합니다. LLM judge는 확장성이 있지만 위치, 길이, 문체, 자기 선호 bias가 있어 인간 label로 calibration해야 합니다.

품질과 함께 tail latency, 비용, retry, tool call, 거부 동작을 측정하세요. 모델, prompt, index, 도구 계약, 애플리케이션 로직이 바뀔 때 regression evaluation을 다시 실행합니다.

## 더 읽기
- [HELM](https://arxiv.org/abs/2211.09110)
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)
