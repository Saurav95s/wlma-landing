import { useState } from 'react'
import AppHeader from './components/AppHeader'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import PrimaryNavigationToolbar from './components/PrimaryNavigationToolbar'
import ProductTabs from './components/ProductTabs'
import StatsRow from './components/StatsRow'
import WhyShipYourOwnApp from './components/WhyShipYourOwnApp'
import type { ProductTabId } from './productTab'

export default function App() {
  const [productTab, setProductTab] = useState<ProductTabId>('custom')

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
                <ProductTabs activeTab={productTab} onTabChange={setProductTab} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-8">
              <div className="h-[581px] w-full shrink-0">
                <Hero variant={productTab} />
              </div>
              <div className="px-[76px]">
                <div className="h-[88px] w-full max-w-[960px] mx-auto">
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
