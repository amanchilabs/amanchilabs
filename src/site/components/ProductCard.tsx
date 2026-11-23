import { ArrowIcon, ExternalIcon } from '../Icons'
import './ProductCard.css'

export type ProductType = 'llc' | 'derma' | 'camping' | 'wealth'
type Mode = 'preview' | 'showcase'

type Props = {
  product: ProductType
  mode: Mode
}

export function ProductCard({ product, mode }: Props) {
  // LLCBookKeepingTaxReturn
  if (product === 'llc') {
    return mode === 'preview' ? (
      <div className="product-preview-card card-llc">
        <div>
          <span className="card-meta-tag">BUSINESS FINANCE &amp; TAX READINESS &middot; IN DEVELOPMENT</span>
          <h3 className="card-title">LLCBookKeepingTaxReturn</h3>
          <p className="card-desc">
            Bookkeeping, member ownership, financial reporting, and tax preparation support for small businesses and multi-member LLCs.
          </p>
        </div>
        <a className="btn-action" href="#llc-tax">
          Discover LLCBookKeepingTaxReturn <ArrowIcon aria-hidden="true" />
        </a>
      </div>
    ) : (
      <div className="showcase-card llc">
        <div className="showcase-head-row">
          <div>
            <span className="card-meta-tag" style={{ color: 'var(--color-forest)' }}>
              BUSINESS BOOKKEEPING &amp; TAX INTELLIGENCE &middot; IN DEVELOPMENT
            </span>
            <h3 className="showcase-title">LLCBookKeepingTaxReturn</h3>
          </div>
          <span className="status-badge" style={{ background: '#FEF3C7', color: '#92400E', borderColor: '#FDE68A' }}>
            In Development
          </span>
        </div>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, margin: '12px 0 8px', color: 'var(--color-ink-primary)' }}>
          Your business finances. Organized. Understood. Tax-ready.
        </h4>
        <p className="showcase-lead">
          A comprehensive bookkeeping and tax-readiness application designed for LLC owners who want greater control over their financial records.
        </p>
        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
          Track business transactions, manage member ownership and contributions, understand financial performance, and prepare organized information for tax reporting.
        </p>

        <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '20px 0 12px' }}>
          Core capabilities
        </h5>
        <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', margin: '16px 0 24px' }}>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Business Bookkeeping</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Income, expenses, transaction categorization, and financial records.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Member Ownership &amp; Capital</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Track member ownership percentages, contributions, distributions, and capital accounts.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Financial Reporting</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Profit and loss, financial summaries, and exportable business records.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Tax Readiness</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Designed to support Schedule C and multi-member LLC partnership reporting workflows, including Form 1065 and Schedule K-1 preparation.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Ownership &amp; Allocation Tracking</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Planned support for ownership changes, partner allocations, tax basis, and at-risk calculations.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Privacy-First Architecture</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Designed to keep business financial information under the owner's control, with local-first processing and optional intelligence features.</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
          <a
            href="mailto:founder@amanchilabs.com?subject=LLCBookKeepingTaxReturn%20inquiry"
            className="btn-action btn-action--primary"
          >
            Get in touch about LLCBookKeepingTaxReturn <ArrowIcon aria-hidden="true" />
          </a>
          <a href="#products" className="return-link">
            Back to Products
          </a>
        </div>
        <p className="showcase-footnote">
          *In development. Tax features and calculations require validation before use for actual filings. The application is not a substitute for professional tax advice.
        </p>
      </div>
    )
  }

  // Camping-Tally
  if (product === 'camping') {
    return mode === 'preview' ? (
      <div className="product-preview-card card-camping">
        <div>
          <span className="card-meta-tag">GROUP CAMPING &amp; TRIP COORDINATION &middot; IN DEVELOPMENT</span>
          <h3 className="card-title">Camping-Tally</h3>
          <p className="card-desc">
            Plan camping trips together. Coordinate attendance, cabin reservations, carpools, responsibilities, and shared expenses in one organized platform.
          </p>
        </div>
        <a className="btn-action" href="#camping">
          Discover Camping-Tally <ArrowIcon aria-hidden="true" />
        </a>
      </div>
    ) : (
      <div className="showcase-card camping">
        <div className="showcase-head-row">
          <div>
            <span className="card-meta-tag" style={{ color: 'var(--color-ice-blue)' }}>
              GROUP CAMPING &amp; TRIP MANAGEMENT &middot; IN DEVELOPMENT
            </span>
            <h3 className="showcase-title">Camping-Tally</h3>
          </div>
          <span className="status-badge" style={{ background: '#E0F2FE', color: '#0369A1', borderColor: '#BAE6FD' }}>
            In Development
          </span>
        </div>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, margin: '12px 0 8px', color: 'var(--color-ink-primary)' }}>
          Better camping trips. Less coordination. More adventure.
        </h4>
        <p className="showcase-lead">
          A collaborative camping coordination platform designed to make organizing group trips simpler, more transparent, and less stressful.
        </p>
        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
          Bring your group together to plan upcoming trips, manage attendance, coordinate logistics, and keep everyone informed.
        </p>

        <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '20px 0 12px' }}>
          Core capabilities
        </h5>
        <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', margin: '16px 0 24px' }}>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Trip Planning &amp; Calendar</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Organize upcoming camping trips, destinations, dates, and important milestones.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>RSVP &amp; Attendance</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Collect member responses, track confirmed participants, manage capacity, and coordinate waitlists.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Cabin &amp; Campsite Coordination</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Track reservations, cabin availability, and accommodation arrangements.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Carpools &amp; Travel Logistics</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Coordinate transportation, available seats, departure arrangements, and travel responsibilities.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Group Responsibilities</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Organize meals, supplies, packing activities, and shared camping duties.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Shared Expenses &amp; Financial Coordination</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Support transparent expense tracking, contributions, and trip-related financial coordination as those features become available.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Trip Readiness &amp; Notifications</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Highlight important tasks, deadlines, and unresolved planning issues so the group can prepare together.</span>
          </div>
          <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Private Group Collaboration</strong>
            <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Designed for authorized group members, with appropriate access controls for shared trip information.</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
          <a
            href="mailto:founder@amanchilabs.com?subject=Camping-Tally%20inquiry"
            className="btn-action btn-action--primary"
          >
            Get in touch about Camping-Tally <ArrowIcon aria-hidden="true" />
          </a>
          <a href="#products" className="return-link">
            Back to Products
          </a>
        </div>
        <p className="showcase-footnote">
          *In development. Availability and individual capabilities depend on the release stage.
        </p>
      </div>
    )
  }

  // Legacy WealthPrivate (Transition Notice)
  if (product === 'wealth') {
    return mode === 'preview' ? (
      <div className="product-preview-card card-wealth">
        <div>
          <span className="card-meta-tag">Portfolio Transition &middot; Updated</span>
          <h3 className="card-title">WealthPrivate</h3>
          <p className="card-desc">
            WealthPrivate has transitioned into our specialized business accounting and tax-readiness roadmap.
          </p>
        </div>
        <a className="btn-action" href="#wealth">
          View Transition Notice <ArrowIcon aria-hidden="true" />
        </a>
      </div>
    ) : (
      <div className="showcase-card vault">
        <div className="showcase-head-row">
          <div>
            <span className="card-meta-tag" style={{ color: 'var(--color-ink-subtle)' }}>
              PORTFOLIO TRANSITION &middot; NOTICE
            </span>
            <h3 className="showcase-title">WealthPrivate</h3>
          </div>
          <span className="status-badge" style={{ background: '#F1F5F9', color: '#0F172A', borderColor: '#CBD5E1' }}>
            Transition Notice
          </span>
        </div>
        <p className="showcase-lead">
          WealthPrivate development has been transitioned into our specialized business accounting and tax-readiness roadmap.
        </p>
        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
          For business bookkeeping, member capital tracking, and multi-member LLC tax reporting, please explore <strong>LLCBookKeepingTaxReturn</strong>. For personal routine intelligence, explore <strong>DermaPrivate</strong>.
        </p>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
          <a href="#llc-tax" className="btn-action btn-action--primary">
            Discover LLCBookKeepingTaxReturn <ArrowIcon aria-hidden="true" />
          </a>
          <a href="#derma" className="btn-action">
            Discover DermaPrivate <ArrowIcon aria-hidden="true" />
          </a>
          <a href="#products" className="return-link">
            Back to Products
          </a>
        </div>
      </div>
    )
  }

  // DermaPrivate
  return mode === 'preview' ? (
    <div className="product-preview-card card-derma">
      <div>
        <span className="card-meta-tag">PERSONAL SKINCARE INTELLIGENCE &middot; IN TESTING</span>
        <h3 className="card-title">DermaPrivate</h3>
        <p className="card-desc">
          Understand your skincare products, build personalized routines, and explore ingredient-aware insights with privacy-first intelligence.
        </p>
      </div>
      <a className="btn-action" href="#derma">
        Discover DermaPrivate <ArrowIcon aria-hidden="true" />
      </a>
    </div>
  ) : (
    <div className="showcase-card derma">
      <div className="showcase-head-row">
        <div>
          <span className="card-meta-tag" style={{ color: 'var(--color-sage)' }}>
            PERSONAL SKINCARE INTELLIGENCE &middot; IN TESTING
          </span>
          <h3 className="showcase-title" style={{ color: 'var(--color-forest)' }}>
            DermaPrivate
          </h3>
        </div>
        <span
          className="status-badge"
          style={{ background: 'rgba(61,107,80,0.1)', color: 'var(--color-sage)', borderColor: 'rgba(61,107,80,0.3)' }}
        >
          In Testing &middot; Web Companion
        </span>
      </div>
      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, margin: '12px 0 8px', color: 'var(--color-ink-primary)' }}>
        Smarter skincare. Your routine. Your control.
      </h4>
      <p className="showcase-lead">
        A privacy-first skincare companion designed to help you understand the products you use, organize your daily routines, and make more informed skincare decisions.
      </p>
      <p style={{ color: 'var(--color-ink-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
        Bring your products and routines together in one personal experience, with optional AI assistance when you want another perspective.
      </p>

      <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '20px 0 12px' }}>
        Core capabilities
      </h5>
      <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', margin: '16px 0 24px' }}>
        <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
          <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Personalized Routine Planning</strong>
          <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Organize morning and evening skincare routines with clear, manageable steps.</span>
        </div>
        <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
          <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Product &amp; Ingredient Awareness</strong>
          <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Review skincare products and available ingredient information to better understand your routine.</span>
        </div>
        <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
          <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Ingredient Compatibility Insights</strong>
          <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Rule-based observations help identify potential ingredient conflicts and routine considerations.</span>
        </div>
        <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
          <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Routine Tracking</strong>
          <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Keep track of your skincare activities and develop more consistent habits.</span>
        </div>
        <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
          <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Optional AI Assistance</strong>
          <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Explore AI-assisted suggestions when you choose. AI recommendations are proposals, not automatic changes to your routine.</span>
        </div>
        <div className="capability-card" style={{ background: 'var(--color-wealth-tint)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
          <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Privacy-First Experience</strong>
          <span style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>Designed around local-first personal skincare management and user-controlled optional AI interactions.</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
        <a
          href="https://www.dermaprivate.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-action btn-action--primary"
        >
          Explore DermaPrivate <ExternalIcon aria-hidden="true" />
        </a>
        <a href="#products" className="return-link">
          Back to Products
        </a>
      </div>
      <p className="showcase-footnote">
        *In testing. Features may change before release. Ingredient observations and AI suggestions are informational and do not replace professional medical advice.
      </p>
    </div>
  )
}
