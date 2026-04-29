import type { ProductTabId } from "../productTab";

const imgAvatar = "https://www.figma.com/api/mcp/asset/f0375799-55c7-4926-960a-934514dcb27f";
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/73c6bffd-a907-4b9d-b0af-ee2f6d26efbf";
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/eb51fb4f-b383-4d6f-a7e0-782c0f91ade4";
const imgAvatar3 = "https://www.figma.com/api/mcp/asset/3a376ae8-dbef-4db4-ae08-9d3d58dba950";
const imgAvatar4 = "https://www.figma.com/api/mcp/asset/78544cc1-9fa5-4366-9608-716ffe4cdec0";
const imgAvatar5 = "https://www.figma.com/api/mcp/asset/751e4c49-c2a0-46be-96d6-d5a053be7f1f";
const imgAvatar6 = "https://www.figma.com/api/mcp/asset/3397d2a2-6db0-4e37-a202-44e28a3ca6fe";
const imgImage1Vectorized = "https://www.figma.com/api/mcp/asset/d0dbc4da-b8be-4e71-9a71-a01c54303072";
const imgVector7 = "https://www.figma.com/api/mcp/asset/85227eee-0972-44d7-a748-818603ebaec7";
const imgVector = "https://www.figma.com/api/mcp/asset/0a133d8c-517e-4a50-9868-875aeb0333db";
const imgIcon = "https://www.figma.com/api/mcp/asset/3f2a2858-0563-46c8-a82d-b9187e08d2e2";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/fd1f007d-0b57-4730-a9d9-98417ba8a0f5";
const imgIconStroke = "https://www.figma.com/api/mcp/asset/7d462118-3036-4ae4-bd0c-137e95e1591a";
const imgIconStroke1 = "https://www.figma.com/api/mcp/asset/190e323a-686b-4c34-850b-ea6fbe4a0f56";
const imgIconStroke2 = "https://www.figma.com/api/mcp/asset/6591d93b-9f36-4bc2-8b6f-766000551329";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/2c52e334-3dff-47d3-bac0-b543c4d8609b";
const imgVector1 = "https://www.figma.com/api/mcp/asset/c20f4982-d9d2-4d32-8256-c9eb2e573fdf";
const imgVector2 = "https://www.figma.com/api/mcp/asset/2f8df77e-1295-4c46-86f7-01f73e44725a";
const imgEllipse154 = "https://www.figma.com/api/mcp/asset/77cdbb44-330b-4400-8900-45128a8768a9";
const imgGroup = "https://www.figma.com/api/mcp/asset/8a8b4fe9-efcf-4160-94a6-25eb6a514414";
const imgVector3 = "https://www.figma.com/api/mcp/asset/69d0f8c8-59cc-4c3c-95cc-e38aecb4a2d2";
const imgIconStroke3 = "https://www.figma.com/api/mcp/asset/246adc83-1cc1-4b46-ad3a-fe5fab5379ef";
const imgDivider = "https://www.figma.com/api/mcp/asset/96a468a4-08b3-43a2-b422-8c512438d654";
const imgChart = "https://www.figma.com/api/mcp/asset/bfdcf810-a1ff-4157-8a76-882ed8b10587";
const imgChart1 = "https://www.figma.com/api/mcp/asset/8c90715d-0dd8-4022-8781-c55353eb91b5";
const imgChart2 = "https://www.figma.com/api/mcp/asset/3997fe64-d088-4180-a45c-5d43e44f3947";

type WhyShipYourOwnAppProps = {
  variant?: ProductTabId;
};

export default function WhyShipYourOwnApp({ variant = "custom" }: WhyShipYourOwnAppProps) {
  const isHighLevel = variant === "highlevel";
  const isLeadConnector = variant === "leadConnector";
  const stepNumClass = isLeadConnector
    ? "font-['Plus_Jakarta_Sans',sans-serif] font-extrabold italic leading-[64px] relative shrink-0 text-[48px] text-[#3f621a] text-center tracking-[-0.96px]"
    : isHighLevel
      ? "font-['Plus_Jakarta_Sans',sans-serif] font-extrabold italic leading-[64px] relative shrink-0 text-[48px] text-[#004eeb] text-center tracking-[-0.96px]"
      : "font-['Plus_Jakarta_Sans',sans-serif] font-extrabold italic leading-[64px] relative shrink-0 text-[48px] text-[#155eef] text-center tracking-[-0.96px]";

  return (
    <div className="relative size-full" data-node-id="229:11172" data-name="Why Ship Your Own App">
      <div className="absolute left-1/2 top-0 flex w-[1112px] -translate-x-1/2 flex-col content-stretch items-start gap-[32px]" data-node-id="229:11173">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="229:11174">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#10172a] text-[0px] text-center tracking-[-1.12px] w-full" data-node-id="229:11175">
            {isLeadConnector ? (
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64px] text-[48px]" data-node-id="229:11390">
                Why teams rely on LeadConnector
              </span>
            ) : isHighLevel ? (
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64px] text-[48px]" data-node-id="229:11602">
                Everything HighLevel, in your pocket
              </span>
            ) : (
              <>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64px] text-[48px]">Why your agency needs an</span>
                <span className="leading-[64px] text-[48px]">{` `}</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold italic leading-[64px] text-[#155eef] text-[48px] tracking-[-0.96px]">App?</span>
              </>
            )}
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="229:11176">
          <div
            className={`bg-gradient-to-b content-stretch flex flex-col gap-[16px] h-[460px] items-start overflow-clip p-[32px] relative rounded-[24px] shrink-0 to-[#fdf9f4] w-[360px] ${isLeadConnector ? "from-[#d1fae5]" : isHighLevel ? "from-[#dde9ff]" : "from-[#ffedde]"}`}
            data-node-id="229:11177"
            data-name="Reason 01"
          >
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-node-id="331:12620">
              <p className={stepNumClass} data-node-id="229:11178">
                01
              </p>
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[24px] text-[color:var(--color\/neutral\/gray\/900,#101828)] tracking-[-0.24px]" data-node-id="229:11179">
                {isLeadConnector ? "Work from anywhere" : isHighLevel ? "Run all your sub-accounts" : "Build real brand authority"}
              </p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal h-[144px] leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--color\/neutral\/gray\/700,#344054)] w-[296px]" data-node-id="229:11180">
              {isLeadConnector
                ? "Calls, texts, emails, and calendar in one place. Run your day from your phone — no laptop required — so you never drop a conversation when you’re between meetings or on the road."
                : isHighLevel
                  ? "Switch between sub-accounts, check pipelines, and access the full CRM for every client — all without opening a laptop. Your agency travels with you."
                  : "Your logo in the App Store. Your name on every screen. Clients see a real software brand — not a platform they didn’t choose. That’s the kind of credibility a login link can’t deliver."}
            </p>
            <div className="bg-[rgba(255,255,255,0.75)] h-[190px] overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)] shrink-0 w-[297px]" data-node-id="229:11181" data-name="iPhone 16 - 2">
              <div className="-translate-x-1/2 absolute font-['Instrument_Serif:Italic',sans-serif] italic leading-[0] left-[150.48px] text-[#441f95] text-[26px] text-center top-[85.04px] tracking-[-0.78px] whitespace-nowrap" data-node-id="229:11182">
                <p className="leading-[normal] mb-0">Riverfront</p>
                <p className="leading-[normal]">{`Spa & Hotels`}</p>
              </div>
              <div className="absolute left-[108px] size-[85.039px] top-0" data-node-id="229:11183" data-name="image 1 [Vectorized]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgImage1Vectorized} />
              </div>
            </div>
          </div>
          <div
            className={`bg-gradient-to-b content-stretch flex flex-col gap-[16px] h-[460px] items-start overflow-clip p-[32px] relative rounded-[24px] shrink-0 to-[#fdf9f4] w-[360px] ${isLeadConnector ? "from-[#d1fae5]" : isHighLevel ? "from-[#dde9ff]" : "from-[#dbd0f8]"}`}
            data-node-id="229:11191"
            data-name="Reason 02"
          >
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-node-id="331:12621">
              <p className={stepNumClass} data-node-id="229:11192">
                02
              </p>
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[24px] text-[color:var(--color\/neutral\/gray\/900,#101828)] tracking-[-0.24px]" data-node-id="229:11193">
                {isLeadConnector ? "Unified inbox" : isHighLevel ? "Unified conversations" : "Lock in client retention"}
              </p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--color\/neutral\/gray\/700,#344054)] w-[296px]" data-node-id="229:11194">
              {isLeadConnector || isHighLevel
                ? "SMS, email, calls, Instagram DMs, Google Business Profile, and web chat — all in one thread. Respond from anywhere: the airport, between meetings, or the couch."
                : "When clients manage their day through your branded app — messages, bookings, payments, reviews — your platform becomes part of their routine. That’s retention built into the daily workflow, not a contract clause."}
            </p>
            <div className="bg-[rgba(255,255,255,0.7)] h-[190px] overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)] shrink-0 w-[297px]" data-node-id="229:11195" data-name="Conversations Home Page-1">
              <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12.093px] items-center left-[calc(50%+0.02px)] top-0 w-[297.035px]" data-node-id="229:11196">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="229:11197">
                  <div className="content-stretch flex gap-[9.07px] items-center relative shrink-0 w-[272.849px]" data-node-id="229:11198" data-name="Tabs">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="229:11199">
                      <div className="border-[#441f95] border-b-[3.023px] border-solid content-stretch flex gap-[3.023px] h-[42.326px] items-center justify-center overflow-clip px-[12.093px] py-[3.023px] relative shrink-0 w-[70.795px]" data-node-id="229:11200" data-name=".Tab Item">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-[var(--font\/weight\/semibold,600)] leading-[var(--font\/line-height\/lg,15.116px)] not-italic relative shrink-0 text-[#441f95] text-[length:var(--font\/size\/lg,10.58px)] tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11200;25:19772">
                          Team
                        </p>
                        <div className="bg-[var(--badge\/primary\/background\/default,#eff4ff)] content-stretch flex gap-[1.512px] h-[18.14px] items-center justify-center max-h-[18.139534950256348px] min-h-[18.139534950256348px] px-[6.047px] relative rounded-[4px] shrink-0" data-node-id="I229:11200;25:19773" data-name="Tag">
                          <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,13.605px)] not-italic relative shrink-0 text-[#441f95] text-[length:var(--font\/size\/md,9.83px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11200;25:19773;27013:12078">
                            20
                          </p>
                        </div>
                      </div>
                      <div className="border-[var(--color\/neutral\/gray\/300,#d0d5dd)] border-b-[3.023px] border-solid content-stretch flex gap-[3.023px] h-[42.326px] items-center justify-center overflow-clip px-[12.093px] py-[3.023px] relative shrink-0 w-[70.795px]" data-node-id="229:11201" data-name=".Tab Item">
                        <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/lg,15.116px)] not-italic relative shrink-0 text-[color:var(--color\/neutral\/gray\/500,#667085)] text-[length:var(--font\/size\/lg,10.58px)] tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11201;25:19778">
                          My
                        </p>
                        <div className="bg-[var(--badge\/gray\/background\/default,#f2f4f7)] content-stretch flex gap-[1.512px] h-[18.14px] items-center justify-center max-h-[18.139534950256348px] min-h-[18.139534950256348px] px-[6.047px] relative rounded-[4px] shrink-0" data-node-id="I229:11201;25:19779" data-name="Tag">
                          <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,13.605px)] not-italic relative shrink-0 text-[color:var(--badge\/gray\/label-color\/default,#344054)] text-[length:var(--font\/size\/md,9.83px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11201;25:19779;27013:12072">
                            32
                          </p>
                        </div>
                      </div>
                      <div className="border-[var(--color\/neutral\/gray\/300,#d0d5dd)] border-b-[3.023px] border-solid content-stretch flex gap-[3.023px] h-[42.326px] items-center justify-center overflow-clip px-[12.093px] py-[3.023px] relative shrink-0 w-[70.795px]" data-node-id="229:11202" data-name=".Tab Item">
                        <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/lg,15.116px)] not-italic relative shrink-0 text-[color:var(--color\/neutral\/gray\/500,#667085)] text-[length:var(--font\/size\/lg,10.58px)] tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11202;25:19778">
                          Internal
                        </p>
                        <div className="bg-[var(--badge\/gray\/background\/default,#f2f4f7)] content-stretch flex gap-[1.512px] h-[18.14px] items-center justify-center max-h-[18.139534950256348px] min-h-[18.139534950256348px] px-[6.047px] relative rounded-[4px] shrink-0" data-node-id="I229:11202;25:19779" data-name="Tag">
                          <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,13.605px)] not-italic relative shrink-0 text-[color:var(--badge\/gray\/label-color\/default,#344054)] text-[length:var(--font\/size\/md,9.83px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11202;25:19779;27013:12072">
                            45
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[18.14px] relative shrink-0 w-0" data-node-id="229:11203">
                      <div className="absolute inset-[-4.17%_-0.76px]">
                        <img alt="" className="block max-w-none size-full" src={imgVector7} />
                      </div>
                    </div>
                    <div className="border-[var(--color\/neutral\/gray\/300,#d0d5dd)] border-b-[3.023px] border-solid content-stretch flex gap-[3.023px] h-[42.326px] items-center justify-center overflow-clip px-[12.093px] py-[3.023px] relative shrink-0" data-node-id="229:11204" data-name=".Tab Item">
                      <div className="overflow-clip relative shrink-0 size-[18.14px]" data-node-id="I229:11204;25:19777" data-name="wysiwyg">
                        <div className="absolute inset-[12.5%]" data-node-id="I229:11204;25:19777;105:5795" data-name="Vector">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[6.047px] items-center overflow-x-auto overflow-y-clip relative shrink-0 w-[272.849px]" data-node-id="229:11206">
                  <div className="bg-[var(--tag\/gray\/background\/default,#f2f4f7)] content-stretch flex gap-[1.512px] h-[24.186px] items-center justify-center px-[6.047px] relative rounded-[27.209px] shrink-0" data-node-id="229:11207" data-name="Tag">
                    <div className="overflow-clip relative shrink-0 size-[12.093px]" data-node-id="I229:11207;393:3530" data-name="filter-lines">
                      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-node-id="I229:11207;393:3530;3463:405376" data-name="Icon">
                        <div className="absolute inset-[-6.25%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgIcon} />
                        </div>
                      </div>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,13.605px)] not-italic relative shrink-0 text-[color:var(--tag\/gray\/label-color\/default,#344054)] text-[length:var(--font\/size\/md,9.83px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11207;393:3532">
                      Filters
                    </p>
                  </div>
                  <div className="bg-[var(--tag\/gray\/background\/default,#f2f4f7)] content-stretch flex gap-[1.512px] h-[24.186px] items-center justify-center px-[6.047px] relative rounded-[27.209px] shrink-0" data-node-id="229:11208" data-name="Tag">
                    <div className="overflow-clip relative shrink-0 size-[12.093px]" data-node-id="I229:11208;393:3530" data-name="switch-vertical-01">
                      <div className="absolute inset-[16.67%_12.5%]" data-node-id="I229:11208;393:3530;3463:404657" data-name="Icon">
                        <div className="absolute inset-[-4.69%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,13.605px)] not-italic relative shrink-0 text-[color:var(--tag\/gray\/label-color\/default,#344054)] text-[length:var(--font\/size\/md,9.83px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11208;393:3532">
                      Sort
                    </p>
                  </div>
                  <div className="bg-[var(--tag\/gray\/background\/default,#f2f4f7)] content-stretch flex gap-[1.512px] h-[24.186px] items-center justify-center px-[6.047px] relative rounded-[27.209px] shrink-0" data-node-id="229:11209" data-name="Tag">
                    <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,13.605px)] not-italic relative shrink-0 text-[color:var(--tag\/gray\/label-color\/default,#344054)] text-[length:var(--font\/size\/md,9.83px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11209;393:3532">
                      Unread (980)
                    </p>
                  </div>
                  <div className="bg-[var(--tag\/gray\/background\/default,#f2f4f7)] content-stretch flex gap-[1.512px] h-[24.186px] items-center justify-center px-[6.047px] relative rounded-[27.209px] shrink-0" data-node-id="229:11210" data-name="Tag">
                    <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,13.605px)] not-italic relative shrink-0 text-[color:var(--tag\/gray\/label-color\/default,#344054)] text-[length:var(--font\/size\/md,9.83px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11210;393:3532">
                      Starred
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12.093px] h-[352.209px] items-start overflow-x-clip overflow-y-auto px-[12.093px] relative shrink-0 w-full" data-node-id="229:11211">
                  <div className="border-[var(--color\/neutral\/gray\/200,#eaecf0)] border-b-[0.756px] border-solid content-stretch flex gap-[9.07px] items-center justify-center pb-[12.093px] relative shrink-0 w-full" data-node-id="229:11212" data-name="_Feed item base">
                    <div className="content-stretch flex gap-[8.314px] items-start relative shrink-0 w-[272.849px]" data-node-id="229:11214" data-name="Thread">
                      <div className="relative rounded-[200px] shrink-0 size-[30.233px]" data-node-id="I229:11214;17743:12913" data-name="Avatar">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
                          <div className="absolute bg-[#d4b2af] inset-0 rounded-[200px]" />
                          <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgAvatar} />
                        </div>
                        <div className="absolute bg-[var(--color\/neutral\/gray\/100,#f2f4f7)] bottom-[-1.51px] content-stretch flex items-center justify-center right-[-1.51px] rounded-[12.093px] size-[10.581px]" data-node-id="I229:11214;17743:12913;26683:72166" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[7.558px] top-1/2" data-node-id="I229:11214;17743:12913;26683:72166;27286:19531" data-name="message-notification-circle">
                            <div className="absolute inset-[8.33%_8.33%_12.5%_5.8%]" data-node-id="I229:11214;17743:12913;26683:72166;27286:19531;105:13989" data-name="Icon (Stroke)">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4px,3.023px)] items-start min-w-px relative" data-node-id="I229:11214;17743:12892">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I229:11214;17743:12893">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.116px] not-italic relative shrink-0 text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)] whitespace-nowrap" data-node-id="I229:11214;17743:12894">
                            Koray Okumus
                          </p>
                          <div className="content-stretch flex gap-[6.047px] items-center relative shrink-0" data-node-id="I229:11214;18729:21670">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12.849px] not-italic relative shrink-0 text-[#441f95] text-[9.07px] whitespace-nowrap" data-node-id="I229:11214;18729:21671">
                              12:02 PM
                            </p>
                            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[13.605px]" data-node-id="I229:11214;18729:21672" data-name="Icon">
                              <div className="absolute inset-0 overflow-clip" data-node-id="I229:11214;18729:21672;27286:19135" data-name="star-01">
                                <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-node-id="I229:11214;18729:21672;27286:19135;105:13341" data-name="Icon (Stroke)">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10.581px] items-center relative shrink-0 w-full" data-node-id="I229:11214;17743:12896">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[15.116px] min-w-px not-italic relative text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)]" data-node-id="I229:11214;17743:12897">
                            Hi Olivia how are you?
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I229:11214;17743:12898" data-name="Tag Group">
                            <div className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex gap-[1.512px] h-[13.605px] items-center justify-center px-[4.535px] relative rounded-[9px] shrink-0" data-node-id="I229:11214;17743:12898;27377:26179" data-name="Tag">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.093px] not-italic relative shrink-0 text-[8.31px] text-[color:var(--color\/secondary\/success\/600,#039855)] text-center whitespace-nowrap" data-node-id="I229:11214;17743:12898;27377:26179;26957:104631">
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--color\/neutral\/gray\/200,#eaecf0)] border-b-[0.756px] border-solid content-stretch flex gap-[9.07px] items-center justify-center pb-[12.093px] relative shrink-0 w-full" data-node-id="229:11217" data-name="_Feed item base">
                    <div className="content-stretch flex gap-[8.314px] items-start relative shrink-0 w-[272.849px]" data-node-id="229:11219" data-name="Thread">
                      <div className="relative rounded-[200px] shrink-0 size-[30.233px]" data-node-id="I229:11219;17743:12854" data-name="Avatar">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatar1} />
                        <div className="absolute bg-[var(--color\/neutral\/gray\/100,#f2f4f7)] bottom-[-1.51px] content-stretch flex items-center justify-center right-[-1.51px] rounded-[12.093px] size-[10.581px]" data-node-id="I229:11219;17743:12854;26683:72166" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[7.558px] top-1/2" data-node-id="I229:11219;17743:12854;26683:72166;27286:19531" data-name="phone-call-01">
                            <div className="absolute inset-[4.17%_4.17%_3.5%_3.87%]" data-node-id="I229:11219;17743:12854;26683:72166;27286:19531;105:14040" data-name="Icon (Stroke)">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke2} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4px,3.023px)] items-start min-w-px relative" data-node-id="I229:11219;17743:12835">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I229:11219;17743:12836">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.116px] not-italic relative shrink-0 text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)] whitespace-nowrap" data-node-id="I229:11219;17743:12837">
                            Drew Cano
                          </p>
                          <div className="content-stretch flex gap-[6.047px] items-center relative shrink-0" data-node-id="I229:11219;18729:22125">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12.849px] not-italic relative shrink-0 text-[#441f95] text-[9.07px] whitespace-nowrap" data-node-id="I229:11219;18729:22126">
                              12:02 PM
                            </p>
                            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[13.605px]" data-node-id="I229:11219;18729:22127" data-name="Icon">
                              <div className="absolute inset-0 overflow-clip" data-node-id="I229:11219;18729:22127;27286:19135" data-name="star-01">
                                <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-node-id="I229:11219;18729:22127;27286:19135;105:13341" data-name="Icon (Stroke)">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10.581px] items-center relative shrink-0 w-full" data-node-id="I229:11219;17743:12839">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[15.116px] min-w-px not-italic relative text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)]" data-node-id="I229:11219;17743:12840">
                            Hi Olivia how are you?
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I229:11219;17743:12841" data-name="Tag Group">
                            <div className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex gap-[1.512px] h-[13.605px] items-center justify-center px-[4.535px] relative rounded-[9px] shrink-0" data-node-id="I229:11219;17743:12841;27377:26179" data-name="Tag">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.093px] not-italic relative shrink-0 text-[8.31px] text-[color:var(--color\/secondary\/success\/600,#039855)] text-center whitespace-nowrap" data-node-id="I229:11219;17743:12841;27377:26179;26957:104631">
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--color\/neutral\/gray\/200,#eaecf0)] border-b-[0.756px] border-solid content-stretch flex gap-[9.07px] items-center justify-center pb-[12.093px] relative shrink-0 w-full" data-node-id="229:11222" data-name="_Feed item base">
                    <div className="content-stretch flex gap-[8.314px] items-start relative shrink-0 w-[272.849px]" data-node-id="229:11224" data-name="Thread">
                      <div className="relative rounded-[200px] shrink-0 size-[30.233px]" data-node-id="I229:11224;17743:12709" data-name="Avatar">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatar2} />
                        <div className="absolute bg-[var(--color\/neutral\/gray\/100,#f2f4f7)] bottom-[-1.51px] content-stretch flex items-center justify-center right-[-1.51px] rounded-[12.093px] size-[10.581px]" data-node-id="I229:11224;17743:12709;26683:72166" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[7.558px] top-1/2" data-node-id="I229:11224;17743:12709;26683:72166;27286:19531" data-name="Property 1=Email, Size=Default">
                            <div className="absolute inset-[16.67%_8.33%_16.66%_8.33%]" data-node-id="I229:11224;17743:12709;26683:72166;27286:19531;18746:25263" data-name="Icon">
                              <div className="absolute inset-[-6.23%_-4.99%]">
                                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4px,3.023px)] items-start min-w-px relative" data-node-id="I229:11224;17743:12685">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I229:11224;17743:12686">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.116px] not-italic relative shrink-0 text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)] whitespace-nowrap" data-node-id="I229:11224;17743:12687">
                            Olivia Rhye
                          </p>
                          <div className="content-stretch flex gap-[6.047px] items-center relative shrink-0" data-node-id="I229:11224;18729:21216">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12.849px] not-italic relative shrink-0 text-[9.07px] text-[color:var(--color\/primary\/blue\/700,#004eeb)] whitespace-nowrap" data-node-id="I229:11224;17743:12688">
                              12:02 PM
                            </p>
                            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[13.605px]" data-node-id="I229:11224;18729:21152" data-name="Icon">
                              <div className="absolute inset-0 overflow-clip" data-node-id="I229:11224;18729:21152;27286:19135" data-name="star-01">
                                <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-node-id="I229:11224;18729:21152;27286:19135;105:13341" data-name="Icon (Stroke)">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10.581px] items-center relative shrink-0 w-full" data-node-id="I229:11224;17743:12689">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[15.116px] min-w-px not-italic relative text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)]" data-node-id="I229:11224;17743:12690">
                            Hi Olivia how are you?
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I229:11224;17743:12691" data-name="Tag Group">
                            <div className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex gap-[1.512px] h-[13.605px] items-center justify-center px-[4.535px] relative rounded-[9px] shrink-0" data-node-id="I229:11224;17743:12691;27377:26179" data-name="Tag">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.093px] not-italic relative shrink-0 text-[8.31px] text-[color:var(--color\/secondary\/success\/600,#039855)] text-center whitespace-nowrap" data-node-id="I229:11224;17743:12691;27377:26179;26957:104631">
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--color\/neutral\/gray\/200,#eaecf0)] border-b-[0.756px] border-solid content-stretch flex gap-[9.07px] items-center justify-center pb-[12.093px] relative shrink-0 w-full" data-node-id="229:11227" data-name="_Feed item base">
                    <div className="content-stretch flex gap-[8.314px] items-start relative shrink-0 w-[272.849px]" data-node-id="229:11229" data-name="Thread">
                      <div className="relative rounded-[200px] shrink-0 size-[30.233px]" data-node-id="I229:11229;17743:12882" data-name="Avatar">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatar3} />
                        <div className="absolute bg-[var(--color\/neutral\/gray\/100,#f2f4f7)] bottom-[-1.51px] content-stretch flex items-center justify-center right-[-1.51px] rounded-[12.093px] size-[10.581px]" data-node-id="I229:11229;17743:12882;26683:72166" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[7.558px] top-1/2" data-node-id="I229:11229;17743:12882;26683:72166;27286:19531" data-name="Property 1=Instagram, Size=Default">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[2.756px] top-1/2" data-node-id="I229:11229;17743:12882;26683:72166;27286:19531;18746:25280" data-name="Vector">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4px,3.023px)] items-start min-w-px relative" data-node-id="I229:11229;17743:12861">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I229:11229;17743:12862">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.116px] not-italic relative shrink-0 text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)] whitespace-nowrap" data-node-id="I229:11229;17743:12863">
                            Orlando Diggs
                          </p>
                          <div className="content-stretch flex gap-[6.047px] items-center relative shrink-0" data-node-id="I229:11229;18729:21554">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12.849px] not-italic relative shrink-0 text-[9.07px] text-[color:var(--color\/primary\/blue\/700,#004eeb)] whitespace-nowrap" data-node-id="I229:11229;18729:21555">
                              12:02 PM
                            </p>
                            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[13.605px]" data-node-id="I229:11229;18729:21556" data-name="Icon">
                              <div className="absolute inset-0 overflow-clip" data-node-id="I229:11229;18729:21556;27286:19135" data-name="star-01">
                                <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-node-id="I229:11229;18729:21556;27286:19135;105:13341" data-name="Icon (Stroke)">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10.581px] items-center relative shrink-0 w-full" data-node-id="I229:11229;17743:12865">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[15.116px] min-w-px not-italic relative text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)]" data-node-id="I229:11229;17743:12866">
                            Hi Olivia how are you?
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I229:11229;17743:12867" data-name="Tag Group">
                            <div className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex gap-[1.512px] h-[13.605px] items-center justify-center px-[4.535px] relative rounded-[9px] shrink-0" data-node-id="I229:11229;17743:12867;27377:26179" data-name="Tag">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.093px] not-italic relative shrink-0 text-[8.31px] text-[color:var(--color\/secondary\/success\/600,#039855)] text-center whitespace-nowrap" data-node-id="I229:11229;17743:12867;27377:26179;26957:104631">
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--color\/neutral\/gray\/200,#eaecf0)] border-b-[0.756px] border-solid content-stretch flex gap-[9.07px] items-center justify-center pb-[12.093px] relative shrink-0 w-full" data-node-id="229:11232" data-name="_Feed item base">
                    <div className="content-stretch flex gap-[8.314px] items-start relative shrink-0 w-[272.849px]" data-node-id="229:11234" data-name="Thread">
                      <div className="relative rounded-[200px] shrink-0 size-[30.233px]" data-node-id="I229:11234;17743:12734" data-name="Avatar">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatar4} />
                        <div className="absolute bg-[var(--color\/neutral\/gray\/100,#f2f4f7)] bottom-[-1.51px] content-stretch flex items-center justify-center right-[-1.51px] rounded-[12.093px] size-[10.581px]" data-node-id="I229:11234;17743:12734;26683:72166" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[7.558px] top-1/2" data-node-id="I229:11234;17743:12734;26683:72166;27286:19531" data-name="Property 1=SMS, Size=Default">
                            <div className="absolute inset-[8.33%_8.34%_8.34%_8.33%]" data-node-id="I229:11234;17743:12734;26683:72166;27286:19531;18746:25265" data-name="Vector">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                            </div>
                            <div className="absolute inset-[43.75%_56.25%_43.75%_31.25%]" data-node-id="I229:11234;17743:12734;26683:72166;27286:19531;18746:25266">
                              <div className="absolute inset-[-33.25%]">
                                <img alt="" className="block max-w-none size-full" src={imgEllipse154} />
                              </div>
                            </div>
                            <div className="absolute inset-[43.75%_31.25%_43.75%_56.25%]" data-node-id="I229:11234;17743:12734;26683:72166;27286:19531;18746:25267">
                              <div className="absolute inset-[-33.25%]">
                                <img alt="" className="block max-w-none size-full" src={imgEllipse154} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4px,3.023px)] items-start min-w-px relative" data-node-id="I229:11234;17743:12716">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I229:11234;17743:12717">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.116px] not-italic relative shrink-0 text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)] whitespace-nowrap" data-node-id="I229:11234;17743:12718">
                            Phoenix Baker
                          </p>
                          <div className="content-stretch flex gap-[6.047px] items-center relative shrink-0" data-node-id="I229:11234;18729:21831">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12.849px] not-italic relative shrink-0 text-[9.07px] text-[color:var(--color\/primary\/blue\/700,#004eeb)] whitespace-nowrap" data-node-id="I229:11234;18729:21832">
                              12:02 PM
                            </p>
                            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[13.605px]" data-node-id="I229:11234;18729:21833" data-name="Icon">
                              <div className="absolute inset-0 overflow-clip" data-node-id="I229:11234;18729:21833;27286:19135" data-name="star-01">
                                <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-node-id="I229:11234;18729:21833;27286:19135;105:13341" data-name="Icon (Stroke)">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10.581px] items-center relative shrink-0 w-full" data-node-id="I229:11234;17743:12720">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[15.116px] min-w-px not-italic relative text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)]" data-node-id="I229:11234;17743:12721">
                            Hi Olivia how are you?
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I229:11234;17743:12722" data-name="Tag Group">
                            <div className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex gap-[1.512px] h-[13.605px] items-center justify-center px-[4.535px] relative rounded-[9px] shrink-0" data-node-id="I229:11234;17743:12722;27377:26179" data-name="Tag">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.093px] not-italic relative shrink-0 text-[8.31px] text-[color:var(--color\/secondary\/success\/600,#039855)] text-center whitespace-nowrap" data-node-id="I229:11234;17743:12722;27377:26179;26957:104631">
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[var(--color\/neutral\/gray\/200,#eaecf0)] border-b-[0.756px] border-solid content-stretch flex gap-[9.07px] items-center justify-center pb-[12.093px] relative shrink-0 w-full" data-node-id="229:11237" data-name="_Feed item base">
                    <div className="content-stretch flex gap-[8.314px] items-start relative shrink-0 w-[272.849px]" data-node-id="229:11239" data-name="Thread">
                      <div className="relative rounded-[200px] shrink-0 size-[30.233px]" data-node-id="I229:11239;17743:12796" data-name="Avatar">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatar5} />
                        <div className="absolute bg-[var(--color\/neutral\/gray\/100,#f2f4f7)] bottom-[-1.51px] content-stretch flex items-center justify-center right-[-1.51px] rounded-[12.093px] size-[10.581px]" data-node-id="I229:11239;17743:12796;26683:72166" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[7.558px] top-1/2" data-node-id="I229:11239;17743:12796;26683:72166;27286:19531" data-name="Property 1=WhatsApp, Size=Default">
                            <div className="absolute inset-[0_4.2%_6.25%_3.8%]" data-node-id="I229:11239;17743:12796;26683:72166;27286:19531;18746:25275" data-name="Group">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4px,3.023px)] items-start min-w-px relative" data-node-id="I229:11239;17743:12778">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I229:11239;17743:12779">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.116px] not-italic relative shrink-0 text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)] whitespace-nowrap" data-node-id="I229:11239;17743:12780">
                            Candice Wu
                          </p>
                          <div className="content-stretch flex gap-[6.047px] items-center relative shrink-0" data-node-id="I229:11239;18729:21413">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12.849px] not-italic relative shrink-0 text-[9.07px] text-[color:var(--color\/primary\/blue\/700,#004eeb)] whitespace-nowrap" data-node-id="I229:11239;18729:21414">
                              12:02 PM
                            </p>
                            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[13.605px]" data-node-id="I229:11239;18729:21415" data-name="Icon">
                              <div className="absolute inset-0 overflow-clip" data-node-id="I229:11239;18729:21415;27286:19135" data-name="star-01">
                                <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-node-id="I229:11239;18729:21415;27286:19135;105:13341" data-name="Icon (Stroke)">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10.581px] items-center relative shrink-0 w-full" data-node-id="I229:11239;17743:12782">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[15.116px] min-w-px not-italic relative text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)]" data-node-id="I229:11239;17743:12783">
                            Hi Olivia how are you?
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I229:11239;17743:12784" data-name="Tag Group">
                            <div className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex gap-[1.512px] h-[13.605px] items-center justify-center px-[4.535px] relative rounded-[9px] shrink-0" data-node-id="I229:11239;17743:12784;27377:26179" data-name="Tag">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.093px] not-italic relative shrink-0 text-[8.31px] text-[color:var(--color\/secondary\/success\/600,#039855)] text-center whitespace-nowrap" data-node-id="I229:11239;17743:12784;27377:26179;26957:104631">
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9.07px] items-center justify-center pb-[12.093px] relative shrink-0 w-full" data-node-id="229:11242" data-name="_Feed item base">
                    <div className="content-stretch flex gap-[8.314px] items-start relative shrink-0 w-[272.849px]" data-node-id="229:11244" data-name="Thread">
                      <div className="relative rounded-[200px] shrink-0 size-[30.233px]" data-node-id="I229:11244;17743:12827" data-name="Avatar">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatar6} />
                        <div className="absolute bg-[var(--color\/neutral\/gray\/100,#f2f4f7)] bottom-[-1.51px] content-stretch flex items-center justify-center right-[-1.51px] rounded-[12.093px] size-[10.581px]" data-node-id="I229:11244;17743:12827;26683:72166" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[7.558px] top-1/2" data-node-id="I229:11244;17743:12827;26683:72166;27286:19531" data-name="Property 1=Facebook, Size=Default">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.05px)] size-[2.519px] top-[calc(50%+0.05px)]" data-node-id="I229:11244;17743:12827;26683:72166;27286:19531;18746:25270" data-name="Vector">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4px,3.023px)] items-start min-w-px relative" data-node-id="I229:11244;17743:12806">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I229:11244;17743:12807">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15.116px] not-italic relative shrink-0 text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)] whitespace-nowrap" data-node-id="I229:11244;17743:12808">
                            Natali Craig
                          </p>
                          <div className="content-stretch flex gap-[6.047px] items-center relative shrink-0" data-node-id="I229:11244;18729:21978">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12.849px] not-italic relative shrink-0 text-[9.07px] text-[color:var(--color\/primary\/blue\/700,#004eeb)] whitespace-nowrap" data-node-id="I229:11244;18729:21979">
                              12:02 PM
                            </p>
                            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[13.605px]" data-node-id="I229:11244;18729:21980" data-name="Icon">
                              <div className="absolute inset-0 overflow-clip" data-node-id="I229:11244;18729:21980;27286:19135" data-name="star-01">
                                <div className="absolute inset-[6.79%_6.56%_9.99%_6.56%]" data-node-id="I229:11244;18729:21980;27286:19135;105:13341" data-name="Icon (Stroke)">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10.581px] items-center relative shrink-0 w-full" data-node-id="I229:11244;17743:12810">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[15.116px] min-w-px not-italic relative text-[10.58px] text-[color:var(--color\/neutral\/gray\/600,#475467)]" data-node-id="I229:11244;17743:12811">
                            Hi Olivia how are you?
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I229:11244;17743:12812" data-name="Tag Group">
                            <div className="bg-[var(--color\/secondary\/success\/100,#d1fadf)] content-stretch flex gap-[1.512px] h-[13.605px] items-center justify-center px-[4.535px] relative rounded-[9px] shrink-0" data-node-id="I229:11244;17743:12812;27377:26179" data-name="Tag">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.093px] not-italic relative shrink-0 text-[8.31px] text-[color:var(--color\/secondary\/success\/600,#039855)] text-center whitespace-nowrap" data-node-id="I229:11244;17743:12812;27377:26179;26957:104631">
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[var(--color\/primary\/blue\/600,#155eef)] border-[0.756px] border-[var(--color\/primary\/blue\/600,#155eef)] border-solid content-stretch flex items-center justify-center left-[calc(50%+103.19px)] overflow-clip p-[9.07px] rounded-[8px] shadow-[0px_0.756px_1.512px_0px_rgba(16,24,40,0.05)] size-[33.256px] top-[430.06px]" data-node-id="229:11247" data-name="Button">
                <div className="overflow-clip relative shrink-0 size-[15.116px]" data-node-id="I229:11247;28419:157117" data-name="plus">
                  <div className="absolute inset-[16.67%]" data-node-id="I229:11247;28419:157117;105:13001" data-name="Icon (Stroke)">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-gradient-to-b content-stretch flex flex-col gap-[16px] h-[460px] items-start overflow-clip p-[32px] relative rounded-[24px] shrink-0 to-[#fdf9f4] w-[360px] ${isLeadConnector ? "from-[#d1fae5]" : isHighLevel ? "from-[#dde9ff]" : "from-[#def5e8]"}`}
            data-node-id="229:11248"
            data-name="Reason 03"
          >
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-node-id="331:12622">
              <p className={stepNumClass} data-node-id="229:11249">
                03
              </p>
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[24px] text-[color:var(--color\/neutral\/gray\/900,#101828)] tracking-[-0.24px]" data-node-id="229:11250">
                {isLeadConnector ? "Never miss a lead" : isHighLevel ? "Ask AI in your pocket" : "Win every pitch"}
              </p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal h-[144px] leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--color\/neutral\/gray\/700,#344054)] w-[296px]" data-node-id="229:11251">
              {isLeadConnector
                ? "Real-time push notifications surface new leads and hot threads the moment they happen. Prioritize what matters and reply before the competition does — even when you’re away from your desk."
                : isHighLevel
                  ? "Let Conversation AI, Voice AI, and workflows close deals while you sleep. Check the reports from your phone in the morning."
                  : "Most agencies pitch a dashboard. You hand over an app. That difference turns heads in sales calls, justifies premium positioning, and makes competitors look like they’re still catching up."}
            </p>
            <div className="bg-[rgba(255,255,255,0.7)] border-[0.823px] border-[var(--color\/neutral\/gray\/200,#eaecf0)] border-solid content-stretch flex flex-col gap-[13.163px] items-start p-[13.163px] relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_32px_64px_0px_rgba(16,24,40,0.14)] shrink-0 w-[297px]" data-node-id="229:11252">
              <div className="content-stretch flex flex-col gap-[13.163px] items-start relative shrink-0 w-full" data-node-id="229:11253">
                <div className="content-stretch flex gap-[6.582px] items-center relative shrink-0 w-full" data-node-id="229:11254">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="229:11255">
                    <div className="content-stretch flex gap-[3.291px] items-center relative shrink-0" data-node-id="229:11256" data-name="Label">
                      <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,14.809px)] not-italic relative shrink-0 text-[color:var(--color\/neutral\/gray\/700,#344054)] text-[length:var(--font\/size\/md,10.7px)] tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11256;26951:17795">
                        Revenue
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="229:11257">
                    <div className="content-stretch flex gap-[3.291px] items-center relative shrink-0" data-node-id="229:11258" data-name="Label">
                      <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/md,14.809px)] not-italic relative shrink-0 text-[color:var(--color\/neutral\/gray\/700,#344054)] text-[length:var(--font\/size\/md,10.7px)] tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="I229:11258;26951:17795">
                        Last 6 Months
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[270.673px]" data-node-id="229:11259" data-name="Divider">
                  <div className="content-stretch flex gap-[3.291px] items-center relative shrink-0 w-full" data-node-id="I229:11259;27256:231" data-name="Content">
                    <div className="bg-[var(--color\/neutral\/gray\/200,#eaecf0)] flex-[1_0_0] h-[0.823px] min-w-px" data-node-id="I229:11259;26683:85321" data-name="Divider" />
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31.263px] leading-[31.263px] not-italic relative shrink-0 text-[24.681px] text-[color:var(--color\/neutral\/gray\/900,#101828)] w-full" data-node-id="229:11260">
                $2,880
              </p>
              <div className="h-[164.543px] relative shrink-0 w-full" data-node-id="229:11261" data-name="Line and bar chart">
                <div className="absolute content-stretch flex gap-[3.291px] inset-0 items-start" data-node-id="229:11262" data-name="Axis">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end min-w-px relative" data-node-id="229:11265" data-name="Content">
                    <div className="content-stretch flex flex-col h-[150.557px] items-start justify-between relative shrink-0 w-[270.673px]" data-node-id="229:11282" data-name="_Y-axis">
                      <div className="content-stretch flex gap-[6.582px] h-[18.1px] items-center relative shrink-0 w-full" data-node-id="I229:11282;1067:826" data-name="_Y-axis line">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[11.507px] not-italic relative shrink-0 text-[8.12px] text-[color:var(--color\/neutral\/gray\/500,#667085)] text-right w-[26.327px]" data-node-id="I229:11282;1067:826;1061:46470">
                          10K
                        </p>
                        <div className="flex-[1_0_0] h-[0.823px] min-w-px relative" data-node-id="I229:11282;1067:826;1076:3243" data-name="Divider">
                          <div className="absolute bottom-0 left-0 right-0 top-full" data-node-id="I229:11282;1067:826;1076:1987" data-name="Divider">
                            <div className="absolute inset-[-0.82px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgDivider} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6.582px] h-[13.986px] items-center relative shrink-0 w-full" data-node-id="I229:11282;1067:827" data-name="_Y-axis line">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[8.12px] text-[color:var(--color\/neutral\/gray\/500,#667085)] text-right w-[26.327px]" data-node-id="I229:11282;1067:827;1061:46470">
                          <span className="leading-[11.507px]">8</span>
                          <span className="leading-[11.507px]">K</span>
                        </p>
                        <div className="flex-[1_0_0] h-[0.823px] min-w-px relative" data-node-id="I229:11282;1067:827;1076:3243" data-name="Divider">
                          <div className="absolute bottom-0 left-0 right-0 top-full" data-node-id="I229:11282;1067:827;1076:1987" data-name="Divider">
                            <div className="absolute inset-[-0.82px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgDivider} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6.582px] h-[13.986px] items-center relative shrink-0 w-full" data-node-id="I229:11282;1067:828" data-name="_Y-axis line">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[8.12px] text-[color:var(--color\/neutral\/gray\/500,#667085)] text-right w-[26.327px]" data-node-id="I229:11282;1067:828;1061:46470">
                          <span className="leading-[11.507px]">6</span>
                          <span className="leading-[11.507px]">K</span>
                        </p>
                        <div className="flex-[1_0_0] h-[0.823px] min-w-px relative" data-node-id="I229:11282;1067:828;1076:3243" data-name="Divider">
                          <div className="absolute bottom-0 left-0 right-0 top-full" data-node-id="I229:11282;1067:828;1076:1987" data-name="Divider">
                            <div className="absolute inset-[-0.82px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgDivider} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6.582px] h-[13.986px] items-center relative shrink-0 w-full" data-node-id="I229:11282;1067:829" data-name="_Y-axis line">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[8.12px] text-[color:var(--color\/neutral\/gray\/500,#667085)] text-right w-[26.327px]" data-node-id="I229:11282;1067:829;1061:46470">
                          <span className="leading-[11.507px]">4</span>
                          <span className="leading-[11.507px]">K</span>
                        </p>
                        <div className="flex-[1_0_0] h-[0.823px] min-w-px relative" data-node-id="I229:11282;1067:829;1076:3243" data-name="Divider">
                          <div className="absolute bottom-0 left-0 right-0 top-full" data-node-id="I229:11282;1067:829;1076:1987" data-name="Divider">
                            <div className="absolute inset-[-0.82px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgDivider} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6.582px] h-[13.986px] items-center relative shrink-0 w-full" data-node-id="I229:11282;1067:830" data-name="_Y-axis line">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[8.12px] text-[color:var(--color\/neutral\/gray\/500,#667085)] text-right w-[26.327px]" data-node-id="I229:11282;1067:830;1061:46470">
                          <span className="leading-[11.507px]">2</span>
                          <span className="leading-[11.507px]">K</span>
                        </p>
                        <div className="flex-[1_0_0] h-[0.823px] min-w-px relative" data-node-id="I229:11282;1067:830;1076:3243" data-name="Divider">
                          <div className="absolute bottom-0 left-0 right-0 top-full" data-node-id="I229:11282;1067:830;1076:1987" data-name="Divider">
                            <div className="absolute inset-[-0.82px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgDivider} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6.582px] h-[13.986px] items-center relative shrink-0 w-full" data-node-id="I229:11282;1067:831" data-name="_Y-axis line">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[11.507px] not-italic relative shrink-0 text-[8.12px] text-[color:var(--color\/neutral\/gray\/500,#667085)] text-right w-[26.327px]" data-node-id="I229:11282;1067:831;1061:46470">
                          0
                        </p>
                        <div className="flex-[1_0_0] h-[0.823px] min-w-px relative" data-node-id="I229:11282;1067:831;1076:3243" data-name="Divider">
                          <div className="absolute bottom-0 left-0 right-0 top-full" data-node-id="I229:11282;1067:831;1076:1987" data-name="Divider">
                            <div className="absolute inset-[-0.82px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgDivider} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-[var(--font\/weight\/regular,400)] items-center justify-between leading-[13.986px] not-italic pl-[33.731px] relative shrink-0 text-[9.873px] text-[color:var(--color\/neutral\/gray\/500,#667085)] w-full whitespace-nowrap" data-node-id="229:11283" data-name="_X-axis">
                      <p className="relative shrink-0 text-center" data-node-id="229:11284">
                        Sep 25
                      </p>
                      <p className="relative shrink-0 text-center" data-node-id="229:11285">
                        Aug 25
                      </p>
                      <p className="relative shrink-0 text-center" data-node-id="229:11286">
                        Jul 25
                      </p>
                      <p className="relative shrink-0 text-right" data-node-id="229:11287">
                        Jun 25
                      </p>
                      <p className="relative shrink-0 text-right" data-node-id="229:11288">
                        May 25
                      </p>
                      <p className="relative shrink-0 text-right" data-node-id="229:11289">
                        Mar 25
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[37.02px_7.4px_21.39px_44.43px]" data-node-id="229:11293" data-name="._Chart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChart} />
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChart1} />
                  <div className="absolute inset-[-0.78%_-0.38%]">
                    <img alt="" className="block max-w-none size-full" src={imgChart2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}