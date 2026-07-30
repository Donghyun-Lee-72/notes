# 원자구조와 주기적 경향

원자구조는 양성자와 중성자가 원자핵을 이루고 전자가 그 주위의 양자화된
상태를 점유하는 방식을 설명합니다. **주기적 경향**은 양성자 수와 전자배치가
주기율표를 따라 변할 때 원자 성질에 나타나는 넓고 반복적인 변화입니다. 두
개념을 함께 사용하면 같은 세로 열의 원소가 흔히 비슷하게 거동하는 이유를
설명할 수 있고 결합을 이해할 전자적 출발점을 얻습니다. 재료에 대해서는
가능한 결합과 응답에 주는 제약이지, 벌크 물성을 직접 예측하는 방법이 아닙니다.

## 정체성, 질량, 전하를 구분하기

원소는 각 원자핵의 양성자 수인 **원자번호** `Z`로 정해집니다. 양성자 수가
바뀌면 원소가 바뀝니다. 동위원소는 `Z`가 같지만 중성자 수가 다릅니다. 특정
원자핵의 **질량수** `A`는 양성자와 중성자 수를 합한 정수입니다.

`A = Z + 중성자 수`

예를 들어 `^31P`의 `Z = 15`이므로 양성자는 15개, 중성자는
`31 - 15 = 16`개입니다. 이 표기는 한 동위원소를 나타내며, `31`은 그
원소의 평균 상대 원자 질량이 아닙니다
([OpenStax, *Chemistry 2e*, §2.2](https://openstax.org/books/chemistry-2e/pages/2-2-evolution-of-atomic-theory)).

중성 원자의 전자 수는 양성자 수와 같습니다. 이온은 원자핵, 따라서 원소의
정체성은 유지한 채 전자를 얻거나 잃은 입자입니다. 전하를 양의 기본 전하
단위로 쓰면 다음과 같습니다.

`전자 수 = Z - 이온 전하`

따라서 `P^3-`의 전자는 `15 - (-3) = 18`개이고, `P^3+`의 전자는
`15 - (+3) = 12`개입니다. 양이온은 전자가 더 많은 것이 아니라 더 적습니다.
부호는 알짜 전하를 나타냅니다.

주기율표에서 원소에 표시된 소수 값은 보통 **상대 원자 질량**입니다. 이는
명시된 시료 또는 기준 물질의 동위원소 조성에 대해 존재비로 가중한 평균입니다.
무차원량이며 정수일 필요가 없습니다. 질량수는 한 핵종에 속하는 개수이고,
상대 원자 질량은 평균입니다. 원자 질량에서 몰 질량으로 변환하는 내용은
[화학 언어, 몰,
화학량론](chemical-language-mole-stoichiometry.md)에서 다룹니다.

## 경로를 양자 상태로 바꾸기

Bohr 모형은 수소와 같은 1전자 화학종의 전자를 에너지가 고정된 원형 궤도에
놓습니다. 불연속 에너지 준위를 도입하고 수소 스펙트럼을 설명하는 데
유용하지만, 그 경로는 다전자 원자의 전자를 일반적으로 나타내는 물리적 그림이
아닙니다
([OpenStax, §6.2](https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model)).

양자 모형의 계산은 원자핵 주위의 가능한 각 위치에 진폭을 부여합니다. 그
진폭의 크기를 제곱하면 그곳에서 전자를 발견할 확률밀도를 얻습니다. 화학에서는
이렇게 허용되는 공간·에너지 패턴 각각을 **원자 오비탈**이라고 부릅니다
([IUPAC Gold Book, “atomic orbital”](https://goldbook.iupac.org/terms/view/A00500);
[OpenStax, §6.3](https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory)).
따라서 오비탈은 에너지와 공간분포를 가진 상태이지 전자가 따라가는 선로가
아닙니다. 흔히 그리는 `s` 또는 `p` 오비탈의 경계면은 선택한 확률의 일부를
둘러쌀 뿐이며 단단한 용기가 아닙니다.

원자 오비탈 모형에서 전자에 붙이는 최소한의 유용한 표지는 네 양자수입니다.

- 주양자수 `n = 1, 2, 3, ...`은 껍질을 표시하며 에너지와 공간적 크기에
  밀접하게 관련됩니다.
- 각운동량 양자수 `l = 0, 1, ..., n - 1`은 부껍질을 표시합니다. 문자
  `s`, `p`, `d`, `f`는 각각 `l = 0, 1, 2, 3`에 해당합니다.
- 자기 양자수 `m_l = -l, ..., 0, ..., +l`은 한 부껍질 안의 오비탈을
  구분합니다. 따라서 `s`, `p`, `d`, `f` 부껍질에는 각각 1, 3, 5, 7개의
  오비탈이 있습니다.
- 스핀 양자수 `m_s = +1/2` 또는 `-1/2`는 허용되는 두 스핀 투영 중 하나를
  표시합니다.

이 표지는 상태를 설명합니다. 전자에 고전적인 크기, 방향, 자전하는 궤적을
부여하지 않습니다.

## 바닥상태 전자배치 만들기

전자배치는 점유된 부껍질을 기록합니다. 다음 세 규칙으로 고립된 원자의 통상적
바닥상태 배치를 구성합니다
([OpenStax, §6.4](https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations)).

1. **Pauli 배타 원리:** 한 원자에서 네 양자수가 모두 같은 두 전자는 없습니다.
   한 오비탈에는 스핀 투영이 반대인 전자가 최대 두 개 들어갑니다.
2. **Aufbau 순서:** 이용 가능한 낮은 에너지 오비탈부터 전자를 배치한 뒤 더
   높은 오비탈을 채웁니다. 중성 원자에 흔히 쓰는 순서는 `1s`, `2s`, `2p`,
   `3s`, `3p`, `4s`, `3d`, `4p`로 시작합니다. 이는 순서 지침이지 오비탈
   에너지가 절대 바뀌지 않는다거나 모든 전이금속 배치가 규칙적이라는 주장이
   아닙니다.
3. **Hund 규칙:** 한 부껍질에서 에너지가 같은 오비탈은 먼저 서로 같은 방향의
   스핀을 가진 전자로 하나씩 채우고 나서 짝을 만듭니다.

**전자배치 점검—규소.** 규소의 `Z = 14`입니다. 채워진 `1s`, `2s`,
`2p` 부껍질이 전자 10개를 차지하고, `3s^2`가 두 개를 더 차지합니다.
남은 두 전자는 어느 한쪽이 짝을 이루기 전에 서로 다른 `3p` 오비탈에
들어갑니다.

`Si: 1s^2 2s^2 2p^6 3s^2 3p^2 = [Ne] 3s^2 3p^2`

위 첨자의 합은 `2 + 2 + 6 + 2 + 2 = 14`입니다. 두 `3p` 전자는
`n = 3`, `l = 1`이며 `m_l = -1, 0, +1` 가운데 서로 다른 두 표지를
사용하고 선택한 스핀 투영은 나란해야 Pauli 원리와 Hund 규칙을 만족합니다.
에너지가 같은 세 `m_l` 표지 중 어느 둘을 그리는지는 서로 다른 전자배치를
뜻하지 않습니다.

**전하 점검—알루미늄 이온.** 중성 알루미늄에는 전자 13개가 있습니다.

`Al: [Ne] 3s^2 3p^1`

`Al^3+`는 가장 바깥 껍질의 전자 세 개를 잃었으므로 전자 수는
`13 - (+3) = 10`입니다.

`Al^3+: 1s^2 2s^2 2p^6 = [Ne]`

이 배치는 전자 10개와 양성자 13개인 원자핵을 나타내므로 알짜 전하는
`13 - 10 = +3`입니다. 이온 형성은 점유 상태를 바꾸지만 원소를 바꾸지는
않습니다.

주족 원자에서 **원자가전자**는 가장 바깥 껍질을 점유하며 기초적인 결합
추론을 대체로 지배합니다. 나머지는 **속전자**입니다. 따라서 규소는 원자가전자
4개(`3s^2 3p^2`)와 속전자 10개를 가집니다. 전이금속에서는 에너지가 가까운
`ns`와 `(n - 1)d` 상태가 모두 참여할 수 있으므로 더 주의해야 합니다.
“가장 바깥 껍질만”은 보편적인 결합 규칙이 아닙니다.

## 유효 핵전하를 메커니즘으로 사용하기

각 전자는 원자핵에 끌리는 동시에 다른 전자와 반발합니다. 안쪽 전자는 바깥
전자에 대한 핵의 인력 일부를 **차폐**합니다. 정성적 **유효 핵전하**는 다음과
같이 쓸 수 있습니다.

`Z_eff ≈ Z - S`

여기서 `S`는 차폐를 나타냅니다. 이는 추론 모형이지 실제로 더 작은 원자핵이
있다거나 모든 오비탈이 하나의 정확한 값을 공유한다는 뜻이 아닙니다. 침투,
전자 상관, 서로 다른 방사형 분포 때문에 같은 원자의 전자도 동일한 인력을
느낀다고 볼 수 없습니다.

한 주기에서 오른쪽으로 갈수록 `Z`는 커지고 추가 전자는 주로 같은 주양자수의
껍질에 들어갑니다. 차폐 증가는 추가된 핵전하를 완전히 상쇄하지 못하므로
원자가전자는 대체로 안쪽으로 당겨지고 더 강하게 붙잡힙니다. 한 족에서 아래로
가면 새 점유 껍질 때문에 원자가전자가 핵에서 멀어지고 차폐도 늘어납니다. 이
경쟁 효과가 아래 경향을 정리합니다
([OpenStax, §6.5](https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties)).

## 각 경향의 조건 읽기

### 원자 반지름

고립된 원자에는 날카로운 경계가 없으므로 “원자 반지름”은 조작적 정의에
따라 달라집니다. 흔히 결합한 원자핵 사이 거리의 절반이나 다른 모형 기반
척도를 사용합니다. 같은 방식으로 정의한 값을 비교해야 합니다.

주족 원소에서 원자 반지름은 유효 핵인력이 커짐에 따라 한 주기의 왼쪽에서
오른쪽으로 대체로 작아지고, 더 높은 껍질이 점유됨에 따라 한 족의 아래로
갈수록 커집니다. 이온 전하도 중요합니다. 양이온은 보통 모원자보다 작고
음이온은 보통 더 큽니다. 등전자 계열에서는 같은 전자 수를 더 많은 양성자가
강하게 붙잡으므로 양성자가 많은 화학종이 대체로 더 작습니다. 특히 이온과
전이금속에서는 정의, 배위, 전자 상태에 따라 제시된 반지름이 달라질 수
있습니다.

### 첫째 이온화 에너지

**첫째 이온화 에너지**는 고립된 기체 상태의 바닥상태 중성 원자에서 전자
하나를 제거하는 데 필요한 최소 에너지입니다.

`X(g) -> X^+(g) + e^-`

이 흡열적 제거에 대해 값은 양수입니다
([IUPAC Gold Book, “ionization energy”](https://goldbook.iupac.org/terms/view/I03199)).
한 주기에서는 더 강한 인력과 작은 크기에 따라 대체로 커지고, 한 족의
아래로는 더 먼 거리와 큰 차폐에 따라 대체로 작아집니다.

이 경향에는 중요한 예외가 있습니다. 2주기에서 붕소의 첫 `2p` 전자는
베릴륨의 채워진 `2s` 전자보다 제거하기 쉬우므로 `IE1(B) < IE1(Be)`입니다.
산소의 한 `2p` 오비탈에서 생긴 전자쌍은 질소의 절반 채워진 `2p` 부껍질보다
전자–전자 반발을 키우므로 `IE1(O) < IE1(N)`입니다. 이 비교는 위치뿐 아니라
전자배치도 중요함을 보여 줍니다.

### 전자친화도

전자친화도는 다음 과정과 관련됩니다.

`X(g) + e^- -> X^-(g)`

그러나 흔히 쓰는 부호 관례가 두 가지입니다. IUPAC은 전자친화도를 **방출된
에너지**로 정의하므로 유리한 전자 부착의 친화도는 양수입니다. OpenStax를
포함한 일부 일반화학 표는 대신 **계의 에너지 변화**를 나타내므로 발열성
부착은 음수입니다. 수치를 비교하기 전에 반드시 정의와 부호를 확인해야
합니다
([IUPAC Gold Book, “electron affinity”](https://goldbook.iupac.org/terms/view/E01977);
[OpenStax, §6.5](https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties)).

첫 전자 부착은 한 주기의 많은 구간에서 오른쪽으로 갈수록 에너지 면에서 더
유리해지고 여러 족에서는 아래로 갈수록 덜 유리해지는 경향이 있지만, 원자
반지름이나 첫째 이온화 에너지보다 불규칙합니다. 채워진 `ns^2`, 절반 채워진
`np^3`, 닫힌 껍질 배치는 단순한 경향에서 벗어납니다. 플루오린은 작고
조밀해서 들어오는 전자가 더 강한 전자–전자 반발을 겪으므로 염소의 전자
부착이 플루오린보다 더 유리합니다. 전자친화도만으로 고체의 전하 상태나 반응
경로를 추론해서는 안 됩니다.

## 모형을 다음 단계로 가져가되 범위를 넘지 않기

원자가전자 배치, 크기, 이온화 에너지, 전자친화도는 원자가 전자 밀도를 잃거나
얻거나 공유할 가능성을 따지는 출발점입니다. [화학 결합, 분자구조, 분자 간
힘](chemical-bonding-molecular-structure-intermolecular-forces.md)은 이
원자적 출발점의 분자 수준 결과를 설명하고, [재료의 원자구조와 원자 사이
결합](atomic-structure-and-interatomic-bonding.md)은 원자쌍 에너지 모형과
조건이 붙은 구조–물성 경향을 설명합니다. 두 문서 모두 고립된 기체 원자에
전자가 붙는 과정을 나타내는 전자친화도와 달리 결합 맥락에서 전자를
끌어당기는 정도를 나타내는 전기음성도를 사용합니다. MIT의 대학 1학년 과정도
원자 상태와 전자배치에서 주기적 경향을 거쳐 결합으로 진행합니다
([MIT OCW 5.111SC 강의계획서](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/);
[학습 자료 목록](https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/)).

재료에서는 전자구조와 결합이 안정한 구조를 제약하고 전기적, 광학적, 열적,
기계적, 화학적 응답에 영향을 줍니다. 벌크 물성은 결정 또는 분자 배열, 결함,
상, 미세구조, 공정 이력, 환경, 측정 조건에도 좌우됩니다. 주기적 경향은
가설을 세울 수 있게 하지만, 그것만으로 재료를 선택하거나 성능을 확정할 수는
없습니다.

## 관련 문서

- [화학 언어, 몰, 화학량론](chemical-language-mole-stoichiometry.md)
- [화학 결합, 분자구조, 분자 간 힘](chemical-bonding-molecular-structure-intermolecular-forces.md)
- [재료의 원자구조와 원자 사이 결합](atomic-structure-and-interatomic-bonding.md)
- [재료과학·공학의 기본 틀](materials-science-engineering-framework.md)

## 참고문헌

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Chapter 2, §§2.1–2.4, pp. 18–27.
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, 5th ed., “atomic orbital”,
  “ionization energy”, “electron affinity” 항목.
  <https://goldbook.iupac.org/terms/view/A00500>
  <https://goldbook.iupac.org/terms/view/I03199>
  <https://goldbook.iupac.org/terms/view/E01977>
- OpenStax. *Chemistry 2e*, §§2.2, 6.2–6.5.
  <https://openstax.org/books/chemistry-2e/pages/2-2-evolution-of-atomic-theory>
  <https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model>
  <https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory>
  <https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations>
  <https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus와
  resource index. 대학 1학년 수준과 선수 개념 순서를 점검하는 데
  사용했습니다.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
