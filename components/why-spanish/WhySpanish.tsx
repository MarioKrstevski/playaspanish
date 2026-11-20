'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { whySpanish } from '@/lib/content'
import { Globe } from './Globe'
import { GlobeChat } from './GlobeChat'

const reasons = [
  {
    title: 'Connect across cultures',
    description:
      'From Mexico City to Buenos Aires to Madrid, Spanish opens conversations with people across Latin America, Spain, and Spanish-speaking communities everywhere.'
  },
  {
    title: 'Work with the Spanish-speaking world',
    description:
      'If your work touches Spanish-speaking clients, partners, or markets, even indirectly, the language turns transactions into relationships.'
  },
  {
    title: 'Experience Mexico for real',
    description:
      'Order in the market, talk with locals, understand the jokes. Spanish turns a visit into an experience.'
  }
]

// The blue zone: the numbers on the left, the Spanish-speaking world on a
// globe on the right with a texting chat rising over it (from version D),
// the reasons underneath.
export function WhySpanish() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()
  const { ref: globeRef, isVisible: globeVisible } = useScrollAnimation()
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation()

  return (
    <section id="why-spanish" className="relative pt-24 pb-12 bg-sky-50 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid items-center gap-x-10 gap-y-12 lg:grid-cols-12 max-w-6xl mx-auto">
          <div
            ref={textRef}
            className={cn('animate-slide-left lg:col-span-5', textVisible && 'visible')}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              {whySpanish.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              {whySpanish.sub}
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-sky-200 pt-8">
              {whySpanish.stats.map((stat) => (
                // justify-end is the top in a reversed column: the numbers
                // line up across a row whatever the label length below
                <div key={stat.label} className="flex flex-col-reverse justify-end">
                  <dt className="mt-1.5 max-w-[20ch] text-[0.9375rem] leading-snug text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="text-4xl md:text-5xl font-bold leading-none text-sky-700">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            ref={globeRef}
            className={cn('animate-slide-right relative lg:col-span-7', globeVisible && 'visible')}
            style={{ transitionDelay: '150ms' }}
          >
            <Globe className="mx-auto block h-auto w-full max-w-[540px] drop-shadow-[0_18px_30px_rgba(12,49,86,0.25)]" />
            <GlobeChat className="relative -mt-28 ml-auto w-[min(100%,280px)] sm:absolute sm:-bottom-8 sm:right-0 sm:mt-0 sm:w-[270px]" />
          </div>
        </div>

        <div
          ref={reasonsRef}
          className={cn(
            'animate-on-scroll grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mt-20 border-t border-sky-200 pt-12',
            reasonsVisible && 'visible'
          )}
        >
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
