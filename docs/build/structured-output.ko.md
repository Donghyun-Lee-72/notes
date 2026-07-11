# 구조화 출력

구조화 출력은 모델이 JSON Schema, typed record, 함수 인자 같은 기계 판독 계약을 따르도록 요구합니다. 불안정한 문자열 parsing을 줄이지만 값의 진실성과 안전성을 보장하지는 않습니다.

검증은 세 계층으로 나눌 수 있습니다.

1. 문법 검증: parsing 가능한가?
2. Schema 검증: 필드, type, 범위, enum이 맞는가?
3. 의미 검증: domain rule, 증거, 권한을 만족하는가?

최소 schema를 사용하고 missing, unknown, not applicable을 구분하세요. 생성 데이터와 사용자 설명을 분리하고 downstream consumer가 있으면 schema를 versioning해야 합니다. 검증 실패 retry는 안전하고 횟수가 제한된 경우에만 수행하세요. Pydantic은 구조를 확인할 수 있지만 인용의 실제 존재나 주장에 대한 지지는 애플리케이션이 별도로 검증해야 합니다.
