'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { YinYang } from './YinYang'
import { ConstellationCorner } from '@/components/decor/CornerArt'

const pillars = [
  {
    title: 'One course, no clock',
    description:
      'Your course is unlimited in time. Learn for as long as you want and need. No expiring seats, no semesters, just steady progress at your pace.'
  },
  {
    title: 'Experience first',
    description:
      'Lessons go beyond grammar: the language, the culture, and the people behind it. You learn Spanish the way it is actually lived.'
  },
  {
    title: 'Mexican Spanish, understood everywhere',
    description:
      'Every teacher is Mexican. The clear, standard Spanish of Mexico bridges Latin America and Spain: one accent that connects you to the whole Spanish-speaking world.'
  }
]

export function Experience() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: markRef, isVisible: markVisible } = useScrollAnimation()

  return (
    <section id="course" className="relative py-24 bg-indigo-950 text-indigo-50 overflow-hidden">
      {/* Constellation, bottom-right */}
      <ConstellationCorner className="hidden lg:block absolute bottom-10 right-8 w-72 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll text-center mb-16', titleVisible && 'visible')}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Course</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Half structure, half conversation. Half language, half culture. The balance is the method.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: the three pillars */}
          <div
            ref={contentRef}
            className={cn('animate-slide-left space-y-8', contentVisible && 'visible')}
          >
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-2xl font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-indigo-200 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Right: the duality mark */}
          <div
            ref={markRef}
            className={cn(
              'animate-slide-right flex flex-col items-center gap-6',
              markVisible && 'visible'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-6">
              <span className="text-sm uppercase tracking-[0.3em] text-indigo-300 [writing-mode:vertical-rl] rotate-180">
                Idioma
              </span>
              <YinYang size={220} light="#e0e7ff" dark="#312e81" />
              <span className="text-sm uppercase tracking-[0.3em] text-indigo-300 [writing-mode:vertical-rl]">
                Cultura
              </span>
            </div>
            <p className="text-sm text-indigo-300 max-w-xs text-center">
              Language carries culture; culture gives language its meaning. Every lesson holds both.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
