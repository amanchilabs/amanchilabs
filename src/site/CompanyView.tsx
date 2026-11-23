import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { ArrowIcon, ExternalIcon } from './Icons'
import type { OverviewSection, PanelId } from './hooks/useHashRouter'
import { ArchitectureBlueprint } from './components/ArchitectureBlueprint'
import { ProductCard } from './components/ProductCard'
import './CompanyView.css'

type Props = { activePanel: PanelId; overviewSection: OverviewSection | null }
type View = PanelId | 'why' | 'approach'

const sections = [
  { view: 'overview', hash: '#overview', label: 'Our Vision' },
  { view: 'why', hash: '#overview/why', label: 'Why It Matters' },
  { view: 'approach', hash: '#overview/approach', label: 'Our Approach' },
  { view: 'principles', hash: '#principles', label: 'Principles' },
  { view: 'products', hash: '#products', label: 'Products' },
  { view: 'contact', hash: '#contact', label: 'Contact' },
] as const

function Action({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      className="company-view__action btn-action"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
      {external ? <ExternalIcon aria-hidden="true" /> : <ArrowIcon aria-hidden="true" />}
    </a>
  )
}

function ViewContent({ view }: { view: View }) {
  switch (view) {
    case 'overview':
    case 'vision':
      return (
        <>
          <p className="company-view__eyebrow">OUR VISION</p>
          <h2 id="selected-heading" tabIndex={-1}>Your app. Your device. Your information.</h2>
          <div className="company-view__copy">
            <p>We believe powerful software should work for you without requiring you to hand over your personal information.</p>
            <p>Our goal is intelligent, local-first applications that work independently on your device, without requiring an account, cloud storage of personal documents, or a constant internet connection.</p>
            <p>When you want more intelligence, optional external AI integrations put that choice in your hands. Product capabilities and requirements vary; these are design goals.</p>
          </div>

          <div className="dynamic-card" style={{ marginTop: '28px' }}>
            <span className="manifesto-eyebrow">Architectural Independence</span>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-ink-muted)', marginBottom: '14px' }}>
              Our design standard emphasizes local-first execution. Your personal files remain on your hardware, with optional user-initiated AI integrations providing extra capabilities when you choose.
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-forest)', fontWeight: 600 }}>
              Local-First Design Standard &middot; Optional External AI
            </div>
          </div>

          {/* Bento Preview Grid for Approved Public Portfolio */}
          <div className="vision-bento" style={{ marginTop: '28px' }}>
            <ProductCard product="wealth" mode="preview" />
            <ProductCard product="derma" mode="preview" />
          </div>

          <div style={{ marginTop: '32px' }}>
            <Action href="#overview/why">Why It Matters</Action>
          </div>
        </>
      )

    case 'why':
      return (
        <>
          <p className="company-view__eyebrow">WHY IT MATTERS</p>
          <h2 id="selected-heading" tabIndex={-1}>Your life is not a dataset.</h2>
          <div className="company-view__copy">
            <p>Your financial records, routines, conversations, and personal documents are parts of your life. Using an application shouldn't automatically turn them into another company's stored asset.</p>
            <p>Connected services can be valuable. But convenience should come with understandable choices about where information goes and who can access it.</p>
            <p>Local processing can reduce unnecessary exposure. It doesn't eliminate security risks, and external AI providers have their own data-handling policies.</p>
          </div>

          <div className="why-pillars-grid">
            <div className="why-pillar">
              <strong>Sovereign Data Storage</strong>
              <p>Local storage keeps personal records on hardware you own. If your network connection drops, your software keeps functioning.</p>
            </div>
            <div className="why-pillar">
              <strong>Conscious AI Boundaries</strong>
              <p>Convenience should come with clear boundaries. You authorize what information leaves your device, with external provider policies applying.</p>
            </div>
            <div className="why-pillar">
              <strong>No Subscription Hostage</strong>
              <p>Your records live in standard open database formats under your control, free from arbitrary cloud locks or forced account migration.</p>
            </div>
            <div className="why-pillar">
              <strong>Minimizing Surface Exposure</strong>
              <p>Personal documents that are stored locally cannot be compromised in bulk cloud database breaches. Confinement reduces surface exposure.</p>
            </div>
          </div>

          <p className="company-view__statement">Useful software. Meaningful independence.</p>
          <Action href="#overview/approach">Our Approach</Action>
        </>
      )

    case 'approach':
      return (
        <>
          <p className="company-view__eyebrow">OUR APPROACH</p>
          <h2 id="selected-heading" tabIndex={-1}>Local-first by design. AI-enabled by choice.</h2>
          <p className="company-view__copy">
            Design for personal information to stay on your device. When you initiate an optional AI request, your app sends authorized information to the external provider used by that integration.
          </p>
          <ArchitectureBlueprint />
          <Action href="#principles">Explore our principles</Action>
        </>
      )

    case 'principles':
      return (
        <>
          <p className="company-view__eyebrow">PRINCIPLES</p>
          <h2 id="selected-heading" tabIndex={-1}>Technology should work for you.</h2>
          <div className="company-view__grid">
            <div>
              <h3>Private by design</h3>
              <p>Design to store and process personal information on your device, minimizing unnecessary collection and centralized storage of personal documents.</p>
            </div>
            <div>
              <h3>AI on your terms</h3>
              <p>Design optional, user-initiated AI integrations that explain what is sent to the external provider. Provider policies still apply.</p>
            </div>
            <div>
              <h3>You stay in control</h3>
              <p>Make storage and sharing understandable, and design meaningful choices about what to retain, send, export, or remove.</p>
            </div>
            <div>
              <h3>Made for real life</h3>
              <p>Useful personal tools should not require unnecessary accounts or uploads. These are design goals, not universal product guarantees.</p>
            </div>
          </div>
          <Action href="#products">Explore our products</Action>
        </>
      )

    case 'products':
      return (
        <>
          <p className="company-view__eyebrow">PRODUCTS</p>
          <h2 id="selected-heading" tabIndex={-1}>Personal applications. A shared philosophy.</h2>
          <p className="company-view__copy" style={{ marginBottom: '24px' }}>
            Intelligent personal applications built on local-first processing, mathematical clarity, and optional AI when you choose.
          </p>

          <div className="product-showcase-container">
            <div className="dynamic-card">
              <span className="card-meta-tag" style={{ color: 'var(--color-sage)' }}>
                ROUTINE INTELLIGENCE &middot; IN TESTING
              </span>
              <h3 className="showcase-title">DermaPrivate</h3>
              <p className="company-view__copy" style={{ marginTop: '8px' }}>
                Skincare planning, personal routines, and ingredient-aware safety checks.
              </p>
              <div style={{ marginTop: '16px' }}>
                <Action href="#derma">Discover DermaPrivate</Action>
              </div>
            </div>

            <div className="dynamic-card">
              <span className="card-meta-tag" style={{ color: 'var(--color-ice-blue)' }}>
                FINANCIAL VAULT &middot; IN DEVELOPMENT
              </span>
              <h3 className="showcase-title">WealthPrivate</h3>
              <p className="company-view__copy" style={{ marginTop: '8px' }}>
                Multi-entity LLC bookkeeping ledger and tax outlook foundation with local encrypted storage.
              </p>
              <div style={{ marginTop: '16px' }}>
                <Action href="#wealth">Discover WealthPrivate</Action>
              </div>
            </div>
          </div>

          <div className="company-view__products-footer" style={{ marginTop: '32px' }}>
            <p className="company-view__copy company-view__products-footnote">
              Local-first by design. AI-enabled by choice. Available integrations and data-handling practices vary by product.
            </p>
            <Action href="#overview">Back to Our Vision</Action>
          </div>
        </>
      )

    case 'wealth':
      return (
        <>
          <p className="company-view__eyebrow">WEALTHPRIVATE / IN DEVELOPMENT</p>
          <h2 id="selected-heading" tabIndex={-1}>Private personal financial intelligence.</h2>
          <ProductCard product="wealth" mode="showcase" />
        </>
      )

    case 'derma':
      return (
        <>
          <p className="company-view__eyebrow">DERMAPRIVATE / IN TESTING</p>
          <h2 id="selected-heading" tabIndex={-1}>Personalized skincare. On your terms.</h2>
          <ProductCard product="derma" mode="showcase" />
        </>
      )

    case 'contact':
      return (
        <>
          <p className="company-view__eyebrow">CONTACT</p>
          <h2 id="selected-heading" tabIndex={-1}>Let's build something useful.</h2>
          <p className="company-view__copy">
            Thoughtful questions, engineering discussions, or product feedback &mdash; we welcome direct conversation.
          </p>

          <div className="dynamic-card" style={{ marginTop: '24px' }}>
            <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px' }}>
              Executive &amp; Studio Inquiries
            </strong>
            <p style={{ fontSize: '15px', color: 'var(--color-ink-muted)', marginBottom: '16px' }}>
              Reach out regarding technology partnerships, product feedback, or studio inquiries.
            </p>
            <div className="company-view__contacts">
              <a href="mailto:founder@amanchilabs.com?subject=Hello%20Amanchi%20Labs" className="btn-action">
                <span>Partnerships:</span> founder@amanchilabs.com
              </a>
              <a href="mailto:support@amanchilabs.com?subject=Product%20support" className="btn-action" style={{ background: 'var(--color-surface)' }}>
                <span>Support:</span> support@amanchilabs.com
              </a>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <Action href="#overview">Back to Our Vision</Action>
          </div>
          <p className="company-view__disclosure" style={{ marginTop: '28px' }}>
            &copy; 2026 Amanchi Labs &middot; Independent product studio &middot; <a href="/privacy.html">Website privacy notice</a>
          </p>
        </>
      )

    // Dedicated legacy views to preserve deep links without breaking
    case 'llc-tax':
      return (
        <>
          <p className="company-view__eyebrow">LLCBOOKKEEPINGTAXRETURN / IN DEVELOPMENT</p>
          <h2 id="selected-heading" tabIndex={-1}>Multi-entity bookkeeping. Integrated tax outlook.</h2>
          <div className="dynamic-card">
            <p className="company-view__copy">
              Multi-entity LLC bookkeeping ledger and tax outlook foundation designed for small business owners with local encrypted storage.
            </p>
            <p className="company-view__disclosure" style={{ marginTop: '16px' }}>
              In active development. Tax outlook foundation provides organized record clarity and does not constitute formal tax or legal advice.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Action href="mailto:founder@amanchilabs.com?subject=LLCBookKeepingTaxReturn%20inquiry">
                Get in touch about LLCBookKeepingTaxReturn
              </Action>
              <a href="#products" className="return-link" style={{ marginLeft: '16px' }}>Back to Products</a>
            </div>
          </div>
        </>
      )

    case 'interview':
      return (
        <>
          <p className="company-view__eyebrow">INTERVIEWPRIVATE / IN DEVELOPMENT</p>
          <h2 id="selected-heading" tabIndex={-1}>Interview preparation, made personal.</h2>
          <div className="dynamic-card">
            <p className="company-view__copy">
              Privacy-first interview preparation platform enabling candidates to practice and improve performance with on-device transcripts and candidate control.
            </p>
            <p className="company-view__disclosure" style={{ marginTop: '16px' }}>
              In active development. On-device model availability and performance vary by hardware capability.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Action href="mailto:founder@amanchilabs.com?subject=InterviewPrivate%20inquiry">
                Get in touch about InterviewPrivate
              </Action>
              <a href="#products" className="return-link" style={{ marginLeft: '16px' }}>Back to Products</a>
            </div>
          </div>
        </>
      )

    case 'fieldtally':
      return (
        <>
          <p className="company-view__eyebrow">FIELDTALLY / IN DEVELOPMENT &middot; SEMI-PRIVATE</p>
          <h2 id="selected-heading" tabIndex={-1}>Collaborative field service. Purpose-built controls.</h2>
          <div className="dynamic-card">
            <p className="company-view__copy">
              Field-service workspace for jobs, clients, invoicing, and inventory with offline SQLite caching and purpose-built collaboration controls.
            </p>
            <p className="company-view__disclosure" style={{ marginTop: '16px' }}>
              In active development. FieldTally is business management software and does not provide financial or legal advice.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Action href="mailto:founder@amanchilabs.com?subject=FieldTally%20inquiry">
                Get in touch about FieldTally
              </Action>
              <a href="#products" className="return-link" style={{ marginLeft: '16px' }}>Back to Products</a>
            </div>
          </div>
        </>
      )
  }
}

export function CompanyView({ activePanel, overviewSection }: Props) {
  const view: View =
    activePanel === 'overview' && overviewSection && overviewSection !== 'vision'
      ? overviewSection
      : activePanel === 'vision'
      ? 'overview'
      : activePanel

  const headingRef = useRef<HTMLDivElement>(null)
  const previousView = useRef<View | null>(null)

  useEffect(() => {
    const shouldFocus =
      previousView.current !== null || (activePanel === 'overview' && overviewSection !== null)
    previousView.current = view
    if (!shouldFocus) return
    let secondFrame = 0
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() =>
        headingRef.current?.querySelector<HTMLElement>('#selected-heading')?.focus({ preventScroll: true })
      )
    })
    return () => {
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)
    }
  }, [view, activePanel, overviewSection])

  return (
    <main className="company-view studio-viewport-grid" data-view={view} id="main-content" tabIndex={-1}>
      {/* Left Narrative Column (Commanding Manifesto Presence, 40% Width) */}
      <aside className="col-narrative">
        <div>
          <span className="manifesto-eyebrow">Studio Manifesto</span>
          <h1 className="manifesto-h1">
            Private by Design.<br />
            Local by Default.<br />
            <span>AI by Choice.</span>
          </h1>
          <p className="manifesto-copy">
            Your life is personal. Your technology should respect that. We build intelligent personal applications designed around on-device processing, independent everyday use, and optional external AI strictly when you choose to use it.
          </p>

          <div className="promise-panel">
            <span className="promise-label">Customer Promise</span>
            <div className="promise-statement">Your Data. Your Device. Your Control.</div>
          </div>

          <div className="crypto-badges-list">
            <div className="crypto-badge-item">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
              <span>On-Device Storage &amp; Processing by Design</span>
            </div>
            <div className="crypto-badge-item">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>Optional External AI: User-Initiated by Choice</span>
            </div>
            <div className="crypto-badge-item">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Independent Everyday Use: No Cloud Account Required</span>
            </div>
          </div>
        </div>

        <footer className="narrative-footer">
          <span>&copy; 2026 Amanchi Labs</span>
          <span>Independent Technology Studio</span>
        </footer>
      </aside>

      {/* Right Dynamic Canvas (Changes in Place without Layout Shifts, 60% Width) */}
      <section className="col-dynamic" aria-label="Dynamic Content View">
        <header className="company-view__introduction">
          <nav
            className="company-view__navigation"
            aria-label="Company sections"
            onKeyDown={event => {
              if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return
              const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('a'))
              const index = links.indexOf(document.activeElement as HTMLAnchorElement)
              if (index < 0) return
              event.preventDefault()
              links[(index + (event.key === 'ArrowRight' ? 1 : -1) + links.length) % links.length].focus()
            }}
          >
            {sections.map(section => (
              <a
                key={section.view}
                href={section.hash}
                aria-current={view === section.view ? 'location' : undefined}
                data-parent-active={section.view === 'products' && (view === 'derma' || view === 'wealth') ? '' : undefined}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="company-view__content" key={view} ref={headingRef}>
          <article className="company-view__article" aria-labelledby="selected-heading">
            <ViewContent view={view} />
          </article>
          <footer className="company-view__signature">
            <strong>Private by Design. Local by Default.</strong>
            <span>Your Data. Your Device. Your Control.</span>
          </footer>
        </div>
      </section>

      <p className="company-view__announcement" role="status">
        {view === 'overview'
          ? 'Our Vision'
          : view === 'why'
          ? 'Why It Matters'
          : view === 'approach'
          ? 'Our Approach'
          : view === 'derma'
          ? 'DermaPrivate'
          : view === 'wealth'
          ? 'WealthPrivate'
          : view.charAt(0).toUpperCase() + view.slice(1)}
      </p>
    </main>
  )
}
