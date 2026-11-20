import type { CSSProperties } from 'react'

// The hand-off between two sections, from version D: the next section's
// colour rises as a pyramid against the one you are leaving, with two smaller
// ones further off. Three kinds: Giza (smooth), Kukulkan (stepped, with the
// temple and stair) and a steep spire temple with its roof comb.

// A fourth kind, 'chakra', is version E's stepped pyramid: stone courses, a
// stair with its balustrades, the temple on top and seven triangles of light
// down the stair in the page's chakra order, crown to root.
export type PyramidKind = 'giza' | 'kukulkan' | 'spire' | 'chakra'

const CHAKRAS = ['#ec4899', '#a855f7', '#0ea5e9', '#10b981', '#eab308', '#f97316', '#ef4444']
const JOINT = 'color-mix(in oklab, var(--to) 70%, #fff)'

// E's art on its own 480 x 160 field, base on y=160, centred on x=240
function ChakraPyramid() {
  return (
    <g transform="scale(1.08) translate(-240 -160)">
      <path d="M24 160V132H60V104H96V76H132V48H348V76H384V104H420V132H456V160Z" />
      <path d="M272 48H348V76H384V104H420V132H456V160H272Z" style={{ fill: FACE }} />
      <path
        d="M132 55H208M272 55H348M96 83H208M272 83H384M60 111H208M272 111H420M24 139H208M272 139H456M214 55H266M214 62H266M214 69H266M214 76H266M214 83H266M214 90H266M214 97H266M214 104H266M214 111H266M214 118H266M214 125H266M214 132H266M214 139H266M214 146H266M214 153H266"
        style={{ fill: 'none', stroke: JOINT }}
        strokeWidth={1}
      />
      <path d="M208 48H214V160H208ZM266 48H272V160H266Z" style={{ fill: FACE }} />
      <path d="M190 10H290V17H282V48H198V17H190Z" style={{ fill: '#e3b55a' }} />
      <path d="M231 26H249V48H231Z" style={{ fill: '#7c6236' }} />
      {CHAKRAS.map((c, i) => (
        <path key={c} d={`M208 ${48 + i * 16}V${64 + i * 16}H193Z`} style={{ fill: c }} />
      ))}
    </g>
  )
}

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

const FACE = 'var(--face, color-mix(in oklab, var(--to) 84%, var(--from)))'
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
  if (kind === 'chakra') {
    return detail ? <ChakraPyramid /> : <path d={KUKULKAN} />
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
  moon,
  edge,
  stone
}: {
  /** Solid colours for a light-to-light hand-off, where the next section's
   * own pale colour would barely show: the near pyramid, its shaded face, the
   * far pyramids, and the moon drawn in the same two tones */
  stone?: { near: string; shade: string; far: string }
  /** D's moon (centre, in the 1200 x 180 frame). Moonlight with a halo on a
   * night sky (with `stars`), otherwise the next section's colour and `edge`. */
  moon?: { x: number; y: number; phase: 'full' | 'half' }
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
      style={{ '--from': from, '--to': to, '--face': stone?.shade, background: from } as CSSProperties}
    >
      <svg
        viewBox={`0 0 1200 ${H}`}
        className="relative left-1/2 block h-auto w-[max(100%,700px)] max-w-[1200px] -translate-x-1/2"
      >
        {stars &&
          STARS.map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} fill="#fff3d1" opacity={0.55} />)}
        {moon && stone && (
          <g transform={`translate(${moon.x} ${moon.y})`}>
            <circle r={22} fill={stone.far} />
            <path
              d={moon.phase === 'full' ? 'M0,-22A22,22 0 0 0 0,22A22,22 0 0 0 0,-22Z' : 'M0,-22A22,22 0 0 0 0,22Z'}
              fill={stone.near}
            />
          </g>
        )}
        {moon && !stone && (
          <g transform={`translate(${moon.x} ${moon.y})`}>
            {stars && <circle r={40} fill="#fff3d1" opacity={0.14} />}
            <circle
              r={22}
              style={{
                fill: stars
                  ? 'color-mix(in oklab, #fff3d1 14%, var(--from))'
                  : 'color-mix(in oklab, var(--to) 30%, var(--from))',
                stroke: stars ? 'color-mix(in oklab, #fff3d1 50%, var(--from))' : edge
              }}
              strokeWidth={1.25}
            />
            <path
              d={moon.phase === 'full' ? 'M0,-22A22,22 0 0 0 0,22A22,22 0 0 0 0,-22Z' : 'M0,-22A22,22 0 0 0 0,22Z'}
              style={{ fill: stars ? '#fff3d1' : 'var(--to)', stroke: stars ? undefined : edge }}
              strokeWidth={1.25}
            />
          </g>
        )}
        <g style={{ fill: stone?.far ?? 'color-mix(in oklab, var(--to) 32%, var(--from))' }}>
          <g transform={`translate(${farA} ${H}) scale(0.34)`}>
            <Pyramid kind={kind} detail={false} />
          </g>
          <g transform={`translate(${farB} ${H}) scale(0.52)`}>
            <Pyramid kind={kind} detail={false} />
          </g>
        </g>
        <g
          transform={`translate(${apexX} ${H})`}
          style={{ fill: stone?.near ?? 'var(--to)' }}
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
