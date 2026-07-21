# 전자현미경: SEM과 TEM

주사전자현미경(SEM)은 집속 전자 탐침을 시료 표면 위에서 래스터 주사하고 위치별 신호를 영상화한다. 투과전자현미경(TEM)은 전자가 통과할 만큼 얇은 시료를 투과·회절한 전자를 이용해 내부 구조, 결정학, 조성을 분석한다.

!!! correction "SEM 영상은 보통 실제 3D 높이 지도가 아니다"
    일반적인 단일 SEM 프레임은 2차원 검출 강도 지도다. 큰 피사계 심도와 검출기 방향에 따른 형상 음영 때문에 3D처럼 보인다. 정량 높이는 stereo reconstruction, serial sectioning 또는 별도 profilometry가 필요하다.

## 전자–물질 상호작용

입사 전자는 원자핵과 전자의 전기장에 상호작용한다. **전자 산란**은 입사 전자의 방향·위상·에너지가 변하는 사건이고, **신호 생성·방출**은 그 결과 검출 가능한 전자, X선, 빛 또는 전류가 생기는 것이다. 따라서 두 말은 동의어가 아니다. BSE와 회절 전자는 방향이 바뀐 입사전자이고, SE·특성 X선·Auger 전자·cathodoluminescence는 새로 생성된 신호다.

- **탄성 산란:** 에너지는 거의 유지하고 방향·위상이 변한다. SEM의 BSE와 TEM의 결정 회절을 만든다.
- **비탄성 산란:** 시료에 에너지를 전달해 여기, 이온화, plasmon/phonon excitation을 만든다. SE, 특성 X선, Auger, CL, EELS와 beam damage에 연결된다.

**Interaction volume**은 일차전자가 여러 번 산란하는 3차원 영역이다. 가속전압, 원자번호, 밀도, 입사각에 따라 변한다. 실제 정보 깊이는 이 전체 부피가 아니라 각 신호의 탈출 깊이, 흡수, 검출기 기하에 의해 정해진다.

## SEM의 영상 형성 및 신호

Scan/deflection coil이 probe를 x–y 격자로 움직인다. 각 pixel의 dwell time 동안 검출한 강도를 동일한 beam position에 동기화해 grayscale map을 만든다.

- **SE:** 비탄성 상호작용으로 나온 저에너지 전자. 보통 표면 수 nm 정보와 topography/edge contrast에 민감하다.
- **BSE:** 주로 탄성 산란되어 되돌아온 일차전자. 평균 원자번호가 높을수록 밝아지는 Z contrast 경향이 있으며 결정방향도 대비에 영향을 준다.
- **Characteristic X-rays/EDS:** inner-shell ionization 뒤 전자 전이가 원소 고유 X선을 낸다. SE보다 발생 부피가 커서 작은 입자·박막에서 기판 신호가 섞일 수 있다. peak overlap, absorption, fluorescence, light-element sensitivity를 점검한다.
- **Auger:** core-hole relaxation 에너지가 다른 전자를 방출한다. 표면 민감하며 보통 전용 AES 장비에서 정량한다.
- **CL:** 전자–정공 재결합이나 결함 준위에서 빛이 나와 band gap, defect, growth zoning을 보여준다.
- **Absorbed/specimen current:** 입사·방출 전하의 수지로 남은 전류다. 방출 입자 신호가 아니라 회로 측정이다.

## TEM의 영상·회절·분광

TEM에는 재료와 목적에 따라 보통 수십–수백 nm 이하의 박막이 필요하다.

- **Direct/transmitted beam:** 중심 투과빔. BF는 주로 이 빔을 선택하므로 강하게 산란·회절한 영역이 어두워질 수 있다.
- **Diffracted electrons:** 격자에서 탄성 산란된 빔. DF는 선택한 회절빔으로 특정 상·방향·결함을 밝게 만든다.
- **SAED:** 선택 영역의 diffraction spot/ring으로 d-spacing, phase, orientation을 본다. 두께와 dynamical multiple scattering 때문에 intensity 해석은 단순하지 않다.
- **HRTEM:** 투과·회절빔의 위상 간섭 영상이다. 원자 열처럼 보이는 대비는 defocus, aberration, thickness, orientation에 의존한다.
- **STEM:** 작은 probe를 TEM foil 위에서 주사해 BF/ADF/HAADF, EDS/EELS spectrum image를 얻는다. HAADF는 흔히 Z-sensitive하지만 두께와 검출각의 영향이 있다.
- **EDS/EELS:** EDS는 특성 X선을, EELS는 비탄성 산란 전자의 에너지 손실을 분석한다. EELS edge와 fine structure는 원소, 결합, 산화상태, 두께, plasmon 정보를 준다.

## 시료 준비와 artifact

SEM 절연체는 charging으로 밝기 이동, streak, beam deflection이 생길 수 있다. 접지, 낮은 kV/current, variable pressure 또는 얇은 C/Au/Pt coating을 사용한다. 코팅은 원표면과 EDS 조성을 바꿀 수 있다.

TEM foil은 mechanical/ion thinning, electropolishing, ultramicrotomy, particle dispersion, FIB lift-out 등으로 만든다. FIB implantation, amorphization, curtaining, redeposition과 산화가 artifact가 될 수 있다. 두 방식 모두 radiolysis, knock-on damage, contamination, heating, charging을 확인해야 한다.

## 변수, 선택, 주의

- 가속전압은 침투, interaction volume, X선 발생, charging, 손상을 바꾼다.
- probe current·aperture·dwell time은 SNR과 해상도, 손상 사이의 trade-off다.
- SEM working distance와 detector geometry는 분해능, 피사계 심도, SE 음영, BSE/EDS 수집을 바꾼다.
- TEM thickness·orientation·defocus·aperture·camera length는 mass-thickness, diffraction/phase contrast와 회절 scale을 바꾼다.

표면 morphology, 파면, 넓은 영역 조사는 SEM이 적합하다. 내부 결함·계면·격자·회절이나 나노영역 EDS/EELS에는 TEM/STEM이 적합하다. TEM은 원자 수준까지 가능하지만 매우 작고 얇은 영역을 보므로 대표성과 준비 artifact가 큰 한계다.

고전압, 진공, 고온 부품과 X선 발생부의 interlock을 우회하지 않는다. 현미경/전자원, 전압, current/aperture, WD 또는 camera length, detector, vacuum mode, coating, preparation, calibration, pixel size와 processing을 보고하고 여러 시야·독립 시료로 대표성을 확인한다.

## 참고문헌

- Callister, W. D., Jr., & Rethwisch, D. G. (2015). *Fundamentals of Materials Science and Engineering: An Integrated Approach* (5th ed., pp. 171–173). Wiley.
- Goldstein, J. I., et al. (2018). *Scanning Electron Microscopy and X-Ray Microanalysis* (4th ed.). Springer. <https://doi.org/10.1007/978-1-4939-6676-9>
- Williams, D. B., & Carter, C. B. (2009). *Transmission Electron Microscopy* (2nd ed.). Springer. <https://doi.org/10.1007/978-0-387-76501-3>

