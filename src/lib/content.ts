/**
 * content.ts — 현장 확정 fact 단일 소스 (Single Source of Truth)
 *
 * 출처: 1b 검증·보강(extraction/검증리포트.md·factcheck.json·enriched.json).
 * 정본 = 입주자모집공고(최종) 2025.08.29 (extraction/docs/98fa825f90d13d99.pdf, 65p).
 * ⚠️ 현장 수치는 여기 한 곳에만 둔다(페이지/문서에 raw 수치 분산 금지 — G1B-SINGLESRC).
 * 미확정 항목은 TBD 상수로 표시(창작 금지). 2단계에서 site.ts(공통 메타)·디자인 토큰과 함께 확장.
 */

/** 미확정 — 입주자모집공고 기준 추후 안내(창작 금지). */
export const TBD = "입주자모집공고 기준 추후 안내" as const;

/** 글로벌 내비게이션 (9 라우트 — 2단계 사이트 구조). 관심고객등록은 별도 라우트 아님(메인 섹션 + /modelhouse#reservation). */
export const NAV = [
  { href: "/overview", label: "사업개요", en: "Overview" },
  { href: "/location", label: "입지환경", en: "Location" },
  { href: "/premium", label: "프리미엄", en: "Premium" },
  { href: "/complex", label: "단지안내", en: "Complex" },
  { href: "/floorplan", label: "평면도", en: "Floor Plan" },
  { href: "/sales", label: "분양안내", en: "Sales" },
  { href: "/modelhouse", label: "모델하우스", en: "Model House" },
  { href: "/news", label: "분양소식", en: "News" },
  { href: "/faq", label: "FAQ", en: "FAQ" },
] as const;

/** 사이트 최종 갱신일(푸터 표기 — 재배포 시 갱신). */
export const LAST_UPDATED = "2026-06-30";

/** 분양 단계: 정규 청약 종료 → 선착순(잔여세대) 분양 중(헤럴드경제 2025.10.31 보도 근거). 지난 청약 일정 표 미노출. */
export const SUBSCRIPTION_CLOSED = true;

/**
 * 현행 분양 프로모션 — 단일 소스. 종료·변경 시 여기만 수정(내릴 땐 active:false).
 * 표시광고 가드: 항상 현행·시점(asOf)·기준(공고 분양가)·변경가능(note) 4요소 동반, 단정/최상급(마감임박·완벽·최저가) 금지.
 */
export const PROMO = {
  active: true,
  asOf: "2026년 7월",
  items: [
    "분양가 5% 할인 (입주자모집공고 분양가 기준)",
    "계약금 부담 완화 — 입주 시 잔금 대출로 정산하는 구조",
  ],
  note: "프로모션 할인율·조건·적용 기간은 분양 계획에 따라 변경될 수 있으며, 자세한 내용은 입주자모집공고 및 분양 상담실 안내를 따릅니다.",
} as const;

/** 모델하우스(견본주택) — 관람시간은 분양 견본주택 범용 기본 10:00~18:00(계약/옵션 방문시간과 별개). */
export const MODELHOUSE = {
  address: "인천광역시 미추홀구 숭의동 117-11번지",
  hours: "10:00 ~ 18:00",
} as const;

export const content = {
  /** 단지 기본 */
  project: {
    name: "두산위브 더센트럴 도화",
    developerType: "도화4구역 주택재개발정비사업",
    siteAddress: "인천광역시 미추홀구 도화동 53-28번지 일원",
    modelHouseAddress: "인천광역시 미추홀구 숭의동 117-11번지",
    regulation: "비규제지역(비투기과열·비청약과열) · 분양가상한제 미적용 민영주택",
    moveInPlan: "2028년 11월 예정",
  },

  /** 규모 */
  scale: {
    floors: "지하 2층, 지상 19~39층",
    maxFloor: 39,
    buildings: 7,
    totalHouseholds: 660,
    generalSupply: 412, // 일반분양(특별공급 212 + 일반공급 200)
    specialSupplyTotal: 212,
    generalOnly: 200,
    lowestFloorPriority: 20,
    // 대지면적·건폐율·용적률·총주차대수: 공고문 미기재 → 미확정
    landArea: TBD,
    buildingCoverageRatio: TBD,
    floorAreaRatio: TBD,
    parking: TBD,
  },

  /** 특별공급 유형별 (공고 p7 합계) */
  specialSupply: {
    기관추천: 37,
    다자녀가구: 39,
    신혼부부: 92,
    노부모부양: 10,
    생애최초: 34,
  },

  /**
   * 주택형 (전용 7종, 전 주택형 85㎡ 이하 → 부가세 비과세).
   * exclusiveArea ㎡ / 일반분양 세대수 / 공급금액(원) 최저~최고(층·향 차등).
   */
  unitTypes: [
    { type: "59A", exclusiveArea: 59.9210, households: 102, priceMin: 444_000_000, priceMax: 489_000_000 },
    { type: "59B", exclusiveArea: 59.9048, households: 10, priceMin: 443_000_000, priceMax: 470_000_000 },
    { type: "74A", exclusiveArea: 74.9724, households: 57, priceMin: 495_000_000, priceMax: 549_000_000 },
    { type: "74B", exclusiveArea: 74.9929, households: 15, priceMin: 513_000_000, priceMax: 540_000_000 },
    { type: "84A", exclusiveArea: 84.9911, households: 110, priceMin: 596_000_000, priceMax: 659_000_000 },
    { type: "84B", exclusiveArea: 84.9675, households: 103, priceMin: 586_000_000, priceMax: 649_000_000 },
    { type: "84C", exclusiveArea: 84.9918, households: 15, priceMin: 596_000_000, priceMax: 641_000_000 },
  ],

  /** 분양가 (공고 p8~9). 전체 층별표는 extraction/official-facts.json tables.분양가. */
  price: {
    overallMin: 443_000_000, // 59B
    overallMax: 659_000_000, // 84A
    vatNote: "전용 85㎡ 이하 부가세 비과세",
    asOf: "입주자모집공고 2025.08.29 기준",
    // 5% 할인 프로모션: 공식 수치·기간 미확정 → 예시·면책으로만 표기, 단정 금지
    discount5pct: TBD,
  },

  /** 납부 구조 (공고 p8) */
  payment: {
    structure: "계약금 5% + 중도금 60%(6회 각 10%) + 잔금 35%",
    downPayment1st: 10_000_000, // 1차 계약시 정액
    downPayment2ndDate: "2025-10-28",
    middlePaymentDates: ["2025-12-19", "2026-08-10", "2027-02-10", "2027-08-10", "2027-11-10", "2028-03-10"],
    balanceNote: "잔금 35% 입주지정일",
  },

  /** 발코니 확장비 (유상, VAT포함, 별도계약 — 공고 p43) */
  balconyExpansion: {
    "59A": 14_200_000, "59B": 14_000_000,
    "74A": 15_900_000, "74B": 15_900_000,
    "84A": 17_000_000, "84B": 16_800_000, "84C": 17_000_000,
  },

  /** 일정 (공고 p1·p5) — 청약 종료. 콘텐츠엔 '선착순 분양 중' 프레이밍(미분양 표현 금지). */
  schedule: {
    announcement: "2025-08-29",
    modelHouseOpen: "2025-09-05",
    specialSupply: "2025-09-08",
    firstPriority: "2025-09-09",
    secondPriority: "2025-09-10",
    winnerAnnounce: "2025-09-17",
    documentSubmit: "2025-09-20 ~ 2025-09-22 10:00~16:00",
    contract: "2025-09-28 ~ 2025-09-30 10:00~16:00", // 공고문 기준(일부 안내문 17:00은 오기)
    transferRestriction: "당첨자발표일(2025-09-17)로부터 1년",
    reTargetingNote: "재당첨제한·거주의무 없음(비규제)",
  },

  /** 지역우선공급 (공고 p23) */
  regionalPriority: "주택형별 50% 인천(해당지역) 우선, 나머지 수도권(서울·경기)",

  /** 중도금 대출 (BNK경남은행 안내문 — 금리는 시점 변동값) */
  middleLoan: {
    bank: "BNK경남은행",
    rate: "변동 연 4.20% (신잔액 COFIX 6개월 2.48% + 1.72%)",
    rateAsOf: "2026-01-27 기준",
    method: "이자후불제 · 만기일시상환",
    limit: "분양대금의 60% 이내(HUG 보증한도 이내)",
    maturity: "2029-03-31",
    hugFee: "보증부대출의 0.13%",
  },

  /** 사업 주체 (3주체 — 공고 p64·p10) */
  parties: {
    developer: "도화4구역 주택재개발정비사업조합",
    contractor: "두산건설 주식회사",
    guarantor: "주택도시보증공사(HUG) 분양보증",
    guaranteeAmount: 152_683_700_000,
  },

  /** 연락처 — 사이트 표시 상담번호 = salesPhone(1800-9570). 두 번호 별개·통합 금지. */
  contact: {
    salesPhone: "1800-9570", // 사이트 분양 상담번호(홈페이지 대표 — 헤더·콜바·모델하우스·분양안내·FAQ 공통)
    noticePhone: "1899-4447", // 입주자모집공고 PDF상 분양문의(공고 컨텍스트 — 사이트 미표시)
  },

  /** 분양광고 표기(법규) — 광고심의필 번호는 미확정(배포 전 확보 필수, 11단계 blocker) */
  legal: {
    adReviewNumber: TBD,
    priceBasisNote: "입주자모집공고(2025.08.29) 기준",
    parties3: "시행: 도화4구역 주택재개발정비사업조합 / 시공: 두산건설(주) / 분양보증: 주택도시보증공사(HUG)",
  },
} as const;

export type Content = typeof content;
export default content;
