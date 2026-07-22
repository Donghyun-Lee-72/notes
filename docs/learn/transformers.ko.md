# Transformer

Transformer는 attention과 position-wise transformation을 중심으로 한 신경망 구조입니다. 순환 신경망과 달리 학습 중 여러 위치의 표현을 병렬로 계산할 수 있습니다.

## Self-Attention

각 토큰 표현에서 학습된 projection으로 query, key, value를 만듭니다. query와 key의 유사도로 attention weight를 구하고, value의 가중합으로 해당 위치의 문맥 표현을 만듭니다.

<div class="display-equation" role="math" aria-label="Q, K, V의 attention은 Q K 전치를 d 아래 첨자 k의 제곱근으로 나눈 값에 softmax를 적용한 뒤 V를 곱한 값입니다.">
  Attention(<var>Q</var>, <var>K</var>, <var>V</var>) =
  softmax(<var>QK</var><sup>T</sup> / √<var>d</var><sub>k</sub>)<var>V</var>
</div>

Multi-head attention은 서로 다른 projection으로 이 연산을 반복합니다. 순서 정보는 positional representation으로 추가하며, 자기회귀 decoder는 미래 출력 토큰을 볼 수 없도록 causal mask를 사용합니다. 생성 시에는 이전 key와 value를 cache해 prefix 전체를 매번 다시 계산하는 비용을 줄입니다.

Encoder-only, decoder-only, encoder-decoder 구조가 대표적입니다. 표준 attention은 전체 시퀀스 계산에서 길이에 대해 이차 시간·메모리 비용이 들 수 있습니다. Attention weight를 곧바로 사람에게 충실한 추론 설명으로 해석해서도 안 됩니다.

## 더 읽기

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
