// The moon, drawn with a true terminator (an elliptical arc), not a half-and-
// half split. Coordinates are whole numbers so server and client agree.
export type Phase =
  | 'new'
  | 'waxing-crescent'
  | 'first-quarter'
  | 'waxing-gibbous'
  | 'full'
  | 'waning-gibbous'
  | 'last-quarter'
  | 'waning-crescent'

function litPath(r: number, phase: Phase): string {
  const k = Math.round(r * 0.56)
  const limb = `M0,${-r}A${r},${r} 0 0 1 0,${r}`
  if (phase.endsWith('crescent')) return `${limb}A${k},${r} 0 0 0 0,${-r}Z`
  if (phase.endsWith('gibbous')) return `${limb}A${k},${r} 0 0 1 0,${-r}Z`
  return `${limb}Z`
}

/** An SVG group centred on 0,0. Place it with a transform on a parent <g>. */
export function MoonGlyph({
  r,
  phase,
  lit,
  shade,
  ring
}: {
  r: number
  phase: Phase
  lit: string
  shade: string
  ring: string
}) {
  const waning = phase.startsWith('waning') || phase === 'last-quarter'
  return (
    <g>
      <circle r={r} style={{ fill: shade, stroke: ring }} strokeWidth={1.25} />
      {phase === 'full' && <circle r={r} style={{ fill: lit }} />}
      {phase !== 'full' && phase !== 'new' && (
        <path d={litPath(r, phase)} transform={waning ? 'scale(-1,1)' : undefined} style={{ fill: lit }} />
      )}
    </g>
  )
}

/** A standalone moon. Colours default to the section's moonlight tokens. */
export function Moon({
  phase,
  className,
  lit = 'var(--moon)',
  shade = 'color-mix(in oklab, var(--moon) 13%, transparent)',
  ring = 'color-mix(in oklab, var(--moon) 45%, transparent)'
}: {
  phase: Phase
  className?: string
  lit?: string
  shade?: string
  ring?: string
}) {
  return (
    <svg viewBox="-50 -50 100 100" aria-hidden className={className}>
      <MoonGlyph r={47} phase={phase} lit={lit} shade={shade} ring={ring} />
    </svg>
  )
}
