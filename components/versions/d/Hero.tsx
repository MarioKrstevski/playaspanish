import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { hero, teachers } from '@/lib/content'
import { Stars } from '@/components/hero/Stars'
import { TeacherPhoto, TeacherPhotoSwitcher } from '@/components/teachers/TeacherPhoto'
import { LensHeadline } from './LensHeadline'
import s from './d.module.css'

// Crown, violet night. Angelica is the full moon of this sky; a smaller moon
// drifts over the headline and turns it into Spanish.
export function Hero() {
  const angelica = teachers[0]
  return (
    <section id="hero" data-zone="violet" data-tone="dark" className={cn(s.zone, s.heroSky)}>
      <Stars className="pointer-events-none absolute inset-x-0 top-0 h-[120%]" />
      <div
        className={cn(
          s.wrap,
          'relative grid items-center gap-x-10 gap-y-9 pb-6 pt-[128px]',
          'lg:min-h-[calc(100svh-150px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:pb-10 lg:pt-[132px]'
        )}
      >
        <div className="order-2 lg:order-1">
          <LensHeadline />
          <p className="mt-5 max-w-[26ch] text-xl leading-snug text-[color:var(--muted)] md:text-2xl">
            {hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#contact" className={s.cta}>
              {hero.cta}
              <ArrowDown aria-hidden className="h-5 w-5" />
            </a>
            <p className="max-w-[22ch] text-base leading-snug text-[color:var(--muted)]">{hero.promise}</p>
          </div>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <figure className="relative w-[min(58vw,236px)] lg:w-[min(33vw,430px)]">
            <span aria-hidden className={s.orbit} />
            <div className={s.portrait}>
              <TeacherPhoto teacher="angelica" priority sizes="(max-width: 1023px) 58vw, 430px" />
            </div>
            <figcaption className="absolute inset-x-0 -bottom-7 flex flex-col items-center lg:-left-16 lg:right-auto lg:items-start">
              <span
                className={cn(
                  s.hand,
                  s.nameShadow,
                  '-rotate-3 text-[2.6rem] text-white lg:text-[3.6rem]'
                )}
              >
                {angelica.name}
              </span>
              {angelica.badge && (
                <span className="mt-1 whitespace-nowrap rounded-full bg-[var(--moon)] px-3.5 py-1.5 text-sm font-semibold leading-none text-[color:var(--violet-night)] shadow-lg">
                  {angelica.badge.long}
                </span>
              )}
            </figcaption>
          </figure>
          {/* TEMPORARY (PLA-18): try candidate headshots */}
          <TeacherPhotoSwitcher teacher="angelica" className="mt-12" />
        </div>
      </div>
    </section>
  )
}
