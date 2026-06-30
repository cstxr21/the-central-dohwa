import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import PromoPopup from "@/components/PromoPopup";

// 본문 국문 — Light(100~300) 미로드(읽는 텍스트 가독성)
const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});
// 헤드 국문
const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
// 장식 영문 전용
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: `${site.name} 공식 분양 홈페이지`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: `${site.name} 공식 분양 홈페이지`,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} 조감도` }],
  },
  // verification(naver/google) 토큰은 9단계에서 발급 후 site.ts에 채워 추가.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSans.variable} ${notoSerif.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[56px] lg:pb-0">
        <Header />
        {children}
        <Footer />
        <MobileCallBar />
        <PromoPopup />
      </body>
    </html>
  );
}
