// Muted corner decorations, one motif per section, drawn as inline SVG so
// there are no image assets to manage. All are desktop-only (hidden lg:block
// set at the call site), aria-hidden, and colored in the section's own tint
// so they sit in the background without competing with content.
//
// To tweak: adjust the fill/stroke hex here, or size/position via the
// className passed where each corner is used.

interface CornerProps {
  className?: string
}

// Hero: layered shoreline waves, bottom-left (the playa)
export function WavesCorner({ className }: CornerProps) {
  return (
    <svg aria-hidden viewBox="0 0 260 140" className={className} fill="none">
      <path d="M-20,60 Q45,20 110,60 T240,60" stroke="#c4b5fd" strokeWidth="3" />
      <path d="M-20,95 Q45,55 110,95 T240,95" stroke="#c4b5fd" strokeWidth="3" opacity="0.7" />
      <path d="M-20,130 Q45,90 110,130 T240,130" stroke="#c4b5fd" strokeWidth="3" opacity="0.4" />
    </svg>
  )
}

// The Course (dark indigo): a small constellation, bottom-right
export function ConstellationCorner({ className }: CornerProps) {
  const stars: Array<[number, number, number]> = [
    [20, 100, 2.5],
    [70, 60, 3.5],
    [130, 85, 2.5],
    [175, 30, 4],
    [225, 55, 2.5],
    [250, 110, 3]
  ]
  return (
    <svg aria-hidden viewBox="0 0 280 140" className={className}>
      <path
        d="M20,100 L70,60 L130,85 L175,30 L225,55 L250,110"
        stroke="#4338ca"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      {stars.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#6366f1" />
      ))}
    </svg>
  )
}

// Why Spanish: a line-art globe, bottom-left
export function GlobeCorner({ className }: CornerProps) {
  return (
    <svg aria-hidden viewBox="0 0 160 160" className={className} fill="none">
      <circle cx="80" cy="80" r="70" stroke="#bae6fd" strokeWidth="3" />
      <ellipse cx="80" cy="80" rx="32" ry="70" stroke="#bae6fd" strokeWidth="3" />
      <line x1="10" y1="80" x2="150" y2="80" stroke="#bae6fd" strokeWidth="3" />
      <path d="M22,45 Q80,70 138,45" stroke="#bae6fd" strokeWidth="3" />
      <path d="M22,115 Q80,90 138,115" stroke="#bae6fd" strokeWidth="3" />
    </svg>
  )
}

// Why Spanish: the language itself, bottom-right. Spanish in three
// characters: inverted question mark, enye, question mark.
export function EnyeCorner({ className }: CornerProps) {
  return (
    <div aria-hidden className={className}>
      <span className="font-bold leading-none select-none" style={{ color: '#bae6fd' }}>
        ¿ñ?
      </span>
    </div>
  )
}

// Teachers: agave leaves, bottom-left
export function AgaveCorner({ className }: CornerProps) {
  return (
    <svg aria-hidden viewBox="0 0 200 150" className={className}>
      <path d="M100,150 Q95,60 60,10 Q90,55 98,150 Z" fill="#a7f3d0" />
      <path d="M92,150 Q70,80 15,55 Q65,85 86,150 Z" fill="#a7f3d0" opacity="0.8" />
      <path d="M108,150 Q113,55 145,15 Q118,60 114,150 Z" fill="#a7f3d0" opacity="0.9" />
      <path d="M116,150 Q135,85 185,60 Q140,95 122,150 Z" fill="#a7f3d0" opacity="0.7" />
      <path d="M84,150 Q55,110 20,105 Q60,120 80,150 Z" fill="#a7f3d0" opacity="0.6" />
      <path d="M124,150 Q150,115 180,112 Q148,125 128,150 Z" fill="#a7f3d0" opacity="0.5" />
    </svg>
  )
}

// How it works (dark amber): a distant stepped pyramid, bottom-left
export function PyramidCorner({ className }: CornerProps) {
  return (
    <svg aria-hidden viewBox="0 0 260 120" className={className}>
      <path
        d="M0,120 L0,95 L35,95 L35,70 L70,70 L70,45 L105,45 L105,20 L155,20 L155,45 L190,45 L190,70 L225,70 L225,95 L260,95 L260,120 Z"
        fill="#78350f"
        opacity="0.55"
      />
    </svg>
  )
}

// How it works (dark amber): scattered stars, bottom-right
export function StarsCorner({ className }: CornerProps) {
  const stars: Array<[number, number, number]> = [
    [25, 90, 2],
    [70, 40, 3],
    [110, 105, 2],
    [150, 65, 2.5],
    [200, 25, 2],
    [235, 85, 3],
    [180, 120, 2]
  ]
  return (
    <svg aria-hidden viewBox="0 0 260 140" className={className}>
      {stars.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#b45309" opacity="0.8" />
      ))}
    </svg>
  )
}

// Pricing: a calm sun with triangular rays, bottom-right
export function SunCorner({ className }: CornerProps) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180
    // Rounded so server and client render identical attribute strings
    // (raw trig output differs in the last digits and breaks hydration)
    const r = (n: number) => Math.round(n * 100) / 100
    const x1 = r(90 + Math.cos(angle) * 58)
    const y1 = r(90 + Math.sin(angle) * 58)
    const x2 = r(90 + Math.cos(angle) * 80)
    const y2 = r(90 + Math.sin(angle) * 80)
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" />
  })
  return (
    <svg aria-hidden viewBox="0 0 180 180" className={className}>
      <circle cx="90" cy="90" r="42" fill="#fed7aa" />
      {rays}
    </svg>
  )
}

// Reviews: a large quiet quotation mark, bottom-left
export function QuoteCorner({ className }: CornerProps) {
  return (
    <div aria-hidden className={className}>
      <span className="font-serif font-bold leading-none select-none" style={{ color: '#fecdd3' }}>
        &ldquo;
      </span>
    </div>
  )
}
