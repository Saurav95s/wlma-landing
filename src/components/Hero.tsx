import type { ProductTabId } from '../productTab'

const imgHomepage1 = 'https://www.figma.com/api/mcp/asset/ab102f5a-04d9-4385-9595-6e937f1d2534'
const imgHomepage2 = 'https://www.figma.com/api/mcp/asset/73f1290f-7d57-482c-be0f-6b8348e457fe'
const imgAvatars = 'https://www.figma.com/api/mcp/asset/6da7bc6e-5d33-4561-911a-f0e5d5c89cf7'
const imgIconStroke = 'https://www.figma.com/api/mcp/asset/7ee5185b-22ba-4ea8-93f1-c23c9510952a'
const imgFrame1597877893 = 'https://www.figma.com/api/mcp/asset/f776f204-c405-4f94-a941-222e47d60813'
const imgPlay = 'https://www.figma.com/api/mcp/asset/cd6f7abb-29d4-407b-9e2b-c25cd47aeafb'
const imgImage1Vectorized = 'https://www.figma.com/api/mcp/asset/67a58583-35e5-4e35-9e2a-e6b712c399e2'
const imgIconStroke1 = 'https://www.figma.com/api/mcp/asset/c904e95b-e4a1-4706-b34c-4afeb191b8bf'
const imgIconStroke2 = 'https://www.figma.com/api/mcp/asset/31684a23-1e9c-443a-ac5b-c2c690e8d2b4'
const imgIconStroke3 = 'https://www.figma.com/api/mcp/asset/7053726f-2b04-4460-8e61-2a3bcc3dec08'
const imgIconStroke4 = 'https://www.figma.com/api/mcp/asset/5add738a-97a2-44cc-9710-008be3221064'

/** High Level mobile app hero — node 229:11539 (WLMA-Q2-26) */
const imgHlHeroHomepage1 = 'https://www.figma.com/api/mcp/asset/695a42cb-3899-48e7-b7eb-040998adc07b'
const imgHlHeroHomepage2 = 'https://www.figma.com/api/mcp/asset/83f8eca4-4390-442d-aaab-cf24b6a0c667'
const imgHlHeroLogo = 'https://www.figma.com/api/mcp/asset/e8b8a6d3-cffa-4efa-9c2e-f0e08bb8dbbd'
const imgHlHeroAvatars = 'https://www.figma.com/api/mcp/asset/4007f196-6df3-4ea3-a5c9-a35eb455d104'
const imgHlHeroPlay = 'https://www.figma.com/api/mcp/asset/ff0b6ab2-9fb5-4560-8b8a-d42133906b3c'
const imgHlCardIconUser = 'https://www.figma.com/api/mcp/asset/7fbc2aa6-59a3-4054-bb2e-9eda9b084946'
const imgHlCardIconStar = 'https://www.figma.com/api/mcp/asset/42ed6fc8-1fa8-4ff7-afbc-bd93a2c2c68e'
const imgHlCardIconDownload = 'https://www.figma.com/api/mcp/asset/40a23d23-0490-41e3-9612-7e76b6077340'
const imgHlCardIconLightning = 'https://www.figma.com/api/mcp/asset/462f745a-2659-4673-bb60-42fc1319b1b4'

type HeroProps = {
  variant?: ProductTabId
}

export default function Hero({ variant = 'custom' }: HeroProps) {
  const isHighLevel = variant === 'highlevel'

  const heroShellClass = isHighLevel
    ? 'bg-gradient-to-b from-[#fdf9f4] via-[#ccdfff] to-[#bdd9ff] overflow-clip relative rounded-[32px] size-full'
    : 'bg-gradient-to-b from-[#fdf9f4] overflow-clip relative rounded-[32px] size-full to-[#f4e1f1] via-[#fef1e8]'

  return (
    <div
      className={heroShellClass}
      data-node-id={isHighLevel ? '229:11539' : '229:11102'}
      data-name="Hero"
    >
      <div
        className="absolute bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex gap-[12px] items-center justify-center left-[47px] overflow-clip pl-[16px] pr-[20px] py-[10px] rounded-[999px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)] top-[80px]"
        data-node-id={isHighLevel ? '229:11540' : '229:11103'}
        data-name="Agencies Pill"
      >
        <div className="h-[24px] relative shrink-0 w-[56px]" data-node-id="229:11104" data-name="Avatars">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHighLevel ? imgHlHeroAvatars : imgAvatars} />
        </div>
        <p
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#151b2b] text-[14px] whitespace-nowrap"
          data-node-id="229:11108"
        >
          2,400+ agencies shipped an app last quarter
        </p>
      </div>
      {isHighLevel ? (
        <>
          <div
            className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[47px] not-italic text-[#10172a] text-[48px] top-[168px] tracking-[-1.44px] w-[628px] whitespace-pre-wrap"
            data-node-id="229:11546"
          >
            <p className="leading-[normal] mb-0">{`Your full HighLevel `}</p>
            <p className="leading-[normal]">platform, in your pocket</p>
          </div>
          <p
            className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[47px] not-italic text-[#596070] text-[18px] top-[296px] w-[463px]"
            data-node-id="229:11548"
          >
            Manage conversations, pipelines, contacts, and AI workflows from your phone. Everything you rely on in HighLevel — free on iOS and Android.
          </p>
          <div
            className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(50%-335px)] overflow-clip top-[426px]"
            data-node-id="229:11549"
            data-name="CTA Row"
          >
            <div
              className="bg-[#10172a] content-stretch flex gap-[12px] h-[48px] items-center justify-center overflow-clip pl-[24px] pr-[8px] py-[8px] relative rounded-[999px] shrink-0"
              data-node-id="308:10466"
              data-name="Primary CTA"
            >
              <p
                className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap"
                data-node-id="308:10467"
              >
                Free to download
              </p>
              <div
                className="bg-[#155eef] content-stretch flex h-full items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[999px] shrink-0"
                data-node-id="308:10468"
                data-name="Price chip"
              >
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="308:10469">
                  iOS
                </p>
              </div>
              <div
                className="bg-[#155eef] content-stretch flex h-full items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[999px] shrink-0"
                data-node-id="308:10470"
                data-name="Price chip"
              >
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="308:10471">
                  Android
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-[rgba(0,0,0,0.08)] border-solid content-stretch flex gap-[12px] h-[48px] items-center justify-center overflow-clip pl-[8px] pr-[24px] py-[8px] relative rounded-[999px] shrink-0"
              data-node-id="229:11556"
              data-name="Secondary CTA"
            >
              <div className="relative shrink-0 size-[36px]" data-node-id="229:11557" data-name="Play">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHlHeroPlay} />
              </div>
              <p
                className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#10172a] text-[16px] whitespace-nowrap"
                data-node-id="229:11559"
              >
                Watch 60-sec tour
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p
            className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[47px] not-italic text-[#10172a] text-[48px] top-[168px] tracking-[-1.44px] w-[550px]"
            data-node-id="229:11109"
          >
            Every great brand has an
          </p>
          <div
            className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[152px] not-italic text-[#10172a] text-[48px] top-[262px] tracking-[-1.44px] whitespace-nowrap"
            data-node-id="331:12619"
          >
            <p className="leading-[normal]">Now yours does to</p>
          </div>
          <p
            className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[47px] not-italic text-[#596070] text-[18px] top-[302px] w-[551px]"
            data-node-id="229:11111"
          >{`A white-labeled iOS & Android app with your name, your brand, and your layout — published to the App Store as your own. The perfect companion to your white-labeled HighLevel platform. No developers needed.`}</p>
          <div
            className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(50%-302px)] overflow-clip top-[426px]"
            data-node-id="229:11112"
            data-name="CTA Row"
          >
            <div
              className="bg-[#1d2939] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-visible pl-[24px] pr-[8px] py-[8px] relative rounded-[999px] shrink-0"
              data-node-id="229:11113"
              data-name="Primary CTA"
            >
              <p
                className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap"
                data-node-id="229:11114"
              >{`Now Starting at $99/month `}</p>
              <div
                className="bg-[#155eef] content-stretch flex h-full items-center justify-center overflow-visible px-[14px] py-[8px] relative rounded-[999px] shrink-0"
                data-node-id="229:11115"
                data-name="Price chip"
              >
                <p
                  className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative z-[1] shrink-0 text-[16px] text-white whitespace-nowrap"
                  data-node-id="229:11116"
                >
                  $99/mo
                </p>
                <div
                  className="cta-price-sparkle pointer-events-none absolute h-[20px] w-[19px] -top-1 z-[2] left-[calc(100%-26px)]"
                  data-node-id="331:13039"
                  aria-hidden
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1597877893} />
                </div>
              </div>
              <div
                className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[36px]"
                data-node-id="229:11117"
                data-name="Arrow"
              >
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-node-id="229:11118" data-name="Icon">
                  <div className="absolute inset-0 overflow-clip" data-name="arrow-up-right">
                    <div className="absolute inset-1/4" data-name="Icon (Stroke)">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-white border border-[rgba(0,0,0,0.08)] border-solid content-stretch flex gap-[12px] h-[48px] items-center justify-center overflow-clip pl-[8px] pr-[24px] py-[8px] relative rounded-[999px] shrink-0"
              data-node-id="229:11119"
              data-name="Secondary CTA"
            >
              <div className="relative shrink-0 size-[36px]" data-node-id="229:11120" data-name="Play">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlay} />
              </div>
              <p
                className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#10172a] text-[16px] whitespace-nowrap"
                data-node-id="229:11122"
              >
                Watch 60-sec tour
              </p>
            </div>
          </div>
        </>
      )}
      {!isHighLevel ? (
        <>
          <div className="absolute flex h-[360.981px] items-center justify-center left-[814.48px] top-[130px] w-[212.138px]">
            <div className="flex-none rotate-[9.84deg]">
              <div
                className="bg-[#171c2b] border-[#333340] border-[3.185px] border-solid h-[339.233px] overflow-clip relative rounded-[12.741px] shadow-[0px_9.556px_19.112px_-3.185px_rgba(0,0,0,0.35)] w-[156.477px]"
                data-node-id="229:11123"
                data-name="Phone Back"
              >
                <div className="absolute h-[339.233px] left-[-3.29px] top-[-3.19px] w-[156.477px]" data-node-id="229:11124" data-name="Homepage 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHomepage1} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-[#171c2b] border-[#333340] border-[3.185px] border-solid h-[339.233px] left-[770px] overflow-clip rounded-[12.741px] shadow-[0px_9.556px_19.112px_-3.185px_rgba(0,0,0,0.35)] top-[136.59px] w-[156.477px]"
            data-node-id="229:11125"
            data-name="Phone Back"
          >
            <div className="absolute h-[339.233px] left-[-3.29px] top-[-3.19px] w-[156.477px]" data-node-id="229:11126" data-name="Homepage 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHomepage2} />
            </div>
          </div>
          <div className="absolute flex h-[364.411px] items-center justify-center left-[658px] top-[136.59px] w-[220.724px]">
            <div className="flex-none rotate-[-11.33deg]">
              <div
                className="bg-[#171c2b] border-[#333340] border-[3.194px] border-solid h-[340.206px] overflow-clip relative rounded-[12.778px] shadow-[0px_9.583px_19.167px_-3.194px_rgba(0,0,0,0.35)] w-[156.926px]"
                data-node-id="229:11127"
                data-name="Phone Back"
              >
                <div
                  className="absolute bg-[#fcddf8] h-[340.206px] left-[-3.3px] overflow-clip top-[-3.19px] w-[156.926px]"
                  data-node-id="229:11128"
                  data-name="iPhone 16 - 1"
                >
                  <div
                    className="-translate-x-1/2 absolute font-['Instrument_Serif:Italic',sans-serif] italic leading-[0] left-[79.34px] text-[#441f95] text-[22.361px] text-center top-[178.49px] tracking-[-0.6708px] whitespace-nowrap"
                    data-node-id="229:11129"
                  >
                    <p className="leading-[normal] mb-0">Riverfront</p>
                    <p className="leading-[normal]">{`Spa & Hotels`}</p>
                  </div>
                  <div className="absolute left-[37.14px] size-[83.055px] top-[95.43px]" data-node-id="229:11130" data-name="image 1 [Vectorized]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgImage1Vectorized} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute flex h-[342.856px] items-center justify-center left-[825.45px] top-[125.93px] w-[201.487px]">
            <div className="flex-none rotate-[9.84deg]">
              <div
                className="bg-[#171c2b] border-[#333340] border-[3.025px] border-solid h-[322.201px] overflow-clip relative rounded-[12.101px] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)] w-[148.621px]"
                data-node-id="229:11560"
                data-name="Phone Back"
              >
                <div className="absolute h-[322.201px] left-[-3.12px] top-[-3.03px] w-[148.621px]" data-node-id="229:11561" data-name="Homepage 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHlHeroHomepage1} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-[#171c2b] border-[#333340] border-[3.025px] border-solid h-[322.201px] left-[768.61px] overflow-clip rounded-[12.101px] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)] top-[131.25px] w-[148.621px]"
            data-node-id="229:11562"
            data-name="Phone Back"
          >
            <div className="absolute h-[322.201px] left-[-3.12px] top-[-3.03px] w-[148.621px]" data-node-id="229:11563" data-name="Homepage 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHlHeroHomepage2} />
            </div>
          </div>
          <div className="absolute flex h-[334.675px] items-center justify-center left-[658.32px] top-[130.26px] w-[178.069px]">
            <div className="flex-none rotate-[-5.36deg]">
              <div
                className="bg-[#171c2b] border-[#333340] border-[3.025px] border-solid h-[322.201px] overflow-clip relative rounded-[12.101px] shadow-[0px_9.076px_18.152px_-3.025px_rgba(0,0,0,0.35)] w-[148.621px]"
                data-node-id="229:11564"
                data-name="Phone Back"
              >
                <div
                  className="absolute bg-[#08213d] h-[322.201px] left-[-3.12px] overflow-clip top-[-3.03px] w-[148.621px]"
                  data-node-id="229:11565"
                  data-name="iPhone 16 - 1"
                >
                  <div className="absolute left-[51.91px] size-[45.002px] top-[138.41px]" data-node-id="229:11566" data-name="image 82">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHlHeroLogo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!isHighLevel ? (
        <div
          className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-semibold italic justify-center leading-[0] left-[47px] text-[#155eef] text-[48px] top-[261px] tracking-[-1.44px] whitespace-nowrap"
          data-node-id="229:11138"
        >
          <p className="leading-[normal]">App</p>
        </div>
      ) : null}
      <div
        className={`absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid content-stretch flex gap-[12px] items-center justify-center overflow-clip pl-[14px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_10px_24px_-4px_rgba(0,0,0,0.1)] ${
          isHighLevel ? 'left-[575px] top-[100px]' : 'left-[568px] top-[103px]'
        }`}
        data-node-id={isHighLevel ? '229:11567' : '229:11139'}
        data-name="Card +42%"
      >
        <div
          className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]"
          data-node-id={isHighLevel ? '229:11568' : '229:11140'}
          data-name="Icon"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="image-user-right">
            <div className="absolute inset-[4.17%]" data-name="Icon (Stroke)">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHighLevel ? imgHlCardIconUser : imgIconStroke1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[100px] whitespace-nowrap" data-node-id="229:11141" data-name="Frame">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#10172a] text-[17px]" data-node-id="229:11142">
            +42%
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#596070] text-[12px]" data-node-id="229:11143">
            client retention
          </p>
        </div>
      </div>
      <div
        className={`absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid content-stretch flex gap-[12px] items-center justify-center overflow-clip pl-[14px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_10px_24px_-4px_rgba(0,0,0,0.1)] ${
          isHighLevel ? 'left-[586px] top-[369px]' : 'left-[606px] top-[416px]'
        }`}
        data-node-id={isHighLevel ? '229:11572' : '229:11144'}
        data-name="Card 4.8"
      >
        <div
          className="bg-[var(--color\/secondary\/warning\/100,#fef0c7)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]"
          data-node-id={isHighLevel ? '229:11573' : '229:11145'}
          data-name="Icon"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="star-01">
            <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-name="Icon (Stroke)">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHighLevel ? imgHlCardIconStar : imgIconStroke2} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[100px] whitespace-nowrap" data-node-id="229:11146" data-name="Frame">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#10172a] text-[17px]" data-node-id="229:11147">
            4.8
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#596070] text-[12px]" data-node-id="229:11148">
            avg rating
          </p>
        </div>
      </div>
      <div
        className={`absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid content-stretch flex gap-[12px] items-center justify-center overflow-clip pl-[14px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_10px_24px_-4px_rgba(0,0,0,0.1)] ${
          isHighLevel ? 'left-[863px] top-[349px]' : 'left-[880px] top-[403px]'
        }`}
        data-node-id={isHighLevel ? '229:11577' : '229:11149'}
        data-name="Card 12.4k"
      >
        <div
          className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]"
          data-node-id={isHighLevel ? '229:11578' : '229:11150'}
          data-name="Icon"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="download-01">
            <div className="absolute inset-[8.33%]" data-name="Icon (Stroke)">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHighLevel ? imgHlCardIconDownload : imgIconStroke3} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[100px] whitespace-nowrap" data-node-id="229:11151" data-name="Frame">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#10172a] text-[17px]" data-node-id="229:11152">
            12.4k
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#596070] text-[12px]" data-node-id="229:11153">
            client downloads
          </p>
        </div>
      </div>
      <div
        className={`absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid content-stretch flex gap-[12px] items-center justify-center overflow-clip pl-[14px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_10px_24px_-4px_rgba(0,0,0,0.1)] ${
          isHighLevel ? 'left-[875px] top-[94px]' : 'left-[874px] top-[100px]'
        }`}
        data-node-id={isHighLevel ? '229:11582' : '229:11154'}
        data-name="Card 18d"
      >
        <div
          className="bg-[var(--color\/secondary\/warning\/100,#fef0c7)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]"
          data-node-id={isHighLevel ? '229:11583' : '229:11155'}
          data-name="Icon"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="lightning-01">
            <div className="absolute inset-[4.17%_10.7%]" data-name="Icon (Stroke)">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHighLevel ? imgHlCardIconLightning : imgIconStroke4} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[106px] whitespace-nowrap" data-node-id="229:11156" data-name="Frame">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#10172a] text-[17px]" data-node-id="229:11157">
            18 days
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#596070] text-[12px]" data-node-id="229:11158">
            to launch your app
          </p>
        </div>
      </div>
    </div>
  )
}
