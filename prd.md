PRD: (주)에이케이(AK) 기업 홍보 및 브랜딩 플랫폼 구축작성일: 2025년 12월 16일작성자: Gemini (AI Assistant)버전: v1.0상태: Draft (초안)1. 프로젝트 개요 (Project Overview)1.1 배경 및 목적(주)에이케이는 친환경 유기농 자재, 기능성 항암 농산물(플라보노이드 함유), 가축 분뇨 악취 저감 기술 등 독보적인 바이오 기술을 보유하고 있음11111111111111. 현재 보유한 방대한 특허, 인증서, 시험 성적서 데이터를 디지털화하고 시각화하여, **"과학적으로 검증된 친환경 바이오 기업"**이라는 브랜드 이미지를 구축하고 글로벌 시장 진출의 교두보를 마련함2222.1.2 목표 (Goals)데이터 시각화: 텍스트 위주의 성적서를 동적인 차트(Chart)로 변환하여 일반 쌀 대비 215배 높은 플라보노이드 수치 등을 직관적으로 전달3333.신뢰도 강화: 특허, 수상 내역, 인증서를 디지털 아카이브 형태로 구조화하여 기술적 진입장벽 입증44444.사용자 경험(UX) 최적화: 최신 Next.js 기술을 활용한 빠른 페이지 로딩과 SEO 최적화.1.3 타겟 오디언스 (Target Audience)Primary: B2B 바이어 (농산물 유통사, 사료 회사, 지자체 환경과), 투자자.Secondary: 건강 기능성 식품에 관심 있는 일반 소비자 (당뇨 환자, 환우 가족)5555.2. 기술 스택 및 개발 환경 (Tech Stack)사용자의 선호 기술 스택을 기반으로 최신 트렌드를 반영함.구분기술 스택선정 이유FrameworkNext.js 16+ (App Router)서버 컴포넌트(RSC)를 활용한 초기 로딩 속도 최적화 및 SEO 강화LanguageTypeScript성분 데이터 및 특허 정보의 타입 안정성 보장StylingTailwind CSS유틸리티 퍼스트 접근으로 빠른 UI 개발 및 일관된 디자인 시스템 적용UI Libraryshadcn/uiRadix UI 기반의 접근성 높고 커스터마이징 가능한 최신 컴포넌트 사용State MgtZustand전역 상태(언어 설정, 테마, 모달 상태 등) 관리의 간소화DatabaseSQLite제품, 특허, 뉴스 데이터를 경량화된 DB로 로컬 파일 기반 관리 (배포 용이성)ORMDrizzle or PrismaSQLite와의 타입 안전한 데이터 통신MotionFramer Motion스크롤에 따른 데이터 등장 애니메이션 및 인터랙션 구현ChartRecharts플라보노이드 함량 비교 데이터 시각화3. 정보 구조 (IA & Sitemap)코드 스니펫graph TD
    A[HOME] --> B[ABOUT US]
    A --> C[TECHNOLOGY]
    A --> D[BUSINESS & PRODUCTS]
    A --> E[MEDIA & COMMUNITY]

    B --> B1[CEO 인사말/프로필]
    B --> B2[기업 이념 (Green Work)]
    B --> B3[연혁/수상내역]
    B --> B4[오시는 길]

    C --> C1[특허 현황 (Patents)]
    C --> C2[R&D 데이터 (성적서)]
    C --> C3[인증/상표]

    D --> D1[항암 농산물 (쌀/양파/무씨차)]
    D --> D2[기능성 식품 (장단콩/당뇨케어)]
    D --> D3[친환경 축산 (악취저감)]
    D --> D4[그린 케어 (탈취수/팻치)]

    E --> E1[언론보도 (News)]
    E --> E2[문의하기 (Contact)]
4. 핵심 기능 요구사항 (Functional Requirements)4.1 메인 페이지 (HOME)Hero Section:슬로건: "Nature, Science, and Life" (가칭).배경: 고해상도 농장 영상 또는 마이크로 줌(Micro-zoom)된 작물 이미지.Impact Metrics (Bento Grid Layout):주요 수치를 카드 형태로 강조6666."플라보노이드 215배 (일반미 대비)""축산 악취 51% 저감""보유 특허 **10+**건"Scrolling Storytelling: 스크롤 시 흙 -> 작물 -> 식탁 -> 환경으로 이어지는 에이케이의 선순환 구조 애니메이션.4.2 기술 연구소 (TECHNOLOGY)특허 아카이브 (Patent Archive):SQLite DB 연동: 특허 번호, 취득일, 특허명, 적용 사례를 검색 가능한 테이블로 구현77777777.특허증 이미지 모달 뷰어 제공.Data Visualization (핵심 기능):비교 차트: Recharts를 사용하여 일반 농산물 vs AK 기능성 농산물의 성분 함량 비교 막대 그래프 구현8888.Data source: AK항암쌀(215.23) vs 일반백미(1.00) 등.4.3 사업 및 제품 (BUSINESS)제품 쇼케이스 (Product Cards):각 제품군(농산물, 축산, 환경)별 탭(Tab) UI 구성 9.상세 페이지:항암 쌀/콩: 충남대 농업과학연구소 성적서 원본 이미지 및 요약 데이터 표시10101010.가축 음용수: 돼지 일당 증체량(6.9% 증가) 및 사료 효율 데이터 그래프 표시11111111.기능성 당뇨 제품: 바나바잎 추출물/코로솔산 특허 내용 명시 ("식후 혈당 억제" 문구 허용 강조)12121212.4.4 관리자 모드 (Admin - Optional)SQLite와 연동된 간단한 Dashboard.새로운 특허 등록, 뉴스 업데이트, 성적서 수치 수정 기능.5. 데이터 스키마 설계 (SQLite Schema Draft)프로젝트에 바로 적용 가능한 prisma 또는 drizzle 스키마 예시입니다.TypeScript// products table
model Product {
  id          Int     @id @default(autoincrement())
  category    String  // "Agro", "Livestock", "Environment", "Food"
  name        String  // "AK 항암쌀", "크린 탈취수"
  description String
  features    String  // JSON string for bullet points
  imageUrl    String
  testResult  String? // JSON string for specific data (e.g., {"flavonoid": 215.23})
}

// patents table
model Patent {
  id          Int     @id @default(autoincrement())
  number      String  // "10-2190631"
  title       String  // "가축용 음용수 제조방법..."
  date        DateTime
  application String  // "기능성 돼지, 소 급여"
  grade       String? // "A급", "BB급" (기술보증기금 평가 등)
}

// histories table
model History {
  id          Int     @id @default(autoincrement())
  year        Int
  month       Int
  content     String  // "환경부장관상 수상"
}
6. 디자인 가이드라인 (Design Guidelines)6.1 컬러 팔레트 (Color Palette)(주)에이케이의 로고 및 이념(Green Work)을 반영13131313.Primary (AK Green): #2E7D32 (신뢰, 친환경, 생명) - 로고의 딥 그린 계열.Secondary (Earth Brown): #795548 (흙, 건강한 먹거리).Accent (Gold/Orange): #FBC02D (최고, Ace, 수상 내역 강조).Background: #F9FAFB (Clean White - 가독성).6.2 타이포그래피 (Typography)Font Family: Pretendard (국문/영문 혼용 시 최적화된 가독성).Headings: Bold, 간결하고 힘 있는 서체.Body: Regular, 높은 가독성.6.3 UI 컴포넌트 스타일 (shadcn/ui)Cards: 둥근 모서리(rounded-xl), 부드러운 그림자(shadow-sm), 호버 시 scale-105 효과.Buttons: Primary 컬러 배경, Ghost 버튼 활용.Borders: 얇고 세련된 그레이 라인.7. 구현 로드맵 (Roadmap)Phase 1: 기획 및 세팅 (Week 1)Next.js 16 + SQLite 환경 구축.제공된 PPT 데이터의 텍스트/이미지 에셋화 (OCR 및 크롭).DB 스키마 확정.Phase 2: 핵심 컴포넌트 개발 (Week 2)shadcn/ui 기반 공통 컴포넌트(Header, Footer, Card, Modal) 개발.Recharts 차트 컴포넌트 개발 (플라보노이드 비교, 악취 저감 그래프).Phase 3: 페이지 구현 (Week 3)Landing Page (Home) 구현.Technology (특허 DB 연동), Product 페이지 구현.Phase 4: 최적화 및 배포 (Week 4)SEO 메타태그 적용 (Open Graph 등).Lighthouse 성능 점수 90+ 목표 최적화.Vercel 또는 사용자 지정 서버 배포.8. 요청 사항 및 제약 조건모바일 대응: 농업 현장이나 외부 미팅 시 모바일로 보여주는 경우가 많으므로 모바일 퍼스트(Mobile-First) 반응형 디자인 필수.법적 표기 준수: "항암 성분 함유" 등의 문구는 공정위/식약처 인정 범위 내에서만 사용해야 함 (특허 내용 기반 표기 준수) 14.이미지 퀄리티: PPT에서 추출한 이미지가 저화질일 경우, AI Upscaling 도구를 사용하여 화질 개선 후 적용.