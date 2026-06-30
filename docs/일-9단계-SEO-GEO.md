> 🔒 **완료·배포 게이트 (모든 단계 md 공통 — 복붙 필수)**: 이 단계를 "완료"라고 말하기 전에, 이 문서의 `## 완료조건 (기계 판정)` 항목을 **마스터 `scripts/verify.mjs`로 실행**(`npm run verify`)해 **전부 PASS(GREEN)** 임을 출력으로 증명한다. 하나라도 FAIL·미구현·미측정·증거없음이면 **미완료** — "했다"고 말하지 말 것. auto 항목은 스크립트가 빌드결과·public·src를 읽어 검사, manual 항목은 `reports/manual-evidence.json`에 증거(수치·경로·요약)를 채워야 PASS. 마스터 verify 스크립트 원본·사용법은 **[11단계](일-11단계-배포점검.md) §마스터 검증 스크립트**에 있다. 신규 현장은 docs 프로세스 md 전체를 복붙 → 그 코드블록을 `scripts/verify.mjs`로 저장 → `content.ts`/`site.ts`만 그 현장 값으로 채우면 게이트가 자동으로 그 현장 기준 검사한다(라우트·슬러그 자동 감지). (현장 산출물 `이미지-배치표.md`는 복붙 대상 아님.)

> **작업 순서 9/11 — 검색 최적화(SEO/GEO)** · 전제: 2~8단계로 사이트 구현 완료
> **목적**: 네이버·구글·다음·AI 4채널 최적화 + 산출물 6종(llms.txt·JSON-LD·robots·sitemap·메타·본문 fact).
> **입력**: 구현된 사이트 + 1단계 fact · **산출물**: 위 6종.
> **적용**: 아래 ` ``` ` 프롬프트 블록의 `[단지 정보 — 채우기]`만 1단계 fact로 치환 후 AI에 그대로 전달. 기존 사이트면 "감사 모드로 시작" 명시 → patch만 출력. placeholder를 실제 사실로 착각해 출력 금지.
> **연계**: 사이트별 공통 메타(canonical·verification·og·alternateName)와 페이지별 JSON-LD 매핑 채우기 값은 2단계 참조. 이 파일은 자기완결(원문 전체 포함).
> **배포 점검(11단계)**: 이 산출물의 정리·빌드·배포 QA와 [검증] 회귀는 **[11단계](일-11단계-배포점검.md)**가 배포 직전 게이트로 수행한다(SEO "내용"은 9단계가 원천, 11단계는 "빌드에 살아있나·정리됐나"만 — 중복 서술 없음).

---

# GEO 프롬프트 템플릿 v5

> **목적**: 네이버·구글·다음·AI 검색 **4채널 동시 최적화** (네이버·구글 organic을 1순위 축으로, AI 인용을 동반 축으로).
> **사용**: 이 파일을 프로젝트에 복사 → `[단지 정보 — 채우기]` 섹션만 채운 뒤 ``` 블록을 AI에 그대로 전달.
> **원칙**: White-hat only. 어뷰징·표시광고법·개인정보보호법 위반 위험 항목은 [절대 금지]에서 차단.
> **버전 이력**: 마지막 [변경 이력] 참조 (최신 v4 → v5 — 멀티페이지 FAQ 중복 금지 · 브랜드 키워드 디듑(H1/H2) · 기존 이미지 자산 강제 개명 금지 · H3 세부 그룹화 명시 · 네이버 AI 검색 전용 블록 신설).

---

```
당신은 GEO(Generative Engine Optimization) + SEO 전문가다.
네이버·구글·다음·AI 검색 네 채널에서 본 사이트가
(a) SERP 상위 노출되고 (b) AI 답변 인용 출처로 채택되게 만들어라.

※ 이 프롬프트의 모든 예시(`{단지명}`, `{사업유형}` 등)는 placeholder다.
   실제 단지 사실은 아래 [단지 정보 — 채우기] 섹션에서만 받을 것.
   예시 값(예: "도시형생활주택", "124세대", "남부터미널역")을
   현재 작업 중인 현장의 사실로 착각해 그대로 출력에 포함시키지 말 것.


[핵심 채널 분담 전략]

채널별로 노출되는 텍스트가 다르다. 4개 채널에 4개의 문구를 따로 잡는다.

  채널                 노출 위치                    톤
  ─────────────────────────────────────────────────────────────
  네이버·구글·다음 SERP  HTML <title>                 의도형(짧고 검색쿼리 정합)
  카톡·SNS·AI 라벨      og:title                     fact형(브랜드+단지정보)
  AI 답변 본문          본문 fact 블록 + llms.txt    완전 fact (인용 단위)
  JSON-LD               구조화 데이터                 검증된 키-값

같은 키워드를 4개 채널에 반복 박지 말 것. 채널 정체성이 다르다.


[SEO 중요도 — 우선순위 (작업·검수 순서)]

리소스가 한정될 때 위에서부터 처리한다. 실제 네이버·구글 분양 사이트 성과
기여도 순이며, AI 인용은 아래 요소들이 충실하면 부수적으로 따라온다.

  최우선 (성과의 대부분을 결정 — 먼저·끝까지 챙길 것)
    1. HTML <title>          페이지별 의도 키워드 (절대 보호 — 수정 금지)
    2. 본문 Fact 콘텐츠       view-source에 박힌 자연어 fact (AI·검색 공통 추출 단위)
    3. H1 / H2 / H3          fact 키워드 자연 삽입한 문서 구조 (H3로 세부 그룹화)

  중요 (최우선 다음으로 챙길 것)
    4. 내부링크              페이지 간 자연어 앵커 순환 구조
    5. meta description      의도+fact 하이브리드
    6. JSON-LD               보이는 콘텐츠와 1:1 일치하는 구조화 데이터
    7. 이미지 SEO            파일명·alt·webp·width/height

  보조 (여력이 될 때 — 핵심 성과 축이 아님)
    8. llms.txt              AI 인용 보조 파일 (효과 미검증 · 없어도 인용은 됨)
    9. Open Graph (og:*)     SNS·AI 라벨 미리보기
    10. Twitter 메타         og:* 의 fallback 보강용

원칙:
- 1~4가 비어있는데 8~10부터 채우는 것은 우선순위 역전. 본문 fact와 내부링크가
  부실하면 llms.txt·og를 아무리 채워도 organic 성과는 오르지 않는다.
- llms.txt는 "있으면 좋은 보조 파일"이지 AI 최적화의 핵심이 아니다.
  AI 인용의 실제 핵심은 #2 본문 fact + #6 JSON-LD다 (llms.txt 없이도 인용됨).


[키워드 리서치 — 검색량 기반 타겟팅]

title·og·description·본문 키워드를 정하기 전에 실검색량을 먼저 확인한다.
추측 키워드가 아니라 데이터로 검증된 키워드만 채널에 배치한다.

도구:
- 네이버 검색광고 키워드도구 (searchad.naver.com) — 월간검색수 PC/모바일 분리·경쟁도
- 네이버 데이터랩 (datalab.naver.com) — 검색어 트렌드·지역·연령대
- 구글 키워드플래너 / Search Console — 구글측 검색량·실제 유입 쿼리
- 네이버 자동완성·연관검색어, 구글 자동완성 — 롱테일 발굴

키워드 층위 (검색량·전환의도로 분담):
  층위        예시                                  특성
  ─────────────────────────────────────────────────────────────────────
  브랜드       "{단지명}" "{단지명} 분양"             검색량 작지만 전환 최고 · organic 1위 가능
  지역+유형    "{지역} 분양" "{지역} {사업유형}"       고검색량 · 경쟁 치열 · 멀티표면 필요
  역세권/입지  "{대표역} 신축" "{지역} 신축 분양"       중검색량 · 입지 페이지 타겟
  롱테일/의도  "{단지명} 분양가/평면도/모델하우스"      저검색량·고전환 · 페이지별 1:1 매핑

원칙:
- 한 페이지 = 주력 키워드 1 + 보조 2~3. 페이지끼리 키워드 카니발(자기잠식) 금지.
- 검색량 0인 마케팅 슬로건(예: "프라이빗 갤러리")은 키워드가 아니라 브랜딩 —
  title·H1의 키워드 자리에 쓰지 말 것 (og/본문 브랜딩 자리엔 OK).
- 고검색량 일반 키워드는 자체사이트 organic만으로 네이버 최상단이 어렵다
  ([채널별 최적화 가이드] > 네이버 > SERP 현실 참조). 멀티 표면으로 분담.
- 키워드는 [단지 정보 — 채우기]의 사실과 일치해야 함 (없는 평형·역명으로 키워드 잡지 말 것).


[HTML title 절대 불변 — 모든 규칙 위에 있음]

페이지별 HTML <title>은 사용자의 사전 결정사항이다. 이 프롬프트의 어떤 분석·
권장·산출물도 HTML title을 변경하지 않는다. 다음 행동 모두 금지:

- title을 다른 값으로 교체 (직접 수정)
- title 변경안을 "더 좋다"고 제안하거나 비교
- title에 "사업유형이 빠졌다", "세대수 추가하면 좋다" 같은 분석 출력
- title 길이가 30자를 넘거나 모자라도 줄여주거나 늘려주지 않음

title이 어색해 보여도 사용자가 네이버 검색량 기반으로 잡은 거. 정정하지 말 것.
title에 fact 키워드(사업유형·세대수·평형)가 없는 것은 "결핍"이 아니라 "분담".
fact는 다른 채널(og:title / llms.txt / JSON-LD / 본문 fact 블록)에서 메운다.

[구현 가드 — 전략값 그대로 박기]
5~8단계가 정한 title 전략값은 `{현장명} {섹션} | {의도키워드}` 형태(브랜드 앞 + 의도키워드 꼬리)다.
이 전체 문자열을 페이지 metadata에 그대로 박는다(`title.absolute`). 다음 구현 금지:
- 섹션명만("사업개요") 넘기고 layout template(`%s | {현장명}`)로 ` | {현장명}`을 뒤에 붙이기
  → 순서 뒤집힘("사업개요 | 현장명") + 의도키워드 꼬리("| 공급정보 안내") 통째 누락 = 전략 파괴.
- template은 `news/[slug]`(글제목 + 브랜드 접미)에만 남긴다. 서브/메인은 absolute로 전체값을 박는다.
- 홈 title은 layout `title.default`에 전략값(`{현장명} | {메인 의도키워드}`) 전체를 박는다.
검증: 빌드 후 각 라우트 HTML <title>이 5~8단계 전략 문자열과 1:1 일치하는지 대조(섹션명만 남거나 꼬리 누락이면 blocker).

[안전장치] title이 비어있거나 단순 도메인명만 있는 경우, 한 번에 한해
"의도하신 게 맞나요?"를 출력 머리에 1줄 묻고 응답을 기다린다.
이후 사용자가 "그대로 둬"라고 하면 절대 손대지 않는다.

이 규칙은 다른 모든 규칙·분석·gap 진단 위에 있다. 충돌 시 이 규칙이 이긴다.


[기존 최적화 존중]

사이트에 이미 다음 흔적이 보이면 절대 덮어쓰지 말 것. "미흡"이 아니라 "전략"이다.

절대 보호 범위:
- HTML title (위 [HTML title 절대 불변] 참조 — 손대지 말 것)

보강 허용 범위 (fact 추가 OK):
- description (80자) — 의도 키워드 + fact 키워드 하이브리드가 정상
  · title과 동일 키워드만 반복하고 있으면 손대지 말 것
  · fact 키워드 추가할 여지가 있으면 의도 키워드 유지하면서 fact 보강
- H1·H2 — 본문 흐름에 fact 키워드 자연 삽입 OK
  · 단, 디자인 톤(서체·여백)에 영향 주는 경우 사용자에게 먼저 확인
- og:* / twitter:* / llms.txt / JSON-LD / 본문 fact 블록 — 비어있으면 채우기

gap 진단은 두 축으로 (우선순위 순):
  ① organic 성과 채널이 부실한가 (최우선·중요 — [SEO 중요도] 2~7)
  - 본문 fact 블록 (paragraph 포함) / H1·H2 / 내부링크(페이지당 2개+·순환구조·
    orphan 여부) / 이미지(파일명·alt·width·height) / meta description / JSON-LD
  - 부실하면 보강
  ② AI 인용 채널이 비어있나 (보조 — [SEO 중요도] 8~10)
  - og:title / og:description / og:image:alt / twitter:* / llms.txt /
    JSON-LD additionalProperty
  - 비어있으면 채우기

  ※ ①을 ②보다 먼저 진단·보강. AI 채널만 채우고 organic 채널이 비면 우선순위 역전.
  ※ HTML title은 진단 대상 아님. 검사·평가·비교 모두 안 함.

※ 기존 사이트 적용 시 — 먼저 현재 상태(llms.txt / JSON-LD / robots / sitemap /
   메타 / 메인 fact 블록 6개)를 감사하고 갭 식별 후 patch로 출력. 처음부터 새로
   만들지 말 것.


[어뷰징·법적 가드레일 — 모든 산출물에 적용]

다음 항목은 산출물 어디에도 포함하지 말 것. 위반 시 검색엔진 페널티 또는
표시광고법·주택법·개인정보보호법 위반.

검색엔진 정책 위반 (모든 채널 공통):
- 키워드 스터핑 (같은 단어를 한 페이지에 부자연스럽게 반복)
- 숨김 텍스트 (display:none, font-size:0, color=background, off-screen 텍스트)
- 클로킹 (봇과 사용자에게 다른 콘텐츠 노출)
- 도어웨이 페이지 (검색용으로만 만든 얇은 페이지)
- 유료 링크/PBN을 dofollow로 (Google Spam Policy 위반)
- JSON-LD 허위 표기 (페이지에 없는 정보를 schema에 넣기 — Google Rich Results 가이드 위반)
- AI 생성 텍스트를 검토·교정 없이 대량 양산 (Helpful Content 정책 위반 가능)
- 자동 번역·기계 생성된 alt 텍스트 그대로 사용
- title/h1을 키워드 나열로 사용 (예: "강릉 분양 강릉 아파트 강릉 청약")
- 브랜드명(단지명)을 모든 H1·H2에 반복 — 브랜드는 H1 + 대표 H2 1~2곳에만 두고,
  나머지 H2는 주제·지역·사실 키워드로 구성 (동일 브랜드 토큰 과반복은 스터핑 신호).
  서브페이지 H2는 그 페이지 고유 주제 키워드를 우선(브랜드는 H1·About·푸터가 커버)
- 부정확한 schema (예: 단지가 LocalBusiness가 아닌데 LocalBusiness로 표기)

부동산 광고 법규 (분양·임대 사이트 한정):
- 분양가·일정·세대수를 시점 표시 없이 마치 현재 사실처럼 표시
  · "2024.10.25 입주자모집공고 기준" 등 시점 표시 의무
- 광고심의필 번호 미표기 상태에서 마케팅 카피 노출
  · 한국주택협회 광고심의 의무 (자율심의)
- "최저가", "확정가", "프리미엄 보장" 같은 비교·확정 광고 표현
  · 표시광고법 부당광고 우려
- 시세를 정확한 근거 없이 비교 (예: "주변 대비 N% 저렴")
  · 출처·근거 명시 필수
- 학구·교통 호재를 확정처럼 단정 (예: "KTX 직결")
  · "2027년 개통 예정" 등 일정·근거 명시
- 시행·시공 주체 누락 또는 단일 표기 (한국 분양은 차입형 토지신탁이 흔함)
  · 시행위탁자·시행수탁자·시공자 3주체 명시

개인정보보호법(PIPA):
- 관심고객등록 폼은 동의 절차 + 처리방침 페이지 필수
- 수집 항목·이용 목적·보유 기간 명시 (필수 동의 vs 선택 동의 분리)
- 처리방침 페이지에 last updated 날짜 표시

콘텐츠 신뢰 (E-E-A-T):
- 마케팅 카피와 객관 fact를 같은 문장에 섞지 말 것
- fact 블록 출처를 입주자모집공고·관계기관 자료로 명시
- 갱신일(YYYY-MM-DD)을 모든 fact 페이지에 표시


[단지 정보 — 채우기]

기본:
- 사이트 URL (www 포함/제외 결정 후 일관 사용, canonical 명시):
- 단지명:
- 영문 표기 / alternateName[]:
- 사업유형 (아파트 / 도시형생활주택 / 오피스텔 / 생활형숙박시설 / 임대 등):
- 주소 (현장):
- 모델하우스 주소 (미정이면 "공고 후 안내"):
- 총 세대수 / 동수 / 층수 (지하~지상):
- 평형 (전용 ○○㎡, 모든 타입):
- 부대복리시설 (커뮤니티 시설 목록):

가격·일정:
- 분양가 또는 임대보증금 (분양형은 분양가, 임대형은 보증금):
  · 분양가는 입주자모집공고일(YYYY-MM-DD) 기준 명시
- 입주 예정일 (YYYY-MM):
- 현재 사업 단계 (예정 / 청약접수중 / 분양중 / 잔여세대 / 계약중 / 입주):
- 청약 일정 (공고일 / 특공 / 1순위 / 2순위 / 발표 / 계약 / 입주):
  ※ **수집·검증용**(JSON-LD `offers`/시점 표기 근거). ⚠️ **청약 종료 시 사이트엔 지난 일정을 나열하지 말 것** → "청약 마감 · 선착순(잔여세대) 계약 중"으로 표기(표시 규칙 = 5·7·11단계). 모집공고일은 분양가 기준일로만 노출.
- 분양 문의 전화:

사업 구조 (한국 분양 특화 — 3주체 분리):
- 시행위탁자 (실질 사업주체, 법인등록번호):
- 시행수탁자 (신탁사, 법인등록번호):
- 시공자 (법인등록번호):

규제·자격:
- 청약 자격 (해당지역/기타지역 구분):
- 규제지역 여부 (비규제 / 투기과열 / 청약과열):
- 전매제한 / 거주의무 / 재당첨제한 / 분양가상한제 적용 여부:

법규 표기:
- 광고심의필 번호 (한국주택협회 자율심의):
- 입주자모집공고 PDF URL:
- HUG 분양보증번호 (또는 다른 보증):
- 인지세 부담 구조:

입지:
- 인접 초등학교 학구 (교육부 학구도 기준):
- 입지 강점 4가지 (교통 / 학군 또는 가구구성 적합도 / 생활 / 자연):
- 핵심 차별점 3가지:

외부 채널:
- 외부 트래커 (GA4 / Google Ads / Meta Pixel / 카카오 픽셀 / 네이버 픽셀 ID):
- 네이버 서치어드바이저 verification:
- 구글 Search Console verification:
- 네이버 플레이스 등록 여부:

※ 미정 항목은 빈 자리로 두지 말고 "미정 — [채널] 발표 후 안내 (사전 알림: 전화)"
   형태로 명시. AI가 그 문장 자체를 답변에 인용 가능하게 만들 것.


[현재 사이트]

종류: (Next.js SSG/SSR / 정적 HTML / WordPress / 빌더 / 광고대행사 LP)

크롤러 호환성:
- Next.js App Router 기본은 Server Component → fact가 정적 HTML에 박힘 (OK)
- "use client" 단독 사용 + CSR로 fact 텍스트가 hydration 후에만 보이는 구조는 NG
  · Naver Yeti는 JS 렌더링 제한적, AI 일부는 가능하지만 모두 가능한 건 아님
  · view-source 결과에 fact 텍스트가 직접 박혀있어야 함
- iframe LP (다른 도메인 임베드)는 AI가 부모 페이지 fact만 인용 → 자체 콘텐츠 필요
  · 단, VR/항공뷰 iframe은 두되 본문에 단위세대 fact 텍스트 별도 필수
- 광고대행사 LP가 메인이면 자체 도메인에 별도 fact 사이트 추가 권장

기본 설정:
- html lang="ko" 명시
- meta charset="utf-8"
- viewport: width=device-width, initial-scale=1
- canonical 절대URL, www 포함/제외 결정 후 일관 사용
- 한국어 본문은 word-break: keep-all 권장 (한국어 가독성)


[산출물 — 6개 완성형]

※ 아래 번호는 산출물 목록일 뿐 중요도 순서가 아니다. 성과 기여 우선순위는
  [SEO 중요도 — 우선순위] 참조 (본문 fact·6번 > 메타·JSON-LD > llms.txt 순).
  llms.txt(1번)가 맨 앞이라고 가장 중요한 게 아니다 — 보조 파일이다.

1. public/llms.txt (마크다운 보조 파일 — AI 인용 보조용, 핵심 아님)
   - 1행 H1: # {단지명} {사업유형}
   - 2행: > {1~2문장 요약 + 갱신일 YYYY-MM-DD}
   - 섹션 (## H2):
     · 단지 개요 (위치·세대수·동수·층수·시공)
     · 사업 구조 (시행위탁자·시행수탁자·시공자 3주체)
     · 주택형·분양가 (시점 명시)
     · 청약 자격 / 일정
     · 입지 (교통·학군·생활·자연)
     · 부대복리시설
     · FAQ 4~8개 (아래)
     · 출처 (입주자모집공고 PDF URL)
     · 최종 갱신: YYYY-MM-DD
   - FAQ 4~8개 — 단지 규모·정보량에 맞게 유동 생성 (8개 강제 아님):
     · 정보가 적은 소규모 단지는 4~5개, 정보가 풍부한 대단지는 6~8개.
     · 답이 "미정 — 공고 후 안내"뿐인 항목을 억지로 채워 개수만 맞추지 말 것.
     아래는 우선순위 높은 후보 — 사업유형·확보된 fact에 맞게 취사선택·변형:
     Q. 분양가 / 임대보증금은 얼마인가 (시점 기준)
     Q. 청약 자격은 어떻게 되나
     Q. 모델하우스는 어디인가, 운영시간은
     Q. 평형·평면도는 어떻게 되나
     Q. 입주 예정일은 언제인가
     Q. 교통은 어떤가
     Q. 학군은 어떤가 (1-2인 타겟 단지면 "가구구성 적합도"로 변형 가능)
     Q. 분양 신청 일정·현재 단계는
   - 이미지·iframe 금지. 텍스트만.
   - 답변 인용 단위로 문장이 잘리지 않게 단락 구성.

2. JSON-LD (페이지별 적용, 보이는 콘텐츠와 1:1 일치)

   ※ 페이지에 없는 정보를 JSON-LD에 넣지 말 것 (Google Rich Results 위반).
   ※ datePublished / dateModified 적용 범위 (모든 entity 강제 아님):
     · 권장(시간성이 핵심인 콘텐츠): Article · NewsArticle · FAQPage
       — 갱신일이 신선도 신호로 직접 작동. 반드시 포함.
     · 선택(상태성 콘텐츠): Residence · Organization · LocalBusiness
       — 본문/푸터 "최종 갱신"으로 충분. 넣어도 무방하나 강제 아님.

   2-1. 홈 / 단지소개 / 입지 / 세대안내
        - Residence (또는 ApartmentComplex / LodgingBusiness 등 사업유형 매칭)
          · 한국 분양 아파트는 Residence + 단지 외관/위치 표현이 일반적
          · 도시형생활주택은 Residence
          · 생활형숙박시설은 LodgingBusiness
        - additionalProperty[]에 PropertyValue 10~15개:
          사업유형 · 청약자격 · 평형 · 세대수 · 동수 · 층수 · 주차대수 · 입주예정
          · 시행위탁자 · 시행수탁자 · 시공자 · HUG 보증번호 · 광고심의필
          · 분양방식 · 분양가상한제적용여부 · 거주의무 · 전매제한
        - alternateName[] — 브랜드 표기 변형 (네이버 검색 변형 매칭용)
        - address(PostalAddress) — 사업지 주소 공개 + 페이지에 주소 텍스트 노출 시(주로 입지/홈, 노출값과 1:1, 미노출·미공개면 생략). ⚠️ 사업지는 LocalBusiness 아님 → Residence.address로만(모델하우스 NAP과 별개, 타입 혼용 금지)
        - geo (좌표) — LocalBusiness 매칭 가능 여부와 별개로 유용(실제 사업지 좌표만 — 추정·허위 0)
        - datePublished, dateModified (선택 — Residence는 강제 아님)

   2-2. FAQ 페이지
        - FAQPage (llms.txt FAQ 4~8개 동일 매핑)
        - mainEntity[] Question/Answer
        - datePublished, dateModified (권장 — 신선도 신호)
        - [멀티페이지 중복 금지] 사이트에 FAQ는 반드시 존재하되(전용 /faq 페이지 권장),
          서브페이지마다 FAQ 섹션을 복제하지 말 것. 서브페이지에 FAQ를 둘 경우
          그 페이지 고유 질문만 넣고, 같은 Q를 여러 페이지에 박지 않는다.
          · 이유: 동일 질문·동일 FAQPage 스키마가 여러 URL에 반복되면 중복 콘텐츠·
            중복 스키마로 희석된다. FAQ는 한 곳에 모으고 질문을 페이지별로 분담.
          · 본문에 이미 사실(규모·일정 등)이 서술돼 있으면 FAQ는 재진술이 되기 쉬움 —
            중복 재진술용 FAQ 섹션은 생략하고, 페이지 고유 질문만 선별한다.

   2-3. 분양안내 페이지 (분양가 공개 시)
        - Offer (priceCurrency: "KRW")
        - validFrom / validThrough — 입주자모집공고일·잔여세대 종료 시점
        - eligibleCustomerType — "해당지역 거주자 우선" 등
        - 미공개면 Offer 추가 금지

   2-4. 모델하우스 페이지 (주소 공개 시)
        - LocalBusiness (또는 RealEstateAgent)
        - address(PostalAddress) · telephone · openingHoursSpecification · geo
        - 미공개면 LocalBusiness 추가 금지

   2-5. 블로그 / 보도자료 글
        - NewsArticle
        - headline · description · image · datePublished · dateModified
          · author · publisher · mainEntityOfPage

   2-6. 사업주체 (3주체 분리 표기)
        - Organization 3개를 sponsor[] 또는 additionalProperty[]에 매핑
        - 시행위탁자 = 사업 실질 책임 주체
        - 시행수탁자 = 신탁사 (분양 매도인 명의)
        - 시공자 = 건설사

   ※ 부차 entity (Organization 단독·WebSite·SiteNavigationElement) 추가 금지.
   ※ BreadcrumbList — depth 2 이상 페이지에 추가 권장 (구글 모바일 SERP에서 거의
     항상 활용). depth 1(홈) 단독에는 불필요.

3. public/robots.txt — 최소 구성

     User-agent: *
     Sitemap: <절대URL>
     #DaumWebMasterTool:<토큰>      ← Daum 검색 등록 시에만, 없으면 제외

   ※ Allow: / 는 불필요 (기본 정책이 허용). noise.
   ※ **`Host:` 지시어 금지** — Yandex 전용 비표준이라 구글·네이버·다음·Bing은 전부 무시(noise). canonical 도메인은 `<link rel=canonical>`로 처리. (정적 robots.txt에는 host 필드 자체가 없음)
   ※ AI 크롤러를 robots.txt에 일괄 차단·허용으로 나열하지 말 것.
     기본은 허용이며 명시적 정책이 있을 때만 분기.
   ※ 네이버·구글 verification은 metadata.verification으로 head 처리.
     robots.txt에 박지 말 것.

4. public/sitemap.xml
   - 모든 페이지 절대 URL + lastmod (W3C datetime 또는 YYYY-MM-DD)
   - 빌드 시점 자동 주입 (Next.js는 app/sitemap.ts 권장)
   - 분양가·일정 변경 시 해당 페이지 lastmod 즉시 갱신
   - hreflang은 다국어 사이트일 때만 (국내 단지는 불필요)
   - 페이지가 50개 이하면 단일 파일 OK, 초과 시 sitemap index 사용

5. 메타태그 — 페이지별 분리

   ※ 모든 페이지(/overview, /location, /premium, /complex, /floorplan, /sales,
     /modelhouse, /news, /faq 등 — 실제 구현 라우트에 맞춤)에 각각 적용.
     layout 디폴트 fallback에 의존하지 말 것.

   5-1. HTML <title> (네이버·구글·다음 SERP, 페이지별 각각) [READ-ONLY]
        ※ 위 [HTML title 절대 불변] 규칙 적용. AI가 변경·제안·비교 금지.
        ※ 신규 사이트 구축 시 사용자가 직접 결정하는 가이드:
          - "단지명 + 사업유형 + 위치" 또는 "단지명 + 의도 키워드"
          - 네이버 잘림 한도 30자 이내 (한글 기준)
          - 페이지별 키워드 분담:
            · 홈          → 단지 브랜드 + 위치 + 의도 키워드
            · /floorplan      → 평면도 + 평형 + 타입
            · /sales      → 분양가 + 분양일정 + 청약
            · /location   → 위치 + 역명 + 입지
            · /modelhouse → 모델하우스 + 위치 + 방문예약

   5-2. og:title (카톡·SNS·AI 답변 라벨, 페이지별)
        - **길이 40자 이내 (엄수)** — 사용자가 한눈에 사이트를 파악하게 · SNS·검색 미리보기 잘림 방지.
          40자 초과 시 "단지명+사업유형"을 우선 남기고 위치·세대수 등 부가 fact를 줄인다.
        - HTML title과 다른 값 사용 가능 (Open Graph 표준)
        - HTML title이 의도 키워드면 og:title은 fact 키워드 위주로 균형
        - HTML title이 fact 키워드면 og:title은 같은 fact를 그대로 유지하되 길이만 확장
        - 페이지별 구조 (placeholder):
          · 홈          og  "{단지명} {사업유형} {N}세대 — {위치}"
          · /floorplan      og  "{단지명} 평면도 — {평형범위} {N}개 타입"
          · /sales      og  "{단지명} 분양 — {분양방식} {청약자격요약}"
          · /location   og  "{단지명} 입지 — {대표역} 도보 {N}분"

   5-3. meta name="description" (페이지별, 80자 이내)
        - **80자 이내 (엄수)** — 네이버 서치어드바이저 '페이지 설명' 권장 기준 (초과 시 ⚠️)
        - 단지명·세대수·평형·위치 fact 담을 것
        - 의도 키워드 + fact 키워드 하이브리드가 정상
        - title과 완전 동일 키워드만 반복돼 있으면 그대로 둘 것

   5-4. og:description (페이지별, 80자 이내)
        - **80자 이내 (엄수)** — 사용자가 쉽게 사이트를 파악하게 · 미리보기 잘림 방지
        - meta description과 별도 값 사용 가능
        - 페이지별 fact 풀로 작성 (AI 답변에 직접 인용)
        - meta description이 하이브리드면 og:description은 순수 fact로

   5-5. twitter:* (보조 채널 — 국내 분양에서 비중 낮음, og:* 보강용)
        - 국내 트래픽 기준 X(트위터) 유입은 미미. og:*가 메인, twitter는 fallback.
        - 값은 og:* 를 그대로 재사용하면 충분 (별도 카피 작성 불필요):
          · twitter:card = "summary_large_image"
          · twitter:title / twitter:description = og:title / og:description과 동일
        - og:* 가 잘 박혀 있으면 다수 플랫폼이 og로 폴백하므로 우선순위 낮게.

   5-6. og:image / og:image:alt (페이지별)
        - 권장 규격: 1200 × 630px, JPG/PNG, 1MB 이하
        - 페이지 주제에 맞는 이미지 (홈=조감, /floorplan=평면도, /sales=외관 등)
        - og:image:alt: 빈 값 절대 금지. "단지명 + 페이지 주제 + 단지 fact"
          · 구조 (placeholder): "{단지명} {페이지주제} — {대표타입} {상세}"

   5-7. canonical (페이지별 절대URL, www 포함/제외 일관)
        - alternates.canonical로 명시

   5-8. verification (사이트 전체 head)
        - naver-site-verification
        - google-site-verification
        - DaumWebMasterTool (또는 robots 토큰 둘 중 하나)

6. fact 블록 — 모든 페이지에 적용

   ※ HTML title이 의도 키워드면 본문에서 fact를 받쳐줘야 AI 추출 가능.
   ※ HTML title이 fact 키워드면 본문은 의도·상세·맥락을 풀어쓰는 역할.
   ※ dl/table만 있으면 약함 — 자연어 paragraph로도 풀어쓸 것 (Q&A 친화).

   - 단지명·세대수·평형·주소·전화·입주예정일을 H2 + paragraph + dl/table로
     (페이지마다 페이지 주제에 맞게 변형)
   - 한 문장 = 한 fact 단위 (AI 인용 시 잘리지 않게)
   - H1·H2에 fact 키워드 자연 삽입 OK (디자인 톤 영향 시 사용자 확인)
   - 정보성 이미지 alt에 단지명+fact 충실 채울 것
     · 순수 장식 이미지(보더·디바이더 등)는 alt="" + aria-hidden (WAI-ARIA)
   - 푸터에 "최종 갱신: YYYY-MM-DD" + 사업자 정보 표시
   - 모든 분양가·일정에 시점 명시 ("{공고일} 입주자모집공고 기준")
   - 마케팅 카피와 fact 블록은 시각적·구조적으로 분리 (서로 다른 H2)


[사이트 설정 (config) — 두 채널 운영 권장 구조]

site-config.ts (또는 동급 파일)에 BRAND 객체 정의:

  short          : "{단지명}"                              (브랜드 단축형)
  full           : "{단지명} | {의도 키워드}"              (HTML title 베이스, 30자 내)
  ogTitle        : "{단지명} {사업유형} {N}세대 — {위치}"  (og:title 베이스 · 40자 이내 엄수)
  description    : 하이브리드 80자                         (meta description 베이스)
  ogDescription  : fact 풀 80자 이내                        (og:description 베이스)
  alternateNames : ["{표기변형1}", "{표기변형2}"]          (alternateName[] 매핑)
  updatedAt      : "YYYY-MM-DD"                            (전 페이지 lastmod 베이스)

각 페이지 metadata에서 변형 명시:
- title: 페이지별 의도 키워드
- openGraph.title: 페이지별 fact 키워드 (BRAND.ogTitle 변형)
- openGraph.description: 페이지별 fact 80자 이내
- twitter.title / twitter.description: og:* 와 동일
- alternates.canonical: 페이지 절대경로


[내부링크 최적화]   ※ 우선순위 중요 — 최우선(title·본문 fact·H1/H2) 다음으로 챙길 것

- 모든 페이지는 최소 2개 이상의 관련 페이지와 연결한다.
- 자연어 앵커텍스트 사용 ("84A 평면도 보기", "분양가 안내" 등 키워드 포함 문구).
  · "여기 클릭", "more" 같은 무의미 앵커 금지.
- 네이버·구글 모두 내부링크를 크롤링 경로·주제 권위·문맥 신호로 중요하게 활용.
  AI도 내부링크로 페이지 간 fact 맥락을 연결해 인용 정확도가 올라간다.
- 동선 예시 (분양 사이트 표준 흐름):
    입지환경  → 평면도
    평면도    → 분양가
    분양가    → 모델하우스
    모델하우스 → 관심고객등록
- 사이트 전체를 순환 구조로 설계 — 어느 페이지로 들어와도 핵심 페이지(분양가·
  평면도·모델하우스·관심고객등록)로 2클릭 내 도달하게 한다.
- 고립 페이지(어디서도 링크 안 되는 페이지) 금지. orphan은 색인·인용에서 누락된다.


[이미지 SEO]   ※ 우선순위 중요 — 네이버·구글 이미지 검색 유입 경로

- 파일명: **사용(배포)되는 모든 이미지·영상은 키워드 파일명 강제** — 배포 전 9단계에서 `{단지영문슬러그}-{배치/내용}-{NN}`으로 일괄 부여(slug 접두 필수). `[G9-IMGNAME]`가 **RED로 강제**(v6 — 배포 전 신규 현장은 예외 없음). 키워드는 §[키워드 리서치]의 네이버 검색량 검증 키워드로(추측 금지).
  · 영문 + 하이픈(-) 조합 권장.
  · 좋음:
      travis-hanulchae-84a-floorplan.webp
      seocho-ph1603-location.webp
      seocho-ph1603-main-visual.webp
  · 의미 없는 파일명은 사용하지 말 것:
      image01.webp / img001.webp / test.webp
  · 단, **이미 배포·색인된 운영 사이트의 기존 이미지만 예외** — 경로·캐시·외부참조(og·색인)
    안정성 때문에 일괄 변경 금지(키워드명은 신규·교체분에만, 기존은 alt로 커버).
    **배포 전 신규 현장은 예외 없이 전 사용 이미지를 키워드 파일명으로 개명한다(강제·[G9-IMGNAME] RED).**
- alt: 실제 이미지 설명 중심 (단지명+주제 fact 자연 포함, 키워드 나열 금지).
- 장식 이미지(보더·디바이더 등)는 alt="" (+ aria-hidden — 스크린리더·크롤러 노이즈 방지).
- 포맷: webp 우선 사용 (avif 가능하면 함께). LCP·전송량 개선.
- width / height 속성 명시 — CLS(레이아웃 이동) 방지, Core Web Vitals 개선.
- 이미지 검색 유입은 파일명보다 alt·주변 텍스트·페이지 주제와의 연관성이 더 중요함.
  평면도·조감도·입지도는 alt와 인접 본문 fact를 특히 충실히 (단지명으로 잡히게).


[메인페이지 정보성 콘텐츠]   ※ Thin Content 방지 — 네이버 SEO·AI 인용 동시 강화

- 메인페이지 하단에 정보성 콘텐츠 블록을 권장한다 (800~2000자 권장).
  · 단지 규모와 정보량에 따라 조절.
  · 무조건 글자 수를 늘리기보다 정보 밀도 우선.
  · 광고 문구 반복 금지 (분량 채우기용 슬로건 반복은 Thin Content와 동급).
  · 목적은 Thin Content 방지 — 빈 분량 채우기가 아님.
- 단순 광고 문구·슬로건보다 사실 기반 설명을 우선한다.
- 다음 항목을 자연스러운 자연어 문단으로 설명 (dl/table만으로 끝내지 말 것):
    · 단지 개요 (위치·세대수·동수·층수·시공)
    · 입지
    · 교통
    · 생활인프라
    · 타입정보 (평형·구성)
    · 청약 또는 공급정보 (시점 명시)
- 목적:
    · 네이버 SEO 강화 — 메인에 본문 텍스트가 충분해야 organic 평가가 오른다.
    · AI 인용 강화 — 메인 fact 문단이 1차 인용 후보가 된다.
    · Thin Content 방지 — 이미지·iframe만 있는 빈 메인은 색인·인용에서 불리.
- 마케팅 카피 블록과 이 정보성 블록은 시각적·구조적으로 분리 (서로 다른 H2).
- 모든 분양가·일정에 시점 명시 ("{공고일} 입주자모집공고 기준").


[채널별 최적화 가이드]

네이버:
- [SERP 현실 — 기대치부터 맞출 것] 네이버 통합검색 최상단 구성을 먼저 이해:
  · 고검색량 일반 키워드("{지역} 분양", "{지역} 아파트")의 상단은
    파워링크(광고) + 네이버부동산 + 플레이스 + VIEW(블로그·카페)가 차지 →
    자체 분양사이트가 organic으로 그 자리를 먹기는 어려움
  · 자체사이트가 organic 1위를 노릴 수 있는 건 주로 브랜드 키워드("{단지명}")
  · 따라서 "네이버 최상단"은 단일 SEO가 아니라 표면별 분담으로 달성:
      브랜드 키워드    → 자체사이트 SEO (이 템플릿 산출물)
      일반 고검색량    → 네이버 블로그/카페 콘텐츠 + 플레이스 + (예산 시)파워링크
      모델하우스/지역  → 네이버 플레이스 + 네이버부동산
- Naver Search Advisor 등록 + sitemap.xml 제출 + RSS 제출 + robots.txt 등록
- 신규/변경 페이지는 Search Advisor "웹페이지 수집요청"으로 즉시 색인 유도 (분양은 시점 민감)
- 모바일 우선 (Yeti Mobile, 국내 트래픽 80%+ 모바일)
- og:* 강력 의존 (네이버는 SERP 미리보기에 og:title/og:description/og:image 활용)
- 형태소 검색 — 키워드 변형(아테라 / Artera / 아테라아파트) alternateName[]
- 네이버 플레이스 등록 (모델하우스는 LocalBusiness로 등록)
- 네이버부동산(land.naver.com) 분양 등록 — 분양 트래픽 최대 채널 (중개·분양 제휴 경유)
- 네이버 블로그/카페에 단지 fact 콘텐츠 5~10편 (사이트 외 신호 강화)
- VIEW 탭 노출은 사이트 SEO 외 별도 영역 — 사이트 SEO만으로 못 잡음

네이버 AI 검색(생성형 답변·Cue:·에어서치) 유입 [국내 분양에서 비중 큼]:
- 일반 AI(ChatGPT·Perplexity 등 웹크롤링 기반)와 인용원이 다름. 네이버 AI는
  이중 구조로 끌어온다:
  · ① 네이버 색인 웹문서 (Search Advisor 등록 필수 — 미색인이면 후보에서 제외)
  · ② 네이버 생태계 문서 (부동산·플레이스·블로그·카페·지식iN)
  → 자체 사이트 SEO만으로는 부족. 생태계 신호가 개체(단지명) 인식·fact 보강에
    크게 작용하므로 양쪽을 같이 채운다.
- 자체 사이트 측 (이 템플릿 산출물로 처리):
  · Search Advisor 색인 필수 + "웹페이지 수집요청"으로 신규/변경 즉시 색인
  · 본문 fact를 정적 HTML로 (Yeti는 JS 렌더 제한) — view-source에 fact 직접 노출
  · 질문형 검색에 직접 답하는 자연어 문장 (Q&A 친화) — AI 답변 추출 단위
  · 단지명 일관 표기 + alternateName 변형 (형태소·표기 변형 매칭)
  · 갱신일·출처(입주자모집공고) 명시 — 신뢰도 가중
- 네이버 생태계 측 ([프롬프트 밖의 일] 오프페이지 — 사람이 처리):
  · 네이버부동산 분양 등록 = 개체 인식 1차 소스
  · 플레이스(모델하우스) 등록 / 블로그·카페·지식iN에 fact 콘텐츠 누적
- 주의: 네이버 AI 기능·명칭(Cue: 등)은 확장·변동 중 → 특정 기능명에 의존하지 말고
  "네이버 색인 + 생태계 신호 + 정적 fact" 구조에 최적화 (문서 노후화 방지).

구글:
- Google Search Console 등록 + sitemap 제출
- Core Web Vitals (LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms)
- Mobile-First Indexing — 모바일에서 보이는 콘텐츠가 색인 기준
- E-E-A-T (Experience·Expertise·Authoritativeness·Trustworthiness)
  · 작성자/발행자 표시 (Organization 또는 Author schema)
  · 출처 명시 (입주자모집공고 PDF 링크)
- 구조화 데이터 Rich Results — 부동산·분양은 적용 폭이 좁음에 유의:
  · FAQPage·HowTo 리치결과는 2023.8부터 정부·보건 등 공신력 사이트로 제한 →
    상업 분양 사이트는 구글 SERP에 리치결과로 안 뜸 (FAQPage는 AI 인용·네이버용으로만 유지)
  · Offer/LocalBusiness도 부동산 전용 리치결과 없음 — 색인·AI 인용 목적의 가치
  · 실효 리치결과는 사이트링크·Breadcrumb 정도
- Helpful Content — 사용자 의도에 직접 답하는 콘텐츠 (광고성 카피만은 NG)
- 내부 링크 — 페이지 간 자연어 앵커로 연결 (크롤링·주제 권위·AI 맥락 모두 강화)
- 이미지 webp/avif + 명시적 width/height (CLS 방지, LCP 개선)

다음 [보조 채널 — 최소 노력]:
- 검색 점유율 1% 미만. 네이버·구글 다음의 보조 채널로만 취급, 시간 들이지 말 것.
- 등록만 해두고 끝: Daum Webmaster Tool verification + sitemap 제출.
- robots.txt에 #DaumWebMasterTool:<토큰> 또는 메타태그 (등록할 때만).
- 다음 전용 콘텐츠·튜닝은 불필요 (네이버·구글 최적화가 그대로 커버).

AI 인용 (생성형 검색·답변엔진 일반):
- ※ 네이버 AI는 별도 특성 — 위 [네이버 > 네이버 AI 검색] 참조. 일반 AI는 웹크롤링
  기반이지만 네이버 AI는 네이버 색인 + 생태계 문서(부동산·플레이스·블로그/카페)
  비중이 크다. 국내 분양은 네이버 AI 유입이 특히 중요하므로 양쪽을 함께 챙길 것.
- 핵심은 본문 fact와 JSON-LD다. 아래 순서로 무게를 둔다:
  · 본문 paragraph fact 자연어 풀이 (Q&A 친화) — AI 인용의 1차 추출원
  · JSON-LD 풍부화 (Residence/Offer/FAQPage/LocalBusiness/Article 조합)
  · 출처 명시 — 사업주체·입주자모집공고 PDF·관계기관 URL
  · citation-friendly anchor text ("강릉 아테라 청약 자격" 같은 자연어)
  · datePublished/dateModified 최신성 가중 (Article·FAQPage 중심)
  · /llms.txt 정적 파일 — 위 요소가 갖춰진 뒤의 보조 수단 (없어도 인용은 됨)
- AI 크롤러는 용도가 둘 — 구분해서 다룰 것 (혼동해 일괄 차단 시 AI 유입 0):
  · 검색/인용 목적 크롤러 (실시간 답변 출처 = AI 유입 직결) → 절대 차단 금지.
    각 AI 검색 서비스가 실시간 답변에 쓰는 크롤러가 여기 해당.
  · 학습 목적 크롤러 (모델 훈련용, 유입과 무관) → 차단해도 검색 인용은 유지됨.
    학습 거부 정책이 있을 때만 선택적으로 차단.
  · 핵심: 학습 크롤러를 막더라도 검색/인용 크롤러는 반드시 열어둘 것.
    개별 봇 명칭은 업체별로 바뀌므로, 차단 정책이 필요하면 적용 시점에
    각 AI 업체 공식 문서에서 최신 user-agent를 확인해 분류할 것.
- noindex/nosnippet 사용 시 AI도 못 읽음 — 의도 확인 후 사용


[지키지 말 것 — 절대 금지]

HTML title 관련 (위 [HTML title 절대 불변] 참조):
- HTML title 값 변경 (어떤 페이지든, 어떤 이유든)
- "title을 ~로 바꾸면 좋겠다" 식 제안·권장·비교 출력
- title에 "사업유형이 빠졌다", "키워드가 약하다" 같은 평가·분석 출력
- 사용자가 명시적 "title 바꿔줘" 지시 전에 title 영역에 손대기

검색엔진 페널티 유발 (모든 채널 공통):
- 키워드 스터핑 (예: "강릉 분양 강릉 아파트 강릉 청약 강릉")
- 숨김 텍스트 (display:none / font-size:0 / color=background)
- 클로킹 (봇과 사람에게 다른 콘텐츠)
- 도어웨이 페이지 (검색용으로만 만든 얇은 페이지)
- 유료 링크/PBN dofollow
- 검색/인용 목적 AI 크롤러를 robots.txt에서 통째로 차단 (AI 유입 0)
- JSON-LD에 페이지에 없는 정보 넣기

부동산 광고 법규 위반:
- 분양가·일정을 시점 표기 없이 마치 현재 사실처럼 표시
- 광고심의필 번호 미표기 상태에서 마케팅 카피 노출
- "최저가", "확정 프리미엄", "직결" 등 비교·확정형 표현
- 시세 비교는 근거·출처 없이
- 시행·시공 주체 누락 또는 단일 표기 (3주체 모두 명시)
- 학구·교통 호재를 "예정" 없이 단정

개인정보보호법:
- 관심고객등록 폼에 동의 절차 없이 수집
- 처리방침 페이지 없이 폼 운영
- 수집 항목·이용 목적·보유 기간 미표시

산출물 자체의 문제:
- 묵시적 허용을 명시로 재기재 (robots에 AI 봇 나열 등)
- 마케팅 슬로건을 키워드로 (실제 검색 쿼리 아니면 의미 없음)
- "강력한 효과"식 부풀린 효과표
- Organization 단독·WebSite·SiteNavigationElement 같은 부차 JSON-LD
- 정보성 이미지에 빈 alt
- 미정 항목을 빈 자리로 두기 (반드시 "미정 — 공고 후 안내")
- description·H1·H2에 fact 추가할 여지가 있는데 "전략 보호" 핑계로 비워두기
- og:title을 HTML title과 똑같이 두기 (분리해야 양쪽 채널 다 잡힘)
- 페이지별 og:* 명시 안 하고 layout 디폴트 fallback에 의존
- 본문 fact를 dl/table에만 두고 paragraph로 안 풀어쓰기
- 이 프롬프트의 placeholder({단지명} 등)를 실제 사실로 착각해 출력에 포함


[프롬프트 밖의 일 — 사람이 해야 함]

검색 등록:
- 네이버 서치어드바이저 등록 + sitemap 제출 + RSS 제출 + robots.txt 등록
  · 신규/변경 페이지는 "웹페이지 수집요청"으로 즉시 색인 유도 (분양 시점 민감)
- Google Search Console 등록 + sitemap 제출 + URL 검사 색인요청
- Daum Webmaster Tool 등록 (선택)
- Bing Webmaster Tool 등록 (선택, MS Copilot·Bing AI 인용 ↑)

오프페이지:
- 네이버 플레이스 등록 (모델하우스를 비즈니스로)
- 네이버부동산(land.naver.com) 분양 등록 (중개·분양 제휴 경유 — 분양 트래픽 최대 채널)
- 네이버 블로그/카페에 단지 fact 콘텐츠 (사이트 외 신호)
- 네이버 지식iN — 단지·청약 질문에 fact 기반 답변 (사이트 링크 자연 노출)
- 보도자료 배포 (언론 인용 → AI 신뢰도 ↑)
- 인근 부동산 카페·맘카페 자연 노출

법규 준수:
- 한국주택협회 광고심의 신청 → 광고심의필 번호 사이트 표기
- 분양가·일정 변경 시 llms.txt + sitemap lastmod + 본문 fact 즉시 갱신
- 관심고객등록 → 개인정보처리방침 페이지 + 동의 절차

운영:
- 분기 1회 fact 블록 전체 점검 (분양 단계 변경 즉시 갱신)
- 월 1회 검색 노출 모니터링


[검증 — 적용 후 확인]

배포 직후 (체크리스트):
- view-source로 fact 텍스트가 HTML에 정적으로 박혀있는지 확인
- **여러 줄 헤딩 주의**: H1/H2를 줄바꿈용 block `<span>`·`<br>`로 나눌 때 **단어 사이에 공백이 들어가는지** 확인. JSX/HTML이 태그 인접 공백을 제거하면 `textContent`에서 두 단어가 붙어(예: "갤러리○○구") 키워드 토큰이 깨져 형태소·AI 추출에 손해. 줄 사이에 `{' '}`(또는 명시적 공백) 삽입. (시각은 block이라 그대로 두 줄)
- /llms.txt, /robots.txt, /sitemap.xml 셋 다 200 응답 확인
- **페이지 설명(meta description)·og:description 80자 이내 / 페이지 제목·og:title 40자 이내 확인** (네이버 서치어드바이저 권장 — 초과 시 ⚠️ 경고)
- 페이지별 HTML title과 og:title이 실제로 다른 값으로 박혀있는지
  (DevTools → Elements → title 태그 vs og:title 메타 비교)
- 페이지별 og:image / og:image:alt가 페이지마다 다른지
- 카톡으로 페이지별 링크 보내 og:* 미리보기 확인
- Rich Results Test (search.google.com/test/rich-results) — 페이지별
- Schema Markup Validator (validator.schema.org) — JSON-LD 검증
- PageSpeed Insights — LCP/CLS/INP 측정
- 모바일 친화성 테스트

2주 후 (AI 인덱싱):
- ChatGPT(웹검색 ON)·Perplexity·Claude·Gemini에 페이지별 질문:
  · "{단지명} 청약자격" → /sales 또는 /faq 인용?
  · "{단지명} 평면도" → /floorplan 인용?
  · "{단지명} 분양가" → /sales 인용?
  · "{단지명} 모델하우스" → /modelhouse 인용?
  · "{단지명} 시공사" → /overview 또는 /sales 인용?

4주 후 (안정화):
- AI 인용 페이지 분포 (한 페이지 몰림 = 다른 페이지 fact 부족)
- 네이버 Search Advisor 페이지별 노출/클릭
- 구글 Search Console 페이지별 노출/클릭

4~8주 후 (구글 색인):
- 구글 SERP에 각 페이지 색인됐는지
- AI Overview에 사이트 인용 여부

지속 모니터링:
  채널         도구                       주기
  ─────────────────────────────────────────────────
  네이버 SERP  Naver Search Advisor       주 1회
  구글 SERP    Google Search Console      주 1회
  다음 색인    Daum Webmaster Tool        월 1회
  AI 인용      직접 쿼리 테스트            격주
  Core Web V   PageSpeed Insights         월 1회


각 산출물은 그대로 붙여 작동하는 완성형으로 출력하라.
산출물 출력 전, [단지 정보 — 채우기] 섹션의 placeholder가
모두 실제 값으로 치환됐는지 자체 검증한 뒤 출력하라.
```

---

## 이미지·영상 파일명 — 배치 영역 기준 키워드 (현장 실행)

> [이미지 SEO]는 "규칙", 여기는 "이 현장 적용". **미배포 상태에서 9단계에 전 사용 이미지 일괄 부여 — 예외 없이 `{slug}-{배치/키워드}`로 강제(`[G9-IMGNAME]` RED)**(배포·색인 후엔 og·색인·캐시 깨져 변경 금지).

- **명명 규칙**: `{단지영문슬러그}-{배치영역/내용}-{NN}.확장자`. 배치된 페이지·섹션 기준으로 키워드를 정한다(파일명만 보고 무슨 이미지인지 알게).
  - 예: 평면도 `…-84a-floorplan.webp` / 입지 지도 `…-location-map.webp` / 단지배치도 `…-site-plan.webp` / 동호배치도 `…-building-layout.webp` / 조감·투시도 `…-aerial-NN` / 조경 `…-landscape-NN` / 커뮤니티 `…-community` / 인테리어 `…-84a-interior-NN` / 프리미엄 `…-premium-NN`·`…-premium-visual-NN` / 영상 `…-hero.mp4`.
- **일괄 적용 시 함께 바꿀 것(누락 시 404)**: ① `public/images`·`public/videos` 파일 rename ② 전 페이지 참조(리터럴 + 템플릿 `prefix-${n}` + `Array.from`) ③ 영상 poster/src ④ (OG는 `/images/og/*` 별도 — 영향 없음). 후 **build + 이미지 404=0 검증**.
- **우선순위**: 이미지 검색 유입은 **alt·주변 본문 > 파일명**(이미 alt에 단지명+주제 적용). 키워드 파일명은 보조이며, 효과가 큰 평면도·지도·배치도·조감부터.
- **재현성**: `scripts/materialize-images.mjs`는 curation baseName으로 생성하므로, 재실행 시 **동일 배치→키워드 맵을 적용**해야 이름이 어긋나지 않는다(또는 9단계 rename을 최종본으로 고정).

## 완료 조건 (사람용 요약)

> **기계 강제는 아래 `## 완료조건 (기계 판정)` G9 게이트가 담당**(중복 서술 제거): 파일명=[G9-IMGNAME]·산출물6종=[G9-OUT6]·메타길이/구분/canonical=[G9-META]·JSON-LD매핑=[G9-JSONLD]·OG실존=[G9-OGIMG]·이미지404=[G9-IMG404]·내부링크orphan=[G6-LINKS]·어뷰징/없는기능=[G9-ABUSE]·placeholder=[G9-PLACEHOLDER]·3주체=[G9-3PARTY]·비서술앵커=[G9-LINKTEXT]. 여기선 **게이트가 자동으로 못 잡는 수동 보강만** 챙긴다:
- [ ] **og:image:alt** 빈 값 0(단지명+주제+fact), twitter card (alt "내용"은 사람 확인)
- [ ] **이미지 정보성 alt 충실** + 장식 `alt=""` (alt 문구 적절성은 사람 판단)
- [x] **verification(naver·google)** 자리 — `site.ts verification` 조건부 출력 구조 구현(현재 토큰 빈값=메타 미출력, 발급 후 기입 대기)
- [x] **/llms.txt·/robots.txt·/sitemap.xml 200 응답** (런타임 — 배포 후 확인) — public/robots.txt·sitemap.ts·public/llms.txt 신설·빌드 정적 생성 확인(✓)
- [x] **본문 fact paragraph** 자연어 풀이(AI 인용 단위) — /sales 분양가 섹션 자연어 fact 문단 + 갱신일 추가(2026-06-29)

> **9단계 진행 현황 (이 현장, 2026-06-29)**: 분양가 키워드 organic 토대 작업 — `app/sitemap.ts`(/sales priority 0.9·13 URL)·`public/robots.txt` 신설, /sales 분양가 자연어 fact 문단·갱신일·JSON-LD `validFrom` 보강(HTML title 불변·어뷰징 0). 상세 증거: `reports/manual-evidence.json` STAGE-9(PARTIAL). 남은 작업(사람): 네이버 서치어드바이저·구글 SC 등록 + verification 토큰 기입 + sitemap 제출.

---

## v4 → v5 변경 이력

> 원칙: v4가 이미 커버한 항목(표시광고법 가드·기술 SEO·페이지당 키워드 분담·멀티페이지 IA·구글 FAQ 리치결과 중단·이미지 alt 우선)은 **중복 추가하지 않음**. v4에 실제로 빠져 있던, 충돌 없는 신규 가드만 통합.

### 추가·보강
1. **멀티페이지 FAQ 중복 금지** ([산출물] 2-2 FAQPage + [부록] FAQ 라인) — 사이트에 FAQ는 반드시 존재하되(전용 /faq 권장) 서브페이지마다 FAQ 섹션을 복제하지 말 것. 서브페이지 FAQ는 그 페이지 고유 질문만, 같은 Q를 여러 URL에 박지 않음. 동일 질문·동일 FAQPage 스키마 반복은 중복 콘텐츠·중복 스키마로 희석. 본문에 이미 서술된 사실의 재진술용 FAQ는 생략.
   · 배경: 구글 FAQ 리치결과는 v4(2023.8 정책)에서 이미 상업 사이트 미노출로 정리됨 → FAQ의 실효 가치는 "AI 인용·네이버"이므로, 중복 남발은 득보다 실.
2. **브랜드 키워드 디듑** ([어뷰징·법적 가드레일]) — 브랜드명(단지명)을 모든 H1·H2에 반복하지 말 것. 브랜드는 H1 + 대표 H2 1~2곳에만, 나머지 H2는 주제·지역·사실 키워드로. 서브페이지 H2는 페이지 고유 주제 키워드 우선(브랜드는 H1·About·푸터가 커버).
3. **기존 이미지 자산 강제 개명 금지** ([이미지 SEO]) — 이미 운영 중인 사이트의 기존 이미지는 경로·캐시·외부참조(og·색인) 안정성을 위해 파일명 일괄 변경 금지. 키워드 파일명은 신규·교체 이미지에만 적용, 기존 자산은 alt·주변 본문으로 커버(alt > 파일명).
4. **H3 세부 그룹화 명시** ([SEO 중요도] 문서 구조 항목) — H1/H2에 더해 H3로 섹션 내 세부 그룹화를 활용(예: 커뮤니티 시설 → 다이닝/액티비티/라운지 H3 분류). 가독성·정보 추출성 향상.
5. **네이버 AI 검색 전용 블록 신설** ([채널별 최적화 가이드] > 네이버) — 생성형 답변·Cue:·에어서치 유입 최적화. 네이버 AI의 이중 인용원(① Search Advisor 색인 웹문서 ② 부동산·플레이스·블로그/카페·지식iN 생태계 문서)을 명시하고, 자체 사이트 측(정적 fact·Q&A 문장·색인·alternateName)과 생태계 측(부동산·플레이스 등록)을 분담. 일반 [AI 인용] 섹션에 네이버 AI 특성 교차 참조 추가. 국내 분양에서 비중 큰 채널인데 v4까지 일반 AI에 뭉뚱그려져 있던 것을 분리.

### v4 강점 유지
- HTML title 절대 불변 + 4채널 fact 분담, SEO 중요도 우선순위, 내부링크/이미지 SEO/메인 정보성 콘텐츠, 표시광고법·개인정보보호법 가드레일, 산출물 6종 + 자체 검증.

---

## v3 → v4 변경 이력

### 추가
1. **[SEO 중요도 — 우선순위]** 섹션 신설 — 최우선(HTML Title·본문 Fact·H1/H2) / 중요(내부링크·description·JSON-LD·이미지) / 보조(llms.txt·og·twitter). 작업·검수 순서를 명문화.
2. **[내부링크 최적화]** 섹션 신설 — 페이지당 관련 링크 2개+, 자연어 앵커, 순환 구조 설계, orphan 금지, 분양 표준 동선 예시(입지→평면도→분양가→모델하우스→관심고객등록).
3. **[이미지 SEO]** 섹션 신설 — 영문+하이픈 키워드 파일명(travis-hanulchae-84a-floorplan.webp 등), 설명형 alt, 장식 alt="" , webp 우선, width/height 명시. 이미지 검색 유입은 파일명보다 alt·주변 텍스트·페이지 주제 연관성이 더 중요함을 명시.
4. **[메인페이지 정보성 콘텐츠]** 섹션 신설 — 메인 하단 800~2000자 권장(분량보다 정보 밀도 우선, 광고 반복 금지) 사실 기반 설명으로 Thin Content 방지 + 네이버 SEO/AI 인용 강화.
5. **[부록] 현장 적용 사이트 구조 스켈레톤** 신설 — 새 현장 SEO/IA 설계 문서를 복사·빈칸 교체로 시작하는 재사용 골격(사이트 구조·페이지별 TITLE/DESC/H1/H2·공통 메타/JSON-LD/렌더링 사양·전환원칙). 프롬프트 블록 밖에 배치(사람 작성용). 매 현장 처음부터 짜던 것을 표준화.

### 정정·축소
- **llms.txt 비중 축소** — "AI 최적화 핵심"에서 보조 수단으로 격하. AI 인용의 실제 핵심은 본문 fact + JSON-LD임을 명시(없어도 인용됨). 산출물·AI 가이드·우선순위 전반에 반영.
- **AI 봇 명칭 일반화** — 개별 봇명(GPTBot·ClaudeBot·PerplexityBot·Bingbot·Googlebot 등) 나열 최소화 → "검색/인용 목적 크롤러" vs "학습 목적 크롤러" 구조로 일반화. 업체 변경에도 문서가 구식이 되지 않도록 수정.
- **FAQ 개수 유연화** — "FAQ 8개" 강제 → "FAQ 4~8개" (단지 규모·정보량에 맞게 유동, 억지 채우기 금지). llms.txt·FAQPage 양쪽 반영.
- **datePublished/dateModified 범위 완화** — "모든 entity 강제" → Article·NewsArticle·FAQPage 권장 / Residence·Organization·LocalBusiness 선택.
- **다음·Twitter 보조 채널 명시** — 다음은 등록만(verification+sitemap), Twitter는 og:* 재사용으로 충분한 보조 채널임을 명문화.
- **gap 진단 2축 재편** — 기존 "AI 인용 채널" 단일 축 → ① organic 성과 채널(본문 fact·H1/H2·내부링크·이미지·desc·JSON-LD) ②AI 인용 채널 2축으로 분리, ①을 먼저 진단하도록 우선순위 정합화. 우선순위 원칙 게이트 문구도 "1~3"→"1~4"로 보정.

### v3 강점 유지
- HTML title 절대 불변 + 4채널 fact 분담 핵심 전략.
- 키워드 리서치·네이버 SERP 현실 전략·AI 봇 검색/학습 구분.
- 어뷰징·표시광고법·개인정보보호법 가드레일 + 산출물 6종 + 자체 검증.

---

## v2 → v3 변경 이력

### 추가
1. **[키워드 리서치 — 검색량 기반 타겟팅]** 섹션 신설 — 네이버 키워드도구·데이터랩 기반 실검색량 확인, 키워드 4층위(브랜드/지역+유형/역세권/롱테일) 분담, 페이지당 1주력 키워드 원칙.
2. **네이버 SERP 현실 전략** — 고검색량 일반 키워드 상단은 광고·네이버부동산·플레이스·VIEW가 차지함을 명시. "네이버 최상단"을 브랜드 키워드(자체 SEO) vs 일반 키워드(멀티 표면)로 분담하는 현실적 기대치 설정.
3. **네이버 자산 연동 보강** — 네이버부동산(land.naver.com) 분양 등록, 서치어드바이저 RSS·수집요청, 지식iN 추가.
4. **구글 내부링크·webp/avif** 항목 추가 (크롤링·CWV).

### 정정
- **FAQPage/HowTo 리치결과** — 2023.8 구글 정책으로 상업 사이트는 구글 SERP 리치결과 미노출 → "AI 인용·네이버용으로만 유지"로 정정. Offer/LocalBusiness도 부동산 전용 리치결과 없음을 명시.
- **AI 봇 검색/학습 구분** — 검색·인용봇(OAI-SearchBot·PerplexityBot·ClaudeBot·Bingbot·Googlebot=절대 차단 금지) vs 학습봇(GPTBot·Google-Extended·Applebot-Extended·CCBot=선택 차단)으로 분리. 혼동 일괄 차단 시 AI 유입 0 경고.
- **BreadcrumbList** — depth 3 이상만 → depth 2 이상 권장으로 완화 (구글 모바일 SERP 활용).

### v2 강점 유지
- HTML title 절대 불변 + 4채널 fact 분담 핵심 전략.
- 어뷰징·표시광고법·개인정보보호법 가드레일.
- 산출물 6종 완성형 + 자체 검증 단계.

---

## v1 → v2 변경 이력

### 추가
1. **[핵심 채널 분담 전략]** 섹션 신설 — 4채널(SERP/SNS/AI/JSON-LD) 정체성 분리 명시.
2. **[어뷰징·법적 가드레일]** 섹션 신설 — 검색엔진 페널티 + 표시광고법 + 개인정보보호법 위반 항목 명시.
3. **[채널별 최적화 가이드]** 섹션 신설 — 네이버·구글·다음·AI 채널별 액션 분리.
4. **[안전장치]** — HTML title이 비어있거나 도메인만 있을 때 한 번 확인.
5. **`[단지 정보 — 채우기]` 분양 특화 필드 추가**:
   - 현재 사업 단계 (시점 명시)
   - 분양가 시점 (입주자모집공고일 기준)
   - 시행위탁자 / 시행수탁자 / 시공자 3주체 분리
   - 광고심의필 번호
   - 입주자모집공고 PDF URL
   - HUG 분양보증번호
   - 인접 초등학교 학구
   - 부대복리시설
   - 외부 트래커 ID 일괄
6. **og:image 권장 규격(1200×630)** 명시.
7. **JSON-LD 사업주체 3주체 매핑** 가이드.
8. **BreadcrumbList 조건부 사용** (depth 3 이상만).
9. **canonical / verification 분리** 가이드 (robots 박지 말 것).
10. **자체 검증 단계** — 산출 전 placeholder 치환 확인.

### 정정
- **robots.txt** — `Allow: /` 제거 (불필요).
- **JS 렌더링 한계** — "AI는 못 읽음" → "AI 일부는 가능하지만 안전을 위해 정적 HTML 권장".
- **Flash 언급 삭제** (2020년 EOL).
- **HTML title 절대 불변** — 안전장치 추가 (빈 title은 한 번 확인).
- **반대 케이스 가이드** — title이 fact 키워드일 때 본문 분담 전략 추가.
- **부차 JSON-LD 처리** — BreadcrumbList는 무조건 제외 → 조건부 허용.

### v1 강점 유지
- HTML title 절대 불변 + fact 채널 분담 핵심 전략.
- 미정 항목 "공고 후 안내" 명시 규칙.
- 의도 키워드 + fact 키워드 하이브리드 description.
- 기존 사이트 적용 시 감사 후 patch 출력.

### 사용 안내
- 새 현장에서 사용 시: 이 파일을 프로젝트로 복사 → `[단지 정보 — 채우기]`만 실제 사실로 치환 → ``` 블록을 AI에 그대로 전달.
- 기존 사이트 적용 시: AI에 "감사 모드로 시작"이라 명시 → 현재 상태 점검 후 patch만 출력.
- placeholder 그대로 출력되는 사고를 막기 위해 마지막 자체 검증 단계 필수.

---

## 완료조건 (기계 판정)

> 형식 `[Gxx-KEY] 설명 | auto|manual`. 마스터 `scripts/verify.mjs`가 이 `[Gxx-*]`를 파싱해 **구현·PASS를 강제**(이 문서에 ID를 선언했는데 스크립트에 검사가 없으면 = RED / 검사는 있는데 어느 md도 선언 안 하면 = 경고). **전부 GREEN 전엔 이 단계 "완료" 금지.**

- [G9-OUT6] 산출물: public/robots.txt·sitemap.ts·rss route·llms.txt 존재 | auto
- [G9-META] 전 라우트 description≤80·og:title≤40·og≠title·canonical | auto
- [G9-JSONLD] 페이지별 @type 매핑(home/개요/입지/단지/평면도=Residence, sales=Residence[+Offer/AggregateOffer 공개 시], modelhouse=RealEstateAgent 또는 LocalBusiness[+address(PostalAddress)·telephone 필수], faq=FAQPage, news=NewsArticle) | auto
- [G9-OGIMG] 전 og:image URL → public 파일 실존 | auto
- [G9-IMG404] 코드의 /images 참조 파일 전부 실존 | auto
- [G9-IMGNAME] 사용(배포) 이미지·영상 파일명: image/img/test류 의미없는명 0 + 전부 `{slug}-{배치/키워드}` 파일명(둘 다 하드 RED, 배포 전 강제=v6) · alt도 키워드 충실(배포·색인된 운영 사이트만 강제 끄고 alt로 커버) | auto
- [G9-LINKTEXT] 본문 `<a>` 비서술 앵커(전체 보기·더보기·여기·more) 0 | auto
- [G9-3PARTY] 시행/시공 3주체 표기 빌드 결과에 생존 | auto
- [G9-ABUSE] 최저가·확정·완판·직결 단정 0·가짜VR(360°·E-모델하우스) 0 | auto
- [G9-PLACEHOLDER] 빌드 HTML에 {현장명}·TODO·lorem 0 | auto

