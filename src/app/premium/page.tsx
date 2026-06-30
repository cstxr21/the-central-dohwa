import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import SectionHeading from "@/components/SectionHeading";
import PageOutro from "@/components/PageOutro";
import { SUB } from "@/lib/images";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 프리미엄 | 교통·생활·설계·브랜드" },
  description: "두산위브 더센트럴 도화 프리미엄. 쾌속교통·중심생활·에코힐링·희소가치·혁신설계·두산위브 브랜드 6대 프리미엄을 안내합니다.",
  alternates: { canonical: "/premium" },
};

// CENTRAL PREMIUM 6대 (premium-02 패널 OCR 기준). 입지·단지 상세는 해당 페이지에 1곳만 — 여기선 요약.
const PREMIUMS = [
  { no: "01", title: "쾌속교통", desc: "1호선 도화역과 경인로·도화IC(인천대로)·경인고속도로가 가까운 교통 환경." },
  { no: "02", title: "중심생활", desc: "이마트 트레이더스·홈플러스·앨리웨이 인천·인천광역시의료원 등 생활 인프라 인접." },
  { no: "03", title: "에코힐링", desc: "지상에 차 없는 공원형 단지를 지향한 조경·휴식 공간 계획." },
  { no: "04", title: "희소가치", desc: "도화동에 모처럼 공급되는 신규 분양 단지(언론 보도 기준 5년 만)." },
  { no: "05", title: "혁신설계", desc: "최고 39층, 스카이라운지·게스트하우스 등 커뮤니티를 담은 설계." },
  { no: "06", title: "브랜드", desc: "두산건설이 전개하는 두산위브 브랜드의 주거 상품성." },
];

export default function Page() {
  return (
    <>
      <PageHero title="프리미엄" eyebrow="PREMIUM" motif="bloom" path="/premium" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화는 교통·생활·설계·브랜드가 어우러진 주거 가치를 지향합니다. 단지가 내세우는 여섯 가지 프리미엄을 요약해
            안내하며, 입지와 단지 상세는 각 페이지에서 더 자세히 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10">
          <SectionHeading no="01" en="Central Premium" title="6대 프리미엄" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Figure src={SUB.premium[0].src} w={SUB.premium[0].w} h={SUB.premium[0].h} alt={SUB.premium[0].alt} caption={SUB.premium[0].caption} priority />
            <dl className="divide-y divide-line border-t border-line">
              {PREMIUMS.map((p) => (
                <div key={p.no} className="py-5">
                  <dt className="flex items-baseline gap-3">
                    <span className="font-accent text-[15px] italic text-bronze">{p.no}</span>
                    <span className="text-[18px] font-medium text-ink">{p.title}</span>
                  </dt>
                  <dd className="mt-2 text-[17px] leading-[1.8] text-muted">{p.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-8 text-[15px] text-muted">
            교통·입지 상세는{" "}
            <Link href="/location" className="text-ink underline underline-offset-4 hover:text-bronze">
              입지환경
            </Link>
            , 조경·커뮤니티 상세는{" "}
            <Link href="/complex" className="text-ink underline underline-offset-4 hover:text-bronze">
              단지안내
            </Link>
            에서 확인하세요.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="프리미엄 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화는 인천 미추홀구 도화동에 들어서는 단지로, 교통·생활·설계·브랜드의 여섯 가지 프리미엄을 핵심 가치로
              제시합니다. 수도권 1호선 도화역 생활권의 쾌속교통과 트레이더스·홈플러스·앨리웨이 인천 등 중심생활 인프라가 가까운 점이 입지
              측면의 강점입니다.
            </p>
            <p>
              단지 측면에서는 최고 39층 규모에 스카이라운지와 게스트하우스 등 커뮤니티를 담은 혁신설계, 지상을 공원형으로 계획한 에코힐링,
              그리고 도화동에 5년 만에 공급되는 신규 분양이라는 희소가치를 내세웁니다. 두산건설의 두산위브 브랜드가 더해진 주거 상품성이
              종합적인 셀링 포인트입니다.
            </p>
            <p>
              프리미엄 페이지는 단지의 종합 가치를 요약해 전달하며, 교통·개발호재 등 입지 상세는 입지환경, 조경·커뮤니티·배치 상세는
              단지안내에서 각각 깊이 있게 안내합니다. 전망성 항목은 관계 기관 고시 기준의 예정·추진 사항으로 단정하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      <PageOutro />
    </>
  );
}
