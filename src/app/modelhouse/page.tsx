import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import SectionHeading from "@/components/SectionHeading";
import InterestForm from "@/components/InterestForm";
import { content, MODELHOUSE } from "@/lib/content";
import { site } from "@/lib/site";

const SALES_PHONE = content.contact.salesPhone; // 1800-9570 (사이트 상담번호 = 견본주택 NAP·분양문의)

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 모델하우스 | 방문예약·분양상담" },
  description: "두산위브 더센트럴 도화 모델하우스(견본주택) 방문예약 안내. 인천 미추홀구 숭의동 117-11 위치·관람 예약 방법·분양상담을 안내합니다.",
  alternates: { canonical: "/modelhouse" },
};

const BENEFITS = [
  "실물 모델하우스에서 평면·마감재 직접 확인",
  "커뮤니티·특화 설계 현장 체험",
  "동·호 지정·잔여 세대 현황 즉시 상담",
  "1:1 맞춤 분양 상담 + 방문 일정 조율",
];

const STEPS = [
  { no: "01", t: "온라인 방문예약 신청", d: "성함·연락처와 연락 가능한 시간대를 남겨 주세요." },
  { no: "02", t: "담당자 확인·일정 조율", d: "분양 상담실에서 확인 후 방문 일정을 조율해 연락드립니다." },
  { no: "03", t: "모델하우스 방문·상담", d: "현장에서 평면·마감과 동·호 지정·잔여 세대를 상담합니다." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: `${content.project.name} 모델하우스`,
  url: site.origin + "/modelhouse",
  telephone: SALES_PHONE,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: "인천광역시",
    addressLocality: "미추홀구",
    streetAddress: "숭의동 117-11번지",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title="모델하우스" eyebrow="MODEL HOUSE" motif="gallery" path="/modelhouse" />

      {/* 2단 — 좌 정보 / 우 예약폼 */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">Modelhouse Information</p>
            <h2 className="mt-2 font-serif text-[26px] font-semibold tracking-tight text-ink sm:text-[32px]">{content.project.name} 모델하우스</h2>
            <p className="mt-2 text-[16px] text-muted">모델하우스(견본주택) · {MODELHOUSE.address}</p>
            <p className="mt-6 text-[17px] leading-[1.9] text-muted">
              실물 모델하우스에서 단위세대 평면과 마감재, 커뮤니티·특화 설계를 직접 경험하실 수 있습니다. 방문 전 온라인으로 예약해 주시면
              담당자가 일정을 조율해 안내해 드립니다.
            </p>
            <ul className="mt-6 space-y-2 text-[17px] text-ink">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="text-bronze">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-t border-line pt-6 text-[17px]">
              <p className="text-ink">
                <span className="text-bronze">📍 위치</span> {MODELHOUSE.address} · 방문 시 사전 예약 권장
              </p>
              <p className="text-ink">
                <span className="text-bronze">📞 방문·분양 문의</span> <span className="font-serif text-2xl">{SALES_PHONE}</span> · 선예약 후 방문 안내 · 동·호/잔여 현황 상담
              </p>
            </div>
          </div>

          <div id="reservation" className="scroll-mt-24">
            <InterestForm eyebrow="Reservation Form" title="방문예약 신청" note="담당자가 확인 후 연락드려 방문 일정을 확정합니다." />
          </div>
        </div>
      </section>

      {/* 위치안내 */}
      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="01" en="Location" title="모델하우스 위치안내" />
          <dl className="mt-8 border-t border-line">
            {[
              { label: "모델하우스 주소", value: MODELHOUSE.address },
              { label: "관람 시간", value: MODELHOUSE.hours + " (방문 시 사전 예약 권장)" },
              { label: "방문·분양 문의", value: SALES_PHONE },
            ].map((r) => (
              <div key={r.label} className="grid grid-cols-1 gap-1 border-b border-line py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="text-[15px] text-muted">{r.label}</dt>
                <dd className="text-[17px] font-medium text-ink">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 견본주택 안내 비주얼 */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10">
          <SectionHeading no="02" en="Gallery" title="모델하우스 안내" />
          <div className="mt-10">
            <Figure src="/images/hero/doosan-the-central-dohwa-modelhouse-01.png" w={1529} h={955} alt="두산위브 더센트럴 도화 모델하우스" caption="모델하우스 안내 (연출된 가구·유상옵션이 포함될 수 있습니다)" />
          </div>
          <p className="mt-6 text-[15px] text-muted">
            단위세대 평면·면적 구성은{" "}
            <Link href="/floorplan" className="text-ink underline underline-offset-4 hover:text-bronze">
              평면도
            </Link>
            에서 확인하실 수 있습니다. 모델하우스 연출 컷은 실제와 차이가 있을 수 있습니다.
          </p>
        </div>
      </section>

      {/* 관람 3 STEP */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="03" en="How to Visit" title="관람 예약 방법" />
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.no} className="border-t border-line pt-5">
                <span className="font-accent text-[15px] italic text-bronze">{s.no}</span>
                <p className="mt-2 text-[18px] font-medium text-ink">{s.t}</p>
                <p className="mt-2 text-[17px] leading-[1.8] text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="모델하우스 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화 모델하우스는 인천광역시 미추홀구 숭의동 117-11번지에 운영합니다. 실물 모델하우스에서 단위세대
              평면과 마감재, 커뮤니티·특화 설계를 직접 확인하실 수 있으며, 관람은 10:00부터 18:00까지 사전 예약제로 진행됩니다.
            </p>
            <p>
              방문은 온라인 방문예약 신청 → 담당자 확인·일정 조율 연락 → 모델하우스 방문·상담의 3단계로 진행됩니다. 방문·분양 문의는{" "}
              {SALES_PHONE}이며, 관심고객으로 등록하시면 분양 상담실에서 방문 일정과 동·호 지정·잔여 세대 현황을 함께 안내해 드립니다. 정규
              청약은 마감되어 현재 선착순 동·호 지정 계약이 진행 중입니다.
            </p>
          </div>
          <p className="mt-8 text-[15px] text-muted">
            청약·계약·일정 관련 자주 묻는 질문은{" "}
            <Link href="/faq" className="text-ink underline underline-offset-4 hover:text-bronze">
              FAQ
            </Link>
            에서 확인하실 수 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}
