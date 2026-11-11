# Personal Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun website personal portfolio yang responsif, modern, dan production-ready untuk Zalfaulislam Sayfanah sesuai spesifikasi PRD.md.

**Architecture:** Menggunakan arsitektur *Modular Typed Data Store* di mana seluruh data dipisah dalam modul TypeScript (`src/data/*.ts`) dengan *strict typing*. Komponen UI Next.js App Router murni presentasional dan reaktif mengonsumsi data, dilengkapi modal detail proyek, filter kategori, pengecekan URL aman (anti-broken links), dan fallback visual SVG.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, Node.js.

**Spec:** `docs/superpowers/specs/2026-11-11-portfolio-website-design.md`

## Global Constraints

- Menggunakan Next.js App Router dengan TypeScript dan Tailwind CSS.
- Tidak boleh ada broken link atau dummy URL yang aktif (placeholder disaring dengan utilitas `isValidUrl`).
- Tidak boleh membuat, menebak, atau mengarang informasi atau klaim yang tidak tercantum dalam PRD.
- Proyek dengan `featured: true` (POS Kasir, EduHealth Web, GasRental, Portal Klinik Gigi, Portal HRIS) harus diprioritaskan di daftar proyek unggulan.
- Desain profesional: palet Deep Navy (`#0F172A`), Slate, Royal Blue (`#2563EB`), dan White, tipografi Poppins & Inter.

## Review Focus

- Input placeholder URL (seperti `"[ISI_URL_CV_PDF]"`): harus otomatis disembunyikan/tidak render tombol aktif.
- Gambar thumbnail proyek yang belum ada filenya: harus fallback ke SVG placeholder yang rapi tanpa broken image.
- Filter kategori proyek (All, Web Development, Mobile Development, Machine Learning, UI/UX Design): harus memfilter daftar proyek secara instan.
- Project Detail Modal: harus menampilkan deskripsi, peran, kontribusi pribadi, tech stack, dan hanya menampilkan link live demo/GitHub jika URL valid.
- Mobile Navigation: menu hamburger harus responsif, dapat dibuka/tutup dengan lancar, dan menutup saat menu item diklik.

---

### Task 1: Project Scaffolding & Dependencies Setup

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`, `.gitignore`
- Test: Build sanity check `npm run build` or Next.js config verification

**Interfaces:**
- Produces: Working Next.js 15 development and build environment with Tailwind CSS and Lucide React.

- [ ] **Step 1: Create package.json with dependencies**
  - Next.js, React, React-DOM, Lucide-React, Tailwind CSS, PostCSS, Autoprefixer, TypeScript, `@types/node`, `@types/react`.
- [ ] **Step 2: Create configuration files**
  - `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`, `.gitignore`.
- [ ] **Step 3: Install dependencies**
  - Run `npm install`
- [ ] **Step 4: Verify package setup**
  - Verify node_modules installed cleanly.
- [ ] **Step 5: Commit scaffolding**
  - `git add . && git commit -m "chore: scaffold Next.js project with Tailwind CSS and TypeScript"`

---

### Task 2: Type Definitions & Utility Helpers

**Files:**
- Create: `src/types/portfolio.ts`
- Create: `src/lib/utils.ts`
- Create: `src/lib/utils.test.ts` (or node verification script)

**Interfaces:**
- Produces: Type definitions for `PersonalInfo`, `ProjectItem`, `SkillCategory`, `EducationItem`, `ExperienceItem`, `OrganizationItem`, `AchievementItem`, `CertificationItem`.
- Produces: `isValidUrl(url?: string): boolean` helper and `cn(...inputs: string[]): string`.

- [ ] **Step 1: Write type definitions in `src/types/portfolio.ts`**
  - Declare all strict interfaces specified in Section 4 of the spec.
- [ ] **Step 2: Write utility functions in `src/lib/utils.ts`**
  - Implement `isValidUrl` (checks for non-placeholder, non-empty, valid http/https/mailto) and `cn` utility.
- [ ] **Step 3: Verify `isValidUrl` logic with edge cases**
  - Valid: `https://eduhealth.informatikaunimus.id/`, `mailto:zalfaulislam@gmail.com` -> true.
  - Invalid: `"[ISI_URL_CV_PDF]"`, `""`, `undefined` -> false.
- [ ] **Step 4: Commit type definitions & utilities**
  - `git add src/types/ src/lib/ && git commit -m "feat: add portfolio types and link validation utilities"`

---

### Task 3: Portfolio Data Modules

**Files:**
- Create: `src/data/personal.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/education.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/organizations.ts`
- Create: `src/data/achievements.ts`
- Create: `src/data/certifications.ts`

**Interfaces:**
- Consumes: `src/types/portfolio.ts`
- Produces: Typed data constants (`personalData`, `projectsData`, `skillsData`, `educationData`, `experienceData`, `organizationsData`, `achievementsData`, `certificationsData`).

- [ ] **Step 1: Populate `src/data/personal.ts`**
  - Name, Title, Bio summaries, email, LinkedIn, GitHub, CV placeholder from PRD Section 4.1 & 2.1.
- [ ] **Step 2: Populate `src/data/projects.ts`**
  - POS Kasir, EduHealth Web, EduHealth Mobile, GasRental, Portal Klinik Gigi, Portal HRIS, LaporUnimus, Stroke Prediction.
- [ ] **Step 3: Populate `src/data/skills.ts`**
  - 5 categories: Programming Languages, Web Technologies, Database, Development Tools, Additional Skills.
- [ ] **Step 4: Populate `src/data/education.ts` & `experience.ts`**
  - Formal education (S1 Informatika UNIMUS), 2 Bootcamp trainings (Plan Intl & Dibimbing), RS UNIMUS IT internship.
- [ ] **Step 5: Populate `src/data/organizations.ts`, `achievements.ts`, `certifications.ts`**
  - IMM & PKM-PM Aksawatra, 10 official achievements, 7 official certifications with Google Drive links.
- [ ] **Step 6: Verify data models against TypeScript compilation**
  - Run `npx tsc --noEmit`
- [ ] **Step 7: Commit data modules**
  - `git add src/data/ && git commit -m "feat: add structured and typed portfolio data modules"`

---

### Task 4: Layout & Base UI Components

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/ui/SectionHeader.tsx`
- Create: `src/components/ui/Badge.tsx`

**Interfaces:**
- Produces: Responsive sticky navigation bar with active section spy, mobile drawer, layout container, footer, section headers.

- [ ] **Step 1: Setup `src/app/globals.css`**
  - Tailwind directives, CSS variables, smooth scrolling, font classes.
- [ ] **Step 2: Setup `src/app/layout.tsx`**
  - SEO metadata (Title: "Zalfaulislam Sayfanah | Web Developer Portfolio", meta description, Open Graph tags).
- [ ] **Step 3: Create `Navbar.tsx` & `Footer.tsx`**
  - Fixed header, backdrop-blur, section links, mobile toggle menu, footer copyright and social links.
- [ ] **Step 4: Create `SectionHeader.tsx` & `Badge.tsx`**
  - Standardized title, subtitle, and badge chips.
- [ ] **Step 5: Commit layout components**
  - `git add src/app/ src/components/ && git commit -m "feat: implement layout, navbar, and core UI components"`

---

### Task 5: Core Sections (Hero, About, Skills, Education, Experience, Organizations)

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/About.tsx`
- Create: `src/components/sections/Skills.tsx`
- Create: `src/components/sections/Education.tsx`
- Create: `src/components/sections/Experience.tsx`
- Create: `src/components/sections/Organizations.tsx`

**Interfaces:**
- Consumes: Data from `src/data/` and UI primitives from `src/components/ui/`.
- Produces: Polished, responsive sections matching PRD Sections 5.1-5.5 & 8.

- [ ] **Step 1: Implement `Hero.tsx`**
  - Greeting badge, name, professional title, hero copy, CTA buttons (View Projects, Download CV if URL valid, Contact Me).
- [ ] **Step 2: Implement `About.tsx`**
  - Professional summary, academic background, team leadership and bootcamp experience highlights.
- [ ] **Step 3: Implement `Skills.tsx`**
  - 5-category skill grid with icons/cards, clean layout without ungrounded percentage bars.
- [ ] **Step 4: Implement `Education.tsx` & `Experience.tsx`**
  - Formal education card, Future Innovators Bootcamp card (1st place highlight), Dibimbing card, RS UNIMUS IT Intern timeline card.
- [ ] **Step 5: Implement `Organizations.tsx`**
  - IMM Division Head and PKM-PM Aksawatra (PIMNAS 37 finalist) cards.
- [ ] **Step 6: Commit core sections**
  - `git add src/components/sections/ && git commit -m "feat: implement hero, about, skills, education, experience, and organization sections"`

---

### Task 6: Projects Showcase, Category Filter & Project Modal

**Files:**
- Create: `src/components/ui/ProjectCard.tsx`
- Create: `src/components/ui/ProjectModal.tsx`
- Create: `src/components/sections/Projects.tsx`

**Interfaces:**
- Consumes: `projectsData` from `src/data/projects.ts` and `isValidUrl` from `src/lib/utils.ts`.
- Produces: Interactive projects showcase with filter buttons, featured badges, modal dialog with full specs, contributions, and verified demo links.

- [ ] **Step 1: Implement `ProjectCard.tsx`**
  - Thumbnail with SVG fallback, featured ribbon, category tag, role, description, tech stack badges, and "View Details" action.
- [ ] **Step 2: Implement `ProjectModal.tsx`**
  - Modal overlay with backdrop blur, project objectives, features list, individual contributions, tech stack pills, and conditional Live Demo & GitHub buttons.
  - Keyboard accessibility (Esc to close) and backdrop dismiss.
- [ ] **Step 3: Implement `Projects.tsx`**
  - Filter tabs (All, Web Development, Mobile Development, Machine Learning, UI/UX Design).
  - Priority display for featured projects (POS Kasir, EduHealth Web, GasRental, etc.).
- [ ] **Step 4: Commit projects showcase & modal**
  - `git add src/components/ && git commit -m "feat: implement interactive project showcase with category filtering and detail modal"`

---

### Task 7: Achievements, Certifications & Contact Sections

**Files:**
- Create: `src/components/sections/Achievements.tsx`
- Create: `src/components/sections/Certifications.tsx`
- Create: `src/components/sections/Contact.tsx`

**Interfaces:**
- Consumes: `achievementsData`, `certificationsData`, `personalData` and `isValidUrl`.
- Produces: Achievements grid, certifications with "View Certificate" links, and contact section with mailto & copy-to-clipboard button.

- [ ] **Step 1: Implement `Achievements.tsx`**
  - Display 10 verified awards in structured cards with rank badges and year.
- [ ] **Step 2: Implement `Certifications.tsx`**
  - Display 7 verified certifications with organizer, year, hours, and conditional "View Certificate" Google Drive link.
- [ ] **Step 3: Implement `Contact.tsx`**
  - Headline, email link, "Copy Email" button with temporary visual feedback ("Copied!"), LinkedIn & GitHub buttons.
- [ ] **Step 4: Commit achievements, certifications, and contact sections**
  - `git add src/components/sections/ && git commit -m "feat: implement achievements, certifications, and contact sections"`

---

### Task 8: Page Aggregation, SEO & End-to-End Build Verification

**Files:**
- Modify: `src/app/page.tsx`
- Create: `public/images/projects/` placeholder SVGs / assets
- Create: `README.md` with setup, local run, and deployment guide

**Interfaces:**
- Produces: Complete, responsive, zero-error production build portfolio website.

- [ ] **Step 1: Assemble all sections in `src/app/page.tsx`**
  - Connect Navbar, Hero, About, Skills, Education, Experience, Projects, Organizations, Achievements, Certifications, Contact, Footer.
- [ ] **Step 2: Create placeholder visuals for projects and profile**
  - Elegant SVG placeholders for projects to avoid 404 image errors.
- [ ] **Step 3: Run TypeScript compiler check**
  - Run `npx tsc --noEmit` to verify type safety.
- [ ] **Step 4: Run production build check**
  - Run `npm run build` to verify Next.js builds without any errors or warnings.
- [ ] **Step 5: Write comprehensive `README.md`**
  - Document project overview, folder structure, how to edit data in `src/data/*.ts`, local development (`npm run dev`), and deployment to Netlify/Vercel.
- [ ] **Step 6: Final commit**
  - `git add . && git commit -m "feat: complete personal portfolio website with full PRD compliance and build verification"`

