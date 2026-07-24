'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

function handleContactScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const MOON_LIGHT = '#fdba74'
const MOON_DARK = '#7c2d12'

// A row of lessons drawn as a waxing moon cycle: each lesson a little
// fuller than the last.
function LessonMoons({ count }: { count: number }) {
  return (
    <div aria-hidden className="flex items-center gap-1.5 flex-wrap">
      {Array.from({ length: count }, (_, i) => {
        const fill = ((i + 1) / count) * 100
        const isFull = i === count - 1
        return (
          <span
            key={i}
            className="w-3.5 h-3.5 rounded-full"
            style={{
              background: isFull
                ? MOON_LIGHT
                : `linear-gradient(to left, ${MOON_LIGHT} ${fill}%, ${MOON_DARK} ${fill}%)`,
              border: '1px solid #ea580c',
              boxShadow: isFull ? '0 0 8px 1px rgba(253, 186, 116, 0.8)' : 'none'
            }}
          />
        )
      })}
    </div>
  )
}

// Laid out as an ascending staircase: new students enter on the lower
// steps, everyone arrives at the same $30 summit. The 10-lesson step is
// the recommended entrance; the summit is the anchor.
const steps = [
  {
    label: 'New students',
    badge: 'The way most students start',
    name: '10 Lessons',
    price: '$28',
    unit: 'per lesson · $280 upfront',
    tagline: 'The full first climb',
    moons: 10,
    moonCaption: 'Ten lessons — watch it wax to full',
    features: [
      'Save $20 on your first ten lessons',
      'Schedule them whenever you like',
      '50% money-back if it is not for you'
    ],
    offset: 'md:mt-32',
    summit: false,
    recommended: true
  },
  {
    label: 'New students',
    badge: null,
    name: '5 Lessons',
    price: '$29',
    unit: 'per lesson · $145 upfront',
    tagline: 'A gentle start',
    moons: 5,
    moonCaption: 'Five lessons to find your footing',
    features: [
      'Save $5 on your first five lessons',
      'Schedule them whenever you like',
      '50% money-back if it is not for you'
    ],
    offset: 'md:mt-16',
    summit: false,
    recommended: false
  },
  {
    label: 'Everyone',
    badge: null,
    name: 'The Lesson',
    price: '$30',
    unit: 'per lesson · pay as you go',
    tagline: 'The rhythm — where everyone arrives',
    moons: 0,
    moonCaption: null,
    features: [
      'Pay per class or per month, as you like',
      'Lessons at your own pace, no expiry',
      'Same price for as long as you learn'
    ],
    offset: 'mt-0',
    summit: true,
    recommended: false
  }
]

export function Pricing() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: customRef, isVisible: customVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll text-center mb-4', titleVisible && 'visible')}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One price, one path
          </h2>
          <p className="text-2xl text-gray-800 max-w-2xl mx-auto">
            A lesson is <span className="font-bold text-orange-600">$30</span>. That never changes.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
            Each lesson is a one-hour session — 45 minutes of focused Spanish, with breathing
            room built in. New students climb in from a lower step.
          </p>
        </div>

        {/* The staircase: bottom-aligned cards with stepped tops */}
        <div
          ref={cardsRef}
          className={cn(
            'animate-on-scroll grid md:grid-cols-3 gap-6 md:gap-0 max-w-5xl mx-auto mt-16 items-stretch',
            cardsVisible && 'visible'
          )}
        >
          {steps.map((step, index) => (
            <div key={step.name} className={cn('relative flex flex-col', step.offset)}>
              {step.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-max">
                  <span className="inline-flex items-center rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white shadow-md">
                    {step.badge}
                  </span>
                </div>
              )}
              <div
                className={cn(
                  'flex flex-col flex-1 p-8 bg-white shadow-sm',
                  'rounded-lg md:rounded-none',
                  index === 0 && 'md:rounded-l-lg',
                  step.recommended &&
                    'ring-2 ring-orange-500 shadow-lg bg-gradient-to-b from-orange-50 to-white z-[1]',
                  step.summit &&
                    'md:rounded-tr-lg md:rounded-br-lg border-2 border-orange-300',
                  !step.recommended && !step.summit && 'border border-orange-100'
                )}
              >
                <p
                  className={cn(
                    'text-xs uppercase tracking-[0.2em] mb-1',
                    step.summit ? 'text-orange-700 font-semibold' : 'text-orange-500'
                  )}
                >
                  {step.label}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{step.name}</h3>
                <p className="text-sm text-gray-500 mb-5">{step.tagline}</p>
                <div className="mb-5">
                  <span className="text-5xl font-bold text-gray-900">{step.price}</span>
                  <span className="block text-sm text-gray-500 mt-1">{step.unit}</span>
                </div>

                {step.moons > 0 && step.moonCaption ? (
                  <div className="mb-6">
                    <LessonMoons count={step.moons} />
                    <p className="text-xs text-gray-400 mt-2">{step.moonCaption}</p>
                  </div>
                ) : (
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      aria-hidden
                      className="w-5 h-5 rounded-full"
                      style={{
                        background: MOON_LIGHT,
                        border: '1px solid #ea580c',
                        boxShadow: '0 0 10px 2px rgba(253, 186, 116, 0.8)'
                      }}
                    />
                    <p className="text-xs text-gray-400">Full moon — full value, every lesson</p>
                  </div>
                )}

                <ul className="space-y-3 mt-auto">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {step.recommended && (
                  <Button className="mt-6" size="lg" onClick={handleContactScroll}>
                    Start with 10 lessons
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-10">
          Starter steps are for first-time students, paid upfront and yours to schedule freely.
          If a pack truly isn&apos;t for you, half your money comes back — no questions, no hard
          feelings.
        </p>

        {/* Custom professional courses */}
        <div
          ref={customRef}
          className={cn(
            'animate-on-scroll max-w-3xl mx-auto mt-16 bg-white rounded-lg border border-orange-100 shadow-sm p-8 text-center',
            customVisible && 'visible'
          )}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Spanish for your profession
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lawyers, doctors, job interviews, business negotiations — when you need Spanish for
            something specific, we start with a conversation. Angelica listens to what you need,
            then builds a course that fits it exactly. Custom scope, custom quote.
          </p>
          <Button size="lg" onClick={handleContactScroll}>
            Tell us what you need
          </Button>
        </div>
      </div>
    </section>
  )
}
