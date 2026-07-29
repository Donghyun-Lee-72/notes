# 전기화학 전지, 전위, 응용

**전기화학 전지**는 산화와 환원을 분리하여 전자는 외부 전자 전도체를
통과하고 이온은 전해질을 통해 전하를 운반하게 하는 계입니다. 이렇게 분리하면
자발 반응으로 전기 에너지를 공급하거나, 외부 전원으로 비자발 반응을 구동할
수 있습니다. 같은 틀로 전지, 연료 전지, 전기분해, 많은 수용액 부식을 설명할
수 있습니다
([IUPAC Gold Book, “electrochemical cell”](https://goldbook.iupac.org/terms/view/09058);
[OpenStax, *Chemistry 2e*, §17.2](https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells)).

이 문서는 전지 전위를 열역학적 양으로 다룹니다. 별도 언급이 없으면 계산은
가역 거동, 무시할 수 있는 액간 접합 전위, 운동학적 또는 저항 손실을 만들
정도로 크지 않은 전류를 가정합니다. 부하가 걸린 실제 장치가 평형 전위를
그대로 공급하는 것은 아닙니다.

## 부호가 아니라 반응으로 전극 이름을 정하기

모든 작동 방식에서 변하지 않는 정의는 두 가지입니다.

- **산화**가 일어나는 전극에 **산화 전극(anode)**이라는 이름을 붙입니다.
- **환원**이 일어나는 전극에 **환원 전극(cathode)**이라는 이름을 붙입니다
  ([IUPAC Gold Book, “anode”](https://goldbook.iupac.org/terms/view/A00370);
  [“cathode”](https://goldbook.iupac.org/terms/view/C00905)).

전극의 부호는 전지를 무엇이 구동하는지에 따라 달라집니다.

| 작동 방식 | 에너지 전환 | 산화 전극 | 환원 전극 |
| --- | --- | --- | --- |
| 갈바니 전지(볼타 전지) | 자발적 화학 변화 → 전기 에너지 | 음극(-) | 양극(+) |
| 전해 전지 | 전기 에너지 → 강제로 일으키는 화학 변화 | 양극(+) | 음극(-) |

갈바니 전지에서는 산화가 산화 전극에 전자를 내놓으므로 이 전극이 전자
공급원이자 환원 전극에 대한 음극(-)입니다. 전해 전지에서는 전원이 산화
전극에서 전자를 빼내고 환원 전극으로 전자를 공급하므로 부호가 반대가 됩니다
([IUPAC Gold Book, “electrochemical cell”](https://goldbook.iupac.org/terms/view/09058);
[“electrolytic cell”](https://goldbook.iupac.org/terms/view/09062);
[OpenStax, §17.7](https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis)).

**산화 전극이 언제나 음극(-)인 것은 아닙니다.** 믿을 수 있는 규칙은
“산화 전극 = 산화”와 “환원 전극 = 환원”입니다. 충전식 전지 분야에서는
충전 중에도 방전 때를 기준으로 붙인 *anode*와 *cathode*라는 이름을 유지하기도
합니다. 반응에 따른 엄밀한 분석에서는 반응이 반대로 바뀌면 전극 이름도
바뀌므로 반드시 작동 방식을 함께 밝혀야 합니다.

## 두 전하 이동 경로를 모두 따라가기

작동 중 전자는 외부 회로를 통해 산화가 일어나는 산화 전극에서 환원이
일어나는 환원 전극으로 이동합니다. 관습적인 전류 방향은 그 반대입니다.
전자는 보통 벌크 전해질을 통과하지 않으며, 그곳에서는 이온이 이동해 지속적인
전하 분리를 막습니다.

흔한 두 구획 전지에서는 산화 때문에 산화 전극 구획에 양전하가 늘고, 환원
때문에 환원 전극 구획에서 양전하가 줄어듭니다. 따라서 염다리의 음이온은
산화 전극 쪽으로, 양이온은 환원 전극 쪽으로 이동합니다. 이는 전하 균형을
설명한 것이지 반응하는 이온의 보편적인 목록이 아닙니다. 특정 반쪽 반응은
다른 이온종을 소비하거나 생성할 수 있습니다. 다공성 분리막이나 염다리는
이온 이동은 허용하되 직접 혼합과 전자 단락은 제한해야 합니다
([OpenStax, *Chemistry 2e*, §17.2](https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells)).

## 산화 전극에서 환원 전극 방향으로 전지 표기 읽기

자발적인 방향으로 쓴 갈바니 반응의 관례적인 전지 표기는 왼쪽에 산화 전극
반쪽 전지를, 오른쪽에 환원 전극 반쪽 전지를 둡니다.

- `|`는 서로 다른 상 사이 계면을 나타냅니다.
- `||`는 두 반쪽 전지 사이 분리막이나 염다리를 나타냅니다.
- 쉼표는 같은 상에 있는 화학종을 구분합니다.
- 반응종 가운데 전자 전도성 고체가 없으면 `Pt(s)` 같은 비활성 전도체를
  표기에 포함합니다
  ([OpenStax, §17.2](https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells)).

독자적으로 구성한 다음 아연–니켈 전지를 생각해 봅시다.

`Zn(s) | Zn^2+(aq) || Ni^2+(aq) | Ni(s)`

반쪽 반응과 알짜 반응은 다음과 같습니다.

`산화 전극, 산화: Zn(s) → Zn^2+(aq) + 2 e^-`

`환원 전극, 환원: Ni^2+(aq) + 2 e^- → Ni(s)`

`전지: Zn(s) + Ni^2+(aq) → Zn^2+(aq) + Ni(s)`

점검은 간단합니다. 양변에 Zn과 Ni이 하나씩 있고, 두 반쪽 반응은 모두 전자
두 개를 전달합니다. 산화 반응 생성물의 알짜 전하는 0
(`+2 - 2 = 0`)이고 환원 반응 반응물의 알짜 전하도 0
(`+2 - 2 = 0`)입니다. 알짜 반응식에서는 전자가 소거됩니다. 이 전지가
표시한 방향으로 갈바니 방식으로 작동할 때 아연은 음의 산화 전극이고 니켈은
양의 환원 전극입니다.

## 환원 전위에서 전지 전위 구하기

고립된 반쪽 전지의 전위는 측정할 수 없고 두 전극 사이 전위차만 측정할 수
있습니다. 표준 전극 전위는 `0 V`로 정한 표준 수소 전극을 기준으로 보고하며,
관례상 환원으로 쓴 반쪽 반응에 대해 표로 정리합니다
([IUPAC Gold Book, “standard electrode potential”](https://goldbook.iupac.org/terms/view/S05912);
[OpenStax, §17.3](https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials)).

표의 두 항목을 모두 환원으로 썼을 때,

`E°_cell = E°_cathode - E°_anode`

입니다. `298.15 K`에서 OpenStax 표에는
`E°(Ni^2+/Ni) = -0.257 V`와
`E°(Zn^2+/Zn) = -0.7618 V`가 제시되어 있습니다. 따라서,

`E°_cell = (-0.257 V) - (-0.7618 V) = +0.5048 V ≈ +0.505 V`

입니다. 양의 결과는 표시한 알짜 반응이 명시된 표준 조건에서 열역학적으로
유리하다고 예측합니다. 전지 반응을 뒤집으면 `E°_cell`의 부호도 바뀝니다.
전자를 맞추기 위해 반쪽 반응에 수를 곱해도 전위에는 그 수를 곱하지
않습니다. 전위는 반응량에 비례하는 크기 성질이 아니라 전하당 에너지입니다
([OpenStax, *Chemistry 2e*, §17.3](https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials)).

여기서 표준 기호는 각 화학종이 선택한 표준 상태에 있다는 뜻입니다. 용질의
활동도는 `1`, 기체 활동도의 기준 표준 압력은 `1 bar`, 순수 고체와 순수
액체의 활동도는 `1`입니다. 온도는 위 첨자 °가 고정하지 않으므로
`298.15 K`를 별도로 밝혔습니다. 입문 수준의 표에서는 활동도가 1인 용질을
`1 mol L^-1`로, 이상 기체의 활동도를 `p/(1 bar)`로 근사하는 경우가 많습니다
([IUPAC Gold Book, “activity”](https://goldbook.iupac.org/terms/view/A00115);
[OpenStax, §17.3](https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials)).

## 전위, 깁스 에너지, 평형 연결하기

방향을 명시하고 계수를 맞춘 전지 반응에 대해,

`ΔG = -n F E_cell`

이고 표준 조건에서는,

`ΔG° = -n F E°_cell = -R T ln K`

이므로,

`E°_cell = (R T / n F) ln K`

입니다. 여기서 `n`은 표시한 계수의 반응 1몰당 이동하는 전자의 몰수,
`F`는 `9.6485 × 10^4 C mol^-1`인 패러데이 상수, `R`은 몰 기체 상수,
`T`는 절대온도입니다. `K`는 같은 온도와 표준 상태 규약에서 그 계수의
반응에 대한 무차원 열역학적 평형 상수입니다. `1 V = 1 J C^-1`이므로
`nFE`의 단위는 반응 1몰당 에너지로 정리됩니다
([IUPAC Gold Book, “Faraday constant”](https://goldbook.iupac.org/terms/view/F02325);
[OpenStax, §17.4](https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium)).

아연–니켈 반응에서는 `n = 2`입니다. 표에 제시된 전극값으로 구한
`E°_cell = 0.5048 V` 추정값을 사용하면,

`ΔG° = -(2 mol e^- mol^-1 reaction)(96485 C mol^-1 e^-)(0.5048 J C^-1)`

`ΔG° = -9.741 × 10^4 J mol^-1 = -97.4 kJ mol^-1`

입니다. `T = 298.15 K`에서 `R = 8.314 J mol^-1 K^-1`를 사용하면,

`ln K = n F E°_cell/(R T) = 39.2974... ≈ 39.30`

`K = e^(39.2974...) ≈ e^39.30 = 1.17 × 10^17`

입니다. 따라서 표시한 반응 방향에서 `E°_cell > 0`, `ΔG° < 0`,
`K > 1`은 같은 열역학적 결론을 줍니다. 실제 조건에서 평형에 도달하면
`ΔG = 0`, `E_cell = 0`, `Q = K`입니다. 이 관계만으로 반응 속도, 전류,
출력 또는 저장 용량을 알 수는 없습니다
([OpenStax, *Chemistry 2e*, §17.4](https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium)).

## 네른스트 식으로 조성 변화 반영하기

표준 조성에서 벗어나면 반응 지수 `Q`에 따라 평형 전지 전위가 달라집니다.

`E_cell = E°_cell - (R T / n F) ln Q`

정확히 `298.15 K`에서는 상용로그를 사용해 다음과 같이 쓸 수 있습니다.

`E_cell = E°_cell - (0.05916 V / n) log10 Q`

`Q`는 무차원이어야 하고, 계수를 맞춘 반응의 방향과 일치해야 합니다. 각
활동도를 화학량론 계수만큼 거듭제곱해 만들며, 활동도가 `1`인 순수 고체와
순수 액체는 포함하지 않습니다
([IUPAC Gold Book, “activity”](https://goldbook.iupac.org/terms/view/A00115);
[OpenStax, §17.4](https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium)).

아연–니켈 전지에서는,

`Q = a(Zn^2+)/a(Ni^2+)`

입니다. `298.15 K`에서 `a(Zn^2+) = 0.0500`,
`a(Ni^2+) = 0.500`이라고 합시다. 그러면 `Q = 0.100`,
`log10 Q = -1.000`이고,

`E_cell = 0.5048 V - (0.05916 V/2)(-1.000) = 0.5344 V`

입니다. 표시한 반응을 기준으로 생성물 이온보다 반응물 이온이 상대적으로
많은 조성이므로 결과가 `E°_cell`보다 큽니다. 묽은 이상 용액으로 취급할
때는 `c° = 1 mol L^-1`로 두고 `a_i ≈ c_i/c°`로 근사할 수 있습니다.
로그 안에 농도만 적는 것은 이 무차원 비를 생략해 쓴다는 뜻입니다. 이온
세기가 상당하면 활동도 계수가 필요합니다. 전류가 흐를 때는 활성화 및 농도
과전위, 옴 전압 강하, 물질전달, 온도 구배 때문에 단자 전압이 이 가역 예측과
달라질 수 있습니다.

## 반응을 유용한 장치로 바꾸기

### 전지와 연료 전지

**전지(battery)**는 한 개 이상의 갈바니 전지와 장치 안에서 사용할 반응물을
묶어 놓은 것입니다. 일차 전지는 주로 방전을 목적으로 합니다. 이차 전지는
정해진 작동 범위 안에서 외부 전원이 방전 반응을 거꾸로 구동할 수 있도록
설계합니다. 따라서 충전은 전해 방식으로 작동하며, 반응에 따라 정한 산화
전극과 환원 전극의 역할이 뒤바뀝니다.

**연료 전지**도 전력을 생산할 때는 갈바니 방식이지만, 밀폐된 초기 재고에만
의존하지 않고 작동 중 반응물을 공급하고 생성물을 제거합니다. 전지 전위는
전하당 에너지를 나타냅니다. 유용 에너지, 용량, 출력, 순환 수명, 효율은
반응물 양, 반응 속도론, 물질전달, 구조, 작동 조건에도 좌우됩니다
([OpenStax, *Chemistry 2e*, §17.5](https://openstax.org/books/chemistry-2e/pages/17-5-batteries-and-fuel-cells)).

### 전기분해와 패러데이 법칙

전기분해는 외부 전위를 사용해 비자발적인 전지 반응을 구동합니다. 전원은
자발적인 방향에 맞서야 하며, 실제 전지는 운동학적·저항 손실을 극복하기 위한
추가 인가 전위가 대체로 필요합니다. 일정한 전류가 전달한 전하는,

`q = I t`

이고 이에 해당하는 전자 물질량은,

`n(e^-) = q/F = I t/F`

입니다. 생성물 1몰에 전자 `z`몰이 필요하다면 이상적인 생성물
물질량은,

`n(생성물) = I t/(z F)`

입니다. 독자적으로 정한 구리 석출 예에서는,

`Cu^2+(aq) + 2 e^- → Cu(s)`

입니다. `1.80 A = 1.80 C s^-1`의 전류를
`25.0 min × 60 s min^-1 = 1.50 × 10^3 s` 동안 흘리면,

`q = (1.80 C s^-1)(1500 s) = 2.70 × 10^3 C`

`n(e^-) = 2700 C/(96485 C mol^-1) = 2.80 × 10^-2 mol e^-`

`n(Cu) = (2.80 × 10^-2 mol e^-)/(2 mol e^- mol^-1 Cu)`

`n(Cu) = 1.40 × 10^-2 mol`

첫 번째 결과는 통과한 전자의 몰수이고, 두 번째 결과는 측정된 전하가 모두
구리 반쪽 반응에 쓰였다고 가정할 때 석출되는 구리의 이론적 몰수입니다.
전하 일부가 다른 전극 반응에 쓰이면 구리 석출량은 더 작아집니다
([OpenStax, *Chemistry 2e*, §17.7](https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis)).

## 부식을 분산된 전지로 다루기

많은 금속의 수용액 부식에서는 서로 다른 표면 영역이 국소 산화 전극과 환원
전극으로 작용합니다. 철의 산화 전극 부위에서는,

`Fe(s) → Fe^2+(aq) + 2 e^-`

가 일어나고, 공기가 녹아 있는 중성 또는 염기성 물에서 가능한 환원 전극
반응은,

`O2(g) + 2 H2O(l) + 4 e^- → 4 OH^-(aq)`

입니다
(Callister and Rethwisch, 5th ed., Chapter 16, §16.2, p. 713).
철 반쪽 반응을 두 배로 하면 전하가 맞는 초기 알짜 과정은,

`2 Fe(s) + O2(g) + 2 H2O(l) → 2 Fe^2+(aq) + 4 OH^-(aq)`

입니다. 전자는 금속을 통해 산화 전극 영역에서 환원 전극 영역으로 이동하고,
이온은 표면 전해질을 통해 이동합니다. 이후 침전과 산화 반응으로 부식 생성물이
생기며, 그 조성과 보호 능력은 환경에 따라 달라집니다. 유리한 전지 전위는
가능한 방향을 알려 줄 뿐 부식 속도나 사용 수명을 알려 주지 않습니다
([OpenStax, *Chemistry 2e*, §17.6](https://openstax.org/books/chemistry-2e/pages/17-6-corrosion)).

**부동태화(passivation)**는 표면 피막이 추가 반응을 크게 줄이는 현상입니다.
이런 피막은 열역학적으로 반응성이 있는 금속이 천천히 부식하는 이유를 설명할
수 있습니다. 그러나 보호 효과는 재료, 피막의 온전성, 전위, 환경에 따라
달라지며, “부동태”가 모든 형태의 공격에 면역이라는 뜻은 아닙니다
([OpenStax, §17.6](https://openstax.org/books/chemistry-2e/pages/17-6-corrosion);
Callister and Rethwisch, 5th ed., Chapter 16, §16.5, p. 727).

**음극 방식(cathodic protection)**은 구조물에 전자를 공급하여 금속 산화가
일어나는 곳이 아니라 환원 전극으로 작용하게 합니다. 더 쉽게 산화되는
희생 산화 전극(sacrificial anode, 흔히 희생 양극)이 전자를 공급할 수
있습니다. 희생 부품은 산화 전극이며 의도적으로 소모됩니다
([OpenStax, §17.6](https://openstax.org/books/chemistry-2e/pages/17-6-corrosion);
Callister and Rethwisch, 5th ed., Chapter 16, §16.9, p. 738).
인가 전류 방식에서는 외부 직류 전원으로 필요한 전자 공급을 구동합니다
(Callister and Rethwisch, 5th ed., Chapter 16, §16.9, p. 738).
방식 시스템을 선정하려면 실제 환경, 코팅 상태, 형상, 전류 분포, 검사
계획을 고려해야 합니다. 표준 전위표만으로 설계할 수는 없습니다.

## 결론을 믿기 전에 점검하기

- 산화와 환원을 먼저 식별하고, 그다음 산화 전극과 환원 전극을 정하며,
  작동 방식을 밝힌 뒤에만 부호를 붙입니다.
- 원자와 전하를 맞추고, 소거되는 전자 수를 `n`으로 사용합니다.
- 표에 있는 환원 전위를 빼며, 반쪽 반응 계수로 전위를 확대하지 않습니다.
- 계수를 맞춘 반응에서 `Q`를 만들고 순수 응축상은 제외하며, 단위가 있는
  양의 로그를 취하지 않습니다.
- 개회로 열역학 전위를 부하 전압, 속도, 용량, 효율, 내구성과 구분합니다.

## 안전과 범위의 경계

이 문서는 실험 절차가 아닙니다. 전지와 전기분해 전지는 큰 전류를 부식성
전해질, 독성 금속 또는 유해 기체와 함께 다룰 수 있습니다. 전지를
의도적으로 단락시키거나 열지 마십시오. 충전은 제조사가 해당 기기에 승인한
방법으로만 하십시오. 폐기 규칙은 전지 화학과 지역에 따라 다릅니다. 전지
종류를 확인하고 제조사 지침과 지역 수거·재활용 규정을 따르며, 해당 규정이
금지하는 전지는 생활 쓰레기에 넣지 마십시오
([FAA, “PackSafe: Lithium Batteries”](https://www.faa.gov/hazmat/packsafe/lithium-batteries);
[US EPA, “Used Household Batteries”](https://www.epa.gov/recycle/used-household-batteries)).
전기분해는 전원을 켜기 전에 생성물을
식별하고, 호환되는 전극과 용기, 환기, 적절한 생성물 분리를 갖춰야 합니다
([OpenStax, *Chemistry 2e*, §17.7](https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis)).
기반시설의 부식 제어 결정에는 환경별 측정, 적용 법규와 규격, 검사, 자격을
갖춘 공학 검토가 필요합니다.

## 관련 문서

- [산화·환원 기초와 반쪽 반응법](redox-foundations-half-reaction-balancing.md)
- [열화학, 엔트로피, 깁스 에너지](thermochemistry-entropy-gibbs-energy.md)
- [화학 평형, 산과 염기, 용해도](chemical-equilibrium-acids-bases-solubility.md)
- [화학 반응속도론과 반응 메커니즘](chemical-kinetics-reaction-mechanisms.md)

## 참고문헌

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Chapter 16, §16.2, p. 713; §16.5, p. 727; §16.9,
  pp. 737–738.
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., “activity”, “anode”, “cathode”,
  “electrochemical cell”, “electrolytic cell”, “Faraday constant”,
  “standard electrode potential” 항목.
  <https://goldbook.iupac.org/terms/view/A00115>
  <https://goldbook.iupac.org/terms/view/A00370>
  <https://goldbook.iupac.org/terms/view/C00905>
  <https://goldbook.iupac.org/terms/view/09058>
  <https://goldbook.iupac.org/terms/view/09062>
  <https://goldbook.iupac.org/terms/view/F02325>
  <https://goldbook.iupac.org/terms/view/S05912>
- OpenStax. *Chemistry 2e*, Chapter 17, §§17.2–17.7.
  <https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells>
  <https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials>
  <https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium>
  <https://openstax.org/books/chemistry-2e/pages/17-5-batteries-and-fuel-cells>
  <https://openstax.org/books/chemistry-2e/pages/17-6-corrosion>
  <https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, resource
  index의 Lecture 25, “Oxidation-Reduction and Electrochemical Cells”.
  대학 1학년 수준과 열역학·평형 선수 개념을 점검하는 데 사용했습니다.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/lecture-25-oxidation-reduction-and-electrochemical-cells/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
