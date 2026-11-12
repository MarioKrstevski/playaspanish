import type { CSSProperties } from 'react'
import { MoonGlyph, type Phase } from './Moon'
import s from './d.module.css'

// The hand-off between two sections. The next section's ground rises as a
// pyramid against the sky of the one you are leaving, and the moon hangs
// beside it, one phase further along at every threshold and a little further
// across the sky: it rises on the left under the hero and sets on the right
// above the footer.

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

function Pyramid({ kind, detail }: { kind: PyramidKind; detail: boolean }) {
  if (kind === 'giza') {
    return (
      <>
        <path d="M-126,0L0,-160L126,0Z" />
        {/* the face turned away from the moon */}
        {detail && <path d="M0,-160L126,0H34Z" className={s.pyramidFace} />}
      </>
    )
  }
  if (kind === 'kukulkan') {
    return (
      <>
        <path d={KUKULKAN} />
        {/* El Castillo: the temple on the ninth terrace, the stair up the middle */}
        <path d="M-34,-117h68v-30h4v-5h-76v5h4z" />
        {detail && (
          <>
            <path d="M-20,0V-117H20V0Z" className={s.pyramidFace} />
            <path d="M-8,-117v-20h16v20z" className={s.pyramidDoor} />
          </>
        )}
      </>
    )
  }
  return (
    <>
      <path d={SPIRE} />
      {/* a steep temple with its roof comb */}
      <path d="M-28,-108h56v-26h-6l-8,-30h-28l-8,30h-6z" />
      {detail && (
        <>
          <path d="M-13,0V-108H13V0Z" className={s.pyramidFace} />
          <path d="M-7,-108v-16h14v16z" className={s.pyramidDoor} />
        </>
      )}
    </>
  )
}

const STARS: [number, number, number][] = [
  [96, 40, 1.4], [212, 92, 1], [338, 24, 1.2], [455, 118, 1], [585, 30, 1.3],
  [742, 96, 1], [868, 26, 1.4], [985, 74, 1], [1092, 38, 1.2], [1150, 120, 1]
]

export function Threshold({
  from,
  to,
  sky,
  kind,
  phase,
  moonX,
  moonY,
  apexX
}: {
  /** Ground colour of the section above */
  from: string
  /** Ground colour of the section below */
  to: string
  /** Whether the section above is a night or a day */
  sky: 'dark' | 'light'
  kind: PyramidKind
  phase: Phase
  moonX: number
  moonY: number
  apexX: number
}) {
  const night = sky === 'dark'
  return (
    <div
      aria-hidden
      className={s.threshold}
      style={{ '--from': from, '--to': to, background: from } as CSSProperties}
    >
      <svg viewBox="0 0 1200 200" className={s.thresholdSvg}>
        {night &&
          STARS.map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} className={s.thresholdStar} />)}
        <g transform={`translate(${moonX} ${moonY})`}>
          {night && <circle r={40} className={s.thresholdHalo} />}
          <MoonGlyph
            r={22}
            phase={phase}
            lit={night ? 'var(--moon)' : '#fff'}
            shade={
              night
                ? 'color-mix(in oklab, var(--moon) 14%, var(--from))'
                : 'color-mix(in oklab, var(--to) 20%, var(--from))'
            }
            ring={
              night
                ? 'color-mix(in oklab, var(--moon) 50%, var(--from))'
                : 'color-mix(in oklab, var(--to) 45%, var(--from))'
            }
          />
        </g>
        {/* two more of the same kind, further off */}
        <g className={s.pyramidFar}>
          <g transform={`translate(${apexX + (apexX > 600 ? -318 : 318)} 200) scale(0.34)`}>
            <Pyramid kind={kind} detail={false} />
          </g>
          <g transform={`translate(${apexX + (apexX > 600 ? 286 : -286)} 200) scale(0.52)`}>
            <Pyramid kind={kind} detail={false} />
          </g>
        </g>
        <g transform={`translate(${apexX} 200)`} className={s.pyramidNear}>
          <Pyramid kind={kind} detail />
        </g>
      </svg>
    </div>
  )
}
