import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import LineSpec from "@/components/LineSpec";
import SectionHeading from "@/components/SectionHeading";
import PageOutro from "@/components/PageOutro";
import { SUB } from "@/lib/images";
import { content } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { residenceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 사업개요 | 공급정보 안내" },
  description: "두산위브 더센트럴 도화 사업개요. 인천 미추홀구 도화동 도화4구역, 지하2층~지상39층 7개동 660세대·전용 59·74·84㎡ 안내.",
  alternates: { canonical: "/overview" },
};

const SPEC = [
  { label: "단지명", value: content.project.name },
  { label: "위치", value: content.project.siteAddress },
  { label: "건축 규모", value: content.scale.floors + ", " + content.scale.buildings + "개동" },
  { label: "총 세대수", value: `총 ${content.scale.totalHouseholds}세대 (일반분양 ${content.scale.generalSupply}세대)` },
  { label: "전용면적", value: "59·74·84㎡, 7개 주택형" },
  { label: "입주 예정", value: content.project.moveInPlan },
  { label: "시행 / 시공", value: `${content.parties.developer} / ${content.parties.contractor}` },
];

export default function Page() {
  return (
    <>
      <JsonLd data={residenceJsonLd("/overview")} />
      <PageHero title="사업개요" eyebrow="OVERVIEW" motif="circle" path="/overview" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화는 인천 미추홀구 도화동 도화4구역 주택재개발정비사업으로 공급되는 단지입니다. 지하 2층부터 지상 39층까지
            7개 동, 총 660세대 규모로 조성되며 이 가운데 412세대가 일반분양됩니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
          <SectionHeading no="01" en="Bird's-eye View" title="단지 조감" />
          <div className="mt-10 space-y-12">
            {SUB.overview.map((im, i) => (
              <Figure key={im.src} src={im.src} w={im.w} h={im.h} alt={im.alt} caption={im.caption} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="02" en="Project Spec" title="사업 개요 — 660세대 · 전용 59~84㎡" />
          <LineSpec className="mt-8" numbered items={SPEC} />
          <p className="mt-6 text-[15px] text-muted">
            분양가·청약 일정 등 공급 조건은 입주자모집공고 기준으로 안내하며, 자세한 내용은{" "}
            <Link href="/sales" className="text-ink underline underline-offset-4 hover:text-bronze">
              분양안내
            </Link>
            에서 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10">
          <SectionHeading no="03" en="Notice" title="법정 고지" />
          <p className="mt-6 text-[17px] leading-[1.9] text-muted">
            이동통신 구내 중계설비는 한국전파진흥협회(RAPA) 협의에 따라 단지 옥상층(102·103·107동) 및 지하 1·2층 등에 설치될 예정입니다.
            본 안내의 이미지·내용은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 자세한 사항은 승인된 입주자모집공고를
            확인하시기 바랍니다.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="사업개요 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화는 인천광역시 미추홀구 도화동 53-28번지 일원에 들어서는 도화4구역 주택재개발정비사업 단지입니다.
              지하 2층부터 지상 39층까지 7개 동, 총 660세대 규모로 조성되며, 이 가운데 412세대가 일반분양 물량으로 공급되었습니다.
            </p>
            <p>
              주거 공간은 전용면적 59㎡·74㎡·84㎡의 7개 주택형(59A·59B·74A·74B·84A·84B·84C)으로 구성되어 1~2인 가구부터 자녀를 둔
              가족까지 폭넓게 선택할 수 있습니다. 전 주택형이 전용 85㎡ 이하로 부가세 비과세 대상이며, 단지 설계와 커뮤니티는 두산건설의
              두산위브 브랜드 기준으로 계획되었습니다.
            </p>
            <p>
              사업 시행은 도화4구역 주택재개발정비사업조합, 시공은 두산건설 주식회사가 맡았으며 분양보증은 주택도시보증공사(HUG)가
              담당합니다. 입주는 2028년 11월 예정이고, 분양가·청약 일정 등 구체적인 공급 조건은 입주자모집공고 기준으로 안내합니다.
              방문 상담은 분양 상담실로 문의해 주세요.
            </p>
          </div>
        </div>
      </section>

      <PageOutro />
    </>
  );
}
