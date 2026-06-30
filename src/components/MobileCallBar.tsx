import Link from "next/link";

const PHONE = "1800-9570"; // 홈페이지 마케팅 상담번호
const PHONE_TEL = "tel:18009570";
const REGISTER = "/modelhouse#reservation";

// 하단 고정 콜바 (모바일만). body pb-[56px]로 콘텐츠와 겹침 방지.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-14 lg:hidden">
      <Link href={REGISTER} className="flex flex-1 items-center justify-center bg-bronze text-[15px] text-ivory">
        관심고객 등록
      </Link>
      <a href={PHONE_TEL} aria-label={`전화 상담 ${PHONE}`} className="flex flex-1 items-center justify-center gap-2 bg-ink text-[15px] text-ivory">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        <span>{PHONE}</span>
      </a>
    </div>
  );
}
