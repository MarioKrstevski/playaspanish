// Section dividers shaped as pyramid silhouettes — three variants:
// 'egyptian' (smooth triangle), 'ziggurat' (stepped), 'shikhara' (layered spire).
// `from` is the color of the section above, `to` the section below.
// The pyramid rises from a centered base (max-width capped) rather than
// spanning the full screen, so it reads as a structure, not a texture.
// `accent` strokes the ridge line — needed when `from` and `to` are both
// light pastels and the silhouette alone doesn't read.

interface SectionDividerProps {
  variant: 'egyptian' | 'ziggurat' | 'shikhara'
  from: string
  to: string
  accent?: string
}

const paths: Record<SectionDividerProps['variant'], string> = {
  // One smooth triangle rising from a centered base
  egyptian: 'M60,120 L450,0 L840,120',
  // Symmetric stairs climbing to a flat top: four tall steps up, four down
  ziggurat:
    'M60,120 L60,90 L180,90 L180,60 L300,60 L300,30 L390,30 L390,0 L510,0 L510,30 L600,30 L600,60 L720,60 L720,90 L840,90 L840,120',
  // Layered spire: a tall center peak flanked by two lower shoulders
  shikhara: 'M60,120 L250,45 L340,75 L450,0 L560,75 L650,45 L840,120'
}

export function SectionDivider({ variant, from, to, accent }: SectionDividerProps) {
  return (
    // -mb-px pulls the next section 1px up over the SVG's bottom edge, hiding
    // the antialiased hairline that otherwise shows as a thin seam line
    <div aria-hidden style={{ backgroundColor: from }} className="leading-[0] -mb-px">
      <div className="mx-auto max-w-4xl px-4">
        <svg
          viewBox="0 0 900 120"
          preserveAspectRatio="none"
          className="block w-full h-14 md:h-24"
        >
          <path d={`${paths[variant]} Z`} fill={to} />
          {accent && (
            <path
              d={paths[variant]}
              fill="none"
              stroke={accent}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
    </div>
  )
}
