import { cn } from '@/lib/utils'
import { buffet, course, inClass } from '@/lib/content'
import { Moon } from './Moon'
import s from './d.module.css'

// Violet day. Who the lessons are for, set as three plain sentences a visitor
// can find themselves in, then the two dishes on the menu.
export function Buffet() {
  return (
    <section id="buffet" data-zone="violet" data-tone="light" className={s.zone}>
      <div className={cn(s.wrap, 'pb-20 pt-12 md:pb-28 md:pt-16')}>
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className={s.h2}>{buffet.title}</h2>
            <p lang="es" className={cn(s.hand, 'mt-3 -rotate-2 text-4xl text-[color:var(--accent)] md:text-5xl')}>
              {buffet.titleEs}
            </p>
            <p className={cn(s.lede, 'mt-7 max-w-[34ch]')}>{buffet.intro}</p>
          </div>
          <ul className="border-t-2 border-[color:var(--fg)] lg:col-span-7">
            {buffet.audiences.map((audience) => (
              <li
                key={audience.title}
                className="grid gap-x-8 gap-y-1.5 border-b border-[color:var(--line)] py-6 sm:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] sm:items-baseline md:py-8"
              >
                <h3 className={cn(s.display, 'text-[1.7rem] font-bold leading-[1.08] md:text-[2.1rem]')}>
                  {audience.title}
                </h3>
                <p className="text-[color:var(--muted)]">{audience.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
          {buffet.courses.map((item, index) => (
            <li
              key={item.title}
              data-tone="dark"
              className="relative overflow-hidden rounded-[28px] bg-[var(--violet-night)] p-8 text-white md:p-10"
            >
              <Moon
                phase={index === 0 ? 'waxing-crescent' : 'waxing-gibbous'}
                className="absolute -right-8 -top-8 h-36 w-36 opacity-90"
              />
              <p lang="es" className={cn(s.hand, 'pr-24 text-3xl text-[color:var(--violet-soft)] md:text-4xl')}>
                {item.titleEs}
              </p>
              <h3 className={cn(s.display, 'mt-2 pr-20 text-[1.7rem] font-bold leading-[1.08] md:text-[2.1rem]')}>
                {item.title}
              </h3>
              <p className="mt-4 max-w-[36ch] text-[color:var(--muted)]">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Indigo night. Idioma and cultura as two discs passing over each other: where
// they overlap is the lesson.
export function Course() {
  return (
    <section id="course" data-zone="indigo" data-tone="dark" className={s.zone}>
      <div className={cn(s.wrap, 'grid gap-x-14 gap-y-12 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-12')}>
        <div className="lg:col-span-5">
          <h2 className={s.h2}>{course.title}</h2>
          <p className={cn(s.lede, 'mt-6 max-w-[30ch]')}>{course.sub}</p>
          <div className={cn(s.eclipse, 'mt-10 md:mt-14')}>
            <div lang="es" className={cn(s.disc, s.discIdioma, s.hand)}>
              Idioma
            </div>
            <div lang="es" className={cn(s.disc, s.discCultura, s.hand)}>
              Cultura
            </div>
          </div>
        </div>
        <ol className="self-center lg:col-span-7">
          {course.pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-t border-[color:var(--line)] py-7 first:border-t-0 first:pt-0 md:gap-x-8 md:py-9"
            >
              <span
                aria-hidden
                className={cn(s.display, 'w-[1.1em] text-5xl font-extrabold leading-none text-[color:var(--accent)] md:text-6xl')}
              >
                {index + 1}
              </span>
              <div>
                <h3 className={cn(s.display, 'text-2xl font-bold leading-tight md:text-[1.75rem]')}>
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[color:var(--muted)]">{pillar.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// Indigo day. The six things a class talks about, each under an arch of a
// courtyard arcade, lit and unlit in turn.
export function InClass() {
  return (
    <section id="in-class" data-zone="indigo" data-tone="light" className={s.zone}>
      <div className={cn(s.wrap, 'grid gap-x-14 gap-y-12 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-12')}>
        <div className="lg:col-span-5">
          <h2 className={s.h2}>{inClass.title}</h2>
          <p lang="es" className={cn(s.hand, 'mt-3 -rotate-2 text-4xl text-[color:var(--accent)] md:text-5xl')}>
            {inClass.titleEs}
          </p>
          <p className={cn(s.display, 'mt-8 text-2xl font-bold leading-tight md:text-[1.75rem]')}>
            {inClass.lead}
          </p>
          <p className="mt-1 text-lg text-[color:var(--accent)]">{inClass.leadNote}</p>
          <p className="mt-5 max-w-[46ch] text-[color:var(--muted)]">{inClass.body}</p>
        </div>
        <div className="lg:col-span-7 lg:pt-3">
          <h3 className={cn(s.display, 'mb-6 text-xl font-bold')}>{inClass.topicsLabel}</h3>
          <ul className={s.arcade}>
            {inClass.topics.map((topic, index) => (
              <li key={topic.title} className={s.bay}>
                <div className={s.arch}>
                  <span className={cn(s.display, 'text-lg font-bold leading-tight md:text-xl')}>
                    {topic.title}
                  </span>
                  <span lang="es" className={cn(s.hand, s.archEs, 'text-2xl')}>
                    {topic.titleEs}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
