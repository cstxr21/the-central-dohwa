/**
 * images.ts — 페이지별 사용 이미지 매핑(1c curated → public/images webp). ratio = 실제 w/h(잘림 0).
 * 평면도·분양안내·모델하우스 섹션 이미지는 사용자가 첨부 → HOME에 등록 완료.
 */
// 서브페이지 이미지 (무크롭: w/h intrinsic). alt=단지명+주제(9단계 이미지SEO), caption=OCR 검증 명칭(창작 0).
// ⚠️ 홈↔서브·서브↔서브 동일 이미지 중복 게재 0 (near-dup). 평면도(type)·분양·모델하우스는 사용자 첨부 예정 → 미수록.
const P = "두산위브 더센트럴 도화";
export const SUB = {
  overview: [
    { src: "/images/overview/doosan-the-central-dohwa-overview-02.webp", w: 1920, h: 1358, alt: `${P} 단지 조감도`, caption: "단지 조감도 (주간)" },
    { src: "/images/overview/doosan-the-central-dohwa-overview-03.webp", w: 1920, h: 960, alt: `${P} 광역 항공 조감`, caption: "광역 항공 조감 — 도화동 일대" },
    { src: "/images/overview/doosan-the-central-dohwa-overview-04.webp", w: 1920, h: 1358, alt: `${P} 야간 단지 외관 조감`, caption: "야간 단지 외관 조감" },
  ],
  location: [
    { src: "/images/location/doosan-the-central-dohwa-location-04.webp", w: 1200, h: 1282, alt: `${P} 입지·교통 안내도`, caption: "입지·교통 안내도 (철도망·간선도로)" },
    { src: "/images/location/doosan-the-central-dohwa-location-02.webp", w: 475, h: 301, alt: `${P} 광역 입지도`, caption: "광역 입지도 — 1·2호선·산업단지" },
    { src: "/images/location/doosan-the-central-dohwa-location-01.webp", w: 475, h: 301, alt: `${P} 주변 약도`, caption: "주변 약도 — 1호선 도원·제물포역" },
  ],
  premium: [
    { src: "/images/premium/doosan-the-central-dohwa-premium-02.webp", w: 1200, h: 2329, alt: `${P} CENTRAL PREMIUM 6대 프리미엄`, caption: "CENTRAL PREMIUM — 6대 프리미엄 안내" },
  ],
  complex: [
    { src: "/images/complex/doosan-the-central-dohwa-complex-04.webp", w: 1920, h: 1358, alt: `${P} 단지 조경 투시도`, caption: "단지 조경 투시도 — 파고라·산책로" },
    { src: "/images/complex/doosan-the-central-dohwa-complex-05.webp", w: 1200, h: 830, alt: `${P} 단지배치도`, caption: "단지배치도 — 101~107동" },
    { src: "/images/complex/doosan-the-central-dohwa-complex-06.webp", w: 1200, h: 1686, alt: `${P} 동·호수 배치도`, caption: "동·호수 배치도 (1F~37F)" },
    { src: "/images/complex/doosan-the-central-dohwa-complex-07.webp", w: 1200, h: 922, alt: `${P} 단지 특화 안내`, caption: "단지 특화 — 스카이라운지·게스트하우스 등" },
    { src: "/images/complex/doosan-the-central-dohwa-complex-08.webp", w: 1200, h: 3808, alt: `${P} 커뮤니티·친환경 설비 안내`, caption: "커뮤니티·친환경(ESG) 설비 안내" },
    { src: "/images/complex/doosan-the-central-dohwa-complex-01.webp", w: 281, h: 288, alt: `${P} 세대창고`, caption: "세대창고" },
    { src: "/images/complex/doosan-the-central-dohwa-complex-02.webp", w: 281, h: 288, alt: `${P} 피트니스센터`, caption: "피트니스센터" },
  ],
} as const;

export const HOME = {
  hero: { src: "/images/hero/doosan-the-central-dohwa-hero-02.webp", alt: "두산위브 더센트럴 도화 단지 조감도", ratio: 3840 / 1940 },
  overview: { src: "/images/overview/doosan-the-central-dohwa-overview-01.webp", alt: "두산위브 더센트럴 도화 사업개요 투시도", ratio: 1920 / 970 },
  location: { src: "/images/location/doosan-the-central-dohwa-location-05.webp", alt: "두산위브 더센트럴 도화 입지 안내도", ratio: 4000 / 3317 },
  premium: { src: "/images/premium/doosan-the-central-dohwa-premium-01.webp", alt: "두산위브 더센트럴 도화 프리미엄 안내", ratio: 1200 / 2570 },
  complex: { src: "/images/complex/doosan-the-central-dohwa-complex-03.webp", alt: "두산위브 더센트럴 도화 단지 투시도", ratio: 1920 / 1358 },
  floorplan: { src: "/images/hero/doosan-the-central-dohwa-floorplan.webp", alt: "두산위브 더센트럴 도화 평면도", ratio: 1600 / 1000 },
  sales: { src: "/images/hero/doosan-the-central-dohwa-sales.webp", alt: "두산위브 더센트럴 도화 분양안내", ratio: 1600 / 1000 },
  modelhouse: { src: "/images/hero/doosan-the-central-dohwa-modelhouse-01.png", alt: "두산위브 더센트럴 도화 모델하우스", ratio: 1529 / 955 },
} as const;
