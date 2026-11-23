import { useCallback, useEffect, useState } from 'react'

export type PanelId =
  | 'overview'
  | 'vision'
  | 'why'
  | 'approach'
  | 'principles'
  | 'products'
  | 'wealth'
  | 'derma'
  | 'llc-tax'
  | 'camping'
  | 'interview'
  | 'fieldtally'
  | 'contact'

export type OverviewSection = 'vision' | 'why' | 'approach'

type Route = { activePanel: PanelId; overviewSection: OverviewSection | null }

const VALID_PANELS: readonly PanelId[] = [
  'overview',
  'vision',
  'why',
  'approach',
  'principles',
  'products',
  'wealth',
  'derma',
  'llc-tax',
  'camping',
  'interview',
  'fieldtally',
  'contact',
]

function parseRouteFromHash(hash: string, currentRoute?: Route): Route {
  const raw = hash.replace(/^#/, '')
  if (raw === 'main-content') {
    return currentRoute || { activePanel: 'overview', overviewSection: null }
  }
  if (raw === 'overview/vision' || raw === 'vision') {
    return { activePanel: 'overview', overviewSection: 'vision' }
  }
  if (raw === 'overview/why' || raw === 'why') {
    return { activePanel: 'overview', overviewSection: 'why' }
  }
  if (raw === 'overview/approach' || raw === 'approach') {
    return { activePanel: 'overview', overviewSection: 'approach' }
  }
  if (raw === 'wealth') {
    return { activePanel: 'wealth', overviewSection: null }
  }
  if (raw === 'derma') {
    return { activePanel: 'derma', overviewSection: null }
  }
  if (raw === 'llc' || raw === 'llc-tax') {
    return { activePanel: 'llc-tax', overviewSection: null }
  }
  if (raw === 'camping' || raw === 'camping-tally') {
    return { activePanel: 'camping', overviewSection: null }
  }
  if (VALID_PANELS.includes(raw as PanelId)) {
    return { activePanel: raw as PanelId, overviewSection: null }
  }
  return { activePanel: 'overview', overviewSection: null }
}

export function useHashRouter(): Route & { navigate: (panel: PanelId) => void } {
  const [route, setRoute] = useState<Route>(() =>
    parseRouteFromHash(window.location.hash)
  )

  useEffect(() => {
    function onHashChange() {
      setRoute(current => parseRouteFromHash(window.location.hash, current))
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Setting window.location.hash fires hashchange natively.
  // Never use history.pushState here — it does NOT fire hashchange.
  const navigate = useCallback((panel: PanelId) => {
    if (panel === 'vision') {
      window.location.hash = '#overview'
    } else if (panel === 'why') {
      window.location.hash = '#overview/why'
    } else if (panel === 'approach') {
      window.location.hash = '#overview/approach'
    } else {
      window.location.hash = '#' + panel
    }
  }, [])

  return { ...route, navigate }
}
