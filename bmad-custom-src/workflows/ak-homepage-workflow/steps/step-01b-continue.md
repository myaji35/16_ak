---
name: 'step-01b-continue'
description: 'Handle AK homepage workflow continuation from previous session'

# Path Definitions
workflow_path: '{project-root}/{_bmad_folder_}/custom/workflows/ak-homepage-workflow'

# File References
thisStepFile: '{workflow_path}/steps/step-01b-continue.md'
outputFile: '{project-root}/ak-homepage/project-status.md'
workflowFile: '{workflow_path}/workflow.md'
---

# Step 1B: 워크플로우 재개

## STEP GOAL:

To resume the AK homepage workflow from where it was left off, ensuring smooth continuation without loss of context or progress.

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
- ✅ You bring Next.js, TypeScript expertise, user brings product requirements
- ✅ Maintain collaborative and professional tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on analyzing and resuming workflow state
- 🚫 FORBIDDEN to modify content completed in previous steps
- 💬 Maintain continuity with previous sessions
- 🚪 DETECT exact continuation point from frontmatter of {outputFile}

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis of current state before taking action
- 💾 Keep existing frontmatter `stepsCompleted` values intact
- 📖 Review the project-status.md content already generated
- 🚫 FORBIDDEN to modify content that was completed in previous steps
- 📝 Update frontmatter with continuation timestamp when resuming

## CONTEXT BOUNDARIES:

- Current project-status.md document is already loaded
- Previous context = complete status document + existing frontmatter
- Input paths already collected in previous session
- Last completed step = last value in `stepsCompleted` array from frontmatter

## CONTINUATION SEQUENCE:

### 1. Analyze Current State

Review the frontmatter of {outputFile} to understand:

- `stepsCompleted`: Which steps are already done (the rightmost value is the last step completed)
- `lastStep`: Name/description of last completed step
- `workflowComplete`: Whether workflow is finished
- `date`: Original workflow start date
- `prdPath`, `pptContentPath`, `epicDesignPath`, `imagesPath`: Input files collected
- `projectFolder`: Where the project is being generated

Example: If `stepsCompleted: [1, 2, 3, 4]`, then step 4 was the last completed step.

Display analysis:

"**워크플로우 상태 분석:**

- **시작일:** [date from frontmatter]
- **완료된 단계:** [list completed steps with names]
- **마지막 단계:** [lastStep description]
- **프로젝트 폴더:** [projectFolder]

분석 중..."

### 2. Determine Next Step

Based on the last completed step number in `stepsCompleted` array:

**Step mapping:**
- If last completed = 1: Next = step-02-setup-project.md (Next.js 프로젝트 생성)
- If last completed = 2: Next = step-03-common-components.md (공통 컴포넌트 생성)
- If last completed = 3: Next = step-04-pages-generation.md (페이지 생성)
- If last completed = 4: Next = step-05-styling.md (스타일링 적용)
- If last completed = 5: Next = step-06-final-review.md (최종 확인 및 리뷰)
- If last completed = 6 or workflowComplete = true: Workflow is complete

Construct the next step file path:
`{workflow_path}/steps/[next-step-filename]`

### 3. Handle Completed Workflow

If `workflowComplete: true` in frontmatter:

Display:

"✅ **워크플로우가 이미 완료되었습니다!**

완료일: [date]
프로젝트 위치: [projectFolder]

생성된 AK 홈페이지 프로젝트를 사용하실 수 있습니다.

새 프로젝트를 시작하시려면 워크플로우를 다시 실행해주세요."

Then STOP - do not proceed to any next step.

### 4. Review Previous Progress

Read the complete {outputFile} to understand:

- What steps have been completed
- Current state of the project
- Any notes or decisions made
- Files that have been generated

### 5. Welcome Back Dialog

Present a warm, context-aware welcome:

"**다시 오신 것을 환영합니다!** 👋

AK 홈페이지 워크플로우의 [X]개 단계를 완료하셨습니다.

**완료된 작업:**
[List completed steps with brief descriptions]

**다음 단계:**
[Next step name and description]

워크플로우를 재개하여 [next step goal]을 진행하겠습니다."

### 6. Validate Continuation Intent

Ask:

"이전 세션 이후 변경된 사항이 있나요? (엔터를 누르면 계속 진행)"

Wait for user response. If user provides information, acknowledge it and note it in project-status.md.

### 7. Present MENU OPTIONS

Display: "**워크플로우 재개 - Select an Option:** [C] Continue to [Next Step Name]"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and then end with display again of the menu options
- Update frontmatter with continuation timestamp when 'C' is selected

#### Menu Handling Logic:

- IF C:
  1. Update frontmatter in {outputFile}: add or update `lastContinued: [current date YYYY-MM-DD]`
  2. Load, read entire file, then execute the appropriate next step file (determined in section 2)
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#7-present-menu-options)

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and continuation analysis is complete, will you then:

1. Update frontmatter in {outputFile} with `lastContinued: [current date]`
2. Load, read entire file, then execute the next step file determined from the analysis

Do NOT modify any other content in project-status.md during this continuation step except for adding the lastContinued field.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Correctly identified last completed step from `stepsCompleted` array
- Determined appropriate next step file
- User welcomed back with accurate progress summary
- Frontmatter updated with continuation timestamp
- Workflow resumed at appropriate next step
- OR properly detected completed workflow and stopped

### ❌ SYSTEM FAILURE:

- Skipping analysis of existing state
- Modifying content from previous steps
- Loading wrong next step file
- Not updating frontmatter with continuation info
- Proceeding without user confirmation
- Not detecting completed workflow properly

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
