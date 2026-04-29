const imgIconStroke = 'https://www.figma.com/api/mcp/asset/5a51c669-1886-40f6-9144-c095b03cfb14'
const imgIconStroke1 = 'https://www.figma.com/api/mcp/asset/9b1cf82d-4ea1-48a4-8a67-2475f5b44596'
const imgEllipse1 = 'https://www.figma.com/api/mcp/asset/54cd1fe8-9306-4754-9572-f533424b7d6d'
const imgIconStroke2 = 'https://www.figma.com/api/mcp/asset/10c57264-0572-48c9-ad06-aae1d7b05966'
const imgQuestionMark = 'https://www.figma.com/api/mcp/asset/3af27507-3901-43f5-8bb7-bc40d21f48ba'
const imgQuestionMark1 = 'https://www.figma.com/api/mcp/asset/4b75ecb9-6c78-4bf1-b59c-4666beaae974'

export default function AppHeader() {
  return (
    <div
      className="border-[var(--color\/neutral\/gray\/300,#d0d5dd)] border-b border-solid content-stretch flex flex-col items-start relative size-full"
      data-node-id="229:11090"
      data-name="Header"
    >
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contacts Header">
        <div
          className="bg-[var(--base\/white,white)] border-[var(--gray\/200,#eaecf0)] border-b border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(16,24,40,0.05)] flex flex-col gap-[4px] items-start px-[16px] py-[4px] relative shrink-0 w-full"
          data-name="Header"
        >
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Title Content">
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Title Content">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content Start">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Icon Title Properties">
                    <div className="content-stretch flex flex-[1_0_0] items-end min-w-px relative">
                      <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-end min-w-px relative">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon Title Badge etc">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title Text">
                              <p
                                className="font-['Inter:Semi_Bold',sans-serif] font-[var(--font\/weight\/semibold,600)] leading-[var(--font\/line-height\/4xl,30px)] not-italic relative shrink-0 text-[color:var(--color\/neutral\/gray\/900,#101828)] text-[length:var(--font\/size\/4xl,20px)] tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap"
                              >
                                Mobile App
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Global Header Actions">
              <div className="bg-[var(--color\/accent\/purple\/600,#6938ef)] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
                <div className="absolute inset-[18.75%] overflow-clip" data-name="stars-01">
                  <div className="absolute inset-[4.17%]" data-name="Icon (Stroke)">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke} />
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[32px]">
                <div className="absolute bg-[#209681] left-0 rounded-[200px] size-[32px] top-0" data-name="Avatar">
                  <div className="absolute inset-[18.75%] overflow-clip" data-name="announcement-01">
                    <div className="absolute inset-[7.85%_4.17%_8.33%_4.17%]" data-name="Icon (Stroke)">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke1} />
                    </div>
                  </div>
                </div>
                <div className="absolute left-[22px] size-[8px] top-0">
                  <div className="absolute inset-[-12.5%]">
                    <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                  </div>
                </div>
              </div>
              <div className="bg-[#ff681e] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
                <div className="absolute inset-[18.75%] overflow-clip" data-name="bell-03">
                  <div className="absolute inset-[4.17%_10.57%]" data-name="Icon (Stroke)">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStroke2} />
                  </div>
                </div>
              </div>
              <div className="bg-[#008aef] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
                <div className="absolute inset-[18.75%] overflow-clip" data-name="help-big">
                  <div
                    className="absolute inset-[12.5%_27.29%_8.33%_29.2%]"
                    style={{
                      WebkitMaskImage: `url('${imgQuestionMark}')`,
                      maskImage: `url('${imgQuestionMark}')`,
                      WebkitMaskSize: '24px 24px',
                      maskSize: '24px 24px',
                      WebkitMaskPosition: '-7.008px -3px',
                      maskPosition: '-7.008px -3px',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                    }}
                    data-name="question_mark"
                  >
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuestionMark1} />
                  </div>
                </div>
              </div>
              <div
                className="bg-[#65b5bc] content-stretch flex flex-col items-center justify-center py-[6px] relative rounded-[200px] shrink-0 size-[32px]"
                data-name="Avatar"
              >
                <p className="font-['Inter:Medium',sans-serif] font-[var(--font\/weight\/medium,500)] leading-[var(--font\/line-height\/lg,20px)] not-italic relative shrink-0 text-[color:var(--color\/neutral\/white\/base,white)] text-[length:var(--font\/size\/lg,14px)] text-center tracking-[var(--font\/letter-spacing\/normal,0px)] w-full">
                  SS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
