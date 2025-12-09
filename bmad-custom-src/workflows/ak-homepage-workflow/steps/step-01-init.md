---
name: 'step-01-init'
description: 'Initialize the AK homepage workflow by detecting continuation state and collecting inputs'

# Path Definitions
workflow_path: '{project-root}/{_bmad_folder_}/custom/workflows/ak-homepage-workflow'

# File References
thisStepFile: '{workflow_path}/steps/step-01-init.md'
nextStepFile: '{workflow_path}/steps/step-02-setup-project.md'
workflowFile: '{workflow_path}/workflow.md'
outputFile: '{project-root}/ak-homepage/project-status.md'
continueFile: '{workflow_path}/steps/step-01b-continue.md'
---

# Step 1: 워크플로우 초기화

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a 숙련된 Next.js 풀스택 개발자 (skilled Next.js full-stack developer)
- ✅ If you already have been given a name, communication_style and identity, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring Next.js, TypeScript, and web development expertise, user brings product requirements and company knowledge
- ✅ Maintain collaborative and professional tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on initialization and input collection
- 🚫 FORBIDDEN to look ahead to future steps or start coding
- 💬 Handle initialization professionally and clearly
- 🚪 DETECT existing workflow state and handle continuation properly

## EXECUTION PROTOCOLS:

- 🎯 Show analysis before taking any action
- 💾 Initialize project-status.md document with frontmatter
- 📖 Set up frontmatter `stepsCompleted: [1]` before loading next step
- 🚫 FORBIDDEN to load next step until setup is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in project-status.md + frontmatter (if exists)
- Don't assume knowledge from other steps
- PRD and image paths will be collected in this step

## STEP GOAL:

To initialize the AK homepage workflow by detecting continuation state, collecting required input paths (PRD, images), creating the project folder structure, and preparing for Next.js project generation.

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Workflow

First, check if the project-status document already exists:

- Look for file at `{project-root}/ak-homepage/project-status.md`
- If exists, read the complete file including frontmatter
- If not exists, this is a fresh workflow

### 2. Handle Continuation (If Document Exists)

If the document exists and has frontmatter with `stepsCompleted`:

- **STOP here** and load, read entire file, then execute `{continueFile}` immediately
- Do not proceed with any initialization tasks
- Let step-01b handle the continuation logic

### 3. Handle Completed Workflow

If the document exists AND frontmatter contains `workflowComplete: true`:

- Ask user: "I found an existing AK homepage project from [date]. Would you like to:
  1. Create a new project (will create ak-homepage-[timestamp])
  2. Update/modify the existing project"
- If option 1: Create new project folder with timestamp suffix
- If option 2: Load, read entire file, then execute {continueFile}

### 4. Fresh Workflow Setup (If No Document)

If no document exists or no `stepsCompleted` in frontmatter:

#### A. Welcome Message

Display:

"**AK 홈페이지 워크플로우에 오신 것을 환영합니다!**

이 워크플로우는 AK 회사의 제품 홍보 홈페이지를 자동으로 생성합니다.

**생성될 기술 스택:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

**워크플로우 단계:**
1. ✅ 초기화 및 입력 수집 (현재)
2. ⏳ Next.js 프로젝트 생성
3. ⏳ 공통 컴포넌트 생성
4. ⏳ 페이지 생성 (5개 페이지 병렬)
5. ⏳ 스타일링 적용
6. ⏳ 최종 확인 및 리뷰

시작하겠습니다!"

#### B. Collect Required Inputs

Ask the user for the following inputs:

1. **PRD 파일 경로:**
   - Question: "PRD (Product Requirements Document) 파일의 경로를 입력해주세요."
   - Expected: File path like `{project-root}/prd.md`
   - Validation: Check if file exists, if not found ask again

2. **PPT 추출 콘텐츠 경로 (Optional):**
   - Question: "회사소개서 PPT에서 추출한 콘텐츠 파일 경로를 입력해주세요. (선택사항, 엔터를 누르면 스킵)"
   - Expected: File path like `{project-root}/ppt-extracted-content.md`
   - If provided, validate file exists

3. **Epic 디자인 파일 경로 (Optional):**
   - Question: "Epic 디자인 파일 경로를 입력해주세요. (선택사항, 엔터를 누르면 스킵)"
   - Expected: File path like `{project-root}/homepage-epics.md`
   - If provided, validate file exists

4. **이미지/로고 폴더 경로 (Optional):**
   - Question: "이미지 및 로고 파일들이 있는 폴더 경로를 입력해주세요. (선택사항, 엔터를 누르면 스킵)"
   - Expected: Directory path
   - If provided, validate directory exists

#### C. Create Project Structure

1. **Create project folder:**
   - Create directory: `{project-root}/ak-homepage/`
   - Confirm creation successful

2. **Create project-status.md:**

Create `{project-root}/ak-homepage/project-status.md` with the following content:

```markdown
---
stepsCompleted: [1]
lastStep: 'init'
workflowComplete: false
date: [current date in YYYY-MM-DD format]
user_name: {user_name}
prdPath: [PRD file path collected]
pptContentPath: [PPT content path or 'none']
epicDesignPath: [Epic design path or 'none']
imagesPath: [Images folder path or 'none']
projectFolder: '{project-root}/ak-homepage'
---

# AK Homepage Project Status

## Workflow Progress

**Current Step:** 1 - Initialization Complete ✅
**Status:** In Progress
**Started:** [current date]

## Input Files Collected

- **PRD:** [path]
- **PPT Content:** [path or 'Not provided']
- **Epic Design:** [path or 'Not provided']
- **Images:** [path or 'Not provided']

## Next Steps

1. ⏳ Next.js 프로젝트 생성
2. ⏳ 공통 컴포넌트 생성
3. ⏳ 페이지 생성
4. ⏳ 스타일링 적용
5. ⏳ 최종 확인

## Notes

워크플로우가 시작되었습니다. 다음 단계에서 Next.js 16 프로젝트를 생성합니다.
```

#### D. Confirm Setup

Display:

"✅ **초기화 완료!**

**프로젝트 폴더:** `{project-root}/ak-homepage/`
**수집된 입력:**
- PRD: [path]
- PPT Content: [path or '제공되지 않음']
- Epic Design: [path or '제공되지 않음']
- Images: [path or '제공되지 않음']

**다음 단계:** Next.js 16 프로젝트 생성

워크플로우를 계속 진행합니다..."

### 5. Present MENU OPTIONS

Display: **Proceeding to Next.js project setup...**

#### EXECUTION RULES:

- This is an initialization step with no user choices
- Proceed directly to next step after setup
- Use menu handling logic section below

#### Menu Handling Logic:

- After setup completion, immediately load, read entire file, then execute `{nextStepFile}` to begin Next.js project setup

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- project-status.md created with proper frontmatter
- Frontmatter includes `stepsCompleted: [1]`
- All required inputs collected and validated
- Project folder created at `{project-root}/ak-homepage/`
- User informed about next steps
- Ready to proceed to step 2
- OR existing workflow properly routed to step-01b-continue.md

### ❌ SYSTEM FAILURE:

- Proceeding with step 2 without document initialization
- Not checking for existing documents properly
- Creating duplicate project folders
- Skipping input collection
- Not routing to step-01b-continue.md when appropriate
- Not validating file paths

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN initialization setup is complete and project-status.md is created (OR continuation is properly routed), will you then immediately load, read entire file, then execute `{nextStepFile}` to begin Next.js project setup.
