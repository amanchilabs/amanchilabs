import { useEffect, useRef } from 'react'
import type { KeyboardEvent, SyntheticEvent } from 'react'
import type { PanelId } from '../hooks/useHashRouter'
import { Brand } from '../Brand'
import './MobileNav.css'

type Props = {
  activePanel: PanelId
  navigate: (panel: PanelId) => void
  open: boolean
  setOpen: (open: boolean) => void
}

// Approved public portfolio
const APPROVED_APPLICATIONS: { id: PanelId; label: string }[] = [
  { id: 'derma', label: 'DermaPrivate' },
  { id: 'wealth', label: 'WealthPrivate' },
]

export function MobileNav({ activePanel, navigate, open, setOpen }: Props) {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const drawer = drawerRef.current
    const main = document.getElementById('main-content')
    main?.setAttribute('inert', '')
    drawer?.querySelector<HTMLButtonElement>('button')?.focus()

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab' || !drawer) return

      const controls = Array.from(drawer.querySelectorAll<HTMLElement>('button, a'))
      if (!controls.length) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      main?.removeAttribute('inert')
      const toggle = document.querySelector<HTMLButtonElement>('.mobile-nav__toggle')
      toggle?.focus()
    }
  }, [open, setOpen])

  // Hash changes can also come from browser back and forward.
  useEffect(() => {
    setOpen(false)
  }, [activePanel, setOpen])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)')
    function onWidthChange() {
      if (!media.matches) setOpen(false)
    }
    media.addEventListener('change', onWidthChange)
    return () => media.removeEventListener('change', onWidthChange)
  }, [setOpen])

  function handleNavClick(event: SyntheticEvent<HTMLAnchorElement>, id: PanelId) {
    event.preventDefault()
    navigate(id)
    setOpen(false)
  }

  function handleNavKeyDown(event: KeyboardEvent<HTMLAnchorElement>, id: PanelId) {
    if (event.key === ' ') handleNavClick(event, id)
  }

  if (!open) return null

  return (
    <div
      ref={drawerRef}
      className="mobile-drawer"
      id="mobile-drawer"
      role="dialog"
      aria-label="Navigation menu"
      aria-modal="true"
    >
      <div className="mobile-drawer__header">
        <span className="mobile-nav__brand">
          <Brand onClick={() => setOpen(false)} />
        </span>
        <button
          className="mobile-drawer__close"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <nav aria-label="Applications" className="mobile-drawer__nav">
        {APPROVED_APPLICATIONS.map(({ id, label }) => (
          <a
            key={id}
            href={'#' + id}
            className={`mobile-drawer__item${activePanel === id ? ' is-active' : ''}`}
            aria-current={activePanel === id ? 'page' : undefined}
            onClick={event => handleNavClick(event, id)}
            onKeyDown={event => handleNavKeyDown(event, id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}
