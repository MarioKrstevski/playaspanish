import { CAPITALS, GLOBE, GRATICULE, LAND } from '@/components/globe/globe-data'
import { cn } from '@/lib/utils'
import s from './globe.module.css'

// Where each country label sits relative to its capital.
const LABELS: Record<string, { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' }> = {
  México: { dx: 2, dy: -13, anchor: 'middle' },
  Cuba: { dx: 9, dy: -8, anchor: 'start' },
  Colombia: { dx: 11, dy: 5, anchor: 'start' },
  Perú: { dx: -11, dy: 6, anchor: 'end' },
  Chile: { dx: -11, dy: 8, anchor: 'end' },
  Argentina: { dx: 10, dy: 20, anchor: 'start' },
  España: { dx: 0, dy: -14, anchor: 'middle' },
  'Guinea Ecuatorial': { dx: -10, dy: 22, anchor: 'end' }
}

// The Spanish-speaking world: the globe turned to the Atlantic, the land where
// Spanish is spoken picked out in points of light, the 21 capitals brightest.
export function Globe({ className }: { className?: string }) {
  const c = GLOBE.size / 2
  return (
    <svg viewBox={`0 0 ${GLOBE.size} ${GLOBE.size}`} aria-hidden className={cn(s.globe, className)}>
      <defs>
        <radialGradient id="why-globe" cx="0.36" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#1f5f8f" />
          <stop offset="0.7" stopColor="#0c3156" />
          <stop offset="1" stopColor="#071b32" />
        </radialGradient>
      </defs>
      <circle cx={c} cy={c} r={GLOBE.r} fill="url(#why-globe)" />
      <path d={GRATICULE} className={s.lines} />
      <path d={LAND} className={s.land} />
      {CAPITALS.map((capital) => {
        const label = LABELS[capital.name]
        return (
          <g key={capital.name} transform={`translate(${capital.x} ${capital.y})`}>
            <circle r={7} className={s.capitalHalo} />
            <circle r={2.6} className={s.capital} />
            {label && (
              <text x={label.dx} y={label.dy} textAnchor={label.anchor} className={s.label}>
                {capital.name}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
