import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeftIcon,
  FeatureCheckIcon,
  FeatureMinusIcon,
  GrowthPlanChipIcon,
  ScalePlanChipIcon,
  SparkleAiIcon,
  StarterPlanChipIcon,
} from '../icons/pricingIcons'

type FeatureRow =
  | { kind: 'check'; text: string }
  | { kind: 'minus'; text: string }
  | { kind: 'ai'; title: string; subtitle: string; accent: 'muted' | 'brand'; sparkleFill?: string }

/** Feature rows aligned with Figma node 367:10891 (WLMA-Q2-26) — Card Starter / Growth / Scale. */
const starterFeatures: FeatureRow[] = [
  { kind: 'check', text: 'Branding (logo, colors, fonts, app name)' },
  { kind: 'check', text: 'Live preview before publish' },
  { kind: 'check', text: 'Published on App Store and Google Play store' },
  { kind: 'minus', text: 'Top Nav, App Drawer and Bottom navbar customisation' },
  { kind: 'minus', text: 'Sub-account level control' },
  { kind: 'minus', text: 'Custom modules (URL or AI Builder)' },
  { kind: 'minus', text: 'Whitelabel Zap integration' },
  { kind: 'minus', text: 'White-glove service + Slack channel' },
  { kind: 'minus', text: 'Priority updates' },
  {
    kind: 'ai',
    title: 'Vibe Coding Builder (AI)',
    subtitle: '*Create app features using AI—no manual working required',
    accent: 'muted',
  },
]

const growthFeatures: FeatureRow[] = [
  { kind: 'check', text: 'Branding (logo, colors, fonts, app name)' },
  { kind: 'check', text: 'Live preview before publish' },
  { kind: 'check', text: 'Published on App Store and Google Play store' },
  { kind: 'check', text: 'Top Nav, App Drawer and Bottom navbar customisation' },
  { kind: 'minus', text: 'Sub-account level control' },
  { kind: 'minus', text: 'Custom modules (URL or AI Builder)' },
  { kind: 'minus', text: 'Whitelabel Zap integration' },
  { kind: 'minus', text: 'White-glove service + Slack channel' },
  { kind: 'minus', text: 'Priority updates' },
  {
    kind: 'ai',
    title: 'Vibe Coding Builder (AI)',
    subtitle: '*Create app features using AI—no manual working required',
    accent: 'muted',
  },
]

const scaleFeatures: FeatureRow[] = [
  { kind: 'check', text: 'Branding (logo, colors, fonts, app name)' },
  { kind: 'check', text: 'Live preview before publish' },
  { kind: 'check', text: 'Published on App Store and Google Play store' },
  { kind: 'check', text: 'Top Nav, App Drawer and Bottom navbar customisation' },
  { kind: 'check', text: 'Sub-account level control' },
  { kind: 'check', text: 'Custom modules (URL or AI Builder)' },
  { kind: 'check', text: 'Whitelabel Zap integration' },
  { kind: 'check', text: 'White-glove service + Slack channel' },
  { kind: 'check', text: 'Priority updates' },
  {
    kind: 'ai',
    title: 'Vibe Coding Builder (AI)',
    subtitle: '*Create app features using AI—no manual working required',
    accent: 'brand',
    sparkleFill: '#6938EF',
  },
]

function FeatureList({ rows }: { rows: FeatureRow[] }) {
  return (
    <div className="flex w-full flex-col gap-3">
      {rows.map((row, i) => {
        if (row.kind === 'ai') {
          const isBrand = row.accent === 'brand'
          return (
            <div key={i} className="flex gap-3">
              <div className="flex size-4 shrink-0 items-center justify-center pt-0.5">
                <SparkleAiIcon fill={row.sparkleFill ?? '#98A2B3'} />
              </div>
              <div className={`min-w-0 flex-1 ${isBrand ? 'text-[#6938ef]' : 'text-[#98a2b3]'}`}>
                <p className="font-['Inter:Medium',sans-serif] text-[15px] font-medium leading-5">{row.title}</p>
                <p className="mt-1 font-['Inter:Regular',sans-serif] text-[13px] font-normal italic leading-[18px]">
                  {row.subtitle}
                </p>
              </div>
            </div>
          )
        }
        const isMinus = row.kind === 'minus'
        return (
          <div key={i} className="flex gap-3">
            <div className="flex size-4 shrink-0 items-start justify-center pt-0.5">
              {isMinus ? <FeatureMinusIcon /> : <FeatureCheckIcon />}
            </div>
            <p
              className={`min-w-0 flex-1 font-['Inter:Medium',sans-serif] text-[15px] font-medium leading-5 ${
                isMinus ? 'text-[#98a2b3]' : 'text-[#10172a]'
              }`}
            >
              {row.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}

type PlanCardProps = {
  chip: ReactNode
  name: string
  nameClassName?: string
  description: string
  price: string
  ctaVariant: 'outline' | 'primary'
  features: FeatureRow[]
}

function PlanCard({ chip, name, nameClassName, description, price, ctaVariant, features }: PlanCardProps) {
  return (
    <div className="flex min-w-0 w-full flex-col gap-[20px] rounded-[24px] border border-[#eaecf0] bg-white p-5 shadow-[0px_4px_12px_0px_rgba(16,24,40,0.04)] sm:p-8">
      <div className="flex min-h-9 flex-wrap items-center gap-2">
        {chip}
        <p
          className={
            nameClassName ??
            "font-['Inter:Bold',sans-serif] text-[20px] font-bold leading-[30px] text-[#101828]"
          }
        >
          {name}
        </p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] min-h-[60px] text-[15px] font-bold leading-5 text-[#475467]">
        {description}
      </p>
      <div className="flex items-end gap-1">
        <span className="font-['Inter:Semi_Bold',sans-serif] text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-none tracking-[-1.2px] text-[#10172a] sm:leading-[72px]">
          {price}
        </span>
        <span className="font-['Inter:Regular',sans-serif] pb-2 text-[16px] font-normal leading-6 text-[#8892a2]">
          /month
        </span>
      </div>
      <button
        type="button"
        className={
          ctaVariant === 'primary'
            ? "w-full rounded-lg border border-[#155eef] bg-[#155eef] px-5 py-3 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
            : "w-full rounded-lg border border-[#d0d5dd] bg-white px-5 py-3 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-6 text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        }
      >
        Get started
      </button>
      <div className="h-px w-full bg-[#eaecf0]" />
      <FeatureList rows={features} />
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-full bg-[#f7f8fa]">
      <div className="border-b border-[#eaecf0] bg-white">
        <div className="mx-auto flex w-full max-w-[1160px] items-center justify-start px-6 py-2">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-md text-[#101828] outline-offset-2 hover:bg-[#f2f4f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#155eef]"
          >
            <span className="flex size-5 items-center justify-center">
              <ArrowLeftIcon className="shrink-0" />
            </span>
            <span className="font-['Inter:Semi_Bold',sans-serif] text-[18px] font-semibold leading-7">
              Select pricing
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1160px] px-6 py-6 pb-20">
        <div className="flex flex-col items-center gap-2 py-6">
          <div className="flex items-center gap-1.5 rounded-full bg-[#eef2fe] py-1.5 pr-3.5 pl-3">
            <span className="size-1.5 rounded-full bg-[#004eeb]" aria-hidden />
            <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold leading-normal text-[#004eeb]">
              Pricing
            </span>
          </div>
          <h1 className="text-center font-['Inter:Bold',sans-serif] text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-[#10172a]">
            Launch your branded app
          </h1>
          <p className="max-w-[728px] text-center font-['Inter:Regular',sans-serif] text-[24px] font-normal leading-8 text-[#596070]">
            All plans include your branded iOS and Android app published to both the App Store and Google Play.
          </p>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[1112px] grid-cols-3 gap-3 sm:gap-4">
          <PlanCard
            chip={
              <div className="flex size-9 items-center justify-center rounded-[10px] bg-[#f2f4f7]">
                <StarterPlanChipIcon />
              </div>
            }
            name="Starter"
            description="For agencies ready to put their brand in the App Store"
            price="$99"
            ctaVariant="outline"
            features={starterFeatures}
          />
          <PlanCard
            chip={
              <div className="flex size-9 items-center justify-center rounded-[10px] bg-[#d1e0ff]">
                <GrowthPlanChipIcon />
              </div>
            }
            name="Growth"
            description="For agencies that want full control over layout and navigation"
            price="$249"
            ctaVariant="primary"
            features={growthFeatures}
          />
          <PlanCard
            chip={
              <div className="flex size-9 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#fedf89] to-[#f9b700]">
                <ScalePlanChipIcon />
              </div>
            }
            name="Scale"
            nameClassName="bg-gradient-to-b from-[#fdb022] to-[#976914] bg-clip-text font-['Inter:Bold',sans-serif] text-[20px] font-bold leading-[30px] text-transparent"
            description="For agencies that need custom modules, AI tooling, and dedicated support"
            price="$349"
            ctaVariant="outline"
            features={scaleFeatures}
          />
        </div>

        <p className="mx-auto mt-16 max-w-[810px] text-center font-['Inter:Italic',sans-serif] text-[16px] font-normal italic leading-6 text-[#596070]">
          All plans billed monthly. Cancel anytime. App store developer fees ($99/yr Apple, $25 one-time Google) are not included.
        </p>

        <div className="mx-auto mt-10 flex w-full max-w-[1112px] flex-col gap-0 overflow-hidden rounded-2xl md:flex-row">
          <div className="flex flex-1 flex-col gap-2 bg-[#eaecf0] p-4 md:rounded-bl-2xl md:rounded-tl-2xl">
            <p className="font-['Inter:Bold',sans-serif] text-[15px] font-bold text-[#1d2939]">How long does it take to go live?</p>
            <p className="font-['Inter:Medium',sans-serif] text-[15px] font-medium text-[#667085]">
              Most apps go live within 2–3 weeks once all branding and configuration steps are complete. Our team handles
              the entire App Store and Google Play submission process for you.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-[#eaecf0] p-4">
            <p className="font-['Inter:Bold',sans-serif] text-[15px] font-bold text-[#1d2939]">Can I switch plans later?</p>
            <p className="font-['Inter:Medium',sans-serif] text-[15px] font-medium text-[#667085]">
              Absolutely. Upgrade or downgrade anytime — your branding, customizations, and App Store listing carry over
              seamlessly. No rebuild required.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-[#eaecf0] p-4 md:rounded-br-2xl md:rounded-tr-2xl">
            <p className="font-['Inter:Bold',sans-serif] text-[15px] font-bold text-[#1d2939]">Who handles app store submission?</p>
            <p className="font-['Inter:Medium',sans-serif] text-[15px] font-medium text-[#667085]">
              We handle everything. Our team submits your app, manages the Apple and Google review processes, and notifies
              you when your app goes live. No developer account wrangling on your end.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
