'use client'

import { Briefcase, Globe2, MessageCircle, Plane, Stethoscope } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { buffet } from '@/lib/content'
import { ConstellationCorner } from '@/components/decor/CornerArt'

const audienceIcons = [Globe2, Plane, Briefcase]
const courseIcons = [MessageCircle, Stethoscope]

// Version E: "who it's for" comes first, in the indigo zone right under the
// hero, so a visitor finds themselves before anything else.
export function BuffetIndigo() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: menuRef, isVisible: menuVisible } = useScrollAnimation()

  return (
    <section id="buffet" className="relative overflow-hidden bg-indigo-950 py-24 text-indigo-50">
      <ConstellationCorner className="pointer-events-none absolute bottom-10 right-8 hidden w-72 lg:block" />
      <div className="container relative mx-auto px-4">
        <div
          ref={titleRef}
          className={cn('animate-on-scroll mb-12 text-center', titleVisible && 'visible')}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-indigo-300">{buffet.titleEs}</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{buffet.title}</h2>
          <p className="mx-auto max-w-2xl text-xl text-indigo-200">{buffet.intro}</p>
        </div>

        <div
          ref={cardsRef}
          className={cn(
            'animate-on-scroll mx-auto grid max-w-5xl gap-6 md:grid-cols-3',
            cardsVisible && 'visible'
          )}
        >
          {buffet.audiences.map((audience, index) => {
            const Icon = audienceIcons[index]
            return (
              <div
                key={audience.title}
                className="rounded-lg border border-indigo-800 bg-indigo-900/40 p-6"
              >
                <Icon className="mb-4 h-7 w-7 text-indigo-300" aria-hidden />
                <h3 className="mb-2 text-xl font-semibold text-white">{audience.title}</h3>
                <p className="leading-relaxed text-indigo-200">{audience.description}</p>
              </div>
            )
          })}
        </div>

        <div
          ref={menuRef}
          className={cn(
            'animate-on-scroll mx-auto mt-6 grid max-w-5xl gap-6 md:grid-cols-2',
            menuVisible && 'visible'
          )}
        >
          {buffet.courses.map((item, index) => {
            const Icon = courseIcons[index]
            return (
              <div key={item.title} className="flex gap-4 rounded-lg bg-indigo-100 p-6 text-indigo-950">
                <Icon className="mt-1 h-7 w-7 flex-shrink-0 text-indigo-600" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-indigo-600">{item.titleEs}</p>
                  <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-indigo-900">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
