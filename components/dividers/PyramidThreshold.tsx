import type { CSSProperties } from 'react'

// The hand-off between two sections, from version D: the next section's
// colour rises as a pyramid against the one you are leaving, with two smaller
// ones further off. Three kinds: Giza (smooth), Kukulkan (stepped, with the
// temple and stair) and a steep spire temple with its roof comb.

export type PyramidKind = 'giza' | 'kukulkan' | 'spire'

// A symmetric flight of terraces, base on y=0, centred on x=0.
function terraces(half: number, run: number, rise: number, steps: number) {
  let d = `M${-half},0`
  for (let i = 0; i < steps; i++) {
    d += `V${-(i + 1) * rise}`
    d += i < steps - 1 ? `H${-half + (i + 1) * run}` : `H${half - i * run}`
  }
  for (let i = steps - 1; i > 0; i--) d += `V${-i * rise}H${half - (i - 1) * run}`
  return `${d}V0Z`
}

const KUKULKAN = terraces(198, 16, 13, 9)
const SPIRE = terraces(112, 14, 18, 6)

const FACE = 'color-mix(in oklab, var(--to) 84%, var(--from))'
const DOOR = 'color-mix(in oklab, var(--to) 35%, var(--from))'

function Pyramid({ kind, detail }: { kind: PyramidKind; detail: boolean }) {
  if (kind === 'giza') {
    return (
      <>
        <path d="M-126,0L0,-160L126,0Z" />
        {detail && <path d="M0,-160L126,0H34Z" style={{ fill: FACE }} />}
      </>
    )
  }
  if (kind === 'kukulkan') {
    return (
      <>
        <path d={KUKULKAN} />
        <path d="M-34,-117h68v-30h4v-5h-76v5h4z" />
        {detail && (
          <>
            <path d="M-20,0V-117H20V0Z" style={{ fill: FACE }} />
            <path d="M-8,-117v-20h16v20z" style={{ fill: DOOR }} />
          </>
        )}
      </>
    )
  }
  return (
    <>
      <path d={SPIRE} />
      <path d="M-28,-108h56v-26h-6l-8,-30h-28l-8,30h-6z" />
      {detail && (
        <>
          <path d="M-13,0V-108H13V0Z" style={{ fill: FACE }} />
          <path d="M-7,-108v-16h14v16z" style={{ fill: DOOR }} />
        </>
      )}
    </>
  )
}

const STARS: [number, number, number][] = [
  [96, 30, 1.4], [212, 82, 1], [338, 18, 1.2], [455, 104, 1], [585, 24, 1.3],
  [742, 86, 1], [868, 20, 1.4], [985, 64, 1], [1092, 30, 1.2], [1150, 108, 1]
]

const H = 180

export function PyramidThreshold({
  from,
  to,
  kind,
  apexX = 700,
  stars = false,
  edge
}: {
  /** Colour of the section above (may be 'transparent') */
  from: string
  /** Colour of the section below */
  to: string
  kind: PyramidKind
  /** Where the near pyramid stands, in a 1200-wide frame */
  apexX?: number
  /** Scatter a few stars when the section above is a dark one */
  stars?: boolean
  /** Outline for the near pyramid, for light-to-light hand-offs where the
   * silhouette alone would barely show */
  edge?: string
}) {
  const farA = apexX + (apexX > 600 ? -318 : 318)
  const farB = apexX + (apexX > 600 ? 286 : -286)
  return (
    // -mb-px hides the antialiased seam against the next section
    <div
      aria-hidden
      className="overflow-hidden leading-[0] -mb-px"
      style={{ '--from': from, '--to': to, background: from } as CSSProperties}
    >
      <svg
        viewBox={`0 0 1200 ${H}`}
        className="relative left-1/2 block h-auto w-[max(100%,700px)] max-w-[1200px] -translate-x-1/2"
      >
        {stars &&
          STARS.map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} fill="#fff3d1" opacity={0.55} />)}
        <g style={{ fill: 'color-mix(in oklab, var(--to) 32%, var(--from))' }}>
          <g transform={`translate(${farA} ${H}) scale(0.34)`}>
            <Pyramid kind={kind} detail={false} />
          </g>
          <g transform={`translate(${farB} ${H}) scale(0.52)`}>
            <Pyramid kind={kind} detail={false} />
          </g>
        </g>
        <g
          transform={`translate(${apexX} ${H})`}
          style={{ fill: 'var(--to)' }}
          stroke={edge}
          strokeWidth={edge ? 1.5 : undefined}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        >
          <Pyramid kind={kind} detail />
        </g>
      </svg>
    </div>
  )
}
