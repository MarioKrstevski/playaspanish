'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { course, inClass } from '@/lib/content'
import { YinYang } from '@/components/experience/YinYang'

// Version E: the course and what a class is like, together in the sky zone.
export function ClassSky() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation()
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()
  const { ref: topicsRef, isVisible: topicsVisible } = useScrollAnimation()

  return (
    <>
      <section id="course" className="bg-sky-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div
            ref={titleRef}
            className={cn('animate-on-scroll mb-12 text-center', titleVisible && 'visible')}
          >
            <div className="mb-8 flex items-center justify-center gap-5">
              <span className="text-sm uppercase tracking-[0.3em] text-sky-700">Idioma</span>
              <YinYang size={72} light="#e0f2fe" dark="#0369a1" />
              <span className="text-sm uppercase tracking-[0.3em] text-sky-700">Cultura</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{course.title}</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">{course.sub}</p>
          </div>

          <div
            ref={pillarsRef}
            className={cn(
              'animate-on-scroll mx-auto grid max-w-5xl gap-6 md:grid-cols-3',
              pillarsVisible && 'visible'
            )}
          >
            {course.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{pillar.title}</h3>
                <p className="leading-relaxed text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="in-class" className="bg-sky-50 pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-start gap-12 border-t border-sky-200 pt-16 md:grid-cols-2">
            <div ref={textRef} className={cn('animate-slide-left', textVisible && 'visible')}>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-700">
                {inClass.titleEs}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">{inClass.title}</h2>
              <p className="text-2xl font-semibold text-gray-900">
                {inClass.lead}
                <span className="mt-1 block text-lg font-normal text-sky-800">
                  {inClass.leadNote}
                </span>
              </p>
              <p className="mt-6 leading-relaxed text-gray-600">{inClass.body}</p>
            </div>

            <div
              ref={topicsRef}
              className={cn('animate-slide-right', topicsVisible && 'visible')}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="mb-5 text-xl font-semibold text-gray-900">{inClass.topicsLabel}</h3>
              <ol className="grid grid-cols-2 gap-3">
                {inClass.topics.map((topic, index) => (
                  <li
                    key={topic.title}
                    className="flex items-baseline gap-3 rounded-lg border border-sky-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="text-sm font-semibold tabular-nums text-sky-600">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-gray-900">{topic.title}</span>
                      <span className="block text-sm text-sky-700">{topic.titleEs}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
