# 화학 평형, 산과 염기, 용해도

**화학 평형**은 가역 과정의 정반응 속도와 역반응 속도가 같아져 거시적 조성이
시간에 따라 더 이상 변하지 않는 동적 상태입니다. 평형 추론은 반응 조건을
조성과 연결합니다. 용액 합성, 침전, 용해, 화학종 분포, pH를 제어하는 데
필수적이지만, 계가 그 상태에 얼마나 빨리 도달하는지는 알려 주지 않습니다.

이 문서에서는 닫힌 계 또는 조성이 달리 제어되는 계를 명시된 온도에서
다룹니다. 달리 밝히지 않으면 수치 예제에는 가상의 상수와 묽은 이상 용액
근사를 사용합니다. 실제 용액에는 활동도 계수, 완전한 물질 수지와 전하 수지,
실제로 평형에 가까워졌음을 보여 주는 속도론적 근거가 필요할 수 있습니다.

## 동적 균형은 화학적 비활성을 뜻하지 않는다

가역 반응이 평형을 이루려면 정반응 속도와 역반응 속도가 같아야 합니다. 개별
분자 사건은 계속 일어나지만, 벌크 규모에서 관찰하는 양이나 농도는 일정하게
유지됩니다. 속도가 같다고 해서 반응물 농도와 생성물 농도가 같을 필요는
없습니다. 또한 측정값이 일정하다는 사실만으로는 평형을 입증할 수 없습니다.
반응이 검출하기에 너무 느리거나 외부에서 계를 일정하게 유지하고 있을 수도
있기 때문입니다
([OpenStax, *Chemistry 2e*, §13.1](https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria);
[IUPAC Gold Book, “chemical equilibrium”](https://goldbook.iupac.org/terms/view/C01023)).

평형 조성은 표시된 반응, 온도, 부과된 제약 조건에 따라 달라집니다. 이러한
제약 조건이 같고 준안정 상태나 속도론적으로 갇힌 상태가 개입하지 않으면,
반응물에서 시작하든 생성물에서 시작하든 같은 평형 상태에 도달할 수 있습니다.
평형 상수는 최종 조성 사이의 관계를 나타내며, 그 크기로 평형에 도달하는 데
필요한 시간을 정할 수는 없습니다. `K`가 크다는 것은 표시된 반응의 반응 지수
안에서 생성물 활동도가 유리하다는 뜻이지, 모든 반응물이 문자 그대로
소비된다는 보장은 아닙니다
([OpenStax, §13.2](https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants)).

## 활동도로 `Q`와 `K` 구성하기

다음 반응에서

`alpha A + beta B ⇌ gamma C + delta D`

열역학적 **반응 지수**는

`Q = (a_C^gamma a_D^delta)/(a_A^alpha a_B^beta)`

입니다. 각 `a_i`는 명시된 표준 상태에 대한 무차원 **활동도**입니다. 생성물의
화학량론적 지수는 양수이고 반응물의 지수는 음수이므로 위 식과 같이 분자와
분모에 놓입니다. 평형에서는 `Q = K`이며, 표준 평형 상수 `K`는
무차원입니다. 특정 온도에서 표시된 바로 그 반응에 대해 정해집니다
([IUPAC Gold Book, “activity”](https://goldbook.iupac.org/terms/view/A00115),
[“equilibrium constant”](https://goldbook.iupac.org/terms/view/E02177),
[“standard equilibrium constant”](https://goldbook.iupac.org/terms/view/S05915)).

활동도는 표준 상태 척도에서 화학 퍼텐셜을 나타냅니다. 기초 과정에서 흔히
사용하는 치환은 다음과 같습니다.

- 용질에는 `a_i ≈ gamma_i c_i/c°`를 사용합니다. `gamma_i`는 활동도
  계수이고 표준 물질량 농도는 `c° = 1 mol L^-1`입니다.
- 이상 기체에는 `a_i ≈ p_i/p°`를 사용합니다.
- 표준 상태의 순수한 고체나 순수한 액체에는 `a_i ≈ 1`을 사용합니다.

`gamma_i ≈ 1`로 놓으면 활동도비를 농도 수치의 비로 바꿀 수 있습니다. 이는
묽은 용액 근사이지 정의가 아닙니다. 이온 세기, 전하, 용매, 온도, 조성에 따라
활동도 계수는 1에서 크게 벗어날 수 있습니다
([IUPAC Gold Book, “activity coefficient”](https://goldbook.iupac.org/terms/view/A00116);
[OpenStax, §13.2](https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants)).
순수한 고체가 간략한 반응 지수 식에 나타나지 않는 이유는 그 활동도가
일정하기 때문이지, 고체가 화학적으로 중요하지 않기 때문이 아닙니다. 이
제약을 적용하려면 해당 순수 상이 실제로 존재해야 합니다.

반응식은 정의의 일부입니다. 반응을 뒤집으면 `K`는 `1/K`가 되고, 모든 계수에
`n`을 곱하면 `K`는 `K^n`이 됩니다. 반응식을 더할 때에는 소거되는 화학종을
제거한 뒤 각 반응의 상수를 곱합니다.

## `Q/K`로 방향 예측하기

현재 반응 지수와 평형 상수를 비교하면 방향을 직접 판정할 수 있습니다.

- `Q < K`: 알짜 정반응이 진행되어 `Q`가 커집니다.
- `Q > K`: 알짜 역반응이 진행되어 `Q`가 작아집니다.
- `Q = K`: 명시된 조성이 평형에 있습니다.

이 판정은 알짜 방향을 예측할 뿐, 속도나 조성 변화의 크기는 알려 주지
않습니다
([OpenStax, *Chemistry 2e*, §§13.2–13.4](https://openstax.org/books/chemistry-2e/pages/13-4-equilibrium-calculations)).

**방향 점검.** 다음과 같은 설명용 회합 반응을 생각해 봅시다.

`M^2+ + L^- ⇌ ML^+`

어떤 온도에서 `K = 40.0`이라고 합시다. 전하는
`(+2) + (-1) = (+1)`로 맞습니다. 현재 활동도가
`a(M^2+) = 0.100`, `a(L^-) = 0.200`, `a(ML^+) = 0.400`이라면

`Q = 0.400/(0.100 × 0.200) = 20.0`

입니다. `Q < K`이므로 `Q = 40.0`이 될 때까지 혼합물에는 `ML^+`를
형성하려는 알짜 경향이 있습니다. 이 계산은 변화가 빠르다는 뜻이 아니며,
물질 수지와 평형 계산 없이는 최종 세 활동도를 정할 수도 없습니다.

## `Q` 또는 `K`를 바꾸어 평형 교란하기

르샤틀리에 추론에 따르면 평형에 있던 계는 교란을 받으면 그 교란을 부분적으로
상쇄하는 알짜 변화로 반응합니다. 더 정확한 절차는 교란이 `Q`를 어떻게
바꾸는지 계산하고, 새로운 `Q`를 `K`와 비교한 다음 물질 수지를 적용하는
것입니다. 용질의 양이나 기체의 부분 압력을 바꾸면 대개 `Q`가 바뀌고, 온도를
바꾸면 `K`가 바뀔 수 있습니다
([OpenStax, §13.3](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle)).

흔한 과도한 적용을 막으려면 다음 한계를 알아야 합니다.

- 촉매는 양쪽 방향을 모두 빠르게 하여 평형에 도달하는 시간을 줄일 수 있지만,
  `K`나 평형 조성을 바꾸지 않습니다.
- 이미 존재하는 순수한 고체를 더 넣어도 그 활동도는 변하지 않으므로 평형이
  이동하지 않습니다. 다만 표면적 변화는 속도에 영향을 줄 수 있습니다.
- 압축은 기체 활동도를 통해 영향을 줍니다. 이상 혼합물에 비활성 기체를
  일정한 부피에서 넣으면 반응 기체의 부분 압력은 변하지 않습니다. 전체
  압력을 일정하게 유지하면 이에 따르는 부피 변화가 부분 압력을 바꿀 수
  있습니다.
- “계가 변화를 완전히 없앤다”는 표현은 지나칩니다. 반응은 일반적으로
  부분적이며 그 크기는 보존 법칙의 제약을 받습니다.
- 동시에 여러 교란이 생기거나, 혼합물이 비이상적이거나, 여러 반응이
  결합되어 있거나, 상이 사라지는 경우에는 이 경험 법칙이 `Q/K` 계산을
  대신할 수 없습니다.

## 상보적인 두 산·염기 모형 사용하기

브뢴스테드–로우리 모형에서 산은 하이드론(양성자)을 주고 염기는 이를
받습니다. 물에서

`HA + H2O ⇌ H3O^+ + A^-`

에는 짝산·짝염기 쌍 `HA/A^-`와 `H3O^+/H2O`가 있습니다. 각 쌍의 두
화학종은 양성자 하나와 전하 한 단위만큼 차이 납니다. `H^+(aq)`도 흔히 쓰는
축약 표기이지만 `H3O^+`는 물의 참여를 명시합니다
([IUPAC Gold Book, “acid”](https://goldbook.iupac.org/terms/view/A00071),
[“Brønsted base”](https://goldbook.iupac.org/terms/view/B00745),
[“conjugate acid–base pair”](https://goldbook.iupac.org/terms/view/C01266);
[OpenStax, §14.1](https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases)).

루이스 모형은 전자쌍을 추적합니다. 루이스 산은 전자쌍을 받고 루이스 염기는
전자쌍을 제공하여 부가물을 만듭니다. 예를 들어

`Ag^+ + 2 NH3 ⇌ [Ag(NH3)2]^+`

에서 `Ag^+`는 전자쌍 받개이고 `NH3`는 주개이며, 전체 전하는 `+1`로
유지됩니다. 양성자는 브뢴스테드 염기로부터 전자쌍을 받으므로 이 모형에는
양성자 이동도 포함되지만, 양성자 이동이 없는 착물 형성도 포함됩니다
([IUPAC Gold Book, “Lewis acid”](https://goldbook.iupac.org/terms/view/L03508),
[“Lewis base”](https://goldbook.iupac.org/terms/view/L03511);
[OpenStax, §15.2](https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases)).
두 분류는 서로 다른 계수 정리 질문에 답합니다. 어느 쪽도 모든 반응을 모든
유용한 분류에서 산·염기 반응으로 만들지는 않습니다.

## pH, 세기, 농도 구분하기

열역학적으로

`pH = -log10 a(H^+)`

이므로 pH는 로그 안에 차원이 있는 농도를 넣는 대신 수소 이온 활동도에
기초합니다. 충분히 묽고 이상적이라고 볼 수 있는 용액에서는
`a(H^+) ≈ c(H3O^+)/c°`로 놓아 익숙한 농도 계산을 할 수 있습니다.
실용적인 pH 측정은 조작적으로 정의되며 표준, 전극, 접합부, 온도, 시료
매질과 관련된 불확도를 가집니다
([IUPAC Gold Book, “pH”](https://goldbook.iupac.org/terms/view/P04524);
[OpenStax, §14.2](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh)).
이 로그 척도에서 pH가 한 단위 차이 나면 수소 이온 활동도는 10배
차이 납니다.

**산의 세기**는 명시된 용매와 온도에서 양성자를 주려는 평형 경향입니다.
`HA`의 활동도 기반 해리 상수는

`K_a = a(H3O^+) a(A^-)/a(HA)`

이고 `pK_a = -log10 K_a`입니다. 비교 가능한 조건에서 `K_a`가 클수록,
`pK_a`가 작을수록 해리 정도가 큽니다. 반면 **농도**는 어떤 부피에 산을
얼마나 넣었는지를 나타냅니다. 따라서 묽은 강산은 더 진한 약산보다 pH가 높을
수 있습니다. 산의 세기는 부식성과 같지 않습니다. 부식성은 농도, 용매,
속도론, 온도, 노출된 재료에도 좌우됩니다
([IUPAC Gold Book, “acid dissociation constant”](https://goldbook.iupac.org/terms/view/15441);
[OpenStax, §14.3](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases)).

염기 `B`에 대응하는 평형은

`B + H2O ⇌ BH^+ + OH^-`

이고, 비교 가능한 조건에서 `K_b`가 클수록 강한 염기입니다. 같은 수용액
매질과 같은 온도에 있는 짝산·짝염기 쌍에는
`K_a(BH^+) K_b(B) = K_w` 관계가 있으며,
`K_w = a(H3O^+) a(OH^-)`입니다. 따라서 산과 염기의 세기는 조건과 서로에
대해 상대적인 양이며, 어느 쪽도 보유량을 나타내는 농도가 아닙니다
([OpenStax, §14.3](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases)).

**약산 계산 점검.** 가상의 일양성자산이
`K_a = 1.00 × 10^-5`, 초기 농도 `c_0 = 0.100 mol L^-1`를 갖는다고
합시다. 물의 자동 이온화와 활동도 계수 보정을 무시할 수 있다면 평형에서
`x = c(H3O^+) = c(A^-)`로 놓습니다. 농도를
`c° = 1 mol L^-1`에 대한 비로 사용하면

`1.00 × 10^-5 = (x/c°)^2/[(c_0 - x)/c°]`

입니다. 이차방정식의 양의 근은

`x = 9.95012... × 10^-4 mol L^-1`

이므로 초기 산의 `0.995%`만 해리하며,

`pH ≈ -log10(x/c°) = 3.00217... ≈ 3.00`

입니다. 단축 계산
`x ≈ sqrt(K_a c_0 c°) = 1.00 × 10^-3 mol L^-1`은 정확한 `x`와 약
`0.50%` 차이가 나며, `x/c_0 < 1%`이므로 자기 일관성이 있습니다. 근사는
계산한 뒤 점검해야 하며, 산을 약산이라고 부른다는 이유만으로 가정해서는 안
됩니다.

## 완충 용액과 적정을 화학량론 뒤 평형 문제로 다루기

완충 용액은 약한 짝산·짝염기 쌍의 두 성분을 함께 가지며, 그 양은 소량 첨가한
산이나 염기를 소비하기에 충분합니다. 첨가한 강산은 먼저 염기 성분을
소비하고, 첨가한 강염기는 먼저 산 성분을 소비합니다. 거의 완결되는 이
화학량론적 단계가 끝난 뒤 남은 쌍이 평형을 이룹니다. 농도와 활동도 근사
아래에서 Henderson–Hasselbalch 식은

`pH ≈ pK_a + log10(c(A^-)/c(HA))`

입니다. 두 성분이 모두 상당량 남아 있을 때 가장 잘 적용됩니다. 비는 주로
pH를 결정하지만, 두 성분의 절대량과 용액 부피는 완충 작용이 실패하기 전에
흡수할 수 있는 강산 또는 강염기의 양을 결정합니다
([OpenStax, §14.6](https://openstax.org/books/chemistry-2e/pages/14-6-buffers)).

**완충 계산 점검.** 가상의 완충 용액 한 개에 `pK_a = 4.80`,
`0.0200 mol HA`, `0.0300 mol A^-`가 들어 있다고 합시다. 처음에는

`pH ≈ 4.80 + log10(0.0300/0.0200) = 4.976... ≈ 4.98`

입니다. 부피 변화를 무시할 수 있는 조건에서 강산 `0.00500 mol`을 넣으면
그만큼의 `A^-`가 `HA`로 바뀝니다. 새 물질량은 각각 `0.0250 mol`이므로
`pH ≈ 4.80`입니다. 이 계산은 강산이 모두 소비되고 두 완충 성분이 모두
남아 있을 때만 유효합니다. `0.0300 mol` 이상을 넣으면 원래의 염기 성분이
고갈되므로 다른 계산이 필요합니다.

산·염기 적정도 같은 순서를 따릅니다
([OpenStax, §14.7](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations)).

1. 적정제를 많이 넣기 전에는 분석 대상 자체의 평형이 지배합니다.
2. 약산을 강염기로 적정할 때 당량점 전에는 중화 반응이 `HA/A^-` 물질량을
   정하고 혼합물은 완충 용액이 됩니다.
3. 반당량점에서는 두 물질량이 같으므로 `pH ≈ pK_a`입니다.
4. 당량점에서는 산과 염기의 화학량론적 물질량이 같습니다. 이때 pH가 반드시
   7인 것은 아닙니다. 약산의 짝염기가 물을 가수분해하여 용액을 염기성으로
   만들 수 있습니다.
5. 당량점을 지나면 대개 과량의 강한 적정제가 pH를 지배합니다.

**당량점**은 화학량론적 조건이고, 지시약 또는 기기상의 **종말점**은 당량점을
추정하는 데 사용하는 관찰 신호입니다. 두 점은 정의상 같지 않습니다. 희석,
활동도, 여러 산성 자리, 부반응, 전극 응답은 모두 실제 적정 곡선을 바꿀 수
있습니다.

## 이온 활동도곱으로 용해도 나타내기

다음 용해 반응에서

`MX2(s) ⇌ M^2+ + 2 X^-`

순수한 `MX2(s)`가 존재할 때 용해도곱은

`K_sp = a(M^2+) a(X^-)^2`

입니다. 이에 대응하는 이온 활동도곱 `Q_sp`에는 현재 용액의 활동도를
사용합니다. `Q_sp < K_sp`이면 불포화이고, 고체가 존재하면서
`Q_sp = K_sp`이면 포화 평형이며, `Q_sp > K_sp`이면 침전하려는
열역학적 경향이 있습니다. `Q_sp > K_sp`여도 핵생성 또는 성장 장벽 때문에
침전이 늦어질 수 있습니다
([IUPAC Gold Book, “solubility product”](https://goldbook.iupac.org/terms/view/S05742);
[OpenStax, §15.1](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution)).

`K_sp`는 몰 용해도 `s`가 아니며, 두 양은 화학량론을 통해 연결됩니다.
가상의 `MX2`가 `K_sp = 4.00 × 10^-12`을 갖고, 용액이 이상적으로 묽으며
두 이온의 다른 공급원이 없다고 가정합시다. 순수한 물에서는

`4.00 × 10^-12 = (s/c°)(2s/c°)^2 = 4(s/c°)^3`

이므로

`s = 1.00 × 10^-4 mol L^-1`

입니다. 염의 화학량론이 다르면 지수와 수치 계수도 달라집니다. 따라서 화학식
유형이 서로 다른 물질의 `K_sp` 값만 비교해서 몰 용해도 순위를 안정적으로
정할 수는 없습니다.

## 공통 이온, 양성자 이동, 착물 형성을 결합하기

같은 가상 고체를 처음에 `1.00 × 10^-2 mol L^-1 X^-`가 들어 있는 용액에
넣으면

`K_sp ≈ (s/c°)[(0.0100 mol L^-1 + 2s)/c°]^2`

입니다. 처음에 `2s`를 무시하면

`s ≈ 4.00 × 10^-8 mol L^-1`

이고, `2s/0.0100 mol L^-1 = 8.00 × 10^-6`을 점검하면 무시한 항이
`0.000800%`에 불과함을 확인할 수 있습니다. 이 **공통 이온 효과**는 명시된
이상 용액 근사에서 용해도를 낮춥니다. 실제 이온 용액에서는 활동도 계수의
변화가 농도 결과를 바꿀 수 있으므로 “공통 이온은 언제나 단순식이 예측하는
만큼 측정 용해도를 낮춘다”는 주장은 너무 넓습니다
([OpenStax, §15.1](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution)).

다른 평형은 용해된 이온을 소비하여 추가 용해를 촉진할 수 있습니다. 중성
리간드 `L`이 다음 착물을 형성한다고 합시다.

`M^2+ + 3 L ⇌ ML3^2+`, `K_f = 1.00 × 10^8`

이 반응을 용해 반응과 더하면 자유 `M^2+`가 소거되어

`MX2(s) + 3 L ⇌ ML3^2+ + 2 X^-`

를 얻으며,

`K_overall = K_sp K_f = (4.00 × 10^-12)(1.00 × 10^8)`

`= 4.00 × 10^-4`

입니다. 리간드는 자유 `M^2+`의 활동도를 낮추고 용해된 전체 금속량을 늘릴 수
있지만, 실제 용해도를 구하려면 여전히 리간드 수지, 금속 수지, 전하 수지가
필요합니다. 마찬가지로 염기성 음이온 `X^-`를 양성자화하면 용해 반응
지수에서 이 이온이 제거되어 용해가 촉진될 수 있습니다. 이들은 **결합 평형**
입니다. 여러 반응이 화학종을 공유하므로 한 평형을 바꾸면 다른 평형의 반응
지수도 바뀝니다
([OpenStax, §§15.2–15.3](https://openstax.org/books/chemistry-2e/pages/15-3-coupled-equilibria)).
상수를 곱하려면 먼저 성분 반응식, 방향, 계수, 표준 상태를 일관되게 맞춰야
합니다.

## 평형 논리 점검하기

결론을 받아들이기 전에 다음을 점검합니다.

1. **반응:** 반응식의 원자와 전하가 맞고, 그 방향과 계수 배율이 `K`를
   정의할 때 사용한 것과 같은가?
2. **표현식:** 화학량론 계수가 지수가 되었는가? 순수 상을 올바르게
   처리했고 그 상이 실제로 존재하는가?
3. **상태:** 온도, 용매, 표준 상태, 관련 압력 또는 조성 제약을 명시했는가?
4. **모형:** 활동도를 사용했는가, 아니면 농도 또는 이상 기체 근사를 명시하고
   점검했는가?
5. **방향:** `K`의 크기만으로 방향을 추론하지 않고 현재 `Q`를 `K`와
   비교했는가?
6. **수지:** 물질 수지, 전하 수지, 희석, 중요한 모든 결합 반응을
   포함했는가?
7. **수치:** 지수, 로그의 밑, 부호, 단위, 양의 근, 무시한 항을
   검증했는가?
8. **속도론:** 평형이 열역학적으로 유리하다는 사실만이 아니라 실제로
   평형에 가까워졌다는 근거가 있는가?

가장 중심적인 오해는 평형 규칙 하나를 완전한 예측으로 취급하는 것입니다.
`K`는 조성을 제약하고, `Q/K`는 알짜 방향을 알려 주며, 수지는 가능한 양을
정합니다. 활동도는 조성을 화학 퍼텐셜에 연결하고, 속도론은 예측한 변화가
주어진 시간 척도에서 관찰 가능한지를 결정합니다. MIT의 대학 1학년 과정도
평형, 르샤틀리에 추론, 용해도, 산·염기계, 완충 용액, 적정을 하나의 문제 풀이
흐름으로 연결합니다
([MIT OCW 5.111SC 강의계획서](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/);
[학습 자료 목록, 18–24강](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/)).

## 관련 문서

- [일반화학 지도와 학습 경로](chemistry.md)
- [화학 언어, 몰, 화학량론](chemical-language-mole-stoichiometry.md)
- [원자구조와 주기적 경향](atomic-structure-periodic-trends.md)
- [재료과학·공학의 기본 틀](materials-science-engineering-framework.md)

## 참고문헌

- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., “activity”, “activity
  coefficient”, “chemical equilibrium”, “equilibrium constant”, “standard
  equilibrium constant”, “acid”, “Brønsted base”, “conjugate acid–base pair”,
  “acid dissociation constant”, “pH”, “Lewis acid”, “Lewis base”,
  “solubility product” 항목.
  <https://goldbook.iupac.org/terms/view/A00115>
  <https://goldbook.iupac.org/terms/view/A00116>
  <https://goldbook.iupac.org/terms/view/C01023>
  <https://goldbook.iupac.org/terms/view/E02177>
  <https://goldbook.iupac.org/terms/view/S05915>
  <https://goldbook.iupac.org/terms/view/A00071>
  <https://goldbook.iupac.org/terms/view/B00745>
  <https://goldbook.iupac.org/terms/view/C01266>
  <https://goldbook.iupac.org/terms/view/15441>
  <https://goldbook.iupac.org/terms/view/P04524>
  <https://goldbook.iupac.org/terms/view/L03508>
  <https://goldbook.iupac.org/terms/view/L03511>
  <https://goldbook.iupac.org/terms/view/S05742>
- OpenStax. *Chemistry 2e*, §§13.1–13.4, 14.1–14.3, 14.6–14.7,
  15.1–15.3.
  <https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria>
  <https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants>
  <https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle>
  <https://openstax.org/books/chemistry-2e/pages/13-4-equilibrium-calculations>
  <https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases>
  <https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh>
  <https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases>
  <https://openstax.org/books/chemistry-2e/pages/14-6-buffers>
  <https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations>
  <https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution>
  <https://openstax.org/books/chemistry-2e/pages/15-2-lewis-acids-and-bases>
  <https://openstax.org/books/chemistry-2e/pages/15-3-coupled-equilibria>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, 강의계획서와
  학습 자료 목록의 18–24강. 대학 1학년 수준, 선수 개념, 문제 중심 범위를
  점검하는 데 사용했습니다.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
