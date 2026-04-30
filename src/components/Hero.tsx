import { Link } from 'react-router-dom'
import type { ProductTabId } from '../productTab'

/** Custom hero — Figma node 229:11102 (WLMA-Q2-26) */
const imgHomepage1 = 'https://www.figma.com/api/mcp/asset/2b38bf3e-ea0c-4775-9177-f3087cf5dfc6'
const imgHomepage2 = 'https://www.figma.com/api/mcp/asset/a1d865bd-30fc-4dcc-a5e5-a931bdaeb987'
const imgAvatars = 'https://www.figma.com/api/mcp/asset/17d8f481-30cc-4bfa-a0ff-ed4767ec90ba'
const imgIconStroke = 'https://www.figma.com/api/mcp/asset/fe8be713-95cd-468f-975b-65344fdbc2db'
const imgFrame1597877893 = 'https://www.figma.com/api/mcp/asset/f212866c-4fcd-4728-a525-ae8ba44da195'
const imgPlay = 'https://www.figma.com/api/mcp/asset/99aef6b9-79a0-49d9-be20-9d1254a6fbb2'
const imgImage1Vectorized = 'https://www.figma.com/api/mcp/asset/ff98832a-3768-4c2c-a9fd-f633aede9bae'

/** High Level hero — Figma node 229:11539 (WLMA-Q2-26) */
const hlPhoneScreen1 = 'https://www.figma.com/api/mcp/asset/50db8d95-cfef-48a9-86b2-a79e283376e5'
const hlPhoneScreen2 = 'https://www.figma.com/api/mcp/asset/576dcd0e-c204-4311-a175-9d186ceeb1cc'
const hlPhoneLogo = 'https://www.figma.com/api/mcp/asset/e4e5df36-ed46-4197-ba22-70b148cee70b'
const hlAvatars = 'https://www.figma.com/api/mcp/asset/1e02a15a-6b9a-4597-913e-3799e9e6f139'
const hlPlay = 'https://www.figma.com/api/mcp/asset/eee516f9-3159-47e3-928c-6e215b7f3239'

/** LeadConnector hero — Figma node 229:11329 (WLMA-Q2-26) */
const lcPhoneScreen1 = 'https://www.figma.com/api/mcp/asset/ced51d9b-b0f8-4bd4-b987-e07532ba19a8'
const lcPhoneScreen2 = 'https://www.figma.com/api/mcp/asset/db775517-4218-4b2d-a2fd-120fcbd759a8'
const lcPhoneLogo = 'https://www.figma.com/api/mcp/asset/723120cf-52ed-4989-bc16-cdfd63abda68'
const lcAvatars = 'https://www.figma.com/api/mcp/asset/6b5d46a2-611b-4581-ab76-a6b7608beb71'
const lcPlay = 'https://www.figma.com/api/mcp/asset/29d326e0-51db-4dfc-9a9c-0d088948cf39'

type HeroProps = {
  variant?: ProductTabId
}

/** Custom tab: pixel layout from Figma 229:11102 — single 1112×581 artboard, all absolute. */
function CustomHeroFigma() {
  return (
    <div
      className="relative mx-auto h-[581px] w-full max-w-[1112px] shrink-0 overflow-clip"
      data-node-id="229:11102"
      data-name="Hero"
    >
      <div
        className="absolute left-[47px] top-[80px] flex content-stretch items-center justify-center gap-[12px] overflow-clip rounded-[999px] border border-[rgba(0,0,0,0.06)] border-solid bg-white py-[10px] pl-[16px] pr-[20px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]"
        data-node-id="229:11103"
        data-name="Agencies Pill"
      >
        <div className="relative h-[24px] w-[56px] shrink-0" data-node-id="229:11104" data-name="Avatars">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgAvatars} />
        </div>
        <p
          className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[normal] not-italic text-[#151b2b]"
          data-node-id="229:11108"
        >
          2,400+ agencies shipped an app last quarter
        </p>
      </div>
      <p
        className="absolute left-[47px] top-[168px] w-[550px] font-['Inter:Semi_Bold',sans-serif] text-[48px] font-semibold leading-[normal] tracking-[-1.44px] not-italic text-[#10172a]"
        data-node-id="229:11109"
      >
        Every great brand has an
      </p>
      <div
        className="-translate-y-1/2 absolute left-[152px] top-[262px] flex flex-col justify-center font-['Inter:Semi_Bold',sans-serif] text-[48px] font-semibold leading-[0] tracking-[-1.44px] not-italic text-[#10172a] whitespace-nowrap"
        data-node-id="331:12619"
      >
        <p className="leading-[normal]">Now yours does too</p>
      </div>
      <p
        className="absolute left-[47px] top-[302px] w-[551px] font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[28px] not-italic text-[#596070]"
        data-node-id="229:11111"
      >{`A white-labeled iOS & Android app with your name, your brand, and your layout — published to the App Store as your own. The perfect companion to your white-labeled HighLevel platform. No developers needed.`}</p>
      <div
        className="-translate-x-1/2 absolute left-[calc(50%-335px)] top-[426px] flex flex-col content-stretch items-start gap-[16px] overflow-clip"
        data-node-id="229:11112"
        data-name="CTA Row"
      >
        <Link
          to="/pricing"
          aria-label="Open pricing"
          className="relative flex h-[48px] shrink-0 cursor-pointer content-stretch items-center justify-center gap-[8px] overflow-clip rounded-[999px] bg-[#1d2939] py-[8px] pl-[24px] pr-[8px] no-underline"
          data-node-id="229:11113"
          data-name="Primary CTA"
        >
          <p
            className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[normal] not-italic text-white"
            data-node-id="229:11114"
          >{`Now Starting at $99/month `}</p>
          <div
            className="relative flex h-full shrink-0 content-stretch items-center justify-center overflow-clip rounded-[999px] bg-[#155eef] px-[14px] py-[8px]"
            data-node-id="229:11115"
            data-name="Price chip"
          >
            <p
              className="relative shrink-0 whitespace-nowrap font-['Inter:Medium',sans-serif] text-[16px] font-medium leading-[normal] not-italic text-white"
              data-node-id="229:11116"
            >
              $99/mo
            </p>
          </div>
          <div
            className="relative flex size-[36px] shrink-0 content-stretch items-center justify-center overflow-clip rounded-[999px] bg-white"
            data-node-id="229:11117"
            data-name="Arrow"
          >
            <div className="relative flex size-[24px] shrink-0 content-stretch items-center justify-center" data-node-id="229:11118" data-name="Icon">
              <div className="absolute inset-0 overflow-clip" data-name="arrow-up-right">
                <div className="absolute inset-1/4" data-name="Icon (Stroke)">
                  <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgIconStroke} />
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute left-[318.5px] top-0 h-[20px] w-[19px]" data-node-id="331:13039" aria-hidden>
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgFrame1597877893} />
          </div>
        </Link>
        <div
          className="relative flex h-[48px] shrink-0 content-stretch items-center justify-center gap-[12px] overflow-clip rounded-[999px] border border-[rgba(0,0,0,0.08)] border-solid bg-white py-[8px] pl-[8px] pr-[24px]"
          data-node-id="229:11119"
          data-name="Secondary CTA"
        >
          <div className="relative size-[36px] shrink-0" data-node-id="229:11120" data-name="Play">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgPlay} />
          </div>
          <p
            className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[normal] not-italic text-[#10172a]"
            data-node-id="229:11122"
          >
            Watch 60-sec tour
          </p>
        </div>
      </div>
      <div className="absolute left-[814.48px] top-[130px] flex h-[360.981px] w-[212.138px] items-center justify-center">
        <div className="flex-none rotate-[9.84deg]">
          <div
            className="relative h-[339.233px] w-[156.477px] overflow-clip rounded-[12.741px] border-[#333340] border-[3.185px] border-solid bg-[#171c2b] shadow-[0px_9.556px_19.112px_-3.185px_rgba(0,0,0,0.35)]"
            data-node-id="229:11123"
            data-name="Phone Back"
          >
            <div className="absolute left-[-3.29px] top-[-3.19px] h-[339.233px] w-[156.477px]" data-node-id="229:11124" data-name="Homepage 1">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgHomepage1} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-[770px] top-[136.59px] h-[339.233px] w-[156.477px] overflow-clip rounded-[12.741px] border-[#333340] border-[3.185px] border-solid bg-[#171c2b] shadow-[0px_9.556px_19.112px_-3.185px_rgba(0,0,0,0.35)]"
        data-node-id="229:11125"
        data-name="Phone Back"
      >
        <div className="absolute left-[-3.29px] top-[-3.19px] h-[339.233px] w-[156.477px]" data-node-id="229:11126" data-name="Homepage 1">
          <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgHomepage2} />
        </div>
      </div>
      <div className="absolute left-[658px] top-[136.59px] flex h-[364.411px] w-[220.724px] items-center justify-center">
        <div className="flex-none rotate-[-11.33deg]">
          <div
            className="relative h-[340.206px] w-[156.926px] overflow-clip rounded-[12.778px] border-[#333340] border-[3.194px] border-solid bg-[#171c2b] shadow-[0px_9.583px_19.167px_-3.194px_rgba(0,0,0,0.35)]"
            data-node-id="229:11127"
            data-name="Phone Back"
          >
            <div
              className="absolute left-[-3.3px] top-[-3.19px] h-[340.206px] w-[156.926px] overflow-clip bg-[#fcddf8]"
              data-node-id="229:11128"
              data-name="iPhone 16 - 1"
            >
              <div
                className="-translate-x-1/2 absolute left-[79.34px] top-[178.49px] whitespace-nowrap text-center font-['Instrument_Serif:Italic',sans-serif] text-[22.361px] italic leading-[0] tracking-[-0.6708px] text-[#441f95]"
                data-node-id="229:11129"
              >
                <p className="mb-0 leading-[normal]">Riverfront</p>
                <p className="leading-[normal]">{`Spa & Hotels`}</p>
              </div>
              <div className="absolute left-[37.14px] top-[95.43px] size-[83.055px]" data-node-id="229:11130" data-name="image 1 [Vectorized]">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgImage1Vectorized} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-y-1/2 absolute left-[47px] top-[261px] flex flex-col justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[48px] font-semibold italic leading-[0] tracking-[-1.44px] text-[#155eef] whitespace-nowrap"
        data-node-id="229:11138"
      >
        <p className="leading-[normal]">App</p>
      </div>
    </div>
  )
}

/** High Level tab: pixel layout from Figma 229:11539 — single 1112×581 artboard, all absolute. */
function HighLevelHeroFigma() {
  return (
    <div
      className="relative mx-auto h-[581px] w-full max-w-[1112px] shrink-0 overflow-clip"
      data-node-id="229:11539"
      data-name="Hero"
    >
      <div
        className="absolute left-[47px] top-[80px] flex content-stretch items-center justify-center gap-[12px] overflow-clip rounded-[999px] border border-[rgba(0,0,0,0.06)] border-solid bg-white py-[10px] pl-[16px] pr-[20px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]"
        data-node-id="229:11540"
        data-name="Agencies Pill"
      >
        <div className="relative h-[24px] w-[56px] shrink-0" data-node-id="229:11541" data-name="Avatars">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={hlAvatars} />
        </div>
        <p
          className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[normal] not-italic text-[#151b2b]"
          data-node-id="229:11545"
        >
          2,400+ agencies shipped an app last quarter
        </p>
      </div>
      <div
        className="absolute left-[47px] top-[168px] w-[628px] whitespace-pre-wrap font-['Inter:Semi_Bold',sans-serif] text-[48px] font-semibold leading-[0] tracking-[-1.44px] not-italic text-[#10172a]"
        data-node-id="229:11546"
      >
        <p className="mb-0 leading-[normal]">{`Your full HighLevel `}</p>
        <p className="leading-[normal]">platform, in your pocket</p>
      </div>
      <p
        className="absolute left-[47px] top-[296px] w-[463px] font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[28px] not-italic text-[#596070]"
        data-node-id="229:11548"
      >
        Manage conversations, pipelines, contacts, and AI workflows from your phone. Everything you rely on in HighLevel — free on iOS and Android.
      </p>
      <div
        className="-translate-x-1/2 absolute left-[calc(50%-335px)] top-[426px] flex flex-col content-stretch items-start gap-[16px] overflow-clip"
        data-node-id="229:11549"
        data-name="CTA Row"
      >
        <div
          className="relative flex h-[48px] shrink-0 content-stretch items-center justify-center gap-[12px] overflow-clip rounded-[999px] bg-[#10172a] py-[8px] pl-[24px] pr-[8px]"
          data-node-id="308:10466"
          data-name="Primary CTA"
        >
          <p
            className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[normal] not-italic text-white"
            data-node-id="308:10467"
          >
            Free to download
          </p>
          <div
            className="relative flex h-full shrink-0 content-stretch items-center justify-center overflow-clip rounded-[999px] bg-[#155eef] px-[14px] py-[8px]"
            data-node-id="308:10468"
            data-name="Price chip"
          >
            <p className="relative shrink-0 whitespace-nowrap font-['Inter:Bold',sans-serif] text-[16px] font-bold leading-[normal] not-italic text-white" data-node-id="308:10469">{`iOS `}</p>
          </div>
          <div
            className="relative flex h-full shrink-0 content-stretch items-center justify-center overflow-clip rounded-[999px] bg-[#155eef] px-[14px] py-[8px]"
            data-node-id="308:10470"
            data-name="Price chip"
          >
            <p className="relative shrink-0 whitespace-nowrap font-['Inter:Bold',sans-serif] text-[16px] font-bold leading-[normal] not-italic text-white" data-node-id="308:10471">
              Android
            </p>
          </div>
        </div>
        <div
          className="relative flex h-[48px] shrink-0 content-stretch items-center justify-center gap-[12px] overflow-clip rounded-[999px] border border-[rgba(0,0,0,0.08)] border-solid bg-white py-[8px] pl-[8px] pr-[24px]"
          data-node-id="229:11556"
          data-name="Secondary CTA"
        >
          <div className="relative size-[36px] shrink-0" data-node-id="229:11557" data-name="Play">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={hlPlay} />
          </div>
          <p
            className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[normal] not-italic text-[#10172a]"
            data-node-id="229:11559"
          >
            Watch 60-sec tour
          </p>
        </div>
      </div>
      <div className="absolute left-[825.45px] top-[125.93px] flex h-[342.856px] w-[201.487px] items-center justify-center">
        <div className="flex-none rotate-[9.84deg]">
          <div
            className="relative h-[322.201px] w-[148.621px] overflow-clip rounded-[12.101px] border-[#333340] border-[3.025px] border-solid bg-[#171c2b] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)]"
            data-node-id="229:11560"
            data-name="Phone Back"
          >
            <div className="absolute left-[-3.12px] top-[-3.03px] h-[322.201px] w-[148.621px]" data-node-id="229:11561" data-name="Homepage 1">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={hlPhoneScreen1} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-[768.61px] top-[131.25px] h-[322.201px] w-[148.621px] overflow-clip rounded-[12.101px] border-[#333340] border-[3.025px] border-solid bg-[#171c2b] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)]"
        data-node-id="229:11562"
        data-name="Phone Back"
      >
        <div className="absolute left-[-3.12px] top-[-3.03px] h-[322.201px] w-[148.621px]" data-node-id="229:11563" data-name="Homepage 1">
          <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={hlPhoneScreen2} />
        </div>
      </div>
      <div className="absolute left-[658.32px] top-[130.26px] flex h-[334.675px] w-[178.069px] items-center justify-center">
        <div className="flex-none rotate-[-5.36deg]">
          <div
            className="relative h-[322.201px] w-[148.621px] overflow-clip rounded-[12.101px] border-[#333340] border-[3.025px] border-solid bg-[#171c2b] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)]"
            data-node-id="229:11564"
            data-name="Phone Back"
          >
            <div
              className="absolute left-[-3.12px] top-[-3.03px] h-[322.201px] w-[148.621px] overflow-clip bg-[#08213d]"
              data-node-id="229:11565"
              data-name="iPhone 16 - 1"
            >
              <div className="absolute left-[51.91px] top-[138.41px] size-[45.002px]" data-node-id="229:11566" data-name="image 82">
                <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={hlPhoneLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** LeadConnector tab: pixel layout from Figma 229:11329 — single 1112×581 artboard, all absolute. */
function LeadConnectorHeroFigma() {
  return (
    <div
      className="relative mx-auto h-[581px] w-full max-w-[1112px] shrink-0 overflow-clip"
      data-node-id="229:11329"
      data-name="Hero"
    >
      <div
        className="absolute left-[47px] top-[80px] flex items-center justify-center gap-[12px] overflow-clip rounded-[999px] border border-[rgba(0,0,0,0.06)] border-solid bg-white py-[10px] pl-[16px] pr-[20px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]"
        data-node-id="229:11330"
        data-name="Agencies Pill"
      >
        <div className="relative h-[24px] w-[56px] shrink-0" data-node-id="229:11331" data-name="Avatars">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={lcAvatars} />
        </div>
        <p
          className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[normal] not-italic text-[#151b2b]"
          data-node-id="229:11335"
        >
          2,400+ agencies shipped an app last quarter
        </p>
      </div>
      <p
        className="absolute left-[47px] top-[168px] w-[573px] font-['Inter:Semi_Bold',sans-serif] text-[48px] font-semibold leading-[normal] tracking-[-1.44px] not-italic text-[#10172a]"
        data-node-id="229:11336"
      >
        Your leads, your conversations, always on
      </p>
      <p
        className="absolute left-[47px] top-[296px] w-[463px] font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[28px] not-italic text-[#596070]"
        data-node-id="229:11338"
      >
        Manage leads, conversations, bookings, and payments from your phone. Everything your team needs to stay responsive — free on iOS and Android.
      </p>
      <div
        className="-translate-x-1/2 absolute left-[calc(50%-341px)] top-[428px] flex flex-col items-start gap-[16px] overflow-clip"
        data-node-id="229:11339"
        data-name="CTA Row"
      >
        <div
          className="relative flex h-[48px] shrink-0 items-center justify-center gap-[12px] overflow-clip rounded-[999px] bg-[#10172a] py-[8px] pl-[24px] pr-[8px]"
          data-node-id="229:11340"
          data-name="Primary CTA"
        >
          <p
            className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[normal] not-italic text-white"
            data-node-id="229:11341"
          >
            Free to download
          </p>
          <div
            className="relative flex h-full shrink-0 items-center justify-center overflow-clip rounded-[999px] bg-[#3f621a] px-[14px] py-[8px]"
            data-node-id="229:11342"
            data-name="Price chip"
          >
            <p className="relative shrink-0 whitespace-nowrap font-['Inter:Regular',sans-serif] text-[16px] font-normal leading-[normal] not-italic text-white" data-node-id="229:11343">{`iOS `}</p>
          </div>
          <div
            className="relative flex h-full shrink-0 items-center justify-center overflow-clip rounded-[999px] bg-[#3f621a] px-[14px] py-[8px]"
            data-node-id="308:10463"
            data-name="Price chip"
          >
            <p className="relative shrink-0 whitespace-nowrap font-['Inter:Regular',sans-serif] text-[16px] font-normal leading-[normal] not-italic text-white" data-node-id="308:10464">
              Android
            </p>
          </div>
        </div>
        <div
          className="relative flex h-[48px] shrink-0 items-center justify-center gap-[12px] overflow-clip rounded-[999px] border border-[rgba(0,0,0,0.08)] border-solid bg-white py-[8px] pl-[8px] pr-[24px]"
          data-node-id="229:11346"
          data-name="Secondary CTA"
        >
          <div className="relative size-[36px] shrink-0" data-node-id="229:11347" data-name="Play">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={lcPlay} />
          </div>
          <p
            className="relative shrink-0 whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[normal] not-italic text-[#10172a]"
            data-node-id="229:11349"
          >
            Watch 60-sec tour
          </p>
        </div>
      </div>
      <div className="absolute left-[802.45px] top-[125.93px] flex h-[342.856px] w-[201.487px] items-center justify-center">
        <div className="flex-none rotate-[9.84deg]">
          <div
            className="relative h-[322.201px] w-[148.621px] overflow-clip rounded-[12.101px] border-[#333340] border-[3.025px] border-solid bg-[#171c2b] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)]"
            data-node-id="229:11350"
            data-name="Phone Back"
          >
            <div className="absolute left-[-3.12px] top-[-3.03px] h-[322.201px] w-[148.621px]" data-node-id="229:11351" data-name="Homepage 1">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={lcPhoneScreen1} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-[745.61px] top-[131.25px] h-[322.201px] w-[148.621px] overflow-clip rounded-[12.101px] border-[#333340] border-[3.025px] border-solid bg-[#171c2b] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)]"
        data-node-id="229:11352"
        data-name="Phone Back"
      >
        <div className="absolute left-[-3.12px] top-[-3.03px] h-[322.201px] w-[148.621px]" data-node-id="229:11353" data-name="Homepage 1">
          <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={lcPhoneScreen2} />
        </div>
      </div>
      <div className="absolute left-[635.32px] top-[130.26px] flex h-[334.675px] w-[178.069px] items-center justify-center">
        <div className="flex-none rotate-[-5.36deg]">
          <div
            className="relative h-[322.201px] w-[148.621px] overflow-clip rounded-[12.101px] border-[#333340] border-[3.025px] border-solid bg-[#171c2b] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)]"
            data-node-id="229:11354"
            data-name="Phone Back"
          >
            <div
              className="absolute left-[-3.12px] top-[-3.03px] h-[322.201px] w-[148.621px] overflow-clip bg-[#08213d]"
              data-node-id="229:11355"
              data-name="iPhone 16 - 1"
            >
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.1px)] top-[calc(50%+0.19px)] h-[51.053px] w-[45.002px]"
                data-node-id="229:11356"
                data-name="image 84"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img alt="" className="absolute left-0 top-0 h-full max-w-none w-[517.17%]" src={lcPhoneLogo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ variant = 'custom' }: HeroProps) {
  if (variant === 'custom') {
    return (
      <div className="relative w-full min-h-[581px] overflow-clip rounded-[32px] bg-gradient-to-b from-[#fdf9f4] from-[0%] via-[#fef1e8] via-[50%] to-[#f4e1f1] to-[100%]">
        <CustomHeroFigma />
      </div>
    )
  }

  if (variant === 'leadConnector') {
    return (
      <div className="relative w-full min-h-[581px] overflow-clip rounded-[32px] bg-gradient-to-b from-[#fdf9f4] to-[#b8fdd0]">
        <LeadConnectorHeroFigma />
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-[581px] overflow-clip rounded-[32px] bg-gradient-to-b from-[#fdf9f4] from-[0%] via-[#ccdfff] via-[50%] to-[#bdd9ff] to-[100%]">
      <HighLevelHeroFigma />
    </div>
  )
}
