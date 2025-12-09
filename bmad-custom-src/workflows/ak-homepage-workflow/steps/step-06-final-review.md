---
name: 'step-06-final-review'
description: 'Final verification, README creation, and optional Party-Mode code review'

# Path Definitions
workflow_path: '{project-root}/{_bmad_folder_}/custom/workflows/ak-homepage-workflow'

# File References
thisStepFile: '{workflow_path}/steps/step-06-final-review.md'
workflowFile: '{workflow_path}/workflow.md'
statusFile: '{project-root}/ak-homepage/project-status.md'

# Task References
partyModeWorkflow: '{project-root}/{_bmad_folder_}/core/workflows/party-mode/workflow.md'
---

# Step 6: 최종 확인 및 리뷰

## STEP GOAL:

To verify that all PRD requirements are met, create comprehensive documentation (README.md), and optionally conduct a Party-Mode code review before marking the workflow as complete.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: This is the FINAL step - mark workflow complete properly
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a 숙련된 Next.js 풀스택 개발자 performing final QA
- ✅ If you already have been given a name, communication_style and identity, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring quality assurance and documentation expertise
- ✅ Maintain collaborative and conclusive tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on verification and documentation
- 🚫 FORBIDDEN to make major code changes (only minor fixes)
- 💬 Create comprehensive README for the project
- 🔍 Optional Party-Mode for multi-perspective code review

## EXECUTION PROTOCOLS:

- 🎯 Verify all PRD requirements are implemented
- 💾 Create README.md with usage instructions
- 📖 Update {statusFile} with `stepsCompleted: [1, 2, 3, 4, 5, 6]`
- 📖 Mark `workflowComplete: true` in frontmatter
- 🚫 FORBIDDEN to proceed without proper completion marking

## CONTEXT BOUNDARIES:

- All 5 pages created and styled
- Components functional and responsive
- Design system applied
- This is the final validation step

## FINAL REVIEW SEQUENCE:

### 1. Announce Step Start

Display:

"**Step 6: 최종 확인 및 리뷰** ✅

이 단계에서는 다음을 수행합니다:
- PRD 요구사항 검증
- 프로젝트 구조 확인
- README.md 생성
- Party-Mode 코드 리뷰 (선택)
- 워크플로우 완료 처리

시작합니다..."

### 2. Verify Project Structure

Check that all required files and directories exist:

```
ak-homepage/
├── app/
│   ├── page.tsx ✓
│   ├── layout.tsx ✓
│   ├── globals.css ✓
│   ├── about/
│   │   └── page.tsx ✓
│   ├── technology/
│   │   └── page.tsx ✓
│   ├── business/
│   │   └── page.tsx ✓
│   └── media/
│       └── page.tsx ✓
├── components/
│   ├── Header.tsx ✓
│   ├── Footer.tsx ✓
│   ├── ProductCard.tsx ✓
│   ├── ImageModal.tsx ✓
│   ├── Section.tsx ✓
│   └── ui/ (shadcn components) ✓
├── lib/
│   ├── utils.ts ✓
│   └── animations.ts ✓
├── public/
│   └── images/ ✓
├── package.json ✓
├── tsconfig.json ✓
├── tailwind.config.ts ✓
├── next.config.js ✓
└── components.json ✓
```

Display verification results:

"**프로젝트 구조 검증:**
- ✅ 5개 페이지 모두 생성됨
- ✅ 5개 공통 컴포넌트 생성됨
- ✅ 설정 파일 모두 존재
- ✅ 디렉토리 구조 정상"

### 3. Verify PRD Requirements

Check against PRD success criteria:

**From PRD Section 4 (핵심 기능 요구사항):**

- ✅ **Home Page**: Hero section, Impact metrics, Product highlights, Trust indicators
- ✅ **About Page**: CEO message, Company values, Timeline, Location
- ✅ **Technology Page**: Patent archive, R&D data, Certifications
- ✅ **Business Page**: Product categories (4 tabs), Product details
- ✅ **Media Page**: News section, Contact form

**From PRD Section 6 (디자인 가이드라인):**

- ✅ **Color Palette**: AK Green (#2E7D32) applied
- ✅ **Typography**: Pretendard font configured
- ✅ **Responsive**: Mobile-first design implemented

**From PRD Section 7 (기술 스택):**

- ✅ **Framework**: Next.js 16 with App Router
- ✅ **Language**: TypeScript
- ✅ **Styling**: Tailwind CSS
- ✅ **Components**: shadcn/ui

Display:

"**PRD 요구사항 검증:**
- ✅ 모든 페이지 구현됨 (5/5)
- ✅ 모든 섹션 구현됨
- ✅ 디자인 가이드라인 준수
- ✅ 기술 스택 요구사항 충족
- ✅ 반응형 디자인 구현

**PRD 충족률: 100%**"

### 4. Create README.md

Create `{project-root}/ak-homepage/README.md`:

```markdown
# AK 친환경 바이오 기업 홈페이지

> Nature, Science, and Life

AK 회사의 제품 홍보 홈페이지 - Next.js 16, TypeScript, Tailwind CSS로 구축된 친환경 바이오 기술 소개 웹사이트

## 🌟 주요 기능

- **메인 페이지**: 임팩트 지표, 제품 하이라이트, 신뢰 지표
- **회사 소개**: CEO 메시지, 기업 이념, 연혁, 오시는 길
- **기술 연구소**: 10개 특허 아카이브, R&D 데이터, 인증
- **사업 및 제품**: 4개 제품군 (항암 농수산물, 기능성 식품, 친환경 축산, 그린케어)
- **미디어**: 언론보도, 문의하기 폼

## 🛠 기술 스택

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Font**: Pretendard

## 📋 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 또는 yarn 사용
yarn install
```

### 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev

# 또는 yarn 사용
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm run start
```

## 📁 프로젝트 구조

```
ak-homepage/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 메인 페이지
│   ├── about/             # 회사 소개
│   ├── technology/        # 기술 연구소
│   ├── business/          # 사업 및 제품
│   └── media/             # 미디어 및 커뮤니티
├── components/             # 재사용 가능한 컴포넌트
│   ├── Header.tsx         # 네비게이션
│   ├── Footer.tsx         # 푸터
│   ├── ProductCard.tsx    # 제품 카드
│   ├── ImageModal.tsx     # 이미지 뷰어
│   └── ui/                # shadcn/ui 컴포넌트
├── lib/                    # 유틸리티 함수
│   ├── utils.ts           # 공통 유틸
│   └── animations.ts      # 애니메이션 설정
├── public/                 # 정적 파일
│   └── images/            # 이미지 에셋
└── tailwind.config.ts     # Tailwind 설정
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **AK Green**: `#2E7D32` - Primary color
- **AK Brown**: `#795548` - Secondary color
- **AK Gold**: `#FBC02D` - Accent color
- **Background**: `#F9FAFB`

### 타이포그래피

- **Font Family**: Pretendard
- **Headings**: Display font sizes (2xl ~ sm)
- **Body**: Base font sizes

### 반응형 Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📱 반응형 디자인

모바일 우선(Mobile-First) 접근 방식으로 모든 화면 크기에 최적화되었습니다.

## ♿️ 접근성

- WCAG 2.1 AA 준수
- 시맨틱 HTML 사용
- 적절한 색상 대비
- 키보드 네비게이션 지원

## 🚀 성능 최적화

- Next.js Image 컴포넌트 사용
- 레이지 로딩
- 코드 스플리팅
- Font display: swap

## 📄 라이선스

Copyright © 2024 AK Corporation. All rights reserved.

## 🤝 기여

이 프로젝트는 BMAD 워크플로우를 통해 자동 생성되었습니다.

## 📞 연락처

- **주소**: 충남 홍성군 홍북읍 충남대로 21, 충남테크노파크 304-2
- **전화**: 041-630-7163
- **이메일**: contact@ak-bio.com

---

**Built with ❤️ using Next.js 16 and BMAD Workflow**
```

Display:

"✅ README.md 생성 완료!"

### 5. Create .gitignore (if not exists)

Ensure `{project-root}/ak-homepage/.gitignore` exists:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

### 6. Run Quick Validation

Attempt to check for TypeScript errors (if possible):

```bash
cd {project-root}/ak-homepage && npm run build --dry-run 2>&1 | head -n 20
```

If there are errors, note them. Minor errors are acceptable at this stage.

### 7. Create Completion Summary

Generate a comprehensive summary:

```markdown
# AK 홈페이지 프로젝트 완료 보고서

## 프로젝트 개요

- **프로젝트명**: AK 친환경 바이오 기업 홈페이지
- **생성일**: [current date]
- **기술 스택**: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui
- **페이지 수**: 5개 (Home, About, Technology, Business, Media)
- **컴포넌트 수**: 5개 재사용 가능 컴포넌트

## 구현된 기능

### 페이지
1. **Home** - Hero, Impact Metrics, Product Highlights, Trust Indicators
2. **About** - CEO Message, Company Values, Timeline, Location
3. **Technology** - 10 Patents, R&D Data, Certifications
4. **Business** - 4 Product Categories with detailed information
5. **Media** - News section, Contact form

### 컴포넌트
1. **Header** - Responsive navigation with mobile menu
2. **Footer** - Company info and links
3. **ProductCard** - Reusable product display card
4. **ImageModal** - Image viewer dialog
5. **Section** - Section wrapper utility

### 디자인 시스템
- ✅ AK Color Palette (Green #2E7D32, Brown, Gold)
- ✅ Pretendard Font
- ✅ Mobile-First Responsive Design
- ✅ Tailwind CSS Customization
- ✅ Framer Motion Animations

## PRD 요구사항 충족률

**100% 충족** - 모든 요구사항 구현 완료

## 다음 단계

1. **개발 서버 실행**: `npm run dev`
2. **이미지 추가**: `/public/images/` 폴더에 실제 이미지 추가
3. **콘텐츠 수정**: 각 페이지의 플레이스홀더 텍스트를 실제 콘텐츠로 교체
4. **빌드 및 배포**: `npm run build` 후 Vercel, Netlify 등에 배포

## 프로젝트 위치

`{project-root}/ak-homepage/`
```

Display this summary to the user.

### 8. Update Project Status (Final)

Update `{statusFile}` frontmatter:
- Add 6 to `stepsCompleted` array: `stepsCompleted: [1, 2, 3, 4, 5, 6]`
- Update `lastStep: 'final-review'`
- Set `workflowComplete: true`
- Add `completedDate: [current date]`

Add final note to project-status.md body:

```markdown
## Step 6: 최종 확인 및 리뷰 ✅

**완료 시간:** [current timestamp]

**완료된 작업:**
- ✅ 프로젝트 구조 검증
- ✅ PRD 요구사항 100% 충족 확인
- ✅ README.md 생성
- ✅ .gitignore 생성
- ✅ 완료 보고서 생성

**프로젝트 상태:** 워크플로우 완료! 🎉

---

# 🎉 워크플로우 완료!

AK 홈페이지 프로젝트가 성공적으로 생성되었습니다.

**프로젝트 위치:** `{project-root}/ak-homepage/`

**다음 단계:**
1. `cd ak-homepage`
2. `npm install`
3. `npm run dev`
4. http://localhost:3000 접속

**참고 문서:**
- README.md - 설치 및 사용 가이드
- project-status.md - 워크플로우 진행 상황
```

### 9. Present MENU OPTIONS

Display:

"**✅ 프로젝트 생성 완료!**

모든 단계가 성공적으로 완료되었습니다.

**Select an Option:**
[P] Run Party-Mode Code Review
[C] Complete Workflow

Party-Mode를 실행하면 다양한 전문가 관점(프론트엔드, UX, 접근성, 성능)에서 코드를 리뷰받을 수 있습니다."

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- Party-Mode is optional but recommended
- After Party-Mode, return to this menu
- ONLY mark workflow complete when user selects 'C'

#### Menu Handling Logic:

- IF P: Execute {partyModeWorkflow} with context about the AK homepage project
  - After Party-Mode completes, redisplay this menu
- IF C:
  1. Display final congratulations message
  2. Provide next steps (npm install, npm run dev)
  3. Workflow ends - DO NOT load any more step files
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#9-present-menu-options)

### 10. Final Congratulations (When C is selected)

When user selects 'C', display:

"**🎉 축하합니다! AK 홈페이지 워크플로우가 완료되었습니다!**

**생성된 프로젝트:**
- 📁 위치: `{project-root}/ak-homepage/`
- 📄 페이지: 5개 (Home, About, Technology, Business, Media)
- 🎨 컴포넌트: 5개 재사용 가능 컴포넌트
- ✅ PRD 충족률: 100%

**프로젝트 실행 방법:**

```bash
cd {project-root}/ak-homepage
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

**다음 단계:**
1. 실제 이미지를 `/public/images/`에 추가
2. 플레이스홀더 텍스트를 실제 콘텐츠로 교체
3. `npm run build`로 프로덕션 빌드
4. Vercel 또는 Netlify에 배포

**문서:**
- `README.md` - 프로젝트 사용 가이드
- `project-status.md` - 워크플로우 진행 기록

감사합니다! 🚀"

DO NOT load any more step files. Workflow is complete.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All files and directories verified
- PRD requirements 100% met
- README.md created with comprehensive documentation
- .gitignore created
- {statusFile} updated with `stepsCompleted: [1, 2, 3, 4, 5, 6]`
- {statusFile} marked with `workflowComplete: true`
- Final congratulations displayed
- User provided with clear next steps
- Workflow properly terminated

### ❌ SYSTEM FAILURE:

- Missing required files
- PRD requirements not met
- README.md not created
- Not marking workflow as complete
- Not updating {statusFile} frontmatter
- Loading next step file (there is no next step!)

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL WORKFLOW COMPLETION NOTE

This is the FINAL step. When user selects 'C' (Complete):
1. Update {statusFile} with `workflowComplete: true`
2. Display final congratulations
3. DO NOT load any more step files
4. Workflow terminates successfully
