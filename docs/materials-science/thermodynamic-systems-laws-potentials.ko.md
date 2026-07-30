# 열역학계, 열역학 법칙, 열역학 퍼텐셜

**열역학계**는 분석 대상으로 선택한 물질 또는 공간 영역이며, **경계**는 계와
주위를 구분합니다. 계의 **상태**는 온도, 압력, 부피, 상, 조성 같은 거시적
물성 가운데 평형 서술을 재현하기에 충분한 수로 지정합니다. 경계를 그리고 무엇을
제어하는지 밝히는 일이 식을 고르는 일보다 먼저입니다.

재료공학에서 이것이 중요한 까닭은 공정 장비마다 다른 구속 조건을 부과하기
때문입니다. 밀봉된 강체 용기와 온도·압력이 제어되는 개방형 노에는 같은 평형
판정 기준을 쓸 수 없습니다. 열역학 퍼텐셜은 동일한 에너지와 엔트로피 정보를
재배열하여, 부과된 구속 조건에 맞는 퍼텐셜이 극값을 향하도록 합니다
(Chang and Oates, 2010, Chapter 1, §§1.1–1.6, pp. 2–14;
[MIT OCW 3.020, Lecture 6](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/)).

이 문서는 달리 밝히지 않는 한 거시적 상태, 단순 압축성 다성분계, 압력–부피
(`pV`) 일만을 가정합니다. 온도 `T`의 단위는 켈빈(`K`), 압력 `p`는 파스칼
(`Pa`), 부피 `V`는 세제곱미터(`m^3`), 물질량 `n_i`는 몰(`mol`)이며,
`U`, `H`, `A`, `G`는 줄(`J`) 단위의 에너지입니다. 엔트로피 `S`의 단위는
`J K^-1`, 화학 퍼텐셜 `μ_i`의 단위는 `J mol^-1`입니다.

## 경계에서 교환과 부호를 정의하기

- **개방계**는 주위와 물질 및 에너지를 교환할 수 있습니다.
- **닫힌계**는 전체 물질량이 고정되지만 에너지는 교환할 수 있습니다.
- **고립계**는 모형 안에서 물질도 에너지도 교환하지 않습니다.

실제 용기는 명시된 시간 동안 이 범주 중 하나를 근사합니다. 닫힌 것으로 여긴
앰풀도 누출될 수 있고, 단열한 노도 열을 잃을 수 있습니다. OpenStax도 경계를
먼저 정하는 같은 구분을 제시하며, 경계를 통해 열이나 일이 전달될 수 있음을
강조합니다
([OpenStax, *University Physics*, §3.1](https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems)).

여기서는 화학 분야의 부호 규약을 사용합니다.

`dU = δq + δw`

`δq > 0`은 열이 계로 들어옴을, `δw > 0`은 계에 일이 가해짐을 뜻합니다.
`δ` 표기는 경로에 의존하는 무한소 전달량을 나타냅니다. 압력–부피 일은

`δw_pV = -p_ext dV`

이므로 팽창(`dV > 0`)은 계에 음의 일을 합니다. 가역적인 역학 접촉에서는
외부 압력 `p_ext`와 계의 압력 차이가 무한소에 불과하므로

`δw_pV,rev = -p dV`

입니다. 따라서 가역 `pV` 일에 대해 제1법칙은 `dU = δq - p dV`가 됩니다.
계가 한 일을 양으로 잡는 규약도 일관되게 쓰면 타당하지만, 두 규약을 섞으면
안 됩니다
([OpenStax, *Chemistry 2e*, §5.3](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)).

## 상태 물성과 과정 경로 구분하기

**상태 물성**의 값은 상태로 결정됩니다. 그 유한 변화
`ΔX = X_final - X_initial`은 두 끝점을 잇는 경로와 무관합니다. `U`, `H`,
`S`, `A`, `G`는 상태 물성입니다. 열과 일은 **경로 함수**입니다. 두 경로의
`q`와 `w`가 달라도 그 합은 같은 `ΔU`를 줄 수 있습니다.

**크기성 양**은 상호작용하지 않는 부분계를 합칠 때 더해집니다. `V`, `S`,
`U`, 각 `n_i`가 그 예입니다. **세기성 양**은 계의 크기에 따라 비례하여
변하지 않습니다. `T`, `p`, `μ_i`가 그 예입니다. 크기성 양을 질량이나
물질량으로 나누면 세기성인 비량 또는 몰량이 되는 경우가 많습니다. 예를 들어
`G_m = G/n`의 단위는 `J mol^-1`입니다
([IUPAC, *Green Book*, §1.2](https://publications.iupac.org/books/gbook/green_book_2ed.pdf)).

## 평형을 동시에 충족해야 하는 여러 조건으로 보기

시간에 따라 측정값이 일정하다는 사실만으로 평형이 입증되지는 않습니다. 정상
열류나 물질 흐름은 구배를 유지할 수 있습니다. 경계와 허용된 교환 방식 아래에서
평형이려면 계를 더 구동할 수 있는 허용된 무한소 변화가 없어야 합니다.

- **열적 평형:** 온도 차이가 순열전달을 구동하지 않습니다.
- **역학적 평형:** 불균형한 압력이나 일반화된 힘이 경계 이동 또는 변형을
  구동하지 않습니다.
- **화학적 평형:** 허용된 반응이나 상 사이 성분 이동이 적절한 퍼텐셜을
  낮추지 않습니다.

성분 `i`를 교환할 수 있는 상들은 화학적 평형에서 같은 `μ_i`를 가져야 합니다.
이 조건들은 함께 성립해야 합니다. 온도가 같다는 사실만으로 역학적 또는 화학적
평형이 성립하지는 않습니다. 제0법칙은 온도를 비교할 수 있게 하는 추이적 근거를
제공합니다
([OpenStax, *Physics*, §12.1](https://openstax.org/books/physics/pages/12-1-zeroth-law-of-thermodynamics-thermal-equilibrium)).

## 네 법칙을 각각의 작동 역할에 맞게 사용하기

1. **제0법칙:** 두 계가 각각 제3의 계와 열적 평형이면 두 계도 서로 열적
   평형입니다. 이 법칙은 온도를 전달 가능한 평형 좌표로 만들며 온도 측정을
   가능하게 합니다.
2. **제1법칙:** 에너지는 보존됩니다. 위 규약에서는 `dU = δq + δw`입니다.
   전달량을 결산하지만 자발적 방향을 고르지는 않습니다.
3. **제2법칙:** 계와 주위를 합한 고립된 전체에 대해 `dS_total >= 0`이며,
   등호는 가역 한계입니다. 제2법칙은 방향과 평형 기준을 제공하지만 속도나
   메커니즘을 주지는 않습니다
   ([OpenStax, *Chemistry 2e*, §16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).
4. **제3법칙:** 평형 상태의 순수한 완전 결정에서 엔트로피는 `0 K`의 이상적
   한계에 영점 기준을 둡니다. 이는 명시된 범위 안에서 절대 엔트로피 계산의
   기준을 정합니다
   ([OpenStax, *Chemistry 2e*, §16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).

**가역 과정**은 연속된 평형 상태를 지나는 이상적인 한계 경로입니다. 조건을
무한소만큼 바꾸면 진행 방향이 반대로 되며, 이 한계에서 계와 주위를 합한
엔트로피 변화는 0입니다. 실제 비가역 경로는 양 끝점이 평형 상태이더라도 이
한계 구성을 만족하지 않습니다. 두 끝점 사이의 상태 물성 차이는 가상의 가역
경로를 이용해 계산할 수 있습니다
(Chang and Oates, 2010, Chapter 1, §§1.2–1.3, pp. 4–8;
[OpenStax, *Chemistry 2e*, §16.3](https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics)).

## 하나의 기본 관계에서 퍼텐셜 만들기

`pV` 일만 하며 각 화학종의 물질량이 독립적으로 변할 수 있는 단순 압축성
다성분 평형계에 대해

`dU = T dS - p dV + Σ_i μ_i dn_i`

입니다. 이것이 기본 미분 관계입니다. 자연 변수는
`U = U(S, V, {n_i})`이며, `{n_i}`는 모든 화학종 물질량의 집합을 뜻합니다.
이 관계는 다음 켤레 미분도 정의합니다.

`T = (∂U/∂S)_(V,{n_i})`,

`p = -(∂U/∂V)_(S,{n_i})`.

실험에서는 엔트로피를 직접 제어하는 일이 드뭅니다. **르장드르 변환**은
제어하기 불편한 크기성 자연 변수를 그 켤레인 세기성 변수로 바꿉니다. 이를
적용하면 다음과 같습니다.

| 퍼텐셜과 정의 | 미분 | 자연 변수 |
| --- | --- | --- |
| 내부 에너지, `U` | `dU = T dS - p dV + Σ_i μ_i dn_i` | `S, V, {n_i}` |
| 엔탈피, `H = U + pV` | `dH = T dS + V dp + Σ_i μ_i dn_i` | `S, p, {n_i}` |
| 헬름홀츠 에너지, `A = U - TS` | `dA = -S dT - p dV + Σ_i μ_i dn_i` | `T, V, {n_i}` |
| 깁스 에너지, `G = U + pV - TS = H - TS` | `dG = -S dT + V dp + Σ_i μ_i dn_i` | `T, p, {n_i}` |

각 정의를 미분하고 기본 미분 관계를 대입하면 표의 부호가 직접 나옵니다. 자연
변수는 그 결과 식에 미분이 남는 양입니다
(Chang and Oates, 2010, Chapter 1, §§1.4–1.5.2, pp. 8–13;
[MIT OCW 3.020, Lecture 6](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/)).

`T`와 `p`가 일정할 때

`μ_i = (∂G/∂n_i)_(T,p,{n_j≠i})`

입니다. 따라서 화학 퍼텐셜은 성분 `i`의 **부분 몰 깁스 에너지**이며, 혼합물에서
단순히 `G/n_i`가 아닙니다. `T`, `p`, 다른 성분의 물질량을 고정한 채 그 성분을
더할 때 `G`가 얼마나 변하는지를 나타냅니다
([IUPAC Gold Book, “chemical potential”](https://goldbook.iupac.org/terms/view/C01032/html)).

## 구속 조건에 맞는 평형 기준 선택하기

전체 조성이 고정된 닫힌계에서, 표의 변수들이 이상적인 저장고에 의해 고정되고
누락된 일 방식이 없다면 안정 평형은 다음 국소 극값을 갖습니다.

이 표에서 `{n_i}` 고정은 각 성분의 전체 물질량이 고정된다는 뜻입니다. 허용된
내부 변화에 따라 성분이 상이나 배열 사이에서 재분배될 수는 있습니다.

| 제어되는 구속 조건 | 자발적 경향 | 안정 평형 |
| --- | --- | --- |
| 고립, `U, V, {n_i}` 고정 | `dS >= 0` | `S` 최대 |
| `S, V, {n_i}` 고정 | `dU <= 0` | `U` 최소 |
| `S, p, {n_i}` 고정 | `dH <= 0` | `H` 최소 |
| `T, V, {n_i}` 고정 | `dA <= 0` | `A` 최소 |
| `T, p, {n_i}` 고정 | `dG <= 0` | `G` 최소 |

여기서 “최소”란 구속 조건 아래에서 **허용된** 모든 내부 변화에 대한 최소를
뜻합니다. 평형에서 1차 변분은 0이고, 안정하려면 허용된 방향의 곡률도 양수여야
합니다. 임의로 고른 두 유한 상태의 퍼텐셜 값이 같다는 사실은 평형의 증명이
아닙니다. 마찬가지로 엔트로피 최대 진술에는 고립되고 구속 조건이 고정된 모형이
필요합니다. 모든 부분계의 엔트로피가 증가해야 한다는 규칙이 아닙니다
([MIT OCW 3.020, Lecture 6](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/)).

### 구속 조건 선택 예시

온도 `T`와 압력 `p`를 일정하게 유지하는 큰 노에서 밀봉된 합금 시편을
어닐링한다고 합시다. 독립적으로 만든 모형이 현재 조성에서 물질을 허용된 `α`
배열에서 `β` 배열로 옮길 때 몰 깁스 에너지 변화가
`ΔG_m = -1.20 kJ mol^-1`이라고 예측한다고 합시다. 이 몰 변화량이
`0.150 mol`의 작은 허용 시험 이동 동안 대표성을 유지한다고 가정하면

`ΔG = (0.150 mol)(-1.20 kJ mol^-1) = -0.180 kJ`

입니다. 음의 부호는 이 `T,p` 구속 조건에서 `α -> β` 시험 방향이 유리함을
나타냅니다. 완전 변환을 증명하지는 않습니다. 조성이 변하면 화학 퍼텐셜도
변하며, 허용된 어떤 이동도 전체 `G`를 낮추지 않을 때 평형에 이릅니다. 같은
시편이 `T`와 `V`가 일정한 강체 용기에 밀봉되어 있다면 적절한 퍼텐셜은 `G`가
아니라 `A`입니다. 강체이며 `U`와 `V`가 고정된 고립계라면 전체 `S`가
최대화됩니다.

## 모형을 한계 안에서 사용하기

열역학은 평형 상태와 허용된 방향을 제한하지만, 변환 속도, 경로, 핵생성 장벽,
확산 길이를 주지는 않습니다. 따라서 어떤 상은 더 낮은 최소와 장벽으로 분리된
국소 퍼텐셜 최소인 **준안정 상태**일 수 있습니다. 공정 시간과 반응속도론이
계가 그 상태를 벗어날지를 정합니다. 기초적인 방향 계산은
[열화학, 엔트로피, 깁스 에너지](thermochemistry-entropy-gibbs-energy.md)를,
속도와의 구분은
[화학 반응속도론과 반응 메커니즘](chemical-kinetics-reaction-mechanisms.md)을
참조하십시오.

단순한 미분 관계에는 재료에서 중요한 항들이 빠져 있기도 합니다. 표면 생성,
탄성 변형, 전기 또는 자기 분극, 전하 이동, 중력과 그 밖의 일 방식에는 각각의
켤레 힘–변위 항을 더해야 합니다. 개방형, 유동형, 구동형, 구배가 있는 계 또는
비평형 정상계에는 닫힌계 최소 규칙을 자동으로 적용할 것이 아니라 수지식과 경계
플럭스가 필요합니다. 따라서 유용한 평형 주장은 계, 허용된 교환, 제어 변수, 상과
조성, 일 방식, 후보 상태가 전역 극값인지 국소 극값인지를 밝혀야 합니다.

## 관련 문서

- [열화학, 엔트로피, 깁스 에너지](thermochemistry-entropy-gibbs-energy.md)
- [화학 평형, 산과 염기, 용해도](chemical-equilibrium-acids-bases-solubility.md)
- [화학 반응속도론과 반응 메커니즘](chemical-kinetics-reaction-mechanisms.md)
- [재료과학·공학의 기본 틀](materials-science-engineering-framework.md)

## 참고문헌

- Chang, Y. A., and Oates, W. A. (2010). *Materials Thermodynamics*,
  Chapter 1, §§1.1–1.6, pp. 2–14.
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., “chemical potential.”
  <https://goldbook.iupac.org/terms/view/C01032/html>
- International Union of Pure and Applied Chemistry (IUPAC). *Quantities,
  Units and Symbols in Physical Chemistry*, 2nd ed., §1.2.
  <https://publications.iupac.org/books/gbook/green_book_2ed.pdf>
- MIT OpenCourseWare. *3.020 Thermodynamics of Materials*, Spring 2021,
  Lecture 6, “Equilibrium and thermodynamic potentials.”
  <https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/resources/mit3_020s21_l06/>
- OpenStax. *Chemistry 2e*, §§5.3 and 16.3.
  <https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy>
  <https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics>
- OpenStax. *University Physics*, §3.1, “Thermodynamic Systems,” and
  *Physics*, §12.1, “Zeroth Law of Thermodynamics.”
  <https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems>
  <https://openstax.org/books/physics/pages/12-1-zeroth-law-of-thermodynamics-thermal-equilibrium>
