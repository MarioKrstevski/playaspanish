'use client'

import { Fragment } from 'react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'

const MOON_LIGHT = '#fffdf2'
const MOON_DARK = '#a16207'
const MOON_RIM = '#ca8a04'

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
      className="w-14 h-14 md:w-20 md:h-20 rounded-full flex-shrink-0"
      style={{
        background: phaseBackground[phase],
        border: `1px solid ${MOON_RIM}`,
        boxShadow: phase === 'full' ? `0 0 24px 4px rgba(234, 179, 8, 0.35)` : 'none'
      }}
    />
  )
}

const steps: Array<{ phase: Phase; title: string; description: string }> = [
  {
    phase: 'new',
    title: 'Say hola',
    description:
      'Everything starts with an email. Tell us you want to learn Spanish. That is all it takes.'
  },
  {
    phase: 'waxing',
    title: 'Meet Angelica',
    description:
      'A first conversation to understand what you need and where you want to go. Angelica shapes your path and matches you with the teacher who fits you best, which may be her.'
  },
  {
    phase: 'full',
    title: 'Find your rhythm',
    description:
      'Lessons begin. How much, how often, and for how long is entirely up to you. The course never expires.'
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
    <section id="how-it-works" className="py-24 bg-yellow-100 text-yellow-950">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll text-center mb-16', titleVisible && 'visible')}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-yellow-900/80 max-w-2xl mx-auto">
            Four phases, one cycle. Like the moon, it keeps going for as long as you do.
          </p>
        </div>

        <div ref={stepsRef} className={cn('animate-on-scroll relative max-w-5xl mx-auto', stepsVisible && 'visible')}>
          {/* Connecting arc line behind the moons */}
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[12%] right-[12%] border-t border-dashed border-yellow-500"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <Fragment key={step.title}>
                <div className="relative text-center">
                  {/* Mobile: moon and heading side by side; desktop: stacked */}
                  <div className="flex items-center justify-center gap-4 md:flex-col md:gap-6">
                    <Moon phase={step.phase} />
                    <h3 className="text-xl font-semibold text-yellow-950">{step.title}</h3>
                  </div>
                  <p className="text-yellow-900/80 text-sm leading-relaxed max-w-xs mx-auto mt-3 md:mt-2">
                    {step.description}
                  </p>
                  <span className="sr-only">Step {index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <svg
                    aria-hidden
                    viewBox="0 0 100 84"
                    fill="none"
                    className="md:hidden w-24 h-20 ml-6"
                  >
                    {/* Sweeps down the left side, then hooks right toward the
                        next step's moon */}
                    <path
                      d="M22 4 C 8 28, 12 54, 48 66"
                      stroke="#a16207"
                      strokeOpacity="0.6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M39 55 L50 66 L37 73"
                      stroke="#a16207"
                      strokeOpacity="0.6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
