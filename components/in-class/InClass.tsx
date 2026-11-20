'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { inClass } from '@/lib/content'
import { display } from '@/lib/fonts'

const DISPLAY = '[font-family:var(--font-d-display),var(--font-inter),sans-serif] tracking-[-0.02em]'

// The topics float loose in Angelica's hand, like the cheers around the
// pricing cards: different sizes, tints and tilts, each drifting gently.
const TOPIC_LOOKS = [
  {
    className: 'text-5xl md:text-6xl text-white -rotate-3',
    animation: 'clipart-float 4.6s ease-in-out infinite'
  },
  {
    className: 'text-4xl md:text-5xl text-purple-300 rotate-2',
    animation: 'clipart-sway 5.2s ease-in-out 0.6s infinite'
  },
  {
    className: 'text-4xl md:text-5xl text-pink-300 -rotate-2',
    animation: 'clipart-float 5s ease-in-out 1.2s infinite'
  },
  {
    className: 'text-4xl md:text-[3.25rem] text-white rotate-1',
    animation: 'clipart-sway 4.8s ease-in-out 1.8s infinite'
  },
  {
    className: 'text-4xl md:text-5xl text-amber-200 rotate-3',
    animation: 'clipart-float 5.4s ease-in-out 0.3s infinite'
  },
  {
    className: 'text-3xl md:text-4xl text-purple-300 -rotate-2',
    animation: 'clipart-sway 5s ease-in-out 2.4s infinite'
  }
]

// Spanish a newcomer can't guess gets its English underneath
const GLOSSED = new Set(['Customs', 'And more'])

// Continues the purple "Course" zone: what a class is actually like. The left
// head is set as in version D (big type, the Spanish in Angelica's hand),
// full width; the topics float beside the text in her hand, in Spanish.
export function InClass() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()
  const { ref: topicsRef, isVisible: topicsVisible } = useScrollAnimation()

  return (
    <section id="in-class" className={cn(display.variable, 'relative pb-24 bg-purple-950 text-purple-50')}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto border-t border-purple-800 pt-16">
          {/* The head runs the full width; under it the class (about 70%)
              and the topics floating beside it (about 30%) */}
          <div ref={textRef} className={cn('animate-on-scroll', textVisible && 'visible')}>
            <h2
              className={cn(
                DISPLAY,
                'font-bold text-white text-[clamp(2.5rem,6.4vw,5.5rem)] leading-[1] tracking-[-0.03em] [text-wrap:balance]'
              )}
            >
              {inClass.title}
            </h2>
            <p
              lang="es"
              className="mt-3 -rotate-2 [font-family:var(--font-caveat)] font-semibold text-4xl md:text-5xl leading-none text-purple-300"
            >
              {inClass.titleEs}
            </p>
          </div>

          <div className="mt-12 grid gap-x-14 gap-y-12 lg:grid-cols-10 items-start">
            <div className={cn('animate-slide-left lg:col-span-6', textVisible && 'visible')}>
              <p className={cn(DISPLAY, 'text-2xl md:text-[1.75rem] font-bold leading-tight text-white')}>
                {inClass.lead}
              </p>
              <p className="mt-1 text-lg text-purple-300">{inClass.leadNote}</p>
              <p className="mt-6 max-w-[60ch] text-lg text-purple-200 leading-relaxed">{inClass.body}</p>
            </div>

            <div
              ref={topicsRef}
              className={cn('animate-slide-right lg:col-span-4', topicsVisible && 'visible')}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className={cn(DISPLAY, 'text-xl md:text-2xl font-bold text-white mb-6')}>
                {inClass.topicsLabel}
              </h3>
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-10">
                {inClass.topics.map((topic, index) => {
                  const look = TOPIC_LOOKS[index % TOPIC_LOOKS.length]
                  return (
                    <li
                      key={topic.title}
                      className={cn('text-center', look.className)}
                      style={{ animation: look.animation }}
                    >
                      <span
                        lang="es"
                        className="block [font-family:var(--font-caveat)] font-semibold leading-none"
                      >
                        {topic.titleEs}
                      </span>
                      {/* The Spanish says it on its own, except where it doesn't */}
                      {GLOSSED.has(topic.title) ? (
                        <span className="block mt-1 text-sm font-medium tracking-wide text-purple-300/90">
                          {topic.title.toLowerCase()}
                        </span>
                      ) : (
                        <span className="sr-only">{topic.title}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
