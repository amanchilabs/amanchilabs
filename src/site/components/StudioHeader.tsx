import type { KeyboardEvent } from 'react'
import { Brand } from '../Brand'
import type { PanelId } from '../hooks/useHashRouter'
import './StudioHeader.css'

type Props = {
  currentView: string
  navigate: (panel: PanelId) => void
  onToggleMobile?: () => void
  mobileOpen?: boolean
}

type NavSection = {
  id: string
  label: string
  hash: string
  panelId: PanelId
}

export const STUDIO_NAV_SECTIONS: readonly NavSection[] = [
  { id: 'overview', label: 'Our Vision', hash: '#overview', panelId: 'overview' },
  { id: 'why', label: 'Why It Matters', hash: '#overview/why', panelId: 'overview' },
  { id: 'approach', label: 'Our Approach', hash: '#overview/approach', panelId: 'overview' },
  { id: 'principles', label: 'Principles', hash: '#principles', panelId: 'principles' },
  { id: 'products', label: 'Products', hash: '#products', panelId: 'products' },
  { id: 'contact', label: 'Contact', hash: '#contact', panelId: 'contact' },
]

export function StudioHeader({ currentView, navigate, onToggleMobile, mobileOpen = false }: Props) {
  function handleNavKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('a'))
    const index = links.indexOf(document.activeElement as HTMLAnchorElement)
    if (index < 0) return
    event.preventDefault()
    const nextIndex = (index + (event.key === 'ArrowRight' ? 1 : -1) + links.length) % links.length
    links[nextIndex].focus()
  }

  function isSectionActive(sectionId: string): boolean {
    if (sectionId === 'overview') {
      return currentView === 'overview' || currentView === 'vision'
    }
    if (sectionId === 'products') {
      return currentView === 'products' || currentView === 'wealth' || currentView === 'derma'
    }
    return currentView === sectionId
  }

  return (
    <header className="studio-header">
      <div className="studio-header__brand">
        <Brand />
      </div>

      <nav
        className="studio-nav-dock"
        aria-label="Studio Navigation"
        onKeyDown={handleNavKeyDown}
      >
        {STUDIO_NAV_SECTIONS.map(section => {
          const active = isSectionActive(section.id)
          return (
            <a
              key={section.id}
              href={section.hash}
              className={`studio-nav-btn${active ? ' is-active' : ''}`}
              aria-current={active ? 'location' : undefined}
              onClick={() => {
                // If it's a subroute like #overview/why, let hash change naturally
                if (section.id === 'why' || section.id === 'approach') {
                  window.location.hash = section.hash
                } else {
                  navigate(section.panelId)
                }
              }}
            >
              {section.label}
            </a>
          )
        })}
      </nav>

      <div className="studio-header-meta">
        <span className="status-badge">
          <span className="status-dot" aria-hidden="true" />
          <span>Private by Design &middot; Local by Default</span>
        </span>
      </div>

      {onToggleMobile && (
        <button
          className="studio-header__mobile-toggle mobile-nav__toggle"
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          onClick={onToggleMobile}
        >
          <span className={`mobile-nav__hamburger${mobileOpen ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      )}
    </header>
  )
}
