import type { Metadata } from "next";
import { LAST_UPDATED } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "두산위브 더센트럴 도화 관심고객등록 개인정보 수집·이용·보유에 관한 처리방침.",
};

const REPRESENT_PHONE = "1800-9570"; // 홈페이지 대표 문의

const ROWS: { label: string; value: string }[] = [
  { label: "수집 항목", value: "성함, 연락처(휴대전화), 연락 가능한 시간대" },
  { label: "수집·이용 목적", value: "분양 상담 및 모델하우스 방문예약 안내, 관심고객 대상 분양 정보 제공" },
  { label: "보유·이용 기간", value: "분양(공급) 종료 시 또는 정보주체의 동의 철회 시 지체 없이 파기" },
  { label: "제3자 제공", value: "제공하지 않습니다. 다만 법령에 특별한 규정이 있는 경우는 예외로 합니다." },
  {
    label: "정보주체의 권리",
    value: "정보주체는 언제든지 개인정보의 열람·정정·삭제·처리정지 및 수집·이용 동의 철회를 요청할 수 있습니다.",
  },
  {
    label: "동의 거부 권리",
    value: "개인정보 수집·이용 동의를 거부할 권리가 있으며, 거부 시 분양 상담·방문예약 안내가 제한될 수 있습니다.",
  },
  { label: "문의처", value: `대표 문의 ${REPRESENT_PHONE}` },
  { label: "시행일", value: LAST_UPDATED },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[920px] px-6 pb-20 pt-28 sm:px-10 sm:pt-32">
      <p className="font-accent italic tracking-[0.3em] text-bronze">PRIVACY POLICY</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">개인정보처리방침</h1>
      <p className="mt-6 text-lg text-muted">
        {site.name}(이하 &lsquo;본 사이트&rsquo;)는 관심고객등록 및 방문예약 과정에서 수집하는 개인정보를 다음과 같이 처리합니다. 본 방침은
        개인정보 보호법에 따라 정보주체의 권리를 보호하기 위해 마련되었습니다.
      </p>

      <dl className="mt-10 border-t border-line">
        {ROWS.map((r) => (
          <div key={r.label} className="grid grid-cols-1 gap-1 border-b border-line py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
            <dt className="text-[15px] font-medium text-muted">{r.label}</dt>
            <dd className="text-[17px] text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 text-[15px] text-muted">
        본 사이트는 개인 운영 분양 안내 사이트로, 수집한 개인정보는 위 목적 범위 내에서만 이용되며 목적 달성 후 파기합니다. 처리 위탁·개인정보
        보호책임자 등 추가 사항은 확정 시 본 방침에 반영합니다.
      </p>
    </main>
  );
}
