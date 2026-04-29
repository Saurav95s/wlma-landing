import type { ProductTabId } from '../productTab'

type StatsRowProps = {
  variant?: ProductTabId
}

export default function StatsRow({ variant = 'custom' }: StatsRowProps) {
  const statNum =
    "font-['Plus_Jakarta_Sans',sans-serif] font-extrabold italic leading-[64px] relative shrink-0 text-[48px] text-[#155eef] text-center tracking-[-0.96px]"
  const statNumLc =
    "font-['Plus_Jakarta_Sans',sans-serif] font-extrabold italic leading-[64px] relative shrink-0 text-[48px] text-[#15803d] text-center tracking-[-0.96px]"
  const mlmStats = variant === 'highlevel' || variant === 'leadConnector'
  const statNumMlm = variant === 'leadConnector' ? statNumLc : statNum

  if (mlmStats) {
    return (
      <div
        className="content-stretch flex items-center justify-between relative size-full whitespace-nowrap"
        data-node-id={variant === 'leadConnector' ? '229:11377' : '229:11587'}
      >
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
          <p className={statNumMlm} data-node-id={variant === 'leadConnector' ? '229:11379' : '229:11589'}>
            500K+
          </p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
            Active mobile users
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
          <p className={statNumMlm} data-node-id={variant === 'leadConnector' ? '229:11382' : '229:11592'}>
            4.5★
          </p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
            App Store rating
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
          <p className={statNumMlm} data-node-id={variant === 'leadConnector' ? '229:11385' : '229:11595'}>
            {'<'}3s
          </p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
            Push notification speed
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
          <p className={statNumMlm} data-node-id={variant === 'leadConnector' ? '229:11388' : '229:11598'}>
            60%
          </p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
            Faster lead response
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="content-stretch flex items-center justify-between relative size-full whitespace-nowrap" data-node-id="229:11159">
      <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
        <p className={statNum} data-node-id="229:11161">
          1000+
        </p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
          Apps published
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
        <p className={statNum} data-node-id="229:11164">
          67%
        </p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
          Sub-account retention boost
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
        <p className={statNum} data-node-id="229:11167">
          18days
        </p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
          Average launch time
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="Stat">
        <p className={statNum} data-node-id="229:11170">
          12K+
        </p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-[color:var(--color\/neutral\/gray\/900,#101828)]">
          Agencies using WLMA
        </p>
      </div>
    </div>
  )
}
