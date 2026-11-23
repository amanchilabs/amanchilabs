# Amanchi Labs Website Redesign — Phase B: Typography Systems Comparison

**Document:** `03-typography-comparison.md`  
**Date:** November 23, 2026  
**Author:** Typography & Visual Systems Expert, Agency Review Team  
*In consultation with Creative Director, Senior Brand Identity Designer, and Principal UI/UX Designer*  
**Research Engine:** `ui-ux-pro-max` (Domain: `typography`, `google-fonts`)  

---

## 1. Executive Typographic Diagnosis: The Exit from Instrument Serif

### 1.1 The Fundamental Mismatch
The current website uses `Instrument Serif` (`src/tokens.css`, `--font-display: 'Instrument Serif', Georgia, serif`) across all primary headlines:
- *"Your life is personal. Your technology should respect that."*
- *"Your app. Your device. Your information."*
- *"Your life is not a dataset."*
- *"Local-first by design. AI-enabled by choice."*

While `Instrument Serif` is an exquisite typeface designed by Jordan Bell for editorial layouts and literary publications, its presence on the Amanchi Labs website introduces a severe **cognitive dissonance**:
1. **Academic/Theoretical Perception:** Serif typography instinctively communicates retrospection, historical reflection, and editorial journalism. Visitors perceive an essay or policy critique rather than a state-of-the-art software studio building executable applications.
2. **Lack of Technological Vigor:** High-stroke-contrast serifs with delicate terminal brackets feel fragile on digital screens. They lack the structural punch, geometric stability, and kinetic confidence required to convey on-device cryptography, local AI inference, and autonomous personal computing.
3. **Product Branding Friction:** *WealthPrivate* and *DermaPrivate* require crisp, modern interface titling. Applying serif display type to software product descriptions dilutes their perceived modern utility.

**Strategic Mandate:** Amanchi Labs must transition to a **contemporary sans-serif display and interface typography system** that conveys intelligence, architectural precision, technological authority, and approachable human craftsmanship.

---

## 2. In-Depth Evaluation of Candidate Typography Combinations

Using `ui-ux-pro-max`, we evaluated five primary candidate pairings across typographic anatomy, mood keywords, rendering performance, and suitability for Amanchi Labs' dual mission (financial precision + personalized skincare).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ CANDIDATE PAIRING          │ ANATOMY & STRUCTURE         │ MOOD & PERSONALITY    │ BEST FIT      │
├────────────────────────────┼─────────────────────────────┼───────────────────────┼───────────────┤
│ 1. Plus Jakarta Sans       │ Wide geometric proportions, │ Authoritative, clean, │ Concept A     │
│    + Inter                 │ tall x-height, open counters│ enterprise modern,    │ (Modern Swiss │
│                            │ with humanist warmth.       │ architectural clarity.│ Minimalism)   │
├────────────────────────────┼─────────────────────────────┼───────────────────────┼───────────────┤
│ 2. Sora                    │ Low-contrast geometric,     │ Futuristic, advanced  │ Concept B     │
│    + DM Sans               │ subtle mechanical corners,  │ AI, high-tech studio, │ (Immersive AI │
│                            │ high aperture, tech rhythm. │ cryptographic trust.  │ Studio)       │
├────────────────────────────┼─────────────────────────────┼───────────────────────┼───────────────┤
│ 3. Manrope                 │ Semi-condensed geometric    │ Contemporary, warm,   │ Concept C     │
│    + Inter                 │ hybrid, round curved tails, │ human-centered, calm, │ (Human-Centric│
│                            │ friendly humanist terminals.│ approachable craft.   │ Innovation)   │
├────────────────────────────┼─────────────────────────────┼───────────────────────┼───────────────┤
│ 4. Space Grotesk           │ Monospaced heritage, brutal │ Developer-heavy, raw  │ Experimental /│
│    + DM Sans               │ geometric quirks, deep ink- │ tech startup, high    │ Developer     │
│                            │ traps, distinct personality.│ idiosyncrasy.         │ Tools only    │
├────────────────────────────┼─────────────────────────────┼───────────────────────┼───────────────┤
│ 5. Outfit                  │ Pure geometric Bauhaus-     │ Bold, consumer-facing,│ Consumer Apps │
│    + Inter                 │ derived circles and lines,  │ direct, friendly,     │ / Pitch Decks │
│                            │ circular 'o', modern poster.│ punchy marketing.     │               │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Detailed Analysis of Each Pairing

#### Candidate 1: Plus Jakarta Sans + Inter
- **Source:** Designed by Tokotype (Gumpita Rahayu). Variable weight font (wght 200..800).
- **Heading Anatomy (Plus Jakarta Sans):** Crafted specifically for modern digital interfaces and architectural branding. It features generous apertures, balanced x-height, and subtly squared letterforms that give it an unmistakable sense of structural integrity.
- **Body Synergy (Inter):** Rasmus Andersson’s Inter is the gold standard of interface legibility. When paired with Plus Jakarta Sans, Inter provides transparent readability for complex privacy copy and legal disclosures.
- **Financial & Data Utility:** Both fonts support `font-variant-numeric: tabular-nums`, enabling aligned ledger columns for *WealthPrivate*.
- **Verdict for Amanchi Labs:** **Outstanding.** Delivers the exact balance of high-end software sophistication and clean architectural precision. Assigned to **Concept A**.

#### Candidate 2: Sora + DM Sans
- **Source:** Designed by Jonathan Barnbrook and Julián Moncada for Sora (cryptographic and decentralized systems).
- **Heading Anatomy (Sora):** Sora was engineered for cutting-edge digital spaces, blockchain platforms, and AI interfaces. It has distinct horizontal terminals and subtle mechanical cues that evoke silicon, computation, and intelligence without feeling gimmicky or sci-fi.
- **Body Synergy (DM Sans):** Colophon Foundry’s DM Sans provides a low-contrast, open-counter body companion that softens Sora’s mechanical edge.
- **Verdict for Amanchi Labs:** **Exceptional.** Communicates local on-device intelligence and cryptographic sovereignty more effectively than any other font. Assigned to **Concept B**.

#### Candidate 3: Manrope + Inter
- **Source:** Designed by Mikhail Sharanda. Universal geometric grotesque (wght 200..800).
- **Heading Anatomy (Manrope):** Manrope bridges the gap between pure geometric sans (like Futura) and humanist grotesque (like Franklin Gothic). It has slightly rounded inner curves, friendly letter junctions, and exceptional warmth.
- **Body Synergy (Inter):** Blends seamlessly with Inter, providing a grounded, calm, and trustworthy reading experience.
- **Skincare & Personal Care Utility:** Particularly suited for *DermaPrivate*, where clinical coldness must be avoided in favor of personalized wellness and daily human routines.
- **Verdict for Amanchi Labs:** **Strong.** Excellent for a human-first, approachable technology narrative. Assigned to **Concept C**.

#### Candidate 4: Space Grotesk + DM Sans
- **Source:** Designed by Florian Karsten.
- **Heading Anatomy:** Space Grotesk incorporates idiosyncrasies from monospaced fonts into a proportional grotesque. It features exaggerated ink-traps and angular strokes.
- **Agency Critique:** While distinctive, Space Grotesk's exaggerated quirks can distract from serious financial and skincare intelligence. It risks positioning Amanchi Labs as a developer toy or crypto meme project rather than an elite, trustworthy personal software studio.
- **Verdict:** **Not Recommended for Primary Studio Identity.**

#### Candidate 5: Outfit + Inter
- **Source:** Designed by Rodrigo Fuenzalida.
- **Heading Anatomy:** Pure geometric sans based on clean circles and straight verticals.
- **Agency Critique:** Outfit is vibrant, youthful, and punchy, but its circular forms can feel generic—reminiscent of consumer fintech marketing pages rather than an independent research-grade software studio.
- **Verdict:** **Secondary Candidate.** Effective for consumer marketing, but lacks the gravitas of Plus Jakarta Sans or Sora.

---

## 3. Side-by-Side Typography Showcase with Actual Amanchi Labs Copy

Below is a direct comparison of the top three candidate pairings alongside the legacy Instrument Serif baseline, demonstrating how actual headlines and brand copy render in each system.

### Headline Set 1: Studio Philosophy
> *"Private by Design. Local by Default. AI by Choice."*

```
[LEGACY: Instrument Serif 44px / Regular Italic]
Private by Design. Local by Default. AI by Choice.
↳ Critique: Delicate, poetic, literary. Sounds like a book title or philosophical quote from 1910.

[CONCEPT A: Plus Jakarta Sans 42px / SemiBold 600 - tracking: -0.02em]
Private by Design. Local by Default. AI by Choice.
↳ Agency Review: Architectural, commanding, authoritative. The geometric cadence conveys structural certainty.

[CONCEPT B: Sora 40px / Bold 700 - tracking: -0.015em]
Private by Design. Local by Default. AI by Choice.
↳ Agency Review: Technological, advanced, cryptographic. Speaks with the voice of cutting-edge AI engineering.

[CONCEPT C: Manrope 42px / Bold 700 - tracking: -0.01em]
Private by Design. Local by Default. AI by Choice.
↳ Agency Review: Warm, grounded, trustworthy. Makes privacy feel accessible and human rather than clinical.
```

---

### Headline Set 2: The Core Vision Statement
> *"Your app. Your device. Your information."*

```
[LEGACY: Instrument Serif 36px / Regular]
Your app. Your device. Your information.
↳ Critique: Fails to evoke modern mobile hardware or independent computing.

[CONCEPT A: Plus Jakarta Sans 36px / Bold 700]
Your app. Your device. Your information.
↳ Agency Review: Sharp, resolute, unambiguous. The uppercase terminals anchor the statement with confidence.

[CONCEPT B: Sora 36px / SemiBold 600]
Your app. Your device. Your information.
↳ Agency Review: Highly modern. Subtle mechanical angles reinforce the physical device context.

[CONCEPT C: Manrope 36px / Bold 700]
Your app. Your device. Your information.
↳ Agency Review: Friendly and reassuring. Speaks directly to consumer autonomy.
```

---

### Headline Set 3: Product Identity Titles
> *"WealthPrivate — Private Personal Financial Intelligence"*  
> *"DermaPrivate — Personalized Skincare & Routine Intelligence"*

```
[LEGACY: Instrument Serif + Inter]
WealthPrivate: Private Personal Financial Intelligence
DermaPrivate: Personalized Skincare & Routine Intelligence
↳ Critique: Both products look like chapters in a manual. Zero differentiation.

[CONCEPT A: Plus Jakarta Sans 28px + Inter 15px (Tabular Numerals Enabled)]
WealthPrivate [Slate Accent #64748B] — Private Personal Financial Intelligence
DermaPrivate [Sage Accent #71896A] — Personalized Skincare & Routine Intelligence
↳ Agency Review: Clear product hierarchy. WealthPrivate feels like an institutional vault; DermaPrivate feels refined and structured.

[CONCEPT B: Sora 28px + DM Sans 15px]
WealthPrivate [Emerald Status Pip ●] — Private Personal Financial Intelligence
DermaPrivate [Botanical Pip ●] — Personalized Skincare & Routine Intelligence
↳ Agency Review: High-tech studio identity. Distinctive character shapes make product badges instantly recognizable.

[CONCEPT C: Manrope 28px + Inter 15px]
WealthPrivate — Private Personal Financial Intelligence
DermaPrivate — Personalized Skincare & Routine Intelligence
↳ Agency Review: Soft, empathetic, and clean. Exceptional readability across long routine and ledger descriptions.
```

---

## 4. Typographic Scale & Design Tokens Specification

To ensure mathematical precision across responsive breakpoints, we established an 8-level typographic scale rooted in a `1.250` (Major Third) ratio for desktop and `1.200` (Minor Third) ratio for mobile:

```css
/* Responsive Typographic Scale Tokens */
:root {
  /* Font Family Stacks */
  --font-display-concept-a: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body-concept-a:    'Inter', system-ui, -apple-system, sans-serif;

  --font-display-concept-b: 'Sora', system-ui, -apple-system, sans-serif;
  --font-body-concept-b:    'DM Sans', system-ui, -apple-system, sans-serif;

  --font-display-concept-c: 'Manrope', system-ui, -apple-system, sans-serif;
  --font-body-concept-c:    'Inter', system-ui, -apple-system, sans-serif;

  --font-mono:              'DM Mono', 'JetBrains Mono', monospace;

  /* Desktop Typographic Scale (min-width: 1024px) */
  --text-display-2xl: 3.25rem; /* 52px */ line-height: 1.08; letter-spacing: -0.03em;
  --text-display-xl:  2.50rem; /* 40px */ line-height: 1.12; letter-spacing: -0.025em;
  --text-display-lg:  2.00rem; /* 32px */ line-height: 1.20; letter-spacing: -0.02em;
  --text-display-md:  1.50rem; /* 24px */ line-height: 1.30; letter-spacing: -0.015em;
  --text-body-lg:     1.125rem;/* 18px */ line-height: 1.65; letter-spacing: -0.01em;
  --text-body-md:     1.00rem; /* 16px */ line-height: 1.60; letter-spacing: normal;
  --text-body-sm:     0.875rem;/* 14px */ line-height: 1.55; letter-spacing: normal;
  --text-caption:     0.75rem; /* 12px */ line-height: 1.50; letter-spacing: 0.04em;
  --text-micro-badge: 0.6875rem;/* 11px */ line-height: 1.40; letter-spacing: 0.08em;
}

/* Mobile Typographic Adjustments (max-width: 767px) */
@media (max-width: 767px) {
  :root {
    --text-display-2xl: 2.375rem; /* 38px */ line-height: 1.15;
    --text-display-xl:  1.875rem; /* 30px */ line-height: 1.20;
    --text-display-lg:  1.50rem;  /* 24px */ line-height: 1.25;
    --text-display-md:  1.25rem;  /* 20px */ line-height: 1.35;
  }
}
```

---

## 5. Agency Recommendation on Typography

1. **For Concept A (Modern Intelligent Minimalism):**  
   **Plus Jakarta Sans (Display) + Inter (Body)** is the undisputed leader. It provides immediate Swiss architectural precision, sharp readability, and sophisticated enterprise confidence.
2. **For Concept B (Immersive AI Technology Studio):**  
   **Sora (Display) + DM Sans (Body)** is uniquely suited to an immersive studio aesthetic. Its mechanical details communicate algorithm precision and cryptographic independence.
3. **For Concept C (Human-Centered Digital Innovation):**  
   **Manrope (Display) + Inter (Body)** delivers the required warmth, elegance, and approachable clarity.
4. **Recommended Hybrid Synthesis:**  
   Our final studio recommendation pairs **Plus Jakarta Sans** for primary brand headlines and navigation with **Sora** accents for product telemetry, badges, and technical chips, supported by **Inter** with tabular numerals for interface copy. This hybrid achieves maximum prestige and modern intelligence.
