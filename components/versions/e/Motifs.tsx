import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { PIGMENTS } from './pigments'
import s from './e.module.css'

export type Phase = 'new' | 'waxing' | 'full' | 'waning'

/** One moon, four phases, with a true curved terminator. Colours come from --moon-* on a parent. */
export function Moon({ phase, className }: { phase: Phase; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn(s.moon, className)} aria-hidden focusable="false">
      <circle cx="50" cy="50" r="46" className={s.moonDark} />
      {phase === 'full' && <circle cx="50" cy="50" r="46" className={s.moonLit} />}
      {phase === 'waxing' && (
        <path d="M50 4A46 46 0 0 1 50 96A12 46 0 0 1 50 4Z" className={s.moonLit} />
      )}
      {phase === 'waning' && (
        <path d="M50 4A46 46 0 0 0 50 96A12 46 0 0 0 50 4Z" className={s.moonLit} />
      )}
      <circle cx="50" cy="50" r="46" className={s.moonRim} />
    </svg>
  )
}

/**
 * Where you are in the descent: seven tiles set in the wall, the ones already
 * passed glazed in their pigment, this section's tile the large one.
 */
export function TileStrip({ at }: { at: number }) {
  return (
    <div className={s.strip} role="img" aria-label={`Part ${at} of ${PIGMENTS.length}`}>
      {PIGMENTS.map((pigment, i) => (
        <span
          key={pigment.key}
          className={cn(
            s.stripTile,
            i + 1 < at && s.stripTileDone,
            i + 1 === at && s.stripTileOn
          )}
          style={i < at ? ({ '--tile': `var(--${pigment.key})` } as CSSProperties) : undefined}
        />
      ))}
    </div>
  )
}

/*
 * Idioma and cultura as one tile: a six by six mosaic split along a stair, the
 * Mesoamerican stepped fret doing what a yin-yang does. Each half is the other
 * turned around, and each carries one tile of the other.
 */
export function DualityTile({ className }: { className?: string }) {
  const cells: { r: number; c: number; dark: boolean }[] = []
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      let dark = c < r || (c === r && r <= 2)
      if (r === 4 && c === 1) dark = false
      if (r === 1 && c === 4) dark = true
      cells.push({ r, c, dark })
    }
  }
  return (
    <svg viewBox="0 0 240 240" className={cn(s.dualityArt, className)} aria-hidden focusable="false">
      {cells.map(({ r, c, dark }) => (
        <rect
          key={`${r}-${c}`}
          x={c * 40 + 1.5}
          y={r * 40 + 1.5}
          width="37"
          height="37"
          rx="2"
          className={dark ? s.dualityDark : s.dualityLight}
        />
      ))}
    </svg>
  )
}

/** Half an agave, seen as structure: two rows of blades fanning from one point. */
export function AgaveFan({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 212" className={cn(s.agave, className)} aria-hidden focusable="false">
      <path
        className={s.agaveBack}
        d="M198.8 211.6Q117.9 217.5 11 180.1Q123.4 165.8 201.2 188.4ZM194.2 210.1Q117.9 182.6 35.5 105Q143.9 137.6 205.9 189.9ZM190.5 206.9Q132.1 150.7 88.3 46.3Q174.1 120.2 209.5 193.1ZM188.6 202.4Q158 127.3 160.5 14.2Q208.8 116.5 211.4 197.6ZM188.6 197.6Q191.2 116.5 239.5 14.2Q242 127.3 211.4 202.4ZM190.5 193.1Q225.9 120.2 311.7 46.3Q267.9 150.7 209.5 206.9ZM194.2 189.9Q256.1 137.6 364.5 105Q282.1 182.6 205.9 210.1ZM198.8 188.4Q276.6 165.8 389 180.1Q282.1 217.5 201.2 211.6Z"
      />
      <path
        className={s.agaveFront}
        d="M196.9 209.4Q142.1 204.3 78.3 160.4Q155.7 162.5 203.1 190.6ZM193.4 207.4Q145.3 180.4 104.9 114.4Q174.8 147.7 206.6 192.6ZM191 204Q158 159.8 147.9 83.1Q198.2 141.9 209 196ZM190.1 200Q178 146.2 200 72Q222 146.2 209.9 200ZM191 196Q201.8 141.9 252.1 83.1Q242 159.8 209 204ZM193.4 192.6Q225.2 147.7 295.1 114.4Q254.7 180.4 206.6 207.4ZM196.9 190.6Q244.3 162.5 321.7 160.4Q257.9 204.3 203.1 209.4Z"
      />
    </svg>
  )
}

/*
 * The Spanish-speaking world as a tiled wall: the 21 places where Spanish is
 * official, each a glazed tile at its own longitude and latitude (5 units per
 * degree, from 118°W / 45°N), and one thread that runs through all of them.
 */
const PLACES: { name: string; x: number; y: number; label?: [number, number, 'start' | 'middle' | 'end'] }[] = [
  { name: 'Guinea Ecuatorial', x: 640, y: 217.5, label: [652, 243, 'end'] },
  { name: 'España', x: 570, y: 25, label: [584, 30, 'start'] },
  { name: 'Puerto Rico', x: 257.5, y: 134, label: [271, 132, 'start'] },
  { name: 'República Dominicana', x: 240, y: 130 },
  { name: 'Cuba', x: 195, y: 115, label: [195, 100, 'middle'] },
  { name: 'México', x: 80, y: 110, label: [80, 94, 'middle'] },
  { name: 'Guatemala', x: 138.5, y: 147.5, label: [126, 150, 'end'] },
  { name: 'El Salvador', x: 145.5, y: 156.5 },
  { name: 'Honduras', x: 157.5, y: 151 },
  { name: 'Nicaragua', x: 165, y: 160.5 },
  { name: 'Costa Rica', x: 170, y: 175, label: [158, 181, 'end'] },
  { name: 'Panamá', x: 190, y: 182.5 },
  { name: 'Venezuela', x: 260, y: 187.5, label: [273, 189, 'start'] },
  { name: 'Colombia', x: 220, y: 205, label: [233, 213, 'start'] },
  { name: 'Ecuador', x: 199, y: 232.5, label: [187, 237, 'end'] },
  { name: 'Perú', x: 215, y: 275, label: [203, 280, 'end'] },
  { name: 'Bolivia', x: 265, y: 310, label: [278, 311, 'start'] },
  { name: 'Paraguay', x: 300, y: 340, label: [313, 341, 'start'] },
  { name: 'Uruguay', x: 310, y: 390, label: [323, 392, 'start'] },
  { name: 'Argentina', x: 270, y: 400, label: [270, 424, 'middle'] },
  { name: 'Chile', x: 235, y: 390, label: [222, 394, 'end'] }
]

export function WorldThread({ className }: { className?: string }) {
  const meridians = Array.from({ length: 13 }, (_, i) => 40 + i * 50)
  const parallels = Array.from({ length: 8 }, (_, i) => 25 + i * 50)
  return (
    <svg viewBox="0 0 700 440" className={cn(s.worldArt, className)} aria-hidden focusable="false">
      <path
        className={s.worldGrid}
        d={
          meridians.map((x) => `M${x} 0V440`).join('') +
          parallels.map((y) => `M0 ${y}H700`).join('')
        }
      />
      {/* the equator */}
      <path className={s.worldEquator} d="M0 225H700" />
      <polyline className={s.worldThread} points={PLACES.map((p) => `${p.x},${p.y}`).join(' ')} />
      {PLACES.map((place) => (
        <rect
          key={place.name}
          className={s.worldTile}
          x={place.x - 4.5}
          y={place.y - 4.5}
          width="9"
          height="9"
          rx="1"
          transform={`rotate(45 ${place.x} ${place.y})`}
        />
      ))}
      <g className={s.worldLabels} lang="es">
        {PLACES.filter((place) => place.label).map((place) => (
          <text key={place.name} x={place.label![0]} y={place.label![1]} textAnchor={place.label![2]}>
            {place.name}
          </text>
        ))}
      </g>
    </svg>
  )
}
