# 결정 구조와 단위 격자

이 글에서 다루는 주기적 **결정 구조(crystal structure)**는 대표 입자
집단과 이를 3차원 공간에 재현하는 병진 이동으로 기술합니다. 이런 반복
표현을 쓰면 거대한 고체를 다루기 쉬운 기하학적 모델로 나타낼 수 있습니다.
또한 원자 수준의 기하와 방향을 밀도, 변형, 확산, 전기적 응답 등의 성질과
연결하는 데 도움이 됩니다. 이 모델이 실제 시편의 반복 자리마다 결함이
없음을 뜻하지는 않습니다
(Callister and Rethwisch, 2015, Ch. 3, §§3.2–3.5, pp. 49–57;
[IUCr, “Crystal”](https://dictionary.iucr.org/Crystal)).

## 격자와 그 위에 놓이는 대상을 구분하기

서로 관련된 네 용어는 각각 다른 질문에 답합니다.

- **격자(lattice)**는 서로 동등한 점으로 이루어진 무한한 수학적 배열입니다.
  병진 주기성을 나타낼 뿐 그 자체에는 화학적 정체성이 없습니다.
- **기저(basis)** 또는 **모티프(motif)**는 모든 격자점에 같은 방향으로
  붙이는 원자, 이온, 분자 또는 입자 집단입니다.
- **결정 구조**는 모든 격자점에 기저를 놓아 만듭니다. 즉,
  `결정 구조 = 격자 + 기저`입니다.
- **단위 격자(unit cell)**는 동일 평면에 놓이지 않는 세 병진 벡터로
  정해지는 평행육면체입니다. 이 벡터들의 정수배만큼 이동시키면 빈틈이나
  겹침 없이 공간을 채웁니다.

이 구분은 흔한 오해를 막아 줍니다. 그려진 셀 중앙에 점이 있다고 해서 결정
구조가 자동으로 체심 Bravais 격자가 되는 것은 아닙니다. 화학적 기저도 함께
고려해야 합니다. IUCr는 격자를 원자 부분 구조가 아니라 주기성의 수학적
기술로 명시하며, 단위 격자를 세 결정학적 기저 벡터로 정의합니다
([IUCr, “Substructure”](https://dictionary.iucr.org/Substructure);
[IUCr, “Unit cell”](https://dictionary.iucr.org/Unit_cell)).

셀 벡터의 길이는 `a`, `b`, `c`입니다. 축간각은
`α = ∠(b,c)`, `β = ∠(a,c)`, `γ = ∠(a,b)`입니다. 이 여섯
**격자 매개변수**가 셀의 기하를 정하며, 입자의 종류와 분율 좌표가 기저를
정합니다.

## 원시 셀과 관습 셀의 목적은 다르다

**원시 셀(primitive cell)**은 경계 공유를 계산한 뒤 정확히 한 개의
격자점을 포함합니다. 병진으로 격자를 재현할 수 있는 최소 부피의 셀입니다.
그러나 격자 대칭을 가장 알아보기 쉽게 나타내지는 않을 수 있습니다.

**관습 셀(conventional cell)**은 대칭과 기하를 쉽게 보이도록 선택합니다.
비원시 셀일 수 있으며 격자점을 둘 이상 포함할 수 있습니다. 익숙한 체심 및
면심 입방 관습 셀은 각각 격자점 2개와 4개를 포함합니다. 벡터와 내용물을
일관되게 명시하면 원시 셀과 관습 셀 모두 같은 무한 격자를 나타냅니다.
따라서 “단위 격자”가 언제나 “가장 작은 셀”을 뜻하지는 않습니다
([IUCr, “Primitive cell”](https://dictionary.iucr.org/Primitive_cell);
[IUCr, “Centred lattice”](https://dictionary.iucr.org/Centred_lattice)).

## 보이는 개수가 아니라 소유 지분으로 입자를 세기

셀 경계는 원자를 물리적으로 자르는 면이 아니라 계산을 위한 면입니다. 입방
관습 셀에서 완전히 내부에 있는 자리는 `1`, 면 중심은 `1/2`, 모서리
중심은 `1/4`, 꼭짓점은 `1/8`만 기여합니다. 따라서

`N = N_i + N_f/2 + N_e/4 + N_c/8`

입니다. 여기서 `N`은 셀에 귀속되는 유효 입자 수이며, `N_i`, `N_f`,
`N_e`, `N_c`는 각각 내부, 면, 모서리, 꼭짓점에 그려진 입자 수입니다.
공유 분율은 셀 기하에 따라 달라집니다. 관습적인 육각기둥의 꼭짓점은 이런
기둥 여섯 개가 공유하므로 `1/6`이지 `1/8`이 아닙니다.

여러 화학종이 있는 구조에서는 화학종별로 따로 셉니다. 전체 원자 수가
맞더라도 화학식은 틀릴 수 있습니다.

## SC, BCC, FCC, HCP를 기하 모델로 비교하기

다음 결과는 동일한 단단한 구가 명시한 방향에서 서로 접한다고 가정합니다.
`R`은 구 반지름, `a`는 입방 셀 모서리 길이입니다. **배위수**는 같은
최단 이웃 거리에서 만나는 최근접 이웃 수입니다. **원자 충진율(APF)**은

`APF = (셀에 귀속되는 단단한 구의 부피)/(셀 부피)`

이며 무차원입니다. APF는 측정된 기공률이 아니며 전자 밀도를 세는 값도
아닙니다. 동일 구 모델의 기하학적 결과입니다
(Callister and Rethwisch, 2015, Ch. 3, §3.4, pp. 51–56;
[LibreTexts, §12.2](https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%253A_General_Chemistry%253A_Principles_Patterns_and_Applications_%28Averill%29/12%253A_Solids/12.02%253A_The_Arrangement_of_Atoms_in_Crystalline_Solids)).

| 구조와 관습 셀 | 유효 입자 수 `N` | 접촉 기하 | 배위수 | APF |
| --- | ---: | --- | ---: | ---: |
| 단순 입방(SC) | `8(1/8) = 1` | 모서리: `a = 2R` | 6 | `π/6 ≈ 0.52` |
| 체심 입방(BCC) | `8(1/8) + 1 = 2` | 체대각선: `√3a = 4R` | 8 | `√3π/8 ≈ 0.68` |
| 면심 입방(FCC) | `8(1/8) + 6(1/2) = 4` | 면대각선: `√2a = 4R` | 12 | `π/(3√2) ≈ 0.74` |

대수 계산은 유용한 검산이 됩니다. 예를 들어 FCC에서는
`a = 2√2R`이므로 셀 부피는 `a^3 = 16√2 R^3`입니다.
구 네 개의 부피는 `4(4πR^3/3) = 16πR^3/3`이고 그 비는
`π/(3√2) ≈ 0.7405`입니다.

### 육방 최밀 구조

**육방 최밀(HCP)** 구조는 최밀면을 `ABAB…` 순서로 쌓습니다. FCC는
대안적인 `ABCABC…` 최밀 적층으로 볼 수 있습니다. 이상적인 동일 구
충진에서 두 구조 모두 배위수는 12이고 APF는
`π/(3√2) ≈ 0.74`이지만, 병진 대칭과 적층 반복은 다릅니다
([LibreTexts, §12.2](https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%253A_General_Chemistry%253A_Principles_Patterns_and_Applications_%28Averill%29/12%253A_Solids/12.02%253A_The_Arrangement_of_Atoms_in_Crystalline_Solids);
Callister and Rethwisch, 2015, Ch. 3, §§3.4 and 3.16, pp. 53–56, 89–90).

관습적인 육각기둥 표현에는
`12(1/6) + 2(1/2) + 3 = 6`개의 원자가 귀속됩니다. 이상적인 접촉
구에 대해 `a = 2R`이고

`c/a = √(8/3) ≈ 1.633`

입니다. 여기서 `c`는 기둥 높이입니다. 실제 HCP 결정의 `c/a` 비는 이 값과
다를 수 있으므로 “HCP”가 이상적 구 기하를 보장하지는 않습니다. 원자 여섯
개짜리 기둥은 편리한 비원시 셀이며, 원시 셀과 관습 셀의 서술을 한 계산 안에서
섞어서는 안 됩니다
(Callister and Rethwisch, 2015, Ch. 3, §3.4, pp. 54–55).

## 명시한 셀로 결정학적 밀도 계산하기

단일 성분 결정에서는

`ρ = nM/(N_A V_cell)`

입니다. 각 기호는 다음과 같습니다.

- `ρ`: 결정학적 밀도
- `n`: 선택한 셀에 귀속되는 원자 수
- `M`: `g mol^-1` 단위 몰 질량
- `N_A = 6.022 140 76 × 10^23 mol^-1`: 정확히 정의된 Avogadro 상수
- `V_cell`: `ρ`를 `g cm^-3`로 구할 때 `cm^3` 단위의 셀 부피

화합물에서는 `nM`을 `Z M_formula`로 바꿉니다. `Z`는 셀당 화학식 단위
수이고 `M_formula`는 화학식 단위 하나의 몰 질량입니다. 분자와 부피는
반드시 같은 셀을 가리켜야 합니다. 이 식은 셀당 질량을 셀 부피로 나눈
것입니다
(Callister and Rethwisch, 2015, Ch. 3, §§3.5 and 3.7, pp. 57, 63–64;
[BIPM, “Mole”](https://www.bipm.org/en/si-base-units/mole)).

### 독립 수치 검산

`M = 60.0 g mol^-1`, `a = 0.400 nm`인 가상의 단원자 FCC 고체를
생각해 봅시다. 이는 실제 물질의 데이터가 아니라 교육용 입력값입니다.
`n = 4`이고 `1 nm = 10^-7 cm`이므로

`V_cell = (0.400 × 10^-7 cm)^3 = 6.40 × 10^-23 cm^3`

이고,

`ρ = [4(60.0 g mol^-1)]/[(6.022 140 76 × 10^23 mol^-1)(6.40 × 10^-23 cm^3)]`

`= 6.23 g cm^-3`

입니다. 몰 단위와 10의 거듭제곱은 올바르게 소거됩니다. 역검산하면
`ρV_cell = 3.99 × 10^-22 g`이고, 이는 반올림 오차 안에서 모델 원자
네 개의 질량 `4M/N_A`와 같습니다. 이 계산은 완전한 셀의 예측입니다. 공공,
치환, 비화학양론, 열팽창, 여러 상, 기공 때문에 측정 벌크 밀도는 다를 수
있습니다.

## 셀을 결정계와 Bravais 격자 안에 놓기

입문 수준의 일곱 **결정계**는 삼사정계, 단사정계, 사방정계, 정방정계,
삼방정계, 육방정계, 입방정계입니다. 이들은 3차원 결정 대칭을 분류하며,
관습 셀은 `a`, `b`, `c`, `α`, `β`, `γ` 사이의 제약으로
기술합니다. 허용되는 대칭을 원시 및 허용 중심화 방식과 조합하면 3차원
**Bravais 격자 유형** 14개가 나옵니다. Bravais 격자는 병진 대칭을
분류하지, 화학적 기저나 완전한 결정 구조를 분류하는 것은 아닙니다
([IUCr educational pamphlet 2](https://www.iucr.org/education/pamphlets/2/full-text)).

이 수준에서 중요한 것은 다음 계층입니다.

`결정학적 대칭 + 관습 셀의 계량 제약 → 결정계; 병진과 중심화 → Bravais 격자; 격자 + 기저 → 결정 구조`

SC, BCC, FCC는 세 입방 Bravais 격자 유형입니다. HCP는 원시 육방
Bravais 격자에 기저를 놓은 결정 구조이며 별도의 Bravais 격자가 아닙니다.
점군, 공간군, 좌표축 설정 관례의 자세한 내용은 이후의 결정학에서 다룹니다.

## 구조 때문에 방향이 중요해진다

시편 방향에 따라 측정값이 달라지는 성질은 **이방성**이고, 달라지지
않으면 **등방성**입니다. 입방 결정이라도 모든 성질에 대해 자동으로
등방성이 되는 것은 아닙니다. 대칭은 어느 방향의 값이 같아야 하는지를
제약하고, 그 성질의 텐서 특성이 나머지 가능성을 정합니다.

따라서 단결정은 탄성, 광학, 전기, 자기 또는 수송 응답에서 방향 의존성을
보일 수 있습니다. 무작위 방향의 결정립이 많은 다결정은 많은 결정립을 포함하는
척도에서 근사적으로 등방성처럼 보일 수 있습니다. 그러나 우선 배향
(**집합조직**), 결정립 모양, 상 또는 공정 때문에 거시적 이방성이 남을 수
있습니다. 무작위 배향은 시험할 가정이지 다결정이라는 사실에서 자동으로
나오는 결과가 아닙니다
(Callister and Rethwisch, 2015, Ch. 3, §3.19, pp. 92–94).

## 한 조성이 여러 구조를 가질 수 있다

**다형성**은 한 화학 조성의 물질이 둘 이상의 결정 구조로 존재할 수
있다는 뜻입니다. 이러한 구조의 다중성이 화합물이 아니라 원소 물질에서
나타날 때 **동소체성**이라고 합니다. 안정한 형태는 온도와 압력에 따라
달라질 수 있고, 변환은 속도론적으로 지연될 수 있습니다. 구조 변화는 전체
조성을 바꾸지 않고도 밀도와 다른 성질을 바꿀 수 있습니다
(Callister and Rethwisch, 2015, Ch. 3, §3.10, pp. 68–69;
[IUPAC, “Allotropes”](https://goldbook.iupac.org/terms/view/A00243)).

## 이상 모델이 제외하는 것을 알기

- 완전한 주기성은 표면, 공공, 침입형 원자, 치환, 전위, 결정립계, 무질서,
  열운동을 생략합니다.
- 단단한 구는 날카로운 반지름과 쌍별 접촉을 가정합니다. 실제 전자 밀도는
  연속적이고 결합은 방향성을 띨 수 있으며, 유효 반지름은 화학적 환경에
  따라 달라집니다.
- 배위에는 명시된 이웃 판정 규칙이 필요합니다. 왜곡되었거나 여러 화학종이
  있는 구조에서는 거리 절단값이 모호할 수 있습니다.
- APF는 이상 셀 안의 동일한 단단한 구 부피를 비교합니다. 벌크 기공률이나
  보편적인 안정성 척도가 아닙니다.
- 셀 그림은 유일하지 않습니다. 원시 셀과 관습 셀 기술이 모두 맞을 수 있지만,
  서로 다른 셀의 개수, 좌표, 부피를 섞어서는 안 됩니다.
- 결정학적 밀도는 모델값입니다. 벌크 측정과 비교하려면 대표성 있는 조성,
  상분율, 온도, 설명되지 않은 기공 부피가 없는지가 필요합니다.
- 이 글의 3차원 병진 주기성은 관습적인 결정을 다루지만, 현대 결정학의
  정의에는 장거리 질서를 가진 비주기 결정도 포함됩니다
  ([IUCr, “Crystal”](https://dictionary.iucr.org/Crystal)).

## 관련 노트

- [재료의 원자구조와 원자 사이 결합](atomic-structure-and-interatomic-bonding.md)
- [재료과학·공학의 기본 틀](materials-science-engineering-framework.md)
- [결정 회절, 역공간과 무질서](crystal-diffraction-reciprocal-space.md)
- [분말 X선 회절](powder-x-ray-diffraction.md)

## 참고문헌

- Callister, W. D., Jr., and Rethwisch, D. G. (2015).
  *Fundamentals of Materials Science and Engineering: An Integrated Approach*,
  5th ed., Ch. 3, §§3.2–3.5, 3.10–3.11, 3.16–3.19, pp. 49–57, 68–71,
  89–94. Wiley.
- Bureau International des Poids et Mesures (BIPM). “SI base unit: mole.”
  <https://www.bipm.org/en/si-base-units/mole>
- International Union of Crystallography (IUCr). *Online Dictionary of
  Crystallography*: “Crystal,” “Unit cell,” “Primitive cell,” “Centred lattice,”
  and “Substructure.” <https://dictionary.iucr.org/>
- International Union of Crystallography (IUCr). “An introduction to the
  scope, potential and applications of X-ray analysis,” §4.
  <https://www.iucr.org/education/pamphlets/2/full-text>
- International Union of Pure and Applied Chemistry (IUPAC). “Allotropes,”
  *Compendium of Chemical Terminology (Gold Book)*.
  <https://goldbook.iupac.org/terms/view/A00243>
- Chemistry LibreTexts. “12.2: The Arrangement of Atoms in Crystalline Solids.”
  <https://chem.libretexts.org/Bookshelves/General_Chemistry/Book%253A_General_Chemistry%253A_Principles_Patterns_and_Applications_%28Averill%29/12%253A_Solids/12.02%253A_The_Arrangement_of_Atoms_in_Crystalline_Solids>
