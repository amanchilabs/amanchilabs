# Amanchi Labs Refined Concept A Implementation Plan (Revised)

> **Execution Method:** **Native Execution** (Tasks 1–5 executed sequentially by implementer with focused testing and commits), followed by an **Independent Final Review by Claude Opus 4.6 (Thinking)**. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Amanchi Labs website into the officially approved Refined Concept A ("Modern Intelligent Minimalism") design, featuring a full-width responsive 40/60 asymmetric grid, Plus Jakarta Sans + Inter typography, persistent studio top navigation dock, dynamic in-place content panels, and local-first architecture diagram, while strictly preserving approved brand assets, verified product scope, and accurate company-philosophy language.

**Architecture:** Replace the traditional 240px fixed left sidebar and constrained document layout with an edge-to-edge full-viewport layout. The shell features a persistent 78px `StudioHeader` top dock with the approved Amanchi Labs brandmark, an asymmetric 40/60 two-column body (40% grounded manifesto narrative, 60% dynamic in-place content canvas), and an updated lightweight hash router providing instant panel switching with zero scroll jumps and full browser history support.

**Tech Stack:** React 18, TypeScript, Vite, Vanilla CSS custom properties (design tokens), Google Fonts (`Plus Jakarta Sans`, `Inter`, `DM Mono`), Playwright E2E.

**Spec:** [docs/reviews/amanchilabs-ux-transformation/07-refined-concept-a-evaluation.md](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/docs/reviews/amanchilabs-ux-transformation/07-refined-concept-a-evaluation.md), [docs/reviews/amanchilabs-ux-transformation/refined-concept-a.html](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/docs/reviews/amanchilabs-ux-transformation/refined-concept-a.html), and Retina baseline mockups in [docs/reviews/amanchilabs-ux-transformation/img/](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/docs/reviews/amanchilabs-ux-transformation/img/).

---

## Global Constraints & Policy Rules

- **Design Baseline:** Strictly reproduce Refined Concept A as frozen in `docs/reviews/amanchilabs-ux-transformation/refined-concept-a.html` and commit `1426742`. Do not introduce unapproved visual variations or new styling concepts.
- **Screen Utilization:** 100% full-width edge-to-edge layout across viewports (1728px, 1512px, 1440px, 1280px, 1024px, 390px, 375px) with zero artificial side margin gutters while maintaining comfortable line lengths (`max-width: 65-72ch`) for body copy.
- **Brandmark Integrity:** Use the approved Amanchi Labs brand assets (`/brand/logo-header.png` and architectural brandmark). Do NOT substitute a generic text-based `[A]` placeholder.
- **Product Scope Control:**
  - Public showcase is strictly limited to the currently approved public portfolio:
    1. **WealthPrivate** — private personal financial intelligence (In Development).
    2. **DermaPrivate** — personalized skincare and routine intelligence (In Testing; live companion at `https://www.dermaprivate.app/`).
  - Do NOT automatically add FieldTally, LLCBookKeepingTaxReturn, or InterviewPrivate to the public website showcases unless separately authorized.
- **Deep Link & Route Preservation:**
  - `#wealth`: Dedicated WealthPrivate product showcase view.
  - `#derma`: Dedicated DermaPrivate product showcase view.
  - `#principles`: Dedicated Principles view.
  - `#vision` / `#overview`: Vision panel.
  - `#why` / `#overview/why`: Why It Matters panel.
  - `#approach` / `#overview/approach`: Our Approach panel.
  - `#products`: Products overview panel.
  - `#contact`: Contact panel.
  - Legacy routes (`#llc-tax`, `#interview`, `#fieldtally`) must retain dedicated compatible destinations and documented development status, rather than silently redirecting to generic content.
- **Privacy & Security Copy Boundaries (Strict):**
  - Universal guarantees such as "100% On-Device SQLCipher Storage," "0 Server Accounts," "Zero Tracking," or "Architectural Guarantee" are strictly prohibited.
  - Replace all claims with verified, accurate company-philosophy language:
    - Philosophy: *"Private by Design. Local by Default. AI by Choice."*
    - Promise: *"Your Data. Your Device. Your Control."*
    - Design Goals: *"We build intelligent personal applications designed around on-device processing, independent everyday use, and optional external AI strictly when you choose to use it."*
    - External AI Disclosure: *"Optional external AI integrations put choice in your hands. When initiated, authorized information is sent directly to external AI providers whose own privacy and retention policies apply."*
  - No fabricated financial figures, skincare scores, accounting capabilities, or unverified security badges.
- **Typography Targets:**
  - Hero H1: `clamp(48px, 3.8vw, 74px)` (targeting ~66px on 1728px MacBook Pro)
  - Section H2: `clamp(30px, 2.4vw, 44px)` (targeting ~41px on 1728px MacBook Pro)
  - Card H3: `clamp(22px, 1.6vw, 28px)`
  - Body Lead: `clamp(18px, 1.15vw, 20px)`
  - Navigation: `clamp(14.5px, 0.9vw, 16.5px)`
  - Action Buttons: `clamp(15px, 0.9vw, 17px)`
  - Supporting Badges: `clamp(12px, 0.75vw, 13.5px)`
- **Color Identity:**
  - Canvas: `#FAFAF8`, Surface: `#FFFFFF`, Primary Ink: `#0F172A`
  - Muted Ink: `#475569`, Subtle Ink: `#64748B`, Border: `#E2E8F0`
  - Studio Accents: Forest `#1E3A2F`, Teal `#236861`, Sage `#3D6B50`, Ice Blue `#0284C7`

---

## Review Focus

1. **Brandmark Fidelity & Assets:** The header and navigation must render the approved Amanchi Labs architectural mark from `/brand/logo-header.png` with crisp scaling, never a text "A" inside a box.
2. **Product Scope & Accurate Copy:** Only WealthPrivate and DermaPrivate are highlighted in public navigation and showcases; copy expresses design goals and architectural principles rather than unverified universal guarantees.
3. **Deep Link Invariance:** Navigating directly to `#wealth`, `#derma`, `#principles`, `#vision`, `#why`, `#approach`, `#products`, `#contact` or using browser Back/Forward must render their exact respective views with zero layout shifts or missing content.
4. **Responsive Reflow Across Real Layouts:** Viewports (1728×1117, 1512×982, 1440×900, 1280×800, 1024×768, 768×1024, 390×844, 375×812) and browser zoom (125%, 150%, 200%) must display with zero horizontal overflow and comfortable paragraph widths.
5. **Accessibility & Interactive Targets:** Interactive elements must meet minimum 44×44px touch targets on mobile; keyboard navigation (Arrow keys in nav dock, Tab order, Escape for drawer) and focus outlines must be fully functional and WCAG 2.2 AA compliant.

---

## Tasks (Native Execution)

### Task 1: Design Tokens, Typography & HTML Preload Setup

**Files:**
- Modify: `index.html`
- Modify: `src/tokens.css`
- Modify: `src/styles.css`
- Test: `tests/company-navigation.spec.ts`

**Interfaces:**
- Consumes: Google Fonts API (`Plus Jakarta Sans:wght@500;600;700;800`, `Inter:wght@400;500;600;700`, `DM Mono:wght@400;500;600`).
- Produces: CSS custom properties for typography scales, colors, borders, and transitions.

- [ ] **Step 1: Write failing test for Refined Concept A fonts and token declarations**
- [ ] **Step 2: Run test to verify it fails**
- [ ] **Step 3: Update `index.html`, `src/tokens.css`, and `src/styles.css`**
- [ ] **Step 4: Run test to verify it passes**
- [ ] **Step 5: Commit changes**

---

### Task 2: Persistent Studio Header with Approved Brandmark & In-Place Nav Dock

**Files:**
- Create: `src/site/components/StudioHeader.tsx`
- Create: `src/site/components/StudioHeader.css`
- Modify: `src/site/Brand.tsx`
- Modify: `src/site/Brand.css`
- Modify: `src/site/components/MobileNav.tsx`
- Modify: `src/site/components/MobileNav.css`
- Modify: `src/site/App.tsx`
- Test: `tests/company-navigation.spec.ts`

**Interfaces:**
- Consumes: `useHashRouter`, approved brand asset `/brand/logo-header.png`.
- Produces: Persistent 78px studio header with approved brandmark, in-place tabs (`Our Vision`, `Why It Matters`, `Our Approach`, `Products`, `Principles`, `Contact`), status badge (`Private by Design · Local by Default`), and keyboard navigation.

- [ ] **Step 1: Write failing test for StudioHeader with approved brandmark and dock buttons**
- [ ] **Step 2: Run test to verify it fails**
- [ ] **Step 3: Implement `StudioHeader.tsx`, `StudioHeader.css`, and update `Brand.tsx`, `MobileNav.tsx`, `App.tsx`**
- [ ] **Step 4: Run test to verify it passes**
- [ ] **Step 5: Commit changes**

---

### Task 3: Full-Width 40/60 Asymmetric Shell & Router Coordination

**Files:**
- Modify: `src/site/hooks/useHashRouter.ts`
- Modify: `src/site/CompanyView.tsx`
- Modify: `src/site/CompanyView.css`
- Test: `tests/company-navigation.spec.ts`

**Interfaces:**
- Consumes: `useHashRouter` routing state, CSS grid layout tokens.
- Produces:
  - 40% Left Narrative Column: Manifesto H1, Customer Promise, verified design principle badges, and Studio footer.
  - 60% Right Dynamic Canvas: in-place view transitions with zero scroll jumps.
  - Deep-link preservation for `#vision`, `#why`, `#approach`, `#principles`, `#products`, `#wealth`, `#derma`, `#contact`, `#llc-tax`, `#interview`, `#fieldtally`.

- [ ] **Step 1: Write failing test for 40/60 grid and deep links**
- [ ] **Step 2: Run test to verify it fails**
- [ ] **Step 3: Update `useHashRouter.ts`, `CompanyView.tsx`, and `CompanyView.css`**
- [ ] **Step 4: Run test to verify it passes**
- [ ] **Step 5: Commit changes**

---

### Task 4: Dynamic Panels, Local-First Architecture Flow & Scoped Product Showcases

**Files:**
- Create: `src/site/components/ArchitectureBlueprint.tsx`
- Create: `src/site/components/ArchitectureBlueprint.css`
- Create: `src/site/components/ProductCard.tsx`
- Create: `src/site/components/ProductCard.css`
- Modify: `src/site/CompanyView.tsx`
- Modify: `src/site/CompanyView.css`
- Test: `tests/company-navigation.spec.ts`

**Interfaces:**
- Consumes: Design tokens, approved product portfolio data.
- Produces:
  - `<ArchitectureBlueprint />`: Data flow diagram (You → Your Device [local processing] → Optional External AI [user-initiated conduit]) with honest design principles.
  - `<ProductCard />`: Preview and showcase cards for **WealthPrivate** (In Development) and **DermaPrivate** (In Testing; `https://www.dermaprivate.app/`), avoiding fabricated metrics or unverified badges.
  - Dedicated views for `#principles`, `#wealth`, `#derma`, `#contact`.

- [ ] **Step 1: Write failing test for blueprint and product showcase components**
- [ ] **Step 2: Run test to verify it fails**
- [ ] **Step 3: Implement components and wire into `CompanyView.tsx`**
- [ ] **Step 4: Run test to verify it passes**
- [ ] **Step 5: Commit changes**

---

### Task 5: Responsive Verification, Visual Acceptance Capture & Regression Suite

**Files:**
- Modify: `tests/company-navigation.spec.ts`
- Script: `scripts/capture-production-mockups.mjs`
- Test: Full Playwright E2E suite and visual screenshot verification

**Interfaces:**
- Consumes: Playwright chromium test runner, 8 viewports matrix.
- Produces:
  - Comprehensive automated test pass across all routes, viewports, and zoom levels.
  - Captured desktop (1728×1117, 1440×900) and mobile (390×844) screenshots demonstrating visual parity against approved mockups.

- [ ] **Step 1: Update Playwright test suite for new view selectors and viewports**
- [ ] **Step 2: Run test suite and fix any responsive/layout regressions**
- [ ] **Step 3: Capture full-fidelity desktop and mobile screenshots**
- [ ] **Step 4: Run full build and test suite (`npm run build && npm run test:e2e`)**
- [ ] **Step 5: Commit changes**

---

### Task 6: Independent Final Review by Claude Opus 4.6 (Thinking)

- [ ] **Step 1: Prepare whole-branch git diff and review package**
- [ ] **Step 2: Dispatch independent review to Claude Opus 4.6 (Thinking)**
  - Reviewer inspects: full git diff against `origin/main`, visual parity against Refined Concept A mockups, responsive layouts, navigation and deep links, accessibility compliance, privacy claims accuracy, and lack of fabricated data.
- [ ] **Step 3: Document reviewer findings, verdicts, and any unresolved items**
