import { chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const htmlPath = 'file://' + path.resolve(__dirname, 'visual-comparison-gallery.html');
  const imgDir = path.resolve(__dirname, 'img');

  const configs = [
    { name: 'concept-a-1440x900.png', screen: 'concept-a', width: 1440, height: 900, mode: 'mode-1440' },
    { name: 'concept-a-390x844-mobile.png', screen: 'concept-a', width: 440, height: 920, mode: 'mode-390' },
    { name: 'concept-b-1440x900.png', screen: 'concept-b', width: 1440, height: 900, mode: 'mode-1440' },
    { name: 'concept-b-390x844-mobile.png', screen: 'concept-b', width: 440, height: 920, mode: 'mode-390' },
    { name: 'concept-c-1440x900.png', screen: 'concept-c', width: 1440, height: 900, mode: 'mode-1440' },
    { name: 'concept-c-390x844-mobile.png', screen: 'concept-c', width: 440, height: 920, mode: 'mode-390' },
    { name: 'typography-systems-comparison.png', screen: 'specimen', width: 1440, height: 1100, mode: 'mode-1440' },
  ];

  for (const cfg of configs) {
    const page = await browser.newPage({
      viewport: { width: cfg.width, height: cfg.height },
      deviceScaleFactor: 2
    });

    await page.goto(htmlPath);
    await page.waitForLoadState('networkidle');

    // Switch screen and viewport
    await page.evaluate(({ screen, mode }) => {
      document.querySelectorAll('.concept-screen').forEach(el => el.classList.remove('active'));
      const target = document.getElementById('screen-' + screen);
      if (target) target.classList.add('active');
      const container = document.getElementById('deviceContainer');
      container.className = 'device-container ' + mode;
    }, { screen: cfg.screen, mode: cfg.mode });

    await page.waitForTimeout(300);

    const targetEl = await page.$('#deviceContainer');
    if (targetEl) {
      await targetEl.screenshot({ path: path.join(imgDir, cfg.name) });
      console.log(`Saved screenshot: ${cfg.name}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('All mockups captured successfully!');
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
