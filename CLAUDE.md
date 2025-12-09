# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a BMAD (Behavior Model Agent Development) framework workspace with custom agents, workflows, and a project PRD for AK company's branding platform.

### Key Components

1. **BMAD Framework**: Multi-agent development system installed at `.bmad/`
2. **Custom BMAD Module**: Located in `bmad-custom-src/` with configuration `custom.yaml`
3. **Project PRD**: Korean-language PRD in `prd.md` for AK company's eco-friendly bio-tech branding platform

## BMAD Framework Architecture

### Slash Commands

BMAD uses slash commands defined in `.claude/commands/bmad/`. Available commands include:

- `/bmad:core:workflows:brainstorming-session` - Interactive brainstorming using creative techniques
- `/bmad:core:workflows:party-mode` - Group discussions between all installed BMAD agents
- `/bmad:bmb:workflows:create-agent` - Build BMAD Core compliant agents
- `/bmad:bmb:workflows:create-workflow` - Create structured standalone workflows
- `/bmad:bmb:workflows:edit-agent` - Edit existing BMAD agents
- `/bmad:bmb:workflows:create-module` - Build complete BMAD modules
- `/bmad:bmb:workflows:workflow-compliance-check` - Validate workflows against BMAD standards
- `/bmad:bmb:workflows:edit-workflow` - Modify existing workflows
- `/bmad:core:tasks:index-docs` - Generate or update index.md of documents
- `/bmad:core:tasks:advanced-elicitation` - Advanced workflow elicitation

### Directory Structure

```
.bmad/
├── core/           # Core BMAD workflows and agents
│   ├── workflows/  # Standard workflows (party-mode, brainstorming)
│   ├── resources/  # Shared resources (excalidraw helpers)
│   └── config.yaml # Core module configuration
├── bmb/            # BMAD Builder workflows
└── docs/           # Generated documentation

bmad-custom-src/    # User custom BMAD module source
└── custom.yaml     # Custom module configuration

.bmad-user-memory/  # Agent sidecar folder for persistent memory
```

### Configuration

BMAD core configuration (`.bmad/core/config.yaml`):
- User: Gangseungsig
- Communication language: English
- Output folder: `{project-root}/docs`
- Agent memory: `{project-root}/.bmad-user-memory`

## AK Company Branding Platform Project

The `prd.md` contains detailed specifications for a Next.js-based branding platform. Key technical decisions:

### Tech Stack (from PRD)
- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui (Radix UI based)
- **State**: Zustand
- **Database**: SQLite
- **ORM**: Drizzle or Prisma
- **Animation**: Framer Motion
- **Charts**: Recharts

### Core Features
1. Data visualization of eco-friendly bio-tech research (flavonoid content charts)
2. Patent archive and digital certification system
3. Product showcase with test results
4. Mobile-first responsive design
5. Multilingual support

### Database Schema
Products, Patents, and History tables defined in TypeScript/Prisma format in PRD lines 24-42.

## Working with This Repository

### BMAD Workflows
When creating or modifying agents/workflows:
1. Use the appropriate slash command from the list above
2. Follow BMAD Core compliance standards
3. Output is generated to `docs/` folder
4. Agent memory persists in `.bmad-user-memory/`

### Custom Module Development
Custom BMAD module source is in `bmad-custom-src/`. The module code is "my-custom-bmad" with display name "Gangseungsig-Custom-BMad".

### Language Considerations
- PRD is in Korean but technical documentation should be in English (per BMAD config)
- Code and comments should be in English
- User-facing content may need Korean localization
