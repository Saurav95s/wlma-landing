import type { ProductTabId } from '../productTab'

type Props = {
  activeTab: ProductTabId
  onTabChange: (tab: ProductTabId) => void
}

const tabBase =
  'content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[999px] shrink-0 cursor-pointer border-0 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#155eef] focus-visible:ring-offset-2'

export default function ProductTabs({ activeTab, onTabChange }: Props) {
  return (
    <div
      className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] w-fit max-w-full min-h-[50px]"
      data-node-id="229:11092"
      data-name="Tabs"
      role="tablist"
      aria-label="Product"
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 'custom'}
        className={`${tabBase} ${activeTab === 'custom' ? 'bg-[#155eef]' : ''}`}
        data-node-id="229:11093"
        data-name="Tab - Your custom app"
        onClick={() => onTabChange('custom')}
      >
        <p
          className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${activeTab === 'custom' ? 'text-white' : 'text-[#596070]'}`}
          data-node-id="229:11094"
        >
          Your custom app
        </p>
        <p
          className={`font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${activeTab === 'custom' ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#98a2b3]'}`}
          data-node-id="229:11095"
        >
          ·
        </p>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="331:12761" data-name="Tag Group">
          <div
            className="bg-[#fffaeb] content-stretch flex gap-[2px] h-[22px] items-center justify-center max-h-[22px] min-h-[22px] px-[8px] relative rounded-[11px] shrink-0"
            data-name="Tag"
          >
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17px] not-italic relative shrink-0 text-[#b54708] text-[12px] text-center whitespace-nowrap">
              Branded
            </p>
          </div>
        </div>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 'leadConnector'}
        className={`${tabBase} ${activeTab === 'leadConnector' ? 'bg-[#155eef]' : ''}`}
        data-node-id="229:11097"
        data-name="Tab - Lead Connector"
        onClick={() => onTabChange('leadConnector')}
      >
        <p
          className={`font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${activeTab === 'leadConnector' ? 'font-semibold text-white' : 'font-medium text-[#596070]'}`}
          data-node-id="229:11098"
        >
          LeadConnector Mobile App
        </p>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="331:12798" data-name="Tag Group">
          <div
            className="bg-[#f2f4f7] content-stretch flex gap-[2px] h-[22px] items-center justify-center max-h-[22px] min-h-[22px] px-[8px] relative rounded-[11px] shrink-0"
            data-name="Tag"
          >
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">
              Lifetime free
            </p>
          </div>
        </div>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 'highlevel'}
        className={`${tabBase} ${activeTab === 'highlevel' ? 'bg-[#155eef]' : ''}`}
        data-node-id="229:11099"
        data-name="Tab - Highlevel mobile app"
        onClick={() => onTabChange('highlevel')}
      >
        <p
          className={`font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${activeTab === 'highlevel' ? 'font-semibold text-white' : 'font-medium text-[#596070]'}`}
          data-node-id="229:11100"
        >
          Highlevel mobile app
        </p>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="331:12809" data-name="Tag Group">
          <div
            className="bg-[#f2f4f7] content-stretch flex gap-[2px] h-[22px] items-center justify-center max-h-[22px] min-h-[22px] px-[8px] relative rounded-[11px] shrink-0"
            data-name="Tag"
          >
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">
              Lifetime free
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}
