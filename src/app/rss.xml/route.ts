import { POSTS } from "@/lib/news";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// 분양소식 RSS 2.0 피드. POSTS 기반 — 10단계 발행 시 자동 반영.
export function GET() {
  const items = POSTS.map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${site.origin}/news/${p.slug}</link>
      <guid>${site.origin}/news/${p.slug}</guid>
      <category>${esc(p.category)}</category>
      <pubDate>${new Date(p.date + "T09:00:00+09:00").toUTCString()}</pubDate>
      <description>${esc(p.excerpt)}</description>
    </item>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)} 분양소식</title>
    <link>${site.origin}/news</link>
    <description>${esc(site.name)} 공급정보·분양소식</description>
    <language>ko</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
