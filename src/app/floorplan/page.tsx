import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PlanTabs, { type PlanType } from "@/components/PlanTabs";
import PageOutro from "@/components/PageOutro";
import JsonLd from "@/components/JsonLd";
import { residenceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 평면도 | 전용 59·74·84㎡ 7개 주택형" },
  description: "두산위브 더센트럴 도화 평면도. 전용 59·74·84㎡ 7개 주택형의 전용·공급면적·세대수와 단위세대 평면도를 안내합니다.",
  alternates: { canonical: "/floorplan" },
};

// 전용·공급면적·일반분양 세대수 = 입주자모집공고(1b 검증)값 · 평면도 패널 = 타입별 평면안내(면적표 포함).
const PIMG = (n: string, t: string, w: number, h: number) => ({ src: `/images/type/doosan-the-central-dohwa-type-${n}.webp`, w, h, alt: `두산위브 더센트럴 도화 ${t} 평면도` });
const TYPES: PlanType[] = [
  { type: "59A", exclusive: 59.92, supply: 82.95, households: 102, img: PIMG("08", "전용 59A", 1200, 1303) },
  { type: "59B", exclusive: 59.9, supply: 82.93, households: 10, img: PIMG("09", "전용 59B", 1200, 1303) },
  { type: "74A", exclusive: 74.97, supply: 100.66, households: 57, img: PIMG("10", "전용 74A", 1200, 1303) },
  { type: "74B", exclusive: 74.99, supply: 103.99, households: 15, img: PIMG("11", "전용 74B", 1200, 1303) },
  { type: "84A", exclusive: 84.99, supply: 116.0, households: 110, img: PIMG("12", "전용 84A", 1200, 1233) },
  { type: "84B", exclusive: 84.97, supply: 117.59, households: 103, img: PIMG("13", "전용 84B", 1200, 1426) },
  { type: "84C", exclusive: 84.99, supply: 111.92, households: 15, img: PIMG("14", "전용 84C", 1200, 1233) },
];

export default function Page() {
  return (
    <>
      <JsonLd data={residenceJsonLd("/floorplan")} />
      <PageHero title="평면도" eyebrow="FLOOR PLAN" motif="unit" path="/floorplan" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화는 전용면적 59㎡·74㎡·84㎡의 7개 주택형(59A·59B·74A·74B·84A·84B·84C)으로 구성됩니다. 주택형 탭을 선택하면
            전용·공급면적과 일반분양 세대수, 단위세대 평면도를 함께 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10">
          <SectionHeading no="01" en="Unit Types" title="전용면적 구성 — 59·74·84㎡" />
          <div className="mt-10">
            <PlanTabs types={TYPES} />
          </div>
          <p className="mt-8 text-[15px] text-muted">
            ※ 면적·세대수는 입주자모집공고(2025.08.29) 기준입니다. 평면도의 가구·소품은 연출된 것으로 실제 시공과 차이가 있을 수 있으며,
            자세한 사항은 견본주택 및 승인된 입주자모집공고를 확인하시기 바랍니다.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="주택형 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화는 전용면적 59㎡·74㎡·84㎡ 세 가지 면적대의 7개 주택형으로 공급됩니다. 일반분양 412세대 가운데 84㎡대가
              228세대로 가장 많고, 59㎡대 112세대, 74㎡대 72세대로 구성되어 1~2인 가구부터 자녀를 둔 가족까지 선택의 폭이 넓습니다.
            </p>
            <p>
              같은 면적대라도 A·B(또는 C) 타입에 따라 평면 구성이 달라 생활 방식에 맞춰 고를 수 있으며, 전 주택형이 전용 85㎡ 이하로 부가세
              비과세 대상입니다. 주택형별 단위세대 평면도와 면적 구성을 탭에서 확인하실 수 있으며, 평면도의 가구·소품은 연출된 것으로 실제와
              차이가 있을 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <PageOutro />
    </>
  );
}
