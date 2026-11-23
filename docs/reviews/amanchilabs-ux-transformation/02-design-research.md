# Amanchi Labs Website Redesign — Phase B: Design Research

**Document:** `02-design-research.md`  
**Date:** November 23, 2026  
**Author:** Agency Review Team  
*Creative Director, Senior Brand Identity Designer, Principal UI/UX Designer, Typography & Visual Systems Expert, Interaction & Motion Designer, Frontend Design Architect, Accessibility Specialist, Conversion & Product Marketing Strategist*  
**Skill Invocation:** `ui-ux-pro-max` (Installed at `.agents/skills/ui-ux-pro-max/`)  

---

## 1. Mandatory Skill Invocation Record

In accordance with project requirements, the installed `ui-ux-pro-max` skill was invoked and queried across multiple design intelligence domains. The system and domain search results directly shaped the design research, typography selection, color palette modeling, component layout patterns, motion curves, and accessibility boundaries.

### 1.1 Executed CLI Search Queries & Retrieved Data

```bash
# 1. Full Design System Generation
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "privacy personal AI technology studio" --design-system -p "Amanchi Labs" -f markdown

# 2. Style Research: Studio Aesthetics & Visual Models
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "minimalism" --domain style -n 4
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "software studio minimalism dark mode" --domain style -n 5
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style -n 2
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "bento" --domain style -n 2

# 3. Typography & Google Fonts Research
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "modern tech" --domain typography -n 5
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "minimal" --domain typography -n 5
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "saas" --domain typography -n 5
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "Sora" --domain google-fonts
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "Manrope" --domain google-fonts
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "Outfit" --domain typography -n 3

# 4. Color Palette Research
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "fintech" --domain color -n 2
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "security" --domain color -n 2
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "minimal" --domain color -n 2

# 5. Landing Structure & Section Ordering
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "Bento Grid Showcase" --domain landing

# 6. Motion Timing, Easing & Reduced-Motion Contracts
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "scroll reveal" --domain gsap -n 2
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "Page Transition" --domain gsap -n 3

# 7. UX Guidelines & Accessibility Thresholds
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "tabs navigation focus" --domain ux -n 2
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "reduced-motion animation" --domain ux -n 2
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "contrast ratio" --domain ux -n 2
```

### 1.2 Explicit Influence of `ui-ux-pro-max` on the Redesign

| `ui-ux-pro-max` Principle / Guideline | Specific Influence on Amanchi Labs Redesign |
| :--- | :--- |
| **Landing Pattern:** `bento-grid-showcase`<br>*(Section order: Hero > Bento Grid (Key Features) > Detail Cards > CTA)* | Replaced the document-style text listing with an asymmetric, high-density Bento Showcase. WealthPrivate and DermaPrivate are framed as hero cards with live feature highlights and trust badges. |
| **Style ID:** `minimalism-and-swiss-style`<br>*(Grid-based, high contrast, clean sans-serif, geometric clarity)* | Serves as the backbone of **Concept A**. Eliminates decorative clutter and replaces weak 1px borders with intentional architectural borders and precise spacing tokens. |
| **Style ID:** `dark-mode-oled` & `glassmorphism`<br>*(Deep black `#0A0D14`, subtle border `rgba(255,255,255,0.08)`, frosted glass `backdrop-filter: blur(16px)`)* | Directly informs **Concept B**. Establishes the deep obsidian studio atmosphere, layered card elevations, and glowing boundary indicators for local vs. external AI. |
| **Motion Timing:** `Page Transition` (Subtle Tier)<br>*(Duration 200–250ms, easing `power1.inOut` or `power1.out`, asymmetric exit-faster-than-enter)* | Informs the dynamic in-place section switching. Panel exits resolve in 120ms; new content fades and settles in 220ms, creating an instantaneous, application-grade feel. |
| **Accessibility Contract:** `contrast ratio` & `reduced-motion`<br>*(Minimum 4.5:1 text, 3.0:1 non-text UI borders, zero bounce/parallax under `prefers-reduced-motion`)* | Governs all proposed color tokens. Every text color meets or exceeds 5.5:1; UI borders achieve 3.2:1 against adjacent surfaces; all motion falls back to instant opacity or static layouts. |

---

## 2. Competitive & Peer Studio Benchmark

To position Amanchi Labs at the pinnacle of modern software studios, we analyzed industry leaders renowned for craftsmanship, privacy, and technical sophistication:

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ STUDIO / PRODUCT │ DESIGN SIGNATURES                    │ KEY TAKEAWAYS FOR AMANCHI LABS│
├──────────────────┼──────────────────────────────────────┼───────────────────────────────┤
│ Linear           │ Obsidian dark mode, ultra-crisp      │ Prove speed and precision     │
│ (linear.app)     │ geometric sans typography, subtle    │ through tight micro-spacing,  │
│                  │ gradient borders, keyboard shortcuts │ keyboard fluidity, and        │
│                  │ tactile feedback.                    │ zero decorative fluff.        │
├──────────────────┼──────────────────────────────────────┼───────────────────────────────┤
│ Raycast          │ Spotlight floating HUD, modular      │ Treat the interface as an     │
│ (raycast.com)    │ command extensions, dark-frosted     │ operating system panel rather │
│                  │ glass, developer-grade clarity.      │ than a traditional website.   │
├──────────────────┼──────────────────────────────────────┼───────────────────────────────┤
│ Dynamic.xyz      │ Architectural grid lines, monospaced │ High-trust security badges,   │
│                  │ security badges, interactive local   │ verified cryptographic status,│
│                  │ verification, crisp sans typography. │ clean white/slate contrast.   │
├──────────────────┼──────────────────────────────────────┼───────────────────────────────┤
│ Craft.do         │ Elegant card elevation, refined      │ Shows how productivity tools  │
│                  │ human touch, clean modular bento     │ can feel deeply personal and  │
│                  │ canvases, warm natural accents.      │ warm without losing power.    │
├──────────────────┼──────────────────────────────────────┼───────────────────────────────┤
│ Apple Developer  │ System-grade typography, subtle      │ Premium device framing,       │
│ & Privacy Pages  │ hardware silhouettes, clear privacy  │ privacy iconographic clarity, │
│                  │ iconography, restrained motion.      │ unmistakable trust signals.   │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Studio Philosophy Alignment & Visual Semantics

Amanchi Labs is not an anti-AI company, nor is it a legacy offline utility. It is an **AI-enabled personal software studio** that redefines how users interact with intelligence.

### 3.1 The Three Core Tenets Translated to Visual Language

#### Tenet 1: "Private by Design. Local by Default."
- **Visual Translation:** **Architectural Containment & Solid Boundaries.**
- On-device processing is visually represented by solid, crisp, enclosing borders (`border: 1px solid var(--border-local)`).
- The device represents a sovereign territory: personal financial ledgers (WealthPrivate) and skincare logs (DermaPrivate) sit inside a secure, grounded card container.
- Badges: `[● On-Device Storage]` and `[🔒 Local Processing]` rendered in sharp, high-legibility uppercase tags with subtle green/emerald status pips.

#### Tenet 2: "AI by Choice."
- **Visual Translation:** **Gated Conduits & Distinct Visual Semantics.**
- External AI integrations are represented not as background tracking or silent telemetry, but as **conscious user actions**.
- Visual conduit: While local processing uses solid lines, optional AI conduits use **refined dashed or glowing directional lines** (`border-style: dashed; stroke-dasharray: 4 4`).
- Explanatory UI: Explicit badges stating `[⚡ Optional AI Inference — On Your Request]` with clear provider disclosure tooltips.

#### Tenet 3: "Your Data. Your Device. Your Control."
- **Visual Translation:** **Deterministic Control Surfaces & Sovereign Aesthetics.**
- Elimination of dark patterns, hidden clouds, and fake synchronization spinners.
- The UI features clear export, local backup, and device-bound status indicators.
- Clean, tactile switches and tab controls that respond instantly without cloud latency.

---

## 4. Modern Technology Studio Conventions

Our research reveals five universal design conventions that distinguish modern elite software studios from generic B2B SaaS templates:

### 4.1 The Unified Application Shell (Goodbye to Document-Style Pages)
- **Convention:** Modern studios avoid making visitors scroll through a 5,000px single-page vertical scroll document. Instead, they present a **commanding, self-contained viewport experience** with persistent studio framing and smooth in-place panel switching.
- **Application to Amanchi Labs:** The company introduction remains persistent in a sleek header or sidebar, while the core canvas seamlessly switches between **Our Vision**, **Why It Matters**, **Our Approach**, **Products**, and **Contact**.

### 4.2 Bento Grid Architecture
- **Convention:** As cataloged in `ui-ux-pro-max` (`bento-grid-showcase`), asymmetric bento grids allow multi-dimensional storytelling—combining high-level value propositions, live interactive widgets, micro-specs, and product mockups in a single, scan-friendly composition.
- **Application to Amanchi Labs:** In the Products view, instead of plain text bullets, WealthPrivate and DermaPrivate occupy prominent hero bento tiles with realistic conceptual interfaces.

### 4.3 Intentional Whitespace vs. Vacuum Whitespace
- **Convention:** Elite minimalism is not empty space; it is **calibrated negative space** anchored by strong focal points, architectural grid lines, and crisp typography.
- **Application to Amanchi Labs:** We replace the vast 500px empty right margin with a balanced two-column composition: narrative on the left (45% width), dynamic visual preview / architectural diagram / product widget on the right (55% width).

### 4.4 High-Precision Visual Depth (Glassmorphism & Layering)
- **Convention:** In `ui-ux-pro-max` (`glassmorphism`), frosted glass surfaces (`backdrop-filter: blur(16px)`), subtle 1px border highlights, and dark-to-light gradient borders create a tactile sense of depth without distracting shadows.
- **Application to Amanchi Labs:** Pinned navigation bars, product cards, and feature chips leverage subtle backdrop blurs and micro-borders, making the studio feel premium and cutting-edge.

### 4.5 Restrained Kinetic Energy (Micro-Interactions)
- **Convention:** As specified in `ui-ux-pro-max` (`motion.csv`), professional software UI uses subtle, rapid transitions (200–250ms) with `power1.out` easing. It avoids bouncy, playful cartoon physics in favor of mechanical precision.
- **Application to Amanchi Labs:** Tab transitions, hover elevations, and disclosure reveals feel instantaneous and snappy, reinforcing the feeling of on-device local execution.

---

## 5. Token Architecture: Primitive, Semantic, and Component Tiers

To ensure consistent implementation across all three creative concepts, we designed a robust, 3-tier CSS custom property token architecture:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. PRIMITIVE TOKENS (Raw values, neutral scales, palettes)  │
│    --color-slate-900: #0D1117;  --color-emerald-500: #10B981│
├─────────────────────────────────────────────────────────────┤
│ 2. SEMANTIC TOKENS (Design meaning, mode-aware)             │
│    --surface-canvas: var(--color-slate-900);                │
│    --text-primary: #FFFFFF;  --border-subtle: rgba(...);    │
├─────────────────────────────────────────────────────────────┤
│ 3. COMPONENT TOKENS (Scoped component specifications)       │
│    --card-bg: var(--surface-card);                          │
│    --nav-pill-active: var(--color-accent);                  │
└─────────────────────────────────────────────────────────────┘
```

This research provides the empirical foundation for **Phase C: Three Creative Directions** and the **Typography Evaluation**.
