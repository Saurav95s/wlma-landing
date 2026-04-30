import { useCallback, useState } from 'react'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
import ProductTabs from '../components/ProductTabs'
import StatsRow from '../components/StatsRow'
import WhyShipYourOwnApp from '../components/WhyShipYourOwnApp'
import type { ProductTabId } from '../productTab'

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

export default function LandingPage() {
  const [productTab, setProductTab] = useState<ProductTabId>(readTabFromUrl)

  const setProductTabFromUi = useCallback((tab: ProductTabId) => {
    setProductTab(tab)
    writeTabToUrl(tab)
  }, [])

  return (
    <div className="w-full min-w-[1112px] px-6 pt-8 pb-20">
      <div className="mb-2 flex justify-center">
        <div className="flex min-h-[50px] w-full max-w-[900px] justify-center">
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
        <div className="relative min-h-[620px] w-full">
          <WhyShipYourOwnApp variant={productTab} />
        </div>
        <div className="relative min-h-[180px] w-full">
          <LogoCloud />
        </div>
      </div>
    </div>
  )
}
