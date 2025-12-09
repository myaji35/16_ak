---
name: 'step-04-pages-generation'
description: 'Generate 5 main pages in parallel using Sub-Agents based on Epic design'

# Path Definitions
workflow_path: '{project-root}/{_bmad_folder_}/custom/workflows/ak-homepage-workflow'

# File References
thisStepFile: '{workflow_path}/steps/step-04-pages-generation.md'
nextStepFile: '{workflow_path}/steps/step-05-styling.md'
workflowFile: '{workflow_path}/workflow.md'
statusFile: '{project-root}/ak-homepage/project-status.md'

# Data References
prdFile: '[from statusFile frontmatter: prdPath]'
pptContentFile: '[from statusFile frontmatter: pptContentPath]'
epicDesignFile: '[from statusFile frontmatter: epicDesignPath]'
---

# Step 4: 페이지 생성 (병렬 Sub-Agents)

## STEP GOAL:

To generate all 5 main pages (Home, About, Technology, Business, Media) in parallel using Sub-Agents, with each agent responsible for one page based on Epic design and PRD requirements.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a 숙련된 Next.js 풀스택 개발자 coordinating Sub-Agents
- ✅ If you already have been given a name, communication_style and identity, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You orchestrate Sub-Agents to work in parallel
- ✅ Maintain collaborative and efficient tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on page generation using Sub-Agents
- 🚫 FORBIDDEN to create pages manually - MUST use Sub-Agents
- 💬 Launch all 5 Sub-Agents in parallel (single message)
- 🔍 Each Sub-Agent gets specific Epic and data requirements

## EXECUTION PROTOCOLS:

- 🎯 Launch 5 Sub-Agents in parallel for page generation
- 💾 Each Sub-Agent creates one complete page
- 📖 Update {statusFile} frontmatter with `stepsCompleted: [1, 2, 3, 4]`
- 🚫 FORBIDDEN to proceed until all 5 Sub-Agents complete

## CONTEXT BOUNDARIES:

- Components already created (Header, Footer, Card, Modal, Section)
- PRD, PPT content, and Epic design available
- Each Sub-Agent works independently on one page
- Sub-Agents can use Web-Browsing for Next.js docs

## PAGE GENERATION SEQUENCE:

### 1. Announce Step Start

Display:

"**Step 4: 페이지 생성 (병렬 처리)** 🚀

이 단계에서는 5개의 Sub-Agent가 병렬로 페이지를 생성합니다:
- Agent 1: Home (메인 페이지)
- Agent 2: About (회사 소개)
- Agent 3: Technology (기술 연구소)
- Agent 4: Business (사업 및 제품)
- Agent 5: Media (미디어 및 커뮤니티)

**예상 소요 시간:** 각 Agent 병렬 실행으로 약 10-15분

Sub-Agent를 실행합니다..."

### 2. Load Required Data Files

Read the following files to provide context to Sub-Agents:

1. **PRD**: Read `{prdFile}` from statusFile frontmatter
2. **PPT Content**: Read `{pptContentFile}` if available
3. **Epic Design**: Read `{epicDesignFile}` if available

Store this data in memory to pass to Sub-Agents.

### 3. Launch Sub-Agents in Parallel

**CRITICAL:** Launch ALL 5 Sub-Agents in a SINGLE message using multiple Task tool calls.

Use the Task tool 5 times in one message with subagent_type="general-purpose":

#### Sub-Agent 1: Home Page

```
Prompt for Agent 1:

You are a Next.js developer creating the Home page for AK company's website.

**Your Task:**
Create `app/page.tsx` with the following sections based on Epic E-01:

1. **Hero Section**
   - Slogan: "Nature, Science, and Life"
   - Subtitle: 친환경 바이오 기술로 만드는 건강한 미래
   - Background image placeholder
   - CTA button to About page

2. **Impact Metrics Bento Grid**
   - 플라보노이드 215배 (AK항암쌀)
   - 악취 51% 저감 (가축 음용수)
   - 10+ 특허 보유
   - Use ProductCard component for each metric

3. **Scrolling Storytelling Section**
   - Visual journey: 흙 → 작물 → 식탁 → 환경
   - 4 cards with icons/images

4. **주요 제품 하이라이트**
   - 4 product categories:
     - 항암 농수산물
     - 기능성 식품
     - 친환경 축산
     - 그린 케어
   - Use ProductCard component

5. **신뢰 지표 Section**
   - 인증 (NICE, ECOIN, 유기농자재공시)
   - 수상 (환경부장관상 2013, 환경공헌대상 2020)
   - 언론 보도

**Requirements:**
- Use TypeScript
- Import components from @/components
- Use Tailwind CSS with AK colors
- Use Next.js 16 App Router conventions
- Make it responsive (mobile-first)
- Include proper SEO metadata

**Components Available:**
- Header (already in layout)
- Footer (already in layout)
- ProductCard
- Section
- ImageModal
- shadcn/ui components (Button, Card)

**Data Source:**
[Provide relevant PPT and Epic data here]

**Output:**
Write the complete `app/page.tsx` file to the ak-homepage project.
```

#### Sub-Agent 2: About Page

```
Prompt for Agent 2:

You are a Next.js developer creating the About Us page for AK company's website.

**Your Task:**
Create `app/about/page.tsx` with the following sections based on Epic E-02:

1. **Page Hero**
   - Title: "About AK"
   - Subtitle: 친환경 바이오 기업의 비전

2. **CEO Message Section**
   - CEO photo placeholder
   - CEO name and title
   - CEO message text
   - Profile details

3. **기업 이념 Section**
   - 4 core values with icons:
     - 정직 (Honesty)
     - 신뢰 (Trust)
     - 생명사랑 (Love for Life)
     - 지구사랑 (Love for Earth)
   - Use Card components

4. **연혁 Timeline (2009-2023)**
   - Year-by-year milestones
   - Key achievements and awards
   - Vertical timeline design

5. **오시는 길 Section**
   - Address: 충남 홍성군 홍북읍 충남대로 21, 충남테크노파크 304-2
   - Map placeholder
   - Contact info (Tel, Email)

**Requirements:**
- Use TypeScript
- Import components from @/components
- Use Tailwind CSS with AK colors
- Responsive design
- Include metadata export

**Data Source:**
[Provide CEO message, company values, timeline from PPT]

**Output:**
Write the complete `app/about/page.tsx` file.
```

#### Sub-Agent 3: Technology Page

```
Prompt for Agent 3:

You are a Next.js developer creating the Technology page for AK company's website.

**Your Task:**
Create `app/technology/page.tsx` with the following sections based on Epic E-03:

1. **Page Hero**
   - Title: "기술 연구소"
   - Subtitle: R&D와 혁신

2. **특허 아카이브 Section**
   - Display 10 patents in grid:
     - 10-2190631: 가축 악취 저감 음용수
     - 10-1882688: 항암 농수산물 재배방법
     - 10-1790996: 농작물 토양처리제 및 방법
     - 10-1791000: 가축분뇨 처리방법
     - 10-2314066: 플라보노이드 고함유 쌀
     - 10-1296588: 소취수 제조방법
     - 10-2380409: 면역증강 기능성 식품
     - 10-1588620: 바이오 탈취제
     - 10-2524927: 항산화 활성 물질
     - [One more patent]
   - Each patent card shows: number, title, brief description
   - Use Card component

3. **R&D 데이터 Section**
   - 플라보노이드 함량 비교:
     - AK항암쌀: 215.23mg/kg
     - 일반백미: 1.00mg/kg
   - 검사성적서 데이터 (충남대 농업과학연구소)
   - Visual comparison (can use simple div bars)

4. **인증 및 상표 Section**
   - NICE 기술평가우수기업
   - ECOIN 친환경 인증
   - 유기농자재공시
   - 상표 등록 정보
   - Display as badge grid

**Requirements:**
- Use TypeScript
- Responsive grid layouts
- AK color palette
- Include metadata

**Data Source:**
[Provide patent details and R&D data from PPT]

**Output:**
Write the complete `app/technology/page.tsx` file.
```

#### Sub-Agent 4: Business Page

```
Prompt for Agent 4:

You are a Next.js developer creating the Business & Products page for AK company's website.

**Your Task:**
Create `app/business/page.tsx` with the following sections based on Epic E-04:

1. **Page Hero**
   - Title: "사업 및 제품"
   - Subtitle: 친환경 바이오 솔루션

2. **제품 카테고리 Tabs**
   - Create 4 tabs (use shadcn/ui Tabs if available, or simple state):
     1. 항암 농수산물
     2. 기능성 식품
     3. 친환경 축산
     4. 그린 케어

3. **Tab 1: 항암 농수산물**
   - AK항암쌀 (플라보노이드 215배)
   - 항암양파
   - 무씨차
   - 장단콩 (간장, 된장, 청국장)
   - Each product: image placeholder, description, key benefits
   - Use ProductCard component

4. **Tab 2: 기능성 식품**
   - 당뇨케어 "당문화에는고"
   - 항암두부
   - 천연 조미료
   - Display nutritional info and benefits

5. **Tab 3: 친환경 축산**
   - 가축 음용수 (악취 51% 저감)
   - 일당증체량 6.9% 향상 데이터
   - 실험 결과 (2019-2020)
   - 사용 방법

6. **Tab 4: 그린 케어**
   - 탈취수
   - 팻치 (지방 분해 패치)
   - 환경 솔루션

**Requirements:**
- Use TypeScript
- Implement tab navigation (client component)
- ProductCard for all products
- Responsive design
- Include metadata

**Data Source:**
[Provide product details from PPT slides 9-26, 35-38]

**Output:**
Write the complete `app/business/page.tsx` file.
```

#### Sub-Agent 5: Media Page

```
Prompt for Agent 5:

You are a Next.js developer creating the Media & Community page for AK company's website.

**Your Task:**
Create `app/media/page.tsx` with the following sections based on Epic E-05:

1. **Page Hero**
   - Title: "미디어 및 커뮤니티"
   - Subtitle: 소식과 문의

2. **언론보도 Section**
   - News grid with sample articles (placeholder data):
     - "AK, 환경공헌대상 수상" (2020)
     - "친환경 농법으로 항암 쌀 개발" (2019)
     - "플라보노이드 215배 함유 쌀 화제" (2021)
     - [Add 5-7 more sample news items]
   - Each news card: date, title, brief summary, "Read More" link
   - Use Card component

3. **문의하기 Contact Form Section**
   - Form fields:
     - 이름 (Name)
     - 이메일 (Email)
     - 전화번호 (Phone)
     - 문의 유형 (Inquiry Type: dropdown)
     - 메시지 (Message: textarea)
     - Submit button
   - Use shadcn/ui Form components if available, or plain HTML form
   - Form is client component with state handling

4. **Contact Information**
   - Office address
   - Phone: 041-630-7163
   - Email: contact@ak-bio.com
   - Business hours

**Requirements:**
- Use TypeScript
- Form with proper validation
- Responsive design
- Client component for form interactivity
- Include metadata

**Data Source:**
[Provide media mentions from PPT slides 38-40]

**Output:**
Write the complete `app/media/page.tsx` file.
```

### 4. Monitor Sub-Agent Execution

Wait for all 5 Sub-Agents to complete their tasks.

Display progress as each agent completes:
"✅ Agent 1 (Home) completed"
"✅ Agent 2 (About) completed"
...

### 5. Verify All Pages Created

After all Sub-Agents complete, verify that all 5 page files exist:

- ✅ `app/page.tsx` (Home)
- ✅ `app/about/page.tsx` (About)
- ✅ `app/technology/page.tsx` (Technology)
- ✅ `app/business/page.tsx` (Business)
- ✅ `app/media/page.tsx` (Media)

Read each file briefly to confirm content exists.

### 6. Display Completion Summary

Display:

"✅ **페이지 생성 완료!**

**생성된 페이지:**
- ✅ Home (Hero, Metrics, Products, Trust)
- ✅ About (CEO, Values, Timeline, Location)
- ✅ Technology (Patents, R&D, Certifications)
- ✅ Business (4 Product Categories)
- ✅ Media (News, Contact Form)

**다음 단계:** 스타일링 적용 및 디자인 가이드라인 반영"

### 7. Update Project Status

Update `{statusFile}` frontmatter:
- Add 4 to `stepsCompleted` array: `stepsCompleted: [1, 2, 3, 4]`
- Update `lastStep: 'pages-generation'`

Add note to project-status.md body:

```markdown
## Step 4: 페이지 생성 (병렬) ✅

**완료 시간:** [current timestamp]

**생성된 페이지:**
- Home (app/page.tsx) - Sub-Agent 1
- About (app/about/page.tsx) - Sub-Agent 2
- Technology (app/technology/page.tsx) - Sub-Agent 3
- Business (app/business/page.tsx) - Sub-Agent 4
- Media (app/media/page.tsx) - Sub-Agent 5

**프로젝트 상태:** 스타일링 적용 준비 완료
```

### 8. Present MENU OPTIONS

Display: **Proceeding to styling and design refinement...**

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after page verification
- Use menu handling logic section below

#### Menu Handling Logic:

- After all pages created and verified, and status updated, immediately load, read entire file, then execute `{nextStepFile}` to begin styling application

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All 5 Sub-Agents launched in parallel (single message)
- All 5 pages created successfully
- Pages use components from step 3
- Pages implement Epic requirements
- TypeScript with no errors
- Responsive design implemented
- {statusFile} updated with `stepsCompleted: [1, 2, 3, 4]`
- Ready to proceed to styling

### ❌ SYSTEM FAILURE:

- Launching Sub-Agents sequentially instead of parallel
- Creating pages manually instead of using Sub-Agents
- Missing pages
- Pages not using Epic design
- TypeScript errors
- Not updating {statusFile} frontmatter
- Proceeding without verification

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN all 5 Sub-Agents have completed and all pages are verified, and {statusFile} is updated with step 4 completion, will you then immediately load, read entire file, then execute `{nextStepFile}` to begin styling and design application.
