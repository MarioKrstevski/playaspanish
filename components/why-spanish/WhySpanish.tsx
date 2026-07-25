'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { EnyeCorner } from '@/components/decor/CornerArt'

const stats = [
  { value: '600M+', label: 'speakers worldwide' },
  { value: '21', label: 'countries with Spanish as an official language' },
  { value: '#2', label: 'most spoken native language on Earth' },
  { value: '#4', label: 'most spoken language overall' }
]

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

export function WhySpanish() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation()

  return (
    <section id="why-spanish" className="relative py-24 bg-sky-50 overflow-hidden">
      {/* The Spanish-speaking world as a soft map watermark behind the content;
          the language itself bottom-right */}
      <Image
        src="/images/map-spanish-world.jpg"
        alt=""
        aria-hidden
        width={1024}
        height={1024}
        className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-none pointer-events-none select-none mix-blend-multiply"
      />
      <EnyeCorner className="hidden lg:block absolute bottom-0 right-10 text-[150px] pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll text-center mb-14', titleVisible && 'visible')}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One language, a whole world
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Spanish is one of the most spoken languages on the planet, and one voice carries you
            through all of it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: the numbers */}
          <div
            ref={statsRef}
            className={cn('animate-slide-left grid grid-cols-2 gap-6', statsVisible && 'visible')}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-sky-100"
              >
                <div className="text-4xl font-bold text-sky-700 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right: the reasons */}
          <div
            ref={reasonsRef}
            className={cn('animate-slide-right space-y-6', reasonsVisible && 'visible')}
            style={{ transitionDelay: '200ms' }}
          >
            {reasons.map((reason) => (
              <div key={reason.title}>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
