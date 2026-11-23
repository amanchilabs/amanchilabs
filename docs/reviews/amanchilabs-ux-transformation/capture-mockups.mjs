import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureAll16() {
  const browser = await chromium.launch({ headless: true });
  const htmlPath = 'file://' + path.resolve(__dirname, 'visual-comparison-gallery.html');
  const repoImgDir = path.resolve(__dirname, 'img');
  const downloadsDir = '/Users/veerrajuamanchi/Downloads/Amanchi-Labs-Visual-Decision-Package-2026-11-23';

  if (!fs.existsSync(repoImgDir)) fs.mkdirSync(repoImgDir, { recursive: true });
  if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });

  const tasks = [
    // CONCEPT A
    { filename: '01-concept-a-desktop-homepage-1440x900.png', concept: 'concept-a', view: 'home', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '02-concept-a-mobile-homepage-390x844.png', concept: 'concept-a', view: 'home', width: 440, height: 920, mode: 'mode-390' },
    { filename: '03-concept-a-desktop-products-1440x900.png', concept: 'concept-a', view: 'products', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '04-concept-a-desktop-approach-1440x900.png', concept: 'concept-a', view: 'approach', width: 1440, height: 900, mode: 'mode-1440' },

    // CONCEPT B
    { filename: '05-concept-b-desktop-homepage-1440x900.png', concept: 'concept-b', view: 'home', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '06-concept-b-mobile-homepage-390x844.png', concept: 'concept-b', view: 'home', width: 440, height: 920, mode: 'mode-390' },
    { filename: '07-concept-b-desktop-products-1440x900.png', concept: 'concept-b', view: 'products', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '08-concept-b-desktop-approach-1440x900.png', concept: 'concept-b', view: 'approach', width: 1440, height: 900, mode: 'mode-1440' },

    // CONCEPT C
    { filename: '09-concept-c-desktop-homepage-1440x900.png', concept: 'concept-c', view: 'home', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '10-concept-c-mobile-homepage-390x844.png', concept: 'concept-c', view: 'home', width: 440, height: 920, mode: 'mode-390' },
    { filename: '11-concept-c-desktop-products-1440x900.png', concept: 'concept-c', view: 'products', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '12-concept-c-desktop-approach-1440x900.png', concept: 'concept-c', view: 'approach', width: 1440, height: 900, mode: 'mode-1440' },

    // HYBRID A+B (RECOMMENDED)
    { filename: '13-hybrid-ab-desktop-homepage-1440x900.png', concept: 'concept-hybrid', view: 'home', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '14-hybrid-ab-mobile-homepage-390x844.png', concept: 'concept-hybrid', view: 'home', width: 440, height: 920, mode: 'mode-390' },
    { filename: '15-hybrid-ab-desktop-products-1440x900.png', concept: 'concept-hybrid', view: 'products', width: 1440, height: 900, mode: 'mode-1440' },
    { filename: '16-hybrid-ab-desktop-approach-1440x900.png', concept: 'concept-hybrid', view: 'approach', width: 1440, height: 900, mode: 'mode-1440' },
  ];

  console.log(`Starting capture of ${tasks.length} high-fidelity mockups...`);

  for (const t of tasks) {
    const page = await browser.newPage({
      viewport: { width: t.width, height: t.height },
      deviceScaleFactor: 2
    });

    await page.goto(htmlPath);
    await page.waitForLoadState('networkidle');

    // Trigger state in page
    await page.evaluate(({ concept, view, mode }) => {
      // 1. Set concept
      document.querySelectorAll('.concept-screen').forEach(el => el.classList.remove('active'));
      const screen = document.getElementById('screen-' + concept);
      if (screen) screen.classList.add('active');

      // 2. Set subview
      document.querySelectorAll('.concept-view').forEach(el => el.classList.remove('active'));
      let prefix = 'ca';
      if (concept === 'concept-b') prefix = 'cb';
      if (concept === 'concept-c') prefix = 'cc';
      if (concept === 'concept-hybrid') prefix = 'hy';
      const subTarget = document.getElementById(prefix + '-view-' + view);
      if (subTarget) subTarget.classList.add('active');

      // 3. Set viewport mode
      const container = document.getElementById('deviceContainer');
      container.className = 'device-container ' + mode;
    }, { concept: t.concept, view: t.view, mode: t.mode });

    await page.waitForTimeout(250);

    const targetEl = await page.$('#deviceContainer');
    if (targetEl) {
      const repoPath = path.join(repoImgDir, t.filename);
      const dlPath = path.join(downloadsDir, t.filename);
      await targetEl.screenshot({ path: repoPath });
      fs.copyFileSync(repoPath, dlPath);
      console.log(`[✓] Captured: ${t.filename}`);
    }

    await page.close();
  }

  // Also copy visual-comparison-gallery.html to Downloads folder
  fs.copyFileSync(
    path.resolve(__dirname, 'visual-comparison-gallery.html'),
    path.join(downloadsDir, 'interactive-gallery.html')
  );

  await browser.close();
  console.log(`\nAll 16 mockups exported successfully to:\n${downloadsDir}\nand ${repoImgDir}`);
}

captureAll16().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
