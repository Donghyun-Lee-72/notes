# Pydantic

Pydantic은 Python type annotation을 이용해 데이터를 검증하는 라이브러리입니다. LLM 구조화 출력, 도구 인자, 검색 metadata, 설정, API record의 경계에서 유용합니다.

```python
from typing import Literal
from pydantic import BaseModel, ConfigDict, Field

class SearchRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")
    query: str = Field(min_length=1, max_length=500)
    top_k: int = Field(default=5, ge=1, le=20)
    mode: Literal["lexical", "semantic", "hybrid"] = "hybrid"
```

이 schema는 선언하지 않은 필드와 범위를 벗어난 값을 거부합니다. 그러나 validation은 authorization이 아닙니다. 형식이 맞는 경로나 인용 ID도 금지된 대상이거나 존재하지 않을 수 있습니다. 권한과 domain invariant는 애플리케이션 코드에서 검사해야 합니다.

Pydantic v1과 v2는 API와 동작이 다르므로 프로젝트의 major version을 확인하고 현재 공식 문서를 사용하세요.

## 더 읽기
- [Pydantic documentation](https://docs.pydantic.dev/)
