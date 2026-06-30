"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";
import { NAV } from "@/lib/content";

const PHONE = "1800-9570"; // 홈페이지 마케팅 상담번호 (공고 분양문의 1899-4447과 별개)
const PHONE_TEL = "tel:18009570";
const REGISTER = "/modelhouse#reservation";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 홈 최상단만 투명+흰글자, 그 외(스크롤·서브)는 솔리드
  const solid = !isHome || scrolled;
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-ivory/95 text-ink backdrop-blur border-b border-line" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 sm:px-10">
          <Link href="/" className="font-serif text-lg font-bold tracking-tight">
            {site.name}
          </Link>

          {/* 데스크탑 메뉴 — 한글 라벨 15px */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="text-[15px] tracking-[0.01em] transition-opacity hover:opacity-60">
                {n.label}
              </Link>
            ))}
          </nav>

          {/* 우측 CTA */}
          <div className="hidden items-center gap-3 lg:inline-flex">
            <a
              href={PHONE_TEL}
              aria-label={`전화 상담 ${PHONE}`}
              className="inline-flex h-11 items-center gap-2 border border-current px-4 text-[15px] transition-opacity hover:opacity-60"
            >
              <PhoneIcon />
              <span>{PHONE}</span>
            </a>
            <Link href={REGISTER} className="inline-flex h-11 items-center bg-bronze px-5 text-[15px] text-ivory transition-opacity hover:opacity-90">
              관심고객등록
            </Link>
          </div>

          {/* 모바일 햄버거 */}
          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* ⚠️ 오버레이는 header의 형제 — backdrop-blur containing block 함정 회피 */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background text-ink lg:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-serif text-lg font-bold">{site.name}</span>
            <button type="button" aria-label="메뉴 닫기" onClick={() => setOpen(false)} className="inline-flex h-11 w-11 items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6">
            {NAV.map((n, i) => (
              <Link key={n.href} href={n.href} onClick={closeMenu} className="flex items-baseline gap-4 border-b border-line py-4">
                <span className="font-accent text-[15px] italic text-bronze">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-2xl">{n.label}</span>
                <span className="font-accent text-[13px] italic tracking-[0.25em] text-muted">{n.en}</span>
              </Link>
            ))}
          </nav>

          {/* 하단 가로 2분할 CTA */}
          <div className="flex">
            <Link href={REGISTER} onClick={closeMenu} className="flex h-14 flex-1 items-center justify-center bg-bronze text-ivory">
              관심고객 등록
            </Link>
            <a href={PHONE_TEL} aria-label={`전화 상담 ${PHONE}`} className="flex h-14 flex-1 items-center justify-center gap-2 bg-ink text-ivory">
              <PhoneIcon />
              <span>{PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
