import { cn } from '@/lib/utils'
import { howItWorks } from '@/lib/content'
import { Moon, type Phase } from './Moon'
import s from './d.module.css'

// The four principal phases, one per step.
const PHASES: Phase[] = ['new', 'first-quarter', 'full', 'last-quarter']

// On wide screens the steps sit around one orbit, clockwise from the top left;
// the points are the ring's four diagonals (radius 180 in a 420 box).
const SPOTS = [
  { left: 83, top: 83, cell: 'lg:col-start-1 lg:row-start-1 lg:justify-self-end lg:pt-[58px] lg:text-right' },
  { left: 337, top: 83, cell: 'lg:col-start-3 lg:row-start-1 lg:pt-[58px]' },
  { left: 337, top: 337, cell: 'lg:col-start-3 lg:row-start-2 lg:pt-[104px]' },
  { left: 83, top: 337, cell: 'lg:col-start-1 lg:row-start-2 lg:justify-self-end lg:pt-[104px] lg:text-right' }
]

const GOLD_MOON = {
  lit: 'var(--gold-soft)',
  shade: 'color-mix(in oklab, var(--gold) 12%, var(--gold-night))',
  ring: 'color-mix(in oklab, var(--gold) 60%, var(--gold-night))'
}

// Gold night. "Four phases, one cycle": the steps are the moon's four phases
// set around a single orbit, so step four leads back to step one.
export function Cycle() {
  return (
    <section id="how-it-works" data-zone="gold" data-tone="dark" className={s.zone}>
      <div className={cn(s.wrap, 'relative pb-20 pt-12 md:pb-28 md:pt-16')}>
        <div className="lg:absolute lg:left-1/2 lg:top-16 lg:flex lg:h-[420px] lg:w-[420px] lg:-translate-x-1/2 lg:items-center lg:justify-center lg:text-center">
          <span aria-hidden className={cn(s.cycleRing, 'm-[30px] hidden lg:block')} />
          <span aria-hidden className={cn(s.cycleTurn, 'm-[30px] hidden lg:block')} />
          {SPOTS.map((spot, index) => (
            <span
              key={PHASES[index]}
              aria-hidden
              className="absolute hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--bg)] lg:block"
              style={{ left: spot.left, top: spot.top }}
            >
              <Moon phase={PHASES[index]} {...GOLD_MOON} className={cn('h-full w-full', index === 2 && s.moonGlow)} />
            </span>
          ))}
          <div className="relative lg:max-w-[236px]">
            <h2 className={cn(s.h2, s.h2Ring)}>{howItWorks.title}</h2>
            <p className={cn(s.lede, 'mt-5 max-w-[30ch] lg:mt-3 lg:text-[0.9375rem] lg:leading-snug')}>
              {howItWorks.sub}
            </p>
          </div>
        </div>

        <ol className="relative mt-12 grid gap-y-9 lg:mt-0 lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_420px_minmax(0,1fr)] lg:grid-rows-[210px_auto] lg:gap-y-0">
          {/* phones: the moons hang on one dashed line */}
          <span
            aria-hidden
            className="absolute bottom-6 left-8 top-6 border-l-[1.5px] border-dashed border-[color:color-mix(in_oklab,var(--gold)_55%,transparent)] lg:hidden"
          />
          {howItWorks.steps.map((step, index) => (
            <li
              key={step.title}
              className={cn('relative flex items-start gap-5 lg:block lg:max-w-[300px]', SPOTS[index].cell)}
            >
              <span aria-hidden className="block h-16 w-16 shrink-0 rounded-full bg-[var(--bg)] lg:hidden">
                <Moon phase={PHASES[index]} {...GOLD_MOON} className={cn('h-full w-full', index === 2 && s.moonGlow)} />
              </span>
              <div>
                <h3 className={cn(s.display, 'text-2xl font-bold leading-tight md:text-[1.75rem]')}>
                  <span className="mr-2.5 text-[color:var(--accent)]">{index + 1}</span>
                  {step.title}
                </h3>
                <p className="mt-2 text-[color:var(--muted)]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
