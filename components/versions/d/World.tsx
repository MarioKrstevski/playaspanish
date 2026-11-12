import { cn } from '@/lib/utils'
import { whySpanish } from '@/lib/content'
import { Chat } from './Chat'
import { CAPITALS, GLOBE, GRATICULE, LAND } from './globe-data'
import s from './d.module.css'

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

// The Spanish-speaking world as it would look from the moon: the globe turned
// to the Atlantic, the land where Spanish is spoken picked out in points of
// light, and the twenty-one capitals as its brightest stars.
function Globe({ className }: { className?: string }) {
  const c = GLOBE.size / 2
  return (
    <svg viewBox={`0 0 ${GLOBE.size} ${GLOBE.size}`} aria-hidden className={className}>
      <defs>
        <radialGradient id="d-globe" cx="0.36" cy="0.3" r="0.8">
          <stop offset="0" style={{ stopColor: 'color-mix(in oklab, var(--blue) 42%, var(--blue-night))' }} />
          <stop offset="0.7" style={{ stopColor: 'color-mix(in oklab, var(--blue) 10%, var(--blue-night))' }} />
          <stop offset="1" style={{ stopColor: 'color-mix(in oklab, #000 30%, var(--blue-night))' }} />
        </radialGradient>
      </defs>
      <circle cx={c} cy={c} r={GLOBE.r} fill="url(#d-globe)" />
      <path d={GRATICULE} className={s.globeLines} />
      <path d={LAND} className={s.globeLand} />
      {CAPITALS.map((capital) => {
        const label = LABELS[capital.name]
        return (
          <g key={capital.name} transform={`translate(${capital.x} ${capital.y})`}>
            <circle r={7} className={s.capitalHalo} />
            <circle r={2.6} className={s.capital} />
            {label && (
              <text x={label.dx} y={label.dy} textAnchor={label.anchor} className={s.globeLabel}>
                {capital.name}
              </text>
            )}
          </g>
        )
      })}
      <circle
        cx={c}
        cy={c}
        r={GLOBE.r}
        fill="none"
        style={{ stroke: 'color-mix(in oklab, var(--blue-soft) 45%, transparent)' }}
      />
    </svg>
  )
}

export function World() {
  return (
    <section id="why-spanish" data-zone="blue" data-tone="dark" className={cn(s.zone, 'overflow-hidden')}>
      <div className={cn(s.wrap, 'grid items-center gap-x-10 gap-y-12 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-12')}>
        <div className="lg:col-span-5">
          <h2 className={s.h2}>{whySpanish.title}</h2>
          <p className={cn(s.lede, 'mt-6 max-w-[32ch]')}>{whySpanish.sub}</p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[color:var(--line)] pt-8">
            {whySpanish.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1.5 max-w-[20ch] text-[0.9375rem] leading-snug text-[color:var(--muted)]">
                  {stat.label}
                </dt>
                <dd className={cn(s.display, 'text-5xl font-extrabold leading-none text-[color:var(--accent)] md:text-6xl')}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-7">
          <Globe className="mx-auto block h-auto w-full max-w-[560px] lg:mx-0" />
          <Chat className="relative -mt-28 ml-auto w-[min(100%,280px)] sm:absolute sm:-bottom-8 sm:right-0 sm:mt-0 sm:w-[270px]" />
        </div>
      </div>
    </section>
  )
}
