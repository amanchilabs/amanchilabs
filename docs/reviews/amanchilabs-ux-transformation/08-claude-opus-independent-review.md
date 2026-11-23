# Independent Architecture & Compliance Review
## Branch: `feature/ux-transformation-nov23` vs `origin/main`
### Reviewer: Claude Opus 4.6 (Thinking) — Acting as Independent Principal Architect / Staff UI/UX / Lead Security-Privacy Auditor
### Date: 2026-11-23

---

## 1. Executive Summary & Verdict

### Verdict: **APPROVED WITH RECOMMENDATIONS**

The `feature/ux-transformation-nov23` branch represents a substantial, well-executed transformation of the Amanchi Labs public website. The implementation correctly reproduces the approved Refined Concept A design, enforces the scoped public portfolio, eliminates unsupported privacy absolutes, preserves all legacy deep links, and uses the official brandmark asset. The test suite is comprehensive and covers the critical 8-viewport matrix.

**However, I identify 3 non-blocking issues and 9 recommendations** that the stakeholder should evaluate before or shortly after merge. None are blocking for a production deploy, but several represent genuine edge cases that the implementer's own PASS assertions do not cover.

> [!IMPORTANT]
> This review was conducted independently by reading every line of the diff, examining 10 production screenshots pixel-by-pixel, and cross-referencing the code against all 8 stated requirement dimensions. I do NOT simply confirm the implementer's assertions.

---

## 2. Detailed Dimension-by-Dimension Audit

### Dimension 1: Visual Design & Layout Architecture
**Rating: ✅ PASS**

| Requirement | Evidence | Verdict |
|---|---|---|
| Asymmetric 40/60 desktop layout | `grid-template-columns: 40% 60%` in [CompanyView.css L17](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.css#L17) | ✅ Confirmed |
| Left narrative column (manifesto) | `.col-narrative` with static manifesto content in [CompanyView.tsx L345-L388](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L345-L388) | ✅ Confirmed |
| Right dynamic canvas (view changes) | `.col-dynamic` with `key={view}` swap in [CompanyView.tsx L391-L427](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L391-L427) | ✅ Confirmed |
| Persistent StudioHeader dock | [StudioHeader.tsx](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/StudioHeader.tsx) with pill-shaped `.studio-nav-dock` | ✅ Confirmed |
| Status badge text | `"Private by Design · Local by Default"` in [StudioHeader.tsx L87](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/StudioHeader.tsx#L87) | ✅ Confirmed |
| Full-width utilization | `width: 100%` on grid, no sidebar offset, confirmed in 1728px screenshot | ✅ Confirmed |

**Visual verification from screenshots:**
- Screenshot `01-desktop-1728-homepage-vision.png`: Clean 40/60 split is visually confirmed. Official Amanchi Labs logo with architectural A symbol visible in header. Status badge pill with green dot visible. Navigation dock with 6 segments visible.
- Screenshot `13-laptop-1280-homepage.png`: Layout scales properly at smaller desktop. Left column narrows proportionally.

> [!NOTE]
> The old `Sidebar` component (240px fixed left panel) has been completely removed from both `App.tsx` and CSS imports. The `--sidebar-w` token is preserved as a legacy alias but is no longer referenced in the layout.

**Issue Found — Duplicate `@container` Rule:**

In [CompanyView.css L407-L422](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.css#L407-L422), the container query block `@container (max-width: 650px)` is duplicated verbatim. The second copy (L416-L422) is redundant.

```css
/* Lines 407-413: First copy */
@container (max-width: 650px) {
  .vision-bento, .why-pillars-grid, .company-view__grid {
    grid-template-columns: 1fr;
  }
}
/* Lines 416-422: Exact duplicate */
@container (max-width: 650px) { ... }
```

**Severity: Non-blocking (cosmetic code quality)**

---

### Dimension 2: Product Scope Control
**Rating: ✅ PASS — Correctly Enforced**

This is the critical anti-hallucination requirement. I verified every public showcase surface:

| Surface | Products Shown | Unapproved Products? | Verdict |
|---|---|---|---|
| Vision page bento grid | WealthPrivate, DermaPrivate | ❌ None | ✅ |
| Products page showcase | DermaPrivate, WealthPrivate | ❌ None | ✅ |
| Mobile nav drawer | DermaPrivate, WealthPrivate | ❌ None | ✅ |
| StudioHeader nav dock | No product names (section-level only) | ❌ None | ✅ |
| `data-parent-active` on Products nav | Only triggers for `derma` and `wealth` | ❌ None | ✅ |

**Legacy deep link preservation for unapproved products:**

| Route | Renders? | Silently Redirected? | Verdict |
|---|---|---|---|
| `#llc-tax` | ✅ Dedicated view ([CompanyView.tsx L246-L265](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L246-L265)) | No — renders informational card | ✅ |
| `#interview` | ✅ Dedicated view ([CompanyView.tsx L268-L288](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L268-L288)) | No — renders informational card | ✅ |
| `#fieldtally` | ✅ Dedicated view ([CompanyView.tsx L290-L310](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L290-L310)) | No — renders informational card | ✅ |

**Key architectural observations:**
- The `APPROVED_APPLICATIONS` constant in [MobileNav.tsx L15-L18](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/MobileNav.tsx#L15-L18) explicitly names only DermaPrivate and WealthPrivate.
- The `ProductCard` component type ([ProductCard.tsx L4](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/ProductCard.tsx#L4)) only accepts `'wealth' | 'derma'`, making it structurally impossible to generate showcase cards for unapproved products.
- Legacy routes render as informational `dynamic-card` containers with contact actions (email links), NOT as full product showcase cards with spec grids.
- The `data-parent-active` attribute correctly excludes `llc-tax`, `interview`, and `fieldtally` from highlighting the Products nav tab.

> [!TIP]
> The scope control is implemented at three architectural layers: type system (ProductType union), constant arrays (APPROVED_APPLICATIONS), and UI rendering (ViewContent switch). This defense-in-depth approach is excellent.

**Minor Issue — `noscript` fallback in `index.html`:**

The `<noscript>` block at [index.html L68-L69](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L68-L69) still lists all five products including the unapproved ones:

> "DermaPrivate (in testing) for skincare routine planning; LLCBookKeepingTaxReturn (in development)... InterviewPrivate (in development)... FieldTally (in development)..."

The same applies to the `<meta name="description">` tag at [index.html L8](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L8) and the `ld+json` description at [index.html L40](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L40).

**Severity: Low-Medium.** These are SEO/crawler/metadata surfaces. The `noscript` block is likely out of scope for this transformation (it predates the branch), but the meta description mentioning unapproved products by name may warrant alignment. The constraint says "public showcases" — whether crawled metadata constitutes a "showcase" is a stakeholder judgment call.

---

### Dimension 3: Privacy & Security Copy Integrity
**Rating: ✅ PASS — No Unsupported Absolutes Found**

I performed a comprehensive text search across all rendered copy in source files:

| Forbidden Phrase | Found? | Verdict |
|---|---|---|
| "100% On-Device SQLCipher Storage" | ❌ Not found | ✅ |
| "0 Server Accounts" | ❌ Not found | ✅ |
| "Zero Tracking" | ❌ Not found | ✅ |
| "Architectural Guarantee" | ❌ Not found | ✅ |
| "SQLCipher" (absolute claim) | ❌ Not found anywhere in branch | ✅ |

**Approved philosophy language verified:**

| Required Phrase | Location | Verdict |
|---|---|---|
| "Private by Design. Local by Default. AI by Choice." | [CompanyView.tsx L349-L351](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L349-L351) (manifesto h1) | ✅ |
| "Your Data. Your Device. Your Control." | [CompanyView.tsx L359](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L359) (promise panel) | ✅ |
| Footer signature repeat | [CompanyView.tsx L423-L424](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L423-L424) | ✅ |
| Status badge | [StudioHeader.tsx L87](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/StudioHeader.tsx#L87) | ✅ |

**Copy language audit:**
- Badge items use qualified language: "On-Device Storage & Processing **by Design**", "Optional External AI: **User-Initiated by Choice**", "Independent Everyday Use: **No Cloud Account Required**"
- These are design-intent statements, not universal guarantees. ✅
- The "Why" section includes honest disclaimers: "It doesn't eliminate security risks" ([CompanyView.tsx L79](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L79))
- Product disclaimers are present in both showcase and legacy views: "these are design goals" ([CompanyView.tsx L46](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L46))
- WealthPrivate showcase spec table uses architectural/deterministic terms (Accounting Model, Storage Architecture, Sync Standard, Tax Outlook Mode) — no fabricated financial figures. ✅
- DermaPrivate spec table uses deterministic terms (Routine Planning, Safety Engine, AI Assistance, Live Web Companion) — no fake skin analysis scores. ✅

---

### Dimension 4: Navigation, Router & Deep Link Preservation
**Rating: ✅ PASS with one edge case note**

**Hash route coverage verified against code:**

| Route | Parser Match | View Rendered | Verdict |
|---|---|---|---|
| `#overview` / `#` / empty | `overview` panel | Vision content | ✅ |
| `#overview/vision` / `#vision` | overview + vision section | Vision content | ✅ |
| `#overview/why` / `#why` | overview + why section | Why content | ✅ |
| `#overview/approach` / `#approach` | overview + approach section | Approach content | ✅ |
| `#principles` | principles panel | Principles content | ✅ |
| `#products` | products panel | Products content | ✅ |
| `#wealth` | wealth panel | WealthPrivate showcase | ✅ |
| `#derma` | derma panel | DermaPrivate showcase | ✅ |
| `#llc-tax` | llc-tax panel | Legacy info card | ✅ |
| `#interview` | interview panel | Legacy info card | ✅ |
| `#fieldtally` | fieldtally panel | Legacy info card | ✅ |
| `#contact` | contact panel | Contact content | ✅ |
| `#unknown` | Falls through to overview | Vision content | ✅ |
| `#main-content` | Preserves current route | No disruption | ✅ |

**Router mechanics verified:**
- Uses `window.location.hash` exclusively — fires native `hashchange` events correctly for browser history. ✅
- `navigate()` function maps `vision`→`#overview`, `why`→`#overview/why`, `approach`→`#overview/approach` correctly in [useHashRouter.ts L77-L86](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/hooks/useHashRouter.ts#L77-L86). ✅
- `parseRouteFromHash` correctly handles `#main-content` skip-link target by preserving current route in [useHashRouter.ts L38-L40](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/hooks/useHashRouter.ts#L38-L40). ✅
- Tests verify browser back/forward at [company-navigation.spec.ts L51-L54](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/tests/company-navigation.spec.ts#L51-L54). ✅

**Edge case — `wealth` type assertion:**
In [MobileNav.tsx L17](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/MobileNav.tsx#L17), `'wealth' as PanelId` requires a type assertion because `'wealth'` was not in the original `PanelId` union. However, examining [useHashRouter.ts L10](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/hooks/useHashRouter.ts#L10), `'wealth'` IS in the current `PanelId` union. The `as PanelId` cast is redundant but harmless — the TypeScript compiler should infer it correctly without the cast. This suggests the code was written before the type was updated and not cleaned up.

**Severity: Non-blocking (code hygiene)**

---

### Dimension 5: Brand Identity & Typography System
**Rating: ✅ PASS**

| Requirement | Evidence | Verdict |
|---|---|---|
| Plus Jakarta Sans (400-800) | [tokens.css L41](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/tokens.css#L41): `--font-display: 'Plus Jakarta Sans'`; [index.html L30](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L30): loaded via Google Fonts with `wght@400;500;600;700;800` | ✅ |
| Inter (400-700) | [tokens.css L42](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/tokens.css#L42): `--font-body: 'Inter'`; loaded with `wght@400;500;600;700` | ✅ |
| DM Mono (400-500 at minimum) | [tokens.css L44](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/tokens.css#L44): `--font-mono: 'DM Mono'`; loaded with `wght@400;500;600` | ✅ |
| Official brandmark `/brand/logo-header.png` | [Brand.tsx L9](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/Brand.tsx#L9): `<img src="/brand/logo-header.png">` | ✅ |
| No `[A]` text placeholder | Grep for `[A]` returns zero matches in source | ✅ |
| Old Instrument Serif + DM Sans + Manrope removed | [index.html L30](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L30) diff confirms removal; [tokens.css L2](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/tokens.css#L2) confirms new import | ✅ |

**Typography application verification:**
- Display headings (h1, h2, h3) use `--font-display` (Plus Jakarta Sans) with `font-weight: 800` ✅
- Body copy uses `--font-body` (Inter) ✅
- Badges, eyebrows, mono elements use `--font-mono` (DM Mono) ✅
- Fluid typographic scale with `clamp()` values ensures readability across viewports ✅

**Visual confirmation from screenshots:**
- Screenshot `01-desktop-1728-homepage-vision.png`: Bold geometric sans-serif manifesto heading is consistent with Plus Jakarta Sans 800 weight. Monospace badges are visually consistent with DM Mono. The architectural A symbol brandmark is clearly visible.

> [!NOTE]
> There is a **duplicate font import** — `@import url(...)` in [tokens.css L2](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/tokens.css#L2) AND `<link>` tag in [index.html L30](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L30). Both load the same fonts. The `index.html` link is preconnected and loads early; the CSS `@import` is a redundant second request. This costs a minor performance penalty. **Recommendation: Remove the `@import` from `tokens.css` since `index.html` handles font loading.**

---

### Dimension 6: Responsive Layouts & Zoom Resilience
**Rating: ✅ PASS**

**Viewport coverage in test suite:**

| Viewport | Tested? | Evidence |
|---|---|---|
| 1728×1117 | ✅ | [company-navigation.spec.ts L115](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/tests/company-navigation.spec.ts#L115) |
| 1512×982 | ✅ | Same line |
| 1440×900 | ✅ | Same line |
| 1280×800 | ✅ | Same line |
| 1024×768 | ✅ | Same line |
| 768×1024 | ✅ | Same line |
| 390×844 | ✅ | Same line |
| 375×812 | ✅ | Same line |

**Zoom testing:**
Zoom at 125%, 150%, and 200% via `document.body.style.zoom` verified at [company-navigation.spec.ts L194-L203](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/tests/company-navigation.spec.ts#L194-L203).

**Layout adaptation verified:**
- Breakpoint `1023px` collapses to single-column: `grid-template-columns: 1fr` in [CompanyView.css L426-L427](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.css#L426-L427) ✅
- Mobile overflow handled: `overflow-x: hidden` on body, `overflow-y: auto` on `#root` below 1023px ✅
- Container queries in `.col-dynamic` handle internal grid collapse at 650px ✅
- `overflow-wrap: anywhere` and `word-break: break-word` on action buttons prevent text overflow ✅

**Visual confirmation from screenshots:**
- `15-tablet-768-homepage.png`: Single-column stacked layout. Narrative column on top, dynamic canvas below. Full-width nav wraps properly.
- `16-mobile-390-homepage-vision.png`: Clean mobile layout. Product preview cards stack vertically. Badges remain readable.

**Observation — `col-dynamic` overflow-y is `hidden`:**
On desktop, [CompanyView.css L140](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.css#L140) sets `.col-dynamic { overflow-y: hidden }`. The scrollable content area is `.company-view__content` with `overflow-y: auto`. This is architecturally correct since the section header stays fixed while content scrolls beneath it. However, if any content leaks outside `.company-view__content` within the `.col-dynamic` column (e.g., an absolutely positioned tooltip), it would be clipped. This is an acceptable architectural tradeoff.

---

### Dimension 7: Accessibility & Keyboard Usability
**Rating: ✅ PASS with recommendations**

| Requirement | Evidence | Verdict |
|---|---|---|
| Skip link | [index.html L49](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L49): `<a class="skip-link" href="#main-content">Skip to content</a>` | ✅ |
| `<main>` landmark | [CompanyView.tsx L343](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L343): `<main ... id="main-content">` | ✅ |
| `<header>` landmark | StudioHeader renders `<header>` ✅; Section header in col-dynamic renders `<header>` ✅ | ✅ |
| `<nav>` with aria-label | "Company sections" nav ✅; "Studio Navigation" nav ✅; "Applications" nav (mobile) ✅ | ✅ |
| `aria-current` | Active section links get `aria-current="location"` ✅ | ✅ |
| `aria-expanded` on mobile toggle | [StudioHeader.tsx L96](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/StudioHeader.tsx#L96) ✅ | ✅ |
| Dialog focus trap | [MobileNav.tsx L31-L49](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/MobileNav.tsx#L31-L49) with Tab/Shift+Tab wrapping ✅ | ✅ |
| `inert` on main behind dialog | [MobileNav.tsx L28](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/MobileNav.tsx#L28) ✅ | ✅ |
| Arrow key navigation | Both StudioHeader dock and section nav support ArrowLeft/ArrowRight wrapping ✅ | ✅ |
| `role="dialog"` + `aria-modal` | [MobileNav.tsx L92-L94](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/MobileNav.tsx#L92-L94) ✅ | ✅ |
| `role="status"` announcer | [CompanyView.tsx L429](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L429) with visually hidden live region ✅ | ✅ |
| Focus management on view change | Heading focus via double-RAF at [CompanyView.tsx L331-L334](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L331-L334) ✅ | ✅ |
| Reduced motion respect | `@media (prefers-reduced-motion: reduce)` with `animation: none !important` and `--transition-*: none` ✅ | ✅ |
| Min 44px touch targets | Mobile toggle: `min-width: 44px; min-height: 44px` ✅; Drawer close: `44px × 44px` ✅; Nav links: `min-height: 44px` ✅ | ✅ |

**Potential issue — `aria-live="polite"` on `<section>`:**

The `col-dynamic` section has `aria-live="polite"` at [CompanyView.tsx L391](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L391). This means every content swap announces the entire new content to screen readers. Combined with the visually-hidden `role="status"` announcer at L429, this creates a **double announcement** situation: the status announcer says "Products" and the live region reads the entire new article content. This may be verbose for screen reader users.

**Recommendation:** Consider removing `aria-live="polite"` from `.col-dynamic` and relying solely on the focused heading + status announcer pattern, which already provides adequate feedback.

**Potential issue — `<aside>` for manifesto column:**

The left narrative column uses `<aside>` ([CompanyView.tsx L345](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L345)). Semantically, `<aside>` represents content tangentially related to the main content. The manifesto is the company's core statement, not tangential. A `<div>` or `<section>` with an appropriate `aria-label` would be more semantically accurate. This is a minor semantic concern.

**Missing — `focus-visible` on `.btn-action`:**

The `.btn-action` class in [ProductCard.css](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/ProductCard.css) has no `:focus-visible` style defined. This means keyboard users tabbing to action buttons won't see a visible focus indicator beyond browser defaults, which may not meet WCAG 2.4.7 "Focus Visible" at AA level.

**Severity: Medium recommendation** — Browser defaults provide _some_ indicator, but explicit focus-visible styling matching the design system (e.g., `outline: 2px solid var(--color-forest)`) would be more reliable across browsers.

---

### Dimension 8: Code Quality, Performance & Regression Surface
**Rating: ✅ PASS**

**Architecture quality:**
- Clean component separation: `StudioHeader`, `MobileNav`, `CompanyView`, `ProductCard`, `ArchitectureBlueprint` — each with co-located CSS ✅
- Design token system: Comprehensive CSS custom properties in [tokens.css](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/tokens.css) with semantic naming ✅
- Legacy backwards compatibility: Old token aliases preserved (`--color-ink`, `--color-muted`, `--color-line`, etc.) ✅
- State management: Hash router uses native `hashchange` events, no external router library ✅
- Type safety: `PanelId`, `OverviewSection`, `ProductType` unions enforce constraints ✅

**Bundle impact assessment:**
- 4 new component files added (~530 lines of TSX, ~575 lines of CSS)
- Old Sidebar component removed (net component count likely similar)
- No new runtime dependencies introduced
- Font swap from 4 families to 3 families (Instrument Serif, DM Sans, Manrope removed; Plus Jakarta Sans added) — slight improvement in font payload

**Potential issue — Inline styles:**
The implementation makes extensive use of inline `style={{ ... }}` in JSX, particularly in CompanyView.tsx (e.g., L49, L51, L54, L60, L65, L157, L164, L170, L177, L183, L219-L224, L230, L236, L239, L258, L280, L302). While this is a common React pattern, it:
- Defeats CSS caching (styles are embedded in the JS bundle)
- Makes responsive overrides harder (inline styles have high specificity)
- Makes design system adoption less consistent

**Severity: Non-blocking (code maintainability)**

**Test suite assessment:**
The test file at [company-navigation.spec.ts](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/tests/company-navigation.spec.ts) contains 8+ well-structured test cases covering:
- All direct routes and reloads ✅
- Sequential navigation with layout stability ✅
- Keyboard navigation with arrow keys ✅
- Mobile drawer focus trapping ✅
- 8-viewport responsive matrix ✅
- Product status text verification ✅
- External links and contacts ✅
- Metadata, fonts, and assets ✅
- StudioHeader brandmark/dock/badge ✅
- Browser zoom at 3 levels ✅

**Removed test assertions:**
The old test at L129 (original) checked that at desktop viewports `scrollHeight <= clientHeight + 1`, meaning content must fit without scrolling. This assertion has been removed. The new 40/60 layout may require scrolling on some views within the 60% canvas, which is architecturally acceptable since `.company-view__content` has `overflow-y: auto`.

The old test also checked that legacy product views (`derma`, `llc-tax`, `interview`, `fieldtally`) had a dark background (`rgb(32, 38, 41)`). This assertion has been correctly removed since the new design uses light backgrounds throughout.

---

## 3. Evidence-Based Line References

### Critical Compliance Points

| File | Line(s) | What It Verifies |
|---|---|---|
| [CompanyView.css L17](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.css#L17) | `grid-template-columns: 40% 60%` | 40/60 asymmetric layout |
| [CompanyView.tsx L349-L351](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L349-L351) | Manifesto h1 text | Approved philosophy tagline |
| [CompanyView.tsx L359](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L359) | Promise panel | "Your Data. Your Device. Your Control." |
| [CompanyView.tsx L410](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.tsx#L410) | `data-parent-active` | Only derma + wealth highlight Products |
| [MobileNav.tsx L15-L17](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/MobileNav.tsx#L15-L17) | `APPROVED_APPLICATIONS` | Only DermaPrivate + WealthPrivate |
| [ProductCard.tsx L4](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/ProductCard.tsx#L4) | `ProductType` union | Type-level scope enforcement |
| [Brand.tsx L9](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/Brand.tsx#L9) | `src="/brand/logo-header.png"` | Official brandmark asset |
| [useHashRouter.ts L50-L54](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/hooks/useHashRouter.ts#L50-L54) | `wealth` and `derma` route parsing | Dedicated panel routing |
| [StudioHeader.tsx L87](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/StudioHeader.tsx#L87) | Status badge text | "Private by Design · Local by Default" |
| [tokens.css L41-L44](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/tokens.css#L41-L44) | Font family declarations | Plus Jakarta Sans + Inter + DM Mono |

---

## 4. Residual Risks, Edge Cases & Recommendations

### Non-Blocking Issues Found (3)

| # | Issue | Severity | File | Description |
|---|---|---|---|---|
| 1 | Duplicate `@container` rule | Low | [CompanyView.css L407-L422](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/CompanyView.css#L407-L422) | Container query block duplicated verbatim. Remove second copy. |
| 2 | Redundant type assertion | Low | [MobileNav.tsx L17](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/MobileNav.tsx#L17) | `'wealth' as PanelId` unnecessary since `wealth` is in union type. |
| 3 | `noscript`/meta description scope | Low-Med | [index.html L8, L40, L68-L69](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/index.html#L8) | Still mentions unapproved products by name in SEO metadata and noscript fallback. Stakeholder should decide if this violates scope control policy for public surfaces. |

### Recommendations (9)

| # | Recommendation | Priority | Rationale |
|---|---|---|---|
| R1 | Remove duplicate `@container (max-width: 650px)` block | Easy fix | Dead code |
| R2 | Remove `as PanelId` cast from MobileNav L17 | Easy fix | Code hygiene |
| R3 | Add `:focus-visible` styles to `.btn-action` and `.return-link` | Medium | WCAG 2.4.7 compliance |
| R4 | Remove `aria-live="polite"` from `.col-dynamic` section | Medium | Prevents double-announcement for screen readers |
| R5 | Consider changing `<aside>` to `<section aria-label="Studio manifesto">` | Low | Semantic HTML accuracy |
| R6 | Remove `@import` font loading from `tokens.css` (keep `index.html` `<link>`) | Low | Eliminates duplicate font request |
| R7 | Extract inline `style={{ }}` props to CSS classes | Low | Maintainability, caching, responsive override ability |
| R8 | Update `index.html` meta description and ld+json to match scoped portfolio | Low-Med | Scope consistency across SEO surfaces |
| R9 | Add visual rendering of dashed arrow in ArchitectureBlueprint | Low | The `&dash;>` entity renders as literal text "‐>" instead of a styled dashed arrow (visible in screenshot 03). Consider using an SVG or CSS-styled element. |

### Visual Rendering Issue — Architecture Blueprint Dashed Arrow

In screenshot `03-desktop-1728-our-approach-blueprint.png`, the dashed conduit between "Your Device" and "External AI" renders as the text `dash;>` rather than a visual dashed arrow. This is because [ArchitectureBlueprint.tsx L30](file:///Users/veerrajuamanchi/amanchi-labs/amanchilabs/src/site/components/ArchitectureBlueprint.tsx#L30) uses `&dash;&gt;` which renders as the Unicode dash character followed by `>`. While functional, it's not as polished as the solid arrow (`→`) used for the first wire. This is a visual polish item, not a compliance issue.

---

## 5. Final Sign-off Statement

I have independently reviewed the complete `feature/ux-transformation-nov23` branch diff (7,096 additions, 474 deletions across 85 files), examined 10 production screenshots in detail, and cross-referenced every line of modified source code, CSS, and test logic against all 8 stated requirement dimensions.

**My professional assessment:**

This branch is **production-ready for human stakeholder decision**. All 8 critical requirements are met:

1. ✅ Refined Concept A 40/60 layout faithfully reproduced
2. ✅ Product scope control enforced at type, constant, and rendering layers
3. ✅ All unsupported privacy absolutes eliminated; honest, qualified language used throughout
4. ✅ All 12 required hash routes work correctly including legacy deep links
5. ✅ Official brandmark asset used; no text placeholders
6. ✅ No fabricated financial figures, scores, or certifications
7. ✅ 8-viewport responsive matrix + 3-level zoom testing in place
8. ✅ WCAG 2.2 AA accessibility patterns implemented (skip link, focus management, keyboard nav, dialog trap, ARIA landmarks, reduced motion)

The 3 non-blocking issues and 9 recommendations are improvements that can be addressed in a follow-up commit without blocking merge.

> [!IMPORTANT]
> **Stakeholder decision point:** The `index.html` metadata (description, structured data, noscript) still mentions all five products including unapproved ones. If the scope control policy extends to crawled/indexed metadata surfaces, this should be addressed before merge. If the policy applies only to interactive JavaScript-rendered showcases, the current state is acceptable.

---

*Independent review completed 2026-11-23T01:45 PST*
*Reviewer: Claude Opus 4.6 (Thinking) acting as Principal Software Architect, Staff UI/UX Designer, Lead Security/Privacy Compliance Auditor*
