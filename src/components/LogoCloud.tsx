const logos: { icon: string; name: string; nodeId: string; nameNode: string }[] = [
  { icon: '✦', name: 'Evergreen Studios', nodeId: '229:11298', nameNode: '229:11300' },
  { icon: '⚓', name: 'North Harbor', nodeId: '229:11301', nameNode: '229:11303' },
  { icon: '◆', name: 'Lumen & Co.', nodeId: '229:11304', nameNode: '229:11306' },
  { icon: '◉', name: 'Kindling Group', nodeId: '229:11307', nameNode: '229:11309' },
  { icon: '◎', name: 'Wayfinder', nodeId: '229:11310', nameNode: '229:11312' },
]

function LogoItems({ setId }: { setId: 'a' | 'b' }) {
  return (
    <>
      {logos.map(({ icon, name, nodeId, nameNode }) => (
        <div
          key={`${nodeId}-${setId}`}
          className="relative flex h-[100px] shrink-0 content-stretch items-center justify-center gap-[8px] overflow-clip font-bold leading-[normal] not-italic"
          data-node-id={nodeId}
        >
          <p className="relative shrink-0 font-['Inter:Bold','Noto_Sans:Bold',sans-serif] text-[24px] text-[rgba(89,96,112,0.6)]">{icon}</p>
          <p
            className="relative shrink-0 font-['Inter:Bold',sans-serif] text-[22px] text-[rgba(89,96,112,0.7)]"
            data-node-id={nameNode}
          >
            {name}
          </p>
        </div>
      ))}
    </>
  )
}

export default function LogoCloud() {
  return (
    <div className="relative size-full" data-node-id="229:11294" data-name="Logo Cloud">
      <div
        className="absolute left-1/2 top-0 h-px w-[1112px] -translate-x-1/2 bg-[rgba(0,0,0,0.08)]"
        data-node-id="229:11295"
        data-name="Rectangle"
      />
      <p
        className="absolute left-1/2 top-[32px] h-[16px] w-[1112px] -translate-x-1/2 text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] font-semibold leading-[normal] tracking-[0.96px] not-italic text-[#596070]"
        data-node-id="229:11296"
      >
        AGENCIES SHIPPING THEIR OWN APP
      </p>
      <div
        className="absolute left-1/2 top-[80px] h-[79px] w-[1112px] -translate-x-1/2 overflow-hidden"
        data-node-id="229:11297"
        data-name="Logos"
      >
        <div className="logo-marquee-track flex w-max items-center gap-[60px] whitespace-nowrap pr-[60px]">
          <LogoItems setId="a" />
          <LogoItems setId="b" />
        </div>
      </div>
      <div
        className="absolute left-1/2 top-[159px] h-px w-[1112px] -translate-x-1/2 bg-[rgba(0,0,0,0.08)]"
        data-node-id="229:11313"
        data-name="Rectangle"
      />
    </div>
  )
}
