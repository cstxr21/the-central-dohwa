import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { HOME } from "@/lib/images";
import { POSTS, PRESS } from "@/lib/news";
import { FAQS } from "@/lib/faq";
import MagBlock from "@/components/MagBlock";
import InterestForm from "@/components/InterestForm";
import JsonLd from "@/components/JsonLd";
import { residenceJsonLd } from "@/lib/jsonld";

const PHONE = "1800-9570";
const PHONE_TEL = "tel:18009570";
const REGISTER = "/modelhouse#reservation";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 | 모델하우스 방문예약·분양안내" },
  description:
    "두산위브 더센트럴 도화 모델하우스 방문예약·분양안내. 인천 미추홀구 도화동 660세대 사업개요·입지·프리미엄·분양 상담 안내.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "두산위브 더센트럴 도화 — 인천 미추홀구 도화동 재개발 660세대",
    description: "인천 미추홀구 도화동 도화4구역, 지하2층~지상39층 7개동 660세대. 모델하우스 방문예약·분양안내.",
    url: "/",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "두산위브 더센트럴 도화 조감도" }],
  },
};

const STATS = [
  { label: "총 세대수", value: "660세대" },
  { label: "전용면적", value: "59·74·84㎡" },
  { label: "입주 예정", value: "2028년 11월" },
  { label: "교통", value: "1호선 도화역" },
];

const homePosts = POSTS.slice(0, 3);
const homePress = PRESS.slice(0, 3);
const homeFaqs = FAQS.filter((f) => !/분양가|프로모션|혜택/.test(f.q)).slice(0, 5);

export default function Home() {
  return (
    <>
      <JsonLd data={residenceJsonLd("/")} />
      {/* ───── Hero ───── */}
      <section className="relative flex min-h-[calc(100svh_-_56px)] items-start overflow-hidden lg:h-screen">
        {/* 야경 조감: 타워는 우측·하늘은 좌상단 → 좁은 화면에선 타워를 살리도록 우측 포커스 */}
        <Image
          src={HOME.hero.src}
          alt={HOME.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover object-[70%_center] sm:object-[62%_center] lg:object-center"
        />
        {/* 스크림 최소화 — 텍스트가 전 화면 상단에 있어 상단만 가독용, 하단은 최소 */}
        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/45 via-black/15 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-24 text-white sm:px-10 sm:pt-28 lg:pt-36">
          <p className="flex items-center gap-3 font-accent text-[13px] italic tracking-[0.3em] text-white/85 sm:text-[16px]">
            <span className="h-px w-8 bg-bronze" aria-hidden="true" />
            DOOSAN We&apos;ve · THE CENTRAL DOHWA
          </p>
          <h1 className="mt-5 font-serif text-[40px] font-semibold leading-[1.12] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-[34ch] text-[16px] leading-relaxed text-white/90 sm:text-xl">
            인천 미추홀구 도화동 · 도화4구역 재개발 · 660세대
          </p>

          {/* 핵심지표 — 헤어라인 행 */}
          <dl className="mt-8 grid max-w-[440px] grid-cols-2 gap-x-6 gap-y-4 border-t border-white/25 pt-5 sm:flex sm:max-w-none sm:flex-wrap sm:gap-x-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-[12px] tracking-[0.15em] text-white/60 sm:text-[13px]">{s.label}</dt>
                <dd className="mt-1 text-[16px] font-medium sm:text-[17px]">{s.value}</dd>
              </div>
            ))}
          </dl>

          {/* CTA — 데스크탑 와이드만(모바일·태블릿은 콜바와 중복) */}
          <div className="mt-10 hidden gap-3 min-[1360px]:flex">
            <Link href={REGISTER} className="inline-flex h-14 items-center bg-bronze px-8 text-[17px] text-ivory transition-opacity hover:opacity-90">
              관심고객 등록
            </Link>
            <a href={PHONE_TEL} aria-label={`전화 상담 ${PHONE}`} className="inline-flex h-14 items-center gap-2 border border-white/80 px-6 text-[17px] backdrop-blur-sm transition-colors hover:bg-white hover:text-ink">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>{PHONE}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───── 인트로 ───── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-20 sm:px-10 sm:py-24">
          <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">Introduction</p>
          <h2 className="mt-4 font-serif text-[26px] font-semibold leading-snug tracking-tight text-ink sm:text-[34px]">
            인천 원도심 도화동, 5년 만의 새 두산위브
          </h2>
          <p className="mt-6 text-[18px] leading-[1.9] text-muted">
            오랜만에 도화동에 들어서는 신규 분양 단지입니다. 지하 2층~지상 39층 7개 동, 660세대 규모로 조성되며 수도권 1호선 도화역
            생활권의 편의를 가깝게 누릴 수 있습니다. 사업개요부터 입지·프리미엄·평면·분양안내까지 핵심 정보를 한 곳에서 안내합니다.
          </p>
        </div>
      </section>

      {/* ───── 섹션 매거진 블록 01~07 ───── */}
      <MagBlock no="01" en="Overview" title="사업개요" bg="bg-background" image={HOME.overview.src} alt={HOME.overview.alt} ratio={HOME.overview.ratio} href="/overview" linkLabel="사업개요 자세히 보기">
        <p>
          인천 미추홀구 도화동 53-28번지 일원에 도화4구역 주택재개발로 공급되는 단지입니다. 지하 2층부터 지상 39층까지 7개 동, 총
          660세대 규모이며 이 가운데 412세대가 일반분양됩니다. 시행은 도화4구역 주택재개발정비사업조합, 시공은 두산건설이 맡았습니다.
        </p>
      </MagBlock>

      <MagBlock no="02" en="Location" title="입지환경" bg="bg-surface" reverse image={HOME.location.src} alt={HOME.location.alt} ratio={HOME.location.ratio} href="/location" linkLabel="입지환경 살펴보기">
        <p>
          수도권 1호선 도화역을 끼고 인천 원도심 생활 인프라를 누리는 자리입니다. 경인로·인천대로 등 도심 간선과 가까워 인천 도심과
          서울 방면 이동이 편리하며, 인천 제2차 도시철도망 구축계획에 포함된 가좌송도선(예정)도 도화 일대를 경유할 계획입니다.
        </p>
      </MagBlock>

      <MagBlock no="03" en="Premium" title="프리미엄" bg="bg-background" image={HOME.premium.src} alt={HOME.premium.alt} ratio={HOME.premium.ratio} href="/premium" linkLabel="프리미엄 보기">
        <p>
          도화동에 모처럼 들어서는 신규 분양 단지로, 두산건설의 두산위브 브랜드 설계와 커뮤니티를 담았습니다. 입지·설계·브랜드가
          어우러진 주거 가치를 프리미엄 페이지에서 안내합니다.
        </p>
      </MagBlock>

      <MagBlock no="04" en="Complex" title="단지안내" bg="bg-surface" reverse image={HOME.complex.src} alt={HOME.complex.alt} ratio={HOME.complex.ratio} href="/complex" linkLabel="단지 배치·커뮤니티 보기">
        <p>
          7개 동 660세대가 단지 내 조경·커뮤니티와 함께 배치됩니다. 동·호 배치와 단지 설계, 커뮤니티 구성은 단지안내에서 확인하실 수
          있습니다.
        </p>
      </MagBlock>

      <MagBlock no="05" en="Floor Plan" title="평면도" bg="bg-background" image={HOME.floorplan.src} alt={HOME.floorplan.alt} ratio={HOME.floorplan.ratio} href="/floorplan" linkLabel="84A 평면도 보기">
        <p>
          전용 59㎡·74㎡·84㎡의 7개 주택형(59A·59B·74A·74B·84A·84B·84C)으로 구성됩니다. 같은 면적대도 A·B 타입의 평면이 달라,
          주택형별 평면과 면적은 평면도에서 확인하세요.
        </p>
      </MagBlock>

      <MagBlock no="06" en="Sales" title="분양안내" bg="bg-surface" reverse image={HOME.sales.src} alt={HOME.sales.alt} ratio={HOME.sales.ratio} href="/sales" linkLabel="분양가·일정 안내">
        <p>
          분양가와 공급 조건은 입주자모집공고 기준으로 안내합니다. 청약 접수는 마감되어, 현재 잔여 세대를 대상으로 선착순 동·호 지정
          계약을 진행하고 있습니다. 자세한 공급 정보는 분양안내에서 확인하세요.
        </p>
      </MagBlock>

      <MagBlock no="07" en="Model House" title="모델하우스" bg="bg-background" image={HOME.modelhouse.src} alt={HOME.modelhouse.alt} ratio={HOME.modelhouse.ratio} href="/modelhouse" linkLabel="방문 예약 안내">
        <p>
          견본주택은 인천 미추홀구 숭의동 117-11번지에 운영합니다. 관람은 사전 예약제로 진행되며, 관심고객으로 등록하시면 방문 예약을
          도와드립니다.
        </p>
      </MagBlock>

      {/* ───── 분양소식 ───── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">News &amp; Press</p>
              <h2 className="mt-3 font-serif text-[26px] font-semibold tracking-tight text-ink sm:text-[34px]">분양소식</h2>
            </div>
            <Link href="/news" className="text-[15px] text-ink underline underline-offset-4 hover:text-bronze">
              분양소식 전체 보기
            </Link>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {/* 자체 발행글 */}
            <div>
              <p className="text-[15px] font-medium text-ink">분양소식</p>
              {homePosts.length === 0 ? (
                <p className="mt-4 text-[17px] text-muted">분양소식이 곧 업데이트됩니다. 관심고객 등록 시 새 소식을 가장 먼저 안내해 드립니다.</p>
              ) : (
                <ul className="mt-4 divide-y divide-line border-t border-line">
                  {homePosts.map((p) => (
                    <li key={p.slug} className="py-4">
                      <Link href={`/news/${p.slug}`} className="block hover:opacity-70">
                        <span className="font-accent text-[13px] italic text-bronze">{p.category} · {p.date}</span>
                        <span className="mt-1 block text-[17px] text-ink">{p.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 언론 보도 */}
            <div>
              <p className="text-[15px] font-medium text-ink">언론 보도</p>
              <ul className="mt-4 divide-y divide-line border-t border-line">
                {homePress.map((p) => (
                  <li key={p.url} className="py-4">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-70">
                      <span className="font-accent text-[13px] italic text-bronze">{p.source} · {p.date}</span>
                      <span className="mt-1 block text-[17px] text-ink">{p.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FAQ 미리보기 ───── */}
      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-20 sm:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">FAQ</p>
              <h2 className="mt-3 font-serif text-[26px] font-semibold tracking-tight text-ink sm:text-[34px]">자주 묻는 질문</h2>
            </div>
            <Link href="/faq" className="text-[15px] text-ink underline underline-offset-4 hover:text-bronze">
              자주 묻는 질문 전체 보기
            </Link>
          </div>
          <dl className="mt-10 border-t border-line">
            {homeFaqs.map((f) => (
              <div key={f.q} className="border-b border-line py-6">
                <dt className="text-[18px] font-medium text-ink">Q. {f.q}</dt>
                <dd className="mt-2 text-[17px] leading-[1.9] text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───── 관심고객등록 ───── */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1280px] items-stretch gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">Register</p>
            <h2 className="mt-3 font-serif text-[26px] font-semibold tracking-tight text-ink sm:text-[34px]">관심고객등록</h2>
            <p className="mt-6 text-[17px] leading-[1.9] text-muted">
              {site.name}의 분양가·잔여 세대·선착순 계약 정보 등 핵심 안내를 관심고객으로 등록하신 분께 가장 먼저 전해 드립니다. 성함과
              연락처만 남겨 주시면 분양 상담실에서 빠르게 연락드려 안내합니다.
            </p>
            <ul className="mt-6 space-y-2 text-[17px] text-ink">
              {["선착순 계약·잔여 세대 현황 안내", "전용 59·74·84㎡ 주택형·공급 정보", "모델하우스(견본주택) 방문 예약", "1:1 맞춤 분양 상담"].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="text-bronze">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-t border-line pt-6 text-[17px]">
              <p className="text-ink">
                <span className="text-bronze">📍 견본주택</span> 인천 미추홀구 숭의동 117-11 · 관람 10:00~18:00 · 사전 예약 관람
              </p>
              <p className="text-ink">
                <span className="text-bronze">📞 분양문의</span> <span className="font-serif text-2xl">{PHONE}</span> · 선 예약 후 방문 안내
              </p>
            </div>
          </div>
          <div>
            <InterestForm eyebrow="Reservation Form" title="관심고객 등록 · 방문예약" note="담당자가 확인 후 순차적으로 연락드립니다." />
          </div>
        </div>
      </section>

      {/* ───── ABOUT (정보성, 푸터 바로 위) ───── */}
      <section className="bg-background">
        <div className="mx-auto max-w-[920px] px-6 py-20 sm:px-10">
          <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">About This Page</p>
          <h2 className="mt-3 font-serif text-[26px] font-semibold tracking-tight text-ink sm:text-[34px]">한눈에 보는 단지 정보</h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              {site.name}는 인천광역시 미추홀구 도화동 53-28번지 일원에 들어서는 도화4구역 주택재개발정비사업 단지입니다. 지하 2층부터
              지상 39층까지 7개 동, 총 660세대 규모로 조성되며 이 가운데 412세대가 일반분양 물량입니다. 수도권 1호선 도화역을 끼고
              경인로·인천대로 등 도심 간선과 가까워 인천 원도심의 생활 인프라를 가깝게 누릴 수 있는 자리로, 주변 도시재생과 함께
              주거 환경이 정비되고 있는 지역입니다.
            </p>
            <p>
              주거 공간은 전용면적 59㎡·74㎡·84㎡의 7개 주택형(59A·59B·74A·74B·84A·84B·84C)으로 구성되어 1~2인 가구부터 자녀를 둔
              가족까지 폭넓게 선택할 수 있습니다. 전 주택형이 전용 85㎡ 이하로 부가세 비과세 대상이며, 단지 설계와 조경·커뮤니티는
              두산건설의 두산위브 브랜드 기준에 따라 계획되었습니다. 같은 면적대라도 A·B 타입의 평면 구성이 달라 생활 방식에 맞춰
              선택할 수 있습니다.
            </p>
            <p>
              일반분양 412세대는 특별공급 212세대(기관추천·다자녀·신혼부부·노부모부양·생애최초)와 일반공급 200세대로 나뉘어
              공급되었습니다. 청약 접수가 마감된 현재는 잔여 세대를 대상으로 선착순 동·호 지정 계약이 진행되고 있으며, 비규제지역
              민영주택으로 재당첨제한·거주의무는 적용되지 않습니다. 입주는 2028년 11월 예정이고, 견본주택은 인천 미추홀구 숭의동
              117-11번지에서 사전 예약제로 운영합니다. 분양가·공급 조건 등 자세한 금액은 입주자모집공고 기준으로{" "}
              <Link href="/sales" className="text-ink underline underline-offset-4 hover:text-bronze">
                분양안내
              </Link>
              에서 확인하시고, 방문 상담은{" "}
              <Link href={REGISTER} className="text-ink underline underline-offset-4 hover:text-bronze">
                관심고객 등록
              </Link>
              으로 신청해 주세요.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
