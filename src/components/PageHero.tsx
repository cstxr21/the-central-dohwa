import Link from "next/link";
import { site } from "@/lib/site";

export type Motif = "circle" | "map" | "bloom" | "plan" | "unit" | "doc" | "gallery" | "news" | "qa";

const BRONZE = "#8c7b5e";
const INK = "#1a1815";

// 깊이 3레이어(배경 0.1 → 중경 0.22 → 전경 0.4) 멀티요소 장면. stroke=브론즈 헤어라인.
const SCENES: Record<Motif, React.ReactNode> = {
  circle: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <path d="M0 250 L120 200 L240 230 L360 180 L480 220" />
        <circle cx="380" cy="80" r="46" />
      </g>
      <g opacity="0.22">
        <rect x="70" y="150" width="50" height="120" />
        <rect x="135" y="110" width="60" height="160" />
        <rect x="210" y="170" width="44" height="100" />
        <rect x="270" y="90" width="66" height="180" />
      </g>
      <g opacity="0.4">
        <line x1="300" y1="60" x2="300" y2="270" />
        <line x1="300" y1="60" x2="400" y2="70" />
        <line x1="370" y1="66" x2="370" y2="120" />
        <rect x="278" y="200" width="44" height="70" />
      </g>
    </g>
  ),
  map: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <path d="M0 60 H480 M0 160 H480 M0 260 H480 M120 0 V320 M300 0 V320" />
      </g>
      <g opacity="0.22">
        <path d="M20 280 C140 200 220 240 320 140 S420 60 470 40" />
        <path d="M60 30 L200 120 L260 250" strokeDasharray="6 6" />
      </g>
      <g opacity="0.4">
        <path d="M320 120 a18 18 0 1 0 0.1 0 Z" />
        <path d="M320 138 L320 175" />
        <circle cx="408" cy="64" r="22" />
        <path d="M408 46 L408 86 M390 64 L426 64" />
      </g>
    </g>
  ),
  bloom: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <path d="M0 280 Q240 220 480 280" />
        <path d="M0 300 Q240 250 480 300" />
      </g>
      <g opacity="0.22">
        <path d="M150 280 C150 200 130 170 120 130" />
        <path d="M250 280 C250 210 270 180 290 150" />
        <path d="M350 280 C350 220 360 190 360 150" />
      </g>
      <g opacity="0.4">
        <circle cx="120" cy="120" r="16" />
        <circle cx="120" cy="120" r="5" />
        <circle cx="290" cy="140" r="14" />
        <path d="M360 140 q-14 -18 0 -30 q14 12 0 30 q14 -18 28 -6 q-10 16 -28 6" />
        <path d="M400 90 q10 -10 20 0 q-10 6 -20 0" />
      </g>
    </g>
  ),
  plan: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <rect x="20" y="30" width="440" height="260" />
        <path d="M20 110 H460 M20 200 H460 M180 30 V290 M330 30 V290" />
      </g>
      <g opacity="0.22">
        <ellipse cx="255" cy="155" rx="55" ry="34" />
        <path d="M60 250 H150 M360 70 H430" />
      </g>
      <g opacity="0.4">
        <circle cx="90" cy="80" r="16" />
        <circle cx="400" cy="240" r="16" />
        <circle cx="130" cy="230" r="12" />
        <path d="M360 250 h40 v6 h-40 z" />
      </g>
    </g>
  ),
  unit: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <rect x="40" y="40" width="400" height="240" />
      </g>
      <g opacity="0.22">
        <path d="M240 40 V280 M40 160 H240 M240 180 H440" />
        <rect x="60" y="60" width="70" height="40" />
      </g>
      <g opacity="0.4">
        <rect x="270" y="60" width="120" height="50" />
        <rect x="285" y="200" width="60" height="60" />
        <circle cx="160" cy="220" r="20" />
        <path d="M70 200 h120" />
      </g>
    </g>
  ),
  doc: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <rect x="70" y="30" width="260" height="260" />
        <rect x="120" y="70" width="260" height="220" />
      </g>
      <g opacity="0.22">
        <path d="M150 110 H350 M150 140 H350 M150 170 H350 M150 200 H300 M250 110 V210" />
      </g>
      <g opacity="0.4">
        <path d="M150 270 V230 M190 270 V210 M230 270 V190 M270 270 V220 M310 270 V200" strokeWidth="6" />
        <path d="M150 270 H330" />
      </g>
    </g>
  ),
  gallery: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <rect x="20" y="30" width="440" height="200" />
        <path d="M20 230 H460" />
      </g>
      <g opacity="0.22">
        <rect x="90" y="160" width="200" height="70" rx="6" />
        <rect x="300" y="120" width="20" height="110" />
      </g>
      <g opacity="0.4">
        <rect x="60" y="70" width="80" height="60" />
        <circle cx="330" cy="90" r="14" />
        <path d="M330 104 V160 M312 160 H348" />
        <path d="M380 230 q8 -50 20 -60 q12 10 20 60" />
      </g>
    </g>
  ),
  news: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <rect x="40" y="50" width="180" height="220" />
        <rect x="250" y="80" width="190" height="190" />
      </g>
      <g opacity="0.22">
        <path d="M70 90 H190 M70 120 H190 M70 150 H160" />
        <rect x="275" y="110" width="140" height="70" />
      </g>
      <g opacity="0.4">
        <path d="M280 210 h120 v54 l-22 -18 h-98 z" />
        <path d="M300 232 H380 M300 248 H360" />
      </g>
    </g>
  ),
  qa: (
    <g fill="none" stroke={BRONZE} strokeWidth="1.2">
      <g opacity="0.1">
        <circle cx="120" cy="120" r="70" />
        <circle cx="340" cy="190" r="60" />
      </g>
      <g opacity="0.22">
        <path d="M80 80 h120 v70 l-20 -14 h-100 z" />
        <path d="M300 150 h100 v56 l-18 -12 h-82 z" />
      </g>
      <g opacity="0.4">
        <path d="M120 96 q0 -22 22 -22 q22 0 22 20 q0 16 -22 22 v10" />
        <circle cx="142" cy="146" r="2.4" fill={BRONZE} />
        <circle cx="350" cy="250" r="16" />
        <path d="M328 300 q22 -34 44 0" />
      </g>
    </g>
  ),
};

export default function PageHero({ title, eyebrow, motif, path }: { title: string; eyebrow: string; motif: Motif; path?: string }) {
  const breadcrumb = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: site.origin + "/" },
          { "@type": "ListItem", position: 2, name: title, item: site.origin + path },
        ],
      }
    : null;
  return (
    <section className="relative overflow-hidden border-b border-line bg-background">
      {breadcrumb && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      )}
      {/* 모티프 — 우측. PC 파노라마(넓게) / 모바일 정사각 비율(좁게). preserveAspectRatio meet = 잘림 0 */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[46%] lg:w-[60%]" aria-hidden="true">
        <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
          {SCENES[motif]}
        </svg>
      </div>
      {/* 좌측 페이드 — 텍스트가 모티프에 안 가리게 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32">
        <nav className="text-[13px] tracking-[0.2em] text-muted" aria-label="breadcrumb">
          <Link href="/" className="hover:text-ink">
            홈
          </Link>
          <span className="px-2 text-bronze">/</span>
          <span style={{ color: INK }}>{title}</span>
        </nav>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-8 bg-bronze" />
          <span className="font-accent text-[15px] italic tracking-[0.3em] text-bronze sm:text-[18px]">{eyebrow}</span>
        </div>

        <h1 className="mt-4 font-serif font-semibold tracking-tight text-ink">
          <span className="block text-[15px] text-muted">{site.name}</span>
          {" "}
          <span className="block text-[38px] leading-tight sm:text-7xl">{title}</span>
        </h1>
      </div>
    </section>
  );
}
