# 열화학, 엔트로피, 깁스 에너지

열화학은 물리적·화학적 변화에서 열이나 일로 전달되는 에너지를 추적합니다.
엔트로피와 깁스 에너지는 이어서 명시된 조건에서 과정이 어느 방향을 선호할 수
있는지 판단하도록 돕습니다. 이 개념들은 함께 합성, 상변화, 열처리, 화학적
안정성을 제한하지만 변화가 얼마나 빠르게 일어나는지는 알려 주지 않습니다.

이 문서는 거시적 평형 상태와 보통의 압력–부피 일을 다룹니다. 모든 부호는
계산을 위해 정한 계를 기준으로 하며, 모든 방향 판단에는 온도, 압력, 조성,
상이라는 조건이 붙습니다.

## 부호를 정하기 전에 경계를 그리기

**계**는 연구 대상으로 선택한 물질 또는 공간 영역입니다. **주위**는 그 경계
밖의 모든 것이며, 계와 주위를 합쳐 열역학적 우주라고 합니다. 한 열량계
모형에서는 반응 화학종을 계로 정하고 벌크 용액, 컵, 온도계, 외부 실내를
주위의 일부로 볼 수 있습니다
([OpenStax, *Chemistry 2e*, §5.2](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)).

- **개방계**는 주위와 물질과 에너지를 교환할 수 있습니다.
- **닫힌계**는 에너지를 교환할 수 있지만 물질은 교환하지 않습니다.
- **고립계**는 이상화한 모형에서 둘 다 교환하지 않습니다.

실제 장치는 명시된 근사와 관찰 시간 안에서만 고립되어 있습니다. 뚜껑을 덮은
열량계는 증발을 억제할 수 있지만 열은 여전히 천천히 샐 수 있습니다.

이 문서에서는 다음 화학 부호 관례를 사용합니다.

`ΔU = q + w`

`U`는 내부 에너지이고, `q > 0`은 열이 계로 들어오는 경우, `w > 0`은
주위가 계에 일을 하는 경우입니다. 계에서 나가는 열과 계가 주위에 하는 일은
음수입니다. 일정한 외부 압력에 맞서 하는 압력–부피 일은 다음과 같습니다.

`w = -p_ext ΔV`

여기서 `p_ext`는 일정한 외부 압력이고 `ΔV = V_최종 - V_초기`입니다.
따라서 팽창은 `ΔV > 0`, `w < 0`이고 압축은 `ΔV < 0`, `w > 0`입니다.
다른 분야에서는 계가 **한** 일을 양수로 정의하기도 합니다. 어느 관례든 먼저
밝히고 일관되게 사용하면 됩니다
([OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

열은 온도 차이 때문에 전달 중인 에너지이지 물체 안에 저장된 물질 함량이
아닙니다. 일은 이 문서에서 다루는 다른 에너지 전달 방식입니다. 둘의 SI
단위는 줄(`J`)입니다.

## 상태 함수와 경로를 구분하기

**상태 함수**는 특정 상태에만 의존하고 그 상태에 이른 경로에는 의존하지
않습니다. 내부 에너지 `U`, 엔탈피 `H`, 엔트로피 `S`, 깁스 에너지 `G`는
상태 함수입니다. 이들의 변화는 다음과 같은 꼴입니다.

`ΔX = X_최종 - X_초기`

열 `q`와 일 `w`는 경로량입니다. 같은 초기·최종 상태를 잇는 두 경로는 서로
다른 양의 열과 일을 교환할 수 있지만 그 합은 같은 `ΔU`를 줍니다. 반응
엔탈피는 **표시된 방향의** 반응을 가리킵니다. 반응식을 뒤집으면 부호가
뒤집히고, 모든 계수에 같은 수를 곱하면 크기에 비례하는 에너지 변화에도 그
수를 곱해야 합니다
([OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

이 구분을 따르면 “계가 열을 함유한다”거나 “반응이 양의 열을 가진다” 같은
표현을 피할 수 있습니다. 대신 경계, 과정, 방향, 조건을 밝혀야 합니다.

## 열량측정으로 열전달 추론하기

열량계는 관찰된 온도 변화를 열전달 추정값으로 바꿉니다. 열용량을 일정하다고
볼 수 있고 모형에 포함하지 않은 상변화가 없는 범위에서는 다음 식을
사용합니다.

`q_물체 = m c ΔT` 또는 `q_물체 = C ΔT`

`m`은 질량, `c`는 비열용량, `C`는 물체나 장치 전체의 열용량입니다. 흔히
쓰는 단위는 각각 `J g^-1 K^-1`과 `J K^-1`입니다. 온도 차이의 수치는
켈빈과 섭씨도에서 같습니다
([IUPAC Gold Book, “heat capacity”](https://goldbook.iupac.org/terms/view/H02753);
[OpenStax, §§5.1–5.2](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)).

이상적으로 단열된 측정에서는 다음과 같습니다.

`q_계 + q_주위 = 0`

그러나 주위 항에는 용액, 용기, 탐침과 그 밖의 보정된 부분이 포함될 수
있습니다.

**열량측정 점검.** 일정 압력 용액 열량계에서 반응물 `0.0125 mol`이
소비되었다고 합시다. 모형에서는 용액 `75.0 g`의 비열용량을
`4.00 J g^-1 K^-1`, 열량계의 열용량을 `18.0 J K^-1`로 정하고
`ΔT = +3.20 K`를 측정했습니다.

`q_주위 = [(75.0 g)(4.00 J g^-1 K^-1) + 18.0 J K^-1] × (3.20 K)`

`= 1.0176 × 10^3 J = 1.02 kJ`

주위가 따뜻해졌으므로 열을 얻었고 `q_계 = -1.02 kJ`입니다. 소비된 몰당
값은 다음과 같습니다.

`q_계/n = -1.0176 kJ / 0.0125 mol = -81.4 kJ mol^-1`

부호와 단위가 서로 맞습니다. 주위가 얻은 양의 열은 계가 잃은 음의 열에
대응합니다. 이 결과는 열 누출과 증발을 무시할 수 있고, 최종 온도가 균일하며,
제시한 열용량이 맞고, 장치 모형에서 빠진 에너지 항이 없다고 가정합니다.
실제 결과에는 보정, 혼합 지연, 탐침 응답, 질량과 온도의 불확도가 한계를
줍니다
([OpenStax, §5.2](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)).

일어날 수 있는 일이 압력–부피 일뿐이라면 일정 부피 봄베 열량계에서는
`q_v = ΔU`입니다. 엔탈피의 정의 자체에는 일정 압력 조건이 필요하지 않습니다.

`H = U + pV`

여기서 `p`는 계의 압력, `V`는 부피입니다. 일정 압력에서 압력–부피 일만
일어날 때 `q_p = ΔH`입니다. 열과 관련된 등식들은 조건이 붙은 측정
관계이지 열, 내부 에너지, 엔탈피를 서로 바꿔 부르는 표현이 아닙니다
([IUPAC Gold Book, “enthalpy”](https://goldbook.iupac.org/terms/view/E02141);
[OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

## Hess 법칙으로 엔탈피 변화 더하기

엔탈피는 상태 함수이므로 전체 과정의 엔탈피 변화는 같은 초기·최종 상태를
잇도록 더해지는 어떤 단계들의 변화량을 합해도 같습니다. 이것이 **Hess
법칙**입니다. 상, 화학량론 계수, 압력, 온도는 그 상태의 일부이므로 일관되게
유지해야 합니다.

기호를 사용한 점검으로, 다음 측정 변환이 모두 같은 온도와 압력에 해당한다고
합시다.

`A(s) + 1/2 X2(g) -> AX(s)        ΔH1 = -210 kJ`

`AX(s) + 1/2 X2(g) -> AX2(s)      ΔH2 = -95 kJ`

두 식을 더하면 중간체 `AX(s)`가 소거됩니다.

`A(s) + X2(g) -> AX2(s)           ΔH = -305 kJ`

여기서 기호는 실제 이름을 가진 물질의 데이터가 아니라 가상의 예입니다.
이 예는 점검 규칙을 보여 줍니다. 단계를 뒤집으면 부호를 뒤집고, 반응식에
수를 곱하면 `ΔH`에도 같은 수를 곱하며, 상과 조건이 같은 화학종끼리만
소거합니다
([OpenStax, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

## 완전한 열역학적 우주에 엔트로피 적용하기

엔트로피 `S`는 상태 함수입니다. 두 평형 상태 사이의 변화는 가상의 가역
경로를 따라 다음과 같이 계산할 수 있습니다.

`ΔS = integral(δq_rev/T)`

`T`는 켈빈으로 나타낸 열역학적 온도입니다. 가역 등온 열전달에서는
`ΔS = q_rev/T`가 되며, `δq_rev`는 그 경로를 따라 전달되는 무한소 가역
열입니다. 엔트로피의 단위는 `J K^-1`, 몰 엔트로피의 단위는
`J mol^-1 K^-1`입니다
([IUPAC Gold Book, “entropy”](https://goldbook.iupac.org/terms/view/E02149)).

접근 가능한 미시상태의 확률이 모두 같은 미시정준 모형에서는
`S = k_B ln W`입니다. 여기서 `k_B`는 볼츠만 상수, `ln`은 자연로그,
`W`는 그 모형에서 접근 가능한 미시상태 수입니다. 따라서 엔트로피는 물질과
에너지가 접근 가능한 상태에 분포할 수 있는 방식과 관련됩니다. 엔트로피를
단지 “무질서도”라고 부르면 모형, 제약, 정량적 정의를 숨기게 됩니다. 한 계의
엔트로피는 감소할 수 있습니다. 열역학 제2법칙은 완전한 고립 전체에
적용됩니다.

`ΔS_우주 = ΔS_계 + ΔS_주위 >= 0`

비가역적인 자발 변화에서는 `ΔS_우주 > 0`이고 가역 한계에서는
`ΔS_우주 = 0`입니다. `ΔS_우주 < 0`인 것으로 계산되는 변화는 명시된 제약
아래에서 그 방향으로 자발적으로 진행할 수 없습니다
([OpenStax, *Chemistry 2e*, §§16.2–16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).

**열 흐름 점검.** `1.00 kJ`이 `400 K`의 이상적인 고온 열저장고에서
`300 K`의 이상적인 저온 열저장고로 전달되고, 두 열저장고를 합친 전체는
그 밖의 주위와 고립되어 있으며 제시된 열저장고 온도는 고정된 모형 값으로
취급한다고 합시다. 유한한 온도 차이를 가로지르는 실제 열전달은
비가역적이지만, 각 열저장고의 두 끝 상태를 잇는 가역 경로를 사용해 엔트로피
변화를 계산할 수 있습니다.

`ΔS_고온 = -1000 J / 400 K = -2.50 J K^-1`

`ΔS_저온 = +1000 J / 300 K = +3.33 J K^-1`

`ΔS_우주 = +0.83 J K^-1`

고온 열저장고는 엔트로피를 잃지만 저온 열저장고는 더 많이 얻습니다. 두 부분
중 하나의 부호가 아니라 이 양의 합계가 허용되는 방향을 알려 줍니다.

## 깁스 에너지 결론에 조건 붙이기

IUPAC은 깁스 에너지를 다음과 같이 정의합니다.

`G = H - TS`

([IUPAC Gold Book, “Gibbs energy”](https://goldbook.iupac.org/terms/view/G02629)).
일반적인 유한 변화에서는

`ΔG = ΔH - Δ(TS)`

이며 초기 상태와 최종 상태의 온도가 같을 때에만 다음 식으로 줄어듭니다.

`ΔG = ΔH - TΔS`

켈빈을 사용하고 빼기 전에 `ΔH`와 `TΔS`의 에너지 단위를 같게 맞춰야 합니다.

온도와 압력이 일정하게 유지되는 닫힌계에서 압력–부피 이외의 일을 외부에서
강제하지 않을 때는 다음 세 가지 관련 양을 구분해야 합니다.

| 양 | 명시된 조건에서의 의미 |
| --- | --- |
| 유한한 `ΔG = G_최종 - G_초기` | 지정한 두 끝 상태를 비교함. `ΔG < 0`은 최종 상태의 `G`가 더 낮다는 뜻이고, `ΔG = 0`은 두 끝 상태의 `G`가 같다는 뜻일 뿐임 |
| 무한소 `dG` | 허용된 미분 변화를 나타냄. 자발적인 방향에서는 `dG < 0`이고, 일반적인 평형은 모든 허용된 무한소 변화에 대해 정류 상태(`dG = 0`)이며 안정 평형에서는 `G`가 최솟값임 |
| 반응 깁스 에너지 `Δ_rG = (∂G/∂ξ)_(T,p)` | `G`를 반응 진행량 `ξ`로 미분한 값임. `Δ_rG < 0`은 `ξ` 증가를, `Δ_rG > 0`은 감소를 선호하고, `Δ_rG = 0`은 반응 평형 조건임 |

따라서 임의로 고른 두 유한한 끝 상태의 `G`가 같다는 사실만으로는 평형을
판정할 수 없습니다. 온도와 압력이 일정하고 반응이 하나일 때 반응
진행량을 `ξ`라고 하면

`dG = Δ_rG dξ`

이므로 반응 판정 기준은 일반적인 최소 `G` 판정 기준을 반응 좌표로 나타낸
형태입니다. 이 판정 기준들은 위 제약 아래에서 열역학 제2법칙으로부터 나옵니다
([IUPAC Gold Book, “affinity of reaction”](https://goldbook.iupac.org/terms/view/A00178),
[“extent of reaction”](https://goldbook.iupac.org/terms/view/E02283),
[“chemical equilibrium”](https://goldbook.iupac.org/terms/view/C01023);
[OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)).
임의로 변하는 온도나 압력에 적용하는 규칙들이 아니며, 이것만으로 개방되거나
외부에서 구동되거나 비평형 정상상태인 계를 설명할 수 없습니다.

**반응 깁스 에너지 점검.** `298 K`의 일정 압력에서 일어나는 가상 반응의
값이 `Δ_rH = +18.0 kJ mol^-1`,
`Δ_rS = +75.0 J mol^-1 K^-1`이라고 합시다.
먼저 엔트로피 단위를 바꿉니다.

`Δ_rS = 0.0750 kJ mol^-1 K^-1`

그다음 계산하면

`Δ_rG = Δ_rH - TΔ_rS`

`= 18.0 - (298 K)(0.0750 kJ mol^-1 K^-1)`

`= -4.35 kJ mol^-1 ≈ -4.4 kJ mol^-1`

반올림하지 않은 계산값은 `-4.35 kJ mol^-1`이지만 제시된 입력값으로 뺄셈한
결과는 소수점 첫째 자리까지 보고하는 것이 타당합니다. `Δ_rG < 0`이므로
반응 진행량이 증가하는 방향은 `298 K`에서 열역학적으로 유리합니다.
`Δ_rH`와 `Δ_rS`가 온도에 따라 거의 일정하다면 부호가 바뀌는 온도는
`T = Δ_rH/Δ_rS = 18.0/0.0750 = 2.40 × 10^2 K` 부근입니다. 세 유효 숫자는
입력값의 비가 가진 정밀도를 나타낼 뿐 정확한 값을 뜻하지 않습니다. 열용량,
상변화, 조성 때문에 `Δ_rH`와 `Δ_rS`가 온도에 따라 달라질 수 있으므로 교차
온도는 여전히 근사값입니다
([OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)).

흔히 쓰는 부호 표에도 같은 근사가 들어 있습니다.

| `Δ_rH` | `Δ_rS` | `Δ_rG = Δ_rH - TΔ_rS`로 추론한 반응 방향 |
| --- | --- | --- |
| 음수 | 양수 | 식이 유효한 온도 범위 전체에서 유리함 |
| 양수 | 음수 | 식이 유효한 온도 범위 전체에서 유리하지 않음 |
| 음수 | 음수 | 충분히 낮은 온도에서 유리함 |
| 양수 | 양수 | 충분히 높은 온도에서 유리함 |

반응에서는 실제 반응 깁스 에너지 `Δ_rG`와 표준 상태 값 `Δ_rG°`를 구분해야
합니다. 조성이 실제 값을 바꾸며, 이상적인 기초 모형에서는 다음과 같습니다.

`Δ_rG = Δ_rG° + RT ln Q`

아래 첨자 `r`은 표시된 방향의 반응을 뜻하고, `R`은 몰 기체 상수이며, `Q`는
**활동도**, 즉 선택한 표준 상태에 대한 화학종의 열역학적 유효 농도 또는
압력을 나타내는 무차원 양으로 정의한 무차원 반응 지수입니다. `Q`는 각
활동도를 화학량론적 지수만큼 거듭제곱해 곱한 값입니다. 따라서
`Δ_rG° < 0`이라고 해서 모든 조성에서 정반응이 유리한 것은 아닙니다. 반응
평형에서는 `Δ_rG = 0`이고 `Q`가 평형값 `K`를 가집니다. [화학 평형, 산과
염기, 용해도](chemical-equilibrium-acids-bases-solubility.md)에서 `Q`,
활동도, 평형 상수를 자세히 다룹니다
([OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)).

## 열역학적 방향은 반응 속도가 아니다

열역학은 상태를 비교하고 방향을 제한합니다. **속도론**은 과정이 얼마나
빠르게, 어떤 경로로 진행되는지를 묻습니다. 음의 `Δ_rG`는 시간을 알려 주지
않습니다. 이용 가능한 경로의 **활성화 장벽**, 즉 반응물 상태와 그 경로의
더 높은 에너지 전이 영역 사이에 있는 에너지 또는 깁스 에너지 문턱이 크면
관찰 시간 동안 반응을 검출하지 못할 만큼 느릴 수 있습니다. 촉매는 장벽이
더 낮은 대체 경로를 제공하지만 반응물과 생성물의 열역학적 끝 상태는
바꾸지 않습니다
([OpenStax, §16.1](https://openstax.org/books/chemistry-2e/pages/16-1-spontaneity);
[OpenStax, §12.7](https://openstax.org/books/chemistry-2e/pages/12-7-catalysis)).
끝 상태가 바뀌지 않으므로 `Δ_rG°`가 바뀌지 않고, 온도, 압력, 조성이 같으면
촉매는 `Q`도 바꾸지 않습니다. 따라서 촉매는
`Δ_rG = Δ_rG° + RT ln Q`의 어느 항도 바꾸지 않습니다. 평형 위치는
`Δ_rG = 0`을 만족하는 조성이므로 평형 위치도 바뀌지 않습니다. 이 열역학
모형에서 촉매는 그 위치에 도달하는 속도만 바꿀 수 있습니다
([OpenStax, §16.4](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy);
[MIT OCW 5.111SC, Unit III](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-iii-thermodynamics-chemical-equilibrium/)).

마찬가지로 “자발적”은 즉각적이거나 격렬하거나 완결된다는 뜻이 아닙니다.
명시된 상태에서 무한소 변화가 선호하는 방향을 나타냅니다. 조성이 변하면 모든
반응물을 없애도록 강제하는 대신 `Δ_rG`가 0에 가까워지고 반응 평형에서는
0이 됩니다.

## 열역학 주장 점검하기

계산이나 결론을 받아들이기 전에 다음을 확인합니다.

1. **경계:** 계는 무엇이며, 물질이나 에너지가 경계를 지날 수 있는가?
2. **관례:** `q`, `w`, 팽창, 반응 방향의 부호를 일관되게 사용했는가?
3. **상태:** 온도, 압력, 조성, 물질량, 상을 밝혔는가?
4. **양의 종류:** 값이 `ΔU`, `q`, `ΔH`, `ΔS`, 유한한 `ΔG`, 미분
   `dG`, 반응 `Δ_rG` 또는 표준 상태 양인지, 아니면 종류를 밝히지 않은
   “에너지”인지 구분했는가?
5. **조건:** `q_p = ΔH`, `q_v = ΔU`, `ΔG = ΔH - TΔS`를 실제로 적용할
   수 있는가?
6. **단위:** 줄과 킬로줄을 맞췄는가? 엔트로피와 깁스 에너지 계산의 온도를
   켈빈으로 나타냈는가?
7. **방향과 속도:** 근거가 열역학적 유리함, 평형 조성, 반응 속도,
   메커니즘 중 무엇을 다루는가?
8. **측정 모형:** 열량계의 열용량, 열 누출, 보정, 상변화, 불확도를
   포함했거나 무시할 수 있음을 입증했는가?

흔한 오해로는 발열이면 자발적이라는 생각, 계의 엔트로피가 항상 증가해야
한다는 생각, 음의 `Δ_rG`가 빠르거나 완결되는 반응을 보장한다는 생각,
`Δ_rG°`가 모든 조성을 나타낸다는 생각이 있습니다. 각각 결론에 필요한
조건을 빠뜨린 것입니다.

## 이 문서의 경계

이 입문 문서는 화학 퍼텐셜, 활동도, 상평형, 전기화학적 일, 비평형 열역학을
유도하지 않습니다. 각 간결한 예에서 열용량을 일정하게 취급하고, 흔한 닫힌계
판정 기준을 사용합니다. 실제 재료에는 준안정 상, 기울기, 계면, 탄성 또는
전기적 일, 수송 제한이 있을 수 있습니다. 이러한 특징에는 더 완전한 모형과
독립적인 측정이 필요합니다. MIT OCW의 대학 1학년 과정도 반응 엔탈피,
엔트로피, 깁스 에너지를 평형과 이후의 속도론보다 먼저 배치합니다
([MIT OCW 5.111SC, Lecture 15](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec15/);
[Lecture 16](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec16/)).

## 관련 문서

- [열역학계, 열역학 법칙, 열역학 퍼텐셜](thermodynamic-systems-laws-potentials.md)
- [화학 평형, 산과 염기, 용해도](chemical-equilibrium-acids-bases-solubility.md)
- [화학 반응속도론과 반응 메커니즘](chemical-kinetics-reaction-mechanisms.md)
- [전기화학 전지, 전위, 응용](electrochemical-cells-potentials-applications.md)

## 참고문헌

- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., “enthalpy”, “entropy”,
  “Gibbs energy”, “heat capacity”, “affinity of reaction”, “extent of
  reaction”, “chemical equilibrium” 항목.
  <https://goldbook.iupac.org/terms/view/E02141>
  <https://goldbook.iupac.org/terms/view/E02149>
  <https://goldbook.iupac.org/terms/view/G02629>
  <https://goldbook.iupac.org/terms/view/H02753>
  <https://goldbook.iupac.org/terms/view/A00178>
  <https://goldbook.iupac.org/terms/view/E02283>
  <https://goldbook.iupac.org/terms/view/C01023>
- OpenStax. *Chemistry 2e*, §§5.1–5.3, 12.7, 16.1–16.4.
  <https://openstax.org/books/chemistry-2e/pages/5-1-energy-basics>
  <https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry>
  <https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy>
  <https://openstax.org/books/chemistry-2e/pages/12-7-catalysis>
  <https://openstax.org/books/chemistry-2e/pages/16-1-spontaneity>
  <https://openstax.org/books/chemistry-2e/pages/16-2-entropy>
  <https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics>
  <https://openstax.org/books/chemistry-2e/pages/16-4-free-energy>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, Unit III,
  Lectures 15–16. 대학 1학년 수준과 열역학적 방향, 평형, 속도론의 구분을
  점검하는 데 사용했습니다.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-iii-thermodynamics-chemical-equilibrium/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec15/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/mit5_111f14_lec16/>
