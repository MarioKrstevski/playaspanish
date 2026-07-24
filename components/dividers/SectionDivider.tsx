// Section dividers shaped as pyramid silhouettes — three variants:
// 'egyptian' (smooth triangle), 'ziggurat' (stepped), 'shikhara' (layered spire).
// `from` is the color of the section above, `to` the section below.

interface SectionDividerProps {
  variant: 'egyptian' | 'ziggurat' | 'shikhara'
  from: string
  to: string
}

const paths: Record<SectionDividerProps['variant'], string> = {
  // One wide smooth triangle rising into the section above
  egyptian: 'M0,64 L720,0 L1440,64 Z',
  // Symmetric steps climbing to a flat top
  ziggurat:
    'M0,64 L240,64 L240,48 L480,48 L480,32 L600,32 L600,16 L840,16 L840,32 L960,32 L960,48 L1200,48 L1200,64 L1440,64 Z',
  // Layered spire: a tall center peak flanked by two lower peaks
  shikhara:
    'M0,64 L360,64 L520,24 L600,40 L720,0 L840,40 L920,24 L1080,64 L1440,64 Z'
}

export function SectionDivider({ variant, from, to }: SectionDividerProps) {
  return (
    <div aria-hidden style={{ backgroundColor: from }} className="leading-[0]">
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="block w-full h-10 md:h-16"
      >
        <path d={paths[variant]} fill={to} />
      </svg>
    </div>
  )
}
