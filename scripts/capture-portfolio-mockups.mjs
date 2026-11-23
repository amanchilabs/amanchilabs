#!/usr/bin/env node
/**
 * scripts/capture-portfolio-mockups.mjs
 *
 * Launches Playwright Chromium to capture high-fidelity 2x Retina screenshots
 * of the 3-application portfolio mockups (Products overview + 3 product-detail views)
 * across Desktop (1440x900) and Mobile (390x844).
 */

import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, mkdir, copyFile, writeFile } from 'fs/promises';
import { resolve, extname, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DOCS_IMG = resolve(ROOT, 'docs/reviews/amanchilabs-portfolio-update/img');
const DOWNLOADS_DIR = '/Users/veerrajuamanchi/Downloads/Amanchi-Labs-Portfolio-Update-2026-11-23';

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

async function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = req.url.split('?')[0];
      let filePath;
      if (urlPath === '/' || urlPath === '/preview') {
        filePath = resolve(ROOT, 'docs/reviews/amanchilabs-portfolio-update/portfolio-update-preview.html');
      } else if (urlPath.startsWith('/brand/')) {
        filePath = resolve(ROOT, 'public' + urlPath);
      } else {
        filePath = resolve(ROOT, '.' + urlPath);
      }

      const content = await readFile(filePath);
      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise(res => {
    server.listen(5188, '127.0.0.1', () => res(server));
  });
}

const SHOTS = [
  // Desktop 1440x900
  { name: '01-desktop-1440-products-overview.png', view: 'products', width: 1440, height: 900, deviceScaleFactor: 2 },
  { name: '02-desktop-1440-llcbookkeepingtaxreturn-detail.png', view: 'llc', width: 1440, height: 900, deviceScaleFactor: 2 },
  { name: '03-desktop-1440-dermaprivate-detail.png', view: 'derma', width: 1440, height: 900, deviceScaleFactor: 2 },
  { name: '04-desktop-1440-camping-tally-detail.png', view: 'camping', width: 1440, height: 900, deviceScaleFactor: 2 },

  // Mobile 390x844
  { name: '05-mobile-390-products-overview.png', view: 'products', width: 390, height: 844, deviceScaleFactor: 2 },
  { name: '06-mobile-390-llcbookkeepingtaxreturn-detail.png', view: 'llc', width: 390, height: 844, deviceScaleFactor: 2 },
  { name: '07-mobile-390-dermaprivate-detail.png', view: 'derma', width: 390, height: 844, deviceScaleFactor: 2 },
  { name: '08-mobile-390-camping-tally-detail.png', view: 'camping', width: 390, height: 844, deviceScaleFactor: 2 },
];

async function main() {
  await mkdir(DOCS_IMG, { recursive: true });
  await mkdir(DOWNLOADS_DIR, { recursive: true });

  console.log('Starting preview server on http://127.0.0.1:5188...');
  const server = await startServer();
  const browser = await chromium.launch();

  for (const shot of SHOTS) {
    const page = await browser.newPage({
      viewport: { width: shot.width, height: shot.height },
      deviceScaleFactor: shot.deviceScaleFactor,
    });

    await page.goto('http://127.0.0.1:5188/preview');
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate((viewId) => {
      // @ts-ignore
      window.showView(viewId);
    }, shot.view);

    // Wait briefly for layout stabilization
    await page.waitForTimeout(200);

    const docPath = join(DOCS_IMG, shot.name);
    const dlPath = join(DOWNLOADS_DIR, shot.name);

    await page.screenshot({ path: docPath, fullPage: false });
    await copyFile(docPath, dlPath);

    console.log(`Captured: ${shot.name} (${shot.width}x${shot.height})`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('\nAll 8 portfolio mockups captured successfully!');
  console.log(`  Saved to: ${DOCS_IMG}`);
  console.log(`  Saved to: ${DOWNLOADS_DIR}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
