import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import SectionHeading from "@/components/SectionHeading";
import PageOutro from "@/components/PageOutro";
import { SUB } from "@/lib/images";
import JsonLd from "@/components/JsonLd";
import { residenceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 입지환경 | 교통·생활·개발호재" },
  description: "두산위브 더센트럴 도화 입지환경. 수도권 1호선 도화역과 경인로·인천대로 교통, 생활인프라·개발호재·미래가치를 안내합니다.",
  alternates: { canonical: "/location" },
};

const TRANSIT = [
  { line: "수도권 1호선 (경인선)", desc: "도화역 생활권 · 인근 도원·제물포·주안역" },
  { line: "도로", desc: "경인로 · 인천대로(도화IC) · 경인고속도로" },
  { line: "광역 (예정/공사중)", desc: "수도권제2순환고속도로(인천–김포) · GTX-B(공사중)" },
];

const INFRA = ["이마트 트레이더스 · 홈플러스", "앨리웨이 인천 · 도화종합시장", "인천광역시의료원 등 의료시설", "인천대학교 제물포캠퍼스 · 학군"];

export default function Page() {
  return (
    <>
      <JsonLd data={residenceJsonLd("/location")} />
      <PageHero title="입지환경" eyebrow="LOCATION" motif="map" path="/location" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화는 인천광역시 미추홀구 도화동 53-28번지 일원, 수도권 1호선 도화역 생활권에 자리합니다. 인천 원도심의
            교통·생활 인프라를 가깝게 누리면서 주변 도시재생과 함께 주거 환경이 정비되고 있는 입지입니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10">
          <SectionHeading no="01" en="Transit" title="도화역 생활권 교통환경" />
          <div className="mt-10">
            <Figure src={SUB.location[0].src} w={SUB.location[0].w} h={SUB.location[0].h} alt={SUB.location[0].alt} caption={SUB.location[0].caption} priority />
          </div>
          <dl className="mt-10 border-t border-line">
            {TRANSIT.map((t) => (
              <div key={t.line} className="grid grid-cols-1 gap-1 border-b border-line py-5 sm:grid-cols-[260px_1fr] sm:gap-6">
                <dt className="text-[16px] font-medium text-ink">{t.line}</dt>
                <dd className="text-[17px] text-muted">{t.desc}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[15px] text-muted">※ GTX-B·광역 교통망은 관계 기관 고시 기준의 예정·추진 사항으로, 일정·계획은 변경될 수 있습니다.</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="02" en="Map" title="광역 입지·생활인프라" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Figure src={SUB.location[1].src} w={SUB.location[1].w} h={SUB.location[1].h} alt={SUB.location[1].alt} caption={SUB.location[1].caption} />
            <Figure src={SUB.location[2].src} w={SUB.location[2].w} h={SUB.location[2].h} alt={SUB.location[2].alt} caption={SUB.location[2].caption} />
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {INFRA.map((x) => (
              <li key={x} className="flex items-start gap-2 text-[17px] text-ink">
                <span className="text-bronze">·</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10">
          <SectionHeading no="03" en="Development" title="개발호재와 미래가치" />
          <p className="mt-6 text-[17px] leading-[1.9] text-muted">
            도화동 일대는 도화도시개발과 원도심 재생이 이어지는 지역으로, 인천일반산업단지·주안국가산업단지·현대제철 등 배후 산업 수요와
            가깝습니다. 교통 측면에서는 인천 제2차 도시철도망 구축계획에 포함되어 국토교통부 승인을 받은 <strong className="font-medium text-ink">가좌송도선</strong>이
            도화 일대를 경유할 예정이며, 광역 철도 GTX-B와 수도권제2순환고속도로(인천–김포)도 추진·예정 단계입니다.
          </p>
          <p className="mt-4 text-[15px] leading-[1.8] text-muted">
            ※ 가좌송도선·GTX-B 등은 도시철도망 구축계획 승인 단계로 예비타당성조사 등 후속 절차가 남아 있으며, 역 위치·명칭·개통 시기 등
            사업 계획과 일정은 관계 기관 사정에 따라 변경될 수 있습니다(국토교통부 도시철도망 구축계획 등 출처 기준).
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="입지 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화는 인천광역시 미추홀구 도화동 53-28번지 일원에 위치하며, 수도권 1호선 도화역을 생활권으로 둡니다.
              인근에는 도원역·제물포역·주안역이 이어져 인천 도심과 서울 방면 이동이 편리하고, 경인로와 인천대로(도화IC)·경인고속도로 등
              간선도로가 가깝습니다.
            </p>
            <p>
              생활 인프라로는 이마트 트레이더스와 홈플러스, 앨리웨이 인천, 도화종합시장 등 쇼핑·생활 시설과 인천광역시의료원을 비롯한
              의료시설이 자리하며, 인천대학교 제물포캠퍼스 등 교육시설이 인접해 있습니다. 배후로는 인천일반산업단지·주안국가산업단지·현대제철
              등 산업 수요가 가깝습니다.
            </p>
            <p>
              인천 제2차 도시철도망 구축계획에 포함되어 국토교통부 승인을 받은 가좌송도선이 도화 일대를 경유할 예정이고, 광역 철도 GTX-B와
              수도권제2순환고속도로(인천–김포)도 추진·예정 단계입니다. 다만 이들 노선은 예비타당성조사 등 후속 절차가 남은 계획 단계로 역
              위치·개통 시기는 변경될 수 있어 단정하지 않고 안내합니다. 도화동 원도심 재생과 함께 중장기 주거 환경 개선이 기대되는 입지입니다.
            </p>
          </div>
        </div>
      </section>

      <PageOutro />
    </>
  );
}
