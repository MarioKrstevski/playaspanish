'use client'

import { Briefcase, Globe2, MessageCircle, Plane, Stethoscope } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { buffet } from '@/lib/content'

const audienceIcons = [Globe2, Plane, Briefcase]
const courseIcons = [MessageCircle, Stethoscope]

// Continues the sky "Why Spanish" zone: who the courses are for, and what is
// on the menu. From Angelica's "Buffet lingüístico" slide.
export function LanguageBuffet() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: menuRef, isVisible: menuVisible } = useScrollAnimation()

  return (
    <section id="buffet" className="relative pb-24 bg-sky-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll text-center mb-12', titleVisible && 'visible')}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-sky-700 mb-3">{buffet.titleEs}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{buffet.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{buffet.intro}</p>
        </div>

        <div
          ref={cardsRef}
          className={cn(
            'animate-on-scroll grid md:grid-cols-3 gap-6 max-w-5xl mx-auto',
            cardsVisible && 'visible'
          )}
        >
          {buffet.audiences.map((audience, index) => {
            const Icon = audienceIcons[index]
            return (
              <div
                key={audience.title}
                className="bg-white rounded-lg border border-sky-100 shadow-sm p-6"
              >
                <Icon className="h-7 w-7 text-sky-600 mb-4" aria-hidden />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600 leading-relaxed">{audience.description}</p>
              </div>
            )
          })}
        </div>

        <div
          ref={menuRef}
          className={cn(
            'animate-on-scroll grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6',
            menuVisible && 'visible'
          )}
        >
          {buffet.courses.map((item, index) => {
            const Icon = courseIcons[index]
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg bg-sky-700 text-white p-6 shadow-sm"
              >
                <Icon className="h-7 w-7 flex-shrink-0 text-sky-200 mt-1" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-200">{item.titleEs}</p>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sky-100 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
