# LangChain과 LangGraph

LangChain은 모델, prompt, retriever, 도구, 출력 처리를 조합하는 open-source 생태계입니다. LangGraph는 상태, node, transition으로 stateful workflow와 Agent를 구성합니다. API 변화가 빠르므로 예제는 현재 공식 문서와 대조해야 합니다.

Framework와 독립적인 domain model을 유지하고, state field와 reducer를 명시하며, 순수 계산과 부작용 도구를 분리하세요. Loop와 retry를 제한하고 checkpoint·resume 의미를 정의해야 합니다. Framework가 control flow를 대신 정의해 주는 것은 아닙니다.

반복되는 integration을 줄이거나 상태 전이를 더 잘 관찰하게 할 때 유용합니다. 짧은 고정 pipeline에는 직접 구현이 더 명확할 수 있습니다. Node 입력, typed output, 도구 결과, 오류, 최종 outcome을 추적하되 민감 데이터는 제거하세요.

## 더 읽기
- [LangChain documentation](https://python.langchain.com/docs/)
- [LangGraph documentation](https://langchain-ai.github.io/langgraph/)
