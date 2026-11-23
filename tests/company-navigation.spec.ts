import { chromium, expect, test } from '@playwright/test'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const states = [
  ['overview', 'overview'], ['overview/vision', 'overview'], ['overview/why', 'why'],
  ['overview/approach', 'approach'], ['principles', 'principles'], ['products', 'products'],
  ['contact', 'contact'], ['derma', 'derma'], ['llc-tax', 'llc-tax'],
  ['interview', 'interview'], ['fieldtally', 'fieldtally'],
] as const

test('all direct routes and reloads render only the selected view', async ({ page }) => {
  for (const [route, view] of states) {
    await page.goto('/#' + route)
    await expect(page.locator('.company-view')).toHaveAttribute('data-view', view)
    await expect(page.locator('.company-view__article')).toHaveCount(1)
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    await expect(page.locator('#selected-heading')).toBeVisible()
    await expect(page.locator('.company-view__signature')).toHaveCount(1)
    await page.reload()
    await expect(page.locator('.company-view')).toHaveAttribute('data-view', view)
  }
  for (const path of ['/', '/#unknown', '/#overview/invalid']) {
    await page.goto(path)
    await expect(page.locator('.company-view')).toHaveAttribute('data-view', 'overview')
  }
  await expect(page.locator('.panel-canvas')).toHaveCount(0)
})

test('sequential actions, products and history stay in the shared layout', async ({ page }) => {
  await page.goto('/#overview')
  const intro = await page.locator('.company-view__introduction').boundingBox()
  for (const [label, view] of [
    ['Why It Matters', 'why'],
    ['Our Approach', 'approach'],
    ['Explore our principles', 'principles'],
    ['Explore our products', 'products'],
    ['Discover DermaPrivate', 'derma'],
    ['Back to Products', 'products'],
    ['Discover WealthPrivate', 'wealth'],
    ['Back to Products', 'products'],
    ['Back to Our Vision', 'overview'],
  ]) {
    await page.locator('.company-view__article').getByRole('link', { name: label, exact: true }).click()
    await expect(page.locator('.company-view')).toHaveAttribute('data-view', view)
    await expect(page.locator('#selected-heading')).toBeFocused()
    expect(await page.locator('.company-view__introduction').boundingBox()).toEqual(intro)
    expect(await page.locator('.company-view__content').evaluate(element => element.scrollTop)).toBe(0)
  }
  await page.goBack()
  await expect(page.locator('.company-view')).toHaveAttribute('data-view', 'products')
  await page.goForward()
  await expect(page.locator('.company-view')).toHaveAttribute('data-view', 'overview')
})

test('section keyboard, sidebar wrapping, skip link and reduced motion work', async ({ page }) => {
  await page.goto('/#overview')
  const nav = page.getByRole('navigation', { name: 'Company sections' })
  await expect(nav.getByRole('link')).toHaveText(['Our Vision', 'Why It Matters', 'Our Approach', 'Principles', 'Products', 'Contact'])
  await nav.getByRole('link', { name: 'Our Vision', exact: true }).focus()
  await page.keyboard.press('ArrowRight')
  await page.keyboard.press('Enter')
  await expect(page.locator('.company-view')).toHaveAttribute('data-view', 'why')
  await expect(page.locator('#selected-heading')).toBeFocused()
  await nav.getByRole('link', { name: 'Contact', exact: true }).click()
  await page.getByRole('link', { name: 'Skip to content' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()
  const navDock = page.locator('.studio-nav-dock')
  await navDock.getByRole('link', { name: 'Our Vision', exact: true }).focus()
  await page.keyboard.press('ArrowRight')
  await expect(navDock.getByRole('link', { name: 'Why It Matters', exact: true })).toBeFocused()
  await navDock.getByRole('link', { name: 'Products', exact: true }).focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.company-view')).toHaveAttribute('data-view', 'products')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  expect(await page.locator('.company-view__article').evaluate(element => getComputedStyle(element).animationName)).toBe('none')
})

test('mobile applications drawer traps focus, closes and restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/#overview')
  const toggle = page.locator('.mobile-nav__toggle')
  await toggle.click()
  const dialog = page.getByRole('dialog', { name: 'Navigation menu' })
  await expect(dialog.getByRole('navigation', { name: 'Applications' }).getByRole('link')).toHaveText([
    'DermaPrivate',
    'WealthPrivate',
  ])
  const close = dialog.getByRole('button', { name: 'Close navigation menu' })
  await expect(close).toBeFocused()
  await expect(page.locator('#main-content')).toHaveAttribute('inert', '')
  await dialog.getByRole('link', { name: 'WealthPrivate', exact: true }).focus()
  await page.keyboard.press('Tab')
  await expect(dialog.locator('.brand')).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(dialog.getByRole('link', { name: 'WealthPrivate', exact: true })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(toggle).toBeFocused()
  await toggle.click()
  await dialog.getByRole('link', { name: 'DermaPrivate', exact: true }).click()
  await expect(dialog).toHaveCount(0)
  await expect(page.locator('#selected-heading')).toBeFocused()
  await expect(page.locator('#main-content')).not.toHaveAttribute('inert')
  await toggle.click()
  await dialog.getByRole('link', { name: 'DermaPrivate', exact: true }).click()
  await expect(toggle).toBeFocused()
  await toggle.click()
  await page.setViewportSize({ width: 1024, height: 768 })
  await expect(dialog).toHaveCount(0)
  await expect(page.locator('#main-content')).not.toHaveAttribute('inert')
})

for (const [width, height] of [[1728, 1117], [1512, 982], [1440, 900], [1280, 800], [1024, 768], [768, 1024], [390, 844], [375, 812]]) {
  test(`all views fit or scroll without clipping at ${width}x${height}`, async ({ page }) => {
    await page.setViewportSize({ width, height })
    for (const [route] of states.filter(([route]) => route !== 'overview/vision')) {
      await page.goto('/#' + route)
      await page.evaluate(() => document.fonts.ready)
      const content = page.locator('.company-view__content')
      expect(await content.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      const metrics = await content.evaluate(element => ({ height: element.clientHeight, scrollHeight: element.scrollHeight }))
      expect(metrics.height).toBeGreaterThan(0)
      await page.locator('.company-view__signature').scrollIntoViewIfNeeded()
      await expect(page.locator('.company-view__signature')).toBeInViewport()
      await expect(page.locator('#selected-heading')).toHaveCount(1)
    }
  })
}

test('testing status, external link and contacts are correct', async ({ page }) => {
  await page.goto('/#products')
  await expect(page.locator('.company-view__article')).toContainText('IN TESTING')
  await expect(page.locator('.company-view__article')).toContainText('IN DEVELOPMENT')
  for (const route of ['derma', 'llc-tax', 'interview', 'fieldtally']) {
    await page.goto('/#' + route)
    await expect(page.getByRole('navigation', { name: 'Company sections' }).getByRole('link', { name: 'Products', exact: true })).not.toHaveAttribute('aria-current')
  }
  await page.goto('/#derma')
  await expect(page.getByRole('link', { name: 'Explore DermaPrivate', exact: true })).toHaveAttribute('href', 'https://www.dermaprivate.app/')
  await expect(page.getByRole('link', { name: 'Explore DermaPrivate', exact: true })).toHaveAttribute('rel', 'noopener noreferrer')
  await page.goto('/#llc-tax')
  await expect(page.getByRole('link', { name: 'Get in touch about LLCBookKeepingTaxReturn' })).toHaveAttribute('href', 'mailto:founder@amanchilabs.com?subject=LLCBookKeepingTaxReturn%20inquiry')
  await page.goto('/#interview')
  await expect(page.getByRole('link', { name: 'Get in touch about InterviewPrivate' })).toHaveAttribute('href', 'mailto:founder@amanchilabs.com?subject=InterviewPrivate%20inquiry')
  await page.goto('/#fieldtally')
  await expect(page.getByRole('link', { name: 'Get in touch about FieldTally' })).toHaveAttribute('href', 'mailto:founder@amanchilabs.com?subject=FieldTally%20inquiry')
  await page.goto('/#contact')
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(2)
  await page.getByRole('link', { name: 'Website privacy notice' }).click()
  await expect(page.getByRole('heading', { name: 'Website privacy notice' })).toBeVisible()
})

test('metadata, crawler files, fonts and public assets remain valid', async ({ page, request, browser }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('requestfailed', request => errors.push(request.url()))
  for (const [route] of states) {
    await page.goto('/#' + route)
    await page.evaluate(() => document.fonts.ready)
    expect(await page.evaluate(() => document.fonts.check('16px Inter') && document.fonts.check('700 32px "Plus Jakarta Sans"'))).toBe(true)
  }
  await expect(page).toHaveTitle('Amanchi Labs | Privacy-First Software Studio')
  expect(JSON.parse(await page.locator('script[type="application/ld+json"]').innerText()).name).toBe('Amanchi Labs')
  for (const path of ['/robots.txt', '/sitemap.xml', '/privacy.html', '/brand/favicon.ico', '/brand/favicon-16x16.png', '/brand/favicon-32x32.png', '/brand/apple-touch-icon.png', '/brand/og-image.png', '/brand/logo-header.png']) {
    expect((await request.get(path)).status(), path).toBe(200)
  }
  expect(errors).toEqual([])
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } })
  try {
    const noScript = await context.newPage()
    await noScript.goto(String(test.info().project.use.baseURL))
    await expect(noScript.getByRole('main')).toContainText('software development and information technology')
  } finally { await context.close() }
})

test('persistent studio header renders with approved brandmark, dock, and status badge', async ({ page }) => {
  await page.goto('/#overview')
  const header = page.locator('.studio-header')
  await expect(header).toBeVisible()
  await expect(header.locator('.brand img')).toHaveAttribute('src', '/brand/logo-header.png')
  const navDock = header.locator('.studio-nav-dock')
  await expect(navDock).toBeVisible()
  const links = navDock.locator('a')
  await expect(links).toHaveText(['Our Vision', 'Why It Matters', 'Our Approach', 'Principles', 'Products', 'Contact'])
  await expect(navDock.locator('a.is-active')).toHaveText('Our Vision')
  const statusBadge = header.locator('.status-badge')
  await expect(statusBadge).toContainText('Private by Design · Local by Default')
})

test('actual browser zoom keeps every view and footer reachable', async ({ page }) => {
  for (const zoom of [1.25, 1.5, 2.0]) {
    for (const [route] of states) {
      await page.goto('/#' + route)
      await page.evaluate(z => { document.body.style.zoom = String(z) }, zoom)
      expect(await page.locator('.company-view__content').evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
      await page.locator('.company-view__signature').scrollIntoViewIfNeeded()
      await expect(page.locator('.company-view__signature')).toBeInViewport()
    }
  }
})