---
name: 'step-05-styling'
description: 'Apply AK design guidelines, custom colors, fonts, and ensure responsive design'

# Path Definitions
workflow_path: '{project-root}/{_bmad_folder_}/custom/workflows/ak-homepage-workflow'

# File References
thisStepFile: '{workflow_path}/steps/step-05-styling.md'
nextStepFile: '{workflow_path}/steps/step-06-final-review.md'
workflowFile: '{workflow_path}/workflow.md'
statusFile: '{project-root}/ak-homepage/project-status.md'
---

# Step 5: 스타일링 적용

## STEP GOAL:

To apply AK company's design guidelines, custom color palette, Pretendard font, and ensure fully responsive mobile-first design across all pages.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a 숙련된 Next.js 풀스택 개발자 with design expertise
- ✅ If you already have been given a name, communication_style and identity, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring design system and CSS expertise
- ✅ Maintain collaborative and polished tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on styling and design refinement
- 🚫 FORBIDDEN to modify page content structure
- 💬 Apply AK color palette and typography consistently
- 🔍 Use Web-Browsing for Tailwind CSS best practices if needed

## EXECUTION PROTOCOLS:

- 🎯 Apply AK design guidelines to all pages
- 💾 Configure custom colors and fonts
- 📖 Update {statusFile} frontmatter with `stepsCompleted: [1, 2, 3, 4, 5]`
- 🚫 FORBIDDEN to proceed until design is polished

## CONTEXT BOUNDARIES:

- All pages already created in step 4
- Components already exist with basic styling
- Tailwind config already has AK colors
- This step refines and polishes the design

## STYLING APPLICATION SEQUENCE:

### 1. Announce Step Start

Display:

"**Step 5: 스타일링 적용** 🎨

이 단계에서는 다음을 수행합니다:
- AK 컬러 팔레트 적용
- Pretendard 폰트 설정
- 반응형 디자인 최적화 (Mobile-First)
- 애니메이션 추가 (Framer Motion)
- 일관된 디자인 시스템 적용

시작합니다..."

### 2. Update Tailwind Configuration

Update `{project-root}/ak-homepage/tailwind.config.ts` with complete AK design system:

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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // AK Custom Colors
        'ak-green': {
          DEFAULT: '#2E7D32',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#2E7D32',
          600: '#2E7D32',
          700: '#1B5E20',
          800: '#1B5E20',
          900: '#1B5E20',
        },
        'ak-brown': {
          DEFAULT: '#795548',
          50: '#EFEBE9',
          100: '#D7CCC8',
          200: '#BCAAA4',
          300: '#A1887F',
          400: '#8D6E63',
          500: '#795548',
          600: '#6D4C41',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        },
        'ak-gold': {
          DEFAULT: '#FBC02D',
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FBC02D',
          600: '#FDD835',
          700: '#FBC02D',
          800: '#F9A825',
          900: '#F57F17',
        },
        'ak-bg': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in-right 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 3. Setup Pretendard Font

**Option A: Using CDN (Quick)**

Update `{project-root}/ak-homepage/app/layout.tsx` to include Pretendard:

```tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AK - 친환경 바이오 기업',
  description: 'Nature, Science, and Life - AK의 친환경 바이오 기술',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

**Option B: Using next/font (Preferred)**

Create font configuration and update layout:

```tsx
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'AK - 친환경 바이오 기업',
  description: 'Nature, Science, and Life - AK의 친환경 바이오 기술',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

Use Option A (CDN) for quick setup, Option B if fonts are available.

### 4. Enhance Global CSS

Update `{project-root}/ak-homepage/app/globals.css` with AK design system:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 122 49% 33%;
    --primary-foreground: 0 0% 100%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 122 49% 33%;
    --radius: 0.5rem;

    /* AK Custom Variables */
    --ak-green: 122 49% 33%;
    --ak-brown: 16 25% 38%;
    --ak-gold: 48 96% 57%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 122 49% 40%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 122 49% 40%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }

  h1 {
    @apply text-display-lg md:text-display-xl lg:text-display-2xl font-bold;
  }

  h2 {
    @apply text-display-sm md:text-display-md lg:text-display-lg font-bold;
  }

  h3 {
    @apply text-2xl md:text-3xl font-semibold;
  }
}

@layer components {
  .container-custom {
    @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  .section-padding {
    @apply py-12 md:py-16 lg:py-24;
  }

  .btn-primary {
    @apply bg-ak-green text-white hover:bg-ak-green-700 transition-colors px-6 py-3 rounded-lg font-medium;
  }

  .btn-secondary {
    @apply border-2 border-ak-green text-ak-green hover:bg-ak-green hover:text-white transition-colors px-6 py-3 rounded-lg font-medium;
  }

  .card-hover {
    @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
  }

  .text-gradient-green {
    @apply bg-gradient-to-r from-ak-green to-ak-green-700 bg-clip-text text-transparent;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### 5. Install and Configure Framer Motion (Optional)

If Framer Motion not already installed:

```bash
cd {project-root}/ak-homepage && npm install framer-motion
```

Create animation utilities file `{project-root}/ak-homepage/lib/animations.ts`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### 6. Review and Enhance Component Styling

Go through each component and ensure AK design is applied:

**A. Update Header styling** (if needed):
- Ensure sticky positioning
- Apply AK green for active states
- Smooth transitions

**B. Update Footer styling** (if needed):
- Dark background with good contrast
- AK green accents for links

**C. Update ProductCard** (if needed):
- Card hover effects
- AK color accents
- Smooth transitions

### 7. Ensure Responsive Design

Review all pages for mobile responsiveness:

**Key breakpoints:**
- Mobile: default (< 640px)
- Tablet: sm: (640px)
- Desktop: md: (768px), lg: (1024px), xl: (1280px)

**Checklist:**
- ✅ All text is readable on mobile
- ✅ Images scale properly
- ✅ Navigation works on mobile (hamburger menu)
- ✅ Cards stack vertically on mobile
- ✅ Spacing is appropriate for all screen sizes
- ✅ Touch targets are at least 44x44px

### 8. Add Accessibility Improvements

Ensure:
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Sufficient color contrast (WCAG AA minimum)
- Focus states for interactive elements
- Semantic HTML

### 9. Performance Optimizations

Apply:
- Next.js Image component for all images
- Lazy loading for images below the fold
- Minimize layout shifts (CLS)
- Font display: swap

### 10. Verify Design System

Check that AK design is consistently applied:
- ✅ AK Green (#2E7D32) used for primary actions
- ✅ Pretendard font loaded and applied
- ✅ Responsive design works on all screen sizes
- ✅ Smooth animations and transitions
- ✅ Consistent spacing and typography

Display:

"✅ **스타일링 적용 완료!**

**적용된 디자인:**
- ✅ AK 컬러 팔레트 (Green, Brown, Gold)
- ✅ Pretendard 폰트
- ✅ 반응형 디자인 (Mobile-First)
- ✅ Framer Motion 애니메이션
- ✅ 접근성 개선
- ✅ 성능 최적화

**다음 단계:** 최종 확인 및 Party-Mode 코드 리뷰"

### 11. Update Project Status

Update `{statusFile}` frontmatter:
- Add 5 to `stepsCompleted` array: `stepsCompleted: [1, 2, 3, 4, 5]`
- Update `lastStep: 'styling'`

Add note to project-status.md body:

```markdown
## Step 5: 스타일링 적용 ✅

**완료 시간:** [current timestamp]

**적용된 스타일:**
- AK 컬러 팔레트 (Green #2E7D32, Brown, Gold)
- Pretendard 폰트 설정
- 반응형 디자인 (Mobile-First)
- Tailwind CSS 커스터마이징
- Framer Motion 애니메이션
- 접근성 개선 (WCAG AA)

**프로젝트 상태:** 최종 리뷰 준비 완료
```

### 12. Present MENU OPTIONS

Display: **Proceeding to final review and verification...**

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after styling verification
- Use menu handling logic section below

#### Menu Handling Logic:

- After styling complete and status updated, immediately load, read entire file, then execute `{nextStepFile}` to begin final review and Party-Mode code review

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Tailwind config updated with complete AK design system
- Pretendard font configured and loading
- Global CSS enhanced with AK variables
- Framer Motion installed and configured
- Responsive design verified on all breakpoints
- Accessibility improvements applied
- {statusFile} updated with `stepsCompleted: [1, 2, 3, 4, 5]`
- Ready to proceed to final review

### ❌ SYSTEM FAILURE:

- AK colors not applied consistently
- Font not loading properly
- Responsive design broken
- Missing accessibility features
- Not updating {statusFile} frontmatter
- Proceeding without verification

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN styling is complete and verified, and {statusFile} is updated with step 5 completion, will you then immediately load, read entire file, then execute `{nextStepFile}` to begin final review and Party-Mode code review.
