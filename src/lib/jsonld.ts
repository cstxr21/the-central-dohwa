import { site } from "./site";
import { content } from "./content";

// 단지 Residence JSON-LD (home·개요·입지·단지·평면도 공통). 보이는 fact와 1:1, 허위 0.
export function residenceJsonLd(path: string) {
  const props = [
    { name: "사업유형", value: "공동주택(아파트) · 도화4구역 주택재개발정비사업" },
    { name: "총 세대수", value: `${content.scale.totalHouseholds}세대` },
    { name: "일반분양", value: `${content.scale.generalSupply}세대` },
    { name: "동수", value: `${content.scale.buildings}개동` },
    { name: "층수", value: content.scale.floors },
    { name: "전용면적", value: "59·74·84㎡ (7개 주택형)" },
    { name: "입주예정", value: content.project.moveInPlan },
    { name: "시행", value: content.parties.developer },
    { name: "시공", value: content.parties.contractor },
    { name: "분양보증", value: content.parties.guarantor },
    { name: "전매제한", value: content.schedule.transferRestriction },
    { name: "규제", value: "비규제지역 · 재당첨제한·거주의무 없음" },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: content.project.name,
    alternateName: [...site.alternateName],
    url: site.origin + path,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "인천광역시",
      addressLocality: "미추홀구",
      streetAddress: "도화동 53-28번지 일원",
    },
    numberOfAccommodationUnits: content.scale.totalHouseholds,
    additionalProperty: props.map((p) => ({ "@type": "PropertyValue", ...p })),
  };
}
