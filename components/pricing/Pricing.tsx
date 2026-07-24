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

// Laid out as an ascending staircase: new students enter on the lower
// steps, everyone arrives at the same $30 summit. Order matters.
const steps = [
  {
    label: 'New students',
    name: '10 Lessons',
    price: '$28',
    unit: 'per lesson · $280 upfront',
    tagline: 'The full first climb',
    features: [
      'Save $20 on your first ten lessons',
      'Schedule them whenever you like',
      '50% money-back if it is not for you'
    ],
    // Tallest top margin = lowest step
    offset: 'md:mt-32',
    summit: false
  },
  {
    label: 'New students',
    name: '5 Lessons',
    price: '$29',
    unit: 'per lesson · $145 upfront',
    tagline: 'A gentle start',
    features: [
      'Save $5 on your first five lessons',
      'Schedule them whenever you like',
      '50% money-back if it is not for you'
    ],
    offset: 'md:mt-16',
    summit: false
  },
  {
    label: 'Everyone',
    name: 'The Lesson',
    price: '$30',
    unit: 'per 45-min lesson',
    tagline: 'The rhythm — where everyone arrives',
    features: [
      'Pay as you go — per class or per month',
      'Lessons at your own pace, no expiry',
      'Same price for as long as you learn'
    ],
    offset: 'mt-0',
    summit: true
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
            New students climb in from a lower step — then everyone learns at the same summit.
          </p>
        </div>

        {/* The staircase: bottom-aligned cards with stepped tops */}
        <div
          ref={cardsRef}
          className={cn(
            'animate-on-scroll grid md:grid-cols-3 gap-6 md:gap-0 max-w-5xl mx-auto mt-14 items-stretch',
            cardsVisible && 'visible'
          )}
        >
          {steps.map((step, index) => (
            <div key={step.name} className={cn('flex flex-col', step.offset)}>
              <div
                className={cn(
                  'flex flex-col flex-1 p-8 bg-white border border-orange-100 shadow-sm',
                  'rounded-lg md:rounded-none',
                  index === 0 && 'md:rounded-l-lg',
                  step.summit &&
                    'md:rounded-tr-lg md:rounded-br-lg bg-gradient-to-b from-orange-100 to-white ring-1 ring-orange-300 shadow-md'
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
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{step.price}</span>
                  <span className="block text-sm text-gray-500 mt-1">{step.unit}</span>
                </div>
                <ul className="space-y-3 mt-auto">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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
