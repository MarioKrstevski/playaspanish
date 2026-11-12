'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RevealHeadline } from '@/components/hero/RevealHeadline'
import { Stars } from '@/components/hero/Stars'
import { hero } from '@/lib/content'

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Version D hero: no illustration. A night sky in the crown-chakra violet
// fading to a dusk horizon, with a full moon rising where the indigo pyramid
// divider climbs out of the section.
export function HeroMoonrise() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[max(100vh,760px)] flex-col items-center overflow-hidden pt-36 pb-16"
      style={{
        background:
          'linear-gradient(to bottom, #1f1147 0%, #382173 34%, #462a7e 52%, #7a3f8f 72%, #c2607a 87%, #f0915a 100%)'
      }}
    >
      <Stars className="absolute inset-0 pointer-events-none" />

      {/* The moon sits low so the pyramid divider below rises in front of it */}
      <div
        aria-hidden
        className="absolute left-1/2 rounded-full pointer-events-none"
        style={{
          width: 'clamp(240px, min(46vw, 62vh), 620px)',
          height: 'clamp(240px, min(46vw, 62vh), 620px)',
          bottom: 'calc(clamp(240px, min(46vw, 62vh), 620px) * -0.35)',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle at 38% 34%, #fff8dc 0%, #fde68a 52%, #f3c766 100%)',
          boxShadow: '0 0 140px 50px rgba(253, 230, 138, 0.3), 0 0 40px 8px rgba(253, 230, 138, 0.35)'
        }}
      />

      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <RevealHeadline
            className="hero-slide-in mb-6 text-center md:mb-4"
            textClassName="text-4xl md:text-5xl lg:text-6xl leading-tight md:whitespace-nowrap"
          />
          <p className="hero-slide-in hero-slide-in-delay-1 mb-8 text-base text-amber-50 sm:text-lg md:text-xl">
            {hero.sub} <br />
            <span className="text-xl font-semibold text-amber-200">{hero.promise}</span>
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="hero-slide-in hero-slide-in-delay-2 px-8 py-6 text-lg"
          >
            {hero.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
