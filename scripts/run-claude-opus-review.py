#!/usr/bin/env python3
"""
scripts/run-claude-opus-review.py

Invokes Claude Opus 4.6 (Thinking) via the `agy` CLI to conduct an independent,
unbiased, whole-branch architectural, visual parity, accessibility, privacy copy,
and regression review of the Amanchi Labs UX/UI Transformation branch against origin/main.
"""

import os
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS_DIR = REPO_ROOT / "docs" / "reviews" / "amanchilabs-ux-transformation"
OUTPUT_REPORT = DOCS_DIR / "08-claude-opus-independent-review.md"

def run_cmd(cmd, cwd=REPO_ROOT):
    result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
    return result.stdout.strip()

def main():
    print("[1/4] Gathering branch diff and git logs against origin/main...")
    git_log = run_cmd("git log --oneline origin/main..HEAD")
    git_stat = run_cmd("git diff --stat origin/main...HEAD")
    git_diff = run_cmd("git diff origin/main...HEAD -- src/ index.html tests/")
    
    print("[2/4] Gathering screenshot assets and test status...")
    img_dir = DOCS_DIR / "img-production"
    screenshots = sorted([f.name for f in img_dir.glob("*.png")]) if img_dir.exists() else []
    screenshot_list = "\n".join(f"- {s}" for s in screenshots)
    
    print(f"  Found {len(screenshots)} production screenshots.")
    print(f"  Diff size: {len(git_diff)} characters across modified source and test files.")

    print("[3/4] Constructing prompt for Claude Opus 4.6 (Thinking)...")
    prompt = f"""You are an elite Principal Software Architect, Staff UI/UX Designer, and Lead Security/Privacy Compliance Auditor acting as an INDEPENDENT CODE AND ARCHITECTURE REVIEWER.

You have been tasked with conducting a rigorous, whole-branch independent audit of the Amanchi Labs website transformation (branch `feature/ux-transformation-nov23` compared to `origin/main`).

The user explicitly stated:
"Perform independent final review. Once implementation is complete, have Claude Opus review the complete diff, responsive layouts, navigation, accessibility, privacy claims, and regressions. The reviewer must not simply accept the implementer's PASS assertions."

### Specific Constraints and Requirements to Verify:
1. **Preserve Approved Visual Design:**
   - Reproduce Refined Concept A (commit 1426742).
   - Asymmetric 40/60 desktop layout (40% left narrative column, 60% right dynamic canvas).
   - Modern Plus Jakarta Sans (400-800) + Inter (400-700) + DM Mono typography.
   - Persistent StudioHeader dock with status badge ("Private by Design · Local by Default").
   - Responsive full-width screen utilization without awkward margins or clipped viewports.

2. **Control Product Scope (Critical Anti-Hallucination & Scope Rule):**
   - Public showcases must ONLY include the approved public portfolio:
     - **WealthPrivate** (private personal financial intelligence; Status: In Development; on-device processing).
     - **DermaPrivate** (personalized skincare and routine intelligence; Status: In Testing; links to official site `https://www.dermaprivate.app/`).
   - Must NOT showcase unapproved internal/prototype products: FieldTally, LLCBookKeepingTaxReturn, InterviewPrivate must NOT appear in public showcases or application drawers.
   - Must preserve legacy deep links for unmerged/historical routes (`#llc-tax`, `#interview`, `#fieldtally`) via dedicated redirect/transition states rather than broken pages or generic silent redirects.

3. **Honest Privacy & Security Claims (No Unsupported Universal Guarantees):**
   - MUST NOT publish unsupported claims such as:
     - "100% On-Device SQLCipher Storage"
     - "0 Server Accounts"
     - "Zero Tracking"
     - "Architectural Guarantee"
   - Must strictly reflect approved company philosophy:
     - "Private by Design. Local by Default. AI by Choice."
     - "Your Data. Your Device. Your Control."
     - Local-first processing as the default with external AI being strictly optional and user-directed.

4. **Preserve Legacy Deep Links & Router Stability:**
   - All legacy and existing hash routes must work and render the appropriate view: `#vision`, `#why`, `#approach`, `#products`, `#wealth`, `#derma`, `#principles`, `#contact`, and legacy routes `#llc-tax`, `#interview`, `#fieldtally`.
   - Browser back/forward navigation and reload must update the view deterministically without page reloads.

5. **Preserve Approved Brandmark:**
   - Must use the official Amanchi Labs architectural brandmark image asset (`/brand/logo-header.png`), NOT a generic text `[A]` placeholder.

6. **Product Accuracy & Data Integrity:**
   - Must NOT fabricate financial figures (e.g. "$142,580"), fake skin analysis scores (e.g. "94% barrier health"), imaginary accounting certifications, or fake customer counts.
   - Specs must be architectural/deterministic (e.g., Target Platform, Privacy Model, AI Connectivity, Status).

7. **Responsive Design & Zoom Resilience:**
   - Evaluated across 8 representative viewports:
     - 1728x1117 (16-inch MacBook Pro)
     - 1512x982 (14-inch MacBook Pro)
     - 1440x900 (standard desktop)
     - 1280x800 (small laptop)
     - 1024x768 (tablet landscape)
     - 768x1024 (tablet portrait)
     - 390x844 (modern mobile)
     - 375x812 (compact mobile)
   - Tested under browser zoom up to 200%.

8. **Accessibility (WCAG 2.2 AA) & Semantic Landmarks:**
   - Header, main, nav landmarks, skip links, aria-current, aria-expanded, dialog focus traps, keyboard arrow/tab navigation.

---

### Artifacts and Evidence Available for Review:

#### Commits on Branch (`git log origin/main..HEAD`):
```
{git_log}
```

#### Diff Summary:
```
{git_stat}
```

#### 22 Captured Production Screenshots in `docs/reviews/amanchilabs-ux-transformation/img-production/`:
{screenshot_list}

#### Complete Diff of Modified Source and Test Files (`git diff origin/main...HEAD -- src/ index.html tests/`):
```diff
{git_diff}
```

---

### Your Assignment as Claude Opus 4.6 (Thinking):
Conduct a rigorous, independent review of this complete diff against all stated requirements. Do NOT simply rubber-stamp the author's claims. Look for subtle bugs, regressions, accessibility issues, unverified claims, or CSS edge cases.

Structure your report into the following clear sections:
1. **Executive Summary & Verdict:** Clear statement (APPROVED, APPROVED WITH RECOMMENDATIONS, or REJECT) with rationale.
2. **Detailed Dimension-by-Dimension Audit:**
   - Dimension 1: Visual Design & Layout Architecture (Refined Concept A 40/60 Asymmetric Shell)
   - Dimension 2: Product Scope Control (WealthPrivate + DermaPrivate enforcement, exclusion of FieldTally/LLCBookKeepingTaxReturn/InterviewPrivate from showcases)
   - Dimension 3: Privacy & Security Copy Integrity (Audit of claims; verification that unsupported absolutes were eliminated)
   - Dimension 4: Navigation, Router & Deep Link Preservation (Hash handling, legacy routes, browser history)
   - Dimension 5: Brand Identity & Typography System (Plus Jakarta Sans + Inter + DM Mono, official logo asset)
   - Dimension 6: Responsive Layouts & Zoom Resilience (Container queries, line clamping, overflow prevention)
   - Dimension 7: Accessibility & Keyboard Usability (WCAG 2.2 AA compliance, focus trap, ARIA landmarks)
   - Dimension 8: Code Quality, Performance & Regression Surface (Clean architecture, CSS maintainability, bundle impact)
3. **Evidence-Based Line References:** Cite exact file names and line patterns from the diff.
4. **Residual Risks, Edge Cases & Recommendations:** Constructive, actionable improvements (distinguishing between blocking issues and future polish).
5. **Final Sign-off Statement:** Explicit statement regarding readiness for human stakeholder decision.

Generate the complete, thorough report in markdown format.
"""

    print("[4/4] Executing Claude Opus 4.6 review via agy...")
    cmd = ["agy", "--model", "claude-opus-4-6-thinking", f"-p={prompt}"]
    result = subprocess.run(cmd, cwd=REPO_ROOT, capture_output=True, text=True)

    if result.returncode != 0:
        print(f"Error running Claude Opus review (code {result.returncode}):")
        print(result.stderr)
        sys.exit(1)

    review_content = result.stdout.strip()
    
    OUTPUT_REPORT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_REPORT, "w", encoding="utf-8") as f:
        f.write(review_content + "\n")
        
    print(f"\nSuccessfully generated independent review report at:\n  {OUTPUT_REPORT}")
    print(f"Report length: {len(review_content)} characters / {len(review_content.splitlines())} lines.")

if __name__ == "__main__":
    main()
