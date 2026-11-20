'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { buffet } from '@/lib/content'
import { display } from '@/lib/fonts'

const DISPLAY = '[font-family:var(--font-d-display),var(--font-inter),sans-serif] tracking-[-0.02em]'
const HAND = '[font-family:var(--font-caveat)] font-semibold leading-none'

// Continues the sky "Why Spanish" zone: who the courses are for, and what is
// on the menu. From Angelica's "Buffet lingüístico" slide. Version D's type:
// the head runs across the full width, the three audiences follow as compact
// ruled rows, the two courses as dark cards underneath.
export function LanguageBuffet() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: menuRef, isVisible: menuVisible } = useScrollAnimation()

  return (
    <section id="buffet" className={cn(display.variable, 'relative pt-12 pb-12 md:pb-16 bg-sky-50 text-sky-950')}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={headRef} className={cn('animate-on-scroll', headVisible && 'visible')}>
            <h2
              className={cn(
                DISPLAY,
                'font-bold text-[clamp(2.25rem,5.4vw,4.25rem)] leading-[1.02] tracking-[-0.025em] [text-wrap:balance]'
              )}
            >
              {buffet.title}
            </h2>
            <div className="mt-4 grid gap-x-12 gap-y-5 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
              <p lang="es" className={cn(HAND, '-rotate-2 text-4xl md:text-5xl text-sky-700')}>
                {buffet.titleEs}
              </p>
              <p className="max-w-[56ch] text-lg md:text-xl leading-relaxed text-sky-900/75">{buffet.intro}</p>
            </div>

            <ul className="mt-12 border-t-2 border-sky-950">
              {buffet.audiences.map((audience) => (
                <li
                  key={audience.title}
                  className="grid gap-x-8 gap-y-1 border-b border-sky-200 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-baseline md:py-5"
                >
                  <h3 className={cn(DISPLAY, 'text-2xl font-bold leading-tight md:text-[1.75rem]')}>
                    {audience.title}
                  </h3>
                  <p className="text-sky-900/75 leading-relaxed md:text-lg">{audience.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div ref={menuRef} className={cn('animate-on-scroll', menuVisible && 'visible')}>
            <ul className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
              {buffet.courses.map((item) => (
                <li key={item.title} className="rounded-[28px] bg-sky-900 p-8 text-white md:p-10">
                  <p lang="es" className={cn(HAND, 'text-3xl md:text-4xl text-sky-300')}>
                    {item.titleEs}
                  </p>
                  <h3 className={cn(DISPLAY, 'mt-2 text-[1.7rem] font-bold leading-[1.08] md:text-[2.1rem]')}>
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[36ch] text-sky-100/80 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
