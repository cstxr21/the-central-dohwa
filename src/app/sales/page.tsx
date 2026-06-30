import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import SectionHeading from "@/components/SectionHeading";
import LineSpec from "@/components/LineSpec";
import PageOutro from "@/components/PageOutro";
import { content, SUBSCRIPTION_CLOSED, PROMO } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 분양안내 | 분양가·공급·일정" },
  description: "두산위브 더센트럴 도화 분양가·공급·계약 조건을 입주자모집공고 기준으로 안내. 현재 선착순 동·호 지정 계약 진행 중.",
  alternates: { canonical: "/sales" },
  openGraph: { title: "두산위브 더센트럴 도화 분양 — 인천 도화4구역 660세대", url: "/sales" },
};

const won = (n: number) => n.toLocaleString("ko-KR");

const SUPPLY = [
  { label: "단지명", value: content.project.name },
  { label: "대지위치", value: content.project.siteAddress },
  { label: "건축 규모", value: `${content.scale.floors}, ${content.scale.buildings}개동` },
  { label: "세대수", value: `총 ${content.scale.totalHouseholds}세대 (일반분양 ${content.scale.generalSupply}세대)` },
  { label: "전용면적", value: "59·74·84㎡, 7개 주택형" },
  { label: "입주 예정", value: content.project.moveInPlan },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: content.project.name,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: "인천광역시",
    addressLocality: "미추홀구",
    streetAddress: "도화동 53-28번지 일원",
  },
  numberOfAccommodationUnits: content.scale.totalHouseholds,
  makesOffer: {
    "@type": "AggregateOffer",
    priceCurrency: "KRW",
    lowPrice: content.price.overallMin,
    highPrice: content.price.overallMax,
    offerCount: content.scale.generalSupply,
    availability: "https://schema.org/InStock",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title="분양안내" eyebrow="SALES" motif="doc" path="/sales" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화의 공급 개요와 분양가, 공급·계약 조건을 입주자모집공고(2025.08.29) 기준으로 안내합니다. 정규 청약은 마감되어
            현재 잔여 세대를 대상으로 선착순 동·호 지정 계약이 진행 중입니다.
          </p>
          <div className="mx-auto mt-10 max-w-[440px]">
            <Figure
              src="/images/hero/doosan-the-central-dohwa-sales-promo.png"
              w={900}
              h={1029}
              alt="두산위브 더센트럴 도화 분양 안내 — 2028년 11월 입주, 비규제지역, 선착순 동·호 지정 계약"
              caption="※ 이미지의 분양가 할인·계약금·교통(가좌송도선 등) 안내는 예시·참고용입니다. 적용 조건·할인율·기간·역 위치 및 개통 시기 등은 입주자모집공고 및 분양 상담실 안내를 따르며 변경될 수 있습니다."
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10">
          <SectionHeading no="01" en="Supply" title="공급 개요" />
          <LineSpec className="mt-8" numbered items={SUPPLY} />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="02" en="Price" title="분양가 안내 — 주택형별 공급금액" />
          <p className="mt-6 text-[17px] text-muted">전 주택형 전용 85㎡ 이하 부가세 비과세. 층·향에 따라 차등 적용되며, 아래 금액은 입주자모집공고(2025.08.29) 기준입니다.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-t border-line text-left">
              <thead>
                <tr className="border-b border-line text-[15px] text-muted">
                  <th className="py-3 font-medium">주택형</th>
                  <th className="py-3 font-medium">전용면적</th>
                  <th className="py-3 font-medium">일반분양</th>
                  <th className="py-3 font-medium">공급금액(원)</th>
                </tr>
              </thead>
              <tbody>
                {content.unitTypes.map((t) => (
                  <tr key={t.type} className="border-b border-line">
                    <td className="py-3 text-[17px] font-medium text-ink">{t.type}</td>
                    <td className="py-3 text-[17px] text-ink">{t.exclusiveArea}㎡</td>
                    <td className="py-3 text-[17px] text-ink">{t.households}세대</td>
                    <td className="py-3 text-[17px] text-ink">
                      {won(t.priceMin)} ~ {won(t.priceMax)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[15px] text-muted">
            ※ 발코니 확장·유상옵션 비용 및 취득세·등기비용은 분양가에 미포함됩니다. 할인 등 별도 프로모션이 있는 경우 조건은 입주자모집공고
            및 분양 상담실 안내를 따릅니다(예시·참고용, 공식 수치·기간은 변동될 수 있음).
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10">
          <SectionHeading no="03" en="Contract" title="공급·계약 조건" />
          {SUBSCRIPTION_CLOSED && (
            <p className="mt-6 text-[17px] font-medium text-ink">정규 청약 마감 · 현재 선착순 동·호 지정 계약 진행 중</p>
          )}
          <p className="mt-3 text-[17px] leading-[1.9] text-muted">
            청약통장·순위와 무관하게 잔여 세대를 대상으로 동·호를 지정해 계약하실 수 있습니다. 잔여 세대 현황과 동·호 지정은 분양 상담을 통해
            안내받으실 수 있습니다.
          </p>
          <LineSpec
            className="mt-8"
            items={[
              { label: "납부 구조", value: content.payment.structure },
              { label: "중도금 대출", value: `${content.middleLoan.bank} · ${content.middleLoan.method} (한도 ${content.middleLoan.limit})` },
              { label: "전매제한", value: content.schedule.transferRestriction + " · " + content.schedule.reTargetingNote },
              { label: "지역우선공급", value: content.regionalPriority },
            ]}
          />

          <div className="mt-10 border-t border-line pt-8">
            <h3 className="text-[18px] font-medium text-ink">
              현재 분양 혜택 <span className="text-[15px] font-normal text-muted">({PROMO.asOf} 기준 진행 중)</span>
            </h3>
            {PROMO.active && (
              <ul className="mt-4 space-y-2 text-[17px] leading-[1.8] text-ink">
                {PROMO.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="text-bronze">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}
            <ul className="mt-4 space-y-2 text-[17px] leading-[1.8] text-muted">
              <li>· 비규제지역으로 규제지역 대비 대출 활용 여건이 상대적으로 유리할 수 있습니다(개인 신용·금융기관 심사에 따름).</li>
              <li>· 중도금 이자후불제로, 입주 시 잔금 대출로 정산하는 납부 구조입니다.</li>
            </ul>
            <p className="mt-4 text-[15px] text-muted">※ {PROMO.note}</p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="04" en="Parties & Notice" title="사업주체 및 유의사항" />
          <LineSpec
            className="mt-8"
            items={[
              { label: "시행 (사업주체)", value: content.parties.developer },
              { label: "시공", value: content.parties.contractor },
              { label: "분양보증 (신탁)", value: content.parties.guarantor },
            ]}
          />
          <p className="mt-6 text-[15px] leading-[1.8] text-muted">
            본 안내의 분양가·공급 조건은 입주자모집공고를 기준으로 하며, 자세한 사항은 승인된 입주자모집공고와 분양 상담실을 통해 확인하시기
            바랍니다. 주택형별 평면과 면적 구성은{" "}
            <Link href="/floorplan" className="text-ink underline underline-offset-4 hover:text-bronze">
              평면도
            </Link>
            에서 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="분양 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화는 인천 미추홀구 도화동 도화4구역 주택재개발로 공급되는 660세대 규모 단지로, 이 가운데 412세대가
              일반분양 물량입니다. 주택형은 전용 59㎡·74㎡·84㎡의 7개 타입이며 전 주택형이 전용 85㎡ 이하로 부가세 비과세 대상입니다.
            </p>
            <p>
              분양가는 주택형과 층·향에 따라 차등 적용되며, 분양가·공급 조건은 입주자모집공고(2025.08.29) 기준으로 안내합니다. 정규 청약은
              마감되어 현재는 잔여 세대를 대상으로 선착순 동·호 지정 계약이 진행 중이며, 청약통장·순위와 무관하게 계약이 가능합니다. 납부는
              계약금 5%·중도금 60%(6회)·잔금 35% 구조이고, 비규제지역 민영주택으로 재당첨제한·거주의무는 적용되지 않습니다.
            </p>
            <p>
              사업 시행은 도화4구역 주택재개발정비사업조합, 시공은 두산건설 주식회사, 분양보증은 주택도시보증공사(HUG)가 담당합니다. 잔여 세대
              현황과 동·호 지정, 분양가 등 자세한 사항은 분양 상담실 {content.contact.salesPhone}으로 문의하거나 관심고객 등록 후 안내받으실 수
              있습니다.
            </p>
          </div>
        </div>
      </section>

      <PageOutro title="분양가·잔여 세대 안내를 받아보세요" text="관심고객으로 등록하시면 분양 상담실에서 잔여 세대 현황과 동·호 지정을 안내해 드립니다." />
    </>
  );
}
