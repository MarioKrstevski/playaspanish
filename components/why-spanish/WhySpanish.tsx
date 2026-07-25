'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChatMock } from './ChatMock'

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
      {/* The Spanish-speaking world, covering the whole section as a soft backdrop */}
      <Image
        src="/images/map-spanish-world.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="hidden lg:block object-cover object-[center_35%] pointer-events-none select-none mix-blend-multiply"
      />
      {/* Fade the map out before the section ends so it hands off cleanly
          to the divider below */}
      <div
        aria-hidden
        className="hidden lg:block absolute inset-x-0 bottom-0 h-44 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(240, 249, 255, 0), #f0f9ff 90%)' }}
      />
      {/* Decorative texting loop, peeking out from behind the content on the right */}
      <ChatMock className="hidden lg:block absolute right-14 top-1/2 -translate-y-1/2 opacity-85" />
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

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: the numbers */}
          <div
            ref={statsRef}
            className={cn(
              'animate-slide-left grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6',
              statsVisible && 'visible'
            )}
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
            className={cn(
              'animate-slide-right space-y-6 relative pr-48 lg:pr-0',
              reasonsVisible && 'visible'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Mobile: the chat peeks out from behind the text, into the
                right padding reserved above */}
            <ChatMock className="lg:hidden absolute -right-4 top-0 opacity-75 scale-[0.7] origin-top-right" />
            {reasons.map((reason) => (
              <div key={reason.title} className="relative">
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
