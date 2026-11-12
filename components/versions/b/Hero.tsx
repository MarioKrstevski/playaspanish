import { hero, teachers } from '@/lib/content'
import { TeacherPhoto } from '@/components/teachers/TeacherPhoto'
import { cn } from '@/lib/utils'
import { Seal } from './Motifs'
import { Cta } from './ui'
import s from './b.module.css'

export function Hero() {
  const angelica = teachers[0]
  // "español" is the word the whole page is about: it takes the marigold
  const parts = hero.headlineEs.split(/(español)/i)

  return (
    <section id="hero" className={cn(s.onDark, 'bg-[#d6006c] text-[#fff8ec]')}>
      <div className="grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="px-5 pb-12 pt-[5.5rem] sm:px-8 md:pb-16 md:pr-10 md:pt-24 lg:pb-24 lg:pl-14 lg:pr-12 lg:pt-28 2xl:pl-[max(3.5rem,calc((100vw-1440px)/2+3.5rem))]">
          <h1>
            <span
              lang="es"
              className={cn(
                s.display,
                'block text-[clamp(3.4rem,10.4vw,4.75rem)] md:text-[clamp(3.75rem,8.4vw,8.25rem)]'
              )}
            >
              {parts.map((part, i) =>
                /^español$/i.test(part) ? (
                  <span key={i} className="text-[#ffc233]">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </span>
            <span
              className={cn(s.serif, 'mt-5 block text-[clamp(1.65rem,3.1vw,2.6rem)] leading-[1.1]')}
            >
              {hero.headline}
            </span>
          </h1>

          <p className="mt-7 max-w-[30ch] text-xl font-bold leading-snug lg:text-2xl">{hero.sub}</p>
          <p className="mt-2 max-w-[40ch] text-lg leading-snug">{hero.promise}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Cta>{hero.cta}</Cta>
            <a
              href="#buffet"
              className="text-lg font-semibold underline decoration-[#ffc233] decoration-[3px] underline-offset-[6px] hover:decoration-[#fff8ec]"
            >
              See who it’s for
            </a>
          </div>
        </div>

        {/* Cobalt plane: Angelica, named as the founder from the first screen */}
        <div className="relative flex items-end gap-5 bg-[#1b3fd0] px-5 py-8 sm:px-8 md:flex-col md:items-stretch md:justify-end md:gap-6 md:pb-16 md:pt-24 lg:px-12 lg:pt-28">
          <Seal className="absolute left-0 top-[42%] z-10 hidden -translate-x-1/2 -rotate-[9deg] lg:grid">
            {angelica.badge?.short}
          </Seal>
          <div className="relative aspect-[4/5] w-[42%] max-w-[26rem] flex-none overflow-hidden bg-[#16123b] md:w-full">
            <TeacherPhoto
              teacher="angelica"
              priority
              sizes="(max-width: 768px) 42vw, 420px"
            />
          </div>
          <p className="min-w-0 pb-1">
            <span className={cn(s.display, 'block text-[clamp(1.9rem,3.4vw,3rem)]')}>
              {angelica.name}
            </span>
            <span className={cn(s.serif, 'mt-1.5 block text-xl text-[#ffc233] lg:text-2xl')}>
              {angelica.role}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
