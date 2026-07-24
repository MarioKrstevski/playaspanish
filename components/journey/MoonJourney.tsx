'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'

const MOON_LIGHT = '#fde68a'
const MOON_DARK = '#451a03'
const MOON_RIM = '#92400e'

type Phase = 'new' | 'waxing' | 'full' | 'waning'

const phaseBackground: Record<Phase, string> = {
  new: MOON_DARK,
  waxing: `linear-gradient(to left, ${MOON_LIGHT} 50%, ${MOON_DARK} 50%)`,
  full: MOON_LIGHT,
  waning: `linear-gradient(to right, ${MOON_LIGHT} 50%, ${MOON_DARK} 50%)`
}

function Moon({ phase }: { phase: Phase }) {
  return (
    <div
      aria-hidden
      className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto"
      style={{
        background: phaseBackground[phase],
        border: `1px solid ${MOON_RIM}`,
        boxShadow: phase === 'full' ? `0 0 24px 4px rgba(253, 230, 138, 0.35)` : 'none'
      }}
    />
  )
}

const steps: Array<{ phase: Phase; title: string; description: string }> = [
  {
    phase: 'new',
    title: 'Say hola',
    description:
      'Everything starts with an email. Tell us you want to learn Spanish — that is all it takes.'
  },
  {
    phase: 'waxing',
    title: 'Meet Angelica',
    description:
      'A first call to understand what you need and where you want to go. She shapes your path and pairs you with your teacher.'
  },
  {
    phase: 'full',
    title: 'Find your rhythm',
    description:
      'Lessons begin. How much, how often, and for how long is entirely up to you — the course never expires.'
  },
  {
    phase: 'waning',
    title: 'Carry it with you',
    description:
      'Between lessons the language settles in. Our upcoming Anki deck keeps you learning at home, straight from your teacher.'
  }
]

export function MoonJourney() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation()

  return (
    <section id="how-it-works" className="relative py-24 pb-44 bg-amber-950 text-amber-50 overflow-hidden">
      {/* Kukulkan on the horizon: El Castillo's terraces and temple, in the
          distance under the moons. Never labeled, just felt. */}
      <svg
        aria-hidden
        viewBox="0 0 1440 150"
        preserveAspectRatio="xMidYMax meet"
        className="absolute bottom-0 inset-x-0 w-full h-28 md:h-36 pointer-events-none"
      >
        <path
          d="M420,150 L420,116 L470,116 L470,92 L520,92 L520,68 L570,68 L570,44 L665,44 L665,8 L775,8 L775,44 L870,44 L870,68 L920,68 L920,92 L970,92 L970,116 L1020,116 L1020,150 Z"
          fill="#78350f"
          opacity="0.45"
        />
        {/* Central staircase, one shade deeper */}
        <path d="M690,150 L690,44 L750,44 L750,150 Z" fill="#5c2a08" opacity="0.5" />
      </svg>
      <div className="container mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll text-center mb-16', titleVisible && 'visible')}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Four phases, one cycle — and like the moon, it keeps going for as long as you do.
          </p>
        </div>

        <div ref={stepsRef} className={cn('animate-on-scroll relative max-w-5xl mx-auto', stepsVisible && 'visible')}>
          {/* Connecting arc line behind the moons */}
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[12%] right-[12%] border-t border-dashed border-amber-700"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <Moon phase={step.phase} />
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                  {step.title}
                </h3>
                <p className="text-amber-200 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
                <span className="sr-only">Step {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
