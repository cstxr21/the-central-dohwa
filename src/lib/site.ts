/**
 * site.ts — 사이트 공통 메타 단일 소스 (현장 무관 컴포넌트가 참조).
 * 현장 fact 수치는 content.ts, 사이트 메타/도메인/검증토큰은 여기.
 * (verify.mjs가 slug·ogImage를 여기서 자동 감지 — slug 맨 앞 키)
 */
export const site = {
  slug: "doosan-the-central-dohwa",
  name: "두산위브 더센트럴 도화",
  alternateName: ["두산위브더센트럴도화", "도화 두산위브", "도화4구역 두산위브"],
  domain: "https://www.gallerycenter.co.kr",
  // 절대 URL (canonical/OG/JSON-LD/sitemap·rss 절대경로 생성용)
  origin: "https://www.gallerycenter.co.kr",
  locale: "ko_KR",
  description:
    "인천 미추홀구 도화동 두산위브 더센트럴 도화 공식 분양 정보 — 도화4구역 재개발, 지하2층~지상39층 7개동 660세대.",
  // OG 이미지: webp 금지 — jpg (SNS 크롤러 호환). 1200×630.
  ogImage: "/images/og/doosan-the-central-dohwa-og.jpg",
  // 검색엔진 verification 토큰 (발급 후 교체 — head meta, robots 금지)
  verification: {
    naver: "",
    google: "",
  },
  // 3주체 (분양광고 푸터 — content.ts.parties와 동기)
  parties: {
    developer: "도화4구역 주택재개발정비사업조합",
    contractor: "두산건설(주)",
    guarantor: "주택도시보증공사(HUG)",
  },
} as const;

export type Site = typeof site;
export default site;
