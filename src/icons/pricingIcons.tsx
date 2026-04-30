/** Inline SVGs aligned with WLMA pricing Figma (node 367:10891) — arrow-left, checks, chips. */

export function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15.8333 10H4.16667M9.16667 5L4.16667 10L9.16667 15"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FeatureCheckIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M3.33334 8.00001L6.66668 11.3333L12.6667 4.66668"
        stroke="#155eef"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FeatureMinusIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3.33334 8H12.6667" stroke="#98a2b3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const SPARKLE_PATH =
  'M12.7374 5.33343L13.264 4.16676L14.4307 3.64009C14.6907 3.52009 14.6907 3.15343 14.4307 3.03343L13.264 2.50676L12.7374 1.33343C12.6174 1.07343 12.2507 1.07343 12.1307 1.33343L11.604 2.50009L10.4307 3.02676C10.1707 3.14676 10.1707 3.51343 10.4307 3.63343L11.5974 4.16009L12.124 5.33343C12.244 5.59343 12.6174 5.59343 12.7374 5.33343ZM7.43069 6.33343L6.37069 4.00009C6.13736 3.48009 5.39069 3.48009 5.15736 4.00009L4.09736 6.33343L1.76402 7.39343C1.24402 7.63343 1.24402 8.37343 1.76402 8.60676L4.09736 9.66676L5.15736 12.0001C5.39736 12.5201 6.13736 12.5201 6.37069 12.0001L7.43069 9.66676L9.76402 8.60676C10.284 8.36676 10.284 7.62676 9.76402 7.39343L7.43069 6.33343ZM12.124 10.6668L11.5974 11.8334L10.4307 12.3601C10.1707 12.4801 10.1707 12.8468 10.4307 12.9668L11.5974 13.4934L12.124 14.6668C12.244 14.9268 12.6107 14.9268 12.7307 14.6668L13.2574 13.5001L14.4307 12.9734C14.6907 12.8534 14.6907 12.4868 14.4307 12.3668L13.264 11.8401L12.7374 10.6668C12.6174 10.4068 12.244 10.4068 12.124 10.6668Z'

export function SparkleAiIcon({ fill = '#98A2B3' }: { fill?: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d={SPARKLE_PATH} fill={fill} />
    </svg>
  )
}

export function StarterPlanChipIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M5 14V6C5 5.44772 5.44772 5 6 5H14C14.5523 5 15 5.44772 15 6V14C15 14.5523 14.5523 15 14 15H6C5.44772 15 5 14.5523 5 14Z"
        stroke="#475467"
        strokeWidth="1.33"
        strokeLinejoin="round"
      />
      <path
        d="M6.66669 12.3333L9.00002 10L11.3334 12.3333M11.3334 8.33334L9.66669 10"
        stroke="#475467"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GrowthPlanChipIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M10 3.75L12.25 9.25H16.5L13 12.5L14.5 17.25L10 14.75L5.5 17.25L7 12.5L3.5 9.25H7.75L10 3.75Z"
        stroke="#155eef"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ScalePlanChipIcon() {
  return (
    <svg
      className="text-[#976914]"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 2.75L11.9028 7.59722L17.25 8.11111L13.375 11.4028L14.3056 16.6389L10 14.1111L5.69445 16.6389L6.625 11.4028L2.75 8.11111L8.09722 7.59722L10 2.75Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
    </svg>
  )
}
