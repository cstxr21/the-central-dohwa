import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/news";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "분양소식" };
  return {
    title: post.title, // template이 "| 두산위브 더센트럴 도화" 접미
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `/news/${post.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": site.origin + "/news/" + post.slug },
    description: post.excerpt,
  };

  return (
    <article className="bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[800px] px-6 pb-16 pt-28 sm:px-10 sm:pt-32">
        <nav className="text-[13px] tracking-[0.2em] text-muted" aria-label="breadcrumb">
          <Link href="/" className="hover:text-ink">
            홈
          </Link>
          <span className="px-2 text-bronze">/</span>
          <Link href="/news" className="hover:text-ink">
            분양소식
          </Link>
        </nav>

        <p className="mt-8 font-accent text-[14px] italic text-bronze">
          {post.category} · {post.date}
        </p>
        <h1 className="mt-3 font-serif text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[40px]">{post.title}</h1>
        <p className="mt-6 text-[18px] leading-[1.9] text-muted">{post.lead}</p>

        <div className="mt-12 space-y-12">
          {post.sections.map((s) => (
            <section key={s.h2}>
              <h2 className="font-serif text-[24px] font-semibold tracking-tight text-ink">{s.h2}</h2>
              <div className="mt-4 space-y-4 text-[17px] leading-[1.9] text-ink">
                {s.paras.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-line pt-6 text-[14px] leading-[1.7] text-muted">{post.sourceNote}</p>

        <div className="mt-8 text-[17px]">
          <p className="text-muted">
            분양가·공급 조건 등 자세한 내용은{" "}
            <Link href="/sales" className="text-ink underline underline-offset-4 hover:text-bronze">
              분양안내
            </Link>
            , 방문예약은{" "}
            <Link href="/modelhouse#reservation" className="text-ink underline underline-offset-4 hover:text-bronze">
              관심고객 등록
            </Link>
            에서 안내받으실 수 있습니다.
          </p>
        </div>
      </div>
    </article>
  );
}
