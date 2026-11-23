import { useState } from 'react'
import { useHashRouter } from './hooks/useHashRouter'
import { StudioHeader } from './components/StudioHeader'
import { MobileNav } from './components/MobileNav'
import { CompanyView } from './CompanyView'

export default function App() {
  const { activePanel, navigate, overviewSection } = useHashRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentView = activePanel === 'overview' && overviewSection && overviewSection !== 'vision' ? overviewSection : activePanel

  return (
    <>
      <StudioHeader
        currentView={currentView}
        navigate={navigate}
        onToggleMobile={() => setMobileOpen(v => !v)}
        mobileOpen={mobileOpen}
      />
      <MobileNav
        activePanel={activePanel}
        navigate={navigate}
        open={mobileOpen}
        setOpen={setMobileOpen}
      />
      <CompanyView activePanel={activePanel} overviewSection={overviewSection} />
    </>
  )
}
