import Link from "next/link";
import { site } from "@/lib/site";
import { NAV, LAST_UPDATED, content } from "@/lib/content";

// 다크 푸터 — 브랜드 + 시행/시공/신탁 3주체 + 광고심의필 + 최종 갱신일.
export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
        <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">DOOSAN We&apos;ve THE CENTRAL DOHWA</p>
        <p className="mt-3 font-serif text-2xl">{site.name}</p>
        <p className="mt-2 text-[15px] text-white/70">{content.project.siteAddress}</p>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-white/80">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="transition-opacity hover:opacity-60">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* 분양광고 3주체 표기 (시행/시공/신탁) */}
        <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-2 border-t border-white/15 pt-8 text-[14px] text-white/70 sm:grid-cols-3">
          <div>
            <dt className="text-white/50">시행 (사업주체)</dt>
            <dd className="mt-1 text-white">{site.parties.developer}</dd>
          </div>
          <div>
            <dt className="text-white/50">시공</dt>
            <dd className="mt-1 text-white">{site.parties.contractor}</dd>
          </div>
          <div>
            <dt className="text-white/50">분양보증 (신탁)</dt>
            <dd className="mt-1 text-white">{site.parties.guarantor}</dd>
          </div>
        </dl>

        <div className="mt-8 space-y-1 text-[13px] text-white/55">
          <p>분양 상담 1800-9570 · 분양가·일정은 입주자모집공고(2025.08.29) 기준</p>
          <p>분양광고 심의필: {content.legal.adReviewNumber}</p>
          <p>최종 갱신: {LAST_UPDATED}</p>
          <p>
            <Link href="/privacy" className="underline underline-offset-2 hover:opacity-70">
              개인정보처리방침
            </Link>
          </p>
          <p className="pt-2 text-white/40">
            본 홈페이지의 이미지·내용은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 자세한 사항은 견본주택 및 승인된 입주자모집공고를 확인하시기 바랍니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
