import { NextResponse, after } from "next/server";
import { supabase } from "@/lib/supabase";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PHONE_RE = /^0\d{1,2}[-\s]?\d{3,4}[-\s]?\d{4}$/;

// 관심고객등록·방문예약 수신 (문서 docs/관심고객등록.md §5).
// ① inquiries 저장 결과로 즉시 응답(텔레그램 왕복 대기 X) → ② 텔레그램 알림은 after()로 백그라운드 발송.
export async function POST(req: Request) {
  let body: { name?: string; phone?: string; time?: string; agree?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "잘못된 요청입니다." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const time = (body.time || "").trim();
  const agreed = body.agree === true;

  // 검증: 성함 · 연락처(01x-xxxx-xxxx) · 개인정보 동의 필수
  if (!name || !PHONE_RE.test(phone) || !agreed) {
    return NextResponse.json(
      { ok: false, error: "성함·연락처·개인정보 동의를 확인해 주세요." },
      { status: 422 },
    );
  }

  if (!supabase) {
    // env 미설정 — .env.local 에 NEXT_PUBLIC_SUPABASE_* 필요(배포 전 필수).
    return NextResponse.json(
      { ok: false, error: "전송 설정이 필요합니다. 잠시 후 다시 시도해 주세요." },
      { status: 503 },
    );
  }

  const source = req.headers.get("referer");
  const userAgent = req.headers.get("user-agent");

  // ① Supabase 저장 — 다현장 공유 테이블, site 컬럼으로 현장 구분
  const { error } = await supabase.from("inquiries").insert({
    site: site.slug,
    name,
    phone,
    preferred_time: time || null,
    agreed,
    source,
    user_agent: userAgent,
  });

  if (error) {
    console.error("[contact] supabase insert 실패:", error.message);
    return NextResponse.json(
      { ok: false, error: "접수 처리 중 오류가 발생했습니다. 분양 상담실로 연락 부탁드립니다." },
      { status: 502 },
    );
  }

  // ② 텔레그램 알림 — 응답 직후 백그라운드. 전송 실패는 로그만(접수는 이미 성공).
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (token && chatId) {
    after(async () => {
      try {
        const text =
          `🏠 ${site.name} 관심고객등록\n` +
          `👤 성함: ${name}\n` +
          `📞 연락처: ${phone}\n` +
          `🕐 연락 가능 시간: ${time || "-"}`;
        const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        });
        if (!r.ok) console.error("[contact] telegram 발송 실패:", await r.text());
      } catch (e) {
        console.error("[contact] telegram 발송 오류:", e);
      }
    });
  }

  return NextResponse.json({ ok: true });
}
