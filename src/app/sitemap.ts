import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { LAST_UPDATED } from "@/lib/content";
import { POSTS } from "@/lib/news";

// 전 라우트 + 발행글 절대 URL · lastmod. 분양가·일정 변경 시 LAST_UPDATED 갱신.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_UPDATED);
  const routes = ["", "/overview", "/location", "/premium", "/complex", "/floorplan", "/sales", "/modelhouse", "/news", "/faq", "/privacy"];
  const base = routes.map((r) => ({
    url: site.origin + r,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : r === "/sales" || r === "/modelhouse" ? 0.9 : 0.7,
  }));
  const posts = POSTS.map((p) => ({
    url: `${site.origin}/news/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...base, ...posts];
}
