type Props = {
  no?: string; // 브론즈 번호 (예: "01") — 생략 시 번호 없는 헤딩
  en?: string; // 영문 라벨 (장식)
  title: string;
  className?: string;
};

export default function SectionHeading({ no, en, title, className = "" }: Props) {
  return (
    <div className={className}>
      {(no || en) && (
        <p className="font-accent text-[15px] italic tracking-[0.2em] text-bronze">
          {no && <span className="not-italic">{no}</span>}
          {no && en ? " " : ""}
          {en}
        </p>
      )}
      <h2 className="mt-3 font-serif text-[26px] font-semibold tracking-tight text-ink sm:text-[34px]">{title}</h2>
    </div>
  );
}
