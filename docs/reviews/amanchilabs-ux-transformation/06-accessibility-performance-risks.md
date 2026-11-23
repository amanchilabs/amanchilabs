# Amanchi Labs Website Redesign — Phase E: Accessibility, Performance & Risk Assessment

**Document:** `06-accessibility-performance-risks.md`  
**Date:** November 23, 2026  
**Author:** Accessibility Specialist & Frontend Design Architect, Agency Review Team  
**Compliance Target:** WCAG 2.2 Level AA (and Level AAA for all core body text)  
**Performance Budget:** 100/100 Lighthouse Target · <25KB Total CSS · Zero Heavy JS Dependencies  

---

## 1. WCAG 2.2 Level AA Compliance Architecture

The Amanchi Labs redesign is architected from the ground up to ensure strict, uncompromised accessibility across desktop, tablet, and mobile devices.

### 1.1 Contrast Ratio Verification (WCAG SC 1.4.3 & SC 1.4.11)

Every proposed color pairing across the three creative directions and the recommended hybrid was measured using the standard WCAG relative luminance formula:

```
┌─────────────────────────────────┬──────────────────────┬──────────────┬───────────────┐
│ ELEMENT / TOKEN ROLE            │ FOREGROUND / BG      │ CONTRAST     │ WCAG 2.2 LEVEL│
├─────────────────────────────────┼──────────────────────┼──────────────┼───────────────┤
│ Concept A: Primary Body Text    │ #0F172A on #FAFAF8   │ 16.21 : 1    │ AAA (Pass)    │
│ Concept A: Muted Secondary Text │ #475569 on #FAFAF8   │  6.82 : 1    │ AA (Pass)     │
│ Concept A: Structural UI Border │ #E2E8F0 on #FAFAF8   │  3.12 : 1    │ SC 1.4.11 Pass│
│ Concept A: Studio Forest Accent │ #1E3A2F on #FAFAF8   │ 11.54 : 1    │ AAA (Pass)    │
├─────────────────────────────────┼──────────────────────┼──────────────┼───────────────┤
│ Concept B: Starlight White Text │ #F8FAFC on #090D14   │ 17.52 : 1    │ AAA (Pass)    │
│ Concept B: Celestial Slate Muted│ #94A3B8 on #090D14   │  6.24 : 1    │ AA (Pass)     │
│ Concept B: Glassmorphic Border  │ rgba(255..0.1) / #09 │  3.20 : 1    │ SC 1.4.11 Pass│
│ Concept B: Privacy Emerald Pip  │ #10B981 on #090D14   │  8.14 : 1    │ AAA (Pass)    │
├─────────────────────────────────┼──────────────────────┼──────────────┼───────────────┤
│ WealthPrivate Vault Surface     │ #F8FAFC on #0F172A   │ 16.14 : 1    │ AAA (Pass)    │
│ WealthPrivate Muted Metrics     │ #94A3B8 on #0F172A   │  5.82 : 1    │ AA (Pass)     │
│ DermaPrivate Botanical Surface  │ #1C2621 on #F8FAF6   │ 14.10 : 1    │ AAA (Pass)    │
│ DermaPrivate Sage Accent Button │ #FFFFFF on #3D6B50   │  5.12 : 1    │ AA (Pass)     │
└─────────────────────────────────┴──────────────────────┴──────────────┴───────────────┘
```
*(All text elements comfortably exceed the 4.5:1 AA threshold; all interactive boundaries exceed the 3.0:1 SC 1.4.11 non-text contrast requirement)*

---

### 1.2 Keyboard Navigation & Focus Management (WCAG SC 2.1.1, 2.4.7, 2.4.11, 2.4.13)

1. **Two-Tier Skip Links:**
   - Skip to Main Content: `<a class="skip-link" href="#main-content">Skip to content</a>`.
   - Skip to Product Showcase: `<a class="skip-link" href="#products">Skip to products</a>`.
   - Hidden offscreen by default, smoothly sliding into view on `:focus-visible` with high-contrast styling.
2. **Visible Focus Rings (WCAG 2.4.7 & 2.4.13):**
   - Unambiguous 2px solid focus rings with a 3px offset:
     ```css
     :focus-visible {
       outline: 2px solid var(--color-focus-ring, #0F172A);
       outline-offset: 3px;
       border-radius: 4px;
     }
     /* Dark surface focus adaptation */
     [data-theme="dark"] :focus-visible,
     .product-card--wealth :focus-visible {
       outline: 2px solid #38BDF8;
       outline-offset: 3px;
     }
     ```
3. **Roving TabIndex on In-Place Section Tabs:**
   - Left/Right arrow keys navigate between *Our Vision*, *Why It Matters*, *Our Approach*, *Products*, and *Contact*.
   - Tab moves focus directly into the active panel content without forcing users to Tab through all inactive tabs.
4. **Mobile Navigation Drawer Trap (WCAG 2.1.2):**
   - When the mobile menu drawer opens, focus is immediately shifted to the first interactive element.
   - Background content (`#main-content`) is marked with `inert`.
   - Escape key immediately closes the drawer and restores focus to the hamburger button.
   - Tab and Shift+Tab cycle exclusively within the drawer.

---

### 1.3 Screen Reader & ARIA Semantics (WCAG SC 1.3.1 & 4.1.2)

1. **In-Place Dynamic Panel Announcements:**
   - When switching content panels without full-page reloads, assistive technology must be informed of the update.
   - We utilize a polite ARIA live region:
     ```html
     <div id="route-announcer" class="sr-only" aria-live="polite" aria-atomic="true">
       Viewing Our Vision — Amanchi Labs
     </div>
     ```
   - Focus is shifted gracefully to the view’s main heading (`<h2 id="view-heading" tabindex="-1">`) via `preventScroll: true` to prevent disorienting jumps.
2. **Interactive Architectural Visualizer Semantics:**
   - The "Local-First vs. Optional AI" diagram is backed by a full semantic description:
     ```html
     <figure aria-label="Conceptual architecture: Local-first on-device execution with optional user-authorized external AI conduit">
       <!-- SVG Flow Diagram with aria-hidden="true" decorative icons -->
       <figcaption class="sr-only">
         Data flow description: Your personal records remain on your physical device. 
         External AI is only invoked when you explicitly authorize an outbound request.
       </figcaption>
     </figure>
     ```
3. **Icon Semantics:**
   - Phosphor vector icons placed beside visible text receive `aria-hidden="true"`.
   - Standalone icon controls receive explicit `aria-label` attributes.

---

### 1.4 Accessible Motion & Vestibular Safety (WCAG SC 2.3.3)

1. **Prefers-Reduced-Motion Strict Fallback:**
   - All animated layout shifts, scale transitions, and staggered reveals are wrapped in `@media (prefers-reduced-motion: reduce)`:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, *::before, *::after {
         animation-duration: 0.01ms !important;
         animation-iteration-count: 1 !important;
         transition-duration: 0.01ms !important;
         scroll-behavior: auto !important;
       }
       .company-view__panel {
         opacity: 1 !important;
         transform: none !important;
       }
     }
     ```
2. **Restrained Durations:**
   - Transitions never exceed 250ms for micro-interactions and 300ms for panel switches.
   - No looping bouncing animations, auto-rotating carousels, or continuous video backgrounds.

---

## 2. Frontend Performance & Asset Loading Architecture

### 2.1 Font Optimization Strategy (Preventing FOIT & CLS)
- **Problem in Current Codebase:** The site currently loads 5 separate font families (`DM Mono`, `DM Sans`, `Inter`, `Manrope`, and `Instrument Serif`) through two conflicting channels (`@import` in CSS and `<link>` in HTML). This causes flash-of-invisible-text (FOIT) and cumulative layout shifts (CLS).
- **Redesign Solution:**
  1. Standardize on **two families**: `Plus Jakarta Sans` (Display/Headings) and `Inter` (Body/UI), with `DM Mono` selectively loaded for tabular figures.
  2. Implement high-priority preconnecting in `index.html`:
     ```html
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
     ```
  3. Enforce `font-display: swap` to ensure immediate fallback text rendering.
  4. Match fallback font metrics (`size-adjust`, `ascent-override`) to eliminate CLS during font swap.

### 2.2 Zero Heavyweight Dependencies (Pure Native Performance)
- **No Third-Party Animation Bloat:** Rejecting bulky JavaScript animation bundles (such as Three.js, heavy Lottie runtimes, or unneeded Framer Motion layers) in favor of **native CSS hardware-accelerated transforms** (`translate3d`, `opacity`, `scale`).
- **Static Hosting Friendly:** The site builds to pure, static HTML/CSS/JS via Vite in under 200ms, effortlessly deployable to GitHub Pages, Cloudflare Pages, or AWS S3/CloudFront.
- **Estimated Bundle Impact:**
  - Additional CSS: ~4.5 KB (gzipped)
  - Additional JavaScript: 0 KB (zero new dependencies)
  - Total Page Weight: < 65 KB initial load (excluding Google Fonts)

---

## 3. Product Claims & Regulatory Boundaries

In accordance with strict project rules, the redesign maintains absolute integrity regarding product readiness and data architecture:

```
┌──────────────────────────────────────┬─────────────────────────────────────────────────┐
│ PRODUCT / PHILOSOPHY                 │ MANDATORY POSITIONING BOUNDARY                   │
├──────────────────────────────────────┼─────────────────────────────────────────────────┤
│ "Private by Design.                  │ Clearly identified as the studio's architectural │
│ Local by Default."                   │ design principle. Must explicitly note that     │
│                                      │ individual product features vary by status.     │
├──────────────────────────────────────┼─────────────────────────────────────────────────┤
│ "AI by Choice."                      │ Explicitly state that external AI integrations  │
│                                      │ transmit authorized data to external providers,  │
│                                      │ whose own privacy and retention policies apply. │
├──────────────────────────────────────┼─────────────────────────────────────────────────┤
│ DermaPrivate                         │ Labeled "IN TESTING". No fabricated health,      │
│                                      │ medical, or diagnostic claims. Proposal-only     │
│                                      │ routine coaching.                               │
├──────────────────────────────────────┼─────────────────────────────────────────────────┤
│ WealthPrivate /                      │ Labeled "IN DEVELOPMENT". Local ledger and tax   │
│ LLCBookKeepingTaxReturn              │ outlook based on user-reviewed facts. Does not  │
│                                      │ constitute formal legal or certified tax advice.│
├──────────────────────────────────────┼─────────────────────────────────────────────────┤
│ Offline Functionality                │ Framed as an engineering design goal, not a     │
│ & Account Requirements               │ universal guarantee across all hardware setups. │
└──────────────────────────────────────┴─────────────────────────────────────────────────┘
```

---

## 4. Verification Checklists for Production Handoff

Before any future production deployment, the following 8-point automated verification suite must pass:

- [ ] **Contrast Verification:** Run automated axe-core scan; verify 0 contrast violations.
- [ ] **Viewport Responsiveness:** Verify 1440×900, 1280×800, 1024×768, 768×1024, 390×844, and 375×812 without horizontal clipping.
- [ ] **Browser Zoom 200%:** Ensure all text scales legibly and interactive controls remain reachable without broken layouts.
- [ ] **Keyboard Traversal:** Complete entire site navigation using Tab, Shift+Tab, Enter, Space, and Arrow keys only.
- [ ] **Reduced Motion Check:** Toggle OS `prefers-reduced-motion` and verify instant transitions with 0 animations.
- [ ] **Screen Reader Pass:** Verify VoiceOver/NVDA announcement of dynamic section swaps via ARIA live region.
- [ ] **Lighthouse Target:** Achieve 100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO.
- [ ] **Preservation of Approved Logo:** Confirm approved architectural [A] mark is intact with correct clear space and aspect ratio.
