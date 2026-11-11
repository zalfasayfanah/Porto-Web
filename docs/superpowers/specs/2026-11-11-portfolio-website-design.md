# Technical Design Specification: Personal Portfolio Website

- **Author:** Antigravity (Pair Programming with Zalfaulislam Sayfanah)
- **Date:** 2026-11-11
- **Status:** Approved Design
- **Source Document:** `PRD.md`

---

## 1. Executive Summary & Purpose

Personal Portfolio Website untuk **Zalfaulislam Sayfanah**, mahasiswa Informatika Universitas Muhammadiyah Semarang dengan fokus pada Web Development, Frontend & Backend Development, serta pemanfaatan AI tools.

Website dirancang khusus sebagai portofolio profesional untuk melamar posisi **Web Developer**, **Web Developer Intern**, dan **Web Developer (Simulator)**. Konsep website adalah **Single Page Portfolio dengan navigasi berbasis section** dan **Project Detail Modal**, menyajikan proyek terstruktur, keterampilan teknis terverifikasi, riwayat pendidikan & pelatihan bootcamp, pengalaman kerja/magang, kepengurusan organisasi, pencapaian lomba, sertifikasi resmi, serta kanal kontak.

---

## 2. Architecture & Tech Stack

### 2.1 Core Frameworks & Libraries
- **Framework:** Next.js (App Router, static export ready for Netlify / Vercel)
- **Language:** TypeScript (strict mode, fully typed models)
- **Styling:** Tailwind CSS (modern color scheme, responsive utilities, dark navy / slate / blue aesthetic)
- **Icons:** Lucide React (`lucide-react`)
- **Animation:** Lightweight CSS transitions & optional Framer Motion micro-interactions
- **Hosting / Deployment Target:** Netlify / Vercel

### 2.2 Architectural Pattern: Modular Typed Data Store
Semua data profil, proyek, keahlian, pengalaman, dan sertifikat diisolasi secara ketat dalam file TypeScript berekstensi `.ts` pada folder `src/data/`. Komponen UI di `src/components/` murni bersifat presentasional dan mengonsumsi data yang telah divalidasi. Ini memungkinkan pemilik portofolio memperbarui data, menambah proyek deployment baru, atau memperbarui URL sertifikat tanpa menyentuh kode tampilan.

---

## 3. Directory & File Structure

```text
Porto-Zal/
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts / postcss.config.mjs
├── next.config.ts
├── PRD.md
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-11-11-portfolio-website-design.md
├── public/
│   ├── images/
│   │   ├── projects/          # Placeholder or actual project screenshots
│   │   └── profile-placeholder.svg
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── globals.css        # Tailwind directives, smooth scrolling, scroll-margin
    │   ├── layout.tsx         # Root layout, Google Fonts (Poppins & Inter), SEO & OG metadata
    │   └── page.tsx           # Single page aggregator uniting all sections
    ├── types/
    │   └── portfolio.ts       # TypeScript interfaces (Personal, Project, Skill, Experience, etc.)
    ├── data/
    │   ├── personal.ts        # Biodata, bio summaries, contact info, social links, CV link
    │   ├── projects.ts        # Comprehensive list of projects with tags, URLs, roles, contributions
    │   ├── skills.ts          # Categorized technical skills (Languages, Web, DB, Tools, Additional)
    │   ├── education.ts       # Formal education (UNIMUS) & Training (Plan Intl & Dibimbing)
    │   ├── experience.ts      # IT Intern RS UNIMUS
    │   ├── organizations.ts   # IMM & PKM-PM AKSAWATRA (PIMNAS 37 finalist)
    │   ├── achievements.ts    # 10 verified achievements & capstone awards
    │   └── certifications.ts  # 7 official certifications with verified Google Drive links
    ├── lib/
    │   └── utils.ts           # Helper functions (isValidUrl, cn classnames merger)
    └── components/
        ├── layout/
        │   ├── Navbar.tsx     # Sticky header, active section spy, mobile drawer
        │   └── Footer.tsx     # Footer, copyright, quick links
        ├── sections/
        │   ├── Hero.tsx       # Hero headline, bio summary, CTA Download CV & View Projects
        │   ├── About.tsx      # Background, education overview, career focus, leadership experience
        │   ├── Skills.tsx     # Grid of skill cards categorized logically
        │   ├── Education.tsx   # Formal education card + 2 detailed bootcamp cards
        │   ├── Experience.tsx # Timeline card of RS UNIMUS IT Internship
        │   ├── Projects.tsx   # Featured projects, category filters, interactive cards
        │   ├── Organizations.tsx # IMM & PKM-PM Aksawatra leadership cards
        │   ├── Achievements.tsx  # Grid of awards with badges & recognitions
        │   ├── Certifications.tsx# Certificate cards with working "View Certificate" actions
        │   └── Contact.tsx    # Mailto link, copy email button with feedback, social buttons
        └── ui/
            ├── ProjectModal.tsx # Accessible modal dialog for detailed project overview
            ├── ProjectCard.tsx  # Card component with fallback image and tags
            ├── Badge.tsx      # Reusable badge tag for tech stacks and categories
            └── SectionHeader.tsx# Reusable title & subtitle component
```

---

## 4. Data Models & Type Definitions (`src/types/portfolio.ts`)

```typescript
export interface PersonalInfo {
  name: string;
  title: string;
  bioHeadline: string;
  bioSummary: string;
  aboutText: string[];
  email: string;
  linkedin: string;
  github: string;
  cvPdfUrl?: string;
  profilePhoto?: string;
}

export type ProjectCategory = 
  | 'Web Development'
  | 'Mobile Development'
  | 'Machine Learning'
  | 'UI/UX Design'
  | 'Healthcare Application';

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  year: number;
  role: string;
  description: string;
  problemStatement?: string;
  objectives?: string[];
  keyFeatures: string[];
  techStack: string[];
  personalContributions: string[];
  achievement?: string;
  deploymentUrl?: string;
  githubUrl?: string;
  featured: boolean;
  thumbnailUrl: string;
  screenshots: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  details?: string[];
  isBootcamp?: boolean;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  skillsUsed?: string[];
}

export interface OrganizationItem {
  organization: string;
  role: string;
  period: string;
  description: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  competition: string;
  year: number;
  rank: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  organizer: string;
  year: number;
  duration?: string;
  certificateNumber?: string;
  certificateUrl?: string;
}
```

---

## 5. UI/UX & Component Details

### 5.1 Color Scheme & Design System
- **Primary Navy:** `#0F172A` (Slate 900) - Headers, bold elements, dark backgrounds.
- **Surface & Cards:** `#FFFFFF` (White) and `#F8FAFC` (Slate 50) - Clean card backgrounds with subtle borders (`border-slate-200`).
- **Brand Blue Accent:** `#2563EB` (Blue 600) and `#0EA5E9` (Sky 500) - Interactive buttons, badges, hover accents.
- **Text:** `#0F172A` (Heading text) and `#475569` (Slate 600 body text for high readability).
- **Fonts:** Poppins (Headings) and Inter (Body).

### 5.2 Navigation & Sticky Header
- Fixed / Sticky header with backdrop-blur.
- Smooth scroll navigation targeting section IDs (`#hero`, `#about`, `#skills`, `#education`, `#experience`, `#projects`, `#achievements`, `#certifications`, `#contact`).
- Active section indicator dynamically highlighting the current visible section via `IntersectionObserver`.
- Mobile responsive hamburger toggle drawer.

### 5.3 Projects Showcase & Detail Modal
- **Filter Tabs:** All, Web Development, Mobile Development, Machine Learning, UI/UX Design.
- **Featured First:** Featured projects (POS Kasir, EduHealth Web, GasRental, Portal Klinik Gigi, Portal HRIS) are highlighted and prioritized.
- **Project Card:** Displays image, badges, title, role, summary, and "View Details" button.
- **Modal Dialog:** Contains full project objectives, features, individual contributions, tech stack badges, and live demo / source code buttons. Includes keyboard support (Esc to close) and backdrop click dismissal.

### 5.4 Link Safety & Fallbacks
- All external URL links undergo sanitization via `isValidUrl(url?: string)`:
  - Placeholders such as `[ISI_URL_...]`, empty strings, and null/undefined values are filtered out.
  - Buttons like **Live Demo**, **Source Code**, **Download CV**, and **View Certificate** only render as active links when a valid URL is present.
  - No dead links or fake URLs are introduced.
- For images, SVG fallback templates with project icons are rendered whenever a custom image file is not present on disk.

---

## 6. Verification & Quality Assurance Strategy

1. **Compilation & Type Safety:** Run `npx tsc --noEmit` and Next.js build `npm run build` to ensure 0 errors.
2. **Linting:** Ensure clean code passing ESLint standards.
3. **Responsive Verification:** Verify layout stability on Desktop (1280px+), Tablet (768px), and Mobile (375px).
4. **Interactive Verification:**
   - Test modal opening and closing.
   - Test category filtering reactivity.
   - Test copy-email button clipboard interaction.
   - Test external link security attributes (`rel="noopener noreferrer"`).
5. **SEO & Metadata:** Validate `<title>`, meta description, Open Graph tags, and semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

---

## 7. Deployment Instructions
- The application will be prepared with standard Next.js output ready for deployment to Netlify or Vercel.
- Clear instructions will be supplied in `README.md` for running locally (`npm run dev`) and production builds (`npm run build`).
