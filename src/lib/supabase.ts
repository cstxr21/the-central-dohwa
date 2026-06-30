import { createClient } from "@supabase/supabase-js";

/**
 * 관심고객등록 저장용 Supabase 클라이언트 (문서 docs/관심고객등록.md §3-1).
 * anon 키 사용 — inquiries 테이블은 RLS로 INSERT만 허용(조회 차단, 개인정보 보호).
 * URL/anon 키는 공개 가능(NEXT_PUBLIC). env 미설정 시 null → route에서 503 처리.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  url && anonKey
    ? createClient(url, anonKey, { auth: { persistSession: false } })
    : null;
