type Item = { label: string; value: React.ReactNode };
type Props = { items: Item[]; numbered?: boolean; className?: string };

// 라벨/값 표 통일 컴포넌트. dt = 브론즈 번호 + muted 라벨, dd = ink 17~18px medium.
export default function LineSpec({ items, numbered = false, className = "" }: Props) {
  return (
    <dl className={`border-t border-line ${className}`}>
      {items.map((it, i) => (
        <div key={i} className="grid grid-cols-1 items-baseline gap-1 border-b border-line py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
          <dt className="flex items-baseline gap-3 text-[15px] text-muted">
            {numbered && <span className="font-accent italic text-bronze">{String(i + 1).padStart(2, "0")}</span>}
            <span>{it.label}</span>
          </dt>
          <dd className="text-[17px] font-medium text-ink sm:text-[18px]">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
