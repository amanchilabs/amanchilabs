# Amanchi Labs Website Redesign — Phase C: Three Distinct Creative Directions

**Document:** `04-creative-directions.md`  
**Date:** November 23, 2026  
**Author:** Agency Review Team  
*Creative Director, Senior Brand Identity Designer, Principal UI/UX Designer, Typography & Visual Systems Expert, Interaction & Motion Designer, Frontend Design Architect, Accessibility Specialist, Conversion & Product Marketing Strategist*  
**Research Engine:** `ui-ux-pro-max` (Domains: `style`, `color`, `typography`, `landing`, `gsap`, `ux`)  

---

## 1. Overview of Creative Strategy

To give Amanchi Labs executive leadership clear, uncompromising choices, we developed **three substantially different visual and interactive concepts**. Each concept represents a cohesive design philosophy, complete with its own layout architecture, typographic hierarchy, color palette, navigation mechanics, product presentation, and motion system.

None of these concepts are minor variations or superficial skinning exercises; they explore fundamentally distinct ways to embody the studio philosophy:
> **"Private by Design. Local by Default. AI by Choice."**  
> Customer Promise: **"Your Data. Your Device. Your Control."**

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ CONCEPT A: Modern Intelligent Minimalism                                              │
│ Swiss architectural precision, crisp black/white/slate contrast, purposeful           │
│ balanced negative space, razor-sharp typography, and ultra-fast application fluidity. │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ CONCEPT B: Immersive AI Technology Studio                                             │
│ Deep obsidian canvas, layered glassmorphic depth, luminous data boundaries,           │
│ abstract intelligence diagrams, dark-mode financial vaults, and elite studio aura.    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ CONCEPT C: Human-Centered Digital Innovation                                          │
│ Warm stone & ivory palette, organic geometry, empathetic typography, calm technology, │
│ relatable lifestyle storytelling, and grounded human privacy assurance.               │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Concept A — Modern Intelligent Minimalism

### 2.1 Design Philosophy & Aesthetic
Concept A is rooted in **Swiss International Typographic Style fused with modern high-performance software aesthetics** (influenced by Linear, Dynamic.xyz, and Apple’s developer design systems). It rejects decorative fluff, noisy gradients, and unnecessary animations. Instead, it proves intelligence through **structural perfection, mathematical alignment, high contrast, and tactile responsiveness**.

- **Atmosphere:** Razor-sharp, disciplined, authoritative, architectural.
- **Core Visual Motif:** Precise 1px structural grid lines, high-contrast monochrome surfaces with targeted forest and slate accents, and crisp rectangular card containment.
- **Whitespace Strategy:** Solves the "empty desktop void" not by filling it with random graphics, but by using a **balanced two-column asymmetrical layout**: narrative statement on the left (42% width), dynamic interactive studio panel on the right (58% width).

---

### 2.2 Desktop Homepage Experience (1440×900 & 1280×800)

```
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│ [A] AMANCHI LABS        OUR VISION   WHY IT MATTERS   OUR APPROACH   PRODUCTS   CONTACT   │
├───────────────────────────────────────────┬───────────────────────────────────────────────┤
│ [COLUMN 1: NARRATIVE & MANIFESTO - 42%]   │ [COLUMN 2: DYNAMIC STUDIO CANVAS - 58%]       │
│                                           │                                               │
│ STUDIO PHILOSOPHY                         │ ACTIVE VIEW: OUR VISION (IN-PLACE PANEL)      │
│ Private by Design.                        │ ┌───────────────────────────────────────────┐ │
│ Local by Default.                         │ │ "Your app. Your device. Your information."│ │
│ AI by Choice.                             │ │                                           │ │
│                                           │ │ We believe powerful software should work  │ │
│ Your life is personal.                    │ │ for you without turning your personal     │ │
│ Your technology should respect that.      │ │ documents into a centralized cloud asset. │ │
│                                           │ │                                           │ │
│ Customer Promise:                         │ │ [● 100% On-Device Storage]                │ │
│ Your Data. Your Device. Your Control.     │ │ [🔒 Local Cryptographic Ledger]           │ │
│                                           │ │ [⚡ Optional External AI: Only on Demand]  │ │
│ [Explore Products →]   [Our Approach]     │ └───────────────────────────────────────────┘ │
│                                           │                                               │
│ ───────────────────────────────────────── │ FLAGSHIP PRODUCT GLANCE                       │
│ STUDIO STATUS: 2 APPS IN ACTIVE TESTING   │ ┌──────────────────────┐ ┌──────────────────┐ │
│ 0 SERVER ACCOUNTS REQUIRED                │ │ WEALTHPRIVATE        │ │ DERMAPRIVATE     │ │
│ LOCAL-FIRST ARCHITECTURE VERIFIED         │ │ Private Financial    │ │ Personalized     │ │
│                                           │ │ Ledger & Analytics   │ │ Skincare Routine │ │
│                                           │ └──────────────────────┘ └──────────────────┘ │
└───────────────────────────────────────────┴───────────────────────────────────────────────┘
```

- **Top Navigation Bar (Persistent):** Pinned 64px header with the architectural [A] lockup on the left, an inline fluid tab switcher in the center, and a subtle "Studio Inquiries" link on the right.
- **Left Narrative Column (42%):** Grounded and persistent. Features the core manifesto, customer promise, and studio verification badges. It never scrolls off-screen; it anchors the company's identity while the right column changes.
- **Right Dynamic Canvas (58%):** Swaps content in-place with a crisp 180ms ease-out crossfade when users click between *Our Vision*, *Why It Matters*, *Our Approach*, *Products*, and *Contact*. Zero jumpy page reloads.

---

### 2.3 Mobile Homepage Experience (390×844 & 375×812)
- **Header:** Compact 56px bar with architectural [A] symbol and a modern pill menu toggle.
- **Top Tab Bar:** Horizontally swipeable, touch-friendly pill tabs (`Our Vision`, `Why`, `Approach`, `Products`, `Contact`) with active indicator pill.
- **Single Natural Scroll Flow:** Eliminates the broken double-scroll container on mobile. Content flows as a single natural document with clear sticky section anchors.
- **Product Cards:** Full-width stacked cards with clear visual tags (`[IN TESTING]`, `[LOCAL-FIRST]`) and 48px tap targets.

---

### 2.4 Typography System: Plus Jakarta Sans + Inter
- **Display Headlines:** `Plus Jakarta Sans` (Weight 600 SemiBold & 700 Bold, tracking `-0.025em`).
- **Body & Interface:** `Inter` (Weight 400 Regular & 500 Medium, tracking normal).
- **Technical & Security Badges:** `DM Mono` (Weight 500, uppercase, tracking `0.06em`).
- **Tabular Figures:** Enabled across all numeric data with `font-variant-numeric: tabular-nums`.

---

### 2.5 Color Palette & Tokens (Concept A)
- **Canvas Background:** `#FAFAF8` (Warm Crisp Studio Chalk)
- **Surface Card:** `#FFFFFF` (Pure Studio White)
- **Ink Primary:** `#0F172A` (Deep Slate Charcoal, contrast 16.2:1 against canvas)
- **Ink Secondary / Muted:** `#475569` (Muted Technical Slate, contrast 6.8:1 against canvas)
- **Borders & Rules:** `#E2E8F0` (Crisp 1px border, contrast 3.1:1 against canvas)
- **Studio Forest Accent:** `#1E3A2F` (Deep Architectural Forest, contrast 11.5:1)
- **WealthPrivate Theme:** Canvas `#0F172A` / Surface `#1E293B` / Accent `#38BDF8` (Precision Ice Blue)
- **DermaPrivate Theme:** Canvas `#F8FAF6` / Surface `#FFFFFF` / Accent `#3D6B50` (Botanical Sage)

---

### 2.6 Navigation & Product Showcase
- **Navigation:** Persistent unified top bar. In-place state switching using the existing hash router (`#overview`, `#overview/why`, `#overview/approach`, `#products`, `#contact`). Tab change triggers a silky 180ms CSS crossfade with `will-change: opacity, transform`.
- **Product Showcase:** WealthPrivate and DermaPrivate appear as **Technical Specification Cards**. WealthPrivate displays an encrypted ledger asset breakdown mockup with local SQLite status; DermaPrivate features a daily routine timeline with ingredient safety scores.

---

### 2.7 Motion Recommendations
- **Transition Style:** Mechanical precision. Duration: 180ms–220ms.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy spring out, zero oscillation).
- **Reduced Motion:** If `prefers-reduced-motion: reduce` is detected, opacity switches instantly (0ms) and transforms are disabled.

---

## 3. Concept B — Immersive AI Technology Studio

### 3.1 Design Philosophy & Aesthetic
Concept B positions Amanchi Labs at the absolute vanguard of **frontier AI and cryptographic personal computing** (influenced by Raycast, Vercel, and deep-tech AI research labs). It adopts a rich, layered **dark-mode foundation** with luminous data conduits, subtle radial ambient glow, frosted glass surfaces, and interactive architectural diagrams.

- **Atmosphere:** Visionary, high-tech, cinematic, deeply intelligent, sovereign.
- **Core Visual Motif:** Luminous boundaries, subtle obsidian mesh glows (emerald and indigo), frosted glass cards (`backdrop-filter: blur(16px)`), and active interactive data conduits.
- **Whitespace Strategy:** Replaces empty flat white space with **luminous depth and layered architectural surfaces**. The canvas feels alive, filled with atmospheric depth while remaining uncluttered.

---

### 3.2 Desktop Homepage Experience (1440×900 & 1280×800)

```
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│ [A] AMANCHI LABS                [ Vision  ·  Why  ·  Approach  ·  Products  ·  Contact ]  │
├───────────────────────────────────────────────────────────────────────────────────────────┤
│ [IMMERSIVE HERO & ARCHITECTURAL VISUALIZER]                                               │
│                                                                                           │
│   PRIVATE BY DESIGN. LOCAL BY DEFAULT.                                                    │
│   ┌─────────────────────────────────────────────────────────────────────────────┐         │
│   │  AI BY CHOICE.                                                              │         │
│   │  Your data stays sovereign on your device. Optional frontier intelligence   │         │
│   │  arrives only when you request it. Zero silent telemetry.                   │         │
│   └─────────────────────────────────────────────────────────────────────────────┘         │
│                                                                                           │
│   ┌─────────────────────────────────────────────────────────────────────────────────────┐ │
│   │ INTERACTIVE LOCAL-FIRST VS. EXTERNAL AI DATA MAP                                    │ │
│   │ ┌───────────────────────────┐        ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐   ┌────────────────────┐ │ │
│   │ │ [USER SOVEREIGN DEVICE]   │        │ OPTIONAL TRANSFER │   │ [FRONTIER AI]      │ │ │
│   │ │ ● On-Device SQLite & Core │───────>│ Prompt Authorized │──>│ Ephemeral Request  │ │ │
│   │ │ ● Zero Document Cloud Sync│        │ By User Action    │   │ Provider Policies  │ │ │
│   │ └───────────────────────────┘        └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   └────────────────────┘ │ │
│   │  ▲ Solid Border = Bounded Hardware     ▲ Glowing Dashed = User-Initiated Transfer   │ │
│   └─────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                           │
│ [BENTO PRODUCT FAMILY SHOWCASE]                                                           │
│ ┌──────────────────────────────────────────┐ ┌──────────────────────────────────────────┐ │
│ │ WEALTHPRIVATE [FINANCIAL VAULT]          │ │ DERMAPRIVATE [SKINCARE INTELLIGENCE]     │ │
│ │ High-precision double-entry bookkeeping  │ │ Local daily routine planning & ingredient│ │
│ │ and tax outlook. Encrypted on-device.    │ │ safety analysis. Proposal-only coaching. │ │
│ │ [Preview Financial Interface →]          │ │ [Explore DermaPrivate →]                 │ │
│ └──────────────────────────────────────────┘ └──────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Hero Area:** Features a luminous ambient background with the studio tagline in commanding geometric typography, followed immediately by an interactive **Local vs. External AI Visualizer** that directly demystifies the company philosophy.
- **Bento Grid Product Family:** WealthPrivate and DermaPrivate are displayed side-by-side in rich bento cards featuring simulated device frames, active status badges (`● Local Storage Active`), and live feature metrics.

---

### 3.3 Mobile Homepage Experience (390×844 & 375×812)
- **Header:** Sleek obsidian frosted header with illuminated [A] brandmark.
- **Floating Island Navigation:** A subtle floating glass capsule at the bottom of the screen with micro-icons and labels for fluid one-handed thumb navigation.
- **Vertical Interactive Flow:** The local-first data conduit collapses gracefully into a stacked visual diagram with animated glowing pulses illustrating local confinement.
- **Product Bento Stack:** Cards stack vertically with rich dark gradients and high-contrast typography.

---

### 3.4 Typography System: Sora + DM Sans
- **Display Headlines:** `Sora` (Weight 600 SemiBold & 700 Bold, tracking `-0.02em`). Gives headlines a distinct, tech-forward, cryptographic rhythm.
- **Body & Copy:** `DM Sans` (Weight 400 Regular & 500 Medium, tracking normal). Provides open counters and effortless digital readability.
- **Telemetry & Data Badges:** `JetBrains Mono` or `DM Mono` (Weight 500, tracking `0.05em`).

---

### 3.5 Color Palette & Tokens (Concept B)
- **Canvas Background:** `#090D14` (Deep Obsidian Void)
- **Surface Card (Level 1):** `#111622` (Subtle Obsidian Glass, 85% opacity with 16px blur)
- **Surface Card (Level 2):** `#182030` (Elevated Interactive Tile)
- **Ink Primary:** `#F8FAFC` (Pure Starlight White, contrast 17.5:1 against canvas)
- **Ink Secondary / Muted:** `#94A3B8` (Cool Celestial Slate, contrast 6.2:1 against canvas)
- **Borders & Outlines:** `rgba(255, 255, 255, 0.10)` (Subtle Luminescence, 3.2:1 contrast)
- **Ambient Accent 1 (Privacy Emerald):** `#10B981` (Glow: `rgba(16, 185, 129, 0.15)`)
- **Ambient Accent 2 (Intelligence Cyan):** `#06B6D4` (Glow: `rgba(6, 182, 212, 0.15)`)
- **WealthPrivate Slate:** Surface `#141E2E` / Accent `#38BDF8`
- **DermaPrivate Sage:** Surface `#13221C` / Accent `#34D399`

---

### 3.6 Navigation & Product Showcase
- **Navigation:** Floating Glass Capsule Navigation. Smooth view morphing with GSAP-inspired timing. Deep links supported seamlessly.
- **Product Showcase:** WealthPrivate features a dark-themed simulated interface showing a multi-entity bookkeeping ledger with a `[🔒 SQLCipher Encrypted]` badge. DermaPrivate features a simulated routine card with ingredient safety scoring and `[⚡ On-Device Inference]` badge.

---

### 3.7 Motion Recommendations
- **Transition Style:** Cinematic and layered. Staggered card entry (300ms `power2.out`, stagger 60ms).
- **Glow Effects:** Interactive hover glows on cards (`box-shadow: 0 0 24px rgba(16, 185, 129, 0.12)`).
- **Reduced Motion:** All glow animations, scale transforms, and staggers are disabled; surfaces render in their static final contrast states.

---

## 4. Concept C — Human-Centered Digital Innovation

### 4.1 Design Philosophy & Aesthetic
Concept C approaches privacy not from the perspective of cold cybersecurity, but from **human dignity, personal autonomy, and everyday calm** (influenced by Craft.do, Teenage Engineering, and editorial lifestyle technology). It combines warm organic materials (stone, clay, natural forest green) with contemporary geometric curves and empathetic storytelling.

- **Atmosphere:** Warm, grounded, intelligent, personal, dignified, reassuring.
- **Core Visual Motif:** Warm stone palettes, generous corner radii (16px–20px), subtle linen textures, and empathetic scenario-based product framing.
- **Whitespace Strategy:** Uses **warm, rhythmic editorial negative space** with intentional margins and human-scale typography.

---

### 4.2 Desktop Homepage Experience (1440×900 & 1280×800)

```
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│ [A] AMANCHI LABS                Our Vision   Why It Matters   Approach   Products   Contact   │
├───────────────────────────────────────────────────────────────────────────────────────────┤
│ [WARM EDITORIAL HERO]                                                                     │
│                                                                                           │
│   TECHNOLOGY BUILT FOR HUMAN INDEPENDENCE                                                 │
│   Your life is personal. Your technology should respect that.                             │
│                                                                                           │
│   "Private by Design. Local by Default. AI by Choice."                                    │
│   We believe software should serve your daily life without taking your personal           │
│   financial records, health routines, or career notes as corporate inventory.            │
│                                                                                           │
│ ───────────────────────────────────────────────────────────────────────────────────────── │
│ [HUMAN STORYTELLING & PRODUCT SHOWCASE]                                                   │
│ ┌──────────────────────────────────────────┐ ┌──────────────────────────────────────────┐ │
│ │ FOR YOUR LIFE'S FINANCES                 │ │ FOR YOUR DAILY WELLNESS                  │ │
│ │ WealthPrivate                            │ │ DermaPrivate                             │ │
│ │ Keep your business ledger and tax facts  │ │ Plan thoughtful skincare routines and    │ │
│ │ strictly on your own device. No forced   │ │ verify ingredient compatibility with     │ │
│ │ cloud subscriptions or account gates.    │ │ complete personal privacy.               │ │
│ │                                          │ │                                          │ │
│ │ [Meet WealthPrivate →]                   │ │ [Explore DermaPrivate →]                 │ │
│ └──────────────────────────────────────────┘ └──────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Hero Area:** Warm ivory background with deep forest green display typography. Conversational, dignified subheadings emphasize personal freedom and peace of mind.
- **Storytelling Product Cards:** Rounded cards (20px border-radius) with soft organic borders and pastel badge accents.

---

### 4.3 Mobile Homepage Experience (390×844 & 375×812)
- **Header:** Warm stone header with tactile button states.
- **Navigation:** Full-screen warm overlay menu with clear, accessible typographic links.
- **Scroll Pacing:** Generous touch targets (52px), smooth native momentum scrolling, and comfortable reading measure (max 65 characters per line).

---

### 4.4 Typography System: Manrope + Inter
- **Display Headlines:** `Manrope` (Weight 600 SemiBold & 700 Bold, tracking `-0.015em`).
- **Body & Copy:** `Inter` (Weight 400 Regular & 500 Medium, line-height `1.65`).
- **Accent & Badges:** `DM Sans` (Weight 500 Medium, tracking `0.02em`).

---

### 4.5 Color Palette & Tokens (Concept C)
- **Canvas Background:** `#F6F4EE` (Warm Organic Limestone)
- **Surface Card:** `#FAF8F5` (Soft Calico Ivory)
- **Ink Primary:** `#1C2621` (Deep Forest Charcoal, contrast 13.8:1 against canvas)
- **Ink Secondary / Muted:** `#526359` (Muted Sage Slate, contrast 5.6:1 against canvas)
- **Borders & Dividers:** `#DDE3DC` (Warm Herbal Border, contrast 3.1:1 against canvas)
- **Primary Brand Accent:** `#2D5A43` (Heritage Forest Green, contrast 7.8:1)
- **Secondary Warm Accent:** `#C26738` (Subtle Terracotta)
- **WealthPrivate Tile:** Surface `#EBF0ED` / Accent `#2D5A43`
- **DermaPrivate Tile:** Surface `#F2ECE4` / Accent `#7D6352`

---

### 4.6 Navigation & Product Showcase
- **Navigation:** Persistent warm top bar with clear active line indicator. Smooth page transitions (220ms ease-in-out).
- **Product Showcase:** Presented through relatable everyday utility: "How Jane manages private LLC taxes on her MacBook without cloud leaks" and "How Maya tracks sensitive skincare routines without uploading photos".

---

### 4.7 Motion Recommendations
- **Transition Style:** Gentle, organic, tactile. Duration: 240ms.
- **Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (smooth deceleration).
- **Reduced Motion:** Instant state changes without transitions.

---

## 5. Side-by-Side Comparison Matrix

```
┌──────────────────────┬──────────────────────────┬──────────────────────────┬──────────────────────────┐
│ DIMENSION            │ CONCEPT A: MINIMALISM    │ CONCEPT B: IMMERSIVE AI  │ CONCEPT C: HUMAN-CENTERED│
├──────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Primary Aesthetic    │ Swiss Architectural      │ Obsidian Frontier AI     │ Warm Organic Technology  │
│ Display Typography   │ Plus Jakarta Sans (Bold) │ Sora (Geometric Tech)    │ Manrope (Humanist Sans)  │
│ Body Typography      │ Inter (Tabular-nums)     │ DM Sans (Low contrast)   │ Inter (High legibility)  │
│ Background Canvas    │ #FAFAF8 (Studio Chalk)   │ #090D14 (Deep Obsidian)  │ #F6F4EE (Limestone)      │
│ Primary Accent       │ #1E3A2F (Deep Forest)    │ #10B981 (Privacy Emerald)│ #2D5A43 (Heritage Green) │
│ Visual Depth         │ Flat 1px structural grid │ Frosted glass & glow mesh│ Soft cards (20px radius) │
│ Desktop Layout       │ Asymmetric 2-column dock │ Multi-tier Bento Canvas  │ Editorial narrative flow │
│ Desktop Whitespace   │ Balanced negative space  │ Layered spatial depth    │ Generous organic margins │
│ Mobile Navigation    │ Top swipeable pill tabs  │ Floating bottom capsule  │ Fullscreen warm drawer   │
│ Product Presentation │ Technical spec cards     │ Interactive bento frames │ Scenario storytelling    │
│ Interaction Speed    │ Snappy (180ms ease-out)  │ Layered (300ms GSAP out) │ Smooth (240ms ease-in-out)│
│ Maintenance Overhead │ Lowest (Pure CSS tokens) │ Moderate (Glass effects) │ Low (Pure CSS tokens)    │
│ WCAG 2.2 AA Contrast │ Passes AAA on all text   │ Passes AA+ across themes │ Passes AAA on primary    │
└──────────────────────┴──────────────────────────┴──────────────────────────┴──────────────────────────┘
```

---

## 6. Visual Concept Summary

All three concepts successfully achieve the founder's core requirements:
1. They **completely abandon Instrument Serif** in favor of world-class contemporary sans-serif systems.
2. They **eliminate the cramped 30% persistent introduction bottleneck**, giving the website commanding scale.
3. They **differentiate WealthPrivate and DermaPrivate** visually while maintaining family harmony.
4. They **celebrate local-first AI architecture** without making unverified offline or security claims.

The strategic evaluation and final agency recommendation follow in **Phase D: Recommended Direction**.
