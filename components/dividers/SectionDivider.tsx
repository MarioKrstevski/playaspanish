// Section dividers shaped as pyramid silhouettes — three variants:
// 'egyptian' (smooth triangle), 'ziggurat' (stepped), 'shikhara' (layered spire).
// `from` is the color of the section above, `to` the section below.
// `accent` strokes the ridge line — needed when `from` and `to` are both
// light pastels and the silhouette alone doesn't read.

interface SectionDividerProps {
  variant: 'egyptian' | 'ziggurat' | 'shikhara'
  from: string
  to: string
  accent?: string
}

const paths: Record<SectionDividerProps['variant'], string> = {
  // One wide smooth triangle rising into the section above
  egyptian: 'M0,120 L720,0 L1440,120',
  // Symmetric stairs climbing to a flat top: four tall steps up, four down
  ziggurat:
    'M0,120 L180,120 L180,90 L400,90 L400,60 L560,60 L560,30 L660,30 L660,0 L780,0 L780,30 L880,30 L880,60 L1040,60 L1040,90 L1260,90 L1260,120 L1440,120',
  // Layered spire: a tall center peak flanked by two lower peaks
  shikhara: 'M0,120 L340,120 L500,45 L590,75 L720,0 L850,75 L940,45 L1100,120 L1440,120'
}

export function SectionDivider({ variant, from, to, accent }: SectionDividerProps) {
  return (
    <div aria-hidden style={{ backgroundColor: from }} className="leading-[0]">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-14 md:h-24"
      >
        <path d={`${paths[variant]} Z`} fill={to} />
        {accent && (
          <path
            d={paths[variant]}
            fill="none"
            stroke={accent}
            strokeWidth={2.5}
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  )
}
