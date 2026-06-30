import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PageOutro from "@/components/PageOutro";
import { POSTS, PRESS } from "@/lib/news";

export const metadata: Metadata = {
  title: { absolute: "두산위브 더센트럴 도화 분양소식 | 공급정보·보도자료" },
  description: "두산위브 더센트럴 도화 분양소식. 최신 공급정보와 입지·시장 동향, 언론사 보도자료를 한눈에 확인하세요.",
  alternates: { canonical: "/news" },
};

const pressBySource = PRESS.reduce<Record<string, typeof PRESS>>((acc, p) => {
  (acc[p.source] ||= []).push(p);
  return acc;
}, {});

export default function Page() {
  return (
    <>
      <PageHero title="분양소식" eyebrow="NEWS" motif="news" path="/news" />

      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
          <p className="text-[18px] leading-[1.9] text-muted">
            두산위브 더센트럴 도화의 공급정보와 입지·시장 동향, 언론 보도를 전합니다. 분양가·일정 등 상세는{" "}
            <Link href="/sales" className="text-ink underline underline-offset-4 hover:text-bronze">
              분양안내
            </Link>
            , 방문예약은{" "}
            <Link href="/modelhouse" className="text-ink underline underline-offset-4 hover:text-bronze">
              모델하우스
            </Link>
            에서 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* 발행 글 */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10">
          <SectionHeading no="01" en="Articles" title="분양소식" />
          {POSTS.length === 0 ? (
            <p className="mt-8 text-[17px] text-muted">
              분양소식이 곧 업데이트됩니다. 관심고객으로 등록하시면 새 소식을 가장 먼저 안내해 드립니다.
            </p>
          ) : (
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {POSTS.map((p) => (
                <Link key={p.slug} href={`/news/${p.slug}`} className="block border-t border-line pt-5 hover:opacity-70">
                  <span className="font-accent text-[13px] italic text-bronze">
                    {p.category} · {p.date}
                  </span>
                  <h3 className="mt-2 font-serif text-[20px] font-medium text-ink">{p.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 언론 보도 아카이브 (언론사별) */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1024px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading no="02" en="Press" title="언론 보도자료" />
          <div className="mt-8 space-y-10">
            {Object.entries(pressBySource).map(([source, items]) => (
              <div key={source}>
                <h3 className="font-serif text-[20px] font-medium text-ink">{source}</h3>
                <ul className="mt-3 border-t border-line">
                  {items.map((p) => (
                    <li key={p.url} className="border-b border-line py-4">
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-70">
                        <span className="font-accent text-[13px] italic text-bronze">{p.date}</span>
                        <span className="mt-1 block text-[17px] text-ink">{p.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[920px] px-6 py-16 sm:px-10 sm:py-20">
          <SectionHeading en="About This Page" title="분양소식 한눈에 보기" />
          <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-muted">
            <p>
              두산위브 더센트럴 도화 분양소식은 단지의 공급정보와 인천 미추홀구 도화동 일대의 입지·시장 동향, 그리고 언론사 보도자료를
              지속적으로 업데이트하는 공간입니다. 단지는 도화4구역 주택재개발로 공급되는 지하 2층~지상 19~39층, 7개 동, 660세대 규모이며 이
              가운데 412세대가 일반분양 물량입니다. 정규 청약은 마감되어 현재 잔여 세대를 대상으로 선착순 동·호 지정 계약이 진행 중입니다.
            </p>
            <p>
              소식은 크게 세 갈래로 다룹니다. 첫째 공급정보 — 주택형·면적·계약 조건 등 단지 자체의 안내, 둘째 입지·시장 동향 — 도화동과 인천
              원도심 재생, 교통 개발 등 단지를 둘러싼 환경 변화, 셋째 언론 보도자료 — 매체에 소개된 분양 관련 기사입니다. 보도자료는 매체명과
              보도 날짜, 원문 링크를 함께 제공해 출처를 명확히 하고, 본문에서 임의로 수치를 인용하지 않습니다.
            </p>
            <p>
              분양가·청약 자격·분양 일정 등 확정 전이거나 변동 가능한 사항은 임의로 단정하지 않고 입주자모집공고 기준으로 안내합니다. 단지
              자체의 분양 정보는 분양안내와 모델하우스 페이지에서, 자세한 상담은 분양 상담실을 통해 확인하실 수 있으며, 관심고객으로 등록하시면
              새로운 소식과 분양 안내를 가장 먼저 전해 드립니다.
            </p>
          </div>
        </div>
      </section>

      <PageOutro />
    </>
  );
}
