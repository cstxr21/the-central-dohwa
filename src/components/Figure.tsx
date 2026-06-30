import Image from "next/image";

type Props = { src: string; w: number; h: number; alt: string; caption?: string; priority?: boolean };

// 무크롭 — width/height intrinsic + h-auto w-full. 세로 인포그래픽 패널 글자 잘림 0(object-cover 미사용).
export default function Figure({ src, w, h, alt, caption, priority = false }: Props) {
  return (
    <figure>
      <Image src={src} width={w} height={h} alt={alt} priority={priority} sizes="(max-width: 1024px) 100vw, 1024px" className="h-auto w-full" />
      {caption && <figcaption className="mt-3 text-[16px] text-muted">{caption}</figcaption>}
    </figure>
  );
}
