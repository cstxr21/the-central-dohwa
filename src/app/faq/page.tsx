import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PageOutro from "@/components/PageOutro";
import { FAQS, FAQ_CATEGORIES } from "@/lib/faq";
import { LAST_UPDATED } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 FAQ | 자주 묻는 질문" },
  description: "두산위브 더센트럴 도화 자주 묻는 질문. 분양, 방문예약, 계약·입주, 주차·이용 등 궁금한 점을 입주자모집공고 기준으로 안내합니다.",
  alternates: { canonical: "/faq" },
};

// FAQPage JSON-LD — 사이트 FAQ 허브(이 페이지에만). dateModified 포함.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: LAST_UPDATED,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title="자주 묻는 질문" eyebrow="FAQ" motif="qa" path="/faq" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화 분양·방문예약·계약·이용에 대해 자주 묻는 질문을 모았습니다. 분양가 등 상세는{" "}
            <Link href="/sales" className="text-ink underline underline-offset-4 hover:text-bronze">
              분양안내
            </Link>
            , 방문은{" "}
            <Link href="/modelhouse" className="text-ink underline underline-offset-4 hover:text-bronze">
              모델하우스
            </Link>
            에서도 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10">
          {FAQ_CATEGORIES.map((cat) => {
            const items = FAQS.filter((f) => f.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mb-12">
                <SectionHeading title={cat} />
                <div className="mt-6 border-t border-line">
                  {items.map((f) => (
                    <details key={f.q} className="group border-b border-line py-2">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-[18px] font-medium text-ink">
                        <span>{f.q}</span>
                        <span className="shrink-0 text-bronze transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <p className="pb-4 text-[17px] leading-[1.9] text-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="자주 묻는 질문 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화 FAQ는 분양 관련 질문, 방문예약 안내, 계약 및 입주 안내, 주차 및 이용 안내, 기타 문의사항의 다섯 가지
              주제로 자주 묻는 내용을 정리했습니다. 단지는 인천 미추홀구 도화동 도화4구역에 들어서는 660세대 규모로, 전용 59·74·84㎡ 7개
              주택형으로 공급됩니다.
            </p>
            <p>
              분양가·청약·일정 등 확정 전이거나 변동 가능한 사항은 임의로 안내하지 않고 입주자모집공고 기준으로 안내합니다. 정규 청약은
              마감되어 현재 선착순 동·호 지정 계약이 진행 중이며, 추가 문의는 분양 상담실 1800-9570으로 연락하시거나 관심고객 등록 후 안내받으실
              수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <PageOutro />
    </>
  );
}
