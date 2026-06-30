import Image from "next/image";
import Link from "next/link";

type Props = {
  no?: string;
  en?: string;
  title: string;
  image?: string; // /images/<category>/...webp
  alt?: string;
  ratio?: number; // 실제 w/h (잘림 0 — 고정 aspect 강제 금지)
  href?: string;
  linkLabel?: string;
  reverse?: boolean;
  bg?: string;
  placeholder?: boolean; // 사용자 직접 첨부 예정 섹션 — 빈 중립 박스
  children?: React.ReactNode;
};

// 메인·서브 "이미지+내용" 섹션 정본. 이미지엔 링크·hover 줌 없음 — 이동은 linkLabel로만.
export default function MagBlock({ no, en, title, image, alt = "", ratio = 4 / 3, href, linkLabel, reverse = false, bg = "bg-surface", placeholder = false, children }: Props) {
  return (
    <section className={bg}>
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16">
        <div className={`relative w-full overflow-hidden ${reverse ? "lg:order-2" : ""}`} style={{ aspectRatio: String(placeholder ? 4 / 3 : ratio) }}>
          {placeholder || !image ? (
            <div className="flex h-full w-full items-center justify-center border border-dashed border-line text-[15px] text-muted">
              이미지 준비 중 · 사용자 첨부 예정
            </div>
          ) : (
            <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          )}
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          {(no || en) && (
            <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">
              {no} {en}
            </p>
          )}
          <h2 className="mt-3 font-serif text-[26px] font-semibold tracking-tight text-ink sm:text-[34px]">{title}</h2>
          <div className="mt-5 text-[17px] leading-[1.9] text-muted">{children}</div>
          {href && linkLabel && (
            <Link href={href} className="mt-6 inline-block text-[17px] text-ink underline underline-offset-4 transition-colors hover:text-bronze">
              {linkLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
