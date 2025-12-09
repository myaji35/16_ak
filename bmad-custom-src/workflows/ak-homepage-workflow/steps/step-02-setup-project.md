---
name: 'step-02-setup-project'
description: 'Create Next.js 16 project with TypeScript, Tailwind CSS, and shadcn/ui'

# Path Definitions
workflow_path: '{project-root}/{_bmad_folder_}/custom/workflows/ak-homepage-workflow'

# File References
thisStepFile: '{workflow_path}/steps/step-02-setup-project.md'
nextStepFile: '{workflow_path}/steps/step-03-common-components.md'
workflowFile: '{workflow_path}/workflow.md'
statusFile: '{project-root}/ak-homepage/project-status.md'
---

# Step 2: Next.js 프로젝트 생성

## STEP GOAL:

To create a Next.js 16 project with TypeScript, Tailwind CSS, and shadcn/ui, configured according to Next.js App Router best practices and ready for component development.

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
- ✅ You bring Next.js expertise and configuration best practices
- ✅ Maintain collaborative and efficient tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on project setup and configuration
- 🚫 FORBIDDEN to create components or pages (that's for later steps)
- 💬 Use latest Next.js 16 API and configuration patterns
- 🔍 Use Web-Browsing to verify latest Next.js 16 syntax if needed

## EXECUTION PROTOCOLS:

- 🎯 Create Next.js project with proper App Router structure
- 💾 Configure TypeScript, Tailwind CSS, and shadcn/ui
- 📖 Update {statusFile} frontmatter with `stepsCompleted: [1, 2]`
- 🚫 FORBIDDEN to proceed to next step before setup is verified

## CONTEXT BOUNDARIES:

- Project folder already created at `{project-root}/ak-homepage/`
- PRD and other input paths available in {statusFile} frontmatter
- This step creates the foundational Next.js structure
- No component coding yet - only setup

## PROJECT SETUP SEQUENCE:

### 1. Announce Step Start

Display:

"**Step 2: Next.js 프로젝트 생성** 🚀

이 단계에서는 다음을 수행합니다:
- Next.js 16 프로젝트 초기화 (App Router)
- TypeScript 설정
- Tailwind CSS 설정
- shadcn/ui 설치 및 구성

시작합니다..."

### 2. Create Next.js 16 Project

Execute in the `{project-root}/ak-homepage/` directory:

**Option A: If create-next-app is preferred:**

Use bash command:
```bash
cd {project-root}/ak-homepage && npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

**Option B: Manual setup if create-next-app has issues:**

1. Create package.json with Next.js 16 dependencies
2. Create tsconfig.json for TypeScript
3. Create next.config.js for Next.js configuration
4. Create app directory structure

Choose Option A first, fall back to Option B if needed.

### 3. Configure TypeScript (tsconfig.json)

Ensure tsconfig.json includes:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 4. Configure Tailwind CSS

**A. Create tailwind.config.ts:**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ak-green': '#2E7D32',
        'ak-brown': '#795548',
        'ak-gold': '#FBC02D',
        'ak-bg': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

**B. Create or update app/globals.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --ak-green: 122 49% 33%;
    --ak-brown: 16 25% 38%;
    --ak-gold: 48 96% 57%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

### 5. Install and Configure shadcn/ui

**A. Initialize shadcn/ui:**

Run in project directory:
```bash
cd {project-root}/ak-homepage && npx shadcn-ui@latest init
```

Select these options when prompted:
- TypeScript: yes
- Style: Default
- Base color: Slate
- Global CSS: app/globals.css
- CSS variables: yes
- Tailwind config: tailwind.config.ts
- Components directory: components
- Utils: lib/utils
- React Server Components: yes

**B. Create components.json (if not auto-created):**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### 6. Create Directory Structure

Ensure the following directories exist:
```
ak-homepage/
├── app/
│   ├── page.tsx (home)
│   ├── layout.tsx
│   ├── globals.css
│   ├── about/
│   ├── technology/
│   ├── business/
│   └── media/
├── components/
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── components.json
```

Create these directories using bash:
```bash
cd {project-root}/ak-homepage && mkdir -p app/about app/technology app/business app/media components lib public/images
```

### 7. Create Basic App Layout

Create `app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AK - 친환경 바이오 기업',
  description: 'Nature, Science, and Life - AK의 친환경 바이오 기술',
}

export default function RootLayout({
  children,
}: {
  children: React.Node
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
```

Create temporary `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-ak-green">
        AK 홈페이지 생성 중...
      </h1>
      <p className="mt-4 text-gray-600">
        Next.js 16 프로젝트 설정 완료. 컴포넌트 생성 진행 중.
      </p>
    </main>
  )
}
```

### 8. Install Additional Dependencies

Install helpful packages:
```bash
cd {project-root}/ak-homepage && npm install framer-motion clsx
```

### 9. Verify Setup

Check that:
- `package.json` exists with Next.js 16, TypeScript, Tailwind
- `tsconfig.json` configured correctly
- `tailwind.config.ts` has AK custom colors
- `app/` directory structure created
- `components.json` exists for shadcn/ui
- `lib/utils.ts` exists

Display verification results:

"✅ **Next.js 프로젝트 설정 완료!**

**생성된 구조:**
- ✅ Next.js 16 (App Router)
- ✅ TypeScript 설정
- ✅ Tailwind CSS (AK 커스텀 컬러)
- ✅ shadcn/ui 구성
- ✅ 디렉토리 구조

**다음 단계:** 공통 컴포넌트 생성 (Header, Footer, Card, Modal)"

### 10. Update Project Status

Update `{statusFile}` frontmatter:
- Add 2 to `stepsCompleted` array: `stepsCompleted: [1, 2]`
- Update `lastStep: 'setup-project'`

Add note to project-status.md body:

```markdown
## Step 2: Next.js 프로젝트 생성 ✅

**완료 시간:** [current timestamp]

**생성된 항목:**
- Next.js 16 프로젝트 (App Router)
- TypeScript 설정
- Tailwind CSS (AK 컬러 팔레트)
- shadcn/ui 구성
- 디렉토리 구조

**프로젝트 상태:** 공통 컴포넌트 생성 준비 완료
```

### 11. Present MENU OPTIONS

Display: **Proceeding to common components creation...**

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after setup verification
- Use menu handling logic section below

#### Menu Handling Logic:

- After setup completion and status update, immediately load, read entire file, then execute `{nextStepFile}` to begin common components creation

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Next.js 16 project created successfully
- TypeScript configured correctly
- Tailwind CSS set up with AK custom colors
- shadcn/ui initialized and configured
- Directory structure created
- Basic layout and page files exist
- {statusFile} updated with `stepsCompleted: [1, 2]`
- Ready to proceed to component creation

### ❌ SYSTEM FAILURE:

- Project creation failed
- Missing TypeScript or Tailwind configuration
- shadcn/ui not initialized
- Directory structure incomplete
- Not updating {statusFile} frontmatter
- Proceeding without verification

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN Next.js project setup is complete and verified, and {statusFile} is updated with step 2 completion, will you then immediately load, read entire file, then execute `{nextStepFile}` to begin common components creation.
