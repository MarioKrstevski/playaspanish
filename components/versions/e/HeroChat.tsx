'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RevealHeadline } from '@/components/hero/RevealHeadline'
import { Stars } from '@/components/hero/Stars'
import { ChatMock } from '@/components/why-spanish/ChatMock'
import { buffet, hero } from '@/lib/content'

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Version E hero: no illustration. The Spanglish chat plays in a phone on the
// right, so a visitor sees what speaking Spanish will feel like before they
// read a word about the course.
export function HeroChat() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 78% 45%, rgba(139, 92, 246, 0.35), rgba(139, 92, 246, 0) 70%), linear-gradient(to bottom, #2a1860 0%, #462a7e 100%)'
      }}
    >
      <Stars className="absolute inset-0 pointer-events-none" />
      {/* Crescent moon: a lit disc with the sky's own color laid over it */}
      <div
        aria-hidden
        className="absolute right-[8%] top-28 hidden h-16 w-16 rounded-full md:block"
        style={{ boxShadow: 'inset -14px 6px 0 0 #fde68a', transform: 'rotate(-18deg)' }}
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <RevealHeadline
              className="hero-slide-in mb-2"
              textClassName="text-4xl md:text-5xl xl:text-6xl leading-tight"
            />
            <p className="hero-slide-in hero-slide-in-delay-1 mb-8 text-base text-amber-50 sm:text-lg md:text-xl">
              {hero.sub} <br />
              <span className="text-xl font-semibold text-amber-200">{hero.promise}</span>
            </p>
            <Button
              size="lg"
              onClick={() => scrollTo('#contact')}
              className="hero-slide-in hero-slide-in-delay-2 px-8 py-6 text-lg"
            >
              {hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Find yourself: straight to the section that says who it's for */}
            <div className="hero-slide-in hero-slide-in-delay-2 mt-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-violet-200">
                Is this you?
              </p>
              <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {buffet.audiences.map((audience) => (
                  <li key={audience.title}>
                    <button
                      type="button"
                      onClick={() => scrollTo('#buffet')}
                      className="rounded-full border border-violet-300/40 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
                    >
                      {audience.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The phone */}
          <div className="hero-slide-in hero-slide-in-delay-1 mx-auto w-full max-w-[320px]">
            <div className="rounded-[2.75rem] bg-indigo-950 p-3 shadow-2xl ring-1 ring-white/15">
              <div className="flex h-[520px] flex-col overflow-hidden rounded-[2.1rem] bg-sky-50">
                <div className="flex items-center gap-3 border-b border-sky-100 bg-white px-5 py-3">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white"
                  >
                    A
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-sm font-semibold text-gray-900">Ana</span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      en línea
                    </span>
                  </span>
                </div>
                <ChatMock fill className="w-full min-h-0 flex-1 rounded-none bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
