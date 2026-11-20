'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SunCorner } from '@/components/decor/CornerArt'
import { pricingSimple as pricing } from '@/lib/content'

function handleContactScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const BAR_COLOURS = ['bg-orange-500', 'bg-purple-800']

// Quiet Spanish cheers floating in the margins around the price bars
const smallScreenWords = [
  {
    text: '¡Vamos!',
    className: '-top-9 left-3 text-lg text-orange-400/70 -rotate-6',
    animation: 'clipart-float 4s ease-in-out infinite'
  },
  {
    text: '¡Tú puedes!',
    className: '-top-8 right-3 text-base text-orange-300/80 rotate-3',
    animation: 'clipart-sway 5s ease-in-out 0.6s infinite'
  },
  {
    text: '¡Órale!',
    className: '-bottom-9 right-5 text-base text-orange-400/60 -rotate-3',
    animation: 'clipart-sway 5.5s ease-in-out 1.8s infinite'
  }
]

const floatingWords = [
  // left margin
  {
    text: '¡Vamos!',
    className: 'top-2 right-full mr-12 text-xl text-orange-400/60 -rotate-6',
    animation: 'clipart-float 4s ease-in-out infinite'
  },
  {
    text: '¡Ándale!',
    className: 'top-[38%] right-full mr-20 text-base text-orange-300/70 rotate-6',
    animation: 'clipart-float 5s ease-in-out 1.2s infinite'
  },
  {
    text: '¡Empieza hoy!',
    className: 'bottom-4 right-full mr-10 text-lg text-orange-400/50 rotate-2',
    animation: 'clipart-float 4.5s ease-in-out 2.4s infinite'
  },
  // right margin
  {
    text: '¡Tú puedes!',
    className: 'top-0 left-full ml-12 text-lg text-orange-300/70 rotate-3',
    animation: 'clipart-sway 5s ease-in-out 0.6s infinite'
  },
  {
    text: '¡Sí se puede!',
    className: 'top-[42%] left-full ml-20 text-xl text-orange-400/50 -rotate-3',
    animation: 'clipart-sway 4.5s ease-in-out 1.8s infinite'
  },
  {
    text: '¡Órale!',
    className: 'bottom-2 left-full ml-10 text-base text-orange-400/60 -rotate-6',
    animation: 'clipart-sway 5.5s ease-in-out 3s infinite'
  },
  // above and below
  {
    text: '¡Dale!',
    className: '-top-9 right-6 text-lg text-orange-300/70 -rotate-6',
    animation: 'clipart-sway 4.8s ease-in-out 0.9s infinite'
  },
  {
    text: '¡Hoy es el día!',
    className: '-bottom-10 left-8 text-base text-orange-400/50 -rotate-2',
    animation: 'clipart-float 5s ease-in-out 1.5s infinite'
  }
]

// Kept deliberately plain: what a lesson costs, what ten cost, one way to
// start. Copy lives in lib/content.ts (pricingSimple).
export function Pricing() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="relative py-24 bg-orange-50 overflow-hidden">
      <SunCorner className="hidden lg:block absolute -bottom-16 -right-14 w-60 pointer-events-none" />
      <div
        ref={ref}
        className={cn('animate-on-scroll container mx-auto px-4 relative max-w-2xl', isVisible && 'visible')}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">{pricing.title}</h2>

        {/* Two bold bars, like a printed price list: name and price on the
            left, a rule, the short points on the right */}
        <div className="relative mt-12">
          {/* Phones and tablets: a few cheers above and below the bars,
              where there is room */}
          {smallScreenWords.map((word) => (
            <span
              key={word.text}
              aria-hidden
              className={cn(
                'lg:hidden absolute italic font-medium whitespace-nowrap pointer-events-none select-none',
                word.className
              )}
              style={{ animation: word.animation }}
            >
              {word.text}
            </span>
          ))}
          {floatingWords.map((word) => (
            <span
              key={word.text}
              aria-hidden
              className={cn(
                'hidden lg:block absolute italic font-medium whitespace-nowrap pointer-events-none select-none',
                word.className
              )}
              style={{ animation: word.animation }}
            >
              {word.text}
            </span>
          ))}
          <ul className="relative space-y-5">
            {pricing.rows.map((row, i) => (
              <li
                key={row.name}
                className={cn(
                  'grid items-center gap-x-8 gap-y-4 rounded-3xl px-7 py-7 text-white shadow-md sm:grid-cols-[minmax(0,13rem)_1px_minmax(0,1fr)] md:px-10',
                  BAR_COLOURS[i % BAR_COLOURS.length]
                )}
              >
                <div>
                  <p className="text-xl font-semibold">{row.name}</p>
                  <p className="mt-1 text-4xl md:text-5xl font-bold tabular-nums">{row.price}</p>
                </div>
                <span aria-hidden className="hidden sm:block h-full w-px bg-white/45" />
                <ul className="space-y-1.5">
                  {row.points.map((point) => (
                    <li key={point} className="flex items-baseline gap-2.5 text-[1.0625rem] text-white/95">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-white/80"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={handleContactScroll}>
            {pricing.cta}
          </Button>
          <p className="mt-6 text-gray-600">{pricing.custom}</p>
        </div>
      </div>
    </section>
  )
}
