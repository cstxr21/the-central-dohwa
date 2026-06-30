import Link from "next/link";

// 서브페이지 하단 전환 CTA — 관심고객 등록 1개만(그 외 버튼·중복 CTA 금지, 6단계 §내부링크).
export default function PageOutro({
  title = "관심고객 등록하고 분양 안내를 받아보세요",
  text = "성함과 연락처만 남겨 주시면 분양 상담실에서 빠르게 연락드려 안내합니다.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-line bg-background text-ink">
      <div className="mx-auto max-w-[920px] px-6 py-16 text-center sm:px-10 sm:py-20">
        <h2 className="font-serif text-[26px] font-semibold tracking-tight sm:text-[32px]">{title}</h2>
        <p className="mt-4 text-[17px] text-muted">{text}</p>
        <Link
          href="/modelhouse#reservation"
          className="mt-8 inline-flex h-14 items-center bg-bronze px-10 text-[17px] text-ivory transition-opacity hover:opacity-90"
        >
          관심고객 등록
        </Link>
      </div>
    </section>
  );
}
