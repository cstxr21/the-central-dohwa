"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const KEY = "dwc-promo-dismiss"; // 값 = "오늘 하루 보지 않기" 누른 날짜(YYYY-MM-DD)
const SRC = "/images/hero/doosan-the-central-dohwa-promo-popup.webp";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 페이지가 먼저 그려진 뒤(약간 지연) 노출 — 오늘 '보지 않기' 누른 날은 생략.
    const t = setTimeout(() => {
      try {
        if (localStorage.getItem(KEY) === today()) return;
      } catch {}
      setOpen(true);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const dismissToday = () => {
    try {
      localStorage.setItem(KEY, today());
    } catch {}
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="두산위브 더센트럴 도화 분양 혜택 안내"
      onClick={() => setOpen(false)}
    >
      <div className="relative w-full max-w-[340px] shadow-xl sm:max-w-[600px]" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 X — 배너 상단(어두운 영역) 위에 표시 */}
        <button
          type="button"
          aria-label="팝업 닫기"
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        <div className="overflow-hidden bg-white">
          <Image src={SRC} width={1200} height={849} alt="두산위브 더센트럴 도화 분양 혜택 안내 — 비규제지역, 선착순 동·호 지정 계약" className="h-auto w-full" sizes="(max-width: 640px) 92vw, 600px" />
        </div>

        {/* 하단 바 */}
        <div className="flex bg-ink text-ivory">
          <button type="button" onClick={dismissToday} className="flex-1 py-3 text-[15px] text-white/80">
            오늘 하루 보지 않기
          </button>
          <button type="button" onClick={() => setOpen(false)} className="flex-1 border-l border-white/20 py-3 text-[15px] font-medium">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
