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

const tiers = [
  {
    name: 'The Lesson',
    price: '$30',
    unit: 'per 45-min lesson',
    tagline: 'The one true price',
    features: [
      'Pay as you go — per class or per month',
      'Schedule lessons at your own pace',
      'No commitment, no expiry',
      'Same price for as long as you learn'
    ],
    highlighted: false
  },
  {
    name: 'New Student · 5 Lessons',
    price: '$29',
    unit: 'per lesson · $145 upfront',
    tagline: 'A gentle start',
    features: [
      'For first-time students only',
      'Save $5 on your first five lessons',
      'Schedule them whenever you like',
      '50% money-back if it is not for you'
    ],
    highlighted: false
  },
  {
    name: 'New Student · 10 Lessons',
    price: '$28',
    unit: 'per lesson · $280 upfront',
    tagline: 'The full first climb',
    features: [
      'For first-time students only',
      'Save $20 on your first ten lessons',
      'Schedule them whenever you like',
      '50% money-back if it is not for you'
    ],
    highlighted: true
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
          className={cn('animate-on-scroll text-center mb-6', titleVisible && 'visible')}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One price, one path
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A lesson is $30 — that never changes. New students get a warmer welcome for their
            first lessons, then everyone walks the same path.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={cn(
            'animate-on-scroll grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 items-end',
            cardsVisible && 'visible'
          )}
        >
          {tiers.map((tier) => (
            <div key={tier.name} className="relative">
              {/* Pyramid apex on each card */}
              <div
                aria-hidden
                className={cn(
                  'mx-auto w-10 h-5 [clip-path:polygon(50%_0,100%_100%,0_100%)]',
                  tier.highlighted ? 'bg-orange-500' : 'bg-white'
                )}
              />
              <div
                className={cn(
                  'bg-white rounded-b-lg rounded-t-sm p-8 shadow-sm border border-orange-100 flex flex-col',
                  tier.highlighted && 'ring-2 ring-orange-400 shadow-lg'
                )}
              >
                <p className="text-sm uppercase tracking-widest text-orange-600 mb-1">
                  {tier.tagline}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  <span className="block text-sm text-gray-500 mt-1">{tier.unit}</span>
                </div>
                <ul className="space-y-3 mb-2">
                  {tier.features.map((feature) => (
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
          Starter packs are paid upfront and yours to schedule freely. After your pack, lessons
          continue at $30 — and if a pack truly isn&apos;t for you, half your money comes back.
          No questions, no hard feelings.
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
