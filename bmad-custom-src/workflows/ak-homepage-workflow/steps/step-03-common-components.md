---
name: 'step-03-common-components'
description: 'Create reusable UI components: Header, Footer, Card, and Modal using shadcn/ui'

# Path Definitions
workflow_path: '{project-root}/{_bmad_folder_}/custom/workflows/ak-homepage-workflow'

# File References
thisStepFile: '{workflow_path}/steps/step-03-common-components.md'
nextStepFile: '{workflow_path}/steps/step-04-pages-generation.md'
workflowFile: '{workflow_path}/workflow.md'
statusFile: '{project-root}/ak-homepage/project-status.md'
---

# Step 3: 공통 컴포넌트 생성

## STEP GOAL:

To create reusable UI components (Header, Footer, Card, Modal) that will be used across all pages of the AK homepage, following Next.js App Router best practices and shadcn/ui design patterns.

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
- ✅ You bring component architecture and React expertise
- ✅ Maintain collaborative and efficient tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on creating shared components
- 🚫 FORBIDDEN to create page content (that's for step 4)
- 💬 Use shadcn/ui components as foundation
- 🔍 Use Web-Browsing to check latest shadcn/ui component docs if needed

## EXECUTION PROTOCOLS:

- 🎯 Create Header, Footer, Card, and Modal components
- 💾 Ensure all components are TypeScript and use Tailwind CSS
- 📖 Update {statusFile} frontmatter with `stepsCompleted: [1, 2, 3]`
- 🚫 FORBIDDEN to proceed to next step before all components are created

## CONTEXT BOUNDARIES:

- Next.js 16 project already set up at `{project-root}/ak-homepage/`
- Tailwind CSS with AK colors configured
- shadcn/ui initialized and ready
- Components will be used in pages created in next step

## COMPONENT CREATION SEQUENCE:

### 1. Announce Step Start

Display:

"**Step 3: 공통 컴포넌트 생성** 🎨

이 단계에서는 다음 컴포넌트를 생성합니다:
- Header (네비게이션, 로고, 메뉴)
- Footer (회사 정보, 링크, 저작권)
- Card (제품 카드, 재사용 가능)
- Modal (이미지 뷰어, 다이얼로그)

시작합니다..."

### 2. Install Required shadcn/ui Components

Install shadcn/ui components that will be used:

```bash
cd {project-root}/ak-homepage && npx shadcn-ui@latest add button card dialog
```

This installs:
- Button component
- Card component
- Dialog component (for Modal)

### 3. Create Header Component

Create `{project-root}/ak-homepage/components/Header.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Technology', href: '/technology' },
  { name: 'Business', href: '/business' },
  { name: 'Media', href: '/media' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-ak-green">AK</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">메뉴 열기</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-ak-green transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline" className="text-ak-green border-ak-green hover:bg-ak-green hover:text-white">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-ak-green"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
```

### 4. Create Footer Component

Create `{project-root}/ak-homepage/components/Footer.tsx`:

```tsx
import Link from 'next/link'

const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'CEO Message', href: '/about#ceo' },
    { name: 'History', href: '/about#history' },
  ],
  business: [
    { name: 'Products', href: '/business' },
    { name: 'Technology', href: '/technology' },
    { name: 'Patents', href: '/technology#patents' },
  ],
  support: [
    { name: 'Contact', href: '/media#contact' },
    { name: 'News', href: '/media' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-ak-green mb-4">AK</h3>
            <p className="text-sm text-gray-400 mb-4">
              Nature, Science, and Life
              <br />
              친환경 바이오 기업 AK
            </p>
            <p className="text-sm text-gray-400">
              충남 홍성군 홍북읍 충남대로 21, 충남테크노파크 304-2
              <br />
              Tel: 041-630-7163
              <br />
              Email: contact@ak-bio.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Business</h4>
            <ul className="space-y-2">
              {footerNavigation.business.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} AK Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

### 5. Create Card Component

Create `{project-root}/ak-homepage/components/ProductCard.tsx`:

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  description: string
  imageSrc?: string
  badge?: string
  link?: string
  stats?: { label: string; value: string }[]
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  badge,
  link,
  stats,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {imageSrc && (
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
          {badge && (
            <span className="absolute top-4 right-4 bg-ak-green text-white text-xs px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {stats && stats.length > 0 && (
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-ak-green">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      )}

      {link && (
        <CardFooter>
          <Button variant="outline" className="w-full text-ak-green border-ak-green hover:bg-ak-green hover:text-white">
            자세히 보기
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
```

### 6. Create Modal Component

Create `{project-root}/ak-homepage/components/ImageModal.tsx`:

```tsx
'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title?: string
  description?: string
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
}: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        <div className="relative w-full h-[500px]">
          <Image
            src={imageSrc}
            alt={title || 'Image'}
            fill
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

### 7. Create Utility Component (Section Wrapper)

Create `{project-root}/ak-homepage/components/Section.tsx`:

```tsx
interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'green'
}

export default function Section({ children, className = '', id, background = 'white' }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    green: 'bg-ak-green/5',
  }

  return (
    <section id={id} className={`py-16 ${bgColors[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
```

### 8. Update App Layout to Include Header and Footer

Update `{project-root}/ak-homepage/app/layout.tsx`:

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
      <body>
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

### 9. Verify Components

Check that all components are created:
- ✅ `components/Header.tsx`
- ✅ `components/Footer.tsx`
- ✅ `components/ProductCard.tsx`
- ✅ `components/ImageModal.tsx`
- ✅ `components/Section.tsx`
- ✅ `app/layout.tsx` updated

Display:

"✅ **공통 컴포넌트 생성 완료!**

**생성된 컴포넌트:**
- ✅ Header (네비게이션, 반응형 메뉴)
- ✅ Footer (회사 정보, 링크)
- ✅ ProductCard (제품 카드, 통계 지원)
- ✅ ImageModal (이미지 뷰어)
- ✅ Section (섹션 래퍼)

**다음 단계:** 5개 페이지 병렬 생성 (Sub-Agents)"

### 10. Update Project Status

Update `{statusFile}` frontmatter:
- Add 3 to `stepsCompleted` array: `stepsCompleted: [1, 2, 3]`
- Update `lastStep: 'common-components'`

Add note to project-status.md body:

```markdown
## Step 3: 공통 컴포넌트 생성 ✅

**완료 시간:** [current timestamp]

**생성된 컴포넌트:**
- Header (네비게이션, 로고, 모바일 메뉴)
- Footer (회사 정보, 링크, 저작권)
- ProductCard (재사용 가능한 제품 카드)
- ImageModal (이미지 뷰어 다이얼로그)
- Section (섹션 래퍼 유틸리티)

**프로젝트 상태:** 페이지 생성 준비 완료
```

### 11. Present MENU OPTIONS

Display: **Proceeding to page generation with Sub-Agents...**

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after components verification
- Use menu handling logic section below

#### Menu Handling Logic:

- After component creation and status update, immediately load, read entire file, then execute `{nextStepFile}` to begin parallel page generation with Sub-Agents

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All 5 components created successfully
- Components use TypeScript and proper typing
- Tailwind CSS with AK colors applied
- shadcn/ui components integrated
- Layout updated with Header and Footer
- {statusFile} updated with `stepsCompleted: [1, 2, 3]`
- Ready to proceed to page generation

### ❌ SYSTEM FAILURE:

- Missing components
- TypeScript errors in components
- Not using shadcn/ui components
- Layout not updated
- Not updating {statusFile} frontmatter
- Proceeding without verification

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN all components are created and verified, and {statusFile} is updated with step 3 completion, will you then immediately load, read entire file, then execute `{nextStepFile}` to begin page generation with Sub-Agents.
