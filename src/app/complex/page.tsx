import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import SectionHeading from "@/components/SectionHeading";
import PageOutro from "@/components/PageOutro";
import { SUB } from "@/lib/images";
import JsonLd from "@/components/JsonLd";
import { residenceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 단지안내 | 배치도·조경·커뮤니티" },
  description: "두산위브 더센트럴 도화 단지안내. 660세대 배치도, 조경계획, 스카이라운지·게스트하우스·피트니스 등 커뮤니티 시설을 안내합니다.",
  alternates: { canonical: "/complex" },
};

const [tour, plan, placement, special, communityPanel, storage, fitness] = SUB.complex;

const COMMUNITY = [
  { group: "운동·건강", items: "피트니스센터 · 실내 골프연습장 · 주민운동시설" },
  { group: "라운지·휴식", items: "스카이라운지(최고 39층) · 게스트하우스 · 작은도서관 · 1인 독서실" },
  { group: "생활편의", items: "세대창고 · 무인택배시스템 · 맘스스테이션" },
  { group: "조경", items: "중앙광장 · 어린이공원 · 소공원 · 테마숲 · 어린이놀이터" },
];

const ESG = ["태양광 발전 시스템", "대기전력 차단 시스템", "ECO 에너지 절약 수전", "전세대·공용부 LED 조명"];

export default function Page() {
  return (
    <>
      <JsonLd data={residenceJsonLd("/complex")} />
      <PageHero title="단지안내" eyebrow="COMPLEX" motif="plan" path="/complex" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화는 101동부터 107동까지 7개 동, 660세대가 조경·커뮤니티와 함께 배치되는 단지입니다. 단지 배치와 조경,
            커뮤니티 시설을 안내합니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10">
          <SectionHeading no="01" en="Landscape & Site" title="단지 조경과 배치" />
          <div className="mt-10 space-y-12">
            <Figure src={tour.src} w={tour.w} h={tour.h} alt={tour.alt} caption={tour.caption} priority />
            <Figure src={plan.src} w={plan.w} h={plan.h} alt={plan.alt} caption={plan.caption} />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="02" en="Unit Placement" title="동·호수 배치도" />
          <p className="mt-6 text-[17px] leading-[1.9] text-muted">101동~107동, 지상 1층부터 37층까지 동·호수 배치와 스카이라운지·필로티 등 특수층 구성을 안내합니다.</p>
          <div className="mt-10">
            <Figure src={placement.src} w={placement.w} h={placement.h} alt={placement.alt} caption={placement.caption} />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10">
          <SectionHeading no="03" en="Community" title="커뮤니티 시설" />
          <dl className="mt-8 border-t border-line">
            {COMMUNITY.map((c) => (
              <div key={c.group} className="grid grid-cols-1 gap-1 border-b border-line py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="text-[16px] font-medium text-ink">{c.group}</dt>
                <dd className="text-[17px] text-muted">{c.items}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Figure src={storage.src} w={storage.w} h={storage.h} alt={storage.alt} caption={storage.caption} />
            <Figure src={fitness.src} w={fitness.w} h={fitness.h} alt={fitness.alt} caption={fitness.caption} />
          </div>
          <div className="mt-10">
            <Figure src={communityPanel.src} w={communityPanel.w} h={communityPanel.h} alt={communityPanel.alt} caption={communityPanel.caption} />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="04" en="Signature & ESG" title="특화 공간과 친환경 설비" />
          <div className="mt-10">
            <Figure src={special.src} w={special.w} h={special.h} alt={special.alt} caption={special.caption} />
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {ESG.map((x) => (
              <li key={x} className="flex items-start gap-2 text-[17px] text-ink">
                <span className="text-bronze">·</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] text-muted">
            단위세대 평면과 면적 구성은{" "}
            <Link href="/floorplan" className="text-ink underline underline-offset-4 hover:text-bronze">
              평면도
            </Link>
            에서 확인하실 수 있습니다. 단지 이미지는 CG로 실제와 차이가 있을 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="단지 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화는 101동부터 107동까지 7개 동, 총 660세대가 지하 2층~지상 39층 규모로 배치되는 단지입니다. 중앙광장과
              어린이공원·소공원·테마숲 등 조경 공간이 동 사이에 계획되어 있고, 단지 배치와 동·호수 구성은 배치도로 안내합니다.
            </p>
            <p>
              커뮤니티는 운동·건강(피트니스센터·실내 골프연습장·주민운동시설), 라운지·휴식(최고 39층 스카이라운지·게스트하우스·작은도서관·1인
              독서실), 생활편의(세대창고·무인택배시스템·맘스스테이션)로 구성됩니다. 입주민의 일상과 여가를 단지 안에서 누릴 수 있도록 시설을
              배치했습니다.
            </p>
            <p>
              친환경·관리비 측면에서는 태양광 발전과 대기전력 차단 시스템, ECO 절약 수전, 전세대·공용부 LED 조명 등을 적용했습니다. 단지
              관련 이미지는 이해를 돕기 위한 CG로 실제 시공과 차이가 있을 수 있으며, 자세한 사항은 승인된 입주자모집공고와 견본주택에서
              확인하시기 바랍니다.
            </p>
          </div>
        </div>
      </section>

      <PageOutro />
    </>
  );
}
