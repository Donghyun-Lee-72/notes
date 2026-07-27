# 화학 언어, 몰, 화학량론

화학은 화학식으로 조성을 나타내고, 계수를 맞춘 반응식으로 각 물질이 얼마나
반응하는지 추적합니다. **화학량론**은 이러한 반응식을 정량적으로 사용하는
방법입니다. 원자 규모의 설명을 측정 가능한 질량과 용액 부피에 연결하므로
합성을 계획하고 보고된 생성물 양이 타당한지 점검하는 데 필요한 기초입니다.

이 문서에서는 명시된 화학식의 순물질을 사용하고, 수율을 따로 제시하지 않으면
표시된 반응식에 따라 반응이 완결되며, 경쟁 반응을 무시할 수 있을 만큼 정보가
충분하다고 가정합니다. 실제 실험은 이러한 가정을 만족하지 않을 수 있습니다.

## 기호, 화학식, 화학식 단위 읽기

**원소 기호**는 원소를 식별합니다. `Mg`는 마그네슘, `Cl`은 염소를
뜻합니다. **화학식**은 표현 대상에 들어 있는 원소와 그 상대적인 수를
나타냅니다. `H2O`에서 아래 첨자 2는 화학식의 일부이며, 물 분자 하나에 수소
원자 두 개가 있다는 뜻입니다. 아래 첨자가 없으면 하나입니다. 화학식은 조성을
알려 주지만 분자식만으로 원자 연결 방식을 모두 정할 수는 없습니다
([OpenStax, *Chemistry 2e*, §2.4](https://openstax.org/books/chemistry-2e/pages/2-4-chemical-formulas)).

`H2O`처럼 서로 분리된 분자로 이루어진 물질에서는 **분자**를 기본 입자로
삼을 수 있습니다. 이온 고체는 분리된 분자들의 집합이 아니라 이어진
배열입니다. **화학식 단위**는 화학식이 나타내는, 전기적으로 중성인 가장
간단한 정수비입니다. 따라서 `CaCl2`는 칼슘 이온 하나당 염화 이온 두 개를
뜻하며, `Ca^2+ + 2 Cl^-`의 알짜 전하는 0입니다
([OpenStax, §3.1](https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept)).

**계수**는 화학식 전체에 곱해지지만, 아래 첨자는 화학식 자체를 바꿉니다.

- `H2O` 분자 두 개에는 H 원자 네 개와 O 원자 두 개가 들어 있습니다.
  물질량 규모에서 `2 mol H2O`에는 H 원자 `4 mol`과 O 원자 `2 mol`이
  들어 있습니다.
- `H2O2`는 물과 다른 물질인 과산화수소를 나타냅니다.

반응식의 계수를 맞출 때는 계수만 바꿉니다. 아래 첨자를 바꾸면 정해진 물질을
보존하는 것이 아니라 화학적 정체성을 바꾸게 됩니다
([OpenStax, *Chemistry 2e*, §§2.4와 4.1](https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations)).

## 서로 다른 양을 구분하기

서로 관련된 다음 양들은 각각 다른 질문에 답합니다.

- **물질량**의 기호는 `n`이며, 특정 기본 입자를 화학적 단위로 셉니다. SI
  단위는 몰(`mol`)입니다.
- **입자 수**의 기호는 `N`이며, 특정 원자, 분자, 이온 또는 화학식 단위의
  개수를 나타내는 무차원 수입니다.
- **질량**의 기호는 `m`이며, 여기서는 그램(`g`)으로 측정합니다.
- **몰 질량**의 기호는 `M`이며, 시료의 물질량을 질량으로 환산하는
  `M = m/n`의 비례 계수입니다. 이 문서에서는 `g mol^-1`로 나타냅니다
  ([IUPAC Gold Book, “molar mass”](https://goldbook.iupac.org/terms/view/12214)).
- **물질량 농도**의 기호는 `c`이며, 용질의 물질량을 전체 용액 부피에
  대응시키는 `c = n/V`입니다. 이 문서에서는 `mol L^-1`로 나타냅니다.
  화학 문헌에서는 이 양을 **몰 농도(molarity)**라고 부르며 기호 `M`을
  쓰기도 하지만, 여기서는 몰 질량과 혼동하지 않도록 `c`를 사용합니다
  ([IUPAC Gold Book, “amount concentration”](https://goldbook.iupac.org/terms/view/A00295);
  [OpenStax, §3.3](https://openstax.org/books/chemistry-2e/pages/3-3-molarity)).

SI는 아보가드로 상수를 정확히 `N_A = 6.02214076 × 10^23 mol^-1`로
고정합니다. 이 상수는 물질량과 명시된 기본 입자의 개수를 연결하므로,
`1 mol`은 그러한 입자 `6.02214076 × 10^23`개에 대응합니다
([BIPM, “mole”](https://www.bipm.org/en/si-base-units/mole)). 기호로 쓰면
다음과 같습니다.

`N = n N_A`, `n = N/N_A`

물질량을 나타낼 때는 어떤 기본 입자를 세는지 함께 밝혀야 합니다. O 원자
1몰과 `O2` 분자 1몰에 들어 있는 산소 원자 수는 서로 다릅니다.

몰 질량은 물질량과 질량을 연결합니다.

`n = m/M`, `m = nM`

표에 표시된 Mg, H, Cl의 상대 원자 질량 값은 각각 `24.31`, `1.008`,
`35.45`이며 무차원입니다
([OpenStax, *Chemistry 2e*, 주기율표](https://openstax.org/books/chemistry-2e/pages/a-the-periodic-table)).
아래 계산에서는 이에 대응하는 몰 질량 `M(Mg) = 24.31 g mol^-1`,
`M(H) = 1.008 g mol^-1`, `M(Cl) = 35.45 g mol^-1`을 사용합니다. 따라서
`M(HCl) = 1.008 + 35.45 = 36.458 g mol^-1`,
`M(MgCl2) = 24.31 + 2(35.45) = 95.21 g mol^-1`입니다.
화학식량 또는 분자량은 화학식에 나타난 원자들의 원자량을 더해 구하고, 몰
질량은 이에 대응하는 몰당 질량입니다
([OpenStax, §3.1](https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept)).
여기서는 이른 반올림이 결과를 좌우하지 않도록 참조 값과 중간 몰 질량을 측정
입력보다 많은 자릿수로 유지합니다.

## 계수를 맞춘 반응식은 보존 법칙의 표현이다

다음 반응을 생각해 봅시다.

`Mg + 2 HCl -> MgCl2 + H2`

가장 간단한 정수 계수는 `1:2:1:1`입니다. 원자 수를 세면 Mg는 `1 = 1`,
H는 `2 = 2`, Cl은 `2 = 2`이므로 각 원소가 보존됩니다. 계수는 다음
물질량비도 나타냅니다.

`1 mol Mg : 2 mol HCl : 1 mol MgCl2 : 1 mol H2`

이 비는 계수를 맞춘 표현에서 정확히 따라오는 값이지 측정된 질량비가 아닙니다.
예를 들어 `n(MgCl2) = n(HCl)/2`는 HCl이 이 반응식에 따라 소비되는
반응물일 때에만 사용할 수 있습니다. 계수를 맞춘 반응식의 계수는 반응
화학량론의 환산 인자가 됩니다
([OpenStax, §4.3](https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry)).

계산 전에 각 원소 수를 세고, 필요 없는 단위가 소거되도록 다음과 같이 환산
과정을 쓰면 점검하기 쉽습니다.

`g 반응물 -> mol 반응물 -> mol 생성물 -> g 생성물`

질량에 계수비를 직접 적용할 수는 없습니다. 계수비는 몰로 나타낸 물질량에
적용합니다.

## 한계 반응물, 이론 수율, 수율 백분율

`5.40 g Mg`과 `18.0 g HCl`을 섞고 위 반응만 일어난다고 합시다. 어떤
반응물이 `MgCl2`의 양을 제한하며, `18.7 g MgCl2`를 분리해 얻었다면 수율은
얼마일까요?

먼저 두 반응물을 물질량으로 바꿉니다.

`n(Mg) = 5.40 g / 24.31 g mol^-1 = 0.222131... mol`

`n(HCl) = 18.0 g / 36.458 g mol^-1 = 0.493719... mol`

Mg를 모두 소비하는 데 필요한 HCl은 다음과 같습니다.

`0.222131... mol Mg × (2 mol HCl / 1 mol Mg) = 0.444262... mol HCl`

필요한 양보다 HCl이 더 많으므로 Mg가 **한계 반응물**입니다. 즉 명시된 모형
아래에서 Mg가 생성물의 최대량을 결정하고 HCl은 과량으로 남습니다. 각
반응물로 만들 수 있는 생성물을 따로 계산해도 같은 결론을 얻습니다. Mg는
`0.222131... mol MgCl2`, HCl은
`0.493719.../2 = 0.246859... mol MgCl2`를 만들 수 있으므로 더 작은
생성물 양이 전체를 제한합니다
([OpenStax, §4.4](https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields)).

**이론 수율**은 모형의 가정 아래에서 한계 반응물로부터 예측되는 생성물의
최대량입니다.

`m_이론 = 0.222131... mol × 95.21 g mol^-1 = 21.1491... g`

**실제 수율**은 실험에서 분리해 얻은 생성물 질량으로, 여기서는 `18.7 g`입니다.
**수율 백분율**은 둘을 비교합니다.

`수율 백분율 = (실제 수율 / 이론 수율) × 100%`

`= (18.7 g / 21.1491... g) × 100% = 88.4%`

한계 반응물을 정할 때는 반올림하지 않은 물질량을 사용했습니다. 두 입력 질량
모두 유효숫자가 세 자리이므로 이론 수율은 `21.2 g`, 수율 백분율은 `88.4%`로
세 자리까지 보고하는 것이 적절합니다. 100%보다 낮은 수율은 불완전한 전환,
경쟁 반응 또는 분리 과정의 손실 때문에 나타날 수 있습니다. 100%보다 높은
값은 물질이 새로 생겼다는 뜻이 아니라, 잔류 용매나 불순한 생성물처럼 가정이나
측정을 점검해야 한다는 신호입니다.

## 몰 농도와 용액 화학량론

물질량 농도를 사용하면 측정한 용액 부피를 용질의 물질량으로 바꿀 수 있습니다.

`n = cV`

`0.1600 mol L^-1 Na2CO3` 용액 `25.00 mL`와 정확히 반응시키는 데 필요한
`0.1000 mol L^-1 CaCl2` 용액의 부피를 다음 반응식으로 구해 봅시다.

`Na2CO3 + CaCl2 -> CaCO3 + 2 NaCl`

계수는 `1:1:1:2`입니다. 원자 수는 Na `2 = 2`, C `1 = 1`, O `3 = 3`,
Ca `1 = 1`, Cl `2 = 2`입니다. 화학식 단위도 중성입니다.
`2 Na^+ + CO3^2-`와 `Ca^2+ + 2 Cl^-`의 알짜 전하는 각각 0입니다.

`c = n/V`를 적용하기 전에 밀리리터를 리터로 바꿉니다.

`n(Na2CO3) = 0.1600 mol L^-1 × 0.02500 L = 0.004000 mol`

1:1 비에 따라 `0.004000 mol CaCl2`가 필요하므로 다음과 같습니다.

`V(CaCl2) = n/c = 0.004000 mol / 0.1000 mol L^-1`

`= 0.04000 L = 40.00 mL`

단위는 리터로 정리되며, 주어진 농도와 부피에 따라 유효숫자 네 자리가
타당합니다. 이 결과는 표시 농도가 실제 용액을 나타낸다고 가정하고
화학량론적 당량 부피를 묻는 값입니다. 침전의 완결성, 순도 또는 평형에서
남는 화학종까지 입증하지는 않습니다.

## 화학량론 계산 점검하기

결과를 받아들이기 전에 다음을 확인합니다.

1. **정체성:** 기호, 화학식, 필요하다면 상, 지정한 기본 입자가 올바른가?
2. **보존:** 반응식에서 각 원소 수가 같은가? 이온이나 전자가 있다면 알짜
   전하도 보존되는가?
3. **양의 종류:** 각 수가 입자 수, 물질량, 질량, 몰 질량, 농도, 부피 중
   무엇인지 명확한가?
4. **단위:** 필요 없는 단위가 소거되어 요구한 단위가 남는가?
5. **제약 조건:** 한계 반응물을 정하기 전에 모든 반응물을 비교했는가?
6. **정밀도:** 마지막 단계까지 여분 자릿수를 유지한 뒤 가장 정밀도가 낮은
   측정 입력에 맞춰 반올림했는가?
7. **모형:** 순도, 반응 완결성, 경쟁 반응, 분리 손실, 용액 부피에 관한
   가정을 명시하거나 시험했는가?

흔한 오류로는 반응식을 맞추려고 아래 첨자를 바꾸는 것, 그램에 계수비를
적용하는 것, “몰” 뒤에 기본 입자를 쓰지 않는 것, 둘 다 `M`으로 나타내기도
하는 몰 질량과 몰 농도를 혼동하는 것, 밀리리터를 리터처럼 쓰는 것, 질량만
보고 한계 반응물을 정하는 것, 중간값을 지나치게 반올림해 한계 비교나 마지막
자릿수를 바꾸는 것이 있습니다.

## 이 문서의 경계

이 문서는 화학식과 완전 분자 반응식을 정량적 계수 정리로 다룹니다. 이후
문서에서는 강전해질과 구경꾼 이온을 알짜 이온 반응식으로 구분하고, 산화·환원
화학에서 전하와 전자 이동을 보존하도록 맞추며, 반응 완결 가정을 평형
추론으로 대체합니다. 계수를 맞춘 반응식은 화학량론적 비를 정하지만, 그것만으로
반응이 실제로 일어나는지, 완결되는지, 특정 메커니즘을 따르는지, 빠르게
진행되는지를 입증하지는 않습니다.

## 관련 문서

- [일반화학 지도와 학습 경로](chemistry.md)
- [재료과학·공학의 기본 틀](materials-science-engineering-framework.md)
- [재료과학·화학](index.md)

## 참고문헌

- Bureau International des Poids et Mesures (BIPM). “Mole.” SI base units.
  <https://www.bipm.org/en/si-base-units/mole>
- International Union of Pure and Applied Chemistry (IUPAC). *Compendium of
  Chemical Terminology (Gold Book)*, “amount concentration”, “molar mass”
  항목.
  <https://goldbook.iupac.org/terms/view/A00295>
  <https://goldbook.iupac.org/terms/view/12214>
- OpenStax. *Chemistry 2e*, §§2.4, 3.1, 3.3, 4.1, 4.3, 4.4.
  <https://openstax.org/books/chemistry-2e/pages/a-the-periodic-table>
  <https://openstax.org/books/chemistry-2e/pages/2-4-chemical-formulas>
  <https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept>
  <https://openstax.org/books/chemistry-2e/pages/3-3-molarity>
  <https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations>
  <https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry>
  <https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields>
- MIT OpenCourseWare. *5.111SC Principles of Chemical Science*, syllabus와
  resource index. 대학 1학년 수준과 문제 풀이 중심 범위를 점검하는 데
  사용했습니다.
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/syllabus/>
  <https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/>
