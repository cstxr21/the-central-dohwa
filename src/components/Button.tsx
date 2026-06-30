import Link from "next/link";

type Variant = "primary" | "solid" | "text";
type Props = {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

const STYLES: Record<Variant, string> = {
  // 1px 보더 · transparent · hover 채워짐
  primary: "inline-flex items-center justify-center border border-current px-5 py-3 text-[15px] transition-colors hover:bg-ink hover:text-ivory",
  // 솔리드 잉크
  solid: "inline-flex items-center justify-center bg-ink px-5 py-3 text-[15px] text-ivory transition-opacity hover:opacity-90",
  // 텍스트 only
  text: "inline-flex items-center underline underline-offset-4 transition-colors hover:text-bronze",
};

export default function Button({ variant = "primary", href, children, className = "", type = "button" }: Props) {
  const cls = `${STYLES[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
