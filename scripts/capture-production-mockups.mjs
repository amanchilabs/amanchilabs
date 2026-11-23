import { chromium } from 'playwright';
import { mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { createServer } from 'vite';

const OUTPUT_DIR = join(process.cwd(), 'docs/reviews/amanchilabs-ux-transformation/img-production');
const DOWNLOADS_DIR = '/Users/veerrajuamanchi/Downloads/Amanchi-Labs-Production-Transformed-2026-11-23';

mkdirSync(OUTPUT_DIR, { recursive: true });
mkdirSync(DOWNLOADS_DIR, { recursive: true });

async function run() {
  console.log('Starting Vite server for screenshot capture...');
  const server = await createServer({
    server: { host: '127.0.0.1', port: 5199, strictPort: true }
  });
  await server.listen();
  const baseURL = 'http://127.0.0.1:5199';

  console.log(`Server listening on ${baseURL}`);

  const browser = await chromium.launch();

  const captures = [
    // 16-inch MacBook Pro (1728x1117)
    { name: '01-desktop-1728-homepage-vision.png', hash: '#overview', width: 1728, height: 1117 },
    { name: '02-desktop-1728-why-it-matters.png', hash: '#overview/why', width: 1728, height: 1117 },
    { name: '03-desktop-1728-our-approach-blueprint.png', hash: '#overview/approach', width: 1728, height: 1117 },
    { name: '04-desktop-1728-products-overview.png', hash: '#products', width: 1728, height: 1117 },
    { name: '05-desktop-1728-wealthprivate-showcase.png', hash: '#wealth', width: 1728, height: 1117 },
    { name: '06-desktop-1728-dermaprivate-showcase.png', hash: '#derma', width: 1728, height: 1117 },
    { name: '07-desktop-1728-principles.png', hash: '#principles', width: 1728, height: 1117 },
    { name: '08-desktop-1728-contact.png', hash: '#contact', width: 1728, height: 1117 },

    // 14-inch MacBook Pro (1512x982)
    { name: '09-desktop-1512-homepage-vision.png', hash: '#overview', width: 1512, height: 982 },
    { name: '10-desktop-1512-our-approach.png', hash: '#overview/approach', width: 1512, height: 982 },

    // Standard Desktop (1440x900)
    { name: '11-desktop-1440-homepage.png', hash: '#overview', width: 1440, height: 900 },
    { name: '12-desktop-1440-products.png', hash: '#products', width: 1440, height: 900 },

    // Laptop (1280x800)
    { name: '13-laptop-1280-homepage.png', hash: '#overview', width: 1280, height: 800 },

    // Tablet (1024x768 and 768x1024)
    { name: '14-tablet-1024-homepage.png', hash: '#overview', width: 1024, height: 768 },
    { name: '15-tablet-768-homepage.png', hash: '#overview', width: 768, height: 1024 },

    // Mobile (390x844 iPhone 14/15/16)
    { name: '16-mobile-390-homepage-vision.png', hash: '#overview', width: 390, height: 844 },
    { name: '17-mobile-390-why-it-matters.png', hash: '#overview/why', width: 390, height: 844 },
    { name: '18-mobile-390-our-approach.png', hash: '#overview/approach', width: 390, height: 844 },
    { name: '19-mobile-390-products.png', hash: '#products', width: 390, height: 844 },
    { name: '20-mobile-390-wealthprivate.png', hash: '#wealth', width: 390, height: 844 },
    { name: '21-mobile-390-dermaprivate.png', hash: '#derma', width: 390, height: 844 },
  ];

  for (const item of captures) {
    const page = await browser.newPage({
      viewport: { width: item.width, height: item.height },
      deviceScaleFactor: 2
    });
    await page.goto(`${baseURL}/${item.hash}`);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);

    const outPath = join(OUTPUT_DIR, item.name);
    await page.screenshot({ path: outPath, fullPage: item.width < 1024 });
    copyFileSync(outPath, join(DOWNLOADS_DIR, item.name));
    console.log(`Captured: ${item.name}`);
    await page.close();
  }

  // Capture Mobile Navigation Drawer
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2
  });
  await mobilePage.goto(`${baseURL}/#overview`);
  await mobilePage.evaluate(() => document.fonts.ready);
  await mobilePage.waitForTimeout(200);
  await mobilePage.locator('.mobile-nav__toggle').click();
  await mobilePage.waitForTimeout(300);
  const drawerOutPath = join(OUTPUT_DIR, '22-mobile-390-navigation-drawer.png');
  await mobilePage.screenshot({ path: drawerOutPath });
  copyFileSync(drawerOutPath, join(DOWNLOADS_DIR, '22-mobile-390-navigation-drawer.png'));
  console.log('Captured: 22-mobile-390-navigation-drawer.png');
  await mobilePage.close();

  await browser.close();
  await server.close();
  console.log(`\nAll 22 production screenshots captured successfully in ${OUTPUT_DIR} and ${DOWNLOADS_DIR}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
