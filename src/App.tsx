import { useCallback, useState } from 'react'
import AppHeader from './components/AppHeader'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import PrimaryNavigationToolbar from './components/PrimaryNavigationToolbar'
import ProductTabs from './components/ProductTabs'
import StatsRow from './components/StatsRow'
import WhyShipYourOwnApp from './components/WhyShipYourOwnApp'
import type { ProductTabId } from './productTab'

function readTabFromUrl(): ProductTabId {
  const raw = new URLSearchParams(window.location.search).get('tab')
  if (raw === 'leadConnector' || raw === 'highlevel' || raw === 'custom') {
    return raw
  }
  return 'custom'
}

function writeTabToUrl(tab: ProductTabId) {
  const url = new URL(window.location.href)
  if (tab === 'custom') {
    url.searchParams.delete('tab')
  } else {
    url.searchParams.set('tab', tab)
  }
  const q = url.searchParams.toString()
  window.history.replaceState(null, '', q ? `${url.pathname}?${q}` : url.pathname)
}

export default function App() {
  const [productTab, setProductTab] = useState<ProductTabId>(readTabFromUrl)

  const setProductTabFromUi = useCallback((tab: ProductTabId) => {
    setProductTab(tab)
    writeTabToUrl(tab)
  }, [])

  return (
    <div className="flex min-h-screen w-full bg-white text-left">
      <aside className="w-[280px] shrink-0 sticky top-0 h-screen self-start border-r border-[#eaecf0] overflow-hidden">
        <PrimaryNavigationToolbar />
      </aside>
      <div className="flex flex-1 flex-col min-w-0 bg-[#fefbf6]">
        <header className="h-10 shrink-0 min-h-[40px] bg-white">
          <AppHeader />
        </header>
        <main className="flex-1 min-w-0 overflow-x-auto overflow-y-auto">
          <div className="w-full min-w-[1112px] px-6 pt-8 pb-20">
            <div className="flex justify-center mb-2">
              <div className="w-full max-w-[900px] min-h-[50px] flex justify-center">
                <ProductTabs activeTab={productTab} onTabChange={setProductTabFromUi} />
              </div>
            </div>
            <div className="mx-auto flex w-[1112px] shrink-0 flex-col gap-8">
              <div className="min-h-[581px] w-full shrink-0">
                <Hero variant={productTab} />
              </div>
              <div className="w-full">
                <div className="mx-auto h-[88px] w-full max-w-[1112px]">
                  <StatsRow variant={productTab} />
                </div>
              </div>
              <div className="relative w-full min-h-[620px]">
                <WhyShipYourOwnApp variant={productTab} />
              </div>
              <div className="relative w-full min-h-[180px]">
                <LogoCloud />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
