"use client";

import { useRef, useState } from "react";
import Link from "next/link";

// 연락처 자동 하이픈: 02=2자리 국번, 그 외 3자리. 11자리 3-4-4 / 10자리 3-3-4.
export function formatPhone(v: string): string {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.startsWith("02")) {
    if (d.length < 3) return d;
    if (d.length < 6) return `${d.slice(0, 2)}-${d.slice(2)}`;
    if (d.length < 10) return `${d.slice(0, 2)}-${d.slice(2, 5)}-${d.slice(5)}`;
    return `${d.slice(0, 2)}-${d.slice(2, 6)}-${d.slice(6, 10)}`;
  }
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  if (d.length < 11) return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

const PHONE_RE = /^0\d{1,2}[-\s]?\d{3,4}[-\s]?\d{4}$/;
const TIME_OPTIONS = ["오전 9–12시", "오후 12–15시", "오후 15–18시", "저녁 18시 이후", "아무때나"];

type Props = { eyebrow?: string; title?: string; note?: string };

export default function InterestForm({ eyebrow = "Reservation", title = "관심고객 등록 · 방문예약", note = "담당자가 확인 후 순차적으로 연락드립니다." }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; agree?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  // 동기 가드 — setStatus 반영 전 더블클릭·연타로 인한 2중 접수·알림 차단(문서 §5).
  const submittingRef = useRef(false);

  function validate() {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "성함을 입력해 주세요.";
    if (!PHONE_RE.test(phone.trim())) e.phone = "연락처를 올바르게 입력해 주세요.";
    if (!agree) e.agree = "개인정보 수집·이용에 동의해 주세요.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (submittingRef.current) return; // 이미 전송 중 — 재진입 차단
    if (!validate()) return;
    submittingRef.current = true;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, time, agree }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("done");
    } catch {
      setStatus("error");
      submittingRef.current = false; // 실패 시 재시도 허용
    }
  }

  if (status === "done") {
    return (
      <div className="border border-line bg-surface p-8 text-center">
        <p className="font-serif text-2xl text-ink">접수되었습니다</p>
        <p className="mt-3 text-[17px] text-muted">담당자가 확인 후 연락드리겠습니다. 감사합니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line bg-surface p-6 sm:p-8">
      {eyebrow && <p className="font-accent text-[15px] italic tracking-[0.3em] text-bronze">{eyebrow}</p>}
      {title && <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">{title}</h2>}
      {note && <p className="mt-2 text-[15px] text-muted">{note}</p>}

      <div className="mt-8 flex flex-col gap-7">
        {/* 성함 */}
        <div>
          <label htmlFor="name" className="block text-[16px] font-medium text-ink">
            성함
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            className="mt-2 w-full border border-line bg-white px-4 py-3 text-[17px] text-ink outline-none focus:border-bronze focus:border-b-2"
          />
          {errors.name && <p className="mt-2 text-[15px] font-medium text-ink">{errors.name}</p>}
        </div>

        {/* 연락처 */}
        <div>
          <label htmlFor="phone" className="block text-[16px] font-medium text-ink">
            연락처
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={13}
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="010-1234-5678"
            className="mt-2 w-full border border-line bg-white px-4 py-3 text-[17px] text-ink outline-none focus:border-bronze focus:border-b-2"
          />
          {errors.phone && <p className="mt-2 text-[15px] font-medium text-ink">{errors.phone}</p>}
        </div>

        {/* 연락 가능한 시간대 */}
        <fieldset>
          <legend className="block text-[16px] font-medium text-ink">연락 가능한 시간대</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {TIME_OPTIONS.map((t) => (
              <label key={t} className={`cursor-pointer border px-4 py-2 text-[15px] ${time === t ? "border-bronze text-ink" : "border-line text-muted"}`}>
                <input type="radio" name="time" value={t} checked={time === t} onChange={() => setTime(t)} className="sr-only" />
                {t}
              </label>
            ))}
          </div>
        </fieldset>

        {/* 개인정보 동의 박스 */}
        <div className="border border-line p-4 text-[15px] text-muted">
          <p className="text-ink">개인정보 수집·이용 동의</p>
          <p className="mt-2">
            수집 항목: 성함·연락처·연락 가능한 시간대 / 이용 목적: 분양 상담 및 방문예약 안내 / 보유 기간: 분양 종료 또는 동의 철회 시 파기.
          </p>
          <label className="mt-3 flex items-center gap-2 text-ink">
            <input type="checkbox" name="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="h-5 w-5 accent-[#8c7b5e]" />
            <span>
              위 개인정보 수집·이용에 동의합니다 (
              <Link href="/privacy" className="underline underline-offset-2 hover:text-bronze">
                개인정보처리방침
              </Link>
              )
            </span>
          </label>
          {errors.agree && <p className="mt-2 text-[15px] font-medium text-ink">{errors.agree}</p>}
        </div>

        {status === "error" && (
          <p className="text-[15px] font-medium text-ink">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="h-14 w-full bg-ink text-[17px] text-ivory transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "submitting" ? "전송 중…" : "관심고객 등록"}
        </button>
      </div>
    </form>
  );
}
