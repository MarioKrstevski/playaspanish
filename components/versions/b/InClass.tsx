import { inClass } from '@/lib/content'
import { cn } from '@/lib/utils'
import { TileBand } from './Motifs'
import { Lockup, anchor, container } from './ui'
import s from './b.module.css'

// Glazes for the topic tiles, laid so no two neighbours match: a plain cycle
// in two columns (phone), the second row shifted by one in three columns.
const glazes = [
  'bg-[#fbf1e2] text-[#16123b]',
  'bg-[#ffc233] text-[#16123b]',
  'bg-[#d6006c] text-[#fff8ec]',
  'bg-[#fbf1e2] text-[#16123b] sm:bg-[#d6006c] sm:text-[#fff8ec]',
  'bg-[#ffc233] text-[#16123b] sm:bg-[#fbf1e2]',
  'bg-[#d6006c] text-[#fff8ec] sm:bg-[#ffc233] sm:text-[#16123b]'
]

export function InClass() {
  return (
    <section id="in-class" className={cn(s.onDark, anchor, 'bg-[#1b3fd0] text-[#fff8ec]')}>
      <TileBand id="b-tiles-in-class" />

      <div className={cn(container, 'pb-20 pt-14 lg:pb-28 lg:pt-20')}>
        <Lockup es={inClass.titleEs} en={inClass.title} esClassName="text-[#ffc233]" />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="max-w-[16ch] text-[clamp(2.1rem,3.9vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.015em]">
              {inClass.lead}
            </p>
            <p className={cn(s.serif, 'mt-4 text-2xl text-[#ffc233] lg:text-[1.75rem]')}>
              {inClass.leadNote}
            </p>
            <p className="mt-7 max-w-[56ch] text-lg leading-relaxed">{inClass.body}</p>
          </div>

          <div className="lg:col-span-6">
            <h3 className={cn(s.serif, 'text-2xl lg:text-[1.75rem]')}>{inClass.topicsLabel}</h3>
            <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3">
              {inClass.topics.map((t, i) => (
                <li
                  key={t.title}
                  className={cn(
                    s.tile,
                    glazes[i % glazes.length],
                    'flex min-h-[9.5rem] flex-col justify-end px-5 pb-5 pt-8 sm:aspect-square sm:min-h-0'
                  )}
                >
                  <span
                    lang="es"
                    className={cn(s.display, 'text-[clamp(1.55rem,2.5vw,2.15rem)] leading-[0.95]')}
                  >
                    {t.titleEs}
                  </span>
                  <span className="mt-1.5 font-semibold">{t.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
