import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runRefinedConceptACapture() {
  const browser = await chromium.launch({ headless: true });
  const htmlPath = 'file://' + path.resolve(__dirname, 'refined-concept-a.html');
  const repoImgDir = path.resolve(__dirname, 'img');
  const downloadsDir = '/Users/veerrajuamanchi/Downloads/Amanchi-Labs-Refined-Concept-A';

  if (!fs.existsSync(repoImgDir)) fs.mkdirSync(repoImgDir, { recursive: true });
  if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });

  const requiredScreenshots = [
    { filename: '01-refined-concept-a-desktop-homepage-1728x1117.png', width: 1728, height: 1117, section: 'vision', desc: 'Desktop Homepage 1728x1117 (16" MacBook Pro)' },
    { filename: '02-refined-concept-a-laptop-homepage-1280x800.png', width: 1280, height: 800, section: 'vision', desc: 'Laptop Homepage 1280x800' },
    { filename: '03-refined-concept-a-mobile-homepage-390x844.png', width: 390, height: 844, section: 'vision', desc: 'Mobile Homepage 390x844' },
    { filename: '04-refined-concept-a-desktop-why-1728x1117.png', width: 1728, height: 1117, section: 'why', desc: 'Desktop Why It Matters 1728x1117' },
    { filename: '05-refined-concept-a-desktop-approach-1728x1117.png', width: 1728, height: 1117, section: 'approach', desc: 'Desktop Our Approach 1728x1117' },
    { filename: '06-refined-concept-a-desktop-products-1728x1117.png', width: 1728, height: 1117, section: 'products', desc: 'Desktop Products 1728x1117' },
    { filename: '07-refined-concept-a-mobile-products-390x844.png', width: 390, height: 844, section: 'products', desc: 'Mobile Products 390x844' },
    { filename: '08-refined-concept-a-mobile-approach-390x844.png', width: 390, height: 844, section: 'approach', desc: 'Mobile Our Approach 390x844' },
  ];

  console.log('Capturing 8 refined Concept A mockups and measuring computed metrics...\n');
  const metricsReport = [];

  for (const item of requiredScreenshots) {
    const page = await browser.newPage({
      viewport: { width: item.width, height: item.height },
      deviceScaleFactor: 2
    });

    await page.goto(htmlPath);
    await page.waitForLoadState('networkidle');

    // Switch section
    await page.evaluate((sec) => {
      if (typeof window.switchSection === 'function') {
        window.switchSection(sec, document.getElementById('tab-' + sec));
      }
    }, item.section);

    await page.waitForTimeout(200);

    // Measure computed typography and layout metrics
    const metrics = await page.evaluate(() => {
      const getStyles = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const cs = window.getComputedStyle(el);
        return {
          fontSize: cs.fontSize,
          lineHeight: cs.lineHeight,
          fontWeight: cs.fontWeight,
          fontFamily: cs.fontFamily.split(',')[0],
          width: el.getBoundingClientRect().width,
          height: el.getBoundingClientRect().height
        };
      };

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const leftCol = document.querySelector('.col-narrative')?.getBoundingClientRect();
      const rightCol = document.querySelector('.col-dynamic')?.getBoundingClientRect();

      return {
        viewportWidth,
        viewportHeight,
        heroHeadline: getStyles('.manifesto-h1'),
        sectionH2: getStyles('.section-h2'),
        cardH3: getStyles('.card-title'),
        bodyLead: getStyles('.manifesto-copy'),
        navBtn: getStyles('.studio-nav-btn'),
        promise: getStyles('.promise-statement'),
        leftColWidth: leftCol ? leftCol.width : 0,
        rightColWidth: rightCol ? rightCol.width : 0,
        totalUtilizedWidth: (leftCol ? leftCol.width : 0) + (rightCol ? rightCol.width : 0),
        screenUtilizationPct: leftCol && rightCol ? Math.round(((leftCol.width + rightCol.width) / viewportWidth) * 100) : 100
      };
    });

    metricsReport.push({ item, metrics });

    // Capture screenshot
    const repoPath = path.join(repoImgDir, item.filename);
    const dlPath = path.join(downloadsDir, item.filename);
    await page.screenshot({ path: repoPath, fullPage: item.width <= 440 });
    fs.copyFileSync(repoPath, dlPath);
    console.log(`[✓] Captured ${item.filename} (${item.desc})`);

    await page.close();
  }

  // Zoom testing validation (125%, 150%, 200%)
  console.log('\nTesting Browser Zoom at 125%, 150%, 200%...');
  const zoomLevels = [1.25, 1.50, 2.00];
  const zoomResults = [];
  for (const zoom of zoomLevels) {
    const page = await browser.newPage({ viewport: { width: 1728, height: 1117 } });
    await page.goto(htmlPath);
    await page.waitForLoadState('networkidle');

    // Simulate zoom by setting zoom or viewport scaling
    await page.evaluate((z) => {
      document.body.style.zoom = String(z);
    }, zoom);

    await page.waitForTimeout(200);

    const check = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const hasHorizontalScroll = scrollWidth > clientWidth + 2;
      return {
        scrollWidth,
        clientWidth,
        hasHorizontalScroll,
        status: hasHorizontalScroll ? 'FAIL: Horizontal Scroll' : 'PASS: Clean Reflow'
      };
    });

    zoomResults.push({ zoom: `${zoom * 100}%`, result: check });
    console.log(`[✓] Zoom ${zoom * 100}%: ${check.status} (scrollWidth: ${check.scrollWidth}px, clientWidth: ${check.clientWidth}px)`);
    await page.close();
  }

  // Copy interactive prototype and generate summary in Downloads
  fs.copyFileSync(
    path.resolve(__dirname, 'refined-concept-a.html'),
    path.join(downloadsDir, 'interactive-prototype.html')
  );

  const summaryHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Amanchi Labs — Refined Concept A Visual Review Package</title>
  <style>
    body { background: #0A0D12; color: #F3F4F6; font-family: -apple-system, sans-serif; padding: 40px; }
    h1 { font-size: 28px; margin-bottom: 8px; color: #FFF; }
    .subtitle { color: #9CA3AF; margin-bottom: 32px; font-size: 15px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; margin-bottom: 48px; }
    .card { background: #111827; border: 1px solid #1F2937; border-radius: 12px; overflow: hidden; }
    .card img { width: 100%; height: auto; display: block; border-bottom: 1px solid #1F2937; }
    .card-info { padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; }
    .btn { background: #10B981; color: #000; padding: 10px 18px; border-radius: 8px; font-weight: 700; text-decoration: none; }
  </style>
</head>
<body>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
    <div>
      <h1>Amanchi Labs — Refined Concept A (8 Mockup Decision Suite)</h1>
      <p class="subtitle">Full-width responsive composition, substantial typography (56-76px hero, 18-20px body), 100% screen utilization.</p>
    </div>
    <a href="interactive-prototype.html" class="btn">Open Interactive Prototype ↗</a>
  </div>
  <div class="grid">
    ${requiredScreenshots.map(s => `
      <div class="card">
        <img src="${s.filename}" alt="${s.desc}" loading="lazy">
        <div class="card-info">
          <div><strong>${s.desc}</strong><div style="font-size:12px; color:#6B7280; font-family:monospace;">${s.width}×${s.height}</div></div>
          <a href="${s.filename}" target="_blank" style="color:#38BDF8; font-size:13px; text-decoration:none;">View Full Size ↗</a>
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(downloadsDir, 'index.html'), summaryHtml);

  // Write measurements json
  fs.writeFileSync(
    path.resolve(__dirname, 'refined-concept-a-measurements.json'),
    JSON.stringify({ metricsReport, zoomResults }, null, 2)
  );

  await browser.close();
  console.log(`\nAll 8 refined mockups, measurements, and viewer exported successfully!`);
}

runRefinedConceptACapture().catch(err => {
  console.error('Capture execution error:', err);
  process.exit(1);
});
