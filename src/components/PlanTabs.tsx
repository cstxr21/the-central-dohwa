"use client";

import { useState } from "react";
import Image from "next/image";

export type PlanType = {
  type: string; // 59A
  exclusive: number; // 전용 ㎡
  supply: number; // 공급 ㎡
  households: number; // 일반분양 세대
  img: { src: string; w: number; h: number; alt: string };
};

// 주택형 칩 전환 + 선택 타입 평면도 기본 노출(무크롭 width/height — 글자/치수 잘림 0, 라이트박스 없음).
export default function PlanTabs({ types }: { types: PlanType[] }) {
  const [sel, setSel] = useState(0);
  const t = types[sel];
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="주택형 선택">
        {types.map((x, i) => (
          <button
            key={x.type}
            role="tab"
            aria-selected={i === sel}
            onClick={() => setSel(i)}
            className={`border px-4 py-2 text-[16px] font-medium transition-colors ${
              i === sel ? "border-bronze text-ink" : "border-line text-muted hover:text-ink"
            }`}
          >
            {x.type}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-[17px] font-medium text-ink">
          전용 {t.exclusive}㎡ · 공급 {t.supply}㎡ · 일반분양 {t.households}세대
        </p>
        <div className="mt-4">
          <Image src={t.img.src} width={t.img.w} height={t.img.h} alt={t.img.alt} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 1024px" />
        </div>
      </div>
    </div>
  );
}
