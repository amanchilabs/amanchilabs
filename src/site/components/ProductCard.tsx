import { ArrowIcon, ExternalIcon } from '../Icons'
import './ProductCard.css'

type ProductType = 'wealth' | 'derma'
type Mode = 'preview' | 'showcase'

type Props = {
  product: ProductType
  mode: Mode
}

export function ProductCard({ product, mode }: Props) {
  if (product === 'wealth') {
    return mode === 'preview' ? (
      <div className="product-preview-card card-wealth">
        <div>
          <span className="card-meta-tag">Financial Vault &middot; In Development</span>
          <h3 className="card-title">WealthPrivate</h3>
          <p className="card-desc">
            Multi-entity LLC bookkeeping ledger and tax outlook foundation with local encrypted storage.
          </p>
        </div>
        <a className="btn-action" href="#wealth">
          Discover WealthPrivate <ArrowIcon aria-hidden="true" />
        </a>
      </div>
    ) : (
      <div className="showcase-card vault">
        <div className="showcase-head-row">
          <div>
            <span className="card-meta-tag" style={{ color: 'var(--color-ice-blue)' }}>
              FINANCIAL VAULT &middot; IN DEVELOPMENT
            </span>
            <h3 className="showcase-title">WealthPrivate</h3>
          </div>
          <span className="status-badge" style={{ background: '#F1F5F9', color: '#0F172A', borderColor: '#CBD5E1' }}>
            Encrypted Local Storage
          </span>
        </div>
        <p className="showcase-lead">
          Multi-entity LLC bookkeeping ledger and tax outlook foundation. Built with a local-first architecture and deterministic double-entry accounting.
        </p>

        <div className="spec-table-grid">
          <div className="spec-cell">
            <strong>Accounting Model</strong>
            <span>Deterministic Double-Entry</span>
          </div>
          <div className="spec-cell">
            <strong>Storage Architecture</strong>
            <span>Encrypted On-Device Database</span>
          </div>
          <div className="spec-cell">
            <strong>Sync Standard</strong>
            <span>Local-First / No Mandatory Cloud Sync</span>
          </div>
          <div className="spec-cell">
            <strong>Tax Outlook Mode</strong>
            <span>User-Reviewed Fact Foundation</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
          <a
            href="mailto:founder@amanchilabs.com?subject=WealthPrivate%20inquiry"
            className="btn-action"
          >
            Get in touch about WealthPrivate <ArrowIcon aria-hidden="true" />
          </a>
          <a href="#products" className="return-link">
            Back to Products
          </a>
        </div>
        <p className="showcase-footnote">
          *In active development. Tax outlook foundation provides organized record clarity and does not constitute formal tax or legal advice.
        </p>
      </div>
    )
  }

  // DermaPrivate
  return mode === 'preview' ? (
    <div className="product-preview-card card-derma">
      <div>
        <span className="card-meta-tag">Routine Intelligence &middot; In Testing</span>
        <h3 className="card-title">DermaPrivate</h3>
        <p className="card-desc">
          Personalized skincare routines, deterministic ingredient conflict checks, and proposal-only coaching.
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
            ROUTINE INTELLIGENCE &middot; IN TESTING
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
      <p className="showcase-lead">
        Explore personalized skincare routine planning, daily step scheduling, and deterministic ingredient conflict checks without uploading photos.
      </p>

      <div className="spec-table-grid">
        <div className="spec-cell">
          <strong>Routine Planning</strong>
          <span>AM &amp; PM Dedicated Protocols</span>
        </div>
        <div className="spec-cell">
          <strong>Safety Engine</strong>
          <span>Deterministic Conflict Rules</span>
        </div>
        <div className="spec-cell">
          <strong>AI Assistance</strong>
          <span>Proposal-Only Coaching</span>
        </div>
        <div className="spec-cell">
          <strong>Live Web Companion</strong>
          <span>https://www.dermaprivate.app/</span>
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
        *In testing. External AI features operate only upon user initiation; provider data-handling policies apply.
      </p>
    </div>
  )
}
