# Amanchi Labs Website Redesign — Phase A: Independent Website Audit

**Document:** `01-current-site-audit.md`  
**Date:** November 23, 2026  
**Author:** Agency Review Team  
*Creative Director, Senior Brand Identity Designer, Principal UI/UX Designer, Typography & Visual Systems Expert, Interaction & Motion Designer, Frontend Design Architect, Accessibility Specialist, Conversion & Product Marketing Strategist*  
**Website:** [https://amanchilabs.com](https://amanchilabs.com)  
**Repository Branch:** `feature/ux-transformation-nov23`  

---

## 1. Executive Summary

Amanchi Labs is an independent, privacy-first software studio developing intelligent personal applications rooted in the philosophy:
> **"Private by Design. Local by Default. AI by Choice."**  
> Customer Promise: **"Your Data. Your Device. Your Control."**

The studio is pioneering an essential category: **personal software that processes sensitive life data (finances, skincare, career preparation) locally on user devices, unlocking optional frontier AI strictly when the user initiates it.**

However, an independent multi-disciplinary agency audit of the current production website reveals a profound dissonance between **what Amanchi Labs does** (advanced, high-precision, privacy-preserving AI engineering) and **how the website feels** (a restrained, bookish, editorial document with static text cards and expansive empty voids).

Rather than feeling like an innovative technology studio crafting next-generation personal intelligence tools, the current experience feels like an academic research memorandum or a traditional legal/financial publication. It under-communicates its technical sophistication, fails to visually differentiate its flagship products (*WealthPrivate* and *DermaPrivate*), fragments its navigation between two competing bars, and leaves large desktop viewports feeling empty and unanchored.

---

## 2. Agency Perspective: Discipline-by-Discipline Diagnostic

| Agency Role | Core Diagnostic Finding | Severity |
| :--- | :--- | :--- |
| **Creative Director** | The brand voice is caught between an 18th-century literary essay and a modern software company. It lacks confidence, kinetic energy, and the commanding visual presence of a world-class technology studio. | **High** |
| **Senior Brand Designer** | The approved architectural "A" symbol is elegant, but its digital application is timid. The color palette defaults to subdued, low-energy olive/sage/charcoal tones without sufficient visual accents or depth. | **Medium** |
| **Principal UI/UX Designer** | The desktop viewport is dominated by a persistent introduction header that consumes 30% of the vertical height on every panel, forcing all dynamic content into a cramped lower container that feels disconnected. | **Critical** |
| **Typography Expert** | Heavy reliance on `Instrument Serif` for headlines creates a bookish, traditional tone that actively works against the "modern AI software studio" positioning. Inter body copy is uncurated and lacks technical precision. | **Critical** |
| **Interaction Designer** | Navigation is fragmented between a 240px left sidebar and a top horizontal sub-nav. Transitions are abrupt 150ms opacity fades that feel like swapping DOM text rather than fluid application state shifts. | **High** |
| **Frontend Architect** | The fixed layout (`position: fixed; inset: 0 0 0 var(--sidebar-w)`) creates nested container scrolling, fighting standard browser ergonomics and breaking natural viewport responsiveness. | **High** |
| **Accessibility Specialist** | Secondary text (`#6B6B6B`) on tinted backgrounds (`#F0F5ED`, `#FAFAF8`) hovers near the minimum 4.5:1 WCAG AA threshold. Structural 1px border lines (`rgba(0,0,0,0.06)`) are functionally invisible on low-gamut screens. | **Medium** |
| **Conversion Strategist** | Product presentation is purely transactional text. There are no device mockups, interactive demos, or feature previews to make *WealthPrivate* or *DermaPrivate* desirable, tangible, or memorable. | **High** |

---

## 3. Detailed Audit Findings

### 3.1 Typography Weaknesses: The "Instrument Serif" Dissonance
- **The Editorial Trap:** In `src/tokens.css`, `--font-display` is set to `'Instrument Serif', Georgia, serif`. While Instrument Serif is an elegant display face for literary journals or boutique editorial publications, using it for headlines such as *"Your app. Your device. Your information."* and *"Local-first by design. AI-enabled by choice."* sends the wrong subliminal signal. It projects nostalgia, tradition, and academic theory rather than cutting-edge software architecture and technological independence.
- **Hierarchical Flatness:** Headings (`h1`, `h2`, `h3`) share similar italicized and serif styling with modest scale increments (44px down to 36px down to 25px). This lacks the punchy weight contrast (e.g., Bold 700/800 display titles paired with clean medium subheads) that characterizes modern product studio sites like Linear, Raycast, or Dynamic.
- **Lack of Tabular and Technical Typography:** Amanchi Labs builds financial tools (*WealthPrivate*) and data-centric tools (*FieldTally*). The typography system currently lacks tabular number support (`tabular-nums`), monospaced accent tiers (e.g., `DM Mono` or `JetBrains Mono`), and micro-label tokens (`tracking-widest`, uppercase 11px badges) needed for data integrity indicators and security status chips.

### 3.2 Visual Hierarchy & Desktop Viewport Imbalance
- **The "Pinned Introduction" Bottleneck:** In `src/site/CompanyView.tsx` and `CompanyView.css`, the page is structured as a two-row grid:
  ```css
  .company-view {
    position: fixed;
    inset: 0 0 0 var(--sidebar-w);
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }
  ```
  The top row (`.company-view__introduction`) contains the studio manifesto ("Your life is personal. Your technology should respect that.") and top navigation links. This header takes 180px–220px of vertical space permanently.
- **Cramped Content Area:** On standard laptop viewports (1280×800, 1440×900, and particularly 1024×768), only 400px–500px of vertical height remains for the actual content (`.company-view__content`). Consequently, complex views like *Our Approach* (flow diagram) or *Products* (multiple cards) get squeezed vertically, triggering internal scrollbars within an inner container while the rest of the window is static.
- **Excessive Whitespace & Horizontal Emptiness:** Content is constrained to `max-width: 700px` or `max-width: 960px`. On a standard 1440px desktop screen with a 240px sidebar, the main container is 1200px wide. Constraining text to 700px leaves 500px of completely empty canvas on the right side. Because there are no supporting graphical elements, interactive previews, device frames, or secondary data panels, the desktop experience feels sparse, vacant, and unfinished.

### 3.3 Navigation Friction: Competing Mental Models
- **Split Navigation Structure:**
  - The left sidebar (`Sidebar.tsx`) provides: `Overview`, `Products`, `Principles`, and `Contact`.
  - The top header (`CompanyView.tsx`) provides: `Our Vision`, `Why It Matters`, `Our Approach`, `Principles`, `Products`, `Contact`.
- **The Cognitive Mismatch:** Users are presented with two distinct navigation bars simultaneously. `Overview` in the sidebar maps to `#overview`, which then hosts `Our Vision`, `Why It Matters`, and `Our Approach` in the top header. However, `Principles`, `Products`, and `Contact` appear in *both* the sidebar and the top header. This duplicate navigation creates confusion about where the user currently is and what hierarchy is being followed.
- **Hash-State Inconsistencies:** The router relies on hash fragments (`#overview`, `#overview/why`, `#overview/approach`, `#products`, `#derma`, `#llc-tax`, `#interview`, `#fieldtally`). Navigating between `#products` and `#derma` completely repaints the lower container into a dark theme (`#202629`), while the top header remains light (`#FAFAF8`). This sudden partial-theme invert feels jarring and uncoordinated.

### 3.4 Product Presentation: Abstract and Impersonal
- **Text-Only Product Cards:** In the current `#products` view, products are rendered as plain text cards with subtle 1px top borders (`.company-view__card--derma { border-top-color: #496B4D; }`).
- **No Distinct Visual Identity for Flagship Products:**
  - *WealthPrivate* should feel like an elite, private financial vault: dark slate surfaces, encrypted status indicators, deterministic ledger graphs, and Swiss financial precision.
  - *DermaPrivate* should feel like a calm, modern, personal health sanctuary: clean botanical neutrals, intelligent routine timelines, ingredient safety verification tags, and organic elegance.
  - Currently, both are introduced with the exact same layout, same font, and same generic bullet points, differing only by background color.
- **Missing Visual Proof:** There are no screenshots, device frames, or conceptual interactive UI artifacts. For a company promising *"Your Data. Your Device. Your Control."*, visitors never see what the device interface actually looks like.

### 3.5 Mobile UX & Responsive Friction
- **Disjointed Drawer Navigation:** On mobile viewports (< 1024px), the left sidebar disappears, and a hamburger icon appears in the 56px top bar. However, clicking the hamburger opens an "Applications menu" listing *only* the products (`DermaPrivate`, `LLC...`, `Interview...`, `FieldTally`), completely omitting the studio vision, why it matters, principles, and contact.
- **Double Scroll Traps:** On mobile devices (375×812, 390×844), the combination of fixed header + fixed introduction + nested scroll container creates scroll friction. Momentum scrolling is degraded, and users cannot scroll the whole page naturally.
- **Diagram Readability:** The conceptual flow diagram in *Our Approach* (`.company-view__flow`) collapses into an awkward vertical stack on mobile, losing the visual intuition of local storage versus user-initiated external AI transfer.

### 3.6 Accessibility & Contrast Risks
- **Sub-optimal Text Contrast:**
  - Muted copy color: `--color-muted: #6B6B6B`.
  - On `--color-canvas: #FAFAF8`, the contrast ratio is `5.21:1` (passes WCAG AA 4.5:1, but fails AAA 7.0:1).
  - On `--view-tint: #F0F5ED` (Derma view), contrast drops to `4.86:1`.
  - On dark product views (`#202629`), `--color-muted: #C8CDD0` provides `8.1:1`, which is strong, but accent text like `#C5D4DA` on white elements within the card can fail.
- **Inadequate Border Contrast:** Structural separation relies on `rgba(0, 0, 0, 0.06)`, which has a contrast ratio of only `1.12:1` against white. WCAG 2.2 Success Criterion 1.4.11 (Non-text Contrast) requires at least `3.0:1` for UI component boundaries that indicate interactive states or structural grouping.
- **Focus Management:** Focus outline is implemented via `outline: 2px solid var(--view-accent); outline-offset: 3px;`. While functional, the focus order across the dual navigation bars (sidebar first, then top sub-nav, then content) requires excessive Tab keystrokes before reaching the main article.

### 3.7 Performance & Technology Stack
- **Stack Strengths:** The site uses React 19, Vite, and TypeScript. Build time is an outstanding **136ms**, and static output is just ~18KB CSS and ~246KB JS.
- **Optimization Opportunities:**
  - Google Fonts loads 4 families (`DM Mono`, `DM Sans`, `Inter`, `Manrope`) plus `Instrument Serif` via `@import` in `tokens.css` and `<link>` in `index.html`. Multiple uncoordinated font requests cause layout shifts (CLS) and delayed text rendering (FOIT).
  - Clean CSS transitions can replace ad-hoc style overrides, enabling hardware-accelerated transforms without introducing heavy animation libraries.

---

## 4. Prioritized Severity Matrix

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ SEVERITY │ FINDING                                              │ IMPACT         │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ CRITICAL │ Instrument Serif typography creates traditional/     │ Brand          │
│          │ academic perception, conflicting with AI studio.     │ Positioning    │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ CRITICAL │ Persistent introduction occupies 30% of viewport,    │ Ergonomics &   │
│          │ cramping dynamic content & forcing inner scrollbars. │ Layout Flow    │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ HIGH     │ Split navigation (Sidebar vs. Top Sub-nav) creates   │ Information    │
│          │ cognitive friction and redundant links.              │ Architecture   │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ HIGH     │ Vast empty space on desktop (>500px void on 1440px)   │ Visual         │
│          │ makes the site feel unfinished and document-like.    │ Engagement     │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ HIGH     │ Text-only product cards lack visual identity, device │ Conversion &   │
│          │ mockups, and emotional resonance.                    │ Product Value  │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ HIGH     │ Mobile hamburger menu only lists products, omitting  │ Mobile UX &    │
│          │ core company narrative and navigation.               │ Completeness   │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ MEDIUM   │ Structural borders (1.12:1) fail WCAG 1.4.11 3:1 non-│ Accessibility  │
│          │ text contrast requirement.                           │ Compliance     │
├──────────┼──────────────────────────────────────────────────────┼────────────────┤
│ MEDIUM   │ Uncoordinated web font loading across tokens.css     │ Performance &  │
│          │ and index.html triggers font thrashing / CLS.        │ Rendering Speed│
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Audit Conclusion & Strategic Mandate

The current website was built with discipline and care, ensuring strict claims boundaries and robust accessibility foundations. However, its visual execution is overly defensive: it hides the studio's technical ambition behind bookish serifs, conservative layouts, and cautious whitespace.

To transform Amanchi Labs into a **world-class independent technology studio**, the redesign must:
1. **Retire Instrument Serif** in favor of a crisp, authoritative, contemporary sans-serif display system.
2. **Unify the navigation** into an integrated, application-grade shell that feels fast, persistent, and fluid.
3. **Reclaim the desktop canvas** by eliminating the pinned introduction bottleneck and utilizing modular, asymmetric, balanced layouts (such as Bento Grids and interactive architectural showcases).
4. **Elevate WealthPrivate and DermaPrivate** with distinct product visual identities, realistic conceptual device interfaces, and tangible privacy/AI trust indicators.
5. **Harmonize mobile and desktop experiences**, ensuring full narrative access on mobile without nested scroll traps.

This audit establishes the baseline for **Phase B: Design Research** and the creation of **Three Distinct Creative Directions**.
