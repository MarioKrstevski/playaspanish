'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { inClass } from '@/lib/content'

// Continues the purple "Course" zone: what a class is actually like.
export function InClass() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()
  const { ref: topicsRef, isVisible: topicsVisible } = useScrollAnimation()

  return (
    <section id="in-class" className="relative pb-24 bg-purple-950 text-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto border-t border-purple-800 pt-16 grid md:grid-cols-2 gap-12 items-start">
          <div ref={textRef} className={cn('animate-slide-left', textVisible && 'visible')}>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3">
              {inClass.titleEs}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{inClass.title}</h2>
            <p className="text-2xl font-semibold text-white">
              {inClass.lead}{' '}
              <span className="block text-lg font-normal text-purple-200 mt-1">
                {inClass.leadNote}
              </span>
            </p>
            <p className="text-purple-200 leading-relaxed mt-6">{inClass.body}</p>
          </div>

          <div
            ref={topicsRef}
            className={cn('animate-slide-right', topicsVisible && 'visible')}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-xl font-semibold text-white mb-5">{inClass.topicsLabel}</h3>
            <ol className="grid grid-cols-2 gap-3">
              {inClass.topics.map((topic, index) => (
                <li
                  key={topic.title}
                  className="flex items-baseline gap-3 rounded-lg border border-purple-800 bg-purple-900/40 px-4 py-3"
                >
                  <span className="text-sm font-semibold text-purple-300 tabular-nums">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{topic.title}</span>
                    <span className="block text-sm text-purple-300">{topic.titleEs}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
