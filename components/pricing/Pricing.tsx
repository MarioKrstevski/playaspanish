'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { Briefcase, Check, Mic, Scale, Stethoscope } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SunCorner } from '@/components/decor/CornerArt'
import { pricing } from '@/lib/content'

function handleContactScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Two ways to pay, side by side: the ten-lesson pack (recommended) and the
// single lesson. Copy lives in lib/content.ts.
const steps = pricing.plans

// Quiet Spanish cheers floating in the margins around the two cards.
const floatingWords = [
  {
    text: '¡Vamos!',
    className: '-top-8 left-6 text-xl text-orange-400/50 -rotate-6',
    animation: 'clipart-float 4s ease-in-out infinite'
  },
  {
    text: '¡Tú puedes!',
    className: '-top-10 right-10 text-base text-orange-300/60 rotate-3',
    animation: 'clipart-sway 5s ease-in-out 0.6s infinite'
  },
  {
    text: '¡Ándale!',
    className: 'top-1/3 -left-14 text-sm text-orange-400/40 rotate-6',
    animation: 'clipart-float 5s ease-in-out 1.2s infinite'
  },
  {
    text: '¡Sí se puede!',
    className: 'top-1/2 -right-16 text-lg text-orange-300/50 -rotate-3',
    animation: 'clipart-sway 4.5s ease-in-out 1.8s infinite'
  },
  {
    text: '¡Empieza hoy!',
    className: 'bottom-10 -left-12 text-base text-orange-300/50 rotate-2',
    animation: 'clipart-float 4.5s ease-in-out 2.4s infinite'
  },
  {
    text: '¡Órale!',
    className: '-bottom-7 -right-6 text-sm text-orange-400/40 -rotate-6',
    animation: 'clipart-sway 5.5s ease-in-out 3s infinite'
  },
  {
    text: '¡Empecemos!',
    className: 'top-8 -left-8 text-lg text-orange-400/50 rotate-3',
    animation: 'clipart-float 4.2s ease-in-out 0.3s infinite'
  },
  {
    text: '¡Dale!',
    className: 'top-10 -right-8 text-xl text-orange-300/60 -rotate-6',
    animation: 'clipart-sway 4.8s ease-in-out 0.9s infinite'
  },
  {
    text: '¡Hoy es el día!',
    className: '-bottom-12 left-16 text-base text-orange-400/40 -rotate-2',
    animation: 'clipart-float 5s ease-in-out 1.5s infinite'
  },
  {
    text: '¡A darle!',
    className: '-bottom-11 right-24 text-sm text-orange-300/50 rotate-6',
    animation: 'clipart-sway 5.2s ease-in-out 2.1s infinite'
  }
]

// On mobile a tilted cheer sits in each card's empty top-right corner.
const mobileWords = ['¡Vamos!', '¡Tú puedes!']

// Profession icons tucked behind the custom-course card, peeking past its edges.
const professionIcons = [
  {
    Icon: Scale,
    className: '-top-6 -left-7 w-14 h-14 text-orange-200 -rotate-12'
  },
  {
    Icon: Stethoscope,
    className: '-top-7 -right-6 w-16 h-16 text-orange-300 rotate-12'
  },
  {
    Icon: Briefcase,
    className: '-bottom-6 -left-6 w-12 h-12 text-orange-300 rotate-6'
  },
  {
    Icon: Mic,
    className: '-bottom-7 -right-5 w-14 h-14 text-orange-200 -rotate-6'
  }
]

export function Pricing() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: customRef, isVisible: customVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="relative py-24 bg-orange-50 overflow-hidden">
      {/* Sun peeking from the bottom-right corner */}
      <SunCorner className="hidden lg:block absolute -bottom-16 -right-14 w-60 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll text-center mb-4', titleVisible && 'visible')}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{pricing.title}</h2>
          <p className="text-2xl text-gray-800 max-w-2xl mx-auto">
            A lesson is <span className="font-bold text-orange-600">$25</span>. Take ten and pay{' '}
            <span className="font-bold text-orange-600">$24</span> each.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">{pricing.sub}</p>
        </div>

        {/* The two options */}
        <div className="relative max-w-3xl mx-auto mt-16">
          {/* Floating Spanish cheers in the margins, background flavor only */}
          {floatingWords.map((word) => (
            <span
              key={word.text}
              aria-hidden
              className={cn(
                'hidden lg:block absolute italic font-medium pointer-events-none select-none',
                word.className
              )}
              style={{ animation: word.animation }}
            >
              {word.text}
            </span>
          ))}
          <div
            ref={cardsRef}
            className={cn(
              'animate-on-scroll grid md:grid-cols-2 gap-6 items-stretch',
              cardsVisible && 'visible'
            )}
          >
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex flex-col">
                <span
                  aria-hidden
                  className="md:hidden absolute top-7 right-6 z-[2] rotate-6 italic font-medium text-lg text-orange-300/80 pointer-events-none select-none"
                  style={{ animation: `clipart-float 4s ease-in-out ${index * 0.8}s infinite` }}
                >
                  {mobileWords[index]}
                </span>
                {step.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-max">
                    <span className="inline-flex items-center rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white shadow-md">
                      {step.badge}
                    </span>
                  </div>
                )}
                <div
                  className={cn(
                    'flex flex-col flex-1 p-8 bg-white shadow-sm rounded-lg',
                    step.recommended
                      ? 'ring-2 ring-orange-500 shadow-lg bg-gradient-to-b from-orange-50 to-white z-[1]'
                      : 'border-2 border-orange-200'
                  )}
                >
                  <p
                    className={cn(
                      'text-xs uppercase tracking-[0.2em] mb-1',
                      step.recommended ? 'text-orange-700 font-semibold' : 'text-orange-500'
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

                  <ul className="space-y-3 mt-auto">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-6"
                    size="lg"
                    variant={step.recommended ? 'default' : 'outline'}
                    onClick={handleContactScroll}
                  >
                    {step.cta ?? 'Start with one lesson'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-10">{pricing.note}</p>

        {/* Custom professional courses: profession icons tucked behind the card */}
        <div
          ref={customRef}
          className={cn(
            'animate-on-scroll relative max-w-3xl mx-auto mt-16',
            customVisible && 'visible'
          )}
        >
          {professionIcons.map(({ Icon, className }) => (
            <Icon
              key={className}
              aria-hidden
              className={cn(
                'hidden md:block absolute z-0 pointer-events-none',
                className
              )}
            />
          ))}
          <div className="relative z-[1] bg-white rounded-lg border border-orange-200 shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Spanish for your profession
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lawyers, doctors, job interviews, business negotiations. When you need Spanish for
              something specific, we start with a conversation. Angelica listens to what you need,
              then builds a course that fits it exactly. Custom scope, custom quote.
            </p>
            <Button size="lg" onClick={handleContactScroll}>
              Tell us what you need
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
